import{C as o}from"./CBooleanIndicator-g4X-lECl.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./CIcon-BdIW6TD_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i={title:"Components/BooleanIndicator",component:o,tags:["autodocs"],decorators:[t=>({components:{story:t},template:'<div style="display: flex; gap: 24px; align-items: center"><story/></div>'})],argTypes:{},parameters:{docs:{description:{component:"Custom component that allows to display boolean values."}}},render:t=>({components:{CBooleanIndicator:o},setup(){return{args:t}},template:`
      <CBooleanIndicator
        :value="args.value"
        :icon-style="args.iconStyle"
      />
    `})},e={args:{iconStyle:{width:"18px",height:"18px"},value:!0}};var a,r,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    iconStyle: {
      width: '18px',
      height: '18px'
    },
    value: true
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,i as default};
