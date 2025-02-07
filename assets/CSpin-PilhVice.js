import{d as g,h as a,a as z,c as p,r as $,e as V,v as B,D as R,y as m,z as q,A as N,x as T,m as h}from"./vue.esm-bundler-D4RNtN6S.js";import{f as W}from"./fade-in.cssr-DJOFltAV.js";import{f as y,n as d,o as v,k as w,l as I,s as j}from"./light-DsB5ODev.js";import{N as O}from"./Loading-Ch5S3HjA.js";import{s as P}from"./light-cVvDERhS.js";import{p as x}from"./index-Xn0jilRV.js";import{u as D}from"./use-css-vars-class-BoK1eXI1.js";import{u as E}from"./use-compitable-B7ANSQOo.js";const _=y([y("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),d("spin-container",`
 position: relative;
 `,[d("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[W()])]),d("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),d("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[v("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),d("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),d("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[v("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),H={small:20,medium:18,large:16},K=Object.assign(Object.assign({},w.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),L=g({name:"Spin",props:K,slots:Object,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=I(n),s=w("Spin","-spin",_,P,n,e),u=p(()=>{const{size:i}=n,{common:{cubicBezierEaseInOut:r},self:f}=s.value,{opacitySpinning:b,color:k,textColor:S}=f,C=typeof i=="number"?x(i):f[j("size",i)];return{"--n-bezier":r,"--n-opacity-spinning":b,"--n-size":C,"--n-color":k,"--n-text-color":S}}),o=t?D("spin",p(()=>{const{size:i}=n;return typeof i=="number"?String(i):i[0]}),u,n):void 0,c=E(n,["spinning","show"]),l=$(!1);return V(i=>{let r;if(c.value){const{delay:f}=n;if(f){r=window.setTimeout(()=>{l.value=!0},f),i(()=>{clearTimeout(r)});return}}l.value=c.value}),{mergedClsPrefix:e,active:l,mergedStrokeWidth:p(()=>{const{strokeWidth:i}=n;if(i!==void 0)return i;const{size:r}=n;return H[typeof r=="number"?"medium":r]}),cssVars:t?void 0:u,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n,e;const{$slots:t,mergedClsPrefix:s,description:u}=this,o=t.icon&&this.rotate,c=(u||t.description)&&a("div",{class:`${s}-spin-description`},u||((n=t.description)===null||n===void 0?void 0:n.call(t))),l=t.icon?a("div",{class:[`${s}-spin-body`,this.themeClass]},a("div",{class:[`${s}-spin`,o&&`${s}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),c):a("div",{class:[`${s}-spin-body`,this.themeClass]},a(O,{clsPrefix:s,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),c);return(e=this.onRender)===null||e===void 0||e.call(this),t.default?a("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},a("div",{class:[`${s}-spin-content`,this.active&&`${s}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),a(z,{name:"fade-in-transition"},{default:()=>this.active?l:null})):l}}),A=g({__name:"CSpin",props:{contentClass:{default:void 0},contentStyle:{default:void 0},description:{default:void 0},rotate:{type:Boolean,default:!0},size:{default:"medium"},show:{type:Boolean,default:!0},strokeWidth:{default:void 0},stroke:{default:void 0},delay:{default:void 0}},setup(n){return(e,t)=>(T(),B(N(L),q({class:"c-spin",description:e.description,rotate:e.rotate,size:e.size,show:e.show,"stroke-width":e.strokeWidth,stroke:e.stroke,delay:e.delay},e.$attrs),R({default:m(()=>[h(e.$slots,"default")]),description:m(()=>[h(e.$slots,"description")]),_:2},[e.$slots.icon?{name:"icon",fn:m(()=>[h(e.$slots,"icon")]),key:"0"}:void 0]),1040,["description","rotate","size","show","stroke-width","stroke","delay"]))}});A.__docgenInfo={exportName:"default",displayName:"CSpin",description:"",tags:{},props:[{name:"contentClass",description:"Content Class of the spin.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"contentStyle",description:"Content style of the spin.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"description",description:"Description of the spin.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"rotate",description:"Specify whether icon rotates, only working for custom icon.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"Size of the spin.",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'},{name:"number"}]},defaultValue:{func:!1,value:"'medium'"}},{name:"show",description:"Specify whether spin is active when spin has content inside. It won't work if you just use spin itself.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"strokeWidth",description:"Relative width of spin's stroke, assuming the outer radius of spin is 100.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"stroke",description:"Color of the spin.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"delay",description:"Specifies a delay in milliseconds for loading state (prevent flush).",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default",description:"If set, spin will wrap the content."},{name:"description",description:"Description of the spin."},{name:"icon",description:"Customize the spin icon."}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CSpin/CSpin.vue"]};export{A as _};
