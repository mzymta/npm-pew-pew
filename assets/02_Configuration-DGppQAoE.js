import{j as e,M as t}from"./index-KqosJdiO.js";import{useMDXComponents as i}from"./index-DYlFtnSv.js";import"./iframe-B4btOp_Z.js";import"./index-DwuQKlh1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-jkCnbkv3.js";import"./index-ogSvIofg.js";function o(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Configuration"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsx(s.h1,{id:"configuration",children:"Configuration"}),e.jsx(s.p,{children:"After all essential dependencies are installed you can import Vue components, types, helpers, constants locally, e.g.:"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`<script setup lang="ts">
  import {
    CButton,
    CFormField,
    CForm,
    CAlert,
    CInput,
    LocalStorageHelper
    type ColorScheme
  } from 'npm-pew-pew';

  LocalStorageHelper.set('auth', 'auth-token');
<\/script>

<template>
  <div>
    <CInput
      :id="fieldId"
      v-model:value="credentials.password"
      :has-error="hasError"
      size="large"
      :placeholder="t('password')"
      type="password"
      show-password-on="click"
      @input="formStatus.hasSubmitError = false"
    />
  </div>
</template>
`})}),e.jsx(s.h2,{id:"styles",children:"Styles"}),e.jsxs(s.p,{children:["To make the styles work create ",e.jsx(s.code,{children:"styles"})," folder with ",e.jsx(s.code,{children:"styles.scss"})," and ",e.jsx(s.code,{children:"utils.scss"}),` files in it.
In `,e.jsx(s.code,{children:"styles.scss"})," put the following exactly as is:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`$fonts-path: 'npm-pew-pew/dist/assets/fonts';
@import 'npm-pew-pew/dist/styles/styles';

/* your global styles */
`})}),e.jsxs(s.p,{children:["We need to redeclare ",e.jsx(s.code,{children:"$fonts-path"})," here to make the fonts work. ",e.jsx(s.code,{children:"styles.scss"})," can be used to declare global styles  and it should be imported to ",e.jsx(s.code,{children:"main.ts"})," file:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@/styles/styles.scss';
`})}),e.jsx(s.hr,{}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"utils"})," should contain the utilities like functions, mixins, variables"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-scss",children:`@forward 'npm-pew-pew/dist/styles/utils';

/* your utilities */
`})}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"utils"})," can be imported to Vue component styles to use mixins, variables, functions locally:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`<style lang="scss" scoped>
  @use '@/styles/utils' as utils;

  .block {
    padding: utils.unit(3);
    margin-bottom: utils.unit(5);
    transition: opacity utils.$transition-duration;
    position: relative;

    @include utils.mobile {
      margin-bottom: utils.unit(3);
    }

    &__child {
      @include utils.absolute-fit;
    }
  }
</style>
`})}),e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["⚠ ",e.jsxs(s.strong,{children:["it is strongly recommended to ",e.jsx(s.code,{children:"utils.unit(3)"})," for indents (margins, paddings, top, left, right, etc, but not for sizes like width or height) , where ",e.jsx(s.code,{children:"3"})," is a multiplier for the unit that is equal to ",e.jsx(s.code,{children:"4px"})]})]}),`
`]}),e.jsx(s.h2,{id:"icons",children:"Icons"}),e.jsxs(s.p,{children:["To make the icons work svg sprite should be generated  (",e.jsx(s.code,{children:"vite-plugin-svg-icons"})," plugin is used for that purpose). So you need to install it:"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`yarn add vite-plugin-svg-icons -D
`})}),e.jsx(s.p,{children:"To work with the icons:"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["create ",e.jsx(s.code,{children:"assets > icons"})," folder inside ",e.jsx(s.code,{children:"src"})," folder of your project. You can also have subfolders inside icons folder to separate base and custom coloured icons: e.g. ",e.jsx(s.code,{children:"base"})," and ",e.jsx(s.code,{children:"custom"})," folders. ",e.jsx(s.strong,{children:"Make sure there is no fill colors inside the svgs for base icons"})]}),`
`,e.jsxs(s.li,{children:["Inside ",e.jsx(s.code,{children:"vite,config.ts"}),":"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`...
plugins: {
  ...,
  createSvgIconsPlugin({
    iconDirs: [
      // Include this to make the icons inside lib components work
      path.resolve(process.cwd(), 'node_modules/npm-pew-pew/dist/assets/icons'),
      // Include your project icons
      path.resolve(process.cwd(), 'src/assets/icons'),
    ],
    symbolId: 'icon-[dir]-[name]',
  }),
  ...
}
`})}),e.jsxs(s.p,{children:["Please refer to ",e.jsx(s.code,{children:"vite-plugin-svg-icons"})," ",e.jsx(s.a,{href:"https://github.com/vbenjs/vite-plugin-svg-icons",rel:"nofollow",children:"documentation"})," for more information."]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["It is strongly recommended to create ",e.jsx(s.code,{children:"enum"})," to keep track of the icons you add to the ",e.jsx(s.code,{children:"icons"})," folder and use it for name prop of ",e.jsx(s.code,{children:"CIcon"})," component:"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`// iconName.ts
export enum IconName {
// base folder
  BASE_LOGO_PEWPEW = 'base-pew-pew-logo', //  [dir]-[name]

  // custom folder
  CUSTOM_SUN = 'custom-sun',  // [dir]-[name]
}
`})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`// inside Vue component
<script setup lang="ts">
  import { IconName } from '@/utils/types/icon';
<\/script>

<template>
  <CIcon
    class="logo-icon"
    :name="IconName.BASE_LOGO_PEWPEW"
  />
</template>
`})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["To change the color of the icon you can use ",e.jsx(s.code,{children:"fill"})," css property"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`<style lang="scss" scoped>
  @use '@/styles/utils' as utils;

  .logo-icon {
    fill: var(--primary-color);
    transition: fill utils.$transition-duration;

    &:hover {
      fill: var(--primary-color-hover);
    }
  }
</style>
`})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Library uses outline icons from https://ionic.io/ionicons so you can add icons from ionicons to ",e.jsx(s.code,{children:"icons"})," folder when necessary"]}),`
`]})]})]})}function m(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{m as default};
