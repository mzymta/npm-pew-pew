import{f as s}from"./index-BOnq2-IM.js";import{C as t}from"./CColorSchemeToggle-udTFrzHh.js";import{C as e}from"./theme-CUrklq6a.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./CButton-CYpEF-bO.js";import"./Button-CF0RFvFf.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./use-css-vars-class-BoK1eXI1.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./CIcon-BdIW6TD_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const E={title:"Components/ColorSchemeToggle",component:t,tags:["autodocs"],argTypes:{value:{options:[e.DARK,e.LIGHT]},"onUpdate:value":{table:{disable:!0}}},parameters:{docs:{description:{component:"Custom component. A button that toggles color scheme: dark, light."}}},render:p=>({components:{CColorSchemeToggle:t},setup(){return{args:p}},template:`
      <CColorSchemeToggle
        v-model:value="args.value" 
        @update:value="args['onUpdate:value']"
      />
      
      <div style="margin-top: 4px;">{{ args.value }}</div>
    `})},o={args:{value:e.DARK,"onUpdate:value":s()}};var r,a,m;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    value: ColorScheme.DARK,
    'onUpdate:value': fn()
  }
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const G=["Default"];export{o as Default,G as __namedExportsOrder,E as default};
