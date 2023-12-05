"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[84],{5683:function(e,n,t){t.r(n),t.d(n,{Head:function(){return y},default:function(){return f}});var l=t(1151),a=t(7294);function r(e){const n=Object.assign({p:"p",br:"br",a:"a",h1:"h1",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",ol:"ol"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.",a.createElement(n.br),"\n",a.createElement(n.a,{href:"https://docs.docker.com/get-started/overview/"},"View more information")),"\n",a.createElement(n.h1,null,"Container"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"list all containers","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker ps\n")),"\n"),"\n",a.createElement(n.li,null,"run the image into the container","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker run \\\n    --name <container name> \\\n    --network <network name> \\\n    --rm (auto remove after stopping) \\\n    -d (run in the background) \\\n    -p <outer port>:<inner port> \\\n    -v <outer volume path>:<inner volume path> \\\n    <image id|repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"start the container","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker start <image id|repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"stop the container","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker stop <image id|repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"restart the container","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker restart <image id|repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"remove the container","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker rm <image id|repository>:<tag>?\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Image"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"list all images","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker image ls\n")),"\n"),"\n",a.createElement(n.li,null,"tag the image","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker tag <image id|repository>:<tag>? <repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"remove the image","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker image rm <image id|repository>\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Registry"),"\n",a.createElement(n.h3,null,"Each registry has different definition for <repository>, and it defines where the image is updated to."),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"Docker hub:",a.createElement(n.br),"\n","<repository> = <user name>/<repository name>"),"\n",a.createElement(n.li,null,"Harbor:",a.createElement(n.br),"\n","<repository> = <host>/<project>/<repository name>"),"\n"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"login to docker hub","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker login\n")),"\n"),"\n",a.createElement(n.li,null,"login to private docker registry","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker login <host>\n")),"\n"),"\n",a.createElement(n.li,null,"push the image to registry","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker push <repository>:<tag>?\n")),"\n"),"\n",a.createElement(n.li,null,"pull the image from registry","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker pull <repository>:<tag>?\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Network"),"\n",a.createElement(n.h3,null,"Container networking refers to the ability for containers to connect to and communicate with each other, or to non-Docker workloads."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"list all networks","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker network ls\n")),"\n"),"\n",a.createElement(n.li,null,"show the network settings","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker network inspect <network id|network name>\n")),"\n"),"\n",a.createElement(n.li,null,'connect a container to a network. It can also be set in "docker run --network..."',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker network connect <network id|network name> <container name>\n")),"\n"),"\n",a.createElement(n.li,null,"disconnect a container from a network","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker network disconnect <network id|network name> <container name>\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Other"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"show information logged by a running container","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker logs <image id|repository>:<tag>?\n")),"\n","show only the last <line length> lines of logs","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker logs <image id|repository>:<tag>? --tail <line length>\n")),"\n","monitor the live logs of a container","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker logs <image id|repository>:<tag>? -f\n")),"\n"),"\n",a.createElement(n.li,null,"enter CLI of the running container","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker exec -it <image id|repository>:<tag>? /bin/bash\n")),"\n",'"bash" is not available in older Linux versions',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker exec -it <image id|repository>:<tag>? /bin/sh\n")),"\n","simple version","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker exec -it <image id|repository>:<tag>? bash\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker exec -it <image id|repository>:<tag>? sh\n")),"\n"),"\n",a.createElement(n.li,null,"remove all images, containers, and caches","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker system prune -a\n")),"\n"),"\n",a.createElement(n.li,null,"keep container running for debugging","\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"for writing Dockerfile","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-docker"},"CMD sleep infinity\n")),"\n"),"\n",a.createElement(n.li,null,"for running the image with specific argument","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker run -d <image id|repository>:<tag>? sleep infinity\n")),"\n"),"\n"),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Docker Hub"),"\n",a.createElement(n.h3,null,"It's a container registry built for developers and open source contributors to find, use, and share their container images."),"\n",a.createElement(n.p,null,"There are some useful services built into the container."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/ToolNotes/Redis/#DockerImage"},"Redis")),"\n",a.createElement(n.li,null,"RabbitMQ",a.createElement(n.br),"\n","It's lightweight and easy to deploy on premises and in the cloud. It supports multiple messaging protocols and streaming.","\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"download and run the image, and set up an account","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-shell"},"docker run --name rabbitmq -d -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=<username> -e RABBITMQ_DEFAULT_PASS=<password> rabbitmq:management\n")),"\n"),"\n",a.createElement(n.li,null,"open the management website and enter the account you set",a.createElement(n.br),"\n","> http://localhost:15672"),"\n"),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},o=t(1883),i=t(8032),m=t(7706),s=t(2036),u=t(908),g=t(8197),d=t(2349),E=t(8554),p=t(4072),h=t(1950);const k=e=>{var n;let{data:r,location:c,children:d}=e;const k=r.site.siteMetadata.languages,{mdx:f}=r,y=(0,a.useRef)(null),{0:b,1:N}=(0,a.useState)(!0);return a.createElement(u.Z,{language:(0,s.G)(c.pathname,k).id},a.createElement(g.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:y,className:h.hi,onScroll:()=>N(0===y.current.scrollTop)},a.createElement("div",{className:h.nC},a.createElement("header",{className:h.fr},a.createElement("h1",null,f.frontmatter.title),a.createElement("h3",null,f.fields.date)),f.tableOfContents.items?a.createElement("ol",{className:h.Jt},a.createElement("span",null,(0,s.G)(c.pathname,k).headline),null===(n=f.tableOfContents.items)||void 0===n?void 0:n.map((e=>{let{title:n}=e;return a.createElement("li",{key:"Heading_"+n},a.createElement(o.Link,{to:"#"+(0,m.S)(n),className:h.p4},n))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:h.Ig},a.createElement(l.Zo,{components:{a:e=>{let{href:n,children:t}=e;return a.createElement("a",{target:"_blank",href:n},t)},pre:e=>{let{children:n}=e;return a.createElement(E.Z,null,n)},h1:e=>{let{children:n}=e;return a.createElement(p.Z,null,n)}}},d))),a.createElement("button",{className:h.vc,disabled:b,onClick:()=>{(0,o.navigate)(c.pathname),y.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(i.S,{className:h.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:t(7695)}))))};function f(e){return a.createElement(k,e,a.createElement(c,e))}const y=e=>{let{data:n,location:t}=e;return a.createElement(d.Z,{title:n.mdx.frontmatter.title,pathname:t.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-users-sninjo-desktop-github-blog-content-tool-notes-docker-en-md-d21c416da97438f9f4d3.js.map