import{b as Wt,p as Zt,d as F,h as y,r as T,_ as Yt,c as m,q as tt,f as nt,Y as at,Q as Ft,R as Xt,a as Ht,t as Kt,e as Gt,$ as Jt,w as ie,n as je,M as Qt,v as rt,y as ue,A as ot,x as st,m as de,H as Le,I as Ue}from"./vue.esm-bundler-D4RNtN6S.js";import{j as en,t as tn,l as fe,n as nn,r as f,o as p,f as N,k as it}from"./light-DsB5ODev.js";import{i as an}from"./index-L98eAIry.js";import{f as rn}from"./flatten-B94A2huW.js";import{V as qe}from"./VResizeObserver-DllAtjZA.js";import{b as We}from"./resolve-slot-BBjw-So6.js";import{k as Ze}from"./keep-B1eBS8j0.js";import{u as on}from"./use-merged-state-CUYpy2WA.js";import{c as sn}from"./light-C8pqK_rb.js";import{u as ln}from"./use-css-vars-class-BoK1eXI1.js";import{g as un}from"./get-precise-event-target-DhO46Lpt.js";import{a as J,o as Q}from"./delegate-AmuGJuoF.js";import{t as ke}from"./toString-Vm_cEZ4d.js";import{u as dn}from"./upperFirst-CgVWOQVP.js";function cn(e){return dn(ke(e).toLowerCase())}function fn(e,n,r,u){for(var l=-1,o=e==null?0:e.length;++l<o;)r=n(r,e[l],l,e);return r}function pn(e){return function(n){return e==null?void 0:e[n]}}var vn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},mn=pn(vn),hn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,gn="\\u0300-\\u036f",xn="\\ufe20-\\ufe2f",bn="\\u20d0-\\u20ff",wn=gn+xn+bn,yn="["+wn+"]",Sn=RegExp(yn,"g");function Cn(e){return e=ke(e),e&&e.replace(hn,mn).replace(Sn,"")}var Rn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Pn(e){return e.match(Rn)||[]}var In=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function zn(e){return In.test(e)}var lt="\\ud800-\\udfff",kn="\\u0300-\\u036f",Vn="\\ufe20-\\ufe2f",Dn="\\u20d0-\\u20ff",Nn=kn+Vn+Dn,ut="\\u2700-\\u27bf",dt="a-z\\xdf-\\xf6\\xf8-\\xff",Tn="\\xac\\xb1\\xd7\\xf7",An="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",$n="\\u2000-\\u206f",En=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ct="A-Z\\xc0-\\xd6\\xd8-\\xde",Mn="\\ufe0e\\ufe0f",ft=Tn+An+$n+En,pt="['’]",Ye="["+ft+"]",On="["+Nn+"]",vt="\\d+",Bn="["+ut+"]",mt="["+dt+"]",ht="[^"+lt+ft+vt+ut+dt+ct+"]",_n="\\ud83c[\\udffb-\\udfff]",jn="(?:"+On+"|"+_n+")",Ln="[^"+lt+"]",gt="(?:\\ud83c[\\udde6-\\uddff]){2}",xt="[\\ud800-\\udbff][\\udc00-\\udfff]",Y="["+ct+"]",Un="\\u200d",Fe="(?:"+mt+"|"+ht+")",qn="(?:"+Y+"|"+ht+")",Xe="(?:"+pt+"(?:d|ll|m|re|s|t|ve))?",He="(?:"+pt+"(?:D|LL|M|RE|S|T|VE))?",bt=jn+"?",wt="["+Mn+"]?",Wn="(?:"+Un+"(?:"+[Ln,gt,xt].join("|")+")"+wt+bt+")*",Zn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Yn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fn=wt+bt+Wn,Xn="(?:"+[Bn,gt,xt].join("|")+")"+Fn,Hn=RegExp([Y+"?"+mt+"+"+Xe+"(?="+[Ye,Y,"$"].join("|")+")",qn+"+"+He+"(?="+[Ye,Y+Fe,"$"].join("|")+")",Y+"?"+Fe+"+"+Xe,Y+"+"+He,Yn,Zn,vt,Xn].join("|"),"g");function Kn(e){return e.match(Hn)||[]}function Gn(e,n,r){return e=ke(e),n=n,n===void 0?zn(e)?Kn(e):Pn(e):e.match(n)||[]}var Jn="['’]",Qn=RegExp(Jn,"g");function ea(e){return function(n){return fn(Gn(Cn(n).replace(Qn,"")),e,"")}}var Ke=ea(function(e,n,r){return n=n.toLowerCase(),e+(r?cn(n):n)});const yt=en("n-carousel-methods");function ta(e){Zt(yt,e)}function Ve(e="unknown",n="component"){const r=Wt(yt);return r||tn(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}function na(){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function aa(){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const ra=F({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=fe(e),{isVertical:r,isPrevDisabled:u,isNextDisabled:l,prev:o,next:S}=Ve();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:u,isNextDisabled:l,prev:o,next:S}},render(){const{mergedClsPrefix:e}=this;return y("div",{class:`${e}-carousel__arrow-group`},y("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},na()),y("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},aa()))}}),oa={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},sa=F({name:"CarouselDots",props:oa,setup(e){const{mergedClsPrefixRef:n}=fe(e),r=T([]),u=Ve();function l(x,v){switch(x.key){case"Enter":case" ":x.preventDefault(),u.to(v);return}e.keyboard&&g(x)}function o(x){e.trigger==="hover"&&u.to(x)}function S(x){e.trigger==="click"&&u.to(x)}function g(x){var v;if(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey)return;const w=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(w==="input"||w==="textarea")return;const{code:P}=x,O=P==="PageUp"||P==="ArrowUp",B=P==="PageDown"||P==="ArrowDown",R=P==="PageUp"||P==="ArrowRight",I=P==="PageDown"||P==="ArrowLeft",$=u.isVertical(),_=$?O:R,E=$?B:I;!_&&!E||(x.preventDefault(),_&&!u.isNextDisabled()?(u.next(),C(u.currentIndexRef.value)):E&&!u.isPrevDisabled()&&(u.prev(),C(u.currentIndexRef.value)))}function C(x){var v;(v=r.value[x])===null||v===void 0||v.focus()}return Yt(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:l,handleMouseenter:o,handleClick:S}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return y("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},an(this.total,r=>{const u=r===this.currentIndex;return y("div",{"aria-selected":u,ref:l=>n.push(l),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,u&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:l=>{this.handleKeydown(l,r)}})}))}}),ce="CarouselItem";function ia(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===ce}const St=F({name:ce,setup(e){const{mergedClsPrefixRef:n}=fe(e),r=Ve(Ke(ce),`n-${Ke(ce)}`),u=T(),l=m(()=>{const{value:v}=u;return v?r.getSlideIndex(v):-1}),o=m(()=>r.isPrev(l.value)),S=m(()=>r.isNext(l.value)),g=m(()=>r.isActive(l.value)),C=m(()=>r.getSlideStyle(l.value));tt(()=>{r.addSlide(u.value)}),nt(()=>{r.removeSlide(u.value)});function x(v){const{value:w}=l;w!==void 0&&(r==null||r.onCarouselItemClick(w,v))}return{mergedClsPrefix:n,selfElRef:u,isPrev:o,isNext:S,isActive:g,index:l,style:C,handleClick:x}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:u,isNext:l,isActive:o,index:S,style:g}=this,C=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:o,[`${r}-carousel__slide--prev`]:u,[`${r}-carousel__slide--next`]:l}];return y("div",{ref:"selfElRef",class:C,role:"option",tabindex:"-1","data-index":S,"aria-hidden":!o,style:g,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:u,isNext:l,isActive:o,index:S}))}}),la=nn("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[f("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[f("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[N("> img",`
 display: block;
 `)])]),f("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[p("dot",[f("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[N("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),p("active",`
 background-color: var(--n-dot-color-active);
 `)])]),p("line",[f("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[N("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),p("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),f("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[N("svg",`
 height: 1em;
 width: 1em;
 `),N("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),p("vertical",`
 touch-action: pan-x;
 `,[f("slides",`
 flex-direction: column;
 `),p("fade",[f("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),p("card",[f("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[p("current",`
 transform: translateY(-50%) translateZ(0);
 `),p("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),p("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),p("usercontrol",[f("slides",[N(">",[N("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),p("left",[f("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[p("line",[f("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[p("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),f("dot",`
 margin: 4px 0;
 `)]),f("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),p("vertical",[f("arrow",`
 transform: rotate(90deg);
 `)]),p("show-arrow",[p("bottom",[f("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),p("top",[f("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),p("left",[f("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),p("right",[f("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),p("left",[f("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[N("> *:first-child",`
 margin-bottom: 12px;
 `)])]),p("right",[f("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[p("line",[f("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[p("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),f("dot",`
 margin: 4px 0;
 `),f("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[N("> *:first-child",`
 margin-bottom: 12px;
 `)])]),p("top",[f("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[p("line",[f("dot",`
 margin: 0 4px;
 `)])]),f("dot",`
 margin: 0 4px;
 `),f("arrow-group",`
 top: 12px;
 right: 12px;
 `,[N("> *:first-child",`
 margin-right: 12px;
 `)])]),p("bottom",[f("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[p("line",[f("dot",`
 margin: 0 4px;
 `)])]),f("dot",`
 margin: 0 4px;
 `),f("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[N("> *:first-child",`
 margin-right: 12px;
 `)])]),p("fade",[f("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[p("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),p("card",[f("slides",`
 perspective: 1000px;
 `),f("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[p("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),p("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),p("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);function ua(e){const{length:n}=e;return n>1&&(e.push(Ge(e[0],0,"append")),e.unshift(Ge(e[n-1],n-1,"prepend"))),e}function Ge(e,n,r){return at(e,{key:`carousel-item-duplicate-${n}-${r}`})}function Je(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function Ie(e,n){return n?e+1:e}function da(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function ca(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function fa(e,n){return n&&e>3?e-2:e}function Qe(e){return window.TouchEvent&&e instanceof window.TouchEvent}function et(e,n){let{offsetWidth:r,offsetHeight:u}=e;if(n){const l=getComputedStyle(e);r=r-Number.parseFloat(l.getPropertyValue("padding-left"))-Number.parseFloat(l.getPropertyValue("padding-right")),u=u-Number.parseFloat(l.getPropertyValue("padding-top"))-Number.parseFloat(l.getPropertyValue("padding-bottom"))}return{width:r,height:u}}function le(e,n,r){return e<n?n:e>r?r:e}function pa(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,u,,l="ms"]=r;return Number(u)*(l==="ms"?1:1e3)}return 0}const va=["transitionDuration","transitionTimingFunction"],ma=Object.assign(Object.assign({},it.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let ze=!1;const ha=F({name:"Carousel",props:ma,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=fe(e),u=T(null),l=T(null),o=T([]),S={value:[]},g=m(()=>e.direction==="vertical"),C=m(()=>g.value?"height":"width"),x=m(()=>g.value?"bottom":"right"),v=m(()=>e.effect==="slide"),w=m(()=>e.loop&&e.slidesPerView===1&&v.value),P=m(()=>e.effect==="custom"),O=m(()=>!v.value||e.centeredSlides?1:e.slidesPerView),B=m(()=>P.value?1:e.slidesPerView),R=m(()=>O.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),I=T({width:0,height:0}),$=T(0),_=m(()=>{const{value:t}=o;if(!t.length)return[];$.value;const{value:a}=R;if(a)return t.map(b=>et(b));const{value:s}=B,{value:d}=I,{value:c}=C;let i=d[c];if(s!=="auto"){const{spaceBetween:b}=e,z=i-(s-1)*b,se=1/Math.max(1,s);i=z*se}const h=Object.assign(Object.assign({},d),{[c]:i});return t.map(()=>h)}),E=m(()=>{const{value:t}=_;if(!t.length)return[];const{centeredSlides:a,spaceBetween:s}=e,{value:d}=C,{[d]:c}=I.value;let i=0;return t.map(({[d]:h})=>{let b=i;return a&&(b+=(h-c)/2),i+=h+s,b})}),De=T(!1),pe=m(()=>{const{transitionStyle:t}=e;return t?Ze(t,va):{}}),ve=m(()=>P.value?0:pa(pe.value.transitionDuration)),Ne=m(()=>{const{value:t}=o;if(!t.length)return[];const a=!(R.value||B.value===1),s=h=>{if(a){const{value:b}=C;return{[b]:`${_.value[h][b]}px`}}};if(P.value)return t.map((h,b)=>s(b));const{effect:d,spaceBetween:c}=e,{value:i}=x;return t.reduce((h,b,z)=>{const se=Object.assign(Object.assign({},s(z)),{[`margin-${i}`]:`${c}px`});return h.push(se),De.value&&(d==="fade"||d==="card")&&Object.assign(se,pe.value),h},[])}),k=m(()=>{const{value:t}=O,{length:a}=o.value;if(t!=="auto")return Math.max(a-t,0)+1;{const{value:s}=_,{length:d}=s;if(!d)return a;const{value:c}=E,{value:i}=C,h=I.value[i];let b=s[s.length-1][i],z=d;for(;z>1&&b<h;)z--,b+=c[z]-c[z-1];return le(z+1,1,d)}}),me=m(()=>fa(k.value,w.value)),Ct=Ie(e.defaultIndex,w.value),he=T(Je(Ct,k.value,w.value)),A=on(Kt(e,"currentIndex"),he),V=m(()=>Ie(A.value,w.value));function X(t){var a,s;t=le(t,0,k.value-1);const d=Je(t,k.value,w.value),{value:c}=A;d!==A.value&&(he.value=d,(a=e["onUpdate:currentIndex"])===null||a===void 0||a.call(e,d,c),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,d,c))}function ge(t=V.value){return da(t,k.value,e.loop)}function xe(t=V.value){return ca(t,k.value,e.loop)}function Rt(t){const a=U(t);return a!==null&&ge()===a}function Pt(t){const a=U(t);return a!==null&&xe()===a}function Te(t){return V.value===U(t)}function It(t){return A.value===t}function Ae(){return ge()===null}function $e(){return xe()===null}let L=0;function be(t){const a=le(Ie(t,w.value),0,k.value);(t!==A.value||a!==V.value)&&X(a)}function ee(){const t=ge();t!==null&&(L=-1,X(t))}function H(){const t=xe();t!==null&&(L=1,X(t))}let D=!1;function zt(){(!D||!w.value)&&ee()}function kt(){(!D||!w.value)&&H()}let j=0;const we=T({});function te(t,a=0){we.value=Object.assign({},pe.value,{transform:g.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${a}ms`})}function K(t=0){v.value?ye(V.value,t):j!==0&&(!D&&t>0&&(D=!0),te(j=0,t))}function ye(t,a){const s=Ee(t);s!==j&&a>0&&(D=!0),j=Ee(V.value),te(s,a)}function Ee(t){let a;return t>=k.value-1?a=Me():a=E.value[t]||0,a}function Me(){if(O.value==="auto"){const{value:t}=C,{[t]:a}=I.value,{value:s}=E,d=s[s.length-1];let c;if(d===void 0)c=a;else{const{value:i}=_;c=d+i[i.length-1][t]}return c-a}else{const{value:t}=E;return t[k.value-1]||0}}const G={currentIndexRef:A,to:be,prev:zt,next:kt,isVertical:()=>g.value,isHorizontal:()=>!g.value,isPrev:Rt,isNext:Pt,isActive:Te,isPrevDisabled:Ae,isNextDisabled:$e,getSlideIndex:U,getSlideStyle:Nt,addSlide:Vt,removeSlide:Dt,onCarouselItemClick:Tt};ta(G);function Vt(t){t&&o.value.push(t)}function Dt(t){if(!t)return;const a=U(t);a!==-1&&o.value.splice(a,1)}function U(t){return typeof t=="number"?t:t?o.value.indexOf(t):-1}function Nt(t){const a=U(t);if(a!==-1){const s=[Ne.value[a]],d=G.isPrev(a),c=G.isNext(a);return d&&s.push(e.prevSlideStyle||""),c&&s.push(e.nextSlideStyle||""),Qt(s)}}let Se=0,Ce=0,M=0,Re=0,ne=!1,Pe=!1;function Tt(t,a){let s=!D&&!ne&&!Pe;e.effect==="card"&&s&&!Te(t)&&(be(t),s=!1),s||(a.preventDefault(),a.stopPropagation())}let ae=null;function re(){ae&&(clearInterval(ae),ae=null)}function q(){re(),!e.autoplay||me.value<2||(ae=window.setInterval(H,e.interval))}function Oe(t){var a;if(ze||!(!((a=l.value)===null||a===void 0)&&a.contains(un(t))))return;ze=!0,ne=!0,Pe=!1,Re=Date.now(),re(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=Qe(t)?t.touches[0]:t;g.value?Ce=s.clientY:Se=s.clientX,e.touchable&&(J("touchmove",document,oe),J("touchend",document,W),J("touchcancel",document,W)),e.draggable&&(J("mousemove",document,oe),J("mouseup",document,W))}function oe(t){const{value:a}=g,{value:s}=C,d=Qe(t)?t.touches[0]:t,c=a?d.clientY-Ce:d.clientX-Se,i=I.value[s];M=le(c,-i,i),t.cancelable&&t.preventDefault(),v.value&&te(j-M,0)}function W(){const{value:t}=V;let a=t;if(!D&&M!==0&&v.value){const s=j-M,d=[...E.value.slice(0,k.value-1),Me()];let c=null;for(let i=0;i<d.length;i++){const h=Math.abs(d[i]-s);if(c!==null&&c<h)break;c=h,a=i}}if(a===t){const s=Date.now()-Re,{value:d}=C,c=I.value[d];M>c/2||M/s>.4?ee():(M<-c/2||M/s<-.4)&&H()}a!==null&&a!==t?(Pe=!0,X(a),je(()=>{(!w.value||he.value!==A.value)&&K(ve.value)})):K(ve.value),Be(),q()}function Be(){ne&&(ze=!1),ne=!1,Se=0,Ce=0,M=0,Re=0,Q("touchmove",document,oe),Q("touchend",document,W),Q("touchcancel",document,W),Q("mousemove",document,oe),Q("mouseup",document,W)}function At(){if(v.value&&D){const{value:t}=V;ye(t,0)}else q();v.value&&(we.value.transitionDuration="0ms"),D=!1}function $t(t){if(t.preventDefault(),D)return;let{deltaX:a,deltaY:s}=t;t.shiftKey&&!a&&(a=s);const d=-1,c=1,i=(a||s)>0?c:d;let h=0,b=0;g.value?b=i:h=i;const z=10;(b*s>=z||h*a>=z)&&(i===c&&!$e()?H():i===d&&!Ae()&&ee())}function Et(){I.value=et(u.value,!0),q()}function Mt(){R.value&&$.value++}function Ot(){e.autoplay&&re()}function Bt(){e.autoplay&&q()}tt(()=>{Gt(q),requestAnimationFrame(()=>De.value=!0)}),nt(()=>{Be(),re()}),Jt(()=>{const{value:t}=o,{value:a}=S,s=new Map,d=i=>s.has(i)?s.get(i):-1;let c=!1;for(let i=0;i<t.length;i++){const h=a.findIndex(b=>b.el===t[i]);h!==i&&(c=!0),s.set(t[i],h)}c&&t.sort((i,h)=>d(i)-d(h))}),ie(V,(t,a)=>{if(t===a){L=0;return}if(q(),v.value){if(w.value){const{value:s}=k;L===-1&&a===1&&t===s-2?t=0:L===1&&a===s-2&&t===1&&(t=s-1)}ye(t,ve.value)}else K();L=0},{immediate:!0}),ie([w,O],()=>void je(()=>{X(V.value)})),ie(E,()=>{v.value&&K()},{deep:!0}),ie(v,t=>{t?K():(D=!1,te(j=0))});const _t=m(()=>({onTouchstartPassive:e.touchable?Oe:void 0,onMousedown:e.draggable?Oe:void 0,onWheel:e.mousewheel?$t:void 0})),jt=m(()=>Object.assign(Object.assign({},Ze(G,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:me.value,currentIndex:A.value})),Lt=m(()=>({total:me.value,currentIndex:A.value,to:G.to})),Ut={getCurrentIndex:()=>A.value,to:be,prev:ee,next:H},qt=it("Carousel","-carousel",la,sn,e,n),_e=m(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:a,dotColor:s,dotColorActive:d,dotColorFocus:c,dotLineWidth:i,dotLineWidthActive:h,arrowColor:b}}=qt.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":c,"--n-dot-color-active":d,"--n-dot-size":a,"--n-dot-line-width":i,"--n-dot-line-width-active":h,"--n-arrow-color":b}}),Z=r?ln("carousel",void 0,_e,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:u,slidesElRef:l,slideVNodes:S,duplicatedable:w,userWantsControl:P,autoSlideSize:R,realIndex:V,slideStyles:Ne,translateStyle:we,slidesControlListeners:_t,handleTransitionEnd:At,handleResize:Et,handleSlideResize:Mt,handleMouseenter:Ot,handleMouseleave:Bt,isActive:It,arrowSlotProps:jt,dotSlotProps:Lt},Ut),{cssVars:r?void 0:_e,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:u,slideStyles:l,dotType:o,dotPlacement:S,slidesControlListeners:g,transitionProps:C={},arrowSlotProps:x,dotSlotProps:v,$slots:{default:w,dots:P,arrow:O}}=this,B=w&&rn(w())||[];let R=ga(B);return R.length||(R=B.map(I=>y(St,null,{default:()=>at(I)}))),this.duplicatedable&&(R=ua(R)),this.slideVNodes.value=R,this.autoSlideSize&&(R=R.map(I=>y(qe,{onResize:this.handleSlideResize},{default:()=>I}))),(e=this.onRender)===null||e===void 0||e.call(this),y("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${S}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,u&&`${n}-carousel--usercontrol`],style:this.cssVars},g,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),y(qe,{onResize:this.handleResize},{default:()=>y("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},u?R.map((I,$)=>y("div",{style:l[$],key:$},Ft(y(Ht,Object.assign({},C),{default:()=>I}),[[Xt,this.isActive($)]]))):R)}),this.showDots&&v.total>1&&We(P,v,()=>[y(sa,{key:o+S,total:v.total,currentIndex:v.currentIndex,dotType:o,trigger:this.trigger,keyboard:this.keyboard})]),r&&We(O,x,()=>[y(ra,null)]))}});function ga(e){return e.reduce((n,r)=>(ia(r)&&n.push(r),n),[])}const xa=F({name:"Carousel",__name:"CCarousel",props:{autoplay:{type:Boolean,default:!1},centeredSlides:{type:Boolean,default:!1},currentIndex:{default:void 0},defaultIndex:{default:0},direction:{default:"horizontal"},dotPlacement:{default:"bottom"},dotType:{default:"dot"},draggable:{type:Boolean,default:!1},effect:{default:"slide"},interval:{default:5e3},keyboard:{type:Boolean,default:!1},loop:{type:Boolean,default:!0},mousewheel:{type:Boolean,default:!1},nextSlideStyle:{default:void 0},prevSlideStyle:{default:void 0},showArrow:{type:Boolean,default:!1},showDots:{type:Boolean,default:!0},slidesPerView:{default:1},spaceBetween:{default:0},touchable:{type:Boolean,default:!0},transitionStyle:{default:void 0},transitionProps:{default:void 0},trigger:{default:"click"}},emits:["update:currentIndex"],setup(e,{expose:n,emit:r}){const u=r,l=T(null);return n({to:o=>{var S;return(S=l.value)==null?void 0:S.to(o)},prev:()=>{var o;return(o=l.value)==null?void 0:o.prev()},next:()=>{var o;return(o=l.value)==null?void 0:o.next()},getCurrentIndex:()=>{var o;return((o=l.value)==null?void 0:o.getCurrentIndex())??0}}),(o,S)=>(st(),rt(ot(ha),{ref_key:"carousel",ref:l,class:"c-carousel",autoplay:o.autoplay,"centered-slides":o.centeredSlides,"current-index":o.currentIndex,"default-index":o.defaultIndex,direction:o.direction,"dot-placement":o.dotPlacement,"dot-type":o.dotType,draggable:o.draggable,effect:o.effect,interval:o.interval,keyboard:o.keyboard,loop:o.loop,mousewheel:o.mousewheel,"next-slide-style":o.nextSlideStyle,"prev-slide-style":o.prevSlideStyle,"show-arrow":o.showArrow,"show-dots":o.showDots,"slides-per-view":o.slidesPerView,"space-between":o.spaceBetween,touchable:o.touchable,"transition-style":o.transitionStyle,"transition-props":o.transitionProps,trigger:o.trigger,"onUpdate:currentIndex":S[0]||(S[0]=(g,C)=>u("update:currentIndex",g,C))},{arrow:ue(g=>[de(o.$slots,"arrow",Le(Ue(g)))]),dots:ue(g=>[de(o.$slots,"dots",Le(Ue(g)))]),default:ue(()=>[de(o.$slots,"default")]),_:3},8,["autoplay","centered-slides","current-index","default-index","direction","dot-placement","dot-type","draggable","effect","interval","keyboard","loop","mousewheel","next-slide-style","prev-slide-style","show-arrow","show-dots","slides-per-view","space-between","touchable","transition-style","transition-props","trigger"]))}});xa.__docgenInfo={name:"Carousel",exportName:"default",displayName:"CCarousel",description:"",tags:{},expose:[{name:"to",description:"Slide to index."},{name:"prev",description:"Slide to previous page."},{name:"next",description:"Slide to next page."},{name:"getCurrentIndex",description:"Get current index."}],props:[{name:"autoplay",description:"Whether to scroll automatically.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"centeredSlides",description:"Whether to center the current view carousel.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"currentIndex",description:"Current index.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"defaultIndex",description:"Default index.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"direction",description:"Carousel shows the direction.",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'horizontal'"}},{name:"dotPlacement",description:"Dot placement in the panel.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'bottom'"}},{name:"dotType",description:"Dot style.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"union",elements:[{name:'"dot"'},{name:'"line"'}]},defaultValue:{func:!1,value:"'dot'"}},{name:"draggable",description:"Whether to switch the carousel by dragging the mouse.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"effect",description:"Transition effect when switching between carousel.",tags:{version:[{description:"2.24.0, 'card' 2.24.2",title:"version"}]},required:!1,type:{name:"union",elements:[{name:'"slide"'},{name:'"fade"'},{name:'"card"'},{name:'"custom"'}]},defaultValue:{func:!1,value:"'slide'"}},{name:"interval",description:"Auto play interval (ms).",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5000"}},{name:"keyboard",description:"Whether to switch the carousel by pressing the key, it only works when the focus is on Dots.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loop",description:"Whether to loop.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"mousewheel",description:"Whether to switch the carousel through the mouse wheel.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"nextSlideStyle",description:"Next slide's style.",tags:{version:[{description:"2.27.0",title:"version"}]},required:!1,type:{name:"union",elements:[{name:"CSSProperties"},{name:"string"}]},defaultValue:{func:!1,value:"undefined"}},{name:"prevSlideStyle",description:"Previous slide's style.",tags:{version:[{description:"2.27.0",title:"version"}]},required:!1,type:{name:"union",elements:[{name:"CSSProperties"},{name:"string"}]},defaultValue:{func:!1,value:"undefined"}},{name:"showArrow",description:"Whether to show arrow buttons.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showDots",description:"Whether to show dots.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"slidesPerView",description:"Number of carousels displayed on per view.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"union",elements:[{name:'"auto"'},{name:"number"}]},defaultValue:{func:!1,value:"1"}},{name:"spaceBetween",description:"The spacing between the carousels.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"touchable",description:"Whether to switch the carousel by touch.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"transitionStyle",description:"The style of the transition effect.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:`{
  transitionDuration?: string;
  transitionTimingFunction?: string;
}`},defaultValue:{func:!1,value:"undefined"}},{name:"transitionProps",description:"Custom transition effect properties, reference.",tags:{version:[{description:"2.24.0",title:"version"}]},required:!1,type:{name:"object"},defaultValue:{func:!1,value:"undefined"}},{name:"trigger",description:"The method of manual switching.",required:!1,type:{name:"union",elements:[{name:'"click"'},{name:'"hover"'}]},defaultValue:{func:!1,value:"'click'"}}],events:[{name:"update:currentIndex",type:{names:["number"]}}],slots:[{name:"default"},{name:"arrow",scoped:!0,bindings:[]},{name:"dots",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CCarousel/CCarousel.vue"]};const ba=F({name:"CarouselItem",__name:"CCarouselItem",setup(e){return(n,r)=>(st(),rt(ot(St),{class:"c-carousel-item"},{default:ue(()=>[de(n.$slots,"default")]),_:3}))}});ba.__docgenInfo={name:"CarouselItem",exportName:"default",displayName:"CCarouselItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CCarouselItem/CCarouselItem.vue"]};export{xa as _,ba as a};
