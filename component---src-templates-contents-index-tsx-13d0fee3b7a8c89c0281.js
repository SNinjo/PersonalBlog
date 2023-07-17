"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[94],{8466:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),c=a(1883);var i=()=>n.createElement(c.Link,{to:"/Preface/Copyright",className:"index-module--link--288ba"},n.createElement("p",null,"SNinjo 2023 © all rights reserved"))},8734:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),c=a(1883),i=a(8032),l=a(2036),r="index-module--img--50e58",s="index-module--link--490a4";var o=e=>{let{currentPath:t}=e;const{site:o}=(0,c.useStaticQuery)("2455516822"),m=o.siteMetadata.languages;return n.createElement("nav",{className:"index-module--nav--287f4"},n.createElement(c.Link,{to:"/",className:s},n.createElement(i.S,{className:r,src:"../../images/blog.png",alt:"blog logo",title:"SNinjo Blog",loading:"eager",__imageData:a(1279)})),n.createElement("a",{href:"https://SNinjo.com",target:"_blank",className:s},n.createElement(i.S,{className:r,src:"../../images/sninjo.png",alt:"SNinjo logo",title:"SNinjo Personal Website",loading:"eager",__imageData:a(1539)})),n.createElement("a",{href:"https://SNinjo.com/contact",target:"_blank",className:s},n.createElement(i.S,{className:r,src:"../../images/email.png",alt:"contact icon",title:"Contact Information",loading:"eager",__imageData:a(512)})),n.createElement("select",{defaultValue:(0,l.G)(t,m).path,onChange:e=>{return a=(0,l.G)(t,m).path,n=e.target.value,void(0,c.navigate)(t.replace(new RegExp("/"+a+"/?$"),"/"+n));var a,n}},m.map(((e,t)=>n.createElement("option",{key:"Language"+t,value:e.path},e.name)))))}},2349:function(e,t,a){var n=a(7294),c=a(1883);t.Z=e=>{let{title:t,pathname:a}=e;const{site:i}=(0,c.useStaticQuery)("2714612279"),{title:l,description:r,author:s,image:o,siteUrl:m}=i.siteMetadata,d=(t?t+" | ":"")+l,b=""+m+a,g=""+m+o;return n.createElement(n.Fragment,null,n.createElement("title",null,d),n.createElement("link",{rel:"canonical",href:b}),n.createElement("meta",{name:"description",content:r}),n.createElement("meta",{name:"image",content:g}),n.createElement("meta",{name:"og:title",content:d}),n.createElement("meta",{name:"og:description",content:r}),n.createElement("meta",{name:"og:image",content:g}),n.createElement("meta",{name:"og:type",content:"website"}),n.createElement("meta",{name:"og:url",content:b}),n.createElement("meta",{name:"og:site_name",content:l}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:d}),n.createElement("meta",{name:"twitter:url",content:b}),n.createElement("meta",{name:"twitter:description",content:r}),n.createElement("meta",{name:"twitter:image",content:g}))}},1183:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d},default:function(){return m}});var n=a(7294),c=a(1883),i=a(2036),l=a(908),r=a(8734),s=a(8466),o=a(2349);var m=e=>{let{data:t,location:a}=e,o=(0,i.G)(a.pathname,t.site.siteMetadata.languages);return n.createElement(l.Z,{language:o.id},n.createElement("div",{className:"index-module--div--a06d1"},n.createElement("h1",null,o.contents),n.createElement("nav",{className:"index-module--contents--9c479"},t.allMdx.nodes.filter((e=>e.fields.isRoot)).map(((e,a)=>n.createElement(c.Link,{key:"Link"+a,to:""+e.fields.path,className:"index-module--link--7b0da"},n.createElement("span",null,e.frontmatter.title),n.createElement("span",{className:"index-module--articleQuantity--a7d6c"},t.allMdx.nodes.filter((t=>t.fields.contents===e.fields.contents)).length))))),n.createElement(r.Z,{currentPath:a.pathname}),n.createElement("footer",null,n.createElement(s.Z,null))))};const d=e=>{let{data:t,location:a}=e;return n.createElement(o.Z,{title:(0,i.G)(a.pathname,t.site.siteMetadata.languages).contents,pathname:a.pathname})}},2036:function(e,t,a){function n(e,t){let a;for(const n of t){if(!n.id||!n.path&&""!==n.path)throw Error('Language configuration error, please add "id" and "path" in graphql');if("en"===n.id)a=n;else if(e.match(new RegExp("/"+n.path+"/?$")))return n}return a}a.d(t,{G:function(){return n}})},1539:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/cebed2ef897d5925598703350d0b27b0/ccc41/sninjo.png","srcSet":"/static/cebed2ef897d5925598703350d0b27b0/bf8e1/sninjo.png 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/acb7c/sninjo.png 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/ccc41/sninjo.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/cebed2ef897d5925598703350d0b27b0/6766a/sninjo.webp 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/22bfc/sninjo.webp 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/d689f/sninjo.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},512:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/8a3ead210ca2ca9f703a05cc191b5618/ccc41/email.png","srcSet":"/static/8a3ead210ca2ca9f703a05cc191b5618/bf8e1/email.png 128w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/acb7c/email.png 256w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/ccc41/email.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/8a3ead210ca2ca9f703a05cc191b5618/6766a/email.webp 128w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/22bfc/email.webp 256w,\\n/static/8a3ead210ca2ca9f703a05cc191b5618/d689f/email.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},1279:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/36aa380c47273cc8ddebdb37b9002c44/ccc41/blog.png","srcSet":"/static/36aa380c47273cc8ddebdb37b9002c44/bf8e1/blog.png 128w,\\n/static/36aa380c47273cc8ddebdb37b9002c44/acb7c/blog.png 256w,\\n/static/36aa380c47273cc8ddebdb37b9002c44/ccc41/blog.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/36aa380c47273cc8ddebdb37b9002c44/6766a/blog.webp 128w,\\n/static/36aa380c47273cc8ddebdb37b9002c44/22bfc/blog.webp 256w,\\n/static/36aa380c47273cc8ddebdb37b9002c44/d689f/blog.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')}}]);
//# sourceMappingURL=component---src-templates-contents-index-tsx-13d0fee3b7a8c89c0281.js.map