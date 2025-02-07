import{c as m}from"./vue.esm-bundler-D4RNtN6S.js";import{C as l,a as o}from"./CDescriptionList-EPWVZzDV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/DescriptionList",component:o,tags:["autodocs"],argTypes:{default:{control:!1},direction:{options:["column","row"]},rows:{control:"number"},columns:{control:"number"},labelPlacement:{options:["top","left"]},size:{options:["small","medium","large"]}},parameters:{docs:{description:{component:"Custom component that provides a flexible way to display key/value pairs in various layouts. It allows you to customize the orientation, placement, and size of the items, making it suitable for different use cases, such as forms, detailed information panels, or settings summaries. With configurable rows and columns, the component adapts to different screen sizes and content structures, offering a clean and organized presentation."}}},render:r=>({components:{CDescriptionList:o,CDescriptionItem:l},setup(){const i=m(()=>Array.from(Array(10)).map((p,t)=>({key:`Label ${t+1}`,value:`Value ${t+1}`})));return{args:r,items:i}},template:`
      <CDescriptionList
        :direction="args.direction"
        :rows="args.rows"
        :columns="args.columns"
        :label-placement="args.labelPlacement"
        :size="args.size"
      >
        <CDescriptionItem 
          v-for="(item, index) in items"
          :key="index">
          <template #label>{{ item.key }}</template>
          
          {{ item.value }}
        </CDescriptionItem>
      </CDescriptionList>
    `})},e={args:{direction:"column",rows:3,columns:3,labelPlacement:"top",size:"medium"}};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    rows: 3,
    columns: 3,
    labelPlacement: 'top',
    size: 'medium'
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,g as default};
