import{r as T,w as ue,d as I,h as d,b as B,z as te,c as b,a as Re,p as H,F as Pe,t as C}from"./vue.esm-bundler-D4RNtN6S.js";import{f as ke,r as Ce,p as ce,N as Ie}from"./Popover-axeHrzq9.js";import{j as ie,n as S,o as N,f as D,w as pe,l as fe,k as X,p as le,r as z,s as j}from"./light-DsB5ODev.js";import{p as he,m as Ke,d as _e}from"./index-CIE75m1q.js";import{r as G}from"./render-CafAiG2R.js";import{i as $e,d as Oe}from"./light-CRxrqwBH.js";import{u as ve}from"./use-css-vars-class-BoK1eXI1.js";import{B as ze,V as De,a as Ae}from"./Follower-DXtmSYJu.js";import{u as q}from"./use-memo-CglecHn5.js";import{h as ae}from"./happens-in-CM8LO42l.js";import{X as Fe}from"./Scrollbar-BbWWFAp8.js";import{f as je}from"./fade-in-scale-up.cssr-DKJ6UU5J.js";import{k as Te}from"./keep-B1eBS8j0.js";import{u as Be}from"./use-merged-state-CUYpy2WA.js";import{c as Le}from"./create-BYUmyaO5.js";import{u as Me}from"./use-keyboard-D8ejRVqf.js";import{c as Ee}from"./create-ref-setter-C4J8sofl.js";import{c as oe}from"./call-f2ri57Kd.js";function He(e,r,i){const t=T(e.value);let o=null;return ue(e,n=>{o!==null&&window.clearTimeout(o),n===!0?i&&!i.value?t.value=!0:o=window.setTimeout(()=>{t.value=!0},r):t.value=!1}),t}const Ue=I({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),de=ie("n-dropdown-menu"),Z=ie("n-dropdown"),se=ie("n-dropdown-option"),me=I({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Ve=I({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:r}=B(de),{renderLabelRef:i,labelFieldRef:t,nodePropsRef:o,renderOptionRef:n}=B(Z);return{labelField:t,showIcon:e,hasSubmenu:r,renderLabel:i,nodeProps:o,renderOption:n}},render(){var e;const{clsPrefix:r,hasSubmenu:i,showIcon:t,nodeProps:o,renderLabel:n,renderOption:s}=this,{rawNode:c}=this.tmNode,f=d("div",Object.assign({class:`${r}-dropdown-option`},o==null?void 0:o(c)),d("div",{class:`${r}-dropdown-option-body ${r}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__prefix`,t&&`${r}-dropdown-option-body__prefix--show-icon`]},G(c.icon)),d("div",{class:`${r}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(c):G((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),d("div",{class:[`${r}-dropdown-option-body__suffix`,i&&`${r}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return s?s({node:f,option:c}):f}}),We=S("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[N("color-transition",{transition:"color .3s var(--n-bezier)"}),N("depth",{color:"var(--n-color)"},[D("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),D("svg",{height:"1em",width:"1em"})]),qe=Object.assign(Object.assign({},X.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),Ge=I({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:qe,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:i}=fe(e),t=X("Icon","-icon",We,$e,e,r),o=b(()=>{const{depth:s}=e,{common:{cubicBezierEaseInOut:c},self:f}=t.value;if(s!==void 0){const{color:x,[`opacity${s}Depth`]:y}=f;return{"--n-bezier":c,"--n-color":x,"--n-opacity":y}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),n=i?ve("icon",b(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:r,mergedStyle:b(()=>{const{size:s,color:c}=e;return{fontSize:ke(s),color:c}}),cssVars:i?void 0:o,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:r,depth:i,mergedClsPrefix:t,component:o,onRender:n,themeClass:s}=this;return!((e=r==null?void 0:r.$options)===null||e===void 0)&&e._n_icon__&&pe("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),d("i",te(this.$attrs,{role:"img",class:[`${t}-icon`,s,{[`${t}-icon--depth`]:i,[`${t}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?d(o):this.$slots)}});function re(e,r){return e.type==="submenu"||e.type===void 0&&e[r]!==void 0}function Xe(e){return e.type==="group"}function be(e){return e.type==="divider"}function Ze(e){return e.type==="render"}const we=I({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const r=B(Z),{hoverKeyRef:i,keyboardKeyRef:t,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:n,activeKeyPathRef:s,animatedRef:c,mergedShowRef:f,renderLabelRef:x,renderIconRef:y,labelFieldRef:R,childrenFieldRef:K,renderOptionRef:P,nodePropsRef:_,menuPropsRef:L}=r,w=B(se,null),$=B(de),U=B(he),J=b(()=>e.tmNode.rawNode),V=b(()=>{const{value:a}=K;return re(e.tmNode.rawNode,a)}),Q=b(()=>{const{disabled:a}=e.tmNode;return a}),Y=b(()=>{if(!V.value)return!1;const{key:a,disabled:m}=e.tmNode;if(m)return!1;const{value:k}=i,{value:A}=t,{value:ne}=o,{value:F}=n;return k!==null?F.includes(a):A!==null?F.includes(a)&&F[F.length-1]!==a:ne!==null?F.includes(a):!1}),ee=b(()=>t.value===null&&!c.value),W=He(Y,300,ee),M=b(()=>!!(w!=null&&w.enteringSubmenuRef.value)),E=T(!1);H(se,{enteringSubmenuRef:E});function O(){E.value=!0}function l(){E.value=!1}function v(){const{parentKey:a,tmNode:m}=e;m.disabled||f.value&&(o.value=a,t.value=null,i.value=m.key)}function p(){const{tmNode:a}=e;a.disabled||f.value&&i.value!==a.key&&v()}function u(a){if(e.tmNode.disabled||!f.value)return;const{relatedTarget:m}=a;m&&!ae({target:m},"dropdownOption")&&!ae({target:m},"scrollbarRail")&&(i.value=null)}function g(){const{value:a}=V,{tmNode:m}=e;f.value&&!a&&!m.disabled&&(r.doSelect(m.key,m.rawNode),r.doUpdateShow(!1))}return{labelField:R,renderLabel:x,renderIcon:y,siblingHasIcon:$.showIconRef,siblingHasSubmenu:$.hasSubmenuRef,menuProps:L,popoverBody:U,animated:c,mergedShowSubmenu:b(()=>W.value&&!M.value),rawNode:J,hasSubmenu:V,pending:q(()=>{const{value:a}=n,{key:m}=e.tmNode;return a.includes(m)}),childActive:q(()=>{const{value:a}=s,{key:m}=e.tmNode,k=a.findIndex(A=>m===A);return k===-1?!1:k<a.length-1}),active:q(()=>{const{value:a}=s,{key:m}=e.tmNode,k=a.findIndex(A=>m===A);return k===-1?!1:k===a.length-1}),mergedDisabled:Q,renderOption:P,nodeProps:_,handleClick:g,handleMouseMove:p,handleMouseEnter:v,handleMouseLeave:u,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:l}},render(){var e,r;const{animated:i,rawNode:t,mergedShowSubmenu:o,clsPrefix:n,siblingHasIcon:s,siblingHasSubmenu:c,renderLabel:f,renderIcon:x,renderOption:y,nodeProps:R,props:K,scrollable:P}=this;let _=null;if(o){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);_=d(ye,Object.assign({},U,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const L={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},w=R==null?void 0:R(t),$=d("div",Object.assign({class:[`${n}-dropdown-option`,w==null?void 0:w.class],"data-dropdown-option":!0},w),d("div",te(L,K),[d("div",{class:[`${n}-dropdown-option-body__prefix`,s&&`${n}-dropdown-option-body__prefix--show-icon`]},[x?x(t):G(t.icon)]),d("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},f?f(t):G((r=t[this.labelField])!==null&&r!==void 0?r:t.title)),d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,c&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(Ge,null,{default:()=>d(Ue,null)}):null)]),this.hasSubmenu?d(ze,null,{default:()=>[d(De,null,{default:()=>d("div",{class:`${n}-dropdown-offset-container`},d(Ae,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>d("div",{class:`${n}-dropdown-menu-wrapper`},i?d(Re,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>_}):_)}))})]}):null);return y?y({node:$,option:t}):$}}),Je=I({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:r,clsPrefix:i}=this,{children:t}=e;return d(Pe,null,d(Ve,{clsPrefix:i,tmNode:e,key:e.key}),t==null?void 0:t.map(o=>{const{rawNode:n}=o;return n.show===!1?null:be(n)?d(me,{clsPrefix:i,key:o.key}):o.isGroup?(pe("dropdown","`group` node is not allowed to be put in `group` node."),null):d(we,{clsPrefix:i,tmNode:o,parentKey:r,key:o.key})}))}}),Qe=I({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:r}}=this.tmNode;return d("div",r,[e==null?void 0:e()])}}),ye=I({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:r,childrenFieldRef:i}=B(Z);H(de,{showIconRef:b(()=>{const o=r.value;return e.tmNodes.some(n=>{var s;if(n.isGroup)return(s=n.children)===null||s===void 0?void 0:s.some(({rawNode:f})=>o?o(f):f.icon);const{rawNode:c}=n;return o?o(c):c.icon})}),hasSubmenuRef:b(()=>{const{value:o}=i;return e.tmNodes.some(n=>{var s;if(n.isGroup)return(s=n.children)===null||s===void 0?void 0:s.some(({rawNode:f})=>re(f,o));const{rawNode:c}=n;return re(c,o)})})});const t=T(null);return H(Ke,null),H(_e,null),H(he,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:r,scrollable:i}=this,t=this.tmNodes.map(o=>{const{rawNode:n}=o;return n.show===!1?null:Ze(n)?d(Qe,{tmNode:o,key:o.key}):be(n)?d(me,{clsPrefix:r,key:o.key}):Xe(n)?d(Je,{clsPrefix:r,tmNode:o,parentKey:e,key:o.key}):d(we,{clsPrefix:r,tmNode:o,parentKey:e,key:o.key,props:n.props,scrollable:i})});return d("div",{class:[`${r}-dropdown-menu`,i&&`${r}-dropdown-menu--scrollable`],ref:"bodyRef"},i?d(Fe,{contentClass:`${r}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?Ce({clsPrefix:r,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Ye=S("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[je(),S("dropdown-option",`
 position: relative;
 `,[D("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[D("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),S("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[D("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[N("pending",`
 color: var(--n-option-text-color-hover);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),D("&::before","background-color: var(--n-option-color-hover);")]),N("active",`
 color: var(--n-option-text-color-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),D("&::before","background-color: var(--n-option-color-active);")]),N("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),N("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),N("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[z("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[N("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),z("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[N("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),S("icon",`
 font-size: var(--n-option-icon-size);
 `)]),z("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),z("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[N("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),S("icon",`
 font-size: var(--n-option-icon-size);
 `)]),S("dropdown-menu","pointer-events: all;")]),S("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),S("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),S("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),D(">",[S("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),N("scrollable",[z("content",`
 padding: var(--n-padding);
 `)])]),en={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},nn=Object.keys(ce),on=Object.assign(Object.assign(Object.assign({},ce),en),X.props),Sn=I({name:"Dropdown",inheritAttrs:!1,props:on,setup(e){const r=T(!1),i=Be(C(e,"show"),r),t=b(()=>{const{keyField:l,childrenField:v}=e;return Le(e.options,{getKey(p){return p[l]},getDisabled(p){return p.disabled===!0},getIgnored(p){return p.type==="divider"||p.type==="render"},getChildren(p){return p[v]}})}),o=b(()=>t.value.treeNodes),n=T(null),s=T(null),c=T(null),f=b(()=>{var l,v,p;return(p=(v=(l=n.value)!==null&&l!==void 0?l:s.value)!==null&&v!==void 0?v:c.value)!==null&&p!==void 0?p:null}),x=b(()=>t.value.getPath(f.value).keyPath),y=b(()=>t.value.getPath(e.value).keyPath),R=q(()=>e.keyboard&&i.value);Me({keydown:{ArrowUp:{prevent:!0,handler:Q},ArrowRight:{prevent:!0,handler:V},ArrowDown:{prevent:!0,handler:Y},ArrowLeft:{prevent:!0,handler:J},Enter:{prevent:!0,handler:ee},Escape:U}},R);const{mergedClsPrefixRef:K,inlineThemeDisabled:P}=fe(e),_=X("Dropdown","-dropdown",Ye,Oe,e,K);H(Z,{labelFieldRef:C(e,"labelField"),childrenFieldRef:C(e,"childrenField"),renderLabelRef:C(e,"renderLabel"),renderIconRef:C(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:s,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:x,activeKeyPathRef:y,animatedRef:C(e,"animated"),mergedShowRef:i,nodePropsRef:C(e,"nodeProps"),renderOptionRef:C(e,"renderOption"),menuPropsRef:C(e,"menuProps"),doSelect:L,doUpdateShow:w}),ue(i,l=>{!e.animated&&!l&&$()});function L(l,v){const{onSelect:p}=e;p&&oe(p,l,v)}function w(l){const{"onUpdate:show":v,onUpdateShow:p}=e;v&&oe(v,l),p&&oe(p,l),r.value=l}function $(){n.value=null,s.value=null,c.value=null}function U(){w(!1)}function J(){M("left")}function V(){M("right")}function Q(){M("up")}function Y(){M("down")}function ee(){const l=W();l!=null&&l.isLeaf&&i.value&&(L(l.key,l.rawNode),w(!1))}function W(){var l;const{value:v}=t,{value:p}=f;return!v||p===null?null:(l=v.getNode(p))!==null&&l!==void 0?l:null}function M(l){const{value:v}=f,{value:{getFirstAvailableNode:p}}=t;let u=null;if(v===null){const g=p();g!==null&&(u=g.key)}else{const g=W();if(g){let a;switch(l){case"down":a=g.getNext();break;case"up":a=g.getPrev();break;case"right":a=g.getChild();break;case"left":a=g.getParent();break}a&&(u=a.key)}}u!==null&&(n.value=null,s.value=u)}const E=b(()=>{const{size:l,inverted:v}=e,{common:{cubicBezierEaseInOut:p},self:u}=_.value,{padding:g,dividerColor:a,borderRadius:m,optionOpacityDisabled:k,[j("optionIconSuffixWidth",l)]:A,[j("optionSuffixWidth",l)]:ne,[j("optionIconPrefixWidth",l)]:F,[j("optionPrefixWidth",l)]:ge,[j("fontSize",l)]:xe,[j("optionHeight",l)]:Se,[j("optionIconSize",l)]:Ne}=u,h={"--n-bezier":p,"--n-font-size":xe,"--n-padding":g,"--n-border-radius":m,"--n-option-height":Se,"--n-option-prefix-width":ge,"--n-option-icon-prefix-width":F,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":A,"--n-option-icon-size":Ne,"--n-divider-color":a,"--n-option-opacity-disabled":k};return v?(h["--n-color"]=u.colorInverted,h["--n-option-color-hover"]=u.optionColorHoverInverted,h["--n-option-color-active"]=u.optionColorActiveInverted,h["--n-option-text-color"]=u.optionTextColorInverted,h["--n-option-text-color-hover"]=u.optionTextColorHoverInverted,h["--n-option-text-color-active"]=u.optionTextColorActiveInverted,h["--n-option-text-color-child-active"]=u.optionTextColorChildActiveInverted,h["--n-prefix-color"]=u.prefixColorInverted,h["--n-suffix-color"]=u.suffixColorInverted,h["--n-group-header-text-color"]=u.groupHeaderTextColorInverted):(h["--n-color"]=u.color,h["--n-option-color-hover"]=u.optionColorHover,h["--n-option-color-active"]=u.optionColorActive,h["--n-option-text-color"]=u.optionTextColor,h["--n-option-text-color-hover"]=u.optionTextColorHover,h["--n-option-text-color-active"]=u.optionTextColorActive,h["--n-option-text-color-child-active"]=u.optionTextColorChildActive,h["--n-prefix-color"]=u.prefixColor,h["--n-suffix-color"]=u.suffixColor,h["--n-group-header-text-color"]=u.groupHeaderTextColor),h}),O=P?ve("dropdown",b(()=>`${e.size[0]}${e.inverted?"i":""}`),E,e):void 0;return{mergedClsPrefix:K,mergedTheme:_,tmNodes:o,mergedShow:i,handleAfterLeave:()=>{e.animated&&$()},doUpdateShow:w,cssVars:P?void 0:E,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const e=(t,o,n,s,c)=>{var f;const{mergedClsPrefix:x,menuProps:y}=this;(f=this.onRender)===null||f===void 0||f.call(this);const R=(y==null?void 0:y(void 0,this.tmNodes.map(P=>P.rawNode)))||{},K={ref:Ee(o),class:[t,`${x}-dropdown`,this.themeClass],clsPrefix:x,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:s,onMouseleave:c};return d(ye,te(this.$attrs,K,R))},{mergedTheme:r}=this,i={show:this.mergedShow,theme:r.peers.Popover,themeOverrides:r.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(Ie,Object.assign({},Te(this.$props,nn),i),{trigger:()=>{var t,o;return(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t)}})}});export{Ue as C,Sn as N};
