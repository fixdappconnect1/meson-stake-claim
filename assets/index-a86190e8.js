import{a3 as M,a4 as V,a5 as C,F as S,a6 as A,a7 as I,a8 as P,a9 as R,T,aa as z,_ as L,ab as D,ac as F,ad as j,ae as H,af as O,ag as U,ah as K,ai as G,aj as W,y as k,ak as q,P as X,k as J,c as Q,a as Y,al as Z,am as ee,an as te,ao as oe,ap as ne,n as re,l as ae,j as se,aq as le,ar as ce,q as ie,as as ue,at as de,au as me,av as ve,aw as he,ax as pe,ay as fe,az as we,aA as ke,aB as Ee,aC as ge,aD as be,A as _e,aE as Be,aF as xe,aG as ye,aH as Ne,i as $e,aI as Me,aJ as Ve,aK as Ce,aL as Se,m as Ae,aM as Ie,aN as Pe,aO as Re,aP as Te,aQ as ze,aR as Le,O as E,R as De,aS as Fe,aT as je,aU as He,aV as Oe,g as Ue,aW as Ke,aX as Ge,aY as We,f as qe,aZ as Xe,a_ as Je,a$ as Qe,b0 as Ye,z as Ze,b1 as et,o as tt,b2 as ot,E as nt,b3 as rt,b4 as at,b5 as st,G as lt,b6 as ct,r as g,b7 as it,b8 as ut,$ as dt,U as mt,h as vt,W as ht,a1 as pt,b9 as ft,ba as wt,bb as kt,bc as Et,bd as gt,be as bt,bf as _t,J as Bt,bg as xt,bh as yt,bi as Nt,t as $t,bj as Mt,bk as Vt,bl as Ct,bm as St,bn as At,bo as It,bp as Pt,b as Rt,bq as Tt,br as zt,bs as Lt,bt as Dt,bu as Ft,bv as jt,bw as Ht,bx as Ot,by as Ut,bz as Kt,v as Gt,S as Wt,bA as qt,bB as Xt,B as Jt,x as b,bC as Qt,bD as Yt,bE as Zt,w as eo,bF as to,p as oo,bG as no,bH as ro,bI as ao,bJ as so,s as _,C as B,D as lo}from"./index-c1a36bee.js";const co=()=>{},io=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:M,Comment:V,EffectScope:C,Fragment:S,KeepAlive:A,ReactiveEffect:I,Static:P,Suspense:R,Teleport:T,Text:z,Transition:L,TransitionGroup:D,VueElement:F,assertNumber:j,callWithAsyncErrorHandling:H,callWithErrorHandling:O,camelize:U,capitalize:K,cloneVNode:G,compatUtils:W,compile:co,computed:k,createApp:q,createBlock:X,createCommentVNode:J,createElementBlock:Q,createElementVNode:Y,createHydrationRenderer:Z,createPropsRestProxy:ee,createRenderer:te,createSSRApp:oe,createSlots:ne,createStaticVNode:re,createTextVNode:ae,createVNode:se,customRef:le,defineAsyncComponent:ce,defineComponent:ie,defineCustomElement:ue,defineEmits:de,defineExpose:me,defineProps:ve,defineSSRCustomElement:he,get devtools(){return pe},effect:fe,effectScope:we,getCurrentInstance:ke,getCurrentScope:Ee,getTransitionRawChildren:ge,guardReactiveProps:be,h:_e,handleError:Be,hydrate:xe,initCustomFormatter:ye,initDirectivesForSSR:Ne,inject:$e,isMemoSame:Me,isProxy:Ve,isReactive:Ce,isReadonly:Se,isRef:Ae,isRuntimeOnly:Ie,isShallow:Pe,isVNode:Re,markRaw:Te,mergeDefaults:ze,mergeProps:Le,nextTick:E,normalizeClass:De,normalizeProps:Fe,normalizeStyle:je,onActivated:He,onBeforeMount:Oe,onBeforeUnmount:Ue,onBeforeUpdate:Ke,onDeactivated:Ge,onErrorCaptured:We,onMounted:qe,onRenderTracked:Xe,onRenderTriggered:Je,onScopeDispose:Qe,onServerPrefetch:Ye,onUnmounted:Ze,onUpdated:et,openBlock:tt,popScopeId:ot,provide:nt,proxyRefs:rt,pushScopeId:at,queuePostFlushCb:st,reactive:lt,readonly:ct,ref:g,registerRuntimeCompiler:it,render:ut,renderList:dt,renderSlot:mt,resolveComponent:vt,resolveDirective:ht,resolveDynamicComponent:pt,resolveFilter:ft,resolveTransitionHooks:wt,setBlockTracking:kt,setDevtoolsHook:Et,setTransitionHooks:gt,shallowReactive:bt,shallowReadonly:_t,shallowRef:Bt,ssrContextKey:xt,ssrUtils:yt,stop:Nt,toDisplayString:$t,toHandlerKey:Mt,toHandlers:Vt,toRaw:Ct,toRef:St,toRefs:At,transformVNodeArgs:It,triggerRef:Pt,unref:Rt,useAttrs:Tt,useCssModule:zt,useCssVars:Lt,useSSRContext:Dt,useSlots:Ft,useTransitionState:jt,vModelCheckbox:Ht,vModelDynamic:Ot,vModelRadio:Ut,vModelSelect:Kt,vModelText:Gt,vShow:Wt,version:qt,warn:Xt,watch:Jt,watchEffect:b,watchPostEffect:Qt,watchSyncEffect:Yt,withAsyncContext:Zt,withCtx:eo,withDefaults:to,withDirectives:oo,withKeys:no,withMemo:ro,withModifiers:ao,withScopeId:so},Symbol.toStringTag,{value:"Module"}));var uo=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(uo||{});function x(e){if(_.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=B(e);if(t)return t.ownerDocument}return document}let w=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var mo=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(mo||{}),vo=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(vo||{}),ho=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ho||{});function y(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(w)).sort((t,o)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(o.tabIndex||Number.MAX_SAFE_INTEGER)))}var N=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(N||{});function $(e,t=0){var o;return e===((o=x(e))==null?void 0:o.body)?!1:lo(t,{[0](){return e.matches(w)},[1](){let n=e;for(;n!==null;){if(n.matches(w))return!0;n=n.parentElement}return!1}})}function Nn(e){let t=x(e);E(()=>{t&&!$(t.activeElement,0)&&fo(e)})}var po=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(po||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function fo(e){e==null||e.focus({preventScroll:!0})}let wo=["textarea","input"].join(",");function ko(e){var t,o;return(o=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,wo))!=null?o:!1}function Eo(e,t=o=>o){return e.slice().sort((o,n)=>{let s=t(o),r=t(n);if(s===null||r===null)return 0;let i=s.compareDocumentPosition(r);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function $n(e,t){return go(y(),t,{relativeTo:e})}function go(e,t,{sorted:o=!0,relativeTo:n=null,skipElements:s=[]}={}){var r;let i=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,a=Array.isArray(e)?o?Eo(e):e:y(e);s.length>0&&a.length>1&&(a=a.filter(d=>!s.includes(d))),n=n??i.activeElement;let p=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(n))-1;if(t&4)return Math.max(0,a.indexOf(n))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},h=0,v=a.length,m;do{if(h>=v||h+v<=0)return 0;let d=u+h;if(t&16)d=(d+v)%v;else{if(d<0)return 3;if(d>=v)return 1}m=a[d],m==null||m.focus(c),h+=p}while(m!==i.activeElement);return t&6&&ko(m)&&m.select(),2}function f(e,t,o){_.isServer||b(n=>{document.addEventListener(e,t,o),n(()=>document.removeEventListener(e,t,o))})}function Mn(e,t,o=k(()=>!0)){function n(r,i){if(!o.value||r.defaultPrevented)return;let a=i(r);if(a===null||!a.getRootNode().contains(a))return;let p=function u(c){return typeof c=="function"?u(c()):Array.isArray(c)||c instanceof Set?c:[c]}(e);for(let u of p){if(u===null)continue;let c=u instanceof HTMLElement?u:B(u);if(c!=null&&c.contains(a)||r.composed&&r.composedPath().includes(c))return}return!$(a,N.Loose)&&a.tabIndex!==-1&&r.preventDefault(),t(r,a)}let s=g(null);f("mousedown",r=>{var i,a;o.value&&(s.value=((a=(i=r.composedPath)==null?void 0:i.call(r))==null?void 0:a[0])||r.target)},!0),f("click",r=>{s.value&&(n(r,()=>s.value),s.value=null)},!0),f("blur",r=>n(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Vn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bo(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var o=function n(){if(this instanceof n){var s=[null];s.push.apply(s,arguments);var r=Function.bind.apply(t,s);return new r}return t.apply(this,arguments)};o.prototype=t.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(o,n,s.get?s:{enumerable:!0,get:function(){return e[n]}})}),o}const l=bo(io),{createElementVNode:_o,openBlock:Bo,createElementBlock:xo}=l;var yo=function(t,o){return Bo(),xo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[_o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})])};const{createElementVNode:No,openBlock:$o,createElementBlock:Mo}=l;var Vo=function(t,o){return $o(),Mo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[No("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])};const{createElementVNode:Co,openBlock:So,createElementBlock:Ao}=l;var Io=function(t,o){return So(),Ao("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Co("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"})])};const{createElementVNode:Po,openBlock:Ro,createElementBlock:To}=l;var zo=function(t,o){return Ro(),To("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Po("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])};const{createElementVNode:Lo,openBlock:Do,createElementBlock:Fo}=l;var jo=function(t,o){return Do(),Fo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Lo("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"})])};const{createElementVNode:Ho,openBlock:Oo,createElementBlock:Uo}=l;var Ko=function(t,o){return Oo(),Uo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Ho("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})])};const{createElementVNode:Go,openBlock:Wo,createElementBlock:qo}=l;var Xo=function(t,o){return Wo(),qo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Go("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"})])};const{createElementVNode:Jo,openBlock:Qo,createElementBlock:Yo}=l;var Zo=function(t,o){return Qo(),Yo("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Jo("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})])};const{createElementVNode:en,openBlock:tn,createElementBlock:on}=l;var nn=function(t,o){return tn(),on("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[en("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})])};const{createElementVNode:rn,openBlock:an,createElementBlock:sn}=l;var ln=function(t,o){return an(),sn("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[rn("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})])};const{createElementVNode:cn,openBlock:un,createElementBlock:dn}=l;var mn=function(t,o){return un(),dn("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[cn("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.636 5.636a9 9 0 1012.728 0M12 3v9"})])};const{createElementVNode:vn,openBlock:hn,createElementBlock:pn}=l;var fn=function(t,o){return hn(),pn("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[vn("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"})])};const{createElementVNode:wn,openBlock:kn,createElementBlock:En}=l;var gn=function(t,o){return kn(),En("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[wn("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"})])};const{createElementVNode:bn,openBlock:_n,createElementBlock:Bn}=l;var xn=function(t,o){return _n(),Bn("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[bn("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])},Cn=yo,Sn=Vo,An=Io,In=zo,Pn=jo,Rn=Ko,Tn=Xo,zn=Zo,Ln=nn,Dn=ln,Fn=mn,jn=fn,Hn=gn,On=xn;export{Cn as A,Sn as B,In as C,Rn as E,Tn as K,Ln as L,mo as N,Eo as O,go as P,fo as S,vo as T,jn as U,On as X,Nn as _,An as a,Dn as b,Vn as c,zn as d,Hn as e,Pn as f,bo as g,N as h,Fn as i,x as m,uo as o,l as r,$n as v,$ as w,Mn as y};