import{d as i,h as n,t as o}from"./vue.esm-bundler-D4RNtN6S.js";import{n as t,f as a}from"./light-DsB5ODev.js";import{u as s}from"./use-style-DC-6GAXR.js";const r=t("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[a("svg",`
 height: 1em;
 width: 1em;
 `)]),c=i({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){s("-base-icon",r,o(e,"clsPrefix"))},render(){return n("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});export{c as N};
