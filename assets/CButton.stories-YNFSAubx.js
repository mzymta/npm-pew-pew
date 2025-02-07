import{f as Q}from"./index-BOnq2-IM.js";import{_ as t}from"./CButton-CYpEF-bO.js";import{C as n}from"./CIcon-BdIW6TD_.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./Button-CF0RFvFf.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./use-css-vars-class-BoK1eXI1.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ut={title:"Components/Button",component:t,tags:["autodocs"],decorators:[C=>({components:{story:C},template:'<div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap"><story/></div>'})],argTypes:{onClick:{control:!1},default:{control:!1},icon:{control:!1},attrType:{options:["button","submit","reset"]},color:{control:"color"},iconPlacement:{options:["left","right"]},renderIcon:{control:!1},size:{options:["tiny","small","medium","large"]},textColor:{control:"color"},type:{options:["default","tertiary","primary","success","info","warning","error"]},tag:{control:"text"}},parameters:{docs:{description:{component:`**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/button).**

`}}},render:C=>({components:{CButton:t,CIcon:n},setup(){return{args:C}},template:`
      <CButton
        :attr-type="args.attrType"
        :block="args.block"
        :bordered="args.bordered"
        :circle="args.circle"
        :color="args.color"
        :dashed="args.dashed"
        :disabled="args.disabled"
        :focusable="args.focusable"
        :ghost="args.ghost"
        :native-focus-behavior="args.nativeFocusBehavior"
        :icon-placement="args.iconPlacement"
        :keyboard="args.keyboard"
        :quaternary="args.quaternary"
        :loading="args.loading"
        :render-icon="args.renderIcon"
        :round="args.round"
        :secondary="args.secondary"
        :size="args.size"
        :strong="args.strong"
        :tertiary="args.tertiary"
        :text="args.text"
        :text-color="args.textColor"
        :type="args.type"
        :tag="args.tag"
        @click="args.onClick"
      >
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
        Edit
      </CButton>
      <CButton
        :attr-type="args.attrType"
        :block="args.block"
        :bordered="args.bordered"
        :circle="args.circle"
        :color="args.color"
        :dashed="args.dashed"
        :disabled="args.disabled"
        :focusable="args.focusable"
        :ghost="args.ghost"
        :native-focus-behavior="args.nativeFocusBehavior"
        :icon-placement="args.iconPlacement"
        :keyboard="args.keyboard"
        :quaternary="args.quaternary"
        :loading="args.loading"
        :render-icon="args.renderIcon"
        :round="args.round"
        :secondary="args.secondary"
        :size="args.size"
        :strong="args.strong"
        :tertiary="args.tertiary"
        :text="args.text"
        :text-color="args.textColor"
        :type="args.type"
        :tag="args.tag"
        @click="args.onClick"
      >
        Edit
      </CButton>
      <CButton
        :attr-type="args.attrType"
        :block="args.block"
        :bordered="args.bordered"
        :circle="args.circle"
        :color="args.color"
        :dashed="args.dashed"
        :disabled="args.disabled"
        :focusable="args.focusable"
        :ghost="args.ghost"
        :native-focus-behavior="args.nativeFocusBehavior"
        :icon-placement="args.iconPlacement"
        :keyboard="args.keyboard"
        :quaternary="args.quaternary"
        :loading="args.loading"
        :render-icon="args.renderIcon"
        :round="args.round"
        :secondary="args.secondary"
        :size="args.size"
        :strong="args.strong"
        :tertiary="args.tertiary"
        :text="args.text"
        :text-color="args.textColor"
        :type="args.type"
        :tag="args.tag"
        @click="args.onClick"
      >
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    `})},e={args:{type:"primary",onClick:Q()}},r={render:()=>({components:{CButton:t},template:`
      <CButton>Default</CButton>
      <CButton type="tertiary">
        Tertiary
      </CButton>
      <CButton type="primary">
        Primary
      </CButton>
      <CButton type="info">
        Info
      </CButton>
      <CButton type="success">
        Success
      </CButton>
      <CButton type="warning">
        Warning
      </CButton>
      <CButton type="error">
        Error
      </CButton>
    `})},o={render:()=>({components:{CButton:t,CIcon:n},template:`
      <CButton
        size="tiny"
        type="primary">Tiny</CButton>
      <CButton
        size="small"
        secondary
        type="primary">
        Small
      </CButton>
      <CButton
        size="medium"
        tertiary
        type="primary">
        Medium
      </CButton>
      <CButton
        size="large"
        ghost
        type="primary">
        Large
      </CButton>
      <CButton
        size="tiny"
        circle
        type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton
        size="small"
        secondary
        circle
        type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton
        size="medium"
        tertiary
        circle
        type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton
        size="large"
        ghost
        circle
        type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    `})},a={render:()=>({components:{CButton:t,CIcon:n},template:`
      <CButton secondary>
        Default
      </CButton>
      <CButton secondary type="tertiary">
        Tertiary
      </CButton>
      <CButton secondary type="primary">
        Primary
      </CButton>
      <CButton secondary type="info">
        Info
      </CButton>
      <CButton secondary type="success">
        Success
      </CButton>
      <CButton secondary type="warning">
        Warning
      </CButton>
      <CButton secondary type="error">
        Error
      </CButton>
      <CButton secondary round>
        Default
      </CButton>
      <CButton secondary round type="primary">
        Primary
      </CButton>
      <CButton secondary round type="info">
        Info
      </CButton>
      <CButton secondary round type="success">
        Success
      </CButton>
      <CButton secondary round type="warning">
        Warning
      </CButton>
      <CButton secondary round type="error">
        Error
      </CButton>
      <CButton secondary circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton secondary circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton secondary circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton secondary circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton secondary circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton secondary circle type="error">

        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    `})},i={render:()=>({components:{CButton:t,CIcon:n},template:`
      <CButton tertiary>
        Default
      </CButton>
      <CButton tertiary type="tertiary">
        Tertiary
      </CButton>
      <CButton tertiary type="primary">
        Primary
      </CButton>
      <CButton tertiary type="info">
        Info
      </CButton>
      <CButton tertiary type="success">
        Success
      </CButton>
      <CButton tertiary type="warning">
        Warning
      </CButton>
      <CButton tertiary type="error">
        Error
      </CButton>
      <CButton tertiary round>
        Default
      </CButton>
      <CButton tertiary round type="primary">
        Primary
      </CButton>
      <CButton tertiary round type="info">
        Info
      </CButton>
      <CButton tertiary round type="success">
        Success
      </CButton>
      <CButton tertiary round type="warning">
        Warning
      </CButton>
      <CButton tertiary round type="error">
        Error
      </CButton>
      <CButton tertiary circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton tertiary circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton tertiary circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton tertiary circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton tertiary circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton tertiary circle type="error">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    `})},u={render:()=>({components:{CButton:t,CIcon:n},template:`
      <CButton quaternary>
        Default
      </CButton>
      <CButton quaternary type="tertiary">
        Tertiary
      </CButton>
      <CButton quaternary type="primary">
        Primary
      </CButton>
      <CButton quaternary type="info">
        Info
      </CButton>
      <CButton quaternary type="success">
        Success
      </CButton>
      <CButton quaternary type="warning">
        Warning
      </CButton>
      <CButton quaternary type="error">
        Error
      </CButton>
      <CButton quaternary round>
        Default
      </CButton>
      <CButton quaternary round type="primary">
        Primary
      </CButton>
      <CButton quaternary round type="info">
        Info
      </CButton>
      <CButton quaternary round type="success">
        Success
      </CButton>
      <CButton quaternary round type="warning">
        Warning
      </CButton>
      <CButton quaternary round type="error">
        Error
      </CButton>
      <CButton quaternary circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton quaternary circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton quaternary circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton quaternary circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton quaternary circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton quaternary circle type="error">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    `})},c={render:()=>({components:{CButton:t,CIcon:n},template:`
      <CButton ghost>
        Default
      </CButton>
      <CButton ghost type="tertiary">
        Tertiary
      </CButton>
      <CButton ghost type="primary">
        Primary
      </CButton>
      <CButton ghost type="info">
        Info
      </CButton>
      <CButton ghost type="success">
        Success
      </CButton>
      <CButton ghost type="warning">
        Warning
      </CButton>
      <CButton ghost type="error">
        Error
      </CButton>
      <CButton ghost round>
        Default
      </CButton>
      <CButton ghost round type="primary">
        Primary
      </CButton>
      <CButton ghost round type="info">
        Info
      </CButton>
      <CButton ghost round type="success">
        Success
      </CButton>
      <CButton ghost round type="warning">
        Warning
      </CButton>
      <CButton ghost round type="error">
        Error
      </CButton>
      <CButton ghost circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton ghost circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton ghost circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton ghost circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton ghost circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton ghost circle type="error">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    `})},s={render:()=>({components:{CButton:t,CIcon:n},template:`
      <CButton dashed>
        Default
      </CButton>
      <CButton dashed type="tertiary">
        Tertiary
      </CButton>
      <CButton dashed type="primary">
        Primary
      </CButton>
      <CButton dashed type="info">
        Info
      </CButton>
      <CButton dashed type="success">
        Success
      </CButton>
      <CButton dashed type="warning">
        Warning
      </CButton>
      <CButton dashed type="error">
        Error
      </CButton>
      <CButton dashed round>
        Default
      </CButton>
      <CButton dashed round type="primary">
        Primary
      </CButton>
      <CButton dashed round type="info">
        Info
      </CButton>
      <CButton dashed round type="success">
        Success
      </CButton>
      <CButton dashed round type="warning">
        Warning
      </CButton>
      <CButton dashed round type="error">
        Error
      </CButton>
      <CButton dashed circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton dashed circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton dashed circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton dashed circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton dashed circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton dashed circle type="error">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    `})},p={render:()=>({components:{CButton:t,CIcon:n},template:`
      <CButton text>
        Default
      </CButton>
      <CButton text type="tertiary">
        Tertiary
      </CButton>
      <CButton text type="primary">
        Primary
      </CButton>
      <CButton text type="info">
        Info
      </CButton>
      <CButton text type="success">
        Success
      </CButton>
      <CButton text type="warning">
        Warning
      </CButton>
      <CButton text type="error">
        Error
      </CButton>
      <CButton text round>
        Default
      </CButton>
      <CButton text round type="primary">
        Primary
      </CButton>
      <CButton text round type="info">
        Info
      </CButton>
      <CButton text round type="success">
        Success
      </CButton>
      <CButton text round type="warning">
        Warning
      </CButton>
      <CButton text round type="error">
        Error
      </CButton>
      <CButton text circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton text circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton text circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton text circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton text circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton text circle type="error">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    `})};var l,B,y;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    onClick: fn()
  }
}`,...(y=(B=e.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CButton
    },
    template: \`
      <CButton>Default</CButton>
      <CButton type="tertiary">
        Tertiary
      </CButton>
      <CButton type="primary">
        Primary
      </CButton>
      <CButton type="info">
        Info
      </CButton>
      <CButton type="success">
        Success
      </CButton>
      <CButton type="warning">
        Warning
      </CButton>
      <CButton type="error">
        Error
      </CButton>
    \`
  })
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var I,f,h;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CButton,
      CIcon
    },
    template: \`
      <CButton
        size="tiny"
        type="primary">Tiny</CButton>
      <CButton
        size="small"
        secondary
        type="primary">
        Small
      </CButton>
      <CButton
        size="medium"
        tertiary
        type="primary">
        Medium
      </CButton>
      <CButton
        size="large"
        ghost
        type="primary">
        Large
      </CButton>
      <CButton
        size="tiny"
        circle
        type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton
        size="small"
        secondary
        circle
        type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton
        size="medium"
        tertiary
        circle
        type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton
        size="large"
        ghost
        circle
        type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    \`
  })
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,q,w;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CButton,
      CIcon
    },
    template: \`
      <CButton secondary>
        Default
      </CButton>
      <CButton secondary type="tertiary">
        Tertiary
      </CButton>
      <CButton secondary type="primary">
        Primary
      </CButton>
      <CButton secondary type="info">
        Info
      </CButton>
      <CButton secondary type="success">
        Success
      </CButton>
      <CButton secondary type="warning">
        Warning
      </CButton>
      <CButton secondary type="error">
        Error
      </CButton>
      <CButton secondary round>
        Default
      </CButton>
      <CButton secondary round type="primary">
        Primary
      </CButton>
      <CButton secondary round type="info">
        Info
      </CButton>
      <CButton secondary round type="success">
        Success
      </CButton>
      <CButton secondary round type="warning">
        Warning
      </CButton>
      <CButton secondary round type="error">
        Error
      </CButton>
      <CButton secondary circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton secondary circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton secondary circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton secondary circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton secondary circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton secondary circle type="error">

        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    \`
  })
}`,...(w=(q=a.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var S,b,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CButton,
      CIcon
    },
    template: \`
      <CButton tertiary>
        Default
      </CButton>
      <CButton tertiary type="tertiary">
        Tertiary
      </CButton>
      <CButton tertiary type="primary">
        Primary
      </CButton>
      <CButton tertiary type="info">
        Info
      </CButton>
      <CButton tertiary type="success">
        Success
      </CButton>
      <CButton tertiary type="warning">
        Warning
      </CButton>
      <CButton tertiary type="error">
        Error
      </CButton>
      <CButton tertiary round>
        Default
      </CButton>
      <CButton tertiary round type="primary">
        Primary
      </CButton>
      <CButton tertiary round type="info">
        Info
      </CButton>
      <CButton tertiary round type="success">
        Success
      </CButton>
      <CButton tertiary round type="warning">
        Warning
      </CButton>
      <CButton tertiary round type="error">
        Error
      </CButton>
      <CButton tertiary circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton tertiary circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton tertiary circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton tertiary circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton tertiary circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton tertiary circle type="error">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    \`
  })
}`,...(D=(b=i.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var P,E,W;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CButton,
      CIcon
    },
    template: \`
      <CButton quaternary>
        Default
      </CButton>
      <CButton quaternary type="tertiary">
        Tertiary
      </CButton>
      <CButton quaternary type="primary">
        Primary
      </CButton>
      <CButton quaternary type="info">
        Info
      </CButton>
      <CButton quaternary type="success">
        Success
      </CButton>
      <CButton quaternary type="warning">
        Warning
      </CButton>
      <CButton quaternary type="error">
        Error
      </CButton>
      <CButton quaternary round>
        Default
      </CButton>
      <CButton quaternary round type="primary">
        Primary
      </CButton>
      <CButton quaternary round type="info">
        Info
      </CButton>
      <CButton quaternary round type="success">
        Success
      </CButton>
      <CButton quaternary round type="warning">
        Warning
      </CButton>
      <CButton quaternary round type="error">
        Error
      </CButton>
      <CButton quaternary circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton quaternary circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton quaternary circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton quaternary circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton quaternary circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton quaternary circle type="error">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    \`
  })
}`,...(W=(E=u.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var z,T,k;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CButton,
      CIcon
    },
    template: \`
      <CButton ghost>
        Default
      </CButton>
      <CButton ghost type="tertiary">
        Tertiary
      </CButton>
      <CButton ghost type="primary">
        Primary
      </CButton>
      <CButton ghost type="info">
        Info
      </CButton>
      <CButton ghost type="success">
        Success
      </CButton>
      <CButton ghost type="warning">
        Warning
      </CButton>
      <CButton ghost type="error">
        Error
      </CButton>
      <CButton ghost round>
        Default
      </CButton>
      <CButton ghost round type="primary">
        Primary
      </CButton>
      <CButton ghost round type="info">
        Info
      </CButton>
      <CButton ghost round type="success">
        Success
      </CButton>
      <CButton ghost round type="warning">
        Warning
      </CButton>
      <CButton ghost round type="error">
        Error
      </CButton>
      <CButton ghost circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton ghost circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton ghost circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton ghost circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton ghost circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton ghost circle type="error">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    \`
  })
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var v,_,F;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CButton,
      CIcon
    },
    template: \`
      <CButton dashed>
        Default
      </CButton>
      <CButton dashed type="tertiary">
        Tertiary
      </CButton>
      <CButton dashed type="primary">
        Primary
      </CButton>
      <CButton dashed type="info">
        Info
      </CButton>
      <CButton dashed type="success">
        Success
      </CButton>
      <CButton dashed type="warning">
        Warning
      </CButton>
      <CButton dashed type="error">
        Error
      </CButton>
      <CButton dashed round>
        Default
      </CButton>
      <CButton dashed round type="primary">
        Primary
      </CButton>
      <CButton dashed round type="info">
        Info
      </CButton>
      <CButton dashed round type="success">
        Success
      </CButton>
      <CButton dashed round type="warning">
        Warning
      </CButton>
      <CButton dashed round type="error">
        Error
      </CButton>
      <CButton dashed circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton dashed circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton dashed circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton dashed circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton dashed circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton dashed circle type="error">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    \`
  })
}`,...(F=(_=s.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,G,L;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CButton,
      CIcon
    },
    template: \`
      <CButton text>
        Default
      </CButton>
      <CButton text type="tertiary">
        Tertiary
      </CButton>
      <CButton text type="primary">
        Primary
      </CButton>
      <CButton text type="info">
        Info
      </CButton>
      <CButton text type="success">
        Success
      </CButton>
      <CButton text type="warning">
        Warning
      </CButton>
      <CButton text type="error">
        Error
      </CButton>
      <CButton text round>
        Default
      </CButton>
      <CButton text round type="primary">
        Primary
      </CButton>
      <CButton text round type="info">
        Info
      </CButton>
      <CButton text round type="success">
        Success
      </CButton>
      <CButton text round type="warning">
        Warning
      </CButton>
      <CButton text round type="error">
        Error
      </CButton>
      <CButton text circle>
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton text circle type="primary">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton text circle type="info">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton text circle type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton text circle type="warning">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
      <CButton text circle type="error">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="pencil"
          />
        </template>
      </CButton>
    \`
  })
}`,...(L=(G=p.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const ct=["Default","Basic","Size","Secondary","Tertiary","Quaternary","Ghost","Dashed","Text"];export{r as Basic,s as Dashed,e as Default,c as Ghost,u as Quaternary,a as Secondary,o as Size,i as Tertiary,p as Text,ct as __namedExportsOrder,ut as default};
