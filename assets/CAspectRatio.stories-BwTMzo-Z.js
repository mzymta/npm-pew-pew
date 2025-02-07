import{d as C,c as v,J as w,K as x,m as S,M as A,x as N}from"./vue.esm-bundler-D4RNtN6S.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T={class:"c-aspect-ratio__content"},h=C({__name:"CAspectRatio",props:{ratio:{}},setup(e){const _=e,y=v(()=>{const[a,s]=_.ratio.split(":").map(Number);return`${s/a*100}%`});return(a,s)=>(N(),w("div",{style:A({paddingTop:y.value}),class:"c-aspect-ratio"},[x("div",T,[S(a.$slots,"default",{},void 0,!0)])],4))}}),n=R(h,[["__scopeId","data-v-07478f0e"]]);h.__docgenInfo={exportName:"default",displayName:"CAspectRatio",description:"",tags:{},props:[{name:"ratio",description:"The aspect ratio in the format w:h (width:height, e.g '4:3')",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CAspectRatio/CAspectRatio.vue"]};const b={title:"Components/AspectRatio",component:n,tags:["autodocs"],decorators:[e=>({components:{story:e},template:'<div style="max-width: 400px"><story/></div>'})],argTypes:{ratio:{control:"text"},default:{control:!1,description:"Content that should match the ratio."}},parameters:{docs:{description:{component:`**Custom component / Non-Naive UI.** 

 Maintains a specified aspect ratio for content, ensuring consistent proportions according to specified aspect ratio. Ideal for embedding media and ensuring layout integrity across different screen sizes.`}}},render:e=>({components:{CAspectRatio:n},setup(){return{args:e}},template:`
      <CAspectRatio :ratio="args.ratio">
        <div style="background: lightgray; width: 100%; height: 100%;">
          {{ args.ratio }}
        </div>
      </CAspectRatio>
    `})},t={args:{ratio:"16:9"}},o={args:{ratio:"1:1"}},r={args:{ratio:"4:3"}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ratio: '16:9'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ratio: '1:1'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,g,f;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ratio: '4:3'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const q=["SixteenNine","Square","FourThree"];export{r as FourThree,t as SixteenNine,o as Square,q as __namedExportsOrder,b as default};
