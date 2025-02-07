import{r as a}from"./vue.esm-bundler-D4RNtN6S.js";import{_ as o}from"./CCollapseTransition-Dr-u_SKe.js";import{C as m}from"./CTile-Cv4kNu6I.js";import{C as p}from"./CSwitch-CEIieuS2.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./fade-in-height-expand.cssr-BiZZSMP_.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./light-C7NmY139.js";import"./use-css-vars-class-BoK1eXI1.js";import"./CSkeleton-BQgGCk3S.js";import"./CIcon-BdIW6TD_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CCloseButton-Cu-pxIpa.js";import"./CButton-CYpEF-bO.js";import"./Button-CF0RFvFf.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./use-style-DC-6GAXR.js";import"./Loading-Ch5S3HjA.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./CSpin-PilhVice.js";import"./fade-in.cssr-DJOFltAV.js";import"./light-cVvDERhS.js";import"./index-Xn0jilRV.js";import"./use-compitable-B7ANSQOo.js";import"./light-CsUjX7R1.js";import"./use-merged-state-CUYpy2WA.js";const L={title:"Components/CollapseTransition",component:o,tags:["autodocs"],decorators:[t=>({components:{story:t},template:'<div style="max-width: 600px"><story/></div>'})],argTypes:{show:{control:!1},default:{control:!1}},parameters:{docs:{description:{component:`**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/collapse-transition).**

`}}},render:t=>({components:{CCollapseTransition:o,CTile:m,CSwitch:p},setup(){const n=a(!0);return{args:t,isShown:n}},template:`
        <CSwitch
          size="large"
          v-model:value="isShown">
          <template #checked>
            Show
          </template>
          <template #unchecked>
            Hide
          </template>
        </CSwitch>


        <CCollapseTransition
          style="margin-top: 12px;"
          :show="isShown"
          :appear="args.appear"
        >
          <CTile>
            The quick brown fox jumps over the lazy dog near the bank of the river. Brightly colored zebras wander aimlessly, singing loudly to the rhythm of an invisible drummer. Clouds drift effortlessly across the sky, carrying with them the dreams of small children playing in fields of green. Spoons and forks hold secret meetings at midnight, plotting their next big adventure in the kitchen.
            Underneath the old oak tree, whispers of forgotten stories mingle with the rustling leaves. The sun sets in the east, casting long shadows that dance on the walls of ancient castles. Fish swim through the air, their scales shimmering in the moonlight, while birds dive into the depths of the ocean, seeking treasures hidden in the coral reefs.
          </CTile>
        </CCollapseTransition>
    `})},e={args:{show:!0}};var r,i,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    show: true
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,L as default};
