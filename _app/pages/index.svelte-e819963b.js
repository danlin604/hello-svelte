import{_ as x}from"../chunks/preload-helper-ec9aa979.js";import{S as q,i as M,s as N,e as v,c as g,a as b,d as _,J as f,f as I,D as w,k as A,j as G,n as y,m as H,b as E,K as z,I as m,o as K,L,x as T,u as P,v as R,M as J,N as C,O as Q,w as U,A as V,P as X,Q as Y,r as B}from"../chunks/vendor-ee97e643.js";function W(r){let e;return{c(){e=v("a-text"),this.h()},l(t){e=g(t,"A-TEXT",{position:!0,color:!0,value:!0}),b(e).forEach(_),this.h()},h(){f(e,"position",r[0]),f(e,"color",r[1]),f(e,"value",r[2])},m(t,s){I(t,e,s)},p(t,[s]){s&1&&f(e,"position",t[0]),s&2&&f(e,"color",t[1]),s&4&&f(e,"value",t[2])},i:w,o:w,d(t){t&&_(e)}}}function Z(r,e,t){let{position:s="-.5 1 -3"}=e,{color:n="#FF3E00"}=e,{value:i="Placeholder"}=e;return r.$$set=o=>{"position"in o&&t(0,s=o.position),"color"in o&&t(1,n=o.color),"value"in o&&t(2,i=o.value)},[s,n,i]}class $ extends q{constructor(e){super();M(this,e,Z,W,N,{position:0,color:1,value:2})}}function D(r){let e,t,s,n,i,o,d,a,l,h,p,k,F;function O(u){r[2](u)}let j={};return r[0]!==void 0&&(j.value=r[0]),o=new $({props:j}),X.push(()=>Y(o,"value",O)),{c(){e=v("a-scene"),t=v("a-assets"),s=v("img"),i=A(),G(o.$$.fragment),a=A(),l=v("a-image"),p=A(),k=v("a-sky"),this.h()},l(u){e=g(u,"A-SCENE",{embedded:!0,class:!0});var c=b(e);t=g(c,"A-ASSETS",{});var S=b(t);s=g(S,"IMG",{id:!0,alt:!0,src:!0}),S.forEach(_),i=y(c),H(o.$$.fragment,c),a=y(c),l=g(c,"A-IMAGE",{position:!0,src:!0}),b(l).forEach(_),p=y(c),k=g(c,"A-SKY",{color:!0}),b(k).forEach(_),c.forEach(_),this.h()},h(){E(s,"id","logo"),E(s,"alt","svelte logo"),z(s.src,n="logo.png")||E(s,"src",n),f(l,"position","0 2 -3"),z(l.src,h="#logo")||f(l,"src",h),f(k,"color","#FFF2DF"),f(e,"embedded",""),f(e,"class","svelte-o6onzs")},m(u,c){I(u,e,c),m(e,t),m(t,s),m(e,i),K(o,e,null),m(e,a),m(e,l),m(e,p),m(e,k),F=!0},p(u,c){const S={};!d&&c&1&&(d=!0,S.value=u[0],L(()=>d=!1)),o.$set(S)},i(u){F||(T(o.$$.fragment,u),F=!0)},o(u){P(o.$$.fragment,u),F=!1},d(u){u&&_(e),R(o)}}}function ee(r){let e,t,s,n,i,o,d,a=r[1]&&D(r);return{c(){e=A(),t=v("section"),a&&a.c(),s=A(),n=v("input"),this.h()},l(l){J('[data-svelte="svelte-mvsp8v"]',document.head).forEach(_),e=y(l),t=g(l,"SECTION",{class:!0});var p=b(t);a&&a.l(p),s=y(p),n=g(p,"INPUT",{type:!0,placeholder:!0,class:!0}),p.forEach(_),this.h()},h(){document.title="Hello Svelte",E(n,"type","text"),n.required=!1,E(n,"placeholder","Say hello!"),E(n,"class","svelte-o6onzs"),E(t,"class","svelte-o6onzs")},m(l,h){I(l,e,h),I(l,t,h),a&&a.m(t,null),m(t,s),m(t,n),C(n,r[0]),i=!0,o||(d=Q(n,"input",r[3]),o=!0)},p(l,[h]){l[1]?a?(a.p(l,h),h&2&&T(a,1)):(a=D(l),a.c(),T(a,1),a.m(t,s)):a&&(B(),P(a,1,1,()=>{a=null}),U()),h&1&&n.value!==l[0]&&C(n,l[0])},i(l){i||(T(a),i=!0)},o(l){P(a),i=!1},d(l){l&&_(e),l&&_(t),a&&a.d(),o=!1,d()}}}const le=!0;function te(r,e,t){let s="Hello, Svelte!",n=!1;V(async()=>{await x(()=>import("../chunks/aframe-master-695bbf97.js").then(function(d){return d.a}),[]),t(1,n=!0)});function i(d){s=d,t(0,s)}function o(){s=this.value,t(0,s)}return[s,n,i,o]}class oe extends q{constructor(e){super();M(this,e,te,ee,N,{})}}export{oe as default,le as prerender};