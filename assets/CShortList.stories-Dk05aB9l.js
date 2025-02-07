import{C as o}from"./CShortList--0dsdfvU.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./CButton-CYpEF-bO.js";import"./Button-CF0RFvFf.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./use-css-vars-class-BoK1eXI1.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./CIcon-BdIW6TD_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CCollapseTransition-Dr-u_SKe.js";import"./fade-in-height-expand.cssr-BiZZSMP_.js";import"./light-C7NmY139.js";const H={title:"Components/ShortList",component:o,tags:["autodocs"],decorators:[s=>({components:{story:s},template:'<div style="max-width: 300px"><story/></div>'})],argTypes:{list:{control:!1},itemKey:{control:!1},hasMarker:{control:"boolean"},max:{control:"number"},size:{control:"select",options:["small","medium"]},default:{control:!1,description:"Slot for the list item."}},parameters:{docs:{description:{component:"Custom component that displays a list of objects presented by a specific property."}}},render:s=>({components:{CShortList:o},setup(){return{args:s,users:[{id:1,name:"John Smith"},{id:2,name:"Jane Doe"},{id:3,name:"Charlie Brown"},{id:4,name:"Daisy Duck"}],itemKey:h=>h.name}},template:`
      <CShortList
        :list="users"
        :item-key="itemKey"
        :max="args.max"
        :size="args.size"
        :has-marker="args.hasMarker"
      />
    `})},e={args:{max:5,size:"medium",hasMarker:!0}},r={args:{max:5,size:"small",hasMarker:!0}},t={args:{max:3,size:"medium",hasMarker:!0}};var a,m,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    max: 5,
    size: 'medium',
    hasMarker: true
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var n,p,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    max: 5,
    size: 'small',
    hasMarker: true
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    max: 3,
    size: 'medium',
    hasMarker: true
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const I=["Default","Small","CollapsedList"];export{t as CollapsedList,e as Default,r as Small,I as __namedExportsOrder,H as default};
