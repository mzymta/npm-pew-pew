import{r as p}from"./vue.esm-bundler-D4RNtN6S.js";import{_ as r}from"./CDatePicker-sObQRYSJ.js";import"./DatePicker-DEQ4QxIL.js";import"./light-DsB5ODev.js";import"./enUS-CW6P5ZC_.js";import"./use-keyboard-D8ejRVqf.js";import"./utils-Dy8q55w_.js";import"./delegate-AmuGJuoF.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./use-rtl-DB_faxJd.js";import"./index-Xn0jilRV.js";import"./use-css-vars-class-BoK1eXI1.js";import"./light-RknvjviJ.js";import"./get-precise-event-target-DhO46Lpt.js";import"./FocusDetector-Cm4LEqMh.js";import"./use-memo-CglecHn5.js";import"./cssr-ChHp6ynC.js";import"./Follower-DXtmSYJu.js";import"./index-CIE75m1q.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./Button-CF0RFvFf.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./use-locale-CfrJhm3r.js";import"./Forward-CyX9KY7E.js";import"./Input-DEy15p9s.js";import"./Suffix-BjoWbega.js";import"./Icon-CrmNSR1a.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./light-3lQabVNk.js";import"./use-merged-state-CUYpy2WA.js";import"./fade-in-scale-up.cssr-DKJ6UU5J.js";import"./light-BOGBRVgS.js";import"./index-DsSU6HIH.js";import"./happens-in-CM8LO42l.js";const et={title:"Components/DatePicker",component:r,tags:["autodocs"],decorators:[e=>({components:{story:e},template:'<div style="max-width: 500px"><story/></div>'})],argTypes:{slot:{table:{disable:!0}},type:{options:["date","datetime","datetimerange","month","monthrange","year","yearrange","quarter","quarterrange","week"]},format:{control:"text"},size:{options:["small","medium","large"]},placement:{options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"]},firstDayOfWeek:{options:[0,1,2,3,4,5,6]}},parameters:{docs:{description:{component:"**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/date-picker).** But for date range please use DateRangePicker component. Not all the properties, events, slots are listed below so please refer to Naive UI documentation."}}},render:e=>({components:{CDatePicker:r},setup(){const m=p(null);return{args:e,date:m}},template:`
      <CDatePicker
        v-model:value="date"
        :format="args.format"
        :clearable="args.clearable"
        :disabled="args.disabled"
        :size="args.size"
        :placement="args.placement"
        :firstDayOfWeek="args.firstDayOfWeek"
        :panel="args.panel"
        :type="args.type"/>
      <div style="margin-top: 12px">Value: {{ date ?? 'null' }}</div>
    `})},t={args:{type:"date",size:"medium",format:"d MMM yyyy"}};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'date',
    size: 'medium',
    format: 'd MMM yyyy'
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const rt=["Default"];export{t as Default,rt as __namedExportsOrder,et as default};
