var F=Object.defineProperty;var E=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var O=(e,n,a)=>n in e?F(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,j=(e,n)=>{for(var a in n||(n={}))H.call(n,a)&&O(e,a,n[a]);if(E)for(var a of E(n))J.call(n,a)&&O(e,a,n[a]);return e};import{i as B}from"./8cff4b3244a6d3227e06bd3623ce57c2.1653952900165.js";import{s as V}from"./a87ff679a2f3e71d9181a67b7542122c.1653952900165.js";import{ak as z,f as G,aj as x,al as M,w as W,u as Y}from"./19ca14e7ea6328a42e0eb13d585e4c22.1653952900165.js";const q=Symbol("pinia");var h;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(h=h||{});const T=typeof window!="undefined",A=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null};function $(e,n,a){const t=new XMLHttpRequest;t.open("GET",e),t.responseType="blob",t.onload=function(){N(t.response,n,a)},t.onerror=function(){console.error("could not download file")},t.send()}function C(e){const n=new XMLHttpRequest;n.open("HEAD",e,!1);try{n.send()}catch{}return 200<=n.status&&n.status<=299}function w(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{const a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}const _=typeof navigator=="object"?navigator:{userAgent:""},L=/Macintosh/.test(_.userAgent)&&/AppleWebKit/.test(_.userAgent)&&!/Safari/.test(_.userAgent),N=T?typeof HTMLAnchorElement!="undefined"&&"download"in HTMLAnchorElement.prototype&&!L?function(e,n="download",a){const t=document.createElement("a");t.download=n,t.rel="noopener",typeof e=="string"?(t.href=e,t.origin!==location.origin?C(t.href)?$(e,n,a):(t.target="_blank",w(t)):w(t)):(t.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(t.href)},4e4),setTimeout(function(){w(t)},0))}:"msSaveOrOpenBlob"in _?function(e,n="download",a){if(typeof e=="string")if(C(e))$(e,n,a);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout(function(){w(t)})}else navigator.msSaveOrOpenBlob(([e,{autoBom:a=!1}={}]=[e,a],a&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e),n)}:function(e,n,a,t){if((t=t||open("","_blank"))&&(t.document.title=t.document.body.innerText="downloading..."),typeof e=="string")return $(e,n,a);const o=e.type==="application/octet-stream",i=/constructor/i.test(String(A.HTMLElement))||"safari"in A,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&i||L)&&typeof FileReader!="undefined"){const s=new FileReader;s.onloadend=function(){let r=s.result;if(typeof r!="string")throw t=null,new Error("Wrong reader.result type");r=l?r:r.replace(/^data:[^;]*;/,"data:attachment/file;"),t?t.location.href=r:location.assign(r),t=null},s.readAsDataURL(e)}else{const s=URL.createObjectURL(e);t?t.location.assign(s):location.href=s,t=null,setTimeout(function(){URL.revokeObjectURL(s)},4e4)}}:()=>{};function p(e,n){e="\u{1F34D} "+e,typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(e,n):n==="error"?console.error(e):n==="warn"?console.warn(e):console.log(e)}function k(e){return"_a"in e&&"install"in e}function R(){if(!("clipboard"in navigator))return p("Your browser doesn't support the Clipboard API","error"),!0}function U(e){return!!(e instanceof Error&&e.message.toLowerCase().includes("document is not focused"))&&(p('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}let g;async function X(e){try{g||((g=document.createElement("input")).type="file",g.accept=".json");const t=await function(){return new Promise((i,l)=>{g.onchange=async()=>{const s=g.files;if(!s)return i(null);const r=s.item(0);return i(r?{text:await r.text(),file:r}:null)},g.oncancel=()=>i(null),g.onerror=l,g.click()})},o=await t();if(!o)return;var{text:n,file:a}=o;e.state.value=JSON.parse(n),p(`Global state imported from "${a.name}".`)}catch(t){p("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}function f(e){return{_custom:{display:e}}}function K(e){return k(e)?{id:"_root",label:"\u{1F34D} Pinia (root)"}:{id:e.$id,label:e.$id}}function Q(e){return e?Array.isArray(e)?e.reduce((n,a)=>(n.keys.push(a.key),n.operations.push(a.type),n.oldValue[a.key]=a.oldValue,n.newValue[a.key]=a.newValue,n),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:f(e.type),key:f(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function Z(e){switch(e){case h.direct:return"mutation";case h.patchFunction:case h.patchObject:return"$patch";default:return"unknown"}}let v=!0;const S=[],I=e=>"\u{1F34D} "+e;function tt(e,n){V({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:S,app:e},a=>{typeof a.now!="function"&&p("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.addTimelineLayer({id:"pinia:mutations",label:"Pinia \u{1F34D}",color:15064968}),a.addInspector({id:"pinia",label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{(async function(t){if(!R())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),p("Global state copied to clipboard.")}catch(o){if(U(o))return;p("Failed to serialize the state. Check the console for more details.","error"),console.error(o)}})(n)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await async function(t){if(!R())try{t.state.value=JSON.parse(await navigator.clipboard.readText()),p("Global state pasted from clipboard.")}catch(o){if(U(o))return;p("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(o)}}(n),a.sendInspectorTree("pinia"),a.sendInspectorState("pinia")},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{(async function(t){try{N(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(o){p("Failed to export the state as JSON. Check the console for more details.","error"),console.error(o)}})(n)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await X(n),a.sendInspectorTree("pinia"),a.sendInspectorState("pinia")},tooltip:"Import the state from a JSON file"}]}),a.on.inspectComponent((t,o)=>{var i=t.componentInstance&&t.componentInstance.proxy;if(i&&i._pStores){const l=t.componentInstance.proxy._pStores;Object.values(l).forEach(s=>{t.instanceData.state.push({type:I(s.$id),key:"state",editable:!0,value:s._isOptionsAPI?{_custom:{value:s.$state,actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>s.$reset()}]}}:s.$state}),s._getters&&s._getters.length&&t.instanceData.state.push({type:I(s.$id),key:"getters",editable:!1,value:s._getters.reduce((r,d)=>{try{r[d]=s[d]}catch(c){r[d]=c}return r},{})})})}}),a.on.getInspectorTree(t=>{if(t.app===e&&t.inspectorId==="pinia"){let o=[n];o=o.concat(Array.from(n._s.values())),t.rootNodes=(t.filter?o.filter(i=>("$id"in i?i.$id:"\u{1F34D} Pinia (root)").toLowerCase().includes(t.filter.toLowerCase())):o).map(K)}}),a.on.getInspectorState(t=>{if(t.app===e&&t.inspectorId==="pinia"){const o=t.nodeId==="_root"?n:n._s.get(t.nodeId);o&&o&&(t.state=function(i){if(k(i)){const s=Array.from(i._s.keys()),r=i._s;return{state:s.map(c=>({editable:!0,key:c,value:i.state.value[c]})),getters:s.filter(c=>r.get(c)._getters).map(c=>{const u=r.get(c);return{editable:!1,key:c,value:u._getters.reduce((y,b)=>(y[b]=u[b],y),{})}})}}const l={state:Object.keys(i.$state).map(s=>({editable:!0,key:s,value:i.$state[s]}))};return i._getters&&i._getters.length&&(l.getters=i._getters.map(s=>({editable:!1,key:s,value:i[s]}))),i._customProperties.size&&(l.customProperties=Array.from(i._customProperties).map(s=>({editable:!0,key:s,value:i[s]}))),l}(o))}}),a.on.editInspectorState((t,o)=>{if(t.app===e&&t.inspectorId==="pinia"){const i=t.nodeId==="_root"?n:n._s.get(t.nodeId);if(!i)return p(`store "${t.nodeId}" not found`,"error");const l=t.path;k(i)?l.unshift("state"):(l.length!==1||!i._customProperties.has(l[0])||l[0]in i.$state)&&l.unshift("$state"),v=!1,t.set(i,l,t.state.value),v=!0}}),a.on.editComponentState(t=>{if(t.type.startsWith("\u{1F34D}")){var o=t.type.replace(/^🍍\s*/,""),i=n._s.get(o);if(!i)return p(`store "${o}" not found`,"error");const l=t.path;if(l[0]!=="state")return p(`Invalid path for store "${o}":
${l}
Only state can be modified.`);l[0]="$state",v=!1,t.set(i,l,t.state.value),v=!0}})})}let m,D=0;function P(e,n){const a=n.reduce((t,o)=>(t[o]=M(e)[o],t),{});for(const t in a)e[t]=function(){const o=D,i=new Proxy(e,{get:(...l)=>(m=o,Reflect.get(...l)),set:(...l)=>(m=o,Reflect.set(...l))});return a[t].apply(i,arguments)}}function et({app:e,store:n,options:a}){if(!n.$id.startsWith("__hot:")){if(a.state&&(n._isOptionsAPI=!0),typeof a.state=="function"){P(n,Object.keys(a.actions));const o=n._hotUpdate;M(n)._hotUpdate=function(i){o.apply(this,arguments),P(n,Object.keys(i._hmrPayload.actions))}}a=e,t=n,S.includes(I(t.$id))||S.push(I(t.$id)),V({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:S,app:a,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},o=>{const i=typeof o.now=="function"?o.now.bind(o):Date.now,l=(t.$onAction(({after:r,onError:d,name:c,args:u})=>{const y=D++;o.addTimelineEvent({layerId:"pinia:mutations",event:{time:i(),title:"\u{1F6EB} "+c,subtitle:"start",data:{store:f(t.$id),action:f(c),args:u},groupId:y}}),r(b=>{m=void 0,o.addTimelineEvent({layerId:"pinia:mutations",event:{time:i(),title:"\u{1F6EC} "+c,subtitle:"end",data:{store:f(t.$id),action:f(c),args:u,result:b},groupId:y}})}),d(b=>{m=void 0,o.addTimelineEvent({layerId:"pinia:mutations",event:{time:i(),logType:"error",title:"\u{1F4A5} "+c,subtitle:"end",data:{store:f(t.$id),action:f(c),args:u,error:b},groupId:y}})})},!0),t._customProperties.forEach(r=>{W(()=>Y(t[r]),(d,c)=>{o.notifyComponentUpdate(),o.sendInspectorState("pinia"),v&&o.addTimelineEvent({layerId:"pinia:mutations",event:{time:i(),title:"Change",subtitle:r,data:{newValue:d,oldValue:c},groupId:m}})},{deep:!0})}),t.$subscribe(({events:r,type:d},c)=>{if(o.notifyComponentUpdate(),o.sendInspectorState("pinia"),v){const u={time:i(),title:Z(d),data:j({store:f(t.$id)},Q(r)),groupId:m};m=void 0,d===h.patchFunction?u.subtitle="\u2935\uFE0F":d===h.patchObject?u.subtitle="\u{1F9E9}":r&&!Array.isArray(r)&&(u.subtitle=r.type),r&&(u.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:r}}),o.addTimelineEvent({layerId:"pinia:mutations",event:u})}},{detached:!0,flush:"sync"}),t._hotUpdate),s=(t._hotUpdate=x(r=>{l(r),o.addTimelineEvent({layerId:"pinia:mutations",event:{time:i(),title:"\u{1F525} "+t.$id,subtitle:"HMR update",data:{store:f(t.$id),info:f("HMR update")}}}),o.notifyComponentUpdate(),o.sendInspectorTree("pinia"),o.sendInspectorState("pinia")}),t).$dispose;t.$dispose=()=>{s(),o.notifyComponentUpdate(),o.sendInspectorTree("pinia"),o.sendInspectorState("pinia"),o.getSettings().logStoreChanges&&p(`Disposed "${t.$id}" store \u{1F5D1}`)},o.notifyComponentUpdate(),o.sendInspectorTree("pinia"),o.sendInspectorState("pinia"),o.getSettings().logStoreChanges&&p(`"${t.$id}" store installed \u{1F195}`)})}var t}function st(){const e=z(!0),n=e.run(()=>G({}));let a=[],t=[];const o=x({install(i){(o._a=i).provide(q,o),i.config.globalProperties.$pinia=o,T&&tt(i,o),t.forEach(l=>a.push(l)),t=[]},use(i){return(this._a||B?a:t).push(i),this},_p:a,_a:null,_e:e,_s:new Map,state:n});return T&&o.use(et),o}export{st as c};
