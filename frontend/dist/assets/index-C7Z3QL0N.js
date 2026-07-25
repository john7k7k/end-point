(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const At={},ir=[],ui=()=>{},Yh=()=>!1,qa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$a=t=>t.startsWith("onUpdate:"),jt=Object.assign,Pu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cg=Object.prototype.hasOwnProperty,_t=(t,e)=>Cg.call(t,e),Ze=Array.isArray,sr=t=>yo(t)==="[object Map]",br=t=>yo(t)==="[object Set]",wf=t=>yo(t)==="[object Date]",it=t=>typeof t=="function",Ut=t=>typeof t=="string",pi=t=>typeof t=="symbol",yt=t=>t!==null&&typeof t=="object",Kh=t=>(yt(t)||it(t))&&it(t.then)&&it(t.catch),Zh=Object.prototype.toString,yo=t=>Zh.call(t),Pg=t=>yo(t).slice(8,-1),Jh=t=>yo(t)==="[object Object]",Du=t=>Ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jr=Cu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ya=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Dg=/-\w/g,_n=Ya(t=>t.replace(Dg,e=>e.slice(1).toUpperCase())),Lg=/\B([A-Z])/g,rs=Ya(t=>t.replace(Lg,"-$1").toLowerCase()),Ka=Ya(t=>t.charAt(0).toUpperCase()+t.slice(1)),_l=Ya(t=>t?`on${Ka(t)}`:""),oi=(t,e)=>!Object.is(t,e),ua=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Za=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Rf;const Ja=()=>Rf||(Rf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oo(t){if(Ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ut(i)?Og(i):oo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ut(t)||yt(t))return t}const Ig=/;(?![^(]*\))/g,Ng=/:([^]+)/,Ug=/\/\*[^]*?\*\//g;function Og(t){const e={};return t.replace(Ug,"").split(Ig).forEach(n=>{if(n){const i=n.split(Ng);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Cn(t){let e="";if(Ut(t))e=t;else if(Ze(t))for(let n=0;n<t.length;n++){const i=Cn(t[n]);i&&(e+=i+" ")}else if(yt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bg=Cu(Fg);function Qh(t){return!!t||t===""}function zg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Er(t[i],e[i]);return n}function Er(t,e){if(t===e)return!0;let n=wf(t),i=wf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=pi(t),i=pi(e),n||i)return t===e;if(n=Ze(t),i=Ze(e),n||i)return n&&i?zg(t,e):!1;if(n=yt(t),i=yt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Er(t[o],e[o]))return!1}}return String(t)===String(e)}function Lu(t,e){return t.findIndex(n=>Er(n,e))}const ep=t=>!!(t&&t.__v_isRef===!0),Ee=t=>Ut(t)?t:t==null?"":Ze(t)||yt(t)&&(t.toString===Zh||!it(t.toString))?ep(t)?Ee(t.value):JSON.stringify(t,tp,2):String(t),tp=(t,e)=>ep(e)?tp(t,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[vl(i,r)+" =>"]=s,n),{})}:br(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vl(n))}:pi(e)?vl(e):yt(e)&&!Ze(e)&&!Jh(e)?String(e):e,vl=(t,e="")=>{var n;return pi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class Hg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Yt&&(Yt.active?(this.parent=Yt,this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=Yt;try{return Yt=this,e()}finally{Yt=n}}}on(){++this._on===1&&(this.prevScope=Yt,Yt=this)}off(){if(this._on>0&&--this._on===0){if(Yt===this)Yt=this.prevScope;else{let e=Yt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kg(){return Yt}let Rt;const xl=new WeakSet;class np{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&(Yt.active?Yt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xl.has(this)&&(xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cf(this),rp(this);const e=Rt,n=Wn;Rt=this,Wn=!0;try{return this.fn()}finally{op(this),Rt=e,Wn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uu(e);this.deps=this.depsTail=void 0,Cf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_c(this)&&this.run()}get dirty(){return _c(this)}}let ip=0,Qr,eo;function sp(t,e=!1){if(t.flags|=8,e){t.next=eo,eo=t;return}t.next=Qr,Qr=t}function Iu(){ip++}function Nu(){if(--ip>0)return;if(eo){let e=eo;for(eo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Qr;){let e=Qr;for(Qr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function rp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function op(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Uu(i),Vg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function _c(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ap(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ap(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ao)||(t.globalVersion=ao,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!_c(t))))return;t.flags|=2;const e=t.dep,n=Rt,i=Wn;Rt=t,Wn=!0;try{rp(t);const s=t.fn(t._value);(e.version===0||oi(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Rt=n,Wn=i,op(t),t.flags&=-3}}function Uu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Uu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Wn=!0;const lp=[];function Li(){lp.push(Wn),Wn=!1}function Ii(){const t=lp.pop();Wn=t===void 0?!0:t}function Cf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Rt;Rt=void 0;try{e()}finally{Rt=n}}}let ao=0;class Gg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ou{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Rt||!Wn||Rt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Rt)n=this.activeLink=new Gg(Rt,this),Rt.deps?(n.prevDep=Rt.depsTail,Rt.depsTail.nextDep=n,Rt.depsTail=n):Rt.deps=Rt.depsTail=n,cp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Rt.depsTail,n.nextDep=void 0,Rt.depsTail.nextDep=n,Rt.depsTail=n,Rt.deps===n&&(Rt.deps=i)}return n}trigger(e){this.version++,ao++,this.notify(e)}notify(e){Iu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nu()}}}function cp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)cp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const vc=new WeakMap,Es=Symbol(""),xc=Symbol(""),lo=Symbol("");function on(t,e,n){if(Wn&&Rt){let i=vc.get(t);i||vc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Ou),s.map=i,s.key=n),s.track()}}function Ai(t,e,n,i,s,r){const o=vc.get(t);if(!o){ao++;return}const a=l=>{l&&l.trigger()};if(Iu(),e==="clear")o.forEach(a);else{const l=Ze(t),c=l&&Du(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===lo||!pi(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(lo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Es)),sr(t)&&a(o.get(xc)));break;case"delete":l||(a(o.get(Es)),sr(t)&&a(o.get(xc)));break;case"set":sr(t)&&a(o.get(Es));break}}Nu()}function Bs(t){const e=gt(t);return e===t?e:(on(e,"iterate",lo),Fn(t)?e:e.map($n))}function ja(t){return on(t=gt(t),"iterate",lo),t}function ii(t,e){return Ni(t)?fr(Ts(t)?$n(e):e):$n(e)}const Wg={__proto__:null,[Symbol.iterator](){return yl(this,Symbol.iterator,t=>ii(this,t))},concat(...t){return Bs(this).concat(...t.map(e=>Ze(e)?Bs(e):e))},entries(){return yl(this,"entries",t=>(t[1]=ii(this,t[1]),t))},every(t,e){return _i(this,"every",t,e,void 0,arguments)},filter(t,e){return _i(this,"filter",t,e,n=>n.map(i=>ii(this,i)),arguments)},find(t,e){return _i(this,"find",t,e,n=>ii(this,n),arguments)},findIndex(t,e){return _i(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _i(this,"findLast",t,e,n=>ii(this,n),arguments)},findLastIndex(t,e){return _i(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _i(this,"forEach",t,e,void 0,arguments)},includes(...t){return Sl(this,"includes",t)},indexOf(...t){return Sl(this,"indexOf",t)},join(t){return Bs(this).join(t)},lastIndexOf(...t){return Sl(this,"lastIndexOf",t)},map(t,e){return _i(this,"map",t,e,void 0,arguments)},pop(){return Or(this,"pop")},push(...t){return Or(this,"push",t)},reduce(t,...e){return Pf(this,"reduce",t,e)},reduceRight(t,...e){return Pf(this,"reduceRight",t,e)},shift(){return Or(this,"shift")},some(t,e){return _i(this,"some",t,e,void 0,arguments)},splice(...t){return Or(this,"splice",t)},toReversed(){return Bs(this).toReversed()},toSorted(t){return Bs(this).toSorted(t)},toSpliced(...t){return Bs(this).toSpliced(...t)},unshift(...t){return Or(this,"unshift",t)},values(){return yl(this,"values",t=>ii(this,t))}};function yl(t,e,n){const i=ja(t),s=i[e]();return i!==t&&!Fn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const Xg=Array.prototype;function _i(t,e,n,i,s,r){const o=ja(t),a=o!==t&&!Fn(t),l=o[e];if(l!==Xg[e]){const f=l.apply(t,r);return a?$n(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,ii(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Pf(t,e,n,i){const s=ja(t),r=s!==t&&!Fn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=ii(t,c)),n.call(this,c,ii(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?ii(t,l):l}function Sl(t,e,n){const i=gt(t);on(i,"iterate",lo);const s=i[e](...n);return(s===-1||s===!1)&&zu(n[0])?(n[0]=gt(n[0]),i[e](...n)):s}function Or(t,e,n=[]){Li(),Iu();const i=gt(t)[e].apply(t,n);return Nu(),Ii(),i}const qg=Cu("__proto__,__v_isRef,__isVue"),up=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pi));function $g(t){pi(t)||(t=String(t));const e=gt(this);return on(e,"has",t),e.hasOwnProperty(t)}class fp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?i_:mp:r?pp:hp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!s){let l;if(o&&(l=Wg[n]))return l;if(n==="hasOwnProperty")return $g}const a=Reflect.get(e,n,cn(e)?e:i);if((pi(n)?up.has(n):qg(n))||(s||on(e,"get",n),r))return a;if(cn(a)){const l=o&&Du(n)?a:a.value;return s&&yt(l)?Sc(l):l}return yt(a)?s?Sc(a):Is(a):a}}class dp extends fp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Ze(e)&&Du(n);if(!this._isShallow){const c=Ni(r);if(!Fn(i)&&!Ni(i)&&(r=gt(r),i=gt(i)),!o&&cn(r)&&!cn(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:_t(e,n),l=Reflect.set(e,n,i,cn(e)?e:s);return e===gt(s)&&l&&(a?oi(i,r)&&Ai(e,"set",n,i):Ai(e,"add",n,i)),l}deleteProperty(e,n){const i=_t(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ai(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!pi(n)||!up.has(n))&&on(e,"has",n),i}ownKeys(e){return on(e,"iterate",Ze(e)?"length":Es),Reflect.ownKeys(e)}}class Yg extends fp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Kg=new dp,Zg=new Yg,Jg=new dp(!0);const yc=t=>t,Io=t=>Reflect.getPrototypeOf(t);function jg(t,e,n){return function(...i){const s=this.__v_raw,r=gt(s),o=sr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?yc:e?fr:$n;return!e&&on(r,"iterate",l?xc:Es),jt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function No(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qg(t,e){const n={get(s){const r=this.__v_raw,o=gt(r),a=gt(s);t||(oi(s,a)&&on(o,"get",s),on(o,"get",a));const{has:l}=Io(o),c=e?yc:t?fr:$n;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&on(gt(s),"iterate",Es),s.size},has(s){const r=this.__v_raw,o=gt(r),a=gt(s);return t||(oi(s,a)&&on(o,"has",s),on(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=gt(a),c=e?yc:t?fr:$n;return!t&&on(l,"iterate",Es),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return jt(n,t?{add:No("add"),set:No("set"),delete:No("delete"),clear:No("clear")}:{add(s){const r=gt(this),o=Io(r),a=gt(s),l=!e&&!Fn(s)&&!Ni(s)?a:s;return o.has.call(r,l)||oi(s,l)&&o.has.call(r,s)||oi(a,l)&&o.has.call(r,a)||(r.add(l),Ai(r,"add",l,l)),this},set(s,r){!e&&!Fn(r)&&!Ni(r)&&(r=gt(r));const o=gt(this),{has:a,get:l}=Io(o);let c=a.call(o,s);c||(s=gt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?oi(r,u)&&Ai(o,"set",s,r):Ai(o,"add",s,r),this},delete(s){const r=gt(this),{has:o,get:a}=Io(r);let l=o.call(r,s);l||(s=gt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ai(r,"delete",s,void 0),c},clear(){const s=gt(this),r=s.size!==0,o=s.clear();return r&&Ai(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jg(s,t,e)}),n}function Fu(t,e){const n=Qg(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(_t(n,s)&&s in i?n:i,s,r)}const e_={get:Fu(!1,!1)},t_={get:Fu(!1,!0)},n_={get:Fu(!0,!1)};const hp=new WeakMap,pp=new WeakMap,mp=new WeakMap,i_=new WeakMap;function s_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Is(t){return Ni(t)?t:Bu(t,!1,Kg,e_,hp)}function gp(t){return Bu(t,!1,Jg,t_,pp)}function Sc(t){return Bu(t,!0,Zg,n_,mp)}function Bu(t,e,n,i,s){if(!yt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=s_(Pg(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Ts(t){return Ni(t)?Ts(t.__v_raw):!!(t&&t.__v_isReactive)}function Ni(t){return!!(t&&t.__v_isReadonly)}function Fn(t){return!!(t&&t.__v_isShallow)}function zu(t){return t?!!t.__v_raw:!1}function gt(t){const e=t&&t.__v_raw;return e?gt(e):t}function r_(t){return!_t(t,"__v_skip")&&Object.isExtensible(t)&&jh(t,"__v_skip",!0),t}const $n=t=>yt(t)?Is(t):t,fr=t=>yt(t)?Sc(t):t;function cn(t){return t?t.__v_isRef===!0:!1}function $e(t){return _p(t,!1)}function o_(t){return _p(t,!0)}function _p(t,e){return cn(t)?t:new a_(t,e)}class a_{constructor(e,n){this.dep=new Ou,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:gt(e),this._value=n?e:$n(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Fn(e)||Ni(e);e=i?e:gt(e),oi(e,n)&&(this._rawValue=e,this._value=i?e:$n(e),this.dep.trigger())}}function bn(t){return cn(t)?t.value:t}const l_={get:(t,e,n)=>e==="__v_raw"?t:bn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return cn(s)&&!cn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function vp(t){return Ts(t)?t:new Proxy(t,l_)}class c_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ou(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ao-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Rt!==this)return sp(this,!0),!0}get value(){const e=this.dep.track();return ap(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function u_(t,e,n=!1){let i,s;return it(t)?i=t:(i=t.get,s=t.set),new c_(i,s,n)}const Uo={},Ea=new WeakMap;let gs;function f_(t,e=!1,n=gs){if(n){let i=Ea.get(n);i||Ea.set(n,i=[]),i.push(t)}}function d_(t,e,n=At){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=y=>s?y:Fn(y)||s===!1||s===0?wi(y,1):wi(y);let u,f,d,p,g=!1,_=!1;if(cn(t)?(f=()=>t.value,g=Fn(t)):Ts(t)?(f=()=>c(t),g=!0):Ze(t)?(_=!0,g=t.some(y=>Ts(y)||Fn(y)),f=()=>t.map(y=>{if(cn(y))return y.value;if(Ts(y))return c(y);if(it(y))return l?l(y,2):y()})):it(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Li();try{d()}finally{Ii()}}const y=gs;gs=u;try{return l?l(t,3,[p]):t(p)}finally{gs=y}}:f=ui,e&&s){const y=f,A=s===!0?1/0:s;f=()=>wi(y(),A)}const m=kg(),h=()=>{u.stop(),m&&m.active&&Pu(m.effects,u)};if(r&&e){const y=e;e=(...A)=>{const T=y(...A);return h(),T}}let S=_?new Array(t.length).fill(Uo):Uo;const b=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(y||s||g||(_?A.some((T,D)=>oi(T,S[D])):oi(A,S))){d&&d();const T=gs;gs=u;try{const D=[A,S===Uo?void 0:_&&S[0]===Uo?[]:S,p];S=A,l?l(e,3,D):e(...D)}finally{gs=T}}}else u.run()};return a&&a(b),u=new np(f),u.scheduler=o?()=>o(b,!1):b,p=y=>f_(y,!1,u),d=u.onStop=()=>{const y=Ea.get(u);if(y){if(l)l(y,4);else for(const A of y)A();Ea.delete(u)}},e?i?b(!0):S=u.run():o?o(b.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function wi(t,e=1/0,n){if(e<=0||!yt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,cn(t))wi(t.value,e,n);else if(Ze(t))for(let i=0;i<t.length;i++)wi(t[i],e,n);else if(br(t)||sr(t))t.forEach(i=>{wi(i,e,n)});else if(Jh(t)){for(const i in t)wi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&wi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function So(t,e,n,i){try{return i?t(...i):t()}catch(s){Qa(s,e,n)}}function Yn(t,e,n,i){if(it(t)){const s=So(t,e,n,i);return s&&Kh(s)&&s.catch(r=>{Qa(r,e,n)}),s}if(Ze(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Yn(t[r],e,n,i));return s}}function Qa(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||At;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Li(),So(r,null,10,[t,l,c]),Ii();return}}h_(t,n,s,i,o)}function h_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const mn=[];let ni=-1;const rr=[];let Yi=null,er=0;const xp=Promise.resolve();let Ta=null;function el(t){const e=Ta||xp;return t?e.then(this?t.bind(this):t):e}function p_(t){let e=ni+1,n=mn.length;for(;e<n;){const i=e+n>>>1,s=mn[i],r=co(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Hu(t){if(!(t.flags&1)){const e=co(t),n=mn[mn.length-1];!n||!(t.flags&2)&&e>=co(n)?mn.push(t):mn.splice(p_(e),0,t),t.flags|=1,yp()}}function yp(){Ta||(Ta=xp.then(Mp))}function m_(t){Ze(t)?rr.push(...t):Yi&&t.id===-1?Yi.splice(er+1,0,t):t.flags&1||(rr.push(t),t.flags|=1),yp()}function Df(t,e,n=ni+1){for(;n<mn.length;n++){const i=mn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;mn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sp(t){if(rr.length){const e=[...new Set(rr)].sort((n,i)=>co(n)-co(i));if(rr.length=0,Yi){Yi.push(...e);return}for(Yi=e,er=0;er<Yi.length;er++){const n=Yi[er];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Yi=null,er=0}}const co=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mp(t){try{for(ni=0;ni<mn.length;ni++){const e=mn[ni];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),So(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ni<mn.length;ni++){const e=mn[ni];e&&(e.flags&=-2)}ni=-1,mn.length=0,Sp(),Ta=null,(mn.length||rr.length)&&Mp()}}let Dn=null,bp=null;function Aa(t){const e=Dn;return Dn=t,bp=t&&t.type.__scopeId||null,e}function wa(t,e=Dn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Pa(-1);const r=Aa(e),o=As.length;let a;try{a=t(...s)}finally{for(let l=As.length;l>o;l--)$p();Aa(r),i._d&&Pa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function gn(t,e){if(Dn===null)return t;const n=rl(Dn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=At]=e[s];r&&(it(r)&&(r={mounted:r,updated:r}),r.deep&&wi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function us(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Li(),Yn(l,n,8,[t.el,a,t,e]),Ii())}}function fa(t,e){if(an){let n=an.provides;const i=an.parent&&an.parent.provides;i===n&&(n=an.provides=Object.create(i)),n[t]=e}}function Xn(t,e,n=!1){const i=p0();if(i||or){let s=or?or._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&it(e)?e.call(i&&i.proxy):e}}const g_=Symbol.for("v-scx"),__=()=>Xn(g_);function es(t,e,n){return Ep(t,e,n)}function Ep(t,e,n=At){const{immediate:i,deep:s,flush:r,once:o}=n,a=jt({},n),l=e&&i||!e&&r!=="post";let c;if(fo){if(r==="sync"){const p=__();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ui,p.resume=ui,p.pause=ui,p}}const u=an;a.call=(p,g,_)=>Yn(p,u,g,_);let f=!1;r==="post"?a.scheduler=p=>{Mn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Hu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=d_(t,e,a);return fo&&(c?c.push(d):l&&d()),d}function v_(t,e,n){const i=this.proxy,s=Ut(t)?t.includes(".")?Tp(i,t):()=>i[t]:t.bind(i,i);let r;it(e)?r=e:(r=e.handler,n=e);const o=Mo(this),a=Ep(s,r.bind(i),n);return o(),a}function Tp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const x_=Symbol("_vte"),y_=t=>t.__isTeleport,Ml=Symbol("_leaveCb");function ku(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ku(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ap(t,e){return it(t)?jt({name:t.name},e,{setup:t}):t}function wp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Lf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ra=new WeakMap;function to(t,e,n,i,s=!1){if(Ze(t)){t.forEach((_,m)=>to(_,e&&(Ze(e)?e[m]:e),n,i,s));return}if(no(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&to(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?rl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===At?a.refs={}:a.refs,f=a.setupState,d=gt(f),p=f===At?Yh:_=>Lf(u,_)?!1:_t(d,_),g=(_,m)=>!(m&&Lf(u,m));if(c!=null&&c!==l){if(If(e),Ut(c))u[c]=null,p(c)&&(f[c]=null);else if(cn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(it(l))So(l,a,12,[o,u]);else{const _=Ut(l),m=cn(l);if(_||m){const h=()=>{if(t.f){const S=_?p(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)Ze(S)&&Pu(S,r);else if(Ze(S))S.includes(r)||S.push(r);else if(_)u[l]=[r],p(l)&&(f[l]=u[l]);else{const b=[r];g(l,t.k)&&(l.value=b),t.k&&(u[t.k]=b)}}else _?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const S=()=>{h(),Ra.delete(t)};S.id=-1,Ra.set(t,S),Mn(S,n)}else If(t),h()}}}function If(t){const e=Ra.get(t);e&&(e.flags|=8,Ra.delete(t))}Ja().requestIdleCallback;Ja().cancelIdleCallback;const no=t=>!!t.type.__asyncLoader,Rp=t=>t.type.__isKeepAlive;function S_(t,e){Cp(t,"a",e)}function M_(t,e){Cp(t,"da",e)}function Cp(t,e,n=an){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(tl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Rp(s.parent.vnode)&&b_(i,e,n,s),s=s.parent}}function b_(t,e,n,i){const s=tl(e,t,i,!0);Vu(()=>{Pu(i[e],s)},n)}function tl(t,e,n=an,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Li();const a=Mo(n),l=Yn(e,n,t,o);return a(),Ii(),l});return i?s.unshift(r):s.push(r),r}}const Fi=t=>(e,n=an)=>{(!fo||t==="sp")&&tl(t,(...i)=>e(...i),n)},E_=Fi("bm"),os=Fi("m"),T_=Fi("bu"),A_=Fi("u"),w_=Fi("bum"),Vu=Fi("um"),R_=Fi("sp"),C_=Fi("rtg"),P_=Fi("rtc");function D_(t,e=an){tl("ec",t,e)}const L_="components";function I_(t,e){return U_(L_,t,!0,e)||t}const N_=Symbol.for("v-ndc");function U_(t,e,n=!0,i=!1){const s=Dn||an;if(s){const r=s.type;{const a=x0(r,!1);if(a&&(a===e||a===_n(e)||a===Ka(_n(e))))return r}const o=Nf(s[t]||r[t],e)||Nf(s.appContext[t],e);return!o&&i?r:o}}function Nf(t,e){return t&&(t[e]||t[_n(e)]||t[Ka(_n(e))])}function qn(t,e,n,i){let s;const r=n,o=Ze(t);if(o||Ut(t)){const a=o&&Ts(t);let l=!1,c=!1;a&&(l=!Fn(t),c=Ni(t),t=ja(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?fr($n(t[u])):$n(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(yt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const Mc=t=>t?Jp(t)?rl(t):Mc(t.parent):null,io=jt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mc(t.parent),$root:t=>Mc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Dp(t),$forceUpdate:t=>t.f||(t.f=()=>{Hu(t.update)}),$nextTick:t=>t.n||(t.n=el.bind(t.proxy)),$watch:t=>v_.bind(t)}),bl=(t,e)=>t!==At&&!t.__isScriptSetup&&_t(t,e),O_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(bl(i,e))return o[e]=1,i[e];if(s!==At&&_t(s,e))return o[e]=2,s[e];if(_t(r,e))return o[e]=3,r[e];if(n!==At&&_t(n,e))return o[e]=4,n[e];bc&&(o[e]=0)}}const c=io[e];let u,f;if(c)return e==="$attrs"&&on(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==At&&_t(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,_t(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return bl(s,e)?(s[e]=n,!0):i!==At&&_t(i,e)?(i[e]=n,!0):_t(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==At&&a[0]!=="$"&&_t(t,a)||bl(e,a)||_t(r,a)||_t(i,a)||_t(io,a)||_t(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_t(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uf(t){return Ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bc=!0;function F_(t){const e=Dp(t),n=t.proxy,i=t.ctx;bc=!1,e.beforeCreate&&Of(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:S,destroyed:b,unmounted:y,render:A,renderTracked:T,renderTriggered:D,errorCaptured:x,serverPrefetch:R,expose:F,inheritAttrs:U,components:V,directives:oe,filters:ne}=e;if(c&&B_(c,i,null),o)for(const W in o){const se=o[W];it(se)&&(i[W]=se.bind(n))}if(s){const W=s.call(n,n);yt(W)&&(t.data=Is(W))}if(bc=!0,r)for(const W in r){const se=r[W],pe=it(se)?se.bind(n,n):it(se.get)?se.get.bind(n,n):ui,Se=!it(se)&&it(se.set)?se.set.bind(n):ui,ve=dt({get:pe,set:Se});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>ve.value,set:we=>ve.value=we})}if(a)for(const W in a)Pp(a[W],i,n,W);if(l){const W=it(l)?l.call(n):l;Reflect.ownKeys(W).forEach(se=>{fa(se,W[se])})}u&&Of(u,t,"c");function j(W,se){Ze(se)?se.forEach(pe=>W(pe.bind(n))):se&&W(se.bind(n))}if(j(E_,f),j(os,d),j(T_,p),j(A_,g),j(S_,_),j(M_,m),j(D_,x),j(P_,T),j(C_,D),j(w_,S),j(Vu,y),j(R_,R),Ze(F))if(F.length){const W=t.exposed||(t.exposed={});F.forEach(se=>{Object.defineProperty(W,se,{get:()=>n[se],set:pe=>n[se]=pe,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===ui&&(t.render=A),U!=null&&(t.inheritAttrs=U),V&&(t.components=V),oe&&(t.directives=oe),R&&wp(t)}function B_(t,e,n=ui){Ze(t)&&(t=Ec(t));for(const i in t){const s=t[i];let r;yt(s)?"default"in s?r=Xn(s.from||i,s.default,!0):r=Xn(s.from||i):r=Xn(s),cn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Of(t,e,n){Yn(Ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pp(t,e,n,i){let s=i.includes(".")?Tp(n,i):()=>n[i];if(Ut(t)){const r=e[t];it(r)&&es(s,r)}else if(it(t))es(s,t.bind(n));else if(yt(t))if(Ze(t))t.forEach(r=>Pp(r,e,n,i));else{const r=it(t.handler)?t.handler.bind(n):e[t.handler];it(r)&&es(s,r,t)}}function Dp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ca(l,c,o,!0)),Ca(l,e,o)),yt(e)&&r.set(e,l),l}function Ca(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ca(t,r,n,!0),s&&s.forEach(o=>Ca(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=z_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const z_={data:Ff,props:Bf,emits:Bf,methods:Yr,computed:Yr,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:Yr,directives:Yr,watch:k_,provide:Ff,inject:H_};function Ff(t,e){return e?t?function(){return jt(it(t)?t.call(this,this):t,it(e)?e.call(this,this):e)}:e:t}function H_(t,e){return Yr(Ec(t),Ec(e))}function Ec(t){if(Ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dn(t,e){return t?[...new Set([].concat(t,e))]:e}function Yr(t,e){return t?jt(Object.create(null),t,e):e}function Bf(t,e){return t?Ze(t)&&Ze(e)?[...new Set([...t,...e])]:jt(Object.create(null),Uf(t),Uf(e??{})):e}function k_(t,e){if(!t)return e;if(!e)return t;const n=jt(Object.create(null),t);for(const i in e)n[i]=dn(t[i],e[i]);return n}function Lp(){return{app:null,config:{isNativeTag:Yh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let V_=0;function G_(t,e){return function(i,s=null){it(i)||(i=jt({},i)),s!=null&&!yt(s)&&(s=null);const r=Lp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:V_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:S0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&it(u.install)?(o.add(u),u.install(c,...f)):it(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Zt(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,rl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Yn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=or;or=c;try{return u()}finally{or=f}}};return c}}let or=null;const W_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${_n(e)}Modifiers`]||t[`${rs(e)}Modifiers`];function X_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||At;let s=n;const r=e.startsWith("update:"),o=r&&W_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Ut(u)?u.trim():u)),o.number&&(s=n.map(Za)));let a,l=i[a=_l(e)]||i[a=_l(_n(e))];!l&&r&&(l=i[a=_l(rs(e))]),l&&Yn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Yn(c,t,6,s)}}const q_=new WeakMap;function Ip(t,e,n=!1){const i=n?q_:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!it(t)){const l=c=>{const u=Ip(c,e,!0);u&&(a=!0,jt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(yt(t)&&i.set(t,null),null):(Ze(r)?r.forEach(l=>o[l]=null):jt(o,r),yt(t)&&i.set(t,o),o)}function nl(t,e){return!t||!qa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),_t(t,e[0].toLowerCase()+e.slice(1))||_t(t,rs(e))||_t(t,e))}function zf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:_}=t,m=Aa(t);let h,S;try{if(n.shapeFlag&4){const y=s||i,A=y;h=si(c.call(A,y,u,f,p,d,g)),S=a}else{const y=e;h=si(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),S=e.props?a:$_(a)}}catch(y){As.length=0,Qa(y,t,1),h=Zt(ts)}let b=h;if(S&&_!==!1){const y=Object.keys(S),{shapeFlag:A}=b;y.length&&A&7&&(r&&y.some($a)&&(S=Y_(S,r)),b=dr(b,S,!1,!0))}return n.dirs&&(b=dr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&ku(b,n.transition),h=b,Aa(m),h}const $_=t=>{let e;for(const n in t)(n==="class"||n==="style"||qa(n))&&((e||(e={}))[n]=t[n]);return e},Y_=(t,e)=>{const n={};for(const i in t)(!$a(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function K_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Hf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Np(o,i,d)&&!nl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Hf(i,o,c):!0:!!o;return!1}function Hf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Np(e,t,r)&&!nl(n,r))return!0}return!1}function Np(t,e,n){const i=t[n],s=e[n];return n==="style"&&yt(i)&&yt(s)?!Er(i,s):i!==s}function Z_({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Up={},Op=()=>Object.create(Up),Fp=t=>Object.getPrototypeOf(t)===Up;function J_(t,e,n,i=!1){const s={},r=Op();t.propsDefaults=Object.create(null),Bp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:gp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function j_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=gt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(nl(t.emitsOptions,d))continue;const p=e[d];if(l)if(_t(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=_n(d);s[g]=Tc(l,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Bp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!_t(e,f)&&((u=rs(f))===f||!_t(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Tc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!_t(e,f))&&(delete r[f],c=!0)}c&&Ai(t.attrs,"set","")}function Bp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(jr(l))continue;const c=e[l];let u;s&&_t(s,u=_n(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:nl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=gt(n),c=a||At;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Tc(s,l,f,c[f],t,!_t(c,f))}}return o}function Tc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=_t(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&it(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Mo(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===rs(n))&&(i=!0))}return i}const Q_=new WeakMap;function zp(t,e,n=!1){const i=n?Q_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!it(t)){const u=f=>{l=!0;const[d,p]=zp(f,e,!0);jt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return yt(t)&&i.set(t,ir),ir;if(Ze(r))for(let u=0;u<r.length;u++){const f=_n(r[u]);kf(f)&&(o[f]=At)}else if(r)for(const u in r){const f=_n(u);if(kf(f)){const d=r[u],p=o[f]=Ze(d)||it(d)?{type:d}:jt({},d),g=p.type;let _=!1,m=!0;if(Ze(g))for(let h=0;h<g.length;++h){const S=g[h],b=it(S)&&S.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=it(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||_t(p,"default"))&&a.push(f)}}const c=[o,a];return yt(t)&&i.set(t,c),c}function kf(t){return t[0]!=="$"&&!jr(t)}const Gu=t=>t==="_"||t==="_ctx"||t==="$stable",Wu=t=>Ze(t)?t.map(si):[si(t)],e0=(t,e,n)=>{if(e._n)return e;const i=wa((...s)=>Wu(e(...s)),n);return i._c=!1,i},Hp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Gu(s))continue;const r=t[s];if(it(r))e[s]=e0(s,r,i);else if(r!=null){const o=Wu(r);e[s]=()=>o}}},kp=(t,e)=>{const n=Wu(e);t.slots.default=()=>n},Vp=(t,e,n)=>{for(const i in e)(n||!Gu(i))&&(t[i]=e[i])},t0=(t,e,n)=>{const i=t.slots=Op();if(t.vnode.shapeFlag&32){const s=e._;s?(Vp(i,e,n),n&&jh(i,"_",s,!0)):Hp(e,i)}else e&&kp(t,e)},n0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=At;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Vp(s,e,n):(r=!e.$stable,Hp(e,s)),o=e}else e&&(kp(t,e),o={default:1});if(r)for(const a in s)!Gu(a)&&o[a]==null&&delete s[a]},Mn=a0;function i0(t){return s0(t)}function s0(t,e){const n=Ja();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=ui,insertStaticContent:g}=t,_=(w,C,N,J=null,X=null,Q=null,_e=void 0,ge=null,ae=!!C.dynamicChildren)=>{if(w===C)return;w&&!Fr(w,C)&&(J=O(w),we(w,X,Q,!0),w=null),C.patchFlag===-2&&(ae=!1,C.dynamicChildren=null);const{type:fe,ref:Ce,shapeFlag:P}=C;switch(fe){case il:m(w,C,N,J);break;case ts:h(w,C,N,J);break;case da:w==null&&S(C,N,J,_e);break;case xt:V(w,C,N,J,X,Q,_e,ge,ae);break;default:P&1?A(w,C,N,J,X,Q,_e,ge,ae):P&6?oe(w,C,N,J,X,Q,_e,ge,ae):(P&64||P&128)&&fe.process(w,C,N,J,X,Q,_e,ge,ae,me)}Ce!=null&&X?to(Ce,w&&w.ref,Q,C||w,!C):Ce==null&&w&&w.ref!=null&&to(w.ref,null,Q,w,!0)},m=(w,C,N,J)=>{if(w==null)i(C.el=a(C.children),N,J);else{const X=C.el=w.el;C.children!==w.children&&c(X,C.children)}},h=(w,C,N,J)=>{w==null?i(C.el=l(C.children||""),N,J):C.el=w.el},S=(w,C,N,J)=>{[w.el,w.anchor]=g(w.children,C,N,J,w.el,w.anchor)},b=({el:w,anchor:C},N,J)=>{let X;for(;w&&w!==C;)X=d(w),i(w,N,J),w=X;i(C,N,J)},y=({el:w,anchor:C})=>{let N;for(;w&&w!==C;)N=d(w),s(w),w=N;s(C)},A=(w,C,N,J,X,Q,_e,ge,ae)=>{if(C.type==="svg"?_e="svg":C.type==="math"&&(_e="mathml"),w==null)T(C,N,J,X,Q,_e,ge,ae);else{const fe=w.el&&w.el._isVueCE?w.el:null;try{fe&&fe._beginPatch(),R(w,C,X,Q,_e,ge,ae)}finally{fe&&fe._endPatch()}}},T=(w,C,N,J,X,Q,_e,ge)=>{let ae,fe;const{props:Ce,shapeFlag:P,transition:Fe,dirs:Ne}=w;if(ae=w.el=o(w.type,Q,Ce&&Ce.is,Ce),P&8?u(ae,w.children):P&16&&x(w.children,ae,null,J,X,El(w,Q),_e,ge),Ne&&us(w,null,J,"created"),D(ae,w,w.scopeId,_e,J),Ce){for(const v in Ce)v!=="value"&&!jr(v)&&r(ae,v,null,Ce[v],Q,J);"value"in Ce&&r(ae,"value",null,Ce.value,Q),(fe=Ce.onVnodeBeforeMount)&&Qn(fe,J,w)}Ne&&us(w,null,J,"beforeMount");const E=r0(X,Fe);E&&Fe.beforeEnter(ae),i(ae,C,N),((fe=Ce&&Ce.onVnodeMounted)||E||Ne)&&Mn(()=>{try{fe&&Qn(fe,J,w),E&&Fe.enter(ae),Ne&&us(w,null,J,"mounted")}finally{}},X)},D=(w,C,N,J,X)=>{if(N&&p(w,N),J)for(let Q=0;Q<J.length;Q++)p(w,J[Q]);if(X){let Q=X.subTree;if(C===Q||qp(Q.type)&&(Q.ssContent===C||Q.ssFallback===C)){const _e=X.vnode;D(w,_e,_e.scopeId,_e.slotScopeIds,X.parent)}}},x=(w,C,N,J,X,Q,_e,ge,ae=0)=>{for(let fe=ae;fe<w.length;fe++){const Ce=w[fe]=ge?Ti(w[fe]):si(w[fe]);_(null,Ce,C,N,J,X,Q,_e,ge)}},R=(w,C,N,J,X,Q,_e)=>{const ge=C.el=w.el;let{patchFlag:ae,dynamicChildren:fe,dirs:Ce}=C;ae|=w.patchFlag&16;const P=w.props||At,Fe=C.props||At;let Ne;if(N&&fs(N,!1),(Ne=Fe.onVnodeBeforeUpdate)&&Qn(Ne,N,C,w),Ce&&us(C,w,N,"beforeUpdate"),N&&fs(N,!0),fe&&(!w.dynamicChildren||w.dynamicChildren.length!==fe.length)&&(ae=0,_e=!1,fe=null),(P.innerHTML&&Fe.innerHTML==null||P.textContent&&Fe.textContent==null)&&u(ge,""),fe?F(w.dynamicChildren,fe,ge,N,J,El(C,X),Q):_e||se(w,C,ge,null,N,J,El(C,X),Q,!1),ae>0){if(ae&16)U(ge,P,Fe,N,X);else if(ae&2&&P.class!==Fe.class&&r(ge,"class",null,Fe.class,X),ae&4&&r(ge,"style",P.style,Fe.style,X),ae&8){const E=C.dynamicProps;for(let v=0;v<E.length;v++){const B=E[v],$=P[B],ie=Fe[B];(ie!==$||B==="value")&&r(ge,B,$,ie,X,N)}}ae&1&&w.children!==C.children&&u(ge,C.children)}else!_e&&fe==null&&U(ge,P,Fe,N,X);((Ne=Fe.onVnodeUpdated)||Ce)&&Mn(()=>{Ne&&Qn(Ne,N,C,w),Ce&&us(C,w,N,"updated")},J)},F=(w,C,N,J,X,Q,_e)=>{for(let ge=0;ge<C.length;ge++){const ae=w[ge],fe=C[ge],Ce=ae.el&&(ae.type===xt||!Fr(ae,fe)||ae.shapeFlag&198)?f(ae.el):N;_(ae,fe,Ce,null,J,X,Q,_e,!0)}},U=(w,C,N,J,X)=>{if(C!==N){if(C!==At)for(const Q in C)!jr(Q)&&!(Q in N)&&r(w,Q,C[Q],null,X,J);for(const Q in N){if(jr(Q))continue;const _e=N[Q],ge=C[Q];_e!==ge&&Q!=="value"&&r(w,Q,ge,_e,X,J)}"value"in N&&r(w,"value",C.value,N.value,X)}},V=(w,C,N,J,X,Q,_e,ge,ae)=>{const fe=C.el=w?w.el:a(""),Ce=C.anchor=w?w.anchor:a("");let{patchFlag:P,dynamicChildren:Fe,slotScopeIds:Ne}=C;Ne&&(ge=ge?ge.concat(Ne):Ne),w==null?(i(fe,N,J),i(Ce,N,J),x(C.children||[],N,Ce,X,Q,_e,ge,ae)):P>0&&P&64&&Fe&&w.dynamicChildren&&w.dynamicChildren.length===Fe.length?(F(w.dynamicChildren,Fe,N,X,Q,_e,ge),(C.key!=null||X&&C===X.subTree)&&Gp(w,C,!0)):se(w,C,N,Ce,X,Q,_e,ge,ae)},oe=(w,C,N,J,X,Q,_e,ge,ae)=>{C.slotScopeIds=ge,w==null?C.shapeFlag&512?X.ctx.activate(C,N,J,_e,ae):ne(C,N,J,X,Q,_e,ae):G(w,C,ae)},ne=(w,C,N,J,X,Q,_e)=>{const ge=w.component=h0(w,J,X);if(Rp(w)&&(ge.ctx.renderer=me),m0(ge,!1,_e),ge.asyncDep){if(X&&X.registerDep(ge,j,_e),!w.el){const ae=ge.subTree=Zt(ts);h(null,ae,C,N),w.placeholder=ae.el}}else j(ge,w,C,N,X,Q,_e)},G=(w,C,N)=>{const J=C.component=w.component;if(K_(w,C,N))if(J.asyncDep&&!J.asyncResolved){W(J,C,N);return}else J.next=C,J.update();else C.el=w.el,J.vnode=C},j=(w,C,N,J,X,Q,_e)=>{const ge=()=>{if(w.isMounted){let{next:P,bu:Fe,u:Ne,parent:E,vnode:v}=w;{const Te=Wp(w);if(Te){P&&(P.el=v.el,W(w,P,_e)),Te.asyncDep.then(()=>{Mn(()=>{w.isUnmounted||fe()},X)});return}}let B=P,$;fs(w,!1),P?(P.el=v.el,W(w,P,_e)):P=v,Fe&&ua(Fe),($=P.props&&P.props.onVnodeBeforeUpdate)&&Qn($,E,P,v),fs(w,!0);const ie=zf(w),ye=w.subTree;w.subTree=ie,_(ye,ie,f(ye.el),O(ye),w,X,Q),P.el=ie.el,B===null&&Z_(w,ie.el),Ne&&Mn(Ne,X),($=P.props&&P.props.onVnodeUpdated)&&Mn(()=>Qn($,E,P,v),X)}else{let P;const{el:Fe,props:Ne}=C,{bm:E,m:v,parent:B,root:$,type:ie}=w,ye=no(C);fs(w,!1),E&&ua(E),!ye&&(P=Ne&&Ne.onVnodeBeforeMount)&&Qn(P,B,C),fs(w,!0);{$.ce&&$.ce._hasShadowRoot()&&$.ce._injectChildStyle(ie,w.parent?w.parent.type:void 0);const Te=w.subTree=zf(w);_(null,Te,N,J,w,X,Q),C.el=Te.el}if(v&&Mn(v,X),!ye&&(P=Ne&&Ne.onVnodeMounted)){const Te=C;Mn(()=>Qn(P,B,Te),X)}(C.shapeFlag&256||B&&no(B.vnode)&&B.vnode.shapeFlag&256)&&w.a&&Mn(w.a,X),w.isMounted=!0,C=N=J=null}};w.scope.on();const ae=w.effect=new np(ge);w.scope.off();const fe=w.update=ae.run.bind(ae),Ce=w.job=ae.runIfDirty.bind(ae);Ce.i=w,Ce.id=w.uid,ae.scheduler=()=>Hu(Ce),fs(w,!0),fe()},W=(w,C,N)=>{C.component=w;const J=w.vnode.props;w.vnode=C,w.next=null,j_(w,C.props,J,N),n0(w,C.children,N),Li(),Df(w),Ii()},se=(w,C,N,J,X,Q,_e,ge,ae=!1)=>{const fe=w&&w.children,Ce=w?w.shapeFlag:0,P=C.children,{patchFlag:Fe,shapeFlag:Ne}=C;if(Fe>0){if(Fe&128){Se(fe,P,N,J,X,Q,_e,ge,ae);return}else if(Fe&256){pe(fe,P,N,J,X,Q,_e,ge,ae);return}}Ne&8?(Ce&16&&K(fe,X,Q),P!==fe&&u(N,P)):Ce&16?Ne&16?Se(fe,P,N,J,X,Q,_e,ge,ae):K(fe,X,Q,!0):(Ce&8&&u(N,""),Ne&16&&x(P,N,J,X,Q,_e,ge,ae))},pe=(w,C,N,J,X,Q,_e,ge,ae)=>{w=w||ir,C=C||ir;const fe=w.length,Ce=C.length,P=Math.min(fe,Ce);let Fe;for(Fe=0;Fe<P;Fe++){const Ne=C[Fe]=ae?Ti(C[Fe]):si(C[Fe]);_(w[Fe],Ne,N,null,X,Q,_e,ge,ae)}fe>Ce?K(w,X,Q,!0,!1,P):x(C,N,J,X,Q,_e,ge,ae,P)},Se=(w,C,N,J,X,Q,_e,ge,ae)=>{let fe=0;const Ce=C.length;let P=w.length-1,Fe=Ce-1;for(;fe<=P&&fe<=Fe;){const Ne=w[fe],E=C[fe]=ae?Ti(C[fe]):si(C[fe]);if(Fr(Ne,E))_(Ne,E,N,null,X,Q,_e,ge,ae);else break;fe++}for(;fe<=P&&fe<=Fe;){const Ne=w[P],E=C[Fe]=ae?Ti(C[Fe]):si(C[Fe]);if(Fr(Ne,E))_(Ne,E,N,null,X,Q,_e,ge,ae);else break;P--,Fe--}if(fe>P){if(fe<=Fe){const Ne=Fe+1,E=Ne<Ce?C[Ne].el:J;for(;fe<=Fe;)_(null,C[fe]=ae?Ti(C[fe]):si(C[fe]),N,E,X,Q,_e,ge,ae),fe++}}else if(fe>Fe)for(;fe<=P;)we(w[fe],X,Q,!0),fe++;else{const Ne=fe,E=fe,v=new Map;for(fe=E;fe<=Fe;fe++){const xe=C[fe]=ae?Ti(C[fe]):si(C[fe]);xe.key!=null&&v.set(xe.key,fe)}let B,$=0;const ie=Fe-E+1;let ye=!1,Te=0;const ce=new Array(ie);for(fe=0;fe<ie;fe++)ce[fe]=0;for(fe=Ne;fe<=P;fe++){const xe=w[fe];if($>=ie){we(xe,X,Q,!0);continue}let He;if(xe.key!=null)He=v.get(xe.key);else for(B=E;B<=Fe;B++)if(ce[B-E]===0&&Fr(xe,C[B])){He=B;break}He===void 0?we(xe,X,Q,!0):(ce[He-E]=fe+1,He>=Te?Te=He:ye=!0,_(xe,C[He],N,null,X,Q,_e,ge,ae),$++)}const de=ye?o0(ce):ir;for(B=de.length-1,fe=ie-1;fe>=0;fe--){const xe=E+fe,He=C[xe],Le=C[xe+1],Pe=xe+1<Ce?Le.el||Xp(Le):J;ce[fe]===0?_(null,He,N,Pe,X,Q,_e,ge,ae):ye&&(B<0||fe!==de[B]?ve(He,N,Pe,2):B--)}}},ve=(w,C,N,J,X=null)=>{const{el:Q,type:_e,transition:ge,children:ae,shapeFlag:fe}=w;if(fe&6){ve(w.component.subTree,C,N,J);return}if(fe&128){w.suspense.move(C,N,J);return}if(fe&64){_e.move(w,C,N,me);return}if(_e===xt){i(Q,C,N);for(let P=0;P<ae.length;P++)ve(ae[P],C,N,J);i(w.anchor,C,N);return}if(_e===da){b(w,C,N);return}if(J!==2&&fe&1&&ge)if(J===0)ge.persisted&&!Q[Ml]?i(Q,C,N):(ge.beforeEnter(Q),i(Q,C,N),Mn(()=>ge.enter(Q),X));else{const{leave:P,delayLeave:Fe,afterLeave:Ne}=ge,E=()=>{w.ctx.isUnmounted?s(Q):i(Q,C,N)},v=()=>{const B=Q._isLeaving||!!Q[Ml];Q._isLeaving&&Q[Ml](!0),ge.persisted&&!B?E():P(Q,()=>{E(),Ne&&Ne()})};Fe?Fe(Q,E,v):v()}else i(Q,C,N)},we=(w,C,N,J=!1,X=!1)=>{const{type:Q,props:_e,ref:ge,children:ae,dynamicChildren:fe,shapeFlag:Ce,patchFlag:P,dirs:Fe,cacheIndex:Ne,memo:E}=w;if(P===-2&&(X=!1),ge!=null&&(Li(),to(ge,null,N,w,!0),Ii()),Ne!=null&&(C.renderCache[Ne]=void 0),Ce&256){C.ctx.deactivate(w);return}const v=Ce&1&&Fe,B=!no(w);let $;if(B&&($=_e&&_e.onVnodeBeforeUnmount)&&Qn($,C,w),Ce&6)Qe(w.component,N,J);else{if(Ce&128){w.suspense.unmount(N,J);return}v&&us(w,null,C,"beforeUnmount"),Ce&64?w.type.remove(w,C,N,me,J):fe&&!fe.hasOnce&&(Q!==xt||P>0&&P&64)?K(fe,C,N,!1,!0):(Q===xt&&P&384||!X&&Ce&16)&&K(ae,C,N),J&&Je(w)}const ie=E!=null&&Ne==null;(B&&($=_e&&_e.onVnodeUnmounted)||v||ie)&&Mn(()=>{$&&Qn($,C,w),v&&us(w,null,C,"unmounted"),ie&&(w.el=null)},N)},Je=w=>{const{type:C,el:N,anchor:J,transition:X}=w;if(C===xt){rt(N,J);return}if(C===da){y(w);return}const Q=()=>{s(N),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(w.shapeFlag&1&&X&&!X.persisted){const{leave:_e,delayLeave:ge}=X,ae=()=>_e(N,Q);ge?ge(w.el,Q,ae):ae()}else Q()},rt=(w,C)=>{let N;for(;w!==C;)N=d(w),s(w),w=N;s(C)},Qe=(w,C,N)=>{const{bum:J,scope:X,job:Q,subTree:_e,um:ge,m:ae,a:fe}=w;Vf(ae),Vf(fe),J&&ua(J),X.stop(),Q&&(Q.flags|=8,we(_e,w,C,N)),ge&&Mn(ge,C),Mn(()=>{w.isUnmounted=!0},C)},K=(w,C,N,J=!1,X=!1,Q=0)=>{for(let _e=Q;_e<w.length;_e++)we(w[_e],C,N,J,X)},O=w=>{if(w.shapeFlag&6)return O(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=d(w.anchor||w.el),N=C&&C[x_];return N?d(N):C};let Z=!1;const ue=(w,C,N)=>{let J;w==null?C._vnode&&(we(C._vnode,null,null,!0),J=C._vnode.component):_(C._vnode||null,w,C,null,null,null,N),C._vnode=w,Z||(Z=!0,Df(J),Sp(),Z=!1)},me={p:_,um:we,m:ve,r:Je,mt:ne,mc:x,pc:se,pbc:F,n:O,o:t};return{render:ue,hydrate:void 0,createApp:G_(ue)}}function El({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function r0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gp(t,e,n=!1){const i=t.children,s=e.children;if(Ze(i)&&Ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ti(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Gp(o,a)),a.type===il&&(a.patchFlag===-1&&(a=s[r]=Ti(a)),a.el=o.el),a.type===ts&&!a.el&&(a.el=o.el)}}function o0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Wp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wp(e)}function Vf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Xp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Xp(e.subTree):null}const qp=t=>t.__isSuspense;function a0(t,e){e&&e.pendingBranch?Ze(t)?e.effects.push(...t):e.effects.push(t):m_(t)}const xt=Symbol.for("v-fgt"),il=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),da=Symbol.for("v-stc"),As=[];let Ln=null;function Ae(t=!1){As.push(Ln=t?null:[])}function $p(){As.pop(),Ln=As[As.length-1]||null}let uo=1;function Pa(t,e=!1){uo+=t,t<0&&Ln&&e&&(Ln.hasOnce=!0)}function Yp(t){return t.dynamicChildren=uo>0?Ln||ir:null,$p(),uo>0&&Ln&&Ln.push(t),t}function Re(t,e,n,i,s,r){return Yp(L(t,e,n,i,s,r,!0))}function Kp(t,e,n,i,s){return Yp(Zt(t,e,n,i,s,!0))}function Da(t){return t?t.__v_isVNode===!0:!1}function Fr(t,e){return t.type===e.type&&t.key===e.key}const Zp=({key:t})=>t??null,ha=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ut(t)||cn(t)||it(t)?{i:Dn,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,i=0,s=null,r=t===xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zp(e),ref:e&&ha(e),scopeId:bp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dn};return a?(La(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ut(n)?8:16),uo>0&&!o&&Ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ln.push(l),l}const Zt=l0;function l0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===N_)&&(t=ts),Da(t)){const a=dr(t,e,!0);return n&&La(a,n),uo>0&&!r&&Ln&&(a.shapeFlag&6?Ln[Ln.indexOf(t)]=a:Ln.push(a)),a.patchFlag=-2,a}if(y0(t)&&(t=t.__vccOpts),e){e=c0(e);let{class:a,style:l}=e;a&&!Ut(a)&&(e.class=Cn(a)),yt(l)&&(zu(l)&&!Ze(l)&&(l=jt({},l)),e.style=oo(l))}const o=Ut(t)?1:qp(t)?128:y_(t)?64:yt(t)?4:it(t)?2:0;return L(t,e,n,i,s,o,r,!0)}function c0(t){return t?zu(t)||Fp(t)?jt({},t):t:null}function dr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?u0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zp(c),ref:e&&e.ref?n&&r?Ze(r)?r.concat(ha(e)):[r,ha(e)]:ha(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dr(t.ssContent),ssFallback:t.ssFallback&&dr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&ku(u,l.clone(u)),u}function Ct(t=" ",e=0){return Zt(il,null,t,e)}function sl(t,e){const n=Zt(da,null,t);return n.staticCount=e,n}function Vt(t="",e=!1){return e?(Ae(),Kp(ts,null,t)):Zt(ts,null,t)}function si(t){return t==null||typeof t=="boolean"?Zt(ts):Ze(t)?Zt(xt,null,t.slice()):Da(t)?Ti(t):Zt(il,null,String(t))}function Ti(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dr(t)}function La(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ze(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),La(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Fp(e)?e._ctx=Dn:s===3&&Dn&&(Dn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(it(e)){if(i&65){La(t,{default:e});return}e={default:e,_ctx:Dn},n=32}else e=String(e),i&64?(n=16,e=[Ct(e)]):n=8;t.children=e,t.shapeFlag|=n}function u0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Cn([e.class,i.class]));else if(s==="style")e.style=oo([e.style,i.style]);else if(qa(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!$a(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Qn(t,e,n,i=null){Yn(t,e,7,[n,i])}const f0=Lp();let d0=0;function h0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||f0,r={uid:d0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zp(i,s),emitsOptions:Ip(i,s),emit:null,emitted:null,propsDefaults:At,inheritAttrs:i.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=X_.bind(null,r),t.ce&&t.ce(r),r}let an=null;const p0=()=>an||Dn;let Ia,Ac;{const t=Ja(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ia=e("__VUE_INSTANCE_SETTERS__",n=>an=n),Ac=e("__VUE_SSR_SETTERS__",n=>fo=n)}const Mo=t=>{const e=an;return Ia(t),t.scope.on(),()=>{t.scope.off(),Ia(e)}},Gf=()=>{an&&an.scope.off(),Ia(null)};function Jp(t){return t.vnode.shapeFlag&4}let fo=!1;function m0(t,e=!1,n=!1){e&&Ac(e);const{props:i,children:s}=t.vnode,r=Jp(t);J_(t,i,r,e),t0(t,s,n||e);const o=r?g0(t,e):void 0;return e&&Ac(!1),o}function g0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,O_);const{setup:i}=n;if(i){Li();const s=t.setupContext=i.length>1?v0(t):null,r=Mo(t),o=So(i,t,0,[t.props,s]),a=Kh(o);if(Ii(),r(),(a||t.sp)&&!no(t)&&wp(t),a){if(o.then(Gf,Gf),e)return o.then(l=>{Wf(t,l)}).catch(l=>{Qa(l,t,0)});t.asyncDep=o}else Wf(t,o)}else jp(t)}function Wf(t,e,n){it(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:yt(e)&&(t.setupState=vp(e)),jp(t)}function jp(t,e,n){const i=t.type;t.render||(t.render=i.render||ui);{const s=Mo(t);Li();try{F_(t)}finally{Ii(),s()}}}const _0={get(t,e){return on(t,"get",""),t[e]}};function v0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_0),slots:t.slots,emit:t.emit,expose:e}}function rl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vp(r_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in io)return io[n](t)},has(e,n){return n in e||n in io}})):t.proxy}function x0(t,e=!0){return it(t)?t.displayName||t.name:t.name||e&&t.__name}function y0(t){return it(t)&&"__vccOpts"in t}const dt=(t,e)=>u_(t,e,fo);function Qp(t,e,n){try{Pa(-1);const i=arguments.length;return i===2?yt(e)&&!Ze(e)?Da(e)?Zt(t,null,[e]):Zt(t,e):Zt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Da(n)&&(n=[n]),Zt(t,e,n))}finally{Pa(1)}}const S0="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wc;const Xf=typeof window<"u"&&window.trustedTypes;if(Xf)try{wc=Xf.createPolicy("vue",{createHTML:t=>t})}catch{}const em=wc?t=>wc.createHTML(t):t=>t,M0="http://www.w3.org/2000/svg",b0="http://www.w3.org/1998/Math/MathML",Ei=typeof document<"u"?document:null,qf=Ei&&Ei.createElement("template"),E0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Ei.createElementNS(M0,t):e==="mathml"?Ei.createElementNS(b0,t):n?Ei.createElement(t,{is:n}):Ei.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Ei.createTextNode(t),createComment:t=>Ei.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ei.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{qf.innerHTML=em(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=qf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},T0=Symbol("_vtc");function A0(t,e,n){const i=t[T0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $f=Symbol("_vod"),w0=Symbol("_vsh"),R0=Symbol(""),C0=/(?:^|;)\s*display\s*:/;function P0(t,e,n){const i=t.style,s=Ut(n);let r=!1;if(n&&!s){if(e)if(Ut(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Kr(i,a,"")}else for(const o in e)n[o]==null&&Kr(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?L0(t,o,!Ut(e)&&e?e[o]:void 0,a)||Kr(i,o,a):Kr(i,o,"")}}else if(s){if(e!==n){const o=i[R0];o&&(n+=";"+o),i.cssText=n,r=C0.test(n)}}else e&&t.removeAttribute("style");$f in t&&(t[$f]=r?i.display:"",t[w0]&&(i.display="none"))}const Yf=/\s*!important$/;function Kr(t,e,n){if(Ze(n))n.forEach(i=>Kr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=D0(t,e);Yf.test(n)?t.setProperty(rs(i),n.replace(Yf,""),"important"):t[i]=n}}const Kf=["Webkit","Moz","ms"],Tl={};function D0(t,e){const n=Tl[e];if(n)return n;let i=_n(e);if(i!=="filter"&&i in t)return Tl[e]=i;i=Ka(i);for(let s=0;s<Kf.length;s++){const r=Kf[s]+i;if(r in t)return Tl[e]=r}return e}function L0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ut(i)&&n===i}const Zf="http://www.w3.org/1999/xlink";function Jf(t,e,n,i,s,r=Bg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Zf,e.slice(6,e.length)):t.setAttributeNS(Zf,e,n):n==null||r&&!Qh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":pi(n)?String(n):n)}function jf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?em(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Qh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ji(t,e,n,i){t.addEventListener(e,n,i)}function I0(t,e,n,i){t.removeEventListener(e,n,i)}const Qf=Symbol("_vei");function N0(t,e,n,i,s=null){const r=t[Qf]||(t[Qf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=F0(e);if(i){const c=r[e]=H0(i,s);Ji(t,a,c,l)}else o&&(I0(t,a,o,l),r[e]=void 0)}}const U0=/(Once|Passive|Capture)$/,O0=/^on:?(?:Once|Passive|Capture)$/;function F0(t){let e,n;for(;(n=t.match(U0))&&!O0.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):rs(t.slice(2)),e]}let Al=0;const B0=Promise.resolve(),z0=()=>Al||(B0.then(()=>Al=0),Al=Date.now());function H0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(Ze(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Yn(c,e,5,a)}}else Yn(s,e,5,[i])};return n.value=t,n.attached=z0(),n}const ed=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,k0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?A0(t,i,o):e==="style"?P0(t,n,i):qa(e)?$a(e)||N0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):V0(t,e,i,o))?(jf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jf(t,e,i,o,r,e!=="value")):t._isVueCE&&(G0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ut(i)))?jf(t,_n(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Jf(t,e,i,o))};function V0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&ed(e)&&it(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ed(e)&&Ut(n)?!1:e in t}function G0(t,e){const n=t._def.props;if(!n)return!1;const i=_n(e);return Array.isArray(n)?n.some(s=>_n(s)===i):Object.keys(n).some(s=>_n(s)===i)}const hr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ze(e)?n=>ua(e,n):e};function W0(t){t.target.composing=!0}function td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ci=Symbol("_assign");function nd(t,e,n){return e&&(t=t.trim()),n&&(t=Za(t)),t}const Vn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ci]=hr(s);const r=i||s.props&&s.props.type==="number";Ji(t,e?"change":"input",o=>{o.target.composing||t[Ci](nd(t.value,n,r))}),(n||r)&&Ji(t,"change",()=>{t.value=nd(t.value,n,r)}),e||(Ji(t,"compositionstart",W0),Ji(t,"compositionend",td),Ji(t,"change",td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ci]=hr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Za(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},X0={deep:!0,created(t,e,n){t[Ci]=hr(n),Ji(t,"change",()=>{const i=t._modelValue,s=ho(t),r=t.checked,o=t[Ci];if(Ze(i)){const a=Lu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(br(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(tm(t,r))})},mounted:id,beforeUpdate(t,e,n){t[Ci]=hr(n),id(t,e,n)}};function id(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Ze(e))s=Lu(e,i.props.value)>-1;else if(br(e))s=e.has(i.props.value);else{if(e===n)return;s=Er(e,tm(t,!0))}t.checked!==s&&(t.checked=s)}const wl={deep:!0,created(t,{value:e,modifiers:{number:n}},i){t._modelValue=e,Ji(t,"change",()=>{const s=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?Za(ho(r)):ho(r));t[Ci](t.multiple?br(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,el(()=>{t._assigning=!1})}),t[Ci]=hr(i)},mounted(t,{value:e}){sd(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Ci]=hr(n)},updated(t,{value:e}){t._assigning||sd(t,e)}};function sd(t,e){const n=t.multiple,i=Ze(e);if(!(n&&!i&&!br(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=ho(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Lu(e,a)>-1}else o.selected=e.has(a);else if(Er(ho(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ho(t){return"_value"in t?t._value:t.value}function tm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const q0=["ctrl","shift","alt","meta"],$0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>q0.some(n=>t[`${n}Key`]&&!e.includes(n))},Y0=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=$0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},K0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},rd=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=rs(s.key);if(e.some(o=>o===r||K0[o]===r))return t(s)})},Z0=jt({patchProp:k0},E0);let od;function J0(){return od||(od=i0(Z0))}const j0=(...t)=>{const e=J0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ev(i);if(!s)return;const r=e._component;!it(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Q0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Q0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ev(t){return Ut(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const tr=typeof document<"u";function nm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&nm(t.default)}const mt=Object.assign;function Rl(t,e){const n={};for(const i in e){const s=e[i];n[i]=Kn(s)?s.map(t):t(s)}return n}const so=()=>{},Kn=Array.isArray;function ad(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const im=/#/g,nv=/&/g,iv=/\//g,sv=/=/g,rv=/\?/g,sm=/\+/g,ov=/%5B/g,av=/%5D/g,rm=/%5E/g,lv=/%60/g,om=/%7B/g,cv=/%7C/g,am=/%7D/g,uv=/%20/g;function Xu(t){return t==null?"":encodeURI(""+t).replace(cv,"|").replace(ov,"[").replace(av,"]")}function fv(t){return Xu(t).replace(om,"{").replace(am,"}").replace(rm,"^")}function Rc(t){return Xu(t).replace(sm,"%2B").replace(uv,"+").replace(im,"%23").replace(nv,"%26").replace(lv,"`").replace(om,"{").replace(am,"}").replace(rm,"^")}function dv(t){return Rc(t).replace(sv,"%3D")}function hv(t){return Xu(t).replace(im,"%23").replace(rv,"%3F")}function pv(t){return hv(t).replace(iv,"%2F")}function po(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const mv=/\/$/,gv=t=>t.replace(mv,"");function Cl(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=yv(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:po(o)}}function _v(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ld(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&pr(e.matched[i],n.matched[s])&&lm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!xv(t[n],e[n]))return!1;return!0}function xv(t,e){return Kn(t)?cd(t,e):Kn(e)?cd(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function cd(t,e){return Kn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function yv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ki={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Cc=function(t){return t.pop="pop",t.push="push",t}({}),Pl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function Sv(t){if(!t)if(tr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gv(t)}const Mv=/^[^#]+#/;function bv(t,e){return t.replace(Mv,"#")+e}function Ev(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ol=()=>({left:window.scrollX,top:window.scrollY});function Tv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ev(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ud(t,e){return(history.state?history.state.position-e:-1)+t}const Pc=new Map;function Av(t,e){Pc.set(t,e)}function wv(t){const e=Pc.get(t);return Pc.delete(t),e}function Rv(t){return typeof t=="string"||t&&typeof t=="object"}function cm(t){return typeof t=="string"||typeof t=="symbol"}let It=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const um=Symbol("");It.MATCHER_NOT_FOUND+"",It.NAVIGATION_GUARD_REDIRECT+"",It.NAVIGATION_ABORTED+"",It.NAVIGATION_CANCELLED+"",It.NAVIGATION_DUPLICATED+"";function mr(t,e){return mt(new Error,{type:t,[um]:!0},e)}function vi(t,e){return t instanceof Error&&um in t&&(e==null||!!(t.type&e))}const Cv=["params","query","hash"];function Pv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Cv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Dv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(sm," "),r=s.indexOf("="),o=po(r<0?s:s.slice(0,r)),a=r<0?null:po(s.slice(r+1));if(o in e){let l=e[o];Kn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function fd(t){let e="";for(let n in t){const i=t[n];if(n=dv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kn(i)?i.map(s=>s&&Rc(s)):[i&&Rc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Lv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Kn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Iv=Symbol(""),dd=Symbol(""),al=Symbol(""),qu=Symbol(""),Dc=Symbol("");function Br(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ki(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(mr(It.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):Rv(d)?l(mr(It.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Dl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(nm(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Ki(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=tv(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Ki(d,n,i,o,a,s)()}))}}return r}function Nv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>pr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>pr(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Uv=()=>location.protocol+"//"+location.host;function fm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),ld(a,"")}return ld(n,t)+i+s}function Ov(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const p=fm(t,location),g=n.value,_=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(p);s.forEach(h=>{h(n.value,g,{delta:m,type:Cc.pop,direction:m?m>0?Pl.forward:Pl.back:Pl.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(mt({},d.state,{scroll:ol()}),"")}}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function hd(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?ol():null}}function Fv(t){const{history:e,location:n}=window,i={value:fm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Uv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){r(l,mt({},e.state,hd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=mt({},s.value,e.state,{forward:l,scroll:ol()});r(u.current,u,!0),r(l,mt({},hd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Bv(t){t=Sv(t);const e=Fv(t),n=Ov(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=mt({location:"",base:t,go:i,createHref:bv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let xs=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var kt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(kt||{});const zv={type:xs.Static,value:""},Hv=/[a-zA-Z0-9_]/;function kv(t){if(!t)return[[]];if(t==="/")return[[zv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=kt.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===kt.Static?r.push({type:xs.Static,value:c}):n===kt.Param||n===kt.ParamRegExp||n===kt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:xs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==kt.ParamRegExp){i=n,n=kt.EscapeNext;continue}switch(n){case kt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=kt.Param):d();break;case kt.EscapeNext:d(),n=i;break;case kt.Param:l==="("?n=kt.ParamRegExp:Hv.test(l)?d():(f(),n=kt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case kt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=kt.ParamRegExpEnd:u+=l;break;case kt.ParamRegExpEnd:f(),n=kt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===kt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const pd="[^/]+?",Vv={sensitive:!1,strict:!1,start:!0,end:!0};var pn=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(pn||{});const Gv=/[.+*?^${}()[\]/\\]/g;function Wv(t,e){const n=mt({},Vv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[pn.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=pn.Segment+(n.sensitive?pn.BonusCaseSensitive:0);if(d.type===xs.Static)f||(s+="/"),s+=d.value.replace(Gv,"\\$&"),p+=pn.Static;else if(d.type===xs.Param){const{value:g,repeatable:_,optional:m,regexp:h}=d;r.push({name:g,repeatable:_,optional:m});const S=h||pd;if(S!==pd){p+=pn.BonusCustomRegExp;try{`${S}`}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+y.message)}}let b=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,p+=pn.Dynamic,m&&(p+=pn.BonusOptional),_&&(p+=pn.BonusRepeatable),S===".*"&&(p+=pn.BonusWildcard)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=pn.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===xs.Static)u+=p.value;else if(p.type===xs.Param){const{value:g,repeatable:_,optional:m}=p,h=g in c?c[g]:"";if(Kn(h)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Kn(h)?h.join("/"):h;if(!S)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Xv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===pn.Static+pn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===pn.Static+pn.Segment?1:-1:0}function dm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Xv(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(md(i))return 1;if(md(s))return-1}return s.length-i.length}function md(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qv={strict:!1,end:!0,sensitive:!1};function $v(t,e,n){const i=Wv(kv(t.path),n),s=mt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Yv(t,e){const n=[],i=new Map;e=ad(qv,e);function s(f){return i.get(f)}function r(f,d,p){const g=!p,_=_d(f);_.aliasOf=p&&p.record;const m=ad(e,f),h=[_];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const A of y)h.push(_d(mt({},_,{components:p?p.record.components:_.components,path:A,aliasOf:p?p.record:_})))}let S,b;for(const y of h){const{path:A}=y;if(d&&A[0]!=="/"){const T=d.record.path,D=T[T.length-1]==="/"?"":"/";y.path=d.record.path+(A&&D+A)}if(S=$v(y,d,m),p?p.alias.push(S):(b=b||S,b!==S&&b.alias.push(S),g&&f.name&&!vd(S)&&o(f.name)),hm(S)&&l(S),_.children){const T=_.children;for(let D=0;D<T.length;D++)r(T[D],S,p&&p.children[D])}p=p||S}return b?()=>{o(b)}:so}function o(f){if(cm(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=Jv(f,n);n.splice(d,0,f),f.record.name&&!vd(f)&&i.set(f.record.name,f)}function c(f,d){let p,g={},_,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw mr(It.MATCHER_NOT_FOUND,{location:f});m=p.record.name,g=mt(gd(d.params,p.keys.filter(b=>!b.optional).concat(p.parent?p.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&gd(f.params,p.keys.map(b=>b.name))),_=p.stringify(g)}else if(f.path!=null)_=f.path,p=n.find(b=>b.re.test(_)),p&&(g=p.parse(_),m=p.record.name);else{if(p=d.name?i.get(d.name):n.find(b=>b.re.test(d.path)),!p)throw mr(It.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=p.record.name,g=mt({},d.params,f.params),_=p.stringify(g)}const h=[];let S=p;for(;S;)h.unshift(S.record),S=S.parent;return{name:m,path:_,params:g,matched:h,meta:Zv(h)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function gd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function _d(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Kv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Kv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function vd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zv(t){return t.reduce((e,n)=>mt(e,n.meta),{})}function Jv(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;dm(t,e[r])<0?i=r:n=r+1}const s=jv(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function jv(t){let e=t;for(;e=e.parent;)if(hm(e)&&dm(t,e)===0)return e}function hm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function xd(t){const e=Xn(al),n=Xn(qu),i=dt(()=>{const l=bn(t.to);return e.resolve(l)}),s=dt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(pr.bind(null,u));if(d>-1)return d;const p=yd(l[c-2]);return c>1&&yd(u)===p&&f[f.length-1].path!==p?f.findIndex(pr.bind(null,l[c-2])):d}),r=dt(()=>s.value>-1&&nx(n.params,i.value.params)),o=dt(()=>s.value>-1&&s.value===n.matched.length-1&&lm(n.params,i.value.params));function a(l={}){if(tx(l)){const c=e[bn(t.replace)?"replace":"push"](bn(t.to)).catch(so);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:dt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Qv(t){return t.length===1?t[0]:t}const ex=Ap({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:xd,setup(t,{slots:e}){const n=Is(xd(t)),{options:i}=Xn(al),s=dt(()=>({[Sd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Sd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Qv(e.default(n));return t.custom?r:Qp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Lc=ex;function tx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nx(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Kn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function yd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sd=(t,e,n)=>t??e??n,ix=Ap({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Xn(Dc),s=dt(()=>t.route||i.value),r=Xn(dd,0),o=dt(()=>{let c=bn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=dt(()=>s.value.matched[o.value]);fa(dd,dt(()=>o.value+1)),fa(Iv,a),fa(Dc,s);const l=$e();return es(()=>[l.value,a.value,t.name],([c,u,f],[d,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!pr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Md(n.default,{Component:d,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Qp(d,mt({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Md(n.default,{Component:m,route:c})||m}}});function Md(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pm=ix;function sx(t){const e=Yv(t.routes,t),n=t.parseQuery||Dv,i=t.stringifyQuery||fd,s=t.history,r=Br(),o=Br(),a=Br(),l=o_(ki);let c=ki;tr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rl.bind(null,O=>""+O),f=Rl.bind(null,pv),d=Rl.bind(null,po);function p(O,Z){let ue,me;return cm(O)?(ue=e.getRecordMatcher(O),me=Z):me=O,e.addRoute(me,ue)}function g(O){const Z=e.getRecordMatcher(O);Z&&e.removeRoute(Z)}function _(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function h(O,Z){if(Z=mt({},Z||l.value),typeof O=="string"){const N=Cl(n,O,Z.path),J=e.resolve({path:N.path},Z),X=s.createHref(N.fullPath);return mt(N,J,{params:d(J.params),hash:po(N.hash),redirectedFrom:void 0,href:X})}let ue;if(O.path!=null)ue=mt({},O,{path:Cl(n,O.path,Z.path).path});else{const N=mt({},O.params);for(const J in N)N[J]==null&&delete N[J];ue=mt({},O,{params:f(N)}),Z.params=f(Z.params)}const me=e.resolve(ue,Z),Me=O.hash||"";me.params=u(d(me.params));const w=_v(i,mt({},O,{hash:fv(Me),path:me.path})),C=s.createHref(w);return mt({fullPath:w,hash:Me,query:i===fd?Lv(O.query):O.query||{}},me,{redirectedFrom:void 0,href:C})}function S(O){return typeof O=="string"?Cl(n,O,l.value.path):mt({},O)}function b(O,Z){if(c!==O)return mr(It.NAVIGATION_CANCELLED,{from:Z,to:O})}function y(O){return D(O)}function A(O){return y(mt(S(O),{replace:!0}))}function T(O,Z){const ue=O.matched[O.matched.length-1];if(ue&&ue.redirect){const{redirect:me}=ue;let Me=typeof me=="function"?me(O,Z):me;return typeof Me=="string"&&(Me=Me.includes("?")||Me.includes("#")?Me=S(Me):{path:Me},Me.params={}),mt({query:O.query,hash:O.hash,params:Me.path!=null?{}:O.params},Me)}}function D(O,Z){const ue=c=h(O),me=l.value,Me=O.state,w=O.force,C=O.replace===!0,N=T(ue,me);if(N)return D(mt(S(N),{state:typeof N=="object"?mt({},Me,N.state):Me,force:w,replace:C}),Z||ue);const J=ue;J.redirectedFrom=Z;let X;return!w&&vv(i,me,ue)&&(X=mr(It.NAVIGATION_DUPLICATED,{to:J,from:me}),ve(me,me,!0,!1)),(X?Promise.resolve(X):F(J,me)).catch(Q=>vi(Q)?vi(Q,It.NAVIGATION_GUARD_REDIRECT)?Q:Se(Q):se(Q,J,me)).then(Q=>{if(Q){if(vi(Q,It.NAVIGATION_GUARD_REDIRECT))return D(mt({replace:C},S(Q.to),{state:typeof Q.to=="object"?mt({},Me,Q.to.state):Me,force:w}),Z||J)}else Q=V(J,me,!0,C,Me);return U(J,me,Q),Q})}function x(O,Z){const ue=b(O,Z);return ue?Promise.reject(ue):Promise.resolve()}function R(O){const Z=rt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(O):O()}function F(O,Z){let ue;const[me,Me,w]=Nv(O,Z);ue=Dl(me.reverse(),"beforeRouteLeave",O,Z);for(const N of me)N.leaveGuards.forEach(J=>{ue.push(Ki(J,O,Z))});const C=x.bind(null,O,Z);return ue.push(C),K(ue).then(()=>{ue=[];for(const N of r.list())ue.push(Ki(N,O,Z));return ue.push(C),K(ue)}).then(()=>{ue=Dl(Me,"beforeRouteUpdate",O,Z);for(const N of Me)N.updateGuards.forEach(J=>{ue.push(Ki(J,O,Z))});return ue.push(C),K(ue)}).then(()=>{ue=[];for(const N of w)if(N.beforeEnter)if(Kn(N.beforeEnter))for(const J of N.beforeEnter)ue.push(Ki(J,O,Z));else ue.push(Ki(N.beforeEnter,O,Z));return ue.push(C),K(ue)}).then(()=>(O.matched.forEach(N=>N.enterCallbacks={}),ue=Dl(w,"beforeRouteEnter",O,Z,R),ue.push(C),K(ue))).then(()=>{ue=[];for(const N of o.list())ue.push(Ki(N,O,Z));return ue.push(C),K(ue)}).catch(N=>vi(N,It.NAVIGATION_CANCELLED)?N:Promise.reject(N))}function U(O,Z,ue){a.list().forEach(me=>R(()=>me(O,Z,ue)))}function V(O,Z,ue,me,Me){const w=b(O,Z);if(w)return w;const C=Z===ki,N=tr?history.state:{};ue&&(me||C?s.replace(O.fullPath,mt({scroll:C&&N&&N.scroll},Me)):s.push(O.fullPath,Me)),l.value=O,ve(O,Z,ue,C),Se()}let oe;function ne(){oe||(oe=s.listen((O,Z,ue)=>{if(!Qe.listening)return;const me=h(O),Me=T(me,Qe.currentRoute.value);if(Me){D(mt(Me,{replace:!0,force:!0}),me).catch(so);return}c=me;const w=l.value;tr&&Av(ud(w.fullPath,ue.delta),ol()),F(me,w).catch(C=>vi(C,It.NAVIGATION_ABORTED|It.NAVIGATION_CANCELLED)?C:vi(C,It.NAVIGATION_GUARD_REDIRECT)?(D(mt(S(C.to),{force:!0}),me).then(N=>{vi(N,It.NAVIGATION_ABORTED|It.NAVIGATION_DUPLICATED)&&!ue.delta&&ue.type===Cc.pop&&s.go(-1,!1)}).catch(so),Promise.reject()):(ue.delta&&s.go(-ue.delta,!1),se(C,me,w))).then(C=>{C=C||V(me,w,!1),C&&(ue.delta&&!vi(C,It.NAVIGATION_CANCELLED)?s.go(-ue.delta,!1):ue.type===Cc.pop&&vi(C,It.NAVIGATION_ABORTED|It.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),U(me,w,C)}).catch(so)}))}let G=Br(),j=Br(),W;function se(O,Z,ue){Se(O);const me=j.list();return me.length?me.forEach(Me=>Me(O,Z,ue)):console.error(O),Promise.reject(O)}function pe(){return W&&l.value!==ki?Promise.resolve():new Promise((O,Z)=>{G.add([O,Z])})}function Se(O){return W||(W=!O,ne(),G.list().forEach(([Z,ue])=>O?ue(O):Z()),G.reset()),O}function ve(O,Z,ue,me){const{scrollBehavior:Me}=t;if(!tr||!Me)return Promise.resolve();const w=!ue&&wv(ud(O.fullPath,0))||(me||!ue)&&history.state&&history.state.scroll||null;return el().then(()=>Me(O,Z,w)).then(C=>C&&Tv(C)).catch(C=>se(C,O,Z))}const we=O=>s.go(O);let Je;const rt=new Set,Qe={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:h,options:t,push:y,replace:A,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:pe,install(O){O.component("RouterLink",Lc),O.component("RouterView",pm),O.config.globalProperties.$router=Qe,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>bn(l)}),tr&&!Je&&l.value===ki&&(Je=!0,y(s.location).catch(me=>{}));const Z={};for(const me in ki)Object.defineProperty(Z,me,{get:()=>l.value[me],enumerable:!0});O.provide(al,Qe),O.provide(qu,gp(Z)),O.provide(Dc,l);const ue=O.unmount;rt.add(O),O.unmount=function(){rt.delete(O),rt.size<1&&(c=ki,oe&&oe(),oe=null,l.value=ki,Je=!1,W=!1),ue()}}};function K(O){return O.reduce((Z,ue)=>Z.then(()=>R(ue)),Promise.resolve())}return Qe}function $u(){return Xn(al)}function mm(t){return Xn(qu)}const Yu="vision-portal-session",Oo=(()=>{try{return JSON.parse(localStorage.getItem(Yu)||"null")}catch{return null}})(),gr=$e(Oo&&Oo.token&&Oo.user?Oo:null),Na=dt(()=>{var t;return!!((t=gr.value)!=null&&t.token)}),ro=dt(()=>{var t;return((t=gr.value)==null?void 0:t.user)||null}),gm=t=>{gr.value=t,localStorage.setItem(Yu,JSON.stringify(t))},rx=t=>{gr.value&&gm({...gr.value,user:t})},ox=()=>{gr.value=null,localStorage.removeItem(Yu)},ax={class:"sidebar"},lx={class:"brand"},cx={key:0,class:"brand-account-actions"},ux={class:"account-hover-card"},fx={key:1,class:"brand-account-actions"},dx={class:"nav-group-title"},hx={class:"main-panel"},px={class:"topbar"},mx={class:"topbar-actions"},gx={__name:"App",setup(t){const e=mm(),n=$u(),i=$e(localStorage.getItem("vision-portal-theme")==="light"),s=[{title:"平台總覽",requiresAuth:!0,items:[{label:"首頁",to:"/",icon:"◉"}]},{title:"系統介紹",items:[{label:"操作指引",to:"/guide",icon:"◌"},{label:"定位技術",to:"/technology",icon:"◌"}]},{title:"歷史資料",requiresAuth:!0,items:[{label:"物件資料",to:"/history/object",icon:"◌"},{label:"施工任務",to:"/history/tasks",icon:"◌"},{label:"操作紀錄",to:"/history/operations",icon:"◌"}]},{title:"媒體資料",requiresAuth:!0,items:[{label:"影像串流",to:"/media/stream",icon:"◌"},{label:"語音提示",to:"/media/voice",icon:"◌"}]},{title:"系統設定",requiresAuth:!0,items:[{label:"相機外參設定",to:"/settings/camera-extrinsics"}]}],r=dt(()=>s.filter(c=>!c.requiresAuth||Na.value)),o=dt(()=>{const c=s.flatMap(u=>u.items).find(u=>u.to===e.path);return(c==null?void 0:c.label)||"首頁"}),a=(c="login")=>n.push({path:"/account/login",query:{mode:c}}),l=()=>{i.value=!i.value,localStorage.setItem("vision-portal-theme",i.value?"light":"dark")};return(c,u)=>{var f,d;return Ae(),Re("div",{class:Cn(["app-shell",{"theme-light":i.value}])},[L("aside",ax,[L("div",lx,[u[2]||(u[2]=L("div",{class:"brand-mark"},"V",-1)),u[3]||(u[3]=L("div",{class:"brand-content"},[L("p",{class:"brand-eyebrow"},"終端定位平台"),L("div",{class:"brand-title-row"},[L("h2",null,"Vision Portal")])],-1)),bn(Na)?(Ae(),Re("div",cx,[Zt(bn(Lc),{class:"user-avatar",to:"/account/profile"},{default:wa(()=>{var p,g;return[Ct(Ee((g=(p=bn(ro))==null?void 0:p.name)==null?void 0:g.charAt(0).toUpperCase()),1)]}),_:1}),L("div",ux,[L("strong",null,Ee((f=bn(ro))==null?void 0:f.name),1),L("span",null,Ee((d=bn(ro))==null?void 0:d.email),1),u[1]||(u[1]=L("small",null,"點擊頭貼查看帳戶資料",-1))])])):(Ae(),Re("div",fx,[L("button",{type:"button",class:"brand-login",onClick:u[0]||(u[0]=p=>a("login"))},"登入")]))]),(Ae(!0),Re(xt,null,qn(r.value,p=>(Ae(),Re("nav",{class:"nav-section",key:p.title},[L("p",dx,Ee(p.title),1),(Ae(!0),Re(xt,null,qn(p.items,g=>(Ae(),Kp(bn(Lc),{key:g.to,class:Cn(["nav-link",{active:bn(e).path===g.to}]),to:g.to,"exact-active-class":"active"},{default:wa(()=>[u[4]||(u[4]=L("span",{class:"icon","aria-hidden":"true"},null,-1)),L("span",null,Ee(g.label),1)]),_:2},1032,["class","to"]))),128))]))),128))]),L("main",hx,[L("header",px,[L("h1",null,Ee(o.value),1),L("div",mx,[L("button",{type:"button",class:"theme-toggle",onClick:l},Ee(i.value?"◐ 夜間":"☀ 白天"),1),u[5]||(u[5]=L("div",{class:"topbar-badge"},"已連線",-1))])]),Zt(bn(pm))])],2)}}};function _m(t,e){return function(){return t.apply(e,arguments)}}const{toString:_x}=Object.prototype,{getPrototypeOf:_r}=Object,{iterator:bo,toStringTag:vm}=Symbol,Ua=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),mo=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),Ua(n,e))return!0;n=_r(n)}return!1},vx=(t,e)=>t!=null&&mo(t,e)?t[e]:void 0,Ku=(t=>e=>{const n=_x.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Zn=t=>(t=t.toLowerCase(),e=>Ku(e)===t),ll=t=>e=>typeof e===t,{isArray:Rs}=Array,vr=ll("undefined");function Tr(t){return t!==null&&!vr(t)&&t.constructor!==null&&!vr(t.constructor)&&En(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const xm=Zn("ArrayBuffer");function xx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&xm(t.buffer),e}const yx=ll("string"),En=ll("function"),ym=ll("number"),Ar=t=>t!==null&&typeof t=="object",Sx=t=>t===!0||t===!1,pa=t=>{if(!Ar(t))return!1;const e=_r(t);return(e===null||e===Object.prototype||_r(e)===null)&&!mo(t,vm)&&!mo(t,bo)},Mx=t=>{if(!Ar(t)||Tr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},bx=Zn("Date"),Ex=Zn("File"),Tx=t=>!!(t&&typeof t.uri<"u"),Ax=t=>t&&typeof t.getParts<"u",wx=Zn("Blob"),Rx=Zn("FileList"),Cx=t=>Ar(t)&&En(t.pipe);function Px(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const bd=Px(),Ed=typeof bd.FormData<"u"?bd.FormData:void 0,Dx=t=>{if(!t)return!1;if(Ed&&t instanceof Ed)return!0;const e=_r(t);if(!e||e===Object.prototype||!En(t.append))return!1;const n=Ku(t);return n==="formdata"||n==="object"&&En(t.toString)&&t.toString()==="[object FormData]"},Lx=Zn("URLSearchParams"),[Ix,Nx,Ux,Ox]=["ReadableStream","Request","Response","Headers"].map(Zn),Fx=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Eo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Rs(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Tr(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Sm(t,e){if(Tr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Mm=t=>!vr(t)&&t!==ys;function Ic(...t){const{caseless:e,skipUndefined:n}=Mm(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&Sm(i,o)||o,l=Ua(i,a)?i[a]:void 0;pa(l)&&pa(r)?i[a]=Ic(l,r):pa(r)?i[a]=Ic({},r):Rs(r)?i[a]=r.slice():(!n||!vr(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++){const a=t[r];if(!a||Tr(a)||(Eo(a,s),typeof a!="object"||Rs(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];Kx.call(a,u)&&s(a[u],u)}}return i}const Bx=(t,e,n,{allOwnKeys:i}={})=>(Eo(e,(s,r)=>{n&&En(s)?Object.defineProperty(t,r,{__proto__:null,value:_m(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),zx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Hx=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},kx=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&_r(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Vx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Gx=t=>{if(!t)return null;if(Rs(t))return t;let e=t.length;if(!ym(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Wx=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&_r(Uint8Array)),Xx=(t,e)=>{const i=(t&&t[bo]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},qx=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},$x=Zn("HTMLFormElement"),Yx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:Kx}=Object.prototype,Zx=Zn("RegExp"),bm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Eo(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Jx=t=>{bm(t,(e,n)=>{if(En(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(En(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jx=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Rs(t)?i(t):i(String(t).split(e)),n},Qx=()=>{},ey=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function ty(t){return!!(t&&En(t.append)&&t[vm]==="FormData"&&t[bo])}const ny=t=>{const e=new WeakSet,n=i=>{if(Ar(i)){if(e.has(i))return;if(Tr(i))return i;if(!("toJSON"in i)){e.add(i);const s=Rs(i)?[]:{};return Eo(i,(r,o)=>{const a=n(r);!vr(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},iy=Zn("AsyncFunction"),sy=t=>t&&(Ar(t)||En(t))&&En(t.then)&&En(t.catch),Em=((t,e)=>t?setImmediate:e?((n,i)=>(ys.addEventListener("message",({source:s,data:r})=>{s===ys&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),ys.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",En(ys.postMessage)),ry=typeof queueMicrotask<"u"?queueMicrotask.bind(ys):typeof process<"u"&&process.nextTick||Em,Tm=t=>t!=null&&En(t[bo]),oy=t=>t!=null&&mo(t,bo)&&Tm(t),k={isArray:Rs,isArrayBuffer:xm,isBuffer:Tr,isFormData:Dx,isArrayBufferView:xx,isString:yx,isNumber:ym,isBoolean:Sx,isObject:Ar,isPlainObject:pa,isEmptyObject:Mx,isReadableStream:Ix,isRequest:Nx,isResponse:Ux,isHeaders:Ox,isUndefined:vr,isDate:bx,isFile:Ex,isReactNativeBlob:Tx,isReactNative:Ax,isBlob:wx,isRegExp:Zx,isFunction:En,isStream:Cx,isURLSearchParams:Lx,isTypedArray:Wx,isFileList:Rx,forEach:Eo,merge:Ic,extend:Bx,trim:Fx,stripBOM:zx,inherits:Hx,toFlatObject:kx,kindOf:Ku,kindOfTest:Zn,endsWith:Vx,toArray:Gx,forEachEntry:Xx,matchAll:qx,isHTMLForm:$x,hasOwnProperty:Ua,hasOwnProp:Ua,hasOwnInPrototypeChain:mo,getSafeProp:vx,reduceDescriptors:bm,freezeMethods:Jx,toObjectSet:jx,toCamelCase:Yx,noop:Qx,toFiniteNumber:ey,findKey:Sm,global:ys,isContextDefined:Mm,isSpecCompliantForm:ty,toJSONObject:ny,isAsyncFn:iy,isThenable:sy,setImmediate:Em,asap:ry,isIterable:Tm,isSafeIterable:oy},ay=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ly=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&ay[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function cy(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const uy=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),fy=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Zu(t,e){return k.isArray(t)?t.map(n=>Zu(n,e)):cy(String(t).replace(e,""))}const dy=t=>Zu(t,uy),hy=t=>Zu(t,fy);function Am(t){const e=Object.create(null);return k.forEach(t.toJSON(),(n,i)=>{e[i]=hy(n)}),e}const Td=Symbol("internals");function zr(t){return t&&String(t).trim().toLowerCase()}function ma(t){return t===!1||t==null?t:k.isArray(t)?t.map(ma):dy(String(t))}function py(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const my=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ll(t,e,n,i,s){if(k.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!k.isString(e)){if(k.isString(i))return e.indexOf(i)!==-1;if(k.isRegExp(i))return i.test(e)}}function gy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function _y(t,e){const n=k.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let un=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=zr(l);if(!u)return;const f=k.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=ma(a))}const o=(a,l)=>k.forEach(a,(c,u)=>r(c,u,l));if(k.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(k.isString(e)&&(e=e.trim())&&!my(e))o(ly(e),n);else if(k.isObject(e)&&k.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!k.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],k.hasOwnProp(a,c)?(l=a[c],a[c]=k.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=zr(e),e){const i=k.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return py(s);if(k.isFunction(n))return n.call(this,s,i);if(k.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=zr(e),e){const i=k.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Ll(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=zr(o),o){const a=k.findKey(i,o);a&&(!n||Ll(i,i[a],a,n))&&(delete i[a],s=!0)}}return k.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||Ll(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return k.forEach(this,(s,r)=>{const o=k.findKey(i,r);if(o){n[o]=ma(s),delete n[r];return}const a=e?gy(r):String(r).trim();a!==r&&delete n[r],n[a]=ma(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return k.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&k.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Td]=this[Td]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=zr(o);i[a]||(_y(s,o),i[a]=!0)}return k.isArray(e)?e.forEach(r):r(e),this}};un.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(un.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});k.freezeMethods(un);const vy="[REDACTED ****]";function xy(t){if(k.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(k.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function yy(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||k.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof un&&(r=r.toJSON()),i.push(r);let o;if(k.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);k.isUndefined(c)||(o[l]=c)});else{if(!k.isPlainObject(r)&&xy(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?vy:s(l);k.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let Oe=class wm extends Error{static from(e,n,i,s,r,o){const a=new wm(e.message,n||e.code,i,s,r);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&k.hasOwnProp(e,"redact")?e.redact:void 0,i=k.isArray(n)&&n.length>0?yy(e,n):k.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Oe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Oe.ERR_BAD_OPTION="ERR_BAD_OPTION";Oe.ECONNABORTED="ECONNABORTED";Oe.ETIMEDOUT="ETIMEDOUT";Oe.ECONNREFUSED="ECONNREFUSED";Oe.ERR_NETWORK="ERR_NETWORK";Oe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Oe.ERR_DEPRECATED="ERR_DEPRECATED";Oe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Oe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Oe.ERR_CANCELED="ERR_CANCELED";Oe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Oe.ERR_INVALID_URL="ERR_INVALID_URL";Oe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Sy=null,Rm=100;function Nc(t){return k.isPlainObject(t)||k.isArray(t)}function Cm(t){return k.endsWith(t,"[]")?t.slice(0,-2):t}function Il(t,e,n){return t?t.concat(e).map(function(s,r){return s=Cm(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function My(t){return k.isArray(t)&&!t.some(Nc)}const by=k.toFlatObject(k,{},null,function(e){return/^is[A-Z]/.test(e)});function cl(t,e,n){if(!k.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,b){return!k.isUndefined(b[S])});const i=n.metaTokens,s=n.visitor||g,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?Rm:n.maxDepth,c=a&&k.isSpecCompliantForm(e),u=[];if(!k.isFunction(s))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(k.isDate(h))return h.toISOString();if(k.isBoolean(h))return h.toString();if(!c&&k.isBlob(h))throw new Oe("Blob is not supported. Use a Buffer instead.");if(k.isArrayBuffer(h)||k.isTypedArray(h)){if(c&&typeof a=="function")return new a([h]);if(typeof Buffer<"u")return Buffer.from(h);throw new Oe("Blob is not supported. Use a Buffer instead.",Oe.ERR_NOT_SUPPORT)}return h}function d(h){if(h>l)throw new Oe("Object is too deeply nested ("+h+" levels). Max depth: "+l,Oe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(h,S){if(l===1/0)return JSON.stringify(h);const b=[];return JSON.stringify(h,function(A,T){if(!k.isObject(T))return T;for(;b.length&&b[b.length-1]!==this;)b.pop();return b.push(T),d(S+b.length-1),T})}function g(h,S,b){let y=h;if(k.isReactNative(e)&&k.isReactNativeBlob(h))return e.append(Il(b,S,r),f(h)),!1;if(h&&!b&&typeof h=="object"){if(k.endsWith(S,"{}"))S=i?S:S.slice(0,-2),h=p(h,1);else if(k.isArray(h)&&My(h)||(k.isFileList(h)||k.endsWith(S,"[]"))&&(y=k.toArray(h)))return S=Cm(S),y.forEach(function(T,D){!(k.isUndefined(T)||T===null)&&e.append(o===!0?Il([S],D,r):o===null?S:S+"[]",f(T))}),!1}return Nc(h)?!0:(e.append(Il(b,S,r),f(h)),!1)}const _=Object.assign(by,{defaultVisitor:g,convertValue:f,isVisitable:Nc});function m(h,S,b=0){if(!k.isUndefined(h)){if(d(b),u.indexOf(h)!==-1)throw new Error("Circular reference detected in "+S.join("."));u.push(h),k.forEach(h,function(A,T){(!(k.isUndefined(A)||A===null)&&s.call(e,A,k.isString(T)?T.trim():T,S,_))===!0&&m(A,S?S.concat(T):[T],b+1)}),u.pop()}}if(!k.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Ad(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Ju(t,e){this._pairs=[],t&&cl(t,this,e)}const Pm=Ju.prototype;Pm.append=function(e,n){this._pairs.push([e,n])};Pm.toString=function(e){const n=e?i=>e.call(this,i,Ad):Ad;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ey(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Dm(t,e,n){if(!e)return t;t=t||"";const i=k.isFunction(n)?{serialize:n}:n,s=k.getSafeProp(i,"encode")||Ey,r=k.getSafeProp(i,"serialize");let o;if(r?o=r(e,i):o=k.isURLSearchParams(e)?e.toString():new Ju(e,i).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class wd{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){k.forEach(this.handlers,function(i){i!==null&&e(i)})}}const ju={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Ty=typeof URLSearchParams<"u"?URLSearchParams:Ju,Ay=typeof FormData<"u"?FormData:null,wy=typeof Blob<"u"?Blob:null,Ry={isBrowser:!0,classes:{URLSearchParams:Ty,FormData:Ay,Blob:wy},protocols:["http","https","file","blob","url","data"]},Qu=typeof window<"u"&&typeof document<"u",Uc=typeof navigator=="object"&&navigator||void 0,Cy=Qu&&(!Uc||["ReactNative","NativeScript","NS"].indexOf(Uc.product)<0),Py=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dy=Qu&&window.location.href||"http://localhost",Ly=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qu,hasStandardBrowserEnv:Cy,hasStandardBrowserWebWorkerEnv:Py,navigator:Uc,origin:Dy},Symbol.toStringTag,{value:"Module"})),Kt={...Ly,...Ry};function Iy(t,e){return cl(t,new Kt.classes.URLSearchParams,{visitor:function(n,i,s,r){return Kt.isNode&&k.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}const Rd=Rm;function Lm(t){if(t>Rd)throw new Oe("FormData field is too deeply nested ("+t+" levels). Max depth: "+Rd,Oe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Ny(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)Lm(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function Uy(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Im(t){function e(n,i,s,r){Lm(r);let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&k.isArray(s)?s.length:o,l?(k.hasOwnProp(s,o)?s[o]=k.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!k.hasOwnProp(s,o)||!k.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&k.isArray(s[o])&&(s[o]=Uy(s[o])),!a)}if(k.isFormData(t)&&k.isFunction(t.entries)){const n={};return k.forEachEntry(t,(i,s)=>{e(Ny(i),s,n,0)}),n}return null}const zs=(t,e)=>t!=null&&k.hasOwnProp(t,e)?t[e]:void 0;function Oy(t,e,n){if(k.isString(t))try{return(e||JSON.parse)(t),k.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const To={transitional:ju,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=k.isObject(e);if(r&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return s?JSON.stringify(Im(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e)||k.isReadableStream(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=zs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Iy(e,l).toString();if((a=k.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=zs(this,"env"),u=c&&c.FormData;return cl(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),Oy(e)):e}],transformResponse:[function(e){const n=zs(this,"transitional")||To.transitional,i=n&&n.forcedJSONParsing,s=zs(this,"responseType"),r=s==="json";if(k.isResponse(e)||k.isReadableStream(e))return e;if(e&&k.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,zs(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Oe.from(l,Oe.ERR_BAD_RESPONSE,this,null,zs(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kt.classes.FormData,Blob:Kt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch","query"],t=>{To.headers[t]={}});function Nl(t,e){const n=this||To,i=e||n,s=un.from(i.headers);let r=i.data;return k.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Nm(t){return!!(t&&t.__CANCEL__)}let Ao=class extends Oe{constructor(e,n,i){super(e??"canceled",Oe.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Um(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Oe("Request failed with status code "+n.status,n.status>=400&&n.status<500?Oe.ERR_BAD_REQUEST:Oe.ERR_BAD_RESPONSE,n.config,n.request,n))}function Fy(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function By(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function zy(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const Oa=(t,e,n=3)=>{let i=0;const s=By(50,250);return zy(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Cd=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Pd=t=>(...e)=>k.asap(()=>t(...e)),Hy=Kt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Kt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Kt.origin),Kt.navigator&&/(msie|trident)/i.test(Kt.navigator.userAgent)):()=>!0,ky=Kt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];k.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),k.isString(i)&&a.push(`path=${i}`),k.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),k.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Vy(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Gy(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const Wy=/^https?:(?!\/\/)/i,Xy=/[\t\n\r]/g;function qy(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function $y(t){return qy(t).replace(Xy,"")}function Dd(t,e){if(typeof t=="string"&&Wy.test($y(t)))throw new Oe('Invalid URL: missing "//" after protocol',Oe.ERR_INVALID_URL,e)}function Om(t,e,n,i){Dd(e,i);let s=!Vy(e);return t&&(s||n===!1)?(Dd(t,i),Gy(t,e)):e}const Ld=t=>t instanceof un?{...t}:t;function Cs(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,d,p){return k.isPlainObject(u)&&k.isPlainObject(f)?k.merge.call({caseless:p},u,f):k.isPlainObject(f)?k.merge({},f):k.isArray(f)?f.slice():f}function s(u,f,d,p){if(k.isUndefined(f)){if(!k.isUndefined(u))return i(void 0,u,d,p)}else return i(u,f,d,p)}function r(u,f){if(!k.isUndefined(f))return i(void 0,f)}function o(u,f){if(k.isUndefined(f)){if(!k.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=k.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!k.isUndefined(f))if(k.isPlainObject(f)){if(k.hasOwnProp(f,u))return f[u]}else return;const d=k.hasOwnProp(t,"transitional")?t.transitional:void 0;if(k.isPlainObject(d)&&k.hasOwnProp(d,u))return d[u]}function l(u,f,d){if(k.hasOwnProp(e,d))return i(u,f);if(k.hasOwnProp(t,d))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,d)=>s(Ld(u),Ld(f),d,!0)};return k.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const d=k.hasOwnProp(c,f)?c[f]:s,p=k.hasOwnProp(t,f)?t[f]:void 0,g=k.hasOwnProp(e,f)?e[f]:void 0,_=d(p,g,f);k.isUndefined(_)&&d!==l||(n[f]=_)}),k.hasOwnProp(e,"validateStatus")&&k.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(k.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const Yy=["content-type","content-length"];function Ky(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,s])=>{Yy.includes(i.toLowerCase())&&t.set(i,s)})}const Zy=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Fm(t){const e=Cs({},t),n=d=>k.hasOwnProp(e,d)?e[d]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=un.from(a),e.url=Dm(Om(c,f,u,e),n("params"),n("paramsSerializer")),l){const d=k.getSafeProp(l,"username")||"",p=k.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(d+":"+(p?Zy(p):"")))}catch(g){throw Oe.from(g,Oe.ERR_BAD_OPTION_VALUE,t)}}if(k.isFormData(i)&&(Kt.hasStandardBrowserEnv||Kt.hasStandardBrowserWebWorkerEnv||k.isReactNative(i)?a.setContentType(void 0):k.isFunction(i.getHeaders)&&Ky(a,i.getHeaders(),n("formDataHeaderPolicy"))),Kt.hasStandardBrowserEnv&&(k.isFunction(s)&&(s=s(e)),s===!0||s==null&&Hy(e.url))){const p=r&&o&&ky.read(o);p&&a.set(r,p)}return e}const Jy=typeof XMLHttpRequest<"u",jy=Jy&&function(t){return new Promise(function(n,i){const s=Fm(t);let r=s.data;const o=un.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,p,g;function _(){p&&p(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function h(){if(!m)return;const b=un.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:b,config:t,request:m};Um(function(D){n(D),_()},function(D){i(D),_()},A),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(h)},m.onabort=function(){m&&(i(new Oe("Request aborted",Oe.ECONNABORTED,t,m)),_(),m=null)},m.onerror=function(y){const A=y&&y.message?y.message:"Network Error",T=new Oe(A,Oe.ERR_NETWORK,t,m);T.event=y||null,i(T),_(),m=null},m.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||ju;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new Oe(y,A.clarifyTimeoutError?Oe.ETIMEDOUT:Oe.ECONNABORTED,t,m)),_(),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&k.forEach(Am(o),function(y,A){m.setRequestHeader(A,y)}),k.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([d,g]=Oa(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,p]=Oa(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(s.cancelToken||s.signal)&&(u=b=>{m&&(i(!b||b.type?new Ao(null,t,m):b),m.abort(),_(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=Fy(s.url);if(S&&!Kt.protocols.includes(S)){i(new Oe("Unsupported protocol "+S+":",Oe.ERR_BAD_REQUEST,t)),_();return}m.send(r||null)})},Qy=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof Oe?c:new Ao(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new Oe(`timeout of ${e}ms exceeded`,Oe.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>k.asap(o),a},eS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},tS=async function*(t,e){for await(const n of nS(t))yield*eS(n,e)},nS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Id=(t,e,n,i)=>{const s=tS(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Fa=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,iS=(t,e,n)=>e+2<n&&Fa(t.charCodeAt(e+1))&&Fa(t.charCodeAt(e+2));function sS(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let p=0;p<a;p++)if(i.charCodeAt(p)===37&&p+2<a){const g=i.charCodeAt(p+1),_=i.charCodeAt(p+2);Fa(g)&&Fa(_)&&(o-=2,p+=2)}let l=0,c=a-1;const u=p=>p>=2&&i.charCodeAt(p-2)===37&&i.charCodeAt(p-1)===51&&(i.charCodeAt(p)===68||i.charCodeAt(p)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const d=Math.floor(o/4)*3-(l||0);return d>0?d:0}let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&iS(i,o,a))r+=1,o+=2;else if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const ef="1.18.1",Nd=64*1024,{isFunction:Fo}=k,rS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Ud=t=>{if(!k.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Od=(t,...e)=>{try{return!!t(...e)}catch{return!1}},oS=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},aS=t=>{const e=k.global!==void 0&&k.global!==null?k.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=k.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?Fo(s):typeof fetch=="function",l=Fo(r),c=Fo(o);if(!a)return!1;const u=a&&Fo(n),f=a&&(typeof i=="function"?(h=>S=>h.encode(S))(new i):async h=>new Uint8Array(await new r(h).arrayBuffer())),d=l&&u&&Od(()=>{let h=!1;const S=new r(Kt.origin,{body:new n,method:"POST",get duplex(){return h=!0,"half"}}),b=S.headers.has("Content-Type");return S.body!=null&&S.body.cancel(),h&&!b}),p=c&&u&&Od(()=>k.isReadableStream(new o("").body)),g={stream:p&&(h=>h.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(h=>{!g[h]&&(g[h]=(S,b)=>{let y=S&&S[h];if(y)return y.call(S);throw new Oe(`Response type '${h}' is not supported`,Oe.ERR_NOT_SUPPORT,b)})});const _=async h=>{if(h==null)return 0;if(k.isBlob(h))return h.size;if(k.isSpecCompliantForm(h))return(await new r(Kt.origin,{method:"POST",body:h}).arrayBuffer()).byteLength;if(k.isArrayBufferView(h)||k.isArrayBuffer(h))return h.byteLength;if(k.isURLSearchParams(h)&&(h=h+""),k.isString(h))return(await f(h)).byteLength},m=async(h,S)=>{const b=k.toFiniteNumber(h.getContentLength());return b??_(S)};return async h=>{let{url:S,method:b,data:y,signal:A,cancelToken:T,timeout:D,onDownloadProgress:x,onUploadProgress:R,responseType:F,headers:U,withCredentials:V="same-origin",fetchOptions:oe,maxContentLength:ne,maxBodyLength:G}=Fm(h);const j=k.isNumber(ne)&&ne>-1,W=k.isNumber(G)&&G>-1,se=K=>k.hasOwnProp(h,K)?h[K]:void 0;let pe=s||fetch;F=F?(F+"").toLowerCase():"text";let Se=Qy([A,T&&T.toAbortSignal()],D),ve=null;const we=Se&&Se.unsubscribe&&(()=>{Se.unsubscribe()});let Je,rt=null;const Qe=()=>new Oe("Request body larger than maxBodyLength limit",Oe.ERR_BAD_REQUEST,h,ve);try{let K;const O=se("auth");if(O){const X=k.getSafeProp(O,"username")||"",Q=k.getSafeProp(O,"password")||"";K={username:X,password:Q}}if(oS(S)){const X=new URL(S,Kt.origin);if(!K&&(X.username||X.password)){const Q=Ud(X.username),_e=Ud(X.password);K={username:Q,password:_e}}(X.username||X.password)&&(X.username="",X.password="",S=X.href)}if(K&&(U.delete("authorization"),U.set("Authorization","Basic "+btoa(rS((K.username||"")+":"+(K.password||""))))),j&&typeof S=="string"&&S.startsWith("data:")&&sS(S)>ne)throw new Oe("maxContentLength size of "+ne+" exceeded",Oe.ERR_BAD_RESPONSE,h,ve);if(W&&b!=="get"&&b!=="head"){const X=await _(y);if(typeof X=="number"&&isFinite(X)&&(Je=X,X>G))throw Qe()}const Z=W&&(k.isReadableStream(y)||k.isStream(y)),ue=(X,Q,_e)=>Id(X,Nd,ge=>{if(W&&ge>G)throw rt=Qe();Q&&Q(ge)},_e);if(d&&b!=="get"&&b!=="head"&&(R||Z)){if(Je=Je??await m(U,y),Je!==0||Z){let X=new r(S,{method:"POST",body:y,duplex:"half"}),Q;if(k.isFormData(y)&&(Q=X.headers.get("content-type"))&&U.setContentType(Q),X.body){const[_e,ge]=R&&Cd(Je,Oa(Pd(R)))||[];y=ue(X.body,_e,ge)}}}else if(Z&&!l&&u&&b!=="get"&&b!=="head")y=ue(y);else if(Z&&l&&!d&&b!=="get"&&b!=="head")throw new Oe("Stream request bodies are not supported by the current fetch implementation",Oe.ERR_NOT_SUPPORT,h,ve);k.isString(V)||(V=V?"include":"omit");const me=l&&"credentials"in r.prototype;if(k.isFormData(y)){const X=U.getContentType();X&&/^multipart\/form-data/i.test(X)&&!/boundary=/i.test(X)&&U.delete("content-type")}U.set("User-Agent","axios/"+ef,!1);const Me={...oe,signal:Se,method:b.toUpperCase(),headers:Am(U.normalize()),body:y,duplex:"half",credentials:me?V:void 0};ve=l&&new r(S,Me);let w=await(l?pe(ve,oe):pe(S,Me));const C=un.from(w.headers);if(j){const X=k.toFiniteNumber(C.getContentLength());if(X!=null&&X>ne)throw new Oe("maxContentLength size of "+ne+" exceeded",Oe.ERR_BAD_RESPONSE,h,ve)}const N=p&&(F==="stream"||F==="response");if(p&&w.body&&(x||j||N&&we)){const X={};["status","statusText","headers"].forEach(Ce=>{X[Ce]=w[Ce]});const Q=k.toFiniteNumber(C.getContentLength()),[_e,ge]=x&&Cd(Q,Oa(Pd(x),!0))||[];let ae=0;const fe=Ce=>{if(j&&(ae=Ce,ae>ne))throw new Oe("maxContentLength size of "+ne+" exceeded",Oe.ERR_BAD_RESPONSE,h,ve);_e&&_e(Ce)};w=new o(Id(w.body,Nd,fe,()=>{ge&&ge(),we&&we()}),X)}F=F||"text";let J=await g[k.findKey(g,F)||"text"](w,h);if(j&&!p&&!N){let X;if(J!=null&&(typeof J.byteLength=="number"?X=J.byteLength:typeof J.size=="number"?X=J.size:typeof J=="string"&&(X=typeof i=="function"?new i().encode(J).byteLength:J.length)),typeof X=="number"&&X>ne)throw new Oe("maxContentLength size of "+ne+" exceeded",Oe.ERR_BAD_RESPONSE,h,ve)}return!N&&we&&we(),await new Promise((X,Q)=>{Um(X,Q,{data:J,headers:un.from(w.headers),status:w.status,statusText:w.statusText,config:h,request:ve})})}catch(K){if(we&&we(),Se&&Se.aborted&&Se.reason instanceof Oe){const O=Se.reason;throw O.config=h,ve&&(O.request=ve),K!==O&&Object.defineProperty(O,"cause",{__proto__:null,value:K,writable:!0,enumerable:!1,configurable:!0}),O}if(rt)throw ve&&!rt.request&&(rt.request=ve),rt;if(K instanceof Oe)throw ve&&!K.request&&(K.request=ve),K;if(K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)){const O=new Oe("Network Error",Oe.ERR_NETWORK,h,ve,K&&K.response);throw Object.defineProperty(O,"cause",{__proto__:null,value:K.cause||K,writable:!0,enumerable:!1,configurable:!0}),O}throw Oe.from(K,K&&K.code,h,ve,K&&K.response)}}},lS=new Map,Bm=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=lS;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:aS(e)),u=c;return c};Bm();const tf={http:Sy,xhr:jy,fetch:{get:Bm}};k.forEach(tf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Fd=t=>`- ${t}`,cS=t=>k.isFunction(t)||t===null||t===!1;function uS(t,e){t=k.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!cS(i)&&(s=tf[(a=String(i)).toLowerCase()],s===void 0))throw new Oe(`Unknown adapter '${a}'`);if(s&&(k.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Fd).join(`
`):" "+Fd(o[0]):"as no adapter specified";throw new Oe("There is no suitable adapter to dispatch the request "+a,Oe.ERR_NOT_SUPPORT)}return s}const zm={getAdapter:uS,adapters:tf};function Ul(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ao(null,t)}function Bd(t){return Ul(t),t.headers=un.from(t.headers),t.data=Nl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),zm.getAdapter(t.adapter||To.adapter,t)(t).then(function(i){Ul(t),t.response=i;try{i.data=Nl.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=un.from(i.headers),i},function(i){if(!Nm(i)&&(Ul(t),i&&i.response)){t.response=i.response;try{i.response.data=Nl.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=un.from(i.response.headers)}return Promise.reject(i)})}const ul={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ul[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const zd={};ul.transitional=function(e,n,i){function s(r,o){return"[Axios v"+ef+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Oe(s(o," has been removed"+(n?" in "+n:"")),Oe.ERR_DEPRECATED);return n&&!zd[o]&&(zd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};ul.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function fS(t,e,n){if(typeof t!="object"||t===null)throw new Oe("options must be an object",Oe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Oe("option "+r+" must be "+l,Oe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Oe("Unknown option "+r,Oe.ERR_BAD_OPTION)}}const ga={assertOptions:fS,validators:ul},tn=ga.validators;let ws=class{constructor(e){this.defaults=e||{},this.interceptors={request:new wd,response:new wd}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Cs(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&ga.assertOptions(i,{silentJSONParsing:tn.transitional(tn.boolean),forcedJSONParsing:tn.transitional(tn.boolean),clarifyTimeoutError:tn.transitional(tn.boolean),legacyInterceptorReqResOrdering:tn.transitional(tn.boolean),advertiseZstdAcceptEncoding:tn.transitional(tn.boolean),validateStatusUndefinedResolves:tn.transitional(tn.boolean)},!1),s!=null&&(k.isFunction(s)?n.paramsSerializer={serialize:s}:ga.assertOptions(s,{encode:tn.function,serialize:tn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ga.assertOptions(n,{baseUrl:tn.spelling("baseURL"),withXsrfToken:tn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&k.merge(r.common,r[n.method]);r&&k.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),n.headers=un.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(n)===!1)return;l=l&&_.synchronous;const m=n.transitional||ju;m&&m.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,f=0,d;if(!l){const g=[Bd.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let p=n;for(;f<d;){const g=a[f++],_=a[f++];try{p=g(p)}catch(m){_.call(this,m);break}}try{u=Bd.call(this,p)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Cs(this.defaults,e);const n=Om(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Dm(n,e.params,e.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(e){ws.prototype[e]=function(n,i){return this.request(Cs(i||{},{method:e,url:n,data:i&&k.hasOwnProp(i,"data")?i.data:void 0}))}});k.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(Cs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}ws.prototype[e]=n(),e!=="query"&&(ws.prototype[e+"Form"]=n(!0))});let dS=class Hm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Ao(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Hm(function(s){e=s}),cancel:e}}};function hS(t){return function(n){return t.apply(null,n)}}function pS(t){return k.isObject(t)&&t.isAxiosError===!0}const Oc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Oc).forEach(([t,e])=>{Oc[e]=t});function km(t){const e=new ws(t),n=_m(ws.prototype.request,e);return k.extend(n,ws.prototype,e,{allOwnKeys:!0}),k.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return km(Cs(t,s))},n}const Bt=km(To);Bt.Axios=ws;Bt.CanceledError=Ao;Bt.CancelToken=dS;Bt.isCancel=Nm;Bt.VERSION=ef;Bt.toFormData=cl;Bt.AxiosError=Oe;Bt.Cancel=Bt.CanceledError;Bt.all=function(e){return Promise.all(e)};Bt.spread=hS;Bt.isAxiosError=pS;Bt.mergeConfig=Cs;Bt.AxiosHeaders=un;Bt.formToJSON=t=>Im(k.isHTMLForm(t)?new FormData(t):t);Bt.getAdapter=zm.getAdapter;Bt.HttpStatusCode=Oc;Bt.default=Bt;const{Axios:bC,AxiosError:EC,CanceledError:TC,isCancel:AC,CancelToken:wC,VERSION:RC,all:CC,Cancel:PC,isAxiosError:DC,spread:LC,toFormData:IC,AxiosHeaders:NC,HttpStatusCode:UC,formToJSON:OC,getAdapter:FC,mergeConfig:BC,create:zC}=Bt,Nt=Bt.create({baseURL:"/api"}),mS={class:"page-card"},gS={key:0,class:"placeholder"},_S={class:"summary-grid"},vS={class:"summary-label"},xS={class:"summary-note"},yS={class:"content-grid"},SS={class:"panel"},MS={key:1,class:"placeholder"},bS={class:"panel"},ES={key:0,class:"table"},TS={key:1,class:"placeholder"},AS={key:0,class:"alert"},wS={__name:"HomePage",setup(t){const e=$e([]),n=$e([]),i=$e([]),s=$e(!0),r=$e(""),o=u=>u?new Date(u).toLocaleString("zh-TW"):"—",a=dt(()=>n.value.find(u=>!u.endTime)),l=dt(()=>[{title:"使用者數",value:e.value.length,detail:"資料庫已建立的使用者"},{title:"作業紀錄",value:n.value.length,detail:"所有作業資料"},{title:"辨識結果",value:i.value.length,detail:"所有物件辨識資料"}]);return os(async()=>{var u,f;s.value=!0,r.value="";try{const[d,p,g]=await Promise.all([Nt.get("/users"),Nt.get("/operations"),Nt.get("/detections")]);e.value=d.data,n.value=p.data,i.value=g.data}catch(d){r.value=((f=(u=d.response)==null?void 0:u.data)==null?void 0:f.error)||"無法讀取資料庫資料，請確認後端服務與 MongoDB 是否已啟動。"}finally{s.value=!1}}),(u,f)=>{var d,p;return Ae(),Re("section",mS,[f[7]||(f[7]=L("div",{class:"section-title"},[L("p",{class:"eyebrow"},"Dashboard"),L("h2",null,"系統總覽")],-1)),s.value?(Ae(),Re("p",gS,"正在讀取資料庫資料…")):(Ae(),Re(xt,{key:1},[L("div",_S,[(Ae(!0),Re(xt,null,qn(l.value,g=>(Ae(),Re("article",{key:g.title,class:"summary-card"},[L("p",vS,Ee(g.title),1),L("h3",null,Ee(g.value),1),L("p",xS,Ee(g.detail),1)]))),128))]),L("div",yS,[L("article",SS,[f[4]||(f[4]=L("h3",null,"目前作業",-1)),a.value?(Ae(),Re(xt,{key:0},[L("p",null,[f[0]||(f[0]=L("strong",null,"作業 ID：",-1)),Ct(Ee(a.value._id),1)]),L("p",null,[f[1]||(f[1]=L("strong",null,"使用者：",-1)),Ct(Ee(((d=a.value.userId)==null?void 0:d.name)||((p=a.value.userId)==null?void 0:p.email)||"未提供"),1)]),L("p",null,[f[2]||(f[2]=L("strong",null,"開始時間：",-1)),Ct(Ee(o(a.value.startTime)),1)]),L("p",null,[f[3]||(f[3]=L("strong",null,"說明：",-1)),Ct(Ee(a.value.description||"—"),1)])],64)):(Ae(),Re("p",MS,"目前沒有進行中的作業。"))]),L("article",bS,[f[6]||(f[6]=L("h3",null,"最新辨識結果",-1)),i.value.length?(Ae(),Re("table",ES,[f[5]||(f[5]=L("thead",null,[L("tr",null,[L("th",null,"時間"),L("th",null,"物件"),L("th",null,"深度")])],-1)),L("tbody",null,[(Ae(!0),Re(xt,null,qn(i.value.slice(0,6),g=>(Ae(),Re("tr",{key:g._id},[L("td",null,Ee(o(g.timestamp)),1),L("td",null,Ee(g.objectClass||"未分類"),1),L("td",null,Ee(g.depth??"—"),1)]))),128))])])):(Ae(),Re("p",TS,"尚無辨識資料。"))])]),r.value?(Ae(),Re("p",AS,Ee(r.value),1)):Vt("",!0)],64))])}}},RS={class:"page-card account-page"},CS={class:"section-title"},PS={class:"panel account-panel"},DS={key:0},LS=["autocomplete"],IS={key:1},NS=["disabled"],US={key:0,class:"alert"},OS={__name:"AccountLoginPage",setup(t){const e=$u(),n=mm(),i=$e(n.query.mode==="register"?"register":"login"),s=$e(!1),r=$e(""),o=Is({name:"",email:"",password:"",confirmPassword:""}),a=()=>{i.value=i.value==="login"?"register":"login",r.value="",o.password="",o.confirmPassword=""};es(()=>n.query.mode,c=>{(c==="register"||c==="login")&&(i.value=c)});const l=async()=>{var c,u;if(r.value="",i.value==="register"&&o.password!==o.confirmPassword){r.value="兩次輸入的密碼不一致。";return}s.value=!0;try{const f=i.value==="login"?{email:o.email,password:o.password}:{name:o.name,email:o.email,password:o.password},d=await Nt.post(`/auth/${i.value==="login"?"login":"register"}`,f);gm(d.data),e.replace(typeof n.query.redirect=="string"?n.query.redirect:"/")}catch(f){r.value=((u=(c=f.response)==null?void 0:c.data)==null?void 0:u.error)||"目前無法完成帳戶操作，請稍後再試。"}finally{s.value=!1}};return(c,u)=>(Ae(),Re("section",RS,[L("div",CS,[u[4]||(u[4]=L("p",{class:"eyebrow"},"Account",-1)),L("h2",null,Ee(i.value==="login"?"登入平台":"建立帳號"),1)]),L("article",PS,[L("form",{class:"form-grid",onSubmit:Y0(l,["prevent"])},[i.value==="register"?(Ae(),Re("label",DS,[u[5]||(u[5]=Ct("使用者名稱",-1)),gn(L("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>o.name=f),type:"text",autocomplete:"name",required:""},null,512),[[Vn,o.name,void 0,{trim:!0}]])])):Vt("",!0),L("label",null,[u[6]||(u[6]=Ct("電子信箱",-1)),gn(L("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>o.email=f),type:"email",autocomplete:"email",required:""},null,512),[[Vn,o.email,void 0,{trim:!0}]])]),L("label",null,[u[7]||(u[7]=Ct("密碼",-1)),gn(L("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>o.password=f),type:"password",autocomplete:i.value==="login"?"current-password":"new-password",minlength:"8",required:""},null,8,LS),[[Vn,o.password]])]),i.value==="register"?(Ae(),Re("label",IS,[u[8]||(u[8]=Ct("確認密碼",-1)),gn(L("input",{"onUpdate:modelValue":u[3]||(u[3]=f=>o.confirmPassword=f),type:"password",autocomplete:"new-password",minlength:"8",required:""},null,512),[[Vn,o.confirmPassword]])])):Vt("",!0),L("button",{type:"submit",disabled:s.value},Ee(s.value?"處理中…":i.value==="login"?"登入":"建立帳號"),9,NS)],32),r.value?(Ae(),Re("p",US,Ee(r.value),1)):Vt("",!0),L("button",{type:"button",class:"account-switch",onClick:a},Ee(i.value==="login"?"尚未註冊？建立帳號":"已有帳號？返回登入"),1)])]))}},FS={class:"page-card profile-page"},BS={class:"panel profile-panel"},zS={key:0,class:"placeholder"},HS={class:"profile-avatar-large"},kS={class:"profile-fields"},VS={class:"profile-field-row"},GS={class:"profile-value"},WS=["disabled"],XS=["disabled"],qS={class:"profile-field-row"},$S={class:"profile-value"},YS=["disabled"],KS=["disabled"],ZS={class:"profile-field-row"},JS={class:"profile-value"},jS={key:0,class:"alert"},QS={key:2,class:"alert"},eM={__name:"AccountProfilePage",setup(t){const e=$u(),n=$e(""),i=$e(!0),s=$e(!1),r=$e(""),o=$e(null),a=Is({name:"",email:""}),l=async()=>{var p,g;try{o.value=(await Nt.get(`/users/${ro.value.id}`)).data,a.name=o.value.name,a.email=o.value.email}catch(_){r.value=((g=(p=_.response)==null?void 0:p.data)==null?void 0:g.error)||"無法讀取帳戶資料。"}finally{i.value=!1}},c=p=>{n.value=p,r.value="",a[p]=o.value[p]},u=()=>{n.value&&(a[n.value]=o.value[n.value]),n.value="",r.value=""},f=async p=>{var g,_;s.value=!0,r.value="";try{const m=(await Nt.patch(`/users/${ro.value.id}`,{[p]:a[p]})).data;o.value=m,rx(m),n.value=""}catch(m){r.value=((_=(g=m.response)==null?void 0:g.data)==null?void 0:_.error)||"無法更新帳戶資料。"}finally{s.value=!1}},d=()=>{ox(),e.push("/guide")};return os(l),(p,g)=>(Ae(),Re("section",FS,[g[11]||(g[11]=L("div",{class:"section-title profile-title"},[L("p",{class:"eyebrow"},"Account"),L("h2",null,"帳戶資料")],-1)),L("article",BS,[i.value?(Ae(),Re("p",zS,"正在讀取帳戶資料…")):o.value?(Ae(),Re(xt,{key:1},[L("div",HS,Ee(o.value.name.charAt(0).toUpperCase()),1),L("div",kS,[L("div",VS,[g[8]||(g[8]=L("span",{class:"profile-label"},"使用者名稱",-1)),L("div",GS,[n.value==="name"?(Ae(),Re(xt,{key:0},[gn(L("input",{"onUpdate:modelValue":g[0]||(g[0]=_=>a.name=_),type:"text",autofocus:"",onKeyup:g[1]||(g[1]=rd(_=>f("name"),["enter"]))},null,544),[[Vn,a.name,void 0,{trim:!0}]]),L("button",{type:"button",class:"field-save",disabled:s.value,onClick:g[2]||(g[2]=_=>f("name"))},"✓",8,WS),L("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,XS)],64)):(Ae(),Re(xt,{key:1},[L("span",null,Ee(o.value.name),1),L("button",{type:"button",class:"field-edit",title:"修改使用者名稱",onClick:g[3]||(g[3]=_=>c("name"))},"✎")],64))])]),L("div",qS,[g[9]||(g[9]=L("span",{class:"profile-label"},"電子信箱",-1)),L("div",$S,[n.value==="email"?(Ae(),Re(xt,{key:0},[gn(L("input",{"onUpdate:modelValue":g[4]||(g[4]=_=>a.email=_),type:"email",autofocus:"",onKeyup:g[5]||(g[5]=rd(_=>f("email"),["enter"]))},null,544),[[Vn,a.email,void 0,{trim:!0}]]),L("button",{type:"button",class:"field-save",disabled:s.value,onClick:g[6]||(g[6]=_=>f("email"))},"✓",8,YS),L("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,KS)],64)):(Ae(),Re(xt,{key:1},[L("span",null,Ee(o.value.email),1),L("button",{type:"button",class:"field-edit",title:"修改電子信箱",onClick:g[7]||(g[7]=_=>c("email"))},"✎")],64))])]),L("div",ZS,[g[10]||(g[10]=L("span",{class:"profile-label"},"註冊時間",-1)),L("div",JS,[L("span",null,Ee(new Date(o.value.signUpTime).toLocaleString("zh-TW")),1)])])]),r.value?(Ae(),Re("p",jS,Ee(r.value),1)):Vt("",!0),L("button",{type:"button",class:"logout-danger",onClick:d},"登出帳戶")],64)):(Ae(),Re("p",QS,Ee(r.value),1))])]))}},fl=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},tM={},nM={class:"page-card"};function iM(t,e){return Ae(),Re("section",nM,[...e[0]||(e[0]=[sl('<div class="section-title"><p class="eyebrow">Account</p><h2>密碼修改</h2></div><article class="panel"><h3>修改密碼</h3><div class="form-grid"><input type="password" placeholder="舊密碼"><input type="password" placeholder="新密碼"><input type="password" placeholder="確認新密碼"><button type="button">確認修改</button></div></article>',2)])])}const sM=fl(tM,[["render",iM]]),rM={},oM={class:"page-card"};function aM(t,e){return Ae(),Re("section",oM,[...e[0]||(e[0]=[L("div",{class:"section-title"},[L("p",{class:"eyebrow"},"Guide"),L("h2",null,"網站操作指引")],-1),L("article",{class:"panel"},[L("h3",null,"使用步驟"),L("ul",{class:"bullet-list"},[L("li",null,"選擇對應的定位任務頁面。"),L("li",null,"確認目前作業狀態與資料來源。"),L("li",null,"透過歷史資料查詢前次操作結果。")])],-1)])])}const lM=fl(rM,[["render",aM]]),cM={},uM={class:"page-card"};function fM(t,e){return Ae(),Re("section",uM,[...e[0]||(e[0]=[L("div",{class:"section-title"},[L("p",{class:"eyebrow"},"Technology"),L("h2",null,"定位技術介紹")],-1),L("article",{class:"panel"},[L("h3",null,"系統技術架構"),L("p",null,"本系統結合電腦視覺、深度估測與即時串流，讓終端定位作業可快速觀測與追溯。")],-1)])])}const dM=fl(cM,[["render",fM]]),hM={class:"page-card"},pM={key:0,class:"placeholder"},mM={key:1,class:"table table-spaced"},gM={key:2,class:"placeholder"},_M={key:3,class:"alert"},vM={__name:"ObjectQueryPage",setup(t){const e=$e([]),n=$e(""),i=$e(!0),s=$e(""),r=a=>a?new Date(a).toLocaleString("zh-TW"):"—",o=dt(()=>e.value.filter(a=>{var l;return(l=a.objectClass)==null?void 0:l.toLowerCase().includes(n.value.toLowerCase())}));return os(async()=>{try{e.value=(await Nt.get("/detections")).data}catch{s.value="無法讀取辨識資料。"}finally{i.value=!1}}),(a,l)=>(Ae(),Re("section",hM,[l[2]||(l[2]=L("div",{class:"section-title"},[L("p",{class:"eyebrow"},"History"),L("h2",null,"物件辨識紀錄")],-1)),gn(L("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"search",placeholder:"依物件名稱篩選"},null,512),[[Vn,n.value]]),i.value?(Ae(),Re("p",pM,"正在讀取資料…")):o.value.length?(Ae(),Re("table",mM,[l[1]||(l[1]=L("thead",null,[L("tr",null,[L("th",null,"時間"),L("th",null,"物件"),L("th",null,"深度"),L("th",null,"作業 ID")])],-1)),L("tbody",null,[(Ae(!0),Re(xt,null,qn(o.value,c=>{var u;return Ae(),Re("tr",{key:c._id},[L("td",null,Ee(r(c.timestamp)),1),L("td",null,Ee(c.objectClass||"未分類"),1),L("td",null,Ee(c.depth??"—"),1),L("td",null,Ee(((u=c.operationId)==null?void 0:u._id)||c.operationId),1)])}),128))])])):(Ae(),Re("p",gM,"沒有符合的辨識資料。")),s.value?(Ae(),Re("p",_M,Ee(s.value),1)):Vt("",!0)]))}},xM={class:"page-card"},yM={key:0,class:"placeholder"},SM={key:1,class:"table"},MM={key:2,class:"placeholder"},bM={key:3,class:"alert"},EM={__name:"TaskHistoryPage",setup(t){const e=$e([]),n=$e(!0),i=$e(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return os(async()=>{try{e.value=(await Nt.get("/operations")).data}catch{i.value="無法讀取作業紀錄。"}finally{n.value=!1}}),(r,o)=>(Ae(),Re("section",xM,[o[1]||(o[1]=L("div",{class:"section-title"},[L("p",{class:"eyebrow"},"History"),L("h2",null,"任務歷程")],-1)),n.value?(Ae(),Re("p",yM,"正在讀取資料…")):e.value.length?(Ae(),Re("table",SM,[o[0]||(o[0]=L("thead",null,[L("tr",null,[L("th",null,"開始時間"),L("th",null,"結束時間"),L("th",null,"使用者"),L("th",null,"狀態")])],-1)),L("tbody",null,[(Ae(!0),Re(xt,null,qn(e.value,a=>{var l,c;return Ae(),Re("tr",{key:a._id},[L("td",null,Ee(s(a.startTime)),1),L("td",null,Ee(s(a.endTime)),1),L("td",null,Ee(((l=a.userId)==null?void 0:l.name)||((c=a.userId)==null?void 0:c.email)||"未提供"),1),L("td",null,Ee(a.endTime?"已完成":"進行中"),1)])}),128))])])):(Ae(),Re("p",MM,"尚無任務資料。")),i.value?(Ae(),Re("p",bM,Ee(i.value),1)):Vt("",!0)]))}},TM={class:"page-card"},AM={key:0,class:"placeholder"},wM={key:1,class:"table"},RM={key:2,class:"placeholder"},CM={key:3,class:"alert"},PM={__name:"OperationLogPage",setup(t){const e=$e([]),n=$e(!0),i=$e(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return os(async()=>{try{e.value=(await Nt.get("/operations")).data}catch{i.value="無法讀取操作紀錄。"}finally{n.value=!1}}),(r,o)=>(Ae(),Re("section",TM,[o[1]||(o[1]=L("div",{class:"section-title"},[L("p",{class:"eyebrow"},"History"),L("h2",null,"操作紀錄")],-1)),n.value?(Ae(),Re("p",AM,"正在讀取資料…")):e.value.length?(Ae(),Re("table",wM,[o[0]||(o[0]=L("thead",null,[L("tr",null,[L("th",null,"作業 ID"),L("th",null,"開始時間"),L("th",null,"結束時間"),L("th",null,"說明")])],-1)),L("tbody",null,[(Ae(!0),Re(xt,null,qn(e.value,a=>(Ae(),Re("tr",{key:a._id},[L("td",null,Ee(a._id),1),L("td",null,Ee(s(a.startTime)),1),L("td",null,Ee(s(a.endTime)),1),L("td",null,Ee(a.description||"—"),1)]))),128))])])):(Ae(),Re("p",RM,"尚無操作紀錄。")),i.value?(Ae(),Re("p",CM,Ee(i.value),1)):Vt("",!0)]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="185",ar={ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},DM=0,Hd=1,LM=2,_a=1,IM=2,Zr=3,ns=0,Tn=1,ai=2,Pi=0,lr=1,kd=2,Vd=3,Gd=4,NM=5,_s=100,UM=101,OM=102,FM=103,BM=104,zM=200,HM=201,kM=202,VM=203,Fc=204,Bc=205,GM=206,WM=207,XM=208,qM=209,$M=210,YM=211,KM=212,ZM=213,JM=214,zc=0,Hc=1,kc=2,xr=3,Vc=4,Gc=5,Wc=6,Xc=7,Vm=0,jM=1,QM=2,fi=0,Gm=1,Wm=2,Xm=3,qm=4,$m=5,Ym=6,Km=7,Zm=300,Ps=301,yr=302,Ol=303,Fl=304,dl=306,qc=1e3,Ri=1001,$c=1002,Jt=1003,eb=1004,Bo=1005,ln=1006,Bl=1007,Ss=1008,Pn=1009,Jm=1010,jm=1011,go=1012,sf=1013,mi=1014,li=1015,Ui=1016,rf=1017,of=1018,_o=1020,Qm=35902,eg=35899,tg=1021,ng=1022,Gn=1023,Oi=1026,Ms=1027,ig=1028,af=1029,Ds=1030,lf=1031,cf=1033,va=33776,xa=33777,ya=33778,Sa=33779,Yc=35840,Kc=35841,Zc=35842,Jc=35843,jc=36196,Qc=37492,eu=37496,tu=37488,nu=37489,Ba=37490,iu=37491,su=37808,ru=37809,ou=37810,au=37811,lu=37812,cu=37813,uu=37814,fu=37815,du=37816,hu=37817,pu=37818,mu=37819,gu=37820,_u=37821,vu=36492,xu=36494,yu=36495,Su=36283,Mu=36284,za=36285,bu=36286,tb=3200,Eu=0,nb=1,ji="",Un="srgb",Ha="srgb-linear",ka="linear",vt="srgb",Hs=7680,Wd=519,ib=512,sb=513,rb=514,uf=515,ob=516,ab=517,ff=518,lb=519,Xd=35044,qd="300 es",ci=2e3,vo=2001;function cb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Va(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ub(){const t=Va("canvas");return t.style.display="block",t}const $d={};function Yd(...t){const e="THREE."+t.shift();console.log(e,...t)}function sg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ke(...t){t=sg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ht(...t){t=sg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function cr(...t){const e=t.join(" ");e in $d||($d[e]=!0,Ke(...t))}function fb(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const db={[zc]:Hc,[kc]:Wc,[Vc]:Xc,[xr]:Gc,[Hc]:zc,[Wc]:kc,[Xc]:Vc,[Gc]:xr};class as{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ma=Math.PI/180,Tu=180/Math.PI;function wo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function ct(t,e,n){return Math.max(e,Math.min(n,t))}function hb(t,e){return(t%e+e)%e}function zl(t,e,n){return(1-n)*t+n*e}function Hr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pb={DEG2RAD:Ma},Sf=class Sf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sf.prototype.isVector2=!0;let je=Sf;class is{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(f!==_||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+f*_;m<0&&(d=-d,p=-p,g=-g,_=-_,m=-m);let h=1-a;if(m<.9995){const S=Math.acos(m),b=Math.sin(S);h=Math.sin(h*S)/b,a=Math.sin(a*S)/b,l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+_*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+_*a;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mf=class Mf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this.z=ct(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this.z=ct(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mf.prototype.isVector3=!0;let Y=Mf;const Hl=new Y,Kd=new is,bf=class bf{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],h=s[6],S=s[1],b=s[4],y=s[7],A=s[2],T=s[5],D=s[8];return r[0]=o*_+a*S+l*A,r[3]=o*m+a*b+l*T,r[6]=o*h+a*y+l*D,r[1]=c*_+u*S+f*A,r[4]=c*m+u*b+f*T,r[7]=c*h+u*y+f*D,r[2]=d*_+p*S+g*A,r[5]=d*m+p*b+g*T,r[8]=d*h+p*y+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=n*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kl.makeScale(e,n)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kl.makeRotation(-e)),this}translate(e,n){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bf.prototype.isMatrix3=!0;let nt=bf;const kl=new nt,Zd=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jd=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mb(){const t={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ji?ka:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ha]:{primaries:e,whitePoint:i,transfer:ka,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const ft=mb();function Di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ur(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ks;class gb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ks===void 0&&(ks=Va("canvas")),ks.width=e.width,ks.height=e.height;const s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ks}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Va("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Di(n[i]/255)*255):n[i]=Di(n[i]);return{data:n,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _b=0;class df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vl(s[o].image)):r.push(Vl(s[o]))}else r=Vl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Vl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let vb=0;const Gl=new Y;class vn extends as{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Ri,s=Ri,r=ln,o=Ss,a=Gn,l=Pn,c=vn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=wo(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ke(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qc:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case $c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qc:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case $c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Zm;vn.DEFAULT_ANISOTROPY=1;const Ef=class Ef{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(c+1)/2,y=(p+1)/2,A=(h+1)/2,T=(u+d)/4,D=(f+_)/4,x=(g+m)/4;return b>y&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=D/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=x/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=D/r,s=x/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ct(this.x,e.x,n.x),this.y=ct(this.y,e.y,n.y),this.z=ct(this.z,e.z,n.z),this.w=ct(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ct(this.x,e,n),this.y=ct(this.y,e,n),this.z=ct(this.z,e,n),this.w=ct(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ef.prototype.isVector4=!0;let Dt=Ef;class xb extends as{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new vn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new df(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends xb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class rg extends vn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yb extends vn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xa=class Xa{constructor(e,n,i,s,r,o,a,l,c,u,f,d,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,p,g,_,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xa().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sb,e,Mb)}lookAt(e,n,i){const s=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Vi.crossVectors(i,wn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Vi.crossVectors(i,wn)),Vi.normalize(),zo.crossVectors(wn,Vi),s[0]=Vi.x,s[4]=zo.x,s[8]=wn.x,s[1]=Vi.y,s[5]=zo.y,s[9]=wn.y,s[2]=Vi.z,s[6]=zo.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],S=i[3],b=i[7],y=i[11],A=i[15],T=s[0],D=s[4],x=s[8],R=s[12],F=s[1],U=s[5],V=s[9],oe=s[13],ne=s[2],G=s[6],j=s[10],W=s[14],se=s[3],pe=s[7],Se=s[11],ve=s[15];return r[0]=o*T+a*F+l*ne+c*se,r[4]=o*D+a*U+l*G+c*pe,r[8]=o*x+a*V+l*j+c*Se,r[12]=o*R+a*oe+l*W+c*ve,r[1]=u*T+f*F+d*ne+p*se,r[5]=u*D+f*U+d*G+p*pe,r[9]=u*x+f*V+d*j+p*Se,r[13]=u*R+f*oe+d*W+p*ve,r[2]=g*T+_*F+m*ne+h*se,r[6]=g*D+_*U+m*G+h*pe,r[10]=g*x+_*V+m*j+h*Se,r[14]=g*R+_*oe+m*W+h*ve,r[3]=S*T+b*F+y*ne+A*se,r[7]=S*D+b*U+y*G+A*pe,r[11]=S*x+b*V+y*j+A*Se,r[15]=S*R+b*oe+y*W+A*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15],S=l*p-c*d,b=a*p-c*f,y=a*d-l*f,A=o*p-c*u,T=o*d-l*u,D=o*f-a*u;return n*(_*S-m*b+h*y)-i*(g*S-m*A+h*T)+s*(g*b-_*A+h*D)-r*(g*y-_*T+m*D)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],S=n*a-i*o,b=n*l-s*o,y=n*c-r*o,A=i*l-s*a,T=i*c-r*a,D=s*c-r*l,x=u*_-f*g,R=u*m-d*g,F=u*h-p*g,U=f*m-d*_,V=f*h-p*_,oe=d*h-p*m,ne=S*oe-b*V+y*U+A*F-T*R+D*x;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/ne;return e[0]=(a*oe-l*V+c*U)*G,e[1]=(s*V-i*oe-r*U)*G,e[2]=(_*D-m*T+h*A)*G,e[3]=(d*T-f*D-p*A)*G,e[4]=(l*F-o*oe-c*R)*G,e[5]=(n*oe-s*F+r*R)*G,e[6]=(m*y-g*D-h*b)*G,e[7]=(u*D-d*y+p*b)*G,e[8]=(o*V-a*F+c*x)*G,e[9]=(i*F-n*V-r*x)*G,e[10]=(g*T-_*y+h*S)*G,e[11]=(f*y-u*T-p*S)*G,e[12]=(a*R-o*U-l*x)*G,e[13]=(n*U-i*R+s*x)*G,e[14]=(_*b-g*A-m*S)*G,e[15]=(u*A-f*b+d*S)*G,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,g=r*f,_=o*u,m=o*f,h=a*f,S=l*c,b=l*u,y=l*f,A=i.x,T=i.y,D=i.z;return s[0]=(1-(_+h))*A,s[1]=(p+y)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(d+h))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+b)*D,s[9]=(m-S)*D,s[10]=(1-(d+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Vs.set(s[0],s[1],s[2]).length();const a=Vs.set(s[4],s[5],s[6]).length(),l=Vs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Bn.copy(this);const c=1/o,u=1/a,f=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,n.setFromRotationMatrix(Bn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=ci,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),p=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===ci)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===vo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ci,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),p=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===ci)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===vo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Xa.prototype.isMatrix4=!0;let Pt=Xa;const Vs=new Y,Bn=new Pt,Sb=new Y(0,0,0),Mb=new Y(1,1,1),Vi=new Y,zo=new Y,wn=new Y,jd=new Pt,Qd=new is;class ss{constructor(e=0,n=0,i=0,s=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class hf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bb=0;const eh=new Y,Gs=new is,xi=new Pt,Ho=new Y,kr=new Y,Eb=new Y,Tb=new is,th=new Y(1,0,0),nh=new Y(0,1,0),ih=new Y(0,0,1),sh={type:"added"},Ab={type:"removed"},Ws={type:"childadded",child:null},Wl={type:"childremoved",child:null};class $t extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new Y,n=new ss,i=new is,s=new Y(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new nt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,n){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ho.copy(e):Ho.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(kr,Ho,this.up):xi.lookAt(Ho,kr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(xi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sh),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ab),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sh),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new Y(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bs extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wb={type:"move"};class Xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new bs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ko={h:0,s:0,l:0};function ql(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ft.workingColorSpace){if(e=hb(e,1),n=ct(n,0,1),i=ct(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=ql(o,r,e+1/3),this.g=ql(o,r,e),this.b=ql(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,n=Un){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=og[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return ft.workingToColorSpace(sn.copy(this),e),Math.round(ct(sn.r*255,0,255))*65536+Math.round(ct(sn.g*255,0,255))*256+Math.round(ct(sn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.workingToColorSpace(sn.copy(this),n);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ft.workingColorSpace){return ft.workingToColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Un){ft.workingToColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,s=sn.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+n,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gi),e.getHSL(ko);const i=zl(Gi.h,ko.h,n),s=zl(Gi.s,ko.s,n),r=zl(Gi.l,ko.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new lt;lt.NAMES=og;class Rb extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zn=new Y,yi=new Y,$l=new Y,Si=new Y,Xs=new Y,qs=new Y,rh=new Y,Yl=new Y,Kl=new Y,Zl=new Y,Jl=new Dt,jl=new Dt,Ql=new Dt;class kn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),zn.subVectors(e,n),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){zn.subVectors(s,n),yi.subVectors(i,n),$l.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(yi),l=zn.dot($l),c=yi.dot(yi),u=yi.dot($l),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Jl.setScalar(0),jl.setScalar(0),Ql.setScalar(0),Jl.fromBufferAttribute(e,n),jl.fromBufferAttribute(e,i),Ql.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jl,r.x),o.addScaledVector(jl,r.y),o.addScaledVector(Ql,r.z),o}static isFrontFacing(e,n,i,s){return zn.subVectors(i,n),yi.subVectors(e,n),zn.cross(yi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),zn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Xs.subVectors(s,i),qs.subVectors(r,i),Yl.subVectors(e,i);const l=Xs.dot(Yl),c=qs.dot(Yl);if(l<=0&&c<=0)return n.copy(i);Kl.subVectors(e,s);const u=Xs.dot(Kl),f=qs.dot(Kl);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Xs,o);Zl.subVectors(e,r);const p=Xs.dot(Zl),g=qs.dot(Zl);if(g>=0&&p<=g)return n.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(qs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return rh.subVectors(r,s),a=(f-u)/(f-u+(p-g)),n.copy(s).addScaledVector(rh,a);const h=1/(m+_+d);return o=_*h,a=d*h,n.copy(i).addScaledVector(Xs,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ro{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Go.subVectors(this.max,Vr),$s.subVectors(e.a,Vr),Ys.subVectors(e.b,Vr),Ks.subVectors(e.c,Vr),Wi.subVectors(Ys,$s),Xi.subVectors(Ks,Ys),ds.subVectors($s,Ks);let n=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ds.z,ds.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ds.z,0,-ds.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ds.y,ds.x,0];return!ec(n,$s,Ys,Ks,Go)||(n=[1,0,0,0,1,0,0,0,1],!ec(n,$s,Ys,Ks,Go))?!1:(Wo.crossVectors(Wi,Xi),n=[Wo.x,Wo.y,Wo.z],ec(n,$s,Ys,Ks,Go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Hn=new Y,Vo=new Ro,$s=new Y,Ys=new Y,Ks=new Y,Wi=new Y,Xi=new Y,ds=new Y,Vr=new Y,Go=new Y,Wo=new Y,hs=new Y;function ec(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){hs.fromArray(t,r);const a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=n.dot(hs),u=i.dot(hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zt=new Y,Xo=new je;let Cb=0;class hi extends as{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xd,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xo.fromBufferAttribute(this,n),Xo.applyMatrix3(e),this.setXY(n,Xo.x,Xo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Hr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hr(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hr(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hr(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ag extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class lg extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gt extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Pb=new Ro,Gr=new Y,tc=new Y;class hl{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Pb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const n=Gr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(tc)),this.expandByPoint(Gr.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Db=0;const Nn=new Pt,nc=new $t,Zs=new Y,Rn=new Ro,Wr=new Ro,qt=new Y;class xn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cb(e)?lg:ag)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Rn.min,Wr.min),Rn.expandByPoint(qt),qt.addVectors(Rn.max,Wr.max),Rn.expandByPoint(qt)):(Rn.expandByPoint(Wr.min),Rn.expandByPoint(Wr.max))}Rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),qt.add(Zs)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new hi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new Y,l[x]=new Y;const c=new Y,u=new Y,f=new Y,d=new je,p=new je,g=new je,_=new Y,m=new Y;function h(x,R,F){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,F),d.fromBufferAttribute(r,x),p.fromBufferAttribute(r,R),g.fromBufferAttribute(r,F),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[x].add(_),a[R].add(_),a[F].add(_),l[x].add(m),l[R].add(m),l[F].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,R=S.length;x<R;++x){const F=S[x],U=F.start,V=F.count;for(let oe=U,ne=U+V;oe<ne;oe+=3)h(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const b=new Y,y=new Y,A=new Y,T=new Y;function D(x){A.fromBufferAttribute(s,x),T.copy(A);const R=a[x];b.copy(R),b.sub(A.multiplyScalar(A.dot(R))).normalize(),y.crossVectors(T,R);const U=y.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,U)}for(let x=0,R=S.length;x<R;++x){const F=S[x],U=F.start,V=F.count;for(let oe=U,ne=U+V;oe<ne;oe+=3)D(e.getX(oe+0)),D(e.getX(oe+1)),D(e.getX(oe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new hi(d,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Lb=0;class wr extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=lr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Bc,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ke(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new Y,ic=new Y,qo=new Y,qi=new Y,sc=new Y,$o=new Y,rc=new Y;class pl{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){ic.copy(e).add(n).multiplyScalar(.5),qo.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(ic);const r=e.distanceTo(n)*.5,o=-this.direction.dot(qo),a=qi.dot(this.direction),l=-qi.dot(qo),c=qi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ic).addScaledVector(qo,d),p}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,s,r){sc.subVectors(n,e),$o.subVectors(i,e),rc.crossVectors(sc,$o);let o=this.direction.dot(rc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot($o.crossVectors(qi,$o));if(l<0)return null;const c=a*this.direction.dot(sc.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(rc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pf extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const oh=new Pt,ps=new pl,Yo=new hl,ah=new Y,Ko=new Y,Zo=new Y,Jo=new Y,oc=new Y,jo=new Y,lh=new Y,Qo=new Y;class rn extends $t{constructor(e=new xn,n=new pf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(oc.fromBufferAttribute(f,e),o?jo.addScaledVector(oc,u):jo.addScaledVector(oc.sub(n),u))}n.add(jo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(Yo.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Yo,ah)===null||ps.origin.distanceToSquared(ah)>(e.far-e.near)**2))&&(oh.copy(r).invert(),ps.copy(e.ray).applyMatrix4(oh),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ps)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,A=b;y<A;y+=3){const T=a.getX(y),D=a.getX(y+1),x=a.getX(y+2);s=ea(this,h,e,i,c,u,f,T,D,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const S=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=ea(this,o,e,i,c,u,f,S,b,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,A=b;y<A;y+=3){const T=y,D=y+1,x=y+2;s=ea(this,h,e,i,c,u,f,T,D,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const S=m,b=m+1,y=m+2;s=ea(this,o,e,i,c,u,f,S,b,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Ib(t,e,n,i,s,r,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ns,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qo);return c<n.near||c>n.far?null:{distance:c,point:Qo.clone(),object:t}}function ea(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Ko),t.getVertexPosition(l,Zo),t.getVertexPosition(c,Jo);const u=Ib(t,e,n,i,Ko,Zo,Jo,lh);if(u){const f=new Y;kn.getBarycoord(lh,Ko,Zo,Jo,f),s&&(u.uv=kn.getInterpolatedAttribute(s,a,l,c,f,new je)),r&&(u.uv1=kn.getInterpolatedAttribute(r,a,l,c,f,new je)),o&&(u.normal=kn.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};kn.getNormal(Ko,Zo,Jo,d.normal),u.face=d,u.barycoord=f}return u}class Nb extends vn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Jt,u=Jt,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ac=new Y,Ub=new Y,Ob=new nt;class Zi{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=ac.subVectors(i,n).cross(Ub.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ob.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new hl,Fb=new je(.5,.5),ta=new Y;class mf{constructor(e=new Zi,n=new Zi,i=new Zi,s=new Zi,r=new Zi,o=new Zi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],h=r[11],S=r[12],b=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,p-u,h-g,A-S).normalize(),s[1].setComponents(c+o,p+u,h+g,A+S).normalize(),s[2].setComponents(c+a,p+f,h+_,A+b).normalize(),s[3].setComponents(c-a,p-f,h-_,A-b).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,h-m,A-y).normalize();else if(s[4].setComponents(c-l,p-d,h-m,A-y).normalize(),n===ci)s[5].setComponents(c+l,p+d,h+m,A+y).normalize();else if(n===vo)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const n=Fb.distanceTo(e.center);return ms.radius=.7071067811865476+n,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ta.x=s.normal.x>0?e.max.x:e.min.x,ta.y=s.normal.y>0?e.max.y:e.min.y,ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gf extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ga=new Y,Wa=new Y,ch=new Pt,Xr=new pl,na=new hl,lc=new Y,uh=new Y;class cg extends $t{constructor(e=new xn,n=new gf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Ga.fromBufferAttribute(n,s-1),Wa.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new Gt(i,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;ch.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(ch);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const h=u.getX(_),S=u.getX(_+1),b=ia(this,e,Xr,l,h,S,_);b&&n.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),h=ia(this,e,Xr,l,_,m,g-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const h=ia(this,e,Xr,l,_,_+1,_);h&&n.push(h)}if(this.isLineLoop){const _=ia(this,e,Xr,l,g-1,p,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ia(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Ga.fromBufferAttribute(a,s),Wa.fromBufferAttribute(a,r),n.distanceSqToSegment(Ga,Wa,lc,uh)>i)return;lc.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(lc);if(!(c<e.near||c>e.far))return{distance:c,point:uh.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const fh=new Y,dh=new Y;class Bb extends cg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)fh.fromBufferAttribute(n,s),dh.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fh.distanceTo(dh);e.setAttribute("lineDistance",new Gt(i,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ug extends vn{constructor(e=[],n=Ps,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sr extends vn{constructor(e,n,i=mi,s,r,o,a=Jt,l=Jt,c,u=Oi,f=1){if(u!==Oi&&u!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new df(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zb extends Sr{constructor(e,n=mi,i=Ps,s,r,o=Jt,a=Jt,l,c=Oi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fg extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ls extends xn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function g(_,m,h,S,b,y,A,T,D,x,R){const F=y/D,U=A/x,V=y/2,oe=A/2,ne=T/2,G=D+1,j=x+1;let W=0,se=0;const pe=new Y;for(let Se=0;Se<j;Se++){const ve=Se*U-oe;for(let we=0;we<G;we++){const Je=we*F-V;pe[_]=Je*S,pe[m]=ve*b,pe[h]=ne,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[h]=T>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(we/D),f.push(1-Se/x),W+=1}}for(let Se=0;Se<x;Se++)for(let ve=0;ve<D;ve++){const we=d+ve+G*Se,Je=d+ve+G*(Se+1),rt=d+(ve+1)+G*(Se+1),Qe=d+(ve+1)+G*Se;l.push(we,Je,Qe),l.push(Je,rt,Qe),se+=6}a.addGroup(p,se,R),p+=se,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xo extends xn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],p=[];let g=0;const _=[],m=i/2;let h=0;S(),o===!1&&(e>0&&b(!0),n>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function S(){const y=new Y,A=new Y;let T=0;const D=(n-e)/i;for(let x=0;x<=r;x++){const R=[],F=x/r,U=F*(n-e)+e;for(let V=0;V<=s;V++){const oe=V/s,ne=oe*l+a,G=Math.sin(ne),j=Math.cos(ne);A.x=U*G,A.y=-F*i+m,A.z=U*j,f.push(A.x,A.y,A.z),y.set(G,D,j).normalize(),d.push(y.x,y.y,y.z),p.push(oe,1-F),R.push(g++)}_.push(R)}for(let x=0;x<s;x++)for(let R=0;R<r;R++){const F=_[R][x],U=_[R+1][x],V=_[R+1][x+1],oe=_[R][x+1];(e>0||R!==0)&&(u.push(F,U,oe),T+=3),(n>0||R!==r-1)&&(u.push(U,V,oe),T+=3)}c.addGroup(h,T,0),h+=T}function b(y){const A=g,T=new je,D=new Y;let x=0;const R=y===!0?e:n,F=y===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,m*F,0),d.push(0,F,0),p.push(.5,.5),g++;const U=g;for(let V=0;V<=s;V++){const ne=V/s*l+a,G=Math.cos(ne),j=Math.sin(ne);D.x=R*j,D.y=m*F,D.z=R*G,f.push(D.x,D.y,D.z),d.push(0,F,0),T.x=G*.5+.5,T.y=j*.5*F+.5,p.push(T.x,T.y),g++}for(let V=0;V<s;V++){const oe=A+V,ne=U+V;y===!0?u.push(ne,ne+1,oe):u.push(ne+1,ne,oe),x+=3}c.addGroup(h,x,y===!0?1:2),h+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _f extends xo{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _f(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Co extends xn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const S=h*d-o;for(let b=0;b<c;b++){const y=b*f-r;g.push(y,-S,0),_.push(0,0,1),m.push(b/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const b=S+c*h,y=S+c*(h+1),A=S+1+c*(h+1),T=S+1+c*h;p.push(b,y,T),p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}class vf extends xn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new Y,d=new Y,p=[],g=[],_=[],m=[];for(let h=0;h<=i;h++){const S=[],b=h/i,y=o+b*a,A=e*Math.cos(y),T=Math.sqrt(e*e-A*A);let D=0;h===0&&o===0?D=.5/n:h===i&&l===Math.PI&&(D=-.5/n);for(let x=0;x<=n;x++){const R=x/n,F=s+R*r;f.x=-T*Math.cos(F),f.y=A,f.z=T*Math.sin(F),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(R+D,1-b),S.push(c++)}u.push(S)}for(let h=0;h<i;h++)for(let S=0;S<n;S++){const b=u[h][S+1],y=u[h][S],A=u[h+1][S],T=u[h+1][S+1];(h!==0||o>0)&&p.push(b,y,T),(h!==i-1||l<Math.PI)&&p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Mr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(hh(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(hh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=Mr(t[n]);for(const s in i)e[s]=i[s]}return e}function hh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Hb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const kb={clone:Mr,merge:hn};var Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=Gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=Hb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new lt().setHex(s.value);break;case"v2":this.uniforms[i].value=new je().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Wb extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sa extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xb extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qb extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hg extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class $b extends hg{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const cc=new Pt,ph=new Y,mh=new Y;class Yb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ph.setFromMatrixPosition(e.matrixWorld),n.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mh),n.updateMatrixWorld(),cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===vo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ra=new Y,oa=new is,ei=new Y;class pg extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ra,oa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,oa,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ra,oa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,oa,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new Y,gh=new je,_h=new je;class On extends pg{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tu*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,gh,_h),n.subVectors(_h,gh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ma*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class xf extends pg{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Kb extends Yb{constructor(){super(new xf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zb extends hg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Kb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Js=-90,js=1;class Jb extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new On(Js,js,e,n);s.layers=this.layers,this.add(s);const r=new On(Js,js,e,n);r.layers=this.layers,this.add(r);const o=new On(Js,js,e,n);o.layers=this.layers,this.add(o);const a=new On(Js,js,e,n);a.layers=this.layers,this.add(a);const l=new On(Js,js,e,n);l.layers=this.layers,this.add(l);const c=new On(Js,js,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jb extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vh=new Pt;class Qb{constructor(e,n,i=0,s=1/0){this.ray=new pl(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new hf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ht("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return vh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(e,n=!0,i=[]){return Au(e,this,i,n),i.sort(xh),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Au(e[s],this,i,n);return i.sort(xh),i}}function xh(t,e){return t.distance-e.distance}function Au(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)Au(r[o],e,n,!0)}}class yh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Tf=class Tf{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Tf.prototype.isMatrix2=!0;let Sh=Tf;class eE extends Bb{constructor(e=10,n=10,i=4473924,s=8947848){i=new lt(i),s=new lt(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=n;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?i:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new xn;u.setAttribute("position",new Gt(l,3)),u.setAttribute("color",new Gt(c,3));const f=new gf({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class tE extends as{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ke("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Mh(t,e,n,i){const s=nE(i);switch(n){case tg:return t*e;case ig:return t*e/s.components*s.byteLength;case af:return t*e/s.components*s.byteLength;case Ds:return t*e*2/s.components*s.byteLength;case lf:return t*e*2/s.components*s.byteLength;case ng:return t*e*3/s.components*s.byteLength;case Gn:return t*e*4/s.components*s.byteLength;case cf:return t*e*4/s.components*s.byteLength;case va:case xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ya:case Sa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kc:case Jc:return Math.max(t,16)*Math.max(e,8)/4;case Yc:case Zc:return Math.max(t,8)*Math.max(e,8)/2;case jc:case Qc:case tu:case nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case eu:case Ba:case iu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ou:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case au:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case cu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case fu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case du:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case pu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _u:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vu:case xu:case yu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Su:case Mu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case za:case bu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nE(t){switch(t){case Pn:case Jm:return{byteLength:1,components:1};case go:case jm:case Ui:return{byteLength:2,components:1};case rf:case of:return{byteLength:2,components:4};case mi:case sf:case li:return{byteLength:4,components:1};case Qm:case eg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function iE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rE=`#ifdef USE_ALPHAHASH
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
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uE=`#ifdef USE_AOMAP
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
#endif`,fE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dE=`#ifdef USE_BATCHING
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
#endif`,hE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_E=`#ifdef USE_IRIDESCENCE
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
#endif`,vE=`#ifdef USE_BUMPMAP
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,EE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wE=`#define PI 3.141592653589793
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
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CE=`vec3 transformedNormal = objectNormal;
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
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NE="gl_FragColor = linearToOutputTexel( gl_FragColor );",UE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XE=`#ifdef USE_GRADIENTMAP
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
}`,qE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ZE=`#ifdef USE_ENVMAP
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
#endif`,JE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tT=`PhysicalMaterial material;
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
#endif`,nT=`uniform sampler2D dfgLUT;
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
}`,iT=`
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
#endif`,sT=`#if defined( RE_IndirectDiffuse )
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
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,aT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pT=`#if defined( USE_POINTS_UV )
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
#endif`,mT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_T=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yT=`#ifdef USE_MORPHTARGETS
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
#endif`,ST=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wT=`#ifdef USE_NORMALMAP
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
#endif`,RT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GT=`float getShadowMask() {
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
}`,WT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
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
#endif`,qT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jT=`#ifdef USE_TRANSMISSION
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
#endif`,QT=`#ifdef USE_TRANSMISSION
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rA=`uniform sampler2D t2D;
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`#include <common>
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
}`,fA=`#if DEPTH_PACKING == 3200
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
}`,dA=`#define DISTANCE
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
}`,hA=`#define DISTANCE
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
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`uniform float scale;
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
}`,_A=`uniform vec3 diffuse;
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
}`,vA=`#include <common>
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
}`,xA=`uniform vec3 diffuse;
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
}`,yA=`#define LAMBERT
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
}`,SA=`#define LAMBERT
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
}`,MA=`#define MATCAP
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
}`,bA=`#define MATCAP
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
}`,EA=`#define NORMAL
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
}`,TA=`#define NORMAL
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
}`,AA=`#define PHONG
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
}`,wA=`#define PHONG
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
}`,RA=`#define STANDARD
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
}`,CA=`#define STANDARD
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
}`,PA=`#define TOON
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
}`,DA=`#define TOON
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
}`,LA=`uniform float size;
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
}`,IA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,UA=`uniform vec3 color;
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
}`,OA=`uniform float rotation;
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
}`,FA=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:sE,alphahash_pars_fragment:rE,alphamap_fragment:oE,alphamap_pars_fragment:aE,alphatest_fragment:lE,alphatest_pars_fragment:cE,aomap_fragment:uE,aomap_pars_fragment:fE,batching_pars_vertex:dE,batching_vertex:hE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:_E,bumpmap_pars_fragment:vE,clipping_planes_fragment:xE,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:SE,clipping_planes_vertex:ME,color_fragment:bE,color_pars_fragment:EE,color_pars_vertex:TE,color_vertex:AE,common:wE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:CE,displacementmap_pars_vertex:PE,displacementmap_vertex:DE,emissivemap_fragment:LE,emissivemap_pars_fragment:IE,colorspace_fragment:NE,colorspace_pars_fragment:UE,envmap_fragment:OE,envmap_common_pars_fragment:FE,envmap_pars_fragment:BE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:ZE,envmap_vertex:HE,fog_vertex:kE,fog_pars_vertex:VE,fog_fragment:GE,fog_pars_fragment:WE,gradientmap_pars_fragment:XE,lightmap_pars_fragment:qE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:YE,lights_pars_begin:KE,lights_toon_fragment:JE,lights_toon_pars_fragment:jE,lights_phong_fragment:QE,lights_phong_pars_fragment:eT,lights_physical_fragment:tT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:sT,lights_fragment_end:rT,lightprobes_pars_fragment:oT,logdepthbuf_fragment:aT,logdepthbuf_pars_fragment:lT,logdepthbuf_pars_vertex:cT,logdepthbuf_vertex:uT,map_fragment:fT,map_pars_fragment:dT,map_particle_fragment:hT,map_particle_pars_fragment:pT,metalnessmap_fragment:mT,metalnessmap_pars_fragment:gT,morphinstance_vertex:_T,morphcolor_vertex:vT,morphnormal_vertex:xT,morphtarget_pars_vertex:yT,morphtarget_vertex:ST,normal_fragment_begin:MT,normal_fragment_maps:bT,normal_pars_fragment:ET,normal_pars_vertex:TT,normal_vertex:AT,normalmap_pars_fragment:wT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:CT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:DT,opaque_fragment:LT,packing:IT,premultiplied_alpha_fragment:NT,project_vertex:UT,dithering_fragment:OT,dithering_pars_fragment:FT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:HT,shadowmap_pars_vertex:kT,shadowmap_vertex:VT,shadowmask_pars_fragment:GT,skinbase_vertex:WT,skinning_pars_vertex:XT,skinning_vertex:qT,skinnormal_vertex:$T,specularmap_fragment:YT,specularmap_pars_fragment:KT,tonemapping_fragment:ZT,tonemapping_pars_fragment:JT,transmission_fragment:jT,transmission_pars_fragment:QT,uv_pars_fragment:eA,uv_pars_vertex:tA,uv_vertex:nA,worldpos_vertex:iA,background_vert:sA,background_frag:rA,backgroundCube_vert:oA,backgroundCube_frag:aA,cube_vert:lA,cube_frag:cA,depth_vert:uA,depth_frag:fA,distance_vert:dA,distance_frag:hA,equirect_vert:pA,equirect_frag:mA,linedashed_vert:gA,linedashed_frag:_A,meshbasic_vert:vA,meshbasic_frag:xA,meshlambert_vert:yA,meshlambert_frag:SA,meshmatcap_vert:MA,meshmatcap_frag:bA,meshnormal_vert:EA,meshnormal_frag:TA,meshphong_vert:AA,meshphong_frag:wA,meshphysical_vert:RA,meshphysical_frag:CA,meshtoon_vert:PA,meshtoon_frag:DA,points_vert:LA,points_frag:IA,shadow_vert:NA,shadow_frag:UA,sprite_vert:OA,sprite_frag:FA},Ue={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ri={basic:{uniforms:hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:hn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:hn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new lt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:hn([Ue.points,Ue.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:hn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:hn([Ue.common,Ue.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:hn([Ue.sprite,Ue.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:hn([Ue.common,Ue.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:hn([Ue.lights,Ue.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ri.physical={uniforms:hn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const aa={r:0,b:0,g:0},BA=new Pt,gg=new nt;gg.set(-1,0,0,0,1,0,0,0,1);function zA(t,e,n,i,s,r){const o=new lt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function p(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const y=S.backgroundBlurriness>0;b=e.get(b,y)}return b}function g(S){let b=!1;const y=p(S);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(S,b){const y=p(b);y&&(y.isCubeTexture||y.mapping===dl)?(c===void 0&&(c=new rn(new Ls(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Mr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gg),c.material.toneMapped=ft.getTransfer(y.colorSpace)!==vt,(u!==y||f!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new rn(new Co(2,2),new gi({name:"BackgroundMaterial",uniforms:Mr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ft.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,b){S.getRGB(aa,dg(t)),n.buffers.color.setClear(aa.r,aa.g,aa.b,b,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:_,dispose:h}}function HA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(U,V,oe,ne,G){let j=!1;const W=f(U,ne,oe,V);r!==W&&(r=W,c(r.object)),j=p(U,ne,oe,G),j&&g(U,ne,oe,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(U,V,oe,ne),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function u(U){return t.deleteVertexArray(U)}function f(U,V,oe,ne){const G=ne.wireframe===!0;let j=i[V.id];j===void 0&&(j={},i[V.id]=j);const W=U.isInstancedMesh===!0?U.id:0;let se=j[W];se===void 0&&(se={},j[W]=se);let pe=se[oe.id];pe===void 0&&(pe={},se[oe.id]=pe);let Se=pe[G];return Se===void 0&&(Se=d(l()),pe[G]=Se),Se}function d(U){const V=[],oe=[],ne=[];for(let G=0;G<n;G++)V[G]=0,oe[G]=0,ne[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:oe,attributeDivisors:ne,object:U,attributes:{},index:null}}function p(U,V,oe,ne){const G=r.attributes,j=V.attributes;let W=0;const se=oe.getAttributes();for(const pe in se)if(se[pe].location>=0){const ve=G[pe];let we=j[pe];if(we===void 0&&(pe==="instanceMatrix"&&U.instanceMatrix&&(we=U.instanceMatrix),pe==="instanceColor"&&U.instanceColor&&(we=U.instanceColor)),ve===void 0||ve.attribute!==we||we&&ve.data!==we.data)return!0;W++}return r.attributesNum!==W||r.index!==ne}function g(U,V,oe,ne){const G={},j=V.attributes;let W=0;const se=oe.getAttributes();for(const pe in se)if(se[pe].location>=0){let ve=j[pe];ve===void 0&&(pe==="instanceMatrix"&&U.instanceMatrix&&(ve=U.instanceMatrix),pe==="instanceColor"&&U.instanceColor&&(ve=U.instanceColor));const we={};we.attribute=ve,ve&&ve.data&&(we.data=ve.data),G[pe]=we,W++}r.attributes=G,r.attributesNum=W,r.index=ne}function _(){const U=r.newAttributes;for(let V=0,oe=U.length;V<oe;V++)U[V]=0}function m(U){h(U,0)}function h(U,V){const oe=r.newAttributes,ne=r.enabledAttributes,G=r.attributeDivisors;oe[U]=1,ne[U]===0&&(t.enableVertexAttribArray(U),ne[U]=1),G[U]!==V&&(t.vertexAttribDivisor(U,V),G[U]=V)}function S(){const U=r.newAttributes,V=r.enabledAttributes;for(let oe=0,ne=V.length;oe<ne;oe++)V[oe]!==U[oe]&&(t.disableVertexAttribArray(oe),V[oe]=0)}function b(U,V,oe,ne,G,j,W){W===!0?t.vertexAttribIPointer(U,V,oe,G,j):t.vertexAttribPointer(U,V,oe,ne,G,j)}function y(U,V,oe,ne){_();const G=ne.attributes,j=oe.getAttributes(),W=V.defaultAttributeValues;for(const se in j){const pe=j[se];if(pe.location>=0){let Se=G[se];if(Se===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor)),Se!==void 0){const ve=Se.normalized,we=Se.itemSize,Je=e.get(Se);if(Je===void 0)continue;const rt=Je.buffer,Qe=Je.type,K=Je.bytesPerElement,O=Qe===t.INT||Qe===t.UNSIGNED_INT||Se.gpuType===sf;if(Se.isInterleavedBufferAttribute){const Z=Se.data,ue=Z.stride,me=Se.offset;if(Z.isInstancedInterleavedBuffer){for(let Me=0;Me<pe.locationSize;Me++)h(pe.location+Me,Z.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Me=0;Me<pe.locationSize;Me++)m(pe.location+Me);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let Me=0;Me<pe.locationSize;Me++)b(pe.location+Me,we/pe.locationSize,Qe,ve,ue*K,(me+we/pe.locationSize*Me)*K,O)}else{if(Se.isInstancedBufferAttribute){for(let Z=0;Z<pe.locationSize;Z++)h(pe.location+Z,Se.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Z=0;Z<pe.locationSize;Z++)m(pe.location+Z);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let Z=0;Z<pe.locationSize;Z++)b(pe.location+Z,we/pe.locationSize,Qe,ve,we*K,we/pe.locationSize*Z*K,O)}}else if(W!==void 0){const ve=W[se];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(pe.location,ve);break;case 3:t.vertexAttrib3fv(pe.location,ve);break;case 4:t.vertexAttrib4fv(pe.location,ve);break;default:t.vertexAttrib1fv(pe.location,ve)}}}}S()}function A(){R();for(const U in i){const V=i[U];for(const oe in V){const ne=V[oe];for(const G in ne){const j=ne[G];for(const W in j)u(j[W].object),delete j[W];delete ne[G]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const V=i[U.id];for(const oe in V){const ne=V[oe];for(const G in ne){const j=ne[G];for(const W in j)u(j[W].object),delete j[W];delete ne[G]}}delete i[U.id]}function D(U){for(const V in i){const oe=i[V];for(const ne in oe){const G=oe[ne];if(G[U.id]===void 0)continue;const j=G[U.id];for(const W in j)u(j[W].object),delete j[W];delete G[U.id]}}}function x(U){for(const V in i){const oe=i[V],ne=U.isInstancedMesh===!0?U.id:0,G=oe[ne];if(G!==void 0){for(const j in G){const W=G[j];for(const se in W)u(W[se].object),delete W[se];delete G[j]}delete oe[ne],Object.keys(oe).length===0&&delete i[V]}}}function R(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function kA(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function VA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Gn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const x=D===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Pn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==li&&!x)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,maxSamples:A,samples:T}}function GA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Zi,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,b=S*4;let y=h.clippingState||null;l.value=y,y=u(g,d,b,p);for(let A=0;A!==b;++A)y[A]=n[A];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,y=p;b!==_;++b,y+=4)o.copy(f[b]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Qi=4,bh=[.125,.215,.35,.446,.526,.582],vs=20,WA=256,qr=new xf,Eh=new lt;let uc=null,fc=0,dc=0,hc=!1;const XA=new Y;class Th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=XA}=r;uc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,fc,dc),this._renderer.xr.enabled=hc,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ui,format:Gn,colorSpace:Ha,depthBuffer:!1},s=Ah(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qA(r)),this._blurMaterial=YA(r,e,n),this._ggxMaterial=$A(r,e,n)}return s}_compileMaterial(e){const n=new rn(new xn,e);this._renderer.compile(n,qr)}_sceneToCubeUV(e,n,i,s,r){const l=new On(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Eh),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new Ls,new pf({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let h=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,h=!0):(m.color.copy(Eh),h=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const A=this._cubeSize;Qs(s,y*A,b>2?A:0,A,A),f.setRenderTarget(s),h&&f.render(_,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=S}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Ps||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Qs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Qi?i-g+Qi:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Qs(r,m,h,3*_,2*_),s.setRenderTarget(r),s.render(a,qr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Qs(e,m,h,3*_,2*_),s.setRenderTarget(e),s.render(a,qr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):vs;m>vs&&Ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const h=[];let S=0;for(let D=0;D<vs;++D){const x=D/_,R=Math.exp(-x*x/2);h.push(R),D===0?S+=R:D<m&&(S+=2*R)}for(let D=0;D<h.length;D++)h[D]=h[D]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const y=this._sizeLods[s],A=3*y*(s>b-Qi?s-b+Qi:0),T=4*(this._cubeSize-y);Qs(n,A,T,3*y,2*y),l.setRenderTarget(n),l.render(f,qr)}}function qA(t){const e=[],n=[],i=[];let s=t;const r=t-Qi+1+bh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-Qi?l=bh[o-t+Qi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,S=new Float32Array(_*g*p),b=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let T=0;T<p;T++){const D=T%3*2/3-1,x=T>2?0:-1,R=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];S.set(R,_*g*T),b.set(d,m*g*T);const F=[T,T,T,T,T,T];y.set(F,h*g*T)}const A=new xn;A.setAttribute("position",new hi(S,_)),A.setAttribute("uv",new hi(b,m)),A.setAttribute("faceIndex",new hi(y,h)),i.push(new rn(A,null)),s>Qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ah(t,e,n){const i=new di(t,e,n);return i.texture.mapping=dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function $A(t,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function YA(t,e,n){const i=new Float32Array(vs),s=new Y(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function wh(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Rh(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}class _g extends di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ug(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ls(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Pi});r.uniforms.tEquirect.value=n;const o=new rn(s,r),a=n.minFilter;return n.minFilter===Ss&&(n.minFilter=ln),new Jb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function KA(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Ol||p===Fl)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new _g(g.height);return _.fromEquirectangularTexture(t,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,g=p===Ol||p===Fl,_=p===Ps||p===yr;if(g||_){let m=n.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new Th(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new Th(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===Ol?d.mapping=Ps:p===Fl&&(d.mapping=yr),d}function l(d){let p=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function ZA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&cr("WebGLRenderer: "+i+" extension not supported."),s}}}function JA(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(g===void 0)return;if(p!==null){const S=p.array;_=p.version;for(let b=0,y=S.length;b<y;b+=3){const A=S[b+0],T=S[b+1],D=S[b+2];d.push(A,T,T,D,D,A)}}else{const S=g.array;_=g.version;for(let b=0,y=S.length/3-1;b<y;b+=3){const A=b+0,T=b+1,D=b+2;d.push(A,T,T,D,D,A)}}const m=new(g.count>=65535?lg:ag)(d,1);m.version=_;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function jA(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*o),n.update(d,i,1)}function c(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,r,f*o,p),n.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let _=0;for(let m=0;m<p;m++)_+=d[m];n.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function QA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ew(t,e,n){const i=new WeakMap,s=new Dt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let F=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",F)};var p=F;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const D=new Float32Array(A*T*4*f),x=new rg(D,A,T,f);x.type=li,x.needsUpdate=!0;const R=y*4;for(let U=0;U<f;U++){const V=h[U],oe=S[U],ne=b[U],G=A*T*4*U;for(let j=0;j<V.count;j++){const W=j*R;g===!0&&(s.fromBufferAttribute(V,j),D[G+W+0]=s.x,D[G+W+1]=s.y,D[G+W+2]=s.z,D[G+W+3]=0),_===!0&&(s.fromBufferAttribute(oe,j),D[G+W+4]=s.x,D[G+W+5]=s.y,D[G+W+6]=s.z,D[G+W+7]=0),m===!0&&(s.fromBufferAttribute(ne,j),D[G+W+8]=s.x,D[G+W+9]=s.y,D[G+W+10]=s.z,D[G+W+11]=ne.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new je(A,T)},i.set(a,d),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function tw(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const nw={[Gm]:"LINEAR_TONE_MAPPING",[Wm]:"REINHARD_TONE_MAPPING",[Xm]:"CINEON_TONE_MAPPING",[qm]:"ACES_FILMIC_TONE_MAPPING",[Ym]:"AGX_TONE_MAPPING",[Km]:"NEUTRAL_TONE_MAPPING",[$m]:"CUSTOM_TONE_MAPPING"};function iw(t,e,n,i,s,r){const o=new di(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Sr(e,n):void 0}),a=new di(e,n,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new xn;l.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const c=new Wb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new rn(l,c),f=new xf(-1,1,1,-1,0,1);let d=null,p=null,g=!1,_,m=null,h=[],S=!1;this.setSize=function(b,y){o.setSize(b,y),a.setSize(b,y);for(let A=0;A<h.length;A++){const T=h[A];T.setSize&&T.setSize(b,y)}},this.setEffects=function(b){h=b,S=h.length>0&&h[0].isRenderPass===!0;const y=o.width,A=o.height;for(let T=0;T<h.length;T++){const D=h[T];D.setSize&&D.setSize(y,A)}},this.begin=function(b,y){if(g||b.toneMapping===fi&&h.length===0)return!1;if(m=y,y!==null){const A=y.width,T=y.height;(o.width!==A||o.height!==T)&&this.setSize(A,T)}return S===!1&&b.setRenderTarget(o),_=b.toneMapping,b.toneMapping=fi,!0},this.hasRenderPass=function(){return S},this.end=function(b,y){b.toneMapping=_,g=!0;let A=o,T=a;for(let D=0;D<h.length;D++){const x=h[D];if(x.enabled!==!1&&(x.render(b,T,A,y),x.needsSwap!==!1)){const R=A;A=T,T=R}}if(d!==b.outputColorSpace||p!==b.toneMapping){d=b.outputColorSpace,p=b.toneMapping,c.defines={},ft.getTransfer(d)===vt&&(c.defines.SRGB_TRANSFER="");const D=nw[p];D&&(c.defines[D]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,b.setRenderTarget(m),b.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const vg=new vn,wu=new Sr(1,1),xg=new rg,yg=new yb,Sg=new ug,Ch=[],Ph=[],Dh=new Float32Array(16),Lh=new Float32Array(9),Ih=new Float32Array(4);function Rr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gl(t,e){let n=Ph[e];n===void 0&&(n=new Int32Array(e),Ph[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Ih.set(i),t.uniformMatrix2fv(this.addr,!1,Ih),Xt(n,i)}}function cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Lh.set(i),t.uniformMatrix3fv(this.addr,!1,Lh),Xt(n,i)}}function uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Dh.set(i),t.uniformMatrix4fv(this.addr,!1,Dh),Xt(n,i)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function xw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(wu.compareFunction=n.isReversedDepthBuffer()?ff:uf,r=wu):r=vg,n.setTexture2D(e||r,s)}function yw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||yg,s)}function Sw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Sg,s)}function Mw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||xg,s)}function bw(t){switch(t){case 5126:return sw;case 35664:return rw;case 35665:return ow;case 35666:return aw;case 35674:return lw;case 35675:return cw;case 35676:return uw;case 5124:case 35670:return fw;case 35667:case 35671:return dw;case 35668:case 35672:return hw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return _w;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Mw}}function Ew(t,e){t.uniform1fv(this.addr,e)}function Tw(t,e){const n=Rr(e,this.size,2);t.uniform2fv(this.addr,n)}function Aw(t,e){const n=Rr(e,this.size,3);t.uniform3fv(this.addr,n)}function ww(t,e){const n=Rr(e,this.size,4);t.uniform4fv(this.addr,n)}function Rw(t,e){const n=Rr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Cw(t,e){const n=Rr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pw(t,e){const n=Rr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Dw(t,e){t.uniform1iv(this.addr,e)}function Lw(t,e){t.uniform2iv(this.addr,e)}function Iw(t,e){t.uniform3iv(this.addr,e)}function Nw(t,e){t.uniform4iv(this.addr,e)}function Uw(t,e){t.uniform1uiv(this.addr,e)}function Ow(t,e){t.uniform2uiv(this.addr,e)}function Fw(t,e){t.uniform3uiv(this.addr,e)}function Bw(t,e){t.uniform4uiv(this.addr,e)}function zw(t,e,n){const i=this.cache,s=e.length,r=gl(n,s);Wt(i,r)||(t.uniform1iv(this.addr,r),Xt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=wu:o=vg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function Hw(t,e,n){const i=this.cache,s=e.length,r=gl(n,s);Wt(i,r)||(t.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||yg,r[o])}function kw(t,e,n){const i=this.cache,s=e.length,r=gl(n,s);Wt(i,r)||(t.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Sg,r[o])}function Vw(t,e,n){const i=this.cache,s=e.length,r=gl(n,s);Wt(i,r)||(t.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||xg,r[o])}function Gw(t){switch(t){case 5126:return Ew;case 35664:return Tw;case 35665:return Aw;case 35666:return ww;case 35674:return Rw;case 35675:return Cw;case 35676:return Pw;case 5124:case 35670:return Dw;case 35667:case 35671:return Lw;case 35668:case 35672:return Iw;case 35669:case 35673:return Nw;case 5125:return Uw;case 36294:return Ow;case 36295:return Fw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return Hw;case 35680:case 36300:case 36308:case 36293:return kw;case 36289:case 36303:case 36311:case 36292:return Vw}}class Ww{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bw(n.type)}}class Xw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Gw(n.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function Nh(t,e){t.seq.push(e),t.map[e.id]=e}function $w(t,e,n){const i=t.name,s=i.length;for(pc.lastIndex=0;;){const r=pc.exec(i),o=pc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nh(n,c===void 0?new Ww(a,t,e):new Xw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new qw(a),Nh(n,f)),n=f}}}class ba{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);$w(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Uh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Yw=37297;let Kw=0;function Zw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Oh=new nt;function Jw(t){ft._getMatrix(Oh,ft.workingColorSpace,t);const e=`mat3( ${Oh.elements.map(n=>n.toFixed(4))} )`;switch(ft.getTransfer(t)){case ka:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Fh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Zw(t.getShaderSource(e),a)}else return r}function jw(t,e){const n=Jw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Qw={[Gm]:"Linear",[Wm]:"Reinhard",[Xm]:"Cineon",[qm]:"ACESFilmic",[Ym]:"AgX",[Km]:"Neutral",[$m]:"Custom"};function eR(t,e){const n=Qw[e];return n===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const la=new Y;function tR(){ft.getLuminanceCoefficients(la);const t=la.x.toFixed(4),e=la.y.toFixed(4),n=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function iR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Jr(t){return t!==""}function Bh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(t){return t.replace(rR,aR)}const oR=new Map;function aR(t,e){let n=ot[e];if(n===void 0){const i=oR.get(e);if(i!==void 0)n=ot[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ru(n)}const lR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(t){return t.replace(lR,cR)}function cR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const uR={[_a]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function fR(t){return uR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dR={[Ps]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[dl]:"ENVMAP_TYPE_CUBE_UV"};function hR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":dR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const pR={[yr]:"ENVMAP_MODE_REFRACTION"};function mR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":pR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gR={[Vm]:"ENVMAP_BLENDING_MULTIPLY",[jM]:"ENVMAP_BLENDING_MIX",[QM]:"ENVMAP_BLENDING_ADD"};function _R(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":gR[t.combine]||"ENVMAP_BLENDING_NONE"}function vR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fR(n),c=hR(n),u=mR(n),f=_R(n),d=vR(n),p=nR(n),g=iR(r),_=s.createProgram();let m,h,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Jr).join(`
`),h.length>0&&(h+=`
`)):(m=[kh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),h=[kh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fi?"#define TONE_MAPPING":"",n.toneMapping!==fi?ot.tonemapping_pars_fragment:"",n.toneMapping!==fi?eR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,jw("linearToOutputTexel",n.outputColorSpace),tR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jr).join(`
`)),o=Ru(o),o=Bh(o,n),o=zh(o,n),a=Ru(a),a=Bh(a,n),a=zh(a,n),o=Hh(o),a=Hh(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=S+m+o,y=S+h+a,A=Uh(s,s.VERTEX_SHADER,b),T=Uh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,T),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(U){if(t.debug.checkShaderErrors){const V=s.getProgramInfoLog(_)||"",oe=s.getShaderInfoLog(A)||"",ne=s.getShaderInfoLog(T)||"",G=V.trim(),j=oe.trim(),W=ne.trim();let se=!0,pe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,A,T);else{const Se=Fh(s,A,"vertex"),ve=Fh(s,T,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+Se+`
`+ve)}else G!==""?Ke("WebGLProgram: Program Info Log:",G):(j===""||W==="")&&(pe=!1);pe&&(U.diagnostics={runnable:se,programLog:G,vertexShader:{log:j,prefix:m},fragmentShader:{log:W,prefix:h}})}s.deleteShader(A),s.deleteShader(T),x=new ba(s,_),R=sR(s,_)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(_,Yw)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let yR=0;class SR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MR(e),n.set(e,i)),i}}class MR{constructor(e){this.id=yR++,this.code=e,this.usedTimes=0}}function bR(t){return t===Ds||t===Ba||t===za}function ER(t,e,n,i,s,r){const o=new hf,a=new SR,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,R,F,U,V,oe){const ne=U.fog,G=V.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||j,W),pe=se&&se.mapping===dl?se.image.height:null,Se=p[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Ke("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ve=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,we=ve!==void 0?ve.length:0;let Je=0;G.morphAttributes.position!==void 0&&(Je=1),G.morphAttributes.normal!==void 0&&(Je=2),G.morphAttributes.color!==void 0&&(Je=3);let rt,Qe,K,O;if(Se){const Ie=ri[Se];rt=Ie.vertexShader,Qe=Ie.fragmentShader}else{rt=x.vertexShader,Qe=x.fragmentShader;const Ie=a.getVertexShaderStage(x),tt=a.getFragmentShaderStage(x);a.update(x,Ie,tt),K=Ie.id,O=tt.id}const Z=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),me=V.isInstancedMesh===!0,Me=V.isBatchedMesh===!0,w=!!x.map,C=!!x.matcap,N=!!se,J=!!x.aoMap,X=!!x.lightMap,Q=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,ge=!!x.displacementMap,ae=!!x.emissiveMap,fe=!!x.metalnessMap,Ce=!!x.roughnessMap,P=x.anisotropy>0,Fe=x.clearcoat>0,Ne=x.dispersion>0,E=x.iridescence>0,v=x.sheen>0,B=x.transmission>0,$=P&&!!x.anisotropyMap,ie=Fe&&!!x.clearcoatMap,ye=Fe&&!!x.clearcoatNormalMap,Te=Fe&&!!x.clearcoatRoughnessMap,ce=E&&!!x.iridescenceMap,de=E&&!!x.iridescenceThicknessMap,xe=v&&!!x.sheenColorMap,He=v&&!!x.sheenRoughnessMap,Le=!!x.specularMap,Pe=!!x.specularColorMap,Xe=!!x.specularIntensityMap,Ye=B&&!!x.transmissionMap,et=B&&!!x.thicknessMap,z=!!x.gradientMap,De=!!x.alphaMap,I=x.alphaTest>0,H=!!x.alphaHash,he=!!x.extensions;let le=fi;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(le=t.toneMapping);const be={shaderID:Se,shaderType:x.type,shaderName:x.name,vertexShader:rt,fragmentShader:Qe,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:O,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Me,batchingColor:Me&&V._colorsTexture!==null,instancing:me,instancingColor:me&&V.instanceColor!==null,instancingMorph:me&&V.morphTexture!==null,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:w,matcap:C,envMap:N,envMapMode:N&&se.mapping,envMapCubeUVHeight:pe,aoMap:J,lightMap:X,bumpMap:Q,normalMap:_e,displacementMap:ge,emissiveMap:ae,normalMapObjectSpace:_e&&x.normalMapType===nb,normalMapTangentSpace:_e&&x.normalMapType===Eu,packedNormalMap:_e&&x.normalMapType===Eu&&bR(x.normalMap.format),metalnessMap:fe,roughnessMap:Ce,anisotropy:P,anisotropyMap:$,clearcoat:Fe,clearcoatMap:ie,clearcoatNormalMap:ye,clearcoatRoughnessMap:Te,dispersion:Ne,iridescence:E,iridescenceMap:ce,iridescenceThicknessMap:de,sheen:v,sheenColorMap:xe,sheenRoughnessMap:He,specularMap:Le,specularColorMap:Pe,specularIntensityMap:Xe,transmission:B,transmissionMap:Ye,thicknessMap:et,gradientMap:z,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:De,alphaTest:I,alphaHash:H,combine:x.combine,mapUv:w&&g(x.map.channel),aoMapUv:J&&g(x.aoMap.channel),lightMapUv:X&&g(x.lightMap.channel),bumpMapUv:Q&&g(x.bumpMap.channel),normalMapUv:_e&&g(x.normalMap.channel),displacementMapUv:ge&&g(x.displacementMap.channel),emissiveMapUv:ae&&g(x.emissiveMap.channel),metalnessMapUv:fe&&g(x.metalnessMap.channel),roughnessMapUv:Ce&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:ie&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&g(x.sheenRoughnessMap.channel),specularMapUv:Le&&g(x.specularMap.channel),specularColorMapUv:Pe&&g(x.specularColorMap.channel),specularIntensityMapUv:Xe&&g(x.specularIntensityMap.channel),transmissionMapUv:Ye&&g(x.transmissionMap.channel),thicknessMapUv:et&&g(x.thicknessMap.channel),alphaMapUv:De&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(_e||P),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(w||De),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Je,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:w&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:ae&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ai,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&x.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)R.push(F),R.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(h(R,x),S(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function h(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function S(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){const R=p[x.type];let F;if(R){const U=ri[R];F=kb.clone(U.uniforms)}else F=x.uniforms;return F}function y(x,R){let F=u.get(R);return F!==void 0?++F.usedTimes:(F=new xR(t,R,x,s),c.push(F),u.set(R,F)),F}function A(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function D(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:D}}function TR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function AR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Vh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,_,m,h){let S=t[e];return S===void 0?(S={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:h},t[e]=S):(S.id=d.id,S.object=d,S.geometry=p,S.material=g,S.materialVariant=o(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=m,S.group=h),e++,S}function l(d,p,g,_,m,h){const S=a(d,p,g,_,m,h);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):n.push(S)}function c(d,p,g,_,m,h){const S=a(d,p,g,_,m,h);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):n.unshift(S)}function u(d,p,g){n.length>1&&n.sort(d||AR),i.length>1&&i.sort(p||Vh),s.length>1&&s.sort(p||Vh),g&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function wR(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Gh,t.set(i,[o])):s>=r.length?(o=new Gh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new lt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function CR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PR=0;function DR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LR(t){const e=new RR,n=CR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new Pt,o=new Pt;function a(c){let u=0,f=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,S=0,b=0,y=0,A=0,T=0,D=0;c.sort(DR);for(let R=0,F=c.length;R<F;R++){const U=c[R],V=U.color,oe=U.intensity,ne=U.distance;let G=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ds?G=U.shadow.map.texture:G=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=V.r*oe,f+=V.g*oe,d+=V.b*oe;else if(U.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],oe);D++}else if(U.isDirectionalLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const W=U.shadow,se=n.get(U);se.shadowIntensity=W.intensity,se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,i.directionalShadow[p]=se,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=U.shadow.matrix,S++}i.directional[p]=j,p++}else if(U.isSpotLight){const j=e.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(V).multiplyScalar(oe),j.distance=ne,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[_]=j;const W=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,W.updateMatrices(U),U.castShadow&&T++),i.spotLightMatrix[_]=W.matrix,U.castShadow){const se=n.get(U);se.shadowIntensity=W.intensity,se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,i.spotShadow[_]=se,i.spotShadowMap[_]=G,y++}_++}else if(U.isRectAreaLight){const j=e.get(U);j.color.copy(V).multiplyScalar(oe),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=j,m++}else if(U.isPointLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){const W=U.shadow,se=n.get(U);se.shadowIntensity=W.intensity,se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,se.shadowCameraNear=W.camera.near,se.shadowCameraFar=W.camera.far,i.pointShadow[g]=se,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=U.shadow.matrix,b++}i.point[g]=j,g++}else if(U.isHemisphereLight){const j=e.get(U);j.skyColor.copy(U.color).multiplyScalar(oe),j.groundColor.copy(U.groundColor).multiplyScalar(oe),i.hemi[h]=j,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==h||x.numDirectionalShadows!==S||x.numPointShadows!==b||x.numSpotShadows!==y||x.numSpotMaps!==A||x.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,x.directionalLength=p,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=h,x.numDirectionalShadows=S,x.numPointShadows=b,x.numSpotShadows=y,x.numSpotMaps=A,x.numLightProbes=D,i.version=PR++)}function l(c,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const b=c[h];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Wh(t){const e=new LR(t),n=[],i=[],s=[];function r(d){f.camera=d,n.length=0,i.length=0,s.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function IR(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Wh(t),e.set(s,[a])):r>=o.length?(a=new Wh(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UR=`uniform sampler2D shadow_pass;
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
}`,OR=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],FR=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Xh=new Pt,$r=new Y,mc=new Y;function BR(t,e,n){let i=new mf;const s=new je,r=new je,o=new Dt,a=new Xb,l=new qb,c={},u=n.maxTextureSize,f={[ns]:Tn,[Tn]:ns,[ai]:ai},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:NR,fragmentShader:UR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_a;let h=this.type;this.render=function(T,D,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===IM&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_a);const R=t.getRenderTarget(),F=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Pi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const oe=h!==this.type;oe&&D.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(G=>G.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,G=T.length;ne<G;ne++){const j=T[ne],W=j.shadow;if(W===void 0){Ke("WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const se=W.getFrameExtents();s.multiply(se),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,W.mapSize.y=r.y));const pe=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=pe,W.map===null||oe===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Zr){if(j.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new di(s.x,s.y,{format:Ds,type:Ui,minFilter:ln,magFilter:ln,generateMipmaps:!1}),W.map.texture.name=j.name+".shadowMap",W.map.depthTexture=new Sr(s.x,s.y,li),W.map.depthTexture.name=j.name+".shadowMapDepth",W.map.depthTexture.format=Oi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Jt,W.map.depthTexture.magFilter=Jt}else j.isPointLight?(W.map=new _g(s.x),W.map.depthTexture=new zb(s.x,mi)):(W.map=new di(s.x,s.y),W.map.depthTexture=new Sr(s.x,s.y,mi)),W.map.depthTexture.name=j.name+".shadowMap",W.map.depthTexture.format=Oi,this.type===_a?(W.map.depthTexture.compareFunction=pe?ff:uf,W.map.depthTexture.minFilter=ln,W.map.depthTexture.magFilter=ln):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Jt,W.map.depthTexture.magFilter=Jt);W.camera.updateProjectionMatrix()}const Se=W.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<Se;ve++){if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,ve),t.clear();else{ve===0&&(t.setRenderTarget(W.map),t.clear());const we=W.getViewport(ve);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),V.viewport(o)}if(j.isPointLight){const we=W.camera,Je=W.matrix,rt=j.distance||we.far;rt!==we.far&&(we.far=rt,we.updateProjectionMatrix()),$r.setFromMatrixPosition(j.matrixWorld),we.position.copy($r),mc.copy(we.position),mc.add(OR[ve]),we.up.copy(FR[ve]),we.lookAt(mc),we.updateMatrixWorld(),Je.makeTranslation(-$r.x,-$r.y,-$r.z),Xh.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Xh,we.coordinateSystem,we.reversedDepth)}else W.updateMatrices(j);i=W.getFrustum(),y(D,x,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Zr&&S(W,x),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(R,F,U)};function S(T,D){const x=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new di(s.x,s.y,{format:Ds,type:Ui})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(D,null,x,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(D,null,x,p,_,null)}function b(T,D,x,R){let F=null;const U=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)F=U;else if(F=x.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const V=F.uuid,oe=D.uuid;let ne=c[V];ne===void 0&&(ne={},c[V]=ne);let G=ne[oe];G===void 0&&(G=F.clone(),ne[oe]=G,D.addEventListener("dispose",A)),F=G}if(F.visible=D.visible,F.wireframe=D.wireframe,R===Zr?F.side=D.shadowSide!==null?D.shadowSide:D.side:F.side=D.shadowSide!==null?D.shadowSide:f[D.side],F.alphaMap=D.alphaMap,F.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,F.map=D.map,F.clipShadows=D.clipShadows,F.clippingPlanes=D.clippingPlanes,F.clipIntersection=D.clipIntersection,F.displacementMap=D.displacementMap,F.displacementScale=D.displacementScale,F.displacementBias=D.displacementBias,F.wireframeLinewidth=D.wireframeLinewidth,F.linewidth=D.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const V=t.properties.get(F);V.light=x}return F}function y(T,D,x,R,F){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Zr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const oe=e.update(T),ne=T.material;if(Array.isArray(ne)){const G=oe.groups;for(let j=0,W=G.length;j<W;j++){const se=G[j],pe=ne[se.materialIndex];if(pe&&pe.visible){const Se=b(T,pe,R,F);T.onBeforeShadow(t,T,D,x,oe,Se,se),t.renderBufferDirect(x,null,oe,Se,T,se),T.onAfterShadow(t,T,D,x,oe,Se,se)}}}else if(ne.visible){const G=b(T,ne,R,F);T.onBeforeShadow(t,T,D,x,oe,G,null),t.renderBufferDirect(x,null,oe,G,T,null),T.onAfterShadow(t,T,D,x,oe,G,null)}}const V=T.children;for(let oe=0,ne=V.length;oe<ne;oe++)y(V[oe],D,x,R,F)}function A(T){T.target.removeEventListener("dispose",A);for(const x in c){const R=c[x],F=T.target.uuid;F in R&&(R[F].dispose(),delete R[F])}}}function zR(t,e){function n(){let z=!1;const De=new Dt;let I=null;const H=new Dt(0,0,0,0);return{setMask:function(he){I!==he&&!z&&(t.colorMask(he,he,he,he),I=he)},setLocked:function(he){z=he},setClear:function(he,le,be,Ie,tt){tt===!0&&(he*=Ie,le*=Ie,be*=Ie),De.set(he,le,be,Ie),H.equals(De)===!1&&(t.clearColor(he,le,be,Ie),H.copy(De))},reset:function(){z=!1,I=null,H.set(-1,0,0,0)}}}function i(){let z=!1,De=!1,I=null,H=null,he=null;return{setReversed:function(le){if(De!==le){const be=e.get("EXT_clip_control");le?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),De=le;const Ie=he;he=null,this.setClear(Ie)}},getReversed:function(){return De},setTest:function(le){le?Z(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(le){I!==le&&!z&&(t.depthMask(le),I=le)},setFunc:function(le){if(De&&(le=db[le]),H!==le){switch(le){case zc:t.depthFunc(t.NEVER);break;case Hc:t.depthFunc(t.ALWAYS);break;case kc:t.depthFunc(t.LESS);break;case xr:t.depthFunc(t.LEQUAL);break;case Vc:t.depthFunc(t.EQUAL);break;case Gc:t.depthFunc(t.GEQUAL);break;case Wc:t.depthFunc(t.GREATER);break;case Xc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=le}},setLocked:function(le){z=le},setClear:function(le){he!==le&&(he=le,De&&(le=1-le),t.clearDepth(le))},reset:function(){z=!1,I=null,H=null,he=null,De=!1}}}function s(){let z=!1,De=null,I=null,H=null,he=null,le=null,be=null,Ie=null,tt=null;return{setTest:function(ut){z||(ut?Z(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(ut){De!==ut&&!z&&(t.stencilMask(ut),De=ut)},setFunc:function(ut,fn,Qt){(I!==ut||H!==fn||he!==Qt)&&(t.stencilFunc(ut,fn,Qt),I=ut,H=fn,he=Qt)},setOp:function(ut,fn,Qt){(le!==ut||be!==fn||Ie!==Qt)&&(t.stencilOp(ut,fn,Qt),le=ut,be=fn,Ie=Qt)},setLocked:function(ut){z=ut},setClear:function(ut){tt!==ut&&(t.clearStencil(ut),tt=ut)},reset:function(){z=!1,De=null,I=null,H=null,he=null,le=null,be=null,Ie=null,tt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},p=new WeakMap,g=[],_=null,m=!1,h=null,S=null,b=null,y=null,A=null,T=null,D=null,x=new lt(0,0,0),R=0,F=!1,U=null,V=null,oe=null,ne=null,G=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,se=0;const pe=t.getParameter(t.VERSION);pe.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(pe)[1]),W=se>=1):pe.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),W=se>=2);let Se=null,ve={};const we=t.getParameter(t.SCISSOR_BOX),Je=t.getParameter(t.VIEWPORT),rt=new Dt().fromArray(we),Qe=new Dt().fromArray(Je);function K(z,De,I,H){const he=new Uint8Array(4),le=t.createTexture();t.bindTexture(z,le),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<I;be++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(De,0,t.RGBA,1,1,H,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(De+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return le}const O={};O[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),O[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),O[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(t.DEPTH_TEST),o.setFunc(xr),Q(!1),_e(Hd),Z(t.CULL_FACE),J(Pi);function Z(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function ue(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function me(z,De){return d[z]!==De?(t.bindFramebuffer(z,De),d[z]=De,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=De),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=De),!0):!1}function Me(z,De){let I=g,H=!1;if(z){I=p.get(De),I===void 0&&(I=[],p.set(De,I));const he=z.textures;if(I.length!==he.length||I[0]!==t.COLOR_ATTACHMENT0){for(let le=0,be=he.length;le<be;le++)I[le]=t.COLOR_ATTACHMENT0+le;I.length=he.length,H=!0}}else I[0]!==t.BACK&&(I[0]=t.BACK,H=!0);H&&t.drawBuffers(I)}function w(z){return _!==z?(t.useProgram(z),_=z,!0):!1}const C={[_s]:t.FUNC_ADD,[UM]:t.FUNC_SUBTRACT,[OM]:t.FUNC_REVERSE_SUBTRACT};C[FM]=t.MIN,C[BM]=t.MAX;const N={[zM]:t.ZERO,[HM]:t.ONE,[kM]:t.SRC_COLOR,[Fc]:t.SRC_ALPHA,[$M]:t.SRC_ALPHA_SATURATE,[XM]:t.DST_COLOR,[GM]:t.DST_ALPHA,[VM]:t.ONE_MINUS_SRC_COLOR,[Bc]:t.ONE_MINUS_SRC_ALPHA,[qM]:t.ONE_MINUS_DST_COLOR,[WM]:t.ONE_MINUS_DST_ALPHA,[YM]:t.CONSTANT_COLOR,[KM]:t.ONE_MINUS_CONSTANT_COLOR,[ZM]:t.CONSTANT_ALPHA,[JM]:t.ONE_MINUS_CONSTANT_ALPHA};function J(z,De,I,H,he,le,be,Ie,tt,ut){if(z===Pi){m===!0&&(ue(t.BLEND),m=!1);return}if(m===!1&&(Z(t.BLEND),m=!0),z!==NM){if(z!==h||ut!==F){if((S!==_s||A!==_s)&&(t.blendEquation(t.FUNC_ADD),S=_s,A=_s),ut)switch(z){case lr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kd:t.blendFunc(t.ONE,t.ONE);break;case Vd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ht("WebGLState: Invalid blending: ",z);break}else switch(z){case lr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Vd:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gd:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",z);break}b=null,y=null,T=null,D=null,x.set(0,0,0),R=0,h=z,F=ut}return}he=he||De,le=le||I,be=be||H,(De!==S||he!==A)&&(t.blendEquationSeparate(C[De],C[he]),S=De,A=he),(I!==b||H!==y||le!==T||be!==D)&&(t.blendFuncSeparate(N[I],N[H],N[le],N[be]),b=I,y=H,T=le,D=be),(Ie.equals(x)===!1||tt!==R)&&(t.blendColor(Ie.r,Ie.g,Ie.b,tt),x.copy(Ie),R=tt),h=z,F=!1}function X(z,De){z.side===ai?ue(t.CULL_FACE):Z(t.CULL_FACE);let I=z.side===Tn;De&&(I=!I),Q(I),z.blending===lr&&z.transparent===!1?J(Pi):J(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const H=z.stencilWrite;a.setTest(H),H&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ae(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(z){U!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),U=z)}function _e(z){z!==DM?(Z(t.CULL_FACE),z!==V&&(z===Hd?t.cullFace(t.BACK):z===LM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),V=z}function ge(z){z!==oe&&(W&&t.lineWidth(z),oe=z)}function ae(z,De,I){z?(Z(t.POLYGON_OFFSET_FILL),(ne!==De||G!==I)&&(ne=De,G=I,o.getReversed()&&(De=-De),t.polygonOffset(De,I))):ue(t.POLYGON_OFFSET_FILL)}function fe(z){z?Z(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function Ce(z){z===void 0&&(z=t.TEXTURE0+j-1),Se!==z&&(t.activeTexture(z),Se=z)}function P(z,De,I){I===void 0&&(Se===null?I=t.TEXTURE0+j-1:I=Se);let H=ve[I];H===void 0&&(H={type:void 0,texture:void 0},ve[I]=H),(H.type!==z||H.texture!==De)&&(Se!==I&&(t.activeTexture(I),Se=I),t.bindTexture(z,De||O[z]),H.type=z,H.texture=De)}function Fe(){const z=ve[Se];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ne(){try{t.compressedTexImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function E(){try{t.compressedTexImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function v(){try{t.texSubImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function B(){try{t.texSubImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function ie(){try{t.compressedTexSubImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function ye(){try{t.texStorage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function Te(){try{t.texStorage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function ce(){try{t.texImage2D(...arguments)}catch(z){ht("WebGLState:",z)}}function de(){try{t.texImage3D(...arguments)}catch(z){ht("WebGLState:",z)}}function xe(z){return f[z]!==void 0?f[z]:t.getParameter(z)}function He(z,De){f[z]!==De&&(t.pixelStorei(z,De),f[z]=De)}function Le(z){rt.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),rt.copy(z))}function Pe(z){Qe.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),Qe.copy(z))}function Xe(z,De){let I=c.get(De);I===void 0&&(I=new WeakMap,c.set(De,I));let H=I.get(z);H===void 0&&(H=t.getUniformBlockIndex(De,z.name),I.set(z,H))}function Ye(z,De){const H=c.get(De).get(z);l.get(De)!==H&&(t.uniformBlockBinding(De,H,z.__bindingPointIndex),l.set(De,H))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},Se=null,ve={},d={},p=new WeakMap,g=[],_=null,m=!1,h=null,S=null,b=null,y=null,A=null,T=null,D=null,x=new lt(0,0,0),R=0,F=!1,U=null,V=null,oe=null,ne=null,G=null,rt.set(0,0,t.canvas.width,t.canvas.height),Qe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ue,bindFramebuffer:me,drawBuffers:Me,useProgram:w,setBlending:J,setMaterial:X,setFlipSided:Q,setCullFace:_e,setLineWidth:ge,setPolygonOffset:ae,setScissorTest:fe,activeTexture:Ce,bindTexture:P,unbindTexture:Fe,compressedTexImage2D:Ne,compressedTexImage3D:E,texImage2D:ce,texImage3D:de,pixelStorei:He,getParameter:xe,updateUBOMapping:Xe,uniformBlockBinding:Ye,texStorage2D:ye,texStorage3D:Te,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:$,compressedTexSubImage3D:ie,scissor:Le,viewport:Pe,reset:et}}function HR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,f=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return g?new OffscreenCanvas(E,v):Va("canvas")}function m(E,v,B){let $=1;const ie=Ne(E);if((ie.width>B||ie.height>B)&&($=B/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ye=Math.floor($*ie.width),Te=Math.floor($*ie.height);d===void 0&&(d=_(ye,Te));const ce=v?_(ye,Te):d;return ce.width=ye,ce.height=Te,ce.getContext("2d").drawImage(E,0,0,ye,Te),Ke("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ye+"x"+Te+")."),ce}else return"data"in E&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function h(E){return E.generateMipmaps}function S(E){t.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(E,v,B,$,ie,ye=!1){if(E!==null){if(t[E]!==void 0)return t[E];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Te;$&&(Te=e.get("EXT_texture_norm16"),Te||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=v;if(v===t.RED&&(B===t.FLOAT&&(ce=t.R32F),B===t.HALF_FLOAT&&(ce=t.R16F),B===t.UNSIGNED_BYTE&&(ce=t.R8),B===t.UNSIGNED_SHORT&&Te&&(ce=Te.R16_EXT),B===t.SHORT&&Te&&(ce=Te.R16_SNORM_EXT)),v===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ce=t.R8UI),B===t.UNSIGNED_SHORT&&(ce=t.R16UI),B===t.UNSIGNED_INT&&(ce=t.R32UI),B===t.BYTE&&(ce=t.R8I),B===t.SHORT&&(ce=t.R16I),B===t.INT&&(ce=t.R32I)),v===t.RG&&(B===t.FLOAT&&(ce=t.RG32F),B===t.HALF_FLOAT&&(ce=t.RG16F),B===t.UNSIGNED_BYTE&&(ce=t.RG8),B===t.UNSIGNED_SHORT&&Te&&(ce=Te.RG16_EXT),B===t.SHORT&&Te&&(ce=Te.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(ce=t.RG8UI),B===t.UNSIGNED_SHORT&&(ce=t.RG16UI),B===t.UNSIGNED_INT&&(ce=t.RG32UI),B===t.BYTE&&(ce=t.RG8I),B===t.SHORT&&(ce=t.RG16I),B===t.INT&&(ce=t.RG32I)),v===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(ce=t.RGB8UI),B===t.UNSIGNED_SHORT&&(ce=t.RGB16UI),B===t.UNSIGNED_INT&&(ce=t.RGB32UI),B===t.BYTE&&(ce=t.RGB8I),B===t.SHORT&&(ce=t.RGB16I),B===t.INT&&(ce=t.RGB32I)),v===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(ce=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(ce=t.RGBA16UI),B===t.UNSIGNED_INT&&(ce=t.RGBA32UI),B===t.BYTE&&(ce=t.RGBA8I),B===t.SHORT&&(ce=t.RGBA16I),B===t.INT&&(ce=t.RGBA32I)),v===t.RGB&&(B===t.UNSIGNED_SHORT&&Te&&(ce=Te.RGB16_EXT),B===t.SHORT&&Te&&(ce=Te.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(ce=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(ce=t.R11F_G11F_B10F)),v===t.RGBA){const de=ye?ka:ft.getTransfer(ie);B===t.FLOAT&&(ce=t.RGBA32F),B===t.HALF_FLOAT&&(ce=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ce=de===vt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&Te&&(ce=Te.RGBA16_EXT),B===t.SHORT&&Te&&(ce=Te.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(E,v){let B;return E?v===null||v===mi||v===_o?B=t.DEPTH24_STENCIL8:v===li?B=t.DEPTH32F_STENCIL8:v===go&&(B=t.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mi||v===_o?B=t.DEPTH_COMPONENT24:v===li?B=t.DEPTH_COMPONENT32F:v===go&&(B=t.DEPTH_COMPONENT16),B}function T(E,v){return h(E)===!0||E.isFramebufferTexture&&E.minFilter!==Jt&&E.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function D(E){const v=E.target;v.removeEventListener("dispose",D),R(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function x(E){const v=E.target;v.removeEventListener("dispose",x),U(v)}function R(E){const v=i.get(E);if(v.__webglInit===void 0)return;const B=E.source,$=p.get(B);if($){const ie=$[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(E),Object.keys($).length===0&&p.delete(B)}i.remove(E)}function F(E){const v=i.get(E);t.deleteTexture(v.__webglTexture);const B=E.source,$=p.get(B);delete $[v.__cacheKey],o.memory.textures--}function U(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let ie=0;ie<v.__webglFramebuffer[$].length;ie++)t.deleteFramebuffer(v.__webglFramebuffer[$][ie]);else t.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)t.deleteFramebuffer(v.__webglFramebuffer[$]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=E.textures;for(let $=0,ie=B.length;$<ie;$++){const ye=i.get(B[$]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(B[$])}i.remove(E)}let V=0;function oe(){V=0}function ne(){return V}function G(E){V=E}function j(){const E=V;return E>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),V+=1,E}function W(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function se(E,v){const B=i.get(E);if(E.isVideoTexture&&P(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){const $=E.image;if($===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(B,E,v);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+v)}function pe(E,v){const B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ue(B,E,v);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+v)}function Se(E,v){const B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ue(B,E,v);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+v)}function ve(E,v){const B=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){me(B,E,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+v)}const we={[qc]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[$c]:t.MIRRORED_REPEAT},Je={[Jt]:t.NEAREST,[eb]:t.NEAREST_MIPMAP_NEAREST,[Bo]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[Bl]:t.LINEAR_MIPMAP_NEAREST,[Ss]:t.LINEAR_MIPMAP_LINEAR},rt={[ib]:t.NEVER,[lb]:t.ALWAYS,[sb]:t.LESS,[uf]:t.LEQUAL,[rb]:t.EQUAL,[ff]:t.GEQUAL,[ob]:t.GREATER,[ab]:t.NOTEQUAL};function Qe(E,v){if(v.type===li&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ln||v.magFilter===Bl||v.magFilter===Bo||v.magFilter===Ss||v.minFilter===ln||v.minFilter===Bl||v.minFilter===Bo||v.minFilter===Ss)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,we[v.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,we[v.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,we[v.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,Je[v.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,Je[v.minFilter]),v.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,rt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Jt||v.minFilter!==Bo&&v.minFilter!==Ss||v.type===li&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function K(E,v){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",D));const $=v.source;let ie=p.get($);ie===void 0&&(ie={},p.set($,ie));const ye=W(v);if(ye!==E.__cacheKey){ie[ye]===void 0&&(ie[ye]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[ye].usedTimes++;const Te=ie[E.__cacheKey];Te!==void 0&&(ie[E.__cacheKey].usedTimes--,Te.usedTimes===0&&F(v)),E.__cacheKey=ye,E.__webglTexture=ie[ye].texture}return B}function O(E,v,B){return Math.floor(Math.floor(E/B)/v)}function Z(E,v,B,$){const ye=E.updateRanges;if(ye.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,B,$,v.data);else{ye.sort((He,Le)=>He.start-Le.start);let Te=0;for(let He=1;He<ye.length;He++){const Le=ye[Te],Pe=ye[He],Xe=Le.start+Le.count,Ye=O(Pe.start,v.width,4),et=O(Le.start,v.width,4);Pe.start<=Xe+1&&Ye===et&&O(Pe.start+Pe.count-1,v.width,4)===Ye?Le.count=Math.max(Le.count,Pe.start+Pe.count-Le.start):(++Te,ye[Te]=Pe)}ye.length=Te+1;const ce=n.getParameter(t.UNPACK_ROW_LENGTH),de=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let He=0,Le=ye.length;He<Le;He++){const Pe=ye[He],Xe=Math.floor(Pe.start/4),Ye=Math.ceil(Pe.count/4),et=Xe%v.width,z=Math.floor(Xe/v.width),De=Ye,I=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,et),n.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,et,z,De,I,B,$,v.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ce),n.pixelStorei(t.UNPACK_SKIP_PIXELS,de),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function ue(E,v,B){let $=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=t.TEXTURE_3D);const ie=K(E,v),ye=v.source;n.bindTexture($,E.__webglTexture,t.TEXTURE0+B);const Te=i.get(ye);if(ye.version!==Te.__version||ie===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const I=ft.getPrimaries(ft.workingColorSpace),H=v.colorSpace===ji?null:ft.getPrimaries(v.colorSpace),he=v.colorSpace===ji||I===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let de=m(v.image,!1,s.maxTextureSize);de=Fe(v,de);const xe=r.convert(v.format,v.colorSpace),He=r.convert(v.type);let Le=y(v.internalFormat,xe,He,v.normalized,v.colorSpace,v.isVideoTexture);Qe($,v);let Pe;const Xe=v.mipmaps,Ye=v.isVideoTexture!==!0,et=Te.__version===void 0||ie===!0,z=ye.dataReady,De=T(v,de);if(v.isDepthTexture)Le=A(v.format===Ms,v.type),et&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Le,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Le,de.width,de.height,0,xe,He,null));else if(v.isDataTexture)if(Xe.length>0){Ye&&et&&n.texStorage2D(t.TEXTURE_2D,De,Le,Xe[0].width,Xe[0].height);for(let I=0,H=Xe.length;I<H;I++)Pe=Xe[I],Ye?z&&n.texSubImage2D(t.TEXTURE_2D,I,0,0,Pe.width,Pe.height,xe,He,Pe.data):n.texImage2D(t.TEXTURE_2D,I,Le,Pe.width,Pe.height,0,xe,He,Pe.data);v.generateMipmaps=!1}else Ye?(et&&n.texStorage2D(t.TEXTURE_2D,De,Le,de.width,de.height),z&&Z(v,de,xe,He)):n.texImage2D(t.TEXTURE_2D,0,Le,de.width,de.height,0,xe,He,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Le,Xe[0].width,Xe[0].height,de.depth);for(let I=0,H=Xe.length;I<H;I++)if(Pe=Xe[I],v.format!==Gn)if(xe!==null)if(Ye){if(z)if(v.layerUpdates.size>0){const he=Mh(Pe.width,Pe.height,v.format,v.type);for(const le of v.layerUpdates){const be=Pe.data.subarray(le*he/Pe.data.BYTES_PER_ELEMENT,(le+1)*he/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,I,0,0,le,Pe.width,Pe.height,1,xe,be)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,I,0,0,0,Pe.width,Pe.height,de.depth,xe,Pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,I,Le,Pe.width,Pe.height,de.depth,0,Pe.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,I,0,0,0,Pe.width,Pe.height,de.depth,xe,He,Pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,I,Le,Pe.width,Pe.height,de.depth,0,xe,He,Pe.data)}else{Ye&&et&&n.texStorage2D(t.TEXTURE_2D,De,Le,Xe[0].width,Xe[0].height);for(let I=0,H=Xe.length;I<H;I++)Pe=Xe[I],v.format!==Gn?xe!==null?Ye?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,I,0,0,Pe.width,Pe.height,xe,Pe.data):n.compressedTexImage2D(t.TEXTURE_2D,I,Le,Pe.width,Pe.height,0,Pe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?z&&n.texSubImage2D(t.TEXTURE_2D,I,0,0,Pe.width,Pe.height,xe,He,Pe.data):n.texImage2D(t.TEXTURE_2D,I,Le,Pe.width,Pe.height,0,xe,He,Pe.data)}else if(v.isDataArrayTexture)if(Ye){if(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Le,de.width,de.height,de.depth),z)if(v.layerUpdates.size>0){const I=Mh(de.width,de.height,v.format,v.type);for(const H of v.layerUpdates){const he=de.data.subarray(H*I/de.data.BYTES_PER_ELEMENT,(H+1)*I/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,H,de.width,de.height,1,xe,He,he)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,xe,He,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,de.width,de.height,de.depth,0,xe,He,de.data);else if(v.isData3DTexture)Ye?(et&&n.texStorage3D(t.TEXTURE_3D,De,Le,de.width,de.height,de.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,xe,He,de.data)):n.texImage3D(t.TEXTURE_3D,0,Le,de.width,de.height,de.depth,0,xe,He,de.data);else if(v.isFramebufferTexture){if(et)if(Ye)n.texStorage2D(t.TEXTURE_2D,De,Le,de.width,de.height);else{let I=de.width,H=de.height;for(let he=0;he<De;he++)n.texImage2D(t.TEXTURE_2D,he,Le,I,H,0,xe,He,null),I>>=1,H>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const I=t.canvas;if(I.hasAttribute("layoutsubtree")||I.setAttribute("layoutsubtree","true"),de.parentNode!==I){I.appendChild(de),f.add(v),I.onpaint=H=>{const he=H.changedElements;for(const le of f)he.includes(le.image)&&(le.needsUpdate=!0)},I.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,de);else{const he=t.RGBA,le=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,he,le,be,de)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Ye&&et){const I=Ne(Xe[0]);n.texStorage2D(t.TEXTURE_2D,De,Le,I.width,I.height)}for(let I=0,H=Xe.length;I<H;I++)Pe=Xe[I],Ye?z&&n.texSubImage2D(t.TEXTURE_2D,I,0,0,xe,He,Pe):n.texImage2D(t.TEXTURE_2D,I,Le,xe,He,Pe);v.generateMipmaps=!1}else if(Ye){if(et){const I=Ne(de);n.texStorage2D(t.TEXTURE_2D,De,Le,I.width,I.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,He,de)}else n.texImage2D(t.TEXTURE_2D,0,Le,xe,He,de);h(v)&&S($),Te.__version=ye.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function me(E,v,B){if(v.image.length!==6)return;const $=K(E,v),ie=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+B);const ye=i.get(ie);if(ie.version!==ye.__version||$===!0){n.activeTexture(t.TEXTURE0+B);const Te=ft.getPrimaries(ft.workingColorSpace),ce=v.colorSpace===ji?null:ft.getPrimaries(v.colorSpace),de=v.colorSpace===ji||Te===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const xe=v.isCompressedTexture||v.image[0].isCompressedTexture,He=v.image[0]&&v.image[0].isDataTexture,Le=[];for(let le=0;le<6;le++)!xe&&!He?Le[le]=m(v.image[le],!0,s.maxCubemapSize):Le[le]=He?v.image[le].image:v.image[le],Le[le]=Fe(v,Le[le]);const Pe=Le[0],Xe=r.convert(v.format,v.colorSpace),Ye=r.convert(v.type),et=y(v.internalFormat,Xe,Ye,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,De=ye.__version===void 0||$===!0,I=ie.dataReady;let H=T(v,Pe);Qe(t.TEXTURE_CUBE_MAP,v);let he;if(xe){z&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,H,et,Pe.width,Pe.height);for(let le=0;le<6;le++){he=Le[le].mipmaps;for(let be=0;be<he.length;be++){const Ie=he[be];v.format!==Gn?Xe!==null?z?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,Ie.width,Ie.height,Xe,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,et,Ie.width,Ie.height,0,Ie.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,Ie.width,Ie.height,Xe,Ye,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,et,Ie.width,Ie.height,0,Xe,Ye,Ie.data)}}}else{if(he=v.mipmaps,z&&De){he.length>0&&H++;const le=Ne(Le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,H,et,le.width,le.height)}for(let le=0;le<6;le++)if(He){z?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le[le].width,Le[le].height,Xe,Ye,Le[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,et,Le[le].width,Le[le].height,0,Xe,Ye,Le[le].data);for(let be=0;be<he.length;be++){const tt=he[be].image[le].image;z?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,tt.width,tt.height,Xe,Ye,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,et,tt.width,tt.height,0,Xe,Ye,tt.data)}}else{z?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Xe,Ye,Le[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,et,Xe,Ye,Le[le]);for(let be=0;be<he.length;be++){const Ie=he[be];z?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,Xe,Ye,Ie.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,et,Xe,Ye,Ie.image[le])}}}h(v)&&S(t.TEXTURE_CUBE_MAP),ye.__version=ie.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Me(E,v,B,$,ie,ye){const Te=r.convert(B.format,B.colorSpace),ce=r.convert(B.type),de=y(B.internalFormat,Te,ce,B.normalized,B.colorSpace),xe=i.get(v),He=i.get(B);if(He.__renderTarget=v,!xe.__hasExternalTextures){const Le=Math.max(1,v.width>>ye),Pe=Math.max(1,v.height>>ye);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ye,de,Le,Pe,v.depth,0,Te,ce,null):n.texImage2D(ie,ye,de,Le,Pe,0,Te,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),Ce(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ie,He.__webglTexture,0,fe(v)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ie,He.__webglTexture,ye),n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(E,v,B){if(t.bindRenderbuffer(t.RENDERBUFFER,E),v.depthBuffer){const $=v.depthTexture,ie=$&&$.isDepthTexture?$.type:null,ye=A(v.stencilBuffer,ie),Te=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ce(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe(v),ye,v.width,v.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe(v),ye,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ye,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,E)}else{const $=v.textures;for(let ie=0;ie<$.length;ie++){const ye=$[ie],Te=r.convert(ye.format,ye.colorSpace),ce=r.convert(ye.type),de=y(ye.internalFormat,Te,ce,ye.normalized,ye.colorSpace);Ce(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe(v),de,v.width,v.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe(v),de,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,de,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function C(E,v,B){const $=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=i.get(v.depthTexture);if(ie.__renderTarget=v,(!ie.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,v.depthTexture.addEventListener("dispose",D)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Qe(t.TEXTURE_CUBE_MAP,v.depthTexture);const xe=r.convert(v.depthTexture.format),He=r.convert(v.depthTexture.type);let Le;v.depthTexture.format===Oi?Le=t.DEPTH_COMPONENT24:v.depthTexture.format===Ms&&(Le=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Le,v.width,v.height,0,xe,He,null)}}else se(v.depthTexture,0);const ye=ie.__webglTexture,Te=fe(v),ce=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,de=v.depthTexture.format===Ms?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Oi)Ce(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ce,ye,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,de,ce,ye,0);else if(v.depthTexture.format===Ms)Ce(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ce,ye,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,de,ce,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function N(E){const v=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const ie=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),v.__depthDisposeCallback=ie}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let $=0;$<6;$++)C(v.__webglFramebuffer[$],E,$);else{const $=E.texture.mipmaps;$&&$.length>0?C(v.__webglFramebuffer[0],E,0):C(v.__webglFramebuffer,E,0)}else if(B){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=t.createRenderbuffer(),w(v.__webglDepthbuffer[$],E,!1);else{const ie=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=v.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,ye),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ye)}}else{const $=E.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),w(v.__webglDepthbuffer,E,!1);else{const ie=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ye),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ye)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function J(E,v,B){const $=i.get(E);v!==void 0&&Me($.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&N(E)}function X(E){const v=E.texture,B=i.get(E),$=i.get(v);E.addEventListener("dispose",x);const ie=E.textures,ye=E.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=v.version,o.memory.textures++),ye){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let de=0;de<v.mipmaps.length;de++)B.__webglFramebuffer[ce][de]=t.createFramebuffer()}else B.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)B.__webglFramebuffer[ce]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ce=0,de=ie.length;ce<de;ce++){const xe=i.get(ie[ce]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&Ce(E)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const de=ie[ce];B.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const xe=r.convert(de.format,de.colorSpace),He=r.convert(de.type),Le=y(de.internalFormat,xe,He,de.normalized,de.colorSpace,E.isXRRenderTarget===!0),Pe=fe(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Le,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),w(B.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ye){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Qe(t.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)Me(B.__webglFramebuffer[ce][de],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else Me(B.__webglFramebuffer[ce],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);h(v)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ce=0,de=ie.length;ce<de;ce++){const xe=ie[ce],He=i.get(xe);let Le=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Le=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Le,He.__webglTexture),Qe(Le,xe),Me(B.__webglFramebuffer,E,xe,t.COLOR_ATTACHMENT0+ce,Le,0),h(xe)&&S(Le)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,$.__webglTexture),Qe(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)Me(B.__webglFramebuffer[de],E,v,t.COLOR_ATTACHMENT0,ce,de);else Me(B.__webglFramebuffer,E,v,t.COLOR_ATTACHMENT0,ce,0);h(v)&&S(ce),n.unbindTexture()}E.depthBuffer&&N(E)}function Q(E){const v=E.textures;for(let B=0,$=v.length;B<$;B++){const ie=v[B];if(h(ie)){const ye=b(E),Te=i.get(ie).__webglTexture;n.bindTexture(ye,Te),S(ye),n.unbindTexture()}}}const _e=[],ge=[];function ae(E){if(E.samples>0){if(Ce(E)===!1){const v=E.textures,B=E.width,$=E.height;let ie=t.COLOR_BUFFER_BIT;const ye=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(E),ce=v.length>1;if(ce)for(let xe=0;xe<v.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const de=E.texture.mipmaps;de&&de.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const He=i.get(v[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,B,$,0,0,B,$,ie,t.NEAREST),l===!0&&(_e.length=0,ge.length=0,_e.push(t.COLOR_ATTACHMENT0+xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(_e.push(ye),ge.push(ye),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let xe=0;xe<v.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const He=i.get(v[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function fe(E){return Math.min(s.maxSamples,E.samples)}function Ce(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function P(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Fe(E,v){const B=E.colorSpace,$=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Ha&&B!==ji&&(ft.getTransfer(B)===vt?($!==Gn||ie!==Pn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",B)),v}function Ne(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=oe,this.getTextureUnits=ne,this.setTextureUnits=G,this.setTexture2D=se,this.setTexture2DArray=pe,this.setTexture3D=Se,this.setTextureCube=ve,this.rebindTextures=J,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kR(t,e){function n(i,s=ji){let r;const o=ft.getTransfer(s);if(i===Pn)return t.UNSIGNED_BYTE;if(i===rf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===of)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Qm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===eg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jm)return t.BYTE;if(i===jm)return t.SHORT;if(i===go)return t.UNSIGNED_SHORT;if(i===sf)return t.INT;if(i===mi)return t.UNSIGNED_INT;if(i===li)return t.FLOAT;if(i===Ui)return t.HALF_FLOAT;if(i===tg)return t.ALPHA;if(i===ng)return t.RGB;if(i===Gn)return t.RGBA;if(i===Oi)return t.DEPTH_COMPONENT;if(i===Ms)return t.DEPTH_STENCIL;if(i===ig)return t.RED;if(i===af)return t.RED_INTEGER;if(i===Ds)return t.RG;if(i===lf)return t.RG_INTEGER;if(i===cf)return t.RGBA_INTEGER;if(i===va||i===xa||i===ya||i===Sa)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yc||i===Kc||i===Zc||i===Jc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jc||i===Qc||i===eu||i===tu||i===nu||i===Ba||i===iu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===jc||i===Qc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===eu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===tu)return r.COMPRESSED_R11_EAC;if(i===nu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ba)return r.COMPRESSED_RG11_EAC;if(i===iu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===fu||i===du||i===hu||i===pu||i===mu||i===gu||i===_u)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===su)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ru)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ou)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===au)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===du)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_u)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vu||i===xu||i===yu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===vu)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Su||i===Mu||i===za||i===bu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Su)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const VR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GR=`
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

}`;class WR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new fg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gi({vertexShader:VR,fragmentShader:GR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rn(new Co(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XR extends as{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new WR,h={},S=n.getContextAttributes();let b=null,y=null;const A=[],T=[],D=new je;let x=null;const R=new On;R.viewport=new Dt;const F=new On;F.viewport=new Dt;const U=[R,F],V=new jb;let oe=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let O=A[K];return O===void 0&&(O=new Xl,A[K]=O),O.getTargetRaySpace()},this.getControllerGrip=function(K){let O=A[K];return O===void 0&&(O=new Xl,A[K]=O),O.getGripSpace()},this.getHand=function(K){let O=A[K];return O===void 0&&(O=new Xl,A[K]=O),O.getHandSpace()};function G(K){const O=T.indexOf(K.inputSource);if(O===-1)return;const Z=A[O];Z!==void 0&&(Z.update(K.inputSource,K.frame,c||o),Z.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",W);for(let K=0;K<A.length;K++){const O=T[K];O!==null&&(T[K]=null,A[K].disconnect(O))}oe=null,ne=null,m.reset();for(const K in h)delete h[K];e.setRenderTarget(b),p=null,d=null,f=null,s=null,y=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",j),s.addEventListener("inputsourceschange",W),S.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,ue=null,me=null;S.depth&&(me=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=S.stencil?Ms:Oi,ue=S.stencil?_o:mi);const Me={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new di(d.textureWidth,d.textureHeight,{format:Gn,type:Pn,depthTexture:new Sr(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Z={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new di(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(K){for(let O=0;O<K.removed.length;O++){const Z=K.removed[O],ue=T.indexOf(Z);ue>=0&&(T[ue]=null,A[ue].disconnect(Z))}for(let O=0;O<K.added.length;O++){const Z=K.added[O];let ue=T.indexOf(Z);if(ue===-1){for(let Me=0;Me<A.length;Me++)if(Me>=T.length){T.push(Z),ue=Me;break}else if(T[Me]===null){T[Me]=Z,ue=Me;break}if(ue===-1)break}const me=A[ue];me&&me.connect(Z)}}const se=new Y,pe=new Y;function Se(K,O,Z){se.setFromMatrixPosition(O.matrixWorld),pe.setFromMatrixPosition(Z.matrixWorld);const ue=se.distanceTo(pe),me=O.projectionMatrix.elements,Me=Z.projectionMatrix.elements,w=me[14]/(me[10]-1),C=me[14]/(me[10]+1),N=(me[9]+1)/me[5],J=(me[9]-1)/me[5],X=(me[8]-1)/me[0],Q=(Me[8]+1)/Me[0],_e=w*X,ge=w*Q,ae=ue/(-X+Q),fe=ae*-X;if(O.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(fe),K.translateZ(ae),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),me[10]===-1)K.projectionMatrix.copy(O.projectionMatrix),K.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const Ce=w+ae,P=C+ae,Fe=_e-fe,Ne=ge+(ue-fe),E=N*C/P*Ce,v=J*C/P*Ce;K.projectionMatrix.makePerspective(Fe,Ne,E,v,Ce,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ve(K,O){O===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(O.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let O=K.near,Z=K.far;m.texture!==null&&(m.depthNear>0&&(O=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),V.near=F.near=R.near=O,V.far=F.far=R.far=Z,(oe!==V.near||ne!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),oe=V.near,ne=V.far),V.layers.mask=K.layers.mask|6,R.layers.mask=V.layers.mask&-5,F.layers.mask=V.layers.mask&-3;const ue=K.parent,me=V.cameras;ve(V,ue);for(let Me=0;Me<me.length;Me++)ve(me[Me],ue);me.length===2?Se(V,R,F):V.projectionMatrix.copy(R.projectionMatrix),we(K,V,ue)};function we(K,O,Z){Z===null?K.matrix.copy(O.matrixWorld):(K.matrix.copy(Z.matrixWorld),K.matrix.invert(),K.matrix.multiply(O.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(O.projectionMatrix),K.projectionMatrixInverse.copy(O.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Tu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(K){return h[K]};let Je=null;function rt(K,O){if(u=O.getViewerPose(c||o),g=O,u!==null){const Z=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ue=!1;Z.length!==V.cameras.length&&(V.cameras.length=0,ue=!0);for(let C=0;C<Z.length;C++){const N=Z[C];let J=null;if(p!==null)J=p.getViewport(N);else{const Q=f.getViewSubImage(d,N);J=Q.viewport,C===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let X=U[C];X===void 0&&(X=new On,X.layers.enable(C),X.viewport=new Dt,U[C]=X),X.matrix.fromArray(N.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(N.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(J.x,J.y,J.width,J.height),C===0&&(V.matrix.copy(X.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ue===!0&&V.cameras.push(X)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const C=f.getDepthInformation(Z[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<Z.length;C++){const N=Z[C].camera;if(N){let J=h[N];J||(J=new fg,h[N]=J);const X=f.getCameraImage(N);J.sourceTexture=X}}}}for(let Z=0;Z<A.length;Z++){const ue=T[Z],me=A[Z];ue!==null&&me!==void 0&&me.update(ue,O,c||o)}Je&&Je(K,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}const Qe=new mg;Qe.setAnimationLoop(rt),this.setAnimationLoop=function(K){Je=K},this.dispose=function(){}}}const qR=new Pt,Mg=new nt;Mg.set(-1,0,0,0,1,0,0,0,1);function $R(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,dg(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,S,b,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,S,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Tn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Tn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h),b=S.envMap,y=S.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(qR.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mg),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=b*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const T=A.program;i.uniformBlockBinding(y,T)}function c(y,A){let T=s[y.id];T===void 0&&(m(y),T=u(y),s[y.id]=T,y.addEventListener("dispose",S));const D=A.program;i.updateUBOMapping(y,D);const x=e.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function u(y){const A=f();y.__bindingPointIndex=A;const T=t.createBuffer(),D=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,D,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,T),T}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const A=s[y.id],T=y.uniforms,D=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let x=0,R=T.length;x<R;x++){const F=T[x];if(Array.isArray(F))for(let U=0,V=F.length;U<V;U++)p(F[U],x,U,D);else p(F,x,0,D)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,A,T,D){if(_(y,A,T,D)===!0){const x=y.__offset,R=y.value;if(Array.isArray(R)){let F=0;for(let U=0;U<R.length;U++){const V=R[U],oe=h(V);g(V,y.__data,F),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(F+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function g(y,A,T){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,T)}function _(y,A,T,D){const x=y.value,R=A+"_"+T;if(D[R]===void 0)return typeof x=="number"||typeof x=="boolean"?D[R]=x:ArrayBuffer.isView(x)?D[R]=x.slice():D[R]=x.clone(),!0;{const F=D[R];if(typeof x=="number"||typeof x=="boolean"){if(F!==x)return D[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(F.equals(x)===!1)return F.copy(x),!0}}return!1}function m(y){const A=y.uniforms;let T=0;const D=16;for(let R=0,F=A.length;R<F;R++){const U=Array.isArray(A[R])?A[R]:[A[R]];for(let V=0,oe=U.length;V<oe;V++){const ne=U[V],G=Array.isArray(ne.value)?ne.value:[ne.value];for(let j=0,W=G.length;j<W;j++){const se=G[j],pe=h(se),Se=T%D,ve=Se%pe.boundary,we=Se+ve;T+=ve,we!==0&&D-we<pe.storage&&(T+=D-we),ne.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=T,T+=pe.storage}}}const x=T%D;return x>0&&(T+=D-x),y.__size=T,y.__cache={},this}function h(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",y),A}function S(y){const A=y.target;A.removeEventListener("dispose",S);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function b(){for(const y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:b}}const KR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function ZR(){return ti===null&&(ti=new Nb(KR,16,16,Ds,Ui),ti.name="DFG_LUT",ti.minFilter=ln,ti.magFilter=ln,ti.wrapS=Ri,ti.wrapT=Ri,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class JR{constructor(e={}){const{canvas:n=ub(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=p,m=new Set([cf,lf,af]),h=new Set([Pn,mi,go,_o,rf,of]),S=new Uint32Array(4),b=new Int32Array(4),y=new Y;let A=null,T=null;const D=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let U=!1,V=null,oe=null,ne=null,G=null;this._outputColorSpace=Un;let j=0,W=0,se=null,pe=-1,Se=null;const ve=new Dt,we=new Dt;let Je=null;const rt=new lt(0);let Qe=0,K=n.width,O=n.height,Z=1,ue=null,me=null;const Me=new Dt(0,0,K,O),w=new Dt(0,0,K,O);let C=!1;const N=new mf;let J=!1,X=!1;const Q=new Pt,_e=new Y,ge=new Dt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Ce(){return se===null?Z:1}let P=i;function Fe(M,q){return n.getContext(M,q)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nf}`),n.addEventListener("webglcontextlost",tt,!1),n.addEventListener("webglcontextrestored",ut,!1),n.addEventListener("webglcontextcreationerror",fn,!1),P===null){const q="webgl2";if(P=Fe(q,M),P===null)throw Fe(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw ht("WebGLRenderer: "+M.message),M}let Ne,E,v,B,$,ie,ye,Te,ce,de,xe,He,Le,Pe,Xe,Ye,et,z,De,I,H,he,le;function be(){Ne=new ZA(P),Ne.init(),H=new kR(P,Ne),E=new VA(P,Ne,e,H),v=new zR(P,Ne),E.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),oe=P.createFramebuffer(),ne=P.createFramebuffer(),G=P.createFramebuffer(),B=new QA(P),$=new TR,ie=new HR(P,Ne,v,$,E,H,B),ye=new KA(F),Te=new iE(P),he=new HA(P,Te),ce=new JA(P,Te,B,he),de=new tw(P,ce,Te,he,B),z=new ew(P,E,ie),Xe=new GA($),xe=new ER(F,ye,Ne,E,he,Xe),He=new $R(F,$),Le=new wR,Pe=new IR(Ne),et=new zA(F,ye,v,de,g,l),Ye=new BR(F,de,E),le=new YR(P,B,E,v),De=new kA(P,Ne,B),I=new jA(P,Ne,B),B.programs=xe.programs,F.capabilities=E,F.extensions=Ne,F.properties=$,F.renderLists=Le,F.shadowMap=Ye,F.state=v,F.info=B}be(),_!==Pn&&(R=new iw(_,n.width,n.height,a,s,r));const Ie=new XR(F,P);this.xr=Ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(K,O,!1))},this.getSize=function(M){return M.set(K,O)},this.setSize=function(M,q,re=!0){if(Ie.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,O=q,n.width=Math.floor(M*Z),n.height=Math.floor(q*Z),re===!0&&(n.style.width=M+"px",n.style.height=q+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,M,q)},this.getDrawingBufferSize=function(M){return M.set(K*Z,O*Z).floor()},this.setDrawingBufferSize=function(M,q,re){K=M,O=q,Z=re,n.width=Math.floor(M*re),n.height=Math.floor(q*re),this.setViewport(0,0,M,q)},this.setEffects=function(M){if(_===Pn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let q=0;q<M.length;q++)if(M[q].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ve)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,q,re,ee){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,q,re,ee),v.viewport(ve.copy(Me).multiplyScalar(Z).round())},this.getScissor=function(M){return M.copy(w)},this.setScissor=function(M,q,re,ee){M.isVector4?w.set(M.x,M.y,M.z,M.w):w.set(M,q,re,ee),v.scissor(we.copy(w).multiplyScalar(Z).round())},this.getScissorTest=function(){return C},this.setScissorTest=function(M){v.setScissorTest(C=M)},this.setOpaqueSort=function(M){ue=M},this.setTransparentSort=function(M){me=M},this.getClearColor=function(M){return M.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(M=!0,q=!0,re=!0){let ee=0;if(M){let te=!1;if(se!==null){const ze=se.texture.format;te=m.has(ze)}if(te){const ze=se.texture.type,Ve=h.has(ze),Be=et.getClearColor(),Ge=et.getClearAlpha(),We=Be.r,st=Be.g,at=Be.b;Ve?(S[0]=We,S[1]=st,S[2]=at,S[3]=Ge,P.clearBufferuiv(P.COLOR,0,S)):(b[0]=We,b[1]=st,b[2]=at,b[3]=Ge,P.clearBufferiv(P.COLOR,0,b))}else ee|=P.COLOR_BUFFER_BIT}q&&(ee|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&P.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),V=M},this.dispose=function(){n.removeEventListener("webglcontextlost",tt,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",fn,!1),et.dispose(),Le.dispose(),Pe.dispose(),$.dispose(),ye.dispose(),de.dispose(),he.dispose(),le.dispose(),xe.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Pr),Ie.removeEventListener("sessionend",Dr),Jn.stop()};function tt(M){M.preventDefault(),Yd("WebGLRenderer: Context Lost."),U=!0}function ut(){Yd("WebGLRenderer: Context Restored."),U=!1;const M=B.autoReset,q=Ye.enabled,re=Ye.autoUpdate,ee=Ye.needsUpdate,te=Ye.type;be(),B.autoReset=M,Ye.enabled=q,Ye.autoUpdate=re,Ye.needsUpdate=ee,Ye.type=te}function fn(M){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Qt(M){const q=M.target;q.removeEventListener("dispose",Qt),Po(q)}function Po(M){Do(M),$.remove(M)}function Do(M){const q=$.get(M).programs;q!==void 0&&(q.forEach(function(re){xe.releaseProgram(re)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,q,re,ee,te,ze){q===null&&(q=ae);const Ve=te.isMesh&&te.matrixWorld.determinantAffine()<0,Be=Ag(M,q,re,ee,te);v.setMaterial(ee,Ve);let Ge=re.index,We=1;if(ee.wireframe===!0){if(Ge=ce.getWireframeAttribute(re),Ge===void 0)return;We=2}const st=re.drawRange,at=re.attributes.position;let qe=st.start*We,Mt=(st.start+st.count)*We;ze!==null&&(qe=Math.max(qe,ze.start*We),Mt=Math.min(Mt,(ze.start+ze.count)*We)),Ge!==null?(qe=Math.max(qe,0),Mt=Math.min(Mt,Ge.count)):at!=null&&(qe=Math.max(qe,0),Mt=Math.min(Mt,at.count));const Ot=Mt-qe;if(Ot<0||Ot===1/0)return;he.setup(te,ee,Be,re,Ge);let Lt,Et=De;if(Ge!==null&&(Lt=Te.get(Ge),Et=I,Et.setIndex(Lt)),te.isMesh)ee.wireframe===!0?(v.setLineWidth(ee.wireframeLinewidth*Ce()),Et.setMode(P.LINES)):Et.setMode(P.TRIANGLES);else if(te.isLine){let en=ee.linewidth;en===void 0&&(en=1),v.setLineWidth(en*Ce()),te.isLineSegments?Et.setMode(P.LINES):te.isLineLoop?Et.setMode(P.LINE_LOOP):Et.setMode(P.LINE_STRIP)}else te.isPoints?Et.setMode(P.POINTS):te.isSprite&&Et.setMode(P.TRIANGLES);if(te.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))Et.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const en=te._multiDrawStarts,ke=te._multiDrawCounts,An=te._multiDrawCount,pt=Ge?Te.get(Ge).bytesPerElement:1,In=$.get(ee).currentProgram.getUniforms();for(let jn=0;jn<An;jn++)In.setValue(P,"_gl_DrawID",jn),Et.render(en[jn]/pt,ke[jn])}else if(te.isInstancedMesh)Et.renderInstances(qe,Ot,te.count);else if(re.isInstancedBufferGeometry){const en=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ke=Math.min(re.instanceCount,en);Et.renderInstances(qe,Ot,ke)}else Et.render(qe,Ot)};function Cr(M,q,re){M.transparent===!0&&M.side===ai&&M.forceSinglePass===!1?(M.side=Tn,M.needsUpdate=!0,cs(M,q,re),M.side=ns,M.needsUpdate=!0,cs(M,q,re),M.side=ai):cs(M,q,re)}this.compile=function(M,q,re=null){re===null&&(re=M),T=Pe.get(re),T.init(q),x.push(T),re.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),M!==re&&M.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),T.setupLights();const ee=new Set;return M.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const ze=te.material;if(ze)if(Array.isArray(ze))for(let Ve=0;Ve<ze.length;Ve++){const Be=ze[Ve];Cr(Be,re,te),ee.add(Be)}else Cr(ze,re,te),ee.add(ze)}),T=x.pop(),ee},this.compileAsync=function(M,q,re=null){const ee=this.compile(M,q,re);return new Promise(te=>{function ze(){if(ee.forEach(function(Ve){$.get(Ve).currentProgram.isReady()&&ee.delete(Ve)}),ee.size===0){te(M);return}setTimeout(ze,10)}Ne.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Ns=null;function Lo(M){Ns&&Ns(M)}function Pr(){Jn.stop()}function Dr(){Jn.start()}const Jn=new mg;Jn.setAnimationLoop(Lo),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(M){Ns=M,Ie.setAnimationLoop(M),M===null?Jn.stop():Jn.start()},Ie.addEventListener("sessionstart",Pr),Ie.addEventListener("sessionend",Dr),this.render=function(M,q){if(q!==void 0&&q.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(M,q);const re=Ie.enabled===!0&&Ie.isPresenting===!0,ee=R!==null&&(se===null||re)&&R.begin(F,se);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(q),q=Ie.getCamera()),M.isScene===!0&&M.onBeforeRender(F,M,q,se),T=Pe.get(M,x.length),T.init(q),T.state.textureUnits=ie.getTextureUnits(),x.push(T),Q.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),N.setFromProjectionMatrix(Q,ci,q.reversedDepth),X=this.localClippingEnabled,J=Xe.init(this.clippingPlanes,X),A=Le.get(M,D.length),A.init(),D.push(A),Ie.enabled===!0&&Ie.isPresenting===!0){const Ve=F.xr.getDepthSensingMesh();Ve!==null&&Us(Ve,q,-1/0,F.sortObjects)}Us(M,q,0,F.sortObjects),A.finish(),F.sortObjects===!0&&A.sort(ue,me,q.reversedDepth),fe=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,fe&&et.addToRenderList(A,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&Xe.beginShadows();const te=T.state.shadowsArray;if(Ye.render(te,M,q),J===!0&&Xe.endShadows(),(ee&&R.hasRenderPass())===!1){const Ve=A.opaque,Be=A.transmissive;if(T.setupLights(),q.isArrayCamera){const Ge=q.cameras;if(Be.length>0)for(let We=0,st=Ge.length;We<st;We++){const at=Ge[We];Ir(Ve,Be,M,at)}fe&&et.render(M);for(let We=0,st=Ge.length;We<st;We++){const at=Ge[We];Lr(A,M,at,at.viewport)}}else Be.length>0&&Ir(Ve,Be,M,q),fe&&et.render(M),Lr(A,M,q)}se!==null&&W===0&&(ie.updateMultisampleRenderTarget(se),ie.updateRenderTargetMipmap(se)),ee&&R.end(F),M.isScene===!0&&M.onAfterRender(F,M,q),he.resetDefaultState(),pe=-1,Se=null,x.pop(),x.length>0?(T=x[x.length-1],ie.setTextureUnits(T.state.textureUnits),J===!0&&Xe.setGlobalState(F.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?A=D[D.length-1]:A=null,V!==null&&V.renderEnd()};function Us(M,q,re,ee){if(M.visible===!1)return;if(M.layers.test(q.layers)){if(M.isGroup)re=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(q);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||N.intersectsSprite(M)){ee&&ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);const Ve=de.update(M),Be=M.material;Be.visible&&A.push(M,Ve,Be,re,ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||N.intersectsObject(M))){const Ve=de.update(M),Be=M.material;if(ee&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ge.copy(M.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ge.copy(Ve.boundingSphere.center)),ge.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(Be)){const Ge=Ve.groups;for(let We=0,st=Ge.length;We<st;We++){const at=Ge[We],qe=Be[at.materialIndex];qe&&qe.visible&&A.push(M,Ve,qe,re,ge.z,at)}}else Be.visible&&A.push(M,Ve,Be,re,ge.z,null)}}const ze=M.children;for(let Ve=0,Be=ze.length;Ve<Be;Ve++)Us(ze[Ve],q,re,ee)}function Lr(M,q,re,ee){const{opaque:te,transmissive:ze,transparent:Ve}=M;T.setupLightsView(re),J===!0&&Xe.setGlobalState(F.clippingPlanes,re),ee&&v.viewport(ve.copy(ee)),te.length>0&&ls(te,q,re),ze.length>0&&ls(ze,q,re),Ve.length>0&&ls(Ve,q,re),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ir(M,q,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ee.id]===void 0){const qe=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ee.id]=new di(1,1,{generateMipmaps:!0,type:qe?Ui:Pn,minFilter:Ss,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const ze=T.state.transmissionRenderTarget[ee.id],Ve=ee.viewport||ve;ze.setSize(Ve.z*F.transmissionResolutionScale,Ve.w*F.transmissionResolutionScale);const Be=F.getRenderTarget(),Ge=F.getActiveCubeFace(),We=F.getActiveMipmapLevel();F.setRenderTarget(ze),F.getClearColor(rt),Qe=F.getClearAlpha(),Qe<1&&F.setClearColor(16777215,.5),F.clear(),fe&&et.render(re);const st=F.toneMapping;F.toneMapping=fi;const at=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),T.setupLightsView(ee),J===!0&&Xe.setGlobalState(F.clippingPlanes,ee),ls(M,re,ee),ie.updateMultisampleRenderTarget(ze),ie.updateRenderTargetMipmap(ze),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Mt=0,Ot=q.length;Mt<Ot;Mt++){const Lt=q[Mt],{object:Et,geometry:en,material:ke,group:An}=Lt;if(ke.side===ai&&Et.layers.test(ee.layers)){const pt=ke.side;ke.side=Tn,ke.needsUpdate=!0,Nr(Et,re,ee,en,ke,An),ke.side=pt,ke.needsUpdate=!0,qe=!0}}qe===!0&&(ie.updateMultisampleRenderTarget(ze),ie.updateRenderTargetMipmap(ze))}F.setRenderTarget(Be,Ge,We),F.setClearColor(rt,Qe),at!==void 0&&(ee.viewport=at),F.toneMapping=st}function ls(M,q,re){const ee=q.isScene===!0?q.overrideMaterial:null;for(let te=0,ze=M.length;te<ze;te++){const Ve=M[te],{object:Be,geometry:Ge,group:We}=Ve;let st=Ve.material;st.allowOverride===!0&&ee!==null&&(st=ee),Be.layers.test(re.layers)&&Nr(Be,q,re,Ge,st,We)}}function Nr(M,q,re,ee,te,ze){M.onBeforeRender(F,q,re,ee,te,ze),M.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),te.onBeforeRender(F,q,re,ee,M,ze),te.transparent===!0&&te.side===ai&&te.forceSinglePass===!1?(te.side=Tn,te.needsUpdate=!0,F.renderBufferDirect(re,q,ee,te,M,ze),te.side=ns,te.needsUpdate=!0,F.renderBufferDirect(re,q,ee,te,M,ze),te.side=ai):F.renderBufferDirect(re,q,ee,te,M,ze),M.onAfterRender(F,q,re,ee,te,ze)}function cs(M,q,re){q.isScene!==!0&&(q=ae);const ee=$.get(M),te=T.state.lights,ze=T.state.shadowsArray,Ve=te.state.version,Be=xe.getParameters(M,te.state,ze,q,re,T.state.lightProbeGridArray),Ge=xe.getProgramCacheKey(Be);let We=ee.programs;ee.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;const st=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;ee.envMap=ye.get(M.envMap||ee.environment,st),ee.envMapRotation=ee.environment!==null&&M.envMap===null?q.environmentRotation:M.envMapRotation,We===void 0&&(M.addEventListener("dispose",Qt),We=new Map,ee.programs=We);let at=We.get(Ge);if(at!==void 0){if(ee.currentProgram===at&&ee.lightsStateVersion===Ve)return St(M,Be),at}else Be.uniforms=xe.getUniforms(M),V!==null&&M.isNodeMaterial&&V.build(M,re,Be),M.onBeforeCompile(Be,F),at=xe.acquireProgram(Be,Ge),We.set(Ge,at),ee.uniforms=Be.uniforms;const qe=ee.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(qe.clippingPlanes=Xe.uniform),St(M,Be),ee.needsLights=Rg(M),ee.lightsStateVersion=Ve,ee.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=T.state.lightProbeGridArray.length>0,ee.currentProgram=at,ee.uniformsList=null,at}function Ur(M){if(M.uniformsList===null){const q=M.currentProgram.getUniforms();M.uniformsList=ba.seqWithValue(q.seq,M.uniforms)}return M.uniformsList}function St(M,q){const re=$.get(M);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function Tg(M,q){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(q.matrixWorld);for(let re=0,ee=M.length;re<ee;re++){const te=M[re];if(te.texture!==null&&te.boundingBox.containsPoint(y))return te}return null}function Ag(M,q,re,ee,te){q.isScene!==!0&&(q=ae),ie.resetTextureUnits();const ze=q.fog,Ve=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,Be=se===null?F.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ft.workingColorSpace,Ge=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,We=ye.get(ee.envMap||Ve,Ge),st=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,at=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!re.morphAttributes.position,Mt=!!re.morphAttributes.normal,Ot=!!re.morphAttributes.color;let Lt=fi;ee.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Lt=F.toneMapping);const Et=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,en=Et!==void 0?Et.length:0,ke=$.get(ee),An=T.state.lights;if(J===!0&&(X===!0||M!==Se)){const wt=M===Se&&ee.id===pe;Xe.setState(ee,M,wt)}let pt=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==An.state.version||ke.outputColorSpace!==Be||te.isBatchedMesh&&ke.batching===!1||!te.isBatchedMesh&&ke.batching===!0||te.isBatchedMesh&&ke.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ke.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ke.instancing===!1||!te.isInstancedMesh&&ke.instancing===!0||te.isSkinnedMesh&&ke.skinning===!1||!te.isSkinnedMesh&&ke.skinning===!0||te.isInstancedMesh&&ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ke.instancingMorph===!1&&te.morphTexture!==null||ke.envMap!==We||ee.fog===!0&&ke.fog!==ze||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Xe.numPlanes||ke.numIntersection!==Xe.numIntersection)||ke.vertexAlphas!==st||ke.vertexTangents!==at||ke.morphTargets!==qe||ke.morphNormals!==Mt||ke.morphColors!==Ot||ke.toneMapping!==Lt||ke.morphTargetsCount!==en||!!ke.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,ke.__version=ee.version);let In=ke.currentProgram;pt===!0&&(In=cs(ee,q,te),V&&ee.isNodeMaterial&&V.onUpdateProgram(ee,In,ke));let jn=!1,Bi=!1,Os=!1;const Tt=In.getUniforms(),Ft=ke.uniforms;if(v.useProgram(In.program)&&(jn=!0,Bi=!0,Os=!0),ee.id!==pe&&(pe=ee.id,Bi=!0),ke.needsLights){const wt=Tg(T.state.lightProbeGridArray,te);ke.lightProbeGrid!==wt&&(ke.lightProbeGrid=wt,Bi=!0)}if(jn||Se!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Tt.setValue(P,"projectionMatrix",M.projectionMatrix),Tt.setValue(P,"viewMatrix",M.matrixWorldInverse);const Hi=Tt.map.cameraPosition;Hi!==void 0&&Hi.setValue(P,_e.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&Tt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Tt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),Se!==M&&(Se=M,Bi=!0,Os=!0)}if(ke.needsLights&&(An.state.directionalShadowMap.length>0&&Tt.setValue(P,"directionalShadowMap",An.state.directionalShadowMap,ie),An.state.spotShadowMap.length>0&&Tt.setValue(P,"spotShadowMap",An.state.spotShadowMap,ie),An.state.pointShadowMap.length>0&&Tt.setValue(P,"pointShadowMap",An.state.pointShadowMap,ie)),te.isSkinnedMesh){Tt.setOptional(P,te,"bindMatrix"),Tt.setOptional(P,te,"bindMatrixInverse");const wt=te.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),Tt.setValue(P,"boneTexture",wt.boneTexture,ie))}te.isBatchedMesh&&(Tt.setOptional(P,te,"batchingTexture"),Tt.setValue(P,"batchingTexture",te._matricesTexture,ie),Tt.setOptional(P,te,"batchingIdTexture"),Tt.setValue(P,"batchingIdTexture",te._indirectTexture,ie),Tt.setOptional(P,te,"batchingColorTexture"),te._colorsTexture!==null&&Tt.setValue(P,"batchingColorTexture",te._colorsTexture,ie));const zi=re.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&z.update(te,re,In),(Bi||ke.receiveShadow!==te.receiveShadow)&&(ke.receiveShadow=te.receiveShadow,Tt.setValue(P,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(Ft.envMapIntensity.value=q.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=ZR()),Bi){if(Tt.setValue(P,"toneMappingExposure",F.toneMappingExposure),ke.needsLights&&wg(Ft,Os),ze&&ee.fog===!0&&He.refreshFogUniforms(Ft,ze),He.refreshMaterialUniforms(Ft,ee,Z,O,T.state.transmissionRenderTarget[M.id]),ke.needsLights&&ke.lightProbeGrid){const wt=ke.lightProbeGrid;Ft.probesSH.value=wt.texture,Ft.probesMin.value.copy(wt.boundingBox.min),Ft.probesMax.value.copy(wt.boundingBox.max),Ft.probesResolution.value.copy(wt.resolution)}ba.upload(P,Ur(ke),Ft,ie)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ba.upload(P,Ur(ke),Ft,ie),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Tt.setValue(P,"center",te.center),Tt.setValue(P,"modelViewMatrix",te.modelViewMatrix),Tt.setValue(P,"normalMatrix",te.normalMatrix),Tt.setValue(P,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){const wt=ee.uniformsGroups;for(let Hi=0,Fs=wt.length;Hi<Fs;Hi++){const Af=wt[Hi];le.update(Af,In),le.bind(Af,In)}}return In}function wg(M,q){M.ambientLightColor.needsUpdate=q,M.lightProbe.needsUpdate=q,M.directionalLights.needsUpdate=q,M.directionalLightShadows.needsUpdate=q,M.pointLights.needsUpdate=q,M.pointLightShadows.needsUpdate=q,M.spotLights.needsUpdate=q,M.spotLightShadows.needsUpdate=q,M.rectAreaLights.needsUpdate=q,M.hemisphereLights.needsUpdate=q}function Rg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(M,q,re){const ee=$.get(M);ee.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),$.get(M.texture).__webglTexture=q,$.get(M.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,q){const re=$.get(M);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(M,q=0,re=0){se=M,j=q,W=re;let ee=null,te=!1,ze=!1;if(M){const Be=$.get(M);if(Be.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(P.FRAMEBUFFER,Be.__webglFramebuffer),ve.copy(M.viewport),we.copy(M.scissor),Je=M.scissorTest,v.viewport(ve),v.scissor(we),v.setScissorTest(Je),pe=-1;return}else if(Be.__webglFramebuffer===void 0)ie.setupRenderTarget(M);else if(Be.__hasExternalTextures)ie.rebindTextures(M,$.get(M.texture).__webglTexture,$.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const st=M.depthTexture;if(Be.__boundDepthTexture!==st){if(st!==null&&$.has(st)&&(M.width!==st.image.width||M.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(M)}}const Ge=M.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ze=!0);const We=$.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(We[q])?ee=We[q][re]:ee=We[q],te=!0):M.samples>0&&ie.useMultisampledRTT(M)===!1?ee=$.get(M).__webglMultisampledFramebuffer:Array.isArray(We)?ee=We[re]:ee=We,ve.copy(M.viewport),we.copy(M.scissor),Je=M.scissorTest}else ve.copy(Me).multiplyScalar(Z).floor(),we.copy(w).multiplyScalar(Z).floor(),Je=C;if(re!==0&&(ee=oe),v.bindFramebuffer(P.FRAMEBUFFER,ee)&&v.drawBuffers(M,ee),v.viewport(ve),v.scissor(we),v.setScissorTest(Je),te){const Be=$.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,re)}else if(ze){const Be=q;for(let Ge=0;Ge<M.textures.length;Ge++){const We=$.get(M.textures[Ge]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ge,We.__webglTexture,re,Be)}}else if(M!==null&&re!==0){const Be=$.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Be.__webglTexture,re)}pe=-1},this.readRenderTargetPixels=function(M,q,re,ee,te,ze,Ve,Be=0){if(!(M&&M.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge){v.bindFramebuffer(P.FRAMEBUFFER,Ge);try{const We=M.textures[Be],st=We.format,at=We.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be),!E.textureFormatReadable(st)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(at)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=M.width-ee&&re>=0&&re<=M.height-te&&P.readPixels(q,re,ee,te,H.convert(st),H.convert(at),ze)}finally{const We=se!==null?$.get(se).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(M,q,re,ee,te,ze,Ve,Be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge)if(q>=0&&q<=M.width-ee&&re>=0&&re<=M.height-te){v.bindFramebuffer(P.FRAMEBUFFER,Ge);const We=M.textures[Be],st=We.format,at=We.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be),!E.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,ze.byteLength,P.STREAM_READ),P.readPixels(q,re,ee,te,H.convert(st),H.convert(at),0);const Mt=se!==null?$.get(se).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,Mt);const Ot=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await fb(P,Ot,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ze),P.deleteBuffer(qe),P.deleteSync(Ot),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,q=null,re=0){const ee=Math.pow(2,-re),te=Math.floor(M.image.width*ee),ze=Math.floor(M.image.height*ee),Ve=q!==null?q.x:0,Be=q!==null?q.y:0;ie.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,re,0,0,Ve,Be,te,ze),v.unbindTexture()},this.copyTextureToTexture=function(M,q,re=null,ee=null,te=0,ze=0){let Ve,Be,Ge,We,st,at,qe,Mt,Ot;const Lt=M.isCompressedTexture?M.mipmaps[ze]:M.image;if(re!==null)Ve=re.max.x-re.min.x,Be=re.max.y-re.min.y,Ge=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,st=re.min.y,at=re.isBox3?re.min.z:0;else{const Ft=Math.pow(2,-te);Ve=Math.floor(Lt.width*Ft),Be=Math.floor(Lt.height*Ft),M.isDataArrayTexture?Ge=Lt.depth:M.isData3DTexture?Ge=Math.floor(Lt.depth*Ft):Ge=1,We=0,st=0,at=0}ee!==null?(qe=ee.x,Mt=ee.y,Ot=ee.z):(qe=0,Mt=0,Ot=0);const Et=H.convert(q.format),en=H.convert(q.type);let ke;q.isData3DTexture?(ie.setTexture3D(q,0),ke=P.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ie.setTexture2DArray(q,0),ke=P.TEXTURE_2D_ARRAY):(ie.setTexture2D(q,0),ke=P.TEXTURE_2D),v.activeTexture(P.TEXTURE0),v.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),v.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),v.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);const An=v.getParameter(P.UNPACK_ROW_LENGTH),pt=v.getParameter(P.UNPACK_IMAGE_HEIGHT),In=v.getParameter(P.UNPACK_SKIP_PIXELS),jn=v.getParameter(P.UNPACK_SKIP_ROWS),Bi=v.getParameter(P.UNPACK_SKIP_IMAGES);v.pixelStorei(P.UNPACK_ROW_LENGTH,Lt.width),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Lt.height),v.pixelStorei(P.UNPACK_SKIP_PIXELS,We),v.pixelStorei(P.UNPACK_SKIP_ROWS,st),v.pixelStorei(P.UNPACK_SKIP_IMAGES,at);const Os=M.isDataArrayTexture||M.isData3DTexture,Tt=q.isDataArrayTexture||q.isData3DTexture;if(M.isDepthTexture){const Ft=$.get(M),zi=$.get(q),wt=$.get(Ft.__renderTarget),Hi=$.get(zi.__renderTarget);v.bindFramebuffer(P.READ_FRAMEBUFFER,wt.__webglFramebuffer),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Fs=0;Fs<Ge;Fs++)Os&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$.get(M).__webglTexture,te,at+Fs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$.get(q).__webglTexture,ze,Ot+Fs)),P.blitFramebuffer(We,st,Ve,Be,qe,Mt,Ve,Be,P.DEPTH_BUFFER_BIT,P.NEAREST);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(te!==0||M.isRenderTargetTexture||$.has(M)){const Ft=$.get(M),zi=$.get(q);v.bindFramebuffer(P.READ_FRAMEBUFFER,ne),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,G);for(let wt=0;wt<Ge;wt++)Os?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,te,at+wt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ft.__webglTexture,te),Tt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,zi.__webglTexture,ze,Ot+wt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,zi.__webglTexture,ze),te!==0?P.blitFramebuffer(We,st,Ve,Be,qe,Mt,Ve,Be,P.COLOR_BUFFER_BIT,P.NEAREST):Tt?P.copyTexSubImage3D(ke,ze,qe,Mt,Ot+wt,We,st,Ve,Be):P.copyTexSubImage2D(ke,ze,qe,Mt,We,st,Ve,Be);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Tt?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(ke,ze,qe,Mt,Ot,Ve,Be,Ge,Et,en,Lt.data):q.isCompressedArrayTexture?P.compressedTexSubImage3D(ke,ze,qe,Mt,Ot,Ve,Be,Ge,Et,Lt.data):P.texSubImage3D(ke,ze,qe,Mt,Ot,Ve,Be,Ge,Et,en,Lt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ze,qe,Mt,Ve,Be,Et,en,Lt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ze,qe,Mt,Lt.width,Lt.height,Et,Lt.data):P.texSubImage2D(P.TEXTURE_2D,ze,qe,Mt,Ve,Be,Et,en,Lt);v.pixelStorei(P.UNPACK_ROW_LENGTH,An),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt),v.pixelStorei(P.UNPACK_SKIP_PIXELS,In),v.pixelStorei(P.UNPACK_SKIP_ROWS,jn),v.pixelStorei(P.UNPACK_SKIP_IMAGES,Bi),ze===0&&q.generateMipmaps&&P.generateMipmap(ke),v.unbindTexture()},this.initRenderTarget=function(M){$.get(M).__webglFramebuffer===void 0&&ie.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ie.setTextureCube(M,0):M.isData3DTexture?ie.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ie.setTexture2DArray(M,0):ie.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){j=0,W=0,se=null,v.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),n.unpackColorSpace=ft._getUnpackColorSpace()}}const qh={type:"change"},yf={type:"start"},bg={type:"end"},ca=new pl,$h=new Zi,jR=Math.cos(70*pb.DEG2RAD),Ht=new Y,Sn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gc=1e-6;class QR extends tE{constructor(e,n=null){super(e,n),this.state=bt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ar.ROTATE,MIDDLE:ar.DOLLY,RIGHT:ar.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new is,this._lastTargetPosition=new Y,this._quat=new is().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yh,this._sphericalDelta=new yh,this._scale=1,this._panOffset=new Y,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new Y,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t1.bind(this),this._onPointerDown=e1.bind(this),this._onPointerUp=n1.bind(this),this._onContextMenu=c1.bind(this),this._onMouseWheel=r1.bind(this),this._onKeyDown=o1.bind(this),this._onTouchStart=a1.bind(this),this._onTouchMove=l1.bind(this),this._onMouseDown=i1.bind(this),this._onMouseMove=s1.bind(this),this._interceptControlDown=u1.bind(this),this._interceptControlUp=f1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qh),this.update(),this.state=bt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Ht.copy(n).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ht.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ca.origin.copy(this.object.position),ca.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ca.direction))<jR?this.object.lookAt(this.target):($h.setFromNormalAndCoplanarPoint(this.object.up,this.target),ca.intersectPlane($h,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gc||this._lastTargetPosition.distanceToSquared(this.target)>gc?(this.dispatchEvent(qh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ht.setFromMatrixColumn(n,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,n){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(n,1):(Ht.setFromMatrixColumn(n,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new je,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function e1(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function t1(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function n1(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bg),this.state=bt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function i1(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=bt.DOLLY;break;case ar.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=bt.ROTATE}break;case ar.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(yf)}function s1(t){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function r1(t){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(t.preventDefault(),this.dispatchEvent(yf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(bg))}function o1(t){this.enabled!==!1&&this._handleKeyDown(t)}function a1(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=bt.TOUCH_ROTATE;break;case nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=bt.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(yf)}function l1(t){switch(this._trackPointer(t),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=bt.NONE}}function c1(t){this.enabled!==!1&&t.preventDefault()}function u1(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function f1(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const d1={class:"page-card"},h1={class:"media-controls"},p1={class:"segmented-control"},m1={key:0,class:"stream-start-time"},g1=["disabled"],_1={key:0,value:""},v1={key:1,value:"",disabled:""},x1=["value"],y1={class:"video-select-control"},S1=["disabled"],M1={key:0,value:""},b1=["value"],E1={class:"switch-control"},T1={class:"segmented-control"},A1={key:0,class:"placeholder"},w1={key:1,class:"stream-workspace"},R1={class:"stream-main"},C1={key:0,class:"video-viewport"},P1=["src","title"],D1={key:0,class:"live-pause-overlay"},L1={key:1,class:"detection-layer"},I1={class:"video-playback-controls"},N1=["title"],U1={key:1,class:"video-viewport"},O1=["src"],F1={key:0,class:"detection-layer"},B1={class:"video-playback-controls"},z1=["title"],H1=["max","value"],k1={key:2,class:"placeholder"},V1={class:"stream-sidebar"},G1={key:0,class:"side-section screw-position-card"},W1={class:"absolute-position"},X1={key:2,class:"telemetry-dashboard"},q1={class:"position-scene-card"},$1={class:"fusion-data-card"},Y1={class:"current-position"},K1={class:"sensor-columns"},Z1={class:"uwb-range-grid"},J1={class:"imu-readout"},j1=["disabled"],Q1={key:3,class:"success"},eC={key:4,class:"alert"},tC={__name:"StreamPage",setup(t){const e=$e([]),n=$e([]),i=$e([]),s=$e([]),r=$e("history"),o=$e(""),a=$e(""),l=$e("color"),c=$e("ekf"),u=$e(!0),f=$e(0),d=$e(0),p=$e(!1),g=$e(null),_=$e(null),m=$e(!0),h=$e(!1),S=$e(""),b=$e(""),y=$e(0),A=$e(!1),T=$e(0),D=$e([]),x=$e(null),R=$e(null),F=[{id:1,x:0,y:0,z:0},{id:2,x:20,y:0,z:0},{id:3,x:0,y:12,z:0},{id:4,x:20,y:12,z:0},{id:5,x:0,y:0,z:2.5},{id:6,x:20,y:0,z:2.5},{id:7,x:0,y:12,z:2.5},{id:8,x:20,y:12,z:2.5}],U=[{id:"A-1",type:"M4 hex screw",x:1.2,y:1.2,z:1.1},{id:"A-2",type:"M4 hex screw",x:2,y:1.2,z:1.1},{id:"B-1",type:"M6 socket screw",x:18,y:1.2,z:1.1},{id:"B-2",type:"M6 socket screw",x:18.8,y:1.2,z:1.1},{id:"B-3",type:"M6 socket screw",x:1.2,y:10.8,z:1.1},{id:"B-4",type:"M6 socket screw",x:2,y:10.8,z:1.1},{id:"A-3",type:"M4 hex screw",x:18,y:10.8,z:1.1},{id:"A-4",type:"M4 hex screw",x:18.8,y:10.8,z:1.1}];let V,oe=-1,ne,G,j,W,se,pe,Se,ve,we,Je,rt;const Qe=new Map,K=dt(()=>e.value.filter(I=>!I.endTime).sort((I,H)=>new Date(H.startTime)-new Date(I.startTime))[0]||null),O=dt(()=>e.value.filter(I=>{var H;return I._id!==((H=K.value)==null?void 0:H._id)})),Z=dt(()=>{var I;return(I=K.value)!=null&&I.startTime?new Date(K.value.startTime).toLocaleString("zh-TW"):"尚未開始作業"}),ue=dt(()=>n.value.filter(I=>I.kind===l.value||I.kind==="combined")),me=dt(()=>ue.value.find(I=>I.filename===a.value)),Me=dt(()=>{const I=i.value.filter(H=>{var he;return H.imageId===((he=me.value)==null?void 0:he.filename)});return I.length?I:i.value}),w=dt(()=>({_id:"simulated-screw",objectClass:"螺絲",depth:Number((118+Math.sin(y.value*.18)*3).toFixed(1)),bbox:{x:Math.round(860+Math.sin(y.value*.14)*22),y:Math.round(465+Math.cos(y.value*.11)*12),width:200,height:150}})),C=dt(()=>Math.floor((y.value+20)/4)%13!==0),N=dt(()=>{var he;if(r.value==="live")return i.value.at(-1)||w.value;if(!Me.value.length)return null;const I=new Date(Me.value[0].timestamp).getTime()||((he=me.value)!=null&&he.startedAt?me.value.startedAt*1e3:null);if(!I)return Me.value[0]||w.value;const H=I+f.value*1e3;return Me.value.reduce((le,be)=>Math.abs(new Date(be.timestamp).getTime()-H)<Math.abs(new Date(le.timestamp).getTime()-H)?be:le)}),J=dt(()=>r.value==="live"?i.value.length>0:Me.value.length>0),X=dt(()=>r.value==="live"?!!K.value:!!me.value),Q=dt(()=>u.value&&!A.value&&X.value&&!!N.value&&(J.value||C.value)),_e=dt(()=>N.value?["example_object","screw_simulated"].includes(N.value.objectClass)?"螺絲":N.value.objectClass:"未偵測到螺絲"),ge=dt(()=>`http://localhost:8889/${l.value==="depth"?"cam-depth":"cam-color"}`),ae=I=>Number(I??0).toFixed(3),fe=()=>{var H,he;const I=r.value==="history"?(H=me.value)!=null&&H.startedAt?me.value.startedAt*1e3+f.value*1e3:new Date(((he=N.value)==null?void 0:he.timestamp)||0).getTime():1/0;D.value=s.value.filter(le=>new Date(le.timestamp).getTime()<=I).map(le=>{var be;return(be=le.telemetry)==null?void 0:be.position}).filter(Boolean).slice(-40).map(le=>({...le}))},Ce=I=>new Y(Number((I==null?void 0:I.x)||0),Number((I==null?void 0:I.z)||0),Number((I==null?void 0:I.y)||0)),P=I=>Ce(I),Fe=(I,H)=>{I.userData.hoverLabel=H},Ne=I=>{const H=new bs,he=new sa({color:3900150,roughness:.35,metalness:.35}),le=new rn(new Ls(.24,.12,.24),he),be=new rn(new Ls(.1,.16,.1),he);return be.position.y=.14,H.add(le,be),H.position.copy(P(I)),Fe(H,`基地站 ${I.id}：X ${I.x}、Y ${I.y}、Z ${I.z} m`),H},E=(I=16096779)=>{const H=new bs,he=new sa({color:I,metalness:.72,roughness:.25}),le=new rn(new xo(.045,.045,.25,16),he);le.rotation.z=Math.PI/2;const be=new rn(new xo(.105,.105,.045,16),he);return be.rotation.z=Math.PI/2,be.position.x=-.14,H.add(le,be),H.userData.material=he,H},v=()=>{var Ie;if(!G||!_.value||!se||!pe)return;const I=_.value.telemetry;se.position.copy(Ce(I.position));const H=Math.PI/180,he=I.orientation;se.rotation.set(he.pitch*H,-he.yaw*H,he.roll*H,"YXZ"),pe.position.copy(Ce(_.value.absolutePosition)),pe.visible=!!_.value.absolutePosition&&!I.workspace,Fe(se,`設備：X ${ae(I.position.x)}、Y ${ae(I.position.y)}、Z ${ae(I.position.z)} m；Roll ${ae(he.roll)}°、Pitch ${ae(he.pitch)}°、Yaw ${ae(he.yaw)}°`),_.value.absolutePosition&&Fe(pe,`螺絲：X ${ae(_.value.absolutePosition.x)}、Y ${ae(_.value.absolutePosition.y)}、Z ${ae(_.value.absolutePosition.z)} m`);const le=new xn().setFromPoints(D.value.map(Ce));Se.geometry.dispose(),Se.geometry=le,(((Ie=I.workspace)==null?void 0:Ie.screws)||U).forEach(tt=>{var Qt;const ut=Qe.get(tt.id);if(!ut)return;const fn=tt.type.includes("M4")?2450411:9647082;ut.userData.material.color.setHex(tt.visible?16096779:fn),(Qt=ut.userData.material.emissive)==null||Qt.setHex(tt.visible?7027968:0),Fe(ut,`${tt.type} ${tt.id}：X ${ae(tt.x)}、Y ${ae(tt.y)}、Z ${ae(tt.z)} m${tt.visible?`；已在攝影機視野內，深度 ${ae(tt.depth)} m`:"；未進入攝影機辨識範圍"}`)})},B=async()=>{if(await el(),ne||!x.value){v();return}G=new Rb,G.background=new lt(16777215),j=new On(42,1,.1,100),j.position.set(25,19,26),ne=new JR({antialias:!0}),ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.value.appendChild(ne.domElement),W=new QR(j,ne.domElement),W.target.set(10,1.1,6),W.enableDamping=!0,W.minDistance=8,W.maxDistance=42,G.add(new $b(16777215,13358561,2));const I=new Zb(16777215,2.5);I.position.set(5,7,4),G.add(I);const H=new rn(new Co(20,12),new sa({color:16317180,roughness:.95}));H.rotation.x=-Math.PI/2,H.position.set(10,-.02,6),G.add(H);const he=new eE(20,20,13358561,14870768);he.scale.z=.6,he.position.set(10,0,6),G.add(he),F.forEach(Ie=>G.add(Ne(Ie))),se=new bs;const le=new rn(new vf(.12,20,16),new sa({color:1096065,emissive:289870,emissiveIntensity:.35})),be=new rn(new _f(.45,1.2,24,1,!0),new pf({color:3462041,transparent:!0,opacity:.2,side:ai}));be.rotation.x=-Math.PI/2,be.position.z=.6,se.add(le,be),G.add(se),pe=E(),G.add(pe),U.forEach(Ie=>{const tt=E(Ie.type.includes("M4")?2450411:9647082);tt.position.copy(Ce(Ie)),Fe(tt,`${Ie.type} ${Ie.id}：X ${Ie.x}、Y ${Ie.y}、Z ${Ie.z} m`),Qe.set(Ie.id,tt),G.add(tt)}),Se=new cg(new xn,new gf({color:14427686,linewidth:1})),G.add(Se),ve=new Qb,we=new je,ne.domElement.addEventListener("pointermove",ie),rt=new ResizeObserver($),rt.observe(x.value),$(),v(),ye()},$=()=>{if(!ne||!x.value)return;const{clientWidth:I,clientHeight:H}=x.value;!I||!H||(ne.setSize(I,H),j.aspect=I/H,j.updateProjectionMatrix())},ie=I=>{if(!ne||!R.value)return;const H=ne.domElement.getBoundingClientRect();we.set((I.clientX-H.left)/H.width*2-1,-((I.clientY-H.top)/H.height)*2+1),ve.setFromCamera(we,j);const he=ve.intersectObjects(G.children,!0).map(le=>{let be=le.object;for(;be&&!be.userData.hoverLabel;)be=be.parent;return be}).find(Boolean);R.value.style.display=he?"block":"none",he&&(R.value.textContent=he.userData.hoverLabel,R.value.style.left=`${I.clientX-H.left+12}px`,R.value.style.top=`${I.clientY-H.top+12}px`)},ye=()=>{Je=requestAnimationFrame(ye),W.update(),ne.render(G,j)},Te=()=>{var I;cancelAnimationFrame(Je),rt==null||rt.disconnect(),(I=ne==null?void 0:ne.domElement)==null||I.removeEventListener("pointermove",ie),ne==null||ne.dispose(),ne=null},ce=async()=>{var I,H,he;if(n.value=[],i.value=[],s.value=[],a.value="",f.value=0,!!o.value)try{const[le,be,Ie]=await Promise.all([Nt.get(`/videos/${o.value}`),Nt.get(`/detections/${o.value}`),Nt.get(`/operator-telemetry/${o.value}`)]);n.value=le.data,i.value=be.data.sort((tt,ut)=>new Date(tt.timestamp)-new Date(ut.timestamp)),s.value=Ie.data,a.value=((I=ue.value[0])==null?void 0:I.filename)||"",await xe()}catch(le){S.value=((he=(H=le.response)==null?void 0:H.data)==null?void 0:he.error)||"無法讀取歷史影片或偵測資料。"}},de=async()=>{e.value=(await Nt.get("/operations")).data},xe=async()=>{var I,H,he,le;if(o.value)try{const be={source:r.value};r.value==="history"&&((I=me.value)!=null&&I.startedAt)&&(be.at=me.value.startedAt*1e3+f.value*1e3,s.value=(await Nt.get(`/operator-telemetry/${o.value}`,{params:{at:be.at}})).data),(H=N.value)!=null&&H._id&&N.value._id!=="simulated-screw"&&(be.detectionId=N.value._id),_.value=(await Nt.get(`/positioning/latest/${o.value}`,{params:be})).data,fe(),await B(),v()}catch(be){S.value=((le=(he=be.response)==null?void 0:he.data)==null?void 0:le.error)||"無法讀取定位資料。"}},He=async()=>{if(!(!o.value||r.value!=="live"))try{const[I,H]=await Promise.all([Nt.get(`/detections/${o.value}`),Nt.get(`/operator-telemetry/${o.value}`)]);i.value=I.data.sort((he,le)=>new Date(he.timestamp)-new Date(le.timestamp)),s.value=H.data}catch{}},Le=async()=>{var I,H;h.value=!0,b.value="",S.value="";try{await Nt.post("/simulation/config",{fusionAlgorithm:c.value}),b.value="融合設定已傳送至後端與 AI。",await xe()}catch(he){S.value=((H=(I=he.response)==null?void 0:I.data)==null?void 0:H.error)||"融合設定傳送失敗。"}finally{h.value=!1}},Pe=I=>{f.value=I.target.currentTime,d.value=I.target.duration||0},Xe=async()=>{var I,H;(I=g.value)!=null&&I.paused?await g.value.play():(H=g.value)==null||H.pause()},Ye=async()=>{if(r.value!=="history"||!p.value)return;const I=Math.floor(f.value*2);I!==oe&&(oe=I,await xe())},et=async I=>{Pe(I),await Ye()},z=async I=>{g.value&&(g.value.currentTime=Number(I.target.value),f.value=Number(I.target.value),r.value==="history"&&await xe())},De=async()=>{A.value=!A.value,A.value||(T.value+=1,await He(),await xe())};return es(o,()=>{D.value=[],oe=-1,r.value==="history"?ce():xe()}),es(l,()=>{var I;a.value=((I=ue.value[0])==null?void 0:I.filename)||"",f.value=0}),es(r,async()=>{var I,H;r.value==="history"?(await de(),o.value=((I=O.value[0])==null?void 0:I._id)||"",o.value||(n.value=[],i.value=[],_.value=null)):(o.value=((H=K.value)==null?void 0:H._id)||"",He(),xe())}),os(async()=>{var I;try{const[H,he]=await Promise.all([Nt.get("/operations"),Nt.get("/simulation/config")]);e.value=H.data,c.value=he.data.fusionAlgorithm,o.value=((I=O.value[0])==null?void 0:I._id)||"",V=window.setInterval(async()=>{r.value==="live"&&!A.value&&(y.value+=1,await He(),await xe())},500)}catch{S.value="無法讀取系統資料。"}finally{m.value=!1}}),Vu(()=>{window.clearInterval(V),Te()}),(I,H)=>{var le,be,Ie,tt,ut,fn,Qt,Po,Do,Cr,Ns,Lo,Pr,Dr,Jn,Us,Lr,Ir,ls,Nr,cs,Ur;const he=I_("RouterLink");return Ae(),Re("section",d1,[H[24]||(H[24]=L("div",{class:"section-title"},[L("p",{class:"eyebrow"},"Media"),L("h2",null,"影像串流與末端定位")],-1)),L("div",h1,[L("div",p1,[L("button",{class:Cn({active:r.value==="history"}),type:"button",onClick:H[0]||(H[0]=St=>r.value="history")},"歷史影片",2),L("button",{class:Cn({active:r.value==="live"}),type:"button",onClick:H[1]||(H[1]=St=>r.value="live")},"目前串流",2)]),r.value==="live"?(Ae(),Re("p",m1,"開始時間："+Ee(Z.value),1)):(Ae(),Re(xt,{key:1},[L("label",null,[H[10]||(H[10]=Ct("作業",-1)),gn(L("select",{"onUpdate:modelValue":H[2]||(H[2]=St=>o.value=St),disabled:!O.value.length},[O.value.length?(Ae(),Re("option",v1,"選擇歷史作業")):(Ae(),Re("option",_1,"無歷史紀錄")),(Ae(!0),Re(xt,null,qn(O.value,St=>(Ae(),Re("option",{key:St._id,value:St._id},Ee(new Date(St.startTime).toLocaleString("zh-TW")),9,x1))),128))],8,g1),[[wl,o.value]])]),L("label",y1,[H[11]||(H[11]=Ct("影片",-1)),gn(L("select",{"onUpdate:modelValue":H[3]||(H[3]=St=>a.value=St),disabled:!ue.value.length},[ue.value.length?Vt("",!0):(Ae(),Re("option",M1,"無歷史紀錄")),(Ae(!0),Re(xt,null,qn(ue.value,St=>(Ae(),Re("option",{key:St.filename,value:St.filename},Ee(St.filename),9,b1))),128))],8,S1),[[wl,a.value]])])],64)),L("label",E1,[gn(L("input",{"onUpdate:modelValue":H[4]||(H[4]=St=>u.value=St),type:"checkbox"},null,512),[[X0,u.value]]),H[12]||(H[12]=Ct(" 顯示螺絲偵測",-1))]),L("div",T1,[L("button",{class:Cn({active:l.value==="color"}),type:"button",onClick:H[5]||(H[5]=St=>l.value="color")},"光學影像",2),L("button",{class:Cn({active:l.value==="depth"}),type:"button",onClick:H[6]||(H[6]=St=>l.value="depth")},"深度影像",2)])]),m.value?(Ae(),Re("p",A1,"正在讀取資料…")):(Ae(),Re("div",w1,[L("div",R1,[r.value==="live"?(Ae(),Re("div",C1,[(Ae(),Re("iframe",{key:`${ge.value}-${T.value}`,class:"live-stream-frame",src:ge.value,title:l.value==="depth"?"目前深度串流":"目前光學串流",allow:"autoplay; fullscreen"},null,8,P1)),A.value?(Ae(),Re("div",D1,"⏸")):Vt("",!0),Q.value?(Ae(),Re("div",L1,[L("div",{class:Cn(["detection-box",{"label-below":N.value.bbox.y<30}]),style:oo({left:`${N.value.bbox.x/1920*100}%`,top:`${N.value.bbox.y/1080*100}%`,width:`${N.value.bbox.width/1920*100}%`,height:`${N.value.bbox.height/1080*100}%`})},[L("span",null,Ee(_e.value)+" · "+Ee(N.value.depth),1)],6)])):Vt("",!0),L("div",I1,[L("button",{type:"button",title:A.value?"播放最新串流":"暫停前台顯示",onClick:De},Ee(A.value?"▶":"⏸"),9,N1)])])):me.value?(Ae(),Re("div",U1,[(Ae(),Re("video",{key:me.value.filename,ref_key:"videoPlayer",ref:g,class:Cn(["video-source",{"show-depth":me.value.kind==="combined"&&l.value==="depth"}]),src:me.value.url,playsinline:"",onLoadedmetadata:Pe,onTimeupdate:et,onPlay:H[7]||(H[7]=St=>p.value=!0),onPause:H[8]||(H[8]=St=>p.value=!1)},null,42,O1)),Q.value?(Ae(),Re("div",F1,[L("div",{class:Cn(["detection-box",{"label-below":N.value.bbox.y<30}]),style:oo({left:`${N.value.bbox.x/1920*100}%`,top:`${N.value.bbox.y/1080*100}%`,width:`${N.value.bbox.width/1920*100}%`,height:`${N.value.bbox.height/1080*100}%`})},[L("span",null,Ee(_e.value)+" · "+Ee(N.value.depth),1)],6)])):Vt("",!0),L("div",B1,[L("button",{type:"button",title:p.value?"暫停":"播放",onClick:Xe},Ee(p.value?"⏸":"▶"),9,z1),L("input",{type:"range",min:"0",max:d.value,step:"0.01",value:f.value,onInput:z},null,40,H1),L("span",null,Ee(Math.floor(f.value))+" / "+Ee(Math.floor(d.value))+" 秒",1)])])):(Ae(),Re("p",k1,"此作業尚未找到歷史影片。"))]),L("aside",V1,[(le=_.value)!=null&&le.detection?(Ae(),Re("section",G1,[H[14]||(H[14]=L("h3",null,"螺絲定位",-1)),L("p",null,Ee(_e.value)+"　深度 "+Ee((be=N.value)==null?void 0:be.depth),1),L("p",null,[Ct("模型："+Ee(_.value.detection.detectionAlgorithm),1),H[13]||(H[13]=L("br",null,null,-1)),Ct("融合："+Ee(_.value.fusionAlgorithm),1)]),L("p",null,"相機／設備座標："+Ee(ae(_.value.cameraPosition.x))+", "+Ee(ae(_.value.cameraPosition.y))+", "+Ee(ae(_.value.cameraPosition.z))+" m",1),L("p",null,"螺絲相機座標："+Ee(ae((Ie=_.value.screwCameraPosition)==null?void 0:Ie.x))+", "+Ee(ae((tt=_.value.screwCameraPosition)==null?void 0:tt.y))+", "+Ee(ae((ut=_.value.screwCameraPosition)==null?void 0:ut.z))+" m",1),L("p",W1,"融合絕對座標："+Ee(ae((fn=_.value.absolutePosition)==null?void 0:fn.x))+", "+Ee(ae((Qt=_.value.absolutePosition)==null?void 0:Qt.y))+", "+Ee(ae((Po=_.value.absolutePosition)==null?void 0:Po.z))+" m",1)])):Vt("",!0)])])),_.value?(Ae(),Re("section",X1,[L("div",q1,[H[15]||(H[15]=L("div",{class:"scene-heading"},[L("div",null,[L("h3",null,"操作空間建模")]),L("span",null,"拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標")],-1)),L("p",{class:Cn(["nearby-screw-alert",{inactive:!((Do=_.value.workspace)!=null&&Do.notification)}])},Ee((Cr=_.value.workspace)!=null&&Cr.notification?`提示：${_.value.workspace.notification}`:"附近目前沒有螺絲。"),3),L("div",{ref_key:"sceneContainer",ref:x,class:"three-scene"},[L("div",{ref_key:"sceneTooltip",ref:R,class:"three-tooltip"},null,512)],512),H[16]||(H[16]=sl('<div class="scene-legend"><span><i class="legend-anchor"></i>基地站</span><span><i class="legend-device"></i>設備／攝影機光錐</span><span><i class="legend-screw"></i>M4（藍）／M6（紫）；金色為可辨識</span><span><i class="legend-trail"></i>移動軌跡</span></div>',1))]),L("aside",$1,[H[23]||(H[23]=L("h3",null,"UWB + IMU 融合資料",-1)),L("div",Y1,[H[17]||(H[17]=L("strong",null,"ES-EKF 輸出設備位置",-1)),L("span",null,"X "+Ee(ae(_.value.telemetry.position.x))+"　Y "+Ee(ae(_.value.telemetry.position.y))+"　Z "+Ee(ae(_.value.telemetry.position.z))+" m",1)]),L("div",K1,[L("div",null,[H[18]||(H[18]=L("h4",null,"UWB：8 個基地站距離（m）",-1)),L("div",Z1,[(Ae(!0),Re(xt,null,qn(_.value.telemetry.uwbRanges||[],St=>(Ae(),Re("span",{key:St.stationId},"站 "+Ee(St.stationId+1)+"："+Ee(ae(St.distance)),1))),128))])]),L("div",J1,[H[19]||(H[19]=L("h4",null,"IMU 即時量測",-1)),L("p",null,"加速度："+Ee(ae((Lo=(Ns=_.value.telemetry.imu)==null?void 0:Ns.acceleration)==null?void 0:Lo.x))+", "+Ee(ae((Dr=(Pr=_.value.telemetry.imu)==null?void 0:Pr.acceleration)==null?void 0:Dr.y))+", "+Ee(ae((Us=(Jn=_.value.telemetry.imu)==null?void 0:Jn.acceleration)==null?void 0:Us.z))+" m/s²",1),L("p",null,"角速度："+Ee(ae((Ir=(Lr=_.value.telemetry.imu)==null?void 0:Lr.gyroscope)==null?void 0:Ir.x))+", "+Ee(ae((Nr=(ls=_.value.telemetry.imu)==null?void 0:ls.gyroscope)==null?void 0:Nr.y))+", "+Ee(ae((Ur=(cs=_.value.telemetry.imu)==null?void 0:cs.gyroscope)==null?void 0:Ur.z))+" °/s",1),L("p",null,"姿態：Roll "+Ee(ae(_.value.telemetry.orientation.roll))+"°、Pitch "+Ee(ae(_.value.telemetry.orientation.pitch))+"°、Yaw "+Ee(ae(_.value.telemetry.orientation.yaw))+"°",1)])]),L("label",null,[H[21]||(H[21]=Ct("UWB + IMU 融合演算法",-1)),gn(L("select",{"onUpdate:modelValue":H[9]||(H[9]=St=>c.value=St)},[...H[20]||(H[20]=[L("option",{value:"ekf"},"Error-State Extended Kalman Filter (ES-EKF)",-1),L("option",{value:"complementary"},"Complementary Filter",-1),L("option",{value:"weighted_average"},"Weighted Average",-1)])],512),[[wl,c.value]])]),L("button",{type:"button",disabled:h.value,onClick:Le},Ee(h.value?"傳送中…":"套用融合設定"),9,j1),Zt(he,{class:"calibration-link",to:"/settings/camera-extrinsics"},{default:wa(()=>[...H[22]||(H[22]=[Ct("設定 RGB-D 相機外參 →",-1)])]),_:1})])])):Vt("",!0),b.value?(Ae(),Re("p",Q1,Ee(b.value),1)):Vt("",!0),S.value?(Ae(),Re("p",eC,Ee(S.value),1)):Vt("",!0)])}}},nC={},iC={class:"page-card"};function sC(t,e){return Ae(),Re("section",iC,[...e[0]||(e[0]=[sl('<div class="section-title"><p class="eyebrow">Media</p><h2>語音提示查詢</h2></div><article class="panel"><h3>提示內容</h3><div class="list-card"><div class="item-row"><span>提示 1</span><strong>請保持安全距離</strong></div><div class="item-row"><span>提示 2</span><strong>區域偵測已完成</strong></div><div class="item-row"><span>提示 3</span><strong>即將開始下一段任務</strong></div></div></article>',2)])])}const rC=fl(nC,[["render",sC]]),oC={class:"page-card calibration-page"},aC={class:"panel calibration-panel"},lC={key:0,class:"placeholder"},cC={class:"extrinsics-grid"},uC=["onUpdate:modelValue"],fC={class:"matrix-card"},dC={key:0,class:"calibration-saved"},hC={key:1,class:"success"},pC={key:2,class:"alert"},mC={class:"calibration-actions"},gC=["disabled"],_C=["disabled"],vC={__name:"CameraCalibrationPage",setup(t){const e=$e(!0),n=$e(!1),i=$e(""),s=$e(""),r=$e(""),o=Is({translation:{x:0,y:0,z:0},rotationDegrees:{x:0,y:0,z:0}}),a=g=>Number(g||0)*Math.PI/180,l=dt(()=>{const g=a(o.rotationDegrees.x),_=a(o.rotationDegrees.y),m=a(o.rotationDegrees.z),[h,S]=[Math.cos(g),Math.sin(g)],[b,y]=[Math.cos(_),Math.sin(_)],[A,T]=[Math.cos(m),Math.sin(m)];return[[A*b,A*y*S-T*h,A*y*h+T*S],[T*b,T*y*S+A*h,T*y*h-A*S],[-y,b*S,b*h]]}),c=dt(()=>l.value.map(g=>g.map(_=>_.toFixed(6)).join("   ")).join(`
`)),u=g=>{var _,m;for(const h of["x","y","z"])o.translation[h]=((_=g.translation)==null?void 0:_[h])??0,o.rotationDegrees[h]=((m=g.rotationDegrees)==null?void 0:m[h])??0;r.value=g.updatedAt?new Date(g.updatedAt).toLocaleString("zh-TW"):""},f=async()=>{var g,_;e.value=!0,s.value="";try{u((await Nt.get("/calibration/camera-extrinsics")).data)}catch(m){s.value=((_=(g=m.response)==null?void 0:g.data)==null?void 0:_.error)||"無法讀取相機外參設定。"}finally{e.value=!1}},d=async()=>{var g,_;n.value=!0,s.value="",i.value="";try{const m=(await Nt.put("/calibration/camera-extrinsics",{translation:{...o.translation},rotationDegrees:{...o.rotationDegrees}})).data;u(m),i.value="相機外參已儲存，後端與 AI 可透過校正 API 讀取此設定。"}catch(m){s.value=((_=(g=m.response)==null?void 0:g.data)==null?void 0:_.error)||"儲存相機外參失敗。"}finally{n.value=!1}},p=()=>{u({translation:{x:0,y:0,z:0},rotationDegrees:{x:0,y:0,z:0}}),i.value="",s.value=""};return os(f),(g,_)=>(Ae(),Re("section",oC,[_[10]||(_[10]=sl('<div class="section-title"><p class="eyebrow">Calibration</p><h2>相機外參校正</h2><p class="calibration-lead">設定深度相機座標系 C 轉換至設備／IMU 座標系 B 的固定外參：<code>p<sup>B</sup> = R<sub>C</sub><sup>B</sup> p<sup>C</sup> + t<sub>C</sub><sup>B</sup></code>。</p></div>',1)),L("article",aC,[e.value?(Ae(),Re("p",lC,"正在載入校正設定…")):(Ae(),Re(xt,{key:1},[_[9]||(_[9]=L("div",{class:"calibration-reference"},[L("div",null,[L("strong",null,"設備／IMU 座標 B"),L("span",null,"X：設備前方　Y：左方　Z：上方")]),L("div",null,[L("strong",null,"RGB-D 相機座標 C"),L("span",null,"X：影像右方　Y：影像下方　Z：鏡頭前方")])],-1)),L("div",cC,[L("fieldset",null,[_[3]||(_[3]=L("legend",null,[Ct("平移 t"),L("sub",null,"C"),L("sup",null,"B"),Ct("（公尺）")],-1)),(Ae(),Re(xt,null,qn(["x","y","z"],m=>L("label",{key:`translation-${m}`},[Ct(Ee(m.toUpperCase())+" ",1),gn(L("input",{"onUpdate:modelValue":h=>o.translation[m]=h,type:"number",step:"0.001","aria-label":"translation axis"},null,8,uC),[[Vn,o.translation[m],void 0,{number:!0}]])])),64))]),L("fieldset",null,[_[7]||(_[7]=L("legend",null,[Ct("旋轉 R"),L("sub",null,"C"),L("sup",null,"B"),Ct("（Euler 角，度）")],-1)),L("label",null,[_[4]||(_[4]=Ct("Roll（繞 X 軸）",-1)),gn(L("input",{"onUpdate:modelValue":_[0]||(_[0]=m=>o.rotationDegrees.x=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[Vn,o.rotationDegrees.x,void 0,{number:!0}]])]),L("label",null,[_[5]||(_[5]=Ct("Pitch（繞 Y 軸）",-1)),gn(L("input",{"onUpdate:modelValue":_[1]||(_[1]=m=>o.rotationDegrees.y=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[Vn,o.rotationDegrees.y,void 0,{number:!0}]])]),L("label",null,[_[6]||(_[6]=Ct("Yaw（繞 Z 軸）",-1)),gn(L("input",{"onUpdate:modelValue":_[2]||(_[2]=m=>o.rotationDegrees.z=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[Vn,o.rotationDegrees.z,void 0,{number:!0}]])])])]),L("div",fC,[_[8]||(_[8]=L("div",null,[L("strong",null,[Ct("計算後的旋轉矩陣 R"),L("sub",null,"C"),L("sup",null,"B")]),L("small",null,"採用 Z(Yaw) → Y(Pitch) → X(Roll) 的旋轉順序。")],-1)),L("pre",null,Ee(c.value),1)]),r.value?(Ae(),Re("p",dC,"最後儲存："+Ee(r.value),1)):Vt("",!0),i.value?(Ae(),Re("p",hC,Ee(i.value),1)):Vt("",!0),s.value?(Ae(),Re("p",pC,Ee(s.value),1)):Vt("",!0),L("div",mC,[L("button",{type:"button",class:"secondary-button",disabled:n.value,onClick:p},"重設為零值",8,gC),L("button",{type:"button",disabled:n.value,onClick:d},Ee(n.value?"儲存中…":"儲存外參設定"),9,_C)])],64))])]))}},xC=[{path:"/",name:"home",component:wS,meta:{requiresAuth:!0}},{path:"/account/login",name:"account-login",component:OS},{path:"/account/profile",name:"account-profile",component:eM,meta:{requiresAuth:!0}},{path:"/account/password",name:"account-password",component:sM,meta:{requiresAuth:!0}},{path:"/guide",name:"guide",component:lM},{path:"/technology",name:"technology",component:dM},{path:"/history/object",name:"history-object",component:vM,meta:{requiresAuth:!0}},{path:"/history/tasks",name:"history-tasks",component:EM,meta:{requiresAuth:!0}},{path:"/history/operations",name:"history-operations",component:PM,meta:{requiresAuth:!0}},{path:"/media/stream",name:"media-stream",component:tC,meta:{requiresAuth:!0}},{path:"/media/voice",name:"media-voice",component:rC,meta:{requiresAuth:!0}},{path:"/settings/camera-extrinsics",name:"camera-extrinsics",component:vC,meta:{requiresAuth:!0}}],Eg=sx({history:Bv(),routes:xC});Eg.beforeEach(t=>{if(t.meta.requiresAuth&&!Na.value)return{name:"account-login",query:{redirect:t.fullPath}};if(t.name==="account-login"&&Na.value)return{path:"/"}});j0(gx).use(Eg).mount("#app");
