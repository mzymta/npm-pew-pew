import{d as c,h as t,t as u}from"./vue.esm-bundler-D4RNtN6S.js";import{i as n,N as m}from"./icon-switch.cssr-CS-aOSlJ.js";import{f as l,n as p,r as s}from"./light-DsB5ODev.js";import{u as g}from"./use-style-DC-6GAXR.js";const h=l([l("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),p("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[s("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[n()]),s("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[n({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),s("container",`
 animation: rotator 3s linear infinite both;
 `,[s("icon",`
 height: 1em;
 width: 1em;
 `)])])]),o="1.6s",b={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},v=c({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},b),setup(a){g("-base-loading",h,u(a,"clsPrefix"))},render(){const{clsPrefix:a,radius:r,strokeWidth:i,stroke:d,scale:f}=this,e=r/f;return t("div",{class:`${a}-base-loading`,role:"img","aria-label":"loading"},t(m,null,{default:()=>this.show?t("div",{key:"icon",class:`${a}-base-loading__transition-wrapper`},t("div",{class:`${a}-base-loading__container`},t("svg",{class:`${a}-base-loading__icon`,viewBox:`0 0 ${2*e} ${2*e}`,xmlns:"http://www.w3.org/2000/svg",style:{color:d}},t("g",null,t("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${e} ${e};270 ${e} ${e}`,begin:"0s",dur:o,fill:"freeze",repeatCount:"indefinite"}),t("circle",{class:`${a}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":i,"stroke-linecap":"round",cx:e,cy:e,r:r-i/2,"stroke-dasharray":5.67*r,"stroke-dashoffset":18.48*r},t("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${e} ${e};135 ${e} ${e};450 ${e} ${e}`,begin:"0s",dur:o,fill:"freeze",repeatCount:"indefinite"}),t("animate",{attributeName:"stroke-dashoffset",values:`${5.67*r};${1.42*r};${5.67*r}`,begin:"0s",dur:o,fill:"freeze",repeatCount:"indefinite"})))))):t("div",{key:"placeholder",class:`${a}-base-loading__placeholder`},this.$slots)}))}});export{v as N};
