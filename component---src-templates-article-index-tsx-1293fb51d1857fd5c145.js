"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[897],{3868:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),c=a(1883);var i=()=>n.createElement(c.Link,{to:"/Preface/Copyright",className:"index-module--link--288ba"},n.createElement("p",null,"SNinjo 2023 © all rights reserved"))},2782:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),c=a(1883),i=a(8032),s=a(2036),l="index-module--img--50e58",r="index-module--link--490a4";var o=e=>{let{currentPath:t}=e;const{site:o}=(0,c.useStaticQuery)("2455516822"),m=o.siteMetadata.languages;return n.createElement("nav",{className:"index-module--nav--287f4"},n.createElement(c.Link,{to:"/",className:r},n.createElement(i.S,{className:l,src:"../../images/blog.png",alt:"blog logo",title:"SNinjo Blog",loading:"eager",__imageData:a(1279)})),n.createElement("a",{href:"https://SNinjo.com",target:"_blank",className:r},n.createElement(i.S,{className:l,src:"../../images/sninjo.png",alt:"SNinjo logo",title:"SNinjo Personal Website",loading:"eager",__imageData:a(1539)})),n.createElement("a",{href:"https://SNinjo.com/contact",target:"_blank",className:r},n.createElement(i.S,{className:l,src:"../../images/email.png",alt:"contact icon",title:"Contact Information",loading:"eager",__imageData:a(512)})),n.createElement("select",{defaultValue:(0,s.G)(t,m).path,onChange:e=>{return a=(0,s.G)(t,m).path,n=e.target.value,void(0,c.navigate)(t.replace(new RegExp("/"+a+"/?$"),"/"+n));var a,n}},m.map(((e,t)=>n.createElement("option",{key:"Language"+t,value:e.path},e.name)))))}},2349:function(e,t,a){var n=a(7294),c=a(1883);t.Z=e=>{let{title:t,pathname:a}=e;const{site:i}=(0,c.useStaticQuery)("2714612279"),{title:s,description:l,author:r,image:o,siteUrl:m}=i.siteMetadata,d=(t?t+" | ":"")+s,b=""+m+a,p=""+m+o;return n.createElement(n.Fragment,null,n.createElement("title",null,d),n.createElement("link",{rel:"canonical",href:b}),n.createElement("meta",{name:"description",content:l}),n.createElement("meta",{name:"image",content:p}),n.createElement("meta",{name:"og:title",content:d}),n.createElement("meta",{name:"og:description",content:l}),n.createElement("meta",{name:"og:image",content:p}),n.createElement("meta",{name:"og:type",content:"website"}),n.createElement("meta",{name:"og:url",content:b}),n.createElement("meta",{name:"og:site_name",content:s}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:d}),n.createElement("meta",{name:"twitter:url",content:b}),n.createElement("meta",{name:"twitter:description",content:l}),n.createElement("meta",{name:"twitter:image",content:p}))}},3655:function(e,t,a){a.r(t),a.d(t,{Head:function(){return w},default:function(){return u}});var n=a(7294),c=a(1883),i=a(8032),s=a(2036),l=a(2782),r=a(3868),o="index-module--imageContainer--7d443",m="index-module--img--14cbc",d="index-module--link--2398e",b="index-module--show--d0168";var p=e=>{let{currentPath:t,contents:p}=e;const{site:g}=(0,c.useStaticQuery)("3936017631"),u=(0,s.G)(t,g.siteMetadata.languages),{0:w,1:f}=(0,n.useState)(!1);return n.createElement("nav",{className:"index-module--nav--88d41 "+(w?b:"")},n.createElement("div",{className:o+" "+(w?"":b),onClick:()=>f(!0)},n.createElement(i.S,{className:m,src:"../../images/list.png",alt:"list icon",title:"Open menu",loading:"eager",__imageData:a(8882)})),n.createElement("div",{className:o+" "+(w?b:""),onClick:()=>f(!1)},n.createElement(i.S,{className:m,src:"../../images/cross.png",alt:"cross icon",title:"Close menu",loading:"eager",__imageData:a(2327)})),n.createElement(c.Link,{to:"/contents/"+u.path,className:d},n.createElement("span",null,u.contents)),p.map(((e,a)=>n.createElement(c.Link,{key:"Link"+a,to:e.path,className:d+" "+(t.match(new RegExp(e.path+"[a-z]*/?$"))?"index-module--currentPath--87fa4":"")},n.createElement("span",{style:{paddingLeft:20*e.depth+"px"}},e.title)))),n.createElement("div",{className:"index-module--bottom--f3270"},n.createElement(l.Z,{currentPath:t}),n.createElement(r.Z,null)))},g=a(2349);var u=e=>{let{data:t,location:a}=e;const{markdownRemark:c}=t;return n.createElement("div",{className:"index-module--div--a334b"},n.createElement(p,{currentPath:a.pathname,contents:t.allMarkdownRemark.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),n.createElement("section",null,n.createElement("div",{className:"index-module--container--7de9d"},n.createElement("header",null,n.createElement("h1",null,c.frontmatter.title),n.createElement("h3",null,c.fields.date)),n.createElement("div",{className:"index-module--article--d8571",dangerouslySetInnerHTML:{__html:c.html}}))))};const w=e=>{let{data:t,location:a}=e;return n.createElement(g.Z,{title:t.markdownRemark.frontmatter.title,pathname:a.pathname})}},2036:function(e,t,a){function n(e,t){let a;for(const n of t){if(!n.id||!n.path&&""!==n.path)throw Error('Language configuration error, please add "id" and "path" in graphql');if("en"===n.id)a=n;else if(e.match(new RegExp("/"+n.path+"/?$")))return n}return a}a.d(t,{G:function(){return n}})},1539:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/cebed2ef897d5925598703350d0b27b0/ccc41/sninjo.png","srcSet":"/static/cebed2ef897d5925598703350d0b27b0/bf8e1/sninjo.png 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/acb7c/sninjo.png 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/ccc41/sninjo.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/cebed2ef897d5925598703350d0b27b0/6766a/sninjo.webp 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/22bfc/sninjo.webp 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/d689f/sninjo.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},512:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a5aeee09486c913ea41cf7b1064ebbac/b033d/email.png","srcSet":"/static/a5aeee09486c913ea41cf7b1064ebbac/18b61/email.png 533w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/2c10b/email.png 1067w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/b033d/email.png 2133w","sizes":"(min-width: 2133px) 2133px, 100vw"},"sources":[{"srcSet":"/static/a5aeee09486c913ea41cf7b1064ebbac/3b140/email.webp 533w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/9483e/email.webp 1067w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/8892b/email.webp 2133w","type":"image/webp","sizes":"(min-width: 2133px) 2133px, 100vw"}]},"width":2133,"height":2133}')},2327:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/575526ea1a910885d40b39b3d15b19c6/30cdc/cross.png","srcSet":"/static/575526ea1a910885d40b39b3d15b19c6/7458e/cross.png 75w,\\n/static/575526ea1a910885d40b39b3d15b19c6/de3a1/cross.png 150w,\\n/static/575526ea1a910885d40b39b3d15b19c6/30cdc/cross.png 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/575526ea1a910885d40b39b3d15b19c6/18188/cross.webp 75w,\\n/static/575526ea1a910885d40b39b3d15b19c6/c65bc/cross.webp 150w,\\n/static/575526ea1a910885d40b39b3d15b19c6/078c3/cross.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')},1279:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/5af45679fb81134e60c94d343e30a0ba/b033d/blog.png","srcSet":"/static/5af45679fb81134e60c94d343e30a0ba/18b61/blog.png 533w,\\n/static/5af45679fb81134e60c94d343e30a0ba/2c10b/blog.png 1067w,\\n/static/5af45679fb81134e60c94d343e30a0ba/b033d/blog.png 2133w","sizes":"(min-width: 2133px) 2133px, 100vw"},"sources":[{"srcSet":"/static/5af45679fb81134e60c94d343e30a0ba/3b140/blog.webp 533w,\\n/static/5af45679fb81134e60c94d343e30a0ba/9483e/blog.webp 1067w,\\n/static/5af45679fb81134e60c94d343e30a0ba/8892b/blog.webp 2133w","type":"image/webp","sizes":"(min-width: 2133px) 2133px, 100vw"}]},"width":2133,"height":2133}')},8882:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/707f6677583a603c838d39b5b6059c78/30cdc/list.png","srcSet":"/static/707f6677583a603c838d39b5b6059c78/7458e/list.png 75w,\\n/static/707f6677583a603c838d39b5b6059c78/de3a1/list.png 150w,\\n/static/707f6677583a603c838d39b5b6059c78/30cdc/list.png 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/707f6677583a603c838d39b5b6059c78/18188/list.webp 75w,\\n/static/707f6677583a603c838d39b5b6059c78/c65bc/list.webp 150w,\\n/static/707f6677583a603c838d39b5b6059c78/078c3/list.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-1293fb51d1857fd5c145.js.map