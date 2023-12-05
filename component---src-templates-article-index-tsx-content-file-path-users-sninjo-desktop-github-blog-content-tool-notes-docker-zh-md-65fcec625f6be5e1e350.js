"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[897],{8510:function(e,n,l){l.r(n),l.d(n,{Head:function(){return b},default:function(){return N}});var t=l(1151),a=l(7294);function r(e){const n=Object.assign({p:"p",br:"br",a:"a",h1:"h1",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",ol:"ol"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"Docker 是一個開放原始碼的開放平臺軟體，用於開發應用、交付應用和執行應用。Docker 允許使用者將基礎設施中的應用單獨分割出來，形成更小的顆粒，從而提高交付軟體的速度。",a.createElement(n.br),"\n",a.createElement(n.a,{href:"https://docs.docker.com/get-started/overview/"},"查看更多介紹")),"\n",a.createElement(n.h1,null,"容器"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"列出所有容器","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker ps\n")),"\n"),"\n",a.createElement(n.li,null,"將映像檔移至容器執行","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker run \\\n    --name <container name> \\\n\t--network <network name> \\\n    --rm (auto remove after stopping) \\\n    -d (run in the background) \\\n    -p <outer port>:<inner port> \\\n    -v <outer volume path>:<inner volume path> \\\n    <image id|repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"啟動容器","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker start <image id|repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"停止容器","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker stop <image id|repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"重啟容器","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker restart <image id|repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"刪除容器","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker rm <image id|repository>:<tag>?\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"映像檔"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"列出所有映像檔","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker image ls\n")),"\n"),"\n",a.createElement(n.li,null,"標註映像檔","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker tag <image id|repository>:<tag>? <repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"刪除映像檔","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker image rm <image id|repository>\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"註冊伺服器"),"\n",a.createElement(n.h3,null,"每個註冊伺服器對於 <repository> 都有不同的定義, 且它也決定映像檔將更新到何處"),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"Docker hub:",a.createElement(n.br),"\n","<repository> = <user name>/<repository name>"),"\n",a.createElement(n.li,null,"Harbor:",a.createElement(n.br),"\n","<repository> = <host>/<project>/<repository name>"),"\n"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"登入 docker hub","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker login\n")),"\n"),"\n",a.createElement(n.li,null,"登入 private docker registry","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker login <host>\n")),"\n"),"\n",a.createElement(n.li,null,"推送映像檔上去伺服器","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker push <repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"拉取映像檔下來本地端","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker pull <repository>:<tag>?\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"網路"),"\n",a.createElement(n.h3,null,"讓容器互相連接、溝通的網路設定"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"列出所有網路","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker network ls\n")),"\n"),"\n",a.createElement(n.li,null,"顯示網路的詳細設定","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker network inspect <network id|network name>\n")),"\n"),"\n",a.createElement(n.li,null,"將容器連接至網路上 (亦可設定在「docker run --network...」)","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker network connect <network id|network name> <container name>\n")),"\n"),"\n",a.createElement(n.li,null,"將容器從網路上斷開連結","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker network disconnect <network id|network name> <container name>\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"其他"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"列出正在執行容器的 log","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker logs <image id|repository>:<tag>?\n")),"\n","顯示最後 <line length> 行的 log","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker logs <image id|repository>:<tag>? --tail <line length>\n")),"\n","即時監聽正在執行容器的 log","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker logs <image id|repository>:<tag>? -f\n")),"\n"),"\n",a.createElement(n.li,null,"進入正在執行容器的 CLI","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker exec -it <image id|repository>:<tag>? /bin/bash\n")),"\n","在一些較老的 Linux 版本不能使用「bash」","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker exec -it <image id|repository>:<tag>? /bin/sh\n")),"\n","可簡寫成","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker exec -it <image id|repository>:<tag>? bash\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker exec -it <image id|repository>:<tag>? sh\n")),"\n"),"\n",a.createElement(n.li,null,"刪除所有的映像檔、容器、快取","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker system prune -a\n")),"\n"),"\n",a.createElement(n.li,null,"方便除錯讓容器保持執行狀態","\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"撰寫 Dockerfile","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-docker"},"CMD sleep infinity\n")),"\n"),"\n",a.createElement(n.li,null,"帶參數啟動映像檔","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker run -d <image id|repository>:<tag>? sleep infinity\n")),"\n"),"\n"),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Docker Hub"),"\n",a.createElement(n.h3,null,"官方提供的註冊伺服器"),"\n",a.createElement(n.p,null,"以下陳列了一些部屬強大服務的容器"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/ToolNotes/Redis/zh/#Docker%E6%98%A0%E5%83%8F%E6%AA%94"},"Redis")),"\n",a.createElement(n.li,null,"RabbitMQ",a.createElement(n.br),"\n","實作進階訊息佇列協定的開源訊息代理軟體","\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"下載並運行映像檔, 一併設置使用帳號","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker run --name rabbitmq -d -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=<username> -e RABBITMQ_DEFAULT_PASS=<password> rabbitmq:management\n")),"\n"),"\n",a.createElement(n.li,null,"開啟管理網頁，並輸入剛設置好的帳密",a.createElement(n.br),"\n","> http://localhost:15672"),"\n"),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},m=l(1883),o=l(8032),s=l(7706),i=l(2036),u=l(908),E=l(8197),g=l(2349),d=l(8554),p=l(4072),h=l(1950);const k=e=>{var n;let{data:r,location:c,children:g}=e;const k=r.site.siteMetadata.languages,{mdx:N}=r,b=(0,a.useRef)(null),{0:f,1:y}=(0,a.useState)(!0);return a.createElement(u.Z,{language:(0,i.G)(c.pathname,k).id},a.createElement(E.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:b,className:h.hi,onScroll:()=>y(0===b.current.scrollTop)},a.createElement("div",{className:h.nC},a.createElement("header",{className:h.fr},a.createElement("h1",null,N.frontmatter.title),a.createElement("h3",null,N.fields.date)),N.tableOfContents.items?a.createElement("ol",{className:h.Jt},a.createElement("span",null,(0,i.G)(c.pathname,k).headline),null===(n=N.tableOfContents.items)||void 0===n?void 0:n.map((e=>{let{title:n}=e;return a.createElement("li",{key:"Heading_"+n},a.createElement(m.Link,{to:"#"+(0,s.S)(n),className:h.p4},n))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:h.Ig},a.createElement(t.Zo,{components:{a:e=>{let{href:n,children:l}=e;return a.createElement("a",{target:"_blank",href:n},l)},pre:e=>{let{children:n}=e;return a.createElement(d.Z,null,n)},h1:e=>{let{children:n}=e;return a.createElement(p.Z,null,n)}}},g))),a.createElement("button",{className:h.vc,disabled:f,onClick:()=>{(0,m.navigate)(c.pathname),b.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(o.S,{className:h.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:l(7695)}))))};function N(e){return a.createElement(k,e,a.createElement(c,e))}const b=e=>{let{data:n,location:l}=e;return a.createElement(g.Z,{title:n.mdx.frontmatter.title,pathname:l.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-users-sninjo-desktop-github-blog-content-tool-notes-docker-zh-md-65fcec625f6be5e1e350.js.map