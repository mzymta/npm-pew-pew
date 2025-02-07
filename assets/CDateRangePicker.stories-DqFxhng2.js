import{d as h,r as p,v as b,D as v,E as k,z as D,A as P,x as O,y as M,m as w}from"./vue.esm-bundler-D4RNtN6S.js";import{f as E}from"./index-BOnq2-IM.js";import{N as V}from"./DatePicker-DEQ4QxIL.js";import"./light-DsB5ODev.js";import"./enUS-CW6P5ZC_.js";import"./use-keyboard-D8ejRVqf.js";import"./utils-Dy8q55w_.js";import"./delegate-AmuGJuoF.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./use-rtl-DB_faxJd.js";import"./index-Xn0jilRV.js";import"./use-css-vars-class-BoK1eXI1.js";import"./light-RknvjviJ.js";import"./get-precise-event-target-DhO46Lpt.js";import"./FocusDetector-Cm4LEqMh.js";import"./use-memo-CglecHn5.js";import"./cssr-ChHp6ynC.js";import"./Follower-DXtmSYJu.js";import"./index-CIE75m1q.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./Button-CF0RFvFf.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./use-locale-CfrJhm3r.js";import"./Forward-CyX9KY7E.js";import"./Input-DEy15p9s.js";import"./Suffix-BjoWbega.js";import"./Icon-CrmNSR1a.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./light-3lQabVNk.js";import"./use-merged-state-CUYpy2WA.js";import"./fade-in-scale-up.cssr-DKJ6UU5J.js";import"./light-BOGBRVgS.js";import"./index-DsSU6HIH.js";import"./happens-in-CM8LO42l.js";const l=h({__name:"CDateRangePicker",props:{value:{},format:{default:"yyyy-MM-dd"},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:"medium"},placement:{default:"bottom-start"},firstDayOfWeek:{default:void 0},panel:{type:Boolean,default:!1},rangeEndMode:{default:"endOfDay"},startPlaceholder:{default:void 0},endPlaceholder:{default:void 0}},emits:["update:value"],setup(a,{expose:n,emit:u}){const f=a,o=u;function c(e){return e+864e5-1}function y(e){if(e===null||f.rangeEndMode==="startOfDay"){o("update:value",e);return}o("update:value",[e[0],c(e[1])])}const r=p(null);return n({focus:()=>{var e;return(e=r.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=r.value)==null?void 0:e.blur()}}),(e,g)=>(O(),b(P(V),D({ref_key:"datepicker",ref:r,class:"c-date-range-picker",type:"daterange"},e.$attrs,{value:e.value,format:e.format,clearable:e.clearable,disabled:e.disabled,size:e.size,placement:e.placement,"first-day-of-week":e.firstDayOfWeek,panel:e.panel,"start-placeholder":e.startPlaceholder,"end-placeholder":e.endPlaceholder,"onUpdate:value":y}),v({_:2},[k(Object.keys(e.$slots),s=>({name:s,fn:M(()=>[w(e.$slots,s)])}))]),1040,["value","format","clearable","disabled","size","placement","first-day-of-week","panel","start-placeholder","end-placeholder"]))}});l.__docgenInfo={exportName:"default",displayName:"CDateRangePicker",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],props:[{name:"value",description:"Value of the input.",required:!0,type:{name:"union",elements:[{name:"tuple",elements:[{name:"number"},{name:"number"}]},{name:"null"}]}},{name:"format",description:"Format of the input. For detail please see: https://date-fns.org/v2.23.0/docs/format",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"'yyyy-MM-dd'"}},{name:"clearable",description:"Whether the range picker is clearable.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Whether the date picker is disabled.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Size of the date picker.",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"placement",description:"Panel's placement.",required:!1,type:{name:"union",elements:[{name:'"top-start"'},{name:'"top"'},{name:'"top-end"'},{name:'"right-start"'},{name:'"right"'},{name:'"right-end"'},{name:'"bottom-start"'},{name:'"bottom"'},{name:'"bottom-end"'},{name:'"left-start"'},{name:'"left"'},{name:'"left-end"'}]},defaultValue:{func:!1,value:"'bottom-start'"}},{name:"firstDayOfWeek",description:"The first day of a week on calendar, 0 means Monday.",required:!1,type:{name:"union",elements:[{name:"0"},{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"}]},defaultValue:{func:!1,value:"undefined"}},{name:"panel",description:"Whether to use date-picker as panel.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rangeEndMode",description:"Determines the boundary of the end date in the date range",required:!1,type:{name:"union",elements:[{name:'"startOfDay"'},{name:'"endOfDay"'}]},defaultValue:{func:!1,value:"'endOfDay'"}},{name:"startPlaceholder",description:"Placeholder of start date input",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"endPlaceholder",description:"Placeholder of end date input",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"type",defaultValue:{func:!1,value:"'date'"}}],events:[{name:"update:value",type:{names:["union"],elements:[{name:"tuple",elements:[{name:"number"},{name:"number"}]},{name:"null"}]},description:"Emits the updated value of the date range picker."}],slots:[{name:"slot",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CDateRangePicker/CDateRangePicker.vue"]};const De={title:"Components/DateRangePicker",component:l,tags:["autodocs"],decorators:[a=>({components:{story:a},template:'<div style="max-width: 500px"><story/></div>'})],argTypes:{"onUpdate:value":{table:{disable:!0}},slot:{table:{disable:!0}},format:{control:"text"},size:{options:["small","medium","large"]},placement:{options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"]},firstDayOfWeek:{options:[0,1,2,3,4,5,6]},rangeEndMode:{options:["startOfDay","endOfDay"]},startPlaceholder:{control:"text"},endPlaceholder:{control:"text"}},parameters:{docs:{description:{component:"Date picker with type `daterange` ([Naive UI component](https://www.naiveui.com/en-US/dark/components/date-picker)). Has custom prop `rangeEndMode` that allows to set a boundary of the end date. Not all the properties, events, slots are listed below so please refer to Naive UI documentation."}}},render:a=>({components:{CDateRangePicker:l},setup(){const n=p(null);return{args:a,date:n}},template:`
      <CDateRangePicker
        v-model:value="date"
        :format="args.format"
        :clearable="args.clearable"
        :disabled="args.disabled"
        :size="args.size"
        :placement="args.placement"
        :firstDayOfWeek="args.firstDayOfWeek"
        :panel="args.panel"
        :rangeEndMode="args.rangeEndMode"
        :start-placeholder="args.startPlaceholder"
        :end-placeholder="args.endPlaceholder"
        @update:value="args['onUpdate:value']"
      />
      <div style="margin-top: 12px">Value: {{ date ?? 'null' }}</div>
    `})},t={args:{"onUpdate:value":E(),format:"yyyy-MM-dd HH:mm:ss",startPlaceholder:"Start date",endPlaceholder:"End date",panel:!1,firstDayOfWeek:1,placement:"bottom-start",size:"medium",disabled:!1,clearable:!0,rangeEndMode:"endOfDay"}};var d,i,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    'onUpdate:value': fn(),
    format: 'yyyy-MM-dd HH:mm:ss',
    startPlaceholder: 'Start date',
    endPlaceholder: 'End date',
    panel: false,
    firstDayOfWeek: 1,
    placement: 'bottom-start',
    size: 'medium',
    disabled: false,
    clearable: true,
    rangeEndMode: 'endOfDay'
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Pe=["Default"];export{t as Default,Pe as __namedExportsOrder,De as default};
