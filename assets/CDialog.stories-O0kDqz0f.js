import{r as p}from"./vue.esm-bundler-D4RNtN6S.js";import{f as o}from"./index-BOnq2-IM.js";import{C as t}from"./CDialog-Mu6wDJNg.js";import{_ as l}from"./CButton-CYpEF-bO.js";import"./CTile-Cv4kNu6I.js";import"./CSkeleton-BQgGCk3S.js";import"./CIcon-BdIW6TD_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CCloseButton-Cu-pxIpa.js";import"./CSpin-PilhVice.js";import"./fade-in.cssr-DJOFltAV.js";import"./light-DsB5ODev.js";import"./Loading-Ch5S3HjA.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./use-style-DC-6GAXR.js";import"./light-cVvDERhS.js";import"./index-Xn0jilRV.js";import"./use-css-vars-class-BoK1eXI1.js";import"./use-compitable-B7ANSQOo.js";import"./use-rtl-DB_faxJd.js";import"./resolve-slot-BBjw-So6.js";import"./call-f2ri57Kd.js";import"./light-Du_kP9Wc.js";import"./light-CaBpc4YN.js";import"./light-RknvjviJ.js";import"./Close-MwAQiULY.js";import"./Icon-CrmNSR1a.js";import"./Close-DtvJwW5M.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./keysOf-HiGXOwLp.js";import"./render-CafAiG2R.js";import"./Button-CF0RFvFf.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./color-to-class-B0iQgAn2.js";import"./Success-Dpq3D3vw.js";import"./Warning-Cd2ybYWr.js";import"./index-CIE75m1q.js";import"./delegate-AmuGJuoF.js";import"./get-first-slot-vnode-BHWfc99-.js";import"./flatten-B94A2huW.js";import"./Scrollbar-BbWWFAp8.js";import"./VResizeObserver-DllAtjZA.js";import"./get-precise-event-target-DhO46Lpt.js";import"./index-Bg4fAuci.js";import"./index-L98eAIry.js";import"./keep-B1eBS8j0.js";import"./fade-in-scale-up.cssr-DKJ6UU5J.js";import"./utils-Dy8q55w_.js";import"./index-DsSU6HIH.js";const co={title:"Components/Dialog",component:t,tags:["autodocs"],argTypes:{icon:{control:!1},title:{control:!1},default:{control:!1},actions:{control:!1},"negative-text":{control:!1},"positive-text":{control:!1},type:{options:["confirm","error","success","warning","info"]},iconName:{control:"text"},positiveHandler:{control:!1},negativeHandler:{control:!1},"onUpdate:isShown":{table:{disable:!0}},onClose:{table:{disable:!0}},onPositiveClick:{table:{disable:!0}},onNegativeClick:{table:{disable:!0}},onAfterLeave:{table:{disable:!0}}},parameters:{docs:{description:{component:"A versatile dialog component built on top of CModal, designed for confirmations, alerts, and custom interactions. It supports flexible slot-based rendering, customizable buttons, loading and processing states, and dynamic icons based on dialog type (e.g., success, error, warning, info)."}}},render:i=>({components:{CDialog:t,CButton:l},setup(){const n=p(!1);return{args:i,isDialogShown:n}},template:`
      <CButton @click="isDialogShown = !isDialogShown">Open Dialog</CButton>
      <CDialog
        v-model:is-shown="isDialogShown"
        :type="args.type"
        :has-negative="args.hasNegative"
        :has-positive="args.hasPositive"
        :is-loading="args.isLoading"
        :is-processing="args.isProcessing"
        :is-positive-processing="args.isPositiveProcessing"
        :is-negative-processing="args.isNegativeProcessing"
        :is-positive-disabled="args.isPositiveDisabled"
        :is-negative-disabled="args.isNegativeDisabled"
        :is-negative-disabled-when-positive-processing="args.isNegativeDisabledWhenPositiveProcessing"
        :icon-name="args.iconName"
        :positive-handler="args.positiveHandler"
        :negative-handler="args.negativeHandler"
        @update:is-shown="args['onUpdate:isShown']"
        @close="args.onClose"
        @positive-click="args.onPositiveClick"
        @negative-click="args.onNegativeClick"
        @after-leave="args.onAfterLeave"
      >
        <template #title>
          Dialog title
        </template>

        Dialog content here. Confirmation question or something else?
      </CDialog>
    `})},e={args:{type:"confirm",iconName:"alert-circle",positiveHandler:()=>new Promise(i=>{setTimeout(i,500)}),"onUpdate:isShown":o(),onClose:o(),onPositiveClick:o(),onNegativeClick:o(),onAfterLeave:o()}};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'confirm',
    iconName: 'alert-circle',
    positiveHandler: () => new Promise<void>(resolve => {
      setTimeout(resolve, 500);
    }),
    'onUpdate:isShown': fn(),
    onClose: fn(),
    onPositiveClick: fn(),
    onNegativeClick: fn(),
    onAfterLeave: fn()
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const go=["Default"];export{e as Default,go as __namedExportsOrder,co as default};
