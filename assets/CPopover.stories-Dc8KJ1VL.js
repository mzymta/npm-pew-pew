import{f as n}from"./index-BOnq2-IM.js";import{_ as e}from"./CPopover-Ckywkf40.js";import{_ as l}from"./CButton-CYpEF-bO.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./Popover-axeHrzq9.js";import"./index-CIE75m1q.js";import"./light-DsB5ODev.js";import"./delegate-AmuGJuoF.js";import"./toString-Vm_cEZ4d.js";import"./Follower-DXtmSYJu.js";import"./use-memo-CglecHn5.js";import"./cssr-ChHp6ynC.js";import"./utils-Dy8q55w_.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./light-BUP7UYSb.js";import"./use-css-vars-class-BoK1eXI1.js";import"./get-precise-event-target-DhO46Lpt.js";import"./resolve-slot-BBjw-So6.js";import"./index-Bg4fAuci.js";import"./index-L98eAIry.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./use-rtl-DB_faxJd.js";import"./index-Xn0jilRV.js";import"./light-RknvjviJ.js";import"./get-first-slot-vnode-BHWfc99-.js";import"./flatten-B94A2huW.js";import"./keep-B1eBS8j0.js";import"./use-merged-state-CUYpy2WA.js";import"./use-compitable-B7ANSQOo.js";import"./call-f2ri57Kd.js";import"./Button-CF0RFvFf.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./color-to-class-B0iQgAn2.js";const Z={title:"Components/Popover",component:e,tags:["autodocs"],decorators:[t=>({components:{story:t},template:'<div style="display: flex; justify-content: center; gap: 50px; padding: 25px 0;"><story/></div>'})],argTypes:{trigger:{options:["click","hover","focus"],description:"Trigger action for the popover to open.",defaultValue:"hover"},placement:{options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],description:"Position of the popover relative to the target element.",defaultValue:"top"},width:{control:"number"},"onUpdate:show":{table:{disable:!0}},default:{control:!1},footer:{control:!1},header:{control:!1}},parameters:{docs:{description:{component:`**Matches [Naive UI component](https://www.naiveui.com/en-US/os-theme/components/popover).**

 The component pops a some hidden messages around content.`}}},render:t=>({components:{CPopover:e,CButton:l},setup(){return{args:t}},template:`
      <CPopover
        :trigger="args.trigger"
        :placement="args.placement"
        :duration="args.duration"
        :delay="args.delay"
        :disabled="args.disabled"
        :show="args.show"
        :show-arrow="args.showArrow"
        :width="args.width"
        @clickoutside="args.onClickoutside"
        @update:show="args['onUpdate:show']"
      >
        <template #trigger>
          <CButton>Hover me</CButton>
        </template>
        This is my popover content
      </CPopover>
    `})},o={args:{trigger:"hover",onClickoutside:n(),"onUpdate:show":n()}},r={render:t=>({components:{CPopover:e,CButton:l},setup(){return{args:t}},template:`
      <CPopover
        trigger="hover"
        placement="top"
        :duration="args.duration"
        :delay="args.delay"
        :disabled="args.disabled"
        :show-arrow="args.showArrow"
        :width="args.width"
      >
        <template #trigger>
          <CButton>
            Hover me
          </CButton>
        </template>
        This is my tooltip content
      </CPopover>
      <CPopover
        trigger="click"
        placement="bottom"
        :duration="args.duration"
        :delay="args.delay"
        :disabled="args.disabled"
        :show="args.show"
        :show-arrow="args.showArrow"
        :width="args.width"
      >
        <template #trigger>
          <CButton>
            Click me
          </CButton>
        </template>
        This is my tooltip content
      </CPopover>
    `})};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    trigger: 'hover',
    onClickoutside: fn(),
    'onUpdate:show': fn()
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CPopover,
      CButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CPopover
        trigger="hover"
        placement="top"
        :duration="args.duration"
        :delay="args.delay"
        :disabled="args.disabled"
        :show-arrow="args.showArrow"
        :width="args.width"
      >
        <template #trigger>
          <CButton>
            Hover me
          </CButton>
        </template>
        This is my tooltip content
      </CPopover>
      <CPopover
        trigger="click"
        placement="bottom"
        :duration="args.duration"
        :delay="args.delay"
        :disabled="args.disabled"
        :show="args.show"
        :show-arrow="args.showArrow"
        :width="args.width"
      >
        <template #trigger>
          <CButton>
            Click me
          </CButton>
        </template>
        This is my tooltip content
      </CPopover>
    \`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const tt=["Default","Trigger"];export{o as Default,r as Trigger,tt as __namedExportsOrder,Z as default};
