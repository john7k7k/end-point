(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ut={},dr=[],Mi=()=>{},tp=()=>!1,nl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),il=t=>t.startsWith("onUpdate:"),un=Object.assign,zu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Og=Object.prototype.hasOwnProperty,Tt=(t,e)=>Og.call(t,e),nt=Array.isArray,hr=t=>wo(t)==="[object Map]",Nr=t=>wo(t)==="[object Set]",Nf=t=>wo(t)==="[object Date]",lt=t=>typeof t=="function",Wt=t=>typeof t=="string",Ai=t=>typeof t=="symbol",Rt=t=>t!==null&&typeof t=="object",np=t=>(Rt(t)||lt(t))&&lt(t.then)&&lt(t.catch),ip=Object.prototype.toString,wo=t=>ip.call(t),Fg=t=>wo(t).slice(8,-1),sp=t=>wo(t)==="[object Object]",ku=t=>Wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ro=Bu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bg=/-\w/g,An=sl(t=>t.replace(Bg,e=>e.slice(1).toUpperCase())),zg=/\B([A-Z])/g,xs=sl(t=>t.replace(zg,"-$1").toLowerCase()),rl=sl(t=>t.charAt(0).toUpperCase()+t.slice(1)),wl=sl(t=>t?`on${rl(t)}`:""),vi=(t,e)=>!Object.is(t,e),ya=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},rp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},ol=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uf;const al=()=>Uf||(Uf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yr(t){if(nt(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Wt(i)?Gg(i):yr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Wt(t)||Rt(t))return t}const kg=/;(?![^(]*\))/g,Vg=/:([^]+)/,Hg=/\/\*[^]*?\*\//g;function Gg(t){const e={};return t.replace(Hg,"").split(kg).forEach(n=>{if(n){const i=n.split(Vg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Bn(t){let e="";if(Wt(t))e=t;else if(nt(t))for(let n=0;n<t.length;n++){const i=Bn(t[n]);i&&(e+=i+" ")}else if(Rt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xg=Bu(Wg);function op(t){return!!t||t===""}function qg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ur(t[i],e[i]);return n}function Ur(t,e){if(t===e)return!0;let n=Nf(t),i=Nf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Ai(t),i=Ai(e),n||i)return t===e;if(n=nt(t),i=nt(e),n||i)return n&&i?qg(t,e):!1;if(n=Rt(t),i=Rt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ur(t[o],e[o]))return!1}}return String(t)===String(e)}function Vu(t,e){return t.findIndex(n=>Ur(n,e))}const ap=t=>!!(t&&t.__v_isRef===!0),ge=t=>Wt(t)?t:t==null?"":nt(t)||Rt(t)&&(t.toString===ip||!lt(t.toString))?ap(t)?ge(t.value):JSON.stringify(t,lp,2):String(t),lp=(t,e)=>ap(e)?lp(t,e.value):hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Rl(i,r)+" =>"]=s,n),{})}:Nr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rl(n))}:Ai(e)?Rl(e):Rt(e)&&!nt(e)&&!sp(e)?String(e):e,Rl=(t,e="")=>{var n;return Ai(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class $g{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&on&&(on.active?(this.parent=on,this.index=(on.scopes||(on.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){if(this._on>0&&--this._on===0){if(on===this)on=this.prevScope;else{let e=on;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Yg(){return on}let Ft;const Cl=new WeakSet;class cp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&(on.active?on.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cl.has(this)&&(Cl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Of(this),dp(this);const e=Ft,n=ii;Ft=this,ii=!0;try{return this.fn()}finally{hp(this),Ft=e,ii=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wu(e);this.deps=this.depsTail=void 0,Of(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ac(this)&&this.run()}get dirty(){return Ac(this)}}let up=0,oo,ao;function fp(t,e=!1){if(t.flags|=8,e){t.next=ao,ao=t;return}t.next=oo,oo=t}function Hu(){up++}function Gu(){if(--up>0)return;if(ao){let e=ao;for(ao=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;oo;){let e=oo;for(oo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function dp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Wu(i),Kg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Ac(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function pp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===po)||(t.globalVersion=po,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ac(t))))return;t.flags|=2;const e=t.dep,n=Ft,i=ii;Ft=t,ii=!0;try{dp(t);const s=t.fn(t._value);(e.version===0||vi(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ft=n,ii=i,hp(t),t.flags&=-3}}function Wu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Wu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Kg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ii=!0;const mp=[];function Wi(){mp.push(ii),ii=!1}function Xi(){const t=mp.pop();ii=t===void 0?!0:t}function Of(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ft;Ft=void 0;try{e()}finally{Ft=n}}}let po=0;class Zg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!ii||Ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ft)n=this.activeLink=new Zg(Ft,this),Ft.deps?(n.prevDep=Ft.depsTail,Ft.depsTail.nextDep=n,Ft.depsTail=n):Ft.deps=Ft.depsTail=n,gp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ft.depsTail,n.nextDep=void 0,Ft.depsTail.nextDep=n,Ft.depsTail=n,Ft.deps===n&&(Ft.deps=i)}return n}trigger(e){this.version++,po++,this.notify(e)}notify(e){Hu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gu()}}}function gp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)gp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wc=new WeakMap,Os=Symbol(""),Rc=Symbol(""),mo=Symbol("");function gn(t,e,n){if(ii&&Ft){let i=wc.get(t);i||wc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Xu),s.map=i,s.key=n),s.track()}}function Bi(t,e,n,i,s,r){const o=wc.get(t);if(!o){po++;return}const a=l=>{l&&l.trigger()};if(Hu(),e==="clear")o.forEach(a);else{const l=nt(t),c=l&&ku(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===mo||!Ai(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(mo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Os)),hr(t)&&a(o.get(Rc)));break;case"delete":l||(a(o.get(Os)),hr(t)&&a(o.get(Rc)));break;case"set":hr(t)&&a(o.get(Os));break}}Gu()}function qs(t){const e=Et(t);return e===t?e:(gn(e,"iterate",mo),Zn(t)?e:e.map(ri))}function ll(t){return gn(t=Et(t),"iterate",mo),t}function mi(t,e){return qi(t)?Sr(Fs(t)?ri(e):e):ri(e)}const Jg={__proto__:null,[Symbol.iterator](){return Pl(this,Symbol.iterator,t=>mi(this,t))},concat(...t){return qs(this).concat(...t.map(e=>nt(e)?qs(e):e))},entries(){return Pl(this,"entries",t=>(t[1]=mi(this,t[1]),t))},every(t,e){return Ci(this,"every",t,e,void 0,arguments)},filter(t,e){return Ci(this,"filter",t,e,n=>n.map(i=>mi(this,i)),arguments)},find(t,e){return Ci(this,"find",t,e,n=>mi(this,n),arguments)},findIndex(t,e){return Ci(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ci(this,"findLast",t,e,n=>mi(this,n),arguments)},findLastIndex(t,e){return Ci(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ci(this,"forEach",t,e,void 0,arguments)},includes(...t){return Dl(this,"includes",t)},indexOf(...t){return Dl(this,"indexOf",t)},join(t){return qs(this).join(t)},lastIndexOf(...t){return Dl(this,"lastIndexOf",t)},map(t,e){return Ci(this,"map",t,e,void 0,arguments)},pop(){return Hr(this,"pop")},push(...t){return Hr(this,"push",t)},reduce(t,...e){return Ff(this,"reduce",t,e)},reduceRight(t,...e){return Ff(this,"reduceRight",t,e)},shift(){return Hr(this,"shift")},some(t,e){return Ci(this,"some",t,e,void 0,arguments)},splice(...t){return Hr(this,"splice",t)},toReversed(){return qs(this).toReversed()},toSorted(t){return qs(this).toSorted(t)},toSpliced(...t){return qs(this).toSpliced(...t)},unshift(...t){return Hr(this,"unshift",t)},values(){return Pl(this,"values",t=>mi(this,t))}};function Pl(t,e,n){const i=ll(t),s=i[e]();return i!==t&&!Zn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const jg=Array.prototype;function Ci(t,e,n,i,s,r){const o=ll(t),a=o!==t&&!Zn(t),l=o[e];if(l!==jg[e]){const f=l.apply(t,r);return a?ri(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,mi(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ff(t,e,n,i){const s=ll(t),r=s!==t&&!Zn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=mi(t,c)),n.call(this,c,mi(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?mi(t,l):l}function Dl(t,e,n){const i=Et(t);gn(i,"iterate",mo);const s=i[e](...n);return(s===-1||s===!1)&&Yu(n[0])?(n[0]=Et(n[0]),i[e](...n)):s}function Hr(t,e,n=[]){Wi(),Hu();const i=Et(t)[e].apply(t,n);return Gu(),Xi(),i}const Qg=Bu("__proto__,__v_isRef,__isVue"),_p=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ai));function e_(t){Ai(t)||(t=String(t));const e=Et(this);return gn(e,"has",t),e.hasOwnProperty(t)}class vp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?u_:Mp:r?Sp:yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=nt(e);if(!s){let l;if(o&&(l=Jg[n]))return l;if(n==="hasOwnProperty")return e_}const a=Reflect.get(e,n,xn(e)?e:i);if((Ai(n)?_p.has(n):Qg(n))||(s||gn(e,"get",n),r))return a;if(xn(a)){const l=o&&ku(n)?a:a.value;return s&&Rt(l)?Pc(l):l}return Rt(a)?s?Pc(a):ys(a):a}}class xp extends vp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=nt(e)&&ku(n);if(!this._isShallow){const c=qi(r);if(!Zn(i)&&!qi(i)&&(r=Et(r),i=Et(i)),!o&&xn(r)&&!xn(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:Tt(e,n),l=Reflect.set(e,n,i,xn(e)?e:s);return e===Et(s)&&l&&(a?vi(i,r)&&Bi(e,"set",n,i):Bi(e,"add",n,i)),l}deleteProperty(e,n){const i=Tt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Bi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Ai(n)||!_p.has(n))&&gn(e,"has",n),i}ownKeys(e){return gn(e,"iterate",nt(e)?"length":Os),Reflect.ownKeys(e)}}class t_ extends vp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const n_=new xp,i_=new t_,s_=new xp(!0);const Cc=t=>t,Go=t=>Reflect.getPrototypeOf(t);function r_(t,e,n){return function(...i){const s=this.__v_raw,r=Et(s),o=hr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Cc:e?Sr:ri;return!e&&gn(r,"iterate",l?Rc:Os),un(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function o_(t,e){const n={get(s){const r=this.__v_raw,o=Et(r),a=Et(s);t||(vi(s,a)&&gn(o,"get",s),gn(o,"get",a));const{has:l}=Go(o),c=e?Cc:t?Sr:ri;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&gn(Et(s),"iterate",Os),s.size},has(s){const r=this.__v_raw,o=Et(r),a=Et(s);return t||(vi(s,a)&&gn(o,"has",s),gn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Et(a),c=e?Cc:t?Sr:ri;return!t&&gn(l,"iterate",Os),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return un(n,t?{add:Wo("add"),set:Wo("set"),delete:Wo("delete"),clear:Wo("clear")}:{add(s){const r=Et(this),o=Go(r),a=Et(s),l=!e&&!Zn(s)&&!qi(s)?a:s;return o.has.call(r,l)||vi(s,l)&&o.has.call(r,s)||vi(a,l)&&o.has.call(r,a)||(r.add(l),Bi(r,"add",l,l)),this},set(s,r){!e&&!Zn(r)&&!qi(r)&&(r=Et(r));const o=Et(this),{has:a,get:l}=Go(o);let c=a.call(o,s);c||(s=Et(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?vi(r,u)&&Bi(o,"set",s,r):Bi(o,"add",s,r),this},delete(s){const r=Et(this),{has:o,get:a}=Go(r);let l=o.call(r,s);l||(s=Et(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Bi(r,"delete",s,void 0),c},clear(){const s=Et(this),r=s.size!==0,o=s.clear();return r&&Bi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=r_(s,t,e)}),n}function qu(t,e){const n=o_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Tt(n,s)&&s in i?n:i,s,r)}const a_={get:qu(!1,!1)},l_={get:qu(!1,!0)},c_={get:qu(!0,!1)};const yp=new WeakMap,Sp=new WeakMap,Mp=new WeakMap,u_=new WeakMap;function f_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ys(t){return qi(t)?t:$u(t,!1,n_,a_,yp)}function bp(t){return $u(t,!1,s_,l_,Sp)}function Pc(t){return $u(t,!0,i_,c_,Mp)}function $u(t,e,n,i,s){if(!Rt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=f_(Fg(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Fs(t){return qi(t)?Fs(t.__v_raw):!!(t&&t.__v_isReactive)}function qi(t){return!!(t&&t.__v_isReadonly)}function Zn(t){return!!(t&&t.__v_isShallow)}function Yu(t){return t?!!t.__v_raw:!1}function Et(t){const e=t&&t.__v_raw;return e?Et(e):t}function d_(t){return!Tt(t,"__v_skip")&&Object.isExtensible(t)&&rp(t,"__v_skip",!0),t}const ri=t=>Rt(t)?ys(t):t,Sr=t=>Rt(t)?Pc(t):t;function xn(t){return t?t.__v_isRef===!0:!1}function Ge(t){return Ep(t,!1)}function h_(t){return Ep(t,!0)}function Ep(t,e){return xn(t)?t:new p_(t,e)}class p_{constructor(e,n){this.dep=new Xu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Et(e),this._value=n?e:ri(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Zn(e)||qi(e);e=i?e:Et(e),vi(e,n)&&(this._rawValue=e,this._value=i?e:ri(e),this.dep.trigger())}}function Ln(t){return xn(t)?t.value:t}const m_={get:(t,e,n)=>e==="__v_raw"?t:Ln(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return xn(s)&&!xn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Tp(t){return Fs(t)?t:new Proxy(t,m_)}class g_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return fp(this,!0),!0}get value(){const e=this.dep.track();return pp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function __(t,e,n=!1){let i,s;return lt(t)?i=t:(i=t.get,s=t.set),new g_(i,s,n)}const Xo={},Na=new WeakMap;let Cs;function v_(t,e=!1,n=Cs){if(n){let i=Na.get(n);i||Na.set(n,i=[]),i.push(t)}}function x_(t,e,n=Ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=y=>s?y:Zn(y)||s===!1||s===0?zi(y,1):zi(y);let u,f,d,h,g=!1,v=!1;if(xn(t)?(f=()=>t.value,g=Zn(t)):Fs(t)?(f=()=>c(t),g=!0):nt(t)?(v=!0,g=t.some(y=>Fs(y)||Zn(y)),f=()=>t.map(y=>{if(xn(y))return y.value;if(Fs(y))return c(y);if(lt(y))return l?l(y,2):y()})):lt(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Wi();try{d()}finally{Xi()}}const y=Cs;Cs=u;try{return l?l(t,3,[h]):t(h)}finally{Cs=y}}:f=Mi,e&&s){const y=f,R=s===!0?1/0:s;f=()=>zi(y(),R)}const m=Yg(),p=()=>{u.stop(),m&&m.active&&zu(m.effects,u)};if(r&&e){const y=e;e=(...R)=>{const T=y(...R);return p(),T}}let M=v?new Array(t.length).fill(Xo):Xo;const S=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const R=u.run();if(y||s||g||(v?R.some((T,L)=>vi(T,M[L])):vi(R,M))){d&&d();const T=Cs;Cs=u;try{const L=[R,M===Xo?void 0:v&&M[0]===Xo?[]:M,h];M=R,l?l(e,3,L):e(...L)}finally{Cs=T}}}else u.run()};return a&&a(S),u=new cp(f),u.scheduler=o?()=>o(S,!1):S,h=y=>v_(y,!1,u),d=u.onStop=()=>{const y=Na.get(u);if(y){if(l)l(y,4);else for(const R of y)R();Na.delete(u)}},e?i?S(!0):M=u.run():o?o(S.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function zi(t,e=1/0,n){if(e<=0||!Rt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,xn(t))zi(t.value,e,n);else if(nt(t))for(let i=0;i<t.length;i++)zi(t[i],e,n);else if(Nr(t)||hr(t))t.forEach(i=>{zi(i,e,n)});else if(sp(t)){for(const i in t)zi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&zi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ro(t,e,n,i){try{return i?t(...i):t()}catch(s){cl(s,e,n)}}function oi(t,e,n,i){if(lt(t)){const s=Ro(t,e,n,i);return s&&np(s)&&s.catch(r=>{cl(r,e,n)}),s}if(nt(t)){const s=[];for(let r=0;r<t.length;r++)s.push(oi(t[r],e,n,i));return s}}function cl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Wi(),Ro(r,null,10,[t,l,c]),Xi();return}}y_(t,n,s,i,o)}function y_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const En=[];let pi=-1;const pr=[];let ls=null,lr=0;const Ap=Promise.resolve();let Ua=null;function Co(t){const e=Ua||Ap;return t?e.then(this?t.bind(this):t):e}function S_(t){let e=pi+1,n=En.length;for(;e<n;){const i=e+n>>>1,s=En[i],r=go(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Ku(t){if(!(t.flags&1)){const e=go(t),n=En[En.length-1];!n||!(t.flags&2)&&e>=go(n)?En.push(t):En.splice(S_(e),0,t),t.flags|=1,wp()}}function wp(){Ua||(Ua=Ap.then(Cp))}function M_(t){nt(t)?pr.push(...t):ls&&t.id===-1?ls.splice(lr+1,0,t):t.flags&1||(pr.push(t),t.flags|=1),wp()}function Bf(t,e,n=pi+1){for(;n<En.length;n++){const i=En[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;En.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Rp(t){if(pr.length){const e=[...new Set(pr)].sort((n,i)=>go(n)-go(i));if(pr.length=0,ls){ls.push(...e);return}for(ls=e,lr=0;lr<ls.length;lr++){const n=ls[lr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ls=null,lr=0}}const go=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Cp(t){try{for(pi=0;pi<En.length;pi++){const e=En[pi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ro(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pi<En.length;pi++){const e=En[pi];e&&(e.flags&=-2)}pi=-1,En.length=0,Rp(),Ua=null,(En.length||pr.length)&&Cp()}}let Vn=null,Pp=null;function Oa(t){const e=Vn;return Vn=t,Pp=t&&t.type.__scopeId||null,e}function Fa(t,e=Vn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ka(-1);const r=Oa(e),o=Bs.length;let a;try{a=t(...s)}finally{for(let l=Bs.length;l>o;l--)em();Oa(r),i._d&&ka(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Kt(t,e){if(Vn===null)return t;const n=pl(Vn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ut]=e[s];r&&(lt(r)&&(r={mounted:r,updated:r}),r.deep&&zi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function bs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Wi(),oi(l,n,8,[t.el,a,t,e]),Xi())}}function Sa(t,e){if(_n){let n=_n.provides;const i=_n.parent&&_n.parent.provides;i===n&&(n=_n.provides=Object.create(i)),n[t]=e}}function si(t,e,n=!1){const i=S0();if(i||mr){let s=mr?mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&lt(e)?e.call(i&&i.proxy):e}}const b_=Symbol.for("v-scx"),E_=()=>si(b_);function Kn(t,e,n){return Dp(t,e,n)}function Dp(t,e,n=Ut){const{immediate:i,deep:s,flush:r,once:o}=n,a=un({},n),l=e&&i||!e&&r!=="post";let c;if(vo){if(r==="sync"){const h=E_();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Mi,h.resume=Mi,h.pause=Mi,h}}const u=_n;a.call=(h,g,v)=>oi(h,u,g,v);let f=!1;r==="post"?a.scheduler=h=>{Dn(h,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Ku(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=x_(t,e,a);return vo&&(c?c.push(d):l&&d()),d}function T_(t,e,n){const i=this.proxy,s=Wt(t)?t.includes(".")?Lp(i,t):()=>i[t]:t.bind(i,i);let r;lt(e)?r=e:(r=e.handler,n=e);const o=Po(this),a=Dp(s,r.bind(i),n);return o(),a}function Lp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const A_=Symbol("_vte"),w_=t=>t.__isTeleport,Ll=Symbol("_leaveCb");function Zu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ip(t,e){return lt(t)?un({name:t.name},e,{setup:t}):t}function Np(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function zf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ba=new WeakMap;function lo(t,e,n,i,s=!1){if(nt(t)){t.forEach((v,m)=>lo(v,e&&(nt(e)?e[m]:e),n,i,s));return}if(co(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&lo(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?pl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ut?a.refs={}:a.refs,f=a.setupState,d=Et(f),h=f===Ut?tp:v=>zf(u,v)?!1:Tt(d,v),g=(v,m)=>!(m&&zf(u,m));if(c!=null&&c!==l){if(kf(e),Wt(c))u[c]=null,h(c)&&(f[c]=null);else if(xn(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(lt(l))Ro(l,a,12,[o,u]);else{const v=Wt(l),m=xn(l);if(v||m){const p=()=>{if(t.f){const M=v?h(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)nt(M)&&zu(M,r);else if(nt(M))M.includes(r)||M.push(r);else if(v)u[l]=[r],h(l)&&(f[l]=u[l]);else{const S=[r];g(l,t.k)&&(l.value=S),t.k&&(u[t.k]=S)}}else v?(u[l]=o,h(l)&&(f[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const M=()=>{p(),Ba.delete(t)};M.id=-1,Ba.set(t,M),Dn(M,n)}else kf(t),p()}}}function kf(t){const e=Ba.get(t);e&&(e.flags|=8,Ba.delete(t))}al().requestIdleCallback;al().cancelIdleCallback;const co=t=>!!t.type.__asyncLoader,Up=t=>t.type.__isKeepAlive;function R_(t,e){Op(t,"a",e)}function C_(t,e){Op(t,"da",e)}function Op(t,e,n=_n){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ul(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Up(s.parent.vnode)&&P_(i,e,n,s),s=s.parent}}function P_(t,e,n,i){const s=ul(e,t,i,!0);fl(()=>{zu(i[e],s)},n)}function ul(t,e,n=_n,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Wi();const a=Po(n),l=oi(e,n,t,o);return a(),Xi(),l});return i?s.unshift(r):s.push(r),r}}const Zi=t=>(e,n=_n)=>{(!vo||t==="sp")&&ul(t,(...i)=>e(...i),n)},D_=Zi("bm"),Ji=Zi("m"),L_=Zi("bu"),I_=Zi("u"),N_=Zi("bum"),fl=Zi("um"),U_=Zi("sp"),O_=Zi("rtg"),F_=Zi("rtc");function B_(t,e=_n){ul("ec",t,e)}const z_="components";function k_(t,e){return H_(z_,t,!0,e)||t}const V_=Symbol.for("v-ndc");function H_(t,e,n=!0,i=!1){const s=Vn||_n;if(s){const r=s.type;{const a=A0(r,!1);if(a&&(a===e||a===An(e)||a===rl(An(e))))return r}const o=Vf(s[t]||r[t],e)||Vf(s.appContext[t],e);return!o&&i?r:o}}function Vf(t,e){return t&&(t[e]||t[An(e)]||t[rl(An(e))])}function Tn(t,e,n,i){let s;const r=n,o=nt(t);if(o||Wt(t)){const a=o&&Fs(t);let l=!1,c=!1;a&&(l=!Zn(t),c=qi(t),t=ll(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?Sr(ri(t[u])):ri(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(Rt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const Dc=t=>t?im(t)?pl(t):Dc(t.parent):null,uo=un(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bp(t),$forceUpdate:t=>t.f||(t.f=()=>{Ku(t.update)}),$nextTick:t=>t.n||(t.n=Co.bind(t.proxy)),$watch:t=>T_.bind(t)}),Il=(t,e)=>t!==Ut&&!t.__isScriptSetup&&Tt(t,e),G_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Il(i,e))return o[e]=1,i[e];if(s!==Ut&&Tt(s,e))return o[e]=2,s[e];if(Tt(r,e))return o[e]=3,r[e];if(n!==Ut&&Tt(n,e))return o[e]=4,n[e];Lc&&(o[e]=0)}}const c=uo[e];let u,f;if(c)return e==="$attrs"&&gn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Ut&&Tt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Tt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Il(s,e)?(s[e]=n,!0):i!==Ut&&Tt(i,e)?(i[e]=n,!0):Tt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Ut&&a[0]!=="$"&&Tt(t,a)||Il(e,a)||Tt(r,a)||Tt(i,a)||Tt(uo,a)||Tt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Tt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Hf(t){return nt(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Lc=!0;function W_(t){const e=Bp(t),n=t.proxy,i=t.ctx;Lc=!1,e.beforeCreate&&Gf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:S,unmounted:y,render:R,renderTracked:T,renderTriggered:L,errorCaptured:x,serverPrefetch:P,expose:U,inheritAttrs:N,components:F,directives:ne,filters:re}=e;if(c&&X_(c,i,null),o)for(const G in o){const ie=o[G];lt(ie)&&(i[G]=ie.bind(n))}if(s){const G=s.call(n,n);Rt(G)&&(t.data=ys(G))}if(Lc=!0,r)for(const G in r){const ie=r[G],ye=lt(ie)?ie.bind(n,n):lt(ie.get)?ie.get.bind(n,n):Mi,Te=!lt(ie)&&lt(ie.set)?ie.set.bind(n):Mi,Me=ft({get:ye,set:Te});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Se=>Me.value=Se})}if(a)for(const G in a)Fp(a[G],i,n,G);if(l){const G=lt(l)?l.call(n):l;Reflect.ownKeys(G).forEach(ie=>{Sa(ie,G[ie])})}u&&Gf(u,t,"c");function Q(G,ie){nt(ie)?ie.forEach(ye=>G(ye.bind(n))):ie&&G(ie.bind(n))}if(Q(D_,f),Q(Ji,d),Q(L_,h),Q(I_,g),Q(R_,v),Q(C_,m),Q(B_,x),Q(F_,T),Q(O_,L),Q(N_,M),Q(fl,y),Q(U_,P),nt(U))if(U.length){const G=t.exposed||(t.exposed={});U.forEach(ie=>{Object.defineProperty(G,ie,{get:()=>n[ie],set:ye=>n[ie]=ye,enumerable:!0})})}else t.exposed||(t.exposed={});R&&t.render===Mi&&(t.render=R),N!=null&&(t.inheritAttrs=N),F&&(t.components=F),ne&&(t.directives=ne),P&&Np(t)}function X_(t,e,n=Mi){nt(t)&&(t=Ic(t));for(const i in t){const s=t[i];let r;Rt(s)?"default"in s?r=si(s.from||i,s.default,!0):r=si(s.from||i):r=si(s),xn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Gf(t,e,n){oi(nt(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fp(t,e,n,i){let s=i.includes(".")?Lp(n,i):()=>n[i];if(Wt(t)){const r=e[t];lt(r)&&Kn(s,r)}else if(lt(t))Kn(s,t.bind(n));else if(Rt(t))if(nt(t))t.forEach(r=>Fp(r,e,n,i));else{const r=lt(t.handler)?t.handler.bind(n):e[t.handler];lt(r)&&Kn(s,r,t)}}function Bp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>za(l,c,o,!0)),za(l,e,o)),Rt(e)&&r.set(e,l),l}function za(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&za(t,r,n,!0),s&&s.forEach(o=>za(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=q_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const q_={data:Wf,props:Xf,emits:Xf,methods:to,computed:to,beforeCreate:Sn,created:Sn,beforeMount:Sn,mounted:Sn,beforeUpdate:Sn,updated:Sn,beforeDestroy:Sn,beforeUnmount:Sn,destroyed:Sn,unmounted:Sn,activated:Sn,deactivated:Sn,errorCaptured:Sn,serverPrefetch:Sn,components:to,directives:to,watch:Y_,provide:Wf,inject:$_};function Wf(t,e){return e?t?function(){return un(lt(t)?t.call(this,this):t,lt(e)?e.call(this,this):e)}:e:t}function $_(t,e){return to(Ic(t),Ic(e))}function Ic(t){if(nt(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Sn(t,e){return t?[...new Set([].concat(t,e))]:e}function to(t,e){return t?un(Object.create(null),t,e):e}function Xf(t,e){return t?nt(t)&&nt(e)?[...new Set([...t,...e])]:un(Object.create(null),Hf(t),Hf(e??{})):e}function Y_(t,e){if(!t)return e;if(!e)return t;const n=un(Object.create(null),t);for(const i in e)n[i]=Sn(t[i],e[i]);return n}function zp(){return{app:null,config:{isNativeTag:tp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let K_=0;function Z_(t,e){return function(i,s=null){lt(i)||(i=un({},i)),s!=null&&!Rt(s)&&(s=null);const r=zp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:K_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:R0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&lt(u.install)?(o.add(u),u.install(c,...f)):lt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||ln(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,pl(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(oi(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=mr;mr=c;try{return u()}finally{mr=f}}};return c}}let mr=null;const J_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${An(e)}Modifiers`]||t[`${xs(e)}Modifiers`];function j_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ut;let s=n;const r=e.startsWith("update:"),o=r&&J_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Wt(u)?u.trim():u)),o.number&&(s=n.map(ol)));let a,l=i[a=wl(e)]||i[a=wl(An(e))];!l&&r&&(l=i[a=wl(xs(e))]),l&&oi(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,oi(c,t,6,s)}}const Q_=new WeakMap;function kp(t,e,n=!1){const i=n?Q_:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!lt(t)){const l=c=>{const u=kp(c,e,!0);u&&(a=!0,un(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Rt(t)&&i.set(t,null),null):(nt(r)?r.forEach(l=>o[l]=null):un(o,r),Rt(t)&&i.set(t,o),o)}function dl(t,e){return!t||!nl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Tt(t,e[0].toLowerCase()+e.slice(1))||Tt(t,xs(e))||Tt(t,e))}function qf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:v}=t,m=Oa(t);let p,M;try{if(n.shapeFlag&4){const y=s||i,R=y;p=gi(c.call(R,y,u,f,h,d,g)),M=a}else{const y=e;p=gi(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),M=e.props?a:e0(a)}}catch(y){Bs.length=0,cl(y,t,1),p=ln(ms)}let S=p;if(M&&v!==!1){const y=Object.keys(M),{shapeFlag:R}=S;y.length&&R&7&&(r&&y.some(il)&&(M=t0(M,r)),S=Mr(S,M,!1,!0))}return n.dirs&&(S=Mr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&Zu(S,n.transition),p=S,Oa(m),p}const e0=t=>{let e;for(const n in t)(n==="class"||n==="style"||nl(n))&&((e||(e={}))[n]=t[n]);return e},t0=(t,e)=>{const n={};for(const i in t)(!il(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function n0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?$f(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Vp(o,i,d)&&!dl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$f(i,o,c):!0:!!o;return!1}function $f(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Vp(e,t,r)&&!dl(n,r))return!0}return!1}function Vp(t,e,n){const i=t[n],s=e[n];return n==="style"&&Rt(i)&&Rt(s)?!Ur(i,s):i!==s}function i0({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Hp={},Gp=()=>Object.create(Hp),Wp=t=>Object.getPrototypeOf(t)===Hp;function s0(t,e,n,i=!1){const s={},r=Gp();t.propsDefaults=Object.create(null),Xp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:bp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function r0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Et(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(dl(t.emitsOptions,d))continue;const h=e[d];if(l)if(Tt(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const g=An(d);s[g]=Nc(l,a,g,h,t,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Xp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!Tt(e,f)&&((u=xs(f))===f||!Tt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Nc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Tt(e,f))&&(delete r[f],c=!0)}c&&Bi(t.attrs,"set","")}function Xp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ro(l))continue;const c=e[l];let u;s&&Tt(s,u=An(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:dl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Et(n),c=a||Ut;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Nc(s,l,f,c[f],t,!Tt(c,f))}}return o}function Nc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&lt(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Po(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===xs(n))&&(i=!0))}return i}const o0=new WeakMap;function qp(t,e,n=!1){const i=n?o0:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!lt(t)){const u=f=>{l=!0;const[d,h]=qp(f,e,!0);un(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Rt(t)&&i.set(t,dr),dr;if(nt(r))for(let u=0;u<r.length;u++){const f=An(r[u]);Yf(f)&&(o[f]=Ut)}else if(r)for(const u in r){const f=An(u);if(Yf(f)){const d=r[u],h=o[f]=nt(d)||lt(d)?{type:d}:un({},d),g=h.type;let v=!1,m=!0;if(nt(g))for(let p=0;p<g.length;++p){const M=g[p],S=lt(M)&&M.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(m=!1)}else v=lt(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||Tt(h,"default"))&&a.push(f)}}const c=[o,a];return Rt(t)&&i.set(t,c),c}function Yf(t){return t[0]!=="$"&&!ro(t)}const Ju=t=>t==="_"||t==="_ctx"||t==="$stable",ju=t=>nt(t)?t.map(gi):[gi(t)],a0=(t,e,n)=>{if(e._n)return e;const i=Fa((...s)=>ju(e(...s)),n);return i._c=!1,i},$p=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Ju(s))continue;const r=t[s];if(lt(r))e[s]=a0(s,r,i);else if(r!=null){const o=ju(r);e[s]=()=>o}}},Yp=(t,e)=>{const n=ju(e);t.slots.default=()=>n},Kp=(t,e,n)=>{for(const i in e)(n||!Ju(i))&&(t[i]=e[i])},l0=(t,e,n)=>{const i=t.slots=Gp();if(t.vnode.shapeFlag&32){const s=e._;s?(Kp(i,e,n),n&&rp(i,"_",s,!0)):$p(e,i)}else e&&Yp(t,e)},c0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ut;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Kp(s,e,n):(r=!e.$stable,$p(e,s)),o=e}else e&&(Yp(t,e),o={default:1});if(r)for(const a in s)!Ju(a)&&o[a]==null&&delete s[a]},Dn=p0;function u0(t){return f0(t)}function f0(t,e){const n=al();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Mi,insertStaticContent:g}=t,v=(E,w,I,z=null,k=null,j=null,pe=void 0,fe=null,ve=!!w.dynamicChildren)=>{if(E===w)return;E&&!Gr(E,w)&&(z=B(E),Se(E,k,j,!0),E=null),w.patchFlag===-2&&(ve=!1,w.dynamicChildren=null);const{type:ue,ref:Le,shapeFlag:D}=w;switch(ue){case hl:m(E,w,I,z);break;case ms:p(E,w,I,z);break;case Ma:E==null&&M(w,I,z,pe);break;case _t:F(E,w,I,z,k,j,pe,fe,ve);break;default:D&1?R(E,w,I,z,k,j,pe,fe,ve):D&6?ne(E,w,I,z,k,j,pe,fe,ve):(D&64||D&128)&&ue.process(E,w,I,z,k,j,pe,fe,ve,J)}Le!=null&&k?lo(Le,E&&E.ref,j,w||E,!w):Le==null&&E&&E.ref!=null&&lo(E.ref,null,j,E,!0)},m=(E,w,I,z)=>{if(E==null)i(w.el=a(w.children),I,z);else{const k=w.el=E.el;w.children!==E.children&&c(k,w.children)}},p=(E,w,I,z)=>{E==null?i(w.el=l(w.children||""),I,z):w.el=E.el},M=(E,w,I,z)=>{[E.el,E.anchor]=g(E.children,w,I,z,E.el,E.anchor)},S=({el:E,anchor:w},I,z)=>{let k;for(;E&&E!==w;)k=d(E),i(E,I,z),E=k;i(w,I,z)},y=({el:E,anchor:w})=>{let I;for(;E&&E!==w;)I=d(E),s(E),E=I;s(w)},R=(E,w,I,z,k,j,pe,fe,ve)=>{if(w.type==="svg"?pe="svg":w.type==="math"&&(pe="mathml"),E==null)T(w,I,z,k,j,pe,fe,ve);else{const ue=E.el&&E.el._isVueCE?E.el:null;try{ue&&ue._beginPatch(),P(E,w,k,j,pe,fe,ve)}finally{ue&&ue._endPatch()}}},T=(E,w,I,z,k,j,pe,fe)=>{let ve,ue;const{props:Le,shapeFlag:D,transition:ke,dirs:Ie}=E;if(ve=E.el=o(E.type,j,Le&&Le.is,Le),D&8?u(ve,E.children):D&16&&x(E.children,ve,null,z,k,Nl(E,j),pe,fe),Ie&&bs(E,null,z,"created"),L(ve,E,E.scopeId,pe,z),Le){for(const _ in Le)_!=="value"&&!ro(_)&&r(ve,_,null,Le[_],j,z);"value"in Le&&r(ve,"value",null,Le.value,j),(ue=Le.onVnodeBeforeMount)&&fi(ue,z,E)}Ie&&bs(E,null,z,"beforeMount");const A=d0(k,ke);A&&ke.beforeEnter(ve),i(ve,w,I),((ue=Le&&Le.onVnodeMounted)||A||Ie)&&Dn(()=>{try{ue&&fi(ue,z,E),A&&ke.enter(ve),Ie&&bs(E,null,z,"mounted")}finally{}},k)},L=(E,w,I,z,k)=>{if(I&&h(E,I),z)for(let j=0;j<z.length;j++)h(E,z[j]);if(k){let j=k.subTree;if(w===j||Qp(j.type)&&(j.ssContent===w||j.ssFallback===w)){const pe=k.vnode;L(E,pe,pe.scopeId,pe.slotScopeIds,k.parent)}}},x=(E,w,I,z,k,j,pe,fe,ve=0)=>{for(let ue=ve;ue<E.length;ue++){const Le=E[ue]=fe?Fi(E[ue]):gi(E[ue]);v(null,Le,w,I,z,k,j,pe,fe)}},P=(E,w,I,z,k,j,pe)=>{const fe=w.el=E.el;let{patchFlag:ve,dynamicChildren:ue,dirs:Le}=w;ve|=E.patchFlag&16;const D=E.props||Ut,ke=w.props||Ut;let Ie;if(I&&Es(I,!1),(Ie=ke.onVnodeBeforeUpdate)&&fi(Ie,I,w,E),Le&&bs(w,E,I,"beforeUpdate"),I&&Es(I,!0),ue&&(!E.dynamicChildren||E.dynamicChildren.length!==ue.length)&&(ve=0,pe=!1,ue=null),(D.innerHTML&&ke.innerHTML==null||D.textContent&&ke.textContent==null)&&u(fe,""),ue?U(E.dynamicChildren,ue,fe,I,z,Nl(w,k),j):pe||ie(E,w,fe,null,I,z,Nl(w,k),j,!1),ve>0){if(ve&16)N(fe,D,ke,I,k);else if(ve&2&&D.class!==ke.class&&r(fe,"class",null,ke.class,k),ve&4&&r(fe,"style",D.style,ke.style,k),ve&8){const A=w.dynamicProps;for(let _=0;_<A.length;_++){const V=A[_],O=D[V],se=ke[V];(se!==O||V==="value")&&r(fe,V,O,se,k,I)}}ve&1&&E.children!==w.children&&u(fe,w.children)}else!pe&&ue==null&&N(fe,D,ke,I,k);((Ie=ke.onVnodeUpdated)||Le)&&Dn(()=>{Ie&&fi(Ie,I,w,E),Le&&bs(w,E,I,"updated")},z)},U=(E,w,I,z,k,j,pe)=>{for(let fe=0;fe<w.length;fe++){const ve=E[fe],ue=w[fe],Le=ve.el&&(ve.type===_t||!Gr(ve,ue)||ve.shapeFlag&198)?f(ve.el):I;v(ve,ue,Le,null,z,k,j,pe,!0)}},N=(E,w,I,z,k)=>{if(w!==I){if(w!==Ut)for(const j in w)!ro(j)&&!(j in I)&&r(E,j,w[j],null,k,z);for(const j in I){if(ro(j))continue;const pe=I[j],fe=w[j];pe!==fe&&j!=="value"&&r(E,j,fe,pe,k,z)}"value"in I&&r(E,"value",w.value,I.value,k)}},F=(E,w,I,z,k,j,pe,fe,ve)=>{const ue=w.el=E?E.el:a(""),Le=w.anchor=E?E.anchor:a("");let{patchFlag:D,dynamicChildren:ke,slotScopeIds:Ie}=w;Ie&&(fe=fe?fe.concat(Ie):Ie),E==null?(i(ue,I,z),i(Le,I,z),x(w.children||[],I,Le,k,j,pe,fe,ve)):D>0&&D&64&&ke&&E.dynamicChildren&&E.dynamicChildren.length===ke.length?(U(E.dynamicChildren,ke,I,k,j,pe,fe),(w.key!=null||k&&w===k.subTree)&&Zp(E,w,!0)):ie(E,w,I,Le,k,j,pe,fe,ve)},ne=(E,w,I,z,k,j,pe,fe,ve)=>{w.slotScopeIds=fe,E==null?w.shapeFlag&512?k.ctx.activate(w,I,z,pe,ve):re(w,I,z,k,j,pe,ve):$(E,w,ve)},re=(E,w,I,z,k,j,pe)=>{const fe=E.component=y0(E,z,k);if(Up(E)&&(fe.ctx.renderer=J),M0(fe,!1,pe),fe.asyncDep){if(k&&k.registerDep(fe,Q,pe),!E.el){const ve=fe.subTree=ln(ms);p(null,ve,w,I),E.placeholder=ve.el}}else Q(fe,E,w,I,k,j,pe)},$=(E,w,I)=>{const z=w.component=E.component;if(n0(E,w,I))if(z.asyncDep&&!z.asyncResolved){G(z,w,I);return}else z.next=w,z.update();else w.el=E.el,z.vnode=w},Q=(E,w,I,z,k,j,pe)=>{const fe=()=>{if(E.isMounted){let{next:D,bu:ke,u:Ie,parent:A,vnode:_}=E;{const we=Jp(E);if(we){D&&(D.el=_.el,G(E,D,pe)),we.asyncDep.then(()=>{Dn(()=>{E.isUnmounted||ue()},k)});return}}let V=D,O;Es(E,!1),D?(D.el=_.el,G(E,D,pe)):D=_,ke&&ya(ke),(O=D.props&&D.props.onVnodeBeforeUpdate)&&fi(O,A,D,_),Es(E,!0);const se=qf(E),Ee=E.subTree;E.subTree=se,v(Ee,se,f(Ee.el),B(Ee),E,k,j),D.el=se.el,V===null&&i0(E,se.el),Ie&&Dn(Ie,k),(O=D.props&&D.props.onVnodeUpdated)&&Dn(()=>fi(O,A,D,_),k)}else{let D;const{el:ke,props:Ie}=w,{bm:A,m:_,parent:V,root:O,type:se}=E,Ee=co(w);Es(E,!1),A&&ya(A),!Ee&&(D=Ie&&Ie.onVnodeBeforeMount)&&fi(D,V,w),Es(E,!0);{O.ce&&O.ce._hasShadowRoot()&&O.ce._injectChildStyle(se,E.parent?E.parent.type:void 0);const we=E.subTree=qf(E);v(null,we,I,z,E,k,j),w.el=we.el}if(_&&Dn(_,k),!Ee&&(D=Ie&&Ie.onVnodeMounted)){const we=w;Dn(()=>fi(D,V,we),k)}(w.shapeFlag&256||V&&co(V.vnode)&&V.vnode.shapeFlag&256)&&E.a&&Dn(E.a,k),E.isMounted=!0,w=I=z=null}};E.scope.on();const ve=E.effect=new cp(fe);E.scope.off();const ue=E.update=ve.run.bind(ve),Le=E.job=ve.runIfDirty.bind(ve);Le.i=E,Le.id=E.uid,ve.scheduler=()=>Ku(Le),Es(E,!0),ue()},G=(E,w,I)=>{w.component=E;const z=E.vnode.props;E.vnode=w,E.next=null,r0(E,w.props,z,I),c0(E,w.children,I),Wi(),Bf(E),Xi()},ie=(E,w,I,z,k,j,pe,fe,ve=!1)=>{const ue=E&&E.children,Le=E?E.shapeFlag:0,D=w.children,{patchFlag:ke,shapeFlag:Ie}=w;if(ke>0){if(ke&128){Te(ue,D,I,z,k,j,pe,fe,ve);return}else if(ke&256){ye(ue,D,I,z,k,j,pe,fe,ve);return}}Ie&8?(Le&16&&Z(ue,k,j),D!==ue&&u(I,D)):Le&16?Ie&16?Te(ue,D,I,z,k,j,pe,fe,ve):Z(ue,k,j,!0):(Le&8&&u(I,""),Ie&16&&x(D,I,z,k,j,pe,fe,ve))},ye=(E,w,I,z,k,j,pe,fe,ve)=>{E=E||dr,w=w||dr;const ue=E.length,Le=w.length,D=Math.min(ue,Le);let ke;for(ke=0;ke<D;ke++){const Ie=w[ke]=ve?Fi(w[ke]):gi(w[ke]);v(E[ke],Ie,I,null,k,j,pe,fe,ve)}ue>Le?Z(E,k,j,!0,!1,D):x(w,I,z,k,j,pe,fe,ve,D)},Te=(E,w,I,z,k,j,pe,fe,ve)=>{let ue=0;const Le=w.length;let D=E.length-1,ke=Le-1;for(;ue<=D&&ue<=ke;){const Ie=E[ue],A=w[ue]=ve?Fi(w[ue]):gi(w[ue]);if(Gr(Ie,A))v(Ie,A,I,null,k,j,pe,fe,ve);else break;ue++}for(;ue<=D&&ue<=ke;){const Ie=E[D],A=w[ke]=ve?Fi(w[ke]):gi(w[ke]);if(Gr(Ie,A))v(Ie,A,I,null,k,j,pe,fe,ve);else break;D--,ke--}if(ue>D){if(ue<=ke){const Ie=ke+1,A=Ie<Le?w[Ie].el:z;for(;ue<=ke;)v(null,w[ue]=ve?Fi(w[ue]):gi(w[ue]),I,A,k,j,pe,fe,ve),ue++}}else if(ue>ke)for(;ue<=D;)Se(E[ue],k,j,!0),ue++;else{const Ie=ue,A=ue,_=new Map;for(ue=A;ue<=ke;ue++){const Ae=w[ue]=ve?Fi(w[ue]):gi(w[ue]);Ae.key!=null&&_.set(Ae.key,ue)}let V,O=0;const se=ke-A+1;let Ee=!1,we=0;const ce=new Array(se);for(ue=0;ue<se;ue++)ce[ue]=0;for(ue=Ie;ue<=D;ue++){const Ae=E[ue];if(O>=se){Se(Ae,k,j,!0);continue}let Ve;if(Ae.key!=null)Ve=_.get(Ae.key);else for(V=A;V<=ke;V++)if(ce[V-A]===0&&Gr(Ae,w[V])){Ve=V;break}Ve===void 0?Se(Ae,k,j,!0):(ce[Ve-A]=ue+1,Ve>=we?we=Ve:Ee=!0,v(Ae,w[Ve],I,null,k,j,pe,fe,ve),O++)}const de=Ee?h0(ce):dr;for(V=de.length-1,ue=se-1;ue>=0;ue--){const Ae=A+ue,Ve=w[Ae],Ce=w[Ae+1],Pe=Ae+1<Le?Ce.el||jp(Ce):z;ce[ue]===0?v(null,Ve,I,Pe,k,j,pe,fe,ve):Ee&&(V<0||ue!==de[V]?Me(Ve,I,Pe,2):V--)}}},Me=(E,w,I,z,k=null)=>{const{el:j,type:pe,transition:fe,children:ve,shapeFlag:ue}=E;if(ue&6){Me(E.component.subTree,w,I,z);return}if(ue&128){E.suspense.move(w,I,z);return}if(ue&64){pe.move(E,w,I,J);return}if(pe===_t){i(j,w,I);for(let D=0;D<ve.length;D++)Me(ve[D],w,I,z);i(E.anchor,w,I);return}if(pe===Ma){S(E,w,I);return}if(z!==2&&ue&1&&fe)if(z===0)fe.persisted&&!j[Ll]?i(j,w,I):(fe.beforeEnter(j),i(j,w,I),Dn(()=>fe.enter(j),k));else{const{leave:D,delayLeave:ke,afterLeave:Ie}=fe,A=()=>{E.ctx.isUnmounted?s(j):i(j,w,I)},_=()=>{const V=j._isLeaving||!!j[Ll];j._isLeaving&&j[Ll](!0),fe.persisted&&!V?A():D(j,()=>{A(),Ie&&Ie()})};ke?ke(j,A,_):_()}else i(j,w,I)},Se=(E,w,I,z=!1,k=!1)=>{const{type:j,props:pe,ref:fe,children:ve,dynamicChildren:ue,shapeFlag:Le,patchFlag:D,dirs:ke,cacheIndex:Ie,memo:A}=E;if(D===-2&&(k=!1),fe!=null&&(Wi(),lo(fe,null,I,E,!0),Xi()),Ie!=null&&(w.renderCache[Ie]=void 0),Le&256){w.ctx.deactivate(E);return}const _=Le&1&&ke,V=!co(E);let O;if(V&&(O=pe&&pe.onVnodeBeforeUnmount)&&fi(O,w,E),Le&6)et(E.component,I,z);else{if(Le&128){E.suspense.unmount(I,z);return}_&&bs(E,null,w,"beforeUnmount"),Le&64?E.type.remove(E,w,I,J,z):ue&&!ue.hasOnce&&(j!==_t||D>0&&D&64)?Z(ue,w,I,!1,!0):(j===_t&&D&384||!k&&Le&16)&&Z(ve,w,I),z&&qe(E)}const se=A!=null&&Ie==null;(V&&(O=pe&&pe.onVnodeUnmounted)||_||se)&&Dn(()=>{O&&fi(O,w,E),_&&bs(E,null,w,"unmounted"),se&&(E.el=null)},I)},qe=E=>{const{type:w,el:I,anchor:z,transition:k}=E;if(w===_t){st(I,z);return}if(w===Ma){y(E);return}const j=()=>{s(I),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(E.shapeFlag&1&&k&&!k.persisted){const{leave:pe,delayLeave:fe}=k,ve=()=>pe(I,j);fe?fe(E.el,j,ve):ve()}else j()},st=(E,w)=>{let I;for(;E!==w;)I=d(E),s(E),E=I;s(w)},et=(E,w,I)=>{const{bum:z,scope:k,job:j,subTree:pe,um:fe,m:ve,a:ue}=E;Kf(ve),Kf(ue),z&&ya(z),k.stop(),j&&(j.flags|=8,Se(pe,E,w,I)),fe&&Dn(fe,w),Dn(()=>{E.isUnmounted=!0},w)},Z=(E,w,I,z=!1,k=!1,j=0)=>{for(let pe=j;pe<E.length;pe++)Se(E[pe],w,I,z,k)},B=E=>{if(E.shapeFlag&6)return B(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=d(E.anchor||E.el),I=w&&w[A_];return I?d(I):w};let K=!1;const W=(E,w,I)=>{let z;E==null?w._vnode&&(Se(w._vnode,null,null,!0),z=w._vnode.component):v(w._vnode||null,E,w,null,null,null,I),w._vnode=E,K||(K=!0,Bf(z),Rp(),K=!1)},J={p:v,um:Se,m:Me,r:qe,mt:re,mc:x,pc:ie,pbc:U,n:B,o:t};return{render:W,hydrate:void 0,createApp:Z_(W)}}function Nl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Es({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function d0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zp(t,e,n=!1){const i=t.children,s=e.children;if(nt(i)&&nt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Fi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Zp(o,a)),a.type===hl&&(a.patchFlag===-1&&(a=s[r]=Fi(a)),a.el=o.el),a.type===ms&&!a.el&&(a.el=o.el)}}function h0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Jp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jp(e)}function Kf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function jp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?jp(e.subTree):null}const Qp=t=>t.__isSuspense;function p0(t,e){e&&e.pendingBranch?nt(t)?e.effects.push(...t):e.effects.push(t):M_(t)}const _t=Symbol.for("v-fgt"),hl=Symbol.for("v-txt"),ms=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),Bs=[];let Hn=null;function _e(t=!1){Bs.push(Hn=t?null:[])}function em(){Bs.pop(),Hn=Bs[Bs.length-1]||null}let _o=1;function ka(t,e=!1){_o+=t,t<0&&Hn&&e&&(Hn.hasOnce=!0)}function tm(t){return t.dynamicChildren=_o>0?Hn||dr:null,em(),_o>0&&Hn&&Hn.push(t),t}function xe(t,e,n,i,s,r){return tm(C(t,e,n,i,s,r,!0))}function Qu(t,e,n,i,s){return tm(ln(t,e,n,i,s,!0))}function Va(t){return t?t.__v_isVNode===!0:!1}function Gr(t,e){return t.type===e.type&&t.key===e.key}const nm=({key:t})=>t??null,ba=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Wt(t)||xn(t)||lt(t)?{i:Vn,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,i=0,s=null,r=t===_t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nm(e),ref:e&&ba(e),scopeId:Pp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vn};return a?(Ha(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Wt(n)?8:16),_o>0&&!o&&Hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Hn.push(l),l}const ln=m0;function m0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===V_)&&(t=ms),Va(t)){const a=Mr(t,e,!0);return n&&Ha(a,n),_o>0&&!r&&Hn&&(a.shapeFlag&6?Hn[Hn.indexOf(t)]=a:Hn.push(a)),a.patchFlag=-2,a}if(w0(t)&&(t=t.__vccOpts),e){e=g0(e);let{class:a,style:l}=e;a&&!Wt(a)&&(e.class=Bn(a)),Rt(l)&&(Yu(l)&&!nt(l)&&(l=un({},l)),e.style=yr(l))}const o=Wt(t)?1:Qp(t)?128:w_(t)?64:Rt(t)?4:lt(t)?2:0;return C(t,e,n,i,s,o,r,!0)}function g0(t){return t?Yu(t)||Wp(t)?un({},t):t:null}function Mr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?_0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&nm(c),ref:e&&e.ref?n&&r?nt(r)?r.concat(ba(e)):[r,ba(e)]:ba(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mr(t.ssContent),ssFallback:t.ssFallback&&Mr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Zu(u,l.clone(u)),u}function Mt(t=" ",e=0){return ln(hl,null,t,e)}function ef(t,e){const n=ln(Ma,null,t);return n.staticCount=e,n}function wt(t="",e=!1){return e?(_e(),Qu(ms,null,t)):ln(ms,null,t)}function gi(t){return t==null||typeof t=="boolean"?ln(ms):nt(t)?ln(_t,null,t.slice()):Va(t)?Fi(t):ln(hl,null,String(t))}function Fi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mr(t)}function Ha(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(nt(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ha(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Wp(e)?e._ctx=Vn:s===3&&Vn&&(Vn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(lt(e)){if(i&65){Ha(t,{default:e});return}e={default:e,_ctx:Vn},n=32}else e=String(e),i&64?(n=16,e=[Mt(e)]):n=8;t.children=e,t.shapeFlag|=n}function _0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Bn([e.class,i.class]));else if(s==="style")e.style=yr([e.style,i.style]);else if(nl(s)){const r=e[s],o=i[s];o&&r!==o&&!(nt(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!il(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function fi(t,e,n,i=null){oi(t,e,7,[n,i])}const v0=zp();let x0=0;function y0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||v0,r={uid:x0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qp(i,s),emitsOptions:kp(i,s),emit:null,emitted:null,propsDefaults:Ut,inheritAttrs:i.inheritAttrs,ctx:Ut,data:Ut,props:Ut,attrs:Ut,slots:Ut,refs:Ut,setupState:Ut,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=j_.bind(null,r),t.ce&&t.ce(r),r}let _n=null;const S0=()=>_n||Vn;let Ga,Uc;{const t=al(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ga=e("__VUE_INSTANCE_SETTERS__",n=>_n=n),Uc=e("__VUE_SSR_SETTERS__",n=>vo=n)}const Po=t=>{const e=_n;return Ga(t),t.scope.on(),()=>{t.scope.off(),Ga(e)}},Zf=()=>{_n&&_n.scope.off(),Ga(null)};function im(t){return t.vnode.shapeFlag&4}let vo=!1;function M0(t,e=!1,n=!1){e&&Uc(e);const{props:i,children:s}=t.vnode,r=im(t);s0(t,i,r,e),l0(t,s,n||e);const o=r?b0(t,e):void 0;return e&&Uc(!1),o}function b0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,G_);const{setup:i}=n;if(i){Wi();const s=t.setupContext=i.length>1?T0(t):null,r=Po(t),o=Ro(i,t,0,[t.props,s]),a=np(o);if(Xi(),r(),(a||t.sp)&&!co(t)&&Np(t),a){if(o.then(Zf,Zf),e)return o.then(l=>{Jf(t,l)}).catch(l=>{cl(l,t,0)});t.asyncDep=o}else Jf(t,o)}else sm(t)}function Jf(t,e,n){lt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Rt(e)&&(t.setupState=Tp(e)),sm(t)}function sm(t,e,n){const i=t.type;t.render||(t.render=i.render||Mi);{const s=Po(t);Wi();try{W_(t)}finally{Xi(),s()}}}const E0={get(t,e){return gn(t,"get",""),t[e]}};function T0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,E0),slots:t.slots,emit:t.emit,expose:e}}function pl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Tp(d_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in uo)return uo[n](t)},has(e,n){return n in e||n in uo}})):t.proxy}function A0(t,e=!0){return lt(t)?t.displayName||t.name:t.name||e&&t.__name}function w0(t){return lt(t)&&"__vccOpts"in t}const ft=(t,e)=>__(t,e,vo);function rm(t,e,n){try{ka(-1);const i=arguments.length;return i===2?Rt(e)&&!nt(e)?Va(e)?ln(t,null,[e]):ln(t,e):ln(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Va(n)&&(n=[n]),ln(t,e,n))}finally{ka(1)}}const R0="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oc;const jf=typeof window<"u"&&window.trustedTypes;if(jf)try{Oc=jf.createPolicy("vue",{createHTML:t=>t})}catch{}const om=Oc?t=>Oc.createHTML(t):t=>t,C0="http://www.w3.org/2000/svg",P0="http://www.w3.org/1998/Math/MathML",Oi=typeof document<"u"?document:null,Qf=Oi&&Oi.createElement("template"),D0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Oi.createElementNS(C0,t):e==="mathml"?Oi.createElementNS(P0,t):n?Oi.createElement(t,{is:n}):Oi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Oi.createTextNode(t),createComment:t=>Oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Qf.innerHTML=om(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Qf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},L0=Symbol("_vtc");function I0(t,e,n){const i=t[L0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ed=Symbol("_vod"),N0=Symbol("_vsh"),U0=Symbol(""),O0=/(?:^|;)\s*display\s*:/;function F0(t,e,n){const i=t.style,s=Wt(n);let r=!1;if(n&&!s){if(e)if(Wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&no(i,a,"")}else for(const o in e)n[o]==null&&no(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?z0(t,o,!Wt(e)&&e?e[o]:void 0,a)||no(i,o,a):no(i,o,"")}}else if(s){if(e!==n){const o=i[U0];o&&(n+=";"+o),i.cssText=n,r=O0.test(n)}}else e&&t.removeAttribute("style");ed in t&&(t[ed]=r?i.display:"",t[N0]&&(i.display="none"))}const td=/\s*!important$/;function no(t,e,n){if(nt(n))n.forEach(i=>no(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=B0(t,e);td.test(n)?t.setProperty(xs(i),n.replace(td,""),"important"):t[i]=n}}const nd=["Webkit","Moz","ms"],Ul={};function B0(t,e){const n=Ul[e];if(n)return n;let i=An(e);if(i!=="filter"&&i in t)return Ul[e]=i;i=rl(i);for(let s=0;s<nd.length;s++){const r=nd[s]+i;if(r in t)return Ul[e]=r}return e}function z0(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Wt(i)&&n===i}const id="http://www.w3.org/1999/xlink";function sd(t,e,n,i,s,r=Xg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(id,e.slice(6,e.length)):t.setAttributeNS(id,e,n):n==null||r&&!op(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ai(n)?String(n):n)}function rd(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?om(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=op(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function fs(t,e,n,i){t.addEventListener(e,n,i)}function k0(t,e,n,i){t.removeEventListener(e,n,i)}const od=Symbol("_vei");function V0(t,e,n,i,s=null){const r=t[od]||(t[od]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=W0(e);if(i){const c=r[e]=$0(i,s);fs(t,a,c,l)}else o&&(k0(t,a,o,l),r[e]=void 0)}}const H0=/(Once|Passive|Capture)$/,G0=/^on:?(?:Once|Passive|Capture)$/;function W0(t){let e,n;for(;(n=t.match(H0))&&!G0.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):xs(t.slice(2)),e]}let Ol=0;const X0=Promise.resolve(),q0=()=>Ol||(X0.then(()=>Ol=0),Ol=Date.now());function $0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(nt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&oi(c,e,5,a)}}else oi(s,e,5,[i])};return n.value=t,n.attached=q0(),n}const ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Y0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?I0(t,i,o):e==="style"?F0(t,n,i):nl(e)?il(e)||V0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):K0(t,e,i,o))?(rd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sd(t,e,i,o,r,e!=="value")):t._isVueCE&&(Z0(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Wt(i)))?rd(t,An(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),sd(t,e,i,o))};function K0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&ad(e)&&lt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ad(e)&&Wt(n)?!1:e in t}function Z0(t,e){const n=t._def.props;if(!n)return!1;const i=An(e);return Array.isArray(n)?n.some(s=>An(s)===i):Object.keys(n).some(s=>An(s)===i)}const br=t=>{const e=t.props["onUpdate:modelValue"]||!1;return nt(e)?n=>ya(e,n):e};function J0(t){t.target.composing=!0}function ld(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vi=Symbol("_assign");function cd(t,e,n){return e&&(t=t.trim()),n&&(t=ol(t)),t}const ti={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Vi]=br(s);const r=i||s.props&&s.props.type==="number";fs(t,e?"change":"input",o=>{o.target.composing||t[Vi](cd(t.value,n,r))}),(n||r)&&fs(t,"change",()=>{t.value=cd(t.value,n,r)}),e||(fs(t,"compositionstart",J0),fs(t,"compositionend",ld),fs(t,"change",ld))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Vi]=br(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?ol(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},qo={deep:!0,created(t,e,n){t[Vi]=br(n),fs(t,"change",()=>{const i=t._modelValue,s=xo(t),r=t.checked,o=t[Vi];if(nt(i)){const a=Vu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Nr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(am(t,r))})},mounted:ud,beforeUpdate(t,e,n){t[Vi]=br(n),ud(t,e,n)}};function ud(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(nt(e))s=Vu(e,i.props.value)>-1;else if(Nr(e))s=e.has(i.props.value);else{if(e===n)return;s=Ur(e,am(t,!0))}t.checked!==s&&(t.checked=s)}const ur={deep:!0,created(t,{value:e,modifiers:{number:n}},i){t._modelValue=e,fs(t,"change",()=>{const s=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?ol(xo(r)):xo(r));t[Vi](t.multiple?Nr(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,Co(()=>{t._assigning=!1})}),t[Vi]=br(i)},mounted(t,{value:e}){fd(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Vi]=br(n)},updated(t,{value:e}){t._assigning||fd(t,e)}};function fd(t,e){const n=t.multiple,i=nt(e);if(!(n&&!i&&!Nr(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=xo(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Vu(e,a)>-1}else o.selected=e.has(a);else if(Ur(xo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function xo(t){return"_value"in t?t._value:t.value}function am(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const j0=["ctrl","shift","alt","meta"],Q0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>j0.some(n=>t[`${n}Key`]&&!e.includes(n))},ev=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Q0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},tv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dd=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=xs(s.key);if(e.some(o=>o===r||tv[o]===r))return t(s)})},nv=un({patchProp:Y0},D0);let hd;function iv(){return hd||(hd=u0(nv))}const sv=(...t)=>{const e=iv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ov(i);if(!s)return;const r=e._component;!lt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ov(t){return Wt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const cr=typeof document<"u";function lm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function av(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&lm(t.default)}const bt=Object.assign;function Fl(t,e){const n={};for(const i in e){const s=e[i];n[i]=ai(s)?s.map(t):t(s)}return n}const fo=()=>{},ai=Array.isArray;function pd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const cm=/#/g,lv=/&/g,cv=/\//g,uv=/=/g,fv=/\?/g,um=/\+/g,dv=/%5B/g,hv=/%5D/g,fm=/%5E/g,pv=/%60/g,dm=/%7B/g,mv=/%7C/g,hm=/%7D/g,gv=/%20/g;function tf(t){return t==null?"":encodeURI(""+t).replace(mv,"|").replace(dv,"[").replace(hv,"]")}function _v(t){return tf(t).replace(dm,"{").replace(hm,"}").replace(fm,"^")}function Fc(t){return tf(t).replace(um,"%2B").replace(gv,"+").replace(cm,"%23").replace(lv,"%26").replace(pv,"`").replace(dm,"{").replace(hm,"}").replace(fm,"^")}function vv(t){return Fc(t).replace(uv,"%3D")}function xv(t){return tf(t).replace(cm,"%23").replace(fv,"%3F")}function yv(t){return xv(t).replace(cv,"%2F")}function yo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Sv=/\/$/,Mv=t=>t.replace(Sv,"");function Bl(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=t(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Av(i??e,n),{fullPath:i+r+o,path:i,query:s,hash:yo(o)}}function bv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function md(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ev(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Er(e.matched[i],n.matched[s])&&pm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Er(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!Tv(t[n],e[n]))return!1;return!0}function Tv(t,e){return ai(t)?gd(t,e):ai(e)?gd(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function gd(t,e){return ai(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Av(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ts={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Bc=function(t){return t.pop="pop",t.push="push",t}({}),zl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function wv(t){if(!t)if(cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mv(t)}const Rv=/^[^#]+#/;function Cv(t,e){return t.replace(Rv,"#")+e}function Pv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ml=()=>({left:window.scrollX,top:window.scrollY});function Dv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Pv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _d(t,e){return(history.state?history.state.position-e:-1)+t}const zc=new Map;function Lv(t,e){zc.set(t,e)}function Iv(t){const e=zc.get(t);return zc.delete(t),e}function Nv(t){return typeof t=="string"||t&&typeof t=="object"}function mm(t){return typeof t=="string"||typeof t=="symbol"}let Ht=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const gm=Symbol("");Ht.MATCHER_NOT_FOUND+"",Ht.NAVIGATION_GUARD_REDIRECT+"",Ht.NAVIGATION_ABORTED+"",Ht.NAVIGATION_CANCELLED+"",Ht.NAVIGATION_DUPLICATED+"";function Tr(t,e){return bt(new Error,{type:t,[gm]:!0},e)}function Pi(t,e){return t instanceof Error&&gm in t&&(e==null||!!(t.type&e))}const Uv=["params","query","hash"];function Ov(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Uv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Fv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(um," "),r=s.indexOf("="),o=yo(r<0?s:s.slice(0,r)),a=r<0?null:yo(s.slice(r+1));if(o in e){let l=e[o];ai(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function vd(t){let e="";for(let n in t){const i=t[n];if(n=vv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ai(i)?i.map(s=>s&&Fc(s)):[i&&Fc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Bv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ai(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const zv=Symbol(""),xd=Symbol(""),gl=Symbol(""),nf=Symbol(""),kc=Symbol("");function Wr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cs(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Tr(Ht.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):Nv(d)?l(Tr(Ht.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function kl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(lm(l)){const c=(l.__vccOpts||l)[e];c&&r.push(cs(c,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=av(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&cs(d,n,i,o,a,s)()}))}}return r}function kv(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Er(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Er(c,l))||s.push(l))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Vv=()=>location.protocol+"//"+location.host;function _m(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let o=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),md(a,"")}return md(n,t)+i+s}function Hv(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const h=_m(t,location),g=n.value,v=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(h);s.forEach(p=>{p(n.value,g,{delta:m,type:Bc.pop,direction:m?m>0?zl.forward:zl.back:zl.unknown})})};function l(){o=n.value}function c(d){s.push(d);const h=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(bt({},d.state,{scroll:ml()}),"")}}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function yd(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?ml():null}}function Gv(t){const{history:e,location:n}=window,i={value:_m(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Vv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){r(l,bt({},e.state,yd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=bt({},s.value,e.state,{forward:l,scroll:ml()});r(u.current,u,!0),r(l,bt({},yd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Wv(t){t=wv(t);const e=Gv(t),n=Hv(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=bt({location:"",base:t,go:i,createHref:Cv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Ls=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Qt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Qt||{});const Xv={type:Ls.Static,value:""},qv=/[a-zA-Z0-9_]/;function $v(t){if(!t)return[[]];if(t==="/")return[[Xv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=Qt.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===Qt.Static?r.push({type:Ls.Static,value:c}):n===Qt.Param||n===Qt.ParamRegExp||n===Qt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ls.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Qt.ParamRegExp){i=n,n=Qt.EscapeNext;continue}switch(n){case Qt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=Qt.Param):d();break;case Qt.EscapeNext:d(),n=i;break;case Qt.Param:l==="("?n=Qt.ParamRegExp:qv.test(l)?d():(f(),n=Qt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Qt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Qt.ParamRegExpEnd:u+=l;break;case Qt.ParamRegExpEnd:f(),n=Qt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Qt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const Sd="[^/]+?",Yv={sensitive:!1,strict:!1,start:!0,end:!0};var bn=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(bn||{});const Kv=/[.+*?^${}()[\]/\\]/g;function Zv(t,e){const n=bt({},Yv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[bn.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=bn.Segment+(n.sensitive?bn.BonusCaseSensitive:0);if(d.type===Ls.Static)f||(s+="/"),s+=d.value.replace(Kv,"\\$&"),h+=bn.Static;else if(d.type===Ls.Param){const{value:g,repeatable:v,optional:m,regexp:p}=d;r.push({name:g,repeatable:v,optional:m});const M=p||Sd;if(M!==Sd){h+=bn.BonusCustomRegExp;try{`${M}`}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+y.message)}}let S=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),s+=S,h+=bn.Dynamic,m&&(h+=bn.BonusOptional),v&&(h+=bn.BonusRepeatable),M===".*"&&(h+=bn.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=bn.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=r[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===Ls.Static)u+=h.value;else if(h.type===Ls.Param){const{value:g,repeatable:v,optional:m}=h,p=g in c?c[g]:"";if(ai(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=ai(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Jv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===bn.Static+bn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===bn.Static+bn.Segment?1:-1:0}function vm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Jv(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Md(i))return 1;if(Md(s))return-1}return s.length-i.length}function Md(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jv={strict:!1,end:!0,sensitive:!1};function Qv(t,e,n){const i=Zv($v(t.path),n),s=bt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ex(t,e){const n=[],i=new Map;e=pd(jv,e);function s(f){return i.get(f)}function r(f,d,h){const g=!h,v=Ed(f);v.aliasOf=h&&h.record;const m=pd(e,f),p=[v];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of y)p.push(Ed(bt({},v,{components:h?h.record.components:v.components,path:R,aliasOf:h?h.record:v})))}let M,S;for(const y of p){const{path:R}=y;if(d&&R[0]!=="/"){const T=d.record.path,L=T[T.length-1]==="/"?"":"/";y.path=d.record.path+(R&&L+R)}if(M=Qv(y,d,m),h?h.alias.push(M):(S=S||M,S!==M&&S.alias.push(M),g&&f.name&&!Td(M)&&o(f.name)),xm(M)&&l(M),v.children){const T=v.children;for(let L=0;L<T.length;L++)r(T[L],M,h&&h.children[L])}h=h||M}return S?()=>{o(S)}:fo}function o(f){if(mm(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=ix(f,n);n.splice(d,0,f),f.record.name&&!Td(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},v,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Tr(Ht.MATCHER_NOT_FOUND,{location:f});m=h.record.name,g=bt(bd(d.params,h.keys.filter(S=>!S.optional).concat(h.parent?h.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&bd(f.params,h.keys.map(S=>S.name))),v=h.stringify(g)}else if(f.path!=null)v=f.path,h=n.find(S=>S.re.test(v)),h&&(g=h.parse(v),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(S=>S.re.test(d.path)),!h)throw Tr(Ht.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,g=bt({},d.params,f.params),v=h.stringify(g)}const p=[];let M=h;for(;M;)p.unshift(M.record),M=M.parent;return{name:m,path:v,params:g,matched:p,meta:nx(p)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function bd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Ed(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:tx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function tx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Td(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nx(t){return t.reduce((e,n)=>bt(e,n.meta),{})}function ix(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;vm(t,e[r])<0?i=r:n=r+1}const s=sx(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function sx(t){let e=t;for(;e=e.parent;)if(xm(e)&&vm(t,e)===0)return e}function xm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ad(t){const e=si(gl),n=si(nf),i=ft(()=>{const l=Ln(t.to);return e.resolve(l)}),s=ft(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Er.bind(null,u));if(d>-1)return d;const h=wd(l[c-2]);return c>1&&wd(u)===h&&f[f.length-1].path!==h?f.findIndex(Er.bind(null,l[c-2])):d}),r=ft(()=>s.value>-1&&lx(n.params,i.value.params)),o=ft(()=>s.value>-1&&s.value===n.matched.length-1&&pm(n.params,i.value.params));function a(l={}){if(ax(l)){const c=e[Ln(t.replace)?"replace":"push"](Ln(t.to)).catch(fo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ft(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function rx(t){return t.length===1?t[0]:t}const ox=Ip({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ad,setup(t,{slots:e}){const n=ys(Ad(t)),{options:i}=si(gl),s=ft(()=>({[Rd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Rd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&rx(e.default(n));return t.custom?r:rm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Vc=ox;function ax(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lx(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ai(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function wd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rd=(t,e,n)=>t??e??n,cx=Ip({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=si(kc),s=ft(()=>t.route||i.value),r=si(xd,0),o=ft(()=>{let c=Ln(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ft(()=>s.value.matched[o.value]);Sa(xd,ft(()=>o.value+1)),Sa(zv,a),Sa(kc,s);const l=Ge();return Kn(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Er(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Cd(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=rm(d,bt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Cd(n.default,{Component:m,route:c})||m}}});function Cd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ym=cx;function ux(t){const e=ex(t.routes,t),n=t.parseQuery||Fv,i=t.stringifyQuery||vd,s=t.history,r=Wr(),o=Wr(),a=Wr(),l=h_(ts);let c=ts;cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fl.bind(null,B=>""+B),f=Fl.bind(null,yv),d=Fl.bind(null,yo);function h(B,K){let W,J;return mm(B)?(W=e.getRecordMatcher(B),J=K):J=B,e.addRoute(J,W)}function g(B){const K=e.getRecordMatcher(B);K&&e.removeRoute(K)}function v(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,K){if(K=bt({},K||l.value),typeof B=="string"){const I=Bl(n,B,K.path),z=e.resolve({path:I.path},K),k=s.createHref(I.fullPath);return bt(I,z,{params:d(z.params),hash:yo(I.hash),redirectedFrom:void 0,href:k})}let W;if(B.path!=null)W=bt({},B,{path:Bl(n,B.path,K.path).path});else{const I=bt({},B.params);for(const z in I)I[z]==null&&delete I[z];W=bt({},B,{params:f(I)}),K.params=f(K.params)}const J=e.resolve(W,K),le=B.hash||"";J.params=u(d(J.params));const E=bv(i,bt({},B,{hash:_v(le),path:J.path})),w=s.createHref(E);return bt({fullPath:E,hash:le,query:i===vd?Bv(B.query):B.query||{}},J,{redirectedFrom:void 0,href:w})}function M(B){return typeof B=="string"?Bl(n,B,l.value.path):bt({},B)}function S(B,K){if(c!==B)return Tr(Ht.NAVIGATION_CANCELLED,{from:K,to:B})}function y(B){return L(B)}function R(B){return y(bt(M(B),{replace:!0}))}function T(B,K){const W=B.matched[B.matched.length-1];if(W&&W.redirect){const{redirect:J}=W;let le=typeof J=="function"?J(B,K):J;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=M(le):{path:le},le.params={}),bt({query:B.query,hash:B.hash,params:le.path!=null?{}:B.params},le)}}function L(B,K){const W=c=p(B),J=l.value,le=B.state,E=B.force,w=B.replace===!0,I=T(W,J);if(I)return L(bt(M(I),{state:typeof I=="object"?bt({},le,I.state):le,force:E,replace:w}),K||W);const z=W;z.redirectedFrom=K;let k;return!E&&Ev(i,J,W)&&(k=Tr(Ht.NAVIGATION_DUPLICATED,{to:z,from:J}),Me(J,J,!0,!1)),(k?Promise.resolve(k):U(z,J)).catch(j=>Pi(j)?Pi(j,Ht.NAVIGATION_GUARD_REDIRECT)?j:Te(j):ie(j,z,J)).then(j=>{if(j){if(Pi(j,Ht.NAVIGATION_GUARD_REDIRECT))return L(bt({replace:w},M(j.to),{state:typeof j.to=="object"?bt({},le,j.to.state):le,force:E}),K||z)}else j=F(z,J,!0,w,le);return N(z,J,j),j})}function x(B,K){const W=S(B,K);return W?Promise.reject(W):Promise.resolve()}function P(B){const K=st.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(B):B()}function U(B,K){let W;const[J,le,E]=kv(B,K);W=kl(J.reverse(),"beforeRouteLeave",B,K);for(const I of J)I.leaveGuards.forEach(z=>{W.push(cs(z,B,K))});const w=x.bind(null,B,K);return W.push(w),Z(W).then(()=>{W=[];for(const I of r.list())W.push(cs(I,B,K));return W.push(w),Z(W)}).then(()=>{W=kl(le,"beforeRouteUpdate",B,K);for(const I of le)I.updateGuards.forEach(z=>{W.push(cs(z,B,K))});return W.push(w),Z(W)}).then(()=>{W=[];for(const I of E)if(I.beforeEnter)if(ai(I.beforeEnter))for(const z of I.beforeEnter)W.push(cs(z,B,K));else W.push(cs(I.beforeEnter,B,K));return W.push(w),Z(W)}).then(()=>(B.matched.forEach(I=>I.enterCallbacks={}),W=kl(E,"beforeRouteEnter",B,K,P),W.push(w),Z(W))).then(()=>{W=[];for(const I of o.list())W.push(cs(I,B,K));return W.push(w),Z(W)}).catch(I=>Pi(I,Ht.NAVIGATION_CANCELLED)?I:Promise.reject(I))}function N(B,K,W){a.list().forEach(J=>P(()=>J(B,K,W)))}function F(B,K,W,J,le){const E=S(B,K);if(E)return E;const w=K===ts,I=cr?history.state:{};W&&(J||w?s.replace(B.fullPath,bt({scroll:w&&I&&I.scroll},le)):s.push(B.fullPath,le)),l.value=B,Me(B,K,W,w),Te()}let ne;function re(){ne||(ne=s.listen((B,K,W)=>{if(!et.listening)return;const J=p(B),le=T(J,et.currentRoute.value);if(le){L(bt(le,{replace:!0,force:!0}),J).catch(fo);return}c=J;const E=l.value;cr&&Lv(_d(E.fullPath,W.delta),ml()),U(J,E).catch(w=>Pi(w,Ht.NAVIGATION_ABORTED|Ht.NAVIGATION_CANCELLED)?w:Pi(w,Ht.NAVIGATION_GUARD_REDIRECT)?(L(bt(M(w.to),{force:!0}),J).then(I=>{Pi(I,Ht.NAVIGATION_ABORTED|Ht.NAVIGATION_DUPLICATED)&&!W.delta&&W.type===Bc.pop&&s.go(-1,!1)}).catch(fo),Promise.reject()):(W.delta&&s.go(-W.delta,!1),ie(w,J,E))).then(w=>{w=w||F(J,E,!1),w&&(W.delta&&!Pi(w,Ht.NAVIGATION_CANCELLED)?s.go(-W.delta,!1):W.type===Bc.pop&&Pi(w,Ht.NAVIGATION_ABORTED|Ht.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),N(J,E,w)}).catch(fo)}))}let $=Wr(),Q=Wr(),G;function ie(B,K,W){Te(B);const J=Q.list();return J.length?J.forEach(le=>le(B,K,W)):console.error(B),Promise.reject(B)}function ye(){return G&&l.value!==ts?Promise.resolve():new Promise((B,K)=>{$.add([B,K])})}function Te(B){return G||(G=!B,re(),$.list().forEach(([K,W])=>B?W(B):K()),$.reset()),B}function Me(B,K,W,J){const{scrollBehavior:le}=t;if(!cr||!le)return Promise.resolve();const E=!W&&Iv(_d(B.fullPath,0))||(J||!W)&&history.state&&history.state.scroll||null;return Co().then(()=>le(B,K,E)).then(w=>w&&Dv(w)).catch(w=>ie(w,B,K))}const Se=B=>s.go(B);let qe;const st=new Set,et={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:t,push:y,replace:R,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:ye,install(B){B.component("RouterLink",Vc),B.component("RouterView",ym),B.config.globalProperties.$router=et,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Ln(l)}),cr&&!qe&&l.value===ts&&(qe=!0,y(s.location).catch(J=>{}));const K={};for(const J in ts)Object.defineProperty(K,J,{get:()=>l.value[J],enumerable:!0});B.provide(gl,et),B.provide(nf,bp(K)),B.provide(kc,l);const W=B.unmount;st.add(B),B.unmount=function(){st.delete(B),st.size<1&&(c=ts,ne&&ne(),ne=null,l.value=ts,qe=!1,G=!1),W()}}};function Z(B){return B.reduce((K,W)=>K.then(()=>P(W)),Promise.resolve())}return et}function sf(){return si(gl)}function Sm(t){return si(nf)}const rf="vision-portal-session",$o=(()=>{try{return JSON.parse(localStorage.getItem(rf)||"null")}catch{return null}})(),Ar=Ge($o&&$o.token&&$o.user?$o:null),Wa=ft(()=>{var t;return!!((t=Ar.value)!=null&&t.token)}),ho=ft(()=>{var t;return((t=Ar.value)==null?void 0:t.user)||null}),Mm=t=>{Ar.value=t,localStorage.setItem(rf,JSON.stringify(t))},fx=t=>{Ar.value&&Mm({...Ar.value,user:t})},dx=()=>{Ar.value=null,localStorage.removeItem(rf)},hx={class:"sidebar"},px={class:"brand"},mx={key:0,class:"brand-account-actions"},gx={class:"account-hover-card"},_x={key:1,class:"brand-account-actions"},vx={class:"nav-group-title"},xx={class:"main-panel"},yx={class:"topbar"},Sx={class:"topbar-actions"},Mx={__name:"App",setup(t){const e=Sm(),n=sf(),i=Ge(localStorage.getItem("vision-portal-theme")==="light"),s=[{title:"平台總覽",requiresAuth:!0,items:[{label:"首頁",to:"/",icon:"◉"}]},{title:"系統介紹",items:[{label:"操作指引",to:"/guide",icon:"◌"},{label:"定位技術",to:"/technology",icon:"◌"}]},{title:"歷史資料",requiresAuth:!0,items:[{label:"物件資料",to:"/history/object",icon:"◌"},{label:"施工任務",to:"/history/tasks",icon:"◌"},{label:"操作紀錄",to:"/history/operations",icon:"◌"}]},{title:"媒體資料",requiresAuth:!0,items:[{label:"影像串流",to:"/media/stream",icon:"◌"},{label:"語音提示",to:"/media/voice",icon:"◌"}]},{title:"系統設定",requiresAuth:!0,items:[{label:"相機外參設定",to:"/settings/camera-extrinsics"}]}],r=ft(()=>s.filter(c=>!c.requiresAuth||Wa.value)),o=ft(()=>{const c=s.flatMap(u=>u.items).find(u=>u.to===e.path);return(c==null?void 0:c.label)||"首頁"}),a=(c="login")=>n.push({path:"/account/login",query:{mode:c}}),l=()=>{i.value=!i.value,localStorage.setItem("vision-portal-theme",i.value?"light":"dark")};return(c,u)=>{var f,d;return _e(),xe("div",{class:Bn(["app-shell",{"theme-light":i.value}])},[C("aside",hx,[C("div",px,[u[2]||(u[2]=C("div",{class:"brand-mark"},"V",-1)),u[3]||(u[3]=C("div",{class:"brand-content"},[C("p",{class:"brand-eyebrow"},"端點定位平台"),C("div",{class:"brand-title-row"},[C("h2",null,"Vision Portal")])],-1)),Ln(Wa)?(_e(),xe("div",mx,[ln(Ln(Vc),{class:"user-avatar",to:"/account/profile"},{default:Fa(()=>{var h,g;return[Mt(ge((g=(h=Ln(ho))==null?void 0:h.name)==null?void 0:g.charAt(0).toUpperCase()),1)]}),_:1}),C("div",gx,[C("strong",null,ge((f=Ln(ho))==null?void 0:f.name),1),C("span",null,ge((d=Ln(ho))==null?void 0:d.email),1),u[1]||(u[1]=C("small",null,"點擊頭貼查看帳戶資料",-1))])])):(_e(),xe("div",_x,[C("button",{type:"button",class:"brand-login",onClick:u[0]||(u[0]=h=>a("login"))},"登入")]))]),(_e(!0),xe(_t,null,Tn(r.value,h=>(_e(),xe("nav",{class:"nav-section",key:h.title},[C("p",vx,ge(h.title),1),(_e(!0),xe(_t,null,Tn(h.items,g=>(_e(),Qu(Ln(Vc),{key:g.to,class:Bn(["nav-link",{active:Ln(e).path===g.to}]),to:g.to,"exact-active-class":"active"},{default:Fa(()=>[u[4]||(u[4]=C("span",{class:"icon","aria-hidden":"true"},null,-1)),C("span",null,ge(g.label),1)]),_:2},1032,["class","to"]))),128))]))),128))]),C("main",xx,[C("header",yx,[C("h1",null,ge(o.value),1),C("div",Sx,[C("button",{type:"button",class:"theme-toggle",onClick:l},ge(i.value?"◐ 夜間":"☀ 白天"),1),u[5]||(u[5]=C("div",{class:"topbar-badge"},"已連線",-1))])]),ln(Ln(ym))])],2)}}};function bm(t,e){return function(){return t.apply(e,arguments)}}const{toString:bx}=Object.prototype,{getPrototypeOf:wr}=Object,{iterator:Do,toStringTag:Em}=Symbol,Xa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),So=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),Xa(n,e))return!0;n=wr(n)}return!1},Ex=(t,e)=>t!=null&&So(t,e)?t[e]:void 0,of=(t=>e=>{const n=bx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),li=t=>(t=t.toLowerCase(),e=>of(e)===t),_l=t=>e=>typeof e===t,{isArray:ks}=Array,Rr=_l("undefined");function Or(t){return t!==null&&!Rr(t)&&t.constructor!==null&&!Rr(t.constructor)&&In(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Tm=li("ArrayBuffer");function Tx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Tm(t.buffer),e}const Ax=_l("string"),In=_l("function"),Am=_l("number"),Fr=t=>t!==null&&typeof t=="object",wx=t=>t===!0||t===!1,Ea=t=>{if(!Fr(t))return!1;const e=wr(t);return(e===null||e===Object.prototype||wr(e)===null)&&!So(t,Em)&&!So(t,Do)},Rx=t=>{if(!Fr(t)||Or(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Cx=li("Date"),Px=li("File"),Dx=t=>!!(t&&typeof t.uri<"u"),Lx=t=>t&&typeof t.getParts<"u",Ix=li("Blob"),Nx=li("FileList"),Ux=t=>Fr(t)&&In(t.pipe);function Ox(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Pd=Ox(),Dd=typeof Pd.FormData<"u"?Pd.FormData:void 0,Fx=t=>{if(!t)return!1;if(Dd&&t instanceof Dd)return!0;const e=wr(t);if(!e||e===Object.prototype||!In(t.append))return!1;const n=of(t);return n==="formdata"||n==="object"&&In(t.toString)&&t.toString()==="[object FormData]"},Bx=li("URLSearchParams"),[zx,kx,Vx,Hx]=["ReadableStream","Request","Response","Headers"].map(li),Gx=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Lo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),ks(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Or(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function wm(t,e){if(Or(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Rm=t=>!Rr(t)&&t!==Is;function Hc(...t){const{caseless:e,skipUndefined:n}=Rm(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&typeof o=="string"&&wm(i,o)||o,l=Xa(i,a)?i[a]:void 0;Ea(l)&&Ea(r)?i[a]=Hc(l,r):Ea(r)?i[a]=Hc({},r):ks(r)?i[a]=r.slice():(!n||!Rr(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++){const a=t[r];if(!a||Or(a)||(Lo(a,s),typeof a!="object"||ks(a)))continue;const l=Object.getOwnPropertySymbols(a);for(let c=0;c<l.length;c++){const u=l[c];ty.call(a,u)&&s(a[u],u)}}return i}const Wx=(t,e,n,{allOwnKeys:i}={})=>(Lo(e,(s,r)=>{n&&In(s)?Object.defineProperty(t,r,{__proto__:null,value:bm(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),Xx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),qx=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},$x=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&wr(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Yx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Kx=t=>{if(!t)return null;if(ks(t))return t;let e=t.length;if(!Am(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Zx=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&wr(Uint8Array)),Jx=(t,e)=>{const i=(t&&t[Do]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},jx=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Qx=li("HTMLFormElement"),ey=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),{propertyIsEnumerable:ty}=Object.prototype,ny=li("RegExp"),Cm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Lo(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},iy=t=>{Cm(t,(e,n)=>{if(In(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(In(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},sy=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return ks(t)?i(t):i(String(t).split(e)),n},ry=()=>{},oy=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function ay(t){return!!(t&&In(t.append)&&t[Em]==="FormData"&&t[Do])}const ly=t=>{const e=new WeakSet,n=i=>{if(Fr(i)){if(e.has(i))return;if(Or(i))return i;if(!("toJSON"in i)){e.add(i);const s=ks(i)?[]:{};return Lo(i,(r,o)=>{const a=n(r);!Rr(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},cy=li("AsyncFunction"),uy=t=>t&&(Fr(t)||In(t))&&In(t.then)&&In(t.catch),Pm=((t,e)=>t?setImmediate:e?((n,i)=>(Is.addEventListener("message",({source:s,data:r})=>{s===Is&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Is.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",In(Is.postMessage)),fy=typeof queueMicrotask<"u"?queueMicrotask.bind(Is):typeof process<"u"&&process.nextTick||Pm,Dm=t=>t!=null&&In(t[Do]),dy=t=>t!=null&&So(t,Do)&&Dm(t),X={isArray:ks,isArrayBuffer:Tm,isBuffer:Or,isFormData:Fx,isArrayBufferView:Tx,isString:Ax,isNumber:Am,isBoolean:wx,isObject:Fr,isPlainObject:Ea,isEmptyObject:Rx,isReadableStream:zx,isRequest:kx,isResponse:Vx,isHeaders:Hx,isUndefined:Rr,isDate:Cx,isFile:Px,isReactNativeBlob:Dx,isReactNative:Lx,isBlob:Ix,isRegExp:ny,isFunction:In,isStream:Ux,isURLSearchParams:Bx,isTypedArray:Zx,isFileList:Nx,forEach:Lo,merge:Hc,extend:Wx,trim:Gx,stripBOM:Xx,inherits:qx,toFlatObject:$x,kindOf:of,kindOfTest:li,endsWith:Yx,toArray:Kx,forEachEntry:Jx,matchAll:jx,isHTMLForm:Qx,hasOwnProperty:Xa,hasOwnProp:Xa,hasOwnInPrototypeChain:So,getSafeProp:Ex,reduceDescriptors:Cm,freezeMethods:iy,toObjectSet:sy,toCamelCase:ey,noop:ry,toFiniteNumber:oy,findKey:wm,global:Is,isContextDefined:Rm,isSpecCompliantForm:ay,toJSONObject:ly,isAsyncFn:cy,isThenable:uy,setImmediate:Pm,asap:fy,isIterable:Dm,isSafeIterable:dy},hy=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),py=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&hy[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function my(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const gy=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),_y=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function af(t,e){return X.isArray(t)?t.map(n=>af(n,e)):my(String(t).replace(e,""))}const vy=t=>af(t,gy),xy=t=>af(t,_y);function Lm(t){const e=Object.create(null);return X.forEach(t.toJSON(),(n,i)=>{e[i]=xy(n)}),e}const Ld=Symbol("internals");function Xr(t){return t&&String(t).trim().toLowerCase()}function Ta(t){return t===!1||t==null?t:X.isArray(t)?t.map(Ta):vy(String(t))}function yy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Sy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Vl(t,e,n,i,s){if(X.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!X.isString(e)){if(X.isString(i))return e.indexOf(i)!==-1;if(X.isRegExp(i))return i.test(e)}}function My(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function by(t,e){const n=X.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let yn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=Xr(l);if(!u)return;const f=X.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=Ta(a))}const o=(a,l)=>X.forEach(a,(c,u)=>r(c,u,l));if(X.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(X.isString(e)&&(e=e.trim())&&!Sy(e))o(py(e),n);else if(X.isObject(e)&&X.isSafeIterable(e)){let a=Object.create(null),l,c;for(const u of e){if(!X.isArray(u))throw new TypeError("Object iterator must return a key-value pair");c=u[0],X.hasOwnProp(a,c)?(l=a[c],a[c]=X.isArray(l)?[...l,u[1]]:[l,u[1]]):a[c]=u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Xr(e),e){const i=X.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return yy(s);if(X.isFunction(n))return n.call(this,s,i);if(X.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Xr(e),e){const i=X.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Vl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Xr(o),o){const a=X.findKey(i,o);a&&(!n||Vl(i,i[a],a,n))&&(delete i[a],s=!0)}}return X.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||Vl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return X.forEach(this,(s,r)=>{const o=X.findKey(i,r);if(o){n[o]=Ta(s),delete n[r];return}const a=e?My(r):String(r).trim();a!==r&&delete n[r],n[a]=Ta(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return X.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&X.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Ld]=this[Ld]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Xr(o);i[a]||(by(s,o),i[a]=!0)}return X.isArray(e)?e.forEach(r):r(e),this}};yn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);X.reduceDescriptors(yn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});X.freezeMethods(yn);const Ey="[REDACTED ****]";function Ty(t){if(X.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(X.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function Ay(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||X.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof yn&&(r=r.toJSON()),i.push(r);let o;if(X.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);X.isUndefined(c)||(o[l]=c)});else{if(!X.isPlainObject(r)&&Ty(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?Ey:s(l);X.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let Be=class Im extends Error{static from(e,n,i,s,r,o){const a=new Im(e.message,n||e.code,i,s,r);return Object.defineProperty(a,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&X.hasOwnProp(e,"redact")?e.redact:void 0,i=X.isArray(n)&&n.length>0?Ay(e,n):X.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Be.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Be.ERR_BAD_OPTION="ERR_BAD_OPTION";Be.ECONNABORTED="ECONNABORTED";Be.ETIMEDOUT="ETIMEDOUT";Be.ECONNREFUSED="ECONNREFUSED";Be.ERR_NETWORK="ERR_NETWORK";Be.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Be.ERR_DEPRECATED="ERR_DEPRECATED";Be.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Be.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Be.ERR_CANCELED="ERR_CANCELED";Be.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Be.ERR_INVALID_URL="ERR_INVALID_URL";Be.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const wy=null,Nm=100;function Gc(t){return X.isPlainObject(t)||X.isArray(t)}function Um(t){return X.endsWith(t,"[]")?t.slice(0,-2):t}function Hl(t,e,n){return t?t.concat(e).map(function(s,r){return s=Um(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function Ry(t){return X.isArray(t)&&!t.some(Gc)}const Cy=X.toFlatObject(X,{},null,function(e){return/^is[A-Z]/.test(e)});function vl(t,e,n){if(!X.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=X.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,S){return!X.isUndefined(S[M])});const i=n.metaTokens,s=n.visitor||g,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?Nm:n.maxDepth,c=a&&X.isSpecCompliantForm(e),u=[];if(!X.isFunction(s))throw new TypeError("visitor must be a function");function f(p){if(p===null)return"";if(X.isDate(p))return p.toISOString();if(X.isBoolean(p))return p.toString();if(!c&&X.isBlob(p))throw new Be("Blob is not supported. Use a Buffer instead.");if(X.isArrayBuffer(p)||X.isTypedArray(p)){if(c&&typeof a=="function")return new a([p]);if(typeof Buffer<"u")return Buffer.from(p);throw new Be("Blob is not supported. Use a Buffer instead.",Be.ERR_NOT_SUPPORT)}return p}function d(p){if(p>l)throw new Be("Object is too deeply nested ("+p+" levels). Max depth: "+l,Be.ERR_FORM_DATA_DEPTH_EXCEEDED)}function h(p,M){if(l===1/0)return JSON.stringify(p);const S=[];return JSON.stringify(p,function(R,T){if(!X.isObject(T))return T;for(;S.length&&S[S.length-1]!==this;)S.pop();return S.push(T),d(M+S.length-1),T})}function g(p,M,S){let y=p;if(X.isReactNative(e)&&X.isReactNativeBlob(p))return e.append(Hl(S,M,r),f(p)),!1;if(p&&!S&&typeof p=="object"){if(X.endsWith(M,"{}"))M=i?M:M.slice(0,-2),p=h(p,1);else if(X.isArray(p)&&Ry(p)||(X.isFileList(p)||X.endsWith(M,"[]"))&&(y=X.toArray(p)))return M=Um(M),y.forEach(function(T,L){!(X.isUndefined(T)||T===null)&&e.append(o===!0?Hl([M],L,r):o===null?M:M+"[]",f(T))}),!1}return Gc(p)?!0:(e.append(Hl(S,M,r),f(p)),!1)}const v=Object.assign(Cy,{defaultVisitor:g,convertValue:f,isVisitable:Gc});function m(p,M,S=0){if(!X.isUndefined(p)){if(d(S),u.indexOf(p)!==-1)throw new Error("Circular reference detected in "+M.join("."));u.push(p),X.forEach(p,function(R,T){(!(X.isUndefined(R)||R===null)&&s.call(e,R,X.isString(T)?T.trim():T,M,v))===!0&&m(R,M?M.concat(T):[T],S+1)}),u.pop()}}if(!X.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Id(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function lf(t,e){this._pairs=[],t&&vl(t,this,e)}const Om=lf.prototype;Om.append=function(e,n){this._pairs.push([e,n])};Om.toString=function(e){const n=e?i=>e.call(this,i,Id):Id;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Py(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Fm(t,e,n){if(!e)return t;t=t||"";const i=X.isFunction(n)?{serialize:n}:n,s=X.getSafeProp(i,"encode")||Py,r=X.getSafeProp(i,"serialize");let o;if(r?o=r(e,i):o=X.isURLSearchParams(e)?e.toString():new lf(e,i).toString(s),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Nd{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){X.forEach(this.handlers,function(i){i!==null&&e(i)})}}const cf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Dy=typeof URLSearchParams<"u"?URLSearchParams:lf,Ly=typeof FormData<"u"?FormData:null,Iy=typeof Blob<"u"?Blob:null,Ny={isBrowser:!0,classes:{URLSearchParams:Dy,FormData:Ly,Blob:Iy},protocols:["http","https","file","blob","url","data"]},uf=typeof window<"u"&&typeof document<"u",Wc=typeof navigator=="object"&&navigator||void 0,Uy=uf&&(!Wc||["ReactNative","NativeScript","NS"].indexOf(Wc.product)<0),Oy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Fy=uf&&window.location.href||"http://localhost",By=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:uf,hasStandardBrowserEnv:Uy,hasStandardBrowserWebWorkerEnv:Oy,navigator:Wc,origin:Fy},Symbol.toStringTag,{value:"Module"})),an={...By,...Ny};function zy(t,e){return vl(t,new an.classes.URLSearchParams,{visitor:function(n,i,s,r){return an.isNode&&X.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}const Ud=Nm;function Bm(t){if(t>Ud)throw new Be("FormData field is too deeply nested ("+t+" levels). Max depth: "+Ud,Be.ERR_FORM_DATA_DEPTH_EXCEEDED)}function ky(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)Bm(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function Vy(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function zm(t){function e(n,i,s,r){Bm(r);let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&X.isArray(s)?s.length:o,l?(X.hasOwnProp(s,o)?s[o]=X.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!X.hasOwnProp(s,o)||!X.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&X.isArray(s[o])&&(s[o]=Vy(s[o])),!a)}if(X.isFormData(t)&&X.isFunction(t.entries)){const n={};return X.forEachEntry(t,(i,s)=>{e(ky(i),s,n,0)}),n}return null}const $s=(t,e)=>t!=null&&X.hasOwnProp(t,e)?t[e]:void 0;function Hy(t,e,n){if(X.isString(t))try{return(e||JSON.parse)(t),X.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Io={transitional:cf,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=X.isObject(e);if(r&&X.isHTMLForm(e)&&(e=new FormData(e)),X.isFormData(e))return s?JSON.stringify(zm(e)):e;if(X.isArrayBuffer(e)||X.isBuffer(e)||X.isStream(e)||X.isFile(e)||X.isBlob(e)||X.isReadableStream(e))return e;if(X.isArrayBufferView(e))return e.buffer;if(X.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=$s(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return zy(e,l).toString();if((a=X.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=$s(this,"env"),u=c&&c.FormData;return vl(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),Hy(e)):e}],transformResponse:[function(e){const n=$s(this,"transitional")||Io.transitional,i=n&&n.forcedJSONParsing,s=$s(this,"responseType"),r=s==="json";if(X.isResponse(e)||X.isReadableStream(e))return e;if(e&&X.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,$s(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Be.from(l,Be.ERR_BAD_RESPONSE,this,null,$s(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:an.classes.FormData,Blob:an.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};X.forEach(["delete","get","head","post","put","patch","query"],t=>{Io.headers[t]={}});function Gl(t,e){const n=this||Io,i=e||n,s=yn.from(i.headers);let r=i.data;return X.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function km(t){return!!(t&&t.__CANCEL__)}let No=class extends Be{constructor(e,n,i){super(e??"canceled",Be.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Vm(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Be("Request failed with status code "+n.status,n.status>=400&&n.status<500?Be.ERR_BAD_REQUEST:Be.ERR_BAD_RESPONSE,n.config,n.request,n))}function Gy(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function Wy(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function Xy(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const qa=(t,e,n=3)=>{let i=0;const s=Wy(50,250);return Xy(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Od=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Fd=t=>(...e)=>X.asap(()=>t(...e)),qy=an.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,an.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(an.origin),an.navigator&&/(msie|trident)/i.test(an.navigator.userAgent)):()=>!0,$y=an.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];X.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),X.isString(i)&&a.push(`path=${i}`),X.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),X.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)try{return decodeURIComponent(i.slice(s+1))}catch{return i.slice(s+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Yy(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ky(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const Zy=/^https?:(?!\/\/)/i,Jy=/[\t\n\r]/g;function jy(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function Qy(t){return jy(t).replace(Jy,"")}function Bd(t,e){if(typeof t=="string"&&Zy.test(Qy(t)))throw new Be('Invalid URL: missing "//" after protocol',Be.ERR_INVALID_URL,e)}function Hm(t,e,n,i){Bd(e,i);let s=!Yy(e);return t&&(s||n===!1)?(Bd(t,i),Ky(t,e)):e}const zd=t=>t instanceof yn?{...t}:t;function Vs(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,f,d,h){return X.isPlainObject(u)&&X.isPlainObject(f)?X.merge.call({caseless:h},u,f):X.isPlainObject(f)?X.merge({},f):X.isArray(f)?f.slice():f}function s(u,f,d,h){if(X.isUndefined(f)){if(!X.isUndefined(u))return i(void 0,u,d,h)}else return i(u,f,d,h)}function r(u,f){if(!X.isUndefined(f))return i(void 0,f)}function o(u,f){if(X.isUndefined(f)){if(!X.isUndefined(u))return i(void 0,u)}else return i(void 0,f)}function a(u){const f=X.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!X.isUndefined(f))if(X.isPlainObject(f)){if(X.hasOwnProp(f,u))return f[u]}else return;const d=X.hasOwnProp(t,"transitional")?t.transitional:void 0;if(X.isPlainObject(d)&&X.hasOwnProp(d,u))return d[u]}function l(u,f,d){if(X.hasOwnProp(e,d))return i(u,f);if(X.hasOwnProp(t,d))return i(void 0,u)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(u,f,d)=>s(zd(u),zd(f),d,!0)};return X.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const d=X.hasOwnProp(c,f)?c[f]:s,h=X.hasOwnProp(t,f)?t[f]:void 0,g=X.hasOwnProp(e,f)?e[f]:void 0,v=d(h,g,f);X.isUndefined(v)&&d!==l||(n[f]=v)}),X.hasOwnProp(e,"validateStatus")&&X.isUndefined(e.validateStatus)&&a("validateStatusUndefinedResolves")===!1&&(X.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const eS=["content-type","content-length"];function tS(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,s])=>{eS.includes(i.toLowerCase())&&t.set(i,s)})}const nS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Gm(t){const e=Vs({},t),n=d=>X.hasOwnProp(e,d)?e[d]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=yn.from(a),e.url=Fm(Hm(c,f,u,e),n("params"),n("paramsSerializer")),l){const d=X.getSafeProp(l,"username")||"",h=X.getSafeProp(l,"password")||"";try{a.set("Authorization","Basic "+btoa(d+":"+(h?nS(h):"")))}catch(g){throw Be.from(g,Be.ERR_BAD_OPTION_VALUE,t)}}if(X.isFormData(i)&&(an.hasStandardBrowserEnv||an.hasStandardBrowserWebWorkerEnv||X.isReactNative(i)?a.setContentType(void 0):X.isFunction(i.getHeaders)&&tS(a,i.getHeaders(),n("formDataHeaderPolicy"))),an.hasStandardBrowserEnv&&(X.isFunction(s)&&(s=s(e)),s===!0||s==null&&qy(e.url))){const h=r&&o&&$y.read(o);h&&a.set(r,h)}return e}const iS=typeof XMLHttpRequest<"u",sS=iS&&function(t){return new Promise(function(n,i){const s=Gm(t);let r=s.data;const o=yn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,h,g;function v(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function p(){if(!m)return;const S=yn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),R={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:S,config:t,request:m};Vm(function(L){n(L),v()},function(L){i(L),v()},R),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(p)},m.onabort=function(){m&&(i(new Be("Request aborted",Be.ECONNABORTED,t,m)),v(),m=null)},m.onerror=function(y){const R=y&&y.message?y.message:"Network Error",T=new Be(R,Be.ERR_NETWORK,t,m);T.event=y||null,i(T),v(),m=null},m.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const R=s.transitional||cf;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new Be(y,R.clarifyTimeoutError?Be.ETIMEDOUT:Be.ECONNABORTED,t,m)),v(),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&X.forEach(Lm(o),function(y,R){m.setRequestHeader(R,y)}),X.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([d,g]=qa(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,h]=qa(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=S=>{m&&(i(!S||S.type?new No(null,t,m):S),m.abort(),v(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const M=Gy(s.url);if(M&&!an.protocols.includes(M)){i(new Be("Unsupported protocol "+M+":",Be.ERR_BAD_REQUEST,t)),v();return}m.send(r||null)})},rS=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof Be?c:new No(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new Be(`timeout of ${e}ms exceeded`,Be.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s,{once:!0}));const{signal:a}=n;return a.unsubscribe=()=>X.asap(o),a},oS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},aS=async function*(t,e){for await(const n of lS(t))yield*oS(n,e)},lS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},kd=(t,e,n,i)=>{const s=aS(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},$a=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,cS=(t,e,n)=>e+2<n&&$a(t.charCodeAt(e+1))&&$a(t.charCodeAt(e+2));function uS(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let h=0;h<a;h++)if(i.charCodeAt(h)===37&&h+2<a){const g=i.charCodeAt(h+1),v=i.charCodeAt(h+2);$a(g)&&$a(v)&&(o-=2,h+=2)}let l=0,c=a-1;const u=h=>h>=2&&i.charCodeAt(h-2)===37&&i.charCodeAt(h-1)===51&&(i.charCodeAt(h)===68||i.charCodeAt(h)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const d=Math.floor(o/4)*3-(l||0);return d>0?d:0}let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l===37&&cS(i,o,a))r+=1,o+=2;else if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const ff="1.18.1",Vd=64*1024,{isFunction:Yo}=X,fS=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Hd=t=>{if(!X.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Gd=(t,...e)=>{try{return!!t(...e)}catch{return!1}},dS=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},hS=t=>{const e=X.global!==void 0&&X.global!==null?X.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=X.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?Yo(s):typeof fetch=="function",l=Yo(r),c=Yo(o);if(!a)return!1;const u=a&&Yo(n),f=a&&(typeof i=="function"?(p=>M=>p.encode(M))(new i):async p=>new Uint8Array(await new r(p).arrayBuffer())),d=l&&u&&Gd(()=>{let p=!1;const M=new r(an.origin,{body:new n,method:"POST",get duplex(){return p=!0,"half"}}),S=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),p&&!S}),h=c&&u&&Gd(()=>X.isReadableStream(new o("").body)),g={stream:h&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!g[p]&&(g[p]=(M,S)=>{let y=M&&M[p];if(y)return y.call(M);throw new Be(`Response type '${p}' is not supported`,Be.ERR_NOT_SUPPORT,S)})});const v=async p=>{if(p==null)return 0;if(X.isBlob(p))return p.size;if(X.isSpecCompliantForm(p))return(await new r(an.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(X.isArrayBufferView(p)||X.isArrayBuffer(p))return p.byteLength;if(X.isURLSearchParams(p)&&(p=p+""),X.isString(p))return(await f(p)).byteLength},m=async(p,M)=>{const S=X.toFiniteNumber(p.getContentLength());return S??v(M)};return async p=>{let{url:M,method:S,data:y,signal:R,cancelToken:T,timeout:L,onDownloadProgress:x,onUploadProgress:P,responseType:U,headers:N,withCredentials:F="same-origin",fetchOptions:ne,maxContentLength:re,maxBodyLength:$}=Gm(p);const Q=X.isNumber(re)&&re>-1,G=X.isNumber($)&&$>-1,ie=Z=>X.hasOwnProp(p,Z)?p[Z]:void 0;let ye=s||fetch;U=U?(U+"").toLowerCase():"text";let Te=rS([R,T&&T.toAbortSignal()],L),Me=null;const Se=Te&&Te.unsubscribe&&(()=>{Te.unsubscribe()});let qe,st=null;const et=()=>new Be("Request body larger than maxBodyLength limit",Be.ERR_BAD_REQUEST,p,Me);try{let Z;const B=ie("auth");if(B){const k=X.getSafeProp(B,"username")||"",j=X.getSafeProp(B,"password")||"";Z={username:k,password:j}}if(dS(M)){const k=new URL(M,an.origin);if(!Z&&(k.username||k.password)){const j=Hd(k.username),pe=Hd(k.password);Z={username:j,password:pe}}(k.username||k.password)&&(k.username="",k.password="",M=k.href)}if(Z&&(N.delete("authorization"),N.set("Authorization","Basic "+btoa(fS((Z.username||"")+":"+(Z.password||""))))),Q&&typeof M=="string"&&M.startsWith("data:")&&uS(M)>re)throw new Be("maxContentLength size of "+re+" exceeded",Be.ERR_BAD_RESPONSE,p,Me);if(G&&S!=="get"&&S!=="head"){const k=await v(y);if(typeof k=="number"&&isFinite(k)&&(qe=k,k>$))throw et()}const K=G&&(X.isReadableStream(y)||X.isStream(y)),W=(k,j,pe)=>kd(k,Vd,fe=>{if(G&&fe>$)throw st=et();j&&j(fe)},pe);if(d&&S!=="get"&&S!=="head"&&(P||K)){if(qe=qe??await m(N,y),qe!==0||K){let k=new r(M,{method:"POST",body:y,duplex:"half"}),j;if(X.isFormData(y)&&(j=k.headers.get("content-type"))&&N.setContentType(j),k.body){const[pe,fe]=P&&Od(qe,qa(Fd(P)))||[];y=W(k.body,pe,fe)}}}else if(K&&!l&&u&&S!=="get"&&S!=="head")y=W(y);else if(K&&l&&!d&&S!=="get"&&S!=="head")throw new Be("Stream request bodies are not supported by the current fetch implementation",Be.ERR_NOT_SUPPORT,p,Me);X.isString(F)||(F=F?"include":"omit");const J=l&&"credentials"in r.prototype;if(X.isFormData(y)){const k=N.getContentType();k&&/^multipart\/form-data/i.test(k)&&!/boundary=/i.test(k)&&N.delete("content-type")}N.set("User-Agent","axios/"+ff,!1);const le={...ne,signal:Te,method:S.toUpperCase(),headers:Lm(N.normalize()),body:y,duplex:"half",credentials:J?F:void 0};Me=l&&new r(M,le);let E=await(l?ye(Me,ne):ye(M,le));const w=yn.from(E.headers);if(Q){const k=X.toFiniteNumber(w.getContentLength());if(k!=null&&k>re)throw new Be("maxContentLength size of "+re+" exceeded",Be.ERR_BAD_RESPONSE,p,Me)}const I=h&&(U==="stream"||U==="response");if(h&&E.body&&(x||Q||I&&Se)){const k={};["status","statusText","headers"].forEach(Le=>{k[Le]=E[Le]});const j=X.toFiniteNumber(w.getContentLength()),[pe,fe]=x&&Od(j,qa(Fd(x),!0))||[];let ve=0;const ue=Le=>{if(Q&&(ve=Le,ve>re))throw new Be("maxContentLength size of "+re+" exceeded",Be.ERR_BAD_RESPONSE,p,Me);pe&&pe(Le)};E=new o(kd(E.body,Vd,ue,()=>{fe&&fe(),Se&&Se()}),k)}U=U||"text";let z=await g[X.findKey(g,U)||"text"](E,p);if(Q&&!h&&!I){let k;if(z!=null&&(typeof z.byteLength=="number"?k=z.byteLength:typeof z.size=="number"?k=z.size:typeof z=="string"&&(k=typeof i=="function"?new i().encode(z).byteLength:z.length)),typeof k=="number"&&k>re)throw new Be("maxContentLength size of "+re+" exceeded",Be.ERR_BAD_RESPONSE,p,Me)}return!I&&Se&&Se(),await new Promise((k,j)=>{Vm(k,j,{data:z,headers:yn.from(E.headers),status:E.status,statusText:E.statusText,config:p,request:Me})})}catch(Z){if(Se&&Se(),Te&&Te.aborted&&Te.reason instanceof Be){const B=Te.reason;throw B.config=p,Me&&(B.request=Me),Z!==B&&Object.defineProperty(B,"cause",{__proto__:null,value:Z,writable:!0,enumerable:!1,configurable:!0}),B}if(st)throw Me&&!st.request&&(st.request=Me),st;if(Z instanceof Be)throw Me&&!Z.request&&(Z.request=Me),Z;if(Z&&Z.name==="TypeError"&&/Load failed|fetch/i.test(Z.message)){const B=new Be("Network Error",Be.ERR_NETWORK,p,Me,Z&&Z.response);throw Object.defineProperty(B,"cause",{__proto__:null,value:Z.cause||Z,writable:!0,enumerable:!1,configurable:!0}),B}throw Be.from(Z,Z&&Z.code,p,Me,Z&&Z.response)}}},pS=new Map,Wm=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=pS;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:hS(e)),u=c;return c};Wm();const df={http:wy,xhr:sS,fetch:{get:Wm}};X.forEach(df,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Wd=t=>`- ${t}`,mS=t=>X.isFunction(t)||t===null||t===!1;function gS(t,e){t=X.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!mS(i)&&(s=df[(a=String(i)).toLowerCase()],s===void 0))throw new Be(`Unknown adapter '${a}'`);if(s&&(X.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Wd).join(`
`):" "+Wd(o[0]):"as no adapter specified";throw new Be("There is no suitable adapter to dispatch the request "+a,Be.ERR_NOT_SUPPORT)}return s}const Xm={getAdapter:gS,adapters:df};function Wl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new No(null,t)}function Xd(t){return Wl(t),t.headers=yn.from(t.headers),t.data=Gl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Xm.getAdapter(t.adapter||Io.adapter,t)(t).then(function(i){Wl(t),t.response=i;try{i.data=Gl.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=yn.from(i.headers),i},function(i){if(!km(i)&&(Wl(t),i&&i.response)){t.response=i.response;try{i.response.data=Gl.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=yn.from(i.response.headers)}return Promise.reject(i)})}const xl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{xl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const qd={};xl.transitional=function(e,n,i){function s(r,o){return"[Axios v"+ff+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Be(s(o," has been removed"+(n?" in "+n:"")),Be.ERR_DEPRECATED);return n&&!qd[o]&&(qd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};xl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function _S(t,e,n){if(typeof t!="object"||t===null)throw new Be("options must be an object",Be.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Be("option "+r+" must be "+l,Be.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Be("Unknown option "+r,Be.ERR_BAD_OPTION)}}const Aa={assertOptions:_S,validators:xl},hn=Aa.validators;let zs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Nd,response:new Nd}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Vs(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Aa.assertOptions(i,{silentJSONParsing:hn.transitional(hn.boolean),forcedJSONParsing:hn.transitional(hn.boolean),clarifyTimeoutError:hn.transitional(hn.boolean),legacyInterceptorReqResOrdering:hn.transitional(hn.boolean),advertiseZstdAcceptEncoding:hn.transitional(hn.boolean),validateStatusUndefinedResolves:hn.transitional(hn.boolean)},!1),s!=null&&(X.isFunction(s)?n.paramsSerializer={serialize:s}:Aa.assertOptions(s,{encode:hn.function,serialize:hn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Aa.assertOptions(n,{baseUrl:hn.spelling("baseURL"),withXsrfToken:hn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&X.merge(r.common,r[n.method]);r&&X.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),n.headers=yn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(n)===!1)return;l=l&&v.synchronous;const m=n.transitional||cf;m&&m.legacyInterceptorReqResOrdering?a.unshift(v.fulfilled,v.rejected):a.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const g=[Xd.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let h=n;for(;f<d;){const g=a[f++],v=a[f++];try{h=g(h)}catch(m){v.call(this,m);break}}try{u=Xd.call(this,h)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Vs(this.defaults,e);const n=Hm(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Fm(n,e.params,e.paramsSerializer)}};X.forEach(["delete","get","head","options"],function(e){zs.prototype[e]=function(n,i){return this.request(Vs(i||{},{method:e,url:n,data:i&&X.hasOwnProp(i,"data")?i.data:void 0}))}});X.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(Vs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}zs.prototype[e]=n(),e!=="query"&&(zs.prototype[e+"Form"]=n(!0))});let vS=class qm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new No(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new qm(function(s){e=s}),cancel:e}}};function xS(t){return function(n){return t.apply(null,n)}}function yS(t){return X.isObject(t)&&t.isAxiosError===!0}const Xc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Xc).forEach(([t,e])=>{Xc[e]=t});function $m(t){const e=new zs(t),n=bm(zs.prototype.request,e);return X.extend(n,zs.prototype,e,{allOwnKeys:!0}),X.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return $m(Vs(t,s))},n}const Zt=$m(Io);Zt.Axios=zs;Zt.CanceledError=No;Zt.CancelToken=vS;Zt.isCancel=km;Zt.VERSION=ff;Zt.toFormData=vl;Zt.AxiosError=Be;Zt.Cancel=Zt.CanceledError;Zt.all=function(e){return Promise.all(e)};Zt.spread=xS;Zt.isAxiosError=yS;Zt.mergeConfig=Vs;Zt.AxiosHeaders=yn;Zt.formToJSON=t=>zm(X.isHTMLForm(t)?new FormData(t):t);Zt.getAdapter=Xm.getAdapter;Zt.HttpStatusCode=Xc;Zt.default=Zt;const{Axios:JC,AxiosError:jC,CanceledError:QC,isCancel:eP,CancelToken:tP,VERSION:nP,all:iP,Cancel:sP,isAxiosError:rP,spread:oP,toFormData:aP,AxiosHeaders:lP,HttpStatusCode:cP,formToJSON:uP,getAdapter:fP,mergeConfig:dP,create:hP}=Zt,Nt=Zt.create({baseURL:"/api"}),SS={class:"page-card"},MS={key:0,class:"placeholder"},bS={class:"summary-grid"},ES={class:"summary-label"},TS={class:"summary-note"},AS={class:"content-grid"},wS={class:"panel"},RS={key:1,class:"placeholder"},CS={class:"panel"},PS={key:0,class:"table"},DS={key:1,class:"placeholder"},LS={key:0,class:"alert"},IS={__name:"HomePage",setup(t){const e=Ge([]),n=Ge([]),i=Ge([]),s=Ge(!0),r=Ge(""),o=u=>u?new Date(u).toLocaleString("zh-TW"):"—",a=ft(()=>n.value.find(u=>!u.endTime)),l=ft(()=>[{title:"使用者數",value:e.value.length,detail:"資料庫已建立的使用者"},{title:"作業紀錄",value:n.value.length,detail:"所有作業資料"},{title:"辨識結果",value:i.value.length,detail:"所有物件辨識資料"}]);return Ji(async()=>{var u,f;s.value=!0,r.value="";try{const[d,h,g]=await Promise.all([Nt.get("/users"),Nt.get("/operations"),Nt.get("/detections")]);e.value=d.data,n.value=h.data,i.value=g.data}catch(d){r.value=((f=(u=d.response)==null?void 0:u.data)==null?void 0:f.error)||"無法讀取資料庫資料，請確認後端服務與 MongoDB 是否已啟動。"}finally{s.value=!1}}),(u,f)=>{var d,h;return _e(),xe("section",SS,[f[7]||(f[7]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Dashboard"),C("h2",null,"系統總覽")],-1)),s.value?(_e(),xe("p",MS,"正在讀取資料庫資料…")):(_e(),xe(_t,{key:1},[C("div",bS,[(_e(!0),xe(_t,null,Tn(l.value,g=>(_e(),xe("article",{key:g.title,class:"summary-card"},[C("p",ES,ge(g.title),1),C("h3",null,ge(g.value),1),C("p",TS,ge(g.detail),1)]))),128))]),C("div",AS,[C("article",wS,[f[4]||(f[4]=C("h3",null,"目前作業",-1)),a.value?(_e(),xe(_t,{key:0},[C("p",null,[f[0]||(f[0]=C("strong",null,"作業 ID：",-1)),Mt(ge(a.value._id),1)]),C("p",null,[f[1]||(f[1]=C("strong",null,"使用者：",-1)),Mt(ge(((d=a.value.userId)==null?void 0:d.name)||((h=a.value.userId)==null?void 0:h.email)||"未提供"),1)]),C("p",null,[f[2]||(f[2]=C("strong",null,"開始時間：",-1)),Mt(ge(o(a.value.startTime)),1)]),C("p",null,[f[3]||(f[3]=C("strong",null,"說明：",-1)),Mt(ge(a.value.description||"—"),1)])],64)):(_e(),xe("p",RS,"目前沒有進行中的作業。"))]),C("article",CS,[f[6]||(f[6]=C("h3",null,"最新辨識結果",-1)),i.value.length?(_e(),xe("table",PS,[f[5]||(f[5]=C("thead",null,[C("tr",null,[C("th",null,"時間"),C("th",null,"物件"),C("th",null,"深度")])],-1)),C("tbody",null,[(_e(!0),xe(_t,null,Tn(i.value.slice(0,6),g=>(_e(),xe("tr",{key:g._id},[C("td",null,ge(o(g.timestamp)),1),C("td",null,ge(g.objectClass||"未分類"),1),C("td",null,ge(g.depth??"—"),1)]))),128))])])):(_e(),xe("p",DS,"尚無辨識資料。"))])]),r.value?(_e(),xe("p",LS,ge(r.value),1)):wt("",!0)],64))])}}},NS={class:"page-card account-page"},US={class:"section-title"},OS={class:"panel account-panel"},FS={key:0},BS=["autocomplete"],zS={key:1},kS=["disabled"],VS={key:0,class:"alert"},HS={__name:"AccountLoginPage",setup(t){const e=sf(),n=Sm(),i=Ge(n.query.mode==="register"?"register":"login"),s=Ge(!1),r=Ge(""),o=ys({name:"",email:"",password:"",confirmPassword:""}),a=()=>{i.value=i.value==="login"?"register":"login",r.value="",o.password="",o.confirmPassword=""};Kn(()=>n.query.mode,c=>{(c==="register"||c==="login")&&(i.value=c)});const l=async()=>{var c,u;if(r.value="",i.value==="register"&&o.password!==o.confirmPassword){r.value="兩次輸入的密碼不一致。";return}s.value=!0;try{const f=i.value==="login"?{email:o.email,password:o.password}:{name:o.name,email:o.email,password:o.password},d=await Nt.post(`/auth/${i.value==="login"?"login":"register"}`,f);Mm(d.data),e.replace(typeof n.query.redirect=="string"?n.query.redirect:"/")}catch(f){r.value=((u=(c=f.response)==null?void 0:c.data)==null?void 0:u.error)||"目前無法完成帳戶操作，請稍後再試。"}finally{s.value=!1}};return(c,u)=>(_e(),xe("section",NS,[C("div",US,[u[4]||(u[4]=C("p",{class:"eyebrow"},"Account",-1)),C("h2",null,ge(i.value==="login"?"登入平台":"建立帳號"),1)]),C("article",OS,[C("form",{class:"form-grid",onSubmit:ev(l,["prevent"])},[i.value==="register"?(_e(),xe("label",FS,[u[5]||(u[5]=Mt("使用者名稱",-1)),Kt(C("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>o.name=f),type:"text",autocomplete:"name",required:""},null,512),[[ti,o.name,void 0,{trim:!0}]])])):wt("",!0),C("label",null,[u[6]||(u[6]=Mt("電子信箱",-1)),Kt(C("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>o.email=f),type:"email",autocomplete:"email",required:""},null,512),[[ti,o.email,void 0,{trim:!0}]])]),C("label",null,[u[7]||(u[7]=Mt("密碼",-1)),Kt(C("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>o.password=f),type:"password",autocomplete:i.value==="login"?"current-password":"new-password",minlength:"8",required:""},null,8,BS),[[ti,o.password]])]),i.value==="register"?(_e(),xe("label",zS,[u[8]||(u[8]=Mt("確認密碼",-1)),Kt(C("input",{"onUpdate:modelValue":u[3]||(u[3]=f=>o.confirmPassword=f),type:"password",autocomplete:"new-password",minlength:"8",required:""},null,512),[[ti,o.confirmPassword]])])):wt("",!0),C("button",{type:"submit",disabled:s.value},ge(s.value?"處理中…":i.value==="login"?"登入":"建立帳號"),9,kS)],32),r.value?(_e(),xe("p",VS,ge(r.value),1)):wt("",!0),C("button",{type:"button",class:"account-switch",onClick:a},ge(i.value==="login"?"尚未註冊？建立帳號":"已有帳號？返回登入"),1)])]))}},GS={class:"page-card profile-page"},WS={class:"panel profile-panel"},XS={key:0,class:"placeholder"},qS={class:"profile-avatar-large"},$S={class:"profile-fields"},YS={class:"profile-field-row"},KS={class:"profile-value"},ZS=["disabled"],JS=["disabled"],jS={class:"profile-field-row"},QS={class:"profile-value"},eM=["disabled"],tM=["disabled"],nM={class:"profile-field-row"},iM={class:"profile-value"},sM={key:0,class:"alert"},rM={key:2,class:"alert"},oM={__name:"AccountProfilePage",setup(t){const e=sf(),n=Ge(""),i=Ge(!0),s=Ge(!1),r=Ge(""),o=Ge(null),a=ys({name:"",email:""}),l=async()=>{var h,g;try{o.value=(await Nt.get(`/users/${ho.value.id}`)).data,a.name=o.value.name,a.email=o.value.email}catch(v){r.value=((g=(h=v.response)==null?void 0:h.data)==null?void 0:g.error)||"無法讀取帳戶資料。"}finally{i.value=!1}},c=h=>{n.value=h,r.value="",a[h]=o.value[h]},u=()=>{n.value&&(a[n.value]=o.value[n.value]),n.value="",r.value=""},f=async h=>{var g,v;s.value=!0,r.value="";try{const m=(await Nt.patch(`/users/${ho.value.id}`,{[h]:a[h]})).data;o.value=m,fx(m),n.value=""}catch(m){r.value=((v=(g=m.response)==null?void 0:g.data)==null?void 0:v.error)||"無法更新帳戶資料。"}finally{s.value=!1}},d=()=>{dx(),e.push("/guide")};return Ji(l),(h,g)=>(_e(),xe("section",GS,[g[11]||(g[11]=C("div",{class:"section-title profile-title"},[C("p",{class:"eyebrow"},"Account"),C("h2",null,"帳戶資料")],-1)),C("article",WS,[i.value?(_e(),xe("p",XS,"正在讀取帳戶資料…")):o.value?(_e(),xe(_t,{key:1},[C("div",qS,ge(o.value.name.charAt(0).toUpperCase()),1),C("div",$S,[C("div",YS,[g[8]||(g[8]=C("span",{class:"profile-label"},"使用者名稱",-1)),C("div",KS,[n.value==="name"?(_e(),xe(_t,{key:0},[Kt(C("input",{"onUpdate:modelValue":g[0]||(g[0]=v=>a.name=v),type:"text",autofocus:"",onKeyup:g[1]||(g[1]=dd(v=>f("name"),["enter"]))},null,544),[[ti,a.name,void 0,{trim:!0}]]),C("button",{type:"button",class:"field-save",disabled:s.value,onClick:g[2]||(g[2]=v=>f("name"))},"✓",8,ZS),C("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,JS)],64)):(_e(),xe(_t,{key:1},[C("span",null,ge(o.value.name),1),C("button",{type:"button",class:"field-edit",title:"修改使用者名稱",onClick:g[3]||(g[3]=v=>c("name"))},"✎")],64))])]),C("div",jS,[g[9]||(g[9]=C("span",{class:"profile-label"},"電子信箱",-1)),C("div",QS,[n.value==="email"?(_e(),xe(_t,{key:0},[Kt(C("input",{"onUpdate:modelValue":g[4]||(g[4]=v=>a.email=v),type:"email",autofocus:"",onKeyup:g[5]||(g[5]=dd(v=>f("email"),["enter"]))},null,544),[[ti,a.email,void 0,{trim:!0}]]),C("button",{type:"button",class:"field-save",disabled:s.value,onClick:g[6]||(g[6]=v=>f("email"))},"✓",8,eM),C("button",{type:"button",class:"field-cancel",disabled:s.value,onClick:u},"取消",8,tM)],64)):(_e(),xe(_t,{key:1},[C("span",null,ge(o.value.email),1),C("button",{type:"button",class:"field-edit",title:"修改電子信箱",onClick:g[7]||(g[7]=v=>c("email"))},"✎")],64))])]),C("div",nM,[g[10]||(g[10]=C("span",{class:"profile-label"},"註冊時間",-1)),C("div",iM,[C("span",null,ge(new Date(o.value.signUpTime).toLocaleString("zh-TW")),1)])])]),r.value?(_e(),xe("p",sM,ge(r.value),1)):wt("",!0),C("button",{type:"button",class:"logout-danger",onClick:d},"登出帳戶")],64)):(_e(),xe("p",rM,ge(r.value),1))])]))}},Uo=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},aM={},lM={class:"page-card"};function cM(t,e){return _e(),xe("section",lM,[...e[0]||(e[0]=[ef('<div class="section-title"><p class="eyebrow">Account</p><h2>密碼修改</h2></div><article class="panel"><h3>修改密碼</h3><div class="form-grid"><input type="password" placeholder="舊密碼"><input type="password" placeholder="新密碼"><input type="password" placeholder="確認新密碼"><button type="button">確認修改</button></div></article>',2)])])}const uM=Uo(aM,[["render",cM]]),fM={},dM={class:"page-card"};function hM(t,e){return _e(),xe("section",dM,[...e[0]||(e[0]=[C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Guide"),C("h2",null,"網站操作指引")],-1),C("article",{class:"panel"},[C("h3",null,"使用步驟"),C("ul",{class:"bullet-list"},[C("li",null,"選擇對應的定位任務頁面。"),C("li",null,"確認目前作業狀態與資料來源。"),C("li",null,"透過歷史資料查詢前次操作結果。")])],-1)])])}const pM=Uo(fM,[["render",hM]]),mM={},gM={class:"page-card"};function _M(t,e){return _e(),xe("section",gM,[...e[0]||(e[0]=[C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Technology"),C("h2",null,"定位技術介紹")],-1),C("article",{class:"panel"},[C("h3",null,"系統技術架構"),C("p",null,"本系統結合電腦視覺、深度估測與即時串流，讓終端定位作業可快速觀測與追溯。")],-1)])])}const vM=Uo(mM,[["render",_M]]),xM={class:"page-card"},yM={key:0,class:"placeholder"},SM={key:1,class:"table table-spaced"},MM={key:2,class:"placeholder"},bM={key:3,class:"alert"},EM={__name:"ObjectQueryPage",setup(t){const e=Ge([]),n=Ge(""),i=Ge(!0),s=Ge(""),r=a=>a?new Date(a).toLocaleString("zh-TW"):"—",o=ft(()=>e.value.filter(a=>{var l;return(l=a.objectClass)==null?void 0:l.toLowerCase().includes(n.value.toLowerCase())}));return Ji(async()=>{try{e.value=(await Nt.get("/detections")).data}catch{s.value="無法讀取辨識資料。"}finally{i.value=!1}}),(a,l)=>(_e(),xe("section",xM,[l[2]||(l[2]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"History"),C("h2",null,"物件辨識紀錄")],-1)),Kt(C("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"search",placeholder:"依物件名稱篩選"},null,512),[[ti,n.value]]),i.value?(_e(),xe("p",yM,"正在讀取資料…")):o.value.length?(_e(),xe("table",SM,[l[1]||(l[1]=C("thead",null,[C("tr",null,[C("th",null,"時間"),C("th",null,"物件"),C("th",null,"深度"),C("th",null,"作業 ID")])],-1)),C("tbody",null,[(_e(!0),xe(_t,null,Tn(o.value,c=>{var u;return _e(),xe("tr",{key:c._id},[C("td",null,ge(r(c.timestamp)),1),C("td",null,ge(c.objectClass||"未分類"),1),C("td",null,ge(c.depth??"—"),1),C("td",null,ge(((u=c.operationId)==null?void 0:u._id)||c.operationId),1)])}),128))])])):(_e(),xe("p",MM,"沒有符合的辨識資料。")),s.value?(_e(),xe("p",bM,ge(s.value),1)):wt("",!0)]))}},TM={class:"page-card"},AM={key:0,class:"placeholder"},wM={key:1,class:"table"},RM={key:2,class:"placeholder"},CM={key:3,class:"alert"},PM={__name:"TaskHistoryPage",setup(t){const e=Ge([]),n=Ge(!0),i=Ge(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return Ji(async()=>{try{e.value=(await Nt.get("/operations")).data}catch{i.value="無法讀取作業紀錄。"}finally{n.value=!1}}),(r,o)=>(_e(),xe("section",TM,[o[1]||(o[1]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"History"),C("h2",null,"任務歷程")],-1)),n.value?(_e(),xe("p",AM,"正在讀取資料…")):e.value.length?(_e(),xe("table",wM,[o[0]||(o[0]=C("thead",null,[C("tr",null,[C("th",null,"開始時間"),C("th",null,"結束時間"),C("th",null,"使用者"),C("th",null,"狀態")])],-1)),C("tbody",null,[(_e(!0),xe(_t,null,Tn(e.value,a=>{var l,c;return _e(),xe("tr",{key:a._id},[C("td",null,ge(s(a.startTime)),1),C("td",null,ge(s(a.endTime)),1),C("td",null,ge(((l=a.userId)==null?void 0:l.name)||((c=a.userId)==null?void 0:c.email)||"未提供"),1),C("td",null,ge(a.endTime?"已完成":"進行中"),1)])}),128))])])):(_e(),xe("p",RM,"尚無任務資料。")),i.value?(_e(),xe("p",CM,ge(i.value),1)):wt("",!0)]))}},DM={class:"page-card"},LM={key:0,class:"placeholder"},IM={key:1,class:"table"},NM={key:2,class:"placeholder"},UM={key:3,class:"alert"},OM={__name:"OperationLogPage",setup(t){const e=Ge([]),n=Ge(!0),i=Ge(""),s=r=>r?new Date(r).toLocaleString("zh-TW"):"—";return Ji(async()=>{try{e.value=(await Nt.get("/operations")).data}catch{i.value="無法讀取操作紀錄。"}finally{n.value=!1}}),(r,o)=>(_e(),xe("section",DM,[o[1]||(o[1]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"History"),C("h2",null,"操作紀錄")],-1)),n.value?(_e(),xe("p",LM,"正在讀取資料…")):e.value.length?(_e(),xe("table",IM,[o[0]||(o[0]=C("thead",null,[C("tr",null,[C("th",null,"作業 ID"),C("th",null,"開始時間"),C("th",null,"結束時間"),C("th",null,"說明")])],-1)),C("tbody",null,[(_e(!0),xe(_t,null,Tn(e.value,a=>(_e(),xe("tr",{key:a._id},[C("td",null,ge(a._id),1),C("td",null,ge(s(a.startTime)),1),C("td",null,ge(s(a.endTime)),1),C("td",null,ge(a.description||"—"),1)]))),128))])])):(_e(),xe("p",NM,"尚無操作紀錄。")),i.value?(_e(),xe("p",UM,ge(i.value),1)):wt("",!0)]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="185",gr={ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FM=0,$d=1,BM=2,wa=1,zM=2,io=3,gs=0,Nn=1,Yn=2,Hi=0,_r=1,Yd=2,Kd=3,Zd=4,kM=5,Ps=100,VM=101,HM=102,GM=103,WM=104,XM=200,qM=201,$M=202,YM=203,qc=204,$c=205,KM=206,ZM=207,JM=208,jM=209,QM=210,eb=211,tb=212,nb=213,ib=214,Yc=0,Kc=1,Zc=2,Cr=3,Jc=4,jc=5,Qc=6,eu=7,Ym=0,sb=1,rb=2,bi=0,Km=1,Zm=2,Jm=3,jm=4,Qm=5,eg=6,tg=7,ng=300,Hs=301,Pr=302,Xl=303,ql=304,yl=306,tu=1e3,ki=1001,nu=1002,cn=1003,ob=1004,Ko=1005,vn=1006,$l=1007,Ns=1008,kn=1009,ig=1010,sg=1011,Mo=1012,pf=1013,wi=1014,xi=1015,$i=1016,mf=1017,gf=1018,bo=1020,rg=35902,og=35899,ag=1021,lg=1022,ni=1023,Yi=1026,Us=1027,cg=1028,_f=1029,Gs=1030,vf=1031,xf=1033,Ra=33776,Ca=33777,Pa=33778,Da=33779,iu=35840,su=35841,ru=35842,ou=35843,au=36196,lu=37492,cu=37496,uu=37488,fu=37489,Ya=37490,du=37491,hu=37808,pu=37809,mu=37810,gu=37811,_u=37812,vu=37813,xu=37814,yu=37815,Su=37816,Mu=37817,bu=37818,Eu=37819,Tu=37820,Au=37821,wu=36492,Ru=36494,Cu=36495,Pu=36283,Du=36284,Ka=36285,Lu=36286,ab=3200,Iu=0,lb=1,ds="",$n="srgb",Za="srgb-linear",Ja="linear",At="srgb",Ys=7680,Jd=519,cb=512,ub=513,fb=514,yf=515,db=516,hb=517,Sf=518,pb=519,jd=35044,Qd="300 es",yi=2e3,Eo=2001;function mb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ja(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function gb(){const t=ja("canvas");return t.style.display="block",t}const eh={};function th(...t){const e="THREE."+t.shift();console.log(e,...t)}function ug(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function tt(...t){t=ug(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function yt(...t){t=ug(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function vr(...t){const e=t.join(" ");e in eh||(eh[e]=!0,tt(...t))}function _b(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const vb={[Yc]:Kc,[Zc]:Qc,[Jc]:eu,[Cr]:jc,[Kc]:Yc,[Qc]:Zc,[eu]:Jc,[jc]:Cr};class Ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],La=Math.PI/180,Nu=180/Math.PI;function Oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[t&255]+pn[t>>8&255]+pn[t>>16&255]+pn[t>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function pt(t,e,n){return Math.max(e,Math.min(n,t))}function xb(t,e){return(t%e+e)%e}function Yl(t,e,n){return(1-n)*t+n*e}function qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const yb={DEG2RAD:La},Rf=class Rf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rf.prototype.isVector2=!0;let it=Rf;class Ki{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3];if(f!==v||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*v;m<0&&(d=-d,h=-h,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),S=Math.sin(M);p=Math.sin(p*M)/S,a=Math.sin(a*M)/S,l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+v*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+v*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cf=class Cf{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cf.prototype.isVector3=!0;let Y=Cf;const Kl=new Y,nh=new Ki,Pf=class Pf{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],S=s[4],y=s[7],R=s[2],T=s[5],L=s[8];return r[0]=o*v+a*M+l*R,r[3]=o*m+a*S+l*T,r[6]=o*p+a*y+l*L,r[1]=c*v+u*M+f*R,r[4]=c*m+u*S+f*T,r[7]=c*p+u*y+f*L,r[2]=d*v+h*M+g*R,r[5]=d*m+h*S+g*T,r[8]=d*p+h*y+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,g=n*f+i*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zl.makeScale(e,n)),this}rotate(e){return vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zl.makeRotation(-e)),this}translate(e,n){return vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pf.prototype.isMatrix3=!0;let at=Pf;const Zl=new at,ih=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sb(){const t={enabled:!0,workingColorSpace:Za,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ds?Ja:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Za]:{primaries:e,whitePoint:i,transfer:Ja,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:i,transfer:At,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),t}const gt=Sb();function Gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ks;class Mb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=ja("canvas")),Ks.width=e.width,Ks.height=e.height;const s=Ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ja("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gi(n[i]/255)*255):n[i]=Gi(n[i]);return{data:n,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bb=0;class Mf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jl(s[o].image)):r.push(Jl(s[o]))}else r=Jl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Jl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Mb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Eb=0;const jl=new Y;class wn extends Ss{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=ki,s=ki,r=vn,o=Ns,a=ni,l=kn,c=wn.DEFAULT_ANISOTROPY,u=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Oo(),this.name="",this.source=new Mf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){tt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){tt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tu:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tu:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=ng;wn.DEFAULT_ANISOTROPY=1;const Df=class Df{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(h+1)/2,R=(p+1)/2,T=(u+d)/4,L=(f+v)/4,x=(g+m)/4;return S>y&&S>R?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=L/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=x/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=L/r,s=x/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this.w=pt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this.w=pt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Df.prototype.isVector4=!0;let kt=Df;class Tb extends Ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new wn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Mf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Tb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class fg extends wn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ab extends wn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tl=class tl{constructor(e,n,i,s,r,o,a,l,c,u,f,d,h,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,h,g,v,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wb,e,Rb)}lookAt(e,n,i){const s=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),ns.crossVectors(i,On),ns.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ns.crossVectors(i,On)),ns.normalize(),Zo.crossVectors(On,ns),s[0]=ns.x,s[4]=Zo.x,s[8]=On.x,s[1]=ns.y,s[5]=Zo.y,s[9]=On.y,s[2]=ns.z,s[6]=Zo.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],S=i[7],y=i[11],R=i[15],T=s[0],L=s[4],x=s[8],P=s[12],U=s[1],N=s[5],F=s[9],ne=s[13],re=s[2],$=s[6],Q=s[10],G=s[14],ie=s[3],ye=s[7],Te=s[11],Me=s[15];return r[0]=o*T+a*U+l*re+c*ie,r[4]=o*L+a*N+l*$+c*ye,r[8]=o*x+a*F+l*Q+c*Te,r[12]=o*P+a*ne+l*G+c*Me,r[1]=u*T+f*U+d*re+h*ie,r[5]=u*L+f*N+d*$+h*ye,r[9]=u*x+f*F+d*Q+h*Te,r[13]=u*P+f*ne+d*G+h*Me,r[2]=g*T+v*U+m*re+p*ie,r[6]=g*L+v*N+m*$+p*ye,r[10]=g*x+v*F+m*Q+p*Te,r[14]=g*P+v*ne+m*G+p*Me,r[3]=M*T+S*U+y*re+R*ie,r[7]=M*L+S*N+y*$+R*ye,r[11]=M*x+S*F+y*Q+R*Te,r[15]=M*P+S*ne+y*G+R*Me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=l*h-c*d,S=a*h-c*f,y=a*d-l*f,R=o*h-c*u,T=o*d-l*u,L=o*f-a*u;return n*(v*M-m*S+p*y)-i*(g*M-m*R+p*T)+s*(g*S-v*R+p*L)-r*(g*y-v*T+m*L)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=n*a-i*o,S=n*l-s*o,y=n*c-r*o,R=i*l-s*a,T=i*c-r*a,L=s*c-r*l,x=u*v-f*g,P=u*m-d*g,U=u*p-h*g,N=f*m-d*v,F=f*p-h*v,ne=d*p-h*m,re=M*ne-S*F+y*N+R*U-T*P+L*x;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/re;return e[0]=(a*ne-l*F+c*N)*$,e[1]=(s*F-i*ne-r*N)*$,e[2]=(v*L-m*T+p*R)*$,e[3]=(d*T-f*L-h*R)*$,e[4]=(l*U-o*ne-c*P)*$,e[5]=(n*ne-s*U+r*P)*$,e[6]=(m*y-g*L-p*S)*$,e[7]=(u*L-d*y+h*S)*$,e[8]=(o*F-a*U+c*x)*$,e[9]=(i*U-n*F-r*x)*$,e[10]=(g*T-v*y+p*M)*$,e[11]=(f*y-u*T-h*M)*$,e[12]=(a*P-o*N-l*x)*$,e[13]=(n*N-i*P+s*x)*$,e[14]=(v*S-g*R-m*M)*$,e[15]=(u*R-f*S+d*M)*$,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,g=r*f,v=o*u,m=o*f,p=a*f,M=l*c,S=l*u,y=l*f,R=i.x,T=i.y,L=i.z;return s[0]=(1-(v+p))*R,s[1]=(h+y)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(h-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+S)*L,s[9]=(m-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Zs.set(s[0],s[1],s[2]).length();const a=Zs.set(s[4],s[5],s[6]).length(),l=Zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Jn.copy(this);const c=1/o,u=1/a,f=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,n.setFromRotationMatrix(Jn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=yi,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),h=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===yi)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Eo)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=yi,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===yi)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Eo)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};tl.prototype.isMatrix4=!0;let Bt=tl;const Zs=new Y,Jn=new Bt,wb=new Y(0,0,0),Rb=new Y(1,1,1),ns=new Y,Zo=new Y,On=new Y,rh=new Bt,oh=new Ki;class _s{constructor(e=0,n=0,i=0,s=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class bf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cb=0;const ah=new Y,Js=new Ki,Di=new Bt,Jo=new Y,$r=new Y,Pb=new Y,Db=new Ki,lh=new Y(1,0,0),ch=new Y(0,1,0),uh=new Y(0,0,1),fh={type:"added"},Lb={type:"removed"},js={type:"childadded",child:null},Ql={type:"childremoved",child:null};class rn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new Y,n=new _s,i=new Ki,s=new Y(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new at}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Js.setFromAxisAngle(e,n),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,n){return Js.setFromAxisAngle(e,n),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,n){return ah.copy(e).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jo.copy(e):Jo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt($r,Jo,this.up):Di.lookAt(Jo,$r,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Di),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),js.child=e,this.dispatchEvent(js),js.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Lb),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}rn.DEFAULT_UP=new Y(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Si extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ib={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ib)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},jo={h:0,s:0,l:0};function tc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class dt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=gt.workingColorSpace){if(e=xb(e,1),n=pt(n,0,1),i=pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,n=$n){function i(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=dg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return gt.workingToColorSpace(mn.copy(this),e),Math.round(pt(mn.r*255,0,255))*65536+Math.round(pt(mn.g*255,0,255))*256+Math.round(pt(mn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.workingToColorSpace(mn.copy(this),n);const i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=gt.workingColorSpace){return gt.workingToColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=$n){gt.workingToColorSpace(mn.copy(this),e);const n=mn.r,i=mn.g,s=mn.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(is),this.setHSL(is.h+e,is.s+n,is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(is),e.getHSL(jo);const i=Yl(is.h,jo.h,n),s=Yl(is.s,jo.s,n),r=Yl(is.l,jo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new dt;dt.NAMES=dg;class hg extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _s,this.environmentIntensity=1,this.environmentRotation=new _s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jn=new Y,Li=new Y,nc=new Y,Ii=new Y,Qs=new Y,er=new Y,dh=new Y,ic=new Y,sc=new Y,rc=new Y,oc=new kt,ac=new kt,lc=new kt;class ei{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),jn.subVectors(e,n),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){jn.subVectors(s,n),Li.subVectors(i,n),nc.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(Li),l=jn.dot(nc),c=Li.dot(Li),u=Li.dot(nc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return oc.setScalar(0),ac.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(e,n),ac.fromBufferAttribute(e,i),lc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(e,n,i,s){return jn.subVectors(i,n),Li.subVectors(e,n),jn.cross(Li).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),jn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Qs.subVectors(s,i),er.subVectors(r,i),ic.subVectors(e,i);const l=Qs.dot(ic),c=er.dot(ic);if(l<=0&&c<=0)return n.copy(i);sc.subVectors(e,s);const u=Qs.dot(sc),f=er.dot(sc);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Qs,o);rc.subVectors(e,r);const h=Qs.dot(rc),g=er.dot(rc);if(g>=0&&h<=g)return n.copy(r);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(er,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return dh.subVectors(r,s),a=(f-u)/(f-u+(h-g)),n.copy(s).addScaledVector(dh,a);const p=1/(m+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(Qs,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fo{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),ea.subVectors(this.max,Yr),tr.subVectors(e.a,Yr),nr.subVectors(e.b,Yr),ir.subVectors(e.c,Yr),ss.subVectors(nr,tr),rs.subVectors(ir,nr),Ts.subVectors(tr,ir);let n=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ts.z,Ts.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ts.z,0,-Ts.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ts.y,Ts.x,0];return!cc(n,tr,nr,ir,ea)||(n=[1,0,0,0,1,0,0,0,1],!cc(n,tr,nr,ir,ea))?!1:(ta.crossVectors(ss,rs),n=[ta.x,ta.y,ta.z],cc(n,tr,nr,ir,ea))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Qn=new Y,Qo=new Fo,tr=new Y,nr=new Y,ir=new Y,ss=new Y,rs=new Y,Ts=new Y,Yr=new Y,ea=new Y,ta=new Y,As=new Y;function cc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){As.fromArray(t,r);const a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=e.dot(As),c=n.dot(As),u=i.dot(As);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Jt=new Y,na=new it;let Nb=0;class Ti extends Ss{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jd,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)na.fromBufferAttribute(this,n),na.applyMatrix3(e),this.setXY(n,na.x,na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array),r=Cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class pg extends Ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class mg extends Ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class en extends Ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Ub=new Fo,Kr=new Y,uc=new Y;class Sl{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ub.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const n=Kr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Kr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(uc)),this.expandByPoint(Kr.copy(e.center).sub(uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ob=0;const qn=new Bt,fc=new rn,sr=new Y,Fn=new Fo,Zr=new Fo,sn=new Y;class fn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mb(e)?mg:pg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,i){return qn.makeTranslation(e,n,i),this.applyMatrix4(qn),this}scale(e,n,i){return qn.makeScale(e,n,i),this.applyMatrix4(qn),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Fn.min,Zr.min),Fn.expandByPoint(sn),sn.addVectors(Fn.max,Zr.max),Fn.expandByPoint(sn)):(Fn.expandByPoint(Zr.min),Fn.expandByPoint(Zr.max))}Fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(e,c),sn.add(sr)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ti(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new Y,l[x]=new Y;const c=new Y,u=new Y,f=new Y,d=new it,h=new it,g=new it,v=new Y,m=new Y;function p(x,P,U){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,U),d.fromBufferAttribute(r,x),h.fromBufferAttribute(r,P),g.fromBufferAttribute(r,U),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const N=1/(h.x*g.y-g.x*h.y);isFinite(N)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(N),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(N),a[x].add(v),a[P].add(v),a[U].add(v),l[x].add(m),l[P].add(m),l[U].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,P=M.length;x<P;++x){const U=M[x],N=U.start,F=U.count;for(let ne=N,re=N+F;ne<re;ne+=3)p(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const S=new Y,y=new Y,R=new Y,T=new Y;function L(x){R.fromBufferAttribute(s,x),T.copy(R);const P=a[x];S.copy(P),S.sub(R.multiplyScalar(R.dot(P))).normalize(),y.crossVectors(T,P);const N=y.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,N)}for(let x=0,P=M.length;x<P;++x){const U=M[x],N=U.start,F=U.count;for(let ne=N,re=N+F;ne<re;ne+=3)L(e.getX(ne+0)),L(e.getX(ne+1)),L(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Ti(d,u,f)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Fb=0;class Br extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=_r,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=$c,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){tt(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){tt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==$c&&(i.blendDst=this.blendDst),this.blendEquation!==Ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ui=new Y,dc=new Y,ia=new Y,os=new Y,hc=new Y,sa=new Y,pc=new Y;class Ml{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){dc.copy(e).add(n).multiplyScalar(.5),ia.copy(n).sub(e).normalize(),os.copy(this.origin).sub(dc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(ia),a=os.dot(this.direction),l=-os.dot(ia),c=os.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dc).addScaledVector(ia,d),h}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),s=Ui.dot(Ui)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,i,s,r){hc.subVectors(n,e),sa.subVectors(i,e),pc.crossVectors(hc,sa);let o=this.direction.dot(pc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;os.subVectors(this.origin,e);const l=a*this.direction.dot(sa.crossVectors(os,sa));if(l<0)return null;const c=a*this.direction.dot(hc.cross(os));if(c<0||l+c>o)return null;const u=-a*os.dot(pc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hs extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=Ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hh=new Bt,ws=new Ml,ra=new Sl,ph=new Y,oa=new Y,aa=new Y,la=new Y,mc=new Y,ca=new Y,mh=new Y,ua=new Y;class Gt extends rn{constructor(e=new fn,n=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(mc.fromBufferAttribute(f,e),o?ca.addScaledVector(mc,u):ca.addScaledVector(mc.sub(n),u))}n.add(ca)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(ra.containsPoint(ws.origin)===!1&&(ws.intersectSphere(ra,ph)===null||ws.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(hh.copy(r).invert(),ws.copy(e.ray).applyMatrix4(hh),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ws)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,R=S;y<R;y+=3){const T=a.getX(y),L=a.getX(y+1),x=a.getX(y+2);s=fa(this,p,e,i,c,u,f,T,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);s=fa(this,o,e,i,c,u,f,M,S,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,R=S;y<R;y+=3){const T=y,L=y+1,x=y+2;s=fa(this,p,e,i,c,u,f,T,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const M=m,S=m+1,y=m+2;s=fa(this,o,e,i,c,u,f,M,S,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Bb(t,e,n,i,s,r,o,a){let l;if(e.side===Nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===gs,a),l===null)return null;ua.copy(a),ua.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ua);return c<n.near||c>n.far?null:{distance:c,point:ua.clone(),object:t}}function fa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,oa),t.getVertexPosition(l,aa),t.getVertexPosition(c,la);const u=Bb(t,e,n,i,oa,aa,la,mh);if(u){const f=new Y;ei.getBarycoord(mh,oa,aa,la,f),s&&(u.uv=ei.getInterpolatedAttribute(s,a,l,c,f,new it)),r&&(u.uv1=ei.getInterpolatedAttribute(r,a,l,c,f,new it)),o&&(u.normal=ei.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};ei.getNormal(oa,aa,la,d.normal),u.face=d,u.barycoord=f}return u}class zb extends wn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=cn,u=cn,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gc=new Y,kb=new Y,Vb=new at;class us{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=gc.subVectors(i,n).cross(kb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(gc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Vb.getNormalMatrix(e),s=this.coplanarPoint(gc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new Sl,Hb=new it(.5,.5),da=new Y;class Ef{constructor(e=new us,n=new us,i=new us,s=new us,r=new us,o=new us){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],S=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,h-u,p-g,R-M).normalize(),s[1].setComponents(c+o,h+u,p+g,R+M).normalize(),s[2].setComponents(c+a,h+f,p+v,R+S).normalize(),s[3].setComponents(c-a,h-f,p-v,R-S).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,h-d,p-m,R-y).normalize();else if(s[4].setComponents(c-l,h-d,p-m,R-y).normalize(),n===yi)s[5].setComponents(c+l,h+d,p+m,R+y).normalize();else if(n===Eo)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);const n=Hb.distanceTo(e.center);return Rs.radius=.7071067811865476+n,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(da.x=s.normal.x>0?e.max.x:e.min.x,da.y=s.normal.y>0?e.max.y:e.min.y,da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bl extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qa=new Y,el=new Y,gh=new Bt,Jr=new Ml,ha=new Sl,_c=new Y,_h=new Y;class Tf extends rn{constructor(e=new fn,n=new bl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Qa.fromBufferAttribute(n,s-1),el.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Qa.distanceTo(el);e.setAttribute("lineDistance",new en(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;gh.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=c){const p=u.getX(v),M=u.getX(v+1),S=pa(this,e,Jr,l,p,M,v);S&&n.push(S)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(h),p=pa(this,e,Jr,l,v,m,g-1);p&&n.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=c){const p=pa(this,e,Jr,l,v,v+1,v);p&&n.push(p)}if(this.isLineLoop){const v=pa(this,e,Jr,l,g-1,h,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pa(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Qa.fromBufferAttribute(a,s),el.fromBufferAttribute(a,r),n.distanceSqToSegment(Qa,el,_c,_h)>i)return;_c.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(_c);if(!(c<e.near||c>e.far))return{distance:c,point:_h.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const vh=new Y,xh=new Y;class Gb extends Tf{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)vh.fromBufferAttribute(n,s),xh.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+vh.distanceTo(xh);e.setAttribute("lineDistance",new en(i,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gg extends wn{constructor(e=[],n=Hs,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dr extends wn{constructor(e,n,i=wi,s,r,o,a=cn,l=cn,c,u=Yi,f=1){if(u!==Yi&&u!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Wb extends Dr{constructor(e,n=wi,i=Hs,s,r,o=cn,a=cn,l,c=Yi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _g extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vs extends fn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(f,2));function g(v,m,p,M,S,y,R,T,L,x,P){const U=y/L,N=R/x,F=y/2,ne=R/2,re=T/2,$=L+1,Q=x+1;let G=0,ie=0;const ye=new Y;for(let Te=0;Te<Q;Te++){const Me=Te*N-ne;for(let Se=0;Se<$;Se++){const qe=Se*U-F;ye[v]=qe*M,ye[m]=Me*S,ye[p]=re,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[m]=0,ye[p]=T>0?1:-1,u.push(ye.x,ye.y,ye.z),f.push(Se/L),f.push(1-Te/x),G+=1}}for(let Te=0;Te<x;Te++)for(let Me=0;Me<L;Me++){const Se=d+Me+$*Te,qe=d+Me+$*(Te+1),st=d+(Me+1)+$*(Te+1),et=d+(Me+1)+$*Te;l.push(Se,qe,et),l.push(qe,st,et),ie+=6}a.addGroup(h,ie,P),h+=ie,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class To extends fn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let g=0;const v=[],m=i/2;let p=0;M(),o===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new en(f,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(h,2));function M(){const y=new Y,R=new Y;let T=0;const L=(n-e)/i;for(let x=0;x<=r;x++){const P=[],U=x/r,N=U*(n-e)+e;for(let F=0;F<=s;F++){const ne=F/s,re=ne*l+a,$=Math.sin(re),Q=Math.cos(re);R.x=N*$,R.y=-U*i+m,R.z=N*Q,f.push(R.x,R.y,R.z),y.set($,L,Q).normalize(),d.push(y.x,y.y,y.z),h.push(ne,1-U),P.push(g++)}v.push(P)}for(let x=0;x<s;x++)for(let P=0;P<r;P++){const U=v[P][x],N=v[P+1][x],F=v[P+1][x+1],ne=v[P][x+1];(e>0||P!==0)&&(u.push(U,N,ne),T+=3),(n>0||P!==r-1)&&(u.push(N,F,ne),T+=3)}c.addGroup(p,T,0),p+=T}function S(y){const R=g,T=new it,L=new Y;let x=0;const P=y===!0?e:n,U=y===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*U,0),d.push(0,U,0),h.push(.5,.5),g++;const N=g;for(let F=0;F<=s;F++){const re=F/s*l+a,$=Math.cos(re),Q=Math.sin(re);L.x=P*Q,L.y=m*U,L.z=P*$,f.push(L.x,L.y,L.z),d.push(0,U,0),T.x=$*.5+.5,T.y=Q*.5*U+.5,h.push(T.x,T.y),g++}for(let F=0;F<s;F++){const ne=R+F,re=N+F;y===!0?u.push(re,re+1,ne):u.push(re+1,re,ne),x+=3}c.addGroup(p,x,y===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ao extends To{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ao(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bo extends fn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let S=0;S<c;S++){const y=S*f-r;g.push(y,-M,0),v.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,y=M+c*(p+1),R=M+1+c*(p+1),T=M+1+c*p;h.push(S,y,T),h.push(y,R,T)}this.setIndex(h),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lr extends fn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new Y,d=new Y,h=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const M=[],S=p/i,y=o+S*a,R=e*Math.cos(y),T=Math.sqrt(e*e-R*R);let L=0;p===0&&o===0?L=.5/n:p===i&&l===Math.PI&&(L=-.5/n);for(let x=0;x<=n;x++){const P=x/n,U=s+P*r;f.x=-T*Math.cos(U),f.y=R,f.z=T*Math.sin(U),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(P+L,1-S),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<n;M++){const S=u[p][M+1],y=u[p][M],R=u[p+1][M],T=u[p+1][M+1];(p!==0||o>0)&&h.push(S,y,T),(p!==i-1||l<Math.PI)&&h.push(y,R,T)}this.setIndex(h),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ir(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(yh(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(yh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Mn(t){const e={};for(let n=0;n<t.length;n++){const i=Ir(t[n]);for(const s in i)e[s]=i[s]}return e}function yh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Xb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const qb={clone:Ir,merge:Mn};var $b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$b,this.fragmentShader=Yb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=Xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new dt().setHex(s.value);break;case"v2":this.uniforms[i].value=new it().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[i].value=new kt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new at().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Kb extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jr extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zb extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ab,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jb extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xg extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class yg extends xg{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const vc=new Bt,Sh=new Y,Mh=new Y;class jb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sh),Mh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Mh),n.updateMatrixWorld(),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Eo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ma=new Y,ga=new Ki,di=new Y;class Sg extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ma,ga,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,di.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ma,ga,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const as=new Y,bh=new it,Eh=new it;class zn extends Sg{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nu*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,n){return this.getViewBounds(e,bh,Eh),n.subVectors(Eh,bh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Af extends Sg{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Qb extends jb{constructor(){super(new Af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eE extends xg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Qb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const rr=-90,or=1;class tE extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zn(rr,or,e,n);s.layers=this.layers,this.add(s);const r=new zn(rr,or,e,n);r.layers=this.layers,this.add(r);const o=new zn(rr,or,e,n);o.layers=this.layers,this.add(o);const a=new zn(rr,or,e,n);a.layers=this.layers,this.add(a);const l=new zn(rr,or,e,n);l.layers=this.layers,this.add(l);const c=new zn(rr,or,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nE extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Th=new Bt;class Mg{constructor(e,n,i=0,s=1/0){this.ray=new Ml(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new bf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):yt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Th.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(e,n=!0,i=[]){return Uu(e,this,i,n),i.sort(Ah),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Uu(e[s],this,i,n);return i.sort(Ah),i}}function Ah(t,e){return t.distance-e.distance}function Uu(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)Uu(r[o],e,n,!0)}}class wh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(pt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lf=class Lf{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Lf.prototype.isMatrix2=!0;let Rh=Lf;class bg extends Gb{constructor(e=10,n=10,i=4473924,s=8947848){i=new dt(i),s=new dt(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,h=0,g=-a;d<=n;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=d===r?i:s;v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3}const u=new fn;u.setAttribute("position",new en(l,3)),u.setAttribute("color",new en(c,3));const f=new bl({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class iE extends Ss{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){tt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ch(t,e,n,i){const s=sE(i);switch(n){case ag:return t*e;case cg:return t*e/s.components*s.byteLength;case _f:return t*e/s.components*s.byteLength;case Gs:return t*e*2/s.components*s.byteLength;case vf:return t*e*2/s.components*s.byteLength;case lg:return t*e*3/s.components*s.byteLength;case ni:return t*e*4/s.components*s.byteLength;case xf:return t*e*4/s.components*s.byteLength;case Ra:case Ca:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Da:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case su:case ou:return Math.max(t,16)*Math.max(e,8)/4;case iu:case ru:return Math.max(t,8)*Math.max(e,8)/2;case au:case lu:case uu:case fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cu:case Ya:case du:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case mu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case gu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case _u:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case vu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case yu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Su:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Tu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case wu:case Ru:case Cu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Pu:case Du:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ka:case Lu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sE(t){switch(t){case kn:case ig:return{byteLength:1,components:1};case Mo:case sg:case $i:return{byteLength:2,components:1};case mf:case gf:return{byteLength:2,components:4};case wi:case pf:case xi:return{byteLength:4,components:1};case rg:case og:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function rE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const v=f[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var oE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
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
#endif`,lE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dE=`#ifdef USE_AOMAP
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
#endif`,hE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pE=`#ifdef USE_BATCHING
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
#endif`,mE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xE=`#ifdef USE_IRIDESCENCE
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
#endif`,yE=`#ifdef USE_BUMPMAP
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
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,RE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,CE=`#define PI 3.141592653589793
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
} // validated`,PE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DE=`vec3 transformedNormal = objectNormal;
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
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,GE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$E=`#ifdef USE_GRADIENTMAP
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
}`,YE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jE=`#ifdef USE_ENVMAP
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
#endif`,QE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iT=`PhysicalMaterial material;
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
#endif`,sT=`uniform sampler2D dfgLUT;
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
}`,rT=`
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
#endif`,oT=`#if defined( RE_IndirectDiffuse )
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
#endif`,aT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,cT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gT=`#if defined( USE_POINTS_UV )
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
#endif`,_T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ST=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MT=`#ifdef USE_MORPHTARGETS
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
#endif`,bT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ET=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
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
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VT=`#ifdef USE_ROUGHNESSMAP
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
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XT=`float getShadowMask() {
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
}`,qT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,YT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KT=`#ifdef USE_SKINNING
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
#endif`,ZT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eA=`#ifdef USE_TRANSMISSION
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
#endif`,tA=`#ifdef USE_TRANSMISSION
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
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
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
}`,hA=`#if DEPTH_PACKING == 3200
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
}`,pA=`#define DISTANCE
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
}`,mA=`#define DISTANCE
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
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_A=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`uniform float scale;
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
}`,xA=`uniform vec3 diffuse;
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
}`,yA=`#include <common>
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
}`,SA=`uniform vec3 diffuse;
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
}`,MA=`#define LAMBERT
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
}`,bA=`#define LAMBERT
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
}`,EA=`#define MATCAP
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
}`,TA=`#define MATCAP
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
}`,AA=`#define NORMAL
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
}`,wA=`#define NORMAL
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
}`,RA=`#define PHONG
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
}`,CA=`#define PHONG
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
}`,PA=`#define STANDARD
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
}`,DA=`#define STANDARD
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
}`,LA=`#define TOON
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
}`,IA=`#define TOON
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
}`,NA=`uniform float size;
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
}`,UA=`uniform vec3 diffuse;
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
}`,OA=`#include <common>
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
}`,FA=`uniform vec3 color;
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
}`,BA=`uniform float rotation;
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
}`,zA=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:oE,alphahash_pars_fragment:aE,alphamap_fragment:lE,alphamap_pars_fragment:cE,alphatest_fragment:uE,alphatest_pars_fragment:fE,aomap_fragment:dE,aomap_pars_fragment:hE,batching_pars_vertex:pE,batching_vertex:mE,begin_vertex:gE,beginnormal_vertex:_E,bsdfs:vE,iridescence_fragment:xE,bumpmap_pars_fragment:yE,clipping_planes_fragment:SE,clipping_planes_pars_fragment:ME,clipping_planes_pars_vertex:bE,clipping_planes_vertex:EE,color_fragment:TE,color_pars_fragment:AE,color_pars_vertex:wE,color_vertex:RE,common:CE,cube_uv_reflection_fragment:PE,defaultnormal_vertex:DE,displacementmap_pars_vertex:LE,displacementmap_vertex:IE,emissivemap_fragment:NE,emissivemap_pars_fragment:UE,colorspace_fragment:OE,colorspace_pars_fragment:FE,envmap_fragment:BE,envmap_common_pars_fragment:zE,envmap_pars_fragment:kE,envmap_pars_vertex:VE,envmap_physical_pars_fragment:jE,envmap_vertex:HE,fog_vertex:GE,fog_pars_vertex:WE,fog_fragment:XE,fog_pars_fragment:qE,gradientmap_pars_fragment:$E,lightmap_pars_fragment:YE,lights_lambert_fragment:KE,lights_lambert_pars_fragment:ZE,lights_pars_begin:JE,lights_toon_fragment:QE,lights_toon_pars_fragment:eT,lights_phong_fragment:tT,lights_phong_pars_fragment:nT,lights_physical_fragment:iT,lights_physical_pars_fragment:sT,lights_fragment_begin:rT,lights_fragment_maps:oT,lights_fragment_end:aT,lightprobes_pars_fragment:lT,logdepthbuf_fragment:cT,logdepthbuf_pars_fragment:uT,logdepthbuf_pars_vertex:fT,logdepthbuf_vertex:dT,map_fragment:hT,map_pars_fragment:pT,map_particle_fragment:mT,map_particle_pars_fragment:gT,metalnessmap_fragment:_T,metalnessmap_pars_fragment:vT,morphinstance_vertex:xT,morphcolor_vertex:yT,morphnormal_vertex:ST,morphtarget_pars_vertex:MT,morphtarget_vertex:bT,normal_fragment_begin:ET,normal_fragment_maps:TT,normal_pars_fragment:AT,normal_pars_vertex:wT,normal_vertex:RT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:DT,clearcoat_pars_fragment:LT,iridescence_pars_fragment:IT,opaque_fragment:NT,packing:UT,premultiplied_alpha_fragment:OT,project_vertex:FT,dithering_fragment:BT,dithering_pars_fragment:zT,roughnessmap_fragment:kT,roughnessmap_pars_fragment:VT,shadowmap_pars_fragment:HT,shadowmap_pars_vertex:GT,shadowmap_vertex:WT,shadowmask_pars_fragment:XT,skinbase_vertex:qT,skinning_pars_vertex:$T,skinning_vertex:YT,skinnormal_vertex:KT,specularmap_fragment:ZT,specularmap_pars_fragment:JT,tonemapping_fragment:jT,tonemapping_pars_fragment:QT,transmission_fragment:eA,transmission_pars_fragment:tA,uv_pars_fragment:nA,uv_pars_vertex:iA,uv_vertex:sA,worldpos_vertex:rA,background_vert:oA,background_frag:aA,backgroundCube_vert:lA,backgroundCube_frag:cA,cube_vert:uA,cube_frag:fA,depth_vert:dA,depth_frag:hA,distance_vert:pA,distance_frag:mA,equirect_vert:gA,equirect_frag:_A,linedashed_vert:vA,linedashed_frag:xA,meshbasic_vert:yA,meshbasic_frag:SA,meshlambert_vert:MA,meshlambert_frag:bA,meshmatcap_vert:EA,meshmatcap_frag:TA,meshnormal_vert:AA,meshnormal_frag:wA,meshphong_vert:RA,meshphong_frag:CA,meshphysical_vert:PA,meshphysical_frag:DA,meshtoon_vert:LA,meshtoon_frag:IA,points_vert:NA,points_frag:UA,shadow_vert:OA,shadow_frag:FA,sprite_vert:BA,sprite_frag:zA},Fe={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},_i={basic:{uniforms:Mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Mn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Mn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new dt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Mn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Mn([Fe.points,Fe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Mn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Mn([Fe.common,Fe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Mn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Mn([Fe.sprite,Fe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Mn([Fe.common,Fe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Mn([Fe.lights,Fe.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};_i.physical={uniforms:Mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const _a={r:0,b:0,g:0},kA=new Bt,Tg=new at;Tg.set(-1,0,0,0,1,0,0,0,1);function VA(t,e,n,i,s,r){const o=new dt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function h(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){const y=M.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(M){let S=!1;const y=h(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(M,S){const y=h(S);y&&(y.isCubeTexture||y.mapping===yl)?(c===void 0&&(c=new Gt(new vs(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Ir(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kA.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tg),c.material.toneMapped=gt.getTransfer(y.colorSpace)!==At,(u!==y||f!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Gt(new Bo(2,2),new Ri({name:"BackgroundMaterial",uniforms:Ir(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==At,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(_a,vg(t)),n.buffers.color.setClear(_a.r,_a.g,_a.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:p}}function HA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(N,F,ne,re,$){let Q=!1;const G=f(N,re,ne,F);r!==G&&(r=G,c(r.object)),Q=h(N,re,ne,$),Q&&g(N,re,ne,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(N,F,ne,re),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function u(N){return t.deleteVertexArray(N)}function f(N,F,ne,re){const $=re.wireframe===!0;let Q=i[F.id];Q===void 0&&(Q={},i[F.id]=Q);const G=N.isInstancedMesh===!0?N.id:0;let ie=Q[G];ie===void 0&&(ie={},Q[G]=ie);let ye=ie[ne.id];ye===void 0&&(ye={},ie[ne.id]=ye);let Te=ye[$];return Te===void 0&&(Te=d(l()),ye[$]=Te),Te}function d(N){const F=[],ne=[],re=[];for(let $=0;$<n;$++)F[$]=0,ne[$]=0,re[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ne,attributeDivisors:re,object:N,attributes:{},index:null}}function h(N,F,ne,re){const $=r.attributes,Q=F.attributes;let G=0;const ie=ne.getAttributes();for(const ye in ie)if(ie[ye].location>=0){const Me=$[ye];let Se=Q[ye];if(Se===void 0&&(ye==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),ye==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),Me===void 0||Me.attribute!==Se||Se&&Me.data!==Se.data)return!0;G++}return r.attributesNum!==G||r.index!==re}function g(N,F,ne,re){const $={},Q=F.attributes;let G=0;const ie=ne.getAttributes();for(const ye in ie)if(ie[ye].location>=0){let Me=Q[ye];Me===void 0&&(ye==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),ye==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor));const Se={};Se.attribute=Me,Me&&Me.data&&(Se.data=Me.data),$[ye]=Se,G++}r.attributes=$,r.attributesNum=G,r.index=re}function v(){const N=r.newAttributes;for(let F=0,ne=N.length;F<ne;F++)N[F]=0}function m(N){p(N,0)}function p(N,F){const ne=r.newAttributes,re=r.enabledAttributes,$=r.attributeDivisors;ne[N]=1,re[N]===0&&(t.enableVertexAttribArray(N),re[N]=1),$[N]!==F&&(t.vertexAttribDivisor(N,F),$[N]=F)}function M(){const N=r.newAttributes,F=r.enabledAttributes;for(let ne=0,re=F.length;ne<re;ne++)F[ne]!==N[ne]&&(t.disableVertexAttribArray(ne),F[ne]=0)}function S(N,F,ne,re,$,Q,G){G===!0?t.vertexAttribIPointer(N,F,ne,$,Q):t.vertexAttribPointer(N,F,ne,re,$,Q)}function y(N,F,ne,re){v();const $=re.attributes,Q=ne.getAttributes(),G=F.defaultAttributeValues;for(const ie in Q){const ye=Q[ie];if(ye.location>=0){let Te=$[ie];if(Te===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(Te=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(Te=N.instanceColor)),Te!==void 0){const Me=Te.normalized,Se=Te.itemSize,qe=e.get(Te);if(qe===void 0)continue;const st=qe.buffer,et=qe.type,Z=qe.bytesPerElement,B=et===t.INT||et===t.UNSIGNED_INT||Te.gpuType===pf;if(Te.isInterleavedBufferAttribute){const K=Te.data,W=K.stride,J=Te.offset;if(K.isInstancedInterleavedBuffer){for(let le=0;le<ye.locationSize;le++)p(ye.location+le,K.meshPerAttribute);N.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<ye.locationSize;le++)m(ye.location+le);t.bindBuffer(t.ARRAY_BUFFER,st);for(let le=0;le<ye.locationSize;le++)S(ye.location+le,Se/ye.locationSize,et,Me,W*Z,(J+Se/ye.locationSize*le)*Z,B)}else{if(Te.isInstancedBufferAttribute){for(let K=0;K<ye.locationSize;K++)p(ye.location+K,Te.meshPerAttribute);N.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let K=0;K<ye.locationSize;K++)m(ye.location+K);t.bindBuffer(t.ARRAY_BUFFER,st);for(let K=0;K<ye.locationSize;K++)S(ye.location+K,Se/ye.locationSize,et,Me,Se*Z,Se/ye.locationSize*K*Z,B)}}else if(G!==void 0){const Me=G[ie];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(ye.location,Me);break;case 3:t.vertexAttrib3fv(ye.location,Me);break;case 4:t.vertexAttrib4fv(ye.location,Me);break;default:t.vertexAttrib1fv(ye.location,Me)}}}}M()}function R(){P();for(const N in i){const F=i[N];for(const ne in F){const re=F[ne];for(const $ in re){const Q=re[$];for(const G in Q)u(Q[G].object),delete Q[G];delete re[$]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;const F=i[N.id];for(const ne in F){const re=F[ne];for(const $ in re){const Q=re[$];for(const G in Q)u(Q[G].object),delete Q[G];delete re[$]}}delete i[N.id]}function L(N){for(const F in i){const ne=i[F];for(const re in ne){const $=ne[re];if($[N.id]===void 0)continue;const Q=$[N.id];for(const G in Q)u(Q[G].object),delete Q[G];delete $[N.id]}}}function x(N){for(const F in i){const ne=i[F],re=N.isInstancedMesh===!0?N.id:0,$=ne[re];if($!==void 0){for(const Q in $){const G=$[Q];for(const ie in G)u(G[ie].object),delete G[ie];delete $[Q]}delete ne[re],Object.keys(ne).length===0&&delete i[F]}}}function P(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function GA(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function WA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==ni&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const x=L===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==kn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==xi&&!x)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(tt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,maxSamples:R,samples:T}}function XA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new us,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,S=M*4;let y=p.clippingState||null;l.value=y,y=u(g,d,S,h);for(let R=0;R!==S;++R)y[R]=n[R];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=h;S!==v;++S,y+=4)o.copy(f[S]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const ps=4,Ph=[.125,.215,.35,.446,.526,.582],Ds=20,qA=256,Qr=new Af,Dh=new dt;let xc=null,yc=0,Sc=0,Mc=!1;const $A=new Y;class Lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=$A}=r;xc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,yc,Sc),this._renderer.xr.enabled=Mc,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:$i,format:ni,colorSpace:Za,depthBuffer:!1},s=Ih(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YA(r)),this._blurMaterial=ZA(r,e,n),this._ggxMaterial=KA(r,e,n)}return s}_compileMaterial(e){const n=new Gt(new fn,e);this._renderer.compile(n,Qr)}_sceneToCubeUV(e,n,i,s,r){const l=new zn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Dh),f.toneMapping=bi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new vs,new hs({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Dh),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const R=this._cubeSize;ar(s,y*R,S>2?R:0,R,R),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Hs||e.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ar(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-ps?i-g+ps:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-n,ar(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,Qr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ar(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,Qr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ds-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ds;m>Ds&&tt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);const p=[];let M=0;for(let L=0;L<Ds;++L){const x=L/v,P=Math.exp(-x*x/2);p.push(P),L===0?M+=P:L<m&&(M+=2*P)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const y=this._sizeLods[s],R=3*y*(s>S-ps?s-S+ps:0),T=4*(this._cubeSize-y);ar(n,R,T,3*y,2*y),l.setRenderTarget(n),l.render(f,Qr)}}function YA(t){const e=[],n=[],i=[];let s=t;const r=t-ps+1+Ph.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-ps?l=Ph[o-t+ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*h),S=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let T=0;T<h;T++){const L=T%3*2/3-1,x=T>2?0:-1,P=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];M.set(P,v*g*T),S.set(d,m*g*T);const U=[T,T,T,T,T,T];y.set(U,p*g*T)}const R=new fn;R.setAttribute("position",new Ti(M,v)),R.setAttribute("uv",new Ti(S,m)),R.setAttribute("faceIndex",new Ti(y,p)),i.push(new Gt(R,null)),s>ps&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ih(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function KA(t,e,n){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function ZA(t,e,n){const i=new Float32Array(Ds),s=new Y(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:El(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Nh(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Uh(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}class Ag extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gg(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vs(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:Hi});r.uniforms.tEquirect.value=n;const o=new Gt(s,r),a=n.minFilter;return n.minFilter===Ns&&(n.minFilter=vn),new tE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function JA(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Xl||h===ql)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new Ag(g.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,g=h===Xl||h===ql,v=h===Hs||h===Pr;if(g||v){let m=n.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Lh(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Lh(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===Xl?d.mapping=Hs:h===ql&&(d.mapping=Pr),d}function l(d){let h=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function jA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&vr("WebGLRenderer: "+i+" extension not supported."),s}}}function QA(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(h!==null){const M=h.array;v=h.version;for(let S=0,y=M.length;S<y;S+=3){const R=M[S+0],T=M[S+1],L=M[S+2];d.push(R,T,T,L,L,R)}}else{const M=g.array;v=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const R=S+0,T=S+1,L=S+2;d.push(R,T,T,L,L,R)}}const m=new(g.count>=65535?mg:pg)(d,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ew(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*o),n.update(d,i,1)}function c(f,d,h){h!==0&&(t.drawElementsInstanced(i,d,r,f*o,h),n.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,h);let v=0;for(let m=0;m<h;m++)v+=d[m];n.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function tw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function nw(t,e,n){const i=new WeakMap,s=new kt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let U=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",U)};var h=U;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*T*4*f),x=new fg(L,R,T,f);x.type=xi,x.needsUpdate=!0;const P=y*4;for(let N=0;N<f;N++){const F=p[N],ne=M[N],re=S[N],$=R*T*4*N;for(let Q=0;Q<F.count;Q++){const G=Q*P;g===!0&&(s.fromBufferAttribute(F,Q),L[$+G+0]=s.x,L[$+G+1]=s.y,L[$+G+2]=s.z,L[$+G+3]=0),v===!0&&(s.fromBufferAttribute(ne,Q),L[$+G+4]=s.x,L[$+G+5]=s.y,L[$+G+6]=s.z,L[$+G+7]=0),m===!0&&(s.fromBufferAttribute(re,Q),L[$+G+8]=s.x,L[$+G+9]=s.y,L[$+G+10]=s.z,L[$+G+11]=re.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new it(R,T)},i.set(a,d),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function iw(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const sw={[Km]:"LINEAR_TONE_MAPPING",[Zm]:"REINHARD_TONE_MAPPING",[Jm]:"CINEON_TONE_MAPPING",[jm]:"ACES_FILMIC_TONE_MAPPING",[eg]:"AGX_TONE_MAPPING",[tg]:"NEUTRAL_TONE_MAPPING",[Qm]:"CUSTOM_TONE_MAPPING"};function rw(t,e,n,i,s,r){const o=new Ei(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Dr(e,n):void 0}),a=new Ei(e,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}),l=new fn;l.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new en([0,2,0,0,2,0],2));const c=new Kb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Gt(l,c),f=new Af(-1,1,1,-1,0,1);let d=null,h=null,g=!1,v,m=null,p=[],M=!1;this.setSize=function(S,y){o.setSize(S,y),a.setSize(S,y);for(let R=0;R<p.length;R++){const T=p[R];T.setSize&&T.setSize(S,y)}},this.setEffects=function(S){p=S,M=p.length>0&&p[0].isRenderPass===!0;const y=o.width,R=o.height;for(let T=0;T<p.length;T++){const L=p[T];L.setSize&&L.setSize(y,R)}},this.begin=function(S,y){if(g||S.toneMapping===bi&&p.length===0)return!1;if(m=y,y!==null){const R=y.width,T=y.height;(o.width!==R||o.height!==T)&&this.setSize(R,T)}return M===!1&&S.setRenderTarget(o),v=S.toneMapping,S.toneMapping=bi,!0},this.hasRenderPass=function(){return M},this.end=function(S,y){S.toneMapping=v,g=!0;let R=o,T=a;for(let L=0;L<p.length;L++){const x=p[L];if(x.enabled!==!1&&(x.render(S,T,R,y),x.needsSwap!==!1)){const P=R;R=T,T=P}}if(d!==S.outputColorSpace||h!==S.toneMapping){d=S.outputColorSpace,h=S.toneMapping,c.defines={},gt.getTransfer(d)===At&&(c.defines.SRGB_TRANSFER="");const L=sw[h];L&&(c.defines[L]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=R.texture,S.setRenderTarget(m),S.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const wg=new wn,Ou=new Dr(1,1),Rg=new fg,Cg=new Ab,Pg=new gg,Oh=[],Fh=[],Bh=new Float32Array(16),zh=new Float32Array(9),kh=new Float32Array(4);function zr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Oh[s];if(r===void 0&&(r=new Float32Array(s),Oh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function tn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function nn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tl(t,e){let n=Fh[e];n===void 0&&(n=new Int32Array(e),Fh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2fv(this.addr,e),nn(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;t.uniform3fv(this.addr,e),nn(n,e)}}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4fv(this.addr,e),nn(n,e)}}function uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;kh.set(i),t.uniformMatrix2fv(this.addr,!1,kh),nn(n,i)}}function fw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;zh.set(i),t.uniformMatrix3fv(this.addr,!1,zh),nn(n,i)}}function dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;Bh.set(i),t.uniformMatrix4fv(this.addr,!1,Bh),nn(n,i)}}function hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2iv(this.addr,e),nn(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;t.uniform3iv(this.addr,e),nn(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4iv(this.addr,e),nn(n,e)}}function _w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2uiv(this.addr,e),nn(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;t.uniform3uiv(this.addr,e),nn(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4uiv(this.addr,e),nn(n,e)}}function Sw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Ou.compareFunction=n.isReversedDepthBuffer()?Sf:yf,r=Ou):r=wg,n.setTexture2D(e||r,s)}function Mw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Cg,s)}function bw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Pg,s)}function Ew(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Rg,s)}function Tw(t){switch(t){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return fw;case 35676:return dw;case 5124:case 35670:return hw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return _w;case 36294:return vw;case 36295:return xw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Ew}}function Aw(t,e){t.uniform1fv(this.addr,e)}function ww(t,e){const n=zr(e,this.size,2);t.uniform2fv(this.addr,n)}function Rw(t,e){const n=zr(e,this.size,3);t.uniform3fv(this.addr,n)}function Cw(t,e){const n=zr(e,this.size,4);t.uniform4fv(this.addr,n)}function Pw(t,e){const n=zr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Dw(t,e){const n=zr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Lw(t,e){const n=zr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Iw(t,e){t.uniform1iv(this.addr,e)}function Nw(t,e){t.uniform2iv(this.addr,e)}function Uw(t,e){t.uniform3iv(this.addr,e)}function Ow(t,e){t.uniform4iv(this.addr,e)}function Fw(t,e){t.uniform1uiv(this.addr,e)}function Bw(t,e){t.uniform2uiv(this.addr,e)}function zw(t,e){t.uniform3uiv(this.addr,e)}function kw(t,e){t.uniform4uiv(this.addr,e)}function Vw(t,e,n){const i=this.cache,s=e.length,r=Tl(n,s);tn(i,r)||(t.uniform1iv(this.addr,r),nn(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Ou:o=wg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function Hw(t,e,n){const i=this.cache,s=e.length,r=Tl(n,s);tn(i,r)||(t.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Cg,r[o])}function Gw(t,e,n){const i=this.cache,s=e.length,r=Tl(n,s);tn(i,r)||(t.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Pg,r[o])}function Ww(t,e,n){const i=this.cache,s=e.length,r=Tl(n,s);tn(i,r)||(t.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Rg,r[o])}function Xw(t){switch(t){case 5126:return Aw;case 35664:return ww;case 35665:return Rw;case 35666:return Cw;case 35674:return Pw;case 35675:return Dw;case 35676:return Lw;case 5124:case 35670:return Iw;case 35667:case 35671:return Nw;case 35668:case 35672:return Uw;case 35669:case 35673:return Ow;case 5125:return Fw;case 36294:return Bw;case 36295:return zw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Vw;case 35679:case 36299:case 36307:return Hw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Ww}}class qw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Tw(n.type)}}class $w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Xw(n.type)}}class Yw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function Vh(t,e){t.seq.push(e),t.map[e.id]=e}function Kw(t,e,n){const i=t.name,s=i.length;for(bc.lastIndex=0;;){const r=bc.exec(i),o=bc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vh(n,c===void 0?new qw(a,t,e):new $w(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Yw(a),Vh(n,f)),n=f}}}class Ia{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Kw(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Hh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Zw=37297;let Jw=0;function jw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Gh=new at;function Qw(t){gt._getMatrix(Gh,gt.workingColorSpace,t);const e=`mat3( ${Gh.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case Ja:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Wh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+jw(t.getShaderSource(e),a)}else return r}function eR(t,e){const n=Qw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const tR={[Km]:"Linear",[Zm]:"Reinhard",[Jm]:"Cineon",[jm]:"ACESFilmic",[eg]:"AgX",[tg]:"Neutral",[Qm]:"Custom"};function nR(t,e){const n=tR[e];return n===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const va=new Y;function iR(){gt.getLuminanceCoefficients(va);const t=va.x.toFixed(4),e=va.y.toFixed(4),n=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function rR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function so(t){return t!==""}function Xh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(t){return t.replace(aR,cR)}const lR=new Map;function cR(t,e){let n=ut[e];if(n===void 0){const i=lR.get(e);if(i!==void 0)n=ut[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fu(n)}const uR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(t){return t.replace(uR,fR)}function fR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const dR={[wa]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function hR(t){return dR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pR={[Hs]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[yl]:"ENVMAP_TYPE_CUBE_UV"};function mR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":pR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const gR={[Pr]:"ENVMAP_MODE_REFRACTION"};function _R(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":gR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vR={[Ym]:"ENVMAP_BLENDING_MULTIPLY",[sb]:"ENVMAP_BLENDING_MIX",[rb]:"ENVMAP_BLENDING_ADD"};function xR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":vR[t.combine]||"ENVMAP_BLENDING_NONE"}function yR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function SR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=hR(n),c=mR(n),u=_R(n),f=xR(n),d=yR(n),h=sR(n),g=rR(r),v=s.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(so).join(`
`),p.length>0&&(p+=`
`)):(m=[Yh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[Yh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?ut.tonemapping_pars_fragment:"",n.toneMapping!==bi?nR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,eR("linearToOutputTexel",n.outputColorSpace),iR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(so).join(`
`)),o=Fu(o),o=Xh(o,n),o=qh(o,n),a=Fu(a),a=Xh(a,n),a=qh(a,n),o=$h(o),a=$h(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,y=M+p+a,R=Hh(s,s.VERTEX_SHADER,S),T=Hh(s,s.FRAGMENT_SHADER,y);s.attachShader(v,R),s.attachShader(v,T),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(N){if(t.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",ne=s.getShaderInfoLog(R)||"",re=s.getShaderInfoLog(T)||"",$=F.trim(),Q=ne.trim(),G=re.trim();let ie=!0,ye=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,R,T);else{const Te=Wh(s,R,"vertex"),Me=Wh(s,T,"fragment");yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+Te+`
`+Me)}else $!==""?tt("WebGLProgram: Program Info Log:",$):(Q===""||G==="")&&(ye=!1);ye&&(N.diagnostics={runnable:ie,programLog:$,vertexShader:{log:Q,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(R),s.deleteShader(T),x=new Ia(s,v),P=oR(s,v)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let P;this.getAttributes=function(){return P===void 0&&L(this),P};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(v,Zw)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let MR=0;class bR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ER(e),n.set(e,i)),i}}class ER{constructor(e){this.id=MR++,this.code=e,this.usedTimes=0}}function TR(t){return t===Gs||t===Ya||t===Ka}function AR(t,e,n,i,s,r){const o=new bf,a=new bR,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,P,U,N,F,ne){const re=N.fog,$=F.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||Q,G),ye=ie&&ie.mapping===yl?ie.image.height:null,Te=h[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&tt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Se=Me!==void 0?Me.length:0;let qe=0;$.morphAttributes.position!==void 0&&(qe=1),$.morphAttributes.normal!==void 0&&(qe=2),$.morphAttributes.color!==void 0&&(qe=3);let st,et,Z,B;if(Te){const Xe=_i[Te];st=Xe.vertexShader,et=Xe.fragmentShader}else{st=x.vertexShader,et=x.fragmentShader;const Xe=a.getVertexShaderStage(x),zt=a.getFragmentShaderStage(x);a.update(x,Xe,zt),Z=Xe.id,B=zt.id}const K=t.getRenderTarget(),W=t.state.buffers.depth.getReversed(),J=F.isInstancedMesh===!0,le=F.isBatchedMesh===!0,E=!!x.map,w=!!x.matcap,I=!!ie,z=!!x.aoMap,k=!!x.lightMap,j=!!x.bumpMap&&x.wireframe===!1,pe=!!x.normalMap,fe=!!x.displacementMap,ve=!!x.emissiveMap,ue=!!x.metalnessMap,Le=!!x.roughnessMap,D=x.anisotropy>0,ke=x.clearcoat>0,Ie=x.dispersion>0,A=x.iridescence>0,_=x.sheen>0,V=x.transmission>0,O=D&&!!x.anisotropyMap,se=ke&&!!x.clearcoatMap,Ee=ke&&!!x.clearcoatNormalMap,we=ke&&!!x.clearcoatRoughnessMap,ce=A&&!!x.iridescenceMap,de=A&&!!x.iridescenceThicknessMap,Ae=_&&!!x.sheenColorMap,Ve=_&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,Pe=!!x.specularColorMap,Je=!!x.specularIntensityMap,Qe=V&&!!x.transmissionMap,rt=V&&!!x.thicknessMap,H=!!x.gradientMap,De=!!x.alphaMap,he=x.alphaTest>0,Re=!!x.alphaHash,Ue=!!x.extensions;let be=bi;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(be=t.toneMapping);const Ye={shaderID:Te,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:et,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:B,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:le,batchingColor:le&&F._colorsTexture!==null,instancing:J,instancingColor:J&&F.instanceColor!==null,instancingMorph:J&&F.morphTexture!==null,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:E,matcap:w,envMap:I,envMapMode:I&&ie.mapping,envMapCubeUVHeight:ye,aoMap:z,lightMap:k,bumpMap:j,normalMap:pe,displacementMap:fe,emissiveMap:ve,normalMapObjectSpace:pe&&x.normalMapType===lb,normalMapTangentSpace:pe&&x.normalMapType===Iu,packedNormalMap:pe&&x.normalMapType===Iu&&TR(x.normalMap.format),metalnessMap:ue,roughnessMap:Le,anisotropy:D,anisotropyMap:O,clearcoat:ke,clearcoatMap:se,clearcoatNormalMap:Ee,clearcoatRoughnessMap:we,dispersion:Ie,iridescence:A,iridescenceMap:ce,iridescenceThicknessMap:de,sheen:_,sheenColorMap:Ae,sheenRoughnessMap:Ve,specularMap:Ce,specularColorMap:Pe,specularIntensityMap:Je,transmission:V,transmissionMap:Qe,thicknessMap:rt,gradientMap:H,opaque:x.transparent===!1&&x.blending===_r&&x.alphaToCoverage===!1,alphaMap:De,alphaTest:he,alphaHash:Re,combine:x.combine,mapUv:E&&g(x.map.channel),aoMapUv:z&&g(x.aoMap.channel),lightMapUv:k&&g(x.lightMap.channel),bumpMapUv:j&&g(x.bumpMap.channel),normalMapUv:pe&&g(x.normalMap.channel),displacementMapUv:fe&&g(x.displacementMap.channel),emissiveMapUv:ve&&g(x.emissiveMap.channel),metalnessMapUv:ue&&g(x.metalnessMap.channel),roughnessMapUv:Le&&g(x.roughnessMap.channel),anisotropyMapUv:O&&g(x.anisotropyMap.channel),clearcoatMapUv:se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&g(x.sheenRoughnessMap.channel),specularMapUv:Ce&&g(x.specularMap.channel),specularColorMapUv:Pe&&g(x.specularColorMap.channel),specularIntensityMapUv:Je&&g(x.specularIntensityMap.channel),transmissionMapUv:Qe&&g(x.transmissionMap.channel),thicknessMapUv:rt&&g(x.thicknessMap.channel),alphaMapUv:De&&g(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(pe||D),vertexNormals:!!$.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(E||De),fog:!!re,useFog:x.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||$.attributes.normal===void 0&&pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:W,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:qe,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:be,decodeVideoTexture:E&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===At,decodeVideoTextureEmissive:ve&&x.emissiveMap.isVideoTexture===!0&&gt.getTransfer(x.emissiveMap.colorSpace)===At,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Yn,flipSided:x.side===Nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&x.extensions.multiDraw===!0||le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function m(x){const P=[];if(x.shaderID?P.push(x.shaderID):(P.push(x.customVertexShaderID),P.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)P.push(U),P.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(P,x),M(P,x),P.push(t.outputColorSpace)),P.push(x.customProgramCacheKey),P.join()}function p(x,P){x.push(P.precision),x.push(P.outputColorSpace),x.push(P.envMapMode),x.push(P.envMapCubeUVHeight),x.push(P.mapUv),x.push(P.alphaMapUv),x.push(P.lightMapUv),x.push(P.aoMapUv),x.push(P.bumpMapUv),x.push(P.normalMapUv),x.push(P.displacementMapUv),x.push(P.emissiveMapUv),x.push(P.metalnessMapUv),x.push(P.roughnessMapUv),x.push(P.anisotropyMapUv),x.push(P.clearcoatMapUv),x.push(P.clearcoatNormalMapUv),x.push(P.clearcoatRoughnessMapUv),x.push(P.iridescenceMapUv),x.push(P.iridescenceThicknessMapUv),x.push(P.sheenColorMapUv),x.push(P.sheenRoughnessMapUv),x.push(P.specularMapUv),x.push(P.specularColorMapUv),x.push(P.specularIntensityMapUv),x.push(P.transmissionMapUv),x.push(P.thicknessMapUv),x.push(P.combine),x.push(P.fogExp2),x.push(P.sizeAttenuation),x.push(P.morphTargetsCount),x.push(P.morphAttributeCount),x.push(P.numDirLights),x.push(P.numPointLights),x.push(P.numSpotLights),x.push(P.numSpotLightMaps),x.push(P.numHemiLights),x.push(P.numRectAreaLights),x.push(P.numDirLightShadows),x.push(P.numPointLightShadows),x.push(P.numSpotLightShadows),x.push(P.numSpotLightShadowsWithMaps),x.push(P.numLightProbes),x.push(P.shadowMapType),x.push(P.toneMapping),x.push(P.numClippingPlanes),x.push(P.numClipIntersection),x.push(P.depthPacking)}function M(x,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){const P=h[x.type];let U;if(P){const N=_i[P];U=qb.clone(N.uniforms)}else U=x.uniforms;return U}function y(x,P){let U=u.get(P);return U!==void 0?++U.usedTimes:(U=new SR(t,P,x,s),c.push(U),u.set(P,U)),U}function R(x){if(--x.usedTimes===0){const P=c.indexOf(x);c[P]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function L(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:L}}function wR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function RR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Kh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Zh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,v,m,p){let M=t[e];return M===void 0?(M={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},t[e]=M):(M.id=d.id,M.object=d,M.geometry=h,M.material=g,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,h,g,v,m,p){const M=a(d,h,g,v,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):n.push(M)}function c(d,h,g,v,m,p){const M=a(d,h,g,v,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function u(d,h,g){n.length>1&&n.sort(d||RR),i.length>1&&i.sort(h||Kh),s.length>1&&s.sort(h||Kh),g&&(n.reverse(),i.reverse(),s.reverse())}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function CR(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Zh,t.set(i,[o])):s>=r.length?(o=new Zh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function PR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new dt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function DR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LR=0;function IR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NR(t){const e=new PR,n=DR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new Bt,o=new Bt;function a(c){let u=0,f=0,d=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,M=0,S=0,y=0,R=0,T=0,L=0;c.sort(IR);for(let P=0,U=c.length;P<U;P++){const N=c[P],F=N.color,ne=N.intensity,re=N.distance;let $=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Gs?$=N.shadow.map.texture:$=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=F.r*ne,f+=F.g*ne,d+=F.b*ne;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(N.sh.coefficients[Q],ne);L++}else if(N.isDirectionalLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,ie=n.get(N);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,i.directionalShadow[h]=ie,i.directionalShadowMap[h]=$,i.directionalShadowMatrix[h]=N.shadow.matrix,M++}i.directional[h]=Q,h++}else if(N.isSpotLight){const Q=e.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(F).multiplyScalar(ne),Q.distance=re,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,i.spot[v]=Q;const G=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,G.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[v]=G.matrix,N.castShadow){const ie=n.get(N);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=$,y++}v++}else if(N.isRectAreaLight){const Q=e.get(N);Q.color.copy(F).multiplyScalar(ne),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=Q,m++}else if(N.isPointLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){const G=N.shadow,ie=n.get(N);ie.shadowIntensity=G.intensity,ie.shadowBias=G.bias,ie.shadowNormalBias=G.normalBias,ie.shadowRadius=G.radius,ie.shadowMapSize=G.mapSize,ie.shadowCameraNear=G.camera.near,ie.shadowCameraFar=G.camera.far,i.pointShadow[g]=ie,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=N.shadow.matrix,S++}i.point[g]=Q,g++}else if(N.isHemisphereLight){const Q=e.get(N);Q.skyColor.copy(N.color).multiplyScalar(ne),Q.groundColor.copy(N.groundColor).multiplyScalar(ne),i.hemi[p]=Q,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==h||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==S||x.numSpotShadows!==y||x.numSpotMaps!==R||x.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,x.directionalLength=h,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=S,x.numSpotShadows=y,x.numSpotMaps=R,x.numLightProbes=L,i.version=LR++)}function l(c,u){let f=0,d=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(S.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(S.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Jh(t){const e=new NR(t),n=[],i=[],s=[];function r(d){f.camera=d,n.length=0,i.length=0,s.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function UR(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Jh(t),e.set(s,[a])):r>=o.length?(a=new Jh(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const OR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FR=`uniform sampler2D shadow_pass;
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
}`,BR=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],zR=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],jh=new Bt,eo=new Y,Ec=new Y;function kR(t,e,n){let i=new Ef;const s=new it,r=new it,o=new kt,a=new Zb,l=new Jb,c={},u=n.maxTextureSize,f={[gs]:Nn,[Nn]:gs,[Yn]:Yn},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:OR,fragmentShader:FR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let p=this.type;this.render=function(T,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===zM&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wa);const P=t.getRenderTarget(),U=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Hi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const ne=p!==this.type;ne&&L.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach($=>$.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,$=T.length;re<$;re++){const Q=T[re],G=Q.shadow;if(G===void 0){tt("WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ie=G.getFrameExtents();s.multiply(ie),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,G.mapSize.y=r.y));const ye=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ye,G.map===null||ne===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===io){if(Q.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ei(s.x,s.y,{format:Gs,type:$i,minFilter:vn,magFilter:vn,generateMipmaps:!1}),G.map.texture.name=Q.name+".shadowMap",G.map.depthTexture=new Dr(s.x,s.y,xi),G.map.depthTexture.name=Q.name+".shadowMapDepth",G.map.depthTexture.format=Yi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn}else Q.isPointLight?(G.map=new Ag(s.x),G.map.depthTexture=new Wb(s.x,wi)):(G.map=new Ei(s.x,s.y),G.map.depthTexture=new Dr(s.x,s.y,wi)),G.map.depthTexture.name=Q.name+".shadowMap",G.map.depthTexture.format=Yi,this.type===wa?(G.map.depthTexture.compareFunction=ye?Sf:yf,G.map.depthTexture.minFilter=vn,G.map.depthTexture.magFilter=vn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn);G.camera.updateProjectionMatrix()}const Te=G.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<Te;Me++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,Me),t.clear();else{Me===0&&(t.setRenderTarget(G.map),t.clear());const Se=G.getViewport(Me);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),F.viewport(o)}if(Q.isPointLight){const Se=G.camera,qe=G.matrix,st=Q.distance||Se.far;st!==Se.far&&(Se.far=st,Se.updateProjectionMatrix()),eo.setFromMatrixPosition(Q.matrixWorld),Se.position.copy(eo),Ec.copy(Se.position),Ec.add(BR[Me]),Se.up.copy(zR[Me]),Se.lookAt(Ec),Se.updateMatrixWorld(),qe.makeTranslation(-eo.x,-eo.y,-eo.z),jh.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),G._frustum.setFromProjectionMatrix(jh,Se.coordinateSystem,Se.reversedDepth)}else G.updateMatrices(Q);i=G.getFrustum(),y(L,x,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===io&&M(G,x),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(P,U,N)};function M(T,L){const x=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ei(s.x,s.y,{format:Gs,type:$i})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(L,null,x,d,v,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(L,null,x,h,v,null)}function S(T,L,x,P){let U=null;const N=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)U=N;else if(U=x.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const F=U.uuid,ne=L.uuid;let re=c[F];re===void 0&&(re={},c[F]=re);let $=re[ne];$===void 0&&($=U.clone(),re[ne]=$,L.addEventListener("dispose",R)),U=$}if(U.visible=L.visible,U.wireframe=L.wireframe,P===io?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:f[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const F=t.properties.get(U);F.light=x}return U}function y(T,L,x,P,U){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===io)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const ne=e.update(T),re=T.material;if(Array.isArray(re)){const $=ne.groups;for(let Q=0,G=$.length;Q<G;Q++){const ie=$[Q],ye=re[ie.materialIndex];if(ye&&ye.visible){const Te=S(T,ye,P,U);T.onBeforeShadow(t,T,L,x,ne,Te,ie),t.renderBufferDirect(x,null,ne,Te,T,ie),T.onAfterShadow(t,T,L,x,ne,Te,ie)}}}else if(re.visible){const $=S(T,re,P,U);T.onBeforeShadow(t,T,L,x,ne,$,null),t.renderBufferDirect(x,null,ne,$,T,null),T.onAfterShadow(t,T,L,x,ne,$,null)}}const F=T.children;for(let ne=0,re=F.length;ne<re;ne++)y(F[ne],L,x,P,U)}function R(T){T.target.removeEventListener("dispose",R);for(const x in c){const P=c[x],U=T.target.uuid;U in P&&(P[U].dispose(),delete P[U])}}}function VR(t,e){function n(){let H=!1;const De=new kt;let he=null;const Re=new kt(0,0,0,0);return{setMask:function(Ue){he!==Ue&&!H&&(t.colorMask(Ue,Ue,Ue,Ue),he=Ue)},setLocked:function(Ue){H=Ue},setClear:function(Ue,be,Ye,Xe,zt){zt===!0&&(Ue*=Xe,be*=Xe,Ye*=Xe),De.set(Ue,be,Ye,Xe),Re.equals(De)===!1&&(t.clearColor(Ue,be,Ye,Xe),Re.copy(De))},reset:function(){H=!1,he=null,Re.set(-1,0,0,0)}}}function i(){let H=!1,De=!1,he=null,Re=null,Ue=null;return{setReversed:function(be){if(De!==be){const Ye=e.get("EXT_clip_control");be?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),De=be;const Xe=Ue;Ue=null,this.setClear(Xe)}},getReversed:function(){return De},setTest:function(be){be?K(t.DEPTH_TEST):W(t.DEPTH_TEST)},setMask:function(be){he!==be&&!H&&(t.depthMask(be),he=be)},setFunc:function(be){if(De&&(be=vb[be]),Re!==be){switch(be){case Yc:t.depthFunc(t.NEVER);break;case Kc:t.depthFunc(t.ALWAYS);break;case Zc:t.depthFunc(t.LESS);break;case Cr:t.depthFunc(t.LEQUAL);break;case Jc:t.depthFunc(t.EQUAL);break;case jc:t.depthFunc(t.GEQUAL);break;case Qc:t.depthFunc(t.GREATER);break;case eu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=be}},setLocked:function(be){H=be},setClear:function(be){Ue!==be&&(Ue=be,De&&(be=1-be),t.clearDepth(be))},reset:function(){H=!1,he=null,Re=null,Ue=null,De=!1}}}function s(){let H=!1,De=null,he=null,Re=null,Ue=null,be=null,Ye=null,Xe=null,zt=null;return{setTest:function(Ct){H||(Ct?K(t.STENCIL_TEST):W(t.STENCIL_TEST))},setMask:function(Ct){De!==Ct&&!H&&(t.stencilMask(Ct),De=Ct)},setFunc:function(Ct,Gn,Wn){(he!==Ct||Re!==Gn||Ue!==Wn)&&(t.stencilFunc(Ct,Gn,Wn),he=Ct,Re=Gn,Ue=Wn)},setOp:function(Ct,Gn,Wn){(be!==Ct||Ye!==Gn||Xe!==Wn)&&(t.stencilOp(Ct,Gn,Wn),be=Ct,Ye=Gn,Xe=Wn)},setLocked:function(Ct){H=Ct},setClear:function(Ct){zt!==Ct&&(t.clearStencil(Ct),zt=Ct)},reset:function(){H=!1,De=null,he=null,Re=null,Ue=null,be=null,Ye=null,Xe=null,zt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],v=null,m=!1,p=null,M=null,S=null,y=null,R=null,T=null,L=null,x=new dt(0,0,0),P=0,U=!1,N=null,F=null,ne=null,re=null,$=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ie=0;const ye=t.getParameter(t.VERSION);ye.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ye)[1]),G=ie>=1):ye.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ye)[1]),G=ie>=2);let Te=null,Me={};const Se=t.getParameter(t.SCISSOR_BOX),qe=t.getParameter(t.VIEWPORT),st=new kt().fromArray(Se),et=new kt().fromArray(qe);function Z(H,De,he,Re){const Ue=new Uint8Array(4),be=t.createTexture();t.bindTexture(H,be),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<he;Ye++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(De,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,Ue):t.texImage2D(De+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ue);return be}const B={};B[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(t.DEPTH_TEST),o.setFunc(Cr),j(!1),pe($d),K(t.CULL_FACE),z(Hi);function K(H){u[H]!==!0&&(t.enable(H),u[H]=!0)}function W(H){u[H]!==!1&&(t.disable(H),u[H]=!1)}function J(H,De){return d[H]!==De?(t.bindFramebuffer(H,De),d[H]=De,H===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=De),H===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=De),!0):!1}function le(H,De){let he=g,Re=!1;if(H){he=h.get(De),he===void 0&&(he=[],h.set(De,he));const Ue=H.textures;if(he.length!==Ue.length||he[0]!==t.COLOR_ATTACHMENT0){for(let be=0,Ye=Ue.length;be<Ye;be++)he[be]=t.COLOR_ATTACHMENT0+be;he.length=Ue.length,Re=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,Re=!0);Re&&t.drawBuffers(he)}function E(H){return v!==H?(t.useProgram(H),v=H,!0):!1}const w={[Ps]:t.FUNC_ADD,[VM]:t.FUNC_SUBTRACT,[HM]:t.FUNC_REVERSE_SUBTRACT};w[GM]=t.MIN,w[WM]=t.MAX;const I={[XM]:t.ZERO,[qM]:t.ONE,[$M]:t.SRC_COLOR,[qc]:t.SRC_ALPHA,[QM]:t.SRC_ALPHA_SATURATE,[JM]:t.DST_COLOR,[KM]:t.DST_ALPHA,[YM]:t.ONE_MINUS_SRC_COLOR,[$c]:t.ONE_MINUS_SRC_ALPHA,[jM]:t.ONE_MINUS_DST_COLOR,[ZM]:t.ONE_MINUS_DST_ALPHA,[eb]:t.CONSTANT_COLOR,[tb]:t.ONE_MINUS_CONSTANT_COLOR,[nb]:t.CONSTANT_ALPHA,[ib]:t.ONE_MINUS_CONSTANT_ALPHA};function z(H,De,he,Re,Ue,be,Ye,Xe,zt,Ct){if(H===Hi){m===!0&&(W(t.BLEND),m=!1);return}if(m===!1&&(K(t.BLEND),m=!0),H!==kM){if(H!==p||Ct!==U){if((M!==Ps||R!==Ps)&&(t.blendEquation(t.FUNC_ADD),M=Ps,R=Ps),Ct)switch(H){case _r:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yd:t.blendFunc(t.ONE,t.ONE);break;case Kd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:yt("WebGLState: Invalid blending: ",H);break}else switch(H){case _r:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Kd:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zd:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",H);break}S=null,y=null,T=null,L=null,x.set(0,0,0),P=0,p=H,U=Ct}return}Ue=Ue||De,be=be||he,Ye=Ye||Re,(De!==M||Ue!==R)&&(t.blendEquationSeparate(w[De],w[Ue]),M=De,R=Ue),(he!==S||Re!==y||be!==T||Ye!==L)&&(t.blendFuncSeparate(I[he],I[Re],I[be],I[Ye]),S=he,y=Re,T=be,L=Ye),(Xe.equals(x)===!1||zt!==P)&&(t.blendColor(Xe.r,Xe.g,Xe.b,zt),x.copy(Xe),P=zt),p=H,U=!1}function k(H,De){H.side===Yn?W(t.CULL_FACE):K(t.CULL_FACE);let he=H.side===Nn;De&&(he=!he),j(he),H.blending===_r&&H.transparent===!1?z(Hi):z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Re=H.stencilWrite;a.setTest(Re),Re&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ve(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):W(t.SAMPLE_ALPHA_TO_COVERAGE)}function j(H){N!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),N=H)}function pe(H){H!==FM?(K(t.CULL_FACE),H!==F&&(H===$d?t.cullFace(t.BACK):H===BM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):W(t.CULL_FACE),F=H}function fe(H){H!==ne&&(G&&t.lineWidth(H),ne=H)}function ve(H,De,he){H?(K(t.POLYGON_OFFSET_FILL),(re!==De||$!==he)&&(re=De,$=he,o.getReversed()&&(De=-De),t.polygonOffset(De,he))):W(t.POLYGON_OFFSET_FILL)}function ue(H){H?K(t.SCISSOR_TEST):W(t.SCISSOR_TEST)}function Le(H){H===void 0&&(H=t.TEXTURE0+Q-1),Te!==H&&(t.activeTexture(H),Te=H)}function D(H,De,he){he===void 0&&(Te===null?he=t.TEXTURE0+Q-1:he=Te);let Re=Me[he];Re===void 0&&(Re={type:void 0,texture:void 0},Me[he]=Re),(Re.type!==H||Re.texture!==De)&&(Te!==he&&(t.activeTexture(he),Te=he),t.bindTexture(H,De||B[H]),Re.type=H,Re.texture=De)}function ke(){const H=Me[Te];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ie(){try{t.compressedTexImage2D(...arguments)}catch(H){yt("WebGLState:",H)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(H){yt("WebGLState:",H)}}function _(){try{t.texSubImage2D(...arguments)}catch(H){yt("WebGLState:",H)}}function V(){try{t.texSubImage3D(...arguments)}catch(H){yt("WebGLState:",H)}}function O(){try{t.compressedTexSubImage2D(...arguments)}catch(H){yt("WebGLState:",H)}}function se(){try{t.compressedTexSubImage3D(...arguments)}catch(H){yt("WebGLState:",H)}}function Ee(){try{t.texStorage2D(...arguments)}catch(H){yt("WebGLState:",H)}}function we(){try{t.texStorage3D(...arguments)}catch(H){yt("WebGLState:",H)}}function ce(){try{t.texImage2D(...arguments)}catch(H){yt("WebGLState:",H)}}function de(){try{t.texImage3D(...arguments)}catch(H){yt("WebGLState:",H)}}function Ae(H){return f[H]!==void 0?f[H]:t.getParameter(H)}function Ve(H,De){f[H]!==De&&(t.pixelStorei(H,De),f[H]=De)}function Ce(H){st.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),st.copy(H))}function Pe(H){et.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),et.copy(H))}function Je(H,De){let he=c.get(De);he===void 0&&(he=new WeakMap,c.set(De,he));let Re=he.get(H);Re===void 0&&(Re=t.getUniformBlockIndex(De,H.name),he.set(H,Re))}function Qe(H,De){const Re=c.get(De).get(H);l.get(De)!==Re&&(t.uniformBlockBinding(De,Re,H.__bindingPointIndex),l.set(De,Re))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},Te=null,Me={},d={},h=new WeakMap,g=[],v=null,m=!1,p=null,M=null,S=null,y=null,R=null,T=null,L=null,x=new dt(0,0,0),P=0,U=!1,N=null,F=null,ne=null,re=null,$=null,st.set(0,0,t.canvas.width,t.canvas.height),et.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:W,bindFramebuffer:J,drawBuffers:le,useProgram:E,setBlending:z,setMaterial:k,setFlipSided:j,setCullFace:pe,setLineWidth:fe,setPolygonOffset:ve,setScissorTest:ue,activeTexture:Le,bindTexture:D,unbindTexture:ke,compressedTexImage2D:Ie,compressedTexImage3D:A,texImage2D:ce,texImage3D:de,pixelStorei:Ve,getParameter:Ae,updateUBOMapping:Je,uniformBlockBinding:Qe,texStorage2D:Ee,texStorage3D:we,texSubImage2D:_,texSubImage3D:V,compressedTexSubImage2D:O,compressedTexSubImage3D:se,scissor:Ce,viewport:Pe,reset:rt}}function HR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return g?new OffscreenCanvas(A,_):ja("canvas")}function m(A,_,V){let O=1;const se=Ie(A);if((se.width>V||se.height>V)&&(O=V/Math.max(se.width,se.height)),O<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Ee=Math.floor(O*se.width),we=Math.floor(O*se.height);d===void 0&&(d=v(Ee,we));const ce=_?v(Ee,we):d;return ce.width=Ee,ce.height=we,ce.getContext("2d").drawImage(A,0,0,Ee,we),tt("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Ee+"x"+we+")."),ce}else return"data"in A&&tt("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){t.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,_,V,O,se,Ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let we;O&&(we=e.get("EXT_texture_norm16"),we||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=_;if(_===t.RED&&(V===t.FLOAT&&(ce=t.R32F),V===t.HALF_FLOAT&&(ce=t.R16F),V===t.UNSIGNED_BYTE&&(ce=t.R8),V===t.UNSIGNED_SHORT&&we&&(ce=we.R16_EXT),V===t.SHORT&&we&&(ce=we.R16_SNORM_EXT)),_===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ce=t.R8UI),V===t.UNSIGNED_SHORT&&(ce=t.R16UI),V===t.UNSIGNED_INT&&(ce=t.R32UI),V===t.BYTE&&(ce=t.R8I),V===t.SHORT&&(ce=t.R16I),V===t.INT&&(ce=t.R32I)),_===t.RG&&(V===t.FLOAT&&(ce=t.RG32F),V===t.HALF_FLOAT&&(ce=t.RG16F),V===t.UNSIGNED_BYTE&&(ce=t.RG8),V===t.UNSIGNED_SHORT&&we&&(ce=we.RG16_EXT),V===t.SHORT&&we&&(ce=we.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ce=t.RG8UI),V===t.UNSIGNED_SHORT&&(ce=t.RG16UI),V===t.UNSIGNED_INT&&(ce=t.RG32UI),V===t.BYTE&&(ce=t.RG8I),V===t.SHORT&&(ce=t.RG16I),V===t.INT&&(ce=t.RG32I)),_===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(ce=t.RGB8UI),V===t.UNSIGNED_SHORT&&(ce=t.RGB16UI),V===t.UNSIGNED_INT&&(ce=t.RGB32UI),V===t.BYTE&&(ce=t.RGB8I),V===t.SHORT&&(ce=t.RGB16I),V===t.INT&&(ce=t.RGB32I)),_===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(ce=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(ce=t.RGBA16UI),V===t.UNSIGNED_INT&&(ce=t.RGBA32UI),V===t.BYTE&&(ce=t.RGBA8I),V===t.SHORT&&(ce=t.RGBA16I),V===t.INT&&(ce=t.RGBA32I)),_===t.RGB&&(V===t.UNSIGNED_SHORT&&we&&(ce=we.RGB16_EXT),V===t.SHORT&&we&&(ce=we.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(ce=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(ce=t.R11F_G11F_B10F)),_===t.RGBA){const de=Ee?Ja:gt.getTransfer(se);V===t.FLOAT&&(ce=t.RGBA32F),V===t.HALF_FLOAT&&(ce=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ce=de===At?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&we&&(ce=we.RGBA16_EXT),V===t.SHORT&&we&&(ce=we.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function R(A,_){let V;return A?_===null||_===wi||_===bo?V=t.DEPTH24_STENCIL8:_===xi?V=t.DEPTH32F_STENCIL8:_===Mo&&(V=t.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wi||_===bo?V=t.DEPTH_COMPONENT24:_===xi?V=t.DEPTH_COMPONENT32F:_===Mo&&(V=t.DEPTH_COMPONENT16),V}function T(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==vn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function L(A){const _=A.target;_.removeEventListener("dispose",L),P(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(A){const _=A.target;_.removeEventListener("dispose",x),N(_)}function P(A){const _=i.get(A);if(_.__webglInit===void 0)return;const V=A.source,O=h.get(V);if(O){const se=O[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(A),Object.keys(O).length===0&&h.delete(V)}i.remove(A)}function U(A){const _=i.get(A);t.deleteTexture(_.__webglTexture);const V=A.source,O=h.get(V);delete O[_.__cacheKey],o.memory.textures--}function N(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let se=0;se<_.__webglFramebuffer[O].length;se++)t.deleteFramebuffer(_.__webglFramebuffer[O][se]);else t.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)t.deleteFramebuffer(_.__webglFramebuffer[O]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const V=A.textures;for(let O=0,se=V.length;O<se;O++){const Ee=i.get(V[O]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(V[O])}i.remove(A)}let F=0;function ne(){F=0}function re(){return F}function $(A){F=A}function Q(){const A=F;return A>=s.maxTextures&&tt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function G(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ie(A,_){const V=i.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const O=A.image;if(O===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{W(V,A,_);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+_)}function ye(A,_){const V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){W(V,A,_);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+_)}function Te(A,_){const V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){W(V,A,_);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+_)}function Me(A,_){const V=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){J(V,A,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+_)}const Se={[tu]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[nu]:t.MIRRORED_REPEAT},qe={[cn]:t.NEAREST,[ob]:t.NEAREST_MIPMAP_NEAREST,[Ko]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[$l]:t.LINEAR_MIPMAP_NEAREST,[Ns]:t.LINEAR_MIPMAP_LINEAR},st={[cb]:t.NEVER,[pb]:t.ALWAYS,[ub]:t.LESS,[yf]:t.LEQUAL,[fb]:t.EQUAL,[Sf]:t.GEQUAL,[db]:t.GREATER,[hb]:t.NOTEQUAL};function et(A,_){if(_.type===xi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===vn||_.magFilter===$l||_.magFilter===Ko||_.magFilter===Ns||_.minFilter===vn||_.minFilter===$l||_.minFilter===Ko||_.minFilter===Ns)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Se[_.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Se[_.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Se[_.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,qe[_.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,qe[_.minFilter]),_.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,st[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==Ko&&_.minFilter!==Ns||_.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(A,_){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",L));const O=_.source;let se=h.get(O);se===void 0&&(se={},h.set(O,se));const Ee=G(_);if(Ee!==A.__cacheKey){se[Ee]===void 0&&(se[Ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[Ee].usedTimes++;const we=se[A.__cacheKey];we!==void 0&&(se[A.__cacheKey].usedTimes--,we.usedTimes===0&&U(_)),A.__cacheKey=Ee,A.__webglTexture=se[Ee].texture}return V}function B(A,_,V){return Math.floor(Math.floor(A/V)/_)}function K(A,_,V,O){const Ee=A.updateRanges;if(Ee.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,V,O,_.data);else{Ee.sort((Ve,Ce)=>Ve.start-Ce.start);let we=0;for(let Ve=1;Ve<Ee.length;Ve++){const Ce=Ee[we],Pe=Ee[Ve],Je=Ce.start+Ce.count,Qe=B(Pe.start,_.width,4),rt=B(Ce.start,_.width,4);Pe.start<=Je+1&&Qe===rt&&B(Pe.start+Pe.count-1,_.width,4)===Qe?Ce.count=Math.max(Ce.count,Pe.start+Pe.count-Ce.start):(++we,Ee[we]=Pe)}Ee.length=we+1;const ce=n.getParameter(t.UNPACK_ROW_LENGTH),de=n.getParameter(t.UNPACK_SKIP_PIXELS),Ae=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ve=0,Ce=Ee.length;Ve<Ce;Ve++){const Pe=Ee[Ve],Je=Math.floor(Pe.start/4),Qe=Math.ceil(Pe.count/4),rt=Je%_.width,H=Math.floor(Je/_.width),De=Qe,he=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,rt,H,De,he,V,O,_.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ce),n.pixelStorei(t.UNPACK_SKIP_PIXELS,de),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function W(A,_,V){let O=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=t.TEXTURE_3D);const se=Z(A,_),Ee=_.source;n.bindTexture(O,A.__webglTexture,t.TEXTURE0+V);const we=i.get(Ee);if(Ee.version!==we.__version||se===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const he=gt.getPrimaries(gt.workingColorSpace),Re=_.colorSpace===ds?null:gt.getPrimaries(_.colorSpace),Ue=_.colorSpace===ds||he===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let de=m(_.image,!1,s.maxTextureSize);de=ke(_,de);const Ae=r.convert(_.format,_.colorSpace),Ve=r.convert(_.type);let Ce=y(_.internalFormat,Ae,Ve,_.normalized,_.colorSpace,_.isVideoTexture);et(O,_);let Pe;const Je=_.mipmaps,Qe=_.isVideoTexture!==!0,rt=we.__version===void 0||se===!0,H=Ee.dataReady,De=T(_,de);if(_.isDepthTexture)Ce=R(_.format===Us,_.type),rt&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,Ce,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Ce,de.width,de.height,0,Ae,Ve,null));else if(_.isDataTexture)if(Je.length>0){Qe&&rt&&n.texStorage2D(t.TEXTURE_2D,De,Ce,Je[0].width,Je[0].height);for(let he=0,Re=Je.length;he<Re;he++)Pe=Je[he],Qe?H&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Pe.width,Pe.height,Ae,Ve,Pe.data):n.texImage2D(t.TEXTURE_2D,he,Ce,Pe.width,Pe.height,0,Ae,Ve,Pe.data);_.generateMipmaps=!1}else Qe?(rt&&n.texStorage2D(t.TEXTURE_2D,De,Ce,de.width,de.height),H&&K(_,de,Ae,Ve)):n.texImage2D(t.TEXTURE_2D,0,Ce,de.width,de.height,0,Ae,Ve,de.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Qe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ce,Je[0].width,Je[0].height,de.depth);for(let he=0,Re=Je.length;he<Re;he++)if(Pe=Je[he],_.format!==ni)if(Ae!==null)if(Qe){if(H)if(_.layerUpdates.size>0){const Ue=Ch(Pe.width,Pe.height,_.format,_.type);for(const be of _.layerUpdates){const Ye=Pe.data.subarray(be*Ue/Pe.data.BYTES_PER_ELEMENT,(be+1)*Ue/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,be,Pe.width,Pe.height,1,Ae,Ye)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Pe.width,Pe.height,de.depth,Ae,Pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,Ce,Pe.width,Pe.height,de.depth,0,Pe.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?H&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Pe.width,Pe.height,de.depth,Ae,Ve,Pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,Ce,Pe.width,Pe.height,de.depth,0,Ae,Ve,Pe.data)}else{Qe&&rt&&n.texStorage2D(t.TEXTURE_2D,De,Ce,Je[0].width,Je[0].height);for(let he=0,Re=Je.length;he<Re;he++)Pe=Je[he],_.format!==ni?Ae!==null?Qe?H&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,Pe.width,Pe.height,Ae,Pe.data):n.compressedTexImage2D(t.TEXTURE_2D,he,Ce,Pe.width,Pe.height,0,Pe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?H&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Pe.width,Pe.height,Ae,Ve,Pe.data):n.texImage2D(t.TEXTURE_2D,he,Ce,Pe.width,Pe.height,0,Ae,Ve,Pe.data)}else if(_.isDataArrayTexture)if(Qe){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ce,de.width,de.height,de.depth),H)if(_.layerUpdates.size>0){const he=Ch(de.width,de.height,_.format,_.type);for(const Re of _.layerUpdates){const Ue=de.data.subarray(Re*he/de.data.BYTES_PER_ELEMENT,(Re+1)*he/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Re,de.width,de.height,1,Ae,Ve,Ue)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ae,Ve,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,Ae,Ve,de.data);else if(_.isData3DTexture)Qe?(rt&&n.texStorage3D(t.TEXTURE_3D,De,Ce,de.width,de.height,de.depth),H&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ae,Ve,de.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,Ae,Ve,de.data);else if(_.isFramebufferTexture){if(rt)if(Qe)n.texStorage2D(t.TEXTURE_2D,De,Ce,de.width,de.height);else{let he=de.width,Re=de.height;for(let Ue=0;Ue<De;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,Ce,he,Re,0,Ae,Ve,null),he>>=1,Re>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const he=t.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),de.parentNode!==he){he.appendChild(de),f.add(_),he.onpaint=Re=>{const Ue=Re.changedElements;for(const be of f)Ue.includes(be.image)&&(be.needsUpdate=!0)},he.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,de);else{const Ue=t.RGBA,be=t.RGBA,Ye=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ue,be,Ye,de)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Je.length>0){if(Qe&&rt){const he=Ie(Je[0]);n.texStorage2D(t.TEXTURE_2D,De,Ce,he.width,he.height)}for(let he=0,Re=Je.length;he<Re;he++)Pe=Je[he],Qe?H&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ae,Ve,Pe):n.texImage2D(t.TEXTURE_2D,he,Ce,Ae,Ve,Pe);_.generateMipmaps=!1}else if(Qe){if(rt){const he=Ie(de);n.texStorage2D(t.TEXTURE_2D,De,Ce,he.width,he.height)}H&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Ve,de)}else n.texImage2D(t.TEXTURE_2D,0,Ce,Ae,Ve,de);p(_)&&M(O),we.__version=Ee.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function J(A,_,V){if(_.image.length!==6)return;const O=Z(A,_),se=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+V);const Ee=i.get(se);if(se.version!==Ee.__version||O===!0){n.activeTexture(t.TEXTURE0+V);const we=gt.getPrimaries(gt.workingColorSpace),ce=_.colorSpace===ds?null:gt.getPrimaries(_.colorSpace),de=_.colorSpace===ds||we===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,Ve=_.image[0]&&_.image[0].isDataTexture,Ce=[];for(let be=0;be<6;be++)!Ae&&!Ve?Ce[be]=m(_.image[be],!0,s.maxCubemapSize):Ce[be]=Ve?_.image[be].image:_.image[be],Ce[be]=ke(_,Ce[be]);const Pe=Ce[0],Je=r.convert(_.format,_.colorSpace),Qe=r.convert(_.type),rt=y(_.internalFormat,Je,Qe,_.normalized,_.colorSpace),H=_.isVideoTexture!==!0,De=Ee.__version===void 0||O===!0,he=se.dataReady;let Re=T(_,Pe);et(t.TEXTURE_CUBE_MAP,_);let Ue;if(Ae){H&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,rt,Pe.width,Pe.height);for(let be=0;be<6;be++){Ue=Ce[be].mipmaps;for(let Ye=0;Ye<Ue.length;Ye++){const Xe=Ue[Ye];_.format!==ni?Je!==null?H?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,Xe.width,Xe.height,Je,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,rt,Xe.width,Xe.height,0,Xe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,Xe.width,Xe.height,Je,Qe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,rt,Xe.width,Xe.height,0,Je,Qe,Xe.data)}}}else{if(Ue=_.mipmaps,H&&De){Ue.length>0&&Re++;const be=Ie(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,rt,be.width,be.height)}for(let be=0;be<6;be++)if(Ve){H?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ce[be].width,Ce[be].height,Je,Qe,Ce[be].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,rt,Ce[be].width,Ce[be].height,0,Je,Qe,Ce[be].data);for(let Ye=0;Ye<Ue.length;Ye++){const zt=Ue[Ye].image[be].image;H?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,zt.width,zt.height,Je,Qe,zt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,rt,zt.width,zt.height,0,Je,Qe,zt.data)}}else{H?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Je,Qe,Ce[be]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,rt,Je,Qe,Ce[be]);for(let Ye=0;Ye<Ue.length;Ye++){const Xe=Ue[Ye];H?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,Je,Qe,Xe.image[be]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,rt,Je,Qe,Xe.image[be])}}}p(_)&&M(t.TEXTURE_CUBE_MAP),Ee.__version=se.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function le(A,_,V,O,se,Ee){const we=r.convert(V.format,V.colorSpace),ce=r.convert(V.type),de=y(V.internalFormat,we,ce,V.normalized,V.colorSpace),Ae=i.get(_),Ve=i.get(V);if(Ve.__renderTarget=_,!Ae.__hasExternalTextures){const Ce=Math.max(1,_.width>>Ee),Pe=Math.max(1,_.height>>Ee);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,Ee,de,Ce,Pe,_.depth,0,we,ce,null):n.texImage2D(se,Ee,de,Ce,Pe,0,we,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Le(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,se,Ve.__webglTexture,0,ue(_)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,O,se,Ve.__webglTexture,Ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function E(A,_,V){if(t.bindRenderbuffer(t.RENDERBUFFER,A),_.depthBuffer){const O=_.depthTexture,se=O&&O.isDepthTexture?O.type:null,Ee=R(_.stencilBuffer,se),we=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Le(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue(_),Ee,_.width,_.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue(_),Ee,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,A)}else{const O=_.textures;for(let se=0;se<O.length;se++){const Ee=O[se],we=r.convert(Ee.format,Ee.colorSpace),ce=r.convert(Ee.type),de=y(Ee.internalFormat,we,ce,Ee.normalized,Ee.colorSpace);Le(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue(_),de,_.width,_.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue(_),de,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,de,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function w(A,_,V){const O=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const se=i.get(_.depthTexture);if(se.__renderTarget=_,(!se.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),O){if(se.__webglInit===void 0&&(se.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),et(t.TEXTURE_CUBE_MAP,_.depthTexture);const Ae=r.convert(_.depthTexture.format),Ve=r.convert(_.depthTexture.type);let Ce;_.depthTexture.format===Yi?Ce=t.DEPTH_COMPONENT24:_.depthTexture.format===Us&&(Ce=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ce,_.width,_.height,0,Ae,Ve,null)}}else ie(_.depthTexture,0);const Ee=se.__webglTexture,we=ue(_),ce=O?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,de=_.depthTexture.format===Us?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Yi)Le(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ce,Ee,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,de,ce,Ee,0);else if(_.depthTexture.format===Us)Le(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ce,Ee,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,de,ce,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function I(A){const _=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const O=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",se)};O.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=O}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let O=0;O<6;O++)w(_.__webglFramebuffer[O],A,O);else{const O=A.texture.mipmaps;O&&O.length>0?w(_.__webglFramebuffer[0],A,0):w(_.__webglFramebuffer,A,0)}else if(V){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=t.createRenderbuffer(),E(_.__webglDepthbuffer[O],A,!1);else{const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=_.__webglDepthbuffer[O];t.bindRenderbuffer(t.RENDERBUFFER,Ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Ee)}}else{const O=A.texture.mipmaps;if(O&&O.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),E(_.__webglDepthbuffer,A,!1);else{const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Ee)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function z(A,_,V){const O=i.get(A);_!==void 0&&le(O.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&I(A)}function k(A){const _=A.texture,V=i.get(A),O=i.get(_);A.addEventListener("dispose",x);const se=A.textures,Ee=A.isWebGLCubeRenderTarget===!0,we=se.length>1;if(we||(O.__webglTexture===void 0&&(O.__webglTexture=t.createTexture()),O.__version=_.version,o.memory.textures++),Ee){V.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[ce]=[];for(let de=0;de<_.mipmaps.length;de++)V.__webglFramebuffer[ce][de]=t.createFramebuffer()}else V.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)V.__webglFramebuffer[ce]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(we)for(let ce=0,de=se.length;ce<de;ce++){const Ae=i.get(se[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Le(A)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ce=0;ce<se.length;ce++){const de=se[ce];V.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ce]);const Ae=r.convert(de.format,de.colorSpace),Ve=r.convert(de.type),Ce=y(de.internalFormat,Ae,Ve,de.normalized,de.colorSpace,A.isXRRenderTarget===!0),Pe=ue(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Ce,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,V.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),E(V.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Ee){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),et(t.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)le(V.__webglFramebuffer[ce][de],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else le(V.__webglFramebuffer[ce],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(_)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let ce=0,de=se.length;ce<de;ce++){const Ae=se[ce],Ve=i.get(Ae);let Ce=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,Ve.__webglTexture),et(Ce,Ae),le(V.__webglFramebuffer,A,Ae,t.COLOR_ATTACHMENT0+ce,Ce,0),p(Ae)&&M(Ce)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,O.__webglTexture),et(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)le(V.__webglFramebuffer[de],A,_,t.COLOR_ATTACHMENT0,ce,de);else le(V.__webglFramebuffer,A,_,t.COLOR_ATTACHMENT0,ce,0);p(_)&&M(ce),n.unbindTexture()}A.depthBuffer&&I(A)}function j(A){const _=A.textures;for(let V=0,O=_.length;V<O;V++){const se=_[V];if(p(se)){const Ee=S(A),we=i.get(se).__webglTexture;n.bindTexture(Ee,we),M(Ee),n.unbindTexture()}}}const pe=[],fe=[];function ve(A){if(A.samples>0){if(Le(A)===!1){const _=A.textures,V=A.width,O=A.height;let se=t.COLOR_BUFFER_BIT;const Ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(A),ce=_.length>1;if(ce)for(let Ae=0;Ae<_.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const de=A.texture.mipmaps;de&&de.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const Ve=i.get(_[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,V,O,0,0,V,O,se,t.NEAREST),l===!0&&(pe.length=0,fe.length=0,pe.push(t.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&A.resolveDepthBuffer===!1&&(pe.push(Ee),fe.push(Ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,fe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<_.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const Ve=i.get(_[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ue(A){return Math.min(s.maxSamples,A.samples)}function Le(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(A){const _=o.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function ke(A,_){const V=A.colorSpace,O=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Za&&V!==ds&&(gt.getTransfer(V)===At?(O!==ni||se!==kn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",V)),_}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=$,this.setTexture2D=ie,this.setTexture2DArray=ye,this.setTexture3D=Te,this.setTextureCube=Me,this.rebindTextures=z,this.setupRenderTarget=k,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function GR(t,e){function n(i,s=ds){let r;const o=gt.getTransfer(s);if(i===kn)return t.UNSIGNED_BYTE;if(i===mf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===gf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===og)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ig)return t.BYTE;if(i===sg)return t.SHORT;if(i===Mo)return t.UNSIGNED_SHORT;if(i===pf)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===$i)return t.HALF_FLOAT;if(i===ag)return t.ALPHA;if(i===lg)return t.RGB;if(i===ni)return t.RGBA;if(i===Yi)return t.DEPTH_COMPONENT;if(i===Us)return t.DEPTH_STENCIL;if(i===cg)return t.RED;if(i===_f)return t.RED_INTEGER;if(i===Gs)return t.RG;if(i===vf)return t.RG_INTEGER;if(i===xf)return t.RGBA_INTEGER;if(i===Ra||i===Ca||i===Pa||i===Da)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===iu||i===su||i===ru||i===ou)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===iu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===su)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ru)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ou)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===au||i===lu||i===cu||i===uu||i===fu||i===Ya||i===du)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===au||i===lu)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===uu)return r.COMPRESSED_R11_EAC;if(i===fu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ya)return r.COMPRESSED_RG11_EAC;if(i===du)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hu||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===yu||i===Su||i===Mu||i===bu||i===Eu||i===Tu||i===Au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_u)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Su)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tu)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Au)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wu||i===Ru||i===Cu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===wu)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ru)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pu||i===Du||i===Ka||i===Lu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Du)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const WR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XR=`
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

}`;class qR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new _g(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ri({vertexShader:WR,fragmentShader:XR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gt(new Bo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $R extends Ss{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",m=new qR,p={},M=n.getContextAttributes();let S=null,y=null;const R=[],T=[],L=new it;let x=null;const P=new zn;P.viewport=new kt;const U=new zn;U.viewport=new kt;const N=[P,U],F=new nE;let ne=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let B=R[Z];return B===void 0&&(B=new ec,R[Z]=B),B.getTargetRaySpace()},this.getControllerGrip=function(Z){let B=R[Z];return B===void 0&&(B=new ec,R[Z]=B),B.getGripSpace()},this.getHand=function(Z){let B=R[Z];return B===void 0&&(B=new ec,R[Z]=B),B.getHandSpace()};function $(Z){const B=T.indexOf(Z.inputSource);if(B===-1)return;const K=R[B];K!==void 0&&(K.update(Z.inputSource,Z.frame,c||o),K.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Q(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",G);for(let Z=0;Z<R.length;Z++){const B=T[Z];B!==null&&(T[Z]=null,R[Z].disconnect(B))}ne=null,re=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(S),h=null,d=null,f=null,s=null,y=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,W=null,J=null;M.depth&&(J=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=M.stencil?Us:Yi,W=M.stencil?bo:wi);const le={colorFormat:n.RGBA8,depthFormat:J,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ei(d.textureWidth,d.textureHeight,{format:ni,type:kn,depthTexture:new Dr(d.textureWidth,d.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const K={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,K),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Ei(h.framebufferWidth,h.framebufferHeight,{format:ni,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Z){for(let B=0;B<Z.removed.length;B++){const K=Z.removed[B],W=T.indexOf(K);W>=0&&(T[W]=null,R[W].disconnect(K))}for(let B=0;B<Z.added.length;B++){const K=Z.added[B];let W=T.indexOf(K);if(W===-1){for(let le=0;le<R.length;le++)if(le>=T.length){T.push(K),W=le;break}else if(T[le]===null){T[le]=K,W=le;break}if(W===-1)break}const J=R[W];J&&J.connect(K)}}const ie=new Y,ye=new Y;function Te(Z,B,K){ie.setFromMatrixPosition(B.matrixWorld),ye.setFromMatrixPosition(K.matrixWorld);const W=ie.distanceTo(ye),J=B.projectionMatrix.elements,le=K.projectionMatrix.elements,E=J[14]/(J[10]-1),w=J[14]/(J[10]+1),I=(J[9]+1)/J[5],z=(J[9]-1)/J[5],k=(J[8]-1)/J[0],j=(le[8]+1)/le[0],pe=E*k,fe=E*j,ve=W/(-k+j),ue=ve*-k;if(B.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ue),Z.translateZ(ve),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),J[10]===-1)Z.projectionMatrix.copy(B.projectionMatrix),Z.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const Le=E+ve,D=w+ve,ke=pe-ue,Ie=fe+(W-ue),A=I*w/D*Le,_=z*w/D*Le;Z.projectionMatrix.makePerspective(ke,Ie,A,_,Le,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Me(Z,B){B===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(B.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let B=Z.near,K=Z.far;m.texture!==null&&(m.depthNear>0&&(B=m.depthNear),m.depthFar>0&&(K=m.depthFar)),F.near=U.near=P.near=B,F.far=U.far=P.far=K,(ne!==F.near||re!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),ne=F.near,re=F.far),F.layers.mask=Z.layers.mask|6,P.layers.mask=F.layers.mask&-5,U.layers.mask=F.layers.mask&-3;const W=Z.parent,J=F.cameras;Me(F,W);for(let le=0;le<J.length;le++)Me(J[le],W);J.length===2?Te(F,P,U):F.projectionMatrix.copy(P.projectionMatrix),Se(Z,F,W)};function Se(Z,B,K){K===null?Z.matrix.copy(B.matrixWorld):(Z.matrix.copy(K.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(B.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(B.projectionMatrix),Z.projectionMatrixInverse.copy(B.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Nu*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return p[Z]};let qe=null;function st(Z,B){if(u=B.getViewerPose(c||o),g=B,u!==null){const K=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let W=!1;K.length!==F.cameras.length&&(F.cameras.length=0,W=!0);for(let w=0;w<K.length;w++){const I=K[w];let z=null;if(h!==null)z=h.getViewport(I);else{const j=f.getViewSubImage(d,I);z=j.viewport,w===0&&(e.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(y))}let k=N[w];k===void 0&&(k=new zn,k.layers.enable(w),k.viewport=new kt,N[w]=k),k.matrix.fromArray(I.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(I.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(z.x,z.y,z.width,z.height),w===0&&(F.matrix.copy(k.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),W===!0&&F.cameras.push(k)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const w=f.getDepthInformation(K[0]);w&&w.isValid&&w.texture&&m.init(w,s.renderState)}if(J&&J.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let w=0;w<K.length;w++){const I=K[w].camera;if(I){let z=p[I];z||(z=new _g,p[I]=z);const k=f.getCameraImage(I);z.sourceTexture=k}}}}for(let K=0;K<R.length;K++){const W=T[K],J=R[K];W!==null&&J!==void 0&&J.update(W,B,c||o)}qe&&qe(Z,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),g=null}const et=new Eg;et.setAnimationLoop(st),this.setAnimationLoop=function(Z){qe=Z},this.dispose=function(){}}}const YR=new Bt,Dg=new at;Dg.set(-1,0,0,0,1,0,0,0,1);function KR(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,S,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(YR.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dg),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,R){const T=R.program;i.uniformBlockBinding(y,T)}function c(y,R){let T=s[y.id];T===void 0&&(m(y),T=u(y),s[y.id]=T,y.addEventListener("dispose",M));const L=R.program;i.updateUBOMapping(y,L);const x=e.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function u(y){const R=f();y.__bindingPointIndex=R;const T=t.createBuffer(),L=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,L,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,R,T),T}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const R=s[y.id],T=y.uniforms,L=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,R);for(let x=0,P=T.length;x<P;x++){const U=T[x];if(Array.isArray(U))for(let N=0,F=U.length;N<F;N++)h(U[N],x,N,L);else h(U,x,0,L)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,R,T,L){if(v(y,R,T,L)===!0){const x=y.__offset,P=y.value;if(Array.isArray(P)){let U=0;for(let N=0;N<P.length;N++){const F=P[N],ne=p(F);g(F,y.__data,U),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(U+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(P,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function g(y,R,T){typeof y=="number"||typeof y=="boolean"?R[0]=y:y.isMatrix3?(R[0]=y.elements[0],R[1]=y.elements[1],R[2]=y.elements[2],R[3]=0,R[4]=y.elements[3],R[5]=y.elements[4],R[6]=y.elements[5],R[7]=0,R[8]=y.elements[6],R[9]=y.elements[7],R[10]=y.elements[8],R[11]=0):ArrayBuffer.isView(y)?R.set(new y.constructor(y.buffer,y.byteOffset,R.length)):y.toArray(R,T)}function v(y,R,T,L){const x=y.value,P=R+"_"+T;if(L[P]===void 0)return typeof x=="number"||typeof x=="boolean"?L[P]=x:ArrayBuffer.isView(x)?L[P]=x.slice():L[P]=x.clone(),!0;{const U=L[P];if(typeof x=="number"||typeof x=="boolean"){if(U!==x)return L[P]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(U.equals(x)===!1)return U.copy(x),!0}}return!1}function m(y){const R=y.uniforms;let T=0;const L=16;for(let P=0,U=R.length;P<U;P++){const N=Array.isArray(R[P])?R[P]:[R[P]];for(let F=0,ne=N.length;F<ne;F++){const re=N[F],$=Array.isArray(re.value)?re.value:[re.value];for(let Q=0,G=$.length;Q<G;Q++){const ie=$[Q],ye=p(ie),Te=T%L,Me=Te%ye.boundary,Se=Te+Me;T+=Me,Se!==0&&L-Se<ye.storage&&(T+=L-Se),re.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=T,T+=ye.storage}}}const x=T%L;return x>0&&(T+=L-x),y.__size=T,y.__cache={},this}function p(y){const R={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(R.boundary=4,R.storage=4):y.isVector2?(R.boundary=8,R.storage=8):y.isVector3||y.isColor?(R.boundary=16,R.storage=12):y.isVector4?(R.boundary=16,R.storage=16):y.isMatrix3?(R.boundary=48,R.storage=48):y.isMatrix4?(R.boundary=64,R.storage=64):y.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(R.boundary=16,R.storage=y.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",y),R}function M(y){const R=y.target;R.removeEventListener("dispose",M);const T=o.indexOf(R.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function S(){for(const y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}const JR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function jR(){return hi===null&&(hi=new zb(JR,16,16,Gs,$i),hi.name="DFG_LUT",hi.minFilter=vn,hi.magFilter=vn,hi.wrapS=ki,hi.wrapT=ki,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class Lg{constructor(e={}){const{canvas:n=gb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=kn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=h,m=new Set([xf,vf,_f]),p=new Set([kn,wi,Mo,bo,mf,gf]),M=new Uint32Array(4),S=new Int32Array(4),y=new Y;let R=null,T=null;const L=[],x=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let N=!1,F=null,ne=null,re=null,$=null;this._outputColorSpace=$n;let Q=0,G=0,ie=null,ye=-1,Te=null;const Me=new kt,Se=new kt;let qe=null;const st=new dt(0);let et=0,Z=n.width,B=n.height,K=1,W=null,J=null;const le=new kt(0,0,Z,B),E=new kt(0,0,Z,B);let w=!1;const I=new Ef;let z=!1,k=!1;const j=new Bt,pe=new Y,fe=new kt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Le(){return ie===null?K:1}let D=i;function ke(b,q){return n.getContext(b,q)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hf}`),n.addEventListener("webglcontextlost",zt,!1),n.addEventListener("webglcontextrestored",Ct,!1),n.addEventListener("webglcontextcreationerror",Gn,!1),D===null){const q="webgl2";if(D=ke(q,b),D===null)throw ke(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw yt("WebGLRenderer: "+b.message),b}let Ie,A,_,V,O,se,Ee,we,ce,de,Ae,Ve,Ce,Pe,Je,Qe,rt,H,De,he,Re,Ue,be;function Ye(){Ie=new jA(D),Ie.init(),Re=new GR(D,Ie),A=new WA(D,Ie,e,Re),_=new VR(D,Ie),A.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),ne=D.createFramebuffer(),re=D.createFramebuffer(),$=D.createFramebuffer(),V=new tw(D),O=new wR,se=new HR(D,Ie,_,O,A,Re,V),Ee=new JA(U),we=new rE(D),Ue=new HA(D,we),ce=new QA(D,we,V,Ue),de=new iw(D,ce,we,Ue,V),H=new nw(D,A,se),Je=new XA(O),Ae=new AR(U,Ee,Ie,A,Ue,Je),Ve=new KR(U,O),Ce=new CR,Pe=new UR(Ie),rt=new VA(U,Ee,_,de,g,l),Qe=new kR(U,de,A),be=new ZR(D,V,A,_),De=new GA(D,Ie,V),he=new ew(D,Ie,V),V.programs=Ae.programs,U.capabilities=A,U.extensions=Ie,U.properties=O,U.renderLists=Ce,U.shadowMap=Qe,U.state=_,U.info=V}Ye(),v!==kn&&(P=new rw(v,n.width,n.height,a,s,r));const Xe=new $R(U,D);this.xr=Xe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(Z,B,!1))},this.getSize=function(b){return b.set(Z,B)},this.setSize=function(b,q,oe=!0){if(Xe.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,B=q,n.width=Math.floor(b*K),n.height=Math.floor(q*K),oe===!0&&(n.style.width=b+"px",n.style.height=q+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(Z*K,B*K).floor()},this.setDrawingBufferSize=function(b,q,oe){Z=b,B=q,K=oe,n.width=Math.floor(b*oe),n.height=Math.floor(q*oe),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(v===kn){yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Me)},this.getViewport=function(b){return b.copy(le)},this.setViewport=function(b,q,oe,ee){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,q,oe,ee),_.viewport(Me.copy(le).multiplyScalar(K).round())},this.getScissor=function(b){return b.copy(E)},this.setScissor=function(b,q,oe,ee){b.isVector4?E.set(b.x,b.y,b.z,b.w):E.set(b,q,oe,ee),_.scissor(Se.copy(E).multiplyScalar(K).round())},this.getScissorTest=function(){return w},this.setScissorTest=function(b){_.setScissorTest(w=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,oe=!0){let ee=0;if(b){let te=!1;if(ie!==null){const Oe=ie.texture.format;te=m.has(Oe)}if(te){const Oe=ie.texture.type,He=p.has(Oe),Ne=rt.getClearColor(),$e=rt.getClearAlpha(),Ke=Ne.r,ot=Ne.g,ze=Ne.b;He?(M[0]=Ke,M[1]=ot,M[2]=ze,M[3]=$e,D.clearBufferuiv(D.COLOR,0,M)):(S[0]=Ke,S[1]=ot,S[2]=ze,S[3]=$e,D.clearBufferiv(D.COLOR,0,S))}else ee|=D.COLOR_BUFFER_BIT}q&&(ee|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ee|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&D.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){n.removeEventListener("webglcontextlost",zt,!1),n.removeEventListener("webglcontextrestored",Ct,!1),n.removeEventListener("webglcontextcreationerror",Gn,!1),rt.dispose(),Ce.dispose(),Pe.dispose(),O.dispose(),Ee.dispose(),de.dispose(),Ue.dispose(),be.dispose(),Ae.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",ct),Xe.removeEventListener("sessionend",vt),xt.stop()};function zt(b){b.preventDefault(),th("WebGLRenderer: Context Lost."),N=!0}function Ct(){th("WebGLRenderer: Context Restored."),N=!1;const b=V.autoReset,q=Qe.enabled,oe=Qe.autoUpdate,ee=Qe.needsUpdate,te=Qe.type;Ye(),V.autoReset=b,Qe.enabled=q,Qe.autoUpdate=oe,Qe.needsUpdate=ee,Qe.type=te}function Gn(b){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Wn(b){const q=b.target;q.removeEventListener("dispose",Wn),Al(q)}function Al(b){me(b),O.remove(b)}function me(b){const q=O.get(b).programs;q!==void 0&&(q.forEach(function(oe){Ae.releaseProgram(oe)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,oe,ee,te,Oe){q===null&&(q=ve);const He=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ne=ko(b,q,oe,ee,te);_.setMaterial(ee,He);let $e=oe.index,Ke=1;if(ee.wireframe===!0){if($e=ce.getWireframeAttribute(oe),$e===void 0)return;Ke=2}const ot=oe.drawRange,ze=oe.attributes.position;let je=ot.start*Ke,Pt=(ot.start+ot.count)*Ke;Oe!==null&&(je=Math.max(je,Oe.start*Ke),Pt=Math.min(Pt,(Oe.start+Oe.count)*Ke)),$e!==null?(je=Math.max(je,0),Pt=Math.min(Pt,$e.count)):ze!=null&&(je=Math.max(je,0),Pt=Math.min(Pt,ze.count));const $t=Pt-je;if($t<0||$t===1/0)return;Ue.setup(te,ee,Ne,oe,$e);let Vt,Lt=De;if($e!==null&&(Vt=we.get($e),Lt=he,Lt.setIndex(Vt)),te.isMesh)ee.wireframe===!0?(_.setLineWidth(ee.wireframeLinewidth*Le()),Lt.setMode(D.LINES)):Lt.setMode(D.TRIANGLES);else if(te.isLine){let dn=ee.linewidth;dn===void 0&&(dn=1),_.setLineWidth(dn*Le()),te.isLineSegments?Lt.setMode(D.LINES):te.isLineLoop?Lt.setMode(D.LINE_LOOP):Lt.setMode(D.LINE_STRIP)}else te.isPoints?Lt.setMode(D.POINTS):te.isSprite&&Lt.setMode(D.TRIANGLES);if(te.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))Lt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const dn=te._multiDrawStarts,We=te._multiDrawCounts,Un=te._multiDrawCount,St=$e?we.get($e).bytesPerElement:1,Xn=O.get(ee).currentProgram.getUniforms();for(let ui=0;ui<Un;ui++)Xn.setValue(D,"_gl_DrawID",ui),Lt.render(dn[ui]/St,We[ui])}else if(te.isInstancedMesh)Lt.renderInstances(je,$t,te.count);else if(oe.isInstancedBufferGeometry){const dn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,We=Math.min(oe.instanceCount,dn);Lt.renderInstances(je,$t,We)}else Lt.render(je,$t)};function ae(b,q,oe){b.transparent===!0&&b.side===Yn&&b.forceSinglePass===!1?(b.side=Nn,b.needsUpdate=!0,ci(b,q,oe),b.side=gs,b.needsUpdate=!0,ci(b,q,oe),b.side=Yn):ci(b,q,oe)}this.compile=function(b,q,oe=null){oe===null&&(oe=b),T=Pe.get(oe),T.init(q),x.push(T),oe.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),b!==oe&&b.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),T.setupLights();const ee=new Set;return b.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let He=0;He<Oe.length;He++){const Ne=Oe[He];ae(Ne,oe,te),ee.add(Ne)}else ae(Oe,oe,te),ee.add(Oe)}),T=x.pop(),ee},this.compileAsync=function(b,q,oe=null){const ee=this.compile(b,q,oe);return new Promise(te=>{function Oe(){if(ee.forEach(function(He){O.get(He).currentProgram.isReady()&&ee.delete(He)}),ee.size===0){te(b);return}setTimeout(Oe,10)}Ie.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ze=null;function ht(b){Ze&&Ze(b)}function ct(){xt.stop()}function vt(){xt.start()}const xt=new Eg;xt.setAnimationLoop(ht),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(b){Ze=b,Xe.setAnimationLoop(b),b===null?xt.stop():xt.start()},Xe.addEventListener("sessionstart",ct),Xe.addEventListener("sessionend",vt),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(b,q);const oe=Xe.enabled===!0&&Xe.isPresenting===!0,ee=P!==null&&(ie===null||oe)&&P.begin(U,ie);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(q),q=Xe.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,q,ie),T=Pe.get(b,x.length),T.init(q),T.state.textureUnits=se.getTextureUnits(),x.push(T),j.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),I.setFromProjectionMatrix(j,yi,q.reversedDepth),k=this.localClippingEnabled,z=Je.init(this.clippingPlanes,k),R=Ce.get(b,L.length),R.init(),L.push(R),Xe.enabled===!0&&Xe.isPresenting===!0){const He=U.xr.getDepthSensingMesh();He!==null&&mt(He,q,-1/0,U.sortObjects)}mt(b,q,0,U.sortObjects),R.finish(),U.sortObjects===!0&&R.sort(W,J,q.reversedDepth),ue=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,ue&&rt.addToRenderList(R,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),z===!0&&Je.beginShadows();const te=T.state.shadowsArray;if(Qe.render(te,b,q),z===!0&&Je.endShadows(),(ee&&P.hasRenderPass())===!1){const He=R.opaque,Ne=R.transmissive;if(T.setupLights(),q.isArrayCamera){const $e=q.cameras;if(Ne.length>0)for(let Ke=0,ot=$e.length;Ke<ot;Ke++){const ze=$e[Ke];qt(He,Ne,b,ze)}ue&&rt.render(b);for(let Ke=0,ot=$e.length;Ke<ot;Ke++){const ze=$e[Ke];Xt(R,b,ze,ze.viewport)}}else Ne.length>0&&qt(He,Ne,b,q),ue&&rt.render(b),Xt(R,b,q)}ie!==null&&G===0&&(se.updateMultisampleRenderTarget(ie),se.updateRenderTargetMipmap(ie)),ee&&P.end(U),b.isScene===!0&&b.onAfterRender(U,b,q),Ue.resetDefaultState(),ye=-1,Te=null,x.pop(),x.length>0?(T=x[x.length-1],se.setTextureUnits(T.state.textureUnits),z===!0&&Je.setGlobalState(U.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?R=L[L.length-1]:R=null,F!==null&&F.renderEnd()};function mt(b,q,oe,ee){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)oe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||I.intersectsSprite(b)){ee&&fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(j);const He=de.update(b),Ne=b.material;Ne.visible&&R.push(b,He,Ne,oe,fe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||I.intersectsObject(b))){const He=de.update(b),Ne=b.material;if(ee&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),fe.copy(b.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),fe.copy(He.boundingSphere.center)),fe.applyMatrix4(b.matrixWorld).applyMatrix4(j)),Array.isArray(Ne)){const $e=He.groups;for(let Ke=0,ot=$e.length;Ke<ot;Ke++){const ze=$e[Ke],je=Ne[ze.materialIndex];je&&je.visible&&R.push(b,He,je,oe,fe.z,ze)}}else Ne.visible&&R.push(b,He,Ne,oe,fe.z,null)}}const Oe=b.children;for(let He=0,Ne=Oe.length;He<Ne;He++)mt(Oe[He],q,oe,ee)}function Xt(b,q,oe,ee){const{opaque:te,transmissive:Oe,transparent:He}=b;T.setupLightsView(oe),z===!0&&Je.setGlobalState(U.clippingPlanes,oe),ee&&_.viewport(Me.copy(ee)),te.length>0&&Rn(te,q,oe),Oe.length>0&&Rn(Oe,q,oe),He.length>0&&Rn(He,q,oe),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function qt(b,q,oe,ee){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ee.id]===void 0){const je=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ee.id]=new Ei(1,1,{generateMipmaps:!0,type:je?$i:kn,minFilter:Ns,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const Oe=T.state.transmissionRenderTarget[ee.id],He=ee.viewport||Me;Oe.setSize(He.z*U.transmissionResolutionScale,He.w*U.transmissionResolutionScale);const Ne=U.getRenderTarget(),$e=U.getActiveCubeFace(),Ke=U.getActiveMipmapLevel();U.setRenderTarget(Oe),U.getClearColor(st),et=U.getClearAlpha(),et<1&&U.setClearColor(16777215,.5),U.clear(),ue&&rt.render(oe);const ot=U.toneMapping;U.toneMapping=bi;const ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),T.setupLightsView(ee),z===!0&&Je.setGlobalState(U.clippingPlanes,ee),Rn(b,oe,ee),se.updateMultisampleRenderTarget(Oe),se.updateRenderTargetMipmap(Oe),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Pt=0,$t=q.length;Pt<$t;Pt++){const Vt=q[Pt],{object:Lt,geometry:dn,material:We,group:Un}=Vt;if(We.side===Yn&&Lt.layers.test(ee.layers)){const St=We.side;We.side=Nn,We.needsUpdate=!0,Ms(Lt,oe,ee,dn,We,Un),We.side=St,We.needsUpdate=!0,je=!0}}je===!0&&(se.updateMultisampleRenderTarget(Oe),se.updateRenderTargetMipmap(Oe))}U.setRenderTarget(Ne,$e,Ke),U.setClearColor(st,et),ze!==void 0&&(ee.viewport=ze),U.toneMapping=ot}function Rn(b,q,oe){const ee=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Oe=b.length;te<Oe;te++){const He=b[te],{object:Ne,geometry:$e,group:Ke}=He;let ot=He.material;ot.allowOverride===!0&&ee!==null&&(ot=ee),Ne.layers.test(oe.layers)&&Ms(Ne,q,oe,$e,ot,Ke)}}function Ms(b,q,oe,ee,te,Oe){b.onBeforeRender(U,q,oe,ee,te,Oe),b.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(U,q,oe,ee,b,Oe),te.transparent===!0&&te.side===Yn&&te.forceSinglePass===!1?(te.side=Nn,te.needsUpdate=!0,U.renderBufferDirect(oe,q,ee,te,b,Oe),te.side=gs,te.needsUpdate=!0,U.renderBufferDirect(oe,q,ee,te,b,Oe),te.side=Yn):U.renderBufferDirect(oe,q,ee,te,b,Oe),b.onAfterRender(U,q,oe,ee,te,Oe)}function ci(b,q,oe){q.isScene!==!0&&(q=ve);const ee=O.get(b),te=T.state.lights,Oe=T.state.shadowsArray,He=te.state.version,Ne=Ae.getParameters(b,te.state,Oe,q,oe,T.state.lightProbeGridArray),$e=Ae.getProgramCacheKey(Ne);let Ke=ee.programs;ee.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;const ot=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ee.envMap=Ee.get(b.envMap||ee.environment,ot),ee.envMapRotation=ee.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,Ke===void 0&&(b.addEventListener("dispose",Wn),Ke=new Map,ee.programs=Ke);let ze=Ke.get($e);if(ze!==void 0){if(ee.currentProgram===ze&&ee.lightsStateVersion===He)return Vr(b,Ne),ze}else Ne.uniforms=Ae.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,oe,Ne),b.onBeforeCompile(Ne,U),ze=Ae.acquireProgram(Ne,$e),Ke.set($e,ze),ee.uniforms=Ne.uniforms;const je=ee.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=Je.uniform),Vr(b,Ne),ee.needsLights=Ho(b),ee.lightsStateVersion=He,ee.needsLights&&(je.ambientLightColor.value=te.state.ambient,je.lightProbe.value=te.state.probe,je.directionalLights.value=te.state.directional,je.directionalLightShadows.value=te.state.directionalShadow,je.spotLights.value=te.state.spot,je.spotLightShadows.value=te.state.spotShadow,je.rectAreaLights.value=te.state.rectArea,je.ltc_1.value=te.state.rectAreaLTC1,je.ltc_2.value=te.state.rectAreaLTC2,je.pointLights.value=te.state.point,je.pointLightShadows.value=te.state.pointShadow,je.hemisphereLights.value=te.state.hemi,je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,je.spotLightMatrix.value=te.state.spotLightMatrix,je.spotLightMap.value=te.state.spotLightMap,je.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=T.state.lightProbeGridArray.length>0,ee.currentProgram=ze,ee.uniformsList=null,ze}function kr(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Ia.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Vr(b,q){const oe=O.get(b);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function zo(b,q){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(q.matrixWorld);for(let oe=0,ee=b.length;oe<ee;oe++){const te=b[oe];if(te.texture!==null&&te.boundingBox.containsPoint(y))return te}return null}function ko(b,q,oe,ee,te){q.isScene!==!0&&(q=ve),se.resetTextureUnits();const Oe=q.fog,He=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,Ne=ie===null?U.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:gt.workingColorSpace,$e=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ke=Ee.get(ee.envMap||He,$e),ot=ee.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ze=!!oe.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!oe.morphAttributes.position,Pt=!!oe.morphAttributes.normal,$t=!!oe.morphAttributes.color;let Vt=bi;ee.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Vt=U.toneMapping);const Lt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,dn=Lt!==void 0?Lt.length:0,We=O.get(ee),Un=T.state.lights;if(z===!0&&(k===!0||b!==Te)){const Ot=b===Te&&ee.id===ye;Je.setState(ee,b,Ot)}let St=!1;ee.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Un.state.version||We.outputColorSpace!==Ne||te.isBatchedMesh&&We.batching===!1||!te.isBatchedMesh&&We.batching===!0||te.isBatchedMesh&&We.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&We.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&We.instancing===!1||!te.isInstancedMesh&&We.instancing===!0||te.isSkinnedMesh&&We.skinning===!1||!te.isSkinnedMesh&&We.skinning===!0||te.isInstancedMesh&&We.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&We.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&We.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&We.instancingMorph===!1&&te.morphTexture!==null||We.envMap!==Ke||ee.fog===!0&&We.fog!==Oe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Je.numPlanes||We.numIntersection!==Je.numIntersection)||We.vertexAlphas!==ot||We.vertexTangents!==ze||We.morphTargets!==je||We.morphNormals!==Pt||We.morphColors!==$t||We.toneMapping!==Vt||We.morphTargetsCount!==dn||!!We.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,We.__version=ee.version);let Xn=We.currentProgram;St===!0&&(Xn=ci(ee,q,te),F&&ee.isNodeMaterial&&F.onUpdateProgram(ee,Xn,We));let ui=!1,ji=!1,Ws=!1;const It=Xn.getUniforms(),Yt=We.uniforms;if(_.useProgram(Xn.program)&&(ui=!0,ji=!0,Ws=!0),ee.id!==ye&&(ye=ee.id,ji=!0),We.needsLights){const Ot=zo(T.state.lightProbeGridArray,te);We.lightProbeGrid!==Ot&&(We.lightProbeGrid=Ot,ji=!0)}if(ui||Te!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),It.setValue(D,"projectionMatrix",b.projectionMatrix),It.setValue(D,"viewMatrix",b.matrixWorldInverse);const es=It.map.cameraPosition;es!==void 0&&es.setValue(D,pe.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&It.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&It.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),Te!==b&&(Te=b,ji=!0,Ws=!0)}if(We.needsLights&&(Un.state.directionalShadowMap.length>0&&It.setValue(D,"directionalShadowMap",Un.state.directionalShadowMap,se),Un.state.spotShadowMap.length>0&&It.setValue(D,"spotShadowMap",Un.state.spotShadowMap,se),Un.state.pointShadowMap.length>0&&It.setValue(D,"pointShadowMap",Un.state.pointShadowMap,se)),te.isSkinnedMesh){It.setOptional(D,te,"bindMatrix"),It.setOptional(D,te,"bindMatrixInverse");const Ot=te.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),It.setValue(D,"boneTexture",Ot.boneTexture,se))}te.isBatchedMesh&&(It.setOptional(D,te,"batchingTexture"),It.setValue(D,"batchingTexture",te._matricesTexture,se),It.setOptional(D,te,"batchingIdTexture"),It.setValue(D,"batchingIdTexture",te._indirectTexture,se),It.setOptional(D,te,"batchingColorTexture"),te._colorsTexture!==null&&It.setValue(D,"batchingColorTexture",te._colorsTexture,se));const Qi=oe.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&H.update(te,oe,Xn),(ji||We.receiveShadow!==te.receiveShadow)&&(We.receiveShadow=te.receiveShadow,It.setValue(D,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(Yt.envMapIntensity.value=q.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=jR()),ji){if(It.setValue(D,"toneMappingExposure",U.toneMappingExposure),We.needsLights&&Vo(Yt,Ws),Oe&&ee.fog===!0&&Ve.refreshFogUniforms(Yt,Oe),Ve.refreshMaterialUniforms(Yt,ee,K,B,T.state.transmissionRenderTarget[b.id]),We.needsLights&&We.lightProbeGrid){const Ot=We.lightProbeGrid;Yt.probesSH.value=Ot.texture,Yt.probesMin.value.copy(Ot.boundingBox.min),Yt.probesMax.value.copy(Ot.boundingBox.max),Yt.probesResolution.value.copy(Ot.resolution)}Ia.upload(D,kr(We),Yt,se)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ia.upload(D,kr(We),Yt,se),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&It.setValue(D,"center",te.center),It.setValue(D,"modelViewMatrix",te.modelViewMatrix),It.setValue(D,"normalMatrix",te.normalMatrix),It.setValue(D,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){const Ot=ee.uniformsGroups;for(let es=0,Xs=Ot.length;es<Xs;es++){const If=Ot[es];be.update(If,Xn),be.bind(If,Xn)}}return Xn}function Vo(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function Ho(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(b,q,oe){const ee=O.get(b);ee.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),O.get(b.texture).__webglTexture=q,O.get(b.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:oe,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const oe=O.get(b);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(b,q=0,oe=0){ie=b,Q=q,G=oe;let ee=null,te=!1,Oe=!1;if(b){const Ne=O.get(b);if(Ne.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,Ne.__webglFramebuffer),Me.copy(b.viewport),Se.copy(b.scissor),qe=b.scissorTest,_.viewport(Me),_.scissor(Se),_.setScissorTest(qe),ye=-1;return}else if(Ne.__webglFramebuffer===void 0)se.setupRenderTarget(b);else if(Ne.__hasExternalTextures)se.rebindTextures(b,O.get(b.texture).__webglTexture,O.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ot=b.depthTexture;if(Ne.__boundDepthTexture!==ot){if(ot!==null&&O.has(ot)&&(b.width!==ot.image.width||b.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(b)}}const $e=b.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Oe=!0);const Ke=O.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ke[q])?ee=Ke[q][oe]:ee=Ke[q],te=!0):b.samples>0&&se.useMultisampledRTT(b)===!1?ee=O.get(b).__webglMultisampledFramebuffer:Array.isArray(Ke)?ee=Ke[oe]:ee=Ke,Me.copy(b.viewport),Se.copy(b.scissor),qe=b.scissorTest}else Me.copy(le).multiplyScalar(K).floor(),Se.copy(E).multiplyScalar(K).floor(),qe=w;if(oe!==0&&(ee=ne),_.bindFramebuffer(D.FRAMEBUFFER,ee)&&_.drawBuffers(b,ee),_.viewport(Me),_.scissor(Se),_.setScissorTest(qe),te){const Ne=O.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,oe)}else if(Oe){const Ne=q;for(let $e=0;$e<b.textures.length;$e++){const Ke=O.get(b.textures[$e]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+$e,Ke.__webglTexture,oe,Ne)}}else if(b!==null&&oe!==0){const Ne=O.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,oe)}ye=-1},this.readRenderTargetPixels=function(b,q,oe,ee,te,Oe,He,Ne=0){if(!(b&&b.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=O.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){_.bindFramebuffer(D.FRAMEBUFFER,$e);try{const Ke=b.textures[Ne],ot=Ke.format,ze=Ke.type;if(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ne),!A.textureFormatReadable(ot)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(ze)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-ee&&oe>=0&&oe<=b.height-te&&D.readPixels(q,oe,ee,te,Re.convert(ot),Re.convert(ze),Oe)}finally{const Ke=ie!==null?O.get(ie).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(b,q,oe,ee,te,Oe,He,Ne=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=O.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e)if(q>=0&&q<=b.width-ee&&oe>=0&&oe<=b.height-te){_.bindFramebuffer(D.FRAMEBUFFER,$e);const Ke=b.textures[Ne],ot=Ke.format,ze=Ke.type;if(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ne),!A.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,Oe.byteLength,D.STREAM_READ),D.readPixels(q,oe,ee,te,Re.convert(ot),Re.convert(ze),0);const Pt=ie!==null?O.get(ie).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Pt);const $t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await _b(D,$t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Oe),D.deleteBuffer(je),D.deleteSync($t),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,oe=0){const ee=Math.pow(2,-oe),te=Math.floor(b.image.width*ee),Oe=Math.floor(b.image.height*ee),He=q!==null?q.x:0,Ne=q!==null?q.y:0;se.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,oe,0,0,He,Ne,te,Oe),_.unbindTexture()},this.copyTextureToTexture=function(b,q,oe=null,ee=null,te=0,Oe=0){let He,Ne,$e,Ke,ot,ze,je,Pt,$t;const Vt=b.isCompressedTexture?b.mipmaps[Oe]:b.image;if(oe!==null)He=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,$e=oe.isBox3?oe.max.z-oe.min.z:1,Ke=oe.min.x,ot=oe.min.y,ze=oe.isBox3?oe.min.z:0;else{const Yt=Math.pow(2,-te);He=Math.floor(Vt.width*Yt),Ne=Math.floor(Vt.height*Yt),b.isDataArrayTexture?$e=Vt.depth:b.isData3DTexture?$e=Math.floor(Vt.depth*Yt):$e=1,Ke=0,ot=0,ze=0}ee!==null?(je=ee.x,Pt=ee.y,$t=ee.z):(je=0,Pt=0,$t=0);const Lt=Re.convert(q.format),dn=Re.convert(q.type);let We;q.isData3DTexture?(se.setTexture3D(q,0),We=D.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(se.setTexture2DArray(q,0),We=D.TEXTURE_2D_ARRAY):(se.setTexture2D(q,0),We=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment);const Un=_.getParameter(D.UNPACK_ROW_LENGTH),St=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Xn=_.getParameter(D.UNPACK_SKIP_PIXELS),ui=_.getParameter(D.UNPACK_SKIP_ROWS),ji=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,Vt.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Vt.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),_.pixelStorei(D.UNPACK_SKIP_ROWS,ot),_.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const Ws=b.isDataArrayTexture||b.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const Yt=O.get(b),Qi=O.get(q),Ot=O.get(Yt.__renderTarget),es=O.get(Qi.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,Ot.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let Xs=0;Xs<$e;Xs++)Ws&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,O.get(b).__webglTexture,te,ze+Xs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,O.get(q).__webglTexture,Oe,$t+Xs)),D.blitFramebuffer(Ke,ot,He,Ne,je,Pt,He,Ne,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(te!==0||b.isRenderTargetTexture||O.has(b)){const Yt=O.get(b),Qi=O.get(q);_.bindFramebuffer(D.READ_FRAMEBUFFER,re),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,$);for(let Ot=0;Ot<$e;Ot++)Ws?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yt.__webglTexture,te,ze+Ot):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yt.__webglTexture,te),It?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qi.__webglTexture,Oe,$t+Ot):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qi.__webglTexture,Oe),te!==0?D.blitFramebuffer(Ke,ot,He,Ne,je,Pt,He,Ne,D.COLOR_BUFFER_BIT,D.NEAREST):It?D.copyTexSubImage3D(We,Oe,je,Pt,$t+Ot,Ke,ot,He,Ne):D.copyTexSubImage2D(We,Oe,je,Pt,Ke,ot,He,Ne);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else It?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(We,Oe,je,Pt,$t,He,Ne,$e,Lt,dn,Vt.data):q.isCompressedArrayTexture?D.compressedTexSubImage3D(We,Oe,je,Pt,$t,He,Ne,$e,Lt,Vt.data):D.texSubImage3D(We,Oe,je,Pt,$t,He,Ne,$e,Lt,dn,Vt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Oe,je,Pt,He,Ne,Lt,dn,Vt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Oe,je,Pt,Vt.width,Vt.height,Lt,Vt.data):D.texSubImage2D(D.TEXTURE_2D,Oe,je,Pt,He,Ne,Lt,dn,Vt);_.pixelStorei(D.UNPACK_ROW_LENGTH,Un),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Xn),_.pixelStorei(D.UNPACK_SKIP_ROWS,ui),_.pixelStorei(D.UNPACK_SKIP_IMAGES,ji),Oe===0&&q.generateMipmaps&&D.generateMipmap(We),_.unbindTexture()},this.initRenderTarget=function(b){O.get(b).__webglFramebuffer===void 0&&se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?se.setTextureCube(b,0):b.isData3DTexture?se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?se.setTexture2DArray(b,0):se.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){Q=0,G=0,ie=null,_.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}const Qh={type:"change"},wf={type:"start"},Ig={type:"end"},xa=new Ml,ep=new us,QR=Math.cos(70*yb.DEG2RAD),jt=new Y,Pn=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tc=1e-6;class Ng extends iE{constructor(e,n=null){super(e,n),this.state=Dt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Ki,this._lastTargetPosition=new Y,this._quat=new Ki().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wh,this._sphericalDelta=new wh,this._scale=1,this._panOffset=new Y,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new Y,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t1.bind(this),this._onPointerDown=e1.bind(this),this._onPointerUp=n1.bind(this),this._onContextMenu=c1.bind(this),this._onMouseWheel=r1.bind(this),this._onKeyDown=o1.bind(this),this._onTouchStart=a1.bind(this),this._onTouchMove=l1.bind(this),this._onMouseDown=i1.bind(this),this._onMouseMove=s1.bind(this),this._interceptControlDown=u1.bind(this),this._interceptControlUp=f1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qh),this.update(),this.state=Dt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;jt.copy(n).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Pn:i>Math.PI&&(i-=Pn),s<-Math.PI?s+=Pn:s>Math.PI&&(s-=Pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),n.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=jt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xa.origin.copy(this.object.position),xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xa.direction))<QR?this.object.lookAt(this.target):(ep.setFromNormalAndCoplanarPoint(this.object.up,this.target),xa.intersectPlane(ep,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tc||this._lastTargetPosition.distanceToSquared(this.target)>Tc?(this.dispatchEvent(Qh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Pn/60*this.autoRotateSpeed*e:Pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){jt.setFromMatrixColumn(n,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,n){this.screenSpacePanning===!0?jt.setFromMatrixColumn(n,1):(jt.setFromMatrixColumn(n,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;jt.copy(s).sub(this.target);let r=jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new it,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function e1(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function t1(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function n1(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ig),this.state=Dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function i1(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Dt.DOLLY;break;case gr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Dt.ROTATE}break;case gr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(wf)}function s1(t){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function r1(t){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(t.preventDefault(),this.dispatchEvent(wf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Ig))}function o1(t){this.enabled!==!1&&this._handleKeyDown(t)}function a1(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Dt.TOUCH_ROTATE;break;case fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Dt.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(wf)}function l1(t){switch(this._trackPointer(t),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Dt.NONE}}function c1(t){this.enabled!==!1&&t.preventDefault()}function u1(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function f1(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const d1={class:"rgbd-viewer"},h1={key:0},p1=["value"],m1={class:"rgbd-grid"},g1={class:"rgbd-image"},_1={key:0,class:"rgbd-boxes"},v1={class:"rgbd-controls"},x1=["title"],y1=["value","max"],S1={class:"rgbd-notice"},M1=["value"],b1={key:0},E1={key:0},T1={key:1},A1={key:2},w1={key:3},R1={key:1,class:"alert"},C1={__name:"RgbdViewer",props:{operationId:String,mode:String,view:String,sessions:Array,showDetections:Boolean},setup(t){const e=t,n=Ge(""),i=Ge(null),s=Ge([]),r=Ge(!1),o=Ge(""),a=Ge("average"),l=Ge(null),c=Ge(null),u=Ge(0),f={average:"平均法",ekf:"EKF",es_ekf:"ES-EKF",rmv_fgo:"RMV-FGO"},d=ft(()=>{var W;return(W=i.value)==null?void 0:W.frame}),h=ft(()=>{var W,J;return((J=(W=d.value)==null?void 0:W.fusion)==null?void 0:J.detections)||[]}),g=ft(()=>{var W;return((W=s.value.at(-1))==null?void 0:W.videoTimeMs)||0}),v=ft(()=>{var W;return(W=d.value)==null?void 0:W.devicePose}),m=W=>W?["x","y","z"].map(J=>Number(W[J]).toFixed(3)).join(", "):"—",p=W=>W?["w","x","y","z"].map(J=>Number(W[J]).toFixed(4)).join(", "):"—",M=ft(()=>{var W,J;return(((J=(W=d.value)==null?void 0:W.fusion)==null?void 0:J.referenceScrews)||[]).map(le=>{var E,w,I,z,k,j,pe,fe,ve;return{...le,position:((j=(k=(z=(I=(w=(E=d.value)==null?void 0:E.fusion)==null?void 0:w.state)==null?void 0:I[le.id])==null?void 0:z.algorithms)==null?void 0:k[a.value])==null?void 0:j.position)||le,localized:!!((ve=(fe=(pe=d.value)==null?void 0:pe.fusion)==null?void 0:fe.state)!=null&&ve[le.id])}})}),S=ft(()=>{var le;const W=(le=v.value)==null?void 0:le.position;if(!W)return"";const J=M.value.map(E=>({...E,distance:Math.hypot(W.x-E.position.x,W.y-E.position.y,W.z-E.position.z)})).filter(E=>E.distance<=3).sort((E,w)=>E.distance-w.distance)[0];return J?`附近有 ${J.type}（${J.id}），距離 ${J.distance.toFixed(2)} m。`:""});let y,R=!1,T=0,L=!0,x=0,P=0,U,N,F,ne,re,$,Q,G;const ie=W=>new Y(W.x,W.z,W.y);async function ye(){const W=e.operationId,J=n.value,le=T,E=[];let w=-1;for(;L&&le===T;){const{data:I}=await Nt.get(`/rgbd/frames/${W}`,{params:{sessionId:J,after:w,index:1,limit:500}});if(E.push(...I),I.length<500)break;w=I.at(-1).frameId}le===T&&(s.value=E)}async function Te(W,J=!1){var fe,ve;const le=T,E=e.operationId,w=n.value,I=e.view,{data:z}=await Nt.get(`/rgbd/snapshot/${E}/${w}/${W}`);if(!J&&z.frame.frameId===((fe=d.value)==null?void 0:fe.frameId)&&z.frame.sessionId===((ve=d.value)==null?void 0:ve.sessionId))return;const k=`/rgbd/media/${E}/${w}/${z.frame.frameId}/${I}`,j=await Nt.get(k,{responseType:"blob"}),pe=await createImageBitmap(j.data);try{if(!L||le!==T||I!==e.view)return;const ue=l.value;if(!ue)return;ue.width=pe.width,ue.height=pe.height,ue.getContext("2d").drawImage(pe,0,0),i.value=z,u.value=z.frame.videoTimeMs||0,e.mode==="live"&&(a.value=z.frame.selectedAlgorithm||a.value),o.value="",await Co(),B(),K()}finally{pe.close()}}async function Me(){var W,J;if(!(R||!n.value||r.value)){R=!0;try{if(e.mode==="live")await Te("latest");else if(s.value.length){const le=performance.now();P=Math.min(g.value,P+(x?le-x:0)),x=le;const E=[...s.value].reverse().find(w=>w.videoTimeMs<=P)||s.value[0];await Te(E.frameId),P>=g.value&&(r.value=!0)}}catch(le){o.value=((J=(W=le.response)==null?void 0:W.data)==null?void 0:J.error)||"同幀影像或資料讀取失敗，請檢查後端與封包檔案。"}finally{R=!1}}}async function Se(){var W,J;if(T++,i.value=null,s.value=[],u.value=0,P=0,x=0,r.value=e.mode==="history",l.value&&l.value.getContext("2d").clearRect(0,0,l.value.width,l.value.height),K(),!!n.value)try{e.mode==="history"?(await ye(),s.value.length&&await Te(s.value[0].frameId,!0)):await Te("latest",!0)}catch(le){o.value=((J=(W=le.response)==null?void 0:W.data)==null?void 0:J.error)||"無法讀取同幀紀錄。"}}async function qe(W){T++,r.value=!0,P=Number(W.target.value),x=0;const J=[...s.value].reverse().find(le=>le.videoTimeMs<=P)||s.value[0];try{J&&await Te(J.frameId,!0)}catch{o.value="無法讀取指定幀。"}}function st(){T++,r.value=!r.value,x=0,!r.value&&e.mode==="history"&&P>=g.value&&(P=0),r.value||Me()}async function et(){var W,J;if(K(),e.mode==="live")try{await Nt.post("/simulation/config",{screwFusionAlgorithm:a.value})}catch(le){o.value=((J=(W=le.response)==null?void 0:W.data)==null?void 0:J.error)||"演算法設定失敗。"}}function Z(W){const J=W.bbox,le=d.value.metadata;return{left:`${100*J.x/le.width}%`,top:`${100*J.y/le.height}%`,width:`${100*J.width/le.width}%`,height:`${100*J.height/le.height}%`}}function B(){if(F||!c.value)return;U=new hg,U.background=new dt(16777215),N=new zn(48,1,.1,100),N.position.set(24,19,23),F=new Lg({antialias:!0}),F.setPixelRatio(Math.min(devicePixelRatio,2)),c.value.appendChild(F.domElement),ne=new Ng(N,F.domElement),ne.target.set(10,0,6),ne.update(),U.add(new yg(16777215,8947848,3));const W=new bg(20,20,6583435,14476269);W.scale.z=.6,W.position.set(10,0,6),U.add(W);for(const E of[0,20])for(const w of[0,12])for(const I of[0,2.5]){const z=new Gt(new vs(.25,.25,.25),new hs({color:2450411}));z.position.copy(ie({x:E,y:w,z:I})),z.userData.label=`基站 (${E}, ${w}, ${I}) m`,U.add(z)}re=new Si,re.add(new Gt(new Lr(.13),new hs({color:1096065})));const J=new Gt(new Ao(.5,1.5,24,1,!0),new hs({color:1096065,transparent:!0,opacity:.2,side:Yn}));J.rotation.x=-Math.PI/2,J.position.z=.75,re.add(J),U.add(re),$=new Tf(new fn,new bl({color:14427686})),U.add($),Q=new Si,U.add(Q),G=new ResizeObserver(()=>{const E=c.value.clientWidth;F.setSize(E,380),N.aspect=E/380,N.updateProjectionMatrix()}),G.observe(c.value);const le=new Mg;F.domElement.addEventListener("pointermove",E=>{const w=F.domElement.getBoundingClientRect();le.setFromCamera(new it((E.clientX-w.left)/w.width*2-1,-(E.clientY-w.top)/w.height*2+1),N);const I=le.intersectObjects(U.children,!0).find(z=>z.object.userData.label);F.domElement.title=(I==null?void 0:I.object.userData.label)||""}),F.setAnimationLoop(()=>{ne.update(),F.render(U,N)})}function K(){var W,J;if(F){if(re.visible=!!v.value,v.value){re.position.copy(ie(v.value.position));const le=v.value.quaternion,E=new Bt().makeRotationFromQuaternion(new Ki(le.x,le.y,le.z,le.w)),w=(W=d.value.result)==null?void 0:W.calibration,I=(w==null?void 0:w.rotationMatrix)||[[1,0,0],[0,1,0],[0,0,1]],z=new Bt().set(I[0][0],I[0][1],I[0][2],0,I[1][0],I[1][1],I[1][2],0,I[2][0],I[2][1],I[2][2],0,0,0,0,1),k=new Y(0,0,1).applyMatrix4(z).applyMatrix4(E),j=new Y(0,-1,0).applyMatrix4(z).applyMatrix4(E);re.up.copy(ie(j)),re.lookAt(re.position.clone().add(ie(k)))}$.geometry.dispose(),$.geometry=new fn().setFromPoints((((J=i.value)==null?void 0:J.trail)||[]).map(ie));for(const le of[...Q.children])le.geometry.dispose(),le.material.dispose(),Q.remove(le);for(const le of M.value){const E=le.position,w=new Gt(new Lr(.11),new hs({color:le.localized?16096779:le.type.includes("M4")?2450411:9647082}));w.position.copy(ie(E)),w.userData.label=`${le.id}: ${m(E)} m`,Q.add(w)}}}return Kn(()=>e.sessions,W=>{var J;W!=null&&W.some(le=>le._id===n.value)||(n.value=((J=W==null?void 0:W[0])==null?void 0:J._id)||"")},{immediate:!0}),Kn([n,()=>e.operationId,()=>e.mode],Se),Kn(()=>e.view,async()=>{T++;try{d.value&&await Te(d.value.frameId,!0)}catch{o.value="無法切換影像。"}}),Ji(()=>{Se(),y=setInterval(Me,100)}),fl(()=>{L=!1,T++,clearInterval(y),G==null||G.disconnect(),ne==null||ne.dispose(),F==null||F.setAnimationLoop(null),U==null||U.traverse(W=>{var J;(J=W.geometry)==null||J.dispose(),W.material&&W.material.dispose()}),F==null||F.dispose()}),(W,J)=>{var le,E,w,I;return _e(),xe("section",d1,[t.sessions.length>1?(_e(),xe("label",h1,[J[2]||(J[2]=Mt("同幀紀錄 ",-1)),Kt(C("select",{"onUpdate:modelValue":J[0]||(J[0]=z=>n.value=z)},[(_e(!0),xe(_t,null,Tn(t.sessions,z=>(_e(),xe("option",{key:z._id,value:z._id},ge(z._id)+"（"+ge(z.count)+" 幀）",9,p1))),128))],512),[[ur,n.value]])])):wt("",!0),C("div",m1,[C("div",null,[C("div",g1,[C("canvas",{ref_key:"canvas",ref:l},null,512),t.showDetections&&d.value?(_e(),xe("div",_1,[(_e(!0),xe(_t,null,Tn(h.value.filter(z=>z.bbox),(z,k)=>(_e(),xe("div",{key:k,class:"rgbd-box",style:yr(Z(z))},[C("span",null,ge(z.screwId||"未關聯螺絲"),1)],4))),128))])):wt("",!0)]),C("div",v1,[C("button",{type:"button",title:r.value?"播放":"暫停",onClick:st},ge(r.value?"▶":"⏸"),9,x1),t.mode==="history"?(_e(),xe("input",{key:0,type:"range",value:u.value,min:"0",max:g.value,step:"1",onInput:qe},null,40,y1)):wt("",!0),C("span",null,ge((u.value/1e3).toFixed(2))+" s · Frame "+ge(((le=d.value)==null?void 0:le.frameId)??"—"),1)]),C("p",S1,ge(S.value||"附近目前沒有螺絲。"),1),C("div",{ref_key:"sceneHost",ref:c,class:"rgbd-scene"},null,512),J[3]||(J[3]=C("small",null,"設備軌跡（紅）／設備與攝影機方向（綠）／螺絲融合位置（金）",-1))]),C("aside",null,[J[5]||(J[5]=C("h3",null,"螺絲定位",-1)),C("label",null,[J[4]||(J[4]=Mt("螺絲融合演算法",-1)),Kt(C("select",{"onUpdate:modelValue":J[1]||(J[1]=z=>a.value=z),onChange:et},[(_e(),xe(_t,null,Tn(f,(z,k)=>C("option",{key:k,value:k},ge(z),9,M1)),64))],544),[[ur,a.value]])]),h.value.length?wt("",!0):(_e(),xe("p",b1,"此幀沒有螺絲偵測結果。")),(_e(!0),xe(_t,null,Tn(h.value,(z,k)=>{var j,pe;return _e(),xe("article",{key:k},[C("strong",null,ge(z.screwId||"未通過關聯門檻"),1),C("p",null,"相機座標："+ge(m(z.cameraPosition))+" m",1),C("p",null,"原始世界座標："+ge(m(z.rawAbsolutePosition))+" m",1),C("p",null,"融合位置："+ge(m((pe=(j=z.algorithms)==null?void 0:j[a.value])==null?void 0:pe.position))+" m",1),z.observationCount?(_e(),xe("small",E1,"融合觀測："+ge(z.observationCount)+" 幀",1)):wt("",!0)])}),128)),J[6]||(J[6]=C("h3",null,"同幀設備姿態",-1)),C("p",null,"位置："+ge(m((E=v.value)==null?void 0:E.position))+" m",1),C("p",null,"四元數（w, x, y, z）："+ge(p((w=v.value)==null?void 0:w.quaternion)),1),d.value&&!v.value?(_e(),xe("p",T1,"此幀缺少可配對姿態，不使用舊姿態推算。")):wt("",!0),d.value?(_e(),xe("p",A1,"擷取時間戳："+ge(d.value.captureTimeNs)+" ns",1)):wt("",!0),((I=d.value)==null?void 0:I.status)==="pair_time_mismatch"?(_e(),xe("p",w1,"RGB-D 時間差超出門檻，此幀不進行定位。")):wt("",!0)])]),o.value?(_e(),xe("p",R1,ge(o.value),1)):wt("",!0)])}}},P1=Uo(C1,[["__scopeId","data-v-05de70eb"]]),D1={class:"page-card"},L1={class:"media-controls"},I1={class:"segmented-control"},N1={key:0,class:"stream-start-time"},U1=["disabled"],O1={key:0,value:""},F1={key:1,value:"",disabled:""},B1=["value"],z1={key:0,class:"video-select-control"},k1=["disabled"],V1={key:0,value:""},H1=["value"],G1={class:"switch-control"},W1={class:"segmented-control"},X1={key:0,class:"placeholder"},q1={key:1,class:"stream-workspace"},$1={class:"stream-main"},Y1={key:0,class:"video-viewport"},K1=["src","title"],Z1={key:0,class:"live-pause-overlay"},J1={key:1,class:"detection-layer"},j1={class:"video-playback-controls"},Q1=["title"],eC={key:1,class:"video-viewport"},tC=["src"],nC={key:0,class:"detection-layer"},iC={class:"video-playback-controls"},sC=["title"],rC=["max","value"],oC={key:2,class:"placeholder"},aC={class:"stream-sidebar"},lC={key:0,class:"side-section screw-position-card"},cC={class:"screw-fusion-control"},uC=["disabled"],fC={class:"absolute-position"},dC={key:0},hC={key:1},pC={key:1,class:"no-screw-localization"},mC={key:2,class:"telemetry-dashboard"},gC={class:"position-scene-card"},_C={class:"fusion-data-card"},vC={class:"current-position"},xC={class:"sensor-columns"},yC={class:"uwb-range-grid"},SC={class:"imu-readout"},MC={key:0},bC={key:1,class:"path-algorithm-menu"},EC={class:"trail-toggle trail-ekf"},TC={class:"trail-toggle trail-complementary"},AC={class:"trail-toggle trail-weighted"},wC={key:2,class:"success"},RC={key:3,class:"alert"},CC={__name:"StreamPage",setup(t){const e=Ge([]);let n=!1;const i=async()=>{const me=c.value,ae=me?(await Nt.get(`/rgbd/sessions/${me}`)).data:[];return me===c.value&&(e.value=ae),ae.length>0},s=Ge([]),r=Ge([]),o=Ge([]),a=Ge([]),l=Ge("history"),c=Ge(""),u=Ge(""),f=Ge("color"),d=Ge("ekf"),h=Ge("average"),g=Ge(!0),v=Ge(0),m=Ge(0),p=Ge(!1),M=Ge(null),S=Ge(null),y=Ge(!0),R=Ge(!1),T=Ge(""),L=Ge(""),x=Ge(0),P=Ge(!1),U=Ge(0),N=Ge([]),F=ys({ekf:!0,complementary:!0,weighted_average:!0}),ne={ekf:2450411,complementary:1096065,weighted_average:16096779},re=Ge({ekf:[],complementary:[],weighted_average:[]}),$=Ge([]),Q=Ge(null),G=Ge(null),ie=[{id:1,x:0,y:0,z:0},{id:2,x:20,y:0,z:0},{id:3,x:0,y:12,z:0},{id:4,x:20,y:12,z:0},{id:5,x:0,y:0,z:2.5},{id:6,x:20,y:0,z:2.5},{id:7,x:0,y:12,z:2.5},{id:8,x:20,y:12,z:2.5}],ye=[{id:"A-1",type:"M4 hex screw",x:1.2,y:1.2,z:1.1},{id:"A-2",type:"M4 hex screw",x:2,y:1.2,z:1.1},{id:"B-1",type:"M6 socket screw",x:18,y:1.2,z:1.1},{id:"B-2",type:"M6 socket screw",x:18.8,y:1.2,z:1.1},{id:"B-3",type:"M6 socket screw",x:1.2,y:10.8,z:1.1},{id:"B-4",type:"M6 socket screw",x:2,y:10.8,z:1.1},{id:"A-3",type:"M4 hex screw",x:18,y:10.8,z:1.1},{id:"A-4",type:"M4 hex screw",x:18.8,y:10.8,z:1.1}];let Te,Me=-1,Se,qe,st,et,Z,B,K,W,J,le,E,w;const I=new Map,z=ft(()=>s.value.filter(me=>!me.endTime).sort((me,ae)=>new Date(ae.startTime)-new Date(me.startTime))[0]||null),k=ft(()=>s.value.filter(me=>{var ae;return me._id!==((ae=z.value)==null?void 0:ae._id)})),j=ft(()=>{var me;return(me=z.value)!=null&&me.startTime?new Date(z.value.startTime).toLocaleString("zh-TW"):"尚未開始作業"}),pe=ft(()=>r.value.filter(me=>me.kind===f.value||me.kind==="combined")),fe=ft(()=>pe.value.find(me=>me.filename===u.value)),ve=ft(()=>{const me=o.value.filter(ae=>{var Ze;return ae.imageId===((Ze=fe.value)==null?void 0:Ze.filename)});return me.length?me:o.value}),ue=ft(()=>({_id:"simulated-screw",objectClass:"螺絲",depth:Number((118+Math.sin(x.value*.18)*3).toFixed(1)),bbox:{x:Math.round(860+Math.sin(x.value*.14)*22),y:Math.round(465+Math.cos(x.value*.11)*12),width:200,height:150}})),Le=ft(()=>Math.floor((x.value+20)/4)%13!==0),D=ft(()=>{var Ze;if(l.value==="live")return o.value.at(-1)||ue.value;if(!ve.value.length)return null;const me=new Date(ve.value[0].timestamp).getTime()||((Ze=fe.value)!=null&&Ze.startedAt?fe.value.startedAt*1e3:null);if(!me)return ve.value[0]||ue.value;const ae=me+v.value*1e3;return ve.value.reduce((ht,ct)=>Math.abs(new Date(ct.timestamp).getTime()-ae)<Math.abs(new Date(ht.timestamp).getTime()-ae)?ct:ht)}),ke=ft(()=>l.value==="live"?o.value.length>0:ve.value.length>0),Ie=ft(()=>l.value==="live"?!!z.value:!!fe.value),A=ft(()=>g.value&&!P.value&&Ie.value&&!!D.value&&(ke.value||Le.value)),_=ft(()=>D.value?["example_object","screw_simulated"].includes(D.value.objectClass)?"螺絲":D.value.objectClass:"未偵測到螺絲"),V=ft(()=>`http://localhost:8889/${f.value==="depth"?"cam-depth":"cam-color"}`),O=me=>Number(me??0).toFixed(3),se=()=>{var Ze,ht;if(l.value==="live"){re.value=Object.fromEntries(Object.keys(ne).map(ct=>[ct,ct===d.value?$.value:[]])),N.value=$.value;return}const me=l.value==="history"?(Ze=fe.value)!=null&&Ze.startedAt?fe.value.startedAt*1e3+v.value*1e3:new Date(((ht=D.value)==null?void 0:ht.timestamp)||0).getTime():1/0,ae=Object.fromEntries(Object.keys(ne).map(ct=>[ct,a.value.filter(vt=>vt.fusionAlgorithm===ct&&new Date(vt.timestamp).getTime()<=me).map(vt=>{var xt;return(xt=vt.telemetry)==null?void 0:xt.position}).filter(Boolean).slice(-80).map(vt=>({...vt}))]));re.value=ae,N.value=ae[d.value]||[]},Ee=me=>new Y(Number((me==null?void 0:me.x)||0),Number((me==null?void 0:me.z)||0),Number((me==null?void 0:me.y)||0)),we=me=>Ee(me),ce=(me,ae)=>{me.userData.hoverLabel=ae},de=me=>{const ae=new Si,Ze=new jr({color:3900150,roughness:.35,metalness:.35}),ht=new Gt(new vs(.24,.12,.24),Ze),ct=new Gt(new vs(.1,.16,.1),Ze);return ct.position.y=.14,ae.add(ht,ct),ae.position.copy(we(me)),ce(ae,`基地站 ${me.id}：X ${me.x}、Y ${me.y}、Z ${me.z} m`),ae},Ae=(me=16096779)=>{const ae=new Si,Ze=new jr({color:me,metalness:.72,roughness:.25}),ht=new Gt(new To(.045,.045,.25,16),Ze);ht.rotation.z=Math.PI/2;const ct=new Gt(new To(.105,.105,.045,16),Ze);return ct.rotation.z=Math.PI/2,ct.position.x=-.14,ae.add(ht,ct),ae.userData.material=Ze,ae},Ve=me=>{const ae=new Si,Ze=new Gt(new Lr(.12,20,16),new jr({color:me,emissive:me,emissiveIntensity:.22})),ht=new Gt(new Ao(.45,1.2,24,1,!0),new hs({color:me,transparent:!0,opacity:.2,side:Yn}));return ht.rotation.x=-Math.PI/2,ht.position.z=.6,ae.add(Ze,ht),ae},Ce=()=>{var xt;if(!qe||!S.value||!Z||!K)return;const me=S.value.telemetry;Z.visible=!1,Z.position.copy(Ee(me.position));const ae=Math.PI/180,Ze=me.orientation,ht=-(Ze.yaw-90)*ae;Z.rotation.set(Ze.pitch*ae,ht,Ze.roll*ae,"YXZ"),Object.entries(B||{}).forEach(([mt,Xt])=>{const qt=re.value[mt]||[],Rn=l.value==="live"?mt===d.value:F[mt];Xt.visible=Rn&&qt.length>0,Xt.visible&&(Xt.position.copy(Ee(qt.at(-1))),Xt.rotation.set(Ze.pitch*ae,ht,Ze.roll*ae,"YXZ"),ce(Xt,`${mt} device: ${O(qt.at(-1).x)}, ${O(qt.at(-1).y)}, ${O(qt.at(-1).z)} m`))}),K.position.copy(Ee(S.value.absolutePosition)),K.visible=!1,ce(Z,`設備：X ${O(me.position.x)}、Y ${O(me.position.y)}、Z ${O(me.position.z)} m；Roll ${O(Ze.roll)}°、Pitch ${O(Ze.pitch)}°、Yaw ${O(Ze.yaw)}°`),S.value.absolutePosition&&ce(K,`螺絲：X ${O(S.value.absolutePosition.x)}、Y ${O(S.value.absolutePosition.y)}、Z ${O(S.value.absolutePosition.z)} m`),Object.entries(W||{}).forEach(([mt,Xt])=>{const qt=new fn().setFromPoints((re.value[mt]||[]).map(Ee));Xt.geometry.dispose(),Xt.geometry=qt,Xt.visible=F[mt]});const ct=((xt=me.workspace)==null?void 0:xt.screws)||ye,vt=new Map((S.value.localizedScrews||[]).map(mt=>[mt.screwId,mt]));ct.forEach(mt=>{var ci;const Xt=I.get(mt.id);if(!Xt)return;const qt=vt.get(mt.id),Rn=(qt==null?void 0:qt.position)||mt;Xt.position.copy(Ee(Rn));const Ms=mt.type.includes("M4")?2450411:9647082;Xt.userData.material.color.setHex(qt||mt.visible?16096779:Ms),(ci=Xt.userData.material.emissive)==null||ci.setHex(qt||mt.visible?7027968:0),ce(Xt,`${mt.type} ${mt.id}：X ${O(Rn.x)}、Y ${O(Rn.y)}、Z ${O(Rn.z)} m${qt?`；已由 ${S.value.screwFusionLabel||"螺絲融合"} 更新（${qt.observationCount} 幀）`:mt.visible?`；已在攝影機視野內，深度 ${O(mt.depth)} m`:"；未進入攝影機辨識範圍"}`)})},Pe=async()=>{if(await Co(),Se||!Q.value){Ce();return}qe=new hg,qe.background=new dt(16777215),st=new zn(42,1,.1,100),st.position.set(25,19,26),Se=new Lg({antialias:!0}),Se.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q.value.appendChild(Se.domElement),et=new Ng(st,Se.domElement),et.target.set(10,1.1,6),et.enableDamping=!0,et.minDistance=8,et.maxDistance=42,qe.add(new yg(16777215,13358561,2));const me=new eE(16777215,2.5);me.position.set(5,7,4),qe.add(me);const ae=new Gt(new Bo(20,12),new jr({color:16317180,roughness:.95}));ae.rotation.x=-Math.PI/2,ae.position.set(10,-.02,6),qe.add(ae);const Ze=new bg(20,20,13358561,14870768);Ze.scale.z=.6,Ze.position.set(10,0,6),qe.add(Ze),ie.forEach(vt=>qe.add(de(vt))),B=Object.fromEntries(Object.entries(ne).map(([vt,xt])=>{const mt=Ve(xt);return qe.add(mt),[vt,mt]})),Z=new Si;const ht=new Gt(new Lr(.12,20,16),new jr({color:1096065,emissive:289870,emissiveIntensity:.35})),ct=new Gt(new Ao(.45,1.2,24,1,!0),new hs({color:3462041,transparent:!0,opacity:.2,side:Yn}));ct.rotation.x=-Math.PI/2,ct.position.z=.6,Z.add(ht,ct),qe.add(Z),K=Ae(),qe.add(K),ye.forEach(vt=>{const xt=Ae(vt.type.includes("M4")?2450411:9647082);xt.position.copy(Ee(vt)),ce(xt,`${vt.type} ${vt.id}：X ${vt.x}、Y ${vt.y}、Z ${vt.z} m`),I.set(vt.id,xt),qe.add(xt)}),W=Object.fromEntries(Object.entries(ne).map(([vt,xt])=>{const mt=new Tf(new fn,new bl({color:xt}));return qe.add(mt),[vt,mt]})),J=new Mg,le=new it,Se.domElement.addEventListener("pointermove",Qe),w=new ResizeObserver(Je),w.observe(Q.value),Je(),Ce(),rt()},Je=()=>{if(!Se||!Q.value)return;const{clientWidth:me,clientHeight:ae}=Q.value;!me||!ae||(Se.setSize(me,ae),st.aspect=me/ae,st.updateProjectionMatrix())},Qe=me=>{if(!Se||!G.value)return;const ae=Se.domElement.getBoundingClientRect();le.set((me.clientX-ae.left)/ae.width*2-1,-((me.clientY-ae.top)/ae.height)*2+1),J.setFromCamera(le,st);const Ze=J.intersectObjects(qe.children,!0).map(ht=>{let ct=ht.object;for(;ct&&!ct.userData.hoverLabel;)ct=ct.parent;return ct}).find(Boolean);G.value.style.display=Ze?"block":"none",Ze&&(G.value.textContent=Ze.userData.hoverLabel,G.value.style.left=`${me.clientX-ae.left+12}px`,G.value.style.top=`${me.clientY-ae.top+12}px`)},rt=()=>{E=requestAnimationFrame(rt),et.update(),Se.render(qe,st)},H=()=>{var me;cancelAnimationFrame(E),w==null||w.disconnect(),(me=Se==null?void 0:Se.domElement)==null||me.removeEventListener("pointermove",Qe),Se==null||Se.dispose(),Se=null},De=async()=>{var me,ae,Ze;if(r.value=[],o.value=[],a.value=[],u.value="",v.value=0,!!c.value)try{if(await i())return;const[ht,ct,vt]=await Promise.all([Nt.get(`/videos/${c.value}`),Nt.get(`/detections/${c.value}`),Nt.get(`/operator-telemetry/${c.value}`)]);r.value=ht.data,o.value=ct.data.sort((xt,mt)=>new Date(xt.timestamp)-new Date(mt.timestamp)),a.value=vt.data,u.value=((me=pe.value[0])==null?void 0:me.filename)||"",await Re()}catch(ht){T.value=((Ze=(ae=ht.response)==null?void 0:ae.data)==null?void 0:Ze.error)||"無法讀取歷史影片或偵測資料。"}},he=async()=>{s.value=(await Nt.get("/operations")).data},Re=async()=>{var me,ae,Ze,ht,ct,vt;if(!e.value.length&&c.value)try{const xt={source:l.value,algorithm:d.value,screwAlgorithm:h.value};l.value==="history"&&((me=fe.value)!=null&&me.startedAt)&&(xt.at=fe.value.startedAt*1e3+v.value*1e3,a.value=(await Nt.get(`/operator-telemetry/${c.value}`,{params:{at:xt.at}})).data),(ae=D.value)!=null&&ae._id&&D.value._id!=="simulated-screw"&&(xt.detectionId=D.value._id),S.value=(await Nt.get(`/positioning/latest/${c.value}`,{params:xt})).data,l.value==="live"&&((ht=(Ze=S.value)==null?void 0:Ze.telemetry)!=null&&ht.position)&&($.value=[...$.value,{...S.value.telemetry.position}].slice(-80)),se(),await Pe(),Ce()}catch(xt){T.value=((vt=(ct=xt.response)==null?void 0:ct.data)==null?void 0:vt.error)||"無法讀取定位資料。"}},Ue=async()=>{var me;if(l.value==="live")try{if(c.value||(await he(),c.value=((me=z.value)==null?void 0:me._id)||""),!c.value)return;const ae=await Nt.get(`/detections/${c.value}`);o.value=ae.data.sort((Ze,ht)=>new Date(Ze.timestamp)-new Date(ht.timestamp))}catch{}},be=async()=>{var me,ae;R.value=!0,L.value="",T.value="";try{await Nt.post("/simulation/config",{fusionAlgorithm:d.value,screwFusionAlgorithm:h.value}),await Re()}catch(Ze){T.value=((ae=(me=Ze.response)==null?void 0:me.data)==null?void 0:ae.error)||"融合設定傳送失敗。"}finally{R.value=!1}},Ye=async()=>{var me,ae;R.value=!0,L.value="",T.value="";try{await Nt.post("/simulation/config",{fusionAlgorithm:d.value,screwFusionAlgorithm:h.value}),await Re()}catch(Ze){T.value=((ae=(me=Ze.response)==null?void 0:me.data)==null?void 0:ae.error)||"螺絲定位融合設定傳送失敗。"}finally{R.value=!1}},Xe=me=>{v.value=me.target.currentTime,m.value=me.target.duration||0},zt=async()=>{var me,ae;(me=M.value)!=null&&me.paused?await M.value.play():(ae=M.value)==null||ae.pause()},Ct=async()=>{if(l.value!=="history"||!p.value)return;const me=Math.floor(v.value*2);me!==Me&&(Me=me,await Re())},Gn=async me=>{Xe(me),await Ct()},Wn=async me=>{M.value&&(M.value.currentTime=Number(me.target.value),v.value=Number(me.target.value),l.value==="history"&&await Re())},Al=async()=>{P.value=!P.value,P.value||(U.value+=1,await Ue(),await Re())};return Kn(c,async()=>{e.value=[],N.value=[],Me=-1,l.value==="history"?De():await i()||Re()}),Kn(f,()=>{var me;u.value=((me=pe.value[0])==null?void 0:me.filename)||"",v.value=0}),Kn(d,()=>{l.value==="live"&&($.value=[],Object.keys(F).forEach(me=>{F[me]=me===d.value}))}),Kn(l,async()=>{var me,ae;l.value==="history"?(await he(),c.value=((me=k.value[0])==null?void 0:me._id)||"",c.value||(r.value=[],o.value=[],S.value=null)):($.value=[],Object.keys(F).forEach(Ze=>{F[Ze]=Ze===d.value}),c.value=((ae=z.value)==null?void 0:ae._id)||"",await Ue(),await Re())}),Ji(async()=>{var me;try{const[ae,Ze]=await Promise.all([Nt.get("/operations"),Nt.get("/simulation/config")]);s.value=ae.data,d.value=Ze.data.fusionAlgorithm,h.value=Ze.data.screwFusionAlgorithm||"average",c.value=((me=k.value[0])==null?void 0:me._id)||"",Te=window.setInterval(async()=>{var ht;if(!(n||l.value!=="live")){n=!0;try{await he();const ct=((ht=z.value)==null?void 0:ht._id)||"";if(ct!==c.value&&(c.value=ct),await i())return;P.value||(x.value+=1,await Ue(),await Re())}catch{}finally{n=!1}}},500)}catch{T.value="無法讀取系統資料。"}finally{y.value=!1}}),fl(()=>{window.clearInterval(Te),H()}),(me,ae)=>{var ht,ct,vt,xt,mt,Xt,qt,Rn,Ms,ci,kr,Vr,zo,ko,Vo,Ho,b,q,oe,ee,te,Oe,He,Ne,$e,Ke,ot;const Ze=k_("RouterLink");return _e(),xe("section",D1,[ae[34]||(ae[34]=C("div",{class:"section-title"},[C("p",{class:"eyebrow"},"Media"),C("h2",null,"影像串流與末端定位")],-1)),C("div",L1,[C("div",I1,[C("button",{class:Bn({active:l.value==="history"}),type:"button",onClick:ae[0]||(ae[0]=ze=>l.value="history")},"歷史影片",2),C("button",{class:Bn({active:l.value==="live"}),type:"button",onClick:ae[1]||(ae[1]=ze=>l.value="live")},"目前串流",2)]),l.value==="live"?(_e(),xe("p",N1,"開始時間："+ge(j.value),1)):(_e(),xe(_t,{key:1},[C("label",null,[ae[14]||(ae[14]=Mt("作業",-1)),Kt(C("select",{"onUpdate:modelValue":ae[2]||(ae[2]=ze=>c.value=ze),disabled:!k.value.length},[k.value.length?(_e(),xe("option",F1,"選擇歷史作業")):(_e(),xe("option",O1,"無歷史紀錄")),(_e(!0),xe(_t,null,Tn(k.value,ze=>(_e(),xe("option",{key:ze._id,value:ze._id},ge(new Date(ze.startTime).toLocaleString("zh-TW")),9,B1))),128))],8,U1),[[ur,c.value]])]),e.value.length?wt("",!0):(_e(),xe("label",z1,[ae[15]||(ae[15]=Mt("影片",-1)),Kt(C("select",{"onUpdate:modelValue":ae[3]||(ae[3]=ze=>u.value=ze),disabled:!pe.value.length},[pe.value.length?wt("",!0):(_e(),xe("option",V1,"無歷史紀錄")),(_e(!0),xe(_t,null,Tn(pe.value,ze=>(_e(),xe("option",{key:ze.filename,value:ze.filename},ge(ze.filename),9,H1))),128))],8,k1),[[ur,u.value]])]))],64)),C("label",G1,[Kt(C("input",{"onUpdate:modelValue":ae[4]||(ae[4]=ze=>g.value=ze),type:"checkbox"},null,512),[[qo,g.value]]),ae[16]||(ae[16]=Mt(" 顯示螺絲偵測",-1))]),C("div",W1,[C("button",{class:Bn({active:f.value==="color"}),type:"button",onClick:ae[5]||(ae[5]=ze=>f.value="color")},"光學影像",2),C("button",{class:Bn({active:f.value==="depth"}),type:"button",onClick:ae[6]||(ae[6]=ze=>f.value="depth")},"深度影像",2)])]),e.value.length?(_e(),Qu(P1,{key:`${l.value}-${c.value}`,"operation-id":c.value,mode:l.value,view:f.value,sessions:e.value,"show-detections":g.value},null,8,["operation-id","mode","view","sessions","show-detections"])):(_e(),xe(_t,{key:1},[y.value?(_e(),xe("p",X1,"正在讀取資料…")):(_e(),xe("div",q1,[C("div",$1,[l.value==="live"?(_e(),xe("div",Y1,[(_e(),xe("iframe",{key:`${V.value}-${U.value}`,class:"live-stream-frame",src:V.value,title:f.value==="depth"?"目前深度串流":"目前光學串流",allow:"autoplay; fullscreen"},null,8,K1)),P.value?(_e(),xe("div",Z1,"⏸")):wt("",!0),A.value?(_e(),xe("div",J1,[C("div",{class:Bn(["detection-box",{"label-below":D.value.bbox.y<30}]),style:yr({left:`${D.value.bbox.x/1920*100}%`,top:`${D.value.bbox.y/1080*100}%`,width:`${D.value.bbox.width/1920*100}%`,height:`${D.value.bbox.height/1080*100}%`})},[C("span",null,ge(_.value)+" · "+ge(D.value.depth),1)],6)])):wt("",!0),C("div",j1,[C("button",{type:"button",title:P.value?"播放最新串流":"暫停前台顯示",onClick:Al},ge(P.value?"▶":"⏸"),9,Q1)])])):fe.value?(_e(),xe("div",eC,[(_e(),xe("video",{key:fe.value.filename,ref_key:"videoPlayer",ref:M,class:Bn(["video-source",{"show-depth":fe.value.kind==="combined"&&f.value==="depth"}]),src:fe.value.url,playsinline:"",onLoadedmetadata:Xe,onTimeupdate:Gn,onPlay:ae[7]||(ae[7]=ze=>p.value=!0),onPause:ae[8]||(ae[8]=ze=>p.value=!1)},null,42,tC)),A.value?(_e(),xe("div",nC,[C("div",{class:Bn(["detection-box",{"label-below":D.value.bbox.y<30}]),style:yr({left:`${D.value.bbox.x/1920*100}%`,top:`${D.value.bbox.y/1080*100}%`,width:`${D.value.bbox.width/1920*100}%`,height:`${D.value.bbox.height/1080*100}%`})},[C("span",null,ge(_.value)+" · "+ge(D.value.depth),1)],6)])):wt("",!0),C("div",iC,[C("button",{type:"button",title:p.value?"暫停":"播放",onClick:zt},ge(p.value?"⏸":"▶"),9,sC),C("input",{type:"range",min:"0",max:m.value,step:"0.01",value:v.value,onInput:Wn},null,40,rC),C("span",null,ge(Math.floor(v.value))+" / "+ge(Math.floor(m.value))+" 秒",1)])])):(_e(),xe("p",oC,"此作業尚未找到歷史影片。"))]),C("aside",aC,[S.value?(_e(),xe("section",lC,[ae[20]||(ae[20]=C("h3",null,"螺絲定位",-1)),C("label",cC,[ae[18]||(ae[18]=Mt("螺絲定位融合演算法",-1)),Kt(C("select",{"onUpdate:modelValue":ae[9]||(ae[9]=ze=>h.value=ze),disabled:R.value,onChange:Ye},[...ae[17]||(ae[17]=[C("option",{value:"average"},"平均法（多幀座標平均）",-1),C("option",{value:"ekf"},"EKF（靜態位置濾波）",-1),C("option",{value:"es_ekf"},"ESKF（誤差狀態濾波）",-1),C("option",{value:"rmv_fgo"},"RMV-FGO（強健多視角因子圖）",-1)])],40,uC),[[ur,h.value]])]),S.value.detection?(_e(),xe(_t,{key:0},[C("p",null,ge(_.value)+"　深度 "+ge((ht=D.value)==null?void 0:ht.depth),1),C("p",null,[Mt("模型："+ge(S.value.detection.detectionAlgorithm),1),ae[19]||(ae[19]=C("br",null,null,-1)),Mt("設備 UWB + IMU："+ge(S.value.fusionAlgorithm),1)]),C("p",null,"相機／設備座標："+ge(O(S.value.cameraPosition.x))+", "+ge(O(S.value.cameraPosition.y))+", "+ge(O(S.value.cameraPosition.z))+" m",1),C("p",null,"螺絲相機座標："+ge(O((ct=S.value.screwCameraPosition)==null?void 0:ct.x))+", "+ge(O((vt=S.value.screwCameraPosition)==null?void 0:vt.y))+", "+ge(O((xt=S.value.screwCameraPosition)==null?void 0:xt.z))+" m",1),C("p",null,"原始絕對座標："+ge(O((mt=S.value.rawAbsolutePosition)==null?void 0:mt.x))+", "+ge(O((Xt=S.value.rawAbsolutePosition)==null?void 0:Xt.y))+", "+ge(O((qt=S.value.rawAbsolutePosition)==null?void 0:qt.z))+" m",1),C("p",fC,ge(S.value.screwFusionLabel||"螺絲融合")+"結果："+ge(O((Rn=S.value.absolutePosition)==null?void 0:Rn.x))+", "+ge(O((Ms=S.value.absolutePosition)==null?void 0:Ms.y))+", "+ge(O((ci=S.value.absolutePosition)==null?void 0:ci.z))+" m",1),S.value.screwLocalization?(_e(),xe("small",dC,"觀測 "+ge(S.value.screwLocalization.observationCount)+" 幀｜創新量 "+ge(O(S.value.screwLocalization.innovation))+" m｜1σ "+ge(O((kr=S.value.screwLocalization.uncertainty)==null?void 0:kr.x))+", "+ge(O((Vr=S.value.screwLocalization.uncertainty)==null?void 0:Vr.y))+", "+ge(O((zo=S.value.screwLocalization.uncertainty)==null?void 0:zo.z))+" m",1)):(_e(),xe("small",hC))],64)):(_e(),xe("p",pC,"尚未偵測到螺絲；選擇的演算法會在下一筆螺絲觀測到達後套用。"))])):wt("",!0)])])),S.value?(_e(),xe("section",mC,[C("div",gC,[ae[21]||(ae[21]=C("div",{class:"scene-heading"},[C("div",null,[C("h3",null,"操作空間建模")]),C("span",null,"拖曳可旋轉、滾輪可縮放；停留於圖示可查看座標")],-1)),C("p",{class:Bn(["nearby-screw-alert",{inactive:!((ko=S.value.workspace)!=null&&ko.notification)}])},ge((Vo=S.value.workspace)!=null&&Vo.notification?`提示：${S.value.workspace.notification}`:"附近目前沒有螺絲。"),3),C("div",{ref_key:"sceneContainer",ref:Q,class:"three-scene"},[C("div",{ref_key:"sceneTooltip",ref:G,class:"three-tooltip"},null,512)],512),ae[22]||(ae[22]=C("div",{class:"scene-legend"},[C("span",null,[C("i",{class:"legend-anchor"}),Mt("基地站")]),C("span",null,[C("i",{class:"legend-device"}),Mt("設備／攝影機光錐")]),C("span",null,[C("i",{class:"legend-screw"}),Mt("M4（藍）／M6（紫）；金色為可辨識")])],-1))]),C("aside",_C,[ae[33]||(ae[33]=C("h3",null,"UWB + IMU 融合資料",-1)),C("div",vC,[ae[23]||(ae[23]=C("strong",null,"融合輸出設備位置",-1)),C("span",null,"X "+ge(O(S.value.telemetry.position.x))+"　Y "+ge(O(S.value.telemetry.position.y))+"　Z "+ge(O(S.value.telemetry.position.z))+" m",1)]),C("div",xC,[C("div",null,[ae[24]||(ae[24]=C("h4",null,"UWB：8 個基地站距離（m）",-1)),C("div",yC,[(_e(!0),xe(_t,null,Tn(S.value.telemetry.uwbRanges||[],ze=>(_e(),xe("span",{key:ze.stationId},"站 "+ge(ze.stationId+1)+"："+ge(O(ze.distance)),1))),128))])]),C("div",SC,[ae[25]||(ae[25]=C("h4",null,"IMU 即時量測",-1)),C("p",null,"加速度："+ge(O((b=(Ho=S.value.telemetry.imu)==null?void 0:Ho.acceleration)==null?void 0:b.x))+", "+ge(O((oe=(q=S.value.telemetry.imu)==null?void 0:q.acceleration)==null?void 0:oe.y))+", "+ge(O((te=(ee=S.value.telemetry.imu)==null?void 0:ee.acceleration)==null?void 0:te.z))+" m/s²",1),C("p",null,"角速度："+ge(O((He=(Oe=S.value.telemetry.imu)==null?void 0:Oe.gyroscope)==null?void 0:He.x))+", "+ge(O(($e=(Ne=S.value.telemetry.imu)==null?void 0:Ne.gyroscope)==null?void 0:$e.y))+", "+ge(O((ot=(Ke=S.value.telemetry.imu)==null?void 0:Ke.gyroscope)==null?void 0:ot.z))+" °/s",1),C("p",null,"姿態：Roll "+ge(O(S.value.telemetry.orientation.roll))+"°、Pitch "+ge(O(S.value.telemetry.orientation.pitch))+"°、Yaw "+ge(O(S.value.telemetry.orientation.yaw))+"°",1)])]),l.value==="live"?(_e(),xe("label",MC,[ae[27]||(ae[27]=Mt("UWB + IMU 融合演算法",-1)),Kt(C("select",{"onUpdate:modelValue":ae[10]||(ae[10]=ze=>d.value=ze),onChange:be},[...ae[26]||(ae[26]=[C("option",{value:"ekf"},"Error-State Extended Kalman Filter (ES-EKF)",-1),C("option",{value:"complementary"},"Complementary Filter",-1),C("option",{value:"weighted_average"},"Weighted Average",-1)])],544),[[ur,d.value]])])):(_e(),xe("div",bC,[ae[31]||(ae[31]=C("strong",null,"演算法路徑",-1)),C("label",EC,[Kt(C("input",{"onUpdate:modelValue":ae[11]||(ae[11]=ze=>F.ekf=ze),type:"checkbox",onChange:Ce},null,544),[[qo,F.ekf]]),ae[28]||(ae[28]=C("span",null,"ES-EKF",-1))]),C("label",TC,[Kt(C("input",{"onUpdate:modelValue":ae[12]||(ae[12]=ze=>F.complementary=ze),type:"checkbox",onChange:Ce},null,544),[[qo,F.complementary]]),ae[29]||(ae[29]=C("span",null,"互補濾波",-1))]),C("label",AC,[Kt(C("input",{"onUpdate:modelValue":ae[13]||(ae[13]=ze=>F.weighted_average=ze),type:"checkbox",onChange:Ce},null,544),[[qo,F.weighted_average]]),ae[30]||(ae[30]=C("span",null,"加權平均",-1))])])),ln(Ze,{class:"calibration-link",to:"/settings/camera-extrinsics"},{default:Fa(()=>[...ae[32]||(ae[32]=[Mt("設定 RGB-D 相機外參 →",-1)])]),_:1})])])):wt("",!0)],64)),L.value?(_e(),xe("p",wC,ge(L.value),1)):wt("",!0),T.value?(_e(),xe("p",RC,ge(T.value),1)):wt("",!0)])}}},PC={},DC={class:"page-card"};function LC(t,e){return _e(),xe("section",DC,[...e[0]||(e[0]=[ef('<div class="section-title"><p class="eyebrow">Media</p><h2>語音提示查詢</h2></div><article class="panel"><h3>提示內容</h3><div class="list-card"><div class="item-row"><span>提示 1</span><strong>請保持安全距離</strong></div><div class="item-row"><span>提示 2</span><strong>區域偵測已完成</strong></div><div class="item-row"><span>提示 3</span><strong>即將開始下一段任務</strong></div></div></article>',2)])])}const IC=Uo(PC,[["render",LC]]),NC={class:"page-card calibration-page"},UC={class:"panel calibration-panel"},OC={key:0,class:"placeholder"},FC={class:"extrinsics-grid"},BC=["onUpdate:modelValue"],zC={class:"matrix-card"},kC={key:0,class:"calibration-saved"},VC={key:1,class:"success"},HC={key:2,class:"alert"},GC={class:"calibration-actions"},WC=["disabled"],XC=["disabled"],qC={__name:"CameraCalibrationPage",setup(t){const e=Ge(!0),n=Ge(!1),i=Ge(""),s=Ge(""),r=Ge(""),o=ys({translation:{x:0,y:0,z:0},rotationDegrees:{x:0,y:0,z:0}}),a=g=>Number(g||0)*Math.PI/180,l=ft(()=>{const g=a(o.rotationDegrees.x),v=a(o.rotationDegrees.y),m=a(o.rotationDegrees.z),[p,M]=[Math.cos(g),Math.sin(g)],[S,y]=[Math.cos(v),Math.sin(v)],[R,T]=[Math.cos(m),Math.sin(m)];return[[R*S,R*y*M-T*p,R*y*p+T*M],[T*S,T*y*M+R*p,T*y*p-R*M],[-y,S*M,S*p]]}),c=ft(()=>l.value.map(g=>g.map(v=>v.toFixed(6)).join("   ")).join(`
`)),u=g=>{var v,m;for(const p of["x","y","z"])o.translation[p]=((v=g.translation)==null?void 0:v[p])??0,o.rotationDegrees[p]=((m=g.rotationDegrees)==null?void 0:m[p])??0;r.value=g.updatedAt?new Date(g.updatedAt).toLocaleString("zh-TW"):""},f=async()=>{var g,v;e.value=!0,s.value="";try{u((await Nt.get("/calibration/camera-extrinsics")).data)}catch(m){s.value=((v=(g=m.response)==null?void 0:g.data)==null?void 0:v.error)||"無法讀取相機外參設定。"}finally{e.value=!1}},d=async()=>{var g,v;n.value=!0,s.value="",i.value="";try{const m=(await Nt.put("/calibration/camera-extrinsics",{translation:{...o.translation},rotationDegrees:{...o.rotationDegrees}})).data;u(m),i.value="相機外參已儲存，後端與 AI 可透過校正 API 讀取此設定。"}catch(m){s.value=((v=(g=m.response)==null?void 0:g.data)==null?void 0:v.error)||"儲存相機外參失敗。"}finally{n.value=!1}},h=()=>{u({translation:{x:0,y:0,z:0},rotationDegrees:{x:0,y:0,z:0}}),i.value="",s.value=""};return Ji(f),(g,v)=>(_e(),xe("section",NC,[v[10]||(v[10]=ef('<div class="section-title"><p class="eyebrow">Calibration</p><h2>相機外參校正</h2><p class="calibration-lead">設定深度相機座標系 C 轉換至設備／IMU 座標系 B 的固定外參：<code>p<sup>B</sup> = R<sub>C</sub><sup>B</sup> p<sup>C</sup> + t<sub>C</sub><sup>B</sup></code>。</p></div>',1)),C("article",UC,[e.value?(_e(),xe("p",OC,"正在載入校正設定…")):(_e(),xe(_t,{key:1},[v[9]||(v[9]=C("div",{class:"calibration-reference"},[C("div",null,[C("strong",null,"設備／IMU 座標 B"),C("span",null,"X：設備前方　Y：左方　Z：上方")]),C("div",null,[C("strong",null,"RGB-D 相機座標 C"),C("span",null,"X：影像右方　Y：影像下方　Z：鏡頭前方")])],-1)),C("div",FC,[C("fieldset",null,[v[3]||(v[3]=C("legend",null,[Mt("平移 t"),C("sub",null,"C"),C("sup",null,"B"),Mt("（公尺）")],-1)),(_e(),xe(_t,null,Tn(["x","y","z"],m=>C("label",{key:`translation-${m}`},[Mt(ge(m.toUpperCase())+" ",1),Kt(C("input",{"onUpdate:modelValue":p=>o.translation[m]=p,type:"number",step:"0.001","aria-label":"translation axis"},null,8,BC),[[ti,o.translation[m],void 0,{number:!0}]])])),64))]),C("fieldset",null,[v[7]||(v[7]=C("legend",null,[Mt("旋轉 R"),C("sub",null,"C"),C("sup",null,"B"),Mt("（Euler 角，度）")],-1)),C("label",null,[v[4]||(v[4]=Mt("Roll（繞 X 軸）",-1)),Kt(C("input",{"onUpdate:modelValue":v[0]||(v[0]=m=>o.rotationDegrees.x=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[ti,o.rotationDegrees.x,void 0,{number:!0}]])]),C("label",null,[v[5]||(v[5]=Mt("Pitch（繞 Y 軸）",-1)),Kt(C("input",{"onUpdate:modelValue":v[1]||(v[1]=m=>o.rotationDegrees.y=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[ti,o.rotationDegrees.y,void 0,{number:!0}]])]),C("label",null,[v[6]||(v[6]=Mt("Yaw（繞 Z 軸）",-1)),Kt(C("input",{"onUpdate:modelValue":v[2]||(v[2]=m=>o.rotationDegrees.z=m),type:"number",step:"0.1",min:"-360",max:"360"},null,512),[[ti,o.rotationDegrees.z,void 0,{number:!0}]])])])]),C("div",zC,[v[8]||(v[8]=C("div",null,[C("strong",null,[Mt("計算後的旋轉矩陣 R"),C("sub",null,"C"),C("sup",null,"B")]),C("small",null,"採用 Z(Yaw) → Y(Pitch) → X(Roll) 的旋轉順序。")],-1)),C("pre",null,ge(c.value),1)]),r.value?(_e(),xe("p",kC,"最後儲存："+ge(r.value),1)):wt("",!0),i.value?(_e(),xe("p",VC,ge(i.value),1)):wt("",!0),s.value?(_e(),xe("p",HC,ge(s.value),1)):wt("",!0),C("div",GC,[C("button",{type:"button",class:"secondary-button",disabled:n.value,onClick:h},"重設為零值",8,WC),C("button",{type:"button",disabled:n.value,onClick:d},ge(n.value?"儲存中…":"儲存外參設定"),9,XC)])],64))])]))}},$C=[{path:"/",name:"home",component:IS,meta:{requiresAuth:!0}},{path:"/account/login",name:"account-login",component:HS},{path:"/account/profile",name:"account-profile",component:oM,meta:{requiresAuth:!0}},{path:"/account/password",name:"account-password",component:uM,meta:{requiresAuth:!0}},{path:"/guide",name:"guide",component:pM},{path:"/technology",name:"technology",component:vM},{path:"/history/object",name:"history-object",component:EM,meta:{requiresAuth:!0}},{path:"/history/tasks",name:"history-tasks",component:PM,meta:{requiresAuth:!0}},{path:"/history/operations",name:"history-operations",component:OM,meta:{requiresAuth:!0}},{path:"/media/stream",name:"media-stream",component:CC,meta:{requiresAuth:!0}},{path:"/media/voice",name:"media-voice",component:IC,meta:{requiresAuth:!0}},{path:"/settings/camera-extrinsics",name:"camera-extrinsics",component:qC,meta:{requiresAuth:!0}}],Ug=ux({history:Wv(),routes:$C});Ug.beforeEach(t=>{if(t.meta.requiresAuth&&!Wa.value)return{name:"account-login",query:{redirect:t.fullPath}};if(t.name==="account-login"&&Wa.value)return{path:"/"}});sv(Mx).use(Ug).mount("#app");
