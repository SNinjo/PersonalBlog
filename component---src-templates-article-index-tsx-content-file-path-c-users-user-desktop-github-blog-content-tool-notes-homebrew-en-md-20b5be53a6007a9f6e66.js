"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[2769],{8191:function(e,l,t){t.r(l),t.d(l,{Head:function(){return w},default:function(){return b}});var n=t(1151),a=t(7294);function r(e){const l=Object.assign({p:"p",br:"br",a:"a",h1:"h1",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(l.p,null,"Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's operating system, macOS, as well as Linux. The name is intended to suggest the idea of building software on the Mac depending on the user's taste.",a.createElement(l.br),"\n",a.createElement(l.a,{href:"https://brew.sh/"},"View more information")),"\n",a.createElement(l.h1,null,"Formula"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"search packages to install","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew search <keyword>\n")),"\n","For example:","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew search git\n")),"\n","If you wrap text with / slashes, it'll parse it into a regular expression.","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew search /^git$/\n")),"\n"),"\n",a.createElement(l.li,null,"get the package information","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew info <formula>\n")),"\n"),"\n",a.createElement(l.li,null,"install the package","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew install <formula>\n")),"\n"),"\n",a.createElement(l.li,null,"upgrade the package","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew upgrade <formula>\n")),"\n","do this for all packages","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew upgrade\n")),"\n"),"\n",a.createElement(l.li,null,"uninstall the package","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew uninstall <formula>\n")),"\n","force to do so","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew uninstall -f <formula>\n")),"\n"),"\n",a.createElement(l.li,null,"clear old versions of packages and outdated scratch files from the cache","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew cleanup\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Tap"),"\n",a.createElement(l.h3,null,"third party repositories"),"\n",a.createElement(l.p,null,"If Homebrew cannot find the package you want, it may be hosted in a different repository. The repository is hosted on Github by default."),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"get current tap","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew tap\n")),"\n"),"\n",a.createElement(l.li,null,"add new tap","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew tap <user>/<repo> <URL>?\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Services"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"get all services","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew services list\n")),"\n"),"\n",a.createElement(l.li,null,"start the service","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew services start <formula>\n")),"\n"),"\n",a.createElement(l.li,null,"stop the service","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew services stop <formula>\n")),"\n"),"\n",a.createElement(l.li,null,"restart the service","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew services restart <formula>\n")),"\n"),"\n",a.createElement(l.li,null,"clear old versions of packages and outdated scratch files from the cache","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew services cleanup\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Other"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"update Homebrew","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"brew update\n")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,n.ah)(),e.components);return l?a.createElement(l,e,a.createElement(r,e)):r(e)},s=t(1883),m=t(8032),o=t(7392),u=t(2036),i=t(908),h=t(8197),p=t(2349),E=t(8554),d=t(4072),g=t(1950);const f=e=>{var l;let{data:r,location:c,children:p}=e;const f=r.site.siteMetadata.languages,{mdx:b}=r,w=(0,a.useRef)(null),{0:N,1:v}=(0,a.useState)(!0);return a.createElement(i.Z,{language:(0,u.G)(c.pathname,f).id},a.createElement(h.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:w,className:g.hi,onScroll:()=>v(0===w.current.scrollTop)},a.createElement("div",{className:g.nC},a.createElement("header",{className:g.fr},a.createElement("h1",null,b.frontmatter.title),a.createElement("h3",null,b.fields.date)),b.tableOfContents.items?a.createElement("ol",{className:g.Jt},a.createElement("span",null,(0,u.G)(c.pathname,f).headline),null===(l=b.tableOfContents.items)||void 0===l?void 0:l.map((e=>{let{title:l}=e;return a.createElement("li",{key:"Heading_"+l},a.createElement(s.Link,{to:"#"+(0,o.S)(l),className:g.p4},l))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:g.Ig},a.createElement(n.Zo,{components:{a:e=>{let{href:l,children:t}=e;return a.createElement("a",{target:"_blank",href:l},t)},pre:e=>{let{children:l}=e;return a.createElement(E.Z,null,l)},h1:e=>{let{children:l}=e;return a.createElement(d.Z,null,l)}}},p))),a.createElement("button",{className:g.vc,disabled:N,onClick:()=>{(0,s.navigate)(c.pathname),w.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(m.S,{className:g.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:t(5097)}))))};function b(e){return a.createElement(f,e,a.createElement(c,e))}const w=e=>{let{data:l,location:t}=e;return a.createElement(p.Z,{title:l.mdx.frontmatter.title,pathname:t.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-c-users-user-desktop-github-blog-content-tool-notes-homebrew-en-md-20b5be53a6007a9f6e66.js.map