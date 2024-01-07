import{b as y,d as C,f as h,K as N,L as O,l as u,M as D,H as w,r as x,i as F,w as l,x as M,e,y as z,k as d,z as c,N as S,p as T,O as i,P as p,A as $,s as _,t as j,Q as q,R as E,I as v,S as G}from"./index-9053cb6d.js";import{_ as b}from"./FormCheckRadioGroup-c7760fd2.js";import{_ as H}from"./FormFilePicker-48960ac3.js";import{_ as s}from"./FormCheckRadio-3c0257f9.js";import{_ as g}from"./SectionTitle-5d104554.js";const I={class:"flex flex-col mb-6 -mt-6 -mr-6 -ml-6 animate-fade-in"},L={__name:"NotificationBarInCard",props:{color:{type:String,required:!0}},setup(V){return(r,t)=>(y(),C("div",I,[h("div",{class:O([[u(D)[V.color]],"rounded-t-2xl flex flex-col p-6 transition-colors"])},[N(r.$slots,"default")],2)]))}},R={class:"capitalize"},P={__name:"FormsView",setup(V){const r=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],t=w({name:"John Doe",email:"john.doe@example.com",phone:"",department:r[0],subject:"",question:""}),n=w({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),k=()=>{},U=x(!0),m=x(0),f=["info","success","danger","warning"],B=()=>{m.value=f[m.value+1]?m.value+1:0};return(Y,o)=>(y(),F(M,null,{default:l(()=>[e($,null,{default:l(()=>[e(z,{icon:u(q),title:"Forms example",main:""},{default:l(()=>[e(d,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:u(E),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(c,{form:"",onSubmit:S(k,["prevent"])},{footer:l(()=>[e(T,null,{default:l(()=>[e(d,{type:"submit",color:"info",label:"Submit"}),e(d,{type:"reset",color:"info",outline:"",label:"Reset"})]),_:1})]),default:l(()=>[e(s,{label:"Grouped with icons"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[0]||(o[0]=a=>t.name=a),icon:u(v)},null,8,["modelValue","icon"]),e(i,{modelValue:t.email,"onUpdate:modelValue":o[1]||(o[1]=a=>t.email=a),type:"email",icon:u(G)},null,8,["modelValue","icon"])]),_:1}),e(s,{label:"With help line",help:"Do not enter the leading zero"},{default:l(()=>[e(i,{modelValue:t.phone,"onUpdate:modelValue":o[2]||(o[2]=a=>t.phone=a),type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])]),_:1}),e(s,{label:"Dropdown"},{default:l(()=>[e(i,{modelValue:t.department,"onUpdate:modelValue":o[3]||(o[3]=a=>t.department=a),options:r},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Question",help:"Your question. Max 255 characters"},{default:l(()=>[e(i,{type:"textarea",placeholder:"Explain how we can help you"})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(g,null,{default:l(()=>[_("Custom elements")]),_:1}),e($,null,{default:l(()=>[e(c,null,{default:l(()=>[e(s,{label:"Checkbox"},{default:l(()=>[e(b,{modelValue:n.checkbox,"onUpdate:modelValue":o[4]||(o[4]=a=>n.checkbox=a),name:"sample-checkbox",options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Radio"},{default:l(()=>[e(b,{modelValue:n.radio,"onUpdate:modelValue":o[5]||(o[5]=a=>n.radio=a),name:"sample-radio",type:"radio",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Switch"},{default:l(()=>[e(b,{modelValue:n.switch,"onUpdate:modelValue":o[6]||(o[6]=a=>n.switch=a),name:"sample-switch",type:"switch",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(p),e(H,{modelValue:n.file,"onUpdate:modelValue":o[7]||(o[7]=a=>n.file=a),label:"Upload"},null,8,["modelValue"])]),_:1}),e(g,null,{default:l(()=>[_("Form with status example")]),_:1}),e(c,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto","is-form":"","is-hoverable":"",onSubmit:S(B,["prevent"])},{footer:l(()=>[e(d,{label:"Trigger",type:"submit",color:"info"})]),default:l(()=>[e(L,{color:f[m.value],"is-placed-with-header":U.value},{default:l(()=>[h("span",null,[h("b",R,j(f[m.value]),1),_(" state")])]),_:1},8,["color","is-placed-with-header"]),e(s,{label:"Fields"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[8]||(o[8]=a=>t.name=a),"icon-left":u(v),help:"Your full name",placeholder:"Name"},null,8,["modelValue","icon-left"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}};export{P as default};