import{r as s,c as n}from"./vue.esm-bundler-D4RNtN6S.js";import{f as a}from"./index-BOnq2-IM.js";import{_ as i}from"./CSelect-DRzlQD9r.js";import"./Select-B7l8C86T.js";import"./fade-in-scale-up.cssr-DKJ6UU5J.js";import"./light-DsB5ODev.js";import"./utils-CgJXxSjZ.js";import"./FocusDetector-Cm4LEqMh.js";import"./VResizeObserver-DllAtjZA.js";import"./use-memo-CglecHn5.js";import"./cssr-ChHp6ynC.js";import"./utils-Dy8q55w_.js";import"./index-Xn0jilRV.js";import"./Follower-DXtmSYJu.js";import"./index-CIE75m1q.js";import"./delegate-AmuGJuoF.js";import"./icon-switch.cssr-CS-aOSlJ.js";import"./render-CafAiG2R.js";import"./Icon-CrmNSR1a.js";import"./use-style-DC-6GAXR.js";import"./Checkmark-i7pX93Cq.js";import"./resolve-slot-BBjw-So6.js";import"./Loading-Ch5S3HjA.js";import"./Scrollbar-BbWWFAp8.js";import"./fade-in.cssr-DJOFltAV.js";import"./use-rtl-DB_faxJd.js";import"./use-css-vars-class-BoK1eXI1.js";import"./light-RknvjviJ.js";import"./get-precise-event-target-DhO46Lpt.js";import"./light-aICc-wbJ.js";import"./use-locale-CfrJhm3r.js";import"./enUS-CW6P5ZC_.js";import"./create-BYUmyaO5.js";import"./happens-in-CM8LO42l.js";import"./Suffix-BjoWbega.js";import"./replaceable-DM1aDluB.js";import"./upperFirst-CgVWOQVP.js";import"./toString-Vm_cEZ4d.js";import"./Tag-C1qgvQqN.js";import"./Close-MwAQiULY.js";import"./Close-DtvJwW5M.js";import"./light-BLNTlX85.js";import"./color-to-class-B0iQgAn2.js";import"./call-f2ri57Kd.js";import"./index-vIaLEAVY.js";import"./Popover-axeHrzq9.js";import"./light-BUP7UYSb.js";import"./index-Bg4fAuci.js";import"./index-L98eAIry.js";import"./get-first-slot-vnode-BHWfc99-.js";import"./flatten-B94A2huW.js";import"./keep-B1eBS8j0.js";import"./use-merged-state-CUYpy2WA.js";import"./use-compitable-B7ANSQOo.js";import"./attribute-Cz32yFEB.js";import"./light-BhikxYuE.js";import"./use-form-item-BaX4b55j.js";import"./index-DsSU6HIH.js";const Te={title:"Components/Select",component:i,tags:["autodocs"],decorators:[e=>({components:{story:e},template:'<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; align-items: center"><story/></div>'})],argTypes:{childrenField:{control:!1,description:"Word count."},size:{options:["tiny","small","medium","large"]},status:{options:["success","warning","error"]},ellipsisTagPopoverProps:{control:!1},filter:{control:!1},maxTagCount:{control:"number"},menuSize:{options:["tiny","small","medium","large"]},options:{control:!1},placement:{options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"]},renderLabel:{control:!1},renderOption:{control:!1},renderTag:{control:!1},to:{control:!1},value:{control:!1},defaultValue:{control:!1},"onUpdate:value":{table:{disable:!0}},"onUpdate:show":{table:{disable:!0}},onBlur:{table:{disable:!0}},onClear:{table:{disable:!0}},onFocus:{table:{disable:!0}},onScroll:{table:{disable:!0}},onSearch:{table:{disable:!0}}},parameters:{docs:{description:{component:"**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/select) but has additional properties: `hasError`, `id`.**"}}},render:e=>({components:{CSelect:i},setup(){const l=s("forrest_gump"),f=n(()=>[{label:"Inception",value:"inception"},{label:"The Dark Knight",value:"dark_knight"},{label:"Interstellar",value:"interstellar"},{label:"Parasite",value:"parasite"},{label:"The Godfather",value:"godfather"},{label:"Pulp Fiction",value:"pulp_fiction"},{label:"Fight Club",value:"fight_club"},{label:"Forrest Gump",value:"forrest_gump"},{label:"The Matrix",value:"matrix"},{label:"Gladiator",value:"gladiator"}]);return{args:e,value:l,options:f}},template:`
      <CSelect
        id="default-tag-input"
        style="max-width: 500px"
        v-model:value="value"
        :consistentMenuWidth="args.consistentMenuWidth"
        :childrenField="args.childrenField"
        :clearable="args.clearable"
        :clearFilterAfterSelect="args.clearFilterAfterSelect"
        :defaultValue="args.defaultValue"
        :disabled="args.disabled"
        :ellipsisTagPopoverProps="args.ellipsisTagPopoverProps"
        :filterable="args.filterable"
        :filter="args.filter"
        :hasError="args.hasError"
        :id="args.id"
        :ignoreComposition="args.ignoreComposition"
        :inputProps="args.inputProps"
        :keyboard="args.keyboard"
        :labelField="args.labelField"
        :loading="args.loading"
        :maxTagCount="args.maxTagCount"
        :menuProps="args.menuProps"
        :menuSize="args.menuSize"
        :multiple="args.multiple"
        :options="options"
        :placeholder="args.placeholder"
        :placement="args.placement"
        :remote="args.remote"
        :renderLabel="args.renderLabel"
        :renderOption="args.renderOption"
        :renderTag="args.renderTag"
        :resetMenuOnOptionsChange="args.resetMenuOnOptionsChange"
        :show="args.show"
        :showArrow="args.showArrow"
        :showCheckmark="args.showCheckmark"
        :showOnFocus="args.showOnFocus"
        :size="args.size"
        :status="args.status"
        :tag="args.tag"
        :to="args.to"
        :value="args.value"
        :valueField="args.valueField"
        :virtualScroll="args.virtualScroll"
        @update:value="args['onUpdate:value']"
        @update:show="args['onUpdate:show']"
        @blur="args.onBlur"
        @select="args.onClear"
        @focus="args.onFocus"
        @scroll="args.onScroll"
        @search="args.onSearch"
      />
    `})},t={args:{size:"medium","onUpdate:value":a(),"onUpdate:show":a(),onBlur:a(),onClear:a(),onFocus:a(),onScroll:a(),onSearch:a()}},r={render:()=>({components:{CSelect:i},setup(){const e=s("godfather"),l=n(()=>[{label:"Inception",value:"inception"},{label:"The Dark Knight",value:"dark_knight"},{label:"Interstellar",value:"interstellar"},{label:"Parasite",value:"parasite"},{label:"The Godfather",value:"godfather"},{label:"Pulp Fiction",value:"pulp_fiction"},{label:"Fight Club",value:"fight_club"},{label:"Forrest Gump",value:"forrest_gump"},{label:"The Matrix",value:"matrix"},{label:"Gladiator",value:"gladiator"}]);return{value:e,options:l}},template:`
      <CSelect 
        v-model:value="value"
        :options="options"
        clearable
        size="tiny"/>
      <CSelect 
        v-model:value="value"
        :options="options"
        clearable
        size="small"/>
      <CSelect 
        v-model:value="value"
        :options="options"
        clearable
        size="medium"/>
      <CSelect 
        v-model:value="value"
        :options="options"
        clearable
        size="large"/>
    `})},o={render:()=>({components:{CSelect:i},setup(){const e=s(["fight_club","gladiator"]),l=n(()=>[{label:"Inception",value:"inception"},{label:"The Dark Knight",value:"dark_knight"},{label:"Interstellar",value:"interstellar"},{label:"Parasite",value:"parasite"},{label:"The Godfather",value:"godfather"},{label:"Pulp Fiction",value:"pulp_fiction"},{label:"Fight Club",value:"fight_club"},{label:"Forrest Gump",value:"forrest_gump"},{label:"The Matrix",value:"matrix"},{label:"Gladiator",value:"gladiator"}]);return{value:e,options:l}},template:`
      <CSelect 
        v-model:value="value"
        :options="options"
        style="max-width: 500px"
        clearable
        multiple
        size="large"
        :maxTagCount="2"
      />
    `})};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    'onUpdate:value': fn(),
    'onUpdate:show': fn(),
    onBlur: fn(),
    onClear: fn(),
    onFocus: fn(),
    onScroll: fn(),
    onSearch: fn()
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CSelect
    },
    setup() {
      const value = ref('godfather');
      const options = computed(() => [{
        label: 'Inception',
        value: 'inception'
      }, {
        label: 'The Dark Knight',
        value: 'dark_knight'
      }, {
        label: 'Interstellar',
        value: 'interstellar'
      }, {
        label: 'Parasite',
        value: 'parasite'
      }, {
        label: 'The Godfather',
        value: 'godfather'
      }, {
        label: 'Pulp Fiction',
        value: 'pulp_fiction'
      }, {
        label: 'Fight Club',
        value: 'fight_club'
      }, {
        label: 'Forrest Gump',
        value: 'forrest_gump'
      }, {
        label: 'The Matrix',
        value: 'matrix'
      }, {
        label: 'Gladiator',
        value: 'gladiator'
      }]);
      return {
        value,
        options
      };
    },
    template: \`
      <CSelect 
        v-model:value="value"
        :options="options"
        clearable
        size="tiny"/>
      <CSelect 
        v-model:value="value"
        :options="options"
        clearable
        size="small"/>
      <CSelect 
        v-model:value="value"
        :options="options"
        clearable
        size="medium"/>
      <CSelect 
        v-model:value="value"
        :options="options"
        clearable
        size="large"/>
    \`
  })
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,b,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CSelect
    },
    setup() {
      const value = ref(['fight_club', 'gladiator']);
      const options = computed(() => [{
        label: 'Inception',
        value: 'inception'
      }, {
        label: 'The Dark Knight',
        value: 'dark_knight'
      }, {
        label: 'Interstellar',
        value: 'interstellar'
      }, {
        label: 'Parasite',
        value: 'parasite'
      }, {
        label: 'The Godfather',
        value: 'godfather'
      }, {
        label: 'Pulp Fiction',
        value: 'pulp_fiction'
      }, {
        label: 'Fight Club',
        value: 'fight_club'
      }, {
        label: 'Forrest Gump',
        value: 'forrest_gump'
      }, {
        label: 'The Matrix',
        value: 'matrix'
      }, {
        label: 'Gladiator',
        value: 'gladiator'
      }]);
      return {
        value,
        options
      };
    },
    template: \`
      <CSelect 
        v-model:value="value"
        :options="options"
        style="max-width: 500px"
        clearable
        multiple
        size="large"
        :maxTagCount="2"
      />
    \`
  })
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const xe=["Default","Size","Multiple"];export{t as Default,o as Multiple,r as Size,xe as __namedExportsOrder,Te as default};
