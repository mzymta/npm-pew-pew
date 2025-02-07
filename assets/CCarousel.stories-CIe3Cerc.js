import{_ as n,a}from"./CCarouselItem-CzQI0IPK.js";import"./vue.esm-bundler-D4RNtN6S.js";import"./light-DsB5ODev.js";import"./index-L98eAIry.js";import"./flatten-B94A2huW.js";import"./VResizeObserver-DllAtjZA.js";import"./resolve-slot-BBjw-So6.js";import"./keep-B1eBS8j0.js";import"./use-merged-state-CUYpy2WA.js";import"./light-C8pqK_rb.js";import"./use-css-vars-class-BoK1eXI1.js";import"./get-precise-event-target-DhO46Lpt.js";import"./delegate-AmuGJuoF.js";import"./toString-Vm_cEZ4d.js";import"./upperFirst-CgVWOQVP.js";const v={title:"Components/Carousel",component:n,tags:["autodocs"],decorators:[t=>({components:{story:t},template:'<div style="max-width: 600px"><story/></div>'})],argTypes:{default:{control:!1,type:"()"},arrow:{control:!1,type:"(info: { total: number, currentIndex: number, to: (index: number) => void, prev: () => void, next: () => void })"},dots:{control:!1,type:"(info: { total: number, currentIndex: number, to: (index: number) => void })"},to:{type:"(index: number) => void"},prev:{type:"() => void"},next:{type:"() => void"},getCurrentIndex:{type:"() => number"},direction:{options:["horizontal","vertical"]},dotPlacement:{options:["top","bottom","left","right"]},dotType:{options:["dot","line"]},effect:{options:["slide","fade","card","custom"]},nextSlideStyle:{control:!1},prevSlideStyle:{control:!1},slidesPerView:{options:["auto",1,2,3]},transitionStyle:{control:!1},trigger:{options:["click","hover"]}},parameters:{docs:{description:{component:`**Matches [Naive UI component](https://www.naiveui.com/en-US/dark/components/carousel).**

`}}}},e={render:t=>({components:{CCarousel:n,CCarouselItem:a},setup(){return{args:t}},template:`
      <CCarousel
        style="height: 240px"
        :autoplay="args.autoplay"
        :centeredSlides="args.centeredSlides"
        :currentIndex="args.currentIndex"
        :defaultIndex="args.defaultIndex"
        :direction="args.direction"
        :dotPlacement="args.dotPlacement"
        :dotType="args.dotType"
        :draggable="args.draggable"
        :effect="args.effect"
        :interval="args.interval"
        :keyboard="args.keyboard"
        :loop="args.loop"
        :mousewheel="args.mousewheel"
        :nextSlideStyle="args.nextSlideStyle"
        :prevSlideStyle="args.prevSlideStyle"
        :showArrow="args.showArrow"
        :showDots="args.showDots"
        :slidesPerView="args.slidesPerView"
        :spaceBetween="args.spaceBetween"
        :touchable="args.touchable"
        :transitionStyle="args.transitionStyle"
        :transitionProps="args.transitionProps"
        :trigger="args.trigger"
      >
        <CCarouselItem>
          <img
            style="width: 100%; height: 240px; object-fit: cover;"
            alt="390"
            class="carousel-img"
            src="https://picsum.photos/id/390/600/300"
          >
        </CCarouselItem>
        <CCarouselItem>
          <img
            style="width: 100%; height: 240px; object-fit: cover;"
            alt="391"
            class="carousel-img"
            src="https://picsum.photos/id/391/600/300"
          >
        </CCarouselItem>
        <CCarouselItem>
          <img
            style="width: 100%; height: 240px; object-fit: cover;"
            alt="392"
            class="carousel-img"
            src="https://picsum.photos/id/392/600/300"
          >
        </CCarouselItem>
        <CCarouselItem>
          <img
            style="width: 100%; height: 240px; object-fit: cover;"
            alt="393"
            :style="imgStyles"
            class="carousel-img"
            src="https://picsum.photos/id/393/600/300"
          >
        </CCarouselItem>
      </CCarousel>
    `})};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CCarousel,
      CCarouselItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CCarousel
        style="height: 240px"
        :autoplay="args.autoplay"
        :centeredSlides="args.centeredSlides"
        :currentIndex="args.currentIndex"
        :defaultIndex="args.defaultIndex"
        :direction="args.direction"
        :dotPlacement="args.dotPlacement"
        :dotType="args.dotType"
        :draggable="args.draggable"
        :effect="args.effect"
        :interval="args.interval"
        :keyboard="args.keyboard"
        :loop="args.loop"
        :mousewheel="args.mousewheel"
        :nextSlideStyle="args.nextSlideStyle"
        :prevSlideStyle="args.prevSlideStyle"
        :showArrow="args.showArrow"
        :showDots="args.showDots"
        :slidesPerView="args.slidesPerView"
        :spaceBetween="args.spaceBetween"
        :touchable="args.touchable"
        :transitionStyle="args.transitionStyle"
        :transitionProps="args.transitionProps"
        :trigger="args.trigger"
      >
        <CCarouselItem>
          <img
            style="width: 100%; height: 240px; object-fit: cover;"
            alt="390"
            class="carousel-img"
            src="https://picsum.photos/id/390/600/300"
          >
        </CCarouselItem>
        <CCarouselItem>
          <img
            style="width: 100%; height: 240px; object-fit: cover;"
            alt="391"
            class="carousel-img"
            src="https://picsum.photos/id/391/600/300"
          >
        </CCarouselItem>
        <CCarouselItem>
          <img
            style="width: 100%; height: 240px; object-fit: cover;"
            alt="392"
            class="carousel-img"
            src="https://picsum.photos/id/392/600/300"
          >
        </CCarouselItem>
        <CCarouselItem>
          <img
            style="width: 100%; height: 240px; object-fit: cover;"
            alt="393"
            :style="imgStyles"
            class="carousel-img"
            src="https://picsum.photos/id/393/600/300"
          >
        </CCarouselItem>
      </CCarousel>
    \`
  })
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,v as default};
