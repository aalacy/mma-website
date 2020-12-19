(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-664549af"],{"3f43":function(e,t,r){},aaf8:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height justify-center",attrs:{id:"register",tag:"section"}},[r("v-snackbar",{attrs:{timeout:5e3,color:e.snackbar.status},scopedSlots:e._u([{key:"action",fn:function(t){var s=t.attrs;return[r("v-btn",e._b({attrs:{dark:"",text:""},on:{click:function(t){e.snackbar.snack=!1}}},"v-btn",s,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar.snack,callback:function(t){e.$set(e.snackbar,"snack",t)},expression:"snackbar.snack"}},[e._v(" "+e._s(e.snackbar.message)+" ")]),r("v-row",{attrs:{justify:"center"}},[r("v-slide-y-transition",{attrs:{appear:""}},[r("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"light-blue accent-3",light:"","max-width":"100%",width:"400"},scopedSlots:e._u([{key:"heading",fn:function(){return[r("div",{staticClass:"text-center"},[r("div",{staticClass:"display-2 font-weight-bold"},[e._v(" Register to UFC Survivor ")])])]},proxy:!0}])},[r("div",{staticClass:"text-center"},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{ref:"email",staticClass:"mt-5 mb-7",attrs:{rules:[e.rules.required,e.rules.email],loading:e.registrationLoading,"hide-details":"auto",color:"secondary",label:"Please enter your email address.","prepend-icon":"mdi-email",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("v-text-field",{attrs:{loading:e.registrationLoading,"prepend-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},on:{"click:prepend":function(t){e.show1=!e.show1}},model:{value:e.form.password1,callback:function(t){e.$set(e.form,"password1",t)},expression:"form.password1"}}),r("v-text-field",{attrs:{block:"",loading:e.registrationLoading,"prepend-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.passwordMatch],type:e.show1?"text":"password",name:"input-10-1",label:"Confirm Password",counter:""},on:{"click:prepend":function(t){e.show1=!e.show1}},model:{value:e.form.password2,callback:function(t){e.$set(e.form,"password2",t)},expression:"form.password2"}}),r("v-btn",{staticClass:"display-1",attrs:{loading:e.registrationLoading,color:"primary",diabled:!e.valid||e.registrationLoading},on:{click:e.submit}},[e._v(" Submit ")]),r("div",{staticClass:"text-center grey--text mt-2 body-1 font-weight-light"},[e._v(" If you already have an account, please "),r("a",{attrs:{href:"javascript:;"},on:{click:e.gotoLogin}},[e._v("login")])])],1)],1)])],1)],1)],1)},a=[],i=(r("dca8"),r("96cf"),r("1da1")),n=r("5530"),o=r("2f62"),c={name:"PagesRegister",data:function(){var e=this,t=Object.freeze({username:"",email:"",password1:"",password2:""});return{loading:!1,valid:!0,errorMessages:{username:"",email:{required:!1,invalid:!1,business:!1},password:""},timeout:1e4,multiLine:!0,snackbar:{snack:!1,message:"",status:"success"},terms:!1,defaultForm:t,form:Object.assign({},t),show1:!1,rules:{required:function(e){return!!e||"Required."},min:function(e){return e&&e.length>=8||"Min 8 characters"},counter:function(e){return e.length>=6||"Min 6 characters"},email:function(t){var r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.errorMessages.email.invalid=r.test(t),e.errorMessages.email.invalid||"Invalid e-mail."}}}},computed:Object(n["a"])(Object(n["a"])({},Object(o["d"])("signup",["registrationCompleted","registrationError","registrationLoading"])),{},{formHasErrors:function(){return!this.errorMessages.email.required||!this.errorMessages.email.invalid},passwordMatch:function(){var e=this;return function(){return e.form.password1===e.form.password2||"Password must match"}}}),watch:{registrationLoading:function(){this.registrationError?(this.snackbar.message=this.registrationError,this.snackbar.status="failed"):(this.snackbar.message="Successfully registered.",this.snackbar.status="success"),this.snackbar.snack=!0}},methods:{gotoLogin:function(){this.$router.push({name:"Login"})},resetForm:function(){this.form=Object.assign({},this.defaultForm),this.$refs.form.reset(),this.formHasErrors=!1},submit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.form.validate(!0),e.valid&&(e.form.username=e.form.email,e.$store.dispatch("signup/createAccount",e.form));case 2:case"end":return t.stop()}}),t)})))()}}},l=c,u=(r("fb8f"),r("2877")),d=r("6544"),f=r.n(d),m=r("8336"),p=r("a523"),g=r("4bd4"),h=r("0fd9"),b=r("0789"),v=r("2db4"),k=r("8654"),w=Object(u["a"])(l,s,a,!1,null,null,null);t["default"]=w.exports;f()(w,{VBtn:m["a"],VContainer:p["a"],VForm:g["a"],VRow:h["a"],VSlideYTransition:b["e"],VSnackbar:v["a"],VTextField:k["a"]})},fb8f:function(e,t,r){"use strict";r("3f43")}}]);
//# sourceMappingURL=chunk-664549af.dec763cc.js.map