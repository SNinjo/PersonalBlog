"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[4407],{9542:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return O}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({p:"p",br:"br",a:"a",h1:"h1",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",ol:"ol"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"樹莓派英國樹莓派基金會開發的微型單板電腦，目的是以低價硬體及自由軟體促進學校的基本電腦科學教育。",a.createElement(t.br),"\n",a.createElement(t.a,{href:"https://www.raspberrypi.com/documentation/"},"查看更多介紹")),"\n",a.createElement(t.h1,null,"GPIO"),"\n",a.createElement(t.h3,null,"General-purpose input/output"),"\n",a.createElement(t.p,null,"通用型之輸入輸出的簡稱，主機板上的接腳可以供使用者由程式控制自由使用。"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"輸入 GPIO 函式庫","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"import RPi.GPIO as GPIO\n")),"\n"),"\n",a.createElement(t.li,null,"設定接角編號的模式","\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Board: 接角編號按照順序成列","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.setmode(GPIO.BOARD)\n")),"\n"),"\n",a.createElement(t.li,null,"BCM: 接角編號為「GPIO」後的數字","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.setmode(GPIO.BCM)\n")),"\n"),"\n"),"\n"),"\n",a.createElement(t.li,null,"設定接角","\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"輸入","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.setup(<pin number>, GPIO.IN)\n")),"\n"),"\n",a.createElement(t.li,null,"輸出","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.setup(<pin number>, GPIO.OUT)\n")),"\n"),"\n"),"\n"),"\n",a.createElement(t.li,null,"讀取接角的值","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.input(<pin number>)\n")),"\n"),"\n",a.createElement(t.li,null,"寫入接角的值",a.createElement(t.br),"\n","若值為 True 則接角提供 3.3V，否則為 0V。","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.output(<pin number>, <True | False>)\n")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},m=n(1883),o=n(8032),u=n(7392),s=n(2036),i=n(908),p=n(8197),E=n(2349),d=n(8554),h=n(4072),g=n(1950);const f=e=>{var t;let{data:r,location:c,children:E}=e;const f=r.site.siteMetadata.languages,{mdx:O}=r,b=(0,a.useRef)(null),{0:G,1:N}=(0,a.useState)(!0);return a.createElement(i.Z,{language:(0,s.G)(c.pathname,f).id},a.createElement(p.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:b,className:g.hi,onScroll:()=>N(0===b.current.scrollTop)},a.createElement("div",{className:g.nC},a.createElement("header",{className:g.fr},a.createElement("h1",null,O.frontmatter.title),a.createElement("h3",null,O.fields.date)),O.tableOfContents.items?a.createElement("ol",{className:g.Jt},a.createElement("span",null,(0,s.G)(c.pathname,f).headline),null===(t=O.tableOfContents.items)||void 0===t?void 0:t.map((e=>{let{title:t}=e;return a.createElement("li",{key:"Heading_"+t},a.createElement(m.Link,{to:"#"+(0,u.S)(t),className:g.p4},t))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:g.Ig},a.createElement(l.Zo,{components:{a:e=>{let{href:t,children:n}=e;return a.createElement("a",{target:"_blank",href:t},n)},pre:e=>{let{children:t}=e;return a.createElement(d.Z,null,t)},h1:e=>{let{children:t}=e;return a.createElement(h.Z,null,t)}}},E))),a.createElement("button",{className:g.vc,disabled:G,onClick:()=>{(0,m.navigate)(c.pathname),b.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(o.S,{className:g.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:n(5097)}))))};function O(e){return a.createElement(f,e,a.createElement(c,e))}const b=e=>{let{data:t,location:n}=e;return a.createElement(E.Z,{title:t.mdx.frontmatter.title,pathname:n.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-c-users-user-desktop-github-blog-content-tool-notes-raspberry-pi-zh-md-1fed1cbed4a46e6107cd.js.map