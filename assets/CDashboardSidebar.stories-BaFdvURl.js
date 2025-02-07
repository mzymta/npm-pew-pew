import{r as o,c as u}from"./vue.esm-bundler-D4RNtN6S.js";import{C as h,a as y,b as r,c as b,d as f,D as t}from"./CDashboardMenu-BTiE4UXy.js";import{C as v}from"./CIcon-BdIW6TD_.js";import{_ as I}from"./CButton-CYpEF-bO.js";import"./CDropdown-D6kB3pA2.js";import"./Dropdown-D7LC012C.js";import"./Popover-axeHrzq9.js";import"./index-CIE75m1q.js";import"./light-DsB5ODev.js";import"./delegate-AmuGJuoF.js";import"./toString-Vm_cEZ4d.js";import"./Follower-DXtmSYJu.js";import"./use-memo-CglecHn5.js";import"./cssr-ChHp6ynC.js";import"./utils-Dy8q55w_.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./light-BUP7UYSb.js";import"./use-css-vars-class-BoK1eXI1.js";import"./get-precise-event-target-DhO46Lpt.js";import"./resolve-slot-BBjw-So6.js";import"./index-Bg4fAuci.js";import"./index-L98eAIry.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./use-rtl-DB_faxJd.js";import"./index-Xn0jilRV.js";import"./light-RknvjviJ.js";import"./get-first-slot-vnode-BHWfc99-.js";import"./flatten-B94A2huW.js";import"./keep-B1eBS8j0.js";import"./use-merged-state-CUYpy2WA.js";import"./use-compitable-B7ANSQOo.js";import"./call-f2ri57Kd.js";import"./render-CafAiG2R.js";import"./light-CRxrqwBH.js";import"./happens-in-CM8LO42l.js";import"./fade-in-scale-up.cssr-DKJ6UU5J.js";import"./create-BYUmyaO5.js";import"./use-keyboard-D8ejRVqf.js";import"./create-ref-setter-C4J8sofl.js";import"./CAvatar-Bb1VByV2.js";import"./is-browser-DqcmxZSF.js";import"./Tag-C1qgvQqN.js";import"./Close-MwAQiULY.js";import"./use-style-DC-6GAXR.js";import"./Icon-CrmNSR1a.js";import"./Close-DtvJwW5M.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./light-BLNTlX85.js";import"./color-to-class-B0iQgAn2.js";import"./light-qvuNFt7m.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CCollapseTransition-Dr-u_SKe.js";import"./fade-in-height-expand.cssr-BiZZSMP_.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./light-C7NmY139.js";import"./dashboard-BgeZsjkb.js";import"./viewport-CtZjWKL5.js";import"./keysOf-HiGXOwLp.js";import"./Tooltip-BYkYGbMt.js";import"./light-Lzn-IxFN.js";import"./light-CyAnVjyU.js";import"./index-vIaLEAVY.js";import"./Button-CF0RFvFf.js";import"./browser-DLIXj5nt.js";import"./Loading-Ch5S3HjA.js";import"./use-form-item-BaX4b55j.js";import"./light-CaBpc4YN.js";const Pe={title:"Components/Dashboard/DashboardSidebar",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"The DashboardSidebar is a layout component, wrapper for DashboardMenu."}},layout:"fullscreen"},render:s=>({components:{CDashboardLayout:f,CDashboardHeader:b,CIcon:v,CDashboardSidebar:r,CDashboardMenu:y,CDashboardPage:h,CButton:I},setup(){const e=o("HOME_PAGE"),n=o(!0);function d(c){e.value=c}const l=u(()=>[{key:"HOME",children:[{key:"HOME_PAGE",title:"Home",type:t.LINK,iconName:"home",to:"/",isHidden:!1,isActive:e.value==="HOME_PAGE"}]},{key:"GROUP_1",title:"Group 1",isHidden:!1,children:[{key:"EXPANDABLE",title:"Expandable",type:t.BUTTON,iconName:"search",isHidden:!1,isActive:e.value==="ExpOption1"||e.value==="ExpOption2",children:[{key:"ExpOption1",title:"Subitem 1",type:t.LINK,to:"/",isHidden:!1,isActive:e.value==="ExpOption1"},{key:"ExpOption2",title:"Subitem 2",type:t.LINK,to:"/",isHidden:!1,isActive:e.value==="ExpOption2"}]},{key:"G1Item2",title:"Item 2",type:t.LINK,iconName:"key",to:"/",isHidden:!1,isActive:e.value==="G1Item2"},{key:"G1Item3",title:"Item 3",type:t.LINK,iconName:"briefcase",to:"/",isHidden:!1,isActive:e.value==="G1Item3"}]},{key:"GROUP_2",title:"Group 2",isHidden:!1,children:[{key:"G2Item1",title:"Item 1",type:t.LINK,iconName:"calendar",to:"/",isHidden:!1,isActive:e.value==="G2Item1"},{key:"G2Item2",title:"Item 2",type:t.LINK,iconName:"documents",to:"/",isHidden:!1,isActive:e.value==="G2Item2"}]}]);return{args:s,isSideMenuShown:n,sideMenuItems:l,handleOptionSelect:d}},template:`
      <CDashboardLayout :has-side-menu="true">
        <template #header>
          <CDashboardHeader
            user-name="ricky gervais"
            :options="[]"
            :has-side-menu="true"
            :has-user-menu="false"
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
              v-if="isSideMenuShown"
              :items="sideMenuItems" 
              @select="handleOptionSelect"
              @expand="args.onExpand"/>
            <div v-else
            style="padding: 8px; text-align: center; color: var(--text-color-3);">Sidebar</div>
          </CDashboardSidebar>
        </template>

        <main>
          <CButton secondary @click="isSideMenuShown = !isSideMenuShown">
            {{
              isSideMenuShown ? 'Hide Menu in Sidebar' : 'Show Menu in Sidebar'
            }}
          </CButton>
        </main>
      </CDashboardLayout>
    `})},i={};var a,p,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Ke=["Default"];export{i as Default,Ke as __namedExportsOrder,Pe as default};
