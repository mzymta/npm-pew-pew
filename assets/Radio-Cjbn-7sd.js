import{d as N,h as s,c as h}from"./vue.esm-bundler-D4RNtN6S.js";import{u as O}from"./use-rtl-DB_faxJd.js";import{n as c,o as t,r as o,p as j,f as l,k as f,s as u,l as H}from"./light-DsB5ODev.js";import{r as T,s as V}from"./use-radio-DXL91K7l.js";import{r as L}from"./resolve-slot-BBjw-So6.js";import{r as M}from"./light-Cio_vDsU.js";import{u as W}from"./use-css-vars-class-BoK1eXI1.js";const K=c("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[t("checked",[o("dot",`
 background-color: var(--n-color-active);
 `)]),o("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),c("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),o("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[l("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),t("checked",{boxShadow:"var(--n-box-shadow-active)"},[l("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),o("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),j("disabled",`
 cursor: pointer;
 `,[l("&:hover",[o("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),t("focus",[l("&:not(:active)",[o("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),t("disabled",`
 cursor: not-allowed;
 `,[o("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[l("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),t("checked",`
 opacity: 1;
 `)]),o("label",{color:"var(--n-text-color-disabled)"}),c("radio-input",`
 cursor: not-allowed;
 `)])]),Y=Object.assign(Object.assign({},f.props),T),ee=N({name:"Radio",props:Y,setup(a){const e=V(a),i=f("Radio","-radio",K,M,a,e.mergedClsPrefix),d=h(()=>{const{mergedSize:{value:b}}=e,{common:{cubicBezierEaseInOut:x},self:{boxShadow:g,boxShadowActive:w,boxShadowDisabled:z,boxShadowFocus:k,boxShadowHover:C,color:R,colorDisabled:S,colorActive:y,textColor:$,textColorDisabled:_,dotColorActive:D,dotColorDisabled:P,labelPadding:B,labelLineHeight:E,labelFontWeight:A,[u("fontSize",b)]:F,[u("radioSize",b)]:I}}=i.value;return{"--n-bezier":x,"--n-label-line-height":E,"--n-label-font-weight":A,"--n-box-shadow":g,"--n-box-shadow-active":w,"--n-box-shadow-disabled":z,"--n-box-shadow-focus":k,"--n-box-shadow-hover":C,"--n-color":R,"--n-color-active":y,"--n-color-disabled":S,"--n-dot-color-active":D,"--n-dot-color-disabled":P,"--n-font-size":F,"--n-radio-size":I,"--n-text-color":$,"--n-text-color-disabled":_,"--n-label-padding":B}}),{inlineThemeDisabled:n,mergedClsPrefixRef:p,mergedRtlRef:v}=H(a),m=O("Radio",v,p),r=n?W("radio",h(()=>e.mergedSize.value[0]),d,a):void 0;return Object.assign(e,{rtlEnabled:m,cssVars:n?void 0:d,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender})},render(){const{$slots:a,mergedClsPrefix:e,onRender:i,label:d}=this;return i==null||i(),s("label",{class:[`${e}-radio`,this.themeClass,this.rtlEnabled&&`${e}-radio--rtl`,this.mergedDisabled&&`${e}-radio--disabled`,this.renderSafeChecked&&`${e}-radio--checked`,this.focus&&`${e}-radio--focus`],style:this.cssVars},s("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),s("div",{class:`${e}-radio__dot-wrapper`}," ",s("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]})),L(a.default,n=>!n&&!d?null:s("div",{ref:"labelRef",class:`${e}-radio__label`},n||d)))}});export{ee as N};
