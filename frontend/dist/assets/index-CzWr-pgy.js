(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Et={},Js=[],oi=()=>{},Gd=()=>!1,La=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ia=t=>t.startsWith("onUpdate:"),Yt=Object.assign,_u=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rg=Object.prototype.hasOwnProperty,gt=(t,e)=>Rg.call(t,e),Qe=Array.isArray,js=t=>ao(t)==="[object Map]",_r=t=>ao(t)==="[object Set]",Ef=t=>ao(t)==="[object Date]",st=t=>typeof t=="function",Lt=t=>typeof t=="string",fi=t=>typeof t=="symbol",vt=t=>t!==null&&typeof t=="object",Wd=t=>(vt(t)||st(t))&&st(t.then)&&st(t.catch),Xd=Object.prototype.toString,ao=t=>Xd.call(t),Cg=t=>ao(t).slice(8,-1),qd=t=>ao(t)==="[object Object]",vu=t=>Lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hr=gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pg=/-\w/g,zn=Na(t=>t.replace(Pg,e=>e.slice(1).toUpperCase())),Dg=/\B([A-Z])/g,ns=Na(t=>t.replace(Dg,"-$1").toLowerCase()),$d=Na(t=>t.charAt(0).toUpperCase()+t.slice(1)),il=Na(t=>t?`on${$d(t)}`:""),ni=(t,e)=>!Object.is(t,e),Jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Yd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Ua=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bf;const Oa=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yr(t){if(Qe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Lt(i)?Ug(i):Yr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Lt(t)||vt(t))return t}const Lg=/;(?![^(]*\))/g,Ig=/:([^]+)/,Ng=/\/\*[^]*?\*\//g;function Ug(t){const e={};return t.replace(Ng,"").split(Lg).forEach(n=>{if(n){const i=n.split(Ig);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Rn(t){let e="";if(Lt(t))e=t;else if(Qe(t))for(let n=0;n<t.length;n++){const i=Rn(t[n]);i&&(e+=i+" ")}else if(vt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Og="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fg=gu(Og);function Kd(t){return!!t||t===""}function Bg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=vr(t[i],e[i]);return n}function vr(t,e){if(t===e)return!0;let n=Ef(t),i=Ef(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=fi(t),i=fi(e),n||i)return t===e;if(n=Qe(t),i=Qe(e),n||i)return n&&i?Bg(t,e):!1;if(n=vt(t),i=vt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!vr(t[o],e[o]))return!1}}return String(t)===String(e)}function xu(t,e){return t.findIndex(n=>vr(n,e))}const Zd=t=>!!(t&&t.__v_isRef===!0),we=t=>Lt(t)?t:t==null?"":Qe(t)||vt(t)&&(t.toString===Xd||!st(t.toString))?Zd(t)?we(t.value):JSON.stringify(t,Jd,2):String(t),Jd=(t,e)=>Zd(e)?Jd(t,e.value):js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[sl(i,r)+" =>"]=s,n),{})}:_r(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>sl(n))}:fi(e)?sl(e):vt(e)&&!Qe(e)&&!qd(e)?String(e):e,sl=(t,e="")=>{var n;return fi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class zg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Wt&&(Wt.active?(this.parent=Wt,this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){if(this._on>0&&--this._on===0){if(Wt===this)Wt=this.prevScope;else{let e=Wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Hg(){return Wt}let At;const rl=new WeakSet;class jd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&(Wt.active?Wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rl.has(this)&&(rl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ep(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tf(this),tp(this);const e=At,n=Hn;At=this,Hn=!0;try{return this.fn()}finally{np(this),At=e,Hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mu(e);this.deps=this.depsTail=void 0,Tf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ic(this)&&this.run()}get dirty(){return ic(this)}}let Qd=0,Vr,kr;function ep(t,e=!1){if(t.flags|=8,e){t.next=kr,kr=t;return}t.next=Vr,Vr=t}function Su(){Qd++}function yu(){if(--Qd>0)return;if(kr){let e=kr;for(kr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vr;){let e=Vr;for(Vr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function tp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function np(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Mu(i),Vg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function ic(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ip(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ip(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Kr)||(t.globalVersion=Kr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ic(t))))return;t.flags|=2;const e=t.dep,n=At,i=Hn;At=t,Hn=!0;try{tp(t);const s=t.fn(t._value);(e.version===0||ni(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{At=n,Hn=i,np(t),t.flags&=-3}}function Mu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Mu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Hn=!0;const sp=[];function Ci(){sp.push(Hn),Hn=!1}function Pi(){const t=sp.pop();Hn=t===void 0?!0:t}function Tf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=At;At=void 0;try{e()}finally{At=n}}}let Kr=0;class kg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Eu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!Hn||At===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==At)n=this.activeLink=new kg(At,this),At.deps?(n.prevDep=At.depsTail,At.depsTail.nextDep=n,At.depsTail=n):At.deps=At.depsTail=n,rp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=At.depsTail,n.nextDep=void 0,At.depsTail.nextDep=n,At.depsTail=n,At.deps===n&&(At.deps=i)}return n}trigger(e){this.version++,Kr++,this.notify(e)}notify(e){Su();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{yu()}}}function rp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)rp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const sc=new WeakMap,Ss=Symbol(""),rc=Symbol(""),Zr=Symbol("");function tn(t,e,n){if(Hn&&At){let i=sc.get(t);i||sc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Eu),s.map=i,s.key=n),s.track()}}function Ei(t,e,n,i,s,r){const o=sc.get(t);if(!o){Kr++;return}const a=l=>{l&&l.trigger()};if(Su(),e==="clear")o.forEach(a);else{const l=Qe(t),c=l&&vu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Zr||!fi(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Zr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ss)),js(t)&&a(o.get(rc)));break;case"delete":l||(a(o.get(Ss)),js(t)&&a(o.get(rc)));break;case"set":js(t)&&a(o.get(Ss));break}}yu()}function Ls(t){const e=mt(t);return e===t?e:(tn(e,"iterate",Zr),Ln(t)?e:e.map(kn))}function Fa(t){return tn(t=mt(t),"iterate",Zr),t}function Qn(t,e){return Di(t)?rr(ys(t)?kn(e):e):kn(e)}const Gg={__proto__:null,[Symbol.iterator](){return ol(this,Symbol.iterator,t=>Qn(this,t))},concat(...t){return Ls(this).concat(...t.map(e=>Qe(e)?Ls(e):e))},entries(){return ol(this,"entries",t=>(t[1]=Qn(this,t[1]),t))},every(t,e){return pi(this,"every",t,e,void 0,arguments)},filter(t,e){return pi(this,"filter",t,e,n=>n.map(i=>Qn(this,i)),arguments)},find(t,e){return pi(this,"find",t,e,n=>Qn(this,n),arguments)},findIndex(t,e){return pi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return pi(this,"findLast",t,e,n=>Qn(this,n),arguments)},findLastIndex(t,e){return pi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return pi(this,"forEach",t,e,void 0,arguments)},includes(...t){return al(this,"includes",t)},indexOf(...t){return al(this,"indexOf",t)},join(t){return Ls(this).join(t)},lastIndexOf(...t){return al(this,"lastIndexOf",t)},map(t,e){return pi(this,"map",t,e,void 0,arguments)},pop(){return br(this,"pop")},push(...t){return br(this,"push",t)},reduce(t,...e){return Af(this,"reduce",t,e)},reduceRight(t,...e){return Af(this,"reduceRight",t,e)},shift(){return br(this,"shift")},some(t,e){return pi(this,"some",t,e,void 0,arguments)},splice(...t){return br(this,"splice",t)},toReversed(){return Ls(this).toReversed()},toSorted(t){return Ls(this).toSorted(t)},toSpliced(...t){return Ls(this).toSpliced(...t)},unshift(...t){return br(this,"unshift",t)},values(){return ol(this,"values",t=>Qn(this,t))}};function ol(t,e,n){const i=Fa(t),s=i[e]();return i!==t&&!Ln(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const Wg=Array.prototype;function pi(t,e,n,i,s,r){const o=Fa(t),a=o!==t&&!Ln(t),l=o[e];if(l!==Wg[e]){const f=l.apply(t,r);return a?kn(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Qn(t,f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Af(t,e,n,i){const s=Fa(t),r=s!==t&&!Ln(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Qn(t,c)),n.call(this,c,Qn(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?Qn(t,l):l}function al(t,e,n){const i=mt(t);tn(i,"iterate",Zr);const s=i[e](...n);return(s===-1||s===!1)&&Au(n[0])?(n[0]=mt(n[0]),i[e](...n)):s}function br(t,e,n=[]){Ci(),Su();const i=mt(t)[e].apply(t,n);return yu(),Pi(),i}const Xg=gu("__proto__,__v_isRef,__isVue"),op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fi));function qg(t){fi(t)||(t=String(t));const e=mt(this);return tn(e,"has",t),e.hasOwnProperty(t)}class ap{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?n_:fp:r?up:cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Qe(e);if(!s){let l;if(o&&(l=Gg[n]))return l;if(n==="hasOwnProperty")return qg}const a=Reflect.get(e,n,on(e)?e:i);if((fi(n)?op.has(n):Xg(n))||(s||tn(e,"get",n),r))return a;if(on(a)){const l=o&&vu(n)?a:a.value;return s&&vt(l)?ac(l):l}return vt(a)?s?ac(a):xr(a):a}}class lp extends ap{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Qe(e)&&vu(n);if(!this._isShallow){const c=Di(r);if(!Ln(i)&&!Di(i)&&(r=mt(r),i=mt(i)),!o&&on(r)&&!on(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:gt(e,n),l=Reflect.set(e,n,i,on(e)?e:s);return e===mt(s)&&l&&(a?ni(i,r)&&Ei(e,"set",n,i):Ei(e,"add",n,i)),l}deleteProperty(e,n){const i=gt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ei(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!fi(n)||!op.has(n))&&tn(e,"has",n),i}ownKeys(e){return tn(e,"iterate",Qe(e)?"length":Ss),Reflect.ownKeys(e)}}class $g extends ap{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Yg=new lp,Kg=new $g,Zg=new lp(!0);const oc=t=>t,So=t=>Reflect.getPrototypeOf(t);function Jg(t,e,n){return function(...i){const s=this.__v_raw,r=mt(s),o=js(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?oc:e?rr:kn;return!e&&tn(r,"iterate",l?rc:Ss),Yt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function yo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jg(t,e){const n={get(s){const r=this.__v_raw,o=mt(r),a=mt(s);t||(ni(s,a)&&tn(o,"get",s),tn(o,"get",a));const{has:l}=So(o),c=e?oc:t?rr:kn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&tn(mt(s),"iterate",Ss),s.size},has(s){const r=this.__v_raw,o=mt(r),a=mt(s);return t||(ni(s,a)&&tn(o,"has",s),tn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=mt(a),c=e?oc:t?rr:kn;return!t&&tn(l,"iterate",Ss),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Yt(n,t?{add:yo("add"),set:yo("set"),delete:yo("delete"),clear:yo("clear")}:{add(s){const r=mt(this),o=So(r),a=mt(s),l=!e&&!Ln(s)&&!Di(s)?a:s;return o.has.call(r,l)||ni(s,l)&&o.has.call(r,s)||ni(a,l)&&o.has.call(r,a)||(r.add(l),Ei(r,"add",l,l)),this},set(s,r){!e&&!Ln(r)&&!Di(r)&&(r=mt(r));const o=mt(this),{has:a,get:l}=So(o);let c=a.call(o,s);c||(s=mt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ni(r,u)&&Ei(o,"set",s,r):Ei(o,"add",s,r),this},delete(s){const r=mt(this),{has:o,get:a}=So(r);let l=o.call(r,s);l||(s=mt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ei(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,o=s.clear();return r&&Ei(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Jg(s,t,e)}),n}function bu(t,e){const n=jg(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(gt(n,s)&&s in i?n:i,s,r)}const Qg={get:bu(!1,!1)},e_={get:bu(!1,!0)},t_={get:bu(!0,!1)};const cp=new WeakMap,up=new WeakMap,fp=new WeakMap,n_=new WeakMap;function i_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xr(t){return Di(t)?t:Tu(t,!1,Yg,Qg,cp)}function hp(t){return Tu(t,!1,Zg,e_,up)}function ac(t){return Tu(t,!0,Kg,t_,fp)}function Tu(t,e,n,i,s){if(!vt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=i_(Cg(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function ys(t){return Di(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function Di(t){return!!(t&&t.__v_isReadonly)}function Ln(t){return!!(t&&t.__v_isShallow)}function Au(t){return t?!!t.__v_raw:!1}function mt(t){const e=t&&t.__v_raw;return e?mt(e):t}function s_(t){return!gt(t,"__v_skip")&&Object.isExtensible(t)&&Yd(t,"__v_skip",!0),t}const kn=t=>vt(t)?xr(t):t,rr=t=>vt(t)?ac(t):t;function on(t){return t?t.__v_isRef===!0:!1}function et(t){return dp(t,!1)}function r_(t){return dp(t,!0)}function dp(t,e){return on(t)?t:new o_(t,e)}class o_{constructor(e,n){this.dep=new Eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:mt(e),this._value=n?e:kn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Ln(e)||Di(e);e=i?e:mt(e),ni(e,n)&&(this._rawValue=e,this._value=i?e:kn(e),this.dep.trigger())}}function fn(t){return on(t)?t.value:t}const a_={get:(t,e,n)=>e==="__v_raw"?t:fn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return on(s)&&!on(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function pp(t){return ys(t)?t:new Proxy(t,a_)}class l_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return ep(this,!0),!0}get value(){const e=this.dep.track();return ip(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function c_(t,e,n=!1){let i,s;return st(t)?i=t:(i=t.get,s=t.set),new l_(i,s,n)}const Mo={},fa=new WeakMap;let fs;function u_(t,e=!1,n=fs){if(n){let i=fa.get(n);i||fa.set(n,i=[]),i.push(t)}}function f_(t,e,n=Et){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=S=>s?S:Ln(S)||s===!1||s===0?bi(S,1):bi(S);let u,f,h,d,m=!1,v=!1;if(on(t)?(f=()=>t.value,m=Ln(t)):ys(t)?(f=()=>c(t),m=!0):Qe(t)?(v=!0,m=t.some(S=>ys(S)||Ln(S)),f=()=>t.map(S=>{if(on(S))return S.value;if(ys(S))return c(S);if(st(S))return l?l(S,2):S()})):st(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Ci();try{h()}finally{Pi()}}const S=fs;fs=u;try{return l?l(t,3,[d]):t(d)}finally{fs=S}}:f=oi,e&&s){const S=f,A=s===!0?1/0:s;f=()=>bi(S(),A)}const g=Hg(),p=()=>{u.stop(),g&&g.active&&_u(g.effects,u)};if(r&&e){const S=e;e=(...A)=>{const T=S(...A);return p(),T}}let M=v?new Array(t.length).fill(Mo):Mo;const E=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const A=u.run();if(S||s||m||(v?A.some((T,D)=>ni(T,M[D])):ni(A,M))){h&&h();const T=fs;fs=u;try{const D=[A,M===Mo?void 0:v&&M[0]===Mo?[]:M,d];M=A,l?l(e,3,D):e(...D)}finally{fs=T}}}else u.run()};return a&&a(E),u=new jd(f),u.scheduler=o?()=>o(E,!1):E,d=S=>u_(S,!1,u),h=u.onStop=()=>{const S=fa.get(u);if(S){if(l)l(S,4);else for(const A of S)A();fa.delete(u)}},e?i?E(!0):M=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function bi(t,e=1/0,n){if(e<=0||!vt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,on(t))bi(t.value,e,n);else if(Qe(t))for(let i=0;i<t.length;i++)bi(t[i],e,n);else if(_r(t)||js(t))t.forEach(i=>{bi(i,e,n)});else if(qd(t)){for(const i in t)bi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&bi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lo(t,e,n,i){try{return i?t(...i):t()}catch(s){Ba(s,e,n)}}function Gn(t,e,n,i){if(st(t)){const s=lo(t,e,n,i);return s&&Wd(s)&&s.catch(r=>{Ba(r,e,n)}),s}if(Qe(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Gn(t[r],e,n,i));return s}}function Ba(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Ci(),lo(r,null,10,[t,l,c]),Pi();return}}h_(t,n,s,i,o)}function h_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const hn=[];let jn=-1;const Qs=[];let Xi=null,Ys=0;const mp=Promise.resolve();let ha=null;function za(t){const e=ha||mp;return t?e.then(this?t.bind(this):t):e}function d_(t){let e=jn+1,n=hn.length;for(;e<n;){const i=e+n>>>1,s=hn[i],r=Jr(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function wu(t){if(!(t.flags&1)){const e=Jr(t),n=hn[hn.length-1];!n||!(t.flags&2)&&e>=Jr(n)?hn.push(t):hn.splice(d_(e),0,t),t.flags|=1,gp()}}function gp(){ha||(ha=mp.then(vp))}function p_(t){Qe(t)?Qs.push(...t):Xi&&t.id===-1?Xi.splice(Ys+1,0,t):t.flags&1||(Qs.push(t),t.flags|=1),gp()}function wf(t,e,n=jn+1){for(;n<hn.length;n++){const i=hn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;hn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _p(t){if(Qs.length){const e=[...new Set(Qs)].sort((n,i)=>Jr(n)-Jr(i));if(Qs.length=0,Xi){Xi.push(...e);return}for(Xi=e,Ys=0;Ys<Xi.length;Ys++){const n=Xi[Ys];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xi=null,Ys=0}}const Jr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function vp(t){try{for(jn=0;jn<hn.length;jn++){const e=hn[jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),lo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jn<hn.length;jn++){const e=hn[jn];e&&(e.flags&=-2)}jn=-1,hn.length=0,_p(),ha=null,(hn.length||Qs.length)&&vp()}}let Dn=null,xp=null;function da(t){const e=Dn;return Dn=t,xp=t&&t.type.__scopeId||null,e}function lc(t,e=Dn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ga(-1);const r=da(e),o=Ms.length;let a;try{a=t(...s)}finally{for(let l=Ms.length;l>o;l--)Gp();da(r),i._d&&ga(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Fn(t,e){if(Dn===null)return t;const n=Ga(Dn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Et]=e[s];r&&(st(r)&&(r={mounted:r,updated:r}),r.deep&&bi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function rs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ci(),Gn(l,n,8,[t.el,a,t,e]),Pi())}}function jo(t,e){if(dn){let n=dn.provides;const i=dn.parent&&dn.parent.provides;i===n&&(n=dn.provides=Object.create(i)),n[t]=e}}function Vn(t,e,n=!1){const i=u0();if(i||er){let s=er?er._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&st(e)?e.call(i&&i.proxy):e}}const m_=Symbol.for("v-scx"),g_=()=>Vn(m_);function Ji(t,e,n){return Sp(t,e,n)}function Sp(t,e,n=Et){const{immediate:i,deep:s,flush:r,once:o}=n,a=Yt({},n),l=e&&i||!e&&r!=="post";let c;if(Qr){if(r==="sync"){const d=g_();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=oi,d.resume=oi,d.pause=oi,d}}const u=dn;a.call=(d,m,v)=>Gn(d,u,m,v);let f=!1;r==="post"?a.scheduler=d=>{vn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,m)=>{m?d():wu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=f_(t,e,a);return Qr&&(c?c.push(h):l&&h()),h}function __(t,e,n){const i=this.proxy,s=Lt(t)?t.includes(".")?yp(i,t):()=>i[t]:t.bind(i,i);let r;st(e)?r=e:(r=e.handler,n=e);const o=co(this),a=Sp(s,r.bind(i),n);return o(),a}function yp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const v_=Symbol("_vte"),x_=t=>t.__isTeleport,ll=Symbol("_leaveCb");function Ru(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ru(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Mp(t,e){return st(t)?Yt({name:t.name},e,{setup:t}):t}function Ep(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Rf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const pa=new WeakMap;function Gr(t,e,n,i,s=!1){if(Qe(t)){t.forEach((v,g)=>Gr(v,e&&(Qe(e)?e[g]:e),n,i,s));return}if(Wr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Gr(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ga(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Et?a.refs={}:a.refs,f=a.setupState,h=mt(f),d=f===Et?Gd:v=>Rf(u,v)?!1:gt(h,v),m=(v,g)=>!(g&&Rf(u,g));if(c!=null&&c!==l){if(Cf(e),Lt(c))u[c]=null,d(c)&&(f[c]=null);else if(on(c)){const v=e;m(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(st(l))lo(l,a,12,[o,u]);else{const v=Lt(l),g=on(l);if(v||g){const p=()=>{if(t.f){const M=v?d(l)?f[l]:u[l]:m()||!t.k?l.value:u[t.k];if(s)Qe(M)&&_u(M,r);else if(Qe(M))M.includes(r)||M.push(r);else if(v)u[l]=[r],d(l)&&(f[l]=u[l]);else{const E=[r];m(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else v?(u[l]=o,d(l)&&(f[l]=o)):g&&(m(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const M=()=>{p(),pa.delete(t)};M.id=-1,pa.set(t,M),vn(M,n)}else Cf(t),p()}}}function Cf(t){const e=pa.get(t);e&&(e.flags|=8,pa.delete(t))}Oa().requestIdleCallback;Oa().cancelIdleCallback;const Wr=t=>!!t.type.__asyncLoader,bp=t=>t.type.__isKeepAlive;function S_(t,e){Tp(t,"a",e)}function y_(t,e){Tp(t,"da",e)}function Tp(t,e,n=dn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ha(e,i,n),n){let s=n.parent;for(;s&&s.parent;)bp(s.parent.vnode)&&M_(i,e,n,s),s=s.parent}}function M_(t,e,n,i){const s=Ha(e,t,i,!0);Cu(()=>{_u(i[e],s)},n)}function Ha(t,e,n=dn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ci();const a=co(n),l=Gn(e,n,t,o);return a(),Pi(),l});return i?s.unshift(r):s.push(r),r}}const Ni=t=>(e,n=dn)=>{(!Qr||t==="sp")&&Ha(t,(...i)=>e(...i),n)},E_=Ni("bm"),Cs=Ni("m"),b_=Ni("bu"),T_=Ni("u"),A_=Ni("bum"),Cu=Ni("um"),w_=Ni("sp"),R_=Ni("rtg"),C_=Ni("rtc");function P_(t,e=dn){Ha("ec",t,e)}const D_=Symbol.for("v-ndc");function ai(t,e,n,i){let s;const r=n,o=Qe(t);if(o||Lt(t)){const a=o&&ys(t);let l=!1,c=!1;a&&(l=!Ln(t),c=Di(t),t=Fa(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?rr(kn(t[u])):kn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const cc=t=>t?$p(t)?Ga(t):cc(t.parent):null,Xr=Yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cc(t.parent),$root:t=>cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wp(t),$forceUpdate:t=>t.f||(t.f=()=>{wu(t.update)}),$nextTick:t=>t.n||(t.n=za.bind(t.proxy)),$watch:t=>__.bind(t)}),cl=(t,e)=>t!==Et&&!t.__isScriptSetup&&gt(t,e),L_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(cl(i,e))return o[e]=1,i[e];if(s!==Et&&gt(s,e))return o[e]=2,s[e];if(gt(r,e))return o[e]=3,r[e];if(n!==Et&&gt(n,e))return o[e]=4,n[e];uc&&(o[e]=0)}}const c=Xr[e];let u,f;if(c)return e==="$attrs"&&tn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Et&&gt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return cl(s,e)?(s[e]=n,!0):i!==Et&&gt(i,e)?(i[e]=n,!0):gt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Et&&a[0]!=="$"&&gt(t,a)||cl(e,a)||gt(r,a)||gt(i,a)||gt(Xr,a)||gt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:gt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pf(t){return Qe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uc=!0;function I_(t){const e=wp(t),n=t.proxy,i=t.ctx;uc=!1,e.beforeCreate&&Df(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:m,activated:v,deactivated:g,beforeDestroy:p,beforeUnmount:M,destroyed:E,unmounted:S,render:A,renderTracked:T,renderTriggered:D,errorCaptured:x,serverPrefetch:R,expose:I,inheritAttrs:L,components:H,directives:ie,filters:oe}=e;if(c&&N_(c,i,null),o)for(const G in o){const se=o[G];st(se)&&(i[G]=se.bind(n))}if(s){const G=s.call(n,n);vt(G)&&(t.data=xr(G))}if(uc=!0,r)for(const G in r){const se=r[G],ge=st(se)?se.bind(n,n):st(se.get)?se.get.bind(n,n):oi,ye=!st(se)&&st(se.set)?se.set.bind(n):oi,xe=dt({get:ge,set:ye});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>xe.value,set:Ee=>xe.value=Ee})}if(a)for(const G in a)Ap(a[G],i,n,G);if(l){const G=st(l)?l.call(n):l;Reflect.ownKeys(G).forEach(se=>{jo(se,G[se])})}u&&Df(u,t,"c");function ne(G,se){Qe(se)?se.forEach(ge=>G(ge.bind(n))):se&&G(se.bind(n))}if(ne(E_,f),ne(Cs,h),ne(b_,d),ne(T_,m),ne(S_,v),ne(y_,g),ne(P_,x),ne(C_,T),ne(R_,D),ne(A_,M),ne(Cu,S),ne(w_,R),Qe(I))if(I.length){const G=t.exposed||(t.exposed={});I.forEach(se=>{Object.defineProperty(G,se,{get:()=>n[se],set:ge=>n[se]=ge,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===oi&&(t.render=A),L!=null&&(t.inheritAttrs=L),H&&(t.components=H),ie&&(t.directives=ie),R&&Ep(t)}function N_(t,e,n=oi){Qe(t)&&(t=fc(t));for(const i in t){const s=t[i];let r;vt(s)?"default"in s?r=Vn(s.from||i,s.default,!0):r=Vn(s.from||i):r=Vn(s),on(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Df(t,e,n){Gn(Qe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ap(t,e,n,i){let s=i.includes(".")?yp(n,i):()=>n[i];if(Lt(t)){const r=e[t];st(r)&&Ji(s,r)}else if(st(t))Ji(s,t.bind(n));else if(vt(t))if(Qe(t))t.forEach(r=>Ap(r,e,n,i));else{const r=st(t.handler)?t.handler.bind(n):e[t.handler];st(r)&&Ji(s,r,t)}}function wp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ma(l,c,o,!0)),ma(l,e,o)),vt(e)&&r.set(e,l),l}function ma(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ma(t,r,n,!0),s&&s.forEach(o=>ma(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=U_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const U_={data:Lf,props:If,emits:If,methods:Or,computed:Or,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Or,directives:Or,watch:F_,provide:Lf,inject:O_};function Lf(t,e){return e?t?function(){return Yt(st(t)?t.call(this,this):t,st(e)?e.call(this,this):e)}:e:t}function O_(t,e){return Or(fc(t),fc(e))}function fc(t){if(Qe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function Or(t,e){return t?Yt(Object.create(null),t,e):e}function If(t,e){return t?Qe(t)&&Qe(e)?[...new Set([...t,...e])]:Yt(Object.create(null),Pf(t),Pf(e??{})):e}function F_(t,e){if(!t)return e;if(!e)return t;const n=Yt(Object.create(null),t);for(const i in e)n[i]=ln(t[i],e[i]);return n}function Rp(){return{app:null,config:{isNativeTag:Gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let B_=0;function z_(t,e){return function(i,s=null){st(i)||(i=Yt({},i)),s!=null&&!vt(s)&&(s=null);const r=Rp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:B_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:g0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&st(u.install)?(o.add(u),u.install(c,...f)):st(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||sn(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Ga(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Gn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=er;er=c;try{return u()}finally{er=f}}};return c}}let er=null;const H_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zn(e)}Modifiers`]||t[`${ns(e)}Modifiers`];function V_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Et;let s=n;const r=e.startsWith("update:"),o=r&&H_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Lt(u)?u.trim():u)),o.number&&(s=n.map(Ua)));let a,l=i[a=il(e)]||i[a=il(zn(e))];!l&&r&&(l=i[a=il(ns(e))]),l&&Gn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Gn(c,t,6,s)}}const k_=new WeakMap;function Cp(t,e,n=!1){const i=n?k_:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!st(t)){const l=c=>{const u=Cp(c,e,!0);u&&(a=!0,Yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(vt(t)&&i.set(t,null),null):(Qe(r)?r.forEach(l=>o[l]=null):Yt(o,r),vt(t)&&i.set(t,o),o)}function Va(t,e){return!t||!La(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),gt(t,e[0].toLowerCase()+e.slice(1))||gt(t,ns(e))||gt(t,e))}function Nf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:m,inheritAttrs:v}=t,g=da(t);let p,M;try{if(n.shapeFlag&4){const S=s||i,A=S;p=ei(c.call(A,S,u,f,d,h,m)),M=a}else{const S=e;p=ei(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),M=e.props?a:G_(a)}}catch(S){Ms.length=0,Ba(S,t,1),p=sn(ji)}let E=p;if(M&&v!==!1){const S=Object.keys(M),{shapeFlag:A}=E;S.length&&A&7&&(r&&S.some(Ia)&&(M=W_(M,r)),E=or(E,M,!1,!0))}return n.dirs&&(E=or(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Ru(E,n.transition),p=E,da(g),p}const G_=t=>{let e;for(const n in t)(n==="class"||n==="style"||La(n))&&((e||(e={}))[n]=t[n]);return e},W_=(t,e)=>{const n={};for(const i in t)(!Ia(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function X_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Uf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Pp(o,i,h)&&!Va(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Uf(i,o,c):!0:!!o;return!1}function Uf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Pp(e,t,r)&&!Va(n,r))return!0}return!1}function Pp(t,e,n){const i=t[n],s=e[n];return n==="style"&&vt(i)&&vt(s)?!vr(i,s):i!==s}function q_({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Dp={},Lp=()=>Object.create(Dp),Ip=t=>Object.getPrototypeOf(t)===Dp;function $_(t,e,n,i=!1){const s={},r=Lp();t.propsDefaults=Object.create(null),Np(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:hp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Y_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=mt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Va(t.emitsOptions,h))continue;const d=e[h];if(l)if(gt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const m=zn(h);s[m]=hc(l,a,m,d,t,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Np(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!gt(e,f)&&((u=ns(f))===f||!gt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=hc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!gt(e,f))&&(delete r[f],c=!0)}c&&Ei(t.attrs,"set","")}function Np(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Hr(l))continue;const c=e[l];let u;s&&gt(s,u=zn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Va(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=mt(n),c=a||Et;for(let u=0;u<r.length;u++){const f=r[u];n[f]=hc(s,l,f,c[f],t,!gt(c,f))}}return o}function hc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&st(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=co(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ns(n))&&(i=!0))}return i}const K_=new WeakMap;function Up(t,e,n=!1){const i=n?K_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!st(t)){const u=f=>{l=!0;const[h,d]=Up(f,e,!0);Yt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return vt(t)&&i.set(t,Js),Js;if(Qe(r))for(let u=0;u<r.length;u++){const f=zn(r[u]);Of(f)&&(o[f]=Et)}else if(r)for(const u in r){const f=zn(u);if(Of(f)){const h=r[u],d=o[f]=Qe(h)||st(h)?{type:h}:Yt({},h),m=d.type;let v=!1,g=!0;if(Qe(m))for(let p=0;p<m.length;++p){const M=m[p],E=st(M)&&M.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(g=!1)}else v=st(m)&&m.name==="Boolean";d[0]=v,d[1]=g,(v||gt(d,"default"))&&a.push(f)}}const c=[o,a];return vt(t)&&i.set(t,c),c}function Of(t){return t[0]!=="$"&&!Hr(t)}const Pu=t=>t==="_"||t==="_ctx"||t==="$stable",Du=t=>Qe(t)?t.map(ei):[ei(t)],Z_=(t,e,n)=>{if(e._n)return e;const i=lc((...s)=>Du(e(...s)),n);return i._c=!1,i},Op=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Pu(s))continue;const r=t[s];if(st(r))e[s]=Z_(s,r,i);else if(r!=null){const o=Du(r);e[s]=()=>o}}},Fp=(t,e)=>{const n=Du(e);t.slots.default=()=>n},Bp=(t,e,n)=>{for(const i in e)(n||!Pu(i))&&(t[i]=e[i])},J_=(t,e,n)=>{const i=t.slots=Lp();if(t.vnode.shapeFlag&32){const s=e._;s?(Bp(i,e,n),n&&Yd(i,"_",s,!0)):Op(e,i)}else e&&Fp(t,e)},j_=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Et;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Bp(s,e,n):(r=!e.$stable,Op(e,s)),o=e}else e&&(Fp(t,e),o={default:1});if(r)for(const a in s)!Pu(a)&&o[a]==null&&delete s[a]},vn=i0;function Q_(t){return e0(t)}function e0(t,e){const n=Oa();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=oi,insertStaticContent:m}=t,v=(w,C,B,J=null,N=null,j=null,_e=void 0,pe=null,ve=!!C.dynamicChildren)=>{if(w===C)return;w&&!Tr(w,C)&&(J=F(w),Ee(w,N,j,!0),w=null),C.patchFlag===-2&&(ve=!1,C.dynamicChildren=null);const{type:le,ref:De,shapeFlag:P}=C;switch(le){case ka:g(w,C,B,J);break;case ji:p(w,C,B,J);break;case Qo:w==null&&M(C,B,J,_e);break;case bt:H(w,C,B,J,N,j,_e,pe,ve);break;default:P&1?A(w,C,B,J,N,j,_e,pe,ve):P&6?ie(w,C,B,J,N,j,_e,pe,ve):(P&64||P&128)&&le.process(w,C,B,J,N,j,_e,pe,ve,de)}De!=null&&N?Gr(De,w&&w.ref,j,C||w,!C):De==null&&w&&w.ref!=null&&Gr(w.ref,null,j,w,!0)},g=(w,C,B,J)=>{if(w==null)i(C.el=a(C.children),B,J);else{const N=C.el=w.el;C.children!==w.children&&c(N,C.children)}},p=(w,C,B,J)=>{w==null?i(C.el=l(C.children||""),B,J):C.el=w.el},M=(w,C,B,J)=>{[w.el,w.anchor]=m(w.children,C,B,J,w.el,w.anchor)},E=({el:w,anchor:C},B,J)=>{let N;for(;w&&w!==C;)N=h(w),i(w,B,J),w=N;i(C,B,J)},S=({el:w,anchor:C})=>{let B;for(;w&&w!==C;)B=h(w),s(w),w=B;s(C)},A=(w,C,B,J,N,j,_e,pe,ve)=>{if(C.type==="svg"?_e="svg":C.type==="math"&&(_e="mathml"),w==null)T(C,B,J,N,j,_e,pe,ve);else{const le=w.el&&w.el._isVueCE?w.el:null;try{le&&le._beginPatch(),R(w,C,N,j,_e,pe,ve)}finally{le&&le._endPatch()}}},T=(w,C,B,J,N,j,_e,pe)=>{let ve,le;const{props:De,shapeFlag:P,transition:He,dirs:Ie}=w;if(ve=w.el=o(w.type,j,De&&De.is,De),P&8?u(ve,w.children):P&16&&x(w.children,ve,null,J,N,ul(w,j),_e,pe),Ie&&rs(w,null,J,"created"),D(ve,w,w.scopeId,_e,J),De){for(const _ in De)_!=="value"&&!Hr(_)&&r(ve,_,null,De[_],j,J);"value"in De&&r(ve,"value",null,De.value,j),(le=De.onVnodeBeforeMount)&&Kn(le,J,w)}Ie&&rs(w,null,J,"beforeMount");const b=t0(N,He);b&&He.beforeEnter(ve),i(ve,C,B),((le=De&&De.onVnodeMounted)||b||Ie)&&vn(()=>{try{le&&Kn(le,J,w),b&&He.enter(ve),Ie&&rs(w,null,J,"mounted")}finally{}},N)},D=(w,C,B,J,N)=>{if(B&&d(w,B),J)for(let j=0;j<J.length;j++)d(w,J[j]);if(N){let j=N.subTree;if(C===j||kp(j.type)&&(j.ssContent===C||j.ssFallback===C)){const _e=N.vnode;D(w,_e,_e.scopeId,_e.slotScopeIds,N.parent)}}},x=(w,C,B,J,N,j,_e,pe,ve=0)=>{for(let le=ve;le<w.length;le++){const De=w[le]=pe?Mi(w[le]):ei(w[le]);v(null,De,C,B,J,N,j,_e,pe)}},R=(w,C,B,J,N,j,_e)=>{const pe=C.el=w.el;let{patchFlag:ve,dynamicChildren:le,dirs:De}=C;ve|=w.patchFlag&16;const P=w.props||Et,He=C.props||Et;let Ie;if(B&&os(B,!1),(Ie=He.onVnodeBeforeUpdate)&&Kn(Ie,B,C,w),De&&rs(C,w,B,"beforeUpdate"),B&&os(B,!0),le&&(!w.dynamicChildren||w.dynamicChildren.length!==le.length)&&(ve=0,_e=!1,le=null),(P.innerHTML&&He.innerHTML==null||P.textContent&&He.textContent==null)&&u(pe,""),le?I(w.dynamicChildren,le,pe,B,J,ul(C,N),j):_e||se(w,C,pe,null,B,J,ul(C,N),j,!1),ve>0){if(ve&16)L(pe,P,He,B,N);else if(ve&2&&P.class!==He.class&&r(pe,"class",null,He.class,N),ve&4&&r(pe,"style",P.style,He.style,N),ve&8){const b=C.dynamicProps;for(let _=0;_<b.length;_++){const z=b[_],$=P[z],te=He[z];(te!==$||z==="value")&&r(pe,z,$,te,N,B)}}ve&1&&w.children!==C.children&&u(pe,C.children)}else!_e&&le==null&&L(pe,P,He,B,N);((Ie=He.onVnodeUpdated)||De)&&vn(()=>{Ie&&Kn(Ie,B,C,w),De&&rs(C,w,B,"updated")},J)},I=(w,C,B,J,N,j,_e)=>{for(let pe=0;pe<C.length;pe++){const ve=w[pe],le=C[pe],De=ve.el&&(ve.type===bt||!Tr(ve,le)||ve.shapeFlag&198)?f(ve.el):B;v(ve,le,De,null,J,N,j,_e,!0)}},L=(w,C,B,J,N)=>{if(C!==B){if(C!==Et)for(const j in C)!Hr(j)&&!(j in B)&&r(w,j,C[j],null,N,J);for(const j in B){if(Hr(j))continue;const _e=B[j],pe=C[j];_e!==pe&&j!=="value"&&r(w,j,pe,_e,N,J)}"value"in B&&r(w,"value",C.value,B.value,N)}},H=(w,C,B,J,N,j,_e,pe,ve)=>{const le=C.el=w?w.el:a(""),De=C.anchor=w?w.anchor:a("");let{patchFlag:P,dynamicChildren:He,slotScopeIds:Ie}=C;Ie&&(pe=pe?pe.concat(Ie):Ie),w==null?(i(le,B,J),i(De,B,J),x(C.children||[],B,De,N,j,_e,pe,ve)):P>0&&P&64&&He&&w.dynamicChildren&&w.dynamicChildren.length===He.length?(I(w.dynamicChildren,He,B,N,j,_e,pe),(C.key!=null||N&&C===N.subTree)&&zp(w,C,!0)):se(w,C,B,De,N,j,_e,pe,ve)},ie=(w,C,B,J,N,j,_e,pe,ve)=>{C.slotScopeIds=pe,w==null?C.shapeFlag&512?N.ctx.activate(C,B,J,_e,ve):oe(C,B,J,N,j,_e,ve):X(w,C,ve)},oe=(w,C,B,J,N,j,_e)=>{const pe=w.component=c0(w,J,N);if(bp(w)&&(pe.ctx.renderer=de),f0(pe,!1,_e),pe.asyncDep){if(N&&N.registerDep(pe,ne,_e),!w.el){const ve=pe.subTree=sn(ji);p(null,ve,C,B),w.placeholder=ve.el}}else ne(pe,w,C,B,N,j,_e)},X=(w,C,B)=>{const J=C.component=w.component;if(X_(w,C,B))if(J.asyncDep&&!J.asyncResolved){G(J,C,B);return}else J.next=C,J.update();else C.el=w.el,J.vnode=C},ne=(w,C,B,J,N,j,_e)=>{const pe=()=>{if(w.isMounted){let{next:P,bu:He,u:Ie,parent:b,vnode:_}=w;{const be=Hp(w);if(be){P&&(P.el=_.el,G(w,P,_e)),be.asyncDep.then(()=>{vn(()=>{w.isUnmounted||le()},N)});return}}let z=P,$;os(w,!1),P?(P.el=_.el,G(w,P,_e)):P=_,He&&Jo(He),($=P.props&&P.props.onVnodeBeforeUpdate)&&Kn($,b,P,_),os(w,!0);const te=Nf(w),Se=w.subTree;w.subTree=te,v(Se,te,f(Se.el),F(Se),w,N,j),P.el=te.el,z===null&&q_(w,te.el),Ie&&vn(Ie,N),($=P.props&&P.props.onVnodeUpdated)&&vn(()=>Kn($,b,P,_),N)}else{let P;const{el:He,props:Ie}=C,{bm:b,m:_,parent:z,root:$,type:te}=w,Se=Wr(C);os(w,!1),b&&Jo(b),!Se&&(P=Ie&&Ie.onVnodeBeforeMount)&&Kn(P,z,C),os(w,!0);{$.ce&&$.ce._hasShadowRoot()&&$.ce._injectChildStyle(te,w.parent?w.parent.type:void 0);const be=w.subTree=Nf(w);v(null,be,B,J,w,N,j),C.el=be.el}if(_&&vn(_,N),!Se&&(P=Ie&&Ie.onVnodeMounted)){const be=C;vn(()=>Kn(P,z,be),N)}(C.shapeFlag&256||z&&Wr(z.vnode)&&z.vnode.shapeFlag&256)&&w.a&&vn(w.a,N),w.isMounted=!0,C=B=J=null}};w.scope.on();const ve=w.effect=new jd(pe);w.scope.off();const le=w.update=ve.run.bind(ve),De=w.job=ve.runIfDirty.bind(ve);De.i=w,De.id=w.uid,ve.scheduler=()=>wu(De),os(w,!0),le()},G=(w,C,B)=>{C.component=w;const J=w.vnode.props;w.vnode=C,w.next=null,Y_(w,C.props,J,B),j_(w,C.children,B),Ci(),wf(w),Pi()},se=(w,C,B,J,N,j,_e,pe,ve=!1)=>{const le=w&&w.children,De=w?w.shapeFlag:0,P=C.children,{patchFlag:He,shapeFlag:Ie}=C;if(He>0){if(He&128){ye(le,P,B,J,N,j,_e,pe,ve);return}else if(He&256){ge(le,P,B,J,N,j,_e,pe,ve);return}}Ie&8?(De&16&&Y(le,N,j),P!==le&&u(B,P)):De&16?Ie&16?ye(le,P,B,J,N,j,_e,pe,ve):Y(le,N,j,!0):(De&8&&u(B,""),Ie&16&&x(P,B,J,N,j,_e,pe,ve))},ge=(w,C,B,J,N,j,_e,pe,ve)=>{w=w||Js,C=C||Js;const le=w.length,De=C.length,P=Math.min(le,De);let He;for(He=0;He<P;He++){const Ie=C[He]=ve?Mi(C[He]):ei(C[He]);v(w[He],Ie,B,null,N,j,_e,pe,ve)}le>De?Y(w,N,j,!0,!1,P):x(C,B,J,N,j,_e,pe,ve,P)},ye=(w,C,B,J,N,j,_e,pe,ve)=>{let le=0;const De=C.length;let P=w.length-1,He=De-1;for(;le<=P&&le<=He;){const Ie=w[le],b=C[le]=ve?Mi(C[le]):ei(C[le]);if(Tr(Ie,b))v(Ie,b,B,null,N,j,_e,pe,ve);else break;le++}for(;le<=P&&le<=He;){const Ie=w[P],b=C[He]=ve?Mi(C[He]):ei(C[He]);if(Tr(Ie,b))v(Ie,b,B,null,N,j,_e,pe,ve);else break;P--,He--}if(le>P){if(le<=He){const Ie=He+1,b=Ie<De?C[Ie].el:J;for(;le<=He;)v(null,C[le]=ve?Mi(C[le]):ei(C[le]),B,b,N,j,_e,pe,ve),le++}}else if(le>He)for(;le<=P;)Ee(w[le],N,j,!0),le++;else{const Ie=le,b=le,_=new Map;for(le=b;le<=He;le++){const Me=C[le]=ve?Mi(C[le]):ei(C[le]);Me.key!=null&&_.set(Me.key,le)}let z,$=0;const te=He-b+1;let Se=!1,be=0;const ae=new Array(te);for(le=0;le<te;le++)ae[le]=0;for(le=Ie;le<=P;le++){const Me=w[le];if($>=te){Ee(Me,N,j,!0);continue}let Z;if(Me.key!=null)Z=_.get(Me.key);else for(z=b;z<=He;z++)if(ae[z-b]===0&&Tr(Me,C[z])){Z=z;break}Z===void 0?Ee(Me,N,j,!0):(ae[Z-b]=le+1,Z>=be?be=Z:Se=!0,v(Me,C[Z],B,null,N,j,_e,pe,ve),$++)}const fe=Se?n0(ae):Js;for(z=fe.length-1,le=te-1;le>=0;le--){const Me=b+le,Z=C[Me],k=C[Me+1],he=Me+1<De?k.el||Vp(k):J;ae[le]===0?v(null,Z,B,he,N,j,_e,pe,ve):Se&&(z<0||le!==fe[z]?xe(Z,B,he,2):z--)}}},xe=(w,C,B,J,N=null)=>{const{el:j,type:_e,transition:pe,children:ve,shapeFlag:le}=w;if(le&6){xe(w.component.subTree,C,B,J);return}if(le&128){w.suspense.move(C,B,J);return}if(le&64){_e.move(w,C,B,de);return}if(_e===bt){i(j,C,B);for(let P=0;P<ve.length;P++)xe(ve[P],C,B,J);i(w.anchor,C,B);return}if(_e===Qo){E(w,C,B);return}if(J!==2&&le&1&&pe)if(J===0)pe.persisted&&!j[ll]?i(j,C,B):(pe.beforeEnter(j),i(j,C,B),vn(()=>pe.enter(j),N));else{const{leave:P,delayLeave:He,afterLeave:Ie}=pe,b=()=>{w.ctx.isUnmounted?s(j):i(j,C,B)},_=()=>{const z=j._isLeaving||!!j[ll];j._isLeaving&&j[ll](!0),pe.persisted&&!z?b():P(j,()=>{b(),Ie&&Ie()})};He?He(j,b,_):_()}else i(j,C,B)},Ee=(w,C,B,J=!1,N=!1)=>{const{type:j,props:_e,ref:pe,children:ve,dynamicChildren:le,shapeFlag:De,patchFlag:P,dirs:He,cacheIndex:Ie,memo:b}=w;if(P===-2&&(N=!1),pe!=null&&(Ci(),Gr(pe,null,B,w,!0),Pi()),Ie!=null&&(C.renderCache[Ie]=void 0),De&256){C.ctx.deactivate(w);return}const _=De&1&&He,z=!Wr(w);let $;if(z&&($=_e&&_e.onVnodeBeforeUnmount)&&Kn($,C,w),De&6)je(w.component,B,J);else{if(De&128){w.suspense.unmount(B,J);return}_&&rs(w,null,C,"beforeUnmount"),De&64?w.type.remove(w,C,B,de,J):le&&!le.hasOnce&&(j!==bt||P>0&&P&64)?Y(le,C,B,!1,!0):(j===bt&&P&384||!N&&De&16)&&Y(ve,C,B),J&&Ze(w)}const te=b!=null&&Ie==null;(z&&($=_e&&_e.onVnodeUnmounted)||_||te)&&vn(()=>{$&&Kn($,C,w),_&&rs(w,null,C,"unmounted"),te&&(w.el=null)},B)},Ze=w=>{const{type:C,el:B,anchor:J,transition:N}=w;if(C===bt){lt(B,J);return}if(C===Qo){S(w);return}const j=()=>{s(B),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(w.shapeFlag&1&&N&&!N.persisted){const{leave:_e,delayLeave:pe}=N,ve=()=>_e(B,j);pe?pe(w.el,j,ve):ve()}else j()},lt=(w,C)=>{let B;for(;w!==C;)B=h(w),s(w),w=B;s(C)},je=(w,C,B)=>{const{bum:J,scope:N,job:j,subTree:_e,um:pe,m:ve,a:le}=w;Ff(ve),Ff(le),J&&Jo(J),N.stop(),j&&(j.flags|=8,Ee(_e,w,C,B)),pe&&vn(pe,C),vn(()=>{w.isUnmounted=!0},C)},Y=(w,C,B,J=!1,N=!1,j=0)=>{for(let _e=j;_e<w.length;_e++)Ee(w[_e],C,B,J,N)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=h(w.anchor||w.el),B=C&&C[v_];return B?h(B):C};let K=!1;const ce=(w,C,B)=>{let J;w==null?C._vnode&&(Ee(C._vnode,null,null,!0),J=C._vnode.component):v(C._vnode||null,w,C,null,null,null,B),C._vnode=w,K||(K=!0,wf(J),_p(),K=!1)},de={p:v,um:Ee,m:xe,r:Ze,mt:oe,mc:x,pc:se,pbc:I,n:F,o:t};return{render:ce,hydrate:void 0,createApp:z_(ce)}}function ul({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function os({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function t0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zp(t,e,n=!1){const i=t.children,s=e.children;if(Qe(i)&&Qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Mi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&zp(o,a)),a.type===ka&&(a.patchFlag===-1&&(a=s[r]=Mi(a)),a.el=o.el),a.type===ji&&!a.el&&(a.el=o.el)}}function n0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Hp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hp(e)}function Ff(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Vp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Vp(e.subTree):null}const kp=t=>t.__isSuspense;function i0(t,e){e&&e.pendingBranch?Qe(t)?e.effects.push(...t):e.effects.push(t):p_(t)}const bt=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),ji=Symbol.for("v-cmt"),Qo=Symbol.for("v-stc"),Ms=[];let Tn=null;function Re(t=!1){Ms.push(Tn=t?null:[])}function Gp(){Ms.pop(),Tn=Ms[Ms.length-1]||null}let jr=1;function ga(t,e=!1){jr+=t,t<0&&Tn&&e&&(Tn.hasOnce=!0)}function Wp(t){return t.dynamicChildren=jr>0?Tn||Js:null,Gp(),jr>0&&Tn&&Tn.push(t),t}function Pe(t,e,n,i,s,r){return Wp(O(t,e,n,i,s,r,!0))}function Xp(t,e,n,i,s){return Wp(sn(t,e,n,i,s,!0))}function _a(t){return t?t.__v_isVNode===!0:!1}function Tr(t,e){return t.type===e.type&&t.key===e.key}const qp=({key:t})=>t??null,ea=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Lt(t)||on(t)||st(t)?{i:Dn,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,i=0,s=null,r=t===bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qp(e),ref:e&&ea(e),scopeId:xp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dn};return a?(va(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Lt(n)?8:16),jr>0&&!o&&Tn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Tn.push(l),l}const sn=s0;function s0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===D_)&&(t=ji),_a(t)){const a=or(t,e,!0);return n&&va(a,n),jr>0&&!r&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(t)]=a:Tn.push(a)),a.patchFlag=-2,a}if(m0(t)&&(t=t.__vccOpts),e){e=r0(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=Rn(a)),vt(l)&&(Au(l)&&!Qe(l)&&(l=Yt({},l)),e.style=Yr(l))}const o=Lt(t)?1:kp(t)?128:x_(t)?64:vt(t)?4:st(t)?2:0;return O(t,e,n,i,s,o,r,!0)}function r0(t){return t?Au(t)||Ip(t)?Yt({},t):t:null}function or(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?o0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&qp(c),ref:e&&e.ref?n&&r?Qe(r)?r.concat(ea(e)):[r,ea(e)]:ea(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&or(t.ssContent),ssFallback:t.ssFallback&&or(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ru(u,l.clone(u)),u}function nn(t=" ",e=0){return sn(ka,null,t,e)}function Lu(t,e){const n=sn(Qo,null,t);return n.staticCount=e,n}function Qt(t="",e=!1){return e?(Re(),Xp(ji,null,t)):sn(ji,null,t)}function ei(t){return t==null||typeof t=="boolean"?sn(ji):Qe(t)?sn(bt,null,t.slice()):_a(t)?Mi(t):sn(ka,null,String(t))}function Mi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:or(t)}function va(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Qe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),va(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ip(e)?e._ctx=Dn:s===3&&Dn&&(Dn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(st(e)){if(i&65){va(t,{default:e});return}e={default:e,_ctx:Dn},n=32}else e=String(e),i&64?(n=16,e=[nn(e)]):n=8;t.children=e,t.shapeFlag|=n}function o0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Rn([e.class,i.class]));else if(s==="style")e.style=Yr([e.style,i.style]);else if(La(s)){const r=e[s],o=i[s];o&&r!==o&&!(Qe(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ia(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Kn(t,e,n,i=null){Gn(t,e,7,[n,i])}const a0=Rp();let l0=0;function c0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||a0,r={uid:l0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Up(i,s),emitsOptions:Cp(i,s),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=V_.bind(null,r),t.ce&&t.ce(r),r}let dn=null;const u0=()=>dn||Dn;let xa,dc;{const t=Oa(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};xa=e("__VUE_INSTANCE_SETTERS__",n=>dn=n),dc=e("__VUE_SSR_SETTERS__",n=>Qr=n)}const co=t=>{const e=dn;return xa(t),t.scope.on(),()=>{t.scope.off(),xa(e)}},Bf=()=>{dn&&dn.scope.off(),xa(null)};function $p(t){return t.vnode.shapeFlag&4}let Qr=!1;function f0(t,e=!1,n=!1){e&&dc(e);const{props:i,children:s}=t.vnode,r=$p(t);$_(t,i,r,e),J_(t,s,n||e);const o=r?h0(t,e):void 0;return e&&dc(!1),o}function h0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,L_);const{setup:i}=n;if(i){Ci();const s=t.setupContext=i.length>1?p0(t):null,r=co(t),o=lo(i,t,0,[t.props,s]),a=Wd(o);if(Pi(),r(),(a||t.sp)&&!Wr(t)&&Ep(t),a){if(o.then(Bf,Bf),e)return o.then(l=>{zf(t,l)}).catch(l=>{Ba(l,t,0)});t.asyncDep=o}else zf(t,o)}else Yp(t)}function zf(t,e,n){st(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:vt(e)&&(t.setupState=pp(e)),Yp(t)}function Yp(t,e,n){const i=t.type;t.render||(t.render=i.render||oi);{const s=co(t);Ci();try{I_(t)}finally{Pi(),s()}}}const d0={get(t,e){return tn(t,"get",""),t[e]}};function p0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,d0),slots:t.slots,emit:t.emit,expose:e}}function Ga(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pp(s_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xr)return Xr[n](t)},has(e,n){return n in e||n in Xr}})):t.proxy}function m0(t){return st(t)&&"__vccOpts"in t}const dt=(t,e)=>c_(t,e,Qr);function Kp(t,e,n){try{ga(-1);const i=arguments.length;return i===2?vt(e)&&!Qe(e)?_a(e)?sn(t,null,[e]):sn(t,e):sn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&_a(n)&&(n=[n]),sn(t,e,n))}finally{ga(1)}}const g0="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pc;const Hf=typeof window<"u"&&window.trustedTypes;if(Hf)try{pc=Hf.createPolicy("vue",{createHTML:t=>t})}catch{}const Zp=pc?t=>pc.createHTML(t):t=>t,_0="http://www.w3.org/2000/svg",v0="http://www.w3.org/1998/Math/MathML",yi=typeof document<"u"?document:null,Vf=yi&&yi.createElement("template"),x0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?yi.createElementNS(_0,t):e==="mathml"?yi.createElementNS(v0,t):n?yi.createElement(t,{is:n}):yi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>yi.createTextNode(t),createComment:t=>yi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Vf.innerHTML=Zp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Vf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},S0=Symbol("_vtc");function y0(t,e,n){const i=t[S0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const kf=Symbol("_vod"),M0=Symbol("_vsh"),E0=Symbol(""),b0=/(?:^|;)\s*display\s*:/;function T0(t,e,n){const i=t.style,s=Lt(n);let r=!1;if(n&&!s){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Fr(i,a,"")}else for(const o in e)n[o]==null&&Fr(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?w0(t,o,!Lt(e)&&e?e[o]:void 0,a)||Fr(i,o,a):Fr(i,o,"")}}else if(s){if(e!==n){const o=i[E0];o&&(n+=";"+o),i.cssText=n,r=b0.test(n)}}else e&&t.removeAttribute("style");kf in t&&(t[kf]=r?i.display:"",t[M0]&&(i.display="none"))}const Gf=/\s*!important$/;function Fr(t,e,n){if(Qe(n))n.forEach(i=>Fr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=A0(t,e);Gf.test(n)?t.setProperty(ns(i),n.replace(Gf,""),"important"):t[i]=n}}const Wf=["Webkit","Moz","ms"],fl={};function A0(t,e){const n=fl[e];if(n)return n;let i=zn(e);if(i!=="filter"&&i in t)return fl[e]=i;i=$d(i);for(let s=0;s<Wf.length;s++){const r=Wf[s]+i;if(r in t)return fl[e]=r}return e}function w0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Lt(i)&&n===i}const Xf="http://www.w3.org/1999/xlink";function qf(t,e,n,i,s,r=Fg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xf,e.slice(6,e.length)):t.setAttributeNS(Xf,e,n):n==null||r&&!Kd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":fi(n)?String(n):n)}function $f(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Kd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Yi(t,e,n,i){t.addEventListener(e,n,i)}function R0(t,e,n,i){t.removeEventListener(e,n,i)}const Yf=Symbol("_vei");function C0(t,e,n,i,s=null){const r=t[Yf]||(t[Yf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=L0(e);if(i){const c=r[e]=U0(i,s);Yi(t,a,c,l)}else o&&(R0(t,a,o,l),r[e]=void 0)}}const P0=/(Once|Passive|Capture)$/,D0=/^on:?(?:Once|Passive|Capture)$/;function L0(t){let e,n;for(;(n=t.match(P0))&&!D0.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ns(t.slice(2)),e]}let hl=0;const I0=Promise.resolve(),N0=()=>hl||(I0.then(()=>hl=0),hl=Date.now());function U0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(Qe(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Gn(c,e,5,a)}}else Gn(s,e,5,[i])};return n.value=t,n.attached=N0(),n}const Kf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,O0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?y0(t,i,o):e==="style"?T0(t,n,i):La(e)?Ia(e)||C0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):F0(t,e,i,o))?($f(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qf(t,e,i,o,r,e!=="value")):t._isVueCE&&(B0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Lt(i)))?$f(t,zn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),qf(t,e,i,o))};function F0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kf(e)&&st(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kf(e)&&Lt(n)?!1:e in t}function B0(t,e){const n=t._def.props;if(!n)return!1;const i=zn(e);return Array.isArray(n)?n.some(s=>zn(s)===i):Object.keys(n).some(s=>zn(s)===i)}const ar=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Qe(e)?n=>Jo(e,n):e};function z0(t){t.target.composing=!0}function Zf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ai=Symbol("_assign");function Jf(t,e,n){return e&&(t=t.trim()),n&&(t=Ua(t)),t}const ps={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ai]=ar(s);const r=i||s.props&&s.props.type==="number";Yi(t,e?"change":"input",o=>{o.target.composing||t[Ai](Jf(t.value,n,r))}),(n||r)&&Yi(t,"change",()=>{t.value=Jf(t.value,n,r)}),e||(Yi(t,"compositionstart",z0),Yi(t,"compositionend",Zf),Yi(t,"change",Zf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ai]=ar(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Ua(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},H0={deep:!0,created(t,e,n){t[Ai]=ar(n),Yi(t,"change",()=>{const i=t._modelValue,s=eo(t),r=t.checked,o=t[Ai];if(Qe(i)){const a=xu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(_r(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Jp(t,r))})},mounted:jf,beforeUpdate(t,e,n){t[Ai]=ar(n),jf(t,e,n)}};function jf(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Qe(e))s=xu(e,i.props.value)>-1;else if(_r(e))s=e.has(i.props.value);else{if(e===n)return;s=vr(e,Jp(t,!0))}t.checked!==s&&(t.checked=s)}const dl={deep:!0,created(t,{value:e,modifiers:{number:n}},i){t._modelValue=e,Yi(t,"change",()=>{const s=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?Ua(eo(r)):eo(r));t[Ai](t.multiple?_r(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,za(()=>{t._assigning=!1})}),t[Ai]=ar(i)},mounted(t,{value:e}){Qf(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Ai]=ar(n)},updated(t,{value:e}){t._assigning||Qf(t,e)}};function Qf(t,e){const n=t.multiple,i=Qe(e);if(!(n&&!i&&!_r(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=eo(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=xu(e,a)>-1}else o.selected=e.has(a);else if(vr(eo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function eo(t){return"_value"in t?t._value:t.value}function Jp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const V0=["ctrl","shift","alt","meta"],k0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>V0.some(n=>t[`${n}Key`]&&!e.includes(n))},G0=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=k0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},W0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},eh=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=ns(s.key);if(e.some(o=>o===r||W0[o]===r))return t(s)})},X0=Yt({patchProp:O0},x0);let th;function q0(){return th||(th=Q_(X0))}const $0=(...t)=>{const e=q0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=K0(i);if(!s)return;const r=e._component;!st(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Y0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Y0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function K0(t){return Lt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ks=typeof document<"u";function jp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Z0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&jp(t.default)}const pt=Object.assign;function pl(t,e){const n={};for(const i in e){const s=e[i];n[i]=Wn(s)?s.map(t):t(s)}return n}const qr=()=>{},Wn=Array.isArray;function nh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Qp=/#/g,J0=/&/g,j0=/\//g,Q0=/=/g,ev=/\?/g,em=/\+/g,tv=/%5B/g,nv=/%5D/g,tm=/%5E/g,iv=/%60/g,nm=/%7B/g,sv=/%7C/g,im=/%7D/g,rv=/%20/g;function Iu(t){return t==null?"":encodeURI(""+t).replace(sv,"|").replace(tv,"[").replace(nv,"]")}function ov(t){return Iu(t).replace(nm,"{").replace(im,"}").replace(tm,"^")}function mc(t){return Iu(t).replace(em,"%2B").replace(rv,"+").replace(Qp,"%23").replace(J0,"%26").replace(iv,"`").replace(nm,"{").replace(im,"}").replace(tm,"^")}function av(t){return mc(t).replace(Q0,"%3D")}function lv(t){return Iu(t).replace(Qp,"%23").replace(ev,"%3F")}function cv(t){return lv(t).replace(j0,"%2F")}function to(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const uv=/\/$/,fv=t=>t.replace(uv,"");function ml(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=mv(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:to(o)}}function hv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ih(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&lr(e.matched[i],n.matched[s])&&sm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function lr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!pv(t[n],e[n]))return!1;return!0}function pv(t,e){return Wn(t)?sh(t,e):Wn(e)?sh(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function sh(t,e){return Wn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function mv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Bi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let gc=function(t){return t.pop="pop",t.push="push",t}({}),gl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function gv(t){if(!t)if(Ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fv(t)}const _v=/^[^#]+#/;function vv(t,e){return t.replace(_v,"#")+e}function xv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Wa=()=>({left:window.scrollX,top:window.scrollY});function Sv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=xv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rh(t,e){return(history.state?history.state.position-e:-1)+t}const _c=new Map;function yv(t,e){_c.set(t,e)}function Mv(t){const e=_c.get(t);return _c.delete(t),e}function Ev(t){return typeof t=="string"||t&&typeof t=="object"}function rm(t){return typeof t=="string"||typeof t=="symbol"}let Dt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const om=Symbol("");Dt.MATCHER_NOT_FOUND+"",Dt.NAVIGATION_GUARD_REDIRECT+"",Dt.NAVIGATION_ABORTED+"",Dt.NAVIGATION_CANCELLED+"",Dt.NAVIGATION_DUPLICATED+"";function cr(t,e){return pt(new Error,{type:t,[om]:!0},e)}function mi(t,e){return t instanceof Error&&om in t&&(e==null||!!(t.type&e))}const bv=["params","query","hash"];function Tv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of bv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Av(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(em," "),r=s.indexOf("="),o=to(r<0?s:s.slice(0,r)),a=r<0?null:to(s.slice(r+1));if(o in e){let l=e[o];Wn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function oh(t){let e="";for(let n in t){const i=t[n];if(n=av(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wn(i)?i.map(s=>s&&mc(s)):[i&&mc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function wv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Wn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Rv=Symbol(""),ah=Symbol(""),Xa=Symbol(""),Nu=Symbol(""),vc=Symbol("");function Ar(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(cr(Dt.NAVIGATION_ABORTED,{from:n,to:e})):h instanceof Error?l(h):Ev(h)?l(cr(Dt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function _l(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(jp(l)){const c=(l.__vccOpts||l)[e];c&&r.push(qi(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Z0(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&qi(h,n,i,o,a,s)()}))}}return r}function Cv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>lr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>lr(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Pv=()=>location.protocol+"//"+location.host;function am(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),ih(a,"")}return ih(n,t)+i+s}function Dv(t,e,n,i){let s=[],r=[],o=null;const a=({state:h})=>{const d=am(t,location),m=n.value,v=e.value;let g=0;if(h){if(n.value=d,e.value=h,o&&o===m){o=null;return}g=v?h.position-v.position:0}else i(d);s.forEach(p=>{p(n.value,m,{delta:g,type:gc.pop,direction:g?g>0?gl.forward:gl.back:gl.unknown})})};function l(){o=n.value}function c(h){s.push(h);const d=()=>{const m=s.indexOf(h);m>-1&&s.splice(m,1)};return r.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(pt({},h.state,{scroll:Wa()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function lh(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Wa():null}}function Lv(t){const{history:e,location:n}=window,i={value:am(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Pv()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(l,c){r(l,pt({},e.state,lh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=pt({},s.value,e.state,{forward:l,scroll:Wa()});r(u.current,u,!0),r(l,pt({},lh(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Iv(t){t=gv(t);const e=Lv(t),n=Dv(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=pt({location:"",base:t,go:i,createHref:vv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let ms=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Bt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Bt||{});const Nv={type:ms.Static,value:""},Uv=/[a-zA-Z0-9_]/;function Ov(t){if(!t)return[[]];if(t==="/")return[[Nv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=Bt.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===Bt.Static?r.push({type:ms.Static,value:c}):n===Bt.Param||n===Bt.ParamRegExp||n===Bt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ms.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Bt.ParamRegExp){i=n,n=Bt.EscapeNext;continue}switch(n){case Bt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=Bt.Param):h();break;case Bt.EscapeNext:h(),n=i;break;case Bt.Param:l==="("?n=Bt.ParamRegExp:Uv.test(l)?h():(f(),n=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Bt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Bt.ParamRegExpEnd:u+=l;break;case Bt.ParamRegExpEnd:f(),n=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Bt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const ch="[^/]+?",Fv={sensitive:!1,strict:!1,start:!0,end:!0};var un=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(un||{});const Bv=/[.+*?^${}()[\]/\\]/g;function zv(t,e){const n=pt({},Fv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[un.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=un.Segment+(n.sensitive?un.BonusCaseSensitive:0);if(h.type===ms.Static)f||(s+="/"),s+=h.value.replace(Bv,"\\$&"),d+=un.Static;else if(h.type===ms.Param){const{value:m,repeatable:v,optional:g,regexp:p}=h;r.push({name:m,repeatable:v,optional:g});const M=p||ch;if(M!==ch){d+=un.BonusCustomRegExp;try{`${M}`}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${M}): `+S.message)}}let E=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(E=g&&c.length<2?`(?:/${E})`:"/"+E),g&&(E+="?"),s+=E,d+=un.Dynamic,g&&(d+=un.BonusOptional),v&&(d+=un.BonusRepeatable),M===".*"&&(d+=un.BonusWildcard)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=un.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",m=r[h-1];f[m.name]=d&&m.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===ms.Static)u+=d.value;else if(d.type===ms.Param){const{value:m,repeatable:v,optional:g}=d,p=m in c?c[m]:"";if(Wn(p)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const M=Wn(p)?p.join("/"):p;if(!M)if(g)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Hv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===un.Static+un.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===un.Static+un.Segment?1:-1:0}function lm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Hv(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(uh(i))return 1;if(uh(s))return-1}return s.length-i.length}function uh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vv={strict:!1,end:!0,sensitive:!1};function kv(t,e,n){const i=zv(Ov(t.path),n),s=pt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Gv(t,e){const n=[],i=new Map;e=nh(Vv,e);function s(f){return i.get(f)}function r(f,h,d){const m=!d,v=hh(f);v.aliasOf=d&&d.record;const g=nh(e,f),p=[v];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const A of S)p.push(hh(pt({},v,{components:d?d.record.components:v.components,path:A,aliasOf:d?d.record:v})))}let M,E;for(const S of p){const{path:A}=S;if(h&&A[0]!=="/"){const T=h.record.path,D=T[T.length-1]==="/"?"":"/";S.path=h.record.path+(A&&D+A)}if(M=kv(S,h,g),d?d.alias.push(M):(E=E||M,E!==M&&E.alias.push(M),m&&f.name&&!dh(M)&&o(f.name)),cm(M)&&l(M),v.children){const T=v.children;for(let D=0;D<T.length;D++)r(T[D],M,d&&d.children[D])}d=d||M}return E?()=>{o(E)}:qr}function o(f){if(rm(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=qv(f,n);n.splice(h,0,f),f.record.name&&!dh(f)&&i.set(f.record.name,f)}function c(f,h){let d,m={},v,g;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw cr(Dt.MATCHER_NOT_FOUND,{location:f});g=d.record.name,m=pt(fh(h.params,d.keys.filter(E=>!E.optional).concat(d.parent?d.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&fh(f.params,d.keys.map(E=>E.name))),v=d.stringify(m)}else if(f.path!=null)v=f.path,d=n.find(E=>E.re.test(v)),d&&(m=d.parse(v),g=d.record.name);else{if(d=h.name?i.get(h.name):n.find(E=>E.re.test(h.path)),!d)throw cr(Dt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});g=d.record.name,m=pt({},h.params,f.params),v=d.stringify(m)}const p=[];let M=d;for(;M;)p.unshift(M.record),M=M.parent;return{name:g,path:v,params:m,matched:p,meta:Xv(p)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function fh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function hh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Wv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Wv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function dh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xv(t){return t.reduce((e,n)=>pt(e,n.meta),{})}function qv(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;lm(t,e[r])<0?i=r:n=r+1}const s=$v(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function $v(t){let e=t;for(;e=e.parent;)if(cm(e)&&lm(t,e)===0)return e}function cm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ph(t){const e=Vn(Xa),n=Vn(Nu),i=dt(()=>{const l=fn(t.to);return e.resolve(l)}),s=dt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(lr.bind(null,u));if(h>-1)return h;const d=mh(l[c-2]);return c>1&&mh(u)===d&&f[f.length-1].path!==d?f.findIndex(lr.bind(null,l[c-2])):h}),r=dt(()=>s.value>-1&&Jv(n.params,i.value.params)),o=dt(()=>s.value>-1&&s.value===n.matched.length-1&&sm(n.params,i.value.params));function a(l={}){if(Zv(l)){const c=e[fn(t.replace)?"replace":"push"](fn(t.to)).catch(qr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:dt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Yv(t){return t.length===1?t[0]:t}const Kv=Mp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ph,setup(t,{slots:e}){const n=xr(ph(t)),{options:i}=Vn(Xa),s=dt(()=>({[gh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[gh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Yv(e.default(n));return t.custom?r:Kp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),xc=Kv;function Zv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jv(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Wn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function mh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gh=(t,e,n)=>t??e??n,jv=Mp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Vn(vc),s=dt(()=>t.route||i.value),r=Vn(ah,0),o=dt(()=>{let c=fn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=dt(()=>s.value.matched[o.value]);jo(ah,dt(()=>o.value+1)),jo(Rv,a),jo(vc,s);const l=et();return Ji(()=>[l.value,a.value,t.name],([c,u,f],[h,d,m])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!lr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return _h(n.default,{Component:h,route:c});const d=f.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=Kp(h,pt({},m,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return _h(n.default,{Component:g,route:c})||g}}});function _h(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const um=jv;function Qv(t){const e=Gv(t.routes,t),n=t.parseQuery||Av,i=t.stringifyQuery||oh,s=t.history,r=Ar(),o=Ar(),a=Ar(),l=r_(Bi);let c=Bi;Ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pl.bind(null,F=>""+F),f=pl.bind(null,cv),h=pl.bind(null,to);function d(F,K){let ce,de;return rm(F)?(ce=e.getRecordMatcher(F),de=K):de=F,e.addRoute(de,ce)}function m(F){const K=e.getRecordMatcher(F);K&&e.removeRoute(K)}function v(){return e.getRoutes().map(F=>F.record)}function g(F){return!!e.getRecordMatcher(F)}function p(F,K){if(K=pt({},K||l.value),typeof F=="string"){const B=ml(n,F,K.path),J=e.resolve({path:B.path},K),N=s.createHref(B.fullPath);return pt(B,J,{params:h(J.params),hash:to(B.hash),redirectedFrom:void 0,href:N})}let ce;if(F.path!=null)ce=pt({},F,{path:ml(n,F.path,K.path).path});else{const B=pt({},F.params);for(const J in B)B[J]==null&&delete B[J];ce=pt({},F,{params:f(B)}),K.params=f(K.params)}const de=e.resolve(ce,K),Te=F.hash||"";de.params=u(h(de.params));const w=hv(i,pt({},F,{hash:ov(Te),path:de.path})),C=s.createHref(w);return pt({fullPath:w,hash:Te,query:i===oh?wv(F.query):F.query||{}},de,{redirectedFrom:void 0,href:C})}function M(F){return typeof F=="string"?ml(n,F,l.value.path):pt({},F)}function E(F,K){if(c!==F)return cr(Dt.NAVIGATION_CANCELLED,{from:K,to:F})}function S(F){return D(F)}function A(F){return S(pt(M(F),{replace:!0}))}function T(F,K){const ce=F.matched[F.matched.length-1];if(ce&&ce.redirect){const{redirect:de}=ce;let Te=typeof de=="function"?de(F,K):de;return typeof Te=="string"&&(Te=Te.includes("?")||Te.includes("#")?Te=M(Te):{path:Te},Te.params={}),pt({query:F.query,hash:F.hash,params:Te.path!=null?{}:F.params},Te)}}function D(F,K){const ce=c=p(F),de=l.value,Te=F.state,w=F.force,C=F.replace===!0,B=T(ce,de);if(B)return D(pt(M(B),{state:typeof B=="object"?pt({},Te,B.state):Te,force:w,replace:C}),K||ce);const J=ce;J.redirectedFrom=K;let N;return!w&&dv(i,de,ce)&&(N=cr(Dt.NAVIGATION_DUPLICATED,{to:J,from:de}),xe(de,de,!0,!1)),(N?Promise.resolve(N):I(J,de)).catch(j=>mi(j)?mi(j,Dt.NAVIGATION_GUARD_REDIRECT)?j:ye(j):se(j,J,de)).then(j=>{if(j){if(mi(j,Dt.NAVIGATION_GUARD_REDIRECT))return D(pt({replace:C},M(j.to),{state:typeof j.to=="object"?pt({},Te,j.to.state):Te,force:w}),K||J)}else j=H(J,de,!0,C,Te);return L(J,de,j),j})}function x(F,K){const ce=E(F,K);return ce?Promise.reject(ce):Promise.resolve()}function R(F){const K=lt.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(F):F()}function I(F,K){let ce;const[de,Te,w]=Cv(F,K);ce=_l(de.reverse(),"beforeRouteLeave",F,K);for(const B of de)B.leaveGuards.forEach(J=>{ce.push(qi(J,F,K))});const C=x.bind(null,F,K);return ce.push(C),Y(ce).then(()=>{ce=[];for(const B of r.list())ce.push(qi(B,F,K));return ce.push(C),Y(ce)}).then(()=>{ce=_l(Te,"beforeRouteUpdate",F,K);for(const B of Te)B.updateGuards.forEach(J=>{ce.push(qi(J,F,K))});return ce.push(C),Y(ce)}).then(()=>{ce=[];for(const B of w)if(B.beforeEnter)if(Wn(B.beforeEnter))for(const J of B.beforeEnter)ce.push(qi(J,F,K));else ce.push(qi(B.beforeEnter,F,K));return ce.push(C),Y(ce)}).then(()=>(F.matched.forEach(B=>B.enterCallbacks={}),ce=_l(w,"beforeRouteEnter",F,K,R),ce.push(C),Y(ce))).then(()=>{ce=[];for(const B of o.list())ce.push(qi(B,F,K));return ce.push(C),Y(ce)}).catch(B=>mi(B,Dt.NAVIGATION_CANCELLED)?B:Promise.reject(B))}function L(F,K,ce){a.list().forEach(de=>R(()=>de(F,K,ce)))}function H(F,K,ce,de,Te){const w=E(F,K);if(w)return w;const C=K===Bi,B=Ks?history.state:{};ce&&(de||C?s.replace(F.fullPath,pt({scroll:C&&B&&B.scroll},Te)):s.push(F.fullPath,Te)),l.value=F,xe(F,K,ce,C),ye()}let ie;function oe(){ie||(ie=s.listen((F,K,ce)=>{if(!je.listening)return;const de=p(F),Te=T(de,je.currentRoute.value);if(Te){D(pt(Te,{replace:!0,force:!0}),de).catch(qr);return}c=de;const w=l.value;Ks&&yv(rh(w.fullPath,ce.delta),Wa()),I(de,w).catch(C=>mi(C,Dt.NAVIGATION_ABORTED|Dt.NAVIGATION_CANCELLED)?C:mi(C,Dt.NAVIGATION_GUARD_REDIRECT)?(D(pt(M(C.to),{force:!0}),de).then(B=>{mi(B,Dt.NAVIGATION_ABORTED|Dt.NAVIGATION_DUPLICATED)&&!ce.delta&&ce.type===gc.pop&&s.go(-1,!1)}).catch(qr),Promise.reject()):(ce.delta&&s.go(-ce.delta,!1),se(C,de,w))).then(C=>{C=C||H(de,w,!1),C&&(ce.delta&&!mi(C,Dt.NAVIGATION_CANCELLED)?s.go(-ce.delta,!1):ce.type===gc.pop&&mi(C,Dt.NAVIGATION_ABORTED|Dt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),L(de,w,C)}).catch(qr)}))}let X=Ar(),ne=Ar(),G;function se(F,K,ce){ye(F);const de=ne.list();return de.length?de.forEach(Te=>Te(F,K,ce)):console.error(F),Promise.reject(F)}function ge(){return G&&l.value!==Bi?Promise.resolve():new Promise((F,K)=>{X.add([F,K])})}function ye(F){return G||(G=!F,oe(),X.list().forEach(([K,ce])=>F?ce(F):K()),X.reset()),F}function xe(F,K,ce,de){const{scrollBehavior:Te}=t;if(!Ks||!Te)return Promise.resolve();const w=!ce&&Mv(rh(F.fullPath,0))||(de||!ce)&&history.state&&history.state.scroll||null;return za().then(()=>Te(F,K,w)).then(C=>C&&Sv(C)).catch(C=>se(C,F,K))}const Ee=F=>s.go(F);let Ze;const lt=new Set,je={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:v,resolve:p,options:t,push:S,replace:A,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:ge,install(F){F.component("RouterLink",xc),F.component("RouterView",um),F.config.globalProperties.$router=je,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>fn(l)}),Ks&&!Ze&&l.value===Bi&&(Ze=!0,S(s.location).catch(de=>{}));const K={};for(const de in Bi)Object.defineProperty(K,de,{get:()=>l.value[de],enumerable:!0});F.provide(Xa,je),F.provide(Nu,hp(K)),F.provide(vc,l);const ce=F.unmount;lt.add(F),F.unmount=function(){lt.delete(F),lt.size<1&&(c=Bi,ie&&ie(),ie=null,l.value=Bi,Ze=!1,G=!1),ce()}}};function Y(F){return F.reduce((K,ce)=>K.then(()=>R(ce)),Promise.resolve())}return je}function Uu(){return Vn(Xa)}function fm(t){return Vn(Nu)}const Ou="vision-portal-session",Eo=(()=>{try{return JSON.parse(localStorage.getItem(Ou)||"null")}catch{return null}})(),ur=et(Eo&&Eo.token&&Eo.user?Eo:null),Sa=dt(()=>{var t;return!!((t=ur.value)!=null&&t.token)}),$r=dt(()=>{var t;return((t=ur.value)==null?void 0:t.user)||null}),hm=t=>{ur.value=t,localStorage.setItem(Ou,JSON.stringify(t))},ex=t=>{ur.value&&hm({...ur.value,user:t})},tx=()=>{ur.value=null,localStorage.removeItem(Ou)},nx={class:"sidebar"},ix={class:"brand"},sx={key:0,class:"brand-account-actions"},rx={class:"account-hover-card"},ox={key:1,class:"brand-account-actions"},ax={class:"nav-group-title"},lx={class:"icon"},cx={class:"main-panel"},ux={class:"topbar"},fx={class:"topbar-actions"},hx={__name:"App",setup(t){const e=fm(),n=Uu(),i=et(localStorage.getItem("vision-portal-theme")==="light"),s=[{title:"平台總覽",requiresAuth:!0,items:[{label:"首頁",to:"/",icon:"◉"}]},{title:"系統介紹",items:[{label:"操作指引",to:"/guide",icon:"◌"},{label:"定位技術",to:"/technology",icon:"◌"}]},{title:"歷史資料",requiresAuth:!0,items:[{label:"物件資料",to:"/history/object",icon:"◌"},{label:"施工任務",to:"/history/tasks",icon:"◌"},{label:"操作紀錄",to:"/history/operations",icon:"◌"}]},{title:"媒體資料",requiresAuth:!0,items:[{label:"影像串流",to:"/media/stream",icon:"◌"},{label:"語音提示",to:"/media/voice",icon:"◌"}]}],r=dt(()=>s.filter(c=>!c.requiresAuth||Sa.value)),o=dt(()=>{const c=s.flatMap(u=>u.items).find(u=>u.to===e.path);return(c==null?void 0:c.label)||"首頁"}),a=(c="login")=>n.push({path:"/account/login",query:{mode:c}}),l=()=>{i.value=!i.value,localStorage.setItem("vision-portal-theme",i.value?"light":"dark")};return(c,u)=>{var f,h;return Re(),Pe("div",{class:Rn(["app-shell",{"theme-light":i.value}])},[O("aside",nx,[O("div",ix,[u[2]||(u[2]=O("div",{class:"brand-mark"},"V",-1)),u[3]||(u[3]=O("div",{class:"brand-content"},[O("p",{class:"brand-eyebrow"},"終端定位平台"),O("div",{class:"brand-title-row"},[O("h2",null,"Vision Portal")])],-1)),fn(Sa)?(Re(),Pe("div",sx,[sn(fn(xc),{class:"user-avatar",to:"/account/profile"},{default:lc(()=>{var d,m;return[nn(we((m=(d=fn($r))==null?void 0:d.name)==null?void 0:m.charAt(0).toUpperCase()),1)]}),_:1}),O("div",rx,[O("strong",null,we((f=fn($r))==null?void 0:f.name),1),O("span",null,we((h=fn($r))==null?void 0:h.email),1),u[1]||(u[1]=O("small",null,"點擊頭貼查看帳戶資料",-1))])])):(Re(),Pe("div",ox,[O("button",{type:"button",class:"brand-login",onClick:u[0]||(u[0]=d=>a("login"))},"登入")]))]),(Re(!0),Pe(bt,null,ai(r.value,d=>(Re(),Pe("nav",{class:"nav-section",key:d.title},[O("p",ax,we(d.title),1),(Re(!0),Pe(bt,null,ai(d.items,m=>(Re(),Xp(fn(xc),{key:m.to,class:Rn(["nav-link",{active:fn(e).path===m.to}]),to:m.to,"exact-active-class":"active"},{default:lc(()=>[O("span",lx,we(fn(e).path===m.to?"●":m.icon),1),O("span",null,we(m.label),1)]),_:2},1032,["class","to"]))),128))]))),128))]),O("main",cx,[O("header",ux,[O("h1",null,we(o.value),1),O("div",fx,[O("button",{type:"button",class:"theme-toggle",onClick:l},we(i.value?"◐ 夜間":"☀ 白天"),1),u[4]||(u[4]=O("div",{class:"topbar-badge"},"已連線",-1))])]),sn(fn(um))])],2)}}};function dm(t,e){return function(){return t.apply(e,arguments)}}const{toString:dx}=Object.prototype,{getPrototypeOf:fr}=Object,{iterator:uo,toStringTag:pm}=Symbol,ya=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),no=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),ya(n,e))return!0;n=fr(n)}return!1},px=(t,e)=>t!=null&&no(t,e)?t[e]:void 0,Fu=(t=>e=>{const n=dx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Xn=t=>(t=t.toLowerCase(),e=>Fu(e)===t),qa=t=>e=>typeof e===t,{isArray:bs}=Array,hr=qa("undefined");function Sr(t){return t!==null&&!hr(t)&&t.constructor!==null&&!hr(t.constructor)&&xn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const mm=Xn("ArrayBuffer");function mx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&mm(t.buffer),e}const gx=qa("string"),xn=qa("function"),gm=qa("number"),yr=t=>t!==null&&typeof t=="object",_x=t=>t===!0||t===!1,ta=t=>{if(!yr(t))return!1;const e=fr(t);return(e===null||e===Object.prototype||fr(e)===null)&&!no(t,pm)&&!no(t,uo)},vx=t=>{if(!yr(t)||Sr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},xx=Xn("Date"),Sx=Xn("File"),yx=t=>!!(t&&typeof t.uri<"u"),Mx=t=>t&&typeof t.getParts<"u",Ex=Xn("Blob"),bx=Xn("FileList"),Tx=t=>yr(t)&&xn(t.pipe);function Ax(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const vh=Ax(),xh=typeof vh.FormData<"u"?vh.FormData:void 0,wx=t=>{if(!t)return!1;if(xh&&t instanceof xh)return!0;const e=fr(t);if(!e||e===Object.prototype||!xn(t.append))return!1;const n=Fu(t);return n==="formdata"||n==="object"&&xn(t.toString)&&t.toString()==="[object FormData]"},Rx=Xn("URLSearchParams"),[Cx,Px,Dx,Lx]=["ReadableStream","Request","Response","Headers"].map(Xn),Ix=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),bs(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Sr(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function _m(t,e){if(Sr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const gs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,vm=t=>!hr(t)&&t!==gs;function Sc(...t){const{caseless:e,skipUndefined:n}=vm(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&_m(i,o)||o,l=ya(i,a)?i[a]:void 0;ta(l)&&ta(r)?i[a]=Sc(l,r):ta(r)?i[a]=Sc({},r):bs(r)?i[a]=r.slice():(!n||!hr(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++){const a=t[r];if(!a||Sr(a)||(fo(a,s),typeof a!="object"||bs(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];Xx.call(a,u)&&s(a[u],u)}}return i}const Nx=(t,e,n,{allOwnKeys:i}={})=>(fo(e,(s,r)=>{n&&xn(s)?Object.defineProperty(t,r,{__proto__:null,value:dm(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),Ux=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Ox=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Fx=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&fr(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Bx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},zx=t=>{if(!t)return null;if(bs(t))return t;let e=t.length;if(!gm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Hx=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&fr(Uint8Array)),Vx=(t,e)=>{const i=(t&&t[uo]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},kx=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Gx=Xn("HTMLFormElement"),Wx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:Xx}=Object.prototype,qx=Xn("RegExp"),xm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};fo(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},$x=t=>{xm(t,(e,n)=>{if(xn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(xn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Yx=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return bs(t)?i(t):i(String(t).split(e)),n},Kx=()=>{},Zx=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Jx(t){return!!(t&&xn(t.append)&&t[pm]==="FormData"&&t[uo])}const jx=t=>{const e=new WeakSet,n=i=>{if(yr(i)){if(e.has(i))return;if(Sr(i))return i;if(!("toJSON"in i)){e.add(i);const s=bs(i)?[]:{};return fo(i,(r,o)=>{const a=n(r);!hr(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},Qx=Xn("AsyncFunction"),eS=t=>t&&(yr(t)||xn(t))&&xn(t.then)&&xn(t.catch),Sm=((t,e)=>t?setImmediate:e?((n,i)=>(gs.addEventListener("message",({source:s,data:r})=>{s===gs&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),gs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",xn(gs.postMessage)),tS=typeof queueMicrotask<"u"?queueMicrotask.bind(gs):typeof process<"u"&&process.nextTick||Sm,ym=t=>t!=null&&xn(t[uo]),nS=t=>t!=null&&no(t,uo)&&ym(t),V={isArray:bs,isArrayBuffer:mm,isBuffer:Sr,isFormData:wx,isArrayBufferView:mx,isString:gx,isNumber:gm,isBoolean:_x,isObject:yr,isPlainObject:ta,isEmptyObject:vx,isReadableStream:Cx,isRequest:Px,isResponse:Dx,isHeaders:Lx,isUndefined:hr,isDate:xx,isFile:Sx,isReactNativeBlob:yx,isReactNative:Mx,isBlob:Ex,isRegExp:qx,isFunction:xn,isStream:Tx,isURLSearchParams:Rx,isTypedArray:Hx,isFileList:bx,forEach:fo,merge:Sc,extend:Nx,trim:Ix,stripBOM:Ux,inherits:Ox,toFlatObject:Fx,kindOf:Fu,kindOfTest:Xn,endsWith:Bx,toArray:zx,forEachEntry:Vx,matchAll:kx,isHTMLForm:Gx,hasOwnProperty:ya,hasOwnProp:ya,hasOwnInPrototypeChain:no,getSafeProp:px,reduceDescriptors:xm,freezeMethods:$x,toObjectSet:Yx,toCamelCase:Wx,noop:Kx,toFiniteNumber:Zx,findKey:_m,global:gs,isContextDefined:vm,isSpecCompliantForm:Jx,toJSONObject:jx,isAsyncFn:Qx,isThenable:eS,setImmediate:Sm,asap:tS,isIterable:ym,isSafeIterable:nS},iS=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sS=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&iS[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function rS(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const oS=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),aS=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Bu(t,e){return V.isArray(t)?t.map(n=>Bu(n,e)):rS(String(t).replace(e,""))}const lS=t=>Bu(t,oS),cS=t=>Bu(t,aS);function Mm(t){const e=Object.create(null);return V.forEach(t.toJSON(),(n,i)=>{e[i]=cS(n)}),e}const Sh=Symbol("internals");function wr(t){return t&&String(t).trim().toLowerCase()}function na(t){return t===!1||t==null?t:V.isArray(t)?t.map(na):lS(String(t))}function uS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const fS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function vl(t,e,n,i,s){if(V.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!V.isString(e)){if(V.isString(i))return e.indexOf(i)!==-1;if(V.isRegExp(i))return i.test(e)}}function hS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function dS(t,e){const n=V.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let an=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=wr(l);if(!u)return;const f=V.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=na(a))}const o=(a,l)=>V.forEach(a,(c,u)=>r(c,u,l));if(V.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(V.isString(e)&&(e=e.trim())&&!fS(e))o(sS(e),n);else if(V.isObject(e)&&V.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!V.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],V.hasOwnProp(a,c)?(l=a[c],a[c]=V.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=wr(e),e){const i=V.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return uS(s);if(V.isFunction(n))return n.call(this,s,i);if(V.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=wr(e),e){const i=V.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||vl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=wr(o),o){const a=V.findKey(i,o);a&&(!n||vl(i,i[a],a,n))&&(delete i[a],s=!0)}}return V.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||vl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return V.forEach(this,(s,r)=>{const o=V.findKey(i,r);if(o){n[o]=na(s),delete n[r];return}const a=e?hS(r):String(r).trim();a!==r&&delete n[r],n[a]=na(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return V.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&V.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Sh]=this[Sh]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=wr(o);i[a]||(dS(s,o),i[a]=!0)}return V.isArray(e)?e.forEach(r):r(e),this}};an.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);V.reduceDescriptors(an.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});V.freezeMethods(an);const pS="[REDACTED ****]";function mS(t){if(V.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(V.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function gS(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||V.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof an&&(r=r.toJSON()),i.push(r);let o;if(V.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);V.isUndefined(c)||(o[l]=c)});else{if(!V.isPlainObject(r)&&mS(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?pS:s(l);V.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let Fe=class Em extends Error{static from(e,n,i,s,r,o){const a=new Em(e.message,n||e.code,i,s,r);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&V.hasOwnProp(e,"redact")?e.redact:void 0,i=V.isArray(n)&&n.length>0?gS(e,n):V.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Fe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Fe.ERR_BAD_OPTION="ERR_BAD_OPTION";Fe.ECONNABORTED="ECONNABORTED";Fe.ETIMEDOUT="ETIMEDOUT";Fe.ECONNREFUSED="ECONNREFUSED";Fe.ERR_NETWORK="ERR_NETWORK";Fe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Fe.ERR_DEPRECATED="ERR_DEPRECATED";Fe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Fe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Fe.ERR_CANCELED="ERR_CANCELED";Fe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Fe.ERR_INVALID_URL="ERR_INVALID_URL";Fe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const _S=null,bm=100;function yc(t){return V.isPlainObject(t)||V.isArray(t)}function Tm(t){return V.endsWith(t,"[]")?t.slice(0,-2):t}function xl(t,e,n){return t?t.concat(e).map(function(s,r){return s=Tm(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function vS(t){return V.isArray(t)&&!t.some(yc)}const xS=V.toFlatObject(V,{},null,function(e){return/^is[A-Z]/.test(e)});function $a(t,e,n){if(!V.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=V.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,E){return!V.isUndefined(E[M])});const i=n.metaTokens,s=n.visitor||m,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?bm:n.maxDepth,c=a&&V.isSpecCompliantForm(e),u=[];if(!V.isFunction(s))throw new TypeError("visitor must be a function");function f(p){if(p===null)return"";if(V.isDate(p))return p.toISOString();if(V.isBoolean(p))return p.toString();if(!c&&V.isBlob(p))throw new Fe("Blob is not supported. Use a Buffer instead.");if(V.isArrayBuffer(p)||V.isTypedArray(p)){if(c&&typeof a=="function")return new a([p]);if(typeof Buffer<"u")return Buffer.from(p);throw new Fe("Blob is not supported. Use a Buffer instead.",Fe.ERR_NOT_SUPPORT)}return p}function h(p){if(p>l)throw new Fe("Object is too deeply nested ("+p+" levels). Max depth: "+l,Fe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function d(p,M){if(l===1/0)return JSON.stringify(p);const E=[];return JSON.stringify(p,function(A,T){if(!V.isObject(T))return T;for(;E.length&&E[E.length-1]!==this;)E.pop();return E.push(T),h(M+E.length-1),T})}function m(p,M,E){let S=p;if(V.isReactNative(e)&&V.isReactNativeBlob(p))return e.append(xl(E,M,r),f(p)),!1;if(p&&!E&&typeof p=="object"){if(V.endsWith(M,"{}"))M=i?M:M.slice(0,-2),p=d(p,1);else if(V.isArray(p)&&vS(p)||(V.isFileList(p)||V.endsWith(M,"[]"))&&(S=V.toArray(p)))return M=Tm(M),S.forEach(function(T,D){!(V.isUndefined(T)||T===null)&&e.append(o===!0?xl([M],D,r):o===null?M:M+"[]",f(T))}),!1}return yc(p)?!0:(e.append(xl(E,M,r),f(p)),!1)}const v=Object.assign(xS,{defaultVisitor:m,convertValue:f,isVisitable:yc});function g(p,M,E=0){if(!V.isUndefined(p)){if(h(E),u.indexOf(p)!==-1)throw new Error("Circular reference detected in "+M.join("."));u.push(p),V.forEach(p,function(A,T){(!(V.isUndefined(A)||A===null)&&s.call(e,A,V.isString(T)?T.trim():T,M,v))===!0&&g(A,M?M.concat(T):[T],E+1)}),u.pop()}}if(!V.isObject(t))throw new TypeError("data must be an object");return g(t),e}function yh(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function zu(t,e){this._pairs=[],t&&$a(t,this,e)}const Am=zu.prototype;Am.append=function(e,n){this._pairs.push([e,n])};Am.toString=function(e){const n=e?i=>e.call(this,i,yh):yh;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function SS(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function wm(t,e,n){if(!e)return t;t=t||"";const i=V.isFunction(n)?{serialize:n}:n,s=V.getSafeProp(i,"encode")||SS,r=V.getSafeProp(i,"serialize");let o;if(r?o=r(e,i):o=V.isURLSearchParams(e)?e.toString():new zu(e,i).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Mh{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){V.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Hu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},yS=typeof URLSearchParams<"u"?URLSearchParams:zu,MS=typeof FormData<"u"?FormData:null,ES=typeof Blob<"u"?Blob:null,bS={isBrowser:!0,classes:{URLSearchParams:yS,FormData:MS,Blob:ES},protocols:["http","https","file","blob","url","data"]},Vu=typeof window<"u"&&typeof document<"u",Mc=typeof navigator=="object"&&navigator||void 0,TS=Vu&&(!Mc||["ReactNative","NativeScript","NS"].indexOf(Mc.product)<0),AS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",wS=Vu&&window.location.href||"http://localhost",RS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Vu,hasStandardBrowserEnv:TS,hasStandardBrowserWebWorkerEnv:AS,navigator:Mc,origin:wS},Symbol.toStringTag,{value:"Module"})),qt={...RS,...bS};function CS(t,e){return $a(t,new qt.classes.URLSearchParams,{visitor:function(n,i,s,r){return qt.isNode&&V.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}const Eh=bm;function Rm(t){if(t>Eh)throw new Fe("FormData field is too deeply nested ("+t+" levels). Max depth: "+Eh,Fe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function PS(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)Rm(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function DS(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Cm(t){function e(n,i,s,r){Rm(r);let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&V.isArray(s)?s.length:o,l?(V.hasOwnProp(s,o)?s[o]=V.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!V.hasOwnProp(s,o)||!V.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&V.isArray(s[o])&&(s[o]=DS(s[o])),!a)}if(V.isFormData(t)&&V.isFunction(t.entries)){const n={};return V.forEachEntry(t,(i,s)=>{e(PS(i),s,n,0)}),n}return null}const Is=(t,e)=>t!=null&&V.hasOwnProp(t,e)?t[e]:void 0;function LS(t,e,n){if(V.isString(t))try{return(e||JSON.parse)(t),V.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const ho={transitional:Hu,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=V.isObject(e);if(r&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return s?JSON.stringify(Cm(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e)||V.isReadableStream(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=Is(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return CS(e,l).toString();if((a=V.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Is(this,"env"),u=c&&c.FormData;return $a(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),LS(e)):e}],transformResponse:[function(e){const n=Is(this,"transitional")||ho.transitional,i=n&&n.forcedJSONParsing,s=Is(this,"responseType"),r=s==="json";if(V.isResponse(e)||V.isReadableStream(e))return e;if(e&&V.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,Is(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Fe.from(l,Fe.ERR_BAD_RESPONSE,this,null,Is(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch","query"],t=>{ho.headers[t]={}});function Sl(t,e){const n=this||ho,i=e||n,s=an.from(i.headers);let r=i.data;return V.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Pm(t){return!!(t&&t.__CANCEL__)}let po=class extends Fe{constructor(e,n,i){super(e??"canceled",Fe.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Dm(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Fe("Request failed with status code "+n.status,n.status>=400&&n.status<500?Fe.ERR_BAD_REQUEST:Fe.ERR_BAD_RESPONSE,n.config,n.request,n))}function IS(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function NS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,h=0;for(;f!==s;)h+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const d=u&&c-u;return d?Math.round(h*1e3/d):void 0}}function US(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const Ma=(t,e,n=3)=>{let i=0;const s=NS(50,250);return US(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},bh=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Th=t=>(...e)=>V.asap(()=>t(...e)),OS=qt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,qt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(qt.origin),qt.navigator&&/(msie|trident)/i.test(qt.navigator.userAgent)):()=>!0,FS=qt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];V.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),V.isString(i)&&a.push(`path=${i}`),V.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),V.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function BS(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function zS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const HS=/^https?:(?!\/\/)/i,VS=/[\t\n\r]/g;function kS(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function GS(t){return kS(t).replace(VS,"")}function Ah(t,e){if(typeof t=="string"&&HS.test(GS(t)))throw new Fe('Invalid URL: missing "//" after protocol',Fe.ERR_INVALID_URL,e)}function Lm(t,e,n,i){Ah(e,i);let s=!BS(e);return t&&(s||n===!1)?(Ah(t,i),zS(t,e)):e}const wh=t=>t instanceof an?{...t}:t;function Ts(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,h,d){return V.isPlainObject(u)&&V.isPlainObject(f)?V.merge.call({caseless:d},u,f):V.isPlainObject(f)?V.merge({},f):V.isArray(f)?f.slice():f}function s(u,f,h,d){if(V.isUndefined(f)){if(!V.isUndefined(u))return i(void 0,u,h,d)}else return i(u,f,h,d)}function r(u,f){if(!V.isUndefined(f))return i(void 0,f)}function o(u,f){if(V.isUndefined(f)){if(!V.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=V.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!V.isUndefined(f))if(V.isPlainObject(f)){if(V.hasOwnProp(f,u))return f[u]}else return;const h=V.hasOwnProp(t,"transitional")?t.transitional:void 0;if(V.isPlainObject(h)&&V.hasOwnProp(h,u))return h[u]}function l(u,f,h){if(V.hasOwnProp(e,h))return i(u,f);if(V.hasOwnProp(t,h))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,h)=>s(wh(u),wh(f),h,!0)};return V.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const h=V.hasOwnProp(c,f)?c[f]:s,d=V.hasOwnProp(t,f)?t[f]:void 0,m=V.hasOwnProp(e,f)?e[f]:void 0,v=h(d,m,f);V.isUndefined(v)&&h!==l||(n[f]=v)}),V.hasOwnProp(e,"validateStatus")&&V.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(V.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const WS=["content-type","content-length"];function XS(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,s])=>{WS.includes(i.toLowerCase())&&t.set(i,s)})}const qS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Im(t){const e=Ts({},t),n=h=>V.hasOwnProp(e,h)?e[h]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=an.from(a),e.url=wm(Lm(c,f,u,e),n("params"),n("paramsSerializer")),l){const h=V.getSafeProp(l,"username")||"",d=V.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(h+":"+(d?qS(d):"")))}catch(m){throw Fe.from(m,Fe.ERR_BAD_OPTION_VALUE,t)}}if(V.isFormData(i)&&(qt.hasStandardBrowserEnv||qt.hasStandardBrowserWebWorkerEnv||V.isReactNative(i)?a.setContentType(void 0):V.isFunction(i.getHeaders)&&XS(a,i.getHeaders(),n("formDataHeaderPolicy"))),qt.hasStandardBrowserEnv&&(V.isFunction(s)&&(s=s(e)),s===!0||s==null&&OS(e.url))){const d=r&&o&&FS.read(o);d&&a.set(r,d)}return e}const $S=typeof XMLHttpRequest<"u",YS=$S&&function(t){return new Promise(function(n,i){const s=Im(t);let r=s.data;const o=an.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,h,d,m;function v(){d&&d(),m&&m(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let g=new XMLHttpRequest;g.open(s.method.toUpperCase(),s.url,!0),g.timeout=s.timeout;function p(){if(!g)return;const E=an.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:E,config:t,request:g};Dm(function(D){n(D),v()},function(D){i(D),v()},A),g=null}"onloadend"in g?g.onloadend=p:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.startsWith("file:"))||setTimeout(p)},g.onabort=function(){g&&(i(new Fe("Request aborted",Fe.ECONNABORTED,t,g)),v(),g=null)},g.onerror=function(S){const A=S&&S.message?S.message:"Network Error",T=new Fe(A,Fe.ERR_NETWORK,t,g);T.event=S||null,i(T),v(),g=null},g.ontimeout=function(){let S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||Hu;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),i(new Fe(S,A.clarifyTimeoutError?Fe.ETIMEDOUT:Fe.ECONNABORTED,t,g)),v(),g=null},r===void 0&&o.setContentType(null),"setRequestHeader"in g&&V.forEach(Mm(o),function(S,A){g.setRequestHeader(A,S)}),V.isUndefined(s.withCredentials)||(g.withCredentials=!!s.withCredentials),a&&a!=="json"&&(g.responseType=s.responseType),c&&([h,m]=Ma(c,!0),g.addEventListener("progress",h)),l&&g.upload&&([f,d]=Ma(l),g.upload.addEventListener("progress",f),g.upload.addEventListener("loadend",d)),(s.cancelToken||s.signal)&&(u=E=>{g&&(i(!E||E.type?new po(null,t,g):E),g.abort(),v(),g=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const M=IS(s.url);if(M&&!qt.protocols.includes(M)){i(new Fe("Unsupported protocol "+M+":",Fe.ERR_BAD_REQUEST,t)),v();return}g.send(r||null)})},KS=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof Fe?c:new po(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new Fe(`timeout of ${e}ms exceeded`,Fe.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>V.asap(o),a},ZS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},JS=async function*(t,e){for await(const n of jS(t))yield*ZS(n,e)},jS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Rh=(t,e,n,i)=>{const s=JS(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let h=r+=f;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Ea=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,QS=(t,e,n)=>e+2<n&&Ea(t.charCodeAt(e+1))&&Ea(t.charCodeAt(e+2));function ey(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let d=0;d<a;d++)if(i.charCodeAt(d)===37&&d+2<a){const m=i.charCodeAt(d+1),v=i.charCodeAt(d+2);Ea(m)&&Ea(v)&&(o-=2,d+=2)}let l=0,c=a-1;const u=d=>d>=2&&i.charCodeAt(d-2)===37&&i.charCodeAt(d-1)===51&&(i.charCodeAt(d)===68||i.charCodeAt(d)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const h=Math.floor(o/4)*3-(l||0);return h>0?h:0}let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&QS(i,o,a))r+=1,o+=2;else if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const ku="1.18.1",Ch=64*1024,{isFunction:bo}=V,ty=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Ph=t=>{if(!V.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Dh=(t,...e)=>{try{return!!t(...e)}catch{return!1}},ny=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},iy=t=>{const e=V.global!==void 0&&V.global!==null?V.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=V.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?bo(s):typeof fetch=="function",l=bo(r),c=bo(o);if(!a)return!1;const u=a&&bo(n),f=a&&(typeof i=="function"?(p=>M=>p.encode(M))(new i):async p=>new Uint8Array(await new r(p).arrayBuffer())),h=l&&u&&Dh(()=>{let p=!1;const M=new r(qt.origin,{body:new n,method:"POST",get duplex(){return p=!0,"half"}}),E=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),p&&!E}),d=c&&u&&Dh(()=>V.isReadableStream(new o("").body)),m={stream:d&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!m[p]&&(m[p]=(M,E)=>{let S=M&&M[p];if(S)return S.call(M);throw new Fe(`Response type '${p}' is not supported`,Fe.ERR_NOT_SUPPORT,E)})});const v=async p=>{if(p==null)return 0;if(V.isBlob(p))return p.size;if(V.isSpecCompliantForm(p))return(await new r(qt.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(V.isArrayBufferView(p)||V.isArrayBuffer(p))return p.byteLength;if(V.isURLSearchParams(p)&&(p=p+""),V.isString(p))return(await f(p)).byteLength},g=async(p,M)=>{const E=V.toFiniteNumber(p.getContentLength());return E??v(M)};return async p=>{let{url:M,method:E,data:S,signal:A,cancelToken:T,timeout:D,onDownloadProgress:x,onUploadProgress:R,responseType:I,headers:L,withCredentials:H="same-origin",fetchOptions:ie,maxContentLength:oe,maxBodyLength:X}=Im(p);const ne=V.isNumber(oe)&&oe>-1,G=V.isNumber(X)&&X>-1,se=Y=>V.hasOwnProp(p,Y)?p[Y]:void 0;let ge=s||fetch;I=I?(I+"").toLowerCase():"text";let ye=KS([A,T&&T.toAbortSignal()],D),xe=null;const Ee=ye&&ye.unsubscribe&&(()=>{ye.unsubscribe()});let Ze,lt=null;const je=()=>new Fe("Request body larger than maxBodyLength limit",Fe.ERR_BAD_REQUEST,p,xe);try{let Y;const F=se("auth");if(F){const N=V.getSafeProp(F,"username")||"",j=V.getSafeProp(F,"password")||"";Y={username:N,password:j}}if(ny(M)){const N=new URL(M,qt.origin);if(!Y&&(N.username||N.password)){const j=Ph(N.username),_e=Ph(N.password);Y={username:j,password:_e}}(N.username||N.password)&&(N.username="",N.password="",M=N.href)}if(Y&&(L.delete("authorization"),L.set("Authorization","Basic "+btoa(ty((Y.username||"")+":"+(Y.password||""))))),ne&&typeof M=="string"&&M.startsWith("data:")&&ey(M)>oe)throw new Fe("maxContentLength size of "+oe+" exceeded",Fe.ERR_BAD_RESPONSE,p,xe);if(G&&E!=="get"&&E!=="head"){const N=await v(S);if(typeof N=="number"&&isFinite(N)&&(Ze=N,N>X))throw je()}const K=G&&(V.isReadableStream(S)||V.isStream(S)),ce=(N,j,_e)=>Rh(N,Ch,pe=>{if(G&&pe>X)throw lt=je();j&&j(pe)},_e);if(h&&E!=="get"&&E!=="head"&&(R||K)){if(Ze=Ze??await g(L,S),Ze!==0||K){let N=new r(M,{method:"POST",body:S,duplex:"half"}),j;if(V.isFormData(S)&&(j=N.headers.get("content-type"))&&L.setContentType(j),N.body){const[_e,pe]=R&&bh(Ze,Ma(Th(R)))||[];S=ce(N.body,_e,pe)}}}else if(K&&!l&&u&&E!=="get"&&E!=="head")S=ce(S);else if(K&&l&&!h&&E!=="get"&&E!=="head")throw new Fe("Stream request bodies are not supported by the current fetch implementation",Fe.ERR_NOT_SUPPORT,p,xe);V.isString(H)||(H=H?"include":"omit");const de=l&&"credentials"in r.prototype;if(V.isFormData(S)){const N=L.getContentType();N&&/^multipart\/form-data/i.test(N)&&!/boundary=/i.test(N)&&L.delete("content-type")}L.set("User-Agent","axios/"+ku,!1);const Te={...ie,signal:ye,method:E.toUpperCase(),headers:Mm(L.normalize()),body:S,duplex:"half",credentials:de?H:void 0};xe=l&&new r(M,Te);let w=await(l?ge(xe,ie):ge(M,Te));const C=an.from(w.headers);if(ne){const N=V.toFiniteNumber(C.getContentLength());if(N!=null&&N>oe)throw new Fe("maxContentLength size of "+oe+" exceeded",Fe.ERR_BAD_RESPONSE,p,xe)}const B=d&&(I==="stream"||I==="response");if(d&&w.body&&(x||ne||B&&Ee)){const N={};["status","statusText","headers"].forEach(De=>{N[De]=w[De]});const j=V.toFiniteNumber(C.getContentLength()),[_e,pe]=x&&bh(j,Ma(Th(x),!0))||[];let ve=0;const le=De=>{if(ne&&(ve=De,ve>oe))throw new Fe("maxContentLength size of "+oe+" exceeded",Fe.ERR_BAD_RESPONSE,p,xe);_e&&_e(De)};w=new o(Rh(w.body,Ch,le,()=>{pe&&pe(),Ee&&Ee()}),N)}I=I||"text";let J=await m[V.findKey(m,I)||"text"](w,p);if(ne&&!d&&!B){let N;if(J!=null&&(typeof J.byteLength=="number"?N=J.byteLength:typeof J.size=="number"?N=J.size:typeof J=="string"&&(N=typeof i=="function"?new i().encode(J).byteLength:J.length)),typeof N=="number"&&N>oe)throw new Fe("maxContentLength size of "+oe+" exceeded",Fe.ERR_BAD_RESPONSE,p,xe)}return!B&&Ee&&Ee(),await new Promise((N,j)=>{Dm(N,j,{data:J,headers:an.from(w.headers),status:w.status,statusText:w.statusText,config:p,request:xe})})}catch(Y){if(Ee&&Ee(),ye&&ye.aborted&&ye.reason instanceof Fe){const F=ye.reason;throw F.config=p,xe&&(F.request=xe),Y!==F&&Object.defineProperty(F,"cause",{__proto__:null,value:Y,writable:!0,enumerable:!1,configurable:!0}),F}if(lt)throw xe&&!lt.request&&(lt.request=xe),lt;if(Y instanceof Fe)throw xe&&!Y.request&&(Y.request=xe),Y;if(Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)){const F=new Fe("Network Error",Fe.ERR_NETWORK,p,xe,Y&&Y.response);throw Object.defineProperty(F,"cause",{__proto__:null,value:Y.cause||Y,writable:!0,enumerable:!1,configurable:!0}),F}throw Fe.from(Y,Y&&Y.code,p,xe,Y&&Y.response)}}},sy=new Map,Nm=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=sy;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:iy(e)),u=c;return c};Nm();const Gu={http:_S,xhr:YS,fetch:{get:Nm}};V.forEach(Gu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Lh=t=>`- ${t}`,ry=t=>V.isFunction(t)||t===null||t===!1;function oy(t,e){t=V.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!ry(i)&&(s=Gu[(a=String(i)).toLowerCase()],s===void 0))throw new Fe(`Unknown adapter '${a}'`);if(s&&(V.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Lh).join(`
`):" "+Lh(o[0]):"as no adapter specified";throw new Fe("There is no suitable adapter to dispatch the request "+a,Fe.ERR_NOT_SUPPORT)}return s}const Um={getAdapter:oy,adapters:Gu};function yl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new po(null,t)}function Ih(t){return yl(t),t.headers=an.from(t.headers),t.data=Sl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Um.getAdapter(t.adapter||ho.adapter,t)(t).then(function(i){yl(t),t.response=i;try{i.data=Sl.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=an.from(i.headers),i},function(i){if(!Pm(i)&&(yl(t),i&&i.response)){t.response=i.response;try{i.response.data=Sl.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=an.from(i.response.headers)}return Promise.reject(i)})}const Ya={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ya[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Nh={};Ya.transitional=function(e,n,i){function s(r,o){return"[Axios v"+ku+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Fe(s(o," has been removed"+(n?" in "+n:"")),Fe.ERR_DEPRECATED);return n&&!Nh[o]&&(Nh[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Ya.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function ay(t,e,n){if(typeof t!="object"||t===null)throw new Fe("options must be an object",Fe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Fe("option "+r+" must be "+l,Fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Fe("Unknown option "+r,Fe.ERR_BAD_OPTION)}}const ia={assertOptions:ay,validators:Ya},Zt=ia.validators;let Es=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Mh,response:new Mh}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ts(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&ia.assertOptions(i,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean),legacyInterceptorReqResOrdering:Zt.transitional(Zt.boolean),advertiseZstdAcceptEncoding:Zt.transitional(Zt.boolean),validateStatusUndefinedResolves:Zt.transitional(Zt.boolean)},!1),s!=null&&(V.isFunction(s)?n.paramsSerializer={serialize:s}:ia.assertOptions(s,{encode:Zt.function,serialize:Zt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ia.assertOptions(n,{baseUrl:Zt.spelling("baseURL"),withXsrfToken:Zt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&V.merge(r.common,r[n.method]);r&&V.forEach(["delete","get","head","post","put","patch","query","common"],m=>{delete r[m]}),n.headers=an.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(n)===!1)return;l=l&&v.synchronous;const g=n.transitional||Hu;g&&g.legacyInterceptorReqResOrdering?a.unshift(v.fulfilled,v.rejected):a.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,h;if(!l){const m=[Ih.bind(this),void 0];for(m.unshift(...a),m.push(...c),h=m.length,u=Promise.resolve(n);f<h;)u=u.then(m[f++],m[f++]);return u}h=a.length;let d=n;for(;f<h;){const m=a[f++],v=a[f++];try{d=m(d)}catch(g){v.call(this,g);break}}try{u=Ih.call(this,d)}catch(m){return Promise.reject(m)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Ts(this.defaults,e);const n=Lm(e.baseURL,e.url,e.allowAbsoluteUrls,e);return wm(n,e.params,e.paramsSerializer)}};V.forEach(["delete","get","head","options"],function(e){Es.prototype[e]=function(n,i){return this.request(Ts(i||{},{method:e,url:n,data:i&&V.hasOwnProp(i,"data")?i.data:void 0}))}});V.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(Ts(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Es.prototype[e]=n(),e!=="query"&&(Es.prototype[e+"Form"]=n(!0))});let ly=class Om{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new po(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Om(function(s){e=s}),cancel:e}}};function cy(t){return function(n){return t.apply(null,n)}}function uy(t){return V.isObject(t)&&t.isAxiosError===!0}const Ec={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ec).forEach(([t,e])=>{Ec[e]=t});function Fm(t){const e=new Es(t),n=dm(Es.prototype.request,e);return V.extend(n,Es.prototype,e,{allOwnKeys:!0}),V.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Fm(Ts(t,s))},n}const Ut=Fm(ho);Ut.Axios=Es;Ut.CanceledError=po;Ut.CancelToken=ly;Ut.isCancel=Pm;Ut.VERSION=ku;Ut.toFormData=$a;Ut.AxiosError=Fe;Ut.Cancel=Ut.CanceledError;Ut.all=function(e){return Promise.all(e)};Ut.spread=cy;Ut.isAxiosError=uy;Ut.mergeConfig=Ts;Ut.AxiosHeaders=an;Ut.formToJSON=t=>Cm(V.isHTMLForm(t)?new FormData(t):t);Ut.getAdapter=Um.getAdapter;Ut.HttpStatusCode=Ec;Ut.default=Ut;const{Axios:iC,AxiosError:sC,CanceledError:rC,isCancel:oC,CancelToken:aC,VERSION:lC,all:cC,Cancel:uC,isAxiosError:fC,spread:hC,toFormData:dC,AxiosHeaders:pC,HttpStatusCode:mC,formToJSON:gC,getAdapter:_C,mergeConfig:vC,create:xC}=Ut,Xt=Ut.create({baseURL:"/api"}),fy={class:"page-card"},hy={key:0,class:"placeholder"},dy={class:"summary-grid"},py={class:"summary-label"},my={class:"summary-note"},gy={class:"content-grid"},_y={class:"panel"},vy={key:1,class:"placeholder"},xy={class:"panel"},Sy={key:0,class:"table"},yy={key:1,class:"placeholder"},My={key:0,class:"alert"},Ey={__name:"HomePage",setup(t){const e=et([]),n=et([]),i=et([]),s=et(!0),r=et(""),o=u=>u?new Date(u).toLocaleString("zh-TW"):"—",a=dt(()=>n.value.find(u=>!u.endTime)),l=dt(()=>[{title:"使用者數",value:e.value.length,detail:"資料庫已建立的使用者"},{title:"作業紀錄",value:n.value.length,detail:"所有作業資料"},{title:"辨識結果",value:i.value.length,detail:"所有物件辨識資料"}]);return Cs(async()=>{var u,f;s.value=!0,r.value="";try{const[h,d,m]=await Promise.all([Xt.get("/users"),Xt.get("/operations"),Xt.get("/detections")]);e.value=h.data,n.value=d.data,i.value=m.data}catch(h){r.value=((f=(u=h.response)==null?void 0:u.data)==null?void 0:f.error)||"無法讀取資料庫資料，請確認後端服務與 MongoDB 是否已啟動。"}finally{s.value=!1}}),(u,f)=>{var h,d;return Re(),Pe("section",fy,[f[7]||(f[7]=O("div",{class:"section-title"},[O("p",{class:"eyebrow"},"Dashboard"),O("h2",null,"系統總覽")],-1)),s.value?(Re(),Pe("p",hy,"正在讀取資料庫資料…")):(Re(),Pe(bt,{key:1},[O("div",dy,[(Re(!0),Pe(bt,null,ai(l.value,m=>(Re(),Pe("article",{key:m.title,class:"summary-card"},[O("p",py,we(m.title),1),O("h3",null,we(m.value),1),O("p",my,we(m.detail),1)]))),128))]),O("div",gy,[O("article",_y,[f[4]||(f[4]=O("h3",null,"目前作業",-1)),a.value?(Re(),Pe(bt,{key:0},[O("p",null,[f[0]||(f[0]=O("strong",null,"作業 ID：",-1)),nn(we(a.value._id),1)]),O("p",null,[f[1]||(f[1]=O("strong",null,"使用者：",-1)),nn(we(((h=a.value.userId)==null?void 0:h.name)||((d=a.value.userId)==null?void 0:d.email)||"未提供"),1)]),O("p",null,[f[2]||(f[2]=O("strong",null,"開始時間：",-1)),nn(we(o(a.value.startTime)),1)]),O("p",null,[f[3]||(f[3]=O("strong",null,"說明：",-1)),nn(we(a.value.description||"—"),1)])],64)):(Re(),Pe("p",vy,"目前沒有進行中的作業。"))]),O("article",xy,[f[6]||(f[6]=O("h3",null,"最新辨識結果",-1)),i.value.length?(Re(),Pe("table",Sy,[f[5]||(f[5]=O("thead",null,[O("tr",null,[O("th",null,"時間"),O("th",null,"物件"),O("th",null,"深度")])],-1)),O("tbody",null,[(Re(!0),Pe(bt,null,ai(i.value.slice(0,6),m=>(Re(),Pe("tr",{key:m._id},[O("td",null,we(o(m.timestamp)),1),O("td",null,we(m.objectClass||"未分類"),1),O("td",null,we(m.depth??"—"),1)]))),128))])])):(Re(),Pe("p",yy,"尚無辨識資料。"))])]),r.value?(Re(),Pe("p",My,we(r.value),1)):Qt("",!0)],64))])}}},by={class:"page-card account-page"},Ty={class:"section-title"},Ay={class:"panel account-panel"},wy={key:0},Ry=["autocomplete"],Cy={key:1},Py=["disabled"],Dy={key:0,class:"alert"},Ly={__name:"AccountLoginPage",setup(t){const e=Uu(),n=fm(),i=et(n.query.mode==="register"?"register":"login"),s=et(!1),r=et(""),o=xr({name:"",email:"",password:"",confirmPassword:""}),a=()=>{i.value=i.value==="login"?"register":"login",r.value="",o.password="",o.confirmPassword=""};Ji(()=>n.query.mode,c=>{(c==="register"||c==="login")&&(i.value=c)});const l=async()=>{var c,u;if(r.value="",i.value==="register"&&o.password!==o.confirmPassword){r.value="兩次輸入的密碼不一致。";return}s.value=!0;try{const f=i.value==="login"?{email:o.email,password:o.password}:{name:o.name,email:o.email,password:o.password},h=await Xt.post(`/auth/${i.value==="login"?"login":"register"}`,f);hm(h.data),e.replace(typeof n.query.redirect=="string"?n.query.redirect:"/")}catch(f){r.value=((u=(c=f.response)==null?void 0:c.data)==null?void 0:u.error)||"目前無法完成帳戶操作，請稍後再試。"}finally{s.value=!1}};return(c,u)=>(Re(),Pe("section",by,[O("div",Ty,[u[4]||(u[4]=O("p",{class:"eyebrow"},"Account",-1)),O("h2",null,we(i.value==="login"?"登入平台":"建立帳號"),1)]),O("article",Ay,[O("form",{class:"form-grid",onSubmit:G0(l,["prevent"])},[i.value==="register"?(Re(),Pe("label",wy,[u[5]||(u[5]=nn("使用者名稱",-1)),Fn(O("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>o.name=f),type:"text",autocomplete:"name",required:""},null,512),[[ps,o.name,void 0,{trim:!0}]])])):Qt("",!0),O("label",null,[u[6]||(u[6]=nn("電子信箱",-1)),Fn(O("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>o.email=f),type:"email",autocomplete:"email",required:""},null,512),[[ps,o.email,void 0,{trim:!0}]])]),O("label",null,[u[7]||(u[7]=nn("密碼",-1)),Fn(O("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>o.password=f),type:"password",autocomplete:i.value==="login"?"current-password":"new-password",minlength:"8",required:""},null,8,Ry),[[ps,o.password]])]),i.value==="register"?(Re(),Pe("label",Cy,[u[8]||(u[8]=nn("確認密碼",-1)),Fn(O("input",{"onUpdate:modelValue":u[3]||(u[3]=f=>o.confirmPassword=f),type:"password",autocomplete:"new-password",minlength:"8",required:""},null,512),[[ps,o.confirmPassword]])])):Qt("",!0),O("button",{type:"submit",disabled:s.value},we(s.value?"處理中…":i.value==="login"?"登入":"建立帳號"),9,Py)],32),r.value?(Re(),Pe("p",Dy,we(r.value),1)):Qt("",!0),O("button",{type:"button",class:"account-switch",onClick:a},we(i.value==="login"?"尚未註冊？建立帳號":"已有帳號？返回登入"),1)])]))}},Iy={class:"page-card profile-page"},Ny={class:"panel profile-panel"},Uy={key:0,class:"placeholder"},Oy={class:"profile-avatar-large"},Fy={class:"profile-fields"},By={class:"profile-field-row"},zy={class:"profile-value"},Hy=["disabled"],Vy=["disabled"],ky={class:"profile-field-row"},Gy={class:"profile-value"},Wy=["disabled"],Xy=["disabled"],qy={class:"profile-field-row"},$y={class:"profile-value"},Yy={key:0,class:"alert"},Ky={key:2,class:"alert"},Zy={__name:"AccountProfilePage",setup(t){const e=Uu(),n=et(""),i=et(!0),s=et(!1),r=et(""),o=et(null),a=xr({name:"",email:""}),l=async()=>{var d,m;try{o.value=(await Xt.get(`/users/${$r.value.id}`)).data,a.name=o.value.name,a.email=o.value.email}catch(v){r.value=((m=(d=v.response)==null?void 0:d.data)==null?void 0:m.error)||"無法讀取帳戶資料。"}finally{i.value=!1}},c=d=>{n.value=d,r.value="",a[d]=o.value[d]},u=()=>{n.value&&(a[n.value]=o.value[n.value]),n.value="",r.value=""},f=async d=>{var m,v;s.value=!0,r.value="";try{const g=(await Xt.patch(`/users/${$r.value.id}`,{[d]:a[d]})).data;o.value=g,ex(g),n.value=""}catch(g){r.value=((v=(m=g.response)==null?void 0:m.data)==null?void 0:v.error)||"無法更新帳戶資料。"}finally{s.value=!1}},h=()=>{tx(),e.push("/guide")};return Cs(l),(d,m)=>(Re(),Pe("section",Iy,[m[11]||(m[11]=O("div",{class:"section-title profile-title"},[O("p",{class:"eyebrow"},"Account"),O("h2",null,"帳戶資料")],-1)),O("article",Ny,[i.value?(Re(),Pe("p",Uy,"正在讀取帳戶資料…")):o.value?(Re(),Pe(bt,{key:1},[O("div",Oy,we(o.value.name.charAt(0).toUpperCase()),1),O("div",Fy,[O("div",By,[m[8]||(m[8]=O("span",{class:"profile-label"},"使用者名稱",-1)),O("div",zy,[n.value==="name"?(Re(),Pe(bt,{key:0},[Fn(O("input",{"onUpdate:modelValue":m[0]||(m[0]=v=>a.name=v),type:"text",autofocus:"",onKeyup:m[1]||(m[1]=eh(v=>f("name"),["enter"]))},null,544),[[ps,a.name,void 0,{trim:!0}]]),O("button",{type:"button",class:"field-save",disabled:s.value,onClick:m[2]||(m[2]=v=>f("name"))},"✓",8,Hy),O("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,Vy)],64)):(Re(),Pe(bt,{key:1},[O("span",null,we(o.value.name),1),O("button",{type:"button",class:"field-edit",title:"修改使用者名稱",onClick:m[3]||(m[3]=v=>c("name"))},"✎")],64))])]),O("div",ky,[m[9]||(m[9]=O("span",{class:"profile-label"},"電子信箱",-1)),O("div",Gy,[n.value==="email"?(Re(),Pe(bt,{key:0},[Fn(O("input",{"onUpdate:modelValue":m[4]||(m[4]=v=>a.email=v),type:"email",autofocus:"",onKeyup:m[5]||(m[5]=eh(v=>f("email"),["enter"]))},null,544),[[ps,a.email,void 0,{trim:!0}]]),O("button",{type:"button",class:"field-save",disabled:s.value,onClick:m[6]||(m[6]=v=>f("email"))},"✓",8,Wy),O("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,Xy)],64)):(Re(),Pe(bt,{key:1},[O("span",null,we(o.value.email),1),O("button",{type:"button",class:"field-edit",title:"修改電子信箱",onClick:m[7]||(m[7]=v=>c("email"))},"✎")],64))])]),O("div",qy,[m[10]||(m[10]=O("span",{class:"profile-label"},"註冊時間",-1)),O("div",$y,[O("span",null,we(new Date(o.value.signUpTime).toLocaleString("zh-TW")),1)])])]),r.value?(Re(),Pe("p",Yy,we(r.value),1)):Qt("",!0),O("button",{type:"button",class:"logout-danger",onClick:h},"登出帳戶")],64)):(Re(),Pe("p",Ky,we(r.value),1))])]))}},Ka=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Jy={},jy={class:"page-card"};function Qy(t,e){return Re(),Pe("section",jy,[...e[0]||(e[0]=[Lu('<div class="section-title"><p class="eyebrow">Account</p><h2>密碼修改</h2></div><article class="panel"><h3>修改密碼</h3><div class="form-grid"><input type="password" placeholder="舊密碼"><input type="password" placeholder="新密碼"><input type="password" placeholder="確認新密碼"><button type="button">確認修改</button></div></article>',2)])])}const eM=Ka(Jy,[["render",Qy]]),tM={},nM={class:"page-card"};function iM(t,e){return Re(),Pe("section",nM,[...e[0]||(e[0]=[O("div",{class:"section-title"},[O("p",{class:"eyebrow"},"Guide"),O("h2",null,"網站操作指引")],-1),O("article",{class:"panel"},[O("h3",null,"使用步驟"),O("ul",{class:"bullet-list"},[O("li",null,"選擇對應的定位任務頁面。"),O("li",null,"確認目前作業狀態與資料來源。"),O("li",null,"透過歷史資料查詢前次操作結果。")])],-1)])])}const sM=Ka(tM,[["render",iM]]),rM={},oM={class:"page-card"};function aM(t,e){return Re(),Pe("section",oM,[...e[0]||(e[0]=[O("div",{class:"section-title"},[O("p",{class:"eyebrow"},"Technology"),O("h2",null,"定位技術介紹")],-1),O("article",{class:"panel"},[O("h3",null,"系統技術架構"),O("p",null,"本系統結合電腦視覺、深度估測與即時串流，讓終端定位作業可快速觀測與追溯。")],-1)])])}const lM=Ka(rM,[["render",aM]]),cM={class:"page-card"},uM={key:0,class:"placeholder"},fM={key:1,class:"table table-spaced"},hM={key:2,class:"placeholder"},dM={key:3,class:"alert"},pM={__name:"ObjectQueryPage",setup(t){const e=et([]),n=et(""),i=et(!0),s=et(""),r=a=>a?new Date(a).toLocaleString("zh-TW"):"—",o=dt(()=>e.value.filter(a=>{var l;return(l=a.objectClass)==null?void 0:l.toLowerCase().includes(n.value.toLowerCase())}));return Cs(async()=>{try{e.value=(await Xt.get("/detections")).data}catch{s.value="無法讀取辨識資料。"}finally{i.value=!1}}),(a,l)=>(Re(),Pe("section",cM,[l[2]||(l[2]=O("div",{class:"section-title"},[O("p",{class:"eyebrow"},"History"),O("h2",null,"物件辨識紀錄")],-1)),Fn(O("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"search",placeholder:"依物件名稱篩選"},null,512),[[ps,n.value]]),i.value?(Re(),Pe("p",uM,"正在讀取資料…")):o.value.length?(Re(),Pe("table",fM,[l[1]||(l[1]=O("thead",null,[O("tr",null,[O("th",null,"時間"),O("th",null,"物件"),O("th",null,"深度"),O("th",null,"作業 ID")])],-1)),O("tbody",null,[(Re(!0),Pe(bt,null,ai(o.value,c=>{var u;return Re(),Pe("tr",{key:c._id},[O("td",null,we(r(c.timestamp)),1),O("td",null,we(c.objectClass||"未分類"),1),O("td",null,we(c.depth??"—"),1),O("td",null,we(((u=c.operationId)==null?void 0:u._id)||c.operationId),1)])}),128))])])):(Re(),Pe("p",hM,"沒有符合的辨識資料。")),s.value?(Re(),Pe("p",dM,we(s.value),1)):Qt("",!0)]))}},mM={class:"page-card"},gM={key:0,class:"placeholder"},_M={key:1,class:"table"},vM={key:2,class:"placeholder"},xM={key:3,class:"alert"},SM={__name:"TaskHistoryPage",setup(t){const e=et([]),n=et(!0),i=et(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return Cs(async()=>{try{e.value=(await Xt.get("/operations")).data}catch{i.value="無法讀取作業紀錄。"}finally{n.value=!1}}),(r,o)=>(Re(),Pe("section",mM,[o[1]||(o[1]=O("div",{class:"section-title"},[O("p",{class:"eyebrow"},"History"),O("h2",null,"任務歷程")],-1)),n.value?(Re(),Pe("p",gM,"正在讀取資料…")):e.value.length?(Re(),Pe("table",_M,[o[0]||(o[0]=O("thead",null,[O("tr",null,[O("th",null,"開始時間"),O("th",null,"結束時間"),O("th",null,"使用者"),O("th",null,"狀態")])],-1)),O("tbody",null,[(Re(!0),Pe(bt,null,ai(e.value,a=>{var l,c;return Re(),Pe("tr",{key:a._id},[O("td",null,we(s(a.startTime)),1),O("td",null,we(s(a.endTime)),1),O("td",null,we(((l=a.userId)==null?void 0:l.name)||((c=a.userId)==null?void 0:c.email)||"未提供"),1),O("td",null,we(a.endTime?"已完成":"進行中"),1)])}),128))])])):(Re(),Pe("p",vM,"尚無任務資料。")),i.value?(Re(),Pe("p",xM,we(i.value),1)):Qt("",!0)]))}},yM={class:"page-card"},MM={key:0,class:"placeholder"},EM={key:1,class:"table"},bM={key:2,class:"placeholder"},TM={key:3,class:"alert"},AM={__name:"OperationLogPage",setup(t){const e=et([]),n=et(!0),i=et(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return Cs(async()=>{try{e.value=(await Xt.get("/operations")).data}catch{i.value="無法讀取操作紀錄。"}finally{n.value=!1}}),(r,o)=>(Re(),Pe("section",yM,[o[1]||(o[1]=O("div",{class:"section-title"},[O("p",{class:"eyebrow"},"History"),O("h2",null,"操作紀錄")],-1)),n.value?(Re(),Pe("p",MM,"正在讀取資料…")):e.value.length?(Re(),Pe("table",EM,[o[0]||(o[0]=O("thead",null,[O("tr",null,[O("th",null,"作業 ID"),O("th",null,"開始時間"),O("th",null,"結束時間"),O("th",null,"說明")])],-1)),O("tbody",null,[(Re(!0),Pe(bt,null,ai(e.value,a=>(Re(),Pe("tr",{key:a._id},[O("td",null,we(a._id),1),O("td",null,we(s(a.startTime)),1),O("td",null,we(s(a.endTime)),1),O("td",null,we(a.description||"—"),1)]))),128))])])):(Re(),Pe("p",bM,"尚無操作紀錄。")),i.value?(Re(),Pe("p",TM,we(i.value),1)):Qt("",!0)]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wu="185",tr={ROTATE:0,DOLLY:1,PAN:2},Zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wM=0,Uh=1,RM=2,sa=1,CM=2,Br=3,Qi=0,Sn=1,ii=2,wi=0,nr=1,Oh=2,Fh=3,Bh=4,PM=5,hs=100,DM=101,LM=102,IM=103,NM=104,UM=200,OM=201,FM=202,BM=203,bc=204,Tc=205,zM=206,HM=207,VM=208,kM=209,GM=210,WM=211,XM=212,qM=213,$M=214,Ac=0,wc=1,Rc=2,dr=3,Cc=4,Pc=5,Dc=6,Lc=7,Bm=0,YM=1,KM=2,li=0,zm=1,Hm=2,Vm=3,km=4,Gm=5,Wm=6,Xm=7,qm=300,As=301,pr=302,Ml=303,El=304,Za=306,Ic=1e3,Ti=1001,Nc=1002,$t=1003,ZM=1004,To=1005,rn=1006,bl=1007,_s=1008,bn=1009,$m=1010,Ym=1011,io=1012,Xu=1013,hi=1014,si=1015,Li=1016,qu=1017,$u=1018,so=1020,Km=35902,Zm=35899,Jm=1021,jm=1022,Bn=1023,Ii=1026,vs=1027,Qm=1028,Yu=1029,ws=1030,Ku=1031,Zu=1033,ra=33776,oa=33777,aa=33778,la=33779,Uc=35840,Oc=35841,Fc=35842,Bc=35843,zc=36196,Hc=37492,Vc=37496,kc=37488,Gc=37489,ba=37490,Wc=37491,Xc=37808,qc=37809,$c=37810,Yc=37811,Kc=37812,Zc=37813,Jc=37814,jc=37815,Qc=37816,eu=37817,tu=37818,nu=37819,iu=37820,su=37821,ru=36492,ou=36494,au=36495,lu=36283,cu=36284,Ta=36285,uu=36286,JM=3200,fu=0,jM=1,Ki="",Cn="srgb",Aa="srgb-linear",wa="linear",_t="srgb",Ns=7680,zh=519,QM=512,eE=513,tE=514,Ju=515,nE=516,iE=517,ju=518,sE=519,Hh=35044,Vh="300 es",ri=2e3,ro=2001;function rE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ra(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oE(){const t=Ra("canvas");return t.style.display="block",t}const kh={};function Gh(...t){const e="THREE."+t.shift();console.log(e,...t)}function eg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Je(...t){t=eg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=eg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ir(...t){const e=t.join(" ");e in kh||(kh[e]=!0,Je(...t))}function aE(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const lE={[Ac]:wc,[Rc]:Dc,[Cc]:Lc,[dr]:Pc,[wc]:Ac,[Dc]:Rc,[Lc]:Cc,[Pc]:dr};class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ca=Math.PI/180,hu=180/Math.PI;function mo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function ct(t,e,n){return Math.max(e,Math.min(n,t))}function cE(t,e){return(t%e+e)%e}function Tl(t,e,n){return(1-n)*t+n*e}function Rr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const uE={DEG2RAD:ca},cf=class cf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cf.prototype.isVector2=!0;let tt=cf;class es{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(f!==v||l!==h||c!==d||u!==m){let g=l*h+c*d+u*m+f*v;g<0&&(h=-h,d=-d,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){const M=Math.acos(g),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,f=f*p+v*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,f=f*p+v*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return e[n]=a*m+u*f+l*d-c*h,e[n+1]=l*m+u*h+c*f-a*d,e[n+2]=c*m+u*d+a*h-l*f,e[n+3]=u*m-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uf=class uf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this.z=ct(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this.z=ct(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uf.prototype.isVector3=!0;let q=uf;const Al=new q,Wh=new es,ff=class ff{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],v=s[0],g=s[3],p=s[6],M=s[1],E=s[4],S=s[7],A=s[2],T=s[5],D=s[8];return r[0]=o*v+a*M+l*A,r[3]=o*g+a*E+l*T,r[6]=o*p+a*S+l*D,r[1]=c*v+u*M+f*A,r[4]=c*g+u*E+f*T,r[7]=c*p+u*S+f*D,r[2]=h*v+d*M+m*A,r[5]=h*g+d*E+m*T,r[8]=h*p+d*S+m*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,m=n*f+i*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=d*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wl.makeScale(e,n)),this}rotate(e){return ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wl.makeRotation(-e)),this}translate(e,n){return ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ff.prototype.isMatrix3=!0;let nt=ff;const wl=new nt,Xh=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fE(){const t={enabled:!0,workingColorSpace:Aa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?wa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Aa]:{primaries:e,whitePoint:i,transfer:wa,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const ut=fE();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function sr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Us;class hE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Us===void 0&&(Us=Ra("canvas")),Us.width=e.width,Us.height=e.height;const s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Us}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ra("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dE=0;class Qu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rl(s[o].image)):r.push(Rl(s[o]))}else r=Rl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Rl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let pE=0;const Cl=new q;class pn extends is{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Ti,s=Ti,r=rn,o=_s,a=Bn,l=bn,c=pn.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=mo(),this.name="",this.source=new Qu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Je(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ic:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ic:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=qm;pn.DEFAULT_ANISOTROPY=1;const hf=class hf{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,S=(d+1)/2,A=(p+1)/2,T=(u+h)/4,D=(f+v)/4,x=(m+g)/4;return E>S&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=D/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=x/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=D/r,s=x/r),this.set(i,s,r,n),this}let M=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-v)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this.z=ct(this.z,e.z,n.z),this.w=ct(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this.z=ct(this.z,e,n),this.w=ct(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hf.prototype.isVector4=!0;let Ct=hf;class mE extends is{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new pn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Qu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends mE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class tg extends pn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gE extends pn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Da=class Da{constructor(e,n,i,s,r,o,a,l,c,u,f,h,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,h,d,m,v,g)}set(e,n,i,s,r,o,a,l,c,u,f,h,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Da().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,m=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=d+m*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=m+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,m=c*u,v=c*f;n[0]=h+v*a,n[4]=m*a-d,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-m,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,m=c*u,v=c*f;n[0]=h-v*a,n[4]=-o*f,n[8]=m+d*a,n[1]=d+m*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,m=a*u,v=a*f;n[0]=l*u,n[4]=m*c-d,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=d*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,m=a*l,v=a*c;n[0]=l*u,n[4]=v-h*f,n[8]=m*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*f+m,n[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,m=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+v,n[5]=o*u,n[9]=d*f-m,n[2]=m*f-d,n[6]=a*u,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_E,e,vE)}lookAt(e,n,i){const s=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),zi.crossVectors(i,Mn),zi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),zi.crossVectors(i,Mn)),zi.normalize(),Ao.crossVectors(Mn,zi),s[0]=zi.x,s[4]=Ao.x,s[8]=Mn.x,s[1]=zi.y,s[5]=Ao.y,s[9]=Mn.y,s[2]=zi.z,s[6]=Ao.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],v=i[6],g=i[10],p=i[14],M=i[3],E=i[7],S=i[11],A=i[15],T=s[0],D=s[4],x=s[8],R=s[12],I=s[1],L=s[5],H=s[9],ie=s[13],oe=s[2],X=s[6],ne=s[10],G=s[14],se=s[3],ge=s[7],ye=s[11],xe=s[15];return r[0]=o*T+a*I+l*oe+c*se,r[4]=o*D+a*L+l*X+c*ge,r[8]=o*x+a*H+l*ne+c*ye,r[12]=o*R+a*ie+l*G+c*xe,r[1]=u*T+f*I+h*oe+d*se,r[5]=u*D+f*L+h*X+d*ge,r[9]=u*x+f*H+h*ne+d*ye,r[13]=u*R+f*ie+h*G+d*xe,r[2]=m*T+v*I+g*oe+p*se,r[6]=m*D+v*L+g*X+p*ge,r[10]=m*x+v*H+g*ne+p*ye,r[14]=m*R+v*ie+g*G+p*xe,r[3]=M*T+E*I+S*oe+A*se,r[7]=M*D+E*L+S*X+A*ge,r[11]=M*x+E*H+S*ne+A*ye,r[15]=M*R+E*ie+S*G+A*xe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15],M=l*d-c*h,E=a*d-c*f,S=a*h-l*f,A=o*d-c*u,T=o*h-l*u,D=o*f-a*u;return n*(v*M-g*E+p*S)-i*(m*M-g*A+p*T)+s*(m*E-v*A+p*D)-r*(m*S-v*T+g*D)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],M=n*a-i*o,E=n*l-s*o,S=n*c-r*o,A=i*l-s*a,T=i*c-r*a,D=s*c-r*l,x=u*v-f*m,R=u*g-h*m,I=u*p-d*m,L=f*g-h*v,H=f*p-d*v,ie=h*p-d*g,oe=M*ie-E*H+S*L+A*I-T*R+D*x;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/oe;return e[0]=(a*ie-l*H+c*L)*X,e[1]=(s*H-i*ie-r*L)*X,e[2]=(v*D-g*T+p*A)*X,e[3]=(h*T-f*D-d*A)*X,e[4]=(l*I-o*ie-c*R)*X,e[5]=(n*ie-s*I+r*R)*X,e[6]=(g*S-m*D-p*E)*X,e[7]=(u*D-h*S+d*E)*X,e[8]=(o*H-a*I+c*x)*X,e[9]=(i*I-n*H-r*x)*X,e[10]=(m*T-v*S+p*M)*X,e[11]=(f*S-u*T-d*M)*X,e[12]=(a*R-o*L-l*x)*X,e[13]=(n*L-i*R+s*x)*X,e[14]=(v*E-m*A-g*M)*X,e[15]=(u*A-f*E+h*M)*X,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,m=r*f,v=o*u,g=o*f,p=a*f,M=l*c,E=l*u,S=l*f,A=i.x,T=i.y,D=i.z;return s[0]=(1-(v+p))*A,s[1]=(d+S)*A,s[2]=(m-E)*A,s[3]=0,s[4]=(d-S)*T,s[5]=(1-(h+p))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(m+E)*D,s[9]=(g-M)*D,s[10]=(1-(h+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Os.set(s[0],s[1],s[2]).length();const a=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),In.copy(this);const c=1/o,u=1/a,f=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,n.setFromRotationMatrix(In),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=ri,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),h=(n+e)/(n-e),d=(i+s)/(i-s);let m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===ri)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ro)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ri,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),h=-(n+e)/(n-e),d=-(i+s)/(i-s);let m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===ri)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===ro)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Da.prototype.isMatrix4=!0;let Rt=Da;const Os=new q,In=new Rt,_E=new q(0,0,0),vE=new q(1,1,1),zi=new q,Ao=new q,Mn=new q,$h=new Rt,Yh=new es;class ts{constructor(e=0,n=0,i=0,s=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class ef{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xE=0;const Kh=new q,Fs=new es,gi=new Rt,wo=new q,Cr=new q,SE=new q,yE=new es,Zh=new q(1,0,0),Jh=new q(0,1,0),jh=new q(0,0,1),Qh={type:"added"},ME={type:"removed"},Bs={type:"childadded",child:null},Pl={type:"childremoved",child:null};class Gt extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new q,n=new ts,i=new es,s=new q(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new nt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ef,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,n){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Cr,wo,this.up):gi.lookAt(wo,Cr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(gi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qh),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ME),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qh),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,SE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,yE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new q(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xs extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EE={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Ll(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ut.workingColorSpace){if(e=cE(e,1),n=ct(n,0,1),i=ct(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Ll(o,r,e+1/3),this.g=Ll(o,r,e),this.b=Ll(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,n=Cn){function i(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=ng[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return ut.workingToColorSpace(jt.copy(this),e),Math.round(ct(jt.r*255,0,255))*65536+Math.round(ct(jt.g*255,0,255))*256+Math.round(ct(jt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.workingToColorSpace(jt.copy(this),n);const i=jt.r,s=jt.g,r=jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ut.workingColorSpace){return ut.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Cn){ut.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,s=jt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(Ro);const i=Tl(Hi.h,Ro.h,n),s=Tl(Hi.s,Ro.s,n),r=Tl(Hi.l,Ro.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new at;at.NAMES=ng;class bE extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Nn=new q,_i=new q,Il=new q,vi=new q,zs=new q,Hs=new q,ed=new q,Nl=new q,Ul=new q,Ol=new q,Fl=new Ct,Bl=new Ct,zl=new Ct;class On{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Nn.subVectors(e,n),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Nn.subVectors(s,n),_i.subVectors(i,n),Il.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(_i),l=Nn.dot(Il),c=_i.dot(_i),u=_i.dot(Il),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-d-m,m,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Fl.setScalar(0),Bl.setScalar(0),zl.setScalar(0),Fl.fromBufferAttribute(e,n),Bl.fromBufferAttribute(e,i),zl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fl,r.x),o.addScaledVector(Bl,r.y),o.addScaledVector(zl,r.z),o}static isFrontFacing(e,n,i,s){return Nn.subVectors(i,n),_i.subVectors(e,n),Nn.cross(_i).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Nn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;zs.subVectors(s,i),Hs.subVectors(r,i),Nl.subVectors(e,i);const l=zs.dot(Nl),c=Hs.dot(Nl);if(l<=0&&c<=0)return n.copy(i);Ul.subVectors(e,s);const u=zs.dot(Ul),f=Hs.dot(Ul);if(u>=0&&f<=u)return n.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(zs,o);Ol.subVectors(e,r);const d=zs.dot(Ol),m=Hs.dot(Ol);if(m>=0&&d<=m)return n.copy(r);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Hs,a);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return ed.subVectors(r,s),a=(f-u)/(f-u+(d-m)),n.copy(s).addScaledVector(ed,a);const p=1/(g+v+h);return o=v*p,a=h*p,n.copy(i).addScaledVector(zs,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Po.subVectors(this.max,Pr),Vs.subVectors(e.a,Pr),ks.subVectors(e.b,Pr),Gs.subVectors(e.c,Pr),Vi.subVectors(ks,Vs),ki.subVectors(Gs,ks),as.subVectors(Vs,Gs);let n=[0,-Vi.z,Vi.y,0,-ki.z,ki.y,0,-as.z,as.y,Vi.z,0,-Vi.x,ki.z,0,-ki.x,as.z,0,-as.x,-Vi.y,Vi.x,0,-ki.y,ki.x,0,-as.y,as.x,0];return!Hl(n,Vs,ks,Gs,Po)||(n=[1,0,0,0,1,0,0,0,1],!Hl(n,Vs,ks,Gs,Po))?!1:(Do.crossVectors(Vi,ki),n=[Do.x,Do.y,Do.z],Hl(n,Vs,ks,Gs,Po))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new q,new q,new q,new q,new q,new q,new q,new q],Un=new q,Co=new go,Vs=new q,ks=new q,Gs=new q,Vi=new q,ki=new q,as=new q,Pr=new q,Po=new q,Do=new q,ls=new q;function Hl(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){ls.fromArray(t,r);const a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=n.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ot=new q,Lo=new tt;let TE=0;class ui extends is{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hh,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Lo.fromBufferAttribute(this,n),Lo.applyMatrix3(e),this.setXY(n,Lo.x,Lo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Rr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Rr(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Rr(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Rr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Rr(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ig extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class sg extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zt extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}const AE=new go,Dr=new q,Vl=new q;class Ja{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const n=Dr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Dr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Vl)),this.expandByPoint(Dr.copy(e.center).sub(Vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wE=0;const wn=new Rt,kl=new Gt,Ws=new q,En=new go,Lr=new go,kt=new q;class mn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rE(e)?sg:ig)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(En.min,Lr.min),En.expandByPoint(kt),kt.addVectors(En.max,Lr.max),En.expandByPoint(kt)):(En.expandByPoint(Lr.min),En.expandByPoint(Lr.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),kt.add(Ws)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new q,l[x]=new q;const c=new q,u=new q,f=new q,h=new tt,d=new tt,m=new tt,v=new q,g=new q;function p(x,R,I){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,I),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,I),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),a[x].add(v),a[R].add(v),a[I].add(v),l[x].add(g),l[R].add(g),l[I].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,R=M.length;x<R;++x){const I=M[x],L=I.start,H=I.count;for(let ie=L,oe=L+H;ie<oe;ie+=3)p(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const E=new q,S=new q,A=new q,T=new q;function D(x){A.fromBufferAttribute(s,x),T.copy(A);const R=a[x];E.copy(R),E.sub(A.multiplyScalar(A.dot(R))).normalize(),S.crossVectors(T,R);const L=S.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,L)}for(let x=0,R=M.length;x<R;++x){const I=M[x],L=I.start,H=I.count;for(let ie=L,oe=L+H;ie<oe;ie+=3)D(e.getX(ie+0)),D(e.getX(ie+1)),D(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(n,m),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new ui(h,u,f)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let RE=0;class Mr extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=nr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Tc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Je(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bc&&(i.blendSrc=this.blendSrc),this.blendDst!==Tc&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new tt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new q,Gl=new q,Io=new q,Gi=new q,Wl=new q,No=new q,Xl=new q;class ja{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Gl.copy(e).add(n).multiplyScalar(.5),Io.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Gl);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Io),a=Gi.dot(this.direction),l=-Gi.dot(Io),c=Gi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=r*u,f>=0)if(h>=-m)if(h<=m){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Gl).addScaledVector(Io,h),d}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,s,r){Wl.subVectors(n,e),No.subVectors(i,e),Xl.crossVectors(Wl,No);let o=this.direction.dot(Xl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(No.crossVectors(Gi,No));if(l<0)return null;const c=a*this.direction.dot(Wl.cross(Gi));if(c<0||l+c>o)return null;const u=-a*Gi.dot(Xl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tf extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const td=new Rt,cs=new ja,Uo=new Ja,nd=new q,Oo=new q,Fo=new q,Bo=new q,ql=new q,zo=new q,id=new q,Ho=new q;class en extends Gt{constructor(e=new mn,n=new tf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ql.fromBufferAttribute(f,e),o?zo.addScaledVector(ql,u):zo.addScaledVector(ql.sub(n),u))}n.add(zo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Uo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Uo,nd)===null||cs.origin.distanceToSquared(nd)>(e.far-e.near)**2))&&(td.copy(r).invert(),cs.copy(e.ray).applyMatrix4(td),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let S=M,A=E;S<A;S+=3){const T=a.getX(S),D=a.getX(S+1),x=a.getX(S+2);s=Vo(this,p,e,i,c,u,f,T,D,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const M=a.getX(g),E=a.getX(g+1),S=a.getX(g+2);s=Vo(this,o,e,i,c,u,f,M,E,S),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=M,A=E;S<A;S+=3){const T=S,D=S+1,x=S+2;s=Vo(this,p,e,i,c,u,f,T,D,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const M=g,E=g+1,S=g+2;s=Vo(this,o,e,i,c,u,f,M,E,S),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}}function CE(t,e,n,i,s,r,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Qi,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ho);return c<n.near||c>n.far?null:{distance:c,point:Ho.clone(),object:t}}function Vo(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Oo),t.getVertexPosition(l,Fo),t.getVertexPosition(c,Bo);const u=CE(t,e,n,i,Oo,Fo,Bo,id);if(u){const f=new q;On.getBarycoord(id,Oo,Fo,Bo,f),s&&(u.uv=On.getInterpolatedAttribute(s,a,l,c,f,new tt)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,l,c,f,new tt)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new q,materialIndex:0};On.getNormal(Oo,Fo,Bo,h.normal),u.face=h,u.barycoord=f}return u}class PE extends pn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=$t,u=$t,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $l=new q,DE=new q,LE=new nt;class $i{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=$l.subVectors(i,n).cross(DE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta($l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||LE.getNormalMatrix(e),s=this.coplanarPoint($l).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Ja,IE=new tt(.5,.5),ko=new q;class nf{constructor(e=new $i,n=new $i,i=new $i,s=new $i,r=new $i,o=new $i){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],M=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-o,d-u,p-m,A-M).normalize(),s[1].setComponents(c+o,d+u,p+m,A+M).normalize(),s[2].setComponents(c+a,d+f,p+v,A+E).normalize(),s[3].setComponents(c-a,d-f,p-v,A-E).normalize(),i)s[4].setComponents(l,h,g,S).normalize(),s[5].setComponents(c-l,d-h,p-g,A-S).normalize();else if(s[4].setComponents(c-l,d-h,p-g,A-S).normalize(),n===ri)s[5].setComponents(c+l,d+h,p+g,A+S).normalize();else if(n===ro)s[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const n=IE.distanceTo(e.center);return us.radius=.7071067811865476+n,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sf extends Mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new q,Pa=new q,sd=new Rt,Ir=new ja,Go=new Ja,Yl=new q,rd=new q;class rg extends Gt{constructor(e=new mn,n=new sf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Ca.fromBufferAttribute(n,s-1),Pa.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Ca.distanceTo(Pa);e.setAttribute("lineDistance",new zt(i,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;sd.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(sd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=c){const p=u.getX(v),M=u.getX(v+1),E=Wo(this,e,Ir,l,p,M,v);E&&n.push(E)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(d),p=Wo(this,e,Ir,l,v,g,m-1);p&&n.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=c){const p=Wo(this,e,Ir,l,v,v+1,v);p&&n.push(p)}if(this.isLineLoop){const v=Wo(this,e,Ir,l,m-1,d,m-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wo(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Ca.fromBufferAttribute(a,s),Pa.fromBufferAttribute(a,r),n.distanceSqToSegment(Ca,Pa,Yl,rd)>i)return;Yl.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Yl);if(!(c<e.near||c>e.far))return{distance:c,point:rd.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const od=new q,ad=new q;class NE extends rg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)od.fromBufferAttribute(n,s),ad.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+od.distanceTo(ad);e.setAttribute("lineDistance",new zt(i,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class og extends pn{constructor(e=[],n=As,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mr extends pn{constructor(e,n,i=hi,s,r,o,a=$t,l=$t,c,u=Ii,f=1){if(u!==Ii&&u!==vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class UE extends mr{constructor(e,n=hi,i=As,s,r,o=$t,a=$t,l,c=Ii){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ag extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rs extends mn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,i,n,e,o,r,0),m("z","y","x",1,-1,i,n,-e,o,r,1),m("x","z","y",1,1,e,i,n,s,o,2),m("x","z","y",1,-1,e,i,-n,s,o,3),m("x","y","z",1,-1,e,n,i,s,r,4),m("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function m(v,g,p,M,E,S,A,T,D,x,R){const I=S/D,L=A/x,H=S/2,ie=A/2,oe=T/2,X=D+1,ne=x+1;let G=0,se=0;const ge=new q;for(let ye=0;ye<ne;ye++){const xe=ye*L-ie;for(let Ee=0;Ee<X;Ee++){const Ze=Ee*I-H;ge[v]=Ze*M,ge[g]=xe*E,ge[p]=oe,c.push(ge.x,ge.y,ge.z),ge[v]=0,ge[g]=0,ge[p]=T>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Ee/D),f.push(1-ye/x),G+=1}}for(let ye=0;ye<x;ye++)for(let xe=0;xe<D;xe++){const Ee=h+xe+X*ye,Ze=h+xe+X*(ye+1),lt=h+(xe+1)+X*(ye+1),je=h+(xe+1)+X*ye;l.push(Ee,Ze,je),l.push(Ze,lt,je),se+=6}a.addGroup(d,se,R),d+=se,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class oo extends mn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let m=0;const v=[],g=i/2;let p=0;M(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function M(){const S=new q,A=new q;let T=0;const D=(n-e)/i;for(let x=0;x<=r;x++){const R=[],I=x/r,L=I*(n-e)+e;for(let H=0;H<=s;H++){const ie=H/s,oe=ie*l+a,X=Math.sin(oe),ne=Math.cos(oe);A.x=L*X,A.y=-I*i+g,A.z=L*ne,f.push(A.x,A.y,A.z),S.set(X,D,ne).normalize(),h.push(S.x,S.y,S.z),d.push(ie,1-I),R.push(m++)}v.push(R)}for(let x=0;x<s;x++)for(let R=0;R<r;R++){const I=v[R][x],L=v[R+1][x],H=v[R+1][x+1],ie=v[R][x+1];(e>0||R!==0)&&(u.push(I,L,ie),T+=3),(n>0||R!==r-1)&&(u.push(L,H,ie),T+=3)}c.addGroup(p,T,0),p+=T}function E(S){const A=m,T=new tt,D=new q;let x=0;const R=S===!0?e:n,I=S===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,g*I,0),h.push(0,I,0),d.push(.5,.5),m++;const L=m;for(let H=0;H<=s;H++){const oe=H/s*l+a,X=Math.cos(oe),ne=Math.sin(oe);D.x=R*ne,D.y=g*I,D.z=R*X,f.push(D.x,D.y,D.z),h.push(0,I,0),T.x=X*.5+.5,T.y=ne*.5*I+.5,d.push(T.x,T.y),m++}for(let H=0;H<s;H++){const ie=A+H,oe=L+H;S===!0?u.push(oe,oe+1,ie):u.push(oe+1,oe,ie),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rf extends oo{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new rf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends mn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=n/l,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const M=p*h-o;for(let E=0;E<c;E++){const S=E*f-r;m.push(S,-M,0),v.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const E=M+c*p,S=M+c*(p+1),A=M+1+c*(p+1),T=M+1+c*p;d.push(E,S,T),d.push(S,A,T)}this.setIndex(d),this.setAttribute("position",new zt(m,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}class of extends mn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new q,h=new q,d=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const M=[],E=p/i,S=o+E*a,A=e*Math.cos(S),T=Math.sqrt(e*e-A*A);let D=0;p===0&&o===0?D=.5/n:p===i&&l===Math.PI&&(D=-.5/n);for(let x=0;x<=n;x++){const R=x/n,I=s+R*r;f.x=-T*Math.cos(I),f.y=A,f.z=T*Math.sin(I),m.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),g.push(R+D,1-E),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<n;M++){const E=u[p][M+1],S=u[p][M],A=u[p+1][M],T=u[p+1][M+1];(p!==0||o>0)&&d.push(E,S,T),(p!==i-1||l<Math.PI)&&d.push(S,A,T)}this.setIndex(d),this.setAttribute("position",new zt(m,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function gr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(ld(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(ld(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=gr(t[n]);for(const s in i)e[s]=i[s]}return e}function ld(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function OE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function lg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const FE={clone:gr,merge:cn};var BE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BE,this.fragmentShader=zE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new at().setHex(s.value);break;case"v2":this.uniforms[i].value=new tt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Rt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class HE extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xo extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VE extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kE extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cg extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class GE extends cg{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Kl=new Rt,cd=new q,ud=new q;class WE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nf,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;cd.setFromMatrixPosition(e.matrixWorld),n.position.copy(cd),ud.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ud),n.updateMatrixWorld(),Kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ro||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qo=new q,$o=new es,Zn=new q;class ug extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qo,$o,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,$o,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(qo,$o,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,$o,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new q,fd=new tt,hd=new tt;class Pn extends ug{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hu*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,fd,hd),n.subVectors(hd,fd)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ca*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class af extends ug{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class XE extends WE{constructor(){super(new af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qE extends cg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new XE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Xs=-90,qs=1;class $E extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pn(Xs,qs,e,n);s.layers=this.layers,this.add(s);const r=new Pn(Xs,qs,e,n);r.layers=this.layers,this.add(r);const o=new Pn(Xs,qs,e,n);o.layers=this.layers,this.add(o);const a=new Pn(Xs,qs,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Xs,qs,e,n);l.layers=this.layers,this.add(l);const c=new Pn(Xs,qs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class YE extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dd=new Rt;class KE{constructor(e,n,i=0,s=1/0){this.ray=new ja(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new ef,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ft("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return dd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dd),this}intersectObject(e,n=!0,i=[]){return du(e,this,i,n),i.sort(pd),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)du(e[s],this,i,n);return i.sort(pd),i}}function pd(t,e){return t.distance-e.distance}function du(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)du(r[o],e,n,!0)}}class md{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const df=class df{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};df.prototype.isMatrix2=!0;let gd=df;class ZE extends NE{constructor(e=10,n=10,i=4473924,s=8947848){i=new at(i),s=new at(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,d=0,m=-a;h<=n;h++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const v=h===r?i:s;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new mn;u.setAttribute("position",new zt(l,3)),u.setAttribute("color",new zt(c,3));const f=new sf({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class JE extends is{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Je("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _d(t,e,n,i){const s=jE(i);switch(n){case Jm:return t*e;case Qm:return t*e/s.components*s.byteLength;case Yu:return t*e/s.components*s.byteLength;case ws:return t*e*2/s.components*s.byteLength;case Ku:return t*e*2/s.components*s.byteLength;case jm:return t*e*3/s.components*s.byteLength;case Bn:return t*e*4/s.components*s.byteLength;case Zu:return t*e*4/s.components*s.byteLength;case ra:case oa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case aa:case la:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oc:case Bc:return Math.max(t,16)*Math.max(e,8)/4;case Uc:case Fc:return Math.max(t,8)*Math.max(e,8)/2;case zc:case Hc:case kc:case Gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vc:case ba:case Wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case $c:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case eu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case tu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case iu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case su:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ru:case ou:case au:return Math.ceil(t/4)*Math.ceil(e/4)*16;case lu:case cu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ta:case uu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jE(t){switch(t){case bn:case $m:return{byteLength:1,components:1};case io:case Ym:case Li:return{byteLength:2,components:1};case qu:case $u:return{byteLength:2,components:4};case hi:case Xu:case si:return{byteLength:4,components:1};case Km:case Zm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wu}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function QE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const v=f[d];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tb=`#ifdef USE_ALPHAHASH
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
#endif`,nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ob=`#ifdef USE_AOMAP
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
#endif`,ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lb=`#ifdef USE_BATCHING
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
#endif`,cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,db=`#ifdef USE_IRIDESCENCE
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
#endif`,pb=`#ifdef USE_BUMPMAP
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
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Eb=`#define PI 3.141592653589793
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
} // validated`,bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Db=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
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
#endif`,Fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vb=`#ifdef USE_GRADIENTMAP
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
}`,kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qb=`#ifdef USE_ENVMAP
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
#endif`,$b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jb=`PhysicalMaterial material;
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
#endif`,jb=`uniform sampler2D dfgLUT;
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
}`,Qb=`
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
#endif`,eT=`#if defined( RE_IndirectDiffuse )
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
#endif`,tT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,iT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uT=`#if defined( USE_POINTS_UV )
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
#endif`,fT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`#ifdef USE_MORPHTARGETS
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
#endif`,_T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ET=`#ifdef USE_NORMALMAP
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
#endif`,bT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zT=`float getShadowMask() {
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
}`,HT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VT=`#ifdef USE_SKINNING
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
#endif`,kT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,WT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$T=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YT=`#ifdef USE_TRANSMISSION
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
#endif`,KT=`#ifdef USE_TRANSMISSION
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
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tA=`uniform sampler2D t2D;
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`#include <common>
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
}`,aA=`#if DEPTH_PACKING == 3200
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
}`,lA=`#define DISTANCE
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
}`,cA=`#define DISTANCE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`uniform float scale;
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
}`,dA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#define LAMBERT
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
}`,_A=`#define LAMBERT
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
}`,vA=`#define MATCAP
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
}`,xA=`#define MATCAP
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
}`,SA=`#define NORMAL
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
}`,yA=`#define NORMAL
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
}`,MA=`#define PHONG
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
}`,EA=`#define PHONG
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
}`,bA=`#define STANDARD
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
}`,TA=`#define STANDARD
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
}`,AA=`#define TOON
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
}`,wA=`#define TOON
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
}`,RA=`uniform float size;
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
}`,CA=`uniform vec3 diffuse;
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
}`,PA=`#include <common>
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
}`,DA=`uniform vec3 color;
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
}`,LA=`uniform float rotation;
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
}`,IA=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:eb,alphahash_pars_fragment:tb,alphamap_fragment:nb,alphamap_pars_fragment:ib,alphatest_fragment:sb,alphatest_pars_fragment:rb,aomap_fragment:ob,aomap_pars_fragment:ab,batching_pars_vertex:lb,batching_vertex:cb,begin_vertex:ub,beginnormal_vertex:fb,bsdfs:hb,iridescence_fragment:db,bumpmap_pars_fragment:pb,clipping_planes_fragment:mb,clipping_planes_pars_fragment:gb,clipping_planes_pars_vertex:_b,clipping_planes_vertex:vb,color_fragment:xb,color_pars_fragment:Sb,color_pars_vertex:yb,color_vertex:Mb,common:Eb,cube_uv_reflection_fragment:bb,defaultnormal_vertex:Tb,displacementmap_pars_vertex:Ab,displacementmap_vertex:wb,emissivemap_fragment:Rb,emissivemap_pars_fragment:Cb,colorspace_fragment:Pb,colorspace_pars_fragment:Db,envmap_fragment:Lb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Nb,envmap_pars_vertex:Ub,envmap_physical_pars_fragment:qb,envmap_vertex:Ob,fog_vertex:Fb,fog_pars_vertex:Bb,fog_fragment:zb,fog_pars_fragment:Hb,gradientmap_pars_fragment:Vb,lightmap_pars_fragment:kb,lights_lambert_fragment:Gb,lights_lambert_pars_fragment:Wb,lights_pars_begin:Xb,lights_toon_fragment:$b,lights_toon_pars_fragment:Yb,lights_phong_fragment:Kb,lights_phong_pars_fragment:Zb,lights_physical_fragment:Jb,lights_physical_pars_fragment:jb,lights_fragment_begin:Qb,lights_fragment_maps:eT,lights_fragment_end:tT,lightprobes_pars_fragment:nT,logdepthbuf_fragment:iT,logdepthbuf_pars_fragment:sT,logdepthbuf_pars_vertex:rT,logdepthbuf_vertex:oT,map_fragment:aT,map_pars_fragment:lT,map_particle_fragment:cT,map_particle_pars_fragment:uT,metalnessmap_fragment:fT,metalnessmap_pars_fragment:hT,morphinstance_vertex:dT,morphcolor_vertex:pT,morphnormal_vertex:mT,morphtarget_pars_vertex:gT,morphtarget_vertex:_T,normal_fragment_begin:vT,normal_fragment_maps:xT,normal_pars_fragment:ST,normal_pars_vertex:yT,normal_vertex:MT,normalmap_pars_fragment:ET,clearcoat_normal_fragment_begin:bT,clearcoat_normal_fragment_maps:TT,clearcoat_pars_fragment:AT,iridescence_pars_fragment:wT,opaque_fragment:RT,packing:CT,premultiplied_alpha_fragment:PT,project_vertex:DT,dithering_fragment:LT,dithering_pars_fragment:IT,roughnessmap_fragment:NT,roughnessmap_pars_fragment:UT,shadowmap_pars_fragment:OT,shadowmap_pars_vertex:FT,shadowmap_vertex:BT,shadowmask_pars_fragment:zT,skinbase_vertex:HT,skinning_pars_vertex:VT,skinning_vertex:kT,skinnormal_vertex:GT,specularmap_fragment:WT,specularmap_pars_fragment:XT,tonemapping_fragment:qT,tonemapping_pars_fragment:$T,transmission_fragment:YT,transmission_pars_fragment:KT,uv_pars_fragment:ZT,uv_pars_vertex:JT,uv_vertex:jT,worldpos_vertex:QT,background_vert:eA,background_frag:tA,backgroundCube_vert:nA,backgroundCube_frag:iA,cube_vert:sA,cube_frag:rA,depth_vert:oA,depth_frag:aA,distance_vert:lA,distance_frag:cA,equirect_vert:uA,equirect_frag:fA,linedashed_vert:hA,linedashed_frag:dA,meshbasic_vert:pA,meshbasic_frag:mA,meshlambert_vert:gA,meshlambert_frag:_A,meshmatcap_vert:vA,meshmatcap_frag:xA,meshnormal_vert:SA,meshnormal_frag:yA,meshphong_vert:MA,meshphong_frag:EA,meshphysical_vert:bA,meshphysical_frag:TA,meshtoon_vert:AA,meshtoon_frag:wA,points_vert:RA,points_frag:CA,shadow_vert:PA,shadow_frag:DA,sprite_vert:LA,sprite_frag:IA},Oe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ti={basic:{uniforms:cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:cn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:cn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:cn([Oe.points,Oe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:cn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:cn([Oe.common,Oe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:cn([Oe.sprite,Oe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:cn([Oe.common,Oe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:cn([Oe.lights,Oe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ti.physical={uniforms:cn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Yo={r:0,b:0,g:0},NA=new Rt,hg=new nt;hg.set(-1,0,0,0,1,0,0,0,1);function UA(t,e,n,i,s,r){const o=new at(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const S=M.backgroundBlurriness>0;E=e.get(E,S)}return E}function m(M){let E=!1;const S=d(M);S===null?g(o,a):S&&S.isColor&&(g(S,1),E=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(M,E){const S=d(E);S&&(S.isCubeTexture||S.mapping===Za)?(c===void 0&&(c=new en(new Rs(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:gr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NA.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hg),c.material.toneMapped=ut.getTransfer(S.colorSpace)!==_t,(u!==S||f!==S.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new en(new _o(2,2),new di({name:"BackgroundMaterial",uniforms:gr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ut.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(Yo,lg(t)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:v,dispose:p}}function OA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(L,H,ie,oe,X){let ne=!1;const G=f(L,oe,ie,H);r!==G&&(r=G,c(r.object)),ne=d(L,oe,ie,X),ne&&m(L,oe,ie,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,S(L,H,ie,oe),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function u(L){return t.deleteVertexArray(L)}function f(L,H,ie,oe){const X=oe.wireframe===!0;let ne=i[H.id];ne===void 0&&(ne={},i[H.id]=ne);const G=L.isInstancedMesh===!0?L.id:0;let se=ne[G];se===void 0&&(se={},ne[G]=se);let ge=se[ie.id];ge===void 0&&(ge={},se[ie.id]=ge);let ye=ge[X];return ye===void 0&&(ye=h(l()),ge[X]=ye),ye}function h(L){const H=[],ie=[],oe=[];for(let X=0;X<n;X++)H[X]=0,ie[X]=0,oe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ie,attributeDivisors:oe,object:L,attributes:{},index:null}}function d(L,H,ie,oe){const X=r.attributes,ne=H.attributes;let G=0;const se=ie.getAttributes();for(const ge in se)if(se[ge].location>=0){const xe=X[ge];let Ee=ne[ge];if(Ee===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(Ee=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(Ee=L.instanceColor)),xe===void 0||xe.attribute!==Ee||Ee&&xe.data!==Ee.data)return!0;G++}return r.attributesNum!==G||r.index!==oe}function m(L,H,ie,oe){const X={},ne=H.attributes;let G=0;const se=ie.getAttributes();for(const ge in se)if(se[ge].location>=0){let xe=ne[ge];xe===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor));const Ee={};Ee.attribute=xe,xe&&xe.data&&(Ee.data=xe.data),X[ge]=Ee,G++}r.attributes=X,r.attributesNum=G,r.index=oe}function v(){const L=r.newAttributes;for(let H=0,ie=L.length;H<ie;H++)L[H]=0}function g(L){p(L,0)}function p(L,H){const ie=r.newAttributes,oe=r.enabledAttributes,X=r.attributeDivisors;ie[L]=1,oe[L]===0&&(t.enableVertexAttribArray(L),oe[L]=1),X[L]!==H&&(t.vertexAttribDivisor(L,H),X[L]=H)}function M(){const L=r.newAttributes,H=r.enabledAttributes;for(let ie=0,oe=H.length;ie<oe;ie++)H[ie]!==L[ie]&&(t.disableVertexAttribArray(ie),H[ie]=0)}function E(L,H,ie,oe,X,ne,G){G===!0?t.vertexAttribIPointer(L,H,ie,X,ne):t.vertexAttribPointer(L,H,ie,oe,X,ne)}function S(L,H,ie,oe){v();const X=oe.attributes,ne=ie.getAttributes(),G=H.defaultAttributeValues;for(const se in ne){const ge=ne[se];if(ge.location>=0){let ye=X[se];if(ye===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(ye=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(ye=L.instanceColor)),ye!==void 0){const xe=ye.normalized,Ee=ye.itemSize,Ze=e.get(ye);if(Ze===void 0)continue;const lt=Ze.buffer,je=Ze.type,Y=Ze.bytesPerElement,F=je===t.INT||je===t.UNSIGNED_INT||ye.gpuType===Xu;if(ye.isInterleavedBufferAttribute){const K=ye.data,ce=K.stride,de=ye.offset;if(K.isInstancedInterleavedBuffer){for(let Te=0;Te<ge.locationSize;Te++)p(ge.location+Te,K.meshPerAttribute);L.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Te=0;Te<ge.locationSize;Te++)g(ge.location+Te);t.bindBuffer(t.ARRAY_BUFFER,lt);for(let Te=0;Te<ge.locationSize;Te++)E(ge.location+Te,Ee/ge.locationSize,je,xe,ce*Y,(de+Ee/ge.locationSize*Te)*Y,F)}else{if(ye.isInstancedBufferAttribute){for(let K=0;K<ge.locationSize;K++)p(ge.location+K,ye.meshPerAttribute);L.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let K=0;K<ge.locationSize;K++)g(ge.location+K);t.bindBuffer(t.ARRAY_BUFFER,lt);for(let K=0;K<ge.locationSize;K++)E(ge.location+K,Ee/ge.locationSize,je,xe,Ee*Y,Ee/ge.locationSize*K*Y,F)}}else if(G!==void 0){const xe=G[se];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv(ge.location,xe);break;case 3:t.vertexAttrib3fv(ge.location,xe);break;case 4:t.vertexAttrib4fv(ge.location,xe);break;default:t.vertexAttrib1fv(ge.location,xe)}}}}M()}function A(){R();for(const L in i){const H=i[L];for(const ie in H){const oe=H[ie];for(const X in oe){const ne=oe[X];for(const G in ne)u(ne[G].object),delete ne[G];delete oe[X]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const H=i[L.id];for(const ie in H){const oe=H[ie];for(const X in oe){const ne=oe[X];for(const G in ne)u(ne[G].object),delete ne[G];delete oe[X]}}delete i[L.id]}function D(L){for(const H in i){const ie=i[H];for(const oe in ie){const X=ie[oe];if(X[L.id]===void 0)continue;const ne=X[L.id];for(const G in ne)u(ne[G].object),delete ne[G];delete X[L.id]}}}function x(L){for(const H in i){const ie=i[H],oe=L.isInstancedMesh===!0?L.id:0,X=ie[oe];if(X!==void 0){for(const ne in X){const G=X[ne];for(const se in G)u(G[se].object),delete G[se];delete X[ne]}delete ie[oe],Object.keys(ie).length===0&&delete i[H]}}}function R(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function FA(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function BA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Bn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const x=D===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==bn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==si&&!x)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:T}}function zA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new $i,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=t.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const M=r?0:i,E=M*4;let S=p.clippingState||null;l.value=S,S=u(m,h,E,d);for(let A=0;A!==E;++A)S[A]=n[A];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,S=d;E!==v;++E,S+=4)o.copy(f[E]).applyMatrix4(M,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Zi=4,vd=[.125,.215,.35,.446,.526,.582],ds=20,HA=256,Nr=new af,xd=new at;let Zl=null,Jl=0,jl=0,Ql=!1;const VA=new q;class Sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=VA}=r;Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,Jl,jl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Li,format:Bn,colorSpace:Aa,depthBuffer:!1},s=yd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kA(r)),this._blurMaterial=WA(r,e,n),this._ggxMaterial=GA(r,e,n)}return s}_compileMaterial(e){const n=new en(new mn,e);this._renderer.compile(n,Nr)}_sceneToCubeUV(e,n,i,s,r){const l=new Pn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(xd),f.toneMapping=li,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new Rs,new tf({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(xd),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const A=this._cubeSize;$s(s,S*A,E>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===As||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$s(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Nr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-Zi?i-m+Zi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-n,$s(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(a,Nr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,$s(e,g,p,3*v,2*v),s.setRenderTarget(e),s.render(a,Nr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ds-1),v=r/m,g=isFinite(r)?1+Math.floor(u*v):ds;g>ds&&Je(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ds}`);const p=[];let M=0;for(let D=0;D<ds;++D){const x=D/v,R=Math.exp(-x*x/2);p.push(R),D===0?M+=R:D<g&&(M+=2*R)}for(let D=0;D<p.length;D++)p[D]=p[D]/M;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=m,h.mipInt.value=E-i;const S=this._sizeLods[s],A=3*S*(s>E-Zi?s-E+Zi:0),T=4*(this._cubeSize-S);$s(n,A,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Nr)}}function kA(t){const e=[],n=[],i=[];let s=t;const r=t-Zi+1+vd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-Zi?l=vd[o-t+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,v=3,g=2,p=1,M=new Float32Array(v*m*d),E=new Float32Array(g*m*d),S=new Float32Array(p*m*d);for(let T=0;T<d;T++){const D=T%3*2/3-1,x=T>2?0:-1,R=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];M.set(R,v*m*T),E.set(h,g*m*T);const I=[T,T,T,T,T,T];S.set(I,p*m*T)}const A=new mn;A.setAttribute("position",new ui(M,v)),A.setAttribute("uv",new ui(E,g)),A.setAttribute("faceIndex",new ui(S,p)),i.push(new en(A,null)),s>Zi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function yd(t,e,n){const i=new ci(t,e,n);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function GA(t,e,n){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function WA(t,e,n){const i=new Float32Array(ds),s=new q(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Md(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ed(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

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
	`}class dg extends ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new og(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rs(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:wi});r.uniforms.tEquirect.value=n;const o=new en(s,r),a=n.minFilter;return n.minFilter===_s&&(n.minFilter=rn),new $E(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function XA(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ml||d===El)if(e.has(h)){const m=e.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const v=new dg(m.height);return v.fromEquirectangularTexture(t,h),e.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,m=d===Ml||d===El,v=d===As||d===pr;if(m||v){let g=n.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Sd(t)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return m&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Sd(t)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,d){return d===Ml?h.mapping=As:d===El&&(h.mapping=pr),h}function l(h){let d=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&d++;return d===m}function c(h){const d=h.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=n.get(d);m!==void 0&&(n.delete(d),m.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function qA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&ir("WebGLRenderer: "+i+" extension not supported."),s}}}function $A(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],t.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let v=0;if(m===void 0)return;if(d!==null){const M=d.array;v=d.version;for(let E=0,S=M.length;E<S;E+=3){const A=M[E+0],T=M[E+1],D=M[E+2];h.push(A,T,T,D,D,A)}}else{const M=m.array;v=m.version;for(let E=0,S=M.length/3-1;E<S;E+=3){const A=E+0,T=E+1,D=E+2;h.push(A,T,T,D,D,A)}}const g=new(m.count>=65535?sg:ig)(h,1);g.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function YA(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,d){d!==0&&(t.drawElementsInstanced(i,h,r,f*o,d),n.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g];n.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function KA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ZA(t,e,n){const i=new WeakMap,s=new Ct;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let I=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",I)};var d=I;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let A=a.attributes.position.count*S,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const D=new Float32Array(A*T*4*f),x=new tg(D,A,T,f);x.type=si,x.needsUpdate=!0;const R=S*4;for(let L=0;L<f;L++){const H=p[L],ie=M[L],oe=E[L],X=A*T*4*L;for(let ne=0;ne<H.count;ne++){const G=ne*R;m===!0&&(s.fromBufferAttribute(H,ne),D[X+G+0]=s.x,D[X+G+1]=s.y,D[X+G+2]=s.z,D[X+G+3]=0),v===!0&&(s.fromBufferAttribute(ie,ne),D[X+G+4]=s.x,D[X+G+5]=s.y,D[X+G+6]=s.z,D[X+G+7]=0),g===!0&&(s.fromBufferAttribute(oe,ne),D[X+G+8]=s.x,D[X+G+9]=s.y,D[X+G+10]=s.z,D[X+G+11]=oe.itemSize===4?s.w:1)}}h={count:f,texture:x,size:new tt(A,T)},i.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function JA(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const jA={[zm]:"LINEAR_TONE_MAPPING",[Hm]:"REINHARD_TONE_MAPPING",[Vm]:"CINEON_TONE_MAPPING",[km]:"ACES_FILMIC_TONE_MAPPING",[Wm]:"AGX_TONE_MAPPING",[Xm]:"NEUTRAL_TONE_MAPPING",[Gm]:"CUSTOM_TONE_MAPPING"};function QA(t,e,n,i,s,r){const o=new ci(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new mr(e,n):void 0}),a=new ci(e,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new mn;l.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new zt([0,2,0,0,2,0],2));const c=new HE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new en(l,c),f=new af(-1,1,1,-1,0,1);let h=null,d=null,m=!1,v,g=null,p=[],M=!1;this.setSize=function(E,S){o.setSize(E,S),a.setSize(E,S);for(let A=0;A<p.length;A++){const T=p[A];T.setSize&&T.setSize(E,S)}},this.setEffects=function(E){p=E,M=p.length>0&&p[0].isRenderPass===!0;const S=o.width,A=o.height;for(let T=0;T<p.length;T++){const D=p[T];D.setSize&&D.setSize(S,A)}},this.begin=function(E,S){if(m||E.toneMapping===li&&p.length===0)return!1;if(g=S,S!==null){const A=S.width,T=S.height;(o.width!==A||o.height!==T)&&this.setSize(A,T)}return M===!1&&E.setRenderTarget(o),v=E.toneMapping,E.toneMapping=li,!0},this.hasRenderPass=function(){return M},this.end=function(E,S){E.toneMapping=v,m=!0;let A=o,T=a;for(let D=0;D<p.length;D++){const x=p[D];if(x.enabled!==!1&&(x.render(E,T,A,S),x.needsSwap!==!1)){const R=A;A=T,T=R}}if(h!==E.outputColorSpace||d!==E.toneMapping){h=E.outputColorSpace,d=E.toneMapping,c.defines={},ut.getTransfer(h)===_t&&(c.defines.SRGB_TRANSFER="");const D=jA[d];D&&(c.defines[D]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,E.setRenderTarget(g),E.render(u,f),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const pg=new pn,pu=new mr(1,1),mg=new tg,gg=new gE,_g=new og,bd=[],Td=[],Ad=new Float32Array(16),wd=new Float32Array(9),Rd=new Float32Array(4);function Er(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=bd[s];if(r===void 0&&(r=new Float32Array(s),bd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function el(t,e){let n=Td[e];n===void 0&&(n=new Int32Array(e),Td[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;Rd.set(i),t.uniformMatrix2fv(this.addr,!1,Rd),Vt(n,i)}}function rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;wd.set(i),t.uniformMatrix3fv(this.addr,!1,wd),Vt(n,i)}}function ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;Ad.set(i),t.uniformMatrix4fv(this.addr,!1,Ad),Vt(n,i)}}function aw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function mw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(pu.compareFunction=n.isReversedDepthBuffer()?ju:Ju,r=pu):r=pg,n.setTexture2D(e||r,s)}function gw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||gg,s)}function _w(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||_g,s)}function vw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||mg,s)}function xw(t){switch(t){case 5126:return ew;case 35664:return tw;case 35665:return nw;case 35666:return iw;case 35674:return sw;case 35675:return rw;case 35676:return ow;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return cw;case 35669:case 35673:return uw;case 5125:return fw;case 36294:return hw;case 36295:return dw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return vw}}function Sw(t,e){t.uniform1fv(this.addr,e)}function yw(t,e){const n=Er(e,this.size,2);t.uniform2fv(this.addr,n)}function Mw(t,e){const n=Er(e,this.size,3);t.uniform3fv(this.addr,n)}function Ew(t,e){const n=Er(e,this.size,4);t.uniform4fv(this.addr,n)}function bw(t,e){const n=Er(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Tw(t,e){const n=Er(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Aw(t,e){const n=Er(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ww(t,e){t.uniform1iv(this.addr,e)}function Rw(t,e){t.uniform2iv(this.addr,e)}function Cw(t,e){t.uniform3iv(this.addr,e)}function Pw(t,e){t.uniform4iv(this.addr,e)}function Dw(t,e){t.uniform1uiv(this.addr,e)}function Lw(t,e){t.uniform2uiv(this.addr,e)}function Iw(t,e){t.uniform3uiv(this.addr,e)}function Nw(t,e){t.uniform4uiv(this.addr,e)}function Uw(t,e,n){const i=this.cache,s=e.length,r=el(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=pu:o=pg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function Ow(t,e,n){const i=this.cache,s=e.length,r=el(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||gg,r[o])}function Fw(t,e,n){const i=this.cache,s=e.length,r=el(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||_g,r[o])}function Bw(t,e,n){const i=this.cache,s=e.length,r=el(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||mg,r[o])}function zw(t){switch(t){case 5126:return Sw;case 35664:return yw;case 35665:return Mw;case 35666:return Ew;case 35674:return bw;case 35675:return Tw;case 35676:return Aw;case 5124:case 35670:return ww;case 35667:case 35671:return Rw;case 35668:case 35672:return Cw;case 35669:case 35673:return Pw;case 5125:return Dw;case 36294:return Lw;case 36295:return Iw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Bw}}class Hw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xw(n.type)}}class Vw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zw(n.type)}}class kw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function Cd(t,e){t.seq.push(e),t.map[e.id]=e}function Gw(t,e,n){const i=t.name,s=i.length;for(ec.lastIndex=0;;){const r=ec.exec(i),o=ec.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cd(n,c===void 0?new Hw(a,t,e):new Vw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new kw(a),Cd(n,f)),n=f}}}class ua{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Gw(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Pd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ww=37297;let Xw=0;function qw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Dd=new nt;function $w(t){ut._getMatrix(Dd,ut.workingColorSpace,t);const e=`mat3( ${Dd.elements.map(n=>n.toFixed(4))} )`;switch(ut.getTransfer(t)){case wa:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ld(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+qw(t.getShaderSource(e),a)}else return r}function Yw(t,e){const n=$w(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Kw={[zm]:"Linear",[Hm]:"Reinhard",[Vm]:"Cineon",[km]:"ACESFilmic",[Wm]:"AgX",[Xm]:"Neutral",[Gm]:"Custom"};function Zw(t,e){const n=Kw[e];return n===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ko=new q;function Jw(){ut.getLuminanceCoefficients(Ko);const t=Ko.x.toFixed(4),e=Ko.y.toFixed(4),n=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Qw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function eR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function zr(t){return t!==""}function Id(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tR=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(t){return t.replace(tR,iR)}const nR=new Map;function iR(t,e){let n=rt[e];if(n===void 0){const i=nR.get(e);if(i!==void 0)n=rt[i],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mu(n)}const sR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(t){return t.replace(sR,rR)}function rR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Od(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const oR={[sa]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function aR(t){return oR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lR={[As]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function cR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":lR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const uR={[pr]:"ENVMAP_MODE_REFRACTION"};function fR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":uR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hR={[Bm]:"ENVMAP_BLENDING_MULTIPLY",[YM]:"ENVMAP_BLENDING_MIX",[KM]:"ENVMAP_BLENDING_ADD"};function dR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":hR[t.combine]||"ENVMAP_BLENDING_NONE"}function pR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function mR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=aR(n),c=cR(n),u=fR(n),f=dR(n),h=pR(n),d=jw(n),m=Qw(r),v=s.createProgram();let g,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(zr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(g=[Od(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[Od(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==li?"#define TONE_MAPPING":"",n.toneMapping!==li?rt.tonemapping_pars_fragment:"",n.toneMapping!==li?Zw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Yw("linearToOutputTexel",n.outputColorSpace),Jw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zr).join(`
`)),o=mu(o),o=Id(o,n),o=Nd(o,n),a=mu(a),a=Id(a,n),a=Nd(a,n),o=Ud(o),a=Ud(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+g+o,S=M+p+a,A=Pd(s,s.VERTEX_SHADER,E),T=Pd(s,s.FRAGMENT_SHADER,S);s.attachShader(v,A),s.attachShader(v,T),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(L){if(t.debug.checkShaderErrors){const H=s.getProgramInfoLog(v)||"",ie=s.getShaderInfoLog(A)||"",oe=s.getShaderInfoLog(T)||"",X=H.trim(),ne=ie.trim(),G=oe.trim();let se=!0,ge=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,A,T);else{const ye=Ld(s,A,"vertex"),xe=Ld(s,T,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ye+`
`+xe)}else X!==""?Je("WebGLProgram: Program Info Log:",X):(ne===""||G==="")&&(ge=!1);ge&&(L.diagnostics={runnable:se,programLog:X,vertexShader:{log:ne,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(A),s.deleteShader(T),x=new ua(s,v),R=eR(s,v)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,Ww)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let gR=0;class _R{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vR(e),n.set(e,i)),i}}class vR{constructor(e){this.id=gR++,this.code=e,this.usedTimes=0}}function xR(t){return t===ws||t===ba||t===Ta}function SR(t,e,n,i,s,r){const o=new ef,a=new _R,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,R,I,L,H,ie){const oe=L.fog,X=H.geometry,ne=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||ne,G),ge=se&&se.mapping===Za?se.image.height:null,ye=d[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Je("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const xe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ee=xe!==void 0?xe.length:0;let Ze=0;X.morphAttributes.position!==void 0&&(Ze=1),X.morphAttributes.normal!==void 0&&(Ze=2),X.morphAttributes.color!==void 0&&(Ze=3);let lt,je,Y,F;if(ye){const Ge=ti[ye];lt=Ge.vertexShader,je=Ge.fragmentShader}else{lt=x.vertexShader,je=x.fragmentShader;const Ge=a.getVertexShaderStage(x),wt=a.getFragmentShaderStage(x);a.update(x,Ge,wt),Y=Ge.id,F=wt.id}const K=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),de=H.isInstancedMesh===!0,Te=H.isBatchedMesh===!0,w=!!x.map,C=!!x.matcap,B=!!se,J=!!x.aoMap,N=!!x.lightMap,j=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,pe=!!x.displacementMap,ve=!!x.emissiveMap,le=!!x.metalnessMap,De=!!x.roughnessMap,P=x.anisotropy>0,He=x.clearcoat>0,Ie=x.dispersion>0,b=x.iridescence>0,_=x.sheen>0,z=x.transmission>0,$=P&&!!x.anisotropyMap,te=He&&!!x.clearcoatMap,Se=He&&!!x.clearcoatNormalMap,be=He&&!!x.clearcoatRoughnessMap,ae=b&&!!x.iridescenceMap,fe=b&&!!x.iridescenceThicknessMap,Me=_&&!!x.sheenColorMap,Z=_&&!!x.sheenRoughnessMap,k=!!x.specularMap,he=!!x.specularColorMap,Ne=!!x.specularIntensityMap,Le=z&&!!x.transmissionMap,We=z&&!!x.thicknessMap,U=!!x.gradientMap,Ae=!!x.alphaMap,ue=x.alphaTest>0,Ce=!!x.alphaHash,Ue=!!x.extensions;let me=li;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(me=t.toneMapping);const Xe={shaderID:ye,shaderType:x.type,shaderName:x.name,vertexShader:lt,fragmentShader:je,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:F,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Te,batchingColor:Te&&H._colorsTexture!==null,instancing:de,instancingColor:de&&H.instanceColor!==null,instancingMorph:de&&H.morphTexture!==null,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:w,matcap:C,envMap:B,envMapMode:B&&se.mapping,envMapCubeUVHeight:ge,aoMap:J,lightMap:N,bumpMap:j,normalMap:_e,displacementMap:pe,emissiveMap:ve,normalMapObjectSpace:_e&&x.normalMapType===jM,normalMapTangentSpace:_e&&x.normalMapType===fu,packedNormalMap:_e&&x.normalMapType===fu&&xR(x.normalMap.format),metalnessMap:le,roughnessMap:De,anisotropy:P,anisotropyMap:$,clearcoat:He,clearcoatMap:te,clearcoatNormalMap:Se,clearcoatRoughnessMap:be,dispersion:Ie,iridescence:b,iridescenceMap:ae,iridescenceThicknessMap:fe,sheen:_,sheenColorMap:Me,sheenRoughnessMap:Z,specularMap:k,specularColorMap:he,specularIntensityMap:Ne,transmission:z,transmissionMap:Le,thicknessMap:We,gradientMap:U,opaque:x.transparent===!1&&x.blending===nr&&x.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ue,alphaHash:Ce,combine:x.combine,mapUv:w&&m(x.map.channel),aoMapUv:J&&m(x.aoMap.channel),lightMapUv:N&&m(x.lightMap.channel),bumpMapUv:j&&m(x.bumpMap.channel),normalMapUv:_e&&m(x.normalMap.channel),displacementMapUv:pe&&m(x.displacementMap.channel),emissiveMapUv:ve&&m(x.emissiveMap.channel),metalnessMapUv:le&&m(x.metalnessMap.channel),roughnessMapUv:De&&m(x.roughnessMap.channel),anisotropyMapUv:$&&m(x.anisotropyMap.channel),clearcoatMapUv:te&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&m(x.sheenRoughnessMap.channel),specularMapUv:k&&m(x.specularMap.channel),specularColorMapUv:he&&m(x.specularColorMap.channel),specularIntensityMapUv:Ne&&m(x.specularIntensityMap.channel),transmissionMapUv:Le&&m(x.transmissionMap.channel),thicknessMapUv:We&&m(x.thicknessMap.channel),alphaMapUv:Ae&&m(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(_e||P),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(w||Ae),fog:!!oe,useFog:x.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ze,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:me,decodeVideoTexture:w&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:ve&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ii,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&x.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function g(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)R.push(I),R.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(R,x),M(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function p(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function M(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function E(x){const R=d[x.type];let I;if(R){const L=ti[R];I=FE.clone(L.uniforms)}else I=x.uniforms;return I}function S(x,R){let I=u.get(R);return I!==void 0?++I.usedTimes:(I=new mR(t,R,x,s),c.push(I),u.set(R,I)),I}function A(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function D(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:E,acquireProgram:S,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:D}}function yR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function MR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Fd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bd(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,v,g,p){let M=t[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:p},t[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=m,M.materialVariant=o(h),M.groupOrder=v,M.renderOrder=h.renderOrder,M.z=g,M.group=p),e++,M}function l(h,d,m,v,g,p){const M=a(h,d,m,v,g,p);m.transmission>0?i.push(M):m.transparent===!0?s.push(M):n.push(M)}function c(h,d,m,v,g,p){const M=a(h,d,m,v,g,p);m.transmission>0?i.unshift(M):m.transparent===!0?s.unshift(M):n.unshift(M)}function u(h,d,m){n.length>1&&n.sort(h||MR),i.length>1&&i.sort(d||Fd),s.length>1&&s.sort(d||Fd),m&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function ER(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Bd,t.set(i,[o])):s>=r.length?(o=new Bd,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function bR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new at};break;case"SpotLight":n={position:new q,direction:new q,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function TR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AR=0;function wR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RR(t){const e=new bR,n=TR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,r=new Rt,o=new Rt;function a(c){let u=0,f=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,M=0,E=0,S=0,A=0,T=0,D=0;c.sort(wR);for(let R=0,I=c.length;R<I;R++){const L=c[R],H=L.color,ie=L.intensity,oe=L.distance;let X=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ws?X=L.shadow.map.texture:X=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=H.r*ie,f+=H.g*ie,h+=H.b*ie;else if(L.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(L.sh.coefficients[ne],ie);D++}else if(L.isDirectionalLight){const ne=e.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,se=n.get(L);se.shadowIntensity=G.intensity,se.shadowBias=G.bias,se.shadowNormalBias=G.normalBias,se.shadowRadius=G.radius,se.shadowMapSize=G.mapSize,i.directionalShadow[d]=se,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=L.shadow.matrix,M++}i.directional[d]=ne,d++}else if(L.isSpotLight){const ne=e.get(L);ne.position.setFromMatrixPosition(L.matrixWorld),ne.color.copy(H).multiplyScalar(ie),ne.distance=oe,ne.coneCos=Math.cos(L.angle),ne.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ne.decay=L.decay,i.spot[v]=ne;const G=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,G.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=G.matrix,L.castShadow){const se=n.get(L);se.shadowIntensity=G.intensity,se.shadowBias=G.bias,se.shadowNormalBias=G.normalBias,se.shadowRadius=G.radius,se.shadowMapSize=G.mapSize,i.spotShadow[v]=se,i.spotShadowMap[v]=X,S++}v++}else if(L.isRectAreaLight){const ne=e.get(L);ne.color.copy(H).multiplyScalar(ie),ne.halfWidth.set(L.width*.5,0,0),ne.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=ne,g++}else if(L.isPointLight){const ne=e.get(L);if(ne.color.copy(L.color).multiplyScalar(L.intensity),ne.distance=L.distance,ne.decay=L.decay,L.castShadow){const G=L.shadow,se=n.get(L);se.shadowIntensity=G.intensity,se.shadowBias=G.bias,se.shadowNormalBias=G.normalBias,se.shadowRadius=G.radius,se.shadowMapSize=G.mapSize,se.shadowCameraNear=G.camera.near,se.shadowCameraFar=G.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=L.shadow.matrix,E++}i.point[m]=ne,m++}else if(L.isHemisphereLight){const ne=e.get(L);ne.skyColor.copy(L.color).multiplyScalar(ie),ne.groundColor.copy(L.groundColor).multiplyScalar(ie),i.hemi[p]=ne,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==d||x.pointLength!==m||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==E||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==D)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,x.directionalLength=d,x.pointLength=m,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=E,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=D,i.version=AR++)}function l(c,u){let f=0,h=0,d=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const E=c[p];if(E.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(E.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(E.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),h++}else if(E.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function zd(t){const e=new RR(t),n=[],i=[],s=[];function r(h){f.camera=h,n.length=0,i.length=0,s.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function CR(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new zd(t),e.set(s,[a])):r>=o.length?(a=new zd(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const PR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
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
}`,LR=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],IR=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Hd=new Rt,Ur=new q,tc=new q;function NR(t,e,n){let i=new nf;const s=new tt,r=new tt,o=new Ct,a=new VE,l=new kE,c={},u=n.maxTextureSize,f={[Qi]:Sn,[Sn]:Qi,[ii]:ii},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:PR,fragmentShader:DR}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new mn;m.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new en(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa;let p=this.type;this.render=function(T,D,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===CM&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sa);const R=t.getRenderTarget(),I=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(wi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const ie=p!==this.type;ie&&D.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(X=>X.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,X=T.length;oe<X;oe++){const ne=T[oe],G=ne.shadow;if(G===void 0){Je("WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const se=G.getFrameExtents();s.multiply(se),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,G.mapSize.y=r.y));const ge=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ge,G.map===null||ie===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Br){if(ne.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ci(s.x,s.y,{format:ws,type:Li,minFilter:rn,magFilter:rn,generateMipmaps:!1}),G.map.texture.name=ne.name+".shadowMap",G.map.depthTexture=new mr(s.x,s.y,si),G.map.depthTexture.name=ne.name+".shadowMapDepth",G.map.depthTexture.format=Ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t}else ne.isPointLight?(G.map=new dg(s.x),G.map.depthTexture=new UE(s.x,hi)):(G.map=new ci(s.x,s.y),G.map.depthTexture=new mr(s.x,s.y,hi)),G.map.depthTexture.name=ne.name+".shadowMap",G.map.depthTexture.format=Ii,this.type===sa?(G.map.depthTexture.compareFunction=ge?ju:Ju,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t);G.camera.updateProjectionMatrix()}const ye=G.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<ye;xe++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,xe),t.clear();else{xe===0&&(t.setRenderTarget(G.map),t.clear());const Ee=G.getViewport(xe);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),H.viewport(o)}if(ne.isPointLight){const Ee=G.camera,Ze=G.matrix,lt=ne.distance||Ee.far;lt!==Ee.far&&(Ee.far=lt,Ee.updateProjectionMatrix()),Ur.setFromMatrixPosition(ne.matrixWorld),Ee.position.copy(Ur),tc.copy(Ee.position),tc.add(LR[xe]),Ee.up.copy(IR[xe]),Ee.lookAt(tc),Ee.updateMatrixWorld(),Ze.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Hd.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Hd,Ee.coordinateSystem,Ee.reversedDepth)}else G.updateMatrices(ne);i=G.getFrustum(),S(D,x,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===Br&&M(G,x),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(R,I,L)};function M(T,D){const x=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(s.x,s.y,{format:ws,type:Li})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(D,null,x,h,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(D,null,x,d,v,null)}function E(T,D,x,R){let I=null;const L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)I=L;else if(I=x.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const H=I.uuid,ie=D.uuid;let oe=c[H];oe===void 0&&(oe={},c[H]=oe);let X=oe[ie];X===void 0&&(X=I.clone(),oe[ie]=X,D.addEventListener("dispose",A)),I=X}if(I.visible=D.visible,I.wireframe=D.wireframe,R===Br?I.side=D.shadowSide!==null?D.shadowSide:D.side:I.side=D.shadowSide!==null?D.shadowSide:f[D.side],I.alphaMap=D.alphaMap,I.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,I.map=D.map,I.clipShadows=D.clipShadows,I.clippingPlanes=D.clippingPlanes,I.clipIntersection=D.clipIntersection,I.displacementMap=D.displacementMap,I.displacementScale=D.displacementScale,I.displacementBias=D.displacementBias,I.wireframeLinewidth=D.wireframeLinewidth,I.linewidth=D.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const H=t.properties.get(I);H.light=x}return I}function S(T,D,x,R,I){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Br)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const ie=e.update(T),oe=T.material;if(Array.isArray(oe)){const X=ie.groups;for(let ne=0,G=X.length;ne<G;ne++){const se=X[ne],ge=oe[se.materialIndex];if(ge&&ge.visible){const ye=E(T,ge,R,I);T.onBeforeShadow(t,T,D,x,ie,ye,se),t.renderBufferDirect(x,null,ie,ye,T,se),T.onAfterShadow(t,T,D,x,ie,ye,se)}}}else if(oe.visible){const X=E(T,oe,R,I);T.onBeforeShadow(t,T,D,x,ie,X,null),t.renderBufferDirect(x,null,ie,X,T,null),T.onAfterShadow(t,T,D,x,ie,X,null)}}const H=T.children;for(let ie=0,oe=H.length;ie<oe;ie++)S(H[ie],D,x,R,I)}function A(T){T.target.removeEventListener("dispose",A);for(const x in c){const R=c[x],I=T.target.uuid;I in R&&(R[I].dispose(),delete R[I])}}}function UR(t,e){function n(){let U=!1;const Ae=new Ct;let ue=null;const Ce=new Ct(0,0,0,0);return{setMask:function(Ue){ue!==Ue&&!U&&(t.colorMask(Ue,Ue,Ue,Ue),ue=Ue)},setLocked:function(Ue){U=Ue},setClear:function(Ue,me,Xe,Ge,wt){wt===!0&&(Ue*=Ge,me*=Ge,Xe*=Ge),Ae.set(Ue,me,Xe,Ge),Ce.equals(Ae)===!1&&(t.clearColor(Ue,me,Xe,Ge),Ce.copy(Ae))},reset:function(){U=!1,ue=null,Ce.set(-1,0,0,0)}}}function i(){let U=!1,Ae=!1,ue=null,Ce=null,Ue=null;return{setReversed:function(me){if(Ae!==me){const Xe=e.get("EXT_clip_control");me?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=me;const Ge=Ue;Ue=null,this.setClear(Ge)}},getReversed:function(){return Ae},setTest:function(me){me?K(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(me){ue!==me&&!U&&(t.depthMask(me),ue=me)},setFunc:function(me){if(Ae&&(me=lE[me]),Ce!==me){switch(me){case Ac:t.depthFunc(t.NEVER);break;case wc:t.depthFunc(t.ALWAYS);break;case Rc:t.depthFunc(t.LESS);break;case dr:t.depthFunc(t.LEQUAL);break;case Cc:t.depthFunc(t.EQUAL);break;case Pc:t.depthFunc(t.GEQUAL);break;case Dc:t.depthFunc(t.GREATER);break;case Lc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ce=me}},setLocked:function(me){U=me},setClear:function(me){Ue!==me&&(Ue=me,Ae&&(me=1-me),t.clearDepth(me))},reset:function(){U=!1,ue=null,Ce=null,Ue=null,Ae=!1}}}function s(){let U=!1,Ae=null,ue=null,Ce=null,Ue=null,me=null,Xe=null,Ge=null,wt=null;return{setTest:function(Ke){U||(Ke?K(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ke){Ae!==Ke&&!U&&(t.stencilMask(Ke),Ae=Ke)},setFunc:function(Ke,qn,$n){(ue!==Ke||Ce!==qn||Ue!==$n)&&(t.stencilFunc(Ke,qn,$n),ue=Ke,Ce=qn,Ue=$n)},setOp:function(Ke,qn,$n){(me!==Ke||Xe!==qn||Ge!==$n)&&(t.stencilOp(Ke,qn,$n),me=Ke,Xe=qn,Ge=$n)},setLocked:function(Ke){U=Ke},setClear:function(Ke){wt!==Ke&&(t.clearStencil(Ke),wt=Ke)},reset:function(){U=!1,Ae=null,ue=null,Ce=null,Ue=null,me=null,Xe=null,Ge=null,wt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,m=[],v=null,g=!1,p=null,M=null,E=null,S=null,A=null,T=null,D=null,x=new at(0,0,0),R=0,I=!1,L=null,H=null,ie=null,oe=null,X=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,se=0;const ge=t.getParameter(t.VERSION);ge.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ge)[1]),G=se>=1):ge.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),G=se>=2);let ye=null,xe={};const Ee=t.getParameter(t.SCISSOR_BOX),Ze=t.getParameter(t.VIEWPORT),lt=new Ct().fromArray(Ee),je=new Ct().fromArray(Ze);function Y(U,Ae,ue,Ce){const Ue=new Uint8Array(4),me=t.createTexture();t.bindTexture(U,me),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<ue;Xe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Ue):t.texImage2D(Ae+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ue);return me}const F={};F[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),F[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),F[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(t.DEPTH_TEST),o.setFunc(dr),j(!1),_e(Uh),K(t.CULL_FACE),J(wi);function K(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function ce(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function de(U,Ae){return h[U]!==Ae?(t.bindFramebuffer(U,Ae),h[U]=Ae,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Ae),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Te(U,Ae){let ue=m,Ce=!1;if(U){ue=d.get(Ae),ue===void 0&&(ue=[],d.set(Ae,ue));const Ue=U.textures;if(ue.length!==Ue.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Xe=Ue.length;me<Xe;me++)ue[me]=t.COLOR_ATTACHMENT0+me;ue.length=Ue.length,Ce=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,Ce=!0);Ce&&t.drawBuffers(ue)}function w(U){return v!==U?(t.useProgram(U),v=U,!0):!1}const C={[hs]:t.FUNC_ADD,[DM]:t.FUNC_SUBTRACT,[LM]:t.FUNC_REVERSE_SUBTRACT};C[IM]=t.MIN,C[NM]=t.MAX;const B={[UM]:t.ZERO,[OM]:t.ONE,[FM]:t.SRC_COLOR,[bc]:t.SRC_ALPHA,[GM]:t.SRC_ALPHA_SATURATE,[VM]:t.DST_COLOR,[zM]:t.DST_ALPHA,[BM]:t.ONE_MINUS_SRC_COLOR,[Tc]:t.ONE_MINUS_SRC_ALPHA,[kM]:t.ONE_MINUS_DST_COLOR,[HM]:t.ONE_MINUS_DST_ALPHA,[WM]:t.CONSTANT_COLOR,[XM]:t.ONE_MINUS_CONSTANT_COLOR,[qM]:t.CONSTANT_ALPHA,[$M]:t.ONE_MINUS_CONSTANT_ALPHA};function J(U,Ae,ue,Ce,Ue,me,Xe,Ge,wt,Ke){if(U===wi){g===!0&&(ce(t.BLEND),g=!1);return}if(g===!1&&(K(t.BLEND),g=!0),U!==PM){if(U!==p||Ke!==I){if((M!==hs||A!==hs)&&(t.blendEquation(t.FUNC_ADD),M=hs,A=hs),Ke)switch(U){case nr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Oh:t.blendFunc(t.ONE,t.ONE);break;case Fh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",U);break}else switch(U){case nr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Oh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Fh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",U);break}E=null,S=null,T=null,D=null,x.set(0,0,0),R=0,p=U,I=Ke}return}Ue=Ue||Ae,me=me||ue,Xe=Xe||Ce,(Ae!==M||Ue!==A)&&(t.blendEquationSeparate(C[Ae],C[Ue]),M=Ae,A=Ue),(ue!==E||Ce!==S||me!==T||Xe!==D)&&(t.blendFuncSeparate(B[ue],B[Ce],B[me],B[Xe]),E=ue,S=Ce,T=me,D=Xe),(Ge.equals(x)===!1||wt!==R)&&(t.blendColor(Ge.r,Ge.g,Ge.b,wt),x.copy(Ge),R=wt),p=U,I=!1}function N(U,Ae){U.side===ii?ce(t.CULL_FACE):K(t.CULL_FACE);let ue=U.side===Sn;Ae&&(ue=!ue),j(ue),U.blending===nr&&U.transparent===!1?J(wi):J(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ce=U.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ve(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function j(U){L!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),L=U)}function _e(U){U!==wM?(K(t.CULL_FACE),U!==H&&(U===Uh?t.cullFace(t.BACK):U===RM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),H=U}function pe(U){U!==ie&&(G&&t.lineWidth(U),ie=U)}function ve(U,Ae,ue){U?(K(t.POLYGON_OFFSET_FILL),(oe!==Ae||X!==ue)&&(oe=Ae,X=ue,o.getReversed()&&(Ae=-Ae),t.polygonOffset(Ae,ue))):ce(t.POLYGON_OFFSET_FILL)}function le(U){U?K(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function De(U){U===void 0&&(U=t.TEXTURE0+ne-1),ye!==U&&(t.activeTexture(U),ye=U)}function P(U,Ae,ue){ue===void 0&&(ye===null?ue=t.TEXTURE0+ne-1:ue=ye);let Ce=xe[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},xe[ue]=Ce),(Ce.type!==U||Ce.texture!==Ae)&&(ye!==ue&&(t.activeTexture(ue),ye=ue),t.bindTexture(U,Ae||F[U]),Ce.type=U,Ce.texture=Ae)}function He(){const U=xe[ye];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ie(){try{t.compressedTexImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function _(){try{t.texSubImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function z(){try{t.texSubImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function Se(){try{t.texStorage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function be(){try{t.texStorage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function ae(){try{t.texImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function fe(){try{t.texImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function Me(U){return f[U]!==void 0?f[U]:t.getParameter(U)}function Z(U,Ae){f[U]!==Ae&&(t.pixelStorei(U,Ae),f[U]=Ae)}function k(U){lt.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),lt.copy(U))}function he(U){je.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),je.copy(U))}function Ne(U,Ae){let ue=c.get(Ae);ue===void 0&&(ue=new WeakMap,c.set(Ae,ue));let Ce=ue.get(U);Ce===void 0&&(Ce=t.getUniformBlockIndex(Ae,U.name),ue.set(U,Ce))}function Le(U,Ae){const Ce=c.get(Ae).get(U);l.get(Ae)!==Ce&&(t.uniformBlockBinding(Ae,Ce,U.__bindingPointIndex),l.set(Ae,Ce))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},ye=null,xe={},h={},d=new WeakMap,m=[],v=null,g=!1,p=null,M=null,E=null,S=null,A=null,T=null,D=null,x=new at(0,0,0),R=0,I=!1,L=null,H=null,ie=null,oe=null,X=null,lt.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:ce,bindFramebuffer:de,drawBuffers:Te,useProgram:w,setBlending:J,setMaterial:N,setFlipSided:j,setCullFace:_e,setLineWidth:pe,setPolygonOffset:ve,setScissorTest:le,activeTexture:De,bindTexture:P,unbindTexture:He,compressedTexImage2D:Ie,compressedTexImage3D:b,texImage2D:ae,texImage3D:fe,pixelStorei:Z,getParameter:Me,updateUBOMapping:Ne,uniformBlockBinding:Le,texStorage2D:Se,texStorage3D:be,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:$,compressedTexSubImage3D:te,scissor:k,viewport:he,reset:We}}function OR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,_){return m?new OffscreenCanvas(b,_):Ra("canvas")}function g(b,_,z){let $=1;const te=Ie(b);if((te.width>z||te.height>z)&&($=z/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Se=Math.floor($*te.width),be=Math.floor($*te.height);h===void 0&&(h=v(Se,be));const ae=_?v(Se,be):h;return ae.width=Se,ae.height=be,ae.getContext("2d").drawImage(b,0,0,Se,be),Je("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Se+"x"+be+")."),ae}else return"data"in b&&Je("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function p(b){return b.generateMipmaps}function M(b){t.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(b,_,z,$,te,Se=!1){if(b!==null){if(t[b]!==void 0)return t[b];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let be;$&&(be=e.get("EXT_texture_norm16"),be||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=_;if(_===t.RED&&(z===t.FLOAT&&(ae=t.R32F),z===t.HALF_FLOAT&&(ae=t.R16F),z===t.UNSIGNED_BYTE&&(ae=t.R8),z===t.UNSIGNED_SHORT&&be&&(ae=be.R16_EXT),z===t.SHORT&&be&&(ae=be.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ae=t.R8UI),z===t.UNSIGNED_SHORT&&(ae=t.R16UI),z===t.UNSIGNED_INT&&(ae=t.R32UI),z===t.BYTE&&(ae=t.R8I),z===t.SHORT&&(ae=t.R16I),z===t.INT&&(ae=t.R32I)),_===t.RG&&(z===t.FLOAT&&(ae=t.RG32F),z===t.HALF_FLOAT&&(ae=t.RG16F),z===t.UNSIGNED_BYTE&&(ae=t.RG8),z===t.UNSIGNED_SHORT&&be&&(ae=be.RG16_EXT),z===t.SHORT&&be&&(ae=be.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(ae=t.RG8UI),z===t.UNSIGNED_SHORT&&(ae=t.RG16UI),z===t.UNSIGNED_INT&&(ae=t.RG32UI),z===t.BYTE&&(ae=t.RG8I),z===t.SHORT&&(ae=t.RG16I),z===t.INT&&(ae=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(ae=t.RGB8UI),z===t.UNSIGNED_SHORT&&(ae=t.RGB16UI),z===t.UNSIGNED_INT&&(ae=t.RGB32UI),z===t.BYTE&&(ae=t.RGB8I),z===t.SHORT&&(ae=t.RGB16I),z===t.INT&&(ae=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(ae=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(ae=t.RGBA16UI),z===t.UNSIGNED_INT&&(ae=t.RGBA32UI),z===t.BYTE&&(ae=t.RGBA8I),z===t.SHORT&&(ae=t.RGBA16I),z===t.INT&&(ae=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&be&&(ae=be.RGB16_EXT),z===t.SHORT&&be&&(ae=be.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(ae=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(ae=t.R11F_G11F_B10F)),_===t.RGBA){const fe=Se?wa:ut.getTransfer(te);z===t.FLOAT&&(ae=t.RGBA32F),z===t.HALF_FLOAT&&(ae=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ae=fe===_t?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&be&&(ae=be.RGBA16_EXT),z===t.SHORT&&be&&(ae=be.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function A(b,_){let z;return b?_===null||_===hi||_===so?z=t.DEPTH24_STENCIL8:_===si?z=t.DEPTH32F_STENCIL8:_===io&&(z=t.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hi||_===so?z=t.DEPTH_COMPONENT24:_===si?z=t.DEPTH_COMPONENT32F:_===io&&(z=t.DEPTH_COMPONENT16),z}function T(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==$t&&b.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function D(b){const _=b.target;_.removeEventListener("dispose",D),R(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(b){const _=b.target;_.removeEventListener("dispose",x),L(_)}function R(b){const _=i.get(b);if(_.__webglInit===void 0)return;const z=b.source,$=d.get(z);if($){const te=$[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(b),Object.keys($).length===0&&d.delete(z)}i.remove(b)}function I(b){const _=i.get(b);t.deleteTexture(_.__webglTexture);const z=b.source,$=d.get(z);delete $[_.__cacheKey],o.memory.textures--}function L(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let te=0;te<_.__webglFramebuffer[$].length;te++)t.deleteFramebuffer(_.__webglFramebuffer[$][te]);else t.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)t.deleteFramebuffer(_.__webglFramebuffer[$]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=b.textures;for(let $=0,te=z.length;$<te;$++){const Se=i.get(z[$]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(z[$])}i.remove(b)}let H=0;function ie(){H=0}function oe(){return H}function X(b){H=b}function ne(){const b=H;return b>=s.maxTextures&&Je("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),H+=1,b}function G(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function se(b,_){const z=i.get(b);if(b.isVideoTexture&&P(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&z.__version!==b.version){const $=b.image;if($===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,b,_);return}}else b.isExternalTexture&&(z.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function ge(b,_){const z=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){ce(z,b,_);return}else b.isExternalTexture&&(z.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function ye(b,_){const z=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){ce(z,b,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function xe(b,_){const z=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&z.__version!==b.version){de(z,b,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const Ee={[Ic]:t.REPEAT,[Ti]:t.CLAMP_TO_EDGE,[Nc]:t.MIRRORED_REPEAT},Ze={[$t]:t.NEAREST,[ZM]:t.NEAREST_MIPMAP_NEAREST,[To]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[bl]:t.LINEAR_MIPMAP_NEAREST,[_s]:t.LINEAR_MIPMAP_LINEAR},lt={[QM]:t.NEVER,[sE]:t.ALWAYS,[eE]:t.LESS,[Ju]:t.LEQUAL,[tE]:t.EQUAL,[ju]:t.GEQUAL,[nE]:t.GREATER,[iE]:t.NOTEQUAL};function je(b,_){if(_.type===si&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===bl||_.magFilter===To||_.magFilter===_s||_.minFilter===rn||_.minFilter===bl||_.minFilter===To||_.minFilter===_s)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Ee[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Ee[_.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Ee[_.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Ze[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Ze[_.minFilter]),_.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,lt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$t||_.minFilter!==To&&_.minFilter!==_s||_.type===si&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Y(b,_){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",D));const $=_.source;let te=d.get($);te===void 0&&(te={},d.set($,te));const Se=G(_);if(Se!==b.__cacheKey){te[Se]===void 0&&(te[Se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[Se].usedTimes++;const be=te[b.__cacheKey];be!==void 0&&(te[b.__cacheKey].usedTimes--,be.usedTimes===0&&I(_)),b.__cacheKey=Se,b.__webglTexture=te[Se].texture}return z}function F(b,_,z){return Math.floor(Math.floor(b/z)/_)}function K(b,_,z,$){const Se=b.updateRanges;if(Se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,$,_.data);else{Se.sort((Z,k)=>Z.start-k.start);let be=0;for(let Z=1;Z<Se.length;Z++){const k=Se[be],he=Se[Z],Ne=k.start+k.count,Le=F(he.start,_.width,4),We=F(k.start,_.width,4);he.start<=Ne+1&&Le===We&&F(he.start+he.count-1,_.width,4)===Le?k.count=Math.max(k.count,he.start+he.count-k.start):(++be,Se[be]=he)}Se.length=be+1;const ae=n.getParameter(t.UNPACK_ROW_LENGTH),fe=n.getParameter(t.UNPACK_SKIP_PIXELS),Me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Z=0,k=Se.length;Z<k;Z++){const he=Se[Z],Ne=Math.floor(he.start/4),Le=Math.ceil(he.count/4),We=Ne%_.width,U=Math.floor(Ne/_.width),Ae=Le,ue=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,We,U,Ae,ue,z,$,_.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ae),n.pixelStorei(t.UNPACK_SKIP_PIXELS,fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,Me)}}function ce(b,_,z){let $=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=t.TEXTURE_3D);const te=Y(b,_),Se=_.source;n.bindTexture($,b.__webglTexture,t.TEXTURE0+z);const be=i.get(Se);if(Se.version!==be.__version||te===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ue=ut.getPrimaries(ut.workingColorSpace),Ce=_.colorSpace===Ki?null:ut.getPrimaries(_.colorSpace),Ue=_.colorSpace===Ki||ue===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let fe=g(_.image,!1,s.maxTextureSize);fe=He(_,fe);const Me=r.convert(_.format,_.colorSpace),Z=r.convert(_.type);let k=S(_.internalFormat,Me,Z,_.normalized,_.colorSpace,_.isVideoTexture);je($,_);let he;const Ne=_.mipmaps,Le=_.isVideoTexture!==!0,We=be.__version===void 0||te===!0,U=Se.dataReady,Ae=T(_,fe);if(_.isDepthTexture)k=A(_.format===vs,_.type),We&&(Le?n.texStorage2D(t.TEXTURE_2D,1,k,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,k,fe.width,fe.height,0,Me,Z,null));else if(_.isDataTexture)if(Ne.length>0){Le&&We&&n.texStorage2D(t.TEXTURE_2D,Ae,k,Ne[0].width,Ne[0].height);for(let ue=0,Ce=Ne.length;ue<Ce;ue++)he=Ne[ue],Le?U&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,he.width,he.height,Me,Z,he.data):n.texImage2D(t.TEXTURE_2D,ue,k,he.width,he.height,0,Me,Z,he.data);_.generateMipmaps=!1}else Le?(We&&n.texStorage2D(t.TEXTURE_2D,Ae,k,fe.width,fe.height),U&&K(_,fe,Me,Z)):n.texImage2D(t.TEXTURE_2D,0,k,fe.width,fe.height,0,Me,Z,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,k,Ne[0].width,Ne[0].height,fe.depth);for(let ue=0,Ce=Ne.length;ue<Ce;ue++)if(he=Ne[ue],_.format!==Bn)if(Me!==null)if(Le){if(U)if(_.layerUpdates.size>0){const Ue=_d(he.width,he.height,_.format,_.type);for(const me of _.layerUpdates){const Xe=he.data.subarray(me*Ue/he.data.BYTES_PER_ELEMENT,(me+1)*Ue/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,me,he.width,he.height,1,Me,Xe)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,he.width,he.height,fe.depth,Me,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,k,he.width,he.height,fe.depth,0,he.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,he.width,he.height,fe.depth,Me,Z,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,k,he.width,he.height,fe.depth,0,Me,Z,he.data)}else{Le&&We&&n.texStorage2D(t.TEXTURE_2D,Ae,k,Ne[0].width,Ne[0].height);for(let ue=0,Ce=Ne.length;ue<Ce;ue++)he=Ne[ue],_.format!==Bn?Me!==null?Le?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,he.width,he.height,Me,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,k,he.width,he.height,0,he.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?U&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,he.width,he.height,Me,Z,he.data):n.texImage2D(t.TEXTURE_2D,ue,k,he.width,he.height,0,Me,Z,he.data)}else if(_.isDataArrayTexture)if(Le){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,k,fe.width,fe.height,fe.depth),U)if(_.layerUpdates.size>0){const ue=_d(fe.width,fe.height,_.format,_.type);for(const Ce of _.layerUpdates){const Ue=fe.data.subarray(Ce*ue/fe.data.BYTES_PER_ELEMENT,(Ce+1)*ue/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ce,fe.width,fe.height,1,Me,Z,Ue)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Me,Z,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,k,fe.width,fe.height,fe.depth,0,Me,Z,fe.data);else if(_.isData3DTexture)Le?(We&&n.texStorage3D(t.TEXTURE_3D,Ae,k,fe.width,fe.height,fe.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Me,Z,fe.data)):n.texImage3D(t.TEXTURE_3D,0,k,fe.width,fe.height,fe.depth,0,Me,Z,fe.data);else if(_.isFramebufferTexture){if(We)if(Le)n.texStorage2D(t.TEXTURE_2D,Ae,k,fe.width,fe.height);else{let ue=fe.width,Ce=fe.height;for(let Ue=0;Ue<Ae;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,k,ue,Ce,0,Me,Z,null),ue>>=1,Ce>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ue=t.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),fe.parentNode!==ue){ue.appendChild(fe),f.add(_),ue.onpaint=Ce=>{const Ue=Ce.changedElements;for(const me of f)Ue.includes(me.image)&&(me.needsUpdate=!0)},ue.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,fe);else{const Ue=t.RGBA,me=t.RGBA,Xe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ue,me,Xe,fe)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Le&&We){const ue=Ie(Ne[0]);n.texStorage2D(t.TEXTURE_2D,Ae,k,ue.width,ue.height)}for(let ue=0,Ce=Ne.length;ue<Ce;ue++)he=Ne[ue],Le?U&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Me,Z,he):n.texImage2D(t.TEXTURE_2D,ue,k,Me,Z,he);_.generateMipmaps=!1}else if(Le){if(We){const ue=Ie(fe);n.texStorage2D(t.TEXTURE_2D,Ae,k,ue.width,ue.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Z,fe)}else n.texImage2D(t.TEXTURE_2D,0,k,Me,Z,fe);p(_)&&M($),be.__version=Se.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function de(b,_,z){if(_.image.length!==6)return;const $=Y(b,_),te=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+z);const Se=i.get(te);if(te.version!==Se.__version||$===!0){n.activeTexture(t.TEXTURE0+z);const be=ut.getPrimaries(ut.workingColorSpace),ae=_.colorSpace===Ki?null:ut.getPrimaries(_.colorSpace),fe=_.colorSpace===Ki||be===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,Z=_.image[0]&&_.image[0].isDataTexture,k=[];for(let me=0;me<6;me++)!Me&&!Z?k[me]=g(_.image[me],!0,s.maxCubemapSize):k[me]=Z?_.image[me].image:_.image[me],k[me]=He(_,k[me]);const he=k[0],Ne=r.convert(_.format,_.colorSpace),Le=r.convert(_.type),We=S(_.internalFormat,Ne,Le,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,Ae=Se.__version===void 0||$===!0,ue=te.dataReady;let Ce=T(_,he);je(t.TEXTURE_CUBE_MAP,_);let Ue;if(Me){U&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,We,he.width,he.height);for(let me=0;me<6;me++){Ue=k[me].mipmaps;for(let Xe=0;Xe<Ue.length;Xe++){const Ge=Ue[Xe];_.format!==Bn?Ne!==null?U?ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Xe,0,0,Ge.width,Ge.height,Ne,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Xe,We,Ge.width,Ge.height,0,Ge.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Xe,0,0,Ge.width,Ge.height,Ne,Le,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Xe,We,Ge.width,Ge.height,0,Ne,Le,Ge.data)}}}else{if(Ue=_.mipmaps,U&&Ae){Ue.length>0&&Ce++;const me=Ie(k[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,We,me.width,me.height)}for(let me=0;me<6;me++)if(Z){U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,k[me].width,k[me].height,Ne,Le,k[me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,We,k[me].width,k[me].height,0,Ne,Le,k[me].data);for(let Xe=0;Xe<Ue.length;Xe++){const wt=Ue[Xe].image[me].image;U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Xe+1,0,0,wt.width,wt.height,Ne,Le,wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Xe+1,We,wt.width,wt.height,0,Ne,Le,wt.data)}}else{U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ne,Le,k[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,We,Ne,Le,k[me]);for(let Xe=0;Xe<Ue.length;Xe++){const Ge=Ue[Xe];U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Xe+1,0,0,Ne,Le,Ge.image[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Xe+1,We,Ne,Le,Ge.image[me])}}}p(_)&&M(t.TEXTURE_CUBE_MAP),Se.__version=te.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Te(b,_,z,$,te,Se){const be=r.convert(z.format,z.colorSpace),ae=r.convert(z.type),fe=S(z.internalFormat,be,ae,z.normalized,z.colorSpace),Me=i.get(_),Z=i.get(z);if(Z.__renderTarget=_,!Me.__hasExternalTextures){const k=Math.max(1,_.width>>Se),he=Math.max(1,_.height>>Se);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Se,fe,k,he,_.depth,0,be,ae,null):n.texImage2D(te,Se,fe,k,he,0,be,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),De(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,te,Z.__webglTexture,0,le(_)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,te,Z.__webglTexture,Se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(b,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer){const $=_.depthTexture,te=$&&$.isDepthTexture?$.type:null,Se=A(_.stencilBuffer,te),be=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;De(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le(_),Se,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,le(_),Se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Se,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,b)}else{const $=_.textures;for(let te=0;te<$.length;te++){const Se=$[te],be=r.convert(Se.format,Se.colorSpace),ae=r.convert(Se.type),fe=S(Se.internalFormat,be,ae,Se.normalized,Se.colorSpace);De(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le(_),fe,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,le(_),fe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,fe,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function C(b,_,z){const $=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=i.get(_.depthTexture);if(te.__renderTarget=_,(!te.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(te.__webglInit===void 0&&(te.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),je(t.TEXTURE_CUBE_MAP,_.depthTexture);const Me=r.convert(_.depthTexture.format),Z=r.convert(_.depthTexture.type);let k;_.depthTexture.format===Ii?k=t.DEPTH_COMPONENT24:_.depthTexture.format===vs&&(k=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,k,_.width,_.height,0,Me,Z,null)}}else se(_.depthTexture,0);const Se=te.__webglTexture,be=le(_),ae=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,fe=_.depthTexture.format===vs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ii)De(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ae,Se,0,be):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ae,Se,0);else if(_.depthTexture.format===vs)De(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ae,Se,0,be):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ae,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function B(b){const _=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=$}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let $=0;$<6;$++)C(_.__webglFramebuffer[$],b,$);else{const $=b.texture.mipmaps;$&&$.length>0?C(_.__webglFramebuffer[0],b,0):C(_.__webglFramebuffer,b,0)}else if(z){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=t.createRenderbuffer(),w(_.__webglDepthbuffer[$],b,!1);else{const te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=_.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Se)}}else{const $=b.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),w(_.__webglDepthbuffer,b,!1);else{const te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function J(b,_,z){const $=i.get(b);_!==void 0&&Te($.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&B(b)}function N(b){const _=b.texture,z=i.get(b),$=i.get(_);b.addEventListener("dispose",x);const te=b.textures,Se=b.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=_.version,o.memory.textures++),Se){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let fe=0;fe<_.mipmaps.length;fe++)z.__webglFramebuffer[ae][fe]=t.createFramebuffer()}else z.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)z.__webglFramebuffer[ae]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(be)for(let ae=0,fe=te.length;ae<fe;ae++){const Me=i.get(te[ae]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&De(b)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<te.length;ae++){const fe=te[ae];z.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);const Me=r.convert(fe.format,fe.colorSpace),Z=r.convert(fe.type),k=S(fe.internalFormat,Me,Z,fe.normalized,fe.colorSpace,b.isXRRenderTarget===!0),he=le(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,k,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),w(z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Se){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),je(t.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)Te(z.__webglFramebuffer[ae][fe],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else Te(z.__webglFramebuffer[ae],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(_)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let ae=0,fe=te.length;ae<fe;ae++){const Me=te[ae],Z=i.get(Me);let k=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(k=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(k,Z.__webglTexture),je(k,Me),Te(z.__webglFramebuffer,b,Me,t.COLOR_ATTACHMENT0+ae,k,0),p(Me)&&M(k)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,$.__webglTexture),je(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)Te(z.__webglFramebuffer[fe],b,_,t.COLOR_ATTACHMENT0,ae,fe);else Te(z.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,ae,0);p(_)&&M(ae),n.unbindTexture()}b.depthBuffer&&B(b)}function j(b){const _=b.textures;for(let z=0,$=_.length;z<$;z++){const te=_[z];if(p(te)){const Se=E(b),be=i.get(te).__webglTexture;n.bindTexture(Se,be),M(Se),n.unbindTexture()}}}const _e=[],pe=[];function ve(b){if(b.samples>0){if(De(b)===!1){const _=b.textures,z=b.width,$=b.height;let te=t.COLOR_BUFFER_BIT;const Se=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(b),ae=_.length>1;if(ae)for(let Me=0;Me<_.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const fe=b.texture.mipmaps;fe&&fe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Me=0;Me<_.length;Me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const Z=i.get(_[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Z,0)}t.blitFramebuffer(0,0,z,$,0,0,z,$,te,t.NEAREST),l===!0&&(_e.length=0,pe.length=0,_e.push(t.COLOR_ATTACHMENT0+Me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(_e.push(Se),pe.push(Se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let Me=0;Me<_.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const Z=i.get(_[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,Z,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function le(b){return Math.min(s.maxSamples,b.samples)}function De(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function He(b,_){const z=b.colorSpace,$=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==Aa&&z!==Ki&&(ut.getTransfer(z)===_t?($!==Bn||te!==bn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",z)),_}function Ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=ne,this.resetTextureUnits=ie,this.getTextureUnits=oe,this.setTextureUnits=X,this.setTexture2D=se,this.setTexture2DArray=ge,this.setTexture3D=ye,this.setTextureCube=xe,this.rebindTextures=J,this.setupRenderTarget=N,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function FR(t,e){function n(i,s=Ki){let r;const o=ut.getTransfer(s);if(i===bn)return t.UNSIGNED_BYTE;if(i===qu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$u)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Km)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zm)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===$m)return t.BYTE;if(i===Ym)return t.SHORT;if(i===io)return t.UNSIGNED_SHORT;if(i===Xu)return t.INT;if(i===hi)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===Jm)return t.ALPHA;if(i===jm)return t.RGB;if(i===Bn)return t.RGBA;if(i===Ii)return t.DEPTH_COMPONENT;if(i===vs)return t.DEPTH_STENCIL;if(i===Qm)return t.RED;if(i===Yu)return t.RED_INTEGER;if(i===ws)return t.RG;if(i===Ku)return t.RG_INTEGER;if(i===Zu)return t.RGBA_INTEGER;if(i===ra||i===oa||i===aa||i===la)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uc||i===Oc||i===Fc||i===Bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zc||i===Hc||i===Vc||i===kc||i===Gc||i===ba||i===Wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zc||i===Hc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===kc)return r.COMPRESSED_R11_EAC;if(i===Gc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ba)return r.COMPRESSED_RG11_EAC;if(i===Wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xc||i===qc||i===$c||i===Yc||i===Kc||i===Zc||i===Jc||i===jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===su)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===iu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===su)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ru||i===ou||i===au)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ru)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ou)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lu||i===cu||i===Ta||i===uu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const BR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zR=`
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

}`;class HR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ag(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new di({vertexShader:BR,fragmentShader:zR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new en(new _o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VR extends is{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new HR,p={},M=n.getContextAttributes();let E=null,S=null;const A=[],T=[],D=new tt;let x=null;const R=new Pn;R.viewport=new Ct;const I=new Pn;I.viewport=new Ct;const L=[R,I],H=new YE;let ie=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let F=A[Y];return F===void 0&&(F=new Dl,A[Y]=F),F.getTargetRaySpace()},this.getControllerGrip=function(Y){let F=A[Y];return F===void 0&&(F=new Dl,A[Y]=F),F.getGripSpace()},this.getHand=function(Y){let F=A[Y];return F===void 0&&(F=new Dl,A[Y]=F),F.getHandSpace()};function X(Y){const F=T.indexOf(Y.inputSource);if(F===-1)return;const K=A[F];K!==void 0&&(K.update(Y.inputSource,Y.frame,c||o),K.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ne(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",G);for(let Y=0;Y<A.length;Y++){const F=T[Y];F!==null&&(T[Y]=null,A[Y].disconnect(F))}ie=null,oe=null,g.reset();for(const Y in p)delete p[Y];e.setRenderTarget(E),d=null,h=null,f=null,s=null,S=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,ce=null,de=null;M.depth&&(de=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=M.stencil?vs:Ii,ce=M.stencil?so:hi);const Te={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Te),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new ci(h.textureWidth,h.textureHeight,{format:Bn,type:bn,depthTexture:new mr(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const K={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,K),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ci(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(Y){for(let F=0;F<Y.removed.length;F++){const K=Y.removed[F],ce=T.indexOf(K);ce>=0&&(T[ce]=null,A[ce].disconnect(K))}for(let F=0;F<Y.added.length;F++){const K=Y.added[F];let ce=T.indexOf(K);if(ce===-1){for(let Te=0;Te<A.length;Te++)if(Te>=T.length){T.push(K),ce=Te;break}else if(T[Te]===null){T[Te]=K,ce=Te;break}if(ce===-1)break}const de=A[ce];de&&de.connect(K)}}const se=new q,ge=new q;function ye(Y,F,K){se.setFromMatrixPosition(F.matrixWorld),ge.setFromMatrixPosition(K.matrixWorld);const ce=se.distanceTo(ge),de=F.projectionMatrix.elements,Te=K.projectionMatrix.elements,w=de[14]/(de[10]-1),C=de[14]/(de[10]+1),B=(de[9]+1)/de[5],J=(de[9]-1)/de[5],N=(de[8]-1)/de[0],j=(Te[8]+1)/Te[0],_e=w*N,pe=w*j,ve=ce/(-N+j),le=ve*-N;if(F.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(le),Y.translateZ(ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),de[10]===-1)Y.projectionMatrix.copy(F.projectionMatrix),Y.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const De=w+ve,P=C+ve,He=_e-le,Ie=pe+(ce-le),b=B*C/P*De,_=J*C/P*De;Y.projectionMatrix.makePerspective(He,Ie,b,_,De,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xe(Y,F){F===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(F.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let F=Y.near,K=Y.far;g.texture!==null&&(g.depthNear>0&&(F=g.depthNear),g.depthFar>0&&(K=g.depthFar)),H.near=I.near=R.near=F,H.far=I.far=R.far=K,(ie!==H.near||oe!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),ie=H.near,oe=H.far),H.layers.mask=Y.layers.mask|6,R.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;const ce=Y.parent,de=H.cameras;xe(H,ce);for(let Te=0;Te<de.length;Te++)xe(de[Te],ce);de.length===2?ye(H,R,I):H.projectionMatrix.copy(R.projectionMatrix),Ee(Y,H,ce)};function Ee(Y,F,K){K===null?Y.matrix.copy(F.matrixWorld):(Y.matrix.copy(K.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(F.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(F.projectionMatrix),Y.projectionMatrixInverse.copy(F.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=hu*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(Y){return p[Y]};let Ze=null;function lt(Y,F){if(u=F.getViewerPose(c||o),m=F,u!==null){const K=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ce=!1;K.length!==H.cameras.length&&(H.cameras.length=0,ce=!0);for(let C=0;C<K.length;C++){const B=K[C];let J=null;if(d!==null)J=d.getViewport(B);else{const j=f.getViewSubImage(h,B);J=j.viewport,C===0&&(e.setRenderTargetTextures(S,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(S))}let N=L[C];N===void 0&&(N=new Pn,N.layers.enable(C),N.viewport=new Ct,L[C]=N),N.matrix.fromArray(B.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(B.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(J.x,J.y,J.width,J.height),C===0&&(H.matrix.copy(N.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ce===!0&&H.cameras.push(N)}const de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const C=f.getDepthInformation(K[0]);C&&C.isValid&&C.texture&&g.init(C,s.renderState)}if(de&&de.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<K.length;C++){const B=K[C].camera;if(B){let J=p[B];J||(J=new ag,p[B]=J);const N=f.getCameraImage(B);J.sourceTexture=N}}}}for(let K=0;K<A.length;K++){const ce=T[K],de=A[K];ce!==null&&de!==void 0&&de.update(ce,F,c||o)}Ze&&Ze(Y,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),m=null}const je=new fg;je.setAnimationLoop(lt),this.setAnimationLoop=function(Y){Ze=Y},this.dispose=function(){}}}const kR=new Rt,vg=new nt;vg.set(-1,0,0,0,1,0,0,0,1);function GR(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,lg(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,E,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Sn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Sn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),E=M.envMap,S=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(kR.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(vg),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function WR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const T=A.program;i.uniformBlockBinding(S,T)}function c(S,A){let T=s[S.id];T===void 0&&(g(S),T=u(S),s[S.id]=T,S.addEventListener("dispose",M));const D=A.program;i.updateUBOMapping(S,D);const x=e.render.frame;r[S.id]!==x&&(h(S),r[S.id]=x)}function u(S){const A=f();S.__bindingPointIndex=A;const T=t.createBuffer(),D=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,D,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,T),T}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const A=s[S.id],T=S.uniforms,D=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let x=0,R=T.length;x<R;x++){const I=T[x];if(Array.isArray(I))for(let L=0,H=I.length;L<H;L++)d(I[L],x,L,D);else d(I,x,0,D)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(S,A,T,D){if(v(S,A,T,D)===!0){const x=S.__offset,R=S.value;if(Array.isArray(R)){let I=0;for(let L=0;L<R.length;L++){const H=R[L],ie=p(H);m(H,S.__data,I),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(I+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function m(S,A,T){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,T)}function v(S,A,T,D){const x=S.value,R=A+"_"+T;if(D[R]===void 0)return typeof x=="number"||typeof x=="boolean"?D[R]=x:ArrayBuffer.isView(x)?D[R]=x.slice():D[R]=x.clone(),!0;{const I=D[R];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return D[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function g(S){const A=S.uniforms;let T=0;const D=16;for(let R=0,I=A.length;R<I;R++){const L=Array.isArray(A[R])?A[R]:[A[R]];for(let H=0,ie=L.length;H<ie;H++){const oe=L[H],X=Array.isArray(oe.value)?oe.value:[oe.value];for(let ne=0,G=X.length;ne<G;ne++){const se=X[ne],ge=p(se),ye=T%D,xe=ye%ge.boundary,Ee=ye+xe;T+=xe,Ee!==0&&D-Ee<ge.storage&&(T+=D-Ee),oe.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=T,T+=ge.storage}}}const x=T%D;return x>0&&(T+=D-x),S.__size=T,S.__cache={},this}function p(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",S),A}function M(S){const A=S.target;A.removeEventListener("dispose",M);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function E(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}const XR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function qR(){return Jn===null&&(Jn=new PE(XR,16,16,ws,Li),Jn.name="DFG_LUT",Jn.minFilter=rn,Jn.magFilter=rn,Jn.wrapS=Ti,Jn.wrapT=Ti,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class $R{constructor(e={}){const{canvas:n=oE(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=bn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=d,g=new Set([Zu,Ku,Yu]),p=new Set([bn,hi,io,so,qu,$u]),M=new Uint32Array(4),E=new Int32Array(4),S=new q;let A=null,T=null;const D=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let L=!1,H=null,ie=null,oe=null,X=null;this._outputColorSpace=Cn;let ne=0,G=0,se=null,ge=-1,ye=null;const xe=new Ct,Ee=new Ct;let Ze=null;const lt=new at(0);let je=0,Y=n.width,F=n.height,K=1,ce=null,de=null;const Te=new Ct(0,0,Y,F),w=new Ct(0,0,Y,F);let C=!1;const B=new nf;let J=!1,N=!1;const j=new Rt,_e=new q,pe=new Ct,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function De(){return se===null?K:1}let P=i;function He(y,W){return n.getContext(y,W)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wu}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",Ke,!1),n.addEventListener("webglcontextcreationerror",qn,!1),P===null){const W="webgl2";if(P=He(W,y),P===null)throw He(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw ft("WebGLRenderer: "+y.message),y}let Ie,b,_,z,$,te,Se,be,ae,fe,Me,Z,k,he,Ne,Le,We,U,Ae,ue,Ce,Ue,me;function Xe(){Ie=new qA(P),Ie.init(),Ce=new FR(P,Ie),b=new BA(P,Ie,e,Ce),_=new UR(P,Ie),b.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),ie=P.createFramebuffer(),oe=P.createFramebuffer(),X=P.createFramebuffer(),z=new KA(P),$=new yR,te=new OR(P,Ie,_,$,b,Ce,z),Se=new XA(I),be=new QE(P),Ue=new OA(P,be),ae=new $A(P,be,z,Ue),fe=new JA(P,ae,be,Ue,z),U=new ZA(P,b,te),Ne=new zA($),Me=new SR(I,Se,Ie,b,Ue,Ne),Z=new GR(I,$),k=new ER,he=new CR(Ie),We=new UA(I,Se,_,fe,m,l),Le=new NR(I,fe,b),me=new WR(P,z,b,_),Ae=new FA(P,Ie,z),ue=new YA(P,Ie,z),z.programs=Me.programs,I.capabilities=b,I.extensions=Ie,I.properties=$,I.renderLists=k,I.shadowMap=Le,I.state=_,I.info=z}Xe(),v!==bn&&(R=new QA(v,n.width,n.height,a,s,r));const Ge=new VR(I,P);this.xr=Ge,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(Y,F,!1))},this.getSize=function(y){return y.set(Y,F)},this.setSize=function(y,W,re=!0){if(Ge.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,F=W,n.width=Math.floor(y*K),n.height=Math.floor(W*K),re===!0&&(n.style.width=y+"px",n.style.height=W+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,y,W)},this.getDrawingBufferSize=function(y){return y.set(Y*K,F*K).floor()},this.setDrawingBufferSize=function(y,W,re){Y=y,F=W,K=re,n.width=Math.floor(y*re),n.height=Math.floor(W*re),this.setViewport(0,0,y,W)},this.setEffects=function(y){if(v===bn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let W=0;W<y.length;W++)if(y[W].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(xe)},this.getViewport=function(y){return y.copy(Te)},this.setViewport=function(y,W,re,Q){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,W,re,Q),_.viewport(xe.copy(Te).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(w)},this.setScissor=function(y,W,re,Q){y.isVector4?w.set(y.x,y.y,y.z,y.w):w.set(y,W,re,Q),_.scissor(Ee.copy(w).multiplyScalar(K).round())},this.getScissorTest=function(){return C},this.setScissorTest=function(y){_.setScissorTest(C=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(y=!0,W=!0,re=!0){let Q=0;if(y){let ee=!1;if(se!==null){const ze=se.texture.format;ee=g.has(ze)}if(ee){const ze=se.texture.type,ke=p.has(ze),Be=We.getClearColor(),qe=We.getClearAlpha(),$e=Be.r,it=Be.g,ot=Be.b;ke?(M[0]=$e,M[1]=it,M[2]=ot,M[3]=qe,P.clearBufferuiv(P.COLOR,0,M)):(E[0]=$e,E[1]=it,E[2]=ot,E[3]=qe,P.clearBufferiv(P.COLOR,0,E))}else Q|=P.COLOR_BUFFER_BIT}W&&(Q|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(Q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&P.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),H=y},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",qn,!1),We.dispose(),k.dispose(),he.dispose(),$.dispose(),Se.dispose(),fe.dispose(),Ue.dispose(),me.dispose(),Me.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",mf),Ge.removeEventListener("sessionend",gf),ss.stop()};function wt(y){y.preventDefault(),Gh("WebGLRenderer: Context Lost."),L=!0}function Ke(){Gh("WebGLRenderer: Context Restored."),L=!1;const y=z.autoReset,W=Le.enabled,re=Le.autoUpdate,Q=Le.needsUpdate,ee=Le.type;Xe(),z.autoReset=y,Le.enabled=W,Le.autoUpdate=re,Le.needsUpdate=Q,Le.type=ee}function qn(y){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $n(y){const W=y.target;W.removeEventListener("dispose",$n),yg(W)}function yg(y){Mg(y),$.remove(y)}function Mg(y){const W=$.get(y).programs;W!==void 0&&(W.forEach(function(re){Me.releaseProgram(re)}),y.isShaderMaterial&&Me.releaseShaderCache(y))}this.renderBufferDirect=function(y,W,re,Q,ee,ze){W===null&&(W=ve);const ke=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Be=Tg(y,W,re,Q,ee);_.setMaterial(Q,ke);let qe=re.index,$e=1;if(Q.wireframe===!0){if(qe=ae.getWireframeAttribute(re),qe===void 0)return;$e=2}const it=re.drawRange,ot=re.attributes.position;let Ye=it.start*$e,xt=(it.start+it.count)*$e;ze!==null&&(Ye=Math.max(Ye,ze.start*$e),xt=Math.min(xt,(ze.start+ze.count)*$e)),qe!==null?(Ye=Math.max(Ye,0),xt=Math.min(xt,qe.count)):ot!=null&&(Ye=Math.max(Ye,0),xt=Math.min(xt,ot.count));const It=xt-Ye;if(It<0||It===1/0)return;Ue.setup(ee,Q,Be,re,qe);let Pt,yt=Ae;if(qe!==null&&(Pt=be.get(qe),yt=ue,yt.setIndex(Pt)),ee.isMesh)Q.wireframe===!0?(_.setLineWidth(Q.wireframeLinewidth*De()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(ee.isLine){let Kt=Q.linewidth;Kt===void 0&&(Kt=1),_.setLineWidth(Kt*De()),ee.isLineSegments?yt.setMode(P.LINES):ee.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else ee.isPoints?yt.setMode(P.POINTS):ee.isSprite&&yt.setMode(P.TRIANGLES);if(ee.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))yt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Kt=ee._multiDrawStarts,Ve=ee._multiDrawCounts,yn=ee._multiDrawCount,ht=qe?be.get(qe).bytesPerElement:1,An=$.get(Q).currentProgram.getUniforms();for(let Yn=0;Yn<yn;Yn++)An.setValue(P,"_gl_DrawID",Yn),yt.render(Kt[Yn]/ht,Ve[Yn])}else if(ee.isInstancedMesh)yt.renderInstances(Ye,It,ee.count);else if(re.isInstancedBufferGeometry){const Kt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ve=Math.min(re.instanceCount,Kt);yt.renderInstances(Ye,It,Ve)}else yt.render(Ye,It)};function pf(y,W,re){y.transparent===!0&&y.side===ii&&y.forceSinglePass===!1?(y.side=Sn,y.needsUpdate=!0,xo(y,W,re),y.side=Qi,y.needsUpdate=!0,xo(y,W,re),y.side=ii):xo(y,W,re)}this.compile=function(y,W,re=null){re===null&&(re=y),T=he.get(re),T.init(W),x.push(T),re.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),y!==re&&y.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),T.setupLights();const Q=new Set;return y.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const ze=ee.material;if(ze)if(Array.isArray(ze))for(let ke=0;ke<ze.length;ke++){const Be=ze[ke];pf(Be,re,ee),Q.add(Be)}else pf(ze,re,ee),Q.add(ze)}),T=x.pop(),Q},this.compileAsync=function(y,W,re=null){const Q=this.compile(y,W,re);return new Promise(ee=>{function ze(){if(Q.forEach(function(ke){$.get(ke).currentProgram.isReady()&&Q.delete(ke)}),Q.size===0){ee(y);return}setTimeout(ze,10)}Ie.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let tl=null;function Eg(y){tl&&tl(y)}function mf(){ss.stop()}function gf(){ss.start()}const ss=new fg;ss.setAnimationLoop(Eg),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(y){tl=y,Ge.setAnimationLoop(y),y===null?ss.stop():ss.start()},Ge.addEventListener("sessionstart",mf),Ge.addEventListener("sessionend",gf),this.render=function(y,W){if(W!==void 0&&W.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;H!==null&&H.renderStart(y,W);const re=Ge.enabled===!0&&Ge.isPresenting===!0,Q=R!==null&&(se===null||re)&&R.begin(I,se);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(W),W=Ge.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,W,se),T=he.get(y,x.length),T.init(W),T.state.textureUnits=te.getTextureUnits(),x.push(T),j.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),B.setFromProjectionMatrix(j,ri,W.reversedDepth),N=this.localClippingEnabled,J=Ne.init(this.clippingPlanes,N),A=k.get(y,D.length),A.init(),D.push(A),Ge.enabled===!0&&Ge.isPresenting===!0){const ke=I.xr.getDepthSensingMesh();ke!==null&&nl(ke,W,-1/0,I.sortObjects)}nl(y,W,0,I.sortObjects),A.finish(),I.sortObjects===!0&&A.sort(ce,de,W.reversedDepth),le=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,le&&We.addToRenderList(A,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&Ne.beginShadows();const ee=T.state.shadowsArray;if(Le.render(ee,y,W),J===!0&&Ne.endShadows(),(Q&&R.hasRenderPass())===!1){const ke=A.opaque,Be=A.transmissive;if(T.setupLights(),W.isArrayCamera){const qe=W.cameras;if(Be.length>0)for(let $e=0,it=qe.length;$e<it;$e++){const ot=qe[$e];vf(ke,Be,y,ot)}le&&We.render(y);for(let $e=0,it=qe.length;$e<it;$e++){const ot=qe[$e];_f(A,y,ot,ot.viewport)}}else Be.length>0&&vf(ke,Be,y,W),le&&We.render(y),_f(A,y,W)}se!==null&&G===0&&(te.updateMultisampleRenderTarget(se),te.updateRenderTargetMipmap(se)),Q&&R.end(I),y.isScene===!0&&y.onAfterRender(I,y,W),Ue.resetDefaultState(),ge=-1,ye=null,x.pop(),x.length>0?(T=x[x.length-1],te.setTextureUnits(T.state.textureUnits),J===!0&&Ne.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?A=D[D.length-1]:A=null,H!==null&&H.renderEnd()};function nl(y,W,re,Q){if(y.visible===!1)return;if(y.layers.test(W.layers)){if(y.isGroup)re=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(W);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||B.intersectsSprite(y)){Q&&pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(j);const ke=fe.update(y),Be=y.material;Be.visible&&A.push(y,ke,Be,re,pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||B.intersectsObject(y))){const ke=fe.update(y),Be=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),pe.copy(y.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),pe.copy(ke.boundingSphere.center)),pe.applyMatrix4(y.matrixWorld).applyMatrix4(j)),Array.isArray(Be)){const qe=ke.groups;for(let $e=0,it=qe.length;$e<it;$e++){const ot=qe[$e],Ye=Be[ot.materialIndex];Ye&&Ye.visible&&A.push(y,ke,Ye,re,pe.z,ot)}}else Be.visible&&A.push(y,ke,Be,re,pe.z,null)}}const ze=y.children;for(let ke=0,Be=ze.length;ke<Be;ke++)nl(ze[ke],W,re,Q)}function _f(y,W,re,Q){const{opaque:ee,transmissive:ze,transparent:ke}=y;T.setupLightsView(re),J===!0&&Ne.setGlobalState(I.clippingPlanes,re),Q&&_.viewport(xe.copy(Q)),ee.length>0&&vo(ee,W,re),ze.length>0&&vo(ze,W,re),ke.length>0&&vo(ke,W,re),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function vf(y,W,re,Q){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){const Ye=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new ci(1,1,{generateMipmaps:!0,type:Ye?Li:bn,minFilter:_s,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const ze=T.state.transmissionRenderTarget[Q.id],ke=Q.viewport||xe;ze.setSize(ke.z*I.transmissionResolutionScale,ke.w*I.transmissionResolutionScale);const Be=I.getRenderTarget(),qe=I.getActiveCubeFace(),$e=I.getActiveMipmapLevel();I.setRenderTarget(ze),I.getClearColor(lt),je=I.getClearAlpha(),je<1&&I.setClearColor(16777215,.5),I.clear(),le&&We.render(re);const it=I.toneMapping;I.toneMapping=li;const ot=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),J===!0&&Ne.setGlobalState(I.clippingPlanes,Q),vo(y,re,Q),te.updateMultisampleRenderTarget(ze),te.updateRenderTargetMipmap(ze),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let xt=0,It=W.length;xt<It;xt++){const Pt=W[xt],{object:yt,geometry:Kt,material:Ve,group:yn}=Pt;if(Ve.side===ii&&yt.layers.test(Q.layers)){const ht=Ve.side;Ve.side=Sn,Ve.needsUpdate=!0,xf(yt,re,Q,Kt,Ve,yn),Ve.side=ht,Ve.needsUpdate=!0,Ye=!0}}Ye===!0&&(te.updateMultisampleRenderTarget(ze),te.updateRenderTargetMipmap(ze))}I.setRenderTarget(Be,qe,$e),I.setClearColor(lt,je),ot!==void 0&&(Q.viewport=ot),I.toneMapping=it}function vo(y,W,re){const Q=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,ze=y.length;ee<ze;ee++){const ke=y[ee],{object:Be,geometry:qe,group:$e}=ke;let it=ke.material;it.allowOverride===!0&&Q!==null&&(it=Q),Be.layers.test(re.layers)&&xf(Be,W,re,qe,it,$e)}}function xf(y,W,re,Q,ee,ze){y.onBeforeRender(I,W,re,Q,ee,ze),y.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),ee.onBeforeRender(I,W,re,Q,y,ze),ee.transparent===!0&&ee.side===ii&&ee.forceSinglePass===!1?(ee.side=Sn,ee.needsUpdate=!0,I.renderBufferDirect(re,W,Q,ee,y,ze),ee.side=Qi,ee.needsUpdate=!0,I.renderBufferDirect(re,W,Q,ee,y,ze),ee.side=ii):I.renderBufferDirect(re,W,Q,ee,y,ze),y.onAfterRender(I,W,re,Q,ee,ze)}function xo(y,W,re){W.isScene!==!0&&(W=ve);const Q=$.get(y),ee=T.state.lights,ze=T.state.shadowsArray,ke=ee.state.version,Be=Me.getParameters(y,ee.state,ze,W,re,T.state.lightProbeGridArray),qe=Me.getProgramCacheKey(Be);let $e=Q.programs;Q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?W.environment:null,Q.fog=W.fog;const it=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Q.envMap=Se.get(y.envMap||Q.environment,it),Q.envMapRotation=Q.environment!==null&&y.envMap===null?W.environmentRotation:y.envMapRotation,$e===void 0&&(y.addEventListener("dispose",$n),$e=new Map,Q.programs=$e);let ot=$e.get(qe);if(ot!==void 0){if(Q.currentProgram===ot&&Q.lightsStateVersion===ke)return yf(y,Be),ot}else Be.uniforms=Me.getUniforms(y),H!==null&&y.isNodeMaterial&&H.build(y,re,Be),y.onBeforeCompile(Be,I),ot=Me.acquireProgram(Be,qe),$e.set(qe,ot),Q.uniforms=Be.uniforms;const Ye=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ye.clippingPlanes=Ne.uniform),yf(y,Be),Q.needsLights=wg(y),Q.lightsStateVersion=ke,Q.needsLights&&(Ye.ambientLightColor.value=ee.state.ambient,Ye.lightProbe.value=ee.state.probe,Ye.directionalLights.value=ee.state.directional,Ye.directionalLightShadows.value=ee.state.directionalShadow,Ye.spotLights.value=ee.state.spot,Ye.spotLightShadows.value=ee.state.spotShadow,Ye.rectAreaLights.value=ee.state.rectArea,Ye.ltc_1.value=ee.state.rectAreaLTC1,Ye.ltc_2.value=ee.state.rectAreaLTC2,Ye.pointLights.value=ee.state.point,Ye.pointLightShadows.value=ee.state.pointShadow,Ye.hemisphereLights.value=ee.state.hemi,Ye.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ee.state.spotLightMatrix,Ye.spotLightMap.value=ee.state.spotLightMap,Ye.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=T.state.lightProbeGridArray.length>0,Q.currentProgram=ot,Q.uniformsList=null,ot}function Sf(y){if(y.uniformsList===null){const W=y.currentProgram.getUniforms();y.uniformsList=ua.seqWithValue(W.seq,y.uniforms)}return y.uniformsList}function yf(y,W){const re=$.get(y);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function bg(y,W){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(W.matrixWorld);for(let re=0,Q=y.length;re<Q;re++){const ee=y[re];if(ee.texture!==null&&ee.boundingBox.containsPoint(S))return ee}return null}function Tg(y,W,re,Q,ee){W.isScene!==!0&&(W=ve),te.resetTextureUnits();const ze=W.fog,ke=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?W.environment:null,Be=se===null?I.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ut.workingColorSpace,qe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,$e=Se.get(Q.envMap||ke,qe),it=Q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ye=!!re.morphAttributes.position,xt=!!re.morphAttributes.normal,It=!!re.morphAttributes.color;let Pt=li;Q.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Pt=I.toneMapping);const yt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Kt=yt!==void 0?yt.length:0,Ve=$.get(Q),yn=T.state.lights;if(J===!0&&(N===!0||y!==ye)){const Tt=y===ye&&Q.id===ge;Ne.setState(Q,y,Tt)}let ht=!1;Q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==yn.state.version||Ve.outputColorSpace!==Be||ee.isBatchedMesh&&Ve.batching===!1||!ee.isBatchedMesh&&Ve.batching===!0||ee.isBatchedMesh&&Ve.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ve.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ve.instancing===!1||!ee.isInstancedMesh&&Ve.instancing===!0||ee.isSkinnedMesh&&Ve.skinning===!1||!ee.isSkinnedMesh&&Ve.skinning===!0||ee.isInstancedMesh&&Ve.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ve.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ve.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ve.instancingMorph===!1&&ee.morphTexture!==null||Ve.envMap!==$e||Q.fog===!0&&Ve.fog!==ze||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ne.numPlanes||Ve.numIntersection!==Ne.numIntersection)||Ve.vertexAlphas!==it||Ve.vertexTangents!==ot||Ve.morphTargets!==Ye||Ve.morphNormals!==xt||Ve.morphColors!==It||Ve.toneMapping!==Pt||Ve.morphTargetsCount!==Kt||!!Ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Ve.__version=Q.version);let An=Ve.currentProgram;ht===!0&&(An=xo(Q,W,ee),H&&Q.isNodeMaterial&&H.onUpdateProgram(Q,An,Ve));let Yn=!1,Ui=!1,Ps=!1;const Mt=An.getUniforms(),Nt=Ve.uniforms;if(_.useProgram(An.program)&&(Yn=!0,Ui=!0,Ps=!0),Q.id!==ge&&(ge=Q.id,Ui=!0),Ve.needsLights){const Tt=bg(T.state.lightProbeGridArray,ee);Ve.lightProbeGrid!==Tt&&(Ve.lightProbeGrid=Tt,Ui=!0)}if(Yn||ye!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Mt.setValue(P,"projectionMatrix",y.projectionMatrix),Mt.setValue(P,"viewMatrix",y.matrixWorldInverse);const Fi=Mt.map.cameraPosition;Fi!==void 0&&Fi.setValue(P,_e.setFromMatrixPosition(y.matrixWorld)),b.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),ye!==y&&(ye=y,Ui=!0,Ps=!0)}if(Ve.needsLights&&(yn.state.directionalShadowMap.length>0&&Mt.setValue(P,"directionalShadowMap",yn.state.directionalShadowMap,te),yn.state.spotShadowMap.length>0&&Mt.setValue(P,"spotShadowMap",yn.state.spotShadowMap,te),yn.state.pointShadowMap.length>0&&Mt.setValue(P,"pointShadowMap",yn.state.pointShadowMap,te)),ee.isSkinnedMesh){Mt.setOptional(P,ee,"bindMatrix"),Mt.setOptional(P,ee,"bindMatrixInverse");const Tt=ee.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),Mt.setValue(P,"boneTexture",Tt.boneTexture,te))}ee.isBatchedMesh&&(Mt.setOptional(P,ee,"batchingTexture"),Mt.setValue(P,"batchingTexture",ee._matricesTexture,te),Mt.setOptional(P,ee,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",ee._indirectTexture,te),Mt.setOptional(P,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",ee._colorsTexture,te));const Oi=re.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&U.update(ee,re,An),(Ui||Ve.receiveShadow!==ee.receiveShadow)&&(Ve.receiveShadow=ee.receiveShadow,Mt.setValue(P,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&W.environment!==null&&(Nt.envMapIntensity.value=W.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=qR()),Ui){if(Mt.setValue(P,"toneMappingExposure",I.toneMappingExposure),Ve.needsLights&&Ag(Nt,Ps),ze&&Q.fog===!0&&Z.refreshFogUniforms(Nt,ze),Z.refreshMaterialUniforms(Nt,Q,K,F,T.state.transmissionRenderTarget[y.id]),Ve.needsLights&&Ve.lightProbeGrid){const Tt=Ve.lightProbeGrid;Nt.probesSH.value=Tt.texture,Nt.probesMin.value.copy(Tt.boundingBox.min),Nt.probesMax.value.copy(Tt.boundingBox.max),Nt.probesResolution.value.copy(Tt.resolution)}ua.upload(P,Sf(Ve),Nt,te)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ua.upload(P,Sf(Ve),Nt,te),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Mt.setValue(P,"center",ee.center),Mt.setValue(P,"modelViewMatrix",ee.modelViewMatrix),Mt.setValue(P,"normalMatrix",ee.normalMatrix),Mt.setValue(P,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){const Tt=Q.uniformsGroups;for(let Fi=0,Ds=Tt.length;Fi<Ds;Fi++){const Mf=Tt[Fi];me.update(Mf,An),me.bind(Mf,An)}}return An}function Ag(y,W){y.ambientLightColor.needsUpdate=W,y.lightProbe.needsUpdate=W,y.directionalLights.needsUpdate=W,y.directionalLightShadows.needsUpdate=W,y.pointLights.needsUpdate=W,y.pointLightShadows.needsUpdate=W,y.spotLights.needsUpdate=W,y.spotLightShadows.needsUpdate=W,y.rectAreaLights.needsUpdate=W,y.hemisphereLights.needsUpdate=W}function wg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(y,W,re){const Q=$.get(y);Q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),$.get(y.texture).__webglTexture=W,$.get(y.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:re,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,W){const re=$.get(y);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(y,W=0,re=0){se=y,ne=W,G=re;let Q=null,ee=!1,ze=!1;if(y){const Be=$.get(y);if(Be.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,Be.__webglFramebuffer),xe.copy(y.viewport),Ee.copy(y.scissor),Ze=y.scissorTest,_.viewport(xe),_.scissor(Ee),_.setScissorTest(Ze),ge=-1;return}else if(Be.__webglFramebuffer===void 0)te.setupRenderTarget(y);else if(Be.__hasExternalTextures)te.rebindTextures(y,$.get(y.texture).__webglTexture,$.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const it=y.depthTexture;if(Be.__boundDepthTexture!==it){if(it!==null&&$.has(it)&&(y.width!==it.image.width||y.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(y)}}const qe=y.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ze=!0);const $e=$.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray($e[W])?Q=$e[W][re]:Q=$e[W],ee=!0):y.samples>0&&te.useMultisampledRTT(y)===!1?Q=$.get(y).__webglMultisampledFramebuffer:Array.isArray($e)?Q=$e[re]:Q=$e,xe.copy(y.viewport),Ee.copy(y.scissor),Ze=y.scissorTest}else xe.copy(Te).multiplyScalar(K).floor(),Ee.copy(w).multiplyScalar(K).floor(),Ze=C;if(re!==0&&(Q=ie),_.bindFramebuffer(P.FRAMEBUFFER,Q)&&_.drawBuffers(y,Q),_.viewport(xe),_.scissor(Ee),_.setScissorTest(Ze),ee){const Be=$.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,re)}else if(ze){const Be=W;for(let qe=0;qe<y.textures.length;qe++){const $e=$.get(y.textures[qe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+qe,$e.__webglTexture,re,Be)}}else if(y!==null&&re!==0){const Be=$.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Be.__webglTexture,re)}ge=-1},this.readRenderTargetPixels=function(y,W,re,Q,ee,ze,ke,Be=0){if(!(y&&y.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=$.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){_.bindFramebuffer(P.FRAMEBUFFER,qe);try{const $e=y.textures[Be],it=$e.format,ot=$e.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be),!b.textureFormatReadable(it)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(ot)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=y.width-Q&&re>=0&&re<=y.height-ee&&P.readPixels(W,re,Q,ee,Ce.convert(it),Ce.convert(ot),ze)}finally{const $e=se!==null?$.get(se).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(y,W,re,Q,ee,ze,ke,Be=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=$.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe)if(W>=0&&W<=y.width-Q&&re>=0&&re<=y.height-ee){_.bindFramebuffer(P.FRAMEBUFFER,qe);const $e=y.textures[Be],it=$e.format,ot=$e.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be),!b.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.bufferData(P.PIXEL_PACK_BUFFER,ze.byteLength,P.STREAM_READ),P.readPixels(W,re,Q,ee,Ce.convert(it),Ce.convert(ot),0);const xt=se!==null?$.get(se).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,xt);const It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await aE(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ze),P.deleteBuffer(Ye),P.deleteSync(It),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,W=null,re=0){const Q=Math.pow(2,-re),ee=Math.floor(y.image.width*Q),ze=Math.floor(y.image.height*Q),ke=W!==null?W.x:0,Be=W!==null?W.y:0;te.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,re,0,0,ke,Be,ee,ze),_.unbindTexture()},this.copyTextureToTexture=function(y,W,re=null,Q=null,ee=0,ze=0){let ke,Be,qe,$e,it,ot,Ye,xt,It;const Pt=y.isCompressedTexture?y.mipmaps[ze]:y.image;if(re!==null)ke=re.max.x-re.min.x,Be=re.max.y-re.min.y,qe=re.isBox3?re.max.z-re.min.z:1,$e=re.min.x,it=re.min.y,ot=re.isBox3?re.min.z:0;else{const Nt=Math.pow(2,-ee);ke=Math.floor(Pt.width*Nt),Be=Math.floor(Pt.height*Nt),y.isDataArrayTexture?qe=Pt.depth:y.isData3DTexture?qe=Math.floor(Pt.depth*Nt):qe=1,$e=0,it=0,ot=0}Q!==null?(Ye=Q.x,xt=Q.y,It=Q.z):(Ye=0,xt=0,It=0);const yt=Ce.convert(W.format),Kt=Ce.convert(W.type);let Ve;W.isData3DTexture?(te.setTexture3D(W,0),Ve=P.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(te.setTexture2DArray(W,0),Ve=P.TEXTURE_2D_ARRAY):(te.setTexture2D(W,0),Ve=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);const yn=_.getParameter(P.UNPACK_ROW_LENGTH),ht=_.getParameter(P.UNPACK_IMAGE_HEIGHT),An=_.getParameter(P.UNPACK_SKIP_PIXELS),Yn=_.getParameter(P.UNPACK_SKIP_ROWS),Ui=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,Pt.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pt.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,$e),_.pixelStorei(P.UNPACK_SKIP_ROWS,it),_.pixelStorei(P.UNPACK_SKIP_IMAGES,ot);const Ps=y.isDataArrayTexture||y.isData3DTexture,Mt=W.isDataArrayTexture||W.isData3DTexture;if(y.isDepthTexture){const Nt=$.get(y),Oi=$.get(W),Tt=$.get(Nt.__renderTarget),Fi=$.get(Oi.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,Tt.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ds=0;Ds<qe;Ds++)Ps&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$.get(y).__webglTexture,ee,ot+Ds),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$.get(W).__webglTexture,ze,It+Ds)),P.blitFramebuffer($e,it,ke,Be,Ye,xt,ke,Be,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(ee!==0||y.isRenderTargetTexture||$.has(y)){const Nt=$.get(y),Oi=$.get(W);_.bindFramebuffer(P.READ_FRAMEBUFFER,oe),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,X);for(let Tt=0;Tt<qe;Tt++)Ps?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nt.__webglTexture,ee,ot+Tt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Nt.__webglTexture,ee),Mt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oi.__webglTexture,ze,It+Tt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Oi.__webglTexture,ze),ee!==0?P.blitFramebuffer($e,it,ke,Be,Ye,xt,ke,Be,P.COLOR_BUFFER_BIT,P.NEAREST):Mt?P.copyTexSubImage3D(Ve,ze,Ye,xt,It+Tt,$e,it,ke,Be):P.copyTexSubImage2D(Ve,ze,Ye,xt,$e,it,ke,Be);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Mt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Ve,ze,Ye,xt,It,ke,Be,qe,yt,Kt,Pt.data):W.isCompressedArrayTexture?P.compressedTexSubImage3D(Ve,ze,Ye,xt,It,ke,Be,qe,yt,Pt.data):P.texSubImage3D(Ve,ze,Ye,xt,It,ke,Be,qe,yt,Kt,Pt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ze,Ye,xt,ke,Be,yt,Kt,Pt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ze,Ye,xt,Pt.width,Pt.height,yt,Pt.data):P.texSubImage2D(P.TEXTURE_2D,ze,Ye,xt,ke,Be,yt,Kt,Pt);_.pixelStorei(P.UNPACK_ROW_LENGTH,yn),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht),_.pixelStorei(P.UNPACK_SKIP_PIXELS,An),_.pixelStorei(P.UNPACK_SKIP_ROWS,Yn),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Ui),ze===0&&W.generateMipmaps&&P.generateMipmap(Ve),_.unbindTexture()},this.initRenderTarget=function(y){$.get(y).__webglFramebuffer===void 0&&te.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?te.setTextureCube(y,0):y.isData3DTexture?te.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?te.setTexture2DArray(y,0):te.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){ne=0,G=0,se=null,_.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=ut._getUnpackColorSpace()}}const Vd={type:"change"},lf={type:"start"},xg={type:"end"},Zo=new ja,kd=new $i,YR=Math.cos(70*uE.DEG2RAD),Ft=new q,_n=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nc=1e-6;class KR extends JE{constructor(e,n=null){super(e,n),this.state=St.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:Zs.ROTATE,TWO:Zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new es,this._lastTargetPosition=new q,this._quat=new es().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new md,this._sphericalDelta=new md,this._scale=1,this._panOffset=new q,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new q,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JR.bind(this),this._onPointerDown=ZR.bind(this),this._onPointerUp=jR.bind(this),this._onContextMenu=r1.bind(this),this._onMouseWheel=t1.bind(this),this._onKeyDown=n1.bind(this),this._onTouchStart=i1.bind(this),this._onTouchMove=s1.bind(this),this._onMouseDown=QR.bind(this),this._onMouseMove=e1.bind(this),this._interceptControlDown=o1.bind(this),this._interceptControlUp=a1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vd),this.update(),this.state=St.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Ft.copy(n).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zo.origin.copy(this.object.position),Zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zo.direction))<YR?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zo.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nc||this._lastTargetPosition.distanceToSquared(this.target)>nc?(this.dispatchEvent(Vd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ft.setFromMatrixColumn(n,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,n){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(n,1):(Ft.setFromMatrixColumn(n,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new tt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ZR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function JR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function jR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xg),this.state=St.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function QR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=St.DOLLY;break;case tr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=St.ROTATE}break;case tr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(lf)}function e1(t){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function t1(t){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(t.preventDefault(),this.dispatchEvent(lf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(xg))}function n1(t){this.enabled!==!1&&this._handleKeyDown(t)}function i1(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=St.TOUCH_ROTATE;break;case Zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=St.TOUCH_DOLLY_PAN;break;case Zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(lf)}function s1(t){switch(this._trackPointer(t),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=St.NONE}}function r1(t){this.enabled!==!1&&t.preventDefault()}function o1(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function a1(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const l1={class:"page-card"},c1={class:"media-controls"},u1={class:"segmented-control"},f1={key:0,class:"stream-start-time"},h1=["disabled"],d1={key:0,value:""},p1={key:1,value:"",disabled:""},m1=["value"],g1={class:"video-select-control"},_1=["disabled"],v1={key:0,value:""},x1=["value"],S1={class:"switch-control"},y1={class:"segmented-control"},M1={key:0,class:"placeholder"},E1={key:1,class:"stream-workspace"},b1={class:"stream-main"},T1={key:0,class:"video-viewport"},A1=["src","title"],w1={key:0,class:"detection-layer"},R1={key:1,class:"video-viewport"},C1=["src"],P1={key:0,class:"detection-layer"},D1={class:"video-playback-controls"},L1=["max","value"],I1={key:2,class:"placeholder"},N1={class:"stream-sidebar"},U1={key:0,class:"side-section screw-position-card"},O1={class:"absolute-position"},F1={key:2,class:"telemetry-dashboard"},B1={class:"position-scene-card"},z1={key:0,class:"nearby-screw-alert"},H1={class:"fusion-data-card"},V1={class:"current-position"},k1={class:"sensor-columns"},G1={class:"uwb-range-grid"},W1={class:"imu-readout"},X1=["disabled"],q1={key:3,class:"success"},$1={key:4,class:"alert"},Y1={__name:"StreamPage",setup(t){const e=et([]),n=et([]),i=et([]),s=et("history"),r=et(""),o=et(""),a=et("color"),l=et("ekf"),c=et(!0),u=et(0),f=et(0),h=et(!1),d=et(null),m=et(null),v=et(!0),g=et(!1),p=et(""),M=et(""),E=et(0),S=et([]),A=et(null),T=et(null),D=[{id:1,x:0,y:0,z:0},{id:2,x:20,y:0,z:0},{id:3,x:0,y:12,z:0},{id:4,x:20,y:12,z:0},{id:5,x:0,y:0,z:2.5},{id:6,x:20,y:0,z:2.5},{id:7,x:0,y:12,z:2.5},{id:8,x:20,y:12,z:2.5}],x=[{id:"A-1",type:"M4 hex screw",x:1.2,y:1.2,z:1.1},{id:"A-2",type:"M4 hex screw",x:2,y:1.2,z:1.1},{id:"B-1",type:"M6 socket screw",x:18,y:1.2,z:1.1},{id:"B-2",type:"M6 socket screw",x:18.8,y:1.2,z:1.1},{id:"B-3",type:"M6 socket screw",x:1.2,y:10.8,z:1.1},{id:"B-4",type:"M6 socket screw",x:2,y:10.8,z:1.1},{id:"A-3",type:"M4 hex screw",x:18,y:10.8,z:1.1},{id:"A-4",type:"M4 hex screw",x:18.8,y:10.8,z:1.1}];let R,I,L,H,ie,oe,X,ne,G,se,ge,ye;const xe=new Map,Ee=dt(()=>e.value.filter(Z=>!Z.endTime).sort((Z,k)=>new Date(k.startTime)-new Date(Z.startTime))[0]||null),Ze=dt(()=>e.value.filter(Z=>{var k;return Z._id!==((k=Ee.value)==null?void 0:k._id)})),lt=dt(()=>{var Z;return(Z=Ee.value)!=null&&Z.startTime?new Date(Ee.value.startTime).toLocaleString("zh-TW"):"尚未開始作業"}),je=dt(()=>n.value.filter(Z=>Z.kind===a.value||Z.kind==="combined")),Y=dt(()=>je.value.find(Z=>Z.filename===o.value)),F=dt(()=>{const Z=i.value.filter(k=>{var he;return k.imageId===((he=Y.value)==null?void 0:he.filename)});return Z.length?Z:i.value}),K=dt(()=>({_id:"simulated-screw",objectClass:"螺絲",depth:Number((118+Math.sin(E.value*.18)*3).toFixed(1)),bbox:{x:Math.round(860+Math.sin(E.value*.14)*22),y:Math.round(465+Math.cos(E.value*.11)*12),width:200,height:150}})),ce=dt(()=>Math.floor((E.value+20)/4)%13!==0),de=dt(()=>{var he;if(s.value==="live")return i.value.at(-1)||K.value;if(!F.value.length)return K.value;const Z=new Date(F.value[0].timestamp).getTime()||((he=Y.value)!=null&&he.startedAt?Y.value.startedAt*1e3:null);if(!Z)return F.value[0]||K.value;const k=Z+u.value*1e3;return F.value.reduce((Ne,Le)=>Math.abs(new Date(Le.timestamp).getTime()-k)<Math.abs(new Date(Ne.timestamp).getTime()-k)?Le:Ne)}),Te=dt(()=>s.value==="live"?i.value.length>0:F.value.length>0),w=dt(()=>s.value==="live"?!!Ee.value:!!Y.value),C=dt(()=>c.value&&w.value&&(Te.value||ce.value)),B=dt(()=>["example_object","screw_simulated"].includes(de.value.objectClass)?"螺絲":de.value.objectClass),J=dt(()=>`http://localhost:8889/${a.value==="depth"?"cam-depth":"cam-color"}`),N=Z=>Number(Z??0).toFixed(3),j=Z=>new q(Number((Z==null?void 0:Z.x)||0),Number((Z==null?void 0:Z.z)||0),Number((Z==null?void 0:Z.y)||0)),_e=Z=>j(Z),pe=(Z,k)=>{Z.userData.hoverLabel=k},ve=Z=>{const k=new xs,he=new Xo({color:3900150,roughness:.35,metalness:.35}),Ne=new en(new Rs(.24,.12,.24),he),Le=new en(new Rs(.1,.16,.1),he);return Le.position.y=.14,k.add(Ne,Le),k.position.copy(_e(Z)),pe(k,`基地站 ${Z.id}：X ${Z.x}、Y ${Z.y}、Z ${Z.z} m`),k},le=(Z=16096779)=>{const k=new xs,he=new Xo({color:Z,metalness:.72,roughness:.25}),Ne=new en(new oo(.045,.045,.25,16),he);Ne.rotation.z=Math.PI/2;const Le=new en(new oo(.105,.105,.045,16),he);return Le.rotation.z=Math.PI/2,Le.position.x=-.14,k.add(Ne,Le),k.userData.material=he,k},De=()=>{var We;if(!L||!m.value||!oe||!X)return;const Z=m.value.telemetry;oe.position.copy(j(Z.position));const k=Math.PI/180,he=Z.orientation;oe.rotation.set(he.pitch*k,-he.yaw*k,he.roll*k,"YXZ"),X.position.copy(j(m.value.absolutePosition)),X.visible=!Z.workspace,pe(oe,`設備：X ${N(Z.position.x)}、Y ${N(Z.position.y)}、Z ${N(Z.position.z)} m；Roll ${N(he.roll)}°、Pitch ${N(he.pitch)}°、Yaw ${N(he.yaw)}°`),pe(X,`螺絲：X ${N(m.value.absolutePosition.x)}、Y ${N(m.value.absolutePosition.y)}、Z ${N(m.value.absolutePosition.z)} m`);const Ne=new mn().setFromPoints(S.value.map(j));ne.geometry.dispose(),ne.geometry=Ne,(((We=Z.workspace)==null?void 0:We.screws)||x).forEach(U=>{var Ce;const Ae=xe.get(U.id);if(!Ae)return;const ue=U.type.includes("M4")?2450411:9647082;Ae.userData.material.color.setHex(U.visible?16096779:ue),(Ce=Ae.userData.material.emissive)==null||Ce.setHex(U.visible?7027968:0),pe(Ae,`${U.type} ${U.id}：X ${N(U.x)}、Y ${N(U.y)}、Z ${N(U.z)} m${U.visible?`；已在攝影機視野內，深度 ${N(U.depth)} m`:"；未進入攝影機辨識範圍"}`)})},P=async()=>{if(await za(),I||!A.value){De();return}L=new bE,L.background=new at(16777215),H=new Pn(42,1,.1,100),H.position.set(25,19,26),I=new $R({antialias:!0}),I.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.value.appendChild(I.domElement),ie=new KR(H,I.domElement),ie.target.set(10,1.1,6),ie.enableDamping=!0,ie.minDistance=8,ie.maxDistance=42,L.add(new GE(16777215,13358561,2));const Z=new qE(16777215,2.5);Z.position.set(5,7,4),L.add(Z);const k=new en(new _o(20,12),new Xo({color:16317180,roughness:.95}));k.rotation.x=-Math.PI/2,k.position.set(10,-.02,6),L.add(k);const he=new ZE(20,20,13358561,14870768);he.scale.z=.6,he.position.set(10,0,6),L.add(he),D.forEach(We=>L.add(ve(We))),oe=new xs;const Ne=new en(new of(.12,20,16),new Xo({color:1096065,emissive:289870,emissiveIntensity:.35})),Le=new en(new rf(.45,1.2,24,1,!0),new tf({color:3462041,transparent:!0,opacity:.2,side:ii}));Le.rotation.x=-Math.PI/2,Le.position.z=.6,oe.add(Ne,Le),L.add(oe),X=le(),L.add(X),x.forEach(We=>{const U=le(We.type.includes("M4")?2450411:9647082);U.position.copy(j(We)),pe(U,`${We.type} ${We.id}：X ${We.x}、Y ${We.y}、Z ${We.z} m`),xe.set(We.id,U),L.add(U)}),ne=new rg(new mn,new sf({color:14427686,linewidth:1})),L.add(ne),G=new KE,se=new tt,I.domElement.addEventListener("pointermove",Ie),ye=new ResizeObserver(He),ye.observe(A.value),He(),De(),b()},He=()=>{if(!I||!A.value)return;const{clientWidth:Z,clientHeight:k}=A.value;!Z||!k||(I.setSize(Z,k),H.aspect=Z/k,H.updateProjectionMatrix())},Ie=Z=>{if(!I||!T.value)return;const k=I.domElement.getBoundingClientRect();se.set((Z.clientX-k.left)/k.width*2-1,-((Z.clientY-k.top)/k.height)*2+1),G.setFromCamera(se,H);const he=G.intersectObjects(L.children,!0).map(Ne=>{let Le=Ne.object;for(;Le&&!Le.userData.hoverLabel;)Le=Le.parent;return Le}).find(Boolean);T.value.style.display=he?"block":"none",he&&(T.value.textContent=he.userData.hoverLabel,T.value.style.left=`${Z.clientX-k.left+12}px`,T.value.style.top=`${Z.clientY-k.top+12}px`)},b=()=>{ge=requestAnimationFrame(b),ie.update(),I.render(L,H)},_=()=>{var Z;cancelAnimationFrame(ge),ye==null||ye.disconnect(),(Z=I==null?void 0:I.domElement)==null||Z.removeEventListener("pointermove",Ie),I==null||I.dispose(),I=null},z=async()=>{var Z,k,he;if(n.value=[],i.value=[],o.value="",u.value=0,!!r.value)try{const[Ne,Le]=await Promise.all([Xt.get(`/videos/${r.value}`),Xt.get(`/detections/${r.value}`)]);n.value=Ne.data,i.value=Le.data.sort((We,U)=>new Date(We.timestamp)-new Date(U.timestamp)),o.value=((Z=je.value[0])==null?void 0:Z.filename)||"",await te()}catch(Ne){p.value=((he=(k=Ne.response)==null?void 0:k.data)==null?void 0:he.error)||"無法讀取歷史影片或偵測資料。"}},$=async()=>{e.value=(await Xt.get("/operations")).data},te=async()=>{var Z,k,he;if(r.value)try{const Ne=de.value._id!=="simulated-screw"?{detectionId:de.value._id}:{};m.value=(await Xt.get(`/positioning/latest/${r.value}`,{params:Ne})).data;const Le=(Z=m.value.telemetry)==null?void 0:Z.position;Le&&(!S.value.length||JSON.stringify(S.value.at(-1))!==JSON.stringify(Le))&&(S.value=[...S.value.slice(-39),{...Le}]),await P(),De()}catch(Ne){p.value=((he=(k=Ne.response)==null?void 0:k.data)==null?void 0:he.error)||"無法讀取定位資料。"}},Se=async()=>{if(!(!r.value||s.value!=="live"))try{i.value=(await Xt.get(`/detections/${r.value}`)).data.sort((Z,k)=>new Date(Z.timestamp)-new Date(k.timestamp))}catch{}},be=async()=>{var Z,k;g.value=!0,M.value="",p.value="";try{await Xt.post("/simulation/config",{fusionAlgorithm:l.value}),M.value="融合設定已傳送至後端與 AI。",await te()}catch(he){p.value=((k=(Z=he.response)==null?void 0:Z.data)==null?void 0:k.error)||"融合設定傳送失敗。"}finally{g.value=!1}},ae=Z=>{u.value=Z.target.currentTime,f.value=Z.target.duration||0},fe=async()=>{var Z,k;(Z=d.value)!=null&&Z.paused?await d.value.play():(k=d.value)==null||k.pause()},Me=Z=>{d.value&&(d.value.currentTime=Number(Z.target.value))};return Ji(r,()=>{S.value=[],s.value==="history"?z():te()}),Ji(a,()=>{var Z;o.value=((Z=je.value[0])==null?void 0:Z.filename)||"",u.value=0}),Ji(s,async()=>{var Z,k;s.value==="history"?(await $(),r.value=((Z=Ze.value[0])==null?void 0:Z._id)||"",r.value||(n.value=[],i.value=[],m.value=null)):(r.value=((k=Ee.value)==null?void 0:k._id)||"",Se(),te())}),Cs(async()=>{var Z;try{const[k,he]=await Promise.all([Xt.get("/operations"),Xt.get("/simulation/config")]);e.value=k.data,l.value=he.data.fusionAlgorithm,r.value=((Z=Ze.value[0])==null?void 0:Z._id)||"",R=window.setInterval(async()=>{E.value+=1,await Se(),await te()},500)}catch{p.value="無法讀取系統資料。"}finally{v.value=!1}}),Cu(()=>{window.clearInterval(R),_()}),(Z,k)=>{var he,Ne,Le,We,U,Ae,ue,Ce,Ue,me,Xe,Ge,wt;return Re(),Pe("section",l1,[k[23]||(k[23]=O("div",{class:"section-title"},[O("p",{class:"eyebrow"},"Media"),O("h2",null,"影像串流與末端定位")],-1)),O("div",c1,[O("div",u1,[O("button",{class:Rn({active:s.value==="history"}),type:"button",onClick:k[0]||(k[0]=Ke=>s.value="history")},"歷史影片",2),O("button",{class:Rn({active:s.value==="live"}),type:"button",onClick:k[1]||(k[1]=Ke=>s.value="live")},"目前串流",2)]),s.value==="live"?(Re(),Pe("p",f1,"開始時間："+we(lt.value),1)):(Re(),Pe(bt,{key:1},[O("label",null,[k[10]||(k[10]=nn("作業",-1)),Fn(O("select",{"onUpdate:modelValue":k[2]||(k[2]=Ke=>r.value=Ke),disabled:!Ze.value.length},[Ze.value.length?(Re(),Pe("option",p1,"選擇歷史作業")):(Re(),Pe("option",d1,"無歷史紀錄")),(Re(!0),Pe(bt,null,ai(Ze.value,Ke=>(Re(),Pe("option",{key:Ke._id,value:Ke._id},we(new Date(Ke.startTime).toLocaleString("zh-TW")),9,m1))),128))],8,h1),[[dl,r.value]])]),O("label",g1,[k[11]||(k[11]=nn("影片",-1)),Fn(O("select",{"onUpdate:modelValue":k[3]||(k[3]=Ke=>o.value=Ke),disabled:!je.value.length},[je.value.length?Qt("",!0):(Re(),Pe("option",v1,"無歷史紀錄")),(Re(!0),Pe(bt,null,ai(je.value,Ke=>(Re(),Pe("option",{key:Ke.filename,value:Ke.filename},we(Ke.filename),9,x1))),128))],8,_1),[[dl,o.value]])])],64)),O("label",S1,[Fn(O("input",{"onUpdate:modelValue":k[4]||(k[4]=Ke=>c.value=Ke),type:"checkbox"},null,512),[[H0,c.value]]),k[12]||(k[12]=nn(" 顯示螺絲偵測",-1))]),O("div",y1,[O("button",{class:Rn({active:a.value==="color"}),type:"button",onClick:k[5]||(k[5]=Ke=>a.value="color")},"光學影像",2),O("button",{class:Rn({active:a.value==="depth"}),type:"button",onClick:k[6]||(k[6]=Ke=>a.value="depth")},"深度影像",2)])]),v.value?(Re(),Pe("p",M1,"正在讀取資料…")):(Re(),Pe("div",E1,[O("div",b1,[s.value==="live"?(Re(),Pe("div",T1,[(Re(),Pe("iframe",{key:J.value,class:"live-stream-frame",src:J.value,title:a.value==="depth"?"目前深度串流":"目前光學串流",allow:"autoplay; fullscreen"},null,8,A1)),C.value?(Re(),Pe("div",w1,[O("div",{class:Rn(["detection-box",{"label-below":de.value.bbox.y<30}]),style:Yr({left:`${de.value.bbox.x/1920*100}%`,top:`${de.value.bbox.y/1080*100}%`,width:`${de.value.bbox.width/1920*100}%`,height:`${de.value.bbox.height/1080*100}%`})},[O("span",null,we(B.value)+" · "+we(de.value.depth),1)],6)])):Qt("",!0)])):Y.value?(Re(),Pe("div",R1,[(Re(),Pe("video",{key:Y.value.filename,ref_key:"videoPlayer",ref:d,class:Rn(["video-source",{"show-depth":Y.value.kind==="combined"&&a.value==="depth"}]),src:Y.value.url,playsinline:"",onLoadedmetadata:ae,onTimeupdate:ae,onPlay:k[7]||(k[7]=Ke=>h.value=!0),onPause:k[8]||(k[8]=Ke=>h.value=!1)},null,42,C1)),C.value?(Re(),Pe("div",P1,[O("div",{class:Rn(["detection-box",{"label-below":de.value.bbox.y<30}]),style:Yr({left:`${de.value.bbox.x/1920*100}%`,top:`${de.value.bbox.y/1080*100}%`,width:`${de.value.bbox.width/1920*100}%`,height:`${de.value.bbox.height/1080*100}%`})},[O("span",null,we(B.value)+" · "+we(de.value.depth),1)],6)])):Qt("",!0),O("div",D1,[O("button",{type:"button",onClick:fe},we(h.value?"暫停":"播放"),1),O("input",{type:"range",min:"0",max:f.value,step:"0.01",value:u.value,onInput:Me},null,40,L1),O("span",null,we(Math.floor(u.value))+" / "+we(Math.floor(f.value))+" 秒",1)])])):(Re(),Pe("p",I1,"此作業尚未找到歷史影片。"))]),O("aside",N1,[m.value?(Re(),Pe("section",U1,[k[14]||(k[14]=O("h3",null,"螺絲定位",-1)),O("p",null,we(B.value)+"　深度 "+we(de.value.depth),1),O("p",null,[nn("模型："+we(m.value.detection.detectionAlgorithm),1),k[13]||(k[13]=O("br",null,null,-1)),nn("融合："+we(m.value.fusionAlgorithm),1)]),O("p",null,"相機／設備座標："+we(N(m.value.cameraPosition.x))+", "+we(N(m.value.cameraPosition.y))+", "+we(N(m.value.cameraPosition.z))+" m",1),O("p",null,"螺絲相機座標："+we(N(m.value.screwCameraPosition.x))+", "+we(N(m.value.screwCameraPosition.y))+", "+we(N(m.value.screwCameraPosition.z))+" m",1),O("p",O1,"融合絕對座標："+we(N(m.value.absolutePosition.x))+", "+we(N(m.value.absolutePosition.y))+", "+we(N(m.value.absolutePosition.z))+" m",1)])):Qt("",!0)])])),m.value?(Re(),Pe("section",F1,[O("div",B1,[k[15]||(k[15]=O("div",{class:"scene-heading"},[O("div",null,[O("h3",null,"操作空間建模")]),O("span",null,"拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標")],-1)),(he=m.value.workspace)!=null&&he.notification?(Re(),Pe("p",z1,"提示："+we(m.value.workspace.notification),1)):Qt("",!0),O("div",{ref_key:"sceneContainer",ref:A,class:"three-scene"},[O("div",{ref_key:"sceneTooltip",ref:T,class:"three-tooltip"},null,512)],512),k[16]||(k[16]=Lu('<div class="scene-legend"><span><i class="legend-anchor"></i>基地站</span><span><i class="legend-device"></i>設備／攝影機光錐</span><span><i class="legend-screw"></i>M4（藍）／M6（紫）；金色為可辨識</span><span><i class="legend-trail"></i>移動軌跡</span></div>',1))]),O("aside",H1,[k[22]||(k[22]=O("h3",null,"UWB + IMU 融合資料",-1)),O("div",V1,[k[17]||(k[17]=O("strong",null,"ES-EKF 輸出設備位置",-1)),O("span",null,"X "+we(N(m.value.telemetry.position.x))+"　Y "+we(N(m.value.telemetry.position.y))+"　Z "+we(N(m.value.telemetry.position.z))+" m",1)]),O("div",k1,[O("div",null,[k[18]||(k[18]=O("h4",null,"UWB：8 個基地站距離（m）",-1)),O("div",G1,[(Re(!0),Pe(bt,null,ai(m.value.telemetry.uwbRanges||[],Ke=>(Re(),Pe("span",{key:Ke.stationId},"站 "+we(Ke.stationId+1)+"："+we(N(Ke.distance)),1))),128))])]),O("div",W1,[k[19]||(k[19]=O("h4",null,"IMU 即時量測",-1)),O("p",null,"加速度："+we(N((Le=(Ne=m.value.telemetry.imu)==null?void 0:Ne.acceleration)==null?void 0:Le.x))+", "+we(N((U=(We=m.value.telemetry.imu)==null?void 0:We.acceleration)==null?void 0:U.y))+", "+we(N((ue=(Ae=m.value.telemetry.imu)==null?void 0:Ae.acceleration)==null?void 0:ue.z))+" m/s²",1),O("p",null,"角速度："+we(N((Ue=(Ce=m.value.telemetry.imu)==null?void 0:Ce.gyroscope)==null?void 0:Ue.x))+", "+we(N((Xe=(me=m.value.telemetry.imu)==null?void 0:me.gyroscope)==null?void 0:Xe.y))+", "+we(N((wt=(Ge=m.value.telemetry.imu)==null?void 0:Ge.gyroscope)==null?void 0:wt.z))+" °/s",1),O("p",null,"姿態：Roll "+we(N(m.value.telemetry.orientation.roll))+"°、Pitch "+we(N(m.value.telemetry.orientation.pitch))+"°、Yaw "+we(N(m.value.telemetry.orientation.yaw))+"°",1)])]),O("label",null,[k[21]||(k[21]=nn("UWB + IMU 融合演算法",-1)),Fn(O("select",{"onUpdate:modelValue":k[9]||(k[9]=Ke=>l.value=Ke)},[...k[20]||(k[20]=[O("option",{value:"ekf"},"Error-State Extended Kalman Filter (ES-EKF)",-1),O("option",{value:"complementary"},"Complementary Filter",-1),O("option",{value:"weighted_average"},"Weighted Average",-1)])],512),[[dl,l.value]])]),O("button",{type:"button",disabled:g.value,onClick:be},we(g.value?"傳送中…":"套用融合設定"),9,X1)])])):Qt("",!0),M.value?(Re(),Pe("p",q1,we(M.value),1)):Qt("",!0),p.value?(Re(),Pe("p",$1,we(p.value),1)):Qt("",!0)])}}},K1={},Z1={class:"page-card"};function J1(t,e){return Re(),Pe("section",Z1,[...e[0]||(e[0]=[Lu('<div class="section-title"><p class="eyebrow">Media</p><h2>語音提示查詢</h2></div><article class="panel"><h3>提示內容</h3><div class="list-card"><div class="item-row"><span>提示 1</span><strong>請保持安全距離</strong></div><div class="item-row"><span>提示 2</span><strong>區域偵測已完成</strong></div><div class="item-row"><span>提示 3</span><strong>即將開始下一段任務</strong></div></div></article>',2)])])}const j1=Ka(K1,[["render",J1]]),Q1=[{path:"/",name:"home",component:Ey,meta:{requiresAuth:!0}},{path:"/account/login",name:"account-login",component:Ly},{path:"/account/profile",name:"account-profile",component:Zy,meta:{requiresAuth:!0}},{path:"/account/password",name:"account-password",component:eM,meta:{requiresAuth:!0}},{path:"/guide",name:"guide",component:sM},{path:"/technology",name:"technology",component:lM},{path:"/history/object",name:"history-object",component:pM,meta:{requiresAuth:!0}},{path:"/history/tasks",name:"history-tasks",component:SM,meta:{requiresAuth:!0}},{path:"/history/operations",name:"history-operations",component:AM,meta:{requiresAuth:!0}},{path:"/media/stream",name:"media-stream",component:Y1,meta:{requiresAuth:!0}},{path:"/media/voice",name:"media-voice",component:j1,meta:{requiresAuth:!0}}],Sg=Qv({history:Iv(),routes:Q1});Sg.beforeEach(t=>{if(t.meta.requiresAuth&&!Sa.value)return{name:"account-login",query:{redirect:t.fullPath}};if(t.name==="account-login"&&Sa.value)return{path:"/"}});$0(hx).use(Sg).mount("#app");
