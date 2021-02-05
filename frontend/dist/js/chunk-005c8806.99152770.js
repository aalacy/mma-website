(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-005c8806"],{"3cb9":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".username{font-size:15px;font-weight:300}.initials{font-size:20px;font-weight:400;line-height:2rem;letter-spacing:normal!important;font-family:Roboto,sans-serif!important}.subtitle{font-size:12px;color:#afafaf}",""]),t.exports=e},4360:function(t,e,a){var n=a("3cb9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("499e").default;i("27072c16",n,!0,{sourceMap:!1,shadowMode:!1})},aa99:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"d-flex justify-center pa-1",attrs:{fluid:"",tag:"section"}},[t.$vuetify.breakpoint.mobile?a("div",{staticStyle:{width:"100%"}},[a("overall-board")],1):a("dialog-drag",{attrs:{id:"movingLeaderboardDlg",options:{buttonClose:!1,left:t.lastLeft,dragCursor:"move",zIndex:5}},on:{"drag-end":t.dragEnd}},[a("overall-board")],1)],1)},i=[],r=a("5530"),s=a("2f62"),o=a("db2a"),l=a.n(o),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contest-table"}},[a("v-card",{staticClass:"mt-0",attrs:{"min-width":"50%",flat:""}},[a("v-card-title",{staticClass:"mb-2"},[a("v-text-field",{staticClass:"mb-5",attrs:{"append-icon":"mdi-magnify",label:"Search",clearable:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-spacer")],1),a("v-card-text",[a("v-data-table",{attrs:{items:t.views,loading:t.loading,headers:t.headers,search:t.search,"fixed-header":"","disable-pagination":!0,"item-key":"id",dense:"",height:"280px","hide-default-footer":"","mobile-breakpoint":"0"},scopedSlots:t._u([{key:"header.first_place",fn:function(e){e.header;return[a("v-icon",{attrs:{color:"gold"}},[t._v("mdi-trophy-outline")])]}},{key:"header.second_place",fn:function(e){e.header;return[a("v-icon",{attrs:{color:"silver"}},[t._v("mdi-trophy-outline")])]}},{key:"header.third_place",fn:function(e){e.header;return[a("v-icon",{attrs:{color:"bronze"}},[t._v("mdi-trophy-outline")])]}},{key:"item.ranking",fn:function(e){var n=e.item;return[a("span",{class:t.highlight(n)},[t._v(t._s(n.ranking)+" ")])]}},{key:"item.user",fn:function(e){var n=e.item;return[a("div",{staticClass:"d-flex align-center"},[a("v-avatar",{attrs:{color:"brown",size:"34"}},[n.avatar?a("v-img",{attrs:{src:t.avatar(n)}}):a("span",{staticClass:"white--text initials"},[t._v(" "+t._s(n.initials)+" ")])],1),a("div",{staticClass:"text-left ml-2",staticStyle:{margin:".2rem 0"}},[a("div",{staticClass:"username",class:t.highlight(n),domProps:{innerHTML:t._s(n.displayname)}}),a("div",{staticClass:"subtitle",class:t.highlight(n),domProps:{innerHTML:t._s(n.username)}})])],1)]}},{key:"item.first_place",fn:function(e){var n=e.item;return[a("span",{class:t.highlight(n)},[t._v(t._s(n.first_place)+" ")])]}},{key:"item.second_place",fn:function(e){var n=e.item;return[a("span",{class:t.highlight(n)},[t._v(t._s(n.second_place)+" ")])]}},{key:"item.third_place",fn:function(e){var n=e.item;return[a("span",{class:t.highlight(n)},[t._v(t._s(n.third_place)+" ")])]}},{key:"item.fq_points",fn:function(e){var n=e.item;return[a("span",{class:t.highlight(n)},[t._v(t._s(n.fq_points)+" ")])]}}])})],1)],1)],1)},d=[],u=(a("d3b7"),a("25f0"),a("96cf"),a("1da1")),f=a("a358"),h={name:"OverallBoard",data:function(){return{loading:!1,search:"",views:[],headers:[{text:"Position",value:"ranking",align:"center"},{text:"Player",value:"user",align:"center"},{text:"1st Place",value:"first_place"},{text:"2st Place",value:"second_place"},{text:"3rd Place",value:"third_place"},{text:"Points",value:"fq_points"}]}},mounted:function(){this.getLeaderboard()},methods:{getLeaderboard:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,f["a"].getLeaderboard();case 3:a=e.sent,n=a.data,t.views=n.views,t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},highlight:function(t){return{"highlight--text font-weight-medium":1==t.ranking}},avatar:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return t.avatar?avatar:"https://picsum.photos/id/11/500/300"}))}},v=h,p=(a("e218"),a("2877")),g=a("6544"),m=a.n(g),b=a("8212"),_=a("b0af"),x=a("99d9"),y=a("8fea"),k=a("132d"),w=a("adda"),C=a("2fa4"),L=a("8654"),V=Object(p["a"])(v,c,d,!1,null,null,null),S=V.exports;m()(V,{VAvatar:b["a"],VCard:_["a"],VCardText:x["b"],VCardTitle:x["c"],VDataTable:y["a"],VIcon:k["a"],VImg:w["a"],VSpacer:C["a"],VTextField:L["a"]});var T={name:"LeaderboardContainer",components:{DialogDrag:l.a,OverallBoard:S},computed:Object(r["a"])({},Object(s["d"])(["lastLeft"])),methods:{dragEnd:function(t){this.$store.commit("SET_LASTLEFT",t.left)}}},P=T,O=a("a523"),j=Object(p["a"])(P,n,i,!1,null,null,null);e["default"]=j.exports;m()(j,{VContainer:O["a"]})},e218:function(t,e,a){"use strict";a("4360")}}]);
//# sourceMappingURL=chunk-005c8806.99152770.js.map