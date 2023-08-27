"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[295],{3025:function(e,t,n){n.r(t),n.d(t,{Head:function(){return N},default:function(){return k}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({h1:"h1",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",ol:"ol",br:"br"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Container"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"list all containers","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker ps\n")),"\n"),"\n",a.createElement(t.li,null,"run the image into the container","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker run \\\r\n    --name <container name> \\\r\n    -p <outer port>:<inner port> \\\r\n    -v <outer volume path>:<inner volume path> \\\r\n    <image id|repository>:<tag>?\n")),"\n"),"\n",a.createElement(t.li,null,"stop the container","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker stop <image id|repository>:<tag>?\n")),"\n"),"\n",a.createElement(t.li,null,"remove the container","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker rm <image id|repository>:<tag>?\n")),"\n"),"\n"),"\n",a.createElement(t.h1,null,"Image"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"list all images","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker image ls\n")),"\n"),"\n",a.createElement(t.li,null,"tag the image","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker tag <image id|repository>:<tag>? <repository>:<tag>?\n")),"\n"),"\n",a.createElement(t.li,null,"remove the image","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker image rm <image id|repository>\n")),"\n"),"\n"),"\n",a.createElement(t.h1,null,"Registry"),"\n",a.createElement(t.h3,null,"Each registry has different definition for <repository>, and it defines where the image is updated to."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Docker hub:",a.createElement(t.br),"\n","<repository> = <user name>/<repository name>"),"\n",a.createElement(t.li,null,"Harbor:",a.createElement(t.br),"\n","<repository> = <domain>/<project>/<repository name>"),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"login to docker hub","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker login\n")),"\n"),"\n",a.createElement(t.li,null,"login to private docker registry","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker login <domain>\n")),"\n"),"\n",a.createElement(t.li,null,"push the image to registry","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker push <repository>:<tag>?\n")),"\n"),"\n",a.createElement(t.li,null,"pull the image from registry","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker pull <repository>:<tag>?\n")),"\n"),"\n"),"\n",a.createElement(t.h1,null,"Other"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"remove all images, containers, and caches","\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"docker system prune -a\n")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},o=n(1883),m=n(8032),i=n(7392),s=n(2036),u=n(908),g=n(8197),d=n(2349),E=n(8554),p=n(4072),h=n(1950);const f=e=>{var t;let{data:r,location:c,children:d}=e;const f=r.site.siteMetadata.languages,{mdx:k}=r,N=(0,a.useRef)(null),{0:v,1:y}=(0,a.useState)(!0);return a.createElement(u.Z,{language:(0,s.G)(c.pathname,f).id},a.createElement(g.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:N,className:h.hi,onScroll:()=>y(0===N.current.scrollTop)},a.createElement("div",{className:h.nC},a.createElement("header",{className:h.fr},a.createElement("h1",null,k.frontmatter.title),a.createElement("h3",null,k.fields.date)),k.tableOfContents.items?a.createElement("ol",{className:h.Jt},a.createElement("span",null,(0,s.G)(c.pathname,f).headline),null===(t=k.tableOfContents.items)||void 0===t?void 0:t.map((e=>{let{title:t}=e;return a.createElement("li",{key:"Heading_"+t},a.createElement(o.Link,{to:"#"+(0,i.S)(t),className:h.p4},t))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:h.Ig},a.createElement(l.Zo,{components:{pre:e=>{let{children:t}=e;return a.createElement(E.Z,null,t)},h1:e=>{let{children:t}=e;return a.createElement(p.Z,null,t)}}},d))),a.createElement("button",{className:h.vc,disabled:v,onClick:()=>{(0,o.navigate)(c.pathname),N.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(m.S,{className:h.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:n(5097)}))))};function k(e){return a.createElement(f,e,a.createElement(c,e))}const N=e=>{let{data:t,location:n}=e;return a.createElement(d.Z,{title:t.mdx.frontmatter.title,pathname:n.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-c-users-user-desktop-github-blog-content-command-note-docker-en-md-2771eef70950c54d2822.js.map