import{d as i,h as n,r as a,c as l}from"./vue.esm-bundler-D4RNtN6S.js";import{p as m,N as c}from"./Popover-axeHrzq9.js";import{k as r,l as h}from"./light-DsB5ODev.js";import{t as d}from"./light-Lzn-IxFN.js";const v=Object.assign(Object.assign({},m),r.props),b=i({name:"Tooltip",props:v,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:o}=h(e),t=r("Tooltip","-tooltip",void 0,d,e,o),s=a(null);return Object.assign(Object.assign({},{syncPosition(){s.value.syncPosition()},setShow(p){s.value.setShow(p)}}),{popoverRef:s,mergedTheme:t,popoverThemeOverrides:l(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return n(c,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{b as N};
