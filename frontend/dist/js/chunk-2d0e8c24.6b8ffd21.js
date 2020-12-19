(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8c24"],{"8b48":function(e,a,s){"use strict";s.r(a);var r=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-container",{staticClass:"fill-height justify-center",attrs:{id:"login",tag:"section"}},[s("v-snackbar",{attrs:{absolute:"",top:"",center:"",color:e.snackbar_color,"multi-line":e.multiLine},model:{value:e.snackbar,callback:function(a){e.snackbar=a},expression:"snackbar"}},[s("span",[e._v(e._s(e.snackbar_message))]),s("v-icon",{attrs:{dark:""}},[e._v(" mdi-checkbox-marked-circle ")])],1),s("v-row",{attrs:{justify:"center"}},[s("v-slide-y-transition",{attrs:{appear:""}},[s("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"light-blue accent-3",light:"","max-width":"100%",width:"400"},scopedSlots:e._u([{key:"heading",fn:function(){return[s("div",{staticClass:"text-center"},[s("h1",{staticClass:"display-2 font-weight-bold"},[e._v(" Login ")])])]},proxy:!0}])},[s("v-card-text",{staticClass:"text-center"},[s("v-form",{ref:"form",model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[s("v-text-field",{ref:"email",staticClass:"mb-5",attrs:{rules:[e.rules.required,e.rules.email],loading:e.authenticating,"hide-details":"auto",color:"secondary",label:"Email address.","prepend-icon":"mdi-email",required:""},on:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.submit(a)}},model:{value:e.form.email,callback:function(a){e.$set(e.form,"email",a)},expression:"form.email"}}),s("v-text-field",{ref:"password",staticClass:"mb-7",attrs:{type:"password",rules:[e.rules.required],loading:e.authenticating,"hide-details":"auto",color:"secondary",label:"Password.","prepend-icon":"mdi-key",required:""},on:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.submit(a)}},model:{value:e.form.password,callback:function(a){e.$set(e.form,"password",a)},expression:"form.password"}}),s("v-btn",{staticClass:"ma-1 mt-1",attrs:{color:"primary",loading:e.authenticating},on:{click:e.submit}},[e._v(" Login ")]),s("div",{staticClass:"text-center mt-2 grey--text body-1 font-weight-light"},[e._v(" If you don't have any account, please "),s("a",{attrs:{href:"javascript:;"},on:{click:e.gotoSignup}},[e._v("sign up")])])],1)],1)],1)],1)],1)],1)},t=[],i=(s("caad"),s("dca8"),s("ac1f"),s("2532"),s("1276"),s("5530")),n=s("d722"),o=s("e0eb"),l=s("bc3a"),c=s.n(l),d=s("2f62"),u={name:"PagesLogin",components:{},data:function(){var e=this,a=Object.freeze({email:"",password:""});return{valid:!0,loading:!1,formHasErrors:!1,errorMessages:{email:{required:!1,invalid:!1,business:!1}},snackbar:!1,snackbar_message:"",snackbar_color:"success",multiLine:!0,defaultForm:a,form:Object.assign({},a),code:"",keepMeLogin:!1,rules:{required:function(a){return e.errorMessages.email.required=!!a,e.errorMessages.email.required||"This field is required."},counter:function(e){return e.length>=6||"Min 6 characters"},email:function(a){var s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.errorMessages.email.invalid=s.test(a),e.errorMessages.email.invalid||"Invalid e-mail."},validEmail:function(a){var s=a.split("@")[1];return e.errorMessages.email.business=a.includes("@")&&!o["DOMAIN_LIST"].includes(s.toLowerCase()),e.errorMessages.email.business||"Please enter a business email"}},socials:[{href:"#",icon:"mdi-google"}]}},computed:Object(i["a"])({},Object(d["d"])("auth",["authenticating","error"])),watch:{authenticating:function(){this.error||this.$router.push({name:"Dashboard"})}},methods:{gotoSignup:function(){this.$router.push({name:"Register"})},gotoDashboard:function(e){localStorage.setItem("jwt","success"),localStorage.setItem("user",JSON.stringify(e)),this.$router.push({name:"Dashboard"})},resetForm:function(){this.form=Object.assign({},this.defaultForm),this.$refs.form.reset(),this.formHasErrors=!1},request:function(){if(this.formHasErrors=!this.errorMessages.email.required||!this.errorMessages.email.invalid,!this.formHasErrors){this.loading=!0;var e=this,a={email:this.form.email};c()({url:"".concat(n["a"],"/api/users/login/code"),method:"POST",data:a,withCredentials:!1,crossdomain:!0}).then((function(a){e.loading=!1,e.snackbar_message=a.data.message,"failure"===a.data.status?e.snackbar_color="error":e.snackbar_color="success",e.snackbar=!0})).catch((function(a){console.log(a),e.loading=!1}))}},submit:function(){if(this.$refs.form.validate(),this.valid){var e={username:this.form.email,password:this.form.password};this.$store.dispatch("auth/login",e)}}}},m=u,f=s("2877"),h=s("6544"),g=s.n(h),b=s("8336"),p=s("99d9"),v=s("a523"),k=s("4bd4"),y=s("132d"),w=s("0fd9"),x=s("0789"),_=s("2db4"),C=s("8654"),M=Object(f["a"])(m,r,t,!1,null,null,null);a["default"]=M.exports;g()(M,{VBtn:b["a"],VCardText:p["b"],VContainer:v["a"],VForm:k["a"],VIcon:y["a"],VRow:w["a"],VSlideYTransition:x["e"],VSnackbar:_["a"],VTextField:C["a"]})}}]);
//# sourceMappingURL=chunk-2d0e8c24.6b8ffd21.js.map