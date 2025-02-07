import{d as Xe,h as a,F as Mn,r as f,t as te,c as F,w as Oe,n as Pn,q as In,e as _n,a as Bn,Q as zn,R as $n}from"./vue.esm-bundler-D4RNtN6S.js";import{f as kn}from"./fade-in-scale-up.cssr-DKJ6UU5J.js";import{f as de,n as b,r as x,p as Ke,o as ne,l as Ze,k as Fe,s as He}from"./light-DsB5ODev.js";import{u as An,N as En,p as je,f as Dn,c as Vn,a as Wn}from"./utils-CgJXxSjZ.js";import{u as Ue,B as jn,V as Ln,a as Nn}from"./Follower-DXtmSYJu.js";import{W as Un}from"./Scrollbar-BbWWFAp8.js";import{N as Kn}from"./Suffix-BjoWbega.js";import{N as Le}from"./Tag-C1qgvQqN.js";import{V as qe}from"./index-vIaLEAVY.js";import{N as Hn}from"./Popover-axeHrzq9.js";import{g as Qe}from"./attribute-Cz32yFEB.js";import{r as Ce}from"./render-CafAiG2R.js";import{u as qn}from"./use-rtl-DB_faxJd.js";import{i as Qn,s as Yn}from"./light-BhikxYuE.js";import{g as Ye}from"./index-Xn0jilRV.js";import{u as en}from"./use-css-vars-class-BoK1eXI1.js";import{c as Ge}from"./index-CIE75m1q.js";import{u as Je}from"./use-merged-state-CUYpy2WA.js";import{u as Gn}from"./use-compitable-B7ANSQOo.js";import{c as Jn}from"./create-BYUmyaO5.js";import{u as Xn}from"./use-locale-CfrJhm3r.js";import{u as Zn}from"./use-form-item-BaX4b55j.js";import{a as et}from"./icon-switch.cssr-CS-aOSlJ.js";import{g as nt}from"./get-precise-event-target-DhO46Lpt.js";import{h as Ne}from"./happens-in-CM8LO42l.js";import{m as tt}from"./index-DsSU6HIH.js";import{c as N}from"./call-f2ri57Kd.js";const lt=de([b("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[b("base-loading",`
 color: var(--n-loading-color);
 `),b("base-selection-tags","min-height: var(--n-height);"),x("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),x("state-border",`
 z-index: 1;
 border-color: #0000;
 `),b("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[x("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),b("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[x("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),b("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[x("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),b("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[b("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[x("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),x("render-label",`
 color: var(--n-text-color);
 `)]),Ke("disabled",[de("&:hover",[x("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ne("focus",[x("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ne("active",[x("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),b("base-selection-label","background-color: var(--n-color-active);"),b("base-selection-tags","background-color: var(--n-color-active);")])]),ne("disabled","cursor: not-allowed;",[x("arrow",`
 color: var(--n-arrow-color-disabled);
 `),b("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[b("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),x("render-label",`
 color: var(--n-text-color-disabled);
 `)]),b("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),b("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),b("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[x("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),x("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ne(`${e}-status`,[x("state-border",`border: var(--n-border-${e});`),Ke("disabled",[de("&:hover",[x("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ne("active",[x("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),b("base-selection-label",`background-color: var(--n-color-active-${e});`),b("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ne("focus",[x("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),b("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),b("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[de("&:last-child","padding-right: 0;"),b("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[x("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ot=Xe({name:"InternalSelection",props:Object.assign(Object.assign({},Fe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:T,mergedRtlRef:z}=Ze(e),v=qn("InternalSelection",z,T),h=f(null),S=f(null),$=f(null),i=f(null),k=f(null),M=f(null),O=f(null),I=f(null),y=f(null),C=f(null),A=f(!1),_=f(!1),W=f(!1),E=Fe("InternalSelection","-internal-selection",lt,Qn,e,te(e,"clsPrefix")),B=F(()=>e.clearable&&!e.disabled&&(W.value||e.active)),P=F(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ce(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),R=F(()=>{const t=e.selectedOption;if(t)return t[e.labelField]}),p=F(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function U(){var t;const{value:o}=h;if(o){const{value:g}=S;g&&(g.style.width=`${o.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=y.value)===null||t===void 0||t.sync({showAllItemsBeforeCalculate:!1})))}}function j(){const{value:t}=C;t&&(t.style.display="none")}function le(){const{value:t}=C;t&&(t.style.display="inline-block")}Oe(te(e,"active"),t=>{t||j()}),Oe(te(e,"pattern"),()=>{e.multiple&&Pn(U)});function oe(t){const{onFocus:o}=e;o&&o(t)}function K(t){const{onBlur:o}=e;o&&o(t)}function H(t){const{onDeleteOption:o}=e;o&&o(t)}function Y(t){const{onClear:o}=e;o&&o(t)}function m(t){const{onPatternInput:o}=e;o&&o(t)}function ue(t){var o;(!t.relatedTarget||!(!((o=$.value)===null||o===void 0)&&o.contains(t.relatedTarget)))&&oe(t)}function ce(t){var o;!((o=$.value)===null||o===void 0)&&o.contains(t.relatedTarget)||K(t)}function X(t){Y(t)}function Te(){W.value=!0}function Z(){W.value=!1}function Se(t){!e.active||!e.filterable||t.target!==S.value&&t.preventDefault()}function G(t){H(t)}const q=f(!1);function Re(t){if(t.key==="Backspace"&&!q.value&&!e.pattern.length){const{selectedOptions:o}=e;o!=null&&o.length&&G(o[o.length-1])}}let ie=null;function Me(t){const{value:o}=h;if(o){const g=t.target.value;o.textContent=g,U()}e.ignoreComposition&&q.value?ie=t:m(t)}function Pe(){q.value=!0}function fe(){q.value=!1,e.ignoreComposition&&m(ie),ie=null}function he(t){var o;_.value=!0,(o=e.onPatternFocus)===null||o===void 0||o.call(e,t)}function J(t){var o;_.value=!1,(o=e.onPatternBlur)===null||o===void 0||o.call(e,t)}function D(){var t,o;if(e.filterable)_.value=!1,(t=M.value)===null||t===void 0||t.blur(),(o=S.value)===null||o===void 0||o.blur();else if(e.multiple){const{value:g}=i;g==null||g.blur()}else{const{value:g}=k;g==null||g.blur()}}function be(){var t,o,g;e.filterable?(_.value=!1,(t=M.value)===null||t===void 0||t.focus()):e.multiple?(o=i.value)===null||o===void 0||o.focus():(g=k.value)===null||g===void 0||g.focus()}function ee(){const{value:t}=S;t&&(le(),t.focus())}function Ie(){const{value:t}=S;t&&t.blur()}function _e(t){const{value:o}=O;o&&o.setTextContent(`+${t}`)}function Be(){const{value:t}=I;return t}function ze(){return S.value}let re=null;function ae(){re!==null&&window.clearTimeout(re)}function $e(){e.active||(ae(),re=window.setTimeout(()=>{p.value&&(A.value=!0)},100))}function ke(){ae()}function Ae(t){t||(ae(),A.value=!1)}Oe(p,t=>{t||(A.value=!1)}),In(()=>{_n(()=>{const t=M.value;t&&(e.disabled?t.removeAttribute("tabindex"):t.tabIndex=_.value?-1:0)})}),An($,e.onResize);const{inlineThemeDisabled:ve}=e,se=F(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:o},self:{fontWeight:g,borderRadius:Ee,color:De,placeholderColor:ge,textColor:pe,paddingSingle:me,paddingMultiple:Ve,caretColor:We,colorDisabled:we,textColorDisabled:Q,placeholderColorDisabled:n,colorActive:l,boxShadowFocus:r,boxShadowActive:c,boxShadowHover:d,border:s,borderFocus:u,borderHover:w,borderActive:L,arrowColor:nn,arrowColorDisabled:tn,loadingColor:ln,colorActiveWarning:on,boxShadowFocusWarning:rn,boxShadowActiveWarning:an,boxShadowHoverWarning:sn,borderWarning:dn,borderFocusWarning:un,borderHoverWarning:cn,borderActiveWarning:fn,colorActiveError:hn,boxShadowFocusError:bn,boxShadowActiveError:vn,boxShadowHoverError:gn,borderError:pn,borderFocusError:mn,borderHoverError:wn,borderActiveError:xn,clearColor:yn,clearColorHover:Cn,clearColorPressed:On,clearSize:Fn,arrowSize:Tn,[He("height",t)]:Sn,[He("fontSize",t)]:Rn}}=E.value,xe=Ye(me),ye=Ye(Ve);return{"--n-bezier":o,"--n-border":s,"--n-border-active":L,"--n-border-focus":u,"--n-border-hover":w,"--n-border-radius":Ee,"--n-box-shadow-active":c,"--n-box-shadow-focus":r,"--n-box-shadow-hover":d,"--n-caret-color":We,"--n-color":De,"--n-color-active":l,"--n-color-disabled":we,"--n-font-size":Rn,"--n-height":Sn,"--n-padding-single-top":xe.top,"--n-padding-multiple-top":ye.top,"--n-padding-single-right":xe.right,"--n-padding-multiple-right":ye.right,"--n-padding-single-left":xe.left,"--n-padding-multiple-left":ye.left,"--n-padding-single-bottom":xe.bottom,"--n-padding-multiple-bottom":ye.bottom,"--n-placeholder-color":ge,"--n-placeholder-color-disabled":n,"--n-text-color":pe,"--n-text-color-disabled":Q,"--n-arrow-color":nn,"--n-arrow-color-disabled":tn,"--n-loading-color":ln,"--n-color-active-warning":on,"--n-box-shadow-focus-warning":rn,"--n-box-shadow-active-warning":an,"--n-box-shadow-hover-warning":sn,"--n-border-warning":dn,"--n-border-focus-warning":un,"--n-border-hover-warning":cn,"--n-border-active-warning":fn,"--n-color-active-error":hn,"--n-box-shadow-focus-error":bn,"--n-box-shadow-active-error":vn,"--n-box-shadow-hover-error":gn,"--n-border-error":pn,"--n-border-focus-error":mn,"--n-border-hover-error":wn,"--n-border-active-error":xn,"--n-clear-size":Fn,"--n-clear-color":yn,"--n-clear-color-hover":Cn,"--n-clear-color-pressed":On,"--n-arrow-size":Tn,"--n-font-weight":g}}),V=ve?en("internal-selection",F(()=>e.size[0]),se,e):void 0;return{mergedTheme:E,mergedClearable:B,mergedClsPrefix:T,rtlEnabled:v,patternInputFocused:_,filterablePlaceholder:P,label:R,selected:p,showTagsPanel:A,isComposing:q,counterRef:O,counterWrapperRef:I,patternInputMirrorRef:h,patternInputRef:S,selfRef:$,multipleElRef:i,singleElRef:k,patternInputWrapperRef:M,overflowRef:y,inputTagElRef:C,handleMouseDown:Se,handleFocusin:ue,handleClear:X,handleMouseEnter:Te,handleMouseLeave:Z,handleDeleteOption:G,handlePatternKeyDown:Re,handlePatternInputInput:Me,handlePatternInputBlur:J,handlePatternInputFocus:he,handleMouseEnterCounter:$e,handleMouseLeaveCounter:ke,handleFocusout:ce,handleCompositionEnd:fe,handleCompositionStart:Pe,onPopoverUpdateShow:Ae,focus:be,focusInput:ee,blur:D,blurInput:Ie,updateCounter:_e,getCounter:Be,getTail:ze,renderLabel:e.renderLabel,cssVars:ve?void 0:se,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender}},render(){const{status:e,multiple:T,size:z,disabled:v,filterable:h,maxTagCount:S,bordered:$,clsPrefix:i,ellipsisTagPopoverProps:k,onRender:M,renderTag:O,renderLabel:I}=this;M==null||M();const y=S==="responsive",C=typeof S=="number",A=y||C,_=a(Un,null,{default:()=>a(Kn,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var E,B;return(B=(E=this.$slots).arrow)===null||B===void 0?void 0:B.call(E)}})});let W;if(T){const{labelField:E}=this,B=m=>a("div",{class:`${i}-base-selection-tag-wrapper`,key:m.value},O?O({option:m,handleClose:()=>{this.handleDeleteOption(m)}}):a(Le,{size:z,closable:!m.disabled,disabled:v,onClose:()=>{this.handleDeleteOption(m)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>I?I(m,!0):Ce(m[E],m,!0)})),P=()=>(C?this.selectedOptions.slice(0,S):this.selectedOptions).map(B),R=h?a("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:v,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,p=y?()=>a("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(Le,{size:z,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:v})):void 0;let U;if(C){const m=this.selectedOptions.length-S;m>0&&(U=a("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},a(Le,{size:z,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:v},{default:()=>`+${m}`})))}const j=y?h?a(qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:P,counter:p,tail:()=>R}):a(qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:P,counter:p}):C&&U?P().concat(U):P(),le=A?()=>a("div",{class:`${i}-base-selection-popover`},y?P():this.selectedOptions.map(B)):void 0,oe=A?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},k):null,H=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},a("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,Y=h?a("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},j,y?null:R,_):a("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:v?void 0:0},j,_);W=a(Mn,null,A?a(Hn,Object.assign({},oe,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Y,default:le}):Y,H)}else if(h){const E=this.pattern||this.isComposing,B=this.active?!E:!this.selected,P=this.active?!1:this.selected;W=a("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`,title:this.patternInputFocused?void 0:Qe(this.label)},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:v,disabled:v,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),P?a("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},a("div",{class:`${i}-base-selection-overlay__wrapper`},O?O({option:this.selectedOption,handleClose:()=>{}}):I?I(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):null,B?a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,_)}else W=a("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${i}-base-selection-input`,title:Qe(this.label),key:"input"},a("div",{class:`${i}-base-selection-input__content`},O?O({option:this.selectedOption,handleClose:()=>{}}):I?I(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),_);return a("div",{ref:"selfRef",class:[`${i}-base-selection`,this.rtlEnabled&&`${i}-base-selection--rtl`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},W,$?a("div",{class:`${i}-base-selection__border`}):null,$?a("div",{class:`${i}-base-selection__state-border`}):null)}}),it=de([b("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),b("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[kn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),rt=Object.assign(Object.assign({},Fe.props),{to:Ue.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),$t=Xe({name:"Select",props:rt,slots:Object,setup(e){const{mergedClsPrefixRef:T,mergedBorderedRef:z,namespaceRef:v,inlineThemeDisabled:h}=Ze(e),S=Fe("Select","-select",it,Yn,e,T),$=f(e.defaultValue),i=te(e,"value"),k=Je(i,$),M=f(!1),O=f(""),I=Gn(e,["items","options"]),y=f([]),C=f([]),A=F(()=>C.value.concat(y.value).concat(I.value)),_=F(()=>{const{filter:n}=e;if(n)return n;const{labelField:l,valueField:r}=e;return(c,d)=>{if(!d)return!1;const s=d[l];if(typeof s=="string")return je(c,s);const u=d[r];return typeof u=="string"?je(c,u):typeof u=="number"?je(c,String(u)):!1}}),W=F(()=>{if(e.remote)return I.value;{const{value:n}=A,{value:l}=O;return!l.length||!e.filterable?n:Dn(n,_.value,l,e.childrenField)}}),E=F(()=>{const{valueField:n,childrenField:l}=e,r=Vn(n,l);return Jn(W.value,r)}),B=F(()=>Wn(A.value,e.valueField,e.childrenField)),P=f(!1),R=Je(te(e,"show"),P),p=f(null),U=f(null),j=f(null),{localeRef:le}=Xn("Select"),oe=F(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:le.value.placeholder}),K=[],H=f(new Map),Y=F(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:l,valueField:r}=e;return c=>({[l]:String(c),[r]:c})}return n===!1?!1:l=>Object.assign(n(l),{value:l})});function m(n){const l=e.remote,{value:r}=H,{value:c}=B,{value:d}=Y,s=[];return n.forEach(u=>{if(c.has(u))s.push(c.get(u));else if(l&&r.has(u))s.push(r.get(u));else if(d){const w=d(u);w&&s.push(w)}}),s}const ue=F(()=>{if(e.multiple){const{value:n}=k;return Array.isArray(n)?m(n):[]}return null}),ce=F(()=>{const{value:n}=k;return!e.multiple&&!Array.isArray(n)?n===null?null:m([n])[0]||null:null}),X=Zn(e),{mergedSizeRef:Te,mergedDisabledRef:Z,mergedStatusRef:Se}=X;function G(n,l){const{onChange:r,"onUpdate:value":c,onUpdateValue:d}=e,{nTriggerFormChange:s,nTriggerFormInput:u}=X;r&&N(r,n,l),d&&N(d,n,l),c&&N(c,n,l),$.value=n,s(),u()}function q(n){const{onBlur:l}=e,{nTriggerFormBlur:r}=X;l&&N(l,n),r()}function Re(){const{onClear:n}=e;n&&N(n)}function ie(n){const{onFocus:l,showOnFocus:r}=e,{nTriggerFormFocus:c}=X;l&&N(l,n),c(),r&&J()}function Me(n){const{onSearch:l}=e;l&&N(l,n)}function Pe(n){const{onScroll:l}=e;l&&N(l,n)}function fe(){var n;const{remote:l,multiple:r}=e;if(l){const{value:c}=H;if(r){const{valueField:d}=e;(n=ue.value)===null||n===void 0||n.forEach(s=>{c.set(s[d],s)})}else{const d=ce.value;d&&c.set(d[e.valueField],d)}}}function he(n){const{onUpdateShow:l,"onUpdate:show":r}=e;l&&N(l,n),r&&N(r,n),P.value=n}function J(){Z.value||(he(!0),P.value=!0,e.filterable&&me())}function D(){he(!1)}function be(){O.value="",C.value=K}const ee=f(!1);function Ie(){e.filterable&&(ee.value=!0)}function _e(){e.filterable&&(ee.value=!1,R.value||be())}function Be(){Z.value||(R.value?e.filterable?me():D():J())}function ze(n){var l,r;!((r=(l=j.value)===null||l===void 0?void 0:l.selfRef)===null||r===void 0)&&r.contains(n.relatedTarget)||(M.value=!1,q(n),D())}function re(n){ie(n),M.value=!0}function ae(){M.value=!0}function $e(n){var l;!((l=p.value)===null||l===void 0)&&l.$el.contains(n.relatedTarget)||(M.value=!1,q(n),D())}function ke(){var n;(n=p.value)===null||n===void 0||n.focus(),D()}function Ae(n){var l;R.value&&(!((l=p.value)===null||l===void 0)&&l.$el.contains(nt(n))||D())}function ve(n){if(!Array.isArray(n))return[];if(Y.value)return Array.from(n);{const{remote:l}=e,{value:r}=B;if(l){const{value:c}=H;return n.filter(d=>r.has(d)||c.has(d))}else return n.filter(c=>r.has(c))}}function se(n){V(n.rawNode)}function V(n){if(Z.value)return;const{tag:l,remote:r,clearFilterAfterSelect:c,valueField:d}=e;if(l&&!r){const{value:s}=C,u=s[0]||null;if(u){const w=y.value;w.length?w.push(u):y.value=[u],C.value=K}}if(r&&H.value.set(n[d],n),e.multiple){const s=ve(k.value),u=s.findIndex(w=>w===n[d]);if(~u){if(s.splice(u,1),l&&!r){const w=t(n[d]);~w&&(y.value.splice(w,1),c&&(O.value=""))}}else s.push(n[d]),c&&(O.value="");G(s,m(s))}else{if(l&&!r){const s=t(n[d]);~s?y.value=[y.value[s]]:y.value=K}pe(),D(),G(n[d],n)}}function t(n){return y.value.findIndex(r=>r[e.valueField]===n)}function o(n){R.value||J();const{value:l}=n.target;O.value=l;const{tag:r,remote:c}=e;if(Me(l),r&&!c){if(!l){C.value=K;return}const{onCreate:d}=e,s=d?d(l):{[e.labelField]:l,[e.valueField]:l},{valueField:u,labelField:w}=e;I.value.some(L=>L[u]===s[u]||L[w]===s[w])||y.value.some(L=>L[u]===s[u]||L[w]===s[w])?C.value=K:C.value=[s]}}function g(n){n.stopPropagation();const{multiple:l}=e;!l&&e.filterable&&D(),Re(),l?G([],[]):G(null,null)}function Ee(n){!Ne(n,"action")&&!Ne(n,"empty")&&!Ne(n,"header")&&n.preventDefault()}function De(n){Pe(n)}function ge(n){var l,r,c,d,s;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((l=p.value)===null||l===void 0)&&l.isComposing)){if(R.value){const u=(r=j.value)===null||r===void 0?void 0:r.getPendingTmNode();u?se(u):e.filterable||(D(),pe())}else if(J(),e.tag&&ee.value){const u=C.value[0];if(u){const w=u[e.valueField],{value:L}=k;e.multiple&&Array.isArray(L)&&L.includes(w)||V(u)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;R.value&&((c=j.value)===null||c===void 0||c.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;R.value?(d=j.value)===null||d===void 0||d.next():J();break;case"Escape":R.value&&(tt(n),D()),(s=p.value)===null||s===void 0||s.focus();break}}function pe(){var n;(n=p.value)===null||n===void 0||n.focus()}function me(){var n;(n=p.value)===null||n===void 0||n.focusInput()}function Ve(){var n;R.value&&((n=U.value)===null||n===void 0||n.syncPosition())}fe(),Oe(te(e,"options"),fe);const We={focus:()=>{var n;(n=p.value)===null||n===void 0||n.focus()},focusInput:()=>{var n;(n=p.value)===null||n===void 0||n.focusInput()},blur:()=>{var n;(n=p.value)===null||n===void 0||n.blur()},blurInput:()=>{var n;(n=p.value)===null||n===void 0||n.blurInput()}},we=F(()=>{const{self:{menuBoxShadow:n}}=S.value;return{"--n-menu-box-shadow":n}}),Q=h?en("select",void 0,we,e):void 0;return Object.assign(Object.assign({},We),{mergedStatus:Se,mergedClsPrefix:T,mergedBordered:z,namespace:v,treeMate:E,isMounted:et(),triggerRef:p,menuRef:j,pattern:O,uncontrolledShow:P,mergedShow:R,adjustedTo:Ue(e),uncontrolledValue:$,mergedValue:k,followerRef:U,localizedPlaceholder:oe,selectedOption:ce,selectedOptions:ue,mergedSize:Te,mergedDisabled:Z,focused:M,activeWithoutMenuOpen:ee,inlineThemeDisabled:h,onTriggerInputFocus:Ie,onTriggerInputBlur:_e,handleTriggerOrMenuResize:Ve,handleMenuFocus:ae,handleMenuBlur:$e,handleMenuTabOut:ke,handleTriggerClick:Be,handleToggle:se,handleDeleteOption:V,handlePatternInput:o,handleClear:g,handleTriggerBlur:ze,handleTriggerFocus:re,handleKeydown:ge,handleMenuAfterLeave:be,handleMenuClickOutside:Ae,handleMenuScroll:De,handleMenuKeydown:ge,handleMenuMousedown:Ee,mergedTheme:S,cssVars:h?void 0:we,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(jn,null,{default:()=>[a(Ln,null,{default:()=>a(ot,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,T;return[(T=(e=this.$slots).arrow)===null||T===void 0?void 0:T.call(e)]}})}),a(Nn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ue.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(Bn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,T,z;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),zn(a(En,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(T=this.menuProps)===null||T===void 0?void 0:T.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(z=this.menuProps)===null||z===void 0?void 0:z.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var v,h;return[(h=(v=this.$slots).empty)===null||h===void 0?void 0:h.call(v)]},header:()=>{var v,h;return[(h=(v=this.$slots).header)===null||h===void 0?void 0:h.call(v)]},action:()=>{var v,h;return[(h=(v=this.$slots).action)===null||h===void 0?void 0:h.call(v)]}}),this.displayDirective==="show"?[[$n,this.mergedShow],[Ge,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ge,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{$t as N};
