import{S as le,i as se,s as oe,e as N,t as I,c as L,a as C,g as E,d as p,b as k,f as T,I as v,h as U,K as ae,L as Y,j as D,M as V,k as Z,N as re,l as O,O as W,P as ne,Q as z,p as K,n as F,o as ie,R as ce,T as ue,U as fe,V as de,W as G,m as pe,X as Q,Y as he,Z as X,_ as H,J as _e,$ as me}from"../chunks/vendor-0d8cc607.js";function $(i,e,l){const t=i.slice();return t[12]=e[l],t[14]=l,t}function ee(i){let e,l=i[12]+"",t,a,o,r;return{c(){e=N("span"),t=I(l),this.h()},l(n){e=L(n,"SPAN",{class:!0});var u=C(e);t=E(u,l),u.forEach(p),this.h()},h(){k(e,"class",a="text-2xl w-full opacity-20 text-white block "+(i[14]%2==0?"text-left":"text-right"))},m(n,u){T(n,e,u),v(e,t),r=!0},p(n,u){(!r||u&16)&&l!==(l=n[12]+"")&&U(t,l)},i(n){r||(ae(()=>{o||(o=Y(e,G,{},!0)),o.run(1)}),r=!0)},o(n){o||(o=Y(e,G,{},!1)),o.run(0),r=!1},d(n){n&&p(e),n&&o&&o.end()}}}function ge(i){let e,l,t,a,o;return{c(){e=N("a"),l=I("log in with "),t=N("span"),a=I("spotify"),o=I(` to see
      your musicolors :)`),this.h()},l(r){e=L(r,"A",{href:!0,target:!0,class:!0,style:!0});var n=C(e);l=E(n,"log in with "),t=L(n,"SPAN",{class:!0});var u=C(t);a=E(u,"spotify"),u.forEach(p),o=E(n,` to see
      your musicolors :)`),n.forEach(p),this.h()},h(){k(t,"class","text-green-600 font-bold"),k(e,"href",i[6]),k(e,"target","_blank"),k(e,"class","cursor-pointer text-xl text-center font-tw group"),z(e,"width","33vh")},m(r,n){T(r,e,n),v(e,l),v(e,t),v(t,a),v(e,o)},p(r,n){n&64&&k(e,"href",r[6])},d(r){r&&p(e)}}}function ve(i){let e;function l(o,r){return o[2]?be:ye}let t=l(i),a=t(i);return{c(){e=N("span"),a.c(),this.h()},l(o){e=L(o,"SPAN",{class:!0,style:!0});var r=C(e);a.l(r),r.forEach(p),this.h()},h(){k(e,"class","text-3xl text-center font-tw drop-shadow mb-2"),z(e,"width","33vh")},m(o,r){T(o,e,r),a.m(e,null)},p(o,r){t===(t=l(o))&&a?a.p(o,r):(a.d(1),a=t(o),a&&(a.c(),a.m(e,null)))},d(o){o&&p(e),a.d()}}}function ye(i){let e;return{c(){e=I("getting your musicolors <3")},l(l){e=E(l,"getting your musicolors <3")},m(l,t){T(l,e,t)},p:_e,d(l){l&&p(e)}}}function be(i){let e,l,t,a,o,r,n=i[2].color+"",u,b,w;return{c(){e=I("the color of "),l=I(i[5]),t=I(" music is "),a=N("span"),o=N("span"),r=I("copied!"),u=I(n),this.h()},l(f){e=E(f,"the color of "),l=E(f,i[5]),t=E(f," music is "),a=L(f,"SPAN",{class:!0,style:!0});var d=C(a);o=L(d,"SPAN",{class:!0});var _=C(o);r=E(_,"copied!"),_.forEach(p),u=E(d,n),d.forEach(p),this.h()},h(){k(o,"class","transition-opacity ease-in-out duration-500 invisible text-xl rounded absolute p-1 text-white"),k(a,"class","font-bold relaive group cursor-pointer"),z(a,"color",i[2].color)},m(f,d){T(f,e,d),T(f,l,d),T(f,t,d),T(f,a,d),v(a,o),v(o,r),i[8](o),v(a,u),b||(w=me(a,"click",i[7]),b=!0)},p(f,d){d&32&&U(l,f[5]),d&4&&n!==(n=f[2].color+"")&&U(u,n),d&4&&z(a,"color",f[2].color)},d(f){f&&p(e),f&&p(l),f&&p(t),f&&p(a),i[8](null),b=!1,w()}}}function te(i){let e,l,t=i[3].energetic+"",a,o,r=i[3].loudness+"",n,u,b=i[3].happiness+"",w,f;return{c(){e=N("span"),l=I("your style is "),a=I(t),o=I(", "),n=I(r),u=I(" and "),w=I(b),f=I(" :)"),this.h()},l(d){e=L(d,"SPAN",{class:!0});var _=C(e);l=E(_,"your style is "),a=E(_,t),o=E(_,", "),n=E(_,r),u=E(_," and "),w=E(_,b),f=E(_," :)"),_.forEach(p),this.h()},h(){k(e,"class","absolute bottom-5 w-full text-center")},m(d,_){T(d,e,_),v(e,l),v(e,a),v(e,o),v(e,n),v(e,u),v(e,w),v(e,f)},p(d,_){_&8&&t!==(t=d[3].energetic+"")&&U(a,t),_&8&&r!==(r=d[3].loudness+"")&&U(n,r),_&8&&b!==(b=d[3].happiness+"")&&U(w,b)},d(d){d&&p(e)}}}function we(i){let e,l,t,a,o,r,n,u,b,w,f,d,_,M,g=i[4],c=[];for(let s=0;s<g.length;s+=1)c[s]=ee($(i,g,s));const q=s=>F(c[s],1,1,()=>{c[s]=null});function P(s,m){return s[0]?ve:ge}let j=P(i),A=j(i),y=i[3]&&te(i);return{c(){e=D(),l=N("main"),t=N("div"),a=N("div"),o=V("svg"),r=V("symbol"),n=V("path"),u=V("use"),b=D();for(let s=0;s<c.length;s+=1)c[s].c();f=D(),A.c(),d=D(),y&&y.c(),_=Z(),this.h()},l(s){re('[data-svelte="svelte-7uar8o"]',document.head).forEach(p),e=O(s),l=L(s,"MAIN",{class:!0});var h=C(l);t=L(h,"DIV",{class:!0,style:!0});var B=C(t);a=L(B,"DIV",{class:!0});var R=C(a);o=W(R,"svg",{class:!0});var S=C(o);r=W(S,"symbol",{id:!0,viewBox:!0});var x=C(r);n=W(x,"path",{d:!0}),C(n).forEach(p),x.forEach(p),u=W(S,"use",{"xlink:href":!0}),C(u).forEach(p),S.forEach(p),R.forEach(p),b=O(B);for(let J=0;J<c.length;J+=1)c[J].l(B);B.forEach(p),f=O(h),A.l(h),h.forEach(p),d=O(s),y&&y.l(s),_=Z(),this.h()},h(){document.title="musicolor",k(n,"d","M28 16h-5l-7 7-7-7h-5l-4 8v2h32v-2l-4-8zM0 28h32v2h-32v-2zM18 10v-8h-4v8h-7l9 9 9-9h-7z"),k(r,"id","icon-download"),k(r,"viewBox","0 0 32 32"),ne(u,"xlink:href","#icon-download"),k(o,"class","icon icon-download text-2xl svelte-if4ipu"),k(a,"class","absolute top-2 right-2 cursor-pointer transition-opacity opacity-0 group-hover:opacity-100"),k(t,"class",w="group relative mb-5 overflow-hidden font-tw p-5 rounded-lg shadow-lg aspect-square"+(i[0]?"":" frame")+" svelte-if4ipu"),z(t,"width","33vh"),z(t,"background",i[2]?`linear-gradient(238deg, ${i[2].color}, ${i[2].gradient})`:"linear-gradient(238deg, #9700fd, #003dfd)"),k(l,"class","w-full h-full flex flex-col justify-center items-center font-ttw")},m(s,m){T(s,e,m),T(s,l,m),v(l,t),v(t,a),v(a,o),v(o,r),v(r,n),v(o,u),v(t,b);for(let h=0;h<c.length;h+=1)c[h].m(t,null);v(l,f),A.m(l,null),T(s,d,m),y&&y.m(s,m),T(s,_,m),M=!0},p(s,[m]){if(m&16){g=s[4];let h;for(h=0;h<g.length;h+=1){const B=$(s,g,h);c[h]?(c[h].p(B,m),K(c[h],1)):(c[h]=ee(B),c[h].c(),K(c[h],1),c[h].m(t,null))}for(pe(),h=g.length;h<c.length;h+=1)q(h);ie()}(!M||m&1&&w!==(w="group relative mb-5 overflow-hidden font-tw p-5 rounded-lg shadow-lg aspect-square"+(s[0]?"":" frame")+" svelte-if4ipu"))&&k(t,"class",w),(!M||m&4)&&z(t,"background",s[2]?`linear-gradient(238deg, ${s[2].color}, ${s[2].gradient})`:"linear-gradient(238deg, #9700fd, #003dfd)"),j===(j=P(s))&&A?A.p(s,m):(A.d(1),A=j(s),A&&(A.c(),A.m(l,null))),s[3]?y?y.p(s,m):(y=te(s),y.c(),y.m(_.parentNode,_)):y&&(y.d(1),y=null)},i(s){if(!M){for(let m=0;m<g.length;m+=1)K(c[m]);M=!0}},o(s){c=c.filter(Boolean);for(let m=0;m<c.length;m+=1)F(c[m]);M=!1},d(s){s&&p(e),s&&p(l),ce(c,s),A.d(),s&&p(d),y&&y.d(s),s&&p(_)}}}function ke(i,e,l){ue.add(fe),de.watch();let t,a,o,r=new Array,n=!1,u,b,w="https://accounts.spotify.com/authorize";w+="?response_type=token",w+="&client_id="+encodeURIComponent("e069de3022af4a738e103dfa452c80a2"),w+="&scope=user-top-read",w+="&redirect_uri="+encodeURIComponent("https://euromoon.github.io/musicolor/callback");function f(){let g=localStorage.getItem("token"),c=localStorage.getItem("expireTime");g&&c&&(console.log(Date.now(),parseInt(Q.Buffer.from(c,"base64").toString())),Date.now()>parseInt(Q.Buffer.from(c,"base64").toString())?localStorage.clear():(u=Q.Buffer.from(g,"base64").toString(),l(0,n=!0)))}async function d(){return new Promise(g=>{X.get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+u,"Content-Type":"application/json"}}).then(c=>{l(5,b=c.data.display_name+"'"),b.endsWith("s")||l(5,b+="s")}),X.get("https://api.spotify.com/v1/me/top/tracks?limit=15&time_range=long_term",{headers:{Authorization:"Bearer "+u,"Content-Type":"application/json"}}).then(c=>{l(4,r=c.data.items.slice(0,10).map(P=>P.name.toLowerCase()));let q=c.data.items.map(P=>P.id);X.get(`https://api.spotify.com/v1/audio-features?ids=${q.join(",")}`,{headers:{Authorization:"Bearer "+u,"Content-Type":"application/json"}}).then(P=>{let j=P.data.audio_features,A=j.map(S=>S.energy),y=A.reduce((S,x)=>S+x,0)/A.length,s=j.map(S=>(S.loudness+60)/60),m=s.reduce((S,x)=>S+x,0)/s.length,h=j.map(S=>1-S.valence),B=h.reduce((S,x)=>S+x,0)/h.length,R=Math.round(y*360);l(3,o={loudness:m>=.5?"loud":"quiet",energetic:B<=.5?"happy":"melancholic",happiness:y>=.5?"energetic":"chill"}),g({color:H.hsl(R,m,B).hex(),gradient:H.hsl(R,m,B*.6).hex()})})})})}function _(){t.classList.remove("invisible"),navigator.clipboard.writeText(a.color),l(1,t.style.opacity="0%",t);let g={x:Math.random()*100,y:(Math.random()*1.5-1)*100},c=.1;l(1,t.style.transform=`translate(${g.x}%, ${g.y}%)`,t);let q=setInterval(()=>{g.y+=c,c+=.1,l(1,t.style.transform=`translate(${g.x}%, ${g.y}%)`,t)},10);setTimeout(()=>{t.classList.add("invisible"),l(1,t.style.opacity="100%",t),clearInterval(q)},500)}f(),window.addEventListener("storage",f);function M(g){he[g?"unshift":"push"](()=>{t=g,l(1,t)})}return i.$$.update=()=>{i.$$.dirty&1&&n&&d().then(g=>{l(2,a=g)})},[n,t,a,o,r,b,w,_,M]}class Ee extends le{constructor(e){super();se(this,e,ke,we,oe,{})}}export{Ee as default};