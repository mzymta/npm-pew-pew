import{c as m}from"./vue.esm-bundler-D4RNtN6S.js";import{f as e}from"./index-BOnq2-IM.js";import{_ as r}from"./CDropdown-D6kB3pA2.js";import{_ as s}from"./CButton-CYpEF-bO.js";import{C as l}from"./CIcon-BdIW6TD_.js";import"./Dropdown-D7LC012C.js";import"./Popover-axeHrzq9.js";import"./index-CIE75m1q.js";import"./light-DsB5ODev.js";import"./delegate-AmuGJuoF.js";import"./toString-Vm_cEZ4d.js";import"./Follower-DXtmSYJu.js";import"./use-memo-CglecHn5.js";import"./cssr-ChHp6ynC.js";import"./utils-Dy8q55w_.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./light-BUP7UYSb.js";import"./use-css-vars-class-BoK1eXI1.js";import"./get-precise-event-target-DhO46Lpt.js";import"./resolve-slot-BBjw-So6.js";import"./index-Bg4fAuci.js";import"./index-L98eAIry.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./use-rtl-DB_faxJd.js";import"./index-Xn0jilRV.js";import"./light-RknvjviJ.js";import"./get-first-slot-vnode-BHWfc99-.js";import"./flatten-B94A2huW.js";import"./keep-B1eBS8j0.js";import"./use-merged-state-CUYpy2WA.js";import"./use-compitable-B7ANSQOo.js";import"./call-f2ri57Kd.js";import"./render-CafAiG2R.js";import"./light-CRxrqwBH.js";import"./happens-in-CM8LO42l.js";import"./fade-in-scale-up.cssr-DKJ6UU5J.js";import"./create-BYUmyaO5.js";import"./use-keyboard-D8ejRVqf.js";import"./create-ref-setter-C4J8sofl.js";import"./Button-CF0RFvFf.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./color-to-class-B0iQgAn2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const mo={title:"Components/Dropdown",component:r,tags:["autodocs"],decorators:[t=>({components:{story:t},template:'<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; align-items: center"><story/></div>'})],argTypes:{options:{control:!1},childrenField:{control:"text"},keyField:{control:"text"},labelField:{control:"text"},nodeProps:{control:!1},menuProps:{control:!1},renderIcon:{control:!1},renderLabel:{control:!1},renderOption:{control:!1},size:{options:["tiny","small","medium","large"]},onClickoutside:{table:{disable:!0}},onSelect:{table:{disable:!0}},trigger:{options:["click","hover","focus","manual"]},placement:{options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"]},default:{control:!1}},parameters:{docs:{description:{component:"**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/dropdown)**. In addition Popover props can be used."}}},render:t=>({components:{CDropdown:r,CButton:s,CIcon:l},setup(){const a=m(()=>[{label:"Jay Gatsby",key:"jay gatsby"},{label:"Daisy Buchanan",key:"daisy buchanan"},{label:"Nick Carraway",key:"nick carraway"},{label:"food",key:"food",children:[{label:"chicken",key:"chicken"},{label:"beef",key:"beef"}]}]);return{args:t,options:a}},template:`
      <CDropdown
        :options="options"
      >
        <CButton style="max-width: 200px">
          <template #icon>
            <CIcon
              :is-inline="true"
              name="ellipsis-horizontal"
            />
          </template>
        </CButton>
      </CDropdown>
    `})},o={args:{onClickoutside:e(),onSelect:e()}};var i,p,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    onClickoutside: fn(),
    onSelect: fn()
  }
}`,...(n=(p=o.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const so=["Default"];export{o as Default,so as __namedExportsOrder,mo as default};
