import{as as k,G as H,f as v,u as g,a3 as I,s as L,g as B,w as T,j as C,z as F,n as G}from"./19ca14e7ea6328a42e0eb13d585e4c22.1653952900165.js";var _,$=Object.defineProperty,q=Object.defineProperties,J=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,E=(e,t,o)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;function Z(e,t){var o;const u=L();return B(()=>{u.value=e()},(o=((r,i)=>{for(var n in i=i||{})K.call(i,n)&&E(r,n,i[n]);if(D)for(var n of D(i))M.call(i,n)&&E(r,n,i[n]);return r})({},t),t={flush:(t=t==null?void 0:t.flush)!=null?t:"sync"},q(o,J(t)))),I(u)}function S(e){return!!k()&&(H(e),!0)}const j=typeof window!="undefined",ee=e=>typeof e=="boolean",te=e=>typeof e=="number",P=()=>{};function A(e,t){return function(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}}function N(e,t=200,o={}){return A(function(u,r={}){let i,n;return a=>{var l=g(u),f=g(r.maxWait);if(i&&clearTimeout(i),l<=0||f!==void 0&&f<=0)return n&&(clearTimeout(n),n=null),a();f&&!n&&(n=setTimeout(()=>{i&&clearTimeout(i),n=null,a()},f)),i=setTimeout(()=>{n&&clearTimeout(n),n=null,a()},l)}}(t,o),e)}function ne(e,t,o={}){if(t<=0)return e;const u=v(e.value),r=N(()=>{u.value=e.value},t,o);return T(e,()=>r()),u}function ie(e,t,o=!0,u=!0){return A(function(r,i=!0,n=!0){let a,l=0,f=!0;const c=()=>{a&&(clearTimeout(a),a=void 0)};return s=>{var w=g(r),p=Date.now()-l;if(c(),w<=0)return l=Date.now(),s();w<p&&(n||!f)?(l=Date.now(),s()):i&&(a=setTimeout(()=>{l=Date.now(),f=!0,c(),s()},w)),n||a||(a=setTimeout(()=>f=!0,w)),f=!1}}(t,o,u),e)}function W(e,t=!0){C()?F(e):t?e():G(e)}function oe(e,t,o={}){const{immediate:u=!0}=o,r=v(!1);let i=null;function n(){i&&(clearTimeout(i),i=null)}function a(){r.value=!1,n()}function l(...f){n(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,e(...f)},g(t))}return u&&(r.value=!0,j&&l()),S(a),{isPending:r,start:l,stop:a}}function b(o){var t,o=g(o);return(t=o==null?void 0:o.$el)!=null?t:o}j&&(_=window==null?void 0:window.navigator)!=null&&_.userAgent&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const y=j?window:void 0,Q=j?window.document:void 0;function h(...e){let t,o,u,r;if(typeof e[0]=="string"?([o,u,r]=e,t=y):[t,o,u,r]=e,!t)return P;let i=P;const n=T(()=>b(t),l=>{i(),l&&(l.addEventListener(o,u,r),i=()=>{l.removeEventListener(o,u,r),i=P})},{immediate:!0,flush:"post"}),a=()=>{n(),i()};return S(a),a}function re(e,t,o={}){const{window:u=y,ignore:r,capture:i=!0}=o;if(u){const n=v(!0);let a;const l=c=>{u.clearTimeout(a);const s=b(e),w=c.composedPath();!s||s===c.target||w.includes(s)||!n.value||r&&0<r.length&&r.some(p=>(p=b(p),p&&(c.target===p||w.includes(p))))||t(c)},f=[h(u,"click",l,{passive:!0,capture:i}),h(u,"pointerdown",c=>{var s=b(e);n.value=!!s&&!c.composedPath().includes(s)},{passive:!0}),h(u,"pointerup",c=>{a=u.setTimeout(()=>l(c),50)},{passive:!0})];return()=>f.forEach(c=>c())}}const x=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},z="__vueuse_ssr_handlers__";function ue({document:e=Q}={}){if(!e)return v("visible");const t=v(e.visibilityState);return h(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}x[z]=x[z]||{},x[z];var R=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;function X(e,t,o={}){const u=o,{window:r=y}=u,i=((s,w)=>{var p={};for(d in s)U.call(s,d)&&w.indexOf(d)<0&&(p[d]=s[d]);if(s!=null&&R)for(var d of R(s))w.indexOf(d)<0&&V.call(s,d)&&(p[d]=s[d]);return p})(u,["window"]);let n;const a=r&&"ResizeObserver"in r,l=()=>{n&&(n.disconnect(),n=void 0)},f=T(()=>b(e),s=>{l(),a&&r&&s&&(n=new ResizeObserver(t)).observe(s,i)},{immediate:!0,flush:"post"}),c=()=>{l(),f()};return S(c),{isSupported:a,stop:c}}function ae(e,t={}){const{reset:o=!0,windowResize:u=!0,windowScroll:r=!0,immediate:i=!0}=t,n=v(0),a=v(0),l=v(0),f=v(0),c=v(0),s=v(0),w=v(0),p=v(0);function d(){const O=b(e);var m;O?(m=O.getBoundingClientRect(),n.value=m.height,a.value=m.bottom,l.value=m.left,f.value=m.right,c.value=m.top,s.value=m.width,w.value=m.x,p.value=m.y):o&&(n.value=0,a.value=0,l.value=0,f.value=0,c.value=0,s.value=0,w.value=0,p.value=0)}return X(e,d),T(()=>b(e),O=>!O&&d()),r&&h("scroll",d,{passive:!0}),u&&h("resize",d,{passive:!0}),W(()=>{i&&d()}),{height:n,bottom:a,left:l,right:f,top:c,width:s,x:w,y:p,update:d}}function se({window:e=y}={}){if(!e)return v(!1);const t=v(e.document.hasFocus());return h(e,"blur",()=>{t.value=!1}),h(e,"focus",()=>{t.value=!0}),t}function le({window:e=y,initialWidth:t=1/0,initialHeight:o=1/0}={}){const u=v(t),r=v(o),i=()=>{e&&(u.value=e.innerWidth,r.value=e.innerHeight)};return i(),W(i),h("resize",i,{passive:!0}),{width:u,height:r}}export{te as a,ee as b,le as c,ae as d,h as e,X as f,ie as g,oe as h,j as i,ue as j,se as k,Z as l,re as o,ne as r,S as t,b as u};
