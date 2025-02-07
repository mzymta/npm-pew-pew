import{d as b,r as s,v as w,y as c,x as D,g as _,G as z,m as k,H as S,I as q,B as f,z as V}from"./vue.esm-bundler-D4RNtN6S.js";import{_ as B}from"./CButton-CYpEF-bO.js";import{C as I}from"./CIcon-BdIW6TD_.js";import{_ as N}from"./CTooltip-CEaW1Ntp.js";import"./Button-CF0RFvFf.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./use-css-vars-class-BoK1eXI1.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-BYkYGbMt.js";import"./Popover-axeHrzq9.js";import"./index-CIE75m1q.js";import"./delegate-AmuGJuoF.js";import"./toString-Vm_cEZ4d.js";import"./Follower-DXtmSYJu.js";import"./cssr-ChHp6ynC.js";import"./utils-Dy8q55w_.js";import"./light-BUP7UYSb.js";import"./get-precise-event-target-DhO46Lpt.js";import"./index-Bg4fAuci.js";import"./index-L98eAIry.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./index-Xn0jilRV.js";import"./light-RknvjviJ.js";import"./get-first-slot-vnode-BHWfc99-.js";import"./flatten-B94A2huW.js";import"./keep-B1eBS8j0.js";import"./use-merged-state-CUYpy2WA.js";import"./use-compitable-B7ANSQOo.js";import"./light-Lzn-IxFN.js";const n=b({__name:"CCopyButton",props:{text:{},size:{default:"medium"},successText:{default:"Copied!"},errorText:{default:"Copy failed!"},statusDuration:{default:1500}},setup(t){const e=t,u=s(!1),i=s(!1),p=s(""),o=s(null);function l(){u.value=!1,i.value=!1,o.value!==null&&(clearTimeout(o.value),o.value=null)}function h(){o.value=window.setTimeout(l,e.statusDuration)}async function d(){l();try{await window.navigator.clipboard.writeText(e.text),p.value=e.successText,u.value=!0}catch{p.value=e.errorText,i.value=!0}finally{h()}}return(m,P)=>(D(),w(N,{trigger:"manual",show:u.value||i.value},{trigger:c(()=>[k(m.$slots,"default",S(q({copyText:d})),()=>[f(B,V({quaternary:"",circle:""},m.$attrs,{size:m.size,onClick:d}),{icon:c(()=>[f(I,{"is-inline":!0,name:"copy"})]),_:1},16,["size"])])]),default:c(()=>[_(" "+z(p.value),1)]),_:3},8,["show"]))}});n.__docgenInfo={exportName:"default",displayName:"CCopyButton",description:"",tags:{},props:[{name:"text",description:"The text content to be copied when the button is clicked.",required:!0,type:{name:"string"}},{name:"size",description:"The size of the button.",required:!1,type:{name:"union",elements:[{name:'"tiny"'},{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"successText",description:"The message to display when the text is successfully copied to the clipboard.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Copied!'"}},{name:"errorText",description:"The message to display if an error occurs during the copy operation.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Copy failed!'"}},{name:"statusDuration",description:"The duration (in milliseconds) for which the status message (success or error) is displayed.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1500"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"copyText",title:"binding"}]}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CCopyButton/CCopyButton.vue"]};const Dt={title:"Components/CopyButton",component:n,tags:["autodocs"],decorators:[t=>({components:{story:t},template:'<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center"><story/></div>'})],argTypes:{default:{control:!1,description:"For custom button elements. Provides `copyText` function."},size:{control:!1},text:{control:!1}},parameters:{docs:{description:{component:"A button component designed to copy text to the clipboard. It provides feedback messages for success and error states and supports customizable sizes and display duration for status messages."}}},render:t=>({components:{CCopyButton:n},setup(){return{args:t}},template:`
      <CCopyButton 
        text="Text of tiny button."
        size="tiny"
        :statusDuration="args.statusDuration"
        :successText="args.successText"
        :errorText="args.errorText"
      />
      <CCopyButton
        text="Text of small button."
        size="small"
        :statusDuration="args.statusDuration"
        :successText="args.successText"
        :errorText="args.errorText"
      />
      <CCopyButton
        text="Text of medium button."
        :statusDuration="args.statusDuration"
        :successText="args.successText"
        :errorText="args.errorText"
      />
      <CCopyButton
        text="Text of large button."
        size="large"
        :statusDuration="args.statusDuration"
        :successText="args.successText"
        :errorText="args.errorText"
      />
    `})},r={args:{text:"",statusDuration:1500}},a={render:t=>({components:{CCopyButton:n,CButton:B},setup(){return{args:t}},template:`
      <CCopyButton 
        text="Custom button text."
        :status-duration="args.statusDuration"
      >
        <template #default="{ copyText }">
          <CButton @click="copyText">Copy</CButton>
        </template>
      </CCopyButton>
    `})};var x,y,C;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: '',
    statusDuration: 1500
  }
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var g,T,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CCopyButton,
      CButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CCopyButton 
        text="Custom button text."
        :status-duration="args.statusDuration"
      >
        <template #default="{ copyText }">
          <CButton @click="copyText">Copy</CButton>
        </template>
      </CCopyButton>
    \`
  })
}`,...(v=(T=a.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const _t=["Default","Custom"];export{a as Custom,r as Default,_t as __namedExportsOrder,Dt as default};
