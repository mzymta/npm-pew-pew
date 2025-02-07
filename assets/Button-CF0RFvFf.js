import{d as Z,h as p,t as $e,r as S,f as ze,n as Be,b as Se,c as R}from"./vue.esm-bundler-D4RNtN6S.js";import{u as Te}from"./use-rtl-DB_faxJd.js";import{f as b,g as Pe,n as E,b as ee,j as ke,o as x,p as A,r as l,l as Re,k as oe,s as r,a as H}from"./light-DsB5ODev.js";import{i as He}from"./browser-DLIXj5nt.js";import{i as Ie,N as Ee}from"./icon-switch.cssr-CS-aOSlJ.js";import{i as Ne}from"./is-browser-DqcmxZSF.js";import{r as U,i as Oe}from"./resolve-slot-BBjw-So6.js";import{u as je}from"./use-style-DC-6GAXR.js";import{N as De}from"./FadeInExpandTransition-LhRfDe22.js";import{N as Fe}from"./Loading-Ch5S3HjA.js";import{u as _e}from"./use-memo-CglecHn5.js";import{u as Ke}from"./use-form-item-BaX4b55j.js";import{b as Me}from"./light-CaBpc4YN.js";import{u as Ge}from"./use-css-vars-class-BoK1eXI1.js";import{c as J}from"./color-to-class-B0iQgAn2.js";import{c as Ve}from"./call-f2ri57Kd.js";const{cubicBezierEaseInOut:C}=Pe;function We({duration:e=".2s",delay:f=".1s"}={}){return[b("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),b("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),b("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C},
 max-width ${e} ${C} ${f},
 margin-left ${e} ${C} ${f},
 margin-right ${e} ${C} ${f};
 `),b("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C} ${f},
 max-width ${e} ${C},
 margin-left ${e} ${C},
 margin-right ${e} ${C};
 `)]}const qe=E("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Qe=Z({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){je("-base-wave",qe,$e(e,"clsPrefix"));const f=S(null),h=S(!1);let u=null;return ze(()=>{u!==null&&window.clearTimeout(u)}),{active:h,selfRef:f,play(){u!==null&&(window.clearTimeout(u),h.value=!1,u=null),Be(()=>{var v;(v=f.value)===null||v===void 0||v.offsetHeight,h.value=!0,u=window.setTimeout(()=>{h.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}});function z(e){return ee(e,[255,255,255,.16])}function I(e){return ee(e,[0,0,0,.12])}const Le=ke("n-button-group"),Xe=b([E("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("color",[l("border",{borderColor:"var(--n-border-color)"}),x("disabled",[l("border",{borderColor:"var(--n-border-color-disabled)"})]),A("disabled",[b("&:focus",[l("state-border",{borderColor:"var(--n-border-color-focus)"})]),b("&:hover",[l("state-border",{borderColor:"var(--n-border-color-hover)"})]),b("&:active",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})]),x("pressed",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),x("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[l("border",{border:"var(--n-border-disabled)"})]),A("disabled",[b("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[l("state-border",{border:"var(--n-border-focus)"})]),b("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[l("state-border",{border:"var(--n-border-hover)"})]),b("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})]),x("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})])]),x("loading","cursor: wait;"),E("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[x("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Ne&&"MozBoxSizing"in document.createElement("div").style?b("&::moz-focus-inner",{border:0}):null,l("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),l("border",{border:"var(--n-border)"}),l("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),l("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[E("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Ie({top:"50%",originalTransform:"translateY(-50%)"})]),We()]),l("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[b("~",[l("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),x("block",`
 display: flex;
 width: 100%;
 `),x("dashed",[l("border, state-border",{borderStyle:"dashed !important"})]),x("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),b("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),b("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Ye=Object.assign(Object.assign({},oe.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!He}}),Ae=Z({name:"Button",props:Ye,slots:Object,setup(e){const f=S(null),h=S(null),u=S(!1),v=_e(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),re=Se(Le,{}),{mergedSizeRef:N}=Ke({},{defaultSize:"medium",mergedSize:t=>{const{size:d}=e;if(d)return d;const{size:y}=re;if(y)return y;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),O=R(()=>e.focusable&&!e.disabled),te=t=>{var d;O.value||t.preventDefault(),!e.nativeFocusBehavior&&(t.preventDefault(),!e.disabled&&O.value&&((d=f.value)===null||d===void 0||d.focus({preventScroll:!0})))},ne=t=>{var d;if(!e.disabled&&!e.loading){const{onClick:y}=e;y&&Ve(y,t),e.text||(d=h.value)===null||d===void 0||d.play()}},ie=t=>{switch(t.key){case"Enter":if(!e.keyboard)return;u.value=!1}},ae=t=>{switch(t.key){case"Enter":if(!e.keyboard||e.loading){t.preventDefault();return}u.value=!0}},se=()=>{u.value=!1},{inlineThemeDisabled:q,mergedClsPrefixRef:j,mergedRtlRef:le}=Re(e),de=oe("Button","-button",Xe,Me,e,j),ce=Te("Button",le,j),Q=R(()=>{const t=de.value,{common:{cubicBezierEaseInOut:d,cubicBezierEaseOut:y},self:o}=t,{rippleDuration:D,opacityDisabled:T,fontWeight:F,fontWeightStrong:_}=o,m=N.value,{dashed:K,type:w,ghost:M,text:g,color:i,round:L,circle:G,textColor:$,secondary:ue,tertiary:X,quaternary:be,strong:fe}=e,he={"--n-font-weight":fe?_:F};let a={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const P=w==="tertiary",Y=w==="default",n=P?"default":w;if(g){const s=$||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":s||o[r("textColorText",n)],"--n-text-color-hover":s?z(s):o[r("textColorTextHover",n)],"--n-text-color-pressed":s?I(s):o[r("textColorTextPressed",n)],"--n-text-color-focus":s?z(s):o[r("textColorTextHover",n)],"--n-text-color-disabled":s||o[r("textColorTextDisabled",n)]}}else if(M||K){const s=$||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":i||o[r("rippleColor",n)],"--n-text-color":s||o[r("textColorGhost",n)],"--n-text-color-hover":s?z(s):o[r("textColorGhostHover",n)],"--n-text-color-pressed":s?I(s):o[r("textColorGhostPressed",n)],"--n-text-color-focus":s?z(s):o[r("textColorGhostHover",n)],"--n-text-color-disabled":s||o[r("textColorGhostDisabled",n)]}}else if(ue){const s=Y?o.textColor:P?o.textColorTertiary:o[r("color",n)],c=i||s,k=w!=="default"&&w!=="tertiary";a={"--n-color":k?H(c,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":k?H(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":k?H(c,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":k?H(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":c,"--n-text-color-hover":c,"--n-text-color-pressed":c,"--n-text-color-focus":c,"--n-text-color-disabled":c}}else if(X||be){const s=Y?o.textColor:P?o.textColorTertiary:o[r("color",n)],c=i||s;X?(a["--n-color"]=o.colorTertiary,a["--n-color-hover"]=o.colorTertiaryHover,a["--n-color-pressed"]=o.colorTertiaryPressed,a["--n-color-focus"]=o.colorSecondaryHover,a["--n-color-disabled"]=o.colorTertiary):(a["--n-color"]=o.colorQuaternary,a["--n-color-hover"]=o.colorQuaternaryHover,a["--n-color-pressed"]=o.colorQuaternaryPressed,a["--n-color-focus"]=o.colorQuaternaryHover,a["--n-color-disabled"]=o.colorQuaternary),a["--n-ripple-color"]="#0000",a["--n-text-color"]=c,a["--n-text-color-hover"]=c,a["--n-text-color-pressed"]=c,a["--n-text-color-focus"]=c,a["--n-text-color-disabled"]=c}else a={"--n-color":i||o[r("color",n)],"--n-color-hover":i?z(i):o[r("colorHover",n)],"--n-color-pressed":i?I(i):o[r("colorPressed",n)],"--n-color-focus":i?z(i):o[r("colorFocus",n)],"--n-color-disabled":i||o[r("colorDisabled",n)],"--n-ripple-color":i||o[r("rippleColor",n)],"--n-text-color":$||(i?o.textColorPrimary:P?o.textColorTertiary:o[r("textColor",n)]),"--n-text-color-hover":$||(i?o.textColorHoverPrimary:o[r("textColorHover",n)]),"--n-text-color-pressed":$||(i?o.textColorPressedPrimary:o[r("textColorPressed",n)]),"--n-text-color-focus":$||(i?o.textColorFocusPrimary:o[r("textColorFocus",n)]),"--n-text-color-disabled":$||(i?o.textColorDisabledPrimary:o[r("textColorDisabled",n)])};let V={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};g?V={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:V={"--n-border":o[r("border",n)],"--n-border-hover":o[r("borderHover",n)],"--n-border-pressed":o[r("borderPressed",n)],"--n-border-focus":o[r("borderFocus",n)],"--n-border-disabled":o[r("borderDisabled",n)]};const{[r("height",m)]:W,[r("fontSize",m)]:ve,[r("padding",m)]:pe,[r("paddingRound",m)]:me,[r("iconSize",m)]:xe,[r("borderRadius",m)]:ye,[r("iconMargin",m)]:ge,waveOpacity:Ce}=o,we={"--n-width":G&&!g?W:"initial","--n-height":g?"initial":W,"--n-font-size":ve,"--n-padding":G||g?"initial":L?me:pe,"--n-icon-size":xe,"--n-icon-margin":ge,"--n-border-radius":g?"initial":G||L?W:ye};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":d,"--n-bezier-ease-out":y,"--n-ripple-duration":D,"--n-opacity-disabled":T,"--n-wave-opacity":Ce},he),a),V),we)}),B=q?Ge("button",R(()=>{let t="";const{dashed:d,type:y,ghost:o,text:D,color:T,round:F,circle:_,textColor:m,secondary:K,tertiary:w,quaternary:M,strong:g}=e;d&&(t+="a"),o&&(t+="b"),D&&(t+="c"),F&&(t+="d"),_&&(t+="e"),K&&(t+="f"),w&&(t+="g"),M&&(t+="h"),g&&(t+="i"),T&&(t+=`j${J(T)}`),m&&(t+=`k${J(m)}`);const{value:i}=N;return t+=`l${i[0]}`,t+=`m${y[0]}`,t}),Q,e):void 0;return{selfElRef:f,waveElRef:h,mergedClsPrefix:j,mergedFocusable:O,mergedSize:N,showBorder:v,enterPressed:u,rtlEnabled:ce,handleMousedown:te,handleKeydown:ae,handleBlur:se,handleKeyup:ie,handleClick:ne,customColorCssVars:R(()=>{const{color:t}=e;if(!t)return null;const d=z(t);return{"--n-border-color":t,"--n-border-color-hover":d,"--n-border-color-pressed":I(t),"--n-border-color-focus":d,"--n-border-color-disabled":t}}),cssVars:q?void 0:Q,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const{mergedClsPrefix:e,tag:f,onRender:h}=this;h==null||h();const u=U(this.$slots.default,v=>v&&p("span",{class:`${e}-button__content`},v));return p(f,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,p(De,{width:!0},{default:()=>U(this.$slots.icon,v=>(this.loading||this.renderIcon||v)&&p("span",{class:`${e}-button__icon`,style:{margin:Oe(this.$slots.default)?"0":""}},p(Ee,null,{default:()=>this.loading?p(Fe,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():v)})))}),this.iconPlacement==="left"&&u,this.text?null:p(Qe,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),ho=Ae;export{Ae as B,Qe as N,ho as X,We as f};
