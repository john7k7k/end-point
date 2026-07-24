(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const yt={},$s=[],ii=()=>{},Id=()=>!1,Ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ca=t=>t.startsWith("onUpdate:"),Yt=Object.assign,uu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_g=Object.prototype.hasOwnProperty,pt=(t,e)=>_g.call(t,e),Ze=Array.isArray,Ks=t=>so(t)==="[object Map]",dr=t=>so(t)==="[object Set]",pf=t=>so(t)==="[object Date]",nt=t=>typeof t=="function",Lt=t=>typeof t=="string",ci=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",Nd=t=>(gt(t)||nt(t))&&nt(t.then)&&nt(t.catch),Ud=Object.prototype.toString,so=t=>Ud.call(t),vg=t=>so(t).slice(8,-1),Od=t=>so(t)==="[object Object]",fu=t=>Lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Br=cu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xg=/-\w/g,On=Pa(t=>t.replace(xg,e=>e.slice(1).toUpperCase())),Sg=/\B([A-Z])/g,As=Pa(t=>t.replace(Sg,"-$1").toLowerCase()),Fd=Pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),ja=Pa(t=>t?`on${Fd(t)}`:""),Qn=(t,e)=>!Object.is(t,e),$o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Da=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mf;const La=()=>mf||(mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xr(t){if(Ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Lt(i)?bg(i):Xr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Lt(t)||gt(t))return t}const yg=/;(?![^(]*\))/g,Mg=/:([^]+)/,Eg=/\/\*[^]*?\*\//g;function bg(t){const e={};return t.replace(Eg,"").split(yg).forEach(n=>{if(n){const i=n.split(Mg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Kn(t){let e="";if(Lt(t))e=t;else if(Ze(t))for(let n=0;n<t.length;n++){const i=Kn(t[n]);i&&(e+=i+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ag=cu(Tg);function zd(t){return!!t||t===""}function wg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=pr(t[i],e[i]);return n}function pr(t,e){if(t===e)return!0;let n=pf(t),i=pf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=ci(t),i=ci(e),n||i)return t===e;if(n=Ze(t),i=Ze(e),n||i)return n&&i?wg(t,e):!1;if(n=gt(t),i=gt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!pr(t[o],e[o]))return!1}}return String(t)===String(e)}function hu(t,e){return t.findIndex(n=>pr(n,e))}const Hd=t=>!!(t&&t.__v_isRef===!0),Oe=t=>Lt(t)?t:t==null?"":Ze(t)||gt(t)&&(t.toString===Ud||!nt(t.toString))?Hd(t)?Oe(t.value):JSON.stringify(t,Vd,2):String(t),Vd=(t,e)=>Hd(e)?Vd(t,e.value):Ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Qa(i,r)+" =>"]=s,n),{})}:dr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qa(n))}:ci(e)?Qa(e):gt(e)&&!Ze(e)&&!Od(e)?String(e):e,Qa=(t,e="")=>{var n;return ci(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class Rg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Wt&&(Wt.active?(this.parent=Wt,this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){if(this._on>0&&--this._on===0){if(Wt===this)Wt=this.prevScope;else{let e=Wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Cg(){return Wt}let bt;const el=new WeakSet;class kd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&(Wt.active?Wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,el.has(this)&&(el.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gf(this),Xd(this);const e=bt,n=Fn;bt=this,Fn=!0;try{return this.fn()}finally{qd(this),bt=e,Fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mu(e);this.deps=this.depsTail=void 0,gf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?el.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jl(this)&&this.run()}get dirty(){return jl(this)}}let Gd=0,zr,Hr;function Wd(t,e=!1){if(t.flags|=8,e){t.next=Hr,Hr=t;return}t.next=zr,zr=t}function du(){Gd++}function pu(){if(--Gd>0)return;if(Hr){let e=Hr;for(Hr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zr;){let e=zr;for(zr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Xd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qd(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),mu(i),Pg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function jl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Yd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qr)||(t.globalVersion=qr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!jl(t))))return;t.flags|=2;const e=t.dep,n=bt,i=Fn;bt=t,Fn=!0;try{Xd(t);const s=t.fn(t._value);(e.version===0||Qn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{bt=n,Fn=i,qd(t),t.flags&=-3}}function mu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)mu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Fn=!0;const $d=[];function wi(){$d.push(Fn),Fn=!1}function Ri(){const t=$d.pop();Fn=t===void 0?!0:t}function gf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=bt;bt=void 0;try{e()}finally{bt=n}}}let qr=0;class Dg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!Fn||bt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==bt)n=this.activeLink=new Dg(bt,this),bt.deps?(n.prevDep=bt.depsTail,bt.depsTail.nextDep=n,bt.depsTail=n):bt.deps=bt.depsTail=n,Kd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=bt.depsTail,n.nextDep=void 0,bt.depsTail.nextDep=n,bt.depsTail=n,bt.deps===n&&(bt.deps=i)}return n}trigger(e){this.version++,qr++,this.notify(e)}notify(e){du();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pu()}}}function Kd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Kd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ql=new WeakMap,gs=Symbol(""),ec=Symbol(""),Yr=Symbol("");function Qt(t,e,n){if(Fn&&bt){let i=Ql.get(t);i||Ql.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new gu),s.map=i,s.key=n),s.track()}}function yi(t,e,n,i,s,r){const o=Ql.get(t);if(!o){qr++;return}const a=l=>{l&&l.trigger()};if(du(),e==="clear")o.forEach(a);else{const l=Ze(t),c=l&&fu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Yr||!ci(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Yr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(gs)),Ks(t)&&a(o.get(ec)));break;case"delete":l||(a(o.get(gs)),Ks(t)&&a(o.get(ec)));break;case"set":Ks(t)&&a(o.get(gs));break}}pu()}function Cs(t){const e=dt(t);return e===t?e:(Qt(e,"iterate",Yr),Rn(t)?e:e.map(Bn))}function Ia(t){return Qt(t=dt(t),"iterate",Yr),t}function Zn(t,e){return Ci(t)?nr(_s(t)?Bn(e):e):Bn(e)}const Lg={__proto__:null,[Symbol.iterator](){return tl(this,Symbol.iterator,t=>Zn(this,t))},concat(...t){return Cs(this).concat(...t.map(e=>Ze(e)?Cs(e):e))},entries(){return tl(this,"entries",t=>(t[1]=Zn(this,t[1]),t))},every(t,e){return hi(this,"every",t,e,void 0,arguments)},filter(t,e){return hi(this,"filter",t,e,n=>n.map(i=>Zn(this,i)),arguments)},find(t,e){return hi(this,"find",t,e,n=>Zn(this,n),arguments)},findIndex(t,e){return hi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return hi(this,"findLast",t,e,n=>Zn(this,n),arguments)},findLastIndex(t,e){return hi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return hi(this,"forEach",t,e,void 0,arguments)},includes(...t){return nl(this,"includes",t)},indexOf(...t){return nl(this,"indexOf",t)},join(t){return Cs(this).join(t)},lastIndexOf(...t){return nl(this,"lastIndexOf",t)},map(t,e){return hi(this,"map",t,e,void 0,arguments)},pop(){return yr(this,"pop")},push(...t){return yr(this,"push",t)},reduce(t,...e){return _f(this,"reduce",t,e)},reduceRight(t,...e){return _f(this,"reduceRight",t,e)},shift(){return yr(this,"shift")},some(t,e){return hi(this,"some",t,e,void 0,arguments)},splice(...t){return yr(this,"splice",t)},toReversed(){return Cs(this).toReversed()},toSorted(t){return Cs(this).toSorted(t)},toSpliced(...t){return Cs(this).toSpliced(...t)},unshift(...t){return yr(this,"unshift",t)},values(){return tl(this,"values",t=>Zn(this,t))}};function tl(t,e,n){const i=Ia(t),s=i[e]();return i!==t&&!Rn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const Ig=Array.prototype;function hi(t,e,n,i,s,r){const o=Ia(t),a=o!==t&&!Rn(t),l=o[e];if(l!==Ig[e]){const f=l.apply(t,r);return a?Bn(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Zn(t,f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function _f(t,e,n,i){const s=Ia(t),r=s!==t&&!Rn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Zn(t,c)),n.call(this,c,Zn(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?Zn(t,l):l}function nl(t,e,n){const i=dt(t);Qt(i,"iterate",Yr);const s=i[e](...n);return(s===-1||s===!1)&&xu(n[0])?(n[0]=dt(n[0]),i[e](...n)):s}function yr(t,e,n=[]){wi(),du();const i=dt(t)[e].apply(t,n);return pu(),Ri(),i}const Ng=cu("__proto__,__v_isRef,__isVue"),Zd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ci));function Ug(t){ci(t)||(t=String(t));const e=dt(this);return Qt(e,"has",t),e.hasOwnProperty(t)}class Jd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Xg:tp:r?ep:Qd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!s){let l;if(o&&(l=Lg[n]))return l;if(n==="hasOwnProperty")return Ug}const a=Reflect.get(e,n,tn(e)?e:i);if((ci(n)?Zd.has(n):Ng(n))||(s||Qt(e,"get",n),r))return a;if(tn(a)){const l=o&&fu(n)?a:a.value;return s&&gt(l)?nc(l):l}return gt(a)?s?nc(a):Na(a):a}}class jd extends Jd{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Ze(e)&&fu(n);if(!this._isShallow){const c=Ci(r);if(!Rn(i)&&!Ci(i)&&(r=dt(r),i=dt(i)),!o&&tn(r)&&!tn(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:pt(e,n),l=Reflect.set(e,n,i,tn(e)?e:s);return e===dt(s)&&l&&(a?Qn(i,r)&&yi(e,"set",n,i):yi(e,"add",n,i)),l}deleteProperty(e,n){const i=pt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&yi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ci(n)||!Zd.has(n))&&Qt(e,"has",n),i}ownKeys(e){return Qt(e,"iterate",Ze(e)?"length":gs),Reflect.ownKeys(e)}}class Og extends Jd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fg=new jd,Bg=new Og,zg=new jd(!0);const tc=t=>t,vo=t=>Reflect.getPrototypeOf(t);function Hg(t,e,n){return function(...i){const s=this.__v_raw,r=dt(s),o=Ks(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?tc:e?nr:Bn;return!e&&Qt(r,"iterate",l?ec:gs),Yt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function xo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vg(t,e){const n={get(s){const r=this.__v_raw,o=dt(r),a=dt(s);t||(Qn(s,a)&&Qt(o,"get",s),Qt(o,"get",a));const{has:l}=vo(o),c=e?tc:t?nr:Bn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Qt(dt(s),"iterate",gs),s.size},has(s){const r=this.__v_raw,o=dt(r),a=dt(s);return t||(Qn(s,a)&&Qt(o,"has",s),Qt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=dt(a),c=e?tc:t?nr:Bn;return!t&&Qt(l,"iterate",gs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Yt(n,t?{add:xo("add"),set:xo("set"),delete:xo("delete"),clear:xo("clear")}:{add(s){const r=dt(this),o=vo(r),a=dt(s),l=!e&&!Rn(s)&&!Ci(s)?a:s;return o.has.call(r,l)||Qn(s,l)&&o.has.call(r,s)||Qn(a,l)&&o.has.call(r,a)||(r.add(l),yi(r,"add",l,l)),this},set(s,r){!e&&!Rn(r)&&!Ci(r)&&(r=dt(r));const o=dt(this),{has:a,get:l}=vo(o);let c=a.call(o,s);c||(s=dt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Qn(r,u)&&yi(o,"set",s,r):yi(o,"add",s,r),this},delete(s){const r=dt(this),{has:o,get:a}=vo(r);let l=o.call(r,s);l||(s=dt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&yi(r,"delete",s,void 0),c},clear(){const s=dt(this),r=s.size!==0,o=s.clear();return r&&yi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Hg(s,t,e)}),n}function _u(t,e){const n=Vg(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(pt(n,s)&&s in i?n:i,s,r)}const kg={get:_u(!1,!1)},Gg={get:_u(!1,!0)},Wg={get:_u(!0,!1)};const Qd=new WeakMap,ep=new WeakMap,tp=new WeakMap,Xg=new WeakMap;function qg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Na(t){return Ci(t)?t:vu(t,!1,Fg,kg,Qd)}function np(t){return vu(t,!1,zg,Gg,ep)}function nc(t){return vu(t,!0,Bg,Wg,tp)}function vu(t,e,n,i,s){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=qg(vg(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function _s(t){return Ci(t)?_s(t.__v_raw):!!(t&&t.__v_isReactive)}function Ci(t){return!!(t&&t.__v_isReadonly)}function Rn(t){return!!(t&&t.__v_isShallow)}function xu(t){return t?!!t.__v_raw:!1}function dt(t){const e=t&&t.__v_raw;return e?dt(e):t}function Yg(t){return!pt(t,"__v_skip")&&Object.isExtensible(t)&&Bd(t,"__v_skip",!0),t}const Bn=t=>gt(t)?Na(t):t,nr=t=>gt(t)?nc(t):t;function tn(t){return t?t.__v_isRef===!0:!1}function at(t){return ip(t,!1)}function $g(t){return ip(t,!0)}function ip(t,e){return tn(t)?t:new Kg(t,e)}class Kg{constructor(e,n){this.dep=new gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:dt(e),this._value=n?e:Bn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Rn(e)||Ci(e);e=i?e:dt(e),Qn(e,n)&&(this._rawValue=e,this._value=i?e:Bn(e),this.dep.trigger())}}function Ki(t){return tn(t)?t.value:t}const Zg={get:(t,e,n)=>e==="__v_raw"?t:Ki(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return tn(s)&&!tn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function sp(t){return _s(t)?t:new Proxy(t,Zg)}class Jg{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return Wd(this,!0),!0}get value(){const e=this.dep.track();return Yd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function jg(t,e,n=!1){let i,s;return nt(t)?i=t:(i=t.get,s=t.set),new Jg(i,s,n)}const So={},la=new WeakMap;let ls;function Qg(t,e=!1,n=ls){if(n){let i=la.get(n);i||la.set(n,i=[]),i.push(t)}}function e_(t,e,n=yt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>s?x:Rn(x)||s===!1||s===0?Mi(x,1):Mi(x);let u,f,h,p,g=!1,S=!1;if(tn(t)?(f=()=>t.value,g=Rn(t)):_s(t)?(f=()=>c(t),g=!0):Ze(t)?(S=!0,g=t.some(x=>_s(x)||Rn(x)),f=()=>t.map(x=>{if(tn(x))return x.value;if(_s(x))return c(x);if(nt(x))return l?l(x,2):x()})):nt(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){wi();try{h()}finally{Ri()}}const x=ls;ls=u;try{return l?l(t,3,[p]):t(p)}finally{ls=x}}:f=ii,e&&s){const x=f,R=s===!0?1/0:s;f=()=>Mi(x(),R)}const m=Cg(),d=()=>{u.stop(),m&&m.active&&uu(m.effects,u)};if(r&&e){const x=e;e=(...R)=>{const T=x(...R);return d(),T}}let M=S?new Array(t.length).fill(So):So;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const R=u.run();if(x||s||g||(S?R.some((T,I)=>Qn(T,M[I])):Qn(R,M))){h&&h();const T=ls;ls=u;try{const I=[R,M===So?void 0:S&&M[0]===So?[]:M,p];M=R,l?l(e,3,I):e(...I)}finally{ls=T}}}else u.run()};return a&&a(E),u=new kd(f),u.scheduler=o?()=>o(E,!1):E,p=x=>Qg(x,!1,u),h=u.onStop=()=>{const x=la.get(u);if(x){if(l)l(x,4);else for(const R of x)R();la.delete(u)}},e?i?E(!0):M=u.run():o?o(E.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Mi(t,e=1/0,n){if(e<=0||!gt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,tn(t))Mi(t.value,e,n);else if(Ze(t))for(let i=0;i<t.length;i++)Mi(t[i],e,n);else if(dr(t)||Ks(t))t.forEach(i=>{Mi(i,e,n)});else if(Od(t)){for(const i in t)Mi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Mi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ro(t,e,n,i){try{return i?t(...i):t()}catch(s){Ua(s,e,n)}}function zn(t,e,n,i){if(nt(t)){const s=ro(t,e,n,i);return s&&Nd(s)&&s.catch(r=>{Ua(r,e,n)}),s}if(Ze(t)){const s=[];for(let r=0;r<t.length;r++)s.push(zn(t[r],e,n,i));return s}}function Ua(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||yt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){wi(),ro(r,null,10,[t,l,c]),Ri();return}}t_(t,n,s,i,o)}function t_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const an=[];let $n=-1;const Zs=[];let Gi=null,Xs=0;const rp=Promise.resolve();let ca=null;function Oa(t){const e=ca||rp;return t?e.then(this?t.bind(this):t):e}function n_(t){let e=$n+1,n=an.length;for(;e<n;){const i=e+n>>>1,s=an[i],r=$r(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Su(t){if(!(t.flags&1)){const e=$r(t),n=an[an.length-1];!n||!(t.flags&2)&&e>=$r(n)?an.push(t):an.splice(n_(e),0,t),t.flags|=1,op()}}function op(){ca||(ca=rp.then(lp))}function i_(t){Ze(t)?Zs.push(...t):Gi&&t.id===-1?Gi.splice(Xs+1,0,t):t.flags&1||(Zs.push(t),t.flags|=1),op()}function vf(t,e,n=$n+1){for(;n<an.length;n++){const i=an[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;an.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ap(t){if(Zs.length){const e=[...new Set(Zs)].sort((n,i)=>$r(n)-$r(i));if(Zs.length=0,Gi){Gi.push(...e);return}for(Gi=e,Xs=0;Xs<Gi.length;Xs++){const n=Gi[Xs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gi=null,Xs=0}}const $r=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lp(t){try{for($n=0;$n<an.length;$n++){const e=an[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ro(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<an.length;$n++){const e=an[$n];e&&(e.flags&=-2)}$n=-1,an.length=0,ap(),ca=null,(an.length||Zs.length)&&lp()}}let wn=null,cp=null;function ua(t){const e=wn;return wn=t,cp=t&&t.type.__scopeId||null,e}function up(t,e=wn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&da(-1);const r=ua(e),o=xs.length;let a;try{a=t(...s)}finally{for(let l=xs.length;l>o;l--)Np();ua(r),i._d&&da(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ir(t,e){if(wn===null)return t;const n=Ha(wn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=yt]=e[s];r&&(nt(r)&&(r={mounted:r,updated:r}),r.deep&&Mi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ns(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(wi(),zn(l,n,8,[t.el,a,t,e]),Ri())}}function Ko(t,e){if(ln){let n=ln.provides;const i=ln.parent&&ln.parent.provides;i===n&&(n=ln.provides=Object.create(i)),n[t]=e}}function si(t,e,n=!1){const i=Q_();if(i||Js){let s=Js?Js._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&nt(e)?e.call(i&&i.proxy):e}}const s_=Symbol.for("v-scx"),r_=()=>si(s_);function vs(t,e,n){return fp(t,e,n)}function fp(t,e,n=yt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Yt({},n),l=e&&i||!e&&r!=="post";let c;if(Zr){if(r==="sync"){const p=r_();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ii,p.resume=ii,p.pause=ii,p}}const u=ln;a.call=(p,g,S)=>zn(p,u,g,S);let f=!1;r==="post"?a.scheduler=p=>{pn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Su(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=e_(t,e,a);return Zr&&(c?c.push(h):l&&h()),h}function o_(t,e,n){const i=this.proxy,s=Lt(t)?t.includes(".")?hp(i,t):()=>i[t]:t.bind(i,i);let r;nt(e)?r=e:(r=e.handler,n=e);const o=ao(this),a=fp(s,r.bind(i),n);return o(),a}function hp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const a_=Symbol("_vte"),l_=t=>t.__isTeleport,il=Symbol("_leaveCb");function yu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dp(t,e){return nt(t)?Yt({name:t.name},e,{setup:t}):t}function pp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function xf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const fa=new WeakMap;function Vr(t,e,n,i,s=!1){if(Ze(t)){t.forEach((S,m)=>Vr(S,e&&(Ze(e)?e[m]:e),n,i,s));return}if(kr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Vr(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ha(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,f=a.setupState,h=dt(f),p=f===yt?Id:S=>xf(u,S)?!1:pt(h,S),g=(S,m)=>!(m&&xf(u,m));if(c!=null&&c!==l){if(Sf(e),Lt(c))u[c]=null,p(c)&&(f[c]=null);else if(tn(c)){const S=e;g(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(nt(l))ro(l,a,12,[o,u]);else{const S=Lt(l),m=tn(l);if(S||m){const d=()=>{if(t.f){const M=S?p(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)Ze(M)&&uu(M,r);else if(Ze(M))M.includes(r)||M.push(r);else if(S)u[l]=[r],p(l)&&(f[l]=u[l]);else{const E=[r];g(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else S?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const M=()=>{d(),fa.delete(t)};M.id=-1,fa.set(t,M),pn(M,n)}else Sf(t),d()}}}function Sf(t){const e=fa.get(t);e&&(e.flags|=8,fa.delete(t))}La().requestIdleCallback;La().cancelIdleCallback;const kr=t=>!!t.type.__asyncLoader,mp=t=>t.type.__isKeepAlive;function c_(t,e){gp(t,"a",e)}function u_(t,e){gp(t,"da",e)}function gp(t,e,n=ln){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Fa(e,i,n),n){let s=n.parent;for(;s&&s.parent;)mp(s.parent.vnode)&&f_(i,e,n,s),s=s.parent}}function f_(t,e,n,i){const s=Fa(e,t,i,!0);Mu(()=>{uu(i[e],s)},n)}function Fa(t,e,n=ln,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{wi();const a=ao(n),l=zn(e,n,t,o);return a(),Ri(),l});return i?s.unshift(r):s.push(r),r}}const Li=t=>(e,n=ln)=>{(!Zr||t==="sp")&&Fa(t,(...i)=>e(...i),n)},h_=Li("bm"),mr=Li("m"),d_=Li("bu"),p_=Li("u"),m_=Li("bum"),Mu=Li("um"),g_=Li("sp"),__=Li("rtg"),v_=Li("rtc");function x_(t,e=ln){Fa("ec",t,e)}const S_=Symbol.for("v-ndc");function ri(t,e,n,i){let s;const r=n,o=Ze(t);if(o||Lt(t)){const a=o&&_s(t);let l=!1,c=!1;a&&(l=!Rn(t),c=Ci(t),t=Ia(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?nr(Bn(t[u])):Bn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(gt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const ic=t=>t?Bp(t)?Ha(t):ic(t.parent):null,Gr=Yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ic(t.parent),$root:t=>ic(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vp(t),$forceUpdate:t=>t.f||(t.f=()=>{Su(t.update)}),$nextTick:t=>t.n||(t.n=Oa.bind(t.proxy)),$watch:t=>o_.bind(t)}),sl=(t,e)=>t!==yt&&!t.__isScriptSetup&&pt(t,e),y_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(sl(i,e))return o[e]=1,i[e];if(s!==yt&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(n!==yt&&pt(n,e))return o[e]=4,n[e];sc&&(o[e]=0)}}const c=Gr[e];let u,f;if(c)return e==="$attrs"&&Qt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==yt&&pt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,pt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return sl(s,e)?(s[e]=n,!0):i!==yt&&pt(i,e)?(i[e]=n,!0):pt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==yt&&a[0]!=="$"&&pt(t,a)||sl(e,a)||pt(r,a)||pt(i,a)||pt(Gr,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yf(t){return Ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let sc=!0;function M_(t){const e=vp(t),n=t.proxy,i=t.ctx;sc=!1,e.beforeCreate&&Mf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:S,deactivated:m,beforeDestroy:d,beforeUnmount:M,destroyed:E,unmounted:x,render:R,renderTracked:T,renderTriggered:I,errorCaptured:v,serverPrefetch:C,expose:O,inheritAttrs:N,components:z,directives:ie,filters:oe}=e;if(c&&E_(c,i,null),o)for(const G in o){const ne=o[G];nt(ne)&&(i[G]=ne.bind(n))}if(s){const G=s.call(n,n);gt(G)&&(t.data=Na(G))}if(sc=!0,r)for(const G in r){const ne=r[G],he=nt(ne)?ne.bind(n,n):nt(ne.get)?ne.get.bind(n,n):ii,xe=!nt(ne)&&nt(ne.set)?ne.set.bind(n):ii,ve=Tt({get:he,set:xe});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>ve.value,set:ye=>ve.value=ye})}if(a)for(const G in a)_p(a[G],i,n,G);if(l){const G=nt(l)?l.call(n):l;Reflect.ownKeys(G).forEach(ne=>{Ko(ne,G[ne])})}u&&Mf(u,t,"c");function ee(G,ne){Ze(ne)?ne.forEach(he=>G(he.bind(n))):ne&&G(ne.bind(n))}if(ee(h_,f),ee(mr,h),ee(d_,p),ee(p_,g),ee(c_,S),ee(u_,m),ee(x_,v),ee(v_,T),ee(__,I),ee(m_,M),ee(Mu,x),ee(g_,C),Ze(O))if(O.length){const G=t.exposed||(t.exposed={});O.forEach(ne=>{Object.defineProperty(G,ne,{get:()=>n[ne],set:he=>n[ne]=he,enumerable:!0})})}else t.exposed||(t.exposed={});R&&t.render===ii&&(t.render=R),N!=null&&(t.inheritAttrs=N),z&&(t.components=z),ie&&(t.directives=ie),C&&pp(t)}function E_(t,e,n=ii){Ze(t)&&(t=rc(t));for(const i in t){const s=t[i];let r;gt(s)?"default"in s?r=si(s.from||i,s.default,!0):r=si(s.from||i):r=si(s),tn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Mf(t,e,n){zn(Ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function _p(t,e,n,i){let s=i.includes(".")?hp(n,i):()=>n[i];if(Lt(t)){const r=e[t];nt(r)&&vs(s,r)}else if(nt(t))vs(s,t.bind(n));else if(gt(t))if(Ze(t))t.forEach(r=>_p(r,e,n,i));else{const r=nt(t.handler)?t.handler.bind(n):e[t.handler];nt(r)&&vs(s,r,t)}}function vp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ha(l,c,o,!0)),ha(l,e,o)),gt(e)&&r.set(e,l),l}function ha(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ha(t,r,n,!0),s&&s.forEach(o=>ha(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=b_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const b_={data:Ef,props:bf,emits:bf,methods:Nr,computed:Nr,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Nr,directives:Nr,watch:A_,provide:Ef,inject:T_};function Ef(t,e){return e?t?function(){return Yt(nt(t)?t.call(this,this):t,nt(e)?e.call(this,this):e)}:e:t}function T_(t,e){return Nr(rc(t),rc(e))}function rc(t){if(Ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function Nr(t,e){return t?Yt(Object.create(null),t,e):e}function bf(t,e){return t?Ze(t)&&Ze(e)?[...new Set([...t,...e])]:Yt(Object.create(null),yf(t),yf(e??{})):e}function A_(t,e){if(!t)return e;if(!e)return t;const n=Yt(Object.create(null),t);for(const i in e)n[i]=sn(t[i],e[i]);return n}function xp(){return{app:null,config:{isNativeTag:Id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w_=0;function R_(t,e){return function(i,s=null){nt(i)||(i=Yt({},i)),s!=null&&!gt(s)&&(s=null);const r=xp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:w_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:r0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&nt(u.install)?(o.add(u),u.install(c,...f)):nt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||cn(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Ha(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(zn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Js;Js=c;try{return u()}finally{Js=f}}};return c}}let Js=null;const C_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${On(e)}Modifiers`]||t[`${As(e)}Modifiers`];function P_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||yt;let s=n;const r=e.startsWith("update:"),o=r&&C_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Lt(u)?u.trim():u)),o.number&&(s=n.map(Da)));let a,l=i[a=ja(e)]||i[a=ja(On(e))];!l&&r&&(l=i[a=ja(As(e))]),l&&zn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zn(c,t,6,s)}}const D_=new WeakMap;function Sp(t,e,n=!1){const i=n?D_:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!nt(t)){const l=c=>{const u=Sp(c,e,!0);u&&(a=!0,Yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(gt(t)&&i.set(t,null),null):(Ze(r)?r.forEach(l=>o[l]=null):Yt(o,r),gt(t)&&i.set(t,o),o)}function Ba(t,e){return!t||!Ra(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),pt(t,e[0].toLowerCase()+e.slice(1))||pt(t,As(e))||pt(t,e))}function Tf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:S}=t,m=ua(t);let d,M;try{if(n.shapeFlag&4){const x=s||i,R=x;d=Jn(c.call(R,x,u,f,p,h,g)),M=a}else{const x=e;d=Jn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),M=e.props?a:L_(a)}}catch(x){xs.length=0,Ua(x,t,1),d=cn(Zi)}let E=d;if(M&&S!==!1){const x=Object.keys(M),{shapeFlag:R}=E;x.length&&R&7&&(r&&x.some(Ca)&&(M=I_(M,r)),E=ir(E,M,!1,!0))}return n.dirs&&(E=ir(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&yu(E,n.transition),d=E,ua(m),d}const L_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ra(n))&&((e||(e={}))[n]=t[n]);return e},I_=(t,e)=>{const n={};for(const i in t)(!Ca(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function N_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Af(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(yp(o,i,h)&&!Ba(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Af(i,o,c):!0:!!o;return!1}function Af(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(yp(e,t,r)&&!Ba(n,r))return!0}return!1}function yp(t,e,n){const i=t[n],s=e[n];return n==="style"&&gt(i)&&gt(s)?!pr(i,s):i!==s}function U_({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Mp={},Ep=()=>Object.create(Mp),bp=t=>Object.getPrototypeOf(t)===Mp;function O_(t,e,n,i=!1){const s={},r=Ep();t.propsDefaults=Object.create(null),Tp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:np(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function F_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=dt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ba(t.emitsOptions,h))continue;const p=e[h];if(l)if(pt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=On(h);s[g]=oc(l,a,g,p,t,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{Tp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=As(f))===f||!pt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=oc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!pt(e,f))&&(delete r[f],c=!0)}c&&yi(t.attrs,"set","")}function Tp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Br(l))continue;const c=e[l];let u;s&&pt(s,u=On(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ba(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=dt(n),c=a||yt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=oc(s,l,f,c[f],t,!pt(c,f))}}return o}function oc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&nt(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=ao(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===As(n))&&(i=!0))}return i}const B_=new WeakMap;function Ap(t,e,n=!1){const i=n?B_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!nt(t)){const u=f=>{l=!0;const[h,p]=Ap(f,e,!0);Yt(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return gt(t)&&i.set(t,$s),$s;if(Ze(r))for(let u=0;u<r.length;u++){const f=On(r[u]);wf(f)&&(o[f]=yt)}else if(r)for(const u in r){const f=On(u);if(wf(f)){const h=r[u],p=o[f]=Ze(h)||nt(h)?{type:h}:Yt({},h),g=p.type;let S=!1,m=!0;if(Ze(g))for(let d=0;d<g.length;++d){const M=g[d],E=nt(M)&&M.name;if(E==="Boolean"){S=!0;break}else E==="String"&&(m=!1)}else S=nt(g)&&g.name==="Boolean";p[0]=S,p[1]=m,(S||pt(p,"default"))&&a.push(f)}}const c=[o,a];return gt(t)&&i.set(t,c),c}function wf(t){return t[0]!=="$"&&!Br(t)}const Eu=t=>t==="_"||t==="_ctx"||t==="$stable",bu=t=>Ze(t)?t.map(Jn):[Jn(t)],z_=(t,e,n)=>{if(e._n)return e;const i=up((...s)=>bu(e(...s)),n);return i._c=!1,i},wp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Eu(s))continue;const r=t[s];if(nt(r))e[s]=z_(s,r,i);else if(r!=null){const o=bu(r);e[s]=()=>o}}},Rp=(t,e)=>{const n=bu(e);t.slots.default=()=>n},Cp=(t,e,n)=>{for(const i in e)(n||!Eu(i))&&(t[i]=e[i])},H_=(t,e,n)=>{const i=t.slots=Ep();if(t.vnode.shapeFlag&32){const s=e._;s?(Cp(i,e,n),n&&Bd(i,"_",s,!0)):wp(e,i)}else e&&Rp(t,e)},V_=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Cp(s,e,n):(r=!e.$stable,wp(e,s)),o=e}else e&&(Rp(t,e),o={default:1});if(r)for(const a in s)!Eu(a)&&o[a]==null&&delete s[a]},pn=q_;function k_(t){return G_(t)}function G_(t,e){const n=La();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=ii,insertStaticContent:g}=t,S=(w,D,B,Z=null,k=null,J=null,pe=void 0,de=null,me=!!D.dynamicChildren)=>{if(w===D)return;w&&!Mr(w,D)&&(Z=F(w),ye(w,k,J,!0),w=null),D.patchFlag===-2&&(me=!1,D.dynamicChildren=null);const{type:ae,ref:Ee,shapeFlag:L}=D;switch(ae){case za:m(w,D,B,Z);break;case Zi:d(w,D,B,Z);break;case Zo:w==null&&M(D,B,Z,pe);break;case Dt:z(w,D,B,Z,k,J,pe,de,me);break;default:L&1?R(w,D,B,Z,k,J,pe,de,me):L&6?ie(w,D,B,Z,k,J,pe,de,me):(L&64||L&128)&&ae.process(w,D,B,Z,k,J,pe,de,me,_e)}Ee!=null&&k?Vr(Ee,w&&w.ref,J,D||w,!D):Ee==null&&w&&w.ref!=null&&Vr(w.ref,null,J,w,!0)},m=(w,D,B,Z)=>{if(w==null)i(D.el=a(D.children),B,Z);else{const k=D.el=w.el;D.children!==w.children&&c(k,D.children)}},d=(w,D,B,Z)=>{w==null?i(D.el=l(D.children||""),B,Z):D.el=w.el},M=(w,D,B,Z)=>{[w.el,w.anchor]=g(w.children,D,B,Z,w.el,w.anchor)},E=({el:w,anchor:D},B,Z)=>{let k;for(;w&&w!==D;)k=h(w),i(w,B,Z),w=k;i(D,B,Z)},x=({el:w,anchor:D})=>{let B;for(;w&&w!==D;)B=h(w),s(w),w=B;s(D)},R=(w,D,B,Z,k,J,pe,de,me)=>{if(D.type==="svg"?pe="svg":D.type==="math"&&(pe="mathml"),w==null)T(D,B,Z,k,J,pe,de,me);else{const ae=w.el&&w.el._isVueCE?w.el:null;try{ae&&ae._beginPatch(),C(w,D,k,J,pe,de,me)}finally{ae&&ae._endPatch()}}},T=(w,D,B,Z,k,J,pe,de)=>{let me,ae;const{props:Ee,shapeFlag:L,transition:Ue,dirs:Ae}=w;if(me=w.el=o(w.type,J,Ee&&Ee.is,Ee),L&8?u(me,w.children):L&16&&v(w.children,me,null,Z,k,rl(w,J),pe,de),Ae&&ns(w,null,Z,"created"),I(me,w,w.scopeId,pe,Z),Ee){for(const _ in Ee)_!=="value"&&!Br(_)&&r(me,_,null,Ee[_],J,Z);"value"in Ee&&r(me,"value",null,Ee.value,J),(ae=Ee.onVnodeBeforeMount)&&Xn(ae,Z,w)}Ae&&ns(w,null,Z,"beforeMount");const b=W_(k,Ue);b&&Ue.beforeEnter(me),i(me,D,B),((ae=Ee&&Ee.onVnodeMounted)||b||Ae)&&pn(()=>{try{ae&&Xn(ae,Z,w),b&&Ue.enter(me),Ae&&ns(w,null,Z,"mounted")}finally{}},k)},I=(w,D,B,Z,k)=>{if(B&&p(w,B),Z)for(let J=0;J<Z.length;J++)p(w,Z[J]);if(k){let J=k.subTree;if(D===J||Ip(J.type)&&(J.ssContent===D||J.ssFallback===D)){const pe=k.vnode;I(w,pe,pe.scopeId,pe.slotScopeIds,k.parent)}}},v=(w,D,B,Z,k,J,pe,de,me=0)=>{for(let ae=me;ae<w.length;ae++){const Ee=w[ae]=de?Si(w[ae]):Jn(w[ae]);S(null,Ee,D,B,Z,k,J,pe,de)}},C=(w,D,B,Z,k,J,pe)=>{const de=D.el=w.el;let{patchFlag:me,dynamicChildren:ae,dirs:Ee}=D;me|=w.patchFlag&16;const L=w.props||yt,Ue=D.props||yt;let Ae;if(B&&is(B,!1),(Ae=Ue.onVnodeBeforeUpdate)&&Xn(Ae,B,D,w),Ee&&ns(D,w,B,"beforeUpdate"),B&&is(B,!0),ae&&(!w.dynamicChildren||w.dynamicChildren.length!==ae.length)&&(me=0,pe=!1,ae=null),(L.innerHTML&&Ue.innerHTML==null||L.textContent&&Ue.textContent==null)&&u(de,""),ae?O(w.dynamicChildren,ae,de,B,Z,rl(D,k),J):pe||ne(w,D,de,null,B,Z,rl(D,k),J,!1),me>0){if(me&16)N(de,L,Ue,B,k);else if(me&2&&L.class!==Ue.class&&r(de,"class",null,Ue.class,k),me&4&&r(de,"style",L.style,Ue.style,k),me&8){const b=D.dynamicProps;for(let _=0;_<b.length;_++){const A=b[_],P=L[A],V=Ue[A];(V!==P||A==="value")&&r(de,A,P,V,k,B)}}me&1&&w.children!==D.children&&u(de,D.children)}else!pe&&ae==null&&N(de,L,Ue,B,k);((Ae=Ue.onVnodeUpdated)||Ee)&&pn(()=>{Ae&&Xn(Ae,B,D,w),Ee&&ns(D,w,B,"updated")},Z)},O=(w,D,B,Z,k,J,pe)=>{for(let de=0;de<D.length;de++){const me=w[de],ae=D[de],Ee=me.el&&(me.type===Dt||!Mr(me,ae)||me.shapeFlag&198)?f(me.el):B;S(me,ae,Ee,null,Z,k,J,pe,!0)}},N=(w,D,B,Z,k)=>{if(D!==B){if(D!==yt)for(const J in D)!Br(J)&&!(J in B)&&r(w,J,D[J],null,k,Z);for(const J in B){if(Br(J))continue;const pe=B[J],de=D[J];pe!==de&&J!=="value"&&r(w,J,de,pe,k,Z)}"value"in B&&r(w,"value",D.value,B.value,k)}},z=(w,D,B,Z,k,J,pe,de,me)=>{const ae=D.el=w?w.el:a(""),Ee=D.anchor=w?w.anchor:a("");let{patchFlag:L,dynamicChildren:Ue,slotScopeIds:Ae}=D;Ae&&(de=de?de.concat(Ae):Ae),w==null?(i(ae,B,Z),i(Ee,B,Z),v(D.children||[],B,Ee,k,J,pe,de,me)):L>0&&L&64&&Ue&&w.dynamicChildren&&w.dynamicChildren.length===Ue.length?(O(w.dynamicChildren,Ue,B,k,J,pe,de),(D.key!=null||k&&D===k.subTree)&&Pp(w,D,!0)):ne(w,D,B,Ee,k,J,pe,de,me)},ie=(w,D,B,Z,k,J,pe,de,me)=>{D.slotScopeIds=de,w==null?D.shapeFlag&512?k.ctx.activate(D,B,Z,pe,me):oe(D,B,Z,k,J,pe,me):X(w,D,me)},oe=(w,D,B,Z,k,J,pe)=>{const de=w.component=j_(w,Z,k);if(mp(w)&&(de.ctx.renderer=_e),e0(de,!1,pe),de.asyncDep){if(k&&k.registerDep(de,ee,pe),!w.el){const me=de.subTree=cn(Zi);d(null,me,D,B),w.placeholder=me.el}}else ee(de,w,D,B,k,J,pe)},X=(w,D,B)=>{const Z=D.component=w.component;if(N_(w,D,B))if(Z.asyncDep&&!Z.asyncResolved){G(Z,D,B);return}else Z.next=D,Z.update();else D.el=w.el,Z.vnode=D},ee=(w,D,B,Z,k,J,pe)=>{const de=()=>{if(w.isMounted){let{next:L,bu:Ue,u:Ae,parent:b,vnode:_}=w;{const fe=Dp(w);if(fe){L&&(L.el=_.el,G(w,L,pe)),fe.asyncDep.then(()=>{pn(()=>{w.isUnmounted||ae()},k)});return}}let A=L,P;is(w,!1),L?(L.el=_.el,G(w,L,pe)):L=_,Ue&&$o(Ue),(P=L.props&&L.props.onVnodeBeforeUpdate)&&Xn(P,b,L,_),is(w,!0);const V=Tf(w),ce=w.subTree;w.subTree=V,S(ce,V,f(ce.el),F(ce),w,k,J),L.el=V.el,A===null&&U_(w,V.el),Ae&&pn(Ae,k),(P=L.props&&L.props.onVnodeUpdated)&&pn(()=>Xn(P,b,L,_),k)}else{let L;const{el:Ue,props:Ae}=D,{bm:b,m:_,parent:A,root:P,type:V}=w,ce=kr(D);is(w,!1),b&&$o(b),!ce&&(L=Ae&&Ae.onVnodeBeforeMount)&&Xn(L,A,D),is(w,!0);{P.ce&&P.ce._hasShadowRoot()&&P.ce._injectChildStyle(V,w.parent?w.parent.type:void 0);const fe=w.subTree=Tf(w);S(null,fe,B,Z,w,k,J),D.el=fe.el}if(_&&pn(_,k),!ce&&(L=Ae&&Ae.onVnodeMounted)){const fe=D;pn(()=>Xn(L,A,fe),k)}(D.shapeFlag&256||A&&kr(A.vnode)&&A.vnode.shapeFlag&256)&&w.a&&pn(w.a,k),w.isMounted=!0,D=B=Z=null}};w.scope.on();const me=w.effect=new kd(de);w.scope.off();const ae=w.update=me.run.bind(me),Ee=w.job=me.runIfDirty.bind(me);Ee.i=w,Ee.id=w.uid,me.scheduler=()=>Su(Ee),is(w,!0),ae()},G=(w,D,B)=>{D.component=w;const Z=w.vnode.props;w.vnode=D,w.next=null,F_(w,D.props,Z,B),V_(w,D.children,B),wi(),vf(w),Ri()},ne=(w,D,B,Z,k,J,pe,de,me=!1)=>{const ae=w&&w.children,Ee=w?w.shapeFlag:0,L=D.children,{patchFlag:Ue,shapeFlag:Ae}=D;if(Ue>0){if(Ue&128){xe(ae,L,B,Z,k,J,pe,de,me);return}else if(Ue&256){he(ae,L,B,Z,k,J,pe,de,me);return}}Ae&8?(Ee&16&&q(ae,k,J),L!==ae&&u(B,L)):Ee&16?Ae&16?xe(ae,L,B,Z,k,J,pe,de,me):q(ae,k,J,!0):(Ee&8&&u(B,""),Ae&16&&v(L,B,Z,k,J,pe,de,me))},he=(w,D,B,Z,k,J,pe,de,me)=>{w=w||$s,D=D||$s;const ae=w.length,Ee=D.length,L=Math.min(ae,Ee);let Ue;for(Ue=0;Ue<L;Ue++){const Ae=D[Ue]=me?Si(D[Ue]):Jn(D[Ue]);S(w[Ue],Ae,B,null,k,J,pe,de,me)}ae>Ee?q(w,k,J,!0,!1,L):v(D,B,Z,k,J,pe,de,me,L)},xe=(w,D,B,Z,k,J,pe,de,me)=>{let ae=0;const Ee=D.length;let L=w.length-1,Ue=Ee-1;for(;ae<=L&&ae<=Ue;){const Ae=w[ae],b=D[ae]=me?Si(D[ae]):Jn(D[ae]);if(Mr(Ae,b))S(Ae,b,B,null,k,J,pe,de,me);else break;ae++}for(;ae<=L&&ae<=Ue;){const Ae=w[L],b=D[Ue]=me?Si(D[Ue]):Jn(D[Ue]);if(Mr(Ae,b))S(Ae,b,B,null,k,J,pe,de,me);else break;L--,Ue--}if(ae>L){if(ae<=Ue){const Ae=Ue+1,b=Ae<Ee?D[Ae].el:Z;for(;ae<=Ue;)S(null,D[ae]=me?Si(D[ae]):Jn(D[ae]),B,b,k,J,pe,de,me),ae++}}else if(ae>Ue)for(;ae<=L;)ye(w[ae],k,J,!0),ae++;else{const Ae=ae,b=ae,_=new Map;for(ae=b;ae<=Ue;ae++){const Se=D[ae]=me?Si(D[ae]):Jn(D[ae]);Se.key!=null&&_.set(Se.key,ae)}let A,P=0;const V=Ue-b+1;let ce=!1,fe=0;const re=new Array(V);for(ae=0;ae<V;ae++)re[ae]=0;for(ae=Ae;ae<=L;ae++){const Se=w[ae];if(P>=V){ye(Se,k,J,!0);continue}let Ne;if(Se.key!=null)Ne=_.get(Se.key);else for(A=b;A<=Ue;A++)if(re[A-b]===0&&Mr(Se,D[A])){Ne=A;break}Ne===void 0?ye(Se,k,J,!0):(re[Ne-b]=ae+1,Ne>=fe?fe=Ne:ce=!0,S(Se,D[Ne],B,null,k,J,pe,de,me),P++)}const le=ce?X_(re):$s;for(A=le.length-1,ae=V-1;ae>=0;ae--){const Se=b+ae,Ne=D[Se],Te=D[Se+1],be=Se+1<Ee?Te.el||Lp(Te):Z;re[ae]===0?S(null,Ne,B,be,k,J,pe,de,me):ce&&(A<0||ae!==le[A]?ve(Ne,B,be,2):A--)}}},ve=(w,D,B,Z,k=null)=>{const{el:J,type:pe,transition:de,children:me,shapeFlag:ae}=w;if(ae&6){ve(w.component.subTree,D,B,Z);return}if(ae&128){w.suspense.move(D,B,Z);return}if(ae&64){pe.move(w,D,B,_e);return}if(pe===Dt){i(J,D,B);for(let L=0;L<me.length;L++)ve(me[L],D,B,Z);i(w.anchor,D,B);return}if(pe===Zo){E(w,D,B);return}if(Z!==2&&ae&1&&de)if(Z===0)de.persisted&&!J[il]?i(J,D,B):(de.beforeEnter(J),i(J,D,B),pn(()=>de.enter(J),k));else{const{leave:L,delayLeave:Ue,afterLeave:Ae}=de,b=()=>{w.ctx.isUnmounted?s(J):i(J,D,B)},_=()=>{const A=J._isLeaving||!!J[il];J._isLeaving&&J[il](!0),de.persisted&&!A?b():L(J,()=>{b(),Ae&&Ae()})};Ue?Ue(J,b,_):_()}else i(J,D,B)},ye=(w,D,B,Z=!1,k=!1)=>{const{type:J,props:pe,ref:de,children:me,dynamicChildren:ae,shapeFlag:Ee,patchFlag:L,dirs:Ue,cacheIndex:Ae,memo:b}=w;if(L===-2&&(k=!1),de!=null&&(wi(),Vr(de,null,B,w,!0),Ri()),Ae!=null&&(D.renderCache[Ae]=void 0),Ee&256){D.ctx.deactivate(w);return}const _=Ee&1&&Ue,A=!kr(w);let P;if(A&&(P=pe&&pe.onVnodeBeforeUnmount)&&Xn(P,D,w),Ee&6)je(w.component,B,Z);else{if(Ee&128){w.suspense.unmount(B,Z);return}_&&ns(w,null,D,"beforeUnmount"),Ee&64?w.type.remove(w,D,B,_e,Z):ae&&!ae.hasOnce&&(J!==Dt||L>0&&L&64)?q(ae,D,B,!1,!0):(J===Dt&&L&384||!k&&Ee&16)&&q(me,D,B),Z&&Ye(w)}const V=b!=null&&Ae==null;(A&&(P=pe&&pe.onVnodeUnmounted)||_||V)&&pn(()=>{P&&Xn(P,D,w),_&&ns(w,null,D,"unmounted"),V&&(w.el=null)},B)},Ye=w=>{const{type:D,el:B,anchor:Z,transition:k}=w;if(D===Dt){it(B,Z);return}if(D===Zo){x(w);return}const J=()=>{s(B),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(w.shapeFlag&1&&k&&!k.persisted){const{leave:pe,delayLeave:de}=k,me=()=>pe(B,J);de?de(w.el,J,me):me()}else J()},it=(w,D)=>{let B;for(;w!==D;)B=h(w),s(w),w=B;s(D)},je=(w,D,B)=>{const{bum:Z,scope:k,job:J,subTree:pe,um:de,m:me,a:ae}=w;Rf(me),Rf(ae),Z&&$o(Z),k.stop(),J&&(J.flags|=8,ye(pe,w,D,B)),de&&pn(de,D),pn(()=>{w.isUnmounted=!0},D)},q=(w,D,B,Z=!1,k=!1,J=0)=>{for(let pe=J;pe<w.length;pe++)ye(w[pe],D,B,Z,k)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const D=h(w.anchor||w.el),B=D&&D[a_];return B?h(B):D};let K=!1;const te=(w,D,B)=>{let Z;w==null?D._vnode&&(ye(D._vnode,null,null,!0),Z=D._vnode.component):S(D._vnode||null,w,D,null,null,null,B),D._vnode=w,K||(K=!0,vf(Z),ap(),K=!1)},_e={p:S,um:ye,m:ve,r:Ye,mt:oe,mc:v,pc:ne,pbc:O,n:F,o:t};return{render:te,hydrate:void 0,createApp:R_(te)}}function rl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function is({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function W_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pp(t,e,n=!1){const i=t.children,s=e.children;if(Ze(i)&&Ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Si(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Pp(o,a)),a.type===za&&(a.patchFlag===-1&&(a=s[r]=Si(a)),a.el=o.el),a.type===Zi&&!a.el&&(a.el=o.el)}}function X_(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Dp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dp(e)}function Rf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Lp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Lp(e.subTree):null}const Ip=t=>t.__isSuspense;function q_(t,e){e&&e.pendingBranch?Ze(t)?e.effects.push(...t):e.effects.push(t):i_(t)}const Dt=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),Zi=Symbol.for("v-cmt"),Zo=Symbol.for("v-stc"),xs=[];let Mn=null;function Be(t=!1){xs.push(Mn=t?null:[])}function Np(){xs.pop(),Mn=xs[xs.length-1]||null}let Kr=1;function da(t,e=!1){Kr+=t,t<0&&Mn&&e&&(Mn.hasOnce=!0)}function Up(t){return t.dynamicChildren=Kr>0?Mn||$s:null,Np(),Kr>0&&Mn&&Mn.push(t),t}function He(t,e,n,i,s,r){return Up($(t,e,n,i,s,r,!0))}function Op(t,e,n,i,s){return Up(cn(t,e,n,i,s,!0))}function pa(t){return t?t.__v_isVNode===!0:!1}function Mr(t,e){return t.type===e.type&&t.key===e.key}const Fp=({key:t})=>t??null,Jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Lt(t)||tn(t)||nt(t)?{i:wn,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,i=0,s=null,r=t===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fp(e),ref:e&&Jo(e),scopeId:cp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wn};return a?(ma(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Lt(n)?8:16),Kr>0&&!o&&Mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Mn.push(l),l}const cn=Y_;function Y_(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===S_)&&(t=Zi),pa(t)){const a=ir(t,e,!0);return n&&ma(a,n),Kr>0&&!r&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(t)]=a:Mn.push(a)),a.patchFlag=-2,a}if(s0(t)&&(t=t.__vccOpts),e){e=$_(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=Kn(a)),gt(l)&&(xu(l)&&!Ze(l)&&(l=Yt({},l)),e.style=Xr(l))}const o=Lt(t)?1:Ip(t)?128:l_(t)?64:gt(t)?4:nt(t)?2:0;return $(t,e,n,i,s,o,r,!0)}function $_(t){return t?xu(t)||bp(t)?Yt({},t):t:null}function ir(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?K_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Fp(c),ref:e&&e.ref?n&&r?Ze(r)?r.concat(Jo(e)):[r,Jo(e)]:Jo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&yu(u,l.clone(u)),u}function In(t=" ",e=0){return cn(za,null,t,e)}function oo(t,e){const n=cn(Zo,null,t);return n.staticCount=e,n}function Ln(t="",e=!1){return e?(Be(),Op(Zi,null,t)):cn(Zi,null,t)}function Jn(t){return t==null||typeof t=="boolean"?cn(Zi):Ze(t)?cn(Dt,null,t.slice()):pa(t)?Si(t):cn(za,null,String(t))}function Si(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function ma(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ze(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ma(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!bp(e)?e._ctx=wn:s===3&&wn&&(wn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(nt(e)){if(i&65){ma(t,{default:e});return}e={default:e,_ctx:wn},n=32}else e=String(e),i&64?(n=16,e=[In(e)]):n=8;t.children=e,t.shapeFlag|=n}function K_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Kn([e.class,i.class]));else if(s==="style")e.style=Xr([e.style,i.style]);else if(Ra(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ca(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Xn(t,e,n,i=null){zn(t,e,7,[n,i])}const Z_=xp();let J_=0;function j_(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Z_,r={uid:J_++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ap(i,s),emitsOptions:Sp(i,s),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=P_.bind(null,r),t.ce&&t.ce(r),r}let ln=null;const Q_=()=>ln||wn;let ga,ac;{const t=La(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ga=e("__VUE_INSTANCE_SETTERS__",n=>ln=n),ac=e("__VUE_SSR_SETTERS__",n=>Zr=n)}const ao=t=>{const e=ln;return ga(t),t.scope.on(),()=>{t.scope.off(),ga(e)}},Cf=()=>{ln&&ln.scope.off(),ga(null)};function Bp(t){return t.vnode.shapeFlag&4}let Zr=!1;function e0(t,e=!1,n=!1){e&&ac(e);const{props:i,children:s}=t.vnode,r=Bp(t);O_(t,i,r,e),H_(t,s,n||e);const o=r?t0(t,e):void 0;return e&&ac(!1),o}function t0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,y_);const{setup:i}=n;if(i){wi();const s=t.setupContext=i.length>1?i0(t):null,r=ao(t),o=ro(i,t,0,[t.props,s]),a=Nd(o);if(Ri(),r(),(a||t.sp)&&!kr(t)&&pp(t),a){if(o.then(Cf,Cf),e)return o.then(l=>{Pf(t,l)}).catch(l=>{Ua(l,t,0)});t.asyncDep=o}else Pf(t,o)}else zp(t)}function Pf(t,e,n){nt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=sp(e)),zp(t)}function zp(t,e,n){const i=t.type;t.render||(t.render=i.render||ii);{const s=ao(t);wi();try{M_(t)}finally{Ri(),s()}}}const n0={get(t,e){return Qt(t,"get",""),t[e]}};function i0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,n0),slots:t.slots,emit:t.emit,expose:e}}function Ha(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sp(Yg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gr)return Gr[n](t)},has(e,n){return n in e||n in Gr}})):t.proxy}function s0(t){return nt(t)&&"__vccOpts"in t}const Tt=(t,e)=>jg(t,e,Zr);function Hp(t,e,n){try{da(-1);const i=arguments.length;return i===2?gt(e)&&!Ze(e)?pa(e)?cn(t,null,[e]):cn(t,e):cn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&pa(n)&&(n=[n]),cn(t,e,n))}finally{da(1)}}const r0="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lc;const Df=typeof window<"u"&&window.trustedTypes;if(Df)try{lc=Df.createPolicy("vue",{createHTML:t=>t})}catch{}const Vp=lc?t=>lc.createHTML(t):t=>t,o0="http://www.w3.org/2000/svg",a0="http://www.w3.org/1998/Math/MathML",xi=typeof document<"u"?document:null,Lf=xi&&xi.createElement("template"),l0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?xi.createElementNS(o0,t):e==="mathml"?xi.createElementNS(a0,t):n?xi.createElement(t,{is:n}):xi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>xi.createTextNode(t),createComment:t=>xi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Lf.innerHTML=Vp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Lf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},c0=Symbol("_vtc");function u0(t,e,n){const i=t[c0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const If=Symbol("_vod"),f0=Symbol("_vsh"),h0=Symbol(""),d0=/(?:^|;)\s*display\s*:/;function p0(t,e,n){const i=t.style,s=Lt(n);let r=!1;if(n&&!s){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ur(i,a,"")}else for(const o in e)n[o]==null&&Ur(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?g0(t,o,!Lt(e)&&e?e[o]:void 0,a)||Ur(i,o,a):Ur(i,o,"")}}else if(s){if(e!==n){const o=i[h0];o&&(n+=";"+o),i.cssText=n,r=d0.test(n)}}else e&&t.removeAttribute("style");If in t&&(t[If]=r?i.display:"",t[f0]&&(i.display="none"))}const Nf=/\s*!important$/;function Ur(t,e,n){if(Ze(n))n.forEach(i=>Ur(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=m0(t,e);Nf.test(n)?t.setProperty(As(i),n.replace(Nf,""),"important"):t[i]=n}}const Uf=["Webkit","Moz","ms"],ol={};function m0(t,e){const n=ol[e];if(n)return n;let i=On(e);if(i!=="filter"&&i in t)return ol[e]=i;i=Fd(i);for(let s=0;s<Uf.length;s++){const r=Uf[s]+i;if(r in t)return ol[e]=r}return e}function g0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Lt(i)&&n===i}const Of="http://www.w3.org/1999/xlink";function Ff(t,e,n,i,s,r=Ag(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Of,e.slice(6,e.length)):t.setAttributeNS(Of,e,n):n==null||r&&!zd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ci(n)?String(n):n)}function Bf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Vp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=zd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function qi(t,e,n,i){t.addEventListener(e,n,i)}function _0(t,e,n,i){t.removeEventListener(e,n,i)}const zf=Symbol("_vei");function v0(t,e,n,i,s=null){const r=t[zf]||(t[zf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=y0(e);if(i){const c=r[e]=b0(i,s);qi(t,a,c,l)}else o&&(_0(t,a,o,l),r[e]=void 0)}}const x0=/(Once|Passive|Capture)$/,S0=/^on:?(?:Once|Passive|Capture)$/;function y0(t){let e,n;for(;(n=t.match(x0))&&!S0.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):As(t.slice(2)),e]}let al=0;const M0=Promise.resolve(),E0=()=>al||(M0.then(()=>al=0),al=Date.now());function b0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(Ze(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&zn(c,e,5,a)}}else zn(s,e,5,[i])};return n.value=t,n.attached=E0(),n}const Hf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,T0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?u0(t,i,o):e==="style"?p0(t,n,i):Ra(e)?Ca(e)||v0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A0(t,e,i,o))?(Bf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ff(t,e,i,o,r,e!=="value")):t._isVueCE&&(w0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Lt(i)))?Bf(t,On(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Ff(t,e,i,o))};function A0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hf(e)&&nt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hf(e)&&Lt(n)?!1:e in t}function w0(t,e){const n=t._def.props;if(!n)return!1;const i=On(e);return Array.isArray(n)?n.some(s=>On(s)===i):Object.keys(n).some(s=>On(s)===i)}const sr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ze(e)?n=>$o(e,n):e};function R0(t){t.target.composing=!0}function Vf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bi=Symbol("_assign");function kf(t,e,n){return e&&(t=t.trim()),n&&(t=Da(t)),t}const C0={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[bi]=sr(s);const r=i||s.props&&s.props.type==="number";qi(t,e?"change":"input",o=>{o.target.composing||t[bi](kf(t.value,n,r))}),(n||r)&&qi(t,"change",()=>{t.value=kf(t.value,n,r)}),e||(qi(t,"compositionstart",R0),qi(t,"compositionend",Vf),qi(t,"change",Vf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[bi]=sr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Da(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},P0={deep:!0,created(t,e,n){t[bi]=sr(n),qi(t,"change",()=>{const i=t._modelValue,s=Jr(t),r=t.checked,o=t[bi];if(Ze(i)){const a=hu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(dr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(kp(t,r))})},mounted:Gf,beforeUpdate(t,e,n){t[bi]=sr(n),Gf(t,e,n)}};function Gf(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Ze(e))s=hu(e,i.props.value)>-1;else if(dr(e))s=e.has(i.props.value);else{if(e===n)return;s=pr(e,kp(t,!0))}t.checked!==s&&(t.checked=s)}const ll={deep:!0,created(t,{value:e,modifiers:{number:n}},i){t._modelValue=e,qi(t,"change",()=>{const s=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?Da(Jr(r)):Jr(r));t[bi](t.multiple?dr(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,Oa(()=>{t._assigning=!1})}),t[bi]=sr(i)},mounted(t,{value:e}){Wf(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[bi]=sr(n)},updated(t,{value:e}){t._assigning||Wf(t,e)}};function Wf(t,e){const n=t.multiple,i=Ze(e);if(!(n&&!i&&!dr(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Jr(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=hu(e,a)>-1}else o.selected=e.has(a);else if(pr(Jr(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Jr(t){return"_value"in t?t._value:t.value}function kp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const D0=Yt({patchProp:T0},l0);let Xf;function L0(){return Xf||(Xf=k_(D0))}const I0=(...t)=>{const e=L0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=U0(i);if(!s)return;const r=e._component;!nt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,N0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function N0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function U0(t){return Lt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const qs=typeof document<"u";function Gp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function O0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Gp(t.default)}const ht=Object.assign;function cl(t,e){const n={};for(const i in e){const s=e[i];n[i]=Hn(s)?s.map(t):t(s)}return n}const Wr=()=>{},Hn=Array.isArray;function qf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Wp=/#/g,F0=/&/g,B0=/\//g,z0=/=/g,H0=/\?/g,Xp=/\+/g,V0=/%5B/g,k0=/%5D/g,qp=/%5E/g,G0=/%60/g,Yp=/%7B/g,W0=/%7C/g,$p=/%7D/g,X0=/%20/g;function Tu(t){return t==null?"":encodeURI(""+t).replace(W0,"|").replace(V0,"[").replace(k0,"]")}function q0(t){return Tu(t).replace(Yp,"{").replace($p,"}").replace(qp,"^")}function cc(t){return Tu(t).replace(Xp,"%2B").replace(X0,"+").replace(Wp,"%23").replace(F0,"%26").replace(G0,"`").replace(Yp,"{").replace($p,"}").replace(qp,"^")}function Y0(t){return cc(t).replace(z0,"%3D")}function $0(t){return Tu(t).replace(Wp,"%23").replace(H0,"%3F")}function K0(t){return $0(t).replace(B0,"%2F")}function jr(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Z0=/\/$/,J0=t=>t.replace(Z0,"");function ul(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=tv(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:jr(o)}}function j0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Q0(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&rr(e.matched[i],n.matched[s])&&Kp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function rr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Kp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!ev(t[n],e[n]))return!1;return!0}function ev(t,e){return Hn(t)?$f(t,e):Hn(e)?$f(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function $f(t,e){return Hn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function tv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Oi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let uc=function(t){return t.pop="pop",t.push="push",t}({}),fl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function nv(t){if(!t)if(qs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),J0(t)}const iv=/^[^#]+#/;function sv(t,e){return t.replace(iv,"#")+e}function rv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Va=()=>({left:window.scrollX,top:window.scrollY});function ov(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kf(t,e){return(history.state?history.state.position-e:-1)+t}const fc=new Map;function av(t,e){fc.set(t,e)}function lv(t){const e=fc.get(t);return fc.delete(t),e}function cv(t){return typeof t=="string"||t&&typeof t=="object"}function Zp(t){return typeof t=="string"||typeof t=="symbol"}let Pt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Jp=Symbol("");Pt.MATCHER_NOT_FOUND+"",Pt.NAVIGATION_GUARD_REDIRECT+"",Pt.NAVIGATION_ABORTED+"",Pt.NAVIGATION_CANCELLED+"",Pt.NAVIGATION_DUPLICATED+"";function or(t,e){return ht(new Error,{type:t,[Jp]:!0},e)}function di(t,e){return t instanceof Error&&Jp in t&&(e==null||!!(t.type&e))}const uv=["params","query","hash"];function fv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of uv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function hv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(Xp," "),r=s.indexOf("="),o=jr(r<0?s:s.slice(0,r)),a=r<0?null:jr(s.slice(r+1));if(o in e){let l=e[o];Hn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function Zf(t){let e="";for(let n in t){const i=t[n];if(n=Y0(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Hn(i)?i.map(s=>s&&cc(s)):[i&&cc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function dv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Hn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const pv=Symbol(""),Jf=Symbol(""),Au=Symbol(""),wu=Symbol(""),hc=Symbol("");function Er(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Wi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(or(Pt.NAVIGATION_ABORTED,{from:n,to:e})):h instanceof Error?l(h):cv(h)?l(or(Pt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function hl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Gp(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Wi(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=O0(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&Wi(h,n,i,o,a,s)()}))}}return r}function mv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>rr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>rr(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let gv=()=>location.protocol+"//"+location.host;function jp(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),Yf(a,"")}return Yf(n,t)+i+s}function _v(t,e,n,i){let s=[],r=[],o=null;const a=({state:h})=>{const p=jp(t,location),g=n.value,S=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===g){o=null;return}m=S?h.position-S.position:0}else i(p);s.forEach(d=>{d(n.value,g,{delta:m,type:uc.pop,direction:m?m>0?fl.forward:fl.back:fl.unknown})})};function l(){o=n.value}function c(h){s.push(h);const p=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ht({},h.state,{scroll:Va()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function jf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Va():null}}function vv(t){const{history:e,location:n}=window,i={value:jp(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:gv()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){r(l,ht({},e.state,jf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=ht({},s.value,e.state,{forward:l,scroll:Va()});r(u.current,u,!0),r(l,ht({},jf(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function xv(t){t=nv(t);const e=vv(t),n=_v(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ht({location:"",base:t,go:i,createHref:sv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let fs=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Bt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Bt||{});const Sv={type:fs.Static,value:""},yv=/[a-zA-Z0-9_]/;function Mv(t){if(!t)return[[]];if(t==="/")return[[Sv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=Bt.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===Bt.Static?r.push({type:fs.Static,value:c}):n===Bt.Param||n===Bt.ParamRegExp||n===Bt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:fs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Bt.ParamRegExp){i=n,n=Bt.EscapeNext;continue}switch(n){case Bt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=Bt.Param):h();break;case Bt.EscapeNext:h(),n=i;break;case Bt.Param:l==="("?n=Bt.ParamRegExp:yv.test(l)?h():(f(),n=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Bt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Bt.ParamRegExpEnd:u+=l;break;case Bt.ParamRegExpEnd:f(),n=Bt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Bt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const Qf="[^/]+?",Ev={sensitive:!1,strict:!1,start:!0,end:!0};var on=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(on||{});const bv=/[.+*?^${}()[\]/\\]/g;function Tv(t,e){const n=ht({},Ev,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[on.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=on.Segment+(n.sensitive?on.BonusCaseSensitive:0);if(h.type===fs.Static)f||(s+="/"),s+=h.value.replace(bv,"\\$&"),p+=on.Static;else if(h.type===fs.Param){const{value:g,repeatable:S,optional:m,regexp:d}=h;r.push({name:g,repeatable:S,optional:m});const M=d||Qf;if(M!==Qf){p+=on.BonusCustomRegExp;try{`${M}`}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+x.message)}}let E=S?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,p+=on.Dynamic,m&&(p+=on.BonusOptional),S&&(p+=on.BonusRepeatable),M===".*"&&(p+=on.BonusWildcard)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=on.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=r[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===fs.Static)u+=p.value;else if(p.type===fs.Param){const{value:g,repeatable:S,optional:m}=p,d=g in c?c[g]:"";if(Hn(d)&&!S)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=Hn(d)?d.join("/"):d;if(!M)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Av(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===on.Static+on.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===on.Static+on.Segment?1:-1:0}function Qp(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Av(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(eh(i))return 1;if(eh(s))return-1}return s.length-i.length}function eh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wv={strict:!1,end:!0,sensitive:!1};function Rv(t,e,n){const i=Tv(Mv(t.path),n),s=ht(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Cv(t,e){const n=[],i=new Map;e=qf(wv,e);function s(f){return i.get(f)}function r(f,h,p){const g=!p,S=nh(f);S.aliasOf=p&&p.record;const m=qf(e,f),d=[S];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of x)d.push(nh(ht({},S,{components:p?p.record.components:S.components,path:R,aliasOf:p?p.record:S})))}let M,E;for(const x of d){const{path:R}=x;if(h&&R[0]!=="/"){const T=h.record.path,I=T[T.length-1]==="/"?"":"/";x.path=h.record.path+(R&&I+R)}if(M=Rv(x,h,m),p?p.alias.push(M):(E=E||M,E!==M&&E.alias.push(M),g&&f.name&&!ih(M)&&o(f.name)),em(M)&&l(M),S.children){const T=S.children;for(let I=0;I<T.length;I++)r(T[I],M,p&&p.children[I])}p=p||M}return E?()=>{o(E)}:Wr}function o(f){if(Zp(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=Lv(f,n);n.splice(h,0,f),f.record.name&&!ih(f)&&i.set(f.record.name,f)}function c(f,h){let p,g={},S,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw or(Pt.MATCHER_NOT_FOUND,{location:f});m=p.record.name,g=ht(th(h.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&th(f.params,p.keys.map(E=>E.name))),S=p.stringify(g)}else if(f.path!=null)S=f.path,p=n.find(E=>E.re.test(S)),p&&(g=p.parse(S),m=p.record.name);else{if(p=h.name?i.get(h.name):n.find(E=>E.re.test(h.path)),!p)throw or(Pt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,g=ht({},h.params,f.params),S=p.stringify(g)}const d=[];let M=p;for(;M;)d.unshift(M.record),M=M.parent;return{name:m,path:S,params:g,matched:d,meta:Dv(d)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function th(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function nh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Pv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Pv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function ih(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Dv(t){return t.reduce((e,n)=>ht(e,n.meta),{})}function Lv(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;Qp(t,e[r])<0?i=r:n=r+1}const s=Iv(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Iv(t){let e=t;for(;e=e.parent;)if(em(e)&&Qp(t,e)===0)return e}function em({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function sh(t){const e=si(Au),n=si(wu),i=Tt(()=>{const l=Ki(t.to);return e.resolve(l)}),s=Tt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(rr.bind(null,u));if(h>-1)return h;const p=rh(l[c-2]);return c>1&&rh(u)===p&&f[f.length-1].path!==p?f.findIndex(rr.bind(null,l[c-2])):h}),r=Tt(()=>s.value>-1&&Fv(n.params,i.value.params)),o=Tt(()=>s.value>-1&&s.value===n.matched.length-1&&Kp(n.params,i.value.params));function a(l={}){if(Ov(l)){const c=e[Ki(t.replace)?"replace":"push"](Ki(t.to)).catch(Wr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Tt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Nv(t){return t.length===1?t[0]:t}const Uv=dp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:sh,setup(t,{slots:e}){const n=Na(sh(t)),{options:i}=si(Au),s=Tt(()=>({[oh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[oh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Nv(e.default(n));return t.custom?r:Hp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),tm=Uv;function Ov(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Fv(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Hn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function rh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oh=(t,e,n)=>t??e??n,Bv=dp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=si(hc),s=Tt(()=>t.route||i.value),r=si(Jf,0),o=Tt(()=>{let c=Ki(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Tt(()=>s.value.matched[o.value]);Ko(Jf,Tt(()=>o.value+1)),Ko(pv,a),Ko(hc,s);const l=at();return vs(()=>[l.value,a.value,t.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!rr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return ah(n.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Hp(h,ht({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ah(n.default,{Component:m,route:c})||m}}});function ah(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nm=Bv;function zv(t){const e=Cv(t.routes,t),n=t.parseQuery||hv,i=t.stringifyQuery||Zf,s=t.history,r=Er(),o=Er(),a=Er(),l=$g(Oi);let c=Oi;qs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cl.bind(null,F=>""+F),f=cl.bind(null,K0),h=cl.bind(null,jr);function p(F,K){let te,_e;return Zp(F)?(te=e.getRecordMatcher(F),_e=K):_e=F,e.addRoute(_e,te)}function g(F){const K=e.getRecordMatcher(F);K&&e.removeRoute(K)}function S(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function d(F,K){if(K=ht({},K||l.value),typeof F=="string"){const B=ul(n,F,K.path),Z=e.resolve({path:B.path},K),k=s.createHref(B.fullPath);return ht(B,Z,{params:h(Z.params),hash:jr(B.hash),redirectedFrom:void 0,href:k})}let te;if(F.path!=null)te=ht({},F,{path:ul(n,F.path,K.path).path});else{const B=ht({},F.params);for(const Z in B)B[Z]==null&&delete B[Z];te=ht({},F,{params:f(B)}),K.params=f(K.params)}const _e=e.resolve(te,K),Me=F.hash||"";_e.params=u(h(_e.params));const w=j0(i,ht({},F,{hash:q0(Me),path:_e.path})),D=s.createHref(w);return ht({fullPath:w,hash:Me,query:i===Zf?dv(F.query):F.query||{}},_e,{redirectedFrom:void 0,href:D})}function M(F){return typeof F=="string"?ul(n,F,l.value.path):ht({},F)}function E(F,K){if(c!==F)return or(Pt.NAVIGATION_CANCELLED,{from:K,to:F})}function x(F){return I(F)}function R(F){return x(ht(M(F),{replace:!0}))}function T(F,K){const te=F.matched[F.matched.length-1];if(te&&te.redirect){const{redirect:_e}=te;let Me=typeof _e=="function"?_e(F,K):_e;return typeof Me=="string"&&(Me=Me.includes("?")||Me.includes("#")?Me=M(Me):{path:Me},Me.params={}),ht({query:F.query,hash:F.hash,params:Me.path!=null?{}:F.params},Me)}}function I(F,K){const te=c=d(F),_e=l.value,Me=F.state,w=F.force,D=F.replace===!0,B=T(te,_e);if(B)return I(ht(M(B),{state:typeof B=="object"?ht({},Me,B.state):Me,force:w,replace:D}),K||te);const Z=te;Z.redirectedFrom=K;let k;return!w&&Q0(i,_e,te)&&(k=or(Pt.NAVIGATION_DUPLICATED,{to:Z,from:_e}),ve(_e,_e,!0,!1)),(k?Promise.resolve(k):O(Z,_e)).catch(J=>di(J)?di(J,Pt.NAVIGATION_GUARD_REDIRECT)?J:xe(J):ne(J,Z,_e)).then(J=>{if(J){if(di(J,Pt.NAVIGATION_GUARD_REDIRECT))return I(ht({replace:D},M(J.to),{state:typeof J.to=="object"?ht({},Me,J.to.state):Me,force:w}),K||Z)}else J=z(Z,_e,!0,D,Me);return N(Z,_e,J),J})}function v(F,K){const te=E(F,K);return te?Promise.reject(te):Promise.resolve()}function C(F){const K=it.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(F):F()}function O(F,K){let te;const[_e,Me,w]=mv(F,K);te=hl(_e.reverse(),"beforeRouteLeave",F,K);for(const B of _e)B.leaveGuards.forEach(Z=>{te.push(Wi(Z,F,K))});const D=v.bind(null,F,K);return te.push(D),q(te).then(()=>{te=[];for(const B of r.list())te.push(Wi(B,F,K));return te.push(D),q(te)}).then(()=>{te=hl(Me,"beforeRouteUpdate",F,K);for(const B of Me)B.updateGuards.forEach(Z=>{te.push(Wi(Z,F,K))});return te.push(D),q(te)}).then(()=>{te=[];for(const B of w)if(B.beforeEnter)if(Hn(B.beforeEnter))for(const Z of B.beforeEnter)te.push(Wi(Z,F,K));else te.push(Wi(B.beforeEnter,F,K));return te.push(D),q(te)}).then(()=>(F.matched.forEach(B=>B.enterCallbacks={}),te=hl(w,"beforeRouteEnter",F,K,C),te.push(D),q(te))).then(()=>{te=[];for(const B of o.list())te.push(Wi(B,F,K));return te.push(D),q(te)}).catch(B=>di(B,Pt.NAVIGATION_CANCELLED)?B:Promise.reject(B))}function N(F,K,te){a.list().forEach(_e=>C(()=>_e(F,K,te)))}function z(F,K,te,_e,Me){const w=E(F,K);if(w)return w;const D=K===Oi,B=qs?history.state:{};te&&(_e||D?s.replace(F.fullPath,ht({scroll:D&&B&&B.scroll},Me)):s.push(F.fullPath,Me)),l.value=F,ve(F,K,te,D),xe()}let ie;function oe(){ie||(ie=s.listen((F,K,te)=>{if(!je.listening)return;const _e=d(F),Me=T(_e,je.currentRoute.value);if(Me){I(ht(Me,{replace:!0,force:!0}),_e).catch(Wr);return}c=_e;const w=l.value;qs&&av(Kf(w.fullPath,te.delta),Va()),O(_e,w).catch(D=>di(D,Pt.NAVIGATION_ABORTED|Pt.NAVIGATION_CANCELLED)?D:di(D,Pt.NAVIGATION_GUARD_REDIRECT)?(I(ht(M(D.to),{force:!0}),_e).then(B=>{di(B,Pt.NAVIGATION_ABORTED|Pt.NAVIGATION_DUPLICATED)&&!te.delta&&te.type===uc.pop&&s.go(-1,!1)}).catch(Wr),Promise.reject()):(te.delta&&s.go(-te.delta,!1),ne(D,_e,w))).then(D=>{D=D||z(_e,w,!1),D&&(te.delta&&!di(D,Pt.NAVIGATION_CANCELLED)?s.go(-te.delta,!1):te.type===uc.pop&&di(D,Pt.NAVIGATION_ABORTED|Pt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),N(_e,w,D)}).catch(Wr)}))}let X=Er(),ee=Er(),G;function ne(F,K,te){xe(F);const _e=ee.list();return _e.length?_e.forEach(Me=>Me(F,K,te)):console.error(F),Promise.reject(F)}function he(){return G&&l.value!==Oi?Promise.resolve():new Promise((F,K)=>{X.add([F,K])})}function xe(F){return G||(G=!F,oe(),X.list().forEach(([K,te])=>F?te(F):K()),X.reset()),F}function ve(F,K,te,_e){const{scrollBehavior:Me}=t;if(!qs||!Me)return Promise.resolve();const w=!te&&lv(Kf(F.fullPath,0))||(_e||!te)&&history.state&&history.state.scroll||null;return Oa().then(()=>Me(F,K,w)).then(D=>D&&ov(D)).catch(D=>ne(D,F,K))}const ye=F=>s.go(F);let Ye;const it=new Set,je={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:S,resolve:d,options:t,push:x,replace:R,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:he,install(F){F.component("RouterLink",tm),F.component("RouterView",nm),F.config.globalProperties.$router=je,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Ki(l)}),qs&&!Ye&&l.value===Oi&&(Ye=!0,x(s.location).catch(_e=>{}));const K={};for(const _e in Oi)Object.defineProperty(K,_e,{get:()=>l.value[_e],enumerable:!0});F.provide(Au,je),F.provide(wu,np(K)),F.provide(hc,l);const te=F.unmount;it.add(F),F.unmount=function(){it.delete(F),it.size<1&&(c=Oi,ie&&ie(),ie=null,l.value=Oi,Ye=!1,G=!1),te()}}};function q(F){return F.reduce((K,te)=>K.then(()=>C(te)),Promise.resolve())}return je}function Hv(t){return si(wu)}const Vv={class:"app-shell"},kv={class:"sidebar"},Gv={class:"nav-group-title"},Wv={class:"icon"},Xv={class:"main-panel"},qv={class:"topbar"},Yv={class:"eyebrow"},$v={__name:"App",setup(t){const e=Hv(),n=[{title:"首頁",items:[{label:"首頁",to:"/",icon:"◉"}]},{title:"帳戶設定",items:[{label:"登入註冊",to:"/account/login",icon:"◌"},{label:"基本資料",to:"/account/profile",icon:"◌"},{label:"密碼修改",to:"/account/password",icon:"◌"}]},{title:"系統介紹",items:[{label:"操作指引",to:"/guide",icon:"◌"},{label:"定位技術",to:"/technology",icon:"◌"}]},{title:"歷史資料",items:[{label:"物件資料",to:"/history/object",icon:"◌"},{label:"施工任務",to:"/history/tasks",icon:"◌"},{label:"操作紀錄",to:"/history/operations",icon:"◌"}]},{title:"媒體資料",items:[{label:"影像串流",to:"/media/stream",icon:"◌"},{label:"語音提示",to:"/media/voice",icon:"◌"}]}],i=Tt(()=>{const s=n.flatMap(r=>r.items).find(r=>r.to===e.path);return(s==null?void 0:s.label)||"首頁"});return(s,r)=>(Be(),He("div",Vv,[$("aside",kv,[r[0]||(r[0]=$("div",{class:"brand"},[$("div",{class:"brand-mark"},"V"),$("div",null,[$("p",{class:"brand-eyebrow"},"終端定位平台"),$("h2",null,"Vision Portal")])],-1)),(Be(),He(Dt,null,ri(n,o=>$("nav",{class:"nav-section",key:o.title},[$("p",Gv,Oe(o.title),1),(Be(!0),He(Dt,null,ri(o.items,a=>(Be(),Op(Ki(tm),{key:a.to,class:"nav-link",to:a.to,"exact-active-class":"active"},{default:up(()=>[$("span",Wv,Oe(a.icon),1),$("span",null,Oe(a.label),1)]),_:2},1032,["to"]))),128))])),64))]),$("main",Xv,[$("header",qv,[$("div",null,[$("p",Yv,Oe(i.value),1),r[1]||(r[1]=$("h1",null,"終端定位系統管理介面",-1))]),r[2]||(r[2]=$("div",{class:"topbar-badge"},"已連線",-1))]),cn(Ki(nm))])]))}};function im(t,e){return function(){return t.apply(e,arguments)}}const{toString:Kv}=Object.prototype,{getPrototypeOf:ar}=Object,{iterator:lo,toStringTag:sm}=Symbol,_a=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Qr=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),_a(n,e))return!0;n=ar(n)}return!1},Zv=(t,e)=>t!=null&&Qr(t,e)?t[e]:void 0,Ru=(t=>e=>{const n=Kv.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Vn=t=>(t=t.toLowerCase(),e=>Ru(e)===t),ka=t=>e=>typeof e===t,{isArray:ys}=Array,lr=ka("undefined");function gr(t){return t!==null&&!lr(t)&&t.constructor!==null&&!lr(t.constructor)&&mn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const rm=Vn("ArrayBuffer");function Jv(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&rm(t.buffer),e}const jv=ka("string"),mn=ka("function"),om=ka("number"),_r=t=>t!==null&&typeof t=="object",Qv=t=>t===!0||t===!1,jo=t=>{if(!_r(t))return!1;const e=ar(t);return(e===null||e===Object.prototype||ar(e)===null)&&!Qr(t,sm)&&!Qr(t,lo)},ex=t=>{if(!_r(t)||gr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},tx=Vn("Date"),nx=Vn("File"),ix=t=>!!(t&&typeof t.uri<"u"),sx=t=>t&&typeof t.getParts<"u",rx=Vn("Blob"),ox=Vn("FileList"),ax=t=>_r(t)&&mn(t.pipe);function lx(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const lh=lx(),ch=typeof lh.FormData<"u"?lh.FormData:void 0,cx=t=>{if(!t)return!1;if(ch&&t instanceof ch)return!0;const e=ar(t);if(!e||e===Object.prototype||!mn(t.append))return!1;const n=Ru(t);return n==="formdata"||n==="object"&&mn(t.toString)&&t.toString()==="[object FormData]"},ux=Vn("URLSearchParams"),[fx,hx,dx,px]=["ReadableStream","Request","Response","Headers"].map(Vn),mx=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function co(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),ys(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(gr(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function am(t,e){if(gr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const hs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lm=t=>!lr(t)&&t!==hs;function dc(...t){const{caseless:e,skipUndefined:n}=lm(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&am(i,o)||o,l=_a(i,a)?i[a]:void 0;jo(l)&&jo(r)?i[a]=dc(l,r):jo(r)?i[a]=dc({},r):ys(r)?i[a]=r.slice():(!n||!lr(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++){const a=t[r];if(!a||gr(a)||(co(a,s),typeof a!="object"||ys(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];wx.call(a,u)&&s(a[u],u)}}return i}const gx=(t,e,n,{allOwnKeys:i}={})=>(co(e,(s,r)=>{n&&mn(s)?Object.defineProperty(t,r,{__proto__:null,value:im(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),_x=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),vx=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},xx=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&ar(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Sx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},yx=t=>{if(!t)return null;if(ys(t))return t;let e=t.length;if(!om(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Mx=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ar(Uint8Array)),Ex=(t,e)=>{const i=(t&&t[lo]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},bx=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Tx=Vn("HTMLFormElement"),Ax=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:wx}=Object.prototype,Rx=Vn("RegExp"),cm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};co(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Cx=t=>{cm(t,(e,n)=>{if(mn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(mn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Px=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return ys(t)?i(t):i(String(t).split(e)),n},Dx=()=>{},Lx=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Ix(t){return!!(t&&mn(t.append)&&t[sm]==="FormData"&&t[lo])}const Nx=t=>{const e=new WeakSet,n=i=>{if(_r(i)){if(e.has(i))return;if(gr(i))return i;if(!("toJSON"in i)){e.add(i);const s=ys(i)?[]:{};return co(i,(r,o)=>{const a=n(r);!lr(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},Ux=Vn("AsyncFunction"),Ox=t=>t&&(_r(t)||mn(t))&&mn(t.then)&&mn(t.catch),um=((t,e)=>t?setImmediate:e?((n,i)=>(hs.addEventListener("message",({source:s,data:r})=>{s===hs&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),hs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",mn(hs.postMessage)),Fx=typeof queueMicrotask<"u"?queueMicrotask.bind(hs):typeof process<"u"&&process.nextTick||um,fm=t=>t!=null&&mn(t[lo]),Bx=t=>t!=null&&Qr(t,lo)&&fm(t),H={isArray:ys,isArrayBuffer:rm,isBuffer:gr,isFormData:cx,isArrayBufferView:Jv,isString:jv,isNumber:om,isBoolean:Qv,isObject:_r,isPlainObject:jo,isEmptyObject:ex,isReadableStream:fx,isRequest:hx,isResponse:dx,isHeaders:px,isUndefined:lr,isDate:tx,isFile:nx,isReactNativeBlob:ix,isReactNative:sx,isBlob:rx,isRegExp:Rx,isFunction:mn,isStream:ax,isURLSearchParams:ux,isTypedArray:Mx,isFileList:ox,forEach:co,merge:dc,extend:gx,trim:mx,stripBOM:_x,inherits:vx,toFlatObject:xx,kindOf:Ru,kindOfTest:Vn,endsWith:Sx,toArray:yx,forEachEntry:Ex,matchAll:bx,isHTMLForm:Tx,hasOwnProperty:_a,hasOwnProp:_a,hasOwnInPrototypeChain:Qr,getSafeProp:Zv,reduceDescriptors:cm,freezeMethods:Cx,toObjectSet:Px,toCamelCase:Ax,noop:Dx,toFiniteNumber:Lx,findKey:am,global:hs,isContextDefined:lm,isSpecCompliantForm:Ix,toJSONObject:Nx,isAsyncFn:Ux,isThenable:Ox,setImmediate:um,asap:Fx,isIterable:fm,isSafeIterable:Bx},zx=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Hx=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&zx[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function Vx(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const kx=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Gx=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Cu(t,e){return H.isArray(t)?t.map(n=>Cu(n,e)):Vx(String(t).replace(e,""))}const Wx=t=>Cu(t,kx),Xx=t=>Cu(t,Gx);function hm(t){const e=Object.create(null);return H.forEach(t.toJSON(),(n,i)=>{e[i]=Xx(n)}),e}const uh=Symbol("internals");function br(t){return t&&String(t).trim().toLowerCase()}function Qo(t){return t===!1||t==null?t:H.isArray(t)?t.map(Qo):Wx(String(t))}function qx(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Yx=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function dl(t,e,n,i,s){if(H.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!H.isString(e)){if(H.isString(i))return e.indexOf(i)!==-1;if(H.isRegExp(i))return i.test(e)}}function $x(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function Kx(t,e){const n=H.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let nn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=br(l);if(!u)return;const f=H.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=Qo(a))}const o=(a,l)=>H.forEach(a,(c,u)=>r(c,u,l));if(H.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(H.isString(e)&&(e=e.trim())&&!Yx(e))o(Hx(e),n);else if(H.isObject(e)&&H.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!H.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],H.hasOwnProp(a,c)?(l=a[c],a[c]=H.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=br(e),e){const i=H.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return qx(s);if(H.isFunction(n))return n.call(this,s,i);if(H.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=br(e),e){const i=H.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||dl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=br(o),o){const a=H.findKey(i,o);a&&(!n||dl(i,i[a],a,n))&&(delete i[a],s=!0)}}return H.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||dl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return H.forEach(this,(s,r)=>{const o=H.findKey(i,r);if(o){n[o]=Qo(s),delete n[r];return}const a=e?$x(r):String(r).trim();a!==r&&delete n[r],n[a]=Qo(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return H.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&H.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[uh]=this[uh]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=br(o);i[a]||(Kx(s,o),i[a]=!0)}return H.isArray(e)?e.forEach(r):r(e),this}};nn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(nn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});H.freezeMethods(nn);const Zx="[REDACTED ****]";function Jx(t){if(H.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(H.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function jx(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||H.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof nn&&(r=r.toJSON()),i.push(r);let o;if(H.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);H.isUndefined(c)||(o[l]=c)});else{if(!H.isPlainObject(r)&&Jx(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?Zx:s(l);H.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let Pe=class dm extends Error{static from(e,n,i,s,r,o){const a=new dm(e.message,n||e.code,i,s,r);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&H.hasOwnProp(e,"redact")?e.redact:void 0,i=H.isArray(n)&&n.length>0?jx(e,n):H.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Pe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Pe.ERR_BAD_OPTION="ERR_BAD_OPTION";Pe.ECONNABORTED="ECONNABORTED";Pe.ETIMEDOUT="ETIMEDOUT";Pe.ECONNREFUSED="ECONNREFUSED";Pe.ERR_NETWORK="ERR_NETWORK";Pe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Pe.ERR_DEPRECATED="ERR_DEPRECATED";Pe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Pe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Pe.ERR_CANCELED="ERR_CANCELED";Pe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Pe.ERR_INVALID_URL="ERR_INVALID_URL";Pe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Qx=null,pm=100;function pc(t){return H.isPlainObject(t)||H.isArray(t)}function mm(t){return H.endsWith(t,"[]")?t.slice(0,-2):t}function pl(t,e,n){return t?t.concat(e).map(function(s,r){return s=mm(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function eS(t){return H.isArray(t)&&!t.some(pc)}const tS=H.toFlatObject(H,{},null,function(e){return/^is[A-Z]/.test(e)});function Ga(t,e,n){if(!H.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,E){return!H.isUndefined(E[M])});const i=n.metaTokens,s=n.visitor||g,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?pm:n.maxDepth,c=a&&H.isSpecCompliantForm(e),u=[];if(!H.isFunction(s))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(H.isDate(d))return d.toISOString();if(H.isBoolean(d))return d.toString();if(!c&&H.isBlob(d))throw new Pe("Blob is not supported. Use a Buffer instead.");if(H.isArrayBuffer(d)||H.isTypedArray(d)){if(c&&typeof a=="function")return new a([d]);if(typeof Buffer<"u")return Buffer.from(d);throw new Pe("Blob is not supported. Use a Buffer instead.",Pe.ERR_NOT_SUPPORT)}return d}function h(d){if(d>l)throw new Pe("Object is too deeply nested ("+d+" levels). Max depth: "+l,Pe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(d,M){if(l===1/0)return JSON.stringify(d);const E=[];return JSON.stringify(d,function(R,T){if(!H.isObject(T))return T;for(;E.length&&E[E.length-1]!==this;)E.pop();return E.push(T),h(M+E.length-1),T})}function g(d,M,E){let x=d;if(H.isReactNative(e)&&H.isReactNativeBlob(d))return e.append(pl(E,M,r),f(d)),!1;if(d&&!E&&typeof d=="object"){if(H.endsWith(M,"{}"))M=i?M:M.slice(0,-2),d=p(d,1);else if(H.isArray(d)&&eS(d)||(H.isFileList(d)||H.endsWith(M,"[]"))&&(x=H.toArray(d)))return M=mm(M),x.forEach(function(T,I){!(H.isUndefined(T)||T===null)&&e.append(o===!0?pl([M],I,r):o===null?M:M+"[]",f(T))}),!1}return pc(d)?!0:(e.append(pl(E,M,r),f(d)),!1)}const S=Object.assign(tS,{defaultVisitor:g,convertValue:f,isVisitable:pc});function m(d,M,E=0){if(!H.isUndefined(d)){if(h(E),u.indexOf(d)!==-1)throw new Error("Circular reference detected in "+M.join("."));u.push(d),H.forEach(d,function(R,T){(!(H.isUndefined(R)||R===null)&&s.call(e,R,H.isString(T)?T.trim():T,M,S))===!0&&m(R,M?M.concat(T):[T],E+1)}),u.pop()}}if(!H.isObject(t))throw new TypeError("data must be an object");return m(t),e}function fh(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Pu(t,e){this._pairs=[],t&&Ga(t,this,e)}const gm=Pu.prototype;gm.append=function(e,n){this._pairs.push([e,n])};gm.toString=function(e){const n=e?i=>e.call(this,i,fh):fh;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function nS(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function _m(t,e,n){if(!e)return t;t=t||"";const i=H.isFunction(n)?{serialize:n}:n,s=H.getSafeProp(i,"encode")||nS,r=H.getSafeProp(i,"serialize");let o;if(r?o=r(e,i):o=H.isURLSearchParams(e)?e.toString():new Pu(e,i).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class hh{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Du={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},iS=typeof URLSearchParams<"u"?URLSearchParams:Pu,sS=typeof FormData<"u"?FormData:null,rS=typeof Blob<"u"?Blob:null,oS={isBrowser:!0,classes:{URLSearchParams:iS,FormData:sS,Blob:rS},protocols:["http","https","file","blob","url","data"]},Lu=typeof window<"u"&&typeof document<"u",mc=typeof navigator=="object"&&navigator||void 0,aS=Lu&&(!mc||["ReactNative","NativeScript","NS"].indexOf(mc.product)<0),lS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",cS=Lu&&window.location.href||"http://localhost",uS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Lu,hasStandardBrowserEnv:aS,hasStandardBrowserWebWorkerEnv:lS,navigator:mc,origin:cS},Symbol.toStringTag,{value:"Module"})),Xt={...uS,...oS};function fS(t,e){return Ga(t,new Xt.classes.URLSearchParams,{visitor:function(n,i,s,r){return Xt.isNode&&H.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}const dh=pm;function vm(t){if(t>dh)throw new Pe("FormData field is too deeply nested ("+t+" levels). Max depth: "+dh,Pe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function hS(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)vm(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function dS(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function xm(t){function e(n,i,s,r){vm(r);let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&H.isArray(s)?s.length:o,l?(H.hasOwnProp(s,o)?s[o]=H.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!H.hasOwnProp(s,o)||!H.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&H.isArray(s[o])&&(s[o]=dS(s[o])),!a)}if(H.isFormData(t)&&H.isFunction(t.entries)){const n={};return H.forEachEntry(t,(i,s)=>{e(hS(i),s,n,0)}),n}return null}const Ps=(t,e)=>t!=null&&H.hasOwnProp(t,e)?t[e]:void 0;function pS(t,e,n){if(H.isString(t))try{return(e||JSON.parse)(t),H.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const uo={transitional:Du,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=H.isObject(e);if(r&&H.isHTMLForm(e)&&(e=new FormData(e)),H.isFormData(e))return s?JSON.stringify(xm(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=Ps(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return fS(e,l).toString();if((a=H.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Ps(this,"env"),u=c&&c.FormData;return Ga(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),pS(e)):e}],transformResponse:[function(e){const n=Ps(this,"transitional")||uo.transitional,i=n&&n.forcedJSONParsing,s=Ps(this,"responseType"),r=s==="json";if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,Ps(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Pe.from(l,Pe.ERR_BAD_RESPONSE,this,null,Ps(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xt.classes.FormData,Blob:Xt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch","query"],t=>{uo.headers[t]={}});function ml(t,e){const n=this||uo,i=e||n,s=nn.from(i.headers);let r=i.data;return H.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Sm(t){return!!(t&&t.__CANCEL__)}let fo=class extends Pe{constructor(e,n,i){super(e??"canceled",Pe.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function ym(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Pe("Request failed with status code "+n.status,n.status>=400&&n.status<500?Pe.ERR_BAD_REQUEST:Pe.ERR_BAD_RESPONSE,n.config,n.request,n))}function mS(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function gS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,h=0;for(;f!==s;)h+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(h*1e3/p):void 0}}function _S(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const va=(t,e,n=3)=>{let i=0;const s=gS(50,250);return _S(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},ph=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},mh=t=>(...e)=>H.asap(()=>t(...e)),vS=Xt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Xt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Xt.origin),Xt.navigator&&/(msie|trident)/i.test(Xt.navigator.userAgent)):()=>!0,xS=Xt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];H.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),H.isString(i)&&a.push(`path=${i}`),H.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),H.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function SS(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function yS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const MS=/^https?:(?!\/\/)/i,ES=/[\t\n\r]/g;function bS(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function TS(t){return bS(t).replace(ES,"")}function gh(t,e){if(typeof t=="string"&&MS.test(TS(t)))throw new Pe('Invalid URL: missing "//" after protocol',Pe.ERR_INVALID_URL,e)}function Mm(t,e,n,i){gh(e,i);let s=!SS(e);return t&&(s||n===!1)?(gh(t,i),yS(t,e)):e}const _h=t=>t instanceof nn?{...t}:t;function Ms(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,h,p){return H.isPlainObject(u)&&H.isPlainObject(f)?H.merge.call({caseless:p},u,f):H.isPlainObject(f)?H.merge({},f):H.isArray(f)?f.slice():f}function s(u,f,h,p){if(H.isUndefined(f)){if(!H.isUndefined(u))return i(void 0,u,h,p)}else return i(u,f,h,p)}function r(u,f){if(!H.isUndefined(f))return i(void 0,f)}function o(u,f){if(H.isUndefined(f)){if(!H.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=H.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!H.isUndefined(f))if(H.isPlainObject(f)){if(H.hasOwnProp(f,u))return f[u]}else return;const h=H.hasOwnProp(t,"transitional")?t.transitional:void 0;if(H.isPlainObject(h)&&H.hasOwnProp(h,u))return h[u]}function l(u,f,h){if(H.hasOwnProp(e,h))return i(u,f);if(H.hasOwnProp(t,h))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,h)=>s(_h(u),_h(f),h,!0)};return H.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const h=H.hasOwnProp(c,f)?c[f]:s,p=H.hasOwnProp(t,f)?t[f]:void 0,g=H.hasOwnProp(e,f)?e[f]:void 0,S=h(p,g,f);H.isUndefined(S)&&h!==l||(n[f]=S)}),H.hasOwnProp(e,"validateStatus")&&H.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(H.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const AS=["content-type","content-length"];function wS(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,s])=>{AS.includes(i.toLowerCase())&&t.set(i,s)})}const RS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Em(t){const e=Ms({},t),n=h=>H.hasOwnProp(e,h)?e[h]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=nn.from(a),e.url=_m(Mm(c,f,u,e),n("params"),n("paramsSerializer")),l){const h=H.getSafeProp(l,"username")||"",p=H.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(h+":"+(p?RS(p):"")))}catch(g){throw Pe.from(g,Pe.ERR_BAD_OPTION_VALUE,t)}}if(H.isFormData(i)&&(Xt.hasStandardBrowserEnv||Xt.hasStandardBrowserWebWorkerEnv||H.isReactNative(i)?a.setContentType(void 0):H.isFunction(i.getHeaders)&&wS(a,i.getHeaders(),n("formDataHeaderPolicy"))),Xt.hasStandardBrowserEnv&&(H.isFunction(s)&&(s=s(e)),s===!0||s==null&&vS(e.url))){const p=r&&o&&xS.read(o);p&&a.set(r,p)}return e}const CS=typeof XMLHttpRequest<"u",PS=CS&&function(t){return new Promise(function(n,i){const s=Em(t);let r=s.data;const o=nn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,h,p,g;function S(){p&&p(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function d(){if(!m)return;const E=nn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),R={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};ym(function(I){n(I),S()},function(I){i(I),S()},R),m=null}"onloadend"in m?m.onloadend=d:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(d)},m.onabort=function(){m&&(i(new Pe("Request aborted",Pe.ECONNABORTED,t,m)),S(),m=null)},m.onerror=function(x){const R=x&&x.message?x.message:"Network Error",T=new Pe(R,Pe.ERR_NETWORK,t,m);T.event=x||null,i(T),S(),m=null},m.ontimeout=function(){let x=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const R=s.transitional||Du;s.timeoutErrorMessage&&(x=s.timeoutErrorMessage),i(new Pe(x,R.clarifyTimeoutError?Pe.ETIMEDOUT:Pe.ECONNABORTED,t,m)),S(),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&H.forEach(hm(o),function(x,R){m.setRequestHeader(R,x)}),H.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([h,g]=va(c,!0),m.addEventListener("progress",h)),l&&m.upload&&([f,p]=va(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(s.cancelToken||s.signal)&&(u=E=>{m&&(i(!E||E.type?new fo(null,t,m):E),m.abort(),S(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const M=mS(s.url);if(M&&!Xt.protocols.includes(M)){i(new Pe("Unsupported protocol "+M+":",Pe.ERR_BAD_REQUEST,t)),S();return}m.send(r||null)})},DS=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof Pe?c:new fo(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new Pe(`timeout of ${e}ms exceeded`,Pe.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>H.asap(o),a},LS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},IS=async function*(t,e){for await(const n of NS(t))yield*LS(n,e)},NS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},vh=(t,e,n,i)=>{const s=IS(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let h=r+=f;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},xa=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,US=(t,e,n)=>e+2<n&&xa(t.charCodeAt(e+1))&&xa(t.charCodeAt(e+2));function OS(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let p=0;p<a;p++)if(i.charCodeAt(p)===37&&p+2<a){const g=i.charCodeAt(p+1),S=i.charCodeAt(p+2);xa(g)&&xa(S)&&(o-=2,p+=2)}let l=0,c=a-1;const u=p=>p>=2&&i.charCodeAt(p-2)===37&&i.charCodeAt(p-1)===51&&(i.charCodeAt(p)===68||i.charCodeAt(p)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const h=Math.floor(o/4)*3-(l||0);return h>0?h:0}let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&US(i,o,a))r+=1,o+=2;else if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const Iu="1.18.1",xh=64*1024,{isFunction:yo}=H,FS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Sh=t=>{if(!H.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},yh=(t,...e)=>{try{return!!t(...e)}catch{return!1}},BS=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},zS=t=>{const e=H.global!==void 0&&H.global!==null?H.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=H.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?yo(s):typeof fetch=="function",l=yo(r),c=yo(o);if(!a)return!1;const u=a&&yo(n),f=a&&(typeof i=="function"?(d=>M=>d.encode(M))(new i):async d=>new Uint8Array(await new r(d).arrayBuffer())),h=l&&u&&yh(()=>{let d=!1;const M=new r(Xt.origin,{body:new n,method:"POST",get duplex(){return d=!0,"half"}}),E=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),d&&!E}),p=c&&u&&yh(()=>H.isReadableStream(new o("").body)),g={stream:p&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!g[d]&&(g[d]=(M,E)=>{let x=M&&M[d];if(x)return x.call(M);throw new Pe(`Response type '${d}' is not supported`,Pe.ERR_NOT_SUPPORT,E)})});const S=async d=>{if(d==null)return 0;if(H.isBlob(d))return d.size;if(H.isSpecCompliantForm(d))return(await new r(Xt.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(H.isArrayBufferView(d)||H.isArrayBuffer(d))return d.byteLength;if(H.isURLSearchParams(d)&&(d=d+""),H.isString(d))return(await f(d)).byteLength},m=async(d,M)=>{const E=H.toFiniteNumber(d.getContentLength());return E??S(M)};return async d=>{let{url:M,method:E,data:x,signal:R,cancelToken:T,timeout:I,onDownloadProgress:v,onUploadProgress:C,responseType:O,headers:N,withCredentials:z="same-origin",fetchOptions:ie,maxContentLength:oe,maxBodyLength:X}=Em(d);const ee=H.isNumber(oe)&&oe>-1,G=H.isNumber(X)&&X>-1,ne=q=>H.hasOwnProp(d,q)?d[q]:void 0;let he=s||fetch;O=O?(O+"").toLowerCase():"text";let xe=DS([R,T&&T.toAbortSignal()],I),ve=null;const ye=xe&&xe.unsubscribe&&(()=>{xe.unsubscribe()});let Ye,it=null;const je=()=>new Pe("Request body larger than maxBodyLength limit",Pe.ERR_BAD_REQUEST,d,ve);try{let q;const F=ne("auth");if(F){const k=H.getSafeProp(F,"username")||"",J=H.getSafeProp(F,"password")||"";q={username:k,password:J}}if(BS(M)){const k=new URL(M,Xt.origin);if(!q&&(k.username||k.password)){const J=Sh(k.username),pe=Sh(k.password);q={username:J,password:pe}}(k.username||k.password)&&(k.username="",k.password="",M=k.href)}if(q&&(N.delete("authorization"),N.set("Authorization","Basic "+btoa(FS((q.username||"")+":"+(q.password||""))))),ee&&typeof M=="string"&&M.startsWith("data:")&&OS(M)>oe)throw new Pe("maxContentLength size of "+oe+" exceeded",Pe.ERR_BAD_RESPONSE,d,ve);if(G&&E!=="get"&&E!=="head"){const k=await S(x);if(typeof k=="number"&&isFinite(k)&&(Ye=k,k>X))throw je()}const K=G&&(H.isReadableStream(x)||H.isStream(x)),te=(k,J,pe)=>vh(k,xh,de=>{if(G&&de>X)throw it=je();J&&J(de)},pe);if(h&&E!=="get"&&E!=="head"&&(C||K)){if(Ye=Ye??await m(N,x),Ye!==0||K){let k=new r(M,{method:"POST",body:x,duplex:"half"}),J;if(H.isFormData(x)&&(J=k.headers.get("content-type"))&&N.setContentType(J),k.body){const[pe,de]=C&&ph(Ye,va(mh(C)))||[];x=te(k.body,pe,de)}}}else if(K&&!l&&u&&E!=="get"&&E!=="head")x=te(x);else if(K&&l&&!h&&E!=="get"&&E!=="head")throw new Pe("Stream request bodies are not supported by the current fetch implementation",Pe.ERR_NOT_SUPPORT,d,ve);H.isString(z)||(z=z?"include":"omit");const _e=l&&"credentials"in r.prototype;if(H.isFormData(x)){const k=N.getContentType();k&&/^multipart\/form-data/i.test(k)&&!/boundary=/i.test(k)&&N.delete("content-type")}N.set("User-Agent","axios/"+Iu,!1);const Me={...ie,signal:xe,method:E.toUpperCase(),headers:hm(N.normalize()),body:x,duplex:"half",credentials:_e?z:void 0};ve=l&&new r(M,Me);let w=await(l?he(ve,ie):he(M,Me));const D=nn.from(w.headers);if(ee){const k=H.toFiniteNumber(D.getContentLength());if(k!=null&&k>oe)throw new Pe("maxContentLength size of "+oe+" exceeded",Pe.ERR_BAD_RESPONSE,d,ve)}const B=p&&(O==="stream"||O==="response");if(p&&w.body&&(v||ee||B&&ye)){const k={};["status","statusText","headers"].forEach(Ee=>{k[Ee]=w[Ee]});const J=H.toFiniteNumber(D.getContentLength()),[pe,de]=v&&ph(J,va(mh(v),!0))||[];let me=0;const ae=Ee=>{if(ee&&(me=Ee,me>oe))throw new Pe("maxContentLength size of "+oe+" exceeded",Pe.ERR_BAD_RESPONSE,d,ve);pe&&pe(Ee)};w=new o(vh(w.body,xh,ae,()=>{de&&de(),ye&&ye()}),k)}O=O||"text";let Z=await g[H.findKey(g,O)||"text"](w,d);if(ee&&!p&&!B){let k;if(Z!=null&&(typeof Z.byteLength=="number"?k=Z.byteLength:typeof Z.size=="number"?k=Z.size:typeof Z=="string"&&(k=typeof i=="function"?new i().encode(Z).byteLength:Z.length)),typeof k=="number"&&k>oe)throw new Pe("maxContentLength size of "+oe+" exceeded",Pe.ERR_BAD_RESPONSE,d,ve)}return!B&&ye&&ye(),await new Promise((k,J)=>{ym(k,J,{data:Z,headers:nn.from(w.headers),status:w.status,statusText:w.statusText,config:d,request:ve})})}catch(q){if(ye&&ye(),xe&&xe.aborted&&xe.reason instanceof Pe){const F=xe.reason;throw F.config=d,ve&&(F.request=ve),q!==F&&Object.defineProperty(F,"cause",{__proto__:null,value:q,writable:!0,enumerable:!1,configurable:!0}),F}if(it)throw ve&&!it.request&&(it.request=ve),it;if(q instanceof Pe)throw ve&&!q.request&&(q.request=ve),q;if(q&&q.name==="TypeError"&&/Load failed|fetch/i.test(q.message)){const F=new Pe("Network Error",Pe.ERR_NETWORK,d,ve,q&&q.response);throw Object.defineProperty(F,"cause",{__proto__:null,value:q.cause||q,writable:!0,enumerable:!1,configurable:!0}),F}throw Pe.from(q,q&&q.code,d,ve,q&&q.response)}}},HS=new Map,bm=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=HS;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:zS(e)),u=c;return c};bm();const Nu={http:Qx,xhr:PS,fetch:{get:bm}};H.forEach(Nu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Mh=t=>`- ${t}`,VS=t=>H.isFunction(t)||t===null||t===!1;function kS(t,e){t=H.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!VS(i)&&(s=Nu[(a=String(i)).toLowerCase()],s===void 0))throw new Pe(`Unknown adapter '${a}'`);if(s&&(H.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Mh).join(`
`):" "+Mh(o[0]):"as no adapter specified";throw new Pe("There is no suitable adapter to dispatch the request "+a,Pe.ERR_NOT_SUPPORT)}return s}const Tm={getAdapter:kS,adapters:Nu};function gl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new fo(null,t)}function Eh(t){return gl(t),t.headers=nn.from(t.headers),t.data=ml.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Tm.getAdapter(t.adapter||uo.adapter,t)(t).then(function(i){gl(t),t.response=i;try{i.data=ml.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=nn.from(i.headers),i},function(i){if(!Sm(i)&&(gl(t),i&&i.response)){t.response=i.response;try{i.response.data=ml.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=nn.from(i.response.headers)}return Promise.reject(i)})}const Wa={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Wa[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const bh={};Wa.transitional=function(e,n,i){function s(r,o){return"[Axios v"+Iu+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Pe(s(o," has been removed"+(n?" in "+n:"")),Pe.ERR_DEPRECATED);return n&&!bh[o]&&(bh[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Wa.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function GS(t,e,n){if(typeof t!="object"||t===null)throw new Pe("options must be an object",Pe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Pe("option "+r+" must be "+l,Pe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Pe("Unknown option "+r,Pe.ERR_BAD_OPTION)}}const ea={assertOptions:GS,validators:Wa},Kt=ea.validators;let Ss=class{constructor(e){this.defaults=e||{},this.interceptors={request:new hh,response:new hh}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ms(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&ea.assertOptions(i,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean),legacyInterceptorReqResOrdering:Kt.transitional(Kt.boolean),advertiseZstdAcceptEncoding:Kt.transitional(Kt.boolean),validateStatusUndefinedResolves:Kt.transitional(Kt.boolean)},!1),s!=null&&(H.isFunction(s)?n.paramsSerializer={serialize:s}:ea.assertOptions(s,{encode:Kt.function,serialize:Kt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ea.assertOptions(n,{baseUrl:Kt.spelling("baseURL"),withXsrfToken:Kt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&H.merge(r.common,r[n.method]);r&&H.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),n.headers=nn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(S){if(typeof S.runWhen=="function"&&S.runWhen(n)===!1)return;l=l&&S.synchronous;const m=n.transitional||Du;m&&m.legacyInterceptorReqResOrdering?a.unshift(S.fulfilled,S.rejected):a.push(S.fulfilled,S.rejected)});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let u,f=0,h;if(!l){const g=[Eh.bind(this),void 0];for(g.unshift(...a),g.push(...c),h=g.length,u=Promise.resolve(n);f<h;)u=u.then(g[f++],g[f++]);return u}h=a.length;let p=n;for(;f<h;){const g=a[f++],S=a[f++];try{p=g(p)}catch(m){S.call(this,m);break}}try{u=Eh.call(this,p)}catch(g){return Promise.reject(g)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Ms(this.defaults,e);const n=Mm(e.baseURL,e.url,e.allowAbsoluteUrls,e);return _m(n,e.params,e.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(e){Ss.prototype[e]=function(n,i){return this.request(Ms(i||{},{method:e,url:n,data:i&&H.hasOwnProp(i,"data")?i.data:void 0}))}});H.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(Ms(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Ss.prototype[e]=n(),e!=="query"&&(Ss.prototype[e+"Form"]=n(!0))});let WS=class Am{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new fo(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Am(function(s){e=s}),cancel:e}}};function XS(t){return function(n){return t.apply(null,n)}}function qS(t){return H.isObject(t)&&t.isAxiosError===!0}const gc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(gc).forEach(([t,e])=>{gc[e]=t});function wm(t){const e=new Ss(t),n=im(Ss.prototype.request,e);return H.extend(n,Ss.prototype,e,{allOwnKeys:!0}),H.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return wm(Ms(t,s))},n}const Ut=wm(uo);Ut.Axios=Ss;Ut.CanceledError=fo;Ut.CancelToken=WS;Ut.isCancel=Sm;Ut.VERSION=Iu;Ut.toFormData=Ga;Ut.AxiosError=Pe;Ut.Cancel=Ut.CanceledError;Ut.all=function(e){return Promise.all(e)};Ut.spread=XS;Ut.isAxiosError=qS;Ut.mergeConfig=Ms;Ut.AxiosHeaders=nn;Ut.formToJSON=t=>xm(H.isHTMLForm(t)?new FormData(t):t);Ut.getAdapter=Tm.getAdapter;Ut.HttpStatusCode=gc;Ut.default=Ut;const{Axios:gC,AxiosError:_C,CanceledError:vC,isCancel:xC,CancelToken:SC,VERSION:yC,all:MC,Cancel:EC,isAxiosError:bC,spread:TC,toFormData:AC,AxiosHeaders:wC,HttpStatusCode:RC,formToJSON:CC,getAdapter:PC,mergeConfig:DC,create:LC}=Ut,Sn=Ut.create({baseURL:"/api"}),YS={class:"page-card"},$S={key:0,class:"placeholder"},KS={class:"summary-grid"},ZS={class:"summary-label"},JS={class:"summary-note"},jS={class:"content-grid"},QS={class:"panel"},ey={key:1,class:"placeholder"},ty={class:"panel"},ny={key:0,class:"table"},iy={key:1,class:"placeholder"},sy={key:0,class:"alert"},ry={__name:"HomePage",setup(t){const e=at([]),n=at([]),i=at([]),s=at(!0),r=at(""),o=u=>u?new Date(u).toLocaleString("zh-TW"):"—",a=Tt(()=>n.value.find(u=>!u.endTime)),l=Tt(()=>[{title:"使用者數",value:e.value.length,detail:"資料庫已建立的使用者"},{title:"作業紀錄",value:n.value.length,detail:"所有作業資料"},{title:"辨識結果",value:i.value.length,detail:"所有物件辨識資料"}]);return mr(async()=>{var u,f;s.value=!0,r.value="";try{const[h,p,g]=await Promise.all([Sn.get("/users"),Sn.get("/operations"),Sn.get("/detections")]);e.value=h.data,n.value=p.data,i.value=g.data}catch(h){r.value=((f=(u=h.response)==null?void 0:u.data)==null?void 0:f.error)||"無法讀取資料庫資料，請確認後端服務與 MongoDB 是否已啟動。"}finally{s.value=!1}}),(u,f)=>{var h,p;return Be(),He("section",YS,[f[7]||(f[7]=$("div",{class:"section-title"},[$("p",{class:"eyebrow"},"Dashboard"),$("h2",null,"系統總覽")],-1)),s.value?(Be(),He("p",$S,"正在讀取資料庫資料…")):(Be(),He(Dt,{key:1},[$("div",KS,[(Be(!0),He(Dt,null,ri(l.value,g=>(Be(),He("article",{key:g.title,class:"summary-card"},[$("p",ZS,Oe(g.title),1),$("h3",null,Oe(g.value),1),$("p",JS,Oe(g.detail),1)]))),128))]),$("div",jS,[$("article",QS,[f[4]||(f[4]=$("h3",null,"目前作業",-1)),a.value?(Be(),He(Dt,{key:0},[$("p",null,[f[0]||(f[0]=$("strong",null,"作業 ID：",-1)),In(Oe(a.value._id),1)]),$("p",null,[f[1]||(f[1]=$("strong",null,"使用者：",-1)),In(Oe(((h=a.value.userId)==null?void 0:h.name)||((p=a.value.userId)==null?void 0:p.email)||"未提供"),1)]),$("p",null,[f[2]||(f[2]=$("strong",null,"開始時間：",-1)),In(Oe(o(a.value.startTime)),1)]),$("p",null,[f[3]||(f[3]=$("strong",null,"說明：",-1)),In(Oe(a.value.description||"—"),1)])],64)):(Be(),He("p",ey,"目前沒有進行中的作業。"))]),$("article",ty,[f[6]||(f[6]=$("h3",null,"最新辨識結果",-1)),i.value.length?(Be(),He("table",ny,[f[5]||(f[5]=$("thead",null,[$("tr",null,[$("th",null,"時間"),$("th",null,"物件"),$("th",null,"深度")])],-1)),$("tbody",null,[(Be(!0),He(Dt,null,ri(i.value.slice(0,6),g=>(Be(),He("tr",{key:g._id},[$("td",null,Oe(o(g.timestamp)),1),$("td",null,Oe(g.objectClass||"未分類"),1),$("td",null,Oe(g.depth??"—"),1)]))),128))])])):(Be(),He("p",iy,"尚無辨識資料。"))])]),r.value?(Be(),He("p",sy,Oe(r.value),1)):Ln("",!0)],64))])}}},vr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},oy={},ay={class:"page-card"};function ly(t,e){return Be(),He("section",ay,[...e[0]||(e[0]=[oo('<div class="section-title"><p class="eyebrow">Account</p><h2>登入 / 註冊</h2></div><div class="content-grid"><article class="panel"><h3>登入</h3><form class="form-grid"><input type="email" placeholder="Email"><input type="password" placeholder="Password"><button type="button">登入</button></form></article><article class="panel"><h3>註冊</h3><form class="form-grid"><input type="text" placeholder="使用者名稱"><input type="email" placeholder="Email"><input type="password" placeholder="密碼"><button type="button">建立帳號</button></form></article></div>',2)])])}const cy=vr(oy,[["render",ly]]),uy={},fy={class:"page-card"};function hy(t,e){return Be(),He("section",fy,[...e[0]||(e[0]=[oo('<div class="section-title"><p class="eyebrow">Account</p><h2>基本資料設定</h2></div><article class="panel"><h3>個人資訊</h3><div class="form-grid"><input type="text" placeholder="姓名"><input type="email" placeholder="聯絡信箱"><input type="text" placeholder="職稱"><button type="button">更新資料</button></div></article>',2)])])}const dy=vr(uy,[["render",hy]]),py={},my={class:"page-card"};function gy(t,e){return Be(),He("section",my,[...e[0]||(e[0]=[oo('<div class="section-title"><p class="eyebrow">Account</p><h2>密碼修改</h2></div><article class="panel"><h3>修改密碼</h3><div class="form-grid"><input type="password" placeholder="舊密碼"><input type="password" placeholder="新密碼"><input type="password" placeholder="確認新密碼"><button type="button">確認修改</button></div></article>',2)])])}const _y=vr(py,[["render",gy]]),vy={},xy={class:"page-card"};function Sy(t,e){return Be(),He("section",xy,[...e[0]||(e[0]=[$("div",{class:"section-title"},[$("p",{class:"eyebrow"},"Guide"),$("h2",null,"網站操作指引")],-1),$("article",{class:"panel"},[$("h3",null,"使用步驟"),$("ul",{class:"bullet-list"},[$("li",null,"選擇對應的定位任務頁面。"),$("li",null,"確認目前作業狀態與資料來源。"),$("li",null,"透過歷史資料查詢前次操作結果。")])],-1)])])}const yy=vr(vy,[["render",Sy]]),My={},Ey={class:"page-card"};function by(t,e){return Be(),He("section",Ey,[...e[0]||(e[0]=[$("div",{class:"section-title"},[$("p",{class:"eyebrow"},"Technology"),$("h2",null,"定位技術介紹")],-1),$("article",{class:"panel"},[$("h3",null,"系統技術架構"),$("p",null,"本系統結合電腦視覺、深度估測與即時串流，讓終端定位作業可快速觀測與追溯。")],-1)])])}const Ty=vr(My,[["render",by]]),Ay={class:"page-card"},wy={key:0,class:"placeholder"},Ry={key:1,class:"table table-spaced"},Cy={key:2,class:"placeholder"},Py={key:3,class:"alert"},Dy={__name:"ObjectQueryPage",setup(t){const e=at([]),n=at(""),i=at(!0),s=at(""),r=a=>a?new Date(a).toLocaleString("zh-TW"):"—",o=Tt(()=>e.value.filter(a=>{var l;return(l=a.objectClass)==null?void 0:l.toLowerCase().includes(n.value.toLowerCase())}));return mr(async()=>{try{e.value=(await Sn.get("/detections")).data}catch{s.value="無法讀取辨識資料。"}finally{i.value=!1}}),(a,l)=>(Be(),He("section",Ay,[l[2]||(l[2]=$("div",{class:"section-title"},[$("p",{class:"eyebrow"},"History"),$("h2",null,"物件辨識紀錄")],-1)),Ir($("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"search",placeholder:"依物件名稱篩選"},null,512),[[C0,n.value]]),i.value?(Be(),He("p",wy,"正在讀取資料…")):o.value.length?(Be(),He("table",Ry,[l[1]||(l[1]=$("thead",null,[$("tr",null,[$("th",null,"時間"),$("th",null,"物件"),$("th",null,"深度"),$("th",null,"作業 ID")])],-1)),$("tbody",null,[(Be(!0),He(Dt,null,ri(o.value,c=>{var u;return Be(),He("tr",{key:c._id},[$("td",null,Oe(r(c.timestamp)),1),$("td",null,Oe(c.objectClass||"未分類"),1),$("td",null,Oe(c.depth??"—"),1),$("td",null,Oe(((u=c.operationId)==null?void 0:u._id)||c.operationId),1)])}),128))])])):(Be(),He("p",Cy,"沒有符合的辨識資料。")),s.value?(Be(),He("p",Py,Oe(s.value),1)):Ln("",!0)]))}},Ly={class:"page-card"},Iy={key:0,class:"placeholder"},Ny={key:1,class:"table"},Uy={key:2,class:"placeholder"},Oy={key:3,class:"alert"},Fy={__name:"TaskHistoryPage",setup(t){const e=at([]),n=at(!0),i=at(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return mr(async()=>{try{e.value=(await Sn.get("/operations")).data}catch{i.value="無法讀取作業紀錄。"}finally{n.value=!1}}),(r,o)=>(Be(),He("section",Ly,[o[1]||(o[1]=$("div",{class:"section-title"},[$("p",{class:"eyebrow"},"History"),$("h2",null,"任務歷程")],-1)),n.value?(Be(),He("p",Iy,"正在讀取資料…")):e.value.length?(Be(),He("table",Ny,[o[0]||(o[0]=$("thead",null,[$("tr",null,[$("th",null,"開始時間"),$("th",null,"結束時間"),$("th",null,"使用者"),$("th",null,"狀態")])],-1)),$("tbody",null,[(Be(!0),He(Dt,null,ri(e.value,a=>{var l,c;return Be(),He("tr",{key:a._id},[$("td",null,Oe(s(a.startTime)),1),$("td",null,Oe(s(a.endTime)),1),$("td",null,Oe(((l=a.userId)==null?void 0:l.name)||((c=a.userId)==null?void 0:c.email)||"未提供"),1),$("td",null,Oe(a.endTime?"已完成":"進行中"),1)])}),128))])])):(Be(),He("p",Uy,"尚無任務資料。")),i.value?(Be(),He("p",Oy,Oe(i.value),1)):Ln("",!0)]))}},By={class:"page-card"},zy={key:0,class:"placeholder"},Hy={key:1,class:"table"},Vy={key:2,class:"placeholder"},ky={key:3,class:"alert"},Gy={__name:"OperationLogPage",setup(t){const e=at([]),n=at(!0),i=at(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return mr(async()=>{try{e.value=(await Sn.get("/operations")).data}catch{i.value="無法讀取操作紀錄。"}finally{n.value=!1}}),(r,o)=>(Be(),He("section",By,[o[1]||(o[1]=$("div",{class:"section-title"},[$("p",{class:"eyebrow"},"History"),$("h2",null,"操作紀錄")],-1)),n.value?(Be(),He("p",zy,"正在讀取資料…")):e.value.length?(Be(),He("table",Hy,[o[0]||(o[0]=$("thead",null,[$("tr",null,[$("th",null,"作業 ID"),$("th",null,"開始時間"),$("th",null,"結束時間"),$("th",null,"說明")])],-1)),$("tbody",null,[(Be(!0),He(Dt,null,ri(e.value,a=>(Be(),He("tr",{key:a._id},[$("td",null,Oe(a._id),1),$("td",null,Oe(s(a.startTime)),1),$("td",null,Oe(s(a.endTime)),1),$("td",null,Oe(a.description||"—"),1)]))),128))])])):(Be(),He("p",Vy,"尚無操作紀錄。")),i.value?(Be(),He("p",ky,Oe(i.value),1)):Ln("",!0)]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uu="185",js={ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wy=0,Th=1,Xy=2,ta=1,qy=2,Or=3,Ji=0,gn=1,ei=2,Ti=0,Qs=1,Ah=2,wh=3,Rh=4,Yy=5,cs=100,$y=101,Ky=102,Zy=103,Jy=104,jy=200,Qy=201,eM=202,tM=203,_c=204,vc=205,nM=206,iM=207,sM=208,rM=209,oM=210,aM=211,lM=212,cM=213,uM=214,xc=0,Sc=1,yc=2,cr=3,Mc=4,Ec=5,bc=6,Tc=7,Rm=0,fM=1,hM=2,oi=0,Cm=1,Pm=2,Dm=3,Lm=4,Im=5,Nm=6,Um=7,Om=300,Es=301,ur=302,_l=303,vl=304,Xa=306,Ac=1e3,Ei=1001,wc=1002,qt=1003,dM=1004,Mo=1005,en=1006,xl=1007,ds=1008,yn=1009,Fm=1010,Bm=1011,eo=1012,Ou=1013,ui=1014,ti=1015,Pi=1016,Fu=1017,Bu=1018,to=1020,zm=35902,Hm=35899,Vm=1021,km=1022,Un=1023,Di=1026,ps=1027,Gm=1028,zu=1029,bs=1030,Hu=1031,Vu=1033,na=33776,ia=33777,sa=33778,ra=33779,Rc=35840,Cc=35841,Pc=35842,Dc=35843,Lc=36196,Ic=37492,Nc=37496,Uc=37488,Oc=37489,Sa=37490,Fc=37491,Bc=37808,zc=37809,Hc=37810,Vc=37811,kc=37812,Gc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,$c=37818,Kc=37819,Zc=37820,Jc=37821,jc=36492,Qc=36494,eu=36495,tu=36283,nu=36284,ya=36285,iu=36286,pM=3200,su=0,mM=1,Yi="",Tn="srgb",Ma="srgb-linear",Ea="linear",mt="srgb",Ds=7680,Ch=519,gM=512,_M=513,vM=514,ku=515,xM=516,SM=517,Gu=518,yM=519,Ph=35044,Dh="300 es",ni=2e3,no=2001;function MM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ba(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function EM(){const t=ba("canvas");return t.style.display="block",t}const Lh={};function Ih(...t){const e="THREE."+t.shift();console.log(e,...t)}function Wm(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ke(...t){t=Wm(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ut(...t){t=Wm(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function er(...t){const e=t.join(" ");e in Lh||(Lh[e]=!0,Ke(...t))}function bM(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const TM={[xc]:Sc,[yc]:bc,[Mc]:Tc,[cr]:Ec,[Sc]:xc,[bc]:yc,[Tc]:Mc,[Ec]:cr};class es{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oa=Math.PI/180,ru=180/Math.PI;function ho(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function lt(t,e,n){return Math.max(e,Math.min(n,t))}function AM(t,e){return(t%e+e)%e}function Sl(t,e,n){return(1-n)*t+n*e}function Tr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wM={DEG2RAD:oa},Qu=class Qu{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qu.prototype.isVector2=!0;let Je=Qu;class ji{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],p=r[o+1],g=r[o+2],S=r[o+3];if(f!==S||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+f*S;m<0&&(h=-h,p=-p,g=-g,S=-S,m=-m);let d=1-a;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);d=Math.sin(d*M)/E,a=Math.sin(a*M)/E,l=l*d+h*a,c=c*d+p*a,u=u*d+g*a,f=f*d+S*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+g*a,f=f*d+S*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ef=class ef{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Nh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yl.copy(this).projectOnVector(e),this.sub(yl)}reflect(e){return this.sub(yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ef.prototype.isVector3=!0;let Y=ef;const yl=new Y,Nh=new ji,tf=class tf{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],S=s[0],m=s[3],d=s[6],M=s[1],E=s[4],x=s[7],R=s[2],T=s[5],I=s[8];return r[0]=o*S+a*M+l*R,r[3]=o*m+a*E+l*T,r[6]=o*d+a*x+l*I,r[1]=c*S+u*M+f*R,r[4]=c*m+u*E+f*T,r[7]=c*d+u*x+f*I,r[2]=h*S+p*M+g*R,r[5]=h*m+p*E+g*T,r[8]=h*d+p*x+g*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=n*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=f*S,e[1]=(s*c-u*i)*S,e[2]=(a*i-s*o)*S,e[3]=h*S,e[4]=(u*n-s*l)*S,e[5]=(s*r-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*r)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ml.makeScale(e,n)),this}rotate(e){return er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ml.makeRotation(-e)),this}translate(e,n){return er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ml.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tf.prototype.isMatrix3=!0;let et=tf;const Ml=new et,Uh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RM(){const t={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?Ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ma]:{primaries:e,whitePoint:i,transfer:Ea,toXYZ:Uh,fromXYZ:Oh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Uh,fromXYZ:Oh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),t}const ct=RM();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ls;class CM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ls===void 0&&(Ls=ba("canvas")),Ls.width=e.width,Ls.height=e.height;const s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ls}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ba("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PM=0;class Wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(El(s[o].image)):r.push(El(s[o]))}else r=El(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function El(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?CM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let DM=0;const bl=new Y;class un extends es{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Ei,s=Ei,r=en,o=ds,a=Un,l=yn,c=un.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=ho(),this.name="",this.source=new Wu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bl).x}get height(){return this.source.getSize(bl).y}get depth(){return this.source.getSize(bl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ke(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Om)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ac:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ac:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Om;un.DEFAULT_ANISOTROPY=1;const nf=class nf{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,x=(p+1)/2,R=(d+1)/2,T=(u+h)/4,I=(f+S)/4,v=(g+m)/4;return E>x&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=I/i):x>R?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=v/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=I/r,s=v/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-S)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this.w=lt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this.w=lt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nf.prototype.isVector4=!0;let wt=nf;class LM extends es{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new un(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Wu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends LM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Xm extends un{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IM extends un{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wa=class wa{constructor(e,n,i,s,r,o,a,l,c,u,f,h,p,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,h,p,g,S,m)}set(e,n,i,s,r,o,a,l,c,u,f,h,p,g,S,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,S=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-S*c,n[9]=-a*l,n[2]=S-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,S=c*f;n[0]=h+S*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,S=c*f;n[0]=h-S*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=S-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,S=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*u,n[4]=S-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+S,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NM,e,UM)}lookAt(e,n,i){const s=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Fi.crossVectors(i,vn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Fi.crossVectors(i,vn)),Fi.normalize(),Eo.crossVectors(vn,Fi),s[0]=Fi.x,s[4]=Eo.x,s[8]=vn.x,s[1]=Fi.y,s[5]=Eo.y,s[9]=vn.y,s[2]=Fi.z,s[6]=Eo.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],S=i[6],m=i[10],d=i[14],M=i[3],E=i[7],x=i[11],R=i[15],T=s[0],I=s[4],v=s[8],C=s[12],O=s[1],N=s[5],z=s[9],ie=s[13],oe=s[2],X=s[6],ee=s[10],G=s[14],ne=s[3],he=s[7],xe=s[11],ve=s[15];return r[0]=o*T+a*O+l*oe+c*ne,r[4]=o*I+a*N+l*X+c*he,r[8]=o*v+a*z+l*ee+c*xe,r[12]=o*C+a*ie+l*G+c*ve,r[1]=u*T+f*O+h*oe+p*ne,r[5]=u*I+f*N+h*X+p*he,r[9]=u*v+f*z+h*ee+p*xe,r[13]=u*C+f*ie+h*G+p*ve,r[2]=g*T+S*O+m*oe+d*ne,r[6]=g*I+S*N+m*X+d*he,r[10]=g*v+S*z+m*ee+d*xe,r[14]=g*C+S*ie+m*G+d*ve,r[3]=M*T+E*O+x*oe+R*ne,r[7]=M*I+E*N+x*X+R*he,r[11]=M*v+E*z+x*ee+R*xe,r[15]=M*C+E*ie+x*G+R*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],S=e[7],m=e[11],d=e[15],M=l*p-c*h,E=a*p-c*f,x=a*h-l*f,R=o*p-c*u,T=o*h-l*u,I=o*f-a*u;return n*(S*M-m*E+d*x)-i*(g*M-m*R+d*T)+s*(g*E-S*R+d*I)-r*(g*x-S*T+m*I)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],S=e[13],m=e[14],d=e[15],M=n*a-i*o,E=n*l-s*o,x=n*c-r*o,R=i*l-s*a,T=i*c-r*a,I=s*c-r*l,v=u*S-f*g,C=u*m-h*g,O=u*d-p*g,N=f*m-h*S,z=f*d-p*S,ie=h*d-p*m,oe=M*ie-E*z+x*N+R*O-T*C+I*v;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/oe;return e[0]=(a*ie-l*z+c*N)*X,e[1]=(s*z-i*ie-r*N)*X,e[2]=(S*I-m*T+d*R)*X,e[3]=(h*T-f*I-p*R)*X,e[4]=(l*O-o*ie-c*C)*X,e[5]=(n*ie-s*O+r*C)*X,e[6]=(m*x-g*I-d*E)*X,e[7]=(u*I-h*x+p*E)*X,e[8]=(o*z-a*O+c*v)*X,e[9]=(i*O-n*z-r*v)*X,e[10]=(g*T-S*x+d*M)*X,e[11]=(f*x-u*T-p*M)*X,e[12]=(a*C-o*N-l*v)*X,e[13]=(n*N-i*C+s*v)*X,e[14]=(S*E-g*R-m*M)*X,e[15]=(u*R-f*E+h*M)*X,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,S=o*u,m=o*f,d=a*f,M=l*c,E=l*u,x=l*f,R=i.x,T=i.y,I=i.z;return s[0]=(1-(S+d))*R,s[1]=(p+x)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(h+d))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+E)*I,s[9]=(m-M)*I,s[10]=(1-(h+S))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Is.set(s[0],s[1],s[2]).length();const a=Is.set(s[4],s[5],s[6]).length(),l=Is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Cn.copy(this);const c=1/o,u=1/a,f=1/l;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,n.setFromRotationMatrix(Cn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=ni,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),h=(n+e)/(n-e),p=(i+s)/(i-s);let g,S;if(l)g=r/(o-r),S=o*r/(o-r);else if(a===ni)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===no)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ni,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),h=-(n+e)/(n-e),p=-(i+s)/(i-s);let g,S;if(l)g=1/(o-r),S=o/(o-r);else if(a===ni)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===no)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};wa.prototype.isMatrix4=!0;let At=wa;const Is=new Y,Cn=new At,NM=new Y(0,0,0),UM=new Y(1,1,1),Fi=new Y,Eo=new Y,vn=new Y,Fh=new At,Bh=new ji;class Qi{constructor(e=0,n=0,i=0,s=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OM=0;const zh=new Y,Ns=new ji,pi=new At,bo=new Y,Ar=new Y,FM=new Y,BM=new ji,Hh=new Y(1,0,0),Vh=new Y(0,1,0),kh=new Y(0,0,1),Gh={type:"added"},zM={type:"removed"},Us={type:"childadded",child:null},Tl={type:"childremoved",child:null};class Gt extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new Y,n=new Qi,i=new ji,s=new Y(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new et}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,n){return zh.copy(e).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?bo.copy(e):bo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ar,bo,this.up):pi.lookAt(bo,Ar,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(pi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gh),Us.child=e,this.dispatchEvent(Us),Us.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zM),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gh),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,BM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new Y(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ms extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HM={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},To={h:0,s:0,l:0};function wl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ct.workingColorSpace){if(e=AM(e,1),n=lt(n,0,1),i=lt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=wl(o,r,e+1/3),this.g=wl(o,r,e),this.b=wl(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,n=Tn){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tn){const i=qm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return ct.workingToColorSpace(Jt.copy(this),e),Math.round(lt(Jt.r*255,0,255))*65536+Math.round(lt(Jt.g*255,0,255))*256+Math.round(lt(Jt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Tn){ct.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,s=Jt.b;return e!==Tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(To);const i=Sl(Bi.h,To.h,n),s=Sl(Bi.s,To.s,n),r=Sl(Bi.l,To.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new ot;ot.NAMES=qm;class VM extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Pn=new Y,mi=new Y,Rl=new Y,gi=new Y,Os=new Y,Fs=new Y,Wh=new Y,Cl=new Y,Pl=new Y,Dl=new Y,Ll=new wt,Il=new wt,Nl=new wt;class Nn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Pn.subVectors(e,n),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Pn.subVectors(s,n),mi.subVectors(i,n),Rl.subVectors(e,n);const o=Pn.dot(Pn),a=Pn.dot(mi),l=Pn.dot(Rl),c=mi.dot(mi),u=mi.dot(Rl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Ll.setScalar(0),Il.setScalar(0),Nl.setScalar(0),Ll.fromBufferAttribute(e,n),Il.fromBufferAttribute(e,i),Nl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ll,r.x),o.addScaledVector(Il,r.y),o.addScaledVector(Nl,r.z),o}static isFrontFacing(e,n,i,s){return Pn.subVectors(i,n),mi.subVectors(e,n),Pn.cross(mi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Pn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Os.subVectors(s,i),Fs.subVectors(r,i),Cl.subVectors(e,i);const l=Os.dot(Cl),c=Fs.dot(Cl);if(l<=0&&c<=0)return n.copy(i);Pl.subVectors(e,s);const u=Os.dot(Pl),f=Fs.dot(Pl);if(u>=0&&f<=u)return n.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Os,o);Dl.subVectors(e,r);const p=Os.dot(Dl),g=Fs.dot(Dl);if(g>=0&&p<=g)return n.copy(r);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Fs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Wh.subVectors(r,s),a=(f-u)/(f-u+(p-g)),n.copy(s).addScaledVector(Wh,a);const d=1/(m+S+h);return o=S*d,a=h*d,n.copy(i).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class po{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),wo.subVectors(this.max,wr),Bs.subVectors(e.a,wr),zs.subVectors(e.b,wr),Hs.subVectors(e.c,wr),zi.subVectors(zs,Bs),Hi.subVectors(Hs,zs),ss.subVectors(Bs,Hs);let n=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-ss.z,ss.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,ss.z,0,-ss.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-ss.y,ss.x,0];return!Ul(n,Bs,zs,Hs,wo)||(n=[1,0,0,0,1,0,0,0,1],!Ul(n,Bs,zs,Hs,wo))?!1:(Ro.crossVectors(zi,Hi),n=[Ro.x,Ro.y,Ro.z],Ul(n,Bs,zs,Hs,wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Dn=new Y,Ao=new po,Bs=new Y,zs=new Y,Hs=new Y,zi=new Y,Hi=new Y,ss=new Y,wr=new Y,wo=new Y,Ro=new Y,rs=new Y;function Ul(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){rs.fromArray(t,r);const a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=n.dot(rs),u=i.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ot=new Y,Co=new Je;let kM=0;class li extends es{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ph,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Co.fromBufferAttribute(this,n),Co.applyMatrix3(e),this.setXY(n,Co.x,Co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Tr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Tr(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Tr(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Tr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Tr(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ph&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ym extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $m extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zt extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}const GM=new po,Rr=new Y,Ol=new Y;class qa{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):GM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const n=Rr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Ol)),this.expandByPoint(Rr.copy(e.center).sub(Ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let WM=0;const bn=new At,Fl=new Gt,Vs=new Y,xn=new po,Cr=new po,kt=new Y;class fn extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(MM(e)?$m:Ym)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Fl.lookAt(e),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(xn.min,Cr.min),xn.expandByPoint(kt),kt.addVectors(xn.max,Cr.max),xn.expandByPoint(kt)):(xn.expandByPoint(Cr.min),xn.expandByPoint(Cr.max))}xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(e,c),kt.add(Vs)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new li(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new Y,l[v]=new Y;const c=new Y,u=new Y,f=new Y,h=new Je,p=new Je,g=new Je,S=new Y,m=new Y;function d(v,C,O){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,O),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,C),g.fromBufferAttribute(r,O),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(N),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),a[v].add(S),a[C].add(S),a[O].add(S),l[v].add(m),l[C].add(m),l[O].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,C=M.length;v<C;++v){const O=M[v],N=O.start,z=O.count;for(let ie=N,oe=N+z;ie<oe;ie+=3)d(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const E=new Y,x=new Y,R=new Y,T=new Y;function I(v){R.fromBufferAttribute(s,v),T.copy(R);const C=a[v];E.copy(C),E.sub(R.multiplyScalar(R.dot(C))).normalize(),x.crossVectors(T,C);const N=x.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,N)}for(let v=0,C=M.length;v<C;++v){const O=M[v],N=O.start,z=O.count;for(let ie=N,oe=N+z;ie<oe;ie+=3)I(e.getX(ie+0)),I(e.getX(ie+1)),I(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new li(h,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let XM=0;class xr extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=Qs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ke(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_c&&(i.blendSrc=this.blendSrc),this.blendDst!==vc&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vi=new Y,Bl=new Y,Po=new Y,Vi=new Y,zl=new Y,Do=new Y,Hl=new Y;class Ya{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Bl.copy(e).add(n).multiplyScalar(.5),Po.copy(n).sub(e).normalize(),Vi.copy(this.origin).sub(Bl);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Po),a=Vi.dot(this.direction),l=-Vi.dot(Po),c=Vi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bl).addScaledVector(Po,h),p}intersectSphere(e,n){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,s,r){zl.subVectors(n,e),Do.subVectors(i,e),Hl.crossVectors(zl,Do);let o=this.direction.dot(Hl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(Do.crossVectors(Vi,Do));if(l<0)return null;const c=a*this.direction.dot(zl.cross(Vi));if(c<0||l+c>o)return null;const u=-a*Vi.dot(Hl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qu extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xh=new At,os=new Ya,Lo=new qa,qh=new Y,Io=new Y,No=new Y,Uo=new Y,Vl=new Y,Oo=new Y,Yh=new Y,Fo=new Y;class jt extends Gt{constructor(e=new fn,n=new qu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Vl.fromBufferAttribute(f,e),o?Oo.addScaledVector(Vl,u):Oo.addScaledVector(Vl.sub(n),u))}n.add(Oo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(Lo.containsPoint(os.origin)===!1&&(os.intersectSphere(Lo,qh)===null||os.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(Xh.copy(r).invert(),os.copy(e.ray).applyMatrix4(Xh),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,os)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,R=E;x<R;x+=3){const T=a.getX(x),I=a.getX(x+1),v=a.getX(x+2);s=Bo(this,d,e,i,c,u,f,T,I,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=Bo(this,o,e,i,c,u,f,M,E,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,R=E;x<R;x+=3){const T=x,I=x+1,v=x+2;s=Bo(this,d,e,i,c,u,f,T,I,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const M=m,E=m+1,x=m+2;s=Bo(this,o,e,i,c,u,f,M,E,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function qM(t,e,n,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ji,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fo);return c<n.near||c>n.far?null:{distance:c,point:Fo.clone(),object:t}}function Bo(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Io),t.getVertexPosition(l,No),t.getVertexPosition(c,Uo);const u=qM(t,e,n,i,Io,No,Uo,Yh);if(u){const f=new Y;Nn.getBarycoord(Yh,Io,No,Uo,f),s&&(u.uv=Nn.getInterpolatedAttribute(s,a,l,c,f,new Je)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,a,l,c,f,new Je)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};Nn.getNormal(Io,No,Uo,h.normal),u.face=h,u.barycoord=f}return u}class YM extends un{constructor(e=null,n=1,i=1,s,r,o,a,l,c=qt,u=qt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kl=new Y,$M=new Y,KM=new et;class Xi{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=kl.subVectors(i,n).cross($M.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(kl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||KM.getNormalMatrix(e),s=this.coplanarPoint(kl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new qa,ZM=new Je(.5,.5),zo=new Y;class Yu{constructor(e=new Xi,n=new Xi,i=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ni,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],S=r[9],m=r[10],d=r[11],M=r[12],E=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-o,p-u,d-g,R-M).normalize(),s[1].setComponents(c+o,p+u,d+g,R+M).normalize(),s[2].setComponents(c+a,p+f,d+S,R+E).normalize(),s[3].setComponents(c-a,p-f,d-S,R-E).normalize(),i)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,p-h,d-m,R-x).normalize();else if(s[4].setComponents(c-l,p-h,d-m,R-x).normalize(),n===ni)s[5].setComponents(c+l,p+h,d+m,R+x).normalize();else if(n===no)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const n=ZM.distanceTo(e.center);return as.radius=.7071067811865476+n,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(zo.x=s.normal.x>0?e.max.x:e.min.x,zo.y=s.normal.y>0?e.max.y:e.min.y,zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $u extends xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new Y,Aa=new Y,$h=new At,Pr=new Ya,Ho=new qa,Gl=new Y,Kh=new Y;class Km extends Gt{constructor(e=new fn,n=new $u){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Ta.fromBufferAttribute(n,s-1),Aa.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Ta.distanceTo(Aa);e.setAttribute("lineDistance",new zt(i,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;$h.copy(s).invert(),Pr.copy(e.ray).applyMatrix4($h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let S=p,m=g-1;S<m;S+=c){const d=u.getX(S),M=u.getX(S+1),E=Vo(this,e,Pr,l,d,M,S);E&&n.push(E)}if(this.isLineLoop){const S=u.getX(g-1),m=u.getX(p),d=Vo(this,e,Pr,l,S,m,g-1);d&&n.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=p,m=g-1;S<m;S+=c){const d=Vo(this,e,Pr,l,S,S+1,S);d&&n.push(d)}if(this.isLineLoop){const S=Vo(this,e,Pr,l,g-1,p,g-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vo(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Ta.fromBufferAttribute(a,s),Aa.fromBufferAttribute(a,r),n.distanceSqToSegment(Ta,Aa,Gl,Kh)>i)return;Gl.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Gl);if(!(c<e.near||c>e.far))return{distance:c,point:Kh.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Zh=new Y,Jh=new Y;class JM extends Km{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Zh.fromBufferAttribute(n,s),Jh.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zh.distanceTo(Jh);e.setAttribute("lineDistance",new zt(i,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zm extends un{constructor(e=[],n=Es,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fr extends un{constructor(e,n,i=ui,s,r,o,a=qt,l=qt,c,u=Di,f=1){if(u!==Di&&u!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class jM extends fr{constructor(e,n=ui,i=Es,s,r,o=qt,a=qt,l,c=Di){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jm extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ts extends fn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function g(S,m,d,M,E,x,R,T,I,v,C){const O=x/I,N=R/v,z=x/2,ie=R/2,oe=T/2,X=I+1,ee=v+1;let G=0,ne=0;const he=new Y;for(let xe=0;xe<ee;xe++){const ve=xe*N-ie;for(let ye=0;ye<X;ye++){const Ye=ye*O-z;he[S]=Ye*M,he[m]=ve*E,he[d]=oe,c.push(he.x,he.y,he.z),he[S]=0,he[m]=0,he[d]=T>0?1:-1,u.push(he.x,he.y,he.z),f.push(ye/I),f.push(1-xe/v),G+=1}}for(let xe=0;xe<v;xe++)for(let ve=0;ve<I;ve++){const ye=h+ve+X*xe,Ye=h+ve+X*(xe+1),it=h+(ve+1)+X*(xe+1),je=h+(ve+1)+X*xe;l.push(ye,Ye,je),l.push(Ye,it,je),ne+=6}a.addGroup(p,ne,C),p+=ne,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class io extends fn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let g=0;const S=[],m=i/2;let d=0;M(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(p,2));function M(){const x=new Y,R=new Y;let T=0;const I=(n-e)/i;for(let v=0;v<=r;v++){const C=[],O=v/r,N=O*(n-e)+e;for(let z=0;z<=s;z++){const ie=z/s,oe=ie*l+a,X=Math.sin(oe),ee=Math.cos(oe);R.x=N*X,R.y=-O*i+m,R.z=N*ee,f.push(R.x,R.y,R.z),x.set(X,I,ee).normalize(),h.push(x.x,x.y,x.z),p.push(ie,1-O),C.push(g++)}S.push(C)}for(let v=0;v<s;v++)for(let C=0;C<r;C++){const O=S[C][v],N=S[C+1][v],z=S[C+1][v+1],ie=S[C][v+1];(e>0||C!==0)&&(u.push(O,N,ie),T+=3),(n>0||C!==r-1)&&(u.push(N,z,ie),T+=3)}c.addGroup(d,T,0),d+=T}function E(x){const R=g,T=new Je,I=new Y;let v=0;const C=x===!0?e:n,O=x===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*O,0),h.push(0,O,0),p.push(.5,.5),g++;const N=g;for(let z=0;z<=s;z++){const oe=z/s*l+a,X=Math.cos(oe),ee=Math.sin(oe);I.x=C*ee,I.y=m*O,I.z=C*X,f.push(I.x,I.y,I.z),h.push(0,O,0),T.x=X*.5+.5,T.y=ee*.5*O+.5,p.push(T.x,T.y),g++}for(let z=0;z<s;z++){const ie=R+z,oe=N+z;x===!0?u.push(oe,oe+1,ie):u.push(oe+1,oe,ie),v+=3}c.addGroup(d,v,x===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ku extends io{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ku(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mo extends fn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],S=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let E=0;E<c;E++){const x=E*f-r;g.push(x,-M,0),S.push(0,0,1),m.push(E/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const E=M+c*d,x=M+c*(d+1),R=M+1+c*(d+1),T=M+1+c*d;p.push(E,x,T),p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(S,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zu extends fn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new Y,h=new Y,p=[],g=[],S=[],m=[];for(let d=0;d<=i;d++){const M=[],E=d/i,x=o+E*a,R=e*Math.cos(x),T=Math.sqrt(e*e-R*R);let I=0;d===0&&o===0?I=.5/n:d===i&&l===Math.PI&&(I=-.5/n);for(let v=0;v<=n;v++){const C=v/n,O=s+C*r;f.x=-T*Math.cos(O),f.y=R,f.z=T*Math.sin(O),g.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(C+I,1-E),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<n;M++){const E=u[d][M+1],x=u[d][M],R=u[d+1][M],T=u[d+1][M+1];(d!==0||o>0)&&p.push(E,x,T),(d!==i-1||l<Math.PI)&&p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(S,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function hr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(jh(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(jh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=hr(t[n]);for(const s in i)e[s]=i[s]}return e}function jh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function QM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const eE={clone:hr,merge:rn};var tE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tE,this.fragmentShader=nE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new Je().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new At().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class iE extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ko extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sE extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rE extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qm extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class oE extends Qm{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Wl=new At,Qh=new Y,ed=new Y;class aE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yu,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Qh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qh),ed.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ed),n.updateMatrixWorld(),Wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===no||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Go=new Y,Wo=new ji,qn=new Y;class eg extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Go,Wo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Wo,qn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Go,Wo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Wo,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ki=new Y,td=new Je,nd=new Je;class An extends eg{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ru*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ru*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,td,nd),n.subVectors(nd,td)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ju extends eg{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class lE extends aE{constructor(){super(new Ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cE extends Qm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new lE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const ks=-90,Gs=1;class uE extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(ks,Gs,e,n);s.layers=this.layers,this.add(s);const r=new An(ks,Gs,e,n);r.layers=this.layers,this.add(r);const o=new An(ks,Gs,e,n);o.layers=this.layers,this.add(o);const a=new An(ks,Gs,e,n);a.layers=this.layers,this.add(a);const l=new An(ks,Gs,e,n);l.layers=this.layers,this.add(l);const c=new An(ks,Gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fE extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const id=new At;class hE{constructor(e,n,i=0,s=1/0){this.ray=new Ya(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Xu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ut("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(e,n=!0,i=[]){return ou(e,this,i,n),i.sort(sd),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ou(e[s],this,i,n);return i.sort(sd),i}}function sd(t,e){return t.distance-e.distance}function ou(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)ou(r[o],e,n,!0)}}class rd{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const sf=class sf{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};sf.prototype.isMatrix2=!0;let od=sf;class dE extends JM{constructor(e=10,n=10,i=4473924,s=8947848){i=new ot(i),s=new ot(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,g=-a;h<=n;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const S=h===r?i:s;S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3}const u=new fn;u.setAttribute("position",new zt(l,3)),u.setAttribute("color",new zt(c,3));const f=new $u({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class pE extends es{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ke("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ad(t,e,n,i){const s=mE(i);switch(n){case Vm:return t*e;case Gm:return t*e/s.components*s.byteLength;case zu:return t*e/s.components*s.byteLength;case bs:return t*e*2/s.components*s.byteLength;case Hu:return t*e*2/s.components*s.byteLength;case km:return t*e*3/s.components*s.byteLength;case Un:return t*e*4/s.components*s.byteLength;case Vu:return t*e*4/s.components*s.byteLength;case na:case ia:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Dc:return Math.max(t,16)*Math.max(e,8)/4;case Rc:case Pc:return Math.max(t,8)*Math.max(e,8)/2;case Lc:case Ic:case Uc:case Oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Sa:case Fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case jc:case Qc:case eu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case tu:case nu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ya:case iu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mE(t){switch(t){case yn:case Fm:return{byteLength:1,components:1};case eo:case Bm:case Pi:return{byteLength:2,components:1};case Fu:case Bu:return{byteLength:2,components:4};case ui:case Ou:case ti:return{byteLength:4,components:1};case zm:case Hm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uu}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function gE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],S=f[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const S=f[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vE=`#ifdef USE_ALPHAHASH
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
#endif`,xE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ME=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EE=`#ifdef USE_AOMAP
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
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TE=`#ifdef USE_BATCHING
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
#endif`,AE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PE=`#ifdef USE_IRIDESCENCE
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
#endif`,DE=`#ifdef USE_BUMPMAP
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
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,HE=`#define PI 3.141592653589793
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
} // validated`,VE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kE=`vec3 transformedNormal = objectNormal;
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
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YE="gl_FragColor = linearToOutputTexel( gl_FragColor );",$E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sb=`#ifdef USE_GRADIENTMAP
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
}`,rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pb=`PhysicalMaterial material;
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
#endif`,mb=`uniform sampler2D dfgLUT;
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
}`,gb=`
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
#endif`,_b=`#if defined( RE_IndirectDiffuse )
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wb=`#if defined( USE_POINTS_UV )
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
#endif`,Rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
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
#endif`,Nb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hb=`#ifdef USE_NORMALMAP
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
#endif`,Vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nT=`float getShadowMask() {
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
}`,iT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,rT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oT=`#ifdef USE_SKINNING
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
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,hT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
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
}`,bT=`#if DEPTH_PACKING == 3200
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
}`,TT=`#define DISTANCE
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
}`,AT=`#define DISTANCE
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
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
}`,PT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,LT=`uniform vec3 diffuse;
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
}`,IT=`#define LAMBERT
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
}`,NT=`#define LAMBERT
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
}`,UT=`#define MATCAP
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
}`,OT=`#define MATCAP
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
}`,FT=`#define NORMAL
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
}`,BT=`#define NORMAL
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
}`,zT=`#define PHONG
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
}`,HT=`#define PHONG
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
}`,VT=`#define STANDARD
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
}`,kT=`#define STANDARD
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
}`,GT=`#define TOON
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
}`,WT=`#define TOON
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
}`,XT=`uniform float size;
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
}`,qT=`uniform vec3 diffuse;
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
}`,YT=`#include <common>
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
}`,$T=`uniform vec3 color;
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
}`,KT=`uniform float rotation;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:_E,alphahash_pars_fragment:vE,alphamap_fragment:xE,alphamap_pars_fragment:SE,alphatest_fragment:yE,alphatest_pars_fragment:ME,aomap_fragment:EE,aomap_pars_fragment:bE,batching_pars_vertex:TE,batching_vertex:AE,begin_vertex:wE,beginnormal_vertex:RE,bsdfs:CE,iridescence_fragment:PE,bumpmap_pars_fragment:DE,clipping_planes_fragment:LE,clipping_planes_pars_fragment:IE,clipping_planes_pars_vertex:NE,clipping_planes_vertex:UE,color_fragment:OE,color_pars_fragment:FE,color_pars_vertex:BE,color_vertex:zE,common:HE,cube_uv_reflection_fragment:VE,defaultnormal_vertex:kE,displacementmap_pars_vertex:GE,displacementmap_vertex:WE,emissivemap_fragment:XE,emissivemap_pars_fragment:qE,colorspace_fragment:YE,colorspace_pars_fragment:$E,envmap_fragment:KE,envmap_common_pars_fragment:ZE,envmap_pars_fragment:JE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:cb,envmap_vertex:QE,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:sb,lightmap_pars_fragment:rb,lights_lambert_fragment:ob,lights_lambert_pars_fragment:ab,lights_pars_begin:lb,lights_toon_fragment:ub,lights_toon_pars_fragment:fb,lights_phong_fragment:hb,lights_phong_pars_fragment:db,lights_physical_fragment:pb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:_b,lights_fragment_end:vb,lightprobes_pars_fragment:xb,logdepthbuf_fragment:Sb,logdepthbuf_pars_fragment:yb,logdepthbuf_pars_vertex:Mb,logdepthbuf_vertex:Eb,map_fragment:bb,map_pars_fragment:Tb,map_particle_fragment:Ab,map_particle_pars_fragment:wb,metalnessmap_fragment:Rb,metalnessmap_pars_fragment:Cb,morphinstance_vertex:Pb,morphcolor_vertex:Db,morphnormal_vertex:Lb,morphtarget_pars_vertex:Ib,morphtarget_vertex:Nb,normal_fragment_begin:Ub,normal_fragment_maps:Ob,normal_pars_fragment:Fb,normal_pars_vertex:Bb,normal_vertex:zb,normalmap_pars_fragment:Hb,clearcoat_normal_fragment_begin:Vb,clearcoat_normal_fragment_maps:kb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Wb,opaque_fragment:Xb,packing:qb,premultiplied_alpha_fragment:Yb,project_vertex:$b,dithering_fragment:Kb,dithering_pars_fragment:Zb,roughnessmap_fragment:Jb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:eT,shadowmap_vertex:tT,shadowmask_pars_fragment:nT,skinbase_vertex:iT,skinning_pars_vertex:sT,skinning_vertex:rT,skinnormal_vertex:oT,specularmap_fragment:aT,specularmap_pars_fragment:lT,tonemapping_fragment:cT,tonemapping_pars_fragment:uT,transmission_fragment:fT,transmission_pars_fragment:hT,uv_pars_fragment:dT,uv_pars_vertex:pT,uv_vertex:mT,worldpos_vertex:gT,background_vert:_T,background_frag:vT,backgroundCube_vert:xT,backgroundCube_frag:ST,cube_vert:yT,cube_frag:MT,depth_vert:ET,depth_frag:bT,distance_vert:TT,distance_frag:AT,equirect_vert:wT,equirect_frag:RT,linedashed_vert:CT,linedashed_frag:PT,meshbasic_vert:DT,meshbasic_frag:LT,meshlambert_vert:IT,meshlambert_frag:NT,meshmatcap_vert:UT,meshmatcap_frag:OT,meshnormal_vert:FT,meshnormal_frag:BT,meshphong_vert:zT,meshphong_frag:HT,meshphysical_vert:VT,meshphysical_frag:kT,meshtoon_vert:GT,meshtoon_frag:WT,points_vert:XT,points_frag:qT,shadow_vert:YT,shadow_frag:$T,sprite_vert:KT,sprite_frag:ZT},Ce={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},jn={basic:{uniforms:rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:rn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:rn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:rn([Ce.points,Ce.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:rn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:rn([Ce.common,Ce.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:rn([Ce.sprite,Ce.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:rn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:rn([Ce.lights,Ce.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};jn.physical={uniforms:rn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Xo={r:0,b:0,g:0},JT=new At,ng=new et;ng.set(-1,0,0,0,1,0,0,0,1);function jT(t,e,n,i,s,r){const o=new ot(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function p(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const x=M.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(M){let E=!1;const x=p(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(M,E){const x=p(E);x&&(x.isCubeTexture||x.mapping===Xa)?(c===void 0&&(c=new jt(new Ts(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:hr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(JT.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ng),c.material.toneMapped=ct.getTransfer(x.colorSpace)!==mt,(u!==x||f!==x.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new jt(new mo(2,2),new fi({name:"BackgroundMaterial",uniforms:hr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(Xo,jm(t)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,E,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:S,dispose:d}}function QT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(N,z,ie,oe,X){let ee=!1;const G=f(N,oe,ie,z);r!==G&&(r=G,c(r.object)),ee=p(N,oe,ie,X),ee&&g(N,oe,ie,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,x(N,z,ie,oe),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function u(N){return t.deleteVertexArray(N)}function f(N,z,ie,oe){const X=oe.wireframe===!0;let ee=i[z.id];ee===void 0&&(ee={},i[z.id]=ee);const G=N.isInstancedMesh===!0?N.id:0;let ne=ee[G];ne===void 0&&(ne={},ee[G]=ne);let he=ne[ie.id];he===void 0&&(he={},ne[ie.id]=he);let xe=he[X];return xe===void 0&&(xe=h(l()),he[X]=xe),xe}function h(N){const z=[],ie=[],oe=[];for(let X=0;X<n;X++)z[X]=0,ie[X]=0,oe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ie,attributeDivisors:oe,object:N,attributes:{},index:null}}function p(N,z,ie,oe){const X=r.attributes,ee=z.attributes;let G=0;const ne=ie.getAttributes();for(const he in ne)if(ne[he].location>=0){const ve=X[he];let ye=ee[he];if(ye===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor)),ve===void 0||ve.attribute!==ye||ye&&ve.data!==ye.data)return!0;G++}return r.attributesNum!==G||r.index!==oe}function g(N,z,ie,oe){const X={},ee=z.attributes;let G=0;const ne=ie.getAttributes();for(const he in ne)if(ne[he].location>=0){let ve=ee[he];ve===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor));const ye={};ye.attribute=ve,ve&&ve.data&&(ye.data=ve.data),X[he]=ye,G++}r.attributes=X,r.attributesNum=G,r.index=oe}function S(){const N=r.newAttributes;for(let z=0,ie=N.length;z<ie;z++)N[z]=0}function m(N){d(N,0)}function d(N,z){const ie=r.newAttributes,oe=r.enabledAttributes,X=r.attributeDivisors;ie[N]=1,oe[N]===0&&(t.enableVertexAttribArray(N),oe[N]=1),X[N]!==z&&(t.vertexAttribDivisor(N,z),X[N]=z)}function M(){const N=r.newAttributes,z=r.enabledAttributes;for(let ie=0,oe=z.length;ie<oe;ie++)z[ie]!==N[ie]&&(t.disableVertexAttribArray(ie),z[ie]=0)}function E(N,z,ie,oe,X,ee,G){G===!0?t.vertexAttribIPointer(N,z,ie,X,ee):t.vertexAttribPointer(N,z,ie,oe,X,ee)}function x(N,z,ie,oe){S();const X=oe.attributes,ee=ie.getAttributes(),G=z.defaultAttributeValues;for(const ne in ee){const he=ee[ne];if(he.location>=0){let xe=X[ne];if(xe===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor)),xe!==void 0){const ve=xe.normalized,ye=xe.itemSize,Ye=e.get(xe);if(Ye===void 0)continue;const it=Ye.buffer,je=Ye.type,q=Ye.bytesPerElement,F=je===t.INT||je===t.UNSIGNED_INT||xe.gpuType===Ou;if(xe.isInterleavedBufferAttribute){const K=xe.data,te=K.stride,_e=xe.offset;if(K.isInstancedInterleavedBuffer){for(let Me=0;Me<he.locationSize;Me++)d(he.location+Me,K.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Me=0;Me<he.locationSize;Me++)m(he.location+Me);t.bindBuffer(t.ARRAY_BUFFER,it);for(let Me=0;Me<he.locationSize;Me++)E(he.location+Me,ye/he.locationSize,je,ve,te*q,(_e+ye/he.locationSize*Me)*q,F)}else{if(xe.isInstancedBufferAttribute){for(let K=0;K<he.locationSize;K++)d(he.location+K,xe.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let K=0;K<he.locationSize;K++)m(he.location+K);t.bindBuffer(t.ARRAY_BUFFER,it);for(let K=0;K<he.locationSize;K++)E(he.location+K,ye/he.locationSize,je,ve,ye*q,ye/he.locationSize*K*q,F)}}else if(G!==void 0){const ve=G[ne];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(he.location,ve);break;case 3:t.vertexAttrib3fv(he.location,ve);break;case 4:t.vertexAttrib4fv(he.location,ve);break;default:t.vertexAttrib1fv(he.location,ve)}}}}M()}function R(){C();for(const N in i){const z=i[N];for(const ie in z){const oe=z[ie];for(const X in oe){const ee=oe[X];for(const G in ee)u(ee[G].object),delete ee[G];delete oe[X]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;const z=i[N.id];for(const ie in z){const oe=z[ie];for(const X in oe){const ee=oe[X];for(const G in ee)u(ee[G].object),delete ee[G];delete oe[X]}}delete i[N.id]}function I(N){for(const z in i){const ie=i[z];for(const oe in ie){const X=ie[oe];if(X[N.id]===void 0)continue;const ee=X[N.id];for(const G in ee)u(ee[G].object),delete ee[G];delete X[N.id]}}}function v(N){for(const z in i){const ie=i[z],oe=N.isInstancedMesh===!0?N.id:0,X=ie[oe];if(X!==void 0){for(const ee in X){const G=X[ee];for(const ne in G)u(G[ne].object),delete G[ne];delete X[ee]}delete ie[oe],Object.keys(ie).length===0&&delete i[z]}}}function C(){O(),o=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:O,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function eA(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function tA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Un&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const v=I===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==yn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ti&&!v)}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,maxSamples:R,samples:T}}function nA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Xi,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,E=M*4;let x=d.clippingState||null;l.value=x,x=u(g,h,E,p);for(let R=0;R!==E;++R)x[R]=n[R];d.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const d=p+S*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=p;E!==S;++E,x+=4)o.copy(f[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const $i=4,ld=[.125,.215,.35,.446,.526,.582],us=20,iA=256,Dr=new Ju,cd=new ot;let Xl=null,ql=0,Yl=0,$l=!1;const sA=new Y;class ud{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=sA}=r;Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,ql,Yl),this._renderer.xr.enabled=$l,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Pi,format:Un,colorSpace:Ma,depthBuffer:!1},s=fd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rA(r)),this._blurMaterial=aA(r,e,n),this._ggxMaterial=oA(r,e,n)}return s}_compileMaterial(e){const n=new jt(new fn,e);this._renderer.compile(n,Dr)}_sceneToCubeUV(e,n,i,s,r){const l=new An(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(cd),f.toneMapping=oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new Ts,new qu({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(cd),d=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const R=this._cubeSize;Ws(s,x*R,E>2?R:0,R,R),f.setRenderTarget(s),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Es||e.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ws(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Dr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-$i?i-g+$i:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Ws(r,m,d,3*S,2*S),s.setRenderTarget(r),s.render(a,Dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Ws(e,m,d,3*S,2*S),s.setRenderTarget(e),s.render(a,Dr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),S=r/g,m=isFinite(r)?1+Math.floor(u*S):us;m>us&&Ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const d=[];let M=0;for(let I=0;I<us;++I){const v=I/S,C=Math.exp(-v*v/2);d.push(C),I===0?M+=C:I<m&&(M+=2*C)}for(let I=0;I<d.length;I++)d[I]=d[I]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const x=this._sizeLods[s],R=3*x*(s>E-$i?s-E+$i:0),T=4*(this._cubeSize-x);Ws(n,R,T,3*x,2*x),l.setRenderTarget(n),l.render(f,Dr)}}function rA(t){const e=[],n=[],i=[];let s=t;const r=t-$i+1+ld.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-$i?l=ld[o-t+$i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,S=3,m=2,d=1,M=new Float32Array(S*g*p),E=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let T=0;T<p;T++){const I=T%3*2/3-1,v=T>2?0:-1,C=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];M.set(C,S*g*T),E.set(h,m*g*T);const O=[T,T,T,T,T,T];x.set(O,d*g*T)}const R=new fn;R.setAttribute("position",new li(M,S)),R.setAttribute("uv",new li(E,m)),R.setAttribute("faceIndex",new li(x,d)),i.push(new jt(R,null)),s>$i&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function fd(t,e,n){const i=new ai(t,e,n);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function oA(t,e,n){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function aA(t,e,n){const i=new Float32Array(us),s=new Y(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hd(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function dd(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function $a(){return`

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
	`}class ig extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Zm(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ts(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Ti});r.uniforms.tEquirect.value=n;const o=new jt(s,r),a=n.minFilter;return n.minFilter===ds&&(n.minFilter=en),new uE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function lA(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===_l||p===vl)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const S=new ig(g.height);return S.fromEquirectangularTexture(t,h),e.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,g=p===_l||p===vl,S=p===Es||p===ur;if(g||S){let m=n.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new ud(t)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new ud(t)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===_l?h.mapping=Es:p===vl&&(h.mapping=ur),h}function l(h){let p=0;const g=6;for(let S=0;S<g;S++)h[S]!==void 0&&p++;return p===g}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function cA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&er("WebGLRenderer: "+i+" extension not supported."),s}}}function uA(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let S=0;if(g===void 0)return;if(p!==null){const M=p.array;S=p.version;for(let E=0,x=M.length;E<x;E+=3){const R=M[E+0],T=M[E+1],I=M[E+2];h.push(R,T,T,I,I,R)}}else{const M=g.array;S=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const R=E+0,T=E+1,I=E+2;h.push(R,T,T,I,I,R)}}const m=new(g.count>=65535?$m:Ym)(h,1);m.version=S;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function fA(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,p){p!==0&&(t.drawElementsInstanced(i,h,r,f*o,p),n.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let S=0;for(let m=0;m<p;m++)S+=h[m];n.update(S,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function hA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function dA(t,e,n){const i=new WeakMap,s=new wt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let O=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",O)};var p=O;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),S===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const I=new Float32Array(R*T*4*f),v=new Xm(I,R,T,f);v.type=ti,v.needsUpdate=!0;const C=x*4;for(let N=0;N<f;N++){const z=d[N],ie=M[N],oe=E[N],X=R*T*4*N;for(let ee=0;ee<z.count;ee++){const G=ee*C;g===!0&&(s.fromBufferAttribute(z,ee),I[X+G+0]=s.x,I[X+G+1]=s.y,I[X+G+2]=s.z,I[X+G+3]=0),S===!0&&(s.fromBufferAttribute(ie,ee),I[X+G+4]=s.x,I[X+G+5]=s.y,I[X+G+6]=s.z,I[X+G+7]=0),m===!0&&(s.fromBufferAttribute(oe,ee),I[X+G+8]=s.x,I[X+G+9]=s.y,I[X+G+10]=s.z,I[X+G+11]=oe.itemSize===4?s.w:1)}}h={count:f,texture:v,size:new Je(R,T)},i.set(a,h),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const S=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function pA(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const mA={[Cm]:"LINEAR_TONE_MAPPING",[Pm]:"REINHARD_TONE_MAPPING",[Dm]:"CINEON_TONE_MAPPING",[Lm]:"ACES_FILMIC_TONE_MAPPING",[Nm]:"AGX_TONE_MAPPING",[Um]:"NEUTRAL_TONE_MAPPING",[Im]:"CUSTOM_TONE_MAPPING"};function gA(t,e,n,i,s,r){const o=new ai(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new fr(e,n):void 0}),a=new ai(e,n,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new fn;l.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new zt([0,2,0,0,2,0],2));const c=new iE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new jt(l,c),f=new Ju(-1,1,1,-1,0,1);let h=null,p=null,g=!1,S,m=null,d=[],M=!1;this.setSize=function(E,x){o.setSize(E,x),a.setSize(E,x);for(let R=0;R<d.length;R++){const T=d[R];T.setSize&&T.setSize(E,x)}},this.setEffects=function(E){d=E,M=d.length>0&&d[0].isRenderPass===!0;const x=o.width,R=o.height;for(let T=0;T<d.length;T++){const I=d[T];I.setSize&&I.setSize(x,R)}},this.begin=function(E,x){if(g||E.toneMapping===oi&&d.length===0)return!1;if(m=x,x!==null){const R=x.width,T=x.height;(o.width!==R||o.height!==T)&&this.setSize(R,T)}return M===!1&&E.setRenderTarget(o),S=E.toneMapping,E.toneMapping=oi,!0},this.hasRenderPass=function(){return M},this.end=function(E,x){E.toneMapping=S,g=!0;let R=o,T=a;for(let I=0;I<d.length;I++){const v=d[I];if(v.enabled!==!1&&(v.render(E,T,R,x),v.needsSwap!==!1)){const C=R;R=T,T=C}}if(h!==E.outputColorSpace||p!==E.toneMapping){h=E.outputColorSpace,p=E.toneMapping,c.defines={},ct.getTransfer(h)===mt&&(c.defines.SRGB_TRANSFER="");const I=mA[p];I&&(c.defines[I]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=R.texture,E.setRenderTarget(m),E.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const sg=new un,au=new fr(1,1),rg=new Xm,og=new IM,ag=new Zm,pd=[],md=[],gd=new Float32Array(16),_d=new Float32Array(9),vd=new Float32Array(4);function Sr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ka(t,e){let n=md[e];n===void 0&&(n=new Int32Array(e),md[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _A(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function SA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function yA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;vd.set(i),t.uniformMatrix2fv(this.addr,!1,vd),Vt(n,i)}}function MA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;_d.set(i),t.uniformMatrix3fv(this.addr,!1,_d),Vt(n,i)}}function EA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;gd.set(i),t.uniformMatrix4fv(this.addr,!1,gd),Vt(n,i)}}function bA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function wA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function RA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function CA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function PA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function LA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(au.compareFunction=n.isReversedDepthBuffer()?Gu:ku,r=au):r=sg,n.setTexture2D(e||r,s)}function IA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||og,s)}function NA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||ag,s)}function UA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||rg,s)}function OA(t){switch(t){case 5126:return _A;case 35664:return vA;case 35665:return xA;case 35666:return SA;case 35674:return yA;case 35675:return MA;case 35676:return EA;case 5124:case 35670:return bA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return wA;case 5125:return RA;case 36294:return CA;case 36295:return PA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return NA;case 36289:case 36303:case 36311:case 36292:return UA}}function FA(t,e){t.uniform1fv(this.addr,e)}function BA(t,e){const n=Sr(e,this.size,2);t.uniform2fv(this.addr,n)}function zA(t,e){const n=Sr(e,this.size,3);t.uniform3fv(this.addr,n)}function HA(t,e){const n=Sr(e,this.size,4);t.uniform4fv(this.addr,n)}function VA(t,e){const n=Sr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kA(t,e){const n=Sr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GA(t,e){const n=Sr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WA(t,e){t.uniform1iv(this.addr,e)}function XA(t,e){t.uniform2iv(this.addr,e)}function qA(t,e){t.uniform3iv(this.addr,e)}function YA(t,e){t.uniform4iv(this.addr,e)}function $A(t,e){t.uniform1uiv(this.addr,e)}function KA(t,e){t.uniform2uiv(this.addr,e)}function ZA(t,e){t.uniform3uiv(this.addr,e)}function JA(t,e){t.uniform4uiv(this.addr,e)}function jA(t,e,n){const i=this.cache,s=e.length,r=Ka(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=au:o=sg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function QA(t,e,n){const i=this.cache,s=e.length,r=Ka(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||og,r[o])}function ew(t,e,n){const i=this.cache,s=e.length,r=Ka(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||ag,r[o])}function tw(t,e,n){const i=this.cache,s=e.length,r=Ka(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||rg,r[o])}function nw(t){switch(t){case 5126:return FA;case 35664:return BA;case 35665:return zA;case 35666:return HA;case 35674:return VA;case 35675:return kA;case 35676:return GA;case 5124:case 35670:return WA;case 35667:case 35671:return XA;case 35668:case 35672:return qA;case 35669:case 35673:return YA;case 5125:return $A;case 36294:return KA;case 36295:return ZA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}class iw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=OA(n.type)}}class sw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nw(n.type)}}class rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function xd(t,e){t.seq.push(e),t.map[e.id]=e}function ow(t,e,n){const i=t.name,s=i.length;for(Kl.lastIndex=0;;){const r=Kl.exec(i),o=Kl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xd(n,c===void 0?new iw(a,t,e):new sw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new rw(a),xd(n,f)),n=f}}}class aa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);ow(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Sd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const aw=37297;let lw=0;function cw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const yd=new et;function uw(t){ct._getMatrix(yd,ct.workingColorSpace,t);const e=`mat3( ${yd.elements.map(n=>n.toFixed(4))} )`;switch(ct.getTransfer(t)){case Ea:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Md(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+cw(t.getShaderSource(e),a)}else return r}function fw(t,e){const n=uw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const hw={[Cm]:"Linear",[Pm]:"Reinhard",[Dm]:"Cineon",[Lm]:"ACESFilmic",[Nm]:"AgX",[Um]:"Neutral",[Im]:"Custom"};function dw(t,e){const n=hw[e];return n===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const qo=new Y;function pw(){ct.getLuminanceCoefficients(qo);const t=qo.x.toFixed(4),e=qo.y.toFixed(4),n=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function gw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _w(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Fr(t){return t!==""}function Ed(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(t){return t.replace(vw,Sw)}const xw=new Map;function Sw(t,e){let n=st[e];if(n===void 0){const i=xw.get(e);if(i!==void 0)n=st[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lu(n)}const yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(t){return t.replace(yw,Mw)}function Mw(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ad(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Ew={[ta]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function bw(t){return Ew[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tw={[Es]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE_UV"};function Aw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Tw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const ww={[ur]:"ENVMAP_MODE_REFRACTION"};function Rw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ww[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cw={[Rm]:"ENVMAP_BLENDING_MULTIPLY",[fM]:"ENVMAP_BLENDING_MIX",[hM]:"ENVMAP_BLENDING_ADD"};function Pw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[t.combine]||"ENVMAP_BLENDING_NONE"}function Dw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Lw(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=bw(n),c=Aw(n),u=Rw(n),f=Pw(n),h=Dw(n),p=mw(n),g=gw(r),S=s.createProgram();let m,d,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Fr).join(`
`),d.length>0&&(d+=`
`)):(m=[Ad(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),d=[Ad(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?st.tonemapping_pars_fragment:"",n.toneMapping!==oi?dw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,fw("linearToOutputTexel",n.outputColorSpace),pw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fr).join(`
`)),o=lu(o),o=Ed(o,n),o=bd(o,n),a=lu(a),a=Ed(a,n),a=bd(a,n),o=Td(o),a=Td(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=M+m+o,x=M+d+a,R=Sd(s,s.VERTEX_SHADER,E),T=Sd(s,s.FRAGMENT_SHADER,x);s.attachShader(S,R),s.attachShader(S,T),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function I(N){if(t.debug.checkShaderErrors){const z=s.getProgramInfoLog(S)||"",ie=s.getShaderInfoLog(R)||"",oe=s.getShaderInfoLog(T)||"",X=z.trim(),ee=ie.trim(),G=oe.trim();let ne=!0,he=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,S,R,T);else{const xe=Md(s,R,"vertex"),ve=Md(s,T,"fragment");ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+X+`
`+xe+`
`+ve)}else X!==""?Ke("WebGLProgram: Program Info Log:",X):(ee===""||G==="")&&(he=!1);he&&(N.diagnostics={runnable:ne,programLog:X,vertexShader:{log:ee,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(R),s.deleteShader(T),v=new aa(s,S),C=_w(s,S)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(S,aw)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=T,this}let Iw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Uw(e),n.set(e,i)),i}}class Uw{constructor(e){this.id=Iw++,this.code=e,this.usedTimes=0}}function Ow(t){return t===bs||t===Sa||t===ya}function Fw(t,e,n,i,s,r){const o=new Xu,a=new Nw,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,C,O,N,z,ie){const oe=N.fog,X=z.geometry,ee=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ne=e.get(v.envMap||ee,G),he=ne&&ne.mapping===Xa?ne.image.height:null,xe=p[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Ke("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ve=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ye=ve!==void 0?ve.length:0;let Ye=0;X.morphAttributes.position!==void 0&&(Ye=1),X.morphAttributes.normal!==void 0&&(Ye=2),X.morphAttributes.color!==void 0&&(Ye=3);let it,je,q,F;if(xe){const Ve=jn[xe];it=Ve.vertexShader,je=Ve.fragmentShader}else{it=v.vertexShader,je=v.fragmentShader;const Ve=a.getVertexShaderStage(v),Rt=a.getFragmentShaderStage(v);a.update(v,Ve,Rt),q=Ve.id,F=Rt.id}const K=t.getRenderTarget(),te=t.state.buffers.depth.getReversed(),_e=z.isInstancedMesh===!0,Me=z.isBatchedMesh===!0,w=!!v.map,D=!!v.matcap,B=!!ne,Z=!!v.aoMap,k=!!v.lightMap,J=!!v.bumpMap&&v.wireframe===!1,pe=!!v.normalMap,de=!!v.displacementMap,me=!!v.emissiveMap,ae=!!v.metalnessMap,Ee=!!v.roughnessMap,L=v.anisotropy>0,Ue=v.clearcoat>0,Ae=v.dispersion>0,b=v.iridescence>0,_=v.sheen>0,A=v.transmission>0,P=L&&!!v.anisotropyMap,V=Ue&&!!v.clearcoatMap,ce=Ue&&!!v.clearcoatNormalMap,fe=Ue&&!!v.clearcoatRoughnessMap,re=b&&!!v.iridescenceMap,le=b&&!!v.iridescenceThicknessMap,Se=_&&!!v.sheenColorMap,Ne=_&&!!v.sheenRoughnessMap,Te=!!v.specularMap,be=!!v.specularColorMap,We=!!v.specularIntensityMap,$e=A&&!!v.transmissionMap,Qe=A&&!!v.thicknessMap,U=!!v.gradientMap,we=!!v.alphaMap,ue=v.alphaTest>0,Re=!!v.alphaHash,Ie=!!v.extensions;let ge=oi;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ge=t.toneMapping);const Ge={shaderID:xe,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:je,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:F,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Me,batchingColor:Me&&z._colorsTexture!==null,instancing:_e,instancingColor:_e&&z.instanceColor!==null,instancingMorph:_e&&z.morphTexture!==null,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:w,matcap:D,envMap:B,envMapMode:B&&ne.mapping,envMapCubeUVHeight:he,aoMap:Z,lightMap:k,bumpMap:J,normalMap:pe,displacementMap:de,emissiveMap:me,normalMapObjectSpace:pe&&v.normalMapType===mM,normalMapTangentSpace:pe&&v.normalMapType===su,packedNormalMap:pe&&v.normalMapType===su&&Ow(v.normalMap.format),metalnessMap:ae,roughnessMap:Ee,anisotropy:L,anisotropyMap:P,clearcoat:Ue,clearcoatMap:V,clearcoatNormalMap:ce,clearcoatRoughnessMap:fe,dispersion:Ae,iridescence:b,iridescenceMap:re,iridescenceThicknessMap:le,sheen:_,sheenColorMap:Se,sheenRoughnessMap:Ne,specularMap:Te,specularColorMap:be,specularIntensityMap:We,transmission:A,transmissionMap:$e,thicknessMap:Qe,gradientMap:U,opaque:v.transparent===!1&&v.blending===Qs&&v.alphaToCoverage===!1,alphaMap:we,alphaTest:ue,alphaHash:Re,combine:v.combine,mapUv:w&&g(v.map.channel),aoMapUv:Z&&g(v.aoMap.channel),lightMapUv:k&&g(v.lightMap.channel),bumpMapUv:J&&g(v.bumpMap.channel),normalMapUv:pe&&g(v.normalMap.channel),displacementMapUv:de&&g(v.displacementMap.channel),emissiveMapUv:me&&g(v.emissiveMap.channel),metalnessMapUv:ae&&g(v.metalnessMap.channel),roughnessMapUv:Ee&&g(v.roughnessMap.channel),anisotropyMapUv:P&&g(v.anisotropyMap.channel),clearcoatMapUv:V&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(v.sheenRoughnessMap.channel),specularMapUv:Te&&g(v.specularMap.channel),specularColorMapUv:be&&g(v.specularColorMap.channel),specularIntensityMapUv:We&&g(v.specularIntensityMap.channel),transmissionMapUv:$e&&g(v.transmissionMap.channel),thicknessMapUv:Qe&&g(v.thicknessMap.channel),alphaMapUv:we&&g(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(pe||L),vertexNormals:!!X.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(w||we),fog:!!oe,useFog:v.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||X.attributes.normal===void 0&&pe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:te,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:ge,decodeVideoTexture:w&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:me&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ei,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function m(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)C.push(O),C.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(d(C,v),M(C,v),C.push(t.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function d(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function M(v,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){const C=p[v.type];let O;if(C){const N=jn[C];O=eE.clone(N.uniforms)}else O=v.uniforms;return O}function x(v,C){let O=u.get(C);return O!==void 0?++O.usedTimes:(O=new Lw(t,C,v,s),c.push(O),u.set(C,O)),O}function R(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function I(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:I}}function Bw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function zw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function wd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rd(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,S,m,d){let M=t[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:d},t[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=g,M.materialVariant=o(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=d),e++,M}function l(h,p,g,S,m,d){const M=a(h,p,g,S,m,d);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):n.push(M)}function c(h,p,g,S,m,d){const M=a(h,p,g,S,m,d);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function u(h,p,g){n.length>1&&n.sort(h||zw),i.length>1&&i.sort(p||wd),s.length>1&&s.sort(p||wd),g&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let h=e,p=t.length;h<p;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Hw(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Rd,t.set(i,[o])):s>=r.length?(o=new Rd,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Vw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new ot};break;case"SpotLight":n={position:new Y,direction:new Y,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function kw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Gw=0;function Ww(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Xw(t){const e=new Vw,n=kw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new At,o=new At;function a(c){let u=0,f=0,h=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,S=0,m=0,d=0,M=0,E=0,x=0,R=0,T=0,I=0;c.sort(Ww);for(let C=0,O=c.length;C<O;C++){const N=c[C],z=N.color,ie=N.intensity,oe=N.distance;let X=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===bs?X=N.shadow.map.texture:X=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=z.r*ie,f+=z.g*ie,h+=z.b*ie;else if(N.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(N.sh.coefficients[ee],ie);I++}else if(N.isDirectionalLight){const ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,ne=n.get(N);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,i.directionalShadow[p]=ne,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=N.shadow.matrix,M++}i.directional[p]=ee,p++}else if(N.isSpotLight){const ee=e.get(N);ee.position.setFromMatrixPosition(N.matrixWorld),ee.color.copy(z).multiplyScalar(ie),ee.distance=oe,ee.coneCos=Math.cos(N.angle),ee.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ee.decay=N.decay,i.spot[S]=ee;const G=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,G.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[S]=G.matrix,N.castShadow){const ne=n.get(N);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,i.spotShadow[S]=ne,i.spotShadowMap[S]=X,x++}S++}else if(N.isRectAreaLight){const ee=e.get(N);ee.color.copy(z).multiplyScalar(ie),ee.halfWidth.set(N.width*.5,0,0),ee.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=ee,m++}else if(N.isPointLight){const ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),ee.distance=N.distance,ee.decay=N.decay,N.castShadow){const G=N.shadow,ne=n.get(N);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,i.pointShadow[g]=ne,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=N.shadow.matrix,E++}i.point[g]=ee,g++}else if(N.isHemisphereLight){const ee=e.get(N);ee.skyColor.copy(N.color).multiplyScalar(ie),ee.groundColor.copy(N.groundColor).multiplyScalar(ie),i.hemi[d]=ee,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==p||v.pointLength!==g||v.spotLength!==S||v.rectAreaLength!==m||v.hemiLength!==d||v.numDirectionalShadows!==M||v.numPointShadows!==E||v.numSpotShadows!==x||v.numSpotMaps!==R||v.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,v.directionalLength=p,v.pointLength=g,v.spotLength=S,v.rectAreaLength=m,v.hemiLength=d,v.numDirectionalShadows=M,v.numPointShadows=E,v.numSpotShadows=x,v.numSpotMaps=R,v.numLightProbes=I,i.version=Gw++)}function l(c,u){let f=0,h=0,p=0,g=0,S=0;const m=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const E=c[d];if(E.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const x=i.hemi[S];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function Cd(t){const e=new Xw(t),n=[],i=[],s=[];function r(h){f.camera=h,n.length=0,i.length=0,s.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function qw(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Cd(t),e.set(s,[a])):r>=o.length?(a=new Cd(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
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
}`,Kw=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Zw=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Pd=new At,Lr=new Y,Zl=new Y;function Jw(t,e,n){let i=new Yu;const s=new Je,r=new Je,o=new wt,a=new sE,l=new rE,c={},u=n.maxTextureSize,f={[Ji]:gn,[gn]:Ji,[ei]:ei},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Yw,fragmentShader:$w}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new jt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let d=this.type;this.render=function(T,I,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===qy&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ta);const C=t.getRenderTarget(),O=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ti),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const ie=d!==this.type;ie&&I.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(X=>X.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,X=T.length;oe<X;oe++){const ee=T[oe],G=ee.shadow;if(G===void 0){Ke("WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ne=G.getFrameExtents();s.multiply(ne),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y));const he=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=he,G.map===null||ie===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Or){if(ee.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ai(s.x,s.y,{format:bs,type:Pi,minFilter:en,magFilter:en,generateMipmaps:!1}),G.map.texture.name=ee.name+".shadowMap",G.map.depthTexture=new fr(s.x,s.y,ti),G.map.depthTexture.name=ee.name+".shadowMapDepth",G.map.depthTexture.format=Di,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt}else ee.isPointLight?(G.map=new ig(s.x),G.map.depthTexture=new jM(s.x,ui)):(G.map=new ai(s.x,s.y),G.map.depthTexture=new fr(s.x,s.y,ui)),G.map.depthTexture.name=ee.name+".shadowMap",G.map.depthTexture.format=Di,this.type===ta?(G.map.depthTexture.compareFunction=he?Gu:ku,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt);G.camera.updateProjectionMatrix()}const xe=G.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<xe;ve++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ve),t.clear();else{ve===0&&(t.setRenderTarget(G.map),t.clear());const ye=G.getViewport(ve);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),z.viewport(o)}if(ee.isPointLight){const ye=G.camera,Ye=G.matrix,it=ee.distance||ye.far;it!==ye.far&&(ye.far=it,ye.updateProjectionMatrix()),Lr.setFromMatrixPosition(ee.matrixWorld),ye.position.copy(Lr),Zl.copy(ye.position),Zl.add(Kw[ve]),ye.up.copy(Zw[ve]),ye.lookAt(Zl),ye.updateMatrixWorld(),Ye.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Pd.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Pd,ye.coordinateSystem,ye.reversedDepth)}else G.updateMatrices(ee);i=G.getFrustum(),x(I,v,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===Or&&M(G,v),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(C,O,N)};function M(T,I){const v=e.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y,{format:bs,type:Pi})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(I,null,v,h,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(I,null,v,p,S,null)}function E(T,I,v,C){let O=null;const N=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)O=N;else if(O=v.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const z=O.uuid,ie=I.uuid;let oe=c[z];oe===void 0&&(oe={},c[z]=oe);let X=oe[ie];X===void 0&&(X=O.clone(),oe[ie]=X,I.addEventListener("dispose",R)),O=X}if(O.visible=I.visible,O.wireframe=I.wireframe,C===Or?O.side=I.shadowSide!==null?I.shadowSide:I.side:O.side=I.shadowSide!==null?I.shadowSide:f[I.side],O.alphaMap=I.alphaMap,O.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,O.map=I.map,O.clipShadows=I.clipShadows,O.clippingPlanes=I.clippingPlanes,O.clipIntersection=I.clipIntersection,O.displacementMap=I.displacementMap,O.displacementScale=I.displacementScale,O.displacementBias=I.displacementBias,O.wireframeLinewidth=I.wireframeLinewidth,O.linewidth=I.linewidth,v.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const z=t.properties.get(O);z.light=v}return O}function x(T,I,v,C,O){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===Or)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const ie=e.update(T),oe=T.material;if(Array.isArray(oe)){const X=ie.groups;for(let ee=0,G=X.length;ee<G;ee++){const ne=X[ee],he=oe[ne.materialIndex];if(he&&he.visible){const xe=E(T,he,C,O);T.onBeforeShadow(t,T,I,v,ie,xe,ne),t.renderBufferDirect(v,null,ie,xe,T,ne),T.onAfterShadow(t,T,I,v,ie,xe,ne)}}}else if(oe.visible){const X=E(T,oe,C,O);T.onBeforeShadow(t,T,I,v,ie,X,null),t.renderBufferDirect(v,null,ie,X,T,null),T.onAfterShadow(t,T,I,v,ie,X,null)}}const z=T.children;for(let ie=0,oe=z.length;ie<oe;ie++)x(z[ie],I,v,C,O)}function R(T){T.target.removeEventListener("dispose",R);for(const v in c){const C=c[v],O=T.target.uuid;O in C&&(C[O].dispose(),delete C[O])}}}function jw(t,e){function n(){let U=!1;const we=new wt;let ue=null;const Re=new wt(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!U&&(t.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){U=Ie},setClear:function(Ie,ge,Ge,Ve,Rt){Rt===!0&&(Ie*=Ve,ge*=Ve,Ge*=Ve),we.set(Ie,ge,Ge,Ve),Re.equals(we)===!1&&(t.clearColor(Ie,ge,Ge,Ve),Re.copy(we))},reset:function(){U=!1,ue=null,Re.set(-1,0,0,0)}}}function i(){let U=!1,we=!1,ue=null,Re=null,Ie=null;return{setReversed:function(ge){if(we!==ge){const Ge=e.get("EXT_clip_control");ge?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),we=ge;const Ve=Ie;Ie=null,this.setClear(Ve)}},getReversed:function(){return we},setTest:function(ge){ge?K(t.DEPTH_TEST):te(t.DEPTH_TEST)},setMask:function(ge){ue!==ge&&!U&&(t.depthMask(ge),ue=ge)},setFunc:function(ge){if(we&&(ge=TM[ge]),Re!==ge){switch(ge){case xc:t.depthFunc(t.NEVER);break;case Sc:t.depthFunc(t.ALWAYS);break;case yc:t.depthFunc(t.LESS);break;case cr:t.depthFunc(t.LEQUAL);break;case Mc:t.depthFunc(t.EQUAL);break;case Ec:t.depthFunc(t.GEQUAL);break;case bc:t.depthFunc(t.GREATER);break;case Tc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=ge}},setLocked:function(ge){U=ge},setClear:function(ge){Ie!==ge&&(Ie=ge,we&&(ge=1-ge),t.clearDepth(ge))},reset:function(){U=!1,ue=null,Re=null,Ie=null,we=!1}}}function s(){let U=!1,we=null,ue=null,Re=null,Ie=null,ge=null,Ge=null,Ve=null,Rt=null;return{setTest:function(Mt){U||(Mt?K(t.STENCIL_TEST):te(t.STENCIL_TEST))},setMask:function(Mt){we!==Mt&&!U&&(t.stencilMask(Mt),we=Mt)},setFunc:function(Mt,kn,Gn){(ue!==Mt||Re!==kn||Ie!==Gn)&&(t.stencilFunc(Mt,kn,Gn),ue=Mt,Re=kn,Ie=Gn)},setOp:function(Mt,kn,Gn){(ge!==Mt||Ge!==kn||Ve!==Gn)&&(t.stencilOp(Mt,kn,Gn),ge=Mt,Ge=kn,Ve=Gn)},setLocked:function(Mt){U=Mt},setClear:function(Mt){Rt!==Mt&&(t.clearStencil(Mt),Rt=Mt)},reset:function(){U=!1,we=null,ue=null,Re=null,Ie=null,ge=null,Ge=null,Ve=null,Rt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,g=[],S=null,m=!1,d=null,M=null,E=null,x=null,R=null,T=null,I=null,v=new ot(0,0,0),C=0,O=!1,N=null,z=null,ie=null,oe=null,X=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ne=0;const he=t.getParameter(t.VERSION);he.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(he)[1]),G=ne>=1):he.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),G=ne>=2);let xe=null,ve={};const ye=t.getParameter(t.SCISSOR_BOX),Ye=t.getParameter(t.VIEWPORT),it=new wt().fromArray(ye),je=new wt().fromArray(Ye);function q(U,we,ue,Re){const Ie=new Uint8Array(4),ge=t.createTexture();t.bindTexture(U,ge),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<ue;Ge++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(we+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return ge}const F={};F[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),F[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),F[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(t.DEPTH_TEST),o.setFunc(cr),J(!1),pe(Th),K(t.CULL_FACE),Z(Ti);function K(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function te(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function _e(U,we){return h[U]!==we?(t.bindFramebuffer(U,we),h[U]=we,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=we),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=we),!0):!1}function Me(U,we){let ue=g,Re=!1;if(U){ue=p.get(we),ue===void 0&&(ue=[],p.set(we,ue));const Ie=U.textures;if(ue.length!==Ie.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Ge=Ie.length;ge<Ge;ge++)ue[ge]=t.COLOR_ATTACHMENT0+ge;ue.length=Ie.length,Re=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,Re=!0);Re&&t.drawBuffers(ue)}function w(U){return S!==U?(t.useProgram(U),S=U,!0):!1}const D={[cs]:t.FUNC_ADD,[$y]:t.FUNC_SUBTRACT,[Ky]:t.FUNC_REVERSE_SUBTRACT};D[Zy]=t.MIN,D[Jy]=t.MAX;const B={[jy]:t.ZERO,[Qy]:t.ONE,[eM]:t.SRC_COLOR,[_c]:t.SRC_ALPHA,[oM]:t.SRC_ALPHA_SATURATE,[sM]:t.DST_COLOR,[nM]:t.DST_ALPHA,[tM]:t.ONE_MINUS_SRC_COLOR,[vc]:t.ONE_MINUS_SRC_ALPHA,[rM]:t.ONE_MINUS_DST_COLOR,[iM]:t.ONE_MINUS_DST_ALPHA,[aM]:t.CONSTANT_COLOR,[lM]:t.ONE_MINUS_CONSTANT_COLOR,[cM]:t.CONSTANT_ALPHA,[uM]:t.ONE_MINUS_CONSTANT_ALPHA};function Z(U,we,ue,Re,Ie,ge,Ge,Ve,Rt,Mt){if(U===Ti){m===!0&&(te(t.BLEND),m=!1);return}if(m===!1&&(K(t.BLEND),m=!0),U!==Yy){if(U!==d||Mt!==O){if((M!==cs||R!==cs)&&(t.blendEquation(t.FUNC_ADD),M=cs,R=cs),Mt)switch(U){case Qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ah:t.blendFunc(t.ONE,t.ONE);break;case wh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",U);break}else switch(U){case Qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ah:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case wh:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",U);break}E=null,x=null,T=null,I=null,v.set(0,0,0),C=0,d=U,O=Mt}return}Ie=Ie||we,ge=ge||ue,Ge=Ge||Re,(we!==M||Ie!==R)&&(t.blendEquationSeparate(D[we],D[Ie]),M=we,R=Ie),(ue!==E||Re!==x||ge!==T||Ge!==I)&&(t.blendFuncSeparate(B[ue],B[Re],B[ge],B[Ge]),E=ue,x=Re,T=ge,I=Ge),(Ve.equals(v)===!1||Rt!==C)&&(t.blendColor(Ve.r,Ve.g,Ve.b,Rt),v.copy(Ve),C=Rt),d=U,O=!1}function k(U,we){U.side===ei?te(t.CULL_FACE):K(t.CULL_FACE);let ue=U.side===gn;we&&(ue=!ue),J(ue),U.blending===Qs&&U.transparent===!1?Z(Ti):Z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Re=U.stencilWrite;a.setTest(Re),Re&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):te(t.SAMPLE_ALPHA_TO_COVERAGE)}function J(U){N!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),N=U)}function pe(U){U!==Wy?(K(t.CULL_FACE),U!==z&&(U===Th?t.cullFace(t.BACK):U===Xy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):te(t.CULL_FACE),z=U}function de(U){U!==ie&&(G&&t.lineWidth(U),ie=U)}function me(U,we,ue){U?(K(t.POLYGON_OFFSET_FILL),(oe!==we||X!==ue)&&(oe=we,X=ue,o.getReversed()&&(we=-we),t.polygonOffset(we,ue))):te(t.POLYGON_OFFSET_FILL)}function ae(U){U?K(t.SCISSOR_TEST):te(t.SCISSOR_TEST)}function Ee(U){U===void 0&&(U=t.TEXTURE0+ee-1),xe!==U&&(t.activeTexture(U),xe=U)}function L(U,we,ue){ue===void 0&&(xe===null?ue=t.TEXTURE0+ee-1:ue=xe);let Re=ve[ue];Re===void 0&&(Re={type:void 0,texture:void 0},ve[ue]=Re),(Re.type!==U||Re.texture!==we)&&(xe!==ue&&(t.activeTexture(ue),xe=ue),t.bindTexture(U,we||F[U]),Re.type=U,Re.texture=we)}function Ue(){const U=ve[xe];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ae(){try{t.compressedTexImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function _(){try{t.texSubImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function A(){try{t.texSubImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function P(){try{t.compressedTexSubImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function V(){try{t.compressedTexSubImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function ce(){try{t.texStorage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function fe(){try{t.texStorage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function re(){try{t.texImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function le(){try{t.texImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function Se(U){return f[U]!==void 0?f[U]:t.getParameter(U)}function Ne(U,we){f[U]!==we&&(t.pixelStorei(U,we),f[U]=we)}function Te(U){it.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),it.copy(U))}function be(U){je.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),je.copy(U))}function We(U,we){let ue=c.get(we);ue===void 0&&(ue=new WeakMap,c.set(we,ue));let Re=ue.get(U);Re===void 0&&(Re=t.getUniformBlockIndex(we,U.name),ue.set(U,Re))}function $e(U,we){const Re=c.get(we).get(U);l.get(we)!==Re&&(t.uniformBlockBinding(we,Re,U.__bindingPointIndex),l.set(we,Re))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},xe=null,ve={},h={},p=new WeakMap,g=[],S=null,m=!1,d=null,M=null,E=null,x=null,R=null,T=null,I=null,v=new ot(0,0,0),C=0,O=!1,N=null,z=null,ie=null,oe=null,X=null,it.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:te,bindFramebuffer:_e,drawBuffers:Me,useProgram:w,setBlending:Z,setMaterial:k,setFlipSided:J,setCullFace:pe,setLineWidth:de,setPolygonOffset:me,setScissorTest:ae,activeTexture:Ee,bindTexture:L,unbindTexture:Ue,compressedTexImage2D:Ae,compressedTexImage3D:b,texImage2D:re,texImage3D:le,pixelStorei:Ne,getParameter:Se,updateUBOMapping:We,uniformBlockBinding:$e,texStorage2D:ce,texStorage3D:fe,texSubImage2D:_,texSubImage3D:A,compressedTexSubImage2D:P,compressedTexSubImage3D:V,scissor:Te,viewport:be,reset:Qe}}function Qw(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,_){return g?new OffscreenCanvas(b,_):ba("canvas")}function m(b,_,A){let P=1;const V=Ae(b);if((V.width>A||V.height>A)&&(P=A/Math.max(V.width,V.height)),P<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(P*V.width),fe=Math.floor(P*V.height);h===void 0&&(h=S(ce,fe));const re=_?S(ce,fe):h;return re.width=ce,re.height=fe,re.getContext("2d").drawImage(b,0,0,ce,fe),Ke("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+ce+"x"+fe+")."),re}else return"data"in b&&Ke("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),b;return b}function d(b){return b.generateMipmaps}function M(b){t.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(b,_,A,P,V,ce=!1){if(b!==null){if(t[b]!==void 0)return t[b];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe;P&&(fe=e.get("EXT_texture_norm16"),fe||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=_;if(_===t.RED&&(A===t.FLOAT&&(re=t.R32F),A===t.HALF_FLOAT&&(re=t.R16F),A===t.UNSIGNED_BYTE&&(re=t.R8),A===t.UNSIGNED_SHORT&&fe&&(re=fe.R16_EXT),A===t.SHORT&&fe&&(re=fe.R16_SNORM_EXT)),_===t.RED_INTEGER&&(A===t.UNSIGNED_BYTE&&(re=t.R8UI),A===t.UNSIGNED_SHORT&&(re=t.R16UI),A===t.UNSIGNED_INT&&(re=t.R32UI),A===t.BYTE&&(re=t.R8I),A===t.SHORT&&(re=t.R16I),A===t.INT&&(re=t.R32I)),_===t.RG&&(A===t.FLOAT&&(re=t.RG32F),A===t.HALF_FLOAT&&(re=t.RG16F),A===t.UNSIGNED_BYTE&&(re=t.RG8),A===t.UNSIGNED_SHORT&&fe&&(re=fe.RG16_EXT),A===t.SHORT&&fe&&(re=fe.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(A===t.UNSIGNED_BYTE&&(re=t.RG8UI),A===t.UNSIGNED_SHORT&&(re=t.RG16UI),A===t.UNSIGNED_INT&&(re=t.RG32UI),A===t.BYTE&&(re=t.RG8I),A===t.SHORT&&(re=t.RG16I),A===t.INT&&(re=t.RG32I)),_===t.RGB_INTEGER&&(A===t.UNSIGNED_BYTE&&(re=t.RGB8UI),A===t.UNSIGNED_SHORT&&(re=t.RGB16UI),A===t.UNSIGNED_INT&&(re=t.RGB32UI),A===t.BYTE&&(re=t.RGB8I),A===t.SHORT&&(re=t.RGB16I),A===t.INT&&(re=t.RGB32I)),_===t.RGBA_INTEGER&&(A===t.UNSIGNED_BYTE&&(re=t.RGBA8UI),A===t.UNSIGNED_SHORT&&(re=t.RGBA16UI),A===t.UNSIGNED_INT&&(re=t.RGBA32UI),A===t.BYTE&&(re=t.RGBA8I),A===t.SHORT&&(re=t.RGBA16I),A===t.INT&&(re=t.RGBA32I)),_===t.RGB&&(A===t.UNSIGNED_SHORT&&fe&&(re=fe.RGB16_EXT),A===t.SHORT&&fe&&(re=fe.RGB16_SNORM_EXT),A===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),A===t.UNSIGNED_INT_10F_11F_11F_REV&&(re=t.R11F_G11F_B10F)),_===t.RGBA){const le=ce?Ea:ct.getTransfer(V);A===t.FLOAT&&(re=t.RGBA32F),A===t.HALF_FLOAT&&(re=t.RGBA16F),A===t.UNSIGNED_BYTE&&(re=le===mt?t.SRGB8_ALPHA8:t.RGBA8),A===t.UNSIGNED_SHORT&&fe&&(re=fe.RGBA16_EXT),A===t.SHORT&&fe&&(re=fe.RGBA16_SNORM_EXT),A===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),A===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(b,_){let A;return b?_===null||_===ui||_===to?A=t.DEPTH24_STENCIL8:_===ti?A=t.DEPTH32F_STENCIL8:_===eo&&(A=t.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===to?A=t.DEPTH_COMPONENT24:_===ti?A=t.DEPTH_COMPONENT32F:_===eo&&(A=t.DEPTH_COMPONENT16),A}function T(b,_){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==qt&&b.minFilter!==en?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function I(b){const _=b.target;_.removeEventListener("dispose",I),C(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function v(b){const _=b.target;_.removeEventListener("dispose",v),N(_)}function C(b){const _=i.get(b);if(_.__webglInit===void 0)return;const A=b.source,P=p.get(A);if(P){const V=P[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&O(b),Object.keys(P).length===0&&p.delete(A)}i.remove(b)}function O(b){const _=i.get(b);t.deleteTexture(_.__webglTexture);const A=b.source,P=p.get(A);delete P[_.__cacheKey],o.memory.textures--}function N(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(_.__webglFramebuffer[P]))for(let V=0;V<_.__webglFramebuffer[P].length;V++)t.deleteFramebuffer(_.__webglFramebuffer[P][V]);else t.deleteFramebuffer(_.__webglFramebuffer[P]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[P])}else{if(Array.isArray(_.__webglFramebuffer))for(let P=0;P<_.__webglFramebuffer.length;P++)t.deleteFramebuffer(_.__webglFramebuffer[P]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let P=0;P<_.__webglColorRenderbuffer.length;P++)_.__webglColorRenderbuffer[P]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[P]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const A=b.textures;for(let P=0,V=A.length;P<V;P++){const ce=i.get(A[P]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(A[P])}i.remove(b)}let z=0;function ie(){z=0}function oe(){return z}function X(b){z=b}function ee(){const b=z;return b>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),z+=1,b}function G(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function ne(b,_){const A=i.get(b);if(b.isVideoTexture&&L(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&A.__version!==b.version){const P=b.image;if(P===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{te(A,b,_);return}}else b.isExternalTexture&&(A.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,A.__webglTexture,t.TEXTURE0+_)}function he(b,_){const A=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&A.__version!==b.version){te(A,b,_);return}else b.isExternalTexture&&(A.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,A.__webglTexture,t.TEXTURE0+_)}function xe(b,_){const A=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&A.__version!==b.version){te(A,b,_);return}n.bindTexture(t.TEXTURE_3D,A.__webglTexture,t.TEXTURE0+_)}function ve(b,_){const A=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&A.__version!==b.version){_e(A,b,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+_)}const ye={[Ac]:t.REPEAT,[Ei]:t.CLAMP_TO_EDGE,[wc]:t.MIRRORED_REPEAT},Ye={[qt]:t.NEAREST,[dM]:t.NEAREST_MIPMAP_NEAREST,[Mo]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[xl]:t.LINEAR_MIPMAP_NEAREST,[ds]:t.LINEAR_MIPMAP_LINEAR},it={[gM]:t.NEVER,[yM]:t.ALWAYS,[_M]:t.LESS,[ku]:t.LEQUAL,[vM]:t.EQUAL,[Gu]:t.GEQUAL,[xM]:t.GREATER,[SM]:t.NOTEQUAL};function je(b,_){if(_.type===ti&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===en||_.magFilter===xl||_.magFilter===Mo||_.magFilter===ds||_.minFilter===en||_.minFilter===xl||_.minFilter===Mo||_.minFilter===ds)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,ye[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ye[_.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ye[_.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Ye[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Ye[_.minFilter]),_.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,it[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qt||_.minFilter!==Mo&&_.minFilter!==ds||_.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const A=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function q(b,_){let A=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",I));const P=_.source;let V=p.get(P);V===void 0&&(V={},p.set(P,V));const ce=G(_);if(ce!==b.__cacheKey){V[ce]===void 0&&(V[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,A=!0),V[ce].usedTimes++;const fe=V[b.__cacheKey];fe!==void 0&&(V[b.__cacheKey].usedTimes--,fe.usedTimes===0&&O(_)),b.__cacheKey=ce,b.__webglTexture=V[ce].texture}return A}function F(b,_,A){return Math.floor(Math.floor(b/A)/_)}function K(b,_,A,P){const ce=b.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,A,P,_.data);else{ce.sort((Ne,Te)=>Ne.start-Te.start);let fe=0;for(let Ne=1;Ne<ce.length;Ne++){const Te=ce[fe],be=ce[Ne],We=Te.start+Te.count,$e=F(be.start,_.width,4),Qe=F(Te.start,_.width,4);be.start<=We+1&&$e===Qe&&F(be.start+be.count-1,_.width,4)===$e?Te.count=Math.max(Te.count,be.start+be.count-Te.start):(++fe,ce[fe]=be)}ce.length=fe+1;const re=n.getParameter(t.UNPACK_ROW_LENGTH),le=n.getParameter(t.UNPACK_SKIP_PIXELS),Se=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ne=0,Te=ce.length;Ne<Te;Ne++){const be=ce[Ne],We=Math.floor(be.start/4),$e=Math.ceil(be.count/4),Qe=We%_.width,U=Math.floor(We/_.width),we=$e,ue=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Qe,U,we,ue,A,P,_.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,re),n.pixelStorei(t.UNPACK_SKIP_PIXELS,le),n.pixelStorei(t.UNPACK_SKIP_ROWS,Se)}}function te(b,_,A){let P=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(P=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(P=t.TEXTURE_3D);const V=q(b,_),ce=_.source;n.bindTexture(P,b.__webglTexture,t.TEXTURE0+A);const fe=i.get(ce);if(ce.version!==fe.__version||V===!0){if(n.activeTexture(t.TEXTURE0+A),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ue=ct.getPrimaries(ct.workingColorSpace),Re=_.colorSpace===Yi?null:ct.getPrimaries(_.colorSpace),Ie=_.colorSpace===Yi||ue===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let le=m(_.image,!1,s.maxTextureSize);le=Ue(_,le);const Se=r.convert(_.format,_.colorSpace),Ne=r.convert(_.type);let Te=x(_.internalFormat,Se,Ne,_.normalized,_.colorSpace,_.isVideoTexture);je(P,_);let be;const We=_.mipmaps,$e=_.isVideoTexture!==!0,Qe=fe.__version===void 0||V===!0,U=ce.dataReady,we=T(_,le);if(_.isDepthTexture)Te=R(_.format===ps,_.type),Qe&&($e?n.texStorage2D(t.TEXTURE_2D,1,Te,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Te,le.width,le.height,0,Se,Ne,null));else if(_.isDataTexture)if(We.length>0){$e&&Qe&&n.texStorage2D(t.TEXTURE_2D,we,Te,We[0].width,We[0].height);for(let ue=0,Re=We.length;ue<Re;ue++)be=We[ue],$e?U&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,be.width,be.height,Se,Ne,be.data):n.texImage2D(t.TEXTURE_2D,ue,Te,be.width,be.height,0,Se,Ne,be.data);_.generateMipmaps=!1}else $e?(Qe&&n.texStorage2D(t.TEXTURE_2D,we,Te,le.width,le.height),U&&K(_,le,Se,Ne)):n.texImage2D(t.TEXTURE_2D,0,Te,le.width,le.height,0,Se,Ne,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Te,We[0].width,We[0].height,le.depth);for(let ue=0,Re=We.length;ue<Re;ue++)if(be=We[ue],_.format!==Un)if(Se!==null)if($e){if(U)if(_.layerUpdates.size>0){const Ie=ad(be.width,be.height,_.format,_.type);for(const ge of _.layerUpdates){const Ge=be.data.subarray(ge*Ie/be.data.BYTES_PER_ELEMENT,(ge+1)*Ie/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,ge,be.width,be.height,1,Se,Ge)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,le.depth,Se,be.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,Te,be.width,be.height,le.depth,0,be.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,le.depth,Se,Ne,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,Te,be.width,be.height,le.depth,0,Se,Ne,be.data)}else{$e&&Qe&&n.texStorage2D(t.TEXTURE_2D,we,Te,We[0].width,We[0].height);for(let ue=0,Re=We.length;ue<Re;ue++)be=We[ue],_.format!==Un?Se!==null?$e?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,be.width,be.height,Se,be.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,Te,be.width,be.height,0,be.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?U&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,be.width,be.height,Se,Ne,be.data):n.texImage2D(t.TEXTURE_2D,ue,Te,be.width,be.height,0,Se,Ne,be.data)}else if(_.isDataArrayTexture)if($e){if(Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Te,le.width,le.height,le.depth),U)if(_.layerUpdates.size>0){const ue=ad(le.width,le.height,_.format,_.type);for(const Re of _.layerUpdates){const Ie=le.data.subarray(Re*ue/le.data.BYTES_PER_ELEMENT,(Re+1)*ue/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Re,le.width,le.height,1,Se,Ne,Ie)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,Ne,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,le.width,le.height,le.depth,0,Se,Ne,le.data);else if(_.isData3DTexture)$e?(Qe&&n.texStorage3D(t.TEXTURE_3D,we,Te,le.width,le.height,le.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,Ne,le.data)):n.texImage3D(t.TEXTURE_3D,0,Te,le.width,le.height,le.depth,0,Se,Ne,le.data);else if(_.isFramebufferTexture){if(Qe)if($e)n.texStorage2D(t.TEXTURE_2D,we,Te,le.width,le.height);else{let ue=le.width,Re=le.height;for(let Ie=0;Ie<we;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Te,ue,Re,0,Se,Ne,null),ue>>=1,Re>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ue=t.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),le.parentNode!==ue){ue.appendChild(le),f.add(_),ue.onpaint=Re=>{const Ie=Re.changedElements;for(const ge of f)Ie.includes(ge.image)&&(ge.needsUpdate=!0)},ue.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,le);else{const Ie=t.RGBA,ge=t.RGBA,Ge=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ie,ge,Ge,le)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(We.length>0){if($e&&Qe){const ue=Ae(We[0]);n.texStorage2D(t.TEXTURE_2D,we,Te,ue.width,ue.height)}for(let ue=0,Re=We.length;ue<Re;ue++)be=We[ue],$e?U&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Se,Ne,be):n.texImage2D(t.TEXTURE_2D,ue,Te,Se,Ne,be);_.generateMipmaps=!1}else if($e){if(Qe){const ue=Ae(le);n.texStorage2D(t.TEXTURE_2D,we,Te,ue.width,ue.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ne,le)}else n.texImage2D(t.TEXTURE_2D,0,Te,Se,Ne,le);d(_)&&M(P),fe.__version=ce.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function _e(b,_,A){if(_.image.length!==6)return;const P=q(b,_),V=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+A);const ce=i.get(V);if(V.version!==ce.__version||P===!0){n.activeTexture(t.TEXTURE0+A);const fe=ct.getPrimaries(ct.workingColorSpace),re=_.colorSpace===Yi?null:ct.getPrimaries(_.colorSpace),le=_.colorSpace===Yi||fe===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let ge=0;ge<6;ge++)!Se&&!Ne?Te[ge]=m(_.image[ge],!0,s.maxCubemapSize):Te[ge]=Ne?_.image[ge].image:_.image[ge],Te[ge]=Ue(_,Te[ge]);const be=Te[0],We=r.convert(_.format,_.colorSpace),$e=r.convert(_.type),Qe=x(_.internalFormat,We,$e,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,we=ce.__version===void 0||P===!0,ue=V.dataReady;let Re=T(_,be);je(t.TEXTURE_CUBE_MAP,_);let Ie;if(Se){U&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,Qe,be.width,be.height);for(let ge=0;ge<6;ge++){Ie=Te[ge].mipmaps;for(let Ge=0;Ge<Ie.length;Ge++){const Ve=Ie[Ge];_.format!==Un?We!==null?U?ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,0,0,Ve.width,Ve.height,We,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,Qe,Ve.width,Ve.height,0,Ve.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,0,0,Ve.width,Ve.height,We,$e,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge,Qe,Ve.width,Ve.height,0,We,$e,Ve.data)}}}else{if(Ie=_.mipmaps,U&&we){Ie.length>0&&Re++;const ge=Ae(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,Qe,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ne){U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Te[ge].width,Te[ge].height,We,$e,Te[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Qe,Te[ge].width,Te[ge].height,0,We,$e,Te[ge].data);for(let Ge=0;Ge<Ie.length;Ge++){const Rt=Ie[Ge].image[ge].image;U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,0,0,Rt.width,Rt.height,We,$e,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,Qe,Rt.width,Rt.height,0,We,$e,Rt.data)}}else{U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,We,$e,Te[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Qe,We,$e,Te[ge]);for(let Ge=0;Ge<Ie.length;Ge++){const Ve=Ie[Ge];U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,0,0,We,$e,Ve.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge+1,Qe,We,$e,Ve.image[ge])}}}d(_)&&M(t.TEXTURE_CUBE_MAP),ce.__version=V.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Me(b,_,A,P,V,ce){const fe=r.convert(A.format,A.colorSpace),re=r.convert(A.type),le=x(A.internalFormat,fe,re,A.normalized,A.colorSpace),Se=i.get(_),Ne=i.get(A);if(Ne.__renderTarget=_,!Se.__hasExternalTextures){const Te=Math.max(1,_.width>>ce),be=Math.max(1,_.height>>ce);V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?n.texImage3D(V,ce,le,Te,be,_.depth,0,fe,re,null):n.texImage2D(V,ce,le,Te,be,0,fe,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ee(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,P,V,Ne.__webglTexture,0,ae(_)):(V===t.TEXTURE_2D||V>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,P,V,Ne.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(b,_,A){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer){const P=_.depthTexture,V=P&&P.isDepthTexture?P.type:null,ce=R(_.stencilBuffer,V),fe=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ee(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae(_),ce,_.width,_.height):A?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae(_),ce,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ce,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,b)}else{const P=_.textures;for(let V=0;V<P.length;V++){const ce=P[V],fe=r.convert(ce.format,ce.colorSpace),re=r.convert(ce.type),le=x(ce.internalFormat,fe,re,ce.normalized,ce.colorSpace);Ee(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae(_),le,_.width,_.height):A?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae(_),le,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,le,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function D(b,_,A){const P=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const V=i.get(_.depthTexture);if(V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),P){if(V.__webglInit===void 0&&(V.__webglInit=!0,_.depthTexture.addEventListener("dispose",I)),V.__webglTexture===void 0){V.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),je(t.TEXTURE_CUBE_MAP,_.depthTexture);const Se=r.convert(_.depthTexture.format),Ne=r.convert(_.depthTexture.type);let Te;_.depthTexture.format===Di?Te=t.DEPTH_COMPONENT24:_.depthTexture.format===ps&&(Te=t.DEPTH24_STENCIL8);for(let be=0;be<6;be++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Te,_.width,_.height,0,Se,Ne,null)}}else ne(_.depthTexture,0);const ce=V.__webglTexture,fe=ae(_),re=P?t.TEXTURE_CUBE_MAP_POSITIVE_X+A:t.TEXTURE_2D,le=_.depthTexture.format===ps?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Di)Ee(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,re,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,le,re,ce,0);else if(_.depthTexture.format===ps)Ee(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,re,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,le,re,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function B(b){const _=i.get(b),A=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const P=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),P){const V=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,P.removeEventListener("dispose",V)};P.addEventListener("dispose",V),_.__depthDisposeCallback=V}_.__boundDepthTexture=P}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(A)for(let P=0;P<6;P++)D(_.__webglFramebuffer[P],b,P);else{const P=b.texture.mipmaps;P&&P.length>0?D(_.__webglFramebuffer[0],b,0):D(_.__webglFramebuffer,b,0)}else if(A){_.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[P]),_.__webglDepthbuffer[P]===void 0)_.__webglDepthbuffer[P]=t.createRenderbuffer(),w(_.__webglDepthbuffer[P],b,!1);else{const V=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[P];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,V,t.RENDERBUFFER,ce)}}else{const P=b.texture.mipmaps;if(P&&P.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),w(_.__webglDepthbuffer,b,!1);else{const V=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,V,t.RENDERBUFFER,ce)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Z(b,_,A){const P=i.get(b);_!==void 0&&Me(P.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),A!==void 0&&B(b)}function k(b){const _=b.texture,A=i.get(b),P=i.get(_);b.addEventListener("dispose",v);const V=b.textures,ce=b.isWebGLCubeRenderTarget===!0,fe=V.length>1;if(fe||(P.__webglTexture===void 0&&(P.__webglTexture=t.createTexture()),P.__version=_.version,o.memory.textures++),ce){A.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){A.__webglFramebuffer[re]=[];for(let le=0;le<_.mipmaps.length;le++)A.__webglFramebuffer[re][le]=t.createFramebuffer()}else A.__webglFramebuffer[re]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){A.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)A.__webglFramebuffer[re]=t.createFramebuffer()}else A.__webglFramebuffer=t.createFramebuffer();if(fe)for(let re=0,le=V.length;re<le;re++){const Se=i.get(V[re]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Ee(b)===!1){A.__webglMultisampledFramebuffer=t.createFramebuffer(),A.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let re=0;re<V.length;re++){const le=V[re];A.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,A.__webglColorRenderbuffer[re]);const Se=r.convert(le.format,le.colorSpace),Ne=r.convert(le.type),Te=x(le.internalFormat,Se,Ne,le.normalized,le.colorSpace,b.isXRRenderTarget===!0),be=ae(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Te,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,A.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(A.__webglDepthRenderbuffer=t.createRenderbuffer(),w(A.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),je(t.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)Me(A.__webglFramebuffer[re][le],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else Me(A.__webglFramebuffer[re],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);d(_)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let re=0,le=V.length;re<le;re++){const Se=V[re],Ne=i.get(Se);let Te=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Te=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,Ne.__webglTexture),je(Te,Se),Me(A.__webglFramebuffer,b,Se,t.COLOR_ATTACHMENT0+re,Te,0),d(Se)&&M(Te)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,P.__webglTexture),je(re,_),_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)Me(A.__webglFramebuffer[le],b,_,t.COLOR_ATTACHMENT0,re,le);else Me(A.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,re,0);d(_)&&M(re),n.unbindTexture()}b.depthBuffer&&B(b)}function J(b){const _=b.textures;for(let A=0,P=_.length;A<P;A++){const V=_[A];if(d(V)){const ce=E(b),fe=i.get(V).__webglTexture;n.bindTexture(ce,fe),M(ce),n.unbindTexture()}}}const pe=[],de=[];function me(b){if(b.samples>0){if(Ee(b)===!1){const _=b.textures,A=b.width,P=b.height;let V=t.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(b),re=_.length>1;if(re)for(let Se=0;Se<_.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const le=b.texture.mipmaps;le&&le.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(V|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(V|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Se]);const Ne=i.get(_[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,A,P,0,0,A,P,V,t.NEAREST),l===!0&&(pe.length=0,de.length=0,pe.push(t.COLOR_ATTACHMENT0+Se),b.depthBuffer&&b.resolveDepthBuffer===!1&&(pe.push(ce),de.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,de)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let Se=0;Se<_.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Se]);const Ne=i.get(_[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ae(b){return Math.min(s.maxSamples,b.samples)}function Ee(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function Ue(b,_){const A=b.colorSpace,P=b.format,V=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||A!==Ma&&A!==Yi&&(ct.getTransfer(A)===mt?(P!==Un||V!==yn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",A)),_}function Ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=ie,this.getTextureUnits=oe,this.setTextureUnits=X,this.setTexture2D=ne,this.setTexture2DArray=he,this.setTexture3D=xe,this.setTextureCube=ve,this.rebindTextures=Z,this.setupRenderTarget=k,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function eR(t,e){function n(i,s=Yi){let r;const o=ct.getTransfer(s);if(i===yn)return t.UNSIGNED_BYTE;if(i===Fu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Bu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===zm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Hm)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fm)return t.BYTE;if(i===Bm)return t.SHORT;if(i===eo)return t.UNSIGNED_SHORT;if(i===Ou)return t.INT;if(i===ui)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===Pi)return t.HALF_FLOAT;if(i===Vm)return t.ALPHA;if(i===km)return t.RGB;if(i===Un)return t.RGBA;if(i===Di)return t.DEPTH_COMPONENT;if(i===ps)return t.DEPTH_STENCIL;if(i===Gm)return t.RED;if(i===zu)return t.RED_INTEGER;if(i===bs)return t.RG;if(i===Hu)return t.RG_INTEGER;if(i===Vu)return t.RGBA_INTEGER;if(i===na||i===ia||i===sa||i===ra)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Cc||i===Pc||i===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lc||i===Ic||i===Nc||i===Uc||i===Oc||i===Sa||i===Fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lc||i===Ic)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uc)return r.COMPRESSED_R11_EAC;if(i===Oc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Sa)return r.COMPRESSED_RG11_EAC;if(i===Fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bc||i===zc||i===Hc||i===Vc||i===kc||i===Gc||i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===Kc||i===Zc||i===Jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$c)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===Qc||i===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tu||i===nu||i===ya||i===iu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===tu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const tR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nR=`
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

}`;class iR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Jm(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new fi({vertexShader:tR,fragmentShader:nR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sR extends es{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const S=typeof XRWebGLBinding<"u",m=new iR,d={},M=n.getContextAttributes();let E=null,x=null;const R=[],T=[],I=new Je;let v=null;const C=new An;C.viewport=new wt;const O=new An;O.viewport=new wt;const N=[C,O],z=new fE;let ie=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let F=R[q];return F===void 0&&(F=new Al,R[q]=F),F.getTargetRaySpace()},this.getControllerGrip=function(q){let F=R[q];return F===void 0&&(F=new Al,R[q]=F),F.getGripSpace()},this.getHand=function(q){let F=R[q];return F===void 0&&(F=new Al,R[q]=F),F.getHandSpace()};function X(q){const F=T.indexOf(q.inputSource);if(F===-1)return;const K=R[F];K!==void 0&&(K.update(q.inputSource,q.frame,c||o),K.dispatchEvent({type:q.type,data:q.inputSource}))}function ee(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",G);for(let q=0;q<R.length;q++){const F=T[q];F!==null&&(T[q]=null,R[q].disconnect(F))}ie=null,oe=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(E),p=null,h=null,f=null,s=null,x=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(I),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,te=null,_e=null;M.depth&&(_e=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=M.stencil?ps:Di,te=M.stencil?to:ui);const Me={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Me),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ai(h.textureWidth,h.textureHeight,{format:Un,type:yn,depthTexture:new fr(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const K={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,K),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ai(p.framebufferWidth,p.framebufferHeight,{format:Un,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(q){for(let F=0;F<q.removed.length;F++){const K=q.removed[F],te=T.indexOf(K);te>=0&&(T[te]=null,R[te].disconnect(K))}for(let F=0;F<q.added.length;F++){const K=q.added[F];let te=T.indexOf(K);if(te===-1){for(let Me=0;Me<R.length;Me++)if(Me>=T.length){T.push(K),te=Me;break}else if(T[Me]===null){T[Me]=K,te=Me;break}if(te===-1)break}const _e=R[te];_e&&_e.connect(K)}}const ne=new Y,he=new Y;function xe(q,F,K){ne.setFromMatrixPosition(F.matrixWorld),he.setFromMatrixPosition(K.matrixWorld);const te=ne.distanceTo(he),_e=F.projectionMatrix.elements,Me=K.projectionMatrix.elements,w=_e[14]/(_e[10]-1),D=_e[14]/(_e[10]+1),B=(_e[9]+1)/_e[5],Z=(_e[9]-1)/_e[5],k=(_e[8]-1)/_e[0],J=(Me[8]+1)/Me[0],pe=w*k,de=w*J,me=te/(-k+J),ae=me*-k;if(F.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ae),q.translateZ(me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_e[10]===-1)q.projectionMatrix.copy(F.projectionMatrix),q.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const Ee=w+me,L=D+me,Ue=pe-ae,Ae=de+(te-ae),b=B*D/L*Ee,_=Z*D/L*Ee;q.projectionMatrix.makePerspective(Ue,Ae,b,_,Ee,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ve(q,F){F===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(F.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let F=q.near,K=q.far;m.texture!==null&&(m.depthNear>0&&(F=m.depthNear),m.depthFar>0&&(K=m.depthFar)),z.near=O.near=C.near=F,z.far=O.far=C.far=K,(ie!==z.near||oe!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),ie=z.near,oe=z.far),z.layers.mask=q.layers.mask|6,C.layers.mask=z.layers.mask&-5,O.layers.mask=z.layers.mask&-3;const te=q.parent,_e=z.cameras;ve(z,te);for(let Me=0;Me<_e.length;Me++)ve(_e[Me],te);_e.length===2?xe(z,C,O):z.projectionMatrix.copy(C.projectionMatrix),ye(q,z,te)};function ye(q,F,K){K===null?q.matrix.copy(F.matrixWorld):(q.matrix.copy(K.matrixWorld),q.matrix.invert(),q.matrix.multiply(F.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(F.projectionMatrix),q.projectionMatrixInverse.copy(F.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ru*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return d[q]};let Ye=null;function it(q,F){if(u=F.getViewerPose(c||o),g=F,u!==null){const K=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let te=!1;K.length!==z.cameras.length&&(z.cameras.length=0,te=!0);for(let D=0;D<K.length;D++){const B=K[D];let Z=null;if(p!==null)Z=p.getViewport(B);else{const J=f.getViewSubImage(h,B);Z=J.viewport,D===0&&(e.setRenderTargetTextures(x,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(x))}let k=N[D];k===void 0&&(k=new An,k.layers.enable(D),k.viewport=new wt,N[D]=k),k.matrix.fromArray(B.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(B.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Z.x,Z.y,Z.width,Z.height),D===0&&(z.matrix.copy(k.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),te===!0&&z.cameras.push(k)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const D=f.getDepthInformation(K[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(_e&&_e.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let D=0;D<K.length;D++){const B=K[D].camera;if(B){let Z=d[B];Z||(Z=new Jm,d[B]=Z);const k=f.getCameraImage(B);Z.sourceTexture=k}}}}for(let K=0;K<R.length;K++){const te=T[K],_e=R[K];te!==null&&_e!==void 0&&_e.update(te,F,c||o)}Ye&&Ye(q,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),g=null}const je=new tg;je.setAnimationLoop(it),this.setAnimationLoop=function(q){Ye=q},this.dispose=function(){}}}const rR=new At,lg=new et;lg.set(-1,0,0,0,1,0,0,0,1);function oR(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,jm(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,E,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===gn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===gn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(rR.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lg),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=E*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function aR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,R){const T=R.program;i.uniformBlockBinding(x,T)}function c(x,R){let T=s[x.id];T===void 0&&(m(x),T=u(x),s[x.id]=T,x.addEventListener("dispose",M));const I=R.program;i.updateUBOMapping(x,I);const v=e.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const R=f();x.__bindingPointIndex=R;const T=t.createBuffer(),I=x.__size,v=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,I,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,R,T),T}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const R=s[x.id],T=x.uniforms,I=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,R);for(let v=0,C=T.length;v<C;v++){const O=T[v];if(Array.isArray(O))for(let N=0,z=O.length;N<z;N++)p(O[N],v,N,I);else p(O,v,0,I)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,R,T,I){if(S(x,R,T,I)===!0){const v=x.__offset,C=x.value;if(Array.isArray(C)){let O=0;for(let N=0;N<C.length;N++){const z=C[N],ie=d(z);g(z,x.__data,O),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(O+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,x.__data)}}function g(x,R,T){typeof x=="number"||typeof x=="boolean"?R[0]=x:x.isMatrix3?(R[0]=x.elements[0],R[1]=x.elements[1],R[2]=x.elements[2],R[3]=0,R[4]=x.elements[3],R[5]=x.elements[4],R[6]=x.elements[5],R[7]=0,R[8]=x.elements[6],R[9]=x.elements[7],R[10]=x.elements[8],R[11]=0):ArrayBuffer.isView(x)?R.set(new x.constructor(x.buffer,x.byteOffset,R.length)):x.toArray(R,T)}function S(x,R,T,I){const v=x.value,C=R+"_"+T;if(I[C]===void 0)return typeof v=="number"||typeof v=="boolean"?I[C]=v:ArrayBuffer.isView(v)?I[C]=v.slice():I[C]=v.clone(),!0;{const O=I[C];if(typeof v=="number"||typeof v=="boolean"){if(O!==v)return I[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(O.equals(v)===!1)return O.copy(v),!0}}return!1}function m(x){const R=x.uniforms;let T=0;const I=16;for(let C=0,O=R.length;C<O;C++){const N=Array.isArray(R[C])?R[C]:[R[C]];for(let z=0,ie=N.length;z<ie;z++){const oe=N[z],X=Array.isArray(oe.value)?oe.value:[oe.value];for(let ee=0,G=X.length;ee<G;ee++){const ne=X[ee],he=d(ne),xe=T%I,ve=xe%he.boundary,ye=xe+ve;T+=ve,ye!==0&&I-ye<he.storage&&(T+=I-ye),oe.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=T,T+=he.storage}}}const v=T%I;return v>0&&(T+=I-v),x.__size=T,x.__cache={},this}function d(x){const R={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(R.boundary=4,R.storage=4):x.isVector2?(R.boundary=8,R.storage=8):x.isVector3||x.isColor?(R.boundary=16,R.storage=12):x.isVector4?(R.boundary=16,R.storage=16):x.isMatrix3?(R.boundary=48,R.storage=48):x.isMatrix4?(R.boundary=64,R.storage=64):x.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(R.boundary=16,R.storage=x.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",x),R}function M(x){const R=x.target;R.removeEventListener("dispose",M);const T=o.indexOf(R.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function E(){for(const x in s)t.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}const lR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function cR(){return Yn===null&&(Yn=new YM(lR,16,16,bs,Pi),Yn.name="DFG_LUT",Yn.minFilter=en,Yn.magFilter=en,Yn.wrapS=Ei,Yn.wrapT=Ei,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class uR{constructor(e={}){const{canvas:n=EM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=yn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const S=p,m=new Set([Vu,Hu,zu]),d=new Set([yn,ui,eo,to,Fu,Bu]),M=new Uint32Array(4),E=new Int32Array(4),x=new Y;let R=null,T=null;const I=[],v=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let N=!1,z=null,ie=null,oe=null,X=null;this._outputColorSpace=Tn;let ee=0,G=0,ne=null,he=-1,xe=null;const ve=new wt,ye=new wt;let Ye=null;const it=new ot(0);let je=0,q=n.width,F=n.height,K=1,te=null,_e=null;const Me=new wt(0,0,q,F),w=new wt(0,0,q,F);let D=!1;const B=new Yu;let Z=!1,k=!1;const J=new At,pe=new Y,de=new wt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Ee(){return ne===null?K:1}let L=i;function Ue(y,W){return n.getContext(y,W)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uu}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",Mt,!1),n.addEventListener("webglcontextcreationerror",kn,!1),L===null){const W="webgl2";if(L=Ue(W,y),L===null)throw Ue(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw ut("WebGLRenderer: "+y.message),y}let Ae,b,_,A,P,V,ce,fe,re,le,Se,Ne,Te,be,We,$e,Qe,U,we,ue,Re,Ie,ge;function Ge(){Ae=new cA(L),Ae.init(),Re=new eR(L,Ae),b=new tA(L,Ae,e,Re),_=new jw(L,Ae),b.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),ie=L.createFramebuffer(),oe=L.createFramebuffer(),X=L.createFramebuffer(),A=new hA(L),P=new Bw,V=new Qw(L,Ae,_,P,b,Re,A),ce=new lA(O),fe=new gE(L),Ie=new QT(L,fe),re=new uA(L,fe,A,Ie),le=new pA(L,re,fe,Ie,A),U=new dA(L,b,V),We=new nA(P),Se=new Fw(O,ce,Ae,b,Ie,We),Ne=new oR(O,P),Te=new Hw,be=new qw(Ae),Qe=new jT(O,ce,_,le,g,l),$e=new Jw(O,le,b),ge=new aR(L,A,b,_),we=new eA(L,Ae,A),ue=new fA(L,Ae,A),A.programs=Se.programs,O.capabilities=b,O.extensions=Ae,O.properties=P,O.renderLists=Te,O.shadowMap=$e,O.state=_,O.info=A}Ge(),S!==yn&&(C=new gA(S,n.width,n.height,a,s,r));const Ve=new sR(O,L);this.xr=Ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Ae.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ae.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(q,F,!1))},this.getSize=function(y){return y.set(q,F)},this.setSize=function(y,W,se=!0){if(Ve.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,F=W,n.width=Math.floor(y*K),n.height=Math.floor(W*K),se===!0&&(n.style.width=y+"px",n.style.height=W+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,y,W)},this.getDrawingBufferSize=function(y){return y.set(q*K,F*K).floor()},this.setDrawingBufferSize=function(y,W,se){q=y,F=W,K=se,n.width=Math.floor(y*se),n.height=Math.floor(W*se),this.setViewport(0,0,y,W)},this.setEffects=function(y){if(S===yn){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let W=0;W<y.length;W++)if(y[W].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ve)},this.getViewport=function(y){return y.copy(Me)},this.setViewport=function(y,W,se,j){y.isVector4?Me.set(y.x,y.y,y.z,y.w):Me.set(y,W,se,j),_.viewport(ve.copy(Me).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(w)},this.setScissor=function(y,W,se,j){y.isVector4?w.set(y.x,y.y,y.z,y.w):w.set(y,W,se,j),_.scissor(ye.copy(w).multiplyScalar(K).round())},this.getScissorTest=function(){return D},this.setScissorTest=function(y){_.setScissorTest(D=y)},this.setOpaqueSort=function(y){te=y},this.setTransparentSort=function(y){_e=y},this.getClearColor=function(y){return y.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(y=!0,W=!0,se=!0){let j=0;if(y){let Q=!1;if(ne!==null){const Le=ne.texture.format;Q=m.has(Le)}if(Q){const Le=ne.texture.type,ze=d.has(Le),De=Qe.getClearColor(),ke=Qe.getClearAlpha(),Xe=De.r,tt=De.g,rt=De.b;ze?(M[0]=Xe,M[1]=tt,M[2]=rt,M[3]=ke,L.clearBufferuiv(L.COLOR,0,M)):(E[0]=Xe,E[1]=tt,E[2]=rt,E[3]=ke,L.clearBufferiv(L.COLOR,0,E))}else j|=L.COLOR_BUFFER_BIT}W&&(j|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),z=y},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",Mt,!1),n.removeEventListener("webglcontextcreationerror",kn,!1),Qe.dispose(),Te.dispose(),be.dispose(),P.dispose(),ce.dispose(),le.dispose(),Ie.dispose(),ge.dispose(),Se.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",of),Ve.removeEventListener("sessionend",af),ts.stop()};function Rt(y){y.preventDefault(),Ih("WebGLRenderer: Context Lost."),N=!0}function Mt(){Ih("WebGLRenderer: Context Restored."),N=!1;const y=A.autoReset,W=$e.enabled,se=$e.autoUpdate,j=$e.needsUpdate,Q=$e.type;Ge(),A.autoReset=y,$e.enabled=W,$e.autoUpdate=se,$e.needsUpdate=j,$e.type=Q}function kn(y){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Gn(y){const W=y.target;W.removeEventListener("dispose",Gn),ug(W)}function ug(y){fg(y),P.remove(y)}function fg(y){const W=P.get(y).programs;W!==void 0&&(W.forEach(function(se){Se.releaseProgram(se)}),y.isShaderMaterial&&Se.releaseShaderCache(y))}this.renderBufferDirect=function(y,W,se,j,Q,Le){W===null&&(W=me);const ze=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,De=pg(y,W,se,j,Q);_.setMaterial(j,ze);let ke=se.index,Xe=1;if(j.wireframe===!0){if(ke=re.getWireframeAttribute(se),ke===void 0)return;Xe=2}const tt=se.drawRange,rt=se.attributes.position;let qe=tt.start*Xe,_t=(tt.start+tt.count)*Xe;Le!==null&&(qe=Math.max(qe,Le.start*Xe),_t=Math.min(_t,(Le.start+Le.count)*Xe)),ke!==null?(qe=Math.max(qe,0),_t=Math.min(_t,ke.count)):rt!=null&&(qe=Math.max(qe,0),_t=Math.min(_t,rt.count));const It=_t-qe;if(It<0||It===1/0)return;Ie.setup(Q,j,De,se,ke);let Ct,xt=we;if(ke!==null&&(Ct=fe.get(ke),xt=ue,xt.setIndex(Ct)),Q.isMesh)j.wireframe===!0?(_.setLineWidth(j.wireframeLinewidth*Ee()),xt.setMode(L.LINES)):xt.setMode(L.TRIANGLES);else if(Q.isLine){let $t=j.linewidth;$t===void 0&&($t=1),_.setLineWidth($t*Ee()),Q.isLineSegments?xt.setMode(L.LINES):Q.isLineLoop?xt.setMode(L.LINE_LOOP):xt.setMode(L.LINE_STRIP)}else Q.isPoints?xt.setMode(L.POINTS):Q.isSprite&&xt.setMode(L.TRIANGLES);if(Q.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))xt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $t=Q._multiDrawStarts,Fe=Q._multiDrawCounts,_n=Q._multiDrawCount,ft=ke?fe.get(ke).bytesPerElement:1,En=P.get(j).currentProgram.getUniforms();for(let Wn=0;Wn<_n;Wn++)En.setValue(L,"_gl_DrawID",Wn),xt.render($t[Wn]/ft,Fe[Wn])}else if(Q.isInstancedMesh)xt.renderInstances(qe,It,Q.count);else if(se.isInstancedBufferGeometry){const $t=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Fe=Math.min(se.instanceCount,$t);xt.renderInstances(qe,It,Fe)}else xt.render(qe,It)};function rf(y,W,se){y.transparent===!0&&y.side===ei&&y.forceSinglePass===!1?(y.side=gn,y.needsUpdate=!0,_o(y,W,se),y.side=Ji,y.needsUpdate=!0,_o(y,W,se),y.side=ei):_o(y,W,se)}this.compile=function(y,W,se=null){se===null&&(se=y),T=be.get(se),T.init(W),v.push(T),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),y!==se&&y.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights();const j=new Set;return y.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Le=Q.material;if(Le)if(Array.isArray(Le))for(let ze=0;ze<Le.length;ze++){const De=Le[ze];rf(De,se,Q),j.add(De)}else rf(Le,se,Q),j.add(Le)}),T=v.pop(),j},this.compileAsync=function(y,W,se=null){const j=this.compile(y,W,se);return new Promise(Q=>{function Le(){if(j.forEach(function(ze){P.get(ze).currentProgram.isReady()&&j.delete(ze)}),j.size===0){Q(y);return}setTimeout(Le,10)}Ae.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Za=null;function hg(y){Za&&Za(y)}function of(){ts.stop()}function af(){ts.start()}const ts=new tg;ts.setAnimationLoop(hg),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(y){Za=y,Ve.setAnimationLoop(y),y===null?ts.stop():ts.start()},Ve.addEventListener("sessionstart",of),Ve.addEventListener("sessionend",af),this.render=function(y,W){if(W!==void 0&&W.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(y,W);const se=Ve.enabled===!0&&Ve.isPresenting===!0,j=C!==null&&(ne===null||se)&&C.begin(O,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),y.isScene===!0&&y.onBeforeRender(O,y,W,ne),T=be.get(y,v.length),T.init(W),T.state.textureUnits=V.getTextureUnits(),v.push(T),J.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),B.setFromProjectionMatrix(J,ni,W.reversedDepth),k=this.localClippingEnabled,Z=We.init(this.clippingPlanes,k),R=Te.get(y,I.length),R.init(),I.push(R),Ve.enabled===!0&&Ve.isPresenting===!0){const ze=O.xr.getDepthSensingMesh();ze!==null&&Ja(ze,W,-1/0,O.sortObjects)}Ja(y,W,0,O.sortObjects),R.finish(),O.sortObjects===!0&&R.sort(te,_e,W.reversedDepth),ae=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,ae&&Qe.addToRenderList(R,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Z===!0&&We.beginShadows();const Q=T.state.shadowsArray;if($e.render(Q,y,W),Z===!0&&We.endShadows(),(j&&C.hasRenderPass())===!1){const ze=R.opaque,De=R.transmissive;if(T.setupLights(),W.isArrayCamera){const ke=W.cameras;if(De.length>0)for(let Xe=0,tt=ke.length;Xe<tt;Xe++){const rt=ke[Xe];cf(ze,De,y,rt)}ae&&Qe.render(y);for(let Xe=0,tt=ke.length;Xe<tt;Xe++){const rt=ke[Xe];lf(R,y,rt,rt.viewport)}}else De.length>0&&cf(ze,De,y,W),ae&&Qe.render(y),lf(R,y,W)}ne!==null&&G===0&&(V.updateMultisampleRenderTarget(ne),V.updateRenderTargetMipmap(ne)),j&&C.end(O),y.isScene===!0&&y.onAfterRender(O,y,W),Ie.resetDefaultState(),he=-1,xe=null,v.pop(),v.length>0?(T=v[v.length-1],V.setTextureUnits(T.state.textureUnits),Z===!0&&We.setGlobalState(O.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?R=I[I.length-1]:R=null,z!==null&&z.renderEnd()};function Ja(y,W,se,j){if(y.visible===!1)return;if(y.layers.test(W.layers)){if(y.isGroup)se=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(W);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||B.intersectsSprite(y)){j&&de.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);const ze=le.update(y),De=y.material;De.visible&&R.push(y,ze,De,se,de.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||B.intersectsObject(y))){const ze=le.update(y),De=y.material;if(j&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),de.copy(y.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),de.copy(ze.boundingSphere.center)),de.applyMatrix4(y.matrixWorld).applyMatrix4(J)),Array.isArray(De)){const ke=ze.groups;for(let Xe=0,tt=ke.length;Xe<tt;Xe++){const rt=ke[Xe],qe=De[rt.materialIndex];qe&&qe.visible&&R.push(y,ze,qe,se,de.z,rt)}}else De.visible&&R.push(y,ze,De,se,de.z,null)}}const Le=y.children;for(let ze=0,De=Le.length;ze<De;ze++)Ja(Le[ze],W,se,j)}function lf(y,W,se,j){const{opaque:Q,transmissive:Le,transparent:ze}=y;T.setupLightsView(se),Z===!0&&We.setGlobalState(O.clippingPlanes,se),j&&_.viewport(ve.copy(j)),Q.length>0&&go(Q,W,se),Le.length>0&&go(Le,W,se),ze.length>0&&go(ze,W,se),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function cf(y,W,se,j){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){const qe=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new ai(1,1,{generateMipmaps:!0,type:qe?Pi:yn,minFilter:ds,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Le=T.state.transmissionRenderTarget[j.id],ze=j.viewport||ve;Le.setSize(ze.z*O.transmissionResolutionScale,ze.w*O.transmissionResolutionScale);const De=O.getRenderTarget(),ke=O.getActiveCubeFace(),Xe=O.getActiveMipmapLevel();O.setRenderTarget(Le),O.getClearColor(it),je=O.getClearAlpha(),je<1&&O.setClearColor(16777215,.5),O.clear(),ae&&Qe.render(se);const tt=O.toneMapping;O.toneMapping=oi;const rt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),Z===!0&&We.setGlobalState(O.clippingPlanes,j),go(y,se,j),V.updateMultisampleRenderTarget(Le),V.updateRenderTargetMipmap(Le),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let _t=0,It=W.length;_t<It;_t++){const Ct=W[_t],{object:xt,geometry:$t,material:Fe,group:_n}=Ct;if(Fe.side===ei&&xt.layers.test(j.layers)){const ft=Fe.side;Fe.side=gn,Fe.needsUpdate=!0,uf(xt,se,j,$t,Fe,_n),Fe.side=ft,Fe.needsUpdate=!0,qe=!0}}qe===!0&&(V.updateMultisampleRenderTarget(Le),V.updateRenderTargetMipmap(Le))}O.setRenderTarget(De,ke,Xe),O.setClearColor(it,je),rt!==void 0&&(j.viewport=rt),O.toneMapping=tt}function go(y,W,se){const j=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Le=y.length;Q<Le;Q++){const ze=y[Q],{object:De,geometry:ke,group:Xe}=ze;let tt=ze.material;tt.allowOverride===!0&&j!==null&&(tt=j),De.layers.test(se.layers)&&uf(De,W,se,ke,tt,Xe)}}function uf(y,W,se,j,Q,Le){y.onBeforeRender(O,W,se,j,Q,Le),y.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Q.onBeforeRender(O,W,se,j,y,Le),Q.transparent===!0&&Q.side===ei&&Q.forceSinglePass===!1?(Q.side=gn,Q.needsUpdate=!0,O.renderBufferDirect(se,W,j,Q,y,Le),Q.side=Ji,Q.needsUpdate=!0,O.renderBufferDirect(se,W,j,Q,y,Le),Q.side=ei):O.renderBufferDirect(se,W,j,Q,y,Le),y.onAfterRender(O,W,se,j,Q,Le)}function _o(y,W,se){W.isScene!==!0&&(W=me);const j=P.get(y),Q=T.state.lights,Le=T.state.shadowsArray,ze=Q.state.version,De=Se.getParameters(y,Q.state,Le,W,se,T.state.lightProbeGridArray),ke=Se.getProgramCacheKey(De);let Xe=j.programs;j.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;const tt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;j.envMap=ce.get(y.envMap||j.environment,tt),j.envMapRotation=j.environment!==null&&y.envMap===null?W.environmentRotation:y.envMapRotation,Xe===void 0&&(y.addEventListener("dispose",Gn),Xe=new Map,j.programs=Xe);let rt=Xe.get(ke);if(rt!==void 0){if(j.currentProgram===rt&&j.lightsStateVersion===ze)return hf(y,De),rt}else De.uniforms=Se.getUniforms(y),z!==null&&y.isNodeMaterial&&z.build(y,se,De),y.onBeforeCompile(De,O),rt=Se.acquireProgram(De,ke),Xe.set(ke,rt),j.uniforms=De.uniforms;const qe=j.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(qe.clippingPlanes=We.uniform),hf(y,De),j.needsLights=gg(y),j.lightsStateVersion=ze,j.needsLights&&(qe.ambientLightColor.value=Q.state.ambient,qe.lightProbe.value=Q.state.probe,qe.directionalLights.value=Q.state.directional,qe.directionalLightShadows.value=Q.state.directionalShadow,qe.spotLights.value=Q.state.spot,qe.spotLightShadows.value=Q.state.spotShadow,qe.rectAreaLights.value=Q.state.rectArea,qe.ltc_1.value=Q.state.rectAreaLTC1,qe.ltc_2.value=Q.state.rectAreaLTC2,qe.pointLights.value=Q.state.point,qe.pointLightShadows.value=Q.state.pointShadow,qe.hemisphereLights.value=Q.state.hemi,qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qe.spotLightMatrix.value=Q.state.spotLightMatrix,qe.spotLightMap.value=Q.state.spotLightMap,qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=rt,j.uniformsList=null,rt}function ff(y){if(y.uniformsList===null){const W=y.currentProgram.getUniforms();y.uniformsList=aa.seqWithValue(W.seq,y.uniforms)}return y.uniformsList}function hf(y,W){const se=P.get(y);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function dg(y,W){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;x.setFromMatrixPosition(W.matrixWorld);for(let se=0,j=y.length;se<j;se++){const Q=y[se];if(Q.texture!==null&&Q.boundingBox.containsPoint(x))return Q}return null}function pg(y,W,se,j,Q){W.isScene!==!0&&(W=me),V.resetTextureUnits();const Le=W.fog,ze=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,De=ne===null?O.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ct.workingColorSpace,ke=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Xe=ce.get(j.envMap||ze,ke),tt=j.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,rt=!!se.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),qe=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,It=!!se.morphAttributes.color;let Ct=oi;j.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ct=O.toneMapping);const xt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,$t=xt!==void 0?xt.length:0,Fe=P.get(j),_n=T.state.lights;if(Z===!0&&(k===!0||y!==xe)){const Et=y===xe&&j.id===he;We.setState(j,y,Et)}let ft=!1;j.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==_n.state.version||Fe.outputColorSpace!==De||Q.isBatchedMesh&&Fe.batching===!1||!Q.isBatchedMesh&&Fe.batching===!0||Q.isBatchedMesh&&Fe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Fe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Fe.instancing===!1||!Q.isInstancedMesh&&Fe.instancing===!0||Q.isSkinnedMesh&&Fe.skinning===!1||!Q.isSkinnedMesh&&Fe.skinning===!0||Q.isInstancedMesh&&Fe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Fe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Fe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Fe.instancingMorph===!1&&Q.morphTexture!==null||Fe.envMap!==Xe||j.fog===!0&&Fe.fog!==Le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==We.numPlanes||Fe.numIntersection!==We.numIntersection)||Fe.vertexAlphas!==tt||Fe.vertexTangents!==rt||Fe.morphTargets!==qe||Fe.morphNormals!==_t||Fe.morphColors!==It||Fe.toneMapping!==Ct||Fe.morphTargetsCount!==$t||!!Fe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Fe.__version=j.version);let En=Fe.currentProgram;ft===!0&&(En=_o(j,W,Q),z&&j.isNodeMaterial&&z.onUpdateProgram(j,En,Fe));let Wn=!1,Ii=!1,ws=!1;const St=En.getUniforms(),Nt=Fe.uniforms;if(_.useProgram(En.program)&&(Wn=!0,Ii=!0,ws=!0),j.id!==he&&(he=j.id,Ii=!0),Fe.needsLights){const Et=dg(T.state.lightProbeGridArray,Q);Fe.lightProbeGrid!==Et&&(Fe.lightProbeGrid=Et,Ii=!0)}if(Wn||xe!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),St.setValue(L,"projectionMatrix",y.projectionMatrix),St.setValue(L,"viewMatrix",y.matrixWorldInverse);const Ui=St.map.cameraPosition;Ui!==void 0&&Ui.setValue(L,pe.setFromMatrixPosition(y.matrixWorld)),b.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&St.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),xe!==y&&(xe=y,Ii=!0,ws=!0)}if(Fe.needsLights&&(_n.state.directionalShadowMap.length>0&&St.setValue(L,"directionalShadowMap",_n.state.directionalShadowMap,V),_n.state.spotShadowMap.length>0&&St.setValue(L,"spotShadowMap",_n.state.spotShadowMap,V),_n.state.pointShadowMap.length>0&&St.setValue(L,"pointShadowMap",_n.state.pointShadowMap,V)),Q.isSkinnedMesh){St.setOptional(L,Q,"bindMatrix"),St.setOptional(L,Q,"bindMatrixInverse");const Et=Q.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),St.setValue(L,"boneTexture",Et.boneTexture,V))}Q.isBatchedMesh&&(St.setOptional(L,Q,"batchingTexture"),St.setValue(L,"batchingTexture",Q._matricesTexture,V),St.setOptional(L,Q,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",Q._indirectTexture,V),St.setOptional(L,Q,"batchingColorTexture"),Q._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",Q._colorsTexture,V));const Ni=se.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&U.update(Q,se,En),(Ii||Fe.receiveShadow!==Q.receiveShadow)&&(Fe.receiveShadow=Q.receiveShadow,St.setValue(L,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(Nt.envMapIntensity.value=W.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=cR()),Ii){if(St.setValue(L,"toneMappingExposure",O.toneMappingExposure),Fe.needsLights&&mg(Nt,ws),Le&&j.fog===!0&&Ne.refreshFogUniforms(Nt,Le),Ne.refreshMaterialUniforms(Nt,j,K,F,T.state.transmissionRenderTarget[y.id]),Fe.needsLights&&Fe.lightProbeGrid){const Et=Fe.lightProbeGrid;Nt.probesSH.value=Et.texture,Nt.probesMin.value.copy(Et.boundingBox.min),Nt.probesMax.value.copy(Et.boundingBox.max),Nt.probesResolution.value.copy(Et.resolution)}aa.upload(L,ff(Fe),Nt,V)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(aa.upload(L,ff(Fe),Nt,V),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&St.setValue(L,"center",Q.center),St.setValue(L,"modelViewMatrix",Q.modelViewMatrix),St.setValue(L,"normalMatrix",Q.normalMatrix),St.setValue(L,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){const Et=j.uniformsGroups;for(let Ui=0,Rs=Et.length;Ui<Rs;Ui++){const df=Et[Ui];ge.update(df,En),ge.bind(df,En)}}return En}function mg(y,W){y.ambientLightColor.needsUpdate=W,y.lightProbe.needsUpdate=W,y.directionalLights.needsUpdate=W,y.directionalLightShadows.needsUpdate=W,y.pointLights.needsUpdate=W,y.pointLightShadows.needsUpdate=W,y.spotLights.needsUpdate=W,y.spotLightShadows.needsUpdate=W,y.rectAreaLights.needsUpdate=W,y.hemisphereLights.needsUpdate=W}function gg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,W,se){const j=P.get(y);j.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),P.get(y.texture).__webglTexture=W,P.get(y.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:se,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,W){const se=P.get(y);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(y,W=0,se=0){ne=y,ee=W,G=se;let j=null,Q=!1,Le=!1;if(y){const De=P.get(y);if(De.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,De.__webglFramebuffer),ve.copy(y.viewport),ye.copy(y.scissor),Ye=y.scissorTest,_.viewport(ve),_.scissor(ye),_.setScissorTest(Ye),he=-1;return}else if(De.__webglFramebuffer===void 0)V.setupRenderTarget(y);else if(De.__hasExternalTextures)V.rebindTextures(y,P.get(y.texture).__webglTexture,P.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const tt=y.depthTexture;if(De.__boundDepthTexture!==tt){if(tt!==null&&P.has(tt)&&(y.width!==tt.image.width||y.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(y)}}const ke=y.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Le=!0);const Xe=P.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?j=Xe[W][se]:j=Xe[W],Q=!0):y.samples>0&&V.useMultisampledRTT(y)===!1?j=P.get(y).__webglMultisampledFramebuffer:Array.isArray(Xe)?j=Xe[se]:j=Xe,ve.copy(y.viewport),ye.copy(y.scissor),Ye=y.scissorTest}else ve.copy(Me).multiplyScalar(K).floor(),ye.copy(w).multiplyScalar(K).floor(),Ye=D;if(se!==0&&(j=ie),_.bindFramebuffer(L.FRAMEBUFFER,j)&&_.drawBuffers(y,j),_.viewport(ve),_.scissor(ye),_.setScissorTest(Ye),Q){const De=P.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,De.__webglTexture,se)}else if(Le){const De=W;for(let ke=0;ke<y.textures.length;ke++){const Xe=P.get(y.textures[ke]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ke,Xe.__webglTexture,se,De)}}else if(y!==null&&se!==0){const De=P.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,se)}he=-1},this.readRenderTargetPixels=function(y,W,se,j,Q,Le,ze,De=0){if(!(y&&y.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=P.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){_.bindFramebuffer(L.FRAMEBUFFER,ke);try{const Xe=y.textures[De],tt=Xe.format,rt=Xe.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De),!b.textureFormatReadable(tt)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(rt)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=y.width-j&&se>=0&&se<=y.height-Q&&L.readPixels(W,se,j,Q,Re.convert(tt),Re.convert(rt),Le)}finally{const Xe=ne!==null?P.get(ne).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(y,W,se,j,Q,Le,ze,De=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=P.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke)if(W>=0&&W<=y.width-j&&se>=0&&se<=y.height-Q){_.bindFramebuffer(L.FRAMEBUFFER,ke);const Xe=y.textures[De],tt=Xe.format,rt=Xe.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De),!b.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.bufferData(L.PIXEL_PACK_BUFFER,Le.byteLength,L.STREAM_READ),L.readPixels(W,se,j,Q,Re.convert(tt),Re.convert(rt),0);const _t=ne!==null?P.get(ne).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,_t);const It=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await bM(L,It,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Le),L.deleteBuffer(qe),L.deleteSync(It),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,W=null,se=0){const j=Math.pow(2,-se),Q=Math.floor(y.image.width*j),Le=Math.floor(y.image.height*j),ze=W!==null?W.x:0,De=W!==null?W.y:0;V.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,se,0,0,ze,De,Q,Le),_.unbindTexture()},this.copyTextureToTexture=function(y,W,se=null,j=null,Q=0,Le=0){let ze,De,ke,Xe,tt,rt,qe,_t,It;const Ct=y.isCompressedTexture?y.mipmaps[Le]:y.image;if(se!==null)ze=se.max.x-se.min.x,De=se.max.y-se.min.y,ke=se.isBox3?se.max.z-se.min.z:1,Xe=se.min.x,tt=se.min.y,rt=se.isBox3?se.min.z:0;else{const Nt=Math.pow(2,-Q);ze=Math.floor(Ct.width*Nt),De=Math.floor(Ct.height*Nt),y.isDataArrayTexture?ke=Ct.depth:y.isData3DTexture?ke=Math.floor(Ct.depth*Nt):ke=1,Xe=0,tt=0,rt=0}j!==null?(qe=j.x,_t=j.y,It=j.z):(qe=0,_t=0,It=0);const xt=Re.convert(W.format),$t=Re.convert(W.type);let Fe;W.isData3DTexture?(V.setTexture3D(W,0),Fe=L.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(V.setTexture2DArray(W,0),Fe=L.TEXTURE_2D_ARRAY):(V.setTexture2D(W,0),Fe=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const _n=_.getParameter(L.UNPACK_ROW_LENGTH),ft=_.getParameter(L.UNPACK_IMAGE_HEIGHT),En=_.getParameter(L.UNPACK_SKIP_PIXELS),Wn=_.getParameter(L.UNPACK_SKIP_ROWS),Ii=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,Ct.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Xe),_.pixelStorei(L.UNPACK_SKIP_ROWS,tt),_.pixelStorei(L.UNPACK_SKIP_IMAGES,rt);const ws=y.isDataArrayTexture||y.isData3DTexture,St=W.isDataArrayTexture||W.isData3DTexture;if(y.isDepthTexture){const Nt=P.get(y),Ni=P.get(W),Et=P.get(Nt.__renderTarget),Ui=P.get(Ni.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Et.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Rs=0;Rs<ke;Rs++)ws&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,P.get(y).__webglTexture,Q,rt+Rs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,P.get(W).__webglTexture,Le,It+Rs)),L.blitFramebuffer(Xe,tt,ze,De,qe,_t,ze,De,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Q!==0||y.isRenderTargetTexture||P.has(y)){const Nt=P.get(y),Ni=P.get(W);_.bindFramebuffer(L.READ_FRAMEBUFFER,oe),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,X);for(let Et=0;Et<ke;Et++)ws?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.__webglTexture,Q,rt+Et):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Nt.__webglTexture,Q),St?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ni.__webglTexture,Le,It+Et):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ni.__webglTexture,Le),Q!==0?L.blitFramebuffer(Xe,tt,ze,De,qe,_t,ze,De,L.COLOR_BUFFER_BIT,L.NEAREST):St?L.copyTexSubImage3D(Fe,Le,qe,_t,It+Et,Xe,tt,ze,De):L.copyTexSubImage2D(Fe,Le,qe,_t,Xe,tt,ze,De);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else St?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Fe,Le,qe,_t,It,ze,De,ke,xt,$t,Ct.data):W.isCompressedArrayTexture?L.compressedTexSubImage3D(Fe,Le,qe,_t,It,ze,De,ke,xt,Ct.data):L.texSubImage3D(Fe,Le,qe,_t,It,ze,De,ke,xt,$t,Ct):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Le,qe,_t,ze,De,xt,$t,Ct.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Le,qe,_t,Ct.width,Ct.height,xt,Ct.data):L.texSubImage2D(L.TEXTURE_2D,Le,qe,_t,ze,De,xt,$t,Ct);_.pixelStorei(L.UNPACK_ROW_LENGTH,_n),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),_.pixelStorei(L.UNPACK_SKIP_PIXELS,En),_.pixelStorei(L.UNPACK_SKIP_ROWS,Wn),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Ii),Le===0&&W.generateMipmaps&&L.generateMipmap(Fe),_.unbindTexture()},this.initRenderTarget=function(y){P.get(y).__webglFramebuffer===void 0&&V.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?V.setTextureCube(y,0):y.isData3DTexture?V.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?V.setTexture2DArray(y,0):V.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){ee=0,G=0,ne=null,_.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=ct._getUnpackColorSpace()}}const Dd={type:"change"},ju={type:"start"},cg={type:"end"},Yo=new Ya,Ld=new Xi,fR=Math.cos(70*wM.DEG2RAD),Ft=new Y,dn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jl=1e-6;class hR extends pE{constructor(e,n=null){super(e,n),this.state=vt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new ji,this._lastTargetPosition=new Y,this._quat=new ji().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rd,this._sphericalDelta=new rd,this._scale=1,this._panOffset=new Y,this._rotateStart=new Je,this._rotateEnd=new Je,this._rotateDelta=new Je,this._panStart=new Je,this._panEnd=new Je,this._panDelta=new Je,this._dollyStart=new Je,this._dollyEnd=new Je,this._dollyDelta=new Je,this._dollyDirection=new Y,this._mouse=new Je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pR.bind(this),this._onPointerDown=dR.bind(this),this._onPointerUp=mR.bind(this),this._onContextMenu=MR.bind(this),this._onMouseWheel=vR.bind(this),this._onKeyDown=xR.bind(this),this._onTouchStart=SR.bind(this),this._onTouchMove=yR.bind(this),this._onMouseDown=gR.bind(this),this._onMouseMove=_R.bind(this),this._interceptControlDown=ER.bind(this),this._interceptControlUp=bR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dd),this.update(),this.state=vt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Ft.copy(n).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),s<-Math.PI?s+=dn:s>Math.PI&&(s-=dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yo.origin.copy(this.object.position),Yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yo.direction))<fR?this.object.lookAt(this.target):(Ld.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yo.intersectPlane(Ld,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jl||this._lastTargetPosition.distanceToSquared(this.target)>Jl?(this.dispatchEvent(Dd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ft.setFromMatrixColumn(n,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,n){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(n,1):(Ft.setFromMatrixColumn(n,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Je,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function dR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function pR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function mR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cg),this.state=vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function gR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=vt.DOLLY;break;case js.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}break;case js.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(ju)}function _R(t){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function vR(t){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(t.preventDefault(),this.dispatchEvent(ju),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(cg))}function xR(t){this.enabled!==!1&&this._handleKeyDown(t)}function SR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=vt.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=vt.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(ju)}function yR(t){switch(this._trackPointer(t),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=vt.NONE}}function MR(t){this.enabled!==!1&&t.preventDefault()}function ER(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const TR={class:"page-card"},AR={class:"media-controls"},wR={class:"segmented-control"},RR={key:0,class:"stream-start-time"},CR={key:0,value:"",disabled:""},PR=["value"],DR=["disabled"],LR=["value"],IR={class:"switch-control"},NR={class:"segmented-control"},UR={key:0,class:"placeholder"},OR={key:1,class:"stream-workspace"},FR={class:"stream-main"},BR={key:0,class:"video-viewport"},zR=["src","title"],HR={key:0,class:"detection-layer"},VR={key:1,class:"video-viewport"},kR=["src"],GR={key:0,class:"detection-layer"},WR={class:"video-playback-controls"},XR=["max","value"],qR={key:2,class:"placeholder"},YR={class:"stream-sidebar"},$R={key:0,class:"side-section screw-position-card"},KR={class:"absolute-position"},ZR={key:2,class:"telemetry-dashboard"},JR={class:"position-scene-card"},jR={class:"fusion-data-card"},QR={class:"current-position"},eC={class:"sensor-columns"},tC={class:"uwb-range-grid"},nC={class:"imu-readout"},iC=["disabled"],sC={key:3,class:"success"},rC={key:4,class:"alert"},oC={__name:"StreamPage",setup(t){const e=at([]),n=at([]),i=at([]),s=at("history"),r=at(""),o=at(""),a=at("color"),l=at("ekf"),c=at(!0),u=at(0),f=at(0),h=at(!1),p=at(null),g=at(null),S=at(!0),m=at(!1),d=at(""),M=at(""),E=at([]),x=at(null),R=at(null),T=[{id:1,x:0,y:0,z:0},{id:2,x:20,y:0,z:0},{id:3,x:0,y:12,z:0},{id:4,x:20,y:12,z:0},{id:5,x:0,y:0,z:2.5},{id:6,x:20,y:0,z:2.5},{id:7,x:0,y:12,z:2.5},{id:8,x:20,y:12,z:2.5}];let I,v,C,O,N,z,ie,oe,X,ee,G,ne;const he=Tt(()=>e.value.filter(A=>!A.endTime).sort((A,P)=>new Date(P.startTime)-new Date(A.startTime))[0]||null),xe=Tt(()=>e.value.filter(A=>{var P;return A._id!==((P=he.value)==null?void 0:P._id)})),ve=Tt(()=>{var A;return(A=he.value)!=null&&A.startTime?new Date(he.value.startTime).toLocaleString("zh-TW"):"尚未開始作業"}),ye=Tt(()=>n.value.filter(A=>A.kind===a.value||A.kind==="combined")),Ye=Tt(()=>ye.value.find(A=>A.filename===o.value)),it=Tt(()=>{const A=i.value.filter(P=>{var V;return P.imageId===((V=Ye.value)==null?void 0:V.filename)});return A.length?A:i.value}),je=Tt(()=>({_id:"simulated-screw",objectClass:"螺絲",depth:120,bbox:{x:860,y:465,width:200,height:150}})),q=Tt(()=>{var V;if(s.value==="live")return i.value.at(-1)||je.value;if(!it.value.length)return je.value;const A=new Date(it.value[0].timestamp).getTime()||((V=Ye.value)!=null&&V.startedAt?Ye.value.startedAt*1e3:null);if(!A)return it.value[0]||je.value;const P=A+u.value*1e3;return it.value.reduce((ce,fe)=>Math.abs(new Date(fe.timestamp).getTime()-P)<Math.abs(new Date(ce.timestamp).getTime()-P)?fe:ce)}),F=Tt(()=>["example_object","screw_simulated"].includes(q.value.objectClass)?"螺絲":q.value.objectClass),K=Tt(()=>`http://localhost:8889/${a.value==="depth"?"cam-depth":"cam-color"}`),te=A=>Number(A??0).toFixed(3),_e=A=>new Y(Number((A==null?void 0:A.x)||0),Number((A==null?void 0:A.z)||0),Number((A==null?void 0:A.y)||0)),Me=A=>_e(A),w=(A,P)=>{A.userData.hoverLabel=P},D=A=>{const P=new ms,V=new ko({color:3900150,roughness:.35,metalness:.35}),ce=new jt(new Ts(.24,.12,.24),V),fe=new jt(new Ts(.1,.16,.1),V);return fe.position.y=.14,P.add(ce,fe),P.position.copy(Me(A)),w(P,`基地站 ${A.id}：X ${A.x}、Y ${A.y}、Z ${A.z} m`),P},B=()=>{const A=new ms,P=new ko({color:16096779,metalness:.72,roughness:.25}),V=new jt(new io(.045,.045,.25,16),P);V.rotation.z=Math.PI/2;const ce=new jt(new io(.105,.105,.045,16),P);return ce.rotation.z=Math.PI/2,ce.position.x=-.14,A.add(V,ce),A},Z=()=>{if(!C||!g.value||!z||!ie)return;const A=g.value.telemetry;z.position.copy(_e(A.position));const P=Math.PI/180,V=A.orientation;z.rotation.set(V.pitch*P,-V.yaw*P,V.roll*P,"YXZ"),ie.position.copy(_e(g.value.absolutePosition)),w(z,`設備：X ${te(A.position.x)}、Y ${te(A.position.y)}、Z ${te(A.position.z)} m；Roll ${te(V.roll)}°、Pitch ${te(V.pitch)}°、Yaw ${te(V.yaw)}°`),w(ie,`螺絲：X ${te(g.value.absolutePosition.x)}、Y ${te(g.value.absolutePosition.y)}、Z ${te(g.value.absolutePosition.z)} m`);const ce=new fn().setFromPoints(E.value.map(_e));oe.geometry.dispose(),oe.geometry=ce},k=async()=>{if(await Oa(),v||!x.value){Z();return}C=new VM,C.background=new ot(16777215),O=new An(42,1,.1,100),O.position.set(25,19,26),v=new uR({antialias:!0}),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.value.appendChild(v.domElement),N=new hR(O,v.domElement),N.target.set(10,1.1,6),N.enableDamping=!0,N.minDistance=8,N.maxDistance=42,C.add(new oE(16777215,13358561,2));const A=new cE(16777215,2.5);A.position.set(5,7,4),C.add(A);const P=new jt(new mo(20,12),new ko({color:16317180,roughness:.95}));P.rotation.x=-Math.PI/2,P.position.set(10,-.02,6),C.add(P);const V=new dE(20,20,13358561,14870768);V.scale.z=.6,V.position.set(10,0,6),C.add(V),T.forEach(re=>C.add(D(re))),z=new ms;const ce=new jt(new Zu(.12,20,16),new ko({color:1096065,emissive:289870,emissiveIntensity:.35})),fe=new jt(new Ku(.45,1.2,24,1,!0),new qu({color:3462041,transparent:!0,opacity:.2,side:ei}));fe.rotation.x=-Math.PI/2,fe.position.z=.6,z.add(ce,fe),C.add(z),ie=B(),C.add(ie),oe=new Km(new fn,new $u({color:14427686,linewidth:1})),C.add(oe),X=new hE,ee=new Je,v.domElement.addEventListener("pointermove",pe),ne=new ResizeObserver(J),ne.observe(x.value),J(),Z(),de()},J=()=>{if(!v||!x.value)return;const{clientWidth:A,clientHeight:P}=x.value;!A||!P||(v.setSize(A,P),O.aspect=A/P,O.updateProjectionMatrix())},pe=A=>{if(!v||!R.value)return;const P=v.domElement.getBoundingClientRect();ee.set((A.clientX-P.left)/P.width*2-1,-((A.clientY-P.top)/P.height)*2+1),X.setFromCamera(ee,O);const V=X.intersectObjects(C.children,!0).map(ce=>{let fe=ce.object;for(;fe&&!fe.userData.hoverLabel;)fe=fe.parent;return fe}).find(Boolean);R.value.style.display=V?"block":"none",V&&(R.value.textContent=V.userData.hoverLabel,R.value.style.left=`${A.clientX-P.left+12}px`,R.value.style.top=`${A.clientY-P.top+12}px`)},de=()=>{G=requestAnimationFrame(de),N.update(),v.render(C,O)},me=()=>{var A;cancelAnimationFrame(G),ne==null||ne.disconnect(),(A=v==null?void 0:v.domElement)==null||A.removeEventListener("pointermove",pe),v==null||v.dispose(),v=null},ae=async()=>{var A,P,V;if(n.value=[],i.value=[],o.value="",u.value=0,!!r.value)try{const[ce,fe]=await Promise.all([Sn.get(`/videos/${r.value}`),Sn.get(`/detections/${r.value}`)]);n.value=ce.data,i.value=fe.data.sort((re,le)=>new Date(re.timestamp)-new Date(le.timestamp)),o.value=((A=ye.value[0])==null?void 0:A.filename)||"",await Ee()}catch(ce){d.value=((V=(P=ce.response)==null?void 0:P.data)==null?void 0:V.error)||"無法讀取歷史影片或偵測資料。"}},Ee=async()=>{var A,P,V;if(r.value)try{const ce=q.value._id!=="simulated-screw"?{detectionId:q.value._id}:{};g.value=(await Sn.get(`/positioning/latest/${r.value}`,{params:ce})).data;const fe=(A=g.value.telemetry)==null?void 0:A.position;fe&&(!E.value.length||JSON.stringify(E.value.at(-1))!==JSON.stringify(fe))&&(E.value=[...E.value.slice(-39),{...fe}]),await k(),Z()}catch(ce){d.value=((V=(P=ce.response)==null?void 0:P.data)==null?void 0:V.error)||"無法讀取定位資料。"}},L=async()=>{if(!(!r.value||s.value!=="live"))try{i.value=(await Sn.get(`/detections/${r.value}`)).data.sort((A,P)=>new Date(A.timestamp)-new Date(P.timestamp))}catch{}},Ue=async()=>{var A,P;m.value=!0,M.value="",d.value="";try{await Sn.post("/simulation/config",{fusionAlgorithm:l.value}),M.value="融合設定已傳送至後端與 AI。",await Ee()}catch(V){d.value=((P=(A=V.response)==null?void 0:A.data)==null?void 0:P.error)||"融合設定傳送失敗。"}finally{m.value=!1}},Ae=A=>{u.value=A.target.currentTime,f.value=A.target.duration||0},b=async()=>{var A,P;(A=p.value)!=null&&A.paused?await p.value.play():(P=p.value)==null||P.pause()},_=A=>{p.value&&(p.value.currentTime=Number(A.target.value))};return vs(r,()=>{E.value=[],s.value==="history"?ae():Ee()}),vs(a,()=>{var A;o.value=((A=ye.value[0])==null?void 0:A.filename)||"",u.value=0}),vs(s,()=>{var A,P;r.value=s.value==="live"?((A=he.value)==null?void 0:A._id)||"":((P=xe.value[0])==null?void 0:P._id)||"",s.value==="live"&&(L(),Ee())}),mr(async()=>{var A;try{const[P,V]=await Promise.all([Sn.get("/operations"),Sn.get("/simulation/config")]);e.value=P.data,l.value=V.data.fusionAlgorithm,r.value=((A=xe.value[0])==null?void 0:A._id)||"",I=window.setInterval(async()=>{await L(),await Ee()},1e3)}catch{d.value="無法讀取系統資料。"}finally{S.value=!1}}),Mu(()=>{window.clearInterval(I),me()}),(A,P)=>{var V,ce,fe,re,le,Se,Ne,Te,be,We,$e,Qe;return Be(),He("section",TR,[P[23]||(P[23]=$("div",{class:"section-title"},[$("p",{class:"eyebrow"},"Media"),$("h2",null,"影像串流與末端定位")],-1)),$("div",AR,[$("div",wR,[$("button",{class:Kn({active:s.value==="history"}),type:"button",onClick:P[0]||(P[0]=U=>s.value="history")},"歷史影片",2),$("button",{class:Kn({active:s.value==="live"}),type:"button",onClick:P[1]||(P[1]=U=>s.value="live")},"目前串流",2)]),s.value==="live"?(Be(),He("p",RR,"開始時間："+Oe(ve.value),1)):(Be(),He(Dt,{key:1},[$("label",null,[P[10]||(P[10]=In("作業",-1)),Ir($("select",{"onUpdate:modelValue":P[2]||(P[2]=U=>r.value=U)},[xe.value.length?(Be(),He("option",CR,"選擇歷史作業")):Ln("",!0),(Be(!0),He(Dt,null,ri(xe.value,U=>(Be(),He("option",{key:U._id,value:U._id},Oe(new Date(U.startTime).toLocaleString("zh-TW")),9,PR))),128))],512),[[ll,r.value]])]),$("label",null,[P[11]||(P[11]=In("影片",-1)),Ir($("select",{"onUpdate:modelValue":P[3]||(P[3]=U=>o.value=U),disabled:!ye.value.length},[(Be(!0),He(Dt,null,ri(ye.value,U=>(Be(),He("option",{key:U.filename,value:U.filename},Oe(U.filename),9,LR))),128))],8,DR),[[ll,o.value]])])],64)),$("label",IR,[Ir($("input",{"onUpdate:modelValue":P[4]||(P[4]=U=>c.value=U),type:"checkbox"},null,512),[[P0,c.value]]),P[12]||(P[12]=In(" 顯示螺絲偵測",-1))]),$("div",NR,[$("button",{class:Kn({active:a.value==="color"}),type:"button",onClick:P[5]||(P[5]=U=>a.value="color")},"光學影像",2),$("button",{class:Kn({active:a.value==="depth"}),type:"button",onClick:P[6]||(P[6]=U=>a.value="depth")},"深度影像",2)])]),S.value?(Be(),He("p",UR,"正在讀取資料…")):(Be(),He("div",OR,[$("div",FR,[s.value==="live"?(Be(),He("div",BR,[(Be(),He("iframe",{key:K.value,class:"live-stream-frame",src:K.value,title:a.value==="depth"?"目前深度串流":"目前光學串流",allow:"autoplay; fullscreen"},null,8,zR)),c.value?(Be(),He("div",HR,[$("div",{class:Kn(["detection-box",{"label-below":q.value.bbox.y<30}]),style:Xr({left:`${q.value.bbox.x/1920*100}%`,top:`${q.value.bbox.y/1080*100}%`,width:`${q.value.bbox.width/1920*100}%`,height:`${q.value.bbox.height/1080*100}%`})},[$("span",null,Oe(F.value)+" · "+Oe(q.value.depth),1)],6)])):Ln("",!0)])):Ye.value?(Be(),He("div",VR,[(Be(),He("video",{key:Ye.value.filename,ref_key:"videoPlayer",ref:p,class:Kn(["video-source",{"show-depth":Ye.value.kind==="combined"&&a.value==="depth"}]),src:Ye.value.url,playsinline:"",onLoadedmetadata:Ae,onTimeupdate:Ae,onPlay:P[7]||(P[7]=U=>h.value=!0),onPause:P[8]||(P[8]=U=>h.value=!1)},null,42,kR)),c.value?(Be(),He("div",GR,[$("div",{class:Kn(["detection-box",{"label-below":q.value.bbox.y<30}]),style:Xr({left:`${q.value.bbox.x/1920*100}%`,top:`${q.value.bbox.y/1080*100}%`,width:`${q.value.bbox.width/1920*100}%`,height:`${q.value.bbox.height/1080*100}%`})},[$("span",null,Oe(F.value)+" · "+Oe(q.value.depth),1)],6)])):Ln("",!0),$("div",WR,[$("button",{type:"button",onClick:b},Oe(h.value?"暫停":"播放"),1),$("input",{type:"range",min:"0",max:f.value,step:"0.01",value:u.value,onInput:_},null,40,XR),$("span",null,Oe(Math.floor(u.value))+" / "+Oe(Math.floor(f.value))+" 秒",1)])])):(Be(),He("p",qR,"此作業尚未找到歷史影片。"))]),$("aside",YR,[g.value?(Be(),He("section",$R,[P[14]||(P[14]=$("h3",null,"螺絲定位",-1)),$("p",null,Oe(F.value)+"　深度 "+Oe(q.value.depth),1),$("p",null,[In("模型："+Oe(g.value.detection.detectionAlgorithm),1),P[13]||(P[13]=$("br",null,null,-1)),In("融合："+Oe(g.value.fusionAlgorithm),1)]),$("p",null,"相機座標："+Oe(te(g.value.cameraPosition.x))+", "+Oe(te(g.value.cameraPosition.y))+", "+Oe(te(g.value.cameraPosition.z))+" m",1),$("p",KR,"融合絕對座標："+Oe(te(g.value.absolutePosition.x))+", "+Oe(te(g.value.absolutePosition.y))+", "+Oe(te(g.value.absolutePosition.z))+" m",1)])):Ln("",!0)])])),g.value?(Be(),He("section",ZR,[$("div",JR,[P[15]||(P[15]=$("div",{class:"scene-heading"},[$("div",null,[$("h3",null,"操作空間建模")]),$("span",null,"拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標")],-1)),$("div",{ref_key:"sceneContainer",ref:x,class:"three-scene"},[$("div",{ref_key:"sceneTooltip",ref:R,class:"three-tooltip"},null,512)],512),P[16]||(P[16]=oo('<div class="scene-legend"><span><i class="legend-anchor"></i>基地站</span><span><i class="legend-device"></i>設備／攝影機光錐</span><span><i class="legend-screw"></i>螺絲</span><span><i class="legend-trail"></i>移動軌跡</span></div>',1))]),$("aside",jR,[P[22]||(P[22]=$("h3",null,"UWB + IMU 融合資料",-1)),$("div",QR,[P[17]||(P[17]=$("strong",null,"ES-EKF 輸出設備位置",-1)),$("span",null,"X "+Oe(te(g.value.telemetry.position.x))+"　Y "+Oe(te(g.value.telemetry.position.y))+"　Z "+Oe(te(g.value.telemetry.position.z))+" m",1)]),$("div",eC,[$("div",null,[P[18]||(P[18]=$("h4",null,"UWB：8 個基地站距離（m）",-1)),$("div",tC,[(Be(!0),He(Dt,null,ri(g.value.telemetry.uwbRanges||[],U=>(Be(),He("span",{key:U.stationId},"站 "+Oe(U.stationId+1)+"："+Oe(te(U.distance)),1))),128))])]),$("div",nC,[P[19]||(P[19]=$("h4",null,"IMU 即時量測",-1)),$("p",null,"加速度："+Oe(te((ce=(V=g.value.telemetry.imu)==null?void 0:V.acceleration)==null?void 0:ce.x))+", "+Oe(te((re=(fe=g.value.telemetry.imu)==null?void 0:fe.acceleration)==null?void 0:re.y))+", "+Oe(te((Se=(le=g.value.telemetry.imu)==null?void 0:le.acceleration)==null?void 0:Se.z))+" m/s²",1),$("p",null,"角速度："+Oe(te((Te=(Ne=g.value.telemetry.imu)==null?void 0:Ne.gyroscope)==null?void 0:Te.x))+", "+Oe(te((We=(be=g.value.telemetry.imu)==null?void 0:be.gyroscope)==null?void 0:We.y))+", "+Oe(te((Qe=($e=g.value.telemetry.imu)==null?void 0:$e.gyroscope)==null?void 0:Qe.z))+" °/s",1),$("p",null,"姿態：Roll "+Oe(te(g.value.telemetry.orientation.roll))+"°、Pitch "+Oe(te(g.value.telemetry.orientation.pitch))+"°、Yaw "+Oe(te(g.value.telemetry.orientation.yaw))+"°",1)])]),$("label",null,[P[21]||(P[21]=In("UWB + IMU 融合演算法",-1)),Ir($("select",{"onUpdate:modelValue":P[9]||(P[9]=U=>l.value=U)},[...P[20]||(P[20]=[$("option",{value:"ekf"},"Error-State Extended Kalman Filter (ES-EKF)",-1),$("option",{value:"complementary"},"Complementary Filter",-1),$("option",{value:"weighted_average"},"Weighted Average",-1)])],512),[[ll,l.value]])]),$("button",{type:"button",disabled:m.value,onClick:Ue},Oe(m.value?"傳送中…":"套用融合設定"),9,iC)])])):Ln("",!0),M.value?(Be(),He("p",sC,Oe(M.value),1)):Ln("",!0),d.value?(Be(),He("p",rC,Oe(d.value),1)):Ln("",!0)])}}},aC={},lC={class:"page-card"};function cC(t,e){return Be(),He("section",lC,[...e[0]||(e[0]=[oo('<div class="section-title"><p class="eyebrow">Media</p><h2>語音提示查詢</h2></div><article class="panel"><h3>提示內容</h3><div class="list-card"><div class="item-row"><span>提示 1</span><strong>請保持安全距離</strong></div><div class="item-row"><span>提示 2</span><strong>區域偵測已完成</strong></div><div class="item-row"><span>提示 3</span><strong>即將開始下一段任務</strong></div></div></article>',2)])])}const uC=vr(aC,[["render",cC]]),fC=[{path:"/",name:"home",component:ry},{path:"/account/login",name:"account-login",component:cy},{path:"/account/profile",name:"account-profile",component:dy},{path:"/account/password",name:"account-password",component:_y},{path:"/guide",name:"guide",component:yy},{path:"/technology",name:"technology",component:Ty},{path:"/history/object",name:"history-object",component:Dy},{path:"/history/tasks",name:"history-tasks",component:Fy},{path:"/history/operations",name:"history-operations",component:Gy},{path:"/media/stream",name:"media-stream",component:oC},{path:"/media/voice",name:"media-voice",component:uC}],hC=zv({history:xv(),routes:fC});I0($v).use(hC).mount("#app");
