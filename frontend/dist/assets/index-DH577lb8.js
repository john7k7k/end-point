(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Au(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Tt={},nr=[],li=()=>{},qh=()=>!1,Wa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xa=t=>t.startsWith("onUpdate:"),Kt=Object.assign,wu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rg=Object.prototype.hasOwnProperty,_t=(t,e)=>Rg.call(t,e),Ze=Array.isArray,ir=t=>xo(t)==="[object Map]",Mr=t=>xo(t)==="[object Set]",Af=t=>xo(t)==="[object Date]",st=t=>typeof t=="function",It=t=>typeof t=="string",hi=t=>typeof t=="symbol",xt=t=>t!==null&&typeof t=="object",$h=t=>(xt(t)||st(t))&&st(t.then)&&st(t.catch),Yh=Object.prototype.toString,xo=t=>Yh.call(t),Cg=t=>xo(t).slice(8,-1),Kh=t=>xo(t)==="[object Object]",Ru=t=>It(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Jr=Au(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pg=/-\w/g,kn=qa(t=>t.replace(Pg,e=>e.slice(1).toUpperCase())),Dg=/\B([A-Z])/g,ss=qa(t=>t.replace(Dg,"-$1").toLowerCase()),Zh=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),hl=qa(t=>t?`on${Zh(t)}`:""),si=(t,e)=>!Object.is(t,e),ca=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Jh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},$a=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wf;const Ya=()=>wf||(wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ro(t){if(Ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=It(i)?Ug(i):ro(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(It(t)||xt(t))return t}const Lg=/;(?![^(]*\))/g,Ig=/:([^]+)/,Ng=/\/\*[^]*?\*\//g;function Ug(t){const e={};return t.replace(Ng,"").split(Lg).forEach(n=>{if(n){const i=n.split(Ig);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wn(t){let e="";if(It(t))e=t;else if(Ze(t))for(let n=0;n<t.length;n++){const i=wn(t[n]);i&&(e+=i+" ")}else if(xt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Og="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fg=Au(Og);function jh(t){return!!t||t===""}function Bg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Er(t[i],e[i]);return n}function Er(t,e){if(t===e)return!0;let n=Af(t),i=Af(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=hi(t),i=hi(e),n||i)return t===e;if(n=Ze(t),i=Ze(e),n||i)return n&&i?Bg(t,e):!1;if(n=xt(t),i=xt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Er(t[o],e[o]))return!1}}return String(t)===String(e)}function Cu(t,e){return t.findIndex(n=>Er(n,e))}const Qh=t=>!!(t&&t.__v_isRef===!0),Ae=t=>It(t)?t:t==null?"":Ze(t)||xt(t)&&(t.toString===Yh||!st(t.toString))?Qh(t)?Ae(t.value):JSON.stringify(t,ep,2):String(t),ep=(t,e)=>Qh(e)?ep(t,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[pl(i,r)+" =>"]=s,n),{})}:Mr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pl(n))}:hi(e)?pl(e):xt(e)&&!Ze(e)&&!Kh(e)?String(e):e,pl=(t,e="")=>{var n;return hi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class zg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&qt&&(qt.active?(this.parent=qt,this.index=(qt.scopes||(qt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=qt;try{return qt=this,e()}finally{qt=n}}}on(){++this._on===1&&(this.prevScope=qt,qt=this)}off(){if(this._on>0&&--this._on===0){if(qt===this)qt=this.prevScope;else{let e=qt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Hg(){return qt}let Rt;const ml=new WeakSet;class tp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qt&&(qt.active?qt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ml.has(this)&&(ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ip(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rf(this),sp(this);const e=Rt,n=Gn;Rt=this,Gn=!0;try{return this.fn()}finally{rp(this),Rt=e,Gn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lu(e);this.deps=this.depsTail=void 0,Rf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hc(this)&&this.run()}get dirty(){return hc(this)}}let np=0,jr,Qr;function ip(t,e=!1){if(t.flags|=8,e){t.next=Qr,Qr=t;return}t.next=jr,jr=t}function Pu(){np++}function Du(){if(--np>0)return;if(Qr){let e=Qr;for(Qr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;jr;){let e=jr;for(jr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function sp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Lu(i),Vg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function hc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(op(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function op(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===oo)||(t.globalVersion=oo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!hc(t))))return;t.flags|=2;const e=t.dep,n=Rt,i=Gn;Rt=t,Gn=!0;try{sp(t);const s=t.fn(t._value);(e.version===0||si(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Rt=n,Gn=i,rp(t),t.flags&=-3}}function Lu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Lu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gn=!0;const ap=[];function Di(){ap.push(Gn),Gn=!1}function Li(){const t=ap.pop();Gn=t===void 0?!0:t}function Rf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Rt;Rt=void 0;try{e()}finally{Rt=n}}}let oo=0;class kg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Iu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Rt||!Gn||Rt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Rt)n=this.activeLink=new kg(Rt,this),Rt.deps?(n.prevDep=Rt.depsTail,Rt.depsTail.nextDep=n,Rt.depsTail=n):Rt.deps=Rt.depsTail=n,lp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Rt.depsTail,n.nextDep=void 0,Rt.depsTail.nextDep=n,Rt.depsTail=n,Rt.deps===n&&(Rt.deps=i)}return n}trigger(e){this.version++,oo++,this.notify(e)}notify(e){Pu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Du()}}}function lp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)lp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pc=new WeakMap,Es=Symbol(""),mc=Symbol(""),ao=Symbol("");function sn(t,e,n){if(Gn&&Rt){let i=pc.get(t);i||pc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Iu),s.map=i,s.key=n),s.track()}}function Ti(t,e,n,i,s,r){const o=pc.get(t);if(!o){oo++;return}const a=l=>{l&&l.trigger()};if(Pu(),e==="clear")o.forEach(a);else{const l=Ze(t),c=l&&Ru(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ao||!hi(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ao)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Es)),ir(t)&&a(o.get(mc)));break;case"delete":l||(a(o.get(Es)),ir(t)&&a(o.get(mc)));break;case"set":ir(t)&&a(o.get(Es));break}}Du()}function Fs(t){const e=gt(t);return e===t?e:(sn(e,"iterate",ao),Un(t)?e:e.map(Xn))}function Ka(t){return sn(t=gt(t),"iterate",ao),t}function ti(t,e){return Ii(t)?ur(bs(t)?Xn(e):e):Xn(e)}const Gg={__proto__:null,[Symbol.iterator](){return gl(this,Symbol.iterator,t=>ti(this,t))},concat(...t){return Fs(this).concat(...t.map(e=>Ze(e)?Fs(e):e))},entries(){return gl(this,"entries",t=>(t[1]=ti(this,t[1]),t))},every(t,e){return gi(this,"every",t,e,void 0,arguments)},filter(t,e){return gi(this,"filter",t,e,n=>n.map(i=>ti(this,i)),arguments)},find(t,e){return gi(this,"find",t,e,n=>ti(this,n),arguments)},findIndex(t,e){return gi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return gi(this,"findLast",t,e,n=>ti(this,n),arguments)},findLastIndex(t,e){return gi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return gi(this,"forEach",t,e,void 0,arguments)},includes(...t){return _l(this,"includes",t)},indexOf(...t){return _l(this,"indexOf",t)},join(t){return Fs(this).join(t)},lastIndexOf(...t){return _l(this,"lastIndexOf",t)},map(t,e){return gi(this,"map",t,e,void 0,arguments)},pop(){return Ur(this,"pop")},push(...t){return Ur(this,"push",t)},reduce(t,...e){return Cf(this,"reduce",t,e)},reduceRight(t,...e){return Cf(this,"reduceRight",t,e)},shift(){return Ur(this,"shift")},some(t,e){return gi(this,"some",t,e,void 0,arguments)},splice(...t){return Ur(this,"splice",t)},toReversed(){return Fs(this).toReversed()},toSorted(t){return Fs(this).toSorted(t)},toSpliced(...t){return Fs(this).toSpliced(...t)},unshift(...t){return Ur(this,"unshift",t)},values(){return gl(this,"values",t=>ti(this,t))}};function gl(t,e,n){const i=Ka(t),s=i[e]();return i!==t&&!Un(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const Wg=Array.prototype;function gi(t,e,n,i,s,r){const o=Ka(t),a=o!==t&&!Un(t),l=o[e];if(l!==Wg[e]){const f=l.apply(t,r);return a?Xn(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,ti(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Cf(t,e,n,i){const s=Ka(t),r=s!==t&&!Un(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=ti(t,c)),n.call(this,c,ti(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?ti(t,l):l}function _l(t,e,n){const i=gt(t);sn(i,"iterate",ao);const s=i[e](...n);return(s===-1||s===!1)&&Ou(n[0])?(n[0]=gt(n[0]),i[e](...n)):s}function Ur(t,e,n=[]){Di(),Pu();const i=gt(t)[e].apply(t,n);return Du(),Li(),i}const Xg=Au("__proto__,__v_isRef,__isVue"),cp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hi));function qg(t){hi(t)||(t=String(t));const e=gt(this);return sn(e,"has",t),e.hasOwnProperty(t)}class up{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?n_:pp:r?hp:dp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!s){let l;if(o&&(l=Gg[n]))return l;if(n==="hasOwnProperty")return qg}const a=Reflect.get(e,n,ln(e)?e:i);if((hi(n)?cp.has(n):Xg(n))||(s||sn(e,"get",n),r))return a;if(ln(a)){const l=o&&Ru(n)?a:a.value;return s&&xt(l)?_c(l):l}return xt(a)?s?_c(a):br(a):a}}class fp extends up{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Ze(e)&&Ru(n);if(!this._isShallow){const c=Ii(r);if(!Un(i)&&!Ii(i)&&(r=gt(r),i=gt(i)),!o&&ln(r)&&!ln(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:_t(e,n),l=Reflect.set(e,n,i,ln(e)?e:s);return e===gt(s)&&l&&(a?si(i,r)&&Ti(e,"set",n,i):Ti(e,"add",n,i)),l}deleteProperty(e,n){const i=_t(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ti(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!hi(n)||!cp.has(n))&&sn(e,"has",n),i}ownKeys(e){return sn(e,"iterate",Ze(e)?"length":Es),Reflect.ownKeys(e)}}class $g extends up{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Yg=new fp,Kg=new $g,Zg=new fp(!0);const gc=t=>t,Lo=t=>Reflect.getPrototypeOf(t);function Jg(t,e,n){return function(...i){const s=this.__v_raw,r=gt(s),o=ir(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?gc:e?ur:Xn;return!e&&sn(r,"iterate",l?mc:Es),Kt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Io(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jg(t,e){const n={get(s){const r=this.__v_raw,o=gt(r),a=gt(s);t||(si(s,a)&&sn(o,"get",s),sn(o,"get",a));const{has:l}=Lo(o),c=e?gc:t?ur:Xn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&sn(gt(s),"iterate",Es),s.size},has(s){const r=this.__v_raw,o=gt(r),a=gt(s);return t||(si(s,a)&&sn(o,"has",s),sn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=gt(a),c=e?gc:t?ur:Xn;return!t&&sn(l,"iterate",Es),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Kt(n,t?{add:Io("add"),set:Io("set"),delete:Io("delete"),clear:Io("clear")}:{add(s){const r=gt(this),o=Lo(r),a=gt(s),l=!e&&!Un(s)&&!Ii(s)?a:s;return o.has.call(r,l)||si(s,l)&&o.has.call(r,s)||si(a,l)&&o.has.call(r,a)||(r.add(l),Ti(r,"add",l,l)),this},set(s,r){!e&&!Un(r)&&!Ii(r)&&(r=gt(r));const o=gt(this),{has:a,get:l}=Lo(o);let c=a.call(o,s);c||(s=gt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?si(r,u)&&Ti(o,"set",s,r):Ti(o,"add",s,r),this},delete(s){const r=gt(this),{has:o,get:a}=Lo(r);let l=o.call(r,s);l||(s=gt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ti(r,"delete",s,void 0),c},clear(){const s=gt(this),r=s.size!==0,o=s.clear();return r&&Ti(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Jg(s,t,e)}),n}function Nu(t,e){const n=jg(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(_t(n,s)&&s in i?n:i,s,r)}const Qg={get:Nu(!1,!1)},e_={get:Nu(!1,!0)},t_={get:Nu(!0,!1)};const dp=new WeakMap,hp=new WeakMap,pp=new WeakMap,n_=new WeakMap;function i_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function br(t){return Ii(t)?t:Uu(t,!1,Yg,Qg,dp)}function mp(t){return Uu(t,!1,Zg,e_,hp)}function _c(t){return Uu(t,!0,Kg,t_,pp)}function Uu(t,e,n,i,s){if(!xt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=i_(Cg(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function bs(t){return Ii(t)?bs(t.__v_raw):!!(t&&t.__v_isReactive)}function Ii(t){return!!(t&&t.__v_isReadonly)}function Un(t){return!!(t&&t.__v_isShallow)}function Ou(t){return t?!!t.__v_raw:!1}function gt(t){const e=t&&t.__v_raw;return e?gt(e):t}function s_(t){return!_t(t,"__v_skip")&&Object.isExtensible(t)&&Jh(t,"__v_skip",!0),t}const Xn=t=>xt(t)?br(t):t,ur=t=>xt(t)?_c(t):t;function ln(t){return t?t.__v_isRef===!0:!1}function Ye(t){return gp(t,!1)}function r_(t){return gp(t,!0)}function gp(t,e){return ln(t)?t:new o_(t,e)}class o_{constructor(e,n){this.dep=new Iu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:gt(e),this._value=n?e:Xn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Un(e)||Ii(e);e=i?e:gt(e),si(e,n)&&(this._rawValue=e,this._value=i?e:Xn(e),this.dep.trigger())}}function pn(t){return ln(t)?t.value:t}const a_={get:(t,e,n)=>e==="__v_raw"?t:pn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ln(s)&&!ln(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function _p(t){return bs(t)?t:new Proxy(t,a_)}class l_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Iu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=oo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Rt!==this)return ip(this,!0),!0}get value(){const e=this.dep.track();return op(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function c_(t,e,n=!1){let i,s;return st(t)?i=t:(i=t.get,s=t.set),new l_(i,s,n)}const No={},Ea=new WeakMap;let ps;function u_(t,e=!1,n=ps){if(n){let i=Ea.get(n);i||Ea.set(n,i=[]),i.push(t)}}function f_(t,e,n=Tt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=S=>s?S:Un(S)||s===!1||s===0?Ai(S,1):Ai(S);let u,f,d,h,g=!1,v=!1;if(ln(t)?(f=()=>t.value,g=Un(t)):bs(t)?(f=()=>c(t),g=!0):Ze(t)?(v=!0,g=t.some(S=>bs(S)||Un(S)),f=()=>t.map(S=>{if(ln(S))return S.value;if(bs(S))return c(S);if(st(S))return l?l(S,2):S()})):st(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Di();try{d()}finally{Li()}}const S=ps;ps=u;try{return l?l(t,3,[h]):t(h)}finally{ps=S}}:f=li,e&&s){const S=f,A=s===!0?1/0:s;f=()=>Ai(S(),A)}const m=Hg(),p=()=>{u.stop(),m&&m.active&&wu(m.effects,u)};if(r&&e){const S=e;e=(...A)=>{const T=S(...A);return p(),T}}let M=v?new Array(t.length).fill(No):No;const E=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const A=u.run();if(S||s||g||(v?A.some((T,D)=>si(T,M[D])):si(A,M))){d&&d();const T=ps;ps=u;try{const D=[A,M===No?void 0:v&&M[0]===No?[]:M,h];M=A,l?l(e,3,D):e(...D)}finally{ps=T}}}else u.run()};return a&&a(E),u=new tp(f),u.scheduler=o?()=>o(E,!1):E,h=S=>u_(S,!1,u),d=u.onStop=()=>{const S=Ea.get(u);if(S){if(l)l(S,4);else for(const A of S)A();Ea.delete(u)}},e?i?E(!0):M=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ai(t,e=1/0,n){if(e<=0||!xt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ln(t))Ai(t.value,e,n);else if(Ze(t))for(let i=0;i<t.length;i++)Ai(t[i],e,n);else if(Mr(t)||ir(t))t.forEach(i=>{Ai(i,e,n)});else if(Kh(t)){for(const i in t)Ai(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ai(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function So(t,e,n,i){try{return i?t(...i):t()}catch(s){Za(s,e,n)}}function qn(t,e,n,i){if(st(t)){const s=So(t,e,n,i);return s&&$h(s)&&s.catch(r=>{Za(r,e,n)}),s}if(Ze(t)){const s=[];for(let r=0;r<t.length;r++)s.push(qn(t[r],e,n,i));return s}}function Za(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Tt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Di(),So(r,null,10,[t,l,c]),Li();return}}d_(t,n,s,i,o)}function d_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const mn=[];let ei=-1;const sr=[];let $i=null,Qs=0;const vp=Promise.resolve();let ba=null;function Ja(t){const e=ba||vp;return t?e.then(this?t.bind(this):t):e}function h_(t){let e=ei+1,n=mn.length;for(;e<n;){const i=e+n>>>1,s=mn[i],r=lo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Fu(t){if(!(t.flags&1)){const e=lo(t),n=mn[mn.length-1];!n||!(t.flags&2)&&e>=lo(n)?mn.push(t):mn.splice(h_(e),0,t),t.flags|=1,xp()}}function xp(){ba||(ba=vp.then(yp))}function p_(t){Ze(t)?sr.push(...t):$i&&t.id===-1?$i.splice(Qs+1,0,t):t.flags&1||(sr.push(t),t.flags|=1),xp()}function Pf(t,e,n=ei+1){for(;n<mn.length;n++){const i=mn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;mn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sp(t){if(sr.length){const e=[...new Set(sr)].sort((n,i)=>lo(n)-lo(i));if(sr.length=0,$i){$i.push(...e);return}for($i=e,Qs=0;Qs<$i.length;Qs++){const n=$i[Qs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$i=null,Qs=0}}const lo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yp(t){try{for(ei=0;ei<mn.length;ei++){const e=mn[ei];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),So(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ei<mn.length;ei++){const e=mn[ei];e&&(e.flags&=-2)}ei=-1,mn.length=0,Sp(),ba=null,(mn.length||sr.length)&&yp()}}let Nn=null,Mp=null;function Ta(t){const e=Nn;return Nn=t,Mp=t&&t.type.__scopeId||null,e}function vc(t,e=Nn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Ra(-1);const r=Ta(e),o=Ts.length;let a;try{a=t(...s)}finally{for(let l=Ts.length;l>o;l--)qp();Ta(r),i._d&&Ra(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Hn(t,e){if(Nn===null)return t;const n=tl(Nn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Tt]=e[s];r&&(st(r)&&(r={mounted:r,updated:r}),r.deep&&Ai(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ls(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Di(),qn(l,n,8,[t.el,a,t,e]),Li())}}function ua(t,e){if(gn){let n=gn.provides;const i=gn.parent&&gn.parent.provides;i===n&&(n=gn.provides=Object.create(i)),n[t]=e}}function Wn(t,e,n=!1){const i=u0();if(i||rr){let s=rr?rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&st(e)?e.call(i&&i.proxy):e}}const m_=Symbol.for("v-scx"),g_=()=>Wn(m_);function Qi(t,e,n){return Ep(t,e,n)}function Ep(t,e,n=Tt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Kt({},n),l=e&&i||!e&&r!=="post";let c;if(uo){if(r==="sync"){const h=g_();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=li,h.resume=li,h.pause=li,h}}const u=gn;a.call=(h,g,v)=>qn(h,u,g,v);let f=!1;r==="post"?a.scheduler=h=>{yn(h,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Fu(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=f_(t,e,a);return uo&&(c?c.push(d):l&&d()),d}function __(t,e,n){const i=this.proxy,s=It(t)?t.includes(".")?bp(i,t):()=>i[t]:t.bind(i,i);let r;st(e)?r=e:(r=e.handler,n=e);const o=yo(this),a=Ep(s,r.bind(i),n);return o(),a}function bp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const v_=Symbol("_vte"),x_=t=>t.__isTeleport,vl=Symbol("_leaveCb");function Bu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Bu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Tp(t,e){return st(t)?Kt({name:t.name},e,{setup:t}):t}function Ap(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Df(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Aa=new WeakMap;function eo(t,e,n,i,s=!1){if(Ze(t)){t.forEach((v,m)=>eo(v,e&&(Ze(e)?e[m]:e),n,i,s));return}if(to(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&eo(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?tl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Tt?a.refs={}:a.refs,f=a.setupState,d=gt(f),h=f===Tt?qh:v=>Df(u,v)?!1:_t(d,v),g=(v,m)=>!(m&&Df(u,m));if(c!=null&&c!==l){if(Lf(e),It(c))u[c]=null,h(c)&&(f[c]=null);else if(ln(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(st(l))So(l,a,12,[o,u]);else{const v=It(l),m=ln(l);if(v||m){const p=()=>{if(t.f){const M=v?h(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)Ze(M)&&wu(M,r);else if(Ze(M))M.includes(r)||M.push(r);else if(v)u[l]=[r],h(l)&&(f[l]=u[l]);else{const E=[r];g(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else v?(u[l]=o,h(l)&&(f[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const M=()=>{p(),Aa.delete(t)};M.id=-1,Aa.set(t,M),yn(M,n)}else Lf(t),p()}}}function Lf(t){const e=Aa.get(t);e&&(e.flags|=8,Aa.delete(t))}Ya().requestIdleCallback;Ya().cancelIdleCallback;const to=t=>!!t.type.__asyncLoader,wp=t=>t.type.__isKeepAlive;function S_(t,e){Rp(t,"a",e)}function y_(t,e){Rp(t,"da",e)}function Rp(t,e,n=gn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ja(e,i,n),n){let s=n.parent;for(;s&&s.parent;)wp(s.parent.vnode)&&M_(i,e,n,s),s=s.parent}}function M_(t,e,n,i){const s=ja(e,t,i,!0);zu(()=>{wu(i[e],s)},n)}function ja(t,e,n=gn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Di();const a=yo(n),l=qn(e,n,t,o);return a(),Li(),l});return i?s.unshift(r):s.push(r),r}}const Oi=t=>(e,n=gn)=>{(!uo||t==="sp")&&ja(t,(...i)=>e(...i),n)},E_=Oi("bm"),Ls=Oi("m"),b_=Oi("bu"),T_=Oi("u"),A_=Oi("bum"),zu=Oi("um"),w_=Oi("sp"),R_=Oi("rtg"),C_=Oi("rtc");function P_(t,e=gn){ja("ec",t,e)}const D_=Symbol.for("v-ndc");function ci(t,e,n,i){let s;const r=n,o=Ze(t);if(o||It(t)){const a=o&&bs(t);let l=!1,c=!1;a&&(l=!Un(t),c=Ii(t),t=Ka(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?ur(Xn(t[u])):Xn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(xt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const xc=t=>t?Zp(t)?tl(t):xc(t.parent):null,no=Kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xc(t.parent),$root:t=>xc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pp(t),$forceUpdate:t=>t.f||(t.f=()=>{Fu(t.update)}),$nextTick:t=>t.n||(t.n=Ja.bind(t.proxy)),$watch:t=>__.bind(t)}),xl=(t,e)=>t!==Tt&&!t.__isScriptSetup&&_t(t,e),L_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(xl(i,e))return o[e]=1,i[e];if(s!==Tt&&_t(s,e))return o[e]=2,s[e];if(_t(r,e))return o[e]=3,r[e];if(n!==Tt&&_t(n,e))return o[e]=4,n[e];Sc&&(o[e]=0)}}const c=no[e];let u,f;if(c)return e==="$attrs"&&sn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Tt&&_t(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,_t(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return xl(s,e)?(s[e]=n,!0):i!==Tt&&_t(i,e)?(i[e]=n,!0):_t(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Tt&&a[0]!=="$"&&_t(t,a)||xl(e,a)||_t(r,a)||_t(i,a)||_t(no,a)||_t(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_t(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function If(t){return Ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sc=!0;function I_(t){const e=Pp(t),n=t.proxy,i=t.ctx;Sc=!1,e.beforeCreate&&Nf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:E,unmounted:S,render:A,renderTracked:T,renderTriggered:D,errorCaptured:x,serverPrefetch:R,expose:F,inheritAttrs:N,components:k,directives:oe,filters:ne}=e;if(c&&N_(c,i,null),o)for(const W in o){const se=o[W];st(se)&&(i[W]=se.bind(n))}if(s){const W=s.call(n,n);xt(W)&&(t.data=br(W))}if(Sc=!0,r)for(const W in r){const se=r[W],pe=st(se)?se.bind(n,n):st(se.get)?se.get.bind(n,n):li,ye=!st(se)&&st(se.set)?se.set.bind(n):li,ve=pt({get:pe,set:ye});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Te=>ve.value=Te})}if(a)for(const W in a)Cp(a[W],i,n,W);if(l){const W=st(l)?l.call(n):l;Reflect.ownKeys(W).forEach(se=>{ua(se,W[se])})}u&&Nf(u,t,"c");function j(W,se){Ze(se)?se.forEach(pe=>W(pe.bind(n))):se&&W(se.bind(n))}if(j(E_,f),j(Ls,d),j(b_,h),j(T_,g),j(S_,v),j(y_,m),j(P_,x),j(C_,T),j(R_,D),j(A_,M),j(zu,S),j(w_,R),Ze(F))if(F.length){const W=t.exposed||(t.exposed={});F.forEach(se=>{Object.defineProperty(W,se,{get:()=>n[se],set:pe=>n[se]=pe,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===li&&(t.render=A),N!=null&&(t.inheritAttrs=N),k&&(t.components=k),oe&&(t.directives=oe),R&&Ap(t)}function N_(t,e,n=li){Ze(t)&&(t=yc(t));for(const i in t){const s=t[i];let r;xt(s)?"default"in s?r=Wn(s.from||i,s.default,!0):r=Wn(s.from||i):r=Wn(s),ln(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Nf(t,e,n){qn(Ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cp(t,e,n,i){let s=i.includes(".")?bp(n,i):()=>n[i];if(It(t)){const r=e[t];st(r)&&Qi(s,r)}else if(st(t))Qi(s,t.bind(n));else if(xt(t))if(Ze(t))t.forEach(r=>Cp(r,e,n,i));else{const r=st(t.handler)?t.handler.bind(n):e[t.handler];st(r)&&Qi(s,r,t)}}function Pp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>wa(l,c,o,!0)),wa(l,e,o)),xt(e)&&r.set(e,l),l}function wa(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&wa(t,r,n,!0),s&&s.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=U_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const U_={data:Uf,props:Of,emits:Of,methods:$r,computed:$r,beforeCreate:fn,created:fn,beforeMount:fn,mounted:fn,beforeUpdate:fn,updated:fn,beforeDestroy:fn,beforeUnmount:fn,destroyed:fn,unmounted:fn,activated:fn,deactivated:fn,errorCaptured:fn,serverPrefetch:fn,components:$r,directives:$r,watch:F_,provide:Uf,inject:O_};function Uf(t,e){return e?t?function(){return Kt(st(t)?t.call(this,this):t,st(e)?e.call(this,this):e)}:e:t}function O_(t,e){return $r(yc(t),yc(e))}function yc(t){if(Ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fn(t,e){return t?[...new Set([].concat(t,e))]:e}function $r(t,e){return t?Kt(Object.create(null),t,e):e}function Of(t,e){return t?Ze(t)&&Ze(e)?[...new Set([...t,...e])]:Kt(Object.create(null),If(t),If(e??{})):e}function F_(t,e){if(!t)return e;if(!e)return t;const n=Kt(Object.create(null),t);for(const i in e)n[i]=fn(t[i],e[i]);return n}function Dp(){return{app:null,config:{isNativeTag:qh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let B_=0;function z_(t,e){return function(i,s=null){st(i)||(i=Kt({},i)),s!=null&&!xt(s)&&(s=null);const r=Dp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:B_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:g0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&st(u.install)?(o.add(u),u.install(c,...f)):st(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||on(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,tl(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(qn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=rr;rr=c;try{return u()}finally{rr=f}}};return c}}let rr=null;const H_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kn(e)}Modifiers`]||t[`${ss(e)}Modifiers`];function V_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Tt;let s=n;const r=e.startsWith("update:"),o=r&&H_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>It(u)?u.trim():u)),o.number&&(s=n.map($a)));let a,l=i[a=hl(e)]||i[a=hl(kn(e))];!l&&r&&(l=i[a=hl(ss(e))]),l&&qn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qn(c,t,6,s)}}const k_=new WeakMap;function Lp(t,e,n=!1){const i=n?k_:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!st(t)){const l=c=>{const u=Lp(c,e,!0);u&&(a=!0,Kt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(xt(t)&&i.set(t,null),null):(Ze(r)?r.forEach(l=>o[l]=null):Kt(o,r),xt(t)&&i.set(t,o),o)}function Qa(t,e){return!t||!Wa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),_t(t,e[0].toLowerCase()+e.slice(1))||_t(t,ss(e))||_t(t,e))}function Ff(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:v}=t,m=Ta(t);let p,M;try{if(n.shapeFlag&4){const S=s||i,A=S;p=ni(c.call(A,S,u,f,h,d,g)),M=a}else{const S=e;p=ni(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),M=e.props?a:G_(a)}}catch(S){Ts.length=0,Za(S,t,1),p=on(es)}let E=p;if(M&&v!==!1){const S=Object.keys(M),{shapeFlag:A}=E;S.length&&A&7&&(r&&S.some(Xa)&&(M=W_(M,r)),E=fr(E,M,!1,!0))}return n.dirs&&(E=fr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Bu(E,n.transition),p=E,Ta(m),p}const G_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wa(n))&&((e||(e={}))[n]=t[n]);return e},W_=(t,e)=>{const n={};for(const i in t)(!Xa(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function X_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Bf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Ip(o,i,d)&&!Qa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bf(i,o,c):!0:!!o;return!1}function Bf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Ip(e,t,r)&&!Qa(n,r))return!0}return!1}function Ip(t,e,n){const i=t[n],s=e[n];return n==="style"&&xt(i)&&xt(s)?!Er(i,s):i!==s}function q_({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Np={},Up=()=>Object.create(Np),Op=t=>Object.getPrototypeOf(t)===Np;function $_(t,e,n,i=!1){const s={},r=Up();t.propsDefaults=Object.create(null),Fp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:mp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Y_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=gt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Qa(t.emitsOptions,d))continue;const h=e[d];if(l)if(_t(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const g=kn(d);s[g]=Mc(l,a,g,h,t,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Fp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!_t(e,f)&&((u=ss(f))===f||!_t(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Mc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!_t(e,f))&&(delete r[f],c=!0)}c&&Ti(t.attrs,"set","")}function Fp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Jr(l))continue;const c=e[l];let u;s&&_t(s,u=kn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Qa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=gt(n),c=a||Tt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Mc(s,l,f,c[f],t,!_t(c,f))}}return o}function Mc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=_t(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&st(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=yo(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ss(n))&&(i=!0))}return i}const K_=new WeakMap;function Bp(t,e,n=!1){const i=n?K_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!st(t)){const u=f=>{l=!0;const[d,h]=Bp(f,e,!0);Kt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return xt(t)&&i.set(t,nr),nr;if(Ze(r))for(let u=0;u<r.length;u++){const f=kn(r[u]);zf(f)&&(o[f]=Tt)}else if(r)for(const u in r){const f=kn(u);if(zf(f)){const d=r[u],h=o[f]=Ze(d)||st(d)?{type:d}:Kt({},d),g=h.type;let v=!1,m=!0;if(Ze(g))for(let p=0;p<g.length;++p){const M=g[p],E=st(M)&&M.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=st(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||_t(h,"default"))&&a.push(f)}}const c=[o,a];return xt(t)&&i.set(t,c),c}function zf(t){return t[0]!=="$"&&!Jr(t)}const Hu=t=>t==="_"||t==="_ctx"||t==="$stable",Vu=t=>Ze(t)?t.map(ni):[ni(t)],Z_=(t,e,n)=>{if(e._n)return e;const i=vc((...s)=>Vu(e(...s)),n);return i._c=!1,i},zp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Hu(s))continue;const r=t[s];if(st(r))e[s]=Z_(s,r,i);else if(r!=null){const o=Vu(r);e[s]=()=>o}}},Hp=(t,e)=>{const n=Vu(e);t.slots.default=()=>n},Vp=(t,e,n)=>{for(const i in e)(n||!Hu(i))&&(t[i]=e[i])},J_=(t,e,n)=>{const i=t.slots=Up();if(t.vnode.shapeFlag&32){const s=e._;s?(Vp(i,e,n),n&&Jh(i,"_",s,!0)):zp(e,i)}else e&&Hp(t,e)},j_=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Tt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Vp(s,e,n):(r=!e.$stable,zp(e,s)),o=e}else e&&(Hp(t,e),o={default:1});if(r)for(const a in s)!Hu(a)&&o[a]==null&&delete s[a]},yn=i0;function Q_(t){return e0(t)}function e0(t,e){const n=Ya();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=li,insertStaticContent:g}=t,v=(w,C,I,J=null,X=null,Q=null,_e=void 0,ge=null,ae=!!C.dynamicChildren)=>{if(w===C)return;w&&!Or(w,C)&&(J=O(w),Te(w,X,Q,!0),w=null),C.patchFlag===-2&&(ae=!1,C.dynamicChildren=null);const{type:fe,ref:Re,shapeFlag:P}=C;switch(fe){case el:m(w,C,I,J);break;case es:p(w,C,I,J);break;case fa:w==null&&M(C,I,J,_e);break;case At:k(w,C,I,J,X,Q,_e,ge,ae);break;default:P&1?A(w,C,I,J,X,Q,_e,ge,ae):P&6?oe(w,C,I,J,X,Q,_e,ge,ae):(P&64||P&128)&&fe.process(w,C,I,J,X,Q,_e,ge,ae,me)}Re!=null&&X?eo(Re,w&&w.ref,Q,C||w,!C):Re==null&&w&&w.ref!=null&&eo(w.ref,null,Q,w,!0)},m=(w,C,I,J)=>{if(w==null)i(C.el=a(C.children),I,J);else{const X=C.el=w.el;C.children!==w.children&&c(X,C.children)}},p=(w,C,I,J)=>{w==null?i(C.el=l(C.children||""),I,J):C.el=w.el},M=(w,C,I,J)=>{[w.el,w.anchor]=g(w.children,C,I,J,w.el,w.anchor)},E=({el:w,anchor:C},I,J)=>{let X;for(;w&&w!==C;)X=d(w),i(w,I,J),w=X;i(C,I,J)},S=({el:w,anchor:C})=>{let I;for(;w&&w!==C;)I=d(w),s(w),w=I;s(C)},A=(w,C,I,J,X,Q,_e,ge,ae)=>{if(C.type==="svg"?_e="svg":C.type==="math"&&(_e="mathml"),w==null)T(C,I,J,X,Q,_e,ge,ae);else{const fe=w.el&&w.el._isVueCE?w.el:null;try{fe&&fe._beginPatch(),R(w,C,X,Q,_e,ge,ae)}finally{fe&&fe._endPatch()}}},T=(w,C,I,J,X,Q,_e,ge)=>{let ae,fe;const{props:Re,shapeFlag:P,transition:Fe,dirs:Ne}=w;if(ae=w.el=o(w.type,Q,Re&&Re.is,Re),P&8?u(ae,w.children):P&16&&x(w.children,ae,null,J,X,Sl(w,Q),_e,ge),Ne&&ls(w,null,J,"created"),D(ae,w,w.scopeId,_e,J),Re){for(const _ in Re)_!=="value"&&!Jr(_)&&r(ae,_,null,Re[_],Q,J);"value"in Re&&r(ae,"value",null,Re.value,Q),(fe=Re.onVnodeBeforeMount)&&Jn(fe,J,w)}Ne&&ls(w,null,J,"beforeMount");const b=t0(X,Fe);b&&Fe.beforeEnter(ae),i(ae,C,I),((fe=Re&&Re.onVnodeMounted)||b||Ne)&&yn(()=>{try{fe&&Jn(fe,J,w),b&&Fe.enter(ae),Ne&&ls(w,null,J,"mounted")}finally{}},X)},D=(w,C,I,J,X)=>{if(I&&h(w,I),J)for(let Q=0;Q<J.length;Q++)h(w,J[Q]);if(X){let Q=X.subTree;if(C===Q||Xp(Q.type)&&(Q.ssContent===C||Q.ssFallback===C)){const _e=X.vnode;D(w,_e,_e.scopeId,_e.slotScopeIds,X.parent)}}},x=(w,C,I,J,X,Q,_e,ge,ae=0)=>{for(let fe=ae;fe<w.length;fe++){const Re=w[fe]=ge?bi(w[fe]):ni(w[fe]);v(null,Re,C,I,J,X,Q,_e,ge)}},R=(w,C,I,J,X,Q,_e)=>{const ge=C.el=w.el;let{patchFlag:ae,dynamicChildren:fe,dirs:Re}=C;ae|=w.patchFlag&16;const P=w.props||Tt,Fe=C.props||Tt;let Ne;if(I&&cs(I,!1),(Ne=Fe.onVnodeBeforeUpdate)&&Jn(Ne,I,C,w),Re&&ls(C,w,I,"beforeUpdate"),I&&cs(I,!0),fe&&(!w.dynamicChildren||w.dynamicChildren.length!==fe.length)&&(ae=0,_e=!1,fe=null),(P.innerHTML&&Fe.innerHTML==null||P.textContent&&Fe.textContent==null)&&u(ge,""),fe?F(w.dynamicChildren,fe,ge,I,J,Sl(C,X),Q):_e||se(w,C,ge,null,I,J,Sl(C,X),Q,!1),ae>0){if(ae&16)N(ge,P,Fe,I,X);else if(ae&2&&P.class!==Fe.class&&r(ge,"class",null,Fe.class,X),ae&4&&r(ge,"style",P.style,Fe.style,X),ae&8){const b=C.dynamicProps;for(let _=0;_<b.length;_++){const B=b[_],$=P[B],ie=Fe[B];(ie!==$||B==="value")&&r(ge,B,$,ie,X,I)}}ae&1&&w.children!==C.children&&u(ge,C.children)}else!_e&&fe==null&&N(ge,P,Fe,I,X);((Ne=Fe.onVnodeUpdated)||Re)&&yn(()=>{Ne&&Jn(Ne,I,C,w),Re&&ls(C,w,I,"updated")},J)},F=(w,C,I,J,X,Q,_e)=>{for(let ge=0;ge<C.length;ge++){const ae=w[ge],fe=C[ge],Re=ae.el&&(ae.type===At||!Or(ae,fe)||ae.shapeFlag&198)?f(ae.el):I;v(ae,fe,Re,null,J,X,Q,_e,!0)}},N=(w,C,I,J,X)=>{if(C!==I){if(C!==Tt)for(const Q in C)!Jr(Q)&&!(Q in I)&&r(w,Q,C[Q],null,X,J);for(const Q in I){if(Jr(Q))continue;const _e=I[Q],ge=C[Q];_e!==ge&&Q!=="value"&&r(w,Q,ge,_e,X,J)}"value"in I&&r(w,"value",C.value,I.value,X)}},k=(w,C,I,J,X,Q,_e,ge,ae)=>{const fe=C.el=w?w.el:a(""),Re=C.anchor=w?w.anchor:a("");let{patchFlag:P,dynamicChildren:Fe,slotScopeIds:Ne}=C;Ne&&(ge=ge?ge.concat(Ne):Ne),w==null?(i(fe,I,J),i(Re,I,J),x(C.children||[],I,Re,X,Q,_e,ge,ae)):P>0&&P&64&&Fe&&w.dynamicChildren&&w.dynamicChildren.length===Fe.length?(F(w.dynamicChildren,Fe,I,X,Q,_e,ge),(C.key!=null||X&&C===X.subTree)&&kp(w,C,!0)):se(w,C,I,Re,X,Q,_e,ge,ae)},oe=(w,C,I,J,X,Q,_e,ge,ae)=>{C.slotScopeIds=ge,w==null?C.shapeFlag&512?X.ctx.activate(C,I,J,_e,ae):ne(C,I,J,X,Q,_e,ae):G(w,C,ae)},ne=(w,C,I,J,X,Q,_e)=>{const ge=w.component=c0(w,J,X);if(wp(w)&&(ge.ctx.renderer=me),f0(ge,!1,_e),ge.asyncDep){if(X&&X.registerDep(ge,j,_e),!w.el){const ae=ge.subTree=on(es);p(null,ae,C,I),w.placeholder=ae.el}}else j(ge,w,C,I,X,Q,_e)},G=(w,C,I)=>{const J=C.component=w.component;if(X_(w,C,I))if(J.asyncDep&&!J.asyncResolved){W(J,C,I);return}else J.next=C,J.update();else C.el=w.el,J.vnode=C},j=(w,C,I,J,X,Q,_e)=>{const ge=()=>{if(w.isMounted){let{next:P,bu:Fe,u:Ne,parent:b,vnode:_}=w;{const be=Gp(w);if(be){P&&(P.el=_.el,W(w,P,_e)),be.asyncDep.then(()=>{yn(()=>{w.isUnmounted||fe()},X)});return}}let B=P,$;cs(w,!1),P?(P.el=_.el,W(w,P,_e)):P=_,Fe&&ca(Fe),($=P.props&&P.props.onVnodeBeforeUpdate)&&Jn($,b,P,_),cs(w,!0);const ie=Ff(w),Se=w.subTree;w.subTree=ie,v(Se,ie,f(Se.el),O(Se),w,X,Q),P.el=ie.el,B===null&&q_(w,ie.el),Ne&&yn(Ne,X),($=P.props&&P.props.onVnodeUpdated)&&yn(()=>Jn($,b,P,_),X)}else{let P;const{el:Fe,props:Ne}=C,{bm:b,m:_,parent:B,root:$,type:ie}=w,Se=to(C);cs(w,!1),b&&ca(b),!Se&&(P=Ne&&Ne.onVnodeBeforeMount)&&Jn(P,B,C),cs(w,!0);{$.ce&&$.ce._hasShadowRoot()&&$.ce._injectChildStyle(ie,w.parent?w.parent.type:void 0);const be=w.subTree=Ff(w);v(null,be,I,J,w,X,Q),C.el=be.el}if(_&&yn(_,X),!Se&&(P=Ne&&Ne.onVnodeMounted)){const be=C;yn(()=>Jn(P,B,be),X)}(C.shapeFlag&256||B&&to(B.vnode)&&B.vnode.shapeFlag&256)&&w.a&&yn(w.a,X),w.isMounted=!0,C=I=J=null}};w.scope.on();const ae=w.effect=new tp(ge);w.scope.off();const fe=w.update=ae.run.bind(ae),Re=w.job=ae.runIfDirty.bind(ae);Re.i=w,Re.id=w.uid,ae.scheduler=()=>Fu(Re),cs(w,!0),fe()},W=(w,C,I)=>{C.component=w;const J=w.vnode.props;w.vnode=C,w.next=null,Y_(w,C.props,J,I),j_(w,C.children,I),Di(),Pf(w),Li()},se=(w,C,I,J,X,Q,_e,ge,ae=!1)=>{const fe=w&&w.children,Re=w?w.shapeFlag:0,P=C.children,{patchFlag:Fe,shapeFlag:Ne}=C;if(Fe>0){if(Fe&128){ye(fe,P,I,J,X,Q,_e,ge,ae);return}else if(Fe&256){pe(fe,P,I,J,X,Q,_e,ge,ae);return}}Ne&8?(Re&16&&K(fe,X,Q),P!==fe&&u(I,P)):Re&16?Ne&16?ye(fe,P,I,J,X,Q,_e,ge,ae):K(fe,X,Q,!0):(Re&8&&u(I,""),Ne&16&&x(P,I,J,X,Q,_e,ge,ae))},pe=(w,C,I,J,X,Q,_e,ge,ae)=>{w=w||nr,C=C||nr;const fe=w.length,Re=C.length,P=Math.min(fe,Re);let Fe;for(Fe=0;Fe<P;Fe++){const Ne=C[Fe]=ae?bi(C[Fe]):ni(C[Fe]);v(w[Fe],Ne,I,null,X,Q,_e,ge,ae)}fe>Re?K(w,X,Q,!0,!1,P):x(C,I,J,X,Q,_e,ge,ae,P)},ye=(w,C,I,J,X,Q,_e,ge,ae)=>{let fe=0;const Re=C.length;let P=w.length-1,Fe=Re-1;for(;fe<=P&&fe<=Fe;){const Ne=w[fe],b=C[fe]=ae?bi(C[fe]):ni(C[fe]);if(Or(Ne,b))v(Ne,b,I,null,X,Q,_e,ge,ae);else break;fe++}for(;fe<=P&&fe<=Fe;){const Ne=w[P],b=C[Fe]=ae?bi(C[Fe]):ni(C[Fe]);if(Or(Ne,b))v(Ne,b,I,null,X,Q,_e,ge,ae);else break;P--,Fe--}if(fe>P){if(fe<=Fe){const Ne=Fe+1,b=Ne<Re?C[Ne].el:J;for(;fe<=Fe;)v(null,C[fe]=ae?bi(C[fe]):ni(C[fe]),I,b,X,Q,_e,ge,ae),fe++}}else if(fe>Fe)for(;fe<=P;)Te(w[fe],X,Q,!0),fe++;else{const Ne=fe,b=fe,_=new Map;for(fe=b;fe<=Fe;fe++){const xe=C[fe]=ae?bi(C[fe]):ni(C[fe]);xe.key!=null&&_.set(xe.key,fe)}let B,$=0;const ie=Fe-b+1;let Se=!1,be=0;const ce=new Array(ie);for(fe=0;fe<ie;fe++)ce[fe]=0;for(fe=Ne;fe<=P;fe++){const xe=w[fe];if($>=ie){Te(xe,X,Q,!0);continue}let He;if(xe.key!=null)He=_.get(xe.key);else for(B=b;B<=Fe;B++)if(ce[B-b]===0&&Or(xe,C[B])){He=B;break}He===void 0?Te(xe,X,Q,!0):(ce[He-b]=fe+1,He>=be?be=He:Se=!0,v(xe,C[He],I,null,X,Q,_e,ge,ae),$++)}const de=Se?n0(ce):nr;for(B=de.length-1,fe=ie-1;fe>=0;fe--){const xe=b+fe,He=C[xe],Le=C[xe+1],Ce=xe+1<Re?Le.el||Wp(Le):J;ce[fe]===0?v(null,He,I,Ce,X,Q,_e,ge,ae):Se&&(B<0||fe!==de[B]?ve(He,I,Ce,2):B--)}}},ve=(w,C,I,J,X=null)=>{const{el:Q,type:_e,transition:ge,children:ae,shapeFlag:fe}=w;if(fe&6){ve(w.component.subTree,C,I,J);return}if(fe&128){w.suspense.move(C,I,J);return}if(fe&64){_e.move(w,C,I,me);return}if(_e===At){i(Q,C,I);for(let P=0;P<ae.length;P++)ve(ae[P],C,I,J);i(w.anchor,C,I);return}if(_e===fa){E(w,C,I);return}if(J!==2&&fe&1&&ge)if(J===0)ge.persisted&&!Q[vl]?i(Q,C,I):(ge.beforeEnter(Q),i(Q,C,I),yn(()=>ge.enter(Q),X));else{const{leave:P,delayLeave:Fe,afterLeave:Ne}=ge,b=()=>{w.ctx.isUnmounted?s(Q):i(Q,C,I)},_=()=>{const B=Q._isLeaving||!!Q[vl];Q._isLeaving&&Q[vl](!0),ge.persisted&&!B?b():P(Q,()=>{b(),Ne&&Ne()})};Fe?Fe(Q,b,_):_()}else i(Q,C,I)},Te=(w,C,I,J=!1,X=!1)=>{const{type:Q,props:_e,ref:ge,children:ae,dynamicChildren:fe,shapeFlag:Re,patchFlag:P,dirs:Fe,cacheIndex:Ne,memo:b}=w;if(P===-2&&(X=!1),ge!=null&&(Di(),eo(ge,null,I,w,!0),Li()),Ne!=null&&(C.renderCache[Ne]=void 0),Re&256){C.ctx.deactivate(w);return}const _=Re&1&&Fe,B=!to(w);let $;if(B&&($=_e&&_e.onVnodeBeforeUnmount)&&Jn($,C,w),Re&6)Qe(w.component,I,J);else{if(Re&128){w.suspense.unmount(I,J);return}_&&ls(w,null,C,"beforeUnmount"),Re&64?w.type.remove(w,C,I,me,J):fe&&!fe.hasOnce&&(Q!==At||P>0&&P&64)?K(fe,C,I,!1,!0):(Q===At&&P&384||!X&&Re&16)&&K(ae,C,I),J&&Je(w)}const ie=b!=null&&Ne==null;(B&&($=_e&&_e.onVnodeUnmounted)||_||ie)&&yn(()=>{$&&Jn($,C,w),_&&ls(w,null,C,"unmounted"),ie&&(w.el=null)},I)},Je=w=>{const{type:C,el:I,anchor:J,transition:X}=w;if(C===At){rt(I,J);return}if(C===fa){S(w);return}const Q=()=>{s(I),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(w.shapeFlag&1&&X&&!X.persisted){const{leave:_e,delayLeave:ge}=X,ae=()=>_e(I,Q);ge?ge(w.el,Q,ae):ae()}else Q()},rt=(w,C)=>{let I;for(;w!==C;)I=d(w),s(w),w=I;s(C)},Qe=(w,C,I)=>{const{bum:J,scope:X,job:Q,subTree:_e,um:ge,m:ae,a:fe}=w;Hf(ae),Hf(fe),J&&ca(J),X.stop(),Q&&(Q.flags|=8,Te(_e,w,C,I)),ge&&yn(ge,C),yn(()=>{w.isUnmounted=!0},C)},K=(w,C,I,J=!1,X=!1,Q=0)=>{for(let _e=Q;_e<w.length;_e++)Te(w[_e],C,I,J,X)},O=w=>{if(w.shapeFlag&6)return O(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=d(w.anchor||w.el),I=C&&C[v_];return I?d(I):C};let Z=!1;const ue=(w,C,I)=>{let J;w==null?C._vnode&&(Te(C._vnode,null,null,!0),J=C._vnode.component):v(C._vnode||null,w,C,null,null,null,I),C._vnode=w,Z||(Z=!0,Pf(J),Sp(),Z=!1)},me={p:v,um:Te,m:ve,r:Je,mt:ne,mc:x,pc:se,pbc:F,n:O,o:t};return{render:ue,hydrate:void 0,createApp:z_(ue)}}function Sl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function t0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kp(t,e,n=!1){const i=t.children,s=e.children;if(Ze(i)&&Ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=bi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&kp(o,a)),a.type===el&&(a.patchFlag===-1&&(a=s[r]=bi(a)),a.el=o.el),a.type===es&&!a.el&&(a.el=o.el)}}function n0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Gp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gp(e)}function Hf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Wp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Wp(e.subTree):null}const Xp=t=>t.__isSuspense;function i0(t,e){e&&e.pendingBranch?Ze(t)?e.effects.push(...t):e.effects.push(t):p_(t)}const At=Symbol.for("v-fgt"),el=Symbol.for("v-txt"),es=Symbol.for("v-cmt"),fa=Symbol.for("v-stc"),Ts=[];let Cn=null;function we(t=!1){Ts.push(Cn=t?null:[])}function qp(){Ts.pop(),Cn=Ts[Ts.length-1]||null}let co=1;function Ra(t,e=!1){co+=t,t<0&&Cn&&e&&(Cn.hasOnce=!0)}function $p(t){return t.dynamicChildren=co>0?Cn||nr:null,qp(),co>0&&Cn&&Cn.push(t),t}function Pe(t,e,n,i,s,r){return $p(U(t,e,n,i,s,r,!0))}function Yp(t,e,n,i,s){return $p(on(t,e,n,i,s,!0))}function Ca(t){return t?t.__v_isVNode===!0:!1}function Or(t,e){return t.type===e.type&&t.key===e.key}const Kp=({key:t})=>t??null,da=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?It(t)||ln(t)||st(t)?{i:Nn,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,i=0,s=null,r=t===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kp(e),ref:e&&da(e),scopeId:Mp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nn};return a?(Pa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=It(n)?8:16),co>0&&!o&&Cn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Cn.push(l),l}const on=s0;function s0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===D_)&&(t=es),Ca(t)){const a=fr(t,e,!0);return n&&Pa(a,n),co>0&&!r&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(t)]=a:Cn.push(a)),a.patchFlag=-2,a}if(m0(t)&&(t=t.__vccOpts),e){e=r0(e);let{class:a,style:l}=e;a&&!It(a)&&(e.class=wn(a)),xt(l)&&(Ou(l)&&!Ze(l)&&(l=Kt({},l)),e.style=ro(l))}const o=It(t)?1:Xp(t)?128:x_(t)?64:xt(t)?4:st(t)?2:0;return U(t,e,n,i,s,o,r,!0)}function r0(t){return t?Ou(t)||Op(t)?Kt({},t):t:null}function fr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?o0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Kp(c),ref:e&&e.ref?n&&r?Ze(r)?r.concat(da(e)):[r,da(e)]:da(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fr(t.ssContent),ssFallback:t.ssFallback&&fr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Bu(u,l.clone(u)),u}function rn(t=" ",e=0){return on(el,null,t,e)}function ku(t,e){const n=on(fa,null,t);return n.staticCount=e,n}function tn(t="",e=!1){return e?(we(),Yp(es,null,t)):on(es,null,t)}function ni(t){return t==null||typeof t=="boolean"?on(es):Ze(t)?on(At,null,t.slice()):Ca(t)?bi(t):on(el,null,String(t))}function bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fr(t)}function Pa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ze(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Pa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Op(e)?e._ctx=Nn:s===3&&Nn&&(Nn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(st(e)){if(i&65){Pa(t,{default:e});return}e={default:e,_ctx:Nn},n=32}else e=String(e),i&64?(n=16,e=[rn(e)]):n=8;t.children=e,t.shapeFlag|=n}function o0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=wn([e.class,i.class]));else if(s==="style")e.style=ro([e.style,i.style]);else if(Wa(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Xa(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Jn(t,e,n,i=null){qn(t,e,7,[n,i])}const a0=Dp();let l0=0;function c0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||a0,r={uid:l0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bp(i,s),emitsOptions:Lp(i,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=V_.bind(null,r),t.ce&&t.ce(r),r}let gn=null;const u0=()=>gn||Nn;let Da,Ec;{const t=Ya(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Da=e("__VUE_INSTANCE_SETTERS__",n=>gn=n),Ec=e("__VUE_SSR_SETTERS__",n=>uo=n)}const yo=t=>{const e=gn;return Da(t),t.scope.on(),()=>{t.scope.off(),Da(e)}},Vf=()=>{gn&&gn.scope.off(),Da(null)};function Zp(t){return t.vnode.shapeFlag&4}let uo=!1;function f0(t,e=!1,n=!1){e&&Ec(e);const{props:i,children:s}=t.vnode,r=Zp(t);$_(t,i,r,e),J_(t,s,n||e);const o=r?d0(t,e):void 0;return e&&Ec(!1),o}function d0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,L_);const{setup:i}=n;if(i){Di();const s=t.setupContext=i.length>1?p0(t):null,r=yo(t),o=So(i,t,0,[t.props,s]),a=$h(o);if(Li(),r(),(a||t.sp)&&!to(t)&&Ap(t),a){if(o.then(Vf,Vf),e)return o.then(l=>{kf(t,l)}).catch(l=>{Za(l,t,0)});t.asyncDep=o}else kf(t,o)}else Jp(t)}function kf(t,e,n){st(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xt(e)&&(t.setupState=_p(e)),Jp(t)}function Jp(t,e,n){const i=t.type;t.render||(t.render=i.render||li);{const s=yo(t);Di();try{I_(t)}finally{Li(),s()}}}const h0={get(t,e){return sn(t,"get",""),t[e]}};function p0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,h0),slots:t.slots,emit:t.emit,expose:e}}function tl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_p(s_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in no)return no[n](t)},has(e,n){return n in e||n in no}})):t.proxy}function m0(t){return st(t)&&"__vccOpts"in t}const pt=(t,e)=>c_(t,e,uo);function jp(t,e,n){try{Ra(-1);const i=arguments.length;return i===2?xt(e)&&!Ze(e)?Ca(e)?on(t,null,[e]):on(t,e):on(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ca(n)&&(n=[n]),on(t,e,n))}finally{Ra(1)}}const g0="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bc;const Gf=typeof window<"u"&&window.trustedTypes;if(Gf)try{bc=Gf.createPolicy("vue",{createHTML:t=>t})}catch{}const Qp=bc?t=>bc.createHTML(t):t=>t,_0="http://www.w3.org/2000/svg",v0="http://www.w3.org/1998/Math/MathML",Ei=typeof document<"u"?document:null,Wf=Ei&&Ei.createElement("template"),x0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Ei.createElementNS(_0,t):e==="mathml"?Ei.createElementNS(v0,t):n?Ei.createElement(t,{is:n}):Ei.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Ei.createTextNode(t),createComment:t=>Ei.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ei.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Wf.innerHTML=Qp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Wf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},S0=Symbol("_vtc");function y0(t,e,n){const i=t[S0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xf=Symbol("_vod"),M0=Symbol("_vsh"),E0=Symbol(""),b0=/(?:^|;)\s*display\s*:/;function T0(t,e,n){const i=t.style,s=It(n);let r=!1;if(n&&!s){if(e)if(It(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Yr(i,a,"")}else for(const o in e)n[o]==null&&Yr(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?w0(t,o,!It(e)&&e?e[o]:void 0,a)||Yr(i,o,a):Yr(i,o,"")}}else if(s){if(e!==n){const o=i[E0];o&&(n+=";"+o),i.cssText=n,r=b0.test(n)}}else e&&t.removeAttribute("style");Xf in t&&(t[Xf]=r?i.display:"",t[M0]&&(i.display="none"))}const qf=/\s*!important$/;function Yr(t,e,n){if(Ze(n))n.forEach(i=>Yr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=A0(t,e);qf.test(n)?t.setProperty(ss(i),n.replace(qf,""),"important"):t[i]=n}}const $f=["Webkit","Moz","ms"],yl={};function A0(t,e){const n=yl[e];if(n)return n;let i=kn(e);if(i!=="filter"&&i in t)return yl[e]=i;i=Zh(i);for(let s=0;s<$f.length;s++){const r=$f[s]+i;if(r in t)return yl[e]=r}return e}function w0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&It(i)&&n===i}const Yf="http://www.w3.org/1999/xlink";function Kf(t,e,n,i,s,r=Fg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yf,e.slice(6,e.length)):t.setAttributeNS(Yf,e,n):n==null||r&&!jh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":hi(n)?String(n):n)}function Zf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=jh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Zi(t,e,n,i){t.addEventListener(e,n,i)}function R0(t,e,n,i){t.removeEventListener(e,n,i)}const Jf=Symbol("_vei");function C0(t,e,n,i,s=null){const r=t[Jf]||(t[Jf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=L0(e);if(i){const c=r[e]=U0(i,s);Zi(t,a,c,l)}else o&&(R0(t,a,o,l),r[e]=void 0)}}const P0=/(Once|Passive|Capture)$/,D0=/^on:?(?:Once|Passive|Capture)$/;function L0(t){let e,n;for(;(n=t.match(P0))&&!D0.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ss(t.slice(2)),e]}let Ml=0;const I0=Promise.resolve(),N0=()=>Ml||(I0.then(()=>Ml=0),Ml=Date.now());function U0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(Ze(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&qn(c,e,5,a)}}else qn(s,e,5,[i])};return n.value=t,n.attached=N0(),n}const jf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,O0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?y0(t,i,o):e==="style"?T0(t,n,i):Wa(e)?Xa(e)||C0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):F0(t,e,i,o))?(Zf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kf(t,e,i,o,r,e!=="value")):t._isVueCE&&(B0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!It(i)))?Zf(t,kn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Kf(t,e,i,o))};function F0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&jf(e)&&st(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jf(e)&&It(n)?!1:e in t}function B0(t,e){const n=t._def.props;if(!n)return!1;const i=kn(e);return Array.isArray(n)?n.some(s=>kn(s)===i):Object.keys(n).some(s=>kn(s)===i)}const dr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ze(e)?n=>ca(e,n):e};function z0(t){t.target.composing=!0}function Qf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ri=Symbol("_assign");function ed(t,e,n){return e&&(t=t.trim()),n&&(t=$a(t)),t}const _s={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ri]=dr(s);const r=i||s.props&&s.props.type==="number";Zi(t,e?"change":"input",o=>{o.target.composing||t[Ri](ed(t.value,n,r))}),(n||r)&&Zi(t,"change",()=>{t.value=ed(t.value,n,r)}),e||(Zi(t,"compositionstart",z0),Zi(t,"compositionend",Qf),Zi(t,"change",Qf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ri]=dr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?$a(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},H0={deep:!0,created(t,e,n){t[Ri]=dr(n),Zi(t,"change",()=>{const i=t._modelValue,s=fo(t),r=t.checked,o=t[Ri];if(Ze(i)){const a=Cu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Mr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(em(t,r))})},mounted:td,beforeUpdate(t,e,n){t[Ri]=dr(n),td(t,e,n)}};function td(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Ze(e))s=Cu(e,i.props.value)>-1;else if(Mr(e))s=e.has(i.props.value);else{if(e===n)return;s=Er(e,em(t,!0))}t.checked!==s&&(t.checked=s)}const El={deep:!0,created(t,{value:e,modifiers:{number:n}},i){t._modelValue=e,Zi(t,"change",()=>{const s=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?$a(fo(r)):fo(r));t[Ri](t.multiple?Mr(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,Ja(()=>{t._assigning=!1})}),t[Ri]=dr(i)},mounted(t,{value:e}){nd(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Ri]=dr(n)},updated(t,{value:e}){t._assigning||nd(t,e)}};function nd(t,e){const n=t.multiple,i=Ze(e);if(!(n&&!i&&!Mr(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=fo(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Cu(e,a)>-1}else o.selected=e.has(a);else if(Er(fo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fo(t){return"_value"in t?t._value:t.value}function em(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const V0=["ctrl","shift","alt","meta"],k0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>V0.some(n=>t[`${n}Key`]&&!e.includes(n))},G0=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=k0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},W0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},id=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=ss(s.key);if(e.some(o=>o===r||W0[o]===r))return t(s)})},X0=Kt({patchProp:O0},x0);let sd;function q0(){return sd||(sd=Q_(X0))}const $0=(...t)=>{const e=q0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=K0(i);if(!s)return;const r=e._component;!st(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Y0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Y0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function K0(t){return It(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const er=typeof document<"u";function tm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Z0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&tm(t.default)}const mt=Object.assign;function bl(t,e){const n={};for(const i in e){const s=e[i];n[i]=$n(s)?s.map(t):t(s)}return n}const io=()=>{},$n=Array.isArray;function rd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const nm=/#/g,J0=/&/g,j0=/\//g,Q0=/=/g,ev=/\?/g,im=/\+/g,tv=/%5B/g,nv=/%5D/g,sm=/%5E/g,iv=/%60/g,rm=/%7B/g,sv=/%7C/g,om=/%7D/g,rv=/%20/g;function Gu(t){return t==null?"":encodeURI(""+t).replace(sv,"|").replace(tv,"[").replace(nv,"]")}function ov(t){return Gu(t).replace(rm,"{").replace(om,"}").replace(sm,"^")}function Tc(t){return Gu(t).replace(im,"%2B").replace(rv,"+").replace(nm,"%23").replace(J0,"%26").replace(iv,"`").replace(rm,"{").replace(om,"}").replace(sm,"^")}function av(t){return Tc(t).replace(Q0,"%3D")}function lv(t){return Gu(t).replace(nm,"%23").replace(ev,"%3F")}function cv(t){return lv(t).replace(j0,"%2F")}function ho(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const uv=/\/$/,fv=t=>t.replace(uv,"");function Tl(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=mv(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:ho(o)}}function dv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function od(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&hr(e.matched[i],n.matched[s])&&am(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function am(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!pv(t[n],e[n]))return!1;return!0}function pv(t,e){return $n(t)?ad(t,e):$n(e)?ad(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function ad(t,e){return $n(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function mv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Hi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ac=function(t){return t.pop="pop",t.push="push",t}({}),Al=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function gv(t){if(!t)if(er){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fv(t)}const _v=/^[^#]+#/;function vv(t,e){return t.replace(_v,"#")+e}function xv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const nl=()=>({left:window.scrollX,top:window.scrollY});function Sv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=xv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ld(t,e){return(history.state?history.state.position-e:-1)+t}const wc=new Map;function yv(t,e){wc.set(t,e)}function Mv(t){const e=wc.get(t);return wc.delete(t),e}function Ev(t){return typeof t=="string"||t&&typeof t=="object"}function lm(t){return typeof t=="string"||typeof t=="symbol"}let Lt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const cm=Symbol("");Lt.MATCHER_NOT_FOUND+"",Lt.NAVIGATION_GUARD_REDIRECT+"",Lt.NAVIGATION_ABORTED+"",Lt.NAVIGATION_CANCELLED+"",Lt.NAVIGATION_DUPLICATED+"";function pr(t,e){return mt(new Error,{type:t,[cm]:!0},e)}function _i(t,e){return t instanceof Error&&cm in t&&(e==null||!!(t.type&e))}const bv=["params","query","hash"];function Tv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of bv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Av(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(im," "),r=s.indexOf("="),o=ho(r<0?s:s.slice(0,r)),a=r<0?null:ho(s.slice(r+1));if(o in e){let l=e[o];$n(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function cd(t){let e="";for(let n in t){const i=t[n];if(n=av(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}($n(i)?i.map(s=>s&&Tc(s)):[i&&Tc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function wv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=$n(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Rv=Symbol(""),ud=Symbol(""),il=Symbol(""),Wu=Symbol(""),Rc=Symbol("");function Fr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Yi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(pr(Lt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):Ev(d)?l(pr(Lt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function wl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(tm(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Yi(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Z0(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Yi(d,n,i,o,a,s)()}))}}return r}function Cv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>hr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>hr(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Pv=()=>location.protocol+"//"+location.host;function um(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),od(a,"")}return od(n,t)+i+s}function Dv(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const h=um(t,location),g=n.value,v=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(h);s.forEach(p=>{p(n.value,g,{delta:m,type:Ac.pop,direction:m?m>0?Al.forward:Al.back:Al.unknown})})};function l(){o=n.value}function c(d){s.push(d);const h=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(mt({},d.state,{scroll:nl()}),"")}}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function fd(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?nl():null}}function Lv(t){const{history:e,location:n}=window,i={value:um(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Pv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){r(l,mt({},e.state,fd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=mt({},s.value,e.state,{forward:l,scroll:nl()});r(u.current,u,!0),r(l,mt({},fd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Iv(t){t=gv(t);const e=Lv(t),n=Dv(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=mt({location:"",base:t,go:i,createHref:vv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let vs=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Ht=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Ht||{});const Nv={type:vs.Static,value:""},Uv=/[a-zA-Z0-9_]/;function Ov(t){if(!t)return[[]];if(t==="/")return[[Nv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=Ht.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===Ht.Static?r.push({type:vs.Static,value:c}):n===Ht.Param||n===Ht.ParamRegExp||n===Ht.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:vs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Ht.ParamRegExp){i=n,n=Ht.EscapeNext;continue}switch(n){case Ht.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=Ht.Param):d();break;case Ht.EscapeNext:d(),n=i;break;case Ht.Param:l==="("?n=Ht.ParamRegExp:Uv.test(l)?d():(f(),n=Ht.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ht.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Ht.ParamRegExpEnd:u+=l;break;case Ht.ParamRegExpEnd:f(),n=Ht.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Ht.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const dd="[^/]+?",Fv={sensitive:!1,strict:!1,start:!0,end:!0};var hn=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(hn||{});const Bv=/[.+*?^${}()[\]/\\]/g;function zv(t,e){const n=mt({},Fv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[hn.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=hn.Segment+(n.sensitive?hn.BonusCaseSensitive:0);if(d.type===vs.Static)f||(s+="/"),s+=d.value.replace(Bv,"\\$&"),h+=hn.Static;else if(d.type===vs.Param){const{value:g,repeatable:v,optional:m,regexp:p}=d;r.push({name:g,repeatable:v,optional:m});const M=p||dd;if(M!==dd){h+=hn.BonusCustomRegExp;try{`${M}`}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+S.message)}}let E=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,h+=hn.Dynamic,m&&(h+=hn.BonusOptional),v&&(h+=hn.BonusRepeatable),M===".*"&&(h+=hn.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=hn.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=r[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===vs.Static)u+=h.value;else if(h.type===vs.Param){const{value:g,repeatable:v,optional:m}=h,p=g in c?c[g]:"";if($n(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=$n(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Hv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===hn.Static+hn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===hn.Static+hn.Segment?1:-1:0}function fm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Hv(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(hd(i))return 1;if(hd(s))return-1}return s.length-i.length}function hd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vv={strict:!1,end:!0,sensitive:!1};function kv(t,e,n){const i=zv(Ov(t.path),n),s=mt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Gv(t,e){const n=[],i=new Map;e=rd(Vv,e);function s(f){return i.get(f)}function r(f,d,h){const g=!h,v=md(f);v.aliasOf=h&&h.record;const m=rd(e,f),p=[v];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const A of S)p.push(md(mt({},v,{components:h?h.record.components:v.components,path:A,aliasOf:h?h.record:v})))}let M,E;for(const S of p){const{path:A}=S;if(d&&A[0]!=="/"){const T=d.record.path,D=T[T.length-1]==="/"?"":"/";S.path=d.record.path+(A&&D+A)}if(M=kv(S,d,m),h?h.alias.push(M):(E=E||M,E!==M&&E.alias.push(M),g&&f.name&&!gd(M)&&o(f.name)),dm(M)&&l(M),v.children){const T=v.children;for(let D=0;D<T.length;D++)r(T[D],M,h&&h.children[D])}h=h||M}return E?()=>{o(E)}:io}function o(f){if(lm(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=qv(f,n);n.splice(d,0,f),f.record.name&&!gd(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},v,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw pr(Lt.MATCHER_NOT_FOUND,{location:f});m=h.record.name,g=mt(pd(d.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&pd(f.params,h.keys.map(E=>E.name))),v=h.stringify(g)}else if(f.path!=null)v=f.path,h=n.find(E=>E.re.test(v)),h&&(g=h.parse(v),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!h)throw pr(Lt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,g=mt({},d.params,f.params),v=h.stringify(g)}const p=[];let M=h;for(;M;)p.unshift(M.record),M=M.parent;return{name:m,path:v,params:g,matched:p,meta:Xv(p)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function pd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function md(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Wv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Wv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function gd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xv(t){return t.reduce((e,n)=>mt(e,n.meta),{})}function qv(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;fm(t,e[r])<0?i=r:n=r+1}const s=$v(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function $v(t){let e=t;for(;e=e.parent;)if(dm(e)&&fm(t,e)===0)return e}function dm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _d(t){const e=Wn(il),n=Wn(Wu),i=pt(()=>{const l=pn(t.to);return e.resolve(l)}),s=pt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(hr.bind(null,u));if(d>-1)return d;const h=vd(l[c-2]);return c>1&&vd(u)===h&&f[f.length-1].path!==h?f.findIndex(hr.bind(null,l[c-2])):d}),r=pt(()=>s.value>-1&&Jv(n.params,i.value.params)),o=pt(()=>s.value>-1&&s.value===n.matched.length-1&&am(n.params,i.value.params));function a(l={}){if(Zv(l)){const c=e[pn(t.replace)?"replace":"push"](pn(t.to)).catch(io);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:pt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Yv(t){return t.length===1?t[0]:t}const Kv=Tp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_d,setup(t,{slots:e}){const n=br(_d(t)),{options:i}=Wn(il),s=pt(()=>({[xd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[xd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Yv(e.default(n));return t.custom?r:jp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Cc=Kv;function Zv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jv(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!$n(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function vd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xd=(t,e,n)=>t??e??n,jv=Tp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Wn(Rc),s=pt(()=>t.route||i.value),r=Wn(ud,0),o=pt(()=>{let c=pn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=pt(()=>s.value.matched[o.value]);ua(ud,pt(()=>o.value+1)),ua(Rv,a),ua(Rc,s);const l=Ye();return Qi(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!hr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Sd(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=jp(d,mt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Sd(n.default,{Component:m,route:c})||m}}});function Sd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hm=jv;function Qv(t){const e=Gv(t.routes,t),n=t.parseQuery||Av,i=t.stringifyQuery||cd,s=t.history,r=Fr(),o=Fr(),a=Fr(),l=r_(Hi);let c=Hi;er&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=bl.bind(null,O=>""+O),f=bl.bind(null,cv),d=bl.bind(null,ho);function h(O,Z){let ue,me;return lm(O)?(ue=e.getRecordMatcher(O),me=Z):me=O,e.addRoute(me,ue)}function g(O){const Z=e.getRecordMatcher(O);Z&&e.removeRoute(Z)}function v(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,Z){if(Z=mt({},Z||l.value),typeof O=="string"){const I=Tl(n,O,Z.path),J=e.resolve({path:I.path},Z),X=s.createHref(I.fullPath);return mt(I,J,{params:d(J.params),hash:ho(I.hash),redirectedFrom:void 0,href:X})}let ue;if(O.path!=null)ue=mt({},O,{path:Tl(n,O.path,Z.path).path});else{const I=mt({},O.params);for(const J in I)I[J]==null&&delete I[J];ue=mt({},O,{params:f(I)}),Z.params=f(Z.params)}const me=e.resolve(ue,Z),Me=O.hash||"";me.params=u(d(me.params));const w=dv(i,mt({},O,{hash:ov(Me),path:me.path})),C=s.createHref(w);return mt({fullPath:w,hash:Me,query:i===cd?wv(O.query):O.query||{}},me,{redirectedFrom:void 0,href:C})}function M(O){return typeof O=="string"?Tl(n,O,l.value.path):mt({},O)}function E(O,Z){if(c!==O)return pr(Lt.NAVIGATION_CANCELLED,{from:Z,to:O})}function S(O){return D(O)}function A(O){return S(mt(M(O),{replace:!0}))}function T(O,Z){const ue=O.matched[O.matched.length-1];if(ue&&ue.redirect){const{redirect:me}=ue;let Me=typeof me=="function"?me(O,Z):me;return typeof Me=="string"&&(Me=Me.includes("?")||Me.includes("#")?Me=M(Me):{path:Me},Me.params={}),mt({query:O.query,hash:O.hash,params:Me.path!=null?{}:O.params},Me)}}function D(O,Z){const ue=c=p(O),me=l.value,Me=O.state,w=O.force,C=O.replace===!0,I=T(ue,me);if(I)return D(mt(M(I),{state:typeof I=="object"?mt({},Me,I.state):Me,force:w,replace:C}),Z||ue);const J=ue;J.redirectedFrom=Z;let X;return!w&&hv(i,me,ue)&&(X=pr(Lt.NAVIGATION_DUPLICATED,{to:J,from:me}),ve(me,me,!0,!1)),(X?Promise.resolve(X):F(J,me)).catch(Q=>_i(Q)?_i(Q,Lt.NAVIGATION_GUARD_REDIRECT)?Q:ye(Q):se(Q,J,me)).then(Q=>{if(Q){if(_i(Q,Lt.NAVIGATION_GUARD_REDIRECT))return D(mt({replace:C},M(Q.to),{state:typeof Q.to=="object"?mt({},Me,Q.to.state):Me,force:w}),Z||J)}else Q=k(J,me,!0,C,Me);return N(J,me,Q),Q})}function x(O,Z){const ue=E(O,Z);return ue?Promise.reject(ue):Promise.resolve()}function R(O){const Z=rt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(O):O()}function F(O,Z){let ue;const[me,Me,w]=Cv(O,Z);ue=wl(me.reverse(),"beforeRouteLeave",O,Z);for(const I of me)I.leaveGuards.forEach(J=>{ue.push(Yi(J,O,Z))});const C=x.bind(null,O,Z);return ue.push(C),K(ue).then(()=>{ue=[];for(const I of r.list())ue.push(Yi(I,O,Z));return ue.push(C),K(ue)}).then(()=>{ue=wl(Me,"beforeRouteUpdate",O,Z);for(const I of Me)I.updateGuards.forEach(J=>{ue.push(Yi(J,O,Z))});return ue.push(C),K(ue)}).then(()=>{ue=[];for(const I of w)if(I.beforeEnter)if($n(I.beforeEnter))for(const J of I.beforeEnter)ue.push(Yi(J,O,Z));else ue.push(Yi(I.beforeEnter,O,Z));return ue.push(C),K(ue)}).then(()=>(O.matched.forEach(I=>I.enterCallbacks={}),ue=wl(w,"beforeRouteEnter",O,Z,R),ue.push(C),K(ue))).then(()=>{ue=[];for(const I of o.list())ue.push(Yi(I,O,Z));return ue.push(C),K(ue)}).catch(I=>_i(I,Lt.NAVIGATION_CANCELLED)?I:Promise.reject(I))}function N(O,Z,ue){a.list().forEach(me=>R(()=>me(O,Z,ue)))}function k(O,Z,ue,me,Me){const w=E(O,Z);if(w)return w;const C=Z===Hi,I=er?history.state:{};ue&&(me||C?s.replace(O.fullPath,mt({scroll:C&&I&&I.scroll},Me)):s.push(O.fullPath,Me)),l.value=O,ve(O,Z,ue,C),ye()}let oe;function ne(){oe||(oe=s.listen((O,Z,ue)=>{if(!Qe.listening)return;const me=p(O),Me=T(me,Qe.currentRoute.value);if(Me){D(mt(Me,{replace:!0,force:!0}),me).catch(io);return}c=me;const w=l.value;er&&yv(ld(w.fullPath,ue.delta),nl()),F(me,w).catch(C=>_i(C,Lt.NAVIGATION_ABORTED|Lt.NAVIGATION_CANCELLED)?C:_i(C,Lt.NAVIGATION_GUARD_REDIRECT)?(D(mt(M(C.to),{force:!0}),me).then(I=>{_i(I,Lt.NAVIGATION_ABORTED|Lt.NAVIGATION_DUPLICATED)&&!ue.delta&&ue.type===Ac.pop&&s.go(-1,!1)}).catch(io),Promise.reject()):(ue.delta&&s.go(-ue.delta,!1),se(C,me,w))).then(C=>{C=C||k(me,w,!1),C&&(ue.delta&&!_i(C,Lt.NAVIGATION_CANCELLED)?s.go(-ue.delta,!1):ue.type===Ac.pop&&_i(C,Lt.NAVIGATION_ABORTED|Lt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),N(me,w,C)}).catch(io)}))}let G=Fr(),j=Fr(),W;function se(O,Z,ue){ye(O);const me=j.list();return me.length?me.forEach(Me=>Me(O,Z,ue)):console.error(O),Promise.reject(O)}function pe(){return W&&l.value!==Hi?Promise.resolve():new Promise((O,Z)=>{G.add([O,Z])})}function ye(O){return W||(W=!O,ne(),G.list().forEach(([Z,ue])=>O?ue(O):Z()),G.reset()),O}function ve(O,Z,ue,me){const{scrollBehavior:Me}=t;if(!er||!Me)return Promise.resolve();const w=!ue&&Mv(ld(O.fullPath,0))||(me||!ue)&&history.state&&history.state.scroll||null;return Ja().then(()=>Me(O,Z,w)).then(C=>C&&Sv(C)).catch(C=>se(C,O,Z))}const Te=O=>s.go(O);let Je;const rt=new Set,Qe={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:t,push:S,replace:A,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:pe,install(O){O.component("RouterLink",Cc),O.component("RouterView",hm),O.config.globalProperties.$router=Qe,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>pn(l)}),er&&!Je&&l.value===Hi&&(Je=!0,S(s.location).catch(me=>{}));const Z={};for(const me in Hi)Object.defineProperty(Z,me,{get:()=>l.value[me],enumerable:!0});O.provide(il,Qe),O.provide(Wu,mp(Z)),O.provide(Rc,l);const ue=O.unmount;rt.add(O),O.unmount=function(){rt.delete(O),rt.size<1&&(c=Hi,oe&&oe(),oe=null,l.value=Hi,Je=!1,W=!1),ue()}}};function K(O){return O.reduce((Z,ue)=>Z.then(()=>R(ue)),Promise.resolve())}return Qe}function Xu(){return Wn(il)}function pm(t){return Wn(Wu)}const qu="vision-portal-session",Uo=(()=>{try{return JSON.parse(localStorage.getItem(qu)||"null")}catch{return null}})(),mr=Ye(Uo&&Uo.token&&Uo.user?Uo:null),La=pt(()=>{var t;return!!((t=mr.value)!=null&&t.token)}),so=pt(()=>{var t;return((t=mr.value)==null?void 0:t.user)||null}),mm=t=>{mr.value=t,localStorage.setItem(qu,JSON.stringify(t))},ex=t=>{mr.value&&mm({...mr.value,user:t})},tx=()=>{mr.value=null,localStorage.removeItem(qu)},nx={class:"sidebar"},ix={class:"brand"},sx={key:0,class:"brand-account-actions"},rx={class:"account-hover-card"},ox={key:1,class:"brand-account-actions"},ax={class:"nav-group-title"},lx={class:"icon"},cx={class:"main-panel"},ux={class:"topbar"},fx={class:"topbar-actions"},dx={__name:"App",setup(t){const e=pm(),n=Xu(),i=Ye(localStorage.getItem("vision-portal-theme")==="light"),s=[{title:"平台總覽",requiresAuth:!0,items:[{label:"首頁",to:"/",icon:"◉"}]},{title:"系統介紹",items:[{label:"操作指引",to:"/guide",icon:"◌"},{label:"定位技術",to:"/technology",icon:"◌"}]},{title:"歷史資料",requiresAuth:!0,items:[{label:"物件資料",to:"/history/object",icon:"◌"},{label:"施工任務",to:"/history/tasks",icon:"◌"},{label:"操作紀錄",to:"/history/operations",icon:"◌"}]},{title:"媒體資料",requiresAuth:!0,items:[{label:"影像串流",to:"/media/stream",icon:"◌"},{label:"語音提示",to:"/media/voice",icon:"◌"}]}],r=pt(()=>s.filter(c=>!c.requiresAuth||La.value)),o=pt(()=>{const c=s.flatMap(u=>u.items).find(u=>u.to===e.path);return(c==null?void 0:c.label)||"首頁"}),a=(c="login")=>n.push({path:"/account/login",query:{mode:c}}),l=()=>{i.value=!i.value,localStorage.setItem("vision-portal-theme",i.value?"light":"dark")};return(c,u)=>{var f,d;return we(),Pe("div",{class:wn(["app-shell",{"theme-light":i.value}])},[U("aside",nx,[U("div",ix,[u[2]||(u[2]=U("div",{class:"brand-mark"},"V",-1)),u[3]||(u[3]=U("div",{class:"brand-content"},[U("p",{class:"brand-eyebrow"},"終端定位平台"),U("div",{class:"brand-title-row"},[U("h2",null,"Vision Portal")])],-1)),pn(La)?(we(),Pe("div",sx,[on(pn(Cc),{class:"user-avatar",to:"/account/profile"},{default:vc(()=>{var h,g;return[rn(Ae((g=(h=pn(so))==null?void 0:h.name)==null?void 0:g.charAt(0).toUpperCase()),1)]}),_:1}),U("div",rx,[U("strong",null,Ae((f=pn(so))==null?void 0:f.name),1),U("span",null,Ae((d=pn(so))==null?void 0:d.email),1),u[1]||(u[1]=U("small",null,"點擊頭貼查看帳戶資料",-1))])])):(we(),Pe("div",ox,[U("button",{type:"button",class:"brand-login",onClick:u[0]||(u[0]=h=>a("login"))},"登入")]))]),(we(!0),Pe(At,null,ci(r.value,h=>(we(),Pe("nav",{class:"nav-section",key:h.title},[U("p",ax,Ae(h.title),1),(we(!0),Pe(At,null,ci(h.items,g=>(we(),Yp(pn(Cc),{key:g.to,class:wn(["nav-link",{active:pn(e).path===g.to}]),to:g.to,"exact-active-class":"active"},{default:vc(()=>[U("span",lx,Ae(pn(e).path===g.to?"●":g.icon),1),U("span",null,Ae(g.label),1)]),_:2},1032,["class","to"]))),128))]))),128))]),U("main",cx,[U("header",ux,[U("h1",null,Ae(o.value),1),U("div",fx,[U("button",{type:"button",class:"theme-toggle",onClick:l},Ae(i.value?"◐ 夜間":"☀ 白天"),1),u[4]||(u[4]=U("div",{class:"topbar-badge"},"已連線",-1))])]),on(pn(hm))])],2)}}};function gm(t,e){return function(){return t.apply(e,arguments)}}const{toString:hx}=Object.prototype,{getPrototypeOf:gr}=Object,{iterator:Mo,toStringTag:_m}=Symbol,Ia=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),po=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),Ia(n,e))return!0;n=gr(n)}return!1},px=(t,e)=>t!=null&&po(t,e)?t[e]:void 0,$u=(t=>e=>{const n=hx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Yn=t=>(t=t.toLowerCase(),e=>$u(e)===t),sl=t=>e=>typeof e===t,{isArray:ws}=Array,_r=sl("undefined");function Tr(t){return t!==null&&!_r(t)&&t.constructor!==null&&!_r(t.constructor)&&Mn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const vm=Yn("ArrayBuffer");function mx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&vm(t.buffer),e}const gx=sl("string"),Mn=sl("function"),xm=sl("number"),Ar=t=>t!==null&&typeof t=="object",_x=t=>t===!0||t===!1,ha=t=>{if(!Ar(t))return!1;const e=gr(t);return(e===null||e===Object.prototype||gr(e)===null)&&!po(t,_m)&&!po(t,Mo)},vx=t=>{if(!Ar(t)||Tr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},xx=Yn("Date"),Sx=Yn("File"),yx=t=>!!(t&&typeof t.uri<"u"),Mx=t=>t&&typeof t.getParts<"u",Ex=Yn("Blob"),bx=Yn("FileList"),Tx=t=>Ar(t)&&Mn(t.pipe);function Ax(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const yd=Ax(),Md=typeof yd.FormData<"u"?yd.FormData:void 0,wx=t=>{if(!t)return!1;if(Md&&t instanceof Md)return!0;const e=gr(t);if(!e||e===Object.prototype||!Mn(t.append))return!1;const n=$u(t);return n==="formdata"||n==="object"&&Mn(t.toString)&&t.toString()==="[object FormData]"},Rx=Yn("URLSearchParams"),[Cx,Px,Dx,Lx]=["ReadableStream","Request","Response","Headers"].map(Yn),Ix=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Eo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),ws(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Tr(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Sm(t,e){if(Tr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const xs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ym=t=>!_r(t)&&t!==xs;function Pc(...t){const{caseless:e,skipUndefined:n}=ym(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&Sm(i,o)||o,l=Ia(i,a)?i[a]:void 0;ha(l)&&ha(r)?i[a]=Pc(l,r):ha(r)?i[a]=Pc({},r):ws(r)?i[a]=r.slice():(!n||!_r(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++){const a=t[r];if(!a||Tr(a)||(Eo(a,s),typeof a!="object"||ws(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];Xx.call(a,u)&&s(a[u],u)}}return i}const Nx=(t,e,n,{allOwnKeys:i}={})=>(Eo(e,(s,r)=>{n&&Mn(s)?Object.defineProperty(t,r,{__proto__:null,value:gm(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),Ux=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Ox=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Fx=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&gr(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Bx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},zx=t=>{if(!t)return null;if(ws(t))return t;let e=t.length;if(!xm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Hx=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&gr(Uint8Array)),Vx=(t,e)=>{const i=(t&&t[Mo]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},kx=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Gx=Yn("HTMLFormElement"),Wx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:Xx}=Object.prototype,qx=Yn("RegExp"),Mm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Eo(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},$x=t=>{Mm(t,(e,n)=>{if(Mn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(Mn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Yx=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return ws(t)?i(t):i(String(t).split(e)),n},Kx=()=>{},Zx=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Jx(t){return!!(t&&Mn(t.append)&&t[_m]==="FormData"&&t[Mo])}const jx=t=>{const e=new WeakSet,n=i=>{if(Ar(i)){if(e.has(i))return;if(Tr(i))return i;if(!("toJSON"in i)){e.add(i);const s=ws(i)?[]:{};return Eo(i,(r,o)=>{const a=n(r);!_r(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},Qx=Yn("AsyncFunction"),eS=t=>t&&(Ar(t)||Mn(t))&&Mn(t.then)&&Mn(t.catch),Em=((t,e)=>t?setImmediate:e?((n,i)=>(xs.addEventListener("message",({source:s,data:r})=>{s===xs&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),xs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Mn(xs.postMessage)),tS=typeof queueMicrotask<"u"?queueMicrotask.bind(xs):typeof process<"u"&&process.nextTick||Em,bm=t=>t!=null&&Mn(t[Mo]),nS=t=>t!=null&&po(t,Mo)&&bm(t),H={isArray:ws,isArrayBuffer:vm,isBuffer:Tr,isFormData:wx,isArrayBufferView:mx,isString:gx,isNumber:xm,isBoolean:_x,isObject:Ar,isPlainObject:ha,isEmptyObject:vx,isReadableStream:Cx,isRequest:Px,isResponse:Dx,isHeaders:Lx,isUndefined:_r,isDate:xx,isFile:Sx,isReactNativeBlob:yx,isReactNative:Mx,isBlob:Ex,isRegExp:qx,isFunction:Mn,isStream:Tx,isURLSearchParams:Rx,isTypedArray:Hx,isFileList:bx,forEach:Eo,merge:Pc,extend:Nx,trim:Ix,stripBOM:Ux,inherits:Ox,toFlatObject:Fx,kindOf:$u,kindOfTest:Yn,endsWith:Bx,toArray:zx,forEachEntry:Vx,matchAll:kx,isHTMLForm:Gx,hasOwnProperty:Ia,hasOwnProp:Ia,hasOwnInPrototypeChain:po,getSafeProp:px,reduceDescriptors:Mm,freezeMethods:$x,toObjectSet:Yx,toCamelCase:Wx,noop:Kx,toFiniteNumber:Zx,findKey:Sm,global:xs,isContextDefined:ym,isSpecCompliantForm:Jx,toJSONObject:jx,isAsyncFn:Qx,isThenable:eS,setImmediate:Em,asap:tS,isIterable:bm,isSafeIterable:nS},iS=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sS=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&iS[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function rS(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const oS=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),aS=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Yu(t,e){return H.isArray(t)?t.map(n=>Yu(n,e)):rS(String(t).replace(e,""))}const lS=t=>Yu(t,oS),cS=t=>Yu(t,aS);function Tm(t){const e=Object.create(null);return H.forEach(t.toJSON(),(n,i)=>{e[i]=cS(n)}),e}const Ed=Symbol("internals");function Br(t){return t&&String(t).trim().toLowerCase()}function pa(t){return t===!1||t==null?t:H.isArray(t)?t.map(pa):lS(String(t))}function uS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const fS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Rl(t,e,n,i,s){if(H.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!H.isString(e)){if(H.isString(i))return e.indexOf(i)!==-1;if(H.isRegExp(i))return i.test(e)}}function dS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function hS(t,e){const n=H.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let cn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=Br(l);if(!u)return;const f=H.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=pa(a))}const o=(a,l)=>H.forEach(a,(c,u)=>r(c,u,l));if(H.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(H.isString(e)&&(e=e.trim())&&!fS(e))o(sS(e),n);else if(H.isObject(e)&&H.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!H.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],H.hasOwnProp(a,c)?(l=a[c],a[c]=H.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Br(e),e){const i=H.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return uS(s);if(H.isFunction(n))return n.call(this,s,i);if(H.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Br(e),e){const i=H.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Rl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Br(o),o){const a=H.findKey(i,o);a&&(!n||Rl(i,i[a],a,n))&&(delete i[a],s=!0)}}return H.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||Rl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return H.forEach(this,(s,r)=>{const o=H.findKey(i,r);if(o){n[o]=pa(s),delete n[r];return}const a=e?dS(r):String(r).trim();a!==r&&delete n[r],n[a]=pa(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return H.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&H.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Ed]=this[Ed]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Br(o);i[a]||(hS(s,o),i[a]=!0)}return H.isArray(e)?e.forEach(r):r(e),this}};cn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(cn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});H.freezeMethods(cn);const pS="[REDACTED ****]";function mS(t){if(H.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(H.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function gS(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||H.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof cn&&(r=r.toJSON()),i.push(r);let o;if(H.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);H.isUndefined(c)||(o[l]=c)});else{if(!H.isPlainObject(r)&&mS(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?pS:s(l);H.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let Oe=class Am extends Error{static from(e,n,i,s,r,o){const a=new Am(e.message,n||e.code,i,s,r);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&H.hasOwnProp(e,"redact")?e.redact:void 0,i=H.isArray(n)&&n.length>0?gS(e,n):H.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Oe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Oe.ERR_BAD_OPTION="ERR_BAD_OPTION";Oe.ECONNABORTED="ECONNABORTED";Oe.ETIMEDOUT="ETIMEDOUT";Oe.ECONNREFUSED="ECONNREFUSED";Oe.ERR_NETWORK="ERR_NETWORK";Oe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Oe.ERR_DEPRECATED="ERR_DEPRECATED";Oe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Oe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Oe.ERR_CANCELED="ERR_CANCELED";Oe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Oe.ERR_INVALID_URL="ERR_INVALID_URL";Oe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const _S=null,wm=100;function Dc(t){return H.isPlainObject(t)||H.isArray(t)}function Rm(t){return H.endsWith(t,"[]")?t.slice(0,-2):t}function Cl(t,e,n){return t?t.concat(e).map(function(s,r){return s=Rm(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function vS(t){return H.isArray(t)&&!t.some(Dc)}const xS=H.toFlatObject(H,{},null,function(e){return/^is[A-Z]/.test(e)});function rl(t,e,n){if(!H.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,E){return!H.isUndefined(E[M])});const i=n.metaTokens,s=n.visitor||g,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?wm:n.maxDepth,c=a&&H.isSpecCompliantForm(e),u=[];if(!H.isFunction(s))throw new TypeError("visitor must be a function");function f(p){if(p===null)return"";if(H.isDate(p))return p.toISOString();if(H.isBoolean(p))return p.toString();if(!c&&H.isBlob(p))throw new Oe("Blob is not supported. Use a Buffer instead.");if(H.isArrayBuffer(p)||H.isTypedArray(p)){if(c&&typeof a=="function")return new a([p]);if(typeof Buffer<"u")return Buffer.from(p);throw new Oe("Blob is not supported. Use a Buffer instead.",Oe.ERR_NOT_SUPPORT)}return p}function d(p){if(p>l)throw new Oe("Object is too deeply nested ("+p+" levels). Max depth: "+l,Oe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function h(p,M){if(l===1/0)return JSON.stringify(p);const E=[];return JSON.stringify(p,function(A,T){if(!H.isObject(T))return T;for(;E.length&&E[E.length-1]!==this;)E.pop();return E.push(T),d(M+E.length-1),T})}function g(p,M,E){let S=p;if(H.isReactNative(e)&&H.isReactNativeBlob(p))return e.append(Cl(E,M,r),f(p)),!1;if(p&&!E&&typeof p=="object"){if(H.endsWith(M,"{}"))M=i?M:M.slice(0,-2),p=h(p,1);else if(H.isArray(p)&&vS(p)||(H.isFileList(p)||H.endsWith(M,"[]"))&&(S=H.toArray(p)))return M=Rm(M),S.forEach(function(T,D){!(H.isUndefined(T)||T===null)&&e.append(o===!0?Cl([M],D,r):o===null?M:M+"[]",f(T))}),!1}return Dc(p)?!0:(e.append(Cl(E,M,r),f(p)),!1)}const v=Object.assign(xS,{defaultVisitor:g,convertValue:f,isVisitable:Dc});function m(p,M,E=0){if(!H.isUndefined(p)){if(d(E),u.indexOf(p)!==-1)throw new Error("Circular reference detected in "+M.join("."));u.push(p),H.forEach(p,function(A,T){(!(H.isUndefined(A)||A===null)&&s.call(e,A,H.isString(T)?T.trim():T,M,v))===!0&&m(A,M?M.concat(T):[T],E+1)}),u.pop()}}if(!H.isObject(t))throw new TypeError("data must be an object");return m(t),e}function bd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Ku(t,e){this._pairs=[],t&&rl(t,this,e)}const Cm=Ku.prototype;Cm.append=function(e,n){this._pairs.push([e,n])};Cm.toString=function(e){const n=e?i=>e.call(this,i,bd):bd;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function SS(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Pm(t,e,n){if(!e)return t;t=t||"";const i=H.isFunction(n)?{serialize:n}:n,s=H.getSafeProp(i,"encode")||SS,r=H.getSafeProp(i,"serialize");let o;if(r?o=r(e,i):o=H.isURLSearchParams(e)?e.toString():new Ku(e,i).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Td{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Zu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},yS=typeof URLSearchParams<"u"?URLSearchParams:Ku,MS=typeof FormData<"u"?FormData:null,ES=typeof Blob<"u"?Blob:null,bS={isBrowser:!0,classes:{URLSearchParams:yS,FormData:MS,Blob:ES},protocols:["http","https","file","blob","url","data"]},Ju=typeof window<"u"&&typeof document<"u",Lc=typeof navigator=="object"&&navigator||void 0,TS=Ju&&(!Lc||["ReactNative","NativeScript","NS"].indexOf(Lc.product)<0),AS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",wS=Ju&&window.location.href||"http://localhost",RS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ju,hasStandardBrowserEnv:TS,hasStandardBrowserWebWorkerEnv:AS,navigator:Lc,origin:wS},Symbol.toStringTag,{value:"Module"})),$t={...RS,...bS};function CS(t,e){return rl(t,new $t.classes.URLSearchParams,{visitor:function(n,i,s,r){return $t.isNode&&H.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}const Ad=wm;function Dm(t){if(t>Ad)throw new Oe("FormData field is too deeply nested ("+t+" levels). Max depth: "+Ad,Oe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function PS(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)Dm(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function DS(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Lm(t){function e(n,i,s,r){Dm(r);let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&H.isArray(s)?s.length:o,l?(H.hasOwnProp(s,o)?s[o]=H.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!H.hasOwnProp(s,o)||!H.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&H.isArray(s[o])&&(s[o]=DS(s[o])),!a)}if(H.isFormData(t)&&H.isFunction(t.entries)){const n={};return H.forEachEntry(t,(i,s)=>{e(PS(i),s,n,0)}),n}return null}const Bs=(t,e)=>t!=null&&H.hasOwnProp(t,e)?t[e]:void 0;function LS(t,e,n){if(H.isString(t))try{return(e||JSON.parse)(t),H.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const bo={transitional:Zu,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=H.isObject(e);if(r&&H.isHTMLForm(e)&&(e=new FormData(e)),H.isFormData(e))return s?JSON.stringify(Lm(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=Bs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return CS(e,l).toString();if((a=H.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Bs(this,"env"),u=c&&c.FormData;return rl(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),LS(e)):e}],transformResponse:[function(e){const n=Bs(this,"transitional")||bo.transitional,i=n&&n.forcedJSONParsing,s=Bs(this,"responseType"),r=s==="json";if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,Bs(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Oe.from(l,Oe.ERR_BAD_RESPONSE,this,null,Bs(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$t.classes.FormData,Blob:$t.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch","query"],t=>{bo.headers[t]={}});function Pl(t,e){const n=this||bo,i=e||n,s=cn.from(i.headers);let r=i.data;return H.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Im(t){return!!(t&&t.__CANCEL__)}let To=class extends Oe{constructor(e,n,i){super(e??"canceled",Oe.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Nm(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Oe("Request failed with status code "+n.status,n.status>=400&&n.status<500?Oe.ERR_BAD_REQUEST:Oe.ERR_BAD_RESPONSE,n.config,n.request,n))}function IS(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function NS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function US(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const Na=(t,e,n=3)=>{let i=0;const s=NS(50,250);return US(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},wd=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Rd=t=>(...e)=>H.asap(()=>t(...e)),OS=$t.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,$t.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL($t.origin),$t.navigator&&/(msie|trident)/i.test($t.navigator.userAgent)):()=>!0,FS=$t.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];H.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),H.isString(i)&&a.push(`path=${i}`),H.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),H.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function BS(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function zS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const HS=/^https?:(?!\/\/)/i,VS=/[\t\n\r]/g;function kS(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function GS(t){return kS(t).replace(VS,"")}function Cd(t,e){if(typeof t=="string"&&HS.test(GS(t)))throw new Oe('Invalid URL: missing "//" after protocol',Oe.ERR_INVALID_URL,e)}function Um(t,e,n,i){Cd(e,i);let s=!BS(e);return t&&(s||n===!1)?(Cd(t,i),zS(t,e)):e}const Pd=t=>t instanceof cn?{...t}:t;function Rs(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,d,h){return H.isPlainObject(u)&&H.isPlainObject(f)?H.merge.call({caseless:h},u,f):H.isPlainObject(f)?H.merge({},f):H.isArray(f)?f.slice():f}function s(u,f,d,h){if(H.isUndefined(f)){if(!H.isUndefined(u))return i(void 0,u,d,h)}else return i(u,f,d,h)}function r(u,f){if(!H.isUndefined(f))return i(void 0,f)}function o(u,f){if(H.isUndefined(f)){if(!H.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=H.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!H.isUndefined(f))if(H.isPlainObject(f)){if(H.hasOwnProp(f,u))return f[u]}else return;const d=H.hasOwnProp(t,"transitional")?t.transitional:void 0;if(H.isPlainObject(d)&&H.hasOwnProp(d,u))return d[u]}function l(u,f,d){if(H.hasOwnProp(e,d))return i(u,f);if(H.hasOwnProp(t,d))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,d)=>s(Pd(u),Pd(f),d,!0)};return H.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const d=H.hasOwnProp(c,f)?c[f]:s,h=H.hasOwnProp(t,f)?t[f]:void 0,g=H.hasOwnProp(e,f)?e[f]:void 0,v=d(h,g,f);H.isUndefined(v)&&d!==l||(n[f]=v)}),H.hasOwnProp(e,"validateStatus")&&H.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(H.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const WS=["content-type","content-length"];function XS(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,s])=>{WS.includes(i.toLowerCase())&&t.set(i,s)})}const qS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Om(t){const e=Rs({},t),n=d=>H.hasOwnProp(e,d)?e[d]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=cn.from(a),e.url=Pm(Um(c,f,u,e),n("params"),n("paramsSerializer")),l){const d=H.getSafeProp(l,"username")||"",h=H.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(d+":"+(h?qS(h):"")))}catch(g){throw Oe.from(g,Oe.ERR_BAD_OPTION_VALUE,t)}}if(H.isFormData(i)&&($t.hasStandardBrowserEnv||$t.hasStandardBrowserWebWorkerEnv||H.isReactNative(i)?a.setContentType(void 0):H.isFunction(i.getHeaders)&&XS(a,i.getHeaders(),n("formDataHeaderPolicy"))),$t.hasStandardBrowserEnv&&(H.isFunction(s)&&(s=s(e)),s===!0||s==null&&OS(e.url))){const h=r&&o&&FS.read(o);h&&a.set(r,h)}return e}const $S=typeof XMLHttpRequest<"u",YS=$S&&function(t){return new Promise(function(n,i){const s=Om(t);let r=s.data;const o=cn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,h,g;function v(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function p(){if(!m)return;const E=cn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};Nm(function(D){n(D),v()},function(D){i(D),v()},A),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(p)},m.onabort=function(){m&&(i(new Oe("Request aborted",Oe.ECONNABORTED,t,m)),v(),m=null)},m.onerror=function(S){const A=S&&S.message?S.message:"Network Error",T=new Oe(A,Oe.ERR_NETWORK,t,m);T.event=S||null,i(T),v(),m=null},m.ontimeout=function(){let S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||Zu;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),i(new Oe(S,A.clarifyTimeoutError?Oe.ETIMEDOUT:Oe.ECONNABORTED,t,m)),v(),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&H.forEach(Tm(o),function(S,A){m.setRequestHeader(A,S)}),H.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([d,g]=Na(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,h]=Na(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=E=>{m&&(i(!E||E.type?new To(null,t,m):E),m.abort(),v(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const M=IS(s.url);if(M&&!$t.protocols.includes(M)){i(new Oe("Unsupported protocol "+M+":",Oe.ERR_BAD_REQUEST,t)),v();return}m.send(r||null)})},KS=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof Oe?c:new To(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new Oe(`timeout of ${e}ms exceeded`,Oe.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>H.asap(o),a},ZS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},JS=async function*(t,e){for await(const n of jS(t))yield*ZS(n,e)},jS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Dd=(t,e,n,i)=>{const s=JS(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Ua=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,QS=(t,e,n)=>e+2<n&&Ua(t.charCodeAt(e+1))&&Ua(t.charCodeAt(e+2));function ey(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let h=0;h<a;h++)if(i.charCodeAt(h)===37&&h+2<a){const g=i.charCodeAt(h+1),v=i.charCodeAt(h+2);Ua(g)&&Ua(v)&&(o-=2,h+=2)}let l=0,c=a-1;const u=h=>h>=2&&i.charCodeAt(h-2)===37&&i.charCodeAt(h-1)===51&&(i.charCodeAt(h)===68||i.charCodeAt(h)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const d=Math.floor(o/4)*3-(l||0);return d>0?d:0}let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&QS(i,o,a))r+=1,o+=2;else if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const ju="1.18.1",Ld=64*1024,{isFunction:Oo}=H,ty=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Id=t=>{if(!H.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Nd=(t,...e)=>{try{return!!t(...e)}catch{return!1}},ny=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},iy=t=>{const e=H.global!==void 0&&H.global!==null?H.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=H.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?Oo(s):typeof fetch=="function",l=Oo(r),c=Oo(o);if(!a)return!1;const u=a&&Oo(n),f=a&&(typeof i=="function"?(p=>M=>p.encode(M))(new i):async p=>new Uint8Array(await new r(p).arrayBuffer())),d=l&&u&&Nd(()=>{let p=!1;const M=new r($t.origin,{body:new n,method:"POST",get duplex(){return p=!0,"half"}}),E=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),p&&!E}),h=c&&u&&Nd(()=>H.isReadableStream(new o("").body)),g={stream:h&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!g[p]&&(g[p]=(M,E)=>{let S=M&&M[p];if(S)return S.call(M);throw new Oe(`Response type '${p}' is not supported`,Oe.ERR_NOT_SUPPORT,E)})});const v=async p=>{if(p==null)return 0;if(H.isBlob(p))return p.size;if(H.isSpecCompliantForm(p))return(await new r($t.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(H.isArrayBufferView(p)||H.isArrayBuffer(p))return p.byteLength;if(H.isURLSearchParams(p)&&(p=p+""),H.isString(p))return(await f(p)).byteLength},m=async(p,M)=>{const E=H.toFiniteNumber(p.getContentLength());return E??v(M)};return async p=>{let{url:M,method:E,data:S,signal:A,cancelToken:T,timeout:D,onDownloadProgress:x,onUploadProgress:R,responseType:F,headers:N,withCredentials:k="same-origin",fetchOptions:oe,maxContentLength:ne,maxBodyLength:G}=Om(p);const j=H.isNumber(ne)&&ne>-1,W=H.isNumber(G)&&G>-1,se=K=>H.hasOwnProp(p,K)?p[K]:void 0;let pe=s||fetch;F=F?(F+"").toLowerCase():"text";let ye=KS([A,T&&T.toAbortSignal()],D),ve=null;const Te=ye&&ye.unsubscribe&&(()=>{ye.unsubscribe()});let Je,rt=null;const Qe=()=>new Oe("Request body larger than maxBodyLength limit",Oe.ERR_BAD_REQUEST,p,ve);try{let K;const O=se("auth");if(O){const X=H.getSafeProp(O,"username")||"",Q=H.getSafeProp(O,"password")||"";K={username:X,password:Q}}if(ny(M)){const X=new URL(M,$t.origin);if(!K&&(X.username||X.password)){const Q=Id(X.username),_e=Id(X.password);K={username:Q,password:_e}}(X.username||X.password)&&(X.username="",X.password="",M=X.href)}if(K&&(N.delete("authorization"),N.set("Authorization","Basic "+btoa(ty((K.username||"")+":"+(K.password||""))))),j&&typeof M=="string"&&M.startsWith("data:")&&ey(M)>ne)throw new Oe("maxContentLength size of "+ne+" exceeded",Oe.ERR_BAD_RESPONSE,p,ve);if(W&&E!=="get"&&E!=="head"){const X=await v(S);if(typeof X=="number"&&isFinite(X)&&(Je=X,X>G))throw Qe()}const Z=W&&(H.isReadableStream(S)||H.isStream(S)),ue=(X,Q,_e)=>Dd(X,Ld,ge=>{if(W&&ge>G)throw rt=Qe();Q&&Q(ge)},_e);if(d&&E!=="get"&&E!=="head"&&(R||Z)){if(Je=Je??await m(N,S),Je!==0||Z){let X=new r(M,{method:"POST",body:S,duplex:"half"}),Q;if(H.isFormData(S)&&(Q=X.headers.get("content-type"))&&N.setContentType(Q),X.body){const[_e,ge]=R&&wd(Je,Na(Rd(R)))||[];S=ue(X.body,_e,ge)}}}else if(Z&&!l&&u&&E!=="get"&&E!=="head")S=ue(S);else if(Z&&l&&!d&&E!=="get"&&E!=="head")throw new Oe("Stream request bodies are not supported by the current fetch implementation",Oe.ERR_NOT_SUPPORT,p,ve);H.isString(k)||(k=k?"include":"omit");const me=l&&"credentials"in r.prototype;if(H.isFormData(S)){const X=N.getContentType();X&&/^multipart\/form-data/i.test(X)&&!/boundary=/i.test(X)&&N.delete("content-type")}N.set("User-Agent","axios/"+ju,!1);const Me={...oe,signal:ye,method:E.toUpperCase(),headers:Tm(N.normalize()),body:S,duplex:"half",credentials:me?k:void 0};ve=l&&new r(M,Me);let w=await(l?pe(ve,oe):pe(M,Me));const C=cn.from(w.headers);if(j){const X=H.toFiniteNumber(C.getContentLength());if(X!=null&&X>ne)throw new Oe("maxContentLength size of "+ne+" exceeded",Oe.ERR_BAD_RESPONSE,p,ve)}const I=h&&(F==="stream"||F==="response");if(h&&w.body&&(x||j||I&&Te)){const X={};["status","statusText","headers"].forEach(Re=>{X[Re]=w[Re]});const Q=H.toFiniteNumber(C.getContentLength()),[_e,ge]=x&&wd(Q,Na(Rd(x),!0))||[];let ae=0;const fe=Re=>{if(j&&(ae=Re,ae>ne))throw new Oe("maxContentLength size of "+ne+" exceeded",Oe.ERR_BAD_RESPONSE,p,ve);_e&&_e(Re)};w=new o(Dd(w.body,Ld,fe,()=>{ge&&ge(),Te&&Te()}),X)}F=F||"text";let J=await g[H.findKey(g,F)||"text"](w,p);if(j&&!h&&!I){let X;if(J!=null&&(typeof J.byteLength=="number"?X=J.byteLength:typeof J.size=="number"?X=J.size:typeof J=="string"&&(X=typeof i=="function"?new i().encode(J).byteLength:J.length)),typeof X=="number"&&X>ne)throw new Oe("maxContentLength size of "+ne+" exceeded",Oe.ERR_BAD_RESPONSE,p,ve)}return!I&&Te&&Te(),await new Promise((X,Q)=>{Nm(X,Q,{data:J,headers:cn.from(w.headers),status:w.status,statusText:w.statusText,config:p,request:ve})})}catch(K){if(Te&&Te(),ye&&ye.aborted&&ye.reason instanceof Oe){const O=ye.reason;throw O.config=p,ve&&(O.request=ve),K!==O&&Object.defineProperty(O,"cause",{__proto__:null,value:K,writable:!0,enumerable:!1,configurable:!0}),O}if(rt)throw ve&&!rt.request&&(rt.request=ve),rt;if(K instanceof Oe)throw ve&&!K.request&&(K.request=ve),K;if(K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)){const O=new Oe("Network Error",Oe.ERR_NETWORK,p,ve,K&&K.response);throw Object.defineProperty(O,"cause",{__proto__:null,value:K.cause||K,writable:!0,enumerable:!1,configurable:!0}),O}throw Oe.from(K,K&&K.code,p,ve,K&&K.response)}}},sy=new Map,Fm=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=sy;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:iy(e)),u=c;return c};Fm();const Qu={http:_S,xhr:YS,fetch:{get:Fm}};H.forEach(Qu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Ud=t=>`- ${t}`,ry=t=>H.isFunction(t)||t===null||t===!1;function oy(t,e){t=H.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!ry(i)&&(s=Qu[(a=String(i)).toLowerCase()],s===void 0))throw new Oe(`Unknown adapter '${a}'`);if(s&&(H.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Ud).join(`
`):" "+Ud(o[0]):"as no adapter specified";throw new Oe("There is no suitable adapter to dispatch the request "+a,Oe.ERR_NOT_SUPPORT)}return s}const Bm={getAdapter:oy,adapters:Qu};function Dl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new To(null,t)}function Od(t){return Dl(t),t.headers=cn.from(t.headers),t.data=Pl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Bm.getAdapter(t.adapter||bo.adapter,t)(t).then(function(i){Dl(t),t.response=i;try{i.data=Pl.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=cn.from(i.headers),i},function(i){if(!Im(i)&&(Dl(t),i&&i.response)){t.response=i.response;try{i.response.data=Pl.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=cn.from(i.response.headers)}return Promise.reject(i)})}const ol={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ol[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Fd={};ol.transitional=function(e,n,i){function s(r,o){return"[Axios v"+ju+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Oe(s(o," has been removed"+(n?" in "+n:"")),Oe.ERR_DEPRECATED);return n&&!Fd[o]&&(Fd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};ol.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function ay(t,e,n){if(typeof t!="object"||t===null)throw new Oe("options must be an object",Oe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Oe("option "+r+" must be "+l,Oe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Oe("Unknown option "+r,Oe.ERR_BAD_OPTION)}}const ma={assertOptions:ay,validators:ol},jt=ma.validators;let As=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Td,response:new Td}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Rs(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&ma.assertOptions(i,{silentJSONParsing:jt.transitional(jt.boolean),forcedJSONParsing:jt.transitional(jt.boolean),clarifyTimeoutError:jt.transitional(jt.boolean),legacyInterceptorReqResOrdering:jt.transitional(jt.boolean),advertiseZstdAcceptEncoding:jt.transitional(jt.boolean),validateStatusUndefinedResolves:jt.transitional(jt.boolean)},!1),s!=null&&(H.isFunction(s)?n.paramsSerializer={serialize:s}:ma.assertOptions(s,{encode:jt.function,serialize:jt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ma.assertOptions(n,{baseUrl:jt.spelling("baseURL"),withXsrfToken:jt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&H.merge(r.common,r[n.method]);r&&H.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),n.headers=cn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(n)===!1)return;l=l&&v.synchronous;const m=n.transitional||Zu;m&&m.legacyInterceptorReqResOrdering?a.unshift(v.fulfilled,v.rejected):a.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const g=[Od.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let h=n;for(;f<d;){const g=a[f++],v=a[f++];try{h=g(h)}catch(m){v.call(this,m);break}}try{u=Od.call(this,h)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Rs(this.defaults,e);const n=Um(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Pm(n,e.params,e.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(e){As.prototype[e]=function(n,i){return this.request(Rs(i||{},{method:e,url:n,data:i&&H.hasOwnProp(i,"data")?i.data:void 0}))}});H.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(Rs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}As.prototype[e]=n(),e!=="query"&&(As.prototype[e+"Form"]=n(!0))});let ly=class zm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new To(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new zm(function(s){e=s}),cancel:e}}};function cy(t){return function(n){return t.apply(null,n)}}function uy(t){return H.isObject(t)&&t.isAxiosError===!0}const Ic={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ic).forEach(([t,e])=>{Ic[e]=t});function Hm(t){const e=new As(t),n=gm(As.prototype.request,e);return H.extend(n,As.prototype,e,{allOwnKeys:!0}),H.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Hm(Rs(t,s))},n}const Ot=Hm(bo);Ot.Axios=As;Ot.CanceledError=To;Ot.CancelToken=ly;Ot.isCancel=Im;Ot.VERSION=ju;Ot.toFormData=rl;Ot.AxiosError=Oe;Ot.Cancel=Ot.CanceledError;Ot.all=function(e){return Promise.all(e)};Ot.spread=cy;Ot.isAxiosError=uy;Ot.mergeConfig=Rs;Ot.AxiosHeaders=cn;Ot.formToJSON=t=>Lm(H.isHTMLForm(t)?new FormData(t):t);Ot.getAdapter=Bm.getAdapter;Ot.HttpStatusCode=Ic;Ot.default=Ot;const{Axios:oC,AxiosError:aC,CanceledError:lC,isCancel:cC,CancelToken:uC,VERSION:fC,all:dC,Cancel:hC,isAxiosError:pC,spread:mC,toFormData:gC,AxiosHeaders:_C,HttpStatusCode:vC,formToJSON:xC,getAdapter:SC,mergeConfig:yC,create:MC}=Ot,Bt=Ot.create({baseURL:"/api"}),fy={class:"page-card"},dy={key:0,class:"placeholder"},hy={class:"summary-grid"},py={class:"summary-label"},my={class:"summary-note"},gy={class:"content-grid"},_y={class:"panel"},vy={key:1,class:"placeholder"},xy={class:"panel"},Sy={key:0,class:"table"},yy={key:1,class:"placeholder"},My={key:0,class:"alert"},Ey={__name:"HomePage",setup(t){const e=Ye([]),n=Ye([]),i=Ye([]),s=Ye(!0),r=Ye(""),o=u=>u?new Date(u).toLocaleString("zh-TW"):"—",a=pt(()=>n.value.find(u=>!u.endTime)),l=pt(()=>[{title:"使用者數",value:e.value.length,detail:"資料庫已建立的使用者"},{title:"作業紀錄",value:n.value.length,detail:"所有作業資料"},{title:"辨識結果",value:i.value.length,detail:"所有物件辨識資料"}]);return Ls(async()=>{var u,f;s.value=!0,r.value="";try{const[d,h,g]=await Promise.all([Bt.get("/users"),Bt.get("/operations"),Bt.get("/detections")]);e.value=d.data,n.value=h.data,i.value=g.data}catch(d){r.value=((f=(u=d.response)==null?void 0:u.data)==null?void 0:f.error)||"無法讀取資料庫資料，請確認後端服務與 MongoDB 是否已啟動。"}finally{s.value=!1}}),(u,f)=>{var d,h;return we(),Pe("section",fy,[f[7]||(f[7]=U("div",{class:"section-title"},[U("p",{class:"eyebrow"},"Dashboard"),U("h2",null,"系統總覽")],-1)),s.value?(we(),Pe("p",dy,"正在讀取資料庫資料…")):(we(),Pe(At,{key:1},[U("div",hy,[(we(!0),Pe(At,null,ci(l.value,g=>(we(),Pe("article",{key:g.title,class:"summary-card"},[U("p",py,Ae(g.title),1),U("h3",null,Ae(g.value),1),U("p",my,Ae(g.detail),1)]))),128))]),U("div",gy,[U("article",_y,[f[4]||(f[4]=U("h3",null,"目前作業",-1)),a.value?(we(),Pe(At,{key:0},[U("p",null,[f[0]||(f[0]=U("strong",null,"作業 ID：",-1)),rn(Ae(a.value._id),1)]),U("p",null,[f[1]||(f[1]=U("strong",null,"使用者：",-1)),rn(Ae(((d=a.value.userId)==null?void 0:d.name)||((h=a.value.userId)==null?void 0:h.email)||"未提供"),1)]),U("p",null,[f[2]||(f[2]=U("strong",null,"開始時間：",-1)),rn(Ae(o(a.value.startTime)),1)]),U("p",null,[f[3]||(f[3]=U("strong",null,"說明：",-1)),rn(Ae(a.value.description||"—"),1)])],64)):(we(),Pe("p",vy,"目前沒有進行中的作業。"))]),U("article",xy,[f[6]||(f[6]=U("h3",null,"最新辨識結果",-1)),i.value.length?(we(),Pe("table",Sy,[f[5]||(f[5]=U("thead",null,[U("tr",null,[U("th",null,"時間"),U("th",null,"物件"),U("th",null,"深度")])],-1)),U("tbody",null,[(we(!0),Pe(At,null,ci(i.value.slice(0,6),g=>(we(),Pe("tr",{key:g._id},[U("td",null,Ae(o(g.timestamp)),1),U("td",null,Ae(g.objectClass||"未分類"),1),U("td",null,Ae(g.depth??"—"),1)]))),128))])])):(we(),Pe("p",yy,"尚無辨識資料。"))])]),r.value?(we(),Pe("p",My,Ae(r.value),1)):tn("",!0)],64))])}}},by={class:"page-card account-page"},Ty={class:"section-title"},Ay={class:"panel account-panel"},wy={key:0},Ry=["autocomplete"],Cy={key:1},Py=["disabled"],Dy={key:0,class:"alert"},Ly={__name:"AccountLoginPage",setup(t){const e=Xu(),n=pm(),i=Ye(n.query.mode==="register"?"register":"login"),s=Ye(!1),r=Ye(""),o=br({name:"",email:"",password:"",confirmPassword:""}),a=()=>{i.value=i.value==="login"?"register":"login",r.value="",o.password="",o.confirmPassword=""};Qi(()=>n.query.mode,c=>{(c==="register"||c==="login")&&(i.value=c)});const l=async()=>{var c,u;if(r.value="",i.value==="register"&&o.password!==o.confirmPassword){r.value="兩次輸入的密碼不一致。";return}s.value=!0;try{const f=i.value==="login"?{email:o.email,password:o.password}:{name:o.name,email:o.email,password:o.password},d=await Bt.post(`/auth/${i.value==="login"?"login":"register"}`,f);mm(d.data),e.replace(typeof n.query.redirect=="string"?n.query.redirect:"/")}catch(f){r.value=((u=(c=f.response)==null?void 0:c.data)==null?void 0:u.error)||"目前無法完成帳戶操作，請稍後再試。"}finally{s.value=!1}};return(c,u)=>(we(),Pe("section",by,[U("div",Ty,[u[4]||(u[4]=U("p",{class:"eyebrow"},"Account",-1)),U("h2",null,Ae(i.value==="login"?"登入平台":"建立帳號"),1)]),U("article",Ay,[U("form",{class:"form-grid",onSubmit:G0(l,["prevent"])},[i.value==="register"?(we(),Pe("label",wy,[u[5]||(u[5]=rn("使用者名稱",-1)),Hn(U("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>o.name=f),type:"text",autocomplete:"name",required:""},null,512),[[_s,o.name,void 0,{trim:!0}]])])):tn("",!0),U("label",null,[u[6]||(u[6]=rn("電子信箱",-1)),Hn(U("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>o.email=f),type:"email",autocomplete:"email",required:""},null,512),[[_s,o.email,void 0,{trim:!0}]])]),U("label",null,[u[7]||(u[7]=rn("密碼",-1)),Hn(U("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>o.password=f),type:"password",autocomplete:i.value==="login"?"current-password":"new-password",minlength:"8",required:""},null,8,Ry),[[_s,o.password]])]),i.value==="register"?(we(),Pe("label",Cy,[u[8]||(u[8]=rn("確認密碼",-1)),Hn(U("input",{"onUpdate:modelValue":u[3]||(u[3]=f=>o.confirmPassword=f),type:"password",autocomplete:"new-password",minlength:"8",required:""},null,512),[[_s,o.confirmPassword]])])):tn("",!0),U("button",{type:"submit",disabled:s.value},Ae(s.value?"處理中…":i.value==="login"?"登入":"建立帳號"),9,Py)],32),r.value?(we(),Pe("p",Dy,Ae(r.value),1)):tn("",!0),U("button",{type:"button",class:"account-switch",onClick:a},Ae(i.value==="login"?"尚未註冊？建立帳號":"已有帳號？返回登入"),1)])]))}},Iy={class:"page-card profile-page"},Ny={class:"panel profile-panel"},Uy={key:0,class:"placeholder"},Oy={class:"profile-avatar-large"},Fy={class:"profile-fields"},By={class:"profile-field-row"},zy={class:"profile-value"},Hy=["disabled"],Vy=["disabled"],ky={class:"profile-field-row"},Gy={class:"profile-value"},Wy=["disabled"],Xy=["disabled"],qy={class:"profile-field-row"},$y={class:"profile-value"},Yy={key:0,class:"alert"},Ky={key:2,class:"alert"},Zy={__name:"AccountProfilePage",setup(t){const e=Xu(),n=Ye(""),i=Ye(!0),s=Ye(!1),r=Ye(""),o=Ye(null),a=br({name:"",email:""}),l=async()=>{var h,g;try{o.value=(await Bt.get(`/users/${so.value.id}`)).data,a.name=o.value.name,a.email=o.value.email}catch(v){r.value=((g=(h=v.response)==null?void 0:h.data)==null?void 0:g.error)||"無法讀取帳戶資料。"}finally{i.value=!1}},c=h=>{n.value=h,r.value="",a[h]=o.value[h]},u=()=>{n.value&&(a[n.value]=o.value[n.value]),n.value="",r.value=""},f=async h=>{var g,v;s.value=!0,r.value="";try{const m=(await Bt.patch(`/users/${so.value.id}`,{[h]:a[h]})).data;o.value=m,ex(m),n.value=""}catch(m){r.value=((v=(g=m.response)==null?void 0:g.data)==null?void 0:v.error)||"無法更新帳戶資料。"}finally{s.value=!1}},d=()=>{tx(),e.push("/guide")};return Ls(l),(h,g)=>(we(),Pe("section",Iy,[g[11]||(g[11]=U("div",{class:"section-title profile-title"},[U("p",{class:"eyebrow"},"Account"),U("h2",null,"帳戶資料")],-1)),U("article",Ny,[i.value?(we(),Pe("p",Uy,"正在讀取帳戶資料…")):o.value?(we(),Pe(At,{key:1},[U("div",Oy,Ae(o.value.name.charAt(0).toUpperCase()),1),U("div",Fy,[U("div",By,[g[8]||(g[8]=U("span",{class:"profile-label"},"使用者名稱",-1)),U("div",zy,[n.value==="name"?(we(),Pe(At,{key:0},[Hn(U("input",{"onUpdate:modelValue":g[0]||(g[0]=v=>a.name=v),type:"text",autofocus:"",onKeyup:g[1]||(g[1]=id(v=>f("name"),["enter"]))},null,544),[[_s,a.name,void 0,{trim:!0}]]),U("button",{type:"button",class:"field-save",disabled:s.value,onClick:g[2]||(g[2]=v=>f("name"))},"✓",8,Hy),U("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,Vy)],64)):(we(),Pe(At,{key:1},[U("span",null,Ae(o.value.name),1),U("button",{type:"button",class:"field-edit",title:"修改使用者名稱",onClick:g[3]||(g[3]=v=>c("name"))},"✎")],64))])]),U("div",ky,[g[9]||(g[9]=U("span",{class:"profile-label"},"電子信箱",-1)),U("div",Gy,[n.value==="email"?(we(),Pe(At,{key:0},[Hn(U("input",{"onUpdate:modelValue":g[4]||(g[4]=v=>a.email=v),type:"email",autofocus:"",onKeyup:g[5]||(g[5]=id(v=>f("email"),["enter"]))},null,544),[[_s,a.email,void 0,{trim:!0}]]),U("button",{type:"button",class:"field-save",disabled:s.value,onClick:g[6]||(g[6]=v=>f("email"))},"✓",8,Wy),U("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,Xy)],64)):(we(),Pe(At,{key:1},[U("span",null,Ae(o.value.email),1),U("button",{type:"button",class:"field-edit",title:"修改電子信箱",onClick:g[7]||(g[7]=v=>c("email"))},"✎")],64))])]),U("div",qy,[g[10]||(g[10]=U("span",{class:"profile-label"},"註冊時間",-1)),U("div",$y,[U("span",null,Ae(new Date(o.value.signUpTime).toLocaleString("zh-TW")),1)])])]),r.value?(we(),Pe("p",Yy,Ae(r.value),1)):tn("",!0),U("button",{type:"button",class:"logout-danger",onClick:d},"登出帳戶")],64)):(we(),Pe("p",Ky,Ae(r.value),1))])]))}},al=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Jy={},jy={class:"page-card"};function Qy(t,e){return we(),Pe("section",jy,[...e[0]||(e[0]=[ku('<div class="section-title"><p class="eyebrow">Account</p><h2>密碼修改</h2></div><article class="panel"><h3>修改密碼</h3><div class="form-grid"><input type="password" placeholder="舊密碼"><input type="password" placeholder="新密碼"><input type="password" placeholder="確認新密碼"><button type="button">確認修改</button></div></article>',2)])])}const eM=al(Jy,[["render",Qy]]),tM={},nM={class:"page-card"};function iM(t,e){return we(),Pe("section",nM,[...e[0]||(e[0]=[U("div",{class:"section-title"},[U("p",{class:"eyebrow"},"Guide"),U("h2",null,"網站操作指引")],-1),U("article",{class:"panel"},[U("h3",null,"使用步驟"),U("ul",{class:"bullet-list"},[U("li",null,"選擇對應的定位任務頁面。"),U("li",null,"確認目前作業狀態與資料來源。"),U("li",null,"透過歷史資料查詢前次操作結果。")])],-1)])])}const sM=al(tM,[["render",iM]]),rM={},oM={class:"page-card"};function aM(t,e){return we(),Pe("section",oM,[...e[0]||(e[0]=[U("div",{class:"section-title"},[U("p",{class:"eyebrow"},"Technology"),U("h2",null,"定位技術介紹")],-1),U("article",{class:"panel"},[U("h3",null,"系統技術架構"),U("p",null,"本系統結合電腦視覺、深度估測與即時串流，讓終端定位作業可快速觀測與追溯。")],-1)])])}const lM=al(rM,[["render",aM]]),cM={class:"page-card"},uM={key:0,class:"placeholder"},fM={key:1,class:"table table-spaced"},dM={key:2,class:"placeholder"},hM={key:3,class:"alert"},pM={__name:"ObjectQueryPage",setup(t){const e=Ye([]),n=Ye(""),i=Ye(!0),s=Ye(""),r=a=>a?new Date(a).toLocaleString("zh-TW"):"—",o=pt(()=>e.value.filter(a=>{var l;return(l=a.objectClass)==null?void 0:l.toLowerCase().includes(n.value.toLowerCase())}));return Ls(async()=>{try{e.value=(await Bt.get("/detections")).data}catch{s.value="無法讀取辨識資料。"}finally{i.value=!1}}),(a,l)=>(we(),Pe("section",cM,[l[2]||(l[2]=U("div",{class:"section-title"},[U("p",{class:"eyebrow"},"History"),U("h2",null,"物件辨識紀錄")],-1)),Hn(U("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"search",placeholder:"依物件名稱篩選"},null,512),[[_s,n.value]]),i.value?(we(),Pe("p",uM,"正在讀取資料…")):o.value.length?(we(),Pe("table",fM,[l[1]||(l[1]=U("thead",null,[U("tr",null,[U("th",null,"時間"),U("th",null,"物件"),U("th",null,"深度"),U("th",null,"作業 ID")])],-1)),U("tbody",null,[(we(!0),Pe(At,null,ci(o.value,c=>{var u;return we(),Pe("tr",{key:c._id},[U("td",null,Ae(r(c.timestamp)),1),U("td",null,Ae(c.objectClass||"未分類"),1),U("td",null,Ae(c.depth??"—"),1),U("td",null,Ae(((u=c.operationId)==null?void 0:u._id)||c.operationId),1)])}),128))])])):(we(),Pe("p",dM,"沒有符合的辨識資料。")),s.value?(we(),Pe("p",hM,Ae(s.value),1)):tn("",!0)]))}},mM={class:"page-card"},gM={key:0,class:"placeholder"},_M={key:1,class:"table"},vM={key:2,class:"placeholder"},xM={key:3,class:"alert"},SM={__name:"TaskHistoryPage",setup(t){const e=Ye([]),n=Ye(!0),i=Ye(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return Ls(async()=>{try{e.value=(await Bt.get("/operations")).data}catch{i.value="無法讀取作業紀錄。"}finally{n.value=!1}}),(r,o)=>(we(),Pe("section",mM,[o[1]||(o[1]=U("div",{class:"section-title"},[U("p",{class:"eyebrow"},"History"),U("h2",null,"任務歷程")],-1)),n.value?(we(),Pe("p",gM,"正在讀取資料…")):e.value.length?(we(),Pe("table",_M,[o[0]||(o[0]=U("thead",null,[U("tr",null,[U("th",null,"開始時間"),U("th",null,"結束時間"),U("th",null,"使用者"),U("th",null,"狀態")])],-1)),U("tbody",null,[(we(!0),Pe(At,null,ci(e.value,a=>{var l,c;return we(),Pe("tr",{key:a._id},[U("td",null,Ae(s(a.startTime)),1),U("td",null,Ae(s(a.endTime)),1),U("td",null,Ae(((l=a.userId)==null?void 0:l.name)||((c=a.userId)==null?void 0:c.email)||"未提供"),1),U("td",null,Ae(a.endTime?"已完成":"進行中"),1)])}),128))])])):(we(),Pe("p",vM,"尚無任務資料。")),i.value?(we(),Pe("p",xM,Ae(i.value),1)):tn("",!0)]))}},yM={class:"page-card"},MM={key:0,class:"placeholder"},EM={key:1,class:"table"},bM={key:2,class:"placeholder"},TM={key:3,class:"alert"},AM={__name:"OperationLogPage",setup(t){const e=Ye([]),n=Ye(!0),i=Ye(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return Ls(async()=>{try{e.value=(await Bt.get("/operations")).data}catch{i.value="無法讀取操作紀錄。"}finally{n.value=!1}}),(r,o)=>(we(),Pe("section",yM,[o[1]||(o[1]=U("div",{class:"section-title"},[U("p",{class:"eyebrow"},"History"),U("h2",null,"操作紀錄")],-1)),n.value?(we(),Pe("p",MM,"正在讀取資料…")):e.value.length?(we(),Pe("table",EM,[o[0]||(o[0]=U("thead",null,[U("tr",null,[U("th",null,"作業 ID"),U("th",null,"開始時間"),U("th",null,"結束時間"),U("th",null,"說明")])],-1)),U("tbody",null,[(we(!0),Pe(At,null,ci(e.value,a=>(we(),Pe("tr",{key:a._id},[U("td",null,Ae(a._id),1),U("td",null,Ae(s(a.startTime)),1),U("td",null,Ae(s(a.endTime)),1),U("td",null,Ae(a.description||"—"),1)]))),128))])])):(we(),Pe("p",bM,"尚無操作紀錄。")),i.value?(we(),Pe("p",TM,Ae(i.value),1)):tn("",!0)]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ef="185",or={ROTATE:0,DOLLY:1,PAN:2},tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wM=0,Bd=1,RM=2,ga=1,CM=2,Kr=3,ts=0,En=1,ri=2,Ci=0,ar=1,zd=2,Hd=3,Vd=4,PM=5,ms=100,DM=101,LM=102,IM=103,NM=104,UM=200,OM=201,FM=202,BM=203,Nc=204,Uc=205,zM=206,HM=207,VM=208,kM=209,GM=210,WM=211,XM=212,qM=213,$M=214,Oc=0,Fc=1,Bc=2,vr=3,zc=4,Hc=5,Vc=6,kc=7,Vm=0,YM=1,KM=2,ui=0,km=1,Gm=2,Wm=3,Xm=4,qm=5,$m=6,Ym=7,Km=300,Cs=301,xr=302,Ll=303,Il=304,ll=306,Gc=1e3,wi=1001,Wc=1002,Yt=1003,ZM=1004,Fo=1005,an=1006,Nl=1007,Ss=1008,Rn=1009,Zm=1010,Jm=1011,mo=1012,tf=1013,pi=1014,oi=1015,Ni=1016,nf=1017,sf=1018,go=1020,jm=35902,Qm=35899,eg=1021,tg=1022,Vn=1023,Ui=1026,ys=1027,ng=1028,rf=1029,Ps=1030,of=1031,af=1033,_a=33776,va=33777,xa=33778,Sa=33779,Xc=35840,qc=35841,$c=35842,Yc=35843,Kc=36196,Zc=37492,Jc=37496,jc=37488,Qc=37489,Oa=37490,eu=37491,tu=37808,nu=37809,iu=37810,su=37811,ru=37812,ou=37813,au=37814,lu=37815,cu=37816,uu=37817,fu=37818,du=37819,hu=37820,pu=37821,mu=36492,gu=36494,_u=36495,vu=36283,xu=36284,Fa=36285,Su=36286,JM=3200,yu=0,jM=1,Ji="",Ln="srgb",Ba="srgb-linear",za="linear",vt="srgb",zs=7680,kd=519,QM=512,eE=513,tE=514,lf=515,nE=516,iE=517,cf=518,sE=519,Gd=35044,Wd="300 es",ai=2e3,_o=2001;function rE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ha(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oE(){const t=Ha("canvas");return t.style.display="block",t}const Xd={};function qd(...t){const e="THREE."+t.shift();console.log(e,...t)}function ig(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ke(...t){t=ig(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function dt(...t){t=ig(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function lr(...t){const e=t.join(" ");e in Xd||(Xd[e]=!0,Ke(...t))}function aE(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const lE={[Oc]:Fc,[Bc]:Vc,[zc]:kc,[vr]:Hc,[Fc]:Oc,[Vc]:Bc,[kc]:zc,[Hc]:vr};class rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ya=Math.PI/180,Mu=180/Math.PI;function Ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function ct(t,e,n){return Math.max(e,Math.min(n,t))}function cE(t,e){return(t%e+e)%e}function Ul(t,e,n){return(1-n)*t+n*e}function zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const uE={DEG2RAD:ya},xf=class xf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xf.prototype.isVector2=!0;let je=xf;class ns{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3];if(f!==v||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*v;m<0&&(d=-d,h=-h,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+v*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+v*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sf=class Sf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($d.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this.z=ct(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this.z=ct(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sf.prototype.isVector3=!0;let Y=Sf;const Ol=new Y,$d=new ns,yf=class yf{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],E=s[4],S=s[7],A=s[2],T=s[5],D=s[8];return r[0]=o*v+a*M+l*A,r[3]=o*m+a*E+l*T,r[6]=o*p+a*S+l*D,r[1]=c*v+u*M+f*A,r[4]=c*m+u*E+f*T,r[7]=c*p+u*S+f*D,r[2]=d*v+h*M+g*A,r[5]=d*m+h*E+g*T,r[8]=d*p+h*S+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,g=n*f+i*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fl.makeScale(e,n)),this}rotate(e){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fl.makeRotation(-e)),this}translate(e,n){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yf.prototype.isMatrix3=!0;let nt=yf;const Fl=new nt,Yd=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kd=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fE(){const t={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ba]:{primaries:e,whitePoint:i,transfer:za,toXYZ:Yd,fromXYZ:Kd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Yd,fromXYZ:Kd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),t}const ft=fE();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hs;class dE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=Ha("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ha("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hE=0;class uf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bl(s[o].image)):r.push(Bl(s[o]))}else r=Bl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Bl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let pE=0;const zl=new Y;class _n extends rs{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=wi,s=wi,r=an,o=Ss,a=Vn,l=Rn,c=_n.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Ao(),this.name="",this.source=new uf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ke(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gc:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gc:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Km;_n.DEFAULT_ANISOTROPY=1;const Mf=class Mf{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,S=(h+1)/2,A=(p+1)/2,T=(u+d)/4,D=(f+v)/4,x=(g+m)/4;return E>S&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=D/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=x/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=D/r,s=x/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this.z=ct(this.z,e.z,n.z),this.w=ct(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this.z=ct(this.z,e,n),this.w=ct(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mf.prototype.isVector4=!0;let Pt=Mf;class mE extends rs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new _n(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new uf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends mE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class sg extends _n{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gE extends _n{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ga=class Ga{constructor(e,n,i,s,r,o,a,l,c,u,f,d,h,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,h,g,v,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ga().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_E,e,vE)}lookAt(e,n,i){const s=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Vi.crossVectors(i,Tn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Vi.crossVectors(i,Tn)),Vi.normalize(),Bo.crossVectors(Tn,Vi),s[0]=Vi.x,s[4]=Bo.x,s[8]=Tn.x,s[1]=Vi.y,s[5]=Bo.y,s[9]=Tn.y,s[2]=Vi.z,s[6]=Bo.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],E=i[7],S=i[11],A=i[15],T=s[0],D=s[4],x=s[8],R=s[12],F=s[1],N=s[5],k=s[9],oe=s[13],ne=s[2],G=s[6],j=s[10],W=s[14],se=s[3],pe=s[7],ye=s[11],ve=s[15];return r[0]=o*T+a*F+l*ne+c*se,r[4]=o*D+a*N+l*G+c*pe,r[8]=o*x+a*k+l*j+c*ye,r[12]=o*R+a*oe+l*W+c*ve,r[1]=u*T+f*F+d*ne+h*se,r[5]=u*D+f*N+d*G+h*pe,r[9]=u*x+f*k+d*j+h*ye,r[13]=u*R+f*oe+d*W+h*ve,r[2]=g*T+v*F+m*ne+p*se,r[6]=g*D+v*N+m*G+p*pe,r[10]=g*x+v*k+m*j+p*ye,r[14]=g*R+v*oe+m*W+p*ve,r[3]=M*T+E*F+S*ne+A*se,r[7]=M*D+E*N+S*G+A*pe,r[11]=M*x+E*k+S*j+A*ye,r[15]=M*R+E*oe+S*W+A*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=l*h-c*d,E=a*h-c*f,S=a*d-l*f,A=o*h-c*u,T=o*d-l*u,D=o*f-a*u;return n*(v*M-m*E+p*S)-i*(g*M-m*A+p*T)+s*(g*E-v*A+p*D)-r*(g*S-v*T+m*D)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=n*a-i*o,E=n*l-s*o,S=n*c-r*o,A=i*l-s*a,T=i*c-r*a,D=s*c-r*l,x=u*v-f*g,R=u*m-d*g,F=u*p-h*g,N=f*m-d*v,k=f*p-h*v,oe=d*p-h*m,ne=M*oe-E*k+S*N+A*F-T*R+D*x;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/ne;return e[0]=(a*oe-l*k+c*N)*G,e[1]=(s*k-i*oe-r*N)*G,e[2]=(v*D-m*T+p*A)*G,e[3]=(d*T-f*D-h*A)*G,e[4]=(l*F-o*oe-c*R)*G,e[5]=(n*oe-s*F+r*R)*G,e[6]=(m*S-g*D-p*E)*G,e[7]=(u*D-d*S+h*E)*G,e[8]=(o*k-a*F+c*x)*G,e[9]=(i*F-n*k-r*x)*G,e[10]=(g*T-v*S+p*M)*G,e[11]=(f*S-u*T-h*M)*G,e[12]=(a*R-o*N-l*x)*G,e[13]=(n*N-i*R+s*x)*G,e[14]=(v*E-g*A-m*M)*G,e[15]=(u*A-f*E+d*M)*G,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,g=r*f,v=o*u,m=o*f,p=a*f,M=l*c,E=l*u,S=l*f,A=i.x,T=i.y,D=i.z;return s[0]=(1-(v+p))*A,s[1]=(h+S)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(h-S)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+E)*D,s[9]=(m-M)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Vs.set(s[0],s[1],s[2]).length();const a=Vs.set(s[4],s[5],s[6]).length(),l=Vs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);const c=1/o,u=1/a,f=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=ai,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),h=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===ai)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===_o)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ai,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===ai)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===_o)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ga.prototype.isMatrix4=!0;let Ct=Ga;const Vs=new Y,On=new Ct,_E=new Y(0,0,0),vE=new Y(1,1,1),Vi=new Y,Bo=new Y,Tn=new Y,Zd=new Ct,Jd=new ns;class is{constructor(e=0,n=0,i=0,s=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xE=0;const jd=new Y,ks=new ns,vi=new Ct,zo=new Y,Hr=new Y,SE=new Y,yE=new ns,Qd=new Y(1,0,0),eh=new Y(0,1,0),th=new Y(0,0,1),nh={type:"added"},ME={type:"removed"},Gs={type:"childadded",child:null},Hl={type:"childremoved",child:null};class Xt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new Y,n=new is,i=new ns,s=new Y(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new nt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(eh,e)}rotateZ(e){return this.rotateOnAxis(th,e)}translateOnAxis(e,n){return jd.copy(e).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(eh,e)}translateZ(e){return this.translateOnAxis(th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?zo.copy(e):zo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Hr,zo,this.up):vi.lookAt(zo,Hr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(vi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nh),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ME),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nh),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,SE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,yE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new Y(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ms extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EE={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function kl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ft.workingColorSpace){if(e=cE(e,1),n=ct(n,0,1),i=ct(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=kl(o,r,e+1/3),this.g=kl(o,r,e),this.b=kl(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,n=Ln){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ln){const i=rg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return ft.workingToColorSpace(en.copy(this),e),Math.round(ct(en.r*255,0,255))*65536+Math.round(ct(en.g*255,0,255))*256+Math.round(ct(en.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.workingToColorSpace(en.copy(this),n);const i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ft.workingColorSpace){return ft.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Ln){ft.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b;return e!==Ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(Ho);const i=Ul(ki.h,Ho.h,n),s=Ul(ki.s,Ho.s,n),r=Ul(ki.l,Ho.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new lt;lt.NAMES=rg;class bE extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fn=new Y,xi=new Y,Gl=new Y,Si=new Y,Ws=new Y,Xs=new Y,ih=new Y,Wl=new Y,Xl=new Y,ql=new Y,$l=new Pt,Yl=new Pt,Kl=new Pt;class zn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Fn.subVectors(e,n),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Fn.subVectors(s,n),xi.subVectors(i,n),Gl.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(xi),l=Fn.dot(Gl),c=xi.dot(xi),u=xi.dot(Gl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return $l.setScalar(0),Yl.setScalar(0),Kl.setScalar(0),$l.fromBufferAttribute(e,n),Yl.fromBufferAttribute(e,i),Kl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($l,r.x),o.addScaledVector(Yl,r.y),o.addScaledVector(Kl,r.z),o}static isFrontFacing(e,n,i,s){return Fn.subVectors(i,n),xi.subVectors(e,n),Fn.cross(xi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Fn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ws.subVectors(s,i),Xs.subVectors(r,i),Wl.subVectors(e,i);const l=Ws.dot(Wl),c=Xs.dot(Wl);if(l<=0&&c<=0)return n.copy(i);Xl.subVectors(e,s);const u=Ws.dot(Xl),f=Xs.dot(Xl);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ws,o);ql.subVectors(e,r);const h=Ws.dot(ql),g=Xs.dot(ql);if(g>=0&&h<=g)return n.copy(r);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Xs,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return ih.subVectors(r,s),a=(f-u)/(f-u+(h-g)),n.copy(s).addScaledVector(ih,a);const p=1/(m+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wo{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),ko.subVectors(this.max,Vr),qs.subVectors(e.a,Vr),$s.subVectors(e.b,Vr),Ys.subVectors(e.c,Vr),Gi.subVectors($s,qs),Wi.subVectors(Ys,$s),us.subVectors(qs,Ys);let n=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-us.z,us.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,us.z,0,-us.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-us.y,us.x,0];return!Zl(n,qs,$s,Ys,ko)||(n=[1,0,0,0,1,0,0,0,1],!Zl(n,qs,$s,Ys,ko))?!1:(Go.crossVectors(Gi,Wi),n=[Go.x,Go.y,Go.z],Zl(n,qs,$s,Ys,ko))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Bn=new Y,Vo=new wo,qs=new Y,$s=new Y,Ys=new Y,Gi=new Y,Wi=new Y,us=new Y,Vr=new Y,ko=new Y,Go=new Y,fs=new Y;function Zl(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){fs.fromArray(t,r);const a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=n.dot(fs),u=i.dot(fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ft=new Y,Wo=new je;let TE=0;class di extends rs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gd,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wo.fromBufferAttribute(this,n),Wo.applyMatrix3(e),this.setXY(n,Wo.x,Wo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class og extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ag extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vt extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const AE=new wo,kr=new Y,Jl=new Y;class cl{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const n=kr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(kr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Jl)),this.expandByPoint(kr.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wE=0;const Dn=new Ct,jl=new Xt,Ks=new Y,An=new wo,Gr=new wo,Wt=new Y;class vn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rE(e)?ag:og)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(An.min,Gr.min),An.expandByPoint(Wt),Wt.addVectors(An.max,Gr.max),An.expandByPoint(Wt)):(An.expandByPoint(Gr.min),An.expandByPoint(Gr.max))}An.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(e,c),Wt.add(Ks)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new di(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new Y,l[x]=new Y;const c=new Y,u=new Y,f=new Y,d=new je,h=new je,g=new je,v=new Y,m=new Y;function p(x,R,F){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,F),d.fromBufferAttribute(r,x),h.fromBufferAttribute(r,R),g.fromBufferAttribute(r,F),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const N=1/(h.x*g.y-g.x*h.y);isFinite(N)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(N),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(N),a[x].add(v),a[R].add(v),a[F].add(v),l[x].add(m),l[R].add(m),l[F].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,R=M.length;x<R;++x){const F=M[x],N=F.start,k=F.count;for(let oe=N,ne=N+k;oe<ne;oe+=3)p(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const E=new Y,S=new Y,A=new Y,T=new Y;function D(x){A.fromBufferAttribute(s,x),T.copy(A);const R=a[x];E.copy(R),E.sub(A.multiplyScalar(A.dot(R))).normalize(),S.crossVectors(T,R);const N=S.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,N)}for(let x=0,R=M.length;x<R;++x){const F=M[x],N=F.start,k=F.count;for(let oe=N,ne=N+k;oe<ne;oe+=3)D(e.getX(oe+0)),D(e.getX(oe+1)),D(e.getX(oe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new di(d,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let RE=0;class wr extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=ar,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Uc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ke(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nc&&(i.blendSrc=this.blendSrc),this.blendDst!==Uc&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new Y,Ql=new Y,Xo=new Y,Xi=new Y,ec=new Y,qo=new Y,tc=new Y;class ul{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Ql.copy(e).add(n).multiplyScalar(.5),Xo.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(Ql);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Xo),a=Xi.dot(this.direction),l=-Xi.dot(Xo),c=Xi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ql).addScaledVector(Xo,d),h}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),s=Mi.dot(Mi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,s,r){ec.subVectors(n,e),qo.subVectors(i,e),tc.crossVectors(ec,qo);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(qo.crossVectors(Xi,qo));if(l<0)return null;const c=a*this.direction.dot(ec.cross(Xi));if(c<0||l+c>o)return null;const u=-a*Xi.dot(tc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class df extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=Vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sh=new Ct,ds=new ul,$o=new cl,rh=new Y,Yo=new Y,Ko=new Y,Zo=new Y,nc=new Y,Jo=new Y,oh=new Y,jo=new Y;class nn extends Xt{constructor(e=new vn,n=new df){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(nc.fromBufferAttribute(f,e),o?Jo.addScaledVector(nc,u):Jo.addScaledVector(nc.sub(n),u))}n.add(Jo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!($o.containsPoint(ds.origin)===!1&&(ds.intersectSphere($o,rh)===null||ds.origin.distanceToSquared(rh)>(e.far-e.near)**2))&&(sh.copy(r).invert(),ds.copy(e.ray).applyMatrix4(sh),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ds)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=M,A=E;S<A;S+=3){const T=a.getX(S),D=a.getX(S+1),x=a.getX(S+2);s=Qo(this,p,e,i,c,u,f,T,D,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);s=Qo(this,o,e,i,c,u,f,M,E,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=M,A=E;S<A;S+=3){const T=S,D=S+1,x=S+2;s=Qo(this,p,e,i,c,u,f,T,D,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const M=m,E=m+1,S=m+2;s=Qo(this,o,e,i,c,u,f,M,E,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function CE(t,e,n,i,s,r,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ts,a),l===null)return null;jo.copy(a),jo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(jo);return c<n.near||c>n.far?null:{distance:c,point:jo.clone(),object:t}}function Qo(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Yo),t.getVertexPosition(l,Ko),t.getVertexPosition(c,Zo);const u=CE(t,e,n,i,Yo,Ko,Zo,oh);if(u){const f=new Y;zn.getBarycoord(oh,Yo,Ko,Zo,f),s&&(u.uv=zn.getInterpolatedAttribute(s,a,l,c,f,new je)),r&&(u.uv1=zn.getInterpolatedAttribute(r,a,l,c,f,new je)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};zn.getNormal(Yo,Ko,Zo,d.normal),u.face=d,u.barycoord=f}return u}class PE extends _n{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Yt,u=Yt,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ic=new Y,DE=new Y,LE=new nt;class Ki{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=ic.subVectors(i,n).cross(DE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(ic),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||LE.getNormalMatrix(e),s=this.coplanarPoint(ic).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new cl,IE=new je(.5,.5),ea=new Y;class hf{constructor(e=new Ki,n=new Ki,i=new Ki,s=new Ki,r=new Ki,o=new Ki){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-o,h-u,p-g,A-M).normalize(),s[1].setComponents(c+o,h+u,p+g,A+M).normalize(),s[2].setComponents(c+a,h+f,p+v,A+E).normalize(),s[3].setComponents(c-a,h-f,p-v,A-E).normalize(),i)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,h-d,p-m,A-S).normalize();else if(s[4].setComponents(c-l,h-d,p-m,A-S).normalize(),n===ai)s[5].setComponents(c+l,h+d,p+m,A+S).normalize();else if(n===_o)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const n=IE.distanceTo(e.center);return hs.radius=.7071067811865476+n,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ea.x=s.normal.x>0?e.max.x:e.min.x,ea.y=s.normal.y>0?e.max.y:e.min.y,ea.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pf extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new Y,ka=new Y,ah=new Ct,Wr=new ul,ta=new cl,sc=new Y,lh=new Y;class lg extends Xt{constructor(e=new vn,n=new pf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Va.fromBufferAttribute(n,s-1),ka.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Va.distanceTo(ka);e.setAttribute("lineDistance",new Vt(i,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,e.ray.intersectsSphere(ta)===!1)return;ah.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=c){const p=u.getX(v),M=u.getX(v+1),E=na(this,e,Wr,l,p,M,v);E&&n.push(E)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(h),p=na(this,e,Wr,l,v,m,g-1);p&&n.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=c){const p=na(this,e,Wr,l,v,v+1,v);p&&n.push(p)}if(this.isLineLoop){const v=na(this,e,Wr,l,g-1,h,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function na(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Va.fromBufferAttribute(a,s),ka.fromBufferAttribute(a,r),n.distanceSqToSegment(Va,ka,sc,lh)>i)return;sc.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(sc);if(!(c<e.near||c>e.far))return{distance:c,point:lh.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const ch=new Y,uh=new Y;class NE extends lg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)ch.fromBufferAttribute(n,s),uh.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ch.distanceTo(uh);e.setAttribute("lineDistance",new Vt(i,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cg extends _n{constructor(e=[],n=Cs,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sr extends _n{constructor(e,n,i=pi,s,r,o,a=Yt,l=Yt,c,u=Ui,f=1){if(u!==Ui&&u!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class UE extends Sr{constructor(e,n=pi,i=Cs,s,r,o=Yt,a=Yt,l,c=Ui){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ug extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ds extends vn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function g(v,m,p,M,E,S,A,T,D,x,R){const F=S/D,N=A/x,k=S/2,oe=A/2,ne=T/2,G=D+1,j=x+1;let W=0,se=0;const pe=new Y;for(let ye=0;ye<j;ye++){const ve=ye*N-oe;for(let Te=0;Te<G;Te++){const Je=Te*F-k;pe[v]=Je*M,pe[m]=ve*E,pe[p]=ne,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[m]=0,pe[p]=T>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Te/D),f.push(1-ye/x),W+=1}}for(let ye=0;ye<x;ye++)for(let ve=0;ve<D;ve++){const Te=d+ve+G*ye,Je=d+ve+G*(ye+1),rt=d+(ve+1)+G*(ye+1),Qe=d+(ve+1)+G*ye;l.push(Te,Je,Qe),l.push(Je,rt,Qe),se+=6}a.addGroup(h,se,R),h+=se,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vo extends vn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let g=0;const v=[],m=i/2;let p=0;M(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(h,2));function M(){const S=new Y,A=new Y;let T=0;const D=(n-e)/i;for(let x=0;x<=r;x++){const R=[],F=x/r,N=F*(n-e)+e;for(let k=0;k<=s;k++){const oe=k/s,ne=oe*l+a,G=Math.sin(ne),j=Math.cos(ne);A.x=N*G,A.y=-F*i+m,A.z=N*j,f.push(A.x,A.y,A.z),S.set(G,D,j).normalize(),d.push(S.x,S.y,S.z),h.push(oe,1-F),R.push(g++)}v.push(R)}for(let x=0;x<s;x++)for(let R=0;R<r;R++){const F=v[R][x],N=v[R+1][x],k=v[R+1][x+1],oe=v[R][x+1];(e>0||R!==0)&&(u.push(F,N,oe),T+=3),(n>0||R!==r-1)&&(u.push(N,k,oe),T+=3)}c.addGroup(p,T,0),p+=T}function E(S){const A=g,T=new je,D=new Y;let x=0;const R=S===!0?e:n,F=S===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,m*F,0),d.push(0,F,0),h.push(.5,.5),g++;const N=g;for(let k=0;k<=s;k++){const ne=k/s*l+a,G=Math.cos(ne),j=Math.sin(ne);D.x=R*j,D.y=m*F,D.z=R*G,f.push(D.x,D.y,D.z),d.push(0,F,0),T.x=G*.5+.5,T.y=j*.5*F+.5,h.push(T.x,T.y),g++}for(let k=0;k<s;k++){const oe=A+k,ne=N+k;S===!0?u.push(ne,ne+1,oe):u.push(ne+1,ne,oe),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mf extends vo{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new mf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ro extends vn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let E=0;E<c;E++){const S=E*f-r;g.push(S,-M,0),v.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const E=M+c*p,S=M+c*(p+1),A=M+1+c*(p+1),T=M+1+c*p;h.push(E,S,T),h.push(S,A,T)}this.setIndex(h),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.widthSegments,e.heightSegments)}}class gf extends vn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new Y,d=new Y,h=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const M=[],E=p/i,S=o+E*a,A=e*Math.cos(S),T=Math.sqrt(e*e-A*A);let D=0;p===0&&o===0?D=.5/n:p===i&&l===Math.PI&&(D=-.5/n);for(let x=0;x<=n;x++){const R=x/n,F=s+R*r;f.x=-T*Math.cos(F),f.y=A,f.z=T*Math.sin(F),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(R+D,1-E),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<n;M++){const E=u[p][M+1],S=u[p][M],A=u[p+1][M],T=u[p+1][M+1];(p!==0||o>0)&&h.push(E,S,T),(p!==i-1||l<Math.PI)&&h.push(S,A,T)}this.setIndex(h),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function yr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(fh(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(fh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=yr(t[n]);for(const s in i)e[s]=i[s]}return e}function fh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function OE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const FE={clone:yr,merge:dn};var BE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BE,this.fragmentShader=zE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new lt().setHex(s.value);break;case"v2":this.uniforms[i].value=new je().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class HE extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ia extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VE extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kE extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dg extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class GE extends dg{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const rc=new Ct,dh=new Y,hh=new Y;class WE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hf,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;dh.setFromMatrixPosition(e.matrixWorld),n.position.copy(dh),hh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hh),n.updateMatrixWorld(),rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===_o||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sa=new Y,ra=new ns,jn=new Y;class hg extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sa,ra,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,jn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(sa,ra,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new Y,ph=new je,mh=new je;class In extends hg{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Mu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mu*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,ph,mh),n.subVectors(mh,ph)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ya*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class _f extends hg{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class XE extends WE{constructor(){super(new _f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qE extends dg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new XE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Zs=-90,Js=1;class $E extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(Zs,Js,e,n);s.layers=this.layers,this.add(s);const r=new In(Zs,Js,e,n);r.layers=this.layers,this.add(r);const o=new In(Zs,Js,e,n);o.layers=this.layers,this.add(o);const a=new In(Zs,Js,e,n);a.layers=this.layers,this.add(a);const l=new In(Zs,Js,e,n);l.layers=this.layers,this.add(l);const c=new In(Zs,Js,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class YE extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gh=new Ct;class KE{constructor(e,n,i=0,s=1/0){this.ray=new ul(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):dt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return gh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(e,n=!0,i=[]){return Eu(e,this,i,n),i.sort(_h),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Eu(e[s],this,i,n);return i.sort(_h),i}}function _h(t,e){return t.distance-e.distance}function Eu(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)Eu(r[o],e,n,!0)}}class vh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ef=class Ef{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Ef.prototype.isMatrix2=!0;let xh=Ef;class ZE extends NE{constructor(e=10,n=10,i=4473924,s=8947848){i=new lt(i),s=new lt(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,h=0,g=-a;d<=n;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=d===r?i:s;v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3}const u=new vn;u.setAttribute("position",new Vt(l,3)),u.setAttribute("color",new Vt(c,3));const f=new pf({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class JE extends rs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ke("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Sh(t,e,n,i){const s=jE(i);switch(n){case eg:return t*e;case ng:return t*e/s.components*s.byteLength;case rf:return t*e/s.components*s.byteLength;case Ps:return t*e*2/s.components*s.byteLength;case of:return t*e*2/s.components*s.byteLength;case tg:return t*e*3/s.components*s.byteLength;case Vn:return t*e*4/s.components*s.byteLength;case af:return t*e*4/s.components*s.byteLength;case _a:case va:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xa:case Sa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qc:case Yc:return Math.max(t,16)*Math.max(e,8)/4;case Xc:case $c:return Math.max(t,8)*Math.max(e,8)/2;case Kc:case Zc:case jc:case Qc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Oa:case eu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case iu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case su:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ru:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ou:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case au:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case lu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case cu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case uu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case fu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case du:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case pu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case mu:case gu:case _u:return Math.ceil(t/4)*Math.ceil(e/4)*16;case vu:case xu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fa:case Su:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jE(t){switch(t){case Rn:case Zm:return{byteLength:1,components:1};case mo:case Jm:case Ni:return{byteLength:2,components:1};case nf:case sf:return{byteLength:2,components:4};case pi:case tf:case oi:return{byteLength:4,components:1};case jm:case Qm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function QE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const v=f[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var eb=`#ifdef USE_ALPHAHASH
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
#endif`,db=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hb=`#ifdef USE_IRIDESCENCE
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
#endif`,dT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hT=`#ifdef USE_INSTANCING_MORPH
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
}`,dA=`uniform float scale;
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
}`,hA=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:eb,alphahash_pars_fragment:tb,alphamap_fragment:nb,alphamap_pars_fragment:ib,alphatest_fragment:sb,alphatest_pars_fragment:rb,aomap_fragment:ob,aomap_pars_fragment:ab,batching_pars_vertex:lb,batching_vertex:cb,begin_vertex:ub,beginnormal_vertex:fb,bsdfs:db,iridescence_fragment:hb,bumpmap_pars_fragment:pb,clipping_planes_fragment:mb,clipping_planes_pars_fragment:gb,clipping_planes_pars_vertex:_b,clipping_planes_vertex:vb,color_fragment:xb,color_pars_fragment:Sb,color_pars_vertex:yb,color_vertex:Mb,common:Eb,cube_uv_reflection_fragment:bb,defaultnormal_vertex:Tb,displacementmap_pars_vertex:Ab,displacementmap_vertex:wb,emissivemap_fragment:Rb,emissivemap_pars_fragment:Cb,colorspace_fragment:Pb,colorspace_pars_fragment:Db,envmap_fragment:Lb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Nb,envmap_pars_vertex:Ub,envmap_physical_pars_fragment:qb,envmap_vertex:Ob,fog_vertex:Fb,fog_pars_vertex:Bb,fog_fragment:zb,fog_pars_fragment:Hb,gradientmap_pars_fragment:Vb,lightmap_pars_fragment:kb,lights_lambert_fragment:Gb,lights_lambert_pars_fragment:Wb,lights_pars_begin:Xb,lights_toon_fragment:$b,lights_toon_pars_fragment:Yb,lights_phong_fragment:Kb,lights_phong_pars_fragment:Zb,lights_physical_fragment:Jb,lights_physical_pars_fragment:jb,lights_fragment_begin:Qb,lights_fragment_maps:eT,lights_fragment_end:tT,lightprobes_pars_fragment:nT,logdepthbuf_fragment:iT,logdepthbuf_pars_fragment:sT,logdepthbuf_pars_vertex:rT,logdepthbuf_vertex:oT,map_fragment:aT,map_pars_fragment:lT,map_particle_fragment:cT,map_particle_pars_fragment:uT,metalnessmap_fragment:fT,metalnessmap_pars_fragment:dT,morphinstance_vertex:hT,morphcolor_vertex:pT,morphnormal_vertex:mT,morphtarget_pars_vertex:gT,morphtarget_vertex:_T,normal_fragment_begin:vT,normal_fragment_maps:xT,normal_pars_fragment:ST,normal_pars_vertex:yT,normal_vertex:MT,normalmap_pars_fragment:ET,clearcoat_normal_fragment_begin:bT,clearcoat_normal_fragment_maps:TT,clearcoat_pars_fragment:AT,iridescence_pars_fragment:wT,opaque_fragment:RT,packing:CT,premultiplied_alpha_fragment:PT,project_vertex:DT,dithering_fragment:LT,dithering_pars_fragment:IT,roughnessmap_fragment:NT,roughnessmap_pars_fragment:UT,shadowmap_pars_fragment:OT,shadowmap_pars_vertex:FT,shadowmap_vertex:BT,shadowmask_pars_fragment:zT,skinbase_vertex:HT,skinning_pars_vertex:VT,skinning_vertex:kT,skinnormal_vertex:GT,specularmap_fragment:WT,specularmap_pars_fragment:XT,tonemapping_fragment:qT,tonemapping_pars_fragment:$T,transmission_fragment:YT,transmission_pars_fragment:KT,uv_pars_fragment:ZT,uv_pars_vertex:JT,uv_vertex:jT,worldpos_vertex:QT,background_vert:eA,background_frag:tA,backgroundCube_vert:nA,backgroundCube_frag:iA,cube_vert:sA,cube_frag:rA,depth_vert:oA,depth_frag:aA,distance_vert:lA,distance_frag:cA,equirect_vert:uA,equirect_frag:fA,linedashed_vert:dA,linedashed_frag:hA,meshbasic_vert:pA,meshbasic_frag:mA,meshlambert_vert:gA,meshlambert_frag:_A,meshmatcap_vert:vA,meshmatcap_frag:xA,meshnormal_vert:SA,meshnormal_frag:yA,meshphong_vert:MA,meshphong_frag:EA,meshphysical_vert:bA,meshphysical_frag:TA,meshtoon_vert:AA,meshtoon_frag:wA,points_vert:RA,points_frag:CA,shadow_vert:PA,shadow_frag:DA,sprite_vert:LA,sprite_frag:IA},Ue={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ii={basic:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:dn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:dn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:dn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new lt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:dn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:dn([Ue.points,Ue.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:dn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:dn([Ue.common,Ue.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:dn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:dn([Ue.sprite,Ue.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:dn([Ue.common,Ue.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:dn([Ue.lights,Ue.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ii.physical={uniforms:dn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const oa={r:0,b:0,g:0},NA=new Ct,mg=new nt;mg.set(-1,0,0,0,1,0,0,0,1);function UA(t,e,n,i,s,r){const o=new lt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function h(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const S=M.backgroundBlurriness>0;E=e.get(E,S)}return E}function g(M){let E=!1;const S=h(M);S===null?m(o,a):S&&S.isColor&&(m(S,1),E=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(M,E){const S=h(E);S&&(S.isCubeTexture||S.mapping===ll)?(c===void 0&&(c=new nn(new Ds(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:yr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NA.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mg),c.material.toneMapped=ft.getTransfer(S.colorSpace)!==vt,(u!==S||f!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new nn(new Ro(2,2),new mi({name:"BackgroundMaterial",uniforms:yr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ft.getTransfer(S.colorSpace)!==vt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(oa,fg(t)),n.buffers.color.setClear(oa.r,oa.g,oa.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:p}}function OA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(N,k,oe,ne,G){let j=!1;const W=f(N,ne,oe,k);r!==W&&(r=W,c(r.object)),j=h(N,ne,oe,G),j&&g(N,ne,oe,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(N,k,oe,ne),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function u(N){return t.deleteVertexArray(N)}function f(N,k,oe,ne){const G=ne.wireframe===!0;let j=i[k.id];j===void 0&&(j={},i[k.id]=j);const W=N.isInstancedMesh===!0?N.id:0;let se=j[W];se===void 0&&(se={},j[W]=se);let pe=se[oe.id];pe===void 0&&(pe={},se[oe.id]=pe);let ye=pe[G];return ye===void 0&&(ye=d(l()),pe[G]=ye),ye}function d(N){const k=[],oe=[],ne=[];for(let G=0;G<n;G++)k[G]=0,oe[G]=0,ne[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oe,attributeDivisors:ne,object:N,attributes:{},index:null}}function h(N,k,oe,ne){const G=r.attributes,j=k.attributes;let W=0;const se=oe.getAttributes();for(const pe in se)if(se[pe].location>=0){const ve=G[pe];let Te=j[pe];if(Te===void 0&&(pe==="instanceMatrix"&&N.instanceMatrix&&(Te=N.instanceMatrix),pe==="instanceColor"&&N.instanceColor&&(Te=N.instanceColor)),ve===void 0||ve.attribute!==Te||Te&&ve.data!==Te.data)return!0;W++}return r.attributesNum!==W||r.index!==ne}function g(N,k,oe,ne){const G={},j=k.attributes;let W=0;const se=oe.getAttributes();for(const pe in se)if(se[pe].location>=0){let ve=j[pe];ve===void 0&&(pe==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),pe==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor));const Te={};Te.attribute=ve,ve&&ve.data&&(Te.data=ve.data),G[pe]=Te,W++}r.attributes=G,r.attributesNum=W,r.index=ne}function v(){const N=r.newAttributes;for(let k=0,oe=N.length;k<oe;k++)N[k]=0}function m(N){p(N,0)}function p(N,k){const oe=r.newAttributes,ne=r.enabledAttributes,G=r.attributeDivisors;oe[N]=1,ne[N]===0&&(t.enableVertexAttribArray(N),ne[N]=1),G[N]!==k&&(t.vertexAttribDivisor(N,k),G[N]=k)}function M(){const N=r.newAttributes,k=r.enabledAttributes;for(let oe=0,ne=k.length;oe<ne;oe++)k[oe]!==N[oe]&&(t.disableVertexAttribArray(oe),k[oe]=0)}function E(N,k,oe,ne,G,j,W){W===!0?t.vertexAttribIPointer(N,k,oe,G,j):t.vertexAttribPointer(N,k,oe,ne,G,j)}function S(N,k,oe,ne){v();const G=ne.attributes,j=oe.getAttributes(),W=k.defaultAttributeValues;for(const se in j){const pe=j[se];if(pe.location>=0){let ye=G[se];if(ye===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor)),ye!==void 0){const ve=ye.normalized,Te=ye.itemSize,Je=e.get(ye);if(Je===void 0)continue;const rt=Je.buffer,Qe=Je.type,K=Je.bytesPerElement,O=Qe===t.INT||Qe===t.UNSIGNED_INT||ye.gpuType===tf;if(ye.isInterleavedBufferAttribute){const Z=ye.data,ue=Z.stride,me=ye.offset;if(Z.isInstancedInterleavedBuffer){for(let Me=0;Me<pe.locationSize;Me++)p(pe.location+Me,Z.meshPerAttribute);N.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Me=0;Me<pe.locationSize;Me++)m(pe.location+Me);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let Me=0;Me<pe.locationSize;Me++)E(pe.location+Me,Te/pe.locationSize,Qe,ve,ue*K,(me+Te/pe.locationSize*Me)*K,O)}else{if(ye.isInstancedBufferAttribute){for(let Z=0;Z<pe.locationSize;Z++)p(pe.location+Z,ye.meshPerAttribute);N.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Z=0;Z<pe.locationSize;Z++)m(pe.location+Z);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let Z=0;Z<pe.locationSize;Z++)E(pe.location+Z,Te/pe.locationSize,Qe,ve,Te*K,Te/pe.locationSize*Z*K,O)}}else if(W!==void 0){const ve=W[se];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(pe.location,ve);break;case 3:t.vertexAttrib3fv(pe.location,ve);break;case 4:t.vertexAttrib4fv(pe.location,ve);break;default:t.vertexAttrib1fv(pe.location,ve)}}}}M()}function A(){R();for(const N in i){const k=i[N];for(const oe in k){const ne=k[oe];for(const G in ne){const j=ne[G];for(const W in j)u(j[W].object),delete j[W];delete ne[G]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;const k=i[N.id];for(const oe in k){const ne=k[oe];for(const G in ne){const j=ne[G];for(const W in j)u(j[W].object),delete j[W];delete ne[G]}}delete i[N.id]}function D(N){for(const k in i){const oe=i[k];for(const ne in oe){const G=oe[ne];if(G[N.id]===void 0)continue;const j=G[N.id];for(const W in j)u(j[W].object),delete j[W];delete G[N.id]}}}function x(N){for(const k in i){const oe=i[k],ne=N.isInstancedMesh===!0?N.id:0,G=oe[ne];if(G!==void 0){for(const j in G){const W=G[j];for(const se in W)u(W[se].object),delete W[se];delete G[j]}delete oe[ne],Object.keys(oe).length===0&&delete i[k]}}}function R(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function FA(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function BA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Vn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const x=D===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Rn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==oi&&!x)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:T}}function zA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Ki,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,E=M*4;let S=p.clippingState||null;l.value=S,S=u(g,d,E,h);for(let A=0;A!==E;++A)S[A]=n[A];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=h;E!==v;++E,S+=4)o.copy(f[E]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const ji=4,yh=[.125,.215,.35,.446,.526,.582],gs=20,HA=256,Xr=new _f,Mh=new lt;let oc=null,ac=0,lc=0,cc=!1;const VA=new Y;class Eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=VA}=r;oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,ac,lc),this._renderer.xr.enabled=cc,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Ni,format:Vn,colorSpace:Ba,depthBuffer:!1},s=bh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kA(r)),this._blurMaterial=WA(r,e,n),this._ggxMaterial=GA(r,e,n)}return s}_compileMaterial(e){const n=new nn(new vn,e);this._renderer.compile(n,Xr)}_sceneToCubeUV(e,n,i,s,r){const l=new In(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Mh),f.toneMapping=ui,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new Ds,new df({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Mh),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const A=this._cubeSize;js(s,S*A,E>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Cs||e.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;js(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-ji?i-g+ji:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-n,js(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,Xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,js(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,Xr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*gs-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):gs;m>gs&&Ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const p=[];let M=0;for(let D=0;D<gs;++D){const x=D/v,R=Math.exp(-x*x/2);p.push(R),D===0?M+=R:D<m&&(M+=2*R)}for(let D=0;D<p.length;D++)p[D]=p[D]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const S=this._sizeLods[s],A=3*S*(s>E-ji?s-E+ji:0),T=4*(this._cubeSize-S);js(n,A,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Xr)}}function kA(t){const e=[],n=[],i=[];let s=t;const r=t-ji+1+yh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-ji?l=yh[o-t+ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*h),E=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let T=0;T<h;T++){const D=T%3*2/3-1,x=T>2?0:-1,R=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];M.set(R,v*g*T),E.set(d,m*g*T);const F=[T,T,T,T,T,T];S.set(F,p*g*T)}const A=new vn;A.setAttribute("position",new di(M,v)),A.setAttribute("uv",new di(E,m)),A.setAttribute("faceIndex",new di(S,p)),i.push(new nn(A,null)),s>ji&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function bh(t,e,n){const i=new fi(t,e,n);return i.texture.mapping=ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function GA(t,e,n){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function WA(t,e,n){const i=new Float32Array(gs),s=new Y(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Th(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ah(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}class gg extends fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cg(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ds(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ci});r.uniforms.tEquirect.value=n;const o=new nn(s,r),a=n.minFilter;return n.minFilter===Ss&&(n.minFilter=an),new $E(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function XA(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ll||h===Il)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new gg(g.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,g=h===Ll||h===Il,v=h===Cs||h===xr;if(g||v){let m=n.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Eh(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Eh(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===Ll?d.mapping=Cs:h===Il&&(d.mapping=xr),d}function l(d){let h=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function qA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&lr("WebGLRenderer: "+i+" extension not supported."),s}}}function $A(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(h!==null){const M=h.array;v=h.version;for(let E=0,S=M.length;E<S;E+=3){const A=M[E+0],T=M[E+1],D=M[E+2];d.push(A,T,T,D,D,A)}}else{const M=g.array;v=g.version;for(let E=0,S=M.length/3-1;E<S;E+=3){const A=E+0,T=E+1,D=E+2;d.push(A,T,T,D,D,A)}}const m=new(g.count>=65535?ag:og)(d,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function YA(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*o),n.update(d,i,1)}function c(f,d,h){h!==0&&(t.drawElementsInstanced(i,d,r,f*o,h),n.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,h);let v=0;for(let m=0;m<h;m++)v+=d[m];n.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function KA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:dt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ZA(t,e,n){const i=new WeakMap,s=new Pt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let F=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",F)};var h=F;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let A=a.attributes.position.count*S,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const D=new Float32Array(A*T*4*f),x=new sg(D,A,T,f);x.type=oi,x.needsUpdate=!0;const R=S*4;for(let N=0;N<f;N++){const k=p[N],oe=M[N],ne=E[N],G=A*T*4*N;for(let j=0;j<k.count;j++){const W=j*R;g===!0&&(s.fromBufferAttribute(k,j),D[G+W+0]=s.x,D[G+W+1]=s.y,D[G+W+2]=s.z,D[G+W+3]=0),v===!0&&(s.fromBufferAttribute(oe,j),D[G+W+4]=s.x,D[G+W+5]=s.y,D[G+W+6]=s.z,D[G+W+7]=0),m===!0&&(s.fromBufferAttribute(ne,j),D[G+W+8]=s.x,D[G+W+9]=s.y,D[G+W+10]=s.z,D[G+W+11]=ne.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new je(A,T)},i.set(a,d),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function JA(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const jA={[km]:"LINEAR_TONE_MAPPING",[Gm]:"REINHARD_TONE_MAPPING",[Wm]:"CINEON_TONE_MAPPING",[Xm]:"ACES_FILMIC_TONE_MAPPING",[$m]:"AGX_TONE_MAPPING",[Ym]:"NEUTRAL_TONE_MAPPING",[qm]:"CUSTOM_TONE_MAPPING"};function QA(t,e,n,i,s,r){const o=new fi(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Sr(e,n):void 0}),a=new fi(e,n,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),l=new vn;l.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const c=new HE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new nn(l,c),f=new _f(-1,1,1,-1,0,1);let d=null,h=null,g=!1,v,m=null,p=[],M=!1;this.setSize=function(E,S){o.setSize(E,S),a.setSize(E,S);for(let A=0;A<p.length;A++){const T=p[A];T.setSize&&T.setSize(E,S)}},this.setEffects=function(E){p=E,M=p.length>0&&p[0].isRenderPass===!0;const S=o.width,A=o.height;for(let T=0;T<p.length;T++){const D=p[T];D.setSize&&D.setSize(S,A)}},this.begin=function(E,S){if(g||E.toneMapping===ui&&p.length===0)return!1;if(m=S,S!==null){const A=S.width,T=S.height;(o.width!==A||o.height!==T)&&this.setSize(A,T)}return M===!1&&E.setRenderTarget(o),v=E.toneMapping,E.toneMapping=ui,!0},this.hasRenderPass=function(){return M},this.end=function(E,S){E.toneMapping=v,g=!0;let A=o,T=a;for(let D=0;D<p.length;D++){const x=p[D];if(x.enabled!==!1&&(x.render(E,T,A,S),x.needsSwap!==!1)){const R=A;A=T,T=R}}if(d!==E.outputColorSpace||h!==E.toneMapping){d=E.outputColorSpace,h=E.toneMapping,c.defines={},ft.getTransfer(d)===vt&&(c.defines.SRGB_TRANSFER="");const D=jA[h];D&&(c.defines[D]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,E.setRenderTarget(m),E.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const _g=new _n,bu=new Sr(1,1),vg=new sg,xg=new gE,Sg=new cg,wh=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Dh=new Float32Array(4);function Rr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dl(t,e){let n=Rh[e];n===void 0&&(n=new Int32Array(e),Rh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(kt(n,i))return;Dh.set(i),t.uniformMatrix2fv(this.addr,!1,Dh),Gt(n,i)}}function rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(kt(n,i))return;Ph.set(i),t.uniformMatrix3fv(this.addr,!1,Ph),Gt(n,i)}}function ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(kt(n,i))return;Ch.set(i),t.uniformMatrix4fv(this.addr,!1,Ch),Gt(n,i)}}function aw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function mw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(bu.compareFunction=n.isReversedDepthBuffer()?cf:lf,r=bu):r=_g,n.setTexture2D(e||r,s)}function gw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||xg,s)}function _w(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Sg,s)}function vw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||vg,s)}function xw(t){switch(t){case 5126:return ew;case 35664:return tw;case 35665:return nw;case 35666:return iw;case 35674:return sw;case 35675:return rw;case 35676:return ow;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return cw;case 35669:case 35673:return uw;case 5125:return fw;case 36294:return dw;case 36295:return hw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return vw}}function Sw(t,e){t.uniform1fv(this.addr,e)}function yw(t,e){const n=Rr(e,this.size,2);t.uniform2fv(this.addr,n)}function Mw(t,e){const n=Rr(e,this.size,3);t.uniform3fv(this.addr,n)}function Ew(t,e){const n=Rr(e,this.size,4);t.uniform4fv(this.addr,n)}function bw(t,e){const n=Rr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Tw(t,e){const n=Rr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Aw(t,e){const n=Rr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ww(t,e){t.uniform1iv(this.addr,e)}function Rw(t,e){t.uniform2iv(this.addr,e)}function Cw(t,e){t.uniform3iv(this.addr,e)}function Pw(t,e){t.uniform4iv(this.addr,e)}function Dw(t,e){t.uniform1uiv(this.addr,e)}function Lw(t,e){t.uniform2uiv(this.addr,e)}function Iw(t,e){t.uniform3uiv(this.addr,e)}function Nw(t,e){t.uniform4uiv(this.addr,e)}function Uw(t,e,n){const i=this.cache,s=e.length,r=dl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=bu:o=_g;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function Ow(t,e,n){const i=this.cache,s=e.length,r=dl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||xg,r[o])}function Fw(t,e,n){const i=this.cache,s=e.length,r=dl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Sg,r[o])}function Bw(t,e,n){const i=this.cache,s=e.length,r=dl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||vg,r[o])}function zw(t){switch(t){case 5126:return Sw;case 35664:return yw;case 35665:return Mw;case 35666:return Ew;case 35674:return bw;case 35675:return Tw;case 35676:return Aw;case 5124:case 35670:return ww;case 35667:case 35671:return Rw;case 35668:case 35672:return Cw;case 35669:case 35673:return Pw;case 5125:return Dw;case 36294:return Lw;case 36295:return Iw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Bw}}class Hw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xw(n.type)}}class Vw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zw(n.type)}}class kw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function Lh(t,e){t.seq.push(e),t.map[e.id]=e}function Gw(t,e,n){const i=t.name,s=i.length;for(uc.lastIndex=0;;){const r=uc.exec(i),o=uc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lh(n,c===void 0?new Hw(a,t,e):new Vw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new kw(a),Lh(n,f)),n=f}}}class Ma{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Gw(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Ih(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ww=37297;let Xw=0;function qw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Nh=new nt;function $w(t){ft._getMatrix(Nh,ft.workingColorSpace,t);const e=`mat3( ${Nh.elements.map(n=>n.toFixed(4))} )`;switch(ft.getTransfer(t)){case za:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Uh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+qw(t.getShaderSource(e),a)}else return r}function Yw(t,e){const n=$w(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Kw={[km]:"Linear",[Gm]:"Reinhard",[Wm]:"Cineon",[Xm]:"ACESFilmic",[$m]:"AgX",[Ym]:"Neutral",[qm]:"Custom"};function Zw(t,e){const n=Kw[e];return n===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const aa=new Y;function Jw(){ft.getLuminanceCoefficients(aa);const t=aa.x.toFixed(4),e=aa.y.toFixed(4),n=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function Qw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function eR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Zr(t){return t!==""}function Oh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(t){return t.replace(tR,iR)}const nR=new Map;function iR(t,e){let n=ot[e];if(n===void 0){const i=nR.get(e);if(i!==void 0)n=ot[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tu(n)}const sR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(t){return t.replace(sR,rR)}function rR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const oR={[ga]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function aR(t){return oR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lR={[Cs]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[ll]:"ENVMAP_TYPE_CUBE_UV"};function cR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":lR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const uR={[xr]:"ENVMAP_MODE_REFRACTION"};function fR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":uR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dR={[Vm]:"ENVMAP_BLENDING_MULTIPLY",[YM]:"ENVMAP_BLENDING_MIX",[KM]:"ENVMAP_BLENDING_ADD"};function hR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":dR[t.combine]||"ENVMAP_BLENDING_NONE"}function pR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function mR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=aR(n),c=cR(n),u=fR(n),f=hR(n),d=pR(n),h=jw(n),g=Qw(r),v=s.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Zr).join(`
`),p.length>0&&(p+=`
`)):(m=[zh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),p=[zh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?ot.tonemapping_pars_fragment:"",n.toneMapping!==ui?Zw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Yw("linearToOutputTexel",n.outputColorSpace),Jw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zr).join(`
`)),o=Tu(o),o=Oh(o,n),o=Fh(o,n),a=Tu(a),a=Oh(a,n),a=Fh(a,n),o=Bh(o),a=Bh(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+m+o,S=M+p+a,A=Ih(s,s.VERTEX_SHADER,E),T=Ih(s,s.FRAGMENT_SHADER,S);s.attachShader(v,A),s.attachShader(v,T),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(N){if(t.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",oe=s.getShaderInfoLog(A)||"",ne=s.getShaderInfoLog(T)||"",G=k.trim(),j=oe.trim(),W=ne.trim();let se=!0,pe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,A,T);else{const ye=Uh(s,A,"vertex"),ve=Uh(s,T,"fragment");dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+ye+`
`+ve)}else G!==""?Ke("WebGLProgram: Program Info Log:",G):(j===""||W==="")&&(pe=!1);pe&&(N.diagnostics={runnable:se,programLog:G,vertexShader:{log:j,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(A),s.deleteShader(T),x=new Ma(s,v),R=eR(s,v)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(v,Ww)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let gR=0;class _R{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vR(e),n.set(e,i)),i}}class vR{constructor(e){this.id=gR++,this.code=e,this.usedTimes=0}}function xR(t){return t===Ps||t===Oa||t===Fa}function SR(t,e,n,i,s,r){const o=new ff,a=new _R,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,R,F,N,k,oe){const ne=N.fog,G=k.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||j,W),pe=se&&se.mapping===ll?se.image.height:null,ye=h[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Ke("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ve=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Te=ve!==void 0?ve.length:0;let Je=0;G.morphAttributes.position!==void 0&&(Je=1),G.morphAttributes.normal!==void 0&&(Je=2),G.morphAttributes.color!==void 0&&(Je=3);let rt,Qe,K,O;if(ye){const Ie=ii[ye];rt=Ie.vertexShader,Qe=Ie.fragmentShader}else{rt=x.vertexShader,Qe=x.fragmentShader;const Ie=a.getVertexShaderStage(x),tt=a.getFragmentShaderStage(x);a.update(x,Ie,tt),K=Ie.id,O=tt.id}const Z=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),me=k.isInstancedMesh===!0,Me=k.isBatchedMesh===!0,w=!!x.map,C=!!x.matcap,I=!!se,J=!!x.aoMap,X=!!x.lightMap,Q=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,ge=!!x.displacementMap,ae=!!x.emissiveMap,fe=!!x.metalnessMap,Re=!!x.roughnessMap,P=x.anisotropy>0,Fe=x.clearcoat>0,Ne=x.dispersion>0,b=x.iridescence>0,_=x.sheen>0,B=x.transmission>0,$=P&&!!x.anisotropyMap,ie=Fe&&!!x.clearcoatMap,Se=Fe&&!!x.clearcoatNormalMap,be=Fe&&!!x.clearcoatRoughnessMap,ce=b&&!!x.iridescenceMap,de=b&&!!x.iridescenceThicknessMap,xe=_&&!!x.sheenColorMap,He=_&&!!x.sheenRoughnessMap,Le=!!x.specularMap,Ce=!!x.specularColorMap,Xe=!!x.specularIntensityMap,$e=B&&!!x.transmissionMap,et=B&&!!x.thicknessMap,z=!!x.gradientMap,De=!!x.alphaMap,L=x.alphaTest>0,V=!!x.alphaHash,he=!!x.extensions;let le=ui;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(le=t.toneMapping);const Ee={shaderID:ye,shaderType:x.type,shaderName:x.name,vertexShader:rt,fragmentShader:Qe,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:O,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Me,batchingColor:Me&&k._colorsTexture!==null,instancing:me,instancingColor:me&&k.instanceColor!==null,instancingMorph:me&&k.morphTexture!==null,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:w,matcap:C,envMap:I,envMapMode:I&&se.mapping,envMapCubeUVHeight:pe,aoMap:J,lightMap:X,bumpMap:Q,normalMap:_e,displacementMap:ge,emissiveMap:ae,normalMapObjectSpace:_e&&x.normalMapType===jM,normalMapTangentSpace:_e&&x.normalMapType===yu,packedNormalMap:_e&&x.normalMapType===yu&&xR(x.normalMap.format),metalnessMap:fe,roughnessMap:Re,anisotropy:P,anisotropyMap:$,clearcoat:Fe,clearcoatMap:ie,clearcoatNormalMap:Se,clearcoatRoughnessMap:be,dispersion:Ne,iridescence:b,iridescenceMap:ce,iridescenceThicknessMap:de,sheen:_,sheenColorMap:xe,sheenRoughnessMap:He,specularMap:Le,specularColorMap:Ce,specularIntensityMap:Xe,transmission:B,transmissionMap:$e,thicknessMap:et,gradientMap:z,opaque:x.transparent===!1&&x.blending===ar&&x.alphaToCoverage===!1,alphaMap:De,alphaTest:L,alphaHash:V,combine:x.combine,mapUv:w&&g(x.map.channel),aoMapUv:J&&g(x.aoMap.channel),lightMapUv:X&&g(x.lightMap.channel),bumpMapUv:Q&&g(x.bumpMap.channel),normalMapUv:_e&&g(x.normalMap.channel),displacementMapUv:ge&&g(x.displacementMap.channel),emissiveMapUv:ae&&g(x.emissiveMap.channel),metalnessMapUv:fe&&g(x.metalnessMap.channel),roughnessMapUv:Re&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:ie&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&g(x.sheenRoughnessMap.channel),specularMapUv:Le&&g(x.specularMap.channel),specularColorMapUv:Ce&&g(x.specularColorMap.channel),specularIntensityMapUv:Xe&&g(x.specularIntensityMap.channel),transmissionMapUv:$e&&g(x.transmissionMap.channel),thicknessMapUv:et&&g(x.thicknessMap.channel),alphaMapUv:De&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(_e||P),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(w||De),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Je,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:w&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:ae&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&x.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)R.push(F),R.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(p(R,x),M(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function p(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function M(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function E(x){const R=h[x.type];let F;if(R){const N=ii[R];F=FE.clone(N.uniforms)}else F=x.uniforms;return F}function S(x,R){let F=u.get(R);return F!==void 0?++F.usedTimes:(F=new mR(t,R,x,s),c.push(F),u.set(R,F)),F}function A(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function D(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:S,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:D}}function yR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function MR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Hh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,v,m,p){let M=t[e];return M===void 0?(M={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},t[e]=M):(M.id=d.id,M.object=d,M.geometry=h,M.material=g,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,h,g,v,m,p){const M=a(d,h,g,v,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):n.push(M)}function c(d,h,g,v,m,p){const M=a(d,h,g,v,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function u(d,h,g){n.length>1&&n.sort(d||MR),i.length>1&&i.sort(h||Hh),s.length>1&&s.sort(h||Hh),g&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function ER(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Vh,t.set(i,[o])):s>=r.length?(o=new Vh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function bR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new lt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function TR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AR=0;function wR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RR(t){const e=new bR,n=TR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new Ct,o=new Ct;function a(c){let u=0,f=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,M=0,E=0,S=0,A=0,T=0,D=0;c.sort(wR);for(let R=0,F=c.length;R<F;R++){const N=c[R],k=N.color,oe=N.intensity,ne=N.distance;let G=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ps?G=N.shadow.map.texture:G=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*oe,f+=k.g*oe,d+=k.b*oe;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],oe);D++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const W=N.shadow,se=n.get(N);se.shadowIntensity=W.intensity,se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,i.directionalShadow[h]=se,i.directionalShadowMap[h]=G,i.directionalShadowMatrix[h]=N.shadow.matrix,M++}i.directional[h]=j,h++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(oe),j.distance=ne,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[v]=j;const W=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,W.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[v]=W.matrix,N.castShadow){const se=n.get(N);se.shadowIntensity=W.intensity,se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,i.spotShadow[v]=se,i.spotShadowMap[v]=G,S++}v++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(k).multiplyScalar(oe),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=j,m++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const W=N.shadow,se=n.get(N);se.shadowIntensity=W.intensity,se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,se.shadowCameraNear=W.camera.near,se.shadowCameraFar=W.camera.far,i.pointShadow[g]=se,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=N.shadow.matrix,E++}i.point[g]=j,g++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(oe),j.groundColor.copy(N.groundColor).multiplyScalar(oe),i.hemi[p]=j,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==h||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==E||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,x.directionalLength=h,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=E,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=D,i.version=AR++)}function l(c,u){let f=0,d=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const E=c[p];if(E.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(E.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function kh(t){const e=new RR(t),n=[],i=[],s=[];function r(d){f.camera=d,n.length=0,i.length=0,s.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function CR(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new kh(t),e.set(s,[a])):r>=o.length?(a=new kh(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const PR=`void main() {
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
}`,LR=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],IR=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Gh=new Ct,qr=new Y,fc=new Y;function NR(t,e,n){let i=new hf;const s=new je,r=new je,o=new Pt,a=new VE,l=new kE,c={},u=n.maxTextureSize,f={[ts]:En,[En]:ts,[ri]:ri},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:PR,fragmentShader:DR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let p=this.type;this.render=function(T,D,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===CM&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ga);const R=t.getRenderTarget(),F=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Ci),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const oe=p!==this.type;oe&&D.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(G=>G.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,G=T.length;ne<G;ne++){const j=T[ne],W=j.shadow;if(W===void 0){Ke("WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const se=W.getFrameExtents();s.multiply(se),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,W.mapSize.y=r.y));const pe=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=pe,W.map===null||oe===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Kr){if(j.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new fi(s.x,s.y,{format:Ps,type:Ni,minFilter:an,magFilter:an,generateMipmaps:!1}),W.map.texture.name=j.name+".shadowMap",W.map.depthTexture=new Sr(s.x,s.y,oi),W.map.depthTexture.name=j.name+".shadowMapDepth",W.map.depthTexture.format=Ui,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt}else j.isPointLight?(W.map=new gg(s.x),W.map.depthTexture=new UE(s.x,pi)):(W.map=new fi(s.x,s.y),W.map.depthTexture=new Sr(s.x,s.y,pi)),W.map.depthTexture.name=j.name+".shadowMap",W.map.depthTexture.format=Ui,this.type===ga?(W.map.depthTexture.compareFunction=pe?cf:lf,W.map.depthTexture.minFilter=an,W.map.depthTexture.magFilter=an):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt);W.camera.updateProjectionMatrix()}const ye=W.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<ye;ve++){if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,ve),t.clear();else{ve===0&&(t.setRenderTarget(W.map),t.clear());const Te=W.getViewport(ve);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),k.viewport(o)}if(j.isPointLight){const Te=W.camera,Je=W.matrix,rt=j.distance||Te.far;rt!==Te.far&&(Te.far=rt,Te.updateProjectionMatrix()),qr.setFromMatrixPosition(j.matrixWorld),Te.position.copy(qr),fc.copy(Te.position),fc.add(LR[ve]),Te.up.copy(IR[ve]),Te.lookAt(fc),Te.updateMatrixWorld(),Je.makeTranslation(-qr.x,-qr.y,-qr.z),Gh.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Gh,Te.coordinateSystem,Te.reversedDepth)}else W.updateMatrices(j);i=W.getFrustum(),S(D,x,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Kr&&M(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(R,F,N)};function M(T,D){const x=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fi(s.x,s.y,{format:Ps,type:Ni})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(D,null,x,d,v,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(D,null,x,h,v,null)}function E(T,D,x,R){let F=null;const N=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)F=N;else if(F=x.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=F.uuid,oe=D.uuid;let ne=c[k];ne===void 0&&(ne={},c[k]=ne);let G=ne[oe];G===void 0&&(G=F.clone(),ne[oe]=G,D.addEventListener("dispose",A)),F=G}if(F.visible=D.visible,F.wireframe=D.wireframe,R===Kr?F.side=D.shadowSide!==null?D.shadowSide:D.side:F.side=D.shadowSide!==null?D.shadowSide:f[D.side],F.alphaMap=D.alphaMap,F.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,F.map=D.map,F.clipShadows=D.clipShadows,F.clippingPlanes=D.clippingPlanes,F.clipIntersection=D.clipIntersection,F.displacementMap=D.displacementMap,F.displacementScale=D.displacementScale,F.displacementBias=D.displacementBias,F.wireframeLinewidth=D.wireframeLinewidth,F.linewidth=D.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const k=t.properties.get(F);k.light=x}return F}function S(T,D,x,R,F){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Kr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const oe=e.update(T),ne=T.material;if(Array.isArray(ne)){const G=oe.groups;for(let j=0,W=G.length;j<W;j++){const se=G[j],pe=ne[se.materialIndex];if(pe&&pe.visible){const ye=E(T,pe,R,F);T.onBeforeShadow(t,T,D,x,oe,ye,se),t.renderBufferDirect(x,null,oe,ye,T,se),T.onAfterShadow(t,T,D,x,oe,ye,se)}}}else if(ne.visible){const G=E(T,ne,R,F);T.onBeforeShadow(t,T,D,x,oe,G,null),t.renderBufferDirect(x,null,oe,G,T,null),T.onAfterShadow(t,T,D,x,oe,G,null)}}const k=T.children;for(let oe=0,ne=k.length;oe<ne;oe++)S(k[oe],D,x,R,F)}function A(T){T.target.removeEventListener("dispose",A);for(const x in c){const R=c[x],F=T.target.uuid;F in R&&(R[F].dispose(),delete R[F])}}}function UR(t,e){function n(){let z=!1;const De=new Pt;let L=null;const V=new Pt(0,0,0,0);return{setMask:function(he){L!==he&&!z&&(t.colorMask(he,he,he,he),L=he)},setLocked:function(he){z=he},setClear:function(he,le,Ee,Ie,tt){tt===!0&&(he*=Ie,le*=Ie,Ee*=Ie),De.set(he,le,Ee,Ie),V.equals(De)===!1&&(t.clearColor(he,le,Ee,Ie),V.copy(De))},reset:function(){z=!1,L=null,V.set(-1,0,0,0)}}}function i(){let z=!1,De=!1,L=null,V=null,he=null;return{setReversed:function(le){if(De!==le){const Ee=e.get("EXT_clip_control");le?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),De=le;const Ie=he;he=null,this.setClear(Ie)}},getReversed:function(){return De},setTest:function(le){le?Z(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(le){L!==le&&!z&&(t.depthMask(le),L=le)},setFunc:function(le){if(De&&(le=lE[le]),V!==le){switch(le){case Oc:t.depthFunc(t.NEVER);break;case Fc:t.depthFunc(t.ALWAYS);break;case Bc:t.depthFunc(t.LESS);break;case vr:t.depthFunc(t.LEQUAL);break;case zc:t.depthFunc(t.EQUAL);break;case Hc:t.depthFunc(t.GEQUAL);break;case Vc:t.depthFunc(t.GREATER);break;case kc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}V=le}},setLocked:function(le){z=le},setClear:function(le){he!==le&&(he=le,De&&(le=1-le),t.clearDepth(le))},reset:function(){z=!1,L=null,V=null,he=null,De=!1}}}function s(){let z=!1,De=null,L=null,V=null,he=null,le=null,Ee=null,Ie=null,tt=null;return{setTest:function(ut){z||(ut?Z(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(ut){De!==ut&&!z&&(t.stencilMask(ut),De=ut)},setFunc:function(ut,un,Zt){(L!==ut||V!==un||he!==Zt)&&(t.stencilFunc(ut,un,Zt),L=ut,V=un,he=Zt)},setOp:function(ut,un,Zt){(le!==ut||Ee!==un||Ie!==Zt)&&(t.stencilOp(ut,un,Zt),le=ut,Ee=un,Ie=Zt)},setLocked:function(ut){z=ut},setClear:function(ut){tt!==ut&&(t.clearStencil(ut),tt=ut)},reset:function(){z=!1,De=null,L=null,V=null,he=null,le=null,Ee=null,Ie=null,tt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],v=null,m=!1,p=null,M=null,E=null,S=null,A=null,T=null,D=null,x=new lt(0,0,0),R=0,F=!1,N=null,k=null,oe=null,ne=null,G=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,se=0;const pe=t.getParameter(t.VERSION);pe.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(pe)[1]),W=se>=1):pe.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),W=se>=2);let ye=null,ve={};const Te=t.getParameter(t.SCISSOR_BOX),Je=t.getParameter(t.VIEWPORT),rt=new Pt().fromArray(Te),Qe=new Pt().fromArray(Je);function K(z,De,L,V){const he=new Uint8Array(4),le=t.createTexture();t.bindTexture(z,le),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<L;Ee++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(De,0,t.RGBA,1,1,V,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(De+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return le}const O={};O[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),O[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),O[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(t.DEPTH_TEST),o.setFunc(vr),Q(!1),_e(Bd),Z(t.CULL_FACE),J(Ci);function Z(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function ue(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function me(z,De){return d[z]!==De?(t.bindFramebuffer(z,De),d[z]=De,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=De),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=De),!0):!1}function Me(z,De){let L=g,V=!1;if(z){L=h.get(De),L===void 0&&(L=[],h.set(De,L));const he=z.textures;if(L.length!==he.length||L[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Ee=he.length;le<Ee;le++)L[le]=t.COLOR_ATTACHMENT0+le;L.length=he.length,V=!0}}else L[0]!==t.BACK&&(L[0]=t.BACK,V=!0);V&&t.drawBuffers(L)}function w(z){return v!==z?(t.useProgram(z),v=z,!0):!1}const C={[ms]:t.FUNC_ADD,[DM]:t.FUNC_SUBTRACT,[LM]:t.FUNC_REVERSE_SUBTRACT};C[IM]=t.MIN,C[NM]=t.MAX;const I={[UM]:t.ZERO,[OM]:t.ONE,[FM]:t.SRC_COLOR,[Nc]:t.SRC_ALPHA,[GM]:t.SRC_ALPHA_SATURATE,[VM]:t.DST_COLOR,[zM]:t.DST_ALPHA,[BM]:t.ONE_MINUS_SRC_COLOR,[Uc]:t.ONE_MINUS_SRC_ALPHA,[kM]:t.ONE_MINUS_DST_COLOR,[HM]:t.ONE_MINUS_DST_ALPHA,[WM]:t.CONSTANT_COLOR,[XM]:t.ONE_MINUS_CONSTANT_COLOR,[qM]:t.CONSTANT_ALPHA,[$M]:t.ONE_MINUS_CONSTANT_ALPHA};function J(z,De,L,V,he,le,Ee,Ie,tt,ut){if(z===Ci){m===!0&&(ue(t.BLEND),m=!1);return}if(m===!1&&(Z(t.BLEND),m=!0),z!==PM){if(z!==p||ut!==F){if((M!==ms||A!==ms)&&(t.blendEquation(t.FUNC_ADD),M=ms,A=ms),ut)switch(z){case ar:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zd:t.blendFunc(t.ONE,t.ONE);break;case Hd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:dt("WebGLState: Invalid blending: ",z);break}else switch(z){case ar:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Hd:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vd:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",z);break}E=null,S=null,T=null,D=null,x.set(0,0,0),R=0,p=z,F=ut}return}he=he||De,le=le||L,Ee=Ee||V,(De!==M||he!==A)&&(t.blendEquationSeparate(C[De],C[he]),M=De,A=he),(L!==E||V!==S||le!==T||Ee!==D)&&(t.blendFuncSeparate(I[L],I[V],I[le],I[Ee]),E=L,S=V,T=le,D=Ee),(Ie.equals(x)===!1||tt!==R)&&(t.blendColor(Ie.r,Ie.g,Ie.b,tt),x.copy(Ie),R=tt),p=z,F=!1}function X(z,De){z.side===ri?ue(t.CULL_FACE):Z(t.CULL_FACE);let L=z.side===En;De&&(L=!L),Q(L),z.blending===ar&&z.transparent===!1?J(Ci):J(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const V=z.stencilWrite;a.setTest(V),V&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ae(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(z){N!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),N=z)}function _e(z){z!==wM?(Z(t.CULL_FACE),z!==k&&(z===Bd?t.cullFace(t.BACK):z===RM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),k=z}function ge(z){z!==oe&&(W&&t.lineWidth(z),oe=z)}function ae(z,De,L){z?(Z(t.POLYGON_OFFSET_FILL),(ne!==De||G!==L)&&(ne=De,G=L,o.getReversed()&&(De=-De),t.polygonOffset(De,L))):ue(t.POLYGON_OFFSET_FILL)}function fe(z){z?Z(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function Re(z){z===void 0&&(z=t.TEXTURE0+j-1),ye!==z&&(t.activeTexture(z),ye=z)}function P(z,De,L){L===void 0&&(ye===null?L=t.TEXTURE0+j-1:L=ye);let V=ve[L];V===void 0&&(V={type:void 0,texture:void 0},ve[L]=V),(V.type!==z||V.texture!==De)&&(ye!==L&&(t.activeTexture(L),ye=L),t.bindTexture(z,De||O[z]),V.type=z,V.texture=De)}function Fe(){const z=ve[ye];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ne(){try{t.compressedTexImage2D(...arguments)}catch(z){dt("WebGLState:",z)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(z){dt("WebGLState:",z)}}function _(){try{t.texSubImage2D(...arguments)}catch(z){dt("WebGLState:",z)}}function B(){try{t.texSubImage3D(...arguments)}catch(z){dt("WebGLState:",z)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(z){dt("WebGLState:",z)}}function ie(){try{t.compressedTexSubImage3D(...arguments)}catch(z){dt("WebGLState:",z)}}function Se(){try{t.texStorage2D(...arguments)}catch(z){dt("WebGLState:",z)}}function be(){try{t.texStorage3D(...arguments)}catch(z){dt("WebGLState:",z)}}function ce(){try{t.texImage2D(...arguments)}catch(z){dt("WebGLState:",z)}}function de(){try{t.texImage3D(...arguments)}catch(z){dt("WebGLState:",z)}}function xe(z){return f[z]!==void 0?f[z]:t.getParameter(z)}function He(z,De){f[z]!==De&&(t.pixelStorei(z,De),f[z]=De)}function Le(z){rt.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),rt.copy(z))}function Ce(z){Qe.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),Qe.copy(z))}function Xe(z,De){let L=c.get(De);L===void 0&&(L=new WeakMap,c.set(De,L));let V=L.get(z);V===void 0&&(V=t.getUniformBlockIndex(De,z.name),L.set(z,V))}function $e(z,De){const V=c.get(De).get(z);l.get(De)!==V&&(t.uniformBlockBinding(De,V,z.__bindingPointIndex),l.set(De,V))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},ye=null,ve={},d={},h=new WeakMap,g=[],v=null,m=!1,p=null,M=null,E=null,S=null,A=null,T=null,D=null,x=new lt(0,0,0),R=0,F=!1,N=null,k=null,oe=null,ne=null,G=null,rt.set(0,0,t.canvas.width,t.canvas.height),Qe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ue,bindFramebuffer:me,drawBuffers:Me,useProgram:w,setBlending:J,setMaterial:X,setFlipSided:Q,setCullFace:_e,setLineWidth:ge,setPolygonOffset:ae,setScissorTest:fe,activeTexture:Re,bindTexture:P,unbindTexture:Fe,compressedTexImage2D:Ne,compressedTexImage3D:b,texImage2D:ce,texImage3D:de,pixelStorei:He,getParameter:xe,updateUBOMapping:Xe,uniformBlockBinding:$e,texStorage2D:Se,texStorage3D:be,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:$,compressedTexSubImage3D:ie,scissor:Le,viewport:Ce,reset:et}}function OR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,_){return g?new OffscreenCanvas(b,_):Ha("canvas")}function m(b,_,B){let $=1;const ie=Ne(b);if((ie.width>B||ie.height>B)&&($=B/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Se=Math.floor($*ie.width),be=Math.floor($*ie.height);d===void 0&&(d=v(Se,be));const ce=_?v(Se,be):d;return ce.width=Se,ce.height=be,ce.getContext("2d").drawImage(b,0,0,Se,be),Ke("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Se+"x"+be+")."),ce}else return"data"in b&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function p(b){return b.generateMipmaps}function M(b){t.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(b,_,B,$,ie,Se=!1){if(b!==null){if(t[b]!==void 0)return t[b];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let be;$&&(be=e.get("EXT_texture_norm16"),be||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=_;if(_===t.RED&&(B===t.FLOAT&&(ce=t.R32F),B===t.HALF_FLOAT&&(ce=t.R16F),B===t.UNSIGNED_BYTE&&(ce=t.R8),B===t.UNSIGNED_SHORT&&be&&(ce=be.R16_EXT),B===t.SHORT&&be&&(ce=be.R16_SNORM_EXT)),_===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ce=t.R8UI),B===t.UNSIGNED_SHORT&&(ce=t.R16UI),B===t.UNSIGNED_INT&&(ce=t.R32UI),B===t.BYTE&&(ce=t.R8I),B===t.SHORT&&(ce=t.R16I),B===t.INT&&(ce=t.R32I)),_===t.RG&&(B===t.FLOAT&&(ce=t.RG32F),B===t.HALF_FLOAT&&(ce=t.RG16F),B===t.UNSIGNED_BYTE&&(ce=t.RG8),B===t.UNSIGNED_SHORT&&be&&(ce=be.RG16_EXT),B===t.SHORT&&be&&(ce=be.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(ce=t.RG8UI),B===t.UNSIGNED_SHORT&&(ce=t.RG16UI),B===t.UNSIGNED_INT&&(ce=t.RG32UI),B===t.BYTE&&(ce=t.RG8I),B===t.SHORT&&(ce=t.RG16I),B===t.INT&&(ce=t.RG32I)),_===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(ce=t.RGB8UI),B===t.UNSIGNED_SHORT&&(ce=t.RGB16UI),B===t.UNSIGNED_INT&&(ce=t.RGB32UI),B===t.BYTE&&(ce=t.RGB8I),B===t.SHORT&&(ce=t.RGB16I),B===t.INT&&(ce=t.RGB32I)),_===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(ce=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(ce=t.RGBA16UI),B===t.UNSIGNED_INT&&(ce=t.RGBA32UI),B===t.BYTE&&(ce=t.RGBA8I),B===t.SHORT&&(ce=t.RGBA16I),B===t.INT&&(ce=t.RGBA32I)),_===t.RGB&&(B===t.UNSIGNED_SHORT&&be&&(ce=be.RGB16_EXT),B===t.SHORT&&be&&(ce=be.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(ce=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(ce=t.R11F_G11F_B10F)),_===t.RGBA){const de=Se?za:ft.getTransfer(ie);B===t.FLOAT&&(ce=t.RGBA32F),B===t.HALF_FLOAT&&(ce=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ce=de===vt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&be&&(ce=be.RGBA16_EXT),B===t.SHORT&&be&&(ce=be.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(b,_){let B;return b?_===null||_===pi||_===go?B=t.DEPTH24_STENCIL8:_===oi?B=t.DEPTH32F_STENCIL8:_===mo&&(B=t.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pi||_===go?B=t.DEPTH_COMPONENT24:_===oi?B=t.DEPTH_COMPONENT32F:_===mo&&(B=t.DEPTH_COMPONENT16),B}function T(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Yt&&b.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function D(b){const _=b.target;_.removeEventListener("dispose",D),R(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(b){const _=b.target;_.removeEventListener("dispose",x),N(_)}function R(b){const _=i.get(b);if(_.__webglInit===void 0)return;const B=b.source,$=h.get(B);if($){const ie=$[_.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(b),Object.keys($).length===0&&h.delete(B)}i.remove(b)}function F(b){const _=i.get(b);t.deleteTexture(_.__webglTexture);const B=b.source,$=h.get(B);delete $[_.__cacheKey],o.memory.textures--}function N(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let ie=0;ie<_.__webglFramebuffer[$].length;ie++)t.deleteFramebuffer(_.__webglFramebuffer[$][ie]);else t.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)t.deleteFramebuffer(_.__webglFramebuffer[$]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=b.textures;for(let $=0,ie=B.length;$<ie;$++){const Se=i.get(B[$]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(B[$])}i.remove(b)}let k=0;function oe(){k=0}function ne(){return k}function G(b){k=b}function j(){const b=k;return b>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),k+=1,b}function W(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function se(b,_){const B=i.get(b);if(b.isVideoTexture&&P(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const $=b.image;if($===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(B,b,_);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+_)}function pe(b,_){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){ue(B,b,_);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+_)}function ye(b,_){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){ue(B,b,_);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+_)}function ve(b,_){const B=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&B.__version!==b.version){me(B,b,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+_)}const Te={[Gc]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Wc]:t.MIRRORED_REPEAT},Je={[Yt]:t.NEAREST,[ZM]:t.NEAREST_MIPMAP_NEAREST,[Fo]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[Nl]:t.LINEAR_MIPMAP_NEAREST,[Ss]:t.LINEAR_MIPMAP_LINEAR},rt={[QM]:t.NEVER,[sE]:t.ALWAYS,[eE]:t.LESS,[lf]:t.LEQUAL,[tE]:t.EQUAL,[cf]:t.GEQUAL,[nE]:t.GREATER,[iE]:t.NOTEQUAL};function Qe(b,_){if(_.type===oi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===Nl||_.magFilter===Fo||_.magFilter===Ss||_.minFilter===an||_.minFilter===Nl||_.minFilter===Fo||_.minFilter===Ss)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Te[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Te[_.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Te[_.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Je[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Je[_.minFilter]),_.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,rt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==Fo&&_.minFilter!==Ss||_.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function K(b,_){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",D));const $=_.source;let ie=h.get($);ie===void 0&&(ie={},h.set($,ie));const Se=W(_);if(Se!==b.__cacheKey){ie[Se]===void 0&&(ie[Se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[Se].usedTimes++;const be=ie[b.__cacheKey];be!==void 0&&(ie[b.__cacheKey].usedTimes--,be.usedTimes===0&&F(_)),b.__cacheKey=Se,b.__webglTexture=ie[Se].texture}return B}function O(b,_,B){return Math.floor(Math.floor(b/B)/_)}function Z(b,_,B,$){const Se=b.updateRanges;if(Se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,B,$,_.data);else{Se.sort((He,Le)=>He.start-Le.start);let be=0;for(let He=1;He<Se.length;He++){const Le=Se[be],Ce=Se[He],Xe=Le.start+Le.count,$e=O(Ce.start,_.width,4),et=O(Le.start,_.width,4);Ce.start<=Xe+1&&$e===et&&O(Ce.start+Ce.count-1,_.width,4)===$e?Le.count=Math.max(Le.count,Ce.start+Ce.count-Le.start):(++be,Se[be]=Ce)}Se.length=be+1;const ce=n.getParameter(t.UNPACK_ROW_LENGTH),de=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let He=0,Le=Se.length;He<Le;He++){const Ce=Se[He],Xe=Math.floor(Ce.start/4),$e=Math.ceil(Ce.count/4),et=Xe%_.width,z=Math.floor(Xe/_.width),De=$e,L=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,et),n.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,et,z,De,L,B,$,_.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ce),n.pixelStorei(t.UNPACK_SKIP_PIXELS,de),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function ue(b,_,B){let $=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=t.TEXTURE_3D);const ie=K(b,_),Se=_.source;n.bindTexture($,b.__webglTexture,t.TEXTURE0+B);const be=i.get(Se);if(Se.version!==be.__version||ie===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const L=ft.getPrimaries(ft.workingColorSpace),V=_.colorSpace===Ji?null:ft.getPrimaries(_.colorSpace),he=_.colorSpace===Ji||L===V?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let de=m(_.image,!1,s.maxTextureSize);de=Fe(_,de);const xe=r.convert(_.format,_.colorSpace),He=r.convert(_.type);let Le=S(_.internalFormat,xe,He,_.normalized,_.colorSpace,_.isVideoTexture);Qe($,_);let Ce;const Xe=_.mipmaps,$e=_.isVideoTexture!==!0,et=be.__version===void 0||ie===!0,z=Se.dataReady,De=T(_,de);if(_.isDepthTexture)Le=A(_.format===ys,_.type),et&&($e?n.texStorage2D(t.TEXTURE_2D,1,Le,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Le,de.width,de.height,0,xe,He,null));else if(_.isDataTexture)if(Xe.length>0){$e&&et&&n.texStorage2D(t.TEXTURE_2D,De,Le,Xe[0].width,Xe[0].height);for(let L=0,V=Xe.length;L<V;L++)Ce=Xe[L],$e?z&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,Ce.width,Ce.height,xe,He,Ce.data):n.texImage2D(t.TEXTURE_2D,L,Le,Ce.width,Ce.height,0,xe,He,Ce.data);_.generateMipmaps=!1}else $e?(et&&n.texStorage2D(t.TEXTURE_2D,De,Le,de.width,de.height),z&&Z(_,de,xe,He)):n.texImage2D(t.TEXTURE_2D,0,Le,de.width,de.height,0,xe,He,de.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Le,Xe[0].width,Xe[0].height,de.depth);for(let L=0,V=Xe.length;L<V;L++)if(Ce=Xe[L],_.format!==Vn)if(xe!==null)if($e){if(z)if(_.layerUpdates.size>0){const he=Sh(Ce.width,Ce.height,_.format,_.type);for(const le of _.layerUpdates){const Ee=Ce.data.subarray(le*he/Ce.data.BYTES_PER_ELEMENT,(le+1)*he/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,le,Ce.width,Ce.height,1,xe,Ee)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,0,Ce.width,Ce.height,de.depth,xe,Ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,L,Le,Ce.width,Ce.height,de.depth,0,Ce.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,0,Ce.width,Ce.height,de.depth,xe,He,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,L,Le,Ce.width,Ce.height,de.depth,0,xe,He,Ce.data)}else{$e&&et&&n.texStorage2D(t.TEXTURE_2D,De,Le,Xe[0].width,Xe[0].height);for(let L=0,V=Xe.length;L<V;L++)Ce=Xe[L],_.format!==Vn?xe!==null?$e?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,L,0,0,Ce.width,Ce.height,xe,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,L,Le,Ce.width,Ce.height,0,Ce.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?z&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,Ce.width,Ce.height,xe,He,Ce.data):n.texImage2D(t.TEXTURE_2D,L,Le,Ce.width,Ce.height,0,xe,He,Ce.data)}else if(_.isDataArrayTexture)if($e){if(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Le,de.width,de.height,de.depth),z)if(_.layerUpdates.size>0){const L=Sh(de.width,de.height,_.format,_.type);for(const V of _.layerUpdates){const he=de.data.subarray(V*L/de.data.BYTES_PER_ELEMENT,(V+1)*L/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,V,de.width,de.height,1,xe,He,he)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,xe,He,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,de.width,de.height,de.depth,0,xe,He,de.data);else if(_.isData3DTexture)$e?(et&&n.texStorage3D(t.TEXTURE_3D,De,Le,de.width,de.height,de.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,xe,He,de.data)):n.texImage3D(t.TEXTURE_3D,0,Le,de.width,de.height,de.depth,0,xe,He,de.data);else if(_.isFramebufferTexture){if(et)if($e)n.texStorage2D(t.TEXTURE_2D,De,Le,de.width,de.height);else{let L=de.width,V=de.height;for(let he=0;he<De;he++)n.texImage2D(t.TEXTURE_2D,he,Le,L,V,0,xe,He,null),L>>=1,V>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const L=t.canvas;if(L.hasAttribute("layoutsubtree")||L.setAttribute("layoutsubtree","true"),de.parentNode!==L){L.appendChild(de),f.add(_),L.onpaint=V=>{const he=V.changedElements;for(const le of f)he.includes(le.image)&&(le.needsUpdate=!0)},L.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,de);else{const he=t.RGBA,le=t.RGBA,Ee=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,he,le,Ee,de)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Xe.length>0){if($e&&et){const L=Ne(Xe[0]);n.texStorage2D(t.TEXTURE_2D,De,Le,L.width,L.height)}for(let L=0,V=Xe.length;L<V;L++)Ce=Xe[L],$e?z&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,xe,He,Ce):n.texImage2D(t.TEXTURE_2D,L,Le,xe,He,Ce);_.generateMipmaps=!1}else if($e){if(et){const L=Ne(de);n.texStorage2D(t.TEXTURE_2D,De,Le,L.width,L.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,He,de)}else n.texImage2D(t.TEXTURE_2D,0,Le,xe,He,de);p(_)&&M($),be.__version=Se.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function me(b,_,B){if(_.image.length!==6)return;const $=K(b,_),ie=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const Se=i.get(ie);if(ie.version!==Se.__version||$===!0){n.activeTexture(t.TEXTURE0+B);const be=ft.getPrimaries(ft.workingColorSpace),ce=_.colorSpace===Ji?null:ft.getPrimaries(_.colorSpace),de=_.colorSpace===Ji||be===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,He=_.image[0]&&_.image[0].isDataTexture,Le=[];for(let le=0;le<6;le++)!xe&&!He?Le[le]=m(_.image[le],!0,s.maxCubemapSize):Le[le]=He?_.image[le].image:_.image[le],Le[le]=Fe(_,Le[le]);const Ce=Le[0],Xe=r.convert(_.format,_.colorSpace),$e=r.convert(_.type),et=S(_.internalFormat,Xe,$e,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,De=Se.__version===void 0||$===!0,L=ie.dataReady;let V=T(_,Ce);Qe(t.TEXTURE_CUBE_MAP,_);let he;if(xe){z&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,V,et,Ce.width,Ce.height);for(let le=0;le<6;le++){he=Le[le].mipmaps;for(let Ee=0;Ee<he.length;Ee++){const Ie=he[Ee];_.format!==Vn?Xe!==null?z?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Ie.width,Ie.height,Xe,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,et,Ie.width,Ie.height,0,Ie.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Ie.width,Ie.height,Xe,$e,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,et,Ie.width,Ie.height,0,Xe,$e,Ie.data)}}}else{if(he=_.mipmaps,z&&De){he.length>0&&V++;const le=Ne(Le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,V,et,le.width,le.height)}for(let le=0;le<6;le++)if(He){z?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le[le].width,Le[le].height,Xe,$e,Le[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,et,Le[le].width,Le[le].height,0,Xe,$e,Le[le].data);for(let Ee=0;Ee<he.length;Ee++){const tt=he[Ee].image[le].image;z?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,tt.width,tt.height,Xe,$e,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,et,tt.width,tt.height,0,Xe,$e,tt.data)}}else{z?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Xe,$e,Le[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,et,Xe,$e,Le[le]);for(let Ee=0;Ee<he.length;Ee++){const Ie=he[Ee];z?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,Xe,$e,Ie.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,et,Xe,$e,Ie.image[le])}}}p(_)&&M(t.TEXTURE_CUBE_MAP),Se.__version=ie.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Me(b,_,B,$,ie,Se){const be=r.convert(B.format,B.colorSpace),ce=r.convert(B.type),de=S(B.internalFormat,be,ce,B.normalized,B.colorSpace),xe=i.get(_),He=i.get(B);if(He.__renderTarget=_,!xe.__hasExternalTextures){const Le=Math.max(1,_.width>>Se),Ce=Math.max(1,_.height>>Se);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Se,de,Le,Ce,_.depth,0,be,ce,null):n.texImage2D(ie,Se,de,Le,Ce,0,be,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ie,He.__webglTexture,0,fe(_)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ie,He.__webglTexture,Se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(b,_,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer){const $=_.depthTexture,ie=$&&$.isDepthTexture?$.type:null,Se=A(_.stencilBuffer,ie),be=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Re(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe(_),Se,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe(_),Se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Se,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,b)}else{const $=_.textures;for(let ie=0;ie<$.length;ie++){const Se=$[ie],be=r.convert(Se.format,Se.colorSpace),ce=r.convert(Se.type),de=S(Se.internalFormat,be,ce,Se.normalized,Se.colorSpace);Re(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe(_),de,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe(_),de,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,de,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function C(b,_,B){const $=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=i.get(_.depthTexture);if(ie.__renderTarget=_,(!ie.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Qe(t.TEXTURE_CUBE_MAP,_.depthTexture);const xe=r.convert(_.depthTexture.format),He=r.convert(_.depthTexture.type);let Le;_.depthTexture.format===Ui?Le=t.DEPTH_COMPONENT24:_.depthTexture.format===ys&&(Le=t.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Le,_.width,_.height,0,xe,He,null)}}else se(_.depthTexture,0);const Se=ie.__webglTexture,be=fe(_),ce=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,de=_.depthTexture.format===ys?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ui)Re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ce,Se,0,be):t.framebufferTexture2D(t.FRAMEBUFFER,de,ce,Se,0);else if(_.depthTexture.format===ys)Re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ce,Se,0,be):t.framebufferTexture2D(t.FRAMEBUFFER,de,ce,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function I(b){const _=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const ie=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),_.__depthDisposeCallback=ie}_.__boundDepthTexture=$}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let $=0;$<6;$++)C(_.__webglFramebuffer[$],b,$);else{const $=b.texture.mipmaps;$&&$.length>0?C(_.__webglFramebuffer[0],b,0):C(_.__webglFramebuffer,b,0)}else if(B){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=t.createRenderbuffer(),w(_.__webglDepthbuffer[$],b,!1);else{const ie=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=_.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Se)}}else{const $=b.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),w(_.__webglDepthbuffer,b,!1);else{const ie=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function J(b,_,B){const $=i.get(b);_!==void 0&&Me($.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&I(b)}function X(b){const _=b.texture,B=i.get(b),$=i.get(_);b.addEventListener("dispose",x);const ie=b.textures,Se=b.isWebGLCubeRenderTarget===!0,be=ie.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=_.version,o.memory.textures++),Se){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let de=0;de<_.mipmaps.length;de++)B.__webglFramebuffer[ce][de]=t.createFramebuffer()}else B.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)B.__webglFramebuffer[ce]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(be)for(let ce=0,de=ie.length;ce<de;ce++){const xe=i.get(ie[ce]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Re(b)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const de=ie[ce];B.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const xe=r.convert(de.format,de.colorSpace),He=r.convert(de.type),Le=S(de.internalFormat,xe,He,de.normalized,de.colorSpace,b.isXRRenderTarget===!0),Ce=fe(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Le,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),w(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Se){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Qe(t.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)Me(B.__webglFramebuffer[ce][de],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else Me(B.__webglFramebuffer[ce],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(_)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let ce=0,de=ie.length;ce<de;ce++){const xe=ie[ce],He=i.get(xe);let Le=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Le=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Le,He.__webglTexture),Qe(Le,xe),Me(B.__webglFramebuffer,b,xe,t.COLOR_ATTACHMENT0+ce,Le,0),p(xe)&&M(Le)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,$.__webglTexture),Qe(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)Me(B.__webglFramebuffer[de],b,_,t.COLOR_ATTACHMENT0,ce,de);else Me(B.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,ce,0);p(_)&&M(ce),n.unbindTexture()}b.depthBuffer&&I(b)}function Q(b){const _=b.textures;for(let B=0,$=_.length;B<$;B++){const ie=_[B];if(p(ie)){const Se=E(b),be=i.get(ie).__webglTexture;n.bindTexture(Se,be),M(Se),n.unbindTexture()}}}const _e=[],ge=[];function ae(b){if(b.samples>0){if(Re(b)===!1){const _=b.textures,B=b.width,$=b.height;let ie=t.COLOR_BUFFER_BIT;const Se=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(b),ce=_.length>1;if(ce)for(let xe=0;xe<_.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const de=b.texture.mipmaps;de&&de.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const He=i.get(_[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,B,$,0,0,B,$,ie,t.NEAREST),l===!0&&(_e.length=0,ge.length=0,_e.push(t.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(_e.push(Se),ge.push(Se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let xe=0;xe<_.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const He=i.get(_[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function fe(b){return Math.min(s.maxSamples,b.samples)}function Re(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function Fe(b,_){const B=b.colorSpace,$=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Ba&&B!==Ji&&(ft.getTransfer(B)===vt?($!==Vn||ie!==Rn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",B)),_}function Ne(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=oe,this.getTextureUnits=ne,this.setTextureUnits=G,this.setTexture2D=se,this.setTexture2DArray=pe,this.setTexture3D=ye,this.setTextureCube=ve,this.rebindTextures=J,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function FR(t,e){function n(i,s=Ji){let r;const o=ft.getTransfer(s);if(i===Rn)return t.UNSIGNED_BYTE;if(i===nf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===jm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Qm)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zm)return t.BYTE;if(i===Jm)return t.SHORT;if(i===mo)return t.UNSIGNED_SHORT;if(i===tf)return t.INT;if(i===pi)return t.UNSIGNED_INT;if(i===oi)return t.FLOAT;if(i===Ni)return t.HALF_FLOAT;if(i===eg)return t.ALPHA;if(i===tg)return t.RGB;if(i===Vn)return t.RGBA;if(i===Ui)return t.DEPTH_COMPONENT;if(i===ys)return t.DEPTH_STENCIL;if(i===ng)return t.RED;if(i===rf)return t.RED_INTEGER;if(i===Ps)return t.RG;if(i===of)return t.RG_INTEGER;if(i===af)return t.RGBA_INTEGER;if(i===_a||i===va||i===xa||i===Sa)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xc||i===qc||i===$c||i===Yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kc||i===Zc||i===Jc||i===jc||i===Qc||i===Oa||i===eu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kc||i===Zc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===jc)return r.COMPRESSED_R11_EAC;if(i===Qc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Oa)return r.COMPRESSED_RG11_EAC;if(i===eu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===fu||i===du||i===hu||i===pu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===iu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===su)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ru)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ou)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===au)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===du)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mu||i===gu||i===_u)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mu)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_u)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vu||i===xu||i===Fa||i===Su)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Su)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===go?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const BR=`
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

}`;class HR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ug(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new mi({vertexShader:BR,fragmentShader:zR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new nn(new Ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VR extends rs{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",m=new HR,p={},M=n.getContextAttributes();let E=null,S=null;const A=[],T=[],D=new je;let x=null;const R=new In;R.viewport=new Pt;const F=new In;F.viewport=new Pt;const N=[R,F],k=new YE;let oe=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let O=A[K];return O===void 0&&(O=new Vl,A[K]=O),O.getTargetRaySpace()},this.getControllerGrip=function(K){let O=A[K];return O===void 0&&(O=new Vl,A[K]=O),O.getGripSpace()},this.getHand=function(K){let O=A[K];return O===void 0&&(O=new Vl,A[K]=O),O.getHandSpace()};function G(K){const O=T.indexOf(K.inputSource);if(O===-1)return;const Z=A[O];Z!==void 0&&(Z.update(K.inputSource,K.frame,c||o),Z.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",W);for(let K=0;K<A.length;K++){const O=T[K];O!==null&&(T[K]=null,A[K].disconnect(O))}oe=null,ne=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(E),h=null,d=null,f=null,s=null,S=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",j),s.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,ue=null,me=null;M.depth&&(me=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=M.stencil?ys:Ui,ue=M.stencil?go:pi);const Me={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new fi(d.textureWidth,d.textureHeight,{format:Vn,type:Rn,depthTexture:new Sr(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Z={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,Z),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new fi(h.framebufferWidth,h.framebufferHeight,{format:Vn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(K){for(let O=0;O<K.removed.length;O++){const Z=K.removed[O],ue=T.indexOf(Z);ue>=0&&(T[ue]=null,A[ue].disconnect(Z))}for(let O=0;O<K.added.length;O++){const Z=K.added[O];let ue=T.indexOf(Z);if(ue===-1){for(let Me=0;Me<A.length;Me++)if(Me>=T.length){T.push(Z),ue=Me;break}else if(T[Me]===null){T[Me]=Z,ue=Me;break}if(ue===-1)break}const me=A[ue];me&&me.connect(Z)}}const se=new Y,pe=new Y;function ye(K,O,Z){se.setFromMatrixPosition(O.matrixWorld),pe.setFromMatrixPosition(Z.matrixWorld);const ue=se.distanceTo(pe),me=O.projectionMatrix.elements,Me=Z.projectionMatrix.elements,w=me[14]/(me[10]-1),C=me[14]/(me[10]+1),I=(me[9]+1)/me[5],J=(me[9]-1)/me[5],X=(me[8]-1)/me[0],Q=(Me[8]+1)/Me[0],_e=w*X,ge=w*Q,ae=ue/(-X+Q),fe=ae*-X;if(O.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(fe),K.translateZ(ae),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),me[10]===-1)K.projectionMatrix.copy(O.projectionMatrix),K.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const Re=w+ae,P=C+ae,Fe=_e-fe,Ne=ge+(ue-fe),b=I*C/P*Re,_=J*C/P*Re;K.projectionMatrix.makePerspective(Fe,Ne,b,_,Re,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ve(K,O){O===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(O.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let O=K.near,Z=K.far;m.texture!==null&&(m.depthNear>0&&(O=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),k.near=F.near=R.near=O,k.far=F.far=R.far=Z,(oe!==k.near||ne!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),oe=k.near,ne=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,F.layers.mask=k.layers.mask&-3;const ue=K.parent,me=k.cameras;ve(k,ue);for(let Me=0;Me<me.length;Me++)ve(me[Me],ue);me.length===2?ye(k,R,F):k.projectionMatrix.copy(R.projectionMatrix),Te(K,k,ue)};function Te(K,O,Z){Z===null?K.matrix.copy(O.matrixWorld):(K.matrix.copy(Z.matrixWorld),K.matrix.invert(),K.matrix.multiply(O.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(O.projectionMatrix),K.projectionMatrixInverse.copy(O.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return p[K]};let Je=null;function rt(K,O){if(u=O.getViewerPose(c||o),g=O,u!==null){const Z=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let ue=!1;Z.length!==k.cameras.length&&(k.cameras.length=0,ue=!0);for(let C=0;C<Z.length;C++){const I=Z[C];let J=null;if(h!==null)J=h.getViewport(I);else{const Q=f.getViewSubImage(d,I);J=Q.viewport,C===0&&(e.setRenderTargetTextures(S,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(S))}let X=N[C];X===void 0&&(X=new In,X.layers.enable(C),X.viewport=new Pt,N[C]=X),X.matrix.fromArray(I.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(I.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(J.x,J.y,J.width,J.height),C===0&&(k.matrix.copy(X.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ue===!0&&k.cameras.push(X)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const C=f.getDepthInformation(Z[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<Z.length;C++){const I=Z[C].camera;if(I){let J=p[I];J||(J=new ug,p[I]=J);const X=f.getCameraImage(I);J.sourceTexture=X}}}}for(let Z=0;Z<A.length;Z++){const ue=T[Z],me=A[Z];ue!==null&&me!==void 0&&me.update(ue,O,c||o)}Je&&Je(K,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}const Qe=new pg;Qe.setAnimationLoop(rt),this.setAnimationLoop=function(K){Je=K},this.dispose=function(){}}}const kR=new Ct,yg=new nt;yg.set(-1,0,0,0,1,0,0,0,1);function GR(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,fg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,E,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),E=M.envMap,S=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(kR.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yg),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function WR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const T=A.program;i.uniformBlockBinding(S,T)}function c(S,A){let T=s[S.id];T===void 0&&(m(S),T=u(S),s[S.id]=T,S.addEventListener("dispose",M));const D=A.program;i.updateUBOMapping(S,D);const x=e.render.frame;r[S.id]!==x&&(d(S),r[S.id]=x)}function u(S){const A=f();S.__bindingPointIndex=A;const T=t.createBuffer(),D=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,D,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,T),T}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const A=s[S.id],T=S.uniforms,D=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let x=0,R=T.length;x<R;x++){const F=T[x];if(Array.isArray(F))for(let N=0,k=F.length;N<k;N++)h(F[N],x,N,D);else h(F,x,0,D)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(S,A,T,D){if(v(S,A,T,D)===!0){const x=S.__offset,R=S.value;if(Array.isArray(R)){let F=0;for(let N=0;N<R.length;N++){const k=R[N],oe=p(k);g(k,S.__data,F),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(F+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function g(S,A,T){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,T)}function v(S,A,T,D){const x=S.value,R=A+"_"+T;if(D[R]===void 0)return typeof x=="number"||typeof x=="boolean"?D[R]=x:ArrayBuffer.isView(x)?D[R]=x.slice():D[R]=x.clone(),!0;{const F=D[R];if(typeof x=="number"||typeof x=="boolean"){if(F!==x)return D[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(F.equals(x)===!1)return F.copy(x),!0}}return!1}function m(S){const A=S.uniforms;let T=0;const D=16;for(let R=0,F=A.length;R<F;R++){const N=Array.isArray(A[R])?A[R]:[A[R]];for(let k=0,oe=N.length;k<oe;k++){const ne=N[k],G=Array.isArray(ne.value)?ne.value:[ne.value];for(let j=0,W=G.length;j<W;j++){const se=G[j],pe=p(se),ye=T%D,ve=ye%pe.boundary,Te=ye+ve;T+=ve,Te!==0&&D-Te<pe.storage&&(T+=D-Te),ne.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=T,T+=pe.storage}}}const x=T%D;return x>0&&(T+=D-x),S.__size=T,S.__cache={},this}function p(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",S),A}function M(S){const A=S.target;A.removeEventListener("dispose",M);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function E(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}const XR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function qR(){return Qn===null&&(Qn=new PE(XR,16,16,Ps,Ni),Qn.name="DFG_LUT",Qn.minFilter=an,Qn.magFilter=an,Qn.wrapS=wi,Qn.wrapT=wi,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class $R{constructor(e={}){const{canvas:n=oE(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Rn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=h,m=new Set([af,of,rf]),p=new Set([Rn,pi,mo,go,nf,sf]),M=new Uint32Array(4),E=new Int32Array(4),S=new Y;let A=null,T=null;const D=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let N=!1,k=null,oe=null,ne=null,G=null;this._outputColorSpace=Ln;let j=0,W=0,se=null,pe=-1,ye=null;const ve=new Pt,Te=new Pt;let Je=null;const rt=new lt(0);let Qe=0,K=n.width,O=n.height,Z=1,ue=null,me=null;const Me=new Pt(0,0,K,O),w=new Pt(0,0,K,O);let C=!1;const I=new hf;let J=!1,X=!1;const Q=new Ct,_e=new Y,ge=new Pt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Re(){return se===null?Z:1}let P=i;function Fe(y,q){return n.getContext(y,q)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ef}`),n.addEventListener("webglcontextlost",tt,!1),n.addEventListener("webglcontextrestored",ut,!1),n.addEventListener("webglcontextcreationerror",un,!1),P===null){const q="webgl2";if(P=Fe(q,y),P===null)throw Fe(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw dt("WebGLRenderer: "+y.message),y}let Ne,b,_,B,$,ie,Se,be,ce,de,xe,He,Le,Ce,Xe,$e,et,z,De,L,V,he,le;function Ee(){Ne=new qA(P),Ne.init(),V=new FR(P,Ne),b=new BA(P,Ne,e,V),_=new UR(P,Ne),b.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),oe=P.createFramebuffer(),ne=P.createFramebuffer(),G=P.createFramebuffer(),B=new KA(P),$=new yR,ie=new OR(P,Ne,_,$,b,V,B),Se=new XA(F),be=new QE(P),he=new OA(P,be),ce=new $A(P,be,B,he),de=new JA(P,ce,be,he,B),z=new ZA(P,b,ie),Xe=new zA($),xe=new SR(F,Se,Ne,b,he,Xe),He=new GR(F,$),Le=new ER,Ce=new CR(Ne),et=new UA(F,Se,_,de,g,l),$e=new NR(F,de,b),le=new WR(P,B,b,_),De=new FA(P,Ne,B),L=new YA(P,Ne,B),B.programs=xe.programs,F.capabilities=b,F.extensions=Ne,F.properties=$,F.renderLists=Le,F.shadowMap=$e,F.state=_,F.info=B}Ee(),v!==Rn&&(R=new QA(v,n.width,n.height,a,s,r));const Ie=new VR(F,P);this.xr=Ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Ne.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ne.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(K,O,!1))},this.getSize=function(y){return y.set(K,O)},this.setSize=function(y,q,re=!0){if(Ie.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,O=q,n.width=Math.floor(y*Z),n.height=Math.floor(q*Z),re===!0&&(n.style.width=y+"px",n.style.height=q+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,y,q)},this.getDrawingBufferSize=function(y){return y.set(K*Z,O*Z).floor()},this.setDrawingBufferSize=function(y,q,re){K=y,O=q,Z=re,n.width=Math.floor(y*re),n.height=Math.floor(q*re),this.setViewport(0,0,y,q)},this.setEffects=function(y){if(v===Rn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let q=0;q<y.length;q++)if(y[q].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ve)},this.getViewport=function(y){return y.copy(Me)},this.setViewport=function(y,q,re,ee){y.isVector4?Me.set(y.x,y.y,y.z,y.w):Me.set(y,q,re,ee),_.viewport(ve.copy(Me).multiplyScalar(Z).round())},this.getScissor=function(y){return y.copy(w)},this.setScissor=function(y,q,re,ee){y.isVector4?w.set(y.x,y.y,y.z,y.w):w.set(y,q,re,ee),_.scissor(Te.copy(w).multiplyScalar(Z).round())},this.getScissorTest=function(){return C},this.setScissorTest=function(y){_.setScissorTest(C=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(y=!0,q=!0,re=!0){let ee=0;if(y){let te=!1;if(se!==null){const ze=se.texture.format;te=m.has(ze)}if(te){const ze=se.texture.type,ke=p.has(ze),Be=et.getClearColor(),Ge=et.getClearAlpha(),We=Be.r,it=Be.g,at=Be.b;ke?(M[0]=We,M[1]=it,M[2]=at,M[3]=Ge,P.clearBufferuiv(P.COLOR,0,M)):(E[0]=We,E[1]=it,E[2]=at,E[3]=Ge,P.clearBufferiv(P.COLOR,0,E))}else ee|=P.COLOR_BUFFER_BIT}q&&(ee|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&P.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){n.removeEventListener("webglcontextlost",tt,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",un,!1),et.dispose(),Le.dispose(),Ce.dispose(),$.dispose(),Se.dispose(),de.dispose(),he.dispose(),le.dispose(),xe.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Pr),Ie.removeEventListener("sessionend",Dr),Kn.stop()};function tt(y){y.preventDefault(),qd("WebGLRenderer: Context Lost."),N=!0}function ut(){qd("WebGLRenderer: Context Restored."),N=!1;const y=B.autoReset,q=$e.enabled,re=$e.autoUpdate,ee=$e.needsUpdate,te=$e.type;Ee(),B.autoReset=y,$e.enabled=q,$e.autoUpdate=re,$e.needsUpdate=ee,$e.type=te}function un(y){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Zt(y){const q=y.target;q.removeEventListener("dispose",Zt),Co(q)}function Co(y){Po(y),$.remove(y)}function Po(y){const q=$.get(y).programs;q!==void 0&&(q.forEach(function(re){xe.releaseProgram(re)}),y.isShaderMaterial&&xe.releaseShaderCache(y))}this.renderBufferDirect=function(y,q,re,ee,te,ze){q===null&&(q=ae);const ke=te.isMesh&&te.matrixWorld.determinantAffine()<0,Be=Tg(y,q,re,ee,te);_.setMaterial(ee,ke);let Ge=re.index,We=1;if(ee.wireframe===!0){if(Ge=ce.getWireframeAttribute(re),Ge===void 0)return;We=2}const it=re.drawRange,at=re.attributes.position;let qe=it.start*We,yt=(it.start+it.count)*We;ze!==null&&(qe=Math.max(qe,ze.start*We),yt=Math.min(yt,(ze.start+ze.count)*We)),Ge!==null?(qe=Math.max(qe,0),yt=Math.min(yt,Ge.count)):at!=null&&(qe=Math.max(qe,0),yt=Math.min(yt,at.count));const Nt=yt-qe;if(Nt<0||Nt===1/0)return;he.setup(te,ee,Be,re,Ge);let Dt,Et=De;if(Ge!==null&&(Dt=be.get(Ge),Et=L,Et.setIndex(Dt)),te.isMesh)ee.wireframe===!0?(_.setLineWidth(ee.wireframeLinewidth*Re()),Et.setMode(P.LINES)):Et.setMode(P.TRIANGLES);else if(te.isLine){let Jt=ee.linewidth;Jt===void 0&&(Jt=1),_.setLineWidth(Jt*Re()),te.isLineSegments?Et.setMode(P.LINES):te.isLineLoop?Et.setMode(P.LINE_LOOP):Et.setMode(P.LINE_STRIP)}else te.isPoints?Et.setMode(P.POINTS):te.isSprite&&Et.setMode(P.TRIANGLES);if(te.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))Et.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Jt=te._multiDrawStarts,Ve=te._multiDrawCounts,bn=te._multiDrawCount,ht=Ge?be.get(Ge).bytesPerElement:1,Pn=$.get(ee).currentProgram.getUniforms();for(let Zn=0;Zn<bn;Zn++)Pn.setValue(P,"_gl_DrawID",Zn),Et.render(Jt[Zn]/ht,Ve[Zn])}else if(te.isInstancedMesh)Et.renderInstances(qe,Nt,te.count);else if(re.isInstancedBufferGeometry){const Jt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ve=Math.min(re.instanceCount,Jt);Et.renderInstances(qe,Nt,Ve)}else Et.render(qe,Nt)};function Cr(y,q,re){y.transparent===!0&&y.side===ri&&y.forceSinglePass===!1?(y.side=En,y.needsUpdate=!0,as(y,q,re),y.side=ts,y.needsUpdate=!0,as(y,q,re),y.side=ri):as(y,q,re)}this.compile=function(y,q,re=null){re===null&&(re=y),T=Ce.get(re),T.init(q),x.push(T),re.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),y!==re&&y.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),T.setupLights();const ee=new Set;return y.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const ze=te.material;if(ze)if(Array.isArray(ze))for(let ke=0;ke<ze.length;ke++){const Be=ze[ke];Cr(Be,re,te),ee.add(Be)}else Cr(ze,re,te),ee.add(ze)}),T=x.pop(),ee},this.compileAsync=function(y,q,re=null){const ee=this.compile(y,q,re);return new Promise(te=>{function ze(){if(ee.forEach(function(ke){$.get(ke).currentProgram.isReady()&&ee.delete(ke)}),ee.size===0){te(y);return}setTimeout(ze,10)}Ne.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Is=null;function Do(y){Is&&Is(y)}function Pr(){Kn.stop()}function Dr(){Kn.start()}const Kn=new pg;Kn.setAnimationLoop(Do),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(y){Is=y,Ie.setAnimationLoop(y),y===null?Kn.stop():Kn.start()},Ie.addEventListener("sessionstart",Pr),Ie.addEventListener("sessionend",Dr),this.render=function(y,q){if(q!==void 0&&q.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(y,q);const re=Ie.enabled===!0&&Ie.isPresenting===!0,ee=R!==null&&(se===null||re)&&R.begin(F,se);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(q),q=Ie.getCamera()),y.isScene===!0&&y.onBeforeRender(F,y,q,se),T=Ce.get(y,x.length),T.init(q),T.state.textureUnits=ie.getTextureUnits(),x.push(T),Q.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),I.setFromProjectionMatrix(Q,ai,q.reversedDepth),X=this.localClippingEnabled,J=Xe.init(this.clippingPlanes,X),A=Le.get(y,D.length),A.init(),D.push(A),Ie.enabled===!0&&Ie.isPresenting===!0){const ke=F.xr.getDepthSensingMesh();ke!==null&&Ns(ke,q,-1/0,F.sortObjects)}Ns(y,q,0,F.sortObjects),A.finish(),F.sortObjects===!0&&A.sort(ue,me,q.reversedDepth),fe=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,fe&&et.addToRenderList(A,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&Xe.beginShadows();const te=T.state.shadowsArray;if($e.render(te,y,q),J===!0&&Xe.endShadows(),(ee&&R.hasRenderPass())===!1){const ke=A.opaque,Be=A.transmissive;if(T.setupLights(),q.isArrayCamera){const Ge=q.cameras;if(Be.length>0)for(let We=0,it=Ge.length;We<it;We++){const at=Ge[We];Ir(ke,Be,y,at)}fe&&et.render(y);for(let We=0,it=Ge.length;We<it;We++){const at=Ge[We];Lr(A,y,at,at.viewport)}}else Be.length>0&&Ir(ke,Be,y,q),fe&&et.render(y),Lr(A,y,q)}se!==null&&W===0&&(ie.updateMultisampleRenderTarget(se),ie.updateRenderTargetMipmap(se)),ee&&R.end(F),y.isScene===!0&&y.onAfterRender(F,y,q),he.resetDefaultState(),pe=-1,ye=null,x.pop(),x.length>0?(T=x[x.length-1],ie.setTextureUnits(T.state.textureUnits),J===!0&&Xe.setGlobalState(F.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?A=D[D.length-1]:A=null,k!==null&&k.renderEnd()};function Ns(y,q,re,ee){if(y.visible===!1)return;if(y.layers.test(q.layers)){if(y.isGroup)re=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(q);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||I.intersectsSprite(y)){ee&&ge.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const ke=de.update(y),Be=y.material;Be.visible&&A.push(y,ke,Be,re,ge.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||I.intersectsObject(y))){const ke=de.update(y),Be=y.material;if(ee&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ge.copy(y.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ge.copy(ke.boundingSphere.center)),ge.applyMatrix4(y.matrixWorld).applyMatrix4(Q)),Array.isArray(Be)){const Ge=ke.groups;for(let We=0,it=Ge.length;We<it;We++){const at=Ge[We],qe=Be[at.materialIndex];qe&&qe.visible&&A.push(y,ke,qe,re,ge.z,at)}}else Be.visible&&A.push(y,ke,Be,re,ge.z,null)}}const ze=y.children;for(let ke=0,Be=ze.length;ke<Be;ke++)Ns(ze[ke],q,re,ee)}function Lr(y,q,re,ee){const{opaque:te,transmissive:ze,transparent:ke}=y;T.setupLightsView(re),J===!0&&Xe.setGlobalState(F.clippingPlanes,re),ee&&_.viewport(ve.copy(ee)),te.length>0&&os(te,q,re),ze.length>0&&os(ze,q,re),ke.length>0&&os(ke,q,re),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ir(y,q,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ee.id]===void 0){const qe=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ee.id]=new fi(1,1,{generateMipmaps:!0,type:qe?Ni:Rn,minFilter:Ss,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const ze=T.state.transmissionRenderTarget[ee.id],ke=ee.viewport||ve;ze.setSize(ke.z*F.transmissionResolutionScale,ke.w*F.transmissionResolutionScale);const Be=F.getRenderTarget(),Ge=F.getActiveCubeFace(),We=F.getActiveMipmapLevel();F.setRenderTarget(ze),F.getClearColor(rt),Qe=F.getClearAlpha(),Qe<1&&F.setClearColor(16777215,.5),F.clear(),fe&&et.render(re);const it=F.toneMapping;F.toneMapping=ui;const at=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),T.setupLightsView(ee),J===!0&&Xe.setGlobalState(F.clippingPlanes,ee),os(y,re,ee),ie.updateMultisampleRenderTarget(ze),ie.updateRenderTargetMipmap(ze),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let yt=0,Nt=q.length;yt<Nt;yt++){const Dt=q[yt],{object:Et,geometry:Jt,material:Ve,group:bn}=Dt;if(Ve.side===ri&&Et.layers.test(ee.layers)){const ht=Ve.side;Ve.side=En,Ve.needsUpdate=!0,Nr(Et,re,ee,Jt,Ve,bn),Ve.side=ht,Ve.needsUpdate=!0,qe=!0}}qe===!0&&(ie.updateMultisampleRenderTarget(ze),ie.updateRenderTargetMipmap(ze))}F.setRenderTarget(Be,Ge,We),F.setClearColor(rt,Qe),at!==void 0&&(ee.viewport=at),F.toneMapping=it}function os(y,q,re){const ee=q.isScene===!0?q.overrideMaterial:null;for(let te=0,ze=y.length;te<ze;te++){const ke=y[te],{object:Be,geometry:Ge,group:We}=ke;let it=ke.material;it.allowOverride===!0&&ee!==null&&(it=ee),Be.layers.test(re.layers)&&Nr(Be,q,re,Ge,it,We)}}function Nr(y,q,re,ee,te,ze){y.onBeforeRender(F,q,re,ee,te,ze),y.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),te.onBeforeRender(F,q,re,ee,y,ze),te.transparent===!0&&te.side===ri&&te.forceSinglePass===!1?(te.side=En,te.needsUpdate=!0,F.renderBufferDirect(re,q,ee,te,y,ze),te.side=ts,te.needsUpdate=!0,F.renderBufferDirect(re,q,ee,te,y,ze),te.side=ri):F.renderBufferDirect(re,q,ee,te,y,ze),y.onAfterRender(F,q,re,ee,te,ze)}function as(y,q,re){q.isScene!==!0&&(q=ae);const ee=$.get(y),te=T.state.lights,ze=T.state.shadowsArray,ke=te.state.version,Be=xe.getParameters(y,te.state,ze,q,re,T.state.lightProbeGridArray),Ge=xe.getProgramCacheKey(Be);let We=ee.programs;ee.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;const it=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;ee.envMap=Se.get(y.envMap||ee.environment,it),ee.envMapRotation=ee.environment!==null&&y.envMap===null?q.environmentRotation:y.envMapRotation,We===void 0&&(y.addEventListener("dispose",Zt),We=new Map,ee.programs=We);let at=We.get(Ge);if(at!==void 0){if(ee.currentProgram===at&&ee.lightsStateVersion===ke)return bf(y,Be),at}else Be.uniforms=xe.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,re,Be),y.onBeforeCompile(Be,F),at=xe.acquireProgram(Be,Ge),We.set(Ge,at),ee.uniforms=Be.uniforms;const qe=ee.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(qe.clippingPlanes=Xe.uniform),bf(y,Be),ee.needsLights=wg(y),ee.lightsStateVersion=ke,ee.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=T.state.lightProbeGridArray.length>0,ee.currentProgram=at,ee.uniformsList=null,at}function St(y){if(y.uniformsList===null){const q=y.currentProgram.getUniforms();y.uniformsList=Ma.seqWithValue(q.seq,y.uniforms)}return y.uniformsList}function bf(y,q){const re=$.get(y);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function bg(y,q){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(q.matrixWorld);for(let re=0,ee=y.length;re<ee;re++){const te=y[re];if(te.texture!==null&&te.boundingBox.containsPoint(S))return te}return null}function Tg(y,q,re,ee,te){q.isScene!==!0&&(q=ae),ie.resetTextureUnits();const ze=q.fog,ke=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,Be=se===null?F.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ft.workingColorSpace,Ge=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,We=Se.get(ee.envMap||ke,Ge),it=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,at=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!re.morphAttributes.position,yt=!!re.morphAttributes.normal,Nt=!!re.morphAttributes.color;let Dt=ui;ee.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Dt=F.toneMapping);const Et=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Jt=Et!==void 0?Et.length:0,Ve=$.get(ee),bn=T.state.lights;if(J===!0&&(X===!0||y!==ye)){const wt=y===ye&&ee.id===pe;Xe.setState(ee,y,wt)}let ht=!1;ee.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==bn.state.version||Ve.outputColorSpace!==Be||te.isBatchedMesh&&Ve.batching===!1||!te.isBatchedMesh&&Ve.batching===!0||te.isBatchedMesh&&Ve.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ve.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ve.instancing===!1||!te.isInstancedMesh&&Ve.instancing===!0||te.isSkinnedMesh&&Ve.skinning===!1||!te.isSkinnedMesh&&Ve.skinning===!0||te.isInstancedMesh&&Ve.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ve.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ve.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ve.instancingMorph===!1&&te.morphTexture!==null||Ve.envMap!==We||ee.fog===!0&&Ve.fog!==ze||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Xe.numPlanes||Ve.numIntersection!==Xe.numIntersection)||Ve.vertexAlphas!==it||Ve.vertexTangents!==at||Ve.morphTargets!==qe||Ve.morphNormals!==yt||Ve.morphColors!==Nt||Ve.toneMapping!==Dt||Ve.morphTargetsCount!==Jt||!!Ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Ve.__version=ee.version);let Pn=Ve.currentProgram;ht===!0&&(Pn=as(ee,q,te),k&&ee.isNodeMaterial&&k.onUpdateProgram(ee,Pn,Ve));let Zn=!1,Fi=!1,Us=!1;const bt=Pn.getUniforms(),Ut=Ve.uniforms;if(_.useProgram(Pn.program)&&(Zn=!0,Fi=!0,Us=!0),ee.id!==pe&&(pe=ee.id,Fi=!0),Ve.needsLights){const wt=bg(T.state.lightProbeGridArray,te);Ve.lightProbeGrid!==wt&&(Ve.lightProbeGrid=wt,Fi=!0)}if(Zn||ye!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),bt.setValue(P,"projectionMatrix",y.projectionMatrix),bt.setValue(P,"viewMatrix",y.matrixWorldInverse);const zi=bt.map.cameraPosition;zi!==void 0&&zi.setValue(P,_e.setFromMatrixPosition(y.matrixWorld)),b.logarithmicDepthBuffer&&bt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),ye!==y&&(ye=y,Fi=!0,Us=!0)}if(Ve.needsLights&&(bn.state.directionalShadowMap.length>0&&bt.setValue(P,"directionalShadowMap",bn.state.directionalShadowMap,ie),bn.state.spotShadowMap.length>0&&bt.setValue(P,"spotShadowMap",bn.state.spotShadowMap,ie),bn.state.pointShadowMap.length>0&&bt.setValue(P,"pointShadowMap",bn.state.pointShadowMap,ie)),te.isSkinnedMesh){bt.setOptional(P,te,"bindMatrix"),bt.setOptional(P,te,"bindMatrixInverse");const wt=te.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),bt.setValue(P,"boneTexture",wt.boneTexture,ie))}te.isBatchedMesh&&(bt.setOptional(P,te,"batchingTexture"),bt.setValue(P,"batchingTexture",te._matricesTexture,ie),bt.setOptional(P,te,"batchingIdTexture"),bt.setValue(P,"batchingIdTexture",te._indirectTexture,ie),bt.setOptional(P,te,"batchingColorTexture"),te._colorsTexture!==null&&bt.setValue(P,"batchingColorTexture",te._colorsTexture,ie));const Bi=re.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&z.update(te,re,Pn),(Fi||Ve.receiveShadow!==te.receiveShadow)&&(Ve.receiveShadow=te.receiveShadow,bt.setValue(P,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(Ut.envMapIntensity.value=q.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=qR()),Fi){if(bt.setValue(P,"toneMappingExposure",F.toneMappingExposure),Ve.needsLights&&Ag(Ut,Us),ze&&ee.fog===!0&&He.refreshFogUniforms(Ut,ze),He.refreshMaterialUniforms(Ut,ee,Z,O,T.state.transmissionRenderTarget[y.id]),Ve.needsLights&&Ve.lightProbeGrid){const wt=Ve.lightProbeGrid;Ut.probesSH.value=wt.texture,Ut.probesMin.value.copy(wt.boundingBox.min),Ut.probesMax.value.copy(wt.boundingBox.max),Ut.probesResolution.value.copy(wt.resolution)}Ma.upload(P,St(Ve),Ut,ie)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ma.upload(P,St(Ve),Ut,ie),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(P,"center",te.center),bt.setValue(P,"modelViewMatrix",te.modelViewMatrix),bt.setValue(P,"normalMatrix",te.normalMatrix),bt.setValue(P,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){const wt=ee.uniformsGroups;for(let zi=0,Os=wt.length;zi<Os;zi++){const Tf=wt[zi];le.update(Tf,Pn),le.bind(Tf,Pn)}}return Pn}function Ag(y,q){y.ambientLightColor.needsUpdate=q,y.lightProbe.needsUpdate=q,y.directionalLights.needsUpdate=q,y.directionalLightShadows.needsUpdate=q,y.pointLights.needsUpdate=q,y.pointLightShadows.needsUpdate=q,y.spotLights.needsUpdate=q,y.spotLightShadows.needsUpdate=q,y.rectAreaLights.needsUpdate=q,y.hemisphereLights.needsUpdate=q}function wg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(y,q,re){const ee=$.get(y);ee.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),$.get(y.texture).__webglTexture=q,$.get(y.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,q){const re=$.get(y);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(y,q=0,re=0){se=y,j=q,W=re;let ee=null,te=!1,ze=!1;if(y){const Be=$.get(y);if(Be.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,Be.__webglFramebuffer),ve.copy(y.viewport),Te.copy(y.scissor),Je=y.scissorTest,_.viewport(ve),_.scissor(Te),_.setScissorTest(Je),pe=-1;return}else if(Be.__webglFramebuffer===void 0)ie.setupRenderTarget(y);else if(Be.__hasExternalTextures)ie.rebindTextures(y,$.get(y.texture).__webglTexture,$.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const it=y.depthTexture;if(Be.__boundDepthTexture!==it){if(it!==null&&$.has(it)&&(y.width!==it.image.width||y.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(y)}}const Ge=y.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ze=!0);const We=$.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(We[q])?ee=We[q][re]:ee=We[q],te=!0):y.samples>0&&ie.useMultisampledRTT(y)===!1?ee=$.get(y).__webglMultisampledFramebuffer:Array.isArray(We)?ee=We[re]:ee=We,ve.copy(y.viewport),Te.copy(y.scissor),Je=y.scissorTest}else ve.copy(Me).multiplyScalar(Z).floor(),Te.copy(w).multiplyScalar(Z).floor(),Je=C;if(re!==0&&(ee=oe),_.bindFramebuffer(P.FRAMEBUFFER,ee)&&_.drawBuffers(y,ee),_.viewport(ve),_.scissor(Te),_.setScissorTest(Je),te){const Be=$.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,re)}else if(ze){const Be=q;for(let Ge=0;Ge<y.textures.length;Ge++){const We=$.get(y.textures[Ge]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ge,We.__webglTexture,re,Be)}}else if(y!==null&&re!==0){const Be=$.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Be.__webglTexture,re)}pe=-1},this.readRenderTargetPixels=function(y,q,re,ee,te,ze,ke,Be=0){if(!(y&&y.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=$.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){_.bindFramebuffer(P.FRAMEBUFFER,Ge);try{const We=y.textures[Be],it=We.format,at=We.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be),!b.textureFormatReadable(it)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(at)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=y.width-ee&&re>=0&&re<=y.height-te&&P.readPixels(q,re,ee,te,V.convert(it),V.convert(at),ze)}finally{const We=se!==null?$.get(se).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(y,q,re,ee,te,ze,ke,Be=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=$.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge)if(q>=0&&q<=y.width-ee&&re>=0&&re<=y.height-te){_.bindFramebuffer(P.FRAMEBUFFER,Ge);const We=y.textures[Be],it=We.format,at=We.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be),!b.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,ze.byteLength,P.STREAM_READ),P.readPixels(q,re,ee,te,V.convert(it),V.convert(at),0);const yt=se!==null?$.get(se).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,yt);const Nt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await aE(P,Nt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ze),P.deleteBuffer(qe),P.deleteSync(Nt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,q=null,re=0){const ee=Math.pow(2,-re),te=Math.floor(y.image.width*ee),ze=Math.floor(y.image.height*ee),ke=q!==null?q.x:0,Be=q!==null?q.y:0;ie.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,re,0,0,ke,Be,te,ze),_.unbindTexture()},this.copyTextureToTexture=function(y,q,re=null,ee=null,te=0,ze=0){let ke,Be,Ge,We,it,at,qe,yt,Nt;const Dt=y.isCompressedTexture?y.mipmaps[ze]:y.image;if(re!==null)ke=re.max.x-re.min.x,Be=re.max.y-re.min.y,Ge=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,it=re.min.y,at=re.isBox3?re.min.z:0;else{const Ut=Math.pow(2,-te);ke=Math.floor(Dt.width*Ut),Be=Math.floor(Dt.height*Ut),y.isDataArrayTexture?Ge=Dt.depth:y.isData3DTexture?Ge=Math.floor(Dt.depth*Ut):Ge=1,We=0,it=0,at=0}ee!==null?(qe=ee.x,yt=ee.y,Nt=ee.z):(qe=0,yt=0,Nt=0);const Et=V.convert(q.format),Jt=V.convert(q.type);let Ve;q.isData3DTexture?(ie.setTexture3D(q,0),Ve=P.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ie.setTexture2DArray(q,0),Ve=P.TEXTURE_2D_ARRAY):(ie.setTexture2D(q,0),Ve=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);const bn=_.getParameter(P.UNPACK_ROW_LENGTH),ht=_.getParameter(P.UNPACK_IMAGE_HEIGHT),Pn=_.getParameter(P.UNPACK_SKIP_PIXELS),Zn=_.getParameter(P.UNPACK_SKIP_ROWS),Fi=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,Dt.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dt.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,We),_.pixelStorei(P.UNPACK_SKIP_ROWS,it),_.pixelStorei(P.UNPACK_SKIP_IMAGES,at);const Us=y.isDataArrayTexture||y.isData3DTexture,bt=q.isDataArrayTexture||q.isData3DTexture;if(y.isDepthTexture){const Ut=$.get(y),Bi=$.get(q),wt=$.get(Ut.__renderTarget),zi=$.get(Bi.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,wt.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Os=0;Os<Ge;Os++)Us&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$.get(y).__webglTexture,te,at+Os),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$.get(q).__webglTexture,ze,Nt+Os)),P.blitFramebuffer(We,it,ke,Be,qe,yt,ke,Be,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(te!==0||y.isRenderTargetTexture||$.has(y)){const Ut=$.get(y),Bi=$.get(q);_.bindFramebuffer(P.READ_FRAMEBUFFER,ne),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,G);for(let wt=0;wt<Ge;wt++)Us?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,te,at+wt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,te),bt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Bi.__webglTexture,ze,Nt+wt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Bi.__webglTexture,ze),te!==0?P.blitFramebuffer(We,it,ke,Be,qe,yt,ke,Be,P.COLOR_BUFFER_BIT,P.NEAREST):bt?P.copyTexSubImage3D(Ve,ze,qe,yt,Nt+wt,We,it,ke,Be):P.copyTexSubImage2D(Ve,ze,qe,yt,We,it,ke,Be);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else bt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Ve,ze,qe,yt,Nt,ke,Be,Ge,Et,Jt,Dt.data):q.isCompressedArrayTexture?P.compressedTexSubImage3D(Ve,ze,qe,yt,Nt,ke,Be,Ge,Et,Dt.data):P.texSubImage3D(Ve,ze,qe,yt,Nt,ke,Be,Ge,Et,Jt,Dt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ze,qe,yt,ke,Be,Et,Jt,Dt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ze,qe,yt,Dt.width,Dt.height,Et,Dt.data):P.texSubImage2D(P.TEXTURE_2D,ze,qe,yt,ke,Be,Et,Jt,Dt);_.pixelStorei(P.UNPACK_ROW_LENGTH,bn),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Pn),_.pixelStorei(P.UNPACK_SKIP_ROWS,Zn),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Fi),ze===0&&q.generateMipmaps&&P.generateMipmap(Ve),_.unbindTexture()},this.initRenderTarget=function(y){$.get(y).__webglFramebuffer===void 0&&ie.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ie.setTextureCube(y,0):y.isData3DTexture?ie.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ie.setTexture2DArray(y,0):ie.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){j=0,W=0,se=null,_.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),n.unpackColorSpace=ft._getUnpackColorSpace()}}const Wh={type:"change"},vf={type:"start"},Mg={type:"end"},la=new ul,Xh=new Ki,YR=Math.cos(70*uE.DEG2RAD),zt=new Y,Sn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dc=1e-6;class KR extends JE{constructor(e,n=null){super(e,n),this.state=Mt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:or.ROTATE,MIDDLE:or.DOLLY,RIGHT:or.PAN},this.touches={ONE:tr.ROTATE,TWO:tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new ns,this._lastTargetPosition=new Y,this._quat=new ns().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vh,this._sphericalDelta=new vh,this._scale=1,this._panOffset=new Y,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new Y,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JR.bind(this),this._onPointerDown=ZR.bind(this),this._onPointerUp=jR.bind(this),this._onContextMenu=r1.bind(this),this._onMouseWheel=t1.bind(this),this._onKeyDown=n1.bind(this),this._onTouchStart=i1.bind(this),this._onTouchMove=s1.bind(this),this._onMouseDown=QR.bind(this),this._onMouseMove=e1.bind(this),this._interceptControlDown=o1.bind(this),this._interceptControlUp=a1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wh),this.update(),this.state=Mt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;zt.copy(n).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),n.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=zt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(la.origin.copy(this.object.position),la.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(la.direction))<YR?this.object.lookAt(this.target):(Xh.setFromNormalAndCoplanarPoint(this.object.up,this.target),la.intersectPlane(Xh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>dc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dc||this._lastTargetPosition.distanceToSquared(this.target)>dc?(this.dispatchEvent(Wh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){zt.setFromMatrixColumn(n,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,n){this.screenSpacePanning===!0?zt.setFromMatrixColumn(n,1):(zt.setFromMatrixColumn(n,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new je,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ZR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function JR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function jR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mg),this.state=Mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function QR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Mt.DOLLY;break;case or.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Mt.ROTATE}break;case or.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(vf)}function e1(t){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function t1(t){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(t.preventDefault(),this.dispatchEvent(vf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Mg))}function n1(t){this.enabled!==!1&&this._handleKeyDown(t)}function i1(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Mt.TOUCH_ROTATE;break;case tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Mt.TOUCH_DOLLY_PAN;break;case tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(vf)}function s1(t){switch(this._trackPointer(t),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Mt.NONE}}function r1(t){this.enabled!==!1&&t.preventDefault()}function o1(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function a1(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const l1={class:"page-card"},c1={class:"media-controls"},u1={class:"segmented-control"},f1={key:0,class:"stream-start-time"},d1=["disabled"],h1={key:0,value:""},p1={key:1,value:"",disabled:""},m1=["value"],g1={class:"video-select-control"},_1=["disabled"],v1={key:0,value:""},x1=["value"],S1={class:"switch-control"},y1={class:"segmented-control"},M1={key:0,class:"placeholder"},E1={key:1,class:"stream-workspace"},b1={class:"stream-main"},T1={key:0,class:"video-viewport"},A1=["src","title"],w1={key:0,class:"live-pause-overlay"},R1={key:1,class:"detection-layer"},C1={class:"video-playback-controls"},P1=["title"],D1={key:1,class:"video-viewport"},L1=["src"],I1={key:0,class:"detection-layer"},N1={class:"video-playback-controls"},U1=["title"],O1=["max","value"],F1={key:2,class:"placeholder"},B1={class:"stream-sidebar"},z1={key:0,class:"side-section screw-position-card"},H1={class:"absolute-position"},V1={key:2,class:"telemetry-dashboard"},k1={class:"position-scene-card"},G1={class:"fusion-data-card"},W1={class:"current-position"},X1={class:"sensor-columns"},q1={class:"uwb-range-grid"},$1={class:"imu-readout"},Y1=["disabled"],K1={key:3,class:"success"},Z1={key:4,class:"alert"},J1={__name:"StreamPage",setup(t){const e=Ye([]),n=Ye([]),i=Ye([]),s=Ye([]),r=Ye("history"),o=Ye(""),a=Ye(""),l=Ye("color"),c=Ye("ekf"),u=Ye(!0),f=Ye(0),d=Ye(0),h=Ye(!1),g=Ye(null),v=Ye(null),m=Ye(!0),p=Ye(!1),M=Ye(""),E=Ye(""),S=Ye(0),A=Ye(!1),T=Ye(0),D=Ye([]),x=Ye(null),R=Ye(null),F=[{id:1,x:0,y:0,z:0},{id:2,x:20,y:0,z:0},{id:3,x:0,y:12,z:0},{id:4,x:20,y:12,z:0},{id:5,x:0,y:0,z:2.5},{id:6,x:20,y:0,z:2.5},{id:7,x:0,y:12,z:2.5},{id:8,x:20,y:12,z:2.5}],N=[{id:"A-1",type:"M4 hex screw",x:1.2,y:1.2,z:1.1},{id:"A-2",type:"M4 hex screw",x:2,y:1.2,z:1.1},{id:"B-1",type:"M6 socket screw",x:18,y:1.2,z:1.1},{id:"B-2",type:"M6 socket screw",x:18.8,y:1.2,z:1.1},{id:"B-3",type:"M6 socket screw",x:1.2,y:10.8,z:1.1},{id:"B-4",type:"M6 socket screw",x:2,y:10.8,z:1.1},{id:"A-3",type:"M4 hex screw",x:18,y:10.8,z:1.1},{id:"A-4",type:"M4 hex screw",x:18.8,y:10.8,z:1.1}];let k,oe=-1,ne,G,j,W,se,pe,ye,ve,Te,Je,rt;const Qe=new Map,K=pt(()=>e.value.filter(L=>!L.endTime).sort((L,V)=>new Date(V.startTime)-new Date(L.startTime))[0]||null),O=pt(()=>e.value.filter(L=>{var V;return L._id!==((V=K.value)==null?void 0:V._id)})),Z=pt(()=>{var L;return(L=K.value)!=null&&L.startTime?new Date(K.value.startTime).toLocaleString("zh-TW"):"尚未開始作業"}),ue=pt(()=>n.value.filter(L=>L.kind===l.value||L.kind==="combined")),me=pt(()=>ue.value.find(L=>L.filename===a.value)),Me=pt(()=>{const L=i.value.filter(V=>{var he;return V.imageId===((he=me.value)==null?void 0:he.filename)});return L.length?L:i.value}),w=pt(()=>({_id:"simulated-screw",objectClass:"螺絲",depth:Number((118+Math.sin(S.value*.18)*3).toFixed(1)),bbox:{x:Math.round(860+Math.sin(S.value*.14)*22),y:Math.round(465+Math.cos(S.value*.11)*12),width:200,height:150}})),C=pt(()=>Math.floor((S.value+20)/4)%13!==0),I=pt(()=>{var he;if(r.value==="live")return i.value.at(-1)||w.value;if(!Me.value.length)return null;const L=new Date(Me.value[0].timestamp).getTime()||((he=me.value)!=null&&he.startedAt?me.value.startedAt*1e3:null);if(!L)return Me.value[0]||w.value;const V=L+f.value*1e3;return Me.value.reduce((le,Ee)=>Math.abs(new Date(Ee.timestamp).getTime()-V)<Math.abs(new Date(le.timestamp).getTime()-V)?Ee:le)}),J=pt(()=>r.value==="live"?i.value.length>0:Me.value.length>0),X=pt(()=>r.value==="live"?!!K.value:!!me.value),Q=pt(()=>u.value&&!A.value&&X.value&&!!I.value&&(J.value||C.value)),_e=pt(()=>I.value?["example_object","screw_simulated"].includes(I.value.objectClass)?"螺絲":I.value.objectClass:"未偵測到螺絲"),ge=pt(()=>`http://localhost:8889/${l.value==="depth"?"cam-depth":"cam-color"}`),ae=L=>Number(L??0).toFixed(3),fe=()=>{var V,he;const L=r.value==="history"?(V=me.value)!=null&&V.startedAt?me.value.startedAt*1e3+f.value*1e3:new Date(((he=I.value)==null?void 0:he.timestamp)||0).getTime():1/0;D.value=s.value.filter(le=>new Date(le.timestamp).getTime()<=L).map(le=>{var Ee;return(Ee=le.telemetry)==null?void 0:Ee.position}).filter(Boolean).slice(-40).map(le=>({...le}))},Re=L=>new Y(Number((L==null?void 0:L.x)||0),Number((L==null?void 0:L.z)||0),Number((L==null?void 0:L.y)||0)),P=L=>Re(L),Fe=(L,V)=>{L.userData.hoverLabel=V},Ne=L=>{const V=new Ms,he=new ia({color:3900150,roughness:.35,metalness:.35}),le=new nn(new Ds(.24,.12,.24),he),Ee=new nn(new Ds(.1,.16,.1),he);return Ee.position.y=.14,V.add(le,Ee),V.position.copy(P(L)),Fe(V,`基地站 ${L.id}：X ${L.x}、Y ${L.y}、Z ${L.z} m`),V},b=(L=16096779)=>{const V=new Ms,he=new ia({color:L,metalness:.72,roughness:.25}),le=new nn(new vo(.045,.045,.25,16),he);le.rotation.z=Math.PI/2;const Ee=new nn(new vo(.105,.105,.045,16),he);return Ee.rotation.z=Math.PI/2,Ee.position.x=-.14,V.add(le,Ee),V.userData.material=he,V},_=()=>{var Ie;if(!G||!v.value||!se||!pe)return;const L=v.value.telemetry;se.position.copy(Re(L.position));const V=Math.PI/180,he=L.orientation;se.rotation.set(he.pitch*V,-he.yaw*V,he.roll*V,"YXZ"),pe.position.copy(Re(v.value.absolutePosition)),pe.visible=!!v.value.absolutePosition&&!L.workspace,Fe(se,`設備：X ${ae(L.position.x)}、Y ${ae(L.position.y)}、Z ${ae(L.position.z)} m；Roll ${ae(he.roll)}°、Pitch ${ae(he.pitch)}°、Yaw ${ae(he.yaw)}°`),v.value.absolutePosition&&Fe(pe,`螺絲：X ${ae(v.value.absolutePosition.x)}、Y ${ae(v.value.absolutePosition.y)}、Z ${ae(v.value.absolutePosition.z)} m`);const le=new vn().setFromPoints(D.value.map(Re));ye.geometry.dispose(),ye.geometry=le,(((Ie=L.workspace)==null?void 0:Ie.screws)||N).forEach(tt=>{var Zt;const ut=Qe.get(tt.id);if(!ut)return;const un=tt.type.includes("M4")?2450411:9647082;ut.userData.material.color.setHex(tt.visible?16096779:un),(Zt=ut.userData.material.emissive)==null||Zt.setHex(tt.visible?7027968:0),Fe(ut,`${tt.type} ${tt.id}：X ${ae(tt.x)}、Y ${ae(tt.y)}、Z ${ae(tt.z)} m${tt.visible?`；已在攝影機視野內，深度 ${ae(tt.depth)} m`:"；未進入攝影機辨識範圍"}`)})},B=async()=>{if(await Ja(),ne||!x.value){_();return}G=new bE,G.background=new lt(16777215),j=new In(42,1,.1,100),j.position.set(25,19,26),ne=new $R({antialias:!0}),ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.value.appendChild(ne.domElement),W=new KR(j,ne.domElement),W.target.set(10,1.1,6),W.enableDamping=!0,W.minDistance=8,W.maxDistance=42,G.add(new GE(16777215,13358561,2));const L=new qE(16777215,2.5);L.position.set(5,7,4),G.add(L);const V=new nn(new Ro(20,12),new ia({color:16317180,roughness:.95}));V.rotation.x=-Math.PI/2,V.position.set(10,-.02,6),G.add(V);const he=new ZE(20,20,13358561,14870768);he.scale.z=.6,he.position.set(10,0,6),G.add(he),F.forEach(Ie=>G.add(Ne(Ie))),se=new Ms;const le=new nn(new gf(.12,20,16),new ia({color:1096065,emissive:289870,emissiveIntensity:.35})),Ee=new nn(new mf(.45,1.2,24,1,!0),new df({color:3462041,transparent:!0,opacity:.2,side:ri}));Ee.rotation.x=-Math.PI/2,Ee.position.z=.6,se.add(le,Ee),G.add(se),pe=b(),G.add(pe),N.forEach(Ie=>{const tt=b(Ie.type.includes("M4")?2450411:9647082);tt.position.copy(Re(Ie)),Fe(tt,`${Ie.type} ${Ie.id}：X ${Ie.x}、Y ${Ie.y}、Z ${Ie.z} m`),Qe.set(Ie.id,tt),G.add(tt)}),ye=new lg(new vn,new pf({color:14427686,linewidth:1})),G.add(ye),ve=new KE,Te=new je,ne.domElement.addEventListener("pointermove",ie),rt=new ResizeObserver($),rt.observe(x.value),$(),_(),Se()},$=()=>{if(!ne||!x.value)return;const{clientWidth:L,clientHeight:V}=x.value;!L||!V||(ne.setSize(L,V),j.aspect=L/V,j.updateProjectionMatrix())},ie=L=>{if(!ne||!R.value)return;const V=ne.domElement.getBoundingClientRect();Te.set((L.clientX-V.left)/V.width*2-1,-((L.clientY-V.top)/V.height)*2+1),ve.setFromCamera(Te,j);const he=ve.intersectObjects(G.children,!0).map(le=>{let Ee=le.object;for(;Ee&&!Ee.userData.hoverLabel;)Ee=Ee.parent;return Ee}).find(Boolean);R.value.style.display=he?"block":"none",he&&(R.value.textContent=he.userData.hoverLabel,R.value.style.left=`${L.clientX-V.left+12}px`,R.value.style.top=`${L.clientY-V.top+12}px`)},Se=()=>{Je=requestAnimationFrame(Se),W.update(),ne.render(G,j)},be=()=>{var L;cancelAnimationFrame(Je),rt==null||rt.disconnect(),(L=ne==null?void 0:ne.domElement)==null||L.removeEventListener("pointermove",ie),ne==null||ne.dispose(),ne=null},ce=async()=>{var L,V,he;if(n.value=[],i.value=[],s.value=[],a.value="",f.value=0,!!o.value)try{const[le,Ee,Ie]=await Promise.all([Bt.get(`/videos/${o.value}`),Bt.get(`/detections/${o.value}`),Bt.get(`/operator-telemetry/${o.value}`)]);n.value=le.data,i.value=Ee.data.sort((tt,ut)=>new Date(tt.timestamp)-new Date(ut.timestamp)),s.value=Ie.data,a.value=((L=ue.value[0])==null?void 0:L.filename)||"",await xe()}catch(le){M.value=((he=(V=le.response)==null?void 0:V.data)==null?void 0:he.error)||"無法讀取歷史影片或偵測資料。"}},de=async()=>{e.value=(await Bt.get("/operations")).data},xe=async()=>{var L,V,he,le;if(o.value)try{const Ee={source:r.value};r.value==="history"&&((L=me.value)!=null&&L.startedAt)&&(Ee.at=me.value.startedAt*1e3+f.value*1e3,s.value=(await Bt.get(`/operator-telemetry/${o.value}`,{params:{at:Ee.at}})).data),(V=I.value)!=null&&V._id&&I.value._id!=="simulated-screw"&&(Ee.detectionId=I.value._id),v.value=(await Bt.get(`/positioning/latest/${o.value}`,{params:Ee})).data,fe(),await B(),_()}catch(Ee){M.value=((le=(he=Ee.response)==null?void 0:he.data)==null?void 0:le.error)||"無法讀取定位資料。"}},He=async()=>{if(!(!o.value||r.value!=="live"))try{const[L,V]=await Promise.all([Bt.get(`/detections/${o.value}`),Bt.get(`/operator-telemetry/${o.value}`)]);i.value=L.data.sort((he,le)=>new Date(he.timestamp)-new Date(le.timestamp)),s.value=V.data}catch{}},Le=async()=>{var L,V;p.value=!0,E.value="",M.value="";try{await Bt.post("/simulation/config",{fusionAlgorithm:c.value}),E.value="融合設定已傳送至後端與 AI。",await xe()}catch(he){M.value=((V=(L=he.response)==null?void 0:L.data)==null?void 0:V.error)||"融合設定傳送失敗。"}finally{p.value=!1}},Ce=L=>{f.value=L.target.currentTime,d.value=L.target.duration||0},Xe=async()=>{var L,V;(L=g.value)!=null&&L.paused?await g.value.play():(V=g.value)==null||V.pause()},$e=async()=>{if(r.value!=="history"||!h.value)return;const L=Math.floor(f.value*2);L!==oe&&(oe=L,await xe())},et=async L=>{Ce(L),await $e()},z=async L=>{g.value&&(g.value.currentTime=Number(L.target.value),f.value=Number(L.target.value),r.value==="history"&&await xe())},De=async()=>{A.value=!A.value,A.value||(T.value+=1,await He(),await xe())};return Qi(o,()=>{D.value=[],oe=-1,r.value==="history"?ce():xe()}),Qi(l,()=>{var L;a.value=((L=ue.value[0])==null?void 0:L.filename)||"",f.value=0}),Qi(r,async()=>{var L,V;r.value==="history"?(await de(),o.value=((L=O.value[0])==null?void 0:L._id)||"",o.value||(n.value=[],i.value=[],v.value=null)):(o.value=((V=K.value)==null?void 0:V._id)||"",He(),xe())}),Ls(async()=>{var L;try{const[V,he]=await Promise.all([Bt.get("/operations"),Bt.get("/simulation/config")]);e.value=V.data,c.value=he.data.fusionAlgorithm,o.value=((L=O.value[0])==null?void 0:L._id)||"",k=window.setInterval(async()=>{r.value==="live"&&!A.value&&(S.value+=1,await He(),await xe())},500)}catch{M.value="無法讀取系統資料。"}finally{m.value=!1}}),zu(()=>{window.clearInterval(k),be()}),(L,V)=>{var he,le,Ee,Ie,tt,ut,un,Zt,Co,Po,Cr,Is,Do,Pr,Dr,Kn,Ns,Lr,Ir,os,Nr,as;return we(),Pe("section",l1,[V[23]||(V[23]=U("div",{class:"section-title"},[U("p",{class:"eyebrow"},"Media"),U("h2",null,"影像串流與末端定位")],-1)),U("div",c1,[U("div",u1,[U("button",{class:wn({active:r.value==="history"}),type:"button",onClick:V[0]||(V[0]=St=>r.value="history")},"歷史影片",2),U("button",{class:wn({active:r.value==="live"}),type:"button",onClick:V[1]||(V[1]=St=>r.value="live")},"目前串流",2)]),r.value==="live"?(we(),Pe("p",f1,"開始時間："+Ae(Z.value),1)):(we(),Pe(At,{key:1},[U("label",null,[V[10]||(V[10]=rn("作業",-1)),Hn(U("select",{"onUpdate:modelValue":V[2]||(V[2]=St=>o.value=St),disabled:!O.value.length},[O.value.length?(we(),Pe("option",p1,"選擇歷史作業")):(we(),Pe("option",h1,"無歷史紀錄")),(we(!0),Pe(At,null,ci(O.value,St=>(we(),Pe("option",{key:St._id,value:St._id},Ae(new Date(St.startTime).toLocaleString("zh-TW")),9,m1))),128))],8,d1),[[El,o.value]])]),U("label",g1,[V[11]||(V[11]=rn("影片",-1)),Hn(U("select",{"onUpdate:modelValue":V[3]||(V[3]=St=>a.value=St),disabled:!ue.value.length},[ue.value.length?tn("",!0):(we(),Pe("option",v1,"無歷史紀錄")),(we(!0),Pe(At,null,ci(ue.value,St=>(we(),Pe("option",{key:St.filename,value:St.filename},Ae(St.filename),9,x1))),128))],8,_1),[[El,a.value]])])],64)),U("label",S1,[Hn(U("input",{"onUpdate:modelValue":V[4]||(V[4]=St=>u.value=St),type:"checkbox"},null,512),[[H0,u.value]]),V[12]||(V[12]=rn(" 顯示螺絲偵測",-1))]),U("div",y1,[U("button",{class:wn({active:l.value==="color"}),type:"button",onClick:V[5]||(V[5]=St=>l.value="color")},"光學影像",2),U("button",{class:wn({active:l.value==="depth"}),type:"button",onClick:V[6]||(V[6]=St=>l.value="depth")},"深度影像",2)])]),m.value?(we(),Pe("p",M1,"正在讀取資料…")):(we(),Pe("div",E1,[U("div",b1,[r.value==="live"?(we(),Pe("div",T1,[(we(),Pe("iframe",{key:`${ge.value}-${T.value}`,class:"live-stream-frame",src:ge.value,title:l.value==="depth"?"目前深度串流":"目前光學串流",allow:"autoplay; fullscreen"},null,8,A1)),A.value?(we(),Pe("div",w1,"⏸")):tn("",!0),Q.value?(we(),Pe("div",R1,[U("div",{class:wn(["detection-box",{"label-below":I.value.bbox.y<30}]),style:ro({left:`${I.value.bbox.x/1920*100}%`,top:`${I.value.bbox.y/1080*100}%`,width:`${I.value.bbox.width/1920*100}%`,height:`${I.value.bbox.height/1080*100}%`})},[U("span",null,Ae(_e.value)+" · "+Ae(I.value.depth),1)],6)])):tn("",!0),U("div",C1,[U("button",{type:"button",title:A.value?"播放最新串流":"暫停前台顯示",onClick:De},Ae(A.value?"▶":"⏸"),9,P1)])])):me.value?(we(),Pe("div",D1,[(we(),Pe("video",{key:me.value.filename,ref_key:"videoPlayer",ref:g,class:wn(["video-source",{"show-depth":me.value.kind==="combined"&&l.value==="depth"}]),src:me.value.url,playsinline:"",onLoadedmetadata:Ce,onTimeupdate:et,onPlay:V[7]||(V[7]=St=>h.value=!0),onPause:V[8]||(V[8]=St=>h.value=!1)},null,42,L1)),Q.value?(we(),Pe("div",I1,[U("div",{class:wn(["detection-box",{"label-below":I.value.bbox.y<30}]),style:ro({left:`${I.value.bbox.x/1920*100}%`,top:`${I.value.bbox.y/1080*100}%`,width:`${I.value.bbox.width/1920*100}%`,height:`${I.value.bbox.height/1080*100}%`})},[U("span",null,Ae(_e.value)+" · "+Ae(I.value.depth),1)],6)])):tn("",!0),U("div",N1,[U("button",{type:"button",title:h.value?"暫停":"播放",onClick:Xe},Ae(h.value?"⏸":"▶"),9,U1),U("input",{type:"range",min:"0",max:d.value,step:"0.01",value:f.value,onInput:z},null,40,O1),U("span",null,Ae(Math.floor(f.value))+" / "+Ae(Math.floor(d.value))+" 秒",1)])])):(we(),Pe("p",F1,"此作業尚未找到歷史影片。"))]),U("aside",B1,[(he=v.value)!=null&&he.detection?(we(),Pe("section",z1,[V[14]||(V[14]=U("h3",null,"螺絲定位",-1)),U("p",null,Ae(_e.value)+"　深度 "+Ae((le=I.value)==null?void 0:le.depth),1),U("p",null,[rn("模型："+Ae(v.value.detection.detectionAlgorithm),1),V[13]||(V[13]=U("br",null,null,-1)),rn("融合："+Ae(v.value.fusionAlgorithm),1)]),U("p",null,"相機／設備座標："+Ae(ae(v.value.cameraPosition.x))+", "+Ae(ae(v.value.cameraPosition.y))+", "+Ae(ae(v.value.cameraPosition.z))+" m",1),U("p",null,"螺絲相機座標："+Ae(ae((Ee=v.value.screwCameraPosition)==null?void 0:Ee.x))+", "+Ae(ae((Ie=v.value.screwCameraPosition)==null?void 0:Ie.y))+", "+Ae(ae((tt=v.value.screwCameraPosition)==null?void 0:tt.z))+" m",1),U("p",H1,"融合絕對座標："+Ae(ae((ut=v.value.absolutePosition)==null?void 0:ut.x))+", "+Ae(ae((un=v.value.absolutePosition)==null?void 0:un.y))+", "+Ae(ae((Zt=v.value.absolutePosition)==null?void 0:Zt.z))+" m",1)])):tn("",!0)])])),v.value?(we(),Pe("section",V1,[U("div",k1,[V[15]||(V[15]=U("div",{class:"scene-heading"},[U("div",null,[U("h3",null,"操作空間建模")]),U("span",null,"拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標")],-1)),U("p",{class:wn(["nearby-screw-alert",{inactive:!((Co=v.value.workspace)!=null&&Co.notification)}])},Ae((Po=v.value.workspace)!=null&&Po.notification?`提示：${v.value.workspace.notification}`:"附近目前沒有螺絲。"),3),U("div",{ref_key:"sceneContainer",ref:x,class:"three-scene"},[U("div",{ref_key:"sceneTooltip",ref:R,class:"three-tooltip"},null,512)],512),V[16]||(V[16]=ku('<div class="scene-legend"><span><i class="legend-anchor"></i>基地站</span><span><i class="legend-device"></i>設備／攝影機光錐</span><span><i class="legend-screw"></i>M4（藍）／M6（紫）；金色為可辨識</span><span><i class="legend-trail"></i>移動軌跡</span></div>',1))]),U("aside",G1,[V[22]||(V[22]=U("h3",null,"UWB + IMU 融合資料",-1)),U("div",W1,[V[17]||(V[17]=U("strong",null,"ES-EKF 輸出設備位置",-1)),U("span",null,"X "+Ae(ae(v.value.telemetry.position.x))+"　Y "+Ae(ae(v.value.telemetry.position.y))+"　Z "+Ae(ae(v.value.telemetry.position.z))+" m",1)]),U("div",X1,[U("div",null,[V[18]||(V[18]=U("h4",null,"UWB：8 個基地站距離（m）",-1)),U("div",q1,[(we(!0),Pe(At,null,ci(v.value.telemetry.uwbRanges||[],St=>(we(),Pe("span",{key:St.stationId},"站 "+Ae(St.stationId+1)+"："+Ae(ae(St.distance)),1))),128))])]),U("div",$1,[V[19]||(V[19]=U("h4",null,"IMU 即時量測",-1)),U("p",null,"加速度："+Ae(ae((Is=(Cr=v.value.telemetry.imu)==null?void 0:Cr.acceleration)==null?void 0:Is.x))+", "+Ae(ae((Pr=(Do=v.value.telemetry.imu)==null?void 0:Do.acceleration)==null?void 0:Pr.y))+", "+Ae(ae((Kn=(Dr=v.value.telemetry.imu)==null?void 0:Dr.acceleration)==null?void 0:Kn.z))+" m/s²",1),U("p",null,"角速度："+Ae(ae((Lr=(Ns=v.value.telemetry.imu)==null?void 0:Ns.gyroscope)==null?void 0:Lr.x))+", "+Ae(ae((os=(Ir=v.value.telemetry.imu)==null?void 0:Ir.gyroscope)==null?void 0:os.y))+", "+Ae(ae((as=(Nr=v.value.telemetry.imu)==null?void 0:Nr.gyroscope)==null?void 0:as.z))+" °/s",1),U("p",null,"姿態：Roll "+Ae(ae(v.value.telemetry.orientation.roll))+"°、Pitch "+Ae(ae(v.value.telemetry.orientation.pitch))+"°、Yaw "+Ae(ae(v.value.telemetry.orientation.yaw))+"°",1)])]),U("label",null,[V[21]||(V[21]=rn("UWB + IMU 融合演算法",-1)),Hn(U("select",{"onUpdate:modelValue":V[9]||(V[9]=St=>c.value=St)},[...V[20]||(V[20]=[U("option",{value:"ekf"},"Error-State Extended Kalman Filter (ES-EKF)",-1),U("option",{value:"complementary"},"Complementary Filter",-1),U("option",{value:"weighted_average"},"Weighted Average",-1)])],512),[[El,c.value]])]),U("button",{type:"button",disabled:p.value,onClick:Le},Ae(p.value?"傳送中…":"套用融合設定"),9,Y1)])])):tn("",!0),E.value?(we(),Pe("p",K1,Ae(E.value),1)):tn("",!0),M.value?(we(),Pe("p",Z1,Ae(M.value),1)):tn("",!0)])}}},j1={},Q1={class:"page-card"};function eC(t,e){return we(),Pe("section",Q1,[...e[0]||(e[0]=[ku('<div class="section-title"><p class="eyebrow">Media</p><h2>語音提示查詢</h2></div><article class="panel"><h3>提示內容</h3><div class="list-card"><div class="item-row"><span>提示 1</span><strong>請保持安全距離</strong></div><div class="item-row"><span>提示 2</span><strong>區域偵測已完成</strong></div><div class="item-row"><span>提示 3</span><strong>即將開始下一段任務</strong></div></div></article>',2)])])}const tC=al(j1,[["render",eC]]),nC=[{path:"/",name:"home",component:Ey,meta:{requiresAuth:!0}},{path:"/account/login",name:"account-login",component:Ly},{path:"/account/profile",name:"account-profile",component:Zy,meta:{requiresAuth:!0}},{path:"/account/password",name:"account-password",component:eM,meta:{requiresAuth:!0}},{path:"/guide",name:"guide",component:sM},{path:"/technology",name:"technology",component:lM},{path:"/history/object",name:"history-object",component:pM,meta:{requiresAuth:!0}},{path:"/history/tasks",name:"history-tasks",component:SM,meta:{requiresAuth:!0}},{path:"/history/operations",name:"history-operations",component:AM,meta:{requiresAuth:!0}},{path:"/media/stream",name:"media-stream",component:J1,meta:{requiresAuth:!0}},{path:"/media/voice",name:"media-voice",component:tC,meta:{requiresAuth:!0}}],Eg=Qv({history:Iv(),routes:nC});Eg.beforeEach(t=>{if(t.meta.requiresAuth&&!La.value)return{name:"account-login",query:{redirect:t.fullPath}};if(t.name==="account-login"&&La.value)return{path:"/"}});$0(dx).use(Eg).mount("#app");
