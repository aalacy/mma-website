(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74a2b118"],{9259:function(t,e,a){"use strict";a("ba89")},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85");var n=a("e8f2"),r=a("d9f7");e["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,i=e.data,s=e.children,o=i.attrs;return o&&(i.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),s)}})},a900:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".displayname[data-v-15e6be59]{font-size:14px;font-weight:300}.initials[data-v-15e6be59]{font-size:18px;font-weight:400;line-height:2rem;letter-spacing:normal!important;font-family:Roboto,sans-serif!important}",""]),t.exports=e},aa99:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"d-flex justify-center pa-1",attrs:{fluid:"",tag:"section"}},[t.$vuetify.breakpoint.mobile?a("div",{staticStyle:{width:"100%"}},[a("overall-board")],1):a("dialog-drag",{attrs:{id:"movingLeaderboardDlg",options:{buttonClose:!1,left:t.lastLeft,dragCursor:"move",zIndex:5}},on:{"drag-end":t.dragEnd}},[a("overall-board")],1)],1)},r=[],i=a("5530"),s=a("2f62"),o=a("db2a"),c=a.n(o),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contest-table"}},[a("v-card",{staticClass:"my-0",attrs:{"min-width":"50%",flat:""}},[a("v-card-title",{staticClass:"mb-2"},[a("v-text-field",{staticClass:"mb-5",attrs:{"append-icon":"mdi-magnify",label:"Search",clearable:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-spacer")],1),a("v-card-text",[a("v-data-table",{attrs:{items:t.views,loading:t.loading,headers:t.headers,search:t.search,"fixed-header":"","disable-pagination":!0,"item-key":"id",dense:"",height:"280px","hide-default-footer":"","mobile-breakpoint":"0"},on:{"click:row":t.showUserProfile},scopedSlots:t._u([{key:"header.first_place",fn:function(e){e.header;return[a("v-icon",{attrs:{color:"gold"}},[t._v("mdi-trophy-outline")])]}},{key:"header.second_place",fn:function(e){e.header;return[a("v-icon",{attrs:{color:"silver"}},[t._v("mdi-trophy-outline")])]}},{key:"header.third_place",fn:function(e){e.header;return[a("v-icon",{attrs:{color:"bronze"}},[t._v("mdi-trophy-outline")])]}},{key:"item.ranking",fn:function(e){var n=e.item;return[a("span",{class:t.highlight(n)},[t._v(t._s(n.ranking)+" ")]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[t.isMine(n)?a("v-icon",t._g(t._b({attrs:{size:"18"}},"v-icon",i,!1),r),[t._v("mdi-account-tie")]):t._e()]}}],null,!0)},[a("span",[t._v("Me")])])]}},{key:"item.user",fn:function(e){var n=e.item;return[a("div",{staticClass:"d-flex align-center"},[a("v-avatar",{attrs:{color:"brown",size:"30"}},[n.avatar?a("v-img",{attrs:{src:t.avatar(n)}}):a("span",{staticClass:"white--text initials"},[t._v(" "+t._s(n.initials)+" ")])],1),a("div",{staticClass:"text-left ml-2",staticStyle:{margin:".5rem 0"}},[a("div",{staticClass:"displayname",class:t.highlight(n),domProps:{innerHTML:t._s(n.displayname||"Unknown")}})])],1)]}},{key:"item.first_place",fn:function(e){var n=e.item;return[a("span",{class:t.highlight(n)},[t._v(t._s(n.first_place)+" ")])]}},{key:"item.second_place",fn:function(e){var n=e.item;return[a("span",{class:t.highlight(n)},[t._v(t._s(n.second_place)+" ")])]}},{key:"item.third_place",fn:function(e){var n=e.item;return[a("span",{class:t.highlight(n)},[t._v(t._s(n.third_place)+" ")])]}},{key:"item.fq_points",fn:function(e){var n=e.item;return[a("span",{class:t.highlight(n)},[t._v(t._s(n.fq_points)+" ")])]}}])})],1)],1)],1)},d=[],u=(a("d3b7"),a("25f0"),a("96cf"),a("1da1")),f=a("a358"),p={name:"OverallBoard",data:function(){return{loading:!1,search:"",views:[],headers:[{text:"Position",value:"ranking",align:"center"},{text:"Player",value:"user",align:"center"},{text:"1st Place",value:"first_place"},{text:"2st Place",value:"second_place"},{text:"3rd Place",value:"third_place"},{text:"Points",value:"fq_points"}]}},computed:{displayname:function(){return this.$store.getters["auth/authUser"].displayname}},mounted:function(){this.getLeaderboard()},methods:{getLeaderboard:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,f["a"].getLeaderboard();case 3:a=e.sent,n=a.data,t.views=n.views,t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},highlight:function(t){return{"highlight--text font-weight-medium":1==t.ranking}},avatar:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return t.avatar?avatar:"https://picsum.photos/id/11/500/300"})),isMine:function(t){return t.displayname==this.displayname},showUserProfile:function(t){this.$store.dispatch("auth/loadProfile",t.id)}}},h=p,v=(a("9259"),a("2877")),m=a("6544"),g=a.n(m),b=a("8212"),_=a("b0af"),y=a("99d9"),x=a("8fea"),k=a("132d"),w=a("adda"),C=a("2fa4"),P=a("8654"),S=a("3a2f"),j=Object(v["a"])(h,l,d,!1,null,"15e6be59",null),O=j.exports;g()(j,{VAvatar:b["a"],VCard:_["a"],VCardText:y["b"],VCardTitle:y["c"],VDataTable:x["a"],VIcon:k["a"],VImg:w["a"],VSpacer:C["a"],VTextField:P["a"],VTooltip:S["a"]});var V={name:"LeaderboardContainer",components:{DialogDrag:c.a,OverallBoard:O},computed:Object(i["a"])({},Object(s["d"])(["lastLeft"])),methods:{dragEnd:function(t){this.$store.commit("SET_LASTLEFT",t.left)}}},L=V,T=a("a523"),z=Object(v["a"])(L,n,r,!1,null,null,null);e["default"]=z.exports;g()(z,{VContainer:T["a"]})},ba89:function(t,e,a){var n=a("a900");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("ee3b25ee",n,!0,{sourceMap:!1,shadowMode:!1})},e8f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("99af"),a("4de4"),a("a15b"),a("b64b"),a("2ca0"),a("498a");var n=a("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,r=a.data,i=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var s=r.attrs;if(s){r.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,i)}})}}}]);
//# sourceMappingURL=chunk-74a2b118.602bccc1.js.map