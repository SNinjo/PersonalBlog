"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[6983],{9798:function(e,t,n){n.r(t),n.d(t,{Head:function(){return O},default:function(){return b}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({p:"p",br:"br",a:"a",h1:"h1",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",ol:"ol"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"A series of single-board computers made by the Raspberry Pi Foundation.",a.createElement(t.br),"\n",a.createElement(t.a,{href:"https://www.raspberrypi.com/documentation/"},"View more information")),"\n",a.createElement(t.h1,null,"GPIO"),"\n",a.createElement(t.h3,null,"General-purpose input/output"),"\n",a.createElement(t.p,null,"refers to a set of pins on your computer's mainboard or add-on card."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"import GPIO library","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"import RPi.GPIO as GPIO\n")),"\n"),"\n",a.createElement(t.li,null,"set the mode of pin numbering","\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Board: referring to the pins by the number of the pin on the plug","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.setmode(GPIO.BOARD)\n")),"\n"),"\n",a.createElement(t.li,null,'BCM: referring to the pins by the "Broadcom SOC channel" number, these are the numbers after "GPIO"',"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.setmode(GPIO.BCM)\n")),"\n"),"\n"),"\n"),"\n",a.createElement(t.li,null,"set the pin","\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"input","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.setup(<pin number>, GPIO.IN)\n")),"\n"),"\n",a.createElement(t.li,null,"output","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.setup(<pin number>, GPIO.OUT)\n")),"\n"),"\n"),"\n"),"\n",a.createElement(t.li,null,"read value from the pin","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.input(<pin number>)\n")),"\n"),"\n",a.createElement(t.li,null,"write value to the pin",a.createElement(t.br),"\n","The pin provides 3.3V when True, or it decrease to 0V.","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"GPIO.output(<pin number>, <True | False>)\n")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},o=n(1883),m=n(8032),u=n(7392),i=n(2036),s=n(908),p=n(8197),h=n(2349),d=n(8554),E=n(4072),g=n(1950);const f=e=>{var t;let{data:r,location:c,children:h}=e;const f=r.site.siteMetadata.languages,{mdx:b}=r,O=(0,a.useRef)(null),{0:G,1:N}=(0,a.useState)(!0);return a.createElement(s.Z,{language:(0,i.G)(c.pathname,f).id},a.createElement(p.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:O,className:g.hi,onScroll:()=>N(0===O.current.scrollTop)},a.createElement("div",{className:g.nC},a.createElement("header",{className:g.fr},a.createElement("h1",null,b.frontmatter.title),a.createElement("h3",null,b.fields.date)),b.tableOfContents.items?a.createElement("ol",{className:g.Jt},a.createElement("span",null,(0,i.G)(c.pathname,f).headline),null===(t=b.tableOfContents.items)||void 0===t?void 0:t.map((e=>{let{title:t}=e;return a.createElement("li",{key:"Heading_"+t},a.createElement(o.Link,{to:"#"+(0,u.S)(t),className:g.p4},t))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:g.Ig},a.createElement(l.Zo,{components:{a:e=>{let{href:t,children:n}=e;return a.createElement("a",{target:"_blank",href:t},n)},pre:e=>{let{children:t}=e;return a.createElement(d.Z,null,t)},h1:e=>{let{children:t}=e;return a.createElement(E.Z,null,t)}}},h))),a.createElement("button",{className:g.vc,disabled:G,onClick:()=>{(0,o.navigate)(c.pathname),O.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(m.S,{className:g.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:n(5097)}))))};function b(e){return a.createElement(f,e,a.createElement(c,e))}const O=e=>{let{data:t,location:n}=e;return a.createElement(h.Z,{title:t.mdx.frontmatter.title,pathname:n.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-c-users-user-desktop-github-blog-content-tool-notes-raspberry-pi-en-md-b06ded1b165f4b7e7ebd.js.map