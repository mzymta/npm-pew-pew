import{f as i}from"./index-BOnq2-IM.js";import{C as e}from"./CResult-MrD3cUfM.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./CIcon-BdIW6TD_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CButton-CYpEF-bO.js";import"./Button-CF0RFvFf.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./use-css-vars-class-BoK1eXI1.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";const K={title:"Components/Result",component:e,tags:["autodocs"],decorators:[a=>({components:{story:a},template:'<div style="display: flex; justify-content: center;"><story/></div>'})],argTypes:{type:{options:["empty","success","error","warning","info"]},size:{options:["tiny","small","medium","large"]},maxWidth:{control:"number"},title:{control:!1},default:{control:!1,description:"Slot for unspecified content."},actions:{control:!1,description:"Slot for action buttons."},"positive-text":{control:!1,description:"Slot for positive action section."},"negative-text":{control:!1,description:"Slot for negative action section."},onPositiveClick:{table:{disable:!0}},onNegativeClick:{table:{disable:!0}}},parameters:{docs:{description:{component:"CResult is for showing a results summary e.g. an empty or error state."}}},render:a=>({components:{CResult:e},setup(){return{args:a}},template:`
      <CResult
        :type="args.type"
        :size="args.size"
        :max-width="args.maxWidth"
        :icon-name="args.iconName"
        :has-negative="args.hasNegative"
        :has-content="args.hasContent"
        :has-title="args.hasTitle"
        @positive-click="args.onPositiveClick"
        @negative-click="args.onNegativeClick"
      >
        <template #title>
          Result Title
        </template>
        
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
        
        <template #positive-text>
          Retry
        </template>
      </CResult>
    `})},t={args:{type:"info",maxWidth:400,onPositiveClick:i(),onNegativeClick:i()}},n={render:()=>({components:{CResult:e},template:`
      <CResult
        type="empty"
      />
    `})},r={render:()=>({components:{CResult:e},template:`
      <CResult
        type="success"
      >
        <template #title>
          Success
        </template>
      </CResult>
    `})},o={render:()=>({components:{CResult:e},template:`
      <CResult
        type="warning"
      >
        <template #title>
          Warning
        </template>

        <p>
          This warning may require your attention.
        </p>
      </CResult>
    `})},s={render:()=>({components:{CResult:e},template:`
      <CResult
        type="error"
      />
    `})};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'info',
    maxWidth: 400,
    onPositiveClick: fn(),
    onNegativeClick: fn()
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CResult
    },
    template: \`
      <CResult
        type="empty"
      />
    \`
  })
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,y,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CResult
    },
    template: \`
      <CResult
        type="success"
      >
        <template #title>
          Success
        </template>
      </CResult>
    \`
  })
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,R,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CResult
    },
    template: \`
      <CResult
        type="warning"
      >
        <template #title>
          Warning
        </template>

        <p>
          This warning may require your attention.
        </p>
      </CResult>
    \`
  })
}`,...(v=(R=o.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var h,S,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CResult
    },
    template: \`
      <CResult
        type="error"
      />
    \`
  })
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const M=["Default","Empty","Success","Warning","Error"];export{t as Default,n as Empty,s as Error,r as Success,o as Warning,M as __namedExportsOrder,K as default};
