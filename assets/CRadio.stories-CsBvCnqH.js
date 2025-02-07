import{f as s}from"./index-BOnq2-IM.js";import{r as l}from"./vue.esm-bundler-D4RNtN6S.js";import{_ as t}from"./CRadio-BArI-gXn.js";import"./Radio-Cjbn-7sd.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./use-radio-DXL91K7l.js";import"./use-form-item-BaX4b55j.js";import"./use-merged-state-CUYpy2WA.js";import"./use-memo-CglecHn5.js";import"./call-f2ri57Kd.js";import"./resolve-slot-BBjw-So6.js";import"./light-Cio_vDsU.js";import"./use-css-vars-class-BoK1eXI1.js";const R={title:"Components/Radio",component:t,tags:["autodocs"],decorators:[a=>({components:{story:a},template:'<div style="display: flex; align-items: center; gap: 24px"><story/></div>'})],argTypes:{checked:{control:!1},value:{control:!1},label:{control:!1},name:{control:"text"},size:{options:["small","medium","large"]},onChange:{table:{disable:!0}},"onUpdate:checked":{table:{disable:!0}},default:{control:!1}},parameters:{docs:{description:{component:"The CRadio component wraps Naive UI’s NRadio to provide a customizable radio button. It supports features like checked state management, size adjustments, and custom labels. It also emits events for value changes and provides a default slot for custom content. Use it within a radio group for seamless integration with other components."}}},render:a=>({components:{CRadio:t},setup(){const r=l("yes");return{args:a,selectedValue:r}},template:`
      <CRadio
        :checked="selectedValue === 'yes'"
        :defaultChecked="args.defaultChecked"
        :disabled="args.disabled"
        :label="args.label"
        :name="args.name"
        :size="args.size"
        value="yes"
        @update:checked="args['onUpdate:checked']"
        @change="(event) => { args.onChange?.(event); selectedValue = 'yes' }"
      >
        Yes
      </CRadio>
      <CRadio
        :checked="selectedValue === 'no'"
        :defaultChecked="args.defaultChecked"
        :disabled="args.disabled"
        :label="args.label"
        :name="args.name"
        :size="args.size"
        value="no"
        @update:checked="args['onUpdate:checked']"
        @change="(event) => { args.onChange?.(event); selectedValue = 'no' }"
      >
        No
      </CRadio>
      <CRadio
        :checked="selectedValue === 'maybe'"
        :defaultChecked="args.defaultChecked"
        :disabled="args.disabled"
        :label="args.label"
        :name="args.name"
        :size="args.size"
        value="maybe"
        @update:checked="args['onUpdate:checked']"
        @change="(event) => { args.onChange?.(event); selectedValue = 'maybe' }"
      >
        Maybe
      </CRadio>
    `})},e={args:{disabled:!1,name:"answer",size:"medium","onUpdate:checked":s(),onChange:s()}};var o,n,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    disabled: false,
    name: 'answer',
    size: 'medium',
    'onUpdate:checked': fn(),
    onChange: fn()
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const U=["Default"];export{e as Default,U as __namedExportsOrder,R as default};
