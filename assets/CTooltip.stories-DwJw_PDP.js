import{_ as r}from"./CTooltip-CEaW1Ntp.js";import{_ as l}from"./CButton-CYpEF-bO.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./Tooltip-BYkYGbMt.js";import"./Popover-axeHrzq9.js";import"./index-CIE75m1q.js";import"./light-DsB5ODev.js";import"./delegate-AmuGJuoF.js";import"./toString-Vm_cEZ4d.js";import"./Follower-DXtmSYJu.js";import"./use-memo-CglecHn5.js";import"./cssr-ChHp6ynC.js";import"./utils-Dy8q55w_.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./light-BUP7UYSb.js";import"./use-css-vars-class-BoK1eXI1.js";import"./get-precise-event-target-DhO46Lpt.js";import"./resolve-slot-BBjw-So6.js";import"./index-Bg4fAuci.js";import"./index-L98eAIry.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./use-rtl-DB_faxJd.js";import"./index-Xn0jilRV.js";import"./light-RknvjviJ.js";import"./get-first-slot-vnode-BHWfc99-.js";import"./flatten-B94A2huW.js";import"./keep-B1eBS8j0.js";import"./use-merged-state-CUYpy2WA.js";import"./use-compitable-B7ANSQOo.js";import"./call-f2ri57Kd.js";import"./light-Lzn-IxFN.js";import"./Button-CF0RFvFf.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./color-to-class-B0iQgAn2.js";const Z={title:"Components/Tooltip",component:r,tags:["autodocs"],decorators:[e=>({components:{story:e},template:'<div style="display: flex; justify-content: center; gap: 50px; padding: 25px 0;"><story/></div>'})],argTypes:{trigger:{control:"select",options:["hover","click","focus","manual"]},placement:{options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"]},width:{control:"number"},default:{control:!1},footer:{control:!1},header:{control:!1}},parameters:{docs:{description:{component:`**Matches [Naive UI component](https://www.naiveui.com/en-US/os-theme/components/tooltip).**

 The component behaves like a popover but has a different look.`}}},render:e=>({components:{CTooltip:r,CButton:l},setup(){return{args:e}},template:`
      <CTooltip
        :trigger="args.trigger"
        :placement="args.placement"
        :duration="args.duration"
        :delay="args.delay"
        :disabled="args.disabled"
        :show="args.show"
        :show-arrow="args.showArrow"
      >
        <template #trigger>
          <CButton>
            Hover me
          </CButton>
        </template>
        This is my tooltip content
      </CTooltip>
    `})},t={args:{showArrow:!0,trigger:"hover"}},o={render:()=>({components:{CTooltip:r,CButton:l},setup(){},template:`
      <div style="display: flex; gap: 50px;">
        <CTooltip
          trigger="hover"
        >
          <template #trigger>
            <CButton>
              Hover me
            </CButton>
          </template>
          This is my tooltip content
        </CTooltip>
        <CTooltip
          trigger="click"
          placement="bottom"
        >
          <template #trigger>
            <CButton>
              Click me
            </CButton>
          </template>
          This is my tooltip content
        </CTooltip>
      </div>
    `})};var i,p,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    showArrow: true,
    trigger: 'hover'
  }
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var m,s,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CTooltip,
      CButton
    },
    setup() {},
    template: \`
      <div style="display: flex; gap: 50px;">
        <CTooltip
          trigger="hover"
        >
          <template #trigger>
            <CButton>
              Hover me
            </CButton>
          </template>
          This is my tooltip content
        </CTooltip>
        <CTooltip
          trigger="click"
          placement="bottom"
        >
          <template #trigger>
            <CButton>
              Click me
            </CButton>
          </template>
          This is my tooltip content
        </CTooltip>
      </div>
    \`
  })
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const tt=["Default","Trigger"];export{t as Default,o as Trigger,tt as __namedExportsOrder,Z as default};
