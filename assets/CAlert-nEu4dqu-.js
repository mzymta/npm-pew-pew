import{d as z,h as t,z as F,c as C,r as M,v as q,y as h,A as O,x as D,m as p}from"./vue.esm-bundler-D4RNtN6S.js";import{u as W}from"./use-rtl-DB_faxJd.js";import{f as K}from"./fade-in-height-expand.cssr-BiZZSMP_.js";import{n as u,r as a,o as b,f as G,k as w,l as J,s as l}from"./light-DsB5ODev.js";import{N as Q}from"./Close-MwAQiULY.js";import{a as U,r as X}from"./resolve-slot-BBjw-So6.js";import{N as Y}from"./Icon-CrmNSR1a.js";import{E as Z,I as ee,S as re}from"./Success-Dpq3D3vw.js";import{W as oe}from"./Warning-Cd2ybYWr.js";import{N as ne}from"./FadeInExpandTransition-LhRfDe22.js";import{a as te}from"./light-BYaGoqh_.js";import{g as ae}from"./index-Xn0jilRV.js";import{u as se}from"./use-css-vars-class-BoK1eXI1.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ie=u("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[a("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),b("closable",[u("alert-body",[a("title",`
 padding-right: 24px;
 `)])]),a("icon",{color:"var(--n-icon-color)"}),u("alert-body",{padding:"var(--n-padding)"},[a("title",{color:"var(--n-title-text-color)"}),a("content",{color:"var(--n-content-text-color)"})]),K({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),a("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),a("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),b("show-icon",[u("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),b("right-adjust",[u("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),u("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[a("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[G("& +",[a("content",{marginTop:"9px"})])]),a("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),a("icon",{transition:"color .3s var(--n-bezier)"})]),ce=Object.assign(Object.assign({},w.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),de=z({name:"Alert",inheritAttrs:!1,props:ce,slots:Object,setup(o){const{mergedClsPrefixRef:e,mergedBorderedRef:i,inlineThemeDisabled:n,mergedRtlRef:c}=J(o),m=w("Alert","-alert",ie,te,o,e),A=W("Alert",c,e),v=C(()=>{const{common:{cubicBezierEaseInOut:d},self:r}=m.value,{fontSize:R,borderRadius:$,titleFontWeight:B,lineHeight:_,iconSize:T,iconMargin:y,iconMarginRtl:k,closeIconSize:L,closeBorderRadius:P,closeSize:S,closeMargin:E,closeMarginRtl:N,padding:V}=r,{type:s}=o,{left:j,right:H}=ae(y);return{"--n-bezier":d,"--n-color":r[l("color",s)],"--n-close-icon-size":L,"--n-close-border-radius":P,"--n-close-color-hover":r[l("closeColorHover",s)],"--n-close-color-pressed":r[l("closeColorPressed",s)],"--n-close-icon-color":r[l("closeIconColor",s)],"--n-close-icon-color-hover":r[l("closeIconColorHover",s)],"--n-close-icon-color-pressed":r[l("closeIconColorPressed",s)],"--n-icon-color":r[l("iconColor",s)],"--n-border":r[l("border",s)],"--n-title-text-color":r[l("titleTextColor",s)],"--n-content-text-color":r[l("contentTextColor",s)],"--n-line-height":_,"--n-border-radius":$,"--n-font-size":R,"--n-title-font-weight":B,"--n-icon-size":T,"--n-icon-margin":y,"--n-icon-margin-rtl":k,"--n-close-size":S,"--n-close-margin":E,"--n-close-margin-rtl":N,"--n-padding":V,"--n-icon-margin-left":j,"--n-icon-margin-right":H}}),f=n?se("alert",C(()=>o.type[0]),v,o):void 0,g=M(!0),x=()=>{const{onAfterLeave:d,onAfterHide:r}=o;d&&d(),r&&r()};return{rtlEnabled:A,mergedClsPrefix:e,mergedBordered:i,visible:g,handleCloseClick:()=>{var d;Promise.resolve((d=o.onClose)===null||d===void 0?void 0:d.call(o)).then(r=>{r!==!1&&(g.value=!1)})},handleAfterLeave:()=>{x()},mergedTheme:m,cssVars:n?void 0:v,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var o;return(o=this.onRender)===null||o===void 0||o.call(this),t(ne,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:i}=this,n={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?t("div",Object.assign({},F(this.$attrs,n)),this.closable&&t(Q,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&t("div",{class:`${e}-alert__border`}),this.showIcon&&t("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},U(i.icon,()=>[t(Y,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return t(re,null);case"info":return t(ee,null);case"warning":return t(oe,null);case"error":return t(Z,null);default:return null}}})])),t("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},X(i.header,c=>{const m=c||this.title;return m?t("div",{class:`${e}-alert-body__title`},m):null}),i.default&&t("div",{class:`${e}-alert-body__content`},i))):null}})}}),I=z({__name:"CAlert",props:{bordered:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},title:{default:void 0},type:{default:"default"}},emits:["afterLeave","close"],setup(o,{emit:e}){const i=e;return(n,c)=>(D(),q(O(de),{class:"c-alert",bordered:n.bordered,closable:n.closable,"show-icon":n.showIcon,title:n.title,type:n.type,onAfterLeave:c[0]||(c[0]=()=>i("afterLeave")),onClose:c[1]||(c[1]=()=>i("close"))},{default:h(()=>[p(n.$slots,"default",{},void 0,!0)]),header:h(()=>[p(n.$slots,"header",{},void 0,!0)]),icon:h(()=>[p(n.$slots,"icon",{},void 0,!0)]),_:3},8,["bordered","closable","show-icon","title","type"]))}}),$e=le(I,[["__scopeId","data-v-a66ffc58"]]);I.__docgenInfo={exportName:"default",displayName:"CAlert",description:"",tags:{},props:[{name:"bordered",description:"Determines if the alert should have a border.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closable",description:"Determines if the alert can be closed by the user.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showIcon",description:"Determines if an icon should be displayed in the alert.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"title",description:"The title of the alert.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"type",description:"The type of alert.",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'default'"}}],events:[{name:"afterLeave"},{name:"close"}],slots:[{name:"default"},{name:"header"},{name:"icon"}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CAlert/CAlert.vue"]};export{$e as C};
