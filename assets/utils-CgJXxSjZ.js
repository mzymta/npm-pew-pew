import{q as ee,w as A,f as ne,d as _,h as a,c as x,b as te,a as Ee,t as S,r as I,n as $e,p as W}from"./vue.esm-bundler-D4RNtN6S.js";import{n as k,r as z,f as O,l as oe,k as B,s as P,o as w,p as He}from"./light-DsB5ODev.js";import{V as Ve,F as De}from"./FocusDetector-Cm4LEqMh.js";import{i as q,c as je}from"./Follower-DXtmSYJu.js";import{r as ie}from"./render-CafAiG2R.js";import{u as V}from"./use-memo-CglecHn5.js";import{N as re}from"./Icon-CrmNSR1a.js";import{F as Ke}from"./Checkmark-i7pX93Cq.js";import{f as Ae}from"./fade-in-scale-up.cssr-DKJ6UU5J.js";import{r as J,a as qe}from"./resolve-slot-BBjw-So6.js";import{N as Ge}from"./Loading-Ch5S3HjA.js";import{S as Ue}from"./Scrollbar-BbWWFAp8.js";import{e as Ze,i as We}from"./light-aICc-wbJ.js";import{u as Je}from"./use-locale-CfrJhm3r.js";import{u as le}from"./use-css-vars-class-BoK1eXI1.js";import{u as Qe}from"./use-rtl-DB_faxJd.js";import{a as Xe}from"./create-BYUmyaO5.js";import{d as Ye,g as D}from"./index-Xn0jilRV.js";import{r as j}from"./VResizeObserver-DllAtjZA.js";import{h as Q}from"./happens-in-CM8LO42l.js";function en(e,t){t&&(ee(()=>{const{value:o}=e;o&&j.registerHandler(o,t)}),A(e,(o,r)=>{r&&j.unregisterHandler(r)},{deep:!1}),ne(()=>{const{value:o}=e;o&&j.unregisterHandler(o)}))}function K(e){const t=e.filter(o=>o!==void 0);if(t.length!==0)return t.length===1?t[0]:o=>{e.forEach(r=>{r&&r(o)})}}const nn=_({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),tn=k("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[z("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[O("+",[z("description",`
 margin-top: 8px;
 `)])]),z("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),on=Object.assign(Object.assign({},B.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),rn=_({name:"Empty",props:on,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedComponentPropsRef:r}=oe(e),s=B("Empty","-empty",tn,Ze,e,t),{localeRef:d}=Je("Empty"),l=x(()=>{var u,p,b;return(u=e.description)!==null&&u!==void 0?u:(b=(p=r==null?void 0:r.value)===null||p===void 0?void 0:p.Empty)===null||b===void 0?void 0:b.description}),c=x(()=>{var u,p;return((p=(u=r==null?void 0:r.value)===null||u===void 0?void 0:u.Empty)===null||p===void 0?void 0:p.renderIcon)||(()=>a(nn,null))}),v=x(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:p},self:{[P("iconSize",u)]:b,[P("fontSize",u)]:y,textColor:f,iconColor:R,extraTextColor:F}}=s.value;return{"--n-icon-size":b,"--n-font-size":y,"--n-bezier":p,"--n-text-color":f,"--n-icon-color":R,"--n-extra-text-color":F}}),C=o?le("empty",x(()=>{let u="";const{size:p}=e;return u+=p[0],u}),v,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:c,localizedDescription:x(()=>l.value||d.value.description),cssVars:o?void 0:v,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),a("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${t}-empty__icon`},e.icon?e.icon():a(re,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${t}-empty__extra`},e.extra()):null)}}),X=_({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:o,nodePropsRef:r}=te(q);return{labelField:o,nodeProps:r,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:o,nodeProps:r,tmNode:{rawNode:s}}=this,d=r==null?void 0:r(s),l=t?t(s,!1):ie(s[this.labelField],s,!1),c=a("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d==null?void 0:d.class]}),l);return s.render?s.render({node:c,option:s}):o?o({node:c,option:s,selected:!1}):c}});function ln(e,t){return a(Ee,{name:"fade-in-scale-up-transition"},{default:()=>e?a(re,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>a(Ke)}):null})}const Y=_({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:o,multipleRef:r,valueSetRef:s,renderLabelRef:d,renderOptionRef:l,labelFieldRef:c,valueFieldRef:v,showCheckmarkRef:C,nodePropsRef:u,handleOptionClick:p,handleOptionMouseEnter:b}=te(q),y=V(()=>{const{value:h}=o;return h?e.tmNode.key===h.key:!1});function f(h){const{tmNode:g}=e;g.disabled||p(h,g)}function R(h){const{tmNode:g}=e;g.disabled||b(h,g)}function F(h){const{tmNode:g}=e,{value:M}=y;g.disabled||M||b(h,g)}return{multiple:r,isGrouped:V(()=>{const{tmNode:h}=e,{parent:g}=h;return g&&g.rawNode.type==="group"}),showCheckmark:C,nodeProps:u,isPending:y,isSelected:V(()=>{const{value:h}=t,{value:g}=r;if(h===null)return!1;const M=e.tmNode.rawNode[v.value];if(g){const{value:$}=s;return $.has(M)}else return h===M}),labelField:c,renderLabel:d,renderOption:l,handleMouseMove:F,handleMouseEnter:R,handleClick:f}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:o,isPending:r,isGrouped:s,showCheckmark:d,nodeProps:l,renderOption:c,renderLabel:v,handleClick:C,handleMouseEnter:u,handleMouseMove:p}=this,b=ln(o,e),y=v?[v(t,o),d&&b]:[ie(t[this.labelField],t,o),d&&b],f=l==null?void 0:l(t),R=a("div",Object.assign({},f,{class:[`${e}-base-select-option`,t.class,f==null?void 0:f.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:d}],style:[(f==null?void 0:f.style)||"",t.style||""],onClick:K([C,f==null?void 0:f.onClick]),onMouseenter:K([u,f==null?void 0:f.onMouseenter]),onMousemove:K([p,f==null?void 0:f.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},y));return t.render?t.render({node:R,option:t,selected:o}):c?c({node:R,option:t,selected:o}):R}}),an=k("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[k("scrollbar",`
 max-height: var(--n-height);
 `),k("virtual-list",`
 max-height: var(--n-height);
 `),k("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),k("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),k("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),z("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),k("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),k("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[w("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),O("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),O("&:active",`
 color: var(--n-option-text-color-pressed);
 `),w("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),w("pending",[O("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),w("selected",`
 color: var(--n-option-text-color-active);
 `,[O("&::before",`
 background-color: var(--n-option-color-active);
 `),w("pending",[O("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),w("disabled",`
 cursor: not-allowed;
 `,[He("selected",`
 color: var(--n-option-text-color-disabled);
 `),w("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Ae({enterScale:"0.5"})])])]),Pn=_({name:"InternalSelectMenu",props:Object.assign(Object.assign({},B.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=oe(e),r=Qe("InternalSelectMenu",o,t),s=B("InternalSelectMenu","-internal-select-menu",an,We,e,S(e,"clsPrefix")),d=I(null),l=I(null),c=I(null),v=x(()=>e.treeMate.getFlattenedNodes()),C=x(()=>Xe(v.value)),u=I(null);function p(){const{treeMate:n}=e;let i=null;const{value:m}=e;m===null?i=n.getFirstAvailableNode():(e.multiple?i=n.getNode((m||[])[(m||[]).length-1]):i=n.getNode(m),(!i||i.disabled)&&(i=n.getFirstAvailableNode())),L(i||null)}function b(){const{value:n}=u;n&&!e.treeMate.getNode(n.key)&&(u.value=null)}let y;A(()=>e.show,n=>{n?y=A(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?p():b(),$e(G)):b()},{immediate:!0}):y==null||y()},{immediate:!0}),ne(()=>{y==null||y()});const f=x(()=>Ye(s.value.self[P("optionHeight",e.size)])),R=x(()=>D(s.value.self[P("padding",e.size)])),F=x(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),h=x(()=>{const n=v.value;return n&&n.length===0});function g(n){const{onToggle:i}=e;i&&i(n)}function M(n){const{onScroll:i}=e;i&&i(n)}function $(n){var i;(i=c.value)===null||i===void 0||i.sync(),M(n)}function se(){var n;(n=c.value)===null||n===void 0||n.sync()}function de(){const{value:n}=u;return n||null}function ue(n,i){i.disabled||L(i,!1)}function ce(n,i){i.disabled||g(i)}function fe(n){var i;Q(n,"action")||(i=e.onKeyup)===null||i===void 0||i.call(e,n)}function pe(n){var i;Q(n,"action")||(i=e.onKeydown)===null||i===void 0||i.call(e,n)}function me(n){var i;(i=e.onMousedown)===null||i===void 0||i.call(e,n),!e.focusable&&n.preventDefault()}function he(){const{value:n}=u;n&&L(n.getNext({loop:!0}),!0)}function ge(){const{value:n}=u;n&&L(n.getPrev({loop:!0}),!0)}function L(n,i=!1){u.value=n,i&&G()}function G(){var n,i;const m=u.value;if(!m)return;const T=C.value(m.key);T!==null&&(e.virtualScroll?(n=l.value)===null||n===void 0||n.scrollTo({index:T}):(i=c.value)===null||i===void 0||i.scrollTo({index:T,elSize:f.value}))}function ve(n){var i,m;!((i=d.value)===null||i===void 0)&&i.contains(n.target)&&((m=e.onFocus)===null||m===void 0||m.call(e,n))}function be(n){var i,m;!((i=d.value)===null||i===void 0)&&i.contains(n.relatedTarget)||(m=e.onBlur)===null||m===void 0||m.call(e,n)}W(q,{handleOptionMouseEnter:ue,handleOptionClick:ce,valueSetRef:F,pendingTmNodeRef:u,nodePropsRef:S(e,"nodeProps"),showCheckmarkRef:S(e,"showCheckmark"),multipleRef:S(e,"multiple"),valueRef:S(e,"value"),renderLabelRef:S(e,"renderLabel"),renderOptionRef:S(e,"renderOption"),labelFieldRef:S(e,"labelField"),valueFieldRef:S(e,"valueField")}),W(je,d),ee(()=>{const{value:n}=c;n&&n.sync()});const U=x(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:i},self:{height:m,borderRadius:T,color:xe,groupHeaderTextColor:Ce,actionDividerColor:ze,optionTextColorPressed:Re,optionTextColor:Se,optionTextColorDisabled:ke,optionTextColorActive:Me,optionOpacityDisabled:we,optionCheckColor:Pe,actionTextColor:Ne,optionColorPending:Oe,optionColorActive:Fe,loadingColor:Le,loadingSize:Te,optionColorActivePending:_e,[P("optionFontSize",n)]:Ie,[P("optionHeight",n)]:Be,[P("optionPadding",n)]:H}}=s.value;return{"--n-height":m,"--n-action-divider-color":ze,"--n-action-text-color":Ne,"--n-bezier":i,"--n-border-radius":T,"--n-color":xe,"--n-option-font-size":Ie,"--n-group-header-text-color":Ce,"--n-option-check-color":Pe,"--n-option-color-pending":Oe,"--n-option-color-active":Fe,"--n-option-color-active-pending":_e,"--n-option-height":Be,"--n-option-opacity-disabled":we,"--n-option-text-color":Se,"--n-option-text-color-active":Me,"--n-option-text-color-disabled":ke,"--n-option-text-color-pressed":Re,"--n-option-padding":H,"--n-option-padding-left":D(H,"left"),"--n-option-padding-right":D(H,"right"),"--n-loading-color":Le,"--n-loading-size":Te}}),{inlineThemeDisabled:Z}=e,N=Z?le("internal-select-menu",x(()=>e.size[0]),U,e):void 0,ye={selfRef:d,next:he,prev:ge,getPendingTmNode:de};return en(d,e.onResize),Object.assign({mergedTheme:s,mergedClsPrefix:t,rtlEnabled:r,virtualListRef:l,scrollbarRef:c,itemSize:f,padding:R,flattenedNodes:v,empty:h,virtualListContainer(){const{value:n}=l;return n==null?void 0:n.listElRef},virtualListContent(){const{value:n}=l;return n==null?void 0:n.itemsElRef},doScroll:M,handleFocusin:ve,handleFocusout:be,handleKeyUp:fe,handleKeyDown:pe,handleMouseDown:me,handleVirtualListResize:se,handleVirtualListScroll:$,cssVars:Z?void 0:U,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},ye)},render(){const{$slots:e,virtualScroll:t,clsPrefix:o,mergedTheme:r,themeClass:s,onRender:d}=this;return d==null||d(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,s,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},J(e.header,l=>l&&a("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?a("div",{class:`${o}-base-select-menu__loading`},a(Ge,{clsPrefix:o,strokeWidth:20})):this.empty?a("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},qe(e.empty,()=>[a(rn,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):a(Ue,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?a(Ve,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?a(X,{key:l.key,clsPrefix:o,tmNode:l}):l.ignored?null:a(Y,{clsPrefix:o,key:l.key,tmNode:l})}):a("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?a(X,{key:l.key,clsPrefix:o,tmNode:l}):a(Y,{clsPrefix:o,key:l.key,tmNode:l})))}),J(e.action,l=>l&&[a("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},l),a(De,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function E(e){return e.type==="group"}function ae(e){return e.type==="ignored"}function Nn(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function On(e,t){return{getIsGroup:E,getIgnored:ae,getKey(r){return E(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[t]}}}function Fn(e,t,o,r){if(!t)return e;function s(d){if(!Array.isArray(d))return[];const l=[];for(const c of d)if(E(c)){const v=s(c[r]);v.length&&l.push(Object.assign({},c,{[r]:v}))}else{if(ae(c))continue;t(o,c)&&l.push(c)}return l}return s(e)}function Ln(e,t,o){const r=new Map;return e.forEach(s=>{E(s)?s[o].forEach(d=>{r.set(d[t],d)}):r.set(s[t],s)}),r}export{Pn as N,Ln as a,rn as b,On as c,Fn as f,K as m,Nn as p,en as u};
