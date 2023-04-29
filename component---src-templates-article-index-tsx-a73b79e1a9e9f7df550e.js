"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[897],{3868:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),c=a(1883);var i=()=>n.createElement(c.Link,{to:"/Preface/Copyright",className:"index-module--link--288ba"},n.createElement("p",null,"SNinjo 2023 © all rights reserved"))},2782:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),c=a(1883),i=a(8032),l=a(2036),r="index-module--img--50e58",o="index-module--link--490a4";var m=e=>{let{currentPath:t}=e;const{site:m}=(0,c.useStaticQuery)("2455516822"),s=m.siteMetadata.languages;return n.createElement("nav",{className:"index-module--nav--287f4"},n.createElement(c.Link,{to:"/",className:o},n.createElement(i.S,{className:r,src:"../../images/blog.png",alt:"blog logo",title:"SNinjo Blog",loading:"eager",__imageData:a(1279)})),n.createElement("a",{href:"https://SNinjo.com",target:"_blank",className:o},n.createElement(i.S,{className:r,src:"../../images/sninjo.png",alt:"SNinjo logo",title:"SNinjo Personal Website",loading:"eager",__imageData:a(1539)})),n.createElement("a",{href:"https://SNinjo.com/contact",target:"_blank",className:o},n.createElement(i.S,{className:r,src:"../../images/email.png",alt:"contact icon",title:"Contact Information",loading:"eager",__imageData:a(512)})),n.createElement("select",{defaultValue:(0,l.G)(t,s).path,onChange:e=>{return a=(0,l.G)(t,s).path,n=e.target.value,void(0,c.navigate)(t.replace(new RegExp("/"+a+"/?$"),"/"+n));var a,n}},s.map(((e,t)=>n.createElement("option",{key:"Language"+t,value:e.path},e.name)))))}},2349:function(e,t,a){var n=a(7294),c=a(1883);t.Z=e=>{let{title:t,pathname:a}=e;const{site:i}=(0,c.useStaticQuery)("2714612279"),{title:l,description:r,author:o,image:m,siteUrl:s}=i.siteMetadata,d=(t?t+" | ":"")+l,b=""+s+a,p=""+s+m;return n.createElement(n.Fragment,null,n.createElement("title",null,d),n.createElement("link",{rel:"canonical",href:b}),n.createElement("meta",{name:"description",content:r}),n.createElement("meta",{name:"image",content:p}),n.createElement("meta",{name:"og:title",content:d}),n.createElement("meta",{name:"og:description",content:r}),n.createElement("meta",{name:"og:image",content:p}),n.createElement("meta",{name:"og:type",content:"website"}),n.createElement("meta",{name:"og:url",content:b}),n.createElement("meta",{name:"og:site_name",content:l}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:d}),n.createElement("meta",{name:"twitter:url",content:b}),n.createElement("meta",{name:"twitter:description",content:r}),n.createElement("meta",{name:"twitter:image",content:p}))}},3655:function(e,t,a){a.r(t),a.d(t,{Head:function(){return b},default:function(){return d}});var n=a(7294),c=a(1883),i=a(2036),l=a(2782),r=a(3868),o="index-module--link--2398e";var m=e=>{let{currentPath:t,contents:a}=e;const{site:m}=(0,c.useStaticQuery)("3936017631"),s=(0,i.G)(t,m.siteMetadata.languages);return n.createElement("nav",{className:"index-module--nav--88d41"},n.createElement(c.Link,{to:"/contents/"+s.path,className:o},n.createElement("span",null,s.contents)),a.map(((e,a)=>n.createElement(c.Link,{key:"Link"+a,to:e.path,className:o+" "+(t.match(new RegExp(e.path+"[a-z]*/?$"))?"index-module--currentPath--87fa4":"")},n.createElement("span",{style:{paddingLeft:20*e.depth+"px"}},e.title)))),n.createElement("div",{className:"index-module--bottom--f3270"},n.createElement(l.Z,{currentPath:t}),n.createElement(r.Z,null)))},s=a(2349);var d=e=>{let{data:t,location:a}=e;const{markdownRemark:c}=t;return n.createElement("div",{className:"index-module--div--a334b"},n.createElement(m,{currentPath:a.pathname,contents:t.allMarkdownRemark.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),n.createElement("section",null,n.createElement("div",{className:"index-module--container--7de9d"},n.createElement("header",null,n.createElement("h1",null,c.frontmatter.title),n.createElement("h3",null,c.fields.date)),n.createElement("div",{className:"index-module--article--d8571",dangerouslySetInnerHTML:{__html:c.html}}))))};const b=e=>{let{data:t,location:a}=e;return n.createElement(s.Z,{title:t.markdownRemark.frontmatter.title,pathname:a.pathname})}},2036:function(e,t,a){function n(e,t){let a;for(const n of t){if(!n.id||!n.path&&""!==n.path)throw Error('Language configuration error, please add "id" and "path" in graphql');if("en"===n.id)a=n;else if(e.match(new RegExp("/"+n.path+"/?$")))return n}return a}a.d(t,{G:function(){return n}})},1539:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/cebed2ef897d5925598703350d0b27b0/ccc41/sninjo.png","srcSet":"/static/cebed2ef897d5925598703350d0b27b0/bf8e1/sninjo.png 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/acb7c/sninjo.png 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/ccc41/sninjo.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/cebed2ef897d5925598703350d0b27b0/6766a/sninjo.webp 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/22bfc/sninjo.webp 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/d689f/sninjo.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},512:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a5aeee09486c913ea41cf7b1064ebbac/b033d/email.png","srcSet":"/static/a5aeee09486c913ea41cf7b1064ebbac/18b61/email.png 533w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/2c10b/email.png 1067w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/b033d/email.png 2133w","sizes":"(min-width: 2133px) 2133px, 100vw"},"sources":[{"srcSet":"/static/a5aeee09486c913ea41cf7b1064ebbac/3b140/email.webp 533w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/9483e/email.webp 1067w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/8892b/email.webp 2133w","type":"image/webp","sizes":"(min-width: 2133px) 2133px, 100vw"}]},"width":2133,"height":2133}')},1279:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/5af45679fb81134e60c94d343e30a0ba/b033d/blog.png","srcSet":"/static/5af45679fb81134e60c94d343e30a0ba/18b61/blog.png 533w,\\n/static/5af45679fb81134e60c94d343e30a0ba/2c10b/blog.png 1067w,\\n/static/5af45679fb81134e60c94d343e30a0ba/b033d/blog.png 2133w","sizes":"(min-width: 2133px) 2133px, 100vw"},"sources":[{"srcSet":"/static/5af45679fb81134e60c94d343e30a0ba/3b140/blog.webp 533w,\\n/static/5af45679fb81134e60c94d343e30a0ba/9483e/blog.webp 1067w,\\n/static/5af45679fb81134e60c94d343e30a0ba/8892b/blog.webp 2133w","type":"image/webp","sizes":"(min-width: 2133px) 2133px, 100vw"}]},"width":2133,"height":2133}')}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-a73b79e1a9e9f7df550e.js.map