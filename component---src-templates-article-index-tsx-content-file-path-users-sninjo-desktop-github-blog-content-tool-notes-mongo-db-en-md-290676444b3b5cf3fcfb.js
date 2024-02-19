"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[6543],{472:function(e,n,l){l.r(n),l.d(n,{Head:function(){return f},default:function(){return N}});var t=l(1151),a=l(7294);function r(e){const n=Object.assign({p:"p",br:"br",a:"a",h1:"h1",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",ol:"ol"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.",a.createElement(n.br),"\n",a.createElement(n.a,{href:"https://www.mongodb.com/docs/manual/introduction/"},"View more information")),"\n",a.createElement(n.h1,null,"CLI Command"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"enter CLI","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"mongosh\n")),"\n","specify database parameters","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"mongosh \\\n    --host <host> \\\n    --port <port> \\\n    --username <username> \\\n    --authenticationDatabase <database name>\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Database"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"get the database you are using","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db\n")),"\n",'"test" is the default database.',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"test\n")),"\n"),"\n",a.createElement(n.li,null,"get all databases","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"show dbs\n")),"\n"),"\n",a.createElement(n.li,null,"switch the database",a.createElement(n.br),"\n","If the database does not exist, it'll be created automatically.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"use <database name>\n")),"\n"),"\n",a.createElement(n.li,null,"drop the database","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.dropDatabase()\n")),"\n"),"\n",a.createElement(n.li,null,"list basic commands","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"help\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Collection"),"\n",a.createElement(n.h3,null,'like SQL "table"'),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"get all collections in current database","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"show collections\n")),"\n"),"\n",a.createElement(n.li,null,"create the collection","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.createCollection('<collection name>')\n")),"\n"),"\n",a.createElement(n.li,null,"drop the collection","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.<collection name>.drop()\n")),"\n"),"\n",a.createElement(n.li,null,"list basic commands","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.help()\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Document"),"\n",a.createElement(n.h3,null,'like SQL "row"'),"\n",a.createElement(n.p,null,'"field" is like SQL "column".',a.createElement(n.br),"\n","BSON, short for Binary JSON, is a binary-encoded serialization of JSON-like documents."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"get all data","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.<collection name>.find()\n")),"\n"),"\n",a.createElement(n.li,null,"get data count","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.<collection name>.find().count()\n")),"\n"),"\n",a.createElement(n.li,null,"limit the number of data","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.<collection name>.find().limit(<number>)\n")),"\n"),"\n",a.createElement(n.li,null,"sort data",a.createElement(n.br),"\n",'"1" means ascending order',a.createElement(n.br),"\n",'"-1" means descending order',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.<collection name>.find().sort(<BSON>)\n")),"\n","only get the last 3 data","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.<collection name>.find().sort({$natural: -1}).limit(3)\n")),"\n"),"\n",a.createElement(n.li,null,"search data","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.<collection name>.find({\n    <document name>: <value>\n})\n")),"\n","value comparison",a.createElement(n.br),"\n",'"gt" means "greater than"',a.createElement(n.br),"\n",'"gte" means "greater than and equal to"',a.createElement(n.br),"\n",'"lt" means "less than"',a.createElement(n.br),"\n",'"lte" means "less then or equal to"',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.<collection name>.find({\n    <document name>: {\n        $gt: <value>\n    }\n})\n")),"\n"),"\n",a.createElement(n.li,null,"insert data",a.createElement(n.br),"\n","If the collection does not exist, it'll be created automatically.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.<collection name>.insertOne(<BSON>)\ndb.<collection name>.insertMany([<BSON>, <BSON>, ...])\n")),"\n"),"\n",a.createElement(n.li,null,"list basic commands","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"db.<collection name>.help()\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Docker Official Image"),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"download the image","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker pull mongo\n")),"\n"),"\n",a.createElement(n.li,null,"run the image","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker run --name mongo --rm -d -v <data path>:/data/db -p 27017:27017 mongo\n")),"\n","connect network if you want to use ",a.createElement(n.a,{href:"#MongoExpress"},"Mongo Express"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker run \\\n    --network <network name> \\\n    ...\n")),"\n"),"\n",a.createElement(n.li,null,"enter CLI","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker exec -it mongo bash\n")),"\n"),"\n",a.createElement(n.li,null,"run the mongodb command","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"mongosh\n")),"\n"),"\n",a.createElement(n.li,null,"test whether the construction is successful","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"show dbs\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"admin   40.00 KiB\nconfig  12.00 KiB\nlocal   40.00 KiB\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Mongo Express"),"\n",a.createElement(n.h3,null,"a web-based MongoDB admin interface written in Node.js, Express.js, and Bootstrap3."),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"download the image","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker pull mongo-express\n")),"\n"),"\n",a.createElement(n.li,null,"run the image","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker run --name mongo-express \\\n    --network <network name> \\\n    -e ME_CONFIG_MONGODB_SERVER=<mongodb container name> \\\n    -p 8081:8081 \\\n    -d \\\n    mongo-express\n")),"\n"),"\n",a.createElement(n.li,null,"enter the management website",a.createElement(n.br),"\n","> ",a.createElement(n.a,{href:"http://localhost:8081"},"http://localhost:8081")),"\n"),"\n",a.createElement(n.h1,null,"Docker Compose"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-yaml"},"version: '3'\nservices:\n    mongo:\n        image: mongo\n        container_name: mongo\n        ports:\n            - 27017:27017\n        volumes:\n            - ./:/data/db\n        networks:\n            - mongo\n    mongo-express:\n        image: mongo-express\n        container_name: mongo-express\n        ports:\n            - 8081:8081\n        networks:\n            - mongo\nnetworks:\n    mongo:\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},m=l(1883),o=l(8032),s=l(7706),u=l(2036),i=l(908),d=l(8197),E=l(2349),g=l(8554),h=l(4072),p=l(1950);const b=e=>{var n;let{data:r,location:c,children:E}=e;const b=r.site.siteMetadata.languages,{mdx:N}=r,f=(0,a.useRef)(null),{0:k,1:w}=(0,a.useState)(!0);return a.createElement(i.Z,{language:(0,u.G)(c.pathname,b).id},a.createElement(d.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:f,className:p.hi,onScroll:()=>w(0===f.current.scrollTop)},a.createElement("div",{className:p.nC},a.createElement("header",{className:p.fr},a.createElement("h1",null,N.frontmatter.title),a.createElement("h3",null,N.fields.date)),N.tableOfContents.items?a.createElement("ol",{className:p.Jt},a.createElement("span",null,(0,u.G)(c.pathname,b).headline),null===(n=N.tableOfContents.items)||void 0===n?void 0:n.map((e=>{let{title:n}=e;return a.createElement("li",{key:"Heading_"+n},a.createElement(m.Link,{to:"#"+(0,s.S)(n),className:p.p4},n))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:p.Ig},a.createElement(t.Zo,{components:{a:e=>{let{href:n,children:l}=e;return a.createElement("a",{target:"_blank",href:n},l)},pre:e=>{let{children:n}=e;return a.createElement(g.Z,null,n)},h1:e=>{let{children:n}=e;return a.createElement(h.Z,null,n)}}},E))),a.createElement("button",{className:p.vc,disabled:k,onClick:()=>{(0,m.navigate)(c.pathname),f.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(o.S,{className:p.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:l(7695)}))))};function N(e){return a.createElement(b,e,a.createElement(c,e))}const f=e=>{let{data:n,location:l}=e;return a.createElement(E.Z,{title:n.mdx.frontmatter.title,pathname:l.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-users-sninjo-desktop-github-blog-content-tool-notes-mongo-db-en-md-290676444b3b5cf3fcfb.js.map