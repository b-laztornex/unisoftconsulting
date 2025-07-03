(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var bf={exports:{}},go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function lx(){if(yg)return go;yg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return go.Fragment=e,go.jsx=i,go.jsxs=i,go}var Eg;function cx(){return Eg||(Eg=1,bf.exports=lx()),bf.exports}var $=cx(),Af={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function ux(){if(Tg)return se;Tg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,w={};function M(N,it,Tt){this.props=N,this.context=it,this.refs=w,this.updater=Tt||y}M.prototype.isReactComponent={},M.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=M.prototype;function P(N,it,Tt){this.props=N,this.context=it,this.refs=w,this.updater=Tt||y}var O=P.prototype=new g;O.constructor=P,R(O,M.prototype),O.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function B(N,it,Tt,Rt,q,pt){return Tt=pt.ref,{$$typeof:o,type:N,key:it,ref:Tt!==void 0?Tt:null,props:pt}}function K(N,it){return B(N.type,it,void 0,void 0,void 0,N.props)}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function A(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Tt){return it[Tt]})}var F=/\/+/g;function ut(N,it){return typeof N=="object"&&N!==null&&N.key!=null?A(""+N.key):it.toString(36)}function at(){}function gt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(at,at):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ht(N,it,Tt,Rt,q){var pt=typeof N;(pt==="undefined"||pt==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(pt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case o:case e:St=!0;break;case _:return St=N._init,ht(St(N._payload),it,Tt,Rt,q)}}if(St)return q=q(N),St=Rt===""?"."+ut(N,0):Rt,D(q)?(Tt="",St!=null&&(Tt=St.replace(F,"$&/")+"/"),ht(q,it,Tt,"",function(Qt){return Qt})):q!=null&&(C(q)&&(q=K(q,Tt+(q.key==null||N&&N.key===q.key?"":(""+q.key).replace(F,"$&/")+"/")+St)),it.push(q)),1;St=0;var bt=Rt===""?".":Rt+":";if(D(N))for(var Ct=0;Ct<N.length;Ct++)Rt=N[Ct],pt=bt+ut(Rt,Ct),St+=ht(Rt,it,Tt,pt,q);else if(Ct=S(N),typeof Ct=="function")for(N=Ct.call(N),Ct=0;!(Rt=N.next()).done;)Rt=Rt.value,pt=bt+ut(Rt,Ct++),St+=ht(Rt,it,Tt,pt,q);else if(pt==="object"){if(typeof N.then=="function")return ht(gt(N),it,Tt,Rt,q);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return St}function X(N,it,Tt){if(N==null)return N;var Rt=[],q=0;return ht(N,Rt,"","",function(pt){return it.call(Tt,pt,q++)}),Rt}function st(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(Tt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Tt)},function(Tt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Tt)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var j=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Mt(){}return se.Children={map:X,forEach:function(N,it,Tt){X(N,function(){it.apply(this,arguments)},Tt)},count:function(N){var it=0;return X(N,function(){it++}),it},toArray:function(N){return X(N,function(it){return it})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=P,se.StrictMode=r,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,se.act=function(){throw Error("act(...) is not supported in production builds of React.")},se.cache=function(N){return function(){return N.apply(null,arguments)}},se.cloneElement=function(N,it,Tt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Rt=R({},N.props),q=N.key,pt=void 0;if(it!=null)for(St in it.ref!==void 0&&(pt=void 0),it.key!==void 0&&(q=""+it.key),it)!I.call(it,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&it.ref===void 0||(Rt[St]=it[St]);var St=arguments.length-2;if(St===1)Rt.children=Tt;else if(1<St){for(var bt=Array(St),Ct=0;Ct<St;Ct++)bt[Ct]=arguments[Ct+2];Rt.children=bt}return B(N.type,q,void 0,void 0,pt,Rt)},se.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},se.createElement=function(N,it,Tt){var Rt,q={},pt=null;if(it!=null)for(Rt in it.key!==void 0&&(pt=""+it.key),it)I.call(it,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(q[Rt]=it[Rt]);var St=arguments.length-2;if(St===1)q.children=Tt;else if(1<St){for(var bt=Array(St),Ct=0;Ct<St;Ct++)bt[Ct]=arguments[Ct+2];q.children=bt}if(N&&N.defaultProps)for(Rt in St=N.defaultProps,St)q[Rt]===void 0&&(q[Rt]=St[Rt]);return B(N,pt,void 0,void 0,null,q)},se.createRef=function(){return{current:null}},se.forwardRef=function(N){return{$$typeof:h,render:N}},se.isValidElement=C,se.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:st}},se.memo=function(N,it){return{$$typeof:m,type:N,compare:it===void 0?null:it}},se.startTransition=function(N){var it=H.T,Tt={};H.T=Tt;try{var Rt=N(),q=H.S;q!==null&&q(Tt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(Mt,j)}catch(pt){j(pt)}finally{H.T=it}},se.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},se.use=function(N){return H.H.use(N)},se.useActionState=function(N,it,Tt){return H.H.useActionState(N,it,Tt)},se.useCallback=function(N,it){return H.H.useCallback(N,it)},se.useContext=function(N){return H.H.useContext(N)},se.useDebugValue=function(){},se.useDeferredValue=function(N,it){return H.H.useDeferredValue(N,it)},se.useEffect=function(N,it){return H.H.useEffect(N,it)},se.useId=function(){return H.H.useId()},se.useImperativeHandle=function(N,it,Tt){return H.H.useImperativeHandle(N,it,Tt)},se.useInsertionEffect=function(N,it){return H.H.useInsertionEffect(N,it)},se.useLayoutEffect=function(N,it){return H.H.useLayoutEffect(N,it)},se.useMemo=function(N,it){return H.H.useMemo(N,it)},se.useOptimistic=function(N,it){return H.H.useOptimistic(N,it)},se.useReducer=function(N,it,Tt){return H.H.useReducer(N,it,Tt)},se.useRef=function(N){return H.H.useRef(N)},se.useState=function(N){return H.H.useState(N)},se.useSyncExternalStore=function(N,it,Tt){return H.H.useSyncExternalStore(N,it,Tt)},se.useTransition=function(){return H.H.useTransition()},se.version="19.0.0",se}var bg;function Wd(){return bg||(bg=1,Af.exports=ux()),Af.exports}var $e=Wd(),Rf={exports:{}},_o={},Cf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function fx(){return Ag||(Ag=1,function(o){function e(X,st){var j=X.length;X.push(st);t:for(;0<j;){var Mt=j-1>>>1,N=X[Mt];if(0<l(N,st))X[Mt]=st,X[j]=N,j=Mt;else break t}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var st=X[0],j=X.pop();if(j!==st){X[0]=j;t:for(var Mt=0,N=X.length,it=N>>>1;Mt<it;){var Tt=2*(Mt+1)-1,Rt=X[Tt],q=Tt+1,pt=X[q];if(0>l(Rt,j))q<N&&0>l(pt,Rt)?(X[Mt]=pt,X[q]=j,Mt=q):(X[Mt]=Rt,X[Tt]=j,Mt=Tt);else if(q<N&&0>l(pt,j))X[Mt]=pt,X[q]=j,Mt=q;else break t}}return st}function l(X,st){var j=X.sortIndex-st.sortIndex;return j!==0?j:X.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,v=null,S=3,y=!1,R=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(X){for(var st=i(m);st!==null;){if(st.callback===null)r(m);else if(st.startTime<=X)r(m),st.sortIndex=st.expirationTime,e(p,st);else break;st=i(m)}}function D(X){if(w=!1,O(X),!R)if(i(p)!==null)R=!0,gt();else{var st=i(m);st!==null&&ht(D,st.startTime-X)}}var H=!1,I=-1,B=5,K=-1;function C(){return!(o.unstable_now()-K<B)}function A(){if(H){var X=o.unstable_now();K=X;var st=!0;try{t:{R=!1,w&&(w=!1,g(I),I=-1),y=!0;var j=S;try{e:{for(O(X),v=i(p);v!==null&&!(v.expirationTime>X&&C());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,S=v.priorityLevel;var N=Mt(v.expirationTime<=X);if(X=o.unstable_now(),typeof N=="function"){v.callback=N,O(X),st=!0;break e}v===i(p)&&r(p),O(X)}else r(p);v=i(p)}if(v!==null)st=!0;else{var it=i(m);it!==null&&ht(D,it.startTime-X),st=!1}}break t}finally{v=null,S=j,y=!1}st=void 0}}finally{st?F():H=!1}}}var F;if(typeof P=="function")F=function(){P(A)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,at=ut.port2;ut.port1.onmessage=A,F=function(){at.postMessage(null)}}else F=function(){M(A,0)};function gt(){H||(H=!0,F())}function ht(X,st){I=M(function(){X(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_continueExecution=function(){R||y||(R=!0,gt())},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(X){switch(S){case 1:case 2:case 3:var st=3;break;default:st=S}var j=S;S=st;try{return X()}finally{S=j}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(X,st){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var j=S;S=X;try{return st()}finally{S=j}},o.unstable_scheduleCallback=function(X,st,j){var Mt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Mt+j:Mt):j=Mt,X){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=j+N,X={id:_++,callback:st,priorityLevel:X,startTime:j,expirationTime:N,sortIndex:-1},j>Mt?(X.sortIndex=j,e(m,X),i(p)===null&&X===i(m)&&(w?(g(I),I=-1):w=!0,ht(D,j-Mt))):(X.sortIndex=N,e(p,X),R||y||(R=!0,gt())),X},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(X){var st=S;return function(){var j=S;S=st;try{return X.apply(this,arguments)}finally{S=j}}}}(wf)),wf}var Rg;function dx(){return Rg||(Rg=1,Cf.exports=fx()),Cf.exports}var Df={exports:{}},yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function hx(){if(Cg)return yn;Cg=1;var o=Wd();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,yn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,_)},yn.flushSync=function(p){var m=d.T,_=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=_,r.d.f()}},yn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},yn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},yn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=h(_,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):_==="script"&&r.d.X(p,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},yn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},yn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=h(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},yn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},yn.requestFormReset=function(p){r.d.r(p)},yn.unstable_batchedUpdates=function(p,m){return p(m)},yn.useFormState=function(p,m,_){return d.H.useFormState(p,m,_)},yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},yn.version="19.0.0",yn}var wg;function px(){if(wg)return Df.exports;wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Df.exports=hx(),Df.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function mx(){if(Dg)return _o;Dg=1;var o=dx(),e=Wd(),i=px();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),y=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function I(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var B=Symbol.for("react.client.reference");function K(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===B?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case h:return"Portal";case _:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case M:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y:return(t.displayName||"Context")+".Provider";case S:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case g:return n=t.displayName||null,n!==null?n:K(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return K(t(n))}catch{}}return null}var C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,F,ut;function at(t){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+t+ut}var gt=!1;function ht(t,n){if(!t||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var nt=lt}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(lt){nt=lt}t.call(vt.prototype)}}else{try{throw Error()}catch(lt){nt=lt}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&nt&&typeof lt.stack=="string")return[lt.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var L=x.split(`
`),V=T.split(`
`);for(c=s=0;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(s===L.length||c===V.length)for(s=L.length-1,c=V.length-1;1<=s&&0<=c&&L[s]!==V[c];)c--;for(;1<=s&&0<=c;s--,c--)if(L[s]!==V[c]){if(s!==1||c!==1)do if(s--,c--,0>c||L[s]!==V[c]){var ct=`
`+L[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=c);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?at(a):""}function X(t){switch(t.tag){case 26:case 27:case 5:return at(t.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return t=ht(t.type,!1),t;case 11:return t=ht(t.type.render,!1),t;case 1:return t=ht(t.type,!0),t;default:return""}}function st(t){try{var n="";do n+=X(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function j(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function Mt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function N(t){if(j(t)!==t)throw Error(r(188))}function it(t){var n=t.alternate;if(!n){if(n=j(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return N(c),t;if(f===s)return N(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,s=f;break}if(T===s){x=!0,s=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,s=c;break}if(T===s){x=!0,s=f,a=c;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function Tt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=Tt(t),n!==null)return n;t=t.sibling}return null}var Rt=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},St=[],bt=-1;function Ct(t){return{current:t}}function Qt(t){0>bt||(t.current=St[bt],St[bt]=null,bt--)}function zt(t,n){bt++,St[bt]=t.current,t.current=n}var Me=Ct(null),Re=Ct(null),ae=Ct(null),z=Ct(null);function mn(t,n){switch(zt(ae,n),zt(Re,t),zt(Me,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Qm(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Qm(t),n=Jm(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Qt(Me),zt(Me,n)}function le(){Qt(Me),Qt(Re),Qt(ae)}function fe(t){t.memoizedState!==null&&zt(z,t);var n=Me.current,a=Jm(n,t.type);n!==a&&(zt(Re,t),zt(Me,a))}function Xt(t){Re.current===t&&(Qt(Me),Qt(Re)),z.current===t&&(Qt(z),uo._currentValue=pt)}var Ce=Object.prototype.hasOwnProperty,Wt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,E=o.unstable_shouldYield,tt=o.unstable_requestPaint,ft=o.unstable_now,xt=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,pe=o.unstable_IdlePriority,Et=o.log,Ft=o.unstable_setDisableYieldValue,Kt=null,Vt=null;function It(t){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Kt,t,void 0,(t.current.flags&128)===128)}catch{}}function re(t){if(typeof Et=="function"&&Ft(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Kt,t)}catch{}}var jt=Math.clz32?Math.clz32:Lt,we=Math.log,k=Math.LN2;function Lt(t){return t>>>=0,t===0?32:31-(we(t)/k|0)|0}var ot=128,_t=4194304;function wt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ut(t,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,c=t.suspendedLanes,f=t.pingedLanes,x=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~c,a!==0?s=wt(a):(f&=T,f!==0?s=wt(f):t||(x=T&~x,x!==0&&(s=wt(x))))):(T=a&~c,T!==0?s=wt(T):f!==0?s=wt(f):t||(x=a&~x,x!==0&&(s=wt(x)))),s===0?0:n!==0&&n!==s&&(n&c)===0&&(c=s&-s,x=n&-n,c>=x||c===32&&(x&4194176)!==0)?n:s}function te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function en(){var t=ot;return ot<<=1,(ot&4194176)===0&&(ot=128),t}function ye(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function bn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function An(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Oo(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,L=t.expirationTimes,V=t.hiddenUpdates;for(a=x&~a;0<a;){var ct=31-jt(a),vt=1<<ct;T[ct]=0,L[ct]=-1;var nt=V[ct];if(nt!==null)for(V[ct]=null,ct=0;ct<nt.length;ct++){var lt=nt[ct];lt!==null&&(lt.lane&=-536870913)}a&=~vt}s!==0&&Ms(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Ms(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-jt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194218}function vi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-jt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function _r(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ys(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:gg(t.type))}function Po(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var In=Math.random().toString(36).slice(2),nn="__reactFiber$"+In,an="__reactProps$"+In,wi="__reactContainer$"+In,vr="__reactEvents$"+In,yc="__reactListeners$"+In,Ec="__reactHandles$"+In,zo="__reactResources$"+In,Ba="__reactMarker$"+In;function Es(t){delete t[nn],delete t[an],delete t[vr],delete t[yc],delete t[Ec]}function Di(t){var n=t[nn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[wi]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=eg(t);t!==null;){if(a=t[nn])return a;t=eg(t)}return n}t=a,a=t.parentNode}return null}function b(t){if(t=t[nn]||t[wi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function W(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function et(t){var n=t[zo];return n||(n=t[zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(t){t[Ba]=!0}var Y=new Set,yt={};function At(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(yt[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},Yt={};function ge(t){return Ce.call(Yt,t)?!0:Ce.call($t,t)?!1:ee.test(t)?Yt[t]=!0:($t[t]=!0,!1)}function _e(t,n,a){if(ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ee(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rn(t){var n=Zt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ve(t){t._valueTracker||(t._valueTracker=rn(t))}function Ln(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Zt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function oi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Rn=/[\n"\\]/g;function un(t){return t.replace(Rn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function De(t,n,a,s,c,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ne(n)):t.value!==""+ne(n)&&(t.value=""+ne(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,x,ne(n)):a!=null?Sn(t,x,ne(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ne(T):t.removeAttribute("name")}function Cn(t,n,a,s,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function Sn(t,n,a){n==="number"&&oi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ke(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function gn(t,n,a){if(n!=null&&(n=""+ne(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ne(a):""}function xr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ne(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function On(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var rv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||rv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function sh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&rh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&rh(t,f,n[f])}function Tc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bo(t){return ov.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var bc=null;function Ac(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sr=null,Mr=null;function oh(t){var n=b(t);if(n&&(t=n.stateNode)){var a=t[an]||null;t:switch(t=n.stateNode,n.type){case"input":if(De(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[an]||null;if(!c)throw Error(r(90));De(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ln(s)}break t;case"textarea":gn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ke(t,!!a.multiple,n,!1)}}}var Rc=!1;function lh(t,n,a){if(Rc)return t(n,a);Rc=!0;try{var s=t(n);return s}finally{if(Rc=!1,(Sr!==null||Mr!==null)&&(Sl(),Sr&&(n=Sr,t=Mr,Mr=Sr=null,oh(n),t)))for(n=0;n<t.length;n++)oh(t[n])}}function Ts(t,n){var a=t.stateNode;if(a===null)return null;var s=a[an]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Cc=!1;if(Ot)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Cc=!1}var aa=null,wc=null,Fo=null;function ch(){if(Fo)return Fo;var t,n=wc,a=n.length,s,c="value"in aa?aa.value:aa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Fo=c.slice(t,1<s?1-s:void 0)}function Io(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function uh(){return!1}function Pn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ho:uh,this.isPropagationStopped=uh,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Pn(Fa),As=A({},Fa,{view:0,detail:0}),lv=Pn(As),Dc,Uc,Rs,Vo=A({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(Dc=t.screenX-Rs.screenX,Uc=t.screenY-Rs.screenY):Uc=Dc=0,Rs=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),fh=Pn(Vo),cv=A({},Vo,{dataTransfer:0}),uv=Pn(cv),fv=A({},As,{relatedTarget:0}),Nc=Pn(fv),dv=A({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=Pn(dv),pv=A({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mv=Pn(pv),gv=A({},Fa,{data:0}),dh=Pn(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=xv[t])?!!n[t]:!1}function Lc(){return Sv}var Mv=A({},As,{key:function(t){if(t.key){var n=_v[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yv=Pn(Mv),Ev=A({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=Pn(Ev),Tv=A({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),bv=Pn(Tv),Av=A({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Pn(Av),Cv=A({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Pn(Cv),Dv=A({},Fa,{newState:0,oldState:0}),Uv=Pn(Dv),Nv=[9,13,27,32],Oc=Ot&&"CompositionEvent"in window,Cs=null;Ot&&"documentMode"in document&&(Cs=document.documentMode);var Lv=Ot&&"TextEvent"in window&&!Cs,ph=Ot&&(!Oc||Cs&&8<Cs&&11>=Cs),mh=" ",gh=!1;function _h(t,n){switch(t){case"keyup":return Nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function Ov(t,n){switch(t){case"compositionend":return vh(n);case"keypress":return n.which!==32?null:(gh=!0,mh);case"textInput":return t=n.data,t===mh&&gh?null:t;default:return null}}function Pv(t,n){if(yr)return t==="compositionend"||!Oc&&_h(t,n)?(t=ch(),Fo=wc=aa=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ph&&n.locale!=="ko"?null:n.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!zv[t.type]:n==="textarea"}function Sh(t,n,a,s){Sr?Mr?Mr.push(s):Mr=[s]:Sr=s,n=bl(n,"onChange"),0<n.length&&(a=new Go("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var ws=null,Ds=null;function Bv(t){qm(t,0)}function ko(t){var n=W(t);if(Ln(n))return t}function Mh(t,n){if(t==="change")return n}var yh=!1;if(Ot){var Pc;if(Ot){var zc="oninput"in document;if(!zc){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),zc=typeof Eh.oninput=="function"}Pc=zc}else Pc=!1;yh=Pc&&(!document.documentMode||9<document.documentMode)}function Th(){ws&&(ws.detachEvent("onpropertychange",bh),Ds=ws=null)}function bh(t){if(t.propertyName==="value"&&ko(Ds)){var n=[];Sh(n,Ds,t,Ac(t)),lh(Bv,n)}}function Fv(t,n,a){t==="focusin"?(Th(),ws=n,Ds=a,ws.attachEvent("onpropertychange",bh)):t==="focusout"&&Th()}function Iv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ko(Ds)}function Hv(t,n){if(t==="click")return ko(n)}function Gv(t,n){if(t==="input"||t==="change")return ko(n)}function Vv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:Vv;function Us(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ce.call(n,c)||!Hn(t[c],n[c]))return!1}return!0}function Ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rh(t,n){var a=Ah(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ah(a)}}function Ch(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ch(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function wh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=oi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=oi(t.document)}return n}function Bc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function kv(t,n){var a=wh(n);n=t.focusedElem;var s=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&Ch(n.ownerDocument.documentElement,n)){if(s!==null&&Bc(n)){if(t=s.start,a=s.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=Rh(n,f);var x=Rh(n,s);c&&x&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==x.node||a.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(t),a.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Xv=Ot&&"documentMode"in document&&11>=document.documentMode,Er=null,Fc=null,Ns=null,Ic=!1;function Dh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ic||Er==null||Er!==oi(s)||(s=Er,"selectionStart"in s&&Bc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ns&&Us(Ns,s)||(Ns=s,s=bl(Fc,"onSelect"),0<s.length&&(n=new Go("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Er)))}function Ia(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},Hc={},Uh={};Ot&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Ha(t){if(Hc[t])return Hc[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Uh)return Hc[t]=n[a];return t}var Nh=Ha("animationend"),Lh=Ha("animationiteration"),Oh=Ha("animationstart"),Wv=Ha("transitionrun"),qv=Ha("transitionstart"),Yv=Ha("transitioncancel"),Ph=Ha("transitionend"),zh=new Map,Bh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function li(t,n){zh.set(t,n),At(n,[t])}var jn=[],br=0,Gc=0;function Xo(){for(var t=br,n=Gc=br=0;n<t;){var a=jn[n];jn[n++]=null;var s=jn[n];jn[n++]=null;var c=jn[n];jn[n++]=null;var f=jn[n];if(jn[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&Fh(a,c,f)}}function Wo(t,n,a,s){jn[br++]=t,jn[br++]=n,jn[br++]=a,jn[br++]=s,Gc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Vc(t,n,a,s){return Wo(t,n,a,s),qo(t)}function ra(t,n){return Wo(t,null,null,n),qo(t)}function Fh(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-jt(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function qo(t){if(50<io)throw io=0,ju=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ar={},Ih=new WeakMap;function Zn(t,n){if(typeof t=="object"&&t!==null){var a=Ih.get(t);return a!==void 0?a:(n={value:t,source:n,stack:st(n)},Ih.set(t,n),n)}return{value:t,source:n,stack:st(n)}}var Rr=[],Cr=0,Yo=null,jo=0,Kn=[],Qn=0,Ga=null,Ui=1,Ni="";function Va(t,n){Rr[Cr++]=jo,Rr[Cr++]=Yo,Yo=t,jo=n}function Hh(t,n,a){Kn[Qn++]=Ui,Kn[Qn++]=Ni,Kn[Qn++]=Ga,Ga=t;var s=Ui;t=Ni;var c=32-jt(s)-1;s&=~(1<<c),a+=1;var f=32-jt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ui=1<<32-jt(n)+c|a<<c|s,Ni=f+t}else Ui=1<<f|a<<c|s,Ni=t}function kc(t){t.return!==null&&(Va(t,1),Hh(t,1,0))}function Xc(t){for(;t===Yo;)Yo=Rr[--Cr],Rr[Cr]=null,jo=Rr[--Cr],Rr[Cr]=null;for(;t===Ga;)Ga=Kn[--Qn],Kn[Qn]=null,Ni=Kn[--Qn],Kn[Qn]=null,Ui=Kn[--Qn],Kn[Qn]=null}var wn=null,_n=null,Te=!1,ci=null,xi=!1,Wc=Error(r(519));function ka(t){var n=Error(r(418,""));throw Ps(Zn(n,t)),Wc}function Gh(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[nn]=t,n[an]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<ro.length;a++)xe(ro[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Cn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),ve(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),xr(n,s.value,s.defaultValue,s.children),ve(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Km(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Al),n=!0):n=!1,n||ka(t)}function Vh(t){for(wn=t.return;wn;)switch(wn.tag){case 3:case 27:xi=!0;return;case 5:case 13:xi=!1;return;default:wn=wn.return}}function Ls(t){if(t!==wn)return!1;if(!Te)return Vh(t),Te=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||df(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&_n&&ka(t),Vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){_n=fi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}_n=null}}else _n=wn?fi(t.stateNode.nextSibling):null;return!0}function Os(){_n=wn=null,Te=!1}function Ps(t){ci===null?ci=[t]:ci.push(t)}var zs=Error(r(460)),kh=Error(r(474)),qc={then:function(){}};function Xh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zo(){}function Wh(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zo,Zo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===zs?Error(r(483)):t;default:if(typeof n.status=="string")n.then(Zo,Zo);else{if(t=Be,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===zs?Error(r(483)):t}throw Bs=n,zs}}var Bs=null;function qh(){if(Bs===null)throw Error(r(459));var t=Bs;return Bs=null,t}var wr=null,Fs=0;function Ko(t){var n=Fs;return Fs+=1,wr===null&&(wr=[]),Wh(wr,t,n)}function Is(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Qo(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Yh(t){var n=t._init;return n(t._payload)}function jh(t){function n(Z,G){if(t){var J=Z.deletions;J===null?(Z.deletions=[G],Z.flags|=16):J.push(G)}}function a(Z,G){if(!t)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function s(Z){for(var G=new Map;Z!==null;)Z.key!==null?G.set(Z.key,Z):G.set(Z.index,Z),Z=Z.sibling;return G}function c(Z,G){return Z=_a(Z,G),Z.index=0,Z.sibling=null,Z}function f(Z,G,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<G?(Z.flags|=33554434,G):J):(Z.flags|=33554434,G)):(Z.flags|=1048576,G)}function x(Z){return t&&Z.alternate===null&&(Z.flags|=33554434),Z}function T(Z,G,J,mt){return G===null||G.tag!==6?(G=Hu(J,Z.mode,mt),G.return=Z,G):(G=c(G,J),G.return=Z,G)}function L(Z,G,J,mt){var Ht=J.type;return Ht===p?ct(Z,G,J.props.children,mt,J.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===P&&Yh(Ht)===G.type)?(G=c(G,J.props),Is(G,J),G.return=Z,G):(G=ml(J.type,J.key,J.props,null,Z.mode,mt),Is(G,J),G.return=Z,G)}function V(Z,G,J,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Gu(J,Z.mode,mt),G.return=Z,G):(G=c(G,J.children||[]),G.return=Z,G)}function ct(Z,G,J,mt,Ht){return G===null||G.tag!==7?(G=$a(J,Z.mode,mt,Ht),G.return=Z,G):(G=c(G,J),G.return=Z,G)}function vt(Z,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Hu(""+G,Z.mode,J),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case d:return J=ml(G.type,G.key,G.props,null,Z.mode,J),Is(J,G),J.return=Z,J;case h:return G=Gu(G,Z.mode,J),G.return=Z,G;case P:var mt=G._init;return G=mt(G._payload),vt(Z,G,J)}if(Rt(G)||I(G))return G=$a(G,Z.mode,J,null),G.return=Z,G;if(typeof G.then=="function")return vt(Z,Ko(G),J);if(G.$$typeof===y)return vt(Z,dl(Z,G),J);Qo(Z,G)}return null}function nt(Z,G,J,mt){var Ht=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:T(Z,G,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case d:return J.key===Ht?L(Z,G,J,mt):null;case h:return J.key===Ht?V(Z,G,J,mt):null;case P:return Ht=J._init,J=Ht(J._payload),nt(Z,G,J,mt)}if(Rt(J)||I(J))return Ht!==null?null:ct(Z,G,J,mt,null);if(typeof J.then=="function")return nt(Z,G,Ko(J),mt);if(J.$$typeof===y)return nt(Z,G,dl(Z,J),mt);Qo(Z,J)}return null}function lt(Z,G,J,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(J)||null,T(G,Z,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case d:return Z=Z.get(mt.key===null?J:mt.key)||null,L(G,Z,mt,Ht);case h:return Z=Z.get(mt.key===null?J:mt.key)||null,V(G,Z,mt,Ht);case P:var de=mt._init;return mt=de(mt._payload),lt(Z,G,J,mt,Ht)}if(Rt(mt)||I(mt))return Z=Z.get(J)||null,ct(G,Z,mt,Ht,null);if(typeof mt.then=="function")return lt(Z,G,J,Ko(mt),Ht);if(mt.$$typeof===y)return lt(Z,G,J,dl(G,mt),Ht);Qo(G,mt)}return null}function kt(Z,G,J,mt){for(var Ht=null,de=null,qt=G,Jt=G=0,hn=null;qt!==null&&Jt<J.length;Jt++){qt.index>Jt?(hn=qt,qt=null):hn=qt.sibling;var be=nt(Z,qt,J[Jt],mt);if(be===null){qt===null&&(qt=hn);break}t&&qt&&be.alternate===null&&n(Z,qt),G=f(be,G,Jt),de===null?Ht=be:de.sibling=be,de=be,qt=hn}if(Jt===J.length)return a(Z,qt),Te&&Va(Z,Jt),Ht;if(qt===null){for(;Jt<J.length;Jt++)qt=vt(Z,J[Jt],mt),qt!==null&&(G=f(qt,G,Jt),de===null?Ht=qt:de.sibling=qt,de=qt);return Te&&Va(Z,Jt),Ht}for(qt=s(qt);Jt<J.length;Jt++)hn=lt(qt,Z,Jt,J[Jt],mt),hn!==null&&(t&&hn.alternate!==null&&qt.delete(hn.key===null?Jt:hn.key),G=f(hn,G,Jt),de===null?Ht=hn:de.sibling=hn,de=hn);return t&&qt.forEach(function(Ta){return n(Z,Ta)}),Te&&Va(Z,Jt),Ht}function ie(Z,G,J,mt){if(J==null)throw Error(r(151));for(var Ht=null,de=null,qt=G,Jt=G=0,hn=null,be=J.next();qt!==null&&!be.done;Jt++,be=J.next()){qt.index>Jt?(hn=qt,qt=null):hn=qt.sibling;var Ta=nt(Z,qt,be.value,mt);if(Ta===null){qt===null&&(qt=hn);break}t&&qt&&Ta.alternate===null&&n(Z,qt),G=f(Ta,G,Jt),de===null?Ht=Ta:de.sibling=Ta,de=Ta,qt=hn}if(be.done)return a(Z,qt),Te&&Va(Z,Jt),Ht;if(qt===null){for(;!be.done;Jt++,be=J.next())be=vt(Z,be.value,mt),be!==null&&(G=f(be,G,Jt),de===null?Ht=be:de.sibling=be,de=be);return Te&&Va(Z,Jt),Ht}for(qt=s(qt);!be.done;Jt++,be=J.next())be=lt(qt,Z,Jt,be.value,mt),be!==null&&(t&&be.alternate!==null&&qt.delete(be.key===null?Jt:be.key),G=f(be,G,Jt),de===null?Ht=be:de.sibling=be,de=be);return t&&qt.forEach(function(ox){return n(Z,ox)}),Te&&Va(Z,Jt),Ht}function qe(Z,G,J,mt){if(typeof J=="object"&&J!==null&&J.type===p&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case d:t:{for(var Ht=J.key;G!==null;){if(G.key===Ht){if(Ht=J.type,Ht===p){if(G.tag===7){a(Z,G.sibling),mt=c(G,J.props.children),mt.return=Z,Z=mt;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===P&&Yh(Ht)===G.type){a(Z,G.sibling),mt=c(G,J.props),Is(mt,J),mt.return=Z,Z=mt;break t}a(Z,G);break}else n(Z,G);G=G.sibling}J.type===p?(mt=$a(J.props.children,Z.mode,mt,J.key),mt.return=Z,Z=mt):(mt=ml(J.type,J.key,J.props,null,Z.mode,mt),Is(mt,J),mt.return=Z,Z=mt)}return x(Z);case h:t:{for(Ht=J.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(Z,G.sibling),mt=c(G,J.children||[]),mt.return=Z,Z=mt;break t}else{a(Z,G);break}else n(Z,G);G=G.sibling}mt=Gu(J,Z.mode,mt),mt.return=Z,Z=mt}return x(Z);case P:return Ht=J._init,J=Ht(J._payload),qe(Z,G,J,mt)}if(Rt(J))return kt(Z,G,J,mt);if(I(J)){if(Ht=I(J),typeof Ht!="function")throw Error(r(150));return J=Ht.call(J),ie(Z,G,J,mt)}if(typeof J.then=="function")return qe(Z,G,Ko(J),mt);if(J.$$typeof===y)return qe(Z,G,dl(Z,J),mt);Qo(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(Z,G.sibling),mt=c(G,J),mt.return=Z,Z=mt):(a(Z,G),mt=Hu(J,Z.mode,mt),mt.return=Z,Z=mt),x(Z)):a(Z,G)}return function(Z,G,J,mt){try{Fs=0;var Ht=qe(Z,G,J,mt);return wr=null,Ht}catch(qt){if(qt===zs)throw qt;var de=ei(29,qt,null,Z.mode);return de.lanes=mt,de.return=Z,de}finally{}}}var Xa=jh(!0),Zh=jh(!1),Dr=Ct(null),Jo=Ct(0);function Kh(t,n){t=ki,zt(Jo,t),zt(Dr,n),ki=t|n.baseLanes}function Yc(){zt(Jo,ki),zt(Dr,Dr.current)}function jc(){ki=Jo.current,Qt(Dr),Qt(Jo)}var Jn=Ct(null),Si=null;function sa(t){var n=t.alternate;zt(sn,sn.current&1),zt(Jn,t),Si===null&&(n===null||Dr.current!==null||n.memoizedState!==null)&&(Si=t)}function Qh(t){if(t.tag===22){if(zt(sn,sn.current),zt(Jn,t),Si===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Si=t)}}else oa()}function oa(){zt(sn,sn.current),zt(Jn,Jn.current)}function Li(t){Qt(Jn),Si===t&&(Si=null),Qt(sn)}var sn=Ct(0);function $o(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var jv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Zv=o.unstable_scheduleCallback,Kv=o.unstable_NormalPriority,on={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zc(){return{controller:new jv,data:new Map,refCount:0}}function Hs(t){t.refCount--,t.refCount===0&&Zv(Kv,function(){t.controller.abort()})}var Gs=null,Kc=0,Ur=0,Nr=null;function Qv(t,n){if(Gs===null){var a=Gs=[];Kc=0,Ur=nf(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Kc++,n.then(Jh,Jh),n}function Jh(){if(--Kc===0&&Gs!==null){Nr!==null&&(Nr.status="fulfilled");var t=Gs;Gs=null,Ur=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Jv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var $h=C.S;C.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qv(t,n),$h!==null&&$h(t,n)};var Wa=Ct(null);function Qc(){var t=Wa.current;return t!==null?t:Be.pooledCache}function tl(t,n){n===null?zt(Wa,Wa.current):zt(Wa,n.pool)}function tp(){var t=Qc();return t===null?null:{parent:on._currentValue,pool:t}}var la=0,ue=null,Ue=null,Ze=null,el=!1,Lr=!1,qa=!1,nl=0,Vs=0,Or=null,$v=0;function Ye(){throw Error(r(321))}function Jc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function $c(t,n,a,s,c,f){return la=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=t===null||t.memoizedState===null?Ya:ca,qa=!1,f=a(s,c),qa=!1,Lr&&(f=np(n,a,s,c)),ep(t),f}function ep(t){C.H=Mi;var n=Ue!==null&&Ue.next!==null;if(la=0,Ze=Ue=ue=null,el=!1,Vs=0,Or=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&fl(t)&&(fn=!0))}function np(t,n,a,s){ue=t;var c=0;do{if(Lr&&(Or=null),Vs=0,Lr=!1,25<=c)throw Error(r(301));if(c+=1,Ze=Ue=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=ja,f=n(a,s)}while(Lr);return f}function t0(){var t=C.H,n=t.useState()[0];return n=typeof n.then=="function"?ks(n):n,t=t.useState()[0],(Ue!==null?Ue.memoizedState:null)!==t&&(ue.flags|=1024),n}function tu(){var t=nl!==0;return nl=0,t}function eu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function nu(t){if(el){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}el=!1}la=0,Ze=Ue=ue=null,Lr=!1,Vs=nl=0,Or=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ue.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Ke(){if(Ue===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var n=Ze===null?ue.memoizedState:Ze.next;if(n!==null)Ze=n,Ue=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ze===null?ue.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}var il;il=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ks(t){var n=Vs;return Vs+=1,Or===null&&(Or=[]),t=Wh(Or,t,n),n=ue,(Ze===null?n.memoizedState:Ze.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Ya:ca),t}function al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ks(t);if(t.$$typeof===y)return Mn(t)}throw Error(r(438,String(t)))}function iu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=il(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=D;return n.index++,a}function Oi(t,n){return typeof n=="function"?n(t):n}function rl(t){var n=Ke();return au(n,Ue,t)}function au(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=x=null,L=null,V=n,ct=!1;do{var vt=V.lane&-536870913;if(vt!==V.lane?(Se&vt)===vt:(la&vt)===vt){var nt=V.revertLane;if(nt===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),vt===Ur&&(ct=!0);else if((la&nt)===nt){V=V.next,nt===Ur&&(ct=!0);continue}else vt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},L===null?(T=L=vt,x=f):L=L.next=vt,ue.lanes|=nt,va|=nt;vt=V.action,qa&&a(f,vt),f=V.hasEagerState?V.eagerState:a(f,vt)}else nt={lane:vt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},L===null?(T=L=nt,x=f):L=L.next=nt,ue.lanes|=vt,va|=vt;V=V.next}while(V!==null&&V!==n);if(L===null?x=f:L.next=T,!Hn(f,t.memoizedState)&&(fn=!0,ct&&(a=Nr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=L,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function ru(t){var n=Ke(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Hn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function ip(t,n,a){var s=ue,c=Ke(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Hn((Ue||c).memoizedState,a);if(x&&(c.memoizedState=a,fn=!0),c=c.queue,lu(sp.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||Ze!==null&&Ze.memoizedState.tag&1){if(s.flags|=2048,Pr(9,rp.bind(null,s,c,a,n),{destroy:void 0},null),Be===null)throw Error(r(349));f||(la&60)!==0||ap(s,n,a)}return a}function ap(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=il(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function rp(t,n,a,s){n.value=a,n.getSnapshot=s,op(n)&&lp(t)}function sp(t,n,a){return a(function(){op(n)&&lp(t)})}function op(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function lp(t){var n=ra(t,2);n!==null&&Dn(n,t,2)}function su(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),qa){re(!0);try{a()}finally{re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:t},n}function cp(t,n,a,s){return t.baseState=a,au(t,Ue,typeof s=="function"?s:Oi)}function e0(t,n,a,s,c){if(ll(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};C.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,up(n,f)):(f.next=a.next,n.pending=a.next=f)}}function up(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=C.T,x={};C.T=x;try{var T=a(c,s),L=C.S;L!==null&&L(x,T),fp(t,n,T)}catch(V){ou(t,n,V)}finally{C.T=f}}else try{f=a(c,s),fp(t,n,f)}catch(V){ou(t,n,V)}}function fp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){dp(t,n,s)},function(s){return ou(t,n,s)}):dp(t,n,a)}function dp(t,n,a){n.status="fulfilled",n.value=a,hp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,up(t,a)))}function ou(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,hp(n),n=n.next;while(n!==s)}t.action=null}function hp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function pp(t,n){return n}function mp(t,n){if(Te){var a=Be.formState;if(a!==null){t:{var s=ue;if(Te){if(_n){e:{for(var c=_n,f=xi;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){_n=fi(c.nextSibling),s=c.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pp,lastRenderedState:n},a.queue=s,a=Lp.bind(null,ue,s),s.dispatch=a,s=su(!1),f=hu.bind(null,ue,!1,s.queue),s=zn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=e0.bind(null,ue,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function gp(t){var n=Ke();return _p(n,Ue,t)}function _p(t,n,a){n=au(t,n,pp)[0],t=rl(Oi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?ks(n):n;var s=Ke(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(ue.flags|=2048,Pr(9,n0.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function n0(t,n){t.action=n}function vp(t){var n=Ke(),a=Ue;if(a!==null)return _p(n,a,t);Ke(),n=n.memoizedState,a=Ke();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Pr(t,n,a,s){return t={tag:t,create:n,inst:a,deps:s,next:null},n=ue.updateQueue,n===null&&(n=il(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function xp(){return Ke().memoizedState}function sl(t,n,a,s){var c=zn();ue.flags|=t,c.memoizedState=Pr(1|n,a,{destroy:void 0},s===void 0?null:s)}function ol(t,n,a,s){var c=Ke();s=s===void 0?null:s;var f=c.memoizedState.inst;Ue!==null&&s!==null&&Jc(s,Ue.memoizedState.deps)?c.memoizedState=Pr(n,a,f,s):(ue.flags|=t,c.memoizedState=Pr(1|n,a,f,s))}function Sp(t,n){sl(8390656,8,t,n)}function lu(t,n){ol(2048,8,t,n)}function Mp(t,n){return ol(4,2,t,n)}function yp(t,n){return ol(4,4,t,n)}function Ep(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Tp(t,n,a){a=a!=null?a.concat([t]):null,ol(4,4,Ep.bind(null,n,t),a)}function cu(){}function bp(t,n){var a=Ke();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Jc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Ap(t,n){var a=Ke();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Jc(n,s[1]))return s[0];if(s=t(),qa){re(!0);try{t()}finally{re(!1)}}return a.memoizedState=[s,n],s}function uu(t,n,a){return a===void 0||(la&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Cm(),ue.lanes|=t,va|=t,a)}function Rp(t,n,a,s){return Hn(a,n)?a:Dr.current!==null?(t=uu(t,a,s),Hn(t,n)||(fn=!0),t):(la&42)===0?(fn=!0,t.memoizedState=a):(t=Cm(),ue.lanes|=t,va|=t,n)}function Cp(t,n,a,s,c){var f=q.p;q.p=f!==0&&8>f?f:8;var x=C.T,T={};C.T=T,hu(t,!1,n,a);try{var L=c(),V=C.S;if(V!==null&&V(T,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ct=Jv(L,s);Xs(t,n,ct,Xn(t))}else Xs(t,n,s,Xn(t))}catch(vt){Xs(t,n,{then:function(){},status:"rejected",reason:vt},Xn())}finally{q.p=f,C.T=x}}function i0(){}function fu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=wp(t).queue;Cp(t,c,n,pt,a===null?i0:function(){return Dp(t),a(s)})}function wp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Dp(t){var n=wp(t).next.queue;Xs(t,n,{},Xn())}function du(){return Mn(uo)}function Up(){return Ke().memoizedState}function Np(){return Ke().memoizedState}function a0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();t=da(a);var s=ha(n,t,a);s!==null&&(Dn(s,n,a),Ys(s,n,a)),n={cache:Zc()},t.payload=n;return}n=n.return}}function r0(t,n,a){var s=Xn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ll(t)?Op(n,a):(a=Vc(t,n,a,s),a!==null&&(Dn(a,t,s),Pp(a,n,s)))}function Lp(t,n,a){var s=Xn();Xs(t,n,a,s)}function Xs(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(t))Op(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,Hn(T,x))return Wo(t,n,c,0),Be===null&&Xo(),!1}catch{}finally{}if(a=Vc(t,n,c,s),a!==null)return Dn(a,t,s),Pp(a,n,s),!0}return!1}function hu(t,n,a,s){if(s={lane:2,revertLane:nf(),action:s,hasEagerState:!1,eagerState:null,next:null},ll(t)){if(n)throw Error(r(479))}else n=Vc(t,a,s,2),n!==null&&Dn(n,t,2)}function ll(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Op(t,n){Lr=el=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Pp(t,n,a){if((a&4194176)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,vi(t,a)}}var Mi={readContext:Mn,use:al,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye};Mi.useCacheRefresh=Ye,Mi.useMemoCache=Ye,Mi.useHostTransitionStatus=Ye,Mi.useFormState=Ye,Mi.useActionState=Ye,Mi.useOptimistic=Ye;var Ya={readContext:Mn,use:al,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Sp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,sl(4194308,4,Ep.bind(null,n,t),a)},useLayoutEffect:function(t,n){return sl(4194308,4,t,n)},useInsertionEffect:function(t,n){sl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var s=t();if(qa){re(!0);try{t()}finally{re(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=zn();if(a!==void 0){var c=a(n);if(qa){re(!0);try{a(n)}finally{re(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=r0.bind(null,ue,t),[s.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=su(t);var n=t.queue,a=Lp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:cu,useDeferredValue:function(t,n){var a=zn();return uu(a,t,n)},useTransition:function(){var t=su(!1);return t=Cp.bind(null,ue,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ue,c=zn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Be===null)throw Error(r(349));(Se&60)!==0||ap(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Sp(sp.bind(null,s,f,t),[t]),s.flags|=2048,Pr(9,rp.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var t=zn(),n=Be.identifierPrefix;if(Te){var a=Ni,s=Ui;a=(s&~(1<<32-jt(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=nl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=$v++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return zn().memoizedState=a0.bind(null,ue)}};Ya.useMemoCache=iu,Ya.useHostTransitionStatus=du,Ya.useFormState=mp,Ya.useActionState=mp,Ya.useOptimistic=function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hu.bind(null,ue,!0,a),a.dispatch=n,[t,n]};var ca={readContext:Mn,use:al,useCallback:bp,useContext:Mn,useEffect:lu,useImperativeHandle:Tp,useInsertionEffect:Mp,useLayoutEffect:yp,useMemo:Ap,useReducer:rl,useRef:xp,useState:function(){return rl(Oi)},useDebugValue:cu,useDeferredValue:function(t,n){var a=Ke();return Rp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=rl(Oi)[0],n=Ke().memoizedState;return[typeof t=="boolean"?t:ks(t),n]},useSyncExternalStore:ip,useId:Up};ca.useCacheRefresh=Np,ca.useMemoCache=iu,ca.useHostTransitionStatus=du,ca.useFormState=gp,ca.useActionState=gp,ca.useOptimistic=function(t,n){var a=Ke();return cp(a,Ue,t,n)};var ja={readContext:Mn,use:al,useCallback:bp,useContext:Mn,useEffect:lu,useImperativeHandle:Tp,useInsertionEffect:Mp,useLayoutEffect:yp,useMemo:Ap,useReducer:ru,useRef:xp,useState:function(){return ru(Oi)},useDebugValue:cu,useDeferredValue:function(t,n){var a=Ke();return Ue===null?uu(a,t,n):Rp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=ru(Oi)[0],n=Ke().memoizedState;return[typeof t=="boolean"?t:ks(t),n]},useSyncExternalStore:ip,useId:Up};ja.useCacheRefresh=Np,ja.useMemoCache=iu,ja.useHostTransitionStatus=du,ja.useFormState=vp,ja.useActionState=vp,ja.useOptimistic=function(t,n){var a=Ke();return Ue!==null?cp(a,Ue,t,n):(a.baseState=t,[t,a.queue.dispatch])};function pu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:A({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var mu={isMounted:function(t){return(t=t._reactInternals)?j(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Xn(),c=da(s);c.payload=n,a!=null&&(c.callback=a),n=ha(t,c,s),n!==null&&(Dn(n,t,s),Ys(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Xn(),c=da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ha(t,c,s),n!==null&&(Dn(n,t,s),Ys(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Xn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=ha(t,s,a),n!==null&&(Dn(n,t,a),Ys(n,t,a))}};function zp(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Us(a,s)||!Us(c,f):!0}function Bp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&mu.enqueueReplaceState(n,n.state,null)}function Za(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=A({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Fp(t){cl(t)}function Ip(t){console.error(t)}function Hp(t){cl(t)}function ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Gp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function gu(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){ul(t,n)},a}function Vp(t){return t=da(t),t.tag=3,t}function kp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Gp(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Gp(n,a,s),typeof c!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function s0(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 13:return Si===null?Qu():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===qc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),$u(t,s,c)),!1;case 22:return a.flags|=65536,s===qc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),$u(t,s,c)),!1}throw Error(r(435,a.tag))}return $u(t,s,c),Qu(),!1}if(Te)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Wc&&(t=Error(r(422),{cause:s}),Ps(Zn(t,a)))):(s!==Wc&&(n=Error(r(423),{cause:s}),Ps(Zn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Zn(s,a),c=gu(t.stateNode,s,c),Uu(t,c),We!==4&&(We=2)),!1;var f=Error(r(520),{cause:s});if(f=Zn(f,a),eo===null?eo=[f]:eo.push(f),We!==4&&(We=2),n===null)return!0;s=Zn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=gu(a.stateNode,s,t),Uu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Vp(c),kp(c,t,a,s),Uu(a,c),!1}a=a.return}while(a!==null);return!1}var Xp=Error(r(461)),fn=!1;function vn(t,n,a,s){n.child=t===null?Zh(n,null,a,s):Xa(n,t.child,a,s)}function Wp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return Qa(n),s=$c(t,n,a,x,f,c),T=tu(),t!==null&&!fn?(eu(t,n,c),Pi(t,n,c)):(Te&&T&&kc(n),n.flags|=1,vn(t,n,s,c),n.child)}function qp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Yp(t,n,f,s,c)):(t=ml(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!bu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Us,a(x,s)&&t.ref===n.ref)return Pi(t,n,c)}return n.flags|=1,t=_a(f,s),t.ref=n.ref,t.return=n,n.child=t}function Yp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Us(f,s)&&t.ref===n.ref)if(fn=!1,n.pendingProps=s=f,bu(t,c))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,Pi(t,n,c)}return _u(t,n,a,s,c)}function jp(t,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,x=t!==null?t.memoizedState:null;if(Ws(t,n),s.mode==="hidden"||f){if((n.flags&128)!==0){if(s=x!==null?x.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Zp(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tl(n,x!==null?x.cachePool:null),x!==null?Kh(n,x):Yc(),Qh(n);else return n.lanes=n.childLanes=536870912,Zp(t,n,x!==null?x.baseLanes|a:a,a)}else x!==null?(tl(n,x.cachePool),Kh(n,x),oa(),n.memoizedState=null):(t!==null&&tl(n,null),Yc(),oa());return vn(t,n,c,a),n.child}function Zp(t,n,a,s){var c=Qc();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&tl(n,null),Yc(),Qh(n),t!==null&&qs(t,n,s,!0),null}function Ws(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function _u(t,n,a,s,c){return Qa(n),a=$c(t,n,a,s,void 0,c),s=tu(),t!==null&&!fn?(eu(t,n,c),Pi(t,n,c)):(Te&&s&&kc(n),n.flags|=1,vn(t,n,a,c),n.child)}function Kp(t,n,a,s,c,f){return Qa(n),n.updateQueue=null,a=np(n,s,a,c),ep(t),s=tu(),t!==null&&!fn?(eu(t,n,f),Pi(t,n,f)):(Te&&s&&kc(n),n.flags|=1,vn(t,n,a,f),n.child)}function Qp(t,n,a,s,c){if(Qa(n),n.stateNode===null){var f=Ar,x=a.contextType;typeof x=="object"&&x!==null&&(f=Mn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=mu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Mn(x):Ar,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(pu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&mu.enqueueReplaceState(f,f.state,null),Zs(n,s,f,c),js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,L=Za(a,T);f.props=L;var V=f.context,ct=a.contextType;x=Ar,typeof ct=="object"&&ct!==null&&(x=Mn(ct));var vt=a.getDerivedStateFromProps;ct=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||V!==x)&&Bp(n,f,s,x),fa=!1;var nt=n.memoizedState;f.state=nt,Zs(n,s,f,c),js(),V=n.memoizedState,T||nt!==V||fa?(typeof vt=="function"&&(pu(n,a,vt,s),V=n.memoizedState),(L=fa||zp(n,a,L,s,nt,V,x))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=V),f.props=s,f.state=V,f.context=x,s=L):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Du(t,n),x=n.memoizedProps,ct=Za(a,x),f.props=ct,vt=n.pendingProps,nt=f.context,V=a.contextType,L=Ar,typeof V=="object"&&V!==null&&(L=Mn(V)),T=a.getDerivedStateFromProps,(V=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==vt||nt!==L)&&Bp(n,f,s,L),fa=!1,nt=n.memoizedState,f.state=nt,Zs(n,s,f,c),js();var lt=n.memoizedState;x!==vt||nt!==lt||fa||t!==null&&t.dependencies!==null&&fl(t.dependencies)?(typeof T=="function"&&(pu(n,a,T,s),lt=n.memoizedState),(ct=fa||zp(n,a,ct,s,nt,lt,L)||t!==null&&t.dependencies!==null&&fl(t.dependencies))?(V||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,L)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=L,s=ct):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ws(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Xa(n,t.child,null,c),n.child=Xa(n,null,a,c)):vn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Pi(t,n,c),t}function Jp(t,n,a,s){return Os(),n.flags|=256,vn(t,n,a,s),n.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function xu(t){return{baseLanes:t,cachePool:tp()}}function Su(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function $p(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Te){if(c?sa(n):oa(),Te){var T=_n,L;if(L=T){t:{for(L=T,T=xi;L.nodeType!==8;){if(!T){T=null;break t}if(L=fi(L.nextSibling),L===null){T=null;break t}}T=L}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ga!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912},L=ei(18,null,null,0),L.stateNode=T,L.return=n,n.child=L,wn=n,_n=null,L=!0):L=!1}L||ka(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?n.lanes=16:n.lanes=536870912,null;Li(n)}return T=s.children,s=s.fallback,c?(oa(),c=n.mode,T=yu({mode:"hidden",children:T},c),s=$a(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=xu(a),c.childLanes=Su(t,x,a),n.memoizedState=vu,s):(sa(n),Mu(n,T))}if(L=t.memoizedState,L!==null&&(T=L.dehydrated,T!==null)){if(f)n.flags&256?(sa(n),n.flags&=-257,n=Eu(t,n,a)):n.memoizedState!==null?(oa(),n.child=t.child,n.flags|=128,n=null):(oa(),c=s.fallback,T=n.mode,s=yu({mode:"visible",children:s.children},T),c=$a(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Xa(n,t.child,null,a),s=n.child,s.memoizedState=xu(a),s.childLanes=Su(t,x,a),n.memoizedState=vu,n=c);else if(sa(n),T.data==="$!"){if(x=T.nextSibling&&T.nextSibling.dataset,x)var V=x.dgst;x=V,s=Error(r(419)),s.stack="",s.digest=x,Ps({value:s,source:null,stack:null}),n=Eu(t,n,a)}else if(fn||qs(t,n,a,!1),x=(a&t.childLanes)!==0,fn||x){if(x=Be,x!==null){if(s=a&-a,(s&42)!==0)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==L.retryLane)throw L.retryLane=s,ra(t,s),Dn(x,t,s),Xp}T.data==="$?"||Qu(),n=Eu(t,n,a)}else T.data==="$?"?(n.flags|=128,n.child=t.child,n=M0.bind(null,t),T._reactRetry=n,n=null):(t=L.treeContext,_n=fi(T.nextSibling),wn=n,Te=!0,ci=null,xi=!1,t!==null&&(Kn[Qn++]=Ui,Kn[Qn++]=Ni,Kn[Qn++]=Ga,Ui=t.id,Ni=t.overflow,Ga=n),n=Mu(n,s.children),n.flags|=4096);return n}return c?(oa(),c=s.fallback,T=n.mode,L=t.child,V=L.sibling,s=_a(L,{mode:"hidden",children:s.children}),s.subtreeFlags=L.subtreeFlags&31457280,V!==null?c=_a(V,c):(c=$a(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=t.child.memoizedState,T===null?T=xu(a):(L=T.cachePool,L!==null?(V=on._currentValue,L=L.parent!==V?{parent:V,pool:V}:L):L=tp(),T={baseLanes:T.baseLanes|a,cachePool:L}),c.memoizedState=T,c.childLanes=Su(t,x,a),n.memoizedState=vu,s):(sa(n),a=t.child,t=a.sibling,a=_a(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Mu(t,n){return n=yu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yu(t,n){return bm(t,n,0,null)}function Eu(t,n,a){return Xa(n,t.child,null,a),t=Mu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function tm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Ru(t.return,n,a)}function Tu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function em(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(vn(t,n,s.children,a),s=sn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tm(t,a,n);else if(t.tag===19)tm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(zt(sn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&$o(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Tu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&$o(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Tu(n,!0,a,null,f);break;case"together":Tu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(qs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=_a(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=_a(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function bu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&fl(t)))}function o0(t,n,a){switch(n.tag){case 3:mn(n,n.stateNode.containerInfo),ua(n,on,t.memoizedState.cache),Os();break;case 27:case 5:fe(n);break;case 4:mn(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$p(t,n,a):(sa(n),t=Pi(t,n,a),t!==null?t.sibling:null);sa(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return em(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),zt(sn,sn.current),s)break;return null;case 22:case 23:return n.lanes=0,jp(t,n,a);case 24:ua(n,on,t.memoizedState.cache)}return Pi(t,n,a)}function nm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!bu(t,a)&&(n.flags&128)===0)return fn=!1,o0(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,Te&&(n.flags&1048576)!==0&&Hh(n,jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Iu(s)?(t=Za(s,t),n.tag=1,n=Qp(null,n,s,t,a)):(n.tag=0,n=_u(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===R){n.tag=11,n=Wp(null,n,s,t,a);break t}else if(c===g){n.tag=14,n=qp(null,n,s,t,a);break t}}throw n=K(s)||s,Error(r(306,n,""))}}return n;case 0:return _u(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Za(s,n.pendingProps),Qp(t,n,s,c,a);case 3:t:{if(mn(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,Du(t,n),Zs(n,f,null,a);var x=n.memoizedState;if(f=x.cache,ua(n,on,f),f!==c.cache&&Cu(n,[on],a,!0),js(),f=x.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Jp(t,n,f,a);break t}else if(f!==s){s=Zn(Error(r(424)),n),Ps(s),n=Jp(t,n,f,a);break t}else for(_n=fi(n.stateNode.containerInfo.firstChild),wn=n,Te=!0,ci=null,xi=!0,a=Zh(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Os(),f===s){n=Pi(t,n,a);break t}vn(t,n,f,a)}n=n.child}return n;case 26:return Ws(t,n),t===null?(a=rg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,t=n.pendingProps,s=Rl(ae.current).createElement(a),s[nn]=n,s[an]=t,xn(s,a,t),Q(s),n.stateNode=s):n.memoizedState=rg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return fe(n),t===null&&Te&&(s=n.stateNode=ng(n.type,n.pendingProps,ae.current),wn=n,xi=!0,_n=fi(s.firstChild)),s=n.pendingProps.children,t!==null||Te?vn(t,n,s,a):n.child=Xa(n,null,s,a),Ws(t,n),n.child;case 5:return t===null&&Te&&((c=s=_n)&&(s=B0(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,wn=n,_n=fi(s.firstChild),xi=!1,c=!0):c=!1),c||ka(n)),fe(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,df(c,f)?s=null:x!==null&&df(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=$c(t,n,t0,null,null,a),uo._currentValue=c),Ws(t,n),vn(t,n,s,a),n.child;case 6:return t===null&&Te&&((t=a=_n)&&(a=F0(a,n.pendingProps,xi),a!==null?(n.stateNode=a,wn=n,_n=null,t=!0):t=!1),t||ka(n)),null;case 13:return $p(t,n,a);case 4:return mn(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Xa(n,null,s,a):vn(t,n,s,a),n.child;case 11:return Wp(t,n,n.type,n.pendingProps,a);case 7:return vn(t,n,n.pendingProps,a),n.child;case 8:return vn(t,n,n.pendingProps.children,a),n.child;case 12:return vn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ua(n,n.type,s.value),vn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Qa(n),c=Mn(c),s=s(c),n.flags|=1,vn(t,n,s,a),n.child;case 14:return qp(t,n,n.type,n.pendingProps,a);case 15:return Yp(t,n,n.type,n.pendingProps,a);case 19:return em(t,n,a);case 22:return jp(t,n,a);case 24:return Qa(n),s=Mn(on),t===null?(c=Qc(),c===null&&(c=Be,f=Zc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},wu(n),ua(n,on,c)):((t.lanes&a)!==0&&(Du(t,n),Zs(n,null,null,a),js()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,on,s)):(s=f.cache,ua(n,on,s),s!==c.cache&&Cu(n,[on],a,!0))),vn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Au=Ct(null),Ka=null,zi=null;function ua(t,n,a){zt(Au,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=Au.current,Qt(Au)}function Ru(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Cu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var L=0;L<n.length;L++)if(T.context===n[L]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ru(f.return,a,t),s||(x=null);break t}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Ru(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function qs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=c.type;Hn(c.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(c===z.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(uo):t=[uo])}c=c.return}t!==null&&Cu(n,t,a,s),n.flags|=262144}function fl(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){Ka=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return im(Ka,t)}function dl(t,n){return Ka===null&&Qa(t),im(t,n)}function im(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(r(308));zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else zi=zi.next=n;return a}var fa=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ha(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ve&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=qo(t),Fh(t,null,a),n}return Wo(t,s,n,a),qo(t)}function Ys(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,vi(t,a)}}function Uu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Nu=!1;function js(){if(Nu){var t=Nr;if(t!==null)throw t}}function Zs(t,n,a,s){Nu=!1;var c=t.updateQueue;fa=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var L=T,V=L.next;L.next=null,x===null?f=V:x.next=V,x=L;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==x&&(T===null?ct.firstBaseUpdate=V:T.next=V,ct.lastBaseUpdate=L))}if(f!==null){var vt=c.baseState;x=0,ct=V=L=null,T=f;do{var nt=T.lane&-536870913,lt=nt!==T.lane;if(lt?(Se&nt)===nt:(s&nt)===nt){nt!==0&&nt===Ur&&(Nu=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var kt=t,ie=T;nt=n;var qe=a;switch(ie.tag){case 1:if(kt=ie.payload,typeof kt=="function"){vt=kt.call(qe,vt,nt);break t}vt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ie.payload,nt=typeof kt=="function"?kt.call(qe,vt,nt):kt,nt==null)break t;vt=A({},vt,nt);break t;case 2:fa=!0}}nt=T.callback,nt!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[nt]:lt.push(nt))}else lt={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?(V=ct=lt,L=vt):ct=ct.next=lt,x|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ct===null&&(L=vt),c.baseState=L,c.firstBaseUpdate=V,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),va|=x,t.lanes=x,t.memoizedState=vt}}function am(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function rm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)am(a[t],n)}function Ks(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(T){Pe(n,n.return,T)}}function pa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var L=a;try{T()}catch(V){Pe(c,L,V)}}}s=s.next}while(s!==f)}}catch(V){Pe(n,n.return,V)}}function sm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{rm(n,a)}catch(s){Pe(t,t.return,s)}}}function om(t,n,a){a.props=Za(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function Ja(t,n){try{var a=t.ref;if(a!==null){var s=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){Pe(t,n,f)}}function Gn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function lm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function cm(t,n,a){try{var s=t.stateNode;N0(s,t.type,a,n),s[an]=n}catch(c){Pe(t,t.return,c)}}function um(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Lu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||um(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ou(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Al));else if(s!==4&&s!==27&&(t=t.child,t!==null))for(Ou(t,n,a),t=t.sibling;t!==null;)Ou(t,n,a),t=t.sibling}function hl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&s!==27&&(t=t.child,t!==null))for(hl(t,n,a),t=t.sibling;t!==null;)hl(t,n,a),t=t.sibling}var Fi=!1,Xe=!1,Pu=!1,fm=typeof WeakSet=="function"?WeakSet:Set,dn=null,dm=!1;function l0(t,n){if(t=t.containerInfo,uf=Ll,t=wh(t),Bc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,L=-1,V=0,ct=0,vt=t,nt=null;e:for(;;){for(var lt;vt!==a||c!==0&&vt.nodeType!==3||(T=x+c),vt!==f||s!==0&&vt.nodeType!==3||(L=x+s),vt.nodeType===3&&(x+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)nt=vt,vt=lt;for(;;){if(vt===t)break e;if(nt===a&&++V===c&&(T=x),nt===f&&++ct===s&&(L=x),(lt=vt.nextSibling)!==null)break;vt=nt,nt=vt.parentNode}vt=lt}a=T===-1||L===-1?null:{start:T,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(ff={focusedElem:t,selectionRange:a},Ll=!1,dn=n;dn!==null;)if(n=dn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,dn=t;else for(;dn!==null;){switch(n=dn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var kt=Za(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(kt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ie){Pe(a,a.return,ie)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,dn=t;break}dn=n.return}return kt=dm,dm=!1,kt}function hm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Hi(t,a),s&4&&Ks(5,a);break;case 1:if(Hi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(T){Pe(a,a.return,T)}else{var c=Za(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Pe(a,a.return,T)}}s&64&&sm(a),s&512&&Ja(a,a.return);break;case 3:if(Hi(t,a),s&64&&(s=a.updateQueue,s!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{rm(s,t)}catch(T){Pe(a,a.return,T)}}break;case 26:Hi(t,a),s&512&&Ja(a,a.return);break;case 27:case 5:Hi(t,a),n===null&&s&4&&lm(a),s&512&&Ja(a,a.return);break;case 12:Hi(t,a);break;case 13:Hi(t,a),s&4&&gm(t,a);break;case 22:if(c=a.memoizedState!==null||Fi,!c){n=n!==null&&n.memoizedState!==null||Xe;var f=Fi,x=Xe;Fi=c,(Xe=n)&&!x?ma(t,a,(a.subtreeFlags&8772)!==0):Hi(t,a),Fi=f,Xe=x}s&512&&(a.memoizedProps.mode==="manual"?Ja(a,a.return):Gn(a,a.return));break;default:Hi(t,a)}}function pm(t){var n=t.alternate;n!==null&&(t.alternate=null,pm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Es(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Vn=!1;function Ii(t,n,a){for(a=a.child;a!==null;)mm(t,n,a),a=a.sibling}function mm(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Kt,a)}catch{}switch(a.tag){case 26:Xe||Gn(a,n),Ii(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Gn(a,n);var s=Qe,c=Vn;for(Qe=a.stateNode,Ii(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Es(a),Qe=s,Vn=c;break;case 5:Xe||Gn(a,n);case 6:c=Qe;var f=Vn;if(Qe=null,Ii(t,n,a),Qe=c,Vn=f,Qe!==null)if(Vn)try{t=Qe,s=a.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)}catch(x){Pe(a,n,x)}else try{Qe.removeChild(a.stateNode)}catch(x){Pe(a,n,x)}break;case 18:Qe!==null&&(Vn?(n=Qe,a=a.stateNode,n.nodeType===8?pf(n.parentNode,a):n.nodeType===1&&pf(n,a),mo(n)):pf(Qe,a.stateNode));break;case 4:s=Qe,c=Vn,Qe=a.stateNode.containerInfo,Vn=!0,Ii(t,n,a),Qe=s,Vn=c;break;case 0:case 11:case 14:case 15:Xe||pa(2,a,n),Xe||pa(4,a,n),Ii(t,n,a);break;case 1:Xe||(Gn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&om(a,n,s)),Ii(t,n,a);break;case 21:Ii(t,n,a);break;case 22:Xe||Gn(a,n),Xe=(s=Xe)||a.memoizedState!==null,Ii(t,n,a),Xe=s;break;default:Ii(t,n,a)}}function gm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{mo(t)}catch(a){Pe(n,n.return,a)}}function c0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new fm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new fm),n;default:throw Error(r(435,t.tag))}}function zu(t,n){var a=c0(t);n.forEach(function(s){var c=y0.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function $n(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:case 5:Qe=T.stateNode,Vn=!1;break t;case 3:Qe=T.stateNode.containerInfo,Vn=!0;break t;case 4:Qe=T.stateNode.containerInfo,Vn=!0;break t}T=T.return}if(Qe===null)throw Error(r(160));mm(f,x,c),Qe=null,Vn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)_m(n,t),n=n.sibling}var ui=null;function _m(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(n,t),ti(t),s&4&&(pa(3,t,t.return),Ks(3,t),pa(5,t,t.return));break;case 1:$n(n,t),ti(t),s&512&&(Xe||a===null||Gn(a,a.return)),s&64&&Fi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ui;if($n(n,t),ti(t),s&512&&(Xe||a===null||Gn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ba]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),xn(f,s,a),f[nn]=t,Q(f),s=f;break t;case"link":var x=lg("link","href",c).get(s+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=c.createElement(s),xn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=lg("meta","content",c).get(s+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=c.createElement(s),xn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[nn]=t,Q(f),s=f}t.stateNode=s}else cg(c,t.type,t.stateNode);else t.stateNode=og(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?cg(c,t.type,t.stateNode):og(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&cm(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var L=c.firstChild;L;){var V=L.nextSibling,ct=L.nodeName;L[Ba]||ct==="HEAD"||ct==="BODY"||ct==="SCRIPT"||ct==="STYLE"||ct==="LINK"&&L.rel.toLowerCase()==="stylesheet"||c.removeChild(L),L=V}for(var vt=t.type,nt=c.attributes;nt.length;)c.removeAttributeNode(nt[0]);xn(c,vt,f),c[nn]=t,c[an]=f}catch(kt){Pe(t,t.return,kt)}}case 5:if($n(n,t),ti(t),s&512&&(Xe||a===null||Gn(a,a.return)),t.flags&32){c=t.stateNode;try{On(c,"")}catch(kt){Pe(t,t.return,kt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,cm(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Pu=!0);break;case 6:if($n(n,t),ti(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(kt){Pe(t,t.return,kt)}}break;case 3:if(Dl=null,c=ui,ui=Cl(n.containerInfo),$n(n,t),ui=c,ti(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{mo(n.containerInfo)}catch(kt){Pe(t,t.return,kt)}Pu&&(Pu=!1,vm(t));break;case 4:s=ui,ui=Cl(t.stateNode.containerInfo),$n(n,t),ti(t),ui=s;break;case 12:$n(n,t),ti(t);break;case 13:$n(n,t),ti(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wu=ft()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zu(t,s)));break;case 22:if(s&512&&(Xe||a===null||Gn(a,a.return)),L=t.memoizedState!==null,V=a!==null&&a.memoizedState!==null,ct=Fi,vt=Xe,Fi=ct||L,Xe=vt||V,$n(n,t),Xe=vt,Fi=ct,ti(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=L?n._visibility&-2:n._visibility|1,L&&(n=Fi||Xe,a===null||V||n||zr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(c=V.stateNode,L)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{x=V.stateNode,T=V.memoizedProps.style;var lt=T!=null&&T.hasOwnProperty("display")?T.display:null;x.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(kt){Pe(V,V.return,kt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=L?"":V.memoizedProps}catch(kt){Pe(V,V.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,zu(t,a))));break;case 19:$n(n,t),ti(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zu(t,s)));break;case 21:break;default:$n(n,t),ti(t)}}function ti(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(um(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Lu(t);hl(t,f,c);break;case 5:var x=s.stateNode;s.flags&32&&(On(x,""),s.flags&=-33);var T=Lu(t);hl(t,T,x);break;case 3:case 4:var L=s.stateNode.containerInfo,V=Lu(t);Ou(t,V,L);break;default:throw Error(r(161))}}}catch(ct){Pe(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function vm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;vm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Hi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hm(t,n.alternate,n),n=n.sibling}function zr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),zr(n);break;case 1:Gn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&om(n,n.return,a),zr(n);break;case 26:case 27:case 5:Gn(n,n.return),zr(n);break;case 22:Gn(n,n.return),n.memoizedState===null&&zr(n);break;default:zr(n)}t=t.sibling}}function ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ma(c,f,a),Ks(4,f);break;case 1:if(ma(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){Pe(s,s.return,V)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var L=c.shared.hiddenCallbacks;if(L!==null)for(c.shared.hiddenCallbacks=null,c=0;c<L.length;c++)am(L[c],T)}catch(V){Pe(s,s.return,V)}}a&&x&64&&sm(f),Ja(f,f.return);break;case 26:case 27:case 5:ma(c,f,a),a&&s===null&&x&4&&lm(f),Ja(f,f.return);break;case 12:ma(c,f,a);break;case 13:ma(c,f,a),a&&x&4&&gm(c,f);break;case 22:f.memoizedState===null&&ma(c,f,a),Ja(f,f.return);break;default:ma(c,f,a)}n=n.sibling}}function Bu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Hs(a))}function Fu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Hs(t))}function ga(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xm(t,n,a,s),n=n.sibling}function xm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ga(t,n,a,s),c&2048&&Ks(9,n);break;case 3:ga(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Hs(t)));break;case 12:if(c&2048){ga(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(L){Pe(n,n.return,L)}}else ga(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?ga(t,n,a,s):Qs(t,n):f._visibility&4?ga(t,n,a,s):(f._visibility|=4,Br(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Bu(n.alternate,n);break;case 24:ga(t,n,a,s),c&2048&&Fu(n.alternate,n);break;default:ga(t,n,a,s)}}function Br(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,T=a,L=s,V=x.flags;switch(x.tag){case 0:case 11:case 15:Br(f,x,T,L,c),Ks(8,x);break;case 23:break;case 22:var ct=x.stateNode;x.memoizedState!==null?ct._visibility&4?Br(f,x,T,L,c):Qs(f,x):(ct._visibility|=4,Br(f,x,T,L,c)),c&&V&2048&&Bu(x.alternate,x);break;case 24:Br(f,x,T,L,c),c&&V&2048&&Fu(x.alternate,x);break;default:Br(f,x,T,L,c)}n=n.sibling}}function Qs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Qs(a,s),c&2048&&Bu(s.alternate,s);break;case 24:Qs(a,s),c&2048&&Fu(s.alternate,s);break;default:Qs(a,s)}n=n.sibling}}var Js=8192;function Fr(t){if(t.subtreeFlags&Js)for(t=t.child;t!==null;)Sm(t),t=t.sibling}function Sm(t){switch(t.tag){case 26:Fr(t),t.flags&Js&&t.memoizedState!==null&&Q0(ui,t.memoizedState,t.memoizedProps);break;case 5:Fr(t);break;case 3:case 4:var n=ui;ui=Cl(t.stateNode.containerInfo),Fr(t),ui=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Js,Js=16777216,Fr(t),Js=n):Fr(t));break;default:Fr(t)}}function Mm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $s(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Em(s,t)}Mm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ym(t),t=t.sibling}function ym(t){switch(t.tag){case 0:case 11:case 15:$s(t),t.flags&2048&&pa(9,t,t.return);break;case 3:$s(t);break;case 12:$s(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,pl(t)):$s(t);break;default:$s(t)}}function pl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Em(s,t)}Mm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:pa(8,n,n.return),pl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,pl(n));break;default:pl(n)}t=t.sibling}}function Em(t,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Hs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,dn=s;else t:for(a=t;dn!==null;){s=dn;var c=s.sibling,f=s.return;if(pm(s),s===a){dn=null;break t}if(c!==null){c.return=f,dn=c;break t}dn=f}}}function u0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,s){return new u0(t,n,a,s)}function Iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _a(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Tm(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ml(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")Iu(t)&&(x=1);else if(typeof t=="string")x=Z0(t,a,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return $a(a.children,c,f,n);case m:x=8,c|=24;break;case _:return t=ei(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case w:return t=ei(13,a,n,c),t.elementType=w,t.lanes=f,t;case M:return t=ei(19,a,n,c),t.elementType=M,t.lanes=f,t;case O:return bm(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case y:x=10;break t;case S:x=9;break t;case R:x=11;break t;case g:x=14;break t;case P:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ei(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function $a(t,n,a,s){return t=ei(7,t,s,n),t.lanes=a,t}function bm(t,n,a,s){t=ei(22,t,s,n),t.elementType=O,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if((c._pendingVisibility&2)===0){var x=ra(f,2);x!==null&&(c._pendingVisibility|=2,Dn(x,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if((c._pendingVisibility&2)!==0){var x=ra(f,2);x!==null&&(c._pendingVisibility&=-3,Dn(x,f,2))}}};return t.stateNode=c,t}function Hu(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function Gu(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Gi(t){t.flags|=4}function Am(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ug(n)){if(n=Jn.current,n!==null&&((Se&4194176)===Se?Si!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Si))throw Bs=qc,kh;t.flags|=8192}}function gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,Hr|=n)}function to(t,n){if(!Te)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ge(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function f0(t,n,a){var s=n.pendingProps;switch(Xc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(on),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ls(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ci!==null&&(Zu(ci),ci=null))),Ge(n),null;case 26:return a=n.memoizedState,t===null?(Gi(n),a!==null?(Ge(n),Am(n,a)):(Ge(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Gi(n),Ge(n),Am(n,a)):(Ge(n),n.flags&=-16777217):(t.memoizedProps!==s&&Gi(n),Ge(n),n.flags&=-16777217),null;case 27:Xt(n),a=ae.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}t=Me.current,Ls(n)?Gh(n):(t=ng(c,s,a),n.stateNode=t,Gi(n))}return Ge(n),null;case 5:if(Xt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}if(t=Me.current,Ls(n))Gh(n);else{switch(c=Rl(ae.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[nn]=n,t[an]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(xn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Gi(n)}}return Ge(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,Ls(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=wn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[nn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Km(t.nodeValue,a)),t||ka(n)}else t=Rl(t).createTextNode(s),t[nn]=n,n.stateNode=t}return Ge(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ls(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[nn]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ge(n),c=!1}else ci!==null&&(Zu(ci),ci=null),c=!0;if(!c)return n.flags&256?(Li(n),n):(Li(n),null)}if(Li(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),gl(n,n.updateQueue),Ge(n),null;case 4:return le(),t===null&&of(n.stateNode.containerInfo),Ge(n),null;case 10:return Bi(n.type),Ge(n),null;case 19:if(Qt(sn),c=n.memoizedState,c===null)return Ge(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)to(c,!1);else{if(We!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=$o(t),f!==null){for(n.flags|=128,to(c,!1),t=f.updateQueue,n.updateQueue=t,gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Tm(a,t),a=a.sibling;return zt(sn,sn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ft()>_l&&(n.flags|=128,s=!0,to(c,!1),n.lanes=4194304)}else{if(!s)if(t=$o(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,gl(n,t),to(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Te)return Ge(n),null}else 2*ft()-c.renderingStartTime>_l&&a!==536870912&&(n.flags|=128,s=!0,to(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ft(),n.sibling=null,t=sn.current,zt(sn,s?t&1|2:t&1),n):(Ge(n),null);case 22:case 23:return Li(n),jc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),a=n.updateQueue,a!==null&&gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Qt(Wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(on),Ge(n),null;case 25:return null}throw Error(r(156,n.tag))}function d0(t,n){switch(Xc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(on),le(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 13:if(Li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Qt(sn),null;case 4:return le(),null;case 10:return Bi(n.type),null;case 22:case 23:return Li(n),jc(),t!==null&&Qt(Wa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(on),null;case 25:return null;default:return null}}function Rm(t,n){switch(Xc(n),n.tag){case 3:Bi(on),le();break;case 26:case 27:case 5:Xt(n);break;case 4:le();break;case 13:Li(n);break;case 19:Qt(sn);break;case 10:Bi(n.type);break;case 22:case 23:Li(n),jc(),t!==null&&Qt(Wa);break;case 24:Bi(on)}}var h0={getCacheForType:function(t){var n=Mn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},p0=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Be=null,he=null,Se=0,Fe=0,kn=null,Vi=!1,Ir=!1,Vu=!1,ki=0,We=0,va=0,tr=0,ku=0,ni=0,Hr=0,eo=null,yi=null,Xu=!1,Wu=0,_l=1/0,vl=null,xa=null,xl=!1,er=null,no=0,qu=0,Yu=null,io=0,ju=null;function Xn(){if((Ve&2)!==0&&Se!==0)return Se&-Se;if(C.T!==null){var t=Ur;return t!==0?t:nf()}return ys()}function Cm(){ni===0&&(ni=(Se&536870912)===0||Te?en():536870912);var t=Jn.current;return t!==null&&(t.flags|=32),ni}function Dn(t,n,a){(t===Be&&Fe===2||t.cancelPendingCommit!==null)&&(Gr(t,0),Xi(t,Se,ni,!1)),An(t,a),((Ve&2)===0||t!==Be)&&(t===Be&&((Ve&2)===0&&(tr|=a),We===4&&Xi(t,Se,ni,!1)),Ei(t))}function wm(t,n,a){if((Ve&6)!==0)throw Error(r(327));var s=!a&&(n&60)===0&&(n&t.expiredLanes)===0||te(t,n),c=s?_0(t,n):Ju(t,n,!0),f=s;do{if(c===0){Ir&&!s&&Xi(t,n,0,!1);break}else if(c===6)Xi(t,n,0,!Vi);else{if(a=t.current.alternate,f&&!m0(a)){c=Ju(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;c=eo;var L=T.current.memoizedState.isDehydrated;if(L&&(Gr(T,x).flags|=256),x=Ju(T,x,!1),x!==2){if(Vu&&!L){T.errorRecoveryDisabledLanes|=f,tr|=f,c=4;break t}f=yi,yi=c,f!==null&&Zu(f)}c=x}if(f=!1,c!==2)continue}}if(c===1){Gr(t,0),Xi(t,n,0,!0);break}t:{switch(s=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Xi(s,n,ni,!Vi);break t}break;case 2:yi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=Wu+300-ft(),10<f)){if(Xi(s,n,ni,!Vi),Ut(s,0)!==0)break t;s.timeoutHandle=$m(Dm.bind(null,s,a,yi,vl,Xu,n,ni,tr,Hr,Vi,2,-0,0),f);break t}Dm(s,a,yi,vl,Xu,n,ni,tr,Hr,Vi,0,-0,0)}}break}while(!0);Ei(t)}function Zu(t){yi===null?yi=t:yi.push.apply(yi,t)}function Dm(t,n,a,s,c,f,x,T,L,V,ct,vt,nt){var lt=n.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(co={stylesheets:null,count:0,unsuspend:K0},Sm(n),n=J0(),n!==null)){t.cancelPendingCommit=n(Bm.bind(null,t,a,s,c,x,T,L,1,vt,nt)),Xi(t,f,x,!V);return}Bm(t,a,s,c,x,T,L,ct,vt,nt)}function m0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Hn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xi(t,n,a,s){n&=~ku,n&=~tr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-jt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Ms(t,a,n)}function Sl(){return(Ve&6)===0?(ao(0),!1):!0}function Ku(){if(he!==null){if(Fe===0)var t=he.return;else t=he,zi=Ka=null,nu(t),wr=null,Fs=0,t=he;for(;t!==null;)Rm(t.alternate,t),t=t.return;he=null}}function Gr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,O0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ku(),Be=t,he=a=_a(t.current,null),Se=n,Fe=0,kn=null,Vi=!1,Ir=te(t,n),Vu=!1,Hr=ni=ku=tr=va=We=0,yi=eo=null,Xu=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-jt(s),f=1<<c;n|=t[c],s&=~f}return ki=n,Xo(),a}function Um(t,n){ue=null,C.H=Mi,n===zs?(n=qh(),Fe=3):n===kh?(n=qh(),Fe=4):Fe=n===Xp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,he===null&&(We=1,ul(t,Zn(n,t.current)))}function Nm(){var t=C.H;return C.H=Mi,t===null?Mi:t}function Lm(){var t=C.A;return C.A=h0,t}function Qu(){We=4,Vi||(Se&4194176)!==Se&&Jn.current!==null||(Ir=!0),(va&134217727)===0&&(tr&134217727)===0||Be===null||Xi(Be,Se,ni,!1)}function Ju(t,n,a){var s=Ve;Ve|=2;var c=Nm(),f=Lm();(Be!==t||Se!==n)&&(vl=null,Gr(t,n)),n=!1;var x=We;t:do try{if(Fe!==0&&he!==null){var T=he,L=kn;switch(Fe){case 8:Ku(),x=6;break t;case 3:case 2:case 6:Jn.current===null&&(n=!0);var V=Fe;if(Fe=0,kn=null,Vr(t,T,L,V),a&&Ir){x=0;break t}break;default:V=Fe,Fe=0,kn=null,Vr(t,T,L,V)}}g0(),x=We;break}catch(ct){Um(t,ct)}while(!0);return n&&t.shellSuspendCounter++,zi=Ka=null,Ve=s,C.H=c,C.A=f,he===null&&(Be=null,Se=0,Xo()),x}function g0(){for(;he!==null;)Om(he)}function _0(t,n){var a=Ve;Ve|=2;var s=Nm(),c=Lm();Be!==t||Se!==n?(vl=null,_l=ft()+500,Gr(t,n)):Ir=te(t,n);t:do try{if(Fe!==0&&he!==null){n=he;var f=kn;e:switch(Fe){case 1:Fe=0,kn=null,Vr(t,n,f,1);break;case 2:if(Xh(f)){Fe=0,kn=null,Pm(n);break}n=function(){Fe===2&&Be===t&&(Fe=7),Ei(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Xh(f)?(Fe=0,kn=null,Pm(n)):(Fe=0,kn=null,Vr(t,n,f,7));break;case 5:var x=null;switch(he.tag){case 26:x=he.memoizedState;case 5:case 27:var T=he;if(!x||ug(x)){Fe=0,kn=null;var L=T.sibling;if(L!==null)he=L;else{var V=T.return;V!==null?(he=V,Ml(V)):he=null}break e}}Fe=0,kn=null,Vr(t,n,f,5);break;case 6:Fe=0,kn=null,Vr(t,n,f,6);break;case 8:Ku(),We=6;break t;default:throw Error(r(462))}}v0();break}catch(ct){Um(t,ct)}while(!0);return zi=Ka=null,C.H=s,C.A=c,Ve=a,he!==null?0:(Be=null,Se=0,Xo(),We)}function v0(){for(;he!==null&&!E();)Om(he)}function Om(t){var n=nm(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?Ml(t):he=n}function Pm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Kp(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Kp(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:nu(n);default:Rm(a,n),n=he=Tm(n,ki),n=nm(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?Ml(t):he=n}function Vr(t,n,a,s){zi=Ka=null,nu(n),wr=null,Fs=0;var c=n.return;try{if(s0(t,c,n,a,Se)){We=1,ul(t,Zn(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;We=1,ul(t,Zn(a,t.current)),he=null;return}n.flags&32768?(Te||s===1?t=!0:Ir||(Se&536870912)!==0?t=!1:(Vi=t=!0,(s===2||s===3||s===6)&&(s=Jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),zm(n,t)):Ml(n)}function Ml(t){var n=t;do{if((n.flags&32768)!==0){zm(n,Vi);return}t=n.return;var a=f0(n.alternate,n,ki);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);We===0&&(We=5)}function zm(t,n){do{var a=d0(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);We=6,he=null}function Bm(t,n,a,s,c,f,x,T,L,V){var ct=C.T,vt=q.p;try{q.p=2,C.T=null,x0(t,n,a,s,vt,c,f,x,T,L,V)}finally{C.T=ct,q.p=vt}}function x0(t,n,a,s,c,f,x,T){do kr();while(er!==null);if((Ve&6)!==0)throw Error(r(327));var L=t.finishedWork;if(s=t.finishedLanes,L===null)return null;if(t.finishedWork=null,t.finishedLanes=0,L===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var V=L.lanes|L.childLanes;if(V|=Gc,Oo(t,s,V,f,x,T),t===Be&&(he=Be=null,Se=0),(L.subtreeFlags&10256)===0&&(L.flags&10256)===0||xl||(xl=!0,qu=V,Yu=a,E0(Dt,function(){return kr(),null})),a=(L.flags&15990)!==0,(L.subtreeFlags&15990)!==0||a?(a=C.T,C.T=null,f=q.p,q.p=2,x=Ve,Ve|=4,l0(t,L),_m(L,t),kv(ff,t.containerInfo),Ll=!!uf,ff=uf=null,t.current=L,hm(t,L.alternate,L),tt(),Ve=x,q.p=f,C.T=a):t.current=L,xl?(xl=!1,er=t,no=s):Fm(t,V),V=t.pendingLanes,V===0&&(xa=null),It(L.stateNode),Ei(t),n!==null)for(c=t.onRecoverableError,L=0;L<n.length;L++)V=n[L],c(V.value,{componentStack:V.stack});return(no&3)!==0&&kr(),V=t.pendingLanes,(s&4194218)!==0&&(V&42)!==0?t===ju?io++:(io=0,ju=t):io=0,ao(0),null}function Fm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Hs(n)))}function kr(){if(er!==null){var t=er,n=qu;qu=0;var a=_r(no),s=C.T,c=q.p;try{if(q.p=32>a?32:a,C.T=null,er===null)var f=!1;else{a=Yu,Yu=null;var x=er,T=no;if(er=null,no=0,(Ve&6)!==0)throw Error(r(331));var L=Ve;if(Ve|=4,ym(x.current),xm(x,x.current,T,a),Ve=L,ao(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Kt,x)}catch{}f=!0}return f}finally{q.p=c,C.T=s,Fm(t,n)}}return!1}function Im(t,n,a){n=Zn(a,n),n=gu(t.stateNode,n,2),t=ha(t,n,2),t!==null&&(An(t,2),Ei(t))}function Pe(t,n,a){if(t.tag===3)Im(t,t,a);else for(;n!==null;){if(n.tag===3){Im(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){t=Zn(a,t),a=Vp(2),s=ha(n,a,2),s!==null&&(kp(a,s,n,t),An(s,2),Ei(s));break}}n=n.return}}function $u(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new p0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Vu=!0,c.add(a),t=S0.bind(null,t,n,a),n.then(t,t))}function S0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Be===t&&(Se&a)===a&&(We===4||We===3&&(Se&62914560)===Se&&300>ft()-Wu?(Ve&2)===0&&Gr(t,0):ku|=a,Hr===Se&&(Hr=0)),Ei(t)}function Hm(t,n){n===0&&(n=ye()),t=ra(t,n),t!==null&&(An(t,n),Ei(t))}function M0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Hm(t,a)}function y0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Hm(t,a)}function E0(t,n){return Wt(t,n)}var yl=null,Xr=null,tf=!1,El=!1,ef=!1,nr=0;function Ei(t){t!==Xr&&t.next===null&&(Xr===null?yl=Xr=t:Xr=Xr.next=t),El=!0,tf||(tf=!0,b0(T0))}function ao(t,n){if(!ef&&El){ef=!0;do for(var a=!1,s=yl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-jt(42|t)+1)-1,f&=c&~(x&~T),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,km(s,f))}else f=Se,f=Ut(s,s===Be?f:0),(f&3)===0||te(s,f)||(a=!0,km(s,f));s=s.next}while(a);ef=!1}}function T0(){El=tf=!1;var t=0;nr!==0&&(L0()&&(t=nr),nr=0);for(var n=ft(),a=null,s=yl;s!==null;){var c=s.next,f=Gm(s,n);f===0?(s.next=null,a===null?yl=c:a.next=c,c===null&&(Xr=a)):(a=s,(t!==0||(f&3)!==0)&&(El=!0)),s=c}ao(t)}function Gm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-jt(f),T=1<<x,L=c[x];L===-1?((T&a)===0||(T&s)!==0)&&(c[x]=He(T,n)):L<=n&&(t.expiredLanes|=T),f&=~T}if(n=Be,a=Se,a=Ut(t,t===n?a:0),s=t.callbackNode,a===0||t===n&&Fe===2||t.cancelPendingCommit!==null)return s!==null&&s!==null&&U(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&U(s),_r(a)){case 2:case 8:a=Gt;break;case 32:a=Dt;break;case 268435456:a=pe;break;default:a=Dt}return s=Vm.bind(null,t),a=Wt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&U(s),t.callbackPriority=2,t.callbackNode=null,2}function Vm(t,n){var a=t.callbackNode;if(kr()&&t.callbackNode!==a)return null;var s=Se;return s=Ut(t,t===Be?s:0),s===0?null:(wm(t,s,n),Gm(t,ft()),t.callbackNode!=null&&t.callbackNode===a?Vm.bind(null,t):null)}function km(t,n){if(kr())return null;wm(t,n,!0)}function b0(t){P0(function(){(Ve&6)!==0?Wt(dt,t):t()})}function nf(){return nr===0&&(nr=en()),nr}function Xm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bo(""+t)}function Wm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function A0(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Xm((c[an]||null).action),x=s.submitter;x&&(n=(n=x[an]||null)?Xm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Go("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(nr!==0){var L=x?Wm(c,x):new FormData(c);fu(a,{pending:!0,data:L,method:c.method,action:f},null,L)}}else typeof f=="function"&&(T.preventDefault(),L=x?Wm(c,x):new FormData(c),fu(a,{pending:!0,data:L,method:c.method,action:f},f,L))},currentTarget:c}]})}}for(var af=0;af<Bh.length;af++){var rf=Bh[af],R0=rf.toLowerCase(),C0=rf[0].toUpperCase()+rf.slice(1);li(R0,"on"+C0)}li(Nh,"onAnimationEnd"),li(Lh,"onAnimationIteration"),li(Oh,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(Wv,"onTransitionRun"),li(qv,"onTransitionStart"),li(Yv,"onTransitionCancel"),li(Ph,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro));function qm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],L=T.instance,V=T.currentTarget;if(T=T.listener,L!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=V;try{f(c)}catch(ct){cl(ct)}c.currentTarget=null,f=L}else for(x=0;x<s.length;x++){if(T=s[x],L=T.instance,V=T.currentTarget,T=T.listener,L!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=V;try{f(c)}catch(ct){cl(ct)}c.currentTarget=null,f=L}}}}function xe(t,n){var a=n[vr];a===void 0&&(a=n[vr]=new Set);var s=t+"__bubble";a.has(s)||(Ym(n,t,2,!1),a.add(s))}function sf(t,n,a){var s=0;n&&(s|=4),Ym(a,t,s,n)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function of(t){if(!t[Tl]){t[Tl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(w0.has(a)||sf(a,!1,t),sf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Tl]||(n[Tl]=!0,sf("selectionchange",!1,n))}}function Ym(t,n,a,s){switch(gg(n)){case 2:var c=ex;break;case 8:c=nx;break;default:c=Sf}a=c.bind(null,n,a,t),c=void 0,!Cc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function lf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===c||T.nodeType===8&&T.parentNode===c)break;if(x===4)for(x=s.return;x!==null;){var L=x.tag;if((L===3||L===4)&&(L=x.stateNode.containerInfo,L===c||L.nodeType===8&&L.parentNode===c))return;x=x.return}for(;T!==null;){if(x=Di(T),x===null)return;if(L=x.tag,L===5||L===6||L===26||L===27){s=f=x;continue t}T=T.parentNode}}s=s.return}lh(function(){var V=f,ct=Ac(a),vt=[];t:{var nt=zh.get(t);if(nt!==void 0){var lt=Go,kt=t;switch(t){case"keypress":if(Io(a)===0)break t;case"keydown":case"keyup":lt=yv;break;case"focusin":kt="focus",lt=Nc;break;case"focusout":kt="blur",lt=Nc;break;case"beforeblur":case"afterblur":lt=Nc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=bv;break;case Nh:case Lh:case Oh:lt=hv;break;case Ph:lt=Rv;break;case"scroll":case"scrollend":lt=lv;break;case"wheel":lt=wv;break;case"copy":case"cut":case"paste":lt=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=hh;break;case"toggle":case"beforetoggle":lt=Uv}var ie=(n&4)!==0,qe=!ie&&(t==="scroll"||t==="scrollend"),Z=ie?nt!==null?nt+"Capture":null:nt;ie=[];for(var G=V,J;G!==null;){var mt=G;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||Z===null||(mt=Ts(G,Z),mt!=null&&ie.push(so(G,mt,J))),qe)break;G=G.return}0<ie.length&&(nt=new lt(nt,kt,null,a,ct),vt.push({event:nt,listeners:ie}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",nt&&a!==bc&&(kt=a.relatedTarget||a.fromElement)&&(Di(kt)||kt[wi]))break t;if((lt||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,lt?(kt=a.relatedTarget||a.toElement,lt=V,kt=kt?Di(kt):null,kt!==null&&(qe=j(kt),ie=kt.tag,kt!==qe||ie!==5&&ie!==27&&ie!==6)&&(kt=null)):(lt=null,kt=V),lt!==kt)){if(ie=fh,mt="onMouseLeave",Z="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(ie=hh,mt="onPointerLeave",Z="onPointerEnter",G="pointer"),qe=lt==null?nt:W(lt),J=kt==null?nt:W(kt),nt=new ie(mt,G+"leave",lt,a,ct),nt.target=qe,nt.relatedTarget=J,mt=null,Di(ct)===V&&(ie=new ie(Z,G+"enter",kt,a,ct),ie.target=J,ie.relatedTarget=qe,mt=ie),qe=mt,lt&&kt)e:{for(ie=lt,Z=kt,G=0,J=ie;J;J=Wr(J))G++;for(J=0,mt=Z;mt;mt=Wr(mt))J++;for(;0<G-J;)ie=Wr(ie),G--;for(;0<J-G;)Z=Wr(Z),J--;for(;G--;){if(ie===Z||Z!==null&&ie===Z.alternate)break e;ie=Wr(ie),Z=Wr(Z)}ie=null}else ie=null;lt!==null&&jm(vt,nt,lt,ie,!1),kt!==null&&qe!==null&&jm(vt,qe,kt,ie,!0)}}t:{if(nt=V?W(V):window,lt=nt.nodeName&&nt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&nt.type==="file")var Ht=Mh;else if(xh(nt))if(yh)Ht=Gv;else{Ht=Iv;var de=Fv}else lt=nt.nodeName,!lt||lt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?V&&Tc(V.elementType)&&(Ht=Mh):Ht=Hv;if(Ht&&(Ht=Ht(t,V))){Sh(vt,Ht,a,ct);break t}de&&de(t,nt,V),t==="focusout"&&V&&nt.type==="number"&&V.memoizedProps.value!=null&&Sn(nt,"number",nt.value)}switch(de=V?W(V):window,t){case"focusin":(xh(de)||de.contentEditable==="true")&&(Er=de,Fc=V,Ns=null);break;case"focusout":Ns=Fc=Er=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,Dh(vt,a,ct);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":Dh(vt,a,ct)}var qt;if(Oc)t:{switch(t){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else yr?_h(t,a)&&(Jt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(ph&&a.locale!=="ko"&&(yr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&yr&&(qt=ch()):(aa=ct,wc="value"in aa?aa.value:aa.textContent,yr=!0)),de=bl(V,Jt),0<de.length&&(Jt=new dh(Jt,t,null,a,ct),vt.push({event:Jt,listeners:de}),qt?Jt.data=qt:(qt=vh(a),qt!==null&&(Jt.data=qt)))),(qt=Lv?Ov(t,a):Pv(t,a))&&(Jt=bl(V,"onBeforeInput"),0<Jt.length&&(de=new dh("onBeforeInput","beforeinput",null,a,ct),vt.push({event:de,listeners:Jt}),de.data=qt)),A0(vt,t,V,a,ct)}qm(vt,n)})}function so(t,n,a){return{instance:t,listener:n,currentTarget:a}}function bl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ts(t,a),c!=null&&s.unshift(so(t,c,f)),c=Ts(t,n),c!=null&&s.push(so(t,c,f))),t=t.return}return s}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function jm(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var T=a,L=T.alternate,V=T.stateNode;if(T=T.tag,L!==null&&L===s)break;T!==5&&T!==26&&T!==27||V===null||(L=V,c?(V=Ts(a,f),V!=null&&x.unshift(so(a,V,L))):c||(V=Ts(a,f),V!=null&&x.push(so(a,V,L)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var D0=/\r\n?/g,U0=/\u0000|\uFFFD/g;function Zm(t){return(typeof t=="string"?t:""+t).replace(D0,`
`).replace(U0,"")}function Km(t,n){return n=Zm(n),Zm(t)===n}function Al(){}function Ne(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||On(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&On(t,""+s);break;case"className":Ie(t,"class",s);break;case"tabIndex":Ie(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,s);break;case"style":sh(t,s,f);break;case"data":if(n!=="object"){Ie(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(t,n,"name",c.name,c,null),Ne(t,n,"formEncType",c.formEncType,c,null),Ne(t,n,"formMethod",c.formMethod,c,null),Ne(t,n,"formTarget",c.formTarget,c,null)):(Ne(t,n,"encType",c.encType,c,null),Ne(t,n,"method",c.method,c,null),Ne(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Al);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Bo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),_e(t,"popover",s);break;case"xlinkActuate":Ee(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ee(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ee(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ee(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ee(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ee(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":_e(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sv.get(a)||a,_e(t,a,s))}}function cf(t,n,a,s,c,f){switch(a){case"style":sh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?On(t,s):(typeof s=="number"||typeof s=="bigint")&&On(t,""+s);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Al);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[an]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):_e(t,a,s)}}}function xn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,f,x,a,null)}}c&&Ne(t,n,"srcSet",a.srcSet,a,null),s&&Ne(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var T=f=x=c=null,L=null,V=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":c=ct;break;case"type":x=ct;break;case"checked":L=ct;break;case"defaultChecked":V=ct;break;case"value":f=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ne(t,n,s,ct,a,null)}}Cn(t,f,T,L,V,x,c,!1),ve(t);return;case"select":xe("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:Ne(t,n,c,T,a,null)}n=f,a=x,t.multiple=!!s,n!=null?ke(t,!!s,n,!1):a!=null&&ke(t,!!s,a,!0);return;case"textarea":xe("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ne(t,n,x,T,a,null)}xr(t,s,c,f),ve(t);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(s=a[L],s!=null))switch(L){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(t,n,L,s,a,null)}return;case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<ro.length;s++)xe(ro[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(s=a[V],s!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,V,s,a,null)}return;default:if(Tc(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&cf(t,n,ct,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ne(t,n,T,s,a,null))}function N0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,L=null,V=null,ct=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":L=vt;default:s.hasOwnProperty(lt)||Ne(t,n,lt,null,s,vt)}}for(var nt in s){var lt=s[nt];if(vt=a[nt],s.hasOwnProperty(nt)&&(lt!=null||vt!=null))switch(nt){case"type":f=lt;break;case"name":c=lt;break;case"checked":V=lt;break;case"defaultChecked":ct=lt;break;case"value":x=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==vt&&Ne(t,n,nt,lt,s,vt)}}De(t,x,T,L,V,ct,f,c);return;case"select":lt=x=T=nt=null;for(f in a)if(L=a[f],a.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":lt=L;default:s.hasOwnProperty(f)||Ne(t,n,f,null,s,L)}for(c in s)if(f=s[c],L=a[c],s.hasOwnProperty(c)&&(f!=null||L!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==L&&Ne(t,n,c,f,s,L)}n=T,a=x,s=lt,nt!=null?ke(t,!!a,nt,!1):!!s!=!!a&&(n!=null?ke(t,!!a,n,!0):ke(t,!!a,a?[]:"",!1));return;case"textarea":lt=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ne(t,n,T,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":nt=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ne(t,n,x,c,s,f)}gn(t,nt,lt);return;case"option":for(var kt in a)if(nt=a[kt],a.hasOwnProperty(kt)&&nt!=null&&!s.hasOwnProperty(kt))switch(kt){case"selected":t.selected=!1;break;default:Ne(t,n,kt,null,s,nt)}for(L in s)if(nt=s[L],lt=a[L],s.hasOwnProperty(L)&&nt!==lt&&(nt!=null||lt!=null))switch(L){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ne(t,n,L,nt,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)nt=a[ie],a.hasOwnProperty(ie)&&nt!=null&&!s.hasOwnProperty(ie)&&Ne(t,n,ie,null,s,nt);for(V in s)if(nt=s[V],lt=a[V],s.hasOwnProperty(V)&&nt!==lt&&(nt!=null||lt!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ne(t,n,V,nt,s,lt)}return;default:if(Tc(n)){for(var qe in a)nt=a[qe],a.hasOwnProperty(qe)&&nt!==void 0&&!s.hasOwnProperty(qe)&&cf(t,n,qe,void 0,s,nt);for(ct in s)nt=s[ct],lt=a[ct],!s.hasOwnProperty(ct)||nt===lt||nt===void 0&&lt===void 0||cf(t,n,ct,nt,s,lt);return}}for(var Z in a)nt=a[Z],a.hasOwnProperty(Z)&&nt!=null&&!s.hasOwnProperty(Z)&&Ne(t,n,Z,null,s,nt);for(vt in s)nt=s[vt],lt=a[vt],!s.hasOwnProperty(vt)||nt===lt||nt==null&&lt==null||Ne(t,n,vt,nt,s,lt)}var uf=null,ff=null;function Rl(t){return t.nodeType===9?t:t.ownerDocument}function Qm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hf=null;function L0(){var t=window.event;return t&&t.type==="popstate"?t===hf?!1:(hf=t,!0):(hf=null,!1)}var $m=typeof setTimeout=="function"?setTimeout:void 0,O0=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,P0=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(t){return tg.resolve(null).then(t).catch(z0)}:$m;function z0(t){setTimeout(function(){throw t})}function pf(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){t.removeChild(c),mo(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);mo(n)}function mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mf(a),Es(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function B0(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function F0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function eg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function ng(t,n,a){switch(n=Rl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var ii=new Map,ig=new Set;function Cl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Wi=q.d;q.d={f:I0,r:H0,D:G0,C:V0,L:k0,m:X0,X:q0,S:W0,M:Y0};function I0(){var t=Wi.f(),n=Sl();return t||n}function H0(t){var n=b(t);n!==null&&n.tag===5&&n.type==="form"?Dp(n):Wi.r(t)}var qr=typeof document>"u"?null:document;function ag(t,n,a){var s=qr;if(s&&typeof n=="string"&&n){var c=un(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ig.has(c)||(ig.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),xn(n,"link",t),Q(n),s.head.appendChild(n)))}}function G0(t){Wi.D(t),ag("dns-prefetch",t,null)}function V0(t,n){Wi.C(t,n),ag("preconnect",t,n)}function k0(t,n,a){Wi.L(t,n,a);var s=qr;if(s&&t&&n){var c='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+un(a.imageSizes)+'"]')):c+='[href="'+un(t)+'"]';var f=c;switch(n){case"style":f=Yr(t);break;case"script":f=jr(t)}ii.has(f)||(t=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ii.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(oo(f))||n==="script"&&s.querySelector(lo(f))||(n=s.createElement("link"),xn(n,"link",t),Q(n),s.head.appendChild(n)))}}function X0(t,n){Wi.m(t,n);var a=qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+un(s)+'"][href="'+un(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=jr(t)}if(!ii.has(f)&&(t=A({rel:"modulepreload",href:t},n),ii.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(lo(f)))return}s=a.createElement("link"),xn(s,"link",t),Q(s),a.head.appendChild(s)}}}function W0(t,n,a){Wi.S(t,n,a);var s=qr;if(s&&t){var c=et(s).hoistableStyles,f=Yr(t);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(oo(f)))T.loading=5;else{t=A({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ii.get(f))&&gf(t,a);var L=x=s.createElement("link");Q(L),xn(L,"link",t),L._p=new Promise(function(V,ct){L.onload=V,L.onerror=ct}),L.addEventListener("load",function(){T.loading|=1}),L.addEventListener("error",function(){T.loading|=2}),T.loading|=4,wl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function q0(t,n){Wi.X(t,n);var a=qr;if(a&&t){var s=et(a).hoistableScripts,c=jr(t),f=s.get(c);f||(f=a.querySelector(lo(c)),f||(t=A({src:t,async:!0},n),(n=ii.get(c))&&_f(t,n),f=a.createElement("script"),Q(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Y0(t,n){Wi.M(t,n);var a=qr;if(a&&t){var s=et(a).hoistableScripts,c=jr(t),f=s.get(c);f||(f=a.querySelector(lo(c)),f||(t=A({src:t,async:!0,type:"module"},n),(n=ii.get(c))&&_f(t,n),f=a.createElement("script"),Q(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function rg(t,n,a,s){var c=(c=ae.current)?Cl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Yr(a.href),a=et(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Yr(a.href);var f=et(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(oo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(t,a),f||j0(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=jr(a),a=et(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Yr(t){return'href="'+un(t)+'"'}function oo(t){return'link[rel="stylesheet"]['+t+"]"}function sg(t){return A({},t,{"data-precedence":t.precedence,precedence:null})}function j0(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),xn(n,"link",a),Q(n),t.head.appendChild(n))}function jr(t){return'[src="'+un(t)+'"]'}function lo(t){return"script[async]"+t}function og(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+un(a.href)+'"]');if(s)return n.instance=s,Q(s),s;var c=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Q(s),xn(s,"style",c),wl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Yr(a.href);var f=t.querySelector(oo(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;s=sg(a),(c=ii.get(c))&&gf(s,c),f=(t.ownerDocument||t).createElement("link"),Q(f);var x=f;return x._p=new Promise(function(T,L){x.onload=T,x.onerror=L}),xn(f,"link",s),n.state.loading|=4,wl(f,a.precedence,t),n.instance=f;case"script":return f=jr(a.src),(c=t.querySelector(lo(f)))?(n.instance=c,Q(c),c):(s=a,(c=ii.get(f))&&(s=A({},a),_f(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Q(c),xn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,wl(s,a.precedence,t));return n.instance}function wl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Dl=null;function lg(t,n,a){if(Dl===null){var s=new Map,c=Dl=new Map;c.set(a,s)}else c=Dl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ba]||f[nn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function cg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Z0(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ug(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var co=null;function K0(){}function Q0(t,n,a){if(co===null)throw Error(r(475));var s=co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Yr(a.href),f=t.querySelector(oo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Ul.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Q(f);return}f=t.ownerDocument||t,a=sg(a),(c=ii.get(c))&&gf(a,c),f=f.createElement("link"),Q(f);var x=f;x._p=new Promise(function(T,L){x.onload=T,x.onerror=L}),xn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ul.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function J0(){if(co===null)throw Error(r(475));var t=co;return t.stylesheets&&t.count===0&&vf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&vf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ul(){if(this.count--,this.count===0){if(this.stylesheets)vf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nl=null;function vf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nl=new Map,n.forEach($0,t),Nl=null,Ul.call(t))}function $0(t,n){if(!(n.state.loading&4)){var a=Nl.get(t);if(a)var s=a.get(null);else{a=new Map,Nl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Ul.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var uo={$$typeof:y,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function tx(t,n,a,s,c,f,x,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.hiddenUpdates=bn(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function fg(t,n,a,s,c,f,x,T,L,V,ct,vt){return t=new tx(t,n,a,x,T,L,V,vt),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),t.current=f,f.stateNode=t,n=Zc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wu(f),t}function dg(t){return t?(t=Ar,t):Ar}function hg(t,n,a,s,c,f){c=dg(c),s.context===null?s.context=c:s.pendingContext=c,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ha(t,s,n),a!==null&&(Dn(a,t,n),Ys(a,t,n))}function pg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xf(t,n){pg(t,n),(t=t.alternate)&&pg(t,n)}function mg(t){if(t.tag===13){var n=ra(t,67108864);n!==null&&Dn(n,t,67108864),xf(t,67108864)}}var Ll=!0;function ex(t,n,a,s){var c=C.T;C.T=null;var f=q.p;try{q.p=2,Sf(t,n,a,s)}finally{q.p=f,C.T=c}}function nx(t,n,a,s){var c=C.T;C.T=null;var f=q.p;try{q.p=8,Sf(t,n,a,s)}finally{q.p=f,C.T=c}}function Sf(t,n,a,s){if(Ll){var c=Mf(s);if(c===null)lf(t,n,s,Ol,a),_g(t,s);else if(ax(c,t,n,a,s))s.stopPropagation();else if(_g(t,s),n&4&&-1<ix.indexOf(t)){for(;c!==null;){var f=b(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=wt(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var L=1<<31-jt(x);T.entanglements[1]|=L,x&=~L}Ei(f),(Ve&6)===0&&(_l=ft()+500,ao(0))}}break;case 13:T=ra(f,2),T!==null&&Dn(T,f,2),Sl(),xf(f,2)}if(f=Mf(s),f===null&&lf(t,n,s,Ol,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else lf(t,n,s,null,a)}}function Mf(t){return t=Ac(t),yf(t)}var Ol=null;function yf(t){if(Ol=null,t=Di(t),t!==null){var n=j(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=Mt(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ol=t,null}function gg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case dt:return 2;case Gt:return 8;case Dt:case Bt:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Ef=!1,Sa=null,Ma=null,ya=null,fo=new Map,ho=new Map,Ea=[],ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(t,n){switch(t){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(n.pointerId)}}function po(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=b(n),n!==null&&mg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function ax(t,n,a,s,c){switch(n){case"focusin":return Sa=po(Sa,t,n,a,s,c),!0;case"dragenter":return Ma=po(Ma,t,n,a,s,c),!0;case"mouseover":return ya=po(ya,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return fo.set(f,po(fo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,ho.set(f,po(ho.get(f)||null,t,n,a,s,c)),!0}return!1}function vg(t){var n=Di(t.target);if(n!==null){var a=j(n);if(a!==null){if(n=a.tag,n===13){if(n=Mt(a),n!==null){t.blockedOn=n,Po(t.priority,function(){if(a.tag===13){var s=Xn(),c=ra(a,s);c!==null&&Dn(c,a,s),xf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Mf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);bc=s,a.target.dispatchEvent(s),bc=null}else return n=b(a),n!==null&&mg(n),t.blockedOn=a,!1;n.shift()}return!0}function xg(t,n,a){Pl(t)&&a.delete(n)}function rx(){Ef=!1,Sa!==null&&Pl(Sa)&&(Sa=null),Ma!==null&&Pl(Ma)&&(Ma=null),ya!==null&&Pl(ya)&&(ya=null),fo.forEach(xg),ho.forEach(xg)}function zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Ef||(Ef=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,rx)))}var Bl=null;function Sg(t){Bl!==t&&(Bl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Bl===t&&(Bl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(yf(s||a)===null)continue;break}var f=b(a);f!==null&&(t.splice(n,3),n-=3,fu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function mo(t){function n(L){return zl(L,t)}Sa!==null&&zl(Sa,t),Ma!==null&&zl(Ma,t),ya!==null&&zl(ya,t),fo.forEach(n),ho.forEach(n);for(var a=0;a<Ea.length;a++){var s=Ea[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)vg(a),a.blockedOn===null&&Ea.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[an]||null;if(typeof f=="function")x||Sg(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[an]||null)T=x.formAction;else if(yf(c)!==null)continue}else T=x.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Sg(a)}}}function Tf(t){this._internalRoot=t}Fl.prototype.render=Tf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Xn();hg(a,s,t,n,null,null)},Fl.prototype.unmount=Tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&kr(),hg(t.current,2,null,t,null,null),Sl(),n[wi]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var n=ys();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ea.length&&n!==0&&n<Ea[a].priority;a++);Ea.splice(a,0,t),a===0&&vg(t)}};var Mg=e.version;if(Mg!=="19.0.0")throw Error(r(527,Mg,"19.0.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=it(n),t=t!==null?Tt(t):null,t=t===null?null:t.stateNode,t};var sx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:Di,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Kt=Il.inject(sx),Vt=Il}catch{}}return _o.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Fp,f=Ip,x=Hp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=fg(t,1,!1,null,null,a,s,c,f,x,T,null),t[wi]=n.current,of(t.nodeType===8?t.parentNode:t),new Tf(n)},_o.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Fp,x=Ip,T=Hp,L=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=fg(t,1,!0,n,a??null,s,c,f,x,T,L,V),n.context=dg(null),a=n.current,s=Xn(),c=da(s),c.callback=null,ha(a,c,s),n.current.lanes=s,An(n,s),Ei(n),t[wi]=n.current,of(t),new Fl(n)},_o.version="19.0.0",_o}var Ug;function gx(){if(Ug)return Rf.exports;Ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Rf.exports=mx(),Rf.exports}var _x=gx();const vx=()=>{const[o,e]=$e.useState([]),[i,r]=$e.useState([]);$e.useEffect(()=>{fetch("data/blog_data.json").then(d=>d.json()).then(d=>{e(d.blogs)}).catch(d=>console.error("Error fetching blogs data",d))},[]);const l=d=>{r(h=>[...h,d])},u=d=>{r(h=>h.filter(p=>p!==d))};return $.jsxs("div",{className:"py-12 px-4 relative",children:[$.jsx("h2",{className:"text-center text-3xl font-bold text-white mb-4",children:"Portafolio"}),$.jsx("div",{className:"max-w-6xl mx-auto relative",children:$.jsx("div",{className:"grid",children:o.map((d,h)=>{const p=i.includes(h);return $.jsxs("div",{className:"bg-white bg-opacity-90 p-0 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden mb-6",children:[$.jsx("div",{className:"relative w-full h-48 flex items-end rounded-md",style:{backgroundImage:`url(${d.image_preview})`,backgroundSize:"cover",backgroundPosition:"center"},children:$.jsx("div",{className:"w-full bg-black bg-opacity-60 p-2 rounded-b-md",children:$.jsx("span",{className:"text-white text-lg font-semibold block text-center",children:d.title})})}),$.jsxs("div",{className:"p-4 transition-all duration-300 ease-in-out",style:p?{maxHeight:"none",overflow:"visible"}:{maxHeight:"120px",overflow:"hidden"},children:[$.jsx("p",{className:"text-gray-800 text-base mb-2",style:{marginBottom:"0.5rem"},children:d.summary}),p&&d.text&&$.jsx("div",{className:"text-gray-700 text-sm mb-2 prose max-w-none",dangerouslySetInnerHTML:{__html:d.text}}),!p&&(d.summary.length>80||d.text&&d.text.length>0)&&$.jsx("button",{className:"text-blue-900 underline text-sm mt-2",onClick:()=>l(h),children:"Read more"}),p&&$.jsx("button",{className:"text-blue-900 underline text-sm mt-2",onClick:()=>u(h),children:"Show less"})]})]},h)})})})]})},xx=()=>{const[o,e]=$e.useState(""),[i,r]=$e.useState(""),l=u=>{u.preventDefault(),alert("Thank you for contacting me! I will get back to you soon.")};return $.jsx("div",{className:"min-h-screen flex items-center justify-center py-12 px-4",children:$.jsxs("div",{className:"max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden",children:[$.jsxs("div",{className:"text-center py-8 bg-gradient-to-r from-blue-500 to-purple-500",children:[$.jsx("h1",{className:"text-4xl font-extrabold text-white",children:"Contact Me"}),$.jsx("p",{className:"mt-2 text-lg text-blue-100",children:"Feel free to reach out for inquiries or collaborations!"})]}),$.jsxs("div",{className:"flex flex-col md:flex-row",children:[$.jsxs("form",{onSubmit:l,className:"flex-1 p-8 md:p-12 border-r border-gray-200",children:[$.jsxs("div",{className:"mb-6",children:[$.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Your Email"}),$.jsx("input",{type:"email",value:o,onChange:u=>e(u.target.value),required:!0,className:"w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition",placeholder:"you@example.com"})]}),$.jsxs("div",{className:"mb-6",children:[$.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Your Message"}),$.jsx("textarea",{value:i,onChange:u=>r(u.target.value),required:!0,rows:6,className:"w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition",placeholder:"Write your message here..."})]}),$.jsx("button",{type:"submit",className:"w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition",children:"Send Message"})]}),$.jsxs("div",{className:"flex-1 p-8 md:p-12 flex flex-col items-center justify-center bg-blue-50",children:[$.jsx("h2",{className:"text-3xl font-bold text-green-600 mb-4",children:"Let's Chat"}),$.jsx("p",{className:"text-gray-700 text-center mb-6",children:"Schedule a free 30-minute consultation with me to discuss your ideas."}),$.jsx("a",{href:"https://calendly.com/m-casanova-dev",target:"_blank",rel:"noopener noreferrer",className:"py-4 px-8 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg transition",children:"Schedule a Consultation"})]})]})]})})},Ng=["clients/dreamnest.webp","clients/domtom.webp","clients/prosieben.webp","clients/webcreek.png","clients/creative.png","clients/dreamnest.webp","clients/domtom.webp","clients/prosieben.webp","clients/webcreek.png","clients/creative.png","clients/dreamnest.webp","clients/dreamnest.webp","clients/domtom.webp","clients/prosieben.webp","clients/webcreek.png","clients/dreamnest.webp","clients/dreamnest.webp","clients/dreamnest.webp","clients/dreamnest.webp","clients/dreamnest.webp","clients/dreamnest.webp"],Sx=()=>{const o=$e.useRef(null);return $e.useEffect(()=>{const i=setInterval(()=>{o.current&&(o.current.scrollLeft+=1,o.current.scrollLeft>=o.current.scrollWidth/2&&(o.current.scrollLeft=0))},20);return()=>clearInterval(i)},[]),$.jsx("div",{className:"relative w-full overflow-hidden p-4 flex items-center justify-center",children:$.jsx("div",{ref:o,className:"flex space-x-4 w-full overflow-x-scroll scrollbar-hide",style:{scrollBehavior:"smooth",whiteSpace:"nowrap"},children:[...Ng,...Ng].map((e,i)=>$.jsx("div",{className:"flex-shrink-0 w-[300px] h-[200px] rounded-lg overflow-hidden shadow-lg",children:$.jsx("img",{src:e,alt:`Slide ${i}`,className:"w-full h-full object-cover rounded-lg"})},i))})})},Mx=()=>{const[o,e]=$e.useState([]),[i,r]=$e.useState(0),[l,u]=$e.useState(!1),[d,h]=$e.useState(null),[p,m]=$e.useState("images"),[_,v]=$e.useState(null);$e.useEffect(()=>{fetch("data/portafolio_data.json").then(M=>M.json()).then(M=>{e(M.portfolio)}).catch(M=>console.error("Error fetching portfolio data",M))},[]);const S=()=>{i+3<o.length&&r(i+3)},y=()=>{i-3>=0&&r(i-3)},R=M=>{h(M),m("images"),u(!0)},w=()=>{u(!1),h(null),v(null)};return $.jsxs("div",{className:"py-12 px-4 relative",children:[$.jsx("h2",{className:"text-center text-3xl font-bold text-black mb-4",children:"Portafolio"}),$.jsx("p",{className:"text-center text-lg text-black mb-8",children:"With over 10 years of experience in web development, I specialize in building scalable, high-performance applications."}),$.jsxs("div",{className:"max-w-6xl mx-auto relative",children:[$.jsx("button",{onClick:y,disabled:i===0,className:"absolute -left-10 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-full p-3 disabled:opacity-50 z-10 focus:outline-none",children:"<"}),$.jsx("button",{onClick:S,disabled:i+3>=o.length,className:"absolute -right-10 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white rounded-full p-3 disabled:opacity-50 z-10 focus:outline-none",children:">"}),$.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:o.slice(i,i+3).map((M,g)=>$.jsx("div",{className:"bg-white bg-opacity-90 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition duration-300",onClick:()=>R(M),children:$.jsxs("div",{className:"relative",children:[$.jsx("img",{src:M.image,alt:M.title,className:"w-full h-48 object-cover rounded-md"}),$.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300",children:$.jsx("span",{className:"text-white text-lg font-semibold",children:M.title})})]})},g))})]}),l&&d&&$.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:$.jsxs("div",{className:"bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative",children:[$.jsx("button",{className:"absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none",onClick:w,children:"X"}),$.jsxs("div",{className:"md:flex",children:[$.jsxs("div",{className:"md:w-1/2 p-4",children:[$.jsx("h2",{className:"text-2xl font-bold mb-4",children:d.title}),$.jsx("p",{className:"mb-4 text-gray-700",children:d.description}),$.jsxs("div",{className:"mb-2",children:[$.jsx("strong",{children:"Technologies:"})," ",$.jsx("span",{className:"text-gray-600",children:d.technologies.join(", ")})]}),$.jsxs("div",{className:"mb-4",children:[$.jsx("strong",{children:"Sectors:"})," ",$.jsx("span",{className:"text-gray-600",children:d.sectors.join(", ")})]}),d.github&&$.jsx("div",{className:"mb-2",children:$.jsx("a",{href:d.github,target:"_blank",rel:"noopener noreferrer",className:"text-blue-900 underline",children:"GitHub"})}),d.live_demo&&$.jsx("div",{className:"mb-2",children:$.jsx("a",{href:d.live_demo,target:"_blank",rel:"noopener noreferrer",className:"text-blue-900 underline",children:"Live Demo"})})]}),$.jsx("div",{className:"md:w-1/2 p-4",children:$.jsxs("div",{className:"mb-4",children:[$.jsxs("div",{className:"flex space-x-4 border-b mb-2",children:[$.jsx("button",{className:`pb-2 ${p==="images"?"border-b-2 border-blue-900 text-blue-900":"text-gray-600"} focus:outline-none`,onClick:()=>m("images"),children:"Images"}),$.jsx("button",{className:`pb-2 ${p==="video"?"border-b-2 border-blue-900 text-blue-900":"text-gray-600"} focus:outline-none`,onClick:()=>m("video"),children:"Video"})]}),$.jsxs("div",{children:[p==="images"&&$.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[d.images.map((M,g)=>$.jsx("img",{src:`portafolio/${M}`,alt:`${d.title} ${g}`,className:"w-full h-24 object-cover rounded cursor-pointer",onClick:()=>v(M)},g)),_&&$.jsx("div",{className:"col-span-3 mt-4",children:$.jsxs("div",{className:"relative",children:[$.jsx("img",{src:`portafolio/${_}`,alt:"Selected",className:"w-full object-cover rounded"}),$.jsx("button",{className:"absolute top-2 right-2 bg-blue-900 text-white rounded-full p-1 focus:outline-none",onClick:()=>v(null),children:"X"})]})})]}),p==="video"&&$.jsx("div",{className:"video-container",children:d.video.endsWith(".mov")||d.video.endsWith(".mp4")?$.jsxs("video",{controls:!0,className:"w-full",children:[$.jsx("source",{src:`videos/${d.video}`,type:"video/mp4"}),"Your browser does not support the video tag."]}):$.jsx("iframe",{width:"100%",height:"315",src:d.video,title:d.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})]})})]})]})})]})},yx=()=>$.jsxs("div",{className:"relative min-h-screen",children:[$.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:"url('/path/to/your/image.jpg')"}}),$.jsx("div",{className:"absolute inset-0"}),$.jsxs("div",{className:"relative z-10 container mx-auto py-12 px-4",children:[$.jsx("h2",{className:"text-center text-3xl font-bold text-white mb-4",children:"What I Offer"}),$.jsx("p",{className:"text-center text-lg text-gray-300 mb-8",children:"With over 10 years of experience in web development, I specialize in building scalable, high-performance applications."}),$.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[$.jsxs("div",{className:"bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center",children:[$.jsx("div",{className:"w-12 h-12 mb-4 flex items-center justify-center",children:$.jsx("svg",{className:"w-full h-full text-blue-900",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:$.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 18l6-6-6-6M8 6L2 12l6 6"})})}),$.jsx("h4",{className:"text-xl font-semibold text-blue-900 mb-2 text-center",children:"Full-Stack Development"}),$.jsx("p",{className:"text-gray-600 text-center",children:"Expertise in front-end (React, Angular, SolidJS) and back-end (Node.js, PHP, Python) development, delivering robust solutions."})]}),$.jsxs("div",{className:"bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center",children:[$.jsx("div",{className:"w-12 h-12 mb-4 flex items-center justify-center",children:$.jsxs("svg",{className:"w-full h-full text-blue-900",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[$.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4a2 2 0 001-1.73z"}),$.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7.5 4.21l7 4.01M7.5 19.79l7-4.01"})]})}),$.jsx("h4",{className:"text-xl font-semibold text-blue-900 mb-2 text-center",children:"3D Web Development"}),$.jsx("p",{className:"text-gray-600 text-center",children:"Advanced WebGL and three.js implementations for interactive 3D applications and visualizations."})]}),$.jsxs("div",{className:"bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center",children:[$.jsx("div",{className:"w-12 h-12 mb-4 flex items-center justify-center",children:$.jsx("svg",{className:"w-full h-full text-blue-900",fill:"currentColor",viewBox:"0 0 20 20",children:$.jsx("path",{d:"M3 13a4 4 0 011.1-7.9 5.5 5.5 0 0110.8 1.2A3.5 3.5 0 0117 13H3z"})})}),$.jsx("h4",{className:"text-xl font-semibold text-blue-900 mb-2 text-center",children:"API & Cloud Solutions"}),$.jsx("p",{className:"text-gray-600 text-center",children:"Designing and developing RESTful APIs with secure cloud-based integrations using Docker, Kubernetes, and Azure."})]}),$.jsxs("div",{className:"bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center",children:[$.jsx("div",{className:"w-12 h-12 mb-4 flex items-center justify-center",children:$.jsx("svg",{className:"w-full h-full text-blue-900",fill:"currentColor",viewBox:"0 0 20 20",children:$.jsx("path",{d:"M10 2a6 6 0 00-6 6c0 2.637 1.98 4.835 4.5 5.665V15a1 1 0 001 1h3a1 1 0 001-1v-1.335C14.02 12.835 16 10.637 16 8a6 6 0 00-6-6zm0 12a2 2 0 110-4 2 2 0 010 4z"})})}),$.jsx("h4",{className:"text-xl font-semibold text-blue-900 mb-2 text-center",children:"Technical Mentoring"}),$.jsx("p",{className:"text-gray-600 text-center",children:"Helping teams grow through mentoring in Agile methodologies, testing automation, and software architecture."})]})]})]})]}),Ex=({activeHomePage:o,setActiveHomePage:e})=>{const[i,r]=$e.useState(!1);$e.useEffect(()=>{const u=()=>{const d=document.getElementById("home"),h=document.getElementById("navbar");d&&h&&r(window.pageYOffset>d.offsetHeight-h.offsetHeight)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const l=(u,d)=>{u.preventDefault();const h=document.getElementById(d);h&&window.scrollTo({top:h.offsetTop-80,behavior:"smooth"})};return $.jsxs("nav",{className:`navbar ${i?"scrolled":""}`,id:"navbar",children:[$.jsx("div",{className:"logo",children:"UNISOFT"}),$.jsx("ul",{className:"nav-menu",children:o?$.jsxs($.Fragment,{children:[$.jsx("li",{children:$.jsx("a",{href:"#services",onClick:u=>l(u,"services"),children:"Services"})}),$.jsx("li",{children:$.jsx("a",{href:"#portafolio",onClick:u=>l(u,"portafolio"),children:"Portfolio"})}),$.jsx("li",{children:$.jsx("a",{href:"#clients",onClick:u=>l(u,"clients"),children:"Clients"})}),$.jsx("li",{children:$.jsx("a",{href:"#contact",onClick:u=>l(u,"contact"),children:"Contact"})}),$.jsx("li",{children:$.jsx("a",{href:"#blog",onClick:()=>{e(!1)},children:"Blog"})})]}):$.jsxs($.Fragment,{children:[$.jsx("li",{children:$.jsx("a",{href:"#home",onClick:()=>{e(!0)},children:"Home"})}),$.jsx("li",{children:$.jsx("button",{className:"ml-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition",onClick:()=>e(!0),children:"GO BACK"})})]})})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="175",Tx=0,Lg=1,bx=2,w_=1,Ax=2,Qi=3,Oa=0,Bn=1,Ji=2,Na=0,fs=1,Og=2,Pg=3,zg=4,Rx=5,fr=100,Cx=101,wx=102,Dx=103,Ux=104,Nx=200,Lx=201,Ox=202,Px=203,rd=204,sd=205,zx=206,Bx=207,Fx=208,Ix=209,Hx=210,Gx=211,Vx=212,kx=213,Xx=214,od=0,ld=1,cd=2,hs=3,ud=4,fd=5,dd=6,hd=7,D_=0,Wx=1,qx=2,La=0,Yx=1,jx=2,Zx=3,Kx=4,Qx=5,Jx=6,$x=7,U_=300,ps=301,ms=302,pd=303,md=304,vc=306,gd=1e3,hr=1001,_d=1002,_i=1003,tS=1004,Hl=1005,bi=1006,Uf=1007,pr=1008,na=1009,N_=1010,L_=1011,bo=1012,Yd=1013,mr=1014,$i=1015,Do=1016,jd=1017,Zd=1018,Ao=1020,O_=35902,P_=1021,z_=1022,gi=1023,B_=1024,F_=1025,Ro=1026,Co=1027,I_=1028,Kd=1029,H_=1030,Qd=1031,Jd=1033,lc=33776,cc=33777,uc=33778,fc=33779,vd=35840,xd=35841,Sd=35842,Md=35843,yd=36196,Ed=37492,Td=37496,bd=37808,Ad=37809,Rd=37810,Cd=37811,wd=37812,Dd=37813,Ud=37814,Nd=37815,Ld=37816,Od=37817,Pd=37818,zd=37819,Bd=37820,Fd=37821,dc=36492,Id=36494,Hd=36495,G_=36283,Gd=36284,Vd=36285,kd=36286,eS=3200,nS=3201,iS=0,aS=1,Ua="",ri="srgb",gs="srgb-linear",mc="linear",Le="srgb",Zr=7680,Bg=519,rS=512,sS=513,oS=514,V_=515,lS=516,cS=517,uS=518,fS=519,Fg=35044,Ig="300 es",ta=2e3,gc=2001;class vs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hg=1234567;const Eo=Math.PI/180,wo=180/Math.PI;function xs(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function me(o,e,i){return Math.max(e,Math.min(i,o))}function $d(o,e){return(o%e+e)%e}function dS(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function hS(o,e,i){return o!==e?(i-o)/(e-o):0}function To(o,e,i){return(1-i)*o+i*e}function pS(o,e,i,r){return To(o,e,1-Math.exp(-i*r))}function mS(o,e=1){return e-Math.abs($d(o,e*2)-e)}function gS(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function _S(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function vS(o,e){return o+Math.floor(Math.random()*(e-o+1))}function xS(o,e){return o+Math.random()*(e-o)}function SS(o){return o*(.5-Math.random())}function MS(o){o!==void 0&&(Hg=o);let e=Hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yS(o){return o*Eo}function ES(o){return o*wo}function TS(o){return(o&o-1)===0&&o!==0}function bS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function AS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function RS(o,e,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),p=d(i/2),m=u((e+r)/2),_=d((e+r)/2),v=u((e-r)/2),S=d((e-r)/2),y=u((r-e)/2),R=d((r-e)/2);switch(l){case"XYX":o.set(h*_,p*v,p*S,h*m);break;case"YZY":o.set(p*S,h*_,p*v,h*m);break;case"ZXZ":o.set(p*v,p*S,h*_,h*m);break;case"XZX":o.set(h*_,p*R,p*y,h*m);break;case"YXY":o.set(p*y,h*_,p*R,h*m);break;case"ZYZ":o.set(p*R,p*y,h*_,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function cs(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Un(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const CS={DEG2RAD:Eo,RAD2DEG:wo,generateUUID:xs,clamp:me,euclideanModulo:$d,mapLinear:dS,inverseLerp:hS,lerp:To,damp:pS,pingpong:mS,smoothstep:gS,smootherstep:_S,randInt:vS,randFloat:xS,randFloatSpread:SS,seededRandom:MS,degToRad:yS,radToDeg:ES,isPowerOfTwo:TS,ceilPowerOfTwo:bS,floorPowerOfTwo:AS,setQuaternionFromProperEuler:RS,normalize:Un,denormalize:cs};class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,r,l,u,d,h,p,m){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],_=r[4],v=r[7],S=r[2],y=r[5],R=r[8],w=l[0],M=l[3],g=l[6],P=l[1],O=l[4],D=l[7],H=l[2],I=l[5],B=l[8];return u[0]=d*w+h*P+p*H,u[3]=d*M+h*O+p*I,u[6]=d*g+h*D+p*B,u[1]=m*w+_*P+v*H,u[4]=m*M+_*O+v*I,u[7]=m*g+_*D+v*B,u[2]=S*w+y*P+R*H,u[5]=S*M+y*O+R*I,u[8]=S*g+y*D+R*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8];return i*d*_-i*h*m-r*u*_+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],v=_*d-h*m,S=h*p-_*u,y=m*u-d*p,R=i*v+r*S+l*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=v*w,e[1]=(l*m-_*r)*w,e[2]=(h*r-l*d)*w,e[3]=S*w,e[4]=(_*i-l*p)*w,e[5]=(l*u-h*i)*w,e[6]=y*w,e[7]=(r*p-m*i)*w,e[8]=(d*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Nf.makeScale(e,i)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Nf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new oe;function k_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _c(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wS(){const o=_c("canvas");return o.style.display="block",o}const Gg={};function hc(o){o in Gg||(Gg[o]=!0,console.warn(o))}function DS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function US(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function NS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Vg=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kg=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LS(){const o={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Le&&(l.r=ea(l.r),l.g=ea(l.g),l.b=ea(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Le&&(l.r=ds(l.r),l.g=ds(l.g),l.b=ds(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ua?mc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[gs]:{primaries:e,whitePoint:r,transfer:mc,toXYZ:Vg,fromXYZ:kg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Le,toXYZ:Vg,fromXYZ:kg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const Ae=LS();function ea(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ds(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Kr;class OS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Kr===void 0&&(Kr=_c("canvas")),Kr.width=e.width,Kr.height=e.height;const l=Kr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Kr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=_c("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ea(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ea(i[r]/255)*255):i[r]=ea(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PS=0;class th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Lf(l[d].image)):u.push(Lf(l[d]))}else u=Lf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Lf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?OS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zS=0;class Fn extends vs{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=hr,l=hr,u=bi,d=pr,h=gi,p=na,m=Fn.DEFAULT_ANISOTROPY,_=Ua){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=xs(),this.name="",this.source=new th(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=U_;Fn.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,i=0,r=0,l=1){je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],_=p[4],v=p[8],S=p[1],y=p[5],R=p[9],w=p[2],M=p[6],g=p[10];if(Math.abs(_-S)<.01&&Math.abs(v-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+w)<.1&&Math.abs(R+M)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,D=(y+1)/2,H=(g+1)/2,I=(_+S)/4,B=(v+w)/4,K=(R+M)/4;return O>D&&O>H?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=I/r,u=B/r):D>H?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=I/l,u=K/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=B/u,l=K/u),this.set(r,l,u,i),this}let P=Math.sqrt((M-R)*(M-R)+(v-w)*(v-w)+(S-_)*(S-_));return Math.abs(P)<.001&&(P=1),this.x=(M-R)/P,this.y=(v-w)/P,this.z=(S-_)/P,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this.z=me(this.z,e.z,i.z),this.w=me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this.z=me(this.z,e,i),this.w=me(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BS extends vs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new je(0,0,e,i),this.scissorTest=!1,this.viewport=new je(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Fn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new th(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends BS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class X_ extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],_=r[l+2],v=r[l+3];const S=u[d+0],y=u[d+1],R=u[d+2],w=u[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=v;return}if(h===1){e[i+0]=S,e[i+1]=y,e[i+2]=R,e[i+3]=w;return}if(v!==w||p!==S||m!==y||_!==R){let M=1-h;const g=p*S+m*y+_*R+v*w,P=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const H=Math.sqrt(O),I=Math.atan2(H,g*P);M=Math.sin(M*I)/H,h=Math.sin(h*I)/H}const D=h*P;if(p=p*M+S*D,m=m*M+y*D,_=_*M+R*D,v=v*M+w*D,M===1-h){const H=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=H,m*=H,_*=H,v*=H}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],_=r[l+3],v=u[d],S=u[d+1],y=u[d+2],R=u[d+3];return e[i]=h*R+_*v+p*y-m*S,e[i+1]=p*R+_*S+m*v-h*y,e[i+2]=m*R+_*y+h*S-p*v,e[i+3]=_*R-h*v-p*S-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),_=h(l/2),v=h(u/2),S=p(r/2),y=p(l/2),R=p(u/2);switch(d){case"XYZ":this._x=S*_*v+m*y*R,this._y=m*y*v-S*_*R,this._z=m*_*R+S*y*v,this._w=m*_*v-S*y*R;break;case"YXZ":this._x=S*_*v+m*y*R,this._y=m*y*v-S*_*R,this._z=m*_*R-S*y*v,this._w=m*_*v+S*y*R;break;case"ZXY":this._x=S*_*v-m*y*R,this._y=m*y*v+S*_*R,this._z=m*_*R+S*y*v,this._w=m*_*v-S*y*R;break;case"ZYX":this._x=S*_*v-m*y*R,this._y=m*y*v+S*_*R,this._z=m*_*R-S*y*v,this._w=m*_*v+S*y*R;break;case"YZX":this._x=S*_*v+m*y*R,this._y=m*y*v+S*_*R,this._z=m*_*R-S*y*v,this._w=m*_*v-S*y*R;break;case"XZY":this._x=S*_*v-m*y*R,this._y=m*y*v-S*_*R,this._z=m*_*R+S*y*v,this._w=m*_*v+S*y*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],_=i[6],v=i[10],S=r+h+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(d-l)*y}else if(r>h&&r>v){const y=2*Math.sqrt(1+r-h-v);this._w=(_-p)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+m)/y}else if(h>v){const y=2*Math.sqrt(1+h-r-v);this._w=(u-m)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+v-r-h);this._w=(d-l)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(me(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+d*h+l*m-u*p,this._y=l*_+d*p+u*h-r*m,this._z=u*_+d*m+r*p-l*h,this._w=d*_-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-i;return this._w=y*d+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,h),v=Math.sin((1-i)*_)/m,S=Math.sin(i*_)/m;return this._w=d*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Xg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Xg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),_=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+p*m+d*v-h*_,this.y=r+p*_+h*m-u*v,this.z=l+p*v+u*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this.z=me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this.z=me(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Of.copy(this).projectOnVector(e),this.sub(Of)}reflect(e){return this.sub(Of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Of=new rt,Xg=new Uo;class No{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,di):di.fromBufferAttribute(u,d),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Gl.copy(r.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Vl.subVectors(this.max,vo),Qr.subVectors(e.a,vo),Jr.subVectors(e.b,vo),$r.subVectors(e.c,vo),ba.subVectors(Jr,Qr),Aa.subVectors($r,Jr),ir.subVectors(Qr,$r);let i=[0,-ba.z,ba.y,0,-Aa.z,Aa.y,0,-ir.z,ir.y,ba.z,0,-ba.x,Aa.z,0,-Aa.x,ir.z,0,-ir.x,-ba.y,ba.x,0,-Aa.y,Aa.x,0,-ir.y,ir.x,0];return!Pf(i,Qr,Jr,$r,Vl)||(i=[1,0,0,0,1,0,0,0,1],!Pf(i,Qr,Jr,$r,Vl))?!1:(kl.crossVectors(ba,Aa),i=[kl.x,kl.y,kl.z],Pf(i,Qr,Jr,$r,Vl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],di=new rt,Gl=new No,Qr=new rt,Jr=new rt,$r=new rt,ba=new rt,Aa=new rt,ir=new rt,vo=new rt,Vl=new rt,kl=new rt,ar=new rt;function Pf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ar.fromArray(o,u);const h=l.x*Math.abs(ar.x)+l.y*Math.abs(ar.y)+l.z*Math.abs(ar.z),p=e.dot(ar),m=i.dot(ar),_=r.dot(ar);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const IS=new No,xo=new rt,zf=new rt;class eh{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):IS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const i=xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(xo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(zf)),this.expandByPoint(xo.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new rt,Bf=new rt,Xl=new rt,Ra=new rt,Ff=new rt,Wl=new rt,If=new rt;class HS{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Yi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,i),Yi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Bf.copy(e).add(i).multiplyScalar(.5),Xl.copy(i).sub(e).normalize(),Ra.copy(this.origin).sub(Bf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Xl),h=Ra.dot(this.direction),p=-Ra.dot(Xl),m=Ra.lengthSq(),_=Math.abs(1-d*d);let v,S,y,R;if(_>0)if(v=d*p-h,S=d*h-p,R=u*_,v>=0)if(S>=-R)if(S<=R){const w=1/_;v*=w,S*=w,y=v*(v+d*S+2*h)+S*(d*v+S+2*p)+m}else S=u,v=Math.max(0,-(d*S+h)),y=-v*v+S*(S+2*p)+m;else S=-u,v=Math.max(0,-(d*S+h)),y=-v*v+S*(S+2*p)+m;else S<=-R?(v=Math.max(0,-(-d*u+h)),S=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+S*(S+2*p)+m):S<=R?(v=0,S=Math.min(Math.max(-u,-p),u),y=S*(S+2*p)+m):(v=Math.max(0,-(d*u+h)),S=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+S*(S+2*p)+m);else S=d>0?-u:u,v=Math.max(0,-(d*S+h)),y=-v*v+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Bf).addScaledVector(Xl,S),y}intersectSphere(e,i){Yi.subVectors(e.center,this.origin);const r=Yi.dot(this.direction),l=Yi.dot(Yi)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),_>=0?(u=(e.min.y-S.y)*_,d=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,d=(e.min.y-S.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-S.z)*v,p=(e.max.z-S.z)*v):(h=(e.max.z-S.z)*v,p=(e.min.z-S.z)*v),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,i,r,l,u){Ff.subVectors(i,e),Wl.subVectors(r,e),If.crossVectors(Ff,Wl);let d=this.direction.dot(If),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ra.subVectors(this.origin,e);const p=h*this.direction.dot(Wl.crossVectors(Ra,Wl));if(p<0)return null;const m=h*this.direction.dot(Ff.cross(Ra));if(m<0||p+m>d)return null;const _=-h*Ra.dot(If);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,r,l,u,d,h,p,m,_,v,S,y,R,w,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,_,v,S,y,R,w,M)}set(e,i,r,l,u,d,h,p,m,_,v,S,y,R,w,M){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=d,g[9]=h,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=S,g[3]=y,g[7]=R,g[11]=w,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ts.setFromMatrixColumn(e,0).length(),u=1/ts.setFromMatrixColumn(e,1).length(),d=1/ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=d*_,y=d*v,R=h*_,w=h*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=y+R*m,i[5]=S-w*m,i[9]=-h*p,i[2]=w-S*m,i[6]=R+y*m,i[10]=d*p}else if(e.order==="YXZ"){const S=p*_,y=p*v,R=m*_,w=m*v;i[0]=S+w*h,i[4]=R*h-y,i[8]=d*m,i[1]=d*v,i[5]=d*_,i[9]=-h,i[2]=y*h-R,i[6]=w+S*h,i[10]=d*p}else if(e.order==="ZXY"){const S=p*_,y=p*v,R=m*_,w=m*v;i[0]=S-w*h,i[4]=-d*v,i[8]=R+y*h,i[1]=y+R*h,i[5]=d*_,i[9]=w-S*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const S=d*_,y=d*v,R=h*_,w=h*v;i[0]=p*_,i[4]=R*m-y,i[8]=S*m+w,i[1]=p*v,i[5]=w*m+S,i[9]=y*m-R,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const S=d*p,y=d*m,R=h*p,w=h*m;i[0]=p*_,i[4]=w-S*v,i[8]=R*v+y,i[1]=v,i[5]=d*_,i[9]=-h*_,i[2]=-m*_,i[6]=y*v+R,i[10]=S-w*v}else if(e.order==="XZY"){const S=d*p,y=d*m,R=h*p,w=h*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=S*v+w,i[5]=d*_,i[9]=y*v-R,i[2]=R*v-y,i[6]=h*_,i[10]=w*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GS,e,VS)}lookAt(e,i,r){const l=this.elements;return Wn.subVectors(e,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ca.crossVectors(r,Wn),Ca.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ca.crossVectors(r,Wn)),Ca.normalize(),ql.crossVectors(Wn,Ca),l[0]=Ca.x,l[4]=ql.x,l[8]=Wn.x,l[1]=Ca.y,l[5]=ql.y,l[9]=Wn.y,l[2]=Ca.z,l[6]=ql.z,l[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],_=r[1],v=r[5],S=r[9],y=r[13],R=r[2],w=r[6],M=r[10],g=r[14],P=r[3],O=r[7],D=r[11],H=r[15],I=l[0],B=l[4],K=l[8],C=l[12],A=l[1],F=l[5],ut=l[9],at=l[13],gt=l[2],ht=l[6],X=l[10],st=l[14],j=l[3],Mt=l[7],N=l[11],it=l[15];return u[0]=d*I+h*A+p*gt+m*j,u[4]=d*B+h*F+p*ht+m*Mt,u[8]=d*K+h*ut+p*X+m*N,u[12]=d*C+h*at+p*st+m*it,u[1]=_*I+v*A+S*gt+y*j,u[5]=_*B+v*F+S*ht+y*Mt,u[9]=_*K+v*ut+S*X+y*N,u[13]=_*C+v*at+S*st+y*it,u[2]=R*I+w*A+M*gt+g*j,u[6]=R*B+w*F+M*ht+g*Mt,u[10]=R*K+w*ut+M*X+g*N,u[14]=R*C+w*at+M*st+g*it,u[3]=P*I+O*A+D*gt+H*j,u[7]=P*B+O*F+D*ht+H*Mt,u[11]=P*K+O*ut+D*X+H*N,u[15]=P*C+O*at+D*st+H*it,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],_=e[2],v=e[6],S=e[10],y=e[14],R=e[3],w=e[7],M=e[11],g=e[15];return R*(+u*p*v-l*m*v-u*h*S+r*m*S+l*h*y-r*p*y)+w*(+i*p*y-i*m*S+u*d*S-l*d*y+l*m*_-u*p*_)+M*(+i*m*v-i*h*y-u*d*v+r*d*y+u*h*_-r*m*_)+g*(-l*h*_-i*p*v+i*h*S+l*d*v-r*d*S+r*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],v=e[9],S=e[10],y=e[11],R=e[12],w=e[13],M=e[14],g=e[15],P=v*M*m-w*S*m+w*p*y-h*M*y-v*p*g+h*S*g,O=R*S*m-_*M*m-R*p*y+d*M*y+_*p*g-d*S*g,D=_*w*m-R*v*m+R*h*y-d*w*y-_*h*g+d*v*g,H=R*v*p-_*w*p-R*h*S+d*w*S+_*h*M-d*v*M,I=i*P+r*O+l*D+u*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=P*B,e[1]=(w*S*u-v*M*u-w*l*y+r*M*y+v*l*g-r*S*g)*B,e[2]=(h*M*u-w*p*u+w*l*m-r*M*m-h*l*g+r*p*g)*B,e[3]=(v*p*u-h*S*u-v*l*m+r*S*m+h*l*y-r*p*y)*B,e[4]=O*B,e[5]=(_*M*u-R*S*u+R*l*y-i*M*y-_*l*g+i*S*g)*B,e[6]=(R*p*u-d*M*u-R*l*m+i*M*m+d*l*g-i*p*g)*B,e[7]=(d*S*u-_*p*u+_*l*m-i*S*m-d*l*y+i*p*y)*B,e[8]=D*B,e[9]=(R*v*u-_*w*u-R*r*y+i*w*y+_*r*g-i*v*g)*B,e[10]=(d*w*u-R*h*u+R*r*m-i*w*m-d*r*g+i*h*g)*B,e[11]=(_*h*u-d*v*u-_*r*m+i*v*m+d*r*y-i*h*y)*B,e[12]=H*B,e[13]=(_*w*l-R*v*l+R*r*S-i*w*S-_*r*M+i*v*M)*B,e[14]=(R*h*l-d*w*l-R*r*p+i*w*p+d*r*M-i*h*M)*B,e[15]=(d*v*l-_*h*l+_*r*p-i*v*p-d*r*S+i*h*S)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,_=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+r,_*p-l*d,0,m*p-l*h,_*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,_=d+d,v=h+h,S=u*m,y=u*_,R=u*v,w=d*_,M=d*v,g=h*v,P=p*m,O=p*_,D=p*v,H=r.x,I=r.y,B=r.z;return l[0]=(1-(w+g))*H,l[1]=(y+D)*H,l[2]=(R-O)*H,l[3]=0,l[4]=(y-D)*I,l[5]=(1-(S+g))*I,l[6]=(M+P)*I,l[7]=0,l[8]=(R+O)*B,l[9]=(M-P)*B,l[10]=(1-(S+w))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ts.set(l[0],l[1],l[2]).length();const d=ts.set(l[4],l[5],l[6]).length(),h=ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],hi.copy(this);const m=1/u,_=1/d,v=1/h;return hi.elements[0]*=m,hi.elements[1]*=m,hi.elements[2]*=m,hi.elements[4]*=_,hi.elements[5]*=_,hi.elements[6]*=_,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,i.setFromRotationMatrix(hi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=ta){const p=this.elements,m=2*u/(i-e),_=2*u/(r-l),v=(i+e)/(i-e),S=(r+l)/(r-l);let y,R;if(h===ta)y=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===gc)y=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ta){const p=this.elements,m=1/(i-e),_=1/(r-l),v=1/(d-u),S=(i+e)*m,y=(r+l)*_;let R,w;if(h===ta)R=(d+u)*v,w=-2*v;else if(h===gc)R=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=w,p[14]=-R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ts=new rt,hi=new tn,GS=new rt(0,0,0),VS=new rt(1,1,1),Ca=new rt,ql=new rt,Wn=new rt,Wg=new tn,qg=new Uo;class ia{constructor(e=0,i=0,r=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],_=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return qg.setFromEuler(this),this.setFromQuaternion(qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class W_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const Yg=new rt,es=new Uo,ji=new tn,Yl=new rt,So=new rt,XS=new rt,WS=new Uo,jg=new rt(1,0,0),Zg=new rt(0,1,0),Kg=new rt(0,0,1),Qg={type:"added"},qS={type:"removed"},ns={type:"childadded",child:null},Hf={type:"childremoved",child:null};class Yn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new rt,i=new ia,r=new Uo,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new oe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new W_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(jg,e)}rotateY(e){return this.rotateOnAxis(Zg,e)}rotateZ(e){return this.rotateOnAxis(Kg,e)}translateOnAxis(e,i){return Yg.copy(e).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(jg,e)}translateY(e){return this.translateOnAxis(Zg,e)}translateZ(e){return this.translateOnAxis(Kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Yl.copy(e):Yl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(So,Yl,this.up):ji.lookAt(Yl,So,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),es.setFromRotationMatrix(ji),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qg),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(qS),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qg),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,XS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),v=d(e.shapes),S=d(e.skeletons),y=d(e.animations),R=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new rt(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new rt,Zi=new rt,Gf=new rt,Ki=new rt,is=new rt,as=new rt,Jg=new rt,Vf=new rt,kf=new rt,Xf=new rt,Wf=new je,qf=new je,Yf=new je;class mi{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){pi.subVectors(l,i),Zi.subVectors(r,i),Gf.subVectors(e,i);const d=pi.dot(pi),h=pi.dot(Zi),p=pi.dot(Gf),m=Zi.dot(Zi),_=Zi.dot(Gf),v=d*m-h*h;if(v===0)return u.set(0,0,0),null;const S=1/v,y=(m*p-h*_)*S,R=(d*_-h*p)*S;return u.set(1-y-R,R,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,Ki)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ki.x),p.addScaledVector(d,Ki.y),p.addScaledVector(h,Ki.z),p)}static getInterpolatedAttribute(e,i,r,l,u,d){return Wf.setScalar(0),qf.setScalar(0),Yf.setScalar(0),Wf.fromBufferAttribute(e,i),qf.fromBufferAttribute(e,r),Yf.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Wf,u.x),d.addScaledVector(qf,u.y),d.addScaledVector(Yf,u.z),d}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),Zi.subVectors(e,i),pi.cross(Zi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),pi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;is.subVectors(l,r),as.subVectors(u,r),Vf.subVectors(e,r);const p=is.dot(Vf),m=as.dot(Vf);if(p<=0&&m<=0)return i.copy(r);kf.subVectors(e,l);const _=is.dot(kf),v=as.dot(kf);if(_>=0&&v<=_)return i.copy(l);const S=p*v-_*m;if(S<=0&&p>=0&&_<=0)return d=p/(p-_),i.copy(r).addScaledVector(is,d);Xf.subVectors(e,u);const y=is.dot(Xf),R=as.dot(Xf);if(R>=0&&y<=R)return i.copy(u);const w=y*m-p*R;if(w<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(r).addScaledVector(as,h);const M=_*R-y*v;if(M<=0&&v-_>=0&&y-R>=0)return Jg.subVectors(u,l),h=(v-_)/(v-_+(y-R)),i.copy(l).addScaledVector(Jg,h);const g=1/(M+w+S);return d=w*g,h=S*g,i.copy(r).addScaledVector(is,d).addScaledVector(as,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wa={h:0,s:0,l:0},jl={h:0,s:0,l:0};function jf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Oe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=$d(e,1),i=me(i,0,1),r=me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=jf(d,u,e+1/3),this.g=jf(d,u,e),this.b=jf(d,u,e-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=q_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ae.fromWorkingColorSpace(Tn.copy(this),e),Math.round(me(Tn.r*255,0,255))*65536+Math.round(me(Tn.g*255,0,255))*256+Math.round(me(Tn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Tn.copy(this),i);const r=Tn.r,l=Tn.g,u=Tn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const v=d-h;switch(m=_<=.5?v/(d+h):v/(2-d-h),d){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Tn.copy(this),i),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ri){Ae.fromWorkingColorSpace(Tn.copy(this),e);const i=Tn.r,r=Tn.g,l=Tn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(wa),this.setHSL(wa.h+e,wa.s+i,wa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(wa),e.getHSL(jl);const r=To(wa.h,jl.h,i),l=To(wa.s,jl.s,i),u=To(wa.l,jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Oe;Oe.NAMES=q_;let YS=0;class xc extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=fs,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(r.blending=this.blending),this.side!==Oa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rd&&(r.blendSrc=this.blendSrc),this.blendDst!==sd&&(r.blendDst=this.blendDst),this.blendEquation!==fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nh extends xc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=D_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Je=new rt,Zl=new ze;let jS=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Fg,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Zl.fromBufferAttribute(this,i),Zl.applyMatrix3(e),this.setXY(i,Zl.x,Zl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix3(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix4(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyNormalMatrix(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.transformDirection(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=cs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=cs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=cs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=cs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=cs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Un(i,this.array),r=Un(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Un(i,this.array),r=Un(r,this.array),l=Un(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Un(i,this.array),r=Un(r,this.array),l=Un(l,this.array),u=Un(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fg&&(e.usage=this.usage),e}}class Y_ extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class j_ extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ci extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let ZS=0;const ai=new tn,Zf=new Yn,rs=new rt,qn=new No,Mo=new No,pn=new rt;class za extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k_(e)?j_:Y_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new oe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,i,r){return ai.makeTranslation(e,i,r),this.applyMatrix4(ai),this}scale(e,i,r){return ai.makeScale(e,i,r),this.applyMatrix4(ai),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ci(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];qn.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Mo.setFromBufferAttribute(h),this.morphTargetsRelative?(pn.addVectors(qn.min,Mo.min),qn.expandByPoint(pn),pn.addVectors(qn.max,Mo.max),qn.expandByPoint(pn)):(qn.expandByPoint(Mo.min),qn.expandByPoint(Mo.max))}qn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)pn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(pn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)pn.fromBufferAttribute(h,m),p&&(rs.fromBufferAttribute(e,m),pn.add(rs)),l=Math.max(l,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let K=0;K<r.count;K++)h[K]=new rt,p[K]=new rt;const m=new rt,_=new rt,v=new rt,S=new ze,y=new ze,R=new ze,w=new rt,M=new rt;function g(K,C,A){m.fromBufferAttribute(r,K),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,A),S.fromBufferAttribute(u,K),y.fromBufferAttribute(u,C),R.fromBufferAttribute(u,A),_.sub(m),v.sub(m),y.sub(S),R.sub(S);const F=1/(y.x*R.y-R.x*y.y);isFinite(F)&&(w.copy(_).multiplyScalar(R.y).addScaledVector(v,-y.y).multiplyScalar(F),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-R.x).multiplyScalar(F),h[K].add(w),h[C].add(w),h[A].add(w),p[K].add(M),p[C].add(M),p[A].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let K=0,C=P.length;K<C;++K){const A=P[K],F=A.start,ut=A.count;for(let at=F,gt=F+ut;at<gt;at+=3)g(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const O=new rt,D=new rt,H=new rt,I=new rt;function B(K){H.fromBufferAttribute(l,K),I.copy(H);const C=h[K];O.copy(C),O.sub(H.multiplyScalar(H.dot(C))).normalize(),D.crossVectors(I,C);const F=D.dot(p[K])<0?-1:1;d.setXYZW(K,O.x,O.y,O.z,F)}for(let K=0,C=P.length;K<C;++K){const A=P[K],F=A.start,ut=A.count;for(let at=F,gt=F+ut;at<gt;at+=3)B(e.getX(at+0)),B(e.getX(at+1)),B(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new rt,u=new rt,d=new rt,h=new rt,p=new rt,m=new rt,_=new rt,v=new rt;if(e)for(let S=0,y=e.count;S<y;S+=3){const R=e.getX(S+0),w=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),_.subVectors(d,u),v.subVectors(l,u),_.cross(v),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),h.add(_),p.add(_),m.add(_),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),v.subVectors(l,u),_.cross(v),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)pn.fromBufferAttribute(e,i),pn.normalize(),e.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function e(h,p){const m=h.array,_=h.itemSize,v=h.normalized,S=new m.constructor(p.length*_);let y=0,R=0;for(let w=0,M=p.length;w<M;w++){h.isInterleavedBufferAttribute?y=p[w]*h.data.stride+h.offset:y=p[w]*_;for(let g=0;g<_;g++)S[R++]=m[y++]}return new Ri(S,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new za,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let _=0,v=m.length;_<v;_++){const S=m[_],y=e(S,r);p.push(y)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,S=m.length;v<S;v++){const y=m[v];_.push(y.toJSON(e.data))}_.length>0&&(l[p]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let S=0,y=v.length;S<y;S++)_.push(v[S].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $g=new tn,rr=new HS,Kl=new eh,t_=new rt,Ql=new rt,Jl=new rt,$l=new rt,Kf=new rt,tc=new rt,e_=new rt,ec=new rt;class Ai extends Yn{constructor(e=new za,i=new nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){tc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=h[p],v=u[p];_!==0&&(Kf.fromBufferAttribute(v,e),d?tc.addScaledVector(Kf,_):tc.addScaledVector(Kf.sub(i),_))}i.add(tc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(u),rr.copy(e.ray).recast(e.near),!(Kl.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Kl,t_)===null||rr.origin.distanceToSquared(t_)>(e.far-e.near)**2))&&($g.copy(u).invert(),rr.copy(e.ray).applyMatrix4($g),!(r.boundingBox!==null&&rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,rr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,S=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,w=S.length;R<w;R++){const M=S[R],g=d[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,H=O;D<H;D+=3){const I=h.getX(D),B=h.getX(D+1),K=h.getX(D+2);l=nc(this,g,e,r,m,_,v,I,B,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let M=R,g=w;M<g;M+=3){const P=h.getX(M),O=h.getX(M+1),D=h.getX(M+2);l=nc(this,d,e,r,m,_,v,P,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let R=0,w=S.length;R<w;R++){const M=S[R],g=d[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let D=P,H=O;D<H;D+=3){const I=D,B=D+1,K=D+2;l=nc(this,g,e,r,m,_,v,I,B,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=R,g=w;M<g;M+=3){const P=M,O=M+1,D=M+2;l=nc(this,d,e,r,m,_,v,P,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function KS(o,e,i,r,l,u,d,h){let p;if(e.side===Bn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===Oa,h),p===null)return null;ec.copy(h),ec.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(ec);return m<i.near||m>i.far?null:{distance:m,point:ec.clone(),object:o}}function nc(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,Ql),o.getVertexPosition(p,Jl),o.getVertexPosition(m,$l);const _=KS(o,e,i,r,Ql,Jl,$l,e_);if(_){const v=new rt;mi.getBarycoord(e_,Ql,Jl,$l,v),l&&(_.uv=mi.getInterpolatedAttribute(l,h,p,m,v,new ze)),u&&(_.uv1=mi.getInterpolatedAttribute(u,h,p,m,v,new ze)),d&&(_.normal=mi.getInterpolatedAttribute(d,h,p,m,v,new rt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:p,c:m,normal:new rt,materialIndex:0};mi.getNormal(Ql,Jl,$l,S.normal),_.face=S,_.barycoord=v}return _}class Lo extends za{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],_=[],v=[];let S=0,y=0;R("z","y","x",-1,-1,r,i,e,d,u,0),R("z","y","x",1,-1,r,i,-e,d,u,1),R("x","z","y",1,1,e,r,i,l,d,2),R("x","z","y",1,-1,e,r,-i,l,d,3),R("x","y","z",1,-1,e,i,r,l,u,4),R("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Ci(m,3)),this.setAttribute("normal",new Ci(_,3)),this.setAttribute("uv",new Ci(v,2));function R(w,M,g,P,O,D,H,I,B,K,C){const A=D/B,F=H/K,ut=D/2,at=H/2,gt=I/2,ht=B+1,X=K+1;let st=0,j=0;const Mt=new rt;for(let N=0;N<X;N++){const it=N*F-at;for(let Tt=0;Tt<ht;Tt++){const Rt=Tt*A-ut;Mt[w]=Rt*P,Mt[M]=it*O,Mt[g]=gt,m.push(Mt.x,Mt.y,Mt.z),Mt[w]=0,Mt[M]=0,Mt[g]=I>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),v.push(Tt/B),v.push(1-N/K),st+=1}}for(let N=0;N<K;N++)for(let it=0;it<B;it++){const Tt=S+it+ht*N,Rt=S+it+ht*(N+1),q=S+(it+1)+ht*(N+1),pt=S+(it+1)+ht*N;p.push(Tt,Rt,pt),p.push(Rt,q,pt),j+=6}h.addGroup(y,j,C),y+=j,S+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=_s(o[i]);for(const l in r)e[l]=r[l]}return e}function QS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Z_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const JS={clone:_s,merge:Nn};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pa extends xc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=QS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class K_ extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ta}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Da=new rt,n_=new ze,i_=new ze;class si extends K_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Da.x,Da.y).multiplyScalar(-e/Da.z),Da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Da.x,Da.y).multiplyScalar(-e/Da.z)}getViewSize(e,i){return this.getViewBounds(e,n_,i_),i.subVectors(i_,n_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Eo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ss=-90,os=1;class eM extends Yn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(ss,os,e,i);l.layers=this.layers,this.add(l);const u=new si(ss,os,e,i);u.layers=this.layers,this.add(u);const d=new si(ss,os,e,i);d.layers=this.layers,this.add(d);const h=new si(ss,os,e,i);h.layers=this.layers,this.add(h);const p=new si(ss,os,e,i);p.layers=this.layers,this.add(p);const m=new si(ss,os,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===ta)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,_]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(v,S,y),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class Q_ extends Fn{constructor(e=[],i=ps,r,l,u,d,h,p,m,_){super(e,i,r,l,u,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nM extends gr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Q_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Lo(5,5,5),u=new Pa({name:"CubemapFromEquirect",uniforms:_s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Na});u.uniforms.tEquirect.value=i;const d=new Ai(l,u),h=i.minFilter;return i.minFilter===pr&&(i.minFilter=bi),new eM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class ic extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iM={type:"move"};class Qf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),g=this._getHandJoint(m,w);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=_.position.distanceTo(v.position),y=.02,R=.005;m.inputState.pinching&&S>y+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=y-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new ic;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class aM extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Jf=new rt,rM=new rt,sM=new oe;class cr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Jf.subVectors(r,i).cross(rM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Jf),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||sM.getNormalMatrix(e),l=this.coplanarPoint(Jf).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new eh,ac=new rt;class J_{constructor(e=new cr,i=new cr,r=new cr,l=new cr,u=new cr,d=new cr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ta){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],_=l[5],v=l[6],S=l[7],y=l[8],R=l[9],w=l[10],M=l[11],g=l[12],P=l[13],O=l[14],D=l[15];if(r[0].setComponents(p-u,S-m,M-y,D-g).normalize(),r[1].setComponents(p+u,S+m,M+y,D+g).normalize(),r[2].setComponents(p+d,S+_,M+R,D+P).normalize(),r[3].setComponents(p-d,S-_,M-R,D-P).normalize(),r[4].setComponents(p-h,S-v,M-w,D-O).normalize(),i===ta)r[5].setComponents(p+h,S+v,M+w,D+O).normalize();else if(i===gc)r[5].setComponents(h,v,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ac.x=l.normal.x>0?e.max.x:e.min.x,ac.y=l.normal.y>0?e.max.y:e.min.y,ac.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $_ extends Fn{constructor(e,i,r=mr,l,u,d,h=_i,p=_i,m,_=Ro){if(_!==Ro&&_!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,d,h,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Sc extends za{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,_=p+1,v=e/h,S=i/p,y=[],R=[],w=[],M=[];for(let g=0;g<_;g++){const P=g*S-d;for(let O=0;O<m;O++){const D=O*v-u;R.push(D,-P,0),w.push(0,0,1),M.push(O/h),M.push(1-g/p)}}for(let g=0;g<p;g++)for(let P=0;P<h;P++){const O=P+m*g,D=P+m*(g+1),H=P+1+m*(g+1),I=P+1+m*g;y.push(O,D,I),y.push(D,H,I)}this.setIndex(y),this.setAttribute("position",new Ci(R,3)),this.setAttribute("normal",new Ci(w,3)),this.setAttribute("uv",new Ci(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ih extends za{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(d+h,Math.PI);let m=0;const _=[],v=new rt,S=new rt,y=[],R=[],w=[],M=[];for(let g=0;g<=r;g++){const P=[],O=g/r;let D=0;g===0&&d===0?D=.5/i:g===r&&p===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const I=H/i;v.x=-e*Math.cos(l+I*u)*Math.sin(d+O*h),v.y=e*Math.cos(d+O*h),v.z=e*Math.sin(l+I*u)*Math.sin(d+O*h),R.push(v.x,v.y,v.z),S.copy(v).normalize(),w.push(S.x,S.y,S.z),M.push(I+D,1-O),P.push(m++)}_.push(P)}for(let g=0;g<r;g++)for(let P=0;P<i;P++){const O=_[g][P+1],D=_[g][P],H=_[g+1][P],I=_[g+1][P+1];(g!==0||d>0)&&y.push(O,D,I),(g!==r-1||p<Math.PI)&&y.push(D,H,I)}this.setIndex(y),this.setAttribute("position",new Ci(R,3)),this.setAttribute("normal",new Ci(w,3)),this.setAttribute("uv",new Ci(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oM extends xc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lM extends xc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cM extends K_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class uM extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function a_(o,e,i,r){const l=fM(r);switch(i){case P_:return o*e;case B_:return o*e;case F_:return o*e*2;case I_:return o*e/l.components*l.byteLength;case Kd:return o*e/l.components*l.byteLength;case H_:return o*e*2/l.components*l.byteLength;case Qd:return o*e*2/l.components*l.byteLength;case z_:return o*e*3/l.components*l.byteLength;case gi:return o*e*4/l.components*l.byteLength;case Jd:return o*e*4/l.components*l.byteLength;case lc:case cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case uc:case fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xd:case Md:return Math.max(o,16)*Math.max(e,8)/4;case vd:case Sd:return Math.max(o,8)*Math.max(e,8)/2;case yd:case Ed:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Od:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case dc:case Id:case Hd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case G_:case Gd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Vd:case kd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fM(o){switch(o){case na:case N_:return{byteLength:1,components:1};case bo:case L_:case Do:return{byteLength:2,components:1};case jd:case Zd:return{byteLength:2,components:4};case mr:case Yd:case $i:return{byteLength:4,components:1};case O_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tv(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function dM(o){const e=new WeakMap;function i(h,p){const m=h.array,_=h.usage,v=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,_),h.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,m){const _=p.array,v=p.updateRanges;if(o.bindBuffer(m,h),v.length===0)o.bufferSubData(m,0,_);else{v.sort((y,R)=>y.start-R.start);let S=0;for(let y=1;y<v.length;y++){const R=v[S],w=v[y];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++S,v[S]=w)}v.length=S+1;for(let y=0,R=v.length;y<R;y++){const w=v[y];o.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
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
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
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
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MM=`#ifdef USE_BATCHING
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
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AM=`#ifdef USE_IRIDESCENCE
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
#endif`,RM=`#ifdef USE_BUMPMAP
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zM=`#define PI 3.141592653589793
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
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FM=`vec3 transformedNormal = objectNormal;
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
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
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
}`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
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
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uy=`PhysicalMaterial material;
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
#endif`,fy=`struct PhysicalMaterial {
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
}`,dy=`
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
#endif`,hy=`#if defined( RE_IndirectDiffuse )
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
#endif`,py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,my=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,My=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yy=`#if defined( USE_POINTS_UV )
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
#endif`,Ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ay=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cy=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
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
#endif`,zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qy=`float getShadowMask() {
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
}`,Jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
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
#endif`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hE=`uniform sampler2D t2D;
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
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
}`,xE=`#if DEPTH_PACKING == 3200
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
}`,SE=`#define DISTANCE
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
}`,ME=`#define DISTANCE
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
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
}`,bE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,RE=`uniform vec3 diffuse;
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
}`,CE=`#define LAMBERT
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
}`,wE=`#define LAMBERT
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
}`,DE=`#define MATCAP
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
}`,UE=`#define MATCAP
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
}`,NE=`#define NORMAL
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
}`,LE=`#define NORMAL
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
}`,OE=`#define PHONG
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
}`,PE=`#define PHONG
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
}`,zE=`#define STANDARD
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
}`,BE=`#define STANDARD
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
}`,FE=`#define TOON
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
}`,IE=`#define TOON
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
}`,HE=`uniform float size;
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
}`,GE=`uniform vec3 diffuse;
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
}`,VE=`#include <common>
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
}`,kE=`uniform vec3 color;
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
}`,XE=`uniform float rotation;
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
}`,WE=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:hM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:vM,aomap_fragment:xM,aomap_pars_fragment:SM,batching_pars_vertex:MM,batching_vertex:yM,begin_vertex:EM,beginnormal_vertex:TM,bsdfs:bM,iridescence_fragment:AM,bumpmap_pars_fragment:RM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:UM,color_fragment:NM,color_pars_fragment:LM,color_pars_vertex:OM,color_vertex:PM,common:zM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:FM,displacementmap_pars_vertex:IM,displacementmap_vertex:HM,emissivemap_fragment:GM,emissivemap_pars_fragment:VM,colorspace_fragment:kM,colorspace_pars_fragment:XM,envmap_fragment:WM,envmap_common_pars_fragment:qM,envmap_pars_fragment:YM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:ry,envmap_vertex:ZM,fog_vertex:KM,fog_pars_vertex:QM,fog_fragment:JM,fog_pars_fragment:$M,gradientmap_pars_fragment:ty,lightmap_pars_fragment:ey,lights_lambert_fragment:ny,lights_lambert_pars_fragment:iy,lights_pars_begin:ay,lights_toon_fragment:sy,lights_toon_pars_fragment:oy,lights_phong_fragment:ly,lights_phong_pars_fragment:cy,lights_physical_fragment:uy,lights_physical_pars_fragment:fy,lights_fragment_begin:dy,lights_fragment_maps:hy,lights_fragment_end:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:_y,logdepthbuf_vertex:vy,map_fragment:xy,map_pars_fragment:Sy,map_particle_fragment:My,map_particle_pars_fragment:yy,metalnessmap_fragment:Ey,metalnessmap_pars_fragment:Ty,morphinstance_vertex:by,morphcolor_vertex:Ay,morphnormal_vertex:Ry,morphtarget_pars_vertex:Cy,morphtarget_vertex:wy,normal_fragment_begin:Dy,normal_fragment_maps:Uy,normal_pars_fragment:Ny,normal_pars_vertex:Ly,normal_vertex:Oy,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:zy,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:Fy,iridescence_pars_fragment:Iy,opaque_fragment:Hy,packing:Gy,premultiplied_alpha_fragment:Vy,project_vertex:ky,dithering_fragment:Xy,dithering_pars_fragment:Wy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Zy,shadowmap_vertex:Ky,shadowmask_pars_fragment:Qy,skinbase_vertex:Jy,skinning_pars_vertex:$y,skinning_vertex:tE,skinnormal_vertex:eE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:aE,tonemapping_pars_fragment:rE,transmission_fragment:sE,transmission_pars_fragment:oE,uv_pars_fragment:lE,uv_pars_vertex:cE,uv_vertex:uE,worldpos_vertex:fE,background_vert:dE,background_frag:hE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:gE,cube_frag:_E,depth_vert:vE,depth_frag:xE,distanceRGBA_vert:SE,distanceRGBA_frag:ME,equirect_vert:yE,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:bE,meshbasic_vert:AE,meshbasic_frag:RE,meshlambert_vert:CE,meshlambert_frag:wE,meshmatcap_vert:DE,meshmatcap_frag:UE,meshnormal_vert:NE,meshnormal_frag:LE,meshphong_vert:OE,meshphong_frag:PE,meshphysical_vert:zE,meshphysical_frag:BE,meshtoon_vert:FE,meshtoon_frag:IE,points_vert:HE,points_frag:GE,shadow_vert:VE,shadow_frag:kE,sprite_vert:XE,sprite_frag:WE},Nt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ti={basic:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Nn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Nn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Nn([Nt.points,Nt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Nn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Nn([Nt.common,Nt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Nn([Nt.sprite,Nt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Nn([Nt.common,Nt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Nn([Nt.lights,Nt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ti.physical={uniforms:Nn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const rc={r:0,b:0,g:0},or=new ia,qE=new tn;function YE(o,e,i,r,l,u,d){const h=new Oe(0);let p=u===!0?0:1,m,_,v=null,S=0,y=null;function R(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:e).get(D)),D}function w(O){let D=!1;const H=R(O);H===null?g(h,p):H&&H.isColor&&(g(H,1),D=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,d):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,D){const H=R(D);H&&(H.isCubeTexture||H.mapping===vc)?(_===void 0&&(_=new Ai(new Lo(1,1,1),new Pa({name:"BackgroundCubeMaterial",uniforms:_s(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),or.copy(D.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(qE.makeRotationFromEuler(or)),_.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Le,(v!==H||S!==H.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,v=H,S=H.version,y=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Ai(new Sc(2,2),new Pa({name:"BackgroundMaterial",uniforms:_s(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Le,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||S!==H.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,v=H,S=H.version,y=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function g(O,D){O.getRGB(rc,Z_(o)),r.buffers.color.setClear(rc.r,rc.g,rc.b,D,d)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,D=1){h.set(O),p=D,g(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,g(h,p)},render:w,addToRenderList:M,dispose:P}}function jE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(A,F,ut,at,gt){let ht=!1;const X=v(at,ut,F);u!==X&&(u=X,m(u.object)),ht=y(A,at,ut,gt),ht&&R(A,at,ut,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,D(A,F,ut,at),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function v(A,F,ut){const at=ut.wireframe===!0;let gt=r[A.id];gt===void 0&&(gt={},r[A.id]=gt);let ht=gt[F.id];ht===void 0&&(ht={},gt[F.id]=ht);let X=ht[at];return X===void 0&&(X=S(p()),ht[at]=X),X}function S(A){const F=[],ut=[],at=[];for(let gt=0;gt<i;gt++)F[gt]=0,ut[gt]=0,at[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ut,attributeDivisors:at,object:A,attributes:{},index:null}}function y(A,F,ut,at){const gt=u.attributes,ht=F.attributes;let X=0;const st=ut.getAttributes();for(const j in st)if(st[j].location>=0){const N=gt[j];let it=ht[j];if(it===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(it=A.instanceColor)),N===void 0||N.attribute!==it||it&&N.data!==it.data)return!0;X++}return u.attributesNum!==X||u.index!==at}function R(A,F,ut,at){const gt={},ht=F.attributes;let X=0;const st=ut.getAttributes();for(const j in st)if(st[j].location>=0){let N=ht[j];N===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(N=A.instanceColor));const it={};it.attribute=N,N&&N.data&&(it.data=N.data),gt[j]=it,X++}u.attributes=gt,u.attributesNum=X,u.index=at}function w(){const A=u.newAttributes;for(let F=0,ut=A.length;F<ut;F++)A[F]=0}function M(A){g(A,0)}function g(A,F){const ut=u.newAttributes,at=u.enabledAttributes,gt=u.attributeDivisors;ut[A]=1,at[A]===0&&(o.enableVertexAttribArray(A),at[A]=1),gt[A]!==F&&(o.vertexAttribDivisor(A,F),gt[A]=F)}function P(){const A=u.newAttributes,F=u.enabledAttributes;for(let ut=0,at=F.length;ut<at;ut++)F[ut]!==A[ut]&&(o.disableVertexAttribArray(ut),F[ut]=0)}function O(A,F,ut,at,gt,ht,X){X===!0?o.vertexAttribIPointer(A,F,ut,gt,ht):o.vertexAttribPointer(A,F,ut,at,gt,ht)}function D(A,F,ut,at){w();const gt=at.attributes,ht=ut.getAttributes(),X=F.defaultAttributeValues;for(const st in ht){const j=ht[st];if(j.location>=0){let Mt=gt[st];if(Mt===void 0&&(st==="instanceMatrix"&&A.instanceMatrix&&(Mt=A.instanceMatrix),st==="instanceColor"&&A.instanceColor&&(Mt=A.instanceColor)),Mt!==void 0){const N=Mt.normalized,it=Mt.itemSize,Tt=e.get(Mt);if(Tt===void 0)continue;const Rt=Tt.buffer,q=Tt.type,pt=Tt.bytesPerElement,St=q===o.INT||q===o.UNSIGNED_INT||Mt.gpuType===Yd;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Ct=bt.stride,Qt=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let zt=0;zt<j.locationSize;zt++)g(j.location+zt,bt.meshPerAttribute);A.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let zt=0;zt<j.locationSize;zt++)M(j.location+zt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let zt=0;zt<j.locationSize;zt++)O(j.location+zt,it/j.locationSize,q,N,Ct*pt,(Qt+it/j.locationSize*zt)*pt,St)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<j.locationSize;bt++)g(j.location+bt,Mt.meshPerAttribute);A.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<j.locationSize;bt++)M(j.location+bt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let bt=0;bt<j.locationSize;bt++)O(j.location+bt,it/j.locationSize,q,N,it*pt,it/j.locationSize*bt*pt,St)}}else if(X!==void 0){const N=X[st];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(j.location,N);break;case 3:o.vertexAttrib3fv(j.location,N);break;case 4:o.vertexAttrib4fv(j.location,N);break;default:o.vertexAttrib1fv(j.location,N)}}}}P()}function H(){K();for(const A in r){const F=r[A];for(const ut in F){const at=F[ut];for(const gt in at)_(at[gt].object),delete at[gt];delete F[ut]}delete r[A]}}function I(A){if(r[A.id]===void 0)return;const F=r[A.id];for(const ut in F){const at=F[ut];for(const gt in at)_(at[gt].object),delete at[gt];delete F[ut]}delete r[A.id]}function B(A){for(const F in r){const ut=r[F];if(ut[A.id]===void 0)continue;const at=ut[A.id];for(const gt in at)_(at[gt].object),delete at[gt];delete ut[A.id]}}function K(){C(),d=!0,u!==l&&(u=l,m(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function ZE(o,e,i){let r;function l(m){r=m}function u(m,_){o.drawArrays(r,m,_),i.update(_,r,1)}function d(m,_,v){v!==0&&(o.drawArraysInstanced(r,m,_,v),i.update(_,r,v))}function h(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let y=0;for(let R=0;R<v;R++)y+=_[R];i.update(y,r,1)}function p(m,_,v,S){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let R=0;R<m.length;R++)d(m[R],_[R],S[R]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,S,0,v);let R=0;for(let w=0;w<v;w++)R+=_[w]*S[w];i.update(R,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function KE(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==gi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const K=B===Do&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==na&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==$i&&!K)}function p(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=R>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:H,maxSamples:I}}function QE(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new cr,h=new oe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,y){const R=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,g=o.get(v);if(!l||R===null||R.length===0||u&&!M)u?_(null):m();else{const P=u?0:r,O=P*4;let D=g.clippingState||null;p.value=D,D=_(R,S,O,y);for(let H=0;H!==O;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,S,y,R){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=p.value,R!==!0||M===null){const g=y+w*4,P=S.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<g)&&(M=new Float32Array(g));for(let O=0,D=y;O!==w;++O,D+=4)d.copy(v[O]).applyMatrix4(P,h),d.normal.toArray(M,D),M[D+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function JE(o){let e=new WeakMap;function i(d,h){return h===pd?d.mapping=ps:h===md&&(d.mapping=ms),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===pd||h===md)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new nM(p.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const us=4,r_=[.125,.215,.35,.446,.526,.582],dr=20,$f=new cM,s_=new Oe;let td=null,ed=0,nd=0,id=!1;const ur=(1+Math.sqrt(5))/2,ls=1/ur,o_=[new rt(-ur,ls,0),new rt(ur,ls,0),new rt(-ls,0,ur),new rt(ls,0,ur),new rt(0,ur,-ls),new rt(0,ur,ls),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],$E=new rt;class l_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=$E}=u;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Do,format:gi,colorSpace:gs,depthBuffer:!1},l=c_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tT(u)),this._blurMaterial=eT(u,e,i)}return l}_compileMaterial(e){const i=new Ai(this._lodPlanes[0],e);this._renderer.compile(i,$f)}_sceneToCubeUV(e,i,r,l,u){const p=new si(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(s_),v.toneMapping=La,v.autoClear=!1;const R=new nh({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),w=new Ai(new Lo,R);let M=!1;const g=e.background;g?g.isColor&&(R.color.copy(g),e.background=null,M=!0):(R.color.copy(s_),M=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[P],u.y,u.z)):O===1?(p.up.set(0,0,m[P]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[P],u.z)):(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[P]));const D=this._cubeSize;sc(l,O*D,P>2?D:0,D,D),v.setRenderTarget(l),M&&v.render(w,p),v.render(e,p)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=S,e.background=g}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ps||e.mapping===ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=f_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ai(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;sc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,$f)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=o_[(l-u-1)%o_.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Ai(this._lodPlanes[l],m),S=m.uniforms,y=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*dr-1),w=u/R,M=isFinite(u)?1+Math.floor(_*w):dr;M>dr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${dr}`);const g=[];let P=0;for(let B=0;B<dr;++B){const K=B/w,C=Math.exp(-K*K/2);g.push(C),B===0?P+=C:B<M&&(P+=2*C)}for(let B=0;B<g.length;B++)g[B]=g[B]/P;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=g,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:O}=this;S.dTheta.value=R,S.mipInt.value=O-r;const D=this._sizeLods[l],H=3*D*(l>O-us?l-O+us:0),I=4*(this._cubeSize-D);sc(i,H,I,3*D,2*D),p.setRenderTarget(i),p.render(v,$f)}}function tT(o){const e=[],i=[],r=[];let l=o;const u=o-us+1+r_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-us?p=r_[d-o+us-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),_=-m,v=1+m,S=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,R=6,w=3,M=2,g=1,P=new Float32Array(w*R*y),O=new Float32Array(M*R*y),D=new Float32Array(g*R*y);for(let I=0;I<y;I++){const B=I%3*2/3-1,K=I>2?0:-1,C=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];P.set(C,w*R*I),O.set(S,M*R*I);const A=[I,I,I,I,I,I];D.set(A,g*R*I)}const H=new za;H.setAttribute("position",new Ri(P,w)),H.setAttribute("uv",new Ri(O,M)),H.setAttribute("faceIndex",new Ri(D,g)),e.push(H),l>us&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function c_(o,e,i){const r=new gr(o,e,i);return r.texture.mapping=vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function sc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function eT(o,e,i){const r=new Float32Array(dr),l=new rt(0,1,0);return new Pa({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function u_(){return new Pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function f_(){return new Pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function nT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===pd||p===md,_=p===ps||p===ms;if(m||_){let v=e.get(h);const S=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new l_(o)),v=m?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return m&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new l_(o)),v=m?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let p=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function iT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&hc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function aT(o,e,i,r){const l={},u=new WeakMap;function d(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(v,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function p(v){const S=v.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function m(v){const S=[],y=v.index,R=v.attributes.position;let w=0;if(y!==null){const P=y.array;w=y.version;for(let O=0,D=P.length;O<D;O+=3){const H=P[O+0],I=P[O+1],B=P[O+2];S.push(H,I,I,B,B,H)}}else if(R!==void 0){const P=R.array;w=R.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const H=O+0,I=O+1,B=O+2;S.push(H,I,I,B,B,H)}}else return;const M=new(k_(S)?j_:Y_)(S,1);M.version=w;const g=u.get(v);g&&e.remove(g),u.set(v,M)}function _(v){const S=u.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:h,update:p,getWireframeAttribute:_}}function rT(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function p(S,y){o.drawElements(r,y,u,S*d),i.update(y,r,1)}function m(S,y,R){R!==0&&(o.drawElementsInstanced(r,y,u,S*d,R),i.update(y,r,R))}function _(S,y,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,R);let M=0;for(let g=0;g<R;g++)M+=y[g];i.update(M,r,1)}function v(S,y,R,w){if(R===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<S.length;g++)m(S[g]/d,y[g],w[g]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,w,0,R);let g=0;for(let P=0;P<R;P++)g+=y[P]*w[P];i.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function sT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function oT(o,e,i){const r=new WeakMap,l=new je;function u(d,h,p){const m=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let S=r.get(h);if(S===void 0||S.count!==v){let A=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",A)};var y=A;S!==void 0&&S.texture.dispose();const R=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let D=0;R===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let H=h.attributes.position.count*D,I=1;H>e.maxTextureSize&&(I=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const B=new Float32Array(H*I*4*v),K=new X_(B,H,I,v);K.type=$i,K.needsUpdate=!0;const C=D*4;for(let F=0;F<v;F++){const ut=g[F],at=P[F],gt=O[F],ht=H*I*4*F;for(let X=0;X<ut.count;X++){const st=X*C;R===!0&&(l.fromBufferAttribute(ut,X),B[ht+st+0]=l.x,B[ht+st+1]=l.y,B[ht+st+2]=l.z,B[ht+st+3]=0),w===!0&&(l.fromBufferAttribute(at,X),B[ht+st+4]=l.x,B[ht+st+5]=l.y,B[ht+st+6]=l.z,B[ht+st+7]=0),M===!0&&(l.fromBufferAttribute(gt,X),B[ht+st+8]=l.x,B[ht+st+9]=l.y,B[ht+st+10]=l.z,B[ht+st+11]=gt.itemSize===4?l.w:1)}}S={count:v,texture:K,size:new ze(H,I)},r.set(h,S),h.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const w=h.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function lT(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return v}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}const ev=new Fn,d_=new $_(1,1),nv=new X_,iv=new FS,av=new Q_,h_=[],p_=[],m_=new Float32Array(16),g_=new Float32Array(9),__=new Float32Array(4);function Ss(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=h_[l];if(u===void 0&&(u=new Float32Array(l),h_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function ln(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Mc(o,e){let i=p_[e];i===void 0&&(i=new Int32Array(e),p_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function cT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function hT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;__.set(r),o.uniformMatrix2fv(this.addr,!1,__),cn(i,r)}}function pT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;g_.set(r),o.uniformMatrix3fv(this.addr,!1,g_),cn(i,r)}}function mT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;m_.set(r),o.uniformMatrix4fv(this.addr,!1,m_),cn(i,r)}}function gT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function ST(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function TT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(d_.compareFunction=V_,u=d_):u=ev,i.setTexture2D(e||u,l)}function bT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||iv,l)}function AT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||av,l)}function RT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||nv,l)}function CT(o){switch(o){case 5126:return cT;case 35664:return uT;case 35665:return fT;case 35666:return dT;case 35674:return hT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return _T;case 35668:case 35672:return vT;case 35669:case 35673:return xT;case 5125:return ST;case 36294:return MT;case 36295:return yT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return RT}}function wT(o,e){o.uniform1fv(this.addr,e)}function DT(o,e){const i=Ss(e,this.size,2);o.uniform2fv(this.addr,i)}function UT(o,e){const i=Ss(e,this.size,3);o.uniform3fv(this.addr,i)}function NT(o,e){const i=Ss(e,this.size,4);o.uniform4fv(this.addr,i)}function LT(o,e){const i=Ss(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function OT(o,e){const i=Ss(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function PT(o,e){const i=Ss(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function zT(o,e){o.uniform1iv(this.addr,e)}function BT(o,e){o.uniform2iv(this.addr,e)}function FT(o,e){o.uniform3iv(this.addr,e)}function IT(o,e){o.uniform4iv(this.addr,e)}function HT(o,e){o.uniform1uiv(this.addr,e)}function GT(o,e){o.uniform2uiv(this.addr,e)}function VT(o,e){o.uniform3uiv(this.addr,e)}function kT(o,e){o.uniform4uiv(this.addr,e)}function XT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||ev,u[d])}function WT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||iv,u[d])}function qT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||av,u[d])}function YT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||nv,u[d])}function jT(o){switch(o){case 5126:return wT;case 35664:return DT;case 35665:return UT;case 35666:return NT;case 35674:return LT;case 35675:return OT;case 35676:return PT;case 5124:case 35670:return zT;case 35667:case 35671:return BT;case 35668:case 35672:return FT;case 35669:case 35673:return IT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}class ZT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=CT(i.type)}}class KT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jT(i.type)}}class QT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function v_(o,e){o.seq.push(e),o.map[e.id]=e}function JT(o,e,i){const r=o.name,l=r.length;for(ad.lastIndex=0;;){const u=ad.exec(r),d=ad.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){v_(i,m===void 0?new ZT(h,o,e):new KT(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new QT(h),v_(i,v)),i=v}}}class pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);JT(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function x_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const $T=37297;let tb=0;function eb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const S_=new oe;function nb(o){Ae._getMatrix(S_,Ae.workingColorSpace,o);const e=`mat3( ${S_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case mc:return[e,"LinearTransferOETF"];case Le:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function M_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+eb(o.getShaderSource(e),d)}else return l}function ib(o,e){const i=nb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ab(o,e){let i;switch(e){case Yx:i="Linear";break;case jx:i="Reinhard";break;case Zx:i="Cineon";break;case Kx:i="ACESFilmic";break;case Jx:i="AgX";break;case $x:i="Neutral";break;case Qx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const oc=new rt;function rb(){Ae.getLuminanceCoefficients(oc);const o=oc.x.toFixed(4),e=oc.y.toFixed(4),i=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function ob(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function lb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function yo(o){return o!==""}function y_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(o){return o.replace(cb,fb)}const ub=new Map;function fb(o,e){let i=ce[e];if(i===void 0){const r=ub.get(e);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xd(i)}const db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T_(o){return o.replace(db,hb)}function hb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function b_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===w_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ax?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function mb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function _b(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case D_:e="ENVMAP_BLENDING_MULTIPLY";break;case Wx:e="ENVMAP_BLENDING_MIX";break;case qx:e="ENVMAP_BLENDING_ADD";break}return e}function vb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function xb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=pb(i),m=mb(i),_=gb(i),v=_b(i),S=vb(i),y=sb(i),R=ob(u),w=l.createProgram();let M,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(yo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(yo).join(`
`),g.length>0&&(g+=`
`)):(M=[b_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),g=[b_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==La?"#define TONE_MAPPING":"",i.toneMapping!==La?ce.tonemapping_pars_fragment:"",i.toneMapping!==La?ab("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,ib("linearToOutputTexel",i.outputColorSpace),rb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(yo).join(`
`)),d=Xd(d),d=y_(d,i),d=E_(d,i),h=Xd(h),h=y_(h,i),h=E_(h,i),d=T_(d),h=T_(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===Ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=P+M+d,D=P+g+h,H=x_(l,l.VERTEX_SHADER,O),I=x_(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(F){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(w).trim(),at=l.getShaderInfoLog(H).trim(),gt=l.getShaderInfoLog(I).trim();let ht=!0,X=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,H,I);else{const st=M_(l,H,"vertex"),j=M_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ut+`
`+st+`
`+j)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(at===""||gt==="")&&(X=!1);X&&(F.diagnostics={runnable:ht,programLog:ut,vertexShader:{log:at,prefix:M},fragmentShader:{log:gt,prefix:g}})}l.deleteShader(H),l.deleteShader(I),K=new pc(l,w),C=lb(l,w)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,$T)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=I,this}let Sb=0;class Mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new yb(e),i.set(e,r)),r}}class yb{constructor(e){this.id=Sb++,this.code=e,this.usedTimes=0}}function Eb(o,e,i,r,l,u,d){const h=new W_,p=new Mb,m=new Set,_=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function M(C,A,F,ut,at){const gt=ut.fog,ht=at.geometry,X=C.isMeshStandardMaterial?ut.environment:null,st=(C.isMeshStandardMaterial?i:e).get(C.envMap||X),j=st&&st.mapping===vc?st.image.height:null,Mt=R[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const N=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,it=N!==void 0?N.length:0;let Tt=0;ht.morphAttributes.position!==void 0&&(Tt=1),ht.morphAttributes.normal!==void 0&&(Tt=2),ht.morphAttributes.color!==void 0&&(Tt=3);let Rt,q,pt,St;if(Mt){const ye=Ti[Mt];Rt=ye.vertexShader,q=ye.fragmentShader}else Rt=C.vertexShader,q=C.fragmentShader,p.update(C),pt=p.getVertexShaderID(C),St=p.getFragmentShaderID(C);const bt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Qt=at.isInstancedMesh===!0,zt=at.isBatchedMesh===!0,Me=!!C.map,Re=!!C.matcap,ae=!!st,z=!!C.aoMap,mn=!!C.lightMap,le=!!C.bumpMap,fe=!!C.normalMap,Xt=!!C.displacementMap,Ce=!!C.emissiveMap,Wt=!!C.metalnessMap,U=!!C.roughnessMap,E=C.anisotropy>0,tt=C.clearcoat>0,ft=C.dispersion>0,xt=C.iridescence>0,dt=C.sheen>0,Gt=C.transmission>0,Dt=E&&!!C.anisotropyMap,Bt=tt&&!!C.clearcoatMap,pe=tt&&!!C.clearcoatNormalMap,Et=tt&&!!C.clearcoatRoughnessMap,Ft=xt&&!!C.iridescenceMap,Kt=xt&&!!C.iridescenceThicknessMap,Vt=dt&&!!C.sheenColorMap,It=dt&&!!C.sheenRoughnessMap,re=!!C.specularMap,jt=!!C.specularColorMap,we=!!C.specularIntensityMap,k=Gt&&!!C.transmissionMap,Lt=Gt&&!!C.thicknessMap,ot=!!C.gradientMap,_t=!!C.alphaMap,wt=C.alphaTest>0,Ut=!!C.alphaHash,te=!!C.extensions;let He=La;C.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(He=o.toneMapping);const en={shaderID:Mt,shaderType:C.type,shaderName:C.name,vertexShader:Rt,fragmentShader:q,defines:C.defines,customVertexShaderID:pt,customFragmentShaderID:St,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:zt,batchingColor:zt&&at._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&at.instanceColor!==null,instancingMorph:Qt&&at.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:gs,alphaToCoverage:!!C.alphaToCoverage,map:Me,matcap:Re,envMap:ae,envMapMode:ae&&st.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:mn,bumpMap:le,normalMap:fe,displacementMap:S&&Xt,emissiveMap:Ce,normalMapObjectSpace:fe&&C.normalMapType===aS,normalMapTangentSpace:fe&&C.normalMapType===iS,metalnessMap:Wt,roughnessMap:U,anisotropy:E,anisotropyMap:Dt,clearcoat:tt,clearcoatMap:Bt,clearcoatNormalMap:pe,clearcoatRoughnessMap:Et,dispersion:ft,iridescence:xt,iridescenceMap:Ft,iridescenceThicknessMap:Kt,sheen:dt,sheenColorMap:Vt,sheenRoughnessMap:It,specularMap:re,specularColorMap:jt,specularIntensityMap:we,transmission:Gt,transmissionMap:k,thicknessMap:Lt,gradientMap:ot,opaque:C.transparent===!1&&C.blending===fs&&C.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:Ut,combine:C.combine,mapUv:Me&&w(C.map.channel),aoMapUv:z&&w(C.aoMap.channel),lightMapUv:mn&&w(C.lightMap.channel),bumpMapUv:le&&w(C.bumpMap.channel),normalMapUv:fe&&w(C.normalMap.channel),displacementMapUv:Xt&&w(C.displacementMap.channel),emissiveMapUv:Ce&&w(C.emissiveMap.channel),metalnessMapUv:Wt&&w(C.metalnessMap.channel),roughnessMapUv:U&&w(C.roughnessMap.channel),anisotropyMapUv:Dt&&w(C.anisotropyMap.channel),clearcoatMapUv:Bt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:pe&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:It&&w(C.sheenRoughnessMap.channel),specularMapUv:re&&w(C.specularMap.channel),specularColorMapUv:jt&&w(C.specularColorMap.channel),specularIntensityMapUv:we&&w(C.specularIntensityMap.channel),transmissionMapUv:k&&w(C.transmissionMap.channel),thicknessMapUv:Lt&&w(C.thicknessMap.channel),alphaMapUv:_t&&w(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(fe||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ht.attributes.uv&&(Me||_t),fog:!!gt,useFog:C.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:at.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Tt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:Me&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===Le,decodeVideoTextureEmissive:Ce&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===Le,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ji,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:te&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&C.extensions.multiDraw===!0||zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return en.vertexUv1s=m.has(1),en.vertexUv2s=m.has(2),en.vertexUv3s=m.has(3),m.clear(),en}function g(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)A.push(F),A.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(P(A,C),O(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function P(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function O(C,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),C.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),C.push(h.mask)}function D(C){const A=R[C.type];let F;if(A){const ut=Ti[A];F=JS.clone(ut.uniforms)}else F=C.uniforms;return F}function H(C,A){let F;for(let ut=0,at=_.length;ut<at;ut++){const gt=_[ut];if(gt.cacheKey===A){F=gt,++F.usedTimes;break}}return F===void 0&&(F=new xb(o,A,C,u),_.push(F)),F}function I(C){if(--C.usedTimes===0){const A=_.indexOf(C);_[A]=_[_.length-1],_.pop(),C.destroy()}}function B(C){p.remove(C)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:I,releaseShaderCache:B,programs:_,dispose:K}}function Tb(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function bb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function A_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function R_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v,S,y,R,w,M){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:S,material:y,groupOrder:R,renderOrder:v.renderOrder,z:w,group:M},o[e]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=y,g.groupOrder=R,g.renderOrder=v.renderOrder,g.z=w,g.group=M),e++,g}function h(v,S,y,R,w,M){const g=d(v,S,y,R,w,M);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function p(v,S,y,R,w,M){const g=d(v,S,y,R,w,M);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function m(v,S){i.length>1&&i.sort(v||bb),r.length>1&&r.sort(S||A_),l.length>1&&l.sort(S||A_)}function _(){for(let v=e,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:_,sort:m}}function Ab(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new R_,o.set(r,[d])):l>=u.length?(d=new R_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Rb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Oe};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function Cb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let wb=0;function Db(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Ub(o){const e=new Rb,i=Cb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new rt);const l=new rt,u=new tn,d=new tn;function h(m){let _=0,v=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,R=0,w=0,M=0,g=0,P=0,O=0,D=0,H=0,I=0,B=0;m.sort(Db);for(let C=0,A=m.length;C<A;C++){const F=m[C],ut=F.color,at=F.intensity,gt=F.distance,ht=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=ut.r*at,v+=ut.g*at,S+=ut.b*at;else if(F.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(F.sh.coefficients[X],at);B++}else if(F.isDirectionalLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const st=F.shadow,j=i.get(F);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=F.shadow.matrix,P++}r.directional[y]=X,y++}else if(F.isSpotLight){const X=e.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(ut).multiplyScalar(at),X.distance=gt,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,r.spot[w]=X;const st=F.shadow;if(F.map&&(r.spotLightMap[H]=F.map,H++,st.updateMatrices(F),F.castShadow&&I++),r.spotLightMatrix[w]=st.matrix,F.castShadow){const j=i.get(F);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,r.spotShadow[w]=j,r.spotShadowMap[w]=ht,D++}w++}else if(F.isRectAreaLight){const X=e.get(F);X.color.copy(ut).multiplyScalar(at),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=X,M++}else if(F.isPointLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){const st=F.shadow,j=i.get(F);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,j.shadowCameraNear=st.camera.near,j.shadowCameraFar=st.camera.far,r.pointShadow[R]=j,r.pointShadowMap[R]=ht,r.pointShadowMatrix[R]=F.shadow.matrix,O++}r.point[R]=X,R++}else if(F.isHemisphereLight){const X=e.get(F);X.skyColor.copy(F.color).multiplyScalar(at),X.groundColor.copy(F.groundColor).multiplyScalar(at),r.hemi[g]=X,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==y||K.pointLength!==R||K.spotLength!==w||K.rectAreaLength!==M||K.hemiLength!==g||K.numDirectionalShadows!==P||K.numPointShadows!==O||K.numSpotShadows!==D||K.numSpotMaps!==H||K.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=M,r.point.length=R,r.hemi.length=g,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=B,K.directionalLength=y,K.pointLength=R,K.spotLength=w,K.rectAreaLength=M,K.hemiLength=g,K.numDirectionalShadows=P,K.numPointShadows=O,K.numSpotShadows=D,K.numSpotMaps=H,K.numLightProbes=B,r.version=wb++)}function p(m,_){let v=0,S=0,y=0,R=0,w=0;const M=_.matrixWorldInverse;for(let g=0,P=m.length;g<P;g++){const O=m[g];if(O.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(O.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const D=r.rectArea[R];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),d.identity(),u.copy(O.matrixWorld),u.premultiply(M),d.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),R++}else if(O.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:h,setupView:p,state:r}}function C_(o){const e=new Ub(o),i=[],r=[];function l(_){m.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){e.setup(i)}function p(_){e.setupView(i,_)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:d}}function Nb(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new C_(o),e.set(l,[h])):u>=d.length?(h=new C_(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ob=`uniform sampler2D shadow_pass;
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
}`;function Pb(o,e,i){let r=new J_;const l=new ze,u=new ze,d=new je,h=new oM({depthPacking:nS}),p=new lM,m={},_=i.maxTextureSize,v={[Oa]:Bn,[Bn]:Oa,[Ji]:Ji},S=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Lb,fragmentShader:Ob}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const R=new za;R.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ai(R,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w_;let g=this.type;this.render=function(I,B,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(Na),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const at=g!==Qi&&this.type===Qi,gt=g===Qi&&this.type!==Qi;for(let ht=0,X=I.length;ht<X;ht++){const st=I[ht],j=st.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Mt=j.getFrameExtents();if(l.multiply(Mt),u.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/Mt.x),l.x=u.x*Mt.x,j.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/Mt.y),l.y=u.y*Mt.y,j.mapSize.y=u.y)),j.map===null||at===!0||gt===!0){const it=this.type!==Qi?{minFilter:_i,magFilter:_i}:{};j.map!==null&&j.map.dispose(),j.map=new gr(l.x,l.y,it),j.map.texture.name=st.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const N=j.getViewportCount();for(let it=0;it<N;it++){const Tt=j.getViewport(it);d.set(u.x*Tt.x,u.y*Tt.y,u.x*Tt.z,u.y*Tt.w),ut.viewport(d),j.updateMatrices(st,it),r=j.getFrustum(),D(B,K,j.camera,st,this.type)}j.isPointLightShadow!==!0&&this.type===Qi&&P(j,K),j.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(C,A,F)};function P(I,B){const K=e.update(w);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new gr(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(B,null,K,S,w,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(B,null,K,y,w,null)}function O(I,B,K,C){let A=null;const F=K.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)A=F;else if(A=K.isPointLight===!0?p:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ut=A.uuid,at=B.uuid;let gt=m[ut];gt===void 0&&(gt={},m[ut]=gt);let ht=gt[at];ht===void 0&&(ht=A.clone(),gt[at]=ht,B.addEventListener("dispose",H)),A=ht}if(A.visible=B.visible,A.wireframe=B.wireframe,C===Qi?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:v[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ut=o.properties.get(A);ut.light=K}return A}function D(I,B,K,C,A){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===Qi)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld);const at=e.update(I),gt=I.material;if(Array.isArray(gt)){const ht=at.groups;for(let X=0,st=ht.length;X<st;X++){const j=ht[X],Mt=gt[j.materialIndex];if(Mt&&Mt.visible){const N=O(I,Mt,C,A);I.onBeforeShadow(o,I,B,K,at,N,j),o.renderBufferDirect(K,null,at,N,I,j),I.onAfterShadow(o,I,B,K,at,N,j)}}}else if(gt.visible){const ht=O(I,gt,C,A);I.onBeforeShadow(o,I,B,K,at,ht,null),o.renderBufferDirect(K,null,at,ht,I,null),I.onAfterShadow(o,I,B,K,at,ht,null)}}const ut=I.children;for(let at=0,gt=ut.length;at<gt;at++)D(ut[at],B,K,C,A)}function H(I){I.target.removeEventListener("dispose",H);for(const K in m){const C=m[K],A=I.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const zb={[od]:ld,[cd]:dd,[ud]:hd,[hs]:fd,[ld]:od,[dd]:cd,[hd]:ud,[fd]:hs};function Bb(o,e){function i(){let k=!1;const Lt=new je;let ot=null;const _t=new je(0,0,0,0);return{setMask:function(wt){ot!==wt&&!k&&(o.colorMask(wt,wt,wt,wt),ot=wt)},setLocked:function(wt){k=wt},setClear:function(wt,Ut,te,He,en){en===!0&&(wt*=He,Ut*=He,te*=He),Lt.set(wt,Ut,te,He),_t.equals(Lt)===!1&&(o.clearColor(wt,Ut,te,He),_t.copy(Lt))},reset:function(){k=!1,ot=null,_t.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,ot=null,_t=null,wt=null;return{setReversed:function(Ut){if(Lt!==Ut){const te=e.get("EXT_clip_control");Ut?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),Lt=Ut;const He=wt;wt=null,this.setClear(He)}},getReversed:function(){return Lt},setTest:function(Ut){Ut?bt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(Ut){ot!==Ut&&!k&&(o.depthMask(Ut),ot=Ut)},setFunc:function(Ut){if(Lt&&(Ut=zb[Ut]),_t!==Ut){switch(Ut){case od:o.depthFunc(o.NEVER);break;case ld:o.depthFunc(o.ALWAYS);break;case cd:o.depthFunc(o.LESS);break;case hs:o.depthFunc(o.LEQUAL);break;case ud:o.depthFunc(o.EQUAL);break;case fd:o.depthFunc(o.GEQUAL);break;case dd:o.depthFunc(o.GREATER);break;case hd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ut}},setLocked:function(Ut){k=Ut},setClear:function(Ut){wt!==Ut&&(Lt&&(Ut=1-Ut),o.clearDepth(Ut),wt=Ut)},reset:function(){k=!1,ot=null,_t=null,wt=null,Lt=!1}}}function l(){let k=!1,Lt=null,ot=null,_t=null,wt=null,Ut=null,te=null,He=null,en=null;return{setTest:function(ye){k||(ye?bt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(ye){Lt!==ye&&!k&&(o.stencilMask(ye),Lt=ye)},setFunc:function(ye,bn,An){(ot!==ye||_t!==bn||wt!==An)&&(o.stencilFunc(ye,bn,An),ot=ye,_t=bn,wt=An)},setOp:function(ye,bn,An){(Ut!==ye||te!==bn||He!==An)&&(o.stencilOp(ye,bn,An),Ut=ye,te=bn,He=An)},setLocked:function(ye){k=ye},setClear:function(ye){en!==ye&&(o.clearStencil(ye),en=ye)},reset:function(){k=!1,Lt=null,ot=null,_t=null,wt=null,Ut=null,te=null,He=null,en=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let _={},v={},S=new WeakMap,y=[],R=null,w=!1,M=null,g=null,P=null,O=null,D=null,H=null,I=null,B=new Oe(0,0,0),K=0,C=!1,A=null,F=null,ut=null,at=null,gt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,st=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=st>=1):j.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=st>=2);let Mt=null,N={};const it=o.getParameter(o.SCISSOR_BOX),Tt=o.getParameter(o.VIEWPORT),Rt=new je().fromArray(it),q=new je().fromArray(Tt);function pt(k,Lt,ot,_t){const wt=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(k,Ut),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let te=0;te<ot;te++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Lt+te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return Ut}const St={};St[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),bt(o.DEPTH_TEST),d.setFunc(hs),le(!1),fe(Lg),bt(o.CULL_FACE),z(Na);function bt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Ct(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Qt(k,Lt){return v[k]!==Lt?(o.bindFramebuffer(k,Lt),v[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function zt(k,Lt){let ot=y,_t=!1;if(k){ot=S.get(Lt),ot===void 0&&(ot=[],S.set(Lt,ot));const wt=k.textures;if(ot.length!==wt.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,te=wt.length;Ut<te;Ut++)ot[Ut]=o.COLOR_ATTACHMENT0+Ut;ot.length=wt.length,_t=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ot)}function Me(k){return R!==k?(o.useProgram(k),R=k,!0):!1}const Re={[fr]:o.FUNC_ADD,[Cx]:o.FUNC_SUBTRACT,[wx]:o.FUNC_REVERSE_SUBTRACT};Re[Dx]=o.MIN,Re[Ux]=o.MAX;const ae={[Nx]:o.ZERO,[Lx]:o.ONE,[Ox]:o.SRC_COLOR,[rd]:o.SRC_ALPHA,[Hx]:o.SRC_ALPHA_SATURATE,[Fx]:o.DST_COLOR,[zx]:o.DST_ALPHA,[Px]:o.ONE_MINUS_SRC_COLOR,[sd]:o.ONE_MINUS_SRC_ALPHA,[Ix]:o.ONE_MINUS_DST_COLOR,[Bx]:o.ONE_MINUS_DST_ALPHA,[Gx]:o.CONSTANT_COLOR,[Vx]:o.ONE_MINUS_CONSTANT_COLOR,[kx]:o.CONSTANT_ALPHA,[Xx]:o.ONE_MINUS_CONSTANT_ALPHA};function z(k,Lt,ot,_t,wt,Ut,te,He,en,ye){if(k===Na){w===!0&&(Ct(o.BLEND),w=!1);return}if(w===!1&&(bt(o.BLEND),w=!0),k!==Rx){if(k!==M||ye!==C){if((g!==fr||D!==fr)&&(o.blendEquation(o.FUNC_ADD),g=fr,D=fr),ye)switch(k){case fs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Og:o.blendFunc(o.ONE,o.ONE);break;case Pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case fs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Og:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,O=null,H=null,I=null,B.set(0,0,0),K=0,M=k,C=ye}return}wt=wt||Lt,Ut=Ut||ot,te=te||_t,(Lt!==g||wt!==D)&&(o.blendEquationSeparate(Re[Lt],Re[wt]),g=Lt,D=wt),(ot!==P||_t!==O||Ut!==H||te!==I)&&(o.blendFuncSeparate(ae[ot],ae[_t],ae[Ut],ae[te]),P=ot,O=_t,H=Ut,I=te),(He.equals(B)===!1||en!==K)&&(o.blendColor(He.r,He.g,He.b,en),B.copy(He),K=en),M=k,C=!1}function mn(k,Lt){k.side===Ji?Ct(o.CULL_FACE):bt(o.CULL_FACE);let ot=k.side===Bn;Lt&&(ot=!ot),le(ot),k.blending===fs&&k.transparent===!1?z(Na):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),u.setMask(k.colorWrite);const _t=k.stencilWrite;h.setTest(_t),_t&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(k){A!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),A=k)}function fe(k){k!==Tx?(bt(o.CULL_FACE),k!==F&&(k===Lg?o.cullFace(o.BACK):k===bx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),F=k}function Xt(k){k!==ut&&(X&&o.lineWidth(k),ut=k)}function Ce(k,Lt,ot){k?(bt(o.POLYGON_OFFSET_FILL),(at!==Lt||gt!==ot)&&(o.polygonOffset(Lt,ot),at=Lt,gt=ot)):Ct(o.POLYGON_OFFSET_FILL)}function Wt(k){k?bt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function U(k){k===void 0&&(k=o.TEXTURE0+ht-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function E(k,Lt,ot){ot===void 0&&(Mt===null?ot=o.TEXTURE0+ht-1:ot=Mt);let _t=N[ot];_t===void 0&&(_t={type:void 0,texture:void 0},N[ot]=_t),(_t.type!==k||_t.texture!==Lt)&&(Mt!==ot&&(o.activeTexture(ot),Mt=ot),o.bindTexture(k,Lt||St[k]),_t.type=k,_t.texture=Lt)}function tt(){const k=N[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ft(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(k){Rt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Rt.copy(k))}function It(k){q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function re(k,Lt){let ot=m.get(Lt);ot===void 0&&(ot=new WeakMap,m.set(Lt,ot));let _t=ot.get(k);_t===void 0&&(_t=o.getUniformBlockIndex(Lt,k.name),ot.set(k,_t))}function jt(k,Lt){const _t=m.get(Lt).get(k);p.get(Lt)!==_t&&(o.uniformBlockBinding(Lt,_t,k.__bindingPointIndex),p.set(Lt,_t))}function we(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Mt=null,N={},v={},S=new WeakMap,y=[],R=null,w=!1,M=null,g=null,P=null,O=null,D=null,H=null,I=null,B=new Oe(0,0,0),K=0,C=!1,A=null,F=null,ut=null,at=null,gt=null,Rt.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:bt,disable:Ct,bindFramebuffer:Qt,drawBuffers:zt,useProgram:Me,setBlending:z,setMaterial:mn,setFlipSided:le,setCullFace:fe,setLineWidth:Xt,setPolygonOffset:Ce,setScissorTest:Wt,activeTexture:U,bindTexture:E,unbindTexture:tt,compressedTexImage2D:ft,compressedTexImage3D:xt,texImage2D:Ft,texImage3D:Kt,updateUBOMapping:re,uniformBlockBinding:jt,texStorage2D:pe,texStorage3D:Et,texSubImage2D:dt,texSubImage3D:Gt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Bt,scissor:Vt,viewport:It,reset:we}}function Fb(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ze,_=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(U,E){return y?new OffscreenCanvas(U,E):_c("canvas")}function w(U,E,tt){let ft=1;const xt=Wt(U);if((xt.width>tt||xt.height>tt)&&(ft=tt/Math.max(xt.width,xt.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(ft*xt.width),Gt=Math.floor(ft*xt.height);v===void 0&&(v=R(dt,Gt));const Dt=E?R(dt,Gt):v;return Dt.width=dt,Dt.height=Gt,Dt.getContext("2d").drawImage(U,0,0,dt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+dt+"x"+Gt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function M(U){return U.generateMipmaps}function g(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,E,tt,ft,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=E;if(E===o.RED&&(tt===o.FLOAT&&(dt=o.R32F),tt===o.HALF_FLOAT&&(dt=o.R16F),tt===o.UNSIGNED_BYTE&&(dt=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(dt=o.R8UI),tt===o.UNSIGNED_SHORT&&(dt=o.R16UI),tt===o.UNSIGNED_INT&&(dt=o.R32UI),tt===o.BYTE&&(dt=o.R8I),tt===o.SHORT&&(dt=o.R16I),tt===o.INT&&(dt=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(dt=o.RG32F),tt===o.HALF_FLOAT&&(dt=o.RG16F),tt===o.UNSIGNED_BYTE&&(dt=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(dt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(dt=o.RG16UI),tt===o.UNSIGNED_INT&&(dt=o.RG32UI),tt===o.BYTE&&(dt=o.RG8I),tt===o.SHORT&&(dt=o.RG16I),tt===o.INT&&(dt=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),tt===o.UNSIGNED_INT&&(dt=o.RGB32UI),tt===o.BYTE&&(dt=o.RGB8I),tt===o.SHORT&&(dt=o.RGB16I),tt===o.INT&&(dt=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(dt=o.RGBA32UI),tt===o.BYTE&&(dt=o.RGBA8I),tt===o.SHORT&&(dt=o.RGBA16I),tt===o.INT&&(dt=o.RGBA32I)),E===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),E===o.RGBA){const Gt=xt?mc:Ae.getTransfer(ft);tt===o.FLOAT&&(dt=o.RGBA32F),tt===o.HALF_FLOAT&&(dt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(dt=Gt===Le?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function D(U,E){let tt;return U?E===null||E===mr||E===Ao?tt=o.DEPTH24_STENCIL8:E===$i?tt=o.DEPTH32F_STENCIL8:E===bo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===mr||E===Ao?tt=o.DEPTH_COMPONENT24:E===$i?tt=o.DEPTH_COMPONENT32F:E===bo&&(tt=o.DEPTH_COMPONENT16),tt}function H(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==_i&&U.minFilter!==bi?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function I(U){const E=U.target;E.removeEventListener("dispose",I),K(E),E.isVideoTexture&&_.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),A(E)}function K(U){const E=r.get(U);if(E.__webglInit===void 0)return;const tt=U.source,ft=S.get(tt);if(ft){const xt=ft[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(U),Object.keys(ft).length===0&&S.delete(tt)}r.remove(U)}function C(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const tt=U.source,ft=S.get(tt);delete ft[E.__cacheKey],d.memory.textures--}function A(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let xt=0;xt<E.__webglFramebuffer[ft].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[ft][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=U.textures;for(let ft=0,xt=tt.length;ft<xt;ft++){const dt=r.get(tt[ft]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),d.memory.textures--),r.remove(tt[ft])}r.remove(U)}let F=0;function ut(){F=0}function at(){const U=F;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function gt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ht(U,E){const tt=r.get(U);if(U.isVideoTexture&&Xt(U),U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){const ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(tt,U,E);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function X(U,E){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){q(tt,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function st(U,E){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){q(tt,U,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function j(U,E){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){pt(tt,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const Mt={[gd]:o.REPEAT,[hr]:o.CLAMP_TO_EDGE,[_d]:o.MIRRORED_REPEAT},N={[_i]:o.NEAREST,[tS]:o.NEAREST_MIPMAP_NEAREST,[Hl]:o.NEAREST_MIPMAP_LINEAR,[bi]:o.LINEAR,[Uf]:o.LINEAR_MIPMAP_NEAREST,[pr]:o.LINEAR_MIPMAP_LINEAR},it={[rS]:o.NEVER,[fS]:o.ALWAYS,[sS]:o.LESS,[V_]:o.LEQUAL,[oS]:o.EQUAL,[uS]:o.GEQUAL,[lS]:o.GREATER,[cS]:o.NOTEQUAL};function Tt(U,E){if(E.type===$i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bi||E.magFilter===Uf||E.magFilter===Hl||E.magFilter===pr||E.minFilter===bi||E.minFilter===Uf||E.minFilter===Hl||E.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Mt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Mt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Mt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,N[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_i||E.minFilter!==Hl&&E.minFilter!==pr||E.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(U,E){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",I));const ft=E.source;let xt=S.get(ft);xt===void 0&&(xt={},S.set(ft,xt));const dt=gt(E);if(dt!==U.__cacheKey){xt[dt]===void 0&&(xt[dt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,tt=!0),xt[dt].usedTimes++;const Gt=xt[U.__cacheKey];Gt!==void 0&&(xt[U.__cacheKey].usedTimes--,Gt.usedTimes===0&&C(E)),U.__cacheKey=dt,U.__webglTexture=xt[dt].texture}return tt}function q(U,E,tt){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const xt=Rt(U,E),dt=E.source;i.bindTexture(ft,U.__webglTexture,o.TEXTURE0+tt);const Gt=r.get(dt);if(dt.version!==Gt.__version||xt===!0){i.activeTexture(o.TEXTURE0+tt);const Dt=Ae.getPrimaries(Ae.workingColorSpace),Bt=E.colorSpace===Ua?null:Ae.getPrimaries(E.colorSpace),pe=E.colorSpace===Ua||Dt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Et=w(E.image,!1,l.maxTextureSize);Et=Ce(E,Et);const Ft=u.convert(E.format,E.colorSpace),Kt=u.convert(E.type);let Vt=O(E.internalFormat,Ft,Kt,E.colorSpace,E.isVideoTexture);Tt(ft,E);let It;const re=E.mipmaps,jt=E.isVideoTexture!==!0,we=Gt.__version===void 0||xt===!0,k=dt.dataReady,Lt=H(E,Et);if(E.isDepthTexture)Vt=D(E.format===Co,E.type),we&&(jt?i.texStorage2D(o.TEXTURE_2D,1,Vt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Et.width,Et.height,0,Ft,Kt,null));else if(E.isDataTexture)if(re.length>0){jt&&we&&i.texStorage2D(o.TEXTURE_2D,Lt,Vt,re[0].width,re[0].height);for(let ot=0,_t=re.length;ot<_t;ot++)It=re[ot],jt?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,It.width,It.height,Ft,Kt,It.data):i.texImage2D(o.TEXTURE_2D,ot,Vt,It.width,It.height,0,Ft,Kt,It.data);E.generateMipmaps=!1}else jt?(we&&i.texStorage2D(o.TEXTURE_2D,Lt,Vt,Et.width,Et.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et.width,Et.height,Ft,Kt,Et.data)):i.texImage2D(o.TEXTURE_2D,0,Vt,Et.width,Et.height,0,Ft,Kt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Vt,re[0].width,re[0].height,Et.depth);for(let ot=0,_t=re.length;ot<_t;ot++)if(It=re[ot],E.format!==gi)if(Ft!==null)if(jt){if(k)if(E.layerUpdates.size>0){const wt=a_(It.width,It.height,E.format,E.type);for(const Ut of E.layerUpdates){const te=It.data.subarray(Ut*wt/It.data.BYTES_PER_ELEMENT,(Ut+1)*wt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Ut,It.width,It.height,1,Ft,te)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,It.width,It.height,Et.depth,Ft,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Vt,It.width,It.height,Et.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,It.width,It.height,Et.depth,Ft,Kt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Vt,It.width,It.height,Et.depth,0,Ft,Kt,It.data)}else{jt&&we&&i.texStorage2D(o.TEXTURE_2D,Lt,Vt,re[0].width,re[0].height);for(let ot=0,_t=re.length;ot<_t;ot++)It=re[ot],E.format!==gi?Ft!==null?jt?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,It.width,It.height,Ft,It.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Vt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,It.width,It.height,Ft,Kt,It.data):i.texImage2D(o.TEXTURE_2D,ot,Vt,It.width,It.height,0,Ft,Kt,It.data)}else if(E.isDataArrayTexture)if(jt){if(we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Vt,Et.width,Et.height,Et.depth),k)if(E.layerUpdates.size>0){const ot=a_(Et.width,Et.height,E.format,E.type);for(const _t of E.layerUpdates){const wt=Et.data.subarray(_t*ot/Et.data.BYTES_PER_ELEMENT,(_t+1)*ot/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Ft,Kt,wt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Ft,Kt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Et.width,Et.height,Et.depth,0,Ft,Kt,Et.data);else if(E.isData3DTexture)jt?(we&&i.texStorage3D(o.TEXTURE_3D,Lt,Vt,Et.width,Et.height,Et.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Ft,Kt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Et.width,Et.height,Et.depth,0,Ft,Kt,Et.data);else if(E.isFramebufferTexture){if(we)if(jt)i.texStorage2D(o.TEXTURE_2D,Lt,Vt,Et.width,Et.height);else{let ot=Et.width,_t=Et.height;for(let wt=0;wt<Lt;wt++)i.texImage2D(o.TEXTURE_2D,wt,Vt,ot,_t,0,Ft,Kt,null),ot>>=1,_t>>=1}}else if(re.length>0){if(jt&&we){const ot=Wt(re[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Vt,ot.width,ot.height)}for(let ot=0,_t=re.length;ot<_t;ot++)It=re[ot],jt?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ft,Kt,It):i.texImage2D(o.TEXTURE_2D,ot,Vt,Ft,Kt,It);E.generateMipmaps=!1}else if(jt){if(we){const ot=Wt(Et);i.texStorage2D(o.TEXTURE_2D,Lt,Vt,ot.width,ot.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,Kt,Et)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Ft,Kt,Et);M(E)&&g(ft),Gt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function pt(U,E,tt){if(E.image.length!==6)return;const ft=Rt(U,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+tt);const dt=r.get(xt);if(xt.version!==dt.__version||ft===!0){i.activeTexture(o.TEXTURE0+tt);const Gt=Ae.getPrimaries(Ae.workingColorSpace),Dt=E.colorSpace===Ua?null:Ae.getPrimaries(E.colorSpace),Bt=E.colorSpace===Ua||Gt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const pe=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Ft=[];for(let _t=0;_t<6;_t++)!pe&&!Et?Ft[_t]=w(E.image[_t],!0,l.maxCubemapSize):Ft[_t]=Et?E.image[_t].image:E.image[_t],Ft[_t]=Ce(E,Ft[_t]);const Kt=Ft[0],Vt=u.convert(E.format,E.colorSpace),It=u.convert(E.type),re=O(E.internalFormat,Vt,It,E.colorSpace),jt=E.isVideoTexture!==!0,we=dt.__version===void 0||ft===!0,k=xt.dataReady;let Lt=H(E,Kt);Tt(o.TEXTURE_CUBE_MAP,E);let ot;if(pe){jt&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,re,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){ot=Ft[_t].mipmaps;for(let wt=0;wt<ot.length;wt++){const Ut=ot[wt];E.format!==gi?Vt!==null?jt?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Vt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,re,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Vt,It,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,re,Ut.width,Ut.height,0,Vt,It,Ut.data)}}}else{if(ot=E.mipmaps,jt&&we){ot.length>0&&Lt++;const _t=Wt(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){jt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft[_t].width,Ft[_t].height,Vt,It,Ft[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Ft[_t].width,Ft[_t].height,0,Vt,It,Ft[_t].data);for(let wt=0;wt<ot.length;wt++){const te=ot[wt].image[_t].image;jt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,te.width,te.height,Vt,It,te.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,re,te.width,te.height,0,Vt,It,te.data)}}else{jt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,It,Ft[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Vt,It,Ft[_t]);for(let wt=0;wt<ot.length;wt++){const Ut=ot[wt];jt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,Vt,It,Ut.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,re,Vt,It,Ut.image[_t])}}}M(E)&&g(o.TEXTURE_CUBE_MAP),dt.__version=xt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function St(U,E,tt,ft,xt,dt){const Gt=u.convert(tt.format,tt.colorSpace),Dt=u.convert(tt.type),Bt=O(tt.internalFormat,Gt,Dt,tt.colorSpace),pe=r.get(E),Et=r.get(tt);if(Et.__renderTarget=E,!pe.__hasExternalTextures){const Ft=Math.max(1,E.width>>dt),Kt=Math.max(1,E.height>>dt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,dt,Bt,Ft,Kt,E.depth,0,Gt,Dt,null):i.texImage2D(xt,dt,Bt,Ft,Kt,0,Gt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),fe(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,xt,Et.__webglTexture,0,le(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,xt,Et.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(U,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ft=E.depthTexture,xt=ft&&ft.isDepthTexture?ft.type:null,dt=D(E.stencilBuffer,xt),Gt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=le(E);fe(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,dt,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,dt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,dt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Gt,o.RENDERBUFFER,U)}else{const ft=E.textures;for(let xt=0;xt<ft.length;xt++){const dt=ft[xt],Gt=u.convert(dt.format,dt.colorSpace),Dt=u.convert(dt.type),Bt=O(dt.internalFormat,Gt,Dt,dt.colorSpace),pe=le(E);tt&&fe(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,Bt,E.width,E.height):fe(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,Bt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ct(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const xt=ft.__webglTexture,dt=le(E);if(E.depthTexture.format===Ro)fe(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(E.depthTexture.format===Co)fe(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Qt(U){const E=r.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",xt)};ft.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ft}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ct(E.__webglFramebuffer,U)}else if(tt){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),bt(E.__webglDepthbuffer[ft],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),bt(E.__webglDepthbuffer,U,!1);else{const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,xt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(U,E,tt){const ft=r.get(U);E!==void 0&&St(ft.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Qt(U)}function Me(U){const E=U.texture,tt=r.get(U),ft=r.get(E);U.addEventListener("dispose",B);const xt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,Gt=xt.length>1;if(Gt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,d.memory.textures++),dt){tt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Dt]=[];for(let Bt=0;Bt<E.mipmaps.length;Bt++)tt.__webglFramebuffer[Dt][Bt]=o.createFramebuffer()}else tt.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)tt.__webglFramebuffer[Dt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Gt)for(let Dt=0,Bt=xt.length;Dt<Bt;Dt++){const pe=r.get(xt[Dt]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&fe(U)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<xt.length;Dt++){const Bt=xt[Dt];tt.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt]);const pe=u.convert(Bt.format,Bt.colorSpace),Et=u.convert(Bt.type),Ft=O(Bt.internalFormat,pe,Et,Bt.colorSpace,U.isXRRenderTarget===!0),Kt=le(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Ft,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),bt(tt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),Tt(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)St(tt.__webglFramebuffer[Dt][Bt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Bt);else St(tt.__webglFramebuffer[Dt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let Dt=0,Bt=xt.length;Dt<Bt;Dt++){const pe=xt[Dt],Et=r.get(pe);i.bindTexture(o.TEXTURE_2D,Et.__webglTexture),Tt(o.TEXTURE_2D,pe),St(tt.__webglFramebuffer,U,pe,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),M(pe)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ft.__webglTexture),Tt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)St(tt.__webglFramebuffer[Bt],U,E,o.COLOR_ATTACHMENT0,Dt,Bt);else St(tt.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Dt,0);M(E)&&g(Dt),i.unbindTexture()}U.depthBuffer&&Qt(U)}function Re(U){const E=U.textures;for(let tt=0,ft=E.length;tt<ft;tt++){const xt=E[tt];if(M(xt)){const dt=P(U),Gt=r.get(xt).__webglTexture;i.bindTexture(dt,Gt),g(dt),i.unbindTexture()}}}const ae=[],z=[];function mn(U){if(U.samples>0){if(fe(U)===!1){const E=U.textures,tt=U.width,ft=U.height;let xt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Gt=r.get(U),Dt=E.length>1;if(Dt)for(let Bt=0;Bt<E.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Bt=0;Bt<E.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const pe=r.get(E[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,tt,ft,0,0,tt,ft,xt,o.NEAREST),p===!0&&(ae.length=0,z.length=0,ae.push(o.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(dt),z.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Bt=0;Bt<E.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const pe=r.get(E[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function le(U){return Math.min(l.maxSamples,U.samples)}function fe(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Xt(U){const E=d.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Ce(U,E){const tt=U.colorSpace,ft=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==gs&&tt!==Ua&&(Ae.getTransfer(tt)===Le?(ft!==gi||xt!==na)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=at,this.resetTextureUnits=ut,this.setTexture2D=ht,this.setTexture2DArray=X,this.setTexture3D=st,this.setTextureCube=j,this.rebindTextures=zt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=fe}function Ib(o,e){function i(r,l=Ua){let u;const d=Ae.getTransfer(l);if(r===na)return o.UNSIGNED_BYTE;if(r===jd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Zd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===O_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===N_)return o.BYTE;if(r===L_)return o.SHORT;if(r===bo)return o.UNSIGNED_SHORT;if(r===Yd)return o.INT;if(r===mr)return o.UNSIGNED_INT;if(r===$i)return o.FLOAT;if(r===Do)return o.HALF_FLOAT;if(r===P_)return o.ALPHA;if(r===z_)return o.RGB;if(r===gi)return o.RGBA;if(r===B_)return o.LUMINANCE;if(r===F_)return o.LUMINANCE_ALPHA;if(r===Ro)return o.DEPTH_COMPONENT;if(r===Co)return o.DEPTH_STENCIL;if(r===I_)return o.RED;if(r===Kd)return o.RED_INTEGER;if(r===H_)return o.RG;if(r===Qd)return o.RG_INTEGER;if(r===Jd)return o.RGBA_INTEGER;if(r===lc||r===cc||r===uc||r===fc)if(d===Le)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===lc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===lc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vd||r===xd||r===Sd||r===Md)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===vd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Md)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yd||r===Ed||r===Td)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===yd||r===Ed)return d===Le?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Td)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bd||r===Ad||r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Nd||r===Ld||r===Od||r===Pd||r===zd||r===Bd||r===Fd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===bd)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ad)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rd)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cd)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wd)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dd)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ud)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nd)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ld)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Od)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pd)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zd)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bd)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fd)return d===Le?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dc||r===Id||r===Hd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===dc)return d===Le?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Id)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===G_||r===Gd||r===Vd||r===kd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===dc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Gd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ao?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
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

}`;class Vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Fn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Pa({vertexShader:Hb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Sc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kb extends vs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,_=null,v=null,S=null,y=null,R=null;const w=new Vb,M=i.getContextAttributes();let g=null,P=null;const O=[],D=[],H=new ze;let I=null;const B=new si;B.viewport=new je;const K=new si;K.viewport=new je;const C=[B,K],A=new uM;let F=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pt=O[q];return pt===void 0&&(pt=new Qf,O[q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(q){let pt=O[q];return pt===void 0&&(pt=new Qf,O[q]=pt),pt.getGripSpace()},this.getHand=function(q){let pt=O[q];return pt===void 0&&(pt=new Qf,O[q]=pt),pt.getHandSpace()};function at(q){const pt=D.indexOf(q.inputSource);if(pt===-1)return;const St=O[pt];St!==void 0&&(St.update(q.inputSource,q.frame,m||d),St.dispatchEvent({type:q.type,data:q.inputSource}))}function gt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ht);for(let q=0;q<O.length;q++){const pt=D[q];pt!==null&&(D[q]=null,O[q].disconnect(pt))}F=null,ut=null,w.reset(),e.setRenderTarget(g),y=null,S=null,v=null,l=null,P=null,Rt.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,bt=null,Ct=null;M.depth&&(Ct=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?Co:Ro,bt=M.stencil?Ao:mr);const Qt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(Qt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new gr(S.textureWidth,S.textureHeight,{format:gi,type:na,depthTexture:new $_(S.textureWidth,S.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new gr(y.framebufferWidth,y.framebufferHeight,{format:gi,type:na,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Rt.setContext(l),Rt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ht(q){for(let pt=0;pt<q.removed.length;pt++){const St=q.removed[pt],bt=D.indexOf(St);bt>=0&&(D[bt]=null,O[bt].disconnect(St))}for(let pt=0;pt<q.added.length;pt++){const St=q.added[pt];let bt=D.indexOf(St);if(bt===-1){for(let Qt=0;Qt<O.length;Qt++)if(Qt>=D.length){D.push(St),bt=Qt;break}else if(D[Qt]===null){D[Qt]=St,bt=Qt;break}if(bt===-1)break}const Ct=O[bt];Ct&&Ct.connect(St)}}const X=new rt,st=new rt;function j(q,pt,St){X.setFromMatrixPosition(pt.matrixWorld),st.setFromMatrixPosition(St.matrixWorld);const bt=X.distanceTo(st),Ct=pt.projectionMatrix.elements,Qt=St.projectionMatrix.elements,zt=Ct[14]/(Ct[10]-1),Me=Ct[14]/(Ct[10]+1),Re=(Ct[9]+1)/Ct[5],ae=(Ct[9]-1)/Ct[5],z=(Ct[8]-1)/Ct[0],mn=(Qt[8]+1)/Qt[0],le=zt*z,fe=zt*mn,Xt=bt/(-z+mn),Ce=Xt*-z;if(pt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ce),q.translateZ(Xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(pt.projectionMatrix),q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Wt=zt+Xt,U=Me+Xt,E=le-Ce,tt=fe+(bt-Ce),ft=Re*Me/U*Wt,xt=ae*Me/U*Wt;q.projectionMatrix.makePerspective(E,tt,ft,xt,Wt,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Mt(q,pt){pt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let pt=q.near,St=q.far;w.texture!==null&&(w.depthNear>0&&(pt=w.depthNear),w.depthFar>0&&(St=w.depthFar)),A.near=K.near=B.near=pt,A.far=K.far=B.far=St,(F!==A.near||ut!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,ut=A.far),B.layers.mask=q.layers.mask|2,K.layers.mask=q.layers.mask|4,A.layers.mask=B.layers.mask|K.layers.mask;const bt=q.parent,Ct=A.cameras;Mt(A,bt);for(let Qt=0;Qt<Ct.length;Qt++)Mt(Ct[Qt],bt);Ct.length===2?j(A,B,K):A.projectionMatrix.copy(B.projectionMatrix),N(q,A,bt)};function N(q,pt,St){St===null?q.matrix.copy(pt.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(pt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pt.projectionMatrix),q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=wo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(S===null&&y===null))return p},this.setFoveation=function(q){p=q,S!==null&&(S.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let it=null;function Tt(q,pt){if(_=pt.getViewerPose(m||d),R=pt,_!==null){const St=_.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let bt=!1;St.length!==A.cameras.length&&(A.cameras.length=0,bt=!0);for(let zt=0;zt<St.length;zt++){const Me=St[zt];let Re=null;if(y!==null)Re=y.getViewport(Me);else{const z=v.getViewSubImage(S,Me);Re=z.viewport,zt===0&&(e.setRenderTargetTextures(P,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(P))}let ae=C[zt];ae===void 0&&(ae=new si,ae.layers.enable(zt),ae.viewport=new je,C[zt]=ae),ae.matrix.fromArray(Me.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Me.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Re.x,Re.y,Re.width,Re.height),zt===0&&(A.matrix.copy(ae.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),bt===!0&&A.cameras.push(ae)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const zt=v.getDepthInformation(St[0]);zt&&zt.isValid&&zt.texture&&w.init(e,zt,l.renderState)}}for(let St=0;St<O.length;St++){const bt=D[St],Ct=O[St];bt!==null&&Ct!==void 0&&Ct.update(bt,pt,m||d)}it&&it(q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),R=null}const Rt=new tv;Rt.setAnimationLoop(Tt),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}}const lr=new ia,Xb=new tn;function Wb(o,e){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,Z_(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,P,O,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),v(M,g)):g.isMeshPhongMaterial?(u(M,g),_(M,g)):g.isMeshStandardMaterial?(u(M,g),S(M,g),g.isMeshPhysicalMaterial&&y(M,g,D)):g.isMeshMatcapMaterial?(u(M,g),R(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),w(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(d(M,g),g.isLineDashedMaterial&&h(M,g)):g.isPointsMaterial?p(M,g,P,O):g.isSpriteMaterial?m(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===Bn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===Bn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const P=e.get(g),O=P.envMap,D=P.envMapRotation;O&&(M.envMap.value=O,lr.copy(D),lr.x*=-1,lr.y*=-1,lr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),M.envMapRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(lr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function d(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function h(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function p(M,g,P,O){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*P,M.scale.value=O*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function m(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function v(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function S(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,P){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,g){g.matcap&&(M.matcap.value=g.matcap)}function w(M,g){const P=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function qb(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,O){const D=O.program;r.uniformBlockBinding(P,D)}function m(P,O){let D=l[P.id];D===void 0&&(R(P),D=_(P),l[P.id]=D,P.addEventListener("dispose",M));const H=O.program;r.updateUBOMapping(P,H);const I=e.render.frame;u[P.id]!==I&&(S(P),u[P.id]=I)}function _(P){const O=v();P.__bindingPointIndex=O;const D=o.createBuffer(),H=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function v(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],D=P.uniforms,H=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let I=0,B=D.length;I<B;I++){const K=Array.isArray(D[I])?D[I]:[D[I]];for(let C=0,A=K.length;C<A;C++){const F=K[C];if(y(F,I,C,H)===!0){const ut=F.__offset,at=Array.isArray(F.value)?F.value:[F.value];let gt=0;for(let ht=0;ht<at.length;ht++){const X=at[ht],st=w(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,ut+gt,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,gt),gt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,O,D,H){const I=P.value,B=O+"_"+D;if(H[B]===void 0)return typeof I=="number"||typeof I=="boolean"?H[B]=I:H[B]=I.clone(),!0;{const K=H[B];if(typeof I=="number"||typeof I=="boolean"){if(K!==I)return H[B]=I,!0}else if(K.equals(I)===!1)return K.copy(I),!0}return!1}function R(P){const O=P.uniforms;let D=0;const H=16;for(let B=0,K=O.length;B<K;B++){const C=Array.isArray(O[B])?O[B]:[O[B]];for(let A=0,F=C.length;A<F;A++){const ut=C[A],at=Array.isArray(ut.value)?ut.value:[ut.value];for(let gt=0,ht=at.length;gt<ht;gt++){const X=at[gt],st=w(X),j=D%H,Mt=j%st.boundary,N=j+Mt;D+=Mt,N!==0&&H-N<st.storage&&(D+=H-N),ut.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=D,D+=st.storage}}}const I=D%H;return I>0&&(D+=H-I),P.__size=D,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function M(P){const O=P.target;O.removeEventListener("dispose",M);const D=d.indexOf(O.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function g(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},u={}}return{bind:p,update:m,dispose:g}}class Yb{constructor(e={}){const{canvas:i=wS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const R=new Uint32Array(4),w=new Int32Array(4);let M=null,g=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=La,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=ri;let I=0,B=0,K=null,C=-1,A=null;const F=new je,ut=new je;let at=null;const gt=new Oe(0);let ht=0,X=i.width,st=i.height,j=1,Mt=null,N=null;const it=new je(0,0,X,st),Tt=new je(0,0,X,st);let Rt=!1;const q=new J_;let pt=!1,St=!1;const bt=new tn,Ct=new tn,Qt=new rt,zt=new je,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function ae(){return K===null?j:1}let z=r;function mn(b,W){return i.getContext(b,W)}try{const b={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),z===null){const W="webgl2";if(z=mn(W,b),z===null)throw mn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let le,fe,Xt,Ce,Wt,U,E,tt,ft,xt,dt,Gt,Dt,Bt,pe,Et,Ft,Kt,Vt,It,re,jt,we,k;function Lt(){le=new iT(z),le.init(),jt=new Ib(z,le),fe=new KE(z,le,e,jt),Xt=new Bb(z,le),fe.reverseDepthBuffer&&S&&Xt.buffers.depth.setReversed(!0),Ce=new sT(z),Wt=new Tb,U=new Fb(z,le,Xt,Wt,fe,jt,Ce),E=new JE(D),tt=new nT(D),ft=new dM(z),we=new jE(z,ft),xt=new aT(z,ft,Ce,we),dt=new lT(z,xt,ft,Ce),Vt=new oT(z,fe,U),Et=new QE(Wt),Gt=new Eb(D,E,tt,le,fe,we,Et),Dt=new Wb(D,Wt),Bt=new Ab,pe=new Nb(le),Kt=new YE(D,E,tt,Xt,dt,y,p),Ft=new Pb(D,dt,fe),k=new qb(z,Ce,fe,Xt),It=new ZE(z,le,Ce),re=new rT(z,le,Ce),Ce.programs=Gt.programs,D.capabilities=fe,D.extensions=le,D.properties=Wt,D.renderLists=Bt,D.shadowMap=Ft,D.state=Xt,D.info=Ce}Lt();const ot=new kb(D,z);this.xr=ot,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(X,st,!1))},this.getSize=function(b){return b.set(X,st)},this.setSize=function(b,W,et=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,st=W,i.width=Math.floor(b*j),i.height=Math.floor(W*j),et===!0&&(i.style.width=b+"px",i.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(X*j,st*j).floor()},this.setDrawingBufferSize=function(b,W,et){X=b,st=W,j=et,i.width=Math.floor(b*et),i.height=Math.floor(W*et),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(it)},this.setViewport=function(b,W,et,Q){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,W,et,Q),Xt.viewport(F.copy(it).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(Tt)},this.setScissor=function(b,W,et,Q){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,W,et,Q),Xt.scissor(ut.copy(Tt).multiplyScalar(j).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(b){Xt.setScissorTest(Rt=b)},this.setOpaqueSort=function(b){Mt=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,et=!0){let Q=0;if(b){let Y=!1;if(K!==null){const yt=K.texture.format;Y=yt===Jd||yt===Qd||yt===Kd}if(Y){const yt=K.texture.type,At=yt===na||yt===mr||yt===bo||yt===Ao||yt===jd||yt===Zd,Pt=Kt.getClearColor(),Ot=Kt.getClearAlpha(),ee=Pt.r,$t=Pt.g,Yt=Pt.b;At?(R[0]=ee,R[1]=$t,R[2]=Yt,R[3]=Ot,z.clearBufferuiv(z.COLOR,0,R)):(w[0]=ee,w[1]=$t,w[2]=Yt,w[3]=Ot,z.clearBufferiv(z.COLOR,0,w))}else Q|=z.COLOR_BUFFER_BIT}W&&(Q|=z.DEPTH_BUFFER_BIT),et&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Kt.dispose(),Bt.dispose(),pe.dispose(),Wt.dispose(),E.dispose(),tt.dispose(),dt.dispose(),we.dispose(),k.dispose(),Gt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Oo),ot.removeEventListener("sessionend",Ms),vi.stop()};function _t(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const b=Ce.autoReset,W=Ft.enabled,et=Ft.autoUpdate,Q=Ft.needsUpdate,Y=Ft.type;Lt(),Ce.autoReset=b,Ft.enabled=W,Ft.autoUpdate=et,Ft.needsUpdate=Q,Ft.type=Y}function Ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){const W=b.target;W.removeEventListener("dispose",te),He(W)}function He(b){en(b),Wt.remove(b)}function en(b){const W=Wt.get(b).programs;W!==void 0&&(W.forEach(function(et){Gt.releaseProgram(et)}),b.isShaderMaterial&&Gt.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,et,Q,Y,yt){W===null&&(W=Me);const At=Y.isMesh&&Y.matrixWorld.determinant()<0,Pt=yc(b,W,et,Q,Y);Xt.setMaterial(Q,At);let Ot=et.index,ee=1;if(Q.wireframe===!0){if(Ot=xt.getWireframeAttribute(et),Ot===void 0)return;ee=2}const $t=et.drawRange,Yt=et.attributes.position;let ge=$t.start*ee,_e=($t.start+$t.count)*ee;yt!==null&&(ge=Math.max(ge,yt.start*ee),_e=Math.min(_e,(yt.start+yt.count)*ee)),Ot!==null?(ge=Math.max(ge,0),_e=Math.min(_e,Ot.count)):Yt!=null&&(ge=Math.max(ge,0),_e=Math.min(_e,Yt.count));const Ie=_e-ge;if(Ie<0||Ie===1/0)return;we.setup(Y,Q,Pt,et,Ot);let Ee,ne=It;if(Ot!==null&&(Ee=ft.get(Ot),ne=re,ne.setIndex(Ee)),Y.isMesh)Q.wireframe===!0?(Xt.setLineWidth(Q.wireframeLinewidth*ae()),ne.setMode(z.LINES)):ne.setMode(z.TRIANGLES);else if(Y.isLine){let Zt=Q.linewidth;Zt===void 0&&(Zt=1),Xt.setLineWidth(Zt*ae()),Y.isLineSegments?ne.setMode(z.LINES):Y.isLineLoop?ne.setMode(z.LINE_LOOP):ne.setMode(z.LINE_STRIP)}else Y.isPoints?ne.setMode(z.POINTS):Y.isSprite&&ne.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)hc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ne.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Zt=Y._multiDrawStarts,rn=Y._multiDrawCounts,ve=Y._multiDrawCount,Ln=Ot?ft.get(Ot).bytesPerElement:1,oi=Wt.get(Q).currentProgram.getUniforms();for(let Rn=0;Rn<ve;Rn++)oi.setValue(z,"_gl_DrawID",Rn),ne.render(Zt[Rn]/Ln,rn[Rn])}else if(Y.isInstancedMesh)ne.renderInstances(ge,Ie,Y.count);else if(et.isInstancedBufferGeometry){const Zt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,rn=Math.min(et.instanceCount,Zt);ne.renderInstances(ge,Ie,rn)}else ne.render(ge,Ie)};function ye(b,W,et){b.transparent===!0&&b.side===Ji&&b.forceSinglePass===!1?(b.side=Bn,b.needsUpdate=!0,an(b,W,et),b.side=Oa,b.needsUpdate=!0,an(b,W,et),b.side=Ji):an(b,W,et)}this.compile=function(b,W,et=null){et===null&&(et=b),g=pe.get(et),g.init(W),O.push(g),et.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),b!==et&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const Q=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const yt=Y.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){const Pt=yt[At];ye(Pt,et,Y),Q.add(Pt)}else ye(yt,et,Y),Q.add(yt)}),g=O.pop(),Q},this.compileAsync=function(b,W,et=null){const Q=this.compile(b,W,et);return new Promise(Y=>{function yt(){if(Q.forEach(function(At){Wt.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){Y(b);return}setTimeout(yt,10)}le.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let bn=null;function An(b){bn&&bn(b)}function Oo(){vi.stop()}function Ms(){vi.start()}const vi=new tv;vi.setAnimationLoop(An),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(b){bn=b,ot.setAnimationLoop(b),b===null?vi.stop():vi.start()},ot.addEventListener("sessionstart",Oo),ot.addEventListener("sessionend",Ms),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,W,K),g=pe.get(b,O.length),g.init(W),O.push(g),Ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Ct),St=this.localClippingEnabled,pt=Et.init(this.clippingPlanes,St),M=Bt.get(b,P.length),M.init(),P.push(M),ot.enabled===!0&&ot.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&_r(yt,W,-1/0,D.sortObjects)}_r(b,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(Mt,N),Re=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Re&&Kt.addToRenderList(M,b),this.info.render.frame++,pt===!0&&Et.beginShadows();const et=g.state.shadowsArray;Ft.render(et,b,W),pt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=M.opaque,Y=M.transmissive;if(g.setupLights(),W.isArrayCamera){const yt=W.cameras;if(Y.length>0)for(let At=0,Pt=yt.length;At<Pt;At++){const Ot=yt[At];Po(Q,Y,b,Ot)}Re&&Kt.render(b);for(let At=0,Pt=yt.length;At<Pt;At++){const Ot=yt[At];ys(M,b,Ot,Ot.viewport)}}else Y.length>0&&Po(Q,Y,b,W),Re&&Kt.render(b),ys(M,b,W);K!==null&&B===0&&(U.updateMultisampleRenderTarget(K),U.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(D,b,W),we.resetDefaultState(),C=-1,A=null,O.pop(),O.length>0?(g=O[O.length-1],pt===!0&&Et.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function _r(b,W,et,Q){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)et=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){Q&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);const At=dt.update(b),Pt=b.material;Pt.visible&&M.push(b,At,Pt,et,zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const At=dt.update(b),Pt=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),zt.copy(At.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Ot=At.groups;for(let ee=0,$t=Ot.length;ee<$t;ee++){const Yt=Ot[ee],ge=Pt[Yt.materialIndex];ge&&ge.visible&&M.push(b,At,ge,et,zt.z,Yt)}}else Pt.visible&&M.push(b,At,Pt,et,zt.z,null)}}const yt=b.children;for(let At=0,Pt=yt.length;At<Pt;At++)_r(yt[At],W,et,Q)}function ys(b,W,et,Q){const Y=b.opaque,yt=b.transmissive,At=b.transparent;g.setupLightsView(et),pt===!0&&Et.setGlobalState(D.clippingPlanes,et),Q&&Xt.viewport(F.copy(Q)),Y.length>0&&In(Y,W,et),yt.length>0&&In(yt,W,et),At.length>0&&In(At,W,et),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Po(b,W,et,Q){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new gr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Do:na,minFilter:pr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const yt=g.state.transmissionRenderTarget[Q.id],At=Q.viewport||F;yt.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget();D.setRenderTarget(yt),D.getClearColor(gt),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),Re&&Kt.render(et);const Ot=D.toneMapping;D.toneMapping=La;const ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),pt===!0&&Et.setGlobalState(D.clippingPlanes,Q),In(b,et,Q),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),le.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Yt=0,ge=W.length;Yt<ge;Yt++){const _e=W[Yt],Ie=_e.object,Ee=_e.geometry,ne=_e.material,Zt=_e.group;if(ne.side===Ji&&Ie.layers.test(Q.layers)){const rn=ne.side;ne.side=Bn,ne.needsUpdate=!0,nn(Ie,et,Q,Ee,ne,Zt),ne.side=rn,ne.needsUpdate=!0,$t=!0}}$t===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}D.setRenderTarget(Pt),D.setClearColor(gt,ht),ee!==void 0&&(Q.viewport=ee),D.toneMapping=Ot}function In(b,W,et){const Q=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,yt=b.length;Y<yt;Y++){const At=b[Y],Pt=At.object,Ot=At.geometry,ee=At.group;let $t=At.material;$t.allowOverride===!0&&Q!==null&&($t=Q),Pt.layers.test(et.layers)&&nn(Pt,W,et,Ot,$t,ee)}}function nn(b,W,et,Q,Y,yt){b.onBeforeRender(D,W,et,Q,Y,yt),b.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(D,W,et,Q,b,yt),Y.transparent===!0&&Y.side===Ji&&Y.forceSinglePass===!1?(Y.side=Bn,Y.needsUpdate=!0,D.renderBufferDirect(et,W,Q,Y,b,yt),Y.side=Oa,Y.needsUpdate=!0,D.renderBufferDirect(et,W,Q,Y,b,yt),Y.side=Ji):D.renderBufferDirect(et,W,Q,Y,b,yt),b.onAfterRender(D,W,et,Q,Y,yt)}function an(b,W,et){W.isScene!==!0&&(W=Me);const Q=Wt.get(b),Y=g.state.lights,yt=g.state.shadowsArray,At=Y.state.version,Pt=Gt.getParameters(b,Y.state,yt,W,et),Ot=Gt.getProgramCacheKey(Pt);let ee=Q.programs;Q.environment=b.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(b.isMeshStandardMaterial?tt:E).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,ee===void 0&&(b.addEventListener("dispose",te),ee=new Map,Q.programs=ee);let $t=ee.get(Ot);if($t!==void 0){if(Q.currentProgram===$t&&Q.lightsStateVersion===At)return vr(b,Pt),$t}else Pt.uniforms=Gt.getUniforms(b),b.onBeforeCompile(Pt,D),$t=Gt.acquireProgram(Pt,Ot),ee.set(Ot,$t),Q.uniforms=Pt.uniforms;const Yt=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Yt.clippingPlanes=Et.uniform),vr(b,Pt),Q.needsLights=zo(b),Q.lightsStateVersion=At,Q.needsLights&&(Yt.ambientLightColor.value=Y.state.ambient,Yt.lightProbe.value=Y.state.probe,Yt.directionalLights.value=Y.state.directional,Yt.directionalLightShadows.value=Y.state.directionalShadow,Yt.spotLights.value=Y.state.spot,Yt.spotLightShadows.value=Y.state.spotShadow,Yt.rectAreaLights.value=Y.state.rectArea,Yt.ltc_1.value=Y.state.rectAreaLTC1,Yt.ltc_2.value=Y.state.rectAreaLTC2,Yt.pointLights.value=Y.state.point,Yt.pointLightShadows.value=Y.state.pointShadow,Yt.hemisphereLights.value=Y.state.hemi,Yt.directionalShadowMap.value=Y.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Yt.spotShadowMap.value=Y.state.spotShadowMap,Yt.spotLightMatrix.value=Y.state.spotLightMatrix,Yt.spotLightMap.value=Y.state.spotLightMap,Yt.pointShadowMap.value=Y.state.pointShadowMap,Yt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=$t,Q.uniformsList=null,$t}function wi(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=pc.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function vr(b,W){const et=Wt.get(b);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function yc(b,W,et,Q,Y){W.isScene!==!0&&(W=Me),U.resetTextureUnits();const yt=W.fog,At=Q.isMeshStandardMaterial?W.environment:null,Pt=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:gs,Ot=(Q.isMeshStandardMaterial?tt:E).get(Q.envMap||At),ee=Q.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,$t=!!et.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Yt=!!et.morphAttributes.position,ge=!!et.morphAttributes.normal,_e=!!et.morphAttributes.color;let Ie=La;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ie=D.toneMapping);const Ee=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ne=Ee!==void 0?Ee.length:0,Zt=Wt.get(Q),rn=g.state.lights;if(pt===!0&&(St===!0||b!==A)){const ke=b===A&&Q.id===C;Et.setState(Q,b,ke)}let ve=!1;Q.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==rn.state.version||Zt.outputColorSpace!==Pt||Y.isBatchedMesh&&Zt.batching===!1||!Y.isBatchedMesh&&Zt.batching===!0||Y.isBatchedMesh&&Zt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Zt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Zt.instancing===!1||!Y.isInstancedMesh&&Zt.instancing===!0||Y.isSkinnedMesh&&Zt.skinning===!1||!Y.isSkinnedMesh&&Zt.skinning===!0||Y.isInstancedMesh&&Zt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Zt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Zt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Zt.instancingMorph===!1&&Y.morphTexture!==null||Zt.envMap!==Ot||Q.fog===!0&&Zt.fog!==yt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Et.numPlanes||Zt.numIntersection!==Et.numIntersection)||Zt.vertexAlphas!==ee||Zt.vertexTangents!==$t||Zt.morphTargets!==Yt||Zt.morphNormals!==ge||Zt.morphColors!==_e||Zt.toneMapping!==Ie||Zt.morphTargetsCount!==ne)&&(ve=!0):(ve=!0,Zt.__version=Q.version);let Ln=Zt.currentProgram;ve===!0&&(Ln=an(Q,W,Y));let oi=!1,Rn=!1,un=!1;const De=Ln.getUniforms(),Cn=Zt.uniforms;if(Xt.useProgram(Ln.program)&&(oi=!0,Rn=!0,un=!0),Q.id!==C&&(C=Q.id,Rn=!0),oi||A!==b){Xt.buffers.depth.getReversed()?(bt.copy(b.projectionMatrix),US(bt),NS(bt),De.setValue(z,"projectionMatrix",bt)):De.setValue(z,"projectionMatrix",b.projectionMatrix),De.setValue(z,"viewMatrix",b.matrixWorldInverse);const gn=De.map.cameraPosition;gn!==void 0&&gn.setValue(z,Qt.setFromMatrixPosition(b.matrixWorld)),fe.logarithmicDepthBuffer&&De.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&De.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Rn=!0,un=!0)}if(Y.isSkinnedMesh){De.setOptional(z,Y,"bindMatrix"),De.setOptional(z,Y,"bindMatrixInverse");const ke=Y.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),De.setValue(z,"boneTexture",ke.boneTexture,U))}Y.isBatchedMesh&&(De.setOptional(z,Y,"batchingTexture"),De.setValue(z,"batchingTexture",Y._matricesTexture,U),De.setOptional(z,Y,"batchingIdTexture"),De.setValue(z,"batchingIdTexture",Y._indirectTexture,U),De.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&De.setValue(z,"batchingColorTexture",Y._colorsTexture,U));const Sn=et.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Vt.update(Y,et,Ln),(Rn||Zt.receiveShadow!==Y.receiveShadow)&&(Zt.receiveShadow=Y.receiveShadow,De.setValue(z,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Cn.envMap.value=Ot,Cn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Cn.envMapIntensity.value=W.environmentIntensity),Rn&&(De.setValue(z,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&Ec(Cn,un),yt&&Q.fog===!0&&Dt.refreshFogUniforms(Cn,yt),Dt.refreshMaterialUniforms(Cn,Q,j,st,g.state.transmissionRenderTarget[b.id]),pc.upload(z,wi(Zt),Cn,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(pc.upload(z,wi(Zt),Cn,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&De.setValue(z,"center",Y.center),De.setValue(z,"modelViewMatrix",Y.modelViewMatrix),De.setValue(z,"normalMatrix",Y.normalMatrix),De.setValue(z,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ke=Q.uniformsGroups;for(let gn=0,xr=ke.length;gn<xr;gn++){const On=ke[gn];k.update(On,Ln),k.bind(On,Ln)}}return Ln}function Ec(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function zo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,W,et){const Q=Wt.get(b);Q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Wt.get(b.texture).__webglTexture=W,Wt.get(b.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:et,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const et=Wt.get(b);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0};const Ba=z.createFramebuffer();this.setRenderTarget=function(b,W=0,et=0){K=b,I=W,B=et;let Q=!0,Y=null,yt=!1,At=!1;if(b){const Ot=Wt.get(b);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Ot.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(Ot.__hasExternalTextures)U.rebindTextures(b,Wt.get(b.texture).__webglTexture,Wt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Yt=b.depthTexture;if(Ot.__boundDepthTexture!==Yt){if(Yt!==null&&Wt.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const ee=b.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(At=!0);const $t=Wt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[W])?Y=$t[W][et]:Y=$t[W],yt=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?Y=Wt.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[et]:Y=$t,F.copy(b.viewport),ut.copy(b.scissor),at=b.scissorTest}else F.copy(it).multiplyScalar(j).floor(),ut.copy(Tt).multiplyScalar(j).floor(),at=Rt;if(et!==0&&(Y=Ba),Xt.bindFramebuffer(z.FRAMEBUFFER,Y)&&Q&&Xt.drawBuffers(b,Y),Xt.viewport(F),Xt.scissor(ut),Xt.setScissorTest(at),yt){const Ot=Wt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,et)}else if(At){const Ot=Wt.get(b.texture),ee=W;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.__webglTexture,et,ee)}else if(b!==null&&et!==0){const Ot=Wt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,et)}C=-1},this.readRenderTargetPixels=function(b,W,et,Q,Y,yt,At){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){Xt.bindFramebuffer(z.FRAMEBUFFER,Pt);try{const Ot=b.texture,ee=Ot.format,$t=Ot.type;if(!fe.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-Q&&et>=0&&et<=b.height-Y&&z.readPixels(W,et,Q,Y,jt.convert(ee),jt.convert($t),yt)}finally{const Ot=K!==null?Wt.get(K).__webglFramebuffer:null;Xt.bindFramebuffer(z.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,W,et,Q,Y,yt,At){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(W>=0&&W<=b.width-Q&&et>=0&&et<=b.height-Y){Xt.bindFramebuffer(z.FRAMEBUFFER,Pt);const Ot=b.texture,ee=Ot.format,$t=Ot.type;if(!fe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.bufferData(z.PIXEL_PACK_BUFFER,yt.byteLength,z.STREAM_READ),z.readPixels(W,et,Q,Y,jt.convert(ee),jt.convert($t),0);const ge=K!==null?Wt.get(K).__webglFramebuffer:null;Xt.bindFramebuffer(z.FRAMEBUFFER,ge);const _e=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await DS(z,_e,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,yt),z.deleteBuffer(Yt),z.deleteSync(_e),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,et=0){const Q=Math.pow(2,-et),Y=Math.floor(b.image.width*Q),yt=Math.floor(b.image.height*Q),At=W!==null?W.x:0,Pt=W!==null?W.y:0;U.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,et,0,0,At,Pt,Y,yt),Xt.unbindTexture()};const Es=z.createFramebuffer(),Di=z.createFramebuffer();this.copyTextureToTexture=function(b,W,et=null,Q=null,Y=0,yt=null){yt===null&&(Y!==0?(hc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Y,Y=0):yt=0);let At,Pt,Ot,ee,$t,Yt,ge,_e,Ie;const Ee=b.isCompressedTexture?b.mipmaps[yt]:b.image;if(et!==null)At=et.max.x-et.min.x,Pt=et.max.y-et.min.y,Ot=et.isBox3?et.max.z-et.min.z:1,ee=et.min.x,$t=et.min.y,Yt=et.isBox3?et.min.z:0;else{const Sn=Math.pow(2,-Y);At=Math.floor(Ee.width*Sn),Pt=Math.floor(Ee.height*Sn),b.isDataArrayTexture?Ot=Ee.depth:b.isData3DTexture?Ot=Math.floor(Ee.depth*Sn):Ot=1,ee=0,$t=0,Yt=0}Q!==null?(ge=Q.x,_e=Q.y,Ie=Q.z):(ge=0,_e=0,Ie=0);const ne=jt.convert(W.format),Zt=jt.convert(W.type);let rn;W.isData3DTexture?(U.setTexture3D(W,0),rn=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),rn=z.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),rn=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const ve=z.getParameter(z.UNPACK_ROW_LENGTH),Ln=z.getParameter(z.UNPACK_IMAGE_HEIGHT),oi=z.getParameter(z.UNPACK_SKIP_PIXELS),Rn=z.getParameter(z.UNPACK_SKIP_ROWS),un=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ee.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ee.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ee),z.pixelStorei(z.UNPACK_SKIP_ROWS,$t),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Yt);const De=b.isDataArrayTexture||b.isData3DTexture,Cn=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const Sn=Wt.get(b),ke=Wt.get(W),gn=Wt.get(Sn.__renderTarget),xr=Wt.get(ke.__renderTarget);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,gn.__webglFramebuffer),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let On=0;On<Ot;On++)De&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.get(b).__webglTexture,Y,Yt+On),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.get(W).__webglTexture,yt,Ie+On)),z.blitFramebuffer(ee,$t,At,Pt,ge,_e,At,Pt,z.DEPTH_BUFFER_BIT,z.NEAREST);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Wt.has(b)){const Sn=Wt.get(b),ke=Wt.get(W);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,Es),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Di);for(let gn=0;gn<Ot;gn++)De?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Sn.__webglTexture,Y,Yt+gn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Sn.__webglTexture,Y),Cn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,yt,Ie+gn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ke.__webglTexture,yt),Y!==0?z.blitFramebuffer(ee,$t,At,Pt,ge,_e,At,Pt,z.COLOR_BUFFER_BIT,z.NEAREST):Cn?z.copyTexSubImage3D(rn,yt,ge,_e,Ie+gn,ee,$t,At,Pt):z.copyTexSubImage2D(rn,yt,ge,_e,ee,$t,At,Pt);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Cn?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(rn,yt,ge,_e,Ie,At,Pt,Ot,ne,Zt,Ee.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(rn,yt,ge,_e,Ie,At,Pt,Ot,ne,Ee.data):z.texSubImage3D(rn,yt,ge,_e,Ie,At,Pt,Ot,ne,Zt,Ee):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,yt,ge,_e,At,Pt,ne,Zt,Ee.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,yt,ge,_e,Ee.width,Ee.height,ne,Ee.data):z.texSubImage2D(z.TEXTURE_2D,yt,ge,_e,At,Pt,ne,Zt,Ee);z.pixelStorei(z.UNPACK_ROW_LENGTH,ve),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ln),z.pixelStorei(z.UNPACK_SKIP_PIXELS,oi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,un),yt===0&&W.generateMipmaps&&z.generateMipmap(rn),Xt.unbindTexture()},this.copyTextureToTexture3D=function(b,W,et=null,Q=null,Y=0){return hc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,et,Q,Y)},this.initRenderTarget=function(b){Wt.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),Xt.unbindTexture()},this.resetState=function(){I=0,B=0,K=null,Xt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const jb=()=>{const o=$e.useRef(null);return $e.useEffect(()=>{let e=window.innerWidth,i=window.innerHeight;const r=new aM,l=new si(75,e/i,.1,1e3);l.position.z=3;const u=new Yb({alpha:!0,antialias:!0});u.setSize(e,i),o.current&&o.current.appendChild(u.domElement);const d=o.current,h=CS.degToRad(l.fov),_=.75*(2*l.position.z*Math.tan(h/2))/2,v=new ih(_,32,32),S=new nh({color:30654,wireframe:!0}),y=new Ai(v,S);r.add(y);const R=()=>{requestAnimationFrame(R),y.rotation.y+=.005,u.render(r,l)};R();const w=()=>{e=window.innerWidth,i=window.innerHeight,u.setSize(e,i),l.aspect=e/i,l.updateProjectionMatrix()};return window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w),d&&d.removeChild(u.domElement),u.dispose()}},[]),$.jsx("div",{ref:o,className:"absolute inset-0"})};function Zb(){const[o,e]=$e.useState(!0);return $.jsxs("div",{children:[$.jsx(Ex,{setActiveHomePage:e,activeHomePage:o}),o==!0?$.jsxs("div",{children:[$.jsxs("section",{className:"relative h-screen bg-[url('/images/imac_desktop.jpg')]  bg-cover bg-center h-screen w-fullw-full overflow-hidden",children:[$.jsx(jb,{}),$.jsx("div",{className:"absolute inset-0 bg-[#433290] opacity-30"}),$.jsxs("div",{className:"relative flex flex-col items-center justify-center h-full",children:[$.jsx("h1",{className:"text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded",children:"Marco Casanova Software Developer"}),$.jsx("h3",{className:"text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded mt-4",children:"Getting things done!"})]})]}),$.jsx("section",{id:"services",className:"w-full flex items-center justify-center  bg-blue-900 opacity-60",children:$.jsx(yx,{})}),$.jsxs("section",{id:"portafolio",className:"w-full flex items-center justify-center relative",children:[$.jsx("div",{className:"absolute inset-0 bg-[#433290] pointer-events-none",style:{opacity:.4,zIndex:0}}),$.jsx("div",{className:"relative z-10 w-full flex items-center justify-center",children:$.jsx(Mx,{})})]}),$.jsx("section",{id:"clients",className:"w-full flex items-center justify-center  bg-white-900",children:$.jsx(Sx,{})}),$.jsx("section",{id:"contact",className:"w-full flex items-center justify-center  bg-purple-900",children:$.jsx(xx,{})})]}):$.jsx("div",{children:$.jsx(vx,{})})]})}_x.createRoot(document.getElementById("root")).render($.jsx($e.StrictMode,{children:$.jsx(Zb,{})}));
