"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[793,84],{7084:function(e,n,a){a.r(n);a(2791),a(3508);var t=a(184);n.default=function(e){var n=e.title;return(0,t.jsx)("div",{className:"header",children:n})}},5793:function(e,n,a){a.r(n);var t=a(9439),c=a(2791),r=a(7111),o=a(7022),s=a(9743),i=a(2677),l=a(1394),f=a(7084),u=a(126),d=a(2150),p=a(184),h={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};n.default=function(e){var n,a=e.header,v=(0,c.useState)(null),x=(0,t.Z)(v,2),m=x[0],Z=x[1];return(0,c.useEffect)((function(){fetch(u.Z.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return Z(e)})).catch((function(e){return e}))}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f.default,{title:a}),(0,p.jsx)("div",{className:"section-content-container",children:(0,p.jsx)(o.Z,{children:m?(0,p.jsx)(l.ZP,{children:(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(i.Z,{style:h.introTextContainer,children:(n=m.about,(0,p.jsx)(r.D,{children:n}))}),(0,p.jsx)(i.Z,{style:h.introImageContainer,children:(0,p.jsx)("img",{src:null===m||void 0===m?void 0:m.imageSource,alt:"profile"})})]})}):(0,p.jsx)(d.default,{})})})]})}},2677:function(e,n,a){var t=a(9439),c=a(1413),r=a(5987),o=a(1694),s=a.n(o),i=a(2791),l=a(162),f=a(184),u=["as","bsPrefix","className"],d=["className"];var p=i.forwardRef((function(e,n){var a=function(e){var n=e.as,a=e.bsPrefix,t=e.className,o=(0,r.Z)(e,u);a=(0,l.vE)(a,"col");var i=(0,l.pi)(),f=(0,l.zG)(),d=[],p=[];return i.forEach((function(e){var n,t,c,r=o[e];delete o[e],"object"===typeof r&&null!=r?(n=r.span,t=r.offset,c=r.order):n=r;var s=e!==f?"-".concat(e):"";n&&d.push(!0===n?"".concat(a).concat(s):"".concat(a).concat(s,"-").concat(n)),null!=c&&p.push("order".concat(s,"-").concat(c)),null!=t&&p.push("offset".concat(s,"-").concat(t))})),[(0,c.Z)((0,c.Z)({},o),{},{className:s().apply(void 0,[t].concat(d,p))}),{as:n,bsPrefix:a,spans:d}]}(e),o=(0,t.Z)(a,2),i=o[0],p=i.className,h=(0,r.Z)(i,d),v=o[1],x=v.as,m=void 0===x?"div":x,Z=v.bsPrefix,j=v.spans;return(0,f.jsx)(m,(0,c.Z)((0,c.Z)({},h),{},{ref:n,className:s()(p,!j.length&&Z)}))}));p.displayName="Col",n.Z=p},9743:function(e,n,a){var t=a(1413),c=a(5987),r=a(1694),o=a.n(r),s=a(2791),i=a(162),l=a(184),f=["bsPrefix","className","as"],u=s.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,s=e.as,u=void 0===s?"div":s,d=(0,c.Z)(e,f),p=(0,i.vE)(a,"row"),h=(0,i.pi)(),v=(0,i.zG)(),x="".concat(p,"-cols"),m=[];return h.forEach((function(e){var n,a=d[e];delete d[e],n=null!=a&&"object"===typeof a?a.cols:a;var t=e!==v?"-".concat(e):"";null!=n&&m.push("".concat(x).concat(t,"-").concat(n))})),(0,l.jsx)(u,(0,t.Z)((0,t.Z)({ref:n},d),{},{className:o().apply(void 0,[r,p].concat(m))}))}));u.displayName="Row",n.Z=u}}]);
//# sourceMappingURL=793.b7e539c5.chunk.js.map