import{r as g}from"./vue.esm-bundler-D4RNtN6S.js";import{f as o}from"./index-BOnq2-IM.js";import{C as t}from"./CSwitch-CEIieuS2.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./light-DsB5ODev.js";import"./resolve-slot-BBjw-So6.js";import"./Loading-Ch5S3HjA.js";import"./use-style-DC-6GAXR.js";import"./light-CsUjX7R1.js";import"./use-form-item-BaX4b55j.js";import"./use-merged-state-CUYpy2WA.js";import"./index-Xn0jilRV.js";import"./use-css-vars-class-BoK1eXI1.js";import"./call-f2ri57Kd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={title:"Components/Switch",component:t,tags:["autodocs"],argTypes:{value:{control:"boolean"},gap:{control:"number"},labelPlacement:{options:["start","end"]},align:{options:["start","center"]},isDisabled:{control:"boolean"},default:{control:!1},checked:{control:!1},"checked-icon":{control:!1,description:"Icon of switch button when checked."},icon:{control:!1},unchecked:{control:!1},"unchecked-icon":{control:!1,description:"Icon of switch button when unchecked."},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},"onUpdate:value":{table:{disable:!0}}},parameters:{docs:{description:{component:`**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/switch) but has additional properties.** 

  A customizable switch component for choosing between an on/off value.`}}},render:r=>({components:{CSwitch:t},setup(){return{args:r}},template:`
      <CSwitch
        v-model:value="args.value"
        :label-placement="args.labelPlacement"
        :is-disabled="args.isDisabled"
        :align="args.align"
        :gap="args.gap"
        :loading="args.loading"
        :round="args.round"
        @focus="args.onFocus"
        @blur="args.onBlur"
        @update:value="args['onUpdate:value']"
      >
        Label
      </CSwitch>
    `})},e={args:{value:!0,isDisabled:!1,labelPlacement:"start",align:"start",round:!0,onBlur:o(),onFocus:o(),"onUpdate:value":o()}},a={args:{value:!0,round:!1}},n={render:()=>({components:{CSwitch:t},setup(){return{value:g(!0)}},template:`
      <div style="display: flex; gap: 10px;">
        <CSwitch 
          v-model:value="value"
          size="small"
        />
        <CSwitch
          v-model:value="value"
          size="medium"
        />
        <CSwitch
          v-model:value="value"
          size="large"
        />
      </div>
    `})};var s,l,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: true,
    isDisabled: false,
    labelPlacement: 'start',
    align: 'start',
    round: true,
    onBlur: fn(),
    onFocus: fn(),
    'onUpdate:value': fn()
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,u,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: true,
    round: false
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,m,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CSwitch
    },
    setup() {
      const value = ref(true);
      return {
        value
      };
    },
    template: \`
      <div style="display: flex; gap: 10px;">
        <CSwitch 
          v-model:value="value"
          size="small"
        />
        <CSwitch
          v-model:value="value"
          size="medium"
        />
        <CSwitch
          v-model:value="value"
          size="large"
        />
      </div>
    \`
  })
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const _=["Default","Shape","Size"];export{e as Default,a as Shape,n as Size,_ as __namedExportsOrder,I as default};
