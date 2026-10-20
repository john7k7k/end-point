(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ot={},vr=[],Ei=()=>{},sp=()=>!1,ol=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),al=t=>t.startsWith("onUpdate:"),hn=Object.assign,Vu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vg=Object.prototype.hasOwnProperty,Rt=(t,e)=>Vg.call(t,e),st=Array.isArray,xr=t=>Uo(t)==="[object Map]",Br=t=>Uo(t)==="[object Set]",Of=t=>Uo(t)==="[object Date]",ut=t=>typeof t=="function",Kt=t=>typeof t=="string",Ri=t=>typeof t=="symbol",Pt=t=>t!==null&&typeof t=="object",rp=t=>(Pt(t)||ut(t))&&ut(t.then)&&ut(t.catch),op=Object.prototype.toString,Uo=t=>op.call(t),Hg=t=>Uo(t).slice(8,-1),ap=t=>Uo(t)==="[object Object]",Hu=t=>Kt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ao=zu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ll=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gg=/-\w/g,Ln=ll(t=>t.replace(Gg,e=>e.slice(1).toUpperCase())),Wg=/\B([A-Z])/g,Ss=ll(t=>t.replace(Wg,"-$1").toLowerCase()),cl=ll(t=>t.charAt(0).toUpperCase()+t.slice(1)),Dl=ll(t=>t?`on${cl(t)}`:""),Si=(t,e)=>!Object.is(t,e),Ea=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},lp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},ul=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ff;const fl=()=>Ff||(Ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ws(t){if(st(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Kt(i)?Yg(i):Ws(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Kt(t)||Pt(t))return t}const Xg=/;(?![^(]*\))/g,$g=/:([^]+)/,qg=/\/\*[^]*?\*\//g;function Yg(t){const e={};return t.replace(qg,"").split(Xg).forEach(n=>{if(n){const i=n.split($g);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Cn(t){let e="";if(Kt(t))e=t;else if(st(t))for(let n=0;n<t.length;n++){const i=Cn(t[n]);i&&(e+=i+" ")}else if(Pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Kg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zg=zu(Kg);function cp(t){return!!t||t===""}function jg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=kr(t[i],e[i]);return n}function kr(t,e){if(t===e)return!0;let n=Of(t),i=Of(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Ri(t),i=Ri(e),n||i)return t===e;if(n=st(t),i=st(e),n||i)return n&&i?jg(t,e):!1;if(n=Pt(t),i=Pt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!kr(t[o],e[o]))return!1}}return String(t)===String(e)}function Gu(t,e){return t.findIndex(n=>kr(n,e))}const up=t=>!!(t&&t.__v_isRef===!0),ae=t=>Kt(t)?t:t==null?"":st(t)||Pt(t)&&(t.toString===op||!ut(t.toString))?up(t)?ae(t.value):JSON.stringify(t,fp,2):String(t),fp=(t,e)=>up(e)?fp(t,e.value):xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Ll(i,r)+" =>"]=s,n),{})}:Br(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ll(n))}:Ri(e)?Ll(e):Pt(e)&&!st(e)&&!ap(e)?String(e):e,Ll=(t,e="")=>{var n;return Ri(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let un;class Jg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&un&&(un.active?(this.parent=un,this.index=(un.scopes||(un.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=un;try{return un=this,e()}finally{un=n}}}on(){++this._on===1&&(this.prevScope=un,un=this)}off(){if(this._on>0&&--this._on===0){if(un===this)un=this.prevScope;else{let e=un;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qg(){return un}let kt;const Il=new WeakSet;class dp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,un&&(un.active?un.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Il.has(this)&&(Il.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bf(this),mp(this);const e=kt,n=oi;kt=this,oi=!0;try{return this.fn()}finally{gp(this),kt=e,oi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$u(e);this.deps=this.depsTail=void 0,Bf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Il.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cc(this)&&this.run()}get dirty(){return Cc(this)}}let hp=0,lo,co;function pp(t,e=!1){if(t.flags|=8,e){t.next=co,co=t;return}t.next=lo,lo=t}function Wu(){hp++}function Xu(){if(--hp>0)return;if(co){let e=co;for(co=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;lo;){let e=lo;for(lo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function mp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),$u(i),e_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Cc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_p(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _p(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===vo)||(t.globalVersion=vo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Cc(t))))return;t.flags|=2;const e=t.dep,n=kt,i=oi;kt=t,oi=!0;try{mp(t);const s=t.fn(t._value);(e.version===0||Si(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{kt=n,oi=i,gp(t),t.flags&=-3}}function $u(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)$u(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function e_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let oi=!0;const vp=[];function qi(){vp.push(oi),oi=!1}function Yi(){const t=vp.pop();oi=t===void 0?!0:t}function Bf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=kt;kt=void 0;try{e()}finally{kt=n}}}let vo=0;class t_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!kt||!oi||kt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==kt)n=this.activeLink=new t_(kt,this),kt.deps?(n.prevDep=kt.depsTail,kt.depsTail.nextDep=n,kt.depsTail=n):kt.deps=kt.depsTail=n,xp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=kt.depsTail,n.nextDep=void 0,kt.depsTail.nextDep=n,kt.depsTail=n,kt.deps===n&&(kt.deps=i)}return n}trigger(e){this.version++,vo++,this.notify(e)}notify(e){Wu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xu()}}}function xp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)xp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Pc=new WeakMap,zs=Symbol(""),Dc=Symbol(""),xo=Symbol("");function vn(t,e,n){if(oi&&kt){let i=Pc.get(t);i||Pc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new qu),s.map=i,s.key=n),s.track()}}function zi(t,e,n,i,s,r){const o=Pc.get(t);if(!o){vo++;return}const a=l=>{l&&l.trigger()};if(Wu(),e==="clear")o.forEach(a);else{const l=st(t),c=l&&Hu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===xo||!Ri(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(xo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(zs)),xr(t)&&a(o.get(Dc)));break;case"delete":l||(a(o.get(zs)),xr(t)&&a(o.get(Dc)));break;case"set":xr(t)&&a(o.get(zs));break}}Xu()}function Js(t){const e=At(t);return e===t?e:(vn(e,"iterate",xo),Qn(t)?e:e.map(ci))}function dl(t){return vn(t=At(t),"iterate",xo),t}function vi(t,e){return Ki(t)?wr(Vs(t)?ci(e):e):ci(e)}const n_={__proto__:null,[Symbol.iterator](){return Nl(this,Symbol.iterator,t=>vi(this,t))},concat(...t){return Js(this).concat(...t.map(e=>st(e)?Js(e):e))},entries(){return Nl(this,"entries",t=>(t[1]=vi(this,t[1]),t))},every(t,e){return Di(this,"every",t,e,void 0,arguments)},filter(t,e){return Di(this,"filter",t,e,n=>n.map(i=>vi(this,i)),arguments)},find(t,e){return Di(this,"find",t,e,n=>vi(this,n),arguments)},findIndex(t,e){return Di(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Di(this,"findLast",t,e,n=>vi(this,n),arguments)},findLastIndex(t,e){return Di(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Di(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ul(this,"includes",t)},indexOf(...t){return Ul(this,"indexOf",t)},join(t){return Js(this).join(t)},lastIndexOf(...t){return Ul(this,"lastIndexOf",t)},map(t,e){return Di(this,"map",t,e,void 0,arguments)},pop(){return $r(this,"pop")},push(...t){return $r(this,"push",t)},reduce(t,...e){return kf(this,"reduce",t,e)},reduceRight(t,...e){return kf(this,"reduceRight",t,e)},shift(){return $r(this,"shift")},some(t,e){return Di(this,"some",t,e,void 0,arguments)},splice(...t){return $r(this,"splice",t)},toReversed(){return Js(this).toReversed()},toSorted(t){return Js(this).toSorted(t)},toSpliced(...t){return Js(this).toSpliced(...t)},unshift(...t){return $r(this,"unshift",t)},values(){return Nl(this,"values",t=>vi(this,t))}};function Nl(t,e,n){const i=dl(t),s=i[e]();return i!==t&&!Qn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const i_=Array.prototype;function Di(t,e,n,i,s,r){const o=dl(t),a=o!==t&&!Qn(t),l=o[e];if(l!==i_[e]){const f=l.apply(t,r);return a?ci(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,vi(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function kf(t,e,n,i){const s=dl(t),r=s!==t&&!Qn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=vi(t,c)),n.call(this,c,vi(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?vi(t,l):l}function Ul(t,e,n){const i=At(t);vn(i,"iterate",xo);const s=i[e](...n);return(s===-1||s===!1)&&Zu(n[0])?(n[0]=At(n[0]),i[e](...n)):s}function $r(t,e,n=[]){qi(),Wu();const i=At(t)[e].apply(t,n);return Xu(),Yi(),i}const s_=zu("__proto__,__v_isRef,__isVue"),yp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ri));function r_(t){Ri(t)||(t=String(t));const e=At(this);return vn(e,"has",t),e.hasOwnProperty(t)}class Sp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?m_:Tp:r?Ep:bp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=st(e);if(!s){let l;if(o&&(l=n_[n]))return l;if(n==="hasOwnProperty")return r_}const a=Reflect.get(e,n,Sn(e)?e:i);if((Ri(n)?yp.has(n):s_(n))||(s||vn(e,"get",n),r))return a;if(Sn(a)){const l=o&&Hu(n)?a:a.value;return s&&Pt(l)?Ic(l):l}return Pt(a)?s?Ic(a):Ms(a):a}}class Mp extends Sp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=st(e)&&Hu(n);if(!this._isShallow){const c=Ki(r);if(!Qn(i)&&!Ki(i)&&(r=At(r),i=At(i)),!o&&Sn(r)&&!Sn(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:Rt(e,n),l=Reflect.set(e,n,i,Sn(e)?e:s);return e===At(s)&&l&&(a?Si(i,r)&&zi(e,"set",n,i):zi(e,"add",n,i)),l}deleteProperty(e,n){const i=Rt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&zi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Ri(n)||!yp.has(n))&&vn(e,"has",n),i}ownKeys(e){return vn(e,"iterate",st(e)?"length":zs),Reflect.ownKeys(e)}}class o_ extends Sp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const a_=new Mp,l_=new o_,c_=new Mp(!0);const Lc=t=>t,Yo=t=>Reflect.getPrototypeOf(t);function u_(t,e,n){return function(...i){const s=this.__v_raw,r=At(s),o=xr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Lc:e?wr:ci;return!e&&vn(r,"iterate",l?Dc:zs),hn(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Ko(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function f_(t,e){const n={get(s){const r=this.__v_raw,o=At(r),a=At(s);t||(Si(s,a)&&vn(o,"get",s),vn(o,"get",a));const{has:l}=Yo(o),c=e?Lc:t?wr:ci;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&vn(At(s),"iterate",zs),s.size},has(s){const r=this.__v_raw,o=At(r),a=At(s);return t||(Si(s,a)&&vn(o,"has",s),vn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=At(a),c=e?Lc:t?wr:ci;return!t&&vn(l,"iterate",zs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return hn(n,t?{add:Ko("add"),set:Ko("set"),delete:Ko("delete"),clear:Ko("clear")}:{add(s){const r=At(this),o=Yo(r),a=At(s),l=!e&&!Qn(s)&&!Ki(s)?a:s;return o.has.call(r,l)||Si(s,l)&&o.has.call(r,s)||Si(a,l)&&o.has.call(r,a)||(r.add(l),zi(r,"add",l,l)),this},set(s,r){!e&&!Qn(r)&&!Ki(r)&&(r=At(r));const o=At(this),{has:a,get:l}=Yo(o);let c=a.call(o,s);c||(s=At(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Si(r,u)&&zi(o,"set",s,r):zi(o,"add",s,r),this},delete(s){const r=At(this),{has:o,get:a}=Yo(r);let l=o.call(r,s);l||(s=At(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&zi(r,"delete",s,void 0),c},clear(){const s=At(this),r=s.size!==0,o=s.clear();return r&&zi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=u_(s,t,e)}),n}function Yu(t,e){const n=f_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Rt(n,s)&&s in i?n:i,s,r)}const d_={get:Yu(!1,!1)},h_={get:Yu(!1,!0)},p_={get:Yu(!0,!1)};const bp=new WeakMap,Ep=new WeakMap,Tp=new WeakMap,m_=new WeakMap;function g_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ms(t){return Ki(t)?t:Ku(t,!1,a_,d_,bp)}function wp(t){return Ku(t,!1,c_,h_,Ep)}function Ic(t){return Ku(t,!0,l_,p_,Tp)}function Ku(t,e,n,i,s){if(!Pt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=g_(Hg(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Vs(t){return Ki(t)?Vs(t.__v_raw):!!(t&&t.__v_isReactive)}function Ki(t){return!!(t&&t.__v_isReadonly)}function Qn(t){return!!(t&&t.__v_isShallow)}function Zu(t){return t?!!t.__v_raw:!1}function At(t){const e=t&&t.__v_raw;return e?At(e):t}function __(t){return!Rt(t,"__v_skip")&&Object.isExtensible(t)&&lp(t,"__v_skip",!0),t}const ci=t=>Pt(t)?Ms(t):t,wr=t=>Pt(t)?Ic(t):t;function Sn(t){return t?t.__v_isRef===!0:!1}function Ge(t){return Ap(t,!1)}function v_(t){return Ap(t,!0)}function Ap(t,e){return Sn(t)?t:new x_(t,e)}class x_{constructor(e,n){this.dep=new qu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:At(e),this._value=n?e:ci(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Qn(e)||Ki(e);e=i?e:At(e),Si(e,n)&&(this._rawValue=e,this._value=i?e:ci(e),this.dep.trigger())}}function Fn(t){return Sn(t)?t.value:t}const y_={get:(t,e,n)=>e==="__v_raw"?t:Fn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Sn(s)&&!Sn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Rp(t){return Vs(t)?t:new Proxy(t,y_)}class S_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new qu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&kt!==this)return pp(this,!0),!0}get value(){const e=this.dep.track();return _p(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function M_(t,e,n=!1){let i,s;return ut(t)?i=t:(i=t.get,s=t.set),new S_(i,s,n)}const Zo={},Ba=new WeakMap;let Ls;function b_(t,e=!1,n=Ls){if(n){let i=Ba.get(n);i||Ba.set(n,i=[]),i.push(t)}}function E_(t,e,n=Ot){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=v=>s?v:Qn(v)||s===!1||s===0?Vi(v,1):Vi(v);let u,f,d,h,_=!1,x=!1;if(Sn(t)?(f=()=>t.value,_=Qn(t)):Vs(t)?(f=()=>c(t),_=!0):st(t)?(x=!0,_=t.some(v=>Vs(v)||Qn(v)),f=()=>t.map(v=>{if(Sn(v))return v.value;if(Vs(v))return c(v);if(ut(v))return l?l(v,2):v()})):ut(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){qi();try{d()}finally{Yi()}}const v=Ls;Ls=u;try{return l?l(t,3,[h]):t(h)}finally{Ls=v}}:f=Ei,e&&s){const v=f,R=s===!0?1/0:s;f=()=>Vi(v(),R)}const m=Qg(),p=()=>{u.stop(),m&&m.active&&Vu(m.effects,u)};if(r&&e){const v=e;e=(...R)=>{const A=v(...R);return p(),A}}let S=x?new Array(t.length).fill(Zo):Zo;const E=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const R=u.run();if(v||s||_||(x?R.some((A,L)=>Si(A,S[L])):Si(R,S))){d&&d();const A=Ls;Ls=u;try{const L=[R,S===Zo?void 0:x&&S[0]===Zo?[]:S,h];S=R,l?l(e,3,L):e(...L)}finally{Ls=A}}}else u.run()};return a&&a(E),u=new dp(f),u.scheduler=o?()=>o(E,!1):E,h=v=>b_(v,!1,u),d=u.onStop=()=>{const v=Ba.get(u);if(v){if(l)l(v,4);else for(const R of v)R();Ba.delete(u)}},e?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Vi(t,e=1/0,n){if(e<=0||!Pt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Sn(t))Vi(t.value,e,n);else if(st(t))for(let i=0;i<t.length;i++)Vi(t[i],e,n);else if(Br(t)||xr(t))t.forEach(i=>{Vi(i,e,n)});else if(ap(t)){for(const i in t)Vi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Vi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oo(t,e,n,i){try{return i?t(...i):t()}catch(s){hl(s,e,n)}}function ui(t,e,n,i){if(ut(t)){const s=Oo(t,e,n,i);return s&&rp(s)&&s.catch(r=>{hl(r,e,n)}),s}if(st(t)){const s=[];for(let r=0;r<t.length;r++)s.push(ui(t[r],e,n,i));return s}}function hl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ot;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){qi(),Oo(r,null,10,[t,l,c]),Yi();return}}T_(t,n,s,i,o)}function T_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Pn=[];let _i=-1;const yr=[];let ds=null,pr=0;const Cp=Promise.resolve();let ka=null;function Fo(t){const e=ka||Cp;return t?e.then(this?t.bind(this):t):e}function w_(t){let e=_i+1,n=Pn.length;for(;e<n;){const i=e+n>>>1,s=Pn[i],r=yo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function ju(t){if(!(t.flags&1)){const e=yo(t),n=Pn[Pn.length-1];!n||!(t.flags&2)&&e>=yo(n)?Pn.push(t):Pn.splice(w_(e),0,t),t.flags|=1,Pp()}}function Pp(){ka||(ka=Cp.then(Lp))}function A_(t){st(t)?yr.push(...t):ds&&t.id===-1?ds.splice(pr+1,0,t):t.flags&1||(yr.push(t),t.flags|=1),Pp()}function zf(t,e,n=_i+1){for(;n<Pn.length;n++){const i=Pn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Pn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Dp(t){if(yr.length){const e=[...new Set(yr)].sort((n,i)=>yo(n)-yo(i));if(yr.length=0,ds){ds.push(...e);return}for(ds=e,pr=0;pr<ds.length;pr++){const n=ds[pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ds=null,pr=0}}const yo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Lp(t){try{for(_i=0;_i<Pn.length;_i++){const e=Pn[_i];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Oo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_i<Pn.length;_i++){const e=Pn[_i];e&&(e.flags&=-2)}_i=-1,Pn.length=0,Dp(),ka=null,(Pn.length||yr.length)&&Lp()}}let Xn=null,Ip=null;function za(t){const e=Xn;return Xn=t,Ip=t&&t.type.__scopeId||null,e}function So(t,e=Xn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Ga(-1);const r=za(e),o=Hs.length;let a;try{a=t(...s)}finally{for(let l=Hs.length;l>o;l--)sm();za(r),i._d&&Ga(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function zt(t,e){if(Xn===null)return t;const n=vl(Xn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ot]=e[s];r&&(ut(r)&&(r={mounted:r,updated:r}),r.deep&&Vi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ws(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(qi(),ui(l,n,8,[t.el,a,t,e]),Yi())}}function Ta(t,e){if(xn){let n=xn.provides;const i=xn.parent&&xn.parent.provides;i===n&&(n=xn.provides=Object.create(i)),n[t]=e}}function ai(t,e,n=!1){const i=T0();if(i||Sr){let s=Sr?Sr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ut(e)?e.call(i&&i.proxy):e}}const R_=Symbol.for("v-scx"),C_=()=>ai(R_);function Dn(t,e,n){return Np(t,e,n)}function Np(t,e,n=Ot){const{immediate:i,deep:s,flush:r,once:o}=n,a=hn({},n),l=e&&i||!e&&r!=="post";let c;if(bo){if(r==="sync"){const h=C_();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ei,h.resume=Ei,h.pause=Ei,h}}const u=xn;a.call=(h,_,x)=>ui(h,u,_,x);let f=!1;r==="post"?a.scheduler=h=>{On(h,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(h,_)=>{_?h():ju(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=E_(t,e,a);return bo&&(c?c.push(d):l&&d()),d}function P_(t,e,n){const i=this.proxy,s=Kt(t)?t.includes(".")?Up(i,t):()=>i[t]:t.bind(i,i);let r;ut(e)?r=e:(r=e.handler,n=e);const o=Bo(this),a=Np(s,r.bind(i),n);return o(),a}function Up(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const D_=Symbol("_vte"),L_=t=>t.__isTeleport,Ol=Symbol("_leaveCb");function Ju(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ju(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Op(t,e){return ut(t)?hn({name:t.name},e,{setup:t}):t}function Fp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Va=new WeakMap;function uo(t,e,n,i,s=!1){if(st(t)){t.forEach((x,m)=>uo(x,e&&(st(e)?e[m]:e),n,i,s));return}if(fo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&uo(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?vl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ot?a.refs={}:a.refs,f=a.setupState,d=At(f),h=f===Ot?sp:x=>Vf(u,x)?!1:Rt(d,x),_=(x,m)=>!(m&&Vf(u,m));if(c!=null&&c!==l){if(Hf(e),Kt(c))u[c]=null,h(c)&&(f[c]=null);else if(Sn(c)){const x=e;_(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(ut(l))Oo(l,a,12,[o,u]);else{const x=Kt(l),m=Sn(l);if(x||m){const p=()=>{if(t.f){const S=x?h(l)?f[l]:u[l]:_()||!t.k?l.value:u[t.k];if(s)st(S)&&Vu(S,r);else if(st(S))S.includes(r)||S.push(r);else if(x)u[l]=[r],h(l)&&(f[l]=u[l]);else{const E=[r];_(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else x?(u[l]=o,h(l)&&(f[l]=o)):m&&(_(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const S=()=>{p(),Va.delete(t)};S.id=-1,Va.set(t,S),On(S,n)}else Hf(t),p()}}}function Hf(t){const e=Va.get(t);e&&(e.flags|=8,Va.delete(t))}fl().requestIdleCallback;fl().cancelIdleCallback;const fo=t=>!!t.type.__asyncLoader,Bp=t=>t.type.__isKeepAlive;function I_(t,e){kp(t,"a",e)}function N_(t,e){kp(t,"da",e)}function kp(t,e,n=xn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(pl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Bp(s.parent.vnode)&&U_(i,e,n,s),s=s.parent}}function U_(t,e,n,i){const s=pl(e,t,i,!0);ml(()=>{Vu(i[e],s)},n)}function pl(t,e,n=xn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{qi();const a=Bo(n),l=ui(e,n,t,o);return a(),Yi(),l});return i?s.unshift(r):s.push(r),r}}const es=t=>(e,n=xn)=>{(!bo||t==="sp")&&pl(t,(...i)=>e(...i),n)},O_=es("bm"),ts=es("m"),F_=es("bu"),B_=es("u"),k_=es("bum"),ml=es("um"),z_=es("sp"),V_=es("rtg"),H_=es("rtc");function G_(t,e=xn){pl("ec",t,e)}const W_="components";function zp(t,e){return $_(W_,t,!0,e)||t}const X_=Symbol.for("v-ndc");function $_(t,e,n=!0,i=!1){const s=Xn||xn;if(s){const r=s.type;{const a=P0(r,!1);if(a&&(a===e||a===Ln(e)||a===cl(Ln(e))))return r}const o=Gf(s[t]||r[t],e)||Gf(s.appContext[t],e);return!o&&i?r:o}}function Gf(t,e){return t&&(t[e]||t[Ln(e)]||t[cl(Ln(e))])}function tn(t,e,n,i){let s;const r=n,o=st(t);if(o||Kt(t)){const a=o&&Vs(t);let l=!1,c=!1;a&&(l=!Qn(t),c=Ki(t),t=dl(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?wr(ci(t[u])):ci(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(Pt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const Nc=t=>t?am(t)?vl(t):Nc(t.parent):null,ho=hn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nc(t.parent),$root:t=>Nc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Hp(t),$forceUpdate:t=>t.f||(t.f=()=>{ju(t.update)}),$nextTick:t=>t.n||(t.n=Fo.bind(t.proxy)),$watch:t=>P_.bind(t)}),Fl=(t,e)=>t!==Ot&&!t.__isScriptSetup&&Rt(t,e),q_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Fl(i,e))return o[e]=1,i[e];if(s!==Ot&&Rt(s,e))return o[e]=2,s[e];if(Rt(r,e))return o[e]=3,r[e];if(n!==Ot&&Rt(n,e))return o[e]=4,n[e];Uc&&(o[e]=0)}}const c=ho[e];let u,f;if(c)return e==="$attrs"&&vn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Ot&&Rt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Rt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Fl(s,e)?(s[e]=n,!0):i!==Ot&&Rt(i,e)?(i[e]=n,!0):Rt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Ot&&a[0]!=="$"&&Rt(t,a)||Fl(e,a)||Rt(r,a)||Rt(i,a)||Rt(ho,a)||Rt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Rt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wf(t){return st(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Uc=!0;function Y_(t){const e=Hp(t),n=t.proxy,i=t.ctx;Uc=!1,e.beforeCreate&&Xf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:E,unmounted:v,render:R,renderTracked:A,renderTriggered:L,errorCaptured:y,serverPrefetch:P,expose:B,inheritAttrs:F,components:H,directives:ee,filters:le}=e;if(c&&K_(c,i,null),o)for(const G in o){const re=o[G];ut(re)&&(i[G]=re.bind(n))}if(s){const G=s.call(n,n);Pt(G)&&(t.data=Ms(G))}if(Uc=!0,r)for(const G in r){const re=r[G],be=ut(re)?re.bind(n,n):ut(re.get)?re.get.bind(n,n):Ei,Ce=!ut(re)&&ut(re.set)?re.set.bind(n):Ei,ye=at({get:be,set:Ce});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>ye.value,set:De=>ye.value=De})}if(a)for(const G in a)Vp(a[G],i,n,G);if(l){const G=ut(l)?l.call(n):l;Reflect.ownKeys(G).forEach(re=>{Ta(re,G[re])})}u&&Xf(u,t,"c");function j(G,re){st(re)?re.forEach(be=>G(be.bind(n))):re&&G(re.bind(n))}if(j(O_,f),j(ts,d),j(F_,h),j(B_,_),j(I_,x),j(N_,m),j(G_,y),j(H_,A),j(V_,L),j(k_,S),j(ml,v),j(z_,P),st(B))if(B.length){const G=t.exposed||(t.exposed={});B.forEach(re=>{Object.defineProperty(G,re,{get:()=>n[re],set:be=>n[re]=be,enumerable:!0})})}else t.exposed||(t.exposed={});R&&t.render===Ei&&(t.render=R),F!=null&&(t.inheritAttrs=F),H&&(t.components=H),ee&&(t.directives=ee),P&&Fp(t)}function K_(t,e,n=Ei){st(t)&&(t=Oc(t));for(const i in t){const s=t[i];let r;Pt(s)?"default"in s?r=ai(s.from||i,s.default,!0):r=ai(s.from||i):r=ai(s),Sn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Xf(t,e,n){ui(st(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vp(t,e,n,i){let s=i.includes(".")?Up(n,i):()=>n[i];if(Kt(t)){const r=e[t];ut(r)&&Dn(s,r)}else if(ut(t))Dn(s,t.bind(n));else if(Pt(t))if(st(t))t.forEach(r=>Vp(r,e,n,i));else{const r=ut(t.handler)?t.handler.bind(n):e[t.handler];ut(r)&&Dn(s,r,t)}}function Hp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ha(l,c,o,!0)),Ha(l,e,o)),Pt(e)&&r.set(e,l),l}function Ha(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ha(t,r,n,!0),s&&s.forEach(o=>Ha(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Z_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Z_={data:$f,props:qf,emits:qf,methods:io,computed:io,beforeCreate:Tn,created:Tn,beforeMount:Tn,mounted:Tn,beforeUpdate:Tn,updated:Tn,beforeDestroy:Tn,beforeUnmount:Tn,destroyed:Tn,unmounted:Tn,activated:Tn,deactivated:Tn,errorCaptured:Tn,serverPrefetch:Tn,components:io,directives:io,watch:J_,provide:$f,inject:j_};function $f(t,e){return e?t?function(){return hn(ut(t)?t.call(this,this):t,ut(e)?e.call(this,this):e)}:e:t}function j_(t,e){return io(Oc(t),Oc(e))}function Oc(t){if(st(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tn(t,e){return t?[...new Set([].concat(t,e))]:e}function io(t,e){return t?hn(Object.create(null),t,e):e}function qf(t,e){return t?st(t)&&st(e)?[...new Set([...t,...e])]:hn(Object.create(null),Wf(t),Wf(e??{})):e}function J_(t,e){if(!t)return e;if(!e)return t;const n=hn(Object.create(null),t);for(const i in e)n[i]=Tn(t[i],e[i]);return n}function Gp(){return{app:null,config:{isNativeTag:sp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Q_=0;function e0(t,e){return function(i,s=null){ut(i)||(i=hn({},i)),s!=null&&!Pt(s)&&(s=null);const r=Gp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Q_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:L0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ut(u.install)?(o.add(u),u.install(c,...f)):ut(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||ln(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,vl(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ui(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Sr;Sr=c;try{return u()}finally{Sr=f}}};return c}}let Sr=null;const t0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ln(e)}Modifiers`]||t[`${Ss(e)}Modifiers`];function n0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ot;let s=n;const r=e.startsWith("update:"),o=r&&t0(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Kt(u)?u.trim():u)),o.number&&(s=n.map(ul)));let a,l=i[a=Dl(e)]||i[a=Dl(Ln(e))];!l&&r&&(l=i[a=Dl(Ss(e))]),l&&ui(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ui(c,t,6,s)}}const i0=new WeakMap;function Wp(t,e,n=!1){const i=n?i0:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ut(t)){const l=c=>{const u=Wp(c,e,!0);u&&(a=!0,hn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Pt(t)&&i.set(t,null),null):(st(r)?r.forEach(l=>o[l]=null):hn(o,r),Pt(t)&&i.set(t,o),o)}function gl(t,e){return!t||!ol(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Rt(t,e[0].toLowerCase()+e.slice(1))||Rt(t,Ss(e))||Rt(t,e))}function Yf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:_,inheritAttrs:x}=t,m=za(t);let p,S;try{if(n.shapeFlag&4){const v=s||i,R=v;p=xi(c.call(R,v,u,f,h,d,_)),S=a}else{const v=e;p=xi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),S=e.props?a:s0(a)}}catch(v){Hs.length=0,hl(v,t,1),p=ln(xs)}let E=p;if(S&&x!==!1){const v=Object.keys(S),{shapeFlag:R}=E;v.length&&R&7&&(r&&v.some(al)&&(S=r0(S,r)),E=Ar(E,S,!1,!0))}return n.dirs&&(E=Ar(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Ju(E,n.transition),p=E,za(m),p}const s0=t=>{let e;for(const n in t)(n==="class"||n==="style"||ol(n))&&((e||(e={}))[n]=t[n]);return e},r0=(t,e)=>{const n={};for(const i in t)(!al(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function o0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Kf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Xp(o,i,d)&&!gl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Kf(i,o,c):!0:!!o;return!1}function Kf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Xp(e,t,r)&&!gl(n,r))return!0}return!1}function Xp(t,e,n){const i=t[n],s=e[n];return n==="style"&&Pt(i)&&Pt(s)?!kr(i,s):i!==s}function a0({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const $p={},qp=()=>Object.create($p),Yp=t=>Object.getPrototypeOf(t)===$p;function l0(t,e,n,i=!1){const s={},r=qp();t.propsDefaults=Object.create(null),Kp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:wp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function c0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=At(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(gl(t.emitsOptions,d))continue;const h=e[d];if(l)if(Rt(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const _=Ln(d);s[_]=Fc(l,a,_,h,t,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Kp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!Rt(e,f)&&((u=Ss(f))===f||!Rt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Fc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Rt(e,f))&&(delete r[f],c=!0)}c&&zi(t.attrs,"set","")}function Kp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ao(l))continue;const c=e[l];let u;s&&Rt(s,u=Ln(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:gl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=At(n),c=a||Ot;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Fc(s,l,f,c[f],t,!Rt(c,f))}}return o}function Fc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ut(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Bo(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ss(n))&&(i=!0))}return i}const u0=new WeakMap;function Zp(t,e,n=!1){const i=n?u0:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ut(t)){const u=f=>{l=!0;const[d,h]=Zp(f,e,!0);hn(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Pt(t)&&i.set(t,vr),vr;if(st(r))for(let u=0;u<r.length;u++){const f=Ln(r[u]);Zf(f)&&(o[f]=Ot)}else if(r)for(const u in r){const f=Ln(u);if(Zf(f)){const d=r[u],h=o[f]=st(d)||ut(d)?{type:d}:hn({},d),_=h.type;let x=!1,m=!0;if(st(_))for(let p=0;p<_.length;++p){const S=_[p],E=ut(S)&&S.name;if(E==="Boolean"){x=!0;break}else E==="String"&&(m=!1)}else x=ut(_)&&_.name==="Boolean";h[0]=x,h[1]=m,(x||Rt(h,"default"))&&a.push(f)}}const c=[o,a];return Pt(t)&&i.set(t,c),c}function Zf(t){return t[0]!=="$"&&!ao(t)}const Qu=t=>t==="_"||t==="_ctx"||t==="$stable",ef=t=>st(t)?t.map(xi):[xi(t)],f0=(t,e,n)=>{if(e._n)return e;const i=So((...s)=>ef(e(...s)),n);return i._c=!1,i},jp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Qu(s))continue;const r=t[s];if(ut(r))e[s]=f0(s,r,i);else if(r!=null){const o=ef(r);e[s]=()=>o}}},Jp=(t,e)=>{const n=ef(e);t.slots.default=()=>n},Qp=(t,e,n)=>{for(const i in e)(n||!Qu(i))&&(t[i]=e[i])},d0=(t,e,n)=>{const i=t.slots=qp();if(t.vnode.shapeFlag&32){const s=e._;s?(Qp(i,e,n),n&&lp(i,"_",s,!0)):jp(e,i)}else e&&Jp(t,e)},h0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ot;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Qp(s,e,n):(r=!e.$stable,jp(e,s)),o=e}else e&&(Jp(t,e),o={default:1});if(r)for(const a in s)!Qu(a)&&o[a]==null&&delete s[a]},On=v0;function p0(t){return m0(t)}function m0(t,e){const n=fl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Ei,insertStaticContent:_}=t,x=(C,D,k,Q=null,V=null,te=null,Te=void 0,xe=null,ve=!!D.dynamicChildren)=>{if(C===D)return;C&&!qr(C,D)&&(Q=U(C),De(C,V,te,!0),C=null),D.patchFlag===-2&&(ve=!1,D.dynamicChildren=null);const{type:ue,ref:Fe,shapeFlag:I}=D;switch(ue){case _l:m(C,D,k,Q);break;case xs:p(C,D,k,Q);break;case wa:C==null&&S(D,k,Q,Te);break;case pt:H(C,D,k,Q,V,te,Te,xe,ve);break;default:I&1?R(C,D,k,Q,V,te,Te,xe,ve):I&6?ee(C,D,k,Q,V,te,Te,xe,ve):(I&64||I&128)&&ue.process(C,D,k,Q,V,te,Te,xe,ve,Ae)}Fe!=null&&V?uo(Fe,C&&C.ref,te,D||C,!D):Fe==null&&C&&C.ref!=null&&uo(C.ref,null,te,C,!0)},m=(C,D,k,Q)=>{if(C==null)i(D.el=a(D.children),k,Q);else{const V=D.el=C.el;D.children!==C.children&&c(V,D.children)}},p=(C,D,k,Q)=>{C==null?i(D.el=l(D.children||""),k,Q):D.el=C.el},S=(C,D,k,Q)=>{[C.el,C.anchor]=_(C.children,D,k,Q,C.el,C.anchor)},E=({el:C,anchor:D},k,Q)=>{let V;for(;C&&C!==D;)V=d(C),i(C,k,Q),C=V;i(D,k,Q)},v=({el:C,anchor:D})=>{let k;for(;C&&C!==D;)k=d(C),s(C),C=k;s(D)},R=(C,D,k,Q,V,te,Te,xe,ve)=>{if(D.type==="svg"?Te="svg":D.type==="math"&&(Te="mathml"),C==null)A(D,k,Q,V,te,Te,xe,ve);else{const ue=C.el&&C.el._isVueCE?C.el:null;try{ue&&ue._beginPatch(),P(C,D,V,te,Te,xe,ve)}finally{ue&&ue._endPatch()}}},A=(C,D,k,Q,V,te,Te,xe)=>{let ve,ue;const{props:Fe,shapeFlag:I,transition:Le,dirs:Be}=C;if(ve=C.el=o(C.type,te,Fe&&Fe.is,Fe),I&8?u(ve,C.children):I&16&&y(C.children,ve,null,Q,V,Bl(C,te),Te,xe),Be&&ws(C,null,Q,"created"),L(ve,C,C.scopeId,Te,Q),Fe){for(const g in Fe)g!=="value"&&!ao(g)&&r(ve,g,null,Fe[g],te,Q);"value"in Fe&&r(ve,"value",null,Fe.value,te),(ue=Fe.onVnodeBeforeMount)&&pi(ue,Q,C)}Be&&ws(C,null,Q,"beforeMount");const w=g0(V,Le);w&&Le.beforeEnter(ve),i(ve,D,k),((ue=Fe&&Fe.onVnodeMounted)||w||Be)&&On(()=>{try{ue&&pi(ue,Q,C),w&&Le.enter(ve),Be&&ws(C,null,Q,"mounted")}finally{}},V)},L=(C,D,k,Q,V)=>{if(k&&h(C,k),Q)for(let te=0;te<Q.length;te++)h(C,Q[te]);if(V){let te=V.subTree;if(D===te||im(te.type)&&(te.ssContent===D||te.ssFallback===D)){const Te=V.vnode;L(C,Te,Te.scopeId,Te.slotScopeIds,V.parent)}}},y=(C,D,k,Q,V,te,Te,xe,ve=0)=>{for(let ue=ve;ue<C.length;ue++){const Fe=C[ue]=xe?ki(C[ue]):xi(C[ue]);x(null,Fe,D,k,Q,V,te,Te,xe)}},P=(C,D,k,Q,V,te,Te)=>{const xe=D.el=C.el;let{patchFlag:ve,dynamicChildren:ue,dirs:Fe}=D;ve|=C.patchFlag&16;const I=C.props||Ot,Le=D.props||Ot;let Be;if(k&&As(k,!1),(Be=Le.onVnodeBeforeUpdate)&&pi(Be,k,D,C),Fe&&ws(D,C,k,"beforeUpdate"),k&&As(k,!0),ue&&(!C.dynamicChildren||C.dynamicChildren.length!==ue.length)&&(ve=0,Te=!1,ue=null),(I.innerHTML&&Le.innerHTML==null||I.textContent&&Le.textContent==null)&&u(xe,""),ue?B(C.dynamicChildren,ue,xe,k,Q,Bl(D,V),te):Te||re(C,D,xe,null,k,Q,Bl(D,V),te,!1),ve>0){if(ve&16)F(xe,I,Le,k,V);else if(ve&2&&I.class!==Le.class&&r(xe,"class",null,Le.class,V),ve&4&&r(xe,"style",I.style,Le.style,V),ve&8){const w=D.dynamicProps;for(let g=0;g<w.length;g++){const T=w[g],O=I[T],N=Le[T];(N!==O||T==="value")&&r(xe,T,O,N,V,k)}}ve&1&&C.children!==D.children&&u(xe,D.children)}else!Te&&ue==null&&F(xe,I,Le,k,V);((Be=Le.onVnodeUpdated)||Fe)&&On(()=>{Be&&pi(Be,k,D,C),Fe&&ws(D,C,k,"updated")},Q)},B=(C,D,k,Q,V,te,Te)=>{for(let xe=0;xe<D.length;xe++){const ve=C[xe],ue=D[xe],Fe=ve.el&&(ve.type===pt||!qr(ve,ue)||ve.shapeFlag&198)?f(ve.el):k;x(ve,ue,Fe,null,Q,V,te,Te,!0)}},F=(C,D,k,Q,V)=>{if(D!==k){if(D!==Ot)for(const te in D)!ao(te)&&!(te in k)&&r(C,te,D[te],null,V,Q);for(const te in k){if(ao(te))continue;const Te=k[te],xe=D[te];Te!==xe&&te!=="value"&&r(C,te,xe,Te,V,Q)}"value"in k&&r(C,"value",D.value,k.value,V)}},H=(C,D,k,Q,V,te,Te,xe,ve)=>{const ue=D.el=C?C.el:a(""),Fe=D.anchor=C?C.anchor:a("");let{patchFlag:I,dynamicChildren:Le,slotScopeIds:Be}=D;Be&&(xe=xe?xe.concat(Be):Be),C==null?(i(ue,k,Q),i(Fe,k,Q),y(D.children||[],k,Fe,V,te,Te,xe,ve)):I>0&&I&64&&Le&&C.dynamicChildren&&C.dynamicChildren.length===Le.length?(B(C.dynamicChildren,Le,k,V,te,Te,xe),(D.key!=null||V&&D===V.subTree)&&em(C,D,!0)):re(C,D,k,Fe,V,te,Te,xe,ve)},ee=(C,D,k,Q,V,te,Te,xe,ve)=>{D.slotScopeIds=xe,C==null?D.shapeFlag&512?V.ctx.activate(D,k,Q,Te,ve):le(D,k,Q,V,te,Te,ve):q(C,D,ve)},le=(C,D,k,Q,V,te,Te)=>{const xe=C.component=E0(C,Q,V);if(Bp(C)&&(xe.ctx.renderer=Ae),w0(xe,!1,Te),xe.asyncDep){if(V&&V.registerDep(xe,j,Te),!C.el){const ve=xe.subTree=ln(xs);p(null,ve,D,k),C.placeholder=ve.el}}else j(xe,C,D,k,V,te,Te)},q=(C,D,k)=>{const Q=D.component=C.component;if(o0(C,D,k))if(Q.asyncDep&&!Q.asyncResolved){G(Q,D,k);return}else Q.next=D,Q.update();else D.el=C.el,Q.vnode=D},j=(C,D,k,Q,V,te,Te)=>{const xe=()=>{if(C.isMounted){let{next:I,bu:Le,u:Be,parent:w,vnode:g}=C;{const pe=tm(C);if(pe){I&&(I.el=g.el,G(C,I,Te)),pe.asyncDep.then(()=>{On(()=>{C.isUnmounted||ue()},V)});return}}let T=I,O;As(C,!1),I?(I.el=g.el,G(C,I,Te)):I=g,Le&&Ea(Le),(O=I.props&&I.props.onVnodeBeforeUpdate)&&pi(O,w,I,g),As(C,!0);const N=Yf(C),de=C.subTree;C.subTree=N,x(de,N,f(de.el),U(de),C,V,te),I.el=N.el,T===null&&a0(C,N.el),Be&&On(Be,V),(O=I.props&&I.props.onVnodeUpdated)&&On(()=>pi(O,w,I,g),V)}else{let I;const{el:Le,props:Be}=D,{bm:w,m:g,parent:T,root:O,type:N}=C,de=fo(D);As(C,!1),w&&Ea(w),!de&&(I=Be&&Be.onVnodeBeforeMount)&&pi(I,T,D),As(C,!0);{O.ce&&O.ce._hasShadowRoot()&&O.ce._injectChildStyle(N,C.parent?C.parent.type:void 0);const pe=C.subTree=Yf(C);x(null,pe,k,Q,C,V,te),D.el=pe.el}if(g&&On(g,V),!de&&(I=Be&&Be.onVnodeMounted)){const pe=D;On(()=>pi(I,T,pe),V)}(D.shapeFlag&256||T&&fo(T.vnode)&&T.vnode.shapeFlag&256)&&C.a&&On(C.a,V),C.isMounted=!0,D=k=Q=null}};C.scope.on();const ve=C.effect=new dp(xe);C.scope.off();const ue=C.update=ve.run.bind(ve),Fe=C.job=ve.runIfDirty.bind(ve);Fe.i=C,Fe.id=C.uid,ve.scheduler=()=>ju(Fe),As(C,!0),ue()},G=(C,D,k)=>{D.component=C;const Q=C.vnode.props;C.vnode=D,C.next=null,c0(C,D.props,Q,k),h0(C,D.children,k),qi(),zf(C),Yi()},re=(C,D,k,Q,V,te,Te,xe,ve=!1)=>{const ue=C&&C.children,Fe=C?C.shapeFlag:0,I=D.children,{patchFlag:Le,shapeFlag:Be}=D;if(Le>0){if(Le&128){Ce(ue,I,k,Q,V,te,Te,xe,ve);return}else if(Le&256){be(ue,I,k,Q,V,te,Te,xe,ve);return}}Be&8?(Fe&16&&K(ue,V,te),I!==ue&&u(k,I)):Fe&16?Be&16?Ce(ue,I,k,Q,V,te,Te,xe,ve):K(ue,V,te,!0):(Fe&8&&u(k,""),Be&16&&y(I,k,Q,V,te,Te,xe,ve))},be=(C,D,k,Q,V,te,Te,xe,ve)=>{C=C||vr,D=D||vr;const ue=C.length,Fe=D.length,I=Math.min(ue,Fe);let Le;for(Le=0;Le<I;Le++){const Be=D[Le]=ve?ki(D[Le]):xi(D[Le]);x(C[Le],Be,k,null,V,te,Te,xe,ve)}ue>Fe?K(C,V,te,!0,!1,I):y(D,k,Q,V,te,Te,xe,ve,I)},Ce=(C,D,k,Q,V,te,Te,xe,ve)=>{let ue=0;const Fe=D.length;let I=C.length-1,Le=Fe-1;for(;ue<=I&&ue<=Le;){const Be=C[ue],w=D[ue]=ve?ki(D[ue]):xi(D[ue]);if(qr(Be,w))x(Be,w,k,null,V,te,Te,xe,ve);else break;ue++}for(;ue<=I&&ue<=Le;){const Be=C[I],w=D[Le]=ve?ki(D[Le]):xi(D[Le]);if(qr(Be,w))x(Be,w,k,null,V,te,Te,xe,ve);else break;I--,Le--}if(ue>I){if(ue<=Le){const Be=Le+1,w=Be<Fe?D[Be].el:Q;for(;ue<=Le;)x(null,D[ue]=ve?ki(D[ue]):xi(D[ue]),k,w,V,te,Te,xe,ve),ue++}}else if(ue>Le)for(;ue<=I;)De(C[ue],V,te,!0),ue++;else{const Be=ue,w=ue,g=new Map;for(ue=w;ue<=Le;ue++){const ge=D[ue]=ve?ki(D[ue]):xi(D[ue]);ge.key!=null&&g.set(ge.key,ue)}let T,O=0;const N=Le-w+1;let de=!1,pe=0;const X=new Array(N);for(ue=0;ue<N;ue++)X[ue]=0;for(ue=Be;ue<=I;ue++){const ge=C[ue];if(O>=N){De(ge,V,te,!0);continue}let we;if(ge.key!=null)we=g.get(ge.key);else for(T=w;T<=Le;T++)if(X[T-w]===0&&qr(ge,D[T])){we=T;break}we===void 0?De(ge,V,te,!0):(X[we-w]=ue+1,we>=pe?pe=we:de=!0,x(ge,D[we],k,null,V,te,Te,xe,ve),O++)}const se=de?_0(X):vr;for(T=se.length-1,ue=N-1;ue>=0;ue--){const ge=w+ue,we=D[ge],Ee=D[ge+1],Re=ge+1<Fe?Ee.el||nm(Ee):Q;X[ue]===0?x(null,we,k,Re,V,te,Te,xe,ve):de&&(T<0||ue!==se[T]?ye(we,k,Re,2):T--)}}},ye=(C,D,k,Q,V=null)=>{const{el:te,type:Te,transition:xe,children:ve,shapeFlag:ue}=C;if(ue&6){ye(C.component.subTree,D,k,Q);return}if(ue&128){C.suspense.move(D,k,Q);return}if(ue&64){Te.move(C,D,k,Ae);return}if(Te===pt){i(te,D,k);for(let I=0;I<ve.length;I++)ye(ve[I],D,k,Q);i(C.anchor,D,k);return}if(Te===wa){E(C,D,k);return}if(Q!==2&&ue&1&&xe)if(Q===0)xe.persisted&&!te[Ol]?i(te,D,k):(xe.beforeEnter(te),i(te,D,k),On(()=>xe.enter(te),V));else{const{leave:I,delayLeave:Le,afterLeave:Be}=xe,w=()=>{C.ctx.isUnmounted?s(te):i(te,D,k)},g=()=>{const T=te._isLeaving||!!te[Ol];te._isLeaving&&te[Ol](!0),xe.persisted&&!T?w():I(te,()=>{w(),Be&&Be()})};Le?Le(te,w,g):g()}else i(te,D,k)},De=(C,D,k,Q=!1,V=!1)=>{const{type:te,props:Te,ref:xe,children:ve,dynamicChildren:ue,shapeFlag:Fe,patchFlag:I,dirs:Le,cacheIndex:Be,memo:w}=C;if(I===-2&&(V=!1),xe!=null&&(qi(),uo(xe,null,k,C,!0),Yi()),Be!=null&&(D.renderCache[Be]=void 0),Fe&256){D.ctx.deactivate(C);return}const g=Fe&1&&Le,T=!fo(C);let O;if(T&&(O=Te&&Te.onVnodeBeforeUnmount)&&pi(O,D,C),Fe&6)qe(C.component,k,Q);else{if(Fe&128){C.suspense.unmount(k,Q);return}g&&ws(C,null,D,"beforeUnmount"),Fe&64?C.type.remove(C,D,k,Ae,Q):ue&&!ue.hasOnce&&(te!==pt||I>0&&I&64)?K(ue,D,k,!1,!0):(te===pt&&I&384||!V&&Fe&16)&&K(ve,D,k),Q&&ze(C)}const N=w!=null&&Be==null;(T&&(O=Te&&Te.onVnodeUnmounted)||g||N)&&On(()=>{O&&pi(O,D,C),g&&ws(C,null,D,"unmounted"),N&&(C.el=null)},k)},ze=C=>{const{type:D,el:k,anchor:Q,transition:V}=C;if(D===pt){je(k,Q);return}if(D===wa){v(C);return}const te=()=>{s(k),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(C.shapeFlag&1&&V&&!V.persisted){const{leave:Te,delayLeave:xe}=V,ve=()=>Te(k,te);xe?xe(C.el,te,ve):ve()}else te()},je=(C,D)=>{let k;for(;C!==D;)k=d(C),s(C),C=k;s(D)},qe=(C,D,k)=>{const{bum:Q,scope:V,job:te,subTree:Te,um:xe,m:ve,a:ue}=C;jf(ve),jf(ue),Q&&Ea(Q),V.stop(),te&&(te.flags|=8,De(Te,C,D,k)),xe&&On(xe,D),On(()=>{C.isUnmounted=!0},D)},K=(C,D,k,Q=!1,V=!1,te=0)=>{for(let Te=te;Te<C.length;Te++)De(C[Te],D,k,Q,V)},U=C=>{if(C.shapeFlag&6)return U(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const D=d(C.anchor||C.el),k=D&&D[D_];return k?d(k):D};let Z=!1;const ce=(C,D,k)=>{let Q;C==null?D._vnode&&(De(D._vnode,null,null,!0),Q=D._vnode.component):x(D._vnode||null,C,D,null,null,null,k),D._vnode=C,Z||(Z=!0,zf(Q),Dp(),Z=!1)},Ae={p:x,um:De,m:ye,r:ze,mt:le,mc:y,pc:re,pbc:B,n:U,o:t};return{render:ce,hydrate:void 0,createApp:e0(ce)}}function Bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function As({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function g0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function em(t,e,n=!1){const i=t.children,s=e.children;if(st(i)&&st(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ki(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&em(o,a)),a.type===_l&&(a.patchFlag===-1&&(a=s[r]=ki(a)),a.el=o.el),a.type===xs&&!a.el&&(a.el=o.el)}}function _0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function tm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tm(e)}function jf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function nm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?nm(e.subTree):null}const im=t=>t.__isSuspense;function v0(t,e){e&&e.pendingBranch?st(t)?e.effects.push(...t):e.effects.push(t):A_(t)}const pt=Symbol.for("v-fgt"),_l=Symbol.for("v-txt"),xs=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),Hs=[];let $n=null;function fe(t=!1){Hs.push($n=t?null:[])}function sm(){Hs.pop(),$n=Hs[Hs.length-1]||null}let Mo=1;function Ga(t,e=!1){Mo+=t,t<0&&$n&&e&&($n.hasOnce=!0)}function rm(t){return t.dynamicChildren=Mo>0?$n||vr:null,sm(),Mo>0&&$n&&$n.push(t),t}function he(t,e,n,i,s,r){return rm(b(t,e,n,i,s,r,!0))}function tf(t,e,n,i,s){return rm(ln(t,e,n,i,s,!0))}function Wa(t){return t?t.__v_isVNode===!0:!1}function qr(t,e){return t.type===e.type&&t.key===e.key}const om=({key:t})=>t??null,Aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Kt(t)||Sn(t)||ut(t)?{i:Xn,r:t,k:e,f:!!n}:t:null);function b(t,e=null,n=null,i=0,s=null,r=t===pt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&om(e),ref:e&&Aa(e),scopeId:Ip,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xn};return a?(Xa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Kt(n)?8:16),Mo>0&&!o&&$n&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&$n.push(l),l}const ln=x0;function x0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===X_)&&(t=xs),Wa(t)){const a=Ar(t,e,!0);return n&&Xa(a,n),Mo>0&&!r&&$n&&(a.shapeFlag&6?$n[$n.indexOf(t)]=a:$n.push(a)),a.patchFlag=-2,a}if(D0(t)&&(t=t.__vccOpts),e){e=y0(e);let{class:a,style:l}=e;a&&!Kt(a)&&(e.class=Cn(a)),Pt(l)&&(Zu(l)&&!st(l)&&(l=hn({},l)),e.style=Ws(l))}const o=Kt(t)?1:im(t)?128:L_(t)?64:Pt(t)?4:ut(t)?2:0;return b(t,e,n,i,s,o,r,!0)}function y0(t){return t?Zu(t)||Yp(t)?hn({},t):t:null}function Ar(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?S0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&om(c),ref:e&&e.ref?n&&r?st(r)?r.concat(Aa(e)):[r,Aa(e)]:Aa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ar(t.ssContent),ssFallback:t.ssFallback&&Ar(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ju(u,l.clone(u)),u}function rt(t=" ",e=0){return ln(_l,null,t,e)}function nf(t,e){const n=ln(wa,null,t);return n.staticCount=e,n}function Et(t="",e=!1){return e?(fe(),tf(xs,null,t)):ln(xs,null,t)}function xi(t){return t==null||typeof t=="boolean"?ln(xs):st(t)?ln(pt,null,t.slice()):Wa(t)?ki(t):ln(_l,null,String(t))}function ki(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ar(t)}function Xa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(st(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Xa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Yp(e)?e._ctx=Xn:s===3&&Xn&&(Xn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ut(e)){if(i&65){Xa(t,{default:e});return}e={default:e,_ctx:Xn},n=32}else e=String(e),i&64?(n=16,e=[rt(e)]):n=8;t.children=e,t.shapeFlag|=n}function S0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Cn([e.class,i.class]));else if(s==="style")e.style=Ws([e.style,i.style]);else if(ol(s)){const r=e[s],o=i[s];o&&r!==o&&!(st(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!al(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function pi(t,e,n,i=null){ui(t,e,7,[n,i])}const M0=Gp();let b0=0;function E0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||M0,r={uid:b0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zp(i,s),emitsOptions:Wp(i,s),emit:null,emitted:null,propsDefaults:Ot,inheritAttrs:i.inheritAttrs,ctx:Ot,data:Ot,props:Ot,attrs:Ot,slots:Ot,refs:Ot,setupState:Ot,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=n0.bind(null,r),t.ce&&t.ce(r),r}let xn=null;const T0=()=>xn||Xn;let $a,Bc;{const t=fl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};$a=e("__VUE_INSTANCE_SETTERS__",n=>xn=n),Bc=e("__VUE_SSR_SETTERS__",n=>bo=n)}const Bo=t=>{const e=xn;return $a(t),t.scope.on(),()=>{t.scope.off(),$a(e)}},Jf=()=>{xn&&xn.scope.off(),$a(null)};function am(t){return t.vnode.shapeFlag&4}let bo=!1;function w0(t,e=!1,n=!1){e&&Bc(e);const{props:i,children:s}=t.vnode,r=am(t);l0(t,i,r,e),d0(t,s,n||e);const o=r?A0(t,e):void 0;return e&&Bc(!1),o}function A0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,q_);const{setup:i}=n;if(i){qi();const s=t.setupContext=i.length>1?C0(t):null,r=Bo(t),o=Oo(i,t,0,[t.props,s]),a=rp(o);if(Yi(),r(),(a||t.sp)&&!fo(t)&&Fp(t),a){if(o.then(Jf,Jf),e)return o.then(l=>{Qf(t,l)}).catch(l=>{hl(l,t,0)});t.asyncDep=o}else Qf(t,o)}else lm(t)}function Qf(t,e,n){ut(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pt(e)&&(t.setupState=Rp(e)),lm(t)}function lm(t,e,n){const i=t.type;t.render||(t.render=i.render||Ei);{const s=Bo(t);qi();try{Y_(t)}finally{Yi(),s()}}}const R0={get(t,e){return vn(t,"get",""),t[e]}};function C0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,R0),slots:t.slots,emit:t.emit,expose:e}}function vl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Rp(__(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ho)return ho[n](t)},has(e,n){return n in e||n in ho}})):t.proxy}function P0(t,e=!0){return ut(t)?t.displayName||t.name:t.name||e&&t.__name}function D0(t){return ut(t)&&"__vccOpts"in t}const at=(t,e)=>M_(t,e,bo);function cm(t,e,n){try{Ga(-1);const i=arguments.length;return i===2?Pt(e)&&!st(e)?Wa(e)?ln(t,null,[e]):ln(t,e):ln(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Wa(n)&&(n=[n]),ln(t,e,n))}finally{Ga(1)}}const L0="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kc;const ed=typeof window<"u"&&window.trustedTypes;if(ed)try{kc=ed.createPolicy("vue",{createHTML:t=>t})}catch{}const um=kc?t=>kc.createHTML(t):t=>t,I0="http://www.w3.org/2000/svg",N0="http://www.w3.org/1998/Math/MathML",Bi=typeof document<"u"?document:null,td=Bi&&Bi.createElement("template"),U0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Bi.createElementNS(I0,t):e==="mathml"?Bi.createElementNS(N0,t):n?Bi.createElement(t,{is:n}):Bi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Bi.createTextNode(t),createComment:t=>Bi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{td.innerHTML=um(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=td.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},O0=Symbol("_vtc");function F0(t,e,n){const i=t[O0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nd=Symbol("_vod"),B0=Symbol("_vsh"),k0=Symbol(""),z0=/(?:^|;)\s*display\s*:/;function V0(t,e,n){const i=t.style,s=Kt(n);let r=!1;if(n&&!s){if(e)if(Kt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&so(i,a,"")}else for(const o in e)n[o]==null&&so(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?G0(t,o,!Kt(e)&&e?e[o]:void 0,a)||so(i,o,a):so(i,o,"")}}else if(s){if(e!==n){const o=i[k0];o&&(n+=";"+o),i.cssText=n,r=z0.test(n)}}else e&&t.removeAttribute("style");nd in t&&(t[nd]=r?i.display:"",t[B0]&&(i.display="none"))}const id=/\s*!important$/;function so(t,e,n){if(st(n))n.forEach(i=>so(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=H0(t,e);id.test(n)?t.setProperty(Ss(i),n.replace(id,""),"important"):t[i]=n}}const sd=["Webkit","Moz","ms"],kl={};function H0(t,e){const n=kl[e];if(n)return n;let i=Ln(e);if(i!=="filter"&&i in t)return kl[e]=i;i=cl(i);for(let s=0;s<sd.length;s++){const r=sd[s]+i;if(r in t)return kl[e]=r}return e}function G0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Kt(i)&&n===i}const rd="http://www.w3.org/1999/xlink";function od(t,e,n,i,s,r=Zg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rd,e.slice(6,e.length)):t.setAttributeNS(rd,e,n):n==null||r&&!cp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ri(n)?String(n):n)}function ad(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?um(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=cp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ms(t,e,n,i){t.addEventListener(e,n,i)}function W0(t,e,n,i){t.removeEventListener(e,n,i)}const ld=Symbol("_vei");function X0(t,e,n,i,s=null){const r=t[ld]||(t[ld]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Y0(e);if(i){const c=r[e]=j0(i,s);ms(t,a,c,l)}else o&&(W0(t,a,o,l),r[e]=void 0)}}const $0=/(Once|Passive|Capture)$/,q0=/^on:?(?:Once|Passive|Capture)$/;function Y0(t){let e,n;for(;(n=t.match($0))&&!q0.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Ss(t.slice(2)),e]}let zl=0;const K0=Promise.resolve(),Z0=()=>zl||(K0.then(()=>zl=0),zl=Date.now());function j0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(st(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&ui(c,e,5,a)}}else ui(s,e,5,[i])};return n.value=t,n.attached=Z0(),n}const cd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,J0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?F0(t,i,o):e==="style"?V0(t,n,i):ol(e)?al(e)||X0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Q0(t,e,i,o))?(ad(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&od(t,e,i,o,r,e!=="value")):t._isVueCE&&(ev(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Kt(i)))?ad(t,Ln(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),od(t,e,i,o))};function Q0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&cd(e)&&ut(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cd(e)&&Kt(n)?!1:e in t}function ev(t,e){const n=t._def.props;if(!n)return!1;const i=Ln(e);return Array.isArray(n)?n.some(s=>Ln(s)===i):Object.keys(n).some(s=>Ln(s)===i)}const Rr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return st(e)?n=>Ea(e,n):e};function tv(t){t.target.composing=!0}function ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wi=Symbol("_assign");function fd(t,e,n){return e&&(t=t.trim()),n&&(t=ul(t)),t}const si={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Wi]=Rr(s);const r=i||s.props&&s.props.type==="number";ms(t,e?"change":"input",o=>{o.target.composing||t[Wi](fd(t.value,n,r))}),(n||r)&&ms(t,"change",()=>{t.value=fd(t.value,n,r)}),e||(ms(t,"compositionstart",tv),ms(t,"compositionend",ud),ms(t,"change",ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Wi]=Rr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?ul(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},Is={deep:!0,created(t,e,n){t[Wi]=Rr(n),ms(t,"change",()=>{const i=t._modelValue,s=Eo(t),r=t.checked,o=t[Wi];if(st(i)){const a=Gu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Br(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(fm(t,r))})},mounted:dd,beforeUpdate(t,e,n){t[Wi]=Rr(n),dd(t,e,n)}};function dd(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(st(e))s=Gu(e,i.props.value)>-1;else if(Br(e))s=e.has(i.props.value);else{if(e===n)return;s=kr(e,fm(t,!0))}t.checked!==s&&(t.checked=s)}const gs={deep:!0,created(t,{value:e,modifiers:{number:n}},i){t._modelValue=e,ms(t,"change",()=>{const s=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?ul(Eo(r)):Eo(r));t[Wi](t.multiple?Br(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,Fo(()=>{t._assigning=!1})}),t[Wi]=Rr(i)},mounted(t,{value:e}){hd(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Wi]=Rr(n)},updated(t,{value:e}){t._assigning||hd(t,e)}};function hd(t,e){const n=t.multiple,i=st(e);if(!(n&&!i&&!Br(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Eo(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Gu(e,a)>-1}else o.selected=e.has(a);else if(kr(Eo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Eo(t){return"_value"in t?t._value:t.value}function fm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nv=["ctrl","shift","alt","meta"],iv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>nv.some(n=>t[`${n}Key`]&&!e.includes(n))},sv=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=iv[e[o]];if(a&&a(s,e))return}return t(s,...r)})},rv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pd=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=Ss(s.key);if(e.some(o=>o===r||rv[o]===r))return t(s)})},ov=hn({patchProp:J0},U0);let md;function av(){return md||(md=p0(ov))}const lv=(...t)=>{const e=av().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=uv(i);if(!s)return;const r=e._component;!ut(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,cv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function cv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function uv(t){return Kt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const mr=typeof document<"u";function dm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&dm(t.default)}const wt=Object.assign;function Vl(t,e){const n={};for(const i in e){const s=e[i];n[i]=fi(s)?s.map(t):t(s)}return n}const po=()=>{},fi=Array.isArray;function gd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const hm=/#/g,dv=/&/g,hv=/\//g,pv=/=/g,mv=/\?/g,pm=/\+/g,gv=/%5B/g,_v=/%5D/g,mm=/%5E/g,vv=/%60/g,gm=/%7B/g,xv=/%7C/g,_m=/%7D/g,yv=/%20/g;function sf(t){return t==null?"":encodeURI(""+t).replace(xv,"|").replace(gv,"[").replace(_v,"]")}function Sv(t){return sf(t).replace(gm,"{").replace(_m,"}").replace(mm,"^")}function zc(t){return sf(t).replace(pm,"%2B").replace(yv,"+").replace(hm,"%23").replace(dv,"%26").replace(vv,"`").replace(gm,"{").replace(_m,"}").replace(mm,"^")}function Mv(t){return zc(t).replace(pv,"%3D")}function bv(t){return sf(t).replace(hm,"%23").replace(mv,"%3F")}function Ev(t){return bv(t).replace(hv,"%2F")}function To(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Tv=/\/$/,wv=t=>t.replace(Tv,"");function Hl(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Pv(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:To(o)}}function Av(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _d(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Rv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Cr(e.matched[i],n.matched[s])&&vm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Cr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!Cv(t[n],e[n]))return!1;return!0}function Cv(t,e){return fi(t)?vd(t,e):fi(e)?vd(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function vd(t,e){return fi(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Pv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const rs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Vc=function(t){return t.pop="pop",t.push="push",t}({}),Gl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function Dv(t){if(!t)if(mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wv(t)}const Lv=/^[^#]+#/;function Iv(t,e){return t.replace(Lv,"#")+e}function Nv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const xl=()=>({left:window.scrollX,top:window.scrollY});function Uv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Nv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xd(t,e){return(history.state?history.state.position-e:-1)+t}const Hc=new Map;function Ov(t,e){Hc.set(t,e)}function Fv(t){const e=Hc.get(t);return Hc.delete(t),e}function Bv(t){return typeof t=="string"||t&&typeof t=="object"}function xm(t){return typeof t=="string"||typeof t=="symbol"}let Yt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const ym=Symbol("");Yt.MATCHER_NOT_FOUND+"",Yt.NAVIGATION_GUARD_REDIRECT+"",Yt.NAVIGATION_ABORTED+"",Yt.NAVIGATION_CANCELLED+"",Yt.NAVIGATION_DUPLICATED+"";function Pr(t,e){return wt(new Error,{type:t,[ym]:!0},e)}function Li(t,e){return t instanceof Error&&ym in t&&(e==null||!!(t.type&e))}const kv=["params","query","hash"];function zv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of kv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Vv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(pm," "),r=s.indexOf("="),o=To(r<0?s:s.slice(0,r)),a=r<0?null:To(s.slice(r+1));if(o in e){let l=e[o];fi(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function yd(t){let e="";for(let n in t){const i=t[n];if(n=Mv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(fi(i)?i.map(s=>s&&zc(s)):[i&&zc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Hv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=fi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Gv=Symbol(""),Sd=Symbol(""),yl=Symbol(""),rf=Symbol(""),Gc=Symbol("");function Yr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function hs(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Pr(Yt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):Bv(d)?l(Pr(Yt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Wl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(dm(l)){const c=(l.__vccOpts||l)[e];c&&r.push(hs(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=fv(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&hs(d,n,i,o,a,s)()}))}}return r}function Wv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Cr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Cr(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Xv=()=>location.protocol+"//"+location.host;function Sm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),_d(a,"")}return _d(n,t)+i+s}function $v(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const h=Sm(t,location),_=n.value,x=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===_){o=null;return}m=x?d.position-x.position:0}else i(h);s.forEach(p=>{p(n.value,_,{delta:m,type:Vc.pop,direction:m?m>0?Gl.forward:Gl.back:Gl.unknown})})};function l(){o=n.value}function c(d){s.push(d);const h=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(wt({},d.state,{scroll:xl()}),"")}}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function Md(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?xl():null}}function qv(t){const{history:e,location:n}=window,i={value:Sm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Xv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){r(l,wt({},e.state,Md(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=wt({},s.value,e.state,{forward:l,scroll:xl()});r(u.current,u,!0),r(l,wt({},Md(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Yv(t){t=Dv(t);const e=qv(t),n=$v(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=wt({location:"",base:t,go:i,createHref:Iv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Os=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var en=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(en||{});const Kv={type:Os.Static,value:""},Zv=/[a-zA-Z0-9_]/;function jv(t){if(!t)return[[]];if(t==="/")return[[Kv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=en.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===en.Static?r.push({type:Os.Static,value:c}):n===en.Param||n===en.ParamRegExp||n===en.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Os.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==en.ParamRegExp){i=n,n=en.EscapeNext;continue}switch(n){case en.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=en.Param):d();break;case en.EscapeNext:d(),n=i;break;case en.Param:l==="("?n=en.ParamRegExp:Zv.test(l)?d():(f(),n=en.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case en.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=en.ParamRegExpEnd:u+=l;break;case en.ParamRegExpEnd:f(),n=en.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===en.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const bd="[^/]+?",Jv={sensitive:!1,strict:!1,start:!0,end:!0};var Rn=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Rn||{});const Qv=/[.+*?^${}()[\]/\\]/g;function ex(t,e){const n=wt({},Jv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[Rn.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=Rn.Segment+(n.sensitive?Rn.BonusCaseSensitive:0);if(d.type===Os.Static)f||(s+="/"),s+=d.value.replace(Qv,"\\$&"),h+=Rn.Static;else if(d.type===Os.Param){const{value:_,repeatable:x,optional:m,regexp:p}=d;r.push({name:_,repeatable:x,optional:m});const S=p||bd;if(S!==bd){h+=Rn.BonusCustomRegExp;try{`${S}`}catch(v){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+v.message)}}let E=x?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,h+=Rn.Dynamic,m&&(h+=Rn.BonusOptional),x&&(h+=Rn.BonusRepeatable),S===".*"&&(h+=Rn.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Rn.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",_=r[d-1];f[_.name]=h&&_.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===Os.Static)u+=h.value;else if(h.type===Os.Param){const{value:_,repeatable:x,optional:m}=h,p=_ in c?c[_]:"";if(fi(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=fi(p)?p.join("/"):p;if(!S)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function tx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Rn.Static+Rn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Rn.Static+Rn.Segment?1:-1:0}function Mm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=tx(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Ed(i))return 1;if(Ed(s))return-1}return s.length-i.length}function Ed(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nx={strict:!1,end:!0,sensitive:!1};function ix(t,e,n){const i=ex(jv(t.path),n),s=wt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sx(t,e){const n=[],i=new Map;e=gd(nx,e);function s(f){return i.get(f)}function r(f,d,h){const _=!h,x=wd(f);x.aliasOf=h&&h.record;const m=gd(e,f),p=[x];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of v)p.push(wd(wt({},x,{components:h?h.record.components:x.components,path:R,aliasOf:h?h.record:x})))}let S,E;for(const v of p){const{path:R}=v;if(d&&R[0]!=="/"){const A=d.record.path,L=A[A.length-1]==="/"?"":"/";v.path=d.record.path+(R&&L+R)}if(S=ix(v,d,m),h?h.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),_&&f.name&&!Ad(S)&&o(f.name)),bm(S)&&l(S),x.children){const A=x.children;for(let L=0;L<A.length;L++)r(A[L],S,h&&h.children[L])}h=h||S}return E?()=>{o(E)}:po}function o(f){if(xm(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=ax(f,n);n.splice(d,0,f),f.record.name&&!Ad(f)&&i.set(f.record.name,f)}function c(f,d){let h,_={},x,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Pr(Yt.MATCHER_NOT_FOUND,{location:f});m=h.record.name,_=wt(Td(d.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&Td(f.params,h.keys.map(E=>E.name))),x=h.stringify(_)}else if(f.path!=null)x=f.path,h=n.find(E=>E.re.test(x)),h&&(_=h.parse(x),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!h)throw Pr(Yt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,_=wt({},d.params,f.params),x=h.stringify(_)}const p=[];let S=h;for(;S;)p.unshift(S.record),S=S.parent;return{name:m,path:x,params:_,matched:p,meta:ox(p)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Td(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function wd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:rx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function rx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ox(t){return t.reduce((e,n)=>wt(e,n.meta),{})}function ax(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;Mm(t,e[r])<0?i=r:n=r+1}const s=lx(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function lx(t){let e=t;for(;e=e.parent;)if(bm(e)&&Mm(t,e)===0)return e}function bm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Rd(t){const e=ai(yl),n=ai(rf),i=at(()=>{const l=Fn(t.to);return e.resolve(l)}),s=at(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Cr.bind(null,u));if(d>-1)return d;const h=Cd(l[c-2]);return c>1&&Cd(u)===h&&f[f.length-1].path!==h?f.findIndex(Cr.bind(null,l[c-2])):d}),r=at(()=>s.value>-1&&dx(n.params,i.value.params)),o=at(()=>s.value>-1&&s.value===n.matched.length-1&&vm(n.params,i.value.params));function a(l={}){if(fx(l)){const c=e[Fn(t.replace)?"replace":"push"](Fn(t.to)).catch(po);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:at(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function cx(t){return t.length===1?t[0]:t}const ux=Op({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Rd,setup(t,{slots:e}){const n=Ms(Rd(t)),{options:i}=ai(yl),s=at(()=>({[Pd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Pd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&cx(e.default(n));return t.custom?r:cm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Wc=ux;function fx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dx(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!fi(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Cd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pd=(t,e,n)=>t??e??n,hx=Op({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=ai(Gc),s=at(()=>t.route||i.value),r=ai(Sd,0),o=at(()=>{let c=Fn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=at(()=>s.value.matched[o.value]);Ta(Sd,at(()=>o.value+1)),Ta(Gv,a),Ta(Gc,s);const l=Ge();return Dn(()=>[l.value,a.value,t.name],([c,u,f],[d,h,_])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Cr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Dd(n.default,{Component:d,route:c});const h=f.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=cm(d,wt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Dd(n.default,{Component:m,route:c})||m}}});function Dd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Em=hx;function px(t){const e=sx(t.routes,t),n=t.parseQuery||Vv,i=t.stringifyQuery||yd,s=t.history,r=Yr(),o=Yr(),a=Yr(),l=v_(rs);let c=rs;mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vl.bind(null,U=>""+U),f=Vl.bind(null,Ev),d=Vl.bind(null,To);function h(U,Z){let ce,Ae;return xm(U)?(ce=e.getRecordMatcher(U),Ae=Z):Ae=U,e.addRoute(Ae,ce)}function _(U){const Z=e.getRecordMatcher(U);Z&&e.removeRoute(Z)}function x(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function p(U,Z){if(Z=wt({},Z||l.value),typeof U=="string"){const k=Hl(n,U,Z.path),Q=e.resolve({path:k.path},Z),V=s.createHref(k.fullPath);return wt(k,Q,{params:d(Q.params),hash:To(k.hash),redirectedFrom:void 0,href:V})}let ce;if(U.path!=null)ce=wt({},U,{path:Hl(n,U.path,Z.path).path});else{const k=wt({},U.params);for(const Q in k)k[Q]==null&&delete k[Q];ce=wt({},U,{params:f(k)}),Z.params=f(Z.params)}const Ae=e.resolve(ce,Z),Pe=U.hash||"";Ae.params=u(d(Ae.params));const C=Av(i,wt({},U,{hash:Sv(Pe),path:Ae.path})),D=s.createHref(C);return wt({fullPath:C,hash:Pe,query:i===yd?Hv(U.query):U.query||{}},Ae,{redirectedFrom:void 0,href:D})}function S(U){return typeof U=="string"?Hl(n,U,l.value.path):wt({},U)}function E(U,Z){if(c!==U)return Pr(Yt.NAVIGATION_CANCELLED,{from:Z,to:U})}function v(U){return L(U)}function R(U){return v(wt(S(U),{replace:!0}))}function A(U,Z){const ce=U.matched[U.matched.length-1];if(ce&&ce.redirect){const{redirect:Ae}=ce;let Pe=typeof Ae=="function"?Ae(U,Z):Ae;return typeof Pe=="string"&&(Pe=Pe.includes("?")||Pe.includes("#")?Pe=S(Pe):{path:Pe},Pe.params={}),wt({query:U.query,hash:U.hash,params:Pe.path!=null?{}:U.params},Pe)}}function L(U,Z){const ce=c=p(U),Ae=l.value,Pe=U.state,C=U.force,D=U.replace===!0,k=A(ce,Ae);if(k)return L(wt(S(k),{state:typeof k=="object"?wt({},Pe,k.state):Pe,force:C,replace:D}),Z||ce);const Q=ce;Q.redirectedFrom=Z;let V;return!C&&Rv(i,Ae,ce)&&(V=Pr(Yt.NAVIGATION_DUPLICATED,{to:Q,from:Ae}),ye(Ae,Ae,!0,!1)),(V?Promise.resolve(V):B(Q,Ae)).catch(te=>Li(te)?Li(te,Yt.NAVIGATION_GUARD_REDIRECT)?te:Ce(te):re(te,Q,Ae)).then(te=>{if(te){if(Li(te,Yt.NAVIGATION_GUARD_REDIRECT))return L(wt({replace:D},S(te.to),{state:typeof te.to=="object"?wt({},Pe,te.to.state):Pe,force:C}),Z||Q)}else te=H(Q,Ae,!0,D,Pe);return F(Q,Ae,te),te})}function y(U,Z){const ce=E(U,Z);return ce?Promise.reject(ce):Promise.resolve()}function P(U){const Z=je.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(U):U()}function B(U,Z){let ce;const[Ae,Pe,C]=Wv(U,Z);ce=Wl(Ae.reverse(),"beforeRouteLeave",U,Z);for(const k of Ae)k.leaveGuards.forEach(Q=>{ce.push(hs(Q,U,Z))});const D=y.bind(null,U,Z);return ce.push(D),K(ce).then(()=>{ce=[];for(const k of r.list())ce.push(hs(k,U,Z));return ce.push(D),K(ce)}).then(()=>{ce=Wl(Pe,"beforeRouteUpdate",U,Z);for(const k of Pe)k.updateGuards.forEach(Q=>{ce.push(hs(Q,U,Z))});return ce.push(D),K(ce)}).then(()=>{ce=[];for(const k of C)if(k.beforeEnter)if(fi(k.beforeEnter))for(const Q of k.beforeEnter)ce.push(hs(Q,U,Z));else ce.push(hs(k.beforeEnter,U,Z));return ce.push(D),K(ce)}).then(()=>(U.matched.forEach(k=>k.enterCallbacks={}),ce=Wl(C,"beforeRouteEnter",U,Z,P),ce.push(D),K(ce))).then(()=>{ce=[];for(const k of o.list())ce.push(hs(k,U,Z));return ce.push(D),K(ce)}).catch(k=>Li(k,Yt.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function F(U,Z,ce){a.list().forEach(Ae=>P(()=>Ae(U,Z,ce)))}function H(U,Z,ce,Ae,Pe){const C=E(U,Z);if(C)return C;const D=Z===rs,k=mr?history.state:{};ce&&(Ae||D?s.replace(U.fullPath,wt({scroll:D&&k&&k.scroll},Pe)):s.push(U.fullPath,Pe)),l.value=U,ye(U,Z,ce,D),Ce()}let ee;function le(){ee||(ee=s.listen((U,Z,ce)=>{if(!qe.listening)return;const Ae=p(U),Pe=A(Ae,qe.currentRoute.value);if(Pe){L(wt(Pe,{replace:!0,force:!0}),Ae).catch(po);return}c=Ae;const C=l.value;mr&&Ov(xd(C.fullPath,ce.delta),xl()),B(Ae,C).catch(D=>Li(D,Yt.NAVIGATION_ABORTED|Yt.NAVIGATION_CANCELLED)?D:Li(D,Yt.NAVIGATION_GUARD_REDIRECT)?(L(wt(S(D.to),{force:!0}),Ae).then(k=>{Li(k,Yt.NAVIGATION_ABORTED|Yt.NAVIGATION_DUPLICATED)&&!ce.delta&&ce.type===Vc.pop&&s.go(-1,!1)}).catch(po),Promise.reject()):(ce.delta&&s.go(-ce.delta,!1),re(D,Ae,C))).then(D=>{D=D||H(Ae,C,!1),D&&(ce.delta&&!Li(D,Yt.NAVIGATION_CANCELLED)?s.go(-ce.delta,!1):ce.type===Vc.pop&&Li(D,Yt.NAVIGATION_ABORTED|Yt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),F(Ae,C,D)}).catch(po)}))}let q=Yr(),j=Yr(),G;function re(U,Z,ce){Ce(U);const Ae=j.list();return Ae.length?Ae.forEach(Pe=>Pe(U,Z,ce)):console.error(U),Promise.reject(U)}function be(){return G&&l.value!==rs?Promise.resolve():new Promise((U,Z)=>{q.add([U,Z])})}function Ce(U){return G||(G=!U,le(),q.list().forEach(([Z,ce])=>U?ce(U):Z()),q.reset()),U}function ye(U,Z,ce,Ae){const{scrollBehavior:Pe}=t;if(!mr||!Pe)return Promise.resolve();const C=!ce&&Fv(xd(U.fullPath,0))||(Ae||!ce)&&history.state&&history.state.scroll||null;return Fo().then(()=>Pe(U,Z,C)).then(D=>D&&Uv(D)).catch(D=>re(D,U,Z))}const De=U=>s.go(U);let ze;const je=new Set,qe={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:t,push:v,replace:R,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:be,install(U){U.component("RouterLink",Wc),U.component("RouterView",Em),U.config.globalProperties.$router=qe,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Fn(l)}),mr&&!ze&&l.value===rs&&(ze=!0,v(s.location).catch(Ae=>{}));const Z={};for(const Ae in rs)Object.defineProperty(Z,Ae,{get:()=>l.value[Ae],enumerable:!0});U.provide(yl,qe),U.provide(rf,wp(Z)),U.provide(Gc,l);const ce=U.unmount;je.add(U),U.unmount=function(){je.delete(U),je.size<1&&(c=rs,ee&&ee(),ee=null,l.value=rs,ze=!1,G=!1),ce()}}};function K(U){return U.reduce((Z,ce)=>Z.then(()=>P(ce)),Promise.resolve())}return qe}function of(){return ai(yl)}function Tm(t){return ai(rf)}const af="vision-portal-session",jo=(()=>{try{return JSON.parse(localStorage.getItem(af)||"null")}catch{return null}})(),Dr=Ge(jo&&jo.token&&jo.user?jo:null),qa=at(()=>{var t;return!!((t=Dr.value)!=null&&t.token)}),mo=at(()=>{var t;return((t=Dr.value)==null?void 0:t.user)||null}),wm=t=>{Dr.value=t,localStorage.setItem(af,JSON.stringify(t))},mx=t=>{Dr.value&&wm({...Dr.value,user:t})},gx=()=>{Dr.value=null,localStorage.removeItem(af)},_x={class:"sidebar"},vx={class:"brand"},xx={key:0,class:"brand-account-actions"},yx={class:"account-hover-card"},Sx={key:1,class:"brand-account-actions"},Mx={class:"nav-group-title"},bx={class:"main-panel"},Ex={class:"topbar"},Tx={class:"topbar-actions"},wx={__name:"App",setup(t){const e=Tm(),n=of(),i=Ge(localStorage.getItem("vision-portal-theme")==="light"),s=[{title:"平台總覽",requiresAuth:!0,items:[{label:"首頁",to:"/",icon:"◉"}]},{title:"系統介紹",items:[{label:"操作指引",to:"/guide",icon:"◌"},{label:"定位技術",to:"/technology",icon:"◌"}]},{title:"歷史資料",requiresAuth:!0,items:[{label:"物件資料",to:"/history/object",icon:"◌"},{label:"施工任務",to:"/history/tasks",icon:"◌"},{label:"操作紀錄",to:"/history/operations",icon:"◌"}]},{title:"媒體資料",requiresAuth:!0,items:[{label:"影像串流",to:"/media/stream",icon:"◌"},{label:"語音提示",to:"/media/voice",icon:"◌"}]},{title:"系統設定",requiresAuth:!0,items:[{label:"相機外參設定",to:"/settings/camera-extrinsics"}]}],r=at(()=>s.filter(c=>!c.requiresAuth||qa.value)),o=at(()=>{const c=s.flatMap(u=>u.items).find(u=>u.to===e.path);return(c==null?void 0:c.label)||"首頁"}),a=(c="login")=>n.push({path:"/account/login",query:{mode:c}}),l=()=>{i.value=!i.value,localStorage.setItem("vision-portal-theme",i.value?"light":"dark")};return(c,u)=>{var f,d;return fe(),he("div",{class:Cn(["app-shell",{"theme-light":i.value}])},[b("aside",_x,[b("div",vx,[u[2]||(u[2]=b("div",{class:"brand-mark"},"V",-1)),u[3]||(u[3]=b("div",{class:"brand-content"},[b("p",{class:"brand-eyebrow"},"端點定位平台"),b("div",{class:"brand-title-row"},[b("h2",null,"Vision Portal")])],-1)),Fn(qa)?(fe(),he("div",xx,[ln(Fn(Wc),{class:"user-avatar",to:"/account/profile"},{default:So(()=>{var h,_;return[rt(ae((_=(h=Fn(mo))==null?void 0:h.name)==null?void 0:_.charAt(0).toUpperCase()),1)]}),_:1}),b("div",yx,[b("strong",null,ae((f=Fn(mo))==null?void 0:f.name),1),b("span",null,ae((d=Fn(mo))==null?void 0:d.email),1),u[1]||(u[1]=b("small",null,"點擊頭貼查看帳戶資料",-1))])])):(fe(),he("div",Sx,[b("button",{type:"button",class:"brand-login",onClick:u[0]||(u[0]=h=>a("login"))},"登入")]))]),(fe(!0),he(pt,null,tn(r.value,h=>(fe(),he("nav",{class:"nav-section",key:h.title},[b("p",Mx,ae(h.title),1),(fe(!0),he(pt,null,tn(h.items,_=>(fe(),tf(Fn(Wc),{key:_.to,class:Cn(["nav-link",{active:Fn(e).path===_.to}]),to:_.to,"exact-active-class":"active"},{default:So(()=>[u[4]||(u[4]=b("span",{class:"icon","aria-hidden":"true"},null,-1)),b("span",null,ae(_.label),1)]),_:2},1032,["class","to"]))),128))]))),128))]),b("main",bx,[b("header",Ex,[b("h1",null,ae(o.value),1),b("div",Tx,[b("button",{type:"button",class:"theme-toggle",onClick:l},ae(i.value?"◐ 夜間":"☀ 白天"),1),u[5]||(u[5]=b("div",{class:"topbar-badge"},"已連線",-1))])]),ln(Fn(Em))])],2)}}};function Am(t,e){return function(){return t.apply(e,arguments)}}const{toString:Ax}=Object.prototype,{getPrototypeOf:Lr}=Object,{iterator:ko,toStringTag:Rm}=Symbol,Ya=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),wo=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),Ya(n,e))return!0;n=Lr(n)}return!1},Rx=(t,e)=>t!=null&&wo(t,e)?t[e]:void 0,lf=(t=>e=>{const n=Ax.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),di=t=>(t=t.toLowerCase(),e=>lf(e)===t),Sl=t=>e=>typeof e===t,{isArray:Xs}=Array,Ir=Sl("undefined");function zr(t){return t!==null&&!Ir(t)&&t.constructor!==null&&!Ir(t.constructor)&&Bn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Cm=di("ArrayBuffer");function Cx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Cm(t.buffer),e}const Px=Sl("string"),Bn=Sl("function"),Pm=Sl("number"),Vr=t=>t!==null&&typeof t=="object",Dx=t=>t===!0||t===!1,Ra=t=>{if(!Vr(t))return!1;const e=Lr(t);return(e===null||e===Object.prototype||Lr(e)===null)&&!wo(t,Rm)&&!wo(t,ko)},Lx=t=>{if(!Vr(t)||zr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Ix=di("Date"),Nx=di("File"),Ux=t=>!!(t&&typeof t.uri<"u"),Ox=t=>t&&typeof t.getParts<"u",Fx=di("Blob"),Bx=di("FileList"),kx=t=>Vr(t)&&Bn(t.pipe);function zx(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Ld=zx(),Id=typeof Ld.FormData<"u"?Ld.FormData:void 0,Vx=t=>{if(!t)return!1;if(Id&&t instanceof Id)return!0;const e=Lr(t);if(!e||e===Object.prototype||!Bn(t.append))return!1;const n=lf(t);return n==="formdata"||n==="object"&&Bn(t.toString)&&t.toString()==="[object FormData]"},Hx=di("URLSearchParams"),[Gx,Wx,Xx,$x]=["ReadableStream","Request","Response","Headers"].map(di),qx=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Xs(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(zr(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Dm(t,e){if(zr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Fs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Lm=t=>!Ir(t)&&t!==Fs;function Xc(...t){const{caseless:e,skipUndefined:n}=Lm(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&Dm(i,o)||o,l=Ya(i,a)?i[a]:void 0;Ra(l)&&Ra(r)?i[a]=Xc(l,r):Ra(r)?i[a]=Xc({},r):Xs(r)?i[a]=r.slice():(!n||!Ir(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++){const a=t[r];if(!a||zr(a)||(zo(a,s),typeof a!="object"||Xs(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];ry.call(a,u)&&s(a[u],u)}}return i}const Yx=(t,e,n,{allOwnKeys:i}={})=>(zo(e,(s,r)=>{n&&Bn(s)?Object.defineProperty(t,r,{__proto__:null,value:Am(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),Kx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Zx=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},jx=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Lr(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Jx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Qx=t=>{if(!t)return null;if(Xs(t))return t;let e=t.length;if(!Pm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},ey=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Lr(Uint8Array)),ty=(t,e)=>{const i=(t&&t[ko]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},ny=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},iy=di("HTMLFormElement"),sy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:ry}=Object.prototype,oy=di("RegExp"),Im=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};zo(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},ay=t=>{Im(t,(e,n)=>{if(Bn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(Bn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ly=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Xs(t)?i(t):i(String(t).split(e)),n},cy=()=>{},uy=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function fy(t){return!!(t&&Bn(t.append)&&t[Rm]==="FormData"&&t[ko])}const dy=t=>{const e=new WeakSet,n=i=>{if(Vr(i)){if(e.has(i))return;if(zr(i))return i;if(!("toJSON"in i)){e.add(i);const s=Xs(i)?[]:{};return zo(i,(r,o)=>{const a=n(r);!Ir(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},hy=di("AsyncFunction"),py=t=>t&&(Vr(t)||Bn(t))&&Bn(t.then)&&Bn(t.catch),Nm=((t,e)=>t?setImmediate:e?((n,i)=>(Fs.addEventListener("message",({source:s,data:r})=>{s===Fs&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Fs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Bn(Fs.postMessage)),my=typeof queueMicrotask<"u"?queueMicrotask.bind(Fs):typeof process<"u"&&process.nextTick||Nm,Um=t=>t!=null&&Bn(t[ko]),gy=t=>t!=null&&wo(t,ko)&&Um(t),W={isArray:Xs,isArrayBuffer:Cm,isBuffer:zr,isFormData:Vx,isArrayBufferView:Cx,isString:Px,isNumber:Pm,isBoolean:Dx,isObject:Vr,isPlainObject:Ra,isEmptyObject:Lx,isReadableStream:Gx,isRequest:Wx,isResponse:Xx,isHeaders:$x,isUndefined:Ir,isDate:Ix,isFile:Nx,isReactNativeBlob:Ux,isReactNative:Ox,isBlob:Fx,isRegExp:oy,isFunction:Bn,isStream:kx,isURLSearchParams:Hx,isTypedArray:ey,isFileList:Bx,forEach:zo,merge:Xc,extend:Yx,trim:qx,stripBOM:Kx,inherits:Zx,toFlatObject:jx,kindOf:lf,kindOfTest:di,endsWith:Jx,toArray:Qx,forEachEntry:ty,matchAll:ny,isHTMLForm:iy,hasOwnProperty:Ya,hasOwnProp:Ya,hasOwnInPrototypeChain:wo,getSafeProp:Rx,reduceDescriptors:Im,freezeMethods:ay,toObjectSet:ly,toCamelCase:sy,noop:cy,toFiniteNumber:uy,findKey:Dm,global:Fs,isContextDefined:Lm,isSpecCompliantForm:fy,toJSONObject:dy,isAsyncFn:hy,isThenable:py,setImmediate:Nm,asap:my,isIterable:Um,isSafeIterable:gy},_y=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vy=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&_y[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function xy(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const yy=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Sy=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function cf(t,e){return W.isArray(t)?t.map(n=>cf(n,e)):xy(String(t).replace(e,""))}const My=t=>cf(t,yy),by=t=>cf(t,Sy);function Om(t){const e=Object.create(null);return W.forEach(t.toJSON(),(n,i)=>{e[i]=by(n)}),e}const Nd=Symbol("internals");function Kr(t){return t&&String(t).trim().toLowerCase()}function Ca(t){return t===!1||t==null?t:W.isArray(t)?t.map(Ca):My(String(t))}function Ey(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Ty=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Xl(t,e,n,i,s){if(W.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!W.isString(e)){if(W.isString(i))return e.indexOf(i)!==-1;if(W.isRegExp(i))return i.test(e)}}function wy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function Ay(t,e){const n=W.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let Mn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=Kr(l);if(!u)return;const f=W.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=Ca(a))}const o=(a,l)=>W.forEach(a,(c,u)=>r(c,u,l));if(W.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(W.isString(e)&&(e=e.trim())&&!Ty(e))o(vy(e),n);else if(W.isObject(e)&&W.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!W.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],W.hasOwnProp(a,c)?(l=a[c],a[c]=W.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Kr(e),e){const i=W.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return Ey(s);if(W.isFunction(n))return n.call(this,s,i);if(W.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Kr(e),e){const i=W.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Xl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Kr(o),o){const a=W.findKey(i,o);a&&(!n||Xl(i,i[a],a,n))&&(delete i[a],s=!0)}}return W.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||Xl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return W.forEach(this,(s,r)=>{const o=W.findKey(i,r);if(o){n[o]=Ca(s),delete n[r];return}const a=e?wy(r):String(r).trim();a!==r&&delete n[r],n[a]=Ca(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return W.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&W.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Nd]=this[Nd]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Kr(o);i[a]||(Ay(s,o),i[a]=!0)}return W.isArray(e)?e.forEach(r):r(e),this}};Mn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);W.reduceDescriptors(Mn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});W.freezeMethods(Mn);const Ry="[REDACTED ****]";function Cy(t){if(W.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(W.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function Py(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||W.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof Mn&&(r=r.toJSON()),i.push(r);let o;if(W.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);W.isUndefined(c)||(o[l]=c)});else{if(!W.isPlainObject(r)&&Cy(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?Ry:s(l);W.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let We=class Fm extends Error{static from(e,n,i,s,r,o){const a=new Fm(e.message,n||e.code,i,s,r);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&W.hasOwnProp(e,"redact")?e.redact:void 0,i=W.isArray(n)&&n.length>0?Py(e,n):W.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};We.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";We.ERR_BAD_OPTION="ERR_BAD_OPTION";We.ECONNABORTED="ECONNABORTED";We.ETIMEDOUT="ETIMEDOUT";We.ECONNREFUSED="ECONNREFUSED";We.ERR_NETWORK="ERR_NETWORK";We.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";We.ERR_DEPRECATED="ERR_DEPRECATED";We.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";We.ERR_BAD_REQUEST="ERR_BAD_REQUEST";We.ERR_CANCELED="ERR_CANCELED";We.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";We.ERR_INVALID_URL="ERR_INVALID_URL";We.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Dy=null,Bm=100;function $c(t){return W.isPlainObject(t)||W.isArray(t)}function km(t){return W.endsWith(t,"[]")?t.slice(0,-2):t}function $l(t,e,n){return t?t.concat(e).map(function(s,r){return s=km(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function Ly(t){return W.isArray(t)&&!t.some($c)}const Iy=W.toFlatObject(W,{},null,function(e){return/^is[A-Z]/.test(e)});function Ml(t,e,n){if(!W.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=W.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,E){return!W.isUndefined(E[S])});const i=n.metaTokens,s=n.visitor||_,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?Bm:n.maxDepth,c=a&&W.isSpecCompliantForm(e),u=[];if(!W.isFunction(s))throw new TypeError("visitor must be a function");function f(p){if(p===null)return"";if(W.isDate(p))return p.toISOString();if(W.isBoolean(p))return p.toString();if(!c&&W.isBlob(p))throw new We("Blob is not supported. Use a Buffer instead.");if(W.isArrayBuffer(p)||W.isTypedArray(p)){if(c&&typeof a=="function")return new a([p]);if(typeof Buffer<"u")return Buffer.from(p);throw new We("Blob is not supported. Use a Buffer instead.",We.ERR_NOT_SUPPORT)}return p}function d(p){if(p>l)throw new We("Object is too deeply nested ("+p+" levels). Max depth: "+l,We.ERR_FORM_DATA_DEPTH_EXCEEDED)}function h(p,S){if(l===1/0)return JSON.stringify(p);const E=[];return JSON.stringify(p,function(R,A){if(!W.isObject(A))return A;for(;E.length&&E[E.length-1]!==this;)E.pop();return E.push(A),d(S+E.length-1),A})}function _(p,S,E){let v=p;if(W.isReactNative(e)&&W.isReactNativeBlob(p))return e.append($l(E,S,r),f(p)),!1;if(p&&!E&&typeof p=="object"){if(W.endsWith(S,"{}"))S=i?S:S.slice(0,-2),p=h(p,1);else if(W.isArray(p)&&Ly(p)||(W.isFileList(p)||W.endsWith(S,"[]"))&&(v=W.toArray(p)))return S=km(S),v.forEach(function(A,L){!(W.isUndefined(A)||A===null)&&e.append(o===!0?$l([S],L,r):o===null?S:S+"[]",f(A))}),!1}return $c(p)?!0:(e.append($l(E,S,r),f(p)),!1)}const x=Object.assign(Iy,{defaultVisitor:_,convertValue:f,isVisitable:$c});function m(p,S,E=0){if(!W.isUndefined(p)){if(d(E),u.indexOf(p)!==-1)throw new Error("Circular reference detected in "+S.join("."));u.push(p),W.forEach(p,function(R,A){(!(W.isUndefined(R)||R===null)&&s.call(e,R,W.isString(A)?A.trim():A,S,x))===!0&&m(R,S?S.concat(A):[A],E+1)}),u.pop()}}if(!W.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Ud(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function uf(t,e){this._pairs=[],t&&Ml(t,this,e)}const zm=uf.prototype;zm.append=function(e,n){this._pairs.push([e,n])};zm.toString=function(e){const n=e?i=>e.call(this,i,Ud):Ud;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ny(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Vm(t,e,n){if(!e)return t;t=t||"";const i=W.isFunction(n)?{serialize:n}:n,s=W.getSafeProp(i,"encode")||Ny,r=W.getSafeProp(i,"serialize");let o;if(r?o=r(e,i):o=W.isURLSearchParams(e)?e.toString():new uf(e,i).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Od{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){W.forEach(this.handlers,function(i){i!==null&&e(i)})}}const ff={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Uy=typeof URLSearchParams<"u"?URLSearchParams:uf,Oy=typeof FormData<"u"?FormData:null,Fy=typeof Blob<"u"?Blob:null,By={isBrowser:!0,classes:{URLSearchParams:Uy,FormData:Oy,Blob:Fy},protocols:["http","https","file","blob","url","data"]},df=typeof window<"u"&&typeof document<"u",qc=typeof navigator=="object"&&navigator||void 0,ky=df&&(!qc||["ReactNative","NativeScript","NS"].indexOf(qc.product)<0),zy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vy=df&&window.location.href||"http://localhost",Hy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:df,hasStandardBrowserEnv:ky,hasStandardBrowserWebWorkerEnv:zy,navigator:qc,origin:Vy},Symbol.toStringTag,{value:"Module"})),fn={...Hy,...By};function Gy(t,e){return Ml(t,new fn.classes.URLSearchParams,{visitor:function(n,i,s,r){return fn.isNode&&W.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}const Fd=Bm;function Hm(t){if(t>Fd)throw new We("FormData field is too deeply nested ("+t+" levels). Max depth: "+Fd,We.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Wy(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)Hm(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function Xy(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Gm(t){function e(n,i,s,r){Hm(r);let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&W.isArray(s)?s.length:o,l?(W.hasOwnProp(s,o)?s[o]=W.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!W.hasOwnProp(s,o)||!W.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&W.isArray(s[o])&&(s[o]=Xy(s[o])),!a)}if(W.isFormData(t)&&W.isFunction(t.entries)){const n={};return W.forEachEntry(t,(i,s)=>{e(Wy(i),s,n,0)}),n}return null}const Qs=(t,e)=>t!=null&&W.hasOwnProp(t,e)?t[e]:void 0;function $y(t,e,n){if(W.isString(t))try{return(e||JSON.parse)(t),W.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Vo={transitional:ff,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=W.isObject(e);if(r&&W.isHTMLForm(e)&&(e=new FormData(e)),W.isFormData(e))return s?JSON.stringify(Gm(e)):e;if(W.isArrayBuffer(e)||W.isBuffer(e)||W.isStream(e)||W.isFile(e)||W.isBlob(e)||W.isReadableStream(e))return e;if(W.isArrayBufferView(e))return e.buffer;if(W.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=Qs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Gy(e,l).toString();if((a=W.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Qs(this,"env"),u=c&&c.FormData;return Ml(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),$y(e)):e}],transformResponse:[function(e){const n=Qs(this,"transitional")||Vo.transitional,i=n&&n.forcedJSONParsing,s=Qs(this,"responseType"),r=s==="json";if(W.isResponse(e)||W.isReadableStream(e))return e;if(e&&W.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,Qs(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?We.from(l,We.ERR_BAD_RESPONSE,this,null,Qs(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:fn.classes.FormData,Blob:fn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};W.forEach(["delete","get","head","post","put","patch","query"],t=>{Vo.headers[t]={}});function ql(t,e){const n=this||Vo,i=e||n,s=Mn.from(i.headers);let r=i.data;return W.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Wm(t){return!!(t&&t.__CANCEL__)}let Ho=class extends We{constructor(e,n,i){super(e??"canceled",We.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Xm(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new We("Request failed with status code "+n.status,n.status>=400&&n.status<500?We.ERR_BAD_REQUEST:We.ERR_BAD_RESPONSE,n.config,n.request,n))}function qy(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function Yy(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function Ky(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const Ka=(t,e,n=3)=>{let i=0;const s=Yy(50,250);return Ky(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Bd=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},kd=t=>(...e)=>W.asap(()=>t(...e)),Zy=fn.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,fn.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(fn.origin),fn.navigator&&/(msie|trident)/i.test(fn.navigator.userAgent)):()=>!0,jy=fn.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];W.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),W.isString(i)&&a.push(`path=${i}`),W.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),W.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Jy(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Qy(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const eS=/^https?:(?!\/\/)/i,tS=/[\t\n\r]/g;function nS(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function iS(t){return nS(t).replace(tS,"")}function zd(t,e){if(typeof t=="string"&&eS.test(iS(t)))throw new We('Invalid URL: missing "//" after protocol',We.ERR_INVALID_URL,e)}function $m(t,e,n,i){zd(e,i);let s=!Jy(e);return t&&(s||n===!1)?(zd(t,i),Qy(t,e)):e}const Vd=t=>t instanceof Mn?{...t}:t;function $s(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,d,h){return W.isPlainObject(u)&&W.isPlainObject(f)?W.merge.call({caseless:h},u,f):W.isPlainObject(f)?W.merge({},f):W.isArray(f)?f.slice():f}function s(u,f,d,h){if(W.isUndefined(f)){if(!W.isUndefined(u))return i(void 0,u,d,h)}else return i(u,f,d,h)}function r(u,f){if(!W.isUndefined(f))return i(void 0,f)}function o(u,f){if(W.isUndefined(f)){if(!W.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=W.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!W.isUndefined(f))if(W.isPlainObject(f)){if(W.hasOwnProp(f,u))return f[u]}else return;const d=W.hasOwnProp(t,"transitional")?t.transitional:void 0;if(W.isPlainObject(d)&&W.hasOwnProp(d,u))return d[u]}function l(u,f,d){if(W.hasOwnProp(e,d))return i(u,f);if(W.hasOwnProp(t,d))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,d)=>s(Vd(u),Vd(f),d,!0)};return W.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const d=W.hasOwnProp(c,f)?c[f]:s,h=W.hasOwnProp(t,f)?t[f]:void 0,_=W.hasOwnProp(e,f)?e[f]:void 0,x=d(h,_,f);W.isUndefined(x)&&d!==l||(n[f]=x)}),W.hasOwnProp(e,"validateStatus")&&W.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(W.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const sS=["content-type","content-length"];function rS(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,s])=>{sS.includes(i.toLowerCase())&&t.set(i,s)})}const oS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function qm(t){const e=$s({},t),n=d=>W.hasOwnProp(e,d)?e[d]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=Mn.from(a),e.url=Vm($m(c,f,u,e),n("params"),n("paramsSerializer")),l){const d=W.getSafeProp(l,"username")||"",h=W.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(d+":"+(h?oS(h):"")))}catch(_){throw We.from(_,We.ERR_BAD_OPTION_VALUE,t)}}if(W.isFormData(i)&&(fn.hasStandardBrowserEnv||fn.hasStandardBrowserWebWorkerEnv||W.isReactNative(i)?a.setContentType(void 0):W.isFunction(i.getHeaders)&&rS(a,i.getHeaders(),n("formDataHeaderPolicy"))),fn.hasStandardBrowserEnv&&(W.isFunction(s)&&(s=s(e)),s===!0||s==null&&Zy(e.url))){const h=r&&o&&jy.read(o);h&&a.set(r,h)}return e}const aS=typeof XMLHttpRequest<"u",lS=aS&&function(t){return new Promise(function(n,i){const s=qm(t);let r=s.data;const o=Mn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,h,_;function x(){h&&h(),_&&_(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function p(){if(!m)return;const E=Mn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),R={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};Xm(function(L){n(L),x()},function(L){i(L),x()},R),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(p)},m.onabort=function(){m&&(i(new We("Request aborted",We.ECONNABORTED,t,m)),x(),m=null)},m.onerror=function(v){const R=v&&v.message?v.message:"Network Error",A=new We(R,We.ERR_NETWORK,t,m);A.event=v||null,i(A),x(),m=null},m.ontimeout=function(){let v=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const R=s.transitional||ff;s.timeoutErrorMessage&&(v=s.timeoutErrorMessage),i(new We(v,R.clarifyTimeoutError?We.ETIMEDOUT:We.ECONNABORTED,t,m)),x(),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&W.forEach(Om(o),function(v,R){m.setRequestHeader(R,v)}),W.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([d,_]=Ka(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,h]=Ka(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=E=>{m&&(i(!E||E.type?new Ho(null,t,m):E),m.abort(),x(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=qy(s.url);if(S&&!fn.protocols.includes(S)){i(new We("Unsupported protocol "+S+":",We.ERR_BAD_REQUEST,t)),x();return}m.send(r||null)})},cS=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof We?c:new Ho(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new We(`timeout of ${e}ms exceeded`,We.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>W.asap(o),a},uS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},fS=async function*(t,e){for await(const n of dS(t))yield*uS(n,e)},dS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Hd=(t,e,n,i)=>{const s=fS(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Za=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,hS=(t,e,n)=>e+2<n&&Za(t.charCodeAt(e+1))&&Za(t.charCodeAt(e+2));function pS(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let h=0;h<a;h++)if(i.charCodeAt(h)===37&&h+2<a){const _=i.charCodeAt(h+1),x=i.charCodeAt(h+2);Za(_)&&Za(x)&&(o-=2,h+=2)}let l=0,c=a-1;const u=h=>h>=2&&i.charCodeAt(h-2)===37&&i.charCodeAt(h-1)===51&&(i.charCodeAt(h)===68||i.charCodeAt(h)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const d=Math.floor(o/4)*3-(l||0);return d>0?d:0}let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&hS(i,o,a))r+=1,o+=2;else if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const hf="1.18.1",Gd=64*1024,{isFunction:Jo}=W,mS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Wd=t=>{if(!W.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Xd=(t,...e)=>{try{return!!t(...e)}catch{return!1}},gS=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},_S=t=>{const e=W.global!==void 0&&W.global!==null?W.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=W.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?Jo(s):typeof fetch=="function",l=Jo(r),c=Jo(o);if(!a)return!1;const u=a&&Jo(n),f=a&&(typeof i=="function"?(p=>S=>p.encode(S))(new i):async p=>new Uint8Array(await new r(p).arrayBuffer())),d=l&&u&&Xd(()=>{let p=!1;const S=new r(fn.origin,{body:new n,method:"POST",get duplex(){return p=!0,"half"}}),E=S.headers.has("Content-Type");return S.body!=null&&S.body.cancel(),p&&!E}),h=c&&u&&Xd(()=>W.isReadableStream(new o("").body)),_={stream:h&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!_[p]&&(_[p]=(S,E)=>{let v=S&&S[p];if(v)return v.call(S);throw new We(`Response type '${p}' is not supported`,We.ERR_NOT_SUPPORT,E)})});const x=async p=>{if(p==null)return 0;if(W.isBlob(p))return p.size;if(W.isSpecCompliantForm(p))return(await new r(fn.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(W.isArrayBufferView(p)||W.isArrayBuffer(p))return p.byteLength;if(W.isURLSearchParams(p)&&(p=p+""),W.isString(p))return(await f(p)).byteLength},m=async(p,S)=>{const E=W.toFiniteNumber(p.getContentLength());return E??x(S)};return async p=>{let{url:S,method:E,data:v,signal:R,cancelToken:A,timeout:L,onDownloadProgress:y,onUploadProgress:P,responseType:B,headers:F,withCredentials:H="same-origin",fetchOptions:ee,maxContentLength:le,maxBodyLength:q}=qm(p);const j=W.isNumber(le)&&le>-1,G=W.isNumber(q)&&q>-1,re=K=>W.hasOwnProp(p,K)?p[K]:void 0;let be=s||fetch;B=B?(B+"").toLowerCase():"text";let Ce=cS([R,A&&A.toAbortSignal()],L),ye=null;const De=Ce&&Ce.unsubscribe&&(()=>{Ce.unsubscribe()});let ze,je=null;const qe=()=>new We("Request body larger than maxBodyLength limit",We.ERR_BAD_REQUEST,p,ye);try{let K;const U=re("auth");if(U){const V=W.getSafeProp(U,"username")||"",te=W.getSafeProp(U,"password")||"";K={username:V,password:te}}if(gS(S)){const V=new URL(S,fn.origin);if(!K&&(V.username||V.password)){const te=Wd(V.username),Te=Wd(V.password);K={username:te,password:Te}}(V.username||V.password)&&(V.username="",V.password="",S=V.href)}if(K&&(F.delete("authorization"),F.set("Authorization","Basic "+btoa(mS((K.username||"")+":"+(K.password||""))))),j&&typeof S=="string"&&S.startsWith("data:")&&pS(S)>le)throw new We("maxContentLength size of "+le+" exceeded",We.ERR_BAD_RESPONSE,p,ye);if(G&&E!=="get"&&E!=="head"){const V=await x(v);if(typeof V=="number"&&isFinite(V)&&(ze=V,V>q))throw qe()}const Z=G&&(W.isReadableStream(v)||W.isStream(v)),ce=(V,te,Te)=>Hd(V,Gd,xe=>{if(G&&xe>q)throw je=qe();te&&te(xe)},Te);if(d&&E!=="get"&&E!=="head"&&(P||Z)){if(ze=ze??await m(F,v),ze!==0||Z){let V=new r(S,{method:"POST",body:v,duplex:"half"}),te;if(W.isFormData(v)&&(te=V.headers.get("content-type"))&&F.setContentType(te),V.body){const[Te,xe]=P&&Bd(ze,Ka(kd(P)))||[];v=ce(V.body,Te,xe)}}}else if(Z&&!l&&u&&E!=="get"&&E!=="head")v=ce(v);else if(Z&&l&&!d&&E!=="get"&&E!=="head")throw new We("Stream request bodies are not supported by the current fetch implementation",We.ERR_NOT_SUPPORT,p,ye);W.isString(H)||(H=H?"include":"omit");const Ae=l&&"credentials"in r.prototype;if(W.isFormData(v)){const V=F.getContentType();V&&/^multipart\/form-data/i.test(V)&&!/boundary=/i.test(V)&&F.delete("content-type")}F.set("User-Agent","axios/"+hf,!1);const Pe={...ee,signal:Ce,method:E.toUpperCase(),headers:Om(F.normalize()),body:v,duplex:"half",credentials:Ae?H:void 0};ye=l&&new r(S,Pe);let C=await(l?be(ye,ee):be(S,Pe));const D=Mn.from(C.headers);if(j){const V=W.toFiniteNumber(D.getContentLength());if(V!=null&&V>le)throw new We("maxContentLength size of "+le+" exceeded",We.ERR_BAD_RESPONSE,p,ye)}const k=h&&(B==="stream"||B==="response");if(h&&C.body&&(y||j||k&&De)){const V={};["status","statusText","headers"].forEach(Fe=>{V[Fe]=C[Fe]});const te=W.toFiniteNumber(D.getContentLength()),[Te,xe]=y&&Bd(te,Ka(kd(y),!0))||[];let ve=0;const ue=Fe=>{if(j&&(ve=Fe,ve>le))throw new We("maxContentLength size of "+le+" exceeded",We.ERR_BAD_RESPONSE,p,ye);Te&&Te(Fe)};C=new o(Hd(C.body,Gd,ue,()=>{xe&&xe(),De&&De()}),V)}B=B||"text";let Q=await _[W.findKey(_,B)||"text"](C,p);if(j&&!h&&!k){let V;if(Q!=null&&(typeof Q.byteLength=="number"?V=Q.byteLength:typeof Q.size=="number"?V=Q.size:typeof Q=="string"&&(V=typeof i=="function"?new i().encode(Q).byteLength:Q.length)),typeof V=="number"&&V>le)throw new We("maxContentLength size of "+le+" exceeded",We.ERR_BAD_RESPONSE,p,ye)}return!k&&De&&De(),await new Promise((V,te)=>{Xm(V,te,{data:Q,headers:Mn.from(C.headers),status:C.status,statusText:C.statusText,config:p,request:ye})})}catch(K){if(De&&De(),Ce&&Ce.aborted&&Ce.reason instanceof We){const U=Ce.reason;throw U.config=p,ye&&(U.request=ye),K!==U&&Object.defineProperty(U,"cause",{__proto__:null,value:K,writable:!0,enumerable:!1,configurable:!0}),U}if(je)throw ye&&!je.request&&(je.request=ye),je;if(K instanceof We)throw ye&&!K.request&&(K.request=ye),K;if(K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)){const U=new We("Network Error",We.ERR_NETWORK,p,ye,K&&K.response);throw Object.defineProperty(U,"cause",{__proto__:null,value:K.cause||K,writable:!0,enumerable:!1,configurable:!0}),U}throw We.from(K,K&&K.code,p,ye,K&&K.response)}}},vS=new Map,Ym=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=vS;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:_S(e)),u=c;return c};Ym();const pf={http:Dy,xhr:lS,fetch:{get:Ym}};W.forEach(pf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const $d=t=>`- ${t}`,xS=t=>W.isFunction(t)||t===null||t===!1;function yS(t,e){t=W.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!xS(i)&&(s=pf[(a=String(i)).toLowerCase()],s===void 0))throw new We(`Unknown adapter '${a}'`);if(s&&(W.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map($d).join(`
`):" "+$d(o[0]):"as no adapter specified";throw new We("There is no suitable adapter to dispatch the request "+a,We.ERR_NOT_SUPPORT)}return s}const Km={getAdapter:yS,adapters:pf};function Yl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ho(null,t)}function qd(t){return Yl(t),t.headers=Mn.from(t.headers),t.data=ql.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Km.getAdapter(t.adapter||Vo.adapter,t)(t).then(function(i){Yl(t),t.response=i;try{i.data=ql.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=Mn.from(i.headers),i},function(i){if(!Wm(i)&&(Yl(t),i&&i.response)){t.response=i.response;try{i.response.data=ql.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=Mn.from(i.response.headers)}return Promise.reject(i)})}const bl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{bl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Yd={};bl.transitional=function(e,n,i){function s(r,o){return"[Axios v"+hf+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new We(s(o," has been removed"+(n?" in "+n:"")),We.ERR_DEPRECATED);return n&&!Yd[o]&&(Yd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};bl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function SS(t,e,n){if(typeof t!="object"||t===null)throw new We("options must be an object",We.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new We("option "+r+" must be "+l,We.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new We("Unknown option "+r,We.ERR_BAD_OPTION)}}const Pa={assertOptions:SS,validators:bl},mn=Pa.validators;let Gs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Od,response:new Od}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=$s(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Pa.assertOptions(i,{silentJSONParsing:mn.transitional(mn.boolean),forcedJSONParsing:mn.transitional(mn.boolean),clarifyTimeoutError:mn.transitional(mn.boolean),legacyInterceptorReqResOrdering:mn.transitional(mn.boolean),advertiseZstdAcceptEncoding:mn.transitional(mn.boolean),validateStatusUndefinedResolves:mn.transitional(mn.boolean)},!1),s!=null&&(W.isFunction(s)?n.paramsSerializer={serialize:s}:Pa.assertOptions(s,{encode:mn.function,serialize:mn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Pa.assertOptions(n,{baseUrl:mn.spelling("baseURL"),withXsrfToken:mn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&W.merge(r.common,r[n.method]);r&&W.forEach(["delete","get","head","post","put","patch","query","common"],_=>{delete r[_]}),n.headers=Mn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(x){if(typeof x.runWhen=="function"&&x.runWhen(n)===!1)return;l=l&&x.synchronous;const m=n.transitional||ff;m&&m.legacyInterceptorReqResOrdering?a.unshift(x.fulfilled,x.rejected):a.push(x.fulfilled,x.rejected)});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let u,f=0,d;if(!l){const _=[qd.bind(this),void 0];for(_.unshift(...a),_.push(...c),d=_.length,u=Promise.resolve(n);f<d;)u=u.then(_[f++],_[f++]);return u}d=a.length;let h=n;for(;f<d;){const _=a[f++],x=a[f++];try{h=_(h)}catch(m){x.call(this,m);break}}try{u=qd.call(this,h)}catch(_){return Promise.reject(_)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=$s(this.defaults,e);const n=$m(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Vm(n,e.params,e.paramsSerializer)}};W.forEach(["delete","get","head","options"],function(e){Gs.prototype[e]=function(n,i){return this.request($s(i||{},{method:e,url:n,data:i&&W.hasOwnProp(i,"data")?i.data:void 0}))}});W.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request($s(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Gs.prototype[e]=n(),e!=="query"&&(Gs.prototype[e+"Form"]=n(!0))});let MS=class Zm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Ho(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Zm(function(s){e=s}),cancel:e}}};function bS(t){return function(n){return t.apply(null,n)}}function ES(t){return W.isObject(t)&&t.isAxiosError===!0}const Yc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Yc).forEach(([t,e])=>{Yc[e]=t});function jm(t){const e=new Gs(t),n=Am(Gs.prototype.request,e);return W.extend(n,Gs.prototype,e,{allOwnKeys:!0}),W.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return jm($s(t,s))},n}const jt=jm(Vo);jt.Axios=Gs;jt.CanceledError=Ho;jt.CancelToken=MS;jt.isCancel=Wm;jt.VERSION=hf;jt.toFormData=Ml;jt.AxiosError=We;jt.Cancel=jt.CanceledError;jt.all=function(e){return Promise.all(e)};jt.spread=bS;jt.isAxiosError=ES;jt.mergeConfig=$s;jt.AxiosHeaders=Mn;jt.formToJSON=t=>Gm(W.isHTMLForm(t)?new FormData(t):t);jt.getAdapter=Km.getAdapter;jt.HttpStatusCode=Yc;jt.default=jt;const{Axios:OP,AxiosError:FP,CanceledError:BP,isCancel:kP,CancelToken:zP,VERSION:VP,all:HP,Cancel:GP,isAxiosError:WP,spread:XP,toFormData:$P,AxiosHeaders:qP,HttpStatusCode:YP,formToJSON:KP,getAdapter:ZP,mergeConfig:jP,create:JP}=jt,Lt=jt.create({baseURL:"/api"}),TS={class:"page-card"},wS={key:0,class:"placeholder"},AS={class:"summary-grid"},RS={class:"summary-label"},CS={class:"summary-note"},PS={class:"content-grid"},DS={class:"panel"},LS={key:1,class:"placeholder"},IS={class:"panel"},NS={key:0,class:"table"},US={key:1,class:"placeholder"},OS={key:0,class:"alert"},FS={__name:"HomePage",setup(t){const e=Ge([]),n=Ge([]),i=Ge([]),s=Ge(!0),r=Ge(""),o=u=>u?new Date(u).toLocaleString("zh-TW"):"—",a=at(()=>n.value.find(u=>!u.endTime)),l=at(()=>[{title:"使用者數",value:e.value.length,detail:"資料庫已建立的使用者"},{title:"作業紀錄",value:n.value.length,detail:"所有作業資料"},{title:"辨識結果",value:i.value.length,detail:"所有物件辨識資料"}]);return ts(async()=>{var u,f;s.value=!0,r.value="";try{const[d,h,_]=await Promise.all([Lt.get("/users"),Lt.get("/operations"),Lt.get("/detections")]);e.value=d.data,n.value=h.data,i.value=_.data}catch(d){r.value=((f=(u=d.response)==null?void 0:u.data)==null?void 0:f.error)||"無法讀取資料庫資料，請確認後端服務與 MongoDB 是否已啟動。"}finally{s.value=!1}}),(u,f)=>{var d,h;return fe(),he("section",TS,[f[7]||(f[7]=b("div",{class:"section-title"},[b("p",{class:"eyebrow"},"Dashboard"),b("h2",null,"系統總覽")],-1)),s.value?(fe(),he("p",wS,"正在讀取資料庫資料…")):(fe(),he(pt,{key:1},[b("div",AS,[(fe(!0),he(pt,null,tn(l.value,_=>(fe(),he("article",{key:_.title,class:"summary-card"},[b("p",RS,ae(_.title),1),b("h3",null,ae(_.value),1),b("p",CS,ae(_.detail),1)]))),128))]),b("div",PS,[b("article",DS,[f[4]||(f[4]=b("h3",null,"目前作業",-1)),a.value?(fe(),he(pt,{key:0},[b("p",null,[f[0]||(f[0]=b("strong",null,"作業 ID：",-1)),rt(ae(a.value._id),1)]),b("p",null,[f[1]||(f[1]=b("strong",null,"使用者：",-1)),rt(ae(((d=a.value.userId)==null?void 0:d.name)||((h=a.value.userId)==null?void 0:h.email)||"未提供"),1)]),b("p",null,[f[2]||(f[2]=b("strong",null,"開始時間：",-1)),rt(ae(o(a.value.startTime)),1)]),b("p",null,[f[3]||(f[3]=b("strong",null,"說明：",-1)),rt(ae(a.value.description||"—"),1)])],64)):(fe(),he("p",LS,"目前沒有進行中的作業。"))]),b("article",IS,[f[6]||(f[6]=b("h3",null,"最新辨識結果",-1)),i.value.length?(fe(),he("table",NS,[f[5]||(f[5]=b("thead",null,[b("tr",null,[b("th",null,"時間"),b("th",null,"物件"),b("th",null,"深度")])],-1)),b("tbody",null,[(fe(!0),he(pt,null,tn(i.value.slice(0,6),_=>(fe(),he("tr",{key:_._id},[b("td",null,ae(o(_.timestamp)),1),b("td",null,ae(_.objectClass||"未分類"),1),b("td",null,ae(_.depth??"—"),1)]))),128))])])):(fe(),he("p",US,"尚無辨識資料。"))])]),r.value?(fe(),he("p",OS,ae(r.value),1)):Et("",!0)],64))])}}},BS={class:"page-card account-page"},kS={class:"section-title"},zS={class:"panel account-panel"},VS={key:0},HS=["autocomplete"],GS={key:1},WS=["disabled"],XS={key:0,class:"alert"},$S={__name:"AccountLoginPage",setup(t){const e=of(),n=Tm(),i=Ge(n.query.mode==="register"?"register":"login"),s=Ge(!1),r=Ge(""),o=Ms({name:"",email:"",password:"",confirmPassword:""}),a=()=>{i.value=i.value==="login"?"register":"login",r.value="",o.password="",o.confirmPassword=""};Dn(()=>n.query.mode,c=>{(c==="register"||c==="login")&&(i.value=c)});const l=async()=>{var c,u;if(r.value="",i.value==="register"&&o.password!==o.confirmPassword){r.value="兩次輸入的密碼不一致。";return}s.value=!0;try{const f=i.value==="login"?{email:o.email,password:o.password}:{name:o.name,email:o.email,password:o.password},d=await Lt.post(`/auth/${i.value==="login"?"login":"register"}`,f);wm(d.data),e.replace(typeof n.query.redirect=="string"?n.query.redirect:"/")}catch(f){r.value=((u=(c=f.response)==null?void 0:c.data)==null?void 0:u.error)||"目前無法完成帳戶操作，請稍後再試。"}finally{s.value=!1}};return(c,u)=>(fe(),he("section",BS,[b("div",kS,[u[4]||(u[4]=b("p",{class:"eyebrow"},"Account",-1)),b("h2",null,ae(i.value==="login"?"登入平台":"建立帳號"),1)]),b("article",zS,[b("form",{class:"form-grid",onSubmit:sv(l,["prevent"])},[i.value==="register"?(fe(),he("label",VS,[u[5]||(u[5]=rt("使用者名稱",-1)),zt(b("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>o.name=f),type:"text",autocomplete:"name",required:""},null,512),[[si,o.name,void 0,{trim:!0}]])])):Et("",!0),b("label",null,[u[6]||(u[6]=rt("電子信箱",-1)),zt(b("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>o.email=f),type:"email",autocomplete:"email",required:""},null,512),[[si,o.email,void 0,{trim:!0}]])]),b("label",null,[u[7]||(u[7]=rt("密碼",-1)),zt(b("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>o.password=f),type:"password",autocomplete:i.value==="login"?"current-password":"new-password",minlength:"8",required:""},null,8,HS),[[si,o.password]])]),i.value==="register"?(fe(),he("label",GS,[u[8]||(u[8]=rt("確認密碼",-1)),zt(b("input",{"onUpdate:modelValue":u[3]||(u[3]=f=>o.confirmPassword=f),type:"password",autocomplete:"new-password",minlength:"8",required:""},null,512),[[si,o.confirmPassword]])])):Et("",!0),b("button",{type:"submit",disabled:s.value},ae(s.value?"處理中…":i.value==="login"?"登入":"建立帳號"),9,WS)],32),r.value?(fe(),he("p",XS,ae(r.value),1)):Et("",!0),b("button",{type:"button",class:"account-switch",onClick:a},ae(i.value==="login"?"尚未註冊？建立帳號":"已有帳號？返回登入"),1)])]))}},qS={class:"page-card profile-page"},YS={class:"panel profile-panel"},KS={key:0,class:"placeholder"},ZS={class:"profile-avatar-large"},jS={class:"profile-fields"},JS={class:"profile-field-row"},QS={class:"profile-value"},eM=["disabled"],tM=["disabled"],nM={class:"profile-field-row"},iM={class:"profile-value"},sM=["disabled"],rM=["disabled"],oM={class:"profile-field-row"},aM={class:"profile-value"},lM={key:0,class:"alert"},cM={key:2,class:"alert"},uM={__name:"AccountProfilePage",setup(t){const e=of(),n=Ge(""),i=Ge(!0),s=Ge(!1),r=Ge(""),o=Ge(null),a=Ms({name:"",email:""}),l=async()=>{var h,_;try{o.value=(await Lt.get(`/users/${mo.value.id}`)).data,a.name=o.value.name,a.email=o.value.email}catch(x){r.value=((_=(h=x.response)==null?void 0:h.data)==null?void 0:_.error)||"無法讀取帳戶資料。"}finally{i.value=!1}},c=h=>{n.value=h,r.value="",a[h]=o.value[h]},u=()=>{n.value&&(a[n.value]=o.value[n.value]),n.value="",r.value=""},f=async h=>{var _,x;s.value=!0,r.value="";try{const m=(await Lt.patch(`/users/${mo.value.id}`,{[h]:a[h]})).data;o.value=m,mx(m),n.value=""}catch(m){r.value=((x=(_=m.response)==null?void 0:_.data)==null?void 0:x.error)||"無法更新帳戶資料。"}finally{s.value=!1}},d=()=>{gx(),e.push("/guide")};return ts(l),(h,_)=>(fe(),he("section",qS,[_[11]||(_[11]=b("div",{class:"section-title profile-title"},[b("p",{class:"eyebrow"},"Account"),b("h2",null,"帳戶資料")],-1)),b("article",YS,[i.value?(fe(),he("p",KS,"正在讀取帳戶資料…")):o.value?(fe(),he(pt,{key:1},[b("div",ZS,ae(o.value.name.charAt(0).toUpperCase()),1),b("div",jS,[b("div",JS,[_[8]||(_[8]=b("span",{class:"profile-label"},"使用者名稱",-1)),b("div",QS,[n.value==="name"?(fe(),he(pt,{key:0},[zt(b("input",{"onUpdate:modelValue":_[0]||(_[0]=x=>a.name=x),type:"text",autofocus:"",onKeyup:_[1]||(_[1]=pd(x=>f("name"),["enter"]))},null,544),[[si,a.name,void 0,{trim:!0}]]),b("button",{type:"button",class:"field-save",disabled:s.value,onClick:_[2]||(_[2]=x=>f("name"))},"✓",8,eM),b("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,tM)],64)):(fe(),he(pt,{key:1},[b("span",null,ae(o.value.name),1),b("button",{type:"button",class:"field-edit",title:"修改使用者名稱",onClick:_[3]||(_[3]=x=>c("name"))},"✎")],64))])]),b("div",nM,[_[9]||(_[9]=b("span",{class:"profile-label"},"電子信箱",-1)),b("div",iM,[n.value==="email"?(fe(),he(pt,{key:0},[zt(b("input",{"onUpdate:modelValue":_[4]||(_[4]=x=>a.email=x),type:"email",autofocus:"",onKeyup:_[5]||(_[5]=pd(x=>f("email"),["enter"]))},null,544),[[si,a.email,void 0,{trim:!0}]]),b("button",{type:"button",class:"field-save",disabled:s.value,onClick:_[6]||(_[6]=x=>f("email"))},"✓",8,sM),b("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,rM)],64)):(fe(),he(pt,{key:1},[b("span",null,ae(o.value.email),1),b("button",{type:"button",class:"field-edit",title:"修改電子信箱",onClick:_[7]||(_[7]=x=>c("email"))},"✎")],64))])]),b("div",oM,[_[10]||(_[10]=b("span",{class:"profile-label"},"註冊時間",-1)),b("div",aM,[b("span",null,ae(new Date(o.value.signUpTime).toLocaleString("zh-TW")),1)])])]),r.value?(fe(),he("p",lM,ae(r.value),1)):Et("",!0),b("button",{type:"button",class:"logout-danger",onClick:d},"登出帳戶")],64)):(fe(),he("p",cM,ae(r.value),1))])]))}},Go=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},fM={},dM={class:"page-card"};function hM(t,e){return fe(),he("section",dM,[...e[0]||(e[0]=[nf('<div class="section-title"><p class="eyebrow">Account</p><h2>密碼修改</h2></div><article class="panel"><h3>修改密碼</h3><div class="form-grid"><input type="password" placeholder="舊密碼"><input type="password" placeholder="新密碼"><input type="password" placeholder="確認新密碼"><button type="button">確認修改</button></div></article>',2)])])}const pM=Go(fM,[["render",hM]]),mM={},gM={class:"page-card"};function _M(t,e){return fe(),he("section",gM,[...e[0]||(e[0]=[b("div",{class:"section-title"},[b("p",{class:"eyebrow"},"Guide"),b("h2",null,"網站操作指引")],-1),b("article",{class:"panel"},[b("h3",null,"使用步驟"),b("ul",{class:"bullet-list"},[b("li",null,"選擇對應的定位任務頁面。"),b("li",null,"確認目前作業狀態與資料來源。"),b("li",null,"透過歷史資料查詢前次操作結果。")])],-1)])])}const vM=Go(mM,[["render",_M]]),xM={},yM={class:"page-card"};function SM(t,e){return fe(),he("section",yM,[...e[0]||(e[0]=[b("div",{class:"section-title"},[b("p",{class:"eyebrow"},"Technology"),b("h2",null,"定位技術介紹")],-1),b("article",{class:"panel"},[b("h3",null,"系統技術架構"),b("p",null,"本系統結合電腦視覺、深度估測與即時串流，讓終端定位作業可快速觀測與追溯。")],-1)])])}const MM=Go(xM,[["render",SM]]),bM={class:"page-card"},EM={key:0,class:"placeholder"},TM={key:1,class:"table table-spaced"},wM={key:2,class:"placeholder"},AM={key:3,class:"alert"},RM={__name:"ObjectQueryPage",setup(t){const e=Ge([]),n=Ge(""),i=Ge(!0),s=Ge(""),r=a=>a?new Date(a).toLocaleString("zh-TW"):"—",o=at(()=>e.value.filter(a=>{var l;return(l=a.objectClass)==null?void 0:l.toLowerCase().includes(n.value.toLowerCase())}));return ts(async()=>{try{e.value=(await Lt.get("/detections")).data}catch{s.value="無法讀取辨識資料。"}finally{i.value=!1}}),(a,l)=>(fe(),he("section",bM,[l[2]||(l[2]=b("div",{class:"section-title"},[b("p",{class:"eyebrow"},"History"),b("h2",null,"物件辨識紀錄")],-1)),zt(b("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"search",placeholder:"依物件名稱篩選"},null,512),[[si,n.value]]),i.value?(fe(),he("p",EM,"正在讀取資料…")):o.value.length?(fe(),he("table",TM,[l[1]||(l[1]=b("thead",null,[b("tr",null,[b("th",null,"時間"),b("th",null,"物件"),b("th",null,"深度"),b("th",null,"作業 ID")])],-1)),b("tbody",null,[(fe(!0),he(pt,null,tn(o.value,c=>{var u;return fe(),he("tr",{key:c._id},[b("td",null,ae(r(c.timestamp)),1),b("td",null,ae(c.objectClass||"未分類"),1),b("td",null,ae(c.depth??"—"),1),b("td",null,ae(((u=c.operationId)==null?void 0:u._id)||c.operationId),1)])}),128))])])):(fe(),he("p",wM,"沒有符合的辨識資料。")),s.value?(fe(),he("p",AM,ae(s.value),1)):Et("",!0)]))}},CM={class:"page-card"},PM={key:0,class:"placeholder"},DM={key:1,class:"table"},LM={key:2,class:"placeholder"},IM={key:3,class:"alert"},NM={__name:"TaskHistoryPage",setup(t){const e=Ge([]),n=Ge(!0),i=Ge(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return ts(async()=>{try{e.value=(await Lt.get("/operations")).data}catch{i.value="無法讀取作業紀錄。"}finally{n.value=!1}}),(r,o)=>(fe(),he("section",CM,[o[1]||(o[1]=b("div",{class:"section-title"},[b("p",{class:"eyebrow"},"History"),b("h2",null,"任務歷程")],-1)),n.value?(fe(),he("p",PM,"正在讀取資料…")):e.value.length?(fe(),he("table",DM,[o[0]||(o[0]=b("thead",null,[b("tr",null,[b("th",null,"開始時間"),b("th",null,"結束時間"),b("th",null,"使用者"),b("th",null,"狀態")])],-1)),b("tbody",null,[(fe(!0),he(pt,null,tn(e.value,a=>{var l,c;return fe(),he("tr",{key:a._id},[b("td",null,ae(s(a.startTime)),1),b("td",null,ae(s(a.endTime)),1),b("td",null,ae(((l=a.userId)==null?void 0:l.name)||((c=a.userId)==null?void 0:c.email)||"未提供"),1),b("td",null,ae(a.endTime?"已完成":"進行中"),1)])}),128))])])):(fe(),he("p",LM,"尚無任務資料。")),i.value?(fe(),he("p",IM,ae(i.value),1)):Et("",!0)]))}},UM={class:"page-card"},OM={key:0,class:"placeholder"},FM={key:1,class:"table"},BM={key:2,class:"placeholder"},kM={key:3,class:"alert"},zM={__name:"OperationLogPage",setup(t){const e=Ge([]),n=Ge(!0),i=Ge(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return ts(async()=>{try{e.value=(await Lt.get("/operations")).data}catch{i.value="無法讀取操作紀錄。"}finally{n.value=!1}}),(r,o)=>(fe(),he("section",UM,[o[1]||(o[1]=b("div",{class:"section-title"},[b("p",{class:"eyebrow"},"History"),b("h2",null,"操作紀錄")],-1)),n.value?(fe(),he("p",OM,"正在讀取資料…")):e.value.length?(fe(),he("table",FM,[o[0]||(o[0]=b("thead",null,[b("tr",null,[b("th",null,"作業 ID"),b("th",null,"開始時間"),b("th",null,"結束時間"),b("th",null,"說明")])],-1)),b("tbody",null,[(fe(!0),he(pt,null,tn(e.value,a=>(fe(),he("tr",{key:a._id},[b("td",null,ae(a._id),1),b("td",null,ae(s(a.startTime)),1),b("td",null,ae(s(a.endTime)),1),b("td",null,ae(a.description||"—"),1)]))),128))])])):(fe(),he("p",BM,"尚無操作紀錄。")),i.value?(fe(),he("p",kM,ae(i.value),1)):Et("",!0)]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mf="185",Mr={ROTATE:0,DOLLY:1,PAN:2},_r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},VM=0,Kd=1,HM=2,Da=1,GM=2,ro=3,ys=0,kn=1,jn=2,Xi=0,br=1,Zd=2,jd=3,Jd=4,WM=5,Ns=100,XM=101,$M=102,qM=103,YM=104,KM=200,ZM=201,jM=202,JM=203,Kc=204,Zc=205,QM=206,eb=207,tb=208,nb=209,ib=210,sb=211,rb=212,ob=213,ab=214,jc=0,Jc=1,Qc=2,Nr=3,eu=4,tu=5,nu=6,iu=7,Jm=0,lb=1,cb=2,Ti=0,Qm=1,eg=2,tg=3,ng=4,ig=5,sg=6,rg=7,og=300,qs=301,Ur=302,Kl=303,Zl=304,El=306,su=1e3,Gi=1001,ru=1002,dn=1003,ub=1004,Qo=1005,yn=1006,jl=1007,Bs=1008,Wn=1009,ag=1010,lg=1011,Ao=1012,gf=1013,Ci=1014,Mi=1015,Zi=1016,_f=1017,vf=1018,Ro=1020,cg=35902,ug=35899,fg=1021,dg=1022,ri=1023,ji=1026,ks=1027,hg=1028,xf=1029,Ys=1030,yf=1031,Sf=1033,La=33776,Ia=33777,Na=33778,Ua=33779,ou=35840,au=35841,lu=35842,cu=35843,uu=36196,fu=37492,du=37496,hu=37488,pu=37489,ja=37490,mu=37491,gu=37808,_u=37809,vu=37810,xu=37811,yu=37812,Su=37813,Mu=37814,bu=37815,Eu=37816,Tu=37817,wu=37818,Au=37819,Ru=37820,Cu=37821,Pu=36492,Du=36494,Lu=36495,Iu=36283,Nu=36284,Ja=36285,Uu=36286,fb=3200,Ou=0,db=1,_s="",Zn="srgb",Qa="srgb-linear",el="linear",Ct="srgb",er=7680,Qd=519,hb=512,pb=513,mb=514,Mf=515,gb=516,_b=517,bf=518,vb=519,eh=35044,th="300 es",bi=2e3,Co=2001;function xb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yb(){const t=tl("canvas");return t.style.display="block",t}const nh={};function ih(...t){const e="THREE."+t.shift();console.log(e,...t)}function pg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function it(...t){t=pg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Mt(...t){t=pg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Er(...t){const e=t.join(" ");e in nh||(nh[e]=!0,it(...t))}function Sb(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Mb={[jc]:Jc,[Qc]:nu,[eu]:iu,[Nr]:tu,[Jc]:jc,[nu]:Qc,[iu]:eu,[tu]:Nr};class bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sh=1234567;const go=Math.PI/180,Po=180/Math.PI;function Hr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function vt(t,e,n){return Math.max(e,Math.min(n,t))}function Ef(t,e){return(t%e+e)%e}function bb(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Eb(t,e,n){return t!==e?(n-t)/(e-t):0}function _o(t,e,n){return(1-n)*t+n*e}function Tb(t,e,n,i){return _o(t,e,1-Math.exp(-n*i))}function wb(t,e=1){return e-Math.abs(Ef(t,e*2)-e)}function Ab(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Rb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Cb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Pb(t,e){return t+Math.random()*(e-t)}function Db(t){return t*(.5-Math.random())}function Lb(t){t!==void 0&&(sh=t);let e=sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ib(t){return t*go}function Nb(t){return t*Po}function Ub(t){return(t&t-1)===0&&t!==0}function Ob(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Fb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Bb(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),h=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*h,a*u,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Oa={DEG2RAD:go,RAD2DEG:Po,generateUUID:Hr,clamp:vt,euclideanModulo:Ef,mapLinear:bb,inverseLerp:Eb,lerp:_o,damp:Tb,pingpong:wb,smoothstep:Ab,smootherstep:Rb,randInt:Cb,randFloat:Pb,randFloatSpread:Db,seededRandom:Lb,degToRad:Ib,radToDeg:Nb,isPowerOfTwo:Ub,ceilPowerOfTwo:Ob,floorPowerOfTwo:Fb,setQuaternionFromProperEuler:Bb,normalize:wn,denormalize:gr},Pf=class Pf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pf.prototype.isVector2=!0;let ot=Pf;class li{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],h=r[o+1],_=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==h||u!==_){let m=l*d+c*h+u*_+f*x;m<0&&(d=-d,h=-h,_=-_,x=-x,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,a=Math.sin(a*S)/E,l=l*p+d*a,c=c*p+h*a,u=u*p+_*a,f=f*p+x*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+_*a,f=f*p+x*a;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],_=r[o+3];return e[n]=a*_+u*f+l*h-c*d,e[n+1]=l*_+u*d+c*f-a*h,e[n+2]=c*_+u*h+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Df=class Df{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Df.prototype.isVector3=!0;let Y=Df;const Jl=new Y,rh=new li,Lf=class Lf{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],x=s[0],m=s[3],p=s[6],S=s[1],E=s[4],v=s[7],R=s[2],A=s[5],L=s[8];return r[0]=o*x+a*S+l*R,r[3]=o*m+a*E+l*A,r[6]=o*p+a*v+l*L,r[1]=c*x+u*S+f*R,r[4]=c*m+u*E+f*A,r[7]=c*p+u*v+f*L,r[2]=d*x+h*S+_*R,r[5]=d*m+h*E+_*A,r[8]=d*p+h*v+_*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,_=n*f+i*d+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=h*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ql.makeScale(e,n)),this}rotate(e){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ql.makeRotation(-e)),this}translate(e,n){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ql.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lf.prototype.isMatrix3=!0;let ct=Lf;const Ql=new ct,oh=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kb(){const t={enabled:!0,workingColorSpace:Qa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_s?el:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Qa]:{primaries:e,whitePoint:i,transfer:el,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),t}const St=kb();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let tr;class zb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{tr===void 0&&(tr=tl("canvas")),tr.width=e.width,tr.height=e.height;const s=tr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=tr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vb=0;class Tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ec(s[o].image)):r.push(ec(s[o]))}else r=ec(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function ec(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let Hb=0;const tc=new Y;class In extends bs{constructor(e=In.DEFAULT_IMAGE,n=In.DEFAULT_MAPPING,i=Gi,s=Gi,r=yn,o=Bs,a=ri,l=Wn,c=In.DEFAULT_ANISOTROPY,u=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Hr(),this.name="",this.source=new Tf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){it(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){it(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case su:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case su:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=og;In.DEFAULT_ANISOTROPY=1;const If=class If{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,v=(h+1)/2,R=(p+1)/2,A=(u+d)/4,L=(f+x)/4,y=(_+m)/4;return E>v&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=L/i):v>R?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=y/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=L/r,s=y/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-x)/S,this.z=(d-u)/S,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};If.prototype.isVector4=!0;let $t=If;class Gb extends bs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new In(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Tf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Gb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mg extends In{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wb extends In{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rl=class rl{constructor(e,n,i,s,r,o,a,l,c,u,f,d,h,_,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,h,_,x,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,h,_,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,s=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+_*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=_+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,x=c*f;n[0]=d+x*a,n[4]=_*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-_,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=_+h*a,n[1]=h+_*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=_*c-h,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=h*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=_*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+_,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,h=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=h*f-_,n[2]=_*f-h,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xb,e,$b)}lookAt(e,n,i){const s=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),os.crossVectors(i,Vn),os.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),os.crossVectors(i,Vn)),os.normalize(),ea.crossVectors(Vn,os),s[0]=os.x,s[4]=ea.x,s[8]=Vn.x,s[1]=os.y,s[5]=ea.y,s[9]=Vn.y,s[2]=os.z,s[6]=ea.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],x=i[6],m=i[10],p=i[14],S=i[3],E=i[7],v=i[11],R=i[15],A=s[0],L=s[4],y=s[8],P=s[12],B=s[1],F=s[5],H=s[9],ee=s[13],le=s[2],q=s[6],j=s[10],G=s[14],re=s[3],be=s[7],Ce=s[11],ye=s[15];return r[0]=o*A+a*B+l*le+c*re,r[4]=o*L+a*F+l*q+c*be,r[8]=o*y+a*H+l*j+c*Ce,r[12]=o*P+a*ee+l*G+c*ye,r[1]=u*A+f*B+d*le+h*re,r[5]=u*L+f*F+d*q+h*be,r[9]=u*y+f*H+d*j+h*Ce,r[13]=u*P+f*ee+d*G+h*ye,r[2]=_*A+x*B+m*le+p*re,r[6]=_*L+x*F+m*q+p*be,r[10]=_*y+x*H+m*j+p*Ce,r[14]=_*P+x*ee+m*G+p*ye,r[3]=S*A+E*B+v*le+R*re,r[7]=S*L+E*F+v*q+R*be,r[11]=S*y+E*H+v*j+R*Ce,r[15]=S*P+E*ee+v*G+R*ye,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],x=e[7],m=e[11],p=e[15],S=l*h-c*d,E=a*h-c*f,v=a*d-l*f,R=o*h-c*u,A=o*d-l*u,L=o*f-a*u;return n*(x*S-m*E+p*v)-i*(_*S-m*R+p*A)+s*(_*E-x*R+p*L)-r*(_*v-x*A+m*L)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],x=e[13],m=e[14],p=e[15],S=n*a-i*o,E=n*l-s*o,v=n*c-r*o,R=i*l-s*a,A=i*c-r*a,L=s*c-r*l,y=u*x-f*_,P=u*m-d*_,B=u*p-h*_,F=f*m-d*x,H=f*p-h*x,ee=d*p-h*m,le=S*ee-E*H+v*F+R*B-A*P+L*y;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/le;return e[0]=(a*ee-l*H+c*F)*q,e[1]=(s*H-i*ee-r*F)*q,e[2]=(x*L-m*A+p*R)*q,e[3]=(d*A-f*L-h*R)*q,e[4]=(l*B-o*ee-c*P)*q,e[5]=(n*ee-s*B+r*P)*q,e[6]=(m*v-_*L-p*E)*q,e[7]=(u*L-d*v+h*E)*q,e[8]=(o*H-a*B+c*y)*q,e[9]=(i*B-n*H-r*y)*q,e[10]=(_*A-x*v+p*S)*q,e[11]=(f*v-u*A-h*S)*q,e[12]=(a*P-o*F-l*y)*q,e[13]=(n*F-i*P+s*y)*q,e[14]=(x*E-_*R-m*S)*q,e[15]=(u*R-f*E+d*S)*q,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,_=r*f,x=o*u,m=o*f,p=a*f,S=l*c,E=l*u,v=l*f,R=i.x,A=i.y,L=i.z;return s[0]=(1-(x+p))*R,s[1]=(h+v)*R,s[2]=(_-E)*R,s[3]=0,s[4]=(h-v)*A,s[5]=(1-(d+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(_+E)*L,s[9]=(m-S)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=nr.set(s[0],s[1],s[2]).length();const a=nr.set(s[4],s[5],s[6]).length(),l=nr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ei.copy(this);const c=1/o,u=1/a,f=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,n.setFromRotationMatrix(ei),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=bi,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),h=(i+s)/(i-s);let _,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===bi)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Co)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=bi,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),h=-(i+s)/(i-s);let _,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===bi)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===Co)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};rl.prototype.isMatrix4=!0;let Vt=rl;const nr=new Y,ei=new Vt,Xb=new Y(0,0,0),$b=new Y(1,1,1),os=new Y,ea=new Y,Vn=new Y,lh=new Vt,ch=new li;class Ji{constructor(e=0,n=0,i=0,s=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ch.setFromEuler(this),this.setFromQuaternion(ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class wf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qb=0;const uh=new Y,ir=new li,Ii=new Vt,ta=new Y,Zr=new Y,Yb=new Y,Kb=new li,fh=new Y(1,0,0),dh=new Y(0,1,0),hh=new Y(0,0,1),ph={type:"added"},Zb={type:"removed"},sr={type:"childadded",child:null},nc={type:"childremoved",child:null};class cn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new Y,n=new Ji,i=new li,s=new Y(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ct}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ir.setFromAxisAngle(e,n),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,n){return ir.setFromAxisAngle(e,n),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(fh,e)}rotateY(e){return this.rotateOnAxis(dh,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,n){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fh,e)}translateY(e){return this.translateOnAxis(dh,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ta.copy(e):ta.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Zr,ta,this.up):Ii.lookAt(ta,Zr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Ii),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ph),sr.child=e,this.dispatchEvent(sr),sr.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Zb),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ph),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,Yb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Kb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}cn.DEFAULT_UP=new Y(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jn extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jb={type:"move"};class ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},na={h:0,s:0,l:0};function sc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class gt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=St.workingColorSpace){return this.r=e,this.g=n,this.b=i,St.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=St.workingColorSpace){if(e=Ef(e,1),n=vt(n,0,1),i=vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=sc(o,r,e+1/3),this.g=sc(o,r,e),this.b=sc(o,r,e-1/3)}return St.colorSpaceToWorking(this,s),this}setStyle(e,n=Zn){function i(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=gg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return St.workingToColorSpace(_n.copy(this),e),Math.round(vt(_n.r*255,0,255))*65536+Math.round(vt(_n.g*255,0,255))*256+Math.round(vt(_n.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.workingToColorSpace(_n.copy(this),n);const i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=St.workingColorSpace){return St.workingToColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Zn){St.workingToColorSpace(_n.copy(this),e);const n=_n.r,i=_n.g,s=_n.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+n,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(as),e.getHSL(na);const i=_o(as.h,na.h,n),s=_o(as.s,na.s,n),r=_o(as.l,na.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new gt;gt.NAMES=gg;class _g extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ti=new Y,Ni=new Y,rc=new Y,Ui=new Y,rr=new Y,or=new Y,mh=new Y,oc=new Y,ac=new Y,lc=new Y,cc=new $t,uc=new $t,fc=new $t;class ii{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),ti.subVectors(e,n),s.cross(ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){ti.subVectors(s,n),Ni.subVectors(i,n),rc.subVectors(e,n);const o=ti.dot(ti),a=ti.dot(Ni),l=ti.dot(rc),c=Ni.dot(Ni),u=Ni.dot(rc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-h-_,_,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return cc.setScalar(0),uc.setScalar(0),fc.setScalar(0),cc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,i),fc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cc,r.x),o.addScaledVector(uc,r.y),o.addScaledVector(fc,r.z),o}static isFrontFacing(e,n,i,s){return ti.subVectors(i,n),Ni.subVectors(e,n),ti.cross(Ni).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ti.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;rr.subVectors(s,i),or.subVectors(r,i),oc.subVectors(e,i);const l=rr.dot(oc),c=or.dot(oc);if(l<=0&&c<=0)return n.copy(i);ac.subVectors(e,s);const u=rr.dot(ac),f=or.dot(ac);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(rr,o);lc.subVectors(e,r);const h=rr.dot(lc),_=or.dot(lc);if(_>=0&&h<=_)return n.copy(r);const x=h*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(or,a);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return mh.subVectors(r,s),a=(f-u)/(f-u+(h-_)),n.copy(s).addScaledVector(mh,a);const p=1/(m+x+d);return o=x*p,a=d*p,n.copy(i).addScaledVector(rr,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wo{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),sa.subVectors(this.max,jr),ar.subVectors(e.a,jr),lr.subVectors(e.b,jr),cr.subVectors(e.c,jr),ls.subVectors(lr,ar),cs.subVectors(cr,lr),Rs.subVectors(ar,cr);let n=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Rs.z,Rs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Rs.z,0,-Rs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Rs.y,Rs.x,0];return!dc(n,ar,lr,cr,sa)||(n=[1,0,0,0,1,0,0,0,1],!dc(n,ar,lr,cr,sa))?!1:(ra.crossVectors(ls,cs),n=[ra.x,ra.y,ra.z],dc(n,ar,lr,cr,sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ni=new Y,ia=new Wo,ar=new Y,lr=new Y,cr=new Y,ls=new Y,cs=new Y,Rs=new Y,jr=new Y,sa=new Y,ra=new Y,Cs=new Y;function dc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Cs.fromArray(t,r);const a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=e.dot(Cs),c=n.dot(Cs),u=i.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Jt=new Y,oa=new ot;let Jb=0;class Ai extends bs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=eh,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oa.fromBufferAttribute(this,n),oa.applyMatrix3(e),this.setXY(n,oa.x,oa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=gr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=gr(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=gr(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=gr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=gr(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array),r=wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class vg extends Ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xg extends Ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends Ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Qb=new Wo,Jr=new Y,hc=new Y;class Tl{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Qb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const n=Jr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Jr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(hc)),this.expandByPoint(Jr.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eE=0;const Kn=new Vt,pc=new cn,ur=new Y,Hn=new Wo,Qr=new Wo,an=new Y;class nn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xb(e)?xg:vg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,i){return Kn.makeTranslation(e,n,i),this.applyMatrix4(Kn),this}scale(e,n,i){return Kn.makeScale(e,n,i),this.applyMatrix4(Kn),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Hn.min,Qr.min),Hn.expandByPoint(an),an.addVectors(Hn.max,Qr.max),Hn.expandByPoint(an)):(Hn.expandByPoint(Qr.min),Hn.expandByPoint(Qr.max))}Hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),an.add(ur)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ai(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new Y,l[y]=new Y;const c=new Y,u=new Y,f=new Y,d=new ot,h=new ot,_=new ot,x=new Y,m=new Y;function p(y,P,B){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,B),d.fromBufferAttribute(r,y),h.fromBufferAttribute(r,P),_.fromBufferAttribute(r,B),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const F=1/(h.x*_.y-_.x*h.y);isFinite(F)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(F),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(F),a[y].add(x),a[P].add(x),a[B].add(x),l[y].add(m),l[P].add(m),l[B].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,P=S.length;y<P;++y){const B=S[y],F=B.start,H=B.count;for(let ee=F,le=F+H;ee<le;ee+=3)p(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const E=new Y,v=new Y,R=new Y,A=new Y;function L(y){R.fromBufferAttribute(s,y),A.copy(R);const P=a[y];E.copy(P),E.sub(R.multiplyScalar(R.dot(P))).normalize(),v.crossVectors(A,P);const F=v.dot(l[y])<0?-1:1;o.setXYZW(y,E.x,E.y,E.z,F)}for(let y=0,P=S.length;y<P;++y){const B=S[y],F=B.start,H=B.count;for(let ee=F,le=F+H;ee<le;ee+=3)L(e.getX(ee+0)),L(e.getX(ee+1)),L(e.getX(ee+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new Ai(d,u,f)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tE=0;class Gr extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=br,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){it(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){it(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(i.blending=this.blending),this.side!==ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kc&&(i.blendSrc=this.blendSrc),this.blendDst!==Zc&&(i.blendDst=this.blendDst),this.blendEquation!==Ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fi=new Y,mc=new Y,aa=new Y,us=new Y,gc=new Y,la=new Y,_c=new Y;class wl{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){mc.copy(e).add(n).multiplyScalar(.5),aa.copy(n).sub(e).normalize(),us.copy(this.origin).sub(mc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(aa),a=us.dot(this.direction),l=-us.dot(aa),c=us.lengthSq(),u=Math.abs(1-o*o);let f,d,h,_;if(u>0)if(f=o*l-a,d=o*a-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(mc).addScaledVector(aa,d),h}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,i,s,r){gc.subVectors(n,e),la.subVectors(i,e),_c.crossVectors(gc,la);let o=this.direction.dot(_c),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);const l=a*this.direction.dot(la.crossVectors(us,la));if(l<0)return null;const c=a*this.direction.dot(gc.cross(us));if(c<0||l+c>o)return null;const u=-a*us.dot(_c);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Do extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gh=new Vt,Ps=new wl,ca=new Tl,_h=new Y,ua=new Y,fa=new Y,da=new Y,vc=new Y,ha=new Y,vh=new Y,pa=new Y;class Ht extends cn{constructor(e=new nn,n=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(vc.fromBufferAttribute(f,e),o?ha.addScaledVector(vc,u):ha.addScaledVector(vc.sub(n),u))}n.add(ha)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(r),Ps.copy(e.ray).recast(e.near),!(ca.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(ca,_h)===null||Ps.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(gh.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(gh),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ps)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=o[m.materialIndex],S=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=S,R=E;v<R;v+=3){const A=a.getX(v),L=a.getX(v+1),y=a.getX(v+2);s=ma(this,p,e,i,c,u,f,A,L,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=_,p=x;m<p;m+=3){const S=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);s=ma(this,o,e,i,c,u,f,S,E,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=o[m.materialIndex],S=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=S,R=E;v<R;v+=3){const A=v,L=v+1,y=v+2;s=ma(this,p,e,i,c,u,f,A,L,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=_,p=x;m<p;m+=3){const S=m,E=m+1,v=m+2;s=ma(this,o,e,i,c,u,f,S,E,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function nE(t,e,n,i,s,r,o,a){let l;if(e.side===kn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ys,a),l===null)return null;pa.copy(a),pa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(pa);return c<n.near||c>n.far?null:{distance:c,point:pa.clone(),object:t}}function ma(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,ua),t.getVertexPosition(l,fa),t.getVertexPosition(c,da);const u=nE(t,e,n,i,ua,fa,da,vh);if(u){const f=new Y;ii.getBarycoord(vh,ua,fa,da,f),s&&(u.uv=ii.getInterpolatedAttribute(s,a,l,c,f,new ot)),r&&(u.uv1=ii.getInterpolatedAttribute(r,a,l,c,f,new ot)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};ii.getNormal(ua,fa,da,d.normal),u.face=d,u.barycoord=f}return u}class iE extends In{constructor(e=null,n=1,i=1,s,r,o,a,l,c=dn,u=dn,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xc=new Y,sE=new Y,rE=new ct;class ps{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=xc.subVectors(i,n).cross(sE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(xc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rE.getNormalMatrix(e),s=this.coplanarPoint(xc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new Tl,oE=new ot(.5,.5),ga=new Y;class Af{constructor(e=new ps,n=new ps,i=new ps,s=new ps,r=new ps,o=new ps){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],_=r[8],x=r[9],m=r[10],p=r[11],S=r[12],E=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-o,h-u,p-_,R-S).normalize(),s[1].setComponents(c+o,h+u,p+_,R+S).normalize(),s[2].setComponents(c+a,h+f,p+x,R+E).normalize(),s[3].setComponents(c-a,h-f,p-x,R-E).normalize(),i)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,h-d,p-m,R-v).normalize();else if(s[4].setComponents(c-l,h-d,p-m,R-v).normalize(),n===bi)s[5].setComponents(c+l,h+d,p+m,R+v).normalize();else if(n===Co)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const n=oE.distanceTo(e.center);return Ds.radius=.7071067811865476+n,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lo extends Gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nl=new Y,il=new Y,xh=new Vt,eo=new wl,_a=new Tl,yc=new Y,yh=new Y;class sl extends cn{constructor(e=new nn,n=new Lo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)nl.fromBufferAttribute(n,s-1),il.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=nl.distanceTo(il);e.setAttribute("lineDistance",new sn(i,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;xh.copy(s).invert(),eo.copy(e.ray).applyMatrix4(xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=h,m=_-1;x<m;x+=c){const p=u.getX(x),S=u.getX(x+1),E=va(this,e,eo,l,p,S,x);E&&n.push(E)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(h),p=va(this,e,eo,l,x,m,_-1);p&&n.push(p)}}else{const h=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=h,m=_-1;x<m;x+=c){const p=va(this,e,eo,l,x,x+1,x);p&&n.push(p)}if(this.isLineLoop){const x=va(this,e,eo,l,_-1,h,_-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function va(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(nl.fromBufferAttribute(a,s),il.fromBufferAttribute(a,r),n.distanceSqToSegment(nl,il,yc,yh)>i)return;yc.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(yc);if(!(c<e.near||c>e.far))return{distance:c,point:yh.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Sh=new Y,Mh=new Y;class aE extends sl{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Sh.fromBufferAttribute(n,s),Mh.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Sh.distanceTo(Mh);e.setAttribute("lineDistance",new sn(i,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yg extends In{constructor(e=[],n=qs,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Or extends In{constructor(e,n,i=Ci,s,r,o,a=dn,l=dn,c,u=ji,f=1){if(u!==ji&&u!==ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class lE extends Or{constructor(e,n=Ci,i=qs,s,r,o=dn,a=dn,l,c=ji){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sg extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qi extends nn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(f,2));function _(x,m,p,S,E,v,R,A,L,y,P){const B=v/L,F=R/y,H=v/2,ee=R/2,le=A/2,q=L+1,j=y+1;let G=0,re=0;const be=new Y;for(let Ce=0;Ce<j;Ce++){const ye=Ce*F-ee;for(let De=0;De<q;De++){const ze=De*B-H;be[x]=ze*S,be[m]=ye*E,be[p]=le,c.push(be.x,be.y,be.z),be[x]=0,be[m]=0,be[p]=A>0?1:-1,u.push(be.x,be.y,be.z),f.push(De/L),f.push(1-Ce/y),G+=1}}for(let Ce=0;Ce<y;Ce++)for(let ye=0;ye<L;ye++){const De=d+ye+q*Ce,ze=d+ye+q*(Ce+1),je=d+(ye+1)+q*(Ce+1),qe=d+(ye+1)+q*Ce;l.push(De,ze,qe),l.push(ze,je,qe),re+=6}a.addGroup(h,re,P),h+=re,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ks extends nn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let _=0;const x=[],m=i/2;let p=0;S(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new sn(f,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(h,2));function S(){const v=new Y,R=new Y;let A=0;const L=(n-e)/i;for(let y=0;y<=r;y++){const P=[],B=y/r,F=B*(n-e)+e;for(let H=0;H<=s;H++){const ee=H/s,le=ee*l+a,q=Math.sin(le),j=Math.cos(le);R.x=F*q,R.y=-B*i+m,R.z=F*j,f.push(R.x,R.y,R.z),v.set(q,L,j).normalize(),d.push(v.x,v.y,v.z),h.push(ee,1-B),P.push(_++)}x.push(P)}for(let y=0;y<s;y++)for(let P=0;P<r;P++){const B=x[P][y],F=x[P+1][y],H=x[P+1][y+1],ee=x[P][y+1];(e>0||P!==0)&&(u.push(B,F,ee),A+=3),(n>0||P!==r-1)&&(u.push(F,H,ee),A+=3)}c.addGroup(p,A,0),p+=A}function E(v){const R=_,A=new ot,L=new Y;let y=0;const P=v===!0?e:n,B=v===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,m*B,0),d.push(0,B,0),h.push(.5,.5),_++;const F=_;for(let H=0;H<=s;H++){const le=H/s*l+a,q=Math.cos(le),j=Math.sin(le);L.x=P*j,L.y=m*B,L.z=P*q,f.push(L.x,L.y,L.z),d.push(0,B,0),A.x=q*.5+.5,A.y=j*.5*B+.5,h.push(A.x,A.y),_++}for(let H=0;H<s;H++){const ee=R+H,le=F+H;v===!0?u.push(le,le+1,ee):u.push(le+1,le,ee),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends Ks{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wr extends nn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,h=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const S=p*d-o;for(let E=0;E<c;E++){const v=E*f-r;_.push(v,-S,0),x.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const E=S+c*p,v=S+c*(p+1),R=S+1+c*(p+1),A=S+1+c*p;h.push(E,v,A),h.push(v,R,A)}this.setIndex(h),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class No extends nn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new Y,d=new Y,h=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const S=[],E=p/i,v=o+E*a,R=e*Math.cos(v),A=Math.sqrt(e*e-R*R);let L=0;p===0&&o===0?L=.5/n:p===i&&l===Math.PI&&(L=-.5/n);for(let y=0;y<=n;y++){const P=y/n,B=s+P*r;f.x=-A*Math.cos(B),f.y=R,f.z=A*Math.sin(B),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(P+L,1-E),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<n;S++){const E=u[p][S+1],v=u[p][S],R=u[p+1][S],A=u[p+1][S+1];(p!==0||o>0)&&h.push(E,v,A),(p!==i-1||l<Math.PI)&&h.push(v,R,A)}this.setIndex(h),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Fr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(bh(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(bh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function An(t){const e={};for(let n=0;n<t.length;n++){const i=Fr(t[n]);for(const s in i)e[s]=i[s]}return e}function bh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function cE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const uE={clone:Fr,merge:An};var fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=dE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=cE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[i].value=new $t().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ct().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Vt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class hE extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hi extends Gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pE extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mE extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bg extends cn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Eg extends bg{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Sc=new Vt,Eh=new Y,Th=new Y;class gE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Af,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Eh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Eh),Th.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Th),n.updateMatrixWorld(),Sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Co||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xa=new Y,ya=new li,mi=new Y;class Tg extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xa,ya,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,mi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(xa,ya,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fs=new Y,wh=new ot,Ah=new ot;class Gn extends Tg{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,n){return this.getViewBounds(e,wh,Ah),n.subVectors(Ah,wh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Rf extends Tg{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _E extends gE{constructor(){super(new Rf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wg extends bg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new _E}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const fr=-90,dr=1;class vE extends cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gn(fr,dr,e,n);s.layers=this.layers,this.add(s);const r=new Gn(fr,dr,e,n);r.layers=this.layers,this.add(r);const o=new Gn(fr,dr,e,n);o.layers=this.layers,this.add(o);const a=new Gn(fr,dr,e,n);a.layers=this.layers,this.add(a);const l=new Gn(fr,dr,e,n);l.layers=this.layers,this.add(l);const c=new Gn(fr,dr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xE extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Rh=new Vt;class Ag{constructor(e,n,i=0,s=1/0){this.ray=new wl(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new wf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Mt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Rh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rh),this}intersectObject(e,n=!0,i=[]){return Fu(e,this,i,n),i.sort(Ch),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Fu(e[s],this,i,n);return i.sort(Ch),i}}function Ch(t,e){return t.distance-e.distance}function Fu(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)Fu(r[o],e,n,!0)}}class Ph{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Nf=class Nf{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Nf.prototype.isMatrix2=!0;let Dh=Nf;class Rg extends aE{constructor(e=10,n=10,i=4473924,s=8947848){i=new gt(i),s=new gt(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,h=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=d===r?i:s;x.toArray(c,h),h+=3,x.toArray(c,h),h+=3,x.toArray(c,h),h+=3,x.toArray(c,h),h+=3}const u=new nn;u.setAttribute("position",new sn(l,3)),u.setAttribute("color",new sn(c,3));const f=new Lo({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class yE extends bs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){it("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Lh(t,e,n,i){const s=SE(i);switch(n){case fg:return t*e;case hg:return t*e/s.components*s.byteLength;case xf:return t*e/s.components*s.byteLength;case Ys:return t*e*2/s.components*s.byteLength;case yf:return t*e*2/s.components*s.byteLength;case dg:return t*e*3/s.components*s.byteLength;case ri:return t*e*4/s.components*s.byteLength;case Sf:return t*e*4/s.components*s.byteLength;case La:case Ia:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Na:case Ua:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case au:case cu:return Math.max(t,16)*Math.max(e,8)/4;case ou:case lu:return Math.max(t,8)*Math.max(e,8)/2;case uu:case fu:case hu:case pu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case du:case ja:case mu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case vu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case wu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Au:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Pu:case Du:case Lu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Iu:case Nu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ja:case Uu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function SE(t){switch(t){case Wn:case ag:return{byteLength:1,components:1};case Ao:case lg:case Zi:return{byteLength:2,components:1};case _f:case vf:return{byteLength:2,components:4};case Ci:case gf:case Mi:return{byteLength:4,components:1};case cg:case ug:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mf}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function ME(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],x=f[h];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const x=f[h];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var bE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EE=`#ifdef USE_ALPHAHASH
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
#endif`,TE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CE=`#ifdef USE_AOMAP
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
#endif`,PE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DE=`#ifdef USE_BATCHING
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
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OE=`#ifdef USE_IRIDESCENCE
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
#endif`,FE=`#ifdef USE_BUMPMAP
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
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$E=`#define PI 3.141592653589793
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
} // validated`,qE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YE=`vec3 transformedNormal = objectNormal;
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
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QE="gl_FragColor = linearToOutputTexel( gl_FragColor );",eT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tT=`#ifdef USE_ENVMAP
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
#endif`,nT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uT=`#ifdef USE_GRADIENTMAP
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
}`,fT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mT=`#ifdef USE_ENVMAP
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
#endif`,gT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yT=`PhysicalMaterial material;
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
#endif`,ST=`uniform sampler2D dfgLUT;
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
}`,MT=`
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
#endif`,bT=`#if defined( RE_IndirectDiffuse )
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
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IT=`#if defined( USE_POINTS_UV )
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
#endif`,NT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kT=`#ifdef USE_MORPHTARGETS
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
#endif`,zT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
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
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ew=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lw=`float getShadowMask() {
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
}`,cw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uw=`#ifdef USE_SKINNING
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
#endif`,fw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_w=`#ifdef USE_TRANSMISSION
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
#endif`,vw=`#ifdef USE_TRANSMISSION
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
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ew=`uniform sampler2D t2D;
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
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ww=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`#include <common>
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
}`,Pw=`#if DEPTH_PACKING == 3200
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
}`,Dw=`#define DISTANCE
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
}`,Lw=`#define DISTANCE
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
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`uniform float scale;
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
}`,Ow=`uniform vec3 diffuse;
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
}`,Fw=`#include <common>
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
}`,Bw=`uniform vec3 diffuse;
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
}`,kw=`#define LAMBERT
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
}`,zw=`#define LAMBERT
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
}`,Vw=`#define MATCAP
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
}`,Hw=`#define MATCAP
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
}`,Gw=`#define NORMAL
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
}`,Ww=`#define NORMAL
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
}`,Xw=`#define PHONG
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
}`,$w=`#define PHONG
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
}`,qw=`#define STANDARD
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
}`,Yw=`#define STANDARD
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
}`,Kw=`#define TOON
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
}`,Zw=`#define TOON
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
}`,jw=`uniform float size;
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
}`,Jw=`uniform vec3 diffuse;
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
}`,Qw=`#include <common>
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
}`,eA=`uniform vec3 color;
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
}`,tA=`uniform float rotation;
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
}`,nA=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:bE,alphahash_pars_fragment:EE,alphamap_fragment:TE,alphamap_pars_fragment:wE,alphatest_fragment:AE,alphatest_pars_fragment:RE,aomap_fragment:CE,aomap_pars_fragment:PE,batching_pars_vertex:DE,batching_vertex:LE,begin_vertex:IE,beginnormal_vertex:NE,bsdfs:UE,iridescence_fragment:OE,bumpmap_pars_fragment:FE,clipping_planes_fragment:BE,clipping_planes_pars_fragment:kE,clipping_planes_pars_vertex:zE,clipping_planes_vertex:VE,color_fragment:HE,color_pars_fragment:GE,color_pars_vertex:WE,color_vertex:XE,common:$E,cube_uv_reflection_fragment:qE,defaultnormal_vertex:YE,displacementmap_pars_vertex:KE,displacementmap_vertex:ZE,emissivemap_fragment:jE,emissivemap_pars_fragment:JE,colorspace_fragment:QE,colorspace_pars_fragment:eT,envmap_fragment:tT,envmap_common_pars_fragment:nT,envmap_pars_fragment:iT,envmap_pars_vertex:sT,envmap_physical_pars_fragment:mT,envmap_vertex:rT,fog_vertex:oT,fog_pars_vertex:aT,fog_fragment:lT,fog_pars_fragment:cT,gradientmap_pars_fragment:uT,lightmap_pars_fragment:fT,lights_lambert_fragment:dT,lights_lambert_pars_fragment:hT,lights_pars_begin:pT,lights_toon_fragment:gT,lights_toon_pars_fragment:_T,lights_phong_fragment:vT,lights_phong_pars_fragment:xT,lights_physical_fragment:yT,lights_physical_pars_fragment:ST,lights_fragment_begin:MT,lights_fragment_maps:bT,lights_fragment_end:ET,lightprobes_pars_fragment:TT,logdepthbuf_fragment:wT,logdepthbuf_pars_fragment:AT,logdepthbuf_pars_vertex:RT,logdepthbuf_vertex:CT,map_fragment:PT,map_pars_fragment:DT,map_particle_fragment:LT,map_particle_pars_fragment:IT,metalnessmap_fragment:NT,metalnessmap_pars_fragment:UT,morphinstance_vertex:OT,morphcolor_vertex:FT,morphnormal_vertex:BT,morphtarget_pars_vertex:kT,morphtarget_vertex:zT,normal_fragment_begin:VT,normal_fragment_maps:HT,normal_pars_fragment:GT,normal_pars_vertex:WT,normal_vertex:XT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:YT,clearcoat_pars_fragment:KT,iridescence_pars_fragment:ZT,opaque_fragment:jT,packing:JT,premultiplied_alpha_fragment:QT,project_vertex:ew,dithering_fragment:tw,dithering_pars_fragment:nw,roughnessmap_fragment:iw,roughnessmap_pars_fragment:sw,shadowmap_pars_fragment:rw,shadowmap_pars_vertex:ow,shadowmap_vertex:aw,shadowmask_pars_fragment:lw,skinbase_vertex:cw,skinning_pars_vertex:uw,skinning_vertex:fw,skinnormal_vertex:dw,specularmap_fragment:hw,specularmap_pars_fragment:pw,tonemapping_fragment:mw,tonemapping_pars_fragment:gw,transmission_fragment:_w,transmission_pars_fragment:vw,uv_pars_fragment:xw,uv_pars_vertex:yw,uv_vertex:Sw,worldpos_vertex:Mw,background_vert:bw,background_frag:Ew,backgroundCube_vert:Tw,backgroundCube_frag:ww,cube_vert:Aw,cube_frag:Rw,depth_vert:Cw,depth_frag:Pw,distance_vert:Dw,distance_frag:Lw,equirect_vert:Iw,equirect_frag:Nw,linedashed_vert:Uw,linedashed_frag:Ow,meshbasic_vert:Fw,meshbasic_frag:Bw,meshlambert_vert:kw,meshlambert_frag:zw,meshmatcap_vert:Vw,meshmatcap_frag:Hw,meshnormal_vert:Gw,meshnormal_frag:Ww,meshphong_vert:Xw,meshphong_frag:$w,meshphysical_vert:qw,meshphysical_frag:Yw,meshtoon_vert:Kw,meshtoon_frag:Zw,points_vert:jw,points_frag:Jw,shadow_vert:Qw,shadow_frag:eA,sprite_vert:tA,sprite_frag:nA},He={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},yi={basic:{uniforms:An([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:An([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:An([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:An([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:An([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new gt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:An([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:An([He.points,He.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:An([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:An([He.common,He.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:An([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:An([He.sprite,He.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:An([He.common,He.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:An([He.lights,He.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};yi.physical={uniforms:An([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Sa={r:0,b:0,g:0},iA=new Vt,Pg=new ct;Pg.set(-1,0,0,0,1,0,0,0,1);function sA(t,e,n,i,s,r){const o=new gt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function h(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const v=S.backgroundBlurriness>0;E=e.get(E,v)}return E}function _(S){let E=!1;const v=h(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),E=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(S,E){const v=h(E);v&&(v.isCubeTexture||v.mapping===El)?(c===void 0&&(c=new Ht(new Qi(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Fr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iA.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pg),c.material.toneMapped=St.getTransfer(v.colorSpace)!==Ct,(u!==v||f!==v.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ht(new Wr(2,2),new Pi({name:"BackgroundMaterial",uniforms:Fr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=St.getTransfer(v.colorSpace)!==Ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(Sa,Mg(t)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:_,addToRenderList:x,dispose:p}}function rA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(F,H,ee,le,q){let j=!1;const G=f(F,le,ee,H);r!==G&&(r=G,c(r.object)),j=h(F,le,ee,q),j&&_(F,le,ee,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(F,H,ee,le),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(F){return t.bindVertexArray(F)}function u(F){return t.deleteVertexArray(F)}function f(F,H,ee,le){const q=le.wireframe===!0;let j=i[H.id];j===void 0&&(j={},i[H.id]=j);const G=F.isInstancedMesh===!0?F.id:0;let re=j[G];re===void 0&&(re={},j[G]=re);let be=re[ee.id];be===void 0&&(be={},re[ee.id]=be);let Ce=be[q];return Ce===void 0&&(Ce=d(l()),be[q]=Ce),Ce}function d(F){const H=[],ee=[],le=[];for(let q=0;q<n;q++)H[q]=0,ee[q]=0,le[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ee,attributeDivisors:le,object:F,attributes:{},index:null}}function h(F,H,ee,le){const q=r.attributes,j=H.attributes;let G=0;const re=ee.getAttributes();for(const be in re)if(re[be].location>=0){const ye=q[be];let De=j[be];if(De===void 0&&(be==="instanceMatrix"&&F.instanceMatrix&&(De=F.instanceMatrix),be==="instanceColor"&&F.instanceColor&&(De=F.instanceColor)),ye===void 0||ye.attribute!==De||De&&ye.data!==De.data)return!0;G++}return r.attributesNum!==G||r.index!==le}function _(F,H,ee,le){const q={},j=H.attributes;let G=0;const re=ee.getAttributes();for(const be in re)if(re[be].location>=0){let ye=j[be];ye===void 0&&(be==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),be==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor));const De={};De.attribute=ye,ye&&ye.data&&(De.data=ye.data),q[be]=De,G++}r.attributes=q,r.attributesNum=G,r.index=le}function x(){const F=r.newAttributes;for(let H=0,ee=F.length;H<ee;H++)F[H]=0}function m(F){p(F,0)}function p(F,H){const ee=r.newAttributes,le=r.enabledAttributes,q=r.attributeDivisors;ee[F]=1,le[F]===0&&(t.enableVertexAttribArray(F),le[F]=1),q[F]!==H&&(t.vertexAttribDivisor(F,H),q[F]=H)}function S(){const F=r.newAttributes,H=r.enabledAttributes;for(let ee=0,le=H.length;ee<le;ee++)H[ee]!==F[ee]&&(t.disableVertexAttribArray(ee),H[ee]=0)}function E(F,H,ee,le,q,j,G){G===!0?t.vertexAttribIPointer(F,H,ee,q,j):t.vertexAttribPointer(F,H,ee,le,q,j)}function v(F,H,ee,le){x();const q=le.attributes,j=ee.getAttributes(),G=H.defaultAttributeValues;for(const re in j){const be=j[re];if(be.location>=0){let Ce=q[re];if(Ce===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(Ce=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(Ce=F.instanceColor)),Ce!==void 0){const ye=Ce.normalized,De=Ce.itemSize,ze=e.get(Ce);if(ze===void 0)continue;const je=ze.buffer,qe=ze.type,K=ze.bytesPerElement,U=qe===t.INT||qe===t.UNSIGNED_INT||Ce.gpuType===gf;if(Ce.isInterleavedBufferAttribute){const Z=Ce.data,ce=Z.stride,Ae=Ce.offset;if(Z.isInstancedInterleavedBuffer){for(let Pe=0;Pe<be.locationSize;Pe++)p(be.location+Pe,Z.meshPerAttribute);F.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Pe=0;Pe<be.locationSize;Pe++)m(be.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Pe=0;Pe<be.locationSize;Pe++)E(be.location+Pe,De/be.locationSize,qe,ye,ce*K,(Ae+De/be.locationSize*Pe)*K,U)}else{if(Ce.isInstancedBufferAttribute){for(let Z=0;Z<be.locationSize;Z++)p(be.location+Z,Ce.meshPerAttribute);F.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Z=0;Z<be.locationSize;Z++)m(be.location+Z);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Z=0;Z<be.locationSize;Z++)E(be.location+Z,De/be.locationSize,qe,ye,De*K,De/be.locationSize*Z*K,U)}}else if(G!==void 0){const ye=G[re];if(ye!==void 0)switch(ye.length){case 2:t.vertexAttrib2fv(be.location,ye);break;case 3:t.vertexAttrib3fv(be.location,ye);break;case 4:t.vertexAttrib4fv(be.location,ye);break;default:t.vertexAttrib1fv(be.location,ye)}}}}S()}function R(){P();for(const F in i){const H=i[F];for(const ee in H){const le=H[ee];for(const q in le){const j=le[q];for(const G in j)u(j[G].object),delete j[G];delete le[q]}}delete i[F]}}function A(F){if(i[F.id]===void 0)return;const H=i[F.id];for(const ee in H){const le=H[ee];for(const q in le){const j=le[q];for(const G in j)u(j[G].object),delete j[G];delete le[q]}}delete i[F.id]}function L(F){for(const H in i){const ee=i[H];for(const le in ee){const q=ee[le];if(q[F.id]===void 0)continue;const j=q[F.id];for(const G in j)u(j[G].object),delete j[G];delete q[F.id]}}}function y(F){for(const H in i){const ee=i[H],le=F.isInstancedMesh===!0?F.id:0,q=ee[le];if(q!==void 0){for(const j in q){const G=q[j];for(const re in G)u(G[re].object),delete G[re];delete q[j]}delete ee[le],Object.keys(ee).length===0&&delete i[H]}}}function P(){B(),o=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function oA(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function aA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==ri&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const y=L===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Wn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Mi&&!y)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,maxSamples:R,samples:A}}function lA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ps,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,E=S*4;let v=p.clippingState||null;l.value=v,v=u(_,d,E,h);for(let R=0;R!==E;++R)v[R]=n[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=h+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=h;E!==x;++E,v+=4)o.copy(f[E]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const vs=4,Ih=[.125,.215,.35,.446,.526,.582],Us=20,cA=256,to=new Rf,Nh=new gt;let Mc=null,bc=0,Ec=0,Tc=!1;const uA=new Y;class Uh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=uA}=r;Mc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mc,bc,Ec),this._renderer.xr.enabled=Tc,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Zi,format:ri,colorSpace:Qa,depthBuffer:!1},s=Oh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fA(r)),this._blurMaterial=hA(r,e,n),this._ggxMaterial=dA(r,e,n)}return s}_compileMaterial(e){const n=new Ht(new nn,e);this._renderer.compile(n,to)}_sceneToCubeUV(e,n,i,s,r){const l=new Gn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Nh),f.toneMapping=Ti,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new Qi,new Do({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Nh),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const R=this._cubeSize;hr(s,v*R,E>2?R:0,R,R),f.setRenderTarget(s),p&&f.render(x,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=S}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===qs||e.mapping===Ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;hr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,to)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-vs?i-_+vs:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-n,hr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,to),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,hr(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(a,to)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Us-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Us;m>Us&&it(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);const p=[];let S=0;for(let L=0;L<Us;++L){const y=L/x,P=Math.exp(-y*y/2);p.push(P),L===0?S+=P:L<m&&(S+=2*P)}for(let L=0;L<p.length;L++)p[L]=p[L]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const v=this._sizeLods[s],R=3*v*(s>E-vs?s-E+vs:0),A=4*(this._cubeSize-v);hr(n,R,A,3*v,2*v),l.setRenderTarget(n),l.render(f,to)}}function fA(t){const e=[],n=[],i=[];let s=t;const r=t-vs+1+Ih.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-vs?l=Ih[o-t+vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,x=3,m=2,p=1,S=new Float32Array(x*_*h),E=new Float32Array(m*_*h),v=new Float32Array(p*_*h);for(let A=0;A<h;A++){const L=A%3*2/3-1,y=A>2?0:-1,P=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];S.set(P,x*_*A),E.set(d,m*_*A);const B=[A,A,A,A,A,A];v.set(B,p*_*A)}const R=new nn;R.setAttribute("position",new Ai(S,x)),R.setAttribute("uv",new Ai(E,m)),R.setAttribute("faceIndex",new Ai(v,p)),i.push(new Ht(R,null)),s>vs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Oh(t,e,n){const i=new wi(t,e,n);return i.texture.mapping=El,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function dA(t,e,n){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function hA(t,e,n){const i=new Float32Array(Us),s=new Y(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Fh(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Bh(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}class Dg extends wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new yg(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qi(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:Xi});r.uniforms.tEquirect.value=n;const o=new Ht(s,r),a=n.minFilter;return n.minFilter===Bs&&(n.minFilter=yn),new vE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function pA(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Kl||h===Zl)if(e.has(d)){const _=e.get(d).texture;return a(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const x=new Dg(_.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,_=h===Kl||h===Zl,x=h===qs||h===Ur;if(_||x){let m=n.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Uh(t)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return _&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new Uh(t)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===Kl?d.mapping=qs:h===Zl&&(d.mapping=Ur),d}function l(d){let h=0;const _=6;for(let x=0;x<_;x++)d[x]!==void 0&&h++;return h===_}function c(d){const h=d.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const _=n.get(h);_!==void 0&&(n.delete(h),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function mA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Er("WebGLRenderer: "+i+" extension not supported."),s}}}function gA(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let x=0;if(_===void 0)return;if(h!==null){const S=h.array;x=h.version;for(let E=0,v=S.length;E<v;E+=3){const R=S[E+0],A=S[E+1],L=S[E+2];d.push(R,A,A,L,L,R)}}else{const S=_.array;x=_.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const R=E+0,A=E+1,L=E+2;d.push(R,A,A,L,L,R)}}const m=new(_.count>=65535?xg:vg)(d,1);m.version=x;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function _A(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*o),n.update(d,i,1)}function c(f,d,h){h!==0&&(t.drawElementsInstanced(i,d,r,f*o,h),n.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,h);let x=0;for(let m=0;m<h;m++)x+=d[m];n.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function vA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:Mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function xA(t,e,n){const i=new WeakMap,s=new $t;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let B=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",B)};var h=B;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*A*4*f),y=new mg(L,R,A,f);y.type=Mi,y.needsUpdate=!0;const P=v*4;for(let F=0;F<f;F++){const H=p[F],ee=S[F],le=E[F],q=R*A*4*F;for(let j=0;j<H.count;j++){const G=j*P;_===!0&&(s.fromBufferAttribute(H,j),L[q+G+0]=s.x,L[q+G+1]=s.y,L[q+G+2]=s.z,L[q+G+3]=0),x===!0&&(s.fromBufferAttribute(ee,j),L[q+G+4]=s.x,L[q+G+5]=s.y,L[q+G+6]=s.z,L[q+G+7]=0),m===!0&&(s.fromBufferAttribute(le,j),L[q+G+8]=s.x,L[q+G+9]=s.y,L[q+G+10]=s.z,L[q+G+11]=le.itemSize===4?s.w:1)}}d={count:f,texture:y,size:new ot(R,A)},i.set(a,d),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function yA(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const SA={[Qm]:"LINEAR_TONE_MAPPING",[eg]:"REINHARD_TONE_MAPPING",[tg]:"CINEON_TONE_MAPPING",[ng]:"ACES_FILMIC_TONE_MAPPING",[sg]:"AGX_TONE_MAPPING",[rg]:"NEUTRAL_TONE_MAPPING",[ig]:"CUSTOM_TONE_MAPPING"};function MA(t,e,n,i,s,r){const o=new wi(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Or(e,n):void 0}),a=new wi(e,n,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),l=new nn;l.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new sn([0,2,0,0,2,0],2));const c=new hE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ht(l,c),f=new Rf(-1,1,1,-1,0,1);let d=null,h=null,_=!1,x,m=null,p=[],S=!1;this.setSize=function(E,v){o.setSize(E,v),a.setSize(E,v);for(let R=0;R<p.length;R++){const A=p[R];A.setSize&&A.setSize(E,v)}},this.setEffects=function(E){p=E,S=p.length>0&&p[0].isRenderPass===!0;const v=o.width,R=o.height;for(let A=0;A<p.length;A++){const L=p[A];L.setSize&&L.setSize(v,R)}},this.begin=function(E,v){if(_||E.toneMapping===Ti&&p.length===0)return!1;if(m=v,v!==null){const R=v.width,A=v.height;(o.width!==R||o.height!==A)&&this.setSize(R,A)}return S===!1&&E.setRenderTarget(o),x=E.toneMapping,E.toneMapping=Ti,!0},this.hasRenderPass=function(){return S},this.end=function(E,v){E.toneMapping=x,_=!0;let R=o,A=a;for(let L=0;L<p.length;L++){const y=p[L];if(y.enabled!==!1&&(y.render(E,A,R,v),y.needsSwap!==!1)){const P=R;R=A,A=P}}if(d!==E.outputColorSpace||h!==E.toneMapping){d=E.outputColorSpace,h=E.toneMapping,c.defines={},St.getTransfer(d)===Ct&&(c.defines.SRGB_TRANSFER="");const L=SA[h];L&&(c.defines[L]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=R.texture,E.setRenderTarget(m),E.render(u,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const Lg=new In,Bu=new Or(1,1),Ig=new mg,Ng=new Wb,Ug=new yg,kh=[],zh=[],Vh=new Float32Array(16),Hh=new Float32Array(9),Gh=new Float32Array(4);function Xr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function rn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function on(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rl(t,e){let n=zh[e];n===void 0&&(n=new Int32Array(e),zh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2fv(this.addr,e),on(n,e)}}function TA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;t.uniform3fv(this.addr,e),on(n,e)}}function wA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4fv(this.addr,e),on(n,e)}}function AA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),on(n,e)}else{if(rn(n,i))return;Gh.set(i),t.uniformMatrix2fv(this.addr,!1,Gh),on(n,i)}}function RA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),on(n,e)}else{if(rn(n,i))return;Hh.set(i),t.uniformMatrix3fv(this.addr,!1,Hh),on(n,i)}}function CA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),on(n,e)}else{if(rn(n,i))return;Vh.set(i),t.uniformMatrix4fv(this.addr,!1,Vh),on(n,i)}}function PA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2iv(this.addr,e),on(n,e)}}function LA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;t.uniform3iv(this.addr,e),on(n,e)}}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4iv(this.addr,e),on(n,e)}}function NA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2uiv(this.addr,e),on(n,e)}}function OA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;t.uniform3uiv(this.addr,e),on(n,e)}}function FA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4uiv(this.addr,e),on(n,e)}}function BA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Bu.compareFunction=n.isReversedDepthBuffer()?bf:Mf,r=Bu):r=Lg,n.setTexture2D(e||r,s)}function kA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Ng,s)}function zA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Ug,s)}function VA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Ig,s)}function HA(t){switch(t){case 5126:return bA;case 35664:return EA;case 35665:return TA;case 35666:return wA;case 35674:return AA;case 35675:return RA;case 35676:return CA;case 5124:case 35670:return PA;case 35667:case 35671:return DA;case 35668:case 35672:return LA;case 35669:case 35673:return IA;case 5125:return NA;case 36294:return UA;case 36295:return OA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return VA}}function GA(t,e){t.uniform1fv(this.addr,e)}function WA(t,e){const n=Xr(e,this.size,2);t.uniform2fv(this.addr,n)}function XA(t,e){const n=Xr(e,this.size,3);t.uniform3fv(this.addr,n)}function $A(t,e){const n=Xr(e,this.size,4);t.uniform4fv(this.addr,n)}function qA(t,e){const n=Xr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YA(t,e){const n=Xr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KA(t,e){const n=Xr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZA(t,e){t.uniform1iv(this.addr,e)}function jA(t,e){t.uniform2iv(this.addr,e)}function JA(t,e){t.uniform3iv(this.addr,e)}function QA(t,e){t.uniform4iv(this.addr,e)}function e1(t,e){t.uniform1uiv(this.addr,e)}function t1(t,e){t.uniform2uiv(this.addr,e)}function n1(t,e){t.uniform3uiv(this.addr,e)}function i1(t,e){t.uniform4uiv(this.addr,e)}function s1(t,e,n){const i=this.cache,s=e.length,r=Rl(n,s);rn(i,r)||(t.uniform1iv(this.addr,r),on(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Bu:o=Lg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function r1(t,e,n){const i=this.cache,s=e.length,r=Rl(n,s);rn(i,r)||(t.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Ng,r[o])}function o1(t,e,n){const i=this.cache,s=e.length,r=Rl(n,s);rn(i,r)||(t.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Ug,r[o])}function a1(t,e,n){const i=this.cache,s=e.length,r=Rl(n,s);rn(i,r)||(t.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Ig,r[o])}function l1(t){switch(t){case 5126:return GA;case 35664:return WA;case 35665:return XA;case 35666:return $A;case 35674:return qA;case 35675:return YA;case 35676:return KA;case 5124:case 35670:return ZA;case 35667:case 35671:return jA;case 35668:case 35672:return JA;case 35669:case 35673:return QA;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}class c1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=HA(n.type)}}class u1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=l1(n.type)}}class f1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function Wh(t,e){t.seq.push(e),t.map[e.id]=e}function d1(t,e,n){const i=t.name,s=i.length;for(wc.lastIndex=0;;){const r=wc.exec(i),o=wc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wh(n,c===void 0?new c1(a,t,e):new u1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new f1(a),Wh(n,f)),n=f}}}class Fa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);d1(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Xh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const h1=37297;let p1=0;function m1(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const $h=new ct;function g1(t){St._getMatrix($h,St.workingColorSpace,t);const e=`mat3( ${$h.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(t)){case el:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function qh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+m1(t.getShaderSource(e),a)}else return r}function _1(t,e){const n=g1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const v1={[Qm]:"Linear",[eg]:"Reinhard",[tg]:"Cineon",[ng]:"ACESFilmic",[sg]:"AgX",[rg]:"Neutral",[ig]:"Custom"};function x1(t,e){const n=v1[e];return n===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ma=new Y;function y1(){St.getLuminanceCoefficients(Ma);const t=Ma.x.toFixed(4),e=Ma.y.toFixed(4),n=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function M1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function b1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function oo(t){return t!==""}function Yh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(t){return t.replace(E1,w1)}const T1=new Map;function w1(t,e){let n=mt[e];if(n===void 0){const i=T1.get(e);if(i!==void 0)n=mt[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ku(n)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(t){return t.replace(A1,R1)}function R1(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const C1={[Da]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function P1(t){return C1[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const D1={[qs]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[El]:"ENVMAP_TYPE_CUBE_UV"};function L1(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":D1[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const I1={[Ur]:"ENVMAP_MODE_REFRACTION"};function N1(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":I1[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const U1={[Jm]:"ENVMAP_BLENDING_MULTIPLY",[lb]:"ENVMAP_BLENDING_MIX",[cb]:"ENVMAP_BLENDING_ADD"};function O1(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":U1[t.combine]||"ENVMAP_BLENDING_NONE"}function F1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function B1(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=P1(n),c=L1(n),u=N1(n),f=O1(n),d=F1(n),h=S1(n),_=M1(r),x=s.createProgram();let m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(oo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(oo).join(`
`),p.length>0&&(p+=`
`)):(m=[jh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),p=[jh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?mt.tonemapping_pars_fragment:"",n.toneMapping!==Ti?x1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,_1("linearToOutputTexel",n.outputColorSpace),y1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oo).join(`
`)),o=ku(o),o=Yh(o,n),o=Kh(o,n),a=ku(a),a=Yh(a,n),a=Kh(a,n),o=Zh(o),a=Zh(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+o,v=S+p+a,R=Xh(s,s.VERTEX_SHADER,E),A=Xh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,R),s.attachShader(x,A),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(F){if(t.debug.checkShaderErrors){const H=s.getProgramInfoLog(x)||"",ee=s.getShaderInfoLog(R)||"",le=s.getShaderInfoLog(A)||"",q=H.trim(),j=ee.trim(),G=le.trim();let re=!0,be=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,R,A);else{const Ce=qh(s,R,"vertex"),ye=qh(s,A,"fragment");Mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+Ce+`
`+ye)}else q!==""?it("WebGLProgram: Program Info Log:",q):(j===""||G==="")&&(be=!1);be&&(F.diagnostics={runnable:re,programLog:q,vertexShader:{log:j,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(R),s.deleteShader(A),y=new Fa(s,x),P=b1(s,x)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let P;this.getAttributes=function(){return P===void 0&&L(this),P};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(x,h1)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let k1=0;class z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new V1(e),n.set(e,i)),i}}class V1{constructor(e){this.id=k1++,this.code=e,this.usedTimes=0}}function H1(t){return t===Ys||t===ja||t===Ja}function G1(t,e,n,i,s,r){const o=new wf,a=new z1,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,P,B,F,H,ee){const le=F.fog,q=H.geometry,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,re=e.get(y.envMap||j,G),be=re&&re.mapping===El?re.image.height:null,Ce=h[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&it("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ye=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,De=ye!==void 0?ye.length:0;let ze=0;q.morphAttributes.position!==void 0&&(ze=1),q.morphAttributes.normal!==void 0&&(ze=2),q.morphAttributes.color!==void 0&&(ze=3);let je,qe,K,U;if(Ce){const Ze=yi[Ce];je=Ze.vertexShader,qe=Ze.fragmentShader}else{je=y.vertexShader,qe=y.fragmentShader;const Ze=a.getVertexShaderStage(y),Dt=a.getFragmentShaderStage(y);a.update(y,Ze,Dt),K=Ze.id,U=Dt.id}const Z=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),Ae=H.isInstancedMesh===!0,Pe=H.isBatchedMesh===!0,C=!!y.map,D=!!y.matcap,k=!!re,Q=!!y.aoMap,V=!!y.lightMap,te=!!y.bumpMap&&y.wireframe===!1,Te=!!y.normalMap,xe=!!y.displacementMap,ve=!!y.emissiveMap,ue=!!y.metalnessMap,Fe=!!y.roughnessMap,I=y.anisotropy>0,Le=y.clearcoat>0,Be=y.dispersion>0,w=y.iridescence>0,g=y.sheen>0,T=y.transmission>0,O=I&&!!y.anisotropyMap,N=Le&&!!y.clearcoatMap,de=Le&&!!y.clearcoatNormalMap,pe=Le&&!!y.clearcoatRoughnessMap,X=w&&!!y.iridescenceMap,se=w&&!!y.iridescenceThicknessMap,ge=g&&!!y.sheenColorMap,we=g&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,Re=!!y.specularColorMap,Me=!!y.specularIntensityMap,Ue=T&&!!y.transmissionMap,Ye=T&&!!y.thicknessMap,z=!!y.gradientMap,Ie=!!y.alphaMap,_e=y.alphaTest>0,Oe=!!y.alphaHash,Ne=!!y.extensions;let Se=Ti;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Se=t.toneMapping);const Je={shaderID:Ce,shaderType:y.type,shaderName:y.name,vertexShader:je,fragmentShader:qe,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:U,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&H._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&H.instanceColor!==null,instancingMorph:Ae&&H.morphTexture!==null,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:C,matcap:D,envMap:k,envMapMode:k&&re.mapping,envMapCubeUVHeight:be,aoMap:Q,lightMap:V,bumpMap:te,normalMap:Te,displacementMap:xe,emissiveMap:ve,normalMapObjectSpace:Te&&y.normalMapType===db,normalMapTangentSpace:Te&&y.normalMapType===Ou,packedNormalMap:Te&&y.normalMapType===Ou&&H1(y.normalMap.format),metalnessMap:ue,roughnessMap:Fe,anisotropy:I,anisotropyMap:O,clearcoat:Le,clearcoatMap:N,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,dispersion:Be,iridescence:w,iridescenceMap:X,iridescenceThicknessMap:se,sheen:g,sheenColorMap:ge,sheenRoughnessMap:we,specularMap:Ee,specularColorMap:Re,specularIntensityMap:Me,transmission:T,transmissionMap:Ue,thicknessMap:Ye,gradientMap:z,opaque:y.transparent===!1&&y.blending===br&&y.alphaToCoverage===!1,alphaMap:Ie,alphaTest:_e,alphaHash:Oe,combine:y.combine,mapUv:C&&_(y.map.channel),aoMapUv:Q&&_(y.aoMap.channel),lightMapUv:V&&_(y.lightMap.channel),bumpMapUv:te&&_(y.bumpMap.channel),normalMapUv:Te&&_(y.normalMap.channel),displacementMapUv:xe&&_(y.displacementMap.channel),emissiveMapUv:ve&&_(y.emissiveMap.channel),metalnessMapUv:ue&&_(y.metalnessMap.channel),roughnessMapUv:Fe&&_(y.roughnessMap.channel),anisotropyMapUv:O&&_(y.anisotropyMap.channel),clearcoatMapUv:N&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(y.sheenRoughnessMap.channel),specularMapUv:Ee&&_(y.specularMap.channel),specularColorMapUv:Re&&_(y.specularColorMap.channel),specularIntensityMapUv:Me&&_(y.specularIntensityMap.channel),transmissionMapUv:Ue&&_(y.transmissionMap.channel),thicknessMapUv:Ye&&_(y.thicknessMap.channel),alphaMapUv:Ie&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Te||I),vertexNormals:!!q.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(C||Ie),fog:!!le,useFog:y.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||q.attributes.normal===void 0&&Te===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:ze,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:Se,decodeVideoTexture:C&&y.map.isVideoTexture===!0&&St.getTransfer(y.map.colorSpace)===Ct,decodeVideoTextureEmissive:ve&&y.emissiveMap.isVideoTexture===!0&&St.getTransfer(y.emissiveMap.colorSpace)===Ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===kn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&y.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function m(y){const P=[];if(y.shaderID?P.push(y.shaderID):(P.push(y.customVertexShaderID),P.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)P.push(B),P.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(p(P,y),S(P,y),P.push(t.outputColorSpace)),P.push(y.customProgramCacheKey),P.join()}function p(y,P){y.push(P.precision),y.push(P.outputColorSpace),y.push(P.envMapMode),y.push(P.envMapCubeUVHeight),y.push(P.mapUv),y.push(P.alphaMapUv),y.push(P.lightMapUv),y.push(P.aoMapUv),y.push(P.bumpMapUv),y.push(P.normalMapUv),y.push(P.displacementMapUv),y.push(P.emissiveMapUv),y.push(P.metalnessMapUv),y.push(P.roughnessMapUv),y.push(P.anisotropyMapUv),y.push(P.clearcoatMapUv),y.push(P.clearcoatNormalMapUv),y.push(P.clearcoatRoughnessMapUv),y.push(P.iridescenceMapUv),y.push(P.iridescenceThicknessMapUv),y.push(P.sheenColorMapUv),y.push(P.sheenRoughnessMapUv),y.push(P.specularMapUv),y.push(P.specularColorMapUv),y.push(P.specularIntensityMapUv),y.push(P.transmissionMapUv),y.push(P.thicknessMapUv),y.push(P.combine),y.push(P.fogExp2),y.push(P.sizeAttenuation),y.push(P.morphTargetsCount),y.push(P.morphAttributeCount),y.push(P.numDirLights),y.push(P.numPointLights),y.push(P.numSpotLights),y.push(P.numSpotLightMaps),y.push(P.numHemiLights),y.push(P.numRectAreaLights),y.push(P.numDirLightShadows),y.push(P.numPointLightShadows),y.push(P.numSpotLightShadows),y.push(P.numSpotLightShadowsWithMaps),y.push(P.numLightProbes),y.push(P.shadowMapType),y.push(P.toneMapping),y.push(P.numClippingPlanes),y.push(P.numClipIntersection),y.push(P.depthPacking)}function S(y,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function E(y){const P=h[y.type];let B;if(P){const F=yi[P];B=uE.clone(F.uniforms)}else B=y.uniforms;return B}function v(y,P){let B=u.get(P);return B!==void 0?++B.usedTimes:(B=new B1(t,P,y,s),c.push(B),u.set(P,B)),B}function R(y){if(--y.usedTimes===0){const P=c.indexOf(y);c[P]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function A(y){a.remove(y)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:L}}function W1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function X1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Jh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,_,x,m,p){let S=t[e];return S===void 0?(S={id:d.id,object:d,geometry:h,material:_,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},t[e]=S):(S.id=d.id,S.object=d,S.geometry=h,S.material=_,S.materialVariant=o(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=m,S.group=p),e++,S}function l(d,h,_,x,m,p){const S=a(d,h,_,x,m,p);_.transmission>0?i.push(S):_.transparent===!0?s.push(S):n.push(S)}function c(d,h,_,x,m,p){const S=a(d,h,_,x,m,p);_.transmission>0?i.unshift(S):_.transparent===!0?s.unshift(S):n.unshift(S)}function u(d,h,_){n.length>1&&n.sort(d||X1),i.length>1&&i.sort(h||Jh),s.length>1&&s.sort(h||Jh),_&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let d=e,h=t.length;d<h;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function $1(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Qh,t.set(i,[o])):s>=r.length?(o=new Qh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function q1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new gt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":n={color:new gt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function Y1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let K1=0;function Z1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function j1(t){const e=new q1,n=Y1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new Vt,o=new Vt;function a(c){let u=0,f=0,d=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let h=0,_=0,x=0,m=0,p=0,S=0,E=0,v=0,R=0,A=0,L=0;c.sort(Z1);for(let P=0,B=c.length;P<B;P++){const F=c[P],H=F.color,ee=F.intensity,le=F.distance;let q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ys?q=F.shadow.map.texture:q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=H.r*ee,f+=H.g*ee,d+=H.b*ee;else if(F.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(F.sh.coefficients[j],ee);L++}else if(F.isDirectionalLight){const j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const G=F.shadow,re=n.get(F);re.shadowIntensity=G.intensity,re.shadowBias=G.bias,re.shadowNormalBias=G.normalBias,re.shadowRadius=G.radius,re.shadowMapSize=G.mapSize,i.directionalShadow[h]=re,i.directionalShadowMap[h]=q,i.directionalShadowMatrix[h]=F.shadow.matrix,S++}i.directional[h]=j,h++}else if(F.isSpotLight){const j=e.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(H).multiplyScalar(ee),j.distance=le,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,i.spot[x]=j;const G=F.shadow;if(F.map&&(i.spotLightMap[R]=F.map,R++,G.updateMatrices(F),F.castShadow&&A++),i.spotLightMatrix[x]=G.matrix,F.castShadow){const re=n.get(F);re.shadowIntensity=G.intensity,re.shadowBias=G.bias,re.shadowNormalBias=G.normalBias,re.shadowRadius=G.radius,re.shadowMapSize=G.mapSize,i.spotShadow[x]=re,i.spotShadowMap[x]=q,v++}x++}else if(F.isRectAreaLight){const j=e.get(F);j.color.copy(H).multiplyScalar(ee),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=j,m++}else if(F.isPointLight){const j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){const G=F.shadow,re=n.get(F);re.shadowIntensity=G.intensity,re.shadowBias=G.bias,re.shadowNormalBias=G.normalBias,re.shadowRadius=G.radius,re.shadowMapSize=G.mapSize,re.shadowCameraNear=G.camera.near,re.shadowCameraFar=G.camera.far,i.pointShadow[_]=re,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=F.shadow.matrix,E++}i.point[_]=j,_++}else if(F.isHemisphereLight){const j=e.get(F);j.skyColor.copy(F.color).multiplyScalar(ee),j.groundColor.copy(F.groundColor).multiplyScalar(ee),i.hemi[p]=j,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==h||y.pointLength!==_||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==S||y.numPointShadows!==E||y.numSpotShadows!==v||y.numSpotMaps!==R||y.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,y.directionalLength=h,y.pointLength=_,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=S,y.numPointShadows=E,y.numSpotShadows=v,y.numSpotMaps=R,y.numLightProbes=L,i.version=K1++)}function l(c,u){let f=0,d=0,h=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const E=c[p];if(E.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(E.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function ep(t){const e=new j1(t),n=[],i=[],s=[];function r(d){f.camera=d,n.length=0,i.length=0,s.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function J1(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ep(t),e.set(s,[a])):r>=o.length?(a=new ep(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eR=`uniform sampler2D shadow_pass;
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
}`,tR=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],nR=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],tp=new Vt,no=new Y,Ac=new Y;function iR(t,e,n){let i=new Af;const s=new ot,r=new ot,o=new $t,a=new pE,l=new mE,c={},u=n.maxTextureSize,f={[ys]:kn,[kn]:ys,[jn]:jn},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Q1,fragmentShader:eR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ht(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let p=this.type;this.render=function(A,L,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===GM&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Da);const P=t.getRenderTarget(),B=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Xi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const ee=p!==this.type;ee&&L.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(q=>q.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,q=A.length;le<q;le++){const j=A[le],G=j.shadow;if(G===void 0){it("WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const re=G.getFrameExtents();s.multiply(re),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,G.mapSize.y=r.y));const be=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=be,G.map===null||ee===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ro){if(j.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new wi(s.x,s.y,{format:Ys,type:Zi,minFilter:yn,magFilter:yn,generateMipmaps:!1}),G.map.texture.name=j.name+".shadowMap",G.map.depthTexture=new Or(s.x,s.y,Mi),G.map.depthTexture.name=j.name+".shadowMapDepth",G.map.depthTexture.format=ji,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn}else j.isPointLight?(G.map=new Dg(s.x),G.map.depthTexture=new lE(s.x,Ci)):(G.map=new wi(s.x,s.y),G.map.depthTexture=new Or(s.x,s.y,Ci)),G.map.depthTexture.name=j.name+".shadowMap",G.map.depthTexture.format=ji,this.type===Da?(G.map.depthTexture.compareFunction=be?bf:Mf,G.map.depthTexture.minFilter=yn,G.map.depthTexture.magFilter=yn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn);G.camera.updateProjectionMatrix()}const Ce=G.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<Ce;ye++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ye),t.clear();else{ye===0&&(t.setRenderTarget(G.map),t.clear());const De=G.getViewport(ye);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),H.viewport(o)}if(j.isPointLight){const De=G.camera,ze=G.matrix,je=j.distance||De.far;je!==De.far&&(De.far=je,De.updateProjectionMatrix()),no.setFromMatrixPosition(j.matrixWorld),De.position.copy(no),Ac.copy(De.position),Ac.add(tR[ye]),De.up.copy(nR[ye]),De.lookAt(Ac),De.updateMatrixWorld(),ze.makeTranslation(-no.x,-no.y,-no.z),tp.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),G._frustum.setFromProjectionMatrix(tp,De.coordinateSystem,De.reversedDepth)}else G.updateMatrices(j);i=G.getFrustum(),v(L,y,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===ro&&S(G,y),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(P,B,F)};function S(A,L){const y=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wi(s.x,s.y,{format:Ys,type:Zi})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(L,null,y,d,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(L,null,y,h,x,null)}function E(A,L,y,P){let B=null;const F=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)B=F;else if(B=y.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const H=B.uuid,ee=L.uuid;let le=c[H];le===void 0&&(le={},c[H]=le);let q=le[ee];q===void 0&&(q=B.clone(),le[ee]=q,L.addEventListener("dispose",R)),B=q}if(B.visible=L.visible,B.wireframe=L.wireframe,P===ro?B.side=L.shadowSide!==null?L.shadowSide:L.side:B.side=L.shadowSide!==null?L.shadowSide:f[L.side],B.alphaMap=L.alphaMap,B.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,B.map=L.map,B.clipShadows=L.clipShadows,B.clippingPlanes=L.clippingPlanes,B.clipIntersection=L.clipIntersection,B.displacementMap=L.displacementMap,B.displacementScale=L.displacementScale,B.displacementBias=L.displacementBias,B.wireframeLinewidth=L.wireframeLinewidth,B.linewidth=L.linewidth,y.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const H=t.properties.get(B);H.light=y}return B}function v(A,L,y,P,B){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&B===ro)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const ee=e.update(A),le=A.material;if(Array.isArray(le)){const q=ee.groups;for(let j=0,G=q.length;j<G;j++){const re=q[j],be=le[re.materialIndex];if(be&&be.visible){const Ce=E(A,be,P,B);A.onBeforeShadow(t,A,L,y,ee,Ce,re),t.renderBufferDirect(y,null,ee,Ce,A,re),A.onAfterShadow(t,A,L,y,ee,Ce,re)}}}else if(le.visible){const q=E(A,le,P,B);A.onBeforeShadow(t,A,L,y,ee,q,null),t.renderBufferDirect(y,null,ee,q,A,null),A.onAfterShadow(t,A,L,y,ee,q,null)}}const H=A.children;for(let ee=0,le=H.length;ee<le;ee++)v(H[ee],L,y,P,B)}function R(A){A.target.removeEventListener("dispose",R);for(const y in c){const P=c[y],B=A.target.uuid;B in P&&(P[B].dispose(),delete P[B])}}}function sR(t,e){function n(){let z=!1;const Ie=new $t;let _e=null;const Oe=new $t(0,0,0,0);return{setMask:function(Ne){_e!==Ne&&!z&&(t.colorMask(Ne,Ne,Ne,Ne),_e=Ne)},setLocked:function(Ne){z=Ne},setClear:function(Ne,Se,Je,Ze,Dt){Dt===!0&&(Ne*=Ze,Se*=Ze,Je*=Ze),Ie.set(Ne,Se,Je,Ze),Oe.equals(Ie)===!1&&(t.clearColor(Ne,Se,Je,Ze),Oe.copy(Ie))},reset:function(){z=!1,_e=null,Oe.set(-1,0,0,0)}}}function i(){let z=!1,Ie=!1,_e=null,Oe=null,Ne=null;return{setReversed:function(Se){if(Ie!==Se){const Je=e.get("EXT_clip_control");Se?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ie=Se;const Ze=Ne;Ne=null,this.setClear(Ze)}},getReversed:function(){return Ie},setTest:function(Se){Se?Z(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(Se){_e!==Se&&!z&&(t.depthMask(Se),_e=Se)},setFunc:function(Se){if(Ie&&(Se=Mb[Se]),Oe!==Se){switch(Se){case jc:t.depthFunc(t.NEVER);break;case Jc:t.depthFunc(t.ALWAYS);break;case Qc:t.depthFunc(t.LESS);break;case Nr:t.depthFunc(t.LEQUAL);break;case eu:t.depthFunc(t.EQUAL);break;case tu:t.depthFunc(t.GEQUAL);break;case nu:t.depthFunc(t.GREATER);break;case iu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Oe=Se}},setLocked:function(Se){z=Se},setClear:function(Se){Ne!==Se&&(Ne=Se,Ie&&(Se=1-Se),t.clearDepth(Se))},reset:function(){z=!1,_e=null,Oe=null,Ne=null,Ie=!1}}}function s(){let z=!1,Ie=null,_e=null,Oe=null,Ne=null,Se=null,Je=null,Ze=null,Dt=null;return{setTest:function(Tt){z||(Tt?Z(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Tt){Ie!==Tt&&!z&&(t.stencilMask(Tt),Ie=Tt)},setFunc:function(Tt,bn,En){(_e!==Tt||Oe!==bn||Ne!==En)&&(t.stencilFunc(Tt,bn,En),_e=Tt,Oe=bn,Ne=En)},setOp:function(Tt,bn,En){(Se!==Tt||Je!==bn||Ze!==En)&&(t.stencilOp(Tt,bn,En),Se=Tt,Je=bn,Ze=En)},setLocked:function(Tt){z=Tt},setClear:function(Tt){Dt!==Tt&&(t.clearStencil(Tt),Dt=Tt)},reset:function(){z=!1,Ie=null,_e=null,Oe=null,Ne=null,Se=null,Je=null,Ze=null,Dt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,_=[],x=null,m=!1,p=null,S=null,E=null,v=null,R=null,A=null,L=null,y=new gt(0,0,0),P=0,B=!1,F=null,H=null,ee=null,le=null,q=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,re=0;const be=t.getParameter(t.VERSION);be.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(be)[1]),G=re>=1):be.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(be)[1]),G=re>=2);let Ce=null,ye={};const De=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),je=new $t().fromArray(De),qe=new $t().fromArray(ze);function K(z,Ie,_e,Oe){const Ne=new Uint8Array(4),Se=t.createTexture();t.bindTexture(z,Se),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<_e;Je++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(Ie,0,t.RGBA,1,1,Oe,0,t.RGBA,t.UNSIGNED_BYTE,Ne):t.texImage2D(Ie+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ne);return Se}const U={};U[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),U[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),U[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(t.DEPTH_TEST),o.setFunc(Nr),te(!1),Te(Kd),Z(t.CULL_FACE),Q(Xi);function Z(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function ce(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function Ae(z,Ie){return d[z]!==Ie?(t.bindFramebuffer(z,Ie),d[z]=Ie,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Ie),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Pe(z,Ie){let _e=_,Oe=!1;if(z){_e=h.get(Ie),_e===void 0&&(_e=[],h.set(Ie,_e));const Ne=z.textures;if(_e.length!==Ne.length||_e[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,Je=Ne.length;Se<Je;Se++)_e[Se]=t.COLOR_ATTACHMENT0+Se;_e.length=Ne.length,Oe=!0}}else _e[0]!==t.BACK&&(_e[0]=t.BACK,Oe=!0);Oe&&t.drawBuffers(_e)}function C(z){return x!==z?(t.useProgram(z),x=z,!0):!1}const D={[Ns]:t.FUNC_ADD,[XM]:t.FUNC_SUBTRACT,[$M]:t.FUNC_REVERSE_SUBTRACT};D[qM]=t.MIN,D[YM]=t.MAX;const k={[KM]:t.ZERO,[ZM]:t.ONE,[jM]:t.SRC_COLOR,[Kc]:t.SRC_ALPHA,[ib]:t.SRC_ALPHA_SATURATE,[tb]:t.DST_COLOR,[QM]:t.DST_ALPHA,[JM]:t.ONE_MINUS_SRC_COLOR,[Zc]:t.ONE_MINUS_SRC_ALPHA,[nb]:t.ONE_MINUS_DST_COLOR,[eb]:t.ONE_MINUS_DST_ALPHA,[sb]:t.CONSTANT_COLOR,[rb]:t.ONE_MINUS_CONSTANT_COLOR,[ob]:t.CONSTANT_ALPHA,[ab]:t.ONE_MINUS_CONSTANT_ALPHA};function Q(z,Ie,_e,Oe,Ne,Se,Je,Ze,Dt,Tt){if(z===Xi){m===!0&&(ce(t.BLEND),m=!1);return}if(m===!1&&(Z(t.BLEND),m=!0),z!==WM){if(z!==p||Tt!==B){if((S!==Ns||R!==Ns)&&(t.blendEquation(t.FUNC_ADD),S=Ns,R=Ns),Tt)switch(z){case br:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zd:t.blendFunc(t.ONE,t.ONE);break;case jd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Mt("WebGLState: Invalid blending: ",z);break}else switch(z){case br:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case jd:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jd:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",z);break}E=null,v=null,A=null,L=null,y.set(0,0,0),P=0,p=z,B=Tt}return}Ne=Ne||Ie,Se=Se||_e,Je=Je||Oe,(Ie!==S||Ne!==R)&&(t.blendEquationSeparate(D[Ie],D[Ne]),S=Ie,R=Ne),(_e!==E||Oe!==v||Se!==A||Je!==L)&&(t.blendFuncSeparate(k[_e],k[Oe],k[Se],k[Je]),E=_e,v=Oe,A=Se,L=Je),(Ze.equals(y)===!1||Dt!==P)&&(t.blendColor(Ze.r,Ze.g,Ze.b,Dt),y.copy(Ze),P=Dt),p=z,B=!1}function V(z,Ie){z.side===jn?ce(t.CULL_FACE):Z(t.CULL_FACE);let _e=z.side===kn;Ie&&(_e=!_e),te(_e),z.blending===br&&z.transparent===!1?Q(Xi):Q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Oe=z.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ve(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function te(z){F!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),F=z)}function Te(z){z!==VM?(Z(t.CULL_FACE),z!==H&&(z===Kd?t.cullFace(t.BACK):z===HM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),H=z}function xe(z){z!==ee&&(G&&t.lineWidth(z),ee=z)}function ve(z,Ie,_e){z?(Z(t.POLYGON_OFFSET_FILL),(le!==Ie||q!==_e)&&(le=Ie,q=_e,o.getReversed()&&(Ie=-Ie),t.polygonOffset(Ie,_e))):ce(t.POLYGON_OFFSET_FILL)}function ue(z){z?Z(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function Fe(z){z===void 0&&(z=t.TEXTURE0+j-1),Ce!==z&&(t.activeTexture(z),Ce=z)}function I(z,Ie,_e){_e===void 0&&(Ce===null?_e=t.TEXTURE0+j-1:_e=Ce);let Oe=ye[_e];Oe===void 0&&(Oe={type:void 0,texture:void 0},ye[_e]=Oe),(Oe.type!==z||Oe.texture!==Ie)&&(Ce!==_e&&(t.activeTexture(_e),Ce=_e),t.bindTexture(z,Ie||U[z]),Oe.type=z,Oe.texture=Ie)}function Le(){const z=ye[Ce];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Be(){try{t.compressedTexImage2D(...arguments)}catch(z){Mt("WebGLState:",z)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(z){Mt("WebGLState:",z)}}function g(){try{t.texSubImage2D(...arguments)}catch(z){Mt("WebGLState:",z)}}function T(){try{t.texSubImage3D(...arguments)}catch(z){Mt("WebGLState:",z)}}function O(){try{t.compressedTexSubImage2D(...arguments)}catch(z){Mt("WebGLState:",z)}}function N(){try{t.compressedTexSubImage3D(...arguments)}catch(z){Mt("WebGLState:",z)}}function de(){try{t.texStorage2D(...arguments)}catch(z){Mt("WebGLState:",z)}}function pe(){try{t.texStorage3D(...arguments)}catch(z){Mt("WebGLState:",z)}}function X(){try{t.texImage2D(...arguments)}catch(z){Mt("WebGLState:",z)}}function se(){try{t.texImage3D(...arguments)}catch(z){Mt("WebGLState:",z)}}function ge(z){return f[z]!==void 0?f[z]:t.getParameter(z)}function we(z,Ie){f[z]!==Ie&&(t.pixelStorei(z,Ie),f[z]=Ie)}function Ee(z){je.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),je.copy(z))}function Re(z){qe.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),qe.copy(z))}function Me(z,Ie){let _e=c.get(Ie);_e===void 0&&(_e=new WeakMap,c.set(Ie,_e));let Oe=_e.get(z);Oe===void 0&&(Oe=t.getUniformBlockIndex(Ie,z.name),_e.set(z,Oe))}function Ue(z,Ie){const Oe=c.get(Ie).get(z);l.get(Ie)!==Oe&&(t.uniformBlockBinding(Ie,Oe,z.__bindingPointIndex),l.set(Ie,Oe))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},Ce=null,ye={},d={},h=new WeakMap,_=[],x=null,m=!1,p=null,S=null,E=null,v=null,R=null,A=null,L=null,y=new gt(0,0,0),P=0,B=!1,F=null,H=null,ee=null,le=null,q=null,je.set(0,0,t.canvas.width,t.canvas.height),qe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ce,bindFramebuffer:Ae,drawBuffers:Pe,useProgram:C,setBlending:Q,setMaterial:V,setFlipSided:te,setCullFace:Te,setLineWidth:xe,setPolygonOffset:ve,setScissorTest:ue,activeTexture:Fe,bindTexture:I,unbindTexture:Le,compressedTexImage2D:Be,compressedTexImage3D:w,texImage2D:X,texImage3D:se,pixelStorei:we,getParameter:ge,updateUBOMapping:Me,uniformBlockBinding:Ue,texStorage2D:de,texStorage3D:pe,texSubImage2D:g,texSubImage3D:T,compressedTexSubImage2D:O,compressedTexSubImage3D:N,scissor:Ee,viewport:Re,reset:Ye}}function rR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,g){return _?new OffscreenCanvas(w,g):tl("canvas")}function m(w,g,T){let O=1;const N=Be(w);if((N.width>T||N.height>T)&&(O=T/Math.max(N.width,N.height)),O<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const de=Math.floor(O*N.width),pe=Math.floor(O*N.height);d===void 0&&(d=x(de,pe));const X=g?x(de,pe):d;return X.width=de,X.height=pe,X.getContext("2d").drawImage(w,0,0,de,pe),it("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+de+"x"+pe+")."),X}else return"data"in w&&it("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),w;return w}function p(w){return w.generateMipmaps}function S(w){t.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(w,g,T,O,N,de=!1){if(w!==null){if(t[w]!==void 0)return t[w];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pe;O&&(pe=e.get("EXT_texture_norm16"),pe||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=g;if(g===t.RED&&(T===t.FLOAT&&(X=t.R32F),T===t.HALF_FLOAT&&(X=t.R16F),T===t.UNSIGNED_BYTE&&(X=t.R8),T===t.UNSIGNED_SHORT&&pe&&(X=pe.R16_EXT),T===t.SHORT&&pe&&(X=pe.R16_SNORM_EXT)),g===t.RED_INTEGER&&(T===t.UNSIGNED_BYTE&&(X=t.R8UI),T===t.UNSIGNED_SHORT&&(X=t.R16UI),T===t.UNSIGNED_INT&&(X=t.R32UI),T===t.BYTE&&(X=t.R8I),T===t.SHORT&&(X=t.R16I),T===t.INT&&(X=t.R32I)),g===t.RG&&(T===t.FLOAT&&(X=t.RG32F),T===t.HALF_FLOAT&&(X=t.RG16F),T===t.UNSIGNED_BYTE&&(X=t.RG8),T===t.UNSIGNED_SHORT&&pe&&(X=pe.RG16_EXT),T===t.SHORT&&pe&&(X=pe.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(T===t.UNSIGNED_BYTE&&(X=t.RG8UI),T===t.UNSIGNED_SHORT&&(X=t.RG16UI),T===t.UNSIGNED_INT&&(X=t.RG32UI),T===t.BYTE&&(X=t.RG8I),T===t.SHORT&&(X=t.RG16I),T===t.INT&&(X=t.RG32I)),g===t.RGB_INTEGER&&(T===t.UNSIGNED_BYTE&&(X=t.RGB8UI),T===t.UNSIGNED_SHORT&&(X=t.RGB16UI),T===t.UNSIGNED_INT&&(X=t.RGB32UI),T===t.BYTE&&(X=t.RGB8I),T===t.SHORT&&(X=t.RGB16I),T===t.INT&&(X=t.RGB32I)),g===t.RGBA_INTEGER&&(T===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),T===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),T===t.UNSIGNED_INT&&(X=t.RGBA32UI),T===t.BYTE&&(X=t.RGBA8I),T===t.SHORT&&(X=t.RGBA16I),T===t.INT&&(X=t.RGBA32I)),g===t.RGB&&(T===t.UNSIGNED_SHORT&&pe&&(X=pe.RGB16_EXT),T===t.SHORT&&pe&&(X=pe.RGB16_SNORM_EXT),T===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),T===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),g===t.RGBA){const se=de?el:St.getTransfer(N);T===t.FLOAT&&(X=t.RGBA32F),T===t.HALF_FLOAT&&(X=t.RGBA16F),T===t.UNSIGNED_BYTE&&(X=se===Ct?t.SRGB8_ALPHA8:t.RGBA8),T===t.UNSIGNED_SHORT&&pe&&(X=pe.RGBA16_EXT),T===t.SHORT&&pe&&(X=pe.RGBA16_SNORM_EXT),T===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),T===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function R(w,g){let T;return w?g===null||g===Ci||g===Ro?T=t.DEPTH24_STENCIL8:g===Mi?T=t.DEPTH32F_STENCIL8:g===Ao&&(T=t.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ci||g===Ro?T=t.DEPTH_COMPONENT24:g===Mi?T=t.DEPTH_COMPONENT32F:g===Ao&&(T=t.DEPTH_COMPONENT16),T}function A(w,g){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==dn&&w.minFilter!==yn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function L(w){const g=w.target;g.removeEventListener("dispose",L),P(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function y(w){const g=w.target;g.removeEventListener("dispose",y),F(g)}function P(w){const g=i.get(w);if(g.__webglInit===void 0)return;const T=w.source,O=h.get(T);if(O){const N=O[g.__cacheKey];N.usedTimes--,N.usedTimes===0&&B(w),Object.keys(O).length===0&&h.delete(T)}i.remove(w)}function B(w){const g=i.get(w);t.deleteTexture(g.__webglTexture);const T=w.source,O=h.get(T);delete O[g.__cacheKey],o.memory.textures--}function F(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let N=0;N<g.__webglFramebuffer[O].length;N++)t.deleteFramebuffer(g.__webglFramebuffer[O][N]);else t.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)t.deleteFramebuffer(g.__webglFramebuffer[O]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const T=w.textures;for(let O=0,N=T.length;O<N;O++){const de=i.get(T[O]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(T[O])}i.remove(w)}let H=0;function ee(){H=0}function le(){return H}function q(w){H=w}function j(){const w=H;return w>=s.maxTextures&&it("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),H+=1,w}function G(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function re(w,g){const T=i.get(w);if(w.isVideoTexture&&I(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&T.__version!==w.version){const O=w.image;if(O===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(T,w,g);return}}else w.isExternalTexture&&(T.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,T.__webglTexture,t.TEXTURE0+g)}function be(w,g){const T=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&T.__version!==w.version){ce(T,w,g);return}else w.isExternalTexture&&(T.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,T.__webglTexture,t.TEXTURE0+g)}function Ce(w,g){const T=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&T.__version!==w.version){ce(T,w,g);return}n.bindTexture(t.TEXTURE_3D,T.__webglTexture,t.TEXTURE0+g)}function ye(w,g){const T=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&T.__version!==w.version){Ae(T,w,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+g)}const De={[su]:t.REPEAT,[Gi]:t.CLAMP_TO_EDGE,[ru]:t.MIRRORED_REPEAT},ze={[dn]:t.NEAREST,[ub]:t.NEAREST_MIPMAP_NEAREST,[Qo]:t.NEAREST_MIPMAP_LINEAR,[yn]:t.LINEAR,[jl]:t.LINEAR_MIPMAP_NEAREST,[Bs]:t.LINEAR_MIPMAP_LINEAR},je={[hb]:t.NEVER,[vb]:t.ALWAYS,[pb]:t.LESS,[Mf]:t.LEQUAL,[mb]:t.EQUAL,[bf]:t.GEQUAL,[gb]:t.GREATER,[_b]:t.NOTEQUAL};function qe(w,g){if(g.type===Mi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===yn||g.magFilter===jl||g.magFilter===Qo||g.magFilter===Bs||g.minFilter===yn||g.minFilter===jl||g.minFilter===Qo||g.minFilter===Bs)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,De[g.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,De[g.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,De[g.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,ze[g.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,ze[g.minFilter]),g.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,je[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===dn||g.minFilter!==Qo&&g.minFilter!==Bs||g.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const T=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function K(w,g){let T=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",L));const O=g.source;let N=h.get(O);N===void 0&&(N={},h.set(O,N));const de=G(g);if(de!==w.__cacheKey){N[de]===void 0&&(N[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,T=!0),N[de].usedTimes++;const pe=N[w.__cacheKey];pe!==void 0&&(N[w.__cacheKey].usedTimes--,pe.usedTimes===0&&B(g)),w.__cacheKey=de,w.__webglTexture=N[de].texture}return T}function U(w,g,T){return Math.floor(Math.floor(w/T)/g)}function Z(w,g,T,O){const de=w.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,T,O,g.data);else{de.sort((we,Ee)=>we.start-Ee.start);let pe=0;for(let we=1;we<de.length;we++){const Ee=de[pe],Re=de[we],Me=Ee.start+Ee.count,Ue=U(Re.start,g.width,4),Ye=U(Ee.start,g.width,4);Re.start<=Me+1&&Ue===Ye&&U(Re.start+Re.count-1,g.width,4)===Ue?Ee.count=Math.max(Ee.count,Re.start+Re.count-Ee.start):(++pe,de[pe]=Re)}de.length=pe+1;const X=n.getParameter(t.UNPACK_ROW_LENGTH),se=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let we=0,Ee=de.length;we<Ee;we++){const Re=de[we],Me=Math.floor(Re.start/4),Ue=Math.ceil(Re.count/4),Ye=Me%g.width,z=Math.floor(Me/g.width),Ie=Ue,_e=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,Ye,z,Ie,_e,T,O,g.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,X),n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function ce(w,g,T){let O=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=t.TEXTURE_3D);const N=K(w,g),de=g.source;n.bindTexture(O,w.__webglTexture,t.TEXTURE0+T);const pe=i.get(de);if(de.version!==pe.__version||N===!0){if(n.activeTexture(t.TEXTURE0+T),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const _e=St.getPrimaries(St.workingColorSpace),Oe=g.colorSpace===_s?null:St.getPrimaries(g.colorSpace),Ne=g.colorSpace===_s||_e===Oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let se=m(g.image,!1,s.maxTextureSize);se=Le(g,se);const ge=r.convert(g.format,g.colorSpace),we=r.convert(g.type);let Ee=v(g.internalFormat,ge,we,g.normalized,g.colorSpace,g.isVideoTexture);qe(O,g);let Re;const Me=g.mipmaps,Ue=g.isVideoTexture!==!0,Ye=pe.__version===void 0||N===!0,z=de.dataReady,Ie=A(g,se);if(g.isDepthTexture)Ee=R(g.format===ks,g.type),Ye&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,Ee,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ee,se.width,se.height,0,ge,we,null));else if(g.isDataTexture)if(Me.length>0){Ue&&Ye&&n.texStorage2D(t.TEXTURE_2D,Ie,Ee,Me[0].width,Me[0].height);for(let _e=0,Oe=Me.length;_e<Oe;_e++)Re=Me[_e],Ue?z&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Re.width,Re.height,ge,we,Re.data):n.texImage2D(t.TEXTURE_2D,_e,Ee,Re.width,Re.height,0,ge,we,Re.data);g.generateMipmaps=!1}else Ue?(Ye&&n.texStorage2D(t.TEXTURE_2D,Ie,Ee,se.width,se.height),z&&Z(g,se,ge,we)):n.texImage2D(t.TEXTURE_2D,0,Ee,se.width,se.height,0,ge,we,se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,Ee,Me[0].width,Me[0].height,se.depth);for(let _e=0,Oe=Me.length;_e<Oe;_e++)if(Re=Me[_e],g.format!==ri)if(ge!==null)if(Ue){if(z)if(g.layerUpdates.size>0){const Ne=Lh(Re.width,Re.height,g.format,g.type);for(const Se of g.layerUpdates){const Je=Re.data.subarray(Se*Ne/Re.data.BYTES_PER_ELEMENT,(Se+1)*Ne/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,Se,Re.width,Re.height,1,ge,Je)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,se.depth,ge,Re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Ee,Re.width,Re.height,se.depth,0,Re.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,se.depth,ge,we,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Ee,Re.width,Re.height,se.depth,0,ge,we,Re.data)}else{Ue&&Ye&&n.texStorage2D(t.TEXTURE_2D,Ie,Ee,Me[0].width,Me[0].height);for(let _e=0,Oe=Me.length;_e<Oe;_e++)Re=Me[_e],g.format!==ri?ge!==null?Ue?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Re.width,Re.height,ge,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Ee,Re.width,Re.height,0,Re.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?z&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Re.width,Re.height,ge,we,Re.data):n.texImage2D(t.TEXTURE_2D,_e,Ee,Re.width,Re.height,0,ge,we,Re.data)}else if(g.isDataArrayTexture)if(Ue){if(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,Ee,se.width,se.height,se.depth),z)if(g.layerUpdates.size>0){const _e=Lh(se.width,se.height,g.format,g.type);for(const Oe of g.layerUpdates){const Ne=se.data.subarray(Oe*_e/se.data.BYTES_PER_ELEMENT,(Oe+1)*_e/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Oe,se.width,se.height,1,ge,we,Ne)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,we,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,se.width,se.height,se.depth,0,ge,we,se.data);else if(g.isData3DTexture)Ue?(Ye&&n.texStorage3D(t.TEXTURE_3D,Ie,Ee,se.width,se.height,se.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,we,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,se.width,se.height,se.depth,0,ge,we,se.data);else if(g.isFramebufferTexture){if(Ye)if(Ue)n.texStorage2D(t.TEXTURE_2D,Ie,Ee,se.width,se.height);else{let _e=se.width,Oe=se.height;for(let Ne=0;Ne<Ie;Ne++)n.texImage2D(t.TEXTURE_2D,Ne,Ee,_e,Oe,0,ge,we,null),_e>>=1,Oe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){const _e=t.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),se.parentNode!==_e){_e.appendChild(se),f.add(g),_e.onpaint=Oe=>{const Ne=Oe.changedElements;for(const Se of f)Ne.includes(Se.image)&&(Se.needsUpdate=!0)},_e.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,se);else{const Ne=t.RGBA,Se=t.RGBA,Je=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ne,Se,Je,se)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Ue&&Ye){const _e=Be(Me[0]);n.texStorage2D(t.TEXTURE_2D,Ie,Ee,_e.width,_e.height)}for(let _e=0,Oe=Me.length;_e<Oe;_e++)Re=Me[_e],Ue?z&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,ge,we,Re):n.texImage2D(t.TEXTURE_2D,_e,Ee,ge,we,Re);g.generateMipmaps=!1}else if(Ue){if(Ye){const _e=Be(se);n.texStorage2D(t.TEXTURE_2D,Ie,Ee,_e.width,_e.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,we,se)}else n.texImage2D(t.TEXTURE_2D,0,Ee,ge,we,se);p(g)&&S(O),pe.__version=de.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Ae(w,g,T){if(g.image.length!==6)return;const O=K(w,g),N=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+T);const de=i.get(N);if(N.version!==de.__version||O===!0){n.activeTexture(t.TEXTURE0+T);const pe=St.getPrimaries(St.workingColorSpace),X=g.colorSpace===_s?null:St.getPrimaries(g.colorSpace),se=g.colorSpace===_s||pe===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,we=g.image[0]&&g.image[0].isDataTexture,Ee=[];for(let Se=0;Se<6;Se++)!ge&&!we?Ee[Se]=m(g.image[Se],!0,s.maxCubemapSize):Ee[Se]=we?g.image[Se].image:g.image[Se],Ee[Se]=Le(g,Ee[Se]);const Re=Ee[0],Me=r.convert(g.format,g.colorSpace),Ue=r.convert(g.type),Ye=v(g.internalFormat,Me,Ue,g.normalized,g.colorSpace),z=g.isVideoTexture!==!0,Ie=de.__version===void 0||O===!0,_e=N.dataReady;let Oe=A(g,Re);qe(t.TEXTURE_CUBE_MAP,g);let Ne;if(ge){z&&Ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,Ye,Re.width,Re.height);for(let Se=0;Se<6;Se++){Ne=Ee[Se].mipmaps;for(let Je=0;Je<Ne.length;Je++){const Ze=Ne[Je];g.format!==ri?Me!==null?z?_e&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,0,0,Ze.width,Ze.height,Me,Ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,Ye,Ze.width,Ze.height,0,Ze.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,0,0,Ze.width,Ze.height,Me,Ue,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,Ye,Ze.width,Ze.height,0,Me,Ue,Ze.data)}}}else{if(Ne=g.mipmaps,z&&Ie){Ne.length>0&&Oe++;const Se=Be(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,Ye,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(we){z?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ee[Se].width,Ee[Se].height,Me,Ue,Ee[Se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ye,Ee[Se].width,Ee[Se].height,0,Me,Ue,Ee[Se].data);for(let Je=0;Je<Ne.length;Je++){const Dt=Ne[Je].image[Se].image;z?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,0,0,Dt.width,Dt.height,Me,Ue,Dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,Ye,Dt.width,Dt.height,0,Me,Ue,Dt.data)}}else{z?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Me,Ue,Ee[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ye,Me,Ue,Ee[Se]);for(let Je=0;Je<Ne.length;Je++){const Ze=Ne[Je];z?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,0,0,Me,Ue,Ze.image[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,Ye,Me,Ue,Ze.image[Se])}}}p(g)&&S(t.TEXTURE_CUBE_MAP),de.__version=N.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Pe(w,g,T,O,N,de){const pe=r.convert(T.format,T.colorSpace),X=r.convert(T.type),se=v(T.internalFormat,pe,X,T.normalized,T.colorSpace),ge=i.get(g),we=i.get(T);if(we.__renderTarget=g,!ge.__hasExternalTextures){const Ee=Math.max(1,g.width>>de),Re=Math.max(1,g.height>>de);N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?n.texImage3D(N,de,se,Ee,Re,g.depth,0,pe,X,null):n.texImage2D(N,de,se,Ee,Re,0,pe,X,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Fe(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,N,we.__webglTexture,0,ue(g)):(N===t.TEXTURE_2D||N>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,O,N,we.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function C(w,g,T){if(t.bindRenderbuffer(t.RENDERBUFFER,w),g.depthBuffer){const O=g.depthTexture,N=O&&O.isDepthTexture?O.type:null,de=R(g.stencilBuffer,N),pe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Fe(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue(g),de,g.width,g.height):T?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue(g),de,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,de,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,w)}else{const O=g.textures;for(let N=0;N<O.length;N++){const de=O[N],pe=r.convert(de.format,de.colorSpace),X=r.convert(de.type),se=v(de.internalFormat,pe,X,de.normalized,de.colorSpace);Fe(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue(g),se,g.width,g.height):T?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue(g),se,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,se,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function D(w,g,T){const O=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const N=i.get(g.depthTexture);if(N.__renderTarget=g,(!N.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),O){if(N.__webglInit===void 0&&(N.__webglInit=!0,g.depthTexture.addEventListener("dispose",L)),N.__webglTexture===void 0){N.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture),qe(t.TEXTURE_CUBE_MAP,g.depthTexture);const ge=r.convert(g.depthTexture.format),we=r.convert(g.depthTexture.type);let Ee;g.depthTexture.format===ji?Ee=t.DEPTH_COMPONENT24:g.depthTexture.format===ks&&(Ee=t.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ee,g.width,g.height,0,ge,we,null)}}else re(g.depthTexture,0);const de=N.__webglTexture,pe=ue(g),X=O?t.TEXTURE_CUBE_MAP_POSITIVE_X+T:t.TEXTURE_2D,se=g.depthTexture.format===ks?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===ji)Fe(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,X,de,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,se,X,de,0);else if(g.depthTexture.format===ks)Fe(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,X,de,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,se,X,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function k(w){const g=i.get(w),T=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const O=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),O){const N=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,O.removeEventListener("dispose",N)};O.addEventListener("dispose",N),g.__depthDisposeCallback=N}g.__boundDepthTexture=O}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(T)for(let O=0;O<6;O++)D(g.__webglFramebuffer[O],w,O);else{const O=w.texture.mipmaps;O&&O.length>0?D(g.__webglFramebuffer[0],w,0):D(g.__webglFramebuffer,w,0)}else if(T){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]===void 0)g.__webglDepthbuffer[O]=t.createRenderbuffer(),C(g.__webglDepthbuffer[O],w,!1);else{const N=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=g.__webglDepthbuffer[O];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,de)}}else{const O=w.texture.mipmaps;if(O&&O.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),C(g.__webglDepthbuffer,w,!1);else{const N=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Q(w,g,T){const O=i.get(w);g!==void 0&&Pe(O.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),T!==void 0&&k(w)}function V(w){const g=w.texture,T=i.get(w),O=i.get(g);w.addEventListener("dispose",y);const N=w.textures,de=w.isWebGLCubeRenderTarget===!0,pe=N.length>1;if(pe||(O.__webglTexture===void 0&&(O.__webglTexture=t.createTexture()),O.__version=g.version,o.memory.textures++),de){T.__webglFramebuffer=[];for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0){T.__webglFramebuffer[X]=[];for(let se=0;se<g.mipmaps.length;se++)T.__webglFramebuffer[X][se]=t.createFramebuffer()}else T.__webglFramebuffer[X]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){T.__webglFramebuffer=[];for(let X=0;X<g.mipmaps.length;X++)T.__webglFramebuffer[X]=t.createFramebuffer()}else T.__webglFramebuffer=t.createFramebuffer();if(pe)for(let X=0,se=N.length;X<se;X++){const ge=i.get(N[X]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&Fe(w)===!1){T.__webglMultisampledFramebuffer=t.createFramebuffer(),T.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let X=0;X<N.length;X++){const se=N[X];T.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,T.__webglColorRenderbuffer[X]);const ge=r.convert(se.format,se.colorSpace),we=r.convert(se.type),Ee=v(se.internalFormat,ge,we,se.normalized,se.colorSpace,w.isXRRenderTarget===!0),Re=ue(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,Ee,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,T.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(T.__webglDepthRenderbuffer=t.createRenderbuffer(),C(T.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),qe(t.TEXTURE_CUBE_MAP,g);for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0)for(let se=0;se<g.mipmaps.length;se++)Pe(T.__webglFramebuffer[X][se],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,se);else Pe(T.__webglFramebuffer[X],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(g)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let X=0,se=N.length;X<se;X++){const ge=N[X],we=i.get(ge);let Ee=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ee=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ee,we.__webglTexture),qe(Ee,ge),Pe(T.__webglFramebuffer,w,ge,t.COLOR_ATTACHMENT0+X,Ee,0),p(ge)&&S(Ee)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(X=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(X,O.__webglTexture),qe(X,g),g.mipmaps&&g.mipmaps.length>0)for(let se=0;se<g.mipmaps.length;se++)Pe(T.__webglFramebuffer[se],w,g,t.COLOR_ATTACHMENT0,X,se);else Pe(T.__webglFramebuffer,w,g,t.COLOR_ATTACHMENT0,X,0);p(g)&&S(X),n.unbindTexture()}w.depthBuffer&&k(w)}function te(w){const g=w.textures;for(let T=0,O=g.length;T<O;T++){const N=g[T];if(p(N)){const de=E(w),pe=i.get(N).__webglTexture;n.bindTexture(de,pe),S(de),n.unbindTexture()}}}const Te=[],xe=[];function ve(w){if(w.samples>0){if(Fe(w)===!1){const g=w.textures,T=w.width,O=w.height;let N=t.COLOR_BUFFER_BIT;const de=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(w),X=g.length>1;if(X)for(let ge=0;ge<g.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const se=w.texture.mipmaps;se&&se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(N|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(N|=t.STENCIL_BUFFER_BIT)),X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const we=i.get(g[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,T,O,0,0,T,O,N,t.NEAREST),l===!0&&(Te.length=0,xe.length=0,Te.push(t.COLOR_ATTACHMENT0+ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Te.push(de),xe.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,xe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let ge=0;ge<g.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const we=i.get(g[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const g=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function ue(w){return Math.min(s.maxSamples,w.samples)}function Fe(w){const g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(w){const g=o.render.frame;u.get(w)!==g&&(u.set(w,g),w.update())}function Le(w,g){const T=w.colorSpace,O=w.format,N=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||T!==Qa&&T!==_s&&(St.getTransfer(T)===Ct?(O!==ri||N!==Wn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",T)),g}function Be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=ee,this.getTextureUnits=le,this.setTextureUnits=q,this.setTexture2D=re,this.setTexture2DArray=be,this.setTexture3D=Ce,this.setTextureCube=ye,this.rebindTextures=Q,this.setupRenderTarget=V,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function oR(t,e){function n(i,s=_s){let r;const o=St.getTransfer(s);if(i===Wn)return t.UNSIGNED_BYTE;if(i===_f)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ug)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ag)return t.BYTE;if(i===lg)return t.SHORT;if(i===Ao)return t.UNSIGNED_SHORT;if(i===gf)return t.INT;if(i===Ci)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===Zi)return t.HALF_FLOAT;if(i===fg)return t.ALPHA;if(i===dg)return t.RGB;if(i===ri)return t.RGBA;if(i===ji)return t.DEPTH_COMPONENT;if(i===ks)return t.DEPTH_STENCIL;if(i===hg)return t.RED;if(i===xf)return t.RED_INTEGER;if(i===Ys)return t.RG;if(i===yf)return t.RG_INTEGER;if(i===Sf)return t.RGBA_INTEGER;if(i===La||i===Ia||i===Na||i===Ua)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ou||i===au||i===lu||i===cu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ou)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===au)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uu||i===fu||i===du||i===hu||i===pu||i===ja||i===mu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===uu||i===fu)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===du)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===hu)return r.COMPRESSED_R11_EAC;if(i===pu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ja)return r.COMPRESSED_RG11_EAC;if(i===mu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gu||i===_u||i===vu||i===xu||i===yu||i===Su||i===Mu||i===bu||i===Eu||i===Tu||i===wu||i===Au||i===Ru||i===Cu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_u)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Su)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Au)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ru)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cu)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pu||i===Du||i===Lu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pu)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Du)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Iu||i===Nu||i===Ja||i===Uu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Iu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lR=`
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

}`;class cR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Sg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pi({vertexShader:aR,fragmentShader:lR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ht(new Wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uR extends bs{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const x=typeof XRWebGLBinding<"u",m=new cR,p={},S=n.getContextAttributes();let E=null,v=null;const R=[],A=[],L=new ot;let y=null;const P=new Gn;P.viewport=new $t;const B=new Gn;B.viewport=new $t;const F=[P,B],H=new xE;let ee=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let U=R[K];return U===void 0&&(U=new ic,R[K]=U),U.getTargetRaySpace()},this.getControllerGrip=function(K){let U=R[K];return U===void 0&&(U=new ic,R[K]=U),U.getGripSpace()},this.getHand=function(K){let U=R[K];return U===void 0&&(U=new ic,R[K]=U),U.getHandSpace()};function q(K){const U=A.indexOf(K.inputSource);if(U===-1)return;const Z=R[U];Z!==void 0&&(Z.update(K.inputSource,K.frame,c||o),Z.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",G);for(let K=0;K<R.length;K++){const U=A[K];U!==null&&(A[K]=null,R[K].disconnect(U))}ee=null,le=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(E),h=null,d=null,f=null,s=null,v=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,ce=null,Ae=null;S.depth&&(Ae=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=S.stencil?ks:ji,ce=S.stencil?Ro:Ci);const Pe={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new wi(d.textureWidth,d.textureHeight,{format:ri,type:Wn,depthTexture:new Or(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Z={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,Z),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new wi(h.framebufferWidth,h.framebufferHeight,{format:ri,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let U=0;U<K.removed.length;U++){const Z=K.removed[U],ce=A.indexOf(Z);ce>=0&&(A[ce]=null,R[ce].disconnect(Z))}for(let U=0;U<K.added.length;U++){const Z=K.added[U];let ce=A.indexOf(Z);if(ce===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=A.length){A.push(Z),ce=Pe;break}else if(A[Pe]===null){A[Pe]=Z,ce=Pe;break}if(ce===-1)break}const Ae=R[ce];Ae&&Ae.connect(Z)}}const re=new Y,be=new Y;function Ce(K,U,Z){re.setFromMatrixPosition(U.matrixWorld),be.setFromMatrixPosition(Z.matrixWorld);const ce=re.distanceTo(be),Ae=U.projectionMatrix.elements,Pe=Z.projectionMatrix.elements,C=Ae[14]/(Ae[10]-1),D=Ae[14]/(Ae[10]+1),k=(Ae[9]+1)/Ae[5],Q=(Ae[9]-1)/Ae[5],V=(Ae[8]-1)/Ae[0],te=(Pe[8]+1)/Pe[0],Te=C*V,xe=C*te,ve=ce/(-V+te),ue=ve*-V;if(U.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ue),K.translateZ(ve),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(U.projectionMatrix),K.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const Fe=C+ve,I=D+ve,Le=Te-ue,Be=xe+(ce-ue),w=k*D/I*Fe,g=Q*D/I*Fe;K.projectionMatrix.makePerspective(Le,Be,w,g,Fe,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ye(K,U){U===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(U.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let U=K.near,Z=K.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),H.near=B.near=P.near=U,H.far=B.far=P.far=Z,(ee!==H.near||le!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),ee=H.near,le=H.far),H.layers.mask=K.layers.mask|6,P.layers.mask=H.layers.mask&-5,B.layers.mask=H.layers.mask&-3;const ce=K.parent,Ae=H.cameras;ye(H,ce);for(let Pe=0;Pe<Ae.length;Pe++)ye(Ae[Pe],ce);Ae.length===2?Ce(H,P,B):H.projectionMatrix.copy(P.projectionMatrix),De(K,H,ce)};function De(K,U,Z){Z===null?K.matrix.copy(U.matrixWorld):(K.matrix.copy(Z.matrixWorld),K.matrix.invert(),K.matrix.multiply(U.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(U.projectionMatrix),K.projectionMatrixInverse.copy(U.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Po*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(K){return p[K]};let ze=null;function je(K,U){if(u=U.getViewerPose(c||o),_=U,u!==null){const Z=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let ce=!1;Z.length!==H.cameras.length&&(H.cameras.length=0,ce=!0);for(let D=0;D<Z.length;D++){const k=Z[D];let Q=null;if(h!==null)Q=h.getViewport(k);else{const te=f.getViewSubImage(d,k);Q=te.viewport,D===0&&(e.setRenderTargetTextures(v,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(v))}let V=F[D];V===void 0&&(V=new Gn,V.layers.enable(D),V.viewport=new $t,F[D]=V),V.matrix.fromArray(k.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(k.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Q.x,Q.y,Q.width,Q.height),D===0&&(H.matrix.copy(V.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ce===!0&&H.cameras.push(V)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const D=f.getDepthInformation(Z[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Ae&&Ae.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let D=0;D<Z.length;D++){const k=Z[D].camera;if(k){let Q=p[k];Q||(Q=new Sg,p[k]=Q);const V=f.getCameraImage(k);Q.sourceTexture=V}}}}for(let Z=0;Z<R.length;Z++){const ce=A[Z],Ae=R[Z];ce!==null&&Ae!==void 0&&Ae.update(ce,U,c||o)}ze&&ze(K,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),_=null}const qe=new Cg;qe.setAnimationLoop(je),this.setAnimationLoop=function(K){ze=K},this.dispose=function(){}}}const fR=new Vt,Og=new ct;Og.set(-1,0,0,0,1,0,0,0,1);function dR(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),E=S.envMap,v=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(fR.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Og),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,R){const A=R.program;i.uniformBlockBinding(v,A)}function c(v,R){let A=s[v.id];A===void 0&&(m(v),A=u(v),s[v.id]=A,v.addEventListener("dispose",S));const L=R.program;i.updateUBOMapping(v,L);const y=e.render.frame;r[v.id]!==y&&(d(v),r[v.id]=y)}function u(v){const R=f();v.__bindingPointIndex=R;const A=t.createBuffer(),L=v.__size,y=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,L,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,R,A),A}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const R=s[v.id],A=v.uniforms,L=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,R);for(let y=0,P=A.length;y<P;y++){const B=A[y];if(Array.isArray(B))for(let F=0,H=B.length;F<H;F++)h(B[F],y,F,L);else h(B,y,0,L)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(v,R,A,L){if(x(v,R,A,L)===!0){const y=v.__offset,P=v.value;if(Array.isArray(P)){let B=0;for(let F=0;F<P.length;F++){const H=P[F],ee=p(H);_(H,v.__data,B),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(B+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(P,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,v.__data)}}function _(v,R,A){typeof v=="number"||typeof v=="boolean"?R[0]=v:v.isMatrix3?(R[0]=v.elements[0],R[1]=v.elements[1],R[2]=v.elements[2],R[3]=0,R[4]=v.elements[3],R[5]=v.elements[4],R[6]=v.elements[5],R[7]=0,R[8]=v.elements[6],R[9]=v.elements[7],R[10]=v.elements[8],R[11]=0):ArrayBuffer.isView(v)?R.set(new v.constructor(v.buffer,v.byteOffset,R.length)):v.toArray(R,A)}function x(v,R,A,L){const y=v.value,P=R+"_"+A;if(L[P]===void 0)return typeof y=="number"||typeof y=="boolean"?L[P]=y:ArrayBuffer.isView(y)?L[P]=y.slice():L[P]=y.clone(),!0;{const B=L[P];if(typeof y=="number"||typeof y=="boolean"){if(B!==y)return L[P]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(B.equals(y)===!1)return B.copy(y),!0}}return!1}function m(v){const R=v.uniforms;let A=0;const L=16;for(let P=0,B=R.length;P<B;P++){const F=Array.isArray(R[P])?R[P]:[R[P]];for(let H=0,ee=F.length;H<ee;H++){const le=F[H],q=Array.isArray(le.value)?le.value:[le.value];for(let j=0,G=q.length;j<G;j++){const re=q[j],be=p(re),Ce=A%L,ye=Ce%be.boundary,De=Ce+ye;A+=ye,De!==0&&L-De<be.storage&&(A+=L-De),le.__data=new Float32Array(be.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=A,A+=be.storage}}}const y=A%L;return y>0&&(A+=L-y),v.__size=A,v.__cache={},this}function p(v){const R={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(R.boundary=4,R.storage=4):v.isVector2?(R.boundary=8,R.storage=8):v.isVector3||v.isColor?(R.boundary=16,R.storage=12):v.isVector4?(R.boundary=16,R.storage=16):v.isMatrix3?(R.boundary=48,R.storage=48):v.isMatrix4?(R.boundary=64,R.storage=64):v.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(R.boundary=16,R.storage=v.byteLength):it("WebGLRenderer: Unsupported uniform value type.",v),R}function S(v){const R=v.target;R.removeEventListener("dispose",S);const A=o.indexOf(R.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function E(){for(const v in s)t.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}const pR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function mR(){return gi===null&&(gi=new iE(pR,16,16,Ys,Zi),gi.name="DFG_LUT",gi.minFilter=yn,gi.magFilter=yn,gi.wrapS=Gi,gi.wrapT=Gi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class Fg{constructor(e={}){const{canvas:n=yb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Wn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=h,m=new Set([Sf,yf,xf]),p=new Set([Wn,Ci,Ao,Ro,_f,vf]),S=new Uint32Array(4),E=new Int32Array(4),v=new Y;let R=null,A=null;const L=[],y=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let F=!1,H=null,ee=null,le=null,q=null;this._outputColorSpace=Zn;let j=0,G=0,re=null,be=-1,Ce=null;const ye=new $t,De=new $t;let ze=null;const je=new gt(0);let qe=0,K=n.width,U=n.height,Z=1,ce=null,Ae=null;const Pe=new $t(0,0,K,U),C=new $t(0,0,K,U);let D=!1;const k=new Af;let Q=!1,V=!1;const te=new Vt,Te=new Y,xe=new $t,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Fe(){return re===null?Z:1}let I=i;function Le(M,$){return n.getContext(M,$)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mf}`),n.addEventListener("webglcontextlost",Dt,!1),n.addEventListener("webglcontextrestored",Tt,!1),n.addEventListener("webglcontextcreationerror",bn,!1),I===null){const $="webgl2";if(I=Le($,M),I===null)throw Le($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Mt("WebGLRenderer: "+M.message),M}let Be,w,g,T,O,N,de,pe,X,se,ge,we,Ee,Re,Me,Ue,Ye,z,Ie,_e,Oe,Ne,Se;function Je(){Be=new mA(I),Be.init(),Oe=new oR(I,Be),w=new aA(I,Be,e,Oe),g=new sR(I,Be),w.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),ee=I.createFramebuffer(),le=I.createFramebuffer(),q=I.createFramebuffer(),T=new vA(I),O=new W1,N=new rR(I,Be,g,O,w,Oe,T),de=new pA(B),pe=new ME(I),Ne=new rA(I,pe),X=new gA(I,pe,T,Ne),se=new yA(I,X,pe,Ne,T),z=new xA(I,w,N),Me=new lA(O),ge=new G1(B,de,Be,w,Ne,Me),we=new dR(B,O),Ee=new $1,Re=new J1(Be),Ye=new sA(B,de,g,se,_,l),Ue=new iR(B,se,w),Se=new hR(I,T,w,g),Ie=new oA(I,Be,T),_e=new _A(I,Be,T),T.programs=ge.programs,B.capabilities=w,B.extensions=Be,B.properties=O,B.renderLists=Ee,B.shadowMap=Ue,B.state=g,B.info=T}Je(),x!==Wn&&(P=new MA(x,n.width,n.height,a,s,r));const Ze=new uR(B,I);this.xr=Ze,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Be.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Be.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(K,U,!1))},this.getSize=function(M){return M.set(K,U)},this.setSize=function(M,$,oe=!0){if(Ze.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,U=$,n.width=Math.floor(M*Z),n.height=Math.floor($*Z),oe===!0&&(n.style.width=M+"px",n.style.height=$+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,M,$)},this.getDrawingBufferSize=function(M){return M.set(K*Z,U*Z).floor()},this.setDrawingBufferSize=function(M,$,oe){K=M,U=$,Z=oe,n.width=Math.floor(M*oe),n.height=Math.floor($*oe),this.setViewport(0,0,M,$)},this.setEffects=function(M){if(x===Wn){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let $=0;$<M.length;$++)if(M[$].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ye)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,$,oe,ne){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,$,oe,ne),g.viewport(ye.copy(Pe).multiplyScalar(Z).round())},this.getScissor=function(M){return M.copy(C)},this.setScissor=function(M,$,oe,ne){M.isVector4?C.set(M.x,M.y,M.z,M.w):C.set(M,$,oe,ne),g.scissor(De.copy(C).multiplyScalar(Z).round())},this.getScissorTest=function(){return D},this.setScissorTest=function(M){g.setScissorTest(D=M)},this.setOpaqueSort=function(M){ce=M},this.setTransparentSort=function(M){Ae=M},this.getClearColor=function(M){return M.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(M=!0,$=!0,oe=!0){let ne=0;if(M){let ie=!1;if(re!==null){const Ve=re.texture.format;ie=m.has(Ve)}if(ie){const Ve=re.texture.type,$e=p.has(Ve),ke=Ye.getClearColor(),et=Ye.getClearAlpha(),tt=ke.r,lt=ke.g,ht=ke.b;$e?(S[0]=tt,S[1]=lt,S[2]=ht,S[3]=et,I.clearBufferuiv(I.COLOR,0,S)):(E[0]=tt,E[1]=lt,E[2]=ht,E[3]=et,I.clearBufferiv(I.COLOR,0,E))}else ne|=I.COLOR_BUFFER_BIT}$&&(ne|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&I.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",Tt,!1),n.removeEventListener("webglcontextcreationerror",bn,!1),Ye.dispose(),Ee.dispose(),Re.dispose(),O.dispose(),de.dispose(),se.dispose(),Ne.dispose(),Se.dispose(),ge.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",ft),Ze.removeEventListener("sessionend",dt),_t.stop()};function Dt(M){M.preventDefault(),ih("WebGLRenderer: Context Lost."),F=!0}function Tt(){ih("WebGLRenderer: Context Restored."),F=!1;const M=T.autoReset,$=Ue.enabled,oe=Ue.autoUpdate,ne=Ue.needsUpdate,ie=Ue.type;Je(),T.autoReset=M,Ue.enabled=$,Ue.autoUpdate=oe,Ue.needsUpdate=ne,Ue.type=ie}function bn(M){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function En(M){const $=M.target;$.removeEventListener("dispose",En),Cl($)}function Cl(M){Pl(M),O.remove(M)}function Pl(M){const $=O.get(M).programs;$!==void 0&&($.forEach(function(oe){ge.releaseProgram(oe)}),M.isShaderMaterial&&ge.releaseShaderCache(M))}this.renderBufferDirect=function(M,$,oe,ne,ie,Ve){$===null&&($=ve);const $e=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,ke=Xo(M,$,oe,ne,ie);g.setMaterial(ne,$e);let et=oe.index,tt=1;if(ne.wireframe===!0){if(et=X.getWireframeAttribute(oe),et===void 0)return;tt=2}const lt=oe.drawRange,ht=oe.attributes.position;let nt=lt.start*tt,Xe=(lt.start+lt.count)*tt;Ve!==null&&(nt=Math.max(nt,Ve.start*tt),Xe=Math.min(Xe,(Ve.start+Ve.count)*tt)),et!==null?(nt=Math.max(nt,0),Xe=Math.min(Xe,et.count)):ht!=null&&(nt=Math.max(nt,0),Xe=Math.min(Xe,ht.count));const Xt=Xe-nt;if(Xt<0||Xt===1/0)return;Ne.setup(ie,ne,ke,oe,et);let qt,Nt=Ie;if(et!==null&&(qt=pe.get(et),Nt=_e,Nt.setIndex(qt)),ie.isMesh)ne.wireframe===!0?(g.setLineWidth(ne.wireframeLinewidth*Fe()),Nt.setMode(I.LINES)):Nt.setMode(I.TRIANGLES);else if(ie.isLine){let pn=ne.linewidth;pn===void 0&&(pn=1),g.setLineWidth(pn*Fe()),ie.isLineSegments?Nt.setMode(I.LINES):ie.isLineLoop?Nt.setMode(I.LINE_LOOP):Nt.setMode(I.LINE_STRIP)}else ie.isPoints?Nt.setMode(I.POINTS):ie.isSprite&&Nt.setMode(I.TRIANGLES);if(ie.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))Nt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const pn=ie._multiDrawStarts,Ke=ie._multiDrawCounts,zn=ie._multiDrawCount,bt=et?pe.get(et).bytesPerElement:1,Yn=O.get(ne).currentProgram.getUniforms();for(let hi=0;hi<zn;hi++)Yn.setValue(I,"_gl_DrawID",hi),Nt.render(pn[hi]/bt,Ke[hi])}else if(ie.isInstancedMesh)Nt.renderInstances(nt,Xt,ie.count);else if(oe.isInstancedBufferGeometry){const pn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ke=Math.min(oe.instanceCount,pn);Nt.renderInstances(nt,Xt,Ke)}else Nt.render(nt,Xt)};function me(M,$,oe){M.transparent===!0&&M.side===jn&&M.forceSinglePass===!1?(M.side=kn,M.needsUpdate=!0,Wt(M,$,oe),M.side=ys,M.needsUpdate=!0,Wt(M,$,oe),M.side=jn):Wt(M,$,oe)}this.compile=function(M,$,oe=null){oe===null&&(oe=M),A=Re.get(oe),A.init($),y.push(A),oe.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(A.pushLight(ie),ie.castShadow&&A.pushShadow(ie))}),M!==oe&&M.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(A.pushLight(ie),ie.castShadow&&A.pushShadow(ie))}),A.setupLights();const ne=new Set;return M.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ve=ie.material;if(Ve)if(Array.isArray(Ve))for(let $e=0;$e<Ve.length;$e++){const ke=Ve[$e];me(ke,oe,ie),ne.add(ke)}else me(Ve,oe,ie),ne.add(Ve)}),A=y.pop(),ne},this.compileAsync=function(M,$,oe=null){const ne=this.compile(M,$,oe);return new Promise(ie=>{function Ve(){if(ne.forEach(function($e){O.get($e).currentProgram.isReady()&&ne.delete($e)}),ne.size===0){ie(M);return}setTimeout(Ve,10)}Be.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let J=null;function Qe(M){J&&J(M)}function ft(){_t.stop()}function dt(){_t.start()}const _t=new Cg;_t.setAnimationLoop(Qe),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(M){J=M,Ze.setAnimationLoop(M),M===null?_t.stop():_t.start()},Ze.addEventListener("sessionstart",ft),Ze.addEventListener("sessionend",dt),this.render=function(M,$){if($!==void 0&&$.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;H!==null&&H.renderStart(M,$);const oe=Ze.enabled===!0&&Ze.isPresenting===!0,ne=P!==null&&(re===null||oe)&&P.begin(B,re);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera($),$=Ze.getCamera()),M.isScene===!0&&M.onBeforeRender(B,M,$,re),A=Re.get(M,y.length),A.init($),A.state.textureUnits=N.getTextureUnits(),y.push(A),te.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),k.setFromProjectionMatrix(te,bi,$.reversedDepth),V=this.localClippingEnabled,Q=Me.init(this.clippingPlanes,V),R=Ee.get(M,L.length),R.init(),L.push(R),Ze.enabled===!0&&Ze.isPresenting===!0){const $e=B.xr.getDepthSensingMesh();$e!==null&&xt($e,$,-1/0,B.sortObjects)}xt(M,$,0,B.sortObjects),R.finish(),B.sortObjects===!0&&R.sort(ce,Ae,$.reversedDepth),ue=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,ue&&Ye.addToRenderList(R,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&Me.beginShadows();const ie=A.state.shadowsArray;if(Ue.render(ie,M,$),Q===!0&&Me.endShadows(),(ne&&P.hasRenderPass())===!1){const $e=R.opaque,ke=R.transmissive;if(A.setupLights(),$.isArrayCamera){const et=$.cameras;if(ke.length>0)for(let tt=0,lt=et.length;tt<lt;tt++){const ht=et[tt];Nn($e,ke,M,ht)}ue&&Ye.render(M);for(let tt=0,lt=et.length;tt<lt;tt++){const ht=et[tt];Ft(R,M,ht,ht.viewport)}}else ke.length>0&&Nn($e,ke,M,$),ue&&Ye.render(M),Ft(R,M,$)}re!==null&&G===0&&(N.updateMultisampleRenderTarget(re),N.updateRenderTargetMipmap(re)),ne&&P.end(B),M.isScene===!0&&M.onAfterRender(B,M,$),Ne.resetDefaultState(),be=-1,Ce=null,y.pop(),y.length>0?(A=y[y.length-1],N.setTextureUnits(A.state.textureUnits),Q===!0&&Me.setGlobalState(B.clippingPlanes,A.state.camera)):A=null,L.pop(),L.length>0?R=L[L.length-1]:R=null,H!==null&&H.renderEnd()};function xt(M,$,oe,ne){if(M.visible===!1)return;if(M.layers.test($.layers)){if(M.isGroup)oe=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update($);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||k.intersectsSprite(M)){ne&&xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(te);const $e=se.update(M),ke=M.material;ke.visible&&R.push(M,$e,ke,oe,xe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||k.intersectsObject(M))){const $e=se.update(M),ke=M.material;if(ne&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),xe.copy(M.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),xe.copy($e.boundingSphere.center)),xe.applyMatrix4(M.matrixWorld).applyMatrix4(te)),Array.isArray(ke)){const et=$e.groups;for(let tt=0,lt=et.length;tt<lt;tt++){const ht=et[tt],nt=ke[ht.materialIndex];nt&&nt.visible&&R.push(M,$e,nt,oe,xe.z,ht)}}else ke.visible&&R.push(M,$e,ke,oe,xe.z,null)}}const Ve=M.children;for(let $e=0,ke=Ve.length;$e<ke;$e++)xt(Ve[$e],$,oe,ne)}function Ft(M,$,oe,ne){const{opaque:ie,transmissive:Ve,transparent:$e}=M;A.setupLightsView(oe),Q===!0&&Me.setGlobalState(B.clippingPlanes,oe),ne&&g.viewport(ye.copy(ne)),ie.length>0&&yt(ie,$,oe),Ve.length>0&&yt(Ve,$,oe),$e.length>0&&yt($e,$,oe),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Nn(M,$,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ne.id]===void 0){const nt=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ne.id]=new wi(1,1,{generateMipmaps:!0,type:nt?Zi:Wn,minFilter:Bs,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Ve=A.state.transmissionRenderTarget[ne.id],$e=ne.viewport||ye;Ve.setSize($e.z*B.transmissionResolutionScale,$e.w*B.transmissionResolutionScale);const ke=B.getRenderTarget(),et=B.getActiveCubeFace(),tt=B.getActiveMipmapLevel();B.setRenderTarget(Ve),B.getClearColor(je),qe=B.getClearAlpha(),qe<1&&B.setClearColor(16777215,.5),B.clear(),ue&&Ye.render(oe);const lt=B.toneMapping;B.toneMapping=Ti;const ht=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),A.setupLightsView(ne),Q===!0&&Me.setGlobalState(B.clippingPlanes,ne),yt(M,oe,ne),N.updateMultisampleRenderTarget(Ve),N.updateRenderTargetMipmap(Ve),Be.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Xe=0,Xt=$.length;Xe<Xt;Xe++){const qt=$[Xe],{object:Nt,geometry:pn,material:Ke,group:zn}=qt;if(Ke.side===jn&&Nt.layers.test(ne.layers)){const bt=Ke.side;Ke.side=kn,Ke.needsUpdate=!0,Gt(Nt,oe,ne,pn,Ke,zn),Ke.side=bt,Ke.needsUpdate=!0,nt=!0}}nt===!0&&(N.updateMultisampleRenderTarget(Ve),N.updateRenderTargetMipmap(Ve))}B.setRenderTarget(ke,et,tt),B.setClearColor(je,qe),ht!==void 0&&(ne.viewport=ht),B.toneMapping=lt}function yt(M,$,oe){const ne=$.isScene===!0?$.overrideMaterial:null;for(let ie=0,Ve=M.length;ie<Ve;ie++){const $e=M[ie],{object:ke,geometry:et,group:tt}=$e;let lt=$e.material;lt.allowOverride===!0&&ne!==null&&(lt=ne),ke.layers.test(oe.layers)&&Gt(ke,$,oe,et,lt,tt)}}function Gt(M,$,oe,ne,ie,Ve){M.onBeforeRender(B,$,oe,ne,ie,Ve),M.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),ie.onBeforeRender(B,$,oe,ne,M,Ve),ie.transparent===!0&&ie.side===jn&&ie.forceSinglePass===!1?(ie.side=kn,ie.needsUpdate=!0,B.renderBufferDirect(oe,$,ne,ie,M,Ve),ie.side=ys,ie.needsUpdate=!0,B.renderBufferDirect(oe,$,ne,ie,M,Ve),ie.side=jn):B.renderBufferDirect(oe,$,ne,ie,M,Ve),M.onAfterRender(B,$,oe,ne,ie,Ve)}function Wt(M,$,oe){$.isScene!==!0&&($=ve);const ne=O.get(M),ie=A.state.lights,Ve=A.state.shadowsArray,$e=ie.state.version,ke=ge.getParameters(M,ie.state,Ve,$,oe,A.state.lightProbeGridArray),et=ge.getProgramCacheKey(ke);let tt=ne.programs;ne.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?$.environment:null,ne.fog=$.fog;const lt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;ne.envMap=de.get(M.envMap||ne.environment,lt),ne.envMapRotation=ne.environment!==null&&M.envMap===null?$.environmentRotation:M.envMapRotation,tt===void 0&&(M.addEventListener("dispose",En),tt=new Map,ne.programs=tt);let ht=tt.get(et);if(ht!==void 0){if(ne.currentProgram===ht&&ne.lightsStateVersion===$e)return Es(M,ke),ht}else ke.uniforms=ge.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,oe,ke),M.onBeforeCompile(ke,B),ht=ge.acquireProgram(ke,et),tt.set(et,ht),ne.uniforms=ke.uniforms;const nt=ne.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(nt.clippingPlanes=Me.uniform),Es(M,ke),ne.needsLights=qo(M),ne.lightsStateVersion=$e,ne.needsLights&&(nt.ambientLightColor.value=ie.state.ambient,nt.lightProbe.value=ie.state.probe,nt.directionalLights.value=ie.state.directional,nt.directionalLightShadows.value=ie.state.directionalShadow,nt.spotLights.value=ie.state.spot,nt.spotLightShadows.value=ie.state.spotShadow,nt.rectAreaLights.value=ie.state.rectArea,nt.ltc_1.value=ie.state.rectAreaLTC1,nt.ltc_2.value=ie.state.rectAreaLTC2,nt.pointLights.value=ie.state.point,nt.pointLightShadows.value=ie.state.pointShadow,nt.hemisphereLights.value=ie.state.hemi,nt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,nt.spotLightMatrix.value=ie.state.spotLightMatrix,nt.spotLightMap.value=ie.state.spotLightMap,nt.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=A.state.lightProbeGridArray.length>0,ne.currentProgram=ht,ne.uniformsList=null,ht}function qn(M){if(M.uniformsList===null){const $=M.currentProgram.getUniforms();M.uniformsList=Fa.seqWithValue($.seq,M.uniforms)}return M.uniformsList}function Es(M,$){const oe=O.get(M);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function Ts(M,$){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition($.matrixWorld);for(let oe=0,ne=M.length;oe<ne;oe++){const ie=M[oe];if(ie.texture!==null&&ie.boundingBox.containsPoint(v))return ie}return null}function Xo(M,$,oe,ne,ie){$.isScene!==!0&&($=ve),N.resetTextureUnits();const Ve=$.fog,$e=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?$.environment:null,ke=re===null?B.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:St.workingColorSpace,et=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,tt=de.get(ne.envMap||$e,et),lt=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ht=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),nt=!!oe.morphAttributes.position,Xe=!!oe.morphAttributes.normal,Xt=!!oe.morphAttributes.color;let qt=Ti;ne.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(qt=B.toneMapping);const Nt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,pn=Nt!==void 0?Nt.length:0,Ke=O.get(ne),zn=A.state.lights;if(Q===!0&&(V===!0||M!==Ce)){const Bt=M===Ce&&ne.id===be;Me.setState(ne,M,Bt)}let bt=!1;ne.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==zn.state.version||Ke.outputColorSpace!==ke||ie.isBatchedMesh&&Ke.batching===!1||!ie.isBatchedMesh&&Ke.batching===!0||ie.isBatchedMesh&&Ke.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ke.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ke.instancing===!1||!ie.isInstancedMesh&&Ke.instancing===!0||ie.isSkinnedMesh&&Ke.skinning===!1||!ie.isSkinnedMesh&&Ke.skinning===!0||ie.isInstancedMesh&&Ke.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ke.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ke.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ke.instancingMorph===!1&&ie.morphTexture!==null||Ke.envMap!==tt||ne.fog===!0&&Ke.fog!==Ve||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Me.numPlanes||Ke.numIntersection!==Me.numIntersection)||Ke.vertexAlphas!==lt||Ke.vertexTangents!==ht||Ke.morphTargets!==nt||Ke.morphNormals!==Xe||Ke.morphColors!==Xt||Ke.toneMapping!==qt||Ke.morphTargetsCount!==pn||!!Ke.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Ke.__version=ne.version);let Yn=Ke.currentProgram;bt===!0&&(Yn=Wt(ne,$,ie),H&&ne.isNodeMaterial&&H.onUpdateProgram(ne,Yn,Ke));let hi=!1,ns=!1,Zs=!1;const Ut=Yn.getUniforms(),Zt=Ke.uniforms;if(g.useProgram(Yn.program)&&(hi=!0,ns=!0,Zs=!0),ne.id!==be&&(be=ne.id,ns=!0),Ke.needsLights){const Bt=Ts(A.state.lightProbeGridArray,ie);Ke.lightProbeGrid!==Bt&&(Ke.lightProbeGrid=Bt,ns=!0)}if(hi||Ce!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ut.setValue(I,"projectionMatrix",M.projectionMatrix),Ut.setValue(I,"viewMatrix",M.matrixWorldInverse);const ss=Ut.map.cameraPosition;ss!==void 0&&ss.setValue(I,Te.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&Ut.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ut.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),Ce!==M&&(Ce=M,ns=!0,Zs=!0)}if(Ke.needsLights&&(zn.state.directionalShadowMap.length>0&&Ut.setValue(I,"directionalShadowMap",zn.state.directionalShadowMap,N),zn.state.spotShadowMap.length>0&&Ut.setValue(I,"spotShadowMap",zn.state.spotShadowMap,N),zn.state.pointShadowMap.length>0&&Ut.setValue(I,"pointShadowMap",zn.state.pointShadowMap,N)),ie.isSkinnedMesh){Ut.setOptional(I,ie,"bindMatrix"),Ut.setOptional(I,ie,"bindMatrixInverse");const Bt=ie.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ut.setValue(I,"boneTexture",Bt.boneTexture,N))}ie.isBatchedMesh&&(Ut.setOptional(I,ie,"batchingTexture"),Ut.setValue(I,"batchingTexture",ie._matricesTexture,N),Ut.setOptional(I,ie,"batchingIdTexture"),Ut.setValue(I,"batchingIdTexture",ie._indirectTexture,N),Ut.setOptional(I,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Ut.setValue(I,"batchingColorTexture",ie._colorsTexture,N));const is=oe.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&z.update(ie,oe,Yn),(ns||Ke.receiveShadow!==ie.receiveShadow)&&(Ke.receiveShadow=ie.receiveShadow,Ut.setValue(I,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&$.environment!==null&&(Zt.envMapIntensity.value=$.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=mR()),ns){if(Ut.setValue(I,"toneMappingExposure",B.toneMappingExposure),Ke.needsLights&&$o(Zt,Zs),Ve&&ne.fog===!0&&we.refreshFogUniforms(Zt,Ve),we.refreshMaterialUniforms(Zt,ne,Z,U,A.state.transmissionRenderTarget[M.id]),Ke.needsLights&&Ke.lightProbeGrid){const Bt=Ke.lightProbeGrid;Zt.probesSH.value=Bt.texture,Zt.probesMin.value.copy(Bt.boundingBox.min),Zt.probesMax.value.copy(Bt.boundingBox.max),Zt.probesResolution.value.copy(Bt.resolution)}Fa.upload(I,qn(Ke),Zt,N)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Fa.upload(I,qn(Ke),Zt,N),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ut.setValue(I,"center",ie.center),Ut.setValue(I,"modelViewMatrix",ie.modelViewMatrix),Ut.setValue(I,"normalMatrix",ie.normalMatrix),Ut.setValue(I,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Bt=ne.uniformsGroups;for(let ss=0,js=Bt.length;ss<js;ss++){const Uf=Bt[ss];Se.update(Uf,Yn),Se.bind(Uf,Yn)}}return Yn}function $o(M,$){M.ambientLightColor.needsUpdate=$,M.lightProbe.needsUpdate=$,M.directionalLights.needsUpdate=$,M.directionalLightShadows.needsUpdate=$,M.pointLights.needsUpdate=$,M.pointLightShadows.needsUpdate=$,M.spotLights.needsUpdate=$,M.spotLightShadows.needsUpdate=$,M.rectAreaLights.needsUpdate=$,M.hemisphereLights.needsUpdate=$}function qo(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(M,$,oe){const ne=O.get(M);ne.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),O.get(M.texture).__webglTexture=$,O.get(M.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,$){const oe=O.get(M);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(M,$=0,oe=0){re=M,j=$,G=oe;let ne=null,ie=!1,Ve=!1;if(M){const ke=O.get(M);if(ke.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(I.FRAMEBUFFER,ke.__webglFramebuffer),ye.copy(M.viewport),De.copy(M.scissor),ze=M.scissorTest,g.viewport(ye),g.scissor(De),g.setScissorTest(ze),be=-1;return}else if(ke.__webglFramebuffer===void 0)N.setupRenderTarget(M);else if(ke.__hasExternalTextures)N.rebindTextures(M,O.get(M.texture).__webglTexture,O.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const lt=M.depthTexture;if(ke.__boundDepthTexture!==lt){if(lt!==null&&O.has(lt)&&(M.width!==lt.image.width||M.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(M)}}const et=M.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ve=!0);const tt=O.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(tt[$])?ne=tt[$][oe]:ne=tt[$],ie=!0):M.samples>0&&N.useMultisampledRTT(M)===!1?ne=O.get(M).__webglMultisampledFramebuffer:Array.isArray(tt)?ne=tt[oe]:ne=tt,ye.copy(M.viewport),De.copy(M.scissor),ze=M.scissorTest}else ye.copy(Pe).multiplyScalar(Z).floor(),De.copy(C).multiplyScalar(Z).floor(),ze=D;if(oe!==0&&(ne=ee),g.bindFramebuffer(I.FRAMEBUFFER,ne)&&g.drawBuffers(M,ne),g.viewport(ye),g.scissor(De),g.setScissorTest(ze),ie){const ke=O.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,oe)}else if(Ve){const ke=$;for(let et=0;et<M.textures.length;et++){const tt=O.get(M.textures[et]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+et,tt.__webglTexture,oe,ke)}}else if(M!==null&&oe!==0){const ke=O.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ke.__webglTexture,oe)}be=-1},this.readRenderTargetPixels=function(M,$,oe,ne,ie,Ve,$e,ke=0){if(!(M&&M.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=O.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&$e!==void 0&&(et=et[$e]),et){g.bindFramebuffer(I.FRAMEBUFFER,et);try{const tt=M.textures[ke],lt=tt.format,ht=tt.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ke),!w.textureFormatReadable(lt)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(ht)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=M.width-ne&&oe>=0&&oe<=M.height-ie&&I.readPixels($,oe,ne,ie,Oe.convert(lt),Oe.convert(ht),Ve)}finally{const tt=re!==null?O.get(re).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(M,$,oe,ne,ie,Ve,$e,ke=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=O.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&$e!==void 0&&(et=et[$e]),et)if($>=0&&$<=M.width-ne&&oe>=0&&oe<=M.height-ie){g.bindFramebuffer(I.FRAMEBUFFER,et);const tt=M.textures[ke],lt=tt.format,ht=tt.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ke),!w.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.bufferData(I.PIXEL_PACK_BUFFER,Ve.byteLength,I.STREAM_READ),I.readPixels($,oe,ne,ie,Oe.convert(lt),Oe.convert(ht),0);const Xe=re!==null?O.get(re).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,Xe);const Xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Sb(I,Xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ve),I.deleteBuffer(nt),I.deleteSync(Xt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,$=null,oe=0){const ne=Math.pow(2,-oe),ie=Math.floor(M.image.width*ne),Ve=Math.floor(M.image.height*ne),$e=$!==null?$.x:0,ke=$!==null?$.y:0;N.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,oe,0,0,$e,ke,ie,Ve),g.unbindTexture()},this.copyTextureToTexture=function(M,$,oe=null,ne=null,ie=0,Ve=0){let $e,ke,et,tt,lt,ht,nt,Xe,Xt;const qt=M.isCompressedTexture?M.mipmaps[Ve]:M.image;if(oe!==null)$e=oe.max.x-oe.min.x,ke=oe.max.y-oe.min.y,et=oe.isBox3?oe.max.z-oe.min.z:1,tt=oe.min.x,lt=oe.min.y,ht=oe.isBox3?oe.min.z:0;else{const Zt=Math.pow(2,-ie);$e=Math.floor(qt.width*Zt),ke=Math.floor(qt.height*Zt),M.isDataArrayTexture?et=qt.depth:M.isData3DTexture?et=Math.floor(qt.depth*Zt):et=1,tt=0,lt=0,ht=0}ne!==null?(nt=ne.x,Xe=ne.y,Xt=ne.z):(nt=0,Xe=0,Xt=0);const Nt=Oe.convert($.format),pn=Oe.convert($.type);let Ke;$.isData3DTexture?(N.setTexture3D($,0),Ke=I.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(N.setTexture2DArray($,0),Ke=I.TEXTURE_2D_ARRAY):(N.setTexture2D($,0),Ke=I.TEXTURE_2D),g.activeTexture(I.TEXTURE0),g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);const zn=g.getParameter(I.UNPACK_ROW_LENGTH),bt=g.getParameter(I.UNPACK_IMAGE_HEIGHT),Yn=g.getParameter(I.UNPACK_SKIP_PIXELS),hi=g.getParameter(I.UNPACK_SKIP_ROWS),ns=g.getParameter(I.UNPACK_SKIP_IMAGES);g.pixelStorei(I.UNPACK_ROW_LENGTH,qt.width),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qt.height),g.pixelStorei(I.UNPACK_SKIP_PIXELS,tt),g.pixelStorei(I.UNPACK_SKIP_ROWS,lt),g.pixelStorei(I.UNPACK_SKIP_IMAGES,ht);const Zs=M.isDataArrayTexture||M.isData3DTexture,Ut=$.isDataArrayTexture||$.isData3DTexture;if(M.isDepthTexture){const Zt=O.get(M),is=O.get($),Bt=O.get(Zt.__renderTarget),ss=O.get(is.__renderTarget);g.bindFramebuffer(I.READ_FRAMEBUFFER,Bt.__webglFramebuffer),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let js=0;js<et;js++)Zs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,O.get(M).__webglTexture,ie,ht+js),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,O.get($).__webglTexture,Ve,Xt+js)),I.blitFramebuffer(tt,lt,$e,ke,nt,Xe,$e,ke,I.DEPTH_BUFFER_BIT,I.NEAREST);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(ie!==0||M.isRenderTargetTexture||O.has(M)){const Zt=O.get(M),is=O.get($);g.bindFramebuffer(I.READ_FRAMEBUFFER,le),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,q);for(let Bt=0;Bt<et;Bt++)Zs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.__webglTexture,ie,ht+Bt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zt.__webglTexture,ie),Ut?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,is.__webglTexture,Ve,Xt+Bt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,is.__webglTexture,Ve),ie!==0?I.blitFramebuffer(tt,lt,$e,ke,nt,Xe,$e,ke,I.COLOR_BUFFER_BIT,I.NEAREST):Ut?I.copyTexSubImage3D(Ke,Ve,nt,Xe,Xt+Bt,tt,lt,$e,ke):I.copyTexSubImage2D(Ke,Ve,nt,Xe,tt,lt,$e,ke);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ut?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Ke,Ve,nt,Xe,Xt,$e,ke,et,Nt,pn,qt.data):$.isCompressedArrayTexture?I.compressedTexSubImage3D(Ke,Ve,nt,Xe,Xt,$e,ke,et,Nt,qt.data):I.texSubImage3D(Ke,Ve,nt,Xe,Xt,$e,ke,et,Nt,pn,qt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ve,nt,Xe,$e,ke,Nt,pn,qt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ve,nt,Xe,qt.width,qt.height,Nt,qt.data):I.texSubImage2D(I.TEXTURE_2D,Ve,nt,Xe,$e,ke,Nt,pn,qt);g.pixelStorei(I.UNPACK_ROW_LENGTH,zn),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt),g.pixelStorei(I.UNPACK_SKIP_PIXELS,Yn),g.pixelStorei(I.UNPACK_SKIP_ROWS,hi),g.pixelStorei(I.UNPACK_SKIP_IMAGES,ns),Ve===0&&$.generateMipmaps&&I.generateMipmap(Ke),g.unbindTexture()},this.initRenderTarget=function(M){O.get(M).__webglFramebuffer===void 0&&N.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?N.setTextureCube(M,0):M.isData3DTexture?N.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?N.setTexture2DArray(M,0):N.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){j=0,G=0,re=null,g.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}const np={type:"change"},Cf={type:"start"},Bg={type:"end"},ba=new wl,ip=new ps,gR=Math.cos(70*Oa.DEG2RAD),Qt=new Y,Un=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rc=1e-6;class kg extends yE{constructor(e,n=null){super(e,n),this.state=It.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:_r.ROTATE,TWO:_r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new li,this._lastTargetPosition=new Y,this._quat=new li().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ph,this._sphericalDelta=new Ph,this._scale=1,this._panOffset=new Y,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new Y,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vR.bind(this),this._onPointerDown=_R.bind(this),this._onPointerUp=xR.bind(this),this._onContextMenu=wR.bind(this),this._onMouseWheel=MR.bind(this),this._onKeyDown=bR.bind(this),this._onTouchStart=ER.bind(this),this._onTouchMove=TR.bind(this),this._onMouseDown=yR.bind(this),this._onMouseMove=SR.bind(this),this._interceptControlDown=AR.bind(this),this._interceptControlUp=RR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(np),this.update(),this.state=It.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Qt.copy(n).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Un:i>Math.PI&&(i-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Qt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ba.origin.copy(this.object.position),ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ba.direction))<gR?this.object.lookAt(this.target):(ip.setFromNormalAndCoplanarPoint(this.object.up,this.target),ba.intersectPlane(ip,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Rc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rc||this._lastTargetPosition.distanceToSquared(this.target)>Rc?(this.dispatchEvent(np),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Qt.setFromMatrixColumn(n,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,n){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(n,1):(Qt.setFromMatrixColumn(n,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Qt.copy(s).sub(this.target);let r=Qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/n.clientHeight),this._rotateUp(Un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/n.clientHeight),this._rotateUp(Un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ot,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _R(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function vR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function xR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bg),this.state=It.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function yR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=It.DOLLY;break;case Mr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}break;case Mr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Cf)}function SR(t){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function MR(t){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(t.preventDefault(),this.dispatchEvent(Cf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Bg))}function bR(t){this.enabled!==!1&&this._handleKeyDown(t)}function ER(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case _r.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=It.TOUCH_ROTATE;break;case _r.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case _r.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=It.TOUCH_DOLLY_PAN;break;case _r.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Cf)}function TR(t){switch(this._trackPointer(t),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=It.NONE}}function wR(t){this.enabled!==!1&&t.preventDefault()}function AR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const CR={class:"rgbd-viewer"},PR={key:0},DR=["value"],LR={class:"stream-workspace"},IR={class:"stream-main"},NR={class:"video-viewport"},UR={key:0,class:"detection-layer"},OR={class:"video-playback-controls"},FR=["aria-label","title"],BR=["value","max"],kR={class:"stream-sidebar"},zR={class:"side-section screw-position-card"},VR={class:"screw-fusion-control"},HR=["value"],GR={key:0,class:"no-screw-localization"},WR={class:"absolute-position"},XR={key:0},$R={key:1},qR={key:2,class:"frame-details"},YR={key:3},KR={class:"telemetry-dashboard"},ZR={class:"position-scene-card"},jR={class:"fusion-data-card"},JR={class:"current-position"},QR={key:0,class:"gwo-diagnostics"},eC={class:"sensor-columns"},tC={class:"uwb-range-grid"},nC={key:0},iC={class:"imu-readout"},sC={key:1,class:"path-algorithm-menu"},rC=["value"],oC={key:2,class:"path-note"},aC=["value"],lC={key:1,class:"alert"},cC={__name:"RgbdViewer",props:{operationId:String,mode:String,view:String,sessions:Array,selectedSession:String,showDetections:Boolean},setup(t){const e=t,n=Ge(""),i=Ge(null),s=Ge([]),r=Ge(!1),o=Ge(""),a=Ge("average"),l=Ge(null),c=Ge(null),u=Ge(null),f=Ge(0),d={average:"平均法（多幀座標平均）",ekf:"EKF（靜態位置濾波）",es_ekf:"ESKF（誤差狀態濾波）",rmv_fgo:"RMV-FGO（強健多視角因子圖）"},h={average:"平均法",ekf:"EKF",es_ekf:"ESKF",rmv_fgo:"RMV-FGO"},_=g=>Number.isFinite(Number(g))&&g!=null?Number(g).toFixed(3):"—",x=at(()=>E.value?`X ${_(E.value.position.x)}　Y ${_(E.value.position.y)}　Z ${_(E.value.position.z)} m`:"—"),m=at(()=>{var g;return(g=i.value)==null?void 0:g.frame}),p=at(()=>{var g,T;return((T=(g=m.value)==null?void 0:g.fusion)==null?void 0:T.detections)||[]}),S=at(()=>{var g;return((g=s.value.at(-1))==null?void 0:g.videoTimeMs)||0}),E=at(()=>{var g;return(g=m.value)==null?void 0:g.devicePose}),v=Ge(!0),R={ekf:"ES-EKF",complementary:"互補濾波",weighted_average:"加權平均",gwo4d:"4D-GWO + IMU"},A={ekf:"#2563eb",complementary:"#059669",weighted_average:"#d97706",gwo4d:"#9333ea"},L=Ge(["ekf","complementary","weighted_average","gwo4d"]),y=Ge("ekf"),P=Ge(null),B=at(()=>{var g;return((g=i.value)==null?void 0:g.deviceAlgorithms)||{}}),F=at(()=>Object.keys(B.value).length>0),H=at(()=>{var g,T,O;return(T=(g=E.value)==null?void 0:g.uwbRanges)!=null&&T.length?E.value:((O=Object.values(B.value).find(N=>{var de,pe;return(pe=(de=N.telemetry)==null?void 0:de.uwbRanges)==null?void 0:pe.length}))==null?void 0:O.telemetry)||E.value}),ee=at(()=>{var g,T,O;return e.mode==="history"&&L.value.includes("gwo4d")?(T=(g=B.value.gwo4d)==null?void 0:g.telemetry)==null?void 0:T.deviceLocalization:(O=E.value)==null?void 0:O.deviceLocalization}),le=at(()=>{var g;return((g=H.value)==null?void 0:g.uwbRanges)||[]}),q=at(()=>{var O;const g=(O=E.value)==null?void 0:O.quaternion;if(!g)return null;const T=new Ji().setFromQuaternion(new li(g.x,g.y,g.z,g.w),"ZYX");return{x:Oa.radToDeg(T.x),y:Oa.radToDeg(T.y),z:Oa.radToDeg(T.z)}}),j=g=>g?["x","y","z"].map(T=>Number(g[T]).toFixed(3)).join(", "):"—",G=at(()=>{var g,T;return(((T=(g=m.value)==null?void 0:g.fusion)==null?void 0:T.referenceScrews)||[]).map(O=>{var N,de,pe,X,se,ge,we,Ee,Re;return{...O,position:((ge=(se=(X=(pe=(de=(N=m.value)==null?void 0:N.fusion)==null?void 0:de.state)==null?void 0:pe[O.id])==null?void 0:X.algorithms)==null?void 0:se[a.value])==null?void 0:ge.position)||O,localized:!!((Re=(Ee=(we=m.value)==null?void 0:we.fusion)==null?void 0:Ee.state)!=null&&Re[O.id])}})}),re=at(()=>{var O;const g=(O=E.value)==null?void 0:O.position;if(!g)return"";const T=G.value.map(N=>({...N,distance:Math.hypot(g.x-N.position.x,g.y-N.position.y,g.z-N.position.z)})).filter(N=>N.distance<=3).sort((N,de)=>N.distance-de.distance)[0];return T?`附近有 ${T.type}（${T.id}），距離 ${T.distance.toFixed(2)} m。`:""});let be,Ce=!1,ye=0,De=!0,ze=0,je=0,qe,K,U,Z,ce,Ae,Pe,C;const D={},k=g=>new Y(g.x,g.z,g.y);async function Q(){const g=e.operationId,T=n.value,O=ye,N=[];let de=-1;for(;De&&O===ye;){const{data:pe}=await Lt.get(`/rgbd/frames/${g}`,{params:{sessionId:T,after:de,index:1,limit:500}});if(N.push(...pe),pe.length<500)break;de=pe.at(-1).frameId}O===ye&&(s.value=N)}async function V(g,T=!1){var Ee,Re,Me;const O=ye,N=e.operationId,de=n.value,pe=e.view,{data:X}=await Lt.get(`/rgbd/snapshot/${N}/${de}/${g}`);if(!T&&X.frame.frameId===((Ee=m.value)==null?void 0:Ee.frameId)&&X.frame.sessionId===((Re=m.value)==null?void 0:Re.sessionId))return;const se=`/rgbd/media/${N}/${de}/${X.frame.frameId}/${pe}`,ge=await Lt.get(se,{responseType:"blob"}),we=await createImageBitmap(ge.data);try{if(!De||O!==ye||pe!==e.view)return;const Ue=l.value;if(!Ue)return;if(Ue.width=we.width,Ue.height=we.height,Ue.getContext("2d").drawImage(we,0,0),i.value=X,f.value=X.frame.videoTimeMs||0,e.mode==="live"){a.value=X.frame.selectedAlgorithm||a.value;const Ye=(Me=X.frame.devicePose)==null?void 0:Me.fusionAlgorithm;(!P.value||Ye===P.value)&&(y.value=Ye||y.value,P.value=null)}o.value="",await Fo(),Be(),w()}finally{we.close()}}async function te(){var g,T;if(!(Ce||!n.value||r.value)){Ce=!0;try{if(e.mode==="live")await V("latest");else if(s.value.length){const O=performance.now();je=Math.min(S.value,je+(ze?O-ze:0)),ze=O;const N=[...s.value].reverse().find(de=>de.videoTimeMs<=je)||s.value[0];await V(N.frameId),je>=S.value&&(r.value=!0)}}catch(O){o.value=((T=(g=O.response)==null?void 0:g.data)==null?void 0:T.error)||"同幀影像或資料讀取失敗，請檢查後端與封包檔案。"}finally{Ce=!1}}}async function Te(){var g,T;if(v.value=!0,ye++,i.value=null,s.value=[],f.value=0,je=0,ze=0,r.value=e.mode==="history",l.value&&l.value.getContext("2d").clearRect(0,0,l.value.width,l.value.height),w(),!!n.value)try{e.mode==="history"?(await Q(),s.value.length&&await V(s.value[0].frameId,!0)):await V("latest",!0)}catch(O){o.value=((T=(g=O.response)==null?void 0:g.data)==null?void 0:T.error)||"無法讀取同幀紀錄。"}}async function xe(g){ye++,r.value=!0,je=Number(g.target.value),ze=0;const T=[...s.value].reverse().find(O=>O.videoTimeMs<=je)||s.value[0];try{T&&await V(T.frameId,!0)}catch{o.value="無法讀取指定幀。"}}function ve(){ye++,r.value=!r.value,ze=0,!r.value&&e.mode==="history"&&je>=S.value&&(je=0),r.value||te()}async function ue(){var g,T;if(w(),e.mode==="live")try{await Lt.post("/simulation/config",{screwFusionAlgorithm:a.value})}catch(O){o.value=((T=(g=O.response)==null?void 0:g.data)==null?void 0:T.error)||"演算法設定失敗。"}}async function Fe(){var g,T,O,N;P.value=y.value;try{await Lt.post("/simulation/config",{fusionAlgorithm:y.value})}catch(de){o.value=((T=(g=de.response)==null?void 0:g.data)==null?void 0:T.error)||"設備融合演算法設定失敗。",(N=(O=de.response)==null?void 0:O.data)!=null&&N.fusionAlgorithm||(P.value=null)}}function I(g){const T=g.bbox,O=m.value.metadata;return{left:`${100*T.x/O.width}%`,top:`${100*T.y/O.height}%`,width:`${100*T.width/O.width}%`,height:`${100*T.height/O.height}%`}}function Le(g){const T=new Jn,O=new Hi({color:g,metalness:.72,roughness:.25}),N=new Ht(new Ks(.045,.045,.25,16),O);N.rotation.z=Math.PI/2;const de=new Ht(new Ks(.105,.105,.045,16),O);return de.rotation.z=Math.PI/2,de.position.x=-.14,T.add(N,de),T}function Be(){if(U||!c.value)return;qe=new _g,qe.background=new gt(16777215),K=new Gn(42,1,.1,100),K.position.set(25,19,26),U=new Fg({antialias:!0}),U.setPixelRatio(Math.min(devicePixelRatio,2)),c.value.appendChild(U.domElement),Z=new kg(K,U.domElement),Z.target.set(10,1.1,6),Z.enableDamping=!0,Z.minDistance=8,Z.maxDistance=42,Z.update(),qe.add(new Eg(16777215,13358561,2));const g=new wg(16777215,2.5);g.position.set(5,7,4),qe.add(g);const T=new Ht(new Wr(20,12),new Hi({color:16317180,roughness:.95}));T.rotation.x=-Math.PI/2,T.position.set(10,-.02,6),qe.add(T);const O=new Rg(20,20,13358561,14870768);O.scale.z=.6,O.position.set(10,0,6),qe.add(O);for(const pe of[0,20])for(const X of[0,12])for(const se of[0,2.5]){const ge=new Jn,we=new Hi({color:3900150,roughness:.35,metalness:.35}),Ee=new Ht(new Qi(.24,.12,.24),we),Re=new Ht(new Qi(.1,.16,.1),we);Re.position.y=.14,ge.add(Ee,Re),ge.position.copy(k({x:pe,y:X,z:se})),ge.userData.label=`基站 (${pe}, ${X}, ${se}) m`,qe.add(ge)}ce=new Jn,ce.add(new Ht(new No(.12,20,16),new Hi({color:1096065,emissive:1096065,emissiveIntensity:.22})));const N=new Ht(new Io(.45,1.2,24,1,!0),new Do({color:1096065,transparent:!0,opacity:.2,side:jn}));N.rotation.x=-Math.PI/2,N.position.z=.6,ce.add(N),qe.add(ce),Ae=new sl(new nn,new Lo({color:14427686})),qe.add(Ae),Pe=new Jn,qe.add(Pe),C=new ResizeObserver(()=>{const pe=c.value.clientWidth,X=c.value.clientHeight||500;U.setSize(pe,X),K.aspect=pe/X,K.updateProjectionMatrix()}),C.observe(c.value);const de=new Ag;U.domElement.addEventListener("pointermove",pe=>{const X=U.domElement.getBoundingClientRect();de.setFromCamera(new ot((pe.clientX-X.left)/X.width*2-1,-(pe.clientY-X.top)/X.height*2+1),K);const se=de.intersectObjects(qe.children,!0).map(ge=>{let we=ge.object;for(;we&&!we.userData.label;)we=we.parent;return we}).find(Boolean);u.value&&(u.value.style.display=se?"block":"none",se&&(u.value.textContent=se.userData.label,u.value.style.left=`${Math.min(pe.clientX-X.left+12,Math.max(0,X.width-250))}px`,u.value.style.top=`${Math.min(pe.clientY-X.top+12,Math.max(0,X.height-80))}px`))}),U.domElement.addEventListener("pointerleave",()=>{u.value&&(u.value.style.display="none")}),U.setAnimationLoop(()=>{Z.update(),U.render(qe,K)})}function w(){var g,T,O,N,de,pe;if(U){if(ce.visible=!!E.value&&v.value&&!F.value,Ae.visible=v.value&&!F.value,E.value){ce.position.copy(k(E.value.position));const X=E.value.quaternion,se=new Vt().makeRotationFromQuaternion(new li(X.x,X.y,X.z,X.w)),ge=(g=m.value.result)==null?void 0:g.calibration,we=(ge==null?void 0:ge.rotationMatrix)||[[1,0,0],[0,1,0],[0,0,1]],Ee=new Vt().set(we[0][0],we[0][1],we[0][2],0,we[1][0],we[1][1],we[1][2],0,we[2][0],we[2][1],we[2][2],0,0,0,0,1),Re=new Y(0,0,1).applyMatrix4(Ee).applyMatrix4(se),Me=new Y(0,-1,0).applyMatrix4(Ee).applyMatrix4(se);ce.up.copy(k(Me)),ce.lookAt(ce.position.clone().add(k(Re)))}Ae.geometry.dispose(),Ae.geometry=new nn().setFromPoints((((T=i.value)==null?void 0:T.trail)||[]).map(k));for(const[X,se]of Object.entries(A)){if(!D[X]){const Me=ce.clone(!0);Me.traverse(Ye=>{Ye.material&&(Ye.material=Ye.material.clone(),Ye.material.color.set(se))});const Ue=new sl(new nn,new Lo({color:se}));qe.add(Me,Ue),D[X]={group:Me,line:Ue}}const{group:ge,line:we}=D[X],Ee=B.value[X],Re=e.mode==="live"||L.value.includes(X);if(ge.visible=Re&&!!(Ee!=null&&Ee.telemetry),we.visible=Re&&!!((O=Ee==null?void 0:Ee.trail)!=null&&O.length),we.geometry.dispose(),we.geometry=new nn().setFromPoints(((Ee==null?void 0:Ee.trail)||[]).map(k)),Ee!=null&&Ee.telemetry){const Me=Ee.telemetry.position,Ue=Ee.telemetry.quaternion;if(ge.position.copy(k(Me)),Ue){const Ye=new li(Ue.x,Ue.y,Ue.z,Ue.w),z=((pe=(de=(N=m.value)==null?void 0:N.result)==null?void 0:de.calibration)==null?void 0:pe.rotationMatrix)||[[1,0,0],[0,1,0],[0,0,1]],Ie=new Y(z[0][2],z[1][2],z[2][2]).applyQuaternion(Ye),_e=new Y(-z[0][1],-z[1][1],-z[2][1]).applyQuaternion(Ye);ge.up.copy(k(_e)),ge.lookAt(ge.position.clone().add(k(Ie)))}ge.children[0].userData.label=`${R[X]}：${j(Me)} m`}}for(const X of[...Pe.children])X.traverse(se=>{var ge,we;(ge=se.geometry)==null||ge.dispose(),(we=se.material)==null||we.dispose()}),Pe.remove(X);for(const X of G.value){const se=X.position,ge=Le(X.localized?16096779:X.type.includes("M4")?2450411:9647082);ge.position.copy(k(se)),ge.userData.label=`${X.id}: ${j(se)} m`,Pe.add(ge)}}}return Dn(()=>e.sessions,g=>{var T;g!=null&&g.some(O=>O._id===n.value)||(n.value=((T=g==null?void 0:g[0])==null?void 0:T._id)||"")},{immediate:!0}),Dn(()=>e.selectedSession,g=>{var T;g&&((T=e.sessions)!=null&&T.some(O=>O._id===g))&&(n.value=g)},{immediate:!0}),Dn([n,()=>e.operationId,()=>e.mode],Te),Dn(()=>e.view,async()=>{ye++;try{m.value&&await V(m.value.frameId,!0)}catch{o.value="無法切換影像。"}}),ts(()=>{Be(),w(),Te(),be=setInterval(te,100)}),ml(()=>{De=!1,ye++,clearInterval(be),C==null||C.disconnect(),Z==null||Z.dispose(),U==null||U.setAnimationLoop(null),qe==null||qe.traverse(g=>{var T;(T=g.geometry)==null||T.dispose(),g.material&&g.material.dispose()}),U==null||U.dispose()}),(g,T)=>{var N,de,pe,X,se,ge,we,Ee,Re;const O=zp("RouterLink");return fe(),he("section",CR,[t.sessions.length>1&&!t.selectedSession?(fe(),he("label",PR,[T[5]||(T[5]=rt("影片 ",-1)),zt(b("select",{"onUpdate:modelValue":T[0]||(T[0]=Me=>n.value=Me)},[(fe(!0),he(pt,null,tn(t.sessions,Me=>(fe(),he("option",{key:Me._id,value:Me._id},ae(Me._id)+"（"+ae(Me.count)+" 幀）",9,DR))),128))],512),[[gs,n.value]])])):Et("",!0),b("div",LR,[b("div",IR,[b("div",NR,[b("canvas",{ref_key:"canvas",ref:l},null,512),t.showDetections&&m.value?(fe(),he("div",UR,[(fe(!0),he(pt,null,tn(p.value.filter(Me=>Me.bbox),(Me,Ue)=>{var Ye;return fe(),he("div",{key:Ue,class:Cn(["detection-box",{"label-below":Me.bbox.y<30}]),style:Ws(I(Me))},[b("span",null,ae(Me.objectClass||Me.object||"螺絲")+" · "+ae(_((Ye=Me.cameraPosition)==null?void 0:Ye.z))+" m",1)],6)}),128))])):Et("",!0),b("div",OR,[b("button",{type:"button","aria-label":r.value?"播放":"暫停",title:r.value?"播放":"暫停",onClick:ve},ae(r.value?"▶":"⏸"),9,FR),t.mode==="history"?(fe(),he("input",{key:0,type:"range",value:f.value,min:"0",max:S.value,step:"1",onInput:xe},null,40,BR)):Et("",!0),b("span",null,[rt(ae(Math.floor(f.value/1e3)),1),t.mode==="history"?(fe(),he(pt,{key:0},[rt(" / "+ae(Math.floor(S.value/1e3)),1)],64)):Et("",!0),T[6]||(T[6]=rt(" 秒",-1))])])])]),b("aside",kR,[b("section",zR,[T[10]||(T[10]=b("h3",null,"螺絲定位",-1)),b("label",VR,[T[7]||(T[7]=rt("螺絲定位融合演算法",-1)),zt(b("select",{"onUpdate:modelValue":T[1]||(T[1]=Me=>a.value=Me),onChange:ue},[(fe(),he(pt,null,tn(d,(Me,Ue)=>b("option",{key:Ue,value:Ue},ae(Me),9,HR)),64))],544),[[gs,a.value]])]),p.value.length?Et("",!0):(fe(),he("p",GR,"尚未偵測到螺絲；選擇的演算法會在下一筆螺絲觀測到達後套用。")),(fe(!0),he(pt,null,tn(p.value,(Me,Ue)=>{var Ye,z,Ie,_e,Oe,Ne,Se,Je,Ze,Dt,Tt,bn,En;return fe(),he("article",{key:Ue},[b("p",null,ae(Me.objectClass||Me.object||"螺絲")+"　深度 "+ae(_((Ye=Me.cameraPosition)==null?void 0:Ye.z))+" m",1),b("p",null,[rt("模型："+ae((Ie=(z=m.value)==null?void 0:z.result)!=null&&Ie.detectionIsSimulated?"mock_yolo":((Oe=(_e=m.value)==null?void 0:_e.metadata)==null?void 0:Oe.detectionAlgorithm)||"—"),1),T[8]||(T[8]=b("br",null,null,-1)),rt("設備 UWB + IMU："+ae(((Ne=E.value)==null?void 0:Ne.fusionAlgorithm)||"—"),1)]),b("p",null,"相機／設備座標："+ae(j((Se=E.value)==null?void 0:Se.position))+" m",1),b("p",null,"螺絲相機座標："+ae(j(Me.cameraPosition))+" m",1),b("p",null,"原始絕對座標："+ae(j(Me.rawAbsolutePosition))+" m",1),b("p",WR,ae(h[a.value])+"結果："+ae(j((Ze=(Je=Me.algorithms)==null?void 0:Je[a.value])==null?void 0:Ze.position))+" m",1),Me.observationCount?(fe(),he("small",XR,"觀測 "+ae(Me.observationCount)+" 幀｜創新量 "+ae(_((Tt=(Dt=Me.algorithms)==null?void 0:Dt[a.value])==null?void 0:Tt.innovation))+" m｜1σ "+ae(j((En=(bn=Me.algorithms)==null?void 0:bn[a.value])==null?void 0:En.uncertainty))+" m",1)):Et("",!0)])}),128)),m.value&&!E.value?(fe(),he("p",$R,"此幀缺少可配對姿態，不使用舊姿態推算。")):Et("",!0),m.value?(fe(),he("details",qR,[T[9]||(T[9]=b("summary",null,"同幀資料資訊",-1)),b("p",null,"Frame "+ae(m.value.frameId),1),b("p",null,"擷取時間戳："+ae(m.value.captureTimeNs)+" ns",1)])):Et("",!0),((N=m.value)==null?void 0:N.status)==="pair_time_mismatch"?(fe(),he("p",YR,"RGB-D 時間差超出門檻，此幀不進行定位。")):Et("",!0)])])]),b("section",KR,[b("div",ZR,[T[11]||(T[11]=b("div",{class:"scene-heading"},[b("div",null,[b("h3",null,"操作空間建模")]),b("span",null,"拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標")],-1)),b("p",{class:Cn(["nearby-screw-alert",{inactive:!re.value}])},ae(re.value||"附近目前沒有螺絲。"),3),b("div",{ref_key:"sceneHost",ref:c,class:"three-scene"},[b("div",{ref_key:"sceneTooltip",ref:u,class:"three-tooltip"},null,512)],512),T[12]||(T[12]=b("div",{class:"scene-legend"},[b("span",null,[b("i",{class:"legend-anchor"}),rt("基地站")]),b("span",null,[b("i",{class:"legend-device"}),rt("設備／攝影機光錐")]),b("span",null,[b("i",{class:"legend-screw"}),rt("M4（藍）／M6（紫）；金色為可辨識")])],-1))]),b("aside",jR,[T[25]||(T[25]=b("h3",null,"UWB + IMU 融合資料",-1)),b("div",JR,[T[13]||(T[13]=b("strong",null,"融合輸出設備位置",-1)),b("span",null,ae(x.value),1)]),ee.value?(fe(),he("p",QR,[T[14]||(T[14]=b("strong",null,"4D-GWO",-1)),T[15]||(T[15]=b("br",null,null,-1)),rt(" 共同距離偏差 b："+ae(_(ee.value.biasMeters))+" m",1),T[16]||(T[16]=b("br",null,null,-1)),rt(" 搜尋範圍："+ae(((de=ee.value.biasBounds)==null?void 0:de.join(" ～ "))||"—")+" m",1),T[17]||(T[17]=b("br",null,null,-1)),rt(" 有效基地站："+ae(ee.value.validAnchorCount??0)+"；狀態："+ae(ee.value.status==="ready"?"已定位":"等待有效距離量測"),1)])):Et("",!0),b("div",eC,[b("div",null,[T[18]||(T[18]=b("h4",null,"UWB：8 個基地站距離（m）",-1)),b("div",tC,[(fe(),he(pt,null,tn(8,Me=>{var Ue,Ye;return b("span",{key:Me},"站 "+ae(Me)+"："+ae(((Ye=(Ue=le.value.find(z=>z.stationId===Me-1))==null?void 0:Ue.distance)==null?void 0:Ye.toFixed(3))??"—"),1)}),64))]),le.value.length?Et("",!0):(fe(),he("small",nC,"此同幀紀錄未保存基地站原始量測。"))]),b("div",iC,[T[19]||(T[19]=b("h4",null,"IMU 即時量測",-1)),b("p",null,"加速度："+ae(j((X=(pe=H.value)==null?void 0:pe.imu)==null?void 0:X.acceleration))+" m/s²",1),b("p",null,"角速度："+ae(j((ge=(se=H.value)==null?void 0:se.imu)==null?void 0:ge.gyroscope))+" °/s",1),b("p",null,"姿態：Roll "+ae(_((we=q.value)==null?void 0:we.x))+"°、Pitch "+ae(_((Ee=q.value)==null?void 0:Ee.y))+"°、Yaw "+ae(_((Re=q.value)==null?void 0:Re.z))+"°",1)])]),t.mode==="history"?(fe(),he("div",sC,[T[22]||(T[22]=b("strong",null,"演算法路徑",-1)),F.value?(fe(),he(pt,{key:0},tn(R,(Me,Ue)=>b("label",{key:Ue,style:Ws({color:A[Ue]}),class:"trail-toggle"},[zt(b("input",{"onUpdate:modelValue":T[2]||(T[2]=Ye=>L.value=Ye),value:Ue,type:"checkbox",onChange:w},null,40,rC),[[Is,L.value]]),b("span",null,ae(Me),1)],4)),64)):(fe(),he(pt,{key:1},[b("label",null,[zt(b("input",{"onUpdate:modelValue":T[3]||(T[3]=Me=>v.value=Me),type:"checkbox",onChange:w},null,544),[[Is,v.value]]),T[20]||(T[20]=b("span",null,"原始設備定位路徑",-1))]),T[21]||(T[21]=b("small",null,"此紀錄尚無演算法比較結果；需有原始資料才能重算。",-1))],64))])):(fe(),he("label",oC,[T[23]||(T[23]=rt("UWB + IMU 融合演算法",-1)),zt(b("select",{"onUpdate:modelValue":T[4]||(T[4]=Me=>y.value=Me),onChange:Fe},[(fe(),he(pt,null,tn(R,(Me,Ue)=>b("option",{key:Ue,value:Ue},ae(Me),9,aC)),64))],544),[[gs,y.value]])])),ln(O,{class:"calibration-link",to:"/settings/camera-extrinsics"},{default:So(()=>[...T[24]||(T[24]=[rt("設定 RGB-D 相機外參 →",-1)])]),_:1})])]),o.value?(fe(),he("p",lC,ae(o.value),1)):Et("",!0)])}}},uC=Go(cC,[["__scopeId","data-v-83f77bd5"]]),fC={class:"page-card"},dC={class:"media-controls"},hC={class:"segmented-control"},pC={key:0,class:"stream-start-time"},mC=["disabled"],gC={key:0,value:""},_C={key:1,value:"",disabled:""},vC=["value"],xC={key:0,class:"video-select-control"},yC=["disabled"],SC={key:0,value:""},MC=["value"],bC={key:1,class:"video-select-control"},EC=["value"],TC={class:"switch-control"},wC={class:"segmented-control"},AC={key:0,class:"placeholder"},RC={key:0,class:"placeholder"},CC={key:1,class:"stream-workspace"},PC={class:"stream-main"},DC={key:0,class:"video-viewport"},LC=["src","title"],IC={key:0,class:"live-pause-overlay"},NC={key:1,class:"detection-layer"},UC={class:"video-playback-controls"},OC=["title"],FC={key:1,class:"video-viewport"},BC=["src"],kC={key:0,class:"detection-layer"},zC={class:"video-playback-controls"},VC=["title"],HC=["max","value"],GC={key:2,class:"placeholder"},WC={class:"stream-sidebar"},XC={key:0,class:"side-section screw-position-card"},$C={class:"screw-fusion-control"},qC=["disabled"],YC={class:"absolute-position"},KC={key:0},ZC={key:1},jC={key:1,class:"no-screw-localization"},JC={key:2,class:"telemetry-dashboard"},QC={class:"position-scene-card"},eP={class:"fusion-data-card"},tP={class:"current-position"},nP={key:0},iP={class:"sensor-columns"},sP={class:"uwb-range-grid"},rP={class:"imu-readout"},oP={key:1},aP={key:2,class:"path-algorithm-menu"},lP={class:"trail-toggle trail-ekf"},cP={class:"trail-toggle trail-complementary"},uP={class:"trail-toggle trail-weighted"},fP={class:"trail-toggle",style:{color:"#9333ea"}},dP={key:3,class:"success"},hP={key:4,class:"alert"},pP={__name:"StreamPage",setup(t){const e=Ge([]),n=Ge("");Dn(e,me=>{var J;me.some(Qe=>Qe._id===n.value)||(n.value=((J=me[0])==null?void 0:J._id)||"")});let i=!1;const s=async()=>{const me=u.value,J=me?(await Lt.get(`/rgbd/sessions/${me}`,{params:{mediaOnly:1}})).data:[];return me===u.value&&(e.value=J),J.length>0},r=Ge([]),o=Ge([]),a=Ge([]),l=Ge([]),c=Ge("history"),u=Ge(""),f=Ge(""),d=Ge("color"),h=Ge("ekf"),_=Ge("average"),x=Ge(!0),m=Ge(0),p=Ge(0),S=Ge(!1),E=Ge(null),v=Ge(null),R=Ge(!0),A=Ge(!1),L=Ge(""),y=Ge(""),P=Ge(0),B=Ge(!1),F=Ge(0),H=Ge([]),ee=Ms({ekf:!0,complementary:!0,weighted_average:!0,gwo4d:!0}),le={ekf:2450411,complementary:1096065,weighted_average:16096779,gwo4d:9647082},q=Ge({ekf:[],complementary:[],weighted_average:[],gwo4d:[]}),j=Ge([]),G=Ge(null),re=Ge(null),be=[{id:1,x:0,y:0,z:0},{id:2,x:20,y:0,z:0},{id:3,x:0,y:12,z:0},{id:4,x:20,y:12,z:0},{id:5,x:0,y:0,z:2.5},{id:6,x:20,y:0,z:2.5},{id:7,x:0,y:12,z:2.5},{id:8,x:20,y:12,z:2.5}],Ce=[{id:"A-1",type:"M4 hex screw",x:1.2,y:1.2,z:1.1},{id:"A-2",type:"M4 hex screw",x:2,y:1.2,z:1.1},{id:"B-1",type:"M6 socket screw",x:18,y:1.2,z:1.1},{id:"B-2",type:"M6 socket screw",x:18.8,y:1.2,z:1.1},{id:"B-3",type:"M6 socket screw",x:1.2,y:10.8,z:1.1},{id:"B-4",type:"M6 socket screw",x:2,y:10.8,z:1.1},{id:"A-3",type:"M4 hex screw",x:18,y:10.8,z:1.1},{id:"A-4",type:"M4 hex screw",x:18.8,y:10.8,z:1.1}];let ye,De=-1,ze,je,qe,K,U,Z,ce,Ae,Pe,C,D,k;const Q=new Map,V=at(()=>r.value.filter(me=>!me.endTime).sort((me,J)=>new Date(J.startTime)-new Date(me.startTime))[0]||null),te=at(()=>r.value.filter(me=>{var J;return me._id!==((J=V.value)==null?void 0:J._id)})),Te=at(()=>{var me;return(me=V.value)!=null&&me.startTime?new Date(V.value.startTime).toLocaleString("zh-TW"):"尚未開始作業"}),xe=at(()=>o.value.filter(me=>me.kind===d.value||me.kind==="combined")),ve=at(()=>xe.value.find(me=>me.filename===f.value)),ue=at(()=>{const me=a.value.filter(J=>{var Qe;return J.imageId===((Qe=ve.value)==null?void 0:Qe.filename)});return me.length?me:a.value}),Fe=at(()=>({_id:"simulated-screw",objectClass:"螺絲",depth:Number((118+Math.sin(P.value*.18)*3).toFixed(1)),bbox:{x:Math.round(860+Math.sin(P.value*.14)*22),y:Math.round(465+Math.cos(P.value*.11)*12),width:200,height:150}})),I=at(()=>Math.floor((P.value+20)/4)%13!==0),Le=at(()=>{var Qe;if(c.value==="live")return a.value.at(-1)||null;if(!ue.value.length)return null;const me=new Date(ue.value[0].timestamp).getTime()||((Qe=ve.value)!=null&&Qe.startedAt?ve.value.startedAt*1e3:null);if(!me)return ue.value[0]||Fe.value;const J=me+m.value*1e3;return ue.value.reduce((ft,dt)=>Math.abs(new Date(dt.timestamp).getTime()-J)<Math.abs(new Date(ft.timestamp).getTime()-J)?dt:ft)}),Be=at(()=>c.value==="live"?a.value.length>0:ue.value.length>0),w=at(()=>c.value==="live"?!!V.value:!!ve.value),g=at(()=>x.value&&!B.value&&w.value&&!!Le.value&&(Be.value||I.value)),T=at(()=>Le.value?["example_object","screw_simulated"].includes(Le.value.objectClass)?"螺絲":Le.value.objectClass:"未偵測到螺絲"),O=at(()=>`${`${window.location.protocol}//${window.location.hostname}:8889`.replace(/\/$/,"")}/${d.value==="depth"?"cam-depth":"cam-color"}`),N=me=>Number(me??0).toFixed(3),de=()=>{var ft,dt,_t;if(c.value==="live"){q.value=Object.fromEntries(Object.keys(le).map(xt=>[xt,xt===h.value?j.value:[]])),H.value=j.value;return}const me=(ft=ve.value)!=null&&ft.startedAt?ve.value.startedAt*1e3:new Date(((dt=r.value.find(xt=>xt._id===u.value))==null?void 0:dt.startTime)||((_t=Le.value)==null?void 0:_t.timestamp)||0).getTime(),J=c.value==="history"?me+m.value*1e3:1/0,Qe=Object.fromEntries(Object.keys(le).map(xt=>[xt,l.value.filter(Ft=>Ft.fusionAlgorithm===xt&&new Date(Ft.timestamp).getTime()<=J).map(Ft=>{var Nn;return(Nn=Ft.telemetry)==null?void 0:Nn.position}).filter(Boolean).slice(-80).map(Ft=>({...Ft}))]));q.value=Qe,H.value=Qe[h.value]||[]},pe=me=>new Y(Number((me==null?void 0:me.x)||0),Number((me==null?void 0:me.z)||0),Number((me==null?void 0:me.y)||0)),X=me=>pe(me),se=(me,J)=>{me.userData.hoverLabel=J},ge=me=>{const J=new Jn,Qe=new Hi({color:3900150,roughness:.35,metalness:.35}),ft=new Ht(new Qi(.24,.12,.24),Qe),dt=new Ht(new Qi(.1,.16,.1),Qe);return dt.position.y=.14,J.add(ft,dt),J.position.copy(X(me)),se(J,`基地站 ${me.id}：X ${me.x}、Y ${me.y}、Z ${me.z} m`),J},we=(me=16096779)=>{const J=new Jn,Qe=new Hi({color:me,metalness:.72,roughness:.25}),ft=new Ht(new Ks(.045,.045,.25,16),Qe);ft.rotation.z=Math.PI/2;const dt=new Ht(new Ks(.105,.105,.045,16),Qe);return dt.rotation.z=Math.PI/2,dt.position.x=-.14,J.add(ft,dt),J.userData.material=Qe,J},Ee=me=>{const J=new Jn,Qe=new Ht(new No(.12,20,16),new Hi({color:me,emissive:me,emissiveIntensity:.22})),ft=new Ht(new Io(.45,1.2,24,1,!0),new Do({color:me,transparent:!0,opacity:.2,side:jn}));return ft.rotation.x=-Math.PI/2,ft.position.z=.6,J.add(Qe,ft),J},Re=()=>{var xt,Ft,Nn;if(!je||!((Ft=(xt=v.value)==null?void 0:xt.telemetry)!=null&&Ft.position)||!U||!ce)return;const me=v.value.telemetry;U.visible=!1,U.position.copy(pe(me.position));const J=Math.PI/180,Qe=me.orientation||{roll:0,pitch:0,yaw:0},ft=-(Qe.yaw-90)*J;U.rotation.set(Qe.pitch*J,ft,Qe.roll*J,"YXZ"),Object.entries(Z||{}).forEach(([yt,Gt])=>{const Wt=q.value[yt]||[],qn=c.value==="live"?yt===h.value:ee[yt];Gt.visible=qn&&Wt.length>0,Gt.visible&&(Gt.position.copy(pe(Wt.at(-1))),Gt.rotation.set(Qe.pitch*J,ft,Qe.roll*J,"YXZ"),se(Gt,`${yt} device: ${N(Wt.at(-1).x)}, ${N(Wt.at(-1).y)}, ${N(Wt.at(-1).z)} m`))}),ce.position.copy(pe(v.value.absolutePosition)),ce.visible=!1,se(U,`設備：X ${N(me.position.x)}、Y ${N(me.position.y)}、Z ${N(me.position.z)} m；Roll ${N(Qe.roll)}°、Pitch ${N(Qe.pitch)}°、Yaw ${N(Qe.yaw)}°`),v.value.absolutePosition&&se(ce,`螺絲：X ${N(v.value.absolutePosition.x)}、Y ${N(v.value.absolutePosition.y)}、Z ${N(v.value.absolutePosition.z)} m`),Object.entries(Ae||{}).forEach(([yt,Gt])=>{const Wt=new nn().setFromPoints((q.value[yt]||[]).map(pe));Gt.geometry.dispose(),Gt.geometry=Wt,Gt.visible=ee[yt]});const dt=((Nn=me.workspace)==null?void 0:Nn.screws)||Ce,_t=new Map((v.value.localizedScrews||[]).map(yt=>[yt.screwId,yt]));dt.forEach(yt=>{var Ts;const Gt=Q.get(yt.id);if(!Gt)return;const Wt=_t.get(yt.id),qn=(Wt==null?void 0:Wt.position)||yt;Gt.position.copy(pe(qn));const Es=yt.type.includes("M4")?2450411:9647082;Gt.userData.material.color.setHex(Wt||yt.visible?16096779:Es),(Ts=Gt.userData.material.emissive)==null||Ts.setHex(Wt||yt.visible?7027968:0),se(Gt,`${yt.type} ${yt.id}：X ${N(qn.x)}、Y ${N(qn.y)}、Z ${N(qn.z)} m${Wt?`；已由 ${v.value.screwFusionLabel||"螺絲融合"} 更新（${Wt.observationCount} 幀）`:yt.visible?`；已在攝影機視野內，深度 ${N(yt.depth)} m`:"；未進入攝影機辨識範圍"}`)})},Me=async()=>{if(await Fo(),!G.value)return;if(ze&&ze.domElement.parentElement!==G.value&&Ie(),ze){Re();return}je=new _g,je.background=new gt(16777215),qe=new Gn(42,1,.1,100),qe.position.set(25,19,26),ze=new Fg({antialias:!0}),ze.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.value.appendChild(ze.domElement),K=new kg(qe,ze.domElement),K.target.set(10,1.1,6),K.enableDamping=!0,K.minDistance=8,K.maxDistance=42,je.add(new Eg(16777215,13358561,2));const me=new wg(16777215,2.5);me.position.set(5,7,4),je.add(me);const J=new Ht(new Wr(20,12),new Hi({color:16317180,roughness:.95}));J.rotation.x=-Math.PI/2,J.position.set(10,-.02,6),je.add(J);const Qe=new Rg(20,20,13358561,14870768);Qe.scale.z=.6,Qe.position.set(10,0,6),je.add(Qe),be.forEach(_t=>je.add(ge(_t))),Z=Object.fromEntries(Object.entries(le).map(([_t,xt])=>{const Ft=Ee(xt);return je.add(Ft),[_t,Ft]})),U=new Jn;const ft=new Ht(new No(.12,20,16),new Hi({color:1096065,emissive:289870,emissiveIntensity:.35})),dt=new Ht(new Io(.45,1.2,24,1,!0),new Do({color:3462041,transparent:!0,opacity:.2,side:jn}));dt.rotation.x=-Math.PI/2,dt.position.z=.6,U.add(ft,dt),je.add(U),ce=we(),je.add(ce),Ce.forEach(_t=>{const xt=we(_t.type.includes("M4")?2450411:9647082);xt.position.copy(pe(_t)),se(xt,`${_t.type} ${_t.id}：X ${_t.x}、Y ${_t.y}、Z ${_t.z} m`),Q.set(_t.id,xt),je.add(xt)}),Ae=Object.fromEntries(Object.entries(le).map(([_t,xt])=>{const Ft=new sl(new nn,new Lo({color:xt}));return je.add(Ft),[_t,Ft]})),Pe=new Ag,C=new ot,ze.domElement.addEventListener("pointermove",Ye),k=new ResizeObserver(Ue),k.observe(G.value),Ue(),Re(),z()},Ue=()=>{if(!ze||!G.value)return;const{clientWidth:me,clientHeight:J}=G.value;!me||!J||(ze.setSize(me,J),qe.aspect=me/J,qe.updateProjectionMatrix())},Ye=me=>{if(!ze||!re.value)return;const J=ze.domElement.getBoundingClientRect();C.set((me.clientX-J.left)/J.width*2-1,-((me.clientY-J.top)/J.height)*2+1),Pe.setFromCamera(C,qe);const Qe=Pe.intersectObjects(je.children,!0).map(ft=>{let dt=ft.object;for(;dt&&!dt.userData.hoverLabel;)dt=dt.parent;return dt}).find(Boolean);re.value.style.display=Qe?"block":"none",Qe&&(re.value.textContent=Qe.userData.hoverLabel,re.value.style.left=`${me.clientX-J.left+12}px`,re.value.style.top=`${me.clientY-J.top+12}px`)},z=()=>{D=requestAnimationFrame(z),K.update(),ze.render(je,qe)},Ie=()=>{var me,J;cancelAnimationFrame(D),k==null||k.disconnect(),K==null||K.dispose(),(me=ze==null?void 0:ze.domElement)==null||me.removeEventListener("pointermove",Ye),je==null||je.traverse(Qe=>{var ft;(ft=Qe.geometry)==null||ft.dispose();for(const dt of Array.isArray(Qe.material)?Qe.material:[Qe.material])dt==null||dt.dispose()}),(J=ze==null?void 0:ze.domElement)==null||J.remove(),ze==null||ze.dispose(),ze=null,je=null,Q.clear()},_e=async()=>{var me,J,Qe;if(o.value=[],a.value=[],l.value=[],f.value="",m.value=0,!!u.value)try{if(await s())return;const[ft,dt,_t]=await Promise.all([Lt.get(`/videos/${u.value}`),Lt.get(`/detections/${u.value}`),Lt.get(`/operator-telemetry/${u.value}`)]);o.value=ft.data,a.value=dt.data.sort((xt,Ft)=>new Date(xt.timestamp)-new Date(Ft.timestamp)),l.value=_t.data,f.value=((me=xe.value[0])==null?void 0:me.filename)||"",await Ne()}catch(ft){L.value=((Qe=(J=ft.response)==null?void 0:J.data)==null?void 0:Qe.error)||"無法讀取歷史影片或偵測資料。"}},Oe=async()=>{r.value=(await Lt.get("/operations")).data},Ne=async()=>{var Qe,ft,dt,_t,xt,Ft,Nn;if(e.value.length||!u.value)return;const me=u.value,J=c.value;try{const yt={source:c.value,algorithm:h.value,screwAlgorithm:_.value};c.value==="history"&&((Qe=ve.value)!=null&&Qe.startedAt)&&(yt.at=ve.value.startedAt*1e3+m.value*1e3,l.value=(await Lt.get(`/operator-telemetry/${u.value}`,{params:{at:yt.at}})).data),(ft=Le.value)!=null&&ft._id&&Le.value._id!=="simulated-screw"&&(yt.detectionId=Le.value._id);const Gt=(await Lt.get(`/positioning/latest/${me}`,{params:yt})).data;if(me!==u.value||J!==c.value||e.value.length)return;if(!((dt=Gt.telemetry)!=null&&dt.position))throw new Error("尚無設備定位資料");v.value=Gt,c.value==="live"&&((xt=(_t=v.value)==null?void 0:_t.telemetry)!=null&&xt.position)&&(j.value=[...j.value,{...v.value.telemetry.position}].slice(-80)),de(),await Me(),Re(),L.value=""}catch(yt){L.value=((Nn=(Ft=yt.response)==null?void 0:Ft.data)==null?void 0:Nn.error)||"無法讀取定位資料。"}},Se=async()=>{var me;if(c.value==="live")try{if(u.value||(await Oe(),u.value=((me=V.value)==null?void 0:me._id)||""),!u.value)return;const J=await Lt.get(`/detections/${u.value}`);a.value=J.data.sort((Qe,ft)=>new Date(Qe.timestamp)-new Date(ft.timestamp))}catch{}},Je=async()=>{var me,J;A.value=!0,y.value="",L.value="";try{await Lt.post("/simulation/config",{fusionAlgorithm:h.value,screwFusionAlgorithm:_.value}),await Ne()}catch(Qe){L.value=((J=(me=Qe.response)==null?void 0:me.data)==null?void 0:J.error)||"融合設定傳送失敗。"}finally{A.value=!1}},Ze=async()=>{var me,J;A.value=!0,y.value="",L.value="";try{await Lt.post("/simulation/config",{fusionAlgorithm:h.value,screwFusionAlgorithm:_.value}),await Ne()}catch(Qe){L.value=((J=(me=Qe.response)==null?void 0:me.data)==null?void 0:J.error)||"螺絲定位融合設定傳送失敗。"}finally{A.value=!1}},Dt=me=>{m.value=me.target.currentTime,p.value=me.target.duration||0},Tt=async()=>{var me,J;(me=E.value)!=null&&me.paused?await E.value.play():(J=E.value)==null||J.pause()},bn=async()=>{if(c.value!=="history"||!S.value)return;const me=Math.floor(m.value*2);me!==De&&(De=me,await Ne())},En=async me=>{Dt(me),await bn()},Cl=async me=>{E.value&&(E.value.currentTime=Number(me.target.value),m.value=Number(me.target.value),c.value==="history"&&await Ne())},Pl=async()=>{B.value=!B.value,B.value||(F.value+=1,await Se(),await Ne())};return Dn(u,async()=>{e.value=[],v.value=null,a.value=[],H.value=[],j.value=[],q.value=Object.fromEntries(Object.keys(le).map(me=>[me,[]])),De=-1,Ie(),c.value==="history"?await _e():await s()||await Ne()}),Dn(()=>e.value.length>0,me=>{me&&Ie()}),Dn(d,()=>{var me;f.value=((me=xe.value[0])==null?void 0:me.filename)||"",m.value=0}),Dn(h,()=>{c.value==="live"&&(j.value=[],Object.keys(ee).forEach(me=>{ee[me]=me===h.value}))}),Dn(c,async()=>{var me,J;c.value==="history"?(await Oe(),u.value=((me=te.value[0])==null?void 0:me._id)||"",u.value||(o.value=[],a.value=[],v.value=null)):(j.value=[],Object.keys(ee).forEach(Qe=>{ee[Qe]=Qe===h.value}),u.value=((J=V.value)==null?void 0:J._id)||"",await Se(),await Ne())}),ts(async()=>{var me;try{const[J,Qe]=await Promise.all([Lt.get("/operations"),Lt.get("/simulation/config")]);r.value=J.data,h.value=Qe.data.fusionAlgorithm,_.value=Qe.data.screwFusionAlgorithm||"average",u.value=((me=te.value[0])==null?void 0:me._id)||"",ye=window.setInterval(async()=>{var ft,dt,_t;if(!(i||c.value!=="live")){i=!0;try{await Oe();const xt=((ft=V.value)==null?void 0:ft._id)||"";if(xt!==u.value&&(u.value=xt),await s())return;B.value||(P.value+=1,await Se(),await Ne())}catch(xt){L.value=((_t=(dt=xt.response)==null?void 0:dt.data)==null?void 0:_t.error)||"串流定位資料讀取失敗，請檢查後端連線。"}finally{i=!1}}},500)}catch{L.value="無法讀取系統資料。"}finally{R.value=!1}}),ml(()=>{window.clearInterval(ye),Ie()}),(me,J)=>{var ft,dt,_t,xt,Ft,Nn,yt,Gt,Wt,qn,Es,Ts,Xo,$o,qo,M,$,oe,ne,ie,Ve,$e,ke,et,tt,lt,ht,nt;const Qe=zp("RouterLink");return fe(),he("section",fC,[J[41]||(J[41]=b("div",{class:"section-title"},[b("p",{class:"eyebrow"},"Media"),b("h2",null,"影像串流與末端定位")],-1)),b("div",dC,[b("div",hC,[b("button",{class:Cn({active:c.value==="history"}),type:"button",onClick:J[0]||(J[0]=Xe=>c.value="history")},"歷史影片",2),b("button",{class:Cn({active:c.value==="live"}),type:"button",onClick:J[1]||(J[1]=Xe=>c.value="live")},"目前串流",2)]),c.value==="live"?(fe(),he("p",pC,"開始時間："+ae(Te.value),1)):(fe(),he(pt,{key:1},[b("label",null,[J[16]||(J[16]=rt("作業",-1)),zt(b("select",{"onUpdate:modelValue":J[2]||(J[2]=Xe=>u.value=Xe),disabled:!te.value.length},[te.value.length?(fe(),he("option",_C,"選擇歷史作業")):(fe(),he("option",gC,"無歷史紀錄")),(fe(!0),he(pt,null,tn(te.value,Xe=>(fe(),he("option",{key:Xe._id,value:Xe._id},ae(new Date(Xe.startTime).toLocaleString("zh-TW")),9,vC))),128))],8,mC),[[gs,u.value]])]),e.value.length?(fe(),he("label",bC,[J[18]||(J[18]=rt("影片",-1)),zt(b("select",{"onUpdate:modelValue":J[4]||(J[4]=Xe=>n.value=Xe)},[(fe(!0),he(pt,null,tn(e.value,(Xe,Xt)=>(fe(),he("option",{key:Xe._id,value:Xe._id},ae(d.value==="depth"?"深度影像":"光學影像")+" · "+ae(Xt+1)+"（"+ae(Xe.count)+" 幀）",9,EC))),128))],512),[[gs,n.value]])])):(fe(),he("label",xC,[J[17]||(J[17]=rt("影片",-1)),zt(b("select",{"onUpdate:modelValue":J[3]||(J[3]=Xe=>f.value=Xe),disabled:!xe.value.length},[xe.value.length?Et("",!0):(fe(),he("option",SC,"無歷史紀錄")),(fe(!0),he(pt,null,tn(xe.value,Xe=>(fe(),he("option",{key:Xe.filename,value:Xe.filename},ae(Xe.filename),9,MC))),128))],8,yC),[[gs,f.value]])]))],64)),b("label",TC,[zt(b("input",{"onUpdate:modelValue":J[5]||(J[5]=Xe=>x.value=Xe),type:"checkbox"},null,512),[[Is,x.value]]),J[19]||(J[19]=rt(" 顯示螺絲偵測",-1))]),b("div",wC,[b("button",{class:Cn({active:d.value==="color"}),type:"button",onClick:J[6]||(J[6]=Xe=>d.value="color")},"光學影像",2),b("button",{class:Cn({active:d.value==="depth"}),type:"button",onClick:J[7]||(J[7]=Xe=>d.value="depth")},"深度影像",2)])]),c.value==="live"&&!R.value&&!V.value?(fe(),he("p",AC,"尚無進行中的作業。RTSP 只傳送影像；請先開始作業並確認 MQTT ACK，才能顯示設備定位與軌跡。")):Et("",!0),e.value.length?(fe(),tf(uC,{key:`${c.value}-${u.value}`,"operation-id":u.value,mode:c.value,view:d.value,sessions:e.value,"selected-session":n.value,"show-detections":x.value},null,8,["operation-id","mode","view","sessions","selected-session","show-detections"])):(fe(),he(pt,{key:2},[R.value?(fe(),he("p",RC,"正在讀取資料…")):(fe(),he("div",CC,[b("div",PC,[c.value==="live"?(fe(),he("div",DC,[(fe(),he("iframe",{key:`${O.value}-${F.value}`,class:"live-stream-frame",src:O.value,title:d.value==="depth"?"目前深度串流":"目前光學串流",allow:"autoplay; fullscreen"},null,8,LC)),B.value?(fe(),he("div",IC,"⏸")):Et("",!0),g.value?(fe(),he("div",NC,[b("div",{class:Cn(["detection-box",{"label-below":Le.value.bbox.y<30}]),style:Ws({left:`${Le.value.bbox.x/1920*100}%`,top:`${Le.value.bbox.y/1080*100}%`,width:`${Le.value.bbox.width/1920*100}%`,height:`${Le.value.bbox.height/1080*100}%`})},[b("span",null,ae(T.value)+" · "+ae(Le.value.depth),1)],6)])):Et("",!0),b("div",UC,[b("button",{type:"button",title:B.value?"播放最新串流":"暫停前台顯示",onClick:Pl},ae(B.value?"▶":"⏸"),9,OC)])])):ve.value?(fe(),he("div",FC,[(fe(),he("video",{key:ve.value.filename,ref_key:"videoPlayer",ref:E,class:Cn(["video-source",{"show-depth":ve.value.kind==="combined"&&d.value==="depth"}]),src:ve.value.url,playsinline:"",onLoadedmetadata:Dt,onTimeupdate:En,onPlay:J[8]||(J[8]=Xe=>S.value=!0),onPause:J[9]||(J[9]=Xe=>S.value=!1)},null,42,BC)),g.value?(fe(),he("div",kC,[b("div",{class:Cn(["detection-box",{"label-below":Le.value.bbox.y<30}]),style:Ws({left:`${Le.value.bbox.x/1920*100}%`,top:`${Le.value.bbox.y/1080*100}%`,width:`${Le.value.bbox.width/1920*100}%`,height:`${Le.value.bbox.height/1080*100}%`})},[b("span",null,ae(T.value)+" · "+ae(Le.value.depth),1)],6)])):Et("",!0),b("div",zC,[b("button",{type:"button",title:S.value?"暫停":"播放",onClick:Tt},ae(S.value?"⏸":"▶"),9,VC),b("input",{type:"range",min:"0",max:p.value,step:"0.01",value:m.value,onInput:Cl},null,40,HC),b("span",null,ae(Math.floor(m.value))+" / "+ae(Math.floor(p.value))+" 秒",1)])])):(fe(),he("p",GC,"此作業尚未找到歷史影片。"))]),b("aside",WC,[v.value?(fe(),he("section",XC,[J[23]||(J[23]=b("h3",null,"螺絲定位",-1)),b("label",$C,[J[21]||(J[21]=rt("螺絲定位融合演算法",-1)),zt(b("select",{"onUpdate:modelValue":J[10]||(J[10]=Xe=>_.value=Xe),disabled:A.value,onChange:Ze},[...J[20]||(J[20]=[b("option",{value:"average"},"平均法（多幀座標平均）",-1),b("option",{value:"ekf"},"EKF（靜態位置濾波）",-1),b("option",{value:"es_ekf"},"ESKF（誤差狀態濾波）",-1),b("option",{value:"rmv_fgo"},"RMV-FGO（強健多視角因子圖）",-1)])],40,qC),[[gs,_.value]])]),v.value.detection?(fe(),he(pt,{key:0},[b("p",null,ae(T.value)+"　深度 "+ae((ft=Le.value)==null?void 0:ft.depth),1),b("p",null,[rt("模型："+ae(v.value.detection.detectionAlgorithm),1),J[22]||(J[22]=b("br",null,null,-1)),rt("設備 UWB + IMU："+ae(v.value.fusionAlgorithm),1)]),b("p",null,"相機／設備座標："+ae(N(v.value.cameraPosition.x))+", "+ae(N(v.value.cameraPosition.y))+", "+ae(N(v.value.cameraPosition.z))+" m",1),b("p",null,"螺絲相機座標："+ae(N((dt=v.value.screwCameraPosition)==null?void 0:dt.x))+", "+ae(N((_t=v.value.screwCameraPosition)==null?void 0:_t.y))+", "+ae(N((xt=v.value.screwCameraPosition)==null?void 0:xt.z))+" m",1),b("p",null,"原始絕對座標："+ae(N((Ft=v.value.rawAbsolutePosition)==null?void 0:Ft.x))+", "+ae(N((Nn=v.value.rawAbsolutePosition)==null?void 0:Nn.y))+", "+ae(N((yt=v.value.rawAbsolutePosition)==null?void 0:yt.z))+" m",1),b("p",YC,ae(v.value.screwFusionLabel||"螺絲融合")+"結果："+ae(N((Gt=v.value.absolutePosition)==null?void 0:Gt.x))+", "+ae(N((Wt=v.value.absolutePosition)==null?void 0:Wt.y))+", "+ae(N((qn=v.value.absolutePosition)==null?void 0:qn.z))+" m",1),v.value.screwLocalization?(fe(),he("small",KC,"觀測 "+ae(v.value.screwLocalization.observationCount)+" 幀｜創新量 "+ae(N(v.value.screwLocalization.innovation))+" m｜1σ "+ae(N((Es=v.value.screwLocalization.uncertainty)==null?void 0:Es.x))+", "+ae(N((Ts=v.value.screwLocalization.uncertainty)==null?void 0:Ts.y))+", "+ae(N((Xo=v.value.screwLocalization.uncertainty)==null?void 0:Xo.z))+" m",1)):(fe(),he("small",ZC))],64)):(fe(),he("p",jC,"尚未偵測到螺絲；選擇的演算法會在下一筆螺絲觀測到達後套用。"))])):Et("",!0)])])),v.value?(fe(),he("section",JC,[b("div",QC,[J[24]||(J[24]=b("div",{class:"scene-heading"},[b("div",null,[b("h3",null,"操作空間建模")]),b("span",null,"拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標")],-1)),b("p",{class:Cn(["nearby-screw-alert",{inactive:!(($o=v.value.workspace)!=null&&$o.notification)}])},ae((qo=v.value.workspace)!=null&&qo.notification?`提示：${v.value.workspace.notification}`:"附近目前沒有螺絲。"),3),b("div",{ref_key:"sceneContainer",ref:G,class:"three-scene"},[b("div",{ref_key:"sceneTooltip",ref:re,class:"three-tooltip"},null,512)],512),J[25]||(J[25]=b("div",{class:"scene-legend"},[b("span",null,[b("i",{class:"legend-anchor"}),rt("基地站")]),b("span",null,[b("i",{class:"legend-device"}),rt("設備／攝影機光錐")]),b("span",null,[b("i",{class:"legend-screw"}),rt("M4（藍）／M6（紫）；金色為可辨識")])],-1))]),b("aside",eP,[J[40]||(J[40]=b("h3",null,"UWB + IMU 融合資料",-1)),b("div",tP,[J[26]||(J[26]=b("strong",null,"融合輸出設備位置",-1)),b("span",null,"X "+ae(N(v.value.telemetry.position.x))+"　Y "+ae(N(v.value.telemetry.position.y))+"　Z "+ae(N(v.value.telemetry.position.z))+" m",1)]),v.value.telemetry.deviceLocalization?(fe(),he("p",nP,[J[27]||(J[27]=b("strong",null,"4D-GWO",-1)),J[28]||(J[28]=b("br",null,null,-1)),rt("共同距離偏差 b："+ae(N(v.value.telemetry.deviceLocalization.biasMeters))+" m",1),J[29]||(J[29]=b("br",null,null,-1)),rt("範圍："+ae((M=v.value.telemetry.deviceLocalization.biasBounds)==null?void 0:M.join(" ～ "))+" m；狀態："+ae(v.value.telemetry.deviceLocalization.status==="ready"?"已定位":"等待有效量測"),1)])):Et("",!0),b("div",iP,[b("div",null,[J[30]||(J[30]=b("h4",null,"UWB：8 個基地站距離（m）",-1)),b("div",sP,[(fe(!0),he(pt,null,tn(v.value.telemetry.uwbRanges||[],Xe=>(fe(),he("span",{key:Xe.stationId},"站 "+ae(Xe.stationId+1)+"："+ae(N(Xe.distance)),1))),128))])]),b("div",rP,[J[31]||(J[31]=b("h4",null,"IMU 即時量測",-1)),b("p",null,"加速度："+ae(N((oe=($=v.value.telemetry.imu)==null?void 0:$.acceleration)==null?void 0:oe.x))+", "+ae(N((ie=(ne=v.value.telemetry.imu)==null?void 0:ne.acceleration)==null?void 0:ie.y))+", "+ae(N(($e=(Ve=v.value.telemetry.imu)==null?void 0:Ve.acceleration)==null?void 0:$e.z))+" m/s²",1),b("p",null,"角速度："+ae(N((et=(ke=v.value.telemetry.imu)==null?void 0:ke.gyroscope)==null?void 0:et.x))+", "+ae(N((lt=(tt=v.value.telemetry.imu)==null?void 0:tt.gyroscope)==null?void 0:lt.y))+", "+ae(N((nt=(ht=v.value.telemetry.imu)==null?void 0:ht.gyroscope)==null?void 0:nt.z))+" °/s",1),b("p",null,"姿態：Roll "+ae(N(v.value.telemetry.orientation.roll))+"°、Pitch "+ae(N(v.value.telemetry.orientation.pitch))+"°、Yaw "+ae(N(v.value.telemetry.orientation.yaw))+"°",1)])]),c.value==="live"?(fe(),he("label",oP,[J[33]||(J[33]=rt("UWB + IMU 融合演算法",-1)),zt(b("select",{"onUpdate:modelValue":J[11]||(J[11]=Xe=>h.value=Xe),onChange:Je},[...J[32]||(J[32]=[b("option",{value:"ekf"},"Error-State Extended Kalman Filter (ES-EKF)",-1),b("option",{value:"complementary"},"Complementary Filter",-1),b("option",{value:"weighted_average"},"Weighted Average",-1),b("option",{value:"gwo4d"},"4D-GWO + IMU",-1)])],544),[[gs,h.value]])])):(fe(),he("div",aP,[J[38]||(J[38]=b("strong",null,"演算法路徑",-1)),b("label",lP,[zt(b("input",{"onUpdate:modelValue":J[12]||(J[12]=Xe=>ee.ekf=Xe),type:"checkbox",onChange:Re},null,544),[[Is,ee.ekf]]),J[34]||(J[34]=b("span",null,"ES-EKF",-1))]),b("label",cP,[zt(b("input",{"onUpdate:modelValue":J[13]||(J[13]=Xe=>ee.complementary=Xe),type:"checkbox",onChange:Re},null,544),[[Is,ee.complementary]]),J[35]||(J[35]=b("span",null,"互補濾波",-1))]),b("label",uP,[zt(b("input",{"onUpdate:modelValue":J[14]||(J[14]=Xe=>ee.weighted_average=Xe),type:"checkbox",onChange:Re},null,544),[[Is,ee.weighted_average]]),J[36]||(J[36]=b("span",null,"加權平均",-1))]),b("label",fP,[zt(b("input",{"onUpdate:modelValue":J[15]||(J[15]=Xe=>ee.gwo4d=Xe),type:"checkbox",onChange:Re},null,544),[[Is,ee.gwo4d]]),J[37]||(J[37]=b("span",null,"4D-GWO + IMU",-1))])])),ln(Qe,{class:"calibration-link",to:"/settings/camera-extrinsics"},{default:So(()=>[...J[39]||(J[39]=[rt("設定 RGB-D 相機外參 →",-1)])]),_:1})])])):Et("",!0)],64)),y.value?(fe(),he("p",dP,ae(y.value),1)):Et("",!0),L.value?(fe(),he("p",hP,ae(L.value),1)):Et("",!0)])}}},mP={},gP={class:"page-card"};function _P(t,e){return fe(),he("section",gP,[...e[0]||(e[0]=[nf('<div class="section-title"><p class="eyebrow">Media</p><h2>語音提示查詢</h2></div><article class="panel"><h3>提示內容</h3><div class="list-card"><div class="item-row"><span>提示 1</span><strong>請保持安全距離</strong></div><div class="item-row"><span>提示 2</span><strong>區域偵測已完成</strong></div><div class="item-row"><span>提示 3</span><strong>即將開始下一段任務</strong></div></div></article>',2)])])}const vP=Go(mP,[["render",_P]]),xP={class:"page-card calibration-page"},yP={class:"panel calibration-panel"},SP={key:0,class:"placeholder"},MP={class:"extrinsics-grid"},bP=["onUpdate:modelValue"],EP={class:"matrix-card"},TP={key:0,class:"calibration-saved"},wP={key:1,class:"success"},AP={key:2,class:"alert"},RP={class:"calibration-actions"},CP=["disabled"],PP=["disabled"],DP={__name:"CameraCalibrationPage",setup(t){const e=Ge(!0),n=Ge(!1),i=Ge(""),s=Ge(""),r=Ge(""),o=Ms({translation:{x:0,y:0,z:0},rotationDegrees:{x:0,y:0,z:0}}),a=_=>Number(_||0)*Math.PI/180,l=at(()=>{const _=a(o.rotationDegrees.x),x=a(o.rotationDegrees.y),m=a(o.rotationDegrees.z),[p,S]=[Math.cos(_),Math.sin(_)],[E,v]=[Math.cos(x),Math.sin(x)],[R,A]=[Math.cos(m),Math.sin(m)];return[[R*E,R*v*S-A*p,R*v*p+A*S],[A*E,A*v*S+R*p,A*v*p-R*S],[-v,E*S,E*p]]}),c=at(()=>l.value.map(_=>_.map(x=>x.toFixed(6)).join("   ")).join(`
`)),u=_=>{var x,m;for(const p of["x","y","z"])o.translation[p]=((x=_.translation)==null?void 0:x[p])??0,o.rotationDegrees[p]=((m=_.rotationDegrees)==null?void 0:m[p])??0;r.value=_.updatedAt?new Date(_.updatedAt).toLocaleString("zh-TW"):""},f=async()=>{var _,x;e.value=!0,s.value="";try{u((await Lt.get("/calibration/camera-extrinsics")).data)}catch(m){s.value=((x=(_=m.response)==null?void 0:_.data)==null?void 0:x.error)||"無法讀取相機外參設定。"}finally{e.value=!1}},d=async()=>{var _,x;n.value=!0,s.value="",i.value="";try{const m=(await Lt.put("/calibration/camera-extrinsics",{translation:{...o.translation},rotationDegrees:{...o.rotationDegrees}})).data;u(m),i.value="相機外參已儲存，後端與 AI 可透過校正 API 讀取此設定。"}catch(m){s.value=((x=(_=m.response)==null?void 0:_.data)==null?void 0:x.error)||"儲存相機外參失敗。"}finally{n.value=!1}},h=()=>{u({translation:{x:0,y:0,z:0},rotationDegrees:{x:0,y:0,z:0}}),i.value="",s.value=""};return ts(f),(_,x)=>(fe(),he("section",xP,[x[10]||(x[10]=nf('<div class="section-title"><p class="eyebrow">Calibration</p><h2>相機外參校正</h2><p class="calibration-lead">設定深度相機座標系 C 轉換至設備／IMU 座標系 B 的固定外參：<code>p<sup>B</sup> = R<sub>C</sub><sup>B</sup> p<sup>C</sup> + t<sub>C</sub><sup>B</sup></code>。</p></div>',1)),b("article",yP,[e.value?(fe(),he("p",SP,"正在載入校正設定…")):(fe(),he(pt,{key:1},[x[9]||(x[9]=b("div",{class:"calibration-reference"},[b("div",null,[b("strong",null,"設備／IMU 座標 B"),b("span",null,"X：設備前方　Y：左方　Z：上方")]),b("div",null,[b("strong",null,"RGB-D 相機座標 C"),b("span",null,"X：影像右方　Y：影像下方　Z：鏡頭前方")])],-1)),b("div",MP,[b("fieldset",null,[x[3]||(x[3]=b("legend",null,[rt("平移 t"),b("sub",null,"C"),b("sup",null,"B"),rt("（公尺）")],-1)),(fe(),he(pt,null,tn(["x","y","z"],m=>b("label",{key:`translation-${m}`},[rt(ae(m.toUpperCase())+" ",1),zt(b("input",{"onUpdate:modelValue":p=>o.translation[m]=p,type:"number",step:"0.001","aria-label":"translation axis"},null,8,bP),[[si,o.translation[m],void 0,{number:!0}]])])),64))]),b("fieldset",null,[x[7]||(x[7]=b("legend",null,[rt("旋轉 R"),b("sub",null,"C"),b("sup",null,"B"),rt("（Euler 角，度）")],-1)),b("label",null,[x[4]||(x[4]=rt("Roll（繞 X 軸）",-1)),zt(b("input",{"onUpdate:modelValue":x[0]||(x[0]=m=>o.rotationDegrees.x=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[si,o.rotationDegrees.x,void 0,{number:!0}]])]),b("label",null,[x[5]||(x[5]=rt("Pitch（繞 Y 軸）",-1)),zt(b("input",{"onUpdate:modelValue":x[1]||(x[1]=m=>o.rotationDegrees.y=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[si,o.rotationDegrees.y,void 0,{number:!0}]])]),b("label",null,[x[6]||(x[6]=rt("Yaw（繞 Z 軸）",-1)),zt(b("input",{"onUpdate:modelValue":x[2]||(x[2]=m=>o.rotationDegrees.z=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[si,o.rotationDegrees.z,void 0,{number:!0}]])])])]),b("div",EP,[x[8]||(x[8]=b("div",null,[b("strong",null,[rt("計算後的旋轉矩陣 R"),b("sub",null,"C"),b("sup",null,"B")]),b("small",null,"採用 Z(Yaw) → Y(Pitch) → X(Roll) 的旋轉順序。")],-1)),b("pre",null,ae(c.value),1)]),r.value?(fe(),he("p",TP,"最後儲存："+ae(r.value),1)):Et("",!0),i.value?(fe(),he("p",wP,ae(i.value),1)):Et("",!0),s.value?(fe(),he("p",AP,ae(s.value),1)):Et("",!0),b("div",RP,[b("button",{type:"button",class:"secondary-button",disabled:n.value,onClick:h},"重設為零值",8,CP),b("button",{type:"button",disabled:n.value,onClick:d},ae(n.value?"儲存中…":"儲存外參設定"),9,PP)])],64))])]))}},LP=[{path:"/",name:"home",component:FS,meta:{requiresAuth:!0}},{path:"/account/login",name:"account-login",component:$S},{path:"/account/profile",name:"account-profile",component:uM,meta:{requiresAuth:!0}},{path:"/account/password",name:"account-password",component:pM,meta:{requiresAuth:!0}},{path:"/guide",name:"guide",component:vM},{path:"/technology",name:"technology",component:MM},{path:"/history/object",name:"history-object",component:RM,meta:{requiresAuth:!0}},{path:"/history/tasks",name:"history-tasks",component:NM,meta:{requiresAuth:!0}},{path:"/history/operations",name:"history-operations",component:zM,meta:{requiresAuth:!0}},{path:"/media/stream",name:"media-stream",component:pP,meta:{requiresAuth:!0}},{path:"/media/voice",name:"media-voice",component:vP,meta:{requiresAuth:!0}},{path:"/settings/camera-extrinsics",name:"camera-extrinsics",component:DP,meta:{requiresAuth:!0}}],zg=px({history:Yv(),routes:LP});zg.beforeEach(t=>{if(t.meta.requiresAuth&&!qa.value)return{name:"account-login",query:{redirect:t.fullPath}};if(t.name==="account-login"&&qa.value)return{path:"/"}});lv(wx).use(zg).mount("#app");
