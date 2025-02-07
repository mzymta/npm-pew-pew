import{d as $,h as n,p as Y,b as Z,c as h,v as N,y as S,z as ee,A as R,x as z,J as te,m as y,F as re,E as ie,r as ne}from"./vue.esm-bundler-D4RNtN6S.js";import{f as se}from"./index-BOnq2-IM.js";import{i as C,N as oe}from"./icon-switch.cssr-CS-aOSlJ.js";import{n as o,o as w,f,r as g,p as ae,k as j,j as ce,l as A,t as le,s as p}from"./light-DsB5ODev.js";import{f as de}from"./flatten-B94A2huW.js";import{g as pe}from"./get-slot-Bk_rJcZu.js";import{u as ue}from"./use-rtl-DB_faxJd.js";import{s as me}from"./light-BjPY59S2.js";import{r as T,a as I}from"./resolve-slot-BBjw-So6.js";import{N as F}from"./Icon-CrmNSR1a.js";import{F as fe}from"./Checkmark-i7pX93Cq.js";import{E as he}from"./Close-DtvJwW5M.js";import{u as ve}from"./use-css-vars-class-BoK1eXI1.js";import{c as P}from"./call-f2ri57Kd.js";import{_ as ge}from"./CButton-CYpEF-bO.js";import{C as be}from"./CIcon-BdIW6TD_.js";import"./use-style-DC-6GAXR.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./Button-CF0RFvFf.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./color-to-class-B0iQgAn2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const xe=o("steps",`
 width: 100%;
 display: flex;
`,[o("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[w("disabled","cursor: not-allowed"),w("clickable",`
 cursor: pointer;
 `),f("&:last-child",[o("step-splitor","display: none;")])]),o("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),o("step-content","flex: 1;",[o("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[g("title",`
 white-space: nowrap;
 flex: 0;
 `)]),g("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),o("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[o("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[g("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[C()]),o("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[C()]),o("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[C()])])]),w("vertical","flex-direction: column;",[ae("show-description",[f(">",[o("step","padding-bottom: 8px;")])]),f(">",[o("step","margin-bottom: 16px;",[f("&:last-child","margin-bottom: 0;"),f(">",[o("step-indicator",[f(">",[o("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),o("step-content",[g("description","margin-top: 8px;")])])])])])]);function Se(e,r){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=r+1,e)}function ze(e){return e.map((r,i)=>Se(r,i))}const ye=Object.assign(Object.assign({},j.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),O=ce("n-steps"),Ce=$({name:"Steps",props:ye,slots:Object,setup(e,{slots:r}){const{mergedClsPrefixRef:i,mergedRtlRef:t}=A(e),l=ue("Steps",t,i),c=j("Steps","-steps",xe,me,e,i);return Y(O,{props:e,mergedThemeRef:c,mergedClsPrefixRef:i,stepsSlots:r}),{mergedClsPrefix:i,rtlEnabled:l}},render(){const{mergedClsPrefix:e}=this;return n("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},ze(de(pe(this))))}}),we={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},Ie=$({name:"Step",props:we,slots:Object,setup(e){const r=Z(O,null);r||le("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:i}=A(),{props:t,mergedThemeRef:l,mergedClsPrefixRef:c,stepsSlots:d}=r,v=h(()=>t.vertical),x=h(()=>{const{status:s}=e;if(s)return s;{const{internalIndex:a}=e,{current:m}=t;if(m===void 0)return"process";if(a<m)return"finish";if(a===m)return t.status||"process";if(a>m)return"wait"}return"process"}),B=h(()=>{const{value:s}=x,{size:a}=t,{common:{cubicBezierEaseInOut:m},self:{stepHeaderFontWeight:D,[p("stepHeaderFontSize",a)]:H,[p("indicatorIndexFontSize",a)]:W,[p("indicatorSize",a)]:q,[p("indicatorIconSize",a)]:V,[p("indicatorTextColor",s)]:L,[p("indicatorBorderColor",s)]:K,[p("headerTextColor",s)]:J,[p("splitorColor",s)]:G,[p("indicatorColor",s)]:Q,[p("descriptionTextColor",s)]:X}}=l.value;return{"--n-bezier":m,"--n-description-text-color":X,"--n-header-text-color":J,"--n-indicator-border-color":K,"--n-indicator-color":Q,"--n-indicator-icon-size":V,"--n-indicator-index-font-size":W,"--n-indicator-size":q,"--n-indicator-text-color":L,"--n-splitor-color":G,"--n-step-header-font-size":H,"--n-step-header-font-weight":D}}),u=i?ve("step",h(()=>{const{value:s}=x,{size:a}=t;return`${s[0]}${a[0]}`}),B,t):void 0,M=h(()=>{if(e.disabled)return;const{onUpdateCurrent:s,"onUpdate:current":a}=t;return s||a?()=>{s&&P(s,e.internalIndex),a&&P(a,e.internalIndex)}:void 0});return{stepsSlots:d,mergedClsPrefix:c,vertical:v,mergedStatus:x,handleStepClick:M,cssVars:i?void 0:B,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{mergedClsPrefix:e,onRender:r,handleStepClick:i,disabled:t}=this,l=T(this.$slots.default,c=>{const d=c||this.description;return d?n("div",{class:`${e}-step-content__description`},d):null});return r==null||r(),n("div",{class:[`${e}-step`,t&&`${e}-step--disabled`,!t&&i&&`${e}-step--clickable`,this.themeClass,l&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:i},n("div",{class:`${e}-step-indicator`},n("div",{class:`${e}-step-indicator-slot`},n(oe,null,{default:()=>T(this.$slots.icon,c=>{const{mergedStatus:d,stepsSlots:v}=this;return d==="finish"||d==="error"?d==="finish"?n(F,{clsPrefix:e,key:"finish"},{default:()=>I(v["finish-icon"],()=>[n(fe,null)])}):d==="error"?n(F,{clsPrefix:e,key:"error"},{default:()=>I(v["error-icon"],()=>[n(he,null)])}):null:c||n("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?n("div",{class:`${e}-step-splitor`}):null),n("div",{class:`${e}-step-content`},n("div",{class:`${e}-step-content-header`},n("div",{class:`${e}-step-content-header__title`},I(this.$slots.title,()=>[this.title])),this.vertical?null:n("div",{class:`${e}-step-splitor`})),l))}}),k=$({__name:"CSteps",props:{steps:{},current:{},status:{},size:{default:"medium"},vertical:{type:Boolean,default:!1}},emits:["update:current"],setup(e,{emit:r}){const i=r;return(t,l)=>(z(),N(R(Ce),ee({class:"c-steps",current:t.current,status:t.status,size:t.size,vertical:t.vertical},t.$attrs,{"onUpdate:current":l[0]||(l[0]=c=>i("update:current",c))}),{"finish-icon":S(()=>[y(t.$slots,"finish-icon")]),"error-icon":S(()=>[y(t.$slots,"error-icon")]),default:S(()=>[(z(!0),te(re,null,ie(t.steps,(c,d)=>(z(),N(R(Ie),{key:d,disabled:c.isDisabled,title:c.title,description:c.description},null,8,["disabled","title","description"]))),128)),y(t.$slots,"default")]),_:3},16,["current","status","size","vertical"]))}});k.__docgenInfo={exportName:"default",displayName:"CSteps",description:"",tags:{},props:[{name:"steps",description:"List of steps to be displayed.",required:!0,type:{name:"Array",elements:[{name:"Step"}]}},{name:"current",description:"Currently active step index.",required:!0,type:{name:"number"}},{name:"status",description:"Steps status. Options are 'process', 'finish', 'error' or 'wait'",required:!0,type:{name:"StepStatus"}},{name:"size",description:"Size of the steps. Options are 'small' and 'medium'.",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"vertical",description:"Wheather steps are aligned vertically.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:current",type:{names:["number"]},description:"Callback on currently active step index changed. If it's set, step can be switched by click."}],slots:[{name:"default"},{name:"finish-icon"},{name:"error-icon"}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CSteps/CSteps.vue"]};const rt={title:"Components/Steps",component:k,tags:["autodocs"],argTypes:{current:{control:!1},status:{options:["process","finish","error","wait"]},steps:{control:!1},size:{options:["small","medium"]},default:{control:!1,description:"Default slot"},"finish-icon":{control:!1,description:"'finish' status button deploy."},"error-icon":{control:!1,description:"'error' status button deploy."},"onUpdate:current":{table:{disable:!0}}},parameters:{docs:{description:{component:"**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/steps) but has additional property steps**"}}},render:e=>({components:{CSteps:k,CButton:ge,CIcon:be},setup(){const r=ne(1),i=h(()=>[{title:"I Me Mine",description:""},{title:"Let It Be",description:""},{title:"Come Together",description:""},{title:"Something",description:""}]);function t(){r.value<4&&(r.value+=1)}function l(){r.value>1&&(r.value-=1)}return{args:e,currentStep:r,steps:i,goNext:t,goBack:l}},template:`
      <CSteps
        :steps="steps"
        :current="currentStep"
        :status="args.status"
        :size="args.size"
        :vertical="args.vertical"
        @update:current="args['onUpdate:current']"
        style="margin-bottom: 30px"
      />
      <div>
        <div 
          v-if="currentStep === 1"
        >
          All through the day, I me mine I me mine, I me mine
        </div>
        <div 
          v-else-if="currentStep === 2"
        >
          When I find myself in times of trouble Mother Mary comes to me
        </div>
        <div 
          v-else-if="currentStep === 3"
        >
          Here come old flat top He come grooving up slowly
        </div>
        <div 
          v-else-if="currentStep === 4"
        >
          Something in the way she moves Attracts me like no other lover
        </div>
      </div>
      <div style="margin-top: 30px; display: flex; gap: 15px;">
        <CButton 
          @click="() => goBack()"
          :disabled="currentStep === 1"
        >
          <CIcon
            :is-inline="true"
            name="arrow-back"
          />
        </CButton>
        <CButton 
          @click="() => goNext()"
          :disabled="currentStep === 4"
        >
          <CIcon
            :is-inline="true"
            name="arrow-forward"
          />
        </CButton>
      </div>
    `})},b={args:{current:1,status:"process","onUpdate:current":se()}};var U,_,E;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    current: 1,
    status: 'process',
    'onUpdate:current': fn()
  }
}`,...(E=(_=b.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const it=["Default"];export{b as Default,it as __namedExportsOrder,rt as default};
