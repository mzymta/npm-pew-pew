import{r,c as T}from"./vue.esm-bundler-D4RNtN6S.js";import{f as G}from"./index-BOnq2-IM.js";import{C as n}from"./CInput-JyLJ_8RY.js";import{C as N}from"./CIcon-BdIW6TD_.js";import"./Input-DEy15p9s.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./resolve-slot-BBjw-So6.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./index-Xn0jilRV.js";import"./delegate-AmuGJuoF.js";import"./use-css-vars-class-BoK1eXI1.js";import"./light-RknvjviJ.js";import"./get-precise-event-target-DhO46Lpt.js";import"./Suffix-BjoWbega.js";import"./Loading-Ch5S3HjA.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./use-style-DC-6GAXR.js";import"./Icon-CrmNSR1a.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./light-3lQabVNk.js";import"./use-locale-CfrJhm3r.js";import"./enUS-CW6P5ZC_.js";import"./use-merged-state-CUYpy2WA.js";import"./use-form-item-BaX4b55j.js";import"./use-memo-CglecHn5.js";import"./call-f2ri57Kd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ge={title:"Components/Input",component:n,tags:["autodocs"],decorators:[e=>({components:{story:e},template:'<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; align-items: center"><story/></div>'})],argTypes:{count:{control:!1,description:"Word count."},"clear-icon":{control:!1,description:"Custom clear icon."},"password-invisible-icon":{control:!1,description:"Password toggle icon when password is invisible."},"password-visible-icon":{control:!1,description:"Password toggle icon when password is visible."},prefix:{control:!1,description:"Prefix content slot."},suffix:{control:!1,description:"Suffix content slot."},separator:{table:{disable:!0}},showPasswordOn:{options:["click","mousedown"]},size:{options:["tiny","small","medium","large"]},status:{options:["success","warning","error"]},type:{options:["text","password","textarea"]},allowInput:{control:!1}},parameters:{docs:{description:{component:"**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/input) but has additional properties: `hasError`, `id`.**"}}},render:e=>({components:{CInput:n},setup(){const t=r("");return{args:e,value:t,fn:G}},template:`
      <CInput
        id="default-tag-input"
        style="max-width: 500px"
        v-model:value="value"
        :hasError="args.hasError"
        :id="args.id"
        :allowInput="args.allowInput"
        :autofocus="args.autofocus"
        :autosize="args.autosize"
        :clearable="args.clearable"
        :countGraphemes="args.countGraphemes"
        :defaultValue="args.defaultValue"
        :disabled="args.disabled"
        :inputProps="args.inputProps"
        :loading="args.loading"
        :maxlength="args.maxlength"
        :minlength="args.minlength"
        :passivelyActivated="args.passivelyActivated"
        :placeholder="args.placeholder"
        :readonly="args.readonly"
        :renderCount="args.renderCount"
        :round="args.round"
        :rows="args.rows"
        :showCount="args.showCount"
        :showPasswordOn="args.showPasswordOn"
        :size="args.size"
        :status="args.status"
        :type="args.type"
      />
    `})},o={args:{size:"medium"}},s={render:()=>({components:{CInput:n},setup(){return{value:r("")}},template:`
      <CInput 
        v-model:value="value"
        clearable
        size="tiny"/>
      <CInput 
        v-model:value="value"
        clearable
        size="small"/>
      <CInput 
        v-model:value="value"
        clearable
        size="medium"/>
      <CInput 
        v-model:value="value"
        clearable
        size="large"/>
    `})},l={render:e=>({components:{CInput:n,CIcon:N},setup(){const t=r("");return{args:e,value:t}},template:`
      <CInput 
        style="max-width: 500px"
        v-model:value="value"
        clearable>
        <template #prefix>
          <CIcon :is-inline="true" name="search"></CIcon>
        </template>
      </CInput>
    `})},p={render:e=>({components:{CInput:n,CIcon:N},setup(){const t=r(""),a=T(()=>t.value.length>3);return{args:e,value:t,isValid:a}},template:`
      <CInput 
        style="max-width: 500px"
        v-model:value="value"
        clearable>
        <template #suffix>
          <CIcon 
            v-if="isValid"
            style="color: var(--success-color);"
            :is-inline="true" name="checkmark-circle"></CIcon>
          <CIcon 
            v-else
            style="color: var(--error-color);"
            :is-inline="true" name="close-circle"></CIcon>
        </template>
      </CInput>
    `})},u={render:()=>({components:{CInput:n},setup(){return{value:r("")}},template:`
      <CInput 
        style="max-width: 500px"
        v-model:value="value"
        placeholder="Password"
        show-password-on="click"
        type="password"/>
    `})},i={render:()=>({components:{CInput:n},setup(){return{value:r("")}},template:`
      <CInput 
        style="max-width: 500px"
        v-model:value="value"
        :rows="5"
        placeholder="Description"
        type="textarea"/>
    `})},c={render:()=>({components:{CInput:n},setup(){return{value:r(""),allowInput:a=>!a||/^\d+$/.test(a)}},template:`
      <CInput 
        style="max-width: 500px"
        v-model:value="value"
        :rows="5"
        :allow-input="allowInput"
        placeholder="Numbers only"/>
    `})};var m,d,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...(v=(d=o.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var w,g,I;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <CInput 
        v-model:value="value"
        clearable
        size="tiny"/>
      <CInput 
        v-model:value="value"
        clearable
        size="small"/>
      <CInput 
        v-model:value="value"
        clearable
        size="medium"/>
      <CInput 
        v-model:value="value"
        clearable
        size="large"/>
    \`
  })
}`,...(I=(g=s.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var C,f,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CInput,
      CIcon
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <CInput 
        style="max-width: 500px"
        v-model:value="value"
        clearable>
        <template #prefix>
          <CIcon :is-inline="true" name="search"></CIcon>
        </template>
      </CInput>
    \`
  })
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,y,b;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CInput,
      CIcon
    },
    setup() {
      const value = ref('');
      const isValid = computed(() => value.value.length > 3);
      return {
        args,
        value,
        isValid
      };
    },
    template: \`
      <CInput 
        style="max-width: 500px"
        v-model:value="value"
        clearable>
        <template #suffix>
          <CIcon 
            v-if="isValid"
            style="color: var(--success-color);"
            :is-inline="true" name="checkmark-circle"></CIcon>
          <CIcon 
            v-else
            style="color: var(--error-color);"
            :is-inline="true" name="close-circle"></CIcon>
        </template>
      </CInput>
    \`
  })
}`,...(b=(y=p.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var z,P,S;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <CInput 
        style="max-width: 500px"
        v-model:value="value"
        placeholder="Password"
        show-password-on="click"
        type="password"/>
    \`
  })
}`,...(S=(P=u.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var k,V,A;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <CInput 
        style="max-width: 500px"
        v-model:value="value"
        :rows="5"
        placeholder="Description"
        type="textarea"/>
    \`
  })
}`,...(A=(V=i.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var D,E,O;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CInput
    },
    setup() {
      const value = ref('');
      const allowInput = (str: string) => !str || /^\\d+$/.test(str);
      return {
        value,
        allowInput
      };
    },
    template: \`
      <CInput 
        style="max-width: 500px"
        v-model:value="value"
        :rows="5"
        :allow-input="allowInput"
        placeholder="Numbers only"/>
    \`
  })
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const Ie=["Default","Size","Prefix","Suffix","Password","Textarea","AllowInput"];export{c as AllowInput,o as Default,u as Password,l as Prefix,s as Size,p as Suffix,i as Textarea,Ie as __namedExportsOrder,ge as default};
