import{r as e,c as n}from"./vue.esm-bundler-D4RNtN6S.js";import{f as C}from"./index-BOnq2-IM.js";import{C as u}from"./CForm-B-bif2bm.js";import{C as S}from"./CInput-JyLJ_8RY.js";import{C as w}from"./CFormField-BTZO6Pfe.js";import{_ as E}from"./CButton-CYpEF-bO.js";import{C as F}from"./CAlert-nEu4dqu-.js";import"./CCollapseTransition-Dr-u_SKe.js";import"./use-rtl-DB_faxJd.js";import"./light-DsB5ODev.js";import"./fade-in-height-expand.cssr-BiZZSMP_.js";import"./FadeInExpandTransition-LhRfDe22.js";import"./light-C7NmY139.js";import"./use-css-vars-class-BoK1eXI1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CIcon-BdIW6TD_.js";import"./Input-DEy15p9s.js";import"./browser-DLIXj5nt.js";import"./is-browser-DqcmxZSF.js";import"./resolve-slot-BBjw-So6.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./VResizeObserver-DllAtjZA.js";import"./index-Xn0jilRV.js";import"./delegate-AmuGJuoF.js";import"./light-RknvjviJ.js";import"./get-precise-event-target-DhO46Lpt.js";import"./Suffix-BjoWbega.js";import"./Loading-Ch5S3HjA.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./use-style-DC-6GAXR.js";import"./Icon-CrmNSR1a.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./light-3lQabVNk.js";import"./use-locale-CfrJhm3r.js";import"./enUS-CW6P5ZC_.js";import"./use-merged-state-CUYpy2WA.js";import"./use-form-item-BaX4b55j.js";import"./use-memo-CglecHn5.js";import"./call-f2ri57Kd.js";import"./Button-CF0RFvFf.js";import"./light-CaBpc4YN.js";import"./color-to-class-B0iQgAn2.js";import"./Close-MwAQiULY.js";import"./Close-DtvJwW5M.js";import"./Success-Dpq3D3vw.js";import"./Warning-Cd2ybYWr.js";import"./light-BYaGoqh_.js";const Se={title:"Components/Form",component:u,tags:["autodocs"],argTypes:{onSubmit:{table:{disable:!0}}},parameters:{docs:{description:{component:"A customizable form component that supports slot-based rendering for form fields, error messages, and action buttons. It includes built-in support for error transitions and handles form submission with a `submit` event."}}},render:h=>({components:{CForm:u,CFormField:w,CInput:S,CButton:E,CAlert:F},setup(){const r=e(!1),t=e(!1),o=e(""),m=e(""),l=n(()=>r.value&&(o.value.length===0||!o.value.includes("@"))),p=n(()=>r.value&&(o.value.length===0||m.value.length<3)),s=e(!1),i=e(!1);function v(){s.value=!1,r.value=!1,i.value=!1}async function b(){if(v(),r.value=!0,!(p.value||l.value)){if(t.value=!0,await new Promise(g=>{setTimeout(g,500)}),Math.random()>.9){s.value=!0,t.value=!1;return}i.value=!0,t.value=!1}}return{args:h,username:o,password:m,hasUsernameError:l,hasPasswordError:p,login:b,isSubmitted:r,isSubmitting:t,isSubmitSuccess:i,hasSubmitError:s}},template:`
      <CForm 
        class="login-form"
        style="max-width: 500px"
        @submit="() => {args.onSubmit(); login();}">
        <CFormField
          field-id="login-username"
          :has-error="hasUsernameError"
        >
          <template #label>
            Username
          </template>

          <template #default="{ hasError, fieldId }">
            <CInput
              :id="fieldId"
              v-model:value="username"
              size="large"
              :has-error="hasError"
              placeholder="user@mail.com"
              @input="() => hasSubmitError = false"
            />
          </template>

          <template #errors>
            <template v-if="username.length === 0">
              Username is required.
            </template>
            <template v-else>Username should be a valid email address.</template>
          </template>
        </CFormField>

        <CFormField
          field-id="login-password"
          :has-error="hasPasswordError"
        >
          <template #label>
            Password
          </template>

          <template #default="{ hasError, fieldId }">
            <CInput
              :id="fieldId"
              v-model:value="password"
              :has-error="hasError"
              size="large"
              placeholder="Password"
              type="password"
              show-password-on="click"
              @input="hasSubmitError = false"
            />
          </template>

          <template #errors>
            <template v-if="password.length === 0">
              Password is required.
            </template>
            <template v-else>Password should be at least 3 characters long.</template>
          </template>
        </CFormField>

        <template
          v-if="hasSubmitError"
          #error
        >
          <CAlert
            type="error"
            closable
            @close="hasSubmitError = false"
          >
            <template #header>
              The Credentials are incorrect.
            </template>
            
            Please verify the credentials and try to login once again.
          </CAlert>
        </template>

        <template #actions>
          <div class="form-actions">
            <CButton
              type="primary"
              size="large"
              block
              attrType="submit"
              class="form-actions__login"
              :loading="isSubmitting"
            >
              Login
            </CButton>
          </div>
        </template>
      </CForm>
      
      <div 
        v-if="isSubmitSuccess"
        style="margin-top: 12px">Success!</div>
    `})},a={args:{onSubmit:C()}};var d,c,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    onSubmit: fn()
  }
}`,...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const we=["Default"];export{a as Default,we as __namedExportsOrder,Se as default};
