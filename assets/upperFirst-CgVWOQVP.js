import{t as m}from"./toString-Vm_cEZ4d.js";function R(r,e,u){var a=-1,f=r.length;e<0&&(e=-e>f?0:f+e),u=u>f?f:u,u<0&&(u+=f),f=e>u?0:u-e>>>0,e>>>=0;for(var s=Array(f);++a<f;)s[a]=r[a+e];return s}function v(r,e,u){var a=r.length;return u=u===void 0?a:u,R(r,e,u)}var p="\\ud800-\\udfff",C="\\u0300-\\u036f",h="\\ufe20-\\ufe2f",A="\\u20d0-\\u20ff",S=C+h+A,y="\\ufe0e\\ufe0f",$="\\u200d",M=RegExp("["+$+p+S+y+"]");function i(r){return M.test(r)}function k(r){return r.split("")}var t="\\ud800-\\udfff",x="\\u0300-\\u036f",U="\\ufe20-\\ufe2f",j="\\u20d0-\\u20ff",F=x+U+j,H="\\ufe0e\\ufe0f",J="["+t+"]",o="["+F+"]",n="\\ud83c[\\udffb-\\udfff]",O="(?:"+o+"|"+n+")",c="[^"+t+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",T="\\u200d",g=O+"?",b="["+H+"]?",V="(?:"+T+"(?:"+[c,l,d].join("|")+")"+b+g+")*",E=b+g+V,W="(?:"+[c+o+"?",o,l,d,J].join("|")+")",Z=RegExp(n+"(?="+n+")|"+W+E,"g");function q(r){return r.match(Z)||[]}function w(r){return i(r)?q(r):k(r)}function z(r){return function(e){e=m(e);var u=i(e)?w(e):void 0,a=u?u[0]:e.charAt(0),f=u?v(u,1).join(""):e.slice(1);return a[r]()+f}}var P=z("toUpperCase");export{P as u};
