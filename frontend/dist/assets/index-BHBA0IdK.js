(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Mt={},Ks=[],ri=()=>{},Bd=()=>!1,Da=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),La=t=>t.startsWith("onUpdate:"),Yt=Object.assign,mu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Tg=Object.prototype.hasOwnProperty,pt=(t,e)=>Tg.call(t,e),Ze=Array.isArray,Zs=t=>so(t)==="[object Map]",pr=t=>so(t)==="[object Set]",xf=t=>so(t)==="[object Date]",nt=t=>typeof t=="function",Lt=t=>typeof t=="string",ui=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",zd=t=>(gt(t)||nt(t))&&nt(t.then)&&nt(t.catch),Hd=Object.prototype.toString,so=t=>Hd.call(t),Ag=t=>so(t).slice(8,-1),Vd=t=>so(t)==="[object Object]",gu=t=>Lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Br=pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wg=/-\w/g,On=Ia(t=>t.replace(wg,e=>e.slice(1).toUpperCase())),Rg=/\B([A-Z])/g,ws=Ia(t=>t.replace(Rg,"-$1").toLowerCase()),kd=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),il=Ia(t=>t?`on${kd(t)}`:""),ei=(t,e)=>!Object.is(t,e),Zo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Gd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Na=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sf;const Ua=()=>Sf||(Sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xr(t){if(Ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Lt(i)?Lg(i):Xr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Lt(t)||gt(t))return t}const Cg=/;(?![^(]*\))/g,Pg=/:([^]+)/,Dg=/\/\*[^]*?\*\//g;function Lg(t){const e={};return t.replace(Dg,"").split(Cg).forEach(n=>{if(n){const i=n.split(Pg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zn(t){let e="";if(Lt(t))e=t;else if(Ze(t))for(let n=0;n<t.length;n++){const i=Zn(t[n]);i&&(e+=i+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ig="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ng=pu(Ig);function Wd(t){return!!t||t===""}function Ug(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=mr(t[i],e[i]);return n}function mr(t,e){if(t===e)return!0;let n=xf(t),i=xf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=ui(t),i=ui(e),n||i)return t===e;if(n=Ze(t),i=Ze(e),n||i)return n&&i?Ug(t,e):!1;if(n=gt(t),i=gt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!mr(t[o],e[o]))return!1}}return String(t)===String(e)}function _u(t,e){return t.findIndex(n=>mr(n,e))}const Xd=t=>!!(t&&t.__v_isRef===!0),Ne=t=>Lt(t)?t:t==null?"":Ze(t)||gt(t)&&(t.toString===Hd||!nt(t.toString))?Xd(t)?Ne(t.value):JSON.stringify(t,qd,2):String(t),qd=(t,e)=>Xd(e)?qd(t,e.value):Zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[sl(i,r)+" =>"]=s,n),{})}:pr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>sl(n))}:ui(e)?sl(e):gt(e)&&!Ze(e)&&!Vd(e)?String(e):e,sl=(t,e="")=>{var n;return ui(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class Og{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Wt&&(Wt.active?(this.parent=Wt,this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){if(this._on>0&&--this._on===0){if(Wt===this)Wt=this.prevScope;else{let e=Wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Fg(){return Wt}let Tt;const rl=new WeakSet;class Yd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&(Wt.active?Wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rl.has(this)&&(rl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yf(this),Zd(this);const e=Tt,n=Fn;Tt=this,Fn=!0;try{return this.fn()}finally{Jd(this),Tt=e,Fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Su(e);this.deps=this.depsTail=void 0,yf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ic(this)&&this.run()}get dirty(){return ic(this)}}let $d=0,zr,Hr;function Kd(t,e=!1){if(t.flags|=8,e){t.next=Hr,Hr=t;return}t.next=zr,zr=t}function vu(){$d++}function xu(){if(--$d>0)return;if(Hr){let e=Hr;for(Hr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zr;){let e=zr;for(zr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Zd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jd(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Su(i),Bg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function ic(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qr)||(t.globalVersion=qr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ic(t))))return;t.flags|=2;const e=t.dep,n=Tt,i=Fn;Tt=t,Fn=!0;try{Zd(t);const s=t.fn(t._value);(e.version===0||ei(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Tt=n,Fn=i,Jd(t),t.flags&=-3}}function Su(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Su(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Bg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Fn=!0;const Qd=[];function Ci(){Qd.push(Fn),Fn=!1}function Pi(){const t=Qd.pop();Fn=t===void 0?!0:t}function yf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Tt;Tt=void 0;try{e()}finally{Tt=n}}}let qr=0;class zg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Tt||!Fn||Tt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Tt)n=this.activeLink=new zg(Tt,this),Tt.deps?(n.prevDep=Tt.depsTail,Tt.depsTail.nextDep=n,Tt.depsTail=n):Tt.deps=Tt.depsTail=n,ep(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Tt.depsTail,n.nextDep=void 0,Tt.depsTail.nextDep=n,Tt.depsTail=n,Tt.deps===n&&(Tt.deps=i)}return n}trigger(e){this.version++,qr++,this.notify(e)}notify(e){vu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xu()}}}function ep(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ep(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const sc=new WeakMap,_s=Symbol(""),rc=Symbol(""),Yr=Symbol("");function Qt(t,e,n){if(Fn&&Tt){let i=sc.get(t);i||sc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new yu),s.map=i,s.key=n),s.track()}}function Mi(t,e,n,i,s,r){const o=sc.get(t);if(!o){qr++;return}const a=l=>{l&&l.trigger()};if(vu(),e==="clear")o.forEach(a);else{const l=Ze(t),c=l&&gu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Yr||!ui(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Yr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(_s)),Zs(t)&&a(o.get(rc)));break;case"delete":l||(a(o.get(_s)),Zs(t)&&a(o.get(rc)));break;case"set":Zs(t)&&a(o.get(_s));break}}xu()}function Ps(t){const e=dt(t);return e===t?e:(Qt(e,"iterate",Yr),Pn(t)?e:e.map(zn))}function Oa(t){return Qt(t=dt(t),"iterate",Yr),t}function Jn(t,e){return Di(t)?ir(vs(t)?zn(e):e):zn(e)}const Hg={__proto__:null,[Symbol.iterator](){return ol(this,Symbol.iterator,t=>Jn(this,t))},concat(...t){return Ps(this).concat(...t.map(e=>Ze(e)?Ps(e):e))},entries(){return ol(this,"entries",t=>(t[1]=Jn(this,t[1]),t))},every(t,e){return di(this,"every",t,e,void 0,arguments)},filter(t,e){return di(this,"filter",t,e,n=>n.map(i=>Jn(this,i)),arguments)},find(t,e){return di(this,"find",t,e,n=>Jn(this,n),arguments)},findIndex(t,e){return di(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return di(this,"findLast",t,e,n=>Jn(this,n),arguments)},findLastIndex(t,e){return di(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return di(this,"forEach",t,e,void 0,arguments)},includes(...t){return al(this,"includes",t)},indexOf(...t){return al(this,"indexOf",t)},join(t){return Ps(this).join(t)},lastIndexOf(...t){return al(this,"lastIndexOf",t)},map(t,e){return di(this,"map",t,e,void 0,arguments)},pop(){return yr(this,"pop")},push(...t){return yr(this,"push",t)},reduce(t,...e){return Mf(this,"reduce",t,e)},reduceRight(t,...e){return Mf(this,"reduceRight",t,e)},shift(){return yr(this,"shift")},some(t,e){return di(this,"some",t,e,void 0,arguments)},splice(...t){return yr(this,"splice",t)},toReversed(){return Ps(this).toReversed()},toSorted(t){return Ps(this).toSorted(t)},toSpliced(...t){return Ps(this).toSpliced(...t)},unshift(...t){return yr(this,"unshift",t)},values(){return ol(this,"values",t=>Jn(this,t))}};function ol(t,e,n){const i=Oa(t),s=i[e]();return i!==t&&!Pn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const Vg=Array.prototype;function di(t,e,n,i,s,r){const o=Oa(t),a=o!==t&&!Pn(t),l=o[e];if(l!==Vg[e]){const f=l.apply(t,r);return a?zn(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Jn(t,f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Mf(t,e,n,i){const s=Oa(t),r=s!==t&&!Pn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Jn(t,c)),n.call(this,c,Jn(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?Jn(t,l):l}function al(t,e,n){const i=dt(t);Qt(i,"iterate",Yr);const s=i[e](...n);return(s===-1||s===!1)&&bu(n[0])?(n[0]=dt(n[0]),i[e](...n)):s}function yr(t,e,n=[]){Ci(),vu();const i=dt(t)[e].apply(t,n);return xu(),Pi(),i}const kg=pu("__proto__,__v_isRef,__isVue"),tp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ui));function Gg(t){ui(t)||(t=String(t));const e=dt(this);return Qt(e,"has",t),e.hasOwnProperty(t)}class np{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Qg:op:r?rp:sp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!s){let l;if(o&&(l=Hg[n]))return l;if(n==="hasOwnProperty")return Gg}const a=Reflect.get(e,n,tn(e)?e:i);if((ui(n)?tp.has(n):kg(n))||(s||Qt(e,"get",n),r))return a;if(tn(a)){const l=o&&gu(n)?a:a.value;return s&&gt(l)?ac(l):l}return gt(a)?s?ac(a):ro(a):a}}class ip extends np{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Ze(e)&&gu(n);if(!this._isShallow){const c=Di(r);if(!Pn(i)&&!Di(i)&&(r=dt(r),i=dt(i)),!o&&tn(r)&&!tn(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:pt(e,n),l=Reflect.set(e,n,i,tn(e)?e:s);return e===dt(s)&&l&&(a?ei(i,r)&&Mi(e,"set",n,i):Mi(e,"add",n,i)),l}deleteProperty(e,n){const i=pt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Mi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ui(n)||!tp.has(n))&&Qt(e,"has",n),i}ownKeys(e){return Qt(e,"iterate",Ze(e)?"length":_s),Reflect.ownKeys(e)}}class Wg extends np{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xg=new ip,qg=new Wg,Yg=new ip(!0);const oc=t=>t,xo=t=>Reflect.getPrototypeOf(t);function $g(t,e,n){return function(...i){const s=this.__v_raw,r=dt(s),o=Zs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?oc:e?ir:zn;return!e&&Qt(r,"iterate",l?rc:_s),Yt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function So(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Kg(t,e){const n={get(s){const r=this.__v_raw,o=dt(r),a=dt(s);t||(ei(s,a)&&Qt(o,"get",s),Qt(o,"get",a));const{has:l}=xo(o),c=e?oc:t?ir:zn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Qt(dt(s),"iterate",_s),s.size},has(s){const r=this.__v_raw,o=dt(r),a=dt(s);return t||(ei(s,a)&&Qt(o,"has",s),Qt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=dt(a),c=e?oc:t?ir:zn;return!t&&Qt(l,"iterate",_s),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Yt(n,t?{add:So("add"),set:So("set"),delete:So("delete"),clear:So("clear")}:{add(s){const r=dt(this),o=xo(r),a=dt(s),l=!e&&!Pn(s)&&!Di(s)?a:s;return o.has.call(r,l)||ei(s,l)&&o.has.call(r,s)||ei(a,l)&&o.has.call(r,a)||(r.add(l),Mi(r,"add",l,l)),this},set(s,r){!e&&!Pn(r)&&!Di(r)&&(r=dt(r));const o=dt(this),{has:a,get:l}=xo(o);let c=a.call(o,s);c||(s=dt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ei(r,u)&&Mi(o,"set",s,r):Mi(o,"add",s,r),this},delete(s){const r=dt(this),{has:o,get:a}=xo(r);let l=o.call(r,s);l||(s=dt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Mi(r,"delete",s,void 0),c},clear(){const s=dt(this),r=s.size!==0,o=s.clear();return r&&Mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$g(s,t,e)}),n}function Mu(t,e){const n=Kg(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(pt(n,s)&&s in i?n:i,s,r)}const Zg={get:Mu(!1,!1)},Jg={get:Mu(!1,!0)},jg={get:Mu(!0,!1)};const sp=new WeakMap,rp=new WeakMap,op=new WeakMap,Qg=new WeakMap;function e_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ro(t){return Di(t)?t:Eu(t,!1,Xg,Zg,sp)}function ap(t){return Eu(t,!1,Yg,Jg,rp)}function ac(t){return Eu(t,!0,qg,jg,op)}function Eu(t,e,n,i,s){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=e_(Ag(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function vs(t){return Di(t)?vs(t.__v_raw):!!(t&&t.__v_isReactive)}function Di(t){return!!(t&&t.__v_isReadonly)}function Pn(t){return!!(t&&t.__v_isShallow)}function bu(t){return t?!!t.__v_raw:!1}function dt(t){const e=t&&t.__v_raw;return e?dt(e):t}function t_(t){return!pt(t,"__v_skip")&&Object.isExtensible(t)&&Gd(t,"__v_skip",!0),t}const zn=t=>gt(t)?ro(t):t,ir=t=>gt(t)?ac(t):t;function tn(t){return t?t.__v_isRef===!0:!1}function st(t){return lp(t,!1)}function n_(t){return lp(t,!0)}function lp(t,e){return tn(t)?t:new i_(t,e)}class i_{constructor(e,n){this.dep=new yu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:dt(e),this._value=n?e:zn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Pn(e)||Di(e);e=i?e:dt(e),ei(e,n)&&(this._rawValue=e,this._value=i?e:zn(e),this.dep.trigger())}}function ni(t){return tn(t)?t.value:t}const s_={get:(t,e,n)=>e==="__v_raw"?t:ni(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return tn(s)&&!tn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function cp(t){return vs(t)?t:new Proxy(t,s_)}class r_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Tt!==this)return Kd(this,!0),!0}get value(){const e=this.dep.track();return jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function o_(t,e,n=!1){let i,s;return nt(t)?i=t:(i=t.get,s=t.set),new r_(i,s,n)}const yo={},ua=new WeakMap;let cs;function a_(t,e=!1,n=cs){if(n){let i=ua.get(n);i||ua.set(n,i=[]),i.push(t)}}function l_(t,e,n=Mt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>s?x:Pn(x)||s===!1||s===0?Ei(x,1):Ei(x);let u,f,h,p,g=!1,S=!1;if(tn(t)?(f=()=>t.value,g=Pn(t)):vs(t)?(f=()=>c(t),g=!0):Ze(t)?(S=!0,g=t.some(x=>vs(x)||Pn(x)),f=()=>t.map(x=>{if(tn(x))return x.value;if(vs(x))return c(x);if(nt(x))return l?l(x,2):x()})):nt(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Ci();try{h()}finally{Pi()}}const x=cs;cs=u;try{return l?l(t,3,[p]):t(p)}finally{cs=x}}:f=ri,e&&s){const x=f,R=s===!0?1/0:s;f=()=>Ei(x(),R)}const m=Fg(),d=()=>{u.stop(),m&&m.active&&mu(m.effects,u)};if(r&&e){const x=e;e=(...R)=>{const T=x(...R);return d(),T}}let M=S?new Array(t.length).fill(yo):yo;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const R=u.run();if(x||s||g||(S?R.some((T,D)=>ei(T,M[D])):ei(R,M))){h&&h();const T=cs;cs=u;try{const D=[R,M===yo?void 0:S&&M[0]===yo?[]:M,p];M=R,l?l(e,3,D):e(...D)}finally{cs=T}}}else u.run()};return a&&a(E),u=new Yd(f),u.scheduler=o?()=>o(E,!1):E,p=x=>a_(x,!1,u),h=u.onStop=()=>{const x=ua.get(u);if(x){if(l)l(x,4);else for(const R of x)R();ua.delete(u)}},e?i?E(!0):M=u.run():o?o(E.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Ei(t,e=1/0,n){if(e<=0||!gt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,tn(t))Ei(t.value,e,n);else if(Ze(t))for(let i=0;i<t.length;i++)Ei(t[i],e,n);else if(pr(t)||Zs(t))t.forEach(i=>{Ei(i,e,n)});else if(Vd(t)){for(const i in t)Ei(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ei(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oo(t,e,n,i){try{return i?t(...i):t()}catch(s){Fa(s,e,n)}}function Hn(t,e,n,i){if(nt(t)){const s=oo(t,e,n,i);return s&&zd(s)&&s.catch(r=>{Fa(r,e,n)}),s}if(Ze(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Hn(t[r],e,n,i));return s}}function Fa(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Ci(),oo(r,null,10,[t,l,c]),Pi();return}}c_(t,n,s,i,o)}function c_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const ln=[];let Kn=-1;const Js=[];let Xi=null,qs=0;const up=Promise.resolve();let fa=null;function Ba(t){const e=fa||up;return t?e.then(this?t.bind(this):t):e}function u_(t){let e=Kn+1,n=ln.length;for(;e<n;){const i=e+n>>>1,s=ln[i],r=$r(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Tu(t){if(!(t.flags&1)){const e=$r(t),n=ln[ln.length-1];!n||!(t.flags&2)&&e>=$r(n)?ln.push(t):ln.splice(u_(e),0,t),t.flags|=1,fp()}}function fp(){fa||(fa=up.then(dp))}function f_(t){Ze(t)?Js.push(...t):Xi&&t.id===-1?Xi.splice(qs+1,0,t):t.flags&1||(Js.push(t),t.flags|=1),fp()}function Ef(t,e,n=Kn+1){for(;n<ln.length;n++){const i=ln[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;ln.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function hp(t){if(Js.length){const e=[...new Set(Js)].sort((n,i)=>$r(n)-$r(i));if(Js.length=0,Xi){Xi.push(...e);return}for(Xi=e,qs=0;qs<Xi.length;qs++){const n=Xi[qs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xi=null,qs=0}}const $r=t=>t.id==null?t.flags&2?-1:1/0:t.id;function dp(t){try{for(Kn=0;Kn<ln.length;Kn++){const e=ln[Kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Kn<ln.length;Kn++){const e=ln[Kn];e&&(e.flags&=-2)}Kn=-1,ln.length=0,hp(),fa=null,(ln.length||Js.length)&&dp()}}let Cn=null,pp=null;function ha(t){const e=Cn;return Cn=t,pp=t&&t.type.__scopeId||null,e}function mp(t,e=Cn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ma(-1);const r=ha(e),o=Ss.length;let a;try{a=t(...s)}finally{for(let l=Ss.length;l>o;l--)zp();ha(r),i._d&&ma(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function bi(t,e){if(Cn===null)return t;const n=Ga(Cn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Mt]=e[s];r&&(nt(r)&&(r={mounted:r,updated:r}),r.deep&&Ei(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function is(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ci(),Hn(l,n,8,[t.el,a,t,e]),Pi())}}function Jo(t,e){if(un){let n=un.provides;const i=un.parent&&un.parent.provides;i===n&&(n=un.provides=Object.create(i)),n[t]=e}}function Bn(t,e,n=!1){const i=a0();if(i||js){let s=js?js._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&nt(e)?e.call(i&&i.proxy):e}}const h_=Symbol.for("v-scx"),d_=()=>Bn(h_);function xs(t,e,n){return gp(t,e,n)}function gp(t,e,n=Mt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Yt({},n),l=e&&i||!e&&r!=="post";let c;if(Zr){if(r==="sync"){const p=d_();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ri,p.resume=ri,p.pause=ri,p}}const u=un;a.call=(p,g,S)=>Hn(p,u,g,S);let f=!1;r==="post"?a.scheduler=p=>{gn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Tu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=l_(t,e,a);return Zr&&(c?c.push(h):l&&h()),h}function p_(t,e,n){const i=this.proxy,s=Lt(t)?t.includes(".")?_p(i,t):()=>i[t]:t.bind(i,i);let r;nt(e)?r=e:(r=e.handler,n=e);const o=ao(this),a=gp(s,r.bind(i),n);return o(),a}function _p(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const m_=Symbol("_vte"),g_=t=>t.__isTeleport,ll=Symbol("_leaveCb");function Au(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Au(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vp(t,e){return nt(t)?Yt({name:t.name},e,{setup:t}):t}function xp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function bf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const da=new WeakMap;function Vr(t,e,n,i,s=!1){if(Ze(t)){t.forEach((S,m)=>Vr(S,e&&(Ze(e)?e[m]:e),n,i,s));return}if(kr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Vr(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ga(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Mt?a.refs={}:a.refs,f=a.setupState,h=dt(f),p=f===Mt?Bd:S=>bf(u,S)?!1:pt(h,S),g=(S,m)=>!(m&&bf(u,m));if(c!=null&&c!==l){if(Tf(e),Lt(c))u[c]=null,p(c)&&(f[c]=null);else if(tn(c)){const S=e;g(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(nt(l))oo(l,a,12,[o,u]);else{const S=Lt(l),m=tn(l);if(S||m){const d=()=>{if(t.f){const M=S?p(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)Ze(M)&&mu(M,r);else if(Ze(M))M.includes(r)||M.push(r);else if(S)u[l]=[r],p(l)&&(f[l]=u[l]);else{const E=[r];g(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else S?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const M=()=>{d(),da.delete(t)};M.id=-1,da.set(t,M),gn(M,n)}else Tf(t),d()}}}function Tf(t){const e=da.get(t);e&&(e.flags|=8,da.delete(t))}Ua().requestIdleCallback;Ua().cancelIdleCallback;const kr=t=>!!t.type.__asyncLoader,Sp=t=>t.type.__isKeepAlive;function __(t,e){yp(t,"a",e)}function v_(t,e){yp(t,"da",e)}function yp(t,e,n=un){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(za(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Sp(s.parent.vnode)&&x_(i,e,n,s),s=s.parent}}function x_(t,e,n,i){const s=za(e,t,i,!0);wu(()=>{mu(i[e],s)},n)}function za(t,e,n=un,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ci();const a=ao(n),l=Hn(e,n,t,o);return a(),Pi(),l});return i?s.unshift(r):s.push(r),r}}const Ni=t=>(e,n=un)=>{(!Zr||t==="sp")&&za(t,(...i)=>e(...i),n)},S_=Ni("bm"),gr=Ni("m"),y_=Ni("bu"),M_=Ni("u"),E_=Ni("bum"),wu=Ni("um"),b_=Ni("sp"),T_=Ni("rtg"),A_=Ni("rtc");function w_(t,e=un){za("ec",t,e)}const R_=Symbol.for("v-ndc");function oi(t,e,n,i){let s;const r=n,o=Ze(t);if(o||Lt(t)){const a=o&&vs(t);let l=!1,c=!1;a&&(l=!Pn(t),c=Di(t),t=Oa(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?ir(zn(t[u])):zn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(gt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const lc=t=>t?Gp(t)?Ga(t):lc(t.parent):null,Gr=Yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lc(t.parent),$root:t=>lc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ep(t),$forceUpdate:t=>t.f||(t.f=()=>{Tu(t.update)}),$nextTick:t=>t.n||(t.n=Ba.bind(t.proxy)),$watch:t=>p_.bind(t)}),cl=(t,e)=>t!==Mt&&!t.__isScriptSetup&&pt(t,e),C_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(cl(i,e))return o[e]=1,i[e];if(s!==Mt&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(n!==Mt&&pt(n,e))return o[e]=4,n[e];cc&&(o[e]=0)}}const c=Gr[e];let u,f;if(c)return e==="$attrs"&&Qt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Mt&&pt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,pt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return cl(s,e)?(s[e]=n,!0):i!==Mt&&pt(i,e)?(i[e]=n,!0):pt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Mt&&a[0]!=="$"&&pt(t,a)||cl(e,a)||pt(r,a)||pt(i,a)||pt(Gr,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Af(t){return Ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cc=!0;function P_(t){const e=Ep(t),n=t.proxy,i=t.ctx;cc=!1,e.beforeCreate&&wf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:S,deactivated:m,beforeDestroy:d,beforeUnmount:M,destroyed:E,unmounted:x,render:R,renderTracked:T,renderTriggered:D,errorCaptured:v,serverPrefetch:A,expose:N,inheritAttrs:I,components:H,directives:se,filters:ae}=e;if(c&&D_(c,i,null),o)for(const G in o){const oe=o[G];nt(oe)&&(i[G]=oe.bind(n))}if(s){const G=s.call(n,n);gt(G)&&(t.data=ro(G))}if(cc=!0,r)for(const G in r){const oe=r[G],de=nt(oe)?oe.bind(n,n):nt(oe.get)?oe.get.bind(n,n):ri,Me=!nt(oe)&&nt(oe.set)?oe.set.bind(n):ri,_e=vt({get:de,set:Me});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Ee=>_e.value=Ee})}if(a)for(const G in a)Mp(a[G],i,n,G);if(l){const G=nt(l)?l.call(n):l;Reflect.ownKeys(G).forEach(oe=>{Jo(oe,G[oe])})}u&&wf(u,t,"c");function ne(G,oe){Ze(oe)?oe.forEach(de=>G(de.bind(n))):oe&&G(oe.bind(n))}if(ne(S_,f),ne(gr,h),ne(y_,p),ne(M_,g),ne(__,S),ne(v_,m),ne(w_,v),ne(A_,T),ne(T_,D),ne(E_,M),ne(wu,x),ne(b_,A),Ze(N))if(N.length){const G=t.exposed||(t.exposed={});N.forEach(oe=>{Object.defineProperty(G,oe,{get:()=>n[oe],set:de=>n[oe]=de,enumerable:!0})})}else t.exposed||(t.exposed={});R&&t.render===ri&&(t.render=R),I!=null&&(t.inheritAttrs=I),H&&(t.components=H),se&&(t.directives=se),A&&xp(t)}function D_(t,e,n=ri){Ze(t)&&(t=uc(t));for(const i in t){const s=t[i];let r;gt(s)?"default"in s?r=Bn(s.from||i,s.default,!0):r=Bn(s.from||i):r=Bn(s),tn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function wf(t,e,n){Hn(Ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mp(t,e,n,i){let s=i.includes(".")?_p(n,i):()=>n[i];if(Lt(t)){const r=e[t];nt(r)&&xs(s,r)}else if(nt(t))xs(s,t.bind(n));else if(gt(t))if(Ze(t))t.forEach(r=>Mp(r,e,n,i));else{const r=nt(t.handler)?t.handler.bind(n):e[t.handler];nt(r)&&xs(s,r,t)}}function Ep(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>pa(l,c,o,!0)),pa(l,e,o)),gt(e)&&r.set(e,l),l}function pa(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&pa(t,r,n,!0),s&&s.forEach(o=>pa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=L_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const L_={data:Rf,props:Cf,emits:Cf,methods:Ir,computed:Ir,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Ir,directives:Ir,watch:N_,provide:Rf,inject:I_};function Rf(t,e){return e?t?function(){return Yt(nt(t)?t.call(this,this):t,nt(e)?e.call(this,this):e)}:e:t}function I_(t,e){return Ir(uc(t),uc(e))}function uc(t){if(Ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function Ir(t,e){return t?Yt(Object.create(null),t,e):e}function Cf(t,e){return t?Ze(t)&&Ze(e)?[...new Set([...t,...e])]:Yt(Object.create(null),Af(t),Af(e??{})):e}function N_(t,e){if(!t)return e;if(!e)return t;const n=Yt(Object.create(null),t);for(const i in e)n[i]=sn(t[i],e[i]);return n}function bp(){return{app:null,config:{isNativeTag:Bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let U_=0;function O_(t,e){return function(i,s=null){nt(i)||(i=Yt({},i)),s!=null&&!gt(s)&&(s=null);const r=bp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:U_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:d0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&nt(u.install)?(o.add(u),u.install(c,...f)):nt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||fn(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Ga(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Hn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=js;js=c;try{return u()}finally{js=f}}};return c}}let js=null;const F_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${On(e)}Modifiers`]||t[`${ws(e)}Modifiers`];function B_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Mt;let s=n;const r=e.startsWith("update:"),o=r&&F_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Lt(u)?u.trim():u)),o.number&&(s=n.map(Na)));let a,l=i[a=il(e)]||i[a=il(On(e))];!l&&r&&(l=i[a=il(ws(e))]),l&&Hn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Hn(c,t,6,s)}}const z_=new WeakMap;function Tp(t,e,n=!1){const i=n?z_:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!nt(t)){const l=c=>{const u=Tp(c,e,!0);u&&(a=!0,Yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(gt(t)&&i.set(t,null),null):(Ze(r)?r.forEach(l=>o[l]=null):Yt(o,r),gt(t)&&i.set(t,o),o)}function Ha(t,e){return!t||!Da(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),pt(t,e[0].toLowerCase()+e.slice(1))||pt(t,ws(e))||pt(t,e))}function Pf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:S}=t,m=ha(t);let d,M;try{if(n.shapeFlag&4){const x=s||i,R=x;d=jn(c.call(R,x,u,f,p,h,g)),M=a}else{const x=e;d=jn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),M=e.props?a:H_(a)}}catch(x){Ss.length=0,Fa(x,t,1),d=fn(Ji)}let E=d;if(M&&S!==!1){const x=Object.keys(M),{shapeFlag:R}=E;x.length&&R&7&&(r&&x.some(La)&&(M=V_(M,r)),E=sr(E,M,!1,!0))}return n.dirs&&(E=sr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Au(E,n.transition),d=E,ha(m),d}const H_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Da(n))&&((e||(e={}))[n]=t[n]);return e},V_=(t,e)=>{const n={};for(const i in t)(!La(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function k_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Df(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Ap(o,i,h)&&!Ha(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Df(i,o,c):!0:!!o;return!1}function Df(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Ap(e,t,r)&&!Ha(n,r))return!0}return!1}function Ap(t,e,n){const i=t[n],s=e[n];return n==="style"&&gt(i)&&gt(s)?!mr(i,s):i!==s}function G_({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const wp={},Rp=()=>Object.create(wp),Cp=t=>Object.getPrototypeOf(t)===wp;function W_(t,e,n,i=!1){const s={},r=Rp();t.propsDefaults=Object.create(null),Pp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:ap(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function X_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=dt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ha(t.emitsOptions,h))continue;const p=e[h];if(l)if(pt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=On(h);s[g]=fc(l,a,g,p,t,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{Pp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=ws(f))===f||!pt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=fc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!pt(e,f))&&(delete r[f],c=!0)}c&&Mi(t.attrs,"set","")}function Pp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Br(l))continue;const c=e[l];let u;s&&pt(s,u=On(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ha(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=dt(n),c=a||Mt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=fc(s,l,f,c[f],t,!pt(c,f))}}return o}function fc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&nt(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=ao(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ws(n))&&(i=!0))}return i}const q_=new WeakMap;function Dp(t,e,n=!1){const i=n?q_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!nt(t)){const u=f=>{l=!0;const[h,p]=Dp(f,e,!0);Yt(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return gt(t)&&i.set(t,Ks),Ks;if(Ze(r))for(let u=0;u<r.length;u++){const f=On(r[u]);Lf(f)&&(o[f]=Mt)}else if(r)for(const u in r){const f=On(u);if(Lf(f)){const h=r[u],p=o[f]=Ze(h)||nt(h)?{type:h}:Yt({},h),g=p.type;let S=!1,m=!0;if(Ze(g))for(let d=0;d<g.length;++d){const M=g[d],E=nt(M)&&M.name;if(E==="Boolean"){S=!0;break}else E==="String"&&(m=!1)}else S=nt(g)&&g.name==="Boolean";p[0]=S,p[1]=m,(S||pt(p,"default"))&&a.push(f)}}const c=[o,a];return gt(t)&&i.set(t,c),c}function Lf(t){return t[0]!=="$"&&!Br(t)}const Ru=t=>t==="_"||t==="_ctx"||t==="$stable",Cu=t=>Ze(t)?t.map(jn):[jn(t)],Y_=(t,e,n)=>{if(e._n)return e;const i=mp((...s)=>Cu(e(...s)),n);return i._c=!1,i},Lp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Ru(s))continue;const r=t[s];if(nt(r))e[s]=Y_(s,r,i);else if(r!=null){const o=Cu(r);e[s]=()=>o}}},Ip=(t,e)=>{const n=Cu(e);t.slots.default=()=>n},Np=(t,e,n)=>{for(const i in e)(n||!Ru(i))&&(t[i]=e[i])},$_=(t,e,n)=>{const i=t.slots=Rp();if(t.vnode.shapeFlag&32){const s=e._;s?(Np(i,e,n),n&&Gd(i,"_",s,!0)):Lp(e,i)}else e&&Ip(t,e)},K_=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Mt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Np(s,e,n):(r=!e.$stable,Lp(e,s)),o=e}else e&&(Ip(t,e),o={default:1});if(r)for(const a in s)!Ru(a)&&o[a]==null&&delete s[a]},gn=e0;function Z_(t){return J_(t)}function J_(t,e){const n=Ua();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=ri,insertStaticContent:g}=t,S=(w,C,F,J=null,k=null,Q=null,ve=void 0,me=null,ge=!!C.dynamicChildren)=>{if(w===C)return;w&&!Mr(w,C)&&(J=U(w),Ee(w,k,Q,!0),w=null),C.patchFlag===-2&&(ge=!1,C.dynamicChildren=null);const{type:ce,ref:Re,shapeFlag:P}=C;switch(ce){case Va:m(w,C,F,J);break;case Ji:d(w,C,F,J);break;case jo:w==null&&M(C,F,J,ve);break;case Dt:H(w,C,F,J,k,Q,ve,me,ge);break;default:P&1?R(w,C,F,J,k,Q,ve,me,ge):P&6?se(w,C,F,J,k,Q,ve,me,ge):(P&64||P&128)&&ce.process(w,C,F,J,k,Q,ve,me,ge,ye)}Re!=null&&k?Vr(Re,w&&w.ref,Q,C||w,!C):Re==null&&w&&w.ref!=null&&Vr(w.ref,null,Q,w,!0)},m=(w,C,F,J)=>{if(w==null)i(C.el=a(C.children),F,J);else{const k=C.el=w.el;C.children!==w.children&&c(k,C.children)}},d=(w,C,F,J)=>{w==null?i(C.el=l(C.children||""),F,J):C.el=w.el},M=(w,C,F,J)=>{[w.el,w.anchor]=g(w.children,C,F,J,w.el,w.anchor)},E=({el:w,anchor:C},F,J)=>{let k;for(;w&&w!==C;)k=h(w),i(w,F,J),w=k;i(C,F,J)},x=({el:w,anchor:C})=>{let F;for(;w&&w!==C;)F=h(w),s(w),w=F;s(C)},R=(w,C,F,J,k,Q,ve,me,ge)=>{if(C.type==="svg"?ve="svg":C.type==="math"&&(ve="mathml"),w==null)T(C,F,J,k,Q,ve,me,ge);else{const ce=w.el&&w.el._isVueCE?w.el:null;try{ce&&ce._beginPatch(),A(w,C,k,Q,ve,me,ge)}finally{ce&&ce._endPatch()}}},T=(w,C,F,J,k,Q,ve,me)=>{let ge,ce;const{props:Re,shapeFlag:P,transition:Le,dirs:Ce}=w;if(ge=w.el=o(w.type,Q,Re&&Re.is,Re),P&8?u(ge,w.children):P&16&&v(w.children,ge,null,J,k,ul(w,Q),ve,me),Ce&&is(w,null,J,"created"),D(ge,w,w.scopeId,ve,J),Re){for(const _ in Re)_!=="value"&&!Br(_)&&r(ge,_,null,Re[_],Q,J);"value"in Re&&r(ge,"value",null,Re.value,Q),(ce=Re.onVnodeBeforeMount)&&qn(ce,J,w)}Ce&&is(w,null,J,"beforeMount");const b=j_(k,Le);b&&Le.beforeEnter(ge),i(ge,C,F),((ce=Re&&Re.onVnodeMounted)||b||Ce)&&gn(()=>{try{ce&&qn(ce,J,w),b&&Le.enter(ge),Ce&&is(w,null,J,"mounted")}finally{}},k)},D=(w,C,F,J,k)=>{if(F&&p(w,F),J)for(let Q=0;Q<J.length;Q++)p(w,J[Q]);if(k){let Q=k.subTree;if(C===Q||Bp(Q.type)&&(Q.ssContent===C||Q.ssFallback===C)){const ve=k.vnode;D(w,ve,ve.scopeId,ve.slotScopeIds,k.parent)}}},v=(w,C,F,J,k,Q,ve,me,ge=0)=>{for(let ce=ge;ce<w.length;ce++){const Re=w[ce]=me?yi(w[ce]):jn(w[ce]);S(null,Re,C,F,J,k,Q,ve,me)}},A=(w,C,F,J,k,Q,ve)=>{const me=C.el=w.el;let{patchFlag:ge,dynamicChildren:ce,dirs:Re}=C;ge|=w.patchFlag&16;const P=w.props||Mt,Le=C.props||Mt;let Ce;if(F&&ss(F,!1),(Ce=Le.onVnodeBeforeUpdate)&&qn(Ce,F,C,w),Re&&is(C,w,F,"beforeUpdate"),F&&ss(F,!0),ce&&(!w.dynamicChildren||w.dynamicChildren.length!==ce.length)&&(ge=0,ve=!1,ce=null),(P.innerHTML&&Le.innerHTML==null||P.textContent&&Le.textContent==null)&&u(me,""),ce?N(w.dynamicChildren,ce,me,F,J,ul(C,k),Q):ve||oe(w,C,me,null,F,J,ul(C,k),Q,!1),ge>0){if(ge&16)I(me,P,Le,F,k);else if(ge&2&&P.class!==Le.class&&r(me,"class",null,Le.class,k),ge&4&&r(me,"style",P.style,Le.style,k),ge&8){const b=C.dynamicProps;for(let _=0;_<b.length;_++){const B=b[_],K=P[B],L=Le[B];(L!==K||B==="value")&&r(me,B,K,L,k,F)}}ge&1&&w.children!==C.children&&u(me,C.children)}else!ve&&ce==null&&I(me,P,Le,F,k);((Ce=Le.onVnodeUpdated)||Re)&&gn(()=>{Ce&&qn(Ce,F,C,w),Re&&is(C,w,F,"updated")},J)},N=(w,C,F,J,k,Q,ve)=>{for(let me=0;me<C.length;me++){const ge=w[me],ce=C[me],Re=ge.el&&(ge.type===Dt||!Mr(ge,ce)||ge.shapeFlag&198)?f(ge.el):F;S(ge,ce,Re,null,J,k,Q,ve,!0)}},I=(w,C,F,J,k)=>{if(C!==F){if(C!==Mt)for(const Q in C)!Br(Q)&&!(Q in F)&&r(w,Q,C[Q],null,k,J);for(const Q in F){if(Br(Q))continue;const ve=F[Q],me=C[Q];ve!==me&&Q!=="value"&&r(w,Q,me,ve,k,J)}"value"in F&&r(w,"value",C.value,F.value,k)}},H=(w,C,F,J,k,Q,ve,me,ge)=>{const ce=C.el=w?w.el:a(""),Re=C.anchor=w?w.anchor:a("");let{patchFlag:P,dynamicChildren:Le,slotScopeIds:Ce}=C;Ce&&(me=me?me.concat(Ce):Ce),w==null?(i(ce,F,J),i(Re,F,J),v(C.children||[],F,Re,k,Q,ve,me,ge)):P>0&&P&64&&Le&&w.dynamicChildren&&w.dynamicChildren.length===Le.length?(N(w.dynamicChildren,Le,F,k,Q,ve,me),(C.key!=null||k&&C===k.subTree)&&Up(w,C,!0)):oe(w,C,F,Re,k,Q,ve,me,ge)},se=(w,C,F,J,k,Q,ve,me,ge)=>{C.slotScopeIds=me,w==null?C.shapeFlag&512?k.ctx.activate(C,F,J,ve,ge):ae(C,F,J,k,Q,ve,ge):Y(w,C,ge)},ae=(w,C,F,J,k,Q,ve)=>{const me=w.component=o0(w,J,k);if(Sp(w)&&(me.ctx.renderer=ye),l0(me,!1,ve),me.asyncDep){if(k&&k.registerDep(me,ne,ve),!w.el){const ge=me.subTree=fn(Ji);d(null,ge,C,F),w.placeholder=ge.el}}else ne(me,w,C,F,k,Q,ve)},Y=(w,C,F)=>{const J=C.component=w.component;if(k_(w,C,F))if(J.asyncDep&&!J.asyncResolved){G(J,C,F);return}else J.next=C,J.update();else C.el=w.el,J.vnode=C},ne=(w,C,F,J,k,Q,ve)=>{const me=()=>{if(w.isMounted){let{next:P,bu:Le,u:Ce,parent:b,vnode:_}=w;{const le=Op(w);if(le){P&&(P.el=_.el,G(w,P,ve)),le.asyncDep.then(()=>{gn(()=>{w.isUnmounted||ce()},k)});return}}let B=P,K;ss(w,!1),P?(P.el=_.el,G(w,P,ve)):P=_,Le&&Zo(Le),(K=P.props&&P.props.onVnodeBeforeUpdate)&&qn(K,b,P,_),ss(w,!0);const L=Pf(w),O=w.subTree;w.subTree=L,S(O,L,f(O.el),U(O),w,k,Q),P.el=L.el,B===null&&G_(w,L.el),Ce&&gn(Ce,k),(K=P.props&&P.props.onVnodeUpdated)&&gn(()=>qn(K,b,P,_),k)}else{let P;const{el:Le,props:Ce}=C,{bm:b,m:_,parent:B,root:K,type:L}=w,O=kr(C);ss(w,!1),b&&Zo(b),!O&&(P=Ce&&Ce.onVnodeBeforeMount)&&qn(P,B,C),ss(w,!0);{K.ce&&K.ce._hasShadowRoot()&&K.ce._injectChildStyle(L,w.parent?w.parent.type:void 0);const le=w.subTree=Pf(w);S(null,le,F,J,w,k,Q),C.el=le.el}if(_&&gn(_,k),!O&&(P=Ce&&Ce.onVnodeMounted)){const le=C;gn(()=>qn(P,B,le),k)}(C.shapeFlag&256||B&&kr(B.vnode)&&B.vnode.shapeFlag&256)&&w.a&&gn(w.a,k),w.isMounted=!0,C=F=J=null}};w.scope.on();const ge=w.effect=new Yd(me);w.scope.off();const ce=w.update=ge.run.bind(ge),Re=w.job=ge.runIfDirty.bind(ge);Re.i=w,Re.id=w.uid,ge.scheduler=()=>Tu(Re),ss(w,!0),ce()},G=(w,C,F)=>{C.component=w;const J=w.vnode.props;w.vnode=C,w.next=null,X_(w,C.props,J,F),K_(w,C.children,F),Ci(),Ef(w),Pi()},oe=(w,C,F,J,k,Q,ve,me,ge=!1)=>{const ce=w&&w.children,Re=w?w.shapeFlag:0,P=C.children,{patchFlag:Le,shapeFlag:Ce}=C;if(Le>0){if(Le&128){Me(ce,P,F,J,k,Q,ve,me,ge);return}else if(Le&256){de(ce,P,F,J,k,Q,ve,me,ge);return}}Ce&8?(Re&16&&Z(ce,k,Q),P!==ce&&u(F,P)):Re&16?Ce&16?Me(ce,P,F,J,k,Q,ve,me,ge):Z(ce,k,Q,!0):(Re&8&&u(F,""),Ce&16&&v(P,F,J,k,Q,ve,me,ge))},de=(w,C,F,J,k,Q,ve,me,ge)=>{w=w||Ks,C=C||Ks;const ce=w.length,Re=C.length,P=Math.min(ce,Re);let Le;for(Le=0;Le<P;Le++){const Ce=C[Le]=ge?yi(C[Le]):jn(C[Le]);S(w[Le],Ce,F,null,k,Q,ve,me,ge)}ce>Re?Z(w,k,Q,!0,!1,P):v(C,F,J,k,Q,ve,me,ge,P)},Me=(w,C,F,J,k,Q,ve,me,ge)=>{let ce=0;const Re=C.length;let P=w.length-1,Le=Re-1;for(;ce<=P&&ce<=Le;){const Ce=w[ce],b=C[ce]=ge?yi(C[ce]):jn(C[ce]);if(Mr(Ce,b))S(Ce,b,F,null,k,Q,ve,me,ge);else break;ce++}for(;ce<=P&&ce<=Le;){const Ce=w[P],b=C[Le]=ge?yi(C[Le]):jn(C[Le]);if(Mr(Ce,b))S(Ce,b,F,null,k,Q,ve,me,ge);else break;P--,Le--}if(ce>P){if(ce<=Le){const Ce=Le+1,b=Ce<Re?C[Ce].el:J;for(;ce<=Le;)S(null,C[ce]=ge?yi(C[ce]):jn(C[ce]),F,b,k,Q,ve,me,ge),ce++}}else if(ce>Le)for(;ce<=P;)Ee(w[ce],k,Q,!0),ce++;else{const Ce=ce,b=ce,_=new Map;for(ce=b;ce<=Le;ce++){const pe=C[ce]=ge?yi(C[ce]):jn(C[ce]);pe.key!=null&&_.set(pe.key,ce)}let B,K=0;const L=Le-b+1;let O=!1,le=0;const j=new Array(L);for(ce=0;ce<L;ce++)j[ce]=0;for(ce=Ce;ce<=P;ce++){const pe=w[ce];if(K>=L){Ee(pe,k,Q,!0);continue}let be;if(pe.key!=null)be=_.get(pe.key);else for(B=b;B<=Le;B++)if(j[B-b]===0&&Mr(pe,C[B])){be=B;break}be===void 0?Ee(pe,k,Q,!0):(j[be-b]=ce+1,be>=le?le=be:O=!0,S(pe,C[be],F,null,k,Q,ve,me,ge),K++)}const ie=O?Q_(j):Ks;for(B=ie.length-1,ce=L-1;ce>=0;ce--){const pe=b+ce,be=C[pe],Te=C[pe+1],Ae=pe+1<Re?Te.el||Fp(Te):J;j[ce]===0?S(null,be,F,Ae,k,Q,ve,me,ge):O&&(B<0||ce!==ie[B]?_e(be,F,Ae,2):B--)}}},_e=(w,C,F,J,k=null)=>{const{el:Q,type:ve,transition:me,children:ge,shapeFlag:ce}=w;if(ce&6){_e(w.component.subTree,C,F,J);return}if(ce&128){w.suspense.move(C,F,J);return}if(ce&64){ve.move(w,C,F,ye);return}if(ve===Dt){i(Q,C,F);for(let P=0;P<ge.length;P++)_e(ge[P],C,F,J);i(w.anchor,C,F);return}if(ve===jo){E(w,C,F);return}if(J!==2&&ce&1&&me)if(J===0)me.persisted&&!Q[ll]?i(Q,C,F):(me.beforeEnter(Q),i(Q,C,F),gn(()=>me.enter(Q),k));else{const{leave:P,delayLeave:Le,afterLeave:Ce}=me,b=()=>{w.ctx.isUnmounted?s(Q):i(Q,C,F)},_=()=>{const B=Q._isLeaving||!!Q[ll];Q._isLeaving&&Q[ll](!0),me.persisted&&!B?b():P(Q,()=>{b(),Ce&&Ce()})};Le?Le(Q,b,_):_()}else i(Q,C,F)},Ee=(w,C,F,J=!1,k=!1)=>{const{type:Q,props:ve,ref:me,children:ge,dynamicChildren:ce,shapeFlag:Re,patchFlag:P,dirs:Le,cacheIndex:Ce,memo:b}=w;if(P===-2&&(k=!1),me!=null&&(Ci(),Vr(me,null,F,w,!0),Pi()),Ce!=null&&(C.renderCache[Ce]=void 0),Re&256){C.ctx.deactivate(w);return}const _=Re&1&&Le,B=!kr(w);let K;if(B&&(K=ve&&ve.onVnodeBeforeUnmount)&&qn(K,C,w),Re&6)$e(w.component,F,J);else{if(Re&128){w.suspense.unmount(F,J);return}_&&is(w,null,C,"beforeUnmount"),Re&64?w.type.remove(w,C,F,ye,J):ce&&!ce.hasOnce&&(Q!==Dt||P>0&&P&64)?Z(ce,C,F,!1,!0):(Q===Dt&&P&384||!k&&Re&16)&&Z(ge,C,F),J&&Je(w)}const L=b!=null&&Ce==null;(B&&(K=ve&&ve.onVnodeUnmounted)||_||L)&&gn(()=>{K&&qn(K,C,w),_&&is(w,null,C,"unmounted"),L&&(w.el=null)},F)},Je=w=>{const{type:C,el:F,anchor:J,transition:k}=w;if(C===Dt){it(F,J);return}if(C===jo){x(w);return}const Q=()=>{s(F),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(w.shapeFlag&1&&k&&!k.persisted){const{leave:ve,delayLeave:me}=k,ge=()=>ve(F,Q);me?me(w.el,Q,ge):ge()}else Q()},it=(w,C)=>{let F;for(;w!==C;)F=h(w),s(w),w=F;s(C)},$e=(w,C,F)=>{const{bum:J,scope:k,job:Q,subTree:ve,um:me,m:ge,a:ce}=w;If(ge),If(ce),J&&Zo(J),k.stop(),Q&&(Q.flags|=8,Ee(ve,w,C,F)),me&&gn(me,C),gn(()=>{w.isUnmounted=!0},C)},Z=(w,C,F,J=!1,k=!1,Q=0)=>{for(let ve=Q;ve<w.length;ve++)Ee(w[ve],C,F,J,k)},U=w=>{if(w.shapeFlag&6)return U(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=h(w.anchor||w.el),F=C&&C[m_];return F?h(F):C};let q=!1;const ue=(w,C,F)=>{let J;w==null?C._vnode&&(Ee(C._vnode,null,null,!0),J=C._vnode.component):S(C._vnode||null,w,C,null,null,null,F),C._vnode=w,q||(q=!0,Ef(J),hp(),q=!1)},ye={p:S,um:Ee,m:_e,r:Je,mt:ae,mc:v,pc:oe,pbc:N,n:U,o:t};return{render:ue,hydrate:void 0,createApp:O_(ue)}}function ul({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ss({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function j_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Up(t,e,n=!1){const i=t.children,s=e.children;if(Ze(i)&&Ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=yi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Up(o,a)),a.type===Va&&(a.patchFlag===-1&&(a=s[r]=yi(a)),a.el=o.el),a.type===Ji&&!a.el&&(a.el=o.el)}}function Q_(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Op(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Op(e)}function If(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Fp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Fp(e.subTree):null}const Bp=t=>t.__isSuspense;function e0(t,e){e&&e.pendingBranch?Ze(t)?e.effects.push(...t):e.effects.push(t):f_(t)}const Dt=Symbol.for("v-fgt"),Va=Symbol.for("v-txt"),Ji=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),Ss=[];let bn=null;function Ue(t=!1){Ss.push(bn=t?null:[])}function zp(){Ss.pop(),bn=Ss[Ss.length-1]||null}let Kr=1;function ma(t,e=!1){Kr+=t,t<0&&bn&&e&&(bn.hasOnce=!0)}function Hp(t){return t.dynamicChildren=Kr>0?bn||Ks:null,zp(),Kr>0&&bn&&bn.push(t),t}function Be(t,e,n,i,s,r){return Hp(X(t,e,n,i,s,r,!0))}function Vp(t,e,n,i,s){return Hp(fn(t,e,n,i,s,!0))}function ga(t){return t?t.__v_isVNode===!0:!1}function Mr(t,e){return t.type===e.type&&t.key===e.key}const kp=({key:t})=>t??null,Qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Lt(t)||tn(t)||nt(t)?{i:Cn,r:t,k:e,f:!!n}:t:null);function X(t,e=null,n=null,i=0,s=null,r=t===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kp(e),ref:e&&Qo(e),scopeId:pp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Cn};return a?(_a(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Lt(n)?8:16),Kr>0&&!o&&bn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&bn.push(l),l}const fn=t0;function t0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===R_)&&(t=Ji),ga(t)){const a=sr(t,e,!0);return n&&_a(a,n),Kr>0&&!r&&bn&&(a.shapeFlag&6?bn[bn.indexOf(t)]=a:bn.push(a)),a.patchFlag=-2,a}if(h0(t)&&(t=t.__vccOpts),e){e=n0(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=Zn(a)),gt(l)&&(bu(l)&&!Ze(l)&&(l=Yt({},l)),e.style=Xr(l))}const o=Lt(t)?1:Bp(t)?128:g_(t)?64:gt(t)?4:nt(t)?2:0;return X(t,e,n,i,s,o,r,!0)}function n0(t){return t?bu(t)||Cp(t)?Yt({},t):t:null}function sr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?i0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&kp(c),ref:e&&e.ref?n&&r?Ze(r)?r.concat(Qo(e)):[r,Qo(e)]:Qo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sr(t.ssContent),ssFallback:t.ssFallback&&sr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Au(u,l.clone(u)),u}function cn(t=" ",e=0){return fn(Va,null,t,e)}function ka(t,e){const n=fn(jo,null,t);return n.staticCount=e,n}function an(t="",e=!1){return e?(Ue(),Vp(Ji,null,t)):fn(Ji,null,t)}function jn(t){return t==null||typeof t=="boolean"?fn(Ji):Ze(t)?fn(Dt,null,t.slice()):ga(t)?yi(t):fn(Va,null,String(t))}function yi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:sr(t)}function _a(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ze(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),_a(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Cp(e)?e._ctx=Cn:s===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(nt(e)){if(i&65){_a(t,{default:e});return}e={default:e,_ctx:Cn},n=32}else e=String(e),i&64?(n=16,e=[cn(e)]):n=8;t.children=e,t.shapeFlag|=n}function i0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Zn([e.class,i.class]));else if(s==="style")e.style=Xr([e.style,i.style]);else if(Da(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!La(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function qn(t,e,n,i=null){Hn(t,e,7,[n,i])}const s0=bp();let r0=0;function o0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||s0,r={uid:r0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Og(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dp(i,s),emitsOptions:Tp(i,s),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:i.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=B_.bind(null,r),t.ce&&t.ce(r),r}let un=null;const a0=()=>un||Cn;let va,hc;{const t=Ua(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};va=e("__VUE_INSTANCE_SETTERS__",n=>un=n),hc=e("__VUE_SSR_SETTERS__",n=>Zr=n)}const ao=t=>{const e=un;return va(t),t.scope.on(),()=>{t.scope.off(),va(e)}},Nf=()=>{un&&un.scope.off(),va(null)};function Gp(t){return t.vnode.shapeFlag&4}let Zr=!1;function l0(t,e=!1,n=!1){e&&hc(e);const{props:i,children:s}=t.vnode,r=Gp(t);W_(t,i,r,e),$_(t,s,n||e);const o=r?c0(t,e):void 0;return e&&hc(!1),o}function c0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,C_);const{setup:i}=n;if(i){Ci();const s=t.setupContext=i.length>1?f0(t):null,r=ao(t),o=oo(i,t,0,[t.props,s]),a=zd(o);if(Pi(),r(),(a||t.sp)&&!kr(t)&&xp(t),a){if(o.then(Nf,Nf),e)return o.then(l=>{Uf(t,l)}).catch(l=>{Fa(l,t,0)});t.asyncDep=o}else Uf(t,o)}else Wp(t)}function Uf(t,e,n){nt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=cp(e)),Wp(t)}function Wp(t,e,n){const i=t.type;t.render||(t.render=i.render||ri);{const s=ao(t);Ci();try{P_(t)}finally{Pi(),s()}}}const u0={get(t,e){return Qt(t,"get",""),t[e]}};function f0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,u0),slots:t.slots,emit:t.emit,expose:e}}function Ga(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cp(t_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gr)return Gr[n](t)},has(e,n){return n in e||n in Gr}})):t.proxy}function h0(t){return nt(t)&&"__vccOpts"in t}const vt=(t,e)=>o_(t,e,Zr);function Xp(t,e,n){try{ma(-1);const i=arguments.length;return i===2?gt(e)&&!Ze(e)?ga(e)?fn(t,null,[e]):fn(t,e):fn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ga(n)&&(n=[n]),fn(t,e,n))}finally{ma(1)}}const d0="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dc;const Of=typeof window<"u"&&window.trustedTypes;if(Of)try{dc=Of.createPolicy("vue",{createHTML:t=>t})}catch{}const qp=dc?t=>dc.createHTML(t):t=>t,p0="http://www.w3.org/2000/svg",m0="http://www.w3.org/1998/Math/MathML",Si=typeof document<"u"?document:null,Ff=Si&&Si.createElement("template"),g0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Si.createElementNS(p0,t):e==="mathml"?Si.createElementNS(m0,t):n?Si.createElement(t,{is:n}):Si.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Si.createTextNode(t),createComment:t=>Si.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Si.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Ff.innerHTML=qp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Ff.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_0=Symbol("_vtc");function v0(t,e,n){const i=t[_0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bf=Symbol("_vod"),x0=Symbol("_vsh"),S0=Symbol(""),y0=/(?:^|;)\s*display\s*:/;function M0(t,e,n){const i=t.style,s=Lt(n);let r=!1;if(n&&!s){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Nr(i,a,"")}else for(const o in e)n[o]==null&&Nr(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?b0(t,o,!Lt(e)&&e?e[o]:void 0,a)||Nr(i,o,a):Nr(i,o,"")}}else if(s){if(e!==n){const o=i[S0];o&&(n+=";"+o),i.cssText=n,r=y0.test(n)}}else e&&t.removeAttribute("style");Bf in t&&(t[Bf]=r?i.display:"",t[x0]&&(i.display="none"))}const zf=/\s*!important$/;function Nr(t,e,n){if(Ze(n))n.forEach(i=>Nr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=E0(t,e);zf.test(n)?t.setProperty(ws(i),n.replace(zf,""),"important"):t[i]=n}}const Hf=["Webkit","Moz","ms"],fl={};function E0(t,e){const n=fl[e];if(n)return n;let i=On(e);if(i!=="filter"&&i in t)return fl[e]=i;i=kd(i);for(let s=0;s<Hf.length;s++){const r=Hf[s]+i;if(r in t)return fl[e]=r}return e}function b0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Lt(i)&&n===i}const Vf="http://www.w3.org/1999/xlink";function kf(t,e,n,i,s,r=Ng(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Vf,e.slice(6,e.length)):t.setAttributeNS(Vf,e,n):n==null||r&&!Wd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ui(n)?String(n):n)}function Gf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?qp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Wd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function $i(t,e,n,i){t.addEventListener(e,n,i)}function T0(t,e,n,i){t.removeEventListener(e,n,i)}const Wf=Symbol("_vei");function A0(t,e,n,i,s=null){const r=t[Wf]||(t[Wf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=C0(e);if(i){const c=r[e]=L0(i,s);$i(t,a,c,l)}else o&&(T0(t,a,o,l),r[e]=void 0)}}const w0=/(Once|Passive|Capture)$/,R0=/^on:?(?:Once|Passive|Capture)$/;function C0(t){let e,n;for(;(n=t.match(w0))&&!R0.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ws(t.slice(2)),e]}let hl=0;const P0=Promise.resolve(),D0=()=>hl||(P0.then(()=>hl=0),hl=Date.now());function L0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(Ze(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Hn(c,e,5,a)}}else Hn(s,e,5,[i])};return n.value=t,n.attached=D0(),n}const Xf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,I0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?v0(t,i,o):e==="style"?M0(t,n,i):Da(e)?La(e)||A0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):N0(t,e,i,o))?(Gf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kf(t,e,i,o,r,e!=="value")):t._isVueCE&&(U0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Lt(i)))?Gf(t,On(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),kf(t,e,i,o))};function N0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xf(e)&&nt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xf(e)&&Lt(n)?!1:e in t}function U0(t,e){const n=t._def.props;if(!n)return!1;const i=On(e);return Array.isArray(n)?n.some(s=>On(s)===i):Object.keys(n).some(s=>On(s)===i)}const rr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ze(e)?n=>Zo(e,n):e};function O0(t){t.target.composing=!0}function qf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ai=Symbol("_assign");function Yf(t,e,n){return e&&(t=t.trim()),n&&(t=Na(t)),t}const Ur={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ai]=rr(s);const r=i||s.props&&s.props.type==="number";$i(t,e?"change":"input",o=>{o.target.composing||t[Ai](Yf(t.value,n,r))}),(n||r)&&$i(t,"change",()=>{t.value=Yf(t.value,n,r)}),e||($i(t,"compositionstart",O0),$i(t,"compositionend",qf),$i(t,"change",qf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ai]=rr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Na(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},F0={deep:!0,created(t,e,n){t[Ai]=rr(n),$i(t,"change",()=>{const i=t._modelValue,s=Jr(t),r=t.checked,o=t[Ai];if(Ze(i)){const a=_u(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(pr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Yp(t,r))})},mounted:$f,beforeUpdate(t,e,n){t[Ai]=rr(n),$f(t,e,n)}};function $f(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Ze(e))s=_u(e,i.props.value)>-1;else if(pr(e))s=e.has(i.props.value);else{if(e===n)return;s=mr(e,Yp(t,!0))}t.checked!==s&&(t.checked=s)}const dl={deep:!0,created(t,{value:e,modifiers:{number:n}},i){t._modelValue=e,$i(t,"change",()=>{const s=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?Na(Jr(r)):Jr(r));t[Ai](t.multiple?pr(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,Ba(()=>{t._assigning=!1})}),t[Ai]=rr(i)},mounted(t,{value:e}){Kf(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Ai]=rr(n)},updated(t,{value:e}){t._assigning||Kf(t,e)}};function Kf(t,e){const n=t.multiple,i=Ze(e);if(!(n&&!i&&!pr(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Jr(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=_u(e,a)>-1}else o.selected=e.has(a);else if(mr(Jr(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Jr(t){return"_value"in t?t._value:t.value}function Yp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const B0=["ctrl","shift","alt","meta"],z0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>B0.some(n=>t[`${n}Key`]&&!e.includes(n))},H0=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=z0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},V0=Yt({patchProp:I0},g0);let Zf;function k0(){return Zf||(Zf=Z_(V0))}const G0=(...t)=>{const e=k0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=X0(i);if(!s)return;const r=e._component;!nt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,W0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function W0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function X0(t){return Lt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ys=typeof document<"u";function $p(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function q0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$p(t.default)}const ht=Object.assign;function pl(t,e){const n={};for(const i in e){const s=e[i];n[i]=Vn(s)?s.map(t):t(s)}return n}const Wr=()=>{},Vn=Array.isArray;function Jf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Kp=/#/g,Y0=/&/g,$0=/\//g,K0=/=/g,Z0=/\?/g,Zp=/\+/g,J0=/%5B/g,j0=/%5D/g,Jp=/%5E/g,Q0=/%60/g,jp=/%7B/g,ev=/%7C/g,Qp=/%7D/g,tv=/%20/g;function Pu(t){return t==null?"":encodeURI(""+t).replace(ev,"|").replace(J0,"[").replace(j0,"]")}function nv(t){return Pu(t).replace(jp,"{").replace(Qp,"}").replace(Jp,"^")}function pc(t){return Pu(t).replace(Zp,"%2B").replace(tv,"+").replace(Kp,"%23").replace(Y0,"%26").replace(Q0,"`").replace(jp,"{").replace(Qp,"}").replace(Jp,"^")}function iv(t){return pc(t).replace(K0,"%3D")}function sv(t){return Pu(t).replace(Kp,"%23").replace(Z0,"%3F")}function rv(t){return sv(t).replace($0,"%2F")}function jr(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const ov=/\/$/,av=t=>t.replace(ov,"");function ml(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=fv(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:jr(o)}}function lv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&or(e.matched[i],n.matched[s])&&em(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function or(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function em(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!uv(t[n],e[n]))return!1;return!0}function uv(t,e){return Vn(t)?Qf(t,e):Vn(e)?Qf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Qf(t,e){return Vn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function fv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Bi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let mc=function(t){return t.pop="pop",t.push="push",t}({}),gl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function hv(t){if(!t)if(Ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),av(t)}const dv=/^[^#]+#/;function pv(t,e){return t.replace(dv,"#")+e}function mv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Wa=()=>({left:window.scrollX,top:window.scrollY});function gv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function eh(t,e){return(history.state?history.state.position-e:-1)+t}const gc=new Map;function _v(t,e){gc.set(t,e)}function vv(t){const e=gc.get(t);return gc.delete(t),e}function xv(t){return typeof t=="string"||t&&typeof t=="object"}function tm(t){return typeof t=="string"||typeof t=="symbol"}let Pt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const nm=Symbol("");Pt.MATCHER_NOT_FOUND+"",Pt.NAVIGATION_GUARD_REDIRECT+"",Pt.NAVIGATION_ABORTED+"",Pt.NAVIGATION_CANCELLED+"",Pt.NAVIGATION_DUPLICATED+"";function ar(t,e){return ht(new Error,{type:t,[nm]:!0},e)}function pi(t,e){return t instanceof Error&&nm in t&&(e==null||!!(t.type&e))}const Sv=["params","query","hash"];function yv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Sv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Mv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(Zp," "),r=s.indexOf("="),o=jr(r<0?s:s.slice(0,r)),a=r<0?null:jr(s.slice(r+1));if(o in e){let l=e[o];Vn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function th(t){let e="";for(let n in t){const i=t[n];if(n=iv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vn(i)?i.map(s=>s&&pc(s)):[i&&pc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Ev(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Vn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const bv=Symbol(""),nh=Symbol(""),Xa=Symbol(""),Du=Symbol(""),_c=Symbol("");function Er(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(ar(Pt.NAVIGATION_ABORTED,{from:n,to:e})):h instanceof Error?l(h):xv(h)?l(ar(Pt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function _l(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if($p(l)){const c=(l.__vccOpts||l)[e];c&&r.push(qi(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=q0(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&qi(h,n,i,o,a,s)()}))}}return r}function Tv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>or(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>or(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Av=()=>location.protocol+"//"+location.host;function im(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),jf(a,"")}return jf(n,t)+i+s}function wv(t,e,n,i){let s=[],r=[],o=null;const a=({state:h})=>{const p=im(t,location),g=n.value,S=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===g){o=null;return}m=S?h.position-S.position:0}else i(p);s.forEach(d=>{d(n.value,g,{delta:m,type:mc.pop,direction:m?m>0?gl.forward:gl.back:gl.unknown})})};function l(){o=n.value}function c(h){s.push(h);const p=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ht({},h.state,{scroll:Wa()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function ih(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Wa():null}}function Rv(t){const{history:e,location:n}=window,i={value:im(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Av()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){r(l,ht({},e.state,ih(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=ht({},s.value,e.state,{forward:l,scroll:Wa()});r(u.current,u,!0),r(l,ht({},ih(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Cv(t){t=hv(t);const e=Rv(t),n=wv(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ht({location:"",base:t,go:i,createHref:pv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let hs=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Bt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Bt||{});const Pv={type:hs.Static,value:""},Dv=/[a-zA-Z0-9_]/;function Lv(t){if(!t)return[[]];if(t==="/")return[[Pv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=Bt.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===Bt.Static?r.push({type:hs.Static,value:c}):n===Bt.Param||n===Bt.ParamRegExp||n===Bt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:hs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Bt.ParamRegExp){i=n,n=Bt.EscapeNext;continue}switch(n){case Bt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=Bt.Param):h();break;case Bt.EscapeNext:h(),n=i;break;case Bt.Param:l==="("?n=Bt.ParamRegExp:Dv.test(l)?h():(f(),n=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Bt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Bt.ParamRegExpEnd:u+=l;break;case Bt.ParamRegExpEnd:f(),n=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Bt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const sh="[^/]+?",Iv={sensitive:!1,strict:!1,start:!0,end:!0};var on=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(on||{});const Nv=/[.+*?^${}()[\]/\\]/g;function Uv(t,e){const n=ht({},Iv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[on.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=on.Segment+(n.sensitive?on.BonusCaseSensitive:0);if(h.type===hs.Static)f||(s+="/"),s+=h.value.replace(Nv,"\\$&"),p+=on.Static;else if(h.type===hs.Param){const{value:g,repeatable:S,optional:m,regexp:d}=h;r.push({name:g,repeatable:S,optional:m});const M=d||sh;if(M!==sh){p+=on.BonusCustomRegExp;try{`${M}`}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+x.message)}}let E=S?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,p+=on.Dynamic,m&&(p+=on.BonusOptional),S&&(p+=on.BonusRepeatable),M===".*"&&(p+=on.BonusWildcard)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=on.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=r[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===hs.Static)u+=p.value;else if(p.type===hs.Param){const{value:g,repeatable:S,optional:m}=p,d=g in c?c[g]:"";if(Vn(d)&&!S)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=Vn(d)?d.join("/"):d;if(!M)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Ov(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===on.Static+on.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===on.Static+on.Segment?1:-1:0}function sm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Ov(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(rh(i))return 1;if(rh(s))return-1}return s.length-i.length}function rh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Fv={strict:!1,end:!0,sensitive:!1};function Bv(t,e,n){const i=Uv(Lv(t.path),n),s=ht(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zv(t,e){const n=[],i=new Map;e=Jf(Fv,e);function s(f){return i.get(f)}function r(f,h,p){const g=!p,S=ah(f);S.aliasOf=p&&p.record;const m=Jf(e,f),d=[S];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of x)d.push(ah(ht({},S,{components:p?p.record.components:S.components,path:R,aliasOf:p?p.record:S})))}let M,E;for(const x of d){const{path:R}=x;if(h&&R[0]!=="/"){const T=h.record.path,D=T[T.length-1]==="/"?"":"/";x.path=h.record.path+(R&&D+R)}if(M=Bv(x,h,m),p?p.alias.push(M):(E=E||M,E!==M&&E.alias.push(M),g&&f.name&&!lh(M)&&o(f.name)),rm(M)&&l(M),S.children){const T=S.children;for(let D=0;D<T.length;D++)r(T[D],M,p&&p.children[D])}p=p||M}return E?()=>{o(E)}:Wr}function o(f){if(tm(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=kv(f,n);n.splice(h,0,f),f.record.name&&!lh(f)&&i.set(f.record.name,f)}function c(f,h){let p,g={},S,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw ar(Pt.MATCHER_NOT_FOUND,{location:f});m=p.record.name,g=ht(oh(h.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&oh(f.params,p.keys.map(E=>E.name))),S=p.stringify(g)}else if(f.path!=null)S=f.path,p=n.find(E=>E.re.test(S)),p&&(g=p.parse(S),m=p.record.name);else{if(p=h.name?i.get(h.name):n.find(E=>E.re.test(h.path)),!p)throw ar(Pt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,g=ht({},h.params,f.params),S=p.stringify(g)}const d=[];let M=p;for(;M;)d.unshift(M.record),M=M.parent;return{name:m,path:S,params:g,matched:d,meta:Vv(d)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function oh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function ah(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Hv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Hv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function lh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vv(t){return t.reduce((e,n)=>ht(e,n.meta),{})}function kv(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;sm(t,e[r])<0?i=r:n=r+1}const s=Gv(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Gv(t){let e=t;for(;e=e.parent;)if(rm(e)&&sm(t,e)===0)return e}function rm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ch(t){const e=Bn(Xa),n=Bn(Du),i=vt(()=>{const l=ni(t.to);return e.resolve(l)}),s=vt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(or.bind(null,u));if(h>-1)return h;const p=uh(l[c-2]);return c>1&&uh(u)===p&&f[f.length-1].path!==p?f.findIndex(or.bind(null,l[c-2])):h}),r=vt(()=>s.value>-1&&Yv(n.params,i.value.params)),o=vt(()=>s.value>-1&&s.value===n.matched.length-1&&em(n.params,i.value.params));function a(l={}){if(qv(l)){const c=e[ni(t.replace)?"replace":"push"](ni(t.to)).catch(Wr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:vt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Wv(t){return t.length===1?t[0]:t}const Xv=vp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ch,setup(t,{slots:e}){const n=ro(ch(t)),{options:i}=Bn(Xa),s=vt(()=>({[fh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[fh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Wv(e.default(n));return t.custom?r:Xp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),om=Xv;function qv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yv(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Vn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function uh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fh=(t,e,n)=>t??e??n,$v=vp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Bn(_c),s=vt(()=>t.route||i.value),r=Bn(nh,0),o=vt(()=>{let c=ni(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=vt(()=>s.value.matched[o.value]);Jo(nh,vt(()=>o.value+1)),Jo(bv,a),Jo(_c,s);const l=st();return xs(()=>[l.value,a.value,t.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!or(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return hh(n.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Xp(h,ht({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return hh(n.default,{Component:m,route:c})||m}}});function hh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const am=$v;function Kv(t){const e=zv(t.routes,t),n=t.parseQuery||Mv,i=t.stringifyQuery||th,s=t.history,r=Er(),o=Er(),a=Er(),l=n_(Bi);let c=Bi;Ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pl.bind(null,U=>""+U),f=pl.bind(null,rv),h=pl.bind(null,jr);function p(U,q){let ue,ye;return tm(U)?(ue=e.getRecordMatcher(U),ye=q):ye=U,e.addRoute(ye,ue)}function g(U){const q=e.getRecordMatcher(U);q&&e.removeRoute(q)}function S(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function d(U,q){if(q=ht({},q||l.value),typeof U=="string"){const F=ml(n,U,q.path),J=e.resolve({path:F.path},q),k=s.createHref(F.fullPath);return ht(F,J,{params:h(J.params),hash:jr(F.hash),redirectedFrom:void 0,href:k})}let ue;if(U.path!=null)ue=ht({},U,{path:ml(n,U.path,q.path).path});else{const F=ht({},U.params);for(const J in F)F[J]==null&&delete F[J];ue=ht({},U,{params:f(F)}),q.params=f(q.params)}const ye=e.resolve(ue,q),fe=U.hash||"";ye.params=u(h(ye.params));const w=lv(i,ht({},U,{hash:nv(fe),path:ye.path})),C=s.createHref(w);return ht({fullPath:w,hash:fe,query:i===th?Ev(U.query):U.query||{}},ye,{redirectedFrom:void 0,href:C})}function M(U){return typeof U=="string"?ml(n,U,l.value.path):ht({},U)}function E(U,q){if(c!==U)return ar(Pt.NAVIGATION_CANCELLED,{from:q,to:U})}function x(U){return D(U)}function R(U){return x(ht(M(U),{replace:!0}))}function T(U,q){const ue=U.matched[U.matched.length-1];if(ue&&ue.redirect){const{redirect:ye}=ue;let fe=typeof ye=="function"?ye(U,q):ye;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=M(fe):{path:fe},fe.params={}),ht({query:U.query,hash:U.hash,params:fe.path!=null?{}:U.params},fe)}}function D(U,q){const ue=c=d(U),ye=l.value,fe=U.state,w=U.force,C=U.replace===!0,F=T(ue,ye);if(F)return D(ht(M(F),{state:typeof F=="object"?ht({},fe,F.state):fe,force:w,replace:C}),q||ue);const J=ue;J.redirectedFrom=q;let k;return!w&&cv(i,ye,ue)&&(k=ar(Pt.NAVIGATION_DUPLICATED,{to:J,from:ye}),_e(ye,ye,!0,!1)),(k?Promise.resolve(k):N(J,ye)).catch(Q=>pi(Q)?pi(Q,Pt.NAVIGATION_GUARD_REDIRECT)?Q:Me(Q):oe(Q,J,ye)).then(Q=>{if(Q){if(pi(Q,Pt.NAVIGATION_GUARD_REDIRECT))return D(ht({replace:C},M(Q.to),{state:typeof Q.to=="object"?ht({},fe,Q.to.state):fe,force:w}),q||J)}else Q=H(J,ye,!0,C,fe);return I(J,ye,Q),Q})}function v(U,q){const ue=E(U,q);return ue?Promise.reject(ue):Promise.resolve()}function A(U){const q=it.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(U):U()}function N(U,q){let ue;const[ye,fe,w]=Tv(U,q);ue=_l(ye.reverse(),"beforeRouteLeave",U,q);for(const F of ye)F.leaveGuards.forEach(J=>{ue.push(qi(J,U,q))});const C=v.bind(null,U,q);return ue.push(C),Z(ue).then(()=>{ue=[];for(const F of r.list())ue.push(qi(F,U,q));return ue.push(C),Z(ue)}).then(()=>{ue=_l(fe,"beforeRouteUpdate",U,q);for(const F of fe)F.updateGuards.forEach(J=>{ue.push(qi(J,U,q))});return ue.push(C),Z(ue)}).then(()=>{ue=[];for(const F of w)if(F.beforeEnter)if(Vn(F.beforeEnter))for(const J of F.beforeEnter)ue.push(qi(J,U,q));else ue.push(qi(F.beforeEnter,U,q));return ue.push(C),Z(ue)}).then(()=>(U.matched.forEach(F=>F.enterCallbacks={}),ue=_l(w,"beforeRouteEnter",U,q,A),ue.push(C),Z(ue))).then(()=>{ue=[];for(const F of o.list())ue.push(qi(F,U,q));return ue.push(C),Z(ue)}).catch(F=>pi(F,Pt.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function I(U,q,ue){a.list().forEach(ye=>A(()=>ye(U,q,ue)))}function H(U,q,ue,ye,fe){const w=E(U,q);if(w)return w;const C=q===Bi,F=Ys?history.state:{};ue&&(ye||C?s.replace(U.fullPath,ht({scroll:C&&F&&F.scroll},fe)):s.push(U.fullPath,fe)),l.value=U,_e(U,q,ue,C),Me()}let se;function ae(){se||(se=s.listen((U,q,ue)=>{if(!$e.listening)return;const ye=d(U),fe=T(ye,$e.currentRoute.value);if(fe){D(ht(fe,{replace:!0,force:!0}),ye).catch(Wr);return}c=ye;const w=l.value;Ys&&_v(eh(w.fullPath,ue.delta),Wa()),N(ye,w).catch(C=>pi(C,Pt.NAVIGATION_ABORTED|Pt.NAVIGATION_CANCELLED)?C:pi(C,Pt.NAVIGATION_GUARD_REDIRECT)?(D(ht(M(C.to),{force:!0}),ye).then(F=>{pi(F,Pt.NAVIGATION_ABORTED|Pt.NAVIGATION_DUPLICATED)&&!ue.delta&&ue.type===mc.pop&&s.go(-1,!1)}).catch(Wr),Promise.reject()):(ue.delta&&s.go(-ue.delta,!1),oe(C,ye,w))).then(C=>{C=C||H(ye,w,!1),C&&(ue.delta&&!pi(C,Pt.NAVIGATION_CANCELLED)?s.go(-ue.delta,!1):ue.type===mc.pop&&pi(C,Pt.NAVIGATION_ABORTED|Pt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),I(ye,w,C)}).catch(Wr)}))}let Y=Er(),ne=Er(),G;function oe(U,q,ue){Me(U);const ye=ne.list();return ye.length?ye.forEach(fe=>fe(U,q,ue)):console.error(U),Promise.reject(U)}function de(){return G&&l.value!==Bi?Promise.resolve():new Promise((U,q)=>{Y.add([U,q])})}function Me(U){return G||(G=!U,ae(),Y.list().forEach(([q,ue])=>U?ue(U):q()),Y.reset()),U}function _e(U,q,ue,ye){const{scrollBehavior:fe}=t;if(!Ys||!fe)return Promise.resolve();const w=!ue&&vv(eh(U.fullPath,0))||(ye||!ue)&&history.state&&history.state.scroll||null;return Ba().then(()=>fe(U,q,w)).then(C=>C&&gv(C)).catch(C=>oe(C,U,q))}const Ee=U=>s.go(U);let Je;const it=new Set,$e={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:S,resolve:d,options:t,push:x,replace:R,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:de,install(U){U.component("RouterLink",om),U.component("RouterView",am),U.config.globalProperties.$router=$e,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>ni(l)}),Ys&&!Je&&l.value===Bi&&(Je=!0,x(s.location).catch(ye=>{}));const q={};for(const ye in Bi)Object.defineProperty(q,ye,{get:()=>l.value[ye],enumerable:!0});U.provide(Xa,$e),U.provide(Du,ap(q)),U.provide(_c,l);const ue=U.unmount;it.add(U),U.unmount=function(){it.delete(U),it.size<1&&(c=Bi,se&&se(),se=null,l.value=Bi,Je=!1,G=!1),ue()}}};function Z(U){return U.reduce((q,ue)=>q.then(()=>A(ue)),Promise.resolve())}return $e}function lm(){return Bn(Xa)}function cm(t){return Bn(Du)}const Lu="vision-portal-session",Mo=(()=>{try{return JSON.parse(localStorage.getItem(Lu)||"null")}catch{return null}})(),qa=st(Mo&&Mo.token&&Mo.user?Mo:null),xa=vt(()=>{var t;return!!((t=qa.value)!=null&&t.token)}),Zv=vt(()=>{var t;return((t=qa.value)==null?void 0:t.user)||null}),Jv=t=>{qa.value=t,localStorage.setItem(Lu,JSON.stringify(t))},jv=()=>{qa.value=null,localStorage.removeItem(Lu)},Qv={class:"app-shell"},ex={class:"sidebar"},tx={class:"brand"},nx={class:"brand-title-row"},ix={key:0,class:"brand-user-actions"},sx={class:"nav-group-title"},rx={class:"icon"},ox={class:"main-panel"},ax={class:"topbar"},lx={class:"eyebrow"},cx={__name:"App",setup(t){const e=cm(),n=lm(),i=[{title:"平台總覽",requiresAuth:!0,items:[{label:"首頁",to:"/",icon:"◉"}]},{title:"系統介紹",items:[{label:"操作指引",to:"/guide",icon:"◌"},{label:"定位技術",to:"/technology",icon:"◌"}]},{title:"歷史資料",requiresAuth:!0,items:[{label:"物件資料",to:"/history/object",icon:"◌"},{label:"施工任務",to:"/history/tasks",icon:"◌"},{label:"操作紀錄",to:"/history/operations",icon:"◌"}]},{title:"媒體資料",requiresAuth:!0,items:[{label:"影像串流",to:"/media/stream",icon:"◌"},{label:"語音提示",to:"/media/voice",icon:"◌"}]}],s=vt(()=>i.filter(l=>!l.requiresAuth||xa.value)),r=vt(()=>{const l=i.flatMap(c=>c.items).find(c=>c.to===e.path);return(l==null?void 0:l.label)||"首頁"}),o=()=>n.push("/account/login"),a=()=>{jv(),n.push("/guide")};return(l,c)=>{var u;return Ue(),Be("div",Qv,[X("aside",ex,[X("div",tx,[c[2]||(c[2]=X("div",{class:"brand-mark"},"V",-1)),X("div",null,[c[1]||(c[1]=X("p",{class:"brand-eyebrow"},"終端定位平台",-1)),X("div",nx,[c[0]||(c[0]=X("h2",null,"Vision Portal",-1)),ni(xa)?(Ue(),Be("div",ix,[X("span",null,Ne((u=ni(Zv))==null?void 0:u.name),1),X("button",{type:"button",class:"brand-logout",onClick:a},"登出")])):(Ue(),Be("button",{key:1,type:"button",class:"brand-login",onClick:o},"登入"))])])]),(Ue(!0),Be(Dt,null,oi(s.value,f=>(Ue(),Be("nav",{class:"nav-section",key:f.title},[X("p",sx,Ne(f.title),1),(Ue(!0),Be(Dt,null,oi(f.items,h=>(Ue(),Vp(ni(om),{key:h.to,class:"nav-link",to:h.to,"exact-active-class":"active"},{default:mp(()=>[X("span",rx,Ne(h.icon),1),X("span",null,Ne(h.label),1)]),_:2},1032,["to"]))),128))]))),128))]),X("main",ox,[X("header",ax,[X("div",null,[X("p",lx,Ne(r.value),1),c[3]||(c[3]=X("h1",null,"終端定位系統管理介面",-1))]),c[4]||(c[4]=X("div",{class:"topbar-badge"},"已連線",-1))]),fn(ni(am))])])}}};function um(t,e){return function(){return t.apply(e,arguments)}}const{toString:ux}=Object.prototype,{getPrototypeOf:lr}=Object,{iterator:lo,toStringTag:fm}=Symbol,Sa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Qr=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),Sa(n,e))return!0;n=lr(n)}return!1},fx=(t,e)=>t!=null&&Qr(t,e)?t[e]:void 0,Iu=(t=>e=>{const n=ux.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),kn=t=>(t=t.toLowerCase(),e=>Iu(e)===t),Ya=t=>e=>typeof e===t,{isArray:Ms}=Array,cr=Ya("undefined");function _r(t){return t!==null&&!cr(t)&&t.constructor!==null&&!cr(t.constructor)&&vn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const hm=kn("ArrayBuffer");function hx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&hm(t.buffer),e}const dx=Ya("string"),vn=Ya("function"),dm=Ya("number"),vr=t=>t!==null&&typeof t=="object",px=t=>t===!0||t===!1,ea=t=>{if(!vr(t))return!1;const e=lr(t);return(e===null||e===Object.prototype||lr(e)===null)&&!Qr(t,fm)&&!Qr(t,lo)},mx=t=>{if(!vr(t)||_r(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},gx=kn("Date"),_x=kn("File"),vx=t=>!!(t&&typeof t.uri<"u"),xx=t=>t&&typeof t.getParts<"u",Sx=kn("Blob"),yx=kn("FileList"),Mx=t=>vr(t)&&vn(t.pipe);function Ex(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const dh=Ex(),ph=typeof dh.FormData<"u"?dh.FormData:void 0,bx=t=>{if(!t)return!1;if(ph&&t instanceof ph)return!0;const e=lr(t);if(!e||e===Object.prototype||!vn(t.append))return!1;const n=Iu(t);return n==="formdata"||n==="object"&&vn(t.toString)&&t.toString()==="[object FormData]"},Tx=kn("URLSearchParams"),[Ax,wx,Rx,Cx]=["ReadableStream","Request","Response","Headers"].map(kn),Px=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function co(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Ms(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(_r(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function pm(t,e){if(_r(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,mm=t=>!cr(t)&&t!==ds;function vc(...t){const{caseless:e,skipUndefined:n}=mm(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&pm(i,o)||o,l=Sa(i,a)?i[a]:void 0;ea(l)&&ea(r)?i[a]=vc(l,r):ea(r)?i[a]=vc({},r):Ms(r)?i[a]=r.slice():(!n||!cr(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++){const a=t[r];if(!a||_r(a)||(co(a,s),typeof a!="object"||Ms(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];kx.call(a,u)&&s(a[u],u)}}return i}const Dx=(t,e,n,{allOwnKeys:i}={})=>(co(e,(s,r)=>{n&&vn(s)?Object.defineProperty(t,r,{__proto__:null,value:um(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),Lx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Ix=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Nx=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&lr(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Ux=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Ox=t=>{if(!t)return null;if(Ms(t))return t;let e=t.length;if(!dm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Fx=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&lr(Uint8Array)),Bx=(t,e)=>{const i=(t&&t[lo]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},zx=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Hx=kn("HTMLFormElement"),Vx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:kx}=Object.prototype,Gx=kn("RegExp"),gm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};co(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Wx=t=>{gm(t,(e,n)=>{if(vn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(vn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Xx=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Ms(t)?i(t):i(String(t).split(e)),n},qx=()=>{},Yx=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function $x(t){return!!(t&&vn(t.append)&&t[fm]==="FormData"&&t[lo])}const Kx=t=>{const e=new WeakSet,n=i=>{if(vr(i)){if(e.has(i))return;if(_r(i))return i;if(!("toJSON"in i)){e.add(i);const s=Ms(i)?[]:{};return co(i,(r,o)=>{const a=n(r);!cr(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},Zx=kn("AsyncFunction"),Jx=t=>t&&(vr(t)||vn(t))&&vn(t.then)&&vn(t.catch),_m=((t,e)=>t?setImmediate:e?((n,i)=>(ds.addEventListener("message",({source:s,data:r})=>{s===ds&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),ds.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",vn(ds.postMessage)),jx=typeof queueMicrotask<"u"?queueMicrotask.bind(ds):typeof process<"u"&&process.nextTick||_m,vm=t=>t!=null&&vn(t[lo]),Qx=t=>t!=null&&Qr(t,lo)&&vm(t),V={isArray:Ms,isArrayBuffer:hm,isBuffer:_r,isFormData:bx,isArrayBufferView:hx,isString:dx,isNumber:dm,isBoolean:px,isObject:vr,isPlainObject:ea,isEmptyObject:mx,isReadableStream:Ax,isRequest:wx,isResponse:Rx,isHeaders:Cx,isUndefined:cr,isDate:gx,isFile:_x,isReactNativeBlob:vx,isReactNative:xx,isBlob:Sx,isRegExp:Gx,isFunction:vn,isStream:Mx,isURLSearchParams:Tx,isTypedArray:Fx,isFileList:yx,forEach:co,merge:vc,extend:Dx,trim:Px,stripBOM:Lx,inherits:Ix,toFlatObject:Nx,kindOf:Iu,kindOfTest:kn,endsWith:Ux,toArray:Ox,forEachEntry:Bx,matchAll:zx,isHTMLForm:Hx,hasOwnProperty:Sa,hasOwnProp:Sa,hasOwnInPrototypeChain:Qr,getSafeProp:fx,reduceDescriptors:gm,freezeMethods:Wx,toObjectSet:Xx,toCamelCase:Vx,noop:qx,toFiniteNumber:Yx,findKey:pm,global:ds,isContextDefined:mm,isSpecCompliantForm:$x,toJSONObject:Kx,isAsyncFn:Zx,isThenable:Jx,setImmediate:_m,asap:jx,isIterable:vm,isSafeIterable:Qx},eS=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tS=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&eS[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function nS(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const iS=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),sS=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Nu(t,e){return V.isArray(t)?t.map(n=>Nu(n,e)):nS(String(t).replace(e,""))}const rS=t=>Nu(t,iS),oS=t=>Nu(t,sS);function xm(t){const e=Object.create(null);return V.forEach(t.toJSON(),(n,i)=>{e[i]=oS(n)}),e}const mh=Symbol("internals");function br(t){return t&&String(t).trim().toLowerCase()}function ta(t){return t===!1||t==null?t:V.isArray(t)?t.map(ta):rS(String(t))}function aS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const lS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function vl(t,e,n,i,s){if(V.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!V.isString(e)){if(V.isString(i))return e.indexOf(i)!==-1;if(V.isRegExp(i))return i.test(e)}}function cS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function uS(t,e){const n=V.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let nn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=br(l);if(!u)return;const f=V.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=ta(a))}const o=(a,l)=>V.forEach(a,(c,u)=>r(c,u,l));if(V.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(V.isString(e)&&(e=e.trim())&&!lS(e))o(tS(e),n);else if(V.isObject(e)&&V.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!V.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],V.hasOwnProp(a,c)?(l=a[c],a[c]=V.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=br(e),e){const i=V.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return aS(s);if(V.isFunction(n))return n.call(this,s,i);if(V.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=br(e),e){const i=V.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||vl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=br(o),o){const a=V.findKey(i,o);a&&(!n||vl(i,i[a],a,n))&&(delete i[a],s=!0)}}return V.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||vl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return V.forEach(this,(s,r)=>{const o=V.findKey(i,r);if(o){n[o]=ta(s),delete n[r];return}const a=e?cS(r):String(r).trim();a!==r&&delete n[r],n[a]=ta(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return V.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&V.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[mh]=this[mh]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=br(o);i[a]||(uS(s,o),i[a]=!0)}return V.isArray(e)?e.forEach(r):r(e),this}};nn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);V.reduceDescriptors(nn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});V.freezeMethods(nn);const fS="[REDACTED ****]";function hS(t){if(V.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(V.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function dS(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||V.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof nn&&(r=r.toJSON()),i.push(r);let o;if(V.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);V.isUndefined(c)||(o[l]=c)});else{if(!V.isPlainObject(r)&&hS(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?fS:s(l);V.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let De=class Sm extends Error{static from(e,n,i,s,r,o){const a=new Sm(e.message,n||e.code,i,s,r);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&V.hasOwnProp(e,"redact")?e.redact:void 0,i=V.isArray(n)&&n.length>0?dS(e,n):V.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};De.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";De.ERR_BAD_OPTION="ERR_BAD_OPTION";De.ECONNABORTED="ECONNABORTED";De.ETIMEDOUT="ETIMEDOUT";De.ECONNREFUSED="ECONNREFUSED";De.ERR_NETWORK="ERR_NETWORK";De.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";De.ERR_DEPRECATED="ERR_DEPRECATED";De.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";De.ERR_BAD_REQUEST="ERR_BAD_REQUEST";De.ERR_CANCELED="ERR_CANCELED";De.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";De.ERR_INVALID_URL="ERR_INVALID_URL";De.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const pS=null,ym=100;function xc(t){return V.isPlainObject(t)||V.isArray(t)}function Mm(t){return V.endsWith(t,"[]")?t.slice(0,-2):t}function xl(t,e,n){return t?t.concat(e).map(function(s,r){return s=Mm(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function mS(t){return V.isArray(t)&&!t.some(xc)}const gS=V.toFlatObject(V,{},null,function(e){return/^is[A-Z]/.test(e)});function $a(t,e,n){if(!V.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=V.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,E){return!V.isUndefined(E[M])});const i=n.metaTokens,s=n.visitor||g,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?ym:n.maxDepth,c=a&&V.isSpecCompliantForm(e),u=[];if(!V.isFunction(s))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(V.isDate(d))return d.toISOString();if(V.isBoolean(d))return d.toString();if(!c&&V.isBlob(d))throw new De("Blob is not supported. Use a Buffer instead.");if(V.isArrayBuffer(d)||V.isTypedArray(d)){if(c&&typeof a=="function")return new a([d]);if(typeof Buffer<"u")return Buffer.from(d);throw new De("Blob is not supported. Use a Buffer instead.",De.ERR_NOT_SUPPORT)}return d}function h(d){if(d>l)throw new De("Object is too deeply nested ("+d+" levels). Max depth: "+l,De.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(d,M){if(l===1/0)return JSON.stringify(d);const E=[];return JSON.stringify(d,function(R,T){if(!V.isObject(T))return T;for(;E.length&&E[E.length-1]!==this;)E.pop();return E.push(T),h(M+E.length-1),T})}function g(d,M,E){let x=d;if(V.isReactNative(e)&&V.isReactNativeBlob(d))return e.append(xl(E,M,r),f(d)),!1;if(d&&!E&&typeof d=="object"){if(V.endsWith(M,"{}"))M=i?M:M.slice(0,-2),d=p(d,1);else if(V.isArray(d)&&mS(d)||(V.isFileList(d)||V.endsWith(M,"[]"))&&(x=V.toArray(d)))return M=Mm(M),x.forEach(function(T,D){!(V.isUndefined(T)||T===null)&&e.append(o===!0?xl([M],D,r):o===null?M:M+"[]",f(T))}),!1}return xc(d)?!0:(e.append(xl(E,M,r),f(d)),!1)}const S=Object.assign(gS,{defaultVisitor:g,convertValue:f,isVisitable:xc});function m(d,M,E=0){if(!V.isUndefined(d)){if(h(E),u.indexOf(d)!==-1)throw new Error("Circular reference detected in "+M.join("."));u.push(d),V.forEach(d,function(R,T){(!(V.isUndefined(R)||R===null)&&s.call(e,R,V.isString(T)?T.trim():T,M,S))===!0&&m(R,M?M.concat(T):[T],E+1)}),u.pop()}}if(!V.isObject(t))throw new TypeError("data must be an object");return m(t),e}function gh(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Uu(t,e){this._pairs=[],t&&$a(t,this,e)}const Em=Uu.prototype;Em.append=function(e,n){this._pairs.push([e,n])};Em.toString=function(e){const n=e?i=>e.call(this,i,gh):gh;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function _S(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function bm(t,e,n){if(!e)return t;t=t||"";const i=V.isFunction(n)?{serialize:n}:n,s=V.getSafeProp(i,"encode")||_S,r=V.getSafeProp(i,"serialize");let o;if(r?o=r(e,i):o=V.isURLSearchParams(e)?e.toString():new Uu(e,i).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class _h{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){V.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Ou={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},vS=typeof URLSearchParams<"u"?URLSearchParams:Uu,xS=typeof FormData<"u"?FormData:null,SS=typeof Blob<"u"?Blob:null,yS={isBrowser:!0,classes:{URLSearchParams:vS,FormData:xS,Blob:SS},protocols:["http","https","file","blob","url","data"]},Fu=typeof window<"u"&&typeof document<"u",Sc=typeof navigator=="object"&&navigator||void 0,MS=Fu&&(!Sc||["ReactNative","NativeScript","NS"].indexOf(Sc.product)<0),ES=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bS=Fu&&window.location.href||"http://localhost",TS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fu,hasStandardBrowserEnv:MS,hasStandardBrowserWebWorkerEnv:ES,navigator:Sc,origin:bS},Symbol.toStringTag,{value:"Module"})),Xt={...TS,...yS};function AS(t,e){return $a(t,new Xt.classes.URLSearchParams,{visitor:function(n,i,s,r){return Xt.isNode&&V.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}const vh=ym;function Tm(t){if(t>vh)throw new De("FormData field is too deeply nested ("+t+" levels). Max depth: "+vh,De.ERR_FORM_DATA_DEPTH_EXCEEDED)}function wS(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)Tm(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function RS(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Am(t){function e(n,i,s,r){Tm(r);let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&V.isArray(s)?s.length:o,l?(V.hasOwnProp(s,o)?s[o]=V.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!V.hasOwnProp(s,o)||!V.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&V.isArray(s[o])&&(s[o]=RS(s[o])),!a)}if(V.isFormData(t)&&V.isFunction(t.entries)){const n={};return V.forEachEntry(t,(i,s)=>{e(wS(i),s,n,0)}),n}return null}const Ds=(t,e)=>t!=null&&V.hasOwnProp(t,e)?t[e]:void 0;function CS(t,e,n){if(V.isString(t))try{return(e||JSON.parse)(t),V.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const uo={transitional:Ou,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=V.isObject(e);if(r&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return s?JSON.stringify(Am(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e)||V.isReadableStream(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=Ds(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return AS(e,l).toString();if((a=V.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Ds(this,"env"),u=c&&c.FormData;return $a(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),CS(e)):e}],transformResponse:[function(e){const n=Ds(this,"transitional")||uo.transitional,i=n&&n.forcedJSONParsing,s=Ds(this,"responseType"),r=s==="json";if(V.isResponse(e)||V.isReadableStream(e))return e;if(e&&V.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,Ds(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?De.from(l,De.ERR_BAD_RESPONSE,this,null,Ds(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xt.classes.FormData,Blob:Xt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch","query"],t=>{uo.headers[t]={}});function Sl(t,e){const n=this||uo,i=e||n,s=nn.from(i.headers);let r=i.data;return V.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function wm(t){return!!(t&&t.__CANCEL__)}let fo=class extends De{constructor(e,n,i){super(e??"canceled",De.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Rm(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new De("Request failed with status code "+n.status,n.status>=400&&n.status<500?De.ERR_BAD_REQUEST:De.ERR_BAD_RESPONSE,n.config,n.request,n))}function PS(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function DS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,h=0;for(;f!==s;)h+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(h*1e3/p):void 0}}function LS(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const ya=(t,e,n=3)=>{let i=0;const s=DS(50,250);return LS(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},xh=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Sh=t=>(...e)=>V.asap(()=>t(...e)),IS=Xt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Xt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Xt.origin),Xt.navigator&&/(msie|trident)/i.test(Xt.navigator.userAgent)):()=>!0,NS=Xt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];V.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),V.isString(i)&&a.push(`path=${i}`),V.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),V.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function US(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function OS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const FS=/^https?:(?!\/\/)/i,BS=/[\t\n\r]/g;function zS(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function HS(t){return zS(t).replace(BS,"")}function yh(t,e){if(typeof t=="string"&&FS.test(HS(t)))throw new De('Invalid URL: missing "//" after protocol',De.ERR_INVALID_URL,e)}function Cm(t,e,n,i){yh(e,i);let s=!US(e);return t&&(s||n===!1)?(yh(t,i),OS(t,e)):e}const Mh=t=>t instanceof nn?{...t}:t;function Es(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,h,p){return V.isPlainObject(u)&&V.isPlainObject(f)?V.merge.call({caseless:p},u,f):V.isPlainObject(f)?V.merge({},f):V.isArray(f)?f.slice():f}function s(u,f,h,p){if(V.isUndefined(f)){if(!V.isUndefined(u))return i(void 0,u,h,p)}else return i(u,f,h,p)}function r(u,f){if(!V.isUndefined(f))return i(void 0,f)}function o(u,f){if(V.isUndefined(f)){if(!V.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=V.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!V.isUndefined(f))if(V.isPlainObject(f)){if(V.hasOwnProp(f,u))return f[u]}else return;const h=V.hasOwnProp(t,"transitional")?t.transitional:void 0;if(V.isPlainObject(h)&&V.hasOwnProp(h,u))return h[u]}function l(u,f,h){if(V.hasOwnProp(e,h))return i(u,f);if(V.hasOwnProp(t,h))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,h)=>s(Mh(u),Mh(f),h,!0)};return V.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const h=V.hasOwnProp(c,f)?c[f]:s,p=V.hasOwnProp(t,f)?t[f]:void 0,g=V.hasOwnProp(e,f)?e[f]:void 0,S=h(p,g,f);V.isUndefined(S)&&h!==l||(n[f]=S)}),V.hasOwnProp(e,"validateStatus")&&V.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(V.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const VS=["content-type","content-length"];function kS(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,s])=>{VS.includes(i.toLowerCase())&&t.set(i,s)})}const GS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Pm(t){const e=Es({},t),n=h=>V.hasOwnProp(e,h)?e[h]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=nn.from(a),e.url=bm(Cm(c,f,u,e),n("params"),n("paramsSerializer")),l){const h=V.getSafeProp(l,"username")||"",p=V.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(h+":"+(p?GS(p):"")))}catch(g){throw De.from(g,De.ERR_BAD_OPTION_VALUE,t)}}if(V.isFormData(i)&&(Xt.hasStandardBrowserEnv||Xt.hasStandardBrowserWebWorkerEnv||V.isReactNative(i)?a.setContentType(void 0):V.isFunction(i.getHeaders)&&kS(a,i.getHeaders(),n("formDataHeaderPolicy"))),Xt.hasStandardBrowserEnv&&(V.isFunction(s)&&(s=s(e)),s===!0||s==null&&IS(e.url))){const p=r&&o&&NS.read(o);p&&a.set(r,p)}return e}const WS=typeof XMLHttpRequest<"u",XS=WS&&function(t){return new Promise(function(n,i){const s=Pm(t);let r=s.data;const o=nn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,h,p,g;function S(){p&&p(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function d(){if(!m)return;const E=nn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),R={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};Rm(function(D){n(D),S()},function(D){i(D),S()},R),m=null}"onloadend"in m?m.onloadend=d:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(d)},m.onabort=function(){m&&(i(new De("Request aborted",De.ECONNABORTED,t,m)),S(),m=null)},m.onerror=function(x){const R=x&&x.message?x.message:"Network Error",T=new De(R,De.ERR_NETWORK,t,m);T.event=x||null,i(T),S(),m=null},m.ontimeout=function(){let x=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const R=s.transitional||Ou;s.timeoutErrorMessage&&(x=s.timeoutErrorMessage),i(new De(x,R.clarifyTimeoutError?De.ETIMEDOUT:De.ECONNABORTED,t,m)),S(),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&V.forEach(xm(o),function(x,R){m.setRequestHeader(R,x)}),V.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([h,g]=ya(c,!0),m.addEventListener("progress",h)),l&&m.upload&&([f,p]=ya(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(s.cancelToken||s.signal)&&(u=E=>{m&&(i(!E||E.type?new fo(null,t,m):E),m.abort(),S(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const M=PS(s.url);if(M&&!Xt.protocols.includes(M)){i(new De("Unsupported protocol "+M+":",De.ERR_BAD_REQUEST,t)),S();return}m.send(r||null)})},qS=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof De?c:new fo(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new De(`timeout of ${e}ms exceeded`,De.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>V.asap(o),a},YS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},$S=async function*(t,e){for await(const n of KS(t))yield*YS(n,e)},KS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Eh=(t,e,n,i)=>{const s=$S(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let h=r+=f;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Ma=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,ZS=(t,e,n)=>e+2<n&&Ma(t.charCodeAt(e+1))&&Ma(t.charCodeAt(e+2));function JS(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let p=0;p<a;p++)if(i.charCodeAt(p)===37&&p+2<a){const g=i.charCodeAt(p+1),S=i.charCodeAt(p+2);Ma(g)&&Ma(S)&&(o-=2,p+=2)}let l=0,c=a-1;const u=p=>p>=2&&i.charCodeAt(p-2)===37&&i.charCodeAt(p-1)===51&&(i.charCodeAt(p)===68||i.charCodeAt(p)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const h=Math.floor(o/4)*3-(l||0);return h>0?h:0}let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&ZS(i,o,a))r+=1,o+=2;else if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const Bu="1.18.1",bh=64*1024,{isFunction:Eo}=V,jS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Th=t=>{if(!V.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Ah=(t,...e)=>{try{return!!t(...e)}catch{return!1}},QS=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},ey=t=>{const e=V.global!==void 0&&V.global!==null?V.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=V.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?Eo(s):typeof fetch=="function",l=Eo(r),c=Eo(o);if(!a)return!1;const u=a&&Eo(n),f=a&&(typeof i=="function"?(d=>M=>d.encode(M))(new i):async d=>new Uint8Array(await new r(d).arrayBuffer())),h=l&&u&&Ah(()=>{let d=!1;const M=new r(Xt.origin,{body:new n,method:"POST",get duplex(){return d=!0,"half"}}),E=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),d&&!E}),p=c&&u&&Ah(()=>V.isReadableStream(new o("").body)),g={stream:p&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!g[d]&&(g[d]=(M,E)=>{let x=M&&M[d];if(x)return x.call(M);throw new De(`Response type '${d}' is not supported`,De.ERR_NOT_SUPPORT,E)})});const S=async d=>{if(d==null)return 0;if(V.isBlob(d))return d.size;if(V.isSpecCompliantForm(d))return(await new r(Xt.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(V.isArrayBufferView(d)||V.isArrayBuffer(d))return d.byteLength;if(V.isURLSearchParams(d)&&(d=d+""),V.isString(d))return(await f(d)).byteLength},m=async(d,M)=>{const E=V.toFiniteNumber(d.getContentLength());return E??S(M)};return async d=>{let{url:M,method:E,data:x,signal:R,cancelToken:T,timeout:D,onDownloadProgress:v,onUploadProgress:A,responseType:N,headers:I,withCredentials:H="same-origin",fetchOptions:se,maxContentLength:ae,maxBodyLength:Y}=Pm(d);const ne=V.isNumber(ae)&&ae>-1,G=V.isNumber(Y)&&Y>-1,oe=Z=>V.hasOwnProp(d,Z)?d[Z]:void 0;let de=s||fetch;N=N?(N+"").toLowerCase():"text";let Me=qS([R,T&&T.toAbortSignal()],D),_e=null;const Ee=Me&&Me.unsubscribe&&(()=>{Me.unsubscribe()});let Je,it=null;const $e=()=>new De("Request body larger than maxBodyLength limit",De.ERR_BAD_REQUEST,d,_e);try{let Z;const U=oe("auth");if(U){const k=V.getSafeProp(U,"username")||"",Q=V.getSafeProp(U,"password")||"";Z={username:k,password:Q}}if(QS(M)){const k=new URL(M,Xt.origin);if(!Z&&(k.username||k.password)){const Q=Th(k.username),ve=Th(k.password);Z={username:Q,password:ve}}(k.username||k.password)&&(k.username="",k.password="",M=k.href)}if(Z&&(I.delete("authorization"),I.set("Authorization","Basic "+btoa(jS((Z.username||"")+":"+(Z.password||""))))),ne&&typeof M=="string"&&M.startsWith("data:")&&JS(M)>ae)throw new De("maxContentLength size of "+ae+" exceeded",De.ERR_BAD_RESPONSE,d,_e);if(G&&E!=="get"&&E!=="head"){const k=await S(x);if(typeof k=="number"&&isFinite(k)&&(Je=k,k>Y))throw $e()}const q=G&&(V.isReadableStream(x)||V.isStream(x)),ue=(k,Q,ve)=>Eh(k,bh,me=>{if(G&&me>Y)throw it=$e();Q&&Q(me)},ve);if(h&&E!=="get"&&E!=="head"&&(A||q)){if(Je=Je??await m(I,x),Je!==0||q){let k=new r(M,{method:"POST",body:x,duplex:"half"}),Q;if(V.isFormData(x)&&(Q=k.headers.get("content-type"))&&I.setContentType(Q),k.body){const[ve,me]=A&&xh(Je,ya(Sh(A)))||[];x=ue(k.body,ve,me)}}}else if(q&&!l&&u&&E!=="get"&&E!=="head")x=ue(x);else if(q&&l&&!h&&E!=="get"&&E!=="head")throw new De("Stream request bodies are not supported by the current fetch implementation",De.ERR_NOT_SUPPORT,d,_e);V.isString(H)||(H=H?"include":"omit");const ye=l&&"credentials"in r.prototype;if(V.isFormData(x)){const k=I.getContentType();k&&/^multipart\/form-data/i.test(k)&&!/boundary=/i.test(k)&&I.delete("content-type")}I.set("User-Agent","axios/"+Bu,!1);const fe={...se,signal:Me,method:E.toUpperCase(),headers:xm(I.normalize()),body:x,duplex:"half",credentials:ye?H:void 0};_e=l&&new r(M,fe);let w=await(l?de(_e,se):de(M,fe));const C=nn.from(w.headers);if(ne){const k=V.toFiniteNumber(C.getContentLength());if(k!=null&&k>ae)throw new De("maxContentLength size of "+ae+" exceeded",De.ERR_BAD_RESPONSE,d,_e)}const F=p&&(N==="stream"||N==="response");if(p&&w.body&&(v||ne||F&&Ee)){const k={};["status","statusText","headers"].forEach(Re=>{k[Re]=w[Re]});const Q=V.toFiniteNumber(C.getContentLength()),[ve,me]=v&&xh(Q,ya(Sh(v),!0))||[];let ge=0;const ce=Re=>{if(ne&&(ge=Re,ge>ae))throw new De("maxContentLength size of "+ae+" exceeded",De.ERR_BAD_RESPONSE,d,_e);ve&&ve(Re)};w=new o(Eh(w.body,bh,ce,()=>{me&&me(),Ee&&Ee()}),k)}N=N||"text";let J=await g[V.findKey(g,N)||"text"](w,d);if(ne&&!p&&!F){let k;if(J!=null&&(typeof J.byteLength=="number"?k=J.byteLength:typeof J.size=="number"?k=J.size:typeof J=="string"&&(k=typeof i=="function"?new i().encode(J).byteLength:J.length)),typeof k=="number"&&k>ae)throw new De("maxContentLength size of "+ae+" exceeded",De.ERR_BAD_RESPONSE,d,_e)}return!F&&Ee&&Ee(),await new Promise((k,Q)=>{Rm(k,Q,{data:J,headers:nn.from(w.headers),status:w.status,statusText:w.statusText,config:d,request:_e})})}catch(Z){if(Ee&&Ee(),Me&&Me.aborted&&Me.reason instanceof De){const U=Me.reason;throw U.config=d,_e&&(U.request=_e),Z!==U&&Object.defineProperty(U,"cause",{__proto__:null,value:Z,writable:!0,enumerable:!1,configurable:!0}),U}if(it)throw _e&&!it.request&&(it.request=_e),it;if(Z instanceof De)throw _e&&!Z.request&&(Z.request=_e),Z;if(Z&&Z.name==="TypeError"&&/Load failed|fetch/i.test(Z.message)){const U=new De("Network Error",De.ERR_NETWORK,d,_e,Z&&Z.response);throw Object.defineProperty(U,"cause",{__proto__:null,value:Z.cause||Z,writable:!0,enumerable:!1,configurable:!0}),U}throw De.from(Z,Z&&Z.code,d,_e,Z&&Z.response)}}},ty=new Map,Dm=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=ty;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:ey(e)),u=c;return c};Dm();const zu={http:pS,xhr:XS,fetch:{get:Dm}};V.forEach(zu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const wh=t=>`- ${t}`,ny=t=>V.isFunction(t)||t===null||t===!1;function iy(t,e){t=V.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!ny(i)&&(s=zu[(a=String(i)).toLowerCase()],s===void 0))throw new De(`Unknown adapter '${a}'`);if(s&&(V.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(wh).join(`
`):" "+wh(o[0]):"as no adapter specified";throw new De("There is no suitable adapter to dispatch the request "+a,De.ERR_NOT_SUPPORT)}return s}const Lm={getAdapter:iy,adapters:zu};function yl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new fo(null,t)}function Rh(t){return yl(t),t.headers=nn.from(t.headers),t.data=Sl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Lm.getAdapter(t.adapter||uo.adapter,t)(t).then(function(i){yl(t),t.response=i;try{i.data=Sl.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=nn.from(i.headers),i},function(i){if(!wm(i)&&(yl(t),i&&i.response)){t.response=i.response;try{i.response.data=Sl.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=nn.from(i.response.headers)}return Promise.reject(i)})}const Ka={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ka[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Ch={};Ka.transitional=function(e,n,i){function s(r,o){return"[Axios v"+Bu+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new De(s(o," has been removed"+(n?" in "+n:"")),De.ERR_DEPRECATED);return n&&!Ch[o]&&(Ch[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Ka.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function sy(t,e,n){if(typeof t!="object"||t===null)throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new De("option "+r+" must be "+l,De.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new De("Unknown option "+r,De.ERR_BAD_OPTION)}}const na={assertOptions:sy,validators:Ka},Kt=na.validators;let ys=class{constructor(e){this.defaults=e||{},this.interceptors={request:new _h,response:new _h}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Es(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&na.assertOptions(i,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean),legacyInterceptorReqResOrdering:Kt.transitional(Kt.boolean),advertiseZstdAcceptEncoding:Kt.transitional(Kt.boolean),validateStatusUndefinedResolves:Kt.transitional(Kt.boolean)},!1),s!=null&&(V.isFunction(s)?n.paramsSerializer={serialize:s}:na.assertOptions(s,{encode:Kt.function,serialize:Kt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),na.assertOptions(n,{baseUrl:Kt.spelling("baseURL"),withXsrfToken:Kt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&V.merge(r.common,r[n.method]);r&&V.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),n.headers=nn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(S){if(typeof S.runWhen=="function"&&S.runWhen(n)===!1)return;l=l&&S.synchronous;const m=n.transitional||Ou;m&&m.legacyInterceptorReqResOrdering?a.unshift(S.fulfilled,S.rejected):a.push(S.fulfilled,S.rejected)});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let u,f=0,h;if(!l){const g=[Rh.bind(this),void 0];for(g.unshift(...a),g.push(...c),h=g.length,u=Promise.resolve(n);f<h;)u=u.then(g[f++],g[f++]);return u}h=a.length;let p=n;for(;f<h;){const g=a[f++],S=a[f++];try{p=g(p)}catch(m){S.call(this,m);break}}try{u=Rh.call(this,p)}catch(g){return Promise.reject(g)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Es(this.defaults,e);const n=Cm(e.baseURL,e.url,e.allowAbsoluteUrls,e);return bm(n,e.params,e.paramsSerializer)}};V.forEach(["delete","get","head","options"],function(e){ys.prototype[e]=function(n,i){return this.request(Es(i||{},{method:e,url:n,data:i&&V.hasOwnProp(i,"data")?i.data:void 0}))}});V.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(Es(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}ys.prototype[e]=n(),e!=="query"&&(ys.prototype[e+"Form"]=n(!0))});let ry=class Im{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new fo(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Im(function(s){e=s}),cancel:e}}};function oy(t){return function(n){return t.apply(null,n)}}function ay(t){return V.isObject(t)&&t.isAxiosError===!0}const yc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(yc).forEach(([t,e])=>{yc[e]=t});function Nm(t){const e=new ys(t),n=um(ys.prototype.request,e);return V.extend(n,ys.prototype,e,{allOwnKeys:!0}),V.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Nm(Es(t,s))},n}const Ut=Nm(uo);Ut.Axios=ys;Ut.CanceledError=fo;Ut.CancelToken=ry;Ut.isCancel=wm;Ut.VERSION=Bu;Ut.toFormData=$a;Ut.AxiosError=De;Ut.Cancel=Ut.CanceledError;Ut.all=function(e){return Promise.all(e)};Ut.spread=oy;Ut.isAxiosError=ay;Ut.mergeConfig=Es;Ut.AxiosHeaders=nn;Ut.formToJSON=t=>Am(V.isHTMLForm(t)?new FormData(t):t);Ut.getAdapter=Lm.getAdapter;Ut.HttpStatusCode=yc;Ut.default=Ut;const{Axios:O1,AxiosError:F1,CanceledError:B1,isCancel:z1,CancelToken:H1,VERSION:V1,all:k1,Cancel:G1,isAxiosError:W1,spread:X1,toFormData:q1,AxiosHeaders:Y1,HttpStatusCode:$1,formToJSON:K1,getAdapter:Z1,mergeConfig:J1,create:j1}=Ut,_n=Ut.create({baseURL:"/api"}),ly={class:"page-card"},cy={key:0,class:"placeholder"},uy={class:"summary-grid"},fy={class:"summary-label"},hy={class:"summary-note"},dy={class:"content-grid"},py={class:"panel"},my={key:1,class:"placeholder"},gy={class:"panel"},_y={key:0,class:"table"},vy={key:1,class:"placeholder"},xy={key:0,class:"alert"},Sy={__name:"HomePage",setup(t){const e=st([]),n=st([]),i=st([]),s=st(!0),r=st(""),o=u=>u?new Date(u).toLocaleString("zh-TW"):"—",a=vt(()=>n.value.find(u=>!u.endTime)),l=vt(()=>[{title:"使用者數",value:e.value.length,detail:"資料庫已建立的使用者"},{title:"作業紀錄",value:n.value.length,detail:"所有作業資料"},{title:"辨識結果",value:i.value.length,detail:"所有物件辨識資料"}]);return gr(async()=>{var u,f;s.value=!0,r.value="";try{const[h,p,g]=await Promise.all([_n.get("/users"),_n.get("/operations"),_n.get("/detections")]);e.value=h.data,n.value=p.data,i.value=g.data}catch(h){r.value=((f=(u=h.response)==null?void 0:u.data)==null?void 0:f.error)||"無法讀取資料庫資料，請確認後端服務與 MongoDB 是否已啟動。"}finally{s.value=!1}}),(u,f)=>{var h,p;return Ue(),Be("section",ly,[f[7]||(f[7]=X("div",{class:"section-title"},[X("p",{class:"eyebrow"},"Dashboard"),X("h2",null,"系統總覽")],-1)),s.value?(Ue(),Be("p",cy,"正在讀取資料庫資料…")):(Ue(),Be(Dt,{key:1},[X("div",uy,[(Ue(!0),Be(Dt,null,oi(l.value,g=>(Ue(),Be("article",{key:g.title,class:"summary-card"},[X("p",fy,Ne(g.title),1),X("h3",null,Ne(g.value),1),X("p",hy,Ne(g.detail),1)]))),128))]),X("div",dy,[X("article",py,[f[4]||(f[4]=X("h3",null,"目前作業",-1)),a.value?(Ue(),Be(Dt,{key:0},[X("p",null,[f[0]||(f[0]=X("strong",null,"作業 ID：",-1)),cn(Ne(a.value._id),1)]),X("p",null,[f[1]||(f[1]=X("strong",null,"使用者：",-1)),cn(Ne(((h=a.value.userId)==null?void 0:h.name)||((p=a.value.userId)==null?void 0:p.email)||"未提供"),1)]),X("p",null,[f[2]||(f[2]=X("strong",null,"開始時間：",-1)),cn(Ne(o(a.value.startTime)),1)]),X("p",null,[f[3]||(f[3]=X("strong",null,"說明：",-1)),cn(Ne(a.value.description||"—"),1)])],64)):(Ue(),Be("p",my,"目前沒有進行中的作業。"))]),X("article",gy,[f[6]||(f[6]=X("h3",null,"最新辨識結果",-1)),i.value.length?(Ue(),Be("table",_y,[f[5]||(f[5]=X("thead",null,[X("tr",null,[X("th",null,"時間"),X("th",null,"物件"),X("th",null,"深度")])],-1)),X("tbody",null,[(Ue(!0),Be(Dt,null,oi(i.value.slice(0,6),g=>(Ue(),Be("tr",{key:g._id},[X("td",null,Ne(o(g.timestamp)),1),X("td",null,Ne(g.objectClass||"未分類"),1),X("td",null,Ne(g.depth??"—"),1)]))),128))])])):(Ue(),Be("p",vy,"尚無辨識資料。"))])]),r.value?(Ue(),Be("p",xy,Ne(r.value),1)):an("",!0)],64))])}}},yy={class:"page-card account-page"},My={class:"section-title"},Ey={class:"panel account-panel"},by={key:0},Ty=["autocomplete"],Ay={key:1},wy=["disabled"],Ry={key:0,class:"alert"},Cy={__name:"AccountLoginPage",setup(t){const e=lm(),n=cm(),i=st("login"),s=st(!1),r=st(""),o=ro({name:"",email:"",password:"",confirmPassword:""}),a=()=>{i.value=i.value==="login"?"register":"login",r.value="",o.password="",o.confirmPassword=""},l=async()=>{var c,u;if(r.value="",i.value==="register"&&o.password!==o.confirmPassword){r.value="兩次輸入的密碼不一致。";return}s.value=!0;try{const f=i.value==="login"?{email:o.email,password:o.password}:{name:o.name,email:o.email,password:o.password},h=await _n.post(`/auth/${i.value==="login"?"login":"register"}`,f);Jv(h.data),e.replace(typeof n.query.redirect=="string"?n.query.redirect:"/")}catch(f){r.value=((u=(c=f.response)==null?void 0:c.data)==null?void 0:u.error)||"目前無法完成帳戶操作，請稍後再試。"}finally{s.value=!1}};return(c,u)=>(Ue(),Be("section",yy,[X("div",My,[u[4]||(u[4]=X("p",{class:"eyebrow"},"Account",-1)),X("h2",null,Ne(i.value==="login"?"登入平台":"建立帳號"),1)]),X("article",Ey,[X("form",{class:"form-grid",onSubmit:H0(l,["prevent"])},[i.value==="register"?(Ue(),Be("label",by,[u[5]||(u[5]=cn("使用者名稱",-1)),bi(X("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>o.name=f),type:"text",autocomplete:"name",required:""},null,512),[[Ur,o.name,void 0,{trim:!0}]])])):an("",!0),X("label",null,[u[6]||(u[6]=cn("電子信箱",-1)),bi(X("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>o.email=f),type:"email",autocomplete:"email",required:""},null,512),[[Ur,o.email,void 0,{trim:!0}]])]),X("label",null,[u[7]||(u[7]=cn("密碼",-1)),bi(X("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>o.password=f),type:"password",autocomplete:i.value==="login"?"current-password":"new-password",minlength:"8",required:""},null,8,Ty),[[Ur,o.password]])]),i.value==="register"?(Ue(),Be("label",Ay,[u[8]||(u[8]=cn("確認密碼",-1)),bi(X("input",{"onUpdate:modelValue":u[3]||(u[3]=f=>o.confirmPassword=f),type:"password",autocomplete:"new-password",minlength:"8",required:""},null,512),[[Ur,o.confirmPassword]])])):an("",!0),X("button",{type:"submit",disabled:s.value},Ne(s.value?"處理中…":i.value==="login"?"登入":"建立帳號"),9,wy)],32),r.value?(Ue(),Be("p",Ry,Ne(r.value),1)):an("",!0),X("button",{type:"button",class:"account-switch",onClick:a},Ne(i.value==="login"?"尚未註冊？建立帳號":"已有帳號？返回登入"),1)])]))}},ho=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Py={},Dy={class:"page-card"};function Ly(t,e){return Ue(),Be("section",Dy,[...e[0]||(e[0]=[ka('<div class="section-title"><p class="eyebrow">Account</p><h2>基本資料設定</h2></div><article class="panel"><h3>個人資訊</h3><div class="form-grid"><input type="text" placeholder="姓名"><input type="email" placeholder="聯絡信箱"><input type="text" placeholder="職稱"><button type="button">更新資料</button></div></article>',2)])])}const Iy=ho(Py,[["render",Ly]]),Ny={},Uy={class:"page-card"};function Oy(t,e){return Ue(),Be("section",Uy,[...e[0]||(e[0]=[ka('<div class="section-title"><p class="eyebrow">Account</p><h2>密碼修改</h2></div><article class="panel"><h3>修改密碼</h3><div class="form-grid"><input type="password" placeholder="舊密碼"><input type="password" placeholder="新密碼"><input type="password" placeholder="確認新密碼"><button type="button">確認修改</button></div></article>',2)])])}const Fy=ho(Ny,[["render",Oy]]),By={},zy={class:"page-card"};function Hy(t,e){return Ue(),Be("section",zy,[...e[0]||(e[0]=[X("div",{class:"section-title"},[X("p",{class:"eyebrow"},"Guide"),X("h2",null,"網站操作指引")],-1),X("article",{class:"panel"},[X("h3",null,"使用步驟"),X("ul",{class:"bullet-list"},[X("li",null,"選擇對應的定位任務頁面。"),X("li",null,"確認目前作業狀態與資料來源。"),X("li",null,"透過歷史資料查詢前次操作結果。")])],-1)])])}const Vy=ho(By,[["render",Hy]]),ky={},Gy={class:"page-card"};function Wy(t,e){return Ue(),Be("section",Gy,[...e[0]||(e[0]=[X("div",{class:"section-title"},[X("p",{class:"eyebrow"},"Technology"),X("h2",null,"定位技術介紹")],-1),X("article",{class:"panel"},[X("h3",null,"系統技術架構"),X("p",null,"本系統結合電腦視覺、深度估測與即時串流，讓終端定位作業可快速觀測與追溯。")],-1)])])}const Xy=ho(ky,[["render",Wy]]),qy={class:"page-card"},Yy={key:0,class:"placeholder"},$y={key:1,class:"table table-spaced"},Ky={key:2,class:"placeholder"},Zy={key:3,class:"alert"},Jy={__name:"ObjectQueryPage",setup(t){const e=st([]),n=st(""),i=st(!0),s=st(""),r=a=>a?new Date(a).toLocaleString("zh-TW"):"—",o=vt(()=>e.value.filter(a=>{var l;return(l=a.objectClass)==null?void 0:l.toLowerCase().includes(n.value.toLowerCase())}));return gr(async()=>{try{e.value=(await _n.get("/detections")).data}catch{s.value="無法讀取辨識資料。"}finally{i.value=!1}}),(a,l)=>(Ue(),Be("section",qy,[l[2]||(l[2]=X("div",{class:"section-title"},[X("p",{class:"eyebrow"},"History"),X("h2",null,"物件辨識紀錄")],-1)),bi(X("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"search",placeholder:"依物件名稱篩選"},null,512),[[Ur,n.value]]),i.value?(Ue(),Be("p",Yy,"正在讀取資料…")):o.value.length?(Ue(),Be("table",$y,[l[1]||(l[1]=X("thead",null,[X("tr",null,[X("th",null,"時間"),X("th",null,"物件"),X("th",null,"深度"),X("th",null,"作業 ID")])],-1)),X("tbody",null,[(Ue(!0),Be(Dt,null,oi(o.value,c=>{var u;return Ue(),Be("tr",{key:c._id},[X("td",null,Ne(r(c.timestamp)),1),X("td",null,Ne(c.objectClass||"未分類"),1),X("td",null,Ne(c.depth??"—"),1),X("td",null,Ne(((u=c.operationId)==null?void 0:u._id)||c.operationId),1)])}),128))])])):(Ue(),Be("p",Ky,"沒有符合的辨識資料。")),s.value?(Ue(),Be("p",Zy,Ne(s.value),1)):an("",!0)]))}},jy={class:"page-card"},Qy={key:0,class:"placeholder"},eM={key:1,class:"table"},tM={key:2,class:"placeholder"},nM={key:3,class:"alert"},iM={__name:"TaskHistoryPage",setup(t){const e=st([]),n=st(!0),i=st(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return gr(async()=>{try{e.value=(await _n.get("/operations")).data}catch{i.value="無法讀取作業紀錄。"}finally{n.value=!1}}),(r,o)=>(Ue(),Be("section",jy,[o[1]||(o[1]=X("div",{class:"section-title"},[X("p",{class:"eyebrow"},"History"),X("h2",null,"任務歷程")],-1)),n.value?(Ue(),Be("p",Qy,"正在讀取資料…")):e.value.length?(Ue(),Be("table",eM,[o[0]||(o[0]=X("thead",null,[X("tr",null,[X("th",null,"開始時間"),X("th",null,"結束時間"),X("th",null,"使用者"),X("th",null,"狀態")])],-1)),X("tbody",null,[(Ue(!0),Be(Dt,null,oi(e.value,a=>{var l,c;return Ue(),Be("tr",{key:a._id},[X("td",null,Ne(s(a.startTime)),1),X("td",null,Ne(s(a.endTime)),1),X("td",null,Ne(((l=a.userId)==null?void 0:l.name)||((c=a.userId)==null?void 0:c.email)||"未提供"),1),X("td",null,Ne(a.endTime?"已完成":"進行中"),1)])}),128))])])):(Ue(),Be("p",tM,"尚無任務資料。")),i.value?(Ue(),Be("p",nM,Ne(i.value),1)):an("",!0)]))}},sM={class:"page-card"},rM={key:0,class:"placeholder"},oM={key:1,class:"table"},aM={key:2,class:"placeholder"},lM={key:3,class:"alert"},cM={__name:"OperationLogPage",setup(t){const e=st([]),n=st(!0),i=st(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return gr(async()=>{try{e.value=(await _n.get("/operations")).data}catch{i.value="無法讀取操作紀錄。"}finally{n.value=!1}}),(r,o)=>(Ue(),Be("section",sM,[o[1]||(o[1]=X("div",{class:"section-title"},[X("p",{class:"eyebrow"},"History"),X("h2",null,"操作紀錄")],-1)),n.value?(Ue(),Be("p",rM,"正在讀取資料…")):e.value.length?(Ue(),Be("table",oM,[o[0]||(o[0]=X("thead",null,[X("tr",null,[X("th",null,"作業 ID"),X("th",null,"開始時間"),X("th",null,"結束時間"),X("th",null,"說明")])],-1)),X("tbody",null,[(Ue(!0),Be(Dt,null,oi(e.value,a=>(Ue(),Be("tr",{key:a._id},[X("td",null,Ne(a._id),1),X("td",null,Ne(s(a.startTime)),1),X("td",null,Ne(s(a.endTime)),1),X("td",null,Ne(a.description||"—"),1)]))),128))])])):(Ue(),Be("p",aM,"尚無操作紀錄。")),i.value?(Ue(),Be("p",lM,Ne(i.value),1)):an("",!0)]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hu="185",Qs={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uM=0,Ph=1,fM=2,ia=1,hM=2,Or=3,ji=0,xn=1,ti=2,wi=0,er=1,Dh=2,Lh=3,Ih=4,dM=5,us=100,pM=101,mM=102,gM=103,_M=104,vM=200,xM=201,SM=202,yM=203,Mc=204,Ec=205,MM=206,EM=207,bM=208,TM=209,AM=210,wM=211,RM=212,CM=213,PM=214,bc=0,Tc=1,Ac=2,ur=3,wc=4,Rc=5,Cc=6,Pc=7,Um=0,DM=1,LM=2,ai=0,Om=1,Fm=2,Bm=3,zm=4,Hm=5,Vm=6,km=7,Gm=300,bs=301,fr=302,Ml=303,El=304,Za=306,Dc=1e3,Ti=1001,Lc=1002,qt=1003,IM=1004,bo=1005,en=1006,bl=1007,ps=1008,En=1009,Wm=1010,Xm=1011,eo=1012,Vu=1013,fi=1014,ii=1015,Li=1016,ku=1017,Gu=1018,to=1020,qm=35902,Ym=35899,$m=1021,Km=1022,Un=1023,Ii=1026,ms=1027,Zm=1028,Wu=1029,Ts=1030,Xu=1031,qu=1033,sa=33776,ra=33777,oa=33778,aa=33779,Ic=35840,Nc=35841,Uc=35842,Oc=35843,Fc=36196,Bc=37492,zc=37496,Hc=37488,Vc=37489,Ea=37490,kc=37491,Gc=37808,Wc=37809,Xc=37810,qc=37811,Yc=37812,$c=37813,Kc=37814,Zc=37815,Jc=37816,jc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,iu=36492,su=36494,ru=36495,ou=36283,au=36284,ba=36285,lu=36286,NM=3200,cu=0,UM=1,Ki="",wn="srgb",Ta="srgb-linear",Aa="linear",mt="srgb",Ls=7680,Nh=519,OM=512,FM=513,BM=514,Yu=515,zM=516,HM=517,$u=518,VM=519,Uh=35044,Oh="300 es",si=2e3,no=2001;function kM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function GM(){const t=wa("canvas");return t.style.display="block",t}const Fh={};function Bh(...t){const e="THREE."+t.shift();console.log(e,...t)}function Jm(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ke(...t){t=Jm(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ut(...t){t=Jm(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function tr(...t){const e=t.join(" ");e in Fh||(Fh[e]=!0,Ke(...t))}function WM(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const XM={[bc]:Tc,[Ac]:Cc,[wc]:Pc,[ur]:Rc,[Tc]:bc,[Cc]:Ac,[Pc]:wc,[Rc]:ur};class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,uu=180/Math.PI;function po(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function lt(t,e,n){return Math.max(e,Math.min(n,t))}function qM(t,e){return(t%e+e)%e}function Tl(t,e,n){return(1-n)*t+n*e}function Tr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const YM={DEG2RAD:la},rf=class rf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rf.prototype.isVector2=!0;let je=rf;class Qi{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],p=r[o+1],g=r[o+2],S=r[o+3];if(f!==S||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+f*S;m<0&&(h=-h,p=-p,g=-g,S=-S,m=-m);let d=1-a;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);d=Math.sin(d*M)/E,a=Math.sin(a*M)/E,l=l*d+h*a,c=c*d+p*a,u=u*d+g*a,f=f*d+S*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+g*a,f=f*d+S*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const of=class of{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};of.prototype.isVector3=!0;let $=of;const Al=new $,zh=new Qi,af=class af{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],S=s[0],m=s[3],d=s[6],M=s[1],E=s[4],x=s[7],R=s[2],T=s[5],D=s[8];return r[0]=o*S+a*M+l*R,r[3]=o*m+a*E+l*T,r[6]=o*d+a*x+l*D,r[1]=c*S+u*M+f*R,r[4]=c*m+u*E+f*T,r[7]=c*d+u*x+f*D,r[2]=h*S+p*M+g*R,r[5]=h*m+p*E+g*T,r[8]=h*d+p*x+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=n*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=f*S,e[1]=(s*c-u*i)*S,e[2]=(a*i-s*o)*S,e[3]=h*S,e[4]=(u*n-s*l)*S,e[5]=(s*r-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*r)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wl.makeScale(e,n)),this}rotate(e){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wl.makeRotation(-e)),this}translate(e,n){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};af.prototype.isMatrix3=!0;let et=af;const wl=new et,Hh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $M(){const t={enabled:!0,workingColorSpace:Ta,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?Aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ta]:{primaries:e,whitePoint:i,transfer:Aa,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),t}const ct=$M();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function nr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Is;class KM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=wa("canvas")),Is.width=e.width,Is.height=e.height;const s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZM=0;class Ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rl(s[o].image)):r.push(Rl(s[o]))}else r=Rl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Rl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?KM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let JM=0;const Cl=new $;class hn extends ts{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Ti,s=Ti,r=en,o=ps,a=Un,l=En,c=hn.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=po(),this.name="",this.source=new Ku(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ke(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dc:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dc:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Gm;hn.DEFAULT_ANISOTROPY=1;const lf=class lf{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,x=(p+1)/2,R=(d+1)/2,T=(u+h)/4,D=(f+S)/4,v=(g+m)/4;return E>x&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=D/i):x>R?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=v/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=D/r,s=v/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-S)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this.w=lt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this.w=lt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lf.prototype.isVector4=!0;let wt=lf;class jM extends ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new hn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Ku(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends jM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jm extends hn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QM extends hn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pa=class Pa{constructor(e,n,i,s,r,o,a,l,c,u,f,h,p,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,h,p,g,S,m)}set(e,n,i,s,r,o,a,l,c,u,f,h,p,g,S,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pa().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,S=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-S*c,n[9]=-a*l,n[2]=S-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,S=c*f;n[0]=h+S*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,S=c*f;n[0]=h-S*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=S-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,S=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*u,n[4]=S-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+S,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eE,e,tE)}lookAt(e,n,i){const s=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),zi.crossVectors(i,yn),zi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),zi.crossVectors(i,yn)),zi.normalize(),To.crossVectors(yn,zi),s[0]=zi.x,s[4]=To.x,s[8]=yn.x,s[1]=zi.y,s[5]=To.y,s[9]=yn.y,s[2]=zi.z,s[6]=To.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],S=i[6],m=i[10],d=i[14],M=i[3],E=i[7],x=i[11],R=i[15],T=s[0],D=s[4],v=s[8],A=s[12],N=s[1],I=s[5],H=s[9],se=s[13],ae=s[2],Y=s[6],ne=s[10],G=s[14],oe=s[3],de=s[7],Me=s[11],_e=s[15];return r[0]=o*T+a*N+l*ae+c*oe,r[4]=o*D+a*I+l*Y+c*de,r[8]=o*v+a*H+l*ne+c*Me,r[12]=o*A+a*se+l*G+c*_e,r[1]=u*T+f*N+h*ae+p*oe,r[5]=u*D+f*I+h*Y+p*de,r[9]=u*v+f*H+h*ne+p*Me,r[13]=u*A+f*se+h*G+p*_e,r[2]=g*T+S*N+m*ae+d*oe,r[6]=g*D+S*I+m*Y+d*de,r[10]=g*v+S*H+m*ne+d*Me,r[14]=g*A+S*se+m*G+d*_e,r[3]=M*T+E*N+x*ae+R*oe,r[7]=M*D+E*I+x*Y+R*de,r[11]=M*v+E*H+x*ne+R*Me,r[15]=M*A+E*se+x*G+R*_e,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],S=e[7],m=e[11],d=e[15],M=l*p-c*h,E=a*p-c*f,x=a*h-l*f,R=o*p-c*u,T=o*h-l*u,D=o*f-a*u;return n*(S*M-m*E+d*x)-i*(g*M-m*R+d*T)+s*(g*E-S*R+d*D)-r*(g*x-S*T+m*D)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],S=e[13],m=e[14],d=e[15],M=n*a-i*o,E=n*l-s*o,x=n*c-r*o,R=i*l-s*a,T=i*c-r*a,D=s*c-r*l,v=u*S-f*g,A=u*m-h*g,N=u*d-p*g,I=f*m-h*S,H=f*d-p*S,se=h*d-p*m,ae=M*se-E*H+x*I+R*N-T*A+D*v;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ae;return e[0]=(a*se-l*H+c*I)*Y,e[1]=(s*H-i*se-r*I)*Y,e[2]=(S*D-m*T+d*R)*Y,e[3]=(h*T-f*D-p*R)*Y,e[4]=(l*N-o*se-c*A)*Y,e[5]=(n*se-s*N+r*A)*Y,e[6]=(m*x-g*D-d*E)*Y,e[7]=(u*D-h*x+p*E)*Y,e[8]=(o*H-a*N+c*v)*Y,e[9]=(i*N-n*H-r*v)*Y,e[10]=(g*T-S*x+d*M)*Y,e[11]=(f*x-u*T-p*M)*Y,e[12]=(a*A-o*I-l*v)*Y,e[13]=(n*I-i*A+s*v)*Y,e[14]=(S*E-g*R-m*M)*Y,e[15]=(u*R-f*E+h*M)*Y,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,S=o*u,m=o*f,d=a*f,M=l*c,E=l*u,x=l*f,R=i.x,T=i.y,D=i.z;return s[0]=(1-(S+d))*R,s[1]=(p+x)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(h+d))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+E)*D,s[9]=(m-M)*D,s[10]=(1-(h+S))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Ns.set(s[0],s[1],s[2]).length();const a=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Dn.copy(this);const c=1/o,u=1/a,f=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,n.setFromRotationMatrix(Dn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=si,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),h=(n+e)/(n-e),p=(i+s)/(i-s);let g,S;if(l)g=r/(o-r),S=o*r/(o-r);else if(a===si)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===no)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=si,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),h=-(n+e)/(n-e),p=-(i+s)/(i-s);let g,S;if(l)g=1/(o-r),S=o/(o-r);else if(a===si)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===no)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Pa.prototype.isMatrix4=!0;let At=Pa;const Ns=new $,Dn=new At,eE=new $(0,0,0),tE=new $(1,1,1),zi=new $,To=new $,yn=new $,kh=new At,Gh=new Qi;class es{constructor(e=0,n=0,i=0,s=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nE=0;const Wh=new $,Us=new Qi,mi=new At,Ao=new $,Ar=new $,iE=new $,sE=new Qi,Xh=new $(1,0,0),qh=new $(0,1,0),Yh=new $(0,0,1),$h={type:"added"},rE={type:"removed"},Os={type:"childadded",child:null},Pl={type:"childremoved",child:null};class Gt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new $,n=new es,i=new Qi,s=new $(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new et}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,n){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ao.copy(e):Ao.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ar,Ao,this.up):mi.lookAt(Ao,Ar,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(mi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($h),Os.child=e,this.dispatchEvent(Os),Os.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rE),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($h),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,iE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,sE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new $(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gs extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oE={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Ll(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ct.workingColorSpace){if(e=qM(e,1),n=lt(n,0,1),i=lt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Ll(o,r,e+1/3),this.g=Ll(o,r,e),this.b=Ll(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,n=wn){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wn){const i=Qm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return ct.workingToColorSpace(Jt.copy(this),e),Math.round(lt(Jt.r*255,0,255))*65536+Math.round(lt(Jt.g*255,0,255))*256+Math.round(lt(Jt.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=wn){ct.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,s=Jt.b;return e!==wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(wo);const i=Tl(Hi.h,wo.h,n),s=Tl(Hi.s,wo.s,n),r=Tl(Hi.l,wo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new at;at.NAMES=Qm;class aE extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ln=new $,gi=new $,Il=new $,_i=new $,Fs=new $,Bs=new $,Kh=new $,Nl=new $,Ul=new $,Ol=new $,Fl=new wt,Bl=new wt,zl=new wt;class Nn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Ln.subVectors(e,n),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Ln.subVectors(s,n),gi.subVectors(i,n),Il.subVectors(e,n);const o=Ln.dot(Ln),a=Ln.dot(gi),l=Ln.dot(Il),c=gi.dot(gi),u=gi.dot(Il),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Fl.setScalar(0),Bl.setScalar(0),zl.setScalar(0),Fl.fromBufferAttribute(e,n),Bl.fromBufferAttribute(e,i),zl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fl,r.x),o.addScaledVector(Bl,r.y),o.addScaledVector(zl,r.z),o}static isFrontFacing(e,n,i,s){return Ln.subVectors(i,n),gi.subVectors(e,n),Ln.cross(gi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Ln.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Fs.subVectors(s,i),Bs.subVectors(r,i),Nl.subVectors(e,i);const l=Fs.dot(Nl),c=Bs.dot(Nl);if(l<=0&&c<=0)return n.copy(i);Ul.subVectors(e,s);const u=Fs.dot(Ul),f=Bs.dot(Ul);if(u>=0&&f<=u)return n.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Fs,o);Ol.subVectors(e,r);const p=Fs.dot(Ol),g=Bs.dot(Ol);if(g>=0&&p<=g)return n.copy(r);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Bs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Kh.subVectors(r,s),a=(f-u)/(f-u+(p-g)),n.copy(s).addScaledVector(Kh,a);const d=1/(m+S+h);return o=S*d,a=h*d,n.copy(i).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Co.subVectors(this.max,wr),zs.subVectors(e.a,wr),Hs.subVectors(e.b,wr),Vs.subVectors(e.c,wr),Vi.subVectors(Hs,zs),ki.subVectors(Vs,Hs),rs.subVectors(zs,Vs);let n=[0,-Vi.z,Vi.y,0,-ki.z,ki.y,0,-rs.z,rs.y,Vi.z,0,-Vi.x,ki.z,0,-ki.x,rs.z,0,-rs.x,-Vi.y,Vi.x,0,-ki.y,ki.x,0,-rs.y,rs.x,0];return!Hl(n,zs,Hs,Vs,Co)||(n=[1,0,0,0,1,0,0,0,1],!Hl(n,zs,Hs,Vs,Co))?!1:(Po.crossVectors(Vi,ki),n=[Po.x,Po.y,Po.z],Hl(n,zs,Hs,Vs,Co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new $,new $,new $,new $,new $,new $,new $,new $],In=new $,Ro=new mo,zs=new $,Hs=new $,Vs=new $,Vi=new $,ki=new $,rs=new $,wr=new $,Co=new $,Po=new $,os=new $;function Hl(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){os.fromArray(t,r);const a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=n.dot(os),u=i.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ot=new $,Do=new je;let lE=0;class ci extends ts{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Uh,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Do.fromBufferAttribute(this,n),Do.applyMatrix3(e),this.setXY(n,Do.x,Do.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Tr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Tr(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Tr(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Tr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Tr(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class eg extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class tg extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zt extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}const cE=new mo,Rr=new $,Vl=new $;class Ja{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const n=Rr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Vl)),this.expandByPoint(Rr.copy(e.center).sub(Vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uE=0;const An=new At,kl=new Gt,ks=new $,Mn=new mo,Cr=new mo,kt=new $;class dn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kM(e)?tg:eg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Mn.min,Cr.min),Mn.expandByPoint(kt),kt.addVectors(Mn.max,Cr.max),Mn.expandByPoint(kt)):(Mn.expandByPoint(Cr.min),Mn.expandByPoint(Cr.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),kt.add(ks)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ci(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new $,l[v]=new $;const c=new $,u=new $,f=new $,h=new je,p=new je,g=new je,S=new $,m=new $;function d(v,A,N){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,N),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,N),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[v].add(S),a[A].add(S),a[N].add(S),l[v].add(m),l[A].add(m),l[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,A=M.length;v<A;++v){const N=M[v],I=N.start,H=N.count;for(let se=I,ae=I+H;se<ae;se+=3)d(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const E=new $,x=new $,R=new $,T=new $;function D(v){R.fromBufferAttribute(s,v),T.copy(R);const A=a[v];E.copy(A),E.sub(R.multiplyScalar(R.dot(A))).normalize(),x.crossVectors(T,A);const I=x.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,I)}for(let v=0,A=M.length;v<A;++v){const N=M[v],I=N.start,H=N.count;for(let se=I,ae=I+H;se<ae;se+=3)D(e.getX(se+0)),D(e.getX(se+1)),D(e.getX(se+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new $,r=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new ci(h,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fE=0;class xr extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=po(),this.name="",this.type="Material",this.blending=er,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Ec,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ke(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ec&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xi=new $,Gl=new $,Lo=new $,Gi=new $,Wl=new $,Io=new $,Xl=new $;class ja{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Gl.copy(e).add(n).multiplyScalar(.5),Lo.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Gl);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Lo),a=Gi.dot(this.direction),l=-Gi.dot(Lo),c=Gi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Gl).addScaledVector(Lo,h),p}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,s,r){Wl.subVectors(n,e),Io.subVectors(i,e),Xl.crossVectors(Wl,Io);let o=this.direction.dot(Xl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(Io.crossVectors(Gi,Io));if(l<0)return null;const c=a*this.direction.dot(Wl.cross(Gi));if(c<0||l+c>o)return null;const u=-a*Gi.dot(Xl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ju extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=Um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zh=new At,as=new ja,No=new Ja,Jh=new $,Uo=new $,Oo=new $,Fo=new $,ql=new $,Bo=new $,jh=new $,zo=new $;class jt extends Gt{constructor(e=new dn,n=new Ju){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ql.fromBufferAttribute(f,e),o?Bo.addScaledVector(ql,u):Bo.addScaledVector(ql.sub(n),u))}n.add(Bo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(No.containsPoint(as.origin)===!1&&(as.intersectSphere(No,Jh)===null||as.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Zh.copy(r).invert(),as.copy(e.ray).applyMatrix4(Zh),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,as)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,R=E;x<R;x+=3){const T=a.getX(x),D=a.getX(x+1),v=a.getX(x+2);s=Ho(this,d,e,i,c,u,f,T,D,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=Ho(this,o,e,i,c,u,f,M,E,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,R=E;x<R;x+=3){const T=x,D=x+1,v=x+2;s=Ho(this,d,e,i,c,u,f,T,D,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const M=m,E=m+1,x=m+2;s=Ho(this,o,e,i,c,u,f,M,E,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function hE(t,e,n,i,s,r,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ji,a),l===null)return null;zo.copy(a),zo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(zo);return c<n.near||c>n.far?null:{distance:c,point:zo.clone(),object:t}}function Ho(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Uo),t.getVertexPosition(l,Oo),t.getVertexPosition(c,Fo);const u=hE(t,e,n,i,Uo,Oo,Fo,jh);if(u){const f=new $;Nn.getBarycoord(jh,Uo,Oo,Fo,f),s&&(u.uv=Nn.getInterpolatedAttribute(s,a,l,c,f,new je)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,a,l,c,f,new je)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new $,materialIndex:0};Nn.getNormal(Uo,Oo,Fo,h.normal),u.face=h,u.barycoord=f}return u}class dE extends hn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=qt,u=qt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yl=new $,pE=new $,mE=new et;class Yi{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Yl.subVectors(i,n).cross(pE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(Yl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mE.getNormalMatrix(e),s=this.coplanarPoint(Yl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Ja,gE=new je(.5,.5),Vo=new $;class ju{constructor(e=new Yi,n=new Yi,i=new Yi,s=new Yi,r=new Yi,o=new Yi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],S=r[9],m=r[10],d=r[11],M=r[12],E=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-o,p-u,d-g,R-M).normalize(),s[1].setComponents(c+o,p+u,d+g,R+M).normalize(),s[2].setComponents(c+a,p+f,d+S,R+E).normalize(),s[3].setComponents(c-a,p-f,d-S,R-E).normalize(),i)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,p-h,d-m,R-x).normalize();else if(s[4].setComponents(c-l,p-h,d-m,R-x).normalize(),n===si)s[5].setComponents(c+l,p+h,d+m,R+x).normalize();else if(n===no)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const n=gE.distanceTo(e.center);return ls.radius=.7071067811865476+n,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Vo.x=s.normal.x>0?e.max.x:e.min.x,Vo.y=s.normal.y>0?e.max.y:e.min.y,Vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qu extends xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ra=new $,Ca=new $,Qh=new At,Pr=new ja,ko=new Ja,$l=new $,ed=new $;class ng extends Gt{constructor(e=new dn,n=new Qu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Ra.fromBufferAttribute(n,s-1),Ca.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Ra.distanceTo(Ca);e.setAttribute("lineDistance",new zt(i,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;Qh.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(Qh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let S=p,m=g-1;S<m;S+=c){const d=u.getX(S),M=u.getX(S+1),E=Go(this,e,Pr,l,d,M,S);E&&n.push(E)}if(this.isLineLoop){const S=u.getX(g-1),m=u.getX(p),d=Go(this,e,Pr,l,S,m,g-1);d&&n.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=p,m=g-1;S<m;S+=c){const d=Go(this,e,Pr,l,S,S+1,S);d&&n.push(d)}if(this.isLineLoop){const S=Go(this,e,Pr,l,g-1,p,g-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Go(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Ra.fromBufferAttribute(a,s),Ca.fromBufferAttribute(a,r),n.distanceSqToSegment(Ra,Ca,$l,ed)>i)return;$l.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo($l);if(!(c<e.near||c>e.far))return{distance:c,point:ed.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const td=new $,nd=new $;class _E extends ng{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)td.fromBufferAttribute(n,s),nd.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+td.distanceTo(nd);e.setAttribute("lineDistance",new zt(i,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ig extends hn{constructor(e=[],n=bs,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hr extends hn{constructor(e,n,i=fi,s,r,o,a=qt,l=qt,c,u=Ii,f=1){if(u!==Ii&&u!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ku(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vE extends hr{constructor(e,n=fi,i=bs,s,r,o=qt,a=qt,l,c=Ii){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sg extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class As extends dn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function g(S,m,d,M,E,x,R,T,D,v,A){const N=x/D,I=R/v,H=x/2,se=R/2,ae=T/2,Y=D+1,ne=v+1;let G=0,oe=0;const de=new $;for(let Me=0;Me<ne;Me++){const _e=Me*I-se;for(let Ee=0;Ee<Y;Ee++){const Je=Ee*N-H;de[S]=Je*M,de[m]=_e*E,de[d]=ae,c.push(de.x,de.y,de.z),de[S]=0,de[m]=0,de[d]=T>0?1:-1,u.push(de.x,de.y,de.z),f.push(Ee/D),f.push(1-Me/v),G+=1}}for(let Me=0;Me<v;Me++)for(let _e=0;_e<D;_e++){const Ee=h+_e+Y*Me,Je=h+_e+Y*(Me+1),it=h+(_e+1)+Y*(Me+1),$e=h+(_e+1)+Y*Me;l.push(Ee,Je,$e),l.push(Je,it,$e),oe+=6}a.addGroup(p,oe,A),p+=oe,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class io extends dn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let g=0;const S=[],m=i/2;let d=0;M(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(p,2));function M(){const x=new $,R=new $;let T=0;const D=(n-e)/i;for(let v=0;v<=r;v++){const A=[],N=v/r,I=N*(n-e)+e;for(let H=0;H<=s;H++){const se=H/s,ae=se*l+a,Y=Math.sin(ae),ne=Math.cos(ae);R.x=I*Y,R.y=-N*i+m,R.z=I*ne,f.push(R.x,R.y,R.z),x.set(Y,D,ne).normalize(),h.push(x.x,x.y,x.z),p.push(se,1-N),A.push(g++)}S.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){const N=S[A][v],I=S[A+1][v],H=S[A+1][v+1],se=S[A][v+1];(e>0||A!==0)&&(u.push(N,I,se),T+=3),(n>0||A!==r-1)&&(u.push(I,H,se),T+=3)}c.addGroup(d,T,0),d+=T}function E(x){const R=g,T=new je,D=new $;let v=0;const A=x===!0?e:n,N=x===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,m*N,0),h.push(0,N,0),p.push(.5,.5),g++;const I=g;for(let H=0;H<=s;H++){const ae=H/s*l+a,Y=Math.cos(ae),ne=Math.sin(ae);D.x=A*ne,D.y=m*N,D.z=A*Y,f.push(D.x,D.y,D.z),h.push(0,N,0),T.x=Y*.5+.5,T.y=ne*.5*N+.5,p.push(T.x,T.y),g++}for(let H=0;H<s;H++){const se=R+H,ae=I+H;x===!0?u.push(ae,ae+1,se):u.push(ae+1,ae,se),v+=3}c.addGroup(d,v,x===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ef extends io{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ef(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class go extends dn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],S=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let E=0;E<c;E++){const x=E*f-r;g.push(x,-M,0),S.push(0,0,1),m.push(E/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const E=M+c*d,x=M+c*(d+1),R=M+1+c*(d+1),T=M+1+c*d;p.push(E,x,T),p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(S,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}class tf extends dn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new $,h=new $,p=[],g=[],S=[],m=[];for(let d=0;d<=i;d++){const M=[],E=d/i,x=o+E*a,R=e*Math.cos(x),T=Math.sqrt(e*e-R*R);let D=0;d===0&&o===0?D=.5/n:d===i&&l===Math.PI&&(D=-.5/n);for(let v=0;v<=n;v++){const A=v/n,N=s+A*r;f.x=-T*Math.cos(N),f.y=R,f.z=T*Math.sin(N),g.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(A+D,1-E),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<n;M++){const E=u[d][M+1],x=u[d][M],R=u[d+1][M],T=u[d+1][M+1];(d!==0||o>0)&&p.push(E,x,T),(d!==i-1||l<Math.PI)&&p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(S,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function dr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(id(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(id(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=dr(t[n]);for(const s in i)e[s]=i[s]}return e}function id(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function xE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const SE={clone:dr,merge:rn};var yE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ME=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yE,this.fragmentShader=ME,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=xE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new at().setHex(s.value);break;case"v2":this.uniforms[i].value=new je().fromArray(s.value);break;case"v3":this.uniforms[i].value=new $().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new At().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class EE extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wo extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bE extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TE extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class og extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class AE extends og{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Kl=new At,sd=new $,rd=new $;class wE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ju,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;sd.setFromMatrixPosition(e.matrixWorld),n.position.copy(sd),rd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rd),n.updateMatrixWorld(),Kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===no||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xo=new $,qo=new Qi,Yn=new $;class ag extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xo,qo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,qo,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Xo,qo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,qo,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new $,od=new je,ad=new je;class Rn extends ag{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=uu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uu*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,od,ad),n.subVectors(ad,od)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class nf extends ag{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class RE extends wE{constructor(){super(new nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class CE extends og{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new RE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Gs=-90,Ws=1;class PE extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rn(Gs,Ws,e,n);s.layers=this.layers,this.add(s);const r=new Rn(Gs,Ws,e,n);r.layers=this.layers,this.add(r);const o=new Rn(Gs,Ws,e,n);o.layers=this.layers,this.add(o);const a=new Rn(Gs,Ws,e,n);a.layers=this.layers,this.add(a);const l=new Rn(Gs,Ws,e,n);l.layers=this.layers,this.add(l);const c=new Rn(Gs,Ws,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class DE extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ld=new At;class LE{constructor(e,n,i=0,s=1/0){this.ray=new ja(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Zu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ut("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ld),this}intersectObject(e,n=!0,i=[]){return fu(e,this,i,n),i.sort(cd),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)fu(e[s],this,i,n);return i.sort(cd),i}}function cd(t,e){return t.distance-e.distance}function fu(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)fu(r[o],e,n,!0)}}class ud{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const cf=class cf{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};cf.prototype.isMatrix2=!0;let fd=cf;class IE extends _E{constructor(e=10,n=10,i=4473924,s=8947848){i=new at(i),s=new at(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,g=-a;h<=n;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const S=h===r?i:s;S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3}const u=new dn;u.setAttribute("position",new zt(l,3)),u.setAttribute("color",new zt(c,3));const f=new Qu({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class NE extends ts{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ke("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function hd(t,e,n,i){const s=UE(i);switch(n){case $m:return t*e;case Zm:return t*e/s.components*s.byteLength;case Wu:return t*e/s.components*s.byteLength;case Ts:return t*e*2/s.components*s.byteLength;case Xu:return t*e*2/s.components*s.byteLength;case Km:return t*e*3/s.components*s.byteLength;case Un:return t*e*4/s.components*s.byteLength;case qu:return t*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case oa:case aa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Oc:return Math.max(t,16)*Math.max(e,8)/4;case Ic:case Uc:return Math.max(t,8)*Math.max(e,8)/2;case Fc:case Bc:case Hc:case Vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zc:case Ea:case kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case qc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $c:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case iu:case su:case ru:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ou:case au:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ba:case lu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UE(t){switch(t){case En:case Wm:return{byteLength:1,components:1};case eo:case Xm:case Li:return{byteLength:2,components:1};case ku:case Gu:return{byteLength:2,components:4};case fi:case Vu:case ii:return{byteLength:4,components:1};case qm:case Ym:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function OE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],S=f[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const S=f[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var FE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ob=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ab=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,db="gl_FragColor = linearToOutputTexel( gl_FragColor );",pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Cb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ub=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ob=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_T=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ET=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:FE,alphahash_pars_fragment:BE,alphamap_fragment:zE,alphamap_pars_fragment:HE,alphatest_fragment:VE,alphatest_pars_fragment:kE,aomap_fragment:GE,aomap_pars_fragment:WE,batching_pars_vertex:XE,batching_vertex:qE,begin_vertex:YE,beginnormal_vertex:$E,bsdfs:KE,iridescence_fragment:ZE,bumpmap_pars_fragment:JE,clipping_planes_fragment:jE,clipping_planes_pars_fragment:QE,clipping_planes_pars_vertex:eb,clipping_planes_vertex:tb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:sb,color_vertex:rb,common:ob,cube_uv_reflection_fragment:ab,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:ub,emissivemap_fragment:fb,emissivemap_pars_fragment:hb,colorspace_fragment:db,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:gb,envmap_pars_fragment:_b,envmap_pars_vertex:vb,envmap_physical_pars_fragment:Cb,envmap_vertex:xb,fog_vertex:Sb,fog_pars_vertex:yb,fog_fragment:Mb,fog_pars_fragment:Eb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Tb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:wb,lights_pars_begin:Rb,lights_toon_fragment:Pb,lights_toon_pars_fragment:Db,lights_phong_fragment:Lb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Nb,lights_physical_pars_fragment:Ub,lights_fragment_begin:Ob,lights_fragment_maps:Fb,lights_fragment_end:Bb,lightprobes_pars_fragment:zb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Vb,logdepthbuf_pars_vertex:kb,logdepthbuf_vertex:Gb,map_fragment:Wb,map_pars_fragment:Xb,map_particle_fragment:qb,map_particle_pars_fragment:Yb,metalnessmap_fragment:$b,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Zb,morphcolor_vertex:Jb,morphnormal_vertex:jb,morphtarget_pars_vertex:Qb,morphtarget_vertex:eT,normal_fragment_begin:tT,normal_fragment_maps:nT,normal_pars_fragment:iT,normal_pars_vertex:sT,normal_vertex:rT,normalmap_pars_fragment:oT,clearcoat_normal_fragment_begin:aT,clearcoat_normal_fragment_maps:lT,clearcoat_pars_fragment:cT,iridescence_pars_fragment:uT,opaque_fragment:fT,packing:hT,premultiplied_alpha_fragment:dT,project_vertex:pT,dithering_fragment:mT,dithering_pars_fragment:gT,roughnessmap_fragment:_T,roughnessmap_pars_fragment:vT,shadowmap_pars_fragment:xT,shadowmap_pars_vertex:ST,shadowmap_vertex:yT,shadowmask_pars_fragment:MT,skinbase_vertex:ET,skinning_pars_vertex:bT,skinning_vertex:TT,skinnormal_vertex:AT,specularmap_fragment:wT,specularmap_pars_fragment:RT,tonemapping_fragment:CT,tonemapping_pars_fragment:PT,transmission_fragment:DT,transmission_pars_fragment:LT,uv_pars_fragment:IT,uv_pars_vertex:NT,uv_vertex:UT,worldpos_vertex:OT,background_vert:FT,background_frag:BT,backgroundCube_vert:zT,backgroundCube_frag:HT,cube_vert:VT,cube_frag:kT,depth_vert:GT,depth_frag:WT,distance_vert:XT,distance_frag:qT,equirect_vert:YT,equirect_frag:$T,linedashed_vert:KT,linedashed_frag:ZT,meshbasic_vert:JT,meshbasic_frag:jT,meshlambert_vert:QT,meshlambert_frag:eA,meshmatcap_vert:tA,meshmatcap_frag:nA,meshnormal_vert:iA,meshnormal_frag:sA,meshphong_vert:rA,meshphong_frag:oA,meshphysical_vert:aA,meshphysical_frag:lA,meshtoon_vert:cA,meshtoon_frag:uA,points_vert:fA,points_frag:hA,shadow_vert:dA,shadow_frag:pA,sprite_vert:mA,sprite_frag:gA},Pe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Qn={basic:{uniforms:rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:rn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:rn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:rn([Pe.points,Pe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:rn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:rn([Pe.common,Pe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:rn([Pe.sprite,Pe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:rn([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:rn([Pe.lights,Pe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Qn.physical={uniforms:rn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Yo={r:0,b:0,g:0},_A=new At,cg=new et;cg.set(-1,0,0,0,1,0,0,0,1);function vA(t,e,n,i,s,r){const o=new at(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function p(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const x=M.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(M){let E=!1;const x=p(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(M,E){const x=p(E);x&&(x.isCubeTexture||x.mapping===Za)?(c===void 0&&(c=new jt(new As(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:dr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cg),c.material.toneMapped=ct.getTransfer(x.colorSpace)!==mt,(u!==x||f!==x.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new jt(new go(2,2),new hi({name:"BackgroundMaterial",uniforms:dr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(Yo,rg(t)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,E,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:S,dispose:d}}function xA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(I,H,se,ae,Y){let ne=!1;const G=f(I,ae,se,H);r!==G&&(r=G,c(r.object)),ne=p(I,ae,se,Y),ne&&g(I,ae,se,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,x(I,H,se,ae),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function f(I,H,se,ae){const Y=ae.wireframe===!0;let ne=i[H.id];ne===void 0&&(ne={},i[H.id]=ne);const G=I.isInstancedMesh===!0?I.id:0;let oe=ne[G];oe===void 0&&(oe={},ne[G]=oe);let de=oe[se.id];de===void 0&&(de={},oe[se.id]=de);let Me=de[Y];return Me===void 0&&(Me=h(l()),de[Y]=Me),Me}function h(I){const H=[],se=[],ae=[];for(let Y=0;Y<n;Y++)H[Y]=0,se[Y]=0,ae[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:se,attributeDivisors:ae,object:I,attributes:{},index:null}}function p(I,H,se,ae){const Y=r.attributes,ne=H.attributes;let G=0;const oe=se.getAttributes();for(const de in oe)if(oe[de].location>=0){const _e=Y[de];let Ee=ne[de];if(Ee===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(Ee=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(Ee=I.instanceColor)),_e===void 0||_e.attribute!==Ee||Ee&&_e.data!==Ee.data)return!0;G++}return r.attributesNum!==G||r.index!==ae}function g(I,H,se,ae){const Y={},ne=H.attributes;let G=0;const oe=se.getAttributes();for(const de in oe)if(oe[de].location>=0){let _e=ne[de];_e===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor));const Ee={};Ee.attribute=_e,_e&&_e.data&&(Ee.data=_e.data),Y[de]=Ee,G++}r.attributes=Y,r.attributesNum=G,r.index=ae}function S(){const I=r.newAttributes;for(let H=0,se=I.length;H<se;H++)I[H]=0}function m(I){d(I,0)}function d(I,H){const se=r.newAttributes,ae=r.enabledAttributes,Y=r.attributeDivisors;se[I]=1,ae[I]===0&&(t.enableVertexAttribArray(I),ae[I]=1),Y[I]!==H&&(t.vertexAttribDivisor(I,H),Y[I]=H)}function M(){const I=r.newAttributes,H=r.enabledAttributes;for(let se=0,ae=H.length;se<ae;se++)H[se]!==I[se]&&(t.disableVertexAttribArray(se),H[se]=0)}function E(I,H,se,ae,Y,ne,G){G===!0?t.vertexAttribIPointer(I,H,se,Y,ne):t.vertexAttribPointer(I,H,se,ae,Y,ne)}function x(I,H,se,ae){S();const Y=ae.attributes,ne=se.getAttributes(),G=H.defaultAttributeValues;for(const oe in ne){const de=ne[oe];if(de.location>=0){let Me=Y[oe];if(Me===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),Me!==void 0){const _e=Me.normalized,Ee=Me.itemSize,Je=e.get(Me);if(Je===void 0)continue;const it=Je.buffer,$e=Je.type,Z=Je.bytesPerElement,U=$e===t.INT||$e===t.UNSIGNED_INT||Me.gpuType===Vu;if(Me.isInterleavedBufferAttribute){const q=Me.data,ue=q.stride,ye=Me.offset;if(q.isInstancedInterleavedBuffer){for(let fe=0;fe<de.locationSize;fe++)d(de.location+fe,q.meshPerAttribute);I.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let fe=0;fe<de.locationSize;fe++)m(de.location+fe);t.bindBuffer(t.ARRAY_BUFFER,it);for(let fe=0;fe<de.locationSize;fe++)E(de.location+fe,Ee/de.locationSize,$e,_e,ue*Z,(ye+Ee/de.locationSize*fe)*Z,U)}else{if(Me.isInstancedBufferAttribute){for(let q=0;q<de.locationSize;q++)d(de.location+q,Me.meshPerAttribute);I.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let q=0;q<de.locationSize;q++)m(de.location+q);t.bindBuffer(t.ARRAY_BUFFER,it);for(let q=0;q<de.locationSize;q++)E(de.location+q,Ee/de.locationSize,$e,_e,Ee*Z,Ee/de.locationSize*q*Z,U)}}else if(G!==void 0){const _e=G[oe];if(_e!==void 0)switch(_e.length){case 2:t.vertexAttrib2fv(de.location,_e);break;case 3:t.vertexAttrib3fv(de.location,_e);break;case 4:t.vertexAttrib4fv(de.location,_e);break;default:t.vertexAttrib1fv(de.location,_e)}}}}M()}function R(){A();for(const I in i){const H=i[I];for(const se in H){const ae=H[se];for(const Y in ae){const ne=ae[Y];for(const G in ne)u(ne[G].object),delete ne[G];delete ae[Y]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const H=i[I.id];for(const se in H){const ae=H[se];for(const Y in ae){const ne=ae[Y];for(const G in ne)u(ne[G].object),delete ne[G];delete ae[Y]}}delete i[I.id]}function D(I){for(const H in i){const se=i[H];for(const ae in se){const Y=se[ae];if(Y[I.id]===void 0)continue;const ne=Y[I.id];for(const G in ne)u(ne[G].object),delete ne[G];delete Y[I.id]}}}function v(I){for(const H in i){const se=i[H],ae=I.isInstancedMesh===!0?I.id:0,Y=se[ae];if(Y!==void 0){for(const ne in Y){const G=Y[ne];for(const oe in G)u(G[oe].object),delete G[oe];delete Y[ne]}delete se[ae],Object.keys(se).length===0&&delete i[H]}}}function A(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function SA(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function yA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Un&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const v=D===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==En&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ii&&!v)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,maxSamples:R,samples:T}}function MA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Yi,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,E=M*4;let x=d.clippingState||null;l.value=x,x=u(g,h,E,p);for(let R=0;R!==E;++R)x[R]=n[R];d.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const d=p+S*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=p;E!==S;++E,x+=4)o.copy(f[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Zi=4,dd=[.125,.215,.35,.446,.526,.582],fs=20,EA=256,Dr=new nf,pd=new at;let Zl=null,Jl=0,jl=0,Ql=!1;const bA=new $;class md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=bA}=r;Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,Jl,jl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bs||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Li,format:Un,colorSpace:Ta,depthBuffer:!1},s=gd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TA(r)),this._blurMaterial=wA(r,e,n),this._ggxMaterial=AA(r,e,n)}return s}_compileMaterial(e){const n=new jt(new dn,e);this._renderer.compile(n,Dr)}_sceneToCubeUV(e,n,i,s,r){const l=new Rn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(pd),f.toneMapping=ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new As,new Ju({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(pd),d=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const R=this._cubeSize;Xs(s,x*R,E>2?R:0,R,R),f.setRenderTarget(s),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===bs||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Xs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Dr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-Zi?i-g+Zi:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Xs(r,m,d,3*S,2*S),s.setRenderTarget(r),s.render(a,Dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Xs(e,m,d,3*S,2*S),s.setRenderTarget(e),s.render(a,Dr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fs-1),S=r/g,m=isFinite(r)?1+Math.floor(u*S):fs;m>fs&&Ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const d=[];let M=0;for(let D=0;D<fs;++D){const v=D/S,A=Math.exp(-v*v/2);d.push(A),D===0?M+=A:D<m&&(M+=2*A)}for(let D=0;D<d.length;D++)d[D]=d[D]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const x=this._sizeLods[s],R=3*x*(s>E-Zi?s-E+Zi:0),T=4*(this._cubeSize-x);Xs(n,R,T,3*x,2*x),l.setRenderTarget(n),l.render(f,Dr)}}function TA(t){const e=[],n=[],i=[];let s=t;const r=t-Zi+1+dd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-Zi?l=dd[o-t+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,S=3,m=2,d=1,M=new Float32Array(S*g*p),E=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let T=0;T<p;T++){const D=T%3*2/3-1,v=T>2?0:-1,A=[D,v,0,D+2/3,v,0,D+2/3,v+1,0,D,v,0,D+2/3,v+1,0,D,v+1,0];M.set(A,S*g*T),E.set(h,m*g*T);const N=[T,T,T,T,T,T];x.set(N,d*g*T)}const R=new dn;R.setAttribute("position",new ci(M,S)),R.setAttribute("uv",new ci(E,m)),R.setAttribute("faceIndex",new ci(x,d)),i.push(new jt(R,null)),s>Zi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function gd(t,e,n){const i=new li(t,e,n);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function AA(t,e,n){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:EA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function wA(t,e,n){const i=new Float32Array(fs),s=new $(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function _d(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function vd(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ug extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ig(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new As(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:wi});r.uniforms.tEquirect.value=n;const o=new jt(s,r),a=n.minFilter;return n.minFilter===ps&&(n.minFilter=en),new PE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function RA(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Ml||p===El)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const S=new ug(g.height);return S.fromEquirectangularTexture(t,h),e.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,g=p===Ml||p===El,S=p===bs||p===fr;if(g||S){let m=n.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new md(t)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new md(t)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Ml?h.mapping=bs:p===El&&(h.mapping=fr),h}function l(h){let p=0;const g=6;for(let S=0;S<g;S++)h[S]!==void 0&&p++;return p===g}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function CA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&tr("WebGLRenderer: "+i+" extension not supported."),s}}}function PA(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let S=0;if(g===void 0)return;if(p!==null){const M=p.array;S=p.version;for(let E=0,x=M.length;E<x;E+=3){const R=M[E+0],T=M[E+1],D=M[E+2];h.push(R,T,T,D,D,R)}}else{const M=g.array;S=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const R=E+0,T=E+1,D=E+2;h.push(R,T,T,D,D,R)}}const m=new(g.count>=65535?tg:eg)(h,1);m.version=S;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function DA(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,p){p!==0&&(t.drawElementsInstanced(i,h,r,f*o,p),n.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let S=0;for(let m=0;m<p;m++)S+=h[m];n.update(S,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function LA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function IA(t,e,n){const i=new WeakMap,s=new wt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let N=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var p=N;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),S===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const D=new Float32Array(R*T*4*f),v=new jm(D,R,T,f);v.type=ii,v.needsUpdate=!0;const A=x*4;for(let I=0;I<f;I++){const H=d[I],se=M[I],ae=E[I],Y=R*T*4*I;for(let ne=0;ne<H.count;ne++){const G=ne*A;g===!0&&(s.fromBufferAttribute(H,ne),D[Y+G+0]=s.x,D[Y+G+1]=s.y,D[Y+G+2]=s.z,D[Y+G+3]=0),S===!0&&(s.fromBufferAttribute(se,ne),D[Y+G+4]=s.x,D[Y+G+5]=s.y,D[Y+G+6]=s.z,D[Y+G+7]=0),m===!0&&(s.fromBufferAttribute(ae,ne),D[Y+G+8]=s.x,D[Y+G+9]=s.y,D[Y+G+10]=s.z,D[Y+G+11]=ae.itemSize===4?s.w:1)}}h={count:f,texture:v,size:new je(R,T)},i.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const S=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function NA(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const UA={[Om]:"LINEAR_TONE_MAPPING",[Fm]:"REINHARD_TONE_MAPPING",[Bm]:"CINEON_TONE_MAPPING",[zm]:"ACES_FILMIC_TONE_MAPPING",[Vm]:"AGX_TONE_MAPPING",[km]:"NEUTRAL_TONE_MAPPING",[Hm]:"CUSTOM_TONE_MAPPING"};function OA(t,e,n,i,s,r){const o=new li(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new hr(e,n):void 0}),a=new li(e,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new dn;l.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new zt([0,2,0,0,2,0],2));const c=new EE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new jt(l,c),f=new nf(-1,1,1,-1,0,1);let h=null,p=null,g=!1,S,m=null,d=[],M=!1;this.setSize=function(E,x){o.setSize(E,x),a.setSize(E,x);for(let R=0;R<d.length;R++){const T=d[R];T.setSize&&T.setSize(E,x)}},this.setEffects=function(E){d=E,M=d.length>0&&d[0].isRenderPass===!0;const x=o.width,R=o.height;for(let T=0;T<d.length;T++){const D=d[T];D.setSize&&D.setSize(x,R)}},this.begin=function(E,x){if(g||E.toneMapping===ai&&d.length===0)return!1;if(m=x,x!==null){const R=x.width,T=x.height;(o.width!==R||o.height!==T)&&this.setSize(R,T)}return M===!1&&E.setRenderTarget(o),S=E.toneMapping,E.toneMapping=ai,!0},this.hasRenderPass=function(){return M},this.end=function(E,x){E.toneMapping=S,g=!0;let R=o,T=a;for(let D=0;D<d.length;D++){const v=d[D];if(v.enabled!==!1&&(v.render(E,T,R,x),v.needsSwap!==!1)){const A=R;R=T,T=A}}if(h!==E.outputColorSpace||p!==E.toneMapping){h=E.outputColorSpace,p=E.toneMapping,c.defines={},ct.getTransfer(h)===mt&&(c.defines.SRGB_TRANSFER="");const D=UA[p];D&&(c.defines[D]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=R.texture,E.setRenderTarget(m),E.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const fg=new hn,hu=new hr(1,1),hg=new jm,dg=new QM,pg=new ig,xd=[],Sd=[],yd=new Float32Array(16),Md=new Float32Array(9),Ed=new Float32Array(4);function Sr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function el(t,e){let n=Sd[e];n===void 0&&(n=new Int32Array(e),Sd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function HA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function VA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;Ed.set(i),t.uniformMatrix2fv(this.addr,!1,Ed),Vt(n,i)}}function kA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;Md.set(i),t.uniformMatrix3fv(this.addr,!1,Md),Vt(n,i)}}function GA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;yd.set(i),t.uniformMatrix4fv(this.addr,!1,yd),Vt(n,i)}}function WA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function $A(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function JA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function jA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(hu.compareFunction=n.isReversedDepthBuffer()?$u:Yu,r=hu):r=fg,n.setTexture2D(e||r,s)}function QA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||dg,s)}function ew(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||pg,s)}function tw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||hg,s)}function nw(t){switch(t){case 5126:return FA;case 35664:return BA;case 35665:return zA;case 35666:return HA;case 35674:return VA;case 35675:return kA;case 35676:return GA;case 5124:case 35670:return WA;case 35667:case 35671:return XA;case 35668:case 35672:return qA;case 35669:case 35673:return YA;case 5125:return $A;case 36294:return KA;case 36295:return ZA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}function iw(t,e){t.uniform1fv(this.addr,e)}function sw(t,e){const n=Sr(e,this.size,2);t.uniform2fv(this.addr,n)}function rw(t,e){const n=Sr(e,this.size,3);t.uniform3fv(this.addr,n)}function ow(t,e){const n=Sr(e,this.size,4);t.uniform4fv(this.addr,n)}function aw(t,e){const n=Sr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lw(t,e){const n=Sr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cw(t,e){const n=Sr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uw(t,e){t.uniform1iv(this.addr,e)}function fw(t,e){t.uniform2iv(this.addr,e)}function hw(t,e){t.uniform3iv(this.addr,e)}function dw(t,e){t.uniform4iv(this.addr,e)}function pw(t,e){t.uniform1uiv(this.addr,e)}function mw(t,e){t.uniform2uiv(this.addr,e)}function gw(t,e){t.uniform3uiv(this.addr,e)}function _w(t,e){t.uniform4uiv(this.addr,e)}function vw(t,e,n){const i=this.cache,s=e.length,r=el(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=hu:o=fg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function xw(t,e,n){const i=this.cache,s=e.length,r=el(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||dg,r[o])}function Sw(t,e,n){const i=this.cache,s=e.length,r=el(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||pg,r[o])}function yw(t,e,n){const i=this.cache,s=e.length,r=el(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||hg,r[o])}function Mw(t){switch(t){case 5126:return iw;case 35664:return sw;case 35665:return rw;case 35666:return ow;case 35674:return aw;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return fw;case 35668:case 35672:return hw;case 35669:case 35673:return dw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return yw}}class Ew{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nw(n.type)}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Mw(n.type)}}class Tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function bd(t,e){t.seq.push(e),t.map[e.id]=e}function Aw(t,e,n){const i=t.name,s=i.length;for(ec.lastIndex=0;;){const r=ec.exec(i),o=ec.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bd(n,c===void 0?new Ew(a,t,e):new bw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Tw(a),bd(n,f)),n=f}}}class ca{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Aw(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Td(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ww=37297;let Rw=0;function Cw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Ad=new et;function Pw(t){ct._getMatrix(Ad,ct.workingColorSpace,t);const e=`mat3( ${Ad.elements.map(n=>n.toFixed(4))} )`;switch(ct.getTransfer(t)){case Aa:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Cw(t.getShaderSource(e),a)}else return r}function Dw(t,e){const n=Pw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Lw={[Om]:"Linear",[Fm]:"Reinhard",[Bm]:"Cineon",[zm]:"ACESFilmic",[Vm]:"AgX",[km]:"Neutral",[Hm]:"Custom"};function Iw(t,e){const n=Lw[e];return n===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $o=new $;function Nw(){ct.getLuminanceCoefficients($o);const t=$o.x.toFixed(4),e=$o.y.toFixed(4),n=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Ow(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Fw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Fr(t){return t!==""}function Rd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(t){return t.replace(Bw,Hw)}const zw=new Map;function Hw(t,e){let n=rt[e];if(n===void 0){const i=zw.get(e);if(i!==void 0)n=rt[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return du(n)}const Vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(t){return t.replace(Vw,kw)}function kw(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Gw={[ia]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function Ww(t){return Gw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xw={[bs]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function qw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Xw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Yw={[fr]:"ENVMAP_MODE_REFRACTION"};function $w(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Yw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Kw={[Um]:"ENVMAP_BLENDING_MULTIPLY",[DM]:"ENVMAP_BLENDING_MIX",[LM]:"ENVMAP_BLENDING_ADD"};function Zw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Kw[t.combine]||"ENVMAP_BLENDING_NONE"}function Jw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function jw(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Ww(n),c=qw(n),u=$w(n),f=Zw(n),h=Jw(n),p=Uw(n),g=Ow(r),S=s.createProgram();let m,d,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Fr).join(`
`),d.length>0&&(d+=`
`)):(m=[Dd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),d=[Dd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ai?"#define TONE_MAPPING":"",n.toneMapping!==ai?rt.tonemapping_pars_fragment:"",n.toneMapping!==ai?Iw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Dw("linearToOutputTexel",n.outputColorSpace),Nw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fr).join(`
`)),o=du(o),o=Rd(o,n),o=Cd(o,n),a=du(a),a=Rd(a,n),a=Cd(a,n),o=Pd(o),a=Pd(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=M+m+o,x=M+d+a,R=Td(s,s.VERTEX_SHADER,E),T=Td(s,s.FRAGMENT_SHADER,x);s.attachShader(S,R),s.attachShader(S,T),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function D(I){if(t.debug.checkShaderErrors){const H=s.getProgramInfoLog(S)||"",se=s.getShaderInfoLog(R)||"",ae=s.getShaderInfoLog(T)||"",Y=H.trim(),ne=se.trim(),G=ae.trim();let oe=!0,de=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,S,R,T);else{const Me=wd(s,R,"vertex"),_e=wd(s,T,"fragment");ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+Me+`
`+_e)}else Y!==""?Ke("WebGLProgram: Program Info Log:",Y):(ne===""||G==="")&&(de=!1);de&&(I.diagnostics={runnable:oe,programLog:Y,vertexShader:{log:ne,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(R),s.deleteShader(T),v=new ca(s,S),A=Fw(s,S)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(S,ww)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Rw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=T,this}let Qw=0;class eR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tR(e),n.set(e,i)),i}}class tR{constructor(e){this.id=Qw++,this.code=e,this.usedTimes=0}}function nR(t){return t===Ts||t===Ea||t===ba}function iR(t,e,n,i,s,r){const o=new Zu,a=new eR,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,A,N,I,H,se){const ae=I.fog,Y=H.geometry,ne=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,oe=e.get(v.envMap||ne,G),de=oe&&oe.mapping===Za?oe.image.height:null,Me=p[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Ke("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const _e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ee=_e!==void 0?_e.length:0;let Je=0;Y.morphAttributes.position!==void 0&&(Je=1),Y.morphAttributes.normal!==void 0&&(Je=2),Y.morphAttributes.color!==void 0&&(Je=3);let it,$e,Z,U;if(Me){const Ve=Qn[Me];it=Ve.vertexShader,$e=Ve.fragmentShader}else{it=v.vertexShader,$e=v.fragmentShader;const Ve=a.getVertexShaderStage(v),Rt=a.getFragmentShaderStage(v);a.update(v,Ve,Rt),Z=Ve.id,U=Rt.id}const q=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),ye=H.isInstancedMesh===!0,fe=H.isBatchedMesh===!0,w=!!v.map,C=!!v.matcap,F=!!oe,J=!!v.aoMap,k=!!v.lightMap,Q=!!v.bumpMap&&v.wireframe===!1,ve=!!v.normalMap,me=!!v.displacementMap,ge=!!v.emissiveMap,ce=!!v.metalnessMap,Re=!!v.roughnessMap,P=v.anisotropy>0,Le=v.clearcoat>0,Ce=v.dispersion>0,b=v.iridescence>0,_=v.sheen>0,B=v.transmission>0,K=P&&!!v.anisotropyMap,L=Le&&!!v.clearcoatMap,O=Le&&!!v.clearcoatNormalMap,le=Le&&!!v.clearcoatRoughnessMap,j=b&&!!v.iridescenceMap,ie=b&&!!v.iridescenceThicknessMap,pe=_&&!!v.sheenColorMap,be=_&&!!v.sheenRoughnessMap,Te=!!v.specularMap,Ae=!!v.specularColorMap,ke=!!v.specularIntensityMap,Ye=B&&!!v.transmissionMap,Qe=B&&!!v.thicknessMap,z=!!v.gradientMap,we=!!v.alphaMap,he=v.alphaTest>0,Se=!!v.alphaHash,Fe=!!v.extensions;let xe=ai;v.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(xe=t.toneMapping);const We={shaderID:Me,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:$e,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:U,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:fe,batchingColor:fe&&H._colorsTexture!==null,instancing:ye,instancingColor:ye&&H.instanceColor!==null,instancingMorph:ye&&H.morphTexture!==null,outputColorSpace:q===null?t.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:w,matcap:C,envMap:F,envMapMode:F&&oe.mapping,envMapCubeUVHeight:de,aoMap:J,lightMap:k,bumpMap:Q,normalMap:ve,displacementMap:me,emissiveMap:ge,normalMapObjectSpace:ve&&v.normalMapType===UM,normalMapTangentSpace:ve&&v.normalMapType===cu,packedNormalMap:ve&&v.normalMapType===cu&&nR(v.normalMap.format),metalnessMap:ce,roughnessMap:Re,anisotropy:P,anisotropyMap:K,clearcoat:Le,clearcoatMap:L,clearcoatNormalMap:O,clearcoatRoughnessMap:le,dispersion:Ce,iridescence:b,iridescenceMap:j,iridescenceThicknessMap:ie,sheen:_,sheenColorMap:pe,sheenRoughnessMap:be,specularMap:Te,specularColorMap:Ae,specularIntensityMap:ke,transmission:B,transmissionMap:Ye,thicknessMap:Qe,gradientMap:z,opaque:v.transparent===!1&&v.blending===er&&v.alphaToCoverage===!1,alphaMap:we,alphaTest:he,alphaHash:Se,combine:v.combine,mapUv:w&&g(v.map.channel),aoMapUv:J&&g(v.aoMap.channel),lightMapUv:k&&g(v.lightMap.channel),bumpMapUv:Q&&g(v.bumpMap.channel),normalMapUv:ve&&g(v.normalMap.channel),displacementMapUv:me&&g(v.displacementMap.channel),emissiveMapUv:ge&&g(v.emissiveMap.channel),metalnessMapUv:ce&&g(v.metalnessMap.channel),roughnessMapUv:Re&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:L&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:O&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(v.sheenRoughnessMap.channel),specularMapUv:Te&&g(v.specularMap.channel),specularColorMapUv:Ae&&g(v.specularColorMap.channel),specularIntensityMapUv:ke&&g(v.specularIntensityMap.channel),transmissionMapUv:Ye&&g(v.transmissionMap.channel),thicknessMapUv:Qe&&g(v.thicknessMap.channel),alphaMapUv:we&&g(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ve||P),vertexNormals:!!Y.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(w||we),fog:!!ae,useFog:v.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||Y.attributes.normal===void 0&&ve===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Je,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:xe,decodeVideoTexture:w&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:ge&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ti,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Fe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&v.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)A.push(N),A.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(d(A,v),M(A,v),A.push(t.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function d(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){const A=p[v.type];let N;if(A){const I=Qn[A];N=SE.clone(I.uniforms)}else N=v.uniforms;return N}function x(v,A){let N=u.get(A);return N!==void 0?++N.usedTimes:(N=new jw(t,A,v,s),c.push(N),u.set(A,N)),N}function R(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function D(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:D}}function sR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function rR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ld(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Id(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,S,m,d){let M=t[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:d},t[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=g,M.materialVariant=o(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=d),e++,M}function l(h,p,g,S,m,d){const M=a(h,p,g,S,m,d);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):n.push(M)}function c(h,p,g,S,m,d){const M=a(h,p,g,S,m,d);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function u(h,p,g){n.length>1&&n.sort(h||rR),i.length>1&&i.sort(p||Ld),s.length>1&&s.sort(p||Ld),g&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let h=e,p=t.length;h<p;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function oR(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Id,t.set(i,[o])):s>=r.length?(o=new Id,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function aR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new at};break;case"SpotLight":n={position:new $,direction:new $,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function lR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cR=0;function uR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fR(t){const e=new aR,n=lR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const s=new $,r=new At,o=new At;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,S=0,m=0,d=0,M=0,E=0,x=0,R=0,T=0,D=0;c.sort(uR);for(let A=0,N=c.length;A<N;A++){const I=c[A],H=I.color,se=I.intensity,ae=I.distance;let Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ts?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=H.r*se,f+=H.g*se,h+=H.b*se;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(I.sh.coefficients[ne],se);D++}else if(I.isDirectionalLight){const ne=e.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,oe=n.get(I);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,i.directionalShadow[p]=oe,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=I.shadow.matrix,M++}i.directional[p]=ne,p++}else if(I.isSpotLight){const ne=e.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(H).multiplyScalar(se),ne.distance=ae,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,i.spot[S]=ne;const G=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,G.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[S]=G.matrix,I.castShadow){const oe=n.get(I);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,i.spotShadow[S]=oe,i.spotShadowMap[S]=Y,x++}S++}else if(I.isRectAreaLight){const ne=e.get(I);ne.color.copy(H).multiplyScalar(se),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=ne,m++}else if(I.isPointLight){const ne=e.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const G=I.shadow,oe=n.get(I);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,oe.shadowCameraNear=G.camera.near,oe.shadowCameraFar=G.camera.far,i.pointShadow[g]=oe,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=ne,g++}else if(I.isHemisphereLight){const ne=e.get(I);ne.skyColor.copy(I.color).multiplyScalar(se),ne.groundColor.copy(I.groundColor).multiplyScalar(se),i.hemi[d]=ne,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==p||v.pointLength!==g||v.spotLength!==S||v.rectAreaLength!==m||v.hemiLength!==d||v.numDirectionalShadows!==M||v.numPointShadows!==E||v.numSpotShadows!==x||v.numSpotMaps!==R||v.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,v.directionalLength=p,v.pointLength=g,v.spotLength=S,v.rectAreaLength=m,v.hemiLength=d,v.numDirectionalShadows=M,v.numPointShadows=E,v.numSpotShadows=x,v.numSpotMaps=R,v.numLightProbes=D,i.version=cR++)}function l(c,u){let f=0,h=0,p=0,g=0,S=0;const m=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const E=c[d];if(E.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const x=i.hemi[S];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function Nd(t){const e=new fR(t),n=[],i=[],s=[];function r(h){f.camera=h,n.length=0,i.length=0,s.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function hR(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Nd(t),e.set(s,[a])):r>=o.length?(a=new Nd(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mR=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],gR=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Ud=new At,Lr=new $,tc=new $;function _R(t,e,n){let i=new ju;const s=new je,r=new je,o=new wt,a=new bE,l=new TE,c={},u=n.maxTextureSize,f={[ji]:xn,[xn]:ji,[ti]:ti},h=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:dR,fragmentShader:pR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new jt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let d=this.type;this.render=function(T,D,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===hM&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ia);const A=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),H=t.state;H.setBlending(wi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const se=d!==this.type;se&&D.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(Y=>Y.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,Y=T.length;ae<Y;ae++){const ne=T[ae],G=ne.shadow;if(G===void 0){Ke("WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const oe=G.getFrameExtents();s.multiply(oe),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,G.mapSize.y=r.y));const de=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=de,G.map===null||se===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Or){if(ne.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new li(s.x,s.y,{format:Ts,type:Li,minFilter:en,magFilter:en,generateMipmaps:!1}),G.map.texture.name=ne.name+".shadowMap",G.map.depthTexture=new hr(s.x,s.y,ii),G.map.depthTexture.name=ne.name+".shadowMapDepth",G.map.depthTexture.format=Ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt}else ne.isPointLight?(G.map=new ug(s.x),G.map.depthTexture=new vE(s.x,fi)):(G.map=new li(s.x,s.y),G.map.depthTexture=new hr(s.x,s.y,fi)),G.map.depthTexture.name=ne.name+".shadowMap",G.map.depthTexture.format=Ii,this.type===ia?(G.map.depthTexture.compareFunction=de?$u:Yu,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt);G.camera.updateProjectionMatrix()}const Me=G.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<Me;_e++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,_e),t.clear();else{_e===0&&(t.setRenderTarget(G.map),t.clear());const Ee=G.getViewport(_e);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),H.viewport(o)}if(ne.isPointLight){const Ee=G.camera,Je=G.matrix,it=ne.distance||Ee.far;it!==Ee.far&&(Ee.far=it,Ee.updateProjectionMatrix()),Lr.setFromMatrixPosition(ne.matrixWorld),Ee.position.copy(Lr),tc.copy(Ee.position),tc.add(mR[_e]),Ee.up.copy(gR[_e]),Ee.lookAt(tc),Ee.updateMatrixWorld(),Je.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Ud.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ud,Ee.coordinateSystem,Ee.reversedDepth)}else G.updateMatrices(ne);i=G.getFrustum(),x(D,v,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===Or&&M(G,v),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(A,N,I)};function M(T,D){const v=e.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new li(s.x,s.y,{format:Ts,type:Li})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(D,null,v,h,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(D,null,v,p,S,null)}function E(T,D,v,A){let N=null;const I=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)N=I;else if(N=v.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const H=N.uuid,se=D.uuid;let ae=c[H];ae===void 0&&(ae={},c[H]=ae);let Y=ae[se];Y===void 0&&(Y=N.clone(),ae[se]=Y,D.addEventListener("dispose",R)),N=Y}if(N.visible=D.visible,N.wireframe=D.wireframe,A===Or?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:f[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const H=t.properties.get(N);H.light=v}return N}function x(T,D,v,A,N){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Or)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const se=e.update(T),ae=T.material;if(Array.isArray(ae)){const Y=se.groups;for(let ne=0,G=Y.length;ne<G;ne++){const oe=Y[ne],de=ae[oe.materialIndex];if(de&&de.visible){const Me=E(T,de,A,N);T.onBeforeShadow(t,T,D,v,se,Me,oe),t.renderBufferDirect(v,null,se,Me,T,oe),T.onAfterShadow(t,T,D,v,se,Me,oe)}}}else if(ae.visible){const Y=E(T,ae,A,N);T.onBeforeShadow(t,T,D,v,se,Y,null),t.renderBufferDirect(v,null,se,Y,T,null),T.onAfterShadow(t,T,D,v,se,Y,null)}}const H=T.children;for(let se=0,ae=H.length;se<ae;se++)x(H[se],D,v,A,N)}function R(T){T.target.removeEventListener("dispose",R);for(const v in c){const A=c[v],N=T.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function vR(t,e){function n(){let z=!1;const we=new wt;let he=null;const Se=new wt(0,0,0,0);return{setMask:function(Fe){he!==Fe&&!z&&(t.colorMask(Fe,Fe,Fe,Fe),he=Fe)},setLocked:function(Fe){z=Fe},setClear:function(Fe,xe,We,Ve,Rt){Rt===!0&&(Fe*=Ve,xe*=Ve,We*=Ve),we.set(Fe,xe,We,Ve),Se.equals(we)===!1&&(t.clearColor(Fe,xe,We,Ve),Se.copy(we))},reset:function(){z=!1,he=null,Se.set(-1,0,0,0)}}}function i(){let z=!1,we=!1,he=null,Se=null,Fe=null;return{setReversed:function(xe){if(we!==xe){const We=e.get("EXT_clip_control");xe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),we=xe;const Ve=Fe;Fe=null,this.setClear(Ve)}},getReversed:function(){return we},setTest:function(xe){xe?q(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(xe){he!==xe&&!z&&(t.depthMask(xe),he=xe)},setFunc:function(xe){if(we&&(xe=XM[xe]),Se!==xe){switch(xe){case bc:t.depthFunc(t.NEVER);break;case Tc:t.depthFunc(t.ALWAYS);break;case Ac:t.depthFunc(t.LESS);break;case ur:t.depthFunc(t.LEQUAL);break;case wc:t.depthFunc(t.EQUAL);break;case Rc:t.depthFunc(t.GEQUAL);break;case Cc:t.depthFunc(t.GREATER);break;case Pc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=xe}},setLocked:function(xe){z=xe},setClear:function(xe){Fe!==xe&&(Fe=xe,we&&(xe=1-xe),t.clearDepth(xe))},reset:function(){z=!1,he=null,Se=null,Fe=null,we=!1}}}function s(){let z=!1,we=null,he=null,Se=null,Fe=null,xe=null,We=null,Ve=null,Rt=null;return{setTest:function(Et){z||(Et?q(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Et){we!==Et&&!z&&(t.stencilMask(Et),we=Et)},setFunc:function(Et,Gn,Wn){(he!==Et||Se!==Gn||Fe!==Wn)&&(t.stencilFunc(Et,Gn,Wn),he=Et,Se=Gn,Fe=Wn)},setOp:function(Et,Gn,Wn){(xe!==Et||We!==Gn||Ve!==Wn)&&(t.stencilOp(Et,Gn,Wn),xe=Et,We=Gn,Ve=Wn)},setLocked:function(Et){z=Et},setClear:function(Et){Rt!==Et&&(t.clearStencil(Et),Rt=Et)},reset:function(){z=!1,we=null,he=null,Se=null,Fe=null,xe=null,We=null,Ve=null,Rt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,g=[],S=null,m=!1,d=null,M=null,E=null,x=null,R=null,T=null,D=null,v=new at(0,0,0),A=0,N=!1,I=null,H=null,se=null,ae=null,Y=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,oe=0;const de=t.getParameter(t.VERSION);de.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(de)[1]),G=oe>=1):de.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),G=oe>=2);let Me=null,_e={};const Ee=t.getParameter(t.SCISSOR_BOX),Je=t.getParameter(t.VIEWPORT),it=new wt().fromArray(Ee),$e=new wt().fromArray(Je);function Z(z,we,he,Se){const Fe=new Uint8Array(4),xe=t.createTexture();t.bindTexture(z,xe),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<he;We++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,Fe):t.texImage2D(we+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Fe);return xe}const U={};U[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),U[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),U[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(t.DEPTH_TEST),o.setFunc(ur),Q(!1),ve(Ph),q(t.CULL_FACE),J(wi);function q(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function ue(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function ye(z,we){return h[z]!==we?(t.bindFramebuffer(z,we),h[z]=we,z===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=we),z===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=we),!0):!1}function fe(z,we){let he=g,Se=!1;if(z){he=p.get(we),he===void 0&&(he=[],p.set(we,he));const Fe=z.textures;if(he.length!==Fe.length||he[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,We=Fe.length;xe<We;xe++)he[xe]=t.COLOR_ATTACHMENT0+xe;he.length=Fe.length,Se=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,Se=!0);Se&&t.drawBuffers(he)}function w(z){return S!==z?(t.useProgram(z),S=z,!0):!1}const C={[us]:t.FUNC_ADD,[pM]:t.FUNC_SUBTRACT,[mM]:t.FUNC_REVERSE_SUBTRACT};C[gM]=t.MIN,C[_M]=t.MAX;const F={[vM]:t.ZERO,[xM]:t.ONE,[SM]:t.SRC_COLOR,[Mc]:t.SRC_ALPHA,[AM]:t.SRC_ALPHA_SATURATE,[bM]:t.DST_COLOR,[MM]:t.DST_ALPHA,[yM]:t.ONE_MINUS_SRC_COLOR,[Ec]:t.ONE_MINUS_SRC_ALPHA,[TM]:t.ONE_MINUS_DST_COLOR,[EM]:t.ONE_MINUS_DST_ALPHA,[wM]:t.CONSTANT_COLOR,[RM]:t.ONE_MINUS_CONSTANT_COLOR,[CM]:t.CONSTANT_ALPHA,[PM]:t.ONE_MINUS_CONSTANT_ALPHA};function J(z,we,he,Se,Fe,xe,We,Ve,Rt,Et){if(z===wi){m===!0&&(ue(t.BLEND),m=!1);return}if(m===!1&&(q(t.BLEND),m=!0),z!==dM){if(z!==d||Et!==N){if((M!==us||R!==us)&&(t.blendEquation(t.FUNC_ADD),M=us,R=us),Et)switch(z){case er:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dh:t.blendFunc(t.ONE,t.ONE);break;case Lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ih:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",z);break}else switch(z){case er:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Lh:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",z);break}E=null,x=null,T=null,D=null,v.set(0,0,0),A=0,d=z,N=Et}return}Fe=Fe||we,xe=xe||he,We=We||Se,(we!==M||Fe!==R)&&(t.blendEquationSeparate(C[we],C[Fe]),M=we,R=Fe),(he!==E||Se!==x||xe!==T||We!==D)&&(t.blendFuncSeparate(F[he],F[Se],F[xe],F[We]),E=he,x=Se,T=xe,D=We),(Ve.equals(v)===!1||Rt!==A)&&(t.blendColor(Ve.r,Ve.g,Ve.b,Rt),v.copy(Ve),A=Rt),d=z,N=!1}function k(z,we){z.side===ti?ue(t.CULL_FACE):q(t.CULL_FACE);let he=z.side===xn;we&&(he=!he),Q(he),z.blending===er&&z.transparent===!1?J(wi):J(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Se=z.stencilWrite;a.setTest(Se),Se&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?q(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(z){I!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),I=z)}function ve(z){z!==uM?(q(t.CULL_FACE),z!==H&&(z===Ph?t.cullFace(t.BACK):z===fM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),H=z}function me(z){z!==se&&(G&&t.lineWidth(z),se=z)}function ge(z,we,he){z?(q(t.POLYGON_OFFSET_FILL),(ae!==we||Y!==he)&&(ae=we,Y=he,o.getReversed()&&(we=-we),t.polygonOffset(we,he))):ue(t.POLYGON_OFFSET_FILL)}function ce(z){z?q(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function Re(z){z===void 0&&(z=t.TEXTURE0+ne-1),Me!==z&&(t.activeTexture(z),Me=z)}function P(z,we,he){he===void 0&&(Me===null?he=t.TEXTURE0+ne-1:he=Me);let Se=_e[he];Se===void 0&&(Se={type:void 0,texture:void 0},_e[he]=Se),(Se.type!==z||Se.texture!==we)&&(Me!==he&&(t.activeTexture(he),Me=he),t.bindTexture(z,we||U[z]),Se.type=z,Se.texture=we)}function Le(){const z=_e[Me];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ce(){try{t.compressedTexImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function _(){try{t.texSubImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function B(){try{t.texSubImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function L(){try{t.compressedTexSubImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function O(){try{t.texStorage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function le(){try{t.texStorage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function j(){try{t.texImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function ie(){try{t.texImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function pe(z){return f[z]!==void 0?f[z]:t.getParameter(z)}function be(z,we){f[z]!==we&&(t.pixelStorei(z,we),f[z]=we)}function Te(z){it.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),it.copy(z))}function Ae(z){$e.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),$e.copy(z))}function ke(z,we){let he=c.get(we);he===void 0&&(he=new WeakMap,c.set(we,he));let Se=he.get(z);Se===void 0&&(Se=t.getUniformBlockIndex(we,z.name),he.set(z,Se))}function Ye(z,we){const Se=c.get(we).get(z);l.get(we)!==Se&&(t.uniformBlockBinding(we,Se,z.__bindingPointIndex),l.set(we,Se))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},Me=null,_e={},h={},p=new WeakMap,g=[],S=null,m=!1,d=null,M=null,E=null,x=null,R=null,T=null,D=null,v=new at(0,0,0),A=0,N=!1,I=null,H=null,se=null,ae=null,Y=null,it.set(0,0,t.canvas.width,t.canvas.height),$e.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:ue,bindFramebuffer:ye,drawBuffers:fe,useProgram:w,setBlending:J,setMaterial:k,setFlipSided:Q,setCullFace:ve,setLineWidth:me,setPolygonOffset:ge,setScissorTest:ce,activeTexture:Re,bindTexture:P,unbindTexture:Le,compressedTexImage2D:Ce,compressedTexImage3D:b,texImage2D:j,texImage3D:ie,pixelStorei:be,getParameter:pe,updateUBOMapping:ke,uniformBlockBinding:Ye,texStorage2D:O,texStorage3D:le,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:K,compressedTexSubImage3D:L,scissor:Te,viewport:Ae,reset:Qe}}function xR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,_){return g?new OffscreenCanvas(b,_):wa("canvas")}function m(b,_,B){let K=1;const L=Ce(b);if((L.width>B||L.height>B)&&(K=B/Math.max(L.width,L.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const O=Math.floor(K*L.width),le=Math.floor(K*L.height);h===void 0&&(h=S(O,le));const j=_?S(O,le):h;return j.width=O,j.height=le,j.getContext("2d").drawImage(b,0,0,O,le),Ke("WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+O+"x"+le+")."),j}else return"data"in b&&Ke("WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),b;return b}function d(b){return b.generateMipmaps}function M(b){t.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(b,_,B,K,L,O=!1){if(b!==null){if(t[b]!==void 0)return t[b];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let le;K&&(le=e.get("EXT_texture_norm16"),le||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===t.RED&&(B===t.FLOAT&&(j=t.R32F),B===t.HALF_FLOAT&&(j=t.R16F),B===t.UNSIGNED_BYTE&&(j=t.R8),B===t.UNSIGNED_SHORT&&le&&(j=le.R16_EXT),B===t.SHORT&&le&&(j=le.R16_SNORM_EXT)),_===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.R8UI),B===t.UNSIGNED_SHORT&&(j=t.R16UI),B===t.UNSIGNED_INT&&(j=t.R32UI),B===t.BYTE&&(j=t.R8I),B===t.SHORT&&(j=t.R16I),B===t.INT&&(j=t.R32I)),_===t.RG&&(B===t.FLOAT&&(j=t.RG32F),B===t.HALF_FLOAT&&(j=t.RG16F),B===t.UNSIGNED_BYTE&&(j=t.RG8),B===t.UNSIGNED_SHORT&&le&&(j=le.RG16_EXT),B===t.SHORT&&le&&(j=le.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RG8UI),B===t.UNSIGNED_SHORT&&(j=t.RG16UI),B===t.UNSIGNED_INT&&(j=t.RG32UI),B===t.BYTE&&(j=t.RG8I),B===t.SHORT&&(j=t.RG16I),B===t.INT&&(j=t.RG32I)),_===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RGB8UI),B===t.UNSIGNED_SHORT&&(j=t.RGB16UI),B===t.UNSIGNED_INT&&(j=t.RGB32UI),B===t.BYTE&&(j=t.RGB8I),B===t.SHORT&&(j=t.RGB16I),B===t.INT&&(j=t.RGB32I)),_===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),B===t.UNSIGNED_INT&&(j=t.RGBA32UI),B===t.BYTE&&(j=t.RGBA8I),B===t.SHORT&&(j=t.RGBA16I),B===t.INT&&(j=t.RGBA32I)),_===t.RGB&&(B===t.UNSIGNED_SHORT&&le&&(j=le.RGB16_EXT),B===t.SHORT&&le&&(j=le.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),_===t.RGBA){const ie=O?Aa:ct.getTransfer(L);B===t.FLOAT&&(j=t.RGBA32F),B===t.HALF_FLOAT&&(j=t.RGBA16F),B===t.UNSIGNED_BYTE&&(j=ie===mt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&le&&(j=le.RGBA16_EXT),B===t.SHORT&&le&&(j=le.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function R(b,_){let B;return b?_===null||_===fi||_===to?B=t.DEPTH24_STENCIL8:_===ii?B=t.DEPTH32F_STENCIL8:_===eo&&(B=t.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===to?B=t.DEPTH_COMPONENT24:_===ii?B=t.DEPTH_COMPONENT32F:_===eo&&(B=t.DEPTH_COMPONENT16),B}function T(b,_){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==qt&&b.minFilter!==en?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function D(b){const _=b.target;_.removeEventListener("dispose",D),A(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function v(b){const _=b.target;_.removeEventListener("dispose",v),I(_)}function A(b){const _=i.get(b);if(_.__webglInit===void 0)return;const B=b.source,K=p.get(B);if(K){const L=K[_.__cacheKey];L.usedTimes--,L.usedTimes===0&&N(b),Object.keys(K).length===0&&p.delete(B)}i.remove(b)}function N(b){const _=i.get(b);t.deleteTexture(_.__webglTexture);const B=b.source,K=p.get(B);delete K[_.__cacheKey],o.memory.textures--}function I(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let L=0;L<_.__webglFramebuffer[K].length;L++)t.deleteFramebuffer(_.__webglFramebuffer[K][L]);else t.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)t.deleteFramebuffer(_.__webglFramebuffer[K]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=b.textures;for(let K=0,L=B.length;K<L;K++){const O=i.get(B[K]);O.__webglTexture&&(t.deleteTexture(O.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(b)}let H=0;function se(){H=0}function ae(){return H}function Y(b){H=b}function ne(){const b=H;return b>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),H+=1,b}function G(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function oe(b,_){const B=i.get(b);if(b.isVideoTexture&&P(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const K=b.image;if(K===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(B,b,_);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+_)}function de(b,_){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){ue(B,b,_);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+_)}function Me(b,_){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){ue(B,b,_);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+_)}function _e(b,_){const B=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&B.__version!==b.version){ye(B,b,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+_)}const Ee={[Dc]:t.REPEAT,[Ti]:t.CLAMP_TO_EDGE,[Lc]:t.MIRRORED_REPEAT},Je={[qt]:t.NEAREST,[IM]:t.NEAREST_MIPMAP_NEAREST,[bo]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[bl]:t.LINEAR_MIPMAP_NEAREST,[ps]:t.LINEAR_MIPMAP_LINEAR},it={[OM]:t.NEVER,[VM]:t.ALWAYS,[FM]:t.LESS,[Yu]:t.LEQUAL,[BM]:t.EQUAL,[$u]:t.GEQUAL,[zM]:t.GREATER,[HM]:t.NOTEQUAL};function $e(b,_){if(_.type===ii&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===en||_.magFilter===bl||_.magFilter===bo||_.magFilter===ps||_.minFilter===en||_.minFilter===bl||_.minFilter===bo||_.minFilter===ps)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Ee[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Ee[_.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Ee[_.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Je[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Je[_.minFilter]),_.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,it[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qt||_.minFilter!==bo&&_.minFilter!==ps||_.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(b,_){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",D));const K=_.source;let L=p.get(K);L===void 0&&(L={},p.set(K,L));const O=G(_);if(O!==b.__cacheKey){L[O]===void 0&&(L[O]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),L[O].usedTimes++;const le=L[b.__cacheKey];le!==void 0&&(L[b.__cacheKey].usedTimes--,le.usedTimes===0&&N(_)),b.__cacheKey=O,b.__webglTexture=L[O].texture}return B}function U(b,_,B){return Math.floor(Math.floor(b/B)/_)}function q(b,_,B,K){const O=b.updateRanges;if(O.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,B,K,_.data);else{O.sort((be,Te)=>be.start-Te.start);let le=0;for(let be=1;be<O.length;be++){const Te=O[le],Ae=O[be],ke=Te.start+Te.count,Ye=U(Ae.start,_.width,4),Qe=U(Te.start,_.width,4);Ae.start<=ke+1&&Ye===Qe&&U(Ae.start+Ae.count-1,_.width,4)===Ye?Te.count=Math.max(Te.count,Ae.start+Ae.count-Te.start):(++le,O[le]=Ae)}O.length=le+1;const j=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),pe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let be=0,Te=O.length;be<Te;be++){const Ae=O[be],ke=Math.floor(Ae.start/4),Ye=Math.ceil(Ae.count/4),Qe=ke%_.width,z=Math.floor(ke/_.width),we=Ye,he=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,Qe,z,we,he,B,K,_.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,j),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,pe)}}function ue(b,_,B){let K=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=t.TEXTURE_3D);const L=Z(b,_),O=_.source;n.bindTexture(K,b.__webglTexture,t.TEXTURE0+B);const le=i.get(O);if(O.version!==le.__version||L===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const he=ct.getPrimaries(ct.workingColorSpace),Se=_.colorSpace===Ki?null:ct.getPrimaries(_.colorSpace),Fe=_.colorSpace===Ki||he===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let ie=m(_.image,!1,s.maxTextureSize);ie=Le(_,ie);const pe=r.convert(_.format,_.colorSpace),be=r.convert(_.type);let Te=x(_.internalFormat,pe,be,_.normalized,_.colorSpace,_.isVideoTexture);$e(K,_);let Ae;const ke=_.mipmaps,Ye=_.isVideoTexture!==!0,Qe=le.__version===void 0||L===!0,z=O.dataReady,we=T(_,ie);if(_.isDepthTexture)Te=R(_.format===ms,_.type),Qe&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Te,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Te,ie.width,ie.height,0,pe,be,null));else if(_.isDataTexture)if(ke.length>0){Ye&&Qe&&n.texStorage2D(t.TEXTURE_2D,we,Te,ke[0].width,ke[0].height);for(let he=0,Se=ke.length;he<Se;he++)Ae=ke[he],Ye?z&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ae.width,Ae.height,pe,be,Ae.data):n.texImage2D(t.TEXTURE_2D,he,Te,Ae.width,Ae.height,0,pe,be,Ae.data);_.generateMipmaps=!1}else Ye?(Qe&&n.texStorage2D(t.TEXTURE_2D,we,Te,ie.width,ie.height),z&&q(_,ie,pe,be)):n.texImage2D(t.TEXTURE_2D,0,Te,ie.width,ie.height,0,pe,be,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ye&&Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Te,ke[0].width,ke[0].height,ie.depth);for(let he=0,Se=ke.length;he<Se;he++)if(Ae=ke[he],_.format!==Un)if(pe!==null)if(Ye){if(z)if(_.layerUpdates.size>0){const Fe=hd(Ae.width,Ae.height,_.format,_.type);for(const xe of _.layerUpdates){const We=Ae.data.subarray(xe*Fe/Ae.data.BYTES_PER_ELEMENT,(xe+1)*Fe/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,xe,Ae.width,Ae.height,1,pe,We)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Ae.width,Ae.height,ie.depth,pe,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,Te,Ae.width,Ae.height,ie.depth,0,Ae.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Ae.width,Ae.height,ie.depth,pe,be,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,Te,Ae.width,Ae.height,ie.depth,0,pe,be,Ae.data)}else{Ye&&Qe&&n.texStorage2D(t.TEXTURE_2D,we,Te,ke[0].width,ke[0].height);for(let he=0,Se=ke.length;he<Se;he++)Ae=ke[he],_.format!==Un?pe!==null?Ye?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,Ae.width,Ae.height,pe,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,he,Te,Ae.width,Ae.height,0,Ae.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?z&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ae.width,Ae.height,pe,be,Ae.data):n.texImage2D(t.TEXTURE_2D,he,Te,Ae.width,Ae.height,0,pe,be,Ae.data)}else if(_.isDataArrayTexture)if(Ye){if(Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Te,ie.width,ie.height,ie.depth),z)if(_.layerUpdates.size>0){const he=hd(ie.width,ie.height,_.format,_.type);for(const Se of _.layerUpdates){const Fe=ie.data.subarray(Se*he/ie.data.BYTES_PER_ELEMENT,(Se+1)*he/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Se,ie.width,ie.height,1,pe,be,Fe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,be,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,pe,be,ie.data);else if(_.isData3DTexture)Ye?(Qe&&n.texStorage3D(t.TEXTURE_3D,we,Te,ie.width,ie.height,ie.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,be,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,pe,be,ie.data);else if(_.isFramebufferTexture){if(Qe)if(Ye)n.texStorage2D(t.TEXTURE_2D,we,Te,ie.width,ie.height);else{let he=ie.width,Se=ie.height;for(let Fe=0;Fe<we;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Te,he,Se,0,pe,be,null),he>>=1,Se>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const he=t.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ie.parentNode!==he){he.appendChild(ie),f.add(_),he.onpaint=Se=>{const Fe=Se.changedElements;for(const xe of f)Fe.includes(xe.image)&&(xe.needsUpdate=!0)},he.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const Fe=t.RGBA,xe=t.RGBA,We=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Fe,xe,We,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ye&&Qe){const he=Ce(ke[0]);n.texStorage2D(t.TEXTURE_2D,we,Te,he.width,he.height)}for(let he=0,Se=ke.length;he<Se;he++)Ae=ke[he],Ye?z&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,pe,be,Ae):n.texImage2D(t.TEXTURE_2D,he,Te,pe,be,Ae);_.generateMipmaps=!1}else if(Ye){if(Qe){const he=Ce(ie);n.texStorage2D(t.TEXTURE_2D,we,Te,he.width,he.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,be,ie)}else n.texImage2D(t.TEXTURE_2D,0,Te,pe,be,ie);d(_)&&M(K),le.__version=O.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ye(b,_,B){if(_.image.length!==6)return;const K=Z(b,_),L=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const O=i.get(L);if(L.version!==O.__version||K===!0){n.activeTexture(t.TEXTURE0+B);const le=ct.getPrimaries(ct.workingColorSpace),j=_.colorSpace===Ki?null:ct.getPrimaries(_.colorSpace),ie=_.colorSpace===Ki||le===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const pe=_.isCompressedTexture||_.image[0].isCompressedTexture,be=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let xe=0;xe<6;xe++)!pe&&!be?Te[xe]=m(_.image[xe],!0,s.maxCubemapSize):Te[xe]=be?_.image[xe].image:_.image[xe],Te[xe]=Le(_,Te[xe]);const Ae=Te[0],ke=r.convert(_.format,_.colorSpace),Ye=r.convert(_.type),Qe=x(_.internalFormat,ke,Ye,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,we=O.__version===void 0||K===!0,he=L.dataReady;let Se=T(_,Ae);$e(t.TEXTURE_CUBE_MAP,_);let Fe;if(pe){z&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Qe,Ae.width,Ae.height);for(let xe=0;xe<6;xe++){Fe=Te[xe].mipmaps;for(let We=0;We<Fe.length;We++){const Ve=Fe[We];_.format!==Un?ke!==null?z?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,0,0,Ve.width,Ve.height,ke,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,Qe,Ve.width,Ve.height,0,Ve.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,0,0,Ve.width,Ve.height,ke,Ye,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,Qe,Ve.width,Ve.height,0,ke,Ye,Ve.data)}}}else{if(Fe=_.mipmaps,z&&we){Fe.length>0&&Se++;const xe=Ce(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Qe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(be){z?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Te[xe].width,Te[xe].height,ke,Ye,Te[xe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Qe,Te[xe].width,Te[xe].height,0,ke,Ye,Te[xe].data);for(let We=0;We<Fe.length;We++){const Rt=Fe[We].image[xe].image;z?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,0,0,Rt.width,Rt.height,ke,Ye,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,Qe,Rt.width,Rt.height,0,ke,Ye,Rt.data)}}else{z?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ke,Ye,Te[xe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Qe,ke,Ye,Te[xe]);for(let We=0;We<Fe.length;We++){const Ve=Fe[We];z?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,0,0,ke,Ye,Ve.image[xe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,Qe,ke,Ye,Ve.image[xe])}}}d(_)&&M(t.TEXTURE_CUBE_MAP),O.__version=L.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function fe(b,_,B,K,L,O){const le=r.convert(B.format,B.colorSpace),j=r.convert(B.type),ie=x(B.internalFormat,le,j,B.normalized,B.colorSpace),pe=i.get(_),be=i.get(B);if(be.__renderTarget=_,!pe.__hasExternalTextures){const Te=Math.max(1,_.width>>O),Ae=Math.max(1,_.height>>O);L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?n.texImage3D(L,O,ie,Te,Ae,_.depth,0,le,j,null):n.texImage2D(L,O,ie,Te,Ae,0,le,j,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,L,be.__webglTexture,0,ce(_)):(L===t.TEXTURE_2D||L>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,L,be.__webglTexture,O),n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(b,_,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer){const K=_.depthTexture,L=K&&K.isDepthTexture?K.type:null,O=R(_.stencilBuffer,L),le=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Re(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce(_),O,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce(_),O,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,O,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,b)}else{const K=_.textures;for(let L=0;L<K.length;L++){const O=K[L],le=r.convert(O.format,O.colorSpace),j=r.convert(O.type),ie=x(O.internalFormat,le,j,O.normalized,O.colorSpace);Re(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce(_),ie,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce(_),ie,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ie,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function C(b,_,B){const K=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const L=i.get(_.depthTexture);if(L.__renderTarget=_,(!L.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(L.__webglInit===void 0&&(L.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),L.__webglTexture===void 0){L.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture),$e(t.TEXTURE_CUBE_MAP,_.depthTexture);const pe=r.convert(_.depthTexture.format),be=r.convert(_.depthTexture.type);let Te;_.depthTexture.format===Ii?Te=t.DEPTH_COMPONENT24:_.depthTexture.format===ms&&(Te=t.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Te,_.width,_.height,0,pe,be,null)}}else oe(_.depthTexture,0);const O=L.__webglTexture,le=ce(_),j=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ie=_.depthTexture.format===ms?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ii)Re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,j,O,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,ie,j,O,0);else if(_.depthTexture.format===ms)Re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,j,O,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,ie,j,O,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(b){const _=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const L=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",L)};K.addEventListener("dispose",L),_.__depthDisposeCallback=L}_.__boundDepthTexture=K}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)C(_.__webglFramebuffer[K],b,K);else{const K=b.texture.mipmaps;K&&K.length>0?C(_.__webglFramebuffer[0],b,0):C(_.__webglFramebuffer,b,0)}else if(B){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=t.createRenderbuffer(),w(_.__webglDepthbuffer[K],b,!1);else{const L=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,O=_.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,O),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,O)}}else{const K=b.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),w(_.__webglDepthbuffer,b,!1);else{const L=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,O=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,O),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,O)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function J(b,_,B){const K=i.get(b);_!==void 0&&fe(K.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&F(b)}function k(b){const _=b.texture,B=i.get(b),K=i.get(_);b.addEventListener("dispose",v);const L=b.textures,O=b.isWebGLCubeRenderTarget===!0,le=L.length>1;if(le||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=_.version,o.memory.textures++),O){B.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[j]=[];for(let ie=0;ie<_.mipmaps.length;ie++)B.__webglFramebuffer[j][ie]=t.createFramebuffer()}else B.__webglFramebuffer[j]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)B.__webglFramebuffer[j]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(le)for(let j=0,ie=L.length;j<ie;j++){const pe=i.get(L[j]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Re(b)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let j=0;j<L.length;j++){const ie=L[j];B.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[j]);const pe=r.convert(ie.format,ie.colorSpace),be=r.convert(ie.type),Te=x(ie.internalFormat,pe,be,ie.normalized,ie.colorSpace,b.isXRRenderTarget===!0),Ae=ce(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Te,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,B.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),w(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(O){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),$e(t.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)fe(B.__webglFramebuffer[j][ie],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else fe(B.__webglFramebuffer[j],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);d(_)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let j=0,ie=L.length;j<ie;j++){const pe=L[j],be=i.get(pe);let Te=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Te=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,be.__webglTexture),$e(Te,pe),fe(B.__webglFramebuffer,b,pe,t.COLOR_ATTACHMENT0+j,Te,0),d(pe)&&M(Te)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,K.__webglTexture),$e(j,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)fe(B.__webglFramebuffer[ie],b,_,t.COLOR_ATTACHMENT0,j,ie);else fe(B.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,j,0);d(_)&&M(j),n.unbindTexture()}b.depthBuffer&&F(b)}function Q(b){const _=b.textures;for(let B=0,K=_.length;B<K;B++){const L=_[B];if(d(L)){const O=E(b),le=i.get(L).__webglTexture;n.bindTexture(O,le),M(O),n.unbindTexture()}}}const ve=[],me=[];function ge(b){if(b.samples>0){if(Re(b)===!1){const _=b.textures,B=b.width,K=b.height;let L=t.COLOR_BUFFER_BIT;const O=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(b),j=_.length>1;if(j)for(let pe=0;pe<_.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ie=b.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(L|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(L|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[pe]);const be=i.get(_[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,B,K,0,0,B,K,L,t.NEAREST),l===!0&&(ve.length=0,me.length=0,ve.push(t.COLOR_ATTACHMENT0+pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ve.push(O),me.push(O),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,me)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let pe=0;pe<_.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,le.__webglColorRenderbuffer[pe]);const be=i.get(_[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ce(b){return Math.min(s.maxSamples,b.samples)}function Re(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function Le(b,_){const B=b.colorSpace,K=b.format,L=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Ta&&B!==Ki&&(ct.getTransfer(B)===mt?(K!==Un||L!==En)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",B)),_}function Ce(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=ne,this.resetTextureUnits=se,this.getTextureUnits=ae,this.setTextureUnits=Y,this.setTexture2D=oe,this.setTexture2DArray=de,this.setTexture3D=Me,this.setTextureCube=_e,this.rebindTextures=J,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function SR(t,e){function n(i,s=Ki){let r;const o=ct.getTransfer(s);if(i===En)return t.UNSIGNED_BYTE;if(i===ku)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Gu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ym)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wm)return t.BYTE;if(i===Xm)return t.SHORT;if(i===eo)return t.UNSIGNED_SHORT;if(i===Vu)return t.INT;if(i===fi)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===$m)return t.ALPHA;if(i===Km)return t.RGB;if(i===Un)return t.RGBA;if(i===Ii)return t.DEPTH_COMPONENT;if(i===ms)return t.DEPTH_STENCIL;if(i===Zm)return t.RED;if(i===Wu)return t.RED_INTEGER;if(i===Ts)return t.RG;if(i===Xu)return t.RG_INTEGER;if(i===qu)return t.RGBA_INTEGER;if(i===sa||i===ra||i===oa||i===aa)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ic||i===Nc||i===Uc||i===Oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fc||i===Bc||i===zc||i===Hc||i===Vc||i===Ea||i===kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fc||i===Bc)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hc)return r.COMPRESSED_R11_EAC;if(i===Vc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ea)return r.COMPRESSED_RG11_EAC;if(i===kc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gc||i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===Kc||i===Zc||i===Jc||i===jc||i===Qc||i===eu||i===tu||i===nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$c)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===iu||i===su||i===ru)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===iu)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ru)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ou||i===au||i===ba||i===lu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ou)return r.COMPRESSED_RED_RGTC1_EXT;if(i===au)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ER{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new sg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:yR,fragmentShader:MR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bR extends ts{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const S=typeof XRWebGLBinding<"u",m=new ER,d={},M=n.getContextAttributes();let E=null,x=null;const R=[],T=[],D=new je;let v=null;const A=new Rn;A.viewport=new wt;const N=new Rn;N.viewport=new wt;const I=[A,N],H=new DE;let se=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let U=R[Z];return U===void 0&&(U=new Dl,R[Z]=U),U.getTargetRaySpace()},this.getControllerGrip=function(Z){let U=R[Z];return U===void 0&&(U=new Dl,R[Z]=U),U.getGripSpace()},this.getHand=function(Z){let U=R[Z];return U===void 0&&(U=new Dl,R[Z]=U),U.getHandSpace()};function Y(Z){const U=T.indexOf(Z.inputSource);if(U===-1)return;const q=R[U];q!==void 0&&(q.update(Z.inputSource,Z.frame,c||o),q.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ne(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",G);for(let Z=0;Z<R.length;Z++){const U=T[Z];U!==null&&(T[Z]=null,R[Z].disconnect(U))}se=null,ae=null,m.reset();for(const Z in d)delete d[Z];e.setRenderTarget(E),p=null,h=null,f=null,s=null,x=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(D),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,ue=null,ye=null;M.depth&&(ye=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=M.stencil?ms:Ii,ue=M.stencil?to:fi);const fe={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new li(h.textureWidth,h.textureHeight,{format:Un,type:En,depthTexture:new hr(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const q={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,q),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new li(p.framebufferWidth,p.framebufferHeight,{format:Un,type:En,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Z){for(let U=0;U<Z.removed.length;U++){const q=Z.removed[U],ue=T.indexOf(q);ue>=0&&(T[ue]=null,R[ue].disconnect(q))}for(let U=0;U<Z.added.length;U++){const q=Z.added[U];let ue=T.indexOf(q);if(ue===-1){for(let fe=0;fe<R.length;fe++)if(fe>=T.length){T.push(q),ue=fe;break}else if(T[fe]===null){T[fe]=q,ue=fe;break}if(ue===-1)break}const ye=R[ue];ye&&ye.connect(q)}}const oe=new $,de=new $;function Me(Z,U,q){oe.setFromMatrixPosition(U.matrixWorld),de.setFromMatrixPosition(q.matrixWorld);const ue=oe.distanceTo(de),ye=U.projectionMatrix.elements,fe=q.projectionMatrix.elements,w=ye[14]/(ye[10]-1),C=ye[14]/(ye[10]+1),F=(ye[9]+1)/ye[5],J=(ye[9]-1)/ye[5],k=(ye[8]-1)/ye[0],Q=(fe[8]+1)/fe[0],ve=w*k,me=w*Q,ge=ue/(-k+Q),ce=ge*-k;if(U.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ce),Z.translateZ(ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ye[10]===-1)Z.projectionMatrix.copy(U.projectionMatrix),Z.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const Re=w+ge,P=C+ge,Le=ve-ce,Ce=me+(ue-ce),b=F*C/P*Re,_=J*C/P*Re;Z.projectionMatrix.makePerspective(Le,Ce,b,_,Re,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function _e(Z,U){U===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(U.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let U=Z.near,q=Z.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(q=m.depthFar)),H.near=N.near=A.near=U,H.far=N.far=A.far=q,(se!==H.near||ae!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),se=H.near,ae=H.far),H.layers.mask=Z.layers.mask|6,A.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;const ue=Z.parent,ye=H.cameras;_e(H,ue);for(let fe=0;fe<ye.length;fe++)_e(ye[fe],ue);ye.length===2?Me(H,A,N):H.projectionMatrix.copy(A.projectionMatrix),Ee(Z,H,ue)};function Ee(Z,U,q){q===null?Z.matrix.copy(U.matrixWorld):(Z.matrix.copy(q.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(U.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(U.projectionMatrix),Z.projectionMatrixInverse.copy(U.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=uu*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return d[Z]};let Je=null;function it(Z,U){if(u=U.getViewerPose(c||o),g=U,u!==null){const q=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ue=!1;q.length!==H.cameras.length&&(H.cameras.length=0,ue=!0);for(let C=0;C<q.length;C++){const F=q[C];let J=null;if(p!==null)J=p.getViewport(F);else{const Q=f.getViewSubImage(h,F);J=Q.viewport,C===0&&(e.setRenderTargetTextures(x,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(x))}let k=I[C];k===void 0&&(k=new Rn,k.layers.enable(C),k.viewport=new wt,I[C]=k),k.matrix.fromArray(F.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(F.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(J.x,J.y,J.width,J.height),C===0&&(H.matrix.copy(k.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ue===!0&&H.cameras.push(k)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const C=f.getDepthInformation(q[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(ye&&ye.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<q.length;C++){const F=q[C].camera;if(F){let J=d[F];J||(J=new sg,d[F]=J);const k=f.getCameraImage(F);J.sourceTexture=k}}}}for(let q=0;q<R.length;q++){const ue=T[q],ye=R[q];ue!==null&&ye!==void 0&&ye.update(ue,U,c||o)}Je&&Je(Z,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),g=null}const $e=new lg;$e.setAnimationLoop(it),this.setAnimationLoop=function(Z){Je=Z},this.dispose=function(){}}}const TR=new At,mg=new et;mg.set(-1,0,0,0,1,0,0,0,1);function AR(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,rg(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,E,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(TR.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mg),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=E*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,R){const T=R.program;i.uniformBlockBinding(x,T)}function c(x,R){let T=s[x.id];T===void 0&&(m(x),T=u(x),s[x.id]=T,x.addEventListener("dispose",M));const D=R.program;i.updateUBOMapping(x,D);const v=e.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const R=f();x.__bindingPointIndex=R;const T=t.createBuffer(),D=x.__size,v=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,D,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,R,T),T}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const R=s[x.id],T=x.uniforms,D=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,R);for(let v=0,A=T.length;v<A;v++){const N=T[v];if(Array.isArray(N))for(let I=0,H=N.length;I<H;I++)p(N[I],v,I,D);else p(N,v,0,D)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,R,T,D){if(S(x,R,T,D)===!0){const v=x.__offset,A=x.value;if(Array.isArray(A)){let N=0;for(let I=0;I<A.length;I++){const H=A[I],se=d(H);g(H,x.__data,N),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(N+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,x.__data)}}function g(x,R,T){typeof x=="number"||typeof x=="boolean"?R[0]=x:x.isMatrix3?(R[0]=x.elements[0],R[1]=x.elements[1],R[2]=x.elements[2],R[3]=0,R[4]=x.elements[3],R[5]=x.elements[4],R[6]=x.elements[5],R[7]=0,R[8]=x.elements[6],R[9]=x.elements[7],R[10]=x.elements[8],R[11]=0):ArrayBuffer.isView(x)?R.set(new x.constructor(x.buffer,x.byteOffset,R.length)):x.toArray(R,T)}function S(x,R,T,D){const v=x.value,A=R+"_"+T;if(D[A]===void 0)return typeof v=="number"||typeof v=="boolean"?D[A]=v:ArrayBuffer.isView(v)?D[A]=v.slice():D[A]=v.clone(),!0;{const N=D[A];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return D[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function m(x){const R=x.uniforms;let T=0;const D=16;for(let A=0,N=R.length;A<N;A++){const I=Array.isArray(R[A])?R[A]:[R[A]];for(let H=0,se=I.length;H<se;H++){const ae=I[H],Y=Array.isArray(ae.value)?ae.value:[ae.value];for(let ne=0,G=Y.length;ne<G;ne++){const oe=Y[ne],de=d(oe),Me=T%D,_e=Me%de.boundary,Ee=Me+_e;T+=_e,Ee!==0&&D-Ee<de.storage&&(T+=D-Ee),ae.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=T,T+=de.storage}}}const v=T%D;return v>0&&(T+=D-v),x.__size=T,x.__cache={},this}function d(x){const R={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(R.boundary=4,R.storage=4):x.isVector2?(R.boundary=8,R.storage=8):x.isVector3||x.isColor?(R.boundary=16,R.storage=12):x.isVector4?(R.boundary=16,R.storage=16):x.isMatrix3?(R.boundary=48,R.storage=48):x.isMatrix4?(R.boundary=64,R.storage=64):x.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(R.boundary=16,R.storage=x.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",x),R}function M(x){const R=x.target;R.removeEventListener("dispose",M);const T=o.indexOf(R.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function E(){for(const x in s)t.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}const RR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $n=null;function CR(){return $n===null&&($n=new dE(RR,16,16,Ts,Li),$n.name="DFG_LUT",$n.minFilter=en,$n.magFilter=en,$n.wrapS=Ti,$n.wrapT=Ti,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}class PR{constructor(e={}){const{canvas:n=GM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=En}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const S=p,m=new Set([qu,Xu,Wu]),d=new Set([En,fi,eo,to,ku,Gu]),M=new Uint32Array(4),E=new Int32Array(4),x=new $;let R=null,T=null;const D=[],v=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1,H=null,se=null,ae=null,Y=null;this._outputColorSpace=wn;let ne=0,G=0,oe=null,de=-1,Me=null;const _e=new wt,Ee=new wt;let Je=null;const it=new at(0);let $e=0,Z=n.width,U=n.height,q=1,ue=null,ye=null;const fe=new wt(0,0,Z,U),w=new wt(0,0,Z,U);let C=!1;const F=new ju;let J=!1,k=!1;const Q=new At,ve=new $,me=new wt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Re(){return oe===null?q:1}let P=i;function Le(y,W){return n.getContext(y,W)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hu}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",Et,!1),n.addEventListener("webglcontextcreationerror",Gn,!1),P===null){const W="webgl2";if(P=Le(W,y),P===null)throw Le(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw ut("WebGLRenderer: "+y.message),y}let Ce,b,_,B,K,L,O,le,j,ie,pe,be,Te,Ae,ke,Ye,Qe,z,we,he,Se,Fe,xe;function We(){Ce=new CA(P),Ce.init(),Se=new SR(P,Ce),b=new yA(P,Ce,e,Se),_=new vR(P,Ce),b.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),se=P.createFramebuffer(),ae=P.createFramebuffer(),Y=P.createFramebuffer(),B=new LA(P),K=new sR,L=new xR(P,Ce,_,K,b,Se,B),O=new RA(N),le=new OE(P),Fe=new xA(P,le),j=new PA(P,le,B,Fe),ie=new NA(P,j,le,Fe,B),z=new IA(P,b,L),ke=new MA(K),pe=new iR(N,O,Ce,b,Fe,ke),be=new AR(N,K),Te=new oR,Ae=new hR(Ce),Qe=new vA(N,O,_,ie,g,l),Ye=new _R(N,ie,b),xe=new wR(P,B,b,_),we=new SA(P,Ce,B),he=new DA(P,Ce,B),B.programs=pe.programs,N.capabilities=b,N.extensions=Ce,N.properties=K,N.renderLists=Te,N.shadowMap=Ye,N.state=_,N.info=B}We(),S!==En&&(A=new OA(S,n.width,n.height,a,s,r));const Ve=new bR(N,P);this.xr=Ve,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Ce.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ce.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(Z,U,!1))},this.getSize=function(y){return y.set(Z,U)},this.setSize=function(y,W,re=!0){if(Ve.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,U=W,n.width=Math.floor(y*q),n.height=Math.floor(W*q),re===!0&&(n.style.width=y+"px",n.style.height=W+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,y,W)},this.getDrawingBufferSize=function(y){return y.set(Z*q,U*q).floor()},this.setDrawingBufferSize=function(y,W,re){Z=y,U=W,q=re,n.width=Math.floor(y*re),n.height=Math.floor(W*re),this.setViewport(0,0,y,W)},this.setEffects=function(y){if(S===En){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let W=0;W<y.length;W++)if(y[W].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(_e)},this.getViewport=function(y){return y.copy(fe)},this.setViewport=function(y,W,re,ee){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,W,re,ee),_.viewport(_e.copy(fe).multiplyScalar(q).round())},this.getScissor=function(y){return y.copy(w)},this.setScissor=function(y,W,re,ee){y.isVector4?w.set(y.x,y.y,y.z,y.w):w.set(y,W,re,ee),_.scissor(Ee.copy(w).multiplyScalar(q).round())},this.getScissorTest=function(){return C},this.setScissorTest=function(y){_.setScissorTest(C=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){ye=y},this.getClearColor=function(y){return y.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(y=!0,W=!0,re=!0){let ee=0;if(y){let te=!1;if(oe!==null){const Oe=oe.texture.format;te=m.has(Oe)}if(te){const Oe=oe.texture.type,He=d.has(Oe),Ie=Qe.getClearColor(),Ge=Qe.getClearAlpha(),Xe=Ie.r,tt=Ie.g,ot=Ie.b;He?(M[0]=Xe,M[1]=tt,M[2]=ot,M[3]=Ge,P.clearBufferuiv(P.COLOR,0,M)):(E[0]=Xe,E[1]=tt,E[2]=ot,E[3]=Ge,P.clearBufferiv(P.COLOR,0,E))}else ee|=P.COLOR_BUFFER_BIT}W&&(ee|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&P.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),H=y},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",Et,!1),n.removeEventListener("webglcontextcreationerror",Gn,!1),Qe.dispose(),Te.dispose(),Ae.dispose(),K.dispose(),O.dispose(),ie.dispose(),Fe.dispose(),xe.dispose(),pe.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",ff),Ve.removeEventListener("sessionend",hf),ns.stop()};function Rt(y){y.preventDefault(),Bh("WebGLRenderer: Context Lost."),I=!0}function Et(){Bh("WebGLRenderer: Context Restored."),I=!1;const y=B.autoReset,W=Ye.enabled,re=Ye.autoUpdate,ee=Ye.needsUpdate,te=Ye.type;We(),B.autoReset=y,Ye.enabled=W,Ye.autoUpdate=re,Ye.needsUpdate=ee,Ye.type=te}function Gn(y){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Wn(y){const W=y.target;W.removeEventListener("dispose",Wn),vg(W)}function vg(y){xg(y),K.remove(y)}function xg(y){const W=K.get(y).programs;W!==void 0&&(W.forEach(function(re){pe.releaseProgram(re)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,W,re,ee,te,Oe){W===null&&(W=ge);const He=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ie=Mg(y,W,re,ee,te);_.setMaterial(ee,He);let Ge=re.index,Xe=1;if(ee.wireframe===!0){if(Ge=j.getWireframeAttribute(re),Ge===void 0)return;Xe=2}const tt=re.drawRange,ot=re.attributes.position;let qe=tt.start*Xe,_t=(tt.start+tt.count)*Xe;Oe!==null&&(qe=Math.max(qe,Oe.start*Xe),_t=Math.min(_t,(Oe.start+Oe.count)*Xe)),Ge!==null?(qe=Math.max(qe,0),_t=Math.min(_t,Ge.count)):ot!=null&&(qe=Math.max(qe,0),_t=Math.min(_t,ot.count));const It=_t-qe;if(It<0||It===1/0)return;Fe.setup(te,ee,Ie,re,Ge);let Ct,St=we;if(Ge!==null&&(Ct=le.get(Ge),St=he,St.setIndex(Ct)),te.isMesh)ee.wireframe===!0?(_.setLineWidth(ee.wireframeLinewidth*Re()),St.setMode(P.LINES)):St.setMode(P.TRIANGLES);else if(te.isLine){let $t=ee.linewidth;$t===void 0&&($t=1),_.setLineWidth($t*Re()),te.isLineSegments?St.setMode(P.LINES):te.isLineLoop?St.setMode(P.LINE_LOOP):St.setMode(P.LINE_STRIP)}else te.isPoints?St.setMode(P.POINTS):te.isSprite&&St.setMode(P.TRIANGLES);if(te.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))St.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const $t=te._multiDrawStarts,ze=te._multiDrawCounts,Sn=te._multiDrawCount,ft=Ge?le.get(Ge).bytesPerElement:1,Tn=K.get(ee).currentProgram.getUniforms();for(let Xn=0;Xn<Sn;Xn++)Tn.setValue(P,"_gl_DrawID",Xn),St.render($t[Xn]/ft,ze[Xn])}else if(te.isInstancedMesh)St.renderInstances(qe,It,te.count);else if(re.isInstancedBufferGeometry){const $t=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ze=Math.min(re.instanceCount,$t);St.renderInstances(qe,It,ze)}else St.render(qe,It)};function uf(y,W,re){y.transparent===!0&&y.side===ti&&y.forceSinglePass===!1?(y.side=xn,y.needsUpdate=!0,vo(y,W,re),y.side=ji,y.needsUpdate=!0,vo(y,W,re),y.side=ti):vo(y,W,re)}this.compile=function(y,W,re=null){re===null&&(re=y),T=Ae.get(re),T.init(W),v.push(T),re.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),y!==re&&y.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),T.setupLights();const ee=new Set;return y.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let He=0;He<Oe.length;He++){const Ie=Oe[He];uf(Ie,re,te),ee.add(Ie)}else uf(Oe,re,te),ee.add(Oe)}),T=v.pop(),ee},this.compileAsync=function(y,W,re=null){const ee=this.compile(y,W,re);return new Promise(te=>{function Oe(){if(ee.forEach(function(He){K.get(He).currentProgram.isReady()&&ee.delete(He)}),ee.size===0){te(y);return}setTimeout(Oe,10)}Ce.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let tl=null;function Sg(y){tl&&tl(y)}function ff(){ns.stop()}function hf(){ns.start()}const ns=new lg;ns.setAnimationLoop(Sg),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(y){tl=y,Ve.setAnimationLoop(y),y===null?ns.stop():ns.start()},Ve.addEventListener("sessionstart",ff),Ve.addEventListener("sessionend",hf),this.render=function(y,W){if(W!==void 0&&W.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;H!==null&&H.renderStart(y,W);const re=Ve.enabled===!0&&Ve.isPresenting===!0,ee=A!==null&&(oe===null||re)&&A.begin(N,oe);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,W,oe),T=Ae.get(y,v.length),T.init(W),T.state.textureUnits=L.getTextureUnits(),v.push(T),Q.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F.setFromProjectionMatrix(Q,si,W.reversedDepth),k=this.localClippingEnabled,J=ke.init(this.clippingPlanes,k),R=Te.get(y,D.length),R.init(),D.push(R),Ve.enabled===!0&&Ve.isPresenting===!0){const He=N.xr.getDepthSensingMesh();He!==null&&nl(He,W,-1/0,N.sortObjects)}nl(y,W,0,N.sortObjects),R.finish(),N.sortObjects===!0&&R.sort(ue,ye,W.reversedDepth),ce=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,ce&&Qe.addToRenderList(R,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&ke.beginShadows();const te=T.state.shadowsArray;if(Ye.render(te,y,W),J===!0&&ke.endShadows(),(ee&&A.hasRenderPass())===!1){const He=R.opaque,Ie=R.transmissive;if(T.setupLights(),W.isArrayCamera){const Ge=W.cameras;if(Ie.length>0)for(let Xe=0,tt=Ge.length;Xe<tt;Xe++){const ot=Ge[Xe];pf(He,Ie,y,ot)}ce&&Qe.render(y);for(let Xe=0,tt=Ge.length;Xe<tt;Xe++){const ot=Ge[Xe];df(R,y,ot,ot.viewport)}}else Ie.length>0&&pf(He,Ie,y,W),ce&&Qe.render(y),df(R,y,W)}oe!==null&&G===0&&(L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe)),ee&&A.end(N),y.isScene===!0&&y.onAfterRender(N,y,W),Fe.resetDefaultState(),de=-1,Me=null,v.pop(),v.length>0?(T=v[v.length-1],L.setTextureUnits(T.state.textureUnits),J===!0&&ke.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?R=D[D.length-1]:R=null,H!==null&&H.renderEnd()};function nl(y,W,re,ee){if(y.visible===!1)return;if(y.layers.test(W.layers)){if(y.isGroup)re=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(W);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||F.intersectsSprite(y)){ee&&me.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const He=ie.update(y),Ie=y.material;Ie.visible&&R.push(y,He,Ie,re,me.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||F.intersectsObject(y))){const He=ie.update(y),Ie=y.material;if(ee&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),me.copy(y.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),me.copy(He.boundingSphere.center)),me.applyMatrix4(y.matrixWorld).applyMatrix4(Q)),Array.isArray(Ie)){const Ge=He.groups;for(let Xe=0,tt=Ge.length;Xe<tt;Xe++){const ot=Ge[Xe],qe=Ie[ot.materialIndex];qe&&qe.visible&&R.push(y,He,qe,re,me.z,ot)}}else Ie.visible&&R.push(y,He,Ie,re,me.z,null)}}const Oe=y.children;for(let He=0,Ie=Oe.length;He<Ie;He++)nl(Oe[He],W,re,ee)}function df(y,W,re,ee){const{opaque:te,transmissive:Oe,transparent:He}=y;T.setupLightsView(re),J===!0&&ke.setGlobalState(N.clippingPlanes,re),ee&&_.viewport(_e.copy(ee)),te.length>0&&_o(te,W,re),Oe.length>0&&_o(Oe,W,re),He.length>0&&_o(He,W,re),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function pf(y,W,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ee.id]===void 0){const qe=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ee.id]=new li(1,1,{generateMipmaps:!0,type:qe?Li:En,minFilter:ps,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Oe=T.state.transmissionRenderTarget[ee.id],He=ee.viewport||_e;Oe.setSize(He.z*N.transmissionResolutionScale,He.w*N.transmissionResolutionScale);const Ie=N.getRenderTarget(),Ge=N.getActiveCubeFace(),Xe=N.getActiveMipmapLevel();N.setRenderTarget(Oe),N.getClearColor(it),$e=N.getClearAlpha(),$e<1&&N.setClearColor(16777215,.5),N.clear(),ce&&Qe.render(re);const tt=N.toneMapping;N.toneMapping=ai;const ot=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),T.setupLightsView(ee),J===!0&&ke.setGlobalState(N.clippingPlanes,ee),_o(y,re,ee),L.updateMultisampleRenderTarget(Oe),L.updateRenderTargetMipmap(Oe),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let _t=0,It=W.length;_t<It;_t++){const Ct=W[_t],{object:St,geometry:$t,material:ze,group:Sn}=Ct;if(ze.side===ti&&St.layers.test(ee.layers)){const ft=ze.side;ze.side=xn,ze.needsUpdate=!0,mf(St,re,ee,$t,ze,Sn),ze.side=ft,ze.needsUpdate=!0,qe=!0}}qe===!0&&(L.updateMultisampleRenderTarget(Oe),L.updateRenderTargetMipmap(Oe))}N.setRenderTarget(Ie,Ge,Xe),N.setClearColor(it,$e),ot!==void 0&&(ee.viewport=ot),N.toneMapping=tt}function _o(y,W,re){const ee=W.isScene===!0?W.overrideMaterial:null;for(let te=0,Oe=y.length;te<Oe;te++){const He=y[te],{object:Ie,geometry:Ge,group:Xe}=He;let tt=He.material;tt.allowOverride===!0&&ee!==null&&(tt=ee),Ie.layers.test(re.layers)&&mf(Ie,W,re,Ge,tt,Xe)}}function mf(y,W,re,ee,te,Oe){y.onBeforeRender(N,W,re,ee,te,Oe),y.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),te.onBeforeRender(N,W,re,ee,y,Oe),te.transparent===!0&&te.side===ti&&te.forceSinglePass===!1?(te.side=xn,te.needsUpdate=!0,N.renderBufferDirect(re,W,ee,te,y,Oe),te.side=ji,te.needsUpdate=!0,N.renderBufferDirect(re,W,ee,te,y,Oe),te.side=ti):N.renderBufferDirect(re,W,ee,te,y,Oe),y.onAfterRender(N,W,re,ee,te,Oe)}function vo(y,W,re){W.isScene!==!0&&(W=ge);const ee=K.get(y),te=T.state.lights,Oe=T.state.shadowsArray,He=te.state.version,Ie=pe.getParameters(y,te.state,Oe,W,re,T.state.lightProbeGridArray),Ge=pe.getProgramCacheKey(Ie);let Xe=ee.programs;ee.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?W.environment:null,ee.fog=W.fog;const tt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;ee.envMap=O.get(y.envMap||ee.environment,tt),ee.envMapRotation=ee.environment!==null&&y.envMap===null?W.environmentRotation:y.envMapRotation,Xe===void 0&&(y.addEventListener("dispose",Wn),Xe=new Map,ee.programs=Xe);let ot=Xe.get(Ge);if(ot!==void 0){if(ee.currentProgram===ot&&ee.lightsStateVersion===He)return _f(y,Ie),ot}else Ie.uniforms=pe.getUniforms(y),H!==null&&y.isNodeMaterial&&H.build(y,re,Ie),y.onBeforeCompile(Ie,N),ot=pe.acquireProgram(Ie,Ge),Xe.set(Ge,ot),ee.uniforms=Ie.uniforms;const qe=ee.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(qe.clippingPlanes=ke.uniform),_f(y,Ie),ee.needsLights=bg(y),ee.lightsStateVersion=He,ee.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=T.state.lightProbeGridArray.length>0,ee.currentProgram=ot,ee.uniformsList=null,ot}function gf(y){if(y.uniformsList===null){const W=y.currentProgram.getUniforms();y.uniformsList=ca.seqWithValue(W.seq,y.uniforms)}return y.uniformsList}function _f(y,W){const re=K.get(y);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function yg(y,W){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;x.setFromMatrixPosition(W.matrixWorld);for(let re=0,ee=y.length;re<ee;re++){const te=y[re];if(te.texture!==null&&te.boundingBox.containsPoint(x))return te}return null}function Mg(y,W,re,ee,te){W.isScene!==!0&&(W=ge),L.resetTextureUnits();const Oe=W.fog,He=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?W.environment:null,Ie=oe===null?N.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ct.workingColorSpace,Ge=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Xe=O.get(ee.envMap||He,Ge),tt=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!re.morphAttributes.position,_t=!!re.morphAttributes.normal,It=!!re.morphAttributes.color;let Ct=ai;ee.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ct=N.toneMapping);const St=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,$t=St!==void 0?St.length:0,ze=K.get(ee),Sn=T.state.lights;if(J===!0&&(k===!0||y!==Me)){const bt=y===Me&&ee.id===de;ke.setState(ee,y,bt)}let ft=!1;ee.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Sn.state.version||ze.outputColorSpace!==Ie||te.isBatchedMesh&&ze.batching===!1||!te.isBatchedMesh&&ze.batching===!0||te.isBatchedMesh&&ze.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ze.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ze.instancing===!1||!te.isInstancedMesh&&ze.instancing===!0||te.isSkinnedMesh&&ze.skinning===!1||!te.isSkinnedMesh&&ze.skinning===!0||te.isInstancedMesh&&ze.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ze.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ze.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ze.instancingMorph===!1&&te.morphTexture!==null||ze.envMap!==Xe||ee.fog===!0&&ze.fog!==Oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ke.numPlanes||ze.numIntersection!==ke.numIntersection)||ze.vertexAlphas!==tt||ze.vertexTangents!==ot||ze.morphTargets!==qe||ze.morphNormals!==_t||ze.morphColors!==It||ze.toneMapping!==Ct||ze.morphTargetsCount!==$t||!!ze.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,ze.__version=ee.version);let Tn=ze.currentProgram;ft===!0&&(Tn=vo(ee,W,te),H&&ee.isNodeMaterial&&H.onUpdateProgram(ee,Tn,ze));let Xn=!1,Ui=!1,Rs=!1;const yt=Tn.getUniforms(),Nt=ze.uniforms;if(_.useProgram(Tn.program)&&(Xn=!0,Ui=!0,Rs=!0),ee.id!==de&&(de=ee.id,Ui=!0),ze.needsLights){const bt=yg(T.state.lightProbeGridArray,te);ze.lightProbeGrid!==bt&&(ze.lightProbeGrid=bt,Ui=!0)}if(Xn||Me!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),yt.setValue(P,"projectionMatrix",y.projectionMatrix),yt.setValue(P,"viewMatrix",y.matrixWorldInverse);const Fi=yt.map.cameraPosition;Fi!==void 0&&Fi.setValue(P,ve.setFromMatrixPosition(y.matrixWorld)),b.logarithmicDepthBuffer&&yt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&yt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),Me!==y&&(Me=y,Ui=!0,Rs=!0)}if(ze.needsLights&&(Sn.state.directionalShadowMap.length>0&&yt.setValue(P,"directionalShadowMap",Sn.state.directionalShadowMap,L),Sn.state.spotShadowMap.length>0&&yt.setValue(P,"spotShadowMap",Sn.state.spotShadowMap,L),Sn.state.pointShadowMap.length>0&&yt.setValue(P,"pointShadowMap",Sn.state.pointShadowMap,L)),te.isSkinnedMesh){yt.setOptional(P,te,"bindMatrix"),yt.setOptional(P,te,"bindMatrixInverse");const bt=te.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),yt.setValue(P,"boneTexture",bt.boneTexture,L))}te.isBatchedMesh&&(yt.setOptional(P,te,"batchingTexture"),yt.setValue(P,"batchingTexture",te._matricesTexture,L),yt.setOptional(P,te,"batchingIdTexture"),yt.setValue(P,"batchingIdTexture",te._indirectTexture,L),yt.setOptional(P,te,"batchingColorTexture"),te._colorsTexture!==null&&yt.setValue(P,"batchingColorTexture",te._colorsTexture,L));const Oi=re.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&z.update(te,re,Tn),(Ui||ze.receiveShadow!==te.receiveShadow)&&(ze.receiveShadow=te.receiveShadow,yt.setValue(P,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&W.environment!==null&&(Nt.envMapIntensity.value=W.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=CR()),Ui){if(yt.setValue(P,"toneMappingExposure",N.toneMappingExposure),ze.needsLights&&Eg(Nt,Rs),Oe&&ee.fog===!0&&be.refreshFogUniforms(Nt,Oe),be.refreshMaterialUniforms(Nt,ee,q,U,T.state.transmissionRenderTarget[y.id]),ze.needsLights&&ze.lightProbeGrid){const bt=ze.lightProbeGrid;Nt.probesSH.value=bt.texture,Nt.probesMin.value.copy(bt.boundingBox.min),Nt.probesMax.value.copy(bt.boundingBox.max),Nt.probesResolution.value.copy(bt.resolution)}ca.upload(P,gf(ze),Nt,L)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ca.upload(P,gf(ze),Nt,L),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&yt.setValue(P,"center",te.center),yt.setValue(P,"modelViewMatrix",te.modelViewMatrix),yt.setValue(P,"normalMatrix",te.normalMatrix),yt.setValue(P,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){const bt=ee.uniformsGroups;for(let Fi=0,Cs=bt.length;Fi<Cs;Fi++){const vf=bt[Fi];xe.update(vf,Tn),xe.bind(vf,Tn)}}return Tn}function Eg(y,W){y.ambientLightColor.needsUpdate=W,y.lightProbe.needsUpdate=W,y.directionalLights.needsUpdate=W,y.directionalLightShadows.needsUpdate=W,y.pointLights.needsUpdate=W,y.pointLightShadows.needsUpdate=W,y.spotLights.needsUpdate=W,y.spotLightShadows.needsUpdate=W,y.rectAreaLights.needsUpdate=W,y.hemisphereLights.needsUpdate=W}function bg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(y,W,re){const ee=K.get(y);ee.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),K.get(y.texture).__webglTexture=W,K.get(y.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,W){const re=K.get(y);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(y,W=0,re=0){oe=y,ne=W,G=re;let ee=null,te=!1,Oe=!1;if(y){const Ie=K.get(y);if(Ie.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,Ie.__webglFramebuffer),_e.copy(y.viewport),Ee.copy(y.scissor),Je=y.scissorTest,_.viewport(_e),_.scissor(Ee),_.setScissorTest(Je),de=-1;return}else if(Ie.__webglFramebuffer===void 0)L.setupRenderTarget(y);else if(Ie.__hasExternalTextures)L.rebindTextures(y,K.get(y.texture).__webglTexture,K.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const tt=y.depthTexture;if(Ie.__boundDepthTexture!==tt){if(tt!==null&&K.has(tt)&&(y.width!==tt.image.width||y.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(y)}}const Ge=y.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Oe=!0);const Xe=K.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?ee=Xe[W][re]:ee=Xe[W],te=!0):y.samples>0&&L.useMultisampledRTT(y)===!1?ee=K.get(y).__webglMultisampledFramebuffer:Array.isArray(Xe)?ee=Xe[re]:ee=Xe,_e.copy(y.viewport),Ee.copy(y.scissor),Je=y.scissorTest}else _e.copy(fe).multiplyScalar(q).floor(),Ee.copy(w).multiplyScalar(q).floor(),Je=C;if(re!==0&&(ee=se),_.bindFramebuffer(P.FRAMEBUFFER,ee)&&_.drawBuffers(y,ee),_.viewport(_e),_.scissor(Ee),_.setScissorTest(Je),te){const Ie=K.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ie.__webglTexture,re)}else if(Oe){const Ie=W;for(let Ge=0;Ge<y.textures.length;Ge++){const Xe=K.get(y.textures[Ge]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,re,Ie)}}else if(y!==null&&re!==0){const Ie=K.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ie.__webglTexture,re)}de=-1},this.readRenderTargetPixels=function(y,W,re,ee,te,Oe,He,Ie=0){if(!(y&&y.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&He!==void 0&&(Ge=Ge[He]),Ge){_.bindFramebuffer(P.FRAMEBUFFER,Ge);try{const Xe=y.textures[Ie],tt=Xe.format,ot=Xe.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ie),!b.textureFormatReadable(tt)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(ot)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=y.width-ee&&re>=0&&re<=y.height-te&&P.readPixels(W,re,ee,te,Se.convert(tt),Se.convert(ot),Oe)}finally{const Xe=oe!==null?K.get(oe).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(y,W,re,ee,te,Oe,He,Ie=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&He!==void 0&&(Ge=Ge[He]),Ge)if(W>=0&&W<=y.width-ee&&re>=0&&re<=y.height-te){_.bindFramebuffer(P.FRAMEBUFFER,Ge);const Xe=y.textures[Ie],tt=Xe.format,ot=Xe.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ie),!b.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,Oe.byteLength,P.STREAM_READ),P.readPixels(W,re,ee,te,Se.convert(tt),Se.convert(ot),0);const _t=oe!==null?K.get(oe).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,_t);const It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await WM(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Oe),P.deleteBuffer(qe),P.deleteSync(It),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,W=null,re=0){const ee=Math.pow(2,-re),te=Math.floor(y.image.width*ee),Oe=Math.floor(y.image.height*ee),He=W!==null?W.x:0,Ie=W!==null?W.y:0;L.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,re,0,0,He,Ie,te,Oe),_.unbindTexture()},this.copyTextureToTexture=function(y,W,re=null,ee=null,te=0,Oe=0){let He,Ie,Ge,Xe,tt,ot,qe,_t,It;const Ct=y.isCompressedTexture?y.mipmaps[Oe]:y.image;if(re!==null)He=re.max.x-re.min.x,Ie=re.max.y-re.min.y,Ge=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,tt=re.min.y,ot=re.isBox3?re.min.z:0;else{const Nt=Math.pow(2,-te);He=Math.floor(Ct.width*Nt),Ie=Math.floor(Ct.height*Nt),y.isDataArrayTexture?Ge=Ct.depth:y.isData3DTexture?Ge=Math.floor(Ct.depth*Nt):Ge=1,Xe=0,tt=0,ot=0}ee!==null?(qe=ee.x,_t=ee.y,It=ee.z):(qe=0,_t=0,It=0);const St=Se.convert(W.format),$t=Se.convert(W.type);let ze;W.isData3DTexture?(L.setTexture3D(W,0),ze=P.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),ze=P.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),ze=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);const Sn=_.getParameter(P.UNPACK_ROW_LENGTH),ft=_.getParameter(P.UNPACK_IMAGE_HEIGHT),Tn=_.getParameter(P.UNPACK_SKIP_PIXELS),Xn=_.getParameter(P.UNPACK_SKIP_ROWS),Ui=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,Ct.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ct.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Xe),_.pixelStorei(P.UNPACK_SKIP_ROWS,tt),_.pixelStorei(P.UNPACK_SKIP_IMAGES,ot);const Rs=y.isDataArrayTexture||y.isData3DTexture,yt=W.isDataArrayTexture||W.isData3DTexture;if(y.isDepthTexture){const Nt=K.get(y),Oi=K.get(W),bt=K.get(Nt.__renderTarget),Fi=K.get(Oi.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,bt.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Cs=0;Cs<Ge;Cs++)Rs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,K.get(y).__webglTexture,te,ot+Cs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,K.get(W).__webglTexture,Oe,It+Cs)),P.blitFramebuffer(Xe,tt,He,Ie,qe,_t,He,Ie,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(te!==0||y.isRenderTargetTexture||K.has(y)){const Nt=K.get(y),Oi=K.get(W);_.bindFramebuffer(P.READ_FRAMEBUFFER,ae),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,Y);for(let bt=0;bt<Ge;bt++)Rs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nt.__webglTexture,te,ot+bt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Nt.__webglTexture,te),yt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oi.__webglTexture,Oe,It+bt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Oi.__webglTexture,Oe),te!==0?P.blitFramebuffer(Xe,tt,He,Ie,qe,_t,He,Ie,P.COLOR_BUFFER_BIT,P.NEAREST):yt?P.copyTexSubImage3D(ze,Oe,qe,_t,It+bt,Xe,tt,He,Ie):P.copyTexSubImage2D(ze,Oe,qe,_t,Xe,tt,He,Ie);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else yt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(ze,Oe,qe,_t,It,He,Ie,Ge,St,$t,Ct.data):W.isCompressedArrayTexture?P.compressedTexSubImage3D(ze,Oe,qe,_t,It,He,Ie,Ge,St,Ct.data):P.texSubImage3D(ze,Oe,qe,_t,It,He,Ie,Ge,St,$t,Ct):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Oe,qe,_t,He,Ie,St,$t,Ct.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Oe,qe,_t,Ct.width,Ct.height,St,Ct.data):P.texSubImage2D(P.TEXTURE_2D,Oe,qe,_t,He,Ie,St,$t,Ct);_.pixelStorei(P.UNPACK_ROW_LENGTH,Sn),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Tn),_.pixelStorei(P.UNPACK_SKIP_ROWS,Xn),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Ui),Oe===0&&W.generateMipmaps&&P.generateMipmap(ze),_.unbindTexture()},this.initRenderTarget=function(y){K.get(y).__webglFramebuffer===void 0&&L.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?L.setTextureCube(y,0):y.isData3DTexture?L.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?L.setTexture2DArray(y,0):L.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){ne=0,G=0,oe=null,_.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=ct._getUnpackColorSpace()}}const Od={type:"change"},sf={type:"start"},gg={type:"end"},Ko=new ja,Fd=new Yi,DR=Math.cos(70*YM.DEG2RAD),Ft=new $,mn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nc=1e-6;class LR extends NE{constructor(e,n=null){super(e,n),this.state=xt.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qs.ROTATE,MIDDLE:Qs.DOLLY,RIGHT:Qs.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Qi,this._lastTargetPosition=new $,this._quat=new Qi().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ud,this._sphericalDelta=new ud,this._scale=1,this._panOffset=new $,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new $,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NR.bind(this),this._onPointerDown=IR.bind(this),this._onPointerUp=UR.bind(this),this._onContextMenu=kR.bind(this),this._onMouseWheel=BR.bind(this),this._onKeyDown=zR.bind(this),this._onTouchStart=HR.bind(this),this._onTouchMove=VR.bind(this),this._onMouseDown=OR.bind(this),this._onMouseMove=FR.bind(this),this._interceptControlDown=GR.bind(this),this._interceptControlUp=WR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Od),this.update(),this.state=xt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Ft.copy(n).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new $(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ko.origin.copy(this.object.position),Ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ko.direction))<DR?this.object.lookAt(this.target):(Fd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ko.intersectPlane(Fd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nc||this._lastTargetPosition.distanceToSquared(this.target)>nc?(this.dispatchEvent(Od),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ft.setFromMatrixColumn(n,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,n){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(n,1):(Ft.setFromMatrixColumn(n,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new je,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function IR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function NR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function UR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gg),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function OR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=xt.DOLLY;break;case Qs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=xt.ROTATE}break;case Qs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(sf)}function FR(t){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function BR(t){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(t.preventDefault(),this.dispatchEvent(sf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(gg))}function zR(t){this.enabled!==!1&&this._handleKeyDown(t)}function HR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=xt.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=xt.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(sf)}function VR(t){switch(this._trackPointer(t),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=xt.NONE}}function kR(t){this.enabled!==!1&&t.preventDefault()}function GR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const XR={class:"page-card"},qR={class:"media-controls"},YR={class:"segmented-control"},$R={key:0,class:"stream-start-time"},KR={key:0,value:"",disabled:""},ZR=["value"],JR=["disabled"],jR=["value"],QR={class:"switch-control"},e1={class:"segmented-control"},t1={key:0,class:"placeholder"},n1={key:1,class:"stream-workspace"},i1={class:"stream-main"},s1={key:0,class:"video-viewport"},r1=["src","title"],o1={key:0,class:"detection-layer"},a1={key:1,class:"video-viewport"},l1=["src"],c1={key:0,class:"detection-layer"},u1={class:"video-playback-controls"},f1=["max","value"],h1={key:2,class:"placeholder"},d1={class:"stream-sidebar"},p1={key:0,class:"side-section screw-position-card"},m1={class:"absolute-position"},g1={key:2,class:"telemetry-dashboard"},_1={class:"position-scene-card"},v1={key:0,class:"nearby-screw-alert"},x1={class:"fusion-data-card"},S1={class:"current-position"},y1={class:"sensor-columns"},M1={class:"uwb-range-grid"},E1={class:"imu-readout"},b1=["disabled"],T1={key:3,class:"success"},A1={key:4,class:"alert"},w1={__name:"StreamPage",setup(t){const e=st([]),n=st([]),i=st([]),s=st("history"),r=st(""),o=st(""),a=st("color"),l=st("ekf"),c=st(!0),u=st(0),f=st(0),h=st(!1),p=st(null),g=st(null),S=st(!0),m=st(!1),d=st(""),M=st(""),E=st([]),x=st(null),R=st(null),T=[{id:1,x:0,y:0,z:0},{id:2,x:20,y:0,z:0},{id:3,x:0,y:12,z:0},{id:4,x:20,y:12,z:0},{id:5,x:0,y:0,z:2.5},{id:6,x:20,y:0,z:2.5},{id:7,x:0,y:12,z:2.5},{id:8,x:20,y:12,z:2.5}],D=[{id:"A-1",type:"M4 hex screw",x:1.2,y:1.2,z:1.1},{id:"A-2",type:"M4 hex screw",x:2,y:1.2,z:1.1},{id:"B-1",type:"M6 socket screw",x:18,y:1.2,z:1.1},{id:"B-2",type:"M6 socket screw",x:18.8,y:1.2,z:1.1},{id:"B-3",type:"M6 socket screw",x:1.2,y:10.8,z:1.1},{id:"B-4",type:"M6 socket screw",x:2,y:10.8,z:1.1},{id:"A-3",type:"M4 hex screw",x:18,y:10.8,z:1.1},{id:"A-4",type:"M4 hex screw",x:18.8,y:10.8,z:1.1}];let v,A,N,I,H,se,ae,Y,ne,G,oe,de;const Me=new Map,_e=vt(()=>e.value.filter(L=>!L.endTime).sort((L,O)=>new Date(O.startTime)-new Date(L.startTime))[0]||null),Ee=vt(()=>e.value.filter(L=>{var O;return L._id!==((O=_e.value)==null?void 0:O._id)})),Je=vt(()=>{var L;return(L=_e.value)!=null&&L.startTime?new Date(_e.value.startTime).toLocaleString("zh-TW"):"尚未開始作業"}),it=vt(()=>n.value.filter(L=>L.kind===a.value||L.kind==="combined")),$e=vt(()=>it.value.find(L=>L.filename===o.value)),Z=vt(()=>{const L=i.value.filter(O=>{var le;return O.imageId===((le=$e.value)==null?void 0:le.filename)});return L.length?L:i.value}),U=vt(()=>({_id:"simulated-screw",objectClass:"螺絲",depth:120,bbox:{x:860,y:465,width:200,height:150}})),q=vt(()=>{var le;if(s.value==="live")return i.value.at(-1)||U.value;if(!Z.value.length)return U.value;const L=new Date(Z.value[0].timestamp).getTime()||((le=$e.value)!=null&&le.startedAt?$e.value.startedAt*1e3:null);if(!L)return Z.value[0]||U.value;const O=L+u.value*1e3;return Z.value.reduce((j,ie)=>Math.abs(new Date(ie.timestamp).getTime()-O)<Math.abs(new Date(j.timestamp).getTime()-O)?ie:j)}),ue=vt(()=>["example_object","screw_simulated"].includes(q.value.objectClass)?"螺絲":q.value.objectClass),ye=vt(()=>`http://localhost:8889/${a.value==="depth"?"cam-depth":"cam-color"}`),fe=L=>Number(L??0).toFixed(3),w=L=>new $(Number((L==null?void 0:L.x)||0),Number((L==null?void 0:L.z)||0),Number((L==null?void 0:L.y)||0)),C=L=>w(L),F=(L,O)=>{L.userData.hoverLabel=O},J=L=>{const O=new gs,le=new Wo({color:3900150,roughness:.35,metalness:.35}),j=new jt(new As(.24,.12,.24),le),ie=new jt(new As(.1,.16,.1),le);return ie.position.y=.14,O.add(j,ie),O.position.copy(C(L)),F(O,`基地站 ${L.id}：X ${L.x}、Y ${L.y}、Z ${L.z} m`),O},k=(L=16096779)=>{const O=new gs,le=new Wo({color:L,metalness:.72,roughness:.25}),j=new jt(new io(.045,.045,.25,16),le);j.rotation.z=Math.PI/2;const ie=new jt(new io(.105,.105,.045,16),le);return ie.rotation.z=Math.PI/2,ie.position.x=-.14,O.add(j,ie),O.userData.material=le,O},Q=()=>{var pe;if(!N||!g.value||!se||!ae)return;const L=g.value.telemetry;se.position.copy(w(L.position));const O=Math.PI/180,le=L.orientation;se.rotation.set(le.pitch*O,-le.yaw*O,le.roll*O,"YXZ"),ae.position.copy(w(g.value.absolutePosition)),ae.visible=!L.workspace,F(se,`設備：X ${fe(L.position.x)}、Y ${fe(L.position.y)}、Z ${fe(L.position.z)} m；Roll ${fe(le.roll)}°、Pitch ${fe(le.pitch)}°、Yaw ${fe(le.yaw)}°`),F(ae,`螺絲：X ${fe(g.value.absolutePosition.x)}、Y ${fe(g.value.absolutePosition.y)}、Z ${fe(g.value.absolutePosition.z)} m`);const j=new dn().setFromPoints(E.value.map(w));Y.geometry.dispose(),Y.geometry=j,(((pe=L.workspace)==null?void 0:pe.screws)||D).forEach(be=>{var ke;const Te=Me.get(be.id);if(!Te)return;const Ae=be.type.includes("M4")?2450411:9647082;Te.userData.material.color.setHex(be.visible?16096779:Ae),(ke=Te.userData.material.emissive)==null||ke.setHex(be.visible?7027968:0),F(Te,`${be.type} ${be.id}：X ${fe(be.x)}、Y ${fe(be.y)}、Z ${fe(be.z)} m${be.visible?`；已在攝影機視野內，深度 ${fe(be.depth)} m`:"；未進入攝影機辨識範圍"}`)})},ve=async()=>{if(await Ba(),A||!x.value){Q();return}N=new aE,N.background=new at(16777215),I=new Rn(42,1,.1,100),I.position.set(25,19,26),A=new PR({antialias:!0}),A.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.value.appendChild(A.domElement),H=new LR(I,A.domElement),H.target.set(10,1.1,6),H.enableDamping=!0,H.minDistance=8,H.maxDistance=42,N.add(new AE(16777215,13358561,2));const L=new CE(16777215,2.5);L.position.set(5,7,4),N.add(L);const O=new jt(new go(20,12),new Wo({color:16317180,roughness:.95}));O.rotation.x=-Math.PI/2,O.position.set(10,-.02,6),N.add(O);const le=new IE(20,20,13358561,14870768);le.scale.z=.6,le.position.set(10,0,6),N.add(le),T.forEach(pe=>N.add(J(pe))),se=new gs;const j=new jt(new tf(.12,20,16),new Wo({color:1096065,emissive:289870,emissiveIntensity:.35})),ie=new jt(new ef(.45,1.2,24,1,!0),new Ju({color:3462041,transparent:!0,opacity:.2,side:ti}));ie.rotation.x=-Math.PI/2,ie.position.z=.6,se.add(j,ie),N.add(se),ae=k(),N.add(ae),D.forEach(pe=>{const be=k(pe.type.includes("M4")?2450411:9647082);be.position.copy(w(pe)),F(be,`${pe.type} ${pe.id}：X ${pe.x}、Y ${pe.y}、Z ${pe.z} m`),Me.set(pe.id,be),N.add(be)}),Y=new ng(new dn,new Qu({color:14427686,linewidth:1})),N.add(Y),ne=new LE,G=new je,A.domElement.addEventListener("pointermove",ge),de=new ResizeObserver(me),de.observe(x.value),me(),Q(),ce()},me=()=>{if(!A||!x.value)return;const{clientWidth:L,clientHeight:O}=x.value;!L||!O||(A.setSize(L,O),I.aspect=L/O,I.updateProjectionMatrix())},ge=L=>{if(!A||!R.value)return;const O=A.domElement.getBoundingClientRect();G.set((L.clientX-O.left)/O.width*2-1,-((L.clientY-O.top)/O.height)*2+1),ne.setFromCamera(G,I);const le=ne.intersectObjects(N.children,!0).map(j=>{let ie=j.object;for(;ie&&!ie.userData.hoverLabel;)ie=ie.parent;return ie}).find(Boolean);R.value.style.display=le?"block":"none",le&&(R.value.textContent=le.userData.hoverLabel,R.value.style.left=`${L.clientX-O.left+12}px`,R.value.style.top=`${L.clientY-O.top+12}px`)},ce=()=>{oe=requestAnimationFrame(ce),H.update(),A.render(N,I)},Re=()=>{var L;cancelAnimationFrame(oe),de==null||de.disconnect(),(L=A==null?void 0:A.domElement)==null||L.removeEventListener("pointermove",ge),A==null||A.dispose(),A=null},P=async()=>{var L,O,le;if(n.value=[],i.value=[],o.value="",u.value=0,!!r.value)try{const[j,ie]=await Promise.all([_n.get(`/videos/${r.value}`),_n.get(`/detections/${r.value}`)]);n.value=j.data,i.value=ie.data.sort((pe,be)=>new Date(pe.timestamp)-new Date(be.timestamp)),o.value=((L=it.value[0])==null?void 0:L.filename)||"",await Le()}catch(j){d.value=((le=(O=j.response)==null?void 0:O.data)==null?void 0:le.error)||"無法讀取歷史影片或偵測資料。"}},Le=async()=>{var L,O,le;if(r.value)try{const j=q.value._id!=="simulated-screw"?{detectionId:q.value._id}:{};g.value=(await _n.get(`/positioning/latest/${r.value}`,{params:j})).data;const ie=(L=g.value.telemetry)==null?void 0:L.position;ie&&(!E.value.length||JSON.stringify(E.value.at(-1))!==JSON.stringify(ie))&&(E.value=[...E.value.slice(-39),{...ie}]),await ve(),Q()}catch(j){d.value=((le=(O=j.response)==null?void 0:O.data)==null?void 0:le.error)||"無法讀取定位資料。"}},Ce=async()=>{if(!(!r.value||s.value!=="live"))try{i.value=(await _n.get(`/detections/${r.value}`)).data.sort((L,O)=>new Date(L.timestamp)-new Date(O.timestamp))}catch{}},b=async()=>{var L,O;m.value=!0,M.value="",d.value="";try{await _n.post("/simulation/config",{fusionAlgorithm:l.value}),M.value="融合設定已傳送至後端與 AI。",await Le()}catch(le){d.value=((O=(L=le.response)==null?void 0:L.data)==null?void 0:O.error)||"融合設定傳送失敗。"}finally{m.value=!1}},_=L=>{u.value=L.target.currentTime,f.value=L.target.duration||0},B=async()=>{var L,O;(L=p.value)!=null&&L.paused?await p.value.play():(O=p.value)==null||O.pause()},K=L=>{p.value&&(p.value.currentTime=Number(L.target.value))};return xs(r,()=>{E.value=[],s.value==="history"?P():Le()}),xs(a,()=>{var L;o.value=((L=it.value[0])==null?void 0:L.filename)||"",u.value=0}),xs(s,()=>{var L,O;r.value=s.value==="live"?((L=_e.value)==null?void 0:L._id)||"":((O=Ee.value[0])==null?void 0:O._id)||"",s.value==="live"&&(Ce(),Le())}),gr(async()=>{var L;try{const[O,le]=await Promise.all([_n.get("/operations"),_n.get("/simulation/config")]);e.value=O.data,l.value=le.data.fusionAlgorithm,r.value=((L=Ee.value[0])==null?void 0:L._id)||"",v=window.setInterval(async()=>{await Ce(),await Le()},1e3)}catch{d.value="無法讀取系統資料。"}finally{S.value=!1}}),wu(()=>{window.clearInterval(v),Re()}),(L,O)=>{var le,j,ie,pe,be,Te,Ae,ke,Ye,Qe,z,we,he;return Ue(),Be("section",XR,[O[23]||(O[23]=X("div",{class:"section-title"},[X("p",{class:"eyebrow"},"Media"),X("h2",null,"影像串流與末端定位")],-1)),X("div",qR,[X("div",YR,[X("button",{class:Zn({active:s.value==="history"}),type:"button",onClick:O[0]||(O[0]=Se=>s.value="history")},"歷史影片",2),X("button",{class:Zn({active:s.value==="live"}),type:"button",onClick:O[1]||(O[1]=Se=>s.value="live")},"目前串流",2)]),s.value==="live"?(Ue(),Be("p",$R,"開始時間："+Ne(Je.value),1)):(Ue(),Be(Dt,{key:1},[X("label",null,[O[10]||(O[10]=cn("作業",-1)),bi(X("select",{"onUpdate:modelValue":O[2]||(O[2]=Se=>r.value=Se)},[Ee.value.length?(Ue(),Be("option",KR,"選擇歷史作業")):an("",!0),(Ue(!0),Be(Dt,null,oi(Ee.value,Se=>(Ue(),Be("option",{key:Se._id,value:Se._id},Ne(new Date(Se.startTime).toLocaleString("zh-TW")),9,ZR))),128))],512),[[dl,r.value]])]),X("label",null,[O[11]||(O[11]=cn("影片",-1)),bi(X("select",{"onUpdate:modelValue":O[3]||(O[3]=Se=>o.value=Se),disabled:!it.value.length},[(Ue(!0),Be(Dt,null,oi(it.value,Se=>(Ue(),Be("option",{key:Se.filename,value:Se.filename},Ne(Se.filename),9,jR))),128))],8,JR),[[dl,o.value]])])],64)),X("label",QR,[bi(X("input",{"onUpdate:modelValue":O[4]||(O[4]=Se=>c.value=Se),type:"checkbox"},null,512),[[F0,c.value]]),O[12]||(O[12]=cn(" 顯示螺絲偵測",-1))]),X("div",e1,[X("button",{class:Zn({active:a.value==="color"}),type:"button",onClick:O[5]||(O[5]=Se=>a.value="color")},"光學影像",2),X("button",{class:Zn({active:a.value==="depth"}),type:"button",onClick:O[6]||(O[6]=Se=>a.value="depth")},"深度影像",2)])]),S.value?(Ue(),Be("p",t1,"正在讀取資料…")):(Ue(),Be("div",n1,[X("div",i1,[s.value==="live"?(Ue(),Be("div",s1,[(Ue(),Be("iframe",{key:ye.value,class:"live-stream-frame",src:ye.value,title:a.value==="depth"?"目前深度串流":"目前光學串流",allow:"autoplay; fullscreen"},null,8,r1)),c.value?(Ue(),Be("div",o1,[X("div",{class:Zn(["detection-box",{"label-below":q.value.bbox.y<30}]),style:Xr({left:`${q.value.bbox.x/1920*100}%`,top:`${q.value.bbox.y/1080*100}%`,width:`${q.value.bbox.width/1920*100}%`,height:`${q.value.bbox.height/1080*100}%`})},[X("span",null,Ne(ue.value)+" · "+Ne(q.value.depth),1)],6)])):an("",!0)])):$e.value?(Ue(),Be("div",a1,[(Ue(),Be("video",{key:$e.value.filename,ref_key:"videoPlayer",ref:p,class:Zn(["video-source",{"show-depth":$e.value.kind==="combined"&&a.value==="depth"}]),src:$e.value.url,playsinline:"",onLoadedmetadata:_,onTimeupdate:_,onPlay:O[7]||(O[7]=Se=>h.value=!0),onPause:O[8]||(O[8]=Se=>h.value=!1)},null,42,l1)),c.value?(Ue(),Be("div",c1,[X("div",{class:Zn(["detection-box",{"label-below":q.value.bbox.y<30}]),style:Xr({left:`${q.value.bbox.x/1920*100}%`,top:`${q.value.bbox.y/1080*100}%`,width:`${q.value.bbox.width/1920*100}%`,height:`${q.value.bbox.height/1080*100}%`})},[X("span",null,Ne(ue.value)+" · "+Ne(q.value.depth),1)],6)])):an("",!0),X("div",u1,[X("button",{type:"button",onClick:B},Ne(h.value?"暫停":"播放"),1),X("input",{type:"range",min:"0",max:f.value,step:"0.01",value:u.value,onInput:K},null,40,f1),X("span",null,Ne(Math.floor(u.value))+" / "+Ne(Math.floor(f.value))+" 秒",1)])])):(Ue(),Be("p",h1,"此作業尚未找到歷史影片。"))]),X("aside",d1,[g.value?(Ue(),Be("section",p1,[O[14]||(O[14]=X("h3",null,"螺絲定位",-1)),X("p",null,Ne(ue.value)+"　深度 "+Ne(q.value.depth),1),X("p",null,[cn("模型："+Ne(g.value.detection.detectionAlgorithm),1),O[13]||(O[13]=X("br",null,null,-1)),cn("融合："+Ne(g.value.fusionAlgorithm),1)]),X("p",null,"相機座標："+Ne(fe(g.value.cameraPosition.x))+", "+Ne(fe(g.value.cameraPosition.y))+", "+Ne(fe(g.value.cameraPosition.z))+" m",1),X("p",m1,"融合絕對座標："+Ne(fe(g.value.absolutePosition.x))+", "+Ne(fe(g.value.absolutePosition.y))+", "+Ne(fe(g.value.absolutePosition.z))+" m",1)])):an("",!0)])])),g.value?(Ue(),Be("section",g1,[X("div",_1,[O[15]||(O[15]=X("div",{class:"scene-heading"},[X("div",null,[X("h3",null,"操作空間建模")]),X("span",null,"拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標")],-1)),(le=g.value.workspace)!=null&&le.notification?(Ue(),Be("p",v1,"提示："+Ne(g.value.workspace.notification),1)):an("",!0),X("div",{ref_key:"sceneContainer",ref:x,class:"three-scene"},[X("div",{ref_key:"sceneTooltip",ref:R,class:"three-tooltip"},null,512)],512),O[16]||(O[16]=ka('<div class="scene-legend"><span><i class="legend-anchor"></i>基地站</span><span><i class="legend-device"></i>設備／攝影機光錐</span><span><i class="legend-screw"></i>M4（藍）／M6（紫）；金色為可辨識</span><span><i class="legend-trail"></i>移動軌跡</span></div>',1))]),X("aside",x1,[O[22]||(O[22]=X("h3",null,"UWB + IMU 融合資料",-1)),X("div",S1,[O[17]||(O[17]=X("strong",null,"ES-EKF 輸出設備位置",-1)),X("span",null,"X "+Ne(fe(g.value.telemetry.position.x))+"　Y "+Ne(fe(g.value.telemetry.position.y))+"　Z "+Ne(fe(g.value.telemetry.position.z))+" m",1)]),X("div",y1,[X("div",null,[O[18]||(O[18]=X("h4",null,"UWB：8 個基地站距離（m）",-1)),X("div",M1,[(Ue(!0),Be(Dt,null,oi(g.value.telemetry.uwbRanges||[],Se=>(Ue(),Be("span",{key:Se.stationId},"站 "+Ne(Se.stationId+1)+"："+Ne(fe(Se.distance)),1))),128))])]),X("div",E1,[O[19]||(O[19]=X("h4",null,"IMU 即時量測",-1)),X("p",null,"加速度："+Ne(fe((ie=(j=g.value.telemetry.imu)==null?void 0:j.acceleration)==null?void 0:ie.x))+", "+Ne(fe((be=(pe=g.value.telemetry.imu)==null?void 0:pe.acceleration)==null?void 0:be.y))+", "+Ne(fe((Ae=(Te=g.value.telemetry.imu)==null?void 0:Te.acceleration)==null?void 0:Ae.z))+" m/s²",1),X("p",null,"角速度："+Ne(fe((Ye=(ke=g.value.telemetry.imu)==null?void 0:ke.gyroscope)==null?void 0:Ye.x))+", "+Ne(fe((z=(Qe=g.value.telemetry.imu)==null?void 0:Qe.gyroscope)==null?void 0:z.y))+", "+Ne(fe((he=(we=g.value.telemetry.imu)==null?void 0:we.gyroscope)==null?void 0:he.z))+" °/s",1),X("p",null,"姿態：Roll "+Ne(fe(g.value.telemetry.orientation.roll))+"°、Pitch "+Ne(fe(g.value.telemetry.orientation.pitch))+"°、Yaw "+Ne(fe(g.value.telemetry.orientation.yaw))+"°",1)])]),X("label",null,[O[21]||(O[21]=cn("UWB + IMU 融合演算法",-1)),bi(X("select",{"onUpdate:modelValue":O[9]||(O[9]=Se=>l.value=Se)},[...O[20]||(O[20]=[X("option",{value:"ekf"},"Error-State Extended Kalman Filter (ES-EKF)",-1),X("option",{value:"complementary"},"Complementary Filter",-1),X("option",{value:"weighted_average"},"Weighted Average",-1)])],512),[[dl,l.value]])]),X("button",{type:"button",disabled:m.value,onClick:b},Ne(m.value?"傳送中…":"套用融合設定"),9,b1)])])):an("",!0),M.value?(Ue(),Be("p",T1,Ne(M.value),1)):an("",!0),d.value?(Ue(),Be("p",A1,Ne(d.value),1)):an("",!0)])}}},R1={},C1={class:"page-card"};function P1(t,e){return Ue(),Be("section",C1,[...e[0]||(e[0]=[ka('<div class="section-title"><p class="eyebrow">Media</p><h2>語音提示查詢</h2></div><article class="panel"><h3>提示內容</h3><div class="list-card"><div class="item-row"><span>提示 1</span><strong>請保持安全距離</strong></div><div class="item-row"><span>提示 2</span><strong>區域偵測已完成</strong></div><div class="item-row"><span>提示 3</span><strong>即將開始下一段任務</strong></div></div></article>',2)])])}const D1=ho(R1,[["render",P1]]),L1=[{path:"/",name:"home",component:Sy,meta:{requiresAuth:!0}},{path:"/account/login",name:"account-login",component:Cy},{path:"/account/profile",name:"account-profile",component:Iy,meta:{requiresAuth:!0}},{path:"/account/password",name:"account-password",component:Fy,meta:{requiresAuth:!0}},{path:"/guide",name:"guide",component:Vy},{path:"/technology",name:"technology",component:Xy},{path:"/history/object",name:"history-object",component:Jy,meta:{requiresAuth:!0}},{path:"/history/tasks",name:"history-tasks",component:iM,meta:{requiresAuth:!0}},{path:"/history/operations",name:"history-operations",component:cM,meta:{requiresAuth:!0}},{path:"/media/stream",name:"media-stream",component:w1,meta:{requiresAuth:!0}},{path:"/media/voice",name:"media-voice",component:D1,meta:{requiresAuth:!0}}],_g=Kv({history:Cv(),routes:L1});_g.beforeEach(t=>{if(t.meta.requiresAuth&&!xa.value)return{name:"account-login",query:{redirect:t.fullPath}};if(t.name==="account-login"&&xa.value)return{path:"/"}});G0(cx).use(_g).mount("#app");
