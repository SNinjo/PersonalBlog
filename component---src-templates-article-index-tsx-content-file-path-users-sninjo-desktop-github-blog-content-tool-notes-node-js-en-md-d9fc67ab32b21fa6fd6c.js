"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[392],{3917:function(e,n,t){t.r(n),t.d(n,{Head:function(){return k},default:function(){return v}});var l=t(1151),a=t(7294);function r(e){const n=Object.assign({p:"p",br:"br",a:"a",h1:"h1",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"Node.js is a cross-platform, open-source server environment that executes JavaScript code outside a web browser.",a.createElement(n.br),"\n",a.createElement(n.a,{href:"https://nodejs.org/en/about"},"View more information")),"\n",a.createElement(n.h1,null,"NPM"),"\n",a.createElement(n.h3,null,"Node Package Manager"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"initialize the project","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm init\n")),"\n"),"\n",a.createElement(n.li,null,"install the package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <package name>\n")),"\n","install the specified version of the package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <package name>@<version>\n")),"\n","install the latest version of the package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <package name>@latest\n")),"\n",'add the package to "dependencies" in package.json, which is required by your application in production',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <package name> --save\n")),"\n",'add the package to "devDependencies" in package.json, which is only needed for local development and testing',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <package name> --save-dev\n")),"\n","install all packages listed in package.json","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install\n")),"\n"),"\n",a.createElement(n.li,null,"uninstall the package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm uninstall <package name>\n")),"\n"),"\n",a.createElement(n.li,null,"version",a.createElement(n.br),"\n","The npm ecosystem uses ",a.createElement(n.a,{href:"https://semver.org/"},"semantic versioning")," where version numbers typically consist of three parts, separated by dots: major.minor.patch .",a.createElement(n.br),"\n","Here's how to update the version of a package.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm version major\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm version minor\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm version patch\n")),"\n"),"\n",a.createElement(n.li,null,"symlink a local package as a dependency during development","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm link\n")),"\n","install it to other projects","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm link <package name>\n")),"\n"),"\n",a.createElement(n.li,null,"install the local package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm install <absolute file path>\n")),"\n"),"\n",a.createElement(n.li,null,"publish the package","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm publish\n")),"\n","But we need to log in for the first time.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"npm login\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"NVM"),"\n",a.createElement(n.h3,null,"Node Version Manager"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"list all installed Node.js versions","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"nvm ls\n")),"\n"),"\n",a.createElement(n.li,null,"install the specified Node.js version","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"nvm install <version>\n")),"\n"),"\n",a.createElement(n.li,null,"use the specified Node.js version","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"nvm use <version>\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"OAuth"),"\n",a.createElement(n.h3,null,"Open Authentication is an open-standard authorization protocol or framework that provides applications the ability for secure designated access."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"import axios from 'axios';\n\nasync function getToken() {\n    return axios.post(\n        token_url,\n        {\n            grant_type: 'client_credentials'\n        },\n        {\n            headers: {\n                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),\n                'Content-Type': 'application/x-www-form-urlencoded'\n            }\n        }\n    )\n        .then(res => ({\n            token: res.data.access_token,\n            expires_in: res.data.expires_in,\n        }))\n}\n\nasync function fetchWithToken(url, parameter, token) {\n    return axios.post(url, parameter, {\n        headers: {\n            'Authorization': `Bearer ${token}`,\n            'Content-Type': 'multipart/form-data',\n        }\n    })\n}\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},s=t(1883),o=t(8032),m=t(7706),i=t(2036),p=t(908),u=t(8197),d=t(2349),h=t(8554),g=t(4072),E=t(1950);const f=e=>{var n;let{data:r,location:c,children:d}=e;const f=r.site.siteMetadata.languages,{mdx:v}=r,k=(0,a.useRef)(null),{0:N,1:b}=(0,a.useState)(!0);return a.createElement(p.Z,{language:(0,i.G)(c.pathname,f).id},a.createElement(u.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:k,className:E.hi,onScroll:()=>b(0===k.current.scrollTop)},a.createElement("div",{className:E.nC},a.createElement("header",{className:E.fr},a.createElement("h1",null,v.frontmatter.title),a.createElement("h3",null,v.fields.date)),v.tableOfContents.items?a.createElement("ol",{className:E.Jt},a.createElement("span",null,(0,i.G)(c.pathname,f).headline),null===(n=v.tableOfContents.items)||void 0===n?void 0:n.map((e=>{let{title:n}=e;return a.createElement("li",{key:"Heading_"+n},a.createElement(s.Link,{to:"#"+(0,m.S)(n),className:E.p4},n))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:E.Ig},a.createElement(l.Zo,{components:{a:e=>{let{href:n,children:t}=e;return a.createElement("a",{target:"_blank",href:n},t)},pre:e=>{let{children:n}=e;return a.createElement(h.Z,null,n)},h1:e=>{let{children:n}=e;return a.createElement(g.Z,null,n)}}},d))),a.createElement("button",{className:E.vc,disabled:N,onClick:()=>{(0,s.navigate)(c.pathname),k.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(o.S,{className:E.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:t(7695)}))))};function v(e){return a.createElement(f,e,a.createElement(c,e))}const k=e=>{let{data:n,location:t}=e;return a.createElement(d.Z,{title:n.mdx.frontmatter.title,pathname:t.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-users-sninjo-desktop-github-blog-content-tool-notes-node-js-en-md-d9fc67ab32b21fa6fd6c.js.map