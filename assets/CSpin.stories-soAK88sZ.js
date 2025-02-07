import{_ as o}from"./CSpin-PilhVice.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./fade-in.cssr-DJOFltAV.js";import"./light-DsB5ODev.js";import"./Loading-Ch5S3HjA.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./use-style-DC-6GAXR.js";import"./light-cVvDERhS.js";import"./index-Xn0jilRV.js";import"./use-css-vars-class-BoK1eXI1.js";import"./use-compitable-B7ANSQOo.js";const w={title:"Components/Spin",component:o,tags:["autodocs"],decorators:[e=>({components:{story:e},template:'<div style="width: 100%; height: 100px; display: flex; justify-content: center;"><story/></div>'})],argTypes:{contentStyle:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]},description:{control:"text"},default:{control:!1},icon:{control:!1}},parameters:{docs:{description:{component:`**Matches [Naive UI component](https://www.naiveui.com/en-US/os-theme/components/spin).**

 The component is a graphical representation of a loading process.`}}},render:e=>({components:{CSpin:o},setup(){return{args:e}},template:`
      <CSpin 
        :size="args.size"
        :show="args.show"
        :description="args.description"
        :rotate="args.rotate"
        :stroke-width="args.strokeWidth"
        :stroke="args.stroke"
        :delay="args.delay"
      />
    `})},t={args:{size:"medium",show:!0}};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    show: true
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,w as default};
