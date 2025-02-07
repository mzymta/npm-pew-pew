import{f as s}from"./index-BOnq2-IM.js";import{C as o}from"./CTile-Cv4kNu6I.js";import{_ as n}from"./CButton-CYpEF-bO.js";import{C as l}from"./CIcon-BdIW6TD_.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./CSkeleton-BQgGCk3S.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CCloseButton-Cu-pxIpa.js";import"./CSpin-PilhVice.js";import"./fade-in.cssr-DJOFltAV.js";import"./light-DsB5ODev.js";import"./Loading-Ch5S3HjA.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./use-style-DC-6GAXR.js";import"./light-cVvDERhS.js";import"./index-Xn0jilRV.js";import"./use-css-vars-class-BoK1eXI1.js";import"./use-compitable-B7ANSQOo.js";import"./Button-CF0RFvFf.js";import"./use-rtl-DB_faxJd.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./resolve-slot-BBjw-So6.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./use-memo-CglecHn5.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";const F={title:"Components/Tile",component:o,tags:["autodocs"],decorators:[t=>({components:{story:t},template:'<div style=""><story/></div>'})],argTypes:{onClose:{table:{disable:!0}},loading:{control:!1,description:"Loading slot."},"loading-header":{control:!1,description:"Loading header content."},"loading-content":{control:!1,description:"Loading content slot."},"loading-footer":{control:!1,description:"Loading footer content."},"loading-actions":{control:!1,description:"Loading actions slot."},title:{control:!1,description:"Title slot."},header:{control:!1,description:"Header content."},"header-extra":{control:!1,description:"Header extra content."},default:{control:!1,description:"Default slot."},footer:{control:!1,description:"Footer content."},actions:{control:!1,description:"Operating area content."},processing:{control:!1,description:"Processing slot."}},parameters:{docs:{description:{component:"CTile is a block that represents a visual unit that can display content, such as text, images, or interactive elements, in a grid-like structure. Tiles are often used to present information in a clean, organized manner."}}},render:t=>({components:{CTile:o,CButton:n,CIcon:l},setup(){return{args:t}},template:`
      <CTile
        :is-loading="args.isLoading"
        :is-closable="args.isClosable"
        :is-processing="args.isProcessing"
        @close="args.onClose"
      >
        <template #title>
          Tile Demo
        </template>

        <template #header>
          #header
        </template>

        <template #header-extra>
          <CButton type="info" size="small">
            <CIcon
              :is-inline="true"
              name="pencil"
            />
          </CButton>
        </template>
        
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

        <template #actions>
          <CButton type="info" size="small">Click Me</CButton>
        </template>
        
        <template #footer>
          #footer
        </template>
      </CTile>
    `})},e={args:{onClose:s()}};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    onClose: fn()
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,F as default};
