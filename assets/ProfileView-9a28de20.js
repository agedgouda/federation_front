import{l as g,n as q,r as N,b as h,c as v,w as a,d as e,q as U,Q as k,h as t,z as p,t as C,R as P,f as n,S as R,g as f,y as b,_ as j,e as M,C as m,L as V,B as x,A as d,M as A,i as B,E as y,O as E,P as F,T as O,U as $}from"./index-6ea6a7f8.js";import{a as T,_ as r}from"./FormField-1ee1fcc0.js";import{_ as Y}from"./FormFilePicker-ad53a531.js";const D={class:"space-y-3 text-center md:text-left lg:mx-12"},G={class:"flex justify-center md:block"},H={class:"text-2xl"},L=t("p",null,[p("Last login "),t("b",null,"12 mins ago"),p(" from "),t("b",null,"127.0.0.1")],-1),z={class:"flex justify-center md:block"},Q={__name:"UserCard",setup(S){const u=g(),i=q(()=>u.userName),l=N(!1);return(_,c)=>(h(),v(f,null,{default:a(()=>[e(U,{type:"justify-around lg:justify-center"},{default:a(()=>[e(k,{class:"lg:mx-12"}),t("div",D,[t("div",G,[e(T,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=w=>l.value=w),name:"notifications-switch",type:"switch",label:"Notifications","input-value":!0},null,8,["modelValue"])]),t("h1",H,[p(" Howdy, "),t("b",null,C(i.value),1),p("! ")]),L,t("div",z,[e(P,{label:"Verified",color:"info",icon:n(R)},null,8,["icon"])])])]),_:1})]),_:1}))}},I={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},X={__name:"ProfileView",setup(S){const u=g(),i=b({name:u.userName,email:u.userEmail}),l=b({password_current:"",password:"",password_confirmation:""}),_=()=>{u.setUser(i)},c=()=>{};return(w,o)=>(h(),v(j,null,{default:a(()=>[e(B,null,{default:a(()=>[e(M,{icon:n(y),title:"Profile",main:""},{default:a(()=>[e(m,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:n(E),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(Q,{class:"mb-6"}),t("div",I,[e(f,{"is-form":"",onSubmit:V(_,["prevent"])},{footer:a(()=>[e(x,null,{default:a(()=>[e(m,{color:"info",type:"submit",label:"Submit"}),e(m,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Avatar",help:"Max 500kb"},{default:a(()=>[e(Y,{label:"Upload"})]),_:1}),e(r,{label:"Name",help:"Required. Your name"},{default:a(()=>[e(d,{modelValue:i.name,"onUpdate:modelValue":o[0]||(o[0]=s=>i.name=s),icon:n(y),name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"E-mail",help:"Required. Your e-mail"},{default:a(()=>[e(d,{modelValue:i.email,"onUpdate:modelValue":o[1]||(o[1]=s=>i.email=s),icon:n(F),type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"]),e(f,{"is-form":"",onSubmit:V(c,["prevent"])},{footer:a(()=>[e(x,null,{default:a(()=>[e(m,{type:"submit",color:"info",label:"Submit"}),e(m,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Current password",help:"Required. Your current password"},{default:a(()=>[e(d,{modelValue:l.password_current,"onUpdate:modelValue":o[2]||(o[2]=s=>l.password_current=s),icon:n(O),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(A),e(r,{label:"New password",help:"Required. New password"},{default:a(()=>[e(d,{modelValue:l.password,"onUpdate:modelValue":o[3]||(o[3]=s=>l.password=s),icon:n($),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"Confirm password",help:"Required. New password one more time"},{default:a(()=>[e(d,{modelValue:l.password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=s=>l.password_confirmation=s),icon:n($),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"])])]),_:1})]),_:1}))}};export{X as default};
