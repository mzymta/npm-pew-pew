import{f as n}from"./index-BOnq2-IM.js";import{a as s,C as t}from"./CBreadcrumbItem-C8R9a2WZ.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CSkeleton-BQgGCk3S.js";import"./CIcon-BdIW6TD_.js";const u={title:"Components/BreadcrumbItem",component:t,tags:["autodocs"],argTypes:{default:{control:!1},onClick:{control:!1},to:{control:!1},href:{control:{type:"text"}},loadingWidth:{control:"text"},target:{options:["_self","_blank"]}},parameters:{docs:{description:{component:"Custom component. Represents an individual item within a breadcrumb navigation."}}},render:o=>({components:{CBreadcrumbItem:t,CBreadcrumb:s},setup(){return{args:o}},template:`
      <CBreadcrumb>
        <CBreadcrumbItem 
          :href="args.href"
          :target="args.target"
          :is-loading="args.isLoading"
          :loading-width="args.loadingWidth"
          @click="args.onClick">
          Home
        </CBreadcrumbItem>
        <CBreadcrumbItem
          href="https://www.imdb.com/feature/genre/?ref_=nv_ch_gr"
          :target="args.target"
          :is-loading="args.isLoading"
          :loading-width="args.loadingWidth"
          @click="args.onClick">
          Movies
        </CBreadcrumbItem>
        <CBreadcrumbItem 
          href="https://www.imdb.com/search/title/?genres=comedy&explore=genres&title_type=feature"
          :target="args.target"
          :is-loading="args.isLoading"
          :loading-width="args.loadingWidth"
          @click="args.onClick">
          Comedy
        </CBreadcrumbItem>
        <CBreadcrumbItem 
          href="https://www.imdb.com/title/tt0098627/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_weeken"
          :target="args.target"
          :is-active="args.isActive"
          :is-loading="args.isLoading"
          :loading-width="args.loadingWidth"
          @click="args.onClick">
          Weekend at Bernie's
        </CBreadcrumbItem>
      </CBreadcrumb>
    `})},e={args:{isActive:!0,loadingWidth:"120px",target:"_blank",href:"https://www.imdb.com/",onClick:n()}};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    isActive: true,
    loadingWidth: '120px',
    target: '_blank',
    href: 'https://www.imdb.com/',
    onClick: fn()
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,u as default};
