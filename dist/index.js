import{deepmerge as n}from"deepmerge-ts";function e(r={}){var o;const t=n({url:"/",logger:2}(),r);return t.url=(o=t.url)!=null&&o.endsWith("/")?t.url:`${t.url}/`,{name:"astro-dead-urls",hooks:{"astro:build:done":async()=>{}}}}export{e as default};
