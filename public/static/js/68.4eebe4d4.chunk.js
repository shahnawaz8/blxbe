"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[68],{9342:function(e,n,t){t(2791),t(184)},9827:function(e,n,t){var r=t(4165),o=t(5861),a=t(9439),i=t(2791),l=t(4554),c=t(242),u=t(4512),s=t(5825),d=t(890),x=t(7665),h=t(6151),f=t(1889),p=t(9902),m=t(1087),g=t(4263),Z=t(184);n.Z=function(){var e=(0,i.useState)(0),n=(0,a.Z)(e,2),t=n[0],v=n[1],j=(new g.Z).get("isLoggedIn"),b=(0,i.useState)(""),C=(0,a.Z)(b,2),y=C[0],S=C[1],w=(0,i.useState)(""),k=(0,a.Z)(w,2),E=k[0],N=k[1],W=(0,i.useState)(""),T=(0,a.Z)(W,2),I=T[0],O=T[1],R=(0,i.useState)(""),P=(0,a.Z)(R,2),A=P[0],z=P[1],L=(0,i.useState)(""),D=(0,a.Z)(L,2),q=D[0],B=D[1],F=(0,i.useState)(""),U=(0,a.Z)(F,2),M=U[0],J=U[1],V=(0,i.useState)(""),G=(0,a.Z)(V,2),H=G[0],Q=G[1],Y=(0,i.useState)(""),_=(0,a.Z)(Y,2),K=_[0],X=_[1],$=(0,i.useState)(""),ee=(0,a.Z)($,2),ne=ee[0],te=ee[1],re=(0,i.useState)(""),oe=(0,a.Z)(re,2),ae=oe[0],ie=oe[1],le=(0,i.useState)(""),ce=(0,a.Z)(le,2),ue=ce[0],se=ce[1],de=(0,i.useState)(""),xe=(0,a.Z)(de,2),he=xe[0],fe=xe[1],pe=(0,i.useState)(""),me=(0,a.Z)(pe,2),ge=me[0],Ze=me[1],ve=(0,i.useState)(""),je=(0,a.Z)(ve,2),be=je[0],Ce=je[1],ye=(0,i.useState)(""),Se=(0,a.Z)(ye,2),we=Se[0],ke=Se[1],Ee=(0,i.useState)(""),Ne=(0,a.Z)(Ee,2),We=Ne[0],Te=Ne[1],Ie=(0,i.useState)(""),Oe=(0,a.Z)(Ie,2),Re=Oe[0],Pe=Oe[1],Ae=(0,i.useState)(""),ze=(0,a.Z)(Ae,2),Le=ze[0],De=ze[1],qe=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,a,i,l,c,u,s,d,x,h,f,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),o=function(e){return e.split(",").map((function(e){return{name:e.trim()}}))},a=(t=function(e){return e.split(",").map((function(e){return e.trim()}))})(M),i=t(ue),l=o(H),c=parseFloat(K),u=parseFloat(ne),s=t(he),d=t(ge),x=t(be),h=t(we),f={title:y,location:E,discription:I,relatedTo:A,imageUrl:q,responsibilities:a,tags:l,salaryStart:isNaN(c)?null:c,salaryEnd:isNaN(u)?null:u,shift:ae,requirements:i,qualifications:s,education:d,experience:x,language:h,noticePeriod:We,jobType:Re,totalExp:Le},console.log("ky ahia",f),m=JSON.stringify(f),(0,p.NE)({url:"/post/createPostWithTitle",body:m,method:"POST"}).then((function(e){console.log("knowledge",f),S(""),N(""),O(""),z(""),B(""),J(""),Q(""),X(""),te(""),ie(""),se("")})).catch((function(e){console.error("Error updating knowledge:",e)}));case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Be=function(){v((function(e){return e+1}))},Fe=function(){v((function(e){return e-1}))};return(0,Z.jsx)(Z.Fragment,{children:j?(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(c.Z,{activeStep:t,alternativeLabel:!0,children:["Step 1","Step 2","Step 3","Step 4"].map((function(e,n){return(0,Z.jsx)(u.Z,{children:(0,Z.jsx)(s.Z,{children:e})},e)}))}),(0,Z.jsxs)(l.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",component:"form",mt:4,children:[0===t&&(0,Z.jsxs)(l.Z,{maxWidth:600,children:[(0,Z.jsx)(d.Z,{variant:"h5",component:"h2",children:"Add job basics - Step 1"}),(0,Z.jsxs)(l.Z,{display:"flex",gap:5,children:[(0,Z.jsx)(x.Z,{required:!0,label:" Job Title",variant:"outlined",placeholder:"Ex. Software Engg.",value:y,onChange:function(e){return S(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(x.Z,{required:!0,label:"Location",placeholder:"Ex. Pune",variant:"outlined",value:E,onChange:function(e){return N(e.target.value)},margin:"normal",fullWidth:!0})]}),(0,Z.jsx)(x.Z,{label:"Description",variant:"outlined",value:I,onChange:function(e){return O(e.target.value)},margin:"normal",fullWidth:!0,multiline:!0,rows:3}),(0,Z.jsx)(x.Z,{label:"Related To",placeholder:"ex: Infosys",variant:"outlined",value:A,onChange:function(e){return z(e.target.value)},margin:"normal",required:!0,fullWidth:!0}),(0,Z.jsx)(x.Z,{label:"Image URL",variant:"outlined",value:q,onChange:function(e){return B(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(h.Z,{onClick:Be,sx:{mt:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Next"})]}),1===t&&(0,Z.jsxs)(l.Z,{maxWidth:600,children:[(0,Z.jsx)(d.Z,{variant:"h5",component:"h2",children:"Add job basics - Step 2"}),(0,Z.jsx)(x.Z,{label:"Responsibilities",variant:"outlined",value:M,onChange:function(e){return J(e.target.value)},margin:"normal",fullWidth:!0,multiline:!0,rows:4}),(0,Z.jsx)(x.Z,{label:"Tags",placeholder:"Ex. Node, Html",variant:"outlined",value:H,onChange:function(e){return Q(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsxs)(l.Z,{sx:{display:"flex",gap:5},children:[(0,Z.jsx)(x.Z,{label:"Salary Start",placeholder:"Ex.5lpa",variant:"outlined",value:K,onChange:function(e){return X(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(x.Z,{label:"Salary End",placeholder:"Ex. 10lpa",variant:"outlined",value:ne,onChange:function(e){return te(e.target.value)},margin:"normal",fullWidth:!0})]}),(0,Z.jsx)(x.Z,{label:"Shift",placeholder:"Ex. Morning",variant:"outlined",value:ae,onChange:function(e){return ie(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(h.Z,{onClick:Fe,sx:{mt:4,mb:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Back"}),(0,Z.jsx)(h.Z,{onClick:Be,sx:{mt:4,ml:4,backgroundColor:"#004c3d",color:"white",mb:4,textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Next"})]}),2===t&&(0,Z.jsxs)(l.Z,{maxWidth:600,children:[(0,Z.jsx)(d.Z,{variant:"h5",component:"h2",children:"Add job basics - Step 3"}),(0,Z.jsx)(x.Z,{label:"Requirements",required:!0,variant:"outlined",value:ue,onChange:function(e){return se(e.target.value)},margin:"normal",fullWidth:!0,multiline:!0,rows:3}),(0,Z.jsxs)(l.Z,{sx:{display:"flex",gap:5},children:[(0,Z.jsx)(x.Z,{label:"Qualifications",placeholder:"Ex. Js, Python experince",variant:"outlined",value:he,onChange:function(e){return fe(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(x.Z,{label:"Education",placeholder:"Ex. Btech",variant:"outlined",value:ge,onChange:function(e){return Ze(e.target.value)},margin:"normal",fullWidth:!0})]}),(0,Z.jsx)(x.Z,{label:"Experience",variant:"outlined",value:be,onChange:function(e){return Ce(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(x.Z,{label:"Language",placeholder:"Ex. English",variant:"outlined",value:we,onChange:function(e){return ke(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(h.Z,{onClick:Fe,sx:{mt:4,mb:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Back"}),(0,Z.jsx)(h.Z,{onClick:Be,sx:{mt:4,mb:4,ml:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Next"})]}),3===t&&(0,Z.jsxs)(l.Z,{maxWidth:600,children:[(0,Z.jsx)(d.Z,{variant:"h5",component:"h2",children:"Add job basics - Step 4"}),(0,Z.jsx)(x.Z,{label:"Notice Period",required:!0,variant:"outlined",value:We,onChange:function(e){return Te(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(x.Z,{label:"Job Type",placeholder:"Ex. Remote",variant:"outlined",value:Re,onChange:function(e){return Pe(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(x.Z,{label:"Total Experience",variant:"outlined",value:Le,onChange:function(e){return De(e.target.value)},margin:"normal",fullWidth:!0}),(0,Z.jsx)(h.Z,{onClick:Fe,sx:{mt:4,mb:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",ml:4,":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Back"}),(0,Z.jsx)(h.Z,{onClick:qe,sx:{mt:4,mb:4,ml:4,backgroundColor:"#004c3d",color:"white",textTransform:"none",":hover":{backgroundColor:"#004c3d",color:"white"}},children:"Create Post"})]})]})]}):(0,Z.jsxs)(f.ZP,{item:!0,xs:12,md:12,lg:12,xl:12,style:{textAlign:"center",justifyContent:"center"},children:[(0,Z.jsx)(d.Z,{variant:"h5",children:"Please logIn for create job post"}),(0,Z.jsx)(d.Z,{sx:{fontWeight:600,fontSize:20,color:"#004c3d",cursor:"pointer",textDecoration:"none"},component:m.rU,to:"/login",children:"Login"}),(0,Z.jsx)(l.Z,{children:(0,Z.jsx)("img",{src:"https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif",alt:"gif",style:{height:400}})})]})})}},8068:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(2791),o=(t(4987),t(7786),t(7880),t(4805),t(4554)),a=(t(9827),t(6528)),i=(t(9342),t(4942)),l=t(1413),c=t(9439),u=t(242),s=t(4512),d=t(3366),x=t(7462),h=t(8182),f=t(4419),p=t(6934),m=t(1402),g=t(335),Z=t(5825),v=t(9103),j=t(5414),b=t(3822),C=t(5878),y=t(1217);function S(e){return(0,y.Z)("MuiStepButton",e)}var w=(0,C.Z)("MuiStepButton",["root","horizontal","vertical","touchRipple"]),k=t(184),E=["children","className","icon","optional"],N=(0,p.ZP)(g.Z,{name:"MuiStepButton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[(0,i.Z)({},"& .".concat(w.touchRipple),n.touchRipple),n.root,n[t.orientation]]}})((function(e){var n=e.ownerState;return(0,x.Z)({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box"},"vertical"===n.orientation&&{justifyContent:"flex-start",padding:"8px",margin:"-8px"},(0,i.Z)({},"& .".concat(w.touchRipple),{color:"rgba(0, 0, 0, 0.3)"}))})),W=r.forwardRef((function(e,n){var t=(0,m.Z)({props:e,name:"MuiStepButton"}),o=t.children,a=t.className,i=t.icon,l=t.optional,c=(0,d.Z)(t,E),u=r.useContext(b.Z),s=u.disabled,p=u.active,g=r.useContext(j.Z).orientation,C=(0,x.Z)({},t,{orientation:g}),y=function(e){var n=e.classes,t={root:["root",e.orientation],touchRipple:["touchRipple"]};return(0,f.Z)(t,S,n)}(C),w={icon:i,optional:l},W=(0,v.Z)(o,["StepLabel"])?r.cloneElement(o,w):(0,k.jsx)(Z.Z,(0,x.Z)({},w,{children:o}));return(0,k.jsx)(N,(0,x.Z)({focusRipple:!0,disabled:s,TouchRippleProps:{className:y.touchRipple},className:(0,h.Z)(y.root,a),ref:n,ownerState:C,"aria-current":p?"step":void 0},c,{children:W}))})),T=t(6151),I=t(890),O=t(7665),R=["Contact Information","Education and Experience","Upload Resume"];function P(){var e=r.useState(0),n=(0,c.Z)(e,2),t=n[0],a=n[1],d=r.useState({}),x=(0,c.Z)(d,2),h=x[0],f=x[1],p=r.useState({contactInfo:{firstName:"",lastName:"",email:"",phoneNumber:"",city:"",county:""},educationExperience:{education:"",experience:""},resume:null}),m=(0,c.Z)(p,2),g=m[0],Z=m[1],v=function(e,n,t){Z((function(r){return(0,l.Z)((0,l.Z)({},r),{},(0,i.Z)({},e,(0,l.Z)((0,l.Z)({},r[e]),{},(0,i.Z)({},n,t))))}))},j=function(e){Z((0,l.Z)((0,l.Z)({},g),{},{resume:e.target.files[0]}))},b=function(){return R.length},C=function(){return Object.keys(h).length},y=function(){return C()===b()},S=function(){var e=t!==b()-1||y()?t+1:R.findIndex((function(e,n){return!(n in h)}));a(e)};return(0,k.jsxs)(o.Z,{sx:{width:"80%",p:5,pl:20,pt:0},children:[(0,k.jsx)(u.Z,{nonLinear:!0,activeStep:t,children:R.map((function(e,n){return(0,k.jsx)(s.Z,{completed:h[n],children:(0,k.jsx)(W,{sx:{color:"#004c3d"},onClick:(t=n,function(){a(t)}),children:e})},e);var t}))}),(0,k.jsx)("div",{children:y()?(0,k.jsxs)(r.Fragment,{children:[(0,k.jsx)(I.Z,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),(0,k.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,k.jsx)(o.Z,{sx:{flex:"1 1 auto"}}),(0,k.jsx)(T.Z,{onClick:function(){a(0),f({})},children:"Reset"})]})]}):(0,k.jsx)(k.Fragment,{})}),(0,k.jsx)(o.Z,{sx:{justifyContent:"center",textAlign:"center",alignContent:"center",alignItems:"center",display:"flex"},children:function(e){switch(e){case 0:return(0,k.jsxs)("div",{style:{display:"grid",maxWidth:600,gap:20,mt:2},children:[(0,k.jsx)(I.Z,{sx:{justifyContent:"center",textAlign:"center",alignContent:"center",alignItems:"center",display:"flex",mt:5},variant:"h5",fontWeight:600,children:"Add your contact information"}),(0,k.jsx)(O.Z,{label:"First Name",value:g.contactInfo.firstName,onChange:function(e){return v("contactInfo","firstName",e.target.value)},size:"small"}),(0,k.jsx)(O.Z,{label:"Last Name",value:g.contactInfo.lastName,onChange:function(e){return v("contactInfo","lastName",e.target.value)},size:"small"}),(0,k.jsx)(O.Z,{label:"Email",value:g.contactInfo.email,onChange:function(e){return v("contactInfo","email",e.target.value)},size:"small"}),(0,k.jsx)(O.Z,{label:"Phone Number",value:g.contactInfo.phoneNumber,onChange:function(e){return v("contactInfo","phoneNumber",e.target.value)},size:"small"}),(0,k.jsx)(O.Z,{label:"City (Optional)",value:g.contactInfo.city,onChange:function(e){return v("contactInfo","city",e.target.value)},size:"small"}),(0,k.jsx)(O.Z,{label:"County (Optional)",value:g.contactInfo.county,onChange:function(e){return v("contactInfo","county",e.target.value)},size:"small"})]});case 1:return(0,k.jsxs)("div",{style:{display:"grid",maxWidth:700,gap:20,marginLeft:"20px"},children:[(0,k.jsx)("br",{}),(0,k.jsx)(I.Z,{sx:{justifyContent:"center",textAlign:"center",alignContent:"center",alignItems:"center",display:"flex",mt:5},variant:"h5",fontWeight:600,children:"Answer these questions from the employer"}),(0,k.jsx)(O.Z,{label:"Current CTC",value:g.educationExperience.education,onChange:function(e){return v("educationExperience","education",e.target.value)},size:"small"}),(0,k.jsx)(O.Z,{label:"Expected CTC",value:g.educationExperience.education,onChange:function(e){return v("educationExperience","education",e.target.value)},size:"small"}),(0,k.jsx)(O.Z,{label:"Experience",value:g.educationExperience.experience,onChange:function(e){return v("educationExperience","experience",e.target.value)},size:"small"}),(0,k.jsx)(O.Z,{label:"Notice Period",value:g.educationExperience.education,onChange:function(e){return v("educationExperience","education",e.target.value)},size:"small"})]});case 2:return(0,k.jsxs)("div",{children:[(0,k.jsx)("br",{}),(0,k.jsx)(I.Z,{sx:{justifyContent:"center",textAlign:"center",alignContent:"center",alignItems:"center",display:"flex"},variant:"h5",fontWeight:600,children:"Add a CV for the employer"}),(0,k.jsx)(o.Z,{sx:{border:"1px solid #004c3d",width:400,p:2,borderRadius:"4px",mt:6},children:(0,k.jsx)("input",{type:"file",onChange:j})}),g.resume&&(0,k.jsx)(o.Z,{sx:{marginTop:2},children:(0,k.jsx)("img",{src:URL.createObjectURL(g.resume),alt:"Uploaded CV",width:"200",height:"400"})})]});default:return"Unknown step"}}(t)}),(0,k.jsx)(r.Fragment,{children:(0,k.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row",mt:5},children:[(0,k.jsx)(T.Z,{disabled:0===t,onClick:function(){a((function(e){return e-1}))},sx:{color:"white",backgroundColor:"#004c3d",textTransform:"none",":hover":{color:"white",backgroundColor:"#004c3d",textTransform:"none"}},children:"Back"}),(0,k.jsx)(o.Z,{sx:{flex:"1 1 auto"}}),(0,k.jsx)(T.Z,{onClick:S,sx:{color:"white",backgroundColor:"#004c3d",textTransform:"none",":hover":{color:"white",backgroundColor:"#004c3d",textTransform:"none"}},children:"Next"}),t!==R.length&&(h[t]?(0,k.jsxs)(I.Z,{variant:"caption",sx:{display:"inline-block",color:"white",backgroundColor:"#004c3d",textTransform:"none"},children:["Step ",t+1," already completed"]}):(0,k.jsx)(T.Z,{onClick:function(){var e=h;e[t]=!0,f(e),S()},sx:{color:"white",backgroundColor:"#004c3d",textTransform:"none",ml:4},children:C()===b()-1?"Finish":"Complete Step"}))]})})]})}var A=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(o.Z,{sx:{position:"fixed",top:0,zIndex:99999,width:"100%"},children:(0,k.jsx)(a.Z,{})}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)(P,{})]})}},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=68.4eebe4d4.chunk.js.map