import{j as L,r as h,k as $,l as B,n as y,p as R,b as o,c as x,w as s,d as a,q as S,h as t,t as e,g as _,o as F,s as b,v as d,x as g,F as M,y as V,z,a as H,_ as O,e as T,f as j,A as W,i as q,B as I,C as K}from"./index-762f234f.js";import{_ as D}from"./TableFormat-c123d01f.js";const E=L("ship",()=>{const m=h([]);async function r(n){try{return(await $.get("http://127.0.0.1:8000/api/ships/class/faction/"+n)).data.data}catch(l){throw new Error(l.message)}}async function f(n){try{return(await $.get("http://127.0.0.1:8000/api/ships/class/"+n)).data.data}catch(l){throw new Error(l.message)}}return{ships:m,getFactionClasses:r,getClassShips:f}}),P=["src"],G={class:"space-y-3 text-center md:text-left lg:mx-12"},J={class:"flex justify-center md:block"},Q={class:"text-2xl"},U={__name:"FactionCard",props:{faction:{type:Object,required:!0}},setup(m){const r=m,f=B();y(()=>f.userName),h(!1);const n=h(r.faction);return R(()=>r.faction,l=>{n.value=l}),(l,p)=>(o(),x(_,null,{default:s(()=>[a(S,{type:"justify-around lg:justify-center"},{default:s(()=>[t("img",{src:n.value.logo_url,width:"100"},null,8,P),t("div",G,[t("div",J,[t("h1",Q,[t("b",null,e(n.value.name),1)])])])]),_:1})]),_:1}))}},X={class:"text-center space-y-1 md:text-left md:mr-6"},Y={class:"text-xl"},Z={class:"italic"},tt={key:0},lt={key:1},et={class:"grid grid-cols-3 lg:grid-cols-3 gap-6 mb-6"},st={class:"flex flex-col justify-between"},at=t("h4",{class:"text-xl"},"Movement",-1),nt=t("thead",null,[t("tr",null,[t("th",null,"Base Speed"),t("th",null,"Mode"),t("th",null,"Cost")])],-1),ot=t("td",null,"8",-1),ut=t("td",null,"16",-1),ct=t("td",null,"24",-1),rt=t("h4",{class:"text-xl"},"Defenses",-1),it=t("thead",null,[t("tr",null,[t("th",null,"Location"),t("th",null,"Size")])],-1),dt=t("td",null,"Shield 1",-1),_t=t("td",null,"Shield 2",-1),ht=t("td",null,"Shield 3",-1),pt=t("td",null,"Forward Hull",-1),mt=t("td",null,"Rear Hull",-1),ft={key:0},vt=t("td",null,"Rear Hull",-1),bt={key:1},gt=t("td",null,"Rear Hull",-1),yt={class:"flex flex-col justify-between"},xt=t("h4",{class:"text-xl"},"Ship Compartments",-1),wt=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Size")])],-1),St=t("td",null,"Auxiliary Control",-1),Ct=t("td",null,"Bridge",-1),kt=t("td",null,"Emergency Bridge",-1),$t=t("td",null,"Lab",-1),jt=t("td",null,"Shuttle Bays",-1),Bt=t("td",null,"Transporter",-1),Ft=t("td",null,"Tractor Beam",-1),Dt=t("td",null,"Reactor",-1),Et=t("td",null,"Impulse Engine",-1),Nt=t("td",null,"Battery",-1),At=t("td",null,"Right Warp",-1),Lt=t("td",null,"Left Warp",-1),Rt={key:0},Mt=t("td",null,"Center Warp",-1),Vt={class:"flex flex-col justify-between"},zt=t("h4",{class:"text-xl"},"Weapons",-1),Ht=t("thead",null,[t("tr",null,[t("th",null,"Location"),t("th",null,"Arc"),t("th",null,"Name")])],-1),Ot={class:"grid grid-cols-2 lg:grid-cols-2 gap-6 mb-6"},Tt={class:"flex flex-col justify-between"},Wt=["src"],qt={class:"flex flex-col justify-between"},It={key:0},Kt={key:1},Pt={"data-label":"image",class:"w-20"},Gt=["src"],Jt={__name:"CardBoxShip",props:{ship:{type:Object,required:!0}},setup(m){const r=m,f=E(),n=h([]),l=h(r.ship),p=h(r.ship.id);F(async()=>{try{console.log(p.value),n.value=await f.getClassShips(p.value)}catch(u){throw console.error(u),new Error(u.message)}});const C=y(()=>n.value.map(u=>({ship_counter_url:u.ship_counter_url,name:u.name+" "+u.registry,id:u.id})));return(u,v)=>(o(),x(_,{class:"mb-6 last:mb-0"},{default:s(()=>[a(S,null,{default:s(()=>[a(S,{type:"justify-start"},{default:s(()=>[b(e(p.value)+" ",1),t("div",X,[t("h4",Y,[b(e(l.value.faction_identifier)+" "+e(l.value.name)+" ",1),t("span",Z,e(l.value.registry),1)]),t("h3",null,[b(e(l.value.ship_class)+" ",1),l.value.ship_class=="Lead ship"?(o(),d("span",tt,"of class")):(o(),d("span",lt,"class"))]),t("div",null,e(l.value.type),1),t("div",null,"Ship Power: "+e(l.value.power),1),t("div",et,[t("div",st,[a(_,{class:"mb-2"},{default:s(()=>[at,t("h1",null,"Turn Mode: "+e(l.value.turn_mode),1),t("h1",null,"Acceleration Cost: "+e(l.value.acceleration_cost),1),t("h1",null,"Deceleration Cost: "+e(l.value.deceleration_cost),1),t("table",null,[nt,t("tbody",null,[t("tr",null,[ot,t("td",null,e(l.value.base_8_turn_mode),1),t("td",null,e(l.value.base_8_turn_cost),1)]),t("tr",null,[ut,t("td",null,e(l.value.base_16_turn_mode),1),t("td",null,e(l.value.base_16_turn_cost),1)]),t("tr",null,[ct,t("td",null,e(l.value.base_24_turn_mode),1),t("td",null,e(l.value.base_24_turn_cost),1)])])])]),_:1}),a(_,{class:"mb-2"},{default:s(()=>[rt,t("table",null,[it,t("tbody",null,[t("tr",null,[dt,t("td",null,e(l.value.shield_1),1)]),t("tr",null,[_t,t("td",null,e(l.value.shield_2),1)]),t("tr",null,[ht,t("td",null,e(l.value.shield_3),1)]),t("tr",null,[pt,t("td",null,e(l.value.f_hull),1)]),t("tr",null,[mt,t("td",null,e(l.value.r_hull),1)]),l.value.c_hull>0?(o(),d("tr",ft,[vt,t("td",null,e(l.value.r_hull),1)])):g("",!0),l.value.l_hull>0?(o(),d("tr",bt,[gt,t("td",null,e(l.value.r_hull),1)])):g("",!0)])])]),_:1})]),t("div",yt,[a(_,{class:"mb-2 last:mb-3"},{default:s(()=>[xt,t("table",null,[wt,t("tbody",null,[t("tr",null,[St,t("td",null,e(l.value.aux),1)]),t("tr",null,[Ct,t("td",null,e(l.value.bridge),1)]),t("tr",null,[kt,t("td",null,e(l.value.emergency_bridge),1)]),t("tr",null,[$t,t("td",null,e(l.value.lab),1)]),t("tr",null,[jt,t("td",null,e(l.value.shuttle_bays),1)]),t("tr",null,[Bt,t("td",null,e(l.value.transporter),1)]),t("tr",null,[Ft,t("td",null,e(l.value.tractor_beam),1)]),t("tr",null,[Dt,t("td",null,e(l.value.power_reactor),1)]),t("tr",null,[Et,t("td",null,e(l.value.impulse),1)]),t("tr",null,[Nt,t("td",null,e(l.value.battery),1)]),t("tr",null,[At,t("td",null,e(l.value.r_warp),1)]),t("tr",null,[Lt,t("td",null,e(l.value.l_warp),1)]),l.value.c_warp>0?(o(),d("tr",Rt,[Mt,t("td",null,e(l.value.c_warp),1)])):g("",!0)])])]),_:1})]),t("div",Vt,[a(_,{class:"mb-2"},{default:s(()=>[zt,t("table",null,[Ht,t("tbody",null,[(o(!0),d(M,null,V(l.value.weapons,c=>(o(),d("tr",null,[t("td",null,e(c.location),1),t("td",null,e(c.arc),1),t("td",null,e(c.name),1)]))),256))])])]),_:1})])]),t("div",Ot,[t("div",Tt,[a(_,{class:"mb-2"},{default:s(()=>[t("img",{src:l.value.ship_image_url,style:{"background-color":"white"}},null,8,Wt)]),_:1})]),t("div",qt,[a(_,{class:"mb-2"},{default:s(()=>[(l.value.id=p.value)?(o(),d("span",It,e(l.value.name),1)):(o(),d("span",Kt,"Other "+e(l.value.ship_class),1)),b(" Class Ships "),a(D,{"table-data":C.value},{"column-ship_counter_url":s(({item:c})=>[t("td",Pt,[t("img",{src:c,style:{"background-color":"white"}},null,8,Gt)])]),"column-name":s(({item:c})=>[t("td",null,e(c),1)]),_:1},8,["table-data"])]),_:1})])])])]),_:1})]),_:1})]),_:1}))}},Qt={"data-label":"image",class:"w-20"},Ut=["src"],Zt={__name:"FactionView",setup(m){const r=z(),n=y(()=>r.path.replace("/factions/","")).value;B();const l=H(),p=E(),u=h({id:"",logo_url:"",name:""}),v=h({}),c=h([]);F(async()=>{try{u.value=await l.getFaction(n),c.value=await p.getFactionClasses(n)}catch(i){throw console.error(i),new Error(i.message)}});const N=y(()=>c.value.map(i=>({ship_counter_url:i.ship_counter_url,name:i.name,id:i.id}))),A=i=>{v.value=c.value.find(k=>k.id===i)};return(i,k)=>(o(),x(O,null,{default:s(()=>[a(q,null,{default:s(()=>[a(T,{icon:j(I),title:u.value.name,main:""},{default:s(()=>[a(W,{href:"https://twitter.com/jvalenzu?lang=en",target:"_blank",icon:j(K),label:"Dunsel",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon","title"]),a(U,{class:"mb-6",faction:u.value},null,8,["faction"]),a(_,{class:"mb-6","has-table":""},{default:s(()=>[a(D,{"table-data":N.value,onOnClick:A},{"column-ship_counter_url":s(({item:w})=>[t("td",Qt,[t("img",{src:w,style:{"background-color":"white"}},null,8,Ut)])]),"column-name":s(({item:w})=>[t("td",null,e(w)+" Class",1)]),_:1},8,["table-data"])]),_:1}),v.value.id?(o(),x(Jt,{key:0,ship:v.value},null,8,["ship"])):g("",!0)]),_:1})]),_:1}))}};export{Zt as default};
