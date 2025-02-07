import{f as d}from"./index-BOnq2-IM.js";import{r as n}from"./vue.esm-bundler-D4RNtN6S.js";import{_ as o,a as l}from"./CRadioGroup-BhHzKiJD.js";import{_ as m}from"./CRadio-BArI-gXn.js";import"./use-radio-DXL91K7l.js";import"./light-DsB5ODev.js";import"./use-form-item-BaX4b55j.js";import"./use-merged-state-CUYpy2WA.js";import"./use-memo-CglecHn5.js";import"./call-f2ri57Kd.js";import"./resolve-slot-BBjw-So6.js";import"./RadioGroup-CEelZecD.js";import"./use-rtl-DB_faxJd.js";import"./flatten-B94A2huW.js";import"./get-slot-Bk_rJcZu.js";import"./light-Cio_vDsU.js";import"./use-css-vars-class-BoK1eXI1.js";import"./Radio-Cjbn-7sd.js";const U={title:"Components/RadioGroup",component:o,tags:["autodocs"],decorators:[a=>({components:{story:a},template:'<div style="display: grid; gap: 36px"><story/></div>'})],argTypes:{value:{control:!1},name:{control:"text"},size:{options:["small","medium","large"]},"onUpdate:value":{table:{disable:!0}},defaultValue:{control:"text"}},parameters:{docs:{description:{component:"The CRadio component wraps Naive UI’s NRadio to provide a customizable radio button. It supports features like checked state management, size adjustments, and custom labels. It also emits events for value changes and provides a default slot for custom content. Use it within a radio group for seamless integration with other components."}}},render:a=>({components:{CRadioButton:l,CRadioGroup:o,CRadio:m},setup(){const i=n("yes");return{args:a,selectedValue:i}},template:`
      <CRadioGroup 
        v-model:value="selectedValue"
        :size="args.size"
        :disabled="args.disabled"
        :name="args.name"
        :default-value="args.defaultValue"
      >
        <CRadioButton value="yes">
          Yes
        </CRadioButton>
        <CRadioButton value="no">
          No
        </CRadioButton>
        <CRadioButton value="maybe">
          Maybe
        </CRadioButton>
      </CRadioGroup>
      
      <CRadioGroup 
        v-model:value="selectedValue"
        :size="args.size"
        :disabled="args.disabled"
        :name="args.name"
        :default-value="args.defaultValue"
        style="display: flex; gap: 12px;"
      >
        <CRadio value="yes">
          Yes
        </CRadio>
        <CRadio value="no">
          No
        </CRadio>
        <CRadio value="maybe">
          Maybe
        </CRadio>
      </CRadioGroup>
      
      <div>Answer: <strong>{{ selectedValue }}</strong></div>
    `})},e={args:{disabled:!1,name:"answer",size:"medium","onUpdate:value":d()}};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    disabled: false,
    name: 'answer',
    size: 'medium',
    'onUpdate:value': fn()
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,U as default};
