import{C as n}from"./CIcon-BdIW6TD_.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Components/Icon",tags:["autodocs"],component:n,decorators:[o=>({components:{story:o},template:'<div style="display: flex; gap: 24px; align-items: center"><story/></div>'})],argTypes:{name:{control:"select",options:["add","chart","search","close","cloud-upload"]}},parameters:{docs:{description:{component:"Custom component for svg icons. See instructions on how to setup: [Icons Configuration](/docs/configuration--docs#icons)."}}},render:o=>({components:{CIcon:n},setup(){return{args:o}},template:`
      <CIcon
        style="color: var(--info-color);"
        :is-inline="args.isInline"
        :name="args.name"
      />
      <CIcon
        :is-inline="args.isInline"
        :width="args.width"
        :height="args.height"
        :name="args.name"
      />
      <CIcon
        style="color: var(--primary-color);"
        :width="args.width"
        :height="args.height"
        :name="args.name"
      />
    `})},e={args:{isInline:!1,name:"add",width:40,height:40}};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    isInline: false,
    name: 'add',
    width: 40,
    height: 40
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,m as default};
