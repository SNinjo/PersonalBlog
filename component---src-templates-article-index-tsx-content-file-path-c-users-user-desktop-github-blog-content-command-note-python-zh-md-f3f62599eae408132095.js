"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[437],{1768:function(e,l,n){n.r(l),n.d(l,{Head:function(){return f},default:function(){return N}});var t=n(1151),a=n(7294);function r(e){const l=Object.assign({h1:"h1",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",br:"br"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(l.h1,null,"Pyenv"),"\n",a.createElement(l.h3,null,"版本控制"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"列出所有已安裝的版本","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"pyenv versions\n")),"\n"),"\n",a.createElement(l.li,null,"列出所有可安裝的版本","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"pyenv install -l\n")),"\n"),"\n",a.createElement(l.li,null,"安裝指定版本","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"pyenv install -v <version>\n")),"\n"),"\n",a.createElement(l.li,null,"切換版本",a.createElement(l.br),"\n","作用於整個系統","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"pyenv global <version>\n")),"\n","作用於這個資料夾","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"pyenv local <version>\n")),"\n","作用於這個 CLI","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"pyenv shell <version>\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Venv"),"\n",a.createElement(l.h3,null,"虛擬環境 (獨立各專案的套件)"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"建立新的虛擬環境","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"python -m venv <name>\n")),"\n"),"\n",a.createElement(l.li,null,"使用指定的環境",a.createElement(l.br),"\n","Windows 指令","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"<name>\\Scripts\\activate.bat\n")),"\n","Unix 或 MacOS 指令","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"source <name>/bin/activate\n")),"\n"),"\n",a.createElement(l.li,null,"停止使用所有環境","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"deactivate\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Pip"),"\n",a.createElement(l.h3,null,"套件管理"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"安裝指定套件","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"pip install <package>\n")),"\n"),"\n",a.createElement(l.li,null,"安裝所有陳列在 requirement.txt 的套件","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"pip install -r requirements.txt\n")),"\n"),"\n",a.createElement(l.li,null,"輸出所有套件至 requirement.txt","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"pip freeze > requirements.txt\n")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,t.ah)(),e.components);return l?a.createElement(l,e,a.createElement(r,e)):r(e)},m=n(1883),s=n(8032),u=n(7392),o=n(2036),i=n(908),E=n(8197),p=n(2349),h=n(8554),d=n(4072),g=n(1950);const v=e=>{var l;let{data:r,location:c,children:p}=e;const v=r.site.siteMetadata.languages,{mdx:N}=r,f=(0,a.useRef)(null),{0:b,1:x}=(0,a.useState)(!0);return console.log(r.allMdx),a.createElement(i.Z,{language:(0,o.G)(c.pathname,v).id},a.createElement("div",{className:g.hi},a.createElement(E.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("section",{ref:f,className:g.DH,onScroll:()=>x(0===f.current.scrollTop)},a.createElement("div",{className:g.nC},a.createElement("header",{className:g.fr},a.createElement("h1",null,N.frontmatter.title),a.createElement("h3",null,N.fields.date)),N.tableOfContents.items?a.createElement("ol",{className:g.Jt},a.createElement("span",null,(0,o.G)(c.pathname,v).headline),null===(l=N.tableOfContents.items)||void 0===l?void 0:l.map((e=>{let{title:l}=e;return a.createElement("li",{key:"Heading_"+l},a.createElement(m.Link,{to:"#"+(0,u.S)(l),className:g.p4},l))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:g.Ig},a.createElement(t.Zo,{components:{pre:e=>{let{children:l}=e;return a.createElement(h.Z,null,l)},h1:e=>{let{children:l}=e;return a.createElement(d.Z,null,l)}}},p))),a.createElement("button",{className:g.vc,disabled:b,onClick:()=>{(0,m.navigate)(c.pathname),f.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(s.S,{className:g.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:n(5097)})))))};function N(e){return a.createElement(v,e,a.createElement(c,e))}const f=e=>{let{data:l,location:n}=e;return a.createElement(p.Z,{title:l.mdx.frontmatter.title,pathname:n.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-c-users-user-desktop-github-blog-content-command-note-python-zh-md-f3f62599eae408132095.js.map