"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[9770],{4435:function(e,l,n){n.r(l),n.d(l,{Head:function(){return f},default:function(){return b}});var t=n(1151),a=n(7294);function c(e){const l=Object.assign({p:"p",br:"br",a:"a",h1:"h1",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",ol:"ol"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(l.p,null,"MongoDB 使用的是文件導向的儲存概念，是一種靈活、易於擴展、高效能的NoSQL資料庫，它提供了可以跟SQL相比的 Query Language，同時也是 Open Source 的NoSQL DB，本身用 C++ 語言撰寫而成，在許多場景下可用於替代傳統的關聯式資料庫儲存方式。",a.createElement(l.br),"\n",a.createElement(l.a,{href:"https://www.mongodb.com/docs/manual/introduction/"},"View more information")),"\n",a.createElement(l.h1,null,"CLI 指令"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"進入 CLI","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"mongosh\n")),"\n","指定資料庫參數","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"mongosh \\\r\n    --host <host> \\\r\n    --port <port> \\\r\n    --username <username> \\\r\n    --authenticationDatabase <database name>\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"資料庫"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"取得目前使用的資料庫","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db\n")),"\n",'"test" 是預設的資料庫。',"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-output"},"test\n")),"\n"),"\n",a.createElement(l.li,null,"取得所有資料庫","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"show dbs\n")),"\n"),"\n",a.createElement(l.li,null,"切換資料庫",a.createElement(l.br),"\n","若資料庫不存在，則會自動新建。","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"use <database name>\n")),"\n"),"\n",a.createElement(l.li,null,"刪除資料庫","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db.dropDatabase()\n")),"\n"),"\n",a.createElement(l.li,null,"查詢基本指令","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"help\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Collection"),"\n",a.createElement(l.h3,null,"如同 SQL 的「table」"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"取得目前資料庫的 collection","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"show collections\n")),"\n"),"\n",a.createElement(l.li,null,"創建 collection","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db.createCollection('<collection name>')\n")),"\n"),"\n",a.createElement(l.li,null,"刪除 collection","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db.<collection name>.drop()\n")),"\n"),"\n",a.createElement(l.li,null,"查詢基本指令","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db.help()\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Document"),"\n",a.createElement(l.h3,null,"如同 SQL 的「row」"),"\n",a.createElement(l.p,null,"「field」 is like SQL 「column」。",a.createElement(l.br),"\n","BSON 是一種二進制序列化的類 JSON 格式，為「Binary JSON」的縮寫。"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"取得所有資料","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db.<collection name>.find()\n")),"\n"),"\n",a.createElement(l.li,null,"新增資料",a.createElement(l.br),"\n","若 collection 不存在，則自動新建。","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db.<collection name>.insertOne(<BSON>)\r\ndb.<collection name>.insertMany([<BSON>, <BSON>, ...])\n")),"\n"),"\n",a.createElement(l.li,null,"限制資料的數量","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db.<collection name>.find().limit(<number>)\n")),"\n"),"\n",a.createElement(l.li,null,"排列資料",a.createElement(l.br),"\n","「1」代表升序",a.createElement(l.br),"\n","「-1」代表降序","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db.<collection name>.find().sort(<BSON>)\n")),"\n","只取得最新 3 筆資料","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db.<collection name>.find().sort({$natural: -1}).limit(3)\n")),"\n"),"\n",a.createElement(l.li,null,"查詢基本指令","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"db.<collection name>.help()\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Docker 官方映像檔"),"\n",a.createElement(l.ol,null,"\n",a.createElement(l.li,null,"下載映像檔","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"docker pull mongo\n")),"\n"),"\n",a.createElement(l.li,null,"運行映像檔","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"docker run --name mongo -d -v <data path>:/data/db -p 27017:27017 -rm mongo\n")),"\n"),"\n",a.createElement(l.li,null,"進入 CLI","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"docker exec -it mongo bash\n")),"\n"),"\n",a.createElement(l.li,null,"執行 mongodb 指令","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"mongosh\n")),"\n"),"\n",a.createElement(l.li,null,"測試是否部屬成功","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"show dbs\n")),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-output"},"admin   40.00 KiB\r\nconfig  12.00 KiB\r\nlocal   40.00 KiB\n")),"\n"),"\n"))}var r=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,t.ah)(),e.components);return l?a.createElement(l,e,a.createElement(c,e)):c(e)},m=n(1883),o=n(8032),s=n(7392),u=n(2036),i=n(908),E=n(8197),d=n(2349),g=n(8554),h=n(4072),p=n(1950);const N=e=>{var l;let{data:c,location:r,children:d}=e;const N=c.site.siteMetadata.languages,{mdx:b}=c,f=(0,a.useRef)(null),{0:S,1:v}=(0,a.useState)(!0);return a.createElement(i.Z,{language:(0,u.G)(r.pathname,N).id},a.createElement(E.Z,{currentPath:r.pathname,contents:c.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:f,className:p.hi,onScroll:()=>v(0===f.current.scrollTop)},a.createElement("div",{className:p.nC},a.createElement("header",{className:p.fr},a.createElement("h1",null,b.frontmatter.title),a.createElement("h3",null,b.fields.date)),b.tableOfContents.items?a.createElement("ol",{className:p.Jt},a.createElement("span",null,(0,u.G)(r.pathname,N).headline),null===(l=b.tableOfContents.items)||void 0===l?void 0:l.map((e=>{let{title:l}=e;return a.createElement("li",{key:"Heading_"+l},a.createElement(m.Link,{to:"#"+(0,s.S)(l),className:p.p4},l))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:p.Ig},a.createElement(t.Zo,{components:{a:e=>{let{href:l,children:n}=e;return a.createElement("a",{target:"_blank",href:l},n)},pre:e=>{let{children:l}=e;return a.createElement(g.Z,null,l)},h1:e=>{let{children:l}=e;return a.createElement(h.Z,null,l)}}},d))),a.createElement("button",{className:p.vc,disabled:S,onClick:()=>{(0,m.navigate)(r.pathname),f.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(o.S,{className:p.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:n(5097)}))))};function b(e){return a.createElement(N,e,a.createElement(r,e))}const f=e=>{let{data:l,location:n}=e;return a.createElement(d.Z,{title:l.mdx.frontmatter.title,pathname:n.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-c-users-user-desktop-github-blog-content-tool-notes-mongo-db-zh-md-b8de778b3c7e86fa40a2.js.map