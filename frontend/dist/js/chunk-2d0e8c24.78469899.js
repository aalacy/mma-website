(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8c24"],{"8b48":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{fullscreen:""},model:{value:t.propDlg,callback:function(e){t.propDlg=e},expression:"propDlg"}},[a("v-row",{staticStyle:{"min-height":"100vh"},attrs:{justify:"center",align:"center"}},[a("v-slide-y-transition",{attrs:{appear:""}},[a("v-card",{staticClass:"px-5 py-5",attrs:{light:"","max-width":"100%",width:"400"}},[a("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[a("div",{staticClass:"text-center display-2 font-weight-bold"},[t._v(" Login ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.propDlg=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",{staticClass:"text-center"},[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{ref:"email",staticClass:"mb-5",attrs:{rules:[t.rules.required,t.rules.email],loading:t.authenticating,"hide-details":"auto",color:"secondary",label:"Email address.","prepend-icon":"mdi-email",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-text-field",{ref:"password",staticClass:"mb-7",attrs:{type:"password",rules:[t.rules.required],loading:t.authenticating,"hide-details":"auto",color:"secondary",label:"Password.","prepend-icon":"mdi-key",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),a("v-btn",{staticClass:"mt-5",attrs:{color:"primary",loading:t.authenticating,block:""},on:{click:t.submit}},[t._v(" Submit ")]),a("div",{staticClass:"my-2"},[t._v("Or")]),a("v-btn",{staticClass:"mb-5",attrs:{block:"",color:"#1DA1F2",loading:t.authenticating},on:{click:function(e){return t.twitterLogin()}}},[t._v(" Login with Twitter "),a("v-icon",{attrs:{right:""}},[t._v("mdi-twitter")])],1),a("div",{staticClass:"text-center mt-2 grey--text body-1 font-weight-light"},[t._v(" If you don't have any account, please "),a("a",{attrs:{href:"javascript:;"},on:{click:t.gotoSignup}},[t._v("sign up")])])],1)],1)],1)],1)],1)],1)},s=[],r=(a("b0c0"),a("dca8"),a("5530")),o=(a("3786"),a("bc3a"),a("2f62")),n={name:"PagesLogin",components:{},props:["value"],data:function(){var t=this,e=Object.freeze({email:"",password:""});return{valid:!0,loading:!1,formHasErrors:!1,errorMessages:{email:{required:!1,invalid:!1,business:!1}},snackbar:{snack:!1,message:"",status:"success"},multiLine:!0,defaultForm:e,form:Object.assign({},e),code:"",keepMeLogin:!1,rules:{required:function(e){return t.errorMessages.email.required=!!e,t.errorMessages.email.required||"This field is required."},counter:function(t){return t.length>=6||"Min 6 characters"},email:function(e){var a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.errorMessages.email.invalid=a.test(e),t.errorMessages.email.invalid||"Invalid e-mail."}},socials:[{href:"#",icon:"mdi-google"}]}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(o["d"])("auth",["authenticating","error"])),Object(o["b"])("auth",["isAuthenticated"])),{},{propDlg:{get:function(){return this.$store.getters["auth/launchLogin"]},set:function(t){this.$store.commit("auth/showLoginDlg",t)}}}),watch:{authenticating:function(t){t||this.error||"Dashboard"==this.$route.name||this.$router.push({name:"Dashboard"})},error:function(t){if(t){var e={message:t,status:"failed",snack:!0};this.$store.dispatch("snackbar/setSnack",e)}}},methods:{gotoSignup:function(){this.$store.commit("auth/showLoginDlg",!1),this.$store.commit("signup/showRegisterDlg")},gotoDashboard:function(t){localStorage.setItem("jwt","success"),localStorage.setItem("user",JSON.stringify(t)),this.$store.commit("signup/showRegisterDlg",!1)},resetForm:function(){this.form=Object.assign({},this.defaultForm),this.$refs.form.reset(),this.formHasErrors=!1},submit:function(){if(this.$refs.form.validate(),this.valid){var t={username:this.form.email,password:this.form.password};this.$store.dispatch("auth/login",t)}},twitterLogin:function(){this.$store.dispatch("auth/twitterLogin")}}},l=n,c=a("2877"),u=a("6544"),d=a.n(u),m=a("40dc"),f=a("8336"),g=a("b0af"),h=a("99d9"),p=a("169a"),v=a("4bd4"),b=a("132d"),w=a("0fd9b"),k=a("0789"),y=a("2fa4"),x=a("8654"),$=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=$.exports;d()($,{VAppBar:m["a"],VBtn:f["a"],VCard:g["a"],VCardText:h["b"],VDialog:p["a"],VForm:v["a"],VIcon:b["a"],VRow:w["a"],VSlideYTransition:k["e"],VSpacer:y["a"],VTextField:x["a"]})}}]);
//# sourceMappingURL=chunk-2d0e8c24.78469899.js.map