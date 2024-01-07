import{A as g,c as N,r as q,b as h,h as v,w as a,e,m as U,R as k,f as t,n as p,t as P,S as R,v as n,T as j,x as f,E as b,q as C,s as M,l as m,L as V,k as x,M as d,N as A,y as B,G as y,P as E,Q as F,U as G,V as $}from"./index-06cd5241.js";import{a as T,_ as r}from"./FormCheckRadio-d7faeac9.js";import{_ as Y}from"./FormFilePicker-0ea6239d.js";const D={class:"space-y-3 text-center md:text-left lg:mx-12"},H={class:"flex justify-center md:block"},L={class:"text-2xl"},O=t("p",null,[p("Last login "),t("b",null,"12 mins ago"),p(" from "),t("b",null,"127.0.0.1")],-1),Q={class:"flex justify-center md:block"},z={__name:"UserCard",setup(S){const u=g(),i=N(()=>u.userName),s=q(!1);return(_,c)=>(h(),v(f,null,{default:a(()=>[e(U,{type:"justify-around lg:justify-center"},{default:a(()=>[e(k,{class:"lg:mx-12"}),t("div",D,[t("div",H,[e(T,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=w=>s.value=w),name:"notifications-switch",type:"switch",label:"Notifications","input-value":!0},null,8,["modelValue"])]),t("h1",L,[p(" Howdy, "),t("b",null,P(i.value),1),p("! ")]),O,t("div",Q,[e(R,{label:"Verified",color:"info",icon:n(j)},null,8,["icon"])])])]),_:1})]),_:1}))}},I={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},X={__name:"ProfileView",setup(S){const u=g(),i=b({name:u.userName,email:u.userEmail}),s=b({password_current:"",password:"",password_confirmation:""}),_=()=>{u.setUser(i)},c=()=>{};return(w,o)=>(h(),v(C,null,{default:a(()=>[e(B,null,{default:a(()=>[e(M,{icon:n(y),title:"Profile",main:""},{default:a(()=>[e(m,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:n(E),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(z,{class:"mb-6"}),t("div",I,[e(f,{"is-form":"",onSubmit:V(_,["prevent"])},{footer:a(()=>[e(x,null,{default:a(()=>[e(m,{color:"info",type:"submit",label:"Submit"}),e(m,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Avatar",help:"Max 500kb"},{default:a(()=>[e(Y,{label:"Upload"})]),_:1}),e(r,{label:"Name",help:"Required. Your name"},{default:a(()=>[e(d,{modelValue:i.name,"onUpdate:modelValue":o[0]||(o[0]=l=>i.name=l),icon:n(y),name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"E-mail",help:"Required. Your e-mail"},{default:a(()=>[e(d,{modelValue:i.email,"onUpdate:modelValue":o[1]||(o[1]=l=>i.email=l),icon:n(F),type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"]),e(f,{"is-form":"",onSubmit:V(c,["prevent"])},{footer:a(()=>[e(x,null,{default:a(()=>[e(m,{type:"submit",color:"info",label:"Submit"}),e(m,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Current password",help:"Required. Your current password"},{default:a(()=>[e(d,{modelValue:s.password_current,"onUpdate:modelValue":o[2]||(o[2]=l=>s.password_current=l),icon:n(G),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(A),e(r,{label:"New password",help:"Required. New password"},{default:a(()=>[e(d,{modelValue:s.password,"onUpdate:modelValue":o[3]||(o[3]=l=>s.password=l),icon:n($),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"Confirm password",help:"Required. New password one more time"},{default:a(()=>[e(d,{modelValue:s.password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=l=>s.password_confirmation=l),icon:n($),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}};export{X as default};
