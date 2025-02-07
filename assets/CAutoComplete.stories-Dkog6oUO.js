import{d as J,h as f,a as ve,Q as ye,r as m,t as Ce,c as b,v as Se,D as we,y as A,A as Ae,x as Te,m as T,H as Ve,I as Fe}from"./vue.esm-bundler-D4RNtN6S.js";import{f as V}from"./index-BOnq2-IM.js";import{N as Be,c as Ie}from"./utils-CgJXxSjZ.js";import{f as Oe}from"./fade-in-scale-up.cssr-DKJ6UU5J.js";import{f as ze,n as N,k as X,l as Re}from"./light-DsB5ODev.js";import{u as M,B as Ee,V as Me,a as xe}from"./Follower-DXtmSYJu.js";import{g as ke}from"./get-first-slot-vnode-BHWfc99-.js";import{N as Pe}from"./Input-DEy15p9s.js";import{c as qe}from"./index-CIE75m1q.js";import{u as De}from"./use-form-item-BaX4b55j.js";import{u as Ue}from"./use-merged-state-CUYpy2WA.js";import{a as Ne}from"./light-CSx0HXEM.js";import{c as $e}from"./create-BYUmyaO5.js";import{u as Le}from"./use-css-vars-class-BoK1eXI1.js";import{a as We}from"./icon-switch.cssr-CS-aOSlJ.js";import{g as je}from"./get-precise-event-target-DhO46Lpt.js";import{c as h}from"./call-f2ri57Kd.js";import"./FocusDetector-Cm4LEqMh.js";import"./VResizeObserver-DllAtjZA.js";import"./use-memo-CglecHn5.js";import"./cssr-ChHp6ynC.js";import"./utils-Dy8q55w_.js";import"./index-Xn0jilRV.js";import"./render-CafAiG2R.js";import"./Icon-CrmNSR1a.js";import"./use-style-DC-6GAXR.js";import"./Checkmark-i7pX93Cq.js";import"./resolve-slot-BBjw-So6.js";import"./Loading-Ch5S3HjA.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./use-rtl-DB_faxJd.js";import"./delegate-AmuGJuoF.js";import"./light-RknvjviJ.js";import"./light-aICc-wbJ.js";import"./use-locale-CfrJhm3r.js";import"./enUS-CW6P5ZC_.js";import"./happens-in-CM8LO42l.js";import"./flatten-B94A2huW.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./Suffix-BjoWbega.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./light-3lQabVNk.js";const He=ze([N("auto-complete",`
 z-index: auto;
 position: relative;
 display: inline-flex;
 width: 100%;
 `),N("auto-complete-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Oe({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]);function Ke(t){return t.map(Z)}function Z(t){var o,s;return typeof t=="string"?{label:t,value:t}:t.type==="group"?{type:"group",label:(o=t.label)!==null&&o!==void 0?o:t.name,value:(s=t.value)!==null&&s!==void 0?s:t.name,key:t.key||t.name,children:t.children.map(l=>Z(l))}:t}const Ge=Object.assign(Object.assign({},X.props),{to:M.propTo,menuProps:Object,append:Boolean,bordered:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},defaultValue:{type:String,default:null},loading:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},placeholder:String,placement:{type:String,default:"bottom-start"},value:String,blurAfterSelect:Boolean,clearAfterSelect:Boolean,getShow:Function,showEmpty:Boolean,inputProps:Object,renderOption:Function,renderLabel:Function,size:String,options:{type:Array,default:()=>[]},zIndex:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onSelect:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array],onInput:[Function,Array]}),Ye=J({name:"AutoComplete",props:Ge,slots:Object,setup(t){const{mergedBorderedRef:o,namespaceRef:s,mergedClsPrefixRef:r,inlineThemeDisabled:l}=Re(t),n=De(t),{mergedSizeRef:d,mergedDisabledRef:i,mergedStatusRef:_}=n,O=m(null),y=m(null),z=m(t.defaultValue),ee=Ce(t,"value"),C=Ue(ee,z),c=m(!1),R=m(!1),k=X("AutoComplete","-auto-complete",He,Ne,t,r),P=b(()=>Ke(t.options)),te=b(()=>{const{getShow:e}=t;return e?e(C.value||""):!!C.value}),ne=b(()=>te.value&&c.value&&(t.showEmpty?!0:!!P.value.length)),ae=b(()=>$e(P.value,Ie("value","children")));function S(e){const{"onUpdate:value":a,onUpdateValue:u,onInput:p}=t,{nTriggerFormInput:w,nTriggerFormChange:be}=n;u&&h(u,e),a&&h(a,e),p&&h(p,e),z.value=e,w(),be()}function oe(e){const{onSelect:a}=t,{nTriggerFormInput:u,nTriggerFormChange:p}=n;a&&h(a,e),u(),p()}function le(e){const{onBlur:a}=t,{nTriggerFormBlur:u}=n;a&&h(a,e),u()}function se(e){const{onFocus:a}=t,{nTriggerFormFocus:u}=n;a&&h(a,e),u()}function re(){R.value=!0}function ue(){window.setTimeout(()=>{R.value=!1},0)}function ie(e){var a,u,p;switch(e.key){case"Enter":if(!R.value){const w=(a=y.value)===null||a===void 0?void 0:a.getPendingTmNode();w&&(q(w.rawNode),e.preventDefault())}break;case"ArrowDown":(u=y.value)===null||u===void 0||u.next();break;case"ArrowUp":(p=y.value)===null||p===void 0||p.prev();break}}function q(e){(e==null?void 0:e.value)!==void 0&&(oe(e.value),t.clearAfterSelect?S(null):e.label!==void 0&&S(t.append?`${C.value}${e.label}`:e.label),c.value=!1,t.blurAfterSelect&&he())}function de(){S(null)}function me(e){c.value=!0,se(e)}function pe(e){c.value=!1,le(e)}function fe(e){c.value=!0,S(e)}function ce(e){q(e.rawNode)}function ge(e){var a;!((a=O.value)===null||a===void 0)&&a.contains(je(e))||(c.value=!1)}function he(){var e,a;!((e=O.value)===null||e===void 0)&&e.contains(document.activeElement)&&((a=document.activeElement)===null||a===void 0||a.blur())}const D=b(()=>{const{common:{cubicBezierEaseInOut:e},self:{menuBoxShadow:a}}=k.value;return{"--n-menu-box-shadow":a,"--n-bezier":e}}),g=l?Le("auto-complete",void 0,D,t):void 0,E=m(null),U={focus:()=>{var e;(e=E.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=E.value)===null||e===void 0||e.blur()}};return{focus:U.focus,blur:U.blur,inputInstRef:E,uncontrolledValue:z,mergedValue:C,isMounted:We(),adjustedTo:M(t),menuInstRef:y,triggerElRef:O,treeMate:ae,mergedSize:d,mergedDisabled:i,active:ne,mergedStatus:_,handleClear:de,handleFocus:me,handleBlur:pe,handleInput:fe,handleToggle:ce,handleClickOutsideMenu:ge,handleCompositionStart:re,handleCompositionEnd:ue,handleKeyDown:ie,mergedTheme:k,cssVars:l?void 0:D,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,mergedBordered:o,namespace:s,mergedClsPrefix:r}},render(){const{mergedClsPrefix:t}=this;return f("div",{class:`${t}-auto-complete`,ref:"triggerElRef",onKeydown:this.handleKeyDown,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd},f(Ee,null,{default:()=>[f(Me,null,{default:()=>{const o=this.$slots.default;if(o)return ke("default",o,{handleInput:this.handleInput,handleFocus:this.handleFocus,handleBlur:this.handleBlur,value:this.mergedValue});const{mergedTheme:s}=this;return f(Pe,{ref:"inputInstRef",status:this.mergedStatus,theme:s.peers.Input,themeOverrides:s.peerOverrides.Input,bordered:this.mergedBordered,value:this.mergedValue,placeholder:this.placeholder,size:this.mergedSize,disabled:this.mergedDisabled,clearable:this.clearable,loading:this.loading,inputProps:this.inputProps,onClear:this.handleClear,onFocus:this.handleFocus,onUpdateValue:this.handleInput,onBlur:this.handleBlur},{suffix:()=>{var r,l;return(l=(r=this.$slots).suffix)===null||l===void 0?void 0:l.call(r)},prefix:()=>{var r,l;return(l=(r=this.$slots).prefix)===null||l===void 0?void 0:l.call(r)}})}}),f(xe,{show:this.active,to:this.adjustedTo,containerClass:this.namespace,zIndex:this.zIndex,teleportDisabled:this.adjustedTo===M.tdkey,placement:this.placement,width:"target"},{default:()=>f(ve,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>{var o;if((o=this.onRender)===null||o===void 0||o.call(this),!this.active)return null;const{menuProps:s}=this;return ye(f(Be,Object.assign({},s,{clsPrefix:t,ref:"menuInstRef",theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,"auto-pending":!0,class:[`${t}-auto-complete-menu`,this.themeClass,s==null?void 0:s.class],style:[s==null?void 0:s.style,this.cssVars],treeMate:this.treeMate,multiple:!1,renderLabel:this.renderLabel,renderOption:this.renderOption,size:"medium",onToggle:this.handleToggle}),{empty:()=>{var r,l;return(l=(r=this.$slots).empty)===null||l===void 0?void 0:l.call(r)}}),[[qe,this.handleClickOutsideMenu,void 0,{capture:!0}]])}})})]}))}}),v=J({__name:"CAutoComplete",props:{append:{type:Boolean,default:!1},blurAfterSelect:{type:Boolean,default:!1},clearAfterSelect:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},defaultValue:{default:null},disabled:{type:Boolean,default:!1},getShow:{type:Function,default:void 0},inputProps:{default:void 0},loading:{type:Boolean,default:void 0},menuProps:{default:void 0},options:{default:()=>[]},placeholder:{default:"Please Input"},placement:{default:"bottom-start"},renderLabel:{type:Function,default:void 0},renderOption:{type:Function,default:void 0},showEmpty:{type:Boolean,default:!1},size:{default:"medium"},status:{default:void 0},to:{type:[String,Boolean],default:"body"},value:{default:""}},emits:["blur","focus","select","update:value"],setup(t,{expose:o,emit:s}){const r=s,l=m(null);return o({focus:()=>{var n;return(n=l.value)==null?void 0:n.focus()},blur:()=>{var n;return(n=l.value)==null?void 0:n.blur()}}),(n,d)=>(Te(),Se(Ae(Ye),{ref_key:"autocomplete",ref:l,class:"c-auto-complete","blur-after-select":n.blurAfterSelect,"clear-after-select":n.clearAfterSelect,clearable:n.clearable,"default-value":n.defaultValue,disabled:n.disabled,"get-show":n.getShow,"input-props":n.inputProps,loading:n.loading||void 0,"menu-props":n.menuProps,options:n.options,placeholder:n.placeholder,placement:n.placement,"render-label":n.renderLabel,"render-option":n.renderOption,"show-empty":n.showEmpty,size:n.size,status:n.status,to:n.to,value:n.value,onBlur:d[0]||(d[0]=i=>r("blur",i)),onFocus:d[1]||(d[1]=i=>r("focus",i)),onSelect:d[2]||(d[2]=i=>r("select",i)),"onUpdate:value":d[3]||(d[3]=i=>r("update:value",i))},we({_:2},[n.$slots.default?{name:"default",fn:A(i=>[T(n.$slots,"default",Ve(Fe(i)))]),key:"0"}:void 0,n.$slots.empty?{name:"empty",fn:A(()=>[T(n.$slots,"empty")]),key:"1"}:void 0,n.$slots.prefix?{name:"prefix",fn:A(()=>[T(n.$slots,"prefix")]),key:"2"}:void 0,n.$slots.suffix?{name:"suffix",fn:A(()=>[T(n.$slots,"suffix")]),key:"3"}:void 0]),1032,["blur-after-select","clear-after-select","clearable","default-value","disabled","get-show","input-props","loading","menu-props","options","placeholder","placement","render-label","render-option","show-empty","size","status","to","value"]))}});v.__docgenInfo={exportName:"default",displayName:"CAutoComplete",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],props:[{name:"append",description:"Whether to append content to input.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"blurAfterSelect",description:"Whether to blur after selection.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clearAfterSelect",description:"Whether to clear after selection.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clearable",description:"Whether autocomplete is clearable.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"defaultValue",description:"Default value of autocomplete.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"Whether the autocomplete is disabled.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"getShow",description:"Use the input to determine whether to show options on focus.",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"undefined"}},{name:"inputProps",description:"The attributes of input element in autocomplete.",required:!1,type:{name:"InputHTMLAttributes"},defaultValue:{func:!1,value:"undefined"}},{name:"loading",description:"Whether to show a loading status.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"menuProps",description:"The menu's DOM props.",required:!1,type:{name:"HTMLAttributes"},defaultValue:{func:!1,value:"undefined"}},{name:"options",description:"Options to autocomplete from.",required:!1,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]},defaultValue:{func:!1,value:"() => []"}},{name:"placeholder",description:"Autocomplete's placeholder.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Please Input'"}},{name:"placement",description:"Autocomplete's placement.",required:!1,type:{name:"union",elements:[{name:'"top-start"'},{name:'"top"'},{name:'"top-end"'},{name:'"right-start"'},{name:'"right"'},{name:'"right-end"'},{name:'"bottom-start"'},{name:'"bottom"'},{name:'"bottom-end"'},{name:'"left-start"'},{name:'"left"'},{name:'"left-end"'}]},defaultValue:{func:!1,value:"'bottom-start'"}},{name:"renderLabel",description:"Render function for each option label.",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"undefined"}},{name:"renderOption",description:"Render function for each option.",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"undefined"}},{name:"showEmpty",description:"Whether to show menu if there's no option.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Autocomplete size.",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"status",description:"Validation status.",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"undefined"}},{name:"to",description:"Container node of the menu.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"HTMLElement"},{name:"false"}]},defaultValue:{func:!1,value:"'body'"}},{name:"value",description:"Input of autocomplete.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"blur",type:{names:["FocusEvent"]},description:"Emits when autocomplete input blurs."},{name:"focus",type:{names:["FocusEvent"]},description:"Emits when autocomplete input focuses."},{name:"select",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Emits when an option is selected in autocomplete."},{name:"update:value",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Emits when the value of autocomplete input is updated."}],slots:[{name:"default",scoped:!0,bindings:[]},{name:"empty"},{name:"prefix"},{name:"suffix"}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CAutoComplete/CAutoComplete.vue"]};const x=[{label:"Everybody's Got Something to Hide Except Me and My Monkey",value:"song0"},{label:"Drive My Car",value:"song1",disabled:!0},{label:"Norwegian Wood",value:"song2"},{label:"You Won't See",value:"song3",disabled:!0},{label:"Nowhere Man",value:"song4"},{label:"Think For Yourself",value:"song5"},{label:"The Word",value:"song6"},{label:"Michelle",value:"song7",disabled:!0},{label:"What goes on",value:"song8"},{label:"Girl",value:"song9"},{label:"I'm looking through you",value:"song10"},{label:"In My Life",value:"song11"},{label:"Wait",value:"song12"}],$t={title:"Components/AutoComplete",component:v,tags:["autodocs"],decorators:[t=>({components:{story:t},template:'<div style="max-width: 600px"><story/></div>'})],argTypes:{default:{control:!1,description:"For custom input elements, supplied by the user."},suffix:{control:!1,description:"Input's suffix content."},prefix:{control:!1,description:"Input's prefix content."},empty:{control:!1,description:"Menu's content to show when there's no option."},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelect:{table:{disable:!0}},"onUpdate:value":{table:{disable:!0}},defaultValue:{control:{type:"text",disabled:!0}},getShow:{control:!1},options:{table:{defaultValue:{summary:"[]"}},control:!1},placement:{control:"select",options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"]},renderLabel:{control:!1},renderOption:{control:!1},size:{control:"select",options:["small","medium","large"]},status:{options:["success","warning","error"]},to:{control:!1},value:{control:!1}},parameters:{docs:{description:{component:`**Exactly matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/auto-complete).** 

 Dropdown with options to autocomplete the input text.`}}},render:t=>({components:{CAutoComplete:v},setup(){const o=m("");return{args:t,model:o,options:x}},template:`
          <CAutoComplete
            v-model:value="model"
            :options="options"
            :append="args.append"
            :blurAfterSelect="args.blurAfterSelect"
            :clearAfterSelect="args.clearAfterSelect"
            :clearable="args.clearable"
            :defaultValue="args.defaultValue"
            :disabled="args.disabled"
            :loading="args.loading"
            :placeholder="args.placeholder"
            :placement="args.placement"
            :renderLabel="args.renderLabel"
            :renderOption="args.renderOption"
            :showEmpty="args.showEmpty"
            :size="args.size"
            :status="args.status"
            :to="args.to"
            @focus="args.onFocus"
            @blur="args.onBlur"
            @select="args.onSelect"
            @update:value="args['onUpdate:value']"
          />
    `})},F={args:{onBlur:V(),onFocus:V(),onSelect:V(),"onUpdate:value":V()}},B={render:t=>({components:{CAutoComplete:v},setup(){const o=m("");return{args:t,model:o,options:x}},template:`
      <CAutoComplete
        v-bind="args"
        v-model:value="model"
        :options="options"
        clearable
        style="margin-bottom: 12px"
        size="large" />
      <CAutoComplete
        v-bind="args"
        v-model:value="model"
        :options="options"
        clearable
        style="margin-bottom: 12px"
        size="medium" />
      <CAutoComplete
        v-bind="args"
        v-model:value="model"
        :options="options"
        clearable
        size="small" />
    `})},I={render:t=>({components:{CAutoComplete:v},setup(){const o=m("");return{args:t,model:o,options:x}},template:`
      <CAutoComplete
        v-bind="args"
        v-model:value="model"
        :options="options"
        clearable
        style="margin-bottom: 12px"
        status="warning" />
      <CAutoComplete
        v-bind="args"
        v-model:value="model"
        :options="options"
        clearable
        status="error" />
    `})};var $,L,W;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    onBlur: fn(),
    onFocus: fn(),
    onSelect: fn(),
    'onUpdate:value': fn()
  }
}`,...(W=(L=F.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var j,H,K;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CAutoComplete
    },
    setup() {
      const model = ref('');
      return {
        args,
        model,
        options
      };
    },
    template: \`
      <CAutoComplete
        v-bind="args"
        v-model:value="model"
        :options="options"
        clearable
        style="margin-bottom: 12px"
        size="large" />
      <CAutoComplete
        v-bind="args"
        v-model:value="model"
        :options="options"
        clearable
        style="margin-bottom: 12px"
        size="medium" />
      <CAutoComplete
        v-bind="args"
        v-model:value="model"
        :options="options"
        clearable
        size="small" />
    \`
  })
}`,...(K=(H=B.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var G,Y,Q;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CAutoComplete
    },
    setup() {
      const model = ref('');
      return {
        args,
        model,
        options
      };
    },
    template: \`
      <CAutoComplete
        v-bind="args"
        v-model:value="model"
        :options="options"
        clearable
        style="margin-bottom: 12px"
        status="warning" />
      <CAutoComplete
        v-bind="args"
        v-model:value="model"
        :options="options"
        clearable
        status="error" />
    \`
  })
}`,...(Q=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};const Lt=["Default","Size","Status"];export{F as Default,B as Size,I as Status,Lt as __namedExportsOrder,$t as default};
