import{d as Y,h as i,r as R,t as me,c as z,J as U,N as be,B as pe,m as $,y as V,z as ve,A as ge,S as we,M as ye,x as H}from"./vue.esm-bundler-D4RNtN6S.js";import{i as O,N as ke}from"./icon-switch.cssr-CS-aOSlJ.js";import{n as L,r as n,f as q,o as d,p as X,k as J,l as xe,s as y}from"./light-DsB5ODev.js";import{i as j,r as k}from"./resolve-slot-BBjw-So6.js";import{N as Se}from"./Loading-Ch5S3HjA.js";import{s as Ce}from"./light-CsUjX7R1.js";import{u as $e}from"./use-form-item-BaX4b55j.js";import{u as Be}from"./use-merged-state-CUYpy2WA.js";import{p as A,d as u}from"./index-Xn0jilRV.js";import{u as Ve}from"./use-css-vars-class-BoK1eXI1.js";import{c as E}from"./call-f2ri57Kd.js";import{_ as _e}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ze=L("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[n("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),n("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),n("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),L("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[O({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),n("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),n("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),q("&:focus",[n("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),d("round",[n("rail","border-radius: calc(var(--n-rail-height) / 2);",[n("button","border-radius: calc(var(--n-button-height) / 2);")])]),X("disabled",[X("icon",[d("rubber-band",[d("pressed",[n("rail",[n("button","max-width: var(--n-button-width-pressed);")])]),n("rail",[q("&:active",[n("button","max-width: var(--n-button-width-pressed);")])]),d("active",[d("pressed",[n("rail",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),n("rail",[q("&:active",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),d("active",[n("rail",[n("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),n("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[n("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[O()]),n("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),d("active",[n("rail","background-color: var(--n-rail-color-active);")]),d("loading",[n("rail",`
 cursor: wait;
 `)]),d("disabled",[n("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Re=Object.assign(Object.assign({},J.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let _;const Fe=Y({name:"Switch",props:Re,slots:Object,setup(t){_===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?_=CSS.supports("width","max(1px)"):_=!1:_=!0);const{mergedClsPrefixRef:x,inlineThemeDisabled:p}=xe(t),l=J("Switch","-switch",ze,Ce,t,x),o=$e(t),{mergedSizeRef:S,mergedDisabledRef:r}=o,v=R(t.defaultValue),g=me(t,"value"),c=Be(g,v),w=z(()=>c.value===t.checkedValue),h=R(!1),e=R(!1),s=z(()=>{const{railStyle:a}=t;if(a)return a({focused:e.value,checked:w.value})});function f(a){const{"onUpdate:value":F,onChange:D,onUpdateValue:N}=t,{nTriggerFormInput:T,nTriggerFormChange:P}=o;F&&E(F,a),N&&E(N,a),D&&E(D,a),v.value=a,T(),P()}function Q(){const{nTriggerFormFocus:a}=o;a()}function Z(){const{nTriggerFormBlur:a}=o;a()}function ee(){t.loading||r.value||(c.value!==t.checkedValue?f(t.checkedValue):f(t.uncheckedValue))}function te(){e.value=!0,Q()}function ne(){e.value=!1,Z(),h.value=!1}function ae(a){t.loading||r.value||a.key===" "&&(c.value!==t.checkedValue?f(t.checkedValue):f(t.uncheckedValue),h.value=!1)}function ie(a){t.loading||r.value||a.key===" "&&(a.preventDefault(),h.value=!0)}const M=z(()=>{const{value:a}=S,{self:{opacityDisabled:F,railColor:D,railColorActive:N,buttonBoxShadow:T,buttonColor:P,boxShadowFocus:oe,loadingColor:re,textColor:se,iconColor:le,[y("buttonHeight",a)]:m,[y("buttonWidth",a)]:ce,[y("buttonWidthPressed",a)]:de,[y("railHeight",a)]:b,[y("railWidth",a)]:B,[y("railBorderRadius",a)]:ue,[y("buttonBorderRadius",a)]:he},common:{cubicBezierEaseInOut:fe}}=l.value;let W,I,K;return _?(W=`calc((${b} - ${m}) / 2)`,I=`max(${b}, ${m})`,K=`max(${B}, calc(${B} + ${m} - ${b}))`):(W=A((u(b)-u(m))/2),I=A(Math.max(u(b),u(m))),K=u(b)>u(m)?B:A(u(B)+u(m)-u(b))),{"--n-bezier":fe,"--n-button-border-radius":he,"--n-button-box-shadow":T,"--n-button-color":P,"--n-button-width":ce,"--n-button-width-pressed":de,"--n-button-height":m,"--n-height":I,"--n-offset":W,"--n-opacity-disabled":F,"--n-rail-border-radius":ue,"--n-rail-color":D,"--n-rail-color-active":N,"--n-rail-height":b,"--n-rail-width":B,"--n-width":K,"--n-box-shadow-focus":oe,"--n-loading-color":re,"--n-text-color":se,"--n-icon-color":le}}),C=p?Ve("switch",z(()=>S.value[0]),M,t):void 0;return{handleClick:ee,handleBlur:ne,handleFocus:te,handleKeyup:ae,handleKeydown:ie,mergedRailStyle:s,pressed:h,mergedClsPrefix:x,mergedValue:c,checked:w,mergedDisabled:r,cssVars:p?void 0:M,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:x,checked:p,mergedRailStyle:l,onRender:o,$slots:S}=this;o==null||o();const{checked:r,unchecked:v,icon:g,"checked-icon":c,"unchecked-icon":w}=S,h=!(j(g)&&j(c)&&j(w));return i("div",{role:"switch","aria-checked":p,class:[`${t}-switch`,this.themeClass,h&&`${t}-switch--icon`,p&&`${t}-switch--active`,x&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:l},k(r,e=>k(v,s=>e||s?i("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},i("div",{class:`${t}-switch__rail-placeholder`},i("div",{class:`${t}-switch__button-placeholder`}),e),i("div",{class:`${t}-switch__rail-placeholder`},i("div",{class:`${t}-switch__button-placeholder`}),s)):null)),i("div",{class:`${t}-switch__button`},k(g,e=>k(c,s=>k(w,f=>i(ke,null,{default:()=>this.loading?i(Se,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(s||e)?i("div",{class:`${t}-switch__button-icon`,key:s?"checked-icon":"icon"},s||e):!this.checked&&(f||e)?i("div",{class:`${t}-switch__button-icon`,key:f?"unchecked-icon":"icon"},f||e):null})))),k(r,e=>e&&i("div",{key:"checked",class:`${t}-switch__checked`},e)),k(v,e=>e&&i("div",{key:"unchecked",class:`${t}-switch__unchecked`},e)))))}}),De=["tabindex"],Ne={key:0,class:"c-switch__label"},G=Y({__name:"CSwitch",props:{value:{type:Boolean},gap:{default:12},labelPlacement:{default:"start"},align:{default:"center"},isDisabled:{type:Boolean,default:!1},size:{default:"medium"},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!0}},emits:["update:value","focus","blur"],setup(t,{expose:x,emit:p}){const l=t,o=p;function S(e){return typeof e=="number"?`${e}px`:e}const r=R(null);x({focus:()=>{var e;return(e=r.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=r.value)==null?void 0:e.blur()}});const v=z(()=>({gap:S(l.gap),flexDirection:l.labelPlacement==="start"?"row":"row-reverse",alignItems:l.align==="center"?"center":"flex-start"}));function g(){l.isDisabled||o("update:value",!l.value)}const c=R(!1);function w(){l.isDisabled||c.value||(c.value=!0,o("focus"))}function h(e){var s;l.isDisabled||e.relatedTarget&&((s=r.value)!=null&&s.contains(e.relatedTarget))||(c.value=!1,o("blur"))}return(e,s)=>(H(),U("div",{ref_key:"switcher",ref:r,class:"c-switch",tabindex:e.isDisabled?-1:0,style:ye(v.value),onFocusCapture:w,onBlurCapture:h,onKeydown:we(g,["enter"]),onClick:g},[e.$slots.default?(H(),U("div",Ne,[$(e.$slots,"default",{},void 0,!0)])):be("",!0),pe(ge(Fe),ve({class:"c-switch__control"},e.$attrs,{value:e.value,disabled:e.isDisabled,round:e.round,size:e.size,loading:e.loading,tabindex:"-1"}),{checked:V(()=>[$(e.$slots,"checked",{},void 0,!0)]),"checked-icon":V(()=>[$(e.$slots,"checked-icon",{},void 0,!0)]),icon:V(()=>[$(e.$slots,"icon",{},void 0,!0)]),unchecked:V(()=>[$(e.$slots,"unchecked",{},void 0,!0)]),"unchecked-icon":V(()=>[$(e.$slots,"unchecked-icon",{},void 0,!0)]),_:3},16,["value","disabled","round","size","loading"])],44,De))}}),Oe=_e(G,[["__scopeId","data-v-9ca0a771"]]);G.__docgenInfo={exportName:"default",displayName:"CSwitch",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],props:[{name:"value",description:"State of the switch.",required:!0,type:{name:"boolean"}},{name:"gap",description:"Size of the gap between label and switch. It can be specified either as number or as a pixel value.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"12"}},{name:"labelPlacement",description:"Position of the label.",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"end"'}]},defaultValue:{func:!1,value:"'start'"}},{name:"align",description:"Alignment of the switch element.",required:!1,type:{name:"union",elements:[{name:'"center"'},{name:'"start"'}]},defaultValue:{func:!1,value:"'center'"}},{name:"isDisabled",description:"Whether the switch is disabled.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"The size of the switch.",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"loading",description:"Whether the switch is in a loading state.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"round",description:"Whether the switch has rounded corners.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value",type:{names:["boolean"]},description:"Callback when the component's value changes."},{name:"focus",description:"Emitted when the switch receives focus."},{name:"blur",description:"Emitted when the switch loses focus."}],slots:[{name:"default",description:"Content for the label."},{name:"checked",description:"Content when the switch is checked."},{name:"checked-icon"},{name:"icon",description:"Icon of switch button."},{name:"unchecked",description:"Content when the switch is unchecked."},{name:"unchecked-icon"}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CSwitch/CSwitch.vue"]};export{Oe as C};
