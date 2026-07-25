(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ou(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Lt={},ar=[],mi=()=>{},Qh=()=>!1,el=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tl=t=>t.startsWith("onUpdate:"),on=Object.assign,Fu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pg=Object.prototype.hasOwnProperty,Mt=(t,e)=>Pg.call(t,e),et=Array.isArray,lr=t=>Eo(t)==="[object Map]",wr=t=>Eo(t)==="[object Set]",Lf=t=>Eo(t)==="[object Date]",at=t=>typeof t=="function",zt=t=>typeof t=="string",xi=t=>typeof t=="symbol",wt=t=>t!==null&&typeof t=="object",ep=t=>(wt(t)||at(t))&&at(t.then)&&at(t.catch),tp=Object.prototype.toString,Eo=t=>tp.call(t),Dg=t=>Eo(t).slice(8,-1),np=t=>Eo(t)==="[object Object]",Bu=t=>zt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=Ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lg=/-\w/g,yn=nl(t=>t.replace(Lg,e=>e.slice(1).toUpperCase())),Ig=/\B([A-Z])/g,fs=nl(t=>t.replace(Ig,"-$1").toLowerCase()),il=nl(t=>t.charAt(0).toUpperCase()+t.slice(1)),El=nl(t=>t?`on${il(t)}`:""),di=(t,e)=>!Object.is(t,e),ma=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ip=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},sl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let If;const rl=()=>If||(If=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uo(t){if(et(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=zt(i)?Fg(i):uo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(zt(t)||wt(t))return t}const Ng=/;(?![^(]*\))/g,Ug=/:([^]+)/,Og=/\/\*[^]*?\*\//g;function Fg(t){const e={};return t.replace(Og,"").split(Ng).forEach(n=>{if(n){const i=n.split(Ug);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function In(t){let e="";if(zt(t))e=t;else if(et(t))for(let n=0;n<t.length;n++){const i=In(t[n]);i&&(e+=i+" ")}else if(wt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zg=Ou(Bg);function sp(t){return!!t||t===""}function kg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Rr(t[i],e[i]);return n}function Rr(t,e){if(t===e)return!0;let n=Lf(t),i=Lf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=xi(t),i=xi(e),n||i)return t===e;if(n=et(t),i=et(e),n||i)return n&&i?kg(t,e):!1;if(n=wt(t),i=wt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Rr(t[o],e[o]))return!1}}return String(t)===String(e)}function zu(t,e){return t.findIndex(n=>Rr(n,e))}const rp=t=>!!(t&&t.__v_isRef===!0),we=t=>zt(t)?t:t==null?"":et(t)||wt(t)&&(t.toString===tp||!at(t.toString))?rp(t)?we(t.value):JSON.stringify(t,op,2):String(t),op=(t,e)=>rp(e)?op(t,e.value):lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Tl(i,r)+" =>"]=s,n),{})}:wr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tl(n))}:xi(e)?Tl(e):wt(e)&&!et(e)&&!np(e)?String(e):e,Tl=(t,e="")=>{var n;return xi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tn;class Hg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&tn&&(tn.active?(this.parent=tn,this.index=(tn.scopes||(tn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=tn;try{return tn=this,e()}finally{tn=n}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){if(this._on>0&&--this._on===0){if(tn===this)tn=this.prevScope;else{let e=tn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Vg(){return tn}let Nt;const Al=new WeakSet;class ap{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&(tn.active?tn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Al.has(this)&&(Al.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nf(this),up(this);const e=Nt,n=Kn;Nt=this,Kn=!0;try{return this.fn()}finally{fp(this),Nt=e,Kn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vu(e);this.deps=this.depsTail=void 0,Nf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Al.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ec(this)&&this.run()}get dirty(){return Ec(this)}}let lp=0,io,so;function cp(t,e=!1){if(t.flags|=8,e){t.next=so,so=t;return}t.next=io,io=t}function ku(){lp++}function Hu(){if(--lp>0)return;if(so){let e=so;for(so=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;io;){let e=io;for(io=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Vu(i),Gg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Ec(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===fo)||(t.globalVersion=fo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ec(t))))return;t.flags|=2;const e=t.dep,n=Nt,i=Kn;Nt=t,Kn=!0;try{up(t);const s=t.fn(t._value);(e.version===0||di(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Nt=n,Kn=i,fp(t),t.flags&=-3}}function Vu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Vu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Kn=!0;const hp=[];function Bi(){hp.push(Kn),Kn=!1}function zi(){const t=hp.pop();Kn=t===void 0?!0:t}function Nf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Nt;Nt=void 0;try{e()}finally{Nt=n}}}let fo=0;class Wg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Nt||!Kn||Nt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Nt)n=this.activeLink=new Wg(Nt,this),Nt.deps?(n.prevDep=Nt.depsTail,Nt.depsTail.nextDep=n,Nt.depsTail=n):Nt.deps=Nt.depsTail=n,pp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Nt.depsTail,n.nextDep=void 0,Nt.depsTail.nextDep=n,Nt.depsTail=n,Nt.deps===n&&(Nt.deps=i)}return n}trigger(e){this.version++,fo++,this.notify(e)}notify(e){ku();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Hu()}}}function pp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tc=new WeakMap,Ps=Symbol(""),Ac=Symbol(""),ho=Symbol("");function fn(t,e,n){if(Kn&&Nt){let i=Tc.get(t);i||Tc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Gu),s.map=i,s.key=n),s.track()}}function Di(t,e,n,i,s,r){const o=Tc.get(t);if(!o){fo++;return}const a=l=>{l&&l.trigger()};if(ku(),e==="clear")o.forEach(a);else{const l=et(t),c=l&&Bu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ho||!xi(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ho)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ps)),lr(t)&&a(o.get(Ac)));break;case"delete":l||(a(o.get(Ps)),lr(t)&&a(o.get(Ac)));break;case"set":lr(t)&&a(o.get(Ps));break}}Hu()}function Vs(t){const e=St(t);return e===t?e:(fn(e,"iterate",ho),Hn(t)?e:e.map(jn))}function ol(t){return fn(t=St(t),"iterate",ho),t}function ci(t,e){return ki(t)?mr(Ds(t)?jn(e):e):jn(e)}const Xg={__proto__:null,[Symbol.iterator](){return wl(this,Symbol.iterator,t=>ci(this,t))},concat(...t){return Vs(this).concat(...t.map(e=>et(e)?Vs(e):e))},entries(){return wl(this,"entries",t=>(t[1]=ci(this,t[1]),t))},every(t,e){return Mi(this,"every",t,e,void 0,arguments)},filter(t,e){return Mi(this,"filter",t,e,n=>n.map(i=>ci(this,i)),arguments)},find(t,e){return Mi(this,"find",t,e,n=>ci(this,n),arguments)},findIndex(t,e){return Mi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mi(this,"findLast",t,e,n=>ci(this,n),arguments)},findLastIndex(t,e){return Mi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mi(this,"forEach",t,e,void 0,arguments)},includes(...t){return Rl(this,"includes",t)},indexOf(...t){return Rl(this,"indexOf",t)},join(t){return Vs(this).join(t)},lastIndexOf(...t){return Rl(this,"lastIndexOf",t)},map(t,e){return Mi(this,"map",t,e,void 0,arguments)},pop(){return zr(this,"pop")},push(...t){return zr(this,"push",t)},reduce(t,...e){return Uf(this,"reduce",t,e)},reduceRight(t,...e){return Uf(this,"reduceRight",t,e)},shift(){return zr(this,"shift")},some(t,e){return Mi(this,"some",t,e,void 0,arguments)},splice(...t){return zr(this,"splice",t)},toReversed(){return Vs(this).toReversed()},toSorted(t){return Vs(this).toSorted(t)},toSpliced(...t){return Vs(this).toSpliced(...t)},unshift(...t){return zr(this,"unshift",t)},values(){return wl(this,"values",t=>ci(this,t))}};function wl(t,e,n){const i=ol(t),s=i[e]();return i!==t&&!Hn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const qg=Array.prototype;function Mi(t,e,n,i,s,r){const o=ol(t),a=o!==t&&!Hn(t),l=o[e];if(l!==qg[e]){const f=l.apply(t,r);return a?jn(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,ci(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Uf(t,e,n,i){const s=ol(t),r=s!==t&&!Hn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=ci(t,c)),n.call(this,c,ci(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?ci(t,l):l}function Rl(t,e,n){const i=St(t);fn(i,"iterate",ho);const s=i[e](...n);return(s===-1||s===!1)&&qu(n[0])?(n[0]=St(n[0]),i[e](...n)):s}function zr(t,e,n=[]){Bi(),ku();const i=St(t)[e].apply(t,n);return Hu(),zi(),i}const $g=Ou("__proto__,__v_isRef,__isVue"),mp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xi));function Yg(t){xi(t)||(t=String(t));const e=St(this);return fn(e,"has",t),e.hasOwnProperty(t)}class gp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?s_:yp:r?xp:vp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=et(e);if(!s){let l;if(o&&(l=Xg[n]))return l;if(n==="hasOwnProperty")return Yg}const a=Reflect.get(e,n,pn(e)?e:i);if((xi(n)?mp.has(n):$g(n))||(s||fn(e,"get",n),r))return a;if(pn(a)){const l=o&&Bu(n)?a:a.value;return s&&wt(l)?Rc(l):l}return wt(a)?s?Rc(a):ds(a):a}}class _p extends gp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=et(e)&&Bu(n);if(!this._isShallow){const c=ki(r);if(!Hn(i)&&!ki(i)&&(r=St(r),i=St(i)),!o&&pn(r)&&!pn(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:Mt(e,n),l=Reflect.set(e,n,i,pn(e)?e:s);return e===St(s)&&l&&(a?di(i,r)&&Di(e,"set",n,i):Di(e,"add",n,i)),l}deleteProperty(e,n){const i=Mt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Di(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!xi(n)||!mp.has(n))&&fn(e,"has",n),i}ownKeys(e){return fn(e,"iterate",et(e)?"length":Ps),Reflect.ownKeys(e)}}class Kg extends gp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Zg=new _p,Jg=new Kg,jg=new _p(!0);const wc=t=>t,Bo=t=>Reflect.getPrototypeOf(t);function Qg(t,e,n){return function(...i){const s=this.__v_raw,r=St(s),o=lr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?wc:e?mr:jn;return!e&&fn(r,"iterate",l?Ac:Ps),on(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function zo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function e_(t,e){const n={get(s){const r=this.__v_raw,o=St(r),a=St(s);t||(di(s,a)&&fn(o,"get",s),fn(o,"get",a));const{has:l}=Bo(o),c=e?wc:t?mr:jn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&fn(St(s),"iterate",Ps),s.size},has(s){const r=this.__v_raw,o=St(r),a=St(s);return t||(di(s,a)&&fn(o,"has",s),fn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=St(a),c=e?wc:t?mr:jn;return!t&&fn(l,"iterate",Ps),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return on(n,t?{add:zo("add"),set:zo("set"),delete:zo("delete"),clear:zo("clear")}:{add(s){const r=St(this),o=Bo(r),a=St(s),l=!e&&!Hn(s)&&!ki(s)?a:s;return o.has.call(r,l)||di(s,l)&&o.has.call(r,s)||di(a,l)&&o.has.call(r,a)||(r.add(l),Di(r,"add",l,l)),this},set(s,r){!e&&!Hn(r)&&!ki(r)&&(r=St(r));const o=St(this),{has:a,get:l}=Bo(o);let c=a.call(o,s);c||(s=St(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?di(r,u)&&Di(o,"set",s,r):Di(o,"add",s,r),this},delete(s){const r=St(this),{has:o,get:a}=Bo(r);let l=o.call(r,s);l||(s=St(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Di(r,"delete",s,void 0),c},clear(){const s=St(this),r=s.size!==0,o=s.clear();return r&&Di(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Qg(s,t,e)}),n}function Wu(t,e){const n=e_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Mt(n,s)&&s in i?n:i,s,r)}const t_={get:Wu(!1,!1)},n_={get:Wu(!1,!0)},i_={get:Wu(!0,!1)};const vp=new WeakMap,xp=new WeakMap,yp=new WeakMap,s_=new WeakMap;function r_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ds(t){return ki(t)?t:Xu(t,!1,Zg,t_,vp)}function Sp(t){return Xu(t,!1,jg,n_,xp)}function Rc(t){return Xu(t,!0,Jg,i_,yp)}function Xu(t,e,n,i,s){if(!wt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=r_(Dg(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Ds(t){return ki(t)?Ds(t.__v_raw):!!(t&&t.__v_isReactive)}function ki(t){return!!(t&&t.__v_isReadonly)}function Hn(t){return!!(t&&t.__v_isShallow)}function qu(t){return t?!!t.__v_raw:!1}function St(t){const e=t&&t.__v_raw;return e?St(e):t}function o_(t){return!Mt(t,"__v_skip")&&Object.isExtensible(t)&&ip(t,"__v_skip",!0),t}const jn=t=>wt(t)?ds(t):t,mr=t=>wt(t)?Rc(t):t;function pn(t){return t?t.__v_isRef===!0:!1}function $e(t){return Mp(t,!1)}function a_(t){return Mp(t,!0)}function Mp(t,e){return pn(t)?t:new l_(t,e)}class l_{constructor(e,n){this.dep=new Gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:St(e),this._value=n?e:jn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Hn(e)||ki(e);e=i?e:St(e),di(e,n)&&(this._rawValue=e,this._value=i?e:jn(e),this.dep.trigger())}}function wn(t){return pn(t)?t.value:t}const c_={get:(t,e,n)=>e==="__v_raw"?t:wn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return pn(s)&&!pn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function bp(t){return Ds(t)?t:new Proxy(t,c_)}class u_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Nt!==this)return cp(this,!0),!0}get value(){const e=this.dep.track();return dp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function f_(t,e,n=!1){let i,s;return at(t)?i=t:(i=t.get,s=t.set),new u_(i,s,n)}const ko={},Ca=new WeakMap;let bs;function d_(t,e=!1,n=bs){if(n){let i=Ca.get(n);i||Ca.set(n,i=[]),i.push(t)}}function h_(t,e,n=Lt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=y=>s?y:Hn(y)||s===!1||s===0?Li(y,1):Li(y);let u,f,d,h,g=!1,_=!1;if(pn(t)?(f=()=>t.value,g=Hn(t)):Ds(t)?(f=()=>c(t),g=!0):et(t)?(_=!0,g=t.some(y=>Ds(y)||Hn(y)),f=()=>t.map(y=>{if(pn(y))return y.value;if(Ds(y))return c(y);if(at(y))return l?l(y,2):y()})):at(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Bi();try{d()}finally{zi()}}const y=bs;bs=u;try{return l?l(t,3,[h]):t(h)}finally{bs=y}}:f=mi,e&&s){const y=f,A=s===!0?1/0:s;f=()=>Li(y(),A)}const m=Vg(),p=()=>{u.stop(),m&&m.active&&Fu(m.effects,u)};if(r&&e){const y=e;e=(...A)=>{const T=y(...A);return p(),T}}let M=_?new Array(t.length).fill(ko):ko;const b=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(y||s||g||(_?A.some((T,L)=>di(T,M[L])):di(A,M))){d&&d();const T=bs;bs=u;try{const L=[A,M===ko?void 0:_&&M[0]===ko?[]:M,h];M=A,l?l(e,3,L):e(...L)}finally{bs=T}}}else u.run()};return a&&a(b),u=new ap(f),u.scheduler=o?()=>o(b,!1):b,h=y=>d_(y,!1,u),d=u.onStop=()=>{const y=Ca.get(u);if(y){if(l)l(y,4);else for(const A of y)A();Ca.delete(u)}},e?i?b(!0):M=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Li(t,e=1/0,n){if(e<=0||!wt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,pn(t))Li(t.value,e,n);else if(et(t))for(let i=0;i<t.length;i++)Li(t[i],e,n);else if(wr(t)||lr(t))t.forEach(i=>{Li(i,e,n)});else if(np(t)){for(const i in t)Li(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Li(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function To(t,e,n,i){try{return i?t(...i):t()}catch(s){al(s,e,n)}}function Qn(t,e,n,i){if(at(t)){const s=To(t,e,n,i);return s&&ep(s)&&s.catch(r=>{al(r,e,n)}),s}if(et(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Qn(t[r],e,n,i));return s}}function al(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Lt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Bi(),To(r,null,10,[t,l,c]),zi();return}}p_(t,n,s,i,o)}function p_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const xn=[];let li=-1;const cr=[];let es=null,sr=0;const Ep=Promise.resolve();let Pa=null;function ll(t){const e=Pa||Ep;return t?e.then(this?t.bind(this):t):e}function m_(t){let e=li+1,n=xn.length;for(;e<n;){const i=e+n>>>1,s=xn[i],r=po(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function $u(t){if(!(t.flags&1)){const e=po(t),n=xn[xn.length-1];!n||!(t.flags&2)&&e>=po(n)?xn.push(t):xn.splice(m_(e),0,t),t.flags|=1,Tp()}}function Tp(){Pa||(Pa=Ep.then(wp))}function g_(t){et(t)?cr.push(...t):es&&t.id===-1?es.splice(sr+1,0,t):t.flags&1||(cr.push(t),t.flags|=1),Tp()}function Of(t,e,n=li+1){for(;n<xn.length;n++){const i=xn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;xn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ap(t){if(cr.length){const e=[...new Set(cr)].sort((n,i)=>po(n)-po(i));if(cr.length=0,es){es.push(...e);return}for(es=e,sr=0;sr<es.length;sr++){const n=es[sr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}es=null,sr=0}}const po=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wp(t){try{for(li=0;li<xn.length;li++){const e=xn[li];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),To(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;li<xn.length;li++){const e=xn[li];e&&(e.flags&=-2)}li=-1,xn.length=0,Ap(),Pa=null,(xn.length||cr.length)&&wp()}}let Un=null,Rp=null;function Da(t){const e=Un;return Un=t,Rp=t&&t.type.__scopeId||null,e}function La(t,e=Un,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Ua(-1);const r=Da(e),o=Ls.length;let a;try{a=t(...s)}finally{for(let l=Ls.length;l>o;l--)jp();Da(r),i._d&&Ua(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Qt(t,e){if(Un===null)return t;const n=dl(Un),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Lt]=e[s];r&&(at(r)&&(r={mounted:r,updated:r}),r.deep&&Li(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function _s(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Bi(),Qn(l,n,8,[t.el,a,t,e]),zi())}}function ga(t,e){if(dn){let n=dn.provides;const i=dn.parent&&dn.parent.provides;i===n&&(n=dn.provides=Object.create(i)),n[t]=e}}function Zn(t,e,n=!1){const i=m0();if(i||ur){let s=ur?ur._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&at(e)?e.call(i&&i.proxy):e}}const __=Symbol.for("v-scx"),v_=()=>Zn(__);function Ii(t,e,n){return Cp(t,e,n)}function Cp(t,e,n=Lt){const{immediate:i,deep:s,flush:r,once:o}=n,a=on({},n),l=e&&i||!e&&r!=="post";let c;if(go){if(r==="sync"){const h=v_();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=mi,h.resume=mi,h.pause=mi,h}}const u=dn;a.call=(h,g,_)=>Qn(h,u,g,_);let f=!1;r==="post"?a.scheduler=h=>{An(h,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():$u(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=h_(t,e,a);return go&&(c?c.push(d):l&&d()),d}function x_(t,e,n){const i=this.proxy,s=zt(t)?t.includes(".")?Pp(i,t):()=>i[t]:t.bind(i,i);let r;at(e)?r=e:(r=e.handler,n=e);const o=Ao(this),a=Cp(s,r.bind(i),n);return o(),a}function Pp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const y_=Symbol("_vte"),S_=t=>t.__isTeleport,Cl=Symbol("_leaveCb");function Yu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Yu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dp(t,e){return at(t)?on({name:t.name},e,{setup:t}):t}function Lp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ff(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ia=new WeakMap;function ro(t,e,n,i,s=!1){if(et(t)){t.forEach((_,m)=>ro(_,e&&(et(e)?e[m]:e),n,i,s));return}if(oo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ro(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?dl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Lt?a.refs={}:a.refs,f=a.setupState,d=St(f),h=f===Lt?Qh:_=>Ff(u,_)?!1:Mt(d,_),g=(_,m)=>!(m&&Ff(u,m));if(c!=null&&c!==l){if(Bf(e),zt(c))u[c]=null,h(c)&&(f[c]=null);else if(pn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(at(l))To(l,a,12,[o,u]);else{const _=zt(l),m=pn(l);if(_||m){const p=()=>{if(t.f){const M=_?h(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)et(M)&&Fu(M,r);else if(et(M))M.includes(r)||M.push(r);else if(_)u[l]=[r],h(l)&&(f[l]=u[l]);else{const b=[r];g(l,t.k)&&(l.value=b),t.k&&(u[t.k]=b)}}else _?(u[l]=o,h(l)&&(f[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const M=()=>{p(),Ia.delete(t)};M.id=-1,Ia.set(t,M),An(M,n)}else Bf(t),p()}}}function Bf(t){const e=Ia.get(t);e&&(e.flags|=8,Ia.delete(t))}rl().requestIdleCallback;rl().cancelIdleCallback;const oo=t=>!!t.type.__asyncLoader,Ip=t=>t.type.__isKeepAlive;function M_(t,e){Np(t,"a",e)}function b_(t,e){Np(t,"da",e)}function Np(t,e,n=dn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(cl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ip(s.parent.vnode)&&E_(i,e,n,s),s=s.parent}}function E_(t,e,n,i){const s=cl(e,t,i,!0);Ku(()=>{Fu(i[e],s)},n)}function cl(t,e,n=dn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Bi();const a=Ao(n),l=Qn(e,n,t,o);return a(),zi(),l});return i?s.unshift(r):s.push(r),r}}const Gi=t=>(e,n=dn)=>{(!go||t==="sp")&&cl(t,(...i)=>e(...i),n)},T_=Gi("bm"),hs=Gi("m"),A_=Gi("bu"),w_=Gi("u"),R_=Gi("bum"),Ku=Gi("um"),C_=Gi("sp"),P_=Gi("rtg"),D_=Gi("rtc");function L_(t,e=dn){cl("ec",t,e)}const I_="components";function N_(t,e){return O_(I_,t,!0,e)||t}const U_=Symbol.for("v-ndc");function O_(t,e,n=!0,i=!1){const s=Un||dn;if(s){const r=s.type;{const a=y0(r,!1);if(a&&(a===e||a===yn(e)||a===il(yn(e))))return r}const o=zf(s[t]||r[t],e)||zf(s.appContext[t],e);return!o&&i?r:o}}function zf(t,e){return t&&(t[e]||t[yn(e)]||t[il(yn(e))])}function Jn(t,e,n,i){let s;const r=n,o=et(t);if(o||zt(t)){const a=o&&Ds(t);let l=!1,c=!1;a&&(l=!Hn(t),c=ki(t),t=ol(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?mr(jn(t[u])):jn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(wt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const Cc=t=>t?nm(t)?dl(t):Cc(t.parent):null,ao=on(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cc(t.parent),$root:t=>Cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Op(t),$forceUpdate:t=>t.f||(t.f=()=>{$u(t.update)}),$nextTick:t=>t.n||(t.n=ll.bind(t.proxy)),$watch:t=>x_.bind(t)}),Pl=(t,e)=>t!==Lt&&!t.__isScriptSetup&&Mt(t,e),F_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Pl(i,e))return o[e]=1,i[e];if(s!==Lt&&Mt(s,e))return o[e]=2,s[e];if(Mt(r,e))return o[e]=3,r[e];if(n!==Lt&&Mt(n,e))return o[e]=4,n[e];Pc&&(o[e]=0)}}const c=ao[e];let u,f;if(c)return e==="$attrs"&&fn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Lt&&Mt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Mt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Pl(s,e)?(s[e]=n,!0):i!==Lt&&Mt(i,e)?(i[e]=n,!0):Mt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Lt&&a[0]!=="$"&&Mt(t,a)||Pl(e,a)||Mt(r,a)||Mt(i,a)||Mt(ao,a)||Mt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Mt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kf(t){return et(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pc=!0;function B_(t){const e=Op(t),n=t.proxy,i=t.ctx;Pc=!1,e.beforeCreate&&Hf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:b,unmounted:y,render:A,renderTracked:T,renderTriggered:L,errorCaptured:x,serverPrefetch:R,expose:U,inheritAttrs:I,components:k,directives:ie,filters:oe}=e;if(c&&z_(c,i,null),o)for(const G in o){const Z=o[G];at(Z)&&(i[G]=Z.bind(n))}if(s){const G=s.call(n,n);wt(G)&&(t.data=ds(G))}if(Pc=!0,r)for(const G in r){const Z=r[G],he=at(Z)?Z.bind(n,n):at(Z.get)?Z.get.bind(n,n):mi,ye=!at(Z)&&at(Z.set)?Z.set.bind(n):mi,me=_t({get:he,set:ye});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>me.value,set:Me=>me.value=Me})}if(a)for(const G in a)Up(a[G],i,n,G);if(l){const G=at(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Z=>{ga(Z,G[Z])})}u&&Hf(u,t,"c");function te(G,Z){et(Z)?Z.forEach(he=>G(he.bind(n))):Z&&G(Z.bind(n))}if(te(T_,f),te(hs,d),te(A_,h),te(w_,g),te(M_,_),te(b_,m),te(L_,x),te(D_,T),te(P_,L),te(R_,M),te(Ku,y),te(C_,R),et(U))if(U.length){const G=t.exposed||(t.exposed={});U.forEach(Z=>{Object.defineProperty(G,Z,{get:()=>n[Z],set:he=>n[Z]=he,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===mi&&(t.render=A),I!=null&&(t.inheritAttrs=I),k&&(t.components=k),ie&&(t.directives=ie),R&&Lp(t)}function z_(t,e,n=mi){et(t)&&(t=Dc(t));for(const i in t){const s=t[i];let r;wt(s)?"default"in s?r=Zn(s.from||i,s.default,!0):r=Zn(s.from||i):r=Zn(s),pn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Hf(t,e,n){Qn(et(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Up(t,e,n,i){let s=i.includes(".")?Pp(n,i):()=>n[i];if(zt(t)){const r=e[t];at(r)&&Ii(s,r)}else if(at(t))Ii(s,t.bind(n));else if(wt(t))if(et(t))t.forEach(r=>Up(r,e,n,i));else{const r=at(t.handler)?t.handler.bind(n):e[t.handler];at(r)&&Ii(s,r,t)}}function Op(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Na(l,c,o,!0)),Na(l,e,o)),wt(e)&&r.set(e,l),l}function Na(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Na(t,r,n,!0),s&&s.forEach(o=>Na(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=k_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const k_={data:Vf,props:Gf,emits:Gf,methods:jr,computed:jr,beforeCreate:gn,created:gn,beforeMount:gn,mounted:gn,beforeUpdate:gn,updated:gn,beforeDestroy:gn,beforeUnmount:gn,destroyed:gn,unmounted:gn,activated:gn,deactivated:gn,errorCaptured:gn,serverPrefetch:gn,components:jr,directives:jr,watch:V_,provide:Vf,inject:H_};function Vf(t,e){return e?t?function(){return on(at(t)?t.call(this,this):t,at(e)?e.call(this,this):e)}:e:t}function H_(t,e){return jr(Dc(t),Dc(e))}function Dc(t){if(et(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gn(t,e){return t?[...new Set([].concat(t,e))]:e}function jr(t,e){return t?on(Object.create(null),t,e):e}function Gf(t,e){return t?et(t)&&et(e)?[...new Set([...t,...e])]:on(Object.create(null),kf(t),kf(e??{})):e}function V_(t,e){if(!t)return e;if(!e)return t;const n=on(Object.create(null),t);for(const i in e)n[i]=gn(t[i],e[i]);return n}function Fp(){return{app:null,config:{isNativeTag:Qh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let G_=0;function W_(t,e){return function(i,s=null){at(i)||(i=on({},i)),s!=null&&!wt(s)&&(s=null);const r=Fp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:G_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:M0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&at(u.install)?(o.add(u),u.install(c,...f)):at(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||sn(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,dl(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Qn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ur;ur=c;try{return u()}finally{ur=f}}};return c}}let ur=null;const X_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yn(e)}Modifiers`]||t[`${fs(e)}Modifiers`];function q_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Lt;let s=n;const r=e.startsWith("update:"),o=r&&X_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>zt(u)?u.trim():u)),o.number&&(s=n.map(sl)));let a,l=i[a=El(e)]||i[a=El(yn(e))];!l&&r&&(l=i[a=El(fs(e))]),l&&Qn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qn(c,t,6,s)}}const $_=new WeakMap;function Bp(t,e,n=!1){const i=n?$_:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!at(t)){const l=c=>{const u=Bp(c,e,!0);u&&(a=!0,on(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(wt(t)&&i.set(t,null),null):(et(r)?r.forEach(l=>o[l]=null):on(o,r),wt(t)&&i.set(t,o),o)}function ul(t,e){return!t||!el(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Mt(t,e[0].toLowerCase()+e.slice(1))||Mt(t,fs(e))||Mt(t,e))}function Wf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=t,m=Da(t);let p,M;try{if(n.shapeFlag&4){const y=s||i,A=y;p=ui(c.call(A,y,u,f,h,d,g)),M=a}else{const y=e;p=ui(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),M=e.props?a:Y_(a)}}catch(y){Ls.length=0,al(y,t,1),p=sn(as)}let b=p;if(M&&_!==!1){const y=Object.keys(M),{shapeFlag:A}=b;y.length&&A&7&&(r&&y.some(tl)&&(M=K_(M,r)),b=gr(b,M,!1,!0))}return n.dirs&&(b=gr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Yu(b,n.transition),p=b,Da(m),p}const Y_=t=>{let e;for(const n in t)(n==="class"||n==="style"||el(n))&&((e||(e={}))[n]=t[n]);return e},K_=(t,e)=>{const n={};for(const i in t)(!tl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Z_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Xf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(zp(o,i,d)&&!ul(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Xf(i,o,c):!0:!!o;return!1}function Xf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(zp(e,t,r)&&!ul(n,r))return!0}return!1}function zp(t,e,n){const i=t[n],s=e[n];return n==="style"&&wt(i)&&wt(s)?!Rr(i,s):i!==s}function J_({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const kp={},Hp=()=>Object.create(kp),Vp=t=>Object.getPrototypeOf(t)===kp;function j_(t,e,n,i=!1){const s={},r=Hp();t.propsDefaults=Object.create(null),Gp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Sp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Q_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=St(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ul(t.emitsOptions,d))continue;const h=e[d];if(l)if(Mt(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const g=yn(d);s[g]=Lc(l,a,g,h,t,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Gp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!Mt(e,f)&&((u=fs(f))===f||!Mt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Lc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Mt(e,f))&&(delete r[f],c=!0)}c&&Di(t.attrs,"set","")}function Gp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(no(l))continue;const c=e[l];let u;s&&Mt(s,u=yn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ul(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=St(n),c=a||Lt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Lc(s,l,f,c[f],t,!Mt(c,f))}}return o}function Lc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&at(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Ao(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===fs(n))&&(i=!0))}return i}const e0=new WeakMap;function Wp(t,e,n=!1){const i=n?e0:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!at(t)){const u=f=>{l=!0;const[d,h]=Wp(f,e,!0);on(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return wt(t)&&i.set(t,ar),ar;if(et(r))for(let u=0;u<r.length;u++){const f=yn(r[u]);qf(f)&&(o[f]=Lt)}else if(r)for(const u in r){const f=yn(u);if(qf(f)){const d=r[u],h=o[f]=et(d)||at(d)?{type:d}:on({},d),g=h.type;let _=!1,m=!0;if(et(g))for(let p=0;p<g.length;++p){const M=g[p],b=at(M)&&M.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=at(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||Mt(h,"default"))&&a.push(f)}}const c=[o,a];return wt(t)&&i.set(t,c),c}function qf(t){return t[0]!=="$"&&!no(t)}const Zu=t=>t==="_"||t==="_ctx"||t==="$stable",Ju=t=>et(t)?t.map(ui):[ui(t)],t0=(t,e,n)=>{if(e._n)return e;const i=La((...s)=>Ju(e(...s)),n);return i._c=!1,i},Xp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Zu(s))continue;const r=t[s];if(at(r))e[s]=t0(s,r,i);else if(r!=null){const o=Ju(r);e[s]=()=>o}}},qp=(t,e)=>{const n=Ju(e);t.slots.default=()=>n},$p=(t,e,n)=>{for(const i in e)(n||!Zu(i))&&(t[i]=e[i])},n0=(t,e,n)=>{const i=t.slots=Hp();if(t.vnode.shapeFlag&32){const s=e._;s?($p(i,e,n),n&&ip(i,"_",s,!0)):Xp(e,i)}else e&&qp(t,e)},i0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Lt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:$p(s,e,n):(r=!e.$stable,Xp(e,s)),o=e}else e&&(qp(t,e),o={default:1});if(r)for(const a in s)!Zu(a)&&o[a]==null&&delete s[a]},An=l0;function s0(t){return r0(t)}function r0(t,e){const n=rl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=mi,insertStaticContent:g}=t,_=(w,P,F,$=null,V=null,j=null,_e=void 0,le=null,ve=!!P.dynamicChildren)=>{if(w===P)return;w&&!kr(w,P)&&($=O(w),Me(w,V,j,!0),w=null),P.patchFlag===-2&&(ve=!1,P.dynamicChildren=null);const{type:ce,ref:Le,shapeFlag:D}=P;switch(ce){case fl:m(w,P,F,$);break;case as:p(w,P,F,$);break;case _a:w==null&&M(P,F,$,_e);break;case At:k(w,P,F,$,V,j,_e,le,ve);break;default:D&1?A(w,P,F,$,V,j,_e,le,ve):D&6?ie(w,P,F,$,V,j,_e,le,ve):(D&64||D&128)&&ce.process(w,P,F,$,V,j,_e,le,ve,xe)}Le!=null&&V?ro(Le,w&&w.ref,j,P||w,!P):Le==null&&w&&w.ref!=null&&ro(w.ref,null,j,w,!0)},m=(w,P,F,$)=>{if(w==null)i(P.el=a(P.children),F,$);else{const V=P.el=w.el;P.children!==w.children&&c(V,P.children)}},p=(w,P,F,$)=>{w==null?i(P.el=l(P.children||""),F,$):P.el=w.el},M=(w,P,F,$)=>{[w.el,w.anchor]=g(w.children,P,F,$,w.el,w.anchor)},b=({el:w,anchor:P},F,$)=>{let V;for(;w&&w!==P;)V=d(w),i(w,F,$),w=V;i(P,F,$)},y=({el:w,anchor:P})=>{let F;for(;w&&w!==P;)F=d(w),s(w),w=F;s(P)},A=(w,P,F,$,V,j,_e,le,ve)=>{if(P.type==="svg"?_e="svg":P.type==="math"&&(_e="mathml"),w==null)T(P,F,$,V,j,_e,le,ve);else{const ce=w.el&&w.el._isVueCE?w.el:null;try{ce&&ce._beginPatch(),R(w,P,V,j,_e,le,ve)}finally{ce&&ce._endPatch()}}},T=(w,P,F,$,V,j,_e,le)=>{let ve,ce;const{props:Le,shapeFlag:D,transition:ze,dirs:pe}=w;if(ve=w.el=o(w.type,j,Le&&Le.is,Le),D&8?u(ve,w.children):D&16&&x(w.children,ve,null,$,V,Dl(w,j),_e,le),pe&&_s(w,null,$,"created"),L(ve,w,w.scopeId,_e,$),Le){for(const v in Le)v!=="value"&&!no(v)&&r(ve,v,null,Le[v],j,$);"value"in Le&&r(ve,"value",null,Le.value,j),(ce=Le.onVnodeBeforeMount)&&ri(ce,$,w)}pe&&_s(w,null,$,"beforeMount");const E=o0(V,ze);E&&ze.beforeEnter(ve),i(ve,P,F),((ce=Le&&Le.onVnodeMounted)||E||pe)&&An(()=>{try{ce&&ri(ce,$,w),E&&ze.enter(ve),pe&&_s(w,null,$,"mounted")}finally{}},V)},L=(w,P,F,$,V)=>{if(F&&h(w,F),$)for(let j=0;j<$.length;j++)h(w,$[j]);if(V){let j=V.subTree;if(P===j||Jp(j.type)&&(j.ssContent===P||j.ssFallback===P)){const _e=V.vnode;L(w,_e,_e.scopeId,_e.slotScopeIds,V.parent)}}},x=(w,P,F,$,V,j,_e,le,ve=0)=>{for(let ce=ve;ce<w.length;ce++){const Le=w[ce]=le?Pi(w[ce]):ui(w[ce]);_(null,Le,P,F,$,V,j,_e,le)}},R=(w,P,F,$,V,j,_e)=>{const le=P.el=w.el;let{patchFlag:ve,dynamicChildren:ce,dirs:Le}=P;ve|=w.patchFlag&16;const D=w.props||Lt,ze=P.props||Lt;let pe;if(F&&vs(F,!1),(pe=ze.onVnodeBeforeUpdate)&&ri(pe,F,P,w),Le&&_s(P,w,F,"beforeUpdate"),F&&vs(F,!0),ce&&(!w.dynamicChildren||w.dynamicChildren.length!==ce.length)&&(ve=0,_e=!1,ce=null),(D.innerHTML&&ze.innerHTML==null||D.textContent&&ze.textContent==null)&&u(le,""),ce?U(w.dynamicChildren,ce,le,F,$,Dl(P,V),j):_e||Z(w,P,le,null,F,$,Dl(P,V),j,!1),ve>0){if(ve&16)I(le,D,ze,F,V);else if(ve&2&&D.class!==ze.class&&r(le,"class",null,ze.class,V),ve&4&&r(le,"style",D.style,ze.style,V),ve&8){const E=P.dynamicProps;for(let v=0;v<E.length;v++){const B=E[v],W=D[B],ne=ze[B];(ne!==W||B==="value")&&r(le,B,W,ne,V,F)}}ve&1&&w.children!==P.children&&u(le,P.children)}else!_e&&ce==null&&I(le,D,ze,F,V);((pe=ze.onVnodeUpdated)||Le)&&An(()=>{pe&&ri(pe,F,P,w),Le&&_s(P,w,F,"updated")},$)},U=(w,P,F,$,V,j,_e)=>{for(let le=0;le<P.length;le++){const ve=w[le],ce=P[le],Le=ve.el&&(ve.type===At||!kr(ve,ce)||ve.shapeFlag&198)?f(ve.el):F;_(ve,ce,Le,null,$,V,j,_e,!0)}},I=(w,P,F,$,V)=>{if(P!==F){if(P!==Lt)for(const j in P)!no(j)&&!(j in F)&&r(w,j,P[j],null,V,$);for(const j in F){if(no(j))continue;const _e=F[j],le=P[j];_e!==le&&j!=="value"&&r(w,j,le,_e,V,$)}"value"in F&&r(w,"value",P.value,F.value,V)}},k=(w,P,F,$,V,j,_e,le,ve)=>{const ce=P.el=w?w.el:a(""),Le=P.anchor=w?w.anchor:a("");let{patchFlag:D,dynamicChildren:ze,slotScopeIds:pe}=P;pe&&(le=le?le.concat(pe):pe),w==null?(i(ce,F,$),i(Le,F,$),x(P.children||[],F,Le,V,j,_e,le,ve)):D>0&&D&64&&ze&&w.dynamicChildren&&w.dynamicChildren.length===ze.length?(U(w.dynamicChildren,ze,F,V,j,_e,le),(P.key!=null||V&&P===V.subTree)&&Yp(w,P,!0)):Z(w,P,F,Le,V,j,_e,le,ve)},ie=(w,P,F,$,V,j,_e,le,ve)=>{P.slotScopeIds=le,w==null?P.shapeFlag&512?V.ctx.activate(P,F,$,_e,ve):oe(P,F,$,V,j,_e,ve):X(w,P,ve)},oe=(w,P,F,$,V,j,_e)=>{const le=w.component=p0(w,$,V);if(Ip(w)&&(le.ctx.renderer=xe),g0(le,!1,_e),le.asyncDep){if(V&&V.registerDep(le,te,_e),!w.el){const ve=le.subTree=sn(as);p(null,ve,P,F),w.placeholder=ve.el}}else te(le,w,P,F,V,j,_e)},X=(w,P,F)=>{const $=P.component=w.component;if(Z_(w,P,F))if($.asyncDep&&!$.asyncResolved){G($,P,F);return}else $.next=P,$.update();else P.el=w.el,$.vnode=P},te=(w,P,F,$,V,j,_e)=>{const le=()=>{if(w.isMounted){let{next:D,bu:ze,u:pe,parent:E,vnode:v}=w;{const Ae=Kp(w);if(Ae){D&&(D.el=v.el,G(w,D,_e)),Ae.asyncDep.then(()=>{An(()=>{w.isUnmounted||ce()},V)});return}}let B=D,W;vs(w,!1),D?(D.el=v.el,G(w,D,_e)):D=v,ze&&ma(ze),(W=D.props&&D.props.onVnodeBeforeUpdate)&&ri(W,E,D,v),vs(w,!0);const ne=Wf(w),Se=w.subTree;w.subTree=ne,_(Se,ne,f(Se.el),O(Se),w,V,j),D.el=ne.el,B===null&&J_(w,ne.el),pe&&An(pe,V),(W=D.props&&D.props.onVnodeUpdated)&&An(()=>ri(W,E,D,v),V)}else{let D;const{el:ze,props:pe}=P,{bm:E,m:v,parent:B,root:W,type:ne}=w,Se=oo(P);vs(w,!1),E&&ma(E),!Se&&(D=pe&&pe.onVnodeBeforeMount)&&ri(D,B,P),vs(w,!0);{W.ce&&W.ce._hasShadowRoot()&&W.ce._injectChildStyle(ne,w.parent?w.parent.type:void 0);const Ae=w.subTree=Wf(w);_(null,Ae,F,$,w,V,j),P.el=Ae.el}if(v&&An(v,V),!Se&&(D=pe&&pe.onVnodeMounted)){const Ae=P;An(()=>ri(D,B,Ae),V)}(P.shapeFlag&256||B&&oo(B.vnode)&&B.vnode.shapeFlag&256)&&w.a&&An(w.a,V),w.isMounted=!0,P=F=$=null}};w.scope.on();const ve=w.effect=new ap(le);w.scope.off();const ce=w.update=ve.run.bind(ve),Le=w.job=ve.runIfDirty.bind(ve);Le.i=w,Le.id=w.uid,ve.scheduler=()=>$u(Le),vs(w,!0),ce()},G=(w,P,F)=>{P.component=w;const $=w.vnode.props;w.vnode=P,w.next=null,Q_(w,P.props,$,F),i0(w,P.children,F),Bi(),Of(w),zi()},Z=(w,P,F,$,V,j,_e,le,ve=!1)=>{const ce=w&&w.children,Le=w?w.shapeFlag:0,D=P.children,{patchFlag:ze,shapeFlag:pe}=P;if(ze>0){if(ze&128){ye(ce,D,F,$,V,j,_e,le,ve);return}else if(ze&256){he(ce,D,F,$,V,j,_e,le,ve);return}}pe&8?(Le&16&&K(ce,V,j),D!==ce&&u(F,D)):Le&16?pe&16?ye(ce,D,F,$,V,j,_e,le,ve):K(ce,V,j,!0):(Le&8&&u(F,""),pe&16&&x(D,F,$,V,j,_e,le,ve))},he=(w,P,F,$,V,j,_e,le,ve)=>{w=w||ar,P=P||ar;const ce=w.length,Le=P.length,D=Math.min(ce,Le);let ze;for(ze=0;ze<D;ze++){const pe=P[ze]=ve?Pi(P[ze]):ui(P[ze]);_(w[ze],pe,F,null,V,j,_e,le,ve)}ce>Le?K(w,V,j,!0,!1,D):x(P,F,$,V,j,_e,le,ve,D)},ye=(w,P,F,$,V,j,_e,le,ve)=>{let ce=0;const Le=P.length;let D=w.length-1,ze=Le-1;for(;ce<=D&&ce<=ze;){const pe=w[ce],E=P[ce]=ve?Pi(P[ce]):ui(P[ce]);if(kr(pe,E))_(pe,E,F,null,V,j,_e,le,ve);else break;ce++}for(;ce<=D&&ce<=ze;){const pe=w[D],E=P[ze]=ve?Pi(P[ze]):ui(P[ze]);if(kr(pe,E))_(pe,E,F,null,V,j,_e,le,ve);else break;D--,ze--}if(ce>D){if(ce<=ze){const pe=ze+1,E=pe<Le?P[pe].el:$;for(;ce<=ze;)_(null,P[ce]=ve?Pi(P[ce]):ui(P[ce]),F,E,V,j,_e,le,ve),ce++}}else if(ce>ze)for(;ce<=D;)Me(w[ce],V,j,!0),ce++;else{const pe=ce,E=ce,v=new Map;for(ce=E;ce<=ze;ce++){const Ee=P[ce]=ve?Pi(P[ce]):ui(P[ce]);Ee.key!=null&&v.set(Ee.key,ce)}let B,W=0;const ne=ze-E+1;let Se=!1,Ae=0;const re=new Array(ne);for(ce=0;ce<ne;ce++)re[ce]=0;for(ce=pe;ce<=D;ce++){const Ee=w[ce];if(W>=ne){Me(Ee,V,j,!0);continue}let ke;if(Ee.key!=null)ke=v.get(Ee.key);else for(B=E;B<=ze;B++)if(re[B-E]===0&&kr(Ee,P[B])){ke=B;break}ke===void 0?Me(Ee,V,j,!0):(re[ke-E]=ce+1,ke>=Ae?Ae=ke:Se=!0,_(Ee,P[ke],F,null,V,j,_e,le,ve),W++)}const fe=Se?a0(re):ar;for(B=fe.length-1,ce=ne-1;ce>=0;ce--){const Ee=E+ce,ke=P[Ee],Pe=P[Ee+1],Ce=Ee+1<Le?Pe.el||Zp(Pe):$;re[ce]===0?_(null,ke,F,Ce,V,j,_e,le,ve):Se&&(B<0||ce!==fe[B]?me(ke,F,Ce,2):B--)}}},me=(w,P,F,$,V=null)=>{const{el:j,type:_e,transition:le,children:ve,shapeFlag:ce}=w;if(ce&6){me(w.component.subTree,P,F,$);return}if(ce&128){w.suspense.move(P,F,$);return}if(ce&64){_e.move(w,P,F,xe);return}if(_e===At){i(j,P,F);for(let D=0;D<ve.length;D++)me(ve[D],P,F,$);i(w.anchor,P,F);return}if(_e===_a){b(w,P,F);return}if($!==2&&ce&1&&le)if($===0)le.persisted&&!j[Cl]?i(j,P,F):(le.beforeEnter(j),i(j,P,F),An(()=>le.enter(j),V));else{const{leave:D,delayLeave:ze,afterLeave:pe}=le,E=()=>{w.ctx.isUnmounted?s(j):i(j,P,F)},v=()=>{const B=j._isLeaving||!!j[Cl];j._isLeaving&&j[Cl](!0),le.persisted&&!B?E():D(j,()=>{E(),pe&&pe()})};ze?ze(j,E,v):v()}else i(j,P,F)},Me=(w,P,F,$=!1,V=!1)=>{const{type:j,props:_e,ref:le,children:ve,dynamicChildren:ce,shapeFlag:Le,patchFlag:D,dirs:ze,cacheIndex:pe,memo:E}=w;if(D===-2&&(V=!1),le!=null&&(Bi(),ro(le,null,F,w,!0),zi()),pe!=null&&(P.renderCache[pe]=void 0),Le&256){P.ctx.deactivate(w);return}const v=Le&1&&ze,B=!oo(w);let W;if(B&&(W=_e&&_e.onVnodeBeforeUnmount)&&ri(W,P,w),Le&6)st(w.component,F,$);else{if(Le&128){w.suspense.unmount(F,$);return}v&&_s(w,null,P,"beforeUnmount"),Le&64?w.type.remove(w,P,F,xe,$):ce&&!ce.hasOnce&&(j!==At||D>0&&D&64)?K(ce,P,F,!1,!0):(j===At&&D&384||!V&&Le&16)&&K(ve,P,F),$&&tt(w)}const ne=E!=null&&pe==null;(B&&(W=_e&&_e.onVnodeUnmounted)||v||ne)&&An(()=>{W&&ri(W,P,w),v&&_s(w,null,P,"unmounted"),ne&&(w.el=null)},F)},tt=w=>{const{type:P,el:F,anchor:$,transition:V}=w;if(P===At){lt(F,$);return}if(P===_a){y(w);return}const j=()=>{s(F),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(w.shapeFlag&1&&V&&!V.persisted){const{leave:_e,delayLeave:le}=V,ve=()=>_e(F,j);le?le(w.el,j,ve):ve()}else j()},lt=(w,P)=>{let F;for(;w!==P;)F=d(w),s(w),w=F;s(P)},st=(w,P,F)=>{const{bum:$,scope:V,job:j,subTree:_e,um:le,m:ve,a:ce}=w;$f(ve),$f(ce),$&&ma($),V.stop(),j&&(j.flags|=8,Me(_e,w,P,F)),le&&An(le,P),An(()=>{w.isUnmounted=!0},P)},K=(w,P,F,$=!1,V=!1,j=0)=>{for(let _e=j;_e<w.length;_e++)Me(w[_e],P,F,$,V)},O=w=>{if(w.shapeFlag&6)return O(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=d(w.anchor||w.el),F=P&&P[y_];return F?d(F):P};let Y=!1;const ue=(w,P,F)=>{let $;w==null?P._vnode&&(Me(P._vnode,null,null,!0),$=P._vnode.component):_(P._vnode||null,w,P,null,null,null,F),P._vnode=w,Y||(Y=!0,Of($),Ap(),Y=!1)},xe={p:_,um:Me,m:me,r:tt,mt:oe,mc:x,pc:Z,pbc:U,n:O,o:t};return{render:ue,hydrate:void 0,createApp:W_(ue)}}function Dl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function o0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yp(t,e,n=!1){const i=t.children,s=e.children;if(et(i)&&et(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Pi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Yp(o,a)),a.type===fl&&(a.patchFlag===-1&&(a=s[r]=Pi(a)),a.el=o.el),a.type===as&&!a.el&&(a.el=o.el)}}function a0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Kp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kp(e)}function $f(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Zp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Zp(e.subTree):null}const Jp=t=>t.__isSuspense;function l0(t,e){e&&e.pendingBranch?et(t)?e.effects.push(...t):e.effects.push(t):g_(t)}const At=Symbol.for("v-fgt"),fl=Symbol.for("v-txt"),as=Symbol.for("v-cmt"),_a=Symbol.for("v-stc"),Ls=[];let On=null;function Te(t=!1){Ls.push(On=t?null:[])}function jp(){Ls.pop(),On=Ls[Ls.length-1]||null}let mo=1;function Ua(t,e=!1){mo+=t,t<0&&On&&e&&(On.hasOnce=!0)}function Qp(t){return t.dynamicChildren=mo>0?On||ar:null,jp(),mo>0&&On&&On.push(t),t}function Re(t,e,n,i,s,r){return Qp(C(t,e,n,i,s,r,!0))}function em(t,e,n,i,s){return Qp(sn(t,e,n,i,s,!0))}function Oa(t){return t?t.__v_isVNode===!0:!1}function kr(t,e){return t.type===e.type&&t.key===e.key}const tm=({key:t})=>t??null,va=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?zt(t)||pn(t)||at(t)?{i:Un,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,i=0,s=null,r=t===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tm(e),ref:e&&va(e),scopeId:Rp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Un};return a?(Fa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=zt(n)?8:16),mo>0&&!o&&On&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&On.push(l),l}const sn=c0;function c0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===U_)&&(t=as),Oa(t)){const a=gr(t,e,!0);return n&&Fa(a,n),mo>0&&!r&&On&&(a.shapeFlag&6?On[On.indexOf(t)]=a:On.push(a)),a.patchFlag=-2,a}if(S0(t)&&(t=t.__vccOpts),e){e=u0(e);let{class:a,style:l}=e;a&&!zt(a)&&(e.class=In(a)),wt(l)&&(qu(l)&&!et(l)&&(l=on({},l)),e.style=uo(l))}const o=zt(t)?1:Jp(t)?128:S_(t)?64:wt(t)?4:at(t)?2:0;return C(t,e,n,i,s,o,r,!0)}function u0(t){return t?qu(t)||Vp(t)?on({},t):t:null}function gr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?f0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&tm(c),ref:e&&e.ref?n&&r?et(r)?r.concat(va(e)):[r,va(e)]:va(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gr(t.ssContent),ssFallback:t.ssFallback&&gr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Yu(u,l.clone(u)),u}function Tt(t=" ",e=0){return sn(fl,null,t,e)}function ju(t,e){const n=sn(_a,null,t);return n.staticCount=e,n}function $t(t="",e=!1){return e?(Te(),em(as,null,t)):sn(as,null,t)}function ui(t){return t==null||typeof t=="boolean"?sn(as):et(t)?sn(At,null,t.slice()):Oa(t)?Pi(t):sn(fl,null,String(t))}function Pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gr(t)}function Fa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(et(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Fa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Vp(e)?e._ctx=Un:s===3&&Un&&(Un.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(at(e)){if(i&65){Fa(t,{default:e});return}e={default:e,_ctx:Un},n=32}else e=String(e),i&64?(n=16,e=[Tt(e)]):n=8;t.children=e,t.shapeFlag|=n}function f0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=In([e.class,i.class]));else if(s==="style")e.style=uo([e.style,i.style]);else if(el(s)){const r=e[s],o=i[s];o&&r!==o&&!(et(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!tl(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function ri(t,e,n,i=null){Qn(t,e,7,[n,i])}const d0=Fp();let h0=0;function p0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||d0,r={uid:h0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wp(i,s),emitsOptions:Bp(i,s),emit:null,emitted:null,propsDefaults:Lt,inheritAttrs:i.inheritAttrs,ctx:Lt,data:Lt,props:Lt,attrs:Lt,slots:Lt,refs:Lt,setupState:Lt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=q_.bind(null,r),t.ce&&t.ce(r),r}let dn=null;const m0=()=>dn||Un;let Ba,Ic;{const t=rl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ba=e("__VUE_INSTANCE_SETTERS__",n=>dn=n),Ic=e("__VUE_SSR_SETTERS__",n=>go=n)}const Ao=t=>{const e=dn;return Ba(t),t.scope.on(),()=>{t.scope.off(),Ba(e)}},Yf=()=>{dn&&dn.scope.off(),Ba(null)};function nm(t){return t.vnode.shapeFlag&4}let go=!1;function g0(t,e=!1,n=!1){e&&Ic(e);const{props:i,children:s}=t.vnode,r=nm(t);j_(t,i,r,e),n0(t,s,n||e);const o=r?_0(t,e):void 0;return e&&Ic(!1),o}function _0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,F_);const{setup:i}=n;if(i){Bi();const s=t.setupContext=i.length>1?x0(t):null,r=Ao(t),o=To(i,t,0,[t.props,s]),a=ep(o);if(zi(),r(),(a||t.sp)&&!oo(t)&&Lp(t),a){if(o.then(Yf,Yf),e)return o.then(l=>{Kf(t,l)}).catch(l=>{al(l,t,0)});t.asyncDep=o}else Kf(t,o)}else im(t)}function Kf(t,e,n){at(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:wt(e)&&(t.setupState=bp(e)),im(t)}function im(t,e,n){const i=t.type;t.render||(t.render=i.render||mi);{const s=Ao(t);Bi();try{B_(t)}finally{zi(),s()}}}const v0={get(t,e){return fn(t,"get",""),t[e]}};function x0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,v0),slots:t.slots,emit:t.emit,expose:e}}function dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bp(o_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ao)return ao[n](t)},has(e,n){return n in e||n in ao}})):t.proxy}function y0(t,e=!0){return at(t)?t.displayName||t.name:t.name||e&&t.__name}function S0(t){return at(t)&&"__vccOpts"in t}const _t=(t,e)=>f_(t,e,go);function sm(t,e,n){try{Ua(-1);const i=arguments.length;return i===2?wt(e)&&!et(e)?Oa(e)?sn(t,null,[e]):sn(t,e):sn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Oa(n)&&(n=[n]),sn(t,e,n))}finally{Ua(1)}}const M0="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nc;const Zf=typeof window<"u"&&window.trustedTypes;if(Zf)try{Nc=Zf.createPolicy("vue",{createHTML:t=>t})}catch{}const rm=Nc?t=>Nc.createHTML(t):t=>t,b0="http://www.w3.org/2000/svg",E0="http://www.w3.org/1998/Math/MathML",Ci=typeof document<"u"?document:null,Jf=Ci&&Ci.createElement("template"),T0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Ci.createElementNS(b0,t):e==="mathml"?Ci.createElementNS(E0,t):n?Ci.createElement(t,{is:n}):Ci.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Ci.createTextNode(t),createComment:t=>Ci.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ci.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Jf.innerHTML=rm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Jf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},A0=Symbol("_vtc");function w0(t,e,n){const i=t[A0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jf=Symbol("_vod"),R0=Symbol("_vsh"),C0=Symbol(""),P0=/(?:^|;)\s*display\s*:/;function D0(t,e,n){const i=t.style,s=zt(n);let r=!1;if(n&&!s){if(e)if(zt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Qr(i,a,"")}else for(const o in e)n[o]==null&&Qr(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?I0(t,o,!zt(e)&&e?e[o]:void 0,a)||Qr(i,o,a):Qr(i,o,"")}}else if(s){if(e!==n){const o=i[C0];o&&(n+=";"+o),i.cssText=n,r=P0.test(n)}}else e&&t.removeAttribute("style");jf in t&&(t[jf]=r?i.display:"",t[R0]&&(i.display="none"))}const Qf=/\s*!important$/;function Qr(t,e,n){if(et(n))n.forEach(i=>Qr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=L0(t,e);Qf.test(n)?t.setProperty(fs(i),n.replace(Qf,""),"important"):t[i]=n}}const ed=["Webkit","Moz","ms"],Ll={};function L0(t,e){const n=Ll[e];if(n)return n;let i=yn(e);if(i!=="filter"&&i in t)return Ll[e]=i;i=il(i);for(let s=0;s<ed.length;s++){const r=ed[s]+i;if(r in t)return Ll[e]=r}return e}function I0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&zt(i)&&n===i}const td="http://www.w3.org/1999/xlink";function nd(t,e,n,i,s,r=zg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(td,e.slice(6,e.length)):t.setAttributeNS(td,e,n):n==null||r&&!sp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":xi(n)?String(n):n)}function id(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rm(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=sp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function is(t,e,n,i){t.addEventListener(e,n,i)}function N0(t,e,n,i){t.removeEventListener(e,n,i)}const sd=Symbol("_vei");function U0(t,e,n,i,s=null){const r=t[sd]||(t[sd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=B0(e);if(i){const c=r[e]=H0(i,s);is(t,a,c,l)}else o&&(N0(t,a,o,l),r[e]=void 0)}}const O0=/(Once|Passive|Capture)$/,F0=/^on:?(?:Once|Passive|Capture)$/;function B0(t){let e,n;for(;(n=t.match(O0))&&!F0.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):fs(t.slice(2)),e]}let Il=0;const z0=Promise.resolve(),k0=()=>Il||(z0.then(()=>Il=0),Il=Date.now());function H0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(et(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Qn(c,e,5,a)}}else Qn(s,e,5,[i])};return n.value=t,n.attached=k0(),n}const rd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,V0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?w0(t,i,o):e==="style"?D0(t,n,i):el(e)?tl(e)||U0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):G0(t,e,i,o))?(id(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&nd(t,e,i,o,r,e!=="value")):t._isVueCE&&(W0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!zt(i)))?id(t,yn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),nd(t,e,i,o))};function G0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&rd(e)&&at(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rd(e)&&zt(n)?!1:e in t}function W0(t,e){const n=t._def.props;if(!n)return!1;const i=yn(e);return Array.isArray(n)?n.some(s=>yn(s)===i):Object.keys(n).some(s=>yn(s)===i)}const _r=t=>{const e=t.props["onUpdate:modelValue"]||!1;return et(e)?n=>ma(e,n):e};function X0(t){t.target.composing=!0}function od(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ui=Symbol("_assign");function ad(t,e,n){return e&&(t=t.trim()),n&&(t=sl(t)),t}const $n={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ui]=_r(s);const r=i||s.props&&s.props.type==="number";is(t,e?"change":"input",o=>{o.target.composing||t[Ui](ad(t.value,n,r))}),(n||r)&&is(t,"change",()=>{t.value=ad(t.value,n,r)}),e||(is(t,"compositionstart",X0),is(t,"compositionend",od),is(t,"change",od))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ui]=_r(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?sl(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},Ho={deep:!0,created(t,e,n){t[Ui]=_r(n),is(t,"change",()=>{const i=t._modelValue,s=_o(t),r=t.checked,o=t[Ui];if(et(i)){const a=zu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(wr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(om(t,r))})},mounted:ld,beforeUpdate(t,e,n){t[Ui]=_r(n),ld(t,e,n)}};function ld(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(et(e))s=zu(e,i.props.value)>-1;else if(wr(e))s=e.has(i.props.value);else{if(e===n)return;s=Rr(e,om(t,!0))}t.checked!==s&&(t.checked=s)}const Nl={deep:!0,created(t,{value:e,modifiers:{number:n}},i){t._modelValue=e,is(t,"change",()=>{const s=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?sl(_o(r)):_o(r));t[Ui](t.multiple?wr(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,ll(()=>{t._assigning=!1})}),t[Ui]=_r(i)},mounted(t,{value:e}){cd(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Ui]=_r(n)},updated(t,{value:e}){t._assigning||cd(t,e)}};function cd(t,e){const n=t.multiple,i=et(e);if(!(n&&!i&&!wr(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=_o(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=zu(e,a)>-1}else o.selected=e.has(a);else if(Rr(_o(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function _o(t){return"_value"in t?t._value:t.value}function om(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const q0=["ctrl","shift","alt","meta"],$0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>q0.some(n=>t[`${n}Key`]&&!e.includes(n))},Y0=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=$0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},K0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ud=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=fs(s.key);if(e.some(o=>o===r||K0[o]===r))return t(s)})},Z0=on({patchProp:V0},T0);let fd;function J0(){return fd||(fd=s0(Z0))}const j0=(...t)=>{const e=J0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ev(i);if(!s)return;const r=e._component;!at(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Q0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Q0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ev(t){return zt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const rr=typeof document<"u";function am(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&am(t.default)}const yt=Object.assign;function Ul(t,e){const n={};for(const i in e){const s=e[i];n[i]=ei(s)?s.map(t):t(s)}return n}const lo=()=>{},ei=Array.isArray;function dd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const lm=/#/g,nv=/&/g,iv=/\//g,sv=/=/g,rv=/\?/g,cm=/\+/g,ov=/%5B/g,av=/%5D/g,um=/%5E/g,lv=/%60/g,fm=/%7B/g,cv=/%7C/g,dm=/%7D/g,uv=/%20/g;function Qu(t){return t==null?"":encodeURI(""+t).replace(cv,"|").replace(ov,"[").replace(av,"]")}function fv(t){return Qu(t).replace(fm,"{").replace(dm,"}").replace(um,"^")}function Uc(t){return Qu(t).replace(cm,"%2B").replace(uv,"+").replace(lm,"%23").replace(nv,"%26").replace(lv,"`").replace(fm,"{").replace(dm,"}").replace(um,"^")}function dv(t){return Uc(t).replace(sv,"%3D")}function hv(t){return Qu(t).replace(lm,"%23").replace(rv,"%3F")}function pv(t){return hv(t).replace(iv,"%2F")}function vo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const mv=/\/$/,gv=t=>t.replace(mv,"");function Ol(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=yv(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:vo(o)}}function _v(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&vr(e.matched[i],n.matched[s])&&hm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!xv(t[n],e[n]))return!1;return!0}function xv(t,e){return ei(t)?pd(t,e):ei(e)?pd(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function pd(t,e){return ei(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function yv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const $i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Oc=function(t){return t.pop="pop",t.push="push",t}({}),Fl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function Sv(t){if(!t)if(rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gv(t)}const Mv=/^[^#]+#/;function bv(t,e){return t.replace(Mv,"#")+e}function Ev(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const hl=()=>({left:window.scrollX,top:window.scrollY});function Tv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ev(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function md(t,e){return(history.state?history.state.position-e:-1)+t}const Fc=new Map;function Av(t,e){Fc.set(t,e)}function wv(t){const e=Fc.get(t);return Fc.delete(t),e}function Rv(t){return typeof t=="string"||t&&typeof t=="object"}function pm(t){return typeof t=="string"||typeof t=="symbol"}let Bt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const mm=Symbol("");Bt.MATCHER_NOT_FOUND+"",Bt.NAVIGATION_GUARD_REDIRECT+"",Bt.NAVIGATION_ABORTED+"",Bt.NAVIGATION_CANCELLED+"",Bt.NAVIGATION_DUPLICATED+"";function xr(t,e){return yt(new Error,{type:t,[mm]:!0},e)}function bi(t,e){return t instanceof Error&&mm in t&&(e==null||!!(t.type&e))}const Cv=["params","query","hash"];function Pv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Cv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Dv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(cm," "),r=s.indexOf("="),o=vo(r<0?s:s.slice(0,r)),a=r<0?null:vo(s.slice(r+1));if(o in e){let l=e[o];ei(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function gd(t){let e="";for(let n in t){const i=t[n];if(n=dv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ei(i)?i.map(s=>s&&Uc(s)):[i&&Uc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Lv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ei(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Iv=Symbol(""),_d=Symbol(""),pl=Symbol(""),ef=Symbol(""),Bc=Symbol("");function Hr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ts(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(xr(Bt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):Rv(d)?l(xr(Bt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Bl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(am(l)){const c=(l.__vccOpts||l)[e];c&&r.push(ts(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=tv(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ts(d,n,i,o,a,s)()}))}}return r}function Nv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>vr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>vr(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Uv=()=>location.protocol+"//"+location.host;function gm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),hd(a,"")}return hd(n,t)+i+s}function Ov(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const h=gm(t,location),g=n.value,_=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(h);s.forEach(p=>{p(n.value,g,{delta:m,type:Oc.pop,direction:m?m>0?Fl.forward:Fl.back:Fl.unknown})})};function l(){o=n.value}function c(d){s.push(d);const h=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(yt({},d.state,{scroll:hl()}),"")}}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function vd(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?hl():null}}function Fv(t){const{history:e,location:n}=window,i={value:gm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Uv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){r(l,yt({},e.state,vd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=yt({},s.value,e.state,{forward:l,scroll:hl()});r(u.current,u,!0),r(l,yt({},vd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Bv(t){t=Sv(t);const e=Fv(t),n=Ov(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=yt({location:"",base:t,go:i,createHref:bv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let As=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var qt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(qt||{});const zv={type:As.Static,value:""},kv=/[a-zA-Z0-9_]/;function Hv(t){if(!t)return[[]];if(t==="/")return[[zv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=qt.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===qt.Static?r.push({type:As.Static,value:c}):n===qt.Param||n===qt.ParamRegExp||n===qt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:As.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==qt.ParamRegExp){i=n,n=qt.EscapeNext;continue}switch(n){case qt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=qt.Param):d();break;case qt.EscapeNext:d(),n=i;break;case qt.Param:l==="("?n=qt.ParamRegExp:kv.test(l)?d():(f(),n=qt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case qt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=qt.ParamRegExpEnd:u+=l;break;case qt.ParamRegExpEnd:f(),n=qt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===qt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const xd="[^/]+?",Vv={sensitive:!1,strict:!1,start:!0,end:!0};var vn=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(vn||{});const Gv=/[.+*?^${}()[\]/\\]/g;function Wv(t,e){const n=yt({},Vv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[vn.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=vn.Segment+(n.sensitive?vn.BonusCaseSensitive:0);if(d.type===As.Static)f||(s+="/"),s+=d.value.replace(Gv,"\\$&"),h+=vn.Static;else if(d.type===As.Param){const{value:g,repeatable:_,optional:m,regexp:p}=d;r.push({name:g,repeatable:_,optional:m});const M=p||xd;if(M!==xd){h+=vn.BonusCustomRegExp;try{`${M}`}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+y.message)}}let b=_?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,h+=vn.Dynamic,m&&(h+=vn.BonusOptional),_&&(h+=vn.BonusRepeatable),M===".*"&&(h+=vn.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=vn.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=r[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===As.Static)u+=h.value;else if(h.type===As.Param){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(ei(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=ei(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Xv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===vn.Static+vn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===vn.Static+vn.Segment?1:-1:0}function _m(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Xv(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(yd(i))return 1;if(yd(s))return-1}return s.length-i.length}function yd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qv={strict:!1,end:!0,sensitive:!1};function $v(t,e,n){const i=Wv(Hv(t.path),n),s=yt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Yv(t,e){const n=[],i=new Map;e=dd(qv,e);function s(f){return i.get(f)}function r(f,d,h){const g=!h,_=Md(f);_.aliasOf=h&&h.record;const m=dd(e,f),p=[_];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const A of y)p.push(Md(yt({},_,{components:h?h.record.components:_.components,path:A,aliasOf:h?h.record:_})))}let M,b;for(const y of p){const{path:A}=y;if(d&&A[0]!=="/"){const T=d.record.path,L=T[T.length-1]==="/"?"":"/";y.path=d.record.path+(A&&L+A)}if(M=$v(y,d,m),h?h.alias.push(M):(b=b||M,b!==M&&b.alias.push(M),g&&f.name&&!bd(M)&&o(f.name)),vm(M)&&l(M),_.children){const T=_.children;for(let L=0;L<T.length;L++)r(T[L],M,h&&h.children[L])}h=h||M}return b?()=>{o(b)}:lo}function o(f){if(pm(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=Jv(f,n);n.splice(d,0,f),f.record.name&&!bd(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},_,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw xr(Bt.MATCHER_NOT_FOUND,{location:f});m=h.record.name,g=yt(Sd(d.params,h.keys.filter(b=>!b.optional).concat(h.parent?h.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&Sd(f.params,h.keys.map(b=>b.name))),_=h.stringify(g)}else if(f.path!=null)_=f.path,h=n.find(b=>b.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(b=>b.re.test(d.path)),!h)throw xr(Bt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,g=yt({},d.params,f.params),_=h.stringify(g)}const p=[];let M=h;for(;M;)p.unshift(M.record),M=M.parent;return{name:m,path:_,params:g,matched:p,meta:Zv(p)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Sd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Md(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Kv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Kv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function bd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zv(t){return t.reduce((e,n)=>yt(e,n.meta),{})}function Jv(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;_m(t,e[r])<0?i=r:n=r+1}const s=jv(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function jv(t){let e=t;for(;e=e.parent;)if(vm(e)&&_m(t,e)===0)return e}function vm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ed(t){const e=Zn(pl),n=Zn(ef),i=_t(()=>{const l=wn(t.to);return e.resolve(l)}),s=_t(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(vr.bind(null,u));if(d>-1)return d;const h=Td(l[c-2]);return c>1&&Td(u)===h&&f[f.length-1].path!==h?f.findIndex(vr.bind(null,l[c-2])):d}),r=_t(()=>s.value>-1&&nx(n.params,i.value.params)),o=_t(()=>s.value>-1&&s.value===n.matched.length-1&&hm(n.params,i.value.params));function a(l={}){if(tx(l)){const c=e[wn(t.replace)?"replace":"push"](wn(t.to)).catch(lo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:_t(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Qv(t){return t.length===1?t[0]:t}const ex=Dp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ed,setup(t,{slots:e}){const n=ds(Ed(t)),{options:i}=Zn(pl),s=_t(()=>({[Ad(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ad(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Qv(e.default(n));return t.custom?r:sm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),zc=ex;function tx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nx(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ei(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Td(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ad=(t,e,n)=>t??e??n,ix=Dp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Zn(Bc),s=_t(()=>t.route||i.value),r=Zn(_d,0),o=_t(()=>{let c=wn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=_t(()=>s.value.matched[o.value]);ga(_d,_t(()=>o.value+1)),ga(Iv,a),ga(Bc,s);const l=$e();return Ii(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!vr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return wd(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=sm(d,yt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return wd(n.default,{Component:m,route:c})||m}}});function wd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xm=ix;function sx(t){const e=Yv(t.routes,t),n=t.parseQuery||Dv,i=t.stringifyQuery||gd,s=t.history,r=Hr(),o=Hr(),a=Hr(),l=a_($i);let c=$i;rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ul.bind(null,O=>""+O),f=Ul.bind(null,pv),d=Ul.bind(null,vo);function h(O,Y){let ue,xe;return pm(O)?(ue=e.getRecordMatcher(O),xe=Y):xe=O,e.addRoute(xe,ue)}function g(O){const Y=e.getRecordMatcher(O);Y&&e.removeRoute(Y)}function _(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,Y){if(Y=yt({},Y||l.value),typeof O=="string"){const F=Ol(n,O,Y.path),$=e.resolve({path:F.path},Y),V=s.createHref(F.fullPath);return yt(F,$,{params:d($.params),hash:vo(F.hash),redirectedFrom:void 0,href:V})}let ue;if(O.path!=null)ue=yt({},O,{path:Ol(n,O.path,Y.path).path});else{const F=yt({},O.params);for(const $ in F)F[$]==null&&delete F[$];ue=yt({},O,{params:f(F)}),Y.params=f(Y.params)}const xe=e.resolve(ue,Y),be=O.hash||"";xe.params=u(d(xe.params));const w=_v(i,yt({},O,{hash:fv(be),path:xe.path})),P=s.createHref(w);return yt({fullPath:w,hash:be,query:i===gd?Lv(O.query):O.query||{}},xe,{redirectedFrom:void 0,href:P})}function M(O){return typeof O=="string"?Ol(n,O,l.value.path):yt({},O)}function b(O,Y){if(c!==O)return xr(Bt.NAVIGATION_CANCELLED,{from:Y,to:O})}function y(O){return L(O)}function A(O){return y(yt(M(O),{replace:!0}))}function T(O,Y){const ue=O.matched[O.matched.length-1];if(ue&&ue.redirect){const{redirect:xe}=ue;let be=typeof xe=="function"?xe(O,Y):xe;return typeof be=="string"&&(be=be.includes("?")||be.includes("#")?be=M(be):{path:be},be.params={}),yt({query:O.query,hash:O.hash,params:be.path!=null?{}:O.params},be)}}function L(O,Y){const ue=c=p(O),xe=l.value,be=O.state,w=O.force,P=O.replace===!0,F=T(ue,xe);if(F)return L(yt(M(F),{state:typeof F=="object"?yt({},be,F.state):be,force:w,replace:P}),Y||ue);const $=ue;$.redirectedFrom=Y;let V;return!w&&vv(i,xe,ue)&&(V=xr(Bt.NAVIGATION_DUPLICATED,{to:$,from:xe}),me(xe,xe,!0,!1)),(V?Promise.resolve(V):U($,xe)).catch(j=>bi(j)?bi(j,Bt.NAVIGATION_GUARD_REDIRECT)?j:ye(j):Z(j,$,xe)).then(j=>{if(j){if(bi(j,Bt.NAVIGATION_GUARD_REDIRECT))return L(yt({replace:P},M(j.to),{state:typeof j.to=="object"?yt({},be,j.to.state):be,force:w}),Y||$)}else j=k($,xe,!0,P,be);return I($,xe,j),j})}function x(O,Y){const ue=b(O,Y);return ue?Promise.reject(ue):Promise.resolve()}function R(O){const Y=lt.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(O):O()}function U(O,Y){let ue;const[xe,be,w]=Nv(O,Y);ue=Bl(xe.reverse(),"beforeRouteLeave",O,Y);for(const F of xe)F.leaveGuards.forEach($=>{ue.push(ts($,O,Y))});const P=x.bind(null,O,Y);return ue.push(P),K(ue).then(()=>{ue=[];for(const F of r.list())ue.push(ts(F,O,Y));return ue.push(P),K(ue)}).then(()=>{ue=Bl(be,"beforeRouteUpdate",O,Y);for(const F of be)F.updateGuards.forEach($=>{ue.push(ts($,O,Y))});return ue.push(P),K(ue)}).then(()=>{ue=[];for(const F of w)if(F.beforeEnter)if(ei(F.beforeEnter))for(const $ of F.beforeEnter)ue.push(ts($,O,Y));else ue.push(ts(F.beforeEnter,O,Y));return ue.push(P),K(ue)}).then(()=>(O.matched.forEach(F=>F.enterCallbacks={}),ue=Bl(w,"beforeRouteEnter",O,Y,R),ue.push(P),K(ue))).then(()=>{ue=[];for(const F of o.list())ue.push(ts(F,O,Y));return ue.push(P),K(ue)}).catch(F=>bi(F,Bt.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function I(O,Y,ue){a.list().forEach(xe=>R(()=>xe(O,Y,ue)))}function k(O,Y,ue,xe,be){const w=b(O,Y);if(w)return w;const P=Y===$i,F=rr?history.state:{};ue&&(xe||P?s.replace(O.fullPath,yt({scroll:P&&F&&F.scroll},be)):s.push(O.fullPath,be)),l.value=O,me(O,Y,ue,P),ye()}let ie;function oe(){ie||(ie=s.listen((O,Y,ue)=>{if(!st.listening)return;const xe=p(O),be=T(xe,st.currentRoute.value);if(be){L(yt(be,{replace:!0,force:!0}),xe).catch(lo);return}c=xe;const w=l.value;rr&&Av(md(w.fullPath,ue.delta),hl()),U(xe,w).catch(P=>bi(P,Bt.NAVIGATION_ABORTED|Bt.NAVIGATION_CANCELLED)?P:bi(P,Bt.NAVIGATION_GUARD_REDIRECT)?(L(yt(M(P.to),{force:!0}),xe).then(F=>{bi(F,Bt.NAVIGATION_ABORTED|Bt.NAVIGATION_DUPLICATED)&&!ue.delta&&ue.type===Oc.pop&&s.go(-1,!1)}).catch(lo),Promise.reject()):(ue.delta&&s.go(-ue.delta,!1),Z(P,xe,w))).then(P=>{P=P||k(xe,w,!1),P&&(ue.delta&&!bi(P,Bt.NAVIGATION_CANCELLED)?s.go(-ue.delta,!1):ue.type===Oc.pop&&bi(P,Bt.NAVIGATION_ABORTED|Bt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),I(xe,w,P)}).catch(lo)}))}let X=Hr(),te=Hr(),G;function Z(O,Y,ue){ye(O);const xe=te.list();return xe.length?xe.forEach(be=>be(O,Y,ue)):console.error(O),Promise.reject(O)}function he(){return G&&l.value!==$i?Promise.resolve():new Promise((O,Y)=>{X.add([O,Y])})}function ye(O){return G||(G=!O,oe(),X.list().forEach(([Y,ue])=>O?ue(O):Y()),X.reset()),O}function me(O,Y,ue,xe){const{scrollBehavior:be}=t;if(!rr||!be)return Promise.resolve();const w=!ue&&wv(md(O.fullPath,0))||(xe||!ue)&&history.state&&history.state.scroll||null;return ll().then(()=>be(O,Y,w)).then(P=>P&&Tv(P)).catch(P=>Z(P,O,Y))}const Me=O=>s.go(O);let tt;const lt=new Set,st={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:t,push:y,replace:A,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:he,install(O){O.component("RouterLink",zc),O.component("RouterView",xm),O.config.globalProperties.$router=st,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>wn(l)}),rr&&!tt&&l.value===$i&&(tt=!0,y(s.location).catch(xe=>{}));const Y={};for(const xe in $i)Object.defineProperty(Y,xe,{get:()=>l.value[xe],enumerable:!0});O.provide(pl,st),O.provide(ef,Sp(Y)),O.provide(Bc,l);const ue=O.unmount;lt.add(O),O.unmount=function(){lt.delete(O),lt.size<1&&(c=$i,ie&&ie(),ie=null,l.value=$i,tt=!1,G=!1),ue()}}};function K(O){return O.reduce((Y,ue)=>Y.then(()=>R(ue)),Promise.resolve())}return st}function tf(){return Zn(pl)}function ym(t){return Zn(ef)}const nf="vision-portal-session",Vo=(()=>{try{return JSON.parse(localStorage.getItem(nf)||"null")}catch{return null}})(),yr=$e(Vo&&Vo.token&&Vo.user?Vo:null),za=_t(()=>{var t;return!!((t=yr.value)!=null&&t.token)}),co=_t(()=>{var t;return((t=yr.value)==null?void 0:t.user)||null}),Sm=t=>{yr.value=t,localStorage.setItem(nf,JSON.stringify(t))},rx=t=>{yr.value&&Sm({...yr.value,user:t})},ox=()=>{yr.value=null,localStorage.removeItem(nf)},ax={class:"sidebar"},lx={class:"brand"},cx={key:0,class:"brand-account-actions"},ux={class:"account-hover-card"},fx={key:1,class:"brand-account-actions"},dx={class:"nav-group-title"},hx={class:"main-panel"},px={class:"topbar"},mx={class:"topbar-actions"},gx={__name:"App",setup(t){const e=ym(),n=tf(),i=$e(localStorage.getItem("vision-portal-theme")==="light"),s=[{title:"平台總覽",requiresAuth:!0,items:[{label:"首頁",to:"/",icon:"◉"}]},{title:"系統介紹",items:[{label:"操作指引",to:"/guide",icon:"◌"},{label:"定位技術",to:"/technology",icon:"◌"}]},{title:"歷史資料",requiresAuth:!0,items:[{label:"物件資料",to:"/history/object",icon:"◌"},{label:"施工任務",to:"/history/tasks",icon:"◌"},{label:"操作紀錄",to:"/history/operations",icon:"◌"}]},{title:"媒體資料",requiresAuth:!0,items:[{label:"影像串流",to:"/media/stream",icon:"◌"},{label:"語音提示",to:"/media/voice",icon:"◌"}]},{title:"系統設定",requiresAuth:!0,items:[{label:"相機外參設定",to:"/settings/camera-extrinsics"}]}],r=_t(()=>s.filter(c=>!c.requiresAuth||za.value)),o=_t(()=>{const c=s.flatMap(u=>u.items).find(u=>u.to===e.path);return(c==null?void 0:c.label)||"首頁"}),a=(c="login")=>n.push({path:"/account/login",query:{mode:c}}),l=()=>{i.value=!i.value,localStorage.setItem("vision-portal-theme",i.value?"light":"dark")};return(c,u)=>{var f,d;return Te(),Re("div",{class:In(["app-shell",{"theme-light":i.value}])},[C("aside",ax,[C("div",lx,[u[2]||(u[2]=C("div",{class:"brand-mark"},"V",-1)),u[3]||(u[3]=C("div",{class:"brand-content"},[C("p",{class:"brand-eyebrow"},"終端定位平台"),C("div",{class:"brand-title-row"},[C("h2",null,"Vision Portal")])],-1)),wn(za)?(Te(),Re("div",cx,[sn(wn(zc),{class:"user-avatar",to:"/account/profile"},{default:La(()=>{var h,g;return[Tt(we((g=(h=wn(co))==null?void 0:h.name)==null?void 0:g.charAt(0).toUpperCase()),1)]}),_:1}),C("div",ux,[C("strong",null,we((f=wn(co))==null?void 0:f.name),1),C("span",null,we((d=wn(co))==null?void 0:d.email),1),u[1]||(u[1]=C("small",null,"點擊頭貼查看帳戶資料",-1))])])):(Te(),Re("div",fx,[C("button",{type:"button",class:"brand-login",onClick:u[0]||(u[0]=h=>a("login"))},"登入")]))]),(Te(!0),Re(At,null,Jn(r.value,h=>(Te(),Re("nav",{class:"nav-section",key:h.title},[C("p",dx,we(h.title),1),(Te(!0),Re(At,null,Jn(h.items,g=>(Te(),em(wn(zc),{key:g.to,class:In(["nav-link",{active:wn(e).path===g.to}]),to:g.to,"exact-active-class":"active"},{default:La(()=>[u[4]||(u[4]=C("span",{class:"icon","aria-hidden":"true"},null,-1)),C("span",null,we(g.label),1)]),_:2},1032,["class","to"]))),128))]))),128))]),C("main",hx,[C("header",px,[C("h1",null,we(o.value),1),C("div",mx,[C("button",{type:"button",class:"theme-toggle",onClick:l},we(i.value?"◐ 夜間":"☀ 白天"),1),u[5]||(u[5]=C("div",{class:"topbar-badge"},"已連線",-1))])]),sn(wn(xm))])],2)}}};function Mm(t,e){return function(){return t.apply(e,arguments)}}const{toString:_x}=Object.prototype,{getPrototypeOf:Sr}=Object,{iterator:wo,toStringTag:bm}=Symbol,ka=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),xo=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),ka(n,e))return!0;n=Sr(n)}return!1},vx=(t,e)=>t!=null&&xo(t,e)?t[e]:void 0,sf=(t=>e=>{const n=_x.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ti=t=>(t=t.toLowerCase(),e=>sf(e)===t),ml=t=>e=>typeof e===t,{isArray:Ns}=Array,Mr=ml("undefined");function Cr(t){return t!==null&&!Mr(t)&&t.constructor!==null&&!Mr(t.constructor)&&Rn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Em=ti("ArrayBuffer");function xx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Em(t.buffer),e}const yx=ml("string"),Rn=ml("function"),Tm=ml("number"),Pr=t=>t!==null&&typeof t=="object",Sx=t=>t===!0||t===!1,xa=t=>{if(!Pr(t))return!1;const e=Sr(t);return(e===null||e===Object.prototype||Sr(e)===null)&&!xo(t,bm)&&!xo(t,wo)},Mx=t=>{if(!Pr(t)||Cr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},bx=ti("Date"),Ex=ti("File"),Tx=t=>!!(t&&typeof t.uri<"u"),Ax=t=>t&&typeof t.getParts<"u",wx=ti("Blob"),Rx=ti("FileList"),Cx=t=>Pr(t)&&Rn(t.pipe);function Px(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Rd=Px(),Cd=typeof Rd.FormData<"u"?Rd.FormData:void 0,Dx=t=>{if(!t)return!1;if(Cd&&t instanceof Cd)return!0;const e=Sr(t);if(!e||e===Object.prototype||!Rn(t.append))return!1;const n=sf(t);return n==="formdata"||n==="object"&&Rn(t.toString)&&t.toString()==="[object FormData]"},Lx=ti("URLSearchParams"),[Ix,Nx,Ux,Ox]=["ReadableStream","Request","Response","Headers"].map(ti),Fx=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ro(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Ns(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Cr(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Am(t,e){if(Cr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const ws=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wm=t=>!Mr(t)&&t!==ws;function kc(...t){const{caseless:e,skipUndefined:n}=wm(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&Am(i,o)||o,l=ka(i,a)?i[a]:void 0;xa(l)&&xa(r)?i[a]=kc(l,r):xa(r)?i[a]=kc({},r):Ns(r)?i[a]=r.slice():(!n||!Mr(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++){const a=t[r];if(!a||Cr(a)||(Ro(a,s),typeof a!="object"||Ns(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];Kx.call(a,u)&&s(a[u],u)}}return i}const Bx=(t,e,n,{allOwnKeys:i}={})=>(Ro(e,(s,r)=>{n&&Rn(s)?Object.defineProperty(t,r,{__proto__:null,value:Mm(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),zx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),kx=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Hx=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Sr(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Vx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Gx=t=>{if(!t)return null;if(Ns(t))return t;let e=t.length;if(!Tm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Wx=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Sr(Uint8Array)),Xx=(t,e)=>{const i=(t&&t[wo]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},qx=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},$x=ti("HTMLFormElement"),Yx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:Kx}=Object.prototype,Zx=ti("RegExp"),Rm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Ro(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Jx=t=>{Rm(t,(e,n)=>{if(Rn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(Rn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jx=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Ns(t)?i(t):i(String(t).split(e)),n},Qx=()=>{},ey=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function ty(t){return!!(t&&Rn(t.append)&&t[bm]==="FormData"&&t[wo])}const ny=t=>{const e=new WeakSet,n=i=>{if(Pr(i)){if(e.has(i))return;if(Cr(i))return i;if(!("toJSON"in i)){e.add(i);const s=Ns(i)?[]:{};return Ro(i,(r,o)=>{const a=n(r);!Mr(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},iy=ti("AsyncFunction"),sy=t=>t&&(Pr(t)||Rn(t))&&Rn(t.then)&&Rn(t.catch),Cm=((t,e)=>t?setImmediate:e?((n,i)=>(ws.addEventListener("message",({source:s,data:r})=>{s===ws&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),ws.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Rn(ws.postMessage)),ry=typeof queueMicrotask<"u"?queueMicrotask.bind(ws):typeof process<"u"&&process.nextTick||Cm,Pm=t=>t!=null&&Rn(t[wo]),oy=t=>t!=null&&xo(t,wo)&&Pm(t),H={isArray:Ns,isArrayBuffer:Em,isBuffer:Cr,isFormData:Dx,isArrayBufferView:xx,isString:yx,isNumber:Tm,isBoolean:Sx,isObject:Pr,isPlainObject:xa,isEmptyObject:Mx,isReadableStream:Ix,isRequest:Nx,isResponse:Ux,isHeaders:Ox,isUndefined:Mr,isDate:bx,isFile:Ex,isReactNativeBlob:Tx,isReactNative:Ax,isBlob:wx,isRegExp:Zx,isFunction:Rn,isStream:Cx,isURLSearchParams:Lx,isTypedArray:Wx,isFileList:Rx,forEach:Ro,merge:kc,extend:Bx,trim:Fx,stripBOM:zx,inherits:kx,toFlatObject:Hx,kindOf:sf,kindOfTest:ti,endsWith:Vx,toArray:Gx,forEachEntry:Xx,matchAll:qx,isHTMLForm:$x,hasOwnProperty:ka,hasOwnProp:ka,hasOwnInPrototypeChain:xo,getSafeProp:vx,reduceDescriptors:Rm,freezeMethods:Jx,toObjectSet:jx,toCamelCase:Yx,noop:Qx,toFiniteNumber:ey,findKey:Am,global:ws,isContextDefined:wm,isSpecCompliantForm:ty,toJSONObject:ny,isAsyncFn:iy,isThenable:sy,setImmediate:Cm,asap:ry,isIterable:Pm,isSafeIterable:oy},ay=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ly=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&ay[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function cy(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const uy=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),fy=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function rf(t,e){return H.isArray(t)?t.map(n=>rf(n,e)):cy(String(t).replace(e,""))}const dy=t=>rf(t,uy),hy=t=>rf(t,fy);function Dm(t){const e=Object.create(null);return H.forEach(t.toJSON(),(n,i)=>{e[i]=hy(n)}),e}const Pd=Symbol("internals");function Vr(t){return t&&String(t).trim().toLowerCase()}function ya(t){return t===!1||t==null?t:H.isArray(t)?t.map(ya):dy(String(t))}function py(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const my=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function zl(t,e,n,i,s){if(H.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!H.isString(e)){if(H.isString(i))return e.indexOf(i)!==-1;if(H.isRegExp(i))return i.test(e)}}function gy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function _y(t,e){const n=H.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let mn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=Vr(l);if(!u)return;const f=H.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=ya(a))}const o=(a,l)=>H.forEach(a,(c,u)=>r(c,u,l));if(H.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(H.isString(e)&&(e=e.trim())&&!my(e))o(ly(e),n);else if(H.isObject(e)&&H.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!H.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],H.hasOwnProp(a,c)?(l=a[c],a[c]=H.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Vr(e),e){const i=H.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return py(s);if(H.isFunction(n))return n.call(this,s,i);if(H.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Vr(e),e){const i=H.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||zl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Vr(o),o){const a=H.findKey(i,o);a&&(!n||zl(i,i[a],a,n))&&(delete i[a],s=!0)}}return H.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||zl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return H.forEach(this,(s,r)=>{const o=H.findKey(i,r);if(o){n[o]=ya(s),delete n[r];return}const a=e?gy(r):String(r).trim();a!==r&&delete n[r],n[a]=ya(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return H.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&H.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Pd]=this[Pd]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Vr(o);i[a]||(_y(s,o),i[a]=!0)}return H.isArray(e)?e.forEach(r):r(e),this}};mn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(mn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});H.freezeMethods(mn);const vy="[REDACTED ****]";function xy(t){if(H.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(H.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function yy(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||H.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof mn&&(r=r.toJSON()),i.push(r);let o;if(H.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);H.isUndefined(c)||(o[l]=c)});else{if(!H.isPlainObject(r)&&xy(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?vy:s(l);H.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let Ue=class Lm extends Error{static from(e,n,i,s,r,o){const a=new Lm(e.message,n||e.code,i,s,r);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&H.hasOwnProp(e,"redact")?e.redact:void 0,i=H.isArray(n)&&n.length>0?yy(e,n):H.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Ue.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ue.ERR_BAD_OPTION="ERR_BAD_OPTION";Ue.ECONNABORTED="ECONNABORTED";Ue.ETIMEDOUT="ETIMEDOUT";Ue.ECONNREFUSED="ECONNREFUSED";Ue.ERR_NETWORK="ERR_NETWORK";Ue.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ue.ERR_DEPRECATED="ERR_DEPRECATED";Ue.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ue.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ue.ERR_CANCELED="ERR_CANCELED";Ue.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ue.ERR_INVALID_URL="ERR_INVALID_URL";Ue.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Sy=null,Im=100;function Hc(t){return H.isPlainObject(t)||H.isArray(t)}function Nm(t){return H.endsWith(t,"[]")?t.slice(0,-2):t}function kl(t,e,n){return t?t.concat(e).map(function(s,r){return s=Nm(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function My(t){return H.isArray(t)&&!t.some(Hc)}const by=H.toFlatObject(H,{},null,function(e){return/^is[A-Z]/.test(e)});function gl(t,e,n){if(!H.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,b){return!H.isUndefined(b[M])});const i=n.metaTokens,s=n.visitor||g,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?Im:n.maxDepth,c=a&&H.isSpecCompliantForm(e),u=[];if(!H.isFunction(s))throw new TypeError("visitor must be a function");function f(p){if(p===null)return"";if(H.isDate(p))return p.toISOString();if(H.isBoolean(p))return p.toString();if(!c&&H.isBlob(p))throw new Ue("Blob is not supported. Use a Buffer instead.");if(H.isArrayBuffer(p)||H.isTypedArray(p)){if(c&&typeof a=="function")return new a([p]);if(typeof Buffer<"u")return Buffer.from(p);throw new Ue("Blob is not supported. Use a Buffer instead.",Ue.ERR_NOT_SUPPORT)}return p}function d(p){if(p>l)throw new Ue("Object is too deeply nested ("+p+" levels). Max depth: "+l,Ue.ERR_FORM_DATA_DEPTH_EXCEEDED)}function h(p,M){if(l===1/0)return JSON.stringify(p);const b=[];return JSON.stringify(p,function(A,T){if(!H.isObject(T))return T;for(;b.length&&b[b.length-1]!==this;)b.pop();return b.push(T),d(M+b.length-1),T})}function g(p,M,b){let y=p;if(H.isReactNative(e)&&H.isReactNativeBlob(p))return e.append(kl(b,M,r),f(p)),!1;if(p&&!b&&typeof p=="object"){if(H.endsWith(M,"{}"))M=i?M:M.slice(0,-2),p=h(p,1);else if(H.isArray(p)&&My(p)||(H.isFileList(p)||H.endsWith(M,"[]"))&&(y=H.toArray(p)))return M=Nm(M),y.forEach(function(T,L){!(H.isUndefined(T)||T===null)&&e.append(o===!0?kl([M],L,r):o===null?M:M+"[]",f(T))}),!1}return Hc(p)?!0:(e.append(kl(b,M,r),f(p)),!1)}const _=Object.assign(by,{defaultVisitor:g,convertValue:f,isVisitable:Hc});function m(p,M,b=0){if(!H.isUndefined(p)){if(d(b),u.indexOf(p)!==-1)throw new Error("Circular reference detected in "+M.join("."));u.push(p),H.forEach(p,function(A,T){(!(H.isUndefined(A)||A===null)&&s.call(e,A,H.isString(T)?T.trim():T,M,_))===!0&&m(A,M?M.concat(T):[T],b+1)}),u.pop()}}if(!H.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Dd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function of(t,e){this._pairs=[],t&&gl(t,this,e)}const Um=of.prototype;Um.append=function(e,n){this._pairs.push([e,n])};Um.toString=function(e){const n=e?i=>e.call(this,i,Dd):Dd;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ey(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Om(t,e,n){if(!e)return t;t=t||"";const i=H.isFunction(n)?{serialize:n}:n,s=H.getSafeProp(i,"encode")||Ey,r=H.getSafeProp(i,"serialize");let o;if(r?o=r(e,i):o=H.isURLSearchParams(e)?e.toString():new of(e,i).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Ld{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,function(i){i!==null&&e(i)})}}const af={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Ty=typeof URLSearchParams<"u"?URLSearchParams:of,Ay=typeof FormData<"u"?FormData:null,wy=typeof Blob<"u"?Blob:null,Ry={isBrowser:!0,classes:{URLSearchParams:Ty,FormData:Ay,Blob:wy},protocols:["http","https","file","blob","url","data"]},lf=typeof window<"u"&&typeof document<"u",Vc=typeof navigator=="object"&&navigator||void 0,Cy=lf&&(!Vc||["ReactNative","NativeScript","NS"].indexOf(Vc.product)<0),Py=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dy=lf&&window.location.href||"http://localhost",Ly=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lf,hasStandardBrowserEnv:Cy,hasStandardBrowserWebWorkerEnv:Py,navigator:Vc,origin:Dy},Symbol.toStringTag,{value:"Module"})),nn={...Ly,...Ry};function Iy(t,e){return gl(t,new nn.classes.URLSearchParams,{visitor:function(n,i,s,r){return nn.isNode&&H.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}const Id=Im;function Fm(t){if(t>Id)throw new Ue("FormData field is too deeply nested ("+t+" levels). Max depth: "+Id,Ue.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Ny(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)Fm(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function Uy(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Bm(t){function e(n,i,s,r){Fm(r);let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&H.isArray(s)?s.length:o,l?(H.hasOwnProp(s,o)?s[o]=H.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!H.hasOwnProp(s,o)||!H.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&H.isArray(s[o])&&(s[o]=Uy(s[o])),!a)}if(H.isFormData(t)&&H.isFunction(t.entries)){const n={};return H.forEachEntry(t,(i,s)=>{e(Ny(i),s,n,0)}),n}return null}const Gs=(t,e)=>t!=null&&H.hasOwnProp(t,e)?t[e]:void 0;function Oy(t,e,n){if(H.isString(t))try{return(e||JSON.parse)(t),H.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Co={transitional:af,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=H.isObject(e);if(r&&H.isHTMLForm(e)&&(e=new FormData(e)),H.isFormData(e))return s?JSON.stringify(Bm(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=Gs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return Iy(e,l).toString();if((a=H.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Gs(this,"env"),u=c&&c.FormData;return gl(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),Oy(e)):e}],transformResponse:[function(e){const n=Gs(this,"transitional")||Co.transitional,i=n&&n.forcedJSONParsing,s=Gs(this,"responseType"),r=s==="json";if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,Gs(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Ue.from(l,Ue.ERR_BAD_RESPONSE,this,null,Gs(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nn.classes.FormData,Blob:nn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch","query"],t=>{Co.headers[t]={}});function Hl(t,e){const n=this||Co,i=e||n,s=mn.from(i.headers);let r=i.data;return H.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function zm(t){return!!(t&&t.__CANCEL__)}let Po=class extends Ue{constructor(e,n,i){super(e??"canceled",Ue.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function km(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ue("Request failed with status code "+n.status,n.status>=400&&n.status<500?Ue.ERR_BAD_REQUEST:Ue.ERR_BAD_RESPONSE,n.config,n.request,n))}function Fy(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function By(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function zy(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const Ha=(t,e,n=3)=>{let i=0;const s=By(50,250);return zy(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Nd=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Ud=t=>(...e)=>H.asap(()=>t(...e)),ky=nn.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,nn.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(nn.origin),nn.navigator&&/(msie|trident)/i.test(nn.navigator.userAgent)):()=>!0,Hy=nn.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];H.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),H.isString(i)&&a.push(`path=${i}`),H.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),H.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Vy(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Gy(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const Wy=/^https?:(?!\/\/)/i,Xy=/[\t\n\r]/g;function qy(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function $y(t){return qy(t).replace(Xy,"")}function Od(t,e){if(typeof t=="string"&&Wy.test($y(t)))throw new Ue('Invalid URL: missing "//" after protocol',Ue.ERR_INVALID_URL,e)}function Hm(t,e,n,i){Od(e,i);let s=!Vy(e);return t&&(s||n===!1)?(Od(t,i),Gy(t,e)):e}const Fd=t=>t instanceof mn?{...t}:t;function Us(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,d,h){return H.isPlainObject(u)&&H.isPlainObject(f)?H.merge.call({caseless:h},u,f):H.isPlainObject(f)?H.merge({},f):H.isArray(f)?f.slice():f}function s(u,f,d,h){if(H.isUndefined(f)){if(!H.isUndefined(u))return i(void 0,u,d,h)}else return i(u,f,d,h)}function r(u,f){if(!H.isUndefined(f))return i(void 0,f)}function o(u,f){if(H.isUndefined(f)){if(!H.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=H.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!H.isUndefined(f))if(H.isPlainObject(f)){if(H.hasOwnProp(f,u))return f[u]}else return;const d=H.hasOwnProp(t,"transitional")?t.transitional:void 0;if(H.isPlainObject(d)&&H.hasOwnProp(d,u))return d[u]}function l(u,f,d){if(H.hasOwnProp(e,d))return i(u,f);if(H.hasOwnProp(t,d))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,d)=>s(Fd(u),Fd(f),d,!0)};return H.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const d=H.hasOwnProp(c,f)?c[f]:s,h=H.hasOwnProp(t,f)?t[f]:void 0,g=H.hasOwnProp(e,f)?e[f]:void 0,_=d(h,g,f);H.isUndefined(_)&&d!==l||(n[f]=_)}),H.hasOwnProp(e,"validateStatus")&&H.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(H.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const Yy=["content-type","content-length"];function Ky(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,s])=>{Yy.includes(i.toLowerCase())&&t.set(i,s)})}const Zy=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Vm(t){const e=Us({},t),n=d=>H.hasOwnProp(e,d)?e[d]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=mn.from(a),e.url=Om(Hm(c,f,u,e),n("params"),n("paramsSerializer")),l){const d=H.getSafeProp(l,"username")||"",h=H.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(d+":"+(h?Zy(h):"")))}catch(g){throw Ue.from(g,Ue.ERR_BAD_OPTION_VALUE,t)}}if(H.isFormData(i)&&(nn.hasStandardBrowserEnv||nn.hasStandardBrowserWebWorkerEnv||H.isReactNative(i)?a.setContentType(void 0):H.isFunction(i.getHeaders)&&Ky(a,i.getHeaders(),n("formDataHeaderPolicy"))),nn.hasStandardBrowserEnv&&(H.isFunction(s)&&(s=s(e)),s===!0||s==null&&ky(e.url))){const h=r&&o&&Hy.read(o);h&&a.set(r,h)}return e}const Jy=typeof XMLHttpRequest<"u",jy=Jy&&function(t){return new Promise(function(n,i){const s=Vm(t);let r=s.data;const o=mn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,h,g;function _(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function p(){if(!m)return;const b=mn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:b,config:t,request:m};km(function(L){n(L),_()},function(L){i(L),_()},A),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(p)},m.onabort=function(){m&&(i(new Ue("Request aborted",Ue.ECONNABORTED,t,m)),_(),m=null)},m.onerror=function(y){const A=y&&y.message?y.message:"Network Error",T=new Ue(A,Ue.ERR_NETWORK,t,m);T.event=y||null,i(T),_(),m=null},m.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||af;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new Ue(y,A.clarifyTimeoutError?Ue.ETIMEDOUT:Ue.ECONNABORTED,t,m)),_(),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&H.forEach(Dm(o),function(y,A){m.setRequestHeader(A,y)}),H.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([d,g]=Ha(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,h]=Ha(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=b=>{m&&(i(!b||b.type?new Po(null,t,m):b),m.abort(),_(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const M=Fy(s.url);if(M&&!nn.protocols.includes(M)){i(new Ue("Unsupported protocol "+M+":",Ue.ERR_BAD_REQUEST,t)),_();return}m.send(r||null)})},Qy=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof Ue?c:new Po(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new Ue(`timeout of ${e}ms exceeded`,Ue.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>H.asap(o),a},eS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},tS=async function*(t,e){for await(const n of nS(t))yield*eS(n,e)},nS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Bd=(t,e,n,i)=>{const s=tS(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Va=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,iS=(t,e,n)=>e+2<n&&Va(t.charCodeAt(e+1))&&Va(t.charCodeAt(e+2));function sS(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let h=0;h<a;h++)if(i.charCodeAt(h)===37&&h+2<a){const g=i.charCodeAt(h+1),_=i.charCodeAt(h+2);Va(g)&&Va(_)&&(o-=2,h+=2)}let l=0,c=a-1;const u=h=>h>=2&&i.charCodeAt(h-2)===37&&i.charCodeAt(h-1)===51&&(i.charCodeAt(h)===68||i.charCodeAt(h)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const d=Math.floor(o/4)*3-(l||0);return d>0?d:0}let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&iS(i,o,a))r+=1,o+=2;else if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const cf="1.18.1",zd=64*1024,{isFunction:Go}=H,rS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),kd=t=>{if(!H.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Hd=(t,...e)=>{try{return!!t(...e)}catch{return!1}},oS=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},aS=t=>{const e=H.global!==void 0&&H.global!==null?H.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=H.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?Go(s):typeof fetch=="function",l=Go(r),c=Go(o);if(!a)return!1;const u=a&&Go(n),f=a&&(typeof i=="function"?(p=>M=>p.encode(M))(new i):async p=>new Uint8Array(await new r(p).arrayBuffer())),d=l&&u&&Hd(()=>{let p=!1;const M=new r(nn.origin,{body:new n,method:"POST",get duplex(){return p=!0,"half"}}),b=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),p&&!b}),h=c&&u&&Hd(()=>H.isReadableStream(new o("").body)),g={stream:h&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!g[p]&&(g[p]=(M,b)=>{let y=M&&M[p];if(y)return y.call(M);throw new Ue(`Response type '${p}' is not supported`,Ue.ERR_NOT_SUPPORT,b)})});const _=async p=>{if(p==null)return 0;if(H.isBlob(p))return p.size;if(H.isSpecCompliantForm(p))return(await new r(nn.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(H.isArrayBufferView(p)||H.isArrayBuffer(p))return p.byteLength;if(H.isURLSearchParams(p)&&(p=p+""),H.isString(p))return(await f(p)).byteLength},m=async(p,M)=>{const b=H.toFiniteNumber(p.getContentLength());return b??_(M)};return async p=>{let{url:M,method:b,data:y,signal:A,cancelToken:T,timeout:L,onDownloadProgress:x,onUploadProgress:R,responseType:U,headers:I,withCredentials:k="same-origin",fetchOptions:ie,maxContentLength:oe,maxBodyLength:X}=Vm(p);const te=H.isNumber(oe)&&oe>-1,G=H.isNumber(X)&&X>-1,Z=K=>H.hasOwnProp(p,K)?p[K]:void 0;let he=s||fetch;U=U?(U+"").toLowerCase():"text";let ye=Qy([A,T&&T.toAbortSignal()],L),me=null;const Me=ye&&ye.unsubscribe&&(()=>{ye.unsubscribe()});let tt,lt=null;const st=()=>new Ue("Request body larger than maxBodyLength limit",Ue.ERR_BAD_REQUEST,p,me);try{let K;const O=Z("auth");if(O){const V=H.getSafeProp(O,"username")||"",j=H.getSafeProp(O,"password")||"";K={username:V,password:j}}if(oS(M)){const V=new URL(M,nn.origin);if(!K&&(V.username||V.password)){const j=kd(V.username),_e=kd(V.password);K={username:j,password:_e}}(V.username||V.password)&&(V.username="",V.password="",M=V.href)}if(K&&(I.delete("authorization"),I.set("Authorization","Basic "+btoa(rS((K.username||"")+":"+(K.password||""))))),te&&typeof M=="string"&&M.startsWith("data:")&&sS(M)>oe)throw new Ue("maxContentLength size of "+oe+" exceeded",Ue.ERR_BAD_RESPONSE,p,me);if(G&&b!=="get"&&b!=="head"){const V=await _(y);if(typeof V=="number"&&isFinite(V)&&(tt=V,V>X))throw st()}const Y=G&&(H.isReadableStream(y)||H.isStream(y)),ue=(V,j,_e)=>Bd(V,zd,le=>{if(G&&le>X)throw lt=st();j&&j(le)},_e);if(d&&b!=="get"&&b!=="head"&&(R||Y)){if(tt=tt??await m(I,y),tt!==0||Y){let V=new r(M,{method:"POST",body:y,duplex:"half"}),j;if(H.isFormData(y)&&(j=V.headers.get("content-type"))&&I.setContentType(j),V.body){const[_e,le]=R&&Nd(tt,Ha(Ud(R)))||[];y=ue(V.body,_e,le)}}}else if(Y&&!l&&u&&b!=="get"&&b!=="head")y=ue(y);else if(Y&&l&&!d&&b!=="get"&&b!=="head")throw new Ue("Stream request bodies are not supported by the current fetch implementation",Ue.ERR_NOT_SUPPORT,p,me);H.isString(k)||(k=k?"include":"omit");const xe=l&&"credentials"in r.prototype;if(H.isFormData(y)){const V=I.getContentType();V&&/^multipart\/form-data/i.test(V)&&!/boundary=/i.test(V)&&I.delete("content-type")}I.set("User-Agent","axios/"+cf,!1);const be={...ie,signal:ye,method:b.toUpperCase(),headers:Dm(I.normalize()),body:y,duplex:"half",credentials:xe?k:void 0};me=l&&new r(M,be);let w=await(l?he(me,ie):he(M,be));const P=mn.from(w.headers);if(te){const V=H.toFiniteNumber(P.getContentLength());if(V!=null&&V>oe)throw new Ue("maxContentLength size of "+oe+" exceeded",Ue.ERR_BAD_RESPONSE,p,me)}const F=h&&(U==="stream"||U==="response");if(h&&w.body&&(x||te||F&&Me)){const V={};["status","statusText","headers"].forEach(Le=>{V[Le]=w[Le]});const j=H.toFiniteNumber(P.getContentLength()),[_e,le]=x&&Nd(j,Ha(Ud(x),!0))||[];let ve=0;const ce=Le=>{if(te&&(ve=Le,ve>oe))throw new Ue("maxContentLength size of "+oe+" exceeded",Ue.ERR_BAD_RESPONSE,p,me);_e&&_e(Le)};w=new o(Bd(w.body,zd,ce,()=>{le&&le(),Me&&Me()}),V)}U=U||"text";let $=await g[H.findKey(g,U)||"text"](w,p);if(te&&!h&&!F){let V;if($!=null&&(typeof $.byteLength=="number"?V=$.byteLength:typeof $.size=="number"?V=$.size:typeof $=="string"&&(V=typeof i=="function"?new i().encode($).byteLength:$.length)),typeof V=="number"&&V>oe)throw new Ue("maxContentLength size of "+oe+" exceeded",Ue.ERR_BAD_RESPONSE,p,me)}return!F&&Me&&Me(),await new Promise((V,j)=>{km(V,j,{data:$,headers:mn.from(w.headers),status:w.status,statusText:w.statusText,config:p,request:me})})}catch(K){if(Me&&Me(),ye&&ye.aborted&&ye.reason instanceof Ue){const O=ye.reason;throw O.config=p,me&&(O.request=me),K!==O&&Object.defineProperty(O,"cause",{__proto__:null,value:K,writable:!0,enumerable:!1,configurable:!0}),O}if(lt)throw me&&!lt.request&&(lt.request=me),lt;if(K instanceof Ue)throw me&&!K.request&&(K.request=me),K;if(K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)){const O=new Ue("Network Error",Ue.ERR_NETWORK,p,me,K&&K.response);throw Object.defineProperty(O,"cause",{__proto__:null,value:K.cause||K,writable:!0,enumerable:!1,configurable:!0}),O}throw Ue.from(K,K&&K.code,p,me,K&&K.response)}}},lS=new Map,Gm=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=lS;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:aS(e)),u=c;return c};Gm();const uf={http:Sy,xhr:jy,fetch:{get:Gm}};H.forEach(uf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Vd=t=>`- ${t}`,cS=t=>H.isFunction(t)||t===null||t===!1;function uS(t,e){t=H.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!cS(i)&&(s=uf[(a=String(i)).toLowerCase()],s===void 0))throw new Ue(`Unknown adapter '${a}'`);if(s&&(H.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Vd).join(`
`):" "+Vd(o[0]):"as no adapter specified";throw new Ue("There is no suitable adapter to dispatch the request "+a,Ue.ERR_NOT_SUPPORT)}return s}const Wm={getAdapter:uS,adapters:uf};function Vl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Po(null,t)}function Gd(t){return Vl(t),t.headers=mn.from(t.headers),t.data=Hl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Wm.getAdapter(t.adapter||Co.adapter,t)(t).then(function(i){Vl(t),t.response=i;try{i.data=Hl.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=mn.from(i.headers),i},function(i){if(!zm(i)&&(Vl(t),i&&i.response)){t.response=i.response;try{i.response.data=Hl.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=mn.from(i.response.headers)}return Promise.reject(i)})}const _l={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{_l[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Wd={};_l.transitional=function(e,n,i){function s(r,o){return"[Axios v"+cf+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Ue(s(o," has been removed"+(n?" in "+n:"")),Ue.ERR_DEPRECATED);return n&&!Wd[o]&&(Wd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};_l.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function fS(t,e,n){if(typeof t!="object"||t===null)throw new Ue("options must be an object",Ue.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Ue("option "+r+" must be "+l,Ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ue("Unknown option "+r,Ue.ERR_BAD_OPTION)}}const Sa={assertOptions:fS,validators:_l},ln=Sa.validators;let Is=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ld,response:new Ld}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Us(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Sa.assertOptions(i,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean),legacyInterceptorReqResOrdering:ln.transitional(ln.boolean),advertiseZstdAcceptEncoding:ln.transitional(ln.boolean),validateStatusUndefinedResolves:ln.transitional(ln.boolean)},!1),s!=null&&(H.isFunction(s)?n.paramsSerializer={serialize:s}:Sa.assertOptions(s,{encode:ln.function,serialize:ln.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Sa.assertOptions(n,{baseUrl:ln.spelling("baseURL"),withXsrfToken:ln.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&H.merge(r.common,r[n.method]);r&&H.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),n.headers=mn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(n)===!1)return;l=l&&_.synchronous;const m=n.transitional||af;m&&m.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,f=0,d;if(!l){const g=[Gd.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let h=n;for(;f<d;){const g=a[f++],_=a[f++];try{h=g(h)}catch(m){_.call(this,m);break}}try{u=Gd.call(this,h)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Us(this.defaults,e);const n=Hm(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Om(n,e.params,e.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(e){Is.prototype[e]=function(n,i){return this.request(Us(i||{},{method:e,url:n,data:i&&H.hasOwnProp(i,"data")?i.data:void 0}))}});H.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(Us(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Is.prototype[e]=n(),e!=="query"&&(Is.prototype[e+"Form"]=n(!0))});let dS=class Xm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Po(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Xm(function(s){e=s}),cancel:e}}};function hS(t){return function(n){return t.apply(null,n)}}function pS(t){return H.isObject(t)&&t.isAxiosError===!0}const Gc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Gc).forEach(([t,e])=>{Gc[e]=t});function qm(t){const e=new Is(t),n=Mm(Is.prototype.request,e);return H.extend(n,Is.prototype,e,{allOwnKeys:!0}),H.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return qm(Us(t,s))},n}const Gt=qm(Co);Gt.Axios=Is;Gt.CanceledError=Po;Gt.CancelToken=dS;Gt.isCancel=zm;Gt.VERSION=cf;Gt.toFormData=gl;Gt.AxiosError=Ue;Gt.Cancel=Gt.CanceledError;Gt.all=function(e){return Promise.all(e)};Gt.spread=hS;Gt.isAxiosError=pS;Gt.mergeConfig=Us;Gt.AxiosHeaders=mn;Gt.formToJSON=t=>Bm(H.isHTMLForm(t)?new FormData(t):t);Gt.getAdapter=Wm.getAdapter;Gt.HttpStatusCode=Gc;Gt.default=Gt;const{Axios:wC,AxiosError:RC,CanceledError:CC,isCancel:PC,CancelToken:DC,VERSION:LC,all:IC,Cancel:NC,isAxiosError:UC,spread:OC,toFormData:FC,AxiosHeaders:BC,HttpStatusCode:zC,formToJSON:kC,getAdapter:HC,mergeConfig:VC,create:GC}=Gt,Vt=Gt.create({baseURL:"/api"}),mS={class:"page-card"},gS={key:0,class:"placeholder"},_S={class:"summary-grid"},vS={class:"summary-label"},xS={class:"summary-note"},yS={class:"content-grid"},SS={class:"panel"},MS={key:1,class:"placeholder"},bS={class:"panel"},ES={key:0,class:"table"},TS={key:1,class:"placeholder"},AS={key:0,class:"alert"},wS={__name:"HomePage",setup(t){const e=$e([]),n=$e([]),i=$e([]),s=$e(!0),r=$e(""),o=u=>u?new Date(u).toLocaleString("zh-TW"):"—",a=_t(()=>n.value.find(u=>!u.endTime)),l=_t(()=>[{title:"使用者數",value:e.value.length,detail:"資料庫已建立的使用者"},{title:"作業紀錄",value:n.value.length,detail:"所有作業資料"},{title:"辨識結果",value:i.value.length,detail:"所有物件辨識資料"}]);return hs(async()=>{var u,f;s.value=!0,r.value="";try{const[d,h,g]=await Promise.all([Vt.get("/users"),Vt.get("/operations"),Vt.get("/detections")]);e.value=d.data,n.value=h.data,i.value=g.data}catch(d){r.value=((f=(u=d.response)==null?void 0:u.data)==null?void 0:f.error)||"無法讀取資料庫資料，請確認後端服務與 MongoDB 是否已啟動。"}finally{s.value=!1}}),(u,f)=>{var d,h;return Te(),Re("section",mS,[f[7]||(f[7]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Dashboard"),C("h2",null,"系統總覽")],-1)),s.value?(Te(),Re("p",gS,"正在讀取資料庫資料…")):(Te(),Re(At,{key:1},[C("div",_S,[(Te(!0),Re(At,null,Jn(l.value,g=>(Te(),Re("article",{key:g.title,class:"summary-card"},[C("p",vS,we(g.title),1),C("h3",null,we(g.value),1),C("p",xS,we(g.detail),1)]))),128))]),C("div",yS,[C("article",SS,[f[4]||(f[4]=C("h3",null,"目前作業",-1)),a.value?(Te(),Re(At,{key:0},[C("p",null,[f[0]||(f[0]=C("strong",null,"作業 ID：",-1)),Tt(we(a.value._id),1)]),C("p",null,[f[1]||(f[1]=C("strong",null,"使用者：",-1)),Tt(we(((d=a.value.userId)==null?void 0:d.name)||((h=a.value.userId)==null?void 0:h.email)||"未提供"),1)]),C("p",null,[f[2]||(f[2]=C("strong",null,"開始時間：",-1)),Tt(we(o(a.value.startTime)),1)]),C("p",null,[f[3]||(f[3]=C("strong",null,"說明：",-1)),Tt(we(a.value.description||"—"),1)])],64)):(Te(),Re("p",MS,"目前沒有進行中的作業。"))]),C("article",bS,[f[6]||(f[6]=C("h3",null,"最新辨識結果",-1)),i.value.length?(Te(),Re("table",ES,[f[5]||(f[5]=C("thead",null,[C("tr",null,[C("th",null,"時間"),C("th",null,"物件"),C("th",null,"深度")])],-1)),C("tbody",null,[(Te(!0),Re(At,null,Jn(i.value.slice(0,6),g=>(Te(),Re("tr",{key:g._id},[C("td",null,we(o(g.timestamp)),1),C("td",null,we(g.objectClass||"未分類"),1),C("td",null,we(g.depth??"—"),1)]))),128))])])):(Te(),Re("p",TS,"尚無辨識資料。"))])]),r.value?(Te(),Re("p",AS,we(r.value),1)):$t("",!0)],64))])}}},RS={class:"page-card account-page"},CS={class:"section-title"},PS={class:"panel account-panel"},DS={key:0},LS=["autocomplete"],IS={key:1},NS=["disabled"],US={key:0,class:"alert"},OS={__name:"AccountLoginPage",setup(t){const e=tf(),n=ym(),i=$e(n.query.mode==="register"?"register":"login"),s=$e(!1),r=$e(""),o=ds({name:"",email:"",password:"",confirmPassword:""}),a=()=>{i.value=i.value==="login"?"register":"login",r.value="",o.password="",o.confirmPassword=""};Ii(()=>n.query.mode,c=>{(c==="register"||c==="login")&&(i.value=c)});const l=async()=>{var c,u;if(r.value="",i.value==="register"&&o.password!==o.confirmPassword){r.value="兩次輸入的密碼不一致。";return}s.value=!0;try{const f=i.value==="login"?{email:o.email,password:o.password}:{name:o.name,email:o.email,password:o.password},d=await Vt.post(`/auth/${i.value==="login"?"login":"register"}`,f);Sm(d.data),e.replace(typeof n.query.redirect=="string"?n.query.redirect:"/")}catch(f){r.value=((u=(c=f.response)==null?void 0:c.data)==null?void 0:u.error)||"目前無法完成帳戶操作，請稍後再試。"}finally{s.value=!1}};return(c,u)=>(Te(),Re("section",RS,[C("div",CS,[u[4]||(u[4]=C("p",{class:"eyebrow"},"Account",-1)),C("h2",null,we(i.value==="login"?"登入平台":"建立帳號"),1)]),C("article",PS,[C("form",{class:"form-grid",onSubmit:Y0(l,["prevent"])},[i.value==="register"?(Te(),Re("label",DS,[u[5]||(u[5]=Tt("使用者名稱",-1)),Qt(C("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>o.name=f),type:"text",autocomplete:"name",required:""},null,512),[[$n,o.name,void 0,{trim:!0}]])])):$t("",!0),C("label",null,[u[6]||(u[6]=Tt("電子信箱",-1)),Qt(C("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>o.email=f),type:"email",autocomplete:"email",required:""},null,512),[[$n,o.email,void 0,{trim:!0}]])]),C("label",null,[u[7]||(u[7]=Tt("密碼",-1)),Qt(C("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>o.password=f),type:"password",autocomplete:i.value==="login"?"current-password":"new-password",minlength:"8",required:""},null,8,LS),[[$n,o.password]])]),i.value==="register"?(Te(),Re("label",IS,[u[8]||(u[8]=Tt("確認密碼",-1)),Qt(C("input",{"onUpdate:modelValue":u[3]||(u[3]=f=>o.confirmPassword=f),type:"password",autocomplete:"new-password",minlength:"8",required:""},null,512),[[$n,o.confirmPassword]])])):$t("",!0),C("button",{type:"submit",disabled:s.value},we(s.value?"處理中…":i.value==="login"?"登入":"建立帳號"),9,NS)],32),r.value?(Te(),Re("p",US,we(r.value),1)):$t("",!0),C("button",{type:"button",class:"account-switch",onClick:a},we(i.value==="login"?"尚未註冊？建立帳號":"已有帳號？返回登入"),1)])]))}},FS={class:"page-card profile-page"},BS={class:"panel profile-panel"},zS={key:0,class:"placeholder"},kS={class:"profile-avatar-large"},HS={class:"profile-fields"},VS={class:"profile-field-row"},GS={class:"profile-value"},WS=["disabled"],XS=["disabled"],qS={class:"profile-field-row"},$S={class:"profile-value"},YS=["disabled"],KS=["disabled"],ZS={class:"profile-field-row"},JS={class:"profile-value"},jS={key:0,class:"alert"},QS={key:2,class:"alert"},eM={__name:"AccountProfilePage",setup(t){const e=tf(),n=$e(""),i=$e(!0),s=$e(!1),r=$e(""),o=$e(null),a=ds({name:"",email:""}),l=async()=>{var h,g;try{o.value=(await Vt.get(`/users/${co.value.id}`)).data,a.name=o.value.name,a.email=o.value.email}catch(_){r.value=((g=(h=_.response)==null?void 0:h.data)==null?void 0:g.error)||"無法讀取帳戶資料。"}finally{i.value=!1}},c=h=>{n.value=h,r.value="",a[h]=o.value[h]},u=()=>{n.value&&(a[n.value]=o.value[n.value]),n.value="",r.value=""},f=async h=>{var g,_;s.value=!0,r.value="";try{const m=(await Vt.patch(`/users/${co.value.id}`,{[h]:a[h]})).data;o.value=m,rx(m),n.value=""}catch(m){r.value=((_=(g=m.response)==null?void 0:g.data)==null?void 0:_.error)||"無法更新帳戶資料。"}finally{s.value=!1}},d=()=>{ox(),e.push("/guide")};return hs(l),(h,g)=>(Te(),Re("section",FS,[g[11]||(g[11]=C("div",{class:"section-title profile-title"},[C("p",{class:"eyebrow"},"Account"),C("h2",null,"帳戶資料")],-1)),C("article",BS,[i.value?(Te(),Re("p",zS,"正在讀取帳戶資料…")):o.value?(Te(),Re(At,{key:1},[C("div",kS,we(o.value.name.charAt(0).toUpperCase()),1),C("div",HS,[C("div",VS,[g[8]||(g[8]=C("span",{class:"profile-label"},"使用者名稱",-1)),C("div",GS,[n.value==="name"?(Te(),Re(At,{key:0},[Qt(C("input",{"onUpdate:modelValue":g[0]||(g[0]=_=>a.name=_),type:"text",autofocus:"",onKeyup:g[1]||(g[1]=ud(_=>f("name"),["enter"]))},null,544),[[$n,a.name,void 0,{trim:!0}]]),C("button",{type:"button",class:"field-save",disabled:s.value,onClick:g[2]||(g[2]=_=>f("name"))},"✓",8,WS),C("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,XS)],64)):(Te(),Re(At,{key:1},[C("span",null,we(o.value.name),1),C("button",{type:"button",class:"field-edit",title:"修改使用者名稱",onClick:g[3]||(g[3]=_=>c("name"))},"✎")],64))])]),C("div",qS,[g[9]||(g[9]=C("span",{class:"profile-label"},"電子信箱",-1)),C("div",$S,[n.value==="email"?(Te(),Re(At,{key:0},[Qt(C("input",{"onUpdate:modelValue":g[4]||(g[4]=_=>a.email=_),type:"email",autofocus:"",onKeyup:g[5]||(g[5]=ud(_=>f("email"),["enter"]))},null,544),[[$n,a.email,void 0,{trim:!0}]]),C("button",{type:"button",class:"field-save",disabled:s.value,onClick:g[6]||(g[6]=_=>f("email"))},"✓",8,YS),C("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,KS)],64)):(Te(),Re(At,{key:1},[C("span",null,we(o.value.email),1),C("button",{type:"button",class:"field-edit",title:"修改電子信箱",onClick:g[7]||(g[7]=_=>c("email"))},"✎")],64))])]),C("div",ZS,[g[10]||(g[10]=C("span",{class:"profile-label"},"註冊時間",-1)),C("div",JS,[C("span",null,we(new Date(o.value.signUpTime).toLocaleString("zh-TW")),1)])])]),r.value?(Te(),Re("p",jS,we(r.value),1)):$t("",!0),C("button",{type:"button",class:"logout-danger",onClick:d},"登出帳戶")],64)):(Te(),Re("p",QS,we(r.value),1))])]))}},vl=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},tM={},nM={class:"page-card"};function iM(t,e){return Te(),Re("section",nM,[...e[0]||(e[0]=[ju('<div class="section-title"><p class="eyebrow">Account</p><h2>密碼修改</h2></div><article class="panel"><h3>修改密碼</h3><div class="form-grid"><input type="password" placeholder="舊密碼"><input type="password" placeholder="新密碼"><input type="password" placeholder="確認新密碼"><button type="button">確認修改</button></div></article>',2)])])}const sM=vl(tM,[["render",iM]]),rM={},oM={class:"page-card"};function aM(t,e){return Te(),Re("section",oM,[...e[0]||(e[0]=[C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Guide"),C("h2",null,"網站操作指引")],-1),C("article",{class:"panel"},[C("h3",null,"使用步驟"),C("ul",{class:"bullet-list"},[C("li",null,"選擇對應的定位任務頁面。"),C("li",null,"確認目前作業狀態與資料來源。"),C("li",null,"透過歷史資料查詢前次操作結果。")])],-1)])])}const lM=vl(rM,[["render",aM]]),cM={},uM={class:"page-card"};function fM(t,e){return Te(),Re("section",uM,[...e[0]||(e[0]=[C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Technology"),C("h2",null,"定位技術介紹")],-1),C("article",{class:"panel"},[C("h3",null,"系統技術架構"),C("p",null,"本系統結合電腦視覺、深度估測與即時串流，讓終端定位作業可快速觀測與追溯。")],-1)])])}const dM=vl(cM,[["render",fM]]),hM={class:"page-card"},pM={key:0,class:"placeholder"},mM={key:1,class:"table table-spaced"},gM={key:2,class:"placeholder"},_M={key:3,class:"alert"},vM={__name:"ObjectQueryPage",setup(t){const e=$e([]),n=$e(""),i=$e(!0),s=$e(""),r=a=>a?new Date(a).toLocaleString("zh-TW"):"—",o=_t(()=>e.value.filter(a=>{var l;return(l=a.objectClass)==null?void 0:l.toLowerCase().includes(n.value.toLowerCase())}));return hs(async()=>{try{e.value=(await Vt.get("/detections")).data}catch{s.value="無法讀取辨識資料。"}finally{i.value=!1}}),(a,l)=>(Te(),Re("section",hM,[l[2]||(l[2]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"History"),C("h2",null,"物件辨識紀錄")],-1)),Qt(C("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"search",placeholder:"依物件名稱篩選"},null,512),[[$n,n.value]]),i.value?(Te(),Re("p",pM,"正在讀取資料…")):o.value.length?(Te(),Re("table",mM,[l[1]||(l[1]=C("thead",null,[C("tr",null,[C("th",null,"時間"),C("th",null,"物件"),C("th",null,"深度"),C("th",null,"作業 ID")])],-1)),C("tbody",null,[(Te(!0),Re(At,null,Jn(o.value,c=>{var u;return Te(),Re("tr",{key:c._id},[C("td",null,we(r(c.timestamp)),1),C("td",null,we(c.objectClass||"未分類"),1),C("td",null,we(c.depth??"—"),1),C("td",null,we(((u=c.operationId)==null?void 0:u._id)||c.operationId),1)])}),128))])])):(Te(),Re("p",gM,"沒有符合的辨識資料。")),s.value?(Te(),Re("p",_M,we(s.value),1)):$t("",!0)]))}},xM={class:"page-card"},yM={key:0,class:"placeholder"},SM={key:1,class:"table"},MM={key:2,class:"placeholder"},bM={key:3,class:"alert"},EM={__name:"TaskHistoryPage",setup(t){const e=$e([]),n=$e(!0),i=$e(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return hs(async()=>{try{e.value=(await Vt.get("/operations")).data}catch{i.value="無法讀取作業紀錄。"}finally{n.value=!1}}),(r,o)=>(Te(),Re("section",xM,[o[1]||(o[1]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"History"),C("h2",null,"任務歷程")],-1)),n.value?(Te(),Re("p",yM,"正在讀取資料…")):e.value.length?(Te(),Re("table",SM,[o[0]||(o[0]=C("thead",null,[C("tr",null,[C("th",null,"開始時間"),C("th",null,"結束時間"),C("th",null,"使用者"),C("th",null,"狀態")])],-1)),C("tbody",null,[(Te(!0),Re(At,null,Jn(e.value,a=>{var l,c;return Te(),Re("tr",{key:a._id},[C("td",null,we(s(a.startTime)),1),C("td",null,we(s(a.endTime)),1),C("td",null,we(((l=a.userId)==null?void 0:l.name)||((c=a.userId)==null?void 0:c.email)||"未提供"),1),C("td",null,we(a.endTime?"已完成":"進行中"),1)])}),128))])])):(Te(),Re("p",MM,"尚無任務資料。")),i.value?(Te(),Re("p",bM,we(i.value),1)):$t("",!0)]))}},TM={class:"page-card"},AM={key:0,class:"placeholder"},wM={key:1,class:"table"},RM={key:2,class:"placeholder"},CM={key:3,class:"alert"},PM={__name:"OperationLogPage",setup(t){const e=$e([]),n=$e(!0),i=$e(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return hs(async()=>{try{e.value=(await Vt.get("/operations")).data}catch{i.value="無法讀取操作紀錄。"}finally{n.value=!1}}),(r,o)=>(Te(),Re("section",TM,[o[1]||(o[1]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"History"),C("h2",null,"操作紀錄")],-1)),n.value?(Te(),Re("p",AM,"正在讀取資料…")):e.value.length?(Te(),Re("table",wM,[o[0]||(o[0]=C("thead",null,[C("tr",null,[C("th",null,"作業 ID"),C("th",null,"開始時間"),C("th",null,"結束時間"),C("th",null,"說明")])],-1)),C("tbody",null,[(Te(!0),Re(At,null,Jn(e.value,a=>(Te(),Re("tr",{key:a._id},[C("td",null,we(a._id),1),C("td",null,we(s(a.startTime)),1),C("td",null,we(s(a.endTime)),1),C("td",null,we(a.description||"—"),1)]))),128))])])):(Te(),Re("p",RM,"尚無操作紀錄。")),i.value?(Te(),Re("p",CM,we(i.value),1)):$t("",!0)]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ff="185",fr={ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},DM=0,Xd=1,LM=2,Ma=1,IM=2,eo=3,ls=0,Cn=1,Xn=2,Oi=0,dr=1,qd=2,$d=3,Yd=4,NM=5,Es=100,UM=101,OM=102,FM=103,BM=104,zM=200,kM=201,HM=202,VM=203,Wc=204,Xc=205,GM=206,WM=207,XM=208,qM=209,$M=210,YM=211,KM=212,ZM=213,JM=214,qc=0,$c=1,Yc=2,br=3,Kc=4,Zc=5,Jc=6,jc=7,$m=0,jM=1,QM=2,gi=0,Ym=1,Km=2,Zm=3,Jm=4,jm=5,Qm=6,eg=7,tg=300,Os=301,Er=302,Gl=303,Wl=304,xl=306,Qc=1e3,Ni=1001,eu=1002,rn=1003,eb=1004,Wo=1005,hn=1006,Xl=1007,Rs=1008,Nn=1009,ng=1010,ig=1011,yo=1012,df=1013,yi=1014,hi=1015,Hi=1016,hf=1017,pf=1018,So=1020,sg=35902,rg=35899,og=1021,ag=1022,Yn=1023,Vi=1026,Cs=1027,lg=1028,mf=1029,Fs=1030,gf=1031,_f=1033,ba=33776,Ea=33777,Ta=33778,Aa=33779,tu=35840,nu=35841,iu=35842,su=35843,ru=36196,ou=37492,au=37496,lu=37488,cu=37489,Ga=37490,uu=37491,fu=37808,du=37809,hu=37810,pu=37811,mu=37812,gu=37813,_u=37814,vu=37815,xu=37816,yu=37817,Su=37818,Mu=37819,bu=37820,Eu=37821,Tu=36492,Au=36494,wu=36495,Ru=36283,Cu=36284,Wa=36285,Pu=36286,tb=3200,Du=0,nb=1,ss="",zn="srgb",Xa="srgb-linear",qa="linear",Et="srgb",Ws=7680,Kd=519,ib=512,sb=513,rb=514,vf=515,ob=516,ab=517,xf=518,lb=519,Zd=35044,Jd="300 es",pi=2e3,Mo=2001;function cb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $a(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ub(){const t=$a("canvas");return t.style.display="block",t}const jd={};function Qd(...t){const e="THREE."+t.shift();console.log(e,...t)}function cg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Qe(...t){t=cg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function vt(...t){t=cg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function hr(...t){const e=t.join(" ");e in jd||(jd[e]=!0,Qe(...t))}function fb(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const db={[qc]:$c,[Yc]:Jc,[Kc]:jc,[br]:Zc,[$c]:qc,[Jc]:Yc,[jc]:Kc,[Zc]:br};class ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wa=Math.PI/180,Lu=180/Math.PI;function Do(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function ht(t,e,n){return Math.max(e,Math.min(n,t))}function hb(t,e){return(t%e+e)%e}function ql(t,e,n){return(1-n)*t+n*e}function Gr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pb={DEG2RAD:wa},Af=class Af{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Af.prototype.isVector2=!0;let nt=Af;class cs{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(f!==_||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*_;m<0&&(d=-d,h=-h,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),b=Math.sin(M);p=Math.sin(p*M)/b,a=Math.sin(a*M)/b,l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+_*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+_*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wf=class wf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(eh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wf.prototype.isVector3=!0;let q=wf;const $l=new q,eh=new cs,Rf=class Rf{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=s[0],m=s[3],p=s[6],M=s[1],b=s[4],y=s[7],A=s[2],T=s[5],L=s[8];return r[0]=o*_+a*M+l*A,r[3]=o*m+a*b+l*T,r[6]=o*p+a*y+l*L,r[1]=c*_+u*M+f*A,r[4]=c*m+u*b+f*T,r[7]=c*p+u*y+f*L,r[2]=d*_+h*M+g*A,r[5]=d*m+h*b+g*T,r[8]=d*p+h*y+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,g=n*f+i*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yl.makeScale(e,n)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yl.makeRotation(-e)),this}translate(e,n){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rf.prototype.isMatrix3=!0;let ot=Rf;const Yl=new ot,th=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mb(){const t={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?qa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Xa]:{primaries:e,whitePoint:i,transfer:qa,toXYZ:th,fromXYZ:nh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:th,fromXYZ:nh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),t}const mt=mb();function Fi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xs;class gb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=$a("canvas")),Xs.width=e.width,Xs.height=e.height;const s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$a("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fi(n[i]/255)*255):n[i]=Fi(n[i]);return{data:n,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _b=0;class yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Kl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let vb=0;const Zl=new q;class Sn extends ps{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=Ni,s=Ni,r=hn,o=Rs,a=Yn,l=Nn,c=Sn.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Do(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Qe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qc:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qc:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=tg;Sn.DEFAULT_ANISOTROPY=1;const Cf=class Cf{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(c+1)/2,y=(h+1)/2,A=(p+1)/2,T=(u+d)/4,L=(f+_)/4,x=(g+m)/4;return b>y&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=L/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=x/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=L/r,s=x/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this.w=ht(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this.w=ht(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cf.prototype.isVector4=!0;let Ot=Cf;class xb extends ps{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new Sn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new yf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends xb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ug extends Sn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yb extends Sn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qa=class Qa{constructor(e,n,i,s,r,o,a,l,c,u,f,d,h,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,h,g,_,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qa().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sb,e,Mb)}lookAt(e,n,i){const s=this.elements;return Dn.subVectors(e,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Yi.crossVectors(i,Dn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Yi.crossVectors(i,Dn)),Yi.normalize(),Xo.crossVectors(Dn,Yi),s[0]=Yi.x,s[4]=Xo.x,s[8]=Dn.x,s[1]=Yi.y,s[5]=Xo.y,s[9]=Dn.y,s[2]=Yi.z,s[6]=Xo.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],b=i[7],y=i[11],A=i[15],T=s[0],L=s[4],x=s[8],R=s[12],U=s[1],I=s[5],k=s[9],ie=s[13],oe=s[2],X=s[6],te=s[10],G=s[14],Z=s[3],he=s[7],ye=s[11],me=s[15];return r[0]=o*T+a*U+l*oe+c*Z,r[4]=o*L+a*I+l*X+c*he,r[8]=o*x+a*k+l*te+c*ye,r[12]=o*R+a*ie+l*G+c*me,r[1]=u*T+f*U+d*oe+h*Z,r[5]=u*L+f*I+d*X+h*he,r[9]=u*x+f*k+d*te+h*ye,r[13]=u*R+f*ie+d*G+h*me,r[2]=g*T+_*U+m*oe+p*Z,r[6]=g*L+_*I+m*X+p*he,r[10]=g*x+_*k+m*te+p*ye,r[14]=g*R+_*ie+m*G+p*me,r[3]=M*T+b*U+y*oe+A*Z,r[7]=M*L+b*I+y*X+A*he,r[11]=M*x+b*k+y*te+A*ye,r[15]=M*R+b*ie+y*G+A*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=l*h-c*d,b=a*h-c*f,y=a*d-l*f,A=o*h-c*u,T=o*d-l*u,L=o*f-a*u;return n*(_*M-m*b+p*y)-i*(g*M-m*A+p*T)+s*(g*b-_*A+p*L)-r*(g*y-_*T+m*L)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=n*a-i*o,b=n*l-s*o,y=n*c-r*o,A=i*l-s*a,T=i*c-r*a,L=s*c-r*l,x=u*_-f*g,R=u*m-d*g,U=u*p-h*g,I=f*m-d*_,k=f*p-h*_,ie=d*p-h*m,oe=M*ie-b*k+y*I+A*U-T*R+L*x;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/oe;return e[0]=(a*ie-l*k+c*I)*X,e[1]=(s*k-i*ie-r*I)*X,e[2]=(_*L-m*T+p*A)*X,e[3]=(d*T-f*L-h*A)*X,e[4]=(l*U-o*ie-c*R)*X,e[5]=(n*ie-s*U+r*R)*X,e[6]=(m*y-g*L-p*b)*X,e[7]=(u*L-d*y+h*b)*X,e[8]=(o*k-a*U+c*x)*X,e[9]=(i*U-n*k-r*x)*X,e[10]=(g*T-_*y+p*M)*X,e[11]=(f*y-u*T-h*M)*X,e[12]=(a*R-o*I-l*x)*X,e[13]=(n*I-i*R+s*x)*X,e[14]=(_*b-g*A-m*M)*X,e[15]=(u*A-f*b+d*M)*X,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,g=r*f,_=o*u,m=o*f,p=a*f,M=l*c,b=l*u,y=l*f,A=i.x,T=i.y,L=i.z;return s[0]=(1-(_+p))*A,s[1]=(h+y)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(h-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+b)*L,s[9]=(m-M)*L,s[10]=(1-(d+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=qs.set(s[0],s[1],s[2]).length();const a=qs.set(s[4],s[5],s[6]).length(),l=qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);const c=1/o,u=1/a,f=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,n.setFromRotationMatrix(Vn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=pi,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),h=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===pi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Mo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=pi,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===pi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Mo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Qa.prototype.isMatrix4=!0;let Ut=Qa;const qs=new q,Vn=new Ut,Sb=new q(0,0,0),Mb=new q(1,1,1),Yi=new q,Xo=new q,Dn=new q,ih=new Ut,sh=new cs;class us{constructor(e=0,n=0,i=0,s=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ih,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bb=0;const rh=new q,$s=new cs,Ei=new Ut,qo=new q,Wr=new q,Eb=new q,Tb=new cs,oh=new q(1,0,0),ah=new q(0,1,0),lh=new q(0,0,1),ch={type:"added"},Ab={type:"removed"},Ys={type:"childadded",child:null},Jl={type:"childremoved",child:null};class en extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new q,n=new us,i=new cs,s=new q(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new ot}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $s.setFromAxisAngle(e,n),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,n){return $s.setFromAxisAngle(e,n),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(oh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,n){return rh.copy(e).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(oh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qo.copy(e):qo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Wr,qo,this.up):Ei.lookAt(qo,Wr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ei),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ab),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}en.DEFAULT_UP=new q(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rs extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wb={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new rs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Ql(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class dt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,mt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=mt.workingColorSpace){if(e=hb(e,1),n=ht(n,0,1),i=ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Ql(o,r,e+1/3),this.g=Ql(o,r,e),this.b=Ql(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,n=zn){function i(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=fg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return mt.workingToColorSpace(un.copy(this),e),Math.round(ht(un.r*255,0,255))*65536+Math.round(ht(un.g*255,0,255))*256+Math.round(ht(un.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=mt.workingColorSpace){mt.workingToColorSpace(un.copy(this),n);const i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=mt.workingColorSpace){return mt.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=zn){mt.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,s=un.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL($o);const i=ql(Ki.h,$o.h,n),s=ql(Ki.s,$o.s,n),r=ql(Ki.l,$o.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new dt;dt.NAMES=fg;class Rb extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gn=new q,Ti=new q,ec=new q,Ai=new q,Ks=new q,Zs=new q,uh=new q,tc=new q,nc=new q,ic=new q,sc=new Ot,rc=new Ot,oc=new Ot;class qn{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Gn.subVectors(e,n),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Gn.subVectors(s,n),Ti.subVectors(i,n),ec.subVectors(e,n);const o=Gn.dot(Gn),a=Gn.dot(Ti),l=Gn.dot(ec),c=Ti.dot(Ti),u=Ti.dot(ec),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return sc.setScalar(0),rc.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(e,n),rc.fromBufferAttribute(e,i),oc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sc,r.x),o.addScaledVector(rc,r.y),o.addScaledVector(oc,r.z),o}static isFrontFacing(e,n,i,s){return Gn.subVectors(i,n),Ti.subVectors(e,n),Gn.cross(Ti).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Gn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ks.subVectors(s,i),Zs.subVectors(r,i),tc.subVectors(e,i);const l=Ks.dot(tc),c=Zs.dot(tc);if(l<=0&&c<=0)return n.copy(i);nc.subVectors(e,s);const u=Ks.dot(nc),f=Zs.dot(nc);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ks,o);ic.subVectors(e,r);const h=Ks.dot(ic),g=Zs.dot(ic);if(g>=0&&h<=g)return n.copy(r);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Zs,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return uh.subVectors(r,s),a=(f-u)/(f-u+(h-g)),n.copy(s).addScaledVector(uh,a);const p=1/(m+_+d);return o=_*p,a=d*p,n.copy(i).addScaledVector(Ks,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Lo{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yo.copy(i.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Ko.subVectors(this.max,Xr),Js.subVectors(e.a,Xr),js.subVectors(e.b,Xr),Qs.subVectors(e.c,Xr),Zi.subVectors(js,Js),Ji.subVectors(Qs,js),xs.subVectors(Js,Qs);let n=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-xs.z,xs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,xs.z,0,-xs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-xs.y,xs.x,0];return!ac(n,Js,js,Qs,Ko)||(n=[1,0,0,0,1,0,0,0,1],!ac(n,Js,js,Qs,Ko))?!1:(Zo.crossVectors(Zi,Ji),n=[Zo.x,Zo.y,Zo.z],ac(n,Js,js,Qs,Ko))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new q,new q,new q,new q,new q,new q,new q,new q],Wn=new q,Yo=new Lo,Js=new q,js=new q,Qs=new q,Zi=new q,Ji=new q,xs=new q,Xr=new q,Ko=new q,Zo=new q,ys=new q;function ac(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){ys.fromArray(t,r);const a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=n.dot(ys),u=i.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Wt=new q,Jo=new nt;let Cb=0;class vi extends ps{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zd,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jo.fromBufferAttribute(this,n),Jo.applyMatrix3(e),this.setXY(n,Jo.x,Jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gr(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gr(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gr(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class dg extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class hg extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yt extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Pb=new Lo,qr=new q,lc=new q;class yl{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Pb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const n=qr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(lc)),this.expandByPoint(qr.copy(e.center).sub(lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Db=0;const Bn=new Ut,cc=new en,er=new q,Ln=new Lo,$r=new Lo,Jt=new q;class Mn extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cb(e)?hg:dg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Ln.min,$r.min),Ln.expandByPoint(Jt),Jt.addVectors(Ln.max,$r.max),Ln.expandByPoint(Jt)):(Ln.expandByPoint($r.min),Ln.expandByPoint($r.max))}Ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(e,c),Jt.add(er)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new vi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new q,l[x]=new q;const c=new q,u=new q,f=new q,d=new nt,h=new nt,g=new nt,_=new q,m=new q;function p(x,R,U){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,U),d.fromBufferAttribute(r,x),h.fromBufferAttribute(r,R),g.fromBufferAttribute(r,U),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(I),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[x].add(_),a[R].add(_),a[U].add(_),l[x].add(m),l[R].add(m),l[U].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,R=M.length;x<R;++x){const U=M[x],I=U.start,k=U.count;for(let ie=I,oe=I+k;ie<oe;ie+=3)p(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const b=new q,y=new q,A=new q,T=new q;function L(x){A.fromBufferAttribute(s,x),T.copy(A);const R=a[x];b.copy(R),b.sub(A.multiplyScalar(A.dot(R))).normalize(),y.crossVectors(T,R);const I=y.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,I)}for(let x=0,R=M.length;x<R;++x){const U=M[x],I=U.start,k=U.count;for(let ie=I,oe=I+k;ie<oe;ie+=3)L(e.getX(ie+0)),L(e.getX(ie+1)),L(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new vi(d,u,f)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Lb=0;class Dr extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=dr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Qe(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wc&&(i.blendSrc=this.blendSrc),this.blendDst!==Xc&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new nt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new q,uc=new q,jo=new q,ji=new q,fc=new q,Qo=new q,dc=new q;class Sl{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){uc.copy(e).add(n).multiplyScalar(.5),jo.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(uc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(jo),a=ji.dot(this.direction),l=-ji.dot(jo),c=ji.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(uc).addScaledVector(jo,d),h}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),s=Ri.dot(Ri)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,s,r){fc.subVectors(n,e),Qo.subVectors(i,e),dc.crossVectors(fc,Qo);let o=this.direction.dot(dc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(Qo.crossVectors(ji,Qo));if(l<0)return null;const c=a*this.direction.dot(fc.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(dc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ya extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fh=new Ut,Ss=new Sl,ea=new yl,dh=new q,ta=new q,na=new q,ia=new q,hc=new q,sa=new q,hh=new q,ra=new q;class jt extends en{constructor(e=new Mn,n=new Ya){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(hc.fromBufferAttribute(f,e),o?sa.addScaledVector(hc,u):sa.addScaledVector(hc.sub(n),u))}n.add(sa)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(ea.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(ea,dh)===null||Ss.origin.distanceToSquared(dh)>(e.far-e.near)**2))&&(fh.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ss)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,A=b;y<A;y+=3){const T=a.getX(y),L=a.getX(y+1),x=a.getX(y+2);s=oa(this,p,e,i,c,u,f,T,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=oa(this,o,e,i,c,u,f,M,b,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,A=b;y<A;y+=3){const T=y,L=y+1,x=y+2;s=oa(this,p,e,i,c,u,f,T,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=m,b=m+1,y=m+2;s=oa(this,o,e,i,c,u,f,M,b,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Ib(t,e,n,i,s,r,o,a){let l;if(e.side===Cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ls,a),l===null)return null;ra.copy(a),ra.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ra);return c<n.near||c>n.far?null:{distance:c,point:ra.clone(),object:t}}function oa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,ta),t.getVertexPosition(l,na),t.getVertexPosition(c,ia);const u=Ib(t,e,n,i,ta,na,ia,hh);if(u){const f=new q;qn.getBarycoord(hh,ta,na,ia,f),s&&(u.uv=qn.getInterpolatedAttribute(s,a,l,c,f,new nt)),r&&(u.uv1=qn.getInterpolatedAttribute(r,a,l,c,f,new nt)),o&&(u.normal=qn.getInterpolatedAttribute(o,a,l,c,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new q,materialIndex:0};qn.getNormal(ta,na,ia,d.normal),u.face=d,u.barycoord=f}return u}class Nb extends Sn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=rn,u=rn,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pc=new q,Ub=new q,Ob=new ot;class ns{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=pc.subVectors(i,n).cross(Ub.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(pc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ob.getNormalMatrix(e),s=this.coplanarPoint(pc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new yl,Fb=new nt(.5,.5),aa=new q;class Mf{constructor(e=new ns,n=new ns,i=new ns,s=new ns,r=new ns,o=new ns){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],b=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,h-u,p-g,A-M).normalize(),s[1].setComponents(c+o,h+u,p+g,A+M).normalize(),s[2].setComponents(c+a,h+f,p+_,A+b).normalize(),s[3].setComponents(c-a,h-f,p-_,A-b).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,h-d,p-m,A-y).normalize();else if(s[4].setComponents(c-l,h-d,p-m,A-y).normalize(),n===pi)s[5].setComponents(c+l,h+d,p+m,A+y).normalize();else if(n===Mo)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const n=Fb.distanceTo(e.center);return Ms.radius=.7071067811865476+n,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(aa.x=s.normal.x>0?e.max.x:e.min.x,aa.y=s.normal.y>0?e.max.y:e.min.y,aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bf extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ka=new q,Za=new q,ph=new Ut,Yr=new Sl,la=new yl,mc=new q,mh=new q;class pg extends en{constructor(e=new Mn,n=new bf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Ka.fromBufferAttribute(n,s-1),Za.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Ka.distanceTo(Za);e.setAttribute("lineDistance",new Yt(i,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;ph.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),b=ca(this,e,Yr,l,p,M,_);b&&n.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=ca(this,e,Yr,l,_,m,g-1);p&&n.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=ca(this,e,Yr,l,_,_+1,_);p&&n.push(p)}if(this.isLineLoop){const _=ca(this,e,Yr,l,g-1,h,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ca(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Ka.fromBufferAttribute(a,s),Za.fromBufferAttribute(a,r),n.distanceSqToSegment(Ka,Za,mc,mh)>i)return;mc.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(mc);if(!(c<e.near||c>e.far))return{distance:c,point:mh.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const gh=new q,_h=new q;class Bb extends pg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)gh.fromBufferAttribute(n,s),_h.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gh.distanceTo(_h);e.setAttribute("lineDistance",new Yt(i,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mg extends Sn{constructor(e=[],n=Os,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tr extends Sn{constructor(e,n,i=yi,s,r,o,a=rn,l=rn,c,u=Vi,f=1){if(u!==Vi&&u!==Cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zb extends Tr{constructor(e,n=yi,i=Os,s,r,o=rn,a=rn,l,c=Vi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gg extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bs extends Mn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function g(_,m,p,M,b,y,A,T,L,x,R){const U=y/L,I=A/x,k=y/2,ie=A/2,oe=T/2,X=L+1,te=x+1;let G=0,Z=0;const he=new q;for(let ye=0;ye<te;ye++){const me=ye*I-ie;for(let Me=0;Me<X;Me++){const tt=Me*U-k;he[_]=tt*M,he[m]=me*b,he[p]=oe,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[p]=T>0?1:-1,u.push(he.x,he.y,he.z),f.push(Me/L),f.push(1-ye/x),G+=1}}for(let ye=0;ye<x;ye++)for(let me=0;me<L;me++){const Me=d+me+X*ye,tt=d+me+X*(ye+1),lt=d+(me+1)+X*(ye+1),st=d+(me+1)+X*ye;l.push(Me,tt,st),l.push(tt,lt,st),Z+=6}a.addGroup(h,Z,R),h+=Z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bo extends Mn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let g=0;const _=[],m=i/2;let p=0;M(),o===!1&&(e>0&&b(!0),n>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(h,2));function M(){const y=new q,A=new q;let T=0;const L=(n-e)/i;for(let x=0;x<=r;x++){const R=[],U=x/r,I=U*(n-e)+e;for(let k=0;k<=s;k++){const ie=k/s,oe=ie*l+a,X=Math.sin(oe),te=Math.cos(oe);A.x=I*X,A.y=-U*i+m,A.z=I*te,f.push(A.x,A.y,A.z),y.set(X,L,te).normalize(),d.push(y.x,y.y,y.z),h.push(ie,1-U),R.push(g++)}_.push(R)}for(let x=0;x<s;x++)for(let R=0;R<r;R++){const U=_[R][x],I=_[R+1][x],k=_[R+1][x+1],ie=_[R][x+1];(e>0||R!==0)&&(u.push(U,I,ie),T+=3),(n>0||R!==r-1)&&(u.push(I,k,ie),T+=3)}c.addGroup(p,T,0),p+=T}function b(y){const A=g,T=new nt,L=new q;let x=0;const R=y===!0?e:n,U=y===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,m*U,0),d.push(0,U,0),h.push(.5,.5),g++;const I=g;for(let k=0;k<=s;k++){const oe=k/s*l+a,X=Math.cos(oe),te=Math.sin(oe);L.x=R*te,L.y=m*U,L.z=R*X,f.push(L.x,L.y,L.z),d.push(0,U,0),T.x=X*.5+.5,T.y=te*.5*U+.5,h.push(T.x,T.y),g++}for(let k=0;k<s;k++){const ie=A+k,oe=I+k;y===!0?u.push(oe,oe+1,ie):u.push(oe+1,oe,ie),x+=3}c.addGroup(p,x,y===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ja extends bo{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ja(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends Mn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let b=0;b<c;b++){const y=b*f-r;g.push(y,-M,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const b=M+c*p,y=M+c*(p+1),A=M+1+c*(p+1),T=M+1+c*p;h.push(b,y,T),h.push(y,A,T)}this.setIndex(h),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.widthSegments,e.heightSegments)}}class ja extends Mn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new q,d=new q,h=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const M=[],b=p/i,y=o+b*a,A=e*Math.cos(y),T=Math.sqrt(e*e-A*A);let L=0;p===0&&o===0?L=.5/n:p===i&&l===Math.PI&&(L=-.5/n);for(let x=0;x<=n;x++){const R=x/n,U=s+R*r;f.x=-T*Math.cos(U),f.y=A,f.z=T*Math.sin(U),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(R+L,1-b),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<n;M++){const b=u[p][M+1],y=u[p][M],A=u[p+1][M],T=u[p+1][M+1];(p!==0||o>0)&&h.push(b,y,T),(p!==i-1||l<Math.PI)&&h.push(y,A,T)}this.setIndex(h),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ar(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(vh(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(vh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=Ar(t[n]);for(const s in i)e[s]=i[s]}return e}function vh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function kb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _g(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Hb={clone:Ar,merge:_n};var Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=Gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new dt().setHex(s.value);break;case"v2":this.uniforms[i].value=new nt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new q().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ot().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ut().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Wb extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kr extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Du,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xb extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qb extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vg extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class $b extends vg{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const gc=new Ut,xh=new q,yh=new q;class Yb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),n.position.copy(xh),yh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(yh),n.updateMatrixWorld(),gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Mo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ua=new q,fa=new cs,oi=new q;class xg extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ua,fa,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,fa,oi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ua,fa,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,fa,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new q,Sh=new nt,Mh=new nt;class kn extends xg{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lu*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,Sh,Mh),n.subVectors(Mh,Sh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wa*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ef extends xg{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Kb extends Yb{constructor(){super(new Ef(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zb extends vg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Kb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const tr=-90,nr=1;class Jb extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(tr,nr,e,n);s.layers=this.layers,this.add(s);const r=new kn(tr,nr,e,n);r.layers=this.layers,this.add(r);const o=new kn(tr,nr,e,n);o.layers=this.layers,this.add(o);const a=new kn(tr,nr,e,n);a.layers=this.layers,this.add(a);const l=new kn(tr,nr,e,n);l.layers=this.layers,this.add(l);const c=new kn(tr,nr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jb extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bh=new Ut;class Qb{constructor(e,n,i=0,s=1/0){this.ray=new Sl(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):vt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(e,n=!0,i=[]){return Iu(e,this,i,n),i.sort(Eh),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Iu(e[s],this,i,n);return i.sort(Eh),i}}function Eh(t,e){return t.distance-e.distance}function Iu(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)Iu(r[o],e,n,!0)}}class Th{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Pf=class Pf{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Pf.prototype.isMatrix2=!0;let Ah=Pf;class eE extends Bb{constructor(e=10,n=10,i=4473924,s=8947848){i=new dt(i),s=new dt(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,h=0,g=-a;d<=n;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?i:s;_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3}const u=new Mn;u.setAttribute("position",new Yt(l,3)),u.setAttribute("color",new Yt(c,3));const f=new bf({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class tE extends ps{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function wh(t,e,n,i){const s=nE(i);switch(n){case og:return t*e;case lg:return t*e/s.components*s.byteLength;case mf:return t*e/s.components*s.byteLength;case Fs:return t*e*2/s.components*s.byteLength;case gf:return t*e*2/s.components*s.byteLength;case ag:return t*e*3/s.components*s.byteLength;case Yn:return t*e*4/s.components*s.byteLength;case _f:return t*e*4/s.components*s.byteLength;case ba:case Ea:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nu:case su:return Math.max(t,16)*Math.max(e,8)/4;case tu:case iu:return Math.max(t,8)*Math.max(e,8)/2;case ru:case ou:case lu:case cu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case au:case Ga:case uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case du:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case pu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case _u:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case bu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Tu:case Au:case wu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ru:case Cu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wa:case Pu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nE(t){switch(t){case Nn:case ng:return{byteLength:1,components:1};case yo:case ig:case Hi:return{byteLength:2,components:1};case hf:case pf:return{byteLength:2,components:4};case yi:case df:case hi:return{byteLength:4,components:1};case sg:case rg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ff}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ff);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function iE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sE=`#ifdef USE_ALPHAHASH
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
#endif`,HE=`#ifdef USE_FOG
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
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,ut={alphahash_fragment:sE,alphahash_pars_fragment:rE,alphamap_fragment:oE,alphamap_pars_fragment:aE,alphatest_fragment:lE,alphatest_pars_fragment:cE,aomap_fragment:uE,aomap_pars_fragment:fE,batching_pars_vertex:dE,batching_vertex:hE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:_E,bumpmap_pars_fragment:vE,clipping_planes_fragment:xE,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:SE,clipping_planes_vertex:ME,color_fragment:bE,color_pars_fragment:EE,color_pars_vertex:TE,color_vertex:AE,common:wE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:CE,displacementmap_pars_vertex:PE,displacementmap_vertex:DE,emissivemap_fragment:LE,emissivemap_pars_fragment:IE,colorspace_fragment:NE,colorspace_pars_fragment:UE,envmap_fragment:OE,envmap_common_pars_fragment:FE,envmap_pars_fragment:BE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:ZE,envmap_vertex:kE,fog_vertex:HE,fog_pars_vertex:VE,fog_fragment:GE,fog_pars_fragment:WE,gradientmap_pars_fragment:XE,lightmap_pars_fragment:qE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:YE,lights_pars_begin:KE,lights_toon_fragment:JE,lights_toon_pars_fragment:jE,lights_phong_fragment:QE,lights_phong_pars_fragment:eT,lights_physical_fragment:tT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:sT,lights_fragment_end:rT,lightprobes_pars_fragment:oT,logdepthbuf_fragment:aT,logdepthbuf_pars_fragment:lT,logdepthbuf_pars_vertex:cT,logdepthbuf_vertex:uT,map_fragment:fT,map_pars_fragment:dT,map_particle_fragment:hT,map_particle_pars_fragment:pT,metalnessmap_fragment:mT,metalnessmap_pars_fragment:gT,morphinstance_vertex:_T,morphcolor_vertex:vT,morphnormal_vertex:xT,morphtarget_pars_vertex:yT,morphtarget_vertex:ST,normal_fragment_begin:MT,normal_fragment_maps:bT,normal_pars_fragment:ET,normal_pars_vertex:TT,normal_vertex:AT,normalmap_pars_fragment:wT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:CT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:DT,opaque_fragment:LT,packing:IT,premultiplied_alpha_fragment:NT,project_vertex:UT,dithering_fragment:OT,dithering_pars_fragment:FT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:kT,shadowmap_pars_vertex:HT,shadowmap_vertex:VT,shadowmask_pars_fragment:GT,skinbase_vertex:WT,skinning_pars_vertex:XT,skinning_vertex:qT,skinnormal_vertex:$T,specularmap_fragment:YT,specularmap_pars_fragment:KT,tonemapping_fragment:ZT,tonemapping_pars_fragment:JT,transmission_fragment:jT,transmission_pars_fragment:QT,uv_pars_fragment:eA,uv_pars_vertex:tA,uv_vertex:nA,worldpos_vertex:iA,background_vert:sA,background_frag:rA,backgroundCube_vert:oA,backgroundCube_frag:aA,cube_vert:lA,cube_frag:cA,depth_vert:uA,depth_frag:fA,distance_vert:dA,distance_frag:hA,equirect_vert:pA,equirect_frag:mA,linedashed_vert:gA,linedashed_frag:_A,meshbasic_vert:vA,meshbasic_frag:xA,meshlambert_vert:yA,meshlambert_frag:SA,meshmatcap_vert:MA,meshmatcap_frag:bA,meshnormal_vert:EA,meshnormal_frag:TA,meshphong_vert:AA,meshphong_frag:wA,meshphysical_vert:RA,meshphysical_frag:CA,meshtoon_vert:PA,meshtoon_frag:DA,points_vert:LA,points_frag:IA,shadow_vert:NA,shadow_frag:UA,sprite_vert:OA,sprite_frag:FA},Ne={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},fi={basic:{uniforms:_n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:_n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:_n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:_n([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:_n([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:_n([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:_n([Ne.points,Ne.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:_n([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:_n([Ne.common,Ne.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:_n([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:_n([Ne.sprite,Ne.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:_n([Ne.common,Ne.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:_n([Ne.lights,Ne.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};fi.physical={uniforms:_n([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const da={r:0,b:0,g:0},BA=new Ut,Sg=new ot;Sg.set(-1,0,0,0,1,0,0,0,1);function zA(t,e,n,i,s,r){const o=new dt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function h(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const y=M.backgroundBlurriness>0;b=e.get(b,y)}return b}function g(M){let b=!1;const y=h(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(M,b){const y=h(b);y&&(y.isCubeTexture||y.mapping===xl)?(c===void 0&&(c=new jt(new Bs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Ar(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sg),c.material.toneMapped=mt.getTransfer(y.colorSpace)!==Et,(u!==y||f!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new jt(new Io(2,2),new Si({name:"BackgroundMaterial",uniforms:Ar(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=mt.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,b){M.getRGB(da,_g(t)),n.buffers.color.setClear(da.r,da.g,da.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:_,dispose:p}}function kA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(I,k,ie,oe,X){let te=!1;const G=f(I,oe,ie,k);r!==G&&(r=G,c(r.object)),te=h(I,oe,ie,X),te&&g(I,oe,ie,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,y(I,k,ie,oe),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function f(I,k,ie,oe){const X=oe.wireframe===!0;let te=i[k.id];te===void 0&&(te={},i[k.id]=te);const G=I.isInstancedMesh===!0?I.id:0;let Z=te[G];Z===void 0&&(Z={},te[G]=Z);let he=Z[ie.id];he===void 0&&(he={},Z[ie.id]=he);let ye=he[X];return ye===void 0&&(ye=d(l()),he[X]=ye),ye}function d(I){const k=[],ie=[],oe=[];for(let X=0;X<n;X++)k[X]=0,ie[X]=0,oe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:oe,object:I,attributes:{},index:null}}function h(I,k,ie,oe){const X=r.attributes,te=k.attributes;let G=0;const Z=ie.getAttributes();for(const he in Z)if(Z[he].location>=0){const me=X[he];let Me=te[he];if(Me===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),me===void 0||me.attribute!==Me||Me&&me.data!==Me.data)return!0;G++}return r.attributesNum!==G||r.index!==oe}function g(I,k,ie,oe){const X={},te=k.attributes;let G=0;const Z=ie.getAttributes();for(const he in Z)if(Z[he].location>=0){let me=te[he];me===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(me=I.instanceColor));const Me={};Me.attribute=me,me&&me.data&&(Me.data=me.data),X[he]=Me,G++}r.attributes=X,r.attributesNum=G,r.index=oe}function _(){const I=r.newAttributes;for(let k=0,ie=I.length;k<ie;k++)I[k]=0}function m(I){p(I,0)}function p(I,k){const ie=r.newAttributes,oe=r.enabledAttributes,X=r.attributeDivisors;ie[I]=1,oe[I]===0&&(t.enableVertexAttribArray(I),oe[I]=1),X[I]!==k&&(t.vertexAttribDivisor(I,k),X[I]=k)}function M(){const I=r.newAttributes,k=r.enabledAttributes;for(let ie=0,oe=k.length;ie<oe;ie++)k[ie]!==I[ie]&&(t.disableVertexAttribArray(ie),k[ie]=0)}function b(I,k,ie,oe,X,te,G){G===!0?t.vertexAttribIPointer(I,k,ie,X,te):t.vertexAttribPointer(I,k,ie,oe,X,te)}function y(I,k,ie,oe){_();const X=oe.attributes,te=ie.getAttributes(),G=k.defaultAttributeValues;for(const Z in te){const he=te[Z];if(he.location>=0){let ye=X[Z];if(ye===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor)),ye!==void 0){const me=ye.normalized,Me=ye.itemSize,tt=e.get(ye);if(tt===void 0)continue;const lt=tt.buffer,st=tt.type,K=tt.bytesPerElement,O=st===t.INT||st===t.UNSIGNED_INT||ye.gpuType===df;if(ye.isInterleavedBufferAttribute){const Y=ye.data,ue=Y.stride,xe=ye.offset;if(Y.isInstancedInterleavedBuffer){for(let be=0;be<he.locationSize;be++)p(he.location+be,Y.meshPerAttribute);I.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let be=0;be<he.locationSize;be++)m(he.location+be);t.bindBuffer(t.ARRAY_BUFFER,lt);for(let be=0;be<he.locationSize;be++)b(he.location+be,Me/he.locationSize,st,me,ue*K,(xe+Me/he.locationSize*be)*K,O)}else{if(ye.isInstancedBufferAttribute){for(let Y=0;Y<he.locationSize;Y++)p(he.location+Y,ye.meshPerAttribute);I.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Y=0;Y<he.locationSize;Y++)m(he.location+Y);t.bindBuffer(t.ARRAY_BUFFER,lt);for(let Y=0;Y<he.locationSize;Y++)b(he.location+Y,Me/he.locationSize,st,me,Me*K,Me/he.locationSize*Y*K,O)}}else if(G!==void 0){const me=G[Z];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(he.location,me);break;case 3:t.vertexAttrib3fv(he.location,me);break;case 4:t.vertexAttrib4fv(he.location,me);break;default:t.vertexAttrib1fv(he.location,me)}}}}M()}function A(){R();for(const I in i){const k=i[I];for(const ie in k){const oe=k[ie];for(const X in oe){const te=oe[X];for(const G in te)u(te[G].object),delete te[G];delete oe[X]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const k=i[I.id];for(const ie in k){const oe=k[ie];for(const X in oe){const te=oe[X];for(const G in te)u(te[G].object),delete te[G];delete oe[X]}}delete i[I.id]}function L(I){for(const k in i){const ie=i[k];for(const oe in ie){const X=ie[oe];if(X[I.id]===void 0)continue;const te=X[I.id];for(const G in te)u(te[G].object),delete te[G];delete X[I.id]}}}function x(I){for(const k in i){const ie=i[k],oe=I.isInstancedMesh===!0?I.id:0,X=ie[oe];if(X!==void 0){for(const te in X){const G=X[te];for(const Z in G)u(G[Z].object),delete G[Z];delete X[te]}delete ie[oe],Object.keys(ie).length===0&&delete i[k]}}}function R(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function HA(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function VA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Yn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const x=L===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Nn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==hi&&!x)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,maxSamples:A,samples:T}}function GA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ns,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,b=M*4;let y=p.clippingState||null;l.value=y,y=u(g,d,b,h);for(let A=0;A!==b;++A)y[A]=n[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=h;b!==_;++b,y+=4)o.copy(f[b]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const os=4,Rh=[.125,.215,.35,.446,.526,.582],Ts=20,WA=256,Zr=new Ef,Ch=new dt;let _c=null,vc=0,xc=0,yc=!1;const XA=new q;class Ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=XA}=r;_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,xc),this._renderer.xr.enabled=yc,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Hi,format:Yn,colorSpace:Xa,depthBuffer:!1},s=Dh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qA(r)),this._blurMaterial=YA(r,e,n),this._ggxMaterial=$A(r,e,n)}return s}_compileMaterial(e){const n=new jt(new Mn,e);this._renderer.compile(n,Zr)}_sceneToCubeUV(e,n,i,s,r){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Ch),f.toneMapping=gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new Bs,new Ya({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Ch),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const A=this._cubeSize;ir(s,y*A,b>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(_,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Os||e.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ir(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-os?i-g+os:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-n,ir(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Zr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ir(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(a,Zr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ts-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ts;m>Ts&&Qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);const p=[];let M=0;for(let L=0;L<Ts;++L){const x=L/_,R=Math.exp(-x*x/2);p.push(R),L===0?M+=R:L<m&&(M+=2*R)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const y=this._sizeLods[s],A=3*y*(s>b-os?s-b+os:0),T=4*(this._cubeSize-y);ir(n,A,T,3*y,2*y),l.setRenderTarget(n),l.render(f,Zr)}}function qA(t){const e=[],n=[],i=[];let s=t;const r=t-os+1+Rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-os?l=Rh[o-t+os-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*h),b=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let T=0;T<h;T++){const L=T%3*2/3-1,x=T>2?0:-1,R=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];M.set(R,_*g*T),b.set(d,m*g*T);const U=[T,T,T,T,T,T];y.set(U,p*g*T)}const A=new Mn;A.setAttribute("position",new vi(M,_)),A.setAttribute("uv",new vi(b,m)),A.setAttribute("faceIndex",new vi(y,p)),i.push(new jt(A,null)),s>os&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Dh(t,e,n){const i=new _i(t,e,n);return i.texture.mapping=xl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function $A(t,e,n){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function YA(t,e,n){const i=new Float32Array(Ts),s=new q(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Lh(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ih(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}class Mg extends _i{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new mg(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bs(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Oi});r.uniforms.tEquirect.value=n;const o=new jt(s,r),a=n.minFilter;return n.minFilter===Rs&&(n.minFilter=hn),new Jb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function KA(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Gl||h===Wl)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new Mg(g.height);return _.fromEquirectangularTexture(t,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,g=h===Gl||h===Wl,_=h===Os||h===Er;if(g||_){let m=n.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Ph(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return g&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Ph(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===Gl?d.mapping=Os:h===Wl&&(d.mapping=Er),d}function l(d){let h=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function ZA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&hr("WebGLRenderer: "+i+" extension not supported."),s}}}function JA(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const M=h.array;_=h.version;for(let b=0,y=M.length;b<y;b+=3){const A=M[b+0],T=M[b+1],L=M[b+2];d.push(A,T,T,L,L,A)}}else{const M=g.array;_=g.version;for(let b=0,y=M.length/3-1;b<y;b+=3){const A=b+0,T=b+1,L=b+2;d.push(A,T,T,L,L,A)}}const m=new(g.count>=65535?hg:dg)(d,1);m.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function jA(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*o),n.update(d,i,1)}function c(f,d,h){h!==0&&(t.drawElementsInstanced(i,d,r,f*o,h),n.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,h);let _=0;for(let m=0;m<h;m++)_+=d[m];n.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function QA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ew(t,e,n){const i=new WeakMap,s=new Ot;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let U=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",U)};var h=U;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*T*4*f),x=new ug(L,A,T,f);x.type=hi,x.needsUpdate=!0;const R=y*4;for(let I=0;I<f;I++){const k=p[I],ie=M[I],oe=b[I],X=A*T*4*I;for(let te=0;te<k.count;te++){const G=te*R;g===!0&&(s.fromBufferAttribute(k,te),L[X+G+0]=s.x,L[X+G+1]=s.y,L[X+G+2]=s.z,L[X+G+3]=0),_===!0&&(s.fromBufferAttribute(ie,te),L[X+G+4]=s.x,L[X+G+5]=s.y,L[X+G+6]=s.z,L[X+G+7]=0),m===!0&&(s.fromBufferAttribute(oe,te),L[X+G+8]=s.x,L[X+G+9]=s.y,L[X+G+10]=s.z,L[X+G+11]=oe.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new nt(A,T)},i.set(a,d),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function tw(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const nw={[Ym]:"LINEAR_TONE_MAPPING",[Km]:"REINHARD_TONE_MAPPING",[Zm]:"CINEON_TONE_MAPPING",[Jm]:"ACES_FILMIC_TONE_MAPPING",[Qm]:"AGX_TONE_MAPPING",[eg]:"NEUTRAL_TONE_MAPPING",[jm]:"CUSTOM_TONE_MAPPING"};function iw(t,e,n,i,s,r){const o=new _i(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Tr(e,n):void 0}),a=new _i(e,n,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),l=new Mn;l.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const c=new Wb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new jt(l,c),f=new Ef(-1,1,1,-1,0,1);let d=null,h=null,g=!1,_,m=null,p=[],M=!1;this.setSize=function(b,y){o.setSize(b,y),a.setSize(b,y);for(let A=0;A<p.length;A++){const T=p[A];T.setSize&&T.setSize(b,y)}},this.setEffects=function(b){p=b,M=p.length>0&&p[0].isRenderPass===!0;const y=o.width,A=o.height;for(let T=0;T<p.length;T++){const L=p[T];L.setSize&&L.setSize(y,A)}},this.begin=function(b,y){if(g||b.toneMapping===gi&&p.length===0)return!1;if(m=y,y!==null){const A=y.width,T=y.height;(o.width!==A||o.height!==T)&&this.setSize(A,T)}return M===!1&&b.setRenderTarget(o),_=b.toneMapping,b.toneMapping=gi,!0},this.hasRenderPass=function(){return M},this.end=function(b,y){b.toneMapping=_,g=!0;let A=o,T=a;for(let L=0;L<p.length;L++){const x=p[L];if(x.enabled!==!1&&(x.render(b,T,A,y),x.needsSwap!==!1)){const R=A;A=T,T=R}}if(d!==b.outputColorSpace||h!==b.toneMapping){d=b.outputColorSpace,h=b.toneMapping,c.defines={},mt.getTransfer(d)===Et&&(c.defines.SRGB_TRANSFER="");const L=nw[h];L&&(c.defines[L]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,b.setRenderTarget(m),b.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const bg=new Sn,Nu=new Tr(1,1),Eg=new ug,Tg=new yb,Ag=new mg,Nh=[],Uh=[],Oh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function Lr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Nh[s];if(r===void 0&&(r=new Float32Array(s),Nh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bl(t,e){let n=Uh[e];n===void 0&&(n=new Int32Array(e),Uh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2fv(this.addr,e),Zt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;t.uniform3fv(this.addr,e),Zt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4fv(this.addr,e),Zt(n,e)}}function lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;Bh.set(i),t.uniformMatrix2fv(this.addr,!1,Bh),Zt(n,i)}}function cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;Fh.set(i),t.uniformMatrix3fv(this.addr,!1,Fh),Zt(n,i)}}function uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;Oh.set(i),t.uniformMatrix4fv(this.addr,!1,Oh),Zt(n,i)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2iv(this.addr,e),Zt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3iv(this.addr,e),Zt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4iv(this.addr,e),Zt(n,e)}}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2uiv(this.addr,e),Zt(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3uiv(this.addr,e),Zt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4uiv(this.addr,e),Zt(n,e)}}function xw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Nu.compareFunction=n.isReversedDepthBuffer()?xf:vf,r=Nu):r=bg,n.setTexture2D(e||r,s)}function yw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Tg,s)}function Sw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Ag,s)}function Mw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Eg,s)}function bw(t){switch(t){case 5126:return sw;case 35664:return rw;case 35665:return ow;case 35666:return aw;case 35674:return lw;case 35675:return cw;case 35676:return uw;case 5124:case 35670:return fw;case 35667:case 35671:return dw;case 35668:case 35672:return hw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return _w;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Mw}}function Ew(t,e){t.uniform1fv(this.addr,e)}function Tw(t,e){const n=Lr(e,this.size,2);t.uniform2fv(this.addr,n)}function Aw(t,e){const n=Lr(e,this.size,3);t.uniform3fv(this.addr,n)}function ww(t,e){const n=Lr(e,this.size,4);t.uniform4fv(this.addr,n)}function Rw(t,e){const n=Lr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Cw(t,e){const n=Lr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pw(t,e){const n=Lr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Dw(t,e){t.uniform1iv(this.addr,e)}function Lw(t,e){t.uniform2iv(this.addr,e)}function Iw(t,e){t.uniform3iv(this.addr,e)}function Nw(t,e){t.uniform4iv(this.addr,e)}function Uw(t,e){t.uniform1uiv(this.addr,e)}function Ow(t,e){t.uniform2uiv(this.addr,e)}function Fw(t,e){t.uniform3uiv(this.addr,e)}function Bw(t,e){t.uniform4uiv(this.addr,e)}function zw(t,e,n){const i=this.cache,s=e.length,r=bl(n,s);Kt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Nu:o=bg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function kw(t,e,n){const i=this.cache,s=e.length,r=bl(n,s);Kt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Tg,r[o])}function Hw(t,e,n){const i=this.cache,s=e.length,r=bl(n,s);Kt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Ag,r[o])}function Vw(t,e,n){const i=this.cache,s=e.length,r=bl(n,s);Kt(i,r)||(t.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Eg,r[o])}function Gw(t){switch(t){case 5126:return Ew;case 35664:return Tw;case 35665:return Aw;case 35666:return ww;case 35674:return Rw;case 35675:return Cw;case 35676:return Pw;case 5124:case 35670:return Dw;case 35667:case 35671:return Lw;case 35668:case 35672:return Iw;case 35669:case 35673:return Nw;case 5125:return Uw;case 36294:return Ow;case 36295:return Fw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return kw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Vw}}class Ww{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bw(n.type)}}class Xw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Gw(n.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function zh(t,e){t.seq.push(e),t.map[e.id]=e}function $w(t,e,n){const i=t.name,s=i.length;for(Sc.lastIndex=0;;){const r=Sc.exec(i),o=Sc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zh(n,c===void 0?new Ww(a,t,e):new Xw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new qw(a),zh(n,f)),n=f}}}class Ra{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);$w(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function kh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Yw=37297;let Kw=0;function Zw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Hh=new ot;function Jw(t){mt._getMatrix(Hh,mt.workingColorSpace,t);const e=`mat3( ${Hh.elements.map(n=>n.toFixed(4))} )`;switch(mt.getTransfer(t)){case qa:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Vh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Zw(t.getShaderSource(e),a)}else return r}function jw(t,e){const n=Jw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Qw={[Ym]:"Linear",[Km]:"Reinhard",[Zm]:"Cineon",[Jm]:"ACESFilmic",[Qm]:"AgX",[eg]:"Neutral",[jm]:"Custom"};function eR(t,e){const n=Qw[e];return n===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ha=new q;function tR(){mt.getLuminanceCoefficients(ha);const t=ha.x.toFixed(4),e=ha.y.toFixed(4),n=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function iR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function to(t){return t!==""}function Gh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(t){return t.replace(rR,aR)}const oR=new Map;function aR(t,e){let n=ut[e];if(n===void 0){const i=oR.get(e);if(i!==void 0)n=ut[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uu(n)}const lR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(t){return t.replace(lR,cR)}function cR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const uR={[Ma]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function fR(t){return uR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dR={[Os]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE",[xl]:"ENVMAP_TYPE_CUBE_UV"};function hR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":dR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const pR={[Er]:"ENVMAP_MODE_REFRACTION"};function mR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":pR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gR={[$m]:"ENVMAP_BLENDING_MULTIPLY",[jM]:"ENVMAP_BLENDING_MIX",[QM]:"ENVMAP_BLENDING_ADD"};function _R(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":gR[t.combine]||"ENVMAP_BLENDING_NONE"}function vR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fR(n),c=hR(n),u=mR(n),f=_R(n),d=vR(n),h=nR(n),g=iR(r),_=s.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`)):(m=[qh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[qh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gi?"#define TONE_MAPPING":"",n.toneMapping!==gi?ut.tonemapping_pars_fragment:"",n.toneMapping!==gi?eR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,jw("linearToOutputTexel",n.outputColorSpace),tR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(to).join(`
`)),o=Uu(o),o=Gh(o,n),o=Wh(o,n),a=Uu(a),a=Gh(a,n),a=Wh(a,n),o=Xh(o),a=Xh(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+o,y=M+p+a,A=kh(s,s.VERTEX_SHADER,b),T=kh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,T),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(I){if(t.debug.checkShaderErrors){const k=s.getProgramInfoLog(_)||"",ie=s.getShaderInfoLog(A)||"",oe=s.getShaderInfoLog(T)||"",X=k.trim(),te=ie.trim(),G=oe.trim();let Z=!0,he=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,A,T);else{const ye=Vh(s,A,"vertex"),me=Vh(s,T,"fragment");vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+ye+`
`+me)}else X!==""?Qe("WebGLProgram: Program Info Log:",X):(te===""||G==="")&&(he=!1);he&&(I.diagnostics={runnable:Z,programLog:X,vertexShader:{log:te,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(A),s.deleteShader(T),x=new Ra(s,_),R=sR(s,_)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,Yw)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let yR=0;class SR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MR(e),n.set(e,i)),i}}class MR{constructor(e){this.id=yR++,this.code=e,this.usedTimes=0}}function bR(t){return t===Fs||t===Ga||t===Wa}function ER(t,e,n,i,s,r){const o=new Sf,a=new SR,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,R,U,I,k,ie){const oe=I.fog,X=k.geometry,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||te,G),he=Z&&Z.mapping===xl?Z.image.height:null,ye=h[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Qe("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=me!==void 0?me.length:0;let tt=0;X.morphAttributes.position!==void 0&&(tt=1),X.morphAttributes.normal!==void 0&&(tt=2),X.morphAttributes.color!==void 0&&(tt=3);let lt,st,K,O;if(ye){const Ge=fi[ye];lt=Ge.vertexShader,st=Ge.fragmentShader}else{lt=x.vertexShader,st=x.fragmentShader;const Ge=a.getVertexShaderStage(x),ae=a.getFragmentShaderStage(x);a.update(x,Ge,ae),K=Ge.id,O=ae.id}const Y=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),xe=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,w=!!x.map,P=!!x.matcap,F=!!Z,$=!!x.aoMap,V=!!x.lightMap,j=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,le=!!x.displacementMap,ve=!!x.emissiveMap,ce=!!x.metalnessMap,Le=!!x.roughnessMap,D=x.anisotropy>0,ze=x.clearcoat>0,pe=x.dispersion>0,E=x.iridescence>0,v=x.sheen>0,B=x.transmission>0,W=D&&!!x.anisotropyMap,ne=ze&&!!x.clearcoatMap,Se=ze&&!!x.clearcoatNormalMap,Ae=ze&&!!x.clearcoatRoughnessMap,re=E&&!!x.iridescenceMap,fe=E&&!!x.iridescenceThicknessMap,Ee=v&&!!x.sheenColorMap,ke=v&&!!x.sheenRoughnessMap,Pe=!!x.specularMap,Ce=!!x.specularColorMap,Ke=!!x.specularIntensityMap,Je=B&&!!x.transmissionMap,je=B&&!!x.thicknessMap,z=!!x.gradientMap,De=!!x.alphaMap,de=x.alphaTest>0,Ie=!!x.alphaHash,Oe=!!x.extensions;let ge=gi;x.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ge=t.toneMapping);const Xe={shaderID:ye,shaderType:x.type,shaderName:x.name,vertexShader:lt,fragmentShader:st,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:O,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:be,batchingColor:be&&k._colorsTexture!==null,instancing:xe,instancingColor:xe&&k.instanceColor!==null,instancingMorph:xe&&k.morphTexture!==null,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:w,matcap:P,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:he,aoMap:$,lightMap:V,bumpMap:j,normalMap:_e,displacementMap:le,emissiveMap:ve,normalMapObjectSpace:_e&&x.normalMapType===nb,normalMapTangentSpace:_e&&x.normalMapType===Du,packedNormalMap:_e&&x.normalMapType===Du&&bR(x.normalMap.format),metalnessMap:ce,roughnessMap:Le,anisotropy:D,anisotropyMap:W,clearcoat:ze,clearcoatMap:ne,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ae,dispersion:pe,iridescence:E,iridescenceMap:re,iridescenceThicknessMap:fe,sheen:v,sheenColorMap:Ee,sheenRoughnessMap:ke,specularMap:Pe,specularColorMap:Ce,specularIntensityMap:Ke,transmission:B,transmissionMap:Je,thicknessMap:je,gradientMap:z,opaque:x.transparent===!1&&x.blending===dr&&x.alphaToCoverage===!1,alphaMap:De,alphaTest:de,alphaHash:Ie,combine:x.combine,mapUv:w&&g(x.map.channel),aoMapUv:$&&g(x.aoMap.channel),lightMapUv:V&&g(x.lightMap.channel),bumpMapUv:j&&g(x.bumpMap.channel),normalMapUv:_e&&g(x.normalMap.channel),displacementMapUv:le&&g(x.displacementMap.channel),emissiveMapUv:ve&&g(x.emissiveMap.channel),metalnessMapUv:ce&&g(x.metalnessMap.channel),roughnessMapUv:Le&&g(x.roughnessMap.channel),anisotropyMapUv:W&&g(x.anisotropyMap.channel),clearcoatMapUv:ne&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(x.sheenRoughnessMap.channel),specularMapUv:Pe&&g(x.specularMap.channel),specularColorMapUv:Ce&&g(x.specularColorMap.channel),specularIntensityMapUv:Ke&&g(x.specularIntensityMap.channel),transmissionMapUv:Je&&g(x.transmissionMap.channel),thicknessMapUv:je&&g(x.thicknessMap.channel),alphaMapUv:De&&g(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(_e||D),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(w||De),fog:!!oe,useFog:x.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:tt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:ge,decodeVideoTexture:w&&x.map.isVideoTexture===!0&&mt.getTransfer(x.map.colorSpace)===Et,decodeVideoTextureEmissive:ve&&x.emissiveMap.isVideoTexture===!0&&mt.getTransfer(x.emissiveMap.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xn,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Oe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&x.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)R.push(U),R.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(R,x),M(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function p(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function M(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){const R=h[x.type];let U;if(R){const I=fi[R];U=Hb.clone(I.uniforms)}else U=x.uniforms;return U}function y(x,R){let U=u.get(R);return U!==void 0?++U.usedTimes:(U=new xR(t,R,x,s),c.push(U),u.set(R,U)),U}function A(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function L(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:L}}function TR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function AR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function $h(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,_,m,p){let M=t[e];return M===void 0?(M={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},t[e]=M):(M.id=d.id,M.object=d,M.geometry=h,M.material=g,M.materialVariant=o(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,h,g,_,m,p){const M=a(d,h,g,_,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):n.push(M)}function c(d,h,g,_,m,p){const M=a(d,h,g,_,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function u(d,h,g){n.length>1&&n.sort(d||AR),i.length>1&&i.sort(h||$h),s.length>1&&s.sort(h||$h),g&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function wR(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Yh,t.set(i,[o])):s>=r.length?(o=new Yh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new dt};break;case"SpotLight":n={position:new q,direction:new q,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function CR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PR=0;function DR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LR(t){const e=new RR,n=CR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,r=new Ut,o=new Ut;function a(c){let u=0,f=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,M=0,b=0,y=0,A=0,T=0,L=0;c.sort(DR);for(let R=0,U=c.length;R<U;R++){const I=c[R],k=I.color,ie=I.intensity,oe=I.distance;let X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fs?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=k.r*ie,f+=k.g*ie,d+=k.b*ie;else if(I.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(I.sh.coefficients[te],ie);L++}else if(I.isDirectionalLight){const te=e.get(I);if(te.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,Z=n.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[h]=Z,i.directionalShadowMap[h]=X,i.directionalShadowMatrix[h]=I.shadow.matrix,M++}i.directional[h]=te,h++}else if(I.isSpotLight){const te=e.get(I);te.position.setFromMatrixPosition(I.matrixWorld),te.color.copy(k).multiplyScalar(ie),te.distance=oe,te.coneCos=Math.cos(I.angle),te.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),te.decay=I.decay,i.spot[_]=te;const G=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,G.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[_]=G.matrix,I.castShadow){const Z=n.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=X,y++}_++}else if(I.isRectAreaLight){const te=e.get(I);te.color.copy(k).multiplyScalar(ie),te.halfWidth.set(I.width*.5,0,0),te.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=te,m++}else if(I.isPointLight){const te=e.get(I);if(te.color.copy(I.color).multiplyScalar(I.intensity),te.distance=I.distance,te.decay=I.decay,I.castShadow){const G=I.shadow,Z=n.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=te,g++}else if(I.isHemisphereLight){const te=e.get(I);te.skyColor.copy(I.color).multiplyScalar(ie),te.groundColor.copy(I.groundColor).multiplyScalar(ie),i.hemi[p]=te,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==h||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==b||x.numSpotShadows!==y||x.numSpotMaps!==A||x.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,x.directionalLength=h,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=b,x.numSpotShadows=y,x.numSpotMaps=A,x.numLightProbes=L,i.version=PR++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const b=c[p];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Kh(t){const e=new LR(t),n=[],i=[],s=[];function r(d){f.camera=d,n.length=0,i.length=0,s.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function IR(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Kh(t),e.set(s,[a])):r>=o.length?(a=new Kh(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const NR=`void main() {
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
}`,OR=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],FR=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Zh=new Ut,Jr=new q,Mc=new q;function BR(t,e,n){let i=new Mf;const s=new nt,r=new nt,o=new Ot,a=new Xb,l=new qb,c={},u=n.maxTextureSize,f={[ls]:Cn,[Cn]:ls,[Xn]:Xn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:NR,fragmentShader:UR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let p=this.type;this.render=function(T,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===IM&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ma);const R=t.getRenderTarget(),U=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Oi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const ie=p!==this.type;ie&&L.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(X=>X.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,X=T.length;oe<X;oe++){const te=T[oe],G=te.shadow;if(G===void 0){Qe("WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Z=G.getFrameExtents();s.multiply(Z),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,G.mapSize.y=r.y));const he=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=he,G.map===null||ie===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===eo){if(te.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new _i(s.x,s.y,{format:Fs,type:Hi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),G.map.texture.name=te.name+".shadowMap",G.map.depthTexture=new Tr(s.x,s.y,hi),G.map.depthTexture.name=te.name+".shadowMapDepth",G.map.depthTexture.format=Vi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn}else te.isPointLight?(G.map=new Mg(s.x),G.map.depthTexture=new zb(s.x,yi)):(G.map=new _i(s.x,s.y),G.map.depthTexture=new Tr(s.x,s.y,yi)),G.map.depthTexture.name=te.name+".shadowMap",G.map.depthTexture.format=Vi,this.type===Ma?(G.map.depthTexture.compareFunction=he?xf:vf,G.map.depthTexture.minFilter=hn,G.map.depthTexture.magFilter=hn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn);G.camera.updateProjectionMatrix()}const ye=G.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ye;me++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,me),t.clear();else{me===0&&(t.setRenderTarget(G.map),t.clear());const Me=G.getViewport(me);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),k.viewport(o)}if(te.isPointLight){const Me=G.camera,tt=G.matrix,lt=te.distance||Me.far;lt!==Me.far&&(Me.far=lt,Me.updateProjectionMatrix()),Jr.setFromMatrixPosition(te.matrixWorld),Me.position.copy(Jr),Mc.copy(Me.position),Mc.add(OR[me]),Me.up.copy(FR[me]),Me.lookAt(Mc),Me.updateMatrixWorld(),tt.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Zh.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Zh,Me.coordinateSystem,Me.reversedDepth)}else G.updateMatrices(te);i=G.getFrustum(),y(L,x,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===eo&&M(G,x),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(R,U,I)};function M(T,L){const x=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _i(s.x,s.y,{format:Fs,type:Hi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(L,null,x,d,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(L,null,x,h,_,null)}function b(T,L,x,R){let U=null;const I=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)U=I;else if(U=x.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const k=U.uuid,ie=L.uuid;let oe=c[k];oe===void 0&&(oe={},c[k]=oe);let X=oe[ie];X===void 0&&(X=U.clone(),oe[ie]=X,L.addEventListener("dispose",A)),U=X}if(U.visible=L.visible,U.wireframe=L.wireframe,R===eo?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:f[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const k=t.properties.get(U);k.light=x}return U}function y(T,L,x,R,U){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===eo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const ie=e.update(T),oe=T.material;if(Array.isArray(oe)){const X=ie.groups;for(let te=0,G=X.length;te<G;te++){const Z=X[te],he=oe[Z.materialIndex];if(he&&he.visible){const ye=b(T,he,R,U);T.onBeforeShadow(t,T,L,x,ie,ye,Z),t.renderBufferDirect(x,null,ie,ye,T,Z),T.onAfterShadow(t,T,L,x,ie,ye,Z)}}}else if(oe.visible){const X=b(T,oe,R,U);T.onBeforeShadow(t,T,L,x,ie,X,null),t.renderBufferDirect(x,null,ie,X,T,null),T.onAfterShadow(t,T,L,x,ie,X,null)}}const k=T.children;for(let ie=0,oe=k.length;ie<oe;ie++)y(k[ie],L,x,R,U)}function A(T){T.target.removeEventListener("dispose",A);for(const x in c){const R=c[x],U=T.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}function zR(t,e){function n(){let z=!1;const De=new Ot;let de=null;const Ie=new Ot(0,0,0,0);return{setMask:function(Oe){de!==Oe&&!z&&(t.colorMask(Oe,Oe,Oe,Oe),de=Oe)},setLocked:function(Oe){z=Oe},setClear:function(Oe,ge,Xe,Ge,ae){ae===!0&&(Oe*=Ge,ge*=Ge,Xe*=Ge),De.set(Oe,ge,Xe,Ge),Ie.equals(De)===!1&&(t.clearColor(Oe,ge,Xe,Ge),Ie.copy(De))},reset:function(){z=!1,de=null,Ie.set(-1,0,0,0)}}}function i(){let z=!1,De=!1,de=null,Ie=null,Oe=null;return{setReversed:function(ge){if(De!==ge){const Xe=e.get("EXT_clip_control");ge?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),De=ge;const Ge=Oe;Oe=null,this.setClear(Ge)}},getReversed:function(){return De},setTest:function(ge){ge?Y(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ge){de!==ge&&!z&&(t.depthMask(ge),de=ge)},setFunc:function(ge){if(De&&(ge=db[ge]),Ie!==ge){switch(ge){case qc:t.depthFunc(t.NEVER);break;case $c:t.depthFunc(t.ALWAYS);break;case Yc:t.depthFunc(t.LESS);break;case br:t.depthFunc(t.LEQUAL);break;case Kc:t.depthFunc(t.EQUAL);break;case Zc:t.depthFunc(t.GEQUAL);break;case Jc:t.depthFunc(t.GREATER);break;case jc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ie=ge}},setLocked:function(ge){z=ge},setClear:function(ge){Oe!==ge&&(Oe=ge,De&&(ge=1-ge),t.clearDepth(ge))},reset:function(){z=!1,de=null,Ie=null,Oe=null,De=!1}}}function s(){let z=!1,De=null,de=null,Ie=null,Oe=null,ge=null,Xe=null,Ge=null,ae=null;return{setTest:function(J){z||(J?Y(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(J){De!==J&&!z&&(t.stencilMask(J),De=J)},setFunc:function(J,We,rt){(de!==J||Ie!==We||Oe!==rt)&&(t.stencilFunc(J,We,rt),de=J,Ie=We,Oe=rt)},setOp:function(J,We,rt){(ge!==J||Xe!==We||Ge!==rt)&&(t.stencilOp(J,We,rt),ge=J,Xe=We,Ge=rt)},setLocked:function(J){z=J},setClear:function(J){ae!==J&&(t.clearStencil(J),ae=J)},reset:function(){z=!1,De=null,de=null,Ie=null,Oe=null,ge=null,Xe=null,Ge=null,ae=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],_=null,m=!1,p=null,M=null,b=null,y=null,A=null,T=null,L=null,x=new dt(0,0,0),R=0,U=!1,I=null,k=null,ie=null,oe=null,X=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const he=t.getParameter(t.VERSION);he.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(he)[1]),G=Z>=1):he.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),G=Z>=2);let ye=null,me={};const Me=t.getParameter(t.SCISSOR_BOX),tt=t.getParameter(t.VIEWPORT),lt=new Ot().fromArray(Me),st=new Ot().fromArray(tt);function K(z,De,de,Ie){const Oe=new Uint8Array(4),ge=t.createTexture();t.bindTexture(z,ge),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<de;Xe++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(De,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,Oe):t.texImage2D(De+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Oe);return ge}const O={};O[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),O[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),O[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(t.DEPTH_TEST),o.setFunc(br),j(!1),_e(Xd),Y(t.CULL_FACE),$(Oi);function Y(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function ue(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function xe(z,De){return d[z]!==De?(t.bindFramebuffer(z,De),d[z]=De,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=De),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=De),!0):!1}function be(z,De){let de=g,Ie=!1;if(z){de=h.get(De),de===void 0&&(de=[],h.set(De,de));const Oe=z.textures;if(de.length!==Oe.length||de[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Xe=Oe.length;ge<Xe;ge++)de[ge]=t.COLOR_ATTACHMENT0+ge;de.length=Oe.length,Ie=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,Ie=!0);Ie&&t.drawBuffers(de)}function w(z){return _!==z?(t.useProgram(z),_=z,!0):!1}const P={[Es]:t.FUNC_ADD,[UM]:t.FUNC_SUBTRACT,[OM]:t.FUNC_REVERSE_SUBTRACT};P[FM]=t.MIN,P[BM]=t.MAX;const F={[zM]:t.ZERO,[kM]:t.ONE,[HM]:t.SRC_COLOR,[Wc]:t.SRC_ALPHA,[$M]:t.SRC_ALPHA_SATURATE,[XM]:t.DST_COLOR,[GM]:t.DST_ALPHA,[VM]:t.ONE_MINUS_SRC_COLOR,[Xc]:t.ONE_MINUS_SRC_ALPHA,[qM]:t.ONE_MINUS_DST_COLOR,[WM]:t.ONE_MINUS_DST_ALPHA,[YM]:t.CONSTANT_COLOR,[KM]:t.ONE_MINUS_CONSTANT_COLOR,[ZM]:t.CONSTANT_ALPHA,[JM]:t.ONE_MINUS_CONSTANT_ALPHA};function $(z,De,de,Ie,Oe,ge,Xe,Ge,ae,J){if(z===Oi){m===!0&&(ue(t.BLEND),m=!1);return}if(m===!1&&(Y(t.BLEND),m=!0),z!==NM){if(z!==p||J!==U){if((M!==Es||A!==Es)&&(t.blendEquation(t.FUNC_ADD),M=Es,A=Es),J)switch(z){case dr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qd:t.blendFunc(t.ONE,t.ONE);break;case $d:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:vt("WebGLState: Invalid blending: ",z);break}else switch(z){case dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $d:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yd:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",z);break}b=null,y=null,T=null,L=null,x.set(0,0,0),R=0,p=z,U=J}return}Oe=Oe||De,ge=ge||de,Xe=Xe||Ie,(De!==M||Oe!==A)&&(t.blendEquationSeparate(P[De],P[Oe]),M=De,A=Oe),(de!==b||Ie!==y||ge!==T||Xe!==L)&&(t.blendFuncSeparate(F[de],F[Ie],F[ge],F[Xe]),b=de,y=Ie,T=ge,L=Xe),(Ge.equals(x)===!1||ae!==R)&&(t.blendColor(Ge.r,Ge.g,Ge.b,ae),x.copy(Ge),R=ae),p=z,U=!1}function V(z,De){z.side===Xn?ue(t.CULL_FACE):Y(t.CULL_FACE);let de=z.side===Cn;De&&(de=!de),j(de),z.blending===dr&&z.transparent===!1?$(Oi):$(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Ie=z.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ve(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function j(z){I!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),I=z)}function _e(z){z!==DM?(Y(t.CULL_FACE),z!==k&&(z===Xd?t.cullFace(t.BACK):z===LM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),k=z}function le(z){z!==ie&&(G&&t.lineWidth(z),ie=z)}function ve(z,De,de){z?(Y(t.POLYGON_OFFSET_FILL),(oe!==De||X!==de)&&(oe=De,X=de,o.getReversed()&&(De=-De),t.polygonOffset(De,de))):ue(t.POLYGON_OFFSET_FILL)}function ce(z){z?Y(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function Le(z){z===void 0&&(z=t.TEXTURE0+te-1),ye!==z&&(t.activeTexture(z),ye=z)}function D(z,De,de){de===void 0&&(ye===null?de=t.TEXTURE0+te-1:de=ye);let Ie=me[de];Ie===void 0&&(Ie={type:void 0,texture:void 0},me[de]=Ie),(Ie.type!==z||Ie.texture!==De)&&(ye!==de&&(t.activeTexture(de),ye=de),t.bindTexture(z,De||O[z]),Ie.type=z,Ie.texture=De)}function ze(){const z=me[ye];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function pe(){try{t.compressedTexImage2D(...arguments)}catch(z){vt("WebGLState:",z)}}function E(){try{t.compressedTexImage3D(...arguments)}catch(z){vt("WebGLState:",z)}}function v(){try{t.texSubImage2D(...arguments)}catch(z){vt("WebGLState:",z)}}function B(){try{t.texSubImage3D(...arguments)}catch(z){vt("WebGLState:",z)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(z){vt("WebGLState:",z)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(z){vt("WebGLState:",z)}}function Se(){try{t.texStorage2D(...arguments)}catch(z){vt("WebGLState:",z)}}function Ae(){try{t.texStorage3D(...arguments)}catch(z){vt("WebGLState:",z)}}function re(){try{t.texImage2D(...arguments)}catch(z){vt("WebGLState:",z)}}function fe(){try{t.texImage3D(...arguments)}catch(z){vt("WebGLState:",z)}}function Ee(z){return f[z]!==void 0?f[z]:t.getParameter(z)}function ke(z,De){f[z]!==De&&(t.pixelStorei(z,De),f[z]=De)}function Pe(z){lt.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),lt.copy(z))}function Ce(z){st.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),st.copy(z))}function Ke(z,De){let de=c.get(De);de===void 0&&(de=new WeakMap,c.set(De,de));let Ie=de.get(z);Ie===void 0&&(Ie=t.getUniformBlockIndex(De,z.name),de.set(z,Ie))}function Je(z,De){const Ie=c.get(De).get(z);l.get(De)!==Ie&&(t.uniformBlockBinding(De,Ie,z.__bindingPointIndex),l.set(De,Ie))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},ye=null,me={},d={},h=new WeakMap,g=[],_=null,m=!1,p=null,M=null,b=null,y=null,A=null,T=null,L=null,x=new dt(0,0,0),R=0,U=!1,I=null,k=null,ie=null,oe=null,X=null,lt.set(0,0,t.canvas.width,t.canvas.height),st.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:ue,bindFramebuffer:xe,drawBuffers:be,useProgram:w,setBlending:$,setMaterial:V,setFlipSided:j,setCullFace:_e,setLineWidth:le,setPolygonOffset:ve,setScissorTest:ce,activeTexture:Le,bindTexture:D,unbindTexture:ze,compressedTexImage2D:pe,compressedTexImage3D:E,texImage2D:re,texImage3D:fe,pixelStorei:ke,getParameter:Ee,updateUBOMapping:Ke,uniformBlockBinding:Je,texStorage2D:Se,texStorage3D:Ae,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:ne,scissor:Pe,viewport:Ce,reset:je}}function kR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return g?new OffscreenCanvas(E,v):$a("canvas")}function m(E,v,B){let W=1;const ne=pe(E);if((ne.width>B||ne.height>B)&&(W=B/Math.max(ne.width,ne.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Se=Math.floor(W*ne.width),Ae=Math.floor(W*ne.height);d===void 0&&(d=_(Se,Ae));const re=v?_(Se,Ae):d;return re.width=Se,re.height=Ae,re.getContext("2d").drawImage(E,0,0,Se,Ae),Qe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Se+"x"+Ae+")."),re}else return"data"in E&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),E;return E}function p(E){return E.generateMipmaps}function M(E){t.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(E,v,B,W,ne,Se=!1){if(E!==null){if(t[E]!==void 0)return t[E];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Ae;W&&(Ae=e.get("EXT_texture_norm16"),Ae||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=v;if(v===t.RED&&(B===t.FLOAT&&(re=t.R32F),B===t.HALF_FLOAT&&(re=t.R16F),B===t.UNSIGNED_BYTE&&(re=t.R8),B===t.UNSIGNED_SHORT&&Ae&&(re=Ae.R16_EXT),B===t.SHORT&&Ae&&(re=Ae.R16_SNORM_EXT)),v===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.R8UI),B===t.UNSIGNED_SHORT&&(re=t.R16UI),B===t.UNSIGNED_INT&&(re=t.R32UI),B===t.BYTE&&(re=t.R8I),B===t.SHORT&&(re=t.R16I),B===t.INT&&(re=t.R32I)),v===t.RG&&(B===t.FLOAT&&(re=t.RG32F),B===t.HALF_FLOAT&&(re=t.RG16F),B===t.UNSIGNED_BYTE&&(re=t.RG8),B===t.UNSIGNED_SHORT&&Ae&&(re=Ae.RG16_EXT),B===t.SHORT&&Ae&&(re=Ae.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.RG8UI),B===t.UNSIGNED_SHORT&&(re=t.RG16UI),B===t.UNSIGNED_INT&&(re=t.RG32UI),B===t.BYTE&&(re=t.RG8I),B===t.SHORT&&(re=t.RG16I),B===t.INT&&(re=t.RG32I)),v===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.RGB8UI),B===t.UNSIGNED_SHORT&&(re=t.RGB16UI),B===t.UNSIGNED_INT&&(re=t.RGB32UI),B===t.BYTE&&(re=t.RGB8I),B===t.SHORT&&(re=t.RGB16I),B===t.INT&&(re=t.RGB32I)),v===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(re=t.RGBA16UI),B===t.UNSIGNED_INT&&(re=t.RGBA32UI),B===t.BYTE&&(re=t.RGBA8I),B===t.SHORT&&(re=t.RGBA16I),B===t.INT&&(re=t.RGBA32I)),v===t.RGB&&(B===t.UNSIGNED_SHORT&&Ae&&(re=Ae.RGB16_EXT),B===t.SHORT&&Ae&&(re=Ae.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(re=t.R11F_G11F_B10F)),v===t.RGBA){const fe=Se?qa:mt.getTransfer(ne);B===t.FLOAT&&(re=t.RGBA32F),B===t.HALF_FLOAT&&(re=t.RGBA16F),B===t.UNSIGNED_BYTE&&(re=fe===Et?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&Ae&&(re=Ae.RGBA16_EXT),B===t.SHORT&&Ae&&(re=Ae.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(E,v){let B;return E?v===null||v===yi||v===So?B=t.DEPTH24_STENCIL8:v===hi?B=t.DEPTH32F_STENCIL8:v===yo&&(B=t.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===yi||v===So?B=t.DEPTH_COMPONENT24:v===hi?B=t.DEPTH_COMPONENT32F:v===yo&&(B=t.DEPTH_COMPONENT16),B}function T(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==rn&&E.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function L(E){const v=E.target;v.removeEventListener("dispose",L),R(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function x(E){const v=E.target;v.removeEventListener("dispose",x),I(v)}function R(E){const v=i.get(E);if(v.__webglInit===void 0)return;const B=E.source,W=h.get(B);if(W){const ne=W[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&U(E),Object.keys(W).length===0&&h.delete(B)}i.remove(E)}function U(E){const v=i.get(E);t.deleteTexture(v.__webglTexture);const B=E.source,W=h.get(B);delete W[v.__cacheKey],o.memory.textures--}function I(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let ne=0;ne<v.__webglFramebuffer[W].length;ne++)t.deleteFramebuffer(v.__webglFramebuffer[W][ne]);else t.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)t.deleteFramebuffer(v.__webglFramebuffer[W]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=E.textures;for(let W=0,ne=B.length;W<ne;W++){const Se=i.get(B[W]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(B[W])}i.remove(E)}let k=0;function ie(){k=0}function oe(){return k}function X(E){k=E}function te(){const E=k;return E>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),k+=1,E}function G(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Z(E,v){const B=i.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){const W=E.image;if(W===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(B,E,v);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+v)}function he(E,v){const B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ue(B,E,v);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+v)}function ye(E,v){const B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ue(B,E,v);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+v)}function me(E,v){const B=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){xe(B,E,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+v)}const Me={[Qc]:t.REPEAT,[Ni]:t.CLAMP_TO_EDGE,[eu]:t.MIRRORED_REPEAT},tt={[rn]:t.NEAREST,[eb]:t.NEAREST_MIPMAP_NEAREST,[Wo]:t.NEAREST_MIPMAP_LINEAR,[hn]:t.LINEAR,[Xl]:t.LINEAR_MIPMAP_NEAREST,[Rs]:t.LINEAR_MIPMAP_LINEAR},lt={[ib]:t.NEVER,[lb]:t.ALWAYS,[sb]:t.LESS,[vf]:t.LEQUAL,[rb]:t.EQUAL,[xf]:t.GEQUAL,[ob]:t.GREATER,[ab]:t.NOTEQUAL};function st(E,v){if(v.type===hi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===hn||v.magFilter===Xl||v.magFilter===Wo||v.magFilter===Rs||v.minFilter===hn||v.minFilter===Xl||v.minFilter===Wo||v.minFilter===Rs)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,Me[v.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,Me[v.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,Me[v.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,tt[v.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,tt[v.minFilter]),v.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,lt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==Wo&&v.minFilter!==Rs||v.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function K(E,v){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",L));const W=v.source;let ne=h.get(W);ne===void 0&&(ne={},h.set(W,ne));const Se=G(v);if(Se!==E.__cacheKey){ne[Se]===void 0&&(ne[Se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[Se].usedTimes++;const Ae=ne[E.__cacheKey];Ae!==void 0&&(ne[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&U(v)),E.__cacheKey=Se,E.__webglTexture=ne[Se].texture}return B}function O(E,v,B){return Math.floor(Math.floor(E/B)/v)}function Y(E,v,B,W){const Se=E.updateRanges;if(Se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,B,W,v.data);else{Se.sort((ke,Pe)=>ke.start-Pe.start);let Ae=0;for(let ke=1;ke<Se.length;ke++){const Pe=Se[Ae],Ce=Se[ke],Ke=Pe.start+Pe.count,Je=O(Ce.start,v.width,4),je=O(Pe.start,v.width,4);Ce.start<=Ke+1&&Je===je&&O(Ce.start+Ce.count-1,v.width,4)===Je?Pe.count=Math.max(Pe.count,Ce.start+Ce.count-Pe.start):(++Ae,Se[Ae]=Ce)}Se.length=Ae+1;const re=n.getParameter(t.UNPACK_ROW_LENGTH),fe=n.getParameter(t.UNPACK_SKIP_PIXELS),Ee=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ke=0,Pe=Se.length;ke<Pe;ke++){const Ce=Se[ke],Ke=Math.floor(Ce.start/4),Je=Math.ceil(Ce.count/4),je=Ke%v.width,z=Math.floor(Ke/v.width),De=Je,de=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,je),n.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,je,z,De,de,B,W,v.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,re),n.pixelStorei(t.UNPACK_SKIP_PIXELS,fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ee)}}function ue(E,v,B){let W=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=t.TEXTURE_3D);const ne=K(E,v),Se=v.source;n.bindTexture(W,E.__webglTexture,t.TEXTURE0+B);const Ae=i.get(Se);if(Se.version!==Ae.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const de=mt.getPrimaries(mt.workingColorSpace),Ie=v.colorSpace===ss?null:mt.getPrimaries(v.colorSpace),Oe=v.colorSpace===ss||de===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let fe=m(v.image,!1,s.maxTextureSize);fe=ze(v,fe);const Ee=r.convert(v.format,v.colorSpace),ke=r.convert(v.type);let Pe=y(v.internalFormat,Ee,ke,v.normalized,v.colorSpace,v.isVideoTexture);st(W,v);let Ce;const Ke=v.mipmaps,Je=v.isVideoTexture!==!0,je=Ae.__version===void 0||ne===!0,z=Se.dataReady,De=T(v,fe);if(v.isDepthTexture)Pe=A(v.format===Cs,v.type),je&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Pe,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Pe,fe.width,fe.height,0,Ee,ke,null));else if(v.isDataTexture)if(Ke.length>0){Je&&je&&n.texStorage2D(t.TEXTURE_2D,De,Pe,Ke[0].width,Ke[0].height);for(let de=0,Ie=Ke.length;de<Ie;de++)Ce=Ke[de],Je?z&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ce.width,Ce.height,Ee,ke,Ce.data):n.texImage2D(t.TEXTURE_2D,de,Pe,Ce.width,Ce.height,0,Ee,ke,Ce.data);v.generateMipmaps=!1}else Je?(je&&n.texStorage2D(t.TEXTURE_2D,De,Pe,fe.width,fe.height),z&&Y(v,fe,Ee,ke)):n.texImage2D(t.TEXTURE_2D,0,Pe,fe.width,fe.height,0,Ee,ke,fe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Je&&je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Pe,Ke[0].width,Ke[0].height,fe.depth);for(let de=0,Ie=Ke.length;de<Ie;de++)if(Ce=Ke[de],v.format!==Yn)if(Ee!==null)if(Je){if(z)if(v.layerUpdates.size>0){const Oe=wh(Ce.width,Ce.height,v.format,v.type);for(const ge of v.layerUpdates){const Xe=Ce.data.subarray(ge*Oe/Ce.data.BYTES_PER_ELEMENT,(ge+1)*Oe/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,ge,Ce.width,Ce.height,1,Ee,Xe)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Ce.width,Ce.height,fe.depth,Ee,Ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Pe,Ce.width,Ce.height,fe.depth,0,Ce.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,Ce.width,Ce.height,fe.depth,Ee,ke,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Pe,Ce.width,Ce.height,fe.depth,0,Ee,ke,Ce.data)}else{Je&&je&&n.texStorage2D(t.TEXTURE_2D,De,Pe,Ke[0].width,Ke[0].height);for(let de=0,Ie=Ke.length;de<Ie;de++)Ce=Ke[de],v.format!==Yn?Ee!==null?Je?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,Ce.width,Ce.height,Ee,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Pe,Ce.width,Ce.height,0,Ce.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?z&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ce.width,Ce.height,Ee,ke,Ce.data):n.texImage2D(t.TEXTURE_2D,de,Pe,Ce.width,Ce.height,0,Ee,ke,Ce.data)}else if(v.isDataArrayTexture)if(Je){if(je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Pe,fe.width,fe.height,fe.depth),z)if(v.layerUpdates.size>0){const de=wh(fe.width,fe.height,v.format,v.type);for(const Ie of v.layerUpdates){const Oe=fe.data.subarray(Ie*de/fe.data.BYTES_PER_ELEMENT,(Ie+1)*de/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ie,fe.width,fe.height,1,Ee,ke,Oe)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,ke,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,Ee,ke,fe.data);else if(v.isData3DTexture)Je?(je&&n.texStorage3D(t.TEXTURE_3D,De,Pe,fe.width,fe.height,fe.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,ke,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,Ee,ke,fe.data);else if(v.isFramebufferTexture){if(je)if(Je)n.texStorage2D(t.TEXTURE_2D,De,Pe,fe.width,fe.height);else{let de=fe.width,Ie=fe.height;for(let Oe=0;Oe<De;Oe++)n.texImage2D(t.TEXTURE_2D,Oe,Pe,de,Ie,0,Ee,ke,null),de>>=1,Ie>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const de=t.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),fe.parentNode!==de){de.appendChild(fe),f.add(v),de.onpaint=Ie=>{const Oe=Ie.changedElements;for(const ge of f)Oe.includes(ge.image)&&(ge.needsUpdate=!0)},de.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,fe);else{const Oe=t.RGBA,ge=t.RGBA,Xe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Oe,ge,Xe,fe)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(Je&&je){const de=pe(Ke[0]);n.texStorage2D(t.TEXTURE_2D,De,Pe,de.width,de.height)}for(let de=0,Ie=Ke.length;de<Ie;de++)Ce=Ke[de],Je?z&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,Ee,ke,Ce):n.texImage2D(t.TEXTURE_2D,de,Pe,Ee,ke,Ce);v.generateMipmaps=!1}else if(Je){if(je){const de=pe(fe);n.texStorage2D(t.TEXTURE_2D,De,Pe,de.width,de.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,ke,fe)}else n.texImage2D(t.TEXTURE_2D,0,Pe,Ee,ke,fe);p(v)&&M(W),Ae.__version=Se.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function xe(E,v,B){if(v.image.length!==6)return;const W=K(E,v),ne=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+B);const Se=i.get(ne);if(ne.version!==Se.__version||W===!0){n.activeTexture(t.TEXTURE0+B);const Ae=mt.getPrimaries(mt.workingColorSpace),re=v.colorSpace===ss?null:mt.getPrimaries(v.colorSpace),fe=v.colorSpace===ss||Ae===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,ke=v.image[0]&&v.image[0].isDataTexture,Pe=[];for(let ge=0;ge<6;ge++)!Ee&&!ke?Pe[ge]=m(v.image[ge],!0,s.maxCubemapSize):Pe[ge]=ke?v.image[ge].image:v.image[ge],Pe[ge]=ze(v,Pe[ge]);const Ce=Pe[0],Ke=r.convert(v.format,v.colorSpace),Je=r.convert(v.type),je=y(v.internalFormat,Ke,Je,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,De=Se.__version===void 0||W===!0,de=ne.dataReady;let Ie=T(v,Ce);st(t.TEXTURE_CUBE_MAP,v);let Oe;if(Ee){z&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,je,Ce.width,Ce.height);for(let ge=0;ge<6;ge++){Oe=Pe[ge].mipmaps;for(let Xe=0;Xe<Oe.length;Xe++){const Ge=Oe[Xe];v.format!==Yn?Ke!==null?z?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,0,0,Ge.width,Ge.height,Ke,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,je,Ge.width,Ge.height,0,Ge.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,0,0,Ge.width,Ge.height,Ke,Je,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe,je,Ge.width,Ge.height,0,Ke,Je,Ge.data)}}}else{if(Oe=v.mipmaps,z&&De){Oe.length>0&&Ie++;const ge=pe(Pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,je,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ke){z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Pe[ge].width,Pe[ge].height,Ke,Je,Pe[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,je,Pe[ge].width,Pe[ge].height,0,Ke,Je,Pe[ge].data);for(let Xe=0;Xe<Oe.length;Xe++){const ae=Oe[Xe].image[ge].image;z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,0,0,ae.width,ae.height,Ke,Je,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,je,ae.width,ae.height,0,Ke,Je,ae.data)}}else{z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,Je,Pe[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,je,Ke,Je,Pe[ge]);for(let Xe=0;Xe<Oe.length;Xe++){const Ge=Oe[Xe];z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,0,0,Ke,Je,Ge.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Xe+1,je,Ke,Je,Ge.image[ge])}}}p(v)&&M(t.TEXTURE_CUBE_MAP),Se.__version=ne.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function be(E,v,B,W,ne,Se){const Ae=r.convert(B.format,B.colorSpace),re=r.convert(B.type),fe=y(B.internalFormat,Ae,re,B.normalized,B.colorSpace),Ee=i.get(v),ke=i.get(B);if(ke.__renderTarget=v,!Ee.__hasExternalTextures){const Pe=Math.max(1,v.width>>Se),Ce=Math.max(1,v.height>>Se);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Se,fe,Pe,Ce,v.depth,0,Ae,re,null):n.texImage2D(ne,Se,fe,Pe,Ce,0,Ae,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),Le(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,ne,ke.__webglTexture,0,ce(v)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,ne,ke.__webglTexture,Se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(E,v,B){if(t.bindRenderbuffer(t.RENDERBUFFER,E),v.depthBuffer){const W=v.depthTexture,ne=W&&W.isDepthTexture?W.type:null,Se=A(v.stencilBuffer,ne),Ae=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Le(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce(v),Se,v.width,v.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce(v),Se,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Se,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,E)}else{const W=v.textures;for(let ne=0;ne<W.length;ne++){const Se=W[ne],Ae=r.convert(Se.format,Se.colorSpace),re=r.convert(Se.type),fe=y(Se.internalFormat,Ae,re,Se.normalized,Se.colorSpace);Le(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce(v),fe,v.width,v.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce(v),fe,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,fe,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function P(E,v,B){const W=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=i.get(v.depthTexture);if(ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,v.depthTexture.addEventListener("dispose",L)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),st(t.TEXTURE_CUBE_MAP,v.depthTexture);const Ee=r.convert(v.depthTexture.format),ke=r.convert(v.depthTexture.type);let Pe;v.depthTexture.format===Vi?Pe=t.DEPTH_COMPONENT24:v.depthTexture.format===Cs&&(Pe=t.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Pe,v.width,v.height,0,Ee,ke,null)}}else Z(v.depthTexture,0);const Se=ne.__webglTexture,Ae=ce(v),re=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,fe=v.depthTexture.format===Cs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Vi)Le(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,re,Se,0,Ae):t.framebufferTexture2D(t.FRAMEBUFFER,fe,re,Se,0);else if(v.depthTexture.format===Cs)Le(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,re,Se,0,Ae):t.framebufferTexture2D(t.FRAMEBUFFER,fe,re,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(E){const v=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const W=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const ne=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",ne)};W.addEventListener("dispose",ne),v.__depthDisposeCallback=ne}v.__boundDepthTexture=W}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)P(v.__webglFramebuffer[W],E,W);else{const W=E.texture.mipmaps;W&&W.length>0?P(v.__webglFramebuffer[0],E,0):P(v.__webglFramebuffer,E,0)}else if(B){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=t.createRenderbuffer(),w(v.__webglDepthbuffer[W],E,!1);else{const ne=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=v.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Se)}}else{const W=E.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),w(v.__webglDepthbuffer,E,!1);else{const ne=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(E,v,B){const W=i.get(E);v!==void 0&&be(W.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&F(E)}function V(E){const v=E.texture,B=i.get(E),W=i.get(v);E.addEventListener("dispose",x);const ne=E.textures,Se=E.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=v.version,o.memory.textures++),Se){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let fe=0;fe<v.mipmaps.length;fe++)B.__webglFramebuffer[re][fe]=t.createFramebuffer()}else B.__webglFramebuffer[re]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)B.__webglFramebuffer[re]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let re=0,fe=ne.length;re<fe;re++){const Ee=i.get(ne[re]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&Le(E)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let re=0;re<ne.length;re++){const fe=ne[re];B.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[re]);const Ee=r.convert(fe.format,fe.colorSpace),ke=r.convert(fe.type),Pe=y(fe.internalFormat,Ee,ke,fe.normalized,fe.colorSpace,E.isXRRenderTarget===!0),Ce=ce(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Pe,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,B.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),w(B.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Se){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),st(t.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)be(B.__webglFramebuffer[re][fe],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe);else be(B.__webglFramebuffer[re],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(v)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let re=0,fe=ne.length;re<fe;re++){const Ee=ne[re],ke=i.get(Ee);let Pe=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Pe=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Pe,ke.__webglTexture),st(Pe,Ee),be(B.__webglFramebuffer,E,Ee,t.COLOR_ATTACHMENT0+re,Pe,0),p(Ee)&&M(Pe)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,W.__webglTexture),st(re,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)be(B.__webglFramebuffer[fe],E,v,t.COLOR_ATTACHMENT0,re,fe);else be(B.__webglFramebuffer,E,v,t.COLOR_ATTACHMENT0,re,0);p(v)&&M(re),n.unbindTexture()}E.depthBuffer&&F(E)}function j(E){const v=E.textures;for(let B=0,W=v.length;B<W;B++){const ne=v[B];if(p(ne)){const Se=b(E),Ae=i.get(ne).__webglTexture;n.bindTexture(Se,Ae),M(Se),n.unbindTexture()}}}const _e=[],le=[];function ve(E){if(E.samples>0){if(Le(E)===!1){const v=E.textures,B=E.width,W=E.height;let ne=t.COLOR_BUFFER_BIT;const Se=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(E),re=v.length>1;if(re)for(let Ee=0;Ee<v.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const fe=E.texture.mipmaps;fe&&fe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const ke=i.get(v[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,B,W,0,0,B,W,ne,t.NEAREST),l===!0&&(_e.length=0,le.length=0,_e.push(t.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(_e.push(Se),le.push(Se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,le)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let Ee=0;Ee<v.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const ke=i.get(v[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function ce(E){return Math.min(s.maxSamples,E.samples)}function Le(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function ze(E,v){const B=E.colorSpace,W=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Xa&&B!==ss&&(mt.getTransfer(B)===Et?(W!==Yn||ne!==Nn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",B)),v}function pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=ie,this.getTextureUnits=oe,this.setTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=he,this.setTexture3D=ye,this.setTextureCube=me,this.rebindTextures=$,this.setupRenderTarget=V,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function HR(t,e){function n(i,s=ss){let r;const o=mt.getTransfer(s);if(i===Nn)return t.UNSIGNED_BYTE;if(i===hf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===rg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ng)return t.BYTE;if(i===ig)return t.SHORT;if(i===yo)return t.UNSIGNED_SHORT;if(i===df)return t.INT;if(i===yi)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===Hi)return t.HALF_FLOAT;if(i===og)return t.ALPHA;if(i===ag)return t.RGB;if(i===Yn)return t.RGBA;if(i===Vi)return t.DEPTH_COMPONENT;if(i===Cs)return t.DEPTH_STENCIL;if(i===lg)return t.RED;if(i===mf)return t.RED_INTEGER;if(i===Fs)return t.RG;if(i===gf)return t.RG_INTEGER;if(i===_f)return t.RGBA_INTEGER;if(i===ba||i===Ea||i===Ta||i===Aa)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tu||i===nu||i===iu||i===su)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===iu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===su)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ru||i===ou||i===au||i===lu||i===cu||i===Ga||i===uu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ru||i===ou)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===au)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lu)return r.COMPRESSED_R11_EAC;if(i===cu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ga)return r.COMPRESSED_RG11_EAC;if(i===uu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fu||i===du||i===hu||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===yu||i===Su||i===Mu||i===bu||i===Eu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===du)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_u)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Su)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tu||i===Au||i===wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tu)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ru||i===Cu||i===Wa||i===Pu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ru)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const VR=`
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

}`;class WR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new gg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Si({vertexShader:VR,fragmentShader:GR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new Io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XR extends ps{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new WR,p={},M=n.getContextAttributes();let b=null,y=null;const A=[],T=[],L=new nt;let x=null;const R=new kn;R.viewport=new Ot;const U=new kn;U.viewport=new Ot;const I=[R,U],k=new jb;let ie=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let O=A[K];return O===void 0&&(O=new jl,A[K]=O),O.getTargetRaySpace()},this.getControllerGrip=function(K){let O=A[K];return O===void 0&&(O=new jl,A[K]=O),O.getGripSpace()},this.getHand=function(K){let O=A[K];return O===void 0&&(O=new jl,A[K]=O),O.getHandSpace()};function X(K){const O=T.indexOf(K.inputSource);if(O===-1)return;const Y=A[O];Y!==void 0&&(Y.update(K.inputSource,K.frame,c||o),Y.dispatchEvent({type:K.type,data:K.inputSource}))}function te(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",G);for(let K=0;K<A.length;K++){const O=T[K];O!==null&&(T[K]=null,A[K].disconnect(O))}ie=null,oe=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(b),h=null,d=null,f=null,s=null,y=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",te),s.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,ue=null,xe=null;M.depth&&(xe=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=M.stencil?Cs:Vi,ue=M.stencil?So:yi);const be={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new _i(d.textureWidth,d.textureHeight,{format:Yn,type:Nn,depthTexture:new Tr(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Y={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,Y),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new _i(h.framebufferWidth,h.framebufferHeight,{format:Yn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let O=0;O<K.removed.length;O++){const Y=K.removed[O],ue=T.indexOf(Y);ue>=0&&(T[ue]=null,A[ue].disconnect(Y))}for(let O=0;O<K.added.length;O++){const Y=K.added[O];let ue=T.indexOf(Y);if(ue===-1){for(let be=0;be<A.length;be++)if(be>=T.length){T.push(Y),ue=be;break}else if(T[be]===null){T[be]=Y,ue=be;break}if(ue===-1)break}const xe=A[ue];xe&&xe.connect(Y)}}const Z=new q,he=new q;function ye(K,O,Y){Z.setFromMatrixPosition(O.matrixWorld),he.setFromMatrixPosition(Y.matrixWorld);const ue=Z.distanceTo(he),xe=O.projectionMatrix.elements,be=Y.projectionMatrix.elements,w=xe[14]/(xe[10]-1),P=xe[14]/(xe[10]+1),F=(xe[9]+1)/xe[5],$=(xe[9]-1)/xe[5],V=(xe[8]-1)/xe[0],j=(be[8]+1)/be[0],_e=w*V,le=w*j,ve=ue/(-V+j),ce=ve*-V;if(O.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ce),K.translateZ(ve),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(O.projectionMatrix),K.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const Le=w+ve,D=P+ve,ze=_e-ce,pe=le+(ue-ce),E=F*P/D*Le,v=$*P/D*Le;K.projectionMatrix.makePerspective(ze,pe,E,v,Le,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function me(K,O){O===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(O.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let O=K.near,Y=K.far;m.texture!==null&&(m.depthNear>0&&(O=m.depthNear),m.depthFar>0&&(Y=m.depthFar)),k.near=U.near=R.near=O,k.far=U.far=R.far=Y,(ie!==k.near||oe!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),ie=k.near,oe=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;const ue=K.parent,xe=k.cameras;me(k,ue);for(let be=0;be<xe.length;be++)me(xe[be],ue);xe.length===2?ye(k,R,U):k.projectionMatrix.copy(R.projectionMatrix),Me(K,k,ue)};function Me(K,O,Y){Y===null?K.matrix.copy(O.matrixWorld):(K.matrix.copy(Y.matrixWorld),K.matrix.invert(),K.matrix.multiply(O.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(O.projectionMatrix),K.projectionMatrixInverse.copy(O.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Lu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return p[K]};let tt=null;function lt(K,O){if(u=O.getViewerPose(c||o),g=O,u!==null){const Y=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let ue=!1;Y.length!==k.cameras.length&&(k.cameras.length=0,ue=!0);for(let P=0;P<Y.length;P++){const F=Y[P];let $=null;if(h!==null)$=h.getViewport(F);else{const j=f.getViewSubImage(d,F);$=j.viewport,P===0&&(e.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(y))}let V=I[P];V===void 0&&(V=new kn,V.layers.enable(P),V.viewport=new Ot,I[P]=V),V.matrix.fromArray(F.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(F.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set($.x,$.y,$.width,$.height),P===0&&(k.matrix.copy(V.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ue===!0&&k.cameras.push(V)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const P=f.getDepthInformation(Y[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<Y.length;P++){const F=Y[P].camera;if(F){let $=p[F];$||($=new gg,p[F]=$);const V=f.getCameraImage(F);$.sourceTexture=V}}}}for(let Y=0;Y<A.length;Y++){const ue=T[Y],xe=A[Y];ue!==null&&xe!==void 0&&xe.update(ue,O,c||o)}tt&&tt(K,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}const st=new yg;st.setAnimationLoop(lt),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}}const qR=new Ut,wg=new ot;wg.set(-1,0,0,0,1,0,0,0,1);function $R(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,_g(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,b,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,y=M.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(qR.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wg),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const T=A.program;i.uniformBlockBinding(y,T)}function c(y,A){let T=s[y.id];T===void 0&&(m(y),T=u(y),s[y.id]=T,y.addEventListener("dispose",M));const L=A.program;i.updateUBOMapping(y,L);const x=e.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function u(y){const A=f();y.__bindingPointIndex=A;const T=t.createBuffer(),L=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,L,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,T),T}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const A=s[y.id],T=y.uniforms,L=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let x=0,R=T.length;x<R;x++){const U=T[x];if(Array.isArray(U))for(let I=0,k=U.length;I<k;I++)h(U[I],x,I,L);else h(U,x,0,L)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,A,T,L){if(_(y,A,T,L)===!0){const x=y.__offset,R=y.value;if(Array.isArray(R)){let U=0;for(let I=0;I<R.length;I++){const k=R[I],ie=p(k);g(k,y.__data,U),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(U+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function g(y,A,T){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,T)}function _(y,A,T,L){const x=y.value,R=A+"_"+T;if(L[R]===void 0)return typeof x=="number"||typeof x=="boolean"?L[R]=x:ArrayBuffer.isView(x)?L[R]=x.slice():L[R]=x.clone(),!0;{const U=L[R];if(typeof x=="number"||typeof x=="boolean"){if(U!==x)return L[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(U.equals(x)===!1)return U.copy(x),!0}}return!1}function m(y){const A=y.uniforms;let T=0;const L=16;for(let R=0,U=A.length;R<U;R++){const I=Array.isArray(A[R])?A[R]:[A[R]];for(let k=0,ie=I.length;k<ie;k++){const oe=I[k],X=Array.isArray(oe.value)?oe.value:[oe.value];for(let te=0,G=X.length;te<G;te++){const Z=X[te],he=p(Z),ye=T%L,me=ye%he.boundary,Me=ye+me;T+=me,Me!==0&&L-Me<he.storage&&(T+=L-Me),oe.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=T,T+=he.storage}}}const x=T%L;return x>0&&(T+=L-x),y.__size=T,y.__cache={},this}function p(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",y),A}function M(y){const A=y.target;A.removeEventListener("dispose",M);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function b(){for(const y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:b}}const KR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function ZR(){return ai===null&&(ai=new Nb(KR,16,16,Fs,Hi),ai.name="DFG_LUT",ai.minFilter=hn,ai.magFilter=hn,ai.wrapS=Ni,ai.wrapT=Ni,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class JR{constructor(e={}){const{canvas:n=ub(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Nn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=h,m=new Set([_f,gf,mf]),p=new Set([Nn,yi,yo,So,hf,pf]),M=new Uint32Array(4),b=new Int32Array(4),y=new q;let A=null,T=null;const L=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let I=!1,k=null,ie=null,oe=null,X=null;this._outputColorSpace=zn;let te=0,G=0,Z=null,he=-1,ye=null;const me=new Ot,Me=new Ot;let tt=null;const lt=new dt(0);let st=0,K=n.width,O=n.height,Y=1,ue=null,xe=null;const be=new Ot(0,0,K,O),w=new Ot(0,0,K,O);let P=!1;const F=new Mf;let $=!1,V=!1;const j=new Ut,_e=new q,le=new Ot,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Le(){return Z===null?Y:1}let D=i;function ze(S,N){return n.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ff}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",J,!1),n.addEventListener("webglcontextcreationerror",We,!1),D===null){const N="webgl2";if(D=ze(N,S),D===null)throw ze(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw vt("WebGLRenderer: "+S.message),S}let pe,E,v,B,W,ne,Se,Ae,re,fe,Ee,ke,Pe,Ce,Ke,Je,je,z,De,de,Ie,Oe,ge;function Xe(){pe=new ZA(D),pe.init(),Ie=new HR(D,pe),E=new VA(D,pe,e,Ie),v=new zR(D,pe),E.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),ie=D.createFramebuffer(),oe=D.createFramebuffer(),X=D.createFramebuffer(),B=new QA(D),W=new TR,ne=new kR(D,pe,v,W,E,Ie,B),Se=new KA(U),Ae=new iE(D),Oe=new kA(D,Ae),re=new JA(D,Ae,B,Oe),fe=new tw(D,re,Ae,Oe,B),z=new ew(D,E,ne),Ke=new GA(W),Ee=new ER(U,Se,pe,E,Oe,Ke),ke=new $R(U,W),Pe=new wR,Ce=new IR(pe),je=new zA(U,Se,v,fe,g,l),Je=new BR(U,fe,E),ge=new YR(D,B,E,v),De=new HA(D,pe,B),de=new jA(D,pe,B),B.programs=Ee.programs,U.capabilities=E,U.extensions=pe,U.properties=W,U.renderLists=Pe,U.shadowMap=Je,U.state=v,U.info=B}Xe(),_!==Nn&&(R=new iw(_,n.width,n.height,a,s,r));const Ge=new XR(U,D);this.xr=Ge,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=pe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=pe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(K,O,!1))},this.getSize=function(S){return S.set(K,O)},this.setSize=function(S,N,se=!0){if(Ge.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,O=N,n.width=Math.floor(S*Y),n.height=Math.floor(N*Y),se===!0&&(n.style.width=S+"px",n.style.height=N+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(K*Y,O*Y).floor()},this.setDrawingBufferSize=function(S,N,se){K=S,O=N,Y=se,n.width=Math.floor(S*se),n.height=Math.floor(N*se),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(_===Nn){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(me)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,N,se,Q){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,N,se,Q),v.viewport(me.copy(be).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(w)},this.setScissor=function(S,N,se,Q){S.isVector4?w.set(S.x,S.y,S.z,S.w):w.set(S,N,se,Q),v.scissor(Me.copy(w).multiplyScalar(Y).round())},this.getScissorTest=function(){return P},this.setScissorTest=function(S){v.setScissorTest(P=S)},this.setOpaqueSort=function(S){ue=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,se=!0){let Q=0;if(S){let ee=!1;if(Z!==null){const Be=Z.texture.format;ee=m.has(Be)}if(ee){const Be=Z.texture.type,Ve=p.has(Be),Fe=je.getClearColor(),qe=je.getClearAlpha(),Ye=Fe.r,ct=Fe.g,ft=Fe.b;Ve?(M[0]=Ye,M[1]=ct,M[2]=ft,M[3]=qe,D.clearBufferuiv(D.COLOR,0,M)):(b[0]=Ye,b[1]=ct,b[2]=ft,b[3]=qe,D.clearBufferiv(D.COLOR,0,b))}else Q|=D.COLOR_BUFFER_BIT}N&&(Q|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",J,!1),n.removeEventListener("webglcontextcreationerror",We,!1),je.dispose(),Pe.dispose(),Ce.dispose(),W.dispose(),Se.dispose(),fe.dispose(),Oe.dispose(),ge.dispose(),Ee.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",ni),Ge.removeEventListener("sessionend",Ir),ii.stop()};function ae(S){S.preventDefault(),Qd("WebGLRenderer: Context Lost."),I=!0}function J(){Qd("WebGLRenderer: Context Restored."),I=!1;const S=B.autoReset,N=Je.enabled,se=Je.autoUpdate,Q=Je.needsUpdate,ee=Je.type;Xe(),B.autoReset=S,Je.enabled=N,Je.autoUpdate=se,Je.needsUpdate=Q,Je.type=ee}function We(S){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function rt(S){const N=S.target;N.removeEventListener("dispose",rt),pt(N)}function pt(S){gt(S),W.remove(S)}function gt(S){const N=W.get(S).programs;N!==void 0&&(N.forEach(function(se){Ee.releaseProgram(se)}),S.isShaderMaterial&&Ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,se,Q,ee,Be){N===null&&(N=ve);const Ve=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Fe=Uo(S,N,se,Q,ee);v.setMaterial(Q,Ve);let qe=se.index,Ye=1;if(Q.wireframe===!0){if(qe=re.getWireframeAttribute(se),qe===void 0)return;Ye=2}const ct=se.drawRange,ft=se.attributes.position;let Ze=ct.start*Ye,Rt=(ct.start+ct.count)*Ye;Be!==null&&(Ze=Math.max(Ze,Be.start*Ye),Rt=Math.min(Rt,(Be.start+Be.count)*Ye)),qe!==null?(Ze=Math.max(Ze,0),Rt=Math.min(Rt,qe.count)):ft!=null&&(Ze=Math.max(Ze,0),Rt=Math.min(Rt,ft.count));const kt=Rt-Ze;if(kt<0||kt===1/0)return;Oe.setup(ee,Q,Fe,se,qe);let Ft,Pt=De;if(qe!==null&&(Ft=Ae.get(qe),Pt=de,Pt.setIndex(Ft)),ee.isMesh)Q.wireframe===!0?(v.setLineWidth(Q.wireframeLinewidth*Le()),Pt.setMode(D.LINES)):Pt.setMode(D.TRIANGLES);else if(ee.isLine){let an=Q.linewidth;an===void 0&&(an=1),v.setLineWidth(an*Le()),ee.isLineSegments?Pt.setMode(D.LINES):ee.isLineLoop?Pt.setMode(D.LINE_LOOP):Pt.setMode(D.LINE_STRIP)}else ee.isPoints?Pt.setMode(D.POINTS):ee.isSprite&&Pt.setMode(D.TRIANGLES);if(ee.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const an=ee._multiDrawStarts,He=ee._multiDrawCounts,Pn=ee._multiDrawCount,xt=qe?Ae.get(qe).bytesPerElement:1,Fn=W.get(Q).currentProgram.getUniforms();for(let si=0;si<Pn;si++)Fn.setValue(D,"_gl_DrawID",si),Pt.render(an[si]/xt,He[si])}else if(ee.isInstancedMesh)Pt.renderInstances(Ze,kt,ee.count);else if(se.isInstancedBufferGeometry){const an=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,He=Math.min(se.instanceCount,an);Pt.renderInstances(Ze,kt,He)}else Pt.render(Ze,kt)};function it(S,N,se){S.transparent===!0&&S.side===Xn&&S.forceSinglePass===!1?(S.side=Cn,S.needsUpdate=!0,gs(S,N,se),S.side=ls,S.needsUpdate=!0,gs(S,N,se),S.side=Xn):gs(S,N,se)}this.compile=function(S,N,se=null){se===null&&(se=S),T=Ce.get(se),T.init(N),x.push(T),se.traverseVisible(function(ee){ee.isLight&&ee.layers.test(N.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),S!==se&&S.traverseVisible(function(ee){ee.isLight&&ee.layers.test(N.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),T.setupLights();const Q=new Set;return S.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Be=ee.material;if(Be)if(Array.isArray(Be))for(let Ve=0;Ve<Be.length;Ve++){const Fe=Be[Ve];it(Fe,se,ee),Q.add(Fe)}else it(Be,se,ee),Q.add(Be)}),T=x.pop(),Q},this.compileAsync=function(S,N,se=null){const Q=this.compile(S,N,se);return new Promise(ee=>{function Be(){if(Q.forEach(function(Ve){W.get(Ve).currentProgram.isReady()&&Q.delete(Ve)}),Q.size===0){ee(S);return}setTimeout(Be,10)}pe.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let bt=null;function bn(S){bt&&bt(S)}function ni(){ii.stop()}function Ir(){ii.start()}const ii=new yg;ii.setAnimationLoop(bn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(S){bt=S,Ge.setAnimationLoop(S),S===null?ii.stop():ii.start()},Ge.addEventListener("sessionstart",ni),Ge.addEventListener("sessionend",Ir),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;k!==null&&k.renderStart(S,N);const se=Ge.enabled===!0&&Ge.isPresenting===!0,Q=R!==null&&(Z===null||se)&&R.begin(U,Z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(N),N=Ge.getCamera()),S.isScene===!0&&S.onBeforeRender(U,S,N,Z),T=Ce.get(S,x.length),T.init(N),T.state.textureUnits=ne.getTextureUnits(),x.push(T),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),F.setFromProjectionMatrix(j,pi,N.reversedDepth),V=this.localClippingEnabled,$=Ke.init(this.clippingPlanes,V),A=Pe.get(S,L.length),A.init(),L.push(A),Ge.enabled===!0&&Ge.isPresenting===!0){const Ve=U.xr.getDepthSensingMesh();Ve!==null&&zs(Ve,N,-1/0,U.sortObjects)}zs(S,N,0,U.sortObjects),A.finish(),U.sortObjects===!0&&A.sort(ue,xe,N.reversedDepth),ce=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,ce&&je.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$===!0&&Ke.beginShadows();const ee=T.state.shadowsArray;if(Je.render(ee,S,N),$===!0&&Ke.endShadows(),(Q&&R.hasRenderPass())===!1){const Ve=A.opaque,Fe=A.transmissive;if(T.setupLights(),N.isArrayCamera){const qe=N.cameras;if(Fe.length>0)for(let Ye=0,ct=qe.length;Ye<ct;Ye++){const ft=qe[Ye];Ur(Ve,Fe,S,ft)}ce&&je.render(S);for(let Ye=0,ct=qe.length;Ye<ct;Ye++){const ft=qe[Ye];Nr(A,S,ft,ft.viewport)}}else Fe.length>0&&Ur(Ve,Fe,S,N),ce&&je.render(S),Nr(A,S,N)}Z!==null&&G===0&&(ne.updateMultisampleRenderTarget(Z),ne.updateRenderTargetMipmap(Z)),Q&&R.end(U),S.isScene===!0&&S.onAfterRender(U,S,N),Oe.resetDefaultState(),he=-1,ye=null,x.pop(),x.length>0?(T=x[x.length-1],ne.setTextureUnits(T.state.textureUnits),$===!0&&Ke.setGlobalState(U.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?A=L[L.length-1]:A=null,k!==null&&k.renderEnd()};function zs(S,N,se,Q){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)se=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||F.intersectsSprite(S)){Q&&le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(j);const Ve=fe.update(S),Fe=S.material;Fe.visible&&A.push(S,Ve,Fe,se,le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||F.intersectsObject(S))){const Ve=fe.update(S),Fe=S.material;if(Q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),le.copy(S.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),le.copy(Ve.boundingSphere.center)),le.applyMatrix4(S.matrixWorld).applyMatrix4(j)),Array.isArray(Fe)){const qe=Ve.groups;for(let Ye=0,ct=qe.length;Ye<ct;Ye++){const ft=qe[Ye],Ze=Fe[ft.materialIndex];Ze&&Ze.visible&&A.push(S,Ve,Ze,se,le.z,ft)}}else Fe.visible&&A.push(S,Ve,Fe,se,le.z,null)}}const Be=S.children;for(let Ve=0,Fe=Be.length;Ve<Fe;Ve++)zs(Be[Ve],N,se,Q)}function Nr(S,N,se,Q){const{opaque:ee,transmissive:Be,transparent:Ve}=S;T.setupLightsView(se),$===!0&&Ke.setGlobalState(U.clippingPlanes,se),Q&&v.viewport(me.copy(Q)),ee.length>0&&ms(ee,N,se),Be.length>0&&ms(Be,N,se),Ve.length>0&&ms(Ve,N,se),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ur(S,N,se,Q){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){const Ze=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new _i(1,1,{generateMipmaps:!0,type:Ze?Hi:Nn,minFilter:Rs,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const Be=T.state.transmissionRenderTarget[Q.id],Ve=Q.viewport||me;Be.setSize(Ve.z*U.transmissionResolutionScale,Ve.w*U.transmissionResolutionScale);const Fe=U.getRenderTarget(),qe=U.getActiveCubeFace(),Ye=U.getActiveMipmapLevel();U.setRenderTarget(Be),U.getClearColor(lt),st=U.getClearAlpha(),st<1&&U.setClearColor(16777215,.5),U.clear(),ce&&je.render(se);const ct=U.toneMapping;U.toneMapping=gi;const ft=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),$===!0&&Ke.setGlobalState(U.clippingPlanes,Q),ms(S,se,Q),ne.updateMultisampleRenderTarget(Be),ne.updateRenderTargetMipmap(Be),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Rt=0,kt=N.length;Rt<kt;Rt++){const Ft=N[Rt],{object:Pt,geometry:an,material:He,group:Pn}=Ft;if(He.side===Xn&&Pt.layers.test(Q.layers)){const xt=He.side;He.side=Cn,He.needsUpdate=!0,Or(Pt,se,Q,an,He,Pn),He.side=xt,He.needsUpdate=!0,Ze=!0}}Ze===!0&&(ne.updateMultisampleRenderTarget(Be),ne.updateRenderTargetMipmap(Be))}U.setRenderTarget(Fe,qe,Ye),U.setClearColor(lt,st),ft!==void 0&&(Q.viewport=ft),U.toneMapping=ct}function ms(S,N,se){const Q=N.isScene===!0?N.overrideMaterial:null;for(let ee=0,Be=S.length;ee<Be;ee++){const Ve=S[ee],{object:Fe,geometry:qe,group:Ye}=Ve;let ct=Ve.material;ct.allowOverride===!0&&Q!==null&&(ct=Q),Fe.layers.test(se.layers)&&Or(Fe,N,se,qe,ct,Ye)}}function Or(S,N,se,Q,ee,Be){S.onBeforeRender(U,N,se,Q,ee,Be),S.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ee.onBeforeRender(U,N,se,Q,S,Be),ee.transparent===!0&&ee.side===Xn&&ee.forceSinglePass===!1?(ee.side=Cn,ee.needsUpdate=!0,U.renderBufferDirect(se,N,Q,ee,S,Be),ee.side=ls,ee.needsUpdate=!0,U.renderBufferDirect(se,N,Q,ee,S,Be),ee.side=Xn):U.renderBufferDirect(se,N,Q,ee,S,Be),S.onAfterRender(U,N,se,Q,ee,Be)}function gs(S,N,se){N.isScene!==!0&&(N=ve);const Q=W.get(S),ee=T.state.lights,Be=T.state.shadowsArray,Ve=ee.state.version,Fe=Ee.getParameters(S,ee.state,Be,N,se,T.state.lightProbeGridArray),qe=Ee.getProgramCacheKey(Fe);let Ye=Q.programs;Q.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,Q.fog=N.fog;const ct=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Q.envMap=Se.get(S.envMap||Q.environment,ct),Q.envMapRotation=Q.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ye===void 0&&(S.addEventListener("dispose",rt),Ye=new Map,Q.programs=Ye);let ft=Ye.get(qe);if(ft!==void 0){if(Q.currentProgram===ft&&Q.lightsStateVersion===Ve)return Br(S,Fe),ft}else Fe.uniforms=Ee.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,se,Fe),S.onBeforeCompile(Fe,U),ft=Ee.acquireProgram(Fe,qe),Ye.set(qe,ft),Q.uniforms=Fe.uniforms;const Ze=Q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ze.clippingPlanes=Ke.uniform),Br(S,Fe),Q.needsLights=Fo(S),Q.lightsStateVersion=Ve,Q.needsLights&&(Ze.ambientLightColor.value=ee.state.ambient,Ze.lightProbe.value=ee.state.probe,Ze.directionalLights.value=ee.state.directional,Ze.directionalLightShadows.value=ee.state.directionalShadow,Ze.spotLights.value=ee.state.spot,Ze.spotLightShadows.value=ee.state.spotShadow,Ze.rectAreaLights.value=ee.state.rectArea,Ze.ltc_1.value=ee.state.rectAreaLTC1,Ze.ltc_2.value=ee.state.rectAreaLTC2,Ze.pointLights.value=ee.state.point,Ze.pointLightShadows.value=ee.state.pointShadow,Ze.hemisphereLights.value=ee.state.hemi,Ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ee.state.spotLightMatrix,Ze.spotLightMap.value=ee.state.spotLightMap,Ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=T.state.lightProbeGridArray.length>0,Q.currentProgram=ft,Q.uniformsList=null,ft}function Fr(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Ra.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Br(S,N){const se=W.get(S);se.outputColorSpace=N.outputColorSpace,se.batching=N.batching,se.batchingColor=N.batchingColor,se.instancing=N.instancing,se.instancingColor=N.instancingColor,se.instancingMorph=N.instancingMorph,se.skinning=N.skinning,se.morphTargets=N.morphTargets,se.morphNormals=N.morphNormals,se.morphColors=N.morphColors,se.morphTargetsCount=N.morphTargetsCount,se.numClippingPlanes=N.numClippingPlanes,se.numIntersection=N.numClipIntersection,se.vertexAlphas=N.vertexAlphas,se.vertexTangents=N.vertexTangents,se.toneMapping=N.toneMapping}function No(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let se=0,Q=S.length;se<Q;se++){const ee=S[se];if(ee.texture!==null&&ee.boundingBox.containsPoint(y))return ee}return null}function Uo(S,N,se,Q,ee){N.isScene!==!0&&(N=ve),ne.resetTextureUnits();const Be=N.fog,Ve=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?N.environment:null,Fe=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:mt.workingColorSpace,qe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ye=Se.get(Q.envMap||Ve,qe),ct=Q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ft=!!se.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ze=!!se.morphAttributes.position,Rt=!!se.morphAttributes.normal,kt=!!se.morphAttributes.color;let Ft=gi;Q.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ft=U.toneMapping);const Pt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,an=Pt!==void 0?Pt.length:0,He=W.get(Q),Pn=T.state.lights;if($===!0&&(V===!0||S!==ye)){const It=S===ye&&Q.id===he;Ke.setState(Q,S,It)}let xt=!1;Q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Pn.state.version||He.outputColorSpace!==Fe||ee.isBatchedMesh&&He.batching===!1||!ee.isBatchedMesh&&He.batching===!0||ee.isBatchedMesh&&He.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&He.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&He.instancing===!1||!ee.isInstancedMesh&&He.instancing===!0||ee.isSkinnedMesh&&He.skinning===!1||!ee.isSkinnedMesh&&He.skinning===!0||ee.isInstancedMesh&&He.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&He.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&He.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&He.instancingMorph===!1&&ee.morphTexture!==null||He.envMap!==Ye||Q.fog===!0&&He.fog!==Be||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ke.numPlanes||He.numIntersection!==Ke.numIntersection)||He.vertexAlphas!==ct||He.vertexTangents!==ft||He.morphTargets!==Ze||He.morphNormals!==Rt||He.morphColors!==kt||He.toneMapping!==Ft||He.morphTargetsCount!==an||!!He.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,He.__version=Q.version);let Fn=He.currentProgram;xt===!0&&(Fn=gs(Q,N,ee),k&&Q.isNodeMaterial&&k.onUpdateProgram(Q,Fn,He));let si=!1,Wi=!1,ks=!1;const Dt=Fn.getUniforms(),Ht=He.uniforms;if(v.useProgram(Fn.program)&&(si=!0,Wi=!0,ks=!0),Q.id!==he&&(he=Q.id,Wi=!0),He.needsLights){const It=No(T.state.lightProbeGridArray,ee);He.lightProbeGrid!==It&&(He.lightProbeGrid=It,Wi=!0)}if(si||ye!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Dt.setValue(D,"projectionMatrix",S.projectionMatrix),Dt.setValue(D,"viewMatrix",S.matrixWorldInverse);const qi=Dt.map.cameraPosition;qi!==void 0&&qi.setValue(D,_e.setFromMatrixPosition(S.matrixWorld)),E.logarithmicDepthBuffer&&Dt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Dt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),ye!==S&&(ye=S,Wi=!0,ks=!0)}if(He.needsLights&&(Pn.state.directionalShadowMap.length>0&&Dt.setValue(D,"directionalShadowMap",Pn.state.directionalShadowMap,ne),Pn.state.spotShadowMap.length>0&&Dt.setValue(D,"spotShadowMap",Pn.state.spotShadowMap,ne),Pn.state.pointShadowMap.length>0&&Dt.setValue(D,"pointShadowMap",Pn.state.pointShadowMap,ne)),ee.isSkinnedMesh){Dt.setOptional(D,ee,"bindMatrix"),Dt.setOptional(D,ee,"bindMatrixInverse");const It=ee.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Dt.setValue(D,"boneTexture",It.boneTexture,ne))}ee.isBatchedMesh&&(Dt.setOptional(D,ee,"batchingTexture"),Dt.setValue(D,"batchingTexture",ee._matricesTexture,ne),Dt.setOptional(D,ee,"batchingIdTexture"),Dt.setValue(D,"batchingIdTexture",ee._indirectTexture,ne),Dt.setOptional(D,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Dt.setValue(D,"batchingColorTexture",ee._colorsTexture,ne));const Xi=se.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&z.update(ee,se,Fn),(Wi||He.receiveShadow!==ee.receiveShadow)&&(He.receiveShadow=ee.receiveShadow,Dt.setValue(D,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&N.environment!==null&&(Ht.envMapIntensity.value=N.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=ZR()),Wi){if(Dt.setValue(D,"toneMappingExposure",U.toneMappingExposure),He.needsLights&&Oo(Ht,ks),Be&&Q.fog===!0&&ke.refreshFogUniforms(Ht,Be),ke.refreshMaterialUniforms(Ht,Q,Y,O,T.state.transmissionRenderTarget[S.id]),He.needsLights&&He.lightProbeGrid){const It=He.lightProbeGrid;Ht.probesSH.value=It.texture,Ht.probesMin.value.copy(It.boundingBox.min),Ht.probesMax.value.copy(It.boundingBox.max),Ht.probesResolution.value.copy(It.resolution)}Ra.upload(D,Fr(He),Ht,ne)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ra.upload(D,Fr(He),Ht,ne),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Dt.setValue(D,"center",ee.center),Dt.setValue(D,"modelViewMatrix",ee.modelViewMatrix),Dt.setValue(D,"normalMatrix",ee.normalMatrix),Dt.setValue(D,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){const It=Q.uniformsGroups;for(let qi=0,Hs=It.length;qi<Hs;qi++){const Df=It[qi];ge.update(Df,Fn),ge.bind(Df,Fn)}}return Fn}function Oo(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Fo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(S,N,se){const Q=W.get(S);Q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=N,W.get(S.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:se,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const se=W.get(S);se.__webglFramebuffer=N,se.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,se=0){Z=S,te=N,G=se;let Q=null,ee=!1,Be=!1;if(S){const Fe=W.get(S);if(Fe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,Fe.__webglFramebuffer),me.copy(S.viewport),Me.copy(S.scissor),tt=S.scissorTest,v.viewport(me),v.scissor(Me),v.setScissorTest(tt),he=-1;return}else if(Fe.__webglFramebuffer===void 0)ne.setupRenderTarget(S);else if(Fe.__hasExternalTextures)ne.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ct=S.depthTexture;if(Fe.__boundDepthTexture!==ct){if(ct!==null&&W.has(ct)&&(S.width!==ct.image.width||S.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(S)}}const qe=S.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Be=!0);const Ye=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ye[N])?Q=Ye[N][se]:Q=Ye[N],ee=!0):S.samples>0&&ne.useMultisampledRTT(S)===!1?Q=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Ye)?Q=Ye[se]:Q=Ye,me.copy(S.viewport),Me.copy(S.scissor),tt=S.scissorTest}else me.copy(be).multiplyScalar(Y).floor(),Me.copy(w).multiplyScalar(Y).floor(),tt=P;if(se!==0&&(Q=ie),v.bindFramebuffer(D.FRAMEBUFFER,Q)&&v.drawBuffers(S,Q),v.viewport(me),v.scissor(Me),v.setScissorTest(tt),ee){const Fe=W.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe.__webglTexture,se)}else if(Be){const Fe=N;for(let qe=0;qe<S.textures.length;qe++){const Ye=W.get(S.textures[qe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qe,Ye.__webglTexture,se,Fe)}}else if(S!==null&&se!==0){const Fe=W.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,se)}he=-1},this.readRenderTargetPixels=function(S,N,se,Q,ee,Be,Ve,Fe=0){if(!(S&&S.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe){v.bindFramebuffer(D.FRAMEBUFFER,qe);try{const Ye=S.textures[Fe],ct=Ye.format,ft=Ye.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Fe),!E.textureFormatReadable(ct)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(ft)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-Q&&se>=0&&se<=S.height-ee&&D.readPixels(N,se,Q,ee,Ie.convert(ct),Ie.convert(ft),Be)}finally{const Ye=Z!==null?W.get(Z).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(S,N,se,Q,ee,Be,Ve,Fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe)if(N>=0&&N<=S.width-Q&&se>=0&&se<=S.height-ee){v.bindFramebuffer(D.FRAMEBUFFER,qe);const Ye=S.textures[Fe],ct=Ye.format,ft=Ye.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Fe),!E.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,Be.byteLength,D.STREAM_READ),D.readPixels(N,se,Q,ee,Ie.convert(ct),Ie.convert(ft),0);const Rt=Z!==null?W.get(Z).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Rt);const kt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await fb(D,kt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Be),D.deleteBuffer(Ze),D.deleteSync(kt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,se=0){const Q=Math.pow(2,-se),ee=Math.floor(S.image.width*Q),Be=Math.floor(S.image.height*Q),Ve=N!==null?N.x:0,Fe=N!==null?N.y:0;ne.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,se,0,0,Ve,Fe,ee,Be),v.unbindTexture()},this.copyTextureToTexture=function(S,N,se=null,Q=null,ee=0,Be=0){let Ve,Fe,qe,Ye,ct,ft,Ze,Rt,kt;const Ft=S.isCompressedTexture?S.mipmaps[Be]:S.image;if(se!==null)Ve=se.max.x-se.min.x,Fe=se.max.y-se.min.y,qe=se.isBox3?se.max.z-se.min.z:1,Ye=se.min.x,ct=se.min.y,ft=se.isBox3?se.min.z:0;else{const Ht=Math.pow(2,-ee);Ve=Math.floor(Ft.width*Ht),Fe=Math.floor(Ft.height*Ht),S.isDataArrayTexture?qe=Ft.depth:S.isData3DTexture?qe=Math.floor(Ft.depth*Ht):qe=1,Ye=0,ct=0,ft=0}Q!==null?(Ze=Q.x,Rt=Q.y,kt=Q.z):(Ze=0,Rt=0,kt=0);const Pt=Ie.convert(N.format),an=Ie.convert(N.type);let He;N.isData3DTexture?(ne.setTexture3D(N,0),He=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ne.setTexture2DArray(N,0),He=D.TEXTURE_2D_ARRAY):(ne.setTexture2D(N,0),He=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Pn=v.getParameter(D.UNPACK_ROW_LENGTH),xt=v.getParameter(D.UNPACK_IMAGE_HEIGHT),Fn=v.getParameter(D.UNPACK_SKIP_PIXELS),si=v.getParameter(D.UNPACK_SKIP_ROWS),Wi=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Ye),v.pixelStorei(D.UNPACK_SKIP_ROWS,ct),v.pixelStorei(D.UNPACK_SKIP_IMAGES,ft);const ks=S.isDataArrayTexture||S.isData3DTexture,Dt=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const Ht=W.get(S),Xi=W.get(N),It=W.get(Ht.__renderTarget),qi=W.get(Xi.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,It.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Hs=0;Hs<qe;Hs++)ks&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(S).__webglTexture,ee,ft+Hs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(N).__webglTexture,Be,kt+Hs)),D.blitFramebuffer(Ye,ct,Ve,Fe,Ze,Rt,Ve,Fe,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(ee!==0||S.isRenderTargetTexture||W.has(S)){const Ht=W.get(S),Xi=W.get(N);v.bindFramebuffer(D.READ_FRAMEBUFFER,oe),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,X);for(let It=0;It<qe;It++)ks?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,ee,ft+It):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ht.__webglTexture,ee),Dt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xi.__webglTexture,Be,kt+It):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xi.__webglTexture,Be),ee!==0?D.blitFramebuffer(Ye,ct,Ve,Fe,Ze,Rt,Ve,Fe,D.COLOR_BUFFER_BIT,D.NEAREST):Dt?D.copyTexSubImage3D(He,Be,Ze,Rt,kt+It,Ye,ct,Ve,Fe):D.copyTexSubImage2D(He,Be,Ze,Rt,Ye,ct,Ve,Fe);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Dt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(He,Be,Ze,Rt,kt,Ve,Fe,qe,Pt,an,Ft.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(He,Be,Ze,Rt,kt,Ve,Fe,qe,Pt,Ft.data):D.texSubImage3D(He,Be,Ze,Rt,kt,Ve,Fe,qe,Pt,an,Ft):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Be,Ze,Rt,Ve,Fe,Pt,an,Ft.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Be,Ze,Rt,Ft.width,Ft.height,Pt,Ft.data):D.texSubImage2D(D.TEXTURE_2D,Be,Ze,Rt,Ve,Fe,Pt,an,Ft);v.pixelStorei(D.UNPACK_ROW_LENGTH,Pn),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Fn),v.pixelStorei(D.UNPACK_SKIP_ROWS,si),v.pixelStorei(D.UNPACK_SKIP_IMAGES,Wi),Be===0&&N.generateMipmaps&&D.generateMipmap(He),v.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&ne.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ne.setTextureCube(S,0):S.isData3DTexture?ne.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ne.setTexture2DArray(S,0):ne.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){te=0,G=0,Z=null,v.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=mt._getUnpackColorSpace()}}const Jh={type:"change"},Tf={type:"start"},Rg={type:"end"},pa=new Sl,jh=new ns,jR=Math.cos(70*pb.DEG2RAD),Xt=new q,Tn=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bc=1e-6;class QR extends tE{constructor(e,n=null){super(e,n),this.state=Ct.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.DOLLY,RIGHT:fr.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new cs,this._lastTargetPosition=new q,this._quat=new cs().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Th,this._sphericalDelta=new Th,this._scale=1,this._panOffset=new q,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new q,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t1.bind(this),this._onPointerDown=e1.bind(this),this._onPointerUp=n1.bind(this),this._onContextMenu=c1.bind(this),this._onMouseWheel=r1.bind(this),this._onKeyDown=o1.bind(this),this._onTouchStart=a1.bind(this),this._onTouchMove=l1.bind(this),this._onMouseDown=i1.bind(this),this._onMouseMove=s1.bind(this),this._interceptControlDown=u1.bind(this),this._interceptControlUp=f1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jh),this.update(),this.state=Ct.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Xt.copy(n).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),s<-Math.PI?s+=Tn:s>Math.PI&&(s-=Tn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Xt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pa.origin.copy(this.object.position),pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pa.direction))<jR?this.object.lookAt(this.target):(jh.setFromNormalAndCoplanarPoint(this.object.up,this.target),pa.intersectPlane(jh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bc||this._lastTargetPosition.distanceToSquared(this.target)>bc?(this.dispatchEvent(Jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Xt.setFromMatrixColumn(n,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,n){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(n,1):(Xt.setFromMatrixColumn(n,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Xt.copy(s).sub(this.target);let r=Xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new nt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function e1(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function t1(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function n1(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rg),this.state=Ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function i1(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Ct.DOLLY;break;case fr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Ct.ROTATE}break;case fr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tf)}function s1(t){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function r1(t){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(t.preventDefault(),this.dispatchEvent(Tf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Rg))}function o1(t){this.enabled!==!1&&this._handleKeyDown(t)}function a1(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Ct.TOUCH_ROTATE;break;case or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Ct.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tf)}function l1(t){switch(this._trackPointer(t),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Ct.NONE}}function c1(t){this.enabled!==!1&&t.preventDefault()}function u1(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function f1(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const d1={class:"page-card"},h1={class:"media-controls"},p1={class:"segmented-control"},m1={key:0,class:"stream-start-time"},g1=["disabled"],_1={key:0,value:""},v1={key:1,value:"",disabled:""},x1=["value"],y1={class:"video-select-control"},S1=["disabled"],M1={key:0,value:""},b1=["value"],E1={class:"switch-control"},T1={class:"segmented-control"},A1={key:0,class:"placeholder"},w1={key:1,class:"stream-workspace"},R1={class:"stream-main"},C1={key:0,class:"video-viewport"},P1=["src","title"],D1={key:0,class:"live-pause-overlay"},L1={key:1,class:"detection-layer"},I1={class:"video-playback-controls"},N1=["title"],U1={key:1,class:"video-viewport"},O1=["src"],F1={key:0,class:"detection-layer"},B1={class:"video-playback-controls"},z1=["title"],k1=["max","value"],H1={key:2,class:"placeholder"},V1={class:"stream-sidebar"},G1={key:0,class:"side-section screw-position-card"},W1={class:"absolute-position"},X1={key:2,class:"telemetry-dashboard"},q1={class:"position-scene-card"},$1={class:"fusion-data-card"},Y1={class:"current-position"},K1={class:"sensor-columns"},Z1={class:"uwb-range-grid"},J1={class:"imu-readout"},j1={key:0},Q1={key:1,class:"path-algorithm-menu"},eC={class:"trail-toggle trail-ekf"},tC={class:"trail-toggle trail-complementary"},nC={class:"trail-toggle trail-weighted"},iC={key:3,class:"success"},sC={key:4,class:"alert"},rC={__name:"StreamPage",setup(t){const e=$e([]),n=$e([]),i=$e([]),s=$e([]),r=$e("history"),o=$e(""),a=$e(""),l=$e("color"),c=$e("ekf"),u=$e(!0),f=$e(0),d=$e(0),h=$e(!1),g=$e(null),_=$e(null),m=$e(!0),p=$e(!1),M=$e(""),b=$e(""),y=$e(0),A=$e(!1),T=$e(0),L=$e([]),x=ds({ekf:!0,complementary:!0,weighted_average:!0}),R={ekf:2450411,complementary:1096065,weighted_average:16096779},U=$e({ekf:[],complementary:[],weighted_average:[]}),I=$e([]),k=$e(null),ie=$e(null),oe=[{id:1,x:0,y:0,z:0},{id:2,x:20,y:0,z:0},{id:3,x:0,y:12,z:0},{id:4,x:20,y:12,z:0},{id:5,x:0,y:0,z:2.5},{id:6,x:20,y:0,z:2.5},{id:7,x:0,y:12,z:2.5},{id:8,x:20,y:12,z:2.5}],X=[{id:"A-1",type:"M4 hex screw",x:1.2,y:1.2,z:1.1},{id:"A-2",type:"M4 hex screw",x:2,y:1.2,z:1.1},{id:"B-1",type:"M6 socket screw",x:18,y:1.2,z:1.1},{id:"B-2",type:"M6 socket screw",x:18.8,y:1.2,z:1.1},{id:"B-3",type:"M6 socket screw",x:1.2,y:10.8,z:1.1},{id:"B-4",type:"M6 socket screw",x:2,y:10.8,z:1.1},{id:"A-3",type:"M4 hex screw",x:18,y:10.8,z:1.1},{id:"A-4",type:"M4 hex screw",x:18.8,y:10.8,z:1.1}];let te,G=-1,Z,he,ye,me,Me,tt,lt,st,K,O,Y,ue;const xe=new Map,be=_t(()=>e.value.filter(ae=>!ae.endTime).sort((ae,J)=>new Date(J.startTime)-new Date(ae.startTime))[0]||null),w=_t(()=>e.value.filter(ae=>{var J;return ae._id!==((J=be.value)==null?void 0:J._id)})),P=_t(()=>{var ae;return(ae=be.value)!=null&&ae.startTime?new Date(be.value.startTime).toLocaleString("zh-TW"):"尚未開始作業"}),F=_t(()=>n.value.filter(ae=>ae.kind===l.value||ae.kind==="combined")),$=_t(()=>F.value.find(ae=>ae.filename===a.value)),V=_t(()=>{const ae=i.value.filter(J=>{var We;return J.imageId===((We=$.value)==null?void 0:We.filename)});return ae.length?ae:i.value}),j=_t(()=>({_id:"simulated-screw",objectClass:"螺絲",depth:Number((118+Math.sin(y.value*.18)*3).toFixed(1)),bbox:{x:Math.round(860+Math.sin(y.value*.14)*22),y:Math.round(465+Math.cos(y.value*.11)*12),width:200,height:150}})),_e=_t(()=>Math.floor((y.value+20)/4)%13!==0),le=_t(()=>{var We;if(r.value==="live")return i.value.at(-1)||j.value;if(!V.value.length)return null;const ae=new Date(V.value[0].timestamp).getTime()||((We=$.value)!=null&&We.startedAt?$.value.startedAt*1e3:null);if(!ae)return V.value[0]||j.value;const J=ae+f.value*1e3;return V.value.reduce((rt,pt)=>Math.abs(new Date(pt.timestamp).getTime()-J)<Math.abs(new Date(rt.timestamp).getTime()-J)?pt:rt)}),ve=_t(()=>r.value==="live"?i.value.length>0:V.value.length>0),ce=_t(()=>r.value==="live"?!!be.value:!!$.value),Le=_t(()=>u.value&&!A.value&&ce.value&&!!le.value&&(ve.value||_e.value)),D=_t(()=>le.value?["example_object","screw_simulated"].includes(le.value.objectClass)?"螺絲":le.value.objectClass:"未偵測到螺絲"),ze=_t(()=>`http://localhost:8889/${l.value==="depth"?"cam-depth":"cam-color"}`),pe=ae=>Number(ae??0).toFixed(3),E=()=>{var We,rt;if(r.value==="live"){U.value=Object.fromEntries(Object.keys(R).map(pt=>[pt,pt===c.value?I.value:[]])),L.value=I.value;return}const ae=r.value==="history"?(We=$.value)!=null&&We.startedAt?$.value.startedAt*1e3+f.value*1e3:new Date(((rt=le.value)==null?void 0:rt.timestamp)||0).getTime():1/0,J=Object.fromEntries(Object.keys(R).map(pt=>[pt,s.value.filter(gt=>gt.fusionAlgorithm===pt&&new Date(gt.timestamp).getTime()<=ae).map(gt=>{var it;return(it=gt.telemetry)==null?void 0:it.position}).filter(Boolean).slice(-80).map(gt=>({...gt}))]));U.value=J,L.value=J[c.value]||[]},v=ae=>new q(Number((ae==null?void 0:ae.x)||0),Number((ae==null?void 0:ae.z)||0),Number((ae==null?void 0:ae.y)||0)),B=ae=>v(ae),W=(ae,J)=>{ae.userData.hoverLabel=J},ne=ae=>{const J=new rs,We=new Kr({color:3900150,roughness:.35,metalness:.35}),rt=new jt(new Bs(.24,.12,.24),We),pt=new jt(new Bs(.1,.16,.1),We);return pt.position.y=.14,J.add(rt,pt),J.position.copy(B(ae)),W(J,`基地站 ${ae.id}：X ${ae.x}、Y ${ae.y}、Z ${ae.z} m`),J},Se=(ae=16096779)=>{const J=new rs,We=new Kr({color:ae,metalness:.72,roughness:.25}),rt=new jt(new bo(.045,.045,.25,16),We);rt.rotation.z=Math.PI/2;const pt=new jt(new bo(.105,.105,.045,16),We);return pt.rotation.z=Math.PI/2,pt.position.x=-.14,J.add(rt,pt),J.userData.material=We,J},Ae=ae=>{const J=new rs,We=new jt(new ja(.12,20,16),new Kr({color:ae,emissive:ae,emissiveIntensity:.22})),rt=new jt(new Ja(.45,1.2,24,1,!0),new Ya({color:ae,transparent:!0,opacity:.2,side:Xn}));return rt.rotation.x=-Math.PI/2,rt.position.z=.6,J.add(We,rt),J},re=()=>{var gt;if(!he||!_.value||!Me||!lt)return;const ae=_.value.telemetry;r.value==="live"||Object.values(x).some(Boolean),Me.visible=!1,Me.position.copy(v(ae.position));const J=Math.PI/180,We=ae.orientation,rt=-(We.yaw-90)*J;Me.rotation.set(We.pitch*J,rt,We.roll*J,"YXZ"),Object.entries(tt||{}).forEach(([it,bt])=>{const bn=U.value[it]||[],ni=r.value==="live"?it===c.value:x[it];bt.visible=ni&&bn.length>0,bt.visible&&(bt.position.copy(v(bn.at(-1))),bt.rotation.set(We.pitch*J,rt,We.roll*J,"YXZ"),W(bt,`${it} device: ${pe(bn.at(-1).x)}, ${pe(bn.at(-1).y)}, ${pe(bn.at(-1).z)} m`))}),lt.position.copy(v(_.value.absolutePosition)),lt.visible=!!_.value.absolutePosition&&!ae.workspace,W(Me,`設備：X ${pe(ae.position.x)}、Y ${pe(ae.position.y)}、Z ${pe(ae.position.z)} m；Roll ${pe(We.roll)}°、Pitch ${pe(We.pitch)}°、Yaw ${pe(We.yaw)}°`),_.value.absolutePosition&&W(lt,`螺絲：X ${pe(_.value.absolutePosition.x)}、Y ${pe(_.value.absolutePosition.y)}、Z ${pe(_.value.absolutePosition.z)} m`),Object.entries(st||{}).forEach(([it,bt])=>{const bn=new Mn().setFromPoints((U.value[it]||[]).map(v));bt.geometry.dispose(),bt.geometry=bn,bt.visible=x[it]}),(((gt=ae.workspace)==null?void 0:gt.screws)||X).forEach(it=>{var ni;const bt=xe.get(it.id);if(!bt)return;const bn=it.type.includes("M4")?2450411:9647082;bt.userData.material.color.setHex(it.visible?16096779:bn),(ni=bt.userData.material.emissive)==null||ni.setHex(it.visible?7027968:0),W(bt,`${it.type} ${it.id}：X ${pe(it.x)}、Y ${pe(it.y)}、Z ${pe(it.z)} m${it.visible?`；已在攝影機視野內，深度 ${pe(it.depth)} m`:"；未進入攝影機辨識範圍"}`)})},fe=async()=>{if(await ll(),Z||!k.value){re();return}he=new Rb,he.background=new dt(16777215),ye=new kn(42,1,.1,100),ye.position.set(25,19,26),Z=new JR({antialias:!0}),Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.value.appendChild(Z.domElement),me=new QR(ye,Z.domElement),me.target.set(10,1.1,6),me.enableDamping=!0,me.minDistance=8,me.maxDistance=42,he.add(new $b(16777215,13358561,2));const ae=new Zb(16777215,2.5);ae.position.set(5,7,4),he.add(ae);const J=new jt(new Io(20,12),new Kr({color:16317180,roughness:.95}));J.rotation.x=-Math.PI/2,J.position.set(10,-.02,6),he.add(J);const We=new eE(20,20,13358561,14870768);We.scale.z=.6,We.position.set(10,0,6),he.add(We),oe.forEach(gt=>he.add(ne(gt))),tt=Object.fromEntries(Object.entries(R).map(([gt,it])=>{const bt=Ae(it);return he.add(bt),[gt,bt]})),Me=new rs;const rt=new jt(new ja(.12,20,16),new Kr({color:1096065,emissive:289870,emissiveIntensity:.35})),pt=new jt(new Ja(.45,1.2,24,1,!0),new Ya({color:3462041,transparent:!0,opacity:.2,side:Xn}));pt.rotation.x=-Math.PI/2,pt.position.z=.6,Me.add(rt,pt),he.add(Me),lt=Se(),he.add(lt),X.forEach(gt=>{const it=Se(gt.type.includes("M4")?2450411:9647082);it.position.copy(v(gt)),W(it,`${gt.type} ${gt.id}：X ${gt.x}、Y ${gt.y}、Z ${gt.z} m`),xe.set(gt.id,it),he.add(it)}),st=Object.fromEntries(Object.entries(R).map(([gt,it])=>{const bt=new pg(new Mn,new bf({color:it}));return he.add(bt),[gt,bt]})),K=new Qb,O=new nt,Z.domElement.addEventListener("pointermove",ke),ue=new ResizeObserver(Ee),ue.observe(k.value),Ee(),re(),Pe()},Ee=()=>{if(!Z||!k.value)return;const{clientWidth:ae,clientHeight:J}=k.value;!ae||!J||(Z.setSize(ae,J),ye.aspect=ae/J,ye.updateProjectionMatrix())},ke=ae=>{if(!Z||!ie.value)return;const J=Z.domElement.getBoundingClientRect();O.set((ae.clientX-J.left)/J.width*2-1,-((ae.clientY-J.top)/J.height)*2+1),K.setFromCamera(O,ye);const We=K.intersectObjects(he.children,!0).map(rt=>{let pt=rt.object;for(;pt&&!pt.userData.hoverLabel;)pt=pt.parent;return pt}).find(Boolean);ie.value.style.display=We?"block":"none",We&&(ie.value.textContent=We.userData.hoverLabel,ie.value.style.left=`${ae.clientX-J.left+12}px`,ie.value.style.top=`${ae.clientY-J.top+12}px`)},Pe=()=>{Y=requestAnimationFrame(Pe),me.update(),Z.render(he,ye)},Ce=()=>{var ae;cancelAnimationFrame(Y),ue==null||ue.disconnect(),(ae=Z==null?void 0:Z.domElement)==null||ae.removeEventListener("pointermove",ke),Z==null||Z.dispose(),Z=null},Ke=async()=>{var ae,J,We;if(n.value=[],i.value=[],s.value=[],a.value="",f.value=0,!!o.value)try{const[rt,pt,gt]=await Promise.all([Vt.get(`/videos/${o.value}`),Vt.get(`/detections/${o.value}`),Vt.get(`/operator-telemetry/${o.value}`)]);n.value=rt.data,i.value=pt.data.sort((it,bt)=>new Date(it.timestamp)-new Date(bt.timestamp)),s.value=gt.data,a.value=((ae=F.value[0])==null?void 0:ae.filename)||"",await je()}catch(rt){M.value=((We=(J=rt.response)==null?void 0:J.data)==null?void 0:We.error)||"無法讀取歷史影片或偵測資料。"}},Je=async()=>{e.value=(await Vt.get("/operations")).data},je=async()=>{var ae,J,We,rt,pt,gt;if(o.value)try{const it={source:r.value,algorithm:c.value};r.value==="history"&&((ae=$.value)!=null&&ae.startedAt)&&(it.at=$.value.startedAt*1e3+f.value*1e3,s.value=(await Vt.get(`/operator-telemetry/${o.value}`,{params:{at:it.at}})).data),(J=le.value)!=null&&J._id&&le.value._id!=="simulated-screw"&&(it.detectionId=le.value._id),_.value=(await Vt.get(`/positioning/latest/${o.value}`,{params:it})).data,r.value==="live"&&((rt=(We=_.value)==null?void 0:We.telemetry)!=null&&rt.position)&&(I.value=[...I.value,{..._.value.telemetry.position}].slice(-80)),E(),await fe(),re()}catch(it){M.value=((gt=(pt=it.response)==null?void 0:pt.data)==null?void 0:gt.error)||"無法讀取定位資料。"}},z=async()=>{var ae;if(r.value==="live")try{if(o.value||(await Je(),o.value=((ae=be.value)==null?void 0:ae._id)||""),!o.value)return;const J=await Vt.get(`/detections/${o.value}`);i.value=J.data.sort((We,rt)=>new Date(We.timestamp)-new Date(rt.timestamp))}catch{}},De=async()=>{var ae,J;p.value=!0,b.value="",M.value="";try{await Vt.post("/simulation/config",{fusionAlgorithm:c.value}),await je()}catch(We){M.value=((J=(ae=We.response)==null?void 0:ae.data)==null?void 0:J.error)||"融合設定傳送失敗。"}finally{p.value=!1}},de=ae=>{f.value=ae.target.currentTime,d.value=ae.target.duration||0},Ie=async()=>{var ae,J;(ae=g.value)!=null&&ae.paused?await g.value.play():(J=g.value)==null||J.pause()},Oe=async()=>{if(r.value!=="history"||!h.value)return;const ae=Math.floor(f.value*2);ae!==G&&(G=ae,await je())},ge=async ae=>{de(ae),await Oe()},Xe=async ae=>{g.value&&(g.value.currentTime=Number(ae.target.value),f.value=Number(ae.target.value),r.value==="history"&&await je())},Ge=async()=>{A.value=!A.value,A.value||(T.value+=1,await z(),await je())};return Ii(o,()=>{L.value=[],G=-1,r.value==="history"?Ke():je()}),Ii(l,()=>{var ae;a.value=((ae=F.value[0])==null?void 0:ae.filename)||"",f.value=0}),Ii(c,()=>{r.value==="live"&&(I.value=[],Object.keys(x).forEach(ae=>{x[ae]=ae===c.value}))}),Ii(r,async()=>{var ae,J;r.value==="history"?(await Je(),o.value=((ae=w.value[0])==null?void 0:ae._id)||"",o.value||(n.value=[],i.value=[],_.value=null)):(I.value=[],Object.keys(x).forEach(We=>{x[We]=We===c.value}),o.value=((J=be.value)==null?void 0:J._id)||"",await z(),await je())}),hs(async()=>{var ae;try{const[J,We]=await Promise.all([Vt.get("/operations"),Vt.get("/simulation/config")]);e.value=J.data,c.value=We.data.fusionAlgorithm,o.value=((ae=w.value[0])==null?void 0:ae._id)||"",te=window.setInterval(async()=>{r.value==="live"&&!A.value&&(y.value+=1,await z(),await je())},200)}catch{M.value="無法讀取系統資料。"}finally{m.value=!1}}),Ku(()=>{window.clearInterval(te),Ce()}),(ae,J)=>{var rt,pt,gt,it,bt,bn,ni,Ir,ii,zs,Nr,Ur,ms,Or,gs,Fr,Br,No,Uo,Oo,Fo,S;const We=N_("RouterLink");return Te(),Re("section",d1,[J[31]||(J[31]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Media"),C("h2",null,"影像串流與末端定位")],-1)),C("div",h1,[C("div",p1,[C("button",{class:In({active:r.value==="history"}),type:"button",onClick:J[0]||(J[0]=N=>r.value="history")},"歷史影片",2),C("button",{class:In({active:r.value==="live"}),type:"button",onClick:J[1]||(J[1]=N=>r.value="live")},"目前串流",2)]),r.value==="live"?(Te(),Re("p",m1,"開始時間："+we(P.value),1)):(Te(),Re(At,{key:1},[C("label",null,[J[13]||(J[13]=Tt("作業",-1)),Qt(C("select",{"onUpdate:modelValue":J[2]||(J[2]=N=>o.value=N),disabled:!w.value.length},[w.value.length?(Te(),Re("option",v1,"選擇歷史作業")):(Te(),Re("option",_1,"無歷史紀錄")),(Te(!0),Re(At,null,Jn(w.value,N=>(Te(),Re("option",{key:N._id,value:N._id},we(new Date(N.startTime).toLocaleString("zh-TW")),9,x1))),128))],8,g1),[[Nl,o.value]])]),C("label",y1,[J[14]||(J[14]=Tt("影片",-1)),Qt(C("select",{"onUpdate:modelValue":J[3]||(J[3]=N=>a.value=N),disabled:!F.value.length},[F.value.length?$t("",!0):(Te(),Re("option",M1,"無歷史紀錄")),(Te(!0),Re(At,null,Jn(F.value,N=>(Te(),Re("option",{key:N.filename,value:N.filename},we(N.filename),9,b1))),128))],8,S1),[[Nl,a.value]])])],64)),C("label",E1,[Qt(C("input",{"onUpdate:modelValue":J[4]||(J[4]=N=>u.value=N),type:"checkbox"},null,512),[[Ho,u.value]]),J[15]||(J[15]=Tt(" 顯示螺絲偵測",-1))]),C("div",T1,[C("button",{class:In({active:l.value==="color"}),type:"button",onClick:J[5]||(J[5]=N=>l.value="color")},"光學影像",2),C("button",{class:In({active:l.value==="depth"}),type:"button",onClick:J[6]||(J[6]=N=>l.value="depth")},"深度影像",2)])]),m.value?(Te(),Re("p",A1,"正在讀取資料…")):(Te(),Re("div",w1,[C("div",R1,[r.value==="live"?(Te(),Re("div",C1,[(Te(),Re("iframe",{key:`${ze.value}-${T.value}`,class:"live-stream-frame",src:ze.value,title:l.value==="depth"?"目前深度串流":"目前光學串流",allow:"autoplay; fullscreen"},null,8,P1)),A.value?(Te(),Re("div",D1,"⏸")):$t("",!0),Le.value?(Te(),Re("div",L1,[C("div",{class:In(["detection-box",{"label-below":le.value.bbox.y<30}]),style:uo({left:`${le.value.bbox.x/1920*100}%`,top:`${le.value.bbox.y/1080*100}%`,width:`${le.value.bbox.width/1920*100}%`,height:`${le.value.bbox.height/1080*100}%`})},[C("span",null,we(D.value)+" · "+we(le.value.depth),1)],6)])):$t("",!0),C("div",I1,[C("button",{type:"button",title:A.value?"播放最新串流":"暫停前台顯示",onClick:Ge},we(A.value?"▶":"⏸"),9,N1)])])):$.value?(Te(),Re("div",U1,[(Te(),Re("video",{key:$.value.filename,ref_key:"videoPlayer",ref:g,class:In(["video-source",{"show-depth":$.value.kind==="combined"&&l.value==="depth"}]),src:$.value.url,playsinline:"",onLoadedmetadata:de,onTimeupdate:ge,onPlay:J[7]||(J[7]=N=>h.value=!0),onPause:J[8]||(J[8]=N=>h.value=!1)},null,42,O1)),Le.value?(Te(),Re("div",F1,[C("div",{class:In(["detection-box",{"label-below":le.value.bbox.y<30}]),style:uo({left:`${le.value.bbox.x/1920*100}%`,top:`${le.value.bbox.y/1080*100}%`,width:`${le.value.bbox.width/1920*100}%`,height:`${le.value.bbox.height/1080*100}%`})},[C("span",null,we(D.value)+" · "+we(le.value.depth),1)],6)])):$t("",!0),C("div",B1,[C("button",{type:"button",title:h.value?"暫停":"播放",onClick:Ie},we(h.value?"⏸":"▶"),9,z1),C("input",{type:"range",min:"0",max:d.value,step:"0.01",value:f.value,onInput:Xe},null,40,k1),C("span",null,we(Math.floor(f.value))+" / "+we(Math.floor(d.value))+" 秒",1)])])):(Te(),Re("p",H1,"此作業尚未找到歷史影片。"))]),C("aside",V1,[(rt=_.value)!=null&&rt.detection?(Te(),Re("section",G1,[J[17]||(J[17]=C("h3",null,"螺絲定位",-1)),C("p",null,we(D.value)+"　深度 "+we((pt=le.value)==null?void 0:pt.depth),1),C("p",null,[Tt("模型："+we(_.value.detection.detectionAlgorithm),1),J[16]||(J[16]=C("br",null,null,-1)),Tt("融合："+we(_.value.fusionAlgorithm),1)]),C("p",null,"相機／設備座標："+we(pe(_.value.cameraPosition.x))+", "+we(pe(_.value.cameraPosition.y))+", "+we(pe(_.value.cameraPosition.z))+" m",1),C("p",null,"螺絲相機座標："+we(pe((gt=_.value.screwCameraPosition)==null?void 0:gt.x))+", "+we(pe((it=_.value.screwCameraPosition)==null?void 0:it.y))+", "+we(pe((bt=_.value.screwCameraPosition)==null?void 0:bt.z))+" m",1),C("p",W1,"融合絕對座標："+we(pe((bn=_.value.absolutePosition)==null?void 0:bn.x))+", "+we(pe((ni=_.value.absolutePosition)==null?void 0:ni.y))+", "+we(pe((Ir=_.value.absolutePosition)==null?void 0:Ir.z))+" m",1)])):$t("",!0)])])),_.value?(Te(),Re("section",X1,[C("div",q1,[J[18]||(J[18]=C("div",{class:"scene-heading"},[C("div",null,[C("h3",null,"操作空間建模")]),C("span",null,"拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標")],-1)),C("p",{class:In(["nearby-screw-alert",{inactive:!((ii=_.value.workspace)!=null&&ii.notification)}])},we((zs=_.value.workspace)!=null&&zs.notification?`提示：${_.value.workspace.notification}`:"附近目前沒有螺絲。"),3),C("div",{ref_key:"sceneContainer",ref:k,class:"three-scene"},[C("div",{ref_key:"sceneTooltip",ref:ie,class:"three-tooltip"},null,512)],512),J[19]||(J[19]=C("div",{class:"scene-legend"},[C("span",null,[C("i",{class:"legend-anchor"}),Tt("基地站")]),C("span",null,[C("i",{class:"legend-device"}),Tt("設備／攝影機光錐")]),C("span",null,[C("i",{class:"legend-screw"}),Tt("M4（藍）／M6（紫）；金色為可辨識")])],-1))]),C("aside",$1,[J[30]||(J[30]=C("h3",null,"UWB + IMU 融合資料",-1)),C("div",Y1,[J[20]||(J[20]=C("strong",null,"融合輸出設備位置",-1)),C("span",null,"X "+we(pe(_.value.telemetry.position.x))+"　Y "+we(pe(_.value.telemetry.position.y))+"　Z "+we(pe(_.value.telemetry.position.z))+" m",1)]),C("div",K1,[C("div",null,[J[21]||(J[21]=C("h4",null,"UWB：8 個基地站距離（m）",-1)),C("div",Z1,[(Te(!0),Re(At,null,Jn(_.value.telemetry.uwbRanges||[],N=>(Te(),Re("span",{key:N.stationId},"站 "+we(N.stationId+1)+"："+we(pe(N.distance)),1))),128))])]),C("div",J1,[J[22]||(J[22]=C("h4",null,"IMU 即時量測",-1)),C("p",null,"加速度："+we(pe((Ur=(Nr=_.value.telemetry.imu)==null?void 0:Nr.acceleration)==null?void 0:Ur.x))+", "+we(pe((Or=(ms=_.value.telemetry.imu)==null?void 0:ms.acceleration)==null?void 0:Or.y))+", "+we(pe((Fr=(gs=_.value.telemetry.imu)==null?void 0:gs.acceleration)==null?void 0:Fr.z))+" m/s²",1),C("p",null,"角速度："+we(pe((No=(Br=_.value.telemetry.imu)==null?void 0:Br.gyroscope)==null?void 0:No.x))+", "+we(pe((Oo=(Uo=_.value.telemetry.imu)==null?void 0:Uo.gyroscope)==null?void 0:Oo.y))+", "+we(pe((S=(Fo=_.value.telemetry.imu)==null?void 0:Fo.gyroscope)==null?void 0:S.z))+" °/s",1),C("p",null,"姿態：Roll "+we(pe(_.value.telemetry.orientation.roll))+"°、Pitch "+we(pe(_.value.telemetry.orientation.pitch))+"°、Yaw "+we(pe(_.value.telemetry.orientation.yaw))+"°",1)])]),r.value==="live"?(Te(),Re("label",j1,[J[24]||(J[24]=Tt("UWB + IMU 融合演算法",-1)),Qt(C("select",{"onUpdate:modelValue":J[9]||(J[9]=N=>c.value=N),onChange:De},[...J[23]||(J[23]=[C("option",{value:"ekf"},"Error-State Extended Kalman Filter (ES-EKF)",-1),C("option",{value:"complementary"},"Complementary Filter",-1),C("option",{value:"weighted_average"},"Weighted Average",-1)])],544),[[Nl,c.value]])])):(Te(),Re("div",Q1,[J[28]||(J[28]=C("strong",null,"演算法路徑",-1)),C("label",eC,[Qt(C("input",{"onUpdate:modelValue":J[10]||(J[10]=N=>x.ekf=N),type:"checkbox",onChange:re},null,544),[[Ho,x.ekf]]),J[25]||(J[25]=C("span",null,"ES-EKF",-1))]),C("label",tC,[Qt(C("input",{"onUpdate:modelValue":J[11]||(J[11]=N=>x.complementary=N),type:"checkbox",onChange:re},null,544),[[Ho,x.complementary]]),J[26]||(J[26]=C("span",null,"互補濾波",-1))]),C("label",nC,[Qt(C("input",{"onUpdate:modelValue":J[12]||(J[12]=N=>x.weighted_average=N),type:"checkbox",onChange:re},null,544),[[Ho,x.weighted_average]]),J[27]||(J[27]=C("span",null,"加權平均",-1))])])),sn(We,{class:"calibration-link",to:"/settings/camera-extrinsics"},{default:La(()=>[...J[29]||(J[29]=[Tt("設定 RGB-D 相機外參 →",-1)])]),_:1})])])):$t("",!0),b.value?(Te(),Re("p",iC,we(b.value),1)):$t("",!0),M.value?(Te(),Re("p",sC,we(M.value),1)):$t("",!0)])}}},oC={},aC={class:"page-card"};function lC(t,e){return Te(),Re("section",aC,[...e[0]||(e[0]=[ju('<div class="section-title"><p class="eyebrow">Media</p><h2>語音提示查詢</h2></div><article class="panel"><h3>提示內容</h3><div class="list-card"><div class="item-row"><span>提示 1</span><strong>請保持安全距離</strong></div><div class="item-row"><span>提示 2</span><strong>區域偵測已完成</strong></div><div class="item-row"><span>提示 3</span><strong>即將開始下一段任務</strong></div></div></article>',2)])])}const cC=vl(oC,[["render",lC]]),uC={class:"page-card calibration-page"},fC={class:"panel calibration-panel"},dC={key:0,class:"placeholder"},hC={class:"extrinsics-grid"},pC=["onUpdate:modelValue"],mC={class:"matrix-card"},gC={key:0,class:"calibration-saved"},_C={key:1,class:"success"},vC={key:2,class:"alert"},xC={class:"calibration-actions"},yC=["disabled"],SC=["disabled"],MC={__name:"CameraCalibrationPage",setup(t){const e=$e(!0),n=$e(!1),i=$e(""),s=$e(""),r=$e(""),o=ds({translation:{x:0,y:0,z:0},rotationDegrees:{x:0,y:0,z:0}}),a=g=>Number(g||0)*Math.PI/180,l=_t(()=>{const g=a(o.rotationDegrees.x),_=a(o.rotationDegrees.y),m=a(o.rotationDegrees.z),[p,M]=[Math.cos(g),Math.sin(g)],[b,y]=[Math.cos(_),Math.sin(_)],[A,T]=[Math.cos(m),Math.sin(m)];return[[A*b,A*y*M-T*p,A*y*p+T*M],[T*b,T*y*M+A*p,T*y*p-A*M],[-y,b*M,b*p]]}),c=_t(()=>l.value.map(g=>g.map(_=>_.toFixed(6)).join("   ")).join(`
`)),u=g=>{var _,m;for(const p of["x","y","z"])o.translation[p]=((_=g.translation)==null?void 0:_[p])??0,o.rotationDegrees[p]=((m=g.rotationDegrees)==null?void 0:m[p])??0;r.value=g.updatedAt?new Date(g.updatedAt).toLocaleString("zh-TW"):""},f=async()=>{var g,_;e.value=!0,s.value="";try{u((await Vt.get("/calibration/camera-extrinsics")).data)}catch(m){s.value=((_=(g=m.response)==null?void 0:g.data)==null?void 0:_.error)||"無法讀取相機外參設定。"}finally{e.value=!1}},d=async()=>{var g,_;n.value=!0,s.value="",i.value="";try{const m=(await Vt.put("/calibration/camera-extrinsics",{translation:{...o.translation},rotationDegrees:{...o.rotationDegrees}})).data;u(m),i.value="相機外參已儲存，後端與 AI 可透過校正 API 讀取此設定。"}catch(m){s.value=((_=(g=m.response)==null?void 0:g.data)==null?void 0:_.error)||"儲存相機外參失敗。"}finally{n.value=!1}},h=()=>{u({translation:{x:0,y:0,z:0},rotationDegrees:{x:0,y:0,z:0}}),i.value="",s.value=""};return hs(f),(g,_)=>(Te(),Re("section",uC,[_[10]||(_[10]=ju('<div class="section-title"><p class="eyebrow">Calibration</p><h2>相機外參校正</h2><p class="calibration-lead">設定深度相機座標系 C 轉換至設備／IMU 座標系 B 的固定外參：<code>p<sup>B</sup> = R<sub>C</sub><sup>B</sup> p<sup>C</sup> + t<sub>C</sub><sup>B</sup></code>。</p></div>',1)),C("article",fC,[e.value?(Te(),Re("p",dC,"正在載入校正設定…")):(Te(),Re(At,{key:1},[_[9]||(_[9]=C("div",{class:"calibration-reference"},[C("div",null,[C("strong",null,"設備／IMU 座標 B"),C("span",null,"X：設備前方　Y：左方　Z：上方")]),C("div",null,[C("strong",null,"RGB-D 相機座標 C"),C("span",null,"X：影像右方　Y：影像下方　Z：鏡頭前方")])],-1)),C("div",hC,[C("fieldset",null,[_[3]||(_[3]=C("legend",null,[Tt("平移 t"),C("sub",null,"C"),C("sup",null,"B"),Tt("（公尺）")],-1)),(Te(),Re(At,null,Jn(["x","y","z"],m=>C("label",{key:`translation-${m}`},[Tt(we(m.toUpperCase())+" ",1),Qt(C("input",{"onUpdate:modelValue":p=>o.translation[m]=p,type:"number",step:"0.001","aria-label":"translation axis"},null,8,pC),[[$n,o.translation[m],void 0,{number:!0}]])])),64))]),C("fieldset",null,[_[7]||(_[7]=C("legend",null,[Tt("旋轉 R"),C("sub",null,"C"),C("sup",null,"B"),Tt("（Euler 角，度）")],-1)),C("label",null,[_[4]||(_[4]=Tt("Roll（繞 X 軸）",-1)),Qt(C("input",{"onUpdate:modelValue":_[0]||(_[0]=m=>o.rotationDegrees.x=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[$n,o.rotationDegrees.x,void 0,{number:!0}]])]),C("label",null,[_[5]||(_[5]=Tt("Pitch（繞 Y 軸）",-1)),Qt(C("input",{"onUpdate:modelValue":_[1]||(_[1]=m=>o.rotationDegrees.y=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[$n,o.rotationDegrees.y,void 0,{number:!0}]])]),C("label",null,[_[6]||(_[6]=Tt("Yaw（繞 Z 軸）",-1)),Qt(C("input",{"onUpdate:modelValue":_[2]||(_[2]=m=>o.rotationDegrees.z=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[$n,o.rotationDegrees.z,void 0,{number:!0}]])])])]),C("div",mC,[_[8]||(_[8]=C("div",null,[C("strong",null,[Tt("計算後的旋轉矩陣 R"),C("sub",null,"C"),C("sup",null,"B")]),C("small",null,"採用 Z(Yaw) → Y(Pitch) → X(Roll) 的旋轉順序。")],-1)),C("pre",null,we(c.value),1)]),r.value?(Te(),Re("p",gC,"最後儲存："+we(r.value),1)):$t("",!0),i.value?(Te(),Re("p",_C,we(i.value),1)):$t("",!0),s.value?(Te(),Re("p",vC,we(s.value),1)):$t("",!0),C("div",xC,[C("button",{type:"button",class:"secondary-button",disabled:n.value,onClick:h},"重設為零值",8,yC),C("button",{type:"button",disabled:n.value,onClick:d},we(n.value?"儲存中…":"儲存外參設定"),9,SC)])],64))])]))}},bC=[{path:"/",name:"home",component:wS,meta:{requiresAuth:!0}},{path:"/account/login",name:"account-login",component:OS},{path:"/account/profile",name:"account-profile",component:eM,meta:{requiresAuth:!0}},{path:"/account/password",name:"account-password",component:sM,meta:{requiresAuth:!0}},{path:"/guide",name:"guide",component:lM},{path:"/technology",name:"technology",component:dM},{path:"/history/object",name:"history-object",component:vM,meta:{requiresAuth:!0}},{path:"/history/tasks",name:"history-tasks",component:EM,meta:{requiresAuth:!0}},{path:"/history/operations",name:"history-operations",component:PM,meta:{requiresAuth:!0}},{path:"/media/stream",name:"media-stream",component:rC,meta:{requiresAuth:!0}},{path:"/media/voice",name:"media-voice",component:cC,meta:{requiresAuth:!0}},{path:"/settings/camera-extrinsics",name:"camera-extrinsics",component:MC,meta:{requiresAuth:!0}}],Cg=sx({history:Bv(),routes:bC});Cg.beforeEach(t=>{if(t.meta.requiresAuth&&!za.value)return{name:"account-login",query:{redirect:t.fullPath}};if(t.name==="account-login"&&za.value)return{path:"/"}});j0(gx).use(Cg).mount("#app");
