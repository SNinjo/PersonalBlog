"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[645],{2281:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return u}});var c=a(1151),n=a(7294);function i(e){const t=Object.assign({p:"p"},(0,c.ah)(),e.components);return n.createElement(t.p,null,"It's writing...")}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?n.createElement(t,e,n.createElement(i,e)):i(e)},r=a(8032),o=a(2036),l=a(908),d=a(8197),m=a(2349),p=a(1950);const b=e=>{let{data:t,location:i,children:s}=e;const{mdx:m}=t;return n.createElement(l.Z,{language:(0,o.G)(i.pathname,t.site.siteMetadata.languages).id},n.createElement("div",{className:p.hi},n.createElement(d.Z,{currentPath:i.pathname,contents:t.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),n.createElement("section",null,n.createElement("div",{className:p.nC},n.createElement("header",null,n.createElement("h1",null,m.frontmatter.title),n.createElement("h3",null,m.fields.date)),n.createElement("div",{className:p.Y2},n.createElement(c.Zo,{components:{pre:e=>{let{children:t}=e;const c=(0,n.useRef)(null),{0:i,1:s}=(0,n.useState)(!1),o=(0,n.useRef)();return n.createElement("pre",{ref:c},t,n.createElement("button",{style:i?{borderColor:"lightgreen"}:{},className:p.AZ,onClick:async()=>{await navigator.clipboard.writeText(c.current.innerText),s(!0),clearTimeout(o.current),o.current=setTimeout((()=>s(!1)),3e3)}},i?n.createElement(r.S,{className:p.lv,src:"../../images/tick.png",alt:"tick icon",title:"tick icon",loading:"eager",__imageData:a(8764)}):n.createElement(r.S,{className:p.lv,src:"../../images/copy.png",alt:"copy icon",title:"copy icon",loading:"eager",__imageData:a(6378)})))}}},s))))))};function u(e){return n.createElement(b,e,n.createElement(s,e))}const g=e=>{let{data:t,location:a}=e;return n.createElement(m.Z,{title:t.mdx.frontmatter.title,pathname:a.pathname})}},8466:function(e,t,a){a.d(t,{Z:function(){return i}});var c=a(7294),n=a(1883);var i=()=>c.createElement(n.Link,{to:"/Preface/Copyright",className:"index-module--link--288ba"},c.createElement("p",null,"SNinjo 2023 © all rights reserved"))},8197:function(e,t,a){a.d(t,{Z:function(){return b}});var c=a(7294),n=a(1883),i=a(8032),s=a(2036),r=a(8734),o=a(8466),l="index-module--imageContainer--7d443",d="index-module--img--14cbc",m="index-module--link--2398e",p="index-module--show--d0168";var b=e=>{let{currentPath:t,contents:b}=e;const{site:u}=(0,n.useStaticQuery)("3936017631"),g=(0,s.G)(t,u.siteMetadata.languages),{0:f,1:w}=(0,c.useState)(!1);return c.createElement("nav",{className:"index-module--nav--88d41 "+(f?p:"")},c.createElement("div",{className:l+" "+(f?"":p),onClick:()=>w(!0)},c.createElement(i.S,{className:d,src:"../../images/list.png",alt:"list icon",title:"Open menu",loading:"eager",__imageData:a(8882)})),c.createElement("div",{className:l+" "+(f?p:""),onClick:()=>w(!1)},c.createElement(i.S,{className:d,src:"../../images/cross.png",alt:"cross icon",title:"Close menu",loading:"eager",__imageData:a(2327)})),c.createElement(n.Link,{to:"/contents/"+g.path,className:m},c.createElement("span",null,g.contents)),b.map(((e,a)=>c.createElement(n.Link,{key:"Link"+a,to:e.path,className:m+" "+(t.match(new RegExp(e.path+"[a-z]*/?$"))?"index-module--currentPath--87fa4":"")},c.createElement("span",{style:{paddingLeft:20*e.depth+"px"}},e.title)))),c.createElement("div",{className:"index-module--bottom--f3270"},c.createElement(r.Z,{currentPath:t}),c.createElement(o.Z,null)))}},8734:function(e,t,a){a.d(t,{Z:function(){return l}});var c=a(7294),n=a(1883),i=a(8032),s=a(2036),r="index-module--img--50e58",o="index-module--link--490a4";var l=e=>{let{currentPath:t}=e;const{site:l}=(0,n.useStaticQuery)("2455516822"),d=l.siteMetadata.languages;return c.createElement("nav",{className:"index-module--nav--287f4"},c.createElement(n.Link,{to:"/",className:o},c.createElement(i.S,{className:r,src:"../../images/blog.png",alt:"blog logo",title:"SNinjo Blog",loading:"eager",__imageData:a(1279)})),c.createElement("a",{href:"https://SNinjo.com",target:"_blank",className:o},c.createElement(i.S,{className:r,src:"../../images/sninjo.png",alt:"SNinjo logo",title:"SNinjo Personal Website",loading:"eager",__imageData:a(1539)})),c.createElement("a",{href:"https://SNinjo.com/contact",target:"_blank",className:o},c.createElement(i.S,{className:r,src:"../../images/email.png",alt:"contact icon",title:"Contact Information",loading:"eager",__imageData:a(512)})),c.createElement("select",{defaultValue:(0,s.G)(t,d).path,onChange:e=>{return a=(0,s.G)(t,d).path,c=e.target.value,void(0,n.navigate)(t.replace(new RegExp("/"+a+"/?$"),"/"+c));var a,c}},d.map(((e,t)=>c.createElement("option",{key:"Language"+t,value:e.path},e.name)))))}},2349:function(e,t,a){var c=a(7294),n=a(1883);t.Z=e=>{let{title:t,pathname:a}=e;const{site:i}=(0,n.useStaticQuery)("2714612279"),{title:s,description:r,author:o,image:l,siteUrl:d}=i.siteMetadata,m=(t?t+" | ":"")+s,p=""+d+a,b=""+d+l;return c.createElement(c.Fragment,null,c.createElement("title",null,m),c.createElement("link",{rel:"canonical",href:p}),c.createElement("meta",{name:"description",content:r}),c.createElement("meta",{name:"image",content:b}),c.createElement("meta",{name:"og:title",content:m}),c.createElement("meta",{name:"og:description",content:r}),c.createElement("meta",{name:"og:image",content:b}),c.createElement("meta",{name:"og:type",content:"website"}),c.createElement("meta",{name:"og:url",content:p}),c.createElement("meta",{name:"og:site_name",content:s}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.createElement("meta",{name:"twitter:title",content:m}),c.createElement("meta",{name:"twitter:url",content:p}),c.createElement("meta",{name:"twitter:description",content:r}),c.createElement("meta",{name:"twitter:image",content:b}))}},2036:function(e,t,a){function c(e,t){let a;for(const c of t){if(!c.id||!c.path&&""!==c.path)throw Error('Language configuration error, please add "id" and "path" in graphql');if("en"===c.id)a=c;else if(e.match(new RegExp("/"+c.path+"/?$")))return c}return a}a.d(t,{G:function(){return c}})},1950:function(e,t,a){a.d(t,{AZ:function(){return i},Y2:function(){return c},hi:function(){return s},lv:function(){return r},nC:function(){return n}});var c="index-module--article--d8571",n="index-module--container--7de9d",i="index-module--copyButton--5c2e7",s="index-module--div--a334b",r="index-module--img--2720d"},1151:function(e,t,a){a.d(t,{Zo:function(){return r},ah:function(){return i}});var c=a(7294);const n=c.createContext({});function i(e){const t=c.useContext(n);return c.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function r({components:e,children:t,disableParentContext:a}){let r;return r=a?"function"==typeof e?e({}):e||s:i(e),c.createElement(n.Provider,{value:r},t)}},1539:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/cebed2ef897d5925598703350d0b27b0/ccc41/sninjo.png","srcSet":"/static/cebed2ef897d5925598703350d0b27b0/bf8e1/sninjo.png 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/acb7c/sninjo.png 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/ccc41/sninjo.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/cebed2ef897d5925598703350d0b27b0/6766a/sninjo.webp 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/22bfc/sninjo.webp 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/d689f/sninjo.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},8764:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/85a183fd58d2087c6cc0a2ae9ce10157/30cdc/tick.png","srcSet":"/static/85a183fd58d2087c6cc0a2ae9ce10157/7458e/tick.png 75w,\\n/static/85a183fd58d2087c6cc0a2ae9ce10157/de3a1/tick.png 150w,\\n/static/85a183fd58d2087c6cc0a2ae9ce10157/30cdc/tick.png 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/85a183fd58d2087c6cc0a2ae9ce10157/18188/tick.webp 75w,\\n/static/85a183fd58d2087c6cc0a2ae9ce10157/c65bc/tick.webp 150w,\\n/static/85a183fd58d2087c6cc0a2ae9ce10157/078c3/tick.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')},512:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/8a3ead210ca2ca9f703a05cc191b5618/ccc41/email.png","srcSet":"/static/8a3ead210ca2ca9f703a05cc191b5618/bf8e1/email.png 128w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/acb7c/email.png 256w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/ccc41/email.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/8a3ead210ca2ca9f703a05cc191b5618/6766a/email.webp 128w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/22bfc/email.webp 256w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/d689f/email.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},2327:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/575526ea1a910885d40b39b3d15b19c6/30cdc/cross.png","srcSet":"/static/575526ea1a910885d40b39b3d15b19c6/7458e/cross.png 75w,\\n/static/575526ea1a910885d40b39b3d15b19c6/de3a1/cross.png 150w,\\n/static/575526ea1a910885d40b39b3d15b19c6/30cdc/cross.png 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/575526ea1a910885d40b39b3d15b19c6/18188/cross.webp 75w,\\n/static/575526ea1a910885d40b39b3d15b19c6/c65bc/cross.webp 150w,\\n/static/575526ea1a910885d40b39b3d15b19c6/078c3/cross.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')},1279:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/36aa380c47273cc8ddebdb37b9002c44/ccc41/blog.png","srcSet":"/static/36aa380c47273cc8ddebdb37b9002c44/bf8e1/blog.png 128w,\\n/static/36aa380c47273cc8ddebdb37b9002c44/acb7c/blog.png 256w,\\n/static/36aa380c47273cc8ddebdb37b9002c44/ccc41/blog.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/36aa380c47273cc8ddebdb37b9002c44/6766a/blog.webp 128w,\\n/static/36aa380c47273cc8ddebdb37b9002c44/22bfc/blog.webp 256w,\\n/static/36aa380c47273cc8ddebdb37b9002c44/d689f/blog.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},6378:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e4b68e0a62fa15da692250d0d097a3d6/e9fba/copy.png","srcSet":"/static/e4b68e0a62fa15da692250d0d097a3d6/86ee2/copy.png 13w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/88208/copy.png 25w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/e9fba/copy.png 50w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/e4b68e0a62fa15da692250d0d097a3d6/68795/copy.webp 13w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/2fa99/copy.webp 25w,\\n/static/e4b68e0a62fa15da692250d0d097a3d6/dbc4a/copy.webp 50w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')},8882:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/707f6677583a603c838d39b5b6059c78/30cdc/list.png","srcSet":"/static/707f6677583a603c838d39b5b6059c78/7458e/list.png 75w,\\n/static/707f6677583a603c838d39b5b6059c78/de3a1/list.png 150w,\\n/static/707f6677583a603c838d39b5b6059c78/30cdc/list.png 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/707f6677583a603c838d39b5b6059c78/18188/list.webp 75w,\\n/static/707f6677583a603c838d39b5b6059c78/c65bc/list.webp 150w,\\n/static/707f6677583a603c838d39b5b6059c78/078c3/list.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-c-users-user-desktop-github-blog-content-web-development-en-md-3b50eb8726b2163fdf11.js.map