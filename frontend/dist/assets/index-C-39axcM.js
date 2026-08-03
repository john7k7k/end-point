(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ou(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const It={},ur=[],_i=()=>{},Qh=()=>!1,tl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),nl=t=>t.startsWith("onUpdate:"),un=Object.assign,Fu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pg=Object.prototype.hasOwnProperty,Mt=(t,e)=>Pg.call(t,e),tt=Array.isArray,fr=t=>Eo(t)==="[object Map]",Pr=t=>Eo(t)==="[object Set]",Lf=t=>Eo(t)==="[object Date]",rt=t=>typeof t=="function",Gt=t=>typeof t=="string",Si=t=>typeof t=="symbol",At=t=>t!==null&&typeof t=="object",ep=t=>(At(t)||rt(t))&&rt(t.then)&&rt(t.catch),tp=Object.prototype.toString,Eo=t=>tp.call(t),Dg=t=>Eo(t).slice(8,-1),np=t=>Eo(t)==="[object Object]",Bu=t=>Gt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=Ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),il=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lg=/-\w/g,En=il(t=>t.replace(Lg,e=>e.slice(1).toUpperCase())),Ig=/\B([A-Z])/g,ps=il(t=>t.replace(Ig,"-$1").toLowerCase()),sl=il(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tl=il(t=>t?`on${sl(t)}`:""),pi=(t,e)=>!Object.is(t,e),ga=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ip=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},rl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let If;const ol=()=>If||(If=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uo(t){if(tt(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Gt(i)?Fg(i):uo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Gt(t)||At(t))return t}const Ng=/;(?![^(]*\))/g,Ug=/:([^]+)/,Og=/\/\*[^]*?\*\//g;function Fg(t){const e={};return t.replace(Og,"").split(Ng).forEach(n=>{if(n){const i=n.split(Ug);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fn(t){let e="";if(Gt(t))e=t;else if(tt(t))for(let n=0;n<t.length;n++){const i=Fn(t[n]);i&&(e+=i+" ")}else if(At(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zg=Ou(Bg);function sp(t){return!!t||t===""}function kg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Dr(t[i],e[i]);return n}function Dr(t,e){if(t===e)return!0;let n=Lf(t),i=Lf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Si(t),i=Si(e),n||i)return t===e;if(n=tt(t),i=tt(e),n||i)return n&&i?kg(t,e):!1;if(n=At(t),i=At(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Dr(t[o],e[o]))return!1}}return String(t)===String(e)}function zu(t,e){return t.findIndex(n=>Dr(n,e))}const rp=t=>!!(t&&t.__v_isRef===!0),ye=t=>Gt(t)?t:t==null?"":tt(t)||At(t)&&(t.toString===tp||!rt(t.toString))?rp(t)?ye(t.value):JSON.stringify(t,op,2):String(t),op=(t,e)=>rp(e)?op(t,e.value):fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Al(i,r)+" =>"]=s,n),{})}:Pr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Al(n))}:Si(e)?Al(e):At(e)&&!tt(e)&&!np(e)?String(e):e,Al=(t,e="")=>{var n;return Si(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class Vg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&on&&(on.active?(this.parent=on,this.index=(on.scopes||(on.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){if(this._on>0&&--this._on===0){if(on===this)on=this.prevScope;else{let e=on;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Hg(){return on}let Ot;const wl=new WeakSet;class ap{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&(on.active?on.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wl.has(this)&&(wl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nf(this),up(this);const e=Ot,n=Qn;Ot=this,Qn=!0;try{return this.fn()}finally{fp(this),Ot=e,Qn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hu(e);this.deps=this.depsTail=void 0,Nf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ec(this)&&this.run()}get dirty(){return Ec(this)}}let lp=0,io,so;function cp(t,e=!1){if(t.flags|=8,e){t.next=so,so=t;return}t.next=io,io=t}function ku(){lp++}function Vu(){if(--lp>0)return;if(so){let e=so;for(so=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;io;){let e=io;for(io=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Hu(i),Gg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Ec(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===fo)||(t.globalVersion=fo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ec(t))))return;t.flags|=2;const e=t.dep,n=Ot,i=Qn;Ot=t,Qn=!0;try{up(t);const s=t.fn(t._value);(e.version===0||pi(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ot=n,Qn=i,fp(t),t.flags&=-3}}function Hu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Hu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qn=!0;const hp=[];function ki(){hp.push(Qn),Qn=!1}function Vi(){const t=hp.pop();Qn=t===void 0?!0:t}function Nf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ot;Ot=void 0;try{e()}finally{Ot=n}}}let fo=0;class Wg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ot||!Qn||Ot===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ot)n=this.activeLink=new Wg(Ot,this),Ot.deps?(n.prevDep=Ot.depsTail,Ot.depsTail.nextDep=n,Ot.depsTail=n):Ot.deps=Ot.depsTail=n,pp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ot.depsTail,n.nextDep=void 0,Ot.depsTail.nextDep=n,Ot.depsTail=n,Ot.deps===n&&(Ot.deps=i)}return n}trigger(e){this.version++,fo++,this.notify(e)}notify(e){ku();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vu()}}}function pp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tc=new WeakMap,Ns=Symbol(""),Ac=Symbol(""),ho=Symbol("");function mn(t,e,n){if(Qn&&Ot){let i=Tc.get(t);i||Tc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Gu),s.map=i,s.key=n),s.track()}}function Ii(t,e,n,i,s,r){const o=Tc.get(t);if(!o){fo++;return}const a=l=>{l&&l.trigger()};if(ku(),e==="clear")o.forEach(a);else{const l=tt(t),c=l&&Bu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ho||!Si(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ho)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ns)),fr(t)&&a(o.get(Ac)));break;case"delete":l||(a(o.get(Ns)),fr(t)&&a(o.get(Ac)));break;case"set":fr(t)&&a(o.get(Ns));break}}Vu()}function Xs(t){const e=St(t);return e===t?e:(mn(e,"iterate",ho),Xn(t)?e:e.map(ni))}function al(t){return mn(t=St(t),"iterate",ho),t}function fi(t,e){return Hi(t)?vr(Us(t)?ni(e):e):ni(e)}const Xg={__proto__:null,[Symbol.iterator](){return Rl(this,Symbol.iterator,t=>fi(this,t))},concat(...t){return Xs(this).concat(...t.map(e=>tt(e)?Xs(e):e))},entries(){return Rl(this,"entries",t=>(t[1]=fi(this,t[1]),t))},every(t,e){return Ei(this,"every",t,e,void 0,arguments)},filter(t,e){return Ei(this,"filter",t,e,n=>n.map(i=>fi(this,i)),arguments)},find(t,e){return Ei(this,"find",t,e,n=>fi(this,n),arguments)},findIndex(t,e){return Ei(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ei(this,"findLast",t,e,n=>fi(this,n),arguments)},findLastIndex(t,e){return Ei(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ei(this,"forEach",t,e,void 0,arguments)},includes(...t){return Cl(this,"includes",t)},indexOf(...t){return Cl(this,"indexOf",t)},join(t){return Xs(this).join(t)},lastIndexOf(...t){return Cl(this,"lastIndexOf",t)},map(t,e){return Ei(this,"map",t,e,void 0,arguments)},pop(){return zr(this,"pop")},push(...t){return zr(this,"push",t)},reduce(t,...e){return Uf(this,"reduce",t,e)},reduceRight(t,...e){return Uf(this,"reduceRight",t,e)},shift(){return zr(this,"shift")},some(t,e){return Ei(this,"some",t,e,void 0,arguments)},splice(...t){return zr(this,"splice",t)},toReversed(){return Xs(this).toReversed()},toSorted(t){return Xs(this).toSorted(t)},toSpliced(...t){return Xs(this).toSpliced(...t)},unshift(...t){return zr(this,"unshift",t)},values(){return Rl(this,"values",t=>fi(this,t))}};function Rl(t,e,n){const i=al(t),s=i[e]();return i!==t&&!Xn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const qg=Array.prototype;function Ei(t,e,n,i,s,r){const o=al(t),a=o!==t&&!Xn(t),l=o[e];if(l!==qg[e]){const f=l.apply(t,r);return a?ni(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,fi(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Uf(t,e,n,i){const s=al(t),r=s!==t&&!Xn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=fi(t,c)),n.call(this,c,fi(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?fi(t,l):l}function Cl(t,e,n){const i=St(t);mn(i,"iterate",ho);const s=i[e](...n);return(s===-1||s===!1)&&qu(n[0])?(n[0]=St(n[0]),i[e](...n)):s}function zr(t,e,n=[]){ki(),ku();const i=St(t)[e].apply(t,n);return Vu(),Vi(),i}const $g=Ou("__proto__,__v_isRef,__isVue"),mp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Si));function Yg(t){Si(t)||(t=String(t));const e=St(this);return mn(e,"has",t),e.hasOwnProperty(t)}class gp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?s_:yp:r?xp:vp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=tt(e);if(!s){let l;if(o&&(l=Xg[n]))return l;if(n==="hasOwnProperty")return Yg}const a=Reflect.get(e,n,vn(e)?e:i);if((Si(n)?mp.has(n):$g(n))||(s||mn(e,"get",n),r))return a;if(vn(a)){const l=o&&Bu(n)?a:a.value;return s&&At(l)?Rc(l):l}return At(a)?s?Rc(a):ms(a):a}}class _p extends gp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=tt(e)&&Bu(n);if(!this._isShallow){const c=Hi(r);if(!Xn(i)&&!Hi(i)&&(r=St(r),i=St(i)),!o&&vn(r)&&!vn(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:Mt(e,n),l=Reflect.set(e,n,i,vn(e)?e:s);return e===St(s)&&l&&(a?pi(i,r)&&Ii(e,"set",n,i):Ii(e,"add",n,i)),l}deleteProperty(e,n){const i=Mt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ii(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Si(n)||!mp.has(n))&&mn(e,"has",n),i}ownKeys(e){return mn(e,"iterate",tt(e)?"length":Ns),Reflect.ownKeys(e)}}class Kg extends gp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Zg=new _p,Jg=new Kg,jg=new _p(!0);const wc=t=>t,Bo=t=>Reflect.getPrototypeOf(t);function Qg(t,e,n){return function(...i){const s=this.__v_raw,r=St(s),o=fr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?wc:e?vr:ni;return!e&&mn(r,"iterate",l?Ac:Ns),un(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function zo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function e_(t,e){const n={get(s){const r=this.__v_raw,o=St(r),a=St(s);t||(pi(s,a)&&mn(o,"get",s),mn(o,"get",a));const{has:l}=Bo(o),c=e?wc:t?vr:ni;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&mn(St(s),"iterate",Ns),s.size},has(s){const r=this.__v_raw,o=St(r),a=St(s);return t||(pi(s,a)&&mn(o,"has",s),mn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=St(a),c=e?wc:t?vr:ni;return!t&&mn(l,"iterate",Ns),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return un(n,t?{add:zo("add"),set:zo("set"),delete:zo("delete"),clear:zo("clear")}:{add(s){const r=St(this),o=Bo(r),a=St(s),l=!e&&!Xn(s)&&!Hi(s)?a:s;return o.has.call(r,l)||pi(s,l)&&o.has.call(r,s)||pi(a,l)&&o.has.call(r,a)||(r.add(l),Ii(r,"add",l,l)),this},set(s,r){!e&&!Xn(r)&&!Hi(r)&&(r=St(r));const o=St(this),{has:a,get:l}=Bo(o);let c=a.call(o,s);c||(s=St(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?pi(r,u)&&Ii(o,"set",s,r):Ii(o,"add",s,r),this},delete(s){const r=St(this),{has:o,get:a}=Bo(r);let l=o.call(r,s);l||(s=St(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ii(r,"delete",s,void 0),c},clear(){const s=St(this),r=s.size!==0,o=s.clear();return r&&Ii(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Qg(s,t,e)}),n}function Wu(t,e){const n=e_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Mt(n,s)&&s in i?n:i,s,r)}const t_={get:Wu(!1,!1)},n_={get:Wu(!1,!0)},i_={get:Wu(!0,!1)};const vp=new WeakMap,xp=new WeakMap,yp=new WeakMap,s_=new WeakMap;function r_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ms(t){return Hi(t)?t:Xu(t,!1,Zg,t_,vp)}function Sp(t){return Xu(t,!1,jg,n_,xp)}function Rc(t){return Xu(t,!0,Jg,i_,yp)}function Xu(t,e,n,i,s){if(!At(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=r_(Dg(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Us(t){return Hi(t)?Us(t.__v_raw):!!(t&&t.__v_isReactive)}function Hi(t){return!!(t&&t.__v_isReadonly)}function Xn(t){return!!(t&&t.__v_isShallow)}function qu(t){return t?!!t.__v_raw:!1}function St(t){const e=t&&t.__v_raw;return e?St(e):t}function o_(t){return!Mt(t,"__v_skip")&&Object.isExtensible(t)&&ip(t,"__v_skip",!0),t}const ni=t=>At(t)?ms(t):t,vr=t=>At(t)?Rc(t):t;function vn(t){return t?t.__v_isRef===!0:!1}function qe(t){return Mp(t,!1)}function a_(t){return Mp(t,!0)}function Mp(t,e){return vn(t)?t:new l_(t,e)}class l_{constructor(e,n){this.dep=new Gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:St(e),this._value=n?e:ni(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Xn(e)||Hi(e);e=i?e:St(e),pi(e,n)&&(this._rawValue=e,this._value=i?e:ni(e),this.dep.trigger())}}function Pn(t){return vn(t)?t.value:t}const c_={get:(t,e,n)=>e==="__v_raw"?t:Pn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return vn(s)&&!vn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function bp(t){return Us(t)?t:new Proxy(t,c_)}class u_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return cp(this,!0),!0}get value(){const e=this.dep.track();return dp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function f_(t,e,n=!1){let i,s;return rt(t)?i=t:(i=t.get,s=t.set),new u_(i,s,n)}const ko={},Pa=new WeakMap;let ws;function d_(t,e=!1,n=ws){if(n){let i=Pa.get(n);i||Pa.set(n,i=[]),i.push(t)}}function h_(t,e,n=It){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=y=>s?y:Xn(y)||s===!1||s===0?Ni(y,1):Ni(y);let u,f,d,p,g=!1,v=!1;if(vn(t)?(f=()=>t.value,g=Xn(t)):Us(t)?(f=()=>c(t),g=!0):tt(t)?(v=!0,g=t.some(y=>Us(y)||Xn(y)),f=()=>t.map(y=>{if(vn(y))return y.value;if(Us(y))return c(y);if(rt(y))return l?l(y,2):y()})):rt(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){ki();try{d()}finally{Vi()}}const y=ws;ws=u;try{return l?l(t,3,[p]):t(p)}finally{ws=y}}:f=_i,e&&s){const y=f,A=s===!0?1/0:s;f=()=>Ni(y(),A)}const m=Hg(),h=()=>{u.stop(),m&&m.active&&Fu(m.effects,u)};if(r&&e){const y=e;e=(...A)=>{const T=y(...A);return h(),T}}let M=v?new Array(t.length).fill(ko):ko;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(y||s||g||(v?A.some((T,L)=>pi(T,M[L])):pi(A,M))){d&&d();const T=ws;ws=u;try{const L=[A,M===ko?void 0:v&&M[0]===ko?[]:M,p];M=A,l?l(e,3,L):e(...L)}finally{ws=T}}}else u.run()};return a&&a(E),u=new ap(f),u.scheduler=o?()=>o(E,!1):E,p=y=>d_(y,!1,u),d=u.onStop=()=>{const y=Pa.get(u);if(y){if(l)l(y,4);else for(const A of y)A();Pa.delete(u)}},e?i?E(!0):M=u.run():o?o(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Ni(t,e=1/0,n){if(e<=0||!At(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,vn(t))Ni(t.value,e,n);else if(tt(t))for(let i=0;i<t.length;i++)Ni(t[i],e,n);else if(Pr(t)||fr(t))t.forEach(i=>{Ni(i,e,n)});else if(np(t)){for(const i in t)Ni(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ni(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function To(t,e,n,i){try{return i?t(...i):t()}catch(s){ll(s,e,n)}}function ii(t,e,n,i){if(rt(t)){const s=To(t,e,n,i);return s&&ep(s)&&s.catch(r=>{ll(r,e,n)}),s}if(tt(t)){const s=[];for(let r=0;r<t.length;r++)s.push(ii(t[r],e,n,i));return s}}function ll(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||It;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){ki(),To(r,null,10,[t,l,c]),Vi();return}}p_(t,n,s,i,o)}function p_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const bn=[];let ui=-1;const dr=[];let is=null,ar=0;const Ep=Promise.resolve();let Da=null;function cl(t){const e=Da||Ep;return t?e.then(this?t.bind(this):t):e}function m_(t){let e=ui+1,n=bn.length;for(;e<n;){const i=e+n>>>1,s=bn[i],r=po(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function $u(t){if(!(t.flags&1)){const e=po(t),n=bn[bn.length-1];!n||!(t.flags&2)&&e>=po(n)?bn.push(t):bn.splice(m_(e),0,t),t.flags|=1,Tp()}}function Tp(){Da||(Da=Ep.then(wp))}function g_(t){tt(t)?dr.push(...t):is&&t.id===-1?is.splice(ar+1,0,t):t.flags&1||(dr.push(t),t.flags|=1),Tp()}function Of(t,e,n=ui+1){for(;n<bn.length;n++){const i=bn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;bn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ap(t){if(dr.length){const e=[...new Set(dr)].sort((n,i)=>po(n)-po(i));if(dr.length=0,is){is.push(...e);return}for(is=e,ar=0;ar<is.length;ar++){const n=is[ar];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}is=null,ar=0}}const po=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wp(t){try{for(ui=0;ui<bn.length;ui++){const e=bn[ui];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),To(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ui<bn.length;ui++){const e=bn[ui];e&&(e.flags&=-2)}ui=-1,bn.length=0,Ap(),Da=null,(bn.length||dr.length)&&wp()}}let zn=null,Rp=null;function La(t){const e=zn;return zn=t,Rp=t&&t.type.__scopeId||null,e}function Ia(t,e=zn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Oa(-1);const r=La(e),o=Os.length;let a;try{a=t(...s)}finally{for(let l=Os.length;l>o;l--)jp();La(r),i._d&&Oa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Jt(t,e){if(zn===null)return t;const n=hl(zn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=It]=e[s];r&&(rt(r)&&(r={mounted:r,updated:r}),r.deep&&Ni(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ss(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ki(),ii(l,n,8,[t.el,a,t,e]),Vi())}}function _a(t,e){if(gn){let n=gn.provides;const i=gn.parent&&gn.parent.provides;i===n&&(n=gn.provides=Object.create(i)),n[t]=e}}function ei(t,e,n=!1){const i=m0();if(i||hr){let s=hr?hr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&rt(e)?e.call(i&&i.proxy):e}}const __=Symbol.for("v-scx"),v_=()=>ei(__);function Ui(t,e,n){return Cp(t,e,n)}function Cp(t,e,n=It){const{immediate:i,deep:s,flush:r,once:o}=n,a=un({},n),l=e&&i||!e&&r!=="post";let c;if(go){if(r==="sync"){const p=v_();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=_i,p.resume=_i,p.pause=_i,p}}const u=gn;a.call=(p,g,v)=>ii(p,u,g,v);let f=!1;r==="post"?a.scheduler=p=>{Cn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():$u(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=h_(t,e,a);return go&&(c?c.push(d):l&&d()),d}function x_(t,e,n){const i=this.proxy,s=Gt(t)?t.includes(".")?Pp(i,t):()=>i[t]:t.bind(i,i);let r;rt(e)?r=e:(r=e.handler,n=e);const o=Ao(this),a=Cp(s,r.bind(i),n);return o(),a}function Pp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const y_=Symbol("_vte"),S_=t=>t.__isTeleport,Pl=Symbol("_leaveCb");function Yu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Yu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dp(t,e){return rt(t)?un({name:t.name},e,{setup:t}):t}function Lp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ff(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Na=new WeakMap;function ro(t,e,n,i,s=!1){if(tt(t)){t.forEach((v,m)=>ro(v,e&&(tt(e)?e[m]:e),n,i,s));return}if(oo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ro(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?hl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===It?a.refs={}:a.refs,f=a.setupState,d=St(f),p=f===It?Qh:v=>Ff(u,v)?!1:Mt(d,v),g=(v,m)=>!(m&&Ff(u,m));if(c!=null&&c!==l){if(Bf(e),Gt(c))u[c]=null,p(c)&&(f[c]=null);else if(vn(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(rt(l))To(l,a,12,[o,u]);else{const v=Gt(l),m=vn(l);if(v||m){const h=()=>{if(t.f){const M=v?p(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)tt(M)&&Fu(M,r);else if(tt(M))M.includes(r)||M.push(r);else if(v)u[l]=[r],p(l)&&(f[l]=u[l]);else{const E=[r];g(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else v?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const M=()=>{h(),Na.delete(t)};M.id=-1,Na.set(t,M),Cn(M,n)}else Bf(t),h()}}}function Bf(t){const e=Na.get(t);e&&(e.flags|=8,Na.delete(t))}ol().requestIdleCallback;ol().cancelIdleCallback;const oo=t=>!!t.type.__asyncLoader,Ip=t=>t.type.__isKeepAlive;function M_(t,e){Np(t,"a",e)}function b_(t,e){Np(t,"da",e)}function Np(t,e,n=gn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ul(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ip(s.parent.vnode)&&E_(i,e,n,s),s=s.parent}}function E_(t,e,n,i){const s=ul(e,t,i,!0);Ku(()=>{Fu(i[e],s)},n)}function ul(t,e,n=gn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ki();const a=Ao(n),l=ii(e,n,t,o);return a(),Vi(),l});return i?s.unshift(r):s.push(r),r}}const Xi=t=>(e,n=gn)=>{(!go||t==="sp")&&ul(t,(...i)=>e(...i),n)},T_=Xi("bm"),gs=Xi("m"),A_=Xi("bu"),w_=Xi("u"),R_=Xi("bum"),Ku=Xi("um"),C_=Xi("sp"),P_=Xi("rtg"),D_=Xi("rtc");function L_(t,e=gn){ul("ec",t,e)}const I_="components";function N_(t,e){return O_(I_,t,!0,e)||t}const U_=Symbol.for("v-ndc");function O_(t,e,n=!0,i=!1){const s=zn||gn;if(s){const r=s.type;{const a=y0(r,!1);if(a&&(a===e||a===En(e)||a===sl(En(e))))return r}const o=zf(s[t]||r[t],e)||zf(s.appContext[t],e);return!o&&i?r:o}}function zf(t,e){return t&&(t[e]||t[En(e)]||t[sl(En(e))])}function ti(t,e,n,i){let s;const r=n,o=tt(t);if(o||Gt(t)){const a=o&&Us(t);let l=!1,c=!1;a&&(l=!Xn(t),c=Hi(t),t=al(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?vr(ni(t[u])):ni(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(At(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const Cc=t=>t?nm(t)?hl(t):Cc(t.parent):null,ao=un(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cc(t.parent),$root:t=>Cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Op(t),$forceUpdate:t=>t.f||(t.f=()=>{$u(t.update)}),$nextTick:t=>t.n||(t.n=cl.bind(t.proxy)),$watch:t=>x_.bind(t)}),Dl=(t,e)=>t!==It&&!t.__isScriptSetup&&Mt(t,e),F_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Dl(i,e))return o[e]=1,i[e];if(s!==It&&Mt(s,e))return o[e]=2,s[e];if(Mt(r,e))return o[e]=3,r[e];if(n!==It&&Mt(n,e))return o[e]=4,n[e];Pc&&(o[e]=0)}}const c=ao[e];let u,f;if(c)return e==="$attrs"&&mn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==It&&Mt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Mt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Dl(s,e)?(s[e]=n,!0):i!==It&&Mt(i,e)?(i[e]=n,!0):Mt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==It&&a[0]!=="$"&&Mt(t,a)||Dl(e,a)||Mt(r,a)||Mt(i,a)||Mt(ao,a)||Mt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Mt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kf(t){return tt(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pc=!0;function B_(t){const e=Op(t),n=t.proxy,i=t.ctx;Pc=!1,e.beforeCreate&&Vf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:M,destroyed:E,unmounted:y,render:A,renderTracked:T,renderTriggered:L,errorCaptured:x,serverPrefetch:R,expose:N,inheritAttrs:I,components:k,directives:ie,filters:re}=e;if(c&&z_(c,i,null),o)for(const G in o){const se=o[G];rt(se)&&(i[G]=se.bind(n))}if(s){const G=s.call(n,n);At(G)&&(t.data=ms(G))}if(Pc=!0,r)for(const G in r){const se=r[G],de=rt(se)?se.bind(n,n):rt(se.get)?se.get.bind(n,n):_i,pe=!rt(se)&&rt(se.set)?se.set.bind(n):_i,me=_t({get:de,set:pe});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>me.value,set:Te=>me.value=Te})}if(a)for(const G in a)Up(a[G],i,n,G);if(l){const G=rt(l)?l.call(n):l;Reflect.ownKeys(G).forEach(se=>{_a(se,G[se])})}u&&Vf(u,t,"c");function te(G,se){tt(se)?se.forEach(de=>G(de.bind(n))):se&&G(se.bind(n))}if(te(T_,f),te(gs,d),te(A_,p),te(w_,g),te(M_,v),te(b_,m),te(L_,x),te(D_,T),te(P_,L),te(R_,M),te(Ku,y),te(C_,R),tt(N))if(N.length){const G=t.exposed||(t.exposed={});N.forEach(se=>{Object.defineProperty(G,se,{get:()=>n[se],set:de=>n[se]=de,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===_i&&(t.render=A),I!=null&&(t.inheritAttrs=I),k&&(t.components=k),ie&&(t.directives=ie),R&&Lp(t)}function z_(t,e,n=_i){tt(t)&&(t=Dc(t));for(const i in t){const s=t[i];let r;At(s)?"default"in s?r=ei(s.from||i,s.default,!0):r=ei(s.from||i):r=ei(s),vn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Vf(t,e,n){ii(tt(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Up(t,e,n,i){let s=i.includes(".")?Pp(n,i):()=>n[i];if(Gt(t)){const r=e[t];rt(r)&&Ui(s,r)}else if(rt(t))Ui(s,t.bind(n));else if(At(t))if(tt(t))t.forEach(r=>Up(r,e,n,i));else{const r=rt(t.handler)?t.handler.bind(n):e[t.handler];rt(r)&&Ui(s,r,t)}}function Op(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ua(l,c,o,!0)),Ua(l,e,o)),At(e)&&r.set(e,l),l}function Ua(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ua(t,r,n,!0),s&&s.forEach(o=>Ua(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=k_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const k_={data:Hf,props:Gf,emits:Gf,methods:jr,computed:jr,beforeCreate:yn,created:yn,beforeMount:yn,mounted:yn,beforeUpdate:yn,updated:yn,beforeDestroy:yn,beforeUnmount:yn,destroyed:yn,unmounted:yn,activated:yn,deactivated:yn,errorCaptured:yn,serverPrefetch:yn,components:jr,directives:jr,watch:H_,provide:Hf,inject:V_};function Hf(t,e){return e?t?function(){return un(rt(t)?t.call(this,this):t,rt(e)?e.call(this,this):e)}:e:t}function V_(t,e){return jr(Dc(t),Dc(e))}function Dc(t){if(tt(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yn(t,e){return t?[...new Set([].concat(t,e))]:e}function jr(t,e){return t?un(Object.create(null),t,e):e}function Gf(t,e){return t?tt(t)&&tt(e)?[...new Set([...t,...e])]:un(Object.create(null),kf(t),kf(e??{})):e}function H_(t,e){if(!t)return e;if(!e)return t;const n=un(Object.create(null),t);for(const i in e)n[i]=yn(t[i],e[i]);return n}function Fp(){return{app:null,config:{isNativeTag:Qh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let G_=0;function W_(t,e){return function(i,s=null){rt(i)||(i=un({},i)),s!=null&&!At(s)&&(s=null);const r=Fp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:G_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:M0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&rt(u.install)?(o.add(u),u.install(c,...f)):rt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||ln(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,hl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ii(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=hr;hr=c;try{return u()}finally{hr=f}}};return c}}let hr=null;const X_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${En(e)}Modifiers`]||t[`${ps(e)}Modifiers`];function q_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||It;let s=n;const r=e.startsWith("update:"),o=r&&X_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Gt(u)?u.trim():u)),o.number&&(s=n.map(rl)));let a,l=i[a=Tl(e)]||i[a=Tl(En(e))];!l&&r&&(l=i[a=Tl(ps(e))]),l&&ii(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ii(c,t,6,s)}}const $_=new WeakMap;function Bp(t,e,n=!1){const i=n?$_:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!rt(t)){const l=c=>{const u=Bp(c,e,!0);u&&(a=!0,un(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(At(t)&&i.set(t,null),null):(tt(r)?r.forEach(l=>o[l]=null):un(o,r),At(t)&&i.set(t,o),o)}function fl(t,e){return!t||!tl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Mt(t,e[0].toLowerCase()+e.slice(1))||Mt(t,ps(e))||Mt(t,e))}function Wf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:v}=t,m=La(t);let h,M;try{if(n.shapeFlag&4){const y=s||i,A=y;h=di(c.call(A,y,u,f,p,d,g)),M=a}else{const y=e;h=di(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),M=e.props?a:Y_(a)}}catch(y){Os.length=0,ll(y,t,1),h=ln(us)}let E=h;if(M&&v!==!1){const y=Object.keys(M),{shapeFlag:A}=E;y.length&&A&7&&(r&&y.some(nl)&&(M=K_(M,r)),E=xr(E,M,!1,!0))}return n.dirs&&(E=xr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Yu(E,n.transition),h=E,La(m),h}const Y_=t=>{let e;for(const n in t)(n==="class"||n==="style"||tl(n))&&((e||(e={}))[n]=t[n]);return e},K_=(t,e)=>{const n={};for(const i in t)(!nl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Z_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Xf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(zp(o,i,d)&&!fl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Xf(i,o,c):!0:!!o;return!1}function Xf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(zp(e,t,r)&&!fl(n,r))return!0}return!1}function zp(t,e,n){const i=t[n],s=e[n];return n==="style"&&At(i)&&At(s)?!Dr(i,s):i!==s}function J_({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const kp={},Vp=()=>Object.create(kp),Hp=t=>Object.getPrototypeOf(t)===kp;function j_(t,e,n,i=!1){const s={},r=Vp();t.propsDefaults=Object.create(null),Gp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Sp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Q_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=St(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(fl(t.emitsOptions,d))continue;const p=e[d];if(l)if(Mt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=En(d);s[g]=Lc(l,a,g,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Gp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!Mt(e,f)&&((u=ps(f))===f||!Mt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Lc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Mt(e,f))&&(delete r[f],c=!0)}c&&Ii(t.attrs,"set","")}function Gp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(no(l))continue;const c=e[l];let u;s&&Mt(s,u=En(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:fl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=St(n),c=a||It;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Lc(s,l,f,c[f],t,!Mt(c,f))}}return o}function Lc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rt(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Ao(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ps(n))&&(i=!0))}return i}const e0=new WeakMap;function Wp(t,e,n=!1){const i=n?e0:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!rt(t)){const u=f=>{l=!0;const[d,p]=Wp(f,e,!0);un(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return At(t)&&i.set(t,ur),ur;if(tt(r))for(let u=0;u<r.length;u++){const f=En(r[u]);qf(f)&&(o[f]=It)}else if(r)for(const u in r){const f=En(u);if(qf(f)){const d=r[u],p=o[f]=tt(d)||rt(d)?{type:d}:un({},d),g=p.type;let v=!1,m=!0;if(tt(g))for(let h=0;h<g.length;++h){const M=g[h],E=rt(M)&&M.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=rt(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||Mt(p,"default"))&&a.push(f)}}const c=[o,a];return At(t)&&i.set(t,c),c}function qf(t){return t[0]!=="$"&&!no(t)}const Zu=t=>t==="_"||t==="_ctx"||t==="$stable",Ju=t=>tt(t)?t.map(di):[di(t)],t0=(t,e,n)=>{if(e._n)return e;const i=Ia((...s)=>Ju(e(...s)),n);return i._c=!1,i},Xp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Zu(s))continue;const r=t[s];if(rt(r))e[s]=t0(s,r,i);else if(r!=null){const o=Ju(r);e[s]=()=>o}}},qp=(t,e)=>{const n=Ju(e);t.slots.default=()=>n},$p=(t,e,n)=>{for(const i in e)(n||!Zu(i))&&(t[i]=e[i])},n0=(t,e,n)=>{const i=t.slots=Vp();if(t.vnode.shapeFlag&32){const s=e._;s?($p(i,e,n),n&&ip(i,"_",s,!0)):Xp(e,i)}else e&&qp(t,e)},i0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=It;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:$p(s,e,n):(r=!e.$stable,Xp(e,s)),o=e}else e&&(qp(t,e),o={default:1});if(r)for(const a in s)!Zu(a)&&o[a]==null&&delete s[a]},Cn=l0;function s0(t){return r0(t)}function r0(t,e){const n=ol();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=_i,insertStaticContent:g}=t,v=(w,P,B,Y=null,z=null,Z=null,ve=void 0,ge=null,ce=!!P.dynamicChildren)=>{if(w===P)return;w&&!kr(w,P)&&(Y=U(w),Te(w,z,Z,!0),w=null),P.patchFlag===-2&&(ce=!1,P.dynamicChildren=null);const{type:ae,ref:Le,shapeFlag:D}=P;switch(ae){case dl:m(w,P,B,Y);break;case us:h(w,P,B,Y);break;case va:w==null&&M(P,B,Y,ve);break;case Et:k(w,P,B,Y,z,Z,ve,ge,ce);break;default:D&1?A(w,P,B,Y,z,Z,ve,ge,ce):D&6?ie(w,P,B,Y,z,Z,ve,ge,ce):(D&64||D&128)&&ae.process(w,P,B,Y,z,Z,ve,ge,ce,xe)}Le!=null&&z?ro(Le,w&&w.ref,Z,P||w,!P):Le==null&&w&&w.ref!=null&&ro(w.ref,null,Z,w,!0)},m=(w,P,B,Y)=>{if(w==null)i(P.el=a(P.children),B,Y);else{const z=P.el=w.el;P.children!==w.children&&c(z,P.children)}},h=(w,P,B,Y)=>{w==null?i(P.el=l(P.children||""),B,Y):P.el=w.el},M=(w,P,B,Y)=>{[w.el,w.anchor]=g(w.children,P,B,Y,w.el,w.anchor)},E=({el:w,anchor:P},B,Y)=>{let z;for(;w&&w!==P;)z=d(w),i(w,B,Y),w=z;i(P,B,Y)},y=({el:w,anchor:P})=>{let B;for(;w&&w!==P;)B=d(w),s(w),w=B;s(P)},A=(w,P,B,Y,z,Z,ve,ge,ce)=>{if(P.type==="svg"?ve="svg":P.type==="math"&&(ve="mathml"),w==null)T(P,B,Y,z,Z,ve,ge,ce);else{const ae=w.el&&w.el._isVueCE?w.el:null;try{ae&&ae._beginPatch(),R(w,P,z,Z,ve,ge,ce)}finally{ae&&ae._endPatch()}}},T=(w,P,B,Y,z,Z,ve,ge)=>{let ce,ae;const{props:Le,shapeFlag:D,transition:ke,dirs:Ie}=w;if(ce=w.el=o(w.type,Z,Le&&Le.is,Le),D&8?u(ce,w.children):D&16&&x(w.children,ce,null,Y,z,Ll(w,Z),ve,ge),Ie&&Ss(w,null,Y,"created"),L(ce,w,w.scopeId,ve,Y),Le){for(const _ in Le)_!=="value"&&!no(_)&&r(ce,_,null,Le[_],Z,Y);"value"in Le&&r(ce,"value",null,Le.value,Z),(ae=Le.onVnodeBeforeMount)&&ai(ae,Y,w)}Ie&&Ss(w,null,Y,"beforeMount");const b=o0(z,ke);b&&ke.beforeEnter(ce),i(ce,P,B),((ae=Le&&Le.onVnodeMounted)||b||Ie)&&Cn(()=>{try{ae&&ai(ae,Y,w),b&&ke.enter(ce),Ie&&Ss(w,null,Y,"mounted")}finally{}},z)},L=(w,P,B,Y,z)=>{if(B&&p(w,B),Y)for(let Z=0;Z<Y.length;Z++)p(w,Y[Z]);if(z){let Z=z.subTree;if(P===Z||Jp(Z.type)&&(Z.ssContent===P||Z.ssFallback===P)){const ve=z.vnode;L(w,ve,ve.scopeId,ve.slotScopeIds,z.parent)}}},x=(w,P,B,Y,z,Z,ve,ge,ce=0)=>{for(let ae=ce;ae<w.length;ae++){const Le=w[ae]=ge?Li(w[ae]):di(w[ae]);v(null,Le,P,B,Y,z,Z,ve,ge)}},R=(w,P,B,Y,z,Z,ve)=>{const ge=P.el=w.el;let{patchFlag:ce,dynamicChildren:ae,dirs:Le}=P;ce|=w.patchFlag&16;const D=w.props||It,ke=P.props||It;let Ie;if(B&&Ms(B,!1),(Ie=ke.onVnodeBeforeUpdate)&&ai(Ie,B,P,w),Le&&Ss(P,w,B,"beforeUpdate"),B&&Ms(B,!0),ae&&(!w.dynamicChildren||w.dynamicChildren.length!==ae.length)&&(ce=0,ve=!1,ae=null),(D.innerHTML&&ke.innerHTML==null||D.textContent&&ke.textContent==null)&&u(ge,""),ae?N(w.dynamicChildren,ae,ge,B,Y,Ll(P,z),Z):ve||se(w,P,ge,null,B,Y,Ll(P,z),Z,!1),ce>0){if(ce&16)I(ge,D,ke,B,z);else if(ce&2&&D.class!==ke.class&&r(ge,"class",null,ke.class,z),ce&4&&r(ge,"style",D.style,ke.style,z),ce&8){const b=P.dynamicProps;for(let _=0;_<b.length;_++){const O=b[_],q=D[O],Q=ke[O];(Q!==q||O==="value")&&r(ge,O,q,Q,z,B)}}ce&1&&w.children!==P.children&&u(ge,P.children)}else!ve&&ae==null&&I(ge,D,ke,B,z);((Ie=ke.onVnodeUpdated)||Le)&&Cn(()=>{Ie&&ai(Ie,B,P,w),Le&&Ss(P,w,B,"updated")},Y)},N=(w,P,B,Y,z,Z,ve)=>{for(let ge=0;ge<P.length;ge++){const ce=w[ge],ae=P[ge],Le=ce.el&&(ce.type===Et||!kr(ce,ae)||ce.shapeFlag&198)?f(ce.el):B;v(ce,ae,Le,null,Y,z,Z,ve,!0)}},I=(w,P,B,Y,z)=>{if(P!==B){if(P!==It)for(const Z in P)!no(Z)&&!(Z in B)&&r(w,Z,P[Z],null,z,Y);for(const Z in B){if(no(Z))continue;const ve=B[Z],ge=P[Z];ve!==ge&&Z!=="value"&&r(w,Z,ge,ve,z,Y)}"value"in B&&r(w,"value",P.value,B.value,z)}},k=(w,P,B,Y,z,Z,ve,ge,ce)=>{const ae=P.el=w?w.el:a(""),Le=P.anchor=w?w.anchor:a("");let{patchFlag:D,dynamicChildren:ke,slotScopeIds:Ie}=P;Ie&&(ge=ge?ge.concat(Ie):Ie),w==null?(i(ae,B,Y),i(Le,B,Y),x(P.children||[],B,Le,z,Z,ve,ge,ce)):D>0&&D&64&&ke&&w.dynamicChildren&&w.dynamicChildren.length===ke.length?(N(w.dynamicChildren,ke,B,z,Z,ve,ge),(P.key!=null||z&&P===z.subTree)&&Yp(w,P,!0)):se(w,P,B,Le,z,Z,ve,ge,ce)},ie=(w,P,B,Y,z,Z,ve,ge,ce)=>{P.slotScopeIds=ge,w==null?P.shapeFlag&512?z.ctx.activate(P,B,Y,ve,ce):re(P,B,Y,z,Z,ve,ce):X(w,P,ce)},re=(w,P,B,Y,z,Z,ve)=>{const ge=w.component=p0(w,Y,z);if(Ip(w)&&(ge.ctx.renderer=xe),g0(ge,!1,ve),ge.asyncDep){if(z&&z.registerDep(ge,te,ve),!w.el){const ce=ge.subTree=ln(us);h(null,ce,P,B),w.placeholder=ce.el}}else te(ge,w,P,B,z,Z,ve)},X=(w,P,B)=>{const Y=P.component=w.component;if(Z_(w,P,B))if(Y.asyncDep&&!Y.asyncResolved){G(Y,P,B);return}else Y.next=P,Y.update();else P.el=w.el,Y.vnode=P},te=(w,P,B,Y,z,Z,ve)=>{const ge=()=>{if(w.isMounted){let{next:D,bu:ke,u:Ie,parent:b,vnode:_}=w;{const we=Kp(w);if(we){D&&(D.el=_.el,G(w,D,ve)),we.asyncDep.then(()=>{Cn(()=>{w.isUnmounted||ae()},z)});return}}let O=D,q;Ms(w,!1),D?(D.el=_.el,G(w,D,ve)):D=_,ke&&ga(ke),(q=D.props&&D.props.onVnodeBeforeUpdate)&&ai(q,b,D,_),Ms(w,!0);const Q=Wf(w),Se=w.subTree;w.subTree=Q,v(Se,Q,f(Se.el),U(Se),w,z,Z),D.el=Q.el,O===null&&J_(w,Q.el),Ie&&Cn(Ie,z),(q=D.props&&D.props.onVnodeUpdated)&&Cn(()=>ai(q,b,D,_),z)}else{let D;const{el:ke,props:Ie}=P,{bm:b,m:_,parent:O,root:q,type:Q}=w,Se=oo(P);Ms(w,!1),b&&ga(b),!Se&&(D=Ie&&Ie.onVnodeBeforeMount)&&ai(D,O,P),Ms(w,!0);{q.ce&&q.ce._hasShadowRoot()&&q.ce._injectChildStyle(Q,w.parent?w.parent.type:void 0);const we=w.subTree=Wf(w);v(null,we,B,Y,w,z,Z),P.el=we.el}if(_&&Cn(_,z),!Se&&(D=Ie&&Ie.onVnodeMounted)){const we=P;Cn(()=>ai(D,O,we),z)}(P.shapeFlag&256||O&&oo(O.vnode)&&O.vnode.shapeFlag&256)&&w.a&&Cn(w.a,z),w.isMounted=!0,P=B=Y=null}};w.scope.on();const ce=w.effect=new ap(ge);w.scope.off();const ae=w.update=ce.run.bind(ce),Le=w.job=ce.runIfDirty.bind(ce);Le.i=w,Le.id=w.uid,ce.scheduler=()=>$u(Le),Ms(w,!0),ae()},G=(w,P,B)=>{P.component=w;const Y=w.vnode.props;w.vnode=P,w.next=null,Q_(w,P.props,Y,B),i0(w,P.children,B),ki(),Of(w),Vi()},se=(w,P,B,Y,z,Z,ve,ge,ce=!1)=>{const ae=w&&w.children,Le=w?w.shapeFlag:0,D=P.children,{patchFlag:ke,shapeFlag:Ie}=P;if(ke>0){if(ke&128){pe(ae,D,B,Y,z,Z,ve,ge,ce);return}else if(ke&256){de(ae,D,B,Y,z,Z,ve,ge,ce);return}}Ie&8?(Le&16&&K(ae,z,Z),D!==ae&&u(B,D)):Le&16?Ie&16?pe(ae,D,B,Y,z,Z,ve,ge,ce):K(ae,z,Z,!0):(Le&8&&u(B,""),Ie&16&&x(D,B,Y,z,Z,ve,ge,ce))},de=(w,P,B,Y,z,Z,ve,ge,ce)=>{w=w||ur,P=P||ur;const ae=w.length,Le=P.length,D=Math.min(ae,Le);let ke;for(ke=0;ke<D;ke++){const Ie=P[ke]=ce?Li(P[ke]):di(P[ke]);v(w[ke],Ie,B,null,z,Z,ve,ge,ce)}ae>Le?K(w,z,Z,!0,!1,D):x(P,B,Y,z,Z,ve,ge,ce,D)},pe=(w,P,B,Y,z,Z,ve,ge,ce)=>{let ae=0;const Le=P.length;let D=w.length-1,ke=Le-1;for(;ae<=D&&ae<=ke;){const Ie=w[ae],b=P[ae]=ce?Li(P[ae]):di(P[ae]);if(kr(Ie,b))v(Ie,b,B,null,z,Z,ve,ge,ce);else break;ae++}for(;ae<=D&&ae<=ke;){const Ie=w[D],b=P[ke]=ce?Li(P[ke]):di(P[ke]);if(kr(Ie,b))v(Ie,b,B,null,z,Z,ve,ge,ce);else break;D--,ke--}if(ae>D){if(ae<=ke){const Ie=ke+1,b=Ie<Le?P[Ie].el:Y;for(;ae<=ke;)v(null,P[ae]=ce?Li(P[ae]):di(P[ae]),B,b,z,Z,ve,ge,ce),ae++}}else if(ae>ke)for(;ae<=D;)Te(w[ae],z,Z,!0),ae++;else{const Ie=ae,b=ae,_=new Map;for(ae=b;ae<=ke;ae++){const Ae=P[ae]=ce?Li(P[ae]):di(P[ae]);Ae.key!=null&&_.set(Ae.key,ae)}let O,q=0;const Q=ke-b+1;let Se=!1,we=0;const oe=new Array(Q);for(ae=0;ae<Q;ae++)oe[ae]=0;for(ae=Ie;ae<=D;ae++){const Ae=w[ae];if(q>=Q){Te(Ae,z,Z,!0);continue}let Ve;if(Ae.key!=null)Ve=_.get(Ae.key);else for(O=b;O<=ke;O++)if(oe[O-b]===0&&kr(Ae,P[O])){Ve=O;break}Ve===void 0?Te(Ae,z,Z,!0):(oe[Ve-b]=ae+1,Ve>=we?we=Ve:Se=!0,v(Ae,P[Ve],B,null,z,Z,ve,ge,ce),q++)}const le=Se?a0(oe):ur;for(O=le.length-1,ae=Q-1;ae>=0;ae--){const Ae=b+ae,Ve=P[Ae],De=P[Ae+1],Ce=Ae+1<Le?De.el||Zp(De):Y;oe[ae]===0?v(null,Ve,B,Ce,z,Z,ve,ge,ce):Se&&(O<0||ae!==le[O]?me(Ve,B,Ce,2):O--)}}},me=(w,P,B,Y,z=null)=>{const{el:Z,type:ve,transition:ge,children:ce,shapeFlag:ae}=w;if(ae&6){me(w.component.subTree,P,B,Y);return}if(ae&128){w.suspense.move(P,B,Y);return}if(ae&64){ve.move(w,P,B,xe);return}if(ve===Et){i(Z,P,B);for(let D=0;D<ce.length;D++)me(ce[D],P,B,Y);i(w.anchor,P,B);return}if(ve===va){E(w,P,B);return}if(Y!==2&&ae&1&&ge)if(Y===0)ge.persisted&&!Z[Pl]?i(Z,P,B):(ge.beforeEnter(Z),i(Z,P,B),Cn(()=>ge.enter(Z),z));else{const{leave:D,delayLeave:ke,afterLeave:Ie}=ge,b=()=>{w.ctx.isUnmounted?s(Z):i(Z,P,B)},_=()=>{const O=Z._isLeaving||!!Z[Pl];Z._isLeaving&&Z[Pl](!0),ge.persisted&&!O?b():D(Z,()=>{b(),Ie&&Ie()})};ke?ke(Z,b,_):_()}else i(Z,P,B)},Te=(w,P,B,Y=!1,z=!1)=>{const{type:Z,props:ve,ref:ge,children:ce,dynamicChildren:ae,shapeFlag:Le,patchFlag:D,dirs:ke,cacheIndex:Ie,memo:b}=w;if(D===-2&&(z=!1),ge!=null&&(ki(),ro(ge,null,B,w,!0),Vi()),Ie!=null&&(P.renderCache[Ie]=void 0),Le&256){P.ctx.deactivate(w);return}const _=Le&1&&ke,O=!oo(w);let q;if(O&&(q=ve&&ve.onVnodeBeforeUnmount)&&ai(q,P,w),Le&6)et(w.component,B,Y);else{if(Le&128){w.suspense.unmount(B,Y);return}_&&Ss(w,null,P,"beforeUnmount"),Le&64?w.type.remove(w,P,B,xe,Y):ae&&!ae.hasOnce&&(Z!==Et||D>0&&D&64)?K(ae,P,B,!1,!0):(Z===Et&&D&384||!z&&Le&16)&&K(ce,P,B),Y&&Je(w)}const Q=b!=null&&Ie==null;(O&&(q=ve&&ve.onVnodeUnmounted)||_||Q)&&Cn(()=>{q&&ai(q,P,w),_&&Ss(w,null,P,"unmounted"),Q&&(w.el=null)},B)},Je=w=>{const{type:P,el:B,anchor:Y,transition:z}=w;if(P===Et){ct(B,Y);return}if(P===va){y(w);return}const Z=()=>{s(B),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(w.shapeFlag&1&&z&&!z.persisted){const{leave:ve,delayLeave:ge}=z,ce=()=>ve(B,Z);ge?ge(w.el,Z,ce):ce()}else Z()},ct=(w,P)=>{let B;for(;w!==P;)B=d(w),s(w),w=B;s(P)},et=(w,P,B)=>{const{bum:Y,scope:z,job:Z,subTree:ve,um:ge,m:ce,a:ae}=w;$f(ce),$f(ae),Y&&ga(Y),z.stop(),Z&&(Z.flags|=8,Te(ve,w,P,B)),ge&&Cn(ge,P),Cn(()=>{w.isUnmounted=!0},P)},K=(w,P,B,Y=!1,z=!1,Z=0)=>{for(let ve=Z;ve<w.length;ve++)Te(w[ve],P,B,Y,z)},U=w=>{if(w.shapeFlag&6)return U(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=d(w.anchor||w.el),B=P&&P[y_];return B?d(B):P};let $=!1;const ue=(w,P,B)=>{let Y;w==null?P._vnode&&(Te(P._vnode,null,null,!0),Y=P._vnode.component):v(P._vnode||null,w,P,null,null,null,B),P._vnode=w,$||($=!0,Of(Y),Ap(),$=!1)},xe={p:v,um:Te,m:me,r:Je,mt:re,mc:x,pc:se,pbc:N,n:U,o:t};return{render:ue,hydrate:void 0,createApp:W_(ue)}}function Ll({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ms({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function o0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yp(t,e,n=!1){const i=t.children,s=e.children;if(tt(i)&&tt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Li(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Yp(o,a)),a.type===dl&&(a.patchFlag===-1&&(a=s[r]=Li(a)),a.el=o.el),a.type===us&&!a.el&&(a.el=o.el)}}function a0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Kp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kp(e)}function $f(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Zp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Zp(e.subTree):null}const Jp=t=>t.__isSuspense;function l0(t,e){e&&e.pendingBranch?tt(t)?e.effects.push(...t):e.effects.push(t):g_(t)}const Et=Symbol.for("v-fgt"),dl=Symbol.for("v-txt"),us=Symbol.for("v-cmt"),va=Symbol.for("v-stc"),Os=[];let kn=null;function Me(t=!1){Os.push(kn=t?null:[])}function jp(){Os.pop(),kn=Os[Os.length-1]||null}let mo=1;function Oa(t,e=!1){mo+=t,t<0&&kn&&e&&(kn.hasOnce=!0)}function Qp(t){return t.dynamicChildren=mo>0?kn||ur:null,jp(),mo>0&&kn&&kn.push(t),t}function be(t,e,n,i,s,r){return Qp(C(t,e,n,i,s,r,!0))}function em(t,e,n,i,s){return Qp(ln(t,e,n,i,s,!0))}function Fa(t){return t?t.__v_isVNode===!0:!1}function kr(t,e){return t.type===e.type&&t.key===e.key}const tm=({key:t})=>t??null,xa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Gt(t)||vn(t)||rt(t)?{i:zn,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,i=0,s=null,r=t===Et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tm(e),ref:e&&xa(e),scopeId:Rp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:zn};return a?(Ba(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Gt(n)?8:16),mo>0&&!o&&kn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&kn.push(l),l}const ln=c0;function c0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===U_)&&(t=us),Fa(t)){const a=xr(t,e,!0);return n&&Ba(a,n),mo>0&&!r&&kn&&(a.shapeFlag&6?kn[kn.indexOf(t)]=a:kn.push(a)),a.patchFlag=-2,a}if(S0(t)&&(t=t.__vccOpts),e){e=u0(e);let{class:a,style:l}=e;a&&!Gt(a)&&(e.class=Fn(a)),At(l)&&(qu(l)&&!tt(l)&&(l=un({},l)),e.style=uo(l))}const o=Gt(t)?1:Jp(t)?128:S_(t)?64:At(t)?4:rt(t)?2:0;return C(t,e,n,i,s,o,r,!0)}function u0(t){return t?qu(t)||Hp(t)?un({},t):t:null}function xr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?f0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&tm(c),ref:e&&e.ref?n&&r?tt(r)?r.concat(xa(e)):[r,xa(e)]:xa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xr(t.ssContent),ssFallback:t.ssFallback&&xr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Yu(u,l.clone(u)),u}function bt(t=" ",e=0){return ln(dl,null,t,e)}function ju(t,e){const n=ln(va,null,t);return n.staticCount=e,n}function jt(t="",e=!1){return e?(Me(),em(us,null,t)):ln(us,null,t)}function di(t){return t==null||typeof t=="boolean"?ln(us):tt(t)?ln(Et,null,t.slice()):Fa(t)?Li(t):ln(dl,null,String(t))}function Li(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xr(t)}function Ba(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(tt(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ba(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Hp(e)?e._ctx=zn:s===3&&zn&&(zn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(rt(e)){if(i&65){Ba(t,{default:e});return}e={default:e,_ctx:zn},n=32}else e=String(e),i&64?(n=16,e=[bt(e)]):n=8;t.children=e,t.shapeFlag|=n}function f0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Fn([e.class,i.class]));else if(s==="style")e.style=uo([e.style,i.style]);else if(tl(s)){const r=e[s],o=i[s];o&&r!==o&&!(tt(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!nl(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function ai(t,e,n,i=null){ii(t,e,7,[n,i])}const d0=Fp();let h0=0;function p0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||d0,r={uid:h0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wp(i,s),emitsOptions:Bp(i,s),emit:null,emitted:null,propsDefaults:It,inheritAttrs:i.inheritAttrs,ctx:It,data:It,props:It,attrs:It,slots:It,refs:It,setupState:It,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=q_.bind(null,r),t.ce&&t.ce(r),r}let gn=null;const m0=()=>gn||zn;let za,Ic;{const t=ol(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};za=e("__VUE_INSTANCE_SETTERS__",n=>gn=n),Ic=e("__VUE_SSR_SETTERS__",n=>go=n)}const Ao=t=>{const e=gn;return za(t),t.scope.on(),()=>{t.scope.off(),za(e)}},Yf=()=>{gn&&gn.scope.off(),za(null)};function nm(t){return t.vnode.shapeFlag&4}let go=!1;function g0(t,e=!1,n=!1){e&&Ic(e);const{props:i,children:s}=t.vnode,r=nm(t);j_(t,i,r,e),n0(t,s,n||e);const o=r?_0(t,e):void 0;return e&&Ic(!1),o}function _0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,F_);const{setup:i}=n;if(i){ki();const s=t.setupContext=i.length>1?x0(t):null,r=Ao(t),o=To(i,t,0,[t.props,s]),a=ep(o);if(Vi(),r(),(a||t.sp)&&!oo(t)&&Lp(t),a){if(o.then(Yf,Yf),e)return o.then(l=>{Kf(t,l)}).catch(l=>{ll(l,t,0)});t.asyncDep=o}else Kf(t,o)}else im(t)}function Kf(t,e,n){rt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:At(e)&&(t.setupState=bp(e)),im(t)}function im(t,e,n){const i=t.type;t.render||(t.render=i.render||_i);{const s=Ao(t);ki();try{B_(t)}finally{Vi(),s()}}}const v0={get(t,e){return mn(t,"get",""),t[e]}};function x0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,v0),slots:t.slots,emit:t.emit,expose:e}}function hl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bp(o_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ao)return ao[n](t)},has(e,n){return n in e||n in ao}})):t.proxy}function y0(t,e=!0){return rt(t)?t.displayName||t.name:t.name||e&&t.__name}function S0(t){return rt(t)&&"__vccOpts"in t}const _t=(t,e)=>f_(t,e,go);function sm(t,e,n){try{Oa(-1);const i=arguments.length;return i===2?At(e)&&!tt(e)?Fa(e)?ln(t,null,[e]):ln(t,e):ln(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Fa(n)&&(n=[n]),ln(t,e,n))}finally{Oa(1)}}const M0="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nc;const Zf=typeof window<"u"&&window.trustedTypes;if(Zf)try{Nc=Zf.createPolicy("vue",{createHTML:t=>t})}catch{}const rm=Nc?t=>Nc.createHTML(t):t=>t,b0="http://www.w3.org/2000/svg",E0="http://www.w3.org/1998/Math/MathML",Di=typeof document<"u"?document:null,Jf=Di&&Di.createElement("template"),T0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Di.createElementNS(b0,t):e==="mathml"?Di.createElementNS(E0,t):n?Di.createElement(t,{is:n}):Di.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Di.createTextNode(t),createComment:t=>Di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Jf.innerHTML=rm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Jf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},A0=Symbol("_vtc");function w0(t,e,n){const i=t[A0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jf=Symbol("_vod"),R0=Symbol("_vsh"),C0=Symbol(""),P0=/(?:^|;)\s*display\s*:/;function D0(t,e,n){const i=t.style,s=Gt(n);let r=!1;if(n&&!s){if(e)if(Gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Qr(i,a,"")}else for(const o in e)n[o]==null&&Qr(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?I0(t,o,!Gt(e)&&e?e[o]:void 0,a)||Qr(i,o,a):Qr(i,o,"")}}else if(s){if(e!==n){const o=i[C0];o&&(n+=";"+o),i.cssText=n,r=P0.test(n)}}else e&&t.removeAttribute("style");jf in t&&(t[jf]=r?i.display:"",t[R0]&&(i.display="none"))}const Qf=/\s*!important$/;function Qr(t,e,n){if(tt(n))n.forEach(i=>Qr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=L0(t,e);Qf.test(n)?t.setProperty(ps(i),n.replace(Qf,""),"important"):t[i]=n}}const ed=["Webkit","Moz","ms"],Il={};function L0(t,e){const n=Il[e];if(n)return n;let i=En(e);if(i!=="filter"&&i in t)return Il[e]=i;i=sl(i);for(let s=0;s<ed.length;s++){const r=ed[s]+i;if(r in t)return Il[e]=r}return e}function I0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Gt(i)&&n===i}const td="http://www.w3.org/1999/xlink";function nd(t,e,n,i,s,r=zg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(td,e.slice(6,e.length)):t.setAttributeNS(td,e,n):n==null||r&&!sp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Si(n)?String(n):n)}function id(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rm(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=sp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function os(t,e,n,i){t.addEventListener(e,n,i)}function N0(t,e,n,i){t.removeEventListener(e,n,i)}const sd=Symbol("_vei");function U0(t,e,n,i,s=null){const r=t[sd]||(t[sd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=B0(e);if(i){const c=r[e]=V0(i,s);os(t,a,c,l)}else o&&(N0(t,a,o,l),r[e]=void 0)}}const O0=/(Once|Passive|Capture)$/,F0=/^on:?(?:Once|Passive|Capture)$/;function B0(t){let e,n;for(;(n=t.match(O0))&&!F0.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ps(t.slice(2)),e]}let Nl=0;const z0=Promise.resolve(),k0=()=>Nl||(z0.then(()=>Nl=0),Nl=Date.now());function V0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(tt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&ii(c,e,5,a)}}else ii(s,e,5,[i])};return n.value=t,n.attached=k0(),n}const rd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,H0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?w0(t,i,o):e==="style"?D0(t,n,i):tl(e)?nl(e)||U0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):G0(t,e,i,o))?(id(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&nd(t,e,i,o,r,e!=="value")):t._isVueCE&&(W0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Gt(i)))?id(t,En(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),nd(t,e,i,o))};function G0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&rd(e)&&rt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rd(e)&&Gt(n)?!1:e in t}function W0(t,e){const n=t._def.props;if(!n)return!1;const i=En(e);return Array.isArray(n)?n.some(s=>En(s)===i):Object.keys(n).some(s=>En(s)===i)}const yr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return tt(e)?n=>ga(e,n):e};function X0(t){t.target.composing=!0}function od(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fi=Symbol("_assign");function ad(t,e,n){return e&&(t=t.trim()),n&&(t=rl(t)),t}const Jn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Fi]=yr(s);const r=i||s.props&&s.props.type==="number";os(t,e?"change":"input",o=>{o.target.composing||t[Fi](ad(t.value,n,r))}),(n||r)&&os(t,"change",()=>{t.value=ad(t.value,n,r)}),e||(os(t,"compositionstart",X0),os(t,"compositionend",od),os(t,"change",od))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Fi]=yr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?rl(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},Vo={deep:!0,created(t,e,n){t[Fi]=yr(n),os(t,"change",()=>{const i=t._modelValue,s=_o(t),r=t.checked,o=t[Fi];if(tt(i)){const a=zu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Pr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(om(t,r))})},mounted:ld,beforeUpdate(t,e,n){t[Fi]=yr(n),ld(t,e,n)}};function ld(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(tt(e))s=zu(e,i.props.value)>-1;else if(Pr(e))s=e.has(i.props.value);else{if(e===n)return;s=Dr(e,om(t,!0))}t.checked!==s&&(t.checked=s)}const Ho={deep:!0,created(t,{value:e,modifiers:{number:n}},i){t._modelValue=e,os(t,"change",()=>{const s=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?rl(_o(r)):_o(r));t[Fi](t.multiple?Pr(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,cl(()=>{t._assigning=!1})}),t[Fi]=yr(i)},mounted(t,{value:e}){cd(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Fi]=yr(n)},updated(t,{value:e}){t._assigning||cd(t,e)}};function cd(t,e){const n=t.multiple,i=tt(e);if(!(n&&!i&&!Pr(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=_o(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=zu(e,a)>-1}else o.selected=e.has(a);else if(Dr(_o(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function _o(t){return"_value"in t?t._value:t.value}function om(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const q0=["ctrl","shift","alt","meta"],$0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>q0.some(n=>t[`${n}Key`]&&!e.includes(n))},Y0=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=$0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},K0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ud=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=ps(s.key);if(e.some(o=>o===r||K0[o]===r))return t(s)})},Z0=un({patchProp:H0},T0);let fd;function J0(){return fd||(fd=s0(Z0))}const j0=(...t)=>{const e=J0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ev(i);if(!s)return;const r=e._component;!rt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Q0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Q0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ev(t){return Gt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const lr=typeof document<"u";function am(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&am(t.default)}const yt=Object.assign;function Ul(t,e){const n={};for(const i in e){const s=e[i];n[i]=si(s)?s.map(t):t(s)}return n}const lo=()=>{},si=Array.isArray;function dd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const lm=/#/g,nv=/&/g,iv=/\//g,sv=/=/g,rv=/\?/g,cm=/\+/g,ov=/%5B/g,av=/%5D/g,um=/%5E/g,lv=/%60/g,fm=/%7B/g,cv=/%7C/g,dm=/%7D/g,uv=/%20/g;function Qu(t){return t==null?"":encodeURI(""+t).replace(cv,"|").replace(ov,"[").replace(av,"]")}function fv(t){return Qu(t).replace(fm,"{").replace(dm,"}").replace(um,"^")}function Uc(t){return Qu(t).replace(cm,"%2B").replace(uv,"+").replace(lm,"%23").replace(nv,"%26").replace(lv,"`").replace(fm,"{").replace(dm,"}").replace(um,"^")}function dv(t){return Uc(t).replace(sv,"%3D")}function hv(t){return Qu(t).replace(lm,"%23").replace(rv,"%3F")}function pv(t){return hv(t).replace(iv,"%2F")}function vo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const mv=/\/$/,gv=t=>t.replace(mv,"");function Ol(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=yv(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:vo(o)}}function _v(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Sr(e.matched[i],n.matched[s])&&hm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Sr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!xv(t[n],e[n]))return!1;return!0}function xv(t,e){return si(t)?pd(t,e):si(e)?pd(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function pd(t,e){return si(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function yv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Zi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Oc=function(t){return t.pop="pop",t.push="push",t}({}),Fl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function Sv(t){if(!t)if(lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gv(t)}const Mv=/^[^#]+#/;function bv(t,e){return t.replace(Mv,"#")+e}function Ev(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const pl=()=>({left:window.scrollX,top:window.scrollY});function Tv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ev(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function md(t,e){return(history.state?history.state.position-e:-1)+t}const Fc=new Map;function Av(t,e){Fc.set(t,e)}function wv(t){const e=Fc.get(t);return Fc.delete(t),e}function Rv(t){return typeof t=="string"||t&&typeof t=="object"}function pm(t){return typeof t=="string"||typeof t=="symbol"}let Vt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const mm=Symbol("");Vt.MATCHER_NOT_FOUND+"",Vt.NAVIGATION_GUARD_REDIRECT+"",Vt.NAVIGATION_ABORTED+"",Vt.NAVIGATION_CANCELLED+"",Vt.NAVIGATION_DUPLICATED+"";function Mr(t,e){return yt(new Error,{type:t,[mm]:!0},e)}function Ti(t,e){return t instanceof Error&&mm in t&&(e==null||!!(t.type&e))}const Cv=["params","query","hash"];function Pv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Cv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Dv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(cm," "),r=s.indexOf("="),o=vo(r<0?s:s.slice(0,r)),a=r<0?null:vo(s.slice(r+1));if(o in e){let l=e[o];si(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function gd(t){let e="";for(let n in t){const i=t[n];if(n=dv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(si(i)?i.map(s=>s&&Uc(s)):[i&&Uc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Lv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=si(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Iv=Symbol(""),_d=Symbol(""),ml=Symbol(""),ef=Symbol(""),Bc=Symbol("");function Vr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ss(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Mr(Vt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):Rv(d)?l(Mr(Vt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Bl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(am(l)){const c=(l.__vccOpts||l)[e];c&&r.push(ss(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=tv(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ss(d,n,i,o,a,s)()}))}}return r}function Nv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Sr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Sr(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Uv=()=>location.protocol+"//"+location.host;function gm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),hd(a,"")}return hd(n,t)+i+s}function Ov(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const p=gm(t,location),g=n.value,v=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(p);s.forEach(h=>{h(n.value,g,{delta:m,type:Oc.pop,direction:m?m>0?Fl.forward:Fl.back:Fl.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(yt({},d.state,{scroll:pl()}),"")}}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function vd(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?pl():null}}function Fv(t){const{history:e,location:n}=window,i={value:gm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Uv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){r(l,yt({},e.state,vd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=yt({},s.value,e.state,{forward:l,scroll:pl()});r(u.current,u,!0),r(l,yt({},vd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Bv(t){t=Sv(t);const e=Fv(t),n=Ov(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=yt({location:"",base:t,go:i,createHref:bv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Ps=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Zt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Zt||{});const zv={type:Ps.Static,value:""},kv=/[a-zA-Z0-9_]/;function Vv(t){if(!t)return[[]];if(t==="/")return[[zv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=Zt.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===Zt.Static?r.push({type:Ps.Static,value:c}):n===Zt.Param||n===Zt.ParamRegExp||n===Zt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ps.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Zt.ParamRegExp){i=n,n=Zt.EscapeNext;continue}switch(n){case Zt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=Zt.Param):d();break;case Zt.EscapeNext:d(),n=i;break;case Zt.Param:l==="("?n=Zt.ParamRegExp:kv.test(l)?d():(f(),n=Zt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Zt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Zt.ParamRegExpEnd:u+=l;break;case Zt.ParamRegExpEnd:f(),n=Zt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Zt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const xd="[^/]+?",Hv={sensitive:!1,strict:!1,start:!0,end:!0};var Mn=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Mn||{});const Gv=/[.+*?^${}()[\]/\\]/g;function Wv(t,e){const n=yt({},Hv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[Mn.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=Mn.Segment+(n.sensitive?Mn.BonusCaseSensitive:0);if(d.type===Ps.Static)f||(s+="/"),s+=d.value.replace(Gv,"\\$&"),p+=Mn.Static;else if(d.type===Ps.Param){const{value:g,repeatable:v,optional:m,regexp:h}=d;r.push({name:g,repeatable:v,optional:m});const M=h||xd;if(M!==xd){p+=Mn.BonusCustomRegExp;try{`${M}`}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+y.message)}}let E=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,p+=Mn.Dynamic,m&&(p+=Mn.BonusOptional),v&&(p+=Mn.BonusRepeatable),M===".*"&&(p+=Mn.BonusWildcard)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Mn.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===Ps.Static)u+=p.value;else if(p.type===Ps.Param){const{value:g,repeatable:v,optional:m}=p,h=g in c?c[g]:"";if(si(h)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=si(h)?h.join("/"):h;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Xv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Mn.Static+Mn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Mn.Static+Mn.Segment?1:-1:0}function _m(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Xv(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(yd(i))return 1;if(yd(s))return-1}return s.length-i.length}function yd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qv={strict:!1,end:!0,sensitive:!1};function $v(t,e,n){const i=Wv(Vv(t.path),n),s=yt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Yv(t,e){const n=[],i=new Map;e=dd(qv,e);function s(f){return i.get(f)}function r(f,d,p){const g=!p,v=Md(f);v.aliasOf=p&&p.record;const m=dd(e,f),h=[v];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const A of y)h.push(Md(yt({},v,{components:p?p.record.components:v.components,path:A,aliasOf:p?p.record:v})))}let M,E;for(const y of h){const{path:A}=y;if(d&&A[0]!=="/"){const T=d.record.path,L=T[T.length-1]==="/"?"":"/";y.path=d.record.path+(A&&L+A)}if(M=$v(y,d,m),p?p.alias.push(M):(E=E||M,E!==M&&E.alias.push(M),g&&f.name&&!bd(M)&&o(f.name)),vm(M)&&l(M),v.children){const T=v.children;for(let L=0;L<T.length;L++)r(T[L],M,p&&p.children[L])}p=p||M}return E?()=>{o(E)}:lo}function o(f){if(pm(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=Jv(f,n);n.splice(d,0,f),f.record.name&&!bd(f)&&i.set(f.record.name,f)}function c(f,d){let p,g={},v,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Mr(Vt.MATCHER_NOT_FOUND,{location:f});m=p.record.name,g=yt(Sd(d.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&Sd(f.params,p.keys.map(E=>E.name))),v=p.stringify(g)}else if(f.path!=null)v=f.path,p=n.find(E=>E.re.test(v)),p&&(g=p.parse(v),m=p.record.name);else{if(p=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!p)throw Mr(Vt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=p.record.name,g=yt({},d.params,f.params),v=p.stringify(g)}const h=[];let M=p;for(;M;)h.unshift(M.record),M=M.parent;return{name:m,path:v,params:g,matched:h,meta:Zv(h)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Sd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Md(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Kv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Kv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function bd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zv(t){return t.reduce((e,n)=>yt(e,n.meta),{})}function Jv(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;_m(t,e[r])<0?i=r:n=r+1}const s=jv(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function jv(t){let e=t;for(;e=e.parent;)if(vm(e)&&_m(t,e)===0)return e}function vm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ed(t){const e=ei(ml),n=ei(ef),i=_t(()=>{const l=Pn(t.to);return e.resolve(l)}),s=_t(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Sr.bind(null,u));if(d>-1)return d;const p=Td(l[c-2]);return c>1&&Td(u)===p&&f[f.length-1].path!==p?f.findIndex(Sr.bind(null,l[c-2])):d}),r=_t(()=>s.value>-1&&nx(n.params,i.value.params)),o=_t(()=>s.value>-1&&s.value===n.matched.length-1&&hm(n.params,i.value.params));function a(l={}){if(tx(l)){const c=e[Pn(t.replace)?"replace":"push"](Pn(t.to)).catch(lo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:_t(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Qv(t){return t.length===1?t[0]:t}const ex=Dp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ed,setup(t,{slots:e}){const n=ms(Ed(t)),{options:i}=ei(ml),s=_t(()=>({[Ad(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ad(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Qv(e.default(n));return t.custom?r:sm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),zc=ex;function tx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nx(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!si(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Td(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ad=(t,e,n)=>t??e??n,ix=Dp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=ei(Bc),s=_t(()=>t.route||i.value),r=ei(_d,0),o=_t(()=>{let c=Pn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=_t(()=>s.value.matched[o.value]);_a(_d,_t(()=>o.value+1)),_a(Iv,a),_a(Bc,s);const l=qe();return Ui(()=>[l.value,a.value,t.name],([c,u,f],[d,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Sr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return wd(n.default,{Component:d,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=sm(d,yt({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return wd(n.default,{Component:m,route:c})||m}}});function wd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xm=ix;function sx(t){const e=Yv(t.routes,t),n=t.parseQuery||Dv,i=t.stringifyQuery||gd,s=t.history,r=Vr(),o=Vr(),a=Vr(),l=a_(Zi);let c=Zi;lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ul.bind(null,U=>""+U),f=Ul.bind(null,pv),d=Ul.bind(null,vo);function p(U,$){let ue,xe;return pm(U)?(ue=e.getRecordMatcher(U),xe=$):xe=U,e.addRoute(xe,ue)}function g(U){const $=e.getRecordMatcher(U);$&&e.removeRoute($)}function v(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function h(U,$){if($=yt({},$||l.value),typeof U=="string"){const B=Ol(n,U,$.path),Y=e.resolve({path:B.path},$),z=s.createHref(B.fullPath);return yt(B,Y,{params:d(Y.params),hash:vo(B.hash),redirectedFrom:void 0,href:z})}let ue;if(U.path!=null)ue=yt({},U,{path:Ol(n,U.path,$.path).path});else{const B=yt({},U.params);for(const Y in B)B[Y]==null&&delete B[Y];ue=yt({},U,{params:f(B)}),$.params=f($.params)}const xe=e.resolve(ue,$),Re=U.hash||"";xe.params=u(d(xe.params));const w=_v(i,yt({},U,{hash:fv(Re),path:xe.path})),P=s.createHref(w);return yt({fullPath:w,hash:Re,query:i===gd?Lv(U.query):U.query||{}},xe,{redirectedFrom:void 0,href:P})}function M(U){return typeof U=="string"?Ol(n,U,l.value.path):yt({},U)}function E(U,$){if(c!==U)return Mr(Vt.NAVIGATION_CANCELLED,{from:$,to:U})}function y(U){return L(U)}function A(U){return y(yt(M(U),{replace:!0}))}function T(U,$){const ue=U.matched[U.matched.length-1];if(ue&&ue.redirect){const{redirect:xe}=ue;let Re=typeof xe=="function"?xe(U,$):xe;return typeof Re=="string"&&(Re=Re.includes("?")||Re.includes("#")?Re=M(Re):{path:Re},Re.params={}),yt({query:U.query,hash:U.hash,params:Re.path!=null?{}:U.params},Re)}}function L(U,$){const ue=c=h(U),xe=l.value,Re=U.state,w=U.force,P=U.replace===!0,B=T(ue,xe);if(B)return L(yt(M(B),{state:typeof B=="object"?yt({},Re,B.state):Re,force:w,replace:P}),$||ue);const Y=ue;Y.redirectedFrom=$;let z;return!w&&vv(i,xe,ue)&&(z=Mr(Vt.NAVIGATION_DUPLICATED,{to:Y,from:xe}),me(xe,xe,!0,!1)),(z?Promise.resolve(z):N(Y,xe)).catch(Z=>Ti(Z)?Ti(Z,Vt.NAVIGATION_GUARD_REDIRECT)?Z:pe(Z):se(Z,Y,xe)).then(Z=>{if(Z){if(Ti(Z,Vt.NAVIGATION_GUARD_REDIRECT))return L(yt({replace:P},M(Z.to),{state:typeof Z.to=="object"?yt({},Re,Z.to.state):Re,force:w}),$||Y)}else Z=k(Y,xe,!0,P,Re);return I(Y,xe,Z),Z})}function x(U,$){const ue=E(U,$);return ue?Promise.reject(ue):Promise.resolve()}function R(U){const $=ct.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(U):U()}function N(U,$){let ue;const[xe,Re,w]=Nv(U,$);ue=Bl(xe.reverse(),"beforeRouteLeave",U,$);for(const B of xe)B.leaveGuards.forEach(Y=>{ue.push(ss(Y,U,$))});const P=x.bind(null,U,$);return ue.push(P),K(ue).then(()=>{ue=[];for(const B of r.list())ue.push(ss(B,U,$));return ue.push(P),K(ue)}).then(()=>{ue=Bl(Re,"beforeRouteUpdate",U,$);for(const B of Re)B.updateGuards.forEach(Y=>{ue.push(ss(Y,U,$))});return ue.push(P),K(ue)}).then(()=>{ue=[];for(const B of w)if(B.beforeEnter)if(si(B.beforeEnter))for(const Y of B.beforeEnter)ue.push(ss(Y,U,$));else ue.push(ss(B.beforeEnter,U,$));return ue.push(P),K(ue)}).then(()=>(U.matched.forEach(B=>B.enterCallbacks={}),ue=Bl(w,"beforeRouteEnter",U,$,R),ue.push(P),K(ue))).then(()=>{ue=[];for(const B of o.list())ue.push(ss(B,U,$));return ue.push(P),K(ue)}).catch(B=>Ti(B,Vt.NAVIGATION_CANCELLED)?B:Promise.reject(B))}function I(U,$,ue){a.list().forEach(xe=>R(()=>xe(U,$,ue)))}function k(U,$,ue,xe,Re){const w=E(U,$);if(w)return w;const P=$===Zi,B=lr?history.state:{};ue&&(xe||P?s.replace(U.fullPath,yt({scroll:P&&B&&B.scroll},Re)):s.push(U.fullPath,Re)),l.value=U,me(U,$,ue,P),pe()}let ie;function re(){ie||(ie=s.listen((U,$,ue)=>{if(!et.listening)return;const xe=h(U),Re=T(xe,et.currentRoute.value);if(Re){L(yt(Re,{replace:!0,force:!0}),xe).catch(lo);return}c=xe;const w=l.value;lr&&Av(md(w.fullPath,ue.delta),pl()),N(xe,w).catch(P=>Ti(P,Vt.NAVIGATION_ABORTED|Vt.NAVIGATION_CANCELLED)?P:Ti(P,Vt.NAVIGATION_GUARD_REDIRECT)?(L(yt(M(P.to),{force:!0}),xe).then(B=>{Ti(B,Vt.NAVIGATION_ABORTED|Vt.NAVIGATION_DUPLICATED)&&!ue.delta&&ue.type===Oc.pop&&s.go(-1,!1)}).catch(lo),Promise.reject()):(ue.delta&&s.go(-ue.delta,!1),se(P,xe,w))).then(P=>{P=P||k(xe,w,!1),P&&(ue.delta&&!Ti(P,Vt.NAVIGATION_CANCELLED)?s.go(-ue.delta,!1):ue.type===Oc.pop&&Ti(P,Vt.NAVIGATION_ABORTED|Vt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),I(xe,w,P)}).catch(lo)}))}let X=Vr(),te=Vr(),G;function se(U,$,ue){pe(U);const xe=te.list();return xe.length?xe.forEach(Re=>Re(U,$,ue)):console.error(U),Promise.reject(U)}function de(){return G&&l.value!==Zi?Promise.resolve():new Promise((U,$)=>{X.add([U,$])})}function pe(U){return G||(G=!U,re(),X.list().forEach(([$,ue])=>U?ue(U):$()),X.reset()),U}function me(U,$,ue,xe){const{scrollBehavior:Re}=t;if(!lr||!Re)return Promise.resolve();const w=!ue&&wv(md(U.fullPath,0))||(xe||!ue)&&history.state&&history.state.scroll||null;return cl().then(()=>Re(U,$,w)).then(P=>P&&Tv(P)).catch(P=>se(P,U,$))}const Te=U=>s.go(U);let Je;const ct=new Set,et={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:h,options:t,push:y,replace:A,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:de,install(U){U.component("RouterLink",zc),U.component("RouterView",xm),U.config.globalProperties.$router=et,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Pn(l)}),lr&&!Je&&l.value===Zi&&(Je=!0,y(s.location).catch(xe=>{}));const $={};for(const xe in Zi)Object.defineProperty($,xe,{get:()=>l.value[xe],enumerable:!0});U.provide(ml,et),U.provide(ef,Sp($)),U.provide(Bc,l);const ue=U.unmount;ct.add(U),U.unmount=function(){ct.delete(U),ct.size<1&&(c=Zi,ie&&ie(),ie=null,l.value=Zi,Je=!1,G=!1),ue()}}};function K(U){return U.reduce(($,ue)=>$.then(()=>R(ue)),Promise.resolve())}return et}function tf(){return ei(ml)}function ym(t){return ei(ef)}const nf="vision-portal-session",Go=(()=>{try{return JSON.parse(localStorage.getItem(nf)||"null")}catch{return null}})(),br=qe(Go&&Go.token&&Go.user?Go:null),ka=_t(()=>{var t;return!!((t=br.value)!=null&&t.token)}),co=_t(()=>{var t;return((t=br.value)==null?void 0:t.user)||null}),Sm=t=>{br.value=t,localStorage.setItem(nf,JSON.stringify(t))},rx=t=>{br.value&&Sm({...br.value,user:t})},ox=()=>{br.value=null,localStorage.removeItem(nf)},ax={class:"sidebar"},lx={class:"brand"},cx={key:0,class:"brand-account-actions"},ux={class:"account-hover-card"},fx={key:1,class:"brand-account-actions"},dx={class:"nav-group-title"},hx={class:"main-panel"},px={class:"topbar"},mx={class:"topbar-actions"},gx={__name:"App",setup(t){const e=ym(),n=tf(),i=qe(localStorage.getItem("vision-portal-theme")==="light"),s=[{title:"平台總覽",requiresAuth:!0,items:[{label:"首頁",to:"/",icon:"◉"}]},{title:"系統介紹",items:[{label:"操作指引",to:"/guide",icon:"◌"},{label:"定位技術",to:"/technology",icon:"◌"}]},{title:"歷史資料",requiresAuth:!0,items:[{label:"物件資料",to:"/history/object",icon:"◌"},{label:"施工任務",to:"/history/tasks",icon:"◌"},{label:"操作紀錄",to:"/history/operations",icon:"◌"}]},{title:"媒體資料",requiresAuth:!0,items:[{label:"影像串流",to:"/media/stream",icon:"◌"},{label:"語音提示",to:"/media/voice",icon:"◌"}]},{title:"系統設定",requiresAuth:!0,items:[{label:"相機外參設定",to:"/settings/camera-extrinsics"}]}],r=_t(()=>s.filter(c=>!c.requiresAuth||ka.value)),o=_t(()=>{const c=s.flatMap(u=>u.items).find(u=>u.to===e.path);return(c==null?void 0:c.label)||"首頁"}),a=(c="login")=>n.push({path:"/account/login",query:{mode:c}}),l=()=>{i.value=!i.value,localStorage.setItem("vision-portal-theme",i.value?"light":"dark")};return(c,u)=>{var f,d;return Me(),be("div",{class:Fn(["app-shell",{"theme-light":i.value}])},[C("aside",ax,[C("div",lx,[u[2]||(u[2]=C("div",{class:"brand-mark"},"V",-1)),u[3]||(u[3]=C("div",{class:"brand-content"},[C("p",{class:"brand-eyebrow"},"終端定位平台"),C("div",{class:"brand-title-row"},[C("h2",null,"Vision Portal")])],-1)),Pn(ka)?(Me(),be("div",cx,[ln(Pn(zc),{class:"user-avatar",to:"/account/profile"},{default:Ia(()=>{var p,g;return[bt(ye((g=(p=Pn(co))==null?void 0:p.name)==null?void 0:g.charAt(0).toUpperCase()),1)]}),_:1}),C("div",ux,[C("strong",null,ye((f=Pn(co))==null?void 0:f.name),1),C("span",null,ye((d=Pn(co))==null?void 0:d.email),1),u[1]||(u[1]=C("small",null,"點擊頭貼查看帳戶資料",-1))])])):(Me(),be("div",fx,[C("button",{type:"button",class:"brand-login",onClick:u[0]||(u[0]=p=>a("login"))},"登入")]))]),(Me(!0),be(Et,null,ti(r.value,p=>(Me(),be("nav",{class:"nav-section",key:p.title},[C("p",dx,ye(p.title),1),(Me(!0),be(Et,null,ti(p.items,g=>(Me(),em(Pn(zc),{key:g.to,class:Fn(["nav-link",{active:Pn(e).path===g.to}]),to:g.to,"exact-active-class":"active"},{default:Ia(()=>[u[4]||(u[4]=C("span",{class:"icon","aria-hidden":"true"},null,-1)),C("span",null,ye(g.label),1)]),_:2},1032,["class","to"]))),128))]))),128))]),C("main",hx,[C("header",px,[C("h1",null,ye(o.value),1),C("div",mx,[C("button",{type:"button",class:"theme-toggle",onClick:l},ye(i.value?"◐ 夜間":"☀ 白天"),1),u[5]||(u[5]=C("div",{class:"topbar-badge"},"已連線",-1))])]),ln(Pn(xm))])],2)}}};function Mm(t,e){return function(){return t.apply(e,arguments)}}const{toString:_x}=Object.prototype,{getPrototypeOf:Er}=Object,{iterator:wo,toStringTag:bm}=Symbol,Va=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),xo=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),Va(n,e))return!0;n=Er(n)}return!1},vx=(t,e)=>t!=null&&xo(t,e)?t[e]:void 0,sf=(t=>e=>{const n=_x.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ri=t=>(t=t.toLowerCase(),e=>sf(e)===t),gl=t=>e=>typeof e===t,{isArray:Bs}=Array,Tr=gl("undefined");function Lr(t){return t!==null&&!Tr(t)&&t.constructor!==null&&!Tr(t.constructor)&&Dn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Em=ri("ArrayBuffer");function xx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Em(t.buffer),e}const yx=gl("string"),Dn=gl("function"),Tm=gl("number"),Ir=t=>t!==null&&typeof t=="object",Sx=t=>t===!0||t===!1,ya=t=>{if(!Ir(t))return!1;const e=Er(t);return(e===null||e===Object.prototype||Er(e)===null)&&!xo(t,bm)&&!xo(t,wo)},Mx=t=>{if(!Ir(t)||Lr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},bx=ri("Date"),Ex=ri("File"),Tx=t=>!!(t&&typeof t.uri<"u"),Ax=t=>t&&typeof t.getParts<"u",wx=ri("Blob"),Rx=ri("FileList"),Cx=t=>Ir(t)&&Dn(t.pipe);function Px(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Rd=Px(),Cd=typeof Rd.FormData<"u"?Rd.FormData:void 0,Dx=t=>{if(!t)return!1;if(Cd&&t instanceof Cd)return!0;const e=Er(t);if(!e||e===Object.prototype||!Dn(t.append))return!1;const n=sf(t);return n==="formdata"||n==="object"&&Dn(t.toString)&&t.toString()==="[object FormData]"},Lx=ri("URLSearchParams"),[Ix,Nx,Ux,Ox]=["ReadableStream","Request","Response","Headers"].map(ri),Fx=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ro(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Bs(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Lr(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Am(t,e){if(Lr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wm=t=>!Tr(t)&&t!==Ds;function kc(...t){const{caseless:e,skipUndefined:n}=wm(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&Am(i,o)||o,l=Va(i,a)?i[a]:void 0;ya(l)&&ya(r)?i[a]=kc(l,r):ya(r)?i[a]=kc({},r):Bs(r)?i[a]=r.slice():(!n||!Tr(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++){const a=t[r];if(!a||Lr(a)||(Ro(a,s),typeof a!="object"||Bs(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];Kx.call(a,u)&&s(a[u],u)}}return i}const Bx=(t,e,n,{allOwnKeys:i}={})=>(Ro(e,(s,r)=>{n&&Dn(s)?Object.defineProperty(t,r,{__proto__:null,value:Mm(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),zx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),kx=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Vx=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Er(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Hx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Gx=t=>{if(!t)return null;if(Bs(t))return t;let e=t.length;if(!Tm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Wx=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Er(Uint8Array)),Xx=(t,e)=>{const i=(t&&t[wo]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},qx=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},$x=ri("HTMLFormElement"),Yx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:Kx}=Object.prototype,Zx=ri("RegExp"),Rm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Ro(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Jx=t=>{Rm(t,(e,n)=>{if(Dn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(Dn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jx=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Bs(t)?i(t):i(String(t).split(e)),n},Qx=()=>{},ey=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function ty(t){return!!(t&&Dn(t.append)&&t[bm]==="FormData"&&t[wo])}const ny=t=>{const e=new WeakSet,n=i=>{if(Ir(i)){if(e.has(i))return;if(Lr(i))return i;if(!("toJSON"in i)){e.add(i);const s=Bs(i)?[]:{};return Ro(i,(r,o)=>{const a=n(r);!Tr(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},iy=ri("AsyncFunction"),sy=t=>t&&(Ir(t)||Dn(t))&&Dn(t.then)&&Dn(t.catch),Cm=((t,e)=>t?setImmediate:e?((n,i)=>(Ds.addEventListener("message",({source:s,data:r})=>{s===Ds&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Ds.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Dn(Ds.postMessage)),ry=typeof queueMicrotask<"u"?queueMicrotask.bind(Ds):typeof process<"u"&&process.nextTick||Cm,Pm=t=>t!=null&&Dn(t[wo]),oy=t=>t!=null&&xo(t,wo)&&Pm(t),V={isArray:Bs,isArrayBuffer:Em,isBuffer:Lr,isFormData:Dx,isArrayBufferView:xx,isString:yx,isNumber:Tm,isBoolean:Sx,isObject:Ir,isPlainObject:ya,isEmptyObject:Mx,isReadableStream:Ix,isRequest:Nx,isResponse:Ux,isHeaders:Ox,isUndefined:Tr,isDate:bx,isFile:Ex,isReactNativeBlob:Tx,isReactNative:Ax,isBlob:wx,isRegExp:Zx,isFunction:Dn,isStream:Cx,isURLSearchParams:Lx,isTypedArray:Wx,isFileList:Rx,forEach:Ro,merge:kc,extend:Bx,trim:Fx,stripBOM:zx,inherits:kx,toFlatObject:Vx,kindOf:sf,kindOfTest:ri,endsWith:Hx,toArray:Gx,forEachEntry:Xx,matchAll:qx,isHTMLForm:$x,hasOwnProperty:Va,hasOwnProp:Va,hasOwnInPrototypeChain:xo,getSafeProp:vx,reduceDescriptors:Rm,freezeMethods:Jx,toObjectSet:jx,toCamelCase:Yx,noop:Qx,toFiniteNumber:ey,findKey:Am,global:Ds,isContextDefined:wm,isSpecCompliantForm:ty,toJSONObject:ny,isAsyncFn:iy,isThenable:sy,setImmediate:Cm,asap:ry,isIterable:Pm,isSafeIterable:oy},ay=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ly=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&ay[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function cy(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const uy=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),fy=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function rf(t,e){return V.isArray(t)?t.map(n=>rf(n,e)):cy(String(t).replace(e,""))}const dy=t=>rf(t,uy),hy=t=>rf(t,fy);function Dm(t){const e=Object.create(null);return V.forEach(t.toJSON(),(n,i)=>{e[i]=hy(n)}),e}const Pd=Symbol("internals");function Hr(t){return t&&String(t).trim().toLowerCase()}function Sa(t){return t===!1||t==null?t:V.isArray(t)?t.map(Sa):dy(String(t))}function py(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const my=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function zl(t,e,n,i,s){if(V.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!V.isString(e)){if(V.isString(i))return e.indexOf(i)!==-1;if(V.isRegExp(i))return i.test(e)}}function gy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function _y(t,e){const n=V.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let xn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=Hr(l);if(!u)return;const f=V.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=Sa(a))}const o=(a,l)=>V.forEach(a,(c,u)=>r(c,u,l));if(V.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(V.isString(e)&&(e=e.trim())&&!my(e))o(ly(e),n);else if(V.isObject(e)&&V.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!V.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],V.hasOwnProp(a,c)?(l=a[c],a[c]=V.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Hr(e),e){const i=V.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return py(s);if(V.isFunction(n))return n.call(this,s,i);if(V.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Hr(e),e){const i=V.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||zl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Hr(o),o){const a=V.findKey(i,o);a&&(!n||zl(i,i[a],a,n))&&(delete i[a],s=!0)}}return V.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||zl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return V.forEach(this,(s,r)=>{const o=V.findKey(i,r);if(o){n[o]=Sa(s),delete n[r];return}const a=e?gy(r):String(r).trim();a!==r&&delete n[r],n[a]=Sa(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return V.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&V.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Pd]=this[Pd]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Hr(o);i[a]||(_y(s,o),i[a]=!0)}return V.isArray(e)?e.forEach(r):r(e),this}};xn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);V.reduceDescriptors(xn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});V.freezeMethods(xn);const vy="[REDACTED ****]";function xy(t){if(V.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(V.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function yy(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||V.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof xn&&(r=r.toJSON()),i.push(r);let o;if(V.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);V.isUndefined(c)||(o[l]=c)});else{if(!V.isPlainObject(r)&&xy(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?vy:s(l);V.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let ze=class Lm extends Error{static from(e,n,i,s,r,o){const a=new Lm(e.message,n||e.code,i,s,r);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&V.hasOwnProp(e,"redact")?e.redact:void 0,i=V.isArray(n)&&n.length>0?yy(e,n):V.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};ze.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ze.ERR_BAD_OPTION="ERR_BAD_OPTION";ze.ECONNABORTED="ECONNABORTED";ze.ETIMEDOUT="ETIMEDOUT";ze.ECONNREFUSED="ECONNREFUSED";ze.ERR_NETWORK="ERR_NETWORK";ze.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ze.ERR_DEPRECATED="ERR_DEPRECATED";ze.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ze.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ze.ERR_CANCELED="ERR_CANCELED";ze.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ze.ERR_INVALID_URL="ERR_INVALID_URL";ze.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Sy=null,Im=100;function Vc(t){return V.isPlainObject(t)||V.isArray(t)}function Nm(t){return V.endsWith(t,"[]")?t.slice(0,-2):t}function kl(t,e,n){return t?t.concat(e).map(function(s,r){return s=Nm(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function My(t){return V.isArray(t)&&!t.some(Vc)}const by=V.toFlatObject(V,{},null,function(e){return/^is[A-Z]/.test(e)});function _l(t,e,n){if(!V.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=V.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,E){return!V.isUndefined(E[M])});const i=n.metaTokens,s=n.visitor||g,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?Im:n.maxDepth,c=a&&V.isSpecCompliantForm(e),u=[];if(!V.isFunction(s))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(V.isDate(h))return h.toISOString();if(V.isBoolean(h))return h.toString();if(!c&&V.isBlob(h))throw new ze("Blob is not supported. Use a Buffer instead.");if(V.isArrayBuffer(h)||V.isTypedArray(h)){if(c&&typeof a=="function")return new a([h]);if(typeof Buffer<"u")return Buffer.from(h);throw new ze("Blob is not supported. Use a Buffer instead.",ze.ERR_NOT_SUPPORT)}return h}function d(h){if(h>l)throw new ze("Object is too deeply nested ("+h+" levels). Max depth: "+l,ze.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(h,M){if(l===1/0)return JSON.stringify(h);const E=[];return JSON.stringify(h,function(A,T){if(!V.isObject(T))return T;for(;E.length&&E[E.length-1]!==this;)E.pop();return E.push(T),d(M+E.length-1),T})}function g(h,M,E){let y=h;if(V.isReactNative(e)&&V.isReactNativeBlob(h))return e.append(kl(E,M,r),f(h)),!1;if(h&&!E&&typeof h=="object"){if(V.endsWith(M,"{}"))M=i?M:M.slice(0,-2),h=p(h,1);else if(V.isArray(h)&&My(h)||(V.isFileList(h)||V.endsWith(M,"[]"))&&(y=V.toArray(h)))return M=Nm(M),y.forEach(function(T,L){!(V.isUndefined(T)||T===null)&&e.append(o===!0?kl([M],L,r):o===null?M:M+"[]",f(T))}),!1}return Vc(h)?!0:(e.append(kl(E,M,r),f(h)),!1)}const v=Object.assign(by,{defaultVisitor:g,convertValue:f,isVisitable:Vc});function m(h,M,E=0){if(!V.isUndefined(h)){if(d(E),u.indexOf(h)!==-1)throw new Error("Circular reference detected in "+M.join("."));u.push(h),V.forEach(h,function(A,T){(!(V.isUndefined(A)||A===null)&&s.call(e,A,V.isString(T)?T.trim():T,M,v))===!0&&m(A,M?M.concat(T):[T],E+1)}),u.pop()}}if(!V.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Dd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function of(t,e){this._pairs=[],t&&_l(t,this,e)}const Um=of.prototype;Um.append=function(e,n){this._pairs.push([e,n])};Um.toString=function(e){const n=e?i=>e.call(this,i,Dd):Dd;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ey(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Om(t,e,n){if(!e)return t;t=t||"";const i=V.isFunction(n)?{serialize:n}:n,s=V.getSafeProp(i,"encode")||Ey,r=V.getSafeProp(i,"serialize");let o;if(r?o=r(e,i):o=V.isURLSearchParams(e)?e.toString():new of(e,i).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Ld{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){V.forEach(this.handlers,function(i){i!==null&&e(i)})}}const af={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Ty=typeof URLSearchParams<"u"?URLSearchParams:of,Ay=typeof FormData<"u"?FormData:null,wy=typeof Blob<"u"?Blob:null,Ry={isBrowser:!0,classes:{URLSearchParams:Ty,FormData:Ay,Blob:wy},protocols:["http","https","file","blob","url","data"]},lf=typeof window<"u"&&typeof document<"u",Hc=typeof navigator=="object"&&navigator||void 0,Cy=lf&&(!Hc||["ReactNative","NativeScript","NS"].indexOf(Hc.product)<0),Py=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dy=lf&&window.location.href||"http://localhost",Ly=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lf,hasStandardBrowserEnv:Cy,hasStandardBrowserWebWorkerEnv:Py,navigator:Hc,origin:Dy},Symbol.toStringTag,{value:"Module"})),an={...Ly,...Ry};function Iy(t,e){return _l(t,new an.classes.URLSearchParams,{visitor:function(n,i,s,r){return an.isNode&&V.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}const Id=Im;function Fm(t){if(t>Id)throw new ze("FormData field is too deeply nested ("+t+" levels). Max depth: "+Id,ze.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Ny(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)Fm(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function Uy(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Bm(t){function e(n,i,s,r){Fm(r);let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&V.isArray(s)?s.length:o,l?(V.hasOwnProp(s,o)?s[o]=V.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!V.hasOwnProp(s,o)||!V.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&V.isArray(s[o])&&(s[o]=Uy(s[o])),!a)}if(V.isFormData(t)&&V.isFunction(t.entries)){const n={};return V.forEachEntry(t,(i,s)=>{e(Ny(i),s,n,0)}),n}return null}const qs=(t,e)=>t!=null&&V.hasOwnProp(t,e)?t[e]:void 0;function Oy(t,e,n){if(V.isString(t))try{return(e||JSON.parse)(t),V.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Co={transitional:af,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=V.isObject(e);if(r&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return s?JSON.stringify(Bm(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e)||V.isReadableStream(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=qs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Iy(e,l).toString();if((a=V.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=qs(this,"env"),u=c&&c.FormData;return _l(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),Oy(e)):e}],transformResponse:[function(e){const n=qs(this,"transitional")||Co.transitional,i=n&&n.forcedJSONParsing,s=qs(this,"responseType"),r=s==="json";if(V.isResponse(e)||V.isReadableStream(e))return e;if(e&&V.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,qs(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?ze.from(l,ze.ERR_BAD_RESPONSE,this,null,qs(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:an.classes.FormData,Blob:an.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch","query"],t=>{Co.headers[t]={}});function Vl(t,e){const n=this||Co,i=e||n,s=xn.from(i.headers);let r=i.data;return V.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function zm(t){return!!(t&&t.__CANCEL__)}let Po=class extends ze{constructor(e,n,i){super(e??"canceled",ze.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function km(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new ze("Request failed with status code "+n.status,n.status>=400&&n.status<500?ze.ERR_BAD_REQUEST:ze.ERR_BAD_RESPONSE,n.config,n.request,n))}function Fy(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function By(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function zy(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const Ha=(t,e,n=3)=>{let i=0;const s=By(50,250);return zy(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Nd=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Ud=t=>(...e)=>V.asap(()=>t(...e)),ky=an.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,an.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(an.origin),an.navigator&&/(msie|trident)/i.test(an.navigator.userAgent)):()=>!0,Vy=an.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];V.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),V.isString(i)&&a.push(`path=${i}`),V.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),V.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Hy(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Gy(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const Wy=/^https?:(?!\/\/)/i,Xy=/[\t\n\r]/g;function qy(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function $y(t){return qy(t).replace(Xy,"")}function Od(t,e){if(typeof t=="string"&&Wy.test($y(t)))throw new ze('Invalid URL: missing "//" after protocol',ze.ERR_INVALID_URL,e)}function Vm(t,e,n,i){Od(e,i);let s=!Hy(e);return t&&(s||n===!1)?(Od(t,i),Gy(t,e)):e}const Fd=t=>t instanceof xn?{...t}:t;function zs(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,d,p){return V.isPlainObject(u)&&V.isPlainObject(f)?V.merge.call({caseless:p},u,f):V.isPlainObject(f)?V.merge({},f):V.isArray(f)?f.slice():f}function s(u,f,d,p){if(V.isUndefined(f)){if(!V.isUndefined(u))return i(void 0,u,d,p)}else return i(u,f,d,p)}function r(u,f){if(!V.isUndefined(f))return i(void 0,f)}function o(u,f){if(V.isUndefined(f)){if(!V.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=V.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!V.isUndefined(f))if(V.isPlainObject(f)){if(V.hasOwnProp(f,u))return f[u]}else return;const d=V.hasOwnProp(t,"transitional")?t.transitional:void 0;if(V.isPlainObject(d)&&V.hasOwnProp(d,u))return d[u]}function l(u,f,d){if(V.hasOwnProp(e,d))return i(u,f);if(V.hasOwnProp(t,d))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,d)=>s(Fd(u),Fd(f),d,!0)};return V.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const d=V.hasOwnProp(c,f)?c[f]:s,p=V.hasOwnProp(t,f)?t[f]:void 0,g=V.hasOwnProp(e,f)?e[f]:void 0,v=d(p,g,f);V.isUndefined(v)&&d!==l||(n[f]=v)}),V.hasOwnProp(e,"validateStatus")&&V.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(V.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const Yy=["content-type","content-length"];function Ky(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,s])=>{Yy.includes(i.toLowerCase())&&t.set(i,s)})}const Zy=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Hm(t){const e=zs({},t),n=d=>V.hasOwnProp(e,d)?e[d]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=xn.from(a),e.url=Om(Vm(c,f,u,e),n("params"),n("paramsSerializer")),l){const d=V.getSafeProp(l,"username")||"",p=V.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(d+":"+(p?Zy(p):"")))}catch(g){throw ze.from(g,ze.ERR_BAD_OPTION_VALUE,t)}}if(V.isFormData(i)&&(an.hasStandardBrowserEnv||an.hasStandardBrowserWebWorkerEnv||V.isReactNative(i)?a.setContentType(void 0):V.isFunction(i.getHeaders)&&Ky(a,i.getHeaders(),n("formDataHeaderPolicy"))),an.hasStandardBrowserEnv&&(V.isFunction(s)&&(s=s(e)),s===!0||s==null&&ky(e.url))){const p=r&&o&&Vy.read(o);p&&a.set(r,p)}return e}const Jy=typeof XMLHttpRequest<"u",jy=Jy&&function(t){return new Promise(function(n,i){const s=Hm(t);let r=s.data;const o=xn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,p,g;function v(){p&&p(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function h(){if(!m)return;const E=xn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};km(function(L){n(L),v()},function(L){i(L),v()},A),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(h)},m.onabort=function(){m&&(i(new ze("Request aborted",ze.ECONNABORTED,t,m)),v(),m=null)},m.onerror=function(y){const A=y&&y.message?y.message:"Network Error",T=new ze(A,ze.ERR_NETWORK,t,m);T.event=y||null,i(T),v(),m=null},m.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||af;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new ze(y,A.clarifyTimeoutError?ze.ETIMEDOUT:ze.ECONNABORTED,t,m)),v(),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&V.forEach(Dm(o),function(y,A){m.setRequestHeader(A,y)}),V.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([d,g]=Ha(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,p]=Ha(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(s.cancelToken||s.signal)&&(u=E=>{m&&(i(!E||E.type?new Po(null,t,m):E),m.abort(),v(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const M=Fy(s.url);if(M&&!an.protocols.includes(M)){i(new ze("Unsupported protocol "+M+":",ze.ERR_BAD_REQUEST,t)),v();return}m.send(r||null)})},Qy=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof ze?c:new Po(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new ze(`timeout of ${e}ms exceeded`,ze.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>V.asap(o),a},eS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},tS=async function*(t,e){for await(const n of nS(t))yield*eS(n,e)},nS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Bd=(t,e,n,i)=>{const s=tS(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Ga=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,iS=(t,e,n)=>e+2<n&&Ga(t.charCodeAt(e+1))&&Ga(t.charCodeAt(e+2));function sS(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let p=0;p<a;p++)if(i.charCodeAt(p)===37&&p+2<a){const g=i.charCodeAt(p+1),v=i.charCodeAt(p+2);Ga(g)&&Ga(v)&&(o-=2,p+=2)}let l=0,c=a-1;const u=p=>p>=2&&i.charCodeAt(p-2)===37&&i.charCodeAt(p-1)===51&&(i.charCodeAt(p)===68||i.charCodeAt(p)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const d=Math.floor(o/4)*3-(l||0);return d>0?d:0}let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&iS(i,o,a))r+=1,o+=2;else if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const cf="1.18.1",zd=64*1024,{isFunction:Wo}=V,rS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),kd=t=>{if(!V.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Vd=(t,...e)=>{try{return!!t(...e)}catch{return!1}},oS=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},aS=t=>{const e=V.global!==void 0&&V.global!==null?V.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=V.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?Wo(s):typeof fetch=="function",l=Wo(r),c=Wo(o);if(!a)return!1;const u=a&&Wo(n),f=a&&(typeof i=="function"?(h=>M=>h.encode(M))(new i):async h=>new Uint8Array(await new r(h).arrayBuffer())),d=l&&u&&Vd(()=>{let h=!1;const M=new r(an.origin,{body:new n,method:"POST",get duplex(){return h=!0,"half"}}),E=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),h&&!E}),p=c&&u&&Vd(()=>V.isReadableStream(new o("").body)),g={stream:p&&(h=>h.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(h=>{!g[h]&&(g[h]=(M,E)=>{let y=M&&M[h];if(y)return y.call(M);throw new ze(`Response type '${h}' is not supported`,ze.ERR_NOT_SUPPORT,E)})});const v=async h=>{if(h==null)return 0;if(V.isBlob(h))return h.size;if(V.isSpecCompliantForm(h))return(await new r(an.origin,{method:"POST",body:h}).arrayBuffer()).byteLength;if(V.isArrayBufferView(h)||V.isArrayBuffer(h))return h.byteLength;if(V.isURLSearchParams(h)&&(h=h+""),V.isString(h))return(await f(h)).byteLength},m=async(h,M)=>{const E=V.toFiniteNumber(h.getContentLength());return E??v(M)};return async h=>{let{url:M,method:E,data:y,signal:A,cancelToken:T,timeout:L,onDownloadProgress:x,onUploadProgress:R,responseType:N,headers:I,withCredentials:k="same-origin",fetchOptions:ie,maxContentLength:re,maxBodyLength:X}=Hm(h);const te=V.isNumber(re)&&re>-1,G=V.isNumber(X)&&X>-1,se=K=>V.hasOwnProp(h,K)?h[K]:void 0;let de=s||fetch;N=N?(N+"").toLowerCase():"text";let pe=Qy([A,T&&T.toAbortSignal()],L),me=null;const Te=pe&&pe.unsubscribe&&(()=>{pe.unsubscribe()});let Je,ct=null;const et=()=>new ze("Request body larger than maxBodyLength limit",ze.ERR_BAD_REQUEST,h,me);try{let K;const U=se("auth");if(U){const z=V.getSafeProp(U,"username")||"",Z=V.getSafeProp(U,"password")||"";K={username:z,password:Z}}if(oS(M)){const z=new URL(M,an.origin);if(!K&&(z.username||z.password)){const Z=kd(z.username),ve=kd(z.password);K={username:Z,password:ve}}(z.username||z.password)&&(z.username="",z.password="",M=z.href)}if(K&&(I.delete("authorization"),I.set("Authorization","Basic "+btoa(rS((K.username||"")+":"+(K.password||""))))),te&&typeof M=="string"&&M.startsWith("data:")&&sS(M)>re)throw new ze("maxContentLength size of "+re+" exceeded",ze.ERR_BAD_RESPONSE,h,me);if(G&&E!=="get"&&E!=="head"){const z=await v(y);if(typeof z=="number"&&isFinite(z)&&(Je=z,z>X))throw et()}const $=G&&(V.isReadableStream(y)||V.isStream(y)),ue=(z,Z,ve)=>Bd(z,zd,ge=>{if(G&&ge>X)throw ct=et();Z&&Z(ge)},ve);if(d&&E!=="get"&&E!=="head"&&(R||$)){if(Je=Je??await m(I,y),Je!==0||$){let z=new r(M,{method:"POST",body:y,duplex:"half"}),Z;if(V.isFormData(y)&&(Z=z.headers.get("content-type"))&&I.setContentType(Z),z.body){const[ve,ge]=R&&Nd(Je,Ha(Ud(R)))||[];y=ue(z.body,ve,ge)}}}else if($&&!l&&u&&E!=="get"&&E!=="head")y=ue(y);else if($&&l&&!d&&E!=="get"&&E!=="head")throw new ze("Stream request bodies are not supported by the current fetch implementation",ze.ERR_NOT_SUPPORT,h,me);V.isString(k)||(k=k?"include":"omit");const xe=l&&"credentials"in r.prototype;if(V.isFormData(y)){const z=I.getContentType();z&&/^multipart\/form-data/i.test(z)&&!/boundary=/i.test(z)&&I.delete("content-type")}I.set("User-Agent","axios/"+cf,!1);const Re={...ie,signal:pe,method:E.toUpperCase(),headers:Dm(I.normalize()),body:y,duplex:"half",credentials:xe?k:void 0};me=l&&new r(M,Re);let w=await(l?de(me,ie):de(M,Re));const P=xn.from(w.headers);if(te){const z=V.toFiniteNumber(P.getContentLength());if(z!=null&&z>re)throw new ze("maxContentLength size of "+re+" exceeded",ze.ERR_BAD_RESPONSE,h,me)}const B=p&&(N==="stream"||N==="response");if(p&&w.body&&(x||te||B&&Te)){const z={};["status","statusText","headers"].forEach(Le=>{z[Le]=w[Le]});const Z=V.toFiniteNumber(P.getContentLength()),[ve,ge]=x&&Nd(Z,Ha(Ud(x),!0))||[];let ce=0;const ae=Le=>{if(te&&(ce=Le,ce>re))throw new ze("maxContentLength size of "+re+" exceeded",ze.ERR_BAD_RESPONSE,h,me);ve&&ve(Le)};w=new o(Bd(w.body,zd,ae,()=>{ge&&ge(),Te&&Te()}),z)}N=N||"text";let Y=await g[V.findKey(g,N)||"text"](w,h);if(te&&!p&&!B){let z;if(Y!=null&&(typeof Y.byteLength=="number"?z=Y.byteLength:typeof Y.size=="number"?z=Y.size:typeof Y=="string"&&(z=typeof i=="function"?new i().encode(Y).byteLength:Y.length)),typeof z=="number"&&z>re)throw new ze("maxContentLength size of "+re+" exceeded",ze.ERR_BAD_RESPONSE,h,me)}return!B&&Te&&Te(),await new Promise((z,Z)=>{km(z,Z,{data:Y,headers:xn.from(w.headers),status:w.status,statusText:w.statusText,config:h,request:me})})}catch(K){if(Te&&Te(),pe&&pe.aborted&&pe.reason instanceof ze){const U=pe.reason;throw U.config=h,me&&(U.request=me),K!==U&&Object.defineProperty(U,"cause",{__proto__:null,value:K,writable:!0,enumerable:!1,configurable:!0}),U}if(ct)throw me&&!ct.request&&(ct.request=me),ct;if(K instanceof ze)throw me&&!K.request&&(K.request=me),K;if(K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)){const U=new ze("Network Error",ze.ERR_NETWORK,h,me,K&&K.response);throw Object.defineProperty(U,"cause",{__proto__:null,value:K.cause||K,writable:!0,enumerable:!1,configurable:!0}),U}throw ze.from(K,K&&K.code,h,me,K&&K.response)}}},lS=new Map,Gm=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=lS;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:aS(e)),u=c;return c};Gm();const uf={http:Sy,xhr:jy,fetch:{get:Gm}};V.forEach(uf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Hd=t=>`- ${t}`,cS=t=>V.isFunction(t)||t===null||t===!1;function uS(t,e){t=V.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!cS(i)&&(s=uf[(a=String(i)).toLowerCase()],s===void 0))throw new ze(`Unknown adapter '${a}'`);if(s&&(V.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Hd).join(`
`):" "+Hd(o[0]):"as no adapter specified";throw new ze("There is no suitable adapter to dispatch the request "+a,ze.ERR_NOT_SUPPORT)}return s}const Wm={getAdapter:uS,adapters:uf};function Hl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Po(null,t)}function Gd(t){return Hl(t),t.headers=xn.from(t.headers),t.data=Vl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Wm.getAdapter(t.adapter||Co.adapter,t)(t).then(function(i){Hl(t),t.response=i;try{i.data=Vl.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=xn.from(i.headers),i},function(i){if(!zm(i)&&(Hl(t),i&&i.response)){t.response=i.response;try{i.response.data=Vl.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=xn.from(i.response.headers)}return Promise.reject(i)})}const vl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{vl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Wd={};vl.transitional=function(e,n,i){function s(r,o){return"[Axios v"+cf+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new ze(s(o," has been removed"+(n?" in "+n:"")),ze.ERR_DEPRECATED);return n&&!Wd[o]&&(Wd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};vl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function fS(t,e,n){if(typeof t!="object"||t===null)throw new ze("options must be an object",ze.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new ze("option "+r+" must be "+l,ze.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ze("Unknown option "+r,ze.ERR_BAD_OPTION)}}const Ma={assertOptions:fS,validators:vl},dn=Ma.validators;let Fs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ld,response:new Ld}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=zs(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Ma.assertOptions(i,{silentJSONParsing:dn.transitional(dn.boolean),forcedJSONParsing:dn.transitional(dn.boolean),clarifyTimeoutError:dn.transitional(dn.boolean),legacyInterceptorReqResOrdering:dn.transitional(dn.boolean),advertiseZstdAcceptEncoding:dn.transitional(dn.boolean),validateStatusUndefinedResolves:dn.transitional(dn.boolean)},!1),s!=null&&(V.isFunction(s)?n.paramsSerializer={serialize:s}:Ma.assertOptions(s,{encode:dn.function,serialize:dn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ma.assertOptions(n,{baseUrl:dn.spelling("baseURL"),withXsrfToken:dn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&V.merge(r.common,r[n.method]);r&&V.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),n.headers=xn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(n)===!1)return;l=l&&v.synchronous;const m=n.transitional||af;m&&m.legacyInterceptorReqResOrdering?a.unshift(v.fulfilled,v.rejected):a.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const g=[Gd.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let p=n;for(;f<d;){const g=a[f++],v=a[f++];try{p=g(p)}catch(m){v.call(this,m);break}}try{u=Gd.call(this,p)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=zs(this.defaults,e);const n=Vm(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Om(n,e.params,e.paramsSerializer)}};V.forEach(["delete","get","head","options"],function(e){Fs.prototype[e]=function(n,i){return this.request(zs(i||{},{method:e,url:n,data:i&&V.hasOwnProp(i,"data")?i.data:void 0}))}});V.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(zs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Fs.prototype[e]=n(),e!=="query"&&(Fs.prototype[e+"Form"]=n(!0))});let dS=class Xm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Po(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Xm(function(s){e=s}),cancel:e}}};function hS(t){return function(n){return t.apply(null,n)}}function pS(t){return V.isObject(t)&&t.isAxiosError===!0}const Gc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Gc).forEach(([t,e])=>{Gc[e]=t});function qm(t){const e=new Fs(t),n=Mm(Fs.prototype.request,e);return V.extend(n,Fs.prototype,e,{allOwnKeys:!0}),V.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return qm(zs(t,s))},n}const $t=qm(Co);$t.Axios=Fs;$t.CanceledError=Po;$t.CancelToken=dS;$t.isCancel=zm;$t.VERSION=cf;$t.toFormData=_l;$t.AxiosError=ze;$t.Cancel=$t.CanceledError;$t.all=function(e){return Promise.all(e)};$t.spread=hS;$t.isAxiosError=pS;$t.mergeConfig=zs;$t.AxiosHeaders=xn;$t.formToJSON=t=>Bm(V.isHTMLForm(t)?new FormData(t):t);$t.getAdapter=Wm.getAdapter;$t.HttpStatusCode=Gc;$t.default=$t;const{Axios:LC,AxiosError:IC,CanceledError:NC,isCancel:UC,CancelToken:OC,VERSION:FC,all:BC,Cancel:zC,isAxiosError:kC,spread:VC,toFormData:HC,AxiosHeaders:GC,HttpStatusCode:WC,formToJSON:XC,getAdapter:qC,mergeConfig:$C,create:YC}=$t,Ht=$t.create({baseURL:"/api"}),mS={class:"page-card"},gS={key:0,class:"placeholder"},_S={class:"summary-grid"},vS={class:"summary-label"},xS={class:"summary-note"},yS={class:"content-grid"},SS={class:"panel"},MS={key:1,class:"placeholder"},bS={class:"panel"},ES={key:0,class:"table"},TS={key:1,class:"placeholder"},AS={key:0,class:"alert"},wS={__name:"HomePage",setup(t){const e=qe([]),n=qe([]),i=qe([]),s=qe(!0),r=qe(""),o=u=>u?new Date(u).toLocaleString("zh-TW"):"—",a=_t(()=>n.value.find(u=>!u.endTime)),l=_t(()=>[{title:"使用者數",value:e.value.length,detail:"資料庫已建立的使用者"},{title:"作業紀錄",value:n.value.length,detail:"所有作業資料"},{title:"辨識結果",value:i.value.length,detail:"所有物件辨識資料"}]);return gs(async()=>{var u,f;s.value=!0,r.value="";try{const[d,p,g]=await Promise.all([Ht.get("/users"),Ht.get("/operations"),Ht.get("/detections")]);e.value=d.data,n.value=p.data,i.value=g.data}catch(d){r.value=((f=(u=d.response)==null?void 0:u.data)==null?void 0:f.error)||"無法讀取資料庫資料，請確認後端服務與 MongoDB 是否已啟動。"}finally{s.value=!1}}),(u,f)=>{var d,p;return Me(),be("section",mS,[f[7]||(f[7]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Dashboard"),C("h2",null,"系統總覽")],-1)),s.value?(Me(),be("p",gS,"正在讀取資料庫資料…")):(Me(),be(Et,{key:1},[C("div",_S,[(Me(!0),be(Et,null,ti(l.value,g=>(Me(),be("article",{key:g.title,class:"summary-card"},[C("p",vS,ye(g.title),1),C("h3",null,ye(g.value),1),C("p",xS,ye(g.detail),1)]))),128))]),C("div",yS,[C("article",SS,[f[4]||(f[4]=C("h3",null,"目前作業",-1)),a.value?(Me(),be(Et,{key:0},[C("p",null,[f[0]||(f[0]=C("strong",null,"作業 ID：",-1)),bt(ye(a.value._id),1)]),C("p",null,[f[1]||(f[1]=C("strong",null,"使用者：",-1)),bt(ye(((d=a.value.userId)==null?void 0:d.name)||((p=a.value.userId)==null?void 0:p.email)||"未提供"),1)]),C("p",null,[f[2]||(f[2]=C("strong",null,"開始時間：",-1)),bt(ye(o(a.value.startTime)),1)]),C("p",null,[f[3]||(f[3]=C("strong",null,"說明：",-1)),bt(ye(a.value.description||"—"),1)])],64)):(Me(),be("p",MS,"目前沒有進行中的作業。"))]),C("article",bS,[f[6]||(f[6]=C("h3",null,"最新辨識結果",-1)),i.value.length?(Me(),be("table",ES,[f[5]||(f[5]=C("thead",null,[C("tr",null,[C("th",null,"時間"),C("th",null,"物件"),C("th",null,"深度")])],-1)),C("tbody",null,[(Me(!0),be(Et,null,ti(i.value.slice(0,6),g=>(Me(),be("tr",{key:g._id},[C("td",null,ye(o(g.timestamp)),1),C("td",null,ye(g.objectClass||"未分類"),1),C("td",null,ye(g.depth??"—"),1)]))),128))])])):(Me(),be("p",TS,"尚無辨識資料。"))])]),r.value?(Me(),be("p",AS,ye(r.value),1)):jt("",!0)],64))])}}},RS={class:"page-card account-page"},CS={class:"section-title"},PS={class:"panel account-panel"},DS={key:0},LS=["autocomplete"],IS={key:1},NS=["disabled"],US={key:0,class:"alert"},OS={__name:"AccountLoginPage",setup(t){const e=tf(),n=ym(),i=qe(n.query.mode==="register"?"register":"login"),s=qe(!1),r=qe(""),o=ms({name:"",email:"",password:"",confirmPassword:""}),a=()=>{i.value=i.value==="login"?"register":"login",r.value="",o.password="",o.confirmPassword=""};Ui(()=>n.query.mode,c=>{(c==="register"||c==="login")&&(i.value=c)});const l=async()=>{var c,u;if(r.value="",i.value==="register"&&o.password!==o.confirmPassword){r.value="兩次輸入的密碼不一致。";return}s.value=!0;try{const f=i.value==="login"?{email:o.email,password:o.password}:{name:o.name,email:o.email,password:o.password},d=await Ht.post(`/auth/${i.value==="login"?"login":"register"}`,f);Sm(d.data),e.replace(typeof n.query.redirect=="string"?n.query.redirect:"/")}catch(f){r.value=((u=(c=f.response)==null?void 0:c.data)==null?void 0:u.error)||"目前無法完成帳戶操作，請稍後再試。"}finally{s.value=!1}};return(c,u)=>(Me(),be("section",RS,[C("div",CS,[u[4]||(u[4]=C("p",{class:"eyebrow"},"Account",-1)),C("h2",null,ye(i.value==="login"?"登入平台":"建立帳號"),1)]),C("article",PS,[C("form",{class:"form-grid",onSubmit:Y0(l,["prevent"])},[i.value==="register"?(Me(),be("label",DS,[u[5]||(u[5]=bt("使用者名稱",-1)),Jt(C("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>o.name=f),type:"text",autocomplete:"name",required:""},null,512),[[Jn,o.name,void 0,{trim:!0}]])])):jt("",!0),C("label",null,[u[6]||(u[6]=bt("電子信箱",-1)),Jt(C("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>o.email=f),type:"email",autocomplete:"email",required:""},null,512),[[Jn,o.email,void 0,{trim:!0}]])]),C("label",null,[u[7]||(u[7]=bt("密碼",-1)),Jt(C("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>o.password=f),type:"password",autocomplete:i.value==="login"?"current-password":"new-password",minlength:"8",required:""},null,8,LS),[[Jn,o.password]])]),i.value==="register"?(Me(),be("label",IS,[u[8]||(u[8]=bt("確認密碼",-1)),Jt(C("input",{"onUpdate:modelValue":u[3]||(u[3]=f=>o.confirmPassword=f),type:"password",autocomplete:"new-password",minlength:"8",required:""},null,512),[[Jn,o.confirmPassword]])])):jt("",!0),C("button",{type:"submit",disabled:s.value},ye(s.value?"處理中…":i.value==="login"?"登入":"建立帳號"),9,NS)],32),r.value?(Me(),be("p",US,ye(r.value),1)):jt("",!0),C("button",{type:"button",class:"account-switch",onClick:a},ye(i.value==="login"?"尚未註冊？建立帳號":"已有帳號？返回登入"),1)])]))}},FS={class:"page-card profile-page"},BS={class:"panel profile-panel"},zS={key:0,class:"placeholder"},kS={class:"profile-avatar-large"},VS={class:"profile-fields"},HS={class:"profile-field-row"},GS={class:"profile-value"},WS=["disabled"],XS=["disabled"],qS={class:"profile-field-row"},$S={class:"profile-value"},YS=["disabled"],KS=["disabled"],ZS={class:"profile-field-row"},JS={class:"profile-value"},jS={key:0,class:"alert"},QS={key:2,class:"alert"},eM={__name:"AccountProfilePage",setup(t){const e=tf(),n=qe(""),i=qe(!0),s=qe(!1),r=qe(""),o=qe(null),a=ms({name:"",email:""}),l=async()=>{var p,g;try{o.value=(await Ht.get(`/users/${co.value.id}`)).data,a.name=o.value.name,a.email=o.value.email}catch(v){r.value=((g=(p=v.response)==null?void 0:p.data)==null?void 0:g.error)||"無法讀取帳戶資料。"}finally{i.value=!1}},c=p=>{n.value=p,r.value="",a[p]=o.value[p]},u=()=>{n.value&&(a[n.value]=o.value[n.value]),n.value="",r.value=""},f=async p=>{var g,v;s.value=!0,r.value="";try{const m=(await Ht.patch(`/users/${co.value.id}`,{[p]:a[p]})).data;o.value=m,rx(m),n.value=""}catch(m){r.value=((v=(g=m.response)==null?void 0:g.data)==null?void 0:v.error)||"無法更新帳戶資料。"}finally{s.value=!1}},d=()=>{ox(),e.push("/guide")};return gs(l),(p,g)=>(Me(),be("section",FS,[g[11]||(g[11]=C("div",{class:"section-title profile-title"},[C("p",{class:"eyebrow"},"Account"),C("h2",null,"帳戶資料")],-1)),C("article",BS,[i.value?(Me(),be("p",zS,"正在讀取帳戶資料…")):o.value?(Me(),be(Et,{key:1},[C("div",kS,ye(o.value.name.charAt(0).toUpperCase()),1),C("div",VS,[C("div",HS,[g[8]||(g[8]=C("span",{class:"profile-label"},"使用者名稱",-1)),C("div",GS,[n.value==="name"?(Me(),be(Et,{key:0},[Jt(C("input",{"onUpdate:modelValue":g[0]||(g[0]=v=>a.name=v),type:"text",autofocus:"",onKeyup:g[1]||(g[1]=ud(v=>f("name"),["enter"]))},null,544),[[Jn,a.name,void 0,{trim:!0}]]),C("button",{type:"button",class:"field-save",disabled:s.value,onClick:g[2]||(g[2]=v=>f("name"))},"✓",8,WS),C("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,XS)],64)):(Me(),be(Et,{key:1},[C("span",null,ye(o.value.name),1),C("button",{type:"button",class:"field-edit",title:"修改使用者名稱",onClick:g[3]||(g[3]=v=>c("name"))},"✎")],64))])]),C("div",qS,[g[9]||(g[9]=C("span",{class:"profile-label"},"電子信箱",-1)),C("div",$S,[n.value==="email"?(Me(),be(Et,{key:0},[Jt(C("input",{"onUpdate:modelValue":g[4]||(g[4]=v=>a.email=v),type:"email",autofocus:"",onKeyup:g[5]||(g[5]=ud(v=>f("email"),["enter"]))},null,544),[[Jn,a.email,void 0,{trim:!0}]]),C("button",{type:"button",class:"field-save",disabled:s.value,onClick:g[6]||(g[6]=v=>f("email"))},"✓",8,YS),C("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,KS)],64)):(Me(),be(Et,{key:1},[C("span",null,ye(o.value.email),1),C("button",{type:"button",class:"field-edit",title:"修改電子信箱",onClick:g[7]||(g[7]=v=>c("email"))},"✎")],64))])]),C("div",ZS,[g[10]||(g[10]=C("span",{class:"profile-label"},"註冊時間",-1)),C("div",JS,[C("span",null,ye(new Date(o.value.signUpTime).toLocaleString("zh-TW")),1)])])]),r.value?(Me(),be("p",jS,ye(r.value),1)):jt("",!0),C("button",{type:"button",class:"logout-danger",onClick:d},"登出帳戶")],64)):(Me(),be("p",QS,ye(r.value),1))])]))}},xl=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},tM={},nM={class:"page-card"};function iM(t,e){return Me(),be("section",nM,[...e[0]||(e[0]=[ju('<div class="section-title"><p class="eyebrow">Account</p><h2>密碼修改</h2></div><article class="panel"><h3>修改密碼</h3><div class="form-grid"><input type="password" placeholder="舊密碼"><input type="password" placeholder="新密碼"><input type="password" placeholder="確認新密碼"><button type="button">確認修改</button></div></article>',2)])])}const sM=xl(tM,[["render",iM]]),rM={},oM={class:"page-card"};function aM(t,e){return Me(),be("section",oM,[...e[0]||(e[0]=[C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Guide"),C("h2",null,"網站操作指引")],-1),C("article",{class:"panel"},[C("h3",null,"使用步驟"),C("ul",{class:"bullet-list"},[C("li",null,"選擇對應的定位任務頁面。"),C("li",null,"確認目前作業狀態與資料來源。"),C("li",null,"透過歷史資料查詢前次操作結果。")])],-1)])])}const lM=xl(rM,[["render",aM]]),cM={},uM={class:"page-card"};function fM(t,e){return Me(),be("section",uM,[...e[0]||(e[0]=[C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Technology"),C("h2",null,"定位技術介紹")],-1),C("article",{class:"panel"},[C("h3",null,"系統技術架構"),C("p",null,"本系統結合電腦視覺、深度估測與即時串流，讓終端定位作業可快速觀測與追溯。")],-1)])])}const dM=xl(cM,[["render",fM]]),hM={class:"page-card"},pM={key:0,class:"placeholder"},mM={key:1,class:"table table-spaced"},gM={key:2,class:"placeholder"},_M={key:3,class:"alert"},vM={__name:"ObjectQueryPage",setup(t){const e=qe([]),n=qe(""),i=qe(!0),s=qe(""),r=a=>a?new Date(a).toLocaleString("zh-TW"):"—",o=_t(()=>e.value.filter(a=>{var l;return(l=a.objectClass)==null?void 0:l.toLowerCase().includes(n.value.toLowerCase())}));return gs(async()=>{try{e.value=(await Ht.get("/detections")).data}catch{s.value="無法讀取辨識資料。"}finally{i.value=!1}}),(a,l)=>(Me(),be("section",hM,[l[2]||(l[2]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"History"),C("h2",null,"物件辨識紀錄")],-1)),Jt(C("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"search",placeholder:"依物件名稱篩選"},null,512),[[Jn,n.value]]),i.value?(Me(),be("p",pM,"正在讀取資料…")):o.value.length?(Me(),be("table",mM,[l[1]||(l[1]=C("thead",null,[C("tr",null,[C("th",null,"時間"),C("th",null,"物件"),C("th",null,"深度"),C("th",null,"作業 ID")])],-1)),C("tbody",null,[(Me(!0),be(Et,null,ti(o.value,c=>{var u;return Me(),be("tr",{key:c._id},[C("td",null,ye(r(c.timestamp)),1),C("td",null,ye(c.objectClass||"未分類"),1),C("td",null,ye(c.depth??"—"),1),C("td",null,ye(((u=c.operationId)==null?void 0:u._id)||c.operationId),1)])}),128))])])):(Me(),be("p",gM,"沒有符合的辨識資料。")),s.value?(Me(),be("p",_M,ye(s.value),1)):jt("",!0)]))}},xM={class:"page-card"},yM={key:0,class:"placeholder"},SM={key:1,class:"table"},MM={key:2,class:"placeholder"},bM={key:3,class:"alert"},EM={__name:"TaskHistoryPage",setup(t){const e=qe([]),n=qe(!0),i=qe(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return gs(async()=>{try{e.value=(await Ht.get("/operations")).data}catch{i.value="無法讀取作業紀錄。"}finally{n.value=!1}}),(r,o)=>(Me(),be("section",xM,[o[1]||(o[1]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"History"),C("h2",null,"任務歷程")],-1)),n.value?(Me(),be("p",yM,"正在讀取資料…")):e.value.length?(Me(),be("table",SM,[o[0]||(o[0]=C("thead",null,[C("tr",null,[C("th",null,"開始時間"),C("th",null,"結束時間"),C("th",null,"使用者"),C("th",null,"狀態")])],-1)),C("tbody",null,[(Me(!0),be(Et,null,ti(e.value,a=>{var l,c;return Me(),be("tr",{key:a._id},[C("td",null,ye(s(a.startTime)),1),C("td",null,ye(s(a.endTime)),1),C("td",null,ye(((l=a.userId)==null?void 0:l.name)||((c=a.userId)==null?void 0:c.email)||"未提供"),1),C("td",null,ye(a.endTime?"已完成":"進行中"),1)])}),128))])])):(Me(),be("p",MM,"尚無任務資料。")),i.value?(Me(),be("p",bM,ye(i.value),1)):jt("",!0)]))}},TM={class:"page-card"},AM={key:0,class:"placeholder"},wM={key:1,class:"table"},RM={key:2,class:"placeholder"},CM={key:3,class:"alert"},PM={__name:"OperationLogPage",setup(t){const e=qe([]),n=qe(!0),i=qe(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return gs(async()=>{try{e.value=(await Ht.get("/operations")).data}catch{i.value="無法讀取操作紀錄。"}finally{n.value=!1}}),(r,o)=>(Me(),be("section",TM,[o[1]||(o[1]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"History"),C("h2",null,"操作紀錄")],-1)),n.value?(Me(),be("p",AM,"正在讀取資料…")):e.value.length?(Me(),be("table",wM,[o[0]||(o[0]=C("thead",null,[C("tr",null,[C("th",null,"作業 ID"),C("th",null,"開始時間"),C("th",null,"結束時間"),C("th",null,"說明")])],-1)),C("tbody",null,[(Me(!0),be(Et,null,ti(e.value,a=>(Me(),be("tr",{key:a._id},[C("td",null,ye(a._id),1),C("td",null,ye(s(a.startTime)),1),C("td",null,ye(s(a.endTime)),1),C("td",null,ye(a.description||"—"),1)]))),128))])])):(Me(),be("p",RM,"尚無操作紀錄。")),i.value?(Me(),be("p",CM,ye(i.value),1)):jt("",!0)]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ff="185",pr={ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},DM=0,Xd=1,LM=2,ba=1,IM=2,eo=3,fs=0,Ln=1,Kn=2,Bi=0,mr=1,qd=2,$d=3,Yd=4,NM=5,Rs=100,UM=101,OM=102,FM=103,BM=104,zM=200,kM=201,VM=202,HM=203,Wc=204,Xc=205,GM=206,WM=207,XM=208,qM=209,$M=210,YM=211,KM=212,ZM=213,JM=214,qc=0,$c=1,Yc=2,Ar=3,Kc=4,Zc=5,Jc=6,jc=7,$m=0,jM=1,QM=2,vi=0,Ym=1,Km=2,Zm=3,Jm=4,jm=5,Qm=6,eg=7,tg=300,ks=301,wr=302,Gl=303,Wl=304,yl=306,Qc=1e3,Oi=1001,eu=1002,cn=1003,eb=1004,Xo=1005,_n=1006,Xl=1007,Ls=1008,Bn=1009,ng=1010,ig=1011,yo=1012,df=1013,Mi=1014,mi=1015,Gi=1016,hf=1017,pf=1018,So=1020,sg=35902,rg=35899,og=1021,ag=1022,jn=1023,Wi=1026,Is=1027,lg=1028,mf=1029,Vs=1030,gf=1031,_f=1033,Ea=33776,Ta=33777,Aa=33778,wa=33779,tu=35840,nu=35841,iu=35842,su=35843,ru=36196,ou=37492,au=37496,lu=37488,cu=37489,Wa=37490,uu=37491,fu=37808,du=37809,hu=37810,pu=37811,mu=37812,gu=37813,_u=37814,vu=37815,xu=37816,yu=37817,Su=37818,Mu=37819,bu=37820,Eu=37821,Tu=36492,Au=36494,wu=36495,Ru=36283,Cu=36284,Xa=36285,Pu=36286,tb=3200,Du=0,nb=1,as="",Gn="srgb",qa="srgb-linear",$a="linear",Tt="srgb",$s=7680,Kd=519,ib=512,sb=513,rb=514,vf=515,ob=516,ab=517,xf=518,lb=519,Zd=35044,Jd="300 es",gi=2e3,Mo=2001;function cb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ya(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ub(){const t=Ya("canvas");return t.style.display="block",t}const jd={};function Qd(...t){const e="THREE."+t.shift();console.log(e,...t)}function cg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Qe(...t){t=cg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function vt(...t){t=cg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function gr(...t){const e=t.join(" ");e in jd||(jd[e]=!0,Qe(...t))}function fb(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const db={[qc]:$c,[Yc]:Jc,[Kc]:jc,[Ar]:Zc,[$c]:qc,[Jc]:Yc,[jc]:Kc,[Zc]:Ar};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ra=Math.PI/180,Lu=180/Math.PI;function Do(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function dt(t,e,n){return Math.max(e,Math.min(n,t))}function hb(t,e){return(t%e+e)%e}function ql(t,e,n){return(1-n)*t+n*e}function Gr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pb={DEG2RAD:Ra},Af=class Af{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Af.prototype.isVector2=!0;let nt=Af;class ds{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(f!==v||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+f*v;m<0&&(d=-d,p=-p,g=-g,v=-v,m=-m);let h=1-a;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);h=Math.sin(h*M)/E,a=Math.sin(a*M)/E,l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+v*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+v*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wf=class wf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(eh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wf.prototype.isVector3=!0;let W=wf;const $l=new W,eh=new ds,Rf=class Rf{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],h=s[6],M=s[1],E=s[4],y=s[7],A=s[2],T=s[5],L=s[8];return r[0]=o*v+a*M+l*A,r[3]=o*m+a*E+l*T,r[6]=o*h+a*y+l*L,r[1]=c*v+u*M+f*A,r[4]=c*m+u*E+f*T,r[7]=c*h+u*y+f*L,r[2]=d*v+p*M+g*A,r[5]=d*m+p*E+g*T,r[8]=d*h+p*y+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=n*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yl.makeScale(e,n)),this}rotate(e){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yl.makeRotation(-e)),this}translate(e,n){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rf.prototype.isMatrix3=!0;let st=Rf;const Yl=new st,th=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mb(){const t={enabled:!0,workingColorSpace:qa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?$a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[qa]:{primaries:e,whitePoint:i,transfer:$a,toXYZ:th,fromXYZ:nh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:th,fromXYZ:nh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const gt=mb();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _r(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ys;class gb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=Ya("canvas")),Ys.width=e.width,Ys.height=e.height;const s=Ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ya("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _b=0;class yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Kl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let vb=0;const Zl=new W;class Tn extends _s{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=Oi,s=Oi,r=_n,o=Ls,a=jn,l=Bn,c=Tn.DEFAULT_ANISOTROPY,u=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Do(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Qe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qc:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qc:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=tg;Tn.DEFAULT_ANISOTROPY=1;const Cf=class Cf{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,y=(p+1)/2,A=(h+1)/2,T=(u+d)/4,L=(f+v)/4,x=(g+m)/4;return E>y&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=L/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=x/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=L/r,s=x/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this.w=dt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this.w=dt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cf.prototype.isVector4=!0;let zt=Cf;class xb extends _s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new Tn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new yf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends xb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ug extends Tn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yb extends Tn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const el=class el{constructor(e,n,i,s,r,o,a,l,c,u,f,d,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,p,g,v,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new el().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sb,e,Mb)}lookAt(e,n,i){const s=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Ji.crossVectors(i,Un),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Ji.crossVectors(i,Un)),Ji.normalize(),qo.crossVectors(Un,Ji),s[0]=Ji.x,s[4]=qo.x,s[8]=Un.x,s[1]=Ji.y,s[5]=qo.y,s[9]=Un.y,s[2]=Ji.z,s[6]=qo.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],M=i[3],E=i[7],y=i[11],A=i[15],T=s[0],L=s[4],x=s[8],R=s[12],N=s[1],I=s[5],k=s[9],ie=s[13],re=s[2],X=s[6],te=s[10],G=s[14],se=s[3],de=s[7],pe=s[11],me=s[15];return r[0]=o*T+a*N+l*re+c*se,r[4]=o*L+a*I+l*X+c*de,r[8]=o*x+a*k+l*te+c*pe,r[12]=o*R+a*ie+l*G+c*me,r[1]=u*T+f*N+d*re+p*se,r[5]=u*L+f*I+d*X+p*de,r[9]=u*x+f*k+d*te+p*pe,r[13]=u*R+f*ie+d*G+p*me,r[2]=g*T+v*N+m*re+h*se,r[6]=g*L+v*I+m*X+h*de,r[10]=g*x+v*k+m*te+h*pe,r[14]=g*R+v*ie+m*G+h*me,r[3]=M*T+E*N+y*re+A*se,r[7]=M*L+E*I+y*X+A*de,r[11]=M*x+E*k+y*te+A*pe,r[15]=M*R+E*ie+y*G+A*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15],M=l*p-c*d,E=a*p-c*f,y=a*d-l*f,A=o*p-c*u,T=o*d-l*u,L=o*f-a*u;return n*(v*M-m*E+h*y)-i*(g*M-m*A+h*T)+s*(g*E-v*A+h*L)-r*(g*y-v*T+m*L)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],M=n*a-i*o,E=n*l-s*o,y=n*c-r*o,A=i*l-s*a,T=i*c-r*a,L=s*c-r*l,x=u*v-f*g,R=u*m-d*g,N=u*h-p*g,I=f*m-d*v,k=f*h-p*v,ie=d*h-p*m,re=M*ie-E*k+y*I+A*N-T*R+L*x;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/re;return e[0]=(a*ie-l*k+c*I)*X,e[1]=(s*k-i*ie-r*I)*X,e[2]=(v*L-m*T+h*A)*X,e[3]=(d*T-f*L-p*A)*X,e[4]=(l*N-o*ie-c*R)*X,e[5]=(n*ie-s*N+r*R)*X,e[6]=(m*y-g*L-h*E)*X,e[7]=(u*L-d*y+p*E)*X,e[8]=(o*k-a*N+c*x)*X,e[9]=(i*N-n*k-r*x)*X,e[10]=(g*T-v*y+h*M)*X,e[11]=(f*y-u*T-p*M)*X,e[12]=(a*R-o*I-l*x)*X,e[13]=(n*I-i*R+s*x)*X,e[14]=(v*E-g*A-m*M)*X,e[15]=(u*A-f*E+d*M)*X,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,g=r*f,v=o*u,m=o*f,h=a*f,M=l*c,E=l*u,y=l*f,A=i.x,T=i.y,L=i.z;return s[0]=(1-(v+h))*A,s[1]=(p+y)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(d+h))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+E)*L,s[9]=(m-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Ks.set(s[0],s[1],s[2]).length();const a=Ks.set(s[4],s[5],s[6]).length(),l=Ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),qn.copy(this);const c=1/o,u=1/a,f=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,n.setFromRotationMatrix(qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=gi,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),p=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===gi)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Mo)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=gi,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),p=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===gi)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Mo)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};el.prototype.isMatrix4=!0;let Bt=el;const Ks=new W,qn=new Bt,Sb=new W(0,0,0),Mb=new W(1,1,1),Ji=new W,qo=new W,Un=new W,ih=new Bt,sh=new ds;class hs{constructor(e=0,n=0,i=0,s=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ih,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bb=0;const rh=new W,Zs=new ds,Ai=new Bt,$o=new W,Wr=new W,Eb=new W,Tb=new ds,oh=new W(1,0,0),ah=new W(0,1,0),lh=new W(0,0,1),ch={type:"added"},Ab={type:"removed"},Js={type:"childadded",child:null},Jl={type:"childremoved",child:null};class rn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new W,n=new hs,i=new ds,s=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new st}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(oh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,n){return rh.copy(e).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(oh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$o.copy(e):$o.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Wr,$o,this.up):Ai.lookAt($o,Wr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),Js.child=e,this.dispatchEvent(Js),Js.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ab),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}rn.DEFAULT_UP=new W(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ls extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wb={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Ql(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=gt.workingColorSpace){if(e=hb(e,1),n=dt(n,0,1),i=dt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Ql(o,r,e+1/3),this.g=Ql(o,r,e),this.b=Ql(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,n=Gn){function i(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=fg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return gt.workingToColorSpace(pn.copy(this),e),Math.round(dt(pn.r*255,0,255))*65536+Math.round(dt(pn.g*255,0,255))*256+Math.round(dt(pn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.workingToColorSpace(pn.copy(this),n);const i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=gt.workingColorSpace){return gt.workingToColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Gn){gt.workingToColorSpace(pn.copy(this),e);const n=pn.r,i=pn.g,s=pn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Yo);const i=ql(ji.h,Yo.h,n),s=ql(ji.s,Yo.s,n),r=ql(ji.l,Yo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new ft;ft.NAMES=fg;class Rb extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new W,wi=new W,ec=new W,Ri=new W,js=new W,Qs=new W,uh=new W,tc=new W,nc=new W,ic=new W,sc=new zt,rc=new zt,oc=new zt;class Zn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),$n.subVectors(e,n),s.cross($n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){$n.subVectors(s,n),wi.subVectors(i,n),ec.subVectors(e,n);const o=$n.dot($n),a=$n.dot(wi),l=$n.dot(ec),c=wi.dot(wi),u=wi.dot(ec),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return sc.setScalar(0),rc.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(e,n),rc.fromBufferAttribute(e,i),oc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sc,r.x),o.addScaledVector(rc,r.y),o.addScaledVector(oc,r.z),o}static isFrontFacing(e,n,i,s){return $n.subVectors(i,n),wi.subVectors(e,n),$n.cross(wi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$n.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,i),Qs.subVectors(r,i),tc.subVectors(e,i);const l=js.dot(tc),c=Qs.dot(tc);if(l<=0&&c<=0)return n.copy(i);nc.subVectors(e,s);const u=js.dot(nc),f=Qs.dot(nc);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(js,o);ic.subVectors(e,r);const p=js.dot(ic),g=Qs.dot(ic);if(g>=0&&p<=g)return n.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Qs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return uh.subVectors(r,s),a=(f-u)/(f-u+(p-g)),n.copy(s).addScaledVector(uh,a);const h=1/(m+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector(js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Lo{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Zo.subVectors(this.max,Xr),er.subVectors(e.a,Xr),tr.subVectors(e.b,Xr),nr.subVectors(e.c,Xr),Qi.subVectors(tr,er),es.subVectors(nr,tr),bs.subVectors(er,nr);let n=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-bs.z,bs.y,Qi.z,0,-Qi.x,es.z,0,-es.x,bs.z,0,-bs.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-bs.y,bs.x,0];return!ac(n,er,tr,nr,Zo)||(n=[1,0,0,0,1,0,0,0,1],!ac(n,er,tr,nr,Zo))?!1:(Jo.crossVectors(Qi,es),n=[Jo.x,Jo.y,Jo.z],ac(n,er,tr,nr,Zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new W,new W,new W,new W,new W,new W,new W,new W],Yn=new W,Ko=new Lo,er=new W,tr=new W,nr=new W,Qi=new W,es=new W,bs=new W,Xr=new W,Zo=new W,Jo=new W,Es=new W;function ac(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Es.fromArray(t,r);const a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),l=e.dot(Es),c=n.dot(Es),u=i.dot(Es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yt=new W,jo=new nt;let Cb=0;class yi extends _s{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zd,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)jo.fromBufferAttribute(this,n),jo.applyMatrix3(e),this.setXY(n,jo.x,jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gr(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gr(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gr(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array),r=wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class dg extends yi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class hg extends yi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qt extends yi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Pb=new Lo,qr=new W,lc=new W;class Sl{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Pb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const n=qr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(lc)),this.expandByPoint(qr.copy(e.center).sub(lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Db=0;const Hn=new Bt,cc=new rn,ir=new W,On=new Lo,$r=new Lo,nn=new W;class An extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cb(e)?hg:dg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(On.min,$r.min),On.expandByPoint(nn),nn.addVectors(On.max,$r.max),On.expandByPoint(nn)):(On.expandByPoint($r.min),On.expandByPoint($r.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),nn.add(ir)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new yi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new W,l[x]=new W;const c=new W,u=new W,f=new W,d=new nt,p=new nt,g=new nt,v=new W,m=new W;function h(x,R,N){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,N),d.fromBufferAttribute(r,x),p.fromBufferAttribute(r,R),g.fromBufferAttribute(r,N),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[x].add(v),a[R].add(v),a[N].add(v),l[x].add(m),l[R].add(m),l[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,R=M.length;x<R;++x){const N=M[x],I=N.start,k=N.count;for(let ie=I,re=I+k;ie<re;ie+=3)h(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const E=new W,y=new W,A=new W,T=new W;function L(x){A.fromBufferAttribute(s,x),T.copy(A);const R=a[x];E.copy(R),E.sub(A.multiplyScalar(A.dot(R))).normalize(),y.crossVectors(T,R);const I=y.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,I)}for(let x=0,R=M.length;x<R;++x){const N=M[x],I=N.start,k=N.count;for(let ie=I,re=I+k;ie<re;ie+=3)L(e.getX(ie+0)),L(e.getX(ie+1)),L(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new yi(d,u,f)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new An,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Lb=0;class Nr extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=mr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Qe(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==fs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wc&&(i.blendSrc=this.blendSrc),this.blendDst!==Xc&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new nt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pi=new W,uc=new W,Qo=new W,ts=new W,fc=new W,ea=new W,dc=new W;class Ml{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){uc.copy(e).add(n).multiplyScalar(.5),Qo.copy(n).sub(e).normalize(),ts.copy(this.origin).sub(uc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Qo),a=ts.dot(this.direction),l=-ts.dot(Qo),c=ts.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(uc).addScaledVector(Qo,d),p}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,s,r){fc.subVectors(n,e),ea.subVectors(i,e),dc.crossVectors(fc,ea);let o=this.direction.dot(dc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);const l=a*this.direction.dot(ea.crossVectors(ts,ea));if(l<0)return null;const c=a*this.direction.dot(fc.cross(ts));if(c<0||l+c>o)return null;const u=-a*ts.dot(dc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ka extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fh=new Bt,Ts=new Ml,ta=new Sl,dh=new W,na=new W,ia=new W,sa=new W,hc=new W,ra=new W,hh=new W,oa=new W;class sn extends rn{constructor(e=new An,n=new Ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(hc.fromBufferAttribute(f,e),o?ra.addScaledVector(hc,u):ra.addScaledVector(hc.sub(n),u))}n.add(ra)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(ta.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(ta,dh)===null||Ts.origin.distanceToSquared(dh)>(e.far-e.near)**2))&&(fh.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ts)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,A=E;y<A;y+=3){const T=a.getX(y),L=a.getX(y+1),x=a.getX(y+2);s=aa(this,h,e,i,c,u,f,T,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const M=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);s=aa(this,o,e,i,c,u,f,M,E,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,A=E;y<A;y+=3){const T=y,L=y+1,x=y+2;s=aa(this,h,e,i,c,u,f,T,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const M=m,E=m+1,y=m+2;s=aa(this,o,e,i,c,u,f,M,E,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Ib(t,e,n,i,s,r,o,a){let l;if(e.side===Ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===fs,a),l===null)return null;oa.copy(a),oa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(oa);return c<n.near||c>n.far?null:{distance:c,point:oa.clone(),object:t}}function aa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,na),t.getVertexPosition(l,ia),t.getVertexPosition(c,sa);const u=Ib(t,e,n,i,na,ia,sa,hh);if(u){const f=new W;Zn.getBarycoord(hh,na,ia,sa,f),s&&(u.uv=Zn.getInterpolatedAttribute(s,a,l,c,f,new nt)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,a,l,c,f,new nt)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};Zn.getNormal(na,ia,sa,d.normal),u.face=d,u.barycoord=f}return u}class Nb extends Tn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=cn,u=cn,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pc=new W,Ub=new W,Ob=new st;class rs{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=pc.subVectors(i,n).cross(Ub.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(pc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ob.getNormalMatrix(e),s=this.coplanarPoint(pc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new Sl,Fb=new nt(.5,.5),la=new W;class Mf{constructor(e=new rs,n=new rs,i=new rs,s=new rs,r=new rs,o=new rs){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],h=r[11],M=r[12],E=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,p-u,h-g,A-M).normalize(),s[1].setComponents(c+o,p+u,h+g,A+M).normalize(),s[2].setComponents(c+a,p+f,h+v,A+E).normalize(),s[3].setComponents(c-a,p-f,h-v,A-E).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,h-m,A-y).normalize();else if(s[4].setComponents(c-l,p-d,h-m,A-y).normalize(),n===gi)s[5].setComponents(c+l,p+d,h+m,A+y).normalize();else if(n===Mo)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);const n=Fb.distanceTo(e.center);return As.radius=.7071067811865476+n,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bf extends Nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Za=new W,Ja=new W,ph=new Bt,Yr=new Ml,ca=new Sl,mc=new W,mh=new W;class pg extends rn{constructor(e=new An,n=new bf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Za.fromBufferAttribute(n,s-1),Ja.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new Qt(i,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;ph.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=u.getX(v),M=u.getX(v+1),E=ua(this,e,Yr,l,h,M,v);E&&n.push(E)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),h=ua(this,e,Yr,l,v,m,g-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=ua(this,e,Yr,l,v,v+1,v);h&&n.push(h)}if(this.isLineLoop){const v=ua(this,e,Yr,l,g-1,p,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ua(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Za.fromBufferAttribute(a,s),Ja.fromBufferAttribute(a,r),n.distanceSqToSegment(Za,Ja,mc,mh)>i)return;mc.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(mc);if(!(c<e.near||c>e.far))return{distance:c,point:mh.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const gh=new W,_h=new W;class Bb extends pg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)gh.fromBufferAttribute(n,s),_h.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gh.distanceTo(_h);e.setAttribute("lineDistance",new Qt(i,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mg extends Tn{constructor(e=[],n=ks,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rr extends Tn{constructor(e,n,i=Mi,s,r,o,a=cn,l=cn,c,u=Wi,f=1){if(u!==Wi&&u!==Is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zb extends Rr{constructor(e,n=Mi,i=ks,s,r,o=cn,a=cn,l,c=Wi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gg extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hs extends An{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function g(v,m,h,M,E,y,A,T,L,x,R){const N=y/L,I=A/x,k=y/2,ie=A/2,re=T/2,X=L+1,te=x+1;let G=0,se=0;const de=new W;for(let pe=0;pe<te;pe++){const me=pe*I-ie;for(let Te=0;Te<X;Te++){const Je=Te*N-k;de[v]=Je*M,de[m]=me*E,de[h]=re,c.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[h]=T>0?1:-1,u.push(de.x,de.y,de.z),f.push(Te/L),f.push(1-pe/x),G+=1}}for(let pe=0;pe<x;pe++)for(let me=0;me<L;me++){const Te=d+me+X*pe,Je=d+me+X*(pe+1),ct=d+(me+1)+X*(pe+1),et=d+(me+1)+X*pe;l.push(Te,Je,et),l.push(Je,ct,et),se+=6}a.addGroup(p,se,R),p+=se,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bo extends An{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],p=[];let g=0;const v=[],m=i/2;let h=0;M(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2));function M(){const y=new W,A=new W;let T=0;const L=(n-e)/i;for(let x=0;x<=r;x++){const R=[],N=x/r,I=N*(n-e)+e;for(let k=0;k<=s;k++){const ie=k/s,re=ie*l+a,X=Math.sin(re),te=Math.cos(re);A.x=I*X,A.y=-N*i+m,A.z=I*te,f.push(A.x,A.y,A.z),y.set(X,L,te).normalize(),d.push(y.x,y.y,y.z),p.push(ie,1-N),R.push(g++)}v.push(R)}for(let x=0;x<s;x++)for(let R=0;R<r;R++){const N=v[R][x],I=v[R+1][x],k=v[R+1][x+1],ie=v[R][x+1];(e>0||R!==0)&&(u.push(N,I,ie),T+=3),(n>0||R!==r-1)&&(u.push(I,k,ie),T+=3)}c.addGroup(h,T,0),h+=T}function E(y){const A=g,T=new nt,L=new W;let x=0;const R=y===!0?e:n,N=y===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,m*N,0),d.push(0,N,0),p.push(.5,.5),g++;const I=g;for(let k=0;k<=s;k++){const re=k/s*l+a,X=Math.cos(re),te=Math.sin(re);L.x=R*te,L.y=m*N,L.z=R*X,f.push(L.x,L.y,L.z),d.push(0,N,0),T.x=X*.5+.5,T.y=te*.5*N+.5,p.push(T.x,T.y),g++}for(let k=0;k<s;k++){const ie=A+k,re=I+k;y===!0?u.push(re,re+1,ie):u.push(re+1,re,ie),x+=3}c.addGroup(h,x,y===!0?1:2),h+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ja extends bo{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ja(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends An{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const M=h*d-o;for(let E=0;E<c;E++){const y=E*f-r;g.push(y,-M,0),v.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<a;M++){const E=M+c*h,y=M+c*(h+1),A=M+1+c*(h+1),T=M+1+c*h;p.push(E,y,T),p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qa extends An{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new W,d=new W,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const M=[],E=h/i,y=o+E*a,A=e*Math.cos(y),T=Math.sqrt(e*e-A*A);let L=0;h===0&&o===0?L=.5/n:h===i&&l===Math.PI&&(L=-.5/n);for(let x=0;x<=n;x++){const R=x/n,N=s+R*r;f.x=-T*Math.cos(N),f.y=A,f.z=T*Math.sin(N),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(R+L,1-E),M.push(c++)}u.push(M)}for(let h=0;h<i;h++)for(let M=0;M<n;M++){const E=u[h][M+1],y=u[h][M],A=u[h+1][M],T=u[h+1][M+1];(h!==0||o>0)&&p.push(E,y,T),(h!==i-1||l<Math.PI)&&p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Cr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(vh(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(vh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Sn(t){const e={};for(let n=0;n<t.length;n++){const i=Cr(t[n]);for(const s in i)e[s]=i[s]}return e}function vh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function kb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _g(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Vb={clone:Cr,merge:Sn};var Hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hb,this.fragmentShader=Gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new ft().setHex(s.value);break;case"v2":this.uniforms[i].value=new nt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new zt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new st().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Wb extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kr extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Du,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xb extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qb extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vg extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class $b extends vg{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const gc=new Bt,xh=new W,yh=new W;class Yb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),n.position.copy(xh),yh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(yh),n.updateMatrixWorld(),gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Mo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fa=new W,da=new ds,li=new W;class xg extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fa,da,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,da,li.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(fa,da,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,da,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new W,Sh=new nt,Mh=new nt;class Wn extends xg{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lu*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,n){return this.getViewBounds(e,Sh,Mh),n.subVectors(Mh,Sh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ef extends xg{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Kb extends Yb{constructor(){super(new Ef(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zb extends vg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Kb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const sr=-90,rr=1;class Jb extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wn(sr,rr,e,n);s.layers=this.layers,this.add(s);const r=new Wn(sr,rr,e,n);r.layers=this.layers,this.add(r);const o=new Wn(sr,rr,e,n);o.layers=this.layers,this.add(o);const a=new Wn(sr,rr,e,n);a.layers=this.layers,this.add(a);const l=new Wn(sr,rr,e,n);l.layers=this.layers,this.add(l);const c=new Wn(sr,rr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jb extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bh=new Bt;class Qb{constructor(e,n,i=0,s=1/0){this.ray=new Ml(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):vt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(e,n=!0,i=[]){return Iu(e,this,i,n),i.sort(Eh),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Iu(e[s],this,i,n);return i.sort(Eh),i}}function Eh(t,e){return t.distance-e.distance}function Iu(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)Iu(r[o],e,n,!0)}}class Th{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Pf=class Pf{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Pf.prototype.isMatrix2=!0;let Ah=Pf;class eE extends Bb{constructor(e=10,n=10,i=4473924,s=8947848){i=new ft(i),s=new ft(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=n;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=d===r?i:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new An;u.setAttribute("position",new Qt(l,3)),u.setAttribute("color",new Qt(c,3));const f=new bf({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class tE extends _s{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function wh(t,e,n,i){const s=nE(i);switch(n){case og:return t*e;case lg:return t*e/s.components*s.byteLength;case mf:return t*e/s.components*s.byteLength;case Vs:return t*e*2/s.components*s.byteLength;case gf:return t*e*2/s.components*s.byteLength;case ag:return t*e*3/s.components*s.byteLength;case jn:return t*e*4/s.components*s.byteLength;case _f:return t*e*4/s.components*s.byteLength;case Ea:case Ta:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Aa:case wa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nu:case su:return Math.max(t,16)*Math.max(e,8)/4;case tu:case iu:return Math.max(t,8)*Math.max(e,8)/2;case ru:case ou:case lu:case cu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case au:case Wa:case uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case du:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case pu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case _u:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case bu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Tu:case Au:case wu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ru:case Cu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xa:case Pu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nE(t){switch(t){case Bn:case ng:return{byteLength:1,components:1};case yo:case ig:case Gi:return{byteLength:2,components:1};case hf:case pf:return{byteLength:2,components:4};case Mi:case df:case mi:return{byteLength:4,components:1};case sg:case rg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ff}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ff);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function iE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sE=`#ifdef USE_ALPHAHASH
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
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HE=`#ifdef USE_FOG
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
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,at={alphahash_fragment:sE,alphahash_pars_fragment:rE,alphamap_fragment:oE,alphamap_pars_fragment:aE,alphatest_fragment:lE,alphatest_pars_fragment:cE,aomap_fragment:uE,aomap_pars_fragment:fE,batching_pars_vertex:dE,batching_vertex:hE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:_E,bumpmap_pars_fragment:vE,clipping_planes_fragment:xE,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:SE,clipping_planes_vertex:ME,color_fragment:bE,color_pars_fragment:EE,color_pars_vertex:TE,color_vertex:AE,common:wE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:CE,displacementmap_pars_vertex:PE,displacementmap_vertex:DE,emissivemap_fragment:LE,emissivemap_pars_fragment:IE,colorspace_fragment:NE,colorspace_pars_fragment:UE,envmap_fragment:OE,envmap_common_pars_fragment:FE,envmap_pars_fragment:BE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:ZE,envmap_vertex:kE,fog_vertex:VE,fog_pars_vertex:HE,fog_fragment:GE,fog_pars_fragment:WE,gradientmap_pars_fragment:XE,lightmap_pars_fragment:qE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:YE,lights_pars_begin:KE,lights_toon_fragment:JE,lights_toon_pars_fragment:jE,lights_phong_fragment:QE,lights_phong_pars_fragment:eT,lights_physical_fragment:tT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:sT,lights_fragment_end:rT,lightprobes_pars_fragment:oT,logdepthbuf_fragment:aT,logdepthbuf_pars_fragment:lT,logdepthbuf_pars_vertex:cT,logdepthbuf_vertex:uT,map_fragment:fT,map_pars_fragment:dT,map_particle_fragment:hT,map_particle_pars_fragment:pT,metalnessmap_fragment:mT,metalnessmap_pars_fragment:gT,morphinstance_vertex:_T,morphcolor_vertex:vT,morphnormal_vertex:xT,morphtarget_pars_vertex:yT,morphtarget_vertex:ST,normal_fragment_begin:MT,normal_fragment_maps:bT,normal_pars_fragment:ET,normal_pars_vertex:TT,normal_vertex:AT,normalmap_pars_fragment:wT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:CT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:DT,opaque_fragment:LT,packing:IT,premultiplied_alpha_fragment:NT,project_vertex:UT,dithering_fragment:OT,dithering_pars_fragment:FT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:kT,shadowmap_pars_vertex:VT,shadowmap_vertex:HT,shadowmask_pars_fragment:GT,skinbase_vertex:WT,skinning_pars_vertex:XT,skinning_vertex:qT,skinnormal_vertex:$T,specularmap_fragment:YT,specularmap_pars_fragment:KT,tonemapping_fragment:ZT,tonemapping_pars_fragment:JT,transmission_fragment:jT,transmission_pars_fragment:QT,uv_pars_fragment:eA,uv_pars_vertex:tA,uv_vertex:nA,worldpos_vertex:iA,background_vert:sA,background_frag:rA,backgroundCube_vert:oA,backgroundCube_frag:aA,cube_vert:lA,cube_frag:cA,depth_vert:uA,depth_frag:fA,distance_vert:dA,distance_frag:hA,equirect_vert:pA,equirect_frag:mA,linedashed_vert:gA,linedashed_frag:_A,meshbasic_vert:vA,meshbasic_frag:xA,meshlambert_vert:yA,meshlambert_frag:SA,meshmatcap_vert:MA,meshmatcap_frag:bA,meshnormal_vert:EA,meshnormal_frag:TA,meshphong_vert:AA,meshphong_frag:wA,meshphysical_vert:RA,meshphysical_frag:CA,meshtoon_vert:PA,meshtoon_frag:DA,points_vert:LA,points_frag:IA,shadow_vert:NA,shadow_frag:UA,sprite_vert:OA,sprite_frag:FA},Be={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},hi={basic:{uniforms:Sn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Sn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Sn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Sn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Sn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new ft(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Sn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Sn([Be.points,Be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Sn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Sn([Be.common,Be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Sn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Sn([Be.sprite,Be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Sn([Be.common,Be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Sn([Be.lights,Be.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};hi.physical={uniforms:Sn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const ha={r:0,b:0,g:0},BA=new Bt,Sg=new st;Sg.set(-1,0,0,0,1,0,0,0,1);function zA(t,e,n,i,s,r){const o=new ft(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function p(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const y=M.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(M){let E=!1;const y=p(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),E=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(M,E){const y=p(E);y&&(y.isCubeTexture||y.mapping===yl)?(c===void 0&&(c=new sn(new Hs(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Cr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sg),c.material.toneMapped=gt.getTransfer(y.colorSpace)!==Tt,(u!==y||f!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new sn(new Io(2,2),new bi({name:"BackgroundMaterial",uniforms:Cr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(ha,_g(t)),n.buffers.color.setClear(ha.r,ha.g,ha.b,E,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:h}}function kA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(I,k,ie,re,X){let te=!1;const G=f(I,re,ie,k);r!==G&&(r=G,c(r.object)),te=p(I,re,ie,X),te&&g(I,re,ie,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,y(I,k,ie,re),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function f(I,k,ie,re){const X=re.wireframe===!0;let te=i[k.id];te===void 0&&(te={},i[k.id]=te);const G=I.isInstancedMesh===!0?I.id:0;let se=te[G];se===void 0&&(se={},te[G]=se);let de=se[ie.id];de===void 0&&(de={},se[ie.id]=de);let pe=de[X];return pe===void 0&&(pe=d(l()),de[X]=pe),pe}function d(I){const k=[],ie=[],re=[];for(let X=0;X<n;X++)k[X]=0,ie[X]=0,re[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:re,object:I,attributes:{},index:null}}function p(I,k,ie,re){const X=r.attributes,te=k.attributes;let G=0;const se=ie.getAttributes();for(const de in se)if(se[de].location>=0){const me=X[de];let Te=te[de];if(Te===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(Te=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(Te=I.instanceColor)),me===void 0||me.attribute!==Te||Te&&me.data!==Te.data)return!0;G++}return r.attributesNum!==G||r.index!==re}function g(I,k,ie,re){const X={},te=k.attributes;let G=0;const se=ie.getAttributes();for(const de in se)if(se[de].location>=0){let me=te[de];me===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(me=I.instanceColor));const Te={};Te.attribute=me,me&&me.data&&(Te.data=me.data),X[de]=Te,G++}r.attributes=X,r.attributesNum=G,r.index=re}function v(){const I=r.newAttributes;for(let k=0,ie=I.length;k<ie;k++)I[k]=0}function m(I){h(I,0)}function h(I,k){const ie=r.newAttributes,re=r.enabledAttributes,X=r.attributeDivisors;ie[I]=1,re[I]===0&&(t.enableVertexAttribArray(I),re[I]=1),X[I]!==k&&(t.vertexAttribDivisor(I,k),X[I]=k)}function M(){const I=r.newAttributes,k=r.enabledAttributes;for(let ie=0,re=k.length;ie<re;ie++)k[ie]!==I[ie]&&(t.disableVertexAttribArray(ie),k[ie]=0)}function E(I,k,ie,re,X,te,G){G===!0?t.vertexAttribIPointer(I,k,ie,X,te):t.vertexAttribPointer(I,k,ie,re,X,te)}function y(I,k,ie,re){v();const X=re.attributes,te=ie.getAttributes(),G=k.defaultAttributeValues;for(const se in te){const de=te[se];if(de.location>=0){let pe=X[se];if(pe===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),pe!==void 0){const me=pe.normalized,Te=pe.itemSize,Je=e.get(pe);if(Je===void 0)continue;const ct=Je.buffer,et=Je.type,K=Je.bytesPerElement,U=et===t.INT||et===t.UNSIGNED_INT||pe.gpuType===df;if(pe.isInterleavedBufferAttribute){const $=pe.data,ue=$.stride,xe=pe.offset;if($.isInstancedInterleavedBuffer){for(let Re=0;Re<de.locationSize;Re++)h(de.location+Re,$.meshPerAttribute);I.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Re=0;Re<de.locationSize;Re++)m(de.location+Re);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let Re=0;Re<de.locationSize;Re++)E(de.location+Re,Te/de.locationSize,et,me,ue*K,(xe+Te/de.locationSize*Re)*K,U)}else{if(pe.isInstancedBufferAttribute){for(let $=0;$<de.locationSize;$++)h(de.location+$,pe.meshPerAttribute);I.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let $=0;$<de.locationSize;$++)m(de.location+$);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let $=0;$<de.locationSize;$++)E(de.location+$,Te/de.locationSize,et,me,Te*K,Te/de.locationSize*$*K,U)}}else if(G!==void 0){const me=G[se];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(de.location,me);break;case 3:t.vertexAttrib3fv(de.location,me);break;case 4:t.vertexAttrib4fv(de.location,me);break;default:t.vertexAttrib1fv(de.location,me)}}}}M()}function A(){R();for(const I in i){const k=i[I];for(const ie in k){const re=k[ie];for(const X in re){const te=re[X];for(const G in te)u(te[G].object),delete te[G];delete re[X]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const k=i[I.id];for(const ie in k){const re=k[ie];for(const X in re){const te=re[X];for(const G in te)u(te[G].object),delete te[G];delete re[X]}}delete i[I.id]}function L(I){for(const k in i){const ie=i[k];for(const re in ie){const X=ie[re];if(X[I.id]===void 0)continue;const te=X[I.id];for(const G in te)u(te[G].object),delete te[G];delete X[I.id]}}}function x(I){for(const k in i){const ie=i[k],re=I.isInstancedMesh===!0?I.id:0,X=ie[re];if(X!==void 0){for(const te in X){const G=X[te];for(const se in G)u(G[se].object),delete G[se];delete X[te]}delete ie[re],Object.keys(ie).length===0&&delete i[k]}}}function R(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function VA(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function HA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==jn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const x=L===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Bn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==mi&&!x)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,maxSamples:A,samples:T}}function GA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new rs,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,E=M*4;let y=h.clippingState||null;l.value=y,y=u(g,d,E,p);for(let A=0;A!==E;++A)y[A]=n[A];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,y=p;E!==v;++E,y+=4)o.copy(f[E]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const cs=4,Rh=[.125,.215,.35,.446,.526,.582],Cs=20,WA=256,Zr=new Ef,Ch=new ft;let _c=null,vc=0,xc=0,yc=!1;const XA=new W;class Ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=XA}=r;_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,xc),this._renderer.xr.enabled=yc,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Gi,format:jn,colorSpace:qa,depthBuffer:!1},s=Dh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qA(r)),this._blurMaterial=YA(r,e,n),this._ggxMaterial=$A(r,e,n)}return s}_compileMaterial(e){const n=new sn(new An,e);this._renderer.compile(n,Zr)}_sceneToCubeUV(e,n,i,s,r){const l=new Wn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Ch),f.toneMapping=vi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sn(new Hs,new Ka({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let h=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,h=!0):(m.color.copy(Ch),h=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const A=this._cubeSize;or(s,y*A,E>2?A:0,A,A),f.setRenderTarget(s),h&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===ks||e.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;or(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-cs?i-g+cs:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,or(r,m,h,3*v,2*v),s.setRenderTarget(r),s.render(a,Zr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,or(e,m,h,3*v,2*v),s.setRenderTarget(e),s.render(a,Zr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Cs-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Cs;m>Cs&&Qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);const h=[];let M=0;for(let L=0;L<Cs;++L){const x=L/v,R=Math.exp(-x*x/2);h.push(R),L===0?M+=R:L<m&&(M+=2*R)}for(let L=0;L<h.length;L++)h[L]=h[L]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const y=this._sizeLods[s],A=3*y*(s>E-cs?s-E+cs:0),T=4*(this._cubeSize-y);or(n,A,T,3*y,2*y),l.setRenderTarget(n),l.render(f,Zr)}}function qA(t){const e=[],n=[],i=[];let s=t;const r=t-cs+1+Rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-cs?l=Rh[o-t+cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,M=new Float32Array(v*g*p),E=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let T=0;T<p;T++){const L=T%3*2/3-1,x=T>2?0:-1,R=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];M.set(R,v*g*T),E.set(d,m*g*T);const N=[T,T,T,T,T,T];y.set(N,h*g*T)}const A=new An;A.setAttribute("position",new yi(M,v)),A.setAttribute("uv",new yi(E,m)),A.setAttribute("faceIndex",new yi(y,h)),i.push(new sn(A,null)),s>cs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Dh(t,e,n){const i=new xi(t,e,n);return i.texture.mapping=yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function $A(t,e,n){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function YA(t,e,n){const i=new Float32Array(Cs),s=new W(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Lh(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ih(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}class Mg extends xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new mg(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hs(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:Bi});r.uniforms.tEquirect.value=n;const o=new sn(s,r),a=n.minFilter;return n.minFilter===Ls&&(n.minFilter=_n),new Jb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function KA(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Gl||p===Wl)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new Mg(g.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,g=p===Gl||p===Wl,v=p===ks||p===wr;if(g||v){let m=n.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new Ph(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Ph(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===Gl?d.mapping=ks:p===Wl&&(d.mapping=wr),d}function l(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function ZA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&gr("WebGLRenderer: "+i+" extension not supported."),s}}}function JA(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const M=p.array;v=p.version;for(let E=0,y=M.length;E<y;E+=3){const A=M[E+0],T=M[E+1],L=M[E+2];d.push(A,T,T,L,L,A)}}else{const M=g.array;v=g.version;for(let E=0,y=M.length/3-1;E<y;E+=3){const A=E+0,T=E+1,L=E+2;d.push(A,T,T,L,L,A)}}const m=new(g.count>=65535?hg:dg)(d,1);m.version=v;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function jA(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*o),n.update(d,i,1)}function c(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,r,f*o,p),n.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let v=0;for(let m=0;m<p;m++)v+=d[m];n.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function QA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ew(t,e,n){const i=new WeakMap,s=new zt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let N=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var p=N;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*T*4*f),x=new ug(L,A,T,f);x.type=mi,x.needsUpdate=!0;const R=y*4;for(let I=0;I<f;I++){const k=h[I],ie=M[I],re=E[I],X=A*T*4*I;for(let te=0;te<k.count;te++){const G=te*R;g===!0&&(s.fromBufferAttribute(k,te),L[X+G+0]=s.x,L[X+G+1]=s.y,L[X+G+2]=s.z,L[X+G+3]=0),v===!0&&(s.fromBufferAttribute(ie,te),L[X+G+4]=s.x,L[X+G+5]=s.y,L[X+G+6]=s.z,L[X+G+7]=0),m===!0&&(s.fromBufferAttribute(re,te),L[X+G+8]=s.x,L[X+G+9]=s.y,L[X+G+10]=s.z,L[X+G+11]=re.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new nt(A,T)},i.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function tw(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const nw={[Ym]:"LINEAR_TONE_MAPPING",[Km]:"REINHARD_TONE_MAPPING",[Zm]:"CINEON_TONE_MAPPING",[Jm]:"ACES_FILMIC_TONE_MAPPING",[Qm]:"AGX_TONE_MAPPING",[eg]:"NEUTRAL_TONE_MAPPING",[jm]:"CUSTOM_TONE_MAPPING"};function iw(t,e,n,i,s,r){const o=new xi(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Rr(e,n):void 0}),a=new xi(e,n,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),l=new An;l.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const c=new Wb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new sn(l,c),f=new Ef(-1,1,1,-1,0,1);let d=null,p=null,g=!1,v,m=null,h=[],M=!1;this.setSize=function(E,y){o.setSize(E,y),a.setSize(E,y);for(let A=0;A<h.length;A++){const T=h[A];T.setSize&&T.setSize(E,y)}},this.setEffects=function(E){h=E,M=h.length>0&&h[0].isRenderPass===!0;const y=o.width,A=o.height;for(let T=0;T<h.length;T++){const L=h[T];L.setSize&&L.setSize(y,A)}},this.begin=function(E,y){if(g||E.toneMapping===vi&&h.length===0)return!1;if(m=y,y!==null){const A=y.width,T=y.height;(o.width!==A||o.height!==T)&&this.setSize(A,T)}return M===!1&&E.setRenderTarget(o),v=E.toneMapping,E.toneMapping=vi,!0},this.hasRenderPass=function(){return M},this.end=function(E,y){E.toneMapping=v,g=!0;let A=o,T=a;for(let L=0;L<h.length;L++){const x=h[L];if(x.enabled!==!1&&(x.render(E,T,A,y),x.needsSwap!==!1)){const R=A;A=T,T=R}}if(d!==E.outputColorSpace||p!==E.toneMapping){d=E.outputColorSpace,p=E.toneMapping,c.defines={},gt.getTransfer(d)===Tt&&(c.defines.SRGB_TRANSFER="");const L=nw[p];L&&(c.defines[L]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,E.setRenderTarget(m),E.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const bg=new Tn,Nu=new Rr(1,1),Eg=new ug,Tg=new yb,Ag=new mg,Nh=[],Uh=[],Oh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function Ur(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Nh[s];if(r===void 0&&(r=new Float32Array(s),Nh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function en(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function El(t,e){let n=Uh[e];n===void 0&&(n=new Int32Array(e),Uh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2fv(this.addr,e),tn(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;t.uniform3fv(this.addr,e),tn(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4fv(this.addr,e),tn(n,e)}}function lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;Bh.set(i),t.uniformMatrix2fv(this.addr,!1,Bh),tn(n,i)}}function cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;Fh.set(i),t.uniformMatrix3fv(this.addr,!1,Fh),tn(n,i)}}function uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;Oh.set(i),t.uniformMatrix4fv(this.addr,!1,Oh),tn(n,i)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2iv(this.addr,e),tn(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3iv(this.addr,e),tn(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4iv(this.addr,e),tn(n,e)}}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2uiv(this.addr,e),tn(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3uiv(this.addr,e),tn(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4uiv(this.addr,e),tn(n,e)}}function xw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Nu.compareFunction=n.isReversedDepthBuffer()?xf:vf,r=Nu):r=bg,n.setTexture2D(e||r,s)}function yw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Tg,s)}function Sw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Ag,s)}function Mw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Eg,s)}function bw(t){switch(t){case 5126:return sw;case 35664:return rw;case 35665:return ow;case 35666:return aw;case 35674:return lw;case 35675:return cw;case 35676:return uw;case 5124:case 35670:return fw;case 35667:case 35671:return dw;case 35668:case 35672:return hw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return _w;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Mw}}function Ew(t,e){t.uniform1fv(this.addr,e)}function Tw(t,e){const n=Ur(e,this.size,2);t.uniform2fv(this.addr,n)}function Aw(t,e){const n=Ur(e,this.size,3);t.uniform3fv(this.addr,n)}function ww(t,e){const n=Ur(e,this.size,4);t.uniform4fv(this.addr,n)}function Rw(t,e){const n=Ur(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Cw(t,e){const n=Ur(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pw(t,e){const n=Ur(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Dw(t,e){t.uniform1iv(this.addr,e)}function Lw(t,e){t.uniform2iv(this.addr,e)}function Iw(t,e){t.uniform3iv(this.addr,e)}function Nw(t,e){t.uniform4iv(this.addr,e)}function Uw(t,e){t.uniform1uiv(this.addr,e)}function Ow(t,e){t.uniform2uiv(this.addr,e)}function Fw(t,e){t.uniform3uiv(this.addr,e)}function Bw(t,e){t.uniform4uiv(this.addr,e)}function zw(t,e,n){const i=this.cache,s=e.length,r=El(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Nu:o=bg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function kw(t,e,n){const i=this.cache,s=e.length,r=El(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Tg,r[o])}function Vw(t,e,n){const i=this.cache,s=e.length,r=El(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Ag,r[o])}function Hw(t,e,n){const i=this.cache,s=e.length,r=El(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Eg,r[o])}function Gw(t){switch(t){case 5126:return Ew;case 35664:return Tw;case 35665:return Aw;case 35666:return ww;case 35674:return Rw;case 35675:return Cw;case 35676:return Pw;case 5124:case 35670:return Dw;case 35667:case 35671:return Lw;case 35668:case 35672:return Iw;case 35669:case 35673:return Nw;case 5125:return Uw;case 36294:return Ow;case 36295:return Fw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return kw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return Hw}}class Ww{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bw(n.type)}}class Xw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Gw(n.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function zh(t,e){t.seq.push(e),t.map[e.id]=e}function $w(t,e,n){const i=t.name,s=i.length;for(Sc.lastIndex=0;;){const r=Sc.exec(i),o=Sc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zh(n,c===void 0?new Ww(a,t,e):new Xw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new qw(a),zh(n,f)),n=f}}}class Ca{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);$w(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function kh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Yw=37297;let Kw=0;function Zw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Vh=new st;function Jw(t){gt._getMatrix(Vh,gt.workingColorSpace,t);const e=`mat3( ${Vh.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case $a:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Hh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Zw(t.getShaderSource(e),a)}else return r}function jw(t,e){const n=Jw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Qw={[Ym]:"Linear",[Km]:"Reinhard",[Zm]:"Cineon",[Jm]:"ACESFilmic",[Qm]:"AgX",[eg]:"Neutral",[jm]:"Custom"};function eR(t,e){const n=Qw[e];return n===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pa=new W;function tR(){gt.getLuminanceCoefficients(pa);const t=pa.x.toFixed(4),e=pa.y.toFixed(4),n=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function iR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function to(t){return t!==""}function Gh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(t){return t.replace(rR,aR)}const oR=new Map;function aR(t,e){let n=at[e];if(n===void 0){const i=oR.get(e);if(i!==void 0)n=at[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uu(n)}const lR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(t){return t.replace(lR,cR)}function cR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const uR={[ba]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function fR(t){return uR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dR={[ks]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[yl]:"ENVMAP_TYPE_CUBE_UV"};function hR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":dR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const pR={[wr]:"ENVMAP_MODE_REFRACTION"};function mR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":pR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gR={[$m]:"ENVMAP_BLENDING_MULTIPLY",[jM]:"ENVMAP_BLENDING_MIX",[QM]:"ENVMAP_BLENDING_ADD"};function _R(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":gR[t.combine]||"ENVMAP_BLENDING_NONE"}function vR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fR(n),c=hR(n),u=mR(n),f=_R(n),d=vR(n),p=nR(n),g=iR(r),v=s.createProgram();let m,h,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(to).join(`
`),h.length>0&&(h+=`
`)):(m=[qh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),h=[qh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vi?"#define TONE_MAPPING":"",n.toneMapping!==vi?at.tonemapping_pars_fragment:"",n.toneMapping!==vi?eR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,jw("linearToOutputTexel",n.outputColorSpace),tR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(to).join(`
`)),o=Uu(o),o=Gh(o,n),o=Wh(o,n),a=Uu(a),a=Gh(a,n),a=Wh(a,n),o=Xh(o),a=Xh(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=M+m+o,y=M+h+a,A=kh(s,s.VERTEX_SHADER,E),T=kh(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,T),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(I){if(t.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",ie=s.getShaderInfoLog(A)||"",re=s.getShaderInfoLog(T)||"",X=k.trim(),te=ie.trim(),G=re.trim();let se=!0,de=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,A,T);else{const pe=Hh(s,A,"vertex"),me=Hh(s,T,"fragment");vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+pe+`
`+me)}else X!==""?Qe("WebGLProgram: Program Info Log:",X):(te===""||G==="")&&(de=!1);de&&(I.diagnostics={runnable:se,programLog:X,vertexShader:{log:te,prefix:m},fragmentShader:{log:G,prefix:h}})}s.deleteShader(A),s.deleteShader(T),x=new Ca(s,v),R=sR(s,v)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,Yw)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let yR=0;class SR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MR(e),n.set(e,i)),i}}class MR{constructor(e){this.id=yR++,this.code=e,this.usedTimes=0}}function bR(t){return t===Vs||t===Wa||t===Xa}function ER(t,e,n,i,s,r){const o=new Sf,a=new SR,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,R,N,I,k,ie){const re=I.fog,X=k.geometry,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||te,G),de=se&&se.mapping===yl?se.image.height:null,pe=p[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Qe("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Te=me!==void 0?me.length:0;let Je=0;X.morphAttributes.position!==void 0&&(Je=1),X.morphAttributes.normal!==void 0&&(Je=2),X.morphAttributes.color!==void 0&&(Je=3);let ct,et,K,U;if(pe){const We=hi[pe];ct=We.vertexShader,et=We.fragmentShader}else{ct=x.vertexShader,et=x.fragmentShader;const We=a.getVertexShaderStage(x),Ft=a.getFragmentShaderStage(x);a.update(x,We,Ft),K=We.id,U=Ft.id}const $=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),xe=k.isInstancedMesh===!0,Re=k.isBatchedMesh===!0,w=!!x.map,P=!!x.matcap,B=!!se,Y=!!x.aoMap,z=!!x.lightMap,Z=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,ge=!!x.displacementMap,ce=!!x.emissiveMap,ae=!!x.metalnessMap,Le=!!x.roughnessMap,D=x.anisotropy>0,ke=x.clearcoat>0,Ie=x.dispersion>0,b=x.iridescence>0,_=x.sheen>0,O=x.transmission>0,q=D&&!!x.anisotropyMap,Q=ke&&!!x.clearcoatMap,Se=ke&&!!x.clearcoatNormalMap,we=ke&&!!x.clearcoatRoughnessMap,oe=b&&!!x.iridescenceMap,le=b&&!!x.iridescenceThicknessMap,Ae=_&&!!x.sheenColorMap,Ve=_&&!!x.sheenRoughnessMap,De=!!x.specularMap,Ce=!!x.specularColorMap,Ye=!!x.specularIntensityMap,je=O&&!!x.transmissionMap,it=O&&!!x.thicknessMap,F=!!x.gradientMap,Pe=!!x.alphaMap,he=x.alphaTest>0,Ne=!!x.alphaHash,Fe=!!x.extensions;let _e=vi;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(_e=t.toneMapping);const Xe={shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:ct,fragmentShader:et,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:U,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Re,batchingColor:Re&&k._colorsTexture!==null,instancing:xe,instancingColor:xe&&k.instanceColor!==null,instancingMorph:xe&&k.morphTexture!==null,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:w,matcap:P,envMap:B,envMapMode:B&&se.mapping,envMapCubeUVHeight:de,aoMap:Y,lightMap:z,bumpMap:Z,normalMap:ve,displacementMap:ge,emissiveMap:ce,normalMapObjectSpace:ve&&x.normalMapType===nb,normalMapTangentSpace:ve&&x.normalMapType===Du,packedNormalMap:ve&&x.normalMapType===Du&&bR(x.normalMap.format),metalnessMap:ae,roughnessMap:Le,anisotropy:D,anisotropyMap:q,clearcoat:ke,clearcoatMap:Q,clearcoatNormalMap:Se,clearcoatRoughnessMap:we,dispersion:Ie,iridescence:b,iridescenceMap:oe,iridescenceThicknessMap:le,sheen:_,sheenColorMap:Ae,sheenRoughnessMap:Ve,specularMap:De,specularColorMap:Ce,specularIntensityMap:Ye,transmission:O,transmissionMap:je,thicknessMap:it,gradientMap:F,opaque:x.transparent===!1&&x.blending===mr&&x.alphaToCoverage===!1,alphaMap:Pe,alphaTest:he,alphaHash:Ne,combine:x.combine,mapUv:w&&g(x.map.channel),aoMapUv:Y&&g(x.aoMap.channel),lightMapUv:z&&g(x.lightMap.channel),bumpMapUv:Z&&g(x.bumpMap.channel),normalMapUv:ve&&g(x.normalMap.channel),displacementMapUv:ge&&g(x.displacementMap.channel),emissiveMapUv:ce&&g(x.emissiveMap.channel),metalnessMapUv:ae&&g(x.metalnessMap.channel),roughnessMapUv:Le&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&g(x.sheenRoughnessMap.channel),specularMapUv:De&&g(x.specularMap.channel),specularColorMapUv:Ce&&g(x.specularColorMap.channel),specularIntensityMapUv:Ye&&g(x.specularIntensityMap.channel),transmissionMapUv:je&&g(x.transmissionMap.channel),thicknessMapUv:it&&g(x.thicknessMap.channel),alphaMapUv:Pe&&g(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ve||D),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(w||Pe),fog:!!re,useFog:x.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Je,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:_e,decodeVideoTexture:w&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Tt,decodeVideoTextureEmissive:ce&&x.emissiveMap.isVideoTexture===!0&&gt.getTransfer(x.emissiveMap.colorSpace)===Tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kn,flipSided:x.side===Ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Fe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&x.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)R.push(N),R.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(h(R,x),M(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function h(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function M(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function E(x){const R=p[x.type];let N;if(R){const I=hi[R];N=Vb.clone(I.uniforms)}else N=x.uniforms;return N}function y(x,R){let N=u.get(R);return N!==void 0?++N.usedTimes:(N=new xR(t,R,x,s),c.push(N),u.set(R,N)),N}function A(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function L(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:L}}function TR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function AR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function $h(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,v,m,h){let M=t[e];return M===void 0?(M={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:h},t[e]=M):(M.id=d.id,M.object=d,M.geometry=p,M.material=g,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=h),e++,M}function l(d,p,g,v,m,h){const M=a(d,p,g,v,m,h);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):n.push(M)}function c(d,p,g,v,m,h){const M=a(d,p,g,v,m,h);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function u(d,p,g){n.length>1&&n.sort(d||AR),i.length>1&&i.sort(p||$h),s.length>1&&s.sort(p||$h),g&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function wR(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Yh,t.set(i,[o])):s>=r.length?(o=new Yh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new ft};break;case"SpotLight":n={position:new W,direction:new W,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function CR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PR=0;function DR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LR(t){const e=new RR,n=CR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new Bt,o=new Bt;function a(c){let u=0,f=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,M=0,E=0,y=0,A=0,T=0,L=0;c.sort(DR);for(let R=0,N=c.length;R<N;R++){const I=c[R],k=I.color,ie=I.intensity,re=I.distance;let X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vs?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=k.r*ie,f+=k.g*ie,d+=k.b*ie;else if(I.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(I.sh.coefficients[te],ie);L++}else if(I.isDirectionalLight){const te=e.get(I);if(te.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,se=n.get(I);se.shadowIntensity=G.intensity,se.shadowBias=G.bias,se.shadowNormalBias=G.normalBias,se.shadowRadius=G.radius,se.shadowMapSize=G.mapSize,i.directionalShadow[p]=se,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=I.shadow.matrix,M++}i.directional[p]=te,p++}else if(I.isSpotLight){const te=e.get(I);te.position.setFromMatrixPosition(I.matrixWorld),te.color.copy(k).multiplyScalar(ie),te.distance=re,te.coneCos=Math.cos(I.angle),te.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),te.decay=I.decay,i.spot[v]=te;const G=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,G.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[v]=G.matrix,I.castShadow){const se=n.get(I);se.shadowIntensity=G.intensity,se.shadowBias=G.bias,se.shadowNormalBias=G.normalBias,se.shadowRadius=G.radius,se.shadowMapSize=G.mapSize,i.spotShadow[v]=se,i.spotShadowMap[v]=X,y++}v++}else if(I.isRectAreaLight){const te=e.get(I);te.color.copy(k).multiplyScalar(ie),te.halfWidth.set(I.width*.5,0,0),te.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=te,m++}else if(I.isPointLight){const te=e.get(I);if(te.color.copy(I.color).multiplyScalar(I.intensity),te.distance=I.distance,te.decay=I.decay,I.castShadow){const G=I.shadow,se=n.get(I);se.shadowIntensity=G.intensity,se.shadowBias=G.bias,se.shadowNormalBias=G.normalBias,se.shadowRadius=G.radius,se.shadowMapSize=G.mapSize,se.shadowCameraNear=G.camera.near,se.shadowCameraFar=G.camera.far,i.pointShadow[g]=se,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=te,g++}else if(I.isHemisphereLight){const te=e.get(I);te.skyColor.copy(I.color).multiplyScalar(ie),te.groundColor.copy(I.groundColor).multiplyScalar(ie),i.hemi[h]=te,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==h||x.numDirectionalShadows!==M||x.numPointShadows!==E||x.numSpotShadows!==y||x.numSpotMaps!==A||x.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,x.directionalLength=p,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=h,x.numDirectionalShadows=M,x.numPointShadows=E,x.numSpotShadows=y,x.numSpotMaps=A,x.numLightProbes=L,i.version=PR++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const E=c[h];if(E.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(E.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Kh(t){const e=new LR(t),n=[],i=[],s=[];function r(d){f.camera=d,n.length=0,i.length=0,s.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function IR(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Kh(t),e.set(s,[a])):r>=o.length?(a=new Kh(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const NR=`void main() {
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
}`,OR=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],FR=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Zh=new Bt,Jr=new W,Mc=new W;function BR(t,e,n){let i=new Mf;const s=new nt,r=new nt,o=new zt,a=new Xb,l=new qb,c={},u=n.maxTextureSize,f={[fs]:Ln,[Ln]:fs,[Kn]:Kn},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:NR,fragmentShader:UR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new An;g.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new sn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let h=this.type;this.render=function(T,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===IM&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ba);const R=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Bi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const ie=h!==this.type;ie&&L.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(X=>X.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,X=T.length;re<X;re++){const te=T[re],G=te.shadow;if(G===void 0){Qe("WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const se=G.getFrameExtents();s.multiply(se),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,G.mapSize.y=r.y));const de=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=de,G.map===null||ie===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===eo){if(te.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new xi(s.x,s.y,{format:Vs,type:Gi,minFilter:_n,magFilter:_n,generateMipmaps:!1}),G.map.texture.name=te.name+".shadowMap",G.map.depthTexture=new Rr(s.x,s.y,mi),G.map.depthTexture.name=te.name+".shadowMapDepth",G.map.depthTexture.format=Wi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn}else te.isPointLight?(G.map=new Mg(s.x),G.map.depthTexture=new zb(s.x,Mi)):(G.map=new xi(s.x,s.y),G.map.depthTexture=new Rr(s.x,s.y,Mi)),G.map.depthTexture.name=te.name+".shadowMap",G.map.depthTexture.format=Wi,this.type===ba?(G.map.depthTexture.compareFunction=de?xf:vf,G.map.depthTexture.minFilter=_n,G.map.depthTexture.magFilter=_n):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn);G.camera.updateProjectionMatrix()}const pe=G.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<pe;me++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,me),t.clear();else{me===0&&(t.setRenderTarget(G.map),t.clear());const Te=G.getViewport(me);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),k.viewport(o)}if(te.isPointLight){const Te=G.camera,Je=G.matrix,ct=te.distance||Te.far;ct!==Te.far&&(Te.far=ct,Te.updateProjectionMatrix()),Jr.setFromMatrixPosition(te.matrixWorld),Te.position.copy(Jr),Mc.copy(Te.position),Mc.add(OR[me]),Te.up.copy(FR[me]),Te.lookAt(Mc),Te.updateMatrixWorld(),Je.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Zh.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Zh,Te.coordinateSystem,Te.reversedDepth)}else G.updateMatrices(te);i=G.getFrustum(),y(L,x,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===eo&&M(G,x),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(R,N,I)};function M(T,L){const x=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xi(s.x,s.y,{format:Vs,type:Gi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(L,null,x,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(L,null,x,p,v,null)}function E(T,L,x,R){let N=null;const I=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)N=I;else if(N=x.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const k=N.uuid,ie=L.uuid;let re=c[k];re===void 0&&(re={},c[k]=re);let X=re[ie];X===void 0&&(X=N.clone(),re[ie]=X,L.addEventListener("dispose",A)),N=X}if(N.visible=L.visible,N.wireframe=L.wireframe,R===eo?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:f[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const k=t.properties.get(N);k.light=x}return N}function y(T,L,x,R,N){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===eo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const ie=e.update(T),re=T.material;if(Array.isArray(re)){const X=ie.groups;for(let te=0,G=X.length;te<G;te++){const se=X[te],de=re[se.materialIndex];if(de&&de.visible){const pe=E(T,de,R,N);T.onBeforeShadow(t,T,L,x,ie,pe,se),t.renderBufferDirect(x,null,ie,pe,T,se),T.onAfterShadow(t,T,L,x,ie,pe,se)}}}else if(re.visible){const X=E(T,re,R,N);T.onBeforeShadow(t,T,L,x,ie,X,null),t.renderBufferDirect(x,null,ie,X,T,null),T.onAfterShadow(t,T,L,x,ie,X,null)}}const k=T.children;for(let ie=0,re=k.length;ie<re;ie++)y(k[ie],L,x,R,N)}function A(T){T.target.removeEventListener("dispose",A);for(const x in c){const R=c[x],N=T.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function zR(t,e){function n(){let F=!1;const Pe=new zt;let he=null;const Ne=new zt(0,0,0,0);return{setMask:function(Fe){he!==Fe&&!F&&(t.colorMask(Fe,Fe,Fe,Fe),he=Fe)},setLocked:function(Fe){F=Fe},setClear:function(Fe,_e,Xe,We,Ft){Ft===!0&&(Fe*=We,_e*=We,Xe*=We),Pe.set(Fe,_e,Xe,We),Ne.equals(Pe)===!1&&(t.clearColor(Fe,_e,Xe,We),Ne.copy(Pe))},reset:function(){F=!1,he=null,Ne.set(-1,0,0,0)}}}function i(){let F=!1,Pe=!1,he=null,Ne=null,Fe=null;return{setReversed:function(_e){if(Pe!==_e){const Xe=e.get("EXT_clip_control");_e?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Pe=_e;const We=Fe;Fe=null,this.setClear(We)}},getReversed:function(){return Pe},setTest:function(_e){_e?$(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(_e){he!==_e&&!F&&(t.depthMask(_e),he=_e)},setFunc:function(_e){if(Pe&&(_e=db[_e]),Ne!==_e){switch(_e){case qc:t.depthFunc(t.NEVER);break;case $c:t.depthFunc(t.ALWAYS);break;case Yc:t.depthFunc(t.LESS);break;case Ar:t.depthFunc(t.LEQUAL);break;case Kc:t.depthFunc(t.EQUAL);break;case Zc:t.depthFunc(t.GEQUAL);break;case Jc:t.depthFunc(t.GREATER);break;case jc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ne=_e}},setLocked:function(_e){F=_e},setClear:function(_e){Fe!==_e&&(Fe=_e,Pe&&(_e=1-_e),t.clearDepth(_e))},reset:function(){F=!1,he=null,Ne=null,Fe=null,Pe=!1}}}function s(){let F=!1,Pe=null,he=null,Ne=null,Fe=null,_e=null,Xe=null,We=null,Ft=null;return{setTest:function(wt){F||(wt?$(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!F&&(t.stencilMask(wt),Pe=wt)},setFunc:function(wt,fe,ee){(he!==wt||Ne!==fe||Fe!==ee)&&(t.stencilFunc(wt,fe,ee),he=wt,Ne=fe,Fe=ee)},setOp:function(wt,fe,ee){(_e!==wt||Xe!==fe||We!==ee)&&(t.stencilOp(wt,fe,ee),_e=wt,Xe=fe,We=ee)},setLocked:function(wt){F=wt},setClear:function(wt){Ft!==wt&&(t.clearStencil(wt),Ft=wt)},reset:function(){F=!1,Pe=null,he=null,Ne=null,Fe=null,_e=null,Xe=null,We=null,Ft=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},p=new WeakMap,g=[],v=null,m=!1,h=null,M=null,E=null,y=null,A=null,T=null,L=null,x=new ft(0,0,0),R=0,N=!1,I=null,k=null,ie=null,re=null,X=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,se=0;const de=t.getParameter(t.VERSION);de.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(de)[1]),G=se>=1):de.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),G=se>=2);let pe=null,me={};const Te=t.getParameter(t.SCISSOR_BOX),Je=t.getParameter(t.VIEWPORT),ct=new zt().fromArray(Te),et=new zt().fromArray(Je);function K(F,Pe,he,Ne){const Fe=new Uint8Array(4),_e=t.createTexture();t.bindTexture(F,_e),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<he;Xe++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(Pe,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,Fe):t.texImage2D(Pe+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Fe);return _e}const U={};U[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),U[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),U[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(t.DEPTH_TEST),o.setFunc(Ar),Z(!1),ve(Xd),$(t.CULL_FACE),Y(Bi);function $(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function ue(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function xe(F,Pe){return d[F]!==Pe?(t.bindFramebuffer(F,Pe),d[F]=Pe,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Pe),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Re(F,Pe){let he=g,Ne=!1;if(F){he=p.get(Pe),he===void 0&&(he=[],p.set(Pe,he));const Fe=F.textures;if(he.length!==Fe.length||he[0]!==t.COLOR_ATTACHMENT0){for(let _e=0,Xe=Fe.length;_e<Xe;_e++)he[_e]=t.COLOR_ATTACHMENT0+_e;he.length=Fe.length,Ne=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,Ne=!0);Ne&&t.drawBuffers(he)}function w(F){return v!==F?(t.useProgram(F),v=F,!0):!1}const P={[Rs]:t.FUNC_ADD,[UM]:t.FUNC_SUBTRACT,[OM]:t.FUNC_REVERSE_SUBTRACT};P[FM]=t.MIN,P[BM]=t.MAX;const B={[zM]:t.ZERO,[kM]:t.ONE,[VM]:t.SRC_COLOR,[Wc]:t.SRC_ALPHA,[$M]:t.SRC_ALPHA_SATURATE,[XM]:t.DST_COLOR,[GM]:t.DST_ALPHA,[HM]:t.ONE_MINUS_SRC_COLOR,[Xc]:t.ONE_MINUS_SRC_ALPHA,[qM]:t.ONE_MINUS_DST_COLOR,[WM]:t.ONE_MINUS_DST_ALPHA,[YM]:t.CONSTANT_COLOR,[KM]:t.ONE_MINUS_CONSTANT_COLOR,[ZM]:t.CONSTANT_ALPHA,[JM]:t.ONE_MINUS_CONSTANT_ALPHA};function Y(F,Pe,he,Ne,Fe,_e,Xe,We,Ft,wt){if(F===Bi){m===!0&&(ue(t.BLEND),m=!1);return}if(m===!1&&($(t.BLEND),m=!0),F!==NM){if(F!==h||wt!==N){if((M!==Rs||A!==Rs)&&(t.blendEquation(t.FUNC_ADD),M=Rs,A=Rs),wt)switch(F){case mr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qd:t.blendFunc(t.ONE,t.ONE);break;case $d:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:vt("WebGLState: Invalid blending: ",F);break}else switch(F){case mr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $d:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yd:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",F);break}E=null,y=null,T=null,L=null,x.set(0,0,0),R=0,h=F,N=wt}return}Fe=Fe||Pe,_e=_e||he,Xe=Xe||Ne,(Pe!==M||Fe!==A)&&(t.blendEquationSeparate(P[Pe],P[Fe]),M=Pe,A=Fe),(he!==E||Ne!==y||_e!==T||Xe!==L)&&(t.blendFuncSeparate(B[he],B[Ne],B[_e],B[Xe]),E=he,y=Ne,T=_e,L=Xe),(We.equals(x)===!1||Ft!==R)&&(t.blendColor(We.r,We.g,We.b,Ft),x.copy(We),R=Ft),h=F,N=!1}function z(F,Pe){F.side===Kn?ue(t.CULL_FACE):$(t.CULL_FACE);let he=F.side===Ln;Pe&&(he=!he),Z(he),F.blending===mr&&F.transparent===!1?Y(Bi):Y(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Ne=F.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(F){I!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),I=F)}function ve(F){F!==DM?($(t.CULL_FACE),F!==k&&(F===Xd?t.cullFace(t.BACK):F===LM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),k=F}function ge(F){F!==ie&&(G&&t.lineWidth(F),ie=F)}function ce(F,Pe,he){F?($(t.POLYGON_OFFSET_FILL),(re!==Pe||X!==he)&&(re=Pe,X=he,o.getReversed()&&(Pe=-Pe),t.polygonOffset(Pe,he))):ue(t.POLYGON_OFFSET_FILL)}function ae(F){F?$(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function Le(F){F===void 0&&(F=t.TEXTURE0+te-1),pe!==F&&(t.activeTexture(F),pe=F)}function D(F,Pe,he){he===void 0&&(pe===null?he=t.TEXTURE0+te-1:he=pe);let Ne=me[he];Ne===void 0&&(Ne={type:void 0,texture:void 0},me[he]=Ne),(Ne.type!==F||Ne.texture!==Pe)&&(pe!==he&&(t.activeTexture(he),pe=he),t.bindTexture(F,Pe||U[F]),Ne.type=F,Ne.texture=Pe)}function ke(){const F=me[pe];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ie(){try{t.compressedTexImage2D(...arguments)}catch(F){vt("WebGLState:",F)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(F){vt("WebGLState:",F)}}function _(){try{t.texSubImage2D(...arguments)}catch(F){vt("WebGLState:",F)}}function O(){try{t.texSubImage3D(...arguments)}catch(F){vt("WebGLState:",F)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(F){vt("WebGLState:",F)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(F){vt("WebGLState:",F)}}function Se(){try{t.texStorage2D(...arguments)}catch(F){vt("WebGLState:",F)}}function we(){try{t.texStorage3D(...arguments)}catch(F){vt("WebGLState:",F)}}function oe(){try{t.texImage2D(...arguments)}catch(F){vt("WebGLState:",F)}}function le(){try{t.texImage3D(...arguments)}catch(F){vt("WebGLState:",F)}}function Ae(F){return f[F]!==void 0?f[F]:t.getParameter(F)}function Ve(F,Pe){f[F]!==Pe&&(t.pixelStorei(F,Pe),f[F]=Pe)}function De(F){ct.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ct.copy(F))}function Ce(F){et.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),et.copy(F))}function Ye(F,Pe){let he=c.get(Pe);he===void 0&&(he=new WeakMap,c.set(Pe,he));let Ne=he.get(F);Ne===void 0&&(Ne=t.getUniformBlockIndex(Pe,F.name),he.set(F,Ne))}function je(F,Pe){const Ne=c.get(Pe).get(F);l.get(Pe)!==Ne&&(t.uniformBlockBinding(Pe,Ne,F.__bindingPointIndex),l.set(Pe,Ne))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},pe=null,me={},d={},p=new WeakMap,g=[],v=null,m=!1,h=null,M=null,E=null,y=null,A=null,T=null,L=null,x=new ft(0,0,0),R=0,N=!1,I=null,k=null,ie=null,re=null,X=null,ct.set(0,0,t.canvas.width,t.canvas.height),et.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:ue,bindFramebuffer:xe,drawBuffers:Re,useProgram:w,setBlending:Y,setMaterial:z,setFlipSided:Z,setCullFace:ve,setLineWidth:ge,setPolygonOffset:ce,setScissorTest:ae,activeTexture:Le,bindTexture:D,unbindTexture:ke,compressedTexImage2D:Ie,compressedTexImage3D:b,texImage2D:oe,texImage3D:le,pixelStorei:Ve,getParameter:Ae,updateUBOMapping:Ye,uniformBlockBinding:je,texStorage2D:Se,texStorage3D:we,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:De,viewport:Ce,reset:it}}function kR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap,f=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,_){return g?new OffscreenCanvas(b,_):Ya("canvas")}function m(b,_,O){let q=1;const Q=Ie(b);if((Q.width>O||Q.height>O)&&(q=O/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Se=Math.floor(q*Q.width),we=Math.floor(q*Q.height);d===void 0&&(d=v(Se,we));const oe=_?v(Se,we):d;return oe.width=Se,oe.height=we,oe.getContext("2d").drawImage(b,0,0,Se,we),Qe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Se+"x"+we+")."),oe}else return"data"in b&&Qe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function h(b){return b.generateMipmaps}function M(b){t.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(b,_,O,q,Q,Se=!1){if(b!==null){if(t[b]!==void 0)return t[b];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let we;q&&(we=e.get("EXT_texture_norm16"),we||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=_;if(_===t.RED&&(O===t.FLOAT&&(oe=t.R32F),O===t.HALF_FLOAT&&(oe=t.R16F),O===t.UNSIGNED_BYTE&&(oe=t.R8),O===t.UNSIGNED_SHORT&&we&&(oe=we.R16_EXT),O===t.SHORT&&we&&(oe=we.R16_SNORM_EXT)),_===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(oe=t.R8UI),O===t.UNSIGNED_SHORT&&(oe=t.R16UI),O===t.UNSIGNED_INT&&(oe=t.R32UI),O===t.BYTE&&(oe=t.R8I),O===t.SHORT&&(oe=t.R16I),O===t.INT&&(oe=t.R32I)),_===t.RG&&(O===t.FLOAT&&(oe=t.RG32F),O===t.HALF_FLOAT&&(oe=t.RG16F),O===t.UNSIGNED_BYTE&&(oe=t.RG8),O===t.UNSIGNED_SHORT&&we&&(oe=we.RG16_EXT),O===t.SHORT&&we&&(oe=we.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(oe=t.RG8UI),O===t.UNSIGNED_SHORT&&(oe=t.RG16UI),O===t.UNSIGNED_INT&&(oe=t.RG32UI),O===t.BYTE&&(oe=t.RG8I),O===t.SHORT&&(oe=t.RG16I),O===t.INT&&(oe=t.RG32I)),_===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(oe=t.RGB8UI),O===t.UNSIGNED_SHORT&&(oe=t.RGB16UI),O===t.UNSIGNED_INT&&(oe=t.RGB32UI),O===t.BYTE&&(oe=t.RGB8I),O===t.SHORT&&(oe=t.RGB16I),O===t.INT&&(oe=t.RGB32I)),_===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(oe=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(oe=t.RGBA16UI),O===t.UNSIGNED_INT&&(oe=t.RGBA32UI),O===t.BYTE&&(oe=t.RGBA8I),O===t.SHORT&&(oe=t.RGBA16I),O===t.INT&&(oe=t.RGBA32I)),_===t.RGB&&(O===t.UNSIGNED_SHORT&&we&&(oe=we.RGB16_EXT),O===t.SHORT&&we&&(oe=we.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(oe=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(oe=t.R11F_G11F_B10F)),_===t.RGBA){const le=Se?$a:gt.getTransfer(Q);O===t.FLOAT&&(oe=t.RGBA32F),O===t.HALF_FLOAT&&(oe=t.RGBA16F),O===t.UNSIGNED_BYTE&&(oe=le===Tt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&we&&(oe=we.RGBA16_EXT),O===t.SHORT&&we&&(oe=we.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function A(b,_){let O;return b?_===null||_===Mi||_===So?O=t.DEPTH24_STENCIL8:_===mi?O=t.DEPTH32F_STENCIL8:_===yo&&(O=t.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Mi||_===So?O=t.DEPTH_COMPONENT24:_===mi?O=t.DEPTH_COMPONENT32F:_===yo&&(O=t.DEPTH_COMPONENT16),O}function T(b,_){return h(b)===!0||b.isFramebufferTexture&&b.minFilter!==cn&&b.minFilter!==_n?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function L(b){const _=b.target;_.removeEventListener("dispose",L),R(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(b){const _=b.target;_.removeEventListener("dispose",x),I(_)}function R(b){const _=i.get(b);if(_.__webglInit===void 0)return;const O=b.source,q=p.get(O);if(q){const Q=q[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(b),Object.keys(q).length===0&&p.delete(O)}i.remove(b)}function N(b){const _=i.get(b);t.deleteTexture(_.__webglTexture);const O=b.source,q=p.get(O);delete q[_.__cacheKey],o.memory.textures--}function I(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let Q=0;Q<_.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(_.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)t.deleteFramebuffer(_.__webglFramebuffer[q]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,Q=O.length;q<Q;q++){const Se=i.get(O[q]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(b)}let k=0;function ie(){k=0}function re(){return k}function X(b){k=b}function te(){const b=k;return b>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),k+=1,b}function G(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function se(b,_){const O=i.get(b);if(b.isVideoTexture&&D(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(O,b,_);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+_)}function de(b,_){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ue(O,b,_);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+_)}function pe(b,_){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ue(O,b,_);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+_)}function me(b,_){const O=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&O.__version!==b.version){xe(O,b,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+_)}const Te={[Qc]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[eu]:t.MIRRORED_REPEAT},Je={[cn]:t.NEAREST,[eb]:t.NEAREST_MIPMAP_NEAREST,[Xo]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[Xl]:t.LINEAR_MIPMAP_NEAREST,[Ls]:t.LINEAR_MIPMAP_LINEAR},ct={[ib]:t.NEVER,[lb]:t.ALWAYS,[sb]:t.LESS,[vf]:t.LEQUAL,[rb]:t.EQUAL,[xf]:t.GEQUAL,[ob]:t.GREATER,[ab]:t.NOTEQUAL};function et(b,_){if(_.type===mi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===_n||_.magFilter===Xl||_.magFilter===Xo||_.magFilter===Ls||_.minFilter===_n||_.minFilter===Xl||_.minFilter===Xo||_.minFilter===Ls)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Te[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Te[_.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Te[_.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Je[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Je[_.minFilter]),_.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ct[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==Xo&&_.minFilter!==Ls||_.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function K(b,_){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",L));const q=_.source;let Q=p.get(q);Q===void 0&&(Q={},p.set(q,Q));const Se=G(_);if(Se!==b.__cacheKey){Q[Se]===void 0&&(Q[Se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[Se].usedTimes++;const we=Q[b.__cacheKey];we!==void 0&&(Q[b.__cacheKey].usedTimes--,we.usedTimes===0&&N(_)),b.__cacheKey=Se,b.__webglTexture=Q[Se].texture}return O}function U(b,_,O){return Math.floor(Math.floor(b/O)/_)}function $(b,_,O,q){const Se=b.updateRanges;if(Se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,O,q,_.data);else{Se.sort((Ve,De)=>Ve.start-De.start);let we=0;for(let Ve=1;Ve<Se.length;Ve++){const De=Se[we],Ce=Se[Ve],Ye=De.start+De.count,je=U(Ce.start,_.width,4),it=U(De.start,_.width,4);Ce.start<=Ye+1&&je===it&&U(Ce.start+Ce.count-1,_.width,4)===je?De.count=Math.max(De.count,Ce.start+Ce.count-De.start):(++we,Se[we]=Ce)}Se.length=we+1;const oe=n.getParameter(t.UNPACK_ROW_LENGTH),le=n.getParameter(t.UNPACK_SKIP_PIXELS),Ae=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ve=0,De=Se.length;Ve<De;Ve++){const Ce=Se[Ve],Ye=Math.floor(Ce.start/4),je=Math.ceil(Ce.count/4),it=Ye%_.width,F=Math.floor(Ye/_.width),Pe=je,he=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,it),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,it,F,Pe,he,O,q,_.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,oe),n.pixelStorei(t.UNPACK_SKIP_PIXELS,le),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function ue(b,_,O){let q=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=t.TEXTURE_3D);const Q=K(b,_),Se=_.source;n.bindTexture(q,b.__webglTexture,t.TEXTURE0+O);const we=i.get(Se);if(Se.version!==we.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const he=gt.getPrimaries(gt.workingColorSpace),Ne=_.colorSpace===as?null:gt.getPrimaries(_.colorSpace),Fe=_.colorSpace===as||he===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let le=m(_.image,!1,s.maxTextureSize);le=ke(_,le);const Ae=r.convert(_.format,_.colorSpace),Ve=r.convert(_.type);let De=y(_.internalFormat,Ae,Ve,_.normalized,_.colorSpace,_.isVideoTexture);et(q,_);let Ce;const Ye=_.mipmaps,je=_.isVideoTexture!==!0,it=we.__version===void 0||Q===!0,F=Se.dataReady,Pe=T(_,le);if(_.isDepthTexture)De=A(_.format===Is,_.type),it&&(je?n.texStorage2D(t.TEXTURE_2D,1,De,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,De,le.width,le.height,0,Ae,Ve,null));else if(_.isDataTexture)if(Ye.length>0){je&&it&&n.texStorage2D(t.TEXTURE_2D,Pe,De,Ye[0].width,Ye[0].height);for(let he=0,Ne=Ye.length;he<Ne;he++)Ce=Ye[he],je?F&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Ae,Ve,Ce.data):n.texImage2D(t.TEXTURE_2D,he,De,Ce.width,Ce.height,0,Ae,Ve,Ce.data);_.generateMipmaps=!1}else je?(it&&n.texStorage2D(t.TEXTURE_2D,Pe,De,le.width,le.height),F&&$(_,le,Ae,Ve)):n.texImage2D(t.TEXTURE_2D,0,De,le.width,le.height,0,Ae,Ve,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){je&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,De,Ye[0].width,Ye[0].height,le.depth);for(let he=0,Ne=Ye.length;he<Ne;he++)if(Ce=Ye[he],_.format!==jn)if(Ae!==null)if(je){if(F)if(_.layerUpdates.size>0){const Fe=wh(Ce.width,Ce.height,_.format,_.type);for(const _e of _.layerUpdates){const Xe=Ce.data.subarray(_e*Fe/Ce.data.BYTES_PER_ELEMENT,(_e+1)*Fe/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,_e,Ce.width,Ce.height,1,Ae,Xe)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Ce.width,Ce.height,le.depth,Ae,Ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,De,Ce.width,Ce.height,le.depth,0,Ce.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Ce.width,Ce.height,le.depth,Ae,Ve,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,De,Ce.width,Ce.height,le.depth,0,Ae,Ve,Ce.data)}else{je&&it&&n.texStorage2D(t.TEXTURE_2D,Pe,De,Ye[0].width,Ye[0].height);for(let he=0,Ne=Ye.length;he<Ne;he++)Ce=Ye[he],_.format!==jn?Ae!==null?je?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Ae,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,he,De,Ce.width,Ce.height,0,Ce.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?F&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Ae,Ve,Ce.data):n.texImage2D(t.TEXTURE_2D,he,De,Ce.width,Ce.height,0,Ae,Ve,Ce.data)}else if(_.isDataArrayTexture)if(je){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,De,le.width,le.height,le.depth),F)if(_.layerUpdates.size>0){const he=wh(le.width,le.height,_.format,_.type);for(const Ne of _.layerUpdates){const Fe=le.data.subarray(Ne*he/le.data.BYTES_PER_ELEMENT,(Ne+1)*he/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ne,le.width,le.height,1,Ae,Ve,Fe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,Ve,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,le.width,le.height,le.depth,0,Ae,Ve,le.data);else if(_.isData3DTexture)je?(it&&n.texStorage3D(t.TEXTURE_3D,Pe,De,le.width,le.height,le.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,Ve,le.data)):n.texImage3D(t.TEXTURE_3D,0,De,le.width,le.height,le.depth,0,Ae,Ve,le.data);else if(_.isFramebufferTexture){if(it)if(je)n.texStorage2D(t.TEXTURE_2D,Pe,De,le.width,le.height);else{let he=le.width,Ne=le.height;for(let Fe=0;Fe<Pe;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,De,he,Ne,0,Ae,Ve,null),he>>=1,Ne>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const he=t.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),le.parentNode!==he){he.appendChild(le),f.add(_),he.onpaint=Ne=>{const Fe=Ne.changedElements;for(const _e of f)Fe.includes(_e.image)&&(_e.needsUpdate=!0)},he.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,le);else{const Fe=t.RGBA,_e=t.RGBA,Xe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Fe,_e,Xe,le)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(je&&it){const he=Ie(Ye[0]);n.texStorage2D(t.TEXTURE_2D,Pe,De,he.width,he.height)}for(let he=0,Ne=Ye.length;he<Ne;he++)Ce=Ye[he],je?F&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ae,Ve,Ce):n.texImage2D(t.TEXTURE_2D,he,De,Ae,Ve,Ce);_.generateMipmaps=!1}else if(je){if(it){const he=Ie(le);n.texStorage2D(t.TEXTURE_2D,Pe,De,he.width,he.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Ve,le)}else n.texImage2D(t.TEXTURE_2D,0,De,Ae,Ve,le);h(_)&&M(q),we.__version=Se.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function xe(b,_,O){if(_.image.length!==6)return;const q=K(b,_),Q=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+O);const Se=i.get(Q);if(Q.version!==Se.__version||q===!0){n.activeTexture(t.TEXTURE0+O);const we=gt.getPrimaries(gt.workingColorSpace),oe=_.colorSpace===as?null:gt.getPrimaries(_.colorSpace),le=_.colorSpace===as||we===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,Ve=_.image[0]&&_.image[0].isDataTexture,De=[];for(let _e=0;_e<6;_e++)!Ae&&!Ve?De[_e]=m(_.image[_e],!0,s.maxCubemapSize):De[_e]=Ve?_.image[_e].image:_.image[_e],De[_e]=ke(_,De[_e]);const Ce=De[0],Ye=r.convert(_.format,_.colorSpace),je=r.convert(_.type),it=y(_.internalFormat,Ye,je,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,Pe=Se.__version===void 0||q===!0,he=Q.dataReady;let Ne=T(_,Ce);et(t.TEXTURE_CUBE_MAP,_);let Fe;if(Ae){F&&Pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,it,Ce.width,Ce.height);for(let _e=0;_e<6;_e++){Fe=De[_e].mipmaps;for(let Xe=0;Xe<Fe.length;Xe++){const We=Fe[Xe];_.format!==jn?Ye!==null?F?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,We.width,We.height,Ye,We.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,it,We.width,We.height,0,We.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,We.width,We.height,Ye,je,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,it,We.width,We.height,0,Ye,je,We.data)}}}else{if(Fe=_.mipmaps,F&&Pe){Fe.length>0&&Ne++;const _e=Ie(De[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,it,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ve){F?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,De[_e].width,De[_e].height,Ye,je,De[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,De[_e].width,De[_e].height,0,Ye,je,De[_e].data);for(let Xe=0;Xe<Fe.length;Xe++){const Ft=Fe[Xe].image[_e].image;F?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,Ft.width,Ft.height,Ye,je,Ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,it,Ft.width,Ft.height,0,Ye,je,Ft.data)}}else{F?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ye,je,De[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,Ye,je,De[_e]);for(let Xe=0;Xe<Fe.length;Xe++){const We=Fe[Xe];F?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,Ye,je,We.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,it,Ye,je,We.image[_e])}}}h(_)&&M(t.TEXTURE_CUBE_MAP),Se.__version=Q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Re(b,_,O,q,Q,Se){const we=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),le=y(O.internalFormat,we,oe,O.normalized,O.colorSpace),Ae=i.get(_),Ve=i.get(O);if(Ve.__renderTarget=_,!Ae.__hasExternalTextures){const De=Math.max(1,_.width>>Se),Ce=Math.max(1,_.height>>Se);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,Se,le,De,Ce,_.depth,0,we,oe,null):n.texImage2D(Q,Se,le,De,Ce,0,we,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Le(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,Ve.__webglTexture,0,ae(_)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,Ve.__webglTexture,Se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(b,_,O){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer){const q=_.depthTexture,Q=q&&q.isDepthTexture?q.type:null,Se=A(_.stencilBuffer,Q),we=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Le(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae(_),Se,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae(_),Se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Se,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,b)}else{const q=_.textures;for(let Q=0;Q<q.length;Q++){const Se=q[Q],we=r.convert(Se.format,Se.colorSpace),oe=r.convert(Se.type),le=y(Se.internalFormat,we,oe,Se.normalized,Se.colorSpace);Le(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae(_),le,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae(_),le,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,le,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function P(b,_,O){const q=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),et(t.TEXTURE_CUBE_MAP,_.depthTexture);const Ae=r.convert(_.depthTexture.format),Ve=r.convert(_.depthTexture.type);let De;_.depthTexture.format===Wi?De=t.DEPTH_COMPONENT24:_.depthTexture.format===Is&&(De=t.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,De,_.width,_.height,0,Ae,Ve,null)}}else se(_.depthTexture,0);const Se=Q.__webglTexture,we=ae(_),oe=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,le=_.depthTexture.format===Is?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wi)Le(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,oe,Se,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,le,oe,Se,0);else if(_.depthTexture.format===Is)Le(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,oe,Se,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,le,oe,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function B(b){const _=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=q}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let q=0;q<6;q++)P(_.__webglFramebuffer[q],b,q);else{const q=b.texture.mipmaps;q&&q.length>0?P(_.__webglFramebuffer[0],b,0):P(_.__webglFramebuffer,b,0)}else if(O){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=t.createRenderbuffer(),w(_.__webglDepthbuffer[q],b,!1);else{const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=_.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,Se)}}else{const q=b.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),w(_.__webglDepthbuffer,b,!1);else{const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,Se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Y(b,_,O){const q=i.get(b);_!==void 0&&Re(q.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&B(b)}function z(b){const _=b.texture,O=i.get(b),q=i.get(_);b.addEventListener("dispose",x);const Q=b.textures,Se=b.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=_.version,o.memory.textures++),Se){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let le=0;le<_.mipmaps.length;le++)O.__webglFramebuffer[oe][le]=t.createFramebuffer()}else O.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)O.__webglFramebuffer[oe]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(we)for(let oe=0,le=Q.length;oe<le;oe++){const Ae=i.get(Q[oe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Le(b)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const le=Q[oe];O.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const Ae=r.convert(le.format,le.colorSpace),Ve=r.convert(le.type),De=y(le.internalFormat,Ae,Ve,le.normalized,le.colorSpace,b.isXRRenderTarget===!0),Ce=ae(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,De,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),w(O.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Se){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),et(t.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)Re(O.__webglFramebuffer[oe][le],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else Re(O.__webglFramebuffer[oe],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);h(_)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let oe=0,le=Q.length;oe<le;oe++){const Ae=Q[oe],Ve=i.get(Ae);let De=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(De=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(De,Ve.__webglTexture),et(De,Ae),Re(O.__webglFramebuffer,b,Ae,t.COLOR_ATTACHMENT0+oe,De,0),h(Ae)&&M(De)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,q.__webglTexture),et(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)Re(O.__webglFramebuffer[le],b,_,t.COLOR_ATTACHMENT0,oe,le);else Re(O.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,oe,0);h(_)&&M(oe),n.unbindTexture()}b.depthBuffer&&B(b)}function Z(b){const _=b.textures;for(let O=0,q=_.length;O<q;O++){const Q=_[O];if(h(Q)){const Se=E(b),we=i.get(Q).__webglTexture;n.bindTexture(Se,we),M(Se),n.unbindTexture()}}}const ve=[],ge=[];function ce(b){if(b.samples>0){if(Le(b)===!1){const _=b.textures,O=b.width,q=b.height;let Q=t.COLOR_BUFFER_BIT;const Se=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(b),oe=_.length>1;if(oe)for(let Ae=0;Ae<_.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const le=b.texture.mipmaps;le&&le.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const Ve=i.get(_[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,O,q,0,0,O,q,Q,t.NEAREST),l===!0&&(ve.length=0,ge.length=0,ve.push(t.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ve.push(Se),ge.push(Se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let Ae=0;Ae<_.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const Ve=i.get(_[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ae(b){return Math.min(s.maxSamples,b.samples)}function Le(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function ke(b,_){const O=b.colorSpace,q=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==qa&&O!==as&&(gt.getTransfer(O)===Tt?(q!==jn||Q!==Bn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",O)),_}function Ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=ie,this.getTextureUnits=re,this.setTextureUnits=X,this.setTexture2D=se,this.setTexture2DArray=de,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Y,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function VR(t,e){function n(i,s=as){let r;const o=gt.getTransfer(s);if(i===Bn)return t.UNSIGNED_BYTE;if(i===hf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===rg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ng)return t.BYTE;if(i===ig)return t.SHORT;if(i===yo)return t.UNSIGNED_SHORT;if(i===df)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Gi)return t.HALF_FLOAT;if(i===og)return t.ALPHA;if(i===ag)return t.RGB;if(i===jn)return t.RGBA;if(i===Wi)return t.DEPTH_COMPONENT;if(i===Is)return t.DEPTH_STENCIL;if(i===lg)return t.RED;if(i===mf)return t.RED_INTEGER;if(i===Vs)return t.RG;if(i===gf)return t.RG_INTEGER;if(i===_f)return t.RGBA_INTEGER;if(i===Ea||i===Ta||i===Aa||i===wa)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tu||i===nu||i===iu||i===su)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===iu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===su)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ru||i===ou||i===au||i===lu||i===cu||i===Wa||i===uu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ru||i===ou)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===au)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lu)return r.COMPRESSED_R11_EAC;if(i===cu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Wa)return r.COMPRESSED_RG11_EAC;if(i===uu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fu||i===du||i===hu||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===yu||i===Su||i===Mu||i===bu||i===Eu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===du)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_u)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Su)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tu||i===Au||i===wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tu)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ru||i===Cu||i===Xa||i===Pu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ru)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const HR=`
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

}`;class WR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new gg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new bi({vertexShader:HR,fragmentShader:GR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sn(new Io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XR extends _s{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new WR,h={},M=n.getContextAttributes();let E=null,y=null;const A=[],T=[],L=new nt;let x=null;const R=new Wn;R.viewport=new zt;const N=new Wn;N.viewport=new zt;const I=[R,N],k=new jb;let ie=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let U=A[K];return U===void 0&&(U=new jl,A[K]=U),U.getTargetRaySpace()},this.getControllerGrip=function(K){let U=A[K];return U===void 0&&(U=new jl,A[K]=U),U.getGripSpace()},this.getHand=function(K){let U=A[K];return U===void 0&&(U=new jl,A[K]=U),U.getHandSpace()};function X(K){const U=T.indexOf(K.inputSource);if(U===-1)return;const $=A[U];$!==void 0&&($.update(K.inputSource,K.frame,c||o),$.dispatchEvent({type:K.type,data:K.inputSource}))}function te(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",G);for(let K=0;K<A.length;K++){const U=T[K];U!==null&&(T[K]=null,A[K].disconnect(U))}ie=null,re=null,m.reset();for(const K in h)delete h[K];e.setRenderTarget(E),p=null,d=null,f=null,s=null,y=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",te),s.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,ue=null,xe=null;M.depth&&(xe=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=M.stencil?Is:Wi,ue=M.stencil?So:Mi);const Re={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new xi(d.textureWidth,d.textureHeight,{format:jn,type:Bn,depthTexture:new Rr(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const $={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,$),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new xi(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let U=0;U<K.removed.length;U++){const $=K.removed[U],ue=T.indexOf($);ue>=0&&(T[ue]=null,A[ue].disconnect($))}for(let U=0;U<K.added.length;U++){const $=K.added[U];let ue=T.indexOf($);if(ue===-1){for(let Re=0;Re<A.length;Re++)if(Re>=T.length){T.push($),ue=Re;break}else if(T[Re]===null){T[Re]=$,ue=Re;break}if(ue===-1)break}const xe=A[ue];xe&&xe.connect($)}}const se=new W,de=new W;function pe(K,U,$){se.setFromMatrixPosition(U.matrixWorld),de.setFromMatrixPosition($.matrixWorld);const ue=se.distanceTo(de),xe=U.projectionMatrix.elements,Re=$.projectionMatrix.elements,w=xe[14]/(xe[10]-1),P=xe[14]/(xe[10]+1),B=(xe[9]+1)/xe[5],Y=(xe[9]-1)/xe[5],z=(xe[8]-1)/xe[0],Z=(Re[8]+1)/Re[0],ve=w*z,ge=w*Z,ce=ue/(-z+Z),ae=ce*-z;if(U.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ae),K.translateZ(ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(U.projectionMatrix),K.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const Le=w+ce,D=P+ce,ke=ve-ae,Ie=ge+(ue-ae),b=B*P/D*Le,_=Y*P/D*Le;K.projectionMatrix.makePerspective(ke,Ie,b,_,Le,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function me(K,U){U===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(U.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let U=K.near,$=K.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&($=m.depthFar)),k.near=N.near=R.near=U,k.far=N.far=R.far=$,(ie!==k.near||re!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),ie=k.near,re=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;const ue=K.parent,xe=k.cameras;me(k,ue);for(let Re=0;Re<xe.length;Re++)me(xe[Re],ue);xe.length===2?pe(k,R,N):k.projectionMatrix.copy(R.projectionMatrix),Te(K,k,ue)};function Te(K,U,$){$===null?K.matrix.copy(U.matrixWorld):(K.matrix.copy($.matrixWorld),K.matrix.invert(),K.matrix.multiply(U.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(U.projectionMatrix),K.projectionMatrixInverse.copy(U.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Lu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return h[K]};let Je=null;function ct(K,U){if(u=U.getViewerPose(c||o),g=U,u!==null){const $=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ue=!1;$.length!==k.cameras.length&&(k.cameras.length=0,ue=!0);for(let P=0;P<$.length;P++){const B=$[P];let Y=null;if(p!==null)Y=p.getViewport(B);else{const Z=f.getViewSubImage(d,B);Y=Z.viewport,P===0&&(e.setRenderTargetTextures(y,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(y))}let z=I[P];z===void 0&&(z=new Wn,z.layers.enable(P),z.viewport=new zt,I[P]=z),z.matrix.fromArray(B.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(B.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Y.x,Y.y,Y.width,Y.height),P===0&&(k.matrix.copy(z.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ue===!0&&k.cameras.push(z)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const P=f.getDepthInformation($[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<$.length;P++){const B=$[P].camera;if(B){let Y=h[B];Y||(Y=new gg,h[B]=Y);const z=f.getCameraImage(B);Y.sourceTexture=z}}}}for(let $=0;$<A.length;$++){const ue=T[$],xe=A[$];ue!==null&&xe!==void 0&&xe.update(ue,U,c||o)}Je&&Je(K,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),g=null}const et=new yg;et.setAnimationLoop(ct),this.setAnimationLoop=function(K){Je=K},this.dispose=function(){}}}const qR=new Bt,wg=new st;wg.set(-1,0,0,0,1,0,0,0,1);function $R(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,_g(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,M,E,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,M,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const M=e.get(h),E=M.envMap,y=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(qR.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wg),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,M,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*M,m.scale.value=E*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,M){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ln&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const M=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const T=A.program;i.uniformBlockBinding(y,T)}function c(y,A){let T=s[y.id];T===void 0&&(m(y),T=u(y),s[y.id]=T,y.addEventListener("dispose",M));const L=A.program;i.updateUBOMapping(y,L);const x=e.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function u(y){const A=f();y.__bindingPointIndex=A;const T=t.createBuffer(),L=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,L,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,T),T}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const A=s[y.id],T=y.uniforms,L=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let x=0,R=T.length;x<R;x++){const N=T[x];if(Array.isArray(N))for(let I=0,k=N.length;I<k;I++)p(N[I],x,I,L);else p(N,x,0,L)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,A,T,L){if(v(y,A,T,L)===!0){const x=y.__offset,R=y.value;if(Array.isArray(R)){let N=0;for(let I=0;I<R.length;I++){const k=R[I],ie=h(k);g(k,y.__data,N),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(N+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function g(y,A,T){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,T)}function v(y,A,T,L){const x=y.value,R=A+"_"+T;if(L[R]===void 0)return typeof x=="number"||typeof x=="boolean"?L[R]=x:ArrayBuffer.isView(x)?L[R]=x.slice():L[R]=x.clone(),!0;{const N=L[R];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return L[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function m(y){const A=y.uniforms;let T=0;const L=16;for(let R=0,N=A.length;R<N;R++){const I=Array.isArray(A[R])?A[R]:[A[R]];for(let k=0,ie=I.length;k<ie;k++){const re=I[k],X=Array.isArray(re.value)?re.value:[re.value];for(let te=0,G=X.length;te<G;te++){const se=X[te],de=h(se),pe=T%L,me=pe%de.boundary,Te=pe+me;T+=me,Te!==0&&L-Te<de.storage&&(T+=L-Te),re.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=T,T+=de.storage}}}const x=T%L;return x>0&&(T+=L-x),y.__size=T,y.__cache={},this}function h(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",y),A}function M(y){const A=y.target;A.removeEventListener("dispose",M);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function E(){for(const y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}const KR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function ZR(){return ci===null&&(ci=new Nb(KR,16,16,Vs,Gi),ci.name="DFG_LUT",ci.minFilter=_n,ci.magFilter=_n,ci.wrapS=Oi,ci.wrapT=Oi,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class JR{constructor(e={}){const{canvas:n=ub(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Bn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([_f,gf,mf]),h=new Set([Bn,Mi,yo,So,hf,pf]),M=new Uint32Array(4),E=new Int32Array(4),y=new W;let A=null,T=null;const L=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1,k=null,ie=null,re=null,X=null;this._outputColorSpace=Gn;let te=0,G=0,se=null,de=-1,pe=null;const me=new zt,Te=new zt;let Je=null;const ct=new ft(0);let et=0,K=n.width,U=n.height,$=1,ue=null,xe=null;const Re=new zt(0,0,K,U),w=new zt(0,0,K,U);let P=!1;const B=new Mf;let Y=!1,z=!1;const Z=new Bt,ve=new W,ge=new zt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Le(){return se===null?$:1}let D=i;function ke(S,H){return n.getContext(S,H)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ff}`),n.addEventListener("webglcontextlost",Ft,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",fe,!1),D===null){const H="webgl2";if(D=ke(H,S),D===null)throw ke(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw vt("WebGLRenderer: "+S.message),S}let Ie,b,_,O,q,Q,Se,we,oe,le,Ae,Ve,De,Ce,Ye,je,it,F,Pe,he,Ne,Fe,_e;function Xe(){Ie=new ZA(D),Ie.init(),Ne=new VR(D,Ie),b=new HA(D,Ie,e,Ne),_=new zR(D,Ie),b.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),ie=D.createFramebuffer(),re=D.createFramebuffer(),X=D.createFramebuffer(),O=new QA(D),q=new TR,Q=new kR(D,Ie,_,q,b,Ne,O),Se=new KA(N),we=new iE(D),Fe=new kA(D,we),oe=new JA(D,we,O,Fe),le=new tw(D,oe,we,Fe,O),F=new ew(D,b,Q),Ye=new GA(q),Ae=new ER(N,Se,Ie,b,Fe,Ye),Ve=new $R(N,q),De=new wR,Ce=new IR(Ie),it=new zA(N,Se,_,le,g,l),je=new BR(N,le,b),_e=new YR(D,O,b,_),Pe=new VA(D,Ie,O),he=new jA(D,Ie,O),O.programs=Ae.programs,N.capabilities=b,N.extensions=Ie,N.properties=q,N.renderLists=De,N.shadowMap=je,N.state=_,N.info=O}Xe(),v!==Bn&&(R=new iw(v,n.width,n.height,a,s,r));const We=new XR(N,D);this.xr=We,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(K,U,!1))},this.getSize=function(S){return S.set(K,U)},this.setSize=function(S,H,ne=!0){if(We.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,U=H,n.width=Math.floor(S*$),n.height=Math.floor(H*$),ne===!0&&(n.style.width=S+"px",n.style.height=H+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(K*$,U*$).floor()},this.setDrawingBufferSize=function(S,H,ne){K=S,U=H,$=ne,n.width=Math.floor(S*ne),n.height=Math.floor(H*ne),this.setViewport(0,0,S,H)},this.setEffects=function(S){if(v===Bn){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let H=0;H<S.length;H++)if(S[H].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(me)},this.getViewport=function(S){return S.copy(Re)},this.setViewport=function(S,H,ne,J){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,H,ne,J),_.viewport(me.copy(Re).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(w)},this.setScissor=function(S,H,ne,J){S.isVector4?w.set(S.x,S.y,S.z,S.w):w.set(S,H,ne,J),_.scissor(Te.copy(w).multiplyScalar($).round())},this.getScissorTest=function(){return P},this.setScissorTest=function(S){_.setScissorTest(P=S)},this.setOpaqueSort=function(S){ue=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(S=!0,H=!0,ne=!0){let J=0;if(S){let j=!1;if(se!==null){const Oe=se.texture.format;j=m.has(Oe)}if(j){const Oe=se.texture.type,He=h.has(Oe),Ue=it.getClearColor(),Ee=it.getClearAlpha(),$e=Ue.r,ot=Ue.g,lt=Ue.b;He?(M[0]=$e,M[1]=ot,M[2]=lt,M[3]=Ee,D.clearBufferuiv(D.COLOR,0,M)):(E[0]=$e,E[1]=ot,E[2]=lt,E[3]=Ee,D.clearBufferiv(D.COLOR,0,E))}else J|=D.COLOR_BUFFER_BIT}H&&(J|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){n.removeEventListener("webglcontextlost",Ft,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),it.dispose(),De.dispose(),Ce.dispose(),q.dispose(),Se.dispose(),le.dispose(),Fe.dispose(),_e.dispose(),Ae.dispose(),We.dispose(),We.removeEventListener("sessionstart",mt),We.removeEventListener("sessionend",Wt),Nt.stop()};function Ft(S){S.preventDefault(),Qd("WebGLRenderer: Context Lost."),I=!0}function wt(){Qd("WebGLRenderer: Context Restored."),I=!1;const S=O.autoReset,H=je.enabled,ne=je.autoUpdate,J=je.needsUpdate,j=je.type;Xe(),O.autoReset=S,je.enabled=H,je.autoUpdate=ne,je.needsUpdate=J,je.type=j}function fe(S){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ee(S){const H=S.target;H.removeEventListener("dispose",ee),Ke(H)}function Ke(S){ht(S),q.remove(S)}function ht(S){const H=q.get(S).programs;H!==void 0&&(H.forEach(function(ne){Ae.releaseProgram(ne)}),S.isShaderMaterial&&Ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,ne,J,j,Oe){H===null&&(H=ce);const He=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ue=Uo(S,H,ne,J,j);_.setMaterial(J,He);let Ee=ne.index,$e=1;if(J.wireframe===!0){if(Ee=oe.getWireframeAttribute(ne),Ee===void 0)return;$e=2}const ot=ne.drawRange,lt=ne.attributes.position;let Ze=ot.start*$e,Ct=(ot.start+ot.count)*$e;Oe!==null&&(Ze=Math.max(Ze,Oe.start*$e),Ct=Math.min(Ct,(Oe.start+Oe.count)*$e)),Ee!==null?(Ze=Math.max(Ze,0),Ct=Math.min(Ct,Ee.count)):lt!=null&&(Ze=Math.max(Ze,0),Ct=Math.min(Ct,lt.count));const Xt=Ct-Ze;if(Xt<0||Xt===1/0)return;Fe.setup(j,J,Ue,ne,Ee);let kt,Dt=Pe;if(Ee!==null&&(kt=we.get(Ee),Dt=he,Dt.setIndex(kt)),j.isMesh)J.wireframe===!0?(_.setLineWidth(J.wireframeLinewidth*Le()),Dt.setMode(D.LINES)):Dt.setMode(D.TRIANGLES);else if(j.isLine){let fn=J.linewidth;fn===void 0&&(fn=1),_.setLineWidth(fn*Le()),j.isLineSegments?Dt.setMode(D.LINES):j.isLineLoop?Dt.setMode(D.LINE_LOOP):Dt.setMode(D.LINE_STRIP)}else j.isPoints?Dt.setMode(D.POINTS):j.isSprite&&Dt.setMode(D.TRIANGLES);if(j.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))Dt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const fn=j._multiDrawStarts,Ge=j._multiDrawCounts,Nn=j._multiDrawCount,xt=Ee?we.get(Ee).bytesPerElement:1,Vn=q.get(J).currentProgram.getUniforms();for(let oi=0;oi<Nn;oi++)Vn.setValue(D,"_gl_DrawID",oi),Dt.render(fn[oi]/xt,Ge[oi])}else if(j.isInstancedMesh)Dt.renderInstances(Ze,Xt,j.count);else if(ne.isInstancedBufferGeometry){const fn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ge=Math.min(ne.instanceCount,fn);Dt.renderInstances(Ze,Xt,Ge)}else Dt.render(Ze,Xt)};function ut(S,H,ne){S.transparent===!0&&S.side===Kn&&S.forceSinglePass===!1?(S.side=Ln,S.needsUpdate=!0,ys(S,H,ne),S.side=fs,S.needsUpdate=!0,ys(S,H,ne),S.side=Kn):ys(S,H,ne)}this.compile=function(S,H,ne=null){ne===null&&(ne=S),T=Ce.get(ne),T.init(H),x.push(T),ne.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),S!==ne&&S.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const J=new Set;return S.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Oe=j.material;if(Oe)if(Array.isArray(Oe))for(let He=0;He<Oe.length;He++){const Ue=Oe[He];ut(Ue,ne,j),J.add(Ue)}else ut(Oe,ne,j),J.add(Oe)}),T=x.pop(),J},this.compileAsync=function(S,H,ne=null){const J=this.compile(S,H,ne);return new Promise(j=>{function Oe(){if(J.forEach(function(He){q.get(He).currentProgram.isReady()&&J.delete(He)}),J.size===0){j(S);return}setTimeout(Oe,10)}Ie.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let pt=null;function Rt(S){pt&&pt(S)}function mt(){Nt.stop()}function Wt(){Nt.start()}const Nt=new yg;Nt.setAnimationLoop(Rt),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(S){pt=S,We.setAnimationLoop(S),S===null?Nt.stop():Nt.start()},We.addEventListener("sessionstart",mt),We.addEventListener("sessionend",Wt),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;k!==null&&k.renderStart(S,H);const ne=We.enabled===!0&&We.isPresenting===!0,J=R!==null&&(se===null||ne)&&R.begin(N,se);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(H),H=We.getCamera()),S.isScene===!0&&S.onBeforeRender(N,S,H,se),T=Ce.get(S,x.length),T.init(H),T.state.textureUnits=Q.getTextureUnits(),x.push(T),Z.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),B.setFromProjectionMatrix(Z,gi,H.reversedDepth),z=this.localClippingEnabled,Y=Ye.init(this.clippingPlanes,z),A=De.get(S,L.length),A.init(),L.push(A),We.enabled===!0&&We.isPresenting===!0){const He=N.xr.getDepthSensingMesh();He!==null&&In(He,H,-1/0,N.sortObjects)}In(S,H,0,N.sortObjects),A.finish(),N.sortObjects===!0&&A.sort(ue,xe,H.reversedDepth),ae=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,ae&&it.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Y===!0&&Ye.beginShadows();const j=T.state.shadowsArray;if(je.render(j,S,H),Y===!0&&Ye.endShadows(),(J&&R.hasRenderPass())===!1){const He=A.opaque,Ue=A.transmissive;if(T.setupLights(),H.isArrayCamera){const Ee=H.cameras;if(Ue.length>0)for(let $e=0,ot=Ee.length;$e<ot;$e++){const lt=Ee[$e];qi(He,Ue,S,lt)}ae&&it.render(S);for(let $e=0,ot=Ee.length;$e<ot;$e++){const lt=Ee[$e];vs(A,S,lt,lt.viewport)}}else Ue.length>0&&qi(He,Ue,S,H),ae&&it.render(S),vs(A,S,H)}se!==null&&G===0&&(Q.updateMultisampleRenderTarget(se),Q.updateRenderTargetMipmap(se)),J&&R.end(N),S.isScene===!0&&S.onAfterRender(N,S,H),Fe.resetDefaultState(),de=-1,pe=null,x.pop(),x.length>0?(T=x[x.length-1],Q.setTextureUnits(T.state.textureUnits),Y===!0&&Ye.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?A=L[L.length-1]:A=null,k!==null&&k.renderEnd()};function In(S,H,ne,J){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)ne=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||B.intersectsSprite(S)){J&&ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const He=le.update(S),Ue=S.material;Ue.visible&&A.push(S,He,Ue,ne,ge.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||B.intersectsObject(S))){const He=le.update(S),Ue=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ge.copy(S.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ge.copy(He.boundingSphere.center)),ge.applyMatrix4(S.matrixWorld).applyMatrix4(Z)),Array.isArray(Ue)){const Ee=He.groups;for(let $e=0,ot=Ee.length;$e<ot;$e++){const lt=Ee[$e],Ze=Ue[lt.materialIndex];Ze&&Ze.visible&&A.push(S,He,Ze,ne,ge.z,lt)}}else Ue.visible&&A.push(S,He,Ue,ne,ge.z,null)}}const Oe=S.children;for(let He=0,Ue=Oe.length;He<Ue;He++)In(Oe[He],H,ne,J)}function vs(S,H,ne,J){const{opaque:j,transmissive:Oe,transparent:He}=S;T.setupLightsView(ne),Y===!0&&Ye.setGlobalState(N.clippingPlanes,ne),J&&_.viewport(me.copy(J)),j.length>0&&xs(j,H,ne),Oe.length>0&&xs(Oe,H,ne),He.length>0&&xs(He,H,ne),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function qi(S,H,ne,J){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){const Ze=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new xi(1,1,{generateMipmaps:!0,type:Ze?Gi:Bn,minFilter:Ls,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const Oe=T.state.transmissionRenderTarget[J.id],He=J.viewport||me;Oe.setSize(He.z*N.transmissionResolutionScale,He.w*N.transmissionResolutionScale);const Ue=N.getRenderTarget(),Ee=N.getActiveCubeFace(),$e=N.getActiveMipmapLevel();N.setRenderTarget(Oe),N.getClearColor(ct),et=N.getClearAlpha(),et<1&&N.setClearColor(16777215,.5),N.clear(),ae&&it.render(ne);const ot=N.toneMapping;N.toneMapping=vi;const lt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),Y===!0&&Ye.setGlobalState(N.clippingPlanes,J),xs(S,ne,J),Q.updateMultisampleRenderTarget(Oe),Q.updateRenderTargetMipmap(Oe),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ct=0,Xt=H.length;Ct<Xt;Ct++){const kt=H[Ct],{object:Dt,geometry:fn,material:Ge,group:Nn}=kt;if(Ge.side===Kn&&Dt.layers.test(J.layers)){const xt=Ge.side;Ge.side=Ln,Ge.needsUpdate=!0,Or(Dt,ne,J,fn,Ge,Nn),Ge.side=xt,Ge.needsUpdate=!0,Ze=!0}}Ze===!0&&(Q.updateMultisampleRenderTarget(Oe),Q.updateRenderTargetMipmap(Oe))}N.setRenderTarget(Ue,Ee,$e),N.setClearColor(ct,et),lt!==void 0&&(J.viewport=lt),N.toneMapping=ot}function xs(S,H,ne){const J=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Oe=S.length;j<Oe;j++){const He=S[j],{object:Ue,geometry:Ee,group:$e}=He;let ot=He.material;ot.allowOverride===!0&&J!==null&&(ot=J),Ue.layers.test(ne.layers)&&Or(Ue,H,ne,Ee,ot,$e)}}function Or(S,H,ne,J,j,Oe){S.onBeforeRender(N,H,ne,J,j,Oe),S.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(N,H,ne,J,S,Oe),j.transparent===!0&&j.side===Kn&&j.forceSinglePass===!1?(j.side=Ln,j.needsUpdate=!0,N.renderBufferDirect(ne,H,J,j,S,Oe),j.side=fs,j.needsUpdate=!0,N.renderBufferDirect(ne,H,J,j,S,Oe),j.side=Kn):N.renderBufferDirect(ne,H,J,j,S,Oe),S.onAfterRender(N,H,ne,J,j,Oe)}function ys(S,H,ne){H.isScene!==!0&&(H=ce);const J=q.get(S),j=T.state.lights,Oe=T.state.shadowsArray,He=j.state.version,Ue=Ae.getParameters(S,j.state,Oe,H,ne,T.state.lightProbeGridArray),Ee=Ae.getProgramCacheKey(Ue);let $e=J.programs;J.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;const ot=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;J.envMap=Se.get(S.envMap||J.environment,ot),J.envMapRotation=J.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,$e===void 0&&(S.addEventListener("dispose",ee),$e=new Map,J.programs=$e);let lt=$e.get(Ee);if(lt!==void 0){if(J.currentProgram===lt&&J.lightsStateVersion===He)return Br(S,Ue),lt}else Ue.uniforms=Ae.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,ne,Ue),S.onBeforeCompile(Ue,N),lt=Ae.acquireProgram(Ue,Ee),$e.set(Ee,lt),J.uniforms=Ue.uniforms;const Ze=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ze.clippingPlanes=Ye.uniform),Br(S,Ue),J.needsLights=Fo(S),J.lightsStateVersion=He,J.needsLights&&(Ze.ambientLightColor.value=j.state.ambient,Ze.lightProbe.value=j.state.probe,Ze.directionalLights.value=j.state.directional,Ze.directionalLightShadows.value=j.state.directionalShadow,Ze.spotLights.value=j.state.spot,Ze.spotLightShadows.value=j.state.spotShadow,Ze.rectAreaLights.value=j.state.rectArea,Ze.ltc_1.value=j.state.rectAreaLTC1,Ze.ltc_2.value=j.state.rectAreaLTC2,Ze.pointLights.value=j.state.point,Ze.pointLightShadows.value=j.state.pointShadow,Ze.hemisphereLights.value=j.state.hemi,Ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ze.spotLightMatrix.value=j.state.spotLightMatrix,Ze.spotLightMap.value=j.state.spotLightMap,Ze.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=T.state.lightProbeGridArray.length>0,J.currentProgram=lt,J.uniformsList=null,lt}function Fr(S){if(S.uniformsList===null){const H=S.currentProgram.getUniforms();S.uniformsList=Ca.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function Br(S,H){const ne=q.get(S);ne.outputColorSpace=H.outputColorSpace,ne.batching=H.batching,ne.batchingColor=H.batchingColor,ne.instancing=H.instancing,ne.instancingColor=H.instancingColor,ne.instancingMorph=H.instancingMorph,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function No(S,H){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let ne=0,J=S.length;ne<J;ne++){const j=S[ne];if(j.texture!==null&&j.boundingBox.containsPoint(y))return j}return null}function Uo(S,H,ne,J,j){H.isScene!==!0&&(H=ce),Q.resetTextureUnits();const Oe=H.fog,He=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,Ue=se===null?N.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:gt.workingColorSpace,Ee=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,$e=Se.get(J.envMap||He,Ee),ot=J.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,lt=!!ne.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ze=!!ne.morphAttributes.position,Ct=!!ne.morphAttributes.normal,Xt=!!ne.morphAttributes.color;let kt=vi;J.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(kt=N.toneMapping);const Dt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,fn=Dt!==void 0?Dt.length:0,Ge=q.get(J),Nn=T.state.lights;if(Y===!0&&(z===!0||S!==pe)){const Ut=S===pe&&J.id===de;Ye.setState(J,S,Ut)}let xt=!1;J.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Nn.state.version||Ge.outputColorSpace!==Ue||j.isBatchedMesh&&Ge.batching===!1||!j.isBatchedMesh&&Ge.batching===!0||j.isBatchedMesh&&Ge.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ge.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ge.instancing===!1||!j.isInstancedMesh&&Ge.instancing===!0||j.isSkinnedMesh&&Ge.skinning===!1||!j.isSkinnedMesh&&Ge.skinning===!0||j.isInstancedMesh&&Ge.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ge.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ge.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ge.instancingMorph===!1&&j.morphTexture!==null||Ge.envMap!==$e||J.fog===!0&&Ge.fog!==Oe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ye.numPlanes||Ge.numIntersection!==Ye.numIntersection)||Ge.vertexAlphas!==ot||Ge.vertexTangents!==lt||Ge.morphTargets!==Ze||Ge.morphNormals!==Ct||Ge.morphColors!==Xt||Ge.toneMapping!==kt||Ge.morphTargetsCount!==fn||!!Ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ge.__version=J.version);let Vn=Ge.currentProgram;xt===!0&&(Vn=ys(J,H,j),k&&J.isNodeMaterial&&k.onUpdateProgram(J,Vn,Ge));let oi=!1,$i=!1,Gs=!1;const Lt=Vn.getUniforms(),qt=Ge.uniforms;if(_.useProgram(Vn.program)&&(oi=!0,$i=!0,Gs=!0),J.id!==de&&(de=J.id,$i=!0),Ge.needsLights){const Ut=No(T.state.lightProbeGridArray,j);Ge.lightProbeGrid!==Ut&&(Ge.lightProbeGrid=Ut,$i=!0)}if(oi||pe!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Lt.setValue(D,"projectionMatrix",S.projectionMatrix),Lt.setValue(D,"viewMatrix",S.matrixWorldInverse);const Ki=Lt.map.cameraPosition;Ki!==void 0&&Ki.setValue(D,ve.setFromMatrixPosition(S.matrixWorld)),b.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),pe!==S&&(pe=S,$i=!0,Gs=!0)}if(Ge.needsLights&&(Nn.state.directionalShadowMap.length>0&&Lt.setValue(D,"directionalShadowMap",Nn.state.directionalShadowMap,Q),Nn.state.spotShadowMap.length>0&&Lt.setValue(D,"spotShadowMap",Nn.state.spotShadowMap,Q),Nn.state.pointShadowMap.length>0&&Lt.setValue(D,"pointShadowMap",Nn.state.pointShadowMap,Q)),j.isSkinnedMesh){Lt.setOptional(D,j,"bindMatrix"),Lt.setOptional(D,j,"bindMatrixInverse");const Ut=j.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Lt.setValue(D,"boneTexture",Ut.boneTexture,Q))}j.isBatchedMesh&&(Lt.setOptional(D,j,"batchingTexture"),Lt.setValue(D,"batchingTexture",j._matricesTexture,Q),Lt.setOptional(D,j,"batchingIdTexture"),Lt.setValue(D,"batchingIdTexture",j._indirectTexture,Q),Lt.setOptional(D,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(D,"batchingColorTexture",j._colorsTexture,Q));const Yi=ne.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&F.update(j,ne,Vn),($i||Ge.receiveShadow!==j.receiveShadow)&&(Ge.receiveShadow=j.receiveShadow,Lt.setValue(D,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(qt.envMapIntensity.value=H.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=ZR()),$i){if(Lt.setValue(D,"toneMappingExposure",N.toneMappingExposure),Ge.needsLights&&Oo(qt,Gs),Oe&&J.fog===!0&&Ve.refreshFogUniforms(qt,Oe),Ve.refreshMaterialUniforms(qt,J,$,U,T.state.transmissionRenderTarget[S.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ut=Ge.lightProbeGrid;qt.probesSH.value=Ut.texture,qt.probesMin.value.copy(Ut.boundingBox.min),qt.probesMax.value.copy(Ut.boundingBox.max),qt.probesResolution.value.copy(Ut.resolution)}Ca.upload(D,Fr(Ge),qt,Q)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ca.upload(D,Fr(Ge),qt,Q),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Lt.setValue(D,"center",j.center),Lt.setValue(D,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(D,"normalMatrix",j.normalMatrix),Lt.setValue(D,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){const Ut=J.uniformsGroups;for(let Ki=0,Ws=Ut.length;Ki<Ws;Ki++){const Df=Ut[Ki];_e.update(Df,Vn),_e.bind(Df,Vn)}}return Vn}function Oo(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function Fo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(S,H,ne){const J=q.get(S);J.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),q.get(S.texture).__webglTexture=H,q.get(S.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ne,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,H){const ne=q.get(S);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,ne=0){se=S,te=H,G=ne;let J=null,j=!1,Oe=!1;if(S){const Ue=q.get(S);if(Ue.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,Ue.__webglFramebuffer),me.copy(S.viewport),Te.copy(S.scissor),Je=S.scissorTest,_.viewport(me),_.scissor(Te),_.setScissorTest(Je),de=-1;return}else if(Ue.__webglFramebuffer===void 0)Q.setupRenderTarget(S);else if(Ue.__hasExternalTextures)Q.rebindTextures(S,q.get(S.texture).__webglTexture,q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ot=S.depthTexture;if(Ue.__boundDepthTexture!==ot){if(ot!==null&&q.has(ot)&&(S.width!==ot.image.width||S.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(S)}}const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Oe=!0);const $e=q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray($e[H])?J=$e[H][ne]:J=$e[H],j=!0):S.samples>0&&Q.useMultisampledRTT(S)===!1?J=q.get(S).__webglMultisampledFramebuffer:Array.isArray($e)?J=$e[ne]:J=$e,me.copy(S.viewport),Te.copy(S.scissor),Je=S.scissorTest}else me.copy(Re).multiplyScalar($).floor(),Te.copy(w).multiplyScalar($).floor(),Je=P;if(ne!==0&&(J=ie),_.bindFramebuffer(D.FRAMEBUFFER,J)&&_.drawBuffers(S,J),_.viewport(me),_.scissor(Te),_.setScissorTest(Je),j){const Ue=q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ue.__webglTexture,ne)}else if(Oe){const Ue=H;for(let Ee=0;Ee<S.textures.length;Ee++){const $e=q.get(S.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,$e.__webglTexture,ne,Ue)}}else if(S!==null&&ne!==0){const Ue=q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ue.__webglTexture,ne)}de=-1},this.readRenderTargetPixels=function(S,H,ne,J,j,Oe,He,Ue=0){if(!(S&&S.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&He!==void 0&&(Ee=Ee[He]),Ee){_.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const $e=S.textures[Ue],ot=$e.format,lt=$e.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ue),!b.textureFormatReadable(ot)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(lt)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-J&&ne>=0&&ne<=S.height-j&&D.readPixels(H,ne,J,j,Ne.convert(ot),Ne.convert(lt),Oe)}finally{const $e=se!==null?q.get(se).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(S,H,ne,J,j,Oe,He,Ue=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&He!==void 0&&(Ee=Ee[He]),Ee)if(H>=0&&H<=S.width-J&&ne>=0&&ne<=S.height-j){_.bindFramebuffer(D.FRAMEBUFFER,Ee);const $e=S.textures[Ue],ot=$e.format,lt=$e.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ue),!b.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,Oe.byteLength,D.STREAM_READ),D.readPixels(H,ne,J,j,Ne.convert(ot),Ne.convert(lt),0);const Ct=se!==null?q.get(se).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ct);const Xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await fb(D,Xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Oe),D.deleteBuffer(Ze),D.deleteSync(Xt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,H=null,ne=0){const J=Math.pow(2,-ne),j=Math.floor(S.image.width*J),Oe=Math.floor(S.image.height*J),He=H!==null?H.x:0,Ue=H!==null?H.y:0;Q.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,ne,0,0,He,Ue,j,Oe),_.unbindTexture()},this.copyTextureToTexture=function(S,H,ne=null,J=null,j=0,Oe=0){let He,Ue,Ee,$e,ot,lt,Ze,Ct,Xt;const kt=S.isCompressedTexture?S.mipmaps[Oe]:S.image;if(ne!==null)He=ne.max.x-ne.min.x,Ue=ne.max.y-ne.min.y,Ee=ne.isBox3?ne.max.z-ne.min.z:1,$e=ne.min.x,ot=ne.min.y,lt=ne.isBox3?ne.min.z:0;else{const qt=Math.pow(2,-j);He=Math.floor(kt.width*qt),Ue=Math.floor(kt.height*qt),S.isDataArrayTexture?Ee=kt.depth:S.isData3DTexture?Ee=Math.floor(kt.depth*qt):Ee=1,$e=0,ot=0,lt=0}J!==null?(Ze=J.x,Ct=J.y,Xt=J.z):(Ze=0,Ct=0,Xt=0);const Dt=Ne.convert(H.format),fn=Ne.convert(H.type);let Ge;H.isData3DTexture?(Q.setTexture3D(H,0),Ge=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),Ge=D.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),Ge=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const Nn=_.getParameter(D.UNPACK_ROW_LENGTH),xt=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Vn=_.getParameter(D.UNPACK_SKIP_PIXELS),oi=_.getParameter(D.UNPACK_SKIP_ROWS),$i=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,kt.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,kt.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,$e),_.pixelStorei(D.UNPACK_SKIP_ROWS,ot),_.pixelStorei(D.UNPACK_SKIP_IMAGES,lt);const Gs=S.isDataArrayTexture||S.isData3DTexture,Lt=H.isDataArrayTexture||H.isData3DTexture;if(S.isDepthTexture){const qt=q.get(S),Yi=q.get(H),Ut=q.get(qt.__renderTarget),Ki=q.get(Yi.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,Ut.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let Ws=0;Ws<Ee;Ws++)Gs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(S).__webglTexture,j,lt+Ws),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(H).__webglTexture,Oe,Xt+Ws)),D.blitFramebuffer($e,ot,He,Ue,Ze,Ct,He,Ue,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(j!==0||S.isRenderTargetTexture||q.has(S)){const qt=q.get(S),Yi=q.get(H);_.bindFramebuffer(D.READ_FRAMEBUFFER,re),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,X);for(let Ut=0;Ut<Ee;Ut++)Gs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.__webglTexture,j,lt+Ut):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qt.__webglTexture,j),Lt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yi.__webglTexture,Oe,Xt+Ut):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yi.__webglTexture,Oe),j!==0?D.blitFramebuffer($e,ot,He,Ue,Ze,Ct,He,Ue,D.COLOR_BUFFER_BIT,D.NEAREST):Lt?D.copyTexSubImage3D(Ge,Oe,Ze,Ct,Xt+Ut,$e,ot,He,Ue):D.copyTexSubImage2D(Ge,Oe,Ze,Ct,$e,ot,He,Ue);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Lt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Ge,Oe,Ze,Ct,Xt,He,Ue,Ee,Dt,fn,kt.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(Ge,Oe,Ze,Ct,Xt,He,Ue,Ee,Dt,kt.data):D.texSubImage3D(Ge,Oe,Ze,Ct,Xt,He,Ue,Ee,Dt,fn,kt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Oe,Ze,Ct,He,Ue,Dt,fn,kt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Oe,Ze,Ct,kt.width,kt.height,Dt,kt.data):D.texSubImage2D(D.TEXTURE_2D,Oe,Ze,Ct,He,Ue,Dt,fn,kt);_.pixelStorei(D.UNPACK_ROW_LENGTH,Nn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Vn),_.pixelStorei(D.UNPACK_SKIP_ROWS,oi),_.pixelStorei(D.UNPACK_SKIP_IMAGES,$i),Oe===0&&H.generateMipmaps&&D.generateMipmap(Ge),_.unbindTexture()},this.initRenderTarget=function(S){q.get(S).__webglFramebuffer===void 0&&Q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Q.setTextureCube(S,0):S.isData3DTexture?Q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Q.setTexture2DArray(S,0):Q.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){te=0,G=0,se=null,_.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}const Jh={type:"change"},Tf={type:"start"},Rg={type:"end"},ma=new Ml,jh=new rs,jR=Math.cos(70*pb.DEG2RAD),Kt=new W,Rn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bc=1e-6;class QR extends tE{constructor(e,n=null){super(e,n),this.state=Pt.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new ds,this._lastTargetPosition=new W,this._quat=new ds().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Th,this._sphericalDelta=new Th,this._scale=1,this._panOffset=new W,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new W,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t1.bind(this),this._onPointerDown=e1.bind(this),this._onPointerUp=n1.bind(this),this._onContextMenu=c1.bind(this),this._onMouseWheel=r1.bind(this),this._onKeyDown=o1.bind(this),this._onTouchStart=a1.bind(this),this._onTouchMove=l1.bind(this),this._onMouseDown=i1.bind(this),this._onMouseMove=s1.bind(this),this._interceptControlDown=u1.bind(this),this._interceptControlUp=f1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jh),this.update(),this.state=Pt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Kt.copy(n).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Kt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new W(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ma.origin.copy(this.object.position),ma.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ma.direction))<jR?this.object.lookAt(this.target):(jh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ma.intersectPlane(jh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bc||this._lastTargetPosition.distanceToSquared(this.target)>bc?(this.dispatchEvent(Jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Kt.setFromMatrixColumn(n,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,n){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(n,1):(Kt.setFromMatrixColumn(n,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Kt.copy(s).sub(this.target);let r=Kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new nt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function e1(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function t1(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function n1(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rg),this.state=Pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function i1(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Pt.DOLLY;break;case pr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Pt.ROTATE}break;case pr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Tf)}function s1(t){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function r1(t){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(t.preventDefault(),this.dispatchEvent(Tf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Rg))}function o1(t){this.enabled!==!1&&this._handleKeyDown(t)}function a1(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Pt.TOUCH_ROTATE;break;case cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Pt.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Tf)}function l1(t){switch(this._trackPointer(t),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Pt.NONE}}function c1(t){this.enabled!==!1&&t.preventDefault()}function u1(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function f1(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const d1={class:"page-card"},h1={class:"media-controls"},p1={class:"segmented-control"},m1={key:0,class:"stream-start-time"},g1=["disabled"],_1={key:0,value:""},v1={key:1,value:"",disabled:""},x1=["value"],y1={class:"video-select-control"},S1=["disabled"],M1={key:0,value:""},b1=["value"],E1={class:"switch-control"},T1={class:"segmented-control"},A1={key:0,class:"placeholder"},w1={key:1,class:"stream-workspace"},R1={class:"stream-main"},C1={key:0,class:"video-viewport"},P1=["src","title"],D1={key:0,class:"live-pause-overlay"},L1={key:1,class:"detection-layer"},I1={class:"video-playback-controls"},N1=["title"],U1={key:1,class:"video-viewport"},O1=["src"],F1={key:0,class:"detection-layer"},B1={class:"video-playback-controls"},z1=["title"],k1=["max","value"],V1={key:2,class:"placeholder"},H1={class:"stream-sidebar"},G1={key:0,class:"side-section screw-position-card"},W1={class:"screw-fusion-control"},X1=["disabled"],q1={class:"absolute-position"},$1={key:0},Y1={key:1},K1={key:1,class:"no-screw-localization"},Z1={key:2,class:"telemetry-dashboard"},J1={class:"position-scene-card"},j1={class:"fusion-data-card"},Q1={class:"current-position"},eC={class:"sensor-columns"},tC={class:"uwb-range-grid"},nC={class:"imu-readout"},iC={key:0},sC={key:1,class:"path-algorithm-menu"},rC={class:"trail-toggle trail-ekf"},oC={class:"trail-toggle trail-complementary"},aC={class:"trail-toggle trail-weighted"},lC={key:3,class:"success"},cC={key:4,class:"alert"},uC={__name:"StreamPage",setup(t){const e=qe([]),n=qe([]),i=qe([]),s=qe([]),r=qe("history"),o=qe(""),a=qe(""),l=qe("color"),c=qe("ekf"),u=qe("average"),f=qe(!0),d=qe(0),p=qe(0),g=qe(!1),v=qe(null),m=qe(null),h=qe(!0),M=qe(!1),E=qe(""),y=qe(""),A=qe(0),T=qe(!1),L=qe(0),x=qe([]),R=ms({ekf:!0,complementary:!0,weighted_average:!0}),N={ekf:2450411,complementary:1096065,weighted_average:16096779},I=qe({ekf:[],complementary:[],weighted_average:[]}),k=qe([]),ie=qe(null),re=qe(null),X=[{id:1,x:0,y:0,z:0},{id:2,x:20,y:0,z:0},{id:3,x:0,y:12,z:0},{id:4,x:20,y:12,z:0},{id:5,x:0,y:0,z:2.5},{id:6,x:20,y:0,z:2.5},{id:7,x:0,y:12,z:2.5},{id:8,x:20,y:12,z:2.5}],te=[{id:"A-1",type:"M4 hex screw",x:1.2,y:1.2,z:1.1},{id:"A-2",type:"M4 hex screw",x:2,y:1.2,z:1.1},{id:"B-1",type:"M6 socket screw",x:18,y:1.2,z:1.1},{id:"B-2",type:"M6 socket screw",x:18.8,y:1.2,z:1.1},{id:"B-3",type:"M6 socket screw",x:1.2,y:10.8,z:1.1},{id:"B-4",type:"M6 socket screw",x:2,y:10.8,z:1.1},{id:"A-3",type:"M4 hex screw",x:18,y:10.8,z:1.1},{id:"A-4",type:"M4 hex screw",x:18.8,y:10.8,z:1.1}];let G,se=-1,de,pe,me,Te,Je,ct,et,K,U,$,ue,xe;const Re=new Map,w=_t(()=>e.value.filter(fe=>!fe.endTime).sort((fe,ee)=>new Date(ee.startTime)-new Date(fe.startTime))[0]||null),P=_t(()=>e.value.filter(fe=>{var ee;return fe._id!==((ee=w.value)==null?void 0:ee._id)})),B=_t(()=>{var fe;return(fe=w.value)!=null&&fe.startTime?new Date(w.value.startTime).toLocaleString("zh-TW"):"尚未開始作業"}),Y=_t(()=>n.value.filter(fe=>fe.kind===l.value||fe.kind==="combined")),z=_t(()=>Y.value.find(fe=>fe.filename===a.value)),Z=_t(()=>{const fe=i.value.filter(ee=>{var Ke;return ee.imageId===((Ke=z.value)==null?void 0:Ke.filename)});return fe.length?fe:i.value}),ve=_t(()=>({_id:"simulated-screw",objectClass:"螺絲",depth:Number((118+Math.sin(A.value*.18)*3).toFixed(1)),bbox:{x:Math.round(860+Math.sin(A.value*.14)*22),y:Math.round(465+Math.cos(A.value*.11)*12),width:200,height:150}})),ge=_t(()=>Math.floor((A.value+20)/4)%13!==0),ce=_t(()=>{var Ke;if(r.value==="live")return i.value.at(-1)||ve.value;if(!Z.value.length)return null;const fe=new Date(Z.value[0].timestamp).getTime()||((Ke=z.value)!=null&&Ke.startedAt?z.value.startedAt*1e3:null);if(!fe)return Z.value[0]||ve.value;const ee=fe+d.value*1e3;return Z.value.reduce((ht,ut)=>Math.abs(new Date(ut.timestamp).getTime()-ee)<Math.abs(new Date(ht.timestamp).getTime()-ee)?ut:ht)}),ae=_t(()=>r.value==="live"?i.value.length>0:Z.value.length>0),Le=_t(()=>r.value==="live"?!!w.value:!!z.value),D=_t(()=>f.value&&!T.value&&Le.value&&!!ce.value&&(ae.value||ge.value)),ke=_t(()=>ce.value?["example_object","screw_simulated"].includes(ce.value.objectClass)?"螺絲":ce.value.objectClass:"未偵測到螺絲"),Ie=_t(()=>`http://localhost:8889/${l.value==="depth"?"cam-depth":"cam-color"}`),b=fe=>Number(fe??0).toFixed(3),_=()=>{var Ke,ht;if(r.value==="live"){I.value=Object.fromEntries(Object.keys(N).map(ut=>[ut,ut===c.value?k.value:[]])),x.value=k.value;return}const fe=r.value==="history"?(Ke=z.value)!=null&&Ke.startedAt?z.value.startedAt*1e3+d.value*1e3:new Date(((ht=ce.value)==null?void 0:ht.timestamp)||0).getTime():1/0,ee=Object.fromEntries(Object.keys(N).map(ut=>[ut,s.value.filter(pt=>pt.fusionAlgorithm===ut&&new Date(pt.timestamp).getTime()<=fe).map(pt=>{var Rt;return(Rt=pt.telemetry)==null?void 0:Rt.position}).filter(Boolean).slice(-80).map(pt=>({...pt}))]));I.value=ee,x.value=ee[c.value]||[]},O=fe=>new W(Number((fe==null?void 0:fe.x)||0),Number((fe==null?void 0:fe.z)||0),Number((fe==null?void 0:fe.y)||0)),q=fe=>O(fe),Q=(fe,ee)=>{fe.userData.hoverLabel=ee},Se=fe=>{const ee=new ls,Ke=new Kr({color:3900150,roughness:.35,metalness:.35}),ht=new sn(new Hs(.24,.12,.24),Ke),ut=new sn(new Hs(.1,.16,.1),Ke);return ut.position.y=.14,ee.add(ht,ut),ee.position.copy(q(fe)),Q(ee,`基地站 ${fe.id}：X ${fe.x}、Y ${fe.y}、Z ${fe.z} m`),ee},we=(fe=16096779)=>{const ee=new ls,Ke=new Kr({color:fe,metalness:.72,roughness:.25}),ht=new sn(new bo(.045,.045,.25,16),Ke);ht.rotation.z=Math.PI/2;const ut=new sn(new bo(.105,.105,.045,16),Ke);return ut.rotation.z=Math.PI/2,ut.position.x=-.14,ee.add(ht,ut),ee.userData.material=Ke,ee},oe=fe=>{const ee=new ls,Ke=new sn(new Qa(.12,20,16),new Kr({color:fe,emissive:fe,emissiveIntensity:.22})),ht=new sn(new ja(.45,1.2,24,1,!0),new Ka({color:fe,transparent:!0,opacity:.2,side:Kn}));return ht.rotation.x=-Math.PI/2,ht.position.z=.6,ee.add(Ke,ht),ee},le=()=>{var Rt;if(!pe||!m.value||!Je||!et)return;const fe=m.value.telemetry;Je.visible=!1,Je.position.copy(O(fe.position));const ee=Math.PI/180,Ke=fe.orientation,ht=-(Ke.yaw-90)*ee;Je.rotation.set(Ke.pitch*ee,ht,Ke.roll*ee,"YXZ"),Object.entries(ct||{}).forEach(([mt,Wt])=>{const Nt=I.value[mt]||[],In=r.value==="live"?mt===c.value:R[mt];Wt.visible=In&&Nt.length>0,Wt.visible&&(Wt.position.copy(O(Nt.at(-1))),Wt.rotation.set(Ke.pitch*ee,ht,Ke.roll*ee,"YXZ"),Q(Wt,`${mt} device: ${b(Nt.at(-1).x)}, ${b(Nt.at(-1).y)}, ${b(Nt.at(-1).z)} m`))}),et.position.copy(O(m.value.absolutePosition)),et.visible=!1,Q(Je,`設備：X ${b(fe.position.x)}、Y ${b(fe.position.y)}、Z ${b(fe.position.z)} m；Roll ${b(Ke.roll)}°、Pitch ${b(Ke.pitch)}°、Yaw ${b(Ke.yaw)}°`),m.value.absolutePosition&&Q(et,`螺絲：X ${b(m.value.absolutePosition.x)}、Y ${b(m.value.absolutePosition.y)}、Z ${b(m.value.absolutePosition.z)} m`),Object.entries(K||{}).forEach(([mt,Wt])=>{const Nt=new An().setFromPoints((I.value[mt]||[]).map(O));Wt.geometry.dispose(),Wt.geometry=Nt,Wt.visible=R[mt]});const ut=((Rt=fe.workspace)==null?void 0:Rt.screws)||te,pt=new Map((m.value.localizedScrews||[]).map(mt=>[mt.screwId,mt]));ut.forEach(mt=>{var qi;const Wt=Re.get(mt.id);if(!Wt)return;const Nt=pt.get(mt.id),In=(Nt==null?void 0:Nt.position)||mt;Wt.position.copy(O(In));const vs=mt.type.includes("M4")?2450411:9647082;Wt.userData.material.color.setHex(Nt||mt.visible?16096779:vs),(qi=Wt.userData.material.emissive)==null||qi.setHex(Nt||mt.visible?7027968:0),Q(Wt,`${mt.type} ${mt.id}：X ${b(In.x)}、Y ${b(In.y)}、Z ${b(In.z)} m${Nt?`；已由 ${m.value.screwFusionLabel||"螺絲融合"} 更新（${Nt.observationCount} 幀）`:mt.visible?`；已在攝影機視野內，深度 ${b(mt.depth)} m`:"；未進入攝影機辨識範圍"}`)})},Ae=async()=>{if(await cl(),de||!ie.value){le();return}pe=new Rb,pe.background=new ft(16777215),me=new Wn(42,1,.1,100),me.position.set(25,19,26),de=new JR({antialias:!0}),de.setPixelRatio(Math.min(window.devicePixelRatio,2)),ie.value.appendChild(de.domElement),Te=new QR(me,de.domElement),Te.target.set(10,1.1,6),Te.enableDamping=!0,Te.minDistance=8,Te.maxDistance=42,pe.add(new $b(16777215,13358561,2));const fe=new Zb(16777215,2.5);fe.position.set(5,7,4),pe.add(fe);const ee=new sn(new Io(20,12),new Kr({color:16317180,roughness:.95}));ee.rotation.x=-Math.PI/2,ee.position.set(10,-.02,6),pe.add(ee);const Ke=new eE(20,20,13358561,14870768);Ke.scale.z=.6,Ke.position.set(10,0,6),pe.add(Ke),X.forEach(pt=>pe.add(Se(pt))),ct=Object.fromEntries(Object.entries(N).map(([pt,Rt])=>{const mt=oe(Rt);return pe.add(mt),[pt,mt]})),Je=new ls;const ht=new sn(new Qa(.12,20,16),new Kr({color:1096065,emissive:289870,emissiveIntensity:.35})),ut=new sn(new ja(.45,1.2,24,1,!0),new Ka({color:3462041,transparent:!0,opacity:.2,side:Kn}));ut.rotation.x=-Math.PI/2,ut.position.z=.6,Je.add(ht,ut),pe.add(Je),et=we(),pe.add(et),te.forEach(pt=>{const Rt=we(pt.type.includes("M4")?2450411:9647082);Rt.position.copy(O(pt)),Q(Rt,`${pt.type} ${pt.id}：X ${pt.x}、Y ${pt.y}、Z ${pt.z} m`),Re.set(pt.id,Rt),pe.add(Rt)}),K=Object.fromEntries(Object.entries(N).map(([pt,Rt])=>{const mt=new pg(new An,new bf({color:Rt}));return pe.add(mt),[pt,mt]})),U=new Qb,$=new nt,de.domElement.addEventListener("pointermove",De),xe=new ResizeObserver(Ve),xe.observe(ie.value),Ve(),le(),Ce()},Ve=()=>{if(!de||!ie.value)return;const{clientWidth:fe,clientHeight:ee}=ie.value;!fe||!ee||(de.setSize(fe,ee),me.aspect=fe/ee,me.updateProjectionMatrix())},De=fe=>{if(!de||!re.value)return;const ee=de.domElement.getBoundingClientRect();$.set((fe.clientX-ee.left)/ee.width*2-1,-((fe.clientY-ee.top)/ee.height)*2+1),U.setFromCamera($,me);const Ke=U.intersectObjects(pe.children,!0).map(ht=>{let ut=ht.object;for(;ut&&!ut.userData.hoverLabel;)ut=ut.parent;return ut}).find(Boolean);re.value.style.display=Ke?"block":"none",Ke&&(re.value.textContent=Ke.userData.hoverLabel,re.value.style.left=`${fe.clientX-ee.left+12}px`,re.value.style.top=`${fe.clientY-ee.top+12}px`)},Ce=()=>{ue=requestAnimationFrame(Ce),Te.update(),de.render(pe,me)},Ye=()=>{var fe;cancelAnimationFrame(ue),xe==null||xe.disconnect(),(fe=de==null?void 0:de.domElement)==null||fe.removeEventListener("pointermove",De),de==null||de.dispose(),de=null},je=async()=>{var fe,ee,Ke;if(n.value=[],i.value=[],s.value=[],a.value="",d.value=0,!!o.value)try{const[ht,ut,pt]=await Promise.all([Ht.get(`/videos/${o.value}`),Ht.get(`/detections/${o.value}`),Ht.get(`/operator-telemetry/${o.value}`)]);n.value=ht.data,i.value=ut.data.sort((Rt,mt)=>new Date(Rt.timestamp)-new Date(mt.timestamp)),s.value=pt.data,a.value=((fe=Y.value[0])==null?void 0:fe.filename)||"",await F()}catch(ht){E.value=((Ke=(ee=ht.response)==null?void 0:ee.data)==null?void 0:Ke.error)||"無法讀取歷史影片或偵測資料。"}},it=async()=>{e.value=(await Ht.get("/operations")).data},F=async()=>{var fe,ee,Ke,ht,ut,pt;if(o.value)try{const Rt={source:r.value,algorithm:c.value,screwAlgorithm:u.value};r.value==="history"&&((fe=z.value)!=null&&fe.startedAt)&&(Rt.at=z.value.startedAt*1e3+d.value*1e3,s.value=(await Ht.get(`/operator-telemetry/${o.value}`,{params:{at:Rt.at}})).data),(ee=ce.value)!=null&&ee._id&&ce.value._id!=="simulated-screw"&&(Rt.detectionId=ce.value._id),m.value=(await Ht.get(`/positioning/latest/${o.value}`,{params:Rt})).data,r.value==="live"&&((ht=(Ke=m.value)==null?void 0:Ke.telemetry)!=null&&ht.position)&&(k.value=[...k.value,{...m.value.telemetry.position}].slice(-80)),_(),await Ae(),le()}catch(Rt){E.value=((pt=(ut=Rt.response)==null?void 0:ut.data)==null?void 0:pt.error)||"無法讀取定位資料。"}},Pe=async()=>{var fe;if(r.value==="live")try{if(o.value||(await it(),o.value=((fe=w.value)==null?void 0:fe._id)||""),!o.value)return;const ee=await Ht.get(`/detections/${o.value}`);i.value=ee.data.sort((Ke,ht)=>new Date(Ke.timestamp)-new Date(ht.timestamp))}catch{}},he=async()=>{var fe,ee;M.value=!0,y.value="",E.value="";try{await Ht.post("/simulation/config",{fusionAlgorithm:c.value,screwFusionAlgorithm:u.value}),await F()}catch(Ke){E.value=((ee=(fe=Ke.response)==null?void 0:fe.data)==null?void 0:ee.error)||"融合設定傳送失敗。"}finally{M.value=!1}},Ne=async()=>{var fe,ee;M.value=!0,y.value="",E.value="";try{await Ht.post("/simulation/config",{fusionAlgorithm:c.value,screwFusionAlgorithm:u.value}),await F()}catch(Ke){E.value=((ee=(fe=Ke.response)==null?void 0:fe.data)==null?void 0:ee.error)||"螺絲定位融合設定傳送失敗。"}finally{M.value=!1}},Fe=fe=>{d.value=fe.target.currentTime,p.value=fe.target.duration||0},_e=async()=>{var fe,ee;(fe=v.value)!=null&&fe.paused?await v.value.play():(ee=v.value)==null||ee.pause()},Xe=async()=>{if(r.value!=="history"||!g.value)return;const fe=Math.floor(d.value*2);fe!==se&&(se=fe,await F())},We=async fe=>{Fe(fe),await Xe()},Ft=async fe=>{v.value&&(v.value.currentTime=Number(fe.target.value),d.value=Number(fe.target.value),r.value==="history"&&await F())},wt=async()=>{T.value=!T.value,T.value||(L.value+=1,await Pe(),await F())};return Ui(o,()=>{x.value=[],se=-1,r.value==="history"?je():F()}),Ui(l,()=>{var fe;a.value=((fe=Y.value[0])==null?void 0:fe.filename)||"",d.value=0}),Ui(c,()=>{r.value==="live"&&(k.value=[],Object.keys(R).forEach(fe=>{R[fe]=fe===c.value}))}),Ui(r,async()=>{var fe,ee;r.value==="history"?(await it(),o.value=((fe=P.value[0])==null?void 0:fe._id)||"",o.value||(n.value=[],i.value=[],m.value=null)):(k.value=[],Object.keys(R).forEach(Ke=>{R[Ke]=Ke===c.value}),o.value=((ee=w.value)==null?void 0:ee._id)||"",await Pe(),await F())}),gs(async()=>{var fe;try{const[ee,Ke]=await Promise.all([Ht.get("/operations"),Ht.get("/simulation/config")]);e.value=ee.data,c.value=Ke.data.fusionAlgorithm,u.value=Ke.data.screwFusionAlgorithm||"average",o.value=((fe=P.value[0])==null?void 0:fe._id)||"",G=window.setInterval(async()=>{r.value==="live"&&!T.value&&(A.value+=1,await Pe(),await F())},200)}catch{E.value="無法讀取系統資料。"}finally{h.value=!1}}),Ku(()=>{window.clearInterval(G),Ye()}),(fe,ee)=>{var ht,ut,pt,Rt,mt,Wt,Nt,In,vs,qi,xs,Or,ys,Fr,Br,No,Uo,Oo,Fo,S,H,ne,J,j,Oe,He,Ue;const Ke=N_("RouterLink");return Me(),be("section",d1,[ee[34]||(ee[34]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Media"),C("h2",null,"影像串流與末端定位")],-1)),C("div",h1,[C("div",p1,[C("button",{class:Fn({active:r.value==="history"}),type:"button",onClick:ee[0]||(ee[0]=Ee=>r.value="history")},"歷史影片",2),C("button",{class:Fn({active:r.value==="live"}),type:"button",onClick:ee[1]||(ee[1]=Ee=>r.value="live")},"目前串流",2)]),r.value==="live"?(Me(),be("p",m1,"開始時間："+ye(B.value),1)):(Me(),be(Et,{key:1},[C("label",null,[ee[14]||(ee[14]=bt("作業",-1)),Jt(C("select",{"onUpdate:modelValue":ee[2]||(ee[2]=Ee=>o.value=Ee),disabled:!P.value.length},[P.value.length?(Me(),be("option",v1,"選擇歷史作業")):(Me(),be("option",_1,"無歷史紀錄")),(Me(!0),be(Et,null,ti(P.value,Ee=>(Me(),be("option",{key:Ee._id,value:Ee._id},ye(new Date(Ee.startTime).toLocaleString("zh-TW")),9,x1))),128))],8,g1),[[Ho,o.value]])]),C("label",y1,[ee[15]||(ee[15]=bt("影片",-1)),Jt(C("select",{"onUpdate:modelValue":ee[3]||(ee[3]=Ee=>a.value=Ee),disabled:!Y.value.length},[Y.value.length?jt("",!0):(Me(),be("option",M1,"無歷史紀錄")),(Me(!0),be(Et,null,ti(Y.value,Ee=>(Me(),be("option",{key:Ee.filename,value:Ee.filename},ye(Ee.filename),9,b1))),128))],8,S1),[[Ho,a.value]])])],64)),C("label",E1,[Jt(C("input",{"onUpdate:modelValue":ee[4]||(ee[4]=Ee=>f.value=Ee),type:"checkbox"},null,512),[[Vo,f.value]]),ee[16]||(ee[16]=bt(" 顯示螺絲偵測",-1))]),C("div",T1,[C("button",{class:Fn({active:l.value==="color"}),type:"button",onClick:ee[5]||(ee[5]=Ee=>l.value="color")},"光學影像",2),C("button",{class:Fn({active:l.value==="depth"}),type:"button",onClick:ee[6]||(ee[6]=Ee=>l.value="depth")},"深度影像",2)])]),h.value?(Me(),be("p",A1,"正在讀取資料…")):(Me(),be("div",w1,[C("div",R1,[r.value==="live"?(Me(),be("div",C1,[(Me(),be("iframe",{key:`${Ie.value}-${L.value}`,class:"live-stream-frame",src:Ie.value,title:l.value==="depth"?"目前深度串流":"目前光學串流",allow:"autoplay; fullscreen"},null,8,P1)),T.value?(Me(),be("div",D1,"⏸")):jt("",!0),D.value?(Me(),be("div",L1,[C("div",{class:Fn(["detection-box",{"label-below":ce.value.bbox.y<30}]),style:uo({left:`${ce.value.bbox.x/1920*100}%`,top:`${ce.value.bbox.y/1080*100}%`,width:`${ce.value.bbox.width/1920*100}%`,height:`${ce.value.bbox.height/1080*100}%`})},[C("span",null,ye(ke.value)+" · "+ye(ce.value.depth),1)],6)])):jt("",!0),C("div",I1,[C("button",{type:"button",title:T.value?"播放最新串流":"暫停前台顯示",onClick:wt},ye(T.value?"▶":"⏸"),9,N1)])])):z.value?(Me(),be("div",U1,[(Me(),be("video",{key:z.value.filename,ref_key:"videoPlayer",ref:v,class:Fn(["video-source",{"show-depth":z.value.kind==="combined"&&l.value==="depth"}]),src:z.value.url,playsinline:"",onLoadedmetadata:Fe,onTimeupdate:We,onPlay:ee[7]||(ee[7]=Ee=>g.value=!0),onPause:ee[8]||(ee[8]=Ee=>g.value=!1)},null,42,O1)),D.value?(Me(),be("div",F1,[C("div",{class:Fn(["detection-box",{"label-below":ce.value.bbox.y<30}]),style:uo({left:`${ce.value.bbox.x/1920*100}%`,top:`${ce.value.bbox.y/1080*100}%`,width:`${ce.value.bbox.width/1920*100}%`,height:`${ce.value.bbox.height/1080*100}%`})},[C("span",null,ye(ke.value)+" · "+ye(ce.value.depth),1)],6)])):jt("",!0),C("div",B1,[C("button",{type:"button",title:g.value?"暫停":"播放",onClick:_e},ye(g.value?"⏸":"▶"),9,z1),C("input",{type:"range",min:"0",max:p.value,step:"0.01",value:d.value,onInput:Ft},null,40,k1),C("span",null,ye(Math.floor(d.value))+" / "+ye(Math.floor(p.value))+" 秒",1)])])):(Me(),be("p",V1,"此作業尚未找到歷史影片。"))]),C("aside",H1,[m.value?(Me(),be("section",G1,[ee[20]||(ee[20]=C("h3",null,"螺絲定位",-1)),C("label",W1,[ee[18]||(ee[18]=bt("螺絲定位融合演算法",-1)),Jt(C("select",{"onUpdate:modelValue":ee[9]||(ee[9]=Ee=>u.value=Ee),disabled:M.value,onChange:Ne},[...ee[17]||(ee[17]=[C("option",{value:"average"},"平均法（多幀座標平均）",-1),C("option",{value:"ekf"},"EKF（靜態位置濾波）",-1),C("option",{value:"es_ekf"},"ESKF（誤差狀態濾波）",-1),C("option",{value:"rmv_fgo"},"RMV-FGO（魯棒多視角因子圖）",-1)])],40,X1),[[Ho,u.value]])]),m.value.detection?(Me(),be(Et,{key:0},[C("p",null,ye(ke.value)+"　深度 "+ye((ht=ce.value)==null?void 0:ht.depth),1),C("p",null,[bt("模型："+ye(m.value.detection.detectionAlgorithm),1),ee[19]||(ee[19]=C("br",null,null,-1)),bt("設備 UWB + IMU："+ye(m.value.fusionAlgorithm),1)]),C("p",null,"相機／設備座標："+ye(b(m.value.cameraPosition.x))+", "+ye(b(m.value.cameraPosition.y))+", "+ye(b(m.value.cameraPosition.z))+" m",1),C("p",null,"螺絲相機座標："+ye(b((ut=m.value.screwCameraPosition)==null?void 0:ut.x))+", "+ye(b((pt=m.value.screwCameraPosition)==null?void 0:pt.y))+", "+ye(b((Rt=m.value.screwCameraPosition)==null?void 0:Rt.z))+" m",1),C("p",null,"原始絕對座標："+ye(b((mt=m.value.rawAbsolutePosition)==null?void 0:mt.x))+", "+ye(b((Wt=m.value.rawAbsolutePosition)==null?void 0:Wt.y))+", "+ye(b((Nt=m.value.rawAbsolutePosition)==null?void 0:Nt.z))+" m",1),C("p",q1,ye(m.value.screwFusionLabel||"螺絲融合")+"結果："+ye(b((In=m.value.absolutePosition)==null?void 0:In.x))+", "+ye(b((vs=m.value.absolutePosition)==null?void 0:vs.y))+", "+ye(b((qi=m.value.absolutePosition)==null?void 0:qi.z))+" m",1),m.value.screwLocalization?(Me(),be("small",$1,"觀測 "+ye(m.value.screwLocalization.observationCount)+" 幀｜創新量 "+ye(b(m.value.screwLocalization.innovation))+" m｜1σ "+ye(b((xs=m.value.screwLocalization.uncertainty)==null?void 0:xs.x))+", "+ye(b((Or=m.value.screwLocalization.uncertainty)==null?void 0:Or.y))+", "+ye(b((ys=m.value.screwLocalization.uncertainty)==null?void 0:ys.z))+" m",1)):(Me(),be("small",Y1))],64)):(Me(),be("p",K1,"尚未偵測到螺絲；選擇的演算法會在下一筆螺絲觀測到達後套用。"))])):jt("",!0)])])),m.value?(Me(),be("section",Z1,[C("div",J1,[ee[21]||(ee[21]=C("div",{class:"scene-heading"},[C("div",null,[C("h3",null,"操作空間建模")]),C("span",null,"拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標")],-1)),C("p",{class:Fn(["nearby-screw-alert",{inactive:!((Fr=m.value.workspace)!=null&&Fr.notification)}])},ye((Br=m.value.workspace)!=null&&Br.notification?`提示：${m.value.workspace.notification}`:"附近目前沒有螺絲。"),3),C("div",{ref_key:"sceneContainer",ref:ie,class:"three-scene"},[C("div",{ref_key:"sceneTooltip",ref:re,class:"three-tooltip"},null,512)],512),ee[22]||(ee[22]=C("div",{class:"scene-legend"},[C("span",null,[C("i",{class:"legend-anchor"}),bt("基地站")]),C("span",null,[C("i",{class:"legend-device"}),bt("設備／攝影機光錐")]),C("span",null,[C("i",{class:"legend-screw"}),bt("M4（藍）／M6（紫）；金色為可辨識")])],-1))]),C("aside",j1,[ee[33]||(ee[33]=C("h3",null,"UWB + IMU 融合資料",-1)),C("div",Q1,[ee[23]||(ee[23]=C("strong",null,"融合輸出設備位置",-1)),C("span",null,"X "+ye(b(m.value.telemetry.position.x))+"　Y "+ye(b(m.value.telemetry.position.y))+"　Z "+ye(b(m.value.telemetry.position.z))+" m",1)]),C("div",eC,[C("div",null,[ee[24]||(ee[24]=C("h4",null,"UWB：8 個基地站距離（m）",-1)),C("div",tC,[(Me(!0),be(Et,null,ti(m.value.telemetry.uwbRanges||[],Ee=>(Me(),be("span",{key:Ee.stationId},"站 "+ye(Ee.stationId+1)+"："+ye(b(Ee.distance)),1))),128))])]),C("div",nC,[ee[25]||(ee[25]=C("h4",null,"IMU 即時量測",-1)),C("p",null,"加速度："+ye(b((Uo=(No=m.value.telemetry.imu)==null?void 0:No.acceleration)==null?void 0:Uo.x))+", "+ye(b((Fo=(Oo=m.value.telemetry.imu)==null?void 0:Oo.acceleration)==null?void 0:Fo.y))+", "+ye(b((H=(S=m.value.telemetry.imu)==null?void 0:S.acceleration)==null?void 0:H.z))+" m/s²",1),C("p",null,"角速度："+ye(b((J=(ne=m.value.telemetry.imu)==null?void 0:ne.gyroscope)==null?void 0:J.x))+", "+ye(b((Oe=(j=m.value.telemetry.imu)==null?void 0:j.gyroscope)==null?void 0:Oe.y))+", "+ye(b((Ue=(He=m.value.telemetry.imu)==null?void 0:He.gyroscope)==null?void 0:Ue.z))+" °/s",1),C("p",null,"姿態：Roll "+ye(b(m.value.telemetry.orientation.roll))+"°、Pitch "+ye(b(m.value.telemetry.orientation.pitch))+"°、Yaw "+ye(b(m.value.telemetry.orientation.yaw))+"°",1)])]),r.value==="live"?(Me(),be("label",iC,[ee[27]||(ee[27]=bt("UWB + IMU 融合演算法",-1)),Jt(C("select",{"onUpdate:modelValue":ee[10]||(ee[10]=Ee=>c.value=Ee),onChange:he},[...ee[26]||(ee[26]=[C("option",{value:"ekf"},"Error-State Extended Kalman Filter (ES-EKF)",-1),C("option",{value:"complementary"},"Complementary Filter",-1),C("option",{value:"weighted_average"},"Weighted Average",-1)])],544),[[Ho,c.value]])])):(Me(),be("div",sC,[ee[31]||(ee[31]=C("strong",null,"演算法路徑",-1)),C("label",rC,[Jt(C("input",{"onUpdate:modelValue":ee[11]||(ee[11]=Ee=>R.ekf=Ee),type:"checkbox",onChange:le},null,544),[[Vo,R.ekf]]),ee[28]||(ee[28]=C("span",null,"ES-EKF",-1))]),C("label",oC,[Jt(C("input",{"onUpdate:modelValue":ee[12]||(ee[12]=Ee=>R.complementary=Ee),type:"checkbox",onChange:le},null,544),[[Vo,R.complementary]]),ee[29]||(ee[29]=C("span",null,"互補濾波",-1))]),C("label",aC,[Jt(C("input",{"onUpdate:modelValue":ee[13]||(ee[13]=Ee=>R.weighted_average=Ee),type:"checkbox",onChange:le},null,544),[[Vo,R.weighted_average]]),ee[30]||(ee[30]=C("span",null,"加權平均",-1))])])),ln(Ke,{class:"calibration-link",to:"/settings/camera-extrinsics"},{default:Ia(()=>[...ee[32]||(ee[32]=[bt("設定 RGB-D 相機外參 →",-1)])]),_:1})])])):jt("",!0),y.value?(Me(),be("p",lC,ye(y.value),1)):jt("",!0),E.value?(Me(),be("p",cC,ye(E.value),1)):jt("",!0)])}}},fC={},dC={class:"page-card"};function hC(t,e){return Me(),be("section",dC,[...e[0]||(e[0]=[ju('<div class="section-title"><p class="eyebrow">Media</p><h2>語音提示查詢</h2></div><article class="panel"><h3>提示內容</h3><div class="list-card"><div class="item-row"><span>提示 1</span><strong>請保持安全距離</strong></div><div class="item-row"><span>提示 2</span><strong>區域偵測已完成</strong></div><div class="item-row"><span>提示 3</span><strong>即將開始下一段任務</strong></div></div></article>',2)])])}const pC=xl(fC,[["render",hC]]),mC={class:"page-card calibration-page"},gC={class:"panel calibration-panel"},_C={key:0,class:"placeholder"},vC={class:"extrinsics-grid"},xC=["onUpdate:modelValue"],yC={class:"matrix-card"},SC={key:0,class:"calibration-saved"},MC={key:1,class:"success"},bC={key:2,class:"alert"},EC={class:"calibration-actions"},TC=["disabled"],AC=["disabled"],wC={__name:"CameraCalibrationPage",setup(t){const e=qe(!0),n=qe(!1),i=qe(""),s=qe(""),r=qe(""),o=ms({translation:{x:0,y:0,z:0},rotationDegrees:{x:0,y:0,z:0}}),a=g=>Number(g||0)*Math.PI/180,l=_t(()=>{const g=a(o.rotationDegrees.x),v=a(o.rotationDegrees.y),m=a(o.rotationDegrees.z),[h,M]=[Math.cos(g),Math.sin(g)],[E,y]=[Math.cos(v),Math.sin(v)],[A,T]=[Math.cos(m),Math.sin(m)];return[[A*E,A*y*M-T*h,A*y*h+T*M],[T*E,T*y*M+A*h,T*y*h-A*M],[-y,E*M,E*h]]}),c=_t(()=>l.value.map(g=>g.map(v=>v.toFixed(6)).join("   ")).join(`
`)),u=g=>{var v,m;for(const h of["x","y","z"])o.translation[h]=((v=g.translation)==null?void 0:v[h])??0,o.rotationDegrees[h]=((m=g.rotationDegrees)==null?void 0:m[h])??0;r.value=g.updatedAt?new Date(g.updatedAt).toLocaleString("zh-TW"):""},f=async()=>{var g,v;e.value=!0,s.value="";try{u((await Ht.get("/calibration/camera-extrinsics")).data)}catch(m){s.value=((v=(g=m.response)==null?void 0:g.data)==null?void 0:v.error)||"無法讀取相機外參設定。"}finally{e.value=!1}},d=async()=>{var g,v;n.value=!0,s.value="",i.value="";try{const m=(await Ht.put("/calibration/camera-extrinsics",{translation:{...o.translation},rotationDegrees:{...o.rotationDegrees}})).data;u(m),i.value="相機外參已儲存，後端與 AI 可透過校正 API 讀取此設定。"}catch(m){s.value=((v=(g=m.response)==null?void 0:g.data)==null?void 0:v.error)||"儲存相機外參失敗。"}finally{n.value=!1}},p=()=>{u({translation:{x:0,y:0,z:0},rotationDegrees:{x:0,y:0,z:0}}),i.value="",s.value=""};return gs(f),(g,v)=>(Me(),be("section",mC,[v[10]||(v[10]=ju('<div class="section-title"><p class="eyebrow">Calibration</p><h2>相機外參校正</h2><p class="calibration-lead">設定深度相機座標系 C 轉換至設備／IMU 座標系 B 的固定外參：<code>p<sup>B</sup> = R<sub>C</sub><sup>B</sup> p<sup>C</sup> + t<sub>C</sub><sup>B</sup></code>。</p></div>',1)),C("article",gC,[e.value?(Me(),be("p",_C,"正在載入校正設定…")):(Me(),be(Et,{key:1},[v[9]||(v[9]=C("div",{class:"calibration-reference"},[C("div",null,[C("strong",null,"設備／IMU 座標 B"),C("span",null,"X：設備前方　Y：左方　Z：上方")]),C("div",null,[C("strong",null,"RGB-D 相機座標 C"),C("span",null,"X：影像右方　Y：影像下方　Z：鏡頭前方")])],-1)),C("div",vC,[C("fieldset",null,[v[3]||(v[3]=C("legend",null,[bt("平移 t"),C("sub",null,"C"),C("sup",null,"B"),bt("（公尺）")],-1)),(Me(),be(Et,null,ti(["x","y","z"],m=>C("label",{key:`translation-${m}`},[bt(ye(m.toUpperCase())+" ",1),Jt(C("input",{"onUpdate:modelValue":h=>o.translation[m]=h,type:"number",step:"0.001","aria-label":"translation axis"},null,8,xC),[[Jn,o.translation[m],void 0,{number:!0}]])])),64))]),C("fieldset",null,[v[7]||(v[7]=C("legend",null,[bt("旋轉 R"),C("sub",null,"C"),C("sup",null,"B"),bt("（Euler 角，度）")],-1)),C("label",null,[v[4]||(v[4]=bt("Roll（繞 X 軸）",-1)),Jt(C("input",{"onUpdate:modelValue":v[0]||(v[0]=m=>o.rotationDegrees.x=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[Jn,o.rotationDegrees.x,void 0,{number:!0}]])]),C("label",null,[v[5]||(v[5]=bt("Pitch（繞 Y 軸）",-1)),Jt(C("input",{"onUpdate:modelValue":v[1]||(v[1]=m=>o.rotationDegrees.y=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[Jn,o.rotationDegrees.y,void 0,{number:!0}]])]),C("label",null,[v[6]||(v[6]=bt("Yaw（繞 Z 軸）",-1)),Jt(C("input",{"onUpdate:modelValue":v[2]||(v[2]=m=>o.rotationDegrees.z=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[Jn,o.rotationDegrees.z,void 0,{number:!0}]])])])]),C("div",yC,[v[8]||(v[8]=C("div",null,[C("strong",null,[bt("計算後的旋轉矩陣 R"),C("sub",null,"C"),C("sup",null,"B")]),C("small",null,"採用 Z(Yaw) → Y(Pitch) → X(Roll) 的旋轉順序。")],-1)),C("pre",null,ye(c.value),1)]),r.value?(Me(),be("p",SC,"最後儲存："+ye(r.value),1)):jt("",!0),i.value?(Me(),be("p",MC,ye(i.value),1)):jt("",!0),s.value?(Me(),be("p",bC,ye(s.value),1)):jt("",!0),C("div",EC,[C("button",{type:"button",class:"secondary-button",disabled:n.value,onClick:p},"重設為零值",8,TC),C("button",{type:"button",disabled:n.value,onClick:d},ye(n.value?"儲存中…":"儲存外參設定"),9,AC)])],64))])]))}},RC=[{path:"/",name:"home",component:wS,meta:{requiresAuth:!0}},{path:"/account/login",name:"account-login",component:OS},{path:"/account/profile",name:"account-profile",component:eM,meta:{requiresAuth:!0}},{path:"/account/password",name:"account-password",component:sM,meta:{requiresAuth:!0}},{path:"/guide",name:"guide",component:lM},{path:"/technology",name:"technology",component:dM},{path:"/history/object",name:"history-object",component:vM,meta:{requiresAuth:!0}},{path:"/history/tasks",name:"history-tasks",component:EM,meta:{requiresAuth:!0}},{path:"/history/operations",name:"history-operations",component:PM,meta:{requiresAuth:!0}},{path:"/media/stream",name:"media-stream",component:uC,meta:{requiresAuth:!0}},{path:"/media/voice",name:"media-voice",component:pC,meta:{requiresAuth:!0}},{path:"/settings/camera-extrinsics",name:"camera-extrinsics",component:wC,meta:{requiresAuth:!0}}],Cg=sx({history:Bv(),routes:RC});Cg.beforeEach(t=>{if(t.meta.requiresAuth&&!ka.value)return{name:"account-login",query:{redirect:t.fullPath}};if(t.name==="account-login"&&ka.value)return{path:"/"}});j0(gx).use(Cg).mount("#app");
