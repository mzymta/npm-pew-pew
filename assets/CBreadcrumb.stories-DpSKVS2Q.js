import{C as c,a as r}from"./CBreadcrumbItem-C8R9a2WZ.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CSkeleton-BQgGCk3S.js";import"./CIcon-BdIW6TD_.js";const i={title:"Components/Breadcrumb",component:r,tags:["autodocs"],argTypes:{default:{control:!1,description:"Slot for the list of the breadcrumbs."}},parameters:{docs:{description:{component:"Custom component. Simple wrapper for [BreadcrumbItem](/docs/components-breadcrumbitem--docs) component."}}},render:a=>({components:{CBreadcrumb:r,CBreadcrumbItem:c},setup(){return{args:a}},template:`
      <CBreadcrumb>
        <CBreadcrumbItem :to="{ name: '/' }">
          Home
        </CBreadcrumbItem>
        <CBreadcrumbItem :to="{ name: '/' }">
          Movies
        </CBreadcrumbItem>
        <CBreadcrumbItem :to="{ name: '/' }">
          Drama
        </CBreadcrumbItem>
        <CBreadcrumbItem :is-active="true">
          Eternal Sunshine of the Spotless Mind
        </CBreadcrumbItem>
      </CBreadcrumb>
    `})},e={};var t,m,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(o=(m=e.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,i as default};
