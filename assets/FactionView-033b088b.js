import{j as R,r as h,k as $,l as B,n as g,p as I,b as o,c as y,w as s,d as a,q as S,h as t,t as e,g as _,o as F,s as w,v as d,x as b,F as N,y as V,z as T,a as M,_ as z,e as H,f as j,A as O,i as W,B as q,C as P}from"./index-95d7fbff.js";import{_ as E}from"./TableFormat-dd2f6b86.js";const A=R("ship",()=>{const p=h([]);async function r(n){try{return(await $.get({}.VITE_API_URL+"ships/class/faction/"+n)).data.data}catch(l){throw new Error(l.message)}}async function m(n){try{return(await $.get({}.VITE_API_URL+"ships/class/"+n)).data.data}catch(l){throw new Error(l.message)}}return{ships:p,getFactionClasses:r,getClassShips:m}}),U=["src"],K={class:"space-y-3 text-center md:text-left lg:mx-12"},G={class:"flex justify-center md:block"},J={class:"text-2xl"},Q={__name:"FactionCard",props:{faction:{type:Object,required:!0}},setup(p){const r=p,m=B();g(()=>m.userName),h(!1);const n=h(r.faction);return I(()=>r.faction,l=>{n.value=l}),(l,f)=>(o(),y(_,null,{default:s(()=>[a(S,{type:"justify-around lg:justify-center"},{default:s(()=>[t("img",{src:n.value.logo_url,width:"100"},null,8,U),t("div",K,[t("div",G,[t("h1",J,[t("b",null,e(n.value.name),1)])])])]),_:1})]),_:1}))}},X={class:"text-center space-y-1 md:text-left md:mr-6"},Y={class:"text-xl"},Z={class:"italic"},tt={key:0},lt={key:1},et={class:"grid grid-cols-3 lg:grid-cols-3 gap-6 mb-6"},st={class:"flex flex-col justify-between"},at=t("h4",{class:"text-xl"},"Movement",-1),nt=t("thead",null,[t("tr",null,[t("th",null,"Base Speed"),t("th",null,"Mode"),t("th",null,"Cost")])],-1),ot=t("td",null,"8",-1),ut=t("td",null,"16",-1),ct=t("td",null,"24",-1),rt=t("h4",{class:"text-xl"},"Defenses",-1),it=t("thead",null,[t("tr",null,[t("th",null,"Location"),t("th",null,"Size")])],-1),dt=t("td",null,"Shield 1",-1),_t=t("td",null,"Shield 2",-1),ht=t("td",null,"Shield 3",-1),pt=t("td",null,"Forward Hull",-1),mt=t("td",null,"Rear Hull",-1),ft={key:0},vt=t("td",null,"Rear Hull",-1),bt={key:1},gt=t("td",null,"Rear Hull",-1),yt={class:"flex flex-col justify-between"},xt=t("h4",{class:"text-xl"},"Ship Compartments",-1),wt=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Size")])],-1),St=t("td",null,"Auxiliary Control",-1),Ct=t("td",null,"Bridge",-1),kt=t("td",null,"Emergency Bridge",-1),$t=t("td",null,"Lab",-1),jt=t("td",null,"Shuttle Bays",-1),Bt=t("td",null,"Transporter",-1),Ft=t("td",null,"Tractor Beam",-1),Et=t("td",null,"Reactor",-1),At=t("td",null,"Impulse Engine",-1),Dt=t("td",null,"Battery",-1),Lt=t("td",null,"Right Warp",-1),Rt=t("td",null,"Left Warp",-1),It={key:0},Nt=t("td",null,"Center Warp",-1),Vt={class:"flex flex-col justify-between"},Tt=t("h4",{class:"text-xl"},"Weapons",-1),Mt=t("thead",null,[t("tr",null,[t("th",null,"Location"),t("th",null,"Arc"),t("th",null,"Name")])],-1),zt={class:"grid grid-cols-2 lg:grid-cols-2 gap-6 mb-6"},Ht={class:"flex flex-col justify-between"},Ot=["src"],Wt={class:"flex flex-col justify-between"},qt={key:0},Pt={key:1},Ut={"data-label":"image",class:"w-20"},Kt=["src"],Gt={__name:"CardBoxShip",props:{ship:{type:Object,required:!0}},setup(p){const r=p,m=A(),n=h([]),l=h(r.ship),f=h(r.ship.id);F(async()=>{try{n.value=await m.getClassShips(f.value)}catch(u){throw console.error(u),new Error(u.message)}});const C=g(()=>n.value.map(u=>({ship_counter_url:u.ship_counter_url,name:u.name+" "+u.registry,id:u.id})));return(u,v)=>(o(),y(_,{class:"mb-6 last:mb-0"},{default:s(()=>[a(S,null,{default:s(()=>[a(S,{type:"justify-start"},{default:s(()=>[t("div",X,[t("h4",Y,[w(e(l.value.faction_identifier)+" "+e(l.value.name)+" ",1),t("span",Z,e(l.value.registry),1)]),t("h3",null,[w(e(l.value.ship_class)+" ",1),l.value.ship_class=="Lead ship"?(o(),d("span",tt,"of class")):(o(),d("span",lt,"class"))]),t("div",null,e(l.value.type),1),t("div",null,"Ship Power: "+e(l.value.power),1),t("div",et,[t("div",st,[a(_,{class:"mb-2"},{default:s(()=>[at,t("h1",null,"Turn Mode: "+e(l.value.turn_mode),1),t("h1",null,"Acceleration Cost: "+e(l.value.acceleration_cost),1),t("h1",null,"Deceleration Cost: "+e(l.value.deceleration_cost),1),t("table",null,[nt,t("tbody",null,[t("tr",null,[ot,t("td",null,e(l.value.base_8_turn_mode),1),t("td",null,e(l.value.base_8_turn_cost),1)]),t("tr",null,[ut,t("td",null,e(l.value.base_16_turn_mode),1),t("td",null,e(l.value.base_16_turn_cost),1)]),t("tr",null,[ct,t("td",null,e(l.value.base_24_turn_mode),1),t("td",null,e(l.value.base_24_turn_cost),1)])])])]),_:1}),a(_,{class:"mb-2"},{default:s(()=>[rt,t("table",null,[it,t("tbody",null,[t("tr",null,[dt,t("td",null,e(l.value.shield_1),1)]),t("tr",null,[_t,t("td",null,e(l.value.shield_2),1)]),t("tr",null,[ht,t("td",null,e(l.value.shield_3),1)]),t("tr",null,[pt,t("td",null,e(l.value.f_hull),1)]),t("tr",null,[mt,t("td",null,e(l.value.r_hull),1)]),l.value.c_hull>0?(o(),d("tr",ft,[vt,t("td",null,e(l.value.r_hull),1)])):b("",!0),l.value.l_hull>0?(o(),d("tr",bt,[gt,t("td",null,e(l.value.r_hull),1)])):b("",!0)])])]),_:1})]),t("div",yt,[a(_,{class:"mb-2 last:mb-3"},{default:s(()=>[xt,t("table",null,[wt,t("tbody",null,[t("tr",null,[St,t("td",null,e(l.value.aux),1)]),t("tr",null,[Ct,t("td",null,e(l.value.bridge),1)]),t("tr",null,[kt,t("td",null,e(l.value.emergency_bridge),1)]),t("tr",null,[$t,t("td",null,e(l.value.lab),1)]),t("tr",null,[jt,t("td",null,e(l.value.shuttle_bays),1)]),t("tr",null,[Bt,t("td",null,e(l.value.transporter),1)]),t("tr",null,[Ft,t("td",null,e(l.value.tractor_beam),1)]),t("tr",null,[Et,t("td",null,e(l.value.power_reactor),1)]),t("tr",null,[At,t("td",null,e(l.value.impulse),1)]),t("tr",null,[Dt,t("td",null,e(l.value.battery),1)]),t("tr",null,[Lt,t("td",null,e(l.value.r_warp),1)]),t("tr",null,[Rt,t("td",null,e(l.value.l_warp),1)]),l.value.c_warp>0?(o(),d("tr",It,[Nt,t("td",null,e(l.value.c_warp),1)])):b("",!0)])])]),_:1})]),t("div",Vt,[a(_,{class:"mb-2"},{default:s(()=>[Tt,t("table",null,[Mt,t("tbody",null,[(o(!0),d(N,null,V(l.value.weapons,c=>(o(),d("tr",null,[t("td",null,e(c.location),1),t("td",null,e(c.arc),1),t("td",null,e(c.name),1)]))),256))])])]),_:1})])]),t("div",zt,[t("div",Ht,[a(_,{class:"mb-2"},{default:s(()=>[t("img",{src:l.value.ship_image_url,style:{"background-color":"white"}},null,8,Ot)]),_:1})]),t("div",Wt,[a(_,{class:"mb-2"},{default:s(()=>[(l.value.id=f.value)?(o(),d("span",qt,e(l.value.name),1)):(o(),d("span",Pt,"Other "+e(l.value.ship_class),1)),w(" Class Ships "),a(E,{"table-data":C.value},{"column-ship_counter_url":s(({item:c})=>[t("td",Ut,[t("img",{src:c,style:{"background-color":"white"}},null,8,Kt)])]),"column-name":s(({item:c})=>[t("td",null,e(c),1)]),_:1},8,["table-data"])]),_:1})])])])]),_:1})]),_:1})]),_:1}))}},Jt={"data-label":"image",class:"w-20"},Qt=["src"],Zt={__name:"FactionView",setup(p){const r=T(),n=g(()=>r.path.replace("/factions/","")).value;B();const l=M(),f=A(),u=h({id:"",logo_url:"",name:""}),v=h({}),c=h([]);F(async()=>{try{u.value=await l.getFaction(n),c.value=await f.getFactionClasses(n)}catch(i){throw console.error(i),new Error(i.message)}});const D=g(()=>c.value.map(i=>({ship_counter_url:i.ship_counter_url,name:i.name,id:i.id})));console.log("production");const L=i=>{v.value=c.value.find(k=>k.id===i)};return(i,k)=>(o(),y(z,null,{default:s(()=>[a(W,null,{default:s(()=>[a(H,{icon:j(q),title:u.value.name,main:""},{default:s(()=>[a(O,{href:"https://twitter.com/jvalenzu?lang=en",target:"_blank",icon:j(P),label:"Dunsel",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon","title"]),a(Q,{class:"mb-6",faction:u.value},null,8,["faction"]),a(_,{class:"mb-6","has-table":""},{default:s(()=>[a(E,{"table-data":D.value,onOnClick:L},{"column-ship_counter_url":s(({item:x})=>[t("td",Jt,[t("img",{src:x,style:{"background-color":"white"}},null,8,Qt)])]),"column-name":s(({item:x})=>[t("td",null,e(x)+" Class",1)]),_:1},8,["table-data"])]),_:1}),v.value.id?(o(),y(Gt,{key:0,ship:v.value},null,8,["ship"])):b("",!0)]),_:1})]),_:1}))}};export{Zt as default};
