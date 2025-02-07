import{d as ce,h,r as ae,p as te,t as le,c as P}from"./vue.esm-bundler-D4RNtN6S.js";import{u as se}from"./use-rtl-DB_faxJd.js";import{n as ie,o as t,r as g,p as z,f as y,k as M,j as de,l as he,s as c}from"./light-DsB5ODev.js";import{r as I}from"./resolve-slot-BBjw-So6.js";import{N as ge}from"./Close-MwAQiULY.js";import{t as be}from"./light-BLNTlX85.js";import{g as ue}from"./index-Xn0jilRV.js";import{u as ve}from"./use-css-vars-class-BoK1eXI1.js";import{c as _}from"./color-to-class-B0iQgAn2.js";import{c as fe}from"./call-f2ri57Kd.js";const ke={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Ce=ie("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[t("strong",`
 font-weight: var(--n-font-weight-strong);
 `),g("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),g("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),g("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),g("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),t("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[g("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),g("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),t("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),t("icon, avatar",[t("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),t("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),t("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[z("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[z("checked","color: var(--n-text-color-pressed-checkable);")])]),t("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),me=Object.assign(Object.assign(Object.assign({},M.props),ke),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),pe=de("n-tag"),Te=ce({name:"Tag",props:me,slots:Object,setup(r){const s=ae(null),{mergedBorderedRef:o,mergedClsPrefixRef:b,inlineThemeDisabled:u,mergedRtlRef:B}=he(r),f=M("Tag","-tag",Ce,be,r,b);te(pe,{roundRef:le(r,"round")});function v(){if(!r.disabled&&r.checkable){const{checked:e,onCheckedChange:n,onUpdateChecked:d,"onUpdate:checked":l}=r;d&&d(!e),l&&l(!e),n&&n(!e)}}function k(e){if(r.triggerClickOnClose||e.stopPropagation(),!r.disabled){const{onClose:n}=r;n&&fe(n,e)}}const C={setTextContent(e){const{value:n}=s;n&&(n.textContent=e)}},m=se("Tag",B,b),a=P(()=>{const{type:e,size:n,color:{color:d,textColor:l}={}}=r,{common:{cubicBezierEaseInOut:p},self:{padding:T,closeMargin:j,borderRadius:w,opacityDisabled:O,textColorCheckable:S,textColorHoverCheckable:F,textColorPressedCheckable:H,textColorChecked:N,colorCheckable:E,colorHoverCheckable:U,colorPressedCheckable:D,colorChecked:K,colorCheckedHover:V,colorCheckedPressed:W,closeBorderRadius:A,fontWeightStrong:L,[c("colorBordered",e)]:q,[c("closeSize",n)]:G,[c("closeIconSize",n)]:J,[c("fontSize",n)]:Q,[c("height",n)]:$,[c("color",e)]:X,[c("textColor",e)]:Y,[c("border",e)]:Z,[c("closeIconColor",e)]:R,[c("closeIconColorHover",e)]:ee,[c("closeIconColorPressed",e)]:oe,[c("closeColorHover",e)]:re,[c("closeColorPressed",e)]:ne}}=f.value,x=ue(j);return{"--n-font-weight-strong":L,"--n-avatar-size-override":`calc(${$} - 8px)`,"--n-bezier":p,"--n-border-radius":w,"--n-border":Z,"--n-close-icon-size":J,"--n-close-color-pressed":ne,"--n-close-color-hover":re,"--n-close-border-radius":A,"--n-close-icon-color":R,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":R,"--n-close-margin-top":x.top,"--n-close-margin-right":x.right,"--n-close-margin-bottom":x.bottom,"--n-close-margin-left":x.left,"--n-close-size":G,"--n-color":d||(o.value?q:X),"--n-color-checkable":E,"--n-color-checked":K,"--n-color-checked-hover":V,"--n-color-checked-pressed":W,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":D,"--n-font-size":Q,"--n-height":$,"--n-opacity-disabled":O,"--n-padding":T,"--n-text-color":l||Y,"--n-text-color-checkable":S,"--n-text-color-checked":N,"--n-text-color-hover-checkable":F,"--n-text-color-pressed-checkable":H}}),i=u?ve("tag",P(()=>{let e="";const{type:n,size:d,color:{color:l,textColor:p}={}}=r;return e+=n[0],e+=d[0],l&&(e+=`a${_(l)}`),p&&(e+=`b${_(p)}`),o.value&&(e+="c"),e}),a,r):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:m,mergedClsPrefix:b,contentRef:s,mergedBordered:o,handleClick:v,handleCloseClick:k,cssVars:u?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){var r,s;const{mergedClsPrefix:o,rtlEnabled:b,closable:u,color:{borderColor:B}={},round:f,onRender:v,$slots:k}=this;v==null||v();const C=I(k.avatar,a=>a&&h("div",{class:`${o}-tag__avatar`},a)),m=I(k.icon,a=>a&&h("div",{class:`${o}-tag__icon`},a));return h("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:b,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:f,[`${o}-tag--avatar`]:C,[`${o}-tag--icon`]:m,[`${o}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||C,h("span",{class:`${o}-tag__content`,ref:"contentRef"},(s=(r=this.$slots).default)===null||s===void 0?void 0:s.call(r)),!this.checkable&&u?h(ge,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:f,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?h("div",{class:`${o}-tag__border`,style:{borderColor:B}}):null)}});export{Te as N,pe as t};
