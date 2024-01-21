"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[5855],{738:function(e,l,n){n.r(l),n.d(l,{Head:function(){return b},default:function(){return N}});var t=n(1151),a=n(7294);function r(e){const l=Object.assign({p:"p",br:"br",a:"a",h1:"h1",ul:"ul",li:"li",pre:"pre",code:"code",ol:"ol"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(l.p,null,"The open source, in-memory data store used as a database, cache, streaming engine, and message broker.",a.createElement(l.br),"\n",a.createElement(l.a,{href:"https://redis.io/docs/about/"},"View more information")),"\n",a.createElement(l.h1,null,"CLI Command"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"enter CLI","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"redis-cli\t\n")),"\n"),"\n",a.createElement(l.li,null,"execute command directly","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"redis-cli <command>\n")),"\n","For example, deleting all the keys of all the existing databases.","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"redis-cli flushall\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Key-Value"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"get the type of value","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"TYPE <key>\n")),"\n"),"\n",a.createElement(l.li,null,"get the string value of the key","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"GET <key>\n")),"\n"),"\n",a.createElement(l.li,null,"get all fields and values of the hash","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"HGETALL <key>\n")),"\n"),"\n",a.createElement(l.li,null,"set the string value of the key","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"SET <key> <value> \n")),"\n","set the specified expire time, in seconds","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"SET <key> <value> <expiration>\n")),"\n"),"\n",a.createElement(l.li,null,"delete the specified keys","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"DEL <key>\n")),"\n"),"\n",a.createElement(l.li,null,"delete all the keys of all the existing databases","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"FLUSHALL\n")),"\n"),"\n",a.createElement(l.li,null,"show all keys matching pattern","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"KEYS <pattern>\n")),"\n","For example, showing all keys in the database.","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"SET name SNinjo\nSET nickname Jo\nSET birthday Feb 25, 2001\nKEYS *\n")),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-output"},'1) "name"\n2) "nickname"\n3) "birthday"\n')),"\n"),"\n",a.createElement(l.li,null,"get the number of bytes that a key and its value require to be stored in RAM","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},'SET "" ""\nMEMORY USAGE ""\n')),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-output"},"(integer) 56\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Database"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"show all the available databases","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"CONFIG GET DATABASES\n")),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-output"},'1) "databases"\n1) "16\n')),"\n"),"\n",a.createElement(l.li,null,"display all of the databases that have already been used and all of the keys that have been created inside the databases","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"INFO keyspace\n")),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-output"},"db0:keys=70,expires=0,avg_ttl=0\ndb1:keys=1,expires=0,avg_ttl=0\ndb2:keys=1,expires=0,avg_ttl=0\n")),"\n"),"\n",a.createElement(l.li,null,"switch to another database","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"SELECT <db index>\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Docker Official Image"),"\n",a.createElement(l.ol,null,"\n",a.createElement(l.li,null,"download the image","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"docker pull redis\n")),"\n"),"\n",a.createElement(l.li,null,"run the image","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"docker run --name redis -d -p 6379:6379 -rm redis\n")),"\n"),"\n",a.createElement(l.li,null,"enter CLI","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"docker exec -it redis bash\n")),"\n"),"\n",a.createElement(l.li,null,"run the redis command","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"redis-cli\n")),"\n"),"\n",a.createElement(l.li,null,"test whether the construction is successful","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"ping\n")),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-output"},"PONG\n")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,t.ah)(),e.components);return l?a.createElement(l,e,a.createElement(r,e)):r(e)},s=n(1883),m=n(8032),u=n(7706),o=n(2036),i=n(908),E=n(8197),d=n(2349),h=n(8554),g=n(4072),p=n(1950);const f=e=>{var l;let{data:r,location:c,children:d}=e;const f=r.site.siteMetadata.languages,{mdx:N}=r,b=(0,a.useRef)(null),{0:k,1:y}=(0,a.useState)(!0);return a.createElement(i.Z,{language:(0,o.G)(c.pathname,f).id},a.createElement(E.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:b,className:p.hi,onScroll:()=>y(0===b.current.scrollTop)},a.createElement("div",{className:p.nC},a.createElement("header",{className:p.fr},a.createElement("h1",null,N.frontmatter.title),a.createElement("h3",null,N.fields.date)),N.tableOfContents.items?a.createElement("ol",{className:p.Jt},a.createElement("span",null,(0,o.G)(c.pathname,f).headline),null===(l=N.tableOfContents.items)||void 0===l?void 0:l.map((e=>{let{title:l}=e;return a.createElement("li",{key:"Heading_"+l},a.createElement(s.Link,{to:"#"+(0,u.S)(l),className:p.p4},l))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:p.Ig},a.createElement(t.Zo,{components:{a:e=>{let{href:l,children:n}=e;return a.createElement("a",{target:"_blank",href:l},n)},pre:e=>{let{children:l}=e;return a.createElement(h.Z,null,l)},h1:e=>{let{children:l}=e;return a.createElement(g.Z,null,l)}}},d))),a.createElement("button",{className:p.vc,disabled:k,onClick:()=>{(0,s.navigate)(c.pathname),b.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(m.S,{className:p.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:n(7695)}))))};function N(e){return a.createElement(f,e,a.createElement(c,e))}const b=e=>{let{data:l,location:n}=e;return a.createElement(d.Z,{title:l.mdx.frontmatter.title,pathname:n.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-users-sninjo-desktop-github-blog-content-tool-notes-redis-en-md-760a4b1e496d755cba66.js.map