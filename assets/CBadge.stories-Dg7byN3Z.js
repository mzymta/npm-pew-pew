import{d as N,r as g,c as b,w as I,n as k,t as z,h as s,T as j,a as L,q as U,v as G,y as H,A as J,x as K,m as Q}from"./vue.esm-bundler-D4RNtN6S.js";import{u as ee}from"./use-rtl-DB_faxJd.js";import{f as T}from"./fade-in-scale-up.cssr-DKJ6UU5J.js";import{f as i,g as ae,n as f,o as m,r as te,k as M,l as ne,s as oe}from"./light-DsB5ODev.js";import{g as re}from"./attribute-Cz32yFEB.js";import{a as se,i as ie}from"./resolve-slot-BBjw-So6.js";import{f as le,N as ue}from"./Button-CF0RFvFf.js";import{u as de}from"./use-style-DC-6GAXR.js";import{N as me}from"./FadeInExpandTransition-LhRfDe22.js";import{b as fe}from"./light-DklxBdP7.js";import{u as ce}from"./use-css-vars-class-BoK1eXI1.js";import{c as pe}from"./color-to-class-B0iQgAn2.js";import{_ as he}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ge}from"./CButton-CYpEF-bO.js";import{C as W}from"./CAvatar-Bb1VByV2.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./Loading-Ch5S3HjA.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./call-f2ri57Kd.js";import"./CIcon-BdIW6TD_.js";import"./Tag-C1qgvQqN.js";import"./Close-MwAQiULY.js";import"./Icon-CrmNSR1a.js";import"./Close-DtvJwW5M.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./light-BLNTlX85.js";import"./index-Xn0jilRV.js";import"./VResizeObserver-DllAtjZA.js";import"./light-qvuNFt7m.js";const O=N({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const a=g(null),r=g(e.value),u=g(e.value),n=g("up"),t=g(!1),c=b(()=>t.value?`${e.clsPrefix}-base-slot-machine-current-number--${n.value}-scroll`:null),v=b(()=>t.value?`${e.clsPrefix}-base-slot-machine-old-number--${n.value}-scroll`:null);I(z(e,"value"),(o,l)=>{r.value=l,u.value=o,k(S)});function S(){const o=e.newOriginalNumber,l=e.oldOriginalNumber;l===void 0||o===void 0||(o>l?x("up"):l>o&&x("down"))}function x(o){n.value=o,t.value=!1,k(()=>{var l;(l=a.value)===null||l===void 0||l.offsetWidth,t.value=!0})}return()=>{const{clsPrefix:o}=e;return s("span",{ref:a,class:`${o}-base-slot-machine-number`},r.value!==null?s("span",{class:[`${o}-base-slot-machine-old-number ${o}-base-slot-machine-old-number--top`,v.value]},r.value):null,s("span",{class:[`${o}-base-slot-machine-current-number`,c.value]},s("span",{ref:"numberWrapper",class:[`${o}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${o}-base-slot-machine-current-number__inner--not-number`]},u.value)),r.value!==null?s("span",{class:[`${o}-base-slot-machine-old-number ${o}-base-slot-machine-old-number--bottom`,v.value]},r.value):null)}}}),{cubicBezierEaseOut:w}=ae;function be({duration:e=".2s"}={}){return[i("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${w},
 max-width ${e} ${w},
 transform ${e} ${w}
 `}),i("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${w},
 max-width ${e} ${w},
 transform ${e} ${w}
 `}),i("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),i("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),i("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),i("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const ve=i([i("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),i("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),i("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),i("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),f("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[f("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[be({duration:".2s"}),le({duration:".2s",delay:"0s"}),f("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[m("top",{transform:"translateY(-100%)"}),m("bottom",{transform:"translateY(100%)"}),m("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),m("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),f("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[m("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),m("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),te("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[m("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),ye=N({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){de("-base-slot-machine",ve,z(e,"clsPrefix"));const a=g(),r=g(),u=b(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const n=[];let t=e.value;for(e.max!==void 0&&(t=Math.min(e.max,t));t>=1;)n.push(t%10),t/=10,t=Math.floor(t);return n.reverse(),n});return I(z(e,"value"),(n,t)=>{typeof n=="string"?(r.value=void 0,a.value=void 0):typeof t=="string"?(r.value=n,a.value=void 0):(r.value=n,a.value=t)}),()=>{const{value:n,clsPrefix:t}=e;return typeof n=="number"?s("span",{class:`${t}-base-slot-machine`},s(j,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>u.value.map((c,v)=>s(O,{clsPrefix:t,key:u.value.length-v-1,oldOriginalNumber:a.value,newOriginalNumber:r.value,value:c}))}),s(me,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<n?s(O,{clsPrefix:t,value:"+"}):null})):s("span",{class:`${t}-base-slot-machine`},n)}}}),we=i([i("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),f("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[m("as-is",[f("badge-sup",{position:"static",transform:"translateX(0)"},[T({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),m("dot",[f("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[i("::before","border-radius: 4px;")])]),f("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 2;
 display: flex;
 align-items: center;
 `,[T({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),f("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),i("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),xe=Object.assign(Object.assign({},M.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),Ce=N({name:"Badge",props:xe,setup(e,{slots:a}){const{mergedClsPrefixRef:r,inlineThemeDisabled:u,mergedRtlRef:n}=ne(e),t=M("Badge","-badge",we,fe,e,r),c=g(!1),v=()=>{c.value=!0},S=()=>{c.value=!1},x=b(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!ie(a.value)));U(()=>{x.value&&(c.value=!0)});const o=ee("Badge",n,r),l=b(()=>{const{type:p,color:d}=e,{common:{cubicBezierEaseInOut:h,cubicBezierEaseOut:A},self:{[oe("color",p)]:C,fontFamily:X,fontSize:Z}}=t.value;return{"--n-font-size":Z,"--n-font-family":X,"--n-color":d||C,"--n-ripple-color":d||C,"--n-bezier":h,"--n-ripple-bezier":A}}),y=u?ce("badge",b(()=>{let p="";const{type:d,color:h}=e;return d&&(p+=d[0]),h&&(p+=pe(h)),p}),l,e):void 0,F=b(()=>{const{offset:p}=e;if(!p)return;const[d,h]=p,A=typeof d=="number"?`${d}px`:d,C=typeof h=="number"?`${h}px`:h;return{transform:`translate(calc(${o!=null&&o.value?"50%":"-50%"} + ${A}), ${C})`}});return{rtlEnabled:o,mergedClsPrefix:r,appeared:c,showBadge:x,handleAfterEnter:v,handleAfterLeave:S,cssVars:u?void 0:l,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,offsetStyle:F}},render(){var e;const{mergedClsPrefix:a,onRender:r,themeClass:u,$slots:n}=this;r==null||r();const t=(e=n.default)===null||e===void 0?void 0:e.call(n);return s("div",{class:[`${a}-badge`,this.rtlEnabled&&`${a}-badge--rtl`,u,{[`${a}-badge--dot`]:this.dot,[`${a}-badge--as-is`]:!t}],style:this.cssVars},t,s(L,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?s("sup",{class:`${a}-badge-sup`,title:re(this.value),style:this.offsetStyle},se(n.value,()=>[this.dot?null:s(ye,{clsPrefix:a,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?s(ue,{clsPrefix:a}):null):null}))}}),D=N({__name:"CBadge",props:{color:{default:void 0},dot:{type:Boolean,default:!1},max:{default:void 0},offset:{default:void 0},processing:{type:Boolean,default:!1},showZero:{type:Boolean,default:!1},show:{type:Boolean,default:!0},type:{default:"default"},value:{default:void 0}},setup(e){return(a,r)=>(K(),G(J(Ce),{class:"c-badge",color:a.color,dot:a.dot,max:a.max,offset:a.offset,processing:a.processing,"show-zero":a.showZero,show:a.show,type:a.type,value:a.value},{default:H(()=>[Q(a.$slots,"default",{},void 0,!0)]),_:3},8,["color","dot","max","offset","processing","show-zero","show","type","value"]))}}),R=he(D,[["__scopeId","data-v-4950c94a"]]);D.__docgenInfo={exportName:"default",displayName:"CBadge",description:"",tags:{},props:[{name:"color",description:"Badge color.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"dot",description:"Show badge as dot.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"max",description:"The maximum number of the badge when its value overflows.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"offset",description:"Offset of the badge from the left and top of the default position.",required:!1,type:{name:"tuple",elements:[{name:"union",elements:[{name:"string"},{name:"number"}]},{name:"union",elements:[{name:"string"},{name:"number"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"processing",description:"Show processing status.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showZero",description:"Whether to display the badge, even if provided value equals 0.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"show",description:"Whether the badge should be shown altogether.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"type",description:"Type of the badge.",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"success"'},{name:'"error"'},{name:'"warning"'},{name:'"info"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"value",description:"Badge's value.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CBadge/CBadge.vue"]};const oa={title:"Components/Badge",component:R,tags:["autodocs"],decorators:[e=>({components:{story:e},template:'<div style="display: flex; gap: 20px; align-items: center"><story/></div>'})],argTypes:{default:{control:!1,description:"The content of the badge."},color:{control:"text"},max:{control:"number"},offset:{control:"object"},type:{options:["default","success","error","warning","info"]},value:{control:"object"}},parameters:{docs:{description:{component:`**Exactly matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/badge).**

 Badge to be used for counters, statuses.`}}},render:e=>({components:{CBadge:R,CAvatar:W,CButton:ge},setup(){return{args:e}},template:`
      <CBadge
        :name="args.name"
        :color="args.color"
        :dot="args.dot"
        :max="args.max"
        :offset="args.offset"
        :processing="args.processing"
        :show-args.zero="args.showZero"
        :show="args.show"
        :type="args.type"
        :value="args.value"
      >
        <CAvatar
          name="John Doe"
          size="large"></CAvatar>
      </CBadge>
      
      <CButton @click="() => { args.value++ }">
        +
      </CButton>
      <CButton @click="() => { args.value = Math.max(0, args.value - 1) }">
        -
      </CButton>
    `})},B={args:{value:9,max:15}},$={render:()=>({components:{CBadge:R,CAvatar:W},template:`
      <CBadge
        processing
        dot
        type="default"
      >
        <CAvatar name="rory palmer"/>
      </CBadge>
      <CBadge
        :value="0"
        show-zero
        type="success"
      >
        <CAvatar src="https://picsum.photos/id/222/200/300"/>
      </CBadge>
      <CBadge
        value="info"
        type="error"
      >
        <CAvatar/>
      </CBadge>
      <CBadge
        value="info"
        dot
        type="warning"
      >
        <CAvatar src="https://picsum.photos/id/188/200/300"/>
      </CBadge>
      <CBadge
        :value="6782"
        type="info"
      >
        <CAvatar/>
      </CBadge>
    `})};var _,E,Y;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 9,
    max: 15
  }
}`,...(Y=(E=B.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};var q,P,V;$.parameters={...$.parameters,docs:{...(q=$.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CBadge,
      CAvatar
    },
    template: \`
      <CBadge
        processing
        dot
        type="default"
      >
        <CAvatar name="rory palmer"/>
      </CBadge>
      <CBadge
        :value="0"
        show-zero
        type="success"
      >
        <CAvatar src="https://picsum.photos/id/222/200/300"/>
      </CBadge>
      <CBadge
        value="info"
        type="error"
      >
        <CAvatar/>
      </CBadge>
      <CBadge
        value="info"
        dot
        type="warning"
      >
        <CAvatar src="https://picsum.photos/id/188/200/300"/>
      </CBadge>
      <CBadge
        :value="6782"
        type="info"
      >
        <CAvatar/>
      </CBadge>
    \`
  })
}`,...(V=(P=$.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const ra=["Default","Type"];export{B as Default,$ as Type,ra as __namedExportsOrder,oa as default};
