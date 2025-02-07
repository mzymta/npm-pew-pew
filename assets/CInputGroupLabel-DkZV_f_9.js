import{d,h as i,c as l,v as _,y as x,A as L,x as w,m as y}from"./vue.esm-bundler-D4RNtN6S.js";import{n as k,r as B,k as p,l as I,s as u}from"./light-DsB5ODev.js";import{i as R}from"./light-3lQabVNk.js";import{u as G}from"./use-css-vars-class-BoK1eXI1.js";const S=k("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[B("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),P=Object.assign(Object.assign({},p.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),T=d({name:"InputGroupLabel",props:P,setup(e){const{mergedBorderedRef:r,mergedClsPrefixRef:n,inlineThemeDisabled:s}=I(e),c=p("Input","-input-group-label",S,R,e,n),t=l(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:b},self:{groupLabelColor:m,borderRadius:f,groupLabelTextColor:g,lineHeight:h,groupLabelBorder:z,[u("fontSize",a)]:v,[u("height",a)]:C}}=c.value;return{"--n-bezier":b,"--n-group-label-color":m,"--n-group-label-border":z,"--n-border-radius":f,"--n-group-label-text-color":g,"--n-font-size":v,"--n-line-height":h,"--n-height":C}}),o=s?G("input-group-label",l(()=>e.size[0]),t,e):void 0;return{mergedClsPrefix:n,mergedBordered:r,cssVars:s?void 0:t,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,r,n;const{mergedClsPrefix:s}=this;return(e=this.onRender)===null||e===void 0||e.call(this),i("div",{class:[`${s}-input-group-label`,this.themeClass],style:this.cssVars},(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r),this.mergedBordered?i("div",{class:`${s}-input-group-label__border`}):null)}}),V=d({__name:"CInputGroupLabel",props:{size:{default:"medium"}},setup(e){return(r,n)=>(w(),_(L(T),{size:r.size,class:"c-input-group-label"},{default:x(()=>[y(r.$slots,"default")]),_:3},8,["size"]))}});V.__docgenInfo={exportName:"default",displayName:"CInputGroupLabel",description:"",tags:{},props:[{name:"size",description:"Size of the label.",required:!1,type:{name:"union",elements:[{name:'"tiny"'},{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CInputGroupLabel/CInputGroupLabel.vue"]};export{V as _};
