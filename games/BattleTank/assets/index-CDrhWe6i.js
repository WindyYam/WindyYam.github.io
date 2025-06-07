(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function eE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ad={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function Jy(){if(tv)return Al;tv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:f,ref:o!==void 0?o:null,props:c}}return Al.Fragment=t,Al.jsx=n,Al.jsxs=n,Al}var ev;function $y(){return ev||(ev=1,ad.exports=Jy()),ad.exports}var Re=$y(),sd={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function tM(){if(nv)return Ce;nv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,A={};function S(z,it,Et){this.props=z,this.context=it,this.refs=A,this.updater=Et||x}S.prototype.isReactComponent={},S.prototype.setState=function(z,it){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,it,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function E(){}E.prototype=S.prototype;function U(z,it,Et){this.props=z,this.context=it,this.refs=A,this.updater=Et||x}var C=U.prototype=new E;C.constructor=U,y(C,S.prototype),C.isPureReactComponent=!0;var R=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function F(z,it,Et,Ut,nt,pt){return Et=pt.ref,{$$typeof:r,type:z,key:it,ref:Et!==void 0?Et:null,props:pt}}function X(z,it){return F(z.type,it,void 0,void 0,void 0,z.props)}function N(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function w(z){var it={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Et){return it[Et]})}var V=/\/+/g;function st(z,it){return typeof z=="object"&&z!==null&&z.key!=null?w(""+z.key):it.toString(36)}function ut(){}function vt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(ut,ut):(z.status="pending",z.then(function(it){z.status==="pending"&&(z.status="fulfilled",z.value=it)},function(it){z.status==="pending"&&(z.status="rejected",z.reason=it)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ft(z,it,Et,Ut,nt){var pt=typeof z;(pt==="undefined"||pt==="boolean")&&(z=null);var Pt=!1;if(z===null)Pt=!0;else switch(pt){case"bigint":case"string":case"number":Pt=!0;break;case"object":switch(z.$$typeof){case r:case t:Pt=!0;break;case g:return Pt=z._init,ft(Pt(z._payload),it,Et,Ut,nt)}}if(Pt)return nt=nt(z),Pt=Ut===""?"."+st(z,0):Ut,R(nt)?(Et="",Pt!=null&&(Et=Pt.replace(V,"$&/")+"/"),ft(nt,it,Et,"",function(me){return me})):nt!=null&&(N(nt)&&(nt=X(nt,Et+(nt.key==null||z&&z.key===nt.key?"":(""+nt.key).replace(V,"$&/")+"/")+Pt)),it.push(nt)),1;Pt=0;var Ft=Ut===""?".":Ut+":";if(R(z))for(var Ht=0;Ht<z.length;Ht++)Ut=z[Ht],pt=Ft+st(Ut,Ht),Pt+=ft(Ut,it,Et,pt,nt);else if(Ht=v(z),typeof Ht=="function")for(z=Ht.call(z),Ht=0;!(Ut=z.next()).done;)Ut=Ut.value,pt=Ft+st(Ut,Ht++),Pt+=ft(Ut,it,Et,pt,nt);else if(pt==="object"){if(typeof z.then=="function")return ft(vt(z),it,Et,Ut,nt);throw it=String(z),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return Pt}function B(z,it,Et){if(z==null)return z;var Ut=[],nt=0;return ft(z,Ut,"","",function(pt){return it.call(Et,pt,nt++)}),Ut}function j(z){if(z._status===-1){var it=z._result;it=it(),it.then(function(Et){(z._status===0||z._status===-1)&&(z._status=1,z._result=Et)},function(Et){(z._status===0||z._status===-1)&&(z._status=2,z._result=Et)}),z._status===-1&&(z._status=0,z._result=it)}if(z._status===1)return z._result.default;throw z._result}var K=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function At(){}return Ce.Children={map:B,forEach:function(z,it,Et){B(z,function(){it.apply(this,arguments)},Et)},count:function(z){var it=0;return B(z,function(){it++}),it},toArray:function(z){return B(z,function(it){return it})||[]},only:function(z){if(!N(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Ce.Component=S,Ce.Fragment=n,Ce.Profiler=o,Ce.PureComponent=U,Ce.StrictMode=a,Ce.Suspense=m,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(z){return G.H.useMemoCache(z)}},Ce.cache=function(z){return function(){return z.apply(null,arguments)}},Ce.cloneElement=function(z,it,Et){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ut=y({},z.props),nt=z.key,pt=void 0;if(it!=null)for(Pt in it.ref!==void 0&&(pt=void 0),it.key!==void 0&&(nt=""+it.key),it)!H.call(it,Pt)||Pt==="key"||Pt==="__self"||Pt==="__source"||Pt==="ref"&&it.ref===void 0||(Ut[Pt]=it[Pt]);var Pt=arguments.length-2;if(Pt===1)Ut.children=Et;else if(1<Pt){for(var Ft=Array(Pt),Ht=0;Ht<Pt;Ht++)Ft[Ht]=arguments[Ht+2];Ut.children=Ft}return F(z.type,nt,void 0,void 0,pt,Ut)},Ce.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},Ce.createElement=function(z,it,Et){var Ut,nt={},pt=null;if(it!=null)for(Ut in it.key!==void 0&&(pt=""+it.key),it)H.call(it,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(nt[Ut]=it[Ut]);var Pt=arguments.length-2;if(Pt===1)nt.children=Et;else if(1<Pt){for(var Ft=Array(Pt),Ht=0;Ht<Pt;Ht++)Ft[Ht]=arguments[Ht+2];nt.children=Ft}if(z&&z.defaultProps)for(Ut in Pt=z.defaultProps,Pt)nt[Ut]===void 0&&(nt[Ut]=Pt[Ut]);return F(z,pt,void 0,void 0,null,nt)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(z){return{$$typeof:h,render:z}},Ce.isValidElement=N,Ce.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:j}},Ce.memo=function(z,it){return{$$typeof:p,type:z,compare:it===void 0?null:it}},Ce.startTransition=function(z){var it=G.T,Et={};G.T=Et;try{var Ut=z(),nt=G.S;nt!==null&&nt(Et,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(At,K)}catch(pt){K(pt)}finally{G.T=it}},Ce.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},Ce.use=function(z){return G.H.use(z)},Ce.useActionState=function(z,it,Et){return G.H.useActionState(z,it,Et)},Ce.useCallback=function(z,it){return G.H.useCallback(z,it)},Ce.useContext=function(z){return G.H.useContext(z)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(z,it){return G.H.useDeferredValue(z,it)},Ce.useEffect=function(z,it,Et){var Ut=G.H;if(typeof Et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Ut.useEffect(z,it)},Ce.useId=function(){return G.H.useId()},Ce.useImperativeHandle=function(z,it,Et){return G.H.useImperativeHandle(z,it,Et)},Ce.useInsertionEffect=function(z,it){return G.H.useInsertionEffect(z,it)},Ce.useLayoutEffect=function(z,it){return G.H.useLayoutEffect(z,it)},Ce.useMemo=function(z,it){return G.H.useMemo(z,it)},Ce.useOptimistic=function(z,it){return G.H.useOptimistic(z,it)},Ce.useReducer=function(z,it,Et){return G.H.useReducer(z,it,Et)},Ce.useRef=function(z){return G.H.useRef(z)},Ce.useState=function(z){return G.H.useState(z)},Ce.useSyncExternalStore=function(z,it,Et){return G.H.useSyncExternalStore(z,it,Et)},Ce.useTransition=function(){return G.H.useTransition()},Ce.version="19.1.0",Ce}var iv;function im(){return iv||(iv=1,sd.exports=tM()),sd.exports}var Vt=im();const Qu=eE(Vt);var rd={exports:{}},Rl={},od={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function eM(){return av||(av=1,function(r){function t(B,j){var K=B.length;B.push(j);t:for(;0<K;){var At=K-1>>>1,z=B[At];if(0<o(z,j))B[At]=j,B[K]=z,K=At;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var j=B[0],K=B.pop();if(K!==j){B[0]=K;t:for(var At=0,z=B.length,it=z>>>1;At<it;){var Et=2*(At+1)-1,Ut=B[Et],nt=Et+1,pt=B[nt];if(0>o(Ut,K))nt<z&&0>o(pt,Ut)?(B[At]=pt,B[nt]=K,At=nt):(B[At]=Ut,B[Et]=K,At=Et);else if(nt<z&&0>o(pt,K))B[At]=pt,B[nt]=K,At=nt;else break t}}return j}function o(B,j){var K=B.sortIndex-j.sortIndex;return K!==0?K:B.id-j.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,v=3,x=!1,y=!1,A=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function R(B){for(var j=n(p);j!==null;){if(j.callback===null)a(p);else if(j.startTime<=B)a(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=n(p)}}function G(B){if(A=!1,R(B),!y)if(n(m)!==null)y=!0,H||(H=!0,st());else{var j=n(p);j!==null&&ft(G,j.startTime-B)}}var H=!1,F=-1,X=5,N=-1;function w(){return S?!0:!(r.unstable_now()-N<X)}function V(){if(S=!1,H){var B=r.unstable_now();N=B;var j=!0;try{t:{y=!1,A&&(A=!1,U(F),F=-1),x=!0;var K=v;try{e:{for(R(B),_=n(m);_!==null&&!(_.expirationTime>B&&w());){var At=_.callback;if(typeof At=="function"){_.callback=null,v=_.priorityLevel;var z=At(_.expirationTime<=B);if(B=r.unstable_now(),typeof z=="function"){_.callback=z,R(B),j=!0;break e}_===n(m)&&a(m),R(B)}else a(m);_=n(m)}if(_!==null)j=!0;else{var it=n(p);it!==null&&ft(G,it.startTime-B),j=!1}}break t}finally{_=null,v=K,x=!1}j=void 0}}finally{j?st():H=!1}}}var st;if(typeof C=="function")st=function(){C(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,vt=ut.port2;ut.port1.onmessage=V,st=function(){vt.postMessage(null)}}else st=function(){E(V,0)};function ft(B,j){F=E(function(){B(r.unstable_now())},j)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(B){switch(v){case 1:case 2:case 3:var j=3;break;default:j=v}var K=v;v=j;try{return B()}finally{v=K}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(B,j){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=v;v=B;try{return j()}finally{v=K}},r.unstable_scheduleCallback=function(B,j,K){var At=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?At+K:At):K=At,B){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=K+z,B={id:g++,callback:j,priorityLevel:B,startTime:K,expirationTime:z,sortIndex:-1},K>At?(B.sortIndex=K,t(p,B),n(m)===null&&B===n(p)&&(A?(U(F),F=-1):A=!0,ft(G,K-At))):(B.sortIndex=z,t(m,B),y||x||(y=!0,H||(H=!0,st()))),B},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(B){var j=v;return function(){var K=v;v=j;try{return B.apply(this,arguments)}finally{v=K}}}}(ld)),ld}var sv;function nM(){return sv||(sv=1,od.exports=eM()),od.exports}var cd={exports:{}},oi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function iM(){if(rv)return oi;rv=1;var r=im();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return oi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,oi.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},oi.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},oi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},oi.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},oi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},oi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},oi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},oi.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},oi.requestFormReset=function(m){a.d.r(m)},oi.unstable_batchedUpdates=function(m,p){return m(p)},oi.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},oi.useFormStatus=function(){return f.H.useHostTransitionStatus()},oi.version="19.1.0",oi}var ov;function aM(){if(ov)return cd.exports;ov=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),cd.exports=iM(),cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function sM(){if(lv)return Rl;lv=1;var r=nM(),t=im(),n=aM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return h(u),e;if(d===l)return h(u),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=u,l=d;else{for(var M=!1,b=u.child;b;){if(b===s){M=!0,s=u,l=d;break}if(b===l){M=!0,l=u,s=d;break}b=b.sibling}if(!M){for(b=d.child;b;){if(b===s){M=!0,s=d,l=u;break}if(b===l){M=!0,l=d,s=u;break}b=b.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),C=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case G:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case C:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:vt(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return vt(e(i))}catch{}}return null}var ft=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},At=[],z=-1;function it(e){return{current:e}}function Et(e){0>z||(e.current=At[z],At[z]=null,z--)}function Ut(e,i){z++,At[z]=e.current,e.current=i}var nt=it(null),pt=it(null),Pt=it(null),Ft=it(null);function Ht(e,i){switch(Ut(Pt,i),Ut(pt,e),Ut(nt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?w_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=w_(i),e=C_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Et(nt),Ut(nt,e)}function me(){Et(nt),Et(pt),Et(Pt)}function ae(e){e.memoizedState!==null&&Ut(Ft,e);var i=nt.current,s=C_(i,e.type);i!==s&&(Ut(pt,e),Ut(nt,s))}function Oe(e){pt.current===e&&(Et(nt),Et(pt)),Ft.current===e&&(Et(Ft),El._currentValue=K)}var Wt=Object.prototype.hasOwnProperty,jt=r.unstable_scheduleCallback,O=r.unstable_cancelCallback,Bt=r.unstable_shouldYield,Zt=r.unstable_requestPaint,qt=r.unstable_now,Rt=r.unstable_getCurrentPriorityLevel,de=r.unstable_ImmediatePriority,Xt=r.unstable_UserBlockingPriority,le=r.unstable_NormalPriority,Ae=r.unstable_LowPriority,L=r.unstable_IdlePriority,T=r.log,P=r.unstable_setDisableYieldValue,W=null,ct=null;function $(e){if(typeof T=="function"&&P(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(W,e)}catch{}}var zt=Math.clz32?Math.clz32:Kt,Ct=Math.log,Nt=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(Ct(e)/Nt|0)|0}var wt=256,Gt=4194304;function tt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ot(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~d,l!==0?u=tt(l):(M&=b,M!==0?u=tt(M):s||(s=b&~e,s!==0&&(u=tt(s))))):(b=l&~d,b!==0?u=tt(b):M!==0?u=tt(M):s||(s=l&~e,s!==0&&(u=tt(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Mt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Dt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I(){var e=wt;return wt<<=1,(wt&4194048)===0&&(wt=256),e}function Tt(){var e=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),e}function ot(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function St(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,i,s,l,u,d){var M=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,k=e.expirationTimes,dt=e.hiddenUpdates;for(s=M&~s;0<s;){var bt=31-zt(s),It=1<<bt;b[bt]=0,k[bt]=-1;var mt=dt[bt];if(mt!==null)for(dt[bt]=null,bt=0;bt<mt.length;bt++){var _t=mt[bt];_t!==null&&(_t.lane&=-536870913)}s&=~It}l!==0&&gt(e,l,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~i))}function gt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-zt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function yt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-zt(s),u=1<<l;u&i|e[l]&i&&(e[l]|=i),s&=~u}}function Yt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function se(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qt(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Z_(e.type))}function $e(e,i){var s=j.p;try{return j.p=e,i()}finally{j.p=s}}var fe=Math.random().toString(36).slice(2),be="__reactFiber$"+fe,we="__reactProps$"+fe,Sn="__reactContainer$"+fe,pn="__reactEvents$"+fe,Ke="__reactListeners$"+fe,qe="__reactHandles$"+fe,Qn="__reactResources$"+fe,re="__reactMarker$"+fe;function ee(e){delete e[be],delete e[we],delete e[pn],delete e[Ke],delete e[qe]}function $t(e){var i=e[be];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Sn]||s[be]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=U_(e);e!==null;){if(s=e[be])return s;e=U_(e)}return i}e=s,s=e.parentNode}return null}function Le(e){if(e=e[be]||e[Sn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function tn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function en(e){var i=e[Qn];return i||(i=e[Qn]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ie(e){e[re]=!0}var yi=new Set,$i={};function fi(e,i){D(e,i),D(e+"Capture",i)}function D(e,i){for($i[e]=i,e=0;e<i.length;e++)yi.add(i[e])}var et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Q={},lt={};function J(e){return Wt.call(lt,e)?!0:Wt.call(Q,e)?!1:et.test(e)?lt[e]=!0:(Q[e]=!0,!1)}function kt(e,i,s){if(J(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Jt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function ne(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var ie,Ee;function ge(e){if(ie===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ie=i&&i[1]||"",Ee=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ie+e+Ee}var he=!1;function Ue(e,i){if(!e||he)return"";he=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var It=function(){throw Error()};if(Object.defineProperty(It.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(It,[])}catch(_t){var mt=_t}Reflect.construct(e,[],It)}else{try{It.call()}catch(_t){mt=_t}e.call(It.prototype)}}else{try{throw Error()}catch(_t){mt=_t}(It=e())&&typeof It.catch=="function"&&It.catch(function(){})}}catch(_t){if(_t&&mt&&typeof _t.stack=="string")return[_t.stack,mt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),M=d[0],b=d[1];if(M&&b){var k=M.split(`
`),dt=b.split(`
`);for(u=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;u<dt.length&&!dt[u].includes("DetermineComponentFrameRoot");)u++;if(l===k.length||u===dt.length)for(l=k.length-1,u=dt.length-1;1<=l&&0<=u&&k[l]!==dt[u];)u--;for(;1<=l&&0<=u;l--,u--)if(k[l]!==dt[u]){if(l!==1||u!==1)do if(l--,u--,0>u||k[l]!==dt[u]){var bt=`
`+k[l].replace(" at new "," at ");return e.displayName&&bt.includes("<anonymous>")&&(bt=bt.replace("<anonymous>",e.displayName)),bt}while(1<=l&&0<=u);break}}}finally{he=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ge(s):""}function Qe(e){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return Ue(e.type,!1);case 11:return Ue(e.type.render,!1);case 1:return Ue(e.type,!0);case 31:return ge("Activity");default:return""}}function mn(e){try{var i="";do i+=Qe(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _e(e){var i=ke(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,d=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,d.call(this,M)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function An(e){e._valueTracker||(e._valueTracker=_e(e))}function Xe(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=ke(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ns=/[\n"\\]/g;function gn(e){return e.replace(ns,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ra(e,i,s,l,u,d,M,b){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ve(i)):e.value!==""+Ve(i)&&(e.value=""+Ve(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?si(e,M,Ve(i)):s!=null?si(e,M,Ve(s)):l!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Ve(b):e.removeAttribute("name")}function fn(e,i,s,l,u,d,M,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+Ve(s):"",i=i!=null?""+Ve(i):s,b||i===e.value||(e.value=i),e.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function si(e,i,s){i==="number"&&ai(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function In(e,i,s,l){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Ve(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Vn(e,i,s){if(i!=null&&(i=""+Ve(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Ve(s):""}function Jn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ft(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Ve(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function ua(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ba=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wm(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||ba.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Cm(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&wm(e,u,l)}else for(var d in i)i.hasOwnProperty(d)&&wm(e,d,i[d])}function nf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var KE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),QE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(e){return QE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var af=null;function sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vr=null,xr=null;function Dm(e){var i=Le(e);if(i&&(e=i.stateNode)){var s=e[we]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ra(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+gn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var u=l[we]||null;if(!u)throw Error(a(90));Ra(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Xe(l)}break t;case"textarea":Vn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&In(e,!!s.multiple,i,!1)}}}var rf=!1;function Nm(e,i,s){if(rf)return e(i,s);rf=!0;try{var l=e(i);return l}finally{if(rf=!1,(vr!==null||xr!==null)&&(zc(),vr&&(i=vr,e=xr,xr=vr=null,Dm(i),e)))for(i=0;i<e.length;i++)Dm(e[i])}}function Uo(e,i){var s=e.stateNode;if(s===null)return null;var l=s[we]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=!1;if(wa)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){of=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{of=!1}var is=null,lf=null,$l=null;function Lm(){if($l)return $l;var e,i=lf,s=i.length,l,u="value"in is?is.value:is.textContent,d=u.length;for(e=0;e<s&&i[e]===u[e];e++);var M=s-e;for(l=1;l<=M&&i[s-l]===u[d-l];l++);return $l=u.slice(e,1<l?1-l:void 0)}function tc(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ec(){return!0}function Um(){return!1}function Mi(e){function i(s,l,u,d,M){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ec:Um,this.isPropagationStopped=Um,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),i}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=Mi(Bs),Oo=g({},Bs,{view:0,detail:0}),JE=Mi(Oo),cf,uf,Io,ic=g({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Io&&(Io&&e.type==="mousemove"?(cf=e.screenX-Io.screenX,uf=e.screenY-Io.screenY):uf=cf=0,Io=e),cf)},movementY:function(e){return"movementY"in e?e.movementY:uf}}),Pm=Mi(ic),$E=g({},ic,{dataTransfer:0}),tS=Mi($E),eS=g({},Oo,{relatedTarget:0}),ff=Mi(eS),nS=g({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=Mi(nS),aS=g({},Bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sS=Mi(aS),rS=g({},Bs,{data:0}),Om=Mi(rS),oS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=cS[e])?!!i[e]:!1}function hf(){return uS}var fS=g({},Oo,{key:function(e){if(e.key){var i=oS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=tc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(e){return e.type==="keypress"?tc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hS=Mi(fS),dS=g({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=Mi(dS),pS=g({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),mS=Mi(pS),gS=g({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=Mi(gS),vS=g({},ic,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=Mi(vS),ES=g({},Bs,{newState:0,oldState:0}),SS=Mi(ES),yS=[9,13,27,32],df=wa&&"CompositionEvent"in window,zo=null;wa&&"documentMode"in document&&(zo=document.documentMode);var MS=wa&&"TextEvent"in window&&!zo,zm=wa&&(!df||zo&&8<zo&&11>=zo),Bm=" ",Fm=!1;function Hm(e,i){switch(e){case"keyup":return yS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function TS(e,i){switch(e){case"compositionend":return Gm(i);case"keypress":return i.which!==32?null:(Fm=!0,Bm);case"textInput":return e=i.data,e===Bm&&Fm?null:e;default:return null}}function AS(e,i){if(Er)return e==="compositionend"||!df&&Hm(e,i)?(e=Lm(),$l=lf=is=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zm&&i.locale!=="ko"?null:i.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!RS[e.type]:i==="textarea"}function km(e,i,s,l){vr?xr?xr.push(l):xr=[l]:vr=l,i=kc(i,"onChange"),0<i.length&&(s=new nc("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Bo=null,Fo=null;function bS(e){M_(e,0)}function ac(e){var i=tn(e);if(Xe(i))return e}function Ym(e,i){if(e==="change")return i}var Xm=!1;if(wa){var pf;if(wa){var mf="oninput"in document;if(!mf){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),mf=typeof Wm.oninput=="function"}pf=mf}else pf=!1;Xm=pf&&(!document.documentMode||9<document.documentMode)}function qm(){Bo&&(Bo.detachEvent("onpropertychange",Zm),Fo=Bo=null)}function Zm(e){if(e.propertyName==="value"&&ac(Fo)){var i=[];km(i,Fo,e,sf(e)),Nm(bS,i)}}function wS(e,i,s){e==="focusin"?(qm(),Bo=i,Fo=s,Bo.attachEvent("onpropertychange",Zm)):e==="focusout"&&qm()}function CS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ac(Fo)}function DS(e,i){if(e==="click")return ac(i)}function NS(e,i){if(e==="input"||e==="change")return ac(i)}function LS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Ci=typeof Object.is=="function"?Object.is:LS;function Ho(e,i){if(Ci(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Wt.call(i,u)||!Ci(e[u],i[u]))return!1}return!0}function jm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Km(e,i){var s=jm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=jm(s)}}function Qm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Qm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Jm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ai(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=ai(e.document)}return i}function gf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var US=wa&&"documentMode"in document&&11>=document.documentMode,Sr=null,_f=null,Go=null,vf=!1;function $m(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;vf||Sr==null||Sr!==ai(l)||(l=Sr,"selectionStart"in l&&gf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=kc(_f,"onSelect"),0<l.length&&(i=new nc("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=Sr)))}function Fs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var yr={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionrun:Fs("Transition","TransitionRun"),transitionstart:Fs("Transition","TransitionStart"),transitioncancel:Fs("Transition","TransitionCancel"),transitionend:Fs("Transition","TransitionEnd")},xf={},t0={};wa&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Hs(e){if(xf[e])return xf[e];if(!yr[e])return e;var i=yr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in t0)return xf[e]=i[s];return e}var e0=Hs("animationend"),n0=Hs("animationiteration"),i0=Hs("animationstart"),PS=Hs("transitionrun"),OS=Hs("transitionstart"),IS=Hs("transitioncancel"),a0=Hs("transitionend"),s0=new Map,Ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ef.push("scrollEnd");function ta(e,i){s0.set(e,i),fi(i,[e])}var r0=new WeakMap;function Vi(e,i){if(typeof e=="object"&&e!==null){var s=r0.get(e);return s!==void 0?s:(i={value:e,source:i,stack:mn(i)},r0.set(e,i),i)}return{value:e,source:i,stack:mn(i)}}var ki=[],Mr=0,Sf=0;function sc(){for(var e=Mr,i=Sf=Mr=0;i<e;){var s=ki[i];ki[i++]=null;var l=ki[i];ki[i++]=null;var u=ki[i];ki[i++]=null;var d=ki[i];if(ki[i++]=null,l!==null&&u!==null){var M=l.pending;M===null?u.next=u:(u.next=M.next,M.next=u),l.pending=u}d!==0&&o0(s,u,d)}}function rc(e,i,s,l){ki[Mr++]=e,ki[Mr++]=i,ki[Mr++]=s,ki[Mr++]=l,Sf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function yf(e,i,s,l){return rc(e,i,s,l),oc(e)}function Tr(e,i){return rc(e,null,null,i),oc(e)}function o0(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var u=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-zt(s),e=d.hiddenUpdates,l=e[u],l===null?e[u]=[i]:l.push(i),i.lane=s|536870912),d):null}function oc(e){if(50<hl)throw hl=0,wh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ar={};function zS(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(e,i,s,l){return new zS(e,i,s,l)}function Mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ca(e,i){var s=e.alternate;return s===null?(s=Di(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function l0(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function lc(e,i,s,l,u,d){var M=0;if(l=e,typeof e=="function")Mf(e)&&(M=1);else if(typeof e=="string")M=Fy(e,s,nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Di(31,s,i,u),e.elementType=N,e.lanes=d,e;case y:return Gs(s.children,u,d,i);case A:M=8,u|=24;break;case S:return e=Di(12,s,i,u|2),e.elementType=S,e.lanes=d,e;case G:return e=Di(13,s,i,u),e.elementType=G,e.lanes=d,e;case H:return e=Di(19,s,i,u),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case E:case C:M=10;break t;case U:M=9;break t;case R:M=11;break t;case F:M=14;break t;case X:M=16,l=null;break t}M=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=Di(M,s,i,u),i.elementType=e,i.type=l,i.lanes=d,i}function Gs(e,i,s,l){return e=Di(7,e,l,i),e.lanes=s,e}function Tf(e,i,s){return e=Di(6,e,null,i),e.lanes=s,e}function Af(e,i,s){return i=Di(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Rr=[],br=0,cc=null,uc=0,Yi=[],Xi=0,Vs=null,Da=1,Na="";function ks(e,i){Rr[br++]=uc,Rr[br++]=cc,cc=e,uc=i}function c0(e,i,s){Yi[Xi++]=Da,Yi[Xi++]=Na,Yi[Xi++]=Vs,Vs=e;var l=Da;e=Na;var u=32-zt(l)-1;l&=~(1<<u),s+=1;var d=32-zt(i)+u;if(30<d){var M=u-u%5;d=(l&(1<<M)-1).toString(32),l>>=M,u-=M,Da=1<<32-zt(i)+u|s<<u|l,Na=d+e}else Da=1<<d|s<<u|l,Na=e}function Rf(e){e.return!==null&&(ks(e,1),c0(e,1,0))}function bf(e){for(;e===cc;)cc=Rr[--br],Rr[br]=null,uc=Rr[--br],Rr[br]=null;for(;e===Vs;)Vs=Yi[--Xi],Yi[Xi]=null,Na=Yi[--Xi],Yi[Xi]=null,Da=Yi[--Xi],Yi[Xi]=null}var hi=null,Rn=null,Je=!1,Ys=null,fa=!1,wf=Error(a(519));function Xs(e){var i=Error(a(418,""));throw Yo(Vi(i,e)),wf}function u0(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[be]=e,i[we]=l,s){case"dialog":He("cancel",i),He("close",i);break;case"iframe":case"object":case"embed":He("load",i);break;case"video":case"audio":for(s=0;s<pl.length;s++)He(pl[s],i);break;case"source":He("error",i);break;case"img":case"image":case"link":He("error",i),He("load",i);break;case"details":He("toggle",i);break;case"input":He("invalid",i),fn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),An(i);break;case"select":He("invalid",i);break;case"textarea":He("invalid",i),Jn(i,l.value,l.defaultValue,l.children),An(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||b_(i.textContent,s)?(l.popover!=null&&(He("beforetoggle",i),He("toggle",i)),l.onScroll!=null&&He("scroll",i),l.onScrollEnd!=null&&He("scrollend",i),l.onClick!=null&&(i.onclick=Yc),i=!0):i=!1,i||Xs(e)}function f0(e){for(hi=e.return;hi;)switch(hi.tag){case 5:case 13:fa=!1;return;case 27:case 3:fa=!0;return;default:hi=hi.return}}function Vo(e){if(e!==hi)return!1;if(!Je)return f0(e),Je=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Yh(e.type,e.memoizedProps)),s=!s),s&&Rn&&Xs(e),f0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){Rn=na(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}Rn=null}}else i===27?(i=Rn,xs(e.type)?(e=Zh,Zh=null,Rn=e):Rn=i):Rn=hi?na(e.stateNode.nextSibling):null;return!0}function ko(){Rn=hi=null,Je=!1}function h0(){var e=Ys;return e!==null&&(Ri===null?Ri=e:Ri.push.apply(Ri,e),Ys=null),e}function Yo(e){Ys===null?Ys=[e]:Ys.push(e)}var Cf=it(null),Ws=null,La=null;function as(e,i,s){Ut(Cf,i._currentValue),i._currentValue=s}function Ua(e){e._currentValue=Cf.current,Et(Cf)}function Df(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Nf(e,i,s,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var k=0;k<i.length;k++)if(b.context===i[k]){d.lanes|=s,b=d.alternate,b!==null&&(b.lanes|=s),Df(d.return,s,e),l||(M=null);break t}d=b.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(a(341));M.lanes|=s,d=M.alternate,d!==null&&(d.lanes|=s),Df(M,s,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Xo(e,i,s,l){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var b=u.type;Ci(u.pendingProps.value,M.value)||(e!==null?e.push(b):e=[b])}}else if(u===Ft.current){if(M=u.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(El):e=[El])}u=u.return}e!==null&&Nf(i,e,s,l),i.flags|=262144}function fc(e){for(e=e.firstContext;e!==null;){if(!Ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qs(e){Ws=e,La=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ri(e){return d0(Ws,e)}function hc(e,i){return Ws===null&&qs(e),d0(e,i)}function d0(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},La===null){if(e===null)throw Error(a(308));La=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else La=La.next=i;return s}var BS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},FS=r.unstable_scheduleCallback,HS=r.unstable_NormalPriority,zn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lf(){return{controller:new BS,data:new Map,refCount:0}}function Wo(e){e.refCount--,e.refCount===0&&FS(HS,function(){e.controller.abort()})}var qo=null,Uf=0,wr=0,Cr=null;function GS(e,i){if(qo===null){var s=qo=[];Uf=0,wr=Oh(),Cr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Uf++,i.then(p0,p0),i}function p0(){if(--Uf===0&&qo!==null){Cr!==null&&(Cr.status="fulfilled");var e=qo;qo=null,wr=0,Cr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function VS(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var m0=B.S;B.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&GS(e,i),m0!==null&&m0(e,i)};var Zs=it(null);function Pf(){var e=Zs.current;return e!==null?e:_n.pooledCache}function dc(e,i){i===null?Ut(Zs,Zs.current):Ut(Zs,i.pool)}function g0(){var e=Pf();return e===null?null:{parent:zn._currentValue,pool:e}}var Zo=Error(a(460)),_0=Error(a(474)),pc=Error(a(542)),Of={then:function(){}};function v0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mc(){}function x0(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(mc,mc),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,S0(e),e;default:if(typeof i.status=="string")i.then(mc,mc);else{if(e=_n,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,S0(e),e}throw jo=i,Zo}}var jo=null;function E0(){if(jo===null)throw Error(a(459));var e=jo;return jo=null,e}function S0(e){if(e===Zo||e===pc)throw Error(a(483))}var ss=!1;function If(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function os(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(nn&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=oc(e),o0(e,null,s),i}return rc(e,l,i,s),oc(e)}function Ko(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,yt(e,s)}}function Bf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Ff=!1;function Qo(){if(Ff){var e=Cr;if(e!==null)throw e}}function Jo(e,i,s,l){Ff=!1;var u=e.updateQueue;ss=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var k=b,dt=k.next;k.next=null,M===null?d=dt:M.next=dt,M=k;var bt=e.alternate;bt!==null&&(bt=bt.updateQueue,b=bt.lastBaseUpdate,b!==M&&(b===null?bt.firstBaseUpdate=dt:b.next=dt,bt.lastBaseUpdate=k))}if(d!==null){var It=u.baseState;M=0,bt=dt=k=null,b=d;do{var mt=b.lane&-536870913,_t=mt!==b.lane;if(_t?(Ye&mt)===mt:(l&mt)===mt){mt!==0&&mt===wr&&(Ff=!0),bt!==null&&(bt=bt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ye=e,xe=b;mt=i;var ln=s;switch(xe.tag){case 1:if(ye=xe.payload,typeof ye=="function"){It=ye.call(ln,It,mt);break t}It=ye;break t;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=xe.payload,mt=typeof ye=="function"?ye.call(ln,It,mt):ye,mt==null)break t;It=g({},It,mt);break t;case 2:ss=!0}}mt=b.callback,mt!==null&&(e.flags|=64,_t&&(e.flags|=8192),_t=u.callbacks,_t===null?u.callbacks=[mt]:_t.push(mt))}else _t={lane:mt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},bt===null?(dt=bt=_t,k=It):bt=bt.next=_t,M|=mt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;_t=b,b=_t.next,_t.next=null,u.lastBaseUpdate=_t,u.shared.pending=null}}while(!0);bt===null&&(k=It),u.baseState=k,u.firstBaseUpdate=dt,u.lastBaseUpdate=bt,d===null&&(u.shared.lanes=0),ms|=M,e.lanes=M,e.memoizedState=It}}function y0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function M0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)y0(s[e],i)}var Dr=it(null),gc=it(0);function T0(e,i){e=Ha,Ut(gc,e),Ut(Dr,i),Ha=e|i.baseLanes}function Hf(){Ut(gc,Ha),Ut(Dr,Dr.current)}function Gf(){Ha=gc.current,Et(Dr),Et(gc)}var ls=0,Pe=null,rn=null,Un=null,_c=!1,Nr=!1,js=!1,vc=0,$o=0,Lr=null,kS=0;function Dn(){throw Error(a(321))}function Vf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Ci(e[s],i[s]))return!1;return!0}function kf(e,i,s,l,u,d){return ls=d,Pe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?og:lg,js=!1,d=s(l,u),js=!1,Nr&&(d=R0(i,s,l,u)),A0(e),d}function A0(e){B.H=Tc;var i=rn!==null&&rn.next!==null;if(ls=0,Un=rn=Pe=null,_c=!1,$o=0,Lr=null,i)throw Error(a(300));e===null||kn||(e=e.dependencies,e!==null&&fc(e)&&(kn=!0))}function R0(e,i,s,l){Pe=e;var u=0;do{if(Nr&&(Lr=null),$o=0,Nr=!1,25<=u)throw Error(a(301));if(u+=1,Un=rn=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=KS,d=i(s,l)}while(Nr);return d}function YS(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?tl(i):i,e=e.useState()[0],(rn!==null?rn.memoizedState:null)!==e&&(Pe.flags|=1024),i}function Yf(){var e=vc!==0;return vc=0,e}function Xf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Wf(e){if(_c){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}_c=!1}ls=0,Un=rn=Pe=null,Nr=!1,$o=vc=0,Lr=null}function Ti(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Un===null?Pe.memoizedState=Un=e:Un=Un.next=e,Un}function Pn(){if(rn===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=rn.next;var i=Un===null?Pe.memoizedState:Un.next;if(i!==null)Un=i,rn=e;else{if(e===null)throw Pe.alternate===null?Error(a(467)):Error(a(310));rn=e,e={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},Un===null?Pe.memoizedState=Un=e:Un=Un.next=e}return Un}function qf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(e){var i=$o;return $o+=1,Lr===null&&(Lr=[]),e=x0(Lr,e,i),i=Pe,(Un===null?i.memoizedState:Un.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?og:lg),e}function xc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tl(e);if(e.$$typeof===C)return ri(e)}throw Error(a(438,String(e)))}function Zf(e){var i=null,s=Pe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Pe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=qf(),Pe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=w;return i.index++,s}function Pa(e,i){return typeof i=="function"?i(e):i}function Ec(e){var i=Pn();return jf(i,rn,e)}function jf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var u=e.baseQueue,d=l.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}i.baseQueue=u=d,l.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var b=M=null,k=null,dt=i,bt=!1;do{var It=dt.lane&-536870913;if(It!==dt.lane?(Ye&It)===It:(ls&It)===It){var mt=dt.revertLane;if(mt===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null}),It===wr&&(bt=!0);else if((ls&mt)===mt){dt=dt.next,mt===wr&&(bt=!0);continue}else It={lane:0,revertLane:dt.revertLane,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null},k===null?(b=k=It,M=d):k=k.next=It,Pe.lanes|=mt,ms|=mt;It=dt.action,js&&s(d,It),d=dt.hasEagerState?dt.eagerState:s(d,It)}else mt={lane:It,revertLane:dt.revertLane,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null},k===null?(b=k=mt,M=d):k=k.next=mt,Pe.lanes|=It,ms|=It;dt=dt.next}while(dt!==null&&dt!==i);if(k===null?M=d:k.next=b,!Ci(d,e.memoizedState)&&(kn=!0,bt&&(s=Cr,s!==null)))throw s;e.memoizedState=d,e.baseState=M,e.baseQueue=k,l.lastRenderedState=d}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Kf(e){var i=Pn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Ci(d,i.memoizedState)||(kn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function b0(e,i,s){var l=Pe,u=Pn(),d=Je;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!Ci((rn||u).memoizedState,s);M&&(u.memoizedState=s,kn=!0),u=u.queue;var b=D0.bind(null,l,u,e);if(el(2048,8,b,[e]),u.getSnapshot!==i||M||Un!==null&&Un.memoizedState.tag&1){if(l.flags|=2048,Ur(9,Sc(),C0.bind(null,l,u,s,i),null),_n===null)throw Error(a(349));d||(ls&124)!==0||w0(l,i,s)}return s}function w0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Pe.updateQueue,i===null?(i=qf(),Pe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function C0(e,i,s,l){i.value=s,i.getSnapshot=l,N0(i)&&L0(e)}function D0(e,i,s){return s(function(){N0(i)&&L0(e)})}function N0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Ci(e,s)}catch{return!0}}function L0(e){var i=Tr(e,2);i!==null&&Oi(i,e,2)}function Qf(e){var i=Ti();if(typeof e=="function"){var s=e;if(e=s(),js){$(!0);try{s()}finally{$(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},i}function U0(e,i,s,l){return e.baseState=s,jf(e,rn,typeof l=="function"?l:Pa)}function XS(e,i,s,l,u){if(Mc(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};B.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,P0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function P0(e,i){var s=i.action,l=i.payload,u=e.state;if(i.isTransition){var d=B.T,M={};B.T=M;try{var b=s(u,l),k=B.S;k!==null&&k(M,b),O0(e,i,b)}catch(dt){Jf(e,i,dt)}finally{B.T=d}}else try{d=s(u,l),O0(e,i,d)}catch(dt){Jf(e,i,dt)}}function O0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){I0(e,i,l)},function(l){return Jf(e,i,l)}):I0(e,i,s)}function I0(e,i,s){i.status="fulfilled",i.value=s,z0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,P0(e,s)))}function Jf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,z0(i),i=i.next;while(i!==l)}e.action=null}function z0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function B0(e,i){return i}function F0(e,i){if(Je){var s=_n.formState;if(s!==null){t:{var l=Pe;if(Je){if(Rn){e:{for(var u=Rn,d=fa;u.nodeType!==8;){if(!d){u=null;break e}if(u=na(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Rn=na(u.nextSibling),l=u.data==="F!";break t}}Xs(l)}l=!1}l&&(i=s[0])}}return s=Ti(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B0,lastRenderedState:i},s.queue=l,s=ag.bind(null,Pe,l),l.dispatch=s,l=Qf(!1),d=ih.bind(null,Pe,!1,l.queue),l=Ti(),u={state:i,dispatch:null,action:e,pending:null},l.queue=u,s=XS.bind(null,Pe,u,d,s),u.dispatch=s,l.memoizedState=e,[i,s,!1]}function H0(e){var i=Pn();return G0(i,rn,e)}function G0(e,i,s){if(i=jf(e,i,B0)[0],e=Ec(Pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=tl(i)}catch(M){throw M===Zo?pc:M}else l=i;i=Pn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(Pe.flags|=2048,Ur(9,Sc(),WS.bind(null,u,s),null)),[l,d,e]}function WS(e,i){e.action=i}function V0(e){var i=Pn(),s=rn;if(s!==null)return G0(i,s,e);Pn(),i=i.memoizedState,s=Pn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Ur(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=Pe.updateQueue,i===null&&(i=qf(),Pe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Sc(){return{destroy:void 0,resource:void 0}}function k0(){return Pn().memoizedState}function yc(e,i,s,l){var u=Ti();l=l===void 0?null:l,Pe.flags|=e,u.memoizedState=Ur(1|i,Sc(),s,l)}function el(e,i,s,l){var u=Pn();l=l===void 0?null:l;var d=u.memoizedState.inst;rn!==null&&l!==null&&Vf(l,rn.memoizedState.deps)?u.memoizedState=Ur(i,d,s,l):(Pe.flags|=e,u.memoizedState=Ur(1|i,d,s,l))}function Y0(e,i){yc(8390656,8,e,i)}function X0(e,i){el(2048,8,e,i)}function W0(e,i){return el(4,2,e,i)}function q0(e,i){return el(4,4,e,i)}function Z0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function j0(e,i,s){s=s!=null?s.concat([e]):null,el(4,4,Z0.bind(null,i,e),s)}function $f(){}function K0(e,i){var s=Pn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Vf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Q0(e,i){var s=Pn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Vf(i,l[1]))return l[0];if(l=e(),js){$(!0);try{e()}finally{$(!1)}}return s.memoizedState=[l,i],l}function th(e,i,s){return s===void 0||(ls&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=t_(),Pe.lanes|=e,ms|=e,s)}function J0(e,i,s,l){return Ci(s,i)?s:Dr.current!==null?(e=th(e,s,l),Ci(e,i)||(kn=!0),e):(ls&42)===0?(kn=!0,e.memoizedState=s):(e=t_(),Pe.lanes|=e,ms|=e,i)}function $0(e,i,s,l,u){var d=j.p;j.p=d!==0&&8>d?d:8;var M=B.T,b={};B.T=b,ih(e,!1,i,s);try{var k=u(),dt=B.S;if(dt!==null&&dt(b,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var bt=VS(k,l);nl(e,i,bt,Pi(e))}else nl(e,i,l,Pi(e))}catch(It){nl(e,i,{then:function(){},status:"rejected",reason:It},Pi())}finally{j.p=d,B.T=M}}function qS(){}function eh(e,i,s,l){if(e.tag!==5)throw Error(a(476));var u=tg(e).queue;$0(e,u,i,K,s===null?qS:function(){return eg(e),s(l)})}function tg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:K},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function eg(e){var i=tg(e).next.queue;nl(e,i,{},Pi())}function nh(){return ri(El)}function ng(){return Pn().memoizedState}function ig(){return Pn().memoizedState}function ZS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Pi();e=rs(s);var l=os(i,e,s);l!==null&&(Oi(l,i,s),Ko(l,i,s)),i={cache:Lf()},e.payload=i;return}i=i.return}}function jS(e,i,s){var l=Pi();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Mc(e)?sg(i,s):(s=yf(e,i,s,l),s!==null&&(Oi(s,e,l),rg(s,i,l)))}function ag(e,i,s){var l=Pi();nl(e,i,s,l)}function nl(e,i,s,l){var u={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))sg(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var M=i.lastRenderedState,b=d(M,s);if(u.hasEagerState=!0,u.eagerState=b,Ci(b,M))return rc(e,i,u,0),_n===null&&sc(),!1}catch{}finally{}if(s=yf(e,i,u,l),s!==null)return Oi(s,e,l),rg(s,i,l),!0}return!1}function ih(e,i,s,l){if(l={lane:2,revertLane:Oh(),action:l,hasEagerState:!1,eagerState:null,next:null},Mc(e)){if(i)throw Error(a(479))}else i=yf(e,s,l,2),i!==null&&Oi(i,e,2)}function Mc(e){var i=e.alternate;return e===Pe||i!==null&&i===Pe}function sg(e,i){Nr=_c=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function rg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,yt(e,s)}}var Tc={readContext:ri,use:xc,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useLayoutEffect:Dn,useInsertionEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useSyncExternalStore:Dn,useId:Dn,useHostTransitionStatus:Dn,useFormState:Dn,useActionState:Dn,useOptimistic:Dn,useMemoCache:Dn,useCacheRefresh:Dn},og={readContext:ri,use:xc,useCallback:function(e,i){return Ti().memoizedState=[e,i===void 0?null:i],e},useContext:ri,useEffect:Y0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,yc(4194308,4,Z0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return yc(4194308,4,e,i)},useInsertionEffect:function(e,i){yc(4,2,e,i)},useMemo:function(e,i){var s=Ti();i=i===void 0?null:i;var l=e();if(js){$(!0);try{e()}finally{$(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Ti();if(s!==void 0){var u=s(i);if(js){$(!0);try{s(i)}finally{$(!1)}}}else u=i;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=jS.bind(null,Pe,e),[l.memoizedState,e]},useRef:function(e){var i=Ti();return e={current:e},i.memoizedState=e},useState:function(e){e=Qf(e);var i=e.queue,s=ag.bind(null,Pe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:$f,useDeferredValue:function(e,i){var s=Ti();return th(s,e,i)},useTransition:function(){var e=Qf(!1);return e=$0.bind(null,Pe,e.queue,!0,!1),Ti().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=Pe,u=Ti();if(Je){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),_n===null)throw Error(a(349));(Ye&124)!==0||w0(l,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,Y0(D0.bind(null,l,d,e),[e]),l.flags|=2048,Ur(9,Sc(),C0.bind(null,l,d,s,i),null),s},useId:function(){var e=Ti(),i=_n.identifierPrefix;if(Je){var s=Na,l=Da;s=(l&~(1<<32-zt(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=vc++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=kS++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:nh,useFormState:F0,useActionState:F0,useOptimistic:function(e){var i=Ti();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=ih.bind(null,Pe,!0,s),s.dispatch=i,[e,i]},useMemoCache:Zf,useCacheRefresh:function(){return Ti().memoizedState=ZS.bind(null,Pe)}},lg={readContext:ri,use:xc,useCallback:K0,useContext:ri,useEffect:X0,useImperativeHandle:j0,useInsertionEffect:W0,useLayoutEffect:q0,useMemo:Q0,useReducer:Ec,useRef:k0,useState:function(){return Ec(Pa)},useDebugValue:$f,useDeferredValue:function(e,i){var s=Pn();return J0(s,rn.memoizedState,e,i)},useTransition:function(){var e=Ec(Pa)[0],i=Pn().memoizedState;return[typeof e=="boolean"?e:tl(e),i]},useSyncExternalStore:b0,useId:ng,useHostTransitionStatus:nh,useFormState:H0,useActionState:H0,useOptimistic:function(e,i){var s=Pn();return U0(s,rn,e,i)},useMemoCache:Zf,useCacheRefresh:ig},KS={readContext:ri,use:xc,useCallback:K0,useContext:ri,useEffect:X0,useImperativeHandle:j0,useInsertionEffect:W0,useLayoutEffect:q0,useMemo:Q0,useReducer:Kf,useRef:k0,useState:function(){return Kf(Pa)},useDebugValue:$f,useDeferredValue:function(e,i){var s=Pn();return rn===null?th(s,e,i):J0(s,rn.memoizedState,e,i)},useTransition:function(){var e=Kf(Pa)[0],i=Pn().memoizedState;return[typeof e=="boolean"?e:tl(e),i]},useSyncExternalStore:b0,useId:ng,useHostTransitionStatus:nh,useFormState:V0,useActionState:V0,useOptimistic:function(e,i){var s=Pn();return rn!==null?U0(s,rn,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Zf,useCacheRefresh:ig},Pr=null,il=0;function Ac(e){var i=il;return il+=1,Pr===null&&(Pr=[]),x0(Pr,e,i)}function al(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Rc(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function cg(e){var i=e._init;return i(e._payload)}function ug(e){function i(at,q){if(e){var ht=at.deletions;ht===null?(at.deletions=[q],at.flags|=16):ht.push(q)}}function s(at,q){if(!e)return null;for(;q!==null;)i(at,q),q=q.sibling;return null}function l(at){for(var q=new Map;at!==null;)at.key!==null?q.set(at.key,at):q.set(at.index,at),at=at.sibling;return q}function u(at,q){return at=Ca(at,q),at.index=0,at.sibling=null,at}function d(at,q,ht){return at.index=ht,e?(ht=at.alternate,ht!==null?(ht=ht.index,ht<q?(at.flags|=67108866,q):ht):(at.flags|=67108866,q)):(at.flags|=1048576,q)}function M(at){return e&&at.alternate===null&&(at.flags|=67108866),at}function b(at,q,ht,Lt){return q===null||q.tag!==6?(q=Tf(ht,at.mode,Lt),q.return=at,q):(q=u(q,ht),q.return=at,q)}function k(at,q,ht,Lt){var ce=ht.type;return ce===y?bt(at,q,ht.props.children,Lt,ht.key):q!==null&&(q.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===X&&cg(ce)===q.type)?(q=u(q,ht.props),al(q,ht),q.return=at,q):(q=lc(ht.type,ht.key,ht.props,null,at.mode,Lt),al(q,ht),q.return=at,q)}function dt(at,q,ht,Lt){return q===null||q.tag!==4||q.stateNode.containerInfo!==ht.containerInfo||q.stateNode.implementation!==ht.implementation?(q=Af(ht,at.mode,Lt),q.return=at,q):(q=u(q,ht.children||[]),q.return=at,q)}function bt(at,q,ht,Lt,ce){return q===null||q.tag!==7?(q=Gs(ht,at.mode,Lt,ce),q.return=at,q):(q=u(q,ht),q.return=at,q)}function It(at,q,ht){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Tf(""+q,at.mode,ht),q.return=at,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case v:return ht=lc(q.type,q.key,q.props,null,at.mode,ht),al(ht,q),ht.return=at,ht;case x:return q=Af(q,at.mode,ht),q.return=at,q;case X:var Lt=q._init;return q=Lt(q._payload),It(at,q,ht)}if(ft(q)||st(q))return q=Gs(q,at.mode,ht,null),q.return=at,q;if(typeof q.then=="function")return It(at,Ac(q),ht);if(q.$$typeof===C)return It(at,hc(at,q),ht);Rc(at,q)}return null}function mt(at,q,ht,Lt){var ce=q!==null?q.key:null;if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return ce!==null?null:b(at,q,""+ht,Lt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case v:return ht.key===ce?k(at,q,ht,Lt):null;case x:return ht.key===ce?dt(at,q,ht,Lt):null;case X:return ce=ht._init,ht=ce(ht._payload),mt(at,q,ht,Lt)}if(ft(ht)||st(ht))return ce!==null?null:bt(at,q,ht,Lt,null);if(typeof ht.then=="function")return mt(at,q,Ac(ht),Lt);if(ht.$$typeof===C)return mt(at,q,hc(at,ht),Lt);Rc(at,ht)}return null}function _t(at,q,ht,Lt,ce){if(typeof Lt=="string"&&Lt!==""||typeof Lt=="number"||typeof Lt=="bigint")return at=at.get(ht)||null,b(q,at,""+Lt,ce);if(typeof Lt=="object"&&Lt!==null){switch(Lt.$$typeof){case v:return at=at.get(Lt.key===null?ht:Lt.key)||null,k(q,at,Lt,ce);case x:return at=at.get(Lt.key===null?ht:Lt.key)||null,dt(q,at,Lt,ce);case X:var ze=Lt._init;return Lt=ze(Lt._payload),_t(at,q,ht,Lt,ce)}if(ft(Lt)||st(Lt))return at=at.get(ht)||null,bt(q,at,Lt,ce,null);if(typeof Lt.then=="function")return _t(at,q,ht,Ac(Lt),ce);if(Lt.$$typeof===C)return _t(at,q,ht,hc(q,Lt),ce);Rc(q,Lt)}return null}function ye(at,q,ht,Lt){for(var ce=null,ze=null,pe=q,Se=q=0,Xn=null;pe!==null&&Se<ht.length;Se++){pe.index>Se?(Xn=pe,pe=null):Xn=pe.sibling;var Ze=mt(at,pe,ht[Se],Lt);if(Ze===null){pe===null&&(pe=Xn);break}e&&pe&&Ze.alternate===null&&i(at,pe),q=d(Ze,q,Se),ze===null?ce=Ze:ze.sibling=Ze,ze=Ze,pe=Xn}if(Se===ht.length)return s(at,pe),Je&&ks(at,Se),ce;if(pe===null){for(;Se<ht.length;Se++)pe=It(at,ht[Se],Lt),pe!==null&&(q=d(pe,q,Se),ze===null?ce=pe:ze.sibling=pe,ze=pe);return Je&&ks(at,Se),ce}for(pe=l(pe);Se<ht.length;Se++)Xn=_t(pe,at,Se,ht[Se],Lt),Xn!==null&&(e&&Xn.alternate!==null&&pe.delete(Xn.key===null?Se:Xn.key),q=d(Xn,q,Se),ze===null?ce=Xn:ze.sibling=Xn,ze=Xn);return e&&pe.forEach(function(Ts){return i(at,Ts)}),Je&&ks(at,Se),ce}function xe(at,q,ht,Lt){if(ht==null)throw Error(a(151));for(var ce=null,ze=null,pe=q,Se=q=0,Xn=null,Ze=ht.next();pe!==null&&!Ze.done;Se++,Ze=ht.next()){pe.index>Se?(Xn=pe,pe=null):Xn=pe.sibling;var Ts=mt(at,pe,Ze.value,Lt);if(Ts===null){pe===null&&(pe=Xn);break}e&&pe&&Ts.alternate===null&&i(at,pe),q=d(Ts,q,Se),ze===null?ce=Ts:ze.sibling=Ts,ze=Ts,pe=Xn}if(Ze.done)return s(at,pe),Je&&ks(at,Se),ce;if(pe===null){for(;!Ze.done;Se++,Ze=ht.next())Ze=It(at,Ze.value,Lt),Ze!==null&&(q=d(Ze,q,Se),ze===null?ce=Ze:ze.sibling=Ze,ze=Ze);return Je&&ks(at,Se),ce}for(pe=l(pe);!Ze.done;Se++,Ze=ht.next())Ze=_t(pe,at,Se,Ze.value,Lt),Ze!==null&&(e&&Ze.alternate!==null&&pe.delete(Ze.key===null?Se:Ze.key),q=d(Ze,q,Se),ze===null?ce=Ze:ze.sibling=Ze,ze=Ze);return e&&pe.forEach(function(Qy){return i(at,Qy)}),Je&&ks(at,Se),ce}function ln(at,q,ht,Lt){if(typeof ht=="object"&&ht!==null&&ht.type===y&&ht.key===null&&(ht=ht.props.children),typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case v:t:{for(var ce=ht.key;q!==null;){if(q.key===ce){if(ce=ht.type,ce===y){if(q.tag===7){s(at,q.sibling),Lt=u(q,ht.props.children),Lt.return=at,at=Lt;break t}}else if(q.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===X&&cg(ce)===q.type){s(at,q.sibling),Lt=u(q,ht.props),al(Lt,ht),Lt.return=at,at=Lt;break t}s(at,q);break}else i(at,q);q=q.sibling}ht.type===y?(Lt=Gs(ht.props.children,at.mode,Lt,ht.key),Lt.return=at,at=Lt):(Lt=lc(ht.type,ht.key,ht.props,null,at.mode,Lt),al(Lt,ht),Lt.return=at,at=Lt)}return M(at);case x:t:{for(ce=ht.key;q!==null;){if(q.key===ce)if(q.tag===4&&q.stateNode.containerInfo===ht.containerInfo&&q.stateNode.implementation===ht.implementation){s(at,q.sibling),Lt=u(q,ht.children||[]),Lt.return=at,at=Lt;break t}else{s(at,q);break}else i(at,q);q=q.sibling}Lt=Af(ht,at.mode,Lt),Lt.return=at,at=Lt}return M(at);case X:return ce=ht._init,ht=ce(ht._payload),ln(at,q,ht,Lt)}if(ft(ht))return ye(at,q,ht,Lt);if(st(ht)){if(ce=st(ht),typeof ce!="function")throw Error(a(150));return ht=ce.call(ht),xe(at,q,ht,Lt)}if(typeof ht.then=="function")return ln(at,q,Ac(ht),Lt);if(ht.$$typeof===C)return ln(at,q,hc(at,ht),Lt);Rc(at,ht)}return typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint"?(ht=""+ht,q!==null&&q.tag===6?(s(at,q.sibling),Lt=u(q,ht),Lt.return=at,at=Lt):(s(at,q),Lt=Tf(ht,at.mode,Lt),Lt.return=at,at=Lt),M(at)):s(at,q)}return function(at,q,ht,Lt){try{il=0;var ce=ln(at,q,ht,Lt);return Pr=null,ce}catch(pe){if(pe===Zo||pe===pc)throw pe;var ze=Di(29,pe,null,at.mode);return ze.lanes=Lt,ze.return=at,ze}finally{}}}var Or=ug(!0),fg=ug(!1),Wi=it(null),ha=null;function cs(e){var i=e.alternate;Ut(Bn,Bn.current&1),Ut(Wi,e),ha===null&&(i===null||Dr.current!==null||i.memoizedState!==null)&&(ha=e)}function hg(e){if(e.tag===22){if(Ut(Bn,Bn.current),Ut(Wi,e),ha===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ha=e)}}else us()}function us(){Ut(Bn,Bn.current),Ut(Wi,Wi.current)}function Oa(e){Et(Wi),ha===e&&(ha=null),Et(Bn)}var Bn=it(0);function bc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||qh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function ah(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var sh={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=Pi(),u=rs(l);u.payload=i,s!=null&&(u.callback=s),i=os(e,u,l),i!==null&&(Oi(i,e,l),Ko(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=Pi(),u=rs(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=os(e,u,l),i!==null&&(Oi(i,e,l),Ko(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Pi(),l=rs(s);l.tag=2,i!=null&&(l.callback=i),i=os(e,l,s),i!==null&&(Oi(i,e,s),Ko(i,e,s))}};function dg(e,i,s,l,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,M):i.prototype&&i.prototype.isPureReactComponent?!Ho(s,l)||!Ho(u,d):!0}function pg(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&sh.enqueueReplaceState(i,i.state,null)}function Ks(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var wc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function mg(e){wc(e)}function gg(e){console.error(e)}function _g(e){wc(e)}function Cc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function vg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rh(e,i,s){return s=rs(s),s.tag=3,s.payload={element:null},s.callback=function(){Cc(e,i)},s}function xg(e){return e=rs(e),e.tag=3,e}function Eg(e,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;e.payload=function(){return u(d)},e.callback=function(){vg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){vg(i,s,l),typeof u!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function QS(e,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Xo(i,s,u,!0),s=Wi.current,s!==null){switch(s.tag){case 13:return ha===null?Dh():s.alternate===null&&bn===0&&(bn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===Of?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Lh(e,l,u)),!1;case 22:return s.flags|=65536,l===Of?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Lh(e,l,u)),!1}throw Error(a(435,s.tag))}return Lh(e,l,u),Dh(),!1}if(Je)return i=Wi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==wf&&(e=Error(a(422),{cause:l}),Yo(Vi(e,s)))):(l!==wf&&(i=Error(a(423),{cause:l}),Yo(Vi(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Vi(l,s),u=rh(e.stateNode,l,u),Bf(e,u),bn!==4&&(bn=2)),!1;var d=Error(a(520),{cause:l});if(d=Vi(d,s),fl===null?fl=[d]:fl.push(d),bn!==4&&(bn=2),i===null)return!0;l=Vi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=rh(s.stateNode,l,e),Bf(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(gs===null||!gs.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=xg(u),Eg(u,e,s,l),Bf(s,u),!1}s=s.return}while(s!==null);return!1}var Sg=Error(a(461)),kn=!1;function $n(e,i,s,l){i.child=e===null?fg(i,null,s,l):Or(i,e.child,s,l)}function yg(e,i,s,l,u){s=s.render;var d=i.ref;if("ref"in l){var M={};for(var b in l)b!=="ref"&&(M[b]=l[b])}else M=l;return qs(i),l=kf(e,i,s,M,d,u),b=Yf(),e!==null&&!kn?(Xf(e,i,u),Ia(e,i,u)):(Je&&b&&Rf(i),i.flags|=1,$n(e,i,l,u),i.child)}function Mg(e,i,s,l,u){if(e===null){var d=s.type;return typeof d=="function"&&!Mf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Tg(e,i,d,l,u)):(e=lc(s.type,null,l,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!ph(e,u)){var M=d.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(M,l)&&e.ref===i.ref)return Ia(e,i,u)}return i.flags|=1,e=Ca(d,l),e.ref=i.ref,e.return=i,i.child=e}function Tg(e,i,s,l,u){if(e!==null){var d=e.memoizedProps;if(Ho(d,l)&&e.ref===i.ref)if(kn=!1,i.pendingProps=l=d,ph(e,u))(e.flags&131072)!==0&&(kn=!0);else return i.lanes=e.lanes,Ia(e,i,u)}return oh(e,i,s,l,u)}function Ag(e,i,s){var l=i.pendingProps,u=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Rg(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&dc(i,d!==null?d.cachePool:null),d!==null?T0(i,d):Hf(),hg(i);else return i.lanes=i.childLanes=536870912,Rg(e,i,d!==null?d.baseLanes|s:s,s)}else d!==null?(dc(i,d.cachePool),T0(i,d),us(),i.memoizedState=null):(e!==null&&dc(i,null),Hf(),us());return $n(e,i,u,s),i.child}function Rg(e,i,s,l){var u=Pf();return u=u===null?null:{parent:zn._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&dc(i,null),Hf(),hg(i),e!==null&&Xo(e,i,l,!0),null}function Dc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function oh(e,i,s,l,u){return qs(i),s=kf(e,i,s,l,void 0,u),l=Yf(),e!==null&&!kn?(Xf(e,i,u),Ia(e,i,u)):(Je&&l&&Rf(i),i.flags|=1,$n(e,i,s,u),i.child)}function bg(e,i,s,l,u,d){return qs(i),i.updateQueue=null,s=R0(i,l,s,u),A0(e),l=Yf(),e!==null&&!kn?(Xf(e,i,d),Ia(e,i,d)):(Je&&l&&Rf(i),i.flags|=1,$n(e,i,s,d),i.child)}function wg(e,i,s,l,u){if(qs(i),i.stateNode===null){var d=Ar,M=s.contextType;typeof M=="object"&&M!==null&&(d=ri(M)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=sh,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},If(i),M=s.contextType,d.context=typeof M=="object"&&M!==null?ri(M):Ar,d.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(ah(i,s,M,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&sh.enqueueReplaceState(d,d.state,null),Jo(i,l,d,u),Qo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var b=i.memoizedProps,k=Ks(s,b);d.props=k;var dt=d.context,bt=s.contextType;M=Ar,typeof bt=="object"&&bt!==null&&(M=ri(bt));var It=s.getDerivedStateFromProps;bt=typeof It=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,bt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||dt!==M)&&pg(i,d,l,M),ss=!1;var mt=i.memoizedState;d.state=mt,Jo(i,l,d,u),Qo(),dt=i.memoizedState,b||mt!==dt||ss?(typeof It=="function"&&(ah(i,s,It,l),dt=i.memoizedState),(k=ss||dg(i,s,k,l,mt,dt,M))?(bt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=dt),d.props=l,d.state=dt,d.context=M,l=k):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,zf(e,i),M=i.memoizedProps,bt=Ks(s,M),d.props=bt,It=i.pendingProps,mt=d.context,dt=s.contextType,k=Ar,typeof dt=="object"&&dt!==null&&(k=ri(dt)),b=s.getDerivedStateFromProps,(dt=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==It||mt!==k)&&pg(i,d,l,k),ss=!1,mt=i.memoizedState,d.state=mt,Jo(i,l,d,u),Qo();var _t=i.memoizedState;M!==It||mt!==_t||ss||e!==null&&e.dependencies!==null&&fc(e.dependencies)?(typeof b=="function"&&(ah(i,s,b,l),_t=i.memoizedState),(bt=ss||dg(i,s,bt,l,mt,_t,k)||e!==null&&e.dependencies!==null&&fc(e.dependencies))?(dt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,_t,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,_t,k)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&mt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&mt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=_t),d.props=l,d.state=_t,d.context=k,l=bt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&mt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&mt===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Dc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Or(i,e.child,null,u),i.child=Or(i,null,s,u)):$n(e,i,s,u),i.memoizedState=d.state,e=i.child):e=Ia(e,i,u),e}function Cg(e,i,s,l){return ko(),i.flags|=256,$n(e,i,s,l),i.child}var lh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ch(e){return{baseLanes:e,cachePool:g0()}}function uh(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=qi),e}function Dg(e,i,s){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(Bn.current&2)!==0),M&&(u=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(Je){if(u?cs(i):us(),Je){var b=Rn,k;if(k=b){t:{for(k=b,b=fa;k.nodeType!==8;){if(!b){b=null;break t}if(k=na(k.nextSibling),k===null){b=null;break t}}b=k}b!==null?(i.memoizedState={dehydrated:b,treeContext:Vs!==null?{id:Da,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},k=Di(18,null,null,0),k.stateNode=b,k.return=i,i.child=k,hi=i,Rn=null,k=!0):k=!1}k||Xs(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return qh(b)?i.lanes=32:i.lanes=536870912,null;Oa(i)}return b=l.children,l=l.fallback,u?(us(),u=i.mode,b=Nc({mode:"hidden",children:b},u),l=Gs(l,u,s,null),b.return=i,l.return=i,b.sibling=l,i.child=b,u=i.child,u.memoizedState=ch(s),u.childLanes=uh(e,M,s),i.memoizedState=lh,l):(cs(i),fh(i,b))}if(k=e.memoizedState,k!==null&&(b=k.dehydrated,b!==null)){if(d)i.flags&256?(cs(i),i.flags&=-257,i=hh(e,i,s)):i.memoizedState!==null?(us(),i.child=e.child,i.flags|=128,i=null):(us(),u=l.fallback,b=i.mode,l=Nc({mode:"visible",children:l.children},b),u=Gs(u,b,s,null),u.flags|=2,l.return=i,u.return=i,l.sibling=u,i.child=l,Or(i,e.child,null,s),l=i.child,l.memoizedState=ch(s),l.childLanes=uh(e,M,s),i.memoizedState=lh,i=u);else if(cs(i),qh(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var dt=M.dgst;M=dt,l=Error(a(419)),l.stack="",l.digest=M,Yo({value:l,source:null,stack:null}),i=hh(e,i,s)}else if(kn||Xo(e,i,s,!1),M=(s&e.childLanes)!==0,kn||M){if(M=_n,M!==null&&(l=s&-s,l=(l&42)!==0?1:Yt(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==k.retryLane))throw k.retryLane=l,Tr(e,l),Oi(M,e,l),Sg;b.data==="$?"||Dh(),i=hh(e,i,s)}else b.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,Rn=na(b.nextSibling),hi=i,Je=!0,Ys=null,fa=!1,e!==null&&(Yi[Xi++]=Da,Yi[Xi++]=Na,Yi[Xi++]=Vs,Da=e.id,Na=e.overflow,Vs=i),i=fh(i,l.children),i.flags|=4096);return i}return u?(us(),u=l.fallback,b=i.mode,k=e.child,dt=k.sibling,l=Ca(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,dt!==null?u=Ca(dt,u):(u=Gs(u,b,s,null),u.flags|=2),u.return=i,l.return=i,l.sibling=u,i.child=l,l=u,u=i.child,b=e.child.memoizedState,b===null?b=ch(s):(k=b.cachePool,k!==null?(dt=zn._currentValue,k=k.parent!==dt?{parent:dt,pool:dt}:k):k=g0(),b={baseLanes:b.baseLanes|s,cachePool:k}),u.memoizedState=b,u.childLanes=uh(e,M,s),i.memoizedState=lh,l):(cs(i),s=e.child,e=s.sibling,s=Ca(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=s,i.memoizedState=null,s)}function fh(e,i){return i=Nc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Nc(e,i){return e=Di(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function hh(e,i,s){return Or(i,e.child,null,s),e=fh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Ng(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Df(e.return,i,s)}function dh(e,i,s,l,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=u)}function Lg(e,i,s){var l=i.pendingProps,u=l.revealOrder,d=l.tail;if($n(e,i,l.children,s),l=Bn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ng(e,s,i);else if(e.tag===19)Ng(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Ut(Bn,l),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&bc(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),dh(i,!1,u,s,d);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&bc(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}dh(i,!0,s,null,d);break;case"together":dh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),ms|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Xo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ca(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ca(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function ph(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&fc(e)))}function JS(e,i,s){switch(i.tag){case 3:Ht(i,i.stateNode.containerInfo),as(i,zn,e.memoizedState.cache),ko();break;case 27:case 5:ae(i);break;case 4:Ht(i,i.stateNode.containerInfo);break;case 10:as(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(cs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Dg(e,i,s):(cs(i),e=Ia(e,i,s),e!==null?e.sibling:null);cs(i);break;case 19:var u=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Xo(e,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return Lg(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ut(Bn,Bn.current),l)break;return null;case 22:case 23:return i.lanes=0,Ag(e,i,s);case 24:as(i,zn,e.memoizedState.cache)}return Ia(e,i,s)}function Ug(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)kn=!0;else{if(!ph(e,s)&&(i.flags&128)===0)return kn=!1,JS(e,i,s);kn=(e.flags&131072)!==0}else kn=!1,Je&&(i.flags&1048576)!==0&&c0(i,uc,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,u=l._init;if(l=u(l._payload),i.type=l,typeof l=="function")Mf(l)?(e=Ks(l,e),i.tag=1,i=wg(null,i,l,e,s)):(i.tag=0,i=oh(null,i,l,e,s));else{if(l!=null){if(u=l.$$typeof,u===R){i.tag=11,i=yg(null,i,l,e,s);break t}else if(u===F){i.tag=14,i=Mg(null,i,l,e,s);break t}}throw i=vt(l)||l,Error(a(306,i,""))}}return i;case 0:return oh(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Ks(l,i.pendingProps),wg(e,i,l,u,s);case 3:t:{if(Ht(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,zf(e,i),Jo(i,l,null,s);var M=i.memoizedState;if(l=M.cache,as(i,zn,l),l!==d.cache&&Nf(i,[zn],s,!0),Qo(),l=M.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Cg(e,i,l,s);break t}else if(l!==u){u=Vi(Error(a(424)),i),Yo(u),i=Cg(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Rn=na(e.firstChild),hi=i,Je=!0,Ys=null,fa=!0,s=fg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ko(),l===u){i=Ia(e,i,s);break t}$n(e,i,l,s)}i=i.child}return i;case 26:return Dc(e,i),e===null?(s=z_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Je||(s=i.type,e=i.pendingProps,l=Xc(Pt.current).createElement(s),l[be]=i,l[we]=e,ei(l,s,e),Ie(l),i.stateNode=l):i.memoizedState=z_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ae(i),e===null&&Je&&(l=i.stateNode=P_(i.type,i.pendingProps,Pt.current),hi=i,fa=!0,u=Rn,xs(i.type)?(Zh=u,Rn=na(l.firstChild)):Rn=u),$n(e,i,i.pendingProps.children,s),Dc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Je&&((u=l=Rn)&&(l=Ry(l,i.type,i.pendingProps,fa),l!==null?(i.stateNode=l,hi=i,Rn=na(l.firstChild),fa=!1,u=!0):u=!1),u||Xs(i)),ae(i),u=i.type,d=i.pendingProps,M=e!==null?e.memoizedProps:null,l=d.children,Yh(u,d)?l=null:M!==null&&Yh(u,M)&&(i.flags|=32),i.memoizedState!==null&&(u=kf(e,i,YS,null,null,s),El._currentValue=u),Dc(e,i),$n(e,i,l,s),i.child;case 6:return e===null&&Je&&((e=s=Rn)&&(s=by(s,i.pendingProps,fa),s!==null?(i.stateNode=s,hi=i,Rn=null,e=!0):e=!1),e||Xs(i)),null;case 13:return Dg(e,i,s);case 4:return Ht(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Or(i,null,l,s):$n(e,i,l,s),i.child;case 11:return yg(e,i,i.type,i.pendingProps,s);case 7:return $n(e,i,i.pendingProps,s),i.child;case 8:return $n(e,i,i.pendingProps.children,s),i.child;case 12:return $n(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,as(i,i.type,l.value),$n(e,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,qs(i),u=ri(u),l=l(u),i.flags|=1,$n(e,i,l,s),i.child;case 14:return Mg(e,i,i.type,i.pendingProps,s);case 15:return Tg(e,i,i.type,i.pendingProps,s);case 19:return Lg(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=Nc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Ca(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Ag(e,i,s);case 24:return qs(i),l=ri(zn),e===null?(u=Pf(),u===null&&(u=_n,d=Lf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:l,cache:u},If(i),as(i,zn,u)):((e.lanes&s)!==0&&(zf(e,i),Jo(i,null,null,s),Qo()),u=e.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),as(i,zn,l)):(l=d.cache,as(i,zn,l),l!==u.cache&&Nf(i,[zn],s,!0))),$n(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function za(e){e.flags|=4}function Pg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!V_(i)){if(i=Wi.current,i!==null&&((Ye&4194048)===Ye?ha!==null:(Ye&62914560)!==Ye&&(Ye&536870912)===0||i!==ha))throw jo=Of,_0;e.flags|=8192}}function Lc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Tt():536870912,e.lanes|=i,Fr|=i)}function sl(e,i){if(!Je)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Mn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function $S(e,i,s){var l=i.pendingProps;switch(bf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Mn(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ua(zn),me(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Vo(i)?za(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,h0())),Mn(i),null;case 26:return s=i.memoizedState,e===null?(za(i),s!==null?(Mn(i),Pg(i,s)):(Mn(i),i.flags&=-16777217)):s?s!==e.memoizedState?(za(i),Mn(i),Pg(i,s)):(Mn(i),i.flags&=-16777217):(e.memoizedProps!==l&&za(i),Mn(i),i.flags&=-16777217),null;case 27:Oe(i),s=Pt.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&za(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Mn(i),null}e=nt.current,Vo(i)?u0(i):(e=P_(u,l,s),i.stateNode=e,za(i))}return Mn(i),null;case 5:if(Oe(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&za(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Mn(i),null}if(e=nt.current,Vo(i))u0(i);else{switch(u=Xc(Pt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(s,{is:l.is}):u.createElement(s)}}e[be]=i,e[we]=l;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(ei(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&za(i)}}return Mn(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&za(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=Pt.current,Vo(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,u=hi,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[be]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||b_(e.nodeValue,s)),e||Xs(i)}else e=Xc(e).createTextNode(l),e[be]=i,i.stateNode=e}return Mn(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Vo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[be]=i}else ko(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),u=!1}else u=h0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Oa(i),i):(Oa(i),null)}if(Oa(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Lc(i,i.updateQueue),Mn(i),null;case 4:return me(),e===null&&Fh(i.stateNode.containerInfo),Mn(i),null;case 10:return Ua(i.type),Mn(i),null;case 19:if(Et(Bn),u=i.memoizedState,u===null)return Mn(i),null;if(l=(i.flags&128)!==0,d=u.rendering,d===null)if(l)sl(u,!1);else{if(bn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=bc(e),d!==null){for(i.flags|=128,sl(u,!1),e=d.updateQueue,i.updateQueue=e,Lc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)l0(s,e),s=s.sibling;return Ut(Bn,Bn.current&1|2),i.child}e=e.sibling}u.tail!==null&&qt()>Oc&&(i.flags|=128,l=!0,sl(u,!1),i.lanes=4194304)}else{if(!l)if(e=bc(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Lc(i,e),sl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Je)return Mn(i),null}else 2*qt()-u.renderingStartTime>Oc&&s!==536870912&&(i.flags|=128,l=!0,sl(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=qt(),i.sibling=null,e=Bn.current,Ut(Bn,l?e&1|2:e&1),i):(Mn(i),null);case 22:case 23:return Oa(i),Gf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),s=i.updateQueue,s!==null&&Lc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&Et(Zs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ua(zn),Mn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function ty(e,i){switch(bf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ua(zn),me(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Oe(i),null;case 13:if(Oa(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ko()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Et(Bn),null;case 4:return me(),null;case 10:return Ua(i.type),null;case 22:case 23:return Oa(i),Gf(),e!==null&&Et(Zs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ua(zn),null;case 25:return null;default:return null}}function Og(e,i){switch(bf(i),i.tag){case 3:Ua(zn),me();break;case 26:case 27:case 5:Oe(i);break;case 4:me();break;case 13:Oa(i);break;case 19:Et(Bn);break;case 10:Ua(i.type);break;case 22:case 23:Oa(i),Gf(),e!==null&&Et(Zs);break;case 24:Ua(zn)}}function rl(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){l=void 0;var d=s.create,M=s.inst;l=d(),M.destroy=l}s=s.next}while(s!==u)}}catch(b){hn(i,i.return,b)}}function fs(e,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&e)===e){var M=l.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,u=i;var k=s,dt=b;try{dt()}catch(bt){hn(u,k,bt)}}}l=l.next}while(l!==d)}}catch(bt){hn(i,i.return,bt)}}function Ig(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{M0(i,s)}catch(l){hn(e,e.return,l)}}}function zg(e,i,s){s.props=Ks(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){hn(e,i,l)}}function ol(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(u){hn(e,i,u)}}function da(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){hn(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){hn(e,i,u)}else s.current=null}function Bg(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){hn(e,e.return,u)}}function mh(e,i,s){try{var l=e.stateNode;Sy(l,e.type,s,i),l[we]=i}catch(u){hn(e,e.return,u)}}function Fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xs(e.type)||e.tag===4}function gh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _h(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Yc));else if(l!==4&&(l===27&&xs(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(_h(e,i,s),e=e.sibling;e!==null;)_h(e,i,s),e=e.sibling}function Uc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&xs(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Uc(e,i,s),e=e.sibling;e!==null;)Uc(e,i,s),e=e.sibling}function Hg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);ei(i,l,s),i[be]=e,i[we]=s}catch(d){hn(e,e.return,d)}}var Ba=!1,Nn=!1,vh=!1,Gg=typeof WeakSet=="function"?WeakSet:Set,Yn=null;function ey(e,i){if(e=e.containerInfo,Vh=Qc,e=Jm(e),gf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var M=0,b=-1,k=-1,dt=0,bt=0,It=e,mt=null;e:for(;;){for(var _t;It!==s||u!==0&&It.nodeType!==3||(b=M+u),It!==d||l!==0&&It.nodeType!==3||(k=M+l),It.nodeType===3&&(M+=It.nodeValue.length),(_t=It.firstChild)!==null;)mt=It,It=_t;for(;;){if(It===e)break e;if(mt===s&&++dt===u&&(b=M),mt===d&&++bt===l&&(k=M),(_t=It.nextSibling)!==null)break;It=mt,mt=It.parentNode}It=_t}s=b===-1||k===-1?null:{start:b,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(kh={focusedElem:e,selectionRange:s},Qc=!1,Yn=i;Yn!==null;)if(i=Yn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Yn=e;else for(;Yn!==null;){switch(i=Yn,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var ye=Ks(s.type,u,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(ye,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(xe){hn(s,s.return,xe)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Wh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Yn=e;break}Yn=i.return}}function Vg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:hs(e,s),l&4&&rl(5,s);break;case 1:if(hs(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(M){hn(s,s.return,M)}else{var u=Ks(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){hn(s,s.return,M)}}l&64&&Ig(s),l&512&&ol(s,s.return);break;case 3:if(hs(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{M0(e,i)}catch(M){hn(s,s.return,M)}}break;case 27:i===null&&l&4&&Hg(s);case 26:case 5:hs(e,s),i===null&&l&4&&Bg(s),l&512&&ol(s,s.return);break;case 12:hs(e,s);break;case 13:hs(e,s),l&4&&Xg(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=uy.bind(null,s),wy(e,s))));break;case 22:if(l=s.memoizedState!==null||Ba,!l){i=i!==null&&i.memoizedState!==null||Nn,u=Ba;var d=Nn;Ba=l,(Nn=i)&&!d?ds(e,s,(s.subtreeFlags&8772)!==0):hs(e,s),Ba=u,Nn=d}break;case 30:break;default:hs(e,s)}}function kg(e){var i=e.alternate;i!==null&&(e.alternate=null,kg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ee(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yn=null,Ai=!1;function Fa(e,i,s){for(s=s.child;s!==null;)Yg(e,i,s),s=s.sibling}function Yg(e,i,s){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(W,s)}catch{}switch(s.tag){case 26:Nn||da(s,i),Fa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Nn||da(s,i);var l=yn,u=Ai;xs(s.type)&&(yn=s.stateNode,Ai=!1),Fa(e,i,s),gl(s.stateNode),yn=l,Ai=u;break;case 5:Nn||da(s,i);case 6:if(l=yn,u=Ai,yn=null,Fa(e,i,s),yn=l,Ai=u,yn!==null)if(Ai)try{(yn.nodeType===9?yn.body:yn.nodeName==="HTML"?yn.ownerDocument.body:yn).removeChild(s.stateNode)}catch(d){hn(s,i,d)}else try{yn.removeChild(s.stateNode)}catch(d){hn(s,i,d)}break;case 18:yn!==null&&(Ai?(e=yn,L_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Tl(e)):L_(yn,s.stateNode));break;case 4:l=yn,u=Ai,yn=s.stateNode.containerInfo,Ai=!0,Fa(e,i,s),yn=l,Ai=u;break;case 0:case 11:case 14:case 15:Nn||fs(2,s,i),Nn||fs(4,s,i),Fa(e,i,s);break;case 1:Nn||(da(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&zg(s,i,l)),Fa(e,i,s);break;case 21:Fa(e,i,s);break;case 22:Nn=(l=Nn)||s.memoizedState!==null,Fa(e,i,s),Nn=l;break;default:Fa(e,i,s)}}function Xg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tl(e)}catch(s){hn(i,i.return,s)}}function ny(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Gg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Gg),i;default:throw Error(a(435,e.tag))}}function xh(e,i){var s=ny(e);i.forEach(function(l){var u=fy.bind(null,e,l);s.has(l)||(s.add(l),l.then(u,u))})}function Ni(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],d=e,M=i,b=M;t:for(;b!==null;){switch(b.tag){case 27:if(xs(b.type)){yn=b.stateNode,Ai=!1;break t}break;case 5:yn=b.stateNode,Ai=!1;break t;case 3:case 4:yn=b.stateNode.containerInfo,Ai=!0;break t}b=b.return}if(yn===null)throw Error(a(160));Yg(d,M,u),yn=null,Ai=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Wg(i,e),i=i.sibling}var ea=null;function Wg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ni(i,e),Li(e),l&4&&(fs(3,e,e.return),rl(3,e),fs(5,e,e.return));break;case 1:Ni(i,e),Li(e),l&512&&(Nn||s===null||da(s,s.return)),l&64&&Ba&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=ea;if(Ni(i,e),Li(e),l&512&&(Nn||s===null||da(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[re]||d[be]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),ei(d,l,s),d[be]=e,Ie(d),l=d;break t;case"link":var M=H_("link","href",u).get(l+(s.href||""));if(M){for(var b=0;b<M.length;b++)if(d=M[b],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(b,1);break e}}d=u.createElement(l),ei(d,l,s),u.head.appendChild(d);break;case"meta":if(M=H_("meta","content",u).get(l+(s.content||""))){for(b=0;b<M.length;b++)if(d=M[b],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(b,1);break e}}d=u.createElement(l),ei(d,l,s),u.head.appendChild(d);break;default:throw Error(a(468,l))}d[be]=e,Ie(d),l=d}e.stateNode=l}else G_(u,e.type,e.stateNode);else e.stateNode=F_(u,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?G_(u,e.type,e.stateNode):F_(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&mh(e,e.memoizedProps,s.memoizedProps)}break;case 27:Ni(i,e),Li(e),l&512&&(Nn||s===null||da(s,s.return)),s!==null&&l&4&&mh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Ni(i,e),Li(e),l&512&&(Nn||s===null||da(s,s.return)),e.flags&32){u=e.stateNode;try{ua(u,"")}catch(_t){hn(e,e.return,_t)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,mh(e,u,s!==null?s.memoizedProps:u)),l&1024&&(vh=!0);break;case 6:if(Ni(i,e),Li(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(_t){hn(e,e.return,_t)}}break;case 3:if(Zc=null,u=ea,ea=Wc(i.containerInfo),Ni(i,e),ea=u,Li(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Tl(i.containerInfo)}catch(_t){hn(e,e.return,_t)}vh&&(vh=!1,qg(e));break;case 4:l=ea,ea=Wc(e.stateNode.containerInfo),Ni(i,e),Li(e),ea=l;break;case 12:Ni(i,e),Li(e);break;case 13:Ni(i,e),Li(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ah=qt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,xh(e,l)));break;case 22:u=e.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,dt=Ba,bt=Nn;if(Ba=dt||u,Nn=bt||k,Ni(i,e),Nn=bt,Ba=dt,Li(e),l&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||k||Ba||Nn||Qs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(d=k.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=k.stateNode;var It=k.memoizedProps.style,mt=It!=null&&It.hasOwnProperty("display")?It.display:null;b.style.display=mt==null||typeof mt=="boolean"?"":(""+mt).trim()}}catch(_t){hn(k,k.return,_t)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(_t){hn(k,k.return,_t)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,xh(e,s))));break;case 19:Ni(i,e),Li(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,xh(e,l)));break;case 30:break;case 21:break;default:Ni(i,e),Li(e)}}function Li(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(Fg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=gh(e);Uc(e,d,u);break;case 5:var M=s.stateNode;s.flags&32&&(ua(M,""),s.flags&=-33);var b=gh(e);Uc(e,b,M);break;case 3:case 4:var k=s.stateNode.containerInfo,dt=gh(e);_h(e,dt,k);break;default:throw Error(a(161))}}catch(bt){hn(e,e.return,bt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function qg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;qg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function hs(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Vg(e,i.alternate,i),i=i.sibling}function Qs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:fs(4,i,i.return),Qs(i);break;case 1:da(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&zg(i,i.return,s),Qs(i);break;case 27:gl(i.stateNode);case 26:case 5:da(i,i.return),Qs(i);break;case 22:i.memoizedState===null&&Qs(i);break;case 30:Qs(i);break;default:Qs(i)}e=e.sibling}}function ds(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=e,d=i,M=d.flags;switch(d.tag){case 0:case 11:case 15:ds(u,d,s),rl(4,d);break;case 1:if(ds(u,d,s),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(dt){hn(l,l.return,dt)}if(l=d,u=l.updateQueue,u!==null){var b=l.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)y0(k[u],b)}catch(dt){hn(l,l.return,dt)}}s&&M&64&&Ig(d),ol(d,d.return);break;case 27:Hg(d);case 26:case 5:ds(u,d,s),s&&l===null&&M&4&&Bg(d),ol(d,d.return);break;case 12:ds(u,d,s);break;case 13:ds(u,d,s),s&&M&4&&Xg(u,d);break;case 22:d.memoizedState===null&&ds(u,d,s),ol(d,d.return);break;case 30:break;default:ds(u,d,s)}i=i.sibling}}function Eh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Wo(s))}function Sh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Wo(e))}function pa(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Zg(e,i,s,l),i=i.sibling}function Zg(e,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:pa(e,i,s,l),u&2048&&rl(9,i);break;case 1:pa(e,i,s,l);break;case 3:pa(e,i,s,l),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Wo(e)));break;case 12:if(u&2048){pa(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,M=d.id,b=d.onPostCommit;typeof b=="function"&&b(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){hn(i,i.return,k)}}else pa(e,i,s,l);break;case 13:pa(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,M=i.alternate,i.memoizedState!==null?d._visibility&2?pa(e,i,s,l):ll(e,i):d._visibility&2?pa(e,i,s,l):(d._visibility|=2,Ir(e,i,s,l,(i.subtreeFlags&10256)!==0)),u&2048&&Eh(M,i);break;case 24:pa(e,i,s,l),u&2048&&Sh(i.alternate,i);break;default:pa(e,i,s,l)}}function Ir(e,i,s,l,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,M=i,b=s,k=l,dt=M.flags;switch(M.tag){case 0:case 11:case 15:Ir(d,M,b,k,u),rl(8,M);break;case 23:break;case 22:var bt=M.stateNode;M.memoizedState!==null?bt._visibility&2?Ir(d,M,b,k,u):ll(d,M):(bt._visibility|=2,Ir(d,M,b,k,u)),u&&dt&2048&&Eh(M.alternate,M);break;case 24:Ir(d,M,b,k,u),u&&dt&2048&&Sh(M.alternate,M);break;default:Ir(d,M,b,k,u)}i=i.sibling}}function ll(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,u=l.flags;switch(l.tag){case 22:ll(s,l),u&2048&&Eh(l.alternate,l);break;case 24:ll(s,l),u&2048&&Sh(l.alternate,l);break;default:ll(s,l)}i=i.sibling}}var cl=8192;function zr(e){if(e.subtreeFlags&cl)for(e=e.child;e!==null;)jg(e),e=e.sibling}function jg(e){switch(e.tag){case 26:zr(e),e.flags&cl&&e.memoizedState!==null&&Gy(ea,e.memoizedState,e.memoizedProps);break;case 5:zr(e);break;case 3:case 4:var i=ea;ea=Wc(e.stateNode.containerInfo),zr(e),ea=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=cl,cl=16777216,zr(e),cl=i):zr(e));break;default:zr(e)}}function Kg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ul(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Yn=l,Jg(l,e)}Kg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qg(e),e=e.sibling}function Qg(e){switch(e.tag){case 0:case 11:case 15:ul(e),e.flags&2048&&fs(9,e,e.return);break;case 3:ul(e);break;case 12:ul(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Pc(e)):ul(e);break;default:ul(e)}}function Pc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Yn=l,Jg(l,e)}Kg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:fs(8,i,i.return),Pc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Pc(i));break;default:Pc(i)}e=e.sibling}}function Jg(e,i){for(;Yn!==null;){var s=Yn;switch(s.tag){case 0:case 11:case 15:fs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Yn=l;else t:for(s=e;Yn!==null;){l=Yn;var u=l.sibling,d=l.return;if(kg(l),l===s){Yn=null;break t}if(u!==null){u.return=d,Yn=u;break t}Yn=d}}}var iy={getCacheForType:function(e){var i=ri(zn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},ay=typeof WeakMap=="function"?WeakMap:Map,nn=0,_n=null,Fe=null,Ye=0,an=0,Ui=null,ps=!1,Br=!1,yh=!1,Ha=0,bn=0,ms=0,Js=0,Mh=0,qi=0,Fr=0,fl=null,Ri=null,Th=!1,Ah=0,Oc=1/0,Ic=null,gs=null,ti=0,_s=null,Hr=null,Gr=0,Rh=0,bh=null,$g=null,hl=0,wh=null;function Pi(){if((nn&2)!==0&&Ye!==0)return Ye&-Ye;if(B.T!==null){var e=wr;return e!==0?e:Oh()}return Qt()}function t_(){qi===0&&(qi=(Ye&536870912)===0||Je?I():536870912);var e=Wi.current;return e!==null&&(e.flags|=32),qi}function Oi(e,i,s){(e===_n&&(an===2||an===9)||e.cancelPendingCommit!==null)&&(Vr(e,0),vs(e,Ye,qi,!1)),St(e,s),((nn&2)===0||e!==_n)&&(e===_n&&((nn&2)===0&&(Js|=s),bn===4&&vs(e,Ye,qi,!1)),ma(e))}function e_(e,i,s){if((nn&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Mt(e,i),u=l?oy(e,i):Nh(e,i,!0),d=l;do{if(u===0){Br&&!l&&vs(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!sy(s)){u=Nh(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var b=e;u=fl;var k=b.current.memoizedState.isDehydrated;if(k&&(Vr(b,M).flags|=256),M=Nh(b,M,!1),M!==2){if(yh&&!k){b.errorRecoveryDisabledLanes|=d,Js|=d,u=4;break t}d=Ri,Ri=u,d!==null&&(Ri===null?Ri=d:Ri.push.apply(Ri,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){Vr(e,0),vs(e,i,0,!0);break}t:{switch(l=e,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:vs(l,i,qi,!ps);break t;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=Ah+300-qt(),10<u)){if(vs(l,i,qi,!ps),Ot(l,0,!0)!==0)break t;l.timeoutHandle=D_(n_.bind(null,l,s,Ri,Ic,Th,i,qi,Js,Fr,ps,d,2,-0,0),u);break t}n_(l,s,Ri,Ic,Th,i,qi,Js,Fr,ps,d,0,-0,0)}}break}while(!0);ma(e)}function n_(e,i,s,l,u,d,M,b,k,dt,bt,It,mt,_t){if(e.timeoutHandle=-1,It=i.subtreeFlags,(It&8192||(It&16785408)===16785408)&&(xl={stylesheets:null,count:0,unsuspend:Hy},jg(i),It=Vy(),It!==null)){e.cancelPendingCommit=It(c_.bind(null,e,i,d,s,l,u,M,b,k,bt,1,mt,_t)),vs(e,d,M,!dt);return}c_(e,i,d,s,l,u,M,b,k)}function sy(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],d=u.getSnapshot;u=u.value;try{if(!Ci(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vs(e,i,s,l){i&=~Mh,i&=~Js,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var u=i;0<u;){var d=31-zt(u),M=1<<d;l[d]=-1,u&=~M}s!==0&&gt(e,s,i)}function zc(){return(nn&6)===0?(dl(0),!1):!0}function Ch(){if(Fe!==null){if(an===0)var e=Fe.return;else e=Fe,La=Ws=null,Wf(e),Pr=null,il=0,e=Fe;for(;e!==null;)Og(e.alternate,e),e=e.return;Fe=null}}function Vr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,My(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ch(),_n=e,Fe=s=Ca(e.current,null),Ye=i,an=0,Ui=null,ps=!1,Br=Mt(e,i),yh=!1,Fr=qi=Mh=Js=ms=bn=0,Ri=fl=null,Th=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var u=31-zt(l),d=1<<u;i|=e[u],l&=~d}return Ha=i,sc(),s}function i_(e,i){Pe=null,B.H=Tc,i===Zo||i===pc?(i=E0(),an=3):i===_0?(i=E0(),an=4):an=i===Sg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ui=i,Fe===null&&(bn=1,Cc(e,Vi(i,e.current)))}function a_(){var e=B.H;return B.H=Tc,e===null?Tc:e}function s_(){var e=B.A;return B.A=iy,e}function Dh(){bn=4,ps||(Ye&4194048)!==Ye&&Wi.current!==null||(Br=!0),(ms&134217727)===0&&(Js&134217727)===0||_n===null||vs(_n,Ye,qi,!1)}function Nh(e,i,s){var l=nn;nn|=2;var u=a_(),d=s_();(_n!==e||Ye!==i)&&(Ic=null,Vr(e,i)),i=!1;var M=bn;t:do try{if(an!==0&&Fe!==null){var b=Fe,k=Ui;switch(an){case 8:Ch(),M=6;break t;case 3:case 2:case 9:case 6:Wi.current===null&&(i=!0);var dt=an;if(an=0,Ui=null,kr(e,b,k,dt),s&&Br){M=0;break t}break;default:dt=an,an=0,Ui=null,kr(e,b,k,dt)}}ry(),M=bn;break}catch(bt){i_(e,bt)}while(!0);return i&&e.shellSuspendCounter++,La=Ws=null,nn=l,B.H=u,B.A=d,Fe===null&&(_n=null,Ye=0,sc()),M}function ry(){for(;Fe!==null;)r_(Fe)}function oy(e,i){var s=nn;nn|=2;var l=a_(),u=s_();_n!==e||Ye!==i?(Ic=null,Oc=qt()+500,Vr(e,i)):Br=Mt(e,i);t:do try{if(an!==0&&Fe!==null){i=Fe;var d=Ui;e:switch(an){case 1:an=0,Ui=null,kr(e,i,d,1);break;case 2:case 9:if(v0(d)){an=0,Ui=null,o_(i);break}i=function(){an!==2&&an!==9||_n!==e||(an=7),ma(e)},d.then(i,i);break t;case 3:an=7;break t;case 4:an=5;break t;case 7:v0(d)?(an=0,Ui=null,o_(i)):(an=0,Ui=null,kr(e,i,d,7));break;case 5:var M=null;switch(Fe.tag){case 26:M=Fe.memoizedState;case 5:case 27:var b=Fe;if(!M||V_(M)){an=0,Ui=null;var k=b.sibling;if(k!==null)Fe=k;else{var dt=b.return;dt!==null?(Fe=dt,Bc(dt)):Fe=null}break e}}an=0,Ui=null,kr(e,i,d,5);break;case 6:an=0,Ui=null,kr(e,i,d,6);break;case 8:Ch(),bn=6;break t;default:throw Error(a(462))}}ly();break}catch(bt){i_(e,bt)}while(!0);return La=Ws=null,B.H=l,B.A=u,nn=s,Fe!==null?0:(_n=null,Ye=0,sc(),bn)}function ly(){for(;Fe!==null&&!Bt();)r_(Fe)}function r_(e){var i=Ug(e.alternate,e,Ha);e.memoizedProps=e.pendingProps,i===null?Bc(e):Fe=i}function o_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=bg(s,i,i.pendingProps,i.type,void 0,Ye);break;case 11:i=bg(s,i,i.pendingProps,i.type.render,i.ref,Ye);break;case 5:Wf(i);default:Og(s,i),i=Fe=l0(i,Ha),i=Ug(s,i,Ha)}e.memoizedProps=e.pendingProps,i===null?Bc(e):Fe=i}function kr(e,i,s,l){La=Ws=null,Wf(i),Pr=null,il=0;var u=i.return;try{if(QS(e,u,i,s,Ye)){bn=1,Cc(e,Vi(s,e.current)),Fe=null;return}}catch(d){if(u!==null)throw Fe=u,d;bn=1,Cc(e,Vi(s,e.current)),Fe=null;return}i.flags&32768?(Je||l===1?e=!0:Br||(Ye&536870912)!==0?e=!1:(ps=e=!0,(l===2||l===9||l===3||l===6)&&(l=Wi.current,l!==null&&l.tag===13&&(l.flags|=16384))),l_(i,e)):Bc(i)}function Bc(e){var i=e;do{if((i.flags&32768)!==0){l_(i,ps);return}e=i.return;var s=$S(i.alternate,i,Ha);if(s!==null){Fe=s;return}if(i=i.sibling,i!==null){Fe=i;return}Fe=i=e}while(i!==null);bn===0&&(bn=5)}function l_(e,i){do{var s=ty(e.alternate,e);if(s!==null){s.flags&=32767,Fe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Fe=e;return}Fe=e=s}while(e!==null);bn=6,Fe=null}function c_(e,i,s,l,u,d,M,b,k){e.cancelPendingCommit=null;do Fc();while(ti!==0);if((nn&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Sf,rt(e,s,d,M,b,k),e===_n&&(Fe=_n=null,Ye=0),Hr=i,_s=e,Gr=s,Rh=d,bh=u,$g=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hy(le,function(){return p_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,u=j.p,j.p=2,M=nn,nn|=4;try{ey(e,i,s)}finally{nn=M,j.p=u,B.T=l}}ti=1,u_(),f_(),h_()}}function u_(){if(ti===1){ti=0;var e=_s,i=Hr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=j.p;j.p=2;var u=nn;nn|=4;try{Wg(i,e);var d=kh,M=Jm(e.containerInfo),b=d.focusedElem,k=d.selectionRange;if(M!==b&&b&&b.ownerDocument&&Qm(b.ownerDocument.documentElement,b)){if(k!==null&&gf(b)){var dt=k.start,bt=k.end;if(bt===void 0&&(bt=dt),"selectionStart"in b)b.selectionStart=dt,b.selectionEnd=Math.min(bt,b.value.length);else{var It=b.ownerDocument||document,mt=It&&It.defaultView||window;if(mt.getSelection){var _t=mt.getSelection(),ye=b.textContent.length,xe=Math.min(k.start,ye),ln=k.end===void 0?xe:Math.min(k.end,ye);!_t.extend&&xe>ln&&(M=ln,ln=xe,xe=M);var at=Km(b,xe),q=Km(b,ln);if(at&&q&&(_t.rangeCount!==1||_t.anchorNode!==at.node||_t.anchorOffset!==at.offset||_t.focusNode!==q.node||_t.focusOffset!==q.offset)){var ht=It.createRange();ht.setStart(at.node,at.offset),_t.removeAllRanges(),xe>ln?(_t.addRange(ht),_t.extend(q.node,q.offset)):(ht.setEnd(q.node,q.offset),_t.addRange(ht))}}}}for(It=[],_t=b;_t=_t.parentNode;)_t.nodeType===1&&It.push({element:_t,left:_t.scrollLeft,top:_t.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<It.length;b++){var Lt=It[b];Lt.element.scrollLeft=Lt.left,Lt.element.scrollTop=Lt.top}}Qc=!!Vh,kh=Vh=null}finally{nn=u,j.p=l,B.T=s}}e.current=i,ti=2}}function f_(){if(ti===2){ti=0;var e=_s,i=Hr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=j.p;j.p=2;var u=nn;nn|=4;try{Vg(e,i.alternate,i)}finally{nn=u,j.p=l,B.T=s}}ti=3}}function h_(){if(ti===4||ti===3){ti=0,Zt();var e=_s,i=Hr,s=Gr,l=$g;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ti=5:(ti=0,Hr=_s=null,d_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(gs=null),se(s),i=i.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(W,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,u=j.p,j.p=2,B.T=null;try{for(var d=e.onRecoverableError,M=0;M<l.length;M++){var b=l[M];d(b.value,{componentStack:b.stack})}}finally{B.T=i,j.p=u}}(Gr&3)!==0&&Fc(),ma(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===wh?hl++:(hl=0,wh=e):hl=0,dl(0)}}function d_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Wo(i)))}function Fc(e){return u_(),f_(),h_(),p_()}function p_(){if(ti!==5)return!1;var e=_s,i=Rh;Rh=0;var s=se(Gr),l=B.T,u=j.p;try{j.p=32>s?32:s,B.T=null,s=bh,bh=null;var d=_s,M=Gr;if(ti=0,Hr=_s=null,Gr=0,(nn&6)!==0)throw Error(a(331));var b=nn;if(nn|=4,Qg(d.current),Zg(d,d.current,M,s),nn=b,dl(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(W,d)}catch{}return!0}finally{j.p=u,B.T=l,d_(e,i)}}function m_(e,i,s){i=Vi(s,i),i=rh(e.stateNode,i,2),e=os(e,i,2),e!==null&&(St(e,2),ma(e))}function hn(e,i,s){if(e.tag===3)m_(e,e,s);else for(;i!==null;){if(i.tag===3){m_(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(gs===null||!gs.has(l))){e=Vi(s,e),s=xg(2),l=os(i,s,2),l!==null&&(Eg(s,l,i,e),St(l,2),ma(l));break}}i=i.return}}function Lh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new ay;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(yh=!0,u.add(s),e=cy.bind(null,e,i,s),i.then(e,e))}function cy(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,_n===e&&(Ye&s)===s&&(bn===4||bn===3&&(Ye&62914560)===Ye&&300>qt()-Ah?(nn&2)===0&&Vr(e,0):Mh|=s,Fr===Ye&&(Fr=0)),ma(e)}function g_(e,i){i===0&&(i=Tt()),e=Tr(e,i),e!==null&&(St(e,i),ma(e))}function uy(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),g_(e,s)}function fy(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),g_(e,s)}function hy(e,i){return jt(e,i)}var Hc=null,Yr=null,Uh=!1,Gc=!1,Ph=!1,$s=0;function ma(e){e!==Yr&&e.next===null&&(Yr===null?Hc=Yr=e:Yr=Yr.next=e),Gc=!0,Uh||(Uh=!0,py())}function dl(e,i){if(!Ph&&Gc){Ph=!0;do for(var s=!1,l=Hc;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var M=l.suspendedLanes,b=l.pingedLanes;d=(1<<31-zt(42|e)+1)-1,d&=u&~(M&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,E_(l,d))}else d=Ye,d=Ot(l,l===_n?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Mt(l,d)||(s=!0,E_(l,d));l=l.next}while(s);Ph=!1}}function dy(){__()}function __(){Gc=Uh=!1;var e=0;$s!==0&&(yy()&&(e=$s),$s=0);for(var i=qt(),s=null,l=Hc;l!==null;){var u=l.next,d=v_(l,i);d===0?(l.next=null,s===null?Hc=u:s.next=u,u===null&&(Yr=s)):(s=l,(e!==0||(d&3)!==0)&&(Gc=!0)),l=u}dl(e)}function v_(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-zt(d),b=1<<M,k=u[M];k===-1?((b&s)===0||(b&l)!==0)&&(u[M]=Dt(b,i)):k<=i&&(e.expiredLanes|=b),d&=~b}if(i=_n,s=Ye,s=Ot(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(an===2||an===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&O(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Mt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&O(l),se(s)){case 2:case 8:s=Xt;break;case 32:s=le;break;case 268435456:s=L;break;default:s=le}return l=x_.bind(null,e),s=jt(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&O(l),e.callbackPriority=2,e.callbackNode=null,2}function x_(e,i){if(ti!==0&&ti!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Fc()&&e.callbackNode!==s)return null;var l=Ye;return l=Ot(e,e===_n?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(e_(e,l,i),v_(e,qt()),e.callbackNode!=null&&e.callbackNode===s?x_.bind(null,e):null)}function E_(e,i){if(Fc())return null;e_(e,i,!0)}function py(){Ty(function(){(nn&6)!==0?jt(de,dy):__()})}function Oh(){return $s===0&&($s=I()),$s}function S_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jl(""+e)}function y_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function my(e,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var d=S_((u[we]||null).action),M=l.submitter;M&&(i=(i=M[we]||null)?S_(i.formAction):M.getAttribute("formAction"),i!==null&&(d=i,M=null));var b=new nc("action","action",null,l,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($s!==0){var k=M?y_(u,M):new FormData(u);eh(s,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(b.preventDefault(),k=M?y_(u,M):new FormData(u),eh(s,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var Ih=0;Ih<Ef.length;Ih++){var zh=Ef[Ih],gy=zh.toLowerCase(),_y=zh[0].toUpperCase()+zh.slice(1);ta(gy,"on"+_y)}ta(e0,"onAnimationEnd"),ta(n0,"onAnimationIteration"),ta(i0,"onAnimationStart"),ta("dblclick","onDoubleClick"),ta("focusin","onFocus"),ta("focusout","onBlur"),ta(PS,"onTransitionRun"),ta(OS,"onTransitionStart"),ta(IS,"onTransitionCancel"),ta(a0,"onTransitionEnd"),D("onMouseEnter",["mouseout","mouseover"]),D("onMouseLeave",["mouseout","mouseover"]),D("onPointerEnter",["pointerout","pointerover"]),D("onPointerLeave",["pointerout","pointerover"]),fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function M_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],u=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var M=l.length-1;0<=M;M--){var b=l[M],k=b.instance,dt=b.currentTarget;if(b=b.listener,k!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=dt;try{d(u)}catch(bt){wc(bt)}u.currentTarget=null,d=k}else for(M=0;M<l.length;M++){if(b=l[M],k=b.instance,dt=b.currentTarget,b=b.listener,k!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=dt;try{d(u)}catch(bt){wc(bt)}u.currentTarget=null,d=k}}}}function He(e,i){var s=i[pn];s===void 0&&(s=i[pn]=new Set);var l=e+"__bubble";s.has(l)||(T_(i,e,2,!1),s.add(l))}function Bh(e,i,s){var l=0;i&&(l|=4),T_(s,e,l,i)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function Fh(e){if(!e[Vc]){e[Vc]=!0,yi.forEach(function(s){s!=="selectionchange"&&(vy.has(s)||Bh(s,!1,e),Bh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Vc]||(i[Vc]=!0,Bh("selectionchange",!1,i))}}function T_(e,i,s,l){switch(Z_(i)){case 2:var u=Xy;break;case 8:u=Wy;break;default:u=$h}s=u.bind(null,i,s,e),u=void 0,!of||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function Hh(e,i,s,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var b=l.stateNode.containerInfo;if(b===u)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;b!==null;){if(M=$t(b),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){l=d=M;continue t}b=b.parentNode}}l=l.return}Nm(function(){var dt=d,bt=sf(s),It=[];t:{var mt=s0.get(e);if(mt!==void 0){var _t=nc,ye=e;switch(e){case"keypress":if(tc(s)===0)break t;case"keydown":case"keyup":_t=hS;break;case"focusin":ye="focus",_t=ff;break;case"focusout":ye="blur",_t=ff;break;case"beforeblur":case"afterblur":_t=ff;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_t=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_t=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_t=mS;break;case e0:case n0:case i0:_t=iS;break;case a0:_t=_S;break;case"scroll":case"scrollend":_t=JE;break;case"wheel":_t=xS;break;case"copy":case"cut":case"paste":_t=sS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_t=Im;break;case"toggle":case"beforetoggle":_t=SS}var xe=(i&4)!==0,ln=!xe&&(e==="scroll"||e==="scrollend"),at=xe?mt!==null?mt+"Capture":null:mt;xe=[];for(var q=dt,ht;q!==null;){var Lt=q;if(ht=Lt.stateNode,Lt=Lt.tag,Lt!==5&&Lt!==26&&Lt!==27||ht===null||at===null||(Lt=Uo(q,at),Lt!=null&&xe.push(ml(q,Lt,ht))),ln)break;q=q.return}0<xe.length&&(mt=new _t(mt,ye,null,s,bt),It.push({event:mt,listeners:xe}))}}if((i&7)===0){t:{if(mt=e==="mouseover"||e==="pointerover",_t=e==="mouseout"||e==="pointerout",mt&&s!==af&&(ye=s.relatedTarget||s.fromElement)&&($t(ye)||ye[Sn]))break t;if((_t||mt)&&(mt=bt.window===bt?bt:(mt=bt.ownerDocument)?mt.defaultView||mt.parentWindow:window,_t?(ye=s.relatedTarget||s.toElement,_t=dt,ye=ye?$t(ye):null,ye!==null&&(ln=c(ye),xe=ye.tag,ye!==ln||xe!==5&&xe!==27&&xe!==6)&&(ye=null)):(_t=null,ye=dt),_t!==ye)){if(xe=Pm,Lt="onMouseLeave",at="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(xe=Im,Lt="onPointerLeave",at="onPointerEnter",q="pointer"),ln=_t==null?mt:tn(_t),ht=ye==null?mt:tn(ye),mt=new xe(Lt,q+"leave",_t,s,bt),mt.target=ln,mt.relatedTarget=ht,Lt=null,$t(bt)===dt&&(xe=new xe(at,q+"enter",ye,s,bt),xe.target=ht,xe.relatedTarget=ln,Lt=xe),ln=Lt,_t&&ye)e:{for(xe=_t,at=ye,q=0,ht=xe;ht;ht=Xr(ht))q++;for(ht=0,Lt=at;Lt;Lt=Xr(Lt))ht++;for(;0<q-ht;)xe=Xr(xe),q--;for(;0<ht-q;)at=Xr(at),ht--;for(;q--;){if(xe===at||at!==null&&xe===at.alternate)break e;xe=Xr(xe),at=Xr(at)}xe=null}else xe=null;_t!==null&&A_(It,mt,_t,xe,!1),ye!==null&&ln!==null&&A_(It,ln,ye,xe,!0)}}t:{if(mt=dt?tn(dt):window,_t=mt.nodeName&&mt.nodeName.toLowerCase(),_t==="select"||_t==="input"&&mt.type==="file")var ce=Ym;else if(Vm(mt))if(Xm)ce=NS;else{ce=CS;var ze=wS}else _t=mt.nodeName,!_t||_t.toLowerCase()!=="input"||mt.type!=="checkbox"&&mt.type!=="radio"?dt&&nf(dt.elementType)&&(ce=Ym):ce=DS;if(ce&&(ce=ce(e,dt))){km(It,ce,s,bt);break t}ze&&ze(e,mt,dt),e==="focusout"&&dt&&mt.type==="number"&&dt.memoizedProps.value!=null&&si(mt,"number",mt.value)}switch(ze=dt?tn(dt):window,e){case"focusin":(Vm(ze)||ze.contentEditable==="true")&&(Sr=ze,_f=dt,Go=null);break;case"focusout":Go=_f=Sr=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,$m(It,s,bt);break;case"selectionchange":if(US)break;case"keydown":case"keyup":$m(It,s,bt)}var pe;if(df)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Er?Hm(e,s)&&(Se="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Se="onCompositionStart");Se&&(zm&&s.locale!=="ko"&&(Er||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Er&&(pe=Lm()):(is=bt,lf="value"in is?is.value:is.textContent,Er=!0)),ze=kc(dt,Se),0<ze.length&&(Se=new Om(Se,e,null,s,bt),It.push({event:Se,listeners:ze}),pe?Se.data=pe:(pe=Gm(s),pe!==null&&(Se.data=pe)))),(pe=MS?TS(e,s):AS(e,s))&&(Se=kc(dt,"onBeforeInput"),0<Se.length&&(ze=new Om("onBeforeInput","beforeinput",null,s,bt),It.push({event:ze,listeners:Se}),ze.data=pe)),my(It,e,dt,s,bt)}M_(It,i)})}function ml(e,i,s){return{instance:e,listener:i,currentTarget:s}}function kc(e,i){for(var s=i+"Capture",l=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Uo(e,s),u!=null&&l.unshift(ml(e,u,d)),u=Uo(e,i),u!=null&&l.push(ml(e,u,d))),e.tag===3)return l;e=e.return}return[]}function Xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function A_(e,i,s,l,u){for(var d=i._reactName,M=[];s!==null&&s!==l;){var b=s,k=b.alternate,dt=b.stateNode;if(b=b.tag,k!==null&&k===l)break;b!==5&&b!==26&&b!==27||dt===null||(k=dt,u?(dt=Uo(s,d),dt!=null&&M.unshift(ml(s,dt,k))):u||(dt=Uo(s,d),dt!=null&&M.push(ml(s,dt,k)))),s=s.return}M.length!==0&&e.push({event:i,listeners:M})}var xy=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function R_(e){return(typeof e=="string"?e:""+e).replace(xy,`
`).replace(Ey,"")}function b_(e,i){return i=R_(i),R_(e)===i}function Yc(){}function on(e,i,s,l,u,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ua(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ua(e,""+l);break;case"className":Jt(e,"class",l);break;case"tabIndex":Jt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,s,l);break;case"style":Cm(e,l,d);break;case"data":if(i!=="object"){Jt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Jl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&on(e,i,"name",u.name,u,null),on(e,i,"formEncType",u.formEncType,u,null),on(e,i,"formMethod",u.formMethod,u,null),on(e,i,"formTarget",u.formTarget,u,null)):(on(e,i,"encType",u.encType,u,null),on(e,i,"method",u.method,u,null),on(e,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Jl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Yc);break;case"onScroll":l!=null&&He("scroll",e);break;case"onScrollEnd":l!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Jl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":He("beforetoggle",e),He("toggle",e),kt(e,"popover",l);break;case"xlinkActuate":ne(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ne(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ne(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ne(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ne(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ne(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ne(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ne(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ne(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":kt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=KE.get(s)||s,kt(e,s,l))}}function Gh(e,i,s,l,u,d){switch(s){case"style":Cm(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?ua(e,l):(typeof l=="number"||typeof l=="bigint")&&ua(e,""+l);break;case"onScroll":l!=null&&He("scroll",e);break;case"onScrollEnd":l!=null&&He("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Yc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$i.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=e[we]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,u);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):kt(e,s,l)}}}function ei(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var l=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var M=s[d];if(M!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:on(e,i,d,M,s,null)}}u&&on(e,i,"srcSet",s.srcSet,s,null),l&&on(e,i,"src",s.src,s,null);return;case"input":He("invalid",e);var b=d=M=u=null,k=null,dt=null;for(l in s)if(s.hasOwnProperty(l)){var bt=s[l];if(bt!=null)switch(l){case"name":u=bt;break;case"type":M=bt;break;case"checked":k=bt;break;case"defaultChecked":dt=bt;break;case"value":d=bt;break;case"defaultValue":b=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(a(137,i));break;default:on(e,i,l,bt,s,null)}}fn(e,d,b,k,dt,M,u,!1),An(e);return;case"select":He("invalid",e),l=M=d=null;for(u in s)if(s.hasOwnProperty(u)&&(b=s[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":M=b;break;case"multiple":l=b;default:on(e,i,u,b,s,null)}i=d,s=M,e.multiple=!!l,i!=null?In(e,!!l,i,!1):s!=null&&In(e,!!l,s,!0);return;case"textarea":He("invalid",e),d=u=l=null;for(M in s)if(s.hasOwnProperty(M)&&(b=s[M],b!=null))switch(M){case"value":l=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:on(e,i,M,b,s,null)}Jn(e,l,u,d),An(e);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(l=s[k],l!=null))switch(k){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:on(e,i,k,l,s,null)}return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(l=0;l<pl.length;l++)He(pl[l],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(dt in s)if(s.hasOwnProperty(dt)&&(l=s[dt],l!=null))switch(dt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:on(e,i,dt,l,s,null)}return;default:if(nf(i)){for(bt in s)s.hasOwnProperty(bt)&&(l=s[bt],l!==void 0&&Gh(e,i,bt,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&on(e,i,b,l,s,null))}function Sy(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,b=null,k=null,dt=null,bt=null;for(_t in s){var It=s[_t];if(s.hasOwnProperty(_t)&&It!=null)switch(_t){case"checked":break;case"value":break;case"defaultValue":k=It;default:l.hasOwnProperty(_t)||on(e,i,_t,null,l,It)}}for(var mt in l){var _t=l[mt];if(It=s[mt],l.hasOwnProperty(mt)&&(_t!=null||It!=null))switch(mt){case"type":d=_t;break;case"name":u=_t;break;case"checked":dt=_t;break;case"defaultChecked":bt=_t;break;case"value":M=_t;break;case"defaultValue":b=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(a(137,i));break;default:_t!==It&&on(e,i,mt,_t,l,It)}}Ra(e,M,b,k,dt,bt,d,u);return;case"select":_t=M=b=mt=null;for(d in s)if(k=s[d],s.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":_t=k;default:l.hasOwnProperty(d)||on(e,i,d,null,l,k)}for(u in l)if(d=l[u],k=s[u],l.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":mt=d;break;case"defaultValue":b=d;break;case"multiple":M=d;default:d!==k&&on(e,i,u,d,l,k)}i=b,s=M,l=_t,mt!=null?In(e,!!s,mt,!1):!!l!=!!s&&(i!=null?In(e,!!s,i,!0):In(e,!!s,s?[]:"",!1));return;case"textarea":_t=mt=null;for(b in s)if(u=s[b],s.hasOwnProperty(b)&&u!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:on(e,i,b,null,l,u)}for(M in l)if(u=l[M],d=s[M],l.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":mt=u;break;case"defaultValue":_t=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&on(e,i,M,u,l,d)}Vn(e,mt,_t);return;case"option":for(var ye in s)if(mt=s[ye],s.hasOwnProperty(ye)&&mt!=null&&!l.hasOwnProperty(ye))switch(ye){case"selected":e.selected=!1;break;default:on(e,i,ye,null,l,mt)}for(k in l)if(mt=l[k],_t=s[k],l.hasOwnProperty(k)&&mt!==_t&&(mt!=null||_t!=null))switch(k){case"selected":e.selected=mt&&typeof mt!="function"&&typeof mt!="symbol";break;default:on(e,i,k,mt,l,_t)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in s)mt=s[xe],s.hasOwnProperty(xe)&&mt!=null&&!l.hasOwnProperty(xe)&&on(e,i,xe,null,l,mt);for(dt in l)if(mt=l[dt],_t=s[dt],l.hasOwnProperty(dt)&&mt!==_t&&(mt!=null||_t!=null))switch(dt){case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:on(e,i,dt,mt,l,_t)}return;default:if(nf(i)){for(var ln in s)mt=s[ln],s.hasOwnProperty(ln)&&mt!==void 0&&!l.hasOwnProperty(ln)&&Gh(e,i,ln,void 0,l,mt);for(bt in l)mt=l[bt],_t=s[bt],!l.hasOwnProperty(bt)||mt===_t||mt===void 0&&_t===void 0||Gh(e,i,bt,mt,l,_t);return}}for(var at in s)mt=s[at],s.hasOwnProperty(at)&&mt!=null&&!l.hasOwnProperty(at)&&on(e,i,at,null,l,mt);for(It in l)mt=l[It],_t=s[It],!l.hasOwnProperty(It)||mt===_t||mt==null&&_t==null||on(e,i,It,mt,l,_t)}var Vh=null,kh=null;function Xc(e){return e.nodeType===9?e:e.ownerDocument}function w_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Yh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xh=null;function yy(){var e=window.event;return e&&e.type==="popstate"?e===Xh?!1:(Xh=e,!0):(Xh=null,!1)}var D_=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,N_=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof N_<"u"?function(e){return N_.resolve(null).then(e).catch(Ay)}:D_;function Ay(e){setTimeout(function(){throw e})}function xs(e){return e==="head"}function L_(e,i){var s=i,l=0,u=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var M=e.ownerDocument;if(s&1&&gl(M.documentElement),s&2&&gl(M.body),s&4)for(s=M.head,gl(s),M=s.firstChild;M;){var b=M.nextSibling,k=M.nodeName;M[re]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=b}}if(u===0){e.removeChild(d),Tl(i);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);Tl(i)}function Wh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Wh(s),ee(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Ry(e,i,s,l){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[re])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=na(e.nextSibling),e===null)break}return null}function by(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=na(e.nextSibling),e===null))return null;return e}function qh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function wy(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function na(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Zh=null;function U_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function P_(e,i,s){switch(i=Xc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function gl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ee(e)}var Zi=new Map,O_=new Set;function Wc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ga=j.d;j.d={f:Cy,r:Dy,D:Ny,C:Ly,L:Uy,m:Py,X:Iy,S:Oy,M:zy};function Cy(){var e=Ga.f(),i=zc();return e||i}function Dy(e){var i=Le(e);i!==null&&i.tag===5&&i.type==="form"?eg(i):Ga.r(e)}var Wr=typeof document>"u"?null:document;function I_(e,i,s){var l=Wr;if(l&&typeof i=="string"&&i){var u=gn(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),O_.has(u)||(O_.add(u),e={rel:e,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),ei(i,"link",e),Ie(i),l.head.appendChild(i)))}}function Ny(e){Ga.D(e),I_("dns-prefetch",e,null)}function Ly(e,i){Ga.C(e,i),I_("preconnect",e,i)}function Uy(e,i,s){Ga.L(e,i,s);var l=Wr;if(l&&e&&i){var u='link[rel="preload"][as="'+gn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+gn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+gn(s.imageSizes)+'"]')):u+='[href="'+gn(e)+'"]';var d=u;switch(i){case"style":d=qr(e);break;case"script":d=Zr(e)}Zi.has(d)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Zi.set(d,e),l.querySelector(u)!==null||i==="style"&&l.querySelector(_l(d))||i==="script"&&l.querySelector(vl(d))||(i=l.createElement("link"),ei(i,"link",e),Ie(i),l.head.appendChild(i)))}}function Py(e,i){Ga.m(e,i);var s=Wr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+gn(l)+'"][href="'+gn(e)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Zr(e)}if(!Zi.has(d)&&(e=g({rel:"modulepreload",href:e},i),Zi.set(d,e),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(vl(d)))return}l=s.createElement("link"),ei(l,"link",e),Ie(l),s.head.appendChild(l)}}}function Oy(e,i,s){Ga.S(e,i,s);var l=Wr;if(l&&e){var u=en(l).hoistableStyles,d=qr(e);i=i||"default";var M=u.get(d);if(!M){var b={loading:0,preload:null};if(M=l.querySelector(_l(d)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Zi.get(d))&&jh(e,s);var k=M=l.createElement("link");Ie(k),ei(k,"link",e),k._p=new Promise(function(dt,bt){k.onload=dt,k.onerror=bt}),k.addEventListener("load",function(){b.loading|=1}),k.addEventListener("error",function(){b.loading|=2}),b.loading|=4,qc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:b},u.set(d,M)}}}function Iy(e,i){Ga.X(e,i);var s=Wr;if(s&&e){var l=en(s).hoistableScripts,u=Zr(e),d=l.get(u);d||(d=s.querySelector(vl(u)),d||(e=g({src:e,async:!0},i),(i=Zi.get(u))&&Kh(e,i),d=s.createElement("script"),Ie(d),ei(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function zy(e,i){Ga.M(e,i);var s=Wr;if(s&&e){var l=en(s).hoistableScripts,u=Zr(e),d=l.get(u);d||(d=s.querySelector(vl(u)),d||(e=g({src:e,async:!0,type:"module"},i),(i=Zi.get(u))&&Kh(e,i),d=s.createElement("script"),Ie(d),ei(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function z_(e,i,s,l){var u=(u=Pt.current)?Wc(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=qr(s.href),s=en(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=qr(s.href);var d=en(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(_l(e)))&&!d._p&&(M.instance=d,M.state.loading=5),Zi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Zi.set(e,s),d||By(u,e,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Zr(s),s=en(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function qr(e){return'href="'+gn(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function B_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function By(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ei(i,"link",s),Ie(i),e.head.appendChild(i))}function Zr(e){return'[src="'+gn(e)+'"]'}function vl(e){return"script[async]"+e}function F_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+gn(s.href)+'"]');if(l)return i.instance=l,Ie(l),l;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ie(l),ei(l,"style",u),qc(l,s.precedence,e),i.instance=l;case"stylesheet":u=qr(s.href);var d=e.querySelector(_l(u));if(d)return i.state.loading|=4,i.instance=d,Ie(d),d;l=B_(s),(u=Zi.get(u))&&jh(l,u),d=(e.ownerDocument||e).createElement("link"),Ie(d);var M=d;return M._p=new Promise(function(b,k){M.onload=b,M.onerror=k}),ei(d,"link",l),i.state.loading|=4,qc(d,s.precedence,e),i.instance=d;case"script":return d=Zr(s.src),(u=e.querySelector(vl(d)))?(i.instance=u,Ie(u),u):(l=s,(u=Zi.get(d))&&(l=g({},s),Kh(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ie(u),ei(u,"link",l),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,qc(l,s.precedence,e));return i.instance}function qc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,M=0;M<l.length;M++){var b=l[M];if(b.dataset.precedence===i)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function jh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Kh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Zc=null;function H_(e,i,s){if(Zc===null){var l=new Map,u=Zc=new Map;u.set(s,l)}else u=Zc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var d=s[u];if(!(d[re]||d[be]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(i)||"";M=e+M;var b=l.get(M);b?b.push(d):l.set(M,[d])}}return l}function G_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Fy(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function V_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var xl=null;function Hy(){}function Gy(e,i,s){if(xl===null)throw Error(a(475));var l=xl;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=qr(s.href),d=e.querySelector(_l(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=jc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,Ie(d);return}d=e.ownerDocument||e,s=B_(s),(u=Zi.get(u))&&jh(s,u),d=d.createElement("link"),Ie(d);var M=d;M._p=new Promise(function(b,k){M.onload=b,M.onerror=k}),ei(d,"link",s),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=jc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function Vy(){if(xl===null)throw Error(a(475));var e=xl;return e.stylesheets&&e.count===0&&Qh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Qh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function jc(){if(this.count--,this.count===0){if(this.stylesheets)Qh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kc=null;function Qh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kc=new Map,i.forEach(ky,e),Kc=null,jc.call(e))}function ky(e,i){if(!(i.state.loading&4)){var s=Kc.get(e);if(s)var l=s.get(null);else{s=new Map,Kc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}u=i.instance,M=u.getAttribute("data-precedence"),d=s.get(M)||l,d===l&&s.set(null,u),s.set(M,u),this.count++,l=jc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var El={$$typeof:C,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Yy(e,i,s,l,u,d,M,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function k_(e,i,s,l,u,d,M,b,k,dt,bt,It){return e=new Yy(e,i,s,M,b,k,dt,It),i=1,d===!0&&(i|=24),d=Di(3,null,null,i),e.current=d,d.stateNode=e,i=Lf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},If(d),e}function Y_(e){return e?(e=Ar,e):Ar}function X_(e,i,s,l,u,d){u=Y_(u),l.context===null?l.context=u:l.pendingContext=u,l=rs(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=os(e,l,i),s!==null&&(Oi(s,e,i),Ko(s,e,i))}function W_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Jh(e,i){W_(e,i),(e=e.alternate)&&W_(e,i)}function q_(e){if(e.tag===13){var i=Tr(e,67108864);i!==null&&Oi(i,e,67108864),Jh(e,67108864)}}var Qc=!0;function Xy(e,i,s,l){var u=B.T;B.T=null;var d=j.p;try{j.p=2,$h(e,i,s,l)}finally{j.p=d,B.T=u}}function Wy(e,i,s,l){var u=B.T;B.T=null;var d=j.p;try{j.p=8,$h(e,i,s,l)}finally{j.p=d,B.T=u}}function $h(e,i,s,l){if(Qc){var u=td(l);if(u===null)Hh(e,i,l,Jc,s),j_(e,l);else if(Zy(u,e,i,s,l))l.stopPropagation();else if(j_(e,l),i&4&&-1<qy.indexOf(e)){for(;u!==null;){var d=Le(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=tt(d.pendingLanes);if(M!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var k=1<<31-zt(M);b.entanglements[1]|=k,M&=~k}ma(d),(nn&6)===0&&(Oc=qt()+500,dl(0))}}break;case 13:b=Tr(d,2),b!==null&&Oi(b,d,2),zc(),Jh(d,2)}if(d=td(l),d===null&&Hh(e,i,l,Jc,s),d===u)break;u=d}u!==null&&l.stopPropagation()}else Hh(e,i,l,null,s)}}function td(e){return e=sf(e),ed(e)}var Jc=null;function ed(e){if(Jc=null,e=$t(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Jc=e,null}function Z_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case de:return 2;case Xt:return 8;case le:case Ae:return 32;case L:return 268435456;default:return 32}default:return 32}}var nd=!1,Es=null,Ss=null,ys=null,Sl=new Map,yl=new Map,Ms=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j_(e,i){switch(e){case"focusin":case"focusout":Es=null;break;case"dragenter":case"dragleave":Ss=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":Sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(i.pointerId)}}function Ml(e,i,s,l,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Le(i),i!==null&&q_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function Zy(e,i,s,l,u){switch(i){case"focusin":return Es=Ml(Es,e,i,s,l,u),!0;case"dragenter":return Ss=Ml(Ss,e,i,s,l,u),!0;case"mouseover":return ys=Ml(ys,e,i,s,l,u),!0;case"pointerover":var d=u.pointerId;return Sl.set(d,Ml(Sl.get(d)||null,e,i,s,l,u)),!0;case"gotpointercapture":return d=u.pointerId,yl.set(d,Ml(yl.get(d)||null,e,i,s,l,u)),!0}return!1}function K_(e){var i=$t(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,$e(e.priority,function(){if(s.tag===13){var l=Pi();l=Yt(l);var u=Tr(s,l);u!==null&&Oi(u,s,l),Jh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $c(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=td(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);af=l,s.target.dispatchEvent(l),af=null}else return i=Le(s),i!==null&&q_(i),e.blockedOn=s,!1;i.shift()}return!0}function Q_(e,i,s){$c(e)&&s.delete(i)}function jy(){nd=!1,Es!==null&&$c(Es)&&(Es=null),Ss!==null&&$c(Ss)&&(Ss=null),ys!==null&&$c(ys)&&(ys=null),Sl.forEach(Q_),yl.forEach(Q_)}function tu(e,i){e.blockedOn===i&&(e.blockedOn=null,nd||(nd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jy)))}var eu=null;function J_(e){eu!==e&&(eu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){eu===e&&(eu=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],u=e[i+2];if(typeof l!="function"){if(ed(l||s)===null)continue;break}var d=Le(s);d!==null&&(e.splice(i,3),i-=3,eh(d,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Tl(e){function i(k){return tu(k,e)}Es!==null&&tu(Es,e),Ss!==null&&tu(Ss,e),ys!==null&&tu(ys,e),Sl.forEach(i),yl.forEach(i);for(var s=0;s<Ms.length;s++){var l=Ms[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ms.length&&(s=Ms[0],s.blockedOn===null);)K_(s),s.blockedOn===null&&Ms.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],d=s[l+1],M=u[we]||null;if(typeof d=="function")M||J_(s);else if(M){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[we]||null)b=M.formAction;else if(ed(u)!==null)continue}else b=M.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),J_(s)}}}function id(e){this._internalRoot=e}nu.prototype.render=id.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Pi();X_(s,l,e,i,null,null)},nu.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;X_(e.current,2,null,e,null,null),zc(),i[Sn]=null}};function nu(e){this._internalRoot=e}nu.prototype.unstable_scheduleHydration=function(e){if(e){var i=Qt();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ms.length&&i!==0&&i<Ms[s].priority;s++);Ms.splice(s,0,e),s===0&&K_(e)}};var $_=t.version;if($_!=="19.1.0")throw Error(a(527,$_,"19.1.0"));j.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Ky={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{W=iu.inject(Ky),ct=iu}catch{}}return Rl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",u=mg,d=gg,M=_g,b=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=k_(e,1,!1,null,null,s,l,u,d,M,b,null),e[Sn]=i.current,Fh(e),new id(i)},Rl.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,u="",d=mg,M=gg,b=_g,k=null,dt=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(k=s.unstable_transitionCallbacks),s.formState!==void 0&&(dt=s.formState)),i=k_(e,1,!0,i,s??null,l,u,d,M,b,k,dt),i.context=Y_(null),s=i.current,l=Pi(),l=Yt(l),u=rs(l),u.callback=null,os(s,u,l),s=l,i.current.lanes=s,St(i,s),ma(i),e[Sn]=i.current,Fh(e),new nu(i)},Rl.version="19.1.0",Rl}var cv;function rM(){if(cv)return rd.exports;cv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),rd.exports=sM(),rd.exports}var oM=rM();const lM=eE(oM);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const am="177",cM=0,uv=1,uM=2,nE=1,iE=2,Za=3,Is=0,Ei=1,jn=2,gi=0,_o=1,op=2,fv=3,hv=4,aE=5,Qa=100,fM=101,hM=102,dM=103,pM=104,lp=200,mM=201,gM=202,_M=203,cp=204,up=205,sE=206,vM=207,rE=208,xM=209,EM=210,SM=211,yM=212,MM=213,TM=214,fp=0,hp=1,dp=2,So=3,pp=4,mp=5,gp=6,_p=7,oE=0,AM=1,RM=2,Os=0,lE=1,cE=2,uE=3,fE=4,hE=5,dE=6,pE=7,mE=300,yo=301,Mo=302,vp=303,xp=304,Ju=306,Vl=1e3,ur=1001,Ep=1002,Si=1003,bM=1004,au=1005,xa=1006,ud=1007,fr=1008,ya=1009,gE=1010,_E=1011,kl=1012,sm=1013,mr=1014,Ea=1015,zs=1016,rm=1017,om=1018,To=1020,vE=35902,xE=1021,EE=1022,ca=1023,Yl=1026,Ao=1027,lm=1028,cm=1029,SE=1030,um=1031,fm=1033,Fu=33776,Hu=33777,Gu=33778,Vu=33779,Sp=35840,yp=35841,Mp=35842,Tp=35843,Ap=36196,Rp=37492,bp=37496,wp=37808,Cp=37809,Dp=37810,Np=37811,Lp=37812,Up=37813,Pp=37814,Op=37815,Ip=37816,zp=37817,Bp=37818,Fp=37819,Hp=37820,Gp=37821,ku=36492,Vp=36494,kp=36495,yE=36283,Yp=36284,Xp=36285,Wp=36286,wM=3200,CM=3201,hm=0,DM=1,Us="",Ji="srgb",Ro="srgb-linear",ju="linear",sn="srgb",jr=7680,dv=519,NM=512,LM=513,UM=514,ME=515,PM=516,OM=517,IM=518,zM=519,pv=35044,mv="300 es",ts=2e3,Ku=2001;class Do{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gv=1234567;const Il=Math.PI/180,Xl=180/Math.PI;function _r(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(li[r&255]+li[r>>8&255]+li[r>>16&255]+li[r>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[n&63|128]+li[n>>8&255]+"-"+li[n>>16&255]+li[n>>24&255]+li[a&255]+li[a>>8&255]+li[a>>16&255]+li[a>>24&255]).toLowerCase()}function Be(r,t,n){return Math.max(t,Math.min(n,r))}function dm(r,t){return(r%t+t)%t}function BM(r,t,n,a,o){return a+(r-t)*(o-a)/(n-t)}function FM(r,t,n){return r!==t?(n-r)/(t-r):0}function zl(r,t,n){return(1-n)*r+n*t}function HM(r,t,n,a){return zl(r,t,1-Math.exp(-n*a))}function GM(r,t=1){return t-Math.abs(dm(r,t*2)-t)}function VM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function kM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function YM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function XM(r,t){return r+Math.random()*(t-r)}function WM(r){return r*(.5-Math.random())}function qM(r){r!==void 0&&(gv=r);let t=gv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ZM(r){return r*Il}function jM(r){return r*Xl}function KM(r){return(r&r-1)===0&&r!==0}function QM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function JM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $M(r,t,n,a,o){const c=Math.cos,f=Math.sin,h=c(n/2),m=f(n/2),p=c((t+a)/2),g=f((t+a)/2),_=c((t-a)/2),v=f((t-a)/2),x=c((a-t)/2),y=f((a-t)/2);switch(o){case"XYX":r.set(h*g,m*_,m*v,h*p);break;case"YZY":r.set(m*v,h*g,m*_,h*p);break;case"ZXZ":r.set(m*_,m*v,h*g,h*p);break;case"XZX":r.set(h*g,m*y,m*x,h*p);break;case"YXY":r.set(m*x,h*g,m*y,h*p);break;case"ZYZ":r.set(m*y,m*x,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function fo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function di(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const TE={DEG2RAD:Il,RAD2DEG:Xl,generateUUID:_r,clamp:Be,euclideanModulo:dm,mapLinear:BM,inverseLerp:FM,lerp:zl,damp:HM,pingpong:GM,smoothstep:VM,smootherstep:kM,randInt:YM,randFloat:XM,randFloatSpread:WM,seededRandom:qM,degToRad:ZM,radToDeg:jM,isPowerOfTwo:KM,ceilPowerOfTwo:QM,floorPowerOfTwo:JM,setQuaternionFromProperEuler:$M,normalize:di,denormalize:fo};class oe{constructor(t=0,n=0){oe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Be(this.x,t.x,n.x),this.y=Be(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Be(this.x,t,n),this.y=Be(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*o+t.x,this.y=c*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kl{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,f,h){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3];const v=c[f+0],x=c[f+1],y=c[f+2],A=c[f+3];if(h===0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=v,t[n+1]=x,t[n+2]=y,t[n+3]=A;return}if(_!==A||m!==v||p!==x||g!==y){let S=1-h;const E=m*v+p*x+g*y+_*A,U=E>=0?1:-1,C=1-E*E;if(C>Number.EPSILON){const G=Math.sqrt(C),H=Math.atan2(G,E*U);S=Math.sin(S*H)/G,h=Math.sin(h*H)/G}const R=h*U;if(m=m*S+v*R,p=p*S+x*R,g=g*S+y*R,_=_*S+A*R,S===1-h){const G=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=G,p*=G,g*=G,_*=G}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,c,f){const h=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[f],v=c[f+1],x=c[f+2],y=c[f+3];return t[n]=h*y+g*_+m*x-p*v,t[n+1]=m*y+g*v+p*_-h*x,t[n+2]=p*y+g*x+h*v-m*_,t[n+3]=g*y-h*_-m*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(o/2),_=h(c/2),v=m(a/2),x=m(o/2),y=m(c/2);switch(f){case"XYZ":this._x=v*g*_+p*x*y,this._y=p*x*_-v*g*y,this._z=p*g*y+v*x*_,this._w=p*g*_-v*x*y;break;case"YXZ":this._x=v*g*_+p*x*y,this._y=p*x*_-v*g*y,this._z=p*g*y-v*x*_,this._w=p*g*_+v*x*y;break;case"ZXY":this._x=v*g*_-p*x*y,this._y=p*x*_+v*g*y,this._z=p*g*y+v*x*_,this._w=p*g*_-v*x*y;break;case"ZYX":this._x=v*g*_-p*x*y,this._y=p*x*_+v*g*y,this._z=p*g*y-v*x*_,this._w=p*g*_+v*x*y;break;case"YZX":this._x=v*g*_+p*x*y,this._y=p*x*_+v*g*y,this._z=p*g*y-v*x*_,this._w=p*g*_-v*x*y;break;case"XZY":this._x=v*g*_-p*x*y,this._y=p*x*_-v*g*y,this._z=p*g*y+v*x*_,this._w=p*g*_+v*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-p)*x,this._z=(f-o)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+f)/x,this._z=(c+p)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-p)/x,this._x=(o+f)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(f-o)/x,this._x=(c+p)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+f*h+o*p-c*m,this._y=o*g+f*m+c*h-a*p,this._z=c*g+f*p+a*m-o*h,this._w=f*g-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=o,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const x=1-n;return this._w=x*f+n*this._w,this._x=x*a+n*this._x,this._y=x*o+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=f*_+this._w*v,this._x=a*_+this._x*v,this._y=o*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,n=0,a=0){Z.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(_v.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(_v.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*o-h*a),g=2*(h*n-c*o),_=2*(c*a-f*n);return this.x=n+m*p+f*_-h*g,this.y=a+m*g+h*p-c*_,this.z=o+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Be(this.x,t.x,n.x),this.y=Be(this.y,t.y,n.y),this.z=Be(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Be(this.x,t,n),this.y=Be(this.y,t,n),this.z=Be(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*f-a*m,this.z=a*h-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return fd.copy(this).projectOnVector(t),this.sub(fd)}reflect(t){return this.sub(fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fd=new Z,_v=new Kl;class De{constructor(t,n,a,o,c,f,h,m,p){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,p)}set(t,n,a,o,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],g=a[4],_=a[7],v=a[2],x=a[5],y=a[8],A=o[0],S=o[3],E=o[6],U=o[1],C=o[4],R=o[7],G=o[2],H=o[5],F=o[8];return c[0]=f*A+h*U+m*G,c[3]=f*S+h*C+m*H,c[6]=f*E+h*R+m*F,c[1]=p*A+g*U+_*G,c[4]=p*S+g*C+_*H,c[7]=p*E+g*R+_*F,c[2]=v*A+x*U+y*G,c[5]=v*S+x*C+y*H,c[8]=v*E+x*R+y*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*h*p-a*c*g+a*h*m+o*c*p-o*f*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,v=h*m-g*c,x=p*c-f*m,y=n*_+a*v+o*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return t[0]=_*A,t[1]=(o*p-g*a)*A,t[2]=(h*a-o*f)*A,t[3]=v*A,t[4]=(g*n-o*m)*A,t[5]=(o*c-h*n)*A,t[6]=x*A,t[7]=(a*m-p*n)*A,t[8]=(f*n-a*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+t,-o*p,o*m,-o*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(hd.makeScale(t,n)),this}rotate(t){return this.premultiply(hd.makeRotation(-t)),this}translate(t,n){return this.premultiply(hd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new De;function AE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Wl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tT(){const r=Wl("canvas");return r.style.display="block",r}const vv={};function vo(r){r in vv||(vv[r]=!0,console.warn(r))}function eT(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function nT(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function iT(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xv=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ev=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aT(){const r={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===sn&&(o.r=es(o.r),o.g=es(o.g),o.b=es(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===sn&&(o.r=xo(o.r),o.g=xo(o.g),o.b=xo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Us?ju:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return vo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return vo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Ro]:{primaries:t,whitePoint:a,transfer:ju,toXYZ:xv,fromXYZ:Ev,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ji},outputColorSpaceConfig:{drawingBufferColorSpace:Ji}},[Ji]:{primaries:t,whitePoint:a,transfer:sn,toXYZ:xv,fromXYZ:Ev,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ji}}}),r}const We=aT();function es(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Kr;class sT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Kr===void 0&&(Kr=Wl("canvas")),Kr.width=t.width,Kr.height=t.height;const o=Kr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Kr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Wl("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=es(c[f]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(es(n[a]/255)*255):n[a]=es(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rT=0;class pm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=_r(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(dd(o[f].image)):c.push(dd(o[f]))}else c=dd(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function dd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oT=0;const pd=new Z;class ui extends Do{constructor(t=ui.DEFAULT_IMAGE,n=ui.DEFAULT_MAPPING,a=ur,o=ur,c=xa,f=fr,h=ca,m=ya,p=ui.DEFAULT_ANISOTROPY,g=Us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=_r(),this.name="",this.source=new pm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vl:t.x=t.x-Math.floor(t.x);break;case ur:t.x=t.x<0?0:1;break;case Ep:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vl:t.y=t.y-Math.floor(t.y);break;case ur:t.y=t.y<0?0:1;break;case Ep:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=mE;ui.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,n=0,a=0,o=1){cn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],x=m[5],y=m[9],A=m[2],S=m[6],E=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(y-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(y+S)<.1&&Math.abs(p+x+E-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(p+1)/2,R=(x+1)/2,G=(E+1)/2,H=(g+v)/4,F=(_+A)/4,X=(y+S)/4;return C>R&&C>G?C<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(C),o=H/a,c=F/a):R>G?R<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),a=H/o,c=X/o):G<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),a=F/c,o=X/c),this.set(a,o,c,n),this}let U=Math.sqrt((S-y)*(S-y)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(S-y)/U,this.y=(_-A)/U,this.z=(v-g)/U,this.w=Math.acos((p+x+E-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Be(this.x,t.x,n.x),this.y=Be(this.y,t.y,n.y),this.z=Be(this.z,t.z,n.z),this.w=Be(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Be(this.x,t,n),this.y=Be(this.y,t,n),this.z=Be(this.z,t,n),this.w=Be(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lT extends Do{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new cn(0,0,t,n),this.scissorTest=!1,this.viewport=new cn(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new ui(o);this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:xa,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new pm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ma extends lT{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class RE extends ui{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Si,this.minFilter=Si,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cT extends ui{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Si,this.minFilter=Si,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ql{constructor(t=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ia.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ia.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ia.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,ia):ia.fromBufferAttribute(c,f),ia.applyMatrix4(t.matrixWorld),this.expandByPoint(ia);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),su.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),su.copy(a.boundingBox)),su.applyMatrix4(t.matrixWorld),this.union(su)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ia),ia.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bl),ru.subVectors(this.max,bl),Qr.subVectors(t.a,bl),Jr.subVectors(t.b,bl),$r.subVectors(t.c,bl),As.subVectors(Jr,Qr),Rs.subVectors($r,Jr),tr.subVectors(Qr,$r);let n=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-tr.z,tr.y,As.z,0,-As.x,Rs.z,0,-Rs.x,tr.z,0,-tr.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-tr.y,tr.x,0];return!md(n,Qr,Jr,$r,ru)||(n=[1,0,0,0,1,0,0,0,1],!md(n,Qr,Jr,$r,ru))?!1:(ou.crossVectors(As,Rs),n=[ou.x,ou.y,ou.z],md(n,Qr,Jr,$r,ru))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ia).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ia).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Va=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ia=new Z,su=new Ql,Qr=new Z,Jr=new Z,$r=new Z,As=new Z,Rs=new Z,tr=new Z,bl=new Z,ru=new Z,ou=new Z,er=new Z;function md(r,t,n,a,o){for(let c=0,f=r.length-3;c<=f;c+=3){er.fromArray(r,c);const h=o.x*Math.abs(er.x)+o.y*Math.abs(er.y)+o.z*Math.abs(er.z),m=t.dot(er),p=n.dot(er),g=a.dot(er);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const uT=new Ql,wl=new Z,gd=new Z;class $u{constructor(t=new Z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):uT.setFromPoints(t).getCenter(a);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wl.subVectors(t,this.center);const n=wl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(wl,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wl.copy(t.center).add(gd)),this.expandByPoint(wl.copy(t.center).sub(gd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ka=new Z,_d=new Z,lu=new Z,bs=new Z,vd=new Z,cu=new Z,xd=new Z;class mm{constructor(t=new Z,n=new Z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ka)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ka.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ka.copy(this.origin).addScaledVector(this.direction,n),ka.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){_d.copy(t).add(n).multiplyScalar(.5),lu.copy(n).sub(t).normalize(),bs.copy(this.origin).sub(_d);const c=t.distanceTo(n)*.5,f=-this.direction.dot(lu),h=bs.dot(this.direction),m=-bs.dot(lu),p=bs.lengthSq(),g=Math.abs(1-f*f);let _,v,x,y;if(g>0)if(_=f*m-h,v=f*h-m,y=c*g,_>=0)if(v>=-y)if(v<=y){const A=1/g;_*=A,v*=A,x=_*(_+f*v+2*h)+v*(f*_+v+2*m)+p}else v=c,_=Math.max(0,-(f*v+h)),x=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(f*v+h)),x=-_*_+v*(v+2*m)+p;else v<=-y?(_=Math.max(0,-(-f*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+p):v<=y?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+p):(_=Math.max(0,-(f*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+p);else v=f>0?-c:c,_=Math.max(0,-(f*v+h)),x=-_*_+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(_d).addScaledVector(lu,v),x}intersectSphere(t,n){ka.subVectors(t.center,this.origin);const a=ka.dot(this.direction),o=ka.dot(ka)-a*a,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,o=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,o=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),a>f||c>o||((c>a||isNaN(a))&&(a=c),(f<o||isNaN(o))&&(o=f),_>=0?(h=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ka)!==null}intersectTriangle(t,n,a,o,c){vd.subVectors(n,t),cu.subVectors(a,t),xd.crossVectors(vd,cu);let f=this.direction.dot(xd),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;bs.subVectors(this.origin,t);const m=h*this.direction.dot(cu.crossVectors(bs,cu));if(m<0)return null;const p=h*this.direction.dot(vd.cross(bs));if(p<0||m+p>f)return null;const g=-h*bs.dot(xd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(t,n,a,o,c,f,h,m,p,g,_,v,x,y,A,S){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,p,g,_,v,x,y,A,S)}set(t,n,a,o,c,f,h,m,p,g,_,v,x,y,A,S){const E=this.elements;return E[0]=t,E[4]=n,E[8]=a,E[12]=o,E[1]=c,E[5]=f,E[9]=h,E[13]=m,E[2]=p,E[6]=g,E[10]=_,E[14]=v,E[3]=x,E[7]=y,E[11]=A,E[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/to.setFromMatrixColumn(t,0).length(),c=1/to.setFromMatrixColumn(t,1).length(),f=1/to.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,x=f*_,y=h*g,A=h*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=x+y*p,n[5]=v-A*p,n[9]=-h*m,n[2]=A-v*p,n[6]=y+x*p,n[10]=f*m}else if(t.order==="YXZ"){const v=m*g,x=m*_,y=p*g,A=p*_;n[0]=v+A*h,n[4]=y*h-x,n[8]=f*p,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=x*h-y,n[6]=A+v*h,n[10]=f*m}else if(t.order==="ZXY"){const v=m*g,x=m*_,y=p*g,A=p*_;n[0]=v-A*h,n[4]=-f*_,n[8]=y+x*h,n[1]=x+y*h,n[5]=f*g,n[9]=A-v*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const v=f*g,x=f*_,y=h*g,A=h*_;n[0]=m*g,n[4]=y*p-x,n[8]=v*p+A,n[1]=m*_,n[5]=A*p+v,n[9]=x*p-y,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const v=f*m,x=f*p,y=h*m,A=h*p;n[0]=m*g,n[4]=A-v*_,n[8]=y*_+x,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=x*_+y,n[10]=v-A*_}else if(t.order==="XZY"){const v=f*m,x=f*p,y=h*m,A=h*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+A,n[5]=f*g,n[9]=x*_-y,n[2]=y*_-x,n[6]=h*g,n[10]=A*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fT,t,hT)}lookAt(t,n,a){const o=this.elements;return Ii.subVectors(t,n),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),ws.crossVectors(a,Ii),ws.lengthSq()===0&&(Math.abs(a.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),ws.crossVectors(a,Ii)),ws.normalize(),uu.crossVectors(Ii,ws),o[0]=ws.x,o[4]=uu.x,o[8]=Ii.x,o[1]=ws.y,o[5]=uu.y,o[9]=Ii.y,o[2]=ws.z,o[6]=uu.z,o[10]=Ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],g=a[1],_=a[5],v=a[9],x=a[13],y=a[2],A=a[6],S=a[10],E=a[14],U=a[3],C=a[7],R=a[11],G=a[15],H=o[0],F=o[4],X=o[8],N=o[12],w=o[1],V=o[5],st=o[9],ut=o[13],vt=o[2],ft=o[6],B=o[10],j=o[14],K=o[3],At=o[7],z=o[11],it=o[15];return c[0]=f*H+h*w+m*vt+p*K,c[4]=f*F+h*V+m*ft+p*At,c[8]=f*X+h*st+m*B+p*z,c[12]=f*N+h*ut+m*j+p*it,c[1]=g*H+_*w+v*vt+x*K,c[5]=g*F+_*V+v*ft+x*At,c[9]=g*X+_*st+v*B+x*z,c[13]=g*N+_*ut+v*j+x*it,c[2]=y*H+A*w+S*vt+E*K,c[6]=y*F+A*V+S*ft+E*At,c[10]=y*X+A*st+S*B+E*z,c[14]=y*N+A*ut+S*j+E*it,c[3]=U*H+C*w+R*vt+G*K,c[7]=U*F+C*V+R*ft+G*At,c[11]=U*X+C*st+R*B+G*z,c[15]=U*N+C*ut+R*j+G*it,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],x=t[14],y=t[3],A=t[7],S=t[11],E=t[15];return y*(+c*m*_-o*p*_-c*h*v+a*p*v+o*h*x-a*m*x)+A*(+n*m*x-n*p*v+c*f*v-o*f*x+o*p*g-c*m*g)+S*(+n*p*_-n*h*x-c*f*_+a*f*x+c*h*g-a*p*g)+E*(-o*h*g-n*m*_+n*h*v+o*f*_-a*f*v+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],x=t[11],y=t[12],A=t[13],S=t[14],E=t[15],U=_*S*p-A*v*p+A*m*x-h*S*x-_*m*E+h*v*E,C=y*v*p-g*S*p-y*m*x+f*S*x+g*m*E-f*v*E,R=g*A*p-y*_*p+y*h*x-f*A*x-g*h*E+f*_*E,G=y*_*m-g*A*m-y*h*v+f*A*v+g*h*S-f*_*S,H=n*U+a*C+o*R+c*G;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return t[0]=U*F,t[1]=(A*v*c-_*S*c-A*o*x+a*S*x+_*o*E-a*v*E)*F,t[2]=(h*S*c-A*m*c+A*o*p-a*S*p-h*o*E+a*m*E)*F,t[3]=(_*m*c-h*v*c-_*o*p+a*v*p+h*o*x-a*m*x)*F,t[4]=C*F,t[5]=(g*S*c-y*v*c+y*o*x-n*S*x-g*o*E+n*v*E)*F,t[6]=(y*m*c-f*S*c-y*o*p+n*S*p+f*o*E-n*m*E)*F,t[7]=(f*v*c-g*m*c+g*o*p-n*v*p-f*o*x+n*m*x)*F,t[8]=R*F,t[9]=(y*_*c-g*A*c-y*a*x+n*A*x+g*a*E-n*_*E)*F,t[10]=(f*A*c-y*h*c+y*a*p-n*A*p-f*a*E+n*h*E)*F,t[11]=(g*h*c-f*_*c-g*a*p+n*_*p+f*a*x-n*h*x)*F,t[12]=G*F,t[13]=(g*A*o-y*_*o+y*a*v-n*A*v-g*a*S+n*_*S)*F,t[14]=(y*h*o-f*A*o-y*a*m+n*A*m+f*a*S-n*h*S)*F,t[15]=(f*_*o-g*h*o+g*a*m-n*_*m-f*a*v+n*h*v)*F,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+a,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+a,g*m-o*f,0,p*m-o*h,g*m+o*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,f){return this.set(1,a,c,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,g=f+f,_=h+h,v=c*p,x=c*g,y=c*_,A=f*g,S=f*_,E=h*_,U=m*p,C=m*g,R=m*_,G=a.x,H=a.y,F=a.z;return o[0]=(1-(A+E))*G,o[1]=(x+R)*G,o[2]=(y-C)*G,o[3]=0,o[4]=(x-R)*H,o[5]=(1-(v+E))*H,o[6]=(S+U)*H,o[7]=0,o[8]=(y+C)*F,o[9]=(S-U)*F,o[10]=(1-(v+A))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=to.set(o[0],o[1],o[2]).length();const f=to.set(o[4],o[5],o[6]).length(),h=to.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],aa.copy(this);const p=1/c,g=1/f,_=1/h;return aa.elements[0]*=p,aa.elements[1]*=p,aa.elements[2]*=p,aa.elements[4]*=g,aa.elements[5]*=g,aa.elements[6]*=g,aa.elements[8]*=_,aa.elements[9]*=_,aa.elements[10]*=_,n.setFromRotationMatrix(aa),a.x=c,a.y=f,a.z=h,this}makePerspective(t,n,a,o,c,f,h=ts){const m=this.elements,p=2*c/(n-t),g=2*c/(a-o),_=(n+t)/(n-t),v=(a+o)/(a-o);let x,y;if(h===ts)x=-(f+c)/(f-c),y=-2*f*c/(f-c);else if(h===Ku)x=-f/(f-c),y=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=x,m[14]=y,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,a,o,c,f,h=ts){const m=this.elements,p=1/(n-t),g=1/(a-o),_=1/(f-c),v=(n+t)*p,x=(a+o)*g;let y,A;if(h===ts)y=(f+c)*_,A=-2*_;else if(h===Ku)y=c*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-x,m[2]=0,m[6]=0,m[10]=A,m[14]=-y,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const to=new Z,aa=new un,fT=new Z(0,0,0),hT=new Z(1,1,1),ws=new Z,uu=new Z,Ii=new Z,Sv=new un,yv=new Kl;class Ta{constructor(t=0,n=0,a=0,o=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],m=o[1],p=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Be(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Sv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return yv.setFromEuler(this),this.setFromQuaternion(yv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class gm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dT=0;const Mv=new Z,eo=new Kl,Ya=new un,fu=new Z,Cl=new Z,pT=new Z,mT=new Kl,Tv=new Z(1,0,0),Av=new Z(0,1,0),Rv=new Z(0,0,1),bv={type:"added"},gT={type:"removed"},no={type:"childadded",child:null},Ed={type:"childremoved",child:null};class ii extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const t=new Z,n=new Ta,a=new Kl,o=new Z(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new De}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return eo.setFromAxisAngle(t,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,n){return eo.setFromAxisAngle(t,n),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(Tv,t)}rotateY(t){return this.rotateOnAxis(Av,t)}rotateZ(t){return this.rotateOnAxis(Rv,t)}translateOnAxis(t,n){return Mv.copy(t).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Tv,t)}translateY(t){return this.translateOnAxis(Av,t)}translateZ(t){return this.translateOnAxis(Rv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ya.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?fu.copy(t):fu.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ya.lookAt(Cl,fu,this.up):Ya.lookAt(fu,Cl,this.up),this.quaternion.setFromRotationMatrix(Ya),o&&(Ya.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(Ya),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bv),no.child=t,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(gT),Ed.child=t,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ya.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ya.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ya),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bv),no.child=t,this.dispatchEvent(no),no.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,t,pT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,mT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),x=f(t.animations),y=f(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),y.length>0&&(a.nodes=y)}return a.object=o,a;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}ii.DEFAULT_UP=new Z(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sa=new Z,Xa=new Z,Sd=new Z,Wa=new Z,io=new Z,ao=new Z,wv=new Z,yd=new Z,Md=new Z,Td=new Z,Ad=new cn,Rd=new cn,bd=new cn;class la{constructor(t=new Z,n=new Z,a=new Z){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),sa.subVectors(t,n),o.cross(sa);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){sa.subVectors(o,n),Xa.subVectors(a,n),Sd.subVectors(t,n);const f=sa.dot(sa),h=sa.dot(Xa),m=sa.dot(Sd),p=Xa.dot(Xa),g=Xa.dot(Sd),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(p*m-h*g)*v,y=(f*g-h*m)*v;return c.set(1-x-y,y,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Wa)===null?!1:Wa.x>=0&&Wa.y>=0&&Wa.x+Wa.y<=1}static getInterpolation(t,n,a,o,c,f,h,m){return this.getBarycoord(t,n,a,o,Wa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Wa.x),m.addScaledVector(f,Wa.y),m.addScaledVector(h,Wa.z),m)}static getInterpolatedAttribute(t,n,a,o,c,f){return Ad.setScalar(0),Rd.setScalar(0),bd.setScalar(0),Ad.fromBufferAttribute(t,n),Rd.fromBufferAttribute(t,a),bd.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(Ad,c.x),f.addScaledVector(Rd,c.y),f.addScaledVector(bd,c.z),f}static isFrontFacing(t,n,a,o){return sa.subVectors(a,n),Xa.subVectors(t,n),sa.cross(Xa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sa.subVectors(this.c,this.b),Xa.subVectors(this.a,this.b),sa.cross(Xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return la.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return la.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return la.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return la.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return la.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let f,h;io.subVectors(o,a),ao.subVectors(c,a),yd.subVectors(t,a);const m=io.dot(yd),p=ao.dot(yd);if(m<=0&&p<=0)return n.copy(a);Md.subVectors(t,o);const g=io.dot(Md),_=ao.dot(Md);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(a).addScaledVector(io,f);Td.subVectors(t,c);const x=io.dot(Td),y=ao.dot(Td);if(y>=0&&x<=y)return n.copy(c);const A=x*p-m*y;if(A<=0&&p>=0&&y<=0)return h=p/(p-y),n.copy(a).addScaledVector(ao,h);const S=g*y-x*_;if(S<=0&&_-g>=0&&x-y>=0)return wv.subVectors(c,o),h=(_-g)/(_-g+(x-y)),n.copy(o).addScaledVector(wv,h);const E=1/(S+A+v);return f=A*E,h=v*E,n.copy(a).addScaledVector(io,f).addScaledVector(ao,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},hu={h:0,s:0,l:0};function wd(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Me{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ji){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=We.workingColorSpace){return this.r=t,this.g=n,this.b=a,We.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=We.workingColorSpace){if(t=dm(t,1),n=Be(n,0,1),a=Be(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=wd(f,c,t+1/3),this.g=wd(f,c,t),this.b=wd(f,c,t-1/3)}return We.colorSpaceToWorking(this,o),this}setStyle(t,n=Ji){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ji){const a=bE[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ji){return We.workingToColorSpace(ci.copy(this),t),Math.round(Be(ci.r*255,0,255))*65536+Math.round(Be(ci.g*255,0,255))*256+Math.round(Be(ci.b*255,0,255))}getHexString(t=Ji){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=We.workingColorSpace){We.workingToColorSpace(ci.copy(this),n);const a=ci.r,o=ci.g,c=ci.b,f=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=We.workingColorSpace){return We.workingToColorSpace(ci.copy(this),n),t.r=ci.r,t.g=ci.g,t.b=ci.b,t}getStyle(t=Ji){We.workingToColorSpace(ci.copy(this),t);const n=ci.r,a=ci.g,o=ci.b;return t!==Ji?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Cs),this.setHSL(Cs.h+t,Cs.s+n,Cs.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Cs),t.getHSL(hu);const a=zl(Cs.h,hu.h,n),o=zl(Cs.s,hu.s,n),c=zl(Cs.l,hu.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ci=new Me;Me.NAMES=bE;let _T=0;class qn extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=_o,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cp,this.blendDst=up,this.blendEquation=Qa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(a.blending=this.blending),this.side!==Is&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==cp&&(a.blendSrc=this.blendSrc),this.blendDst!==up&&(a.blendDst=this.blendDst),this.blendEquation!==Qa&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=o(t.textures),f=o(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ra extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=oE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const On=new Z,du=new oe;let vT=0;class Gi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=pv,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)du.fromBufferAttribute(this,n),du.applyMatrix3(t),this.setXY(n,du.x,du.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.applyMatrix3(t),this.setXYZ(n,On.x,On.y,On.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.applyMatrix4(t),this.setXYZ(n,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.applyNormalMatrix(t),this.setXYZ(n,On.x,On.y,On.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.transformDirection(t),this.setXYZ(n,On.x,On.y,On.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=fo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=di(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=fo(n,this.array)),n}setX(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=fo(n,this.array)),n}setY(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=fo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=fo(n,this.array)),n}setW(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=di(n,this.array),a=di(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=di(n,this.array),a=di(a,this.array),o=di(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=di(n,this.array),a=di(a,this.array),o=di(o,this.array),c=di(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pv&&(t.usage=this.usage),t}}class wE extends Gi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class CE extends Gi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ln extends Gi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let xT=0;const ji=new un,Cd=new ii,so=new Z,zi=new Ql,Dl=new Ql,Wn=new Z;class wi extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(AE(t)?CE:wE)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new De().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ji.makeRotationFromQuaternion(t),this.applyMatrix4(ji),this}rotateX(t){return ji.makeRotationX(t),this.applyMatrix4(ji),this}rotateY(t){return ji.makeRotationY(t),this.applyMatrix4(ji),this}rotateZ(t){return ji.makeRotationZ(t),this.applyMatrix4(ji),this}translate(t,n,a){return ji.makeTranslation(t,n,a),this.applyMatrix4(ji),this}scale(t,n,a){return ji.makeScale(t,n,a),this.applyMatrix4(ji),this}lookAt(t){return Cd.lookAt(t),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ln(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ql);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];zi.setFromBufferAttribute(c),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,zi.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,zi.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(zi.min),this.boundingBox.expandByPoint(zi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $u);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const a=this.boundingSphere.center;if(zi.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Dl.setFromBufferAttribute(h),this.morphTargetsRelative?(Wn.addVectors(zi.min,Dl.min),zi.expandByPoint(Wn),Wn.addVectors(zi.max,Dl.max),zi.expandByPoint(Wn)):(zi.expandByPoint(Dl.min),zi.expandByPoint(Dl.max))}zi.getCenter(a);let o=0;for(let c=0,f=t.count;c<f;c++)Wn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Wn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Wn.fromBufferAttribute(h,p),m&&(so.fromBufferAttribute(t,p),Wn.add(so)),o=Math.max(o,a.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let X=0;X<a.count;X++)h[X]=new Z,m[X]=new Z;const p=new Z,g=new Z,_=new Z,v=new oe,x=new oe,y=new oe,A=new Z,S=new Z;function E(X,N,w){p.fromBufferAttribute(a,X),g.fromBufferAttribute(a,N),_.fromBufferAttribute(a,w),v.fromBufferAttribute(c,X),x.fromBufferAttribute(c,N),y.fromBufferAttribute(c,w),g.sub(p),_.sub(p),x.sub(v),y.sub(v);const V=1/(x.x*y.y-y.x*x.y);isFinite(V)&&(A.copy(g).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(V),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-y.x).multiplyScalar(V),h[X].add(A),h[N].add(A),h[w].add(A),m[X].add(S),m[N].add(S),m[w].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let X=0,N=U.length;X<N;++X){const w=U[X],V=w.start,st=w.count;for(let ut=V,vt=V+st;ut<vt;ut+=3)E(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const C=new Z,R=new Z,G=new Z,H=new Z;function F(X){G.fromBufferAttribute(o,X),H.copy(G);const N=h[X];C.copy(N),C.sub(G.multiplyScalar(G.dot(N))).normalize(),R.crossVectors(H,N);const V=R.dot(m[X])<0?-1:1;f.setXYZW(X,C.x,C.y,C.z,V)}for(let X=0,N=U.length;X<N;++X){const w=U[X],V=w.start,st=w.count;for(let ut=V,vt=V+st;ut<vt;ut+=3)F(t.getX(ut+0)),F(t.getX(ut+1)),F(t.getX(ut+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Gi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new Z,c=new Z,f=new Z,h=new Z,m=new Z,p=new Z,g=new Z,_=new Z;if(t)for(let v=0,x=t.count;v<x;v+=3){const y=t.getX(v+0),A=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,S),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,y),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,S),h.add(g),m.add(g),p.add(g),a.setXYZ(y,h.x,h.y,h.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Wn.fromBufferAttribute(t,n),Wn.normalize(),t.setXYZ(n,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(m.length*g);let x=0,y=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?x=m[A]*h.data.stride+h.offset:x=m[A]*g;for(let E=0;E<g;E++)v[y++]=p[x++]}return new Gi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wi,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=t(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=t(v,a);m.push(x)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cv=new un,nr=new mm,pu=new $u,Dv=new Z,mu=new Z,gu=new Z,_u=new Z,Dd=new Z,vu=new Z,Nv=new Z,xu=new Z;class ve extends ii{constructor(t=new wi,n=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){vu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Dd.fromBufferAttribute(_,t),f?vu.addScaledVector(Dd,g):vu.addScaledVector(Dd.sub(n),g))}n.add(vu)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),pu.copy(a.boundingSphere),pu.applyMatrix4(c),nr.copy(t.ray).recast(t.near),!(pu.containsPoint(nr.origin)===!1&&(nr.intersectSphere(pu,Dv)===null||nr.origin.distanceToSquared(Dv)>(t.far-t.near)**2))&&(Cv.copy(c).invert(),nr.copy(t.ray).applyMatrix4(Cv),!(a.boundingBox!==null&&nr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,nr)))}_computeIntersections(t,n,a){let o;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let y=0,A=v.length;y<A;y++){const S=v[y],E=f[S.materialIndex],U=Math.max(S.start,x.start),C=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let R=U,G=C;R<G;R+=3){const H=h.getX(R),F=h.getX(R+1),X=h.getX(R+2);o=Eu(this,E,t,a,p,g,_,H,F,X),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const y=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let S=y,E=A;S<E;S+=3){const U=h.getX(S),C=h.getX(S+1),R=h.getX(S+2);o=Eu(this,f,t,a,p,g,_,U,C,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let y=0,A=v.length;y<A;y++){const S=v[y],E=f[S.materialIndex],U=Math.max(S.start,x.start),C=Math.min(m.count,Math.min(S.start+S.count,x.start+x.count));for(let R=U,G=C;R<G;R+=3){const H=R,F=R+1,X=R+2;o=Eu(this,E,t,a,p,g,_,H,F,X),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const y=Math.max(0,x.start),A=Math.min(m.count,x.start+x.count);for(let S=y,E=A;S<E;S+=3){const U=S,C=S+1,R=S+2;o=Eu(this,f,t,a,p,g,_,U,C,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function ET(r,t,n,a,o,c,f,h){let m;if(t.side===Ei?m=a.intersectTriangle(f,c,o,!0,h):m=a.intersectTriangle(o,c,f,t.side===Is,h),m===null)return null;xu.copy(h),xu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(xu);return p<n.near||p>n.far?null:{distance:p,point:xu.clone(),object:r}}function Eu(r,t,n,a,o,c,f,h,m,p){r.getVertexPosition(h,mu),r.getVertexPosition(m,gu),r.getVertexPosition(p,_u);const g=ET(r,t,n,a,mu,gu,_u,Nv);if(g){const _=new Z;la.getBarycoord(Nv,mu,gu,_u,_),o&&(g.uv=la.getInterpolatedAttribute(o,h,m,p,_,new oe)),c&&(g.uv1=la.getInterpolatedAttribute(c,h,m,p,_,new oe)),f&&(g.normal=la.getInterpolatedAttribute(f,h,m,p,_,new Z),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new Z,materialIndex:0};la.getNormal(mu,gu,_u,v.normal),g.face=v,g.barycoord=_}return g}class vn extends wi{constructor(t=1,n=1,a=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let v=0,x=0;y("z","y","x",-1,-1,a,n,t,f,c,0),y("z","y","x",1,-1,a,n,-t,f,c,1),y("x","z","y",1,1,t,a,n,o,f,2),y("x","z","y",1,-1,t,a,-n,o,f,3),y("x","y","z",1,-1,t,n,a,o,c,4),y("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(_,2));function y(A,S,E,U,C,R,G,H,F,X,N){const w=R/F,V=G/X,st=R/2,ut=G/2,vt=H/2,ft=F+1,B=X+1;let j=0,K=0;const At=new Z;for(let z=0;z<B;z++){const it=z*V-ut;for(let Et=0;Et<ft;Et++){const Ut=Et*w-st;At[A]=Ut*U,At[S]=it*C,At[E]=vt,p.push(At.x,At.y,At.z),At[A]=0,At[S]=0,At[E]=H>0?1:-1,g.push(At.x,At.y,At.z),_.push(Et/F),_.push(1-z/X),j+=1}}for(let z=0;z<X;z++)for(let it=0;it<F;it++){const Et=v+it+ft*z,Ut=v+it+ft*(z+1),nt=v+(it+1)+ft*(z+1),pt=v+(it+1)+ft*z;m.push(Et,Ut,pt),m.push(Ut,nt,pt),K+=6}h.addGroup(x,K,N),x+=K,v+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bo(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function pi(r){const t={};for(let n=0;n<r.length;n++){const a=bo(r[n]);for(const o in a)t[o]=a[o]}return t}function ST(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function DE(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}const hr={clone:bo,merge:pi};var yT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yT,this.fragmentShader=MT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bo(t.uniforms),this.uniformsGroups=ST(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class NE extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=ts}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ds=new Z,Lv=new oe,Uv=new oe;class Hi extends NE{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Xl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z)}getViewSize(t,n){return this.getViewBounds(t,Lv,Uv),n.subVectors(Uv,Lv)}setViewOffset(t,n,a,o,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Il*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*a/p,o*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ro=-90,oo=1;class TT extends ii{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hi(ro,oo,t,n);o.layers=this.layers,this.add(o);const c=new Hi(ro,oo,t,n);c.layers=this.layers,this.add(c);const f=new Hi(ro,oo,t,n);f.layers=this.layers,this.add(f);const h=new Hi(ro,oo,t,n);h.layers=this.layers,this.add(h);const m=new Hi(ro,oo,t,n);m.layers=this.layers,this.add(m);const p=new Hi(ro,oo,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===ts)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ku)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,f),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=A,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(_,v,x),t.xr.enabled=y,a.texture.needsPMREMUpdate=!0}}class LE extends ui{constructor(t=[],n=yo,a,o,c,f,h,m,p,g){super(t,n,a,o,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class AT extends Ma{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new LE(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vn(5,5,5),c=new ni({name:"CubemapFromEquirect",uniforms:bo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Ei,blending:gi});c.uniforms.tEquirect.value=n;const f=new ve(o,c),h=n.minFilter;return n.minFilter===fr&&(n.minFilter=xa),new TT(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,o);t.setRenderTarget(c)}}class vi extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RT={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const A of t.hand.values()){const S=n.getJointPose(A,a),E=this._getHandJoint(p,A);S!==null&&(E.matrix.fromArray(S.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=S.radius),E.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,y=.005;p.inputState.pinching&&v>x+y?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=x-y&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(RT)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new vi;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class bT extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class wT extends ui{constructor(t=null,n=1,a=1,o,c,f,h,m,p=Si,g=Si,_,v){super(null,f,h,m,p,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new Z,CT=new Z,DT=new De;class or{constructor(t=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Ld.subVectors(a,n).cross(CT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Ld),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||DT.getNormalMatrix(t),o=this.coplanarPoint(Ld).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new $u,Su=new Z;class _m{constructor(t=new or,n=new or,a=new or,o=new or,c=new or,f=new or){this.planes=[t,n,a,o,c,f]}set(t,n,a,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ts){const a=this.planes,o=t.elements,c=o[0],f=o[1],h=o[2],m=o[3],p=o[4],g=o[5],_=o[6],v=o[7],x=o[8],y=o[9],A=o[10],S=o[11],E=o[12],U=o[13],C=o[14],R=o[15];if(a[0].setComponents(m-c,v-p,S-x,R-E).normalize(),a[1].setComponents(m+c,v+p,S+x,R+E).normalize(),a[2].setComponents(m+f,v+g,S+y,R+U).normalize(),a[3].setComponents(m-f,v-g,S-y,R-U).normalize(),a[4].setComponents(m-h,v-_,S-A,R-C).normalize(),n===ts)a[5].setComponents(m+h,v+_,S+A,R+C).normalize();else if(n===Ku)a[5].setComponents(h,_,A,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(t){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Su.x=o.normal.x>0?t.max.x:t.min.x,Su.y=o.normal.y>0?t.max.y:t.min.y,Su.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Su)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class NT extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pv=new un,qp=new mm,yu=new $u,Mu=new Z;class LT extends ii{constructor(t=new wi,n=new NT){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),yu.copy(a.boundingSphere),yu.applyMatrix4(o),yu.radius+=c,t.ray.intersectsSphere(yu)===!1)return;Pv.copy(o).invert(),qp.copy(t.ray).applyMatrix4(Pv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,_=a.attributes.position;if(p!==null){const v=Math.max(0,f.start),x=Math.min(p.count,f.start+f.count);for(let y=v,A=x;y<A;y++){const S=p.getX(y);Mu.fromBufferAttribute(_,S),Ov(Mu,S,m,o,t,n,this)}}else{const v=Math.max(0,f.start),x=Math.min(_.count,f.start+f.count);for(let y=v,A=x;y<A;y++)Mu.fromBufferAttribute(_,y),Ov(Mu,y,m,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Ov(r,t,n,a,o,c,f){const h=qp.distanceSqToPoint(r);if(h<n){const m=new Z;qp.closestPointToPoint(r,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class vm extends ui{constructor(t,n,a=mr,o,c,f,h=Si,m=Si,p,g=Yl,_=1){if(g!==Yl&&g!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,f,h,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class xm extends wi{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],f=[],h=[],m=[],p=new Z,g=new oe;f.push(0,0,0),h.push(0,0,1),m.push(.5,.5);for(let _=0,v=3;_<=n;_++,v+=3){const x=a+_/n*o;p.x=t*Math.cos(x),p.y=t*Math.sin(x),f.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(f[v]/t+1)/2,g.y=(f[v+1]/t+1)/2,m.push(g.x,g.y)}for(let _=1;_<=n;_++)c.push(_,_+1,0);this.setIndex(c),this.setAttribute("position",new Ln(f,3)),this.setAttribute("normal",new Ln(h,3)),this.setAttribute("uv",new Ln(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xm(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fn extends wi{constructor(t=1,n=1,a=1,o=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const g=[],_=[],v=[],x=[];let y=0;const A=[],S=a/2;let E=0;U(),f===!1&&(t>0&&C(!0),n>0&&C(!1)),this.setIndex(g),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(x,2));function U(){const R=new Z,G=new Z;let H=0;const F=(n-t)/a;for(let X=0;X<=c;X++){const N=[],w=X/c,V=w*(n-t)+t;for(let st=0;st<=o;st++){const ut=st/o,vt=ut*m+h,ft=Math.sin(vt),B=Math.cos(vt);G.x=V*ft,G.y=-w*a+S,G.z=V*B,_.push(G.x,G.y,G.z),R.set(ft,F,B).normalize(),v.push(R.x,R.y,R.z),x.push(ut,1-w),N.push(y++)}A.push(N)}for(let X=0;X<o;X++)for(let N=0;N<c;N++){const w=A[N][X],V=A[N+1][X],st=A[N+1][X+1],ut=A[N][X+1];(t>0||N!==0)&&(g.push(w,V,ut),H+=3),(n>0||N!==c-1)&&(g.push(V,st,ut),H+=3)}p.addGroup(E,H,0),E+=H}function C(R){const G=y,H=new oe,F=new Z;let X=0;const N=R===!0?t:n,w=R===!0?1:-1;for(let st=1;st<=o;st++)_.push(0,S*w,0),v.push(0,w,0),x.push(.5,.5),y++;const V=y;for(let st=0;st<=o;st++){const vt=st/o*m+h,ft=Math.cos(vt),B=Math.sin(vt);F.x=N*B,F.y=S*w,F.z=N*ft,_.push(F.x,F.y,F.z),v.push(0,w,0),H.x=ft*.5+.5,H.y=B*.5*w+.5,x.push(H.x,H.y),y++}for(let st=0;st<o;st++){const ut=G+st,vt=V+st;R===!0?g.push(vt,vt+1,ut):g.push(vt+1,vt,ut),X+=3}p.addGroup(E,X,R===!0?1:2),E+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tf extends Fn{constructor(t=1,n=1,a=32,o=1,c=!1,f=0,h=Math.PI*2){super(0,t,n,a,o,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new tf(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Aa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let f;n?f=n:f=t*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=a[o]-f,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,a[o]===f)return o/(c-1);const g=a[o],v=a[o+1]-g,x=(f-g)/v;return(o+x)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const f=this.getPoint(o),h=this.getPoint(c),m=n||(f.isVector2?new oe:new Z);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new Z,o=[],c=[],f=[],h=new Z,m=new un;for(let x=0;x<=t;x++){const y=x/t;o[x]=this.getTangentAt(y,new Z)}c[0]=new Z,f[0]=new Z;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=p&&(p=g,a.set(1,0,0)),_<=p&&(p=_,a.set(0,1,0)),v<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),f[0].crossVectors(o[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),f[x]=f[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const y=Math.acos(Be(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,y))}f[x].crossVectors(o[x],c[x])}if(n===!0){let x=Math.acos(Be(c[0].dot(c[t]),-1,1));x/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let y=1;y<=t;y++)c[y].applyMatrix4(m.makeRotationAxis(o[y],x*y)),f[y].crossVectors(o[y],c[y])}return{tangents:o,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Em extends Aa{constructor(t=0,n=0,a=1,o=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new oe){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(f?c=0:c=o),this.aClockwise===!0&&!f&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=m-this.aX,x=p-this.aY;m=v*g-x*_+this.aX,p=v*_+x*g+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class UT extends Em{constructor(t,n,a,o,c,f){super(t,n,a,a,o,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Sm(){let r=0,t=0,n=0,a=0;function o(c,f,h,m){r=c,t=h,n=-3*c+3*f-2*h-m,a=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){o(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,g,_){let v=(f-c)/p-(h-c)/(p+g)+(h-f)/g,x=(h-f)/g-(m-f)/(g+_)+(m-h)/_;v*=g,x*=g,o(f,h,v,x)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+a*h}}}const Tu=new Z,Ud=new Sm,Pd=new Sm,Od=new Sm;class PT extends Aa{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new Z){const a=n,o=this.points,c=o.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(Tu.subVectors(o[0],o[1]).add(o[0]),p=Tu);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(Tu.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Tu),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let y=Math.pow(p.distanceToSquared(_),x),A=Math.pow(_.distanceToSquared(v),x),S=Math.pow(v.distanceToSquared(g),x);A<1e-4&&(A=1),y<1e-4&&(y=A),S<1e-4&&(S=A),Ud.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,y,A,S),Pd.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,y,A,S),Od.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,y,A,S)}else this.curveType==="catmullrom"&&(Ud.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),Pd.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),Od.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return a.set(Ud.calc(m),Pd.calc(m),Od.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Z().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Iv(r,t,n,a,o){const c=(a-t)*.5,f=(o-n)*.5,h=r*r,m=r*h;return(2*n-2*a+c+f)*m+(-3*n+3*a-2*c-f)*h+c*r+n}function OT(r,t){const n=1-r;return n*n*t}function IT(r,t){return 2*(1-r)*r*t}function zT(r,t){return r*r*t}function Bl(r,t,n,a){return OT(r,t)+IT(r,n)+zT(r,a)}function BT(r,t){const n=1-r;return n*n*n*t}function FT(r,t){const n=1-r;return 3*n*n*r*t}function HT(r,t){return 3*(1-r)*r*r*t}function GT(r,t){return r*r*r*t}function Fl(r,t,n,a,o){return BT(r,t)+FT(r,n)+HT(r,a)+GT(r,o)}class UE extends Aa{constructor(t=new oe,n=new oe,a=new oe,o=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new oe){const a=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Fl(t,o.x,c.x,f.x,h.x),Fl(t,o.y,c.y,f.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class VT extends Aa{constructor(t=new Z,n=new Z,a=new Z,o=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Z){const a=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Fl(t,o.x,c.x,f.x,h.x),Fl(t,o.y,c.y,f.y,h.y),Fl(t,o.z,c.z,f.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class PE extends Aa{constructor(t=new oe,n=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new oe){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new oe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kT extends Aa{constructor(t=new Z,n=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new Z){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class OE extends Aa{constructor(t=new oe,n=new oe,a=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new oe){const a=n,o=this.v0,c=this.v1,f=this.v2;return a.set(Bl(t,o.x,c.x,f.x),Bl(t,o.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class YT extends Aa{constructor(t=new Z,n=new Z,a=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Z){const a=n,o=this.v0,c=this.v1,f=this.v2;return a.set(Bl(t,o.x,c.x,f.x),Bl(t,o.y,c.y,f.y),Bl(t,o.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class IE extends Aa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new oe){const a=n,o=this.points,c=(o.length-1)*t,f=Math.floor(c),h=c-f,m=o[f===0?f:f-1],p=o[f],g=o[f>o.length-2?o.length-1:f+1],_=o[f>o.length-3?o.length-1:f+2];return a.set(Iv(h,m.x,p.x,g.x,_.x),Iv(h,m.y,p.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new oe().fromArray(o))}return this}}var zv=Object.freeze({__proto__:null,ArcCurve:UT,CatmullRomCurve3:PT,CubicBezierCurve:UE,CubicBezierCurve3:VT,EllipseCurve:Em,LineCurve:PE,LineCurve3:kT,QuadraticBezierCurve:OE,QuadraticBezierCurve3:YT,SplineCurve:IE});class XT extends Aa{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zv[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const f=o[c]-a,h=this.curves[c],m=h.getLength(),p=m===0?0:1-f/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const f=c[o],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(h);for(let p=0;p<m.length;p++){const g=m[p];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new zv[o.type]().fromJSON(o))}return this}}class Bv extends XT{constructor(t){super(),this.type="Path",this.currentPoint=new oe,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new PE(this.currentPoint.clone(),new oe(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new OE(this.currentPoint.clone(),new oe(t,n),new oe(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,f){const h=new UE(this.currentPoint.clone(),new oe(t,n),new oe(a,o),new oe(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new IE(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,a,o,c,f),this}absarc(t,n,a,o,c,f){return this.absellipse(t,n,a,a,o,c,f),this}ellipse(t,n,a,o,c,f,h,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,a,o,c,f,h,m),this}absellipse(t,n,a,o,c,f,h,m){const p=new Em(t,n,a,o,c,f,h,m);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zE extends Bv{constructor(t){super(t),this.uuid=_r(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new Bv().fromJSON(o))}return this}}function WT(r,t,n=2){const a=t&&t.length,o=a?t[0]*n:r.length;let c=BE(r,0,o,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,m,p;if(a&&(c=QT(r,t,c,n)),r.length>80*n){h=1/0,m=1/0;let g=-1/0,_=-1/0;for(let v=n;v<o;v+=n){const x=r[v],y=r[v+1];x<h&&(h=x),y<m&&(m=y),x>g&&(g=x),y>_&&(_=y)}p=Math.max(g-h,_-m),p=p!==0?32767/p:0}return ql(c,f,n,h,m,p,0),f}function BE(r,t,n,a,o){let c;if(o===lA(r,t,n,a)>0)for(let f=t;f<n;f+=a)c=Fv(f/a|0,r[f],r[f+1],c);else for(let f=n-a;f>=t;f-=a)c=Fv(f/a|0,r[f],r[f+1],c);return c&&wo(c,c.next)&&(jl(c),c=c.next),c}function gr(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(wo(n,n.next)||Tn(n.prev,n,n.next)===0)){if(jl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function ql(r,t,n,a,o,c,f){if(!r)return;!f&&c&&nA(r,a,o,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?ZT(r,a,o,c):qT(r)){t.push(m.i,r.i,p.i),jl(r),r=p.next,h=p.next;continue}if(r=p,r===h){f?f===1?(r=jT(gr(r),t),ql(r,t,n,a,o,c,2)):f===2&&KT(r,t,n,a,o,c):ql(gr(r),t,n,a,o,c,1);break}}}function qT(r){const t=r.prev,n=r,a=r.next;if(Tn(t,n,a)>=0)return!1;const o=t.x,c=n.x,f=a.x,h=t.y,m=n.y,p=a.y,g=Math.min(o,c,f),_=Math.min(h,m,p),v=Math.max(o,c,f),x=Math.max(h,m,p);let y=a.next;for(;y!==t;){if(y.x>=g&&y.x<=v&&y.y>=_&&y.y<=x&&Pl(o,h,c,m,f,p,y.x,y.y)&&Tn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function ZT(r,t,n,a){const o=r.prev,c=r,f=r.next;if(Tn(o,c,f)>=0)return!1;const h=o.x,m=c.x,p=f.x,g=o.y,_=c.y,v=f.y,x=Math.min(h,m,p),y=Math.min(g,_,v),A=Math.max(h,m,p),S=Math.max(g,_,v),E=Zp(x,y,t,n,a),U=Zp(A,S,t,n,a);let C=r.prevZ,R=r.nextZ;for(;C&&C.z>=E&&R&&R.z<=U;){if(C.x>=x&&C.x<=A&&C.y>=y&&C.y<=S&&C!==o&&C!==f&&Pl(h,g,m,_,p,v,C.x,C.y)&&Tn(C.prev,C,C.next)>=0||(C=C.prevZ,R.x>=x&&R.x<=A&&R.y>=y&&R.y<=S&&R!==o&&R!==f&&Pl(h,g,m,_,p,v,R.x,R.y)&&Tn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;C&&C.z>=E;){if(C.x>=x&&C.x<=A&&C.y>=y&&C.y<=S&&C!==o&&C!==f&&Pl(h,g,m,_,p,v,C.x,C.y)&&Tn(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;R&&R.z<=U;){if(R.x>=x&&R.x<=A&&R.y>=y&&R.y<=S&&R!==o&&R!==f&&Pl(h,g,m,_,p,v,R.x,R.y)&&Tn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function jT(r,t){let n=r;do{const a=n.prev,o=n.next.next;!wo(a,o)&&HE(a,n,n.next,o)&&Zl(a,o)&&Zl(o,a)&&(t.push(a.i,n.i,o.i),jl(n),jl(n.next),n=r=o),n=n.next}while(n!==r);return gr(n)}function KT(r,t,n,a,o,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&sA(f,h)){let m=GE(f,h);f=gr(f,f.next),m=gr(m,m.next),ql(f,t,n,a,o,c,0),ql(m,t,n,a,o,c,0);return}h=h.next}f=f.next}while(f!==r)}function QT(r,t,n,a){const o=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*a,m=c<f-1?t[c+1]*a:r.length,p=BE(r,h,m,a,!1);p===p.next&&(p.steiner=!0),o.push(aA(p))}o.sort(JT);for(let c=0;c<o.length;c++)n=$T(o[c],n);return n}function JT(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function $T(r,t){const n=tA(r,t);if(!n)return t;const a=GE(n,r);return gr(a,a.next),gr(n,n.next)}function tA(r,t){let n=t;const a=r.x,o=r.y;let c=-1/0,f;if(wo(r,n))return n;do{if(wo(r,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const _=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>c&&(c=_,f=n.x<n.next.x?n:n.next,_===a))return f}n=n.next}while(n!==t);if(!f)return null;const h=f,m=f.x,p=f.y;let g=1/0;n=f;do{if(a>=n.x&&n.x>=m&&a!==n.x&&FE(o<p?a:c,o,m,p,o<p?c:a,o,n.x,n.y)){const _=Math.abs(o-n.y)/(a-n.x);Zl(n,r)&&(_<g||_===g&&(n.x>f.x||n.x===f.x&&eA(f,n)))&&(f=n,g=_)}n=n.next}while(n!==h);return f}function eA(r,t){return Tn(r.prev,r,t.prev)<0&&Tn(t.next,r,r.next)<0}function nA(r,t,n,a){let o=r;do o.z===0&&(o.z=Zp(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,iA(o)}function iA(r){let t,n=1;do{let a=r,o;r=null;let c=null;for(t=0;a;){t++;let f=a,h=0;for(let p=0;p<n&&(h++,f=f.nextZ,!!f);p++);let m=n;for(;h>0||m>0&&f;)h!==0&&(m===0||!f||a.z<=f.z)?(o=a,a=a.nextZ,h--):(o=f,f=f.nextZ,m--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;a=f}c.nextZ=null,n*=2}while(t>1);return r}function Zp(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function aA(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function FE(r,t,n,a,o,c,f,h){return(o-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(a-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(o-f)*(a-h)}function Pl(r,t,n,a,o,c,f,h){return!(r===f&&t===h)&&FE(r,t,n,a,o,c,f,h)}function sA(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!rA(r,t)&&(Zl(r,t)&&Zl(t,r)&&oA(r,t)&&(Tn(r.prev,r,t.prev)||Tn(r,t.prev,t))||wo(r,t)&&Tn(r.prev,r,r.next)>0&&Tn(t.prev,t,t.next)>0)}function Tn(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function wo(r,t){return r.x===t.x&&r.y===t.y}function HE(r,t,n,a){const o=Ru(Tn(r,t,n)),c=Ru(Tn(r,t,a)),f=Ru(Tn(n,a,r)),h=Ru(Tn(n,a,t));return!!(o!==c&&f!==h||o===0&&Au(r,n,t)||c===0&&Au(r,a,t)||f===0&&Au(n,r,a)||h===0&&Au(n,t,a))}function Au(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Ru(r){return r>0?1:r<0?-1:0}function rA(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&HE(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function Zl(r,t){return Tn(r.prev,r,r.next)<0?Tn(r,t,r.next)>=0&&Tn(r,r.prev,t)>=0:Tn(r,t,r.prev)<0||Tn(r,r.next,t)<0}function oA(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function GE(r,t){const n=jp(r.i,r.x,r.y),a=jp(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function Fv(r,t,n,a){const o=jp(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function jl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function jp(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lA(r,t,n,a){let o=0;for(let c=t,f=n-a;c<n;c+=a)o+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return o}class cA{static triangulate(t,n,a=2){return WT(t,n,a)}}class Hl{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return Hl.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];Hv(t),Gv(a,t);let f=t.length;n.forEach(Hv);for(let m=0;m<n.length;m++)o.push(f),f+=n[m].length,Gv(a,n[m]);const h=cA.triangulate(a,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function Hv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Gv(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class va extends wi{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,f=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,g=m+1,_=t/h,v=n/m,x=[],y=[],A=[],S=[];for(let E=0;E<g;E++){const U=E*v-f;for(let C=0;C<p;C++){const R=C*_-c;y.push(R,-U,0),A.push(0,0,1),S.push(C/h),S.push(1-E/m)}}for(let E=0;E<m;E++)for(let U=0;U<h;U++){const C=U+p*E,R=U+p*(E+1),G=U+1+p*(E+1),H=U+1+p*E;x.push(C,R,H),x.push(R,G,H)}this.setIndex(x),this.setAttribute("position",new Ln(y,3)),this.setAttribute("normal",new Ln(A,3)),this.setAttribute("uv",new Ln(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.width,t.height,t.widthSegments,t.heightSegments)}}class ym extends wi{constructor(t=new zE([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const a=[],o=[],c=[],f=[];let h=0,m=0;if(Array.isArray(t)===!1)p(t);else for(let g=0;g<t.length;g++)p(t[g]),this.addGroup(h,m,g),h+=m,m=0;this.setIndex(a),this.setAttribute("position",new Ln(o,3)),this.setAttribute("normal",new Ln(c,3)),this.setAttribute("uv",new Ln(f,2));function p(g){const _=o.length/3,v=g.extractPoints(n);let x=v.shape;const y=v.holes;Hl.isClockWise(x)===!1&&(x=x.reverse());for(let S=0,E=y.length;S<E;S++){const U=y[S];Hl.isClockWise(U)===!0&&(y[S]=U.reverse())}const A=Hl.triangulateShape(x,y);for(let S=0,E=y.length;S<E;S++){const U=y[S];x=x.concat(U)}for(let S=0,E=x.length;S<E;S++){const U=x[S];o.push(U.x,U.y,0),c.push(0,0,1),f.push(U.x,U.y)}for(let S=0,E=A.length;S<E;S++){const U=A[S],C=U[0]+_,R=U[1]+_,G=U[2]+_;a.push(C,R,G),m+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return uA(n,t)}static fromJSON(t,n){const a=[];for(let o=0,c=t.shapes.length;o<c;o++){const f=n[t.shapes[o]];a.push(f)}return new ym(a,t.curveSegments)}}function uA(r,t){if(t.shapes=[],Array.isArray(r))for(let n=0,a=r.length;n<a;n++){const o=r[n];t.shapes.push(o.uuid)}else t.shapes.push(r.uuid);return t}class Sa extends wi{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(f+h,Math.PI);let p=0;const g=[],_=new Z,v=new Z,x=[],y=[],A=[],S=[];for(let E=0;E<=a;E++){const U=[],C=E/a;let R=0;E===0&&f===0?R=.5/n:E===a&&m===Math.PI&&(R=-.5/n);for(let G=0;G<=n;G++){const H=G/n;_.x=-t*Math.cos(o+H*c)*Math.sin(f+C*h),_.y=t*Math.cos(f+C*h),_.z=t*Math.sin(o+H*c)*Math.sin(f+C*h),y.push(_.x,_.y,_.z),v.copy(_).normalize(),A.push(v.x,v.y,v.z),S.push(H+R,1-C),U.push(p++)}g.push(U)}for(let E=0;E<a;E++)for(let U=0;U<n;U++){const C=g[E][U+1],R=g[E][U],G=g[E+1][U],H=g[E+1][U+1];(E!==0||f>0)&&x.push(C,R,H),(E!==a-1||m<Math.PI)&&x.push(R,G,H)}this.setIndex(x),this.setAttribute("position",new Ln(y,3)),this.setAttribute("normal",new Ln(A,3)),this.setAttribute("uv",new Ln(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fA extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dn extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hm,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hA extends qn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hm,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class dA extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pA extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vv={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class mA{constructor(t,n,a){const o=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,o.onProgress!==void 0&&o.onProgress(g,f,h),f===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const x=p[_],y=p[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return y}return null}}}const gA=new mA;class Mm{constructor(t){this.manager=t!==void 0?t:gA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,c){a.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Mm.DEFAULT_MATERIAL_NAME="__DEFAULT";class _A extends Mm{constructor(t){super(t)}load(t,n,a,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=Vv.get(t);if(f!==void 0)return c.manager.itemStart(t),setTimeout(function(){n&&n(f),c.manager.itemEnd(t)},0),f;const h=Wl("img");function m(){g(),Vv.add(t,this),n&&n(this),c.manager.itemEnd(t)}function p(_){g(),o&&o(_),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(t),h.src=t,h}}class vA extends Mm{constructor(t){super(t)}load(t,n,a,o){const c=new ui,f=new _A(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Tm extends ii{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Id=new un,kv=new Z,Yv=new Z;class VE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=ya,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _m,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;kv.setFromMatrixPosition(t.matrixWorld),n.position.copy(kv),Yv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Yv),n.updateMatrixWorld(),Id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Id),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Id)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xv=new un,Nl=new Z,zd=new Z;class xA extends VE{constructor(){super(new Hi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new cn(2,1,1,1),new cn(0,1,1,1),new cn(3,1,1,1),new cn(1,1,1,1),new cn(3,0,1,1),new cn(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),Nl.setFromMatrixPosition(t.matrixWorld),a.position.copy(Nl),zd.copy(a.position),zd.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(zd),a.updateMatrixWorld(),o.makeTranslation(-Nl.x,-Nl.y,-Nl.z),Xv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xv)}}class Kp extends Tm{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new xA}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Am extends NE{constructor(t=-1,n=1,a=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class EA extends VE{constructor(){super(new Am(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SA extends Tm{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ii.DEFAULT_UP),this.updateMatrix(),this.target=new ii,this.shadow=new EA}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yA extends Tm{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class MA extends Hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class TA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Wv();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Wv(){return performance.now()}const qv=new un;class AA{constructor(t,n,a=0,o=1/0){this.ray=new mm(t,n),this.near=a,this.far=o,this.camera=null,this.layers=new gm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return qv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qv),this}intersectObject(t,n=!0,a=[]){return Qp(t,this,a,n),a.sort(Zv),a}intersectObjects(t,n=!0,a=[]){for(let o=0,c=t.length;o<c;o++)Qp(t[o],this,a,n);return a.sort(Zv),a}}function Zv(r,t){return r.distance-t.distance}function Qp(r,t,n,a){let o=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)Qp(c[f],t,n,!0)}}function jv(r,t,n,a){const o=RA(a);switch(n){case xE:return r*t;case lm:return r*t/o.components*o.byteLength;case cm:return r*t/o.components*o.byteLength;case SE:return r*t*2/o.components*o.byteLength;case um:return r*t*2/o.components*o.byteLength;case EE:return r*t*3/o.components*o.byteLength;case ca:return r*t*4/o.components*o.byteLength;case fm:return r*t*4/o.components*o.byteLength;case Fu:case Hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Gu:case Vu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yp:case Tp:return Math.max(r,16)*Math.max(t,8)/4;case Sp:case Mp:return Math.max(r,8)*Math.max(t,8)/2;case Ap:case Rp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Np:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Lp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Up:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Pp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Op:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ip:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case zp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Bp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Gp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ku:case Vp:case kp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case yE:case Yp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Xp:case Wp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RA(r){switch(r){case ya:case gE:return{byteLength:1,components:1};case kl:case _E:case zs:return{byteLength:2,components:1};case rm:case om:return{byteLength:2,components:4};case mr:case sm:case Ea:return{byteLength:4,components:1};case vE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:am}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=am);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kE(){let r=null,t=!1,n=null,a=null;function o(c,f){n(c,f),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function bA(r){const t=new WeakMap;function n(h,m){const p=h.array,g=h.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((x,y)=>x.start-y.start);let v=0;for(let x=1;x<_.length;x++){const y=_[v],A=_[x];A.start<=y.start+y.count+1?y.count=Math.max(y.count,A.start+A.count-y.start):(++v,_[v]=A)}_.length=v+1;for(let x=0,y=_.length;x<y;x++){const A=_[x];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:f}}var wA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CA=`#ifdef USE_ALPHAHASH
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
#endif`,DA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PA=`#ifdef USE_AOMAP
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
#endif`,OA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IA=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GA=`#ifdef USE_IRIDESCENCE
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
#endif`,VA=`#ifdef USE_BUMPMAP
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
#endif`,kA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QA=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,JA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$A=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",s1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m1=`#ifdef USE_GRADIENTMAP
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
}`,g1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x1=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,E1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,R1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b1=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z1=`#if defined( USE_POINTS_UV )
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
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
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
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K1=`#ifdef USE_NORMALMAP
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
#endif`,Q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,hR=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,dR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pR=`#ifdef USE_SKINNING
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
#endif`,mR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gR=`#ifdef USE_SKINNING
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
#endif`,_R=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ER=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SR=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yR=`#ifdef USE_TRANSMISSION
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
#endif`,MR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wR=`uniform sampler2D t2D;
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
}`,CR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UR=`#include <common>
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
}`,PR=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OR=`#define DISTANCE
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
}`,IR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FR=`uniform float scale;
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
}`,HR=`uniform vec3 diffuse;
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
}`,GR=`#include <common>
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
}`,VR=`uniform vec3 diffuse;
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
}`,kR=`#define LAMBERT
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
}`,YR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,XR=`#define MATCAP
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
}`,WR=`#define MATCAP
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
}`,qR=`#define NORMAL
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
}`,ZR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jR=`#define PHONG
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
}`,KR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,QR=`#define STANDARD
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
}`,JR=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,$R=`#define TOON
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
}`,tb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,eb=`uniform float size;
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#include <common>
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
}`,ab=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sb=`uniform float rotation;
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
}`,rb=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:wA,alphahash_pars_fragment:CA,alphamap_fragment:DA,alphamap_pars_fragment:NA,alphatest_fragment:LA,alphatest_pars_fragment:UA,aomap_fragment:PA,aomap_pars_fragment:OA,batching_pars_vertex:IA,batching_vertex:zA,begin_vertex:BA,beginnormal_vertex:FA,bsdfs:HA,iridescence_fragment:GA,bumpmap_pars_fragment:VA,clipping_planes_fragment:kA,clipping_planes_pars_fragment:YA,clipping_planes_pars_vertex:XA,clipping_planes_vertex:WA,color_fragment:qA,color_pars_fragment:ZA,color_pars_vertex:jA,color_vertex:KA,common:QA,cube_uv_reflection_fragment:JA,defaultnormal_vertex:$A,displacementmap_pars_vertex:t1,displacementmap_vertex:e1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:a1,colorspace_pars_fragment:s1,envmap_fragment:r1,envmap_common_pars_fragment:o1,envmap_pars_fragment:l1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:E1,envmap_vertex:u1,fog_vertex:f1,fog_pars_vertex:h1,fog_fragment:d1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_pars_fragment:g1,lights_lambert_fragment:_1,lights_lambert_pars_fragment:v1,lights_pars_begin:x1,lights_toon_fragment:S1,lights_toon_pars_fragment:y1,lights_phong_fragment:M1,lights_phong_pars_fragment:T1,lights_physical_fragment:A1,lights_physical_pars_fragment:R1,lights_fragment_begin:b1,lights_fragment_maps:w1,lights_fragment_end:C1,logdepthbuf_fragment:D1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:L1,logdepthbuf_vertex:U1,map_fragment:P1,map_pars_fragment:O1,map_particle_fragment:I1,map_particle_pars_fragment:z1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:F1,morphinstance_vertex:H1,morphcolor_vertex:G1,morphnormal_vertex:V1,morphtarget_pars_vertex:k1,morphtarget_vertex:Y1,normal_fragment_begin:X1,normal_fragment_maps:W1,normal_pars_fragment:q1,normal_pars_vertex:Z1,normal_vertex:j1,normalmap_pars_fragment:K1,clearcoat_normal_fragment_begin:Q1,clearcoat_normal_fragment_maps:J1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:tR,opaque_fragment:eR,packing:nR,premultiplied_alpha_fragment:iR,project_vertex:aR,dithering_fragment:sR,dithering_pars_fragment:rR,roughnessmap_fragment:oR,roughnessmap_pars_fragment:lR,shadowmap_pars_fragment:cR,shadowmap_pars_vertex:uR,shadowmap_vertex:fR,shadowmask_pars_fragment:hR,skinbase_vertex:dR,skinning_pars_vertex:pR,skinning_vertex:mR,skinnormal_vertex:gR,specularmap_fragment:_R,specularmap_pars_fragment:vR,tonemapping_fragment:xR,tonemapping_pars_fragment:ER,transmission_fragment:SR,transmission_pars_fragment:yR,uv_pars_fragment:MR,uv_pars_vertex:TR,uv_vertex:AR,worldpos_vertex:RR,background_vert:bR,background_frag:wR,backgroundCube_vert:CR,backgroundCube_frag:DR,cube_vert:NR,cube_frag:LR,depth_vert:UR,depth_frag:PR,distanceRGBA_vert:OR,distanceRGBA_frag:IR,equirect_vert:zR,equirect_frag:BR,linedashed_vert:FR,linedashed_frag:HR,meshbasic_vert:GR,meshbasic_frag:VR,meshlambert_vert:kR,meshlambert_frag:YR,meshmatcap_vert:XR,meshmatcap_frag:WR,meshnormal_vert:qR,meshnormal_frag:ZR,meshphong_vert:jR,meshphong_frag:KR,meshphysical_vert:QR,meshphysical_frag:JR,meshtoon_vert:$R,meshtoon_frag:tb,points_vert:eb,points_frag:nb,shadow_vert:ib,shadow_frag:ab,sprite_vert:sb,sprite_frag:rb},te={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ga={basic:{uniforms:pi([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:pi([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:pi([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:pi([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:pi([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:pi([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:pi([te.points,te.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:pi([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:pi([te.common,te.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:pi([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:pi([te.sprite,te.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:pi([te.common,te.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:pi([te.lights,te.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};ga.physical={uniforms:pi([ga.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const bu={r:0,b:0,g:0},ar=new Ta,ob=new un;function lb(r,t,n,a,o,c,f){const h=new Me(0);let m=c===!0?0:1,p,g,_=null,v=0,x=null;function y(C){let R=C.isScene===!0?C.background:null;return R&&R.isTexture&&(R=(C.backgroundBlurriness>0?n:t).get(R)),R}function A(C){let R=!1;const G=y(C);G===null?E(h,m):G&&G.isColor&&(E(G,1),R=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?a.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(C,R){const G=y(R);G&&(G.isCubeTexture||G.mapping===Ju)?(g===void 0&&(g=new ve(new vn(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:bo(ga.backgroundCube.uniforms),vertexShader:ga.backgroundCube.vertexShader,fragmentShader:ga.backgroundCube.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),ar.copy(R.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ob.makeRotationFromEuler(ar)),g.material.toneMapped=We.getTransfer(G.colorSpace)!==sn,(_!==G||v!==G.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,_=G,v=G.version,x=r.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new ve(new va(2,2),new ni({name:"BackgroundMaterial",uniforms:bo(ga.background.uniforms),vertexShader:ga.background.vertexShader,fragmentShader:ga.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=We.getTransfer(G.colorSpace)!==sn,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||v!==G.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=G,v=G.version,x=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function E(C,R){C.getRGB(bu,DE(r)),a.buffers.color.setClear(bu.r,bu.g,bu.b,R,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,R=1){h.set(C),m=R,E(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,E(h,m)},render:A,addToRenderList:S,dispose:U}}function cb(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,f=!1;function h(w,V,st,ut,vt){let ft=!1;const B=_(ut,st,V);c!==B&&(c=B,p(c.object)),ft=x(w,ut,st,vt),ft&&y(w,ut,st,vt),vt!==null&&t.update(vt,r.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,R(w,V,st,ut),vt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,V,st){const ut=st.wireframe===!0;let vt=a[w.id];vt===void 0&&(vt={},a[w.id]=vt);let ft=vt[V.id];ft===void 0&&(ft={},vt[V.id]=ft);let B=ft[ut];return B===void 0&&(B=v(m()),ft[ut]=B),B}function v(w){const V=[],st=[],ut=[];for(let vt=0;vt<n;vt++)V[vt]=0,st[vt]=0,ut[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:st,attributeDivisors:ut,object:w,attributes:{},index:null}}function x(w,V,st,ut){const vt=c.attributes,ft=V.attributes;let B=0;const j=st.getAttributes();for(const K in j)if(j[K].location>=0){const z=vt[K];let it=ft[K];if(it===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(it=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(it=w.instanceColor)),z===void 0||z.attribute!==it||it&&z.data!==it.data)return!0;B++}return c.attributesNum!==B||c.index!==ut}function y(w,V,st,ut){const vt={},ft=V.attributes;let B=0;const j=st.getAttributes();for(const K in j)if(j[K].location>=0){let z=ft[K];z===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(z=w.instanceColor));const it={};it.attribute=z,z&&z.data&&(it.data=z.data),vt[K]=it,B++}c.attributes=vt,c.attributesNum=B,c.index=ut}function A(){const w=c.newAttributes;for(let V=0,st=w.length;V<st;V++)w[V]=0}function S(w){E(w,0)}function E(w,V){const st=c.newAttributes,ut=c.enabledAttributes,vt=c.attributeDivisors;st[w]=1,ut[w]===0&&(r.enableVertexAttribArray(w),ut[w]=1),vt[w]!==V&&(r.vertexAttribDivisor(w,V),vt[w]=V)}function U(){const w=c.newAttributes,V=c.enabledAttributes;for(let st=0,ut=V.length;st<ut;st++)V[st]!==w[st]&&(r.disableVertexAttribArray(st),V[st]=0)}function C(w,V,st,ut,vt,ft,B){B===!0?r.vertexAttribIPointer(w,V,st,vt,ft):r.vertexAttribPointer(w,V,st,ut,vt,ft)}function R(w,V,st,ut){A();const vt=ut.attributes,ft=st.getAttributes(),B=V.defaultAttributeValues;for(const j in ft){const K=ft[j];if(K.location>=0){let At=vt[j];if(At===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(At=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(At=w.instanceColor)),At!==void 0){const z=At.normalized,it=At.itemSize,Et=t.get(At);if(Et===void 0)continue;const Ut=Et.buffer,nt=Et.type,pt=Et.bytesPerElement,Pt=nt===r.INT||nt===r.UNSIGNED_INT||At.gpuType===sm;if(At.isInterleavedBufferAttribute){const Ft=At.data,Ht=Ft.stride,me=At.offset;if(Ft.isInstancedInterleavedBuffer){for(let ae=0;ae<K.locationSize;ae++)E(K.location+ae,Ft.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let ae=0;ae<K.locationSize;ae++)S(K.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let ae=0;ae<K.locationSize;ae++)C(K.location+ae,it/K.locationSize,nt,z,Ht*pt,(me+it/K.locationSize*ae)*pt,Pt)}else{if(At.isInstancedBufferAttribute){for(let Ft=0;Ft<K.locationSize;Ft++)E(K.location+Ft,At.meshPerAttribute);w.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Ft=0;Ft<K.locationSize;Ft++)S(K.location+Ft);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let Ft=0;Ft<K.locationSize;Ft++)C(K.location+Ft,it/K.locationSize,nt,z,it*pt,it/K.locationSize*Ft*pt,Pt)}}else if(B!==void 0){const z=B[j];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(K.location,z);break;case 3:r.vertexAttrib3fv(K.location,z);break;case 4:r.vertexAttrib4fv(K.location,z);break;default:r.vertexAttrib1fv(K.location,z)}}}}U()}function G(){X();for(const w in a){const V=a[w];for(const st in V){const ut=V[st];for(const vt in ut)g(ut[vt].object),delete ut[vt];delete V[st]}delete a[w]}}function H(w){if(a[w.id]===void 0)return;const V=a[w.id];for(const st in V){const ut=V[st];for(const vt in ut)g(ut[vt].object),delete ut[vt];delete V[st]}delete a[w.id]}function F(w){for(const V in a){const st=a[V];if(st[w.id]===void 0)continue;const ut=st[w.id];for(const vt in ut)g(ut[vt].object),delete ut[vt];delete st[w.id]}}function X(){N(),f=!0,c!==o&&(c=o,p(c.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:N,dispose:G,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:U}}function ub(r,t,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let x=0;for(let y=0;y<_;y++)x+=g[y];n.update(x,a,1)}function m(p,g,_,v){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<p.length;y++)f(p[y],g[y],v[y]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let y=0;for(let A=0;A<_;A++)y+=g[A]*v[A];n.update(y,a,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function fb(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(F){return!(F!==ca&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const X=F===zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ya&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ea&&!X)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),E=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=y>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:S,maxAttributes:E,maxVertexUniforms:U,maxVaryings:C,maxFragmentUniforms:R,vertexTextures:G,maxSamples:H}}function hb(r){const t=this;let n=null,a=0,o=!1,c=!1;const f=new or,h=new De,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const y=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,E=r.get(_);if(!o||y===null||y.length===0||c&&!S)c?g(null):p();else{const U=c?0:a,C=U*4;let R=E.clippingState||null;m.value=R,R=g(y,v,C,x);for(let G=0;G!==C;++G)R[G]=n[G];E.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,x,y){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=m.value,y!==!0||S===null){const E=x+A*4,U=v.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<E)&&(S=new Float32Array(E));for(let C=0,R=x;C!==A;++C,R+=4)f.copy(_[C]).applyMatrix4(U,h),f.normal.toArray(S,R),S[R+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function db(r){let t=new WeakMap;function n(f,h){return h===vp?f.mapping=yo:h===xp&&(f.mapping=Mo),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===vp||h===xp)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new AT(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",o),n(p.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const po=4,Kv=[.125,.215,.35,.446,.526,.582],cr=20,Bd=new Am,Qv=new Me;let Fd=null,Hd=0,Gd=0,Vd=!1;const lr=(1+Math.sqrt(5))/2,lo=1/lr,Jv=[new Z(-lr,lo,0),new Z(lr,lo,0),new Z(-lo,0,lr),new Z(lo,0,lr),new Z(0,lr,-lo),new Z(0,lr,lo),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],pb=new Z;class $v{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:f=256,position:h=pb}=c;Fd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fd,Hd,Gd),this._renderer.xr.enabled=Vd,t.scissorTest=!1,wu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===yo||t.mapping===Mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:xa,minFilter:xa,generateMipmaps:!1,type:zs,format:ca,colorSpace:Ro,depthBuffer:!1},o=tx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tx(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mb(c)),this._blurMaterial=gb(c,t,n)}return o}_compileMaterial(t){const n=new ve(this._lodPlanes[0],t);this._renderer.compile(n,Bd)}_sceneToCubeUV(t,n,a,o,c){const m=new Hi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Qv),_.toneMapping=Os,_.autoClear=!1;const y=new ra({name:"PMREM.Background",side:Ei,depthWrite:!1,depthTest:!1}),A=new ve(new vn,y);let S=!1;const E=t.background;E?E.isColor&&(y.color.copy(E),t.background=null,S=!0):(y.color.copy(Qv),S=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const R=this._cubeSize;wu(o,C*R,U>2?R:0,R,R),_.setRenderTarget(o),S&&_.render(A,m),_.render(t,m)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=x,_.autoClear=v,t.background=E}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===yo||t.mapping===Mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ex());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new ve(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;wu(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,Bd)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Jv[(o-c-1)%Jv.length];this._blur(t,c-1,c,f,h)}n.autoClear=a}_blur(t,n,a,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,o,"latitudinal",c),this._halfBlur(f,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ve(this._lodPlanes[o],p),v=p.uniforms,x=this._sizeLods[a]-1,y=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*cr-1),A=c/y,S=isFinite(c)?1+Math.floor(g*A):cr;S>cr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${cr}`);const E=[];let U=0;for(let F=0;F<cr;++F){const X=F/A,N=Math.exp(-X*X/2);E.push(N),F===0?U+=N:F<S&&(U+=2*N)}for(let F=0;F<E.length;F++)E[F]=E[F]/U;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=E,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:C}=this;v.dTheta.value=y,v.mipInt.value=C-a;const R=this._sizeLods[o],G=3*R*(o>C-po?o-C+po:0),H=4*(this._cubeSize-R);wu(n,G,H,3*R,2*R),m.setRenderTarget(n),m.render(_,Bd)}}function mb(r){const t=[],n=[],a=[];let o=r;const c=r-po+1+Kv.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);n.push(h);let m=1/h;f>r-po?m=Kv[f-r+po-1]:f===0&&(m=0),a.push(m);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,y=6,A=3,S=2,E=1,U=new Float32Array(A*y*x),C=new Float32Array(S*y*x),R=new Float32Array(E*y*x);for(let H=0;H<x;H++){const F=H%3*2/3-1,X=H>2?0:-1,N=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];U.set(N,A*y*H),C.set(v,S*y*H);const w=[H,H,H,H,H,H];R.set(w,E*y*H)}const G=new wi;G.setAttribute("position",new Gi(U,A)),G.setAttribute("uv",new Gi(C,S)),G.setAttribute("faceIndex",new Gi(R,E)),t.push(G),o>po&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function tx(r,t,n){const a=new Ma(r,t,n);return a.texture.mapping=Ju,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function wu(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function gb(r,t,n){const a=new Float32Array(cr),o=new Z(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Rm(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ex(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rm(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function nx(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Rm(){return`

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
	`}function _b(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===vp||m===xp,g=m===yo||m===Mo;if(p||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new $v(r)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const x=h.image;return p&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new $v(r)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function o(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function vb(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&vo("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function xb(r,t,n,a){const o={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const y in v.attributes)t.remove(v.attributes[y]);v.removeEventListener("dispose",f),delete o[v.id];const x=c.get(v);x&&(t.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",f),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)t.update(v[x],r.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,y=_.attributes.position;let A=0;if(x!==null){const U=x.array;A=x.version;for(let C=0,R=U.length;C<R;C+=3){const G=U[C+0],H=U[C+1],F=U[C+2];v.push(G,H,H,F,F,G)}}else if(y!==void 0){const U=y.array;A=y.version;for(let C=0,R=U.length/3-1;C<R;C+=3){const G=C+0,H=C+1,F=C+2;v.push(G,H,H,F,F,G)}}else return;const S=new(AE(v)?CE:wE)(v,1);S.version=A;const E=c.get(_);E&&t.remove(E),c.set(_,S)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function Eb(r,t,n){let a;function o(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,x){r.drawElements(a,x,c,v*f),n.update(x,a,1)}function p(v,x,y){y!==0&&(r.drawElementsInstanced(a,x,c,v*f,y),n.update(x,a,y))}function g(v,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,v,0,y);let S=0;for(let E=0;E<y;E++)S+=x[E];n.update(S,a,1)}function _(v,x,y,A){if(y===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<v.length;E++)p(v[E]/f,x[E],A[E]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,c,v,0,A,0,y);let E=0;for(let U=0;U<y;U++)E+=x[U]*A[U];n.update(E,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Sb(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function yb(r,t,n){const a=new WeakMap,o=new cn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let w=function(){X.dispose(),a.delete(h),h.removeEventListener("dispose",w)};var x=w;v!==void 0&&v.texture.dispose();const y=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let R=0;y===!0&&(R=1),A===!0&&(R=2),S===!0&&(R=3);let G=h.attributes.position.count*R,H=1;G>t.maxTextureSize&&(H=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const F=new Float32Array(G*H*4*_),X=new RE(F,G,H,_);X.type=Ea,X.needsUpdate=!0;const N=R*4;for(let V=0;V<_;V++){const st=E[V],ut=U[V],vt=C[V],ft=G*H*4*V;for(let B=0;B<st.count;B++){const j=B*N;y===!0&&(o.fromBufferAttribute(st,B),F[ft+j+0]=o.x,F[ft+j+1]=o.y,F[ft+j+2]=o.z,F[ft+j+3]=0),A===!0&&(o.fromBufferAttribute(ut,B),F[ft+j+4]=o.x,F[ft+j+5]=o.y,F[ft+j+6]=o.z,F[ft+j+7]=0),S===!0&&(o.fromBufferAttribute(vt,B),F[ft+j+8]=o.x,F[ft+j+9]=o.y,F[ft+j+10]=o.z,F[ft+j+11]=vt.itemSize===4?o.w:1)}}v={count:_,texture:X,size:new oe(G,H)},a.set(h,v),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let y=0;for(let S=0;S<p.length;S++)y+=p[S];const A=h.morphTargetsRelative?1:1-y;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function Mb(r,t,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);if(o.get(_)!==p&&(t.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return _}function f(){o=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const YE=new ui,ix=new vm(1,1),XE=new RE,WE=new cT,qE=new LE,ax=[],sx=[],rx=new Float32Array(16),ox=new Float32Array(9),lx=new Float32Array(4);function No(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=ax[o];if(c===void 0&&(c=new Float32Array(o),ax[o]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function Hn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function Gn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function ef(r,t){let n=sx[t];n===void 0&&(n=new Int32Array(t),sx[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function Tb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function Ab(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hn(n,t))return;r.uniform2fv(this.addr,t),Gn(n,t)}}function Rb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Hn(n,t))return;r.uniform3fv(this.addr,t),Gn(n,t)}}function bb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hn(n,t))return;r.uniform4fv(this.addr,t),Gn(n,t)}}function wb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Hn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),Gn(n,t)}else{if(Hn(n,a))return;lx.set(a),r.uniformMatrix2fv(this.addr,!1,lx),Gn(n,a)}}function Cb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Hn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),Gn(n,t)}else{if(Hn(n,a))return;ox.set(a),r.uniformMatrix3fv(this.addr,!1,ox),Gn(n,a)}}function Db(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(Hn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),Gn(n,t)}else{if(Hn(n,a))return;rx.set(a),r.uniformMatrix4fv(this.addr,!1,rx),Gn(n,a)}}function Nb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function Lb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hn(n,t))return;r.uniform2iv(this.addr,t),Gn(n,t)}}function Ub(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Hn(n,t))return;r.uniform3iv(this.addr,t),Gn(n,t)}}function Pb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hn(n,t))return;r.uniform4iv(this.addr,t),Gn(n,t)}}function Ob(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function Ib(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hn(n,t))return;r.uniform2uiv(this.addr,t),Gn(n,t)}}function zb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Hn(n,t))return;r.uniform3uiv(this.addr,t),Gn(n,t)}}function Bb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hn(n,t))return;r.uniform4uiv(this.addr,t),Gn(n,t)}}function Fb(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(ix.compareFunction=ME,c=ix):c=YE,n.setTexture2D(t||c,o)}function Hb(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||WE,o)}function Gb(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||qE,o)}function Vb(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||XE,o)}function kb(r){switch(r){case 5126:return Tb;case 35664:return Ab;case 35665:return Rb;case 35666:return bb;case 35674:return wb;case 35675:return Cb;case 35676:return Db;case 5124:case 35670:return Nb;case 35667:case 35671:return Lb;case 35668:case 35672:return Ub;case 35669:case 35673:return Pb;case 5125:return Ob;case 36294:return Ib;case 36295:return zb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Vb}}function Yb(r,t){r.uniform1fv(this.addr,t)}function Xb(r,t){const n=No(t,this.size,2);r.uniform2fv(this.addr,n)}function Wb(r,t){const n=No(t,this.size,3);r.uniform3fv(this.addr,n)}function qb(r,t){const n=No(t,this.size,4);r.uniform4fv(this.addr,n)}function Zb(r,t){const n=No(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function jb(r,t){const n=No(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function Kb(r,t){const n=No(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function Qb(r,t){r.uniform1iv(this.addr,t)}function Jb(r,t){r.uniform2iv(this.addr,t)}function $b(r,t){r.uniform3iv(this.addr,t)}function tw(r,t){r.uniform4iv(this.addr,t)}function ew(r,t){r.uniform1uiv(this.addr,t)}function nw(r,t){r.uniform2uiv(this.addr,t)}function iw(r,t){r.uniform3uiv(this.addr,t)}function aw(r,t){r.uniform4uiv(this.addr,t)}function sw(r,t,n){const a=this.cache,o=t.length,c=ef(n,o);Hn(a,c)||(r.uniform1iv(this.addr,c),Gn(a,c));for(let f=0;f!==o;++f)n.setTexture2D(t[f]||YE,c[f])}function rw(r,t,n){const a=this.cache,o=t.length,c=ef(n,o);Hn(a,c)||(r.uniform1iv(this.addr,c),Gn(a,c));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||WE,c[f])}function ow(r,t,n){const a=this.cache,o=t.length,c=ef(n,o);Hn(a,c)||(r.uniform1iv(this.addr,c),Gn(a,c));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||qE,c[f])}function lw(r,t,n){const a=this.cache,o=t.length,c=ef(n,o);Hn(a,c)||(r.uniform1iv(this.addr,c),Gn(a,c));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||XE,c[f])}function cw(r){switch(r){case 5126:return Yb;case 35664:return Xb;case 35665:return Wb;case 35666:return qb;case 35674:return Zb;case 35675:return jb;case 35676:return Kb;case 5124:case 35670:return Qb;case 35667:case 35671:return Jb;case 35668:case 35672:return $b;case 35669:case 35673:return tw;case 5125:return ew;case 36294:return nw;case 36295:return iw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return lw}}class uw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=kb(n.type)}}class fw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cw(n.type)}}class hw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function cx(r,t){r.seq.push(t),r.map[t.id]=t}function dw(r,t,n){const a=r.name,o=a.length;for(kd.lastIndex=0;;){const c=kd.exec(a),f=kd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===o){cx(n,p===void 0?new uw(h,r,t):new fw(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new hw(h),cx(n,_)),n=_}}}class Yu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),f=t.getUniformLocation(n,c.name);dw(c,f,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in n&&a.push(f)}return a}}function ux(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const pw=37297;let mw=0;function gw(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=o;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const fx=new De;function _w(r){We._getMatrix(fx,We.workingColorSpace,r);const t=`mat3( ${fx.elements.map(n=>n.toFixed(4))} )`;switch(We.getTransfer(r)){case ju:return[t,"LinearTransferOETF"];case sn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function hx(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+gw(r.getShaderSource(t),f)}else return o}function vw(r,t){const n=_w(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function xw(r,t){let n;switch(t){case lE:n="Linear";break;case cE:n="Reinhard";break;case uE:n="Cineon";break;case fE:n="ACESFilmic";break;case dE:n="AgX";break;case pE:n="Neutral";break;case hE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cu=new Z;function Ew(){We.getLuminanceCoefficients(Cu);const r=Cu.x.toFixed(4),t=Cu.y.toFixed(4),n=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function yw(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Mw(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function Ol(r){return r!==""}function dx(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function px(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jp(r){return r.replace(Tw,Rw)}const Aw=new Map;function Rw(r,t){let n=Ne[t];if(n===void 0){const a=Aw.get(t);if(a!==void 0)n=Ne[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Jp(n)}const bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mx(r){return r.replace(bw,ww)}function ww(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function gx(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cw(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===nE?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===iE?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Za&&(t="SHADOWMAP_TYPE_VSM"),t}function Dw(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case yo:case Mo:t="ENVMAP_TYPE_CUBE";break;case Ju:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nw(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Mo:t="ENVMAP_MODE_REFRACTION";break}return t}function Lw(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case oE:t="ENVMAP_BLENDING_MULTIPLY";break;case AM:t="ENVMAP_BLENDING_MIX";break;case RM:t="ENVMAP_BLENDING_ADD";break}return t}function Uw(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function Pw(r,t,n,a){const o=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=Cw(n),p=Dw(n),g=Nw(n),_=Lw(n),v=Uw(n),x=Sw(n),y=yw(c),A=o.createProgram();let S,E,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ol).join(`
`),S.length>0&&(S+=`
`),E=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ol).join(`
`),E.length>0&&(E+=`
`)):(S=[gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),E=[gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Os?"#define TONE_MAPPING":"",n.toneMapping!==Os?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Os?xw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,vw("linearToOutputTexel",n.outputColorSpace),Ew(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ol).join(`
`)),f=Jp(f),f=dx(f,n),f=px(f,n),h=Jp(h),h=dx(h,n),h=px(h,n),f=mx(f),h=mx(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,E=["#define varying in",n.glslVersion===mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const C=U+S+f,R=U+E+h,G=ux(o,o.VERTEX_SHADER,C),H=ux(o,o.FRAGMENT_SHADER,R);o.attachShader(A,G),o.attachShader(A,H),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(V){if(r.debug.checkShaderErrors){const st=o.getProgramInfoLog(A).trim(),ut=o.getShaderInfoLog(G).trim(),vt=o.getShaderInfoLog(H).trim();let ft=!0,B=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(ft=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,G,H);else{const j=hx(o,G,"vertex"),K=hx(o,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+st+`
`+j+`
`+K)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(ut===""||vt==="")&&(B=!1);B&&(V.diagnostics={runnable:ft,programLog:st,vertexShader:{log:ut,prefix:S},fragmentShader:{log:vt,prefix:E}})}o.deleteShader(G),o.deleteShader(H),X=new Yu(o,A),N=Mw(o,A)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(A,pw)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mw++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=H,this}let Ow=0;class Iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new zw(t),n.set(t,a)),a}}class zw{constructor(t){this.id=Ow++,this.code=t,this.usedTimes=0}}function Bw(r,t,n,a,o,c,f){const h=new gm,m=new Iw,p=new Set,g=[],_=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(N){return p.add(N),N===0?"uv":`uv${N}`}function S(N,w,V,st,ut){const vt=st.fog,ft=ut.geometry,B=N.isMeshStandardMaterial?st.environment:null,j=(N.isMeshStandardMaterial?n:t).get(N.envMap||B),K=j&&j.mapping===Ju?j.image.height:null,At=y[N.type];N.precision!==null&&(x=o.getMaxPrecision(N.precision),x!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",x,"instead."));const z=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,it=z!==void 0?z.length:0;let Et=0;ft.morphAttributes.position!==void 0&&(Et=1),ft.morphAttributes.normal!==void 0&&(Et=2),ft.morphAttributes.color!==void 0&&(Et=3);let Ut,nt,pt,Pt;if(At){const Qt=ga[At];Ut=Qt.vertexShader,nt=Qt.fragmentShader}else Ut=N.vertexShader,nt=N.fragmentShader,m.update(N),pt=m.getVertexShaderID(N),Pt=m.getFragmentShaderID(N);const Ft=r.getRenderTarget(),Ht=r.state.buffers.depth.getReversed(),me=ut.isInstancedMesh===!0,ae=ut.isBatchedMesh===!0,Oe=!!N.map,Wt=!!N.matcap,jt=!!j,O=!!N.aoMap,Bt=!!N.lightMap,Zt=!!N.bumpMap,qt=!!N.normalMap,Rt=!!N.displacementMap,de=!!N.emissiveMap,Xt=!!N.metalnessMap,le=!!N.roughnessMap,Ae=N.anisotropy>0,L=N.clearcoat>0,T=N.dispersion>0,P=N.iridescence>0,W=N.sheen>0,ct=N.transmission>0,$=Ae&&!!N.anisotropyMap,zt=L&&!!N.clearcoatMap,Ct=L&&!!N.clearcoatNormalMap,Nt=L&&!!N.clearcoatRoughnessMap,Kt=P&&!!N.iridescenceMap,wt=P&&!!N.iridescenceThicknessMap,Gt=W&&!!N.sheenColorMap,tt=W&&!!N.sheenRoughnessMap,Ot=!!N.specularMap,Mt=!!N.specularColorMap,Dt=!!N.specularIntensityMap,I=ct&&!!N.transmissionMap,Tt=ct&&!!N.thicknessMap,ot=!!N.gradientMap,St=!!N.alphaMap,rt=N.alphaTest>0,gt=!!N.alphaHash,yt=!!N.extensions;let Yt=Os;N.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(Yt=r.toneMapping);const se={shaderID:At,shaderType:N.type,shaderName:N.name,vertexShader:Ut,fragmentShader:nt,defines:N.defines,customVertexShaderID:pt,customFragmentShaderID:Pt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:x,batching:ae,batchingColor:ae&&ut._colorsTexture!==null,instancing:me,instancingColor:me&&ut.instanceColor!==null,instancingMorph:me&&ut.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ft===null?r.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:Ro,alphaToCoverage:!!N.alphaToCoverage,map:Oe,matcap:Wt,envMap:jt,envMapMode:jt&&j.mapping,envMapCubeUVHeight:K,aoMap:O,lightMap:Bt,bumpMap:Zt,normalMap:qt,displacementMap:v&&Rt,emissiveMap:de,normalMapObjectSpace:qt&&N.normalMapType===DM,normalMapTangentSpace:qt&&N.normalMapType===hm,metalnessMap:Xt,roughnessMap:le,anisotropy:Ae,anisotropyMap:$,clearcoat:L,clearcoatMap:zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Nt,dispersion:T,iridescence:P,iridescenceMap:Kt,iridescenceThicknessMap:wt,sheen:W,sheenColorMap:Gt,sheenRoughnessMap:tt,specularMap:Ot,specularColorMap:Mt,specularIntensityMap:Dt,transmission:ct,transmissionMap:I,thicknessMap:Tt,gradientMap:ot,opaque:N.transparent===!1&&N.blending===_o&&N.alphaToCoverage===!1,alphaMap:St,alphaTest:rt,alphaHash:gt,combine:N.combine,mapUv:Oe&&A(N.map.channel),aoMapUv:O&&A(N.aoMap.channel),lightMapUv:Bt&&A(N.lightMap.channel),bumpMapUv:Zt&&A(N.bumpMap.channel),normalMapUv:qt&&A(N.normalMap.channel),displacementMapUv:Rt&&A(N.displacementMap.channel),emissiveMapUv:de&&A(N.emissiveMap.channel),metalnessMapUv:Xt&&A(N.metalnessMap.channel),roughnessMapUv:le&&A(N.roughnessMap.channel),anisotropyMapUv:$&&A(N.anisotropyMap.channel),clearcoatMapUv:zt&&A(N.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&A(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&A(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&A(N.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&A(N.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&A(N.sheenColorMap.channel),sheenRoughnessMapUv:tt&&A(N.sheenRoughnessMap.channel),specularMapUv:Ot&&A(N.specularMap.channel),specularColorMapUv:Mt&&A(N.specularColorMap.channel),specularIntensityMapUv:Dt&&A(N.specularIntensityMap.channel),transmissionMapUv:I&&A(N.transmissionMap.channel),thicknessMapUv:Tt&&A(N.thicknessMap.channel),alphaMapUv:St&&A(N.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(qt||Ae),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!ft.attributes.uv&&(Oe||St),fog:!!vt,useFog:N.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ht,skinning:ut.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Oe&&N.map.isVideoTexture===!0&&We.getTransfer(N.map.colorSpace)===sn,decodeVideoTextureEmissive:de&&N.emissiveMap.isVideoTexture===!0&&We.getTransfer(N.emissiveMap.colorSpace)===sn,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===jn,flipSided:N.side===Ei,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:yt&&N.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&N.extensions.multiDraw===!0||ae)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return se.vertexUv1s=p.has(1),se.vertexUv2s=p.has(2),se.vertexUv3s=p.has(3),p.clear(),se}function E(N){const w=[];if(N.shaderID?w.push(N.shaderID):(w.push(N.customVertexShaderID),w.push(N.customFragmentShaderID)),N.defines!==void 0)for(const V in N.defines)w.push(V),w.push(N.defines[V]);return N.isRawShaderMaterial===!1&&(U(w,N),C(w,N),w.push(r.outputColorSpace)),w.push(N.customProgramCacheKey),w.join()}function U(N,w){N.push(w.precision),N.push(w.outputColorSpace),N.push(w.envMapMode),N.push(w.envMapCubeUVHeight),N.push(w.mapUv),N.push(w.alphaMapUv),N.push(w.lightMapUv),N.push(w.aoMapUv),N.push(w.bumpMapUv),N.push(w.normalMapUv),N.push(w.displacementMapUv),N.push(w.emissiveMapUv),N.push(w.metalnessMapUv),N.push(w.roughnessMapUv),N.push(w.anisotropyMapUv),N.push(w.clearcoatMapUv),N.push(w.clearcoatNormalMapUv),N.push(w.clearcoatRoughnessMapUv),N.push(w.iridescenceMapUv),N.push(w.iridescenceThicknessMapUv),N.push(w.sheenColorMapUv),N.push(w.sheenRoughnessMapUv),N.push(w.specularMapUv),N.push(w.specularColorMapUv),N.push(w.specularIntensityMapUv),N.push(w.transmissionMapUv),N.push(w.thicknessMapUv),N.push(w.combine),N.push(w.fogExp2),N.push(w.sizeAttenuation),N.push(w.morphTargetsCount),N.push(w.morphAttributeCount),N.push(w.numDirLights),N.push(w.numPointLights),N.push(w.numSpotLights),N.push(w.numSpotLightMaps),N.push(w.numHemiLights),N.push(w.numRectAreaLights),N.push(w.numDirLightShadows),N.push(w.numPointLightShadows),N.push(w.numSpotLightShadows),N.push(w.numSpotLightShadowsWithMaps),N.push(w.numLightProbes),N.push(w.shadowMapType),N.push(w.toneMapping),N.push(w.numClippingPlanes),N.push(w.numClipIntersection),N.push(w.depthPacking)}function C(N,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),N.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),N.push(h.mask)}function R(N){const w=y[N.type];let V;if(w){const st=ga[w];V=hr.clone(st.uniforms)}else V=N.uniforms;return V}function G(N,w){let V;for(let st=0,ut=g.length;st<ut;st++){const vt=g[st];if(vt.cacheKey===w){V=vt,++V.usedTimes;break}}return V===void 0&&(V=new Pw(r,w,N,c),g.push(V)),V}function H(N){if(--N.usedTimes===0){const w=g.indexOf(N);g[w]=g[g.length-1],g.pop(),N.destroy()}}function F(N){m.remove(N)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:E,getUniforms:R,acquireProgram:G,releaseProgram:H,releaseShaderCache:F,programs:g,dispose:X}}function Fw(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function o(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function Hw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function _x(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function vx(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function f(_,v,x,y,A,S){let E=r[t];return E===void 0?(E={id:_.id,object:_,geometry:v,material:x,groupOrder:y,renderOrder:_.renderOrder,z:A,group:S},r[t]=E):(E.id=_.id,E.object=_,E.geometry=v,E.material=x,E.groupOrder=y,E.renderOrder=_.renderOrder,E.z=A,E.group=S),t++,E}function h(_,v,x,y,A,S){const E=f(_,v,x,y,A,S);x.transmission>0?a.push(E):x.transparent===!0?o.push(E):n.push(E)}function m(_,v,x,y,A,S){const E=f(_,v,x,y,A,S);x.transmission>0?a.unshift(E):x.transparent===!0?o.unshift(E):n.unshift(E)}function p(_,v){n.length>1&&n.sort(_||Hw),a.length>1&&a.sort(v||_x),o.length>1&&o.sort(v||_x)}function g(){for(let _=t,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:m,finish:g,sort:p}}function Gw(){let r=new WeakMap;function t(a,o){const c=r.get(a);let f;return c===void 0?(f=new vx,r.set(a,[f])):o>=c.length?(f=new vx,c.push(f)):f=c[o],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function Vw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Z,color:new Me};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":n={color:new Me,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=n,n}}}function kw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let Yw=0;function Xw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ww(r){const t=new Vw,n=kw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new Z);const o=new Z,c=new un,f=new un;function h(p){let g=0,_=0,v=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let x=0,y=0,A=0,S=0,E=0,U=0,C=0,R=0,G=0,H=0,F=0;p.sort(Xw);for(let N=0,w=p.length;N<w;N++){const V=p[N],st=V.color,ut=V.intensity,vt=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=st.r*ut,_+=st.g*ut,v+=st.b*ut;else if(V.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(V.sh.coefficients[B],ut);F++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,K=n.get(V);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,a.directionalShadow[x]=K,a.directionalShadowMap[x]=ft,a.directionalShadowMatrix[x]=V.shadow.matrix,U++}a.directional[x]=B,x++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(st).multiplyScalar(ut),B.distance=vt,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,a.spot[A]=B;const j=V.shadow;if(V.map&&(a.spotLightMap[G]=V.map,G++,j.updateMatrices(V),V.castShadow&&H++),a.spotLightMatrix[A]=j.matrix,V.castShadow){const K=n.get(V);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,a.spotShadow[A]=K,a.spotShadowMap[A]=ft,R++}A++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(st).multiplyScalar(ut),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=B,S++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const j=V.shadow,K=n.get(V);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,a.pointShadow[y]=K,a.pointShadowMap[y]=ft,a.pointShadowMatrix[y]=V.shadow.matrix,C++}a.point[y]=B,y++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(ut),B.groundColor.copy(V.groundColor).multiplyScalar(ut),a.hemi[E]=B,E++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=te.LTC_FLOAT_1,a.rectAreaLTC2=te.LTC_FLOAT_2):(a.rectAreaLTC1=te.LTC_HALF_1,a.rectAreaLTC2=te.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const X=a.hash;(X.directionalLength!==x||X.pointLength!==y||X.spotLength!==A||X.rectAreaLength!==S||X.hemiLength!==E||X.numDirectionalShadows!==U||X.numPointShadows!==C||X.numSpotShadows!==R||X.numSpotMaps!==G||X.numLightProbes!==F)&&(a.directional.length=x,a.spot.length=A,a.rectArea.length=S,a.point.length=y,a.hemi.length=E,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=R+G-H,a.spotLightMap.length=G,a.numSpotLightShadowsWithMaps=H,a.numLightProbes=F,X.directionalLength=x,X.pointLength=y,X.spotLength=A,X.rectAreaLength=S,X.hemiLength=E,X.numDirectionalShadows=U,X.numPointShadows=C,X.numSpotShadows=R,X.numSpotMaps=G,X.numLightProbes=F,a.version=Yw++)}function m(p,g){let _=0,v=0,x=0,y=0,A=0;const S=g.matrixWorldInverse;for(let E=0,U=p.length;E<U;E++){const C=p[E];if(C.isDirectionalLight){const R=a.directional[_];R.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),_++}else if(C.isSpotLight){const R=a.spot[x];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),x++}else if(C.isRectAreaLight){const R=a.rectArea[y];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),f.identity(),c.copy(C.matrixWorld),c.premultiply(S),f.extractRotation(c),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),y++}else if(C.isPointLight){const R=a.point[v];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const R=a.hemi[A];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:a}}function xx(r){const t=new Ww(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function qw(r){let t=new WeakMap;function n(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new xx(r),t.set(o,[h])):c>=f.length?(h=new xx(r),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const Zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kw(r,t,n){let a=new _m;const o=new oe,c=new oe,f=new cn,h=new dA({depthPacking:CM}),m=new pA,p={},g=n.maxTextureSize,_={[Is]:Ei,[Ei]:Is,[jn]:jn},v=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Zw,fragmentShader:jw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const y=new wi;y.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ve(y,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nE;let E=this.type;this.render=function(H,F,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const N=r.getRenderTarget(),w=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),st=r.state;st.setBlending(gi),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const ut=E!==Za&&this.type===Za,vt=E===Za&&this.type!==Za;for(let ft=0,B=H.length;ft<B;ft++){const j=H[ft],K=j.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const At=K.getFrameExtents();if(o.multiply(At),c.copy(K.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/At.x),o.x=c.x*At.x,K.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/At.y),o.y=c.y*At.y,K.mapSize.y=c.y)),K.map===null||ut===!0||vt===!0){const it=this.type!==Za?{minFilter:Si,magFilter:Si}:{};K.map!==null&&K.map.dispose(),K.map=new Ma(o.x,o.y,it),K.map.texture.name=j.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();const z=K.getViewportCount();for(let it=0;it<z;it++){const Et=K.getViewport(it);f.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),st.viewport(f),K.updateMatrices(j,it),a=K.getFrustum(),R(F,X,K.camera,j,this.type)}K.isPointLightShadow!==!0&&this.type===Za&&U(K,X),K.needsUpdate=!1}E=this.type,S.needsUpdate=!1,r.setRenderTarget(N,w,V)};function U(H,F){const X=t.update(A);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,x.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ma(o.x,o.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(F,null,X,v,A,null),x.uniforms.shadow_pass.value=H.mapPass.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(F,null,X,x,A,null)}function C(H,F,X,N){let w=null;const V=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)w=V;else if(w=X.isPointLight===!0?m:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const st=w.uuid,ut=F.uuid;let vt=p[st];vt===void 0&&(vt={},p[st]=vt);let ft=vt[ut];ft===void 0&&(ft=w.clone(),vt[ut]=ft,F.addEventListener("dispose",G)),w=ft}if(w.visible=F.visible,w.wireframe=F.wireframe,N===Za?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const st=r.properties.get(w);st.light=X}return w}function R(H,F,X,N,w){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Za)&&(!H.frustumCulled||a.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const ut=t.update(H),vt=H.material;if(Array.isArray(vt)){const ft=ut.groups;for(let B=0,j=ft.length;B<j;B++){const K=ft[B],At=vt[K.materialIndex];if(At&&At.visible){const z=C(H,At,N,w);H.onBeforeShadow(r,H,F,X,ut,z,K),r.renderBufferDirect(X,null,ut,z,H,K),H.onAfterShadow(r,H,F,X,ut,z,K)}}}else if(vt.visible){const ft=C(H,vt,N,w);H.onBeforeShadow(r,H,F,X,ut,ft,null),r.renderBufferDirect(X,null,ut,ft,H,null),H.onAfterShadow(r,H,F,X,ut,ft,null)}}const st=H.children;for(let ut=0,vt=st.length;ut<vt;ut++)R(st[ut],F,X,N,w)}function G(H){H.target.removeEventListener("dispose",G);for(const X in p){const N=p[X],w=H.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}const Qw={[fp]:hp,[dp]:gp,[pp]:_p,[So]:mp,[hp]:fp,[gp]:dp,[_p]:pp,[mp]:So};function Jw(r,t){function n(){let I=!1;const Tt=new cn;let ot=null;const St=new cn(0,0,0,0);return{setMask:function(rt){ot!==rt&&!I&&(r.colorMask(rt,rt,rt,rt),ot=rt)},setLocked:function(rt){I=rt},setClear:function(rt,gt,yt,Yt,se){se===!0&&(rt*=Yt,gt*=Yt,yt*=Yt),Tt.set(rt,gt,yt,Yt),St.equals(Tt)===!1&&(r.clearColor(rt,gt,yt,Yt),St.copy(Tt))},reset:function(){I=!1,ot=null,St.set(-1,0,0,0)}}}function a(){let I=!1,Tt=!1,ot=null,St=null,rt=null;return{setReversed:function(gt){if(Tt!==gt){const yt=t.get("EXT_clip_control");gt?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),Tt=gt;const Yt=rt;rt=null,this.setClear(Yt)}},getReversed:function(){return Tt},setTest:function(gt){gt?Ft(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(gt){ot!==gt&&!I&&(r.depthMask(gt),ot=gt)},setFunc:function(gt){if(Tt&&(gt=Qw[gt]),St!==gt){switch(gt){case fp:r.depthFunc(r.NEVER);break;case hp:r.depthFunc(r.ALWAYS);break;case dp:r.depthFunc(r.LESS);break;case So:r.depthFunc(r.LEQUAL);break;case pp:r.depthFunc(r.EQUAL);break;case mp:r.depthFunc(r.GEQUAL);break;case gp:r.depthFunc(r.GREATER);break;case _p:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}St=gt}},setLocked:function(gt){I=gt},setClear:function(gt){rt!==gt&&(Tt&&(gt=1-gt),r.clearDepth(gt),rt=gt)},reset:function(){I=!1,ot=null,St=null,rt=null,Tt=!1}}}function o(){let I=!1,Tt=null,ot=null,St=null,rt=null,gt=null,yt=null,Yt=null,se=null;return{setTest:function(Qt){I||(Qt?Ft(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(Qt){Tt!==Qt&&!I&&(r.stencilMask(Qt),Tt=Qt)},setFunc:function(Qt,$e,fe){(ot!==Qt||St!==$e||rt!==fe)&&(r.stencilFunc(Qt,$e,fe),ot=Qt,St=$e,rt=fe)},setOp:function(Qt,$e,fe){(gt!==Qt||yt!==$e||Yt!==fe)&&(r.stencilOp(Qt,$e,fe),gt=Qt,yt=$e,Yt=fe)},setLocked:function(Qt){I=Qt},setClear:function(Qt){se!==Qt&&(r.clearStencil(Qt),se=Qt)},reset:function(){I=!1,Tt=null,ot=null,St=null,rt=null,gt=null,yt=null,Yt=null,se=null}}}const c=new n,f=new a,h=new o,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,x=[],y=null,A=!1,S=null,E=null,U=null,C=null,R=null,G=null,H=null,F=new Me(0,0,0),X=0,N=!1,w=null,V=null,st=null,ut=null,vt=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),B=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),B=j>=2);let At=null,z={};const it=r.getParameter(r.SCISSOR_BOX),Et=r.getParameter(r.VIEWPORT),Ut=new cn().fromArray(it),nt=new cn().fromArray(Et);function pt(I,Tt,ot,St){const rt=new Uint8Array(4),gt=r.createTexture();r.bindTexture(I,gt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<ot;yt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,St,0,r.RGBA,r.UNSIGNED_BYTE,rt):r.texImage2D(Tt+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,rt);return gt}const Pt={};Pt[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),Pt[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Pt[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ft(r.DEPTH_TEST),f.setFunc(So),Zt(!1),qt(uv),Ft(r.CULL_FACE),O(gi);function Ft(I){g[I]!==!0&&(r.enable(I),g[I]=!0)}function Ht(I){g[I]!==!1&&(r.disable(I),g[I]=!1)}function me(I,Tt){return _[I]!==Tt?(r.bindFramebuffer(I,Tt),_[I]=Tt,I===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Tt),I===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function ae(I,Tt){let ot=x,St=!1;if(I){ot=v.get(Tt),ot===void 0&&(ot=[],v.set(Tt,ot));const rt=I.textures;if(ot.length!==rt.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,yt=rt.length;gt<yt;gt++)ot[gt]=r.COLOR_ATTACHMENT0+gt;ot.length=rt.length,St=!0}}else ot[0]!==r.BACK&&(ot[0]=r.BACK,St=!0);St&&r.drawBuffers(ot)}function Oe(I){return y!==I?(r.useProgram(I),y=I,!0):!1}const Wt={[Qa]:r.FUNC_ADD,[fM]:r.FUNC_SUBTRACT,[hM]:r.FUNC_REVERSE_SUBTRACT};Wt[dM]=r.MIN,Wt[pM]=r.MAX;const jt={[lp]:r.ZERO,[mM]:r.ONE,[gM]:r.SRC_COLOR,[cp]:r.SRC_ALPHA,[EM]:r.SRC_ALPHA_SATURATE,[rE]:r.DST_COLOR,[sE]:r.DST_ALPHA,[_M]:r.ONE_MINUS_SRC_COLOR,[up]:r.ONE_MINUS_SRC_ALPHA,[xM]:r.ONE_MINUS_DST_COLOR,[vM]:r.ONE_MINUS_DST_ALPHA,[SM]:r.CONSTANT_COLOR,[yM]:r.ONE_MINUS_CONSTANT_COLOR,[MM]:r.CONSTANT_ALPHA,[TM]:r.ONE_MINUS_CONSTANT_ALPHA};function O(I,Tt,ot,St,rt,gt,yt,Yt,se,Qt){if(I===gi){A===!0&&(Ht(r.BLEND),A=!1);return}if(A===!1&&(Ft(r.BLEND),A=!0),I!==aE){if(I!==S||Qt!==N){if((E!==Qa||R!==Qa)&&(r.blendEquation(r.FUNC_ADD),E=Qa,R=Qa),Qt)switch(I){case _o:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case op:r.blendFunc(r.ONE,r.ONE);break;case fv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hv:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _o:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case op:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case fv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hv:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}U=null,C=null,G=null,H=null,F.set(0,0,0),X=0,S=I,N=Qt}return}rt=rt||Tt,gt=gt||ot,yt=yt||St,(Tt!==E||rt!==R)&&(r.blendEquationSeparate(Wt[Tt],Wt[rt]),E=Tt,R=rt),(ot!==U||St!==C||gt!==G||yt!==H)&&(r.blendFuncSeparate(jt[ot],jt[St],jt[gt],jt[yt]),U=ot,C=St,G=gt,H=yt),(Yt.equals(F)===!1||se!==X)&&(r.blendColor(Yt.r,Yt.g,Yt.b,se),F.copy(Yt),X=se),S=I,N=!1}function Bt(I,Tt){I.side===jn?Ht(r.CULL_FACE):Ft(r.CULL_FACE);let ot=I.side===Ei;Tt&&(ot=!ot),Zt(ot),I.blending===_o&&I.transparent===!1?O(gi):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),f.setFunc(I.depthFunc),f.setTest(I.depthTest),f.setMask(I.depthWrite),c.setMask(I.colorWrite);const St=I.stencilWrite;h.setTest(St),St&&(h.setMask(I.stencilWriteMask),h.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),h.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),de(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ft(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(I){w!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),w=I)}function qt(I){I!==cM?(Ft(r.CULL_FACE),I!==V&&(I===uv?r.cullFace(r.BACK):I===uM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),V=I}function Rt(I){I!==st&&(B&&r.lineWidth(I),st=I)}function de(I,Tt,ot){I?(Ft(r.POLYGON_OFFSET_FILL),(ut!==Tt||vt!==ot)&&(r.polygonOffset(Tt,ot),ut=Tt,vt=ot)):Ht(r.POLYGON_OFFSET_FILL)}function Xt(I){I?Ft(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function le(I){I===void 0&&(I=r.TEXTURE0+ft-1),At!==I&&(r.activeTexture(I),At=I)}function Ae(I,Tt,ot){ot===void 0&&(At===null?ot=r.TEXTURE0+ft-1:ot=At);let St=z[ot];St===void 0&&(St={type:void 0,texture:void 0},z[ot]=St),(St.type!==I||St.texture!==Tt)&&(At!==ot&&(r.activeTexture(ot),At=ot),r.bindTexture(I,Tt||Pt[I]),St.type=I,St.texture=Tt)}function L(){const I=z[At];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(I){Ut.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ut.copy(I))}function tt(I){nt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),nt.copy(I))}function Ot(I,Tt){let ot=p.get(Tt);ot===void 0&&(ot=new WeakMap,p.set(Tt,ot));let St=ot.get(I);St===void 0&&(St=r.getUniformBlockIndex(Tt,I.name),ot.set(I,St))}function Mt(I,Tt){const St=p.get(Tt).get(I);m.get(Tt)!==St&&(r.uniformBlockBinding(Tt,St,I.__bindingPointIndex),m.set(Tt,St))}function Dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},At=null,z={},_={},v=new WeakMap,x=[],y=null,A=!1,S=null,E=null,U=null,C=null,R=null,G=null,H=null,F=new Me(0,0,0),X=0,N=!1,w=null,V=null,st=null,ut=null,vt=null,Ut.set(0,0,r.canvas.width,r.canvas.height),nt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Ft,disable:Ht,bindFramebuffer:me,drawBuffers:ae,useProgram:Oe,setBlending:O,setMaterial:Bt,setFlipSided:Zt,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:de,setScissorTest:Xt,activeTexture:le,bindTexture:Ae,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:P,texImage2D:Kt,texImage3D:wt,updateUBOMapping:Ot,uniformBlockBinding:Mt,texStorage2D:Ct,texStorage3D:Nt,texSubImage2D:W,texSubImage3D:ct,compressedTexSubImage2D:$,compressedTexSubImage3D:zt,scissor:Gt,viewport:tt,reset:Dt}}function $w(r,t,n,a,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new oe,g=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,T){return x?new OffscreenCanvas(L,T):Wl("canvas")}function A(L,T,P){let W=1;const ct=Ae(L);if((ct.width>P||ct.height>P)&&(W=P/Math.max(ct.width,ct.height)),W<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const $=Math.floor(W*ct.width),zt=Math.floor(W*ct.height);_===void 0&&(_=y($,zt));const Ct=T?y($,zt):_;return Ct.width=$,Ct.height=zt,Ct.getContext("2d").drawImage(L,0,0,$,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+$+"x"+zt+")."),Ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),L;return L}function S(L){return L.generateMipmaps}function E(L){r.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(L,T,P,W,ct=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=T;if(T===r.RED&&(P===r.FLOAT&&($=r.R32F),P===r.HALF_FLOAT&&($=r.R16F),P===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(P===r.UNSIGNED_BYTE&&($=r.R8UI),P===r.UNSIGNED_SHORT&&($=r.R16UI),P===r.UNSIGNED_INT&&($=r.R32UI),P===r.BYTE&&($=r.R8I),P===r.SHORT&&($=r.R16I),P===r.INT&&($=r.R32I)),T===r.RG&&(P===r.FLOAT&&($=r.RG32F),P===r.HALF_FLOAT&&($=r.RG16F),P===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RG_INTEGER&&(P===r.UNSIGNED_BYTE&&($=r.RG8UI),P===r.UNSIGNED_SHORT&&($=r.RG16UI),P===r.UNSIGNED_INT&&($=r.RG32UI),P===r.BYTE&&($=r.RG8I),P===r.SHORT&&($=r.RG16I),P===r.INT&&($=r.RG32I)),T===r.RGB_INTEGER&&(P===r.UNSIGNED_BYTE&&($=r.RGB8UI),P===r.UNSIGNED_SHORT&&($=r.RGB16UI),P===r.UNSIGNED_INT&&($=r.RGB32UI),P===r.BYTE&&($=r.RGB8I),P===r.SHORT&&($=r.RGB16I),P===r.INT&&($=r.RGB32I)),T===r.RGBA_INTEGER&&(P===r.UNSIGNED_BYTE&&($=r.RGBA8UI),P===r.UNSIGNED_SHORT&&($=r.RGBA16UI),P===r.UNSIGNED_INT&&($=r.RGBA32UI),P===r.BYTE&&($=r.RGBA8I),P===r.SHORT&&($=r.RGBA16I),P===r.INT&&($=r.RGBA32I)),T===r.RGB&&P===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),T===r.RGBA){const zt=ct?ju:We.getTransfer(W);P===r.FLOAT&&($=r.RGBA32F),P===r.HALF_FLOAT&&($=r.RGBA16F),P===r.UNSIGNED_BYTE&&($=zt===sn?r.SRGB8_ALPHA8:r.RGBA8),P===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),P===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function R(L,T){let P;return L?T===null||T===mr||T===To?P=r.DEPTH24_STENCIL8:T===Ea?P=r.DEPTH32F_STENCIL8:T===kl&&(P=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===mr||T===To?P=r.DEPTH_COMPONENT24:T===Ea?P=r.DEPTH_COMPONENT32F:T===kl&&(P=r.DEPTH_COMPONENT16),P}function G(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Si&&L.minFilter!==xa?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function H(L){const T=L.target;T.removeEventListener("dispose",H),X(T),T.isVideoTexture&&g.delete(T)}function F(L){const T=L.target;T.removeEventListener("dispose",F),w(T)}function X(L){const T=a.get(L);if(T.__webglInit===void 0)return;const P=L.source,W=v.get(P);if(W){const ct=W[T.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&N(L),Object.keys(W).length===0&&v.delete(P)}a.remove(L)}function N(L){const T=a.get(L);r.deleteTexture(T.__webglTexture);const P=L.source,W=v.get(P);delete W[T.__cacheKey],f.memory.textures--}function w(L){const T=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(T.__webglFramebuffer[W]))for(let ct=0;ct<T.__webglFramebuffer[W].length;ct++)r.deleteFramebuffer(T.__webglFramebuffer[W][ct]);else r.deleteFramebuffer(T.__webglFramebuffer[W]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[W])}else{if(Array.isArray(T.__webglFramebuffer))for(let W=0;W<T.__webglFramebuffer.length;W++)r.deleteFramebuffer(T.__webglFramebuffer[W]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let W=0;W<T.__webglColorRenderbuffer.length;W++)T.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[W]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const P=L.textures;for(let W=0,ct=P.length;W<ct;W++){const $=a.get(P[W]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),f.memory.textures--),a.remove(P[W])}a.remove(L)}let V=0;function st(){V=0}function ut(){const L=V;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),V+=1,L}function vt(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ft(L,T){const P=a.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&P.__version!==L.version){const W=L.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(P,L,T);return}}n.bindTexture(r.TEXTURE_2D,P.__webglTexture,r.TEXTURE0+T)}function B(L,T){const P=a.get(L);if(L.version>0&&P.__version!==L.version){Pt(P,L,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,P.__webglTexture,r.TEXTURE0+T)}function j(L,T){const P=a.get(L);if(L.version>0&&P.__version!==L.version){Pt(P,L,T);return}n.bindTexture(r.TEXTURE_3D,P.__webglTexture,r.TEXTURE0+T)}function K(L,T){const P=a.get(L);if(L.version>0&&P.__version!==L.version){Ft(P,L,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+T)}const At={[Vl]:r.REPEAT,[ur]:r.CLAMP_TO_EDGE,[Ep]:r.MIRRORED_REPEAT},z={[Si]:r.NEAREST,[bM]:r.NEAREST_MIPMAP_NEAREST,[au]:r.NEAREST_MIPMAP_LINEAR,[xa]:r.LINEAR,[ud]:r.LINEAR_MIPMAP_NEAREST,[fr]:r.LINEAR_MIPMAP_LINEAR},it={[NM]:r.NEVER,[zM]:r.ALWAYS,[LM]:r.LESS,[ME]:r.LEQUAL,[UM]:r.EQUAL,[IM]:r.GEQUAL,[PM]:r.GREATER,[OM]:r.NOTEQUAL};function Et(L,T){if(T.type===Ea&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===xa||T.magFilter===ud||T.magFilter===au||T.magFilter===fr||T.minFilter===xa||T.minFilter===ud||T.minFilter===au||T.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,At[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,At[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,At[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,z[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,z[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,it[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Si||T.minFilter!==au&&T.minFilter!==fr||T.type===Ea&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Ut(L,T){let P=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",H));const W=T.source;let ct=v.get(W);ct===void 0&&(ct={},v.set(W,ct));const $=vt(T);if($!==L.__cacheKey){ct[$]===void 0&&(ct[$]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,P=!0),ct[$].usedTimes++;const zt=ct[L.__cacheKey];zt!==void 0&&(ct[L.__cacheKey].usedTimes--,zt.usedTimes===0&&N(T)),L.__cacheKey=$,L.__webglTexture=ct[$].texture}return P}function nt(L,T,P){return Math.floor(Math.floor(L/P)/T)}function pt(L,T,P,W){const $=L.updateRanges;if($.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,P,W,T.data);else{$.sort((wt,Gt)=>wt.start-Gt.start);let zt=0;for(let wt=1;wt<$.length;wt++){const Gt=$[zt],tt=$[wt],Ot=Gt.start+Gt.count,Mt=nt(tt.start,T.width,4),Dt=nt(Gt.start,T.width,4);tt.start<=Ot+1&&Mt===Dt&&nt(tt.start+tt.count-1,T.width,4)===Mt?Gt.count=Math.max(Gt.count,tt.start+tt.count-Gt.start):(++zt,$[zt]=tt)}$.length=zt+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),Nt=r.getParameter(r.UNPACK_SKIP_PIXELS),Kt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let wt=0,Gt=$.length;wt<Gt;wt++){const tt=$[wt],Ot=Math.floor(tt.start/4),Mt=Math.ceil(tt.count/4),Dt=Ot%T.width,I=Math.floor(Ot/T.width),Tt=Mt,ot=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Dt),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),n.texSubImage2D(r.TEXTURE_2D,0,Dt,I,Tt,ot,P,W,T.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Nt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Kt)}}function Pt(L,T,P){let W=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(W=r.TEXTURE_3D);const ct=Ut(L,T),$=T.source;n.bindTexture(W,L.__webglTexture,r.TEXTURE0+P);const zt=a.get($);if($.version!==zt.__version||ct===!0){n.activeTexture(r.TEXTURE0+P);const Ct=We.getPrimaries(We.workingColorSpace),Nt=T.colorSpace===Us?null:We.getPrimaries(T.colorSpace),Kt=T.colorSpace===Us||Ct===Nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let wt=A(T.image,!1,o.maxTextureSize);wt=le(T,wt);const Gt=c.convert(T.format,T.colorSpace),tt=c.convert(T.type);let Ot=C(T.internalFormat,Gt,tt,T.colorSpace,T.isVideoTexture);Et(W,T);let Mt;const Dt=T.mipmaps,I=T.isVideoTexture!==!0,Tt=zt.__version===void 0||ct===!0,ot=$.dataReady,St=G(T,wt);if(T.isDepthTexture)Ot=R(T.format===Ao,T.type),Tt&&(I?n.texStorage2D(r.TEXTURE_2D,1,Ot,wt.width,wt.height):n.texImage2D(r.TEXTURE_2D,0,Ot,wt.width,wt.height,0,Gt,tt,null));else if(T.isDataTexture)if(Dt.length>0){I&&Tt&&n.texStorage2D(r.TEXTURE_2D,St,Ot,Dt[0].width,Dt[0].height);for(let rt=0,gt=Dt.length;rt<gt;rt++)Mt=Dt[rt],I?ot&&n.texSubImage2D(r.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,Gt,tt,Mt.data):n.texImage2D(r.TEXTURE_2D,rt,Ot,Mt.width,Mt.height,0,Gt,tt,Mt.data);T.generateMipmaps=!1}else I?(Tt&&n.texStorage2D(r.TEXTURE_2D,St,Ot,wt.width,wt.height),ot&&pt(T,wt,Gt,tt)):n.texImage2D(r.TEXTURE_2D,0,Ot,wt.width,wt.height,0,Gt,tt,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){I&&Tt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,St,Ot,Dt[0].width,Dt[0].height,wt.depth);for(let rt=0,gt=Dt.length;rt<gt;rt++)if(Mt=Dt[rt],T.format!==ca)if(Gt!==null)if(I){if(ot)if(T.layerUpdates.size>0){const yt=jv(Mt.width,Mt.height,T.format,T.type);for(const Yt of T.layerUpdates){const se=Mt.data.subarray(Yt*yt/Mt.data.BYTES_PER_ELEMENT,(Yt+1)*yt/Mt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,Yt,Mt.width,Mt.height,1,Gt,se)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,wt.depth,Gt,Mt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,Ot,Mt.width,Mt.height,wt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ot&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,wt.depth,Gt,tt,Mt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,rt,Ot,Mt.width,Mt.height,wt.depth,0,Gt,tt,Mt.data)}else{I&&Tt&&n.texStorage2D(r.TEXTURE_2D,St,Ot,Dt[0].width,Dt[0].height);for(let rt=0,gt=Dt.length;rt<gt;rt++)Mt=Dt[rt],T.format!==ca?Gt!==null?I?ot&&n.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,Gt,Mt.data):n.compressedTexImage2D(r.TEXTURE_2D,rt,Ot,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ot&&n.texSubImage2D(r.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,Gt,tt,Mt.data):n.texImage2D(r.TEXTURE_2D,rt,Ot,Mt.width,Mt.height,0,Gt,tt,Mt.data)}else if(T.isDataArrayTexture)if(I){if(Tt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,St,Ot,wt.width,wt.height,wt.depth),ot)if(T.layerUpdates.size>0){const rt=jv(wt.width,wt.height,T.format,T.type);for(const gt of T.layerUpdates){const yt=wt.data.subarray(gt*rt/wt.data.BYTES_PER_ELEMENT,(gt+1)*rt/wt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,wt.width,wt.height,1,Gt,tt,yt)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Gt,tt,wt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,wt.width,wt.height,wt.depth,0,Gt,tt,wt.data);else if(T.isData3DTexture)I?(Tt&&n.texStorage3D(r.TEXTURE_3D,St,Ot,wt.width,wt.height,wt.depth),ot&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Gt,tt,wt.data)):n.texImage3D(r.TEXTURE_3D,0,Ot,wt.width,wt.height,wt.depth,0,Gt,tt,wt.data);else if(T.isFramebufferTexture){if(Tt)if(I)n.texStorage2D(r.TEXTURE_2D,St,Ot,wt.width,wt.height);else{let rt=wt.width,gt=wt.height;for(let yt=0;yt<St;yt++)n.texImage2D(r.TEXTURE_2D,yt,Ot,rt,gt,0,Gt,tt,null),rt>>=1,gt>>=1}}else if(Dt.length>0){if(I&&Tt){const rt=Ae(Dt[0]);n.texStorage2D(r.TEXTURE_2D,St,Ot,rt.width,rt.height)}for(let rt=0,gt=Dt.length;rt<gt;rt++)Mt=Dt[rt],I?ot&&n.texSubImage2D(r.TEXTURE_2D,rt,0,0,Gt,tt,Mt):n.texImage2D(r.TEXTURE_2D,rt,Ot,Gt,tt,Mt);T.generateMipmaps=!1}else if(I){if(Tt){const rt=Ae(wt);n.texStorage2D(r.TEXTURE_2D,St,Ot,rt.width,rt.height)}ot&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Gt,tt,wt)}else n.texImage2D(r.TEXTURE_2D,0,Ot,Gt,tt,wt);S(T)&&E(W),zt.__version=$.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ft(L,T,P){if(T.image.length!==6)return;const W=Ut(L,T),ct=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+P);const $=a.get(ct);if(ct.version!==$.__version||W===!0){n.activeTexture(r.TEXTURE0+P);const zt=We.getPrimaries(We.workingColorSpace),Ct=T.colorSpace===Us?null:We.getPrimaries(T.colorSpace),Nt=T.colorSpace===Us||zt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,Gt=[];for(let gt=0;gt<6;gt++)!Kt&&!wt?Gt[gt]=A(T.image[gt],!0,o.maxCubemapSize):Gt[gt]=wt?T.image[gt].image:T.image[gt],Gt[gt]=le(T,Gt[gt]);const tt=Gt[0],Ot=c.convert(T.format,T.colorSpace),Mt=c.convert(T.type),Dt=C(T.internalFormat,Ot,Mt,T.colorSpace),I=T.isVideoTexture!==!0,Tt=$.__version===void 0||W===!0,ot=ct.dataReady;let St=G(T,tt);Et(r.TEXTURE_CUBE_MAP,T);let rt;if(Kt){I&&Tt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,St,Dt,tt.width,tt.height);for(let gt=0;gt<6;gt++){rt=Gt[gt].mipmaps;for(let yt=0;yt<rt.length;yt++){const Yt=rt[yt];T.format!==ca?Ot!==null?I?ot&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt,0,0,Yt.width,Yt.height,Ot,Yt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt,Dt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ot&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt,0,0,Yt.width,Yt.height,Ot,Mt,Yt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt,Dt,Yt.width,Yt.height,0,Ot,Mt,Yt.data)}}}else{if(rt=T.mipmaps,I&&Tt){rt.length>0&&St++;const gt=Ae(Gt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,St,Dt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(wt){I?ot&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Gt[gt].width,Gt[gt].height,Ot,Mt,Gt[gt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Dt,Gt[gt].width,Gt[gt].height,0,Ot,Mt,Gt[gt].data);for(let yt=0;yt<rt.length;yt++){const se=rt[yt].image[gt].image;I?ot&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt+1,0,0,se.width,se.height,Ot,Mt,se.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt+1,Dt,se.width,se.height,0,Ot,Mt,se.data)}}else{I?ot&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot,Mt,Gt[gt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Dt,Ot,Mt,Gt[gt]);for(let yt=0;yt<rt.length;yt++){const Yt=rt[yt];I?ot&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt+1,0,0,Ot,Mt,Yt.image[gt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt+1,Dt,Ot,Mt,Yt.image[gt])}}}S(T)&&E(r.TEXTURE_CUBE_MAP),$.__version=ct.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ht(L,T,P,W,ct,$){const zt=c.convert(P.format,P.colorSpace),Ct=c.convert(P.type),Nt=C(P.internalFormat,zt,Ct,P.colorSpace),Kt=a.get(T),wt=a.get(P);if(wt.__renderTarget=T,!Kt.__hasExternalTextures){const Gt=Math.max(1,T.width>>$),tt=Math.max(1,T.height>>$);ct===r.TEXTURE_3D||ct===r.TEXTURE_2D_ARRAY?n.texImage3D(ct,$,Nt,Gt,tt,T.depth,0,zt,Ct,null):n.texImage2D(ct,$,Nt,Gt,tt,0,zt,Ct,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),de(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,ct,wt.__webglTexture,0,Rt(T)):(ct===r.TEXTURE_2D||ct>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,ct,wt.__webglTexture,$),n.bindFramebuffer(r.FRAMEBUFFER,null)}function me(L,T,P){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const W=T.depthTexture,ct=W&&W.isDepthTexture?W.type:null,$=R(T.stencilBuffer,ct),zt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=Rt(T);de(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,$,T.width,T.height):P?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,L)}else{const W=T.textures;for(let ct=0;ct<W.length;ct++){const $=W[ct],zt=c.convert($.format,$.colorSpace),Ct=c.convert($.type),Nt=C($.internalFormat,zt,Ct,$.colorSpace),Kt=Rt(T);P&&de(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Nt,T.width,T.height):de(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Kt,Nt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Nt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ae(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=a.get(T.depthTexture);W.__renderTarget=T,(!W.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const ct=W.__webglTexture,$=Rt(T);if(T.depthTexture.format===Yl)de(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ct,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ct,0);else if(T.depthTexture.format===Ao)de(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ct,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Oe(L){const T=a.get(L),P=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const W=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),W){const ct=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,W.removeEventListener("dispose",ct)};W.addEventListener("dispose",ct),T.__depthDisposeCallback=ct}T.__boundDepthTexture=W}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const W=L.texture.mipmaps;W&&W.length>0?ae(T.__webglFramebuffer[0],L):ae(T.__webglFramebuffer,L)}else if(P){T.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[W]),T.__webglDepthbuffer[W]===void 0)T.__webglDepthbuffer[W]=r.createRenderbuffer(),me(T.__webglDepthbuffer[W],L,!1);else{const ct=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,$)}}else{const W=L.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),me(T.__webglDepthbuffer,L,!1);else{const ct=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,$)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(L,T,P){const W=a.get(L);T!==void 0&&Ht(W.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),P!==void 0&&Oe(L)}function jt(L){const T=L.texture,P=a.get(L),W=a.get(T);L.addEventListener("dispose",F);const ct=L.textures,$=L.isWebGLCubeRenderTarget===!0,zt=ct.length>1;if(zt||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=T.version,f.memory.textures++),$){P.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){P.__webglFramebuffer[Ct]=[];for(let Nt=0;Nt<T.mipmaps.length;Nt++)P.__webglFramebuffer[Ct][Nt]=r.createFramebuffer()}else P.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){P.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)P.__webglFramebuffer[Ct]=r.createFramebuffer()}else P.__webglFramebuffer=r.createFramebuffer();if(zt)for(let Ct=0,Nt=ct.length;Ct<Nt;Ct++){const Kt=a.get(ct[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&de(L)===!1){P.__webglMultisampledFramebuffer=r.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Ct=0;Ct<ct.length;Ct++){const Nt=ct[Ct];P.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,P.__webglColorRenderbuffer[Ct]);const Kt=c.convert(Nt.format,Nt.colorSpace),wt=c.convert(Nt.type),Gt=C(Nt.internalFormat,Kt,wt,Nt.colorSpace,L.isXRRenderTarget===!0),tt=Rt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Gt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,P.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(P.__webglDepthRenderbuffer=r.createRenderbuffer(),me(P.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){n.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Et(r.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Nt=0;Nt<T.mipmaps.length;Nt++)Ht(P.__webglFramebuffer[Ct][Nt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Nt);else Ht(P.__webglFramebuffer[Ct],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);S(T)&&E(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let Ct=0,Nt=ct.length;Ct<Nt;Ct++){const Kt=ct[Ct],wt=a.get(Kt);n.bindTexture(r.TEXTURE_2D,wt.__webglTexture),Et(r.TEXTURE_2D,Kt),Ht(P.__webglFramebuffer,L,Kt,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,0),S(Kt)&&E(r.TEXTURE_2D)}n.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ct,W.__webglTexture),Et(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Nt=0;Nt<T.mipmaps.length;Nt++)Ht(P.__webglFramebuffer[Nt],L,T,r.COLOR_ATTACHMENT0,Ct,Nt);else Ht(P.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,Ct,0);S(T)&&E(Ct),n.unbindTexture()}L.depthBuffer&&Oe(L)}function O(L){const T=L.textures;for(let P=0,W=T.length;P<W;P++){const ct=T[P];if(S(ct)){const $=U(L),zt=a.get(ct).__webglTexture;n.bindTexture($,zt),E($),n.unbindTexture()}}}const Bt=[],Zt=[];function qt(L){if(L.samples>0){if(de(L)===!1){const T=L.textures,P=L.width,W=L.height;let ct=r.COLOR_BUFFER_BIT;const $=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=a.get(L),Ct=T.length>1;if(Ct)for(let Kt=0;Kt<T.length;Kt++)n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Nt=L.texture.mipmaps;Nt&&Nt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ct|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ct|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Kt]);const wt=a.get(T[Kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,wt,0)}r.blitFramebuffer(0,0,P,W,0,0,P,W,ct,r.NEAREST),m===!0&&(Bt.length=0,Zt.length=0,Bt.push(r.COLOR_ATTACHMENT0+Kt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Bt.push($),Zt.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Bt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<T.length;Kt++){n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Kt]);const wt=a.get(T[Kt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.TEXTURE_2D,wt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Rt(L){return Math.min(o.maxSamples,L.samples)}function de(L){const T=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(L){const T=f.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function le(L,T){const P=L.colorSpace,W=L.format,ct=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||P!==Ro&&P!==Us&&(We.getTransfer(P)===sn?(W!==ca||ct!==ya)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),T}function Ae(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=st,this.setTexture2D=ft,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=Wt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=de}function t2(r,t){function n(a,o=Us){let c;const f=We.getTransfer(o);if(a===ya)return r.UNSIGNED_BYTE;if(a===rm)return r.UNSIGNED_SHORT_4_4_4_4;if(a===om)return r.UNSIGNED_SHORT_5_5_5_1;if(a===vE)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===gE)return r.BYTE;if(a===_E)return r.SHORT;if(a===kl)return r.UNSIGNED_SHORT;if(a===sm)return r.INT;if(a===mr)return r.UNSIGNED_INT;if(a===Ea)return r.FLOAT;if(a===zs)return r.HALF_FLOAT;if(a===xE)return r.ALPHA;if(a===EE)return r.RGB;if(a===ca)return r.RGBA;if(a===Yl)return r.DEPTH_COMPONENT;if(a===Ao)return r.DEPTH_STENCIL;if(a===lm)return r.RED;if(a===cm)return r.RED_INTEGER;if(a===SE)return r.RG;if(a===um)return r.RG_INTEGER;if(a===fm)return r.RGBA_INTEGER;if(a===Fu||a===Hu||a===Gu||a===Vu)if(f===sn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Fu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Fu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Hu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Sp||a===yp||a===Mp||a===Tp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Sp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===yp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Mp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Tp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ap||a===Rp||a===bp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ap||a===Rp)return f===sn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===bp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===wp||a===Cp||a===Dp||a===Np||a===Lp||a===Up||a===Pp||a===Op||a===Ip||a===zp||a===Bp||a===Fp||a===Hp||a===Gp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===wp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Cp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Dp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Np)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Lp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Up)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Pp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Op)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ip)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===zp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Bp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Fp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Hp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Gp)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ku||a===Vp||a===kp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===ku)return f===sn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Vp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===kp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===yE||a===Yp||a===Xp||a===Wp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===ku)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Yp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Xp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===To?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const e2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n2=`
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

}`;class i2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const o=new ui,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ni({vertexShader:e2,fragmentShader:n2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ve(new va(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a2 extends Do{constructor(t,n){super();const a=this;let o=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,v=null,x=null,y=null;const A=new i2,S=n.getContextAttributes();let E=null,U=null;const C=[],R=[],G=new oe;let H=null;const F=new Hi;F.viewport=new cn;const X=new Hi;X.viewport=new cn;const N=[F,X],w=new MA;let V=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let pt=C[nt];return pt===void 0&&(pt=new Nd,C[nt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let pt=C[nt];return pt===void 0&&(pt=new Nd,C[nt]=pt),pt.getGripSpace()},this.getHand=function(nt){let pt=C[nt];return pt===void 0&&(pt=new Nd,C[nt]=pt),pt.getHandSpace()};function ut(nt){const pt=R.indexOf(nt.inputSource);if(pt===-1)return;const Pt=C[pt];Pt!==void 0&&(Pt.update(nt.inputSource,nt.frame,p||f),Pt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function vt(){o.removeEventListener("select",ut),o.removeEventListener("selectstart",ut),o.removeEventListener("selectend",ut),o.removeEventListener("squeeze",ut),o.removeEventListener("squeezestart",ut),o.removeEventListener("squeezeend",ut),o.removeEventListener("end",vt),o.removeEventListener("inputsourceschange",ft);for(let nt=0;nt<C.length;nt++){const pt=R[nt];pt!==null&&(R[nt]=null,C[nt].disconnect(pt))}V=null,st=null,A.reset(),t.setRenderTarget(E),x=null,v=null,_=null,o=null,U=null,Ut.stop(),a.isPresenting=!1,t.setPixelRatio(H),t.setSize(G.width,G.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(nt){if(o=nt,o!==null){if(E=t.getRenderTarget(),o.addEventListener("select",ut),o.addEventListener("selectstart",ut),o.addEventListener("selectend",ut),o.addEventListener("squeeze",ut),o.addEventListener("squeezestart",ut),o.addEventListener("squeezeend",ut),o.addEventListener("end",vt),o.addEventListener("inputsourceschange",ft),S.xrCompatible!==!0&&await n.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Ft=null,Ht=null;S.depth&&(Ht=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Pt=S.stencil?Ao:Yl,Ft=S.stencil?To:mr);const me={colorFormat:n.RGBA8,depthFormat:Ht,scaleFactor:c};_=new XRWebGLBinding(o,n),v=_.createProjectionLayer(me),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new Ma(v.textureWidth,v.textureHeight,{format:ca,type:ya,depthTexture:new vm(v.textureWidth,v.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Pt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Pt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),U=new Ma(x.framebufferWidth,x.framebufferHeight,{format:ca,type:ya,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await o.requestReferenceSpace(h),Ut.setContext(o),Ut.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ft(nt){for(let pt=0;pt<nt.removed.length;pt++){const Pt=nt.removed[pt],Ft=R.indexOf(Pt);Ft>=0&&(R[Ft]=null,C[Ft].disconnect(Pt))}for(let pt=0;pt<nt.added.length;pt++){const Pt=nt.added[pt];let Ft=R.indexOf(Pt);if(Ft===-1){for(let me=0;me<C.length;me++)if(me>=R.length){R.push(Pt),Ft=me;break}else if(R[me]===null){R[me]=Pt,Ft=me;break}if(Ft===-1)break}const Ht=C[Ft];Ht&&Ht.connect(Pt)}}const B=new Z,j=new Z;function K(nt,pt,Pt){B.setFromMatrixPosition(pt.matrixWorld),j.setFromMatrixPosition(Pt.matrixWorld);const Ft=B.distanceTo(j),Ht=pt.projectionMatrix.elements,me=Pt.projectionMatrix.elements,ae=Ht[14]/(Ht[10]-1),Oe=Ht[14]/(Ht[10]+1),Wt=(Ht[9]+1)/Ht[5],jt=(Ht[9]-1)/Ht[5],O=(Ht[8]-1)/Ht[0],Bt=(me[8]+1)/me[0],Zt=ae*O,qt=ae*Bt,Rt=Ft/(-O+Bt),de=Rt*-O;if(pt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(de),nt.translateZ(Rt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ht[10]===-1)nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Xt=ae+Rt,le=Oe+Rt,Ae=Zt-de,L=qt+(Ft-de),T=Wt*Oe/le*Xt,P=jt*Oe/le*Xt;nt.projectionMatrix.makePerspective(Ae,L,T,P,Xt,le),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function At(nt,pt){pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(o===null)return;let pt=nt.near,Pt=nt.far;A.texture!==null&&(A.depthNear>0&&(pt=A.depthNear),A.depthFar>0&&(Pt=A.depthFar)),w.near=X.near=F.near=pt,w.far=X.far=F.far=Pt,(V!==w.near||st!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,st=w.far),F.layers.mask=nt.layers.mask|2,X.layers.mask=nt.layers.mask|4,w.layers.mask=F.layers.mask|X.layers.mask;const Ft=nt.parent,Ht=w.cameras;At(w,Ft);for(let me=0;me<Ht.length;me++)At(Ht[me],Ft);Ht.length===2?K(w,F,X):w.projectionMatrix.copy(F.projectionMatrix),z(nt,w,Ft)};function z(nt,pt,Pt){Pt===null?nt.matrix.copy(pt.matrixWorld):(nt.matrix.copy(Pt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Xl*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(nt){m=nt,v!==null&&(v.fixedFoveation=nt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=nt)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let it=null;function Et(nt,pt){if(g=pt.getViewerPose(p||f),y=pt,g!==null){const Pt=g.views;x!==null&&(t.setRenderTargetFramebuffer(U,x.framebuffer),t.setRenderTarget(U));let Ft=!1;Pt.length!==w.cameras.length&&(w.cameras.length=0,Ft=!0);for(let ae=0;ae<Pt.length;ae++){const Oe=Pt[ae];let Wt=null;if(x!==null)Wt=x.getViewport(Oe);else{const O=_.getViewSubImage(v,Oe);Wt=O.viewport,ae===0&&(t.setRenderTargetTextures(U,O.colorTexture,O.depthStencilTexture),t.setRenderTarget(U))}let jt=N[ae];jt===void 0&&(jt=new Hi,jt.layers.enable(ae),jt.viewport=new cn,N[ae]=jt),jt.matrix.fromArray(Oe.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Oe.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),ae===0&&(w.matrix.copy(jt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ft===!0&&w.cameras.push(jt)}const Ht=o.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const ae=_.getDepthInformation(Pt[0]);ae&&ae.isValid&&ae.texture&&A.init(t,ae,o.renderState)}}for(let Pt=0;Pt<C.length;Pt++){const Ft=R[Pt],Ht=C[Pt];Ft!==null&&Ht!==void 0&&Ht.update(Ft,pt,p||f)}it&&it(nt,pt),pt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:pt}),y=null}const Ut=new kE;Ut.setAnimationLoop(Et),this.setAnimationLoop=function(nt){it=nt},this.dispose=function(){}}}const sr=new Ta,s2=new un;function r2(r,t){function n(S,E){S.matrixAutoUpdate===!0&&S.updateMatrix(),E.value.copy(S.matrix)}function a(S,E){E.color.getRGB(S.fogColor.value,DE(r)),E.isFog?(S.fogNear.value=E.near,S.fogFar.value=E.far):E.isFogExp2&&(S.fogDensity.value=E.density)}function o(S,E,U,C,R){E.isMeshBasicMaterial||E.isMeshLambertMaterial?c(S,E):E.isMeshToonMaterial?(c(S,E),_(S,E)):E.isMeshPhongMaterial?(c(S,E),g(S,E)):E.isMeshStandardMaterial?(c(S,E),v(S,E),E.isMeshPhysicalMaterial&&x(S,E,R)):E.isMeshMatcapMaterial?(c(S,E),y(S,E)):E.isMeshDepthMaterial?c(S,E):E.isMeshDistanceMaterial?(c(S,E),A(S,E)):E.isMeshNormalMaterial?c(S,E):E.isLineBasicMaterial?(f(S,E),E.isLineDashedMaterial&&h(S,E)):E.isPointsMaterial?m(S,E,U,C):E.isSpriteMaterial?p(S,E):E.isShadowMaterial?(S.color.value.copy(E.color),S.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function c(S,E){S.opacity.value=E.opacity,E.color&&S.diffuse.value.copy(E.color),E.emissive&&S.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(S.map.value=E.map,n(E.map,S.mapTransform)),E.alphaMap&&(S.alphaMap.value=E.alphaMap,n(E.alphaMap,S.alphaMapTransform)),E.bumpMap&&(S.bumpMap.value=E.bumpMap,n(E.bumpMap,S.bumpMapTransform),S.bumpScale.value=E.bumpScale,E.side===Ei&&(S.bumpScale.value*=-1)),E.normalMap&&(S.normalMap.value=E.normalMap,n(E.normalMap,S.normalMapTransform),S.normalScale.value.copy(E.normalScale),E.side===Ei&&S.normalScale.value.negate()),E.displacementMap&&(S.displacementMap.value=E.displacementMap,n(E.displacementMap,S.displacementMapTransform),S.displacementScale.value=E.displacementScale,S.displacementBias.value=E.displacementBias),E.emissiveMap&&(S.emissiveMap.value=E.emissiveMap,n(E.emissiveMap,S.emissiveMapTransform)),E.specularMap&&(S.specularMap.value=E.specularMap,n(E.specularMap,S.specularMapTransform)),E.alphaTest>0&&(S.alphaTest.value=E.alphaTest);const U=t.get(E),C=U.envMap,R=U.envMapRotation;C&&(S.envMap.value=C,sr.copy(R),sr.x*=-1,sr.y*=-1,sr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),S.envMapRotation.value.setFromMatrix4(s2.makeRotationFromEuler(sr)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=E.reflectivity,S.ior.value=E.ior,S.refractionRatio.value=E.refractionRatio),E.lightMap&&(S.lightMap.value=E.lightMap,S.lightMapIntensity.value=E.lightMapIntensity,n(E.lightMap,S.lightMapTransform)),E.aoMap&&(S.aoMap.value=E.aoMap,S.aoMapIntensity.value=E.aoMapIntensity,n(E.aoMap,S.aoMapTransform))}function f(S,E){S.diffuse.value.copy(E.color),S.opacity.value=E.opacity,E.map&&(S.map.value=E.map,n(E.map,S.mapTransform))}function h(S,E){S.dashSize.value=E.dashSize,S.totalSize.value=E.dashSize+E.gapSize,S.scale.value=E.scale}function m(S,E,U,C){S.diffuse.value.copy(E.color),S.opacity.value=E.opacity,S.size.value=E.size*U,S.scale.value=C*.5,E.map&&(S.map.value=E.map,n(E.map,S.uvTransform)),E.alphaMap&&(S.alphaMap.value=E.alphaMap,n(E.alphaMap,S.alphaMapTransform)),E.alphaTest>0&&(S.alphaTest.value=E.alphaTest)}function p(S,E){S.diffuse.value.copy(E.color),S.opacity.value=E.opacity,S.rotation.value=E.rotation,E.map&&(S.map.value=E.map,n(E.map,S.mapTransform)),E.alphaMap&&(S.alphaMap.value=E.alphaMap,n(E.alphaMap,S.alphaMapTransform)),E.alphaTest>0&&(S.alphaTest.value=E.alphaTest)}function g(S,E){S.specular.value.copy(E.specular),S.shininess.value=Math.max(E.shininess,1e-4)}function _(S,E){E.gradientMap&&(S.gradientMap.value=E.gradientMap)}function v(S,E){S.metalness.value=E.metalness,E.metalnessMap&&(S.metalnessMap.value=E.metalnessMap,n(E.metalnessMap,S.metalnessMapTransform)),S.roughness.value=E.roughness,E.roughnessMap&&(S.roughnessMap.value=E.roughnessMap,n(E.roughnessMap,S.roughnessMapTransform)),E.envMap&&(S.envMapIntensity.value=E.envMapIntensity)}function x(S,E,U){S.ior.value=E.ior,E.sheen>0&&(S.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),S.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(S.sheenColorMap.value=E.sheenColorMap,n(E.sheenColorMap,S.sheenColorMapTransform)),E.sheenRoughnessMap&&(S.sheenRoughnessMap.value=E.sheenRoughnessMap,n(E.sheenRoughnessMap,S.sheenRoughnessMapTransform))),E.clearcoat>0&&(S.clearcoat.value=E.clearcoat,S.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(S.clearcoatMap.value=E.clearcoatMap,n(E.clearcoatMap,S.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,n(E.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(S.clearcoatNormalMap.value=E.clearcoatNormalMap,n(E.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===Ei&&S.clearcoatNormalScale.value.negate())),E.dispersion>0&&(S.dispersion.value=E.dispersion),E.iridescence>0&&(S.iridescence.value=E.iridescence,S.iridescenceIOR.value=E.iridescenceIOR,S.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap&&(S.iridescenceMap.value=E.iridescenceMap,n(E.iridescenceMap,S.iridescenceMapTransform)),E.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=E.iridescenceThicknessMap,n(E.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),E.transmission>0&&(S.transmission.value=E.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),E.transmissionMap&&(S.transmissionMap.value=E.transmissionMap,n(E.transmissionMap,S.transmissionMapTransform)),S.thickness.value=E.thickness,E.thicknessMap&&(S.thicknessMap.value=E.thicknessMap,n(E.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=E.attenuationDistance,S.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(S.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(S.anisotropyMap.value=E.anisotropyMap,n(E.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=E.specularIntensity,S.specularColor.value.copy(E.specularColor),E.specularColorMap&&(S.specularColorMap.value=E.specularColorMap,n(E.specularColorMap,S.specularColorMapTransform)),E.specularIntensityMap&&(S.specularIntensityMap.value=E.specularIntensityMap,n(E.specularIntensityMap,S.specularIntensityMapTransform))}function y(S,E){E.matcap&&(S.matcap.value=E.matcap)}function A(S,E){const U=t.get(E).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function o2(r,t,n,a){let o={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,C){const R=C.program;a.uniformBlockBinding(U,R)}function p(U,C){let R=o[U.id];R===void 0&&(y(U),R=g(U),o[U.id]=R,U.addEventListener("dispose",S));const G=C.program;a.updateUBOMapping(U,G);const H=t.render.frame;c[U.id]!==H&&(v(U),c[U.id]=H)}function g(U){const C=_();U.__bindingPointIndex=C;const R=r.createBuffer(),G=U.__size,H=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,G,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,R),R}function _(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const C=o[U.id],R=U.uniforms,G=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let H=0,F=R.length;H<F;H++){const X=Array.isArray(R[H])?R[H]:[R[H]];for(let N=0,w=X.length;N<w;N++){const V=X[N];if(x(V,H,N,G)===!0){const st=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let vt=0;for(let ft=0;ft<ut.length;ft++){const B=ut[ft],j=A(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,st+vt,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,vt),vt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,st,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(U,C,R,G){const H=U.value,F=C+"_"+R;if(G[F]===void 0)return typeof H=="number"||typeof H=="boolean"?G[F]=H:G[F]=H.clone(),!0;{const X=G[F];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return G[F]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function y(U){const C=U.uniforms;let R=0;const G=16;for(let F=0,X=C.length;F<X;F++){const N=Array.isArray(C[F])?C[F]:[C[F]];for(let w=0,V=N.length;w<V;w++){const st=N[w],ut=Array.isArray(st.value)?st.value:[st.value];for(let vt=0,ft=ut.length;vt<ft;vt++){const B=ut[vt],j=A(B),K=R%G,At=K%j.boundary,z=K+At;R+=At,z!==0&&G-z<j.storage&&(R+=G-z),st.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=R,R+=j.storage}}}const H=R%G;return H>0&&(R+=G-H),U.__size=R,U.__cache={},this}function A(U){const C={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(C.boundary=4,C.storage=4):U.isVector2?(C.boundary=8,C.storage=8):U.isVector3||U.isColor?(C.boundary=16,C.storage=12):U.isVector4?(C.boundary=16,C.storage=16):U.isMatrix3?(C.boundary=48,C.storage=48):U.isMatrix4?(C.boundary=64,C.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),C}function S(U){const C=U.target;C.removeEventListener("dispose",S);const R=f.indexOf(C.__bindingPointIndex);f.splice(R,1),r.deleteBuffer(o[C.id]),delete o[C.id],delete c[C.id]}function E(){for(const U in o)r.deleteBuffer(o[U]);f=[],o={},c={}}return{bind:m,update:p,dispose:E}}class l2{constructor(t={}){const{canvas:n=tT(),context:a=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=f;const y=new Uint32Array(4),A=new Int32Array(4);let S=null,E=null;const U=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let G=!1;this._outputColorSpace=Ji;let H=0,F=0,X=null,N=-1,w=null;const V=new cn,st=new cn;let ut=null;const vt=new Me(0);let ft=0,B=n.width,j=n.height,K=1,At=null,z=null;const it=new cn(0,0,B,j),Et=new cn(0,0,B,j);let Ut=!1;const nt=new _m;let pt=!1,Pt=!1;const Ft=new un,Ht=new un,me=new Z,ae=new cn,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function jt(){return X===null?K:1}let O=a;function Bt(D,et){return n.getContext(D,et)}try{const D={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${am}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",rt,!1),n.addEventListener("webglcontextcreationerror",gt,!1),O===null){const et="webgl2";if(O=Bt(et,D),O===null)throw Bt(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Zt,qt,Rt,de,Xt,le,Ae,L,T,P,W,ct,$,zt,Ct,Nt,Kt,wt,Gt,tt,Ot,Mt,Dt,I;function Tt(){Zt=new vb(O),Zt.init(),Mt=new t2(O,Zt),qt=new fb(O,Zt,t,Mt),Rt=new Jw(O,Zt),qt.reverseDepthBuffer&&v&&Rt.buffers.depth.setReversed(!0),de=new Sb(O),Xt=new Fw,le=new $w(O,Zt,Rt,Xt,qt,Mt,de),Ae=new db(R),L=new _b(R),T=new bA(O),Dt=new cb(O,T),P=new xb(O,T,de,Dt),W=new Mb(O,P,T,de),Gt=new yb(O,qt,le),Nt=new hb(Xt),ct=new Bw(R,Ae,L,Zt,qt,Dt,Nt),$=new r2(R,Xt),zt=new Gw,Ct=new qw(Zt),wt=new lb(R,Ae,L,Rt,W,x,m),Kt=new Kw(R,W,qt),I=new o2(O,de,qt,Rt),tt=new ub(O,Zt,de),Ot=new Eb(O,Zt,de),de.programs=ct.programs,R.capabilities=qt,R.extensions=Zt,R.properties=Xt,R.renderLists=zt,R.shadowMap=Kt,R.state=Rt,R.info=de}Tt();const ot=new a2(R,O);this.xr=ot,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const D=Zt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Zt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(D){D!==void 0&&(K=D,this.setSize(B,j,!1))},this.getSize=function(D){return D.set(B,j)},this.setSize=function(D,et,Q=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,j=et,n.width=Math.floor(D*K),n.height=Math.floor(et*K),Q===!0&&(n.style.width=D+"px",n.style.height=et+"px"),this.setViewport(0,0,D,et)},this.getDrawingBufferSize=function(D){return D.set(B*K,j*K).floor()},this.setDrawingBufferSize=function(D,et,Q){B=D,j=et,K=Q,n.width=Math.floor(D*Q),n.height=Math.floor(et*Q),this.setViewport(0,0,D,et)},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(it)},this.setViewport=function(D,et,Q,lt){D.isVector4?it.set(D.x,D.y,D.z,D.w):it.set(D,et,Q,lt),Rt.viewport(V.copy(it).multiplyScalar(K).round())},this.getScissor=function(D){return D.copy(Et)},this.setScissor=function(D,et,Q,lt){D.isVector4?Et.set(D.x,D.y,D.z,D.w):Et.set(D,et,Q,lt),Rt.scissor(st.copy(Et).multiplyScalar(K).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(D){Rt.setScissorTest(Ut=D)},this.setOpaqueSort=function(D){At=D},this.setTransparentSort=function(D){z=D},this.getClearColor=function(D){return D.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(D=!0,et=!0,Q=!0){let lt=0;if(D){let J=!1;if(X!==null){const kt=X.texture.format;J=kt===fm||kt===um||kt===cm}if(J){const kt=X.texture.type,Jt=kt===ya||kt===mr||kt===kl||kt===To||kt===rm||kt===om,ne=wt.getClearColor(),ie=wt.getClearAlpha(),Ee=ne.r,ge=ne.g,he=ne.b;Jt?(y[0]=Ee,y[1]=ge,y[2]=he,y[3]=ie,O.clearBufferuiv(O.COLOR,0,y)):(A[0]=Ee,A[1]=ge,A[2]=he,A[3]=ie,O.clearBufferiv(O.COLOR,0,A))}else lt|=O.COLOR_BUFFER_BIT}et&&(lt|=O.DEPTH_BUFFER_BIT),Q&&(lt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",gt,!1),wt.dispose(),zt.dispose(),Ct.dispose(),Xt.dispose(),Ae.dispose(),L.dispose(),W.dispose(),Dt.dispose(),I.dispose(),ct.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",be),ot.removeEventListener("sessionend",we),Sn.stop()};function St(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const D=de.autoReset,et=Kt.enabled,Q=Kt.autoUpdate,lt=Kt.needsUpdate,J=Kt.type;Tt(),de.autoReset=D,Kt.enabled=et,Kt.autoUpdate=Q,Kt.needsUpdate=lt,Kt.type=J}function gt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function yt(D){const et=D.target;et.removeEventListener("dispose",yt),Yt(et)}function Yt(D){se(D),Xt.remove(D)}function se(D){const et=Xt.get(D).programs;et!==void 0&&(et.forEach(function(Q){ct.releaseProgram(Q)}),D.isShaderMaterial&&ct.releaseShaderCache(D))}this.renderBufferDirect=function(D,et,Q,lt,J,kt){et===null&&(et=Oe);const Jt=J.isMesh&&J.matrixWorld.determinant()<0,ne=tn(D,et,Q,lt,J);Rt.setMaterial(lt,Jt);let ie=Q.index,Ee=1;if(lt.wireframe===!0){if(ie=P.getWireframeAttribute(Q),ie===void 0)return;Ee=2}const ge=Q.drawRange,he=Q.attributes.position;let Ue=ge.start*Ee,Qe=(ge.start+ge.count)*Ee;kt!==null&&(Ue=Math.max(Ue,kt.start*Ee),Qe=Math.min(Qe,(kt.start+kt.count)*Ee)),ie!==null?(Ue=Math.max(Ue,0),Qe=Math.min(Qe,ie.count)):he!=null&&(Ue=Math.max(Ue,0),Qe=Math.min(Qe,he.count));const mn=Qe-Ue;if(mn<0||mn===1/0)return;Dt.setup(J,lt,ne,Q,ie);let Ve,ke=tt;if(ie!==null&&(Ve=T.get(ie),ke=Ot,ke.setIndex(Ve)),J.isMesh)lt.wireframe===!0?(Rt.setLineWidth(lt.wireframeLinewidth*jt()),ke.setMode(O.LINES)):ke.setMode(O.TRIANGLES);else if(J.isLine){let _e=lt.linewidth;_e===void 0&&(_e=1),Rt.setLineWidth(_e*jt()),J.isLineSegments?ke.setMode(O.LINES):J.isLineLoop?ke.setMode(O.LINE_LOOP):ke.setMode(O.LINE_STRIP)}else J.isPoints?ke.setMode(O.POINTS):J.isSprite&&ke.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ke.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))ke.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const _e=J._multiDrawStarts,An=J._multiDrawCounts,Xe=J._multiDrawCount,ai=ie?T.get(ie).bytesPerElement:1,ns=Xt.get(lt).currentProgram.getUniforms();for(let gn=0;gn<Xe;gn++)ns.setValue(O,"_gl_DrawID",gn),ke.render(_e[gn]/ai,An[gn])}else if(J.isInstancedMesh)ke.renderInstances(Ue,mn,J.count);else if(Q.isInstancedBufferGeometry){const _e=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,An=Math.min(Q.instanceCount,_e);ke.renderInstances(Ue,mn,An)}else ke.render(Ue,mn)};function Qt(D,et,Q){D.transparent===!0&&D.side===jn&&D.forceSinglePass===!1?(D.side=Ei,D.needsUpdate=!0,ee(D,et,Q),D.side=Is,D.needsUpdate=!0,ee(D,et,Q),D.side=jn):ee(D,et,Q)}this.compile=function(D,et,Q=null){Q===null&&(Q=D),E=Ct.get(Q),E.init(et),C.push(E),Q.traverseVisible(function(J){J.isLight&&J.layers.test(et.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),D!==Q&&D.traverseVisible(function(J){J.isLight&&J.layers.test(et.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),E.setupLights();const lt=new Set;return D.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const kt=J.material;if(kt)if(Array.isArray(kt))for(let Jt=0;Jt<kt.length;Jt++){const ne=kt[Jt];Qt(ne,Q,J),lt.add(ne)}else Qt(kt,Q,J),lt.add(kt)}),E=C.pop(),lt},this.compileAsync=function(D,et,Q=null){const lt=this.compile(D,et,Q);return new Promise(J=>{function kt(){if(lt.forEach(function(Jt){Xt.get(Jt).currentProgram.isReady()&&lt.delete(Jt)}),lt.size===0){J(D);return}setTimeout(kt,10)}Zt.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let $e=null;function fe(D){$e&&$e(D)}function be(){Sn.stop()}function we(){Sn.start()}const Sn=new kE;Sn.setAnimationLoop(fe),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(D){$e=D,ot.setAnimationLoop(D),D===null?Sn.stop():Sn.start()},ot.addEventListener("sessionstart",be),ot.addEventListener("sessionend",we),this.render=function(D,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(et),et=ot.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,et,X),E=Ct.get(D,C.length),E.init(et),C.push(E),Ht.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),nt.setFromProjectionMatrix(Ht),Pt=this.localClippingEnabled,pt=Nt.init(this.clippingPlanes,Pt),S=zt.get(D,U.length),S.init(),U.push(S),ot.enabled===!0&&ot.isPresenting===!0){const kt=R.xr.getDepthSensingMesh();kt!==null&&pn(kt,et,-1/0,R.sortObjects)}pn(D,et,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(At,z),Wt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Wt&&wt.addToRenderList(S,D),this.info.render.frame++,pt===!0&&Nt.beginShadows();const Q=E.state.shadowsArray;Kt.render(Q,D,et),pt===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,J=S.transmissive;if(E.setupLights(),et.isArrayCamera){const kt=et.cameras;if(J.length>0)for(let Jt=0,ne=kt.length;Jt<ne;Jt++){const ie=kt[Jt];qe(lt,J,D,ie)}Wt&&wt.render(D);for(let Jt=0,ne=kt.length;Jt<ne;Jt++){const ie=kt[Jt];Ke(S,D,ie,ie.viewport)}}else J.length>0&&qe(lt,J,D,et),Wt&&wt.render(D),Ke(S,D,et);X!==null&&F===0&&(le.updateMultisampleRenderTarget(X),le.updateRenderTargetMipmap(X)),D.isScene===!0&&D.onAfterRender(R,D,et),Dt.resetDefaultState(),N=-1,w=null,C.pop(),C.length>0?(E=C[C.length-1],pt===!0&&Nt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function pn(D,et,Q,lt){if(D.visible===!1)return;if(D.layers.test(et.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(et);else if(D.isLight)E.pushLight(D),D.castShadow&&E.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||nt.intersectsSprite(D)){lt&&ae.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ht);const Jt=W.update(D),ne=D.material;ne.visible&&S.push(D,Jt,ne,Q,ae.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||nt.intersectsObject(D))){const Jt=W.update(D),ne=D.material;if(lt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ae.copy(D.boundingSphere.center)):(Jt.boundingSphere===null&&Jt.computeBoundingSphere(),ae.copy(Jt.boundingSphere.center)),ae.applyMatrix4(D.matrixWorld).applyMatrix4(Ht)),Array.isArray(ne)){const ie=Jt.groups;for(let Ee=0,ge=ie.length;Ee<ge;Ee++){const he=ie[Ee],Ue=ne[he.materialIndex];Ue&&Ue.visible&&S.push(D,Jt,Ue,Q,ae.z,he)}}else ne.visible&&S.push(D,Jt,ne,Q,ae.z,null)}}const kt=D.children;for(let Jt=0,ne=kt.length;Jt<ne;Jt++)pn(kt[Jt],et,Q,lt)}function Ke(D,et,Q,lt){const J=D.opaque,kt=D.transmissive,Jt=D.transparent;E.setupLightsView(Q),pt===!0&&Nt.setGlobalState(R.clippingPlanes,Q),lt&&Rt.viewport(V.copy(lt)),J.length>0&&Qn(J,et,Q),kt.length>0&&Qn(kt,et,Q),Jt.length>0&&Qn(Jt,et,Q),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function qe(D,et,Q,lt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[lt.id]===void 0&&(E.state.transmissionRenderTarget[lt.id]=new Ma(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?zs:ya,minFilter:fr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const kt=E.state.transmissionRenderTarget[lt.id],Jt=lt.viewport||V;kt.setSize(Jt.z*R.transmissionResolutionScale,Jt.w*R.transmissionResolutionScale);const ne=R.getRenderTarget();R.setRenderTarget(kt),R.getClearColor(vt),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),Wt&&wt.render(Q);const ie=R.toneMapping;R.toneMapping=Os;const Ee=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),E.setupLightsView(lt),pt===!0&&Nt.setGlobalState(R.clippingPlanes,lt),Qn(D,Q,lt),le.updateMultisampleRenderTarget(kt),le.updateRenderTargetMipmap(kt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let he=0,Ue=et.length;he<Ue;he++){const Qe=et[he],mn=Qe.object,Ve=Qe.geometry,ke=Qe.material,_e=Qe.group;if(ke.side===jn&&mn.layers.test(lt.layers)){const An=ke.side;ke.side=Ei,ke.needsUpdate=!0,re(mn,Q,lt,Ve,ke,_e),ke.side=An,ke.needsUpdate=!0,ge=!0}}ge===!0&&(le.updateMultisampleRenderTarget(kt),le.updateRenderTargetMipmap(kt))}R.setRenderTarget(ne),R.setClearColor(vt,ft),Ee!==void 0&&(lt.viewport=Ee),R.toneMapping=ie}function Qn(D,et,Q){const lt=et.isScene===!0?et.overrideMaterial:null;for(let J=0,kt=D.length;J<kt;J++){const Jt=D[J],ne=Jt.object,ie=Jt.geometry,Ee=Jt.group;let ge=Jt.material;ge.allowOverride===!0&&lt!==null&&(ge=lt),ne.layers.test(Q.layers)&&re(ne,et,Q,ie,ge,Ee)}}function re(D,et,Q,lt,J,kt){D.onBeforeRender(R,et,Q,lt,J,kt),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(R,et,Q,lt,D,kt),J.transparent===!0&&J.side===jn&&J.forceSinglePass===!1?(J.side=Ei,J.needsUpdate=!0,R.renderBufferDirect(Q,et,lt,J,D,kt),J.side=Is,J.needsUpdate=!0,R.renderBufferDirect(Q,et,lt,J,D,kt),J.side=jn):R.renderBufferDirect(Q,et,lt,J,D,kt),D.onAfterRender(R,et,Q,lt,J,kt)}function ee(D,et,Q){et.isScene!==!0&&(et=Oe);const lt=Xt.get(D),J=E.state.lights,kt=E.state.shadowsArray,Jt=J.state.version,ne=ct.getParameters(D,J.state,kt,et,Q),ie=ct.getProgramCacheKey(ne);let Ee=lt.programs;lt.environment=D.isMeshStandardMaterial?et.environment:null,lt.fog=et.fog,lt.envMap=(D.isMeshStandardMaterial?L:Ae).get(D.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&D.envMap===null?et.environmentRotation:D.envMapRotation,Ee===void 0&&(D.addEventListener("dispose",yt),Ee=new Map,lt.programs=Ee);let ge=Ee.get(ie);if(ge!==void 0){if(lt.currentProgram===ge&&lt.lightsStateVersion===Jt)return Le(D,ne),ge}else ne.uniforms=ct.getUniforms(D),D.onBeforeCompile(ne,R),ge=ct.acquireProgram(ne,ie),Ee.set(ie,ge),lt.uniforms=ne.uniforms;const he=lt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(he.clippingPlanes=Nt.uniform),Le(D,ne),lt.needsLights=Ie(D),lt.lightsStateVersion=Jt,lt.needsLights&&(he.ambientLightColor.value=J.state.ambient,he.lightProbe.value=J.state.probe,he.directionalLights.value=J.state.directional,he.directionalLightShadows.value=J.state.directionalShadow,he.spotLights.value=J.state.spot,he.spotLightShadows.value=J.state.spotShadow,he.rectAreaLights.value=J.state.rectArea,he.ltc_1.value=J.state.rectAreaLTC1,he.ltc_2.value=J.state.rectAreaLTC2,he.pointLights.value=J.state.point,he.pointLightShadows.value=J.state.pointShadow,he.hemisphereLights.value=J.state.hemi,he.directionalShadowMap.value=J.state.directionalShadowMap,he.directionalShadowMatrix.value=J.state.directionalShadowMatrix,he.spotShadowMap.value=J.state.spotShadowMap,he.spotLightMatrix.value=J.state.spotLightMatrix,he.spotLightMap.value=J.state.spotLightMap,he.pointShadowMap.value=J.state.pointShadowMap,he.pointShadowMatrix.value=J.state.pointShadowMatrix),lt.currentProgram=ge,lt.uniformsList=null,ge}function $t(D){if(D.uniformsList===null){const et=D.currentProgram.getUniforms();D.uniformsList=Yu.seqWithValue(et.seq,D.uniforms)}return D.uniformsList}function Le(D,et){const Q=Xt.get(D);Q.outputColorSpace=et.outputColorSpace,Q.batching=et.batching,Q.batchingColor=et.batchingColor,Q.instancing=et.instancing,Q.instancingColor=et.instancingColor,Q.instancingMorph=et.instancingMorph,Q.skinning=et.skinning,Q.morphTargets=et.morphTargets,Q.morphNormals=et.morphNormals,Q.morphColors=et.morphColors,Q.morphTargetsCount=et.morphTargetsCount,Q.numClippingPlanes=et.numClippingPlanes,Q.numIntersection=et.numClipIntersection,Q.vertexAlphas=et.vertexAlphas,Q.vertexTangents=et.vertexTangents,Q.toneMapping=et.toneMapping}function tn(D,et,Q,lt,J){et.isScene!==!0&&(et=Oe),le.resetTextureUnits();const kt=et.fog,Jt=lt.isMeshStandardMaterial?et.environment:null,ne=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ro,ie=(lt.isMeshStandardMaterial?L:Ae).get(lt.envMap||Jt),Ee=lt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ge=!!Q.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),he=!!Q.morphAttributes.position,Ue=!!Q.morphAttributes.normal,Qe=!!Q.morphAttributes.color;let mn=Os;lt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(mn=R.toneMapping);const Ve=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ke=Ve!==void 0?Ve.length:0,_e=Xt.get(lt),An=E.state.lights;if(pt===!0&&(Pt===!0||D!==w)){const Vn=D===w&&lt.id===N;Nt.setState(lt,D,Vn)}let Xe=!1;lt.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==An.state.version||_e.outputColorSpace!==ne||J.isBatchedMesh&&_e.batching===!1||!J.isBatchedMesh&&_e.batching===!0||J.isBatchedMesh&&_e.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&_e.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&_e.instancing===!1||!J.isInstancedMesh&&_e.instancing===!0||J.isSkinnedMesh&&_e.skinning===!1||!J.isSkinnedMesh&&_e.skinning===!0||J.isInstancedMesh&&_e.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&_e.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&_e.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&_e.instancingMorph===!1&&J.morphTexture!==null||_e.envMap!==ie||lt.fog===!0&&_e.fog!==kt||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Nt.numPlanes||_e.numIntersection!==Nt.numIntersection)||_e.vertexAlphas!==Ee||_e.vertexTangents!==ge||_e.morphTargets!==he||_e.morphNormals!==Ue||_e.morphColors!==Qe||_e.toneMapping!==mn||_e.morphTargetsCount!==ke)&&(Xe=!0):(Xe=!0,_e.__version=lt.version);let ai=_e.currentProgram;Xe===!0&&(ai=ee(lt,et,J));let ns=!1,gn=!1,Ra=!1;const fn=ai.getUniforms(),si=_e.uniforms;if(Rt.useProgram(ai.program)&&(ns=!0,gn=!0,Ra=!0),lt.id!==N&&(N=lt.id,gn=!0),ns||w!==D){Rt.buffers.depth.getReversed()?(Ft.copy(D.projectionMatrix),nT(Ft),iT(Ft),fn.setValue(O,"projectionMatrix",Ft)):fn.setValue(O,"projectionMatrix",D.projectionMatrix),fn.setValue(O,"viewMatrix",D.matrixWorldInverse);const Jn=fn.map.cameraPosition;Jn!==void 0&&Jn.setValue(O,me.setFromMatrixPosition(D.matrixWorld)),qt.logarithmicDepthBuffer&&fn.setValue(O,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&fn.setValue(O,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,gn=!0,Ra=!0)}if(J.isSkinnedMesh){fn.setOptional(O,J,"bindMatrix"),fn.setOptional(O,J,"bindMatrixInverse");const Vn=J.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),fn.setValue(O,"boneTexture",Vn.boneTexture,le))}J.isBatchedMesh&&(fn.setOptional(O,J,"batchingTexture"),fn.setValue(O,"batchingTexture",J._matricesTexture,le),fn.setOptional(O,J,"batchingIdTexture"),fn.setValue(O,"batchingIdTexture",J._indirectTexture,le),fn.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&fn.setValue(O,"batchingColorTexture",J._colorsTexture,le));const In=Q.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Gt.update(J,Q,ai),(gn||_e.receiveShadow!==J.receiveShadow)&&(_e.receiveShadow=J.receiveShadow,fn.setValue(O,"receiveShadow",J.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(si.envMap.value=ie,si.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&et.environment!==null&&(si.envMapIntensity.value=et.environmentIntensity),gn&&(fn.setValue(O,"toneMappingExposure",R.toneMappingExposure),_e.needsLights&&en(si,Ra),kt&&lt.fog===!0&&$.refreshFogUniforms(si,kt),$.refreshMaterialUniforms(si,lt,K,j,E.state.transmissionRenderTarget[D.id]),Yu.upload(O,$t(_e),si,le)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Yu.upload(O,$t(_e),si,le),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&fn.setValue(O,"center",J.center),fn.setValue(O,"modelViewMatrix",J.modelViewMatrix),fn.setValue(O,"normalMatrix",J.normalMatrix),fn.setValue(O,"modelMatrix",J.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Vn=lt.uniformsGroups;for(let Jn=0,ua=Vn.length;Jn<ua;Jn++){const ba=Vn[Jn];I.update(ba,ai),I.bind(ba,ai)}}return ai}function en(D,et){D.ambientLightColor.needsUpdate=et,D.lightProbe.needsUpdate=et,D.directionalLights.needsUpdate=et,D.directionalLightShadows.needsUpdate=et,D.pointLights.needsUpdate=et,D.pointLightShadows.needsUpdate=et,D.spotLights.needsUpdate=et,D.spotLightShadows.needsUpdate=et,D.rectAreaLights.needsUpdate=et,D.hemisphereLights.needsUpdate=et}function Ie(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(D,et,Q){const lt=Xt.get(D);lt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Xt.get(D.texture).__webglTexture=et,Xt.get(D.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:Q,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,et){const Q=Xt.get(D);Q.__webglFramebuffer=et,Q.__useDefaultFramebuffer=et===void 0};const yi=O.createFramebuffer();this.setRenderTarget=function(D,et=0,Q=0){X=D,H=et,F=Q;let lt=!0,J=null,kt=!1,Jt=!1;if(D){const ie=Xt.get(D);if(ie.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(O.FRAMEBUFFER,null),lt=!1;else if(ie.__webglFramebuffer===void 0)le.setupRenderTarget(D);else if(ie.__hasExternalTextures)le.rebindTextures(D,Xt.get(D.texture).__webglTexture,Xt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const he=D.depthTexture;if(ie.__boundDepthTexture!==he){if(he!==null&&Xt.has(he)&&(D.width!==he.image.width||D.height!==he.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(D)}}const Ee=D.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Jt=!0);const ge=Xt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ge[et])?J=ge[et][Q]:J=ge[et],kt=!0):D.samples>0&&le.useMultisampledRTT(D)===!1?J=Xt.get(D).__webglMultisampledFramebuffer:Array.isArray(ge)?J=ge[Q]:J=ge,V.copy(D.viewport),st.copy(D.scissor),ut=D.scissorTest}else V.copy(it).multiplyScalar(K).floor(),st.copy(Et).multiplyScalar(K).floor(),ut=Ut;if(Q!==0&&(J=yi),Rt.bindFramebuffer(O.FRAMEBUFFER,J)&&lt&&Rt.drawBuffers(D,J),Rt.viewport(V),Rt.scissor(st),Rt.setScissorTest(ut),kt){const ie=Xt.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+et,ie.__webglTexture,Q)}else if(Jt){const ie=Xt.get(D.texture),Ee=et;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ie.__webglTexture,Q,Ee)}else if(D!==null&&Q!==0){const ie=Xt.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ie.__webglTexture,Q)}N=-1},this.readRenderTargetPixels=function(D,et,Q,lt,J,kt,Jt,ne=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Xt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Jt!==void 0&&(ie=ie[Jt]),ie){Rt.bindFramebuffer(O.FRAMEBUFFER,ie);try{const Ee=D.textures[ne],ge=Ee.format,he=Ee.type;if(!qt.textureFormatReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=D.width-lt&&Q>=0&&Q<=D.height-J&&(D.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ne),O.readPixels(et,Q,lt,J,Mt.convert(ge),Mt.convert(he),kt))}finally{const Ee=X!==null?Xt.get(X).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(D,et,Q,lt,J,kt,Jt,ne=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=Xt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Jt!==void 0&&(ie=ie[Jt]),ie)if(et>=0&&et<=D.width-lt&&Q>=0&&Q<=D.height-J){Rt.bindFramebuffer(O.FRAMEBUFFER,ie);const Ee=D.textures[ne],ge=Ee.format,he=Ee.type;if(!qt.textureFormatReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ue),O.bufferData(O.PIXEL_PACK_BUFFER,kt.byteLength,O.STREAM_READ),D.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ne),O.readPixels(et,Q,lt,J,Mt.convert(ge),Mt.convert(he),0);const Qe=X!==null?Xt.get(X).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,Qe);const mn=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await eT(O,mn,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ue),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,kt),O.deleteBuffer(Ue),O.deleteSync(mn),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,et=null,Q=0){const lt=Math.pow(2,-Q),J=Math.floor(D.image.width*lt),kt=Math.floor(D.image.height*lt),Jt=et!==null?et.x:0,ne=et!==null?et.y:0;le.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Jt,ne,J,kt),Rt.unbindTexture()};const $i=O.createFramebuffer(),fi=O.createFramebuffer();this.copyTextureToTexture=function(D,et,Q=null,lt=null,J=0,kt=null){kt===null&&(J!==0?(vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),kt=J,J=0):kt=0);let Jt,ne,ie,Ee,ge,he,Ue,Qe,mn;const Ve=D.isCompressedTexture?D.mipmaps[kt]:D.image;if(Q!==null)Jt=Q.max.x-Q.min.x,ne=Q.max.y-Q.min.y,ie=Q.isBox3?Q.max.z-Q.min.z:1,Ee=Q.min.x,ge=Q.min.y,he=Q.isBox3?Q.min.z:0;else{const In=Math.pow(2,-J);Jt=Math.floor(Ve.width*In),ne=Math.floor(Ve.height*In),D.isDataArrayTexture?ie=Ve.depth:D.isData3DTexture?ie=Math.floor(Ve.depth*In):ie=1,Ee=0,ge=0,he=0}lt!==null?(Ue=lt.x,Qe=lt.y,mn=lt.z):(Ue=0,Qe=0,mn=0);const ke=Mt.convert(et.format),_e=Mt.convert(et.type);let An;et.isData3DTexture?(le.setTexture3D(et,0),An=O.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(le.setTexture2DArray(et,0),An=O.TEXTURE_2D_ARRAY):(le.setTexture2D(et,0),An=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,et.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,et.unpackAlignment);const Xe=O.getParameter(O.UNPACK_ROW_LENGTH),ai=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ns=O.getParameter(O.UNPACK_SKIP_PIXELS),gn=O.getParameter(O.UNPACK_SKIP_ROWS),Ra=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ve.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ve.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ee),O.pixelStorei(O.UNPACK_SKIP_ROWS,ge),O.pixelStorei(O.UNPACK_SKIP_IMAGES,he);const fn=D.isDataArrayTexture||D.isData3DTexture,si=et.isDataArrayTexture||et.isData3DTexture;if(D.isDepthTexture){const In=Xt.get(D),Vn=Xt.get(et),Jn=Xt.get(In.__renderTarget),ua=Xt.get(Vn.__renderTarget);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,Jn.__webglFramebuffer),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let ba=0;ba<ie;ba++)fn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.get(D).__webglTexture,J,he+ba),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.get(et).__webglTexture,kt,mn+ba)),O.blitFramebuffer(Ee,ge,Jt,ne,Ue,Qe,Jt,ne,O.DEPTH_BUFFER_BIT,O.NEAREST);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(J!==0||D.isRenderTargetTexture||Xt.has(D)){const In=Xt.get(D),Vn=Xt.get(et);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,$i),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,fi);for(let Jn=0;Jn<ie;Jn++)fn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,In.__webglTexture,J,he+Jn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,In.__webglTexture,J),si?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Vn.__webglTexture,kt,mn+Jn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Vn.__webglTexture,kt),J!==0?O.blitFramebuffer(Ee,ge,Jt,ne,Ue,Qe,Jt,ne,O.COLOR_BUFFER_BIT,O.NEAREST):si?O.copyTexSubImage3D(An,kt,Ue,Qe,mn+Jn,Ee,ge,Jt,ne):O.copyTexSubImage2D(An,kt,Ue,Qe,Ee,ge,Jt,ne);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else si?D.isDataTexture||D.isData3DTexture?O.texSubImage3D(An,kt,Ue,Qe,mn,Jt,ne,ie,ke,_e,Ve.data):et.isCompressedArrayTexture?O.compressedTexSubImage3D(An,kt,Ue,Qe,mn,Jt,ne,ie,ke,Ve.data):O.texSubImage3D(An,kt,Ue,Qe,mn,Jt,ne,ie,ke,_e,Ve):D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,kt,Ue,Qe,Jt,ne,ke,_e,Ve.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,kt,Ue,Qe,Ve.width,Ve.height,ke,Ve.data):O.texSubImage2D(O.TEXTURE_2D,kt,Ue,Qe,Jt,ne,ke,_e,Ve);O.pixelStorei(O.UNPACK_ROW_LENGTH,Xe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ai),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ns),O.pixelStorei(O.UNPACK_SKIP_ROWS,gn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ra),kt===0&&et.generateMipmaps&&O.generateMipmap(An),Rt.unbindTexture()},this.copyTextureToTexture3D=function(D,et,Q=null,lt=null,J=0){return vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,et,Q,lt,J)},this.initRenderTarget=function(D){Xt.get(D).__webglFramebuffer===void 0&&le.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?le.setTextureCube(D,0):D.isData3DTexture?le.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?le.setTexture2DArray(D,0):le.setTexture2D(D,0),Rt.unbindTexture()},this.resetState=function(){H=0,F=0,X=null,Rt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),n.unpackColorSpace=We._getUnpackColorSpace()}}const Xu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Lo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const c2=new Am(-1,1,1,-1,0,1);class u2 extends wi{constructor(){super(),this.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ln([0,2,0,0,2,0],2))}}const f2=new u2;class bm{constructor(t){this._mesh=new ve(f2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,c2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class h2 extends Lo{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof ni?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hr.clone(t.uniforms),this.material=new ni({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new bm(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ex extends Lo{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,h;this.inverse?(f=0,h=1):(f=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,f,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class d2 extends Lo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class p2{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new oe);this._width=a.width,this._height=a.height,n=new Ma(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zs}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new h2(Xu),this.copyPass.material.blending=gi,this.clock=new TA}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const f=this.passes[o];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),f.needsSwap){if(a){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}Ex!==void 0&&(f instanceof Ex?a=!0:f instanceof d2&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class m2 extends Lo{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=o}}class g2{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(t.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,n){let a,o,c;const f=.5*(Math.sqrt(3)-1),h=(t+n)*f,m=Math.floor(t+h),p=Math.floor(n+h),g=(3-Math.sqrt(3))/6,_=(m+p)*g,v=m-_,x=p-_,y=t-v,A=n-x;let S,E;y>A?(S=1,E=0):(S=0,E=1);const U=y-S+g,C=A-E+g,R=y-1+2*g,G=A-1+2*g,H=m&255,F=p&255,X=this.perm[H+this.perm[F]]%12,N=this.perm[H+S+this.perm[F+E]]%12,w=this.perm[H+1+this.perm[F+1]]%12;let V=.5-y*y-A*A;V<0?a=0:(V*=V,a=V*V*this._dot(this.grad3[X],y,A));let st=.5-U*U-C*C;st<0?o=0:(st*=st,o=st*st*this._dot(this.grad3[N],U,C));let ut=.5-R*R-G*G;return ut<0?c=0:(ut*=ut,c=ut*ut*this._dot(this.grad3[w],R,G)),70*(a+o+c)}noise3d(t,n,a){let o,c,f,h;const p=(t+n+a)*.3333333333333333,g=Math.floor(t+p),_=Math.floor(n+p),v=Math.floor(a+p),x=1/6,y=(g+_+v)*x,A=g-y,S=_-y,E=v-y,U=t-A,C=n-S,R=a-E;let G,H,F,X,N,w;U>=C?C>=R?(G=1,H=0,F=0,X=1,N=1,w=0):U>=R?(G=1,H=0,F=0,X=1,N=0,w=1):(G=0,H=0,F=1,X=1,N=0,w=1):C<R?(G=0,H=0,F=1,X=0,N=1,w=1):U<R?(G=0,H=1,F=0,X=0,N=1,w=1):(G=0,H=1,F=0,X=1,N=1,w=0);const V=U-G+x,st=C-H+x,ut=R-F+x,vt=U-X+2*x,ft=C-N+2*x,B=R-w+2*x,j=U-1+3*x,K=C-1+3*x,At=R-1+3*x,z=g&255,it=_&255,Et=v&255,Ut=this.perm[z+this.perm[it+this.perm[Et]]]%12,nt=this.perm[z+G+this.perm[it+H+this.perm[Et+F]]]%12,pt=this.perm[z+X+this.perm[it+N+this.perm[Et+w]]]%12,Pt=this.perm[z+1+this.perm[it+1+this.perm[Et+1]]]%12;let Ft=.6-U*U-C*C-R*R;Ft<0?o=0:(Ft*=Ft,o=Ft*Ft*this._dot3(this.grad3[Ut],U,C,R));let Ht=.6-V*V-st*st-ut*ut;Ht<0?c=0:(Ht*=Ht,c=Ht*Ht*this._dot3(this.grad3[nt],V,st,ut));let me=.6-vt*vt-ft*ft-B*B;me<0?f=0:(me*=me,f=me*me*this._dot3(this.grad3[pt],vt,ft,B));let ae=.6-j*j-K*K-At*At;return ae<0?h=0:(ae*=ae,h=ae*ae*this._dot3(this.grad3[Pt],j,K,At)),32*(o+c+f+h)}noise4d(t,n,a,o){const c=this.grad4,f=this.simplex,h=this.perm,m=(Math.sqrt(5)-1)/4,p=(5-Math.sqrt(5))/20;let g,_,v,x,y;const A=(t+n+a+o)*m,S=Math.floor(t+A),E=Math.floor(n+A),U=Math.floor(a+A),C=Math.floor(o+A),R=(S+E+U+C)*p,G=S-R,H=E-R,F=U-R,X=C-R,N=t-G,w=n-H,V=a-F,st=o-X,ut=N>w?32:0,vt=N>V?16:0,ft=w>V?8:0,B=N>st?4:0,j=w>st?2:0,K=V>st?1:0,At=ut+vt+ft+B+j+K,z=f[At][0]>=3?1:0,it=f[At][1]>=3?1:0,Et=f[At][2]>=3?1:0,Ut=f[At][3]>=3?1:0,nt=f[At][0]>=2?1:0,pt=f[At][1]>=2?1:0,Pt=f[At][2]>=2?1:0,Ft=f[At][3]>=2?1:0,Ht=f[At][0]>=1?1:0,me=f[At][1]>=1?1:0,ae=f[At][2]>=1?1:0,Oe=f[At][3]>=1?1:0,Wt=N-z+p,jt=w-it+p,O=V-Et+p,Bt=st-Ut+p,Zt=N-nt+2*p,qt=w-pt+2*p,Rt=V-Pt+2*p,de=st-Ft+2*p,Xt=N-Ht+3*p,le=w-me+3*p,Ae=V-ae+3*p,L=st-Oe+3*p,T=N-1+4*p,P=w-1+4*p,W=V-1+4*p,ct=st-1+4*p,$=S&255,zt=E&255,Ct=U&255,Nt=C&255,Kt=h[$+h[zt+h[Ct+h[Nt]]]]%32,wt=h[$+z+h[zt+it+h[Ct+Et+h[Nt+Ut]]]]%32,Gt=h[$+nt+h[zt+pt+h[Ct+Pt+h[Nt+Ft]]]]%32,tt=h[$+Ht+h[zt+me+h[Ct+ae+h[Nt+Oe]]]]%32,Ot=h[$+1+h[zt+1+h[Ct+1+h[Nt+1]]]]%32;let Mt=.6-N*N-w*w-V*V-st*st;Mt<0?g=0:(Mt*=Mt,g=Mt*Mt*this._dot4(c[Kt],N,w,V,st));let Dt=.6-Wt*Wt-jt*jt-O*O-Bt*Bt;Dt<0?_=0:(Dt*=Dt,_=Dt*Dt*this._dot4(c[wt],Wt,jt,O,Bt));let I=.6-Zt*Zt-qt*qt-Rt*Rt-de*de;I<0?v=0:(I*=I,v=I*I*this._dot4(c[Gt],Zt,qt,Rt,de));let Tt=.6-Xt*Xt-le*le-Ae*Ae-L*L;Tt<0?x=0:(Tt*=Tt,x=Tt*Tt*this._dot4(c[tt],Xt,le,Ae,L));let ot=.6-T*T-P*P-W*W-ct*ct;return ot<0?y=0:(ot*=ot,y=ot*ot*this._dot4(c[Ot],T,P,W,ct)),27*(g+_+v+x+y)}_dot(t,n,a){return t[0]*n+t[1]*a}_dot3(t,n,a,o){return t[0]*n+t[1]*a+t[2]*o}_dot4(t,n,a,o,c){return t[0]*n+t[1]*a+t[2]*o+t[3]*c}}const Du={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new oe},cameraProjectionMatrix:{value:new un},cameraInverseProjectionMatrix:{value:new un},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Nu={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Lu={uniforms:{tDiffuse:{value:null},resolution:{value:new oe}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class Ja extends Lo{constructor(t,n,a=512,o=512,c=32){super(),this.width=a,this.height=o,this.clear=!0,this.needsSwap=!1,this.camera=n,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this._generateSampleKernel(c),this._generateRandomKernelRotations();const f=new vm;f.format=Ao,f.type=To,this.normalRenderTarget=new Ma(this.width,this.height,{minFilter:Si,magFilter:Si,type:zs,depthTexture:f}),this.ssaoRenderTarget=new Ma(this.width,this.height,{type:zs}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new ni({defines:Object.assign({},Du.defines),uniforms:hr.clone(Du.uniforms),vertexShader:Du.vertexShader,fragmentShader:Du.fragmentShader,blending:gi}),this.ssaoMaterial.defines.KERNEL_SIZE=c,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new hA,this.normalMaterial.blending=gi,this.blurMaterial=new ni({defines:Object.assign({},Lu.defines),uniforms:hr.clone(Lu.uniforms),vertexShader:Lu.vertexShader,fragmentShader:Lu.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ni({defines:Object.assign({},Nu.defines),uniforms:hr.clone(Nu.uniforms),vertexShader:Nu.vertexShader,fragmentShader:Nu.fragmentShader,blending:gi}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ni({uniforms:hr.clone(Xu.uniforms),vertexShader:Xu.vertexShader,fragmentShader:Xu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:rE,blendDst:lp,blendEquation:Qa,blendSrcAlpha:sE,blendDstAlpha:lp,blendEquationAlpha:Qa}),this._fsQuad=new bm(null),this._originalClearColor=new Me}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(t,n,a){switch(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Ja.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=gi,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ja.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=gi,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ja.OUTPUT.Depth:this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:a);break;case Ja.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=gi,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;case Ja.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=aE,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:a);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(t,n){this.width=t,this.height=n,this.ssaoRenderTarget.setSize(t,n),this.normalRenderTarget.setSize(t,n),this.blurRenderTarget.setSize(t,n),this.ssaoMaterial.uniforms.resolution.value.set(t,n),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,n)}_renderPass(t,n,a,o,c){t.getClearColor(this._originalClearColor);const f=t.getClearAlpha(),h=t.autoClear;t.setRenderTarget(a),t.autoClear=!1,o!=null&&(t.setClearColor(o),t.setClearAlpha(c||0),t.clear()),this._fsQuad.material=n,this._fsQuad.render(t),t.autoClear=h,t.setClearColor(this._originalClearColor),t.setClearAlpha(f)}_renderOverride(t,n,a,o,c){t.getClearColor(this._originalClearColor);const f=t.getClearAlpha(),h=t.autoClear;t.setRenderTarget(a),t.autoClear=!1,o=n.clearColor||o,c=n.clearAlpha||c,o!=null&&(t.setClearColor(o),t.setClearAlpha(c||0),t.clear()),this.scene.overrideMaterial=n,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=h,t.setClearColor(this._originalClearColor),t.setClearAlpha(f)}_generateSampleKernel(t){const n=this.kernel;for(let a=0;a<t;a++){const o=new Z;o.x=Math.random()*2-1,o.y=Math.random()*2-1,o.z=Math.random(),o.normalize();let c=a/t;c=TE.lerp(.1,1,c*c),o.multiplyScalar(c),n.push(o)}}_generateRandomKernelRotations(){const a=new g2,o=4*4,c=new Float32Array(o);for(let f=0;f<o;f++){const h=Math.random()*2-1,m=Math.random()*2-1,p=0;c[f]=a.noise3d(h,m,p)}this.noiseTexture=new wT(c,4,4,lm,Ea),this.noiseTexture.wrapS=Vl,this.noiseTexture.wrapT=Vl,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const t=this.scene,n=this._visibilityCache;t.traverse(function(a){n.set(a,a.visible),(a.isPoints||a.isLine)&&(a.visible=!1)})}_restoreVisibility(){const t=this.scene,n=this._visibilityCache;t.traverse(function(a){const o=n.get(a);a.visible=o}),n.clear()}}Ja.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Uu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class _2 extends Lo{constructor(){super(),this.uniforms=hr.clone(Uu.uniforms),this.material=new fA({name:Uu.name,uniforms:this.uniforms,vertexShader:Uu.vertexShader,fragmentShader:Uu.fragmentShader}),this._fsQuad=new bm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===sn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lE?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===cE?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uE?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fE?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dE?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pE?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===hE&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var Ge=(r=>(r.MACHINE_GUN="MACHINE_GUN",r.CANNON="CANNON",r.LASER="LASER",r))(Ge||{}),xt=(r=>(r.LIGHT_TANK="LIGHT_TANK",r.INFANTRY="INFANTRY",r.HEAVY_TANK="HEAVY_TANK",r.ARTILLERY="ARTILLERY",r.SUPER_TANK="SUPER_TANK",r.GRENADIER="GRENADIER",r))(xt||{});const Kn=10,Zn=30,Y=2,En=0,mi=.2,Fi=Y*.7,wn=Y*.3,Wu=Y*.9,Bi=Y*.2,$a=Y*.25,ja=Y*.5,co=Y*.05,Yd=Fi*1.1,Xd=wn*.7,Wd=Wu*1.05,Ka=Y*.25,oa=Y*.5,$p=Y*.2,tm=Y*.1,Eo=Y*.6,dr=Y*.25,ZE=Y*1,qd=Y*.35,Zd=Y*.1,Sx=Y*1.2,em=Y*.1,v2=1.8,Pu=1e3,pr=Zn-1,qu=2,mo="PLAYER_BASE_ID",Ou=2e3,Gl=0,Zu=3,ho="ENEMY_BASE_ID",x2=-Y*1.5,jd=15,E2=3e3,yx=9.81*3,S2=1,_a={[Ge.MACHINE_GUN]:{cost:100,damage:15,range:7*Y,fireRate:3,projectileSpeed:20,color:6323595,modelHeight:Y*.8,barrelOffsetY:mi+Y*.3+Y*.15,detectionRange:7*Y},[Ge.CANNON]:{cost:250,damage:50,range:6*Y,fireRate:.3,projectileSpeed:10,aoeRadius:1.5*Y,color:5025616,modelHeight:Y*.9,barrelOffsetY:mi+Y*.15+Y*.25,detectionRange:7*Y},[Ge.LASER]:{cost:400,damage:4,range:12*Y,fireRate:5,color:2201331,modelHeight:Y*1,barrelOffsetY:mi+Y*.5,detectionRange:10.5*Y}},je={[xt.LIGHT_TANK]:{cost:100,health:100,speed:2.8,value:50,attackRange:Y*4,fireRate:.75,projectileDamage:10,barrelOffsetY:wn/2+$a/2,color:5597999,visualScale:.85,detectionRange:Y*3,aoeRadius:0},[xt.INFANTRY]:{cost:20,health:30,speed:3,value:10,attackRange:Y*3,fireRate:1,projectileDamage:5,barrelOffsetY:oa*.3,color:9127187,visualScale:1,detectionRange:Y*6,aoeRadius:0},[xt.GRENADIER]:{cost:45,health:35,speed:2.7,value:25,attackRange:Y*3,fireRate:.33,projectileDamage:15,aoeRadius:Y*.75,barrelOffsetY:oa*.3,color:25600,visualScale:1,detectionRange:Y*5.5,areaEffectDurationMs:2500,areaEffectDamagePerSecond:10,areaEffectRadius:Y*.75},[xt.HEAVY_TANK]:{cost:300,health:250,speed:1.5,value:150,attackRange:Y*4,fireRate:.75,projectileDamage:15,barrelOffsetY:wn/2+$a/2,color:13369344,visualScale:1.1,detectionRange:Y*3,aoeRadius:0},[xt.ARTILLERY]:{cost:250,health:70,speed:1.4,value:170,attackRange:Y*5.5,fireRate:.33,projectileDamage:50,barrelOffsetY:dr,color:4936480,visualScale:1,detectionRange:Y*3,aoeRadius:Y*1.8},[xt.SUPER_TANK]:{cost:0,health:2e3,speed:1.2,value:800,attackRange:Y*4.5,fireRate:.6,projectileDamage:40,barrelOffsetY:wn/2+$a/2,color:4849738,visualScale:v2,detectionRange:Y*3,aoeRadius:0}},y2=4e4,Kd=[{minTime:0,units:[{type:xt.INFANTRY,count:8},{type:xt.GRENADIER,count:1},{type:xt.LIGHT_TANK,count:2}],maxAffordableCostPercent:.85},{minTime:7e4,units:[{type:xt.INFANTRY,count:10},{type:xt.GRENADIER,count:2},{type:xt.LIGHT_TANK,count:3},{type:xt.ARTILLERY,count:1}],maxAffordableCostPercent:.9},{minTime:15e4,units:[{type:xt.INFANTRY,count:8},{type:xt.GRENADIER,count:3},{type:xt.LIGHT_TANK,count:4},{type:xt.HEAVY_TANK,count:1},{type:xt.ARTILLERY,count:2}],maxAffordableCostPercent:.95,spawnSpreadFactor:.7},{minTime:24e4,units:[{type:xt.INFANTRY,count:10},{type:xt.GRENADIER,count:4},{type:xt.LIGHT_TANK,count:3},{type:xt.HEAVY_TANK,count:2},{type:xt.ARTILLERY,count:3}],maxAffordableCostPercent:1,spawnSpreadFactor:.6},{minTime:32e4,units:[{type:xt.INFANTRY,count:12},{type:xt.GRENADIER,count:4},{type:xt.LIGHT_TANK,count:4},{type:xt.HEAVY_TANK,count:3},{type:xt.ARTILLERY,count:2}],maxAffordableCostPercent:1,spawnSpreadFactor:.65},{minTime:42e4,units:[{type:xt.INFANTRY,count:15},{type:xt.GRENADIER,count:5},{type:xt.LIGHT_TANK,count:5},{type:xt.HEAVY_TANK,count:4},{type:xt.ARTILLERY,count:4}],maxAffordableCostPercent:1,spawnSpreadFactor:.5},{minTime:54e4,units:[{type:xt.INFANTRY,count:20},{type:xt.GRENADIER,count:10},{type:xt.LIGHT_TANK,count:25},{type:xt.HEAVY_TANK,count:15},{type:xt.ARTILLERY,count:10}],maxAffordableCostPercent:1,spawnSpreadFactor:.7,isEndlessWave:!0}],M2=54e4,T2=45e3,A2=.4,R2=1,b2=300,w2=300,C2=Y*.2,D2=250,N2=1e3,L2=200,U2=600,Mx=[16711680,65280,255,16776960,65535,16711935,16746496,8913151],P2=Y*12,O2=Kn*Y*.7,I2=Zn*Y*.4,z2=60,B2=1800,Tx=10,F2=9.81*.5,H2=30,G2=1e3,V2=5,Ax=Y*.2,Ns=16753920,Ls=16711680,rr=31743,go=5e3,k2=10,Rx=[16729344,16737792,16753920],bx=600,Y2=1300,wx=Y*.1,Cx=Y*.06,X2=Y*.18,W2=Y*.7,q2=.7,Z2=750,Dx=-.004,j2=.005,Nx=.1,Lx=Math.PI-.1,Ux=4,K2=.01,Px=Y*2,Ox=Zn*Y*.8,Ix=-.004,Q2=.0025,J2=.03,Qd=43775,$2=65535,tC=.25,eC=En+.02,zx=Y*4,nC=.45,iC=.08,Bx=.45,aC=2,sC=Y*5,Fx=Y*1.5,rC=2.5,oC=10,Hx=2,uo=1,Jd=Y*2,$d=Kn*Y*.8,lC=1731098,cC=-Y*.2,Gx=3,uC=3829922,fC=10267903,hC=9127187,dC=25600,pC=2263842,mC=50,Vx=Y*.1,kx=Y*.8,gC=Y*1.5,Yx=Y*.4,_C=Y*.8,Xx=Y*1,vC=Y*2,xC=1052688,EC=12,Iu=Y*.3,Wx=Y*10,SC=Y*15,qx=1,yC=1.6,MC=.15,TC=.4,AC=16777215,RC=0,bC=4,tp=Y*.5,ep=Y*.3,Zx=Y*.7,jx=14737632,wC=5,zu=Y*.35,np=Y*.3,Kx=Y*.45,CC=Y*4,Qx=4e3,nm=1e4,DC=Y*.25,NC=.04,LC=Y*.15,UC=.3,Ll=0,Ul=0,Ps=Kn*Y/2,xi=Zn*Y/2,PC=Y*.8,OC=Y*.1,IC=Y*.25,zC=7344144,BC=56576,FC=.99,Cn=(r,t=!0,n=!0)=>{r.traverse(a=>{a instanceof ve&&(a.castShadow=t,a.receiveShadow=n)})},HC=r=>{const t=new vi;t.position.set(r.x,En,r.z);const n=qu*Y,a=Y,o=Y*.8,c=new vn(n*.9,o,a*.9),f=new dn({color:7901340}),h=new ve(c,f);h.position.y=o/2,h.userData.originalColor=f.color.clone(),Cn(h),t.add(h);const m=o*.5,p=n*.4,g=a*.4,_=new vn(p,m,g),v=new dn({color:5533306}),x=new ve(_,v);return x.position.y=o+m/2,x.userData.originalColor=v.color.clone(),Cn(x),t.add(x),t},GC=r=>{const t=new vi;t.position.set(r.x,En,r.z);const n=Zu*Y,a=Y*1.5,o=Y*1,c=new vn(n*.95,o,a*.95),f=new dn({color:12986408}),h=new ve(c,f);h.position.y=o/2,h.userData.originalColor=f.color.clone(),Cn(h),t.add(h);const m=new tf(Y*.3,Y*.8,4),p=new dn({color:4342338});for(let g=0;g<4;g++){const _=new ve(m,p);_.position.set((Math.random()-.5)*n*.7,o+Y*.4,(Math.random()-.5)*a*.7),_.rotation.x=Math.random()*Math.PI,_.rotation.z=Math.random()*Math.PI,_.userData.originalColor=p.color.clone(),Cn(_),t.add(_)}return t},VC=(r,t)=>{const n=new vi,a=new Fn(Y*.4,Y*.45,mi,16),o=new dn({color:4342338}),c=new ve(a,o);c.position.y=mi/2,Cn(c),n.add(c);const f=new vi;switch(f.name="turret",n.add(f),r){case Ge.MACHINE_GUN:{const g=Y*.3,_=new Fn(Y*.15,Y*.15,g,12),v=new dn({color:6381921}),x=new ve(_,v);x.position.y=mi+g/2,Cn(x),f.add(x);const y=Y*.3,A=new vn(Y*.25,y,Y*.5),S=new dn({color:7697781}),E=new ve(A,S);E.position.y=mi+g+y/2,Cn(E),f.add(E);const U=Y*.4,C=Y*.04,R=new Fn(C,C,U,8),G=new dn({color:2171169}),H=new ve(R,G);H.position.set(Y*.07,mi+g+y/2,U/2),H.rotation.x=Math.PI/2,Cn(H),f.add(H);const F=new ve(R,G);F.position.set(-Y*.07,mi+g+y/2,U/2),F.rotation.x=Math.PI/2,Cn(F),f.add(F);break}case Ge.CANNON:{const g=Y*.15,_=Y*.35,v=new Fn(_,_,g,16),x=new dn({color:6111287}),y=new ve(v,x);y.position.y=mi+g/2,Cn(y),f.add(y);const A=Y*.5,S=Y*.25,E=new Fn(S,S*.9,A,12),U=new dn({color:t.color}),C=new ve(E,U);C.position.y=mi+g+A/2,Cn(C),f.add(C);const R=Y*.6,G=Y*.15,H=Y*.12,F=new Fn(G,H,R,12),X=new dn({color:3706428}),N=new ve(F,X);N.position.y=mi+g+A/2,N.position.z=R/2-Y*.05,N.rotation.x=Math.PI/2,Cn(N),f.add(N);break}case Ge.LASER:{const g=Y*.7,_=new vn(Y*.4,g,Y*.3),v=new dn({color:161725}),x=new ve(_,v);x.position.y=mi+g/2,Cn(x),f.add(x);const y=Y*.15,A=Y*.05,S=new Fn(y,y*.8,A,16),E=new dn({color:4244735}),U=new ve(S,E);U.position.y=mi+g/2,U.position.z=Y*.15+A/2,U.rotation.x=Math.PI/2,Cn(U),f.add(U);break}default:const h=new vn(Y*.3,t.modelHeight,Y*.3),m=new dn({color:t.color}),p=new ve(h,m);p.position.y=mi+t.modelHeight/2,Cn(p),f.add(p)}return n},Jx=(r,t,n)=>{const a=new vi;a.userData.unitType=r,a.userData.owner=t;const o=t==="PLAYER"?4033535:13369344,c=g=>new dn({color:g}),f=new Me(o),h=f.clone().offsetHSL(0,0,-.1),m=new Me(4210752),p=(g,_,v,x,y)=>{const A=c(_),S=new ve(g,A);return S.userData.originalColor=_.clone(),x&&S.position.set(x.x||0,x.y||0,x.z||0),y&&S.rotation.set(y.x||0,y.y||0,y.z||0),Cn(S),v.add(S),S};switch(r){case xt.LIGHT_TANK:{const g=new vn(Fi,wn,Wu);p(g,f,a);const _=new Me(3355443),v=new vn(Yd*.2,Xd,Wd);p(v,_,a,{x:-Fi/2*.9,y:-wn*.1}),p(v,_,a,{x:Fi/2*.9,y:-wn*.1});const x=new Fn(Bi,Bi*.9,$a,16),y=p(x,h,a,{y:wn/2+$a/2-Y*.05}),A=new Fn(co,co*.8,ja,8);p(A,m,a,{y:y.position.y,z:Bi*.5+ja/2},{x:Math.PI/2});break}case xt.HEAVY_TANK:{const g=new vn(Fi,wn,Wu);p(g,f,a);const _=new Me(3355443),v=new vn(Yd*.2,Xd,Wd);p(v,_,a,{x:-Fi/2*.9,y:-wn*.1}),p(v,_,a,{x:Fi/2*.9,y:-wn*.1});const x=Bi*1.8,y=Bi*1.8,A=new vn(x,$a,y),S=p(A,h,a,{y:wn/2+$a/2-Y*.05}),E=new Fn(co*1.1,co*.9,ja*1.1,8);p(E,m,a,{y:S.position.y,z:y/2+ja*1.1/2-Bi*.2},{x:Math.PI/2});break}case xt.SUPER_TANK:{const g=new vn(Fi,wn,Wu);p(g,f,a);const _=new Me(2236962),v=new vn(Yd*.2,Xd,Wd);p(v,_,a,{x:-Fi/2*.9,y:-wn*.1}),p(v,_,a,{x:Fi/2*.9,y:-wn*.1});const x=$a*1.1,y=Bi*2.2,A=Bi*1.8,S=new vn(y,x,A),E=h.clone().offsetHSL(0,0,-.05),U=p(S,E,a,{y:wn/2+x/2-Y*.05}),C=new Fn(co*1.2,co,ja*1.2,8),R=y*.25;p(C,m,a,{x:R,y:U.position.y,z:A/2+ja*1.2/2-Bi*.1},{x:Math.PI/2}),p(C,m,a,{x:-R,y:U.position.y,z:A/2+ja*1.2/2-Bi*.1},{x:Math.PI/2});break}case xt.INFANTRY:case xt.GRENADIER:{const g=new vn(Ka,oa,$p);p(g,f,a);const _=new Sa(tm,8,8),v=f.clone().offsetHSL(0,0,.1);if(p(_,v,a,{y:oa/2+tm*.8}),r===xt.INFANTRY){const x=Ka*.25,y=oa*.15,A=Ka*1.5,S=new vn(x,y,A),E=new Me(2631720);p(S,E,a,{x:Ka*.45,y:-oa*.05,z:A*.25}).rotation.set(0,-Math.PI/18,Math.PI/9)}else if(r===xt.GRENADIER){const x=new vn(Ka*.5,oa*.2,$p*.8),y=f.clone().offsetHSL(0,-.1,-.2);p(x,y,a,{x:-Ka*.3,y:-oa*.2})}break}case xt.ARTILLERY:{const g=new vn(Eo,dr,ZE);p(g,f,a);const _=new Me(3355443),v=new Fn(qd,qd,Zd,16),x=-dr/2+qd;p(v,_,a,{x:-Eo/2-Zd/2,y:x},{z:Math.PI/2}),p(v,_,a,{x:Eo/2+Zd/2,y:x},{z:Math.PI/2});const y=new Fn(em,em,Sx,12);p(y,m,a,{y:dr/1,z:Sx*.02},{x:Math.PI/2.5});break}}return a.scale.set(n.visualScale||1,n.visualScale||1,n.visualScale||1),a},kC=(r,t)=>{const n=new vi;n.userData.projectileType=r,n.userData.owner=t;let a,o,c=null,f;if(r===Ge.LASER)a=new Fn(Y*.03,Y*.03,1,8),o=new ra({color:16711680,transparent:!0,opacity:.6,depthWrite:!1}),f=new ve(a,o),f.name="laser_beam";else{if(r===Ge.MACHINE_GUN||r===xt.INFANTRY){const h=r===Ge.MACHINE_GUN?Y*.1:Y*.08,m=r===Ge.MACHINE_GUN?Y*.1:Y*.08,p=r===Ge.MACHINE_GUN?Y*.4:Y*.3;a=new vn(h,m,p),o=new dn({color:16763904,emissive:15641088,emissiveIntensity:.8}),c=new Kp(16777181,5,Y*2,1.5)}else if(r===Ge.CANNON||r===xt.ARTILLERY||r===xt.LIGHT_TANK||r===xt.HEAVY_TANK||r===xt.SUPER_TANK){let h=Y*.2;r===xt.LIGHT_TANK||r===xt.HEAVY_TANK?h=Y*.12:r===xt.SUPER_TANK&&(h=Y*.15),a=new Sa(h,8,8),o=new dn({color:4210752,emissive:1381653,emissiveIntensity:.5}),c=new Kp(16768426,8,Y*3,1.5)}else if(r===xt.GRENADIER)a=new Sa(Y*.15,6,6),o=new dn({color:2241314});else{a=new Sa(Y*.1,8,8);const h=t==="PLAYER"?9031664:16744319;o=new dn({color:h})}f=new ve(a,o),Cn(f,!0,!1)}return n.add(f),f.userData.isProjectileMesh=!0,c&&(c.castShadow=!1,c.name="projectile_light",n.add(c),n.userData.pointLight=c),n},YC=(r,t,n)=>{const a=[],o=new va(Kn*Y*Gx,Zn*Y*Gx),c=new dn({color:lC,side:jn}),f=new ve(o,c);f.rotation.x=-Math.PI/2,f.position.set(Ll,En+cC,Ul),f.receiveShadow=!0,a.push(f);const h=(_,v,x,y,A,S)=>{const E=Math.floor(Math.random()*4);let U,C;const R=(Math.random()-.5)*S;switch(E){case 0:U=_+(Math.random()-.5)*(x*2+S),C=v-y-A-Math.abs(R);break;case 1:U=_+(Math.random()-.5)*(x*2+S),C=v+y+A+Math.abs(R);break;case 2:U=_-x-A-Math.abs(R),C=v+(Math.random()-.5)*(y*2+S);break;case 3:default:U=_+x+A+Math.abs(R),C=v+(Math.random()-.5)*(y*2+S);break}return{x:U,y:En,z:C}},m=new vi;for(let _=0;_<mC;_++){const v=new vi,x=kx+Math.random()*(gC-kx),y=new Fn(Vx,Vx*1.2,x,6),A=new dn({color:hC}),S=new ve(y,A);S.position.y=x/2,Cn(S),v.add(S);const E=Yx+Math.random()*(_C-Yx),U=Xx+Math.random()*(vC-Xx),C=new tf(E,U,8),R=new Me(dC).lerp(new Me(pC),Math.random()),G=new dn({color:R}),H=new ve(C,G);H.position.y=x+U/2-U*.1,Cn(H),v.add(H);const F=h(Ll,Ul,Ps,xi,Jd,$d);v.position.set(F.x,F.y,F.z),v.rotation.y=Math.random()*Math.PI*2,m.add(v)}a.push(m);const p=new Z(Ll,0,Ul),g=(Ps+xi)/2;for(let _=0;_<EC;_++){const v=`bird-${_}`,x=new zE;x.moveTo(-Iu,0),x.lineTo(0,Iu*.5),x.lineTo(Iu,0),x.lineTo(0,Iu*.2),x.closePath();const y=new ym(x),A=new ra({color:xC,side:jn}),S=new ve(y,A),E=Wx+Math.random()*(SC-Wx),U=g*(qx+Math.random()*(yC-qx)),C=Math.random()*Math.PI*2,R=-Math.PI/2+(Math.random()-.5)*TC;S.position.set(p.x+U*Math.cos(C),E,p.z+U*Math.sin(C)),S.userData.initialPitch=R,Cn(S,!0,!1),r.add(S),t.current.set(v,{mesh:S,angle:C,radius:U,height:E,speed:MC*(.8+Math.random()*.4),initialPitch:R,orbitCenter:p})}for(let _=0;_<bC;_++){const v=`cow-${_}`,x=new vi,y=new vn(tp,ep,Zx),A=new dn({color:AC}),S=new ve(y,A);Cn(S),x.add(S);for(let C=0;C<3;C++){const R=tp*.15*(.5+Math.random()),G=new Sa(R,6,6),H=new dn({color:RC}),F=new ve(G,H);F.position.set((Math.random()-.5)*tp*.8,(Math.random()-.5)*ep*.8,(Math.random()-.5)*Zx*.8),x.add(F)}const E=h(Ll,Ul,Ps,xi,Jd*2,$d*.5),U=En+ep/2;x.position.set(E.x,U,E.z),x.rotation.y=Math.random()*Math.PI*2,r.add(x),n.current.set(v,{mesh:x,origin:new Z(E.x,U,E.z),currentWanderTarget:null,timeUntilNewTargetMs:Math.random()*nm,isMoving:!1})}for(let _=0;_<wC;_++){const v=`sheep-${_}`,x=new vi,y=new Sa(zu*.6,8,6),A=new dn({color:jx}),S=new ve(y,A);S.scale.set(1,np/(zu*.6)*.8,Kx/(zu*.6)),Cn(S),x.add(S);const E=zu*.25,U=new Sa(E,6,6),C=new dn({color:new Me(jx).multiplyScalar(.8)}),R=new ve(U,C);R.position.set(0,np*.1,Kx*.4),x.add(R);const G=h(Ll,Ul,Ps,xi,Jd*2.5,$d*.4),H=En+np/2;x.position.set(G.x,H,G.z),x.rotation.y=Math.random()*Math.PI*2,r.add(x),n.current.set(v,{mesh:x,origin:new Z(G.x,H,G.z),currentWanderTarget:null,timeUntilNewTargetMs:Math.random()*nm,isMoving:!1})}return a.forEach(_=>r.add(_)),a},XC=(r,t)=>{switch(r){case xt.INFANTRY:case xt.GRENADIER:return(oa/2+tm)*t;case xt.ARTILLERY:return(dr/2+em*2)*t;case xt.LIGHT_TANK:case xt.HEAVY_TANK:case xt.SUPER_TANK:return(wn/2+$a)*t;default:return Y*.5*t}},Ki=(r,t=!0)=>{r.traverse(n=>{n instanceof Kp||n instanceof ve&&t&&(n.geometry.dispose(),Array.isArray(n.material)?n.material.forEach(a=>a.dispose()):n.material instanceof qn&&n.material.dispose())})},ip=(r,t)=>{const n=r.clientX-t.clientX,a=r.clientY-t.clientY;return Math.sqrt(n*n+a*a)},ap=(r,t)=>({x:(r.clientX+t.clientX)/2,y:(r.clientY+t.clientY)/2}),WC=()=>(pr*Y-xi+Y/2)*.65,qC=({towers:r,playerUnits:t,enemyUnits:n,unitProjectiles:a,particles:o,activeFireAreas:c,onPlaceTower:f,grid:h,selectedTowerType:m,playerBasePosition:p,enemyBasePosition:g,detectedByPlayer:_,detectedByEnemy:v})=>{const x=Vt.useRef(null),y=Vt.useRef(null),A=Vt.useRef(null),S=Vt.useRef(null),E=Vt.useRef(null),U=Vt.useRef(null),C=Vt.useRef(null),R=Vt.useRef(new Map),G=Vt.useRef(new Map),H=Vt.useRef(new Map),F=Vt.useRef(new Map),X=Vt.useRef(null),N=Vt.useRef(new Map),w=Vt.useRef(new Map),V=Vt.useRef(new Map),st=Vt.useRef(new Map),ut=Vt.useRef([]),vt=Vt.useRef(null),ft=Vt.useRef(null),B=Vt.useRef(null),j=Vt.useRef(null),K=Vt.useRef(new AA),At=Vt.useRef(new oe),z=Vt.useRef(new Z(0,En+Y*1.5,WC())),it=Vt.useRef(Zn*Y*.6),Et=Vt.useRef(Math.PI/3.5),Ut=Vt.useRef(0),nt=Vt.useRef(!1),pt=Vt.useRef(null),Pt=Vt.useRef(null),Ft=Vt.useRef(null),Ht=Vt.useRef(null),me=Vt.useRef([]),ae=Vt.useRef(new Map),Oe=Vt.useRef(new Map),Wt=Vt.useRef(performance.now()),jt=Vt.useRef(null),O=Vt.useRef(f),Bt=Vt.useRef(m),Zt=Vt.useRef(h),qt=Vt.useRef("none"),Rt=Vt.useRef(null),de=Vt.useRef(null),Xt=Vt.useRef(null);Vt.useEffect(()=>{O.current=f},[f]),Vt.useEffect(()=>{Bt.current=m,j.current&&(j.current.visible=!!m),!m&&B.current&&(B.current.visible=!1)},[m]),Vt.useEffect(()=>{Zt.current=h},[h]);const le=Vt.useCallback(()=>{if(!S.current)return;const L=z.current.x+it.current*Math.sin(Et.current)*Math.sin(Ut.current),T=z.current.y+it.current*Math.cos(Et.current),P=z.current.z+it.current*Math.sin(Et.current)*Math.cos(Ut.current);S.current.position.set(L,T,P),S.current.lookAt(z.current)},[]),Ae=Vt.useCallback((L,T)=>{var zt;if(!x.current||!vt.current||!K.current||!S.current||!ft.current||!B.current||Zt.current.length===0){ft.current&&(ft.current.visible=!1),B.current&&(B.current.visible=!1),jt.current=null;return}const P=x.current.getBoundingClientRect(),W=L-P.left,ct=T-P.top;At.current.x=W/P.width*2-1,At.current.y=-(ct/P.height)*2+1,K.current.setFromCamera(At.current,S.current);const $=K.current.intersectObject(vt.current);if($.length>0){ft.current.visible=!0;const Ct=$[0].point,Nt=Math.floor((Ct.x+Ps)/Y),Kt=Math.floor((Ct.z+xi)/Y),wt=Nt*Y-Ps+Y/2,Gt=Kt*Y-xi+Y/2;ft.current.position.set(wt,En+.05,Gt);const Ot=_a[Bt.current].range;if(B.current.scale.set(Ot,Ot,1),B.current.position.x=wt,B.current.position.z=Gt,B.current.visible=!0,Nt>=0&&Nt<Kn&&Kt>=0&&Kt<Zn)if(Kt===pr){const Mt=(zt=Zt.current[Nt])==null?void 0:zt[Kt];(Mt?!Mt.isOccupied:!1)?(ft.current.material.color.set(Qd),jt.current={x:Nt,z:Kt}):(ft.current.material.color.set(16711680),jt.current=null)}else ft.current.material.color.set(16777011),jt.current=null;else ft.current.material.color.set(13421772),jt.current=null}else ft.current.visible=!1,B.current&&(B.current.visible=!1),jt.current=null},[]);return Vt.useEffect(()=>{if(!x.current)return;const L=new bT;A.current=L;const T=new Hi(75,x.current.clientWidth/x.current.clientHeight,.1,Zn*Y*5);S.current=T,le();const P=new l2({antialias:!0});y.current=P,P.setSize(x.current.clientWidth,x.current.clientHeight),P.shadowMap.enabled=!0,P.shadowMap.type=iE,x.current.appendChild(P.domElement);const W=new p2(P);E.current=W;const ct=new m2(L,T);W.addPass(ct);const $=new Ja(L,T,x.current.clientWidth,x.current.clientHeight);$.kernelRadius=8,$.minDistance=.002,$.maxDistance=5,$.output=Ja.OUTPUT.Default,W.addPass($),U.current=$;const zt=new _2;W.addPass(zt);const Ct=new yA(16777215,.9);L.add(Ct);const Nt=new SA(16777215,4);Nt.position.set(Kn,Zn*1.5,Zn*.8),Nt.castShadow=!0,Nt.shadow.mapSize.width=2048,Nt.shadow.mapSize.height=2048,Nt.shadow.camera.near=.5,Nt.shadow.camera.far=Zn*Y*3,Nt.shadow.camera.left=-Kn*Y*1.5,Nt.shadow.camera.right=Kn*Y*1.5,Nt.shadow.camera.top=Zn*Y*1.5,Nt.shadow.camera.bottom=-Zn*Y*1.5,L.add(Nt);const Kt=new Sa(T.far*.8,32,15),wt=" varying vec3 vViewDirection; void main() { vec4 worldPosition = modelMatrix * vec4(position, 1.0); vViewDirection = normalize(worldPosition.xyz - cameraPosition); gl_Position = projectionMatrix * viewMatrix * worldPosition; } ",Gt=" uniform vec3 uTopColor; uniform vec3 uHorizonColor; varying vec3 vViewDirection; void main() { float gradientStart = -0.1; float gradientEnd = 0.4; float t = clamp((vViewDirection.y - gradientStart) / (gradientEnd - gradientStart), 0.0, 1.0); t = pow(t, 1.0); gl_FragColor = vec4(mix(uHorizonColor, uTopColor, t), 1.0); } ",tt=new ni({uniforms:{uTopColor:{value:new Me(uC)},uHorizonColor:{value:new Me(fC)}},vertexShader:wt,fragmentShader:Gt,side:Ei,depthWrite:!1,fog:!1});C.current=new ve(Kt,tt),C.current.renderOrder=-1,C.current.raycast=()=>{},L.add(C.current);const Ot=new va(Kn*Y,Zn*Y),Mt=new dn({color:5605461,side:jn}),Dt=new ve(Ot,Mt);Dt.rotation.x=-Math.PI/2,Dt.position.y=En,Dt.receiveShadow=!0,L.add(Dt);const I=pr*Y-xi+Y/2;vt.current=new ve(new va(Kn*Y,Y),new ra({color:43520,transparent:!0,opacity:0,side:jn,depthTest:!0})),vt.current.rotation.x=-Math.PI/2,vt.current.position.set(0,En+.01,I),L.add(vt.current),j.current=new ve(new va(Kn*Y,Y),new ra({color:Qd,transparent:!0,opacity:.1,side:jn})),j.current.rotation.x=-Math.PI/2,j.current.position.set(0,En+.005,I),j.current.visible=!1,L.add(j.current),ft.current=new ve(new vn(Y*.95,.1,Y*.95),new ra({color:Qd,transparent:!0,opacity:.6})),ft.current.visible=!1,L.add(ft.current);const Tt=new xm(1,32),ot=new ra({color:$2,transparent:!0,opacity:tC,side:jn,depthTest:!1});B.current=new ve(Tt,ot),B.current.rotation.x=-Math.PI/2,B.current.position.y=eC,B.current.visible=!1,L.add(B.current),Ft.current=HC(p),L.add(Ft.current),Ht.current=GC(g),L.add(Ht.current);const St=new wi,rt=new Float32Array(go*3),gt=new Float32Array(go*3),yt=new Float32Array(go);St.setAttribute("position",new Gi(rt,3)),St.setAttribute("customColor",new Gi(gt,3)),St.setAttribute("size",new Gi(yt,1)),St.drawRange={start:0,count:0};const Yt=new ni({uniforms:{pointTexture:{value:new vA().load('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="white"/></svg>')}},vertexShader:" attribute float size; attribute vec3 customColor; varying vec3 vColor; void main() { vColor = customColor; vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 ); gl_PointSize = size * ( 300.0 / -mvPosition.z ); gl_Position = projectionMatrix * mvPosition; } ",fragmentShader:" uniform sampler2D pointTexture; varying vec3 vColor; void main() { gl_FragColor = vec4( vColor, 1.0 ); gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord ); } ",transparent:!0,blending:op,depthWrite:!1,vertexColors:!0});X.current=new LT(St,Yt),L.add(X.current),V.current.size===0&&["PLAYER","ENEMY"].forEach(re=>{const ee=new Map;Object.values(xt).forEach($t=>{ee.set($t,[])}),V.current.set(re,ee)}),st.current.size===0&&[...Object.values(Ge),...Object.values(xt)].forEach(ee=>{st.current.set(ee,[])}),me.current=YC(L,ae,Oe),Wt.current=performance.now();const se=()=>{if(S.current&&y.current&&x.current&&E.current&&U.current){const re=x.current.clientWidth,ee=x.current.clientHeight;S.current.aspect=re/ee,S.current.updateProjectionMatrix(),y.current.setSize(re,ee),E.current.setSize(re,ee),U.current.setSize(re,ee)}};window.addEventListener("resize",se);const Qt=re=>{(re.button===0||re.button===2)&&(nt.current=!0,pt.current={x:re.clientX,y:re.clientY},Pt.current={x:re.clientX,y:re.clientY})},$e=re=>{const ee=O.current,$t=Bt.current;re.button===0&&jt.current&&$t&&(!nt.current||Pt.current&&Math.sqrt(Math.pow(re.clientX-Pt.current.x,2)+Math.pow(re.clientY-Pt.current.y,2))<Ux)&&ee(jt.current),nt.current=!1,pt.current=null,Pt.current=null},fe=re=>{if(x.current){if(nt.current&&pt.current&&S.current){const ee=re.clientX-pt.current.x,$t=re.clientY-pt.current.y;let Le=!1;if(re.buttons===1)Ut.current+=ee*Dx,Et.current=Math.max(Nx,Math.min(Lx,Et.current+$t*Dx)),Le=!0;else if(re.buttons===2){const tn=S.current,en=j2*it.current,Ie=new Z,yi=new Z;tn.matrixWorld.extractBasis(Ie,yi,new Z),z.current.addScaledVector(Ie,-ee*en),z.current.addScaledVector(yi,$t*en),Le=!0}Le&&le(),pt.current={x:re.clientX,y:re.clientY}}Bt.current?Ae(re.clientX,re.clientY):(ft.current&&(ft.current.visible=!1),B.current&&(B.current.visible=!1),jt.current=null)}},be=re=>re.preventDefault(),we=re=>{it.current=Math.max(Px,Math.min(Ox,it.current+re.deltaY*K2)),le()},Sn=re=>{if(re.preventDefault(),!x.current)return;const ee=re.touches;ee.length===1?(qt.current="rotate",pt.current={x:ee[0].clientX,y:ee[0].clientY},Xt.current={x:ee[0].clientX,y:ee[0].clientY},Bt.current&&Ae(ee[0].clientX,ee[0].clientY)):ee.length===2?(qt.current="zoom_pan",Rt.current=ip(ee[0],ee[1]),de.current=ap(ee[0],ee[1]),nt.current=!1,ft.current&&(ft.current.visible=!1),B.current&&(B.current.visible=!1)):qt.current="none"},pn=re=>{if(re.preventDefault(),!x.current||!S.current)return;const ee=re.touches;if(qt.current==="rotate"&&ee.length===1){if(pt.current){const $t=ee[0],Le=$t.clientX-pt.current.x,tn=$t.clientY-pt.current.y;Bt.current&&Ae($t.clientX,$t.clientY),Ut.current+=Le*Ix,Et.current=Math.max(Nx,Math.min(Lx,Et.current+tn*Ix)),le(),pt.current={x:$t.clientX,y:$t.clientY}}}else if(qt.current==="zoom_pan"&&ee.length===2&&Rt.current!==null&&de.current){const $t=ee[0],Le=ee[1],tn=ip($t,Le),en=tn-Rt.current;it.current=Math.max(Px,Math.min(Ox,it.current-en*J2)),Rt.current=tn;const Ie=ap($t,Le),yi=Ie.x-de.current.x,$i=Ie.y-de.current.y,fi=S.current,D=Q2*it.current,et=new Z,Q=new Z;fi.matrixWorld.extractBasis(et,Q,new Z),z.current.addScaledVector(et,-yi*D),z.current.addScaledVector(Q,$i*D),de.current=Ie,le(),ft.current&&(ft.current.visible=!1),B.current&&(B.current.visible=!1)}},Ke=re=>{if(re.preventDefault(),!x.current)return;const ee=re.touches,$t=O.current;if(qt.current==="rotate"&&re.changedTouches.length>0&&ee.length===0&&Bt.current&&Xt.current&&jt.current){const Le=re.changedTouches[0].clientX,tn=re.changedTouches[0].clientY;Math.sqrt(Math.pow(Le-Xt.current.x,2)+Math.pow(tn-Xt.current.y,2))<Ux&&$t(jt.current)}ee.length===0?(qt.current="none",pt.current=null,Xt.current=null,Rt.current=null,de.current=null,Bt.current||(ft.current&&(ft.current.visible=!1),B.current&&(B.current.visible=!1))):ee.length===1?(qt.current="rotate",pt.current={x:ee[0].clientX,y:ee[0].clientY},Xt.current={x:ee[0].clientX,y:ee[0].clientY},Rt.current=null,de.current=null,Bt.current&&Ae(ee[0].clientX,ee[0].clientY)):ee.length>=2&&(qt.current="zoom_pan",Rt.current=ip(ee[0],ee[1]),de.current=ap(ee[0],ee[1]),ft.current&&(ft.current.visible=!1),B.current&&(B.current.visible=!1))},qe=x.current;qe.addEventListener("mousedown",Qt),qe.addEventListener("mouseup",$e),qe.addEventListener("mousemove",fe),qe.addEventListener("wheel",we),qe.addEventListener("contextmenu",be),qe.addEventListener("touchstart",Sn,{passive:!1}),qe.addEventListener("touchmove",pn,{passive:!1}),qe.addEventListener("touchend",Ke,{passive:!1}),qe.addEventListener("touchcancel",Ke,{passive:!1});const Qn=()=>{requestAnimationFrame(Qn);const re=performance.now(),ee=(re-Wt.current)/1e3;Wt.current=re,ae.current.forEach($t=>{$t.angle+=$t.speed*ee;const Le=$t.orbitCenter.x+$t.radius*Math.cos($t.angle),tn=$t.orbitCenter.z+$t.radius*Math.sin($t.angle);$t.mesh.position.set(Le,$t.height,tn);const en=$t.orbitCenter.x+$t.radius*Math.cos($t.angle+.1),Ie=$t.orbitCenter.z+$t.radius*Math.sin($t.angle+.1);$t.mesh.lookAt(en,$t.height,Ie),$t.mesh.rotation.x=$t.initialPitch}),Oe.current.forEach($t=>{if($t.timeUntilNewTargetMs-=ee*1e3,$t.timeUntilNewTargetMs<=0){if(Math.random()>UC){$t.isMoving=!0;const Le=Math.random()*Math.PI*2,tn=Math.random()*CC;$t.currentWanderTarget=new Z($t.origin.x+Math.cos(Le)*tn,$t.origin.y,$t.origin.z+Math.sin(Le)*tn)}else $t.isMoving=!1,$t.currentWanderTarget=null;$t.timeUntilNewTargetMs=Qx+Math.random()*(nm-Qx)}if($t.isMoving&&$t.currentWanderTarget){const Le=$t.currentWanderTarget.clone().sub($t.mesh.position);if(Le.length()>LC){Le.normalize(),$t.mesh.position.addScaledVector(Le,DC*ee);const en=Math.atan2(Le.x,Le.z);$t.mesh.rotation.y=TE.lerp($t.mesh.rotation.y,en,NC)}else $t.isMoving=!1,$t.timeUntilNewTargetMs=0}}),E.current?E.current.render():y.current&&A.current&&S.current&&y.current.render(A.current,S.current)};return Qn(),()=>{var re,ee,$t,Le,tn,en,Ie,yi,$i,fi,D,et;if(qe.removeEventListener("mousedown",Qt),qe.removeEventListener("mouseup",$e),qe.removeEventListener("mousemove",fe),qe.removeEventListener("wheel",we),qe.removeEventListener("contextmenu",be),qe.removeEventListener("touchstart",Sn),qe.removeEventListener("touchmove",pn),qe.removeEventListener("touchend",Ke),qe.removeEventListener("touchcancel",Ke),window.removeEventListener("resize",se),me.current.forEach(Q=>{var lt;(lt=A.current)==null||lt.remove(Q),Q.traverse(J=>{J instanceof ve&&(J.geometry.dispose(),Array.isArray(J.material)?J.material.forEach(kt=>kt.dispose()):J.material instanceof qn&&J.material.dispose())})}),me.current=[],ae.current.forEach(Q=>{var lt;(lt=A.current)==null||lt.remove(Q.mesh),Q.mesh.geometry.dispose(),Q.mesh.material instanceof qn&&Q.mesh.material.dispose()}),ae.current.clear(),Oe.current.forEach(Q=>{var lt;(lt=A.current)==null||lt.remove(Q.mesh),Q.mesh.traverse(J=>{J instanceof ve&&(J.geometry.dispose(),J.material instanceof qn&&J.material.dispose())})}),Oe.current.clear(),C.current&&((re=A.current)==null||re.remove(C.current),C.current.geometry.dispose(),C.current.material instanceof qn&&C.current.material.dispose(),C.current=null),(ee=U.current)==null||ee.dispose(),($t=E.current)==null||$t.dispose(),y.current&&(y.current.dispose(),y.current.domElement.parentNode===x.current&&((Le=x.current)==null||Le.removeChild(y.current.domElement))),R.current.forEach(Q=>{var lt;(lt=A.current)==null||lt.remove(Q),Ki(Q)}),R.current.clear(),G.current.forEach(Q=>{var lt;(lt=A.current)==null||lt.remove(Q),Ki(Q)}),G.current.clear(),H.current.forEach(Q=>{var lt;(lt=A.current)==null||lt.remove(Q),Ki(Q)}),H.current.clear(),V.current.forEach(Q=>{Q.forEach(lt=>{lt.forEach(J=>{Ki(J)})})}),V.current.clear(),F.current.forEach(Q=>{var lt;(lt=A.current)==null||lt.remove(Q),Ki(Q)}),F.current.clear(),st.current.forEach(Q=>{Q.forEach(lt=>{Ki(lt)})}),st.current.clear(),X.current){(tn=A.current)==null||tn.remove(X.current),X.current.geometry.dispose();const Q=X.current.material;(en=Q.uniforms.pointTexture.value)==null||en.dispose(),Q.dispose(),X.current=null}N.current.forEach(Q=>{var lt;(lt=A.current)==null||lt.remove(Q),Q.geometry.dispose(),Q.material instanceof qn&&Q.material.dispose()}),N.current.clear(),w.current.forEach(Q=>{var lt;(lt=A.current)==null||lt.remove(Q),Ki(Q)}),w.current.clear(),ut.current.forEach(Q=>{Ki(Q)}),ut.current=[],Ft.current&&((Ie=A.current)==null||Ie.remove(Ft.current),Ki(Ft.current)),Ht.current&&((yi=A.current)==null||yi.remove(Ht.current),Ki(Ht.current)),vt.current&&(($i=A.current)==null||$i.remove(vt.current),vt.current.geometry.dispose(),vt.current.material instanceof qn&&vt.current.material.dispose()),ft.current&&((fi=A.current)==null||fi.remove(ft.current),ft.current.geometry.dispose(),ft.current.material instanceof qn&&ft.current.material.dispose()),B.current&&((D=A.current)==null||D.remove(B.current),B.current.geometry.dispose(),B.current.material instanceof qn&&B.current.material.dispose()),j.current&&((et=A.current)==null||et.remove(j.current),j.current.geometry.dispose(),j.current.material instanceof qn&&j.current.material.dispose()),A.current=null}},[le,p,g,Ae]),Vt.useEffect(()=>{if(!A.current)return;const L=A.current,T=new Set;r.forEach(P=>{T.add(P.id);let W=R.current.get(P.id);W||(W=VC(P.type,_a[P.type]),L.add(W),R.current.set(P.id,W)),W.position.set(P.position.x,P.position.y,P.position.z);const ct=W.getObjectByName("turret");ct&&P.rotationY!==void 0&&(ct.rotation.y=P.rotationY)}),R.current.forEach((P,W)=>{T.has(W)||(L.remove(P),Ki(P),R.current.delete(W))})},[r]),Vt.useEffect(()=>{if(!A.current||!V.current.get("PLAYER"))return;const L=A.current,T=new Set;t.forEach(P=>{var Ct;T.add(P.id);let W=G.current.get(P.id);const ct=je[P.type];if(!W){const Nt=(Ct=V.current.get("PLAYER"))==null?void 0:Ct.get(P.type);Nt&&Nt.length>0?(W=Nt.pop(),L.add(W)):(W=Jx(P.type,"PLAYER",ct),L.add(W)),W.visible=!0,G.current.set(P.id,W)}W.position.set(P.position.x,P.position.y,P.position.z),P.rotationY!==void 0&&(W.rotation.y=P.rotationY);const zt=v.has(P.id)?1:nC;W.traverse(Nt=>{if(Nt instanceof ve&&Nt.userData.originalColor){const Kt=Nt.userData.originalColor;Nt.material.color.set(Kt).multiplyScalar(zt),Nt.material.needsUpdate=!0}})}),G.current.forEach((P,W)=>{var ct;if(!T.has(W)){P.visible=!1,L.remove(P);const $=P.userData.unitType,zt=P.userData.owner,Ct=(ct=V.current.get(zt))==null?void 0:ct.get($);Ct?Ct.push(P):console.warn("Pool not found for player unit type:",$),G.current.delete(W)}})},[t,v]),Vt.useEffect(()=>{if(!A.current||!V.current.get("ENEMY"))return;const L=A.current,T=new Set;n.forEach(P=>{var Ct;T.add(P.id);let W=H.current.get(P.id);const ct=je[P.type];if(!W){const Nt=(Ct=V.current.get("ENEMY"))==null?void 0:Ct.get(P.type);Nt&&Nt.length>0?(W=Nt.pop(),L.add(W)):(W=Jx(P.type,"ENEMY",ct),L.add(W)),W.visible=!0,H.current.set(P.id,W)}W.position.set(P.position.x,P.position.y,P.position.z),P.rotationY!==void 0&&(W.rotation.y=P.rotationY);const zt=_.has(P.id)?1:iC;W.traverse(Nt=>{if(Nt instanceof ve&&Nt.userData.originalColor){const Kt=Nt.userData.originalColor;Nt.material.color.set(Kt).multiplyScalar(zt),Nt.material.needsUpdate=!0}})}),H.current.forEach((P,W)=>{var ct;if(!T.has(W)){P.visible=!1,L.remove(P);const $=P.userData.unitType,zt=P.userData.owner,Ct=(ct=V.current.get(zt))==null?void 0:ct.get($);Ct?Ct.push(P):console.warn("Pool not found for enemy unit type:",$),H.current.delete(W)}})},[n,_]),Vt.useEffect(()=>{if(Ft.current){const T=v.has(mo)?1:Bx;Ft.current.traverse(P=>{if(P instanceof ve&&P.userData.originalColor){const W=P.userData.originalColor;P.material.color.set(W).multiplyScalar(T),P.material.needsUpdate=!0}})}if(Ht.current){const T=_.has(ho)?1:Bx;Ht.current.traverse(P=>{if(P instanceof ve&&P.userData.originalColor){const W=P.userData.originalColor;P.material.color.set(W).multiplyScalar(T),P.material.needsUpdate=!0}})}},[_,v]),Vt.useEffect(()=>{if(!A.current||!st.current)return;const L=A.current,T=new Set;a.forEach(P=>{T.add(P.id);let W=F.current.get(P.id);if(!W){const $=st.current.get(P.projectileType);$&&$.length>0?W=$.pop():W=kC(P.projectileType,P.owner),L.add(W),F.current.set(P.id,W)}W.visible=!0;const ct=W.userData.pointLight;if(ct&&(ct.intensity=P.projectileType===Ge.LASER||P.projectileType===xt.GRENADIER?0:P.projectileType===Ge.MACHINE_GUN||P.projectileType===xt.INFANTRY?5:8),P.projectileType===Ge.LASER){const $=W.getObjectByName("laser_beam");if($)if(P.targetPosition&&P.laserEndTime&&performance.now()<P.laserEndTime){$.visible=!0;const zt=new Z(P.position.x,P.position.y,P.position.z),Ct=new Z(P.targetPosition.x,P.targetPosition.y,P.targetPosition.z),Nt=zt.distanceTo(Ct);W.position.copy(zt).lerp(Ct,.5),W.lookAt(Ct),$.scale.set(1,Nt,1),$.rotation.x=Math.PI/2,$.position.set(0,0,0)}else $.visible=!1,W.visible=!1,ct&&(ct.intensity=0)}else W.position.set(P.position.x,P.position.y,P.position.z),(P.velocity.x!==0||P.velocity.y!==0||P.velocity.z!==0)&&W.lookAt(P.position.x+P.velocity.x,P.position.y+P.velocity.y,P.position.z+P.velocity.z)}),F.current.forEach((P,W)=>{if(!T.has(W)){P.visible=!1;const ct=P.userData.pointLight;ct&&(ct.intensity=0),L.remove(P);const $=P.userData.projectileType,zt=st.current.get($);zt?zt.push(P):(console.warn(`No pool for projectile type ${$} during cleanup.`),Ki(P)),F.current.delete(W)}})},[a]),Vt.useEffect(()=>{if(!A.current||!X.current)return;const L=X.current,T=L.geometry,P=T.attributes.position,W=T.attributes.customColor,ct=T.attributes.size,$=Math.min(o.length,go);for(let zt=0;zt<$;zt++){const Ct=o[zt];P.setXYZ(zt,Ct.position.x,Ct.position.y,Ct.position.z);const Nt=new Me(Ct.color);W.setXYZ(zt,Nt.r,Nt.g,Nt.b),ct.setX(zt,Ct.currentSize)}T.drawRange.count=$,P.needsUpdate=!0,W.needsUpdate=!0,ct.needsUpdate=!0,L.visible=$>0},[o]),Vt.useEffect(()=>{if(!A.current)return;const L=A.current,T=new Set;c.forEach(P=>{T.add(P.id);let W=N.current.get(P.id);if(!W){const zt=new Fn(P.radius,P.radius*.9,Y*.05,16,1,!0),Ct=new ra({color:3346688,transparent:!0,opacity:.3,side:jn,depthWrite:!1});W=new ve(zt,Ct),W.position.set(P.position.x,P.position.y+Y*.025,P.position.z),L.add(W),N.current.set(P.id,W)}const ct=(performance.now()-P.startTime)/P.durationMs,$=W.material;$.opacity=Math.max(0,.3*(1-ct))}),N.current.forEach((P,W)=>{T.has(W)||(L.remove(P),P.geometry.dispose(),P.material instanceof qn&&P.material.dispose(),N.current.delete(W))})},[c]),Vt.useEffect(()=>{if(!A.current||!S.current)return;const L=A.current,T=S.current,P=[...t,...n],W=new Set;P.forEach(ct=>{const $=je[ct.type],zt=$.health,Ct=Math.max(0,ct.health/zt),Nt=ct.health>0&&ct.health<zt*FC,Kt=PC*($.visualScale||1),wt=OC;if(Nt){W.add(ct.id);let Gt=w.current.get(ct.id);if(!Gt){if(ut.current.length>0){Gt=ut.current.pop();const Mt=Gt.children[0];if(Mt){const Dt=Mt.geometry.parameters.width;Mt.scale.x=Kt/Dt;const I=Gt.getObjectByName("foregroundHealth");if(I){const Tt=I.geometry.parameters.width;I.scale.x=Kt/Tt}}}else{Gt=new vi;const Mt=new va(Kt,wt),Dt=new ra({color:zC,side:jn}),I=new ve(Mt,Dt);Gt.add(I);const Tt=new va(Kt,wt),ot=new ra({color:BC,side:jn}),St=new ve(Tt,ot);St.name="foregroundHealth",St.position.z=.001,Gt.add(St)}L.add(Gt),w.current.set(ct.id,Gt)}const tt=XC(ct.type,$.visualScale||1);Gt.position.x=ct.position.x,Gt.position.y=ct.position.y+tt+IC,Gt.position.z=ct.position.z;const Ot=Gt.getObjectByName("foregroundHealth");Ot&&(Ot.scale.x=Ct,Ot.position.x=-(Kt*(1-Ct))/2),Gt.quaternion.copy(T.quaternion),Gt.visible=!0}}),w.current.forEach((ct,$)=>{W.has($)||(ct.visible=!1,ut.current.push(ct),w.current.delete($))})},[t,n,S,A]),Re.jsx("div",{ref:x,className:"w-full h-full cursor-grab active:cursor-grabbing",style:{touchAction:"none"}})},ZC=({type:r,spec:t,isSelected:n,onClick:a,disabled:o,money:c})=>{const f=c>=t.cost,h=o||!f;return Re.jsxs("button",{onClick:a,disabled:h,className:`p-1 sm:p-1.5 md:p-2 border-2 rounded-lg transition-all duration-150 h-full
        ${n?"border-yellow-400 bg-yellow-600 scale-105 shadow-lg":"border-gray-600 hover:border-gray-400"}
        ${h&&!n?"bg-gray-700 opacity-50 cursor-not-allowed":f?"bg-gray-700 hover:bg-gray-600":"bg-red-800 opacity-70 cursor-not-allowed"}
        flex flex-col items-center justify-between w-[4.8rem] sm:w-24 md:w-28 text-[0.65rem] leading-[0.85rem] sm:text-xs sm:leading-tight flex-shrink-0`,children:[Re.jsx("span",{className:"font-semibold truncate w-full px-0.5",children:r.replace("_"," ")}),Re.jsx("div",{className:"w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full my-0.5 sm:my-1",style:{backgroundColor:`#${t.color.toString(16).padStart(6,"0")}`}}),Re.jsxs("span",{children:["Cost: ",t.cost]}),Re.jsxs("span",{children:["Dmg: ",t.damage]}),Re.jsxs("span",{children:["Rng: ",t.range/Y]})]})},jC=({type:r,spec:t,onClick:n,disabled:a,money:o})=>{const c=o>=t.cost,f=a||!c;return Re.jsxs("button",{onClick:n,disabled:f,className:`p-1 sm:p-1.5 md:p-2 border-2 rounded-lg transition-all duration-150 h-full border-blue-600 hover:border-blue-400
                ${f?"bg-gray-700 opacity-50 cursor-not-allowed":c?"bg-blue-700 hover:bg-blue-600":"bg-red-800 opacity-70 cursor-not-allowed"}
                flex flex-col items-center justify-between w-[4.8rem] sm:w-24 md:w-28 text-[0.65rem] leading-[0.85rem] sm:text-xs sm:leading-tight flex-shrink-0`,children:[Re.jsx("span",{className:"font-semibold truncate w-full px-0.5",children:r.replace("_"," ")}),Re.jsx("div",{className:"w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-sm my-0.5 sm:my-1",style:{backgroundColor:"#3d8bff"}}),Re.jsxs("span",{children:["Cost: ",t.cost]}),Re.jsxs("span",{children:["HP: ",t.health]}),Re.jsxs("span",{children:["Dmg: ",t.projectileDamage]})]})},KC=({money:r,playerBaseHealth:t,enemyBaseHealth:n,selectedTowerType:a,onSelectTowerType:o,onStartCombat:c,onBuildUnit:f,gamePhase:h})=>{const m=Object.keys(_a),p=Object.keys(je).filter(v=>v!==xt.SUPER_TANK),g=h==="ACTIVE_COMBAT"||h==="GAME_OVER"||h==="VICTORY",_=h==="GAME_OVER"||h==="VICTORY";return Re.jsxs("div",{className:"p-1 sm:p-2 md:p-2 bg-gray-900 text-white shadow-md flex flex-col md:flex-row md:justify-between md:items-start gap-1 sm:gap-1.5 md:gap-2",children:[Re.jsxs("div",{className:"w-full md:w-auto flex flex-row flex-wrap justify-center items-baseline md:flex-col md:items-start md:justify-start gap-x-2 sm:gap-x-3 gap-y-0.5 mb-1 md:mb-0 md:space-y-0.5 flex-shrink-0",children:[Re.jsxs("p",{className:"text-xs sm:text-sm md:text-base font-semibold",children:["Money: ",Re.jsxs("span",{className:"text-yellow-400",children:["$",Math.round(r)]})]}),Re.jsxs("p",{className:"text-xs sm:text-sm md:text-base font-semibold",children:["Your Base: ",Re.jsxs("span",{className:"text-green-500",children:[Math.round(t)," HP"]})]}),Re.jsxs("p",{className:"text-xs sm:text-sm md:text-base font-semibold",children:["Enemy Base: ",Re.jsxs("span",{className:"text-red-500",children:[Math.round(n)," HP"]})]})]}),!_&&Re.jsx("div",{className:"w-full overflow-x-auto py-1 sm:py-1.5 md:py-1.5 build-controls-scrollbar md:flex-1 md:min-w-0",children:Re.jsxs("div",{className:"flex space-x-1.5 sm:space-x-2 items-stretch px-1 min-w-max",children:[m.map(v=>Re.jsx(ZC,{type:v,spec:_a[v],isSelected:a===v,onClick:()=>o(a===v?null:v),disabled:_,money:r},v)),p.map(v=>Re.jsx(jC,{type:v,spec:je[v],onClick:()=>f(v),disabled:_,money:r},v))]})}),Re.jsxs("div",{className:"w-full md:w-auto flex flex-col items-center md:items-end gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0 mt-1 md:mt-0",children:[h==="ACTIVE_COMBAT"&&!_&&Re.jsx("p",{className:"text-xs sm:text-sm md:text-base font-semibold text-yellow-500 self-center md:self-end",children:"Combat in Progress!"}),(h==="GAME_OVER"||h==="VICTORY")&&Re.jsx("p",{className:`text-base sm:text-lg md:text-xl font-bold self-center md:self-end ${h==="VICTORY"?"text-green-400":"text-red-400"}`,children:h==="VICTORY"?"VICTORY!":"GAME OVER"}),h==="PLACEMENT"&&!_&&Re.jsx("button",{onClick:c,disabled:g,className:`w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors
                ${g?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-orange-500 hover:bg-orange-600 text-white"}`,children:"Start Combat"})]})]})},QC=({className:r})=>Re.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:r,children:Re.jsx("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 2h-2v3h-3v2h5v-5zm-3-4V5h3v5h-2V7h-3z"})}),JC=({className:r})=>Re.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:r,children:Re.jsx("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm3-8V5h-2v5h5V8h-3z"})}),$C=()=>{const[r,t]=Vt.useState(!1),n=Vt.useCallback(()=>{t(!!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement))},[]);Vt.useEffect(()=>(document.addEventListener("fullscreenchange",n),document.addEventListener("mozfullscreenchange",n),document.addEventListener("webkitfullscreenchange",n),document.addEventListener("msfullscreenchange",n),n(),()=>{document.removeEventListener("fullscreenchange",n),document.removeEventListener("mozfullscreenchange",n),document.removeEventListener("webkitfullscreenchange",n),document.removeEventListener("msfullscreenchange",n)}),[n]);const a=()=>{if(r)document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen();else{const o=document.documentElement;o.requestFullscreen?o.requestFullscreen():o.mozRequestFullScreen?o.mozRequestFullScreen():o.webkitRequestFullscreen?o.webkitRequestFullscreen():o.msRequestFullscreen&&o.msRequestFullscreen()}};return Re.jsx("button",{onClick:a,className:"fixed top-2 right-2 z-50 p-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors","aria-label":r?"Exit fullscreen":"Enter fullscreen",title:r?"Exit fullscreen":"Enter fullscreen",children:r?Re.jsx(JC,{className:"w-5 h-5"}):Re.jsx(QC,{className:"w-5 h-5"})})},Qi=()=>Math.random().toString(36).substring(2,15),xn=(r,t)=>Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)+Math.pow(r.z-t.z,2)),tD=(r,t)=>Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2)+Math.pow(r.z-t.z,2),sp=(r,t,n)=>{const a=tD(t,n);if(a===0)return xn(r,t);let o=((r.x-t.x)*(n.x-t.x)+(r.y-t.y)*(n.y-t.y)+(r.z-t.z)*(n.z-t.z))/a;o=Math.max(0,Math.min(1,o));const c={x:t.x+o*(n.x-t.x),y:t.y+o*(n.y-t.y),z:t.z+o*(n.z-t.z)};return xn(r,c)},$x=()=>({x:0,y:En+wn/2,z:pr*Y-xi+Y/2}),tE=()=>({x:0,y:En+wn/2,z:Gl*Y-xi+Y/2}),eD=r=>r===Ge.CANNON||r===xt.ARTILLERY?Y*.25:r===Ge.MACHINE_GUN?Y*.05:r===xt.INFANTRY?Y*.04:r===xt.SUPER_TANK?Y*.15:r===xt.LIGHT_TANK||r===xt.HEAVY_TANK?Y*.12:r===xt.GRENADIER?Y*.15:Y*.1,ue={MACHINE_GUN_FIRE:"machine_gun_fire",CANNON_FIRE:"cannon_fire",TANK_FIRE:"tank_fire",UNIT_DEATH_PLAYER:"unit_death_player",UNIT_DEATH_ENEMY:"unit_death_enemy",UNIT_HIT_PLAYER:"unit_hit_player",UNIT_HIT_ENEMY:"unit_hit_enemy",BASE_EXPLOSION_PLAYER:"base_explosion_player",BASE_EXPLOSION_ENEMY:"base_explosion_enemy",CANNON_BALL_EXPLODE:"cannon_ball_explode",BGM_COMBAT:"bgm_combat",FIREWORK_EXPLODE:"firework_explode",INFANTRY_FIRE:"infantry_fire",GRENADE_EXPLODE:"grenade_explode"},_i=Qu.createRef(),Co=Qu.createRef();Co.current||(Co.current={});const qa=Qu.createRef(),bi=async(r,t)=>{if(_i.current)try{const n=await fetch(t);if(!n.ok)throw new Error(`Failed to fetch ${t}: ${n.statusText}`);const a=await n.arrayBuffer(),o=await _i.current.decodeAudioData(a);Co.current[r]=o}catch(n){console.error(`Error loading sound ${r} from ${t}:`,n)}},Te=(r,t=1,n=!1)=>{if(!_i.current||!Co.current[r]||_i.current.state!=="running")return null;const a=_i.current.createBufferSource();a.buffer=Co.current[r],a.loop=n;const o=_i.current.createGain();return o.gain.setValueAtTime(t,_i.current.currentTime),a.connect(o),o.connect(_i.current.destination),a.start(0),n?a:null},Bu=()=>_i.current&&_i.current.state==="suspended"?_i.current.resume().then(()=>{}).catch(r=>{throw console.error("Error resuming audio context:",r),r}):Promise.resolve(),rp=(r,t,n)=>{let a=[],o=n;const c=t?r-t:0;let f=null;for(let h=Kd.length-1;h>=0;h--)if(c>=Kd[h].minTime){f=Kd[h];break}if(f){const h=o*f.maxAffordableCostPercent;let m=0;const p=f.spawnSpreadFactor!==void 0?f.spawnSpreadFactor:.9,g=f.isEndlessWave===!0;for(const _ of f.units){const v=je[_.type];if(v.cost<=0&&_.type!==xt.SUPER_TANK)continue;let x=_.count;if(g){const y=.8+Math.random()*.2;x=Math.floor(_.count*y)}for(let y=0;y<x&&(m+v.cost<=h&&o>=v.cost);y++){o-=v.cost,m+=v.cost;const S=(Math.random()-.5)*(Kn*p)*Y,U=Gl*Y-xi+Y/2+Y*(.5+Math.random()*.5);let C=wn;_.type===xt.INFANTRY||_.type===xt.GRENADIER?C=oa:_.type===xt.ARTILLERY&&(C=dr);const R={id:Qi(),type:_.type,owner:"ENEMY",position:{x:S,y:En+C/2*(v.visualScale||1),z:U},health:v.health,targetId:mo,rotationY:0,lastAttackTime:0};a.push(R)}}}return{updatedMoney:o,newUnits:a}},nD=()=>{const[r,t]=Vt.useState("PLACEMENT"),[n,a]=Vt.useState([]),[o,c]=Vt.useState([]),[f,h]=Vt.useState([]),[m,p]=Vt.useState([]),[g,_]=Vt.useState([]),[v,x]=Vt.useState([]),[y,A]=Vt.useState(b2),[S,E]=Vt.useState(N2),[U,C]=Vt.useState(Pu),[R,G]=Vt.useState(Ou),[H,F]=Vt.useState(null),[X,N]=Vt.useState([]),[w,V]=Vt.useState(new Set),[st,ut]=Vt.useState(new Set),vt=Vt.useRef($x()),ft=Vt.useRef(tE()),B=Vt.useRef(performance.now()),j=Vt.useRef(null),K=Vt.useRef(0),At=Vt.useRef(!1),z=Vt.useRef(0),it=Vt.useRef(0),Et=Vt.useRef(r);Vt.useEffect(()=>{Et.current=r},[r]);const Ut=Vt.useRef([]),nt=Vt.useCallback((Wt,jt)=>{const O=[];let Bt=0;for(const Zt of Ut.current)if(!Zt.isActive&&(jt(Zt,Bt),O.push(Zt),Bt++,Bt>=Wt))break;return O},[]),pt=Vt.useCallback((Wt,jt,O)=>nt(H2,Bt=>{const Zt=Math.random()*Math.PI*2,qt=(Math.random()-.5)*Math.PI,Rt=V2*(.5+Math.random()*1.5);Bt.position={...Wt},Bt.velocity={x:Math.cos(Zt)*Math.cos(qt)*Rt,y:Math.abs(Math.sin(qt))*Rt,z:Math.sin(Zt)*Math.cos(qt)*Rt},Bt.startTime=O,Bt.maxLife=G2*(.7+Math.random()*.6),Bt.color=jt,Bt.initialSize=Ax*(.7+Math.random()*.6),Bt.currentSize=Bt.initialSize,Bt.isActive=!0,Bt.hasGravity=!1}),[nt]),Pt=Vt.useCallback((Wt,jt)=>{const O=Mx[Math.floor(Math.random()*Mx.length)];return nt(z2,Bt=>{const Zt=Math.random()*Math.PI*2,qt=Math.acos(1-2*Math.random()),Rt=Tx*(.6+Math.random()*.8);Bt.position={...Wt},Bt.velocity={x:Math.sin(qt)*Math.cos(Zt)*Rt,y:Math.cos(qt)*Rt+Math.random()*Tx*.1,z:Math.sin(qt)*Math.sin(Zt)*Rt},Bt.startTime=jt,Bt.maxLife=B2*(.8+Math.random()*.4),Bt.color=O,Bt.initialSize=Ax*(.9+Math.random()*.3),Bt.currentSize=Bt.initialSize,Bt.isActive=!0,Bt.hasGravity=!0})},[nt]),Ft=Vt.useCallback((Wt,jt,O)=>{let Bt=null;for(const Zt of Ut.current)if(!Zt.isActive){const qt=Math.random()*Math.PI*2,Rt=Math.random()*jt*q2,de=Wt.x+Math.cos(qt)*Rt,Xt=Wt.z+Math.sin(qt)*Rt;Zt.position={x:de,y:Wt.y+Y*.05,z:Xt},Zt.velocity={x:(Math.random()-.5)*wx*.5,y:W2*(.8+Math.random()*.4),z:(Math.random()-.5)*wx*.5},Zt.startTime=O,Zt.maxLife=bx+Math.random()*(Y2-bx),Zt.color=Rx[Math.floor(Math.random()*Rx.length)],Zt.initialSize=Cx+Math.random()*(X2-Cx),Zt.currentSize=Zt.initialSize,Zt.hasGravity=!1,Zt.isActive=!0,Bt=Zt;break}return Bt},[]);Vt.useEffect(()=>{if(_i.current||(_i.current=new(window.AudioContext||window.webkitAudioContext),bi(ue.MACHINE_GUN_FIRE,"/sounds/machine_gun_fire.mp3"),bi(ue.CANNON_FIRE,"/sounds/cannon_fire.mp3"),bi(ue.TANK_FIRE,"/sounds/tank_fire.mp3"),bi(ue.UNIT_DEATH_PLAYER,"/sounds/unit_death_player.mp3"),bi(ue.UNIT_DEATH_ENEMY,"/sounds/unit_death_enemy.mp3"),bi(ue.UNIT_HIT_PLAYER,"/sounds/unit_hit_player.mp3"),bi(ue.UNIT_HIT_ENEMY,"/sounds/unit_hit_enemy.mp3"),bi(ue.BASE_EXPLOSION_PLAYER,"/sounds/base_explosion_player.mp3"),bi(ue.BASE_EXPLOSION_ENEMY,"/sounds/base_explosion_enemy.mp3"),bi(ue.CANNON_BALL_EXPLODE,"/sounds/cannon_ball_explode.mp3"),bi(ue.BGM_COMBAT,"/sounds/bgm_combat.mp3"),bi(ue.FIREWORK_EXPLODE,"/sounds/firework_explode.mp3"),bi(ue.INFANTRY_FIRE,"/sounds/infantry_fire.mp3"),bi(ue.GRENADE_EXPLODE,"/sounds/grenade_explode.mp3")),Ut.current.length===0&&go>0)for(let Bt=0;Bt<go;Bt++)Ut.current.push({id:Qi(),position:{x:0,y:0,z:0},velocity:{x:0,y:0,z:0},startTime:0,maxLife:0,color:0,initialSize:0,currentSize:0,isActive:!1,hasGravity:!1});vt.current=$x(),ft.current=tE();const Wt=[],jt=Math.floor(Kn/2-qu/2),O=Math.floor(Kn/2-Zu/2);for(let Bt=0;Bt<Kn;Bt++){Wt[Bt]=[];for(let Zt=0;Zt<Zn;Zt++){let qt=Zt===pr&&Bt>=jt&&Bt<jt+qu,Rt=Zt===Gl&&Bt>=O&&Bt<O+Zu;Wt[Bt][Zt]={x:Bt,z:Zt,isOccupied:qt||Rt,isPlayerBase:qt,isEnemyBase:Rt}}}return N(Wt),()=>{}},[]);const Ht=Vt.useCallback(Wt=>{Bu(),F(Wt)},[]),me=Vt.useCallback(Wt=>{if(Bu(),!H||Et.current==="GAME_OVER"||Et.current==="VICTORY")return;const jt=_a[H];if(y<jt.cost){alert("Not enough money!");return}if(Wt.z!==pr){alert("Towers can only be built on your base's row!");return}if(Wt.x<0||Wt.x>=Kn||Wt.z<0||Wt.z>=Zn){alert("Cannot place tower outside the grid.");return}if(X[Wt.x][Wt.z].isOccupied){alert(X[Wt.x][Wt.z].isPlayerBase?"Cannot place tower on your base!":X[Wt.x][Wt.z].isEnemyBase?"Cannot place on enemy base!":"Cell is already occupied!");return}const O={id:Qi(),type:H,position:{x:Wt.x*Y-Ps+Y/2,y:En,z:Wt.z*Y-xi+Y/2},lastShotTime:0};a(Bt=>[...Bt,O]),A(Bt=>Bt-jt.cost),N(Bt=>{const Zt=Bt.map(qt=>qt.map(Rt=>({...Rt})));return Zt[Wt.x][Wt.z].isOccupied=!0,Zt}),F(null)},[H,X,y]),ae=Vt.useCallback(Wt=>{if(Bu(),Et.current==="GAME_OVER"||Et.current==="VICTORY")return;const jt=je[Wt];if(Wt===xt.SUPER_TANK){alert("This unit cannot be built by players.");return}if(y<jt.cost){alert("Not enough money to build unit!");return}A(Rt=>Rt-jt.cost);const O=(Math.random()-.5)*(Kn*Y*.95),Bt=vt.current.z+x2;let Zt=wn;Wt===xt.INFANTRY||Wt===xt.GRENADIER?Zt=oa:Wt===xt.ARTILLERY&&(Zt=dr);const qt={id:Qi(),type:Wt,owner:"PLAYER",position:{x:O,y:En+Zt/2*(jt.visualScale||1),z:Bt},health:jt.health,targetId:ho,lastAttackTime:0,rotationY:Math.PI};c(Rt=>[...Rt,qt])},[y]),Oe=Vt.useCallback(()=>{Et.current==="PLACEMENT"&&Bu().then(()=>{if(_i.current&&_i.current.state==="running"&&(qa.current&&(qa.current.stop(),qa.current.disconnect(),qa.current=null),Co.current[ue.BGM_COMBAT])){const jt=Te(ue.BGM_COMBAT,.25,!0);jt&&(qa.current=jt)}t("ACTIVE_COMBAT");const Wt=performance.now();j.current=Wt,K.current=Wt,At.current=!1,E(jt=>{const{updatedMoney:O,newUnits:Bt}=rp(Wt,Wt,jt);return Bt.length>0&&h(Zt=>[...Zt,...Bt]),O}),z.current=Wt,it.current=Wt}).catch(Wt=>{console.error("Error resuming audio context on start combat, BGM might not play:",Wt),t("ACTIVE_COMBAT");const jt=performance.now();j.current=jt,K.current=jt,At.current=!1,E(O=>{const{updatedMoney:Bt,newUnits:Zt}=rp(jt,jt,O);return Zt.length>0&&h(qt=>[...qt,...Zt]),Bt}),z.current=jt,it.current=jt})},[]);return Vt.useEffect(()=>{if(r==="GAME_OVER"&&Et.current!=="VICTORY")return;let Wt;const jt=O=>{if(Et.current==="GAME_OVER"){Wt&&cancelAnimationFrame(Wt);return}const Bt=(O-B.current)/1e3;B.current=O;let Zt=[...n],qt=[...o],Rt=[...f],de=[...m],Xt=[...g],le=[...v],Ae=U,L=R,T=y,P=S,W=new Set,ct=new Set;if(Et.current==="VICTORY"&&O-it.current>U2){const tt=1+Math.floor(Math.random()*2);for(let Ot=0;Ot<tt;Ot++){const Mt=(Math.random()-.5)*O2,Dt=(Zn/4-Math.random()*Zn/2)*Y*.5+I2*(Math.random()-.5),I={x:Mt,y:P2+(Math.random()-.5)*Y*2,z:Dt};Xt.push(...Pt(I,O)),Te(ue.FIREWORK_EXPLODE,.6)}it.current=O}if(Et.current==="ACTIVE_COMBAT"){if(qt.forEach(Dt=>{if(Dt.health<=0)return;const I=je[Dt.type];Rt.forEach(Tt=>{Tt.health>0&&xn(Dt.position,Tt.position)<=I.detectionRange&&W.add(Tt.id)}),xn(Dt.position,ft.current)<=I.detectionRange&&W.add(ho)}),Zt.forEach(Dt=>{Rt.forEach(I=>{I.health>0&&xn(Dt.position,I.position)<=zx&&W.add(I.id)}),xn(Dt.position,ft.current)<=zx&&W.add(ho)}),Rt.forEach(Dt=>{if(Dt.health<=0)return;const I=je[Dt.type];qt.forEach(Tt=>{Tt.health>0&&xn(Dt.position,Tt.position)<=I.detectionRange&&ct.add(Tt.id)}),xn(Dt.position,vt.current)<=I.detectionRange&&ct.add(mo)}),P+=L2*Bt,O-z.current>=y2){const{updatedMoney:Dt,newUnits:I}=rp(O,j.current,P);P=Dt,I.length>0&&(Rt=[...Rt,...I]),z.current=O}const tt=Rt.filter(Dt=>Dt.type===xt.SUPER_TANK&&Dt.health>0).length,Ot=j.current?O-j.current:0;if(tt<R2){let Dt=!1;if(!At.current&&Ot>M2?(Dt=!0,At.current=!0,K.current=O):At.current&&O-K.current>T2&&(Dt=!0),Dt){if(Math.random()<A2){const I=je[xt.SUPER_TANK],ot=Math.floor(Math.random()*Kn)*Y-Ps+Y/2,rt=Gl*Y-xi+Y/2+Y,gt=wn*(I.visualScale||1),yt={id:Qi(),type:xt.SUPER_TANK,owner:"ENEMY",position:{x:ot,y:En+gt/2,z:rt},health:I.health,targetId:mo,rotationY:0,lastAttackTime:0};Rt.push(yt)}K.current=O}}if(Ae<Pu&&Ae>0){const Dt=Hx*Bt,I=Math.min(Dt,Pu-Ae),Tt=I*uo;if(T>=Tt)T-=Tt,Ae+=I;else{const ot=T/uo;if(ot>0){const St=Math.min(ot,I);T-=St*uo,Ae+=St}}Ae=Math.min(Pu,Ae)}if(L<Ou&&L>0){const Dt=Hx*Bt,I=Math.min(Dt,Ou-L),Tt=I*uo;if(P>=Tt)P-=Tt,L+=I;else{const ot=P/uo;if(ot>0){const St=Math.min(ot,I);P-=St*uo,L+=St}}L=Math.min(Ou,L)}const Mt=[];le.forEach(Dt=>{(Dt.owner==="PLAYER"?Rt:qt).forEach(St=>{if(St.health>0&&xn(St.position,Dt.position)<Dt.radius){const rt=Dt.damagePerSecond*Bt,gt=St.health;St.health-=rt,gt>0&&St.health>0&&O-(St.lastFireDamageSoundTimeMs||0)>Z2&&(Te(Dt.owner==="PLAYER"?ue.UNIT_HIT_ENEMY:ue.UNIT_HIT_PLAYER,.2),St.lastFireDamageSoundTimeMs=O),St.health<=0&&(Dt.owner==="PLAYER"?(T+=je[St.type].value,Te(ue.UNIT_DEATH_ENEMY,.5),Xt.push(...pt(St.position,Ls,O))):(Te(ue.UNIT_DEATH_PLAYER,.5),Xt.push(...pt(St.position,rr,O))))}});const Tt=k2*Bt,ot=Math.floor(Tt)+(Math.random()<Tt%1?1:0);for(let St=0;St<ot;St++){const rt=Ft(Dt.position,Dt.radius,O);rt&&Xt.push(rt)}O-Dt.startTime<=Dt.durationMs&&Mt.push(Dt)}),le=Mt}const $=(tt,Ot,Mt,Dt,I,Tt,ot)=>{const St=[];return tt.forEach(rt=>{if(rt.health<=0)return;const gt=je[rt.type];let yt=null,Yt=null;rt.isAttacking=!1;let se=!1;if(rt.type===xt.INFANTRY||rt.type===xt.GRENADIER){rt.health<gt.health&&(rt.health=Math.min(gt.health,rt.health+aC*ot));let fe=null,be=sC;Ot.forEach(we=>{if(we.id===rt.id||we.health<=0)return;const Sn=je[we.type];if(we.health<Sn.health&&(we.type===xt.LIGHT_TANK||we.type===xt.HEAVY_TANK||we.type===xt.SUPER_TANK||we.type===xt.ARTILLERY)){const pn=xn(rt.position,we.position);pn<be&&(be=pn,fe=we)}}),fe&&(yt=fe.position,Yt=fe.id,se=!0)}if(!Yt){let fe=null,be=1/0,we=null,Sn=1/0;if(Mt.forEach(pn=>{if(pn.health<=0||!Tt.has(pn.id))return;const Ke=xn(rt.position,pn.position);Ke<=gt.attackRange&&Ke<be&&(be=Ke,fe=pn),Ke<Sn&&(Sn=Ke,we=pn)}),fe)yt=fe.position,Yt=fe.id,rt.isAttacking=!0;else if(we)yt=we.position,Yt=we.id;else{const pn=rt.owner==="PLAYER",Ke=Gl*Y-xi+Y/2,qe=pr*Y-xi+Y/2;let Qn=!1;pn?rt.position.z<Ke+4*Y&&(Qn=!0):rt.position.z>qe-4*Y&&(Qn=!0),Qn?(yt=Dt,Yt=I,Tt.has(I)&&xn(rt.position,Dt)<=gt.attackRange&&(rt.isAttacking=!0)):(yt={x:rt.position.x,y:rt.position.y,z:pn?Ke:qe},Yt=I)}}if(rt.targetId=Yt,yt){const fe=yt.x-rt.position.x,be=yt.z-rt.position.z;rt.rotationY=fe===0&&be===0?rt.rotationY:Math.atan2(fe,be)}const Qt=yt?xn(rt.position,yt):1/0,$e=se?Fx*.7:Y*.1;if(rt.isAttacking){if(yt&&Yt&&Qt<=gt.attackRange&&O-(rt.lastAttackTime||0)>1e3/gt.fireRate){rt.lastAttackTime=O,rt.type===xt.ARTILLERY?Te(ue.CANNON_FIRE,.7):rt.type===xt.LIGHT_TANK||rt.type===xt.HEAVY_TANK||rt.type===xt.SUPER_TANK?Te(ue.TANK_FIRE,.6):rt.type===xt.INFANTRY?Te(ue.INFANTRY_FIRE,.4):(rt.type,xt.GRENADIER);let fe=0,be=0;rt.type===xt.LIGHT_TANK||rt.type===xt.HEAVY_TANK?fe=Bi*.5+ja/2:rt.type===xt.INFANTRY||rt.type===xt.GRENADIER?fe=$p/2+Y*.1:rt.type===xt.ARTILLERY?fe=ZE/2+Y*.2:rt.type===xt.SUPER_TANK&&(fe=(Bi*.5+ja/2)*(gt.visualScale||1),be=Bi*.3*(gt.visualScale||1));const we=rt.position.y+gt.barrelOffsetY*(gt.visualScale||1),Sn=yt.y,pn=(Ke,qe,Qn)=>{const re=yt,ee={x:rt.position.x+Ke,y:we,z:rt.position.z+qe};let $t;if(rt.type===xt.GRENADIER){const Le=re.x-ee.x,tn=re.z-ee.z,en=S2,Ie=Le/en,yi=tn/en,$i=ee.y,D=(En+Y*.1-$i)/en+.5*yx*en;$t={x:Ie,y:D,z:yi}}else{const Le=re.x-ee.x,tn=Sn-ee.y,en=re.z-ee.z,Ie=Math.sqrt(Le**2+tn**2+en**2)||1;$t={x:Le/Ie*jd,y:tn/Ie*jd,z:en/Ie*jd}}de.push({id:Qi(),owner:rt.owner,firerId:rt.id,projectileType:rt.type,position:ee,velocity:$t,creationTime:O,targetPosition:rt.type===xt.ARTILLERY?{...re}:void 0})};if(rt.type===xt.SUPER_TANK){const Ke=rt.rotationY||0,qe=Math.sin(Ke)*fe+Math.cos(Ke)*be,Qn=Math.cos(Ke)*fe-Math.sin(Ke)*be;pn(qe,Qn);const re=Math.sin(Ke)*fe-Math.cos(Ke)*be,ee=Math.cos(Ke)*fe+Math.sin(Ke)*be;pn(re,ee)}else{const Ke=Math.sin(rt.rotationY||0)*fe,qe=Math.cos(rt.rotationY||0)*fe;pn(Ke,qe)}}}else if(yt&&Yt&&Qt>$e){const fe={x:yt.x-rt.position.x,z:yt.z-rt.position.z},be=Math.sqrt(fe.x**2+fe.z**2);if(be>0){const we={x:fe.x/be,z:fe.z/be};rt.position={x:rt.position.x+we.x*gt.speed*ot,y:rt.position.y,z:rt.position.z+we.z*gt.speed*ot}}}St.push(rt)}),St};if(Et.current==="ACTIVE_COMBAT"){qt=$(qt,qt,Rt,ft.current,ho,W,Bt),Rt=$(Rt,Rt,qt,vt.current,mo,ct,Bt);const tt=(Ot,Mt,Dt)=>{Ot.forEach(I=>{if(I.health<=0)return;const Tt=je[I.type];if(I.health<Tt.health&&(I.type===xt.LIGHT_TANK||I.type===xt.HEAVY_TANK||I.type===xt.SUPER_TANK||I.type===xt.ARTILLERY)){let ot=0;if(Mt.forEach(St=>{(St.type===xt.INFANTRY||St.type===xt.GRENADIER)&&St.health>0&&xn(I.position,St.position)<=Fx&&ot++}),ot>0){const St=Math.min(oC,ot*rC);I.health=Math.min(Tt.health,I.health+St*Dt)}}})};tt(qt,qt,Bt),tt(Rt,Rt,Bt)}let zt=0,Ct=0;de.forEach(tt=>{if(tt.owner==="PLAYER"&&tt.projectileType===Ge.LASER&&tt.laserEndTime&&O<tt.laserEndTime){const Ot=Zt.find(ot=>ot.id===tt.firerId);if(!Ot)return;const Mt=_a[Ot.type];if(!Mt)return;const Dt=Mt.damage*Mt.fireRate*Bt,I=tt.position,Tt=tt.targetPosition;if(!Tt)return;Rt.forEach((ot,St)=>{if(ot.health<=0||!W.has(ot.id))return;const rt=je[ot.type];let gt=Fi;ot.type===xt.INFANTRY||ot.type===xt.GRENADIER?gt=Ka:ot.type===xt.ARTILLERY&&(gt=Eo);const yt=gt/2*(rt.visualScale||1);if(sp(ot.position,I,Tt)<C2/2+yt){const se=Rt[St].health;Rt[St].health-=Dt,se>0&&Rt[St].health>0&&O-(tt.lastHitSoundTime||0)>D2&&(Te(ue.UNIT_HIT_ENEMY,.3),tt.lastHitSoundTime=O),Rt[St].health<=0&&(T+=je[Rt[St].type].value,Xt.push(...pt(Rt[St].position,Ls,O)),Te(ue.UNIT_DEATH_ENEMY,.5))}})}});const Nt=[];de.forEach(tt=>{if(tt.projectileType!==Ge.LASER&&O-tt.creationTime>E2){if(tt.projectileType===xt.GRENADIER){const I=je[xt.GRENADIER];Te(ue.GRENADE_EXPLODE,.8),Xt.push(...pt(tt.position,Ns,O)),I.aoeRadius&&I.aoeRadius>0&&(tt.owner==="PLAYER"?Rt:qt).forEach(ot=>{if(ot.health>0&&xn(tt.position,ot.position)<I.aoeRadius){const St=ot.health;ot.health-=I.projectileDamage,St>0&&ot.health>0&&Te(tt.owner==="PLAYER"?ue.UNIT_HIT_ENEMY:ue.UNIT_HIT_PLAYER,.2),ot.health<=0&&(tt.owner==="PLAYER"&&(T+=je[ot.type].value),Xt.push(...pt(ot.position,tt.owner==="PLAYER"?Ls:rr,O)),Te(tt.owner==="PLAYER"?ue.UNIT_DEATH_ENEMY:ue.UNIT_DEATH_PLAYER,.5))}}),le.push({id:Qi(),owner:tt.owner,position:{x:tt.position.x,y:En,z:tt.position.z},radius:I.areaEffectRadius,durationMs:I.areaEffectDurationMs,damagePerSecond:I.areaEffectDamagePerSecond,startTime:O})}return}if(tt.projectileType===Ge.LASER){tt.laserEndTime&&O<tt.laserEndTime&&Nt.push({...tt});return}let Ot={...tt.position},Mt=!1;if(tt.projectileType===xt.GRENADIER){if(tt.velocity.y-=yx*Bt,Ot.x+=tt.velocity.x*Bt,Ot.y+=tt.velocity.y*Bt,Ot.z+=tt.velocity.z*Bt,Ot.y<=En+Y*.1&&!Mt){Mt=!0,Ot.y=En+Y*.1;const I=je[xt.GRENADIER];Te(ue.GRENADE_EXPLODE,.8),Xt.push(...pt(Ot,Ns,O)),I.aoeRadius&&I.aoeRadius>0&&(tt.owner==="PLAYER"?Rt:qt).forEach(ot=>{if(ot.health>0&&xn(Ot,ot.position)<I.aoeRadius){const St=ot.health;ot.health-=I.projectileDamage,St>0&&ot.health>0&&Te(tt.owner==="PLAYER"?ue.UNIT_HIT_ENEMY:ue.UNIT_HIT_PLAYER,.2),ot.health<=0&&(tt.owner==="PLAYER"&&(T+=je[ot.type].value),Xt.push(...pt(ot.position,tt.owner==="PLAYER"?Ls:rr,O)),Te(tt.owner==="PLAYER"?ue.UNIT_DEATH_ENEMY:ue.UNIT_DEATH_PLAYER,.5))}}),le.push({id:Qi(),owner:tt.owner,position:{x:Ot.x,y:En,z:Ot.z},radius:I.areaEffectRadius,durationMs:I.areaEffectDurationMs,damagePerSecond:I.areaEffectDamagePerSecond,startTime:O})}}else Ot.x+=tt.velocity.x*Bt,Ot.y+=tt.velocity.y*Bt,Ot.z+=tt.velocity.z*Bt;let Dt=Mt;if(!Mt){const I=tt.projectileType in xt?je[tt.projectileType]:tt.projectileType in Ge?_a[tt.projectileType]:null,Tt=I?tt.projectileType in xt?I.projectileDamage:I.damage:1,ot=tt.projectileType===Ge.CANNON&&_a[Ge.CANNON].aoeRadius?_a[Ge.CANNON].aoeRadius:tt.projectileType===xt.ARTILLERY&&je[xt.ARTILLERY].aoeRadius?je[xt.ARTILLERY].aoeRadius:0,St=eD(tt.projectileType),rt=1.8;if(tt.owner==="PLAYER"){let gt=-1;for(let yt=0;yt<Rt.length;yt++){const Yt=Rt[yt];if(Yt.health<=0)continue;const se=je[Yt.type];let Qt;switch(Yt.type){case xt.INFANTRY:case xt.GRENADIER:Qt=Ka;break;case xt.ARTILLERY:Qt=Eo;break;default:Qt=Fi;break}const $e=Qt/rt*(se.visualScale||1);if(sp(Yt.position,tt.position,Ot)<$e+St){gt=yt;break}}if(gt!==-1){Dt=!0;const yt=Rt[gt],Yt=yt.health;if(yt.health-=Tt,Yt>0&&yt.health>0&&Te(ue.UNIT_HIT_ENEMY,.4),yt.health<=0&&(T+=je[yt.type].value,Xt.push(...pt(yt.position,Ls,O)),Te(ue.UNIT_DEATH_ENEMY,.6)),tt.projectileType===xt.GRENADIER){Mt=!0;const se=je[xt.GRENADIER];Te(ue.GRENADE_EXPLODE,.8),Xt.push(...pt(yt.position,Ns,O)),le.push({id:Qi(),owner:tt.owner,position:{x:yt.position.x,y:En,z:yt.position.z},radius:se.areaEffectRadius,durationMs:se.areaEffectDurationMs,damagePerSecond:se.areaEffectDamagePerSecond,startTime:O}),se.aoeRadius&&se.aoeRadius>0&&Rt.forEach((Qt,$e)=>{if(Qt.health>0&&$e!==gt&&xn(yt.position,Qt.position)<se.aoeRadius){const fe=Qt.health;Qt.health-=se.projectileDamage,fe>0&&Qt.health>0&&Te(ue.UNIT_HIT_ENEMY,.2),Qt.health<=0&&(T+=je[Qt.type].value,Xt.push(...pt(Qt.position,Ls,O)),Te(ue.UNIT_DEATH_ENEMY,.5))}})}else if(ot&&ot>0){const se=Ot;Xt.push(...pt(se,Ns,O)),(tt.projectileType===Ge.CANNON||tt.projectileType===xt.ARTILLERY)&&Te(ue.CANNON_BALL_EXPLODE,.7),Rt.forEach((Qt,$e)=>{if(Qt.health>0&&$e!==gt&&xn(se,Qt.position)<ot){const fe=Qt.health;Qt.health-=Tt,fe>0&&Qt.health>0&&Te(ue.UNIT_HIT_ENEMY,.2),Qt.health<=0&&(T+=je[Qt.type].value,Xt.push(...pt(Qt.position,Ls,O)),Te(ue.UNIT_DEATH_ENEMY,.5))}})}}else{const yt=Zu*Y/2;xn(Ot,ft.current)<yt+St&&(Dt=!0,W.has(ho)&&(Object.values(xt).includes(tt.projectileType)||Object.values(Ge).includes(tt.projectileType))&&(Ct+=Tt,(tt.projectileType===xt.ARTILLERY||tt.projectileType===Ge.CANNON)&&ot&&ot>0&&(Xt.push(...pt(Ot,Ns,O)),Te(ue.CANNON_BALL_EXPLODE,.7),Rt.forEach(Yt=>{if(Yt.health>0&&xn(Ot,Yt.position)<ot){const se=Yt.health;Yt.health-=Tt,se>0&&Yt.health>0&&Te(ue.UNIT_HIT_ENEMY,.2),Yt.health<=0&&(T+=je[Yt.type].value,Xt.push(...pt(Yt.position,Ls,O)),Te(ue.UNIT_DEATH_ENEMY,.5))}}))))}}else{let gt=-1;for(let yt=0;yt<qt.length;yt++){const Yt=qt[yt];if(Yt.health<=0)continue;const se=je[Yt.type];let Qt;switch(Yt.type){case xt.INFANTRY:case xt.GRENADIER:Qt=Ka;break;case xt.ARTILLERY:Qt=Eo;break;default:Qt=Fi;break}const $e=Qt/rt*(se.visualScale||1);if(sp(Yt.position,tt.position,Ot)<$e+St){gt=yt;break}}if(gt!==-1){Dt=!0;const yt=qt[gt],Yt=yt.health;if(yt.health-=Tt,Yt>0&&yt.health>0&&Te(ue.UNIT_HIT_PLAYER,.4),yt.health<=0&&(Xt.push(...pt(yt.position,rr,O)),Te(ue.UNIT_DEATH_PLAYER,.6)),tt.projectileType===xt.GRENADIER){Mt=!0;const se=je[xt.GRENADIER];Te(ue.GRENADE_EXPLODE,.8),Xt.push(...pt(yt.position,Ns,O)),le.push({id:Qi(),owner:tt.owner,position:{x:yt.position.x,y:En,z:yt.position.z},radius:se.areaEffectRadius,durationMs:se.areaEffectDurationMs,damagePerSecond:se.areaEffectDamagePerSecond,startTime:O}),se.aoeRadius&&se.aoeRadius>0&&qt.forEach((Qt,$e)=>{if(Qt.health>0&&$e!==gt&&xn(yt.position,Qt.position)<se.aoeRadius){const fe=Qt.health;Qt.health-=se.projectileDamage,fe>0&&Qt.health>0&&Te(ue.UNIT_HIT_PLAYER,.2),Qt.health<=0&&(Xt.push(...pt(Qt.position,rr,O)),Te(ue.UNIT_DEATH_PLAYER,.5))}})}else if(tt.projectileType===xt.ARTILLERY&&ot&&ot>0){const se=Ot;Xt.push(...pt(se,Ns,O)),Te(ue.CANNON_BALL_EXPLODE,.7),qt.forEach((Qt,$e)=>{if(Qt.health>0&&$e!==gt&&xn(se,Qt.position)<ot){const fe=Qt.health;Qt.health-=Tt,fe>0&&Qt.health>0&&Te(ue.UNIT_HIT_PLAYER,.2),Qt.health<=0&&(Xt.push(...pt(Qt.position,rr,O)),Te(ue.UNIT_DEATH_PLAYER,.5))}})}}else{const yt=qu*Y/2;xn(Ot,vt.current)<yt+St&&(Dt=!0,ct.has(mo)&&(zt+=Tt,tt.projectileType===xt.ARTILLERY&&ot&&ot>0&&(Xt.push(...pt(Ot,Ns,O)),Te(ue.CANNON_BALL_EXPLODE,.7),qt.forEach(Yt=>{if(Yt.health>0&&xn(Ot,Yt.position)<ot){const se=Yt.health;Yt.health-=Tt,se>0&&Yt.health>0&&Te(ue.UNIT_HIT_PLAYER,.2),Yt.health<=0&&(Xt.push(...pt(Yt.position,rr,O)),Te(ue.UNIT_DEATH_PLAYER,.5))}}))))}}}Dt||Nt.push({...tt,position:Ot})}),de=Nt,zt>0&&(U>0&&Te(ue.UNIT_HIT_PLAYER,.4),Ae=Math.max(0,Ae-zt)),Ct>0&&(R>0&&Te(ue.UNIT_HIT_ENEMY,.4),L=Math.max(0,L-Ct));const Kt=[];for(const tt of Xt){if(!tt.isActive)continue;const Ot=O-tt.startTime;if(Ot>tt.maxLife){tt.isActive=!1;continue}if(tt.hasGravity&&(tt.velocity.y-=F2*Bt),tt.position.x+=tt.velocity.x*Bt,tt.position.y+=tt.velocity.y*Bt,tt.position.z+=tt.velocity.z*Bt,tt.currentSize=tt.initialSize*Math.max(0,1-Ot/tt.maxLife),tt.currentSize<=.01){tt.isActive=!1;continue}Kt.push(tt)}Xt=Kt;let wt=Et.current;Et.current==="ACTIVE_COMBAT"&&(Ae<=0&&U>0?(wt="GAME_OVER",Te(ue.BASE_EXPLOSION_PLAYER)):L<=0&&R>0&&(wt="VICTORY",Te(ue.BASE_EXPLOSION_ENEMY)));const Gt=[];Et.current==="ACTIVE_COMBAT"&&(Zt=Zt.map(tt=>{var Dt;const Ot=_a[tt.type];let Mt={...tt};if(O-tt.lastShotTime>1e3/Ot.fireRate&&Rt.filter(I=>I.health>0).length>0){let I=null,Tt=Ot.range;if(Rt.forEach(ot=>{if(ot.health>0){const St=xn(tt.position,ot.position);St<Tt&&(Tt=St,I=ot)}}),I)if(W.has(I.id)){Mt.targetId=I.id,Mt.lastShotTime=O,tt.type===Ge.MACHINE_GUN?Te(ue.MACHINE_GUN_FIRE,.5):tt.type===Ge.CANNON&&Te(ue.CANNON_FIRE,.8);const ot=I.position.x-tt.position.x,St=I.position.z-tt.position.z;Mt.rotationY=Math.atan2(ot,St);const rt={x:tt.position.x,y:tt.position.y+Ot.barrelOffsetY,z:tt.position.z},gt=((Dt=je[I.type])==null?void 0:Dt.barrelOffsetY)||0;if(tt.type===Ge.LASER&&Mt.rotationY!==void 0){const yt=Y*.1;rt.x+=Math.sin(Mt.rotationY)*yt,rt.z+=Math.cos(Mt.rotationY)*yt}if(tt.type===Ge.MACHINE_GUN||tt.type===Ge.CANNON){const yt={x:I.position.x-rt.x,y:I.position.y+gt-rt.y,z:I.position.z-rt.z},Yt=Math.sqrt(yt.x**2+yt.y**2+yt.z**2)||1;Gt.push({id:Qi(),owner:"PLAYER",firerId:tt.id,projectileType:tt.type,position:rt,velocity:{x:yt.x/Yt*(Ot.projectileSpeed||10),y:yt.y/Yt*(Ot.projectileSpeed||10),z:yt.z/Yt*(Ot.projectileSpeed||10)},targetPosition:tt.type===Ge.CANNON?{...I.position,y:I.position.y+gt}:void 0,creationTime:O})}else tt.type===Ge.LASER&&Gt.push({id:Qi(),owner:"PLAYER",firerId:tt.id,projectileType:Ge.LASER,position:rt,velocity:{x:0,y:0,z:0},targetPosition:{...I.position,y:I.position.y+gt},laserEndTime:O+w2,creationTime:O,lastHitSoundTime:0})}else Mt.targetId=void 0;else Mt.targetId=void 0}return Mt}),Gt.length>0&&de.push(...Gt)),a(Zt),c(qt.filter(tt=>tt.health>0)),h(Rt.filter(tt=>tt.health>0)),p(de),_(Xt),x(le),A(T),E(P),C(Ae),G(L),V(new Set(W)),ut(new Set(ct)),wt!==Et.current&&((wt==="GAME_OVER"||wt==="VICTORY")&&qa.current&&(qa.current.stop(),qa.current.disconnect(),qa.current=null),t(wt)),wt!=="GAME_OVER"?Wt=requestAnimationFrame(jt):Wt&&cancelAnimationFrame(Wt)};return Wt=requestAnimationFrame(jt),()=>{Wt&&cancelAnimationFrame(Wt)}},[r,n,o,f,m,g,v,y,S,U,R,pt,Pt,Ft,nt]),Re.jsxs(Re.Fragment,{children:[Re.jsx($C,{}),Re.jsx(KC,{money:y,playerBaseHealth:U,enemyBaseHealth:R,selectedTowerType:H,onSelectTowerType:Ht,onStartCombat:Oe,onBuildUnit:ae,gamePhase:r}),Re.jsx(qC,{towers:n,playerUnits:o,enemyUnits:f,unitProjectiles:m,particles:g,activeFireAreas:v,onPlaceTower:me,grid:X,selectedTowerType:H,playerBasePosition:vt.current,enemyBasePosition:ft.current,detectedByPlayer:w,detectedByEnemy:st})]})},jE=document.getElementById("root");if(!jE)throw new Error("Could not find root element to mount to");const iD=lM.createRoot(jE);iD.render(Re.jsx(Qu.StrictMode,{children:Re.jsx(nD,{})}));
