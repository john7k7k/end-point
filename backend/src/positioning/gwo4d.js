// MATLAB-style four-state GWO: xyz + one COMMON additive range bias.
// Raw UWB ranges only. Attitude is handled independently by the IMU pipeline.
export const gwoAnchors = [[0,0,0],[20,0,0],[0,12,0],[20,12,0],
  [0,0,2.5],[20,0,2.5],[0,12,2.5],[20,12,2.5]];
const envNumber = (key, fallback) => process.env[key] == null ? fallback : Number(process.env[key]);
export const gwoSettings = Object.freeze({ population: 100, iterations: 100,
  biasMin: envNumber('GWO4D_BIAS_MIN', 0), biasMax: envNumber('GWO4D_BIAS_MAX', .6),
  rangeSigma: .08, positionFloorSigma: .08, minimumAnchors: 5 });
if (!Number.isFinite(gwoSettings.biasMin) || !Number.isFinite(gwoSettings.biasMax)
    || gwoSettings.biasMin < 0 || gwoSettings.biasMax <= gwoSettings.biasMin || gwoSettings.biasMax > 10) {
  throw new Error('Invalid GWO4D_BIAS_MIN/MAX: require 0 <= min < max <= 10 metres');
}
export function cleanGwoRanges(ranges) {
  // Repeated station IDs must not masquerade as independent measurements.
  const distinct = new Map();
  for (const r of Array.isArray(ranges) ? ranges : []) {
    if (Number.isInteger(r?.stationId) && gwoAnchors[r.stationId] && Number.isFinite(r.distance) && r.distance > 0) {
      distinct.set(r.stationId, { stationId: r.stationId, distance: r.distance });
    }
  }
  return [...distinct.values()].sort((a,b) => a.stationId-b.stationId);
}
function randomFor(ranges) {
  // Measurement-keyed PRNG makes identical raw data replay exactly reproducible.
  let seed = 2166136261;
  for (const char of JSON.stringify(ranges)) seed = Math.imul(seed ^ char.charCodeAt(0),16777619) >>> 0;
  return () => {
    seed = (seed + 0x6d2b79f5) >>> 0;
    let x = seed; x = Math.imul(x ^ x >>> 15, x | 1);
    x ^= x + Math.imul(x ^ x >>> 7, x | 61);
    return ((x ^ x >>> 14) >>> 0) / 4294967296;
  };
}
export function rangeCost(state, ranges) {
  let sum = 0;
  for (const {stationId,distance} of ranges) {
    const a = gwoAnchors[stationId], dx=state[0]-a[0],dy=state[1]-a[1],dz=state[2]-a[2];
    const r=Math.sqrt(dx*dx+dy*dy+dz*dz)+state[3]-distance; sum+=r*r;
  }
  return sum;
}
function inverse4(input) {
  const a = input.map((r,i) => [...r,...[0,1,2,3].map(j => +(i===j))]);
  for(let c=0;c<4;c++) {
    let pivot=c; for(let r=c+1;r<4;r++) if(Math.abs(a[r][c])>Math.abs(a[pivot][c])) pivot=r;
    if(Math.abs(a[pivot][c])<1e-10) return null;
    [a[c],a[pivot]]=[a[pivot],a[c]];
    const d=a[c][c];for(let j=0;j<8;j++) a[c][j]/=d;
    for(let r=0;r<4;r++) if(r!==c){const k=a[r][c];for(let j=0;j<8;j++)a[r][j]-=k*a[c][j];}
  }
  return a.map(r=>r.slice(4));
}
export function solveGwo4d(input, settings=gwoSettings) {
  const ranges=cleanGwoRanges(input);
  const common={ algorithm:'gwo4d', validAnchorCount:ranges.length, biasBounds:[settings.biasMin,settings.biasMax],
    population:settings.population,iterations:settings.iterations,initialisation:'uniform',aSchedule:'quadratic' };
  if(ranges.length<settings.minimumAnchors) return {...common,status:'insufficient_ranges'};
  const random=randomFor(ranges), low=[0,0,0,settings.biasMin],high=[20,12,2.8,settings.biasMax];
  const population=Array.from({length:settings.population},()=>low.map((v,j)=>v+(high[j]-v)*random()));
  const leaders=Array.from({length:3},()=>[0,0,0,0]), scores=[Infinity,Infinity,Infinity];
  for(let t=1;t<=settings.iterations;t++) {
    for(const p of population) {
      for(let j=0;j<4;j++)p[j]=Math.max(low[j],Math.min(high[j],p[j]));
      const cost=rangeCost(p,ranges);
      if(cost<scores[0]){scores[2]=scores[1];leaders[2]=[...leaders[1]];scores[1]=scores[0];leaders[1]=[...leaders[0]];scores[0]=cost;leaders[0]=[...p];}
      else if(cost>scores[0] && cost<scores[1]){scores[2]=scores[1];leaders[2]=[...leaders[1]];scores[1]=cost;leaders[1]=[...p];}
      else if(cost>scores[1] && cost<scores[2]){scores[2]=cost;leaders[2]=[...p];}
    }
    const a=2*(1-(t/settings.iterations)**2);
    for(const p of population) for(let j=0;j<4;j++) {
      let sum=0;
      for(let k=0;k<3;k++){const A=2*a*random()-a,C=2*random();sum+=leaders[k][j]-A*Math.abs(C*leaders[k][j]-p[j]);}
      p[j]=sum/3;
    }
  }
  const state=leaders[0], information=Array.from({length:4},()=>[0,0,0,0]);
  for(const {stationId} of ranges) {
    const delta=state.slice(0,3).map((v,j)=>v-gwoAnchors[stationId][j]);
    const length=Math.hypot(...delta)||1e-9;
    const h=[...delta.map(v=>v/length),1];
    for(let r=0;r<4;r++)for(let c=0;c<4;c++)information[r][c]+=h[r]*h[c]/settings.rangeSigma**2;
  }
  const covariance=inverse4(information);
  if(!covariance || covariance.some(r=>r.some(v=>!Number.isFinite(v)))) return {...common,status:'degenerate_geometry'};
  return {...common,status:'ready',position:state.slice(0,3),biasMeters:state[3],objective:scores[0],
    residualRmsMeters:Math.sqrt(scores[0]/ranges.length),
    positionVariance:[0,1,2].map(i=>Math.max(0,covariance[i][i])+settings.positionFloorSigma**2)};
}
