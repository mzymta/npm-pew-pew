import{f as p}from"./index-BOnq2-IM.js";import{d as h,r as u,v as b,y as k,A as g,x as v,m as y}from"./vue.esm-bundler-D4RNtN6S.js";import{N as C}from"./Checkbox-rSoXdA_M.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./use-form-item-BaX4b55j.js";import"./use-merged-state-CUYpy2WA.js";import"./call-f2ri57Kd.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./delegate-AmuGJuoF.js";import"./use-memo-CglecHn5.js";import"./light-Bs5wOcbH.js";import"./use-css-vars-class-BoK1eXI1.js";import"./index-L98eAIry.js";const o=h({__name:"CCheckbox",props:{checked:{type:Boolean,default:!1},defaultChecked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},focusable:{type:Boolean,default:!0},indeterminate:{type:Boolean,default:!1},label:{default:void 0},size:{default:"medium"},value:{default:void 0}},emits:["update:checked"],setup(a,{expose:l,emit:i}){const m=i,n=u(null);return l({focus:()=>{var e;return(e=n.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=n.value)==null?void 0:e.blur()}}),(e,d)=>(v(),b(g(C),{ref_key:"checkbox",ref:n,class:"c-checkbox",checked:e.checked,"default-checked":e.defaultChecked,disabled:e.disabled,focusable:e.focusable,indeterminate:e.indeterminate,label:e.label,size:e.size,value:e.value,"onUpdate:checked":d[0]||(d[0]=f=>m("update:checked",f))},{default:k(()=>[y(e.$slots,"default")]),_:3},8,["checked","default-checked","disabled","focusable","indeterminate","label","size","value"]))}});o.__docgenInfo={exportName:"default",displayName:"CCheckbox",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],props:[{name:"checked",description:"Whether the checkbox is being checked manually.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"defaultChecked",description:"Whether the checkbox is checked by default.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Whether the checkbox is disabled.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"focusable",description:"Whether the checkbox gains focus after being checked.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"indeterminate",description:"Whether the checkbox can have a third indeterminate state.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"Checkbox label.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:"The size of the checkbox.",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"value",description:"The value of the checkbox to be used in a checkbox group.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:checked",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CCheckbox/CCheckbox.vue"]};const A={title:"Components/Checkbox",component:o,tags:["autodocs"],decorators:[a=>({components:{story:a},template:'<div style="display: grid; gap: 12px; justify-items: start;"><story/></div>'})],argTypes:{"onUpdate:checked":{table:{disable:!0}},default:{control:"text"},checked:{control:!1},defaultChecked:{control:!1},size:{options:["small","medium","large"]},value:{control:!1}},parameters:{docs:{description:{component:`**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/checkbox).**

`}}},render:a=>({components:{CCheckbox:o},setup(){const l=u(!0);return{args:a,checkedValue:l}},template:`
      <CCheckbox 
        v-model:checked="checkedValue"
        :disabled="args.disabled"
        :focusable="args.focusable"
        :indeterminate="args.indeterminate"
        :label="args.label"
        :size="args.size"
        :value="args.value"
        @change="args['onUpdate:checked']"
      >
        Checkbox
      </CCheckbox>
      <CCheckbox 
        v-model:checked="checkedValue"
        :disabled="args.disabled"
        :focusable="args.focusable"
        :indeterminate="args.indeterminate"
        :label="args.label"
        :size="args.size"
        :value="args.value"
        @change="args['onUpdate:checked']"
      >
        {{ args.default }}
      </CCheckbox>
      
      <div><b>Value:</b> {{ checkedValue }}</div>
    `})},t={args:{checked:!0,default:"I agree to the terms and conditions, and I acknowledge that I have read and understood the privacy policy, including how my personal data will be used and protected.","onUpdate:checked":p()}};var s,c,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    checked: true,
    default: 'I agree to the terms and conditions, and I acknowledge that I have read and understood the privacy policy, including how my personal data will be used and protected.',
    'onUpdate:checked': fn()
  }
}`,...(r=(c=t.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,A as default};
