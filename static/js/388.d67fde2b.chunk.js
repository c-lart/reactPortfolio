"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[388,660],{7660:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});s(5043),s(4050);var n=s(579);const i=function(e){const{title:t}=e;return(0,n.jsx)("div",{className:"header",children:t})}},388:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n=s(5043),i=s(1688),l=s(3519),a=s(6221),c=s(7660),o=s(5724),r=s(4331),d=s(579);const x={images:{margin:10,display:"flex",justifyContent:"center",alignItems:"center"},contentContainer:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",border:"1px solid #ccc",margin:"10px"},introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"justify",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"},linkStyle:{margin:30,fontSize:30}};const h=function(){const[e,t]=(0,n.useState)(null),{title:s}=(0,i.useParams)();(0,n.useEffect)((()=>{fetch(o.A.skills,{method:"GET"}).then((e=>e.json())).then((e=>t(e))).catch((e=>e))}),[]);const h=null===e||void 0===e?void 0:e.skills.flatMap((e=>e.items)).find((e=>e.title===s));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.default,{title:null===h||void 0===h?void 0:h.title}),e?(0,d.jsx)("div",{className:"section-content-container",children:(0,d.jsx)(l.A,{style:x.containerStyle,children:(0,d.jsxs)("div",{style:x.contentContainer,children:[(0,d.jsxs)(a.A,{style:x.introTextContainer,children:[(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:h.details[0].definition}}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{style:x.images,children:(0,d.jsx)("img",{src:"images/skills/".concat(h.title,"/1.jpg"),alt:"1",style:{maxWidth:"50%",height:"auto"}})}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:h.details[0].preuves}}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{style:x.images,children:[(0,d.jsx)("img",{src:"images/skills/".concat(h.title,"/2.jpg"),alt:"2",style:{maxWidth:"50%",height:"auto"}}),(0,d.jsx)("img",{src:"images/skills/".concat(h.title,"/3.jpg"),alt:"3",style:{maxWidth:"50%",height:"auto"}})]}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:h.details[0].critique}}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{style:x.images,children:(0,d.jsx)("img",{src:"images/skills/".concat(h.title,"/4.jpg"),alt:"4",style:{maxWidth:"50%",height:"auto"}})}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:h.details[0].evolution}})]}),(0,d.jsx)("h2",{style:{margin:"50px 0"},children:"R\xe9alisations associ\xe9es"}),(0,d.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:h.projects.map((e=>(0,d.jsx)("div",{style:{backgroundColor:"#00d084",color:"white",borderRadius:"8px",padding:"8px 16px",margin:"0",display:"inline-block",textDecoration:"none",marginRight:"20px"},children:(0,d.jsx)("a",{href:"./#/projectdetails/".concat(e),style:x.linkStyle,children:e})},e)))})]})})}):(0,d.jsx)(r.default,{})]})}},6221:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(8139),i=s.n(n),l=s(5043),a=s(7852),c=s(579);const o=l.forwardRef(((e,t)=>{const[{className:s,...n},{as:l="div",bsPrefix:o,spans:r}]=function(e){let{as:t,bsPrefix:s,className:n,...l}=e;s=(0,a.oU)(s,"col");const c=(0,a.gy)(),o=(0,a.Jm)(),r=[],d=[];return c.forEach((e=>{const t=l[e];let n,i,a;delete l[e],"object"===typeof t&&null!=t?({span:n,offset:i,order:a}=t):n=t;const c=e!==o?"-".concat(e):"";n&&r.push(!0===n?"".concat(s).concat(c):"".concat(s).concat(c,"-").concat(n)),null!=a&&d.push("order".concat(c,"-").concat(a)),null!=i&&d.push("offset".concat(c,"-").concat(i))})),[{...l,className:i()(n,...r,...d)},{as:t,bsPrefix:s,spans:r}]}(e);return(0,c.jsx)(l,{...n,ref:t,className:i()(s,!r.length&&o)})}));o.displayName="Col";const r=o}}]);
//# sourceMappingURL=388.d67fde2b.chunk.js.map