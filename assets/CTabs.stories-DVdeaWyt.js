import{d as oe,h as c,r as E,z as Xe,F as Ye,b as Bt,c as ae,w as de,n as ce,q as It,p as Ot,t as I,e as jt,Q as Ht,R as Dt,T as Nt,Y as Ft,v as Re,y as $e,A as Ee,x as be,J as Mt,E as Vt,m as Ut,g as Gt,G as Xt}from"./vue.esm-bundler-D4RNtN6S.js";import{f as Pe}from"./index-BOnq2-IM.js";import{u as Yt,D as ne,E as qt,j as Jt,n,o as s,f as C,r as z,p as Kt,k as qe,l as Qt,s as O}from"./light-DsB5ODev.js";import{r as Zt}from"./render-CafAiG2R.js";import{N as ea}from"./Icon-CrmNSR1a.js";import{A as ta}from"./Add-BBHY4Qnj.js";import{N as aa}from"./Close-MwAQiULY.js";import{o as na}from"./omit-DbnPTcif.js";import{f as fe}from"./flatten-B94A2huW.js";import{r as ke}from"./resolve-slot-BBjw-So6.js";import{V as pe}from"./VResizeObserver-DllAtjZA.js";import{c as Ae,a as ra,o as oa}from"./cssr-ChHp6ynC.js";import{t as ia}from"./light-B4v_Ronm.js";import{u as We}from"./use-compitable-B7ANSQOo.js";import{u as sa}from"./use-merged-state-CUYpy2WA.js";import{i as la}from"./toString-Vm_cEZ4d.js";import{g as K,d as da}from"./index-Xn0jilRV.js";import{u as ca}from"./use-css-vars-class-BoK1eXI1.js";import{c as Q}from"./call-f2ri57Kd.js";import{C as ba}from"./CTile-Cv4kNu6I.js";import"./use-style-DC-6GAXR.js";import"./Close-DtvJwW5M.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./utils-Dy8q55w_.js";import"./CSkeleton-BQgGCk3S.js";import"./CIcon-BdIW6TD_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CCloseButton-Cu-pxIpa.js";import"./CButton-CYpEF-bO.js";import"./Button-CF0RFvFf.js";import"./use-rtl-DB_faxJd.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./color-to-class-B0iQgAn2.js";import"./CSpin-PilhVice.js";import"./fade-in.cssr-DJOFltAV.js";import"./light-cVvDERhS.js";const fa=Ae(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ae("&::-webkit-scrollbar",{width:0,height:0})]),pa=oe({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=E(null);function r(i){!(i.currentTarget.offsetWidth<i.currentTarget.scrollWidth)||i.deltaY===0||(i.currentTarget.scrollLeft+=i.deltaY+i.deltaX,i.preventDefault())}const l=Yt();return fa.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ra,ssr:l}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...i){var v;(v=e.value)===null||v===void 0||v.scrollTo(...i)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var ua=/\s/;function ma(e){for(var r=e.length;r--&&ua.test(e.charAt(r)););return r}var va=/^\s+/;function ga(e){return e&&e.slice(0,ma(e)+1).replace(va,"")}var Le=NaN,ha=/^[-+]0x[0-9a-f]+$/i,xa=/^0b[01]+$/i,ya=/^0o[0-7]+$/i,Ta=parseInt;function _e(e){if(typeof e=="number")return e;if(la(e))return Le;if(ne(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=ne(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=ga(e);var l=xa.test(e);return l||ya.test(e)?Ta(e.slice(2),l?2:8):ha.test(e)?Le:+e}var ue=function(){return qt.Date.now()},Ca="Expected a function",wa=Math.max,Sa=Math.min;function za(e,r,l){var p,i,v,b,u,x,g=0,h=!1,A=!1,W=!0;if(typeof e!="function")throw new TypeError(Ca);r=_e(r)||0,ne(l)&&(h=!!l.leading,A="maxWait"in l,v=A?wa(_e(l.maxWait)||0,r):v,W="trailing"in l?!!l.trailing:W);function y(f){var S=p,D=i;return p=i=void 0,g=f,b=e.apply(D,S),b}function R(f){return g=f,u=setTimeout(k,r),h?y(f):b}function w(f){var S=f-x,D=f-g,X=r-S;return A?Sa(X,v-D):X}function P(f){var S=f-x,D=f-g;return x===void 0||S>=r||S<0||A&&D>=v}function k(){var f=ue();if(P(f))return $(f);u=setTimeout(k,w(f))}function $(f){return u=void 0,W&&p?y(f):(p=i=void 0,b)}function H(){u!==void 0&&clearTimeout(u),g=0,p=x=i=u=void 0}function L(){return u===void 0?b:$(ue())}function m(){var f=ue(),S=P(f);if(p=arguments,i=this,x=f,S){if(u===void 0)return R(x);if(A)return clearTimeout(u),u=setTimeout(k,r),y(x)}return u===void 0&&(u=setTimeout(k,r)),b}return m.cancel=H,m.flush=L,m}var Ra="Expected a function";function me(e,r,l){var p=!0,i=!0;if(typeof e!="function")throw new TypeError(Ra);return ne(l)&&(p="leading"in l?!!l.leading:p,i="trailing"in l?!!l.trailing:i),za(e,r,{leading:p,maxWait:r,trailing:i})}const Je=Jt("n-tabs"),$a={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Ea=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},na($a,["displayDirective"])),re=oe({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ea,setup(e){const{mergedClsPrefixRef:r,valueRef:l,typeRef:p,closableRef:i,tabStyleRef:v,addTabStyleRef:b,tabClassRef:u,addTabClassRef:x,tabChangeIdRef:g,onBeforeLeaveRef:h,triggerRef:A,handleAdd:W,activateTab:y,handleClose:R}=Bt(Je);return{trigger:A,mergedClosable:ae(()=>{if(e.internalAddable)return!1;const{closable:w}=e;return w===void 0?i.value:w}),style:v,addStyle:b,tabClass:u,addTabClass:x,clsPrefix:r,value:l,type:p,handleClose(w){w.stopPropagation(),!e.disabled&&R(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){W();return}const{name:w}=e,P=++g.id;if(w!==l.value){const{value:k}=h;k?Promise.resolve(k(e.name,l.value)).then($=>{$&&g.id===P&&y(w)}):y(w)}}}},render(){const{internalAddable:e,clsPrefix:r,name:l,disabled:p,label:i,tab:v,value:b,mergedClosable:u,trigger:x,$slots:{default:g}}=this,h=i??v;return c("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${r}-tabs-tab-pad`}):null,c("div",Object.assign({key:l,"data-name":l,"data-disabled":p?!0:void 0},Xe({class:[`${r}-tabs-tab`,b===l&&`${r}-tabs-tab--active`,p&&`${r}-tabs-tab--disabled`,u&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${r}-tabs-tab__label`},e?c(Ye,null,c("div",{class:`${r}-tabs-tab__height-placeholder`}," "),c(ea,{clsPrefix:r},{default:()=>c(ta,null)})):g?g():typeof h=="object"?h:Zt(h??l)),u&&this.type==="card"?c(aa,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:p}):null))}}),Pa=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[s("segment-type",[n("tabs-rail",[C("&.transition-disabled",[n("tabs-capsule",`
 transition: none;
 `)])])]),s("top",[n("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),s("left",[n("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),s("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),s("right",`
 flex-direction: row-reverse;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),n("tabs-bar",`
 left: 0;
 `)]),s("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[s("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),s("flex",[n("tabs-nav",`
 width: 100%;
 position: relative;
 `,[n("tabs-wrapper",`
 width: 100%;
 `,[n("tabs-tab",`
 margin-right: 0;
 `)])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[z("prefix, suffix",`
 display: flex;
 align-items: center;
 `),z("prefix","padding-right: 16px;"),z("suffix","padding-left: 16px;")]),s("top, bottom",[n("tabs-nav-scroll-wrapper",[C("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),C("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),s("shadow-start",[C("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[C("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),s("left, right",[n("tabs-nav-scroll-content",`
 flex-direction: column;
 `),n("tabs-nav-scroll-wrapper",[C("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),C("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),s("shadow-start",[C("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[C("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),C("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[s("disabled",{cursor:"not-allowed"}),z("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),z("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[C("&.transition-disabled",`
 transition: none;
 `),s("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[C("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),C("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),C("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),C("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),C("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),s("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[C("&:hover",{color:"var(--n-tab-text-color-hover)"}),s("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),s("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[s("line-type",[s("top",[z("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 bottom: -1px;
 `)]),s("left",[z("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 right: -1px;
 `)]),s("right",[z("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 left: -1px;
 `)]),s("bottom",[z("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 top: -1px;
 `)]),z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-bar",`
 border-radius: 0;
 `)]),s("card-type",[z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[s("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[z("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Kt("disabled",[C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),s("closable","padding-right: 8px;"),s("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),s("disabled","color: var(--n-tab-text-color-disabled);")])]),s("left, right",`
 flex-direction: column; 
 `,[z("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),n("tabs-wrapper",`
 flex-direction: column;
 `),n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),s("top",[s("card-type",[n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-bottom: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),s("left",[s("card-type",[n("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-right: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),s("right",[s("card-type",[n("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-left: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),s("bottom",[s("card-type",[n("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-top: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ka=Object.assign(Object.assign({},qe.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Aa=oe({name:"Tabs",props:ka,slots:Object,setup(e,{slots:r}){var l,p,i,v;const{mergedClsPrefixRef:b,inlineThemeDisabled:u}=Qt(e),x=qe("Tabs","-tabs",Pa,ia,e,b),g=E(null),h=E(null),A=E(null),W=E(null),y=E(null),R=E(null),w=E(!0),P=E(!0),k=We(e,["labelSize","size"]),$=We(e,["activeName","value"]),H=E((p=(l=$.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&p!==void 0?p:r.default?(v=(i=fe(r.default())[0])===null||i===void 0?void 0:i.props)===null||v===void 0?void 0:v.name:null),L=sa($,H),m={id:0},f=ae(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});de(L,()=>{m.id=0,Y(),ye()});function S(){var t;const{value:a}=L;return a===null?null:(t=g.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function D(t){if(e.type==="card")return;const{value:a}=h;if(!a)return;const o=a.style.opacity==="0";if(t){const d=`${b.value}-tabs-bar--disabled`,{barWidth:T,placement:_}=e;if(t.dataset.disabled==="true"?a.classList.add(d):a.classList.remove(d),["top","bottom"].includes(_)){if(xe(["top","maxHeight","height"]),typeof T=="number"&&t.offsetWidth>=T){const B=Math.floor((t.offsetWidth-T)/2)+t.offsetLeft;a.style.left=`${B}px`,a.style.maxWidth=`${T}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(xe(["left","maxWidth","width"]),typeof T=="number"&&t.offsetHeight>=T){const B=Math.floor((t.offsetHeight-T)/2)+t.offsetTop;a.style.top=`${B}px`,a.style.maxHeight=`${T}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function X(){if(e.type==="card")return;const{value:t}=h;t&&(t.style.opacity="0")}function xe(t){const{value:a}=h;if(a)for(const o of t)a.style[o]=""}function Y(){if(e.type==="card")return;const t=S();t?D(t):X()}function ye(){var t;const a=(t=y.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=S();if(!o)return;const{scrollLeft:d,offsetWidth:T}=a,{offsetLeft:_,offsetWidth:B}=o;d>_?a.scrollTo({top:0,left:_,behavior:"smooth"}):_+B>d+T&&a.scrollTo({top:0,left:_+B-T,behavior:"smooth"})}const q=E(null);let ie=0,j=null;function Qe(t){const a=q.value;if(a){ie=t.getBoundingClientRect().height;const o=`${ie}px`,d=()=>{a.style.height=o,a.style.maxHeight=o};j?(d(),j(),j=null):j=d}}function Ze(t){const a=q.value;if(a){const o=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(ie,o)}px`};j?(j(),j=null,d()):j=d}}function et(){const t=q.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:d}=a;o!==void 0&&(t.style.maxHeight=o),d!==void 0&&(t.style.height=d)}}}const Te={value:[]},Ce=E("next");function tt(t){const a=L.value;let o="next";for(const d of Te.value){if(d===a)break;if(d===t){o="prev";break}}Ce.value=o,at(t)}function at(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":d}=e;a&&Q(a,t),o&&Q(o,t),d&&Q(d,t),H.value=t}function nt(t){const{onClose:a}=e;a&&Q(a,t)}function we(){const{value:t}=h;if(!t)return;const a="transition-disabled";t.classList.add(a),Y(),t.classList.remove(a)}const N=E(null);function se({transitionDisabled:t}){const a=g.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=S();o&&N.value&&(N.value.style.width=`${o.offsetWidth}px`,N.value.style.height=`${o.offsetHeight}px`,N.value.style.transform=`translateX(${o.offsetLeft-da(getComputedStyle(a).paddingLeft)}px)`,t&&N.value.offsetWidth),t&&a.classList.remove("transition-disabled")}de([L],()=>{e.type==="segment"&&ce(()=>{se({transitionDisabled:!1})})}),It(()=>{e.type==="segment"&&se({transitionDisabled:!0})});let Se=0;function rt(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||Se===t.contentRect.width)return;Se=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&we(),o!=="segment"){const{placement:d}=e;le((d==="top"||d==="bottom"?(a=y.value)===null||a===void 0?void 0:a.$el:R.value)||null)}}const ot=me(rt,64);de([()=>e.justifyContent,()=>e.size],()=>{ce(()=>{const{type:t}=e;(t==="line"||t==="bar")&&we()})});const F=E(!1);function it(t){var a;const{target:o,contentRect:{width:d,height:T}}=t,_=o.parentElement.parentElement.offsetWidth,B=o.parentElement.parentElement.offsetHeight,{placement:V}=e;if(!F.value)V==="top"||V==="bottom"?_<d&&(F.value=!0):B<T&&(F.value=!0);else{const{value:U}=W;if(!U)return;V==="top"||V==="bottom"?_-d>U.$el.offsetWidth&&(F.value=!1):B-T>U.$el.offsetHeight&&(F.value=!1)}le(((a=y.value)===null||a===void 0?void 0:a.$el)||null)}const st=me(it,64);function lt(){const{onAdd:t}=e;t&&t(),ce(()=>{const a=S(),{value:o}=y;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function le(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:d,offsetWidth:T}=t;w.value=o<=0,P.value=o+T>=d}else{const{scrollTop:o,scrollHeight:d,offsetHeight:T}=t;w.value=o<=0,P.value=o+T>=d}}const dt=me(t=>{le(t.target)},64);Ot(Je,{triggerRef:I(e,"trigger"),tabStyleRef:I(e,"tabStyle"),tabClassRef:I(e,"tabClass"),addTabStyleRef:I(e,"addTabStyle"),addTabClassRef:I(e,"addTabClass"),paneClassRef:I(e,"paneClass"),paneStyleRef:I(e,"paneStyle"),mergedClsPrefixRef:b,typeRef:I(e,"type"),closableRef:I(e,"closable"),valueRef:L,tabChangeIdRef:m,onBeforeLeaveRef:I(e,"onBeforeLeave"),activateTab:tt,handleClose:nt,handleAdd:lt}),oa(()=>{Y(),ye()}),jt(()=>{const{value:t}=A;if(!t)return;const{value:a}=b,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,d=`${a}-tabs-nav-scroll-wrapper--shadow-end`;w.value?t.classList.remove(o):t.classList.add(o),P.value?t.classList.remove(d):t.classList.add(d)});const ct={syncBarPosition:()=>{Y()}},bt=()=>{se({transitionDisabled:!0})},ze=ae(()=>{const{value:t}=k,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],d=`${t}${o}`,{self:{barColor:T,closeIconColor:_,closeIconColorHover:B,closeIconColorPressed:V,tabColor:U,tabBorderColor:ft,paneTextColor:pt,tabFontWeight:ut,tabBorderRadius:mt,tabFontWeightActive:vt,colorSegment:gt,fontWeightStrong:ht,tabColorSegment:xt,closeSize:yt,closeIconSize:Tt,closeColorHover:Ct,closeColorPressed:wt,closeBorderRadius:St,[O("panePadding",t)]:J,[O("tabPadding",d)]:zt,[O("tabPaddingVertical",d)]:Rt,[O("tabGap",d)]:$t,[O("tabGap",`${d}Vertical`)]:Et,[O("tabTextColor",a)]:Pt,[O("tabTextColorActive",a)]:kt,[O("tabTextColorHover",a)]:At,[O("tabTextColorDisabled",a)]:Wt,[O("tabFontSize",t)]:Lt},common:{cubicBezierEaseInOut:_t}}=x.value;return{"--n-bezier":_t,"--n-color-segment":gt,"--n-bar-color":T,"--n-tab-font-size":Lt,"--n-tab-text-color":Pt,"--n-tab-text-color-active":kt,"--n-tab-text-color-disabled":Wt,"--n-tab-text-color-hover":At,"--n-pane-text-color":pt,"--n-tab-border-color":ft,"--n-tab-border-radius":mt,"--n-close-size":yt,"--n-close-icon-size":Tt,"--n-close-color-hover":Ct,"--n-close-color-pressed":wt,"--n-close-border-radius":St,"--n-close-icon-color":_,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":V,"--n-tab-color":U,"--n-tab-font-weight":ut,"--n-tab-font-weight-active":vt,"--n-tab-padding":zt,"--n-tab-padding-vertical":Rt,"--n-tab-gap":$t,"--n-tab-gap-vertical":Et,"--n-pane-padding-left":K(J,"left"),"--n-pane-padding-right":K(J,"right"),"--n-pane-padding-top":K(J,"top"),"--n-pane-padding-bottom":K(J,"bottom"),"--n-font-weight-strong":ht,"--n-tab-color-segment":xt}}),M=u?ca("tabs",ae(()=>`${k.value[0]}${e.type[0]}`),ze,e):void 0;return Object.assign({mergedClsPrefix:b,mergedValue:L,renderedNames:new Set,segmentCapsuleElRef:N,tabsPaneWrapperRef:q,tabsElRef:g,barElRef:h,addTabInstRef:W,xScrollInstRef:y,scrollWrapperElRef:A,addTabFixed:F,tabWrapperStyle:f,handleNavResize:ot,mergedSize:k,handleScroll:dt,handleTabsResize:st,cssVars:u?void 0:ze,themeClass:M==null?void 0:M.themeClass,animationDirection:Ce,renderNameListRef:Te,yScrollElRef:R,handleSegmentResize:bt,onAnimationBeforeLeave:Qe,onAnimationEnter:Ze,onAnimationAfterEnter:et,onRender:M==null?void 0:M.onRender},ct)},render(){const{mergedClsPrefix:e,type:r,placement:l,addTabFixed:p,addable:i,mergedSize:v,renderNameListRef:b,onRender:u,paneWrapperClass:x,paneWrapperStyle:g,$slots:{default:h,prefix:A,suffix:W}}=this;u==null||u();const y=h?fe(h()).filter(m=>m.type.__TAB_PANE__===!0):[],R=h?fe(h()).filter(m=>m.type.__TAB__===!0):[],w=!R.length,P=r==="card",k=r==="segment",$=!P&&!k&&this.justifyContent;b.value=[];const H=()=>{const m=c("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},$?null:c("div",{class:`${e}-tabs-scroll-padding`,style:l==="top"||l==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),w?y.map((f,S)=>(b.value.push(f.props.name),ve(c(re,Object.assign({},f.props,{internalCreatedByPane:!0,internalLeftPadded:S!==0&&(!$||$==="center"||$==="start"||$==="end")}),f.children?{default:f.children.tab}:void 0)))):R.map((f,S)=>(b.value.push(f.props.name),ve(S!==0&&!$?Oe(f):f))),!p&&i&&P?Ie(i,(w?y.length:R.length)!==0):null,$?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&i?c(pe,{onResize:this.handleTabsResize},{default:()=>m}):m,P?c("div",{class:`${e}-tabs-pad`}):null,P?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},L=k?"top":l;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${v}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${L}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${L}`,`${e}-tabs-nav`]},ke(A,m=>m&&c("div",{class:`${e}-tabs-nav__prefix`},m)),k?c(pe,{onResize:this.handleSegmentResize},{default:()=>c("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},c("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},c("div",{class:`${e}-tabs-wrapper`},c("div",{class:`${e}-tabs-tab`}))),w?y.map((m,f)=>(b.value.push(m.props.name),c(re,Object.assign({},m.props,{internalCreatedByPane:!0,internalLeftPadded:f!==0}),m.children?{default:m.children.tab}:void 0))):R.map((m,f)=>(b.value.push(m.props.name),f===0?m:Oe(m))))}):c(pe,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(L)?c(pa,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},H()))}),p&&i&&P?Ie(i,!0):null,ke(W,m=>m&&c("div",{class:`${e}-tabs-nav__suffix`},m))),w&&(this.animated&&(L==="top"||L==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:g,class:[`${e}-tabs-pane-wrapper`,x]},Be(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Be(y,this.mergedValue,this.renderedNames)))}});function Be(e,r,l,p,i,v,b){const u=[];return e.forEach(x=>{const{name:g,displayDirective:h,"display-directive":A}=x.props,W=R=>h===R||A===R,y=r===g;if(x.key!==void 0&&(x.key=g),y||W("show")||W("show:lazy")&&l.has(g)){l.has(g)||l.add(g);const R=!W("if");u.push(R?Ht(x,[[Dt,y]]):x)}}),b?c(Nt,{name:`${b}-transition`,onBeforeLeave:p,onEnter:i,onAfterEnter:v},{default:()=>u}):u}function Ie(e,r){return c(re,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function Oe(e){const r=Ft(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function ve(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const G=oe({__name:"CTabs",props:{value:{},tabs:{},size:{default:"medium"},type:{default:"card"},trigger:{default:"click"}},emits:["click","update:value"],setup(e,{emit:r}){const l=r;function p(i){i!=null&&i.isDisabled||l("click",i.name)}return(i,v)=>(be(),Re(Ee(Aa),Xe({class:"c-tabs"},i.$attrs,{value:i.value,size:i.size,type:i.type,animated:"",trigger:i.trigger,"onUpdate:value":v[0]||(v[0]=b=>{l("update:value",b)})}),{default:$e(()=>[(be(!0),Mt(Ye,null,Vt(i.tabs,b=>(be(),Re(Ee(re),{key:b.name,disabled:b.isDisabled,name:b.name,onClick:()=>p(b)},{default:$e(()=>[Ut(i.$slots,b.name,{},()=>[Gt(Xt(b.label),1)])]),_:2},1032,["disabled","name","onClick"]))),128))]),_:3},16,["value","size","type","trigger"]))}});G.__docgenInfo={exportName:"default",displayName:"CTabs",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"Tab"}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"bar"'},{name:'"line"'},{name:'"card"'},{name:'"segment"'}]},defaultValue:{func:!1,value:"'card'"}},{name:"trigger",required:!1,type:{name:"union",elements:[{name:'"hover"'},{name:'"click"'}]},defaultValue:{func:!1,value:"'click'"}}],events:[{name:"click",type:{names:["string"]}},{name:"update:value",type:{names:["string"]}}],slots:[{name:"tab.name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CTabs/CTabs.vue"]};var Ke=(e=>(e.HOME="HOME",e.GENERAL="GENERAL",e.PERSONAL="PERSONAL",e.SECURITY="SECURITY",e.ADVANCED="ADVANCED",e))(Ke||{});const ge=E("HOME"),he=E([{name:"HOME",label:"Home"},{name:"GENERAL",label:"General"},{name:"PERSONAL",label:"Personal"},{name:"ADVANCED",label:"Advanced",isDisabled:!0},{name:"SECURITY",label:"Security"}]),wn={title:"Components/Tabs",component:G,tags:["autodocs"],decorators:[e=>({components:{story:e},template:'<div style="display: grid; gap: 36px"><story/></div>'})],argTypes:{value:{control:!1},tabs:{control:!1},size:{options:["small","medium","large"]},type:{options:["bar","line","card","segment"]},trigger:{options:["hover","click"]},onClick:{table:{disable:!0}},"onUpdate:value":{table:{disable:!0}}},parameters:{docs:{description:{component:"The CTabs component is a wrapper around Naive UI's NTabs and NTab components, designed to display a collection of tabs. It allows for customizable tab behavior, including type, size, and click handling. The component supports tabs with labels and can trigger events when a tab is clicked."}}},render:e=>({components:{CTabs:G,CTile:ba},setup(){return{args:e,selectedTab:ge,tabs:he,DemoTab:Ke}},template:`
      <div>
        <CTabs
          v-model:value="selectedTab"
          :tabs="tabs"
          :type="args.type"
          :size="args.size"
          :trigger="args.trigger"
          @click="args.onClick"
          @update:value="args['onUpdate:value']"
        />
        <CTile style="margin-top: 24px; min-height: 200px">
          <div v-if="selectedTab === DemoTab.HOME">Welcome to your kingdom!</div>
          <div v-else-if="selectedTab === DemoTab.GENERAL">The basics, but essential!</div>
          <div v-else-if="selectedTab === DemoTab.PERSONAL">Just for you, buddy!</div>
          <div v-else-if="selectedTab === DemoTab.SECURITY">Lock it down, ninja style!</div>
          <div v-else-if="selectedTab === DemoTab.ADVANCED">Prepare for wizard-level stuff!</div>
        </CTile>
      </div>
    `})},Z={args:{size:"medium",type:"card",trigger:"click","onUpdate:value":Pe(),onClick:Pe()}},ee={render:()=>({components:{CTabs:G},setup(){return{selectedTab:ge,tabs:he}},template:`
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        size="small"
      />
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        size="medium"
      />
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        size="large"
      />
    `})},te={render:()=>({components:{CTabs:G},setup(){return{selectedTab:ge,tabs:he}},template:`
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        type="card"
      />
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        type="segment"
      />
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        type="bar"
      />
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        type="line"
      />
    `})};var je,He,De;Z.parameters={...Z.parameters,docs:{...(je=Z.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    type: 'card',
    trigger: 'click',
    'onUpdate:value': fn(),
    onClick: fn()
  }
}`,...(De=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:De.source}}};var Ne,Fe,Me;ee.parameters={...ee.parameters,docs:{...(Ne=ee.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CTabs
    },
    setup() {
      return {
        selectedTab,
        tabs
      };
    },
    template: \`
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        size="small"
      />
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        size="medium"
      />
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        size="large"
      />
    \`
  })
}`,...(Me=(Fe=ee.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var Ve,Ue,Ge;te.parameters={...te.parameters,docs:{...(Ve=te.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CTabs
    },
    setup() {
      return {
        selectedTab,
        tabs
      };
    },
    template: \`
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        type="card"
      />
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        type="segment"
      />
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        type="bar"
      />
      <CTabs
        v-model:value="selectedTab"
        :tabs="tabs"
        type="line"
      />
    \`
  })
}`,...(Ge=(Ue=te.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};const Sn=["Default","Size","Type"];export{Z as Default,ee as Size,te as Type,Sn as __namedExportsOrder,wn as default};
