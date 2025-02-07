import{d,t as u,h as a}from"./vue.esm-bundler-D4RNtN6S.js";import{n as b,o as l,f as o,p as f}from"./light-DsB5ODev.js";import{u as v}from"./use-style-DC-6GAXR.js";import{N as p}from"./Icon-CrmNSR1a.js";import{E as h}from"./Close-DtvJwW5M.js";const g=b("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[l("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),o("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),f("disabled",[o("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),o("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),o("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),o("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),o("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),l("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),l("round",[o("&::before",`
 border-radius: 50%;
 `)])]),C=d({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return v("-base-close",g,u(e,"clsPrefix")),()=>{const{clsPrefix:r,disabled:s,absolute:t,round:c,isButtonTag:n}=e;return a(n?"button":"div",{type:n?"button":void 0,tabindex:s||!e.focusable?-1:0,"aria-disabled":s,"aria-label":"close",role:n?void 0:"button",disabled:s,class:[`${r}-base-close`,t&&`${r}-base-close--absolute`,s&&`${r}-base-close--disabled`,c&&`${r}-base-close--round`],onMousedown:i=>{e.focusable||i.preventDefault()},onClick:e.onClick},a(p,{clsPrefix:r},{default:()=>a(h,null)}))}}});export{C as N};
