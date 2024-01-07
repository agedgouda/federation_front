import{A as I,c as p,r as h,B as T,b as s,h as $,w as n,e as a,m as j,f as t,t as e,x as w,C as q,D as E,u as V,o as L,d as r,F as x,g as P,k as M,l as N,n as F,j as D,p as W,a as z,E as H,q as O,s as G,v as B,y as K,G as J,H as Q}from"./index-06cd5241.js";const U=["src"],X={class:"space-y-3 text-center md:text-left lg:mx-12"},Y={class:"flex justify-center md:block"},Z={class:"text-2xl"},tt={__name:"FactionCard",props:{faction:{type:Object,required:!0}},setup(v){const i=v,l=I();p(()=>l.userName),h(!1);const o=h(i.faction);return T(()=>i.faction,u=>{o.value=u}),(u,m)=>(s(),$(w,null,{default:n(()=>[a(j,{type:"justify-around lg:justify-center"},{default:n(()=>[t("img",{src:o.value.logo_url,width:"100"},null,8,U),t("div",X,[t("div",Y,[t("h1",Z,[t("b",null,e(o.value.name),1)])])])]),_:1})]),_:1}))}},R=q("ship",()=>{const v=h([]);async function i(o){try{return(await E.get("http://127.0.0.1:8000/api/ships/class/faction/"+o)).data.data}catch(u){throw new Error(u.message)}}async function l(o){try{return(await E.get("http://127.0.0.1:8000/api/ships/class/"+o)).data.data}catch(u){throw new Error(u.message)}}return{ships:v,getFactionClasses:i,getClassShips:l}}),lt={class:"table-auto"},et=t("thead",null,[t("tr",null,[t("th"),t("th",null,"Class Name")])],-1),st=["onClick"],at={"data-label":"image",class:"w-20"},nt=["src"],ot={"data-label":"ship name"},ut={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ct={__name:"TableFactionClasses",props:{factionId:{type:String,required:!0}},emits:["lead-ship"],setup(v,{emit:i}){const l=v;V();const o=R(),u=h([]);L(async()=>{try{u.value=await o.getFactionClasses(l.factionId)}catch(c){throw console.error(c),new Error(c.message)}});const m=p(()=>u.value),d=c=>{i("lead-ship",c)},b=h(5),_=h(0),S=p(()=>m.value.slice(b.value*_.value,b.value*(_.value+1))),f=p(()=>Math.ceil(m.value.length/b.value)),g=p(()=>_.value+1),k=p(()=>{const c=[];for(let C=0;C<f.value;C++)c.push(C);return c});return(c,C)=>(s(),r(x,null,[t("table",lt,[et,t("tbody",null,[(s(!0),r(x,null,P(S.value,y=>(s(),r("tr",{onClick:A=>d(y),class:"cursor-pointer"},[t("td",at,[t("img",{src:y.ship_counter_url,style:{"background-color":"white"}},null,8,nt)]),t("td",ot,e(y.name)+" Class ",1)],8,st))),256))])]),t("div",ut,[a(j,null,{default:n(()=>[a(M,null,{default:n(()=>[(s(!0),r(x,null,P(k.value,y=>(s(),$(N,{key:y,active:y===_.value,label:y+1,color:y===_.value?"lightDark":"whiteDark",small:"",onClick:A=>_.value=y},null,8,["active","label","color","onClick"]))),128))]),_:1}),t("small",null,"Page "+e(g.value)+" of "+e(f.value),1)]),_:1})])],64))}},rt={class:"table-auto"},it=t("thead",null,[t("tr",null,[t("th"),t("th",null,"Class Name")])],-1),dt={"data-label":"image",class:"w-20"},_t=["src"],ht={"data-label":"ship name"},pt={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},vt={__name:"TableClassShips",props:{classId:{type:Number,required:!0}},setup(v){const i=v,l=R(),o=h([]);L(async()=>{try{o.value=await l.getClassShips(i.classId)}catch(g){throw console.error(g),new Error(g.message)}});const u=p(()=>o.value),m=h(5),d=h(0),b=p(()=>u.value.slice(m.value*d.value,m.value*(d.value+1))),_=p(()=>Math.ceil(u.value.length/m.value)),S=p(()=>d.value+1),f=p(()=>{const g=[];for(let k=0;k<_.value;k++)g.push(k);return g});return(g,k)=>(s(),r(x,null,[t("table",rt,[it,t("tbody",null,[(s(!0),r(x,null,P(b.value,c=>(s(),r("tr",null,[t("td",dt,[t("img",{src:c.ship_counter_url,style:{"background-color":"white"}},null,8,_t)]),t("td",ht,e(c.name)+" "+e(c.registry),1)]))),256))])]),t("div",pt,[a(j,null,{default:n(()=>[a(M,null,{default:n(()=>[(s(!0),r(x,null,P(f.value,c=>(s(),$(N,{key:c,active:c===d.value,label:c+1,color:c===d.value?"lightDark":"whiteDark",small:"",onClick:C=>d.value=c},null,8,["active","label","color","onClick"]))),128))]),_:1}),t("small",null,"Page "+e(S.value)+" of "+e(_.value),1)]),_:1})])],64))}},mt={class:"text-center space-y-1 md:text-left md:mr-6"},ft={class:"text-xl"},bt={class:"italic"},gt={key:0},yt={key:1},wt={class:"grid grid-cols-3 lg:grid-cols-3 gap-6 mb-6"},xt={class:"flex flex-col justify-between"},kt=t("h4",{class:"text-xl"},"Movement",-1),$t=t("thead",null,[t("tr",null,[t("th",null,"Base Speed"),t("th",null,"Mode"),t("th",null,"Cost")])],-1),St=t("td",null,"8",-1),Ct=t("td",null,"16",-1),jt=t("td",null,"24",-1),Pt=t("h4",{class:"text-xl"},"Defenses",-1),Dt=t("thead",null,[t("tr",null,[t("th",null,"Location"),t("th",null,"Size")])],-1),Ft=t("td",null,"Shield 1",-1),Bt=t("td",null,"Shield 2",-1),Lt=t("td",null,"Shield 3",-1),Nt=t("td",null,"Forward Hull",-1),Et=t("td",null,"Rear Hull",-1),Ht={key:0},It=t("td",null,"Rear Hull",-1),Mt={key:1},Rt=t("td",null,"Rear Hull",-1),At={class:"flex flex-col justify-between"},Tt=t("h4",{class:"text-xl"},"Ship Compartments",-1),qt=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Size")])],-1),Vt=t("td",null,"Auxiliary Control",-1),Wt=t("td",null,"Bridge",-1),zt=t("td",null,"Emergency Bridge",-1),Ot=t("td",null,"Lab",-1),Gt=t("td",null,"Transporter",-1),Kt=t("td",null,"Tractor Beam",-1),Jt=t("td",null,"Reactor",-1),Qt=t("td",null,"Impulse Engine",-1),Ut=t("td",null,"Battery",-1),Xt=t("td",null,"Right Warp",-1),Yt=t("td",null,"Left Warp",-1),Zt={key:0},tl=t("td",null,"Center Warp",-1),ll={class:"flex flex-col justify-between"},el=t("h4",{class:"text-xl"},"Weapons",-1),sl=t("thead",null,[t("tr",null,[t("th",null,"Location"),t("th",null,"Arc"),t("th",null,"Name")])],-1),al={class:"grid grid-cols-2 lg:grid-cols-2 gap-6 mb-6"},nl={class:"flex flex-col justify-between"},ol=["src"],ul={class:"flex flex-col justify-between"},cl={key:0},rl={key:1},il={__name:"CardBoxShip",props:{ship:{type:Object,required:!0}},setup(v){const i=v,l=h(i.ship),o=h(i.ship.id);return(u,m)=>(s(),$(w,{class:"mb-6 last:mb-0"},{default:n(()=>[a(j,null,{default:n(()=>[a(j,{type:"justify-start"},{default:n(()=>[t("div",mt,[t("h4",ft,[F(e(l.value.faction_identifier)+" "+e(l.value.name)+" ",1),t("span",bt,e(l.value.registry),1)]),t("h3",null,[F(e(l.value.ship_class)+" ",1),l.value.ship_class=="Lead ship"?(s(),r("span",gt,"of class")):(s(),r("span",yt,"class"))]),t("div",null,e(l.value.type),1),t("div",null,"Ship Power: "+e(l.value.power),1),t("div",wt,[t("div",xt,[a(w,{class:"mb-2"},{default:n(()=>[kt,t("h1",null,"Turn Mode: "+e(l.value.turn_mode),1),t("h1",null,"Acceleration Cost: "+e(l.value.acceleration_cost),1),t("h1",null,"Deceleration Cost: "+e(l.value.deceleration_cost),1),t("table",null,[$t,t("tbody",null,[t("tr",null,[St,t("td",null,e(l.value.base_8_turn_mode),1),t("td",null,e(l.value.base_8_turn_cost),1)]),t("tr",null,[Ct,t("td",null,e(l.value.base_16_turn_mode),1),t("td",null,e(l.value.base_16_turn_cost),1)]),t("tr",null,[jt,t("td",null,e(l.value.base_24_turn_mode),1),t("td",null,e(l.value.base_24_turn_cost),1)])])])]),_:1}),a(w,{class:"mb-2"},{default:n(()=>[Pt,t("table",null,[Dt,t("tbody",null,[t("tr",null,[Ft,t("td",null,e(l.value.shield_1),1)]),t("tr",null,[Bt,t("td",null,e(l.value.shield_2),1)]),t("tr",null,[Lt,t("td",null,e(l.value.shield_3),1)]),t("tr",null,[Nt,t("td",null,e(l.value.f_hull),1)]),t("tr",null,[Et,t("td",null,e(l.value.r_hull),1)]),l.value.c_hull>0?(s(),r("tr",Ht,[It,t("td",null,e(l.value.r_hull),1)])):D("",!0),l.value.l_hull>0?(s(),r("tr",Mt,[Rt,t("td",null,e(l.value.r_hull),1)])):D("",!0)])])]),_:1})]),t("div",At,[a(w,{class:"mb-2 last:mb-3"},{default:n(()=>[Tt,t("table",null,[qt,t("tbody",null,[t("tr",null,[Vt,t("td",null,e(l.value.aux),1)]),t("tr",null,[Wt,t("td",null,e(l.value.bridge),1)]),t("tr",null,[zt,t("td",null,e(l.value.emergency_bridge),1)]),t("tr",null,[Ot,t("td",null,e(l.value.lab),1)]),t("tr",null,[Gt,t("td",null,e(l.value.transporter),1)]),t("tr",null,[Kt,t("td",null,e(l.value.tractor_beam),1)]),t("tr",null,[Jt,t("td",null,e(l.value.power_reactor),1)]),t("tr",null,[Qt,t("td",null,e(l.value.impulse),1)]),t("tr",null,[Ut,t("td",null,e(l.value.battery),1)]),t("tr",null,[Xt,t("td",null,e(l.value.r_warp),1)]),t("tr",null,[Yt,t("td",null,e(l.value.l_warp),1)]),l.value.c_warp>0?(s(),r("tr",Zt,[tl,t("td",null,e(l.value.c_warp),1)])):D("",!0)])])]),_:1})]),t("div",ll,[a(w,{class:"mb-2"},{default:n(()=>[el,t("table",null,[sl,t("tbody",null,[(s(!0),r(x,null,P(l.value.weapons,d=>(s(),r("tr",null,[t("td",null,e(d.location),1),t("td",null,e(d.arc),1),t("td",null,e(d.name),1)]))),256))])])]),_:1})])]),t("div",al,[t("div",nl,[a(w,{class:"mb-2"},{default:n(()=>[t("img",{src:l.value.ship_image_url,style:{"background-color":"white"}},null,8,ol)]),_:1})]),t("div",ul,[a(w,{class:"mb-2"},{default:n(()=>[(l.value.id=o.value)?(s(),r("span",cl,e(l.value.name),1)):(s(),r("span",rl,"Other "+e(l.value.ship_class),1)),F(" Class Ships "),a(vt,{"class-id":o.value},null,8,["class-id"])]),_:1})])])])]),_:1})]),_:1})]),_:1}))}},_l={__name:"FactionView",setup(v){const i=W(),o=p(()=>i.path.replace("/factions/","")).value,u=I(),m=z(),b=h({id:"",logo_url:"",name:""}),_=h({});L(async()=>{try{b.value=await m.getFaction(o)}catch(f){throw console.error(f),new Error(f.message)}}),H({name:u.userName,email:u.userEmail}),H({password_current:"",password:"",password_confirmation:""});const S=f=>{_.value=f};return(f,g)=>(s(),$(O,null,{default:n(()=>[a(K,null,{default:n(()=>[a(G,{icon:B(J),title:b.value.name,main:""},{default:n(()=>[a(N,{href:"https://twitter.com/jvalenzu?lang=en",target:"_blank",icon:B(Q),label:"Dunsel",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon","title"]),a(tt,{class:"mb-6",faction:b.value},null,8,["faction"]),a(w,{class:"mb-6","has-table":""},{default:n(()=>[a(ct,{"faction-id":B(o),onLeadShip:S},null,8,["faction-id"])]),_:1}),_.value.id?(s(),$(il,{key:0,ship:_.value},null,8,["ship"])):D("",!0)]),_:1})]),_:1}))}};export{_l as default};
