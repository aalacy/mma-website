(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a3676e6"],{7496:function(t,e,n){"use strict";var a=n("5530"),i=(n("df86"),n("7560")),r=n("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(a["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},7592:function(t,e,n){"use strict";n("a0cf")},a0cf:function(t,e,n){},cd59:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("span",{staticClass:"bg"}),n("dashboard-core-app-bar",{key:t.key,model:{value:t.expandOnHover,callback:function(e){t.expandOnHover=e},expression:"expandOnHover"}}),n("dashboard-core-view")],1)},i=[],r=(n("d3b7"),n("d722"),n("bc3a"),{name:"DashboardIndex",components:{DashboardCoreAppBar:function(){return n.e("chunk-5ab071fc").then(n.bind(null,"8e07"))},DashboardCoreDrawer:function(){return n.e("chunk-2cd973e7").then(n.bind(null,"09ae"))},DashboardCoreSettings:function(){return n.e("chunk-67798880").then(n.bind(null,"51c9"))},DashboardCoreView:function(){return n.e("chunk-39d72ad0").then(n.bind(null,"2038"))}},data:function(){return{expandOnHover:!1,key:0}},mounted:function(){var t=this;this.$store.subscribe((function(e,n){t.key++}))}}),o=r,s=(n("7592"),n("2877")),u=n("6544"),c=n.n(u),d=n("7496"),p=Object(s["a"])(o,a,i,!1,null,null,null);e["default"]=p.exports;c()(p,{VApp:d["a"]})},df86:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3a3676e6.811c3162.js.map