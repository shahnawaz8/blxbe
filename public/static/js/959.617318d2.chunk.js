"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[959],{9827:function(e,n,t){var r=t(4165),a=t(5861),l=t(9439),o=t(2791),i=t(4554),u=t(242),c=t(4512),s=t(5825),d=t(890),h=t(7665),x=t(6151),g=t(1889),m=t(9902),f=t(1087),v=t(4263),Z=t(184);n.Z=function(){var e=(0,o.useState)(0),n=(0,l.Z)(e,2),t=n[0],p=n[1],j=(new v.Z).get("isLoggedIn"),b=(0,o.useState)(""),C=(0,l.Z)(b,2),S=C[0],k=C[1],w=(0,o.useState)(""),W=(0,l.Z)(w,2),y=W[0],E=W[1],T=(0,o.useState)(""),N=(0,l.Z)(T,2),A=N[0],P=N[1],q=(0,o.useState)(""),I=(0,l.Z)(q,2),L=I[0],R=I[1],B=(0,o.useState)(""),D=(0,l.Z)(B,2),F=D[0],J=D[1],U=(0,o.useState)(""),z=(0,l.Z)(U,2),O=z[0],G=z[1],H=(0,o.useState)(""),M=(0,l.Z)(H,2),Q=M[0],Y=M[1],_=(0,o.useState)(""),K=(0,l.Z)(_,2),V=K[0],X=K[1],$=(0,o.useState)(""),ee=(0,l.Z)($,2),ne=ee[0],te=ee[1],re=(0,o.useState)(""),ae=(0,l.Z)(re,2),le=ae[0],oe=ae[1],ie=(0,o.useState)(""),ue=(0,l.Z)(ie,2),ce=ue[0],se=ue[1],de=(0,o.useState)(""),he=(0,l.Z)(de,2),xe=he[0],ge=he[1],me=(0,o.useState)(""),fe=(0,l.Z)(me,2),ve=fe[0],Ze=fe[1],pe=(0,o.useState)(""),je=(0,l.Z)(pe,2),be=je[0],Ce=je[1],Se=(0,o.useState)(""),ke=(0,l.Z)(Se,2),we=ke[0],We=ke[1],ye=(0,o.useState)(""),Ee=(0,l.Z)(ye,2),Te=Ee[0],Ne=Ee[1],Ae=(0,o.useState)(""),Pe=(0,l.Z)(Ae,2),qe=Pe[0],Ie=Pe[1],Le=(0,o.useState)(""),Re=(0,l.Z)(Le,2),Be=Re[0],De=Re[1],Fe=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l,o,i,u,c,s,d,h,x,g,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),a=function(e){return e.split(",").map((function(e){return{name:e.trim()}}))},l=(t=function(e){return e.split(",").map((function(e){return e.trim()}))})(O),o=t(ce),i=a(Q),u=parseFloat(V),c=parseFloat(ne),s=t(xe),d=t(ve),h=t(be),x=t(we),g={title:S,location:y,discription:A,relatedTo:L,imageUrl:F,responsibilities:l,tags:i,salaryStart:isNaN(u)?null:u,salaryEnd:isNaN(c)?null:c,shift:le,requirements:o,qualifications:s,education:d,experience:h,language:x,noticePeriod:Te,jobType:qe,totalExp:Be},console.log("ky ahia",g),f=JSON.stringify(g),(0,m.NE)({url:"/post/createPostWithTitle",body:f,method:"POST"}).then((function(e){console.log("knowledge",g),k(""),E(""),P(""),R(""),J(""),G(""),Y(""),X(""),te(""),oe(""),se("")})).catch((function(e){console.error("Error updating knowledge:",e)}));case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Je=function(){p((function(e){return e+1}))},Ue=function(){p((function(e){return e-1}))};return(0,Z.jsx)(Z.Fragment,{children:j?(0,Z.jsxs)(i.Z,{children:[(0,Z.jsx)(u.Z,{activeStep:t,alternativeLabel:!0,children:["Step 1","Step 2","Step 3","Step 4"].map((function(e,n){return(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(s.Z,{children:e})},e)}))}),(0,Z.jsxs)(i.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",component:"form",mt:4,children:[0===t&&(0,Z.jsxs)(i.Z,{maxWidth:600,children:[(0,Z.jsx)(d.Z,{variant:"h5",component:"h2",children:"Add job basics - Step 1"}),(0,Z.jsxs)(i.Z,{display:"flex",gap:5,children:[(0,Z.jsx)(h.Z,{required:!0,label:" Job Title",variant:"outlined",placeholder:"Ex. Software Engg.",value:S,onChange:function(e){return k(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(h.Z,{required:!0,label:"Location",placeholder:"Ex. Pune",variant:"outlined",value:y,onChange:function(e){return E(e.target.value)},margin:"normal",fullWidth:!0})]}),(0,Z.jsx)(h.Z,{label:"Description",variant:"outlined",value:A,onChange:function(e){return P(e.target.value)},margin:"normal",fullWidth:!0,multiline:!0,rows:3}),(0,Z.jsx)(h.Z,{label:"Related To",placeholder:"ex: Infosys",variant:"outlined",value:L,onChange:function(e){return R(e.target.value)},margin:"normal",required:!0,fullWidth:!0}),(0,Z.jsx)(h.Z,{label:"Image URL",variant:"outlined",value:F,onChange:function(e){return J(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(x.Z,{onClick:Je,sx:{mt:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Next"})]}),1===t&&(0,Z.jsxs)(i.Z,{maxWidth:600,children:[(0,Z.jsx)(d.Z,{variant:"h5",component:"h2",children:"Add job basics - Step 2"}),(0,Z.jsx)(h.Z,{label:"Responsibilities",variant:"outlined",value:O,onChange:function(e){return G(e.target.value)},margin:"normal",fullWidth:!0,multiline:!0,rows:4}),(0,Z.jsx)(h.Z,{label:"Tags",placeholder:"Ex. Node, Html",variant:"outlined",value:Q,onChange:function(e){return Y(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsxs)(i.Z,{sx:{display:"flex",gap:5},children:[(0,Z.jsx)(h.Z,{label:"Salary Start",placeholder:"Ex.5lpa",variant:"outlined",value:V,onChange:function(e){return X(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(h.Z,{label:"Salary End",placeholder:"Ex. 10lpa",variant:"outlined",value:ne,onChange:function(e){return te(e.target.value)},margin:"normal",fullWidth:!0})]}),(0,Z.jsx)(h.Z,{label:"Shift",placeholder:"Ex. Morning",variant:"outlined",value:le,onChange:function(e){return oe(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(x.Z,{onClick:Ue,sx:{mt:4,mb:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Back"}),(0,Z.jsx)(x.Z,{onClick:Je,sx:{mt:4,ml:4,backgroundColor:"#004c3d",color:"white",mb:4,textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Next"})]}),2===t&&(0,Z.jsxs)(i.Z,{maxWidth:600,children:[(0,Z.jsx)(d.Z,{variant:"h5",component:"h2",children:"Add job basics - Step 3"}),(0,Z.jsx)(h.Z,{label:"Requirements",required:!0,variant:"outlined",value:ce,onChange:function(e){return se(e.target.value)},margin:"normal",fullWidth:!0,multiline:!0,rows:3}),(0,Z.jsxs)(i.Z,{sx:{display:"flex",gap:5},children:[(0,Z.jsx)(h.Z,{label:"Qualifications",placeholder:"Ex. Js, Python experince",variant:"outlined",value:xe,onChange:function(e){return ge(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(h.Z,{label:"Education",placeholder:"Ex. Btech",variant:"outlined",value:ve,onChange:function(e){return Ze(e.target.value)},margin:"normal",fullWidth:!0})]}),(0,Z.jsx)(h.Z,{label:"Experience",variant:"outlined",value:be,onChange:function(e){return Ce(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(h.Z,{label:"Language",placeholder:"Ex. English",variant:"outlined",value:we,onChange:function(e){return We(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(x.Z,{onClick:Ue,sx:{mt:4,mb:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Back"}),(0,Z.jsx)(x.Z,{onClick:Je,sx:{mt:4,mb:4,ml:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Next"})]}),3===t&&(0,Z.jsxs)(i.Z,{maxWidth:600,children:[(0,Z.jsx)(d.Z,{variant:"h5",component:"h2",children:"Add job basics - Step 4"}),(0,Z.jsx)(h.Z,{label:"Notice Period",required:!0,variant:"outlined",value:Te,onChange:function(e){return Ne(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(h.Z,{label:"Job Type",placeholder:"Ex. Remote",variant:"outlined",value:qe,onChange:function(e){return Ie(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(h.Z,{label:"Total Experience",variant:"outlined",value:Be,onChange:function(e){return De(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(x.Z,{onClick:Ue,sx:{mt:4,mb:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",ml:4,":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Back"}),(0,Z.jsx)(x.Z,{onClick:Fe,sx:{mt:4,mb:4,ml:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Create Post"})]})]})]}):(0,Z.jsxs)(g.ZP,{item:!0,xs:12,md:12,lg:12,xl:12,style:{textAlign:"center",justifyContent:"center"},children:[(0,Z.jsx)(d.Z,{variant:"h5",children:"Please logIn for create job post"}),(0,Z.jsx)(d.Z,{sx:{fontWeight:600,fontSize:20,color:"#004c3d",cursor:"pointer",textDecoration:"none"},component:f.rU,to:"/login",children:"Login"}),(0,Z.jsx)(i.Z,{children:(0,Z.jsx)("img",{src:"https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif",alt:"gif",style:{height:400}})})]})})}},959:function(e,n,t){t.r(n);t(2791),t(4987),t(7786),t(7880),t(4805);var r=t(4554),a=t(9827),l=t(6528),o=t(184);n.default=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{sx:{position:"fixed",top:0,zIndex:99999,width:"100%"},children:(0,o.jsx)(l.Z,{})}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(a.Z,{})]})}}}]);
//# sourceMappingURL=959.617318d2.chunk.js.map