"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[897],{2782:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),c=a(1883),i=a(8032),l=a(2036),r="index-module--img--50e58",s="index-module--link--490a4";var m=e=>{let{currentPath:t}=e;const{site:m}=(0,c.useStaticQuery)("2455516822"),o=m.siteMetadata.languages;return n.createElement("nav",{className:"index-module--nav--287f4"},n.createElement(c.Link,{to:"/",className:s},n.createElement(i.S,{className:r,src:"../../images/blog.png",alt:"blog logo",title:"SNinjo Blog",loading:"eager",__imageData:a(1279)})),n.createElement("a",{href:"https://SNinjo.com",target:"_blank",className:s},n.createElement(i.S,{className:r,src:"../../images/sninjo.png",alt:"SNinjo logo",title:"SNinjo Personal Website",loading:"eager",__imageData:a(1539)})),n.createElement("a",{href:"https://SNinjo.com/contact",target:"_blank",className:s},n.createElement(i.S,{className:r,src:"../../images/email.png",alt:"contact icon",title:"Contact Information",loading:"eager",__imageData:a(512)})),n.createElement("select",{defaultValue:(0,l.G)(t,o).path,onChange:e=>{return a=(0,l.G)(t,o).path,n=e.target.value,void(0,c.navigate)(t.replace(new RegExp("/"+a+"/?$"),"/"+n));var a,n}},o.map(((e,t)=>n.createElement("option",{key:"Language"+t,value:e.path},e.name)))))}},3183:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d},default:function(){return o}});var n=a(7294),c=a(1883),i=a(2036),l=a(2782),r="index-module--link--2398e";var s=e=>{let{currentPath:t,contents:a}=e;const{site:s}=(0,c.useStaticQuery)("3936017631"),m=(0,i.G)(t,s.siteMetadata.languages);return n.createElement("nav",{className:"index-module--nav--88d41"},n.createElement(c.Link,{to:"/contents/"+m.path,className:r},n.createElement("span",null,m.contents)),a.map(((e,a)=>n.createElement(c.Link,{key:"Link"+a,to:e.path,className:r+" "+(t.match(new RegExp(e.path+"[a-z]*/?$"))?"index-module--currentPath--87fa4":"")},n.createElement("span",{style:{paddingLeft:20*e.depth+"px"}},e.title)))),n.createElement("div",{className:"index-module--bottom--f3270"},n.createElement(l.Z,{currentPath:t})))};var m=e=>{let{pathname:t}=e;const{site:a}=(0,c.useStaticQuery)("2714612279"),{title:i,description:l,author:r,imagePath:s,siteUrl:m}=a.siteMetadata,o=""+m+t,d=""+m+s;return n.createElement(n.Fragment,null,n.createElement("title",null,i),n.createElement("link",{rel:"icon",type:"image/x-icon",href:"favicon.ico"}),n.createElement("link",{rel:"canonical",href:o}),n.createElement("meta",{name:"description",content:l}),n.createElement("meta",{name:"image",content:d}),n.createElement("meta",{name:"og:title",content:i}),n.createElement("meta",{name:"og:description",content:l}),n.createElement("meta",{name:"og:image",content:d}),n.createElement("meta",{name:"og:type",content:"website"}),n.createElement("meta",{name:"og:url",content:o}),n.createElement("meta",{name:"og:site_name",content:i}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:i}),n.createElement("meta",{name:"twitter:url",content:o}),n.createElement("meta",{name:"twitter:description",content:l}),n.createElement("meta",{name:"twitter:image",content:d}))};var o=e=>{let{data:t,location:a}=e;const{markdownRemark:c}=t;return n.createElement("div",{className:"index-module--div--a334b"},n.createElement(s,{currentPath:a.pathname,contents:t.allMarkdownRemark.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),n.createElement("section",null,n.createElement("div",{className:"index-module--container--7de9d"},n.createElement("header",null,n.createElement("h1",null,c.frontmatter.title),n.createElement("h3",null,c.fields.date)),n.createElement("div",{className:"index-module--article--d8571",dangerouslySetInnerHTML:{__html:c.html}}))))};const d=e=>{let{location:t}=e;return n.createElement(m,{pathname:t.pathname})}},2036:function(e,t,a){function n(e,t){let a;for(const n of t){if(!n.id||!n.path&&""!==n.path)throw Error('Language configuration error, please add "id" and "path" in graphql');if("en"===n.id)a=n;else if(e.match(new RegExp("/"+n.path+"/?$")))return n}return a}a.d(t,{G:function(){return n}})},1539:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/cebed2ef897d5925598703350d0b27b0/ccc41/sninjo.png","srcSet":"/static/cebed2ef897d5925598703350d0b27b0/bf8e1/sninjo.png 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/acb7c/sninjo.png 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/ccc41/sninjo.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/cebed2ef897d5925598703350d0b27b0/6766a/sninjo.webp 128w,\\n/static/cebed2ef897d5925598703350d0b27b0/22bfc/sninjo.webp 256w,\\n/static/cebed2ef897d5925598703350d0b27b0/d689f/sninjo.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},512:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a5aeee09486c913ea41cf7b1064ebbac/b033d/email.png","srcSet":"/static/a5aeee09486c913ea41cf7b1064ebbac/18b61/email.png 533w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/2c10b/email.png 1067w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/b033d/email.png 2133w","sizes":"(min-width: 2133px) 2133px, 100vw"},"sources":[{"srcSet":"/static/a5aeee09486c913ea41cf7b1064ebbac/3b140/email.webp 533w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/9483e/email.webp 1067w,\\n/static/a5aeee09486c913ea41cf7b1064ebbac/8892b/email.webp 2133w","type":"image/webp","sizes":"(min-width: 2133px) 2133px, 100vw"}]},"width":2133,"height":2133}')},1279:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7898c8","images":{"fallback":{"src":"/static/5af45679fb81134e60c94d343e30a0ba/b033d/blog.png","srcSet":"/static/5af45679fb81134e60c94d343e30a0ba/18b61/blog.png 533w,\\n/static/5af45679fb81134e60c94d343e30a0ba/2c10b/blog.png 1067w,\\n/static/5af45679fb81134e60c94d343e30a0ba/b033d/blog.png 2133w","sizes":"(min-width: 2133px) 2133px, 100vw"},"sources":[{"srcSet":"/static/5af45679fb81134e60c94d343e30a0ba/3b140/blog.webp 533w,\\n/static/5af45679fb81134e60c94d343e30a0ba/9483e/blog.webp 1067w,\\n/static/5af45679fb81134e60c94d343e30a0ba/8892b/blog.webp 2133w","type":"image/webp","sizes":"(min-width: 2133px) 2133px, 100vw"}]},"width":2133,"height":2133}')}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-44898e15d72d630e894c.js.map