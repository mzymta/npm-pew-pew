import{r as l}from"./vue.esm-bundler-D4RNtN6S.js";import{_ as e,l as c,d as n}from"./CConfigProvider-CiIIjQNg.js";import{_ as d}from"./CButton-CYpEF-bO.js";import{C as g}from"./CAlert-nEu4dqu-.js";import{_ as u}from"./CDatePicker-sObQRYSJ.js";import{_ as f}from"./CTag-C5BDAZge.js";import{I as t}from"./i18n-Dfxg1NAk.js";import{C as r}from"./theme-CUrklq6a.js";import"./light-DsB5ODev.js";import"./light-CaBpc4YN.js";import"./light-BhikxYuE.js";import"./light-aICc-wbJ.js";import"./light-RknvjviJ.js";import"./light-BUP7UYSb.js";import"./light-Bs5wOcbH.js";import"./light-3lQabVNk.js";import"./light-Lzn-IxFN.js";import"./light-BOGBRVgS.js";import"./light-BLNTlX85.js";import"./light-B4v_Ronm.js";import"./light-CsUjX7R1.js";import"./light-BjPY59S2.js";import"./light-cVvDERhS.js";import"./light-Cio_vDsU.js";import"./light-BfyaJdh5.js";import"./light-OZX3WncC.js";import"./light-CRxrqwBH.js";import"./light-CHA7kYeg.js";import"./light-Du_kP9Wc.js";import"./light-CyAnVjyU.js";import"./light-C7NmY139.js";import"./light-C8pqK_rb.js";import"./light-qvuNFt7m.js";import"./light-CSx0HXEM.js";import"./light-BYaGoqh_.js";import"./light-CpNjUeST.js";import"./light-DklxBdP7.js";import"./enUS-CW6P5ZC_.js";import"./use-memo-CglecHn5.js";import"./Button-CF0RFvFf.js";import"./use-rtl-DB_faxJd.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./resolve-slot-BBjw-So6.js";import"./use-style-DC-6GAXR.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-form-item-BaX4b55j.js";import"./use-css-vars-class-BoK1eXI1.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./fade-in-height-expand.cssr-BiZZSMP_.js";import"./Close-MwAQiULY.js";import"./Icon-CrmNSR1a.js";import"./Close-DtvJwW5M.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./Success-Dpq3D3vw.js";import"./Warning-Cd2ybYWr.js";import"./index-Xn0jilRV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DatePicker-DEQ4QxIL.js";import"./use-keyboard-D8ejRVqf.js";import"./utils-Dy8q55w_.js";import"./delegate-AmuGJuoF.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./get-precise-event-target-DhO46Lpt.js";import"./FocusDetector-Cm4LEqMh.js";import"./cssr-ChHp6ynC.js";import"./Follower-DXtmSYJu.js";import"./index-CIE75m1q.js";import"./use-locale-CfrJhm3r.js";import"./Forward-CyX9KY7E.js";import"./Input-DEy15p9s.js";import"./Suffix-BjoWbega.js";import"./use-merged-state-CUYpy2WA.js";import"./fade-in-scale-up.cssr-DKJ6UU5J.js";import"./index-DsSU6HIH.js";import"./happens-in-CM8LO42l.js";import"./Tag-C1qgvQqN.js";const Qo={title:"Components/ConfigProvider",component:e,tags:["autodocs"],argTypes:{colorScheme:{options:[r.DARK,r.LIGHT]},locale:{options:[t.EN,t.DE],control:"select"},customDarkTheme:{control:!1},customLightTheme:{control:!1},default:{control:!1}},parameters:{docs:{description:{component:"Config Provider is used to set global theme, set global language and set namespace for components (detached parts)."}}},render:a=>({components:{CConfigProvider:e,CButton:d,CAlert:g,CDatePicker:u,CTag:f},setup(){const s=l(null);return{args:a,date:s,ColorScheme:r,darkThemeOverrides:n,lightThemeOverrides:c}},template:`
      <CConfigProvider 
        :color-scheme="args.colorScheme"
        :locale="args.locale"
        :style="{
          background: args.colorScheme === ColorScheme.DARK 
            ? darkThemeOverrides.common?.bodyColor 
            : lightThemeOverrides.common?.bodyColor
        }"
        style="padding: 20px; display: grid; gap: 12px; justify-items: start">
        <CButton type="primary">Button</CButton>
        <CAlert type="info">
          <template #header>Please Note!</template>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus libero neque omnis voluptates! Aliquid debitis, earum eius minus tempore voluptatum?
        </CAlert>
        <CDatePicker
          v-model:value="date"
          panel
        />
      </CConfigProvider>
      
      <div style="padding-left: 20px; margin-top: 12px; display: flex; gap: 4px; align-items: center">
        <b>Color Scheme:</b> 
        <CTag>{{ args.colorScheme }}</CTag>
      </div>
      <div style="padding-left: 20px; margin-top: 4px; display: flex; gap: 4px; align-items: center">
        <b>Locale:</b> 
        <CTag>{{ args.locale }}</CTag>
      </div>
    `})},o={args:{colorScheme:r.DARK,locale:t.EN}};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    colorScheme: ColorScheme.DARK,
    locale: I18nLocale.EN
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Uo=["Default"];export{o as Default,Uo as __namedExportsOrder,Qo as default};
