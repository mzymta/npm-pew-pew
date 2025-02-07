import{f as C}from"./index-BOnq2-IM.js";import{C as M}from"./CIcon-BdIW6TD_.js";import{_ as n}from"./CTag-C5BDAZge.js";import{C as U}from"./CAvatar-Bb1VByV2.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tag-C1qgvQqN.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./resolve-slot-BBjw-So6.js";import"./Close-MwAQiULY.js";import"./use-style-DC-6GAXR.js";import"./Icon-CrmNSR1a.js";import"./Close-DtvJwW5M.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./light-BLNTlX85.js";import"./index-Xn0jilRV.js";import"./use-css-vars-class-BoK1eXI1.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./is-browser-DqcmxZSF.js";import"./VResizeObserver-DllAtjZA.js";import"./light-qvuNFt7m.js";const pe={title:"Components/Tag",component:n,tags:["autodocs"],decorators:[e=>({components:{story:e},template:'<div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;"><story/></div>'})],argTypes:{default:{control:!1,description:"The content of the tag."},avatar:{control:!1,description:"Tag's avatar"},onClose:{table:{disable:!0}},"onUpdate:checked":{table:{disable:!0}},icon:{control:!1,description:"Tag's icon"},size:{options:["tiny","small","medium","large"]},type:{options:["default","primary","info","warning","success","error"]}},parameters:{docs:{description:{component:"**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/tag)** Component to show attributes eye catchy way."}}},render:e=>({components:{CTag:n},setup(){return{args:e}},template:`
      <CTag
        :bordered="args.bordered"
        :checkable="args.checkable"
        :checked="args.checked"
        :closable="args.closable"
        :color="args.color"
        :disabled="args.disabled"
        :round="args.round"
        :size="args.size"
        :strong="args.strong"
        :triggerClickOnClose="args.triggerClickOnClose"
        :type="args.type"
      >
        Tag Content
      </CTag>
    `})},r={args:{type:"primary"}},s={render:()=>({components:{CTag:n},template:`
      <CTag>Default</CTag>
      <CTag type="success">
        Success
      </CTag>
      <CTag type="warning">
        Warning
      </CTag>
      <CTag type="error">
        Error
      </CTag>
      <CTag type="info">
        Info
      </CTag>
      <CTag type="primary">
        Primary
      </CTag>
    `})},o={render:()=>({components:{CTag:n},template:`
      <CTag :bordered="false">
        Default
      </CTag>
      <CTag :bordered="false" type="success">
        Success
      </CTag>
      <CTag :bordered="false" type="warning">
        Warning
      </CTag>
      <CTag :bordered="false" type="error">
        Error
      </CTag>
      <CTag :bordered="false" type="info">
        Info
      </CTag>
      <CTag :bordered="false" type="primary">
        Primary
      </CTag>
    `})},t={render:e=>({components:{CTag:n},setup(){const a=C();return{args:e,onClose:a}},template:`
      <CTag 
        closable
        type="success"
        size="small"
        :bordered="false"
        @close="onClose">
        Small
      </CTag>
      <CTag 
        closable
        type="warning"
        
        @close="onClose">
        Medium
      </CTag>
      <CTag 
        closable
        type="primary"
        size="large"
        @close="onClose">
        Large
      </CTag>
    `})},l={render:()=>({components:{CTag:n},template:`
      <CTag 
        type="success"
        size="small"
        round
        :bordered="false">
        Success
      </CTag>
      <CTag 
        type="warning"
        round>
        Warning
      </CTag>
      <CTag 
        type="error"
        round
        size="large"
        :bordered="false">
        Error
      </CTag>
    `})},c={render:e=>({components:{CTag:n},setup(){const a=C();return{args:e,onClose:a}},template:`
      <CTag 
        :closable="true"
        :disabled="true"
        @close="onClose">Default</CTag>
      <CTag
        :closable="true"
        type="success"
        :disabled="true"
        @close="onClose">
        Success
      </CTag>
      <CTag
        :closable="true"
        type="warning"
        :disabled="true"
        @close="onClose">
        Warning
      </CTag>
      <CTag
        :closable="true"
        type="error"
        :disabled="true"
        @close="onClose">
        Error
      </CTag>
      <CTag
        :closable="true"
        type="info"
        :disabled="true"
        @close="onClose">
        Info
      </CTag>
      <CTag
        :closable="true"
        type="primary"
        :disabled="true"
        @close="onClose">
        Info
      </CTag>
    `})},p={render:e=>({components:{CTag:n,CAvatar:U},setup(){const a=C();return{args:e,onClose:a}},template:`
      <CTag 
        :closable="true"
        type="primary"
        @close="onClose">
        <template #avatar>
          <CAvatar
            name="Jesse James"
            round
            size="small" />
        </template>
        Jesse James
      </CTag>
      <CTag
        :closable="true"
        type="info"
        :bordered="false"
        @close="onClose">
        <template #avatar>
          <CAvatar
            src="https://picsum.photos/id/370/200/300"
            size="large" />
        </template>
        Another Tag
      </CTag>
      <CTag
        :closable="true"
        type="success"
        :bordered="false"
        round
        @close="onClose">
        <template #avatar>
          <CAvatar
            src="https://picsum.photos/id/371/200/300"
            round
            size="large" />
        </template>
        One more
      </CTag>
    `})},g={render:()=>({components:{CTag:n,CIcon:M},template:`
      <CTag type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="checkmark-circle"
          />
        </template>
        Checked
      </CTag>
      <CTag
        type="error"
        round
        :bordered="false">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="close-circle"
          />
        </template>
        Error
      </CTag>
    `})};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'primary'
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var T,u,y;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CTag
    },
    template: \`
      <CTag>Default</CTag>
      <CTag type="success">
        Success
      </CTag>
      <CTag type="warning">
        Warning
      </CTag>
      <CTag type="error">
        Error
      </CTag>
      <CTag type="info">
        Info
      </CTag>
      <CTag type="primary">
        Primary
      </CTag>
    \`
  })
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,f,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CTag
    },
    template: \`
      <CTag :bordered="false">
        Default
      </CTag>
      <CTag :bordered="false" type="success">
        Success
      </CTag>
      <CTag :bordered="false" type="warning">
        Warning
      </CTag>
      <CTag :bordered="false" type="error">
        Error
      </CTag>
      <CTag :bordered="false" type="info">
        Info
      </CTag>
      <CTag :bordered="false" type="primary">
        Primary
      </CTag>
    \`
  })
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,v,z;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CTag
    },
    setup() {
      const onClose = fn();
      return {
        args,
        onClose
      };
    },
    template: \`
      <CTag 
        closable
        type="success"
        size="small"
        :bordered="false"
        @close="onClose">
        Small
      </CTag>
      <CTag 
        closable
        type="warning"
        
        @close="onClose">
        Medium
      </CTag>
      <CTag 
        closable
        type="primary"
        size="large"
        @close="onClose">
        Large
      </CTag>
    \`
  })
}`,...(z=(v=t.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var w,I,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CTag
    },
    template: \`
      <CTag 
        type="success"
        size="small"
        round
        :bordered="false">
        Success
      </CTag>
      <CTag 
        type="warning"
        round>
        Warning
      </CTag>
      <CTag 
        type="error"
        round
        size="large"
        :bordered="false">
        Error
      </CTag>
    \`
  })
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var A,E,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CTag
    },
    setup() {
      const onClose = fn();
      return {
        args,
        onClose
      };
    },
    template: \`
      <CTag 
        :closable="true"
        :disabled="true"
        @close="onClose">Default</CTag>
      <CTag
        :closable="true"
        type="success"
        :disabled="true"
        @close="onClose">
        Success
      </CTag>
      <CTag
        :closable="true"
        type="warning"
        :disabled="true"
        @close="onClose">
        Warning
      </CTag>
      <CTag
        :closable="true"
        type="error"
        :disabled="true"
        @close="onClose">
        Error
      </CTag>
      <CTag
        :closable="true"
        type="info"
        :disabled="true"
        @close="onClose">
        Info
      </CTag>
      <CTag
        :closable="true"
        type="primary"
        :disabled="true"
        @close="onClose">
        Info
      </CTag>
    \`
  })
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var J,W,x;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CTag,
      CAvatar
    },
    setup() {
      const onClose = fn();
      return {
        args,
        onClose
      };
    },
    template: \`
      <CTag 
        :closable="true"
        type="primary"
        @close="onClose">
        <template #avatar>
          <CAvatar
            name="Jesse James"
            round
            size="small" />
        </template>
        Jesse James
      </CTag>
      <CTag
        :closable="true"
        type="info"
        :bordered="false"
        @close="onClose">
        <template #avatar>
          <CAvatar
            src="https://picsum.photos/id/370/200/300"
            size="large" />
        </template>
        Another Tag
      </CTag>
      <CTag
        :closable="true"
        type="success"
        :bordered="false"
        round
        @close="onClose">
        <template #avatar>
          <CAvatar
            src="https://picsum.photos/id/371/200/300"
            round
            size="large" />
        </template>
        One more
      </CTag>
    \`
  })
}`,...(x=(W=p.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var O,_,P;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CTag,
      CIcon
    },
    template: \`
      <CTag type="success">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="checkmark-circle"
          />
        </template>
        Checked
      </CTag>
      <CTag
        type="error"
        round
        :bordered="false">
        <template #icon>
          <CIcon
            :is-inline="true"
            name="close-circle"
          />
        </template>
        Error
      </CTag>
    \`
  })
}`,...(P=(_=g.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const ge=["Default","Type","Borderless","Size","Shape","Disabled","Avatar","Icon"];export{p as Avatar,o as Borderless,r as Default,c as Disabled,g as Icon,l as Shape,t as Size,s as Type,ge as __namedExportsOrder,pe as default};
