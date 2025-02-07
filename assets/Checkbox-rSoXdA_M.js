import{d as K,h as s,r as U,c as I,p as se,t as P,b as ue}from"./vue.esm-bundler-D4RNtN6S.js";import{u as be}from"./use-rtl-DB_faxJd.js";import{j as fe,l as j,f as b,n as c,z as he,A as ke,o as S,r as C,k as E,s as _}from"./light-DsB5ODev.js";import{u as H}from"./use-form-item-BaX4b55j.js";import{u as G}from"./use-merged-state-CUYpy2WA.js";import{c as l}from"./call-f2ri57Kd.js";import{i as me,N as ve}from"./icon-switch.cssr-CS-aOSlJ.js";import{r as xe}from"./resolve-slot-BBjw-So6.js";import{a as ge}from"./delegate-AmuGJuoF.js";import{u as pe}from"./use-memo-CglecHn5.js";import{c as Ce}from"./light-Bs5wOcbH.js";import{u as ye}from"./use-css-vars-class-BoK1eXI1.js";import{c as we}from"./index-L98eAIry.js";const V=fe("n-checkbox-group"),Re={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},He=K({name:"CheckboxGroup",props:Re,setup(o){const{mergedClsPrefixRef:i}=j(o),x=H(o),{mergedSizeRef:y,mergedDisabledRef:w}=x,g=U(o.defaultValue),T=I(()=>o.value),f=G(T,g),D=I(()=>{var u;return((u=f.value)===null||u===void 0?void 0:u.length)||0}),r=I(()=>Array.isArray(f.value)?new Set(f.value):new Set);function R(u,n){const{nTriggerFormInput:p,nTriggerFormChange:h}=x,{onChange:a,"onUpdate:value":k,onUpdateValue:m}=o;if(Array.isArray(f.value)){const t=Array.from(f.value),B=t.findIndex(F=>F===n);u?~B||(t.push(n),m&&l(m,t,{actionType:"check",value:n}),k&&l(k,t,{actionType:"check",value:n}),p(),h(),g.value=t,a&&l(a,t)):~B&&(t.splice(B,1),m&&l(m,t,{actionType:"uncheck",value:n}),k&&l(k,t,{actionType:"uncheck",value:n}),a&&l(a,t),g.value=t,p(),h())}else u?(m&&l(m,[n],{actionType:"check",value:n}),k&&l(k,[n],{actionType:"check",value:n}),a&&l(a,[n]),g.value=[n],p(),h()):(m&&l(m,[],{actionType:"uncheck",value:n}),k&&l(k,[],{actionType:"uncheck",value:n}),a&&l(a,[]),g.value=[],p(),h())}return se(V,{checkedCountRef:D,maxRef:P(o,"max"),minRef:P(o,"min"),valueSetRef:r,disabledRef:w,mergedSizeRef:y,toggleCheckbox:R}),{mergedClsPrefix:i}},render(){return s("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),ze=()=>s("svg",{viewBox:"0 0 64 64",class:"check-icon"},s("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Se=()=>s("svg",{viewBox:"0 0 100 100",class:"line-icon"},s("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Te=b([c("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[S("show-label","line-height: var(--n-label-line-height);"),b("&:hover",[c("checkbox-box",[C("border","border: var(--n-border-checked);")])]),b("&:focus:not(:active)",[c("checkbox-box",[C("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),S("inside-table",[c("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),S("checked",[c("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[c("checkbox-icon",[b(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("indeterminate",[c("checkbox-box",[c("checkbox-icon",[b(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),b(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("checked, indeterminate",[b("&:focus:not(:active)",[c("checkbox-box",[C("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),c("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[C("border",{border:"var(--n-border-checked)"})])]),S("disabled",{cursor:"not-allowed"},[S("checked",[c("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[C("border",{border:"var(--n-border-disabled-checked)"}),c("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),c("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[C("border",`
 border: var(--n-border-disabled);
 `),c("checkbox-icon",[b(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),C("label",`
 color: var(--n-text-color-disabled);
 `)]),c("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),c("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[C("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),c("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[b(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),me({left:"1px",top:"1px"})])]),C("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[b("&:empty",{display:"none"})])]),he(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ke(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),De=Object.assign(Object.assign({},E.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Ge=K({name:"Checkbox",props:De,setup(o){const i=ue(V,null),x=U(null),{mergedClsPrefixRef:y,inlineThemeDisabled:w,mergedRtlRef:g}=j(o),T=U(o.defaultChecked),f=P(o,"checked"),D=G(f,T),r=pe(()=>{if(i){const e=i.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return D.value===o.checkedValue}),R=H(o,{mergedSize(e){const{size:v}=o;if(v!==void 0)return v;if(i){const{value:d}=i.mergedSizeRef;if(d!==void 0)return d}if(e){const{mergedSize:d}=e;if(d!==void 0)return d.value}return"medium"},mergedDisabled(e){const{disabled:v}=o;if(v!==void 0)return v;if(i){if(i.disabledRef.value)return!0;const{maxRef:{value:d},checkedCountRef:z}=i;if(d!==void 0&&z.value>=d&&!r.value)return!0;const{minRef:{value:A}}=i;if(A!==void 0&&z.value<=A&&r.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:u,mergedSizeRef:n}=R,p=E("Checkbox","-checkbox",Te,Ce,o,y);function h(e){if(i&&o.value!==void 0)i.toggleCheckbox(!r.value,o.value);else{const{onChange:v,"onUpdate:checked":d,onUpdateChecked:z}=o,{nTriggerFormInput:A,nTriggerFormChange:N}=R,M=r.value?o.uncheckedValue:o.checkedValue;d&&l(d,M,e),z&&l(z,M,e),v&&l(v,M,e),A(),N(),T.value=M}}function a(e){u.value||h(e)}function k(e){if(!u.value)switch(e.key){case" ":case"Enter":h(e)}}function m(e){switch(e.key){case" ":e.preventDefault()}}const t={focus:()=>{var e;(e=x.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=x.value)===null||e===void 0||e.blur()}},B=be("Checkbox",g,y),F=I(()=>{const{value:e}=n,{common:{cubicBezierEaseInOut:v},self:{borderRadius:d,color:z,colorChecked:A,colorDisabled:N,colorTableHeader:M,colorTableHeaderModal:L,colorTableHeaderPopover:O,checkMarkColor:W,checkMarkColorDisabled:Y,border:q,borderFocus:J,borderDisabled:Q,borderChecked:X,boxShadowFocus:Z,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ne,borderDisabledChecked:ce,labelPadding:ae,labelLineHeight:le,labelFontWeight:ie,[_("fontSize",e)]:te,[_("size",e)]:de}}=p.value;return{"--n-label-line-height":le,"--n-label-font-weight":ie,"--n-size":de,"--n-bezier":v,"--n-border-radius":d,"--n-border":q,"--n-border-checked":X,"--n-border-focus":J,"--n-border-disabled":Q,"--n-border-disabled-checked":ce,"--n-box-shadow-focus":Z,"--n-color":z,"--n-color-checked":A,"--n-color-table":M,"--n-color-table-modal":L,"--n-color-table-popover":O,"--n-color-disabled":N,"--n-color-disabled-checked":ne,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":W,"--n-check-mark-color-disabled":Y,"--n-check-mark-color-disabled-checked":re,"--n-font-size":te,"--n-label-padding":ae}}),$=w?ye("checkbox",I(()=>n.value[0]),F,o):void 0;return Object.assign(R,t,{rtlEnabled:B,selfRef:x,mergedClsPrefix:y,mergedDisabled:u,renderedChecked:r,mergedTheme:p,labelId:we(),handleClick:a,handleKeyUp:k,handleKeyDown:m,cssVars:w?void 0:F,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){var o;const{$slots:i,renderedChecked:x,mergedDisabled:y,indeterminate:w,privateInsideTable:g,cssVars:T,labelId:f,label:D,mergedClsPrefix:r,focusable:R,handleKeyUp:u,handleKeyDown:n,handleClick:p}=this;(o=this.onRender)===null||o===void 0||o.call(this);const h=xe(i.default,a=>D||a?s("span",{class:`${r}-checkbox__label`,id:f},D||a):null);return s("div",{ref:"selfRef",class:[`${r}-checkbox`,this.themeClass,this.rtlEnabled&&`${r}-checkbox--rtl`,x&&`${r}-checkbox--checked`,y&&`${r}-checkbox--disabled`,w&&`${r}-checkbox--indeterminate`,g&&`${r}-checkbox--inside-table`,h&&`${r}-checkbox--show-label`],tabindex:y||!R?void 0:0,role:"checkbox","aria-checked":w?"mixed":x,"aria-labelledby":f,style:T,onKeyup:u,onKeydown:n,onClick:p,onMousedown:()=>{ge("selectstart",window,a=>{a.preventDefault()},{once:!0})}},s("div",{class:`${r}-checkbox-box-wrapper`}," ",s("div",{class:`${r}-checkbox-box`},s(ve,null,{default:()=>this.indeterminate?s("div",{key:"indeterminate",class:`${r}-checkbox-icon`},Se()):s("div",{key:"check",class:`${r}-checkbox-icon`},ze())}),s("div",{class:`${r}-checkbox-box__border`}))),h)}});export{Ge as N,He as a};
