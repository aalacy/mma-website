(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c55f6"],{"3f8e":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticClass:"d-flex justify-center",attrs:{id:"contest",fluid:"",tag:"section"}},[t("v-card",{staticClass:"px-5",attrs:{loading:e.loading,"min-width":"60%"}},[t("v-card-title",{staticClass:"justify-center font-weight-medium mb-md-3"},[e._v(" Score By User "),t("v-spacer"),t("v-text-field",{staticClass:"mb-5",attrs:{"append-icon":"mdi-magnify",label:"Search",clearable:"","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1),t("v-card-text",[t("v-data-table",{attrs:{items:e.scores,loading:e.loading,headers:e.headers,"fixed-header":"","items-per-page":5,"item-key":"username",search:e.search}})],1)],1)],1)},r=[],n=(t("96cf"),t("1da1")),i=t("b899"),c={name:"Contest",data:function(){return{loading:!1,search:"",scores:[],headers:[{text:"User",value:"username",align:"center"},{text:"Surviving Fighters",value:"surviving_fighters",align:"center"},{text:"Wins",value:"wins",align:"center"},{text:"Losses",value:"losses",align:"center"},{text:"Dead",value:"dead",align:"center"}]}},mounted:function(){this.getScoresByUser()},methods:{getScoresByUser:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var t,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loading=!0,a.next=3,i["a"].get("api/entries/score_by_user");case 3:t=a.sent,s=t.data,e.scores=s.scores,e.loading=!1;case 7:case"end":return a.stop()}}),a)})))()}}},l=c,d=t("2877"),o=t("6544"),u=t.n(o),g=t("b0af"),f=t("99d9"),h=t("a523"),v=t("8fea"),m=t("2fa4"),p=t("8654"),x=Object(d["a"])(l,s,r,!1,null,null,null);a["default"]=x.exports;u()(x,{VCard:g["a"],VCardText:f["b"],VCardTitle:f["c"],VContainer:h["a"],VDataTable:v["a"],VSpacer:m["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=chunk-2d0c55f6.f129eaa7.js.map