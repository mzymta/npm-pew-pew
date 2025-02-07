import{r as p}from"./vue.esm-bundler-D4RNtN6S.js";import{f as r}from"./index-BOnq2-IM.js";import{C as o}from"./CKeyValueInput-XMtovjCR.js";import"./CButton-CYpEF-bO.js";import"./Button-CF0RFvFf.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./use-css-vars-class-BoK1eXI1.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./CFormField-BTZO6Pfe.js";import"./CCollapseTransition-Dr-u_SKe.js";import"./fade-in-height-expand.cssr-BiZZSMP_.js";import"./light-C7NmY139.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CIcon-BdIW6TD_.js";import"./CInput-JyLJ_8RY.js";import"./Input-DEy15p9s.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./index-Xn0jilRV.js";import"./delegate-AmuGJuoF.js";import"./light-RknvjviJ.js";import"./get-precise-event-target-DhO46Lpt.js";import"./Suffix-BjoWbega.js";import"./Icon-CrmNSR1a.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./light-3lQabVNk.js";import"./use-locale-CfrJhm3r.js";import"./enUS-CW6P5ZC_.js";import"./use-merged-state-CUYpy2WA.js";const $={title:"Components/KeyValueInput",component:o,tags:["autodocs"],decorators:[t=>({components:{story:t},template:'<div style="max-width: 600px"><story/></div>'})],argTypes:{"key-error":{control:!1,description:"Errors slot for key."},"value-error":{control:!1,description:"Errors slot for value."},item:{control:!1},id:{control:"text"},index:{control:"number"},keyLabel:{control:"text"},valueLabel:{control:"text"},onDelete:{table:{disable:!0}},"onUpdate:item":{table:{disable:!0}}},parameters:{docs:{description:{component:"A component for rendering key-value pairs with customizable input fields. It allows inline editing of keys and values, supports validation, and includes optional delete functionality. Ideal for managing metadata or other key-value pairs with error handling, tooltips, and labels. Used in KeyValueListInput."}}},render:t=>({components:{CKeyValueInput:o},setup(){const l=p({key:"",value:""});return{args:t,item:l,fn:r}},template:`
      <CKeyValueInput
        :id="args.id"
        v-model:item="item"
        :index="args.index"
        :has-key-error="args.hasKeyError"
        :has-value-error="args.hasValueError"
        :is-disabled="args.isDisabled"
        :key-label="args.keyLabel"
        :value-label="args.valueLabel"
        :has-labels="args.hasLabels"
        :has-delete="args.hasDelete"
        @update:item="args['onUpdate:item']"
        @delete="args.onDelete"
      >
        <template #key-error>
          Key has error
        </template>
        <template #value-error>
          Value has error
        </template>
      </CKeyValueInput>
    `})},e={args:{id:"data",hasDelete:!1,index:void 0,onDelete:r(),"onUpdate:item":r()}};var a,i,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    id: 'data',
    hasDelete: false,
    index: undefined,
    onDelete: fn(),
    'onUpdate:item': fn()
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const ee=["Default"];export{e as Default,ee as __namedExportsOrder,$ as default};
