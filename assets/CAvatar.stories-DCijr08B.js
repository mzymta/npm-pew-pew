import{C as e}from"./CAvatar-Bb1VByV2.js";import{C as J}from"./CIcon-BdIW6TD_.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./is-browser-DqcmxZSF.js";import"./Tag-C1qgvQqN.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./resolve-slot-BBjw-So6.js";import"./Close-MwAQiULY.js";import"./use-style-DC-6GAXR.js";import"./Icon-CrmNSR1a.js";import"./Close-DtvJwW5M.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./light-BLNTlX85.js";import"./index-Xn0jilRV.js";import"./use-css-vars-class-BoK1eXI1.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./VResizeObserver-DllAtjZA.js";import"./light-qvuNFt7m.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={title:"Components/Avatar",component:e,tags:["autodocs"],decorators:[s=>({components:{story:s},template:'<div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;"><story/></div>'})],argTypes:{default:{control:!1,description:"The content of the avatar."},name:{control:"text"},color:{control:"color"},intersectionObserverOptions:{control:!1},lazy:{control:!1},objectFit:{options:["fill","contain","cover","none","scale-down"]},renderFallback:{control:!1},renderPlaceholder:{control:!1}},parameters:{docs:{description:{component:"**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/avatar) but has additional property: `name`.**\n\n Component to display userpics."}}},render:s=>({components:{CAvatar:e},setup(){return{args:s}},template:`
      <CAvatar
        :name="args.name"
        :bordered="args.bordered"
        :color="args.color"
        :fallbackSrc="args.fallbackSrc"
        :imgProps="args.imgProps"
        :intersectionObserverOptions="args.intersectionObserverOptions"
        :lazy="args.lazy"
        :objectFit="args.objectFit"
        :renderFallback="args.renderFallback"
        :renderPlaceholder="args.renderPlaceholder"
        :round="args.round"
        :size="args.size"
        :src="args.src"
      />
    `})},r={args:{name:"John Doe",src:"https://picsum.photos/id/48/200/300",color:"#808f12",fallbackSrc:"https://picsum.photos/id/175/200/300"}},a={render:()=>({components:{CAvatar:e},template:`
      <CAvatar
        name="John Doe"
        color="#808f12"
        size="small" />
      <CAvatar
        name="John Doe"
        size="medium" />
      <CAvatar
        name="John Doe"
        size="large"/>
      <CAvatar
        name="John Doe"
        :size="100" />
    `})},n={render:()=>({components:{CAvatar:e},template:`
      <CAvatar
        name="Jesse James"
        round 
        size="small" />
      <CAvatar
        round 
        size="medium" />
      <CAvatar
        src="https://picsum.photos/id/370/200/300"
        round
        size="large" />
      <CAvatar
        name="Harry Potter"
        round
        :size="100" />
    `})},o={render:()=>({components:{CAvatar:e},template:`
      <CAvatar
        src="https://WRONG.URL"
        fallback-src="https://picsum.photos/id/173/200/300"
        round
        :size="200" />
    `})},t={render:()=>({components:{CAvatar:e,CIcon:J},template:`
      <CAvatar 
        size="large"
        name="Jesse James">
        <CIcon
          style="color: #d02f4f"
          :is-inline="true"
          name="checkmark-circle"></CIcon>
      </CAvatar>
    `})};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    src: 'https://picsum.photos/id/48/200/300',
    color: '#808f12',
    fallbackSrc: 'https://picsum.photos/id/175/200/300'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CAvatar
    },
    template: \`
      <CAvatar
        name="John Doe"
        color="#808f12"
        size="small" />
      <CAvatar
        name="John Doe"
        size="medium" />
      <CAvatar
        name="John Doe"
        size="large"/>
      <CAvatar
        name="John Doe"
        :size="100" />
    \`
  })
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CAvatar
    },
    template: \`
      <CAvatar
        name="Jesse James"
        round 
        size="small" />
      <CAvatar
        round 
        size="medium" />
      <CAvatar
        src="https://picsum.photos/id/370/200/300"
        round
        size="large" />
      <CAvatar
        name="Harry Potter"
        round
        :size="100" />
    \`
  })
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var C,g,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CAvatar
    },
    template: \`
      <CAvatar
        src="https://WRONG.URL"
        fallback-src="https://picsum.photos/id/173/200/300"
        round
        :size="200" />
    \`
  })
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var A,z,b;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CAvatar,
      CIcon
    },
    template: \`
      <CAvatar 
        size="large"
        name="Jesse James">
        <CIcon
          style="color: #d02f4f"
          :is-inline="true"
          name="checkmark-circle"></CIcon>
      </CAvatar>
    \`
  })
}`,...(b=(z=t.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};const K=["Default","Size","Shape","Fallback","Icon"];export{r as Default,o as Fallback,t as Icon,n as Shape,a as Size,K as __namedExportsOrder,B as default};
