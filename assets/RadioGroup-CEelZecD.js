import{d as Q,h as $,r as I,t as V,p as W,c as S}from"./vue.esm-bundler-D4RNtN6S.js";import{u as X}from"./use-rtl-DB_faxJd.js";import{n as y,r as l,o as p,f as w,p as _,k as G,l as Y,s as T}from"./light-DsB5ODev.js";import{a as Z}from"./use-radio-DXL91K7l.js";import{f as oo}from"./flatten-B94A2huW.js";import{g as eo}from"./get-slot-Bk_rJcZu.js";import{u as to}from"./use-form-item-BaX4b55j.js";import{r as ro}from"./light-Cio_vDsU.js";import{u as no}from"./use-merged-state-CUYpy2WA.js";import{u as ao}from"./use-css-vars-class-BoK1eXI1.js";import{c as E}from"./call-f2ri57Kd.js";const io=y("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[l("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[p("checked",{backgroundColor:"var(--n-button-border-color-active)"}),p("disabled",{opacity:"var(--n-opacity-disabled)"})]),p("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[y("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),l("splitor",{height:"var(--n-height)"})]),y("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[y("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),l("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),w("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[l("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),w("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[l("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),_("disabled",`
 cursor: pointer;
 `,[w("&:hover",[l("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),_("checked",{color:"var(--n-button-text-color-hover)"})]),p("focus",[w("&:not(:active)",[l("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),p("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),p("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function so(o,a,e){var s;const t=[];let c=!1;for(let i=0;i<o.length;++i){const d=o[i],u=(s=d.type)===null||s===void 0?void 0:s.name;u==="RadioButton"&&(c=!0);const h=d.props;if(u!=="RadioButton"){t.push(d);continue}if(i===0)t.push(d);else{const v=t[t.length-1].props,m=a===v.value,f=v.disabled,x=a===h.value,g=h.disabled,z=(m?2:0)+(f?0:1),k=(x?2:0)+(g?0:1),B={[`${e}-radio-group__splitor--disabled`]:f,[`${e}-radio-group__splitor--checked`]:m},F={[`${e}-radio-group__splitor--disabled`]:g,[`${e}-radio-group__splitor--checked`]:x},R=z<k?F:B;t.push($("div",{class:[`${e}-radio-group__splitor`,R]}),d)}}return{children:t,isButtonGroup:c}}const uo=Object.assign(Object.assign({},G.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Co=Q({name:"RadioGroup",props:uo,setup(o){const a=I(null),{mergedSizeRef:e,mergedDisabledRef:s,nTriggerFormChange:t,nTriggerFormInput:c,nTriggerFormBlur:i,nTriggerFormFocus:d}=to(o),{mergedClsPrefixRef:u,inlineThemeDisabled:h,mergedRtlRef:v}=Y(o),m=G("Radio","-radio-group",io,ro,o,u),f=I(o.defaultValue),x=V(o,"value"),g=no(x,f);function z(r){const{onUpdateValue:n,"onUpdate:value":C}=o;n&&E(n,r),C&&E(C,r),f.value=r,t(),c()}function k(r){const{value:n}=a;n&&(n.contains(r.relatedTarget)||d())}function B(r){const{value:n}=a;n&&(n.contains(r.relatedTarget)||i())}W(Z,{mergedClsPrefixRef:u,nameRef:V(o,"name"),valueRef:g,disabledRef:s,mergedSizeRef:e,doUpdateValue:z});const F=X("Radio",v,u),R=S(()=>{const{value:r}=e,{common:{cubicBezierEaseInOut:n},self:{buttonBorderColor:C,buttonBorderColorActive:U,buttonBorderRadius:A,buttonBoxShadow:D,buttonBoxShadowFocus:H,buttonBoxShadowHover:N,buttonColor:P,buttonColorActive:j,buttonTextColor:M,buttonTextColorActive:O,buttonTextColorHover:K,opacityDisabled:L,[T("buttonHeight",r)]:q,[T("fontSize",r)]:J}}=m.value;return{"--n-font-size":J,"--n-bezier":n,"--n-button-border-color":C,"--n-button-border-color-active":U,"--n-button-border-radius":A,"--n-button-box-shadow":D,"--n-button-box-shadow-focus":H,"--n-button-box-shadow-hover":N,"--n-button-color":P,"--n-button-color-active":j,"--n-button-text-color":M,"--n-button-text-color-hover":K,"--n-button-text-color-active":O,"--n-height":q,"--n-opacity-disabled":L}}),b=h?ao("radio-group",S(()=>e.value[0]),R,o):void 0;return{selfElRef:a,rtlEnabled:F,mergedClsPrefix:u,mergedValue:g,handleFocusout:B,handleFocusin:k,cssVars:h?void 0:R,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var o;const{mergedValue:a,mergedClsPrefix:e,handleFocusin:s,handleFocusout:t}=this,{children:c,isButtonGroup:i}=so(oo(eo(this)),a,e);return(o=this.onRender)===null||o===void 0||o.call(this),$("div",{onFocusin:s,onFocusout:t,ref:"selfElRef",class:[`${e}-radio-group`,this.rtlEnabled&&`${e}-radio-group--rtl`,this.themeClass,i&&`${e}-radio-group--button-group`],style:this.cssVars},c)}});export{Co as N};
