import{d as r,r as l,v as s,D as m,E as o,z as i,A as d,x as f,y as u,m as p}from"./vue.esm-bundler-D4RNtN6S.js";import{N as c}from"./DatePicker-DEQ4QxIL.js";const y=r({__name:"CDatePicker",props:{type:{default:"date"},format:{default:"yyyy-MM-dd"},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:"medium"},placement:{default:"bottom-start"},firstDayOfWeek:{default:void 0},panel:{type:Boolean,default:!1}},setup(b,{expose:n}){const a=l(null);return n({focus:()=>{var e;return(e=a.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=a.value)==null?void 0:e.blur()}}),(e,k)=>(f(),s(d(c),i({ref_key:"datepicker",ref:a,class:"c-date-picker",type:e.type,format:e.format,clearable:e.clearable,disabled:e.disabled,size:e.size,placement:e.placement,"first-day-of-week":e.firstDayOfWeek,panel:e.panel},e.$attrs),m({_:2},[o(Object.keys(e.$slots),t=>({name:t,fn:u(()=>[p(e.$slots,t)])}))]),1040,["type","format","clearable","disabled","size","placement","first-day-of-week","panel"]))}});y.__docgenInfo={exportName:"default",displayName:"CDatePicker",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],props:[{name:"type",description:"Date picker type.",required:!1,type:{name:"union",elements:[{name:'"date"'},{name:'"datetime"'},{name:'"datetimerange"'},{name:'"month"'},{name:'"monthrange"'},{name:'"year"'},{name:'"yearrange"'},{name:'"quarter"'},{name:'"quarterrange"'},{name:'"week"'}]},defaultValue:{func:!1,value:"'date'"}},{name:"format",description:"Format of the input. For detail please see: https://date-fns.org/v2.23.0/docs/format",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"'yyyy-MM-dd'"}},{name:"clearable",description:"Whether the date picker is clearable.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Whether the date picker is disabled.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Size of the date picker.",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"placement",description:"Panel's placement.",tags:{version:[{description:"2.25.0",title:"version"}]},required:!1,type:{name:"union",elements:[{name:'"top-start"'},{name:'"top"'},{name:'"top-end"'},{name:'"right-start"'},{name:'"right"'},{name:'"right-end"'},{name:'"bottom-start"'},{name:'"bottom"'},{name:'"bottom-end"'},{name:'"left-start"'},{name:'"left"'},{name:'"left-end"'}]},defaultValue:{func:!1,value:"'bottom-start'"}},{name:"firstDayOfWeek",description:"The first day of a week on calendar, 0 means Monday.",required:!1,type:{name:"union",elements:[{name:"0"},{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"}]},defaultValue:{func:!1,value:"undefined"}},{name:"panel",description:"Whether to use date-picker as panel.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"slot",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/npm-pew-pew/npm-pew-pew/src/components/CDatePicker/CDatePicker.vue"]};export{y as _};
