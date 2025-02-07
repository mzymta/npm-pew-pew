import{f as o}from"./index-BOnq2-IM.js";import{r as i}from"./vue.esm-bundler-D4RNtN6S.js";import{_ as l,a as t}from"./CRadioGroup-BhHzKiJD.js";import"./use-radio-DXL91K7l.js";import"./light-DsB5ODev.js";import"./use-form-item-BaX4b55j.js";import"./use-merged-state-CUYpy2WA.js";import"./use-memo-CglecHn5.js";import"./call-f2ri57Kd.js";import"./resolve-slot-BBjw-So6.js";import"./RadioGroup-CEelZecD.js";import"./use-rtl-DB_faxJd.js";import"./flatten-B94A2huW.js";import"./get-slot-Bk_rJcZu.js";import"./light-Cio_vDsU.js";import"./use-css-vars-class-BoK1eXI1.js";const _={title:"Components/RadioButton",component:t,tags:["autodocs"],decorators:[a=>({components:{story:a},template:'<div style="display: flex; align-items: center; gap: 24px"><story/></div>'})],argTypes:{checked:{control:!1},value:{control:!1},label:{control:!1},name:{control:"text"},size:{options:["small","medium","large"]},onChange:{table:{disable:!0}},"onUpdate:checked":{table:{disable:!0}},default:{control:!1}},parameters:{docs:{description:{component:"The CRadioButton component wraps Naive UI’s NRadio to provide a customizable radio button. It supports features like checked state management, size adjustments, and custom labels. It also emits events for value changes and provides a default slot for custom content. Use it within a radio group for seamless integration with other components."}}},render:a=>({components:{CRadioButton:t,CRadioGroup:l},setup(){const d=i("yes");return{args:a,selectedValue:d}},template:`
      <CRadioGroup 
        v-model:value="selectedValue"
        :size="args.size"
        name="answer-group"
      >
        <CRadioButton
          :disabled="args.disabled"
          :label="args.label"
          :name="args.name"
          :size="args.size"
          value="yes"
          @update:checked="args['onUpdate:checked']"
          @change="args.onChange"
        >
          Yes
        </CRadioButton>
        <CRadioButton
          :disabled="args.disabled"
          :label="args.label"
          :name="args.name"
          :size="args.size"
          value="no"
          @update:checked="args['onUpdate:checked']"
          @change="args.onChange"
        >
          No
        </CRadioButton>
        <CRadioButton
          :defaultChecked="args.defaultChecked"
          :disabled="args.disabled"
          :label="args.label"
          :name="args.name"
          :size="args.size"
          value="maybe"
          @update:checked="args['onUpdate:checked']"
          @change="args.onChange"
        >
          Maybe
        </CRadioButton>
      </CRadioGroup>
    `})},e={args:{disabled:!1,name:"answer",size:"medium","onUpdate:checked":o(),onChange:o()}};var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    disabled: false,
    name: 'answer',
    size: 'medium',
    'onUpdate:checked': fn(),
    onChange: fn()
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,_ as default};
