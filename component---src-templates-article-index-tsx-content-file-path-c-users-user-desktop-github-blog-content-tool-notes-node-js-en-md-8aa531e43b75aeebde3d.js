"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[23],{6317:function(e,n,l){l.r(n),l.d(n,{Head:function(){return N},default:function(){return f}});var t=l(1151),a=l(7294);function r(e){const n=Object.assign({p:"p",br:"br",a:"a",h1:"h1",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"Node.js is a cross-platform, open-source server environment that executes JavaScript code outside a web browser.",a.createElement(n.br),"\n",a.createElement(n.a,{href:"https://nodejs.org/en/about"},"View more information")),"\n",a.createElement(n.h1,null,"NPM"),"\n",a.createElement(n.h3,null,"Node Package Manager"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"initialize the project","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm init\n")),"\n"),"\n",a.createElement(n.li,null,"install the package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <package name>\n")),"\n","install the specified version of the package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <package name>@<version>\n")),"\n","install the latest version of the package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <package name>@latest\n")),"\n",'add the package to "dependencies" in package.json, which is required by your application in production',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <package name> --save\n")),"\n",'add the package to "devDependencies" in package.json, which is only needed for local development and testing',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <package name> --save-dev\n")),"\n","install all packages listed in package.json","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install\n")),"\n"),"\n",a.createElement(n.li,null,"uninstall the package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm uninstall <package name>\n")),"\n"),"\n",a.createElement(n.li,null,"version",a.createElement(n.br),"\n","The npm ecosystem uses ",a.createElement(n.a,{href:"https://semver.org/"},"semantic versioning")," where version numbers typically consist of three parts, separated by dots: major.minor.patch .",a.createElement(n.br),"\n","Here's how to update the version of a package.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm version major\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm version minor\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm version patch\n")),"\n"),"\n",a.createElement(n.li,null,"symlink a local package as a dependency during development","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm link\n")),"\n","install it to other projects","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm link <package name>\n")),"\n"),"\n",a.createElement(n.li,null,"install the local package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <absolute file path>\n")),"\n"),"\n",a.createElement(n.li,null,"publish the package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm publish\n")),"\n","But we need to log in for the first time.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm login\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"NVM"),"\n",a.createElement(n.h3,null,"Node Version Manager"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"list all installed Node.js versions","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"nvm ls\n")),"\n"),"\n",a.createElement(n.li,null,"install the specified Node.js version","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"nvm install <version>\n")),"\n"),"\n",a.createElement(n.li,null,"use the specified Node.js version","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"nvm use <version>\n")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},s=l(1883),m=l(8032),o=l(7392),i=l(2036),u=l(908),p=l(8197),d=l(2349),h=l(8554),g=l(4072),E=l(1950);const v=e=>{var n;let{data:r,location:c,children:d}=e;const v=r.site.siteMetadata.languages,{mdx:f}=r,N=(0,a.useRef)(null),{0:k,1:b}=(0,a.useState)(!0);return a.createElement(u.Z,{language:(0,i.G)(c.pathname,v).id},a.createElement(p.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:N,className:E.hi,onScroll:()=>b(0===N.current.scrollTop)},a.createElement("div",{className:E.nC},a.createElement("header",{className:E.fr},a.createElement("h1",null,f.frontmatter.title),a.createElement("h3",null,f.fields.date)),f.tableOfContents.items?a.createElement("ol",{className:E.Jt},a.createElement("span",null,(0,i.G)(c.pathname,v).headline),null===(n=f.tableOfContents.items)||void 0===n?void 0:n.map((e=>{let{title:n}=e;return a.createElement("li",{key:"Heading_"+n},a.createElement(s.Link,{to:"#"+(0,o.S)(n),className:E.p4},n))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:E.Ig},a.createElement(t.Zo,{components:{a:e=>{let{href:n,children:l}=e;return a.createElement("a",{target:"_blank",href:n},l)},pre:e=>{let{children:n}=e;return a.createElement(h.Z,null,n)},h1:e=>{let{children:n}=e;return a.createElement(g.Z,null,n)}}},d))),a.createElement("button",{className:E.vc,disabled:k,onClick:()=>{(0,s.navigate)(c.pathname),N.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(m.S,{className:E.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:l(5097)}))))};function f(e){return a.createElement(v,e,a.createElement(c,e))}const N=e=>{let{data:n,location:l}=e;return a.createElement(d.Z,{title:n.mdx.frontmatter.title,pathname:l.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-c-users-user-desktop-github-blog-content-tool-notes-node-js-en-md-8aa531e43b75aeebde3d.js.map