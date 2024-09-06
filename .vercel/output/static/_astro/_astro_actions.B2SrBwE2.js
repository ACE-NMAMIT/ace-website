function S(t,e){return h(JSON.parse(t),e)}function h(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const c=t,r=Array(c.length);function s(n,u=!1){if(n===-1)return;if(n===-3)return NaN;if(n===-4)return 1/0;if(n===-5)return-1/0;if(n===-6)return-0;if(u)throw new Error("Invalid input");if(n in r)return r[n];const o=c[n];if(!o||typeof o!="object")r[n]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const i=o[0],E=e?.[i];if(E)return r[n]=E(s(o[1]));switch(i){case"Date":r[n]=new Date(o[1]);break;case"Set":const R=new Set;r[n]=R;for(let a=1;a<o.length;a+=1)R.add(s(o[a]));break;case"Map":const l=new Map;r[n]=l;for(let a=1;a<o.length;a+=2)l.set(s(o[a]),s(o[a+1]));break;case"RegExp":r[n]=new RegExp(o[1],o[2]);break;case"Object":r[n]=Object(o[1]);break;case"BigInt":r[n]=BigInt(o[1]);break;case"null":const N=Object.create(null);r[n]=N;for(let a=1;a<o.length;a+=2)N[o[a]]=s(o[a+1]);break;default:throw new Error(`Unknown type ${i}`)}}else{const i=new Array(o.length);r[n]=i;for(let E=0;E<o.length;E+=1){const R=o[E];R!==-2&&(i[E]=s(R))}}else{const i={};r[n]=i;for(const E in o){const R=o[E];i[E]=s(R)}}return r[n]}return s(0)}const I={actionName:"_astroAction",actionPayload:"_astroActionPayload",actionRedirect:"_astroActionRedirect"},p=I,T={BAD_REQUEST:400,UNAUTHORIZED:401,FORBIDDEN:403,NOT_FOUND:404,TIMEOUT:405,CONFLICT:409,PRECONDITION_FAILED:412,PAYLOAD_TOO_LARGE:413,UNSUPPORTED_MEDIA_TYPE:415,UNPROCESSABLE_CONTENT:422,TOO_MANY_REQUESTS:429,CLIENT_CLOSED_REQUEST:499,INTERNAL_SERVER_ERROR:500},_=Object.entries(T).reduce((t,[e,c])=>({...t,[c]:e}),{});class f extends Error{type="AstroActionError";code="INTERNAL_SERVER_ERROR";status=500;constructor(e){super(e.message),this.code=e.code,this.status=f.codeToStatus(e.code),e.stack&&(this.stack=e.stack)}static codeToStatus(e){return T[e]}static statusToCode(e){return _[e]??"INTERNAL_SERVER_ERROR"}static fromJson(e){return g(e)?new w(e.issues):d(e)?new f(e):new f({code:"INTERNAL_SERVER_ERROR"})}}function d(t){return typeof t=="object"&&t!=null&&"type"in t&&t.type==="AstroActionError"}function g(t){return typeof t=="object"&&t!=null&&"type"in t&&t.type==="AstroActionInputError"&&"issues"in t&&Array.isArray(t.issues)}class w extends f{type="AstroActionInputError";issues;fields;constructor(e){super({message:`Failed to validate: ${JSON.stringify(e,null,2)}`,code:"BAD_REQUEST"}),this.issues=e,this.fields={};for(const c of e)if(c.path.length>0){const r=c.path[0].toString();this.fields[r]??=[],this.fields[r]?.push(c.message)}}}function P(t){return`?${new URLSearchParams({[I.actionName]:t}).toString()}`}function A(t){if(t.type==="error"){let e;try{e=JSON.parse(t.body)}catch{return{data:void 0,error:new f({message:t.body,code:"INTERNAL_SERVER_ERROR"})}}return{error:f.fromJson(e),data:void 0}}return t.type==="empty"?{data:void 0,error:void 0}:{data:S(t.body,{URL:e=>new URL(e)}),error:void 0}}function O(t={},e=""){return new Proxy(t,{get(c,r){if(r in c||typeof r=="symbol")return c[r];const s=e+r.toString();function n(u){return y(u,s)}return Object.assign(n,{queryString:P(s),toString:()=>n.queryString,$$FORM_ACTION:function(){const u=new URLSearchParams(n.toString());return u.set(p.actionRedirect,"false"),{method:"POST",name:"_astroAction",action:"?"+u.toString()}},async orThrow(u){const{data:o,error:i}=await y(u,s);if(i)throw i;return o}}),O(n,s+".")}})}async function y(t,e,c){const r=new Headers;r.set("Accept","application/json");let s=t;if(!(s instanceof FormData)){try{s=JSON.stringify(t)}catch(u){throw new f({code:"BAD_REQUEST",message:`Failed to serialize request body to JSON. Full error: ${u.message}`})}s?r.set("Content-Type","application/json"):r.set("Content-Length","0")}const n=await fetch(`/_actions/${e}`,{method:"POST",body:s,headers:r});return n.status===204?A({type:"empty",status:204}):A({type:n.ok?"data":"error",body:await n.text()})}const U=O();export{U as a};