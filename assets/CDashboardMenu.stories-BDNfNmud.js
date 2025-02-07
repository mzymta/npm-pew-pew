import{r as y,c as p}from"./vue.esm-bundler-D4RNtN6S.js";import{f as m}from"./index-BOnq2-IM.js";import{C as b,a as s,b as f,c as C,d as I,D as t}from"./CDashboardMenu-BTiE4UXy.js";import{C as v}from"./CTile-Cv4kNu6I.js";import{C as D}from"./CIcon-BdIW6TD_.js";import"./CDropdown-D6kB3pA2.js";import"./Dropdown-D7LC012C.js";import"./Popover-axeHrzq9.js";import"./index-CIE75m1q.js";import"./light-DsB5ODev.js";import"./delegate-AmuGJuoF.js";import"./toString-Vm_cEZ4d.js";import"./Follower-DXtmSYJu.js";import"./use-memo-CglecHn5.js";import"./cssr-ChHp6ynC.js";import"./utils-Dy8q55w_.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./light-BUP7UYSb.js";import"./use-css-vars-class-BoK1eXI1.js";import"./get-precise-event-target-DhO46Lpt.js";import"./resolve-slot-BBjw-So6.js";import"./index-Bg4fAuci.js";import"./index-L98eAIry.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./use-rtl-DB_faxJd.js";import"./index-Xn0jilRV.js";import"./light-RknvjviJ.js";import"./get-first-slot-vnode-BHWfc99-.js";import"./flatten-B94A2huW.js";import"./keep-B1eBS8j0.js";import"./use-merged-state-CUYpy2WA.js";import"./use-compitable-B7ANSQOo.js";import"./call-f2ri57Kd.js";import"./render-CafAiG2R.js";import"./light-CRxrqwBH.js";import"./happens-in-CM8LO42l.js";import"./fade-in-scale-up.cssr-DKJ6UU5J.js";import"./create-BYUmyaO5.js";import"./use-keyboard-D8ejRVqf.js";import"./create-ref-setter-C4J8sofl.js";import"./CAvatar-Bb1VByV2.js";import"./is-browser-DqcmxZSF.js";import"./Tag-C1qgvQqN.js";import"./Close-MwAQiULY.js";import"./use-style-DC-6GAXR.js";import"./Icon-CrmNSR1a.js";import"./Close-DtvJwW5M.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./light-BLNTlX85.js";import"./color-to-class-B0iQgAn2.js";import"./light-qvuNFt7m.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CButton-CYpEF-bO.js";import"./Button-CF0RFvFf.js";import"./browser-DLIXj5nt.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./Loading-Ch5S3HjA.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";import"./CCollapseTransition-Dr-u_SKe.js";import"./fade-in-height-expand.cssr-BiZZSMP_.js";import"./light-C7NmY139.js";import"./dashboard-BgeZsjkb.js";import"./viewport-CtZjWKL5.js";import"./keysOf-HiGXOwLp.js";import"./Tooltip-BYkYGbMt.js";import"./light-Lzn-IxFN.js";import"./light-CyAnVjyU.js";import"./index-vIaLEAVY.js";import"./CSkeleton-BQgGCk3S.js";import"./CCloseButton-Cu-pxIpa.js";import"./CSpin-PilhVice.js";import"./light-cVvDERhS.js";const Xe={title:"Components/Dashboard/DashboardMenu",component:s,tags:["autodocs"],argTypes:{onExpand:{table:{disable:!0}},onSelect:{table:{disable:!0}},items:{control:!1}},parameters:{docs:{description:{component:"The DashboardMenu component is intended to be used inside the DashboardSidebar to provide the side menu for a dashboard layout."}},layout:"fullscreen"},render:i=>({components:{CDashboardLayout:I,CDashboardHeader:C,CIcon:D,CDashboardSidebar:f,CDashboardMenu:s,CDashboardPage:b,CTile:v},setup(){const e=y("HOME_PAGE");function c(r){var a;(a=i.onSelect)==null||a.call(i,r),e.value=r}const u=p(()=>[{key:"HOME",children:[{key:"HOME_PAGE",title:"Home",type:t.LINK,iconName:"home",to:"/",isHidden:!1,isActive:e.value==="HOME_PAGE"}]},{key:"GROUP_1",title:"Group 1",isHidden:!1,children:[{key:"EXPANDABLE",title:"Expandable",type:t.BUTTON,iconName:"search",isHidden:!1,isActive:e.value==="ExpOption1"||e.value==="ExpOption2",children:[{key:"ExpOption1",title:"Subitem 1",type:t.LINK,to:"/",isHidden:!1,isActive:e.value==="ExpOption1"},{key:"ExpOption2",title:"Subitem 2",type:t.LINK,to:"/",isHidden:!1,isActive:e.value==="ExpOption2"}]},{key:"G1Item2",title:"Item 2",type:t.LINK,iconName:"key",to:"/",isHidden:!1,isActive:e.value==="G1Item2"},{key:"G1Item3",title:"Item 3",type:t.LINK,iconName:"briefcase",to:"/",isHidden:!1,isActive:e.value==="G1Item3"}]},{key:"GROUP_2",title:"Group 2",isHidden:!1,children:[{key:"G2Item1",title:"Item 1",type:t.LINK,iconName:"calendar",to:"/",isHidden:!1,isActive:e.value==="G2Item1"},{key:"G2Item2",title:"Item 2",type:t.LINK,iconName:"documents",to:"/",isHidden:!1,isActive:e.value==="G2Item2"}]}]),h=p(()=>[{label:"Settings",key:"SETTINGS"},{label:"Logout",key:"LOGOUT"}]);return{args:i,userMenuOptions:h,sideMenuItems:u,handleOptionSelect:c}},template:`
      <CDashboardLayout :has-side-menu="true">
        <template #header>
          <CDashboardHeader
            user-name="ricky.gervais"
            :options="userMenuOptions"
            :has-side-menu="true"
          >
            <template #start>
              <div style="display: flex; align-items: center; gap: 8px;">
                <CIcon
                  :is-inline="true"
                  name="eye"
                  style="width: 40px; height: 40px; color: var(--primary-color);"
                />
                <span
                  class="logo__text" 
                  style="font-size: 24px; font-family: 'NeueMachina';"
                >Project</span>
              </div>
            </template>
          </CDashboardHeader>
        </template>

        <template #sidebar>
          <CDashboardSidebar>
            <CDashboardMenu 
              :items="sideMenuItems" 
              @select="handleOptionSelect"
              @expand="args.onExpand"/>
          </CDashboardSidebar>
        </template>

        <main>
          <CDashboardPage :has-side-menu="true">
            <CTile style="height: 2000px">
              <template #title>Content</template>

              <CTile style="height: 100%; background: var(--text-color-3); opacity: 0.1;">
              </CTile>
            </CTile>
          </CDashboardPage>
        </main>
      </CDashboardLayout>
    `})},o={args:{onExpand:m(),onSelect:m()}};var n,d,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    onExpand: fn(),
    onSelect: fn()
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const qe=["Default"];export{o as Default,qe as __namedExportsOrder,Xe as default};
