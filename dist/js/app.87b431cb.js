(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0ba3":function(t,e,s){"use strict";s("d705")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},o=[],r=s("2877"),i={},c=Object(r["a"])(i,n,o,!1,null,null,null),l=c.exports,u=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",[s("div",{staticClass:"login-box"},[s("input",{attrs:{type:"radio",id:"create-acc",name:"1"}}),s("input",{attrs:{type:"radio",id:"login-acc",name:"1",checked:""}}),s("div",{staticClass:"img-box"}),s("div",{staticClass:"signin-box"},[s("div",{staticClass:"login-text"},[t._v("Login")]),s("div",{staticClass:"login-inside"},[s("div",[s("div",[t._v(" Username ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",[s("div",[t._v(" Password ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{on:{click:t.request}},[s("div",{staticClass:"login-btn"},[t._v("Login")])]),s("label",{staticClass:"create-text",attrs:{for:"create-acc"},on:{click:function(e){t.login=!1,t.username="",t.password=""}}},[t._v("Create Account")])])]),s("div",{staticClass:"signup-box"},[s("div",{staticClass:"signup-text"},[t._v("Signup")]),s("div",{staticClass:"login-inside"},[s("div",[s("div",[t._v(" Username ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",[s("div",[t._v(" Password ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{on:{click:t.request}},[s("div",{staticClass:"signup-btn"},[t._v("Sign in")])]),s("label",{staticClass:"create-text",attrs:{for:"login-acc"},on:{click:function(e){t.login=!0,t.username="",t.password=""}}},[t._v("Login Account")])])])])])},d=[],h=(s("99af"),s("bc3a")),v=s.n(h),g={data:function(){return{login:!0,username:"",password:""}},methods:{request:function(){var t=this;this.login?v.a.get("login?username=".concat(this.username,"&password=").concat(this.password)).then((function(e){t.$toastr.s("Welcome "+t.username),localStorage.setItem("token",e.data.token),localStorage.setItem("type",e.data.admin?"admin":"user"),e.data.admin?t.$router.push("/admin"):t.$router.push("/")})).catch((function(e){t.$toastr.e(e.response.data.Error)})):v.a.get("signup?username=".concat(this.username,"&password=").concat(this.password)).then((function(e){t.$toastr.s("Welcome "+t.username),localStorage.setItem("token",e.data.token),localStorage.setItem("type","user"),t.$router.push("/")})).catch((function(e){t.$toastr.e(e.response.data.Error)}))}}},m=g,f=(s("9ce0"),Object(r["a"])(m,p,d,!1,null,null,null)),w=f.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",[s("div",{staticClass:"logout-btn",on:{click:t.logout}},[t._v(" Logout "),s("svg",{staticStyle:{"enable-background":"new 0 0 24 24"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",viewBox:"0 0 24 24","xml:space":"preserve"}},[s("g",{attrs:{id:"info"}}),s("g",{attrs:{id:"icons"}},[s("g",{attrs:{id:"exit2"}},[s("path",{attrs:{d:"M12,10c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2s-2,0.9-2,2v4C10,9.1,10.9,10,12,10z"}}),s("path",{attrs:{d:"M19.1,4.9L19.1,4.9c-0.3-0.3-0.6-0.4-1.1-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.4,0.2,0.8,0.4,1.1l0,0c0,0,0,0,0,0c0,0,0,0,0,0    c1.3,1.3,2,3,2,4.9c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-1.9,0.8-3.7,2.1-4.9l0,0C7.3,6.8,7.5,6.4,7.5,6c0-0.8-0.7-1.5-1.5-1.5    c-0.4,0-0.8,0.2-1.1,0.4l0,0C3.1,6.7,2,9.2,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,9.2,20.9,6.7,19.1,4.9z"}})])])])]),s("div",{staticClass:"post-box"},[s("div",{staticClass:"post-show"},[s("div",{staticClass:"main-posts"},[t._v(" "+t._s(t.paragraph)+" ")])]),s("div",{staticClass:"next-prev"},[s("div",{staticClass:"prev-btn",on:{click:t.prev}},[t._v("Previous")]),s("div",{staticClass:"next-btn",on:{click:t.next}},[t._v("Next")])])]),s("div",{staticClass:"post-list"},[s("div",{staticClass:"list-text"},[t._v("Posts")]),s("div",{staticClass:"list-box"},t._l(Object.keys(t.totalposts),(function(e){return s("div",{key:e,staticClass:"post-id",class:t.currentindex==e?"selected":"",on:{click:function(s){t.paragraph=t.totalposts[e].post,t.currentindex=e}}},[t._v(" #"+t._s(e)+" ")])})),0)])])},b=[],y={name:"dashboard",data:function(){return{paragraph:"No Post Found",totalposts:[],currentindex:0}},created:function(){var t=this,e={headers:{token:localStorage.getItem("token")}};v.a.get("post",e).then((function(e){0!=e.data.length&&(t.totalposts=e.data,t.currentindex=0,t.paragraph=e.data[0].post)})).catch((function(e){t.$toastr.e(e.response.data.Error)}))},methods:{next:function(){this.currentindex<this.totalposts.length-1?this.paragraph=this.totalposts[++this.currentindex].post:this.$toastr.i("Ahh This Was Last Post :( ")},prev:function(){0!=this.currentindex?this.paragraph=this.totalposts[--this.currentindex].post:this.$toastr.i("Sorry No Previous Post Found")},logout:function(){localStorage.clear(),this.$router.push("/login")}}},C=y,_=(s("c34f"),Object(r["a"])(C,x,b,!1,null,null,null)),k=_.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",[s("div",{staticClass:"logout-btn",on:{click:t.logout}},[t._v(" Logout "),s("svg",{staticStyle:{"enable-background":"new 0 0 24 24"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",viewBox:"0 0 24 24","xml:space":"preserve"}},[s("g",{attrs:{id:"info"}}),s("g",{attrs:{id:"icons"}},[s("g",{attrs:{id:"exit2"}},[s("path",{attrs:{d:"M12,10c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2s-2,0.9-2,2v4C10,9.1,10.9,10,12,10z"}}),s("path",{attrs:{d:"M19.1,4.9L19.1,4.9c-0.3-0.3-0.6-0.4-1.1-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.4,0.2,0.8,0.4,1.1l0,0c0,0,0,0,0,0c0,0,0,0,0,0    c1.3,1.3,2,3,2,4.9c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-1.9,0.8-3.7,2.1-4.9l0,0C7.3,6.8,7.5,6.4,7.5,6c0-0.8-0.7-1.5-1.5-1.5    c-0.4,0-0.8,0.2-1.1,0.4l0,0C3.1,6.7,2,9.2,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,9.2,20.9,6.7,19.1,4.9z"}})])])])]),s("div",{staticClass:"post-box"},[s("div",{staticClass:"post-show"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newpara,expression:"newpara"}],style:t.showsumbitcreate?"":"display : unset !important",attrs:{placeholder:"write something ...",maxlength:"255"},domProps:{value:t.newpara},on:{input:function(e){e.target.composing||(t.newpara=e.target.value)}}}),s("div",{staticClass:"main-posts",style:t.showsumbitcreate?"":"display : none"},[t._v(" "+t._s(this.paragraph)+" ")])]),s("div",{staticClass:"next-prev"},[s("div",{staticClass:"prev-btn",style:t.showsumbitcreate?"":"display : none",on:{click:t.prev}},[t._v(" Previous ")]),s("div",{staticClass:"submit-btn",style:t.showsumbitcreate?"":"display : unset !important",on:{click:function(e){t.showsumbitcreate=!0,t.createorupdate()}}},[t._v(" Submit ")]),s("div",{staticClass:"cancel-btn",style:t.showsumbitcreate?"":"display : unset !important",on:{click:function(e){t.showsumbitcreate=!0}}},[t._v(" Cancel ")]),s("div",{staticClass:"create-btn",style:t.showsumbitcreate?"":"display : none",on:{click:function(e){t.showsumbitcreate=!1,t.create=!0}}},[t._v(" Create ")]),s("div",{staticClass:"update-btn",style:t.showsumbitcreate?"":"display : none",on:{click:function(e){t.showsumbitcreate=!1,t.create=!1,t.newpara=t.paragraph}}},[t._v(" Update ")]),s("div",{staticClass:"delete-btn",style:t.showsumbitcreate?"":"display : none",on:{click:t.postdelete}},[t._v(" Delete ")]),s("div",{staticClass:"next-btn",style:t.showsumbitcreate?"":"display : none",on:{click:t.next}},[t._v(" Next ")])])]),s("div",{staticClass:"post-list"},[s("div",{staticClass:"list-text"},[t._v("Posts")]),s("div",{staticClass:"list-box"},t._l(t.totalposts,(function(e,a){return s("div",{key:a,staticClass:"post-id",class:{selected:t.currentindex==a},on:{click:function(e){t.currentindex=a,t.paragraph=t.totalposts[a].post}}},[t._v(" #"+t._s(a)+" ")])})),0)])])},$=[],S=(s("a434"),{data:function(){return{showsumbitcreate:!0,newpara:"",paragraph:"No Post Found",totalposts:[],currentindex:0,create:!0}},created:function(){var t=this,e={headers:{token:localStorage.getItem("token")}};v.a.get("post",e).then((function(e){0!=e.data.length&&(t.totalposts=e.data,t.currentindex=0,t.paragraph=e.data[0].post)})).catch((function(e){t.$toastr.e(e.response.data.Error)}))},methods:{next:function(){this.currentindex<this.totalposts.length-1?this.paragraph=this.totalposts[++this.currentindex].post:this.$toastr.i("Ahh This Was Last Post :( ")},prev:function(){0!=this.currentindex?this.paragraph=this.totalposts[--this.currentindex].post:this.$toastr.i("Sorry No Previous Post Found")},createorupdate:function(){var t=this,e={headers:{token:localStorage.getItem("token")}};0==this.newpara.length?this.$toastr.e("Kindly Enter Any Text"):this.paragraph!=this.newpara||this.create?this.create?v.a.post("post",{post:this.newpara},e).then((function(e){t.totalposts.push({id:e.data.id,post:t.newpara}),t.currentindex=t.totalposts.length-1,t.newpara="",t.$toastr.s("Post Created Successfully")})).catch((function(e){t.$toastr.e(e.response.data.Error)})):v.a.patch("post/"+this.totalposts[this.currentindex].id,{post:this.newpara},e).then((function(){t.totalposts[t.currentindex].post=t.newpara,t.paragraph=t.newpara,t.newpara="",t.$toastr.s("Post Updated Successfully")})).catch((function(e){t.$toastr.e(e.response.data.Error)})):this.$toastr.e("No Changes Detected")},postdelete:function(){var t=this;if(0!=this.totalposts.length){var e={headers:{token:localStorage.getItem("token")}};v.a.delete("post/"+this.totalposts[this.currentindex].id,e).then((function(){t.$toastr.s("Post Deleted SuccessFully"),t.totalposts.splice(t.currentindex,1),0!=t.totalposts.length&&(t.currentindex=0,t.paragraph=t.totalposts[t.currentindex].post)})).catch((function(e){t.$toastr.e(e.response.data.Error)}))}else this.$toastr.i("Nothing To Delete Here")},logout:function(){localStorage.clear(),this.$router.push("/login")}}}),O=S,j=(s("0ba3"),Object(r["a"])(O,P,$,!1,null,null,null)),E=j.exports;a["a"].use(u["a"]);var N=[{path:"/",name:"Home",beforeEnter:function(t,e,s){void 0==localStorage.getItem("token")?s("/login"):"admin"==localStorage.getItem("type")?s("/admin"):s()},component:k},{path:"/login",name:"login",component:w},{path:"/admin",name:"admin",beforeEnter:function(t,e,s){"admin"==localStorage.getItem("type")?s():s("/login")},component:E}],I=new u["a"]({routes:N}),L=I,M=s("025a");a["a"].use(M["a"]),a["a"].config.productionTip=!1,new a["a"]({router:L,render:function(t){return t(l)}}).$mount("#app")},"72c5":function(t,e,s){},"9ce0":function(t,e,s){"use strict";s("d64c")},c34f:function(t,e,s){"use strict";s("72c5")},d64c:function(t,e,s){},d705:function(t,e,s){}});
//# sourceMappingURL=app.87b431cb.js.map