(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},4678:function(t,e,o){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=a(t);return o(e)}function a(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=a,t.exports=r,r.id="4678"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-layout"},[o("nav",{staticClass:"main nav"},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/toy"}},[t._v("Toy")]),t._v(" | "),o("router-link",{attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),o("router-view")],1)},a=[],s={name:"app-component",data:function(){return{}},methods:{},created:function(){console.log("Toy app created!!!"),this.$store.dispatch({type:"loadToys"})}},i=s,l=o("2877"),c=Object(l["a"])(i,r,a,!1,null,null,null),u=c.exports,d=o("8c4f"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("h1",[t._v("Welcome To the bug app")]),t.loggedinUser?o("section",[t._v(" Hello Mr. "+t._s(t.loggedinUser.fullname)+" "),o("button",{on:{click:t.logout}},[t._v("Logout")]),o("button",{on:{click:t.moveToApp}},[t._v("To toys app")]),"true"===t.loggedinUser.isAdmin?o("section",[o("button",{on:{click:t.moveToAdmin}},[t._v("To admin page")])]):t._e()]):o("section",[o("hr"),o("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[o("h2",[t._v("Login")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.username,expression:"credentials.username"}],attrs:{type:"text",placeholder:"Your username"},domProps:{value:t.credentials.username},on:{input:function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}}),o("button",[t._v("Login")])]),o("hr")])])},f=[],y=o("1da1"),m=(o("96cf"),o("99af"),o("bc3a")),v=o.n(m),h="/api/",b=v.a.create({withCredentials:!0}),g={get:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _(t,"GET",e,o)},post:function(t,e){return _(t,"POST",e)},put:function(t,e){return _(t,"PUT",e)},delete:function(t,e){return _(t,"DELETE",e)}};function _(t){return j.apply(this,arguments)}function j(){return j=Object(y["a"])(regeneratorRuntime.mark((function t(e){var o,n,r,a,s,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=i.length>1&&void 0!==i[1]?i[1]:"get",n=i.length>2&&void 0!==i[2]?i[2]:null,r=i.length>3?i[3]:void 0,t.prev=3,a={url:"".concat(h).concat(e),method:o,data:n},r&&(a.params=n),t.next=8,b(a);case 8:return s=t.sent,t.abrupt("return",s.data);case 12:throw t.prev=12,t.t0=t["catch"](3),console.log("Had Issues ".concat(o,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(n)),console.dir(t.t0),t.t0.response&&401===t.t0.response.status&&window.location.assign("/#/login"),t.t0;case 18:case"end":return t.stop()}}),t,null,[[3,12]])}))),j.apply(this,arguments)}o("b0c0");var T={makeId:k,getRandomInt:w,sortByName:x,sortByNameOpposite:A,sortByPrice:S,debounce:E,saveToStorage:O,loadFromStorage:$};function k(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<t;n++)e+=o.charAt(Math.floor(Math.random()*o.length));return e}function w(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function x(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)}))}function S(t){return t.sort((function(t,e){return parseFloat(t.price)-parseFloat(e.price)}))}function A(t){return t.sort((function(t,e){return e.txt.localeCompare(t.txt)}))}function E(t,e){var o,n=this;return function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];var i=n;clearTimeout(o),o=setTimeout((function(){return t.apply(i,a)}),e)}}function O(t,e){sessionStorage.setItem(t,JSON.stringify(e)||null)}function $(t){var e=sessionStorage.getItem(t);return e?JSON.parse(e):void 0}T.loadFromStorage("loggedinUser");var F={query:C,getById:B,save:I,remove:N,login:P,logout:z,signup:D};function C(){return g.get("user")}function B(t){return g.get("user/"+t)}function I(t){return t._id?g.put("user/"+t._id,t):g.post("user/",t)}function N(t){return g.delete("user/"+t)}function P(t){return g.post("auth/login",t).then((function(t){return console.log("the user got in front is:",t),t,T.saveToStorage("loggedinUser",t),t}))}function z(){return g.post("auth/logout").then((function(){null,T.saveToStorage("loggedinUser",null)}))}function D(t){return axios.post("api/user/signup",t).then((function(t){return t.data})).then((function(t){return _handleLoggedinUser(t)}))}var M={name:"Home",data:function(){return{loggedinUser:null,credentials:{username:"puki",password:"secret"}}},methods:{login:function(){var t=this;F.login(this.credentials).then((function(e){return t.loggedinUser=e}))},signup:function(){},logout:function(){var t=this;F.logout().then((function(){return t.loggedinUser=null}))},moveToApp:function(){this.loggedinUser&&this.$router.push("/toy")},moveToAdmin:function(){this.loggedinUser&&this.$router.push("/admin")}},components:{}},U=M,q=Object(l["a"])(U,p,f,!1,null,null,null),J=q.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("h1",{staticClass:"about-title"},[t._v("Our branch")]),o("google-maps"),o("h2",[t._v("Please put your email to register")]),o("validation")],1)},L=[],H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("GmapMap",{ref:"mapRef",staticStyle:{width:"500px",height:"300px"},attrs:{center:{lat:32.15979,lng:34.84447},zoom:12,"map-type-id":"terrain"}},t._l(t.markers,(function(e,n){return o("GmapMarker",{key:n,attrs:{position:e.position,clickable:!0,draggable:!0},on:{click:function(o){t.center=e.position}}})})),1),o("section",{staticClass:"btn-google-container"},[o("button",{on:{click:function(e){return t.goTo({lat:32.173961,lng:34.804901})}}},[t._v(" herzeliya ")]),o("button",{on:{click:function(e){return t.goTo({lat:31.899474,lng:35.010975})}}},[t._v(" Macabim reut ")]),o("button",{on:{click:function(e){return t.goTo({lat:32.182956,lng:34.872406})}}},[t._v("raanana")])])],1)},X=[],Y={data:function(){return{markers:[{position:{lat:32.173961,lng:34.804901}},{position:{lat:31.899474,lng:35.010975}},{position:{lat:32.182956,lng:34.872406}}]}},methods:{goTo:function(t){this.$refs.mapRef.$mapPromise.then((function(e){e.panTo(t)}))}}},G=Y,V=Object(l["a"])(G,H,X,!1,null,null,null),W=V.exports,K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return o("div",{},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),o("p",{staticClass:"error-msg"},[t._v(t._s(n[0]))])])}}])})},Q=[],Z=o("5530"),tt=o("7bb1"),et=o("4c93");Object(tt["b"])("required",Object(Z["a"])(Object(Z["a"])({},et["b"]),{},{message:"This field is required"})),Object(tt["b"])("email",Object(Z["a"])(Object(Z["a"])({},et["a"]),{},{message:"This field must be a valid email"}));var ot={data:function(){return{email:""}},components:{ValidationProvider:tt["a"]}},nt=ot,rt=(o("a097"),Object(l["a"])(nt,K,Q,!1,null,null,null)),at=rt.exports,st={components:{googleMaps:W,validation:at}},it=st,lt=Object(l["a"])(it,R,L,!1,null,null,null),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toy-app"},[t._m(0),o("toy-filter",{on:{filtered:t.setFiltered}}),o("button",{on:{click:t.moveToAddToy}},[t._v("Add Toy")]),o("toy-list",{attrs:{toys:t.toysForDisplay},on:{remove:t.removeToy}})],1)},dt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"flex-center"},[o("h1",[t._v("Toy app page")])])}],pt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toy-filter"},[o("label",[t._v("Search a toy:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.filterBy.name,expression:"filterBy.name"}],attrs:{type:"text",placeholder:"Search...."},domProps:{value:t.filterBy.name},on:{input:[function(e){e.target.composing||t.$set(t.filterBy,"name",e.target.value)},t.setFilter]}}),o("label",[t._v(" in stock filter: ")]),o("element-select",{attrs:{option:t.inStockFilterOption,eventType:"setInStockFilter"},on:{setInStockFilter:t.setInStockFilter}}),o("label",[t._v(" type filter: ")]),o("element-select",{attrs:{option:t.typeFilterOption,eventType:"setTypeStockFilter"},on:{setTypeStockFilter:t.setTypeStockFilter}}),o("button",{on:{click:t.sort}},[t._v("sort")])],1)},ft=[],yt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-select",{attrs:{placeholder:"In Stock"},on:{change:t.setInStockFilter},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)},mt=[],vt={name:"element-select",props:["option","eventType"],data:function(){return{options:this.option,value:"all"}},methods:{setInStockFilter:function(){this.$emit(this.eventType,this.value)}}},ht=vt,bt=Object(l["a"])(ht,yt,mt,!1,null,null,null),gt=bt.exports,_t={name:"toy-filter",props:{msg:String},data:function(){return{filterBy:{name:"",stockFilter:"all",typeFilter:"all",sortBy:"name"},inStockFilterOption:[{value:"all",label:"All"},{value:"true",label:"in stock"},{value:"false",label:"not in stock"}],typeFilterOption:[{value:"all",label:"All"},{value:"Educational",label:"Educational"},{value:"Funny",label:"Funny"},{value:"Adult",label:"Adult"}]}},methods:{setFilter:function(){this.$emit("filtered",this.filterBy)},sort:function(){"name"===this.filterBy.sortBy?this.filterBy.sortBy="price":this.filterBy.sortBy="name",this.$emit("filtered",this.filterBy)},setInStockFilter:function(t){this.filterBy.stockFilter=t,this.setFilter()},setTypeStockFilter:function(t){this.filterBy.typeFilter=t,this.setFilter()}},components:{elementSelect:gt}},jt=_t,Tt=Object(l["a"])(jt,pt,ft,!1,null,null,null),kt=Tt.exports,wt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"toy-list card-grid"},t._l(t.toys,(function(e){return o("li",{key:e._id,staticClass:"toy-preview-container card-toy"},[o("toy-preview",{staticClass:"toy-tag",attrs:{toy:e}}),o("div",{staticClass:"btns-container"},[o("button",{on:{click:function(o){return t.remove(e._id)}}},[t._v("X")]),o("router-link",{attrs:{to:"/details/"+e._id}},[t._v("Details")]),o("router-link",{attrs:{to:"/edit/"+e._id}},[t._v("Edit")])],1)],1)})),0)},xt=[],St=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toy-preview"},[o("h2",[t._v(t._s(t.toy.name))]),o("h3",[t._v(t._s(t.toy.price))]),o("h3",[t._v(t._s(t.toy.type))])])},At=[],Et={name:"toy-preview",props:{toy:Object}},Ot=Et,$t=Object(l["a"])(Ot,St,At,!1,null,null,null),Ft=$t.exports,Ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",t._l(1,(function(e,n){return o("el-col",{key:e,attrs:{span:8,offset:n>0?2:0}},[o("el-card",{attrs:{"body-style":{padding:"0px"}}},[o("h3",[t._v(t._s(t.toy._id))]),o("h3",[t._v(t._s(t.toy.name))]),o("h3",[t._v(t._s(t.toy.createdAt))]),o("h3",[t._v(t._s(t.toy.inStock))]),o("h3",[t._v(t._s(t.toy.price))]),o("h3",[t._v(t._s(t.toy.type))]),o("div",{staticStyle:{padding:"14px"}},[o("span",[t._v("Yummy hamburger")]),o("div",{staticClass:"bottom clearfix"},[o("time",{staticClass:"time"},[t._v(t._s(t.currentDate))]),o("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("Operating")])],1)])])],1)})),1)},Bt=[],It={props:{toy:Object},data:function(){return{currentDate:new Date}}},Nt=It,Pt=(o("cae3"),Object(l["a"])(Nt,Ct,Bt,!1,null,null,null)),zt=Pt.exports,Dt={name:"toy-list",props:{toys:Array},methods:{remove:function(t){this.$emit("remove",t)}},components:{toyPreview:Ft,elementCard:zt}},Mt=Dt,Ut=Object(l["a"])(Mt,wt,xt,!1,null,null,null),qt=Ut.exports,Jt={name:"Toy-app",methods:{moveToAddToy:function(){this.$router.push("/toy-add")},removeToy:function(t){var e=this;this.$store.dispatch({type:"removeToy",toyId:t}).then((function(){e.$store.dispatch({type:"loadToys"})})).catch((function(t){}))},setFiltered:function(t){this.$store.commit({type:"setFilter",filterBy:JSON.parse(JSON.stringify(t))}),this.$store.dispatch({type:"setFilter",filterBy:JSON.parse(JSON.stringify(t))})}},computed:{toysForDisplay:function(){return this.$store.getters.toysForDisplay}},created:function(){console.log("Toy app created!!!"),this.$store.dispatch({type:"loadToys"})},components:{toyFilter:kt,toyList:qt}},Rt=Jt,Lt=Object(l["a"])(Rt,ut,dt,!1,null,null,null),Ht=Lt.exports,Xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.toy?o("div",{staticClass:"toy-details"},[o("section",[o("h1",[t._v("welcome to Toy details page")]),o("h3",[t._v(t._s(t.toy._id))]),o("h3",[t._v(t._s(t.toy.name))]),o("h3",[t._v(t._s(t.toy.createdAt))]),o("h3",[t._v(t._s(t.toy.inStock))]),o("h3",[t._v(t._s(t.toy.price))]),o("h3",[t._v(t._s(t.toy.type))]),o("router-link",{attrs:{to:"/toy"}},[t._v("Back")])],1),o("section",[o("h3",[t._v("Add review:")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.addReview(e)}}},[o("label",{attrs:{for:"txt"}},[t._v("review:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.review.txt,expression:"review.txt"}],attrs:{type:"text"},domProps:{value:t.review.txt},on:{input:function(e){e.target.composing||t.$set(t.review,"txt",e.target.value)}}}),o("button",[t._v("Add")])]),o("ul",{staticClass:"review-list"},t._l(t.toyToShow.review,(function(e){return o("li",{key:e._id},[t._v(" "+t._s(e.txt)+" ")])})),0)])]):t._e()},Yt=[];o("d3b7"),o("7db0"),o("c740"),o("a434");var Gt={query:Vt,getById:Wt,remove:Kt,save:Qt,getEmptyToy:te,addReview:Zt};function Vt(t){return g.get("toy",t,!0)}function Wt(t){return g.get("toy/"+t)}function Kt(t){return g.delete("toy/"+t)}function Qt(t){return t._id?g.put("toy/"+t._id,t):g.post("toy/",t)}function Zt(t,e){return g.post("toy/"+t+"/review",e)}function te(){return{name:"",price:null,type:"",inStock:null,review:[]}}var ee,oe,ne={name:"toy-details",data:function(){return{toy:null,review:{txt:""}}},computed:{toyToShow:function(){return this.toy}},methods:{loadToy:function(){var t=this,e=this.$route.params.toyId;Gt.getById(e).then((function(e){return t.toy=e}))},addReview:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Gt.addReview(t.toy._id,t.review);case 2:return e.next=4,t.$store.dispatch({type:"loadToys"});case 4:return e.next=6,t.loadToy;case 6:case"end":return e.stop()}}),e)})))()}},watch:{"$route.params.toyId":function(t){console.log("Changed to",t),this.loadToy()}},created:function(){this.loadToy()}},re=ne,ae=Object(l["a"])(re,Xt,Yt,!1,null,null,null),se=ae.exports,ie=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.toyToEdit?o("div",{staticClass:"toy-edit"},[o("h1",[t._v("welcome to Toy edit page")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[o("label",{attrs:{for:"name"}},[t._v("name:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToEdit.name,expression:"toyToEdit.name"}],attrs:{type:"text"},domProps:{value:t.toyToEdit.name},on:{input:function(e){e.target.composing||t.$set(t.toyToEdit,"name",e.target.value)}}}),o("label",{attrs:{for:"at"}},[t._v("created at:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToEdit.createdAt,expression:"toyToEdit.createdAt"}],attrs:{type:"text"},domProps:{value:t.toyToEdit.createdAt},on:{input:function(e){e.target.composing||t.$set(t.toyToEdit,"createdAt",e.target.value)}}}),o("label",{attrs:{for:"stock"}},[t._v("in stock:")]),t._v(" yes"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToEdit.inStock,expression:"toyToEdit.inStock"}],attrs:{type:"radio"},domProps:{value:!0,checked:t._q(t.toyToEdit.inStock,!0)},on:{change:function(e){return t.$set(t.toyToEdit,"inStock",!0)}}}),t._v(" no"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToEdit.inStock,expression:"toyToEdit.inStock"}],attrs:{type:"radio"},domProps:{value:!1,checked:t._q(t.toyToEdit.inStock,!1)},on:{change:function(e){return t.$set(t.toyToEdit,"inStock",!1)}}}),o("label",{attrs:{for:"type"}},[t._v("type:")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.toyToEdit.type,expression:"toyToEdit.type"}],attrs:{name:"type",id:"type"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.toyToEdit,"type",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"Educational"}},[t._v("Educational")]),o("option",{attrs:{value:"Funny"}},[t._v("Funny")]),o("option",{attrs:{value:"Adult"}},[t._v("Adult")])]),o("label",{attrs:{for:"price"}},[t._v("price:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToEdit.price,expression:"toyToEdit.price"}],attrs:{type:"text"},domProps:{value:t.toyToEdit.price},on:{input:function(e){e.target.composing||t.$set(t.toyToEdit,"price",e.target.value)}}}),o("button",[t._v("submit")])]),o("router-link",{attrs:{to:"/toy"}},[t._v("Back")])],1):t._e()},le=[],ce={name:"toy-edit",data:function(){return{toyToEdit:null}},methods:{loadToy:function(){var t=this,e=this.$route.params.toyId;Gt.getById(e).then((function(e){console.log("toy gotted in toy eddit is:",e),t.toyToEdit=JSON.parse(JSON.stringify(e))}))},update:function(){var t=this;console.log("Updating...",this.toyToEdit);var e=JSON.parse(JSON.stringify(this.toyToEdit));this.$store.dispatch({type:"updateToy",toy:e}).then((function(){t.$router.push("/toy")})).catch((function(t){}))}},created:function(){this.loadToy()},watch:{"$route.params.toyId":function(t){console.log("Changed to",t),this.loadToy()}},components:{}},ue=ce,de=Object(l["a"])(ue,ie,le,!1,null,null,null),pe=de.exports,fe=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.toyToAdd?o("div",{staticClass:"toy-add"},[o("h3",[t._v("Add toy:")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[o("label",{attrs:{for:"name"}},[t._v("name:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToAdd.name,expression:"toyToAdd.name"}],attrs:{type:"text"},domProps:{value:t.toyToAdd.name},on:{input:function(e){e.target.composing||t.$set(t.toyToAdd,"name",e.target.value)}}}),o("label",{attrs:{for:"at"}},[t._v("in stock:")]),t._v(" yes"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToAdd.inStock,expression:"toyToAdd.inStock"}],attrs:{type:"radio"},domProps:{value:!0,checked:t._q(t.toyToAdd.inStock,!0)},on:{change:function(e){return t.$set(t.toyToAdd,"inStock",!0)}}}),t._v(" no"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToAdd.inStock,expression:"toyToAdd.inStock"}],attrs:{type:"radio"},domProps:{value:!1,checked:t._q(t.toyToAdd.inStock,!1)},on:{change:function(e){return t.$set(t.toyToAdd,"inStock",!1)}}}),o("label",{attrs:{for:"type"}},[t._v("type:")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.toyToAdd.type,expression:"toyToAdd.type"}],attrs:{name:"type",id:"type"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.toyToAdd,"type",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"Educational"}},[t._v("Educational")]),o("option",{attrs:{value:"Funny"}},[t._v("Funny")]),o("option",{attrs:{value:"Adult"}},[t._v("Adult")])]),o("label",{attrs:{for:"price"}},[t._v("price:")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.toyToAdd.price,expression:"toyToAdd.price",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:t.toyToAdd.price},on:{input:function(e){e.target.composing||t.$set(t.toyToAdd,"price",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),o("button",[t._v("Add")])]),o("router-link",{attrs:{to:"/toy"}},[t._v("Back")])],1):t._e()},ye=[],me={name:"toy-add",data:function(){return{toyToAdd:Gt.getEmptyToy()}},methods:{add:function(){var t=this,e=JSON.parse(JSON.stringify(this.toyToAdd));this.$store.dispatch({type:"addToy",newtoy:e}).then((function(){})).catch((function(t){})).finally((function(){t.$router.push("/toy"),t.toyToAdd=Gt.getEmptyToy()}))}}},ve=me,he=Object(l["a"])(ve,fe,ye,!1,null,null,null),be=he.exports,ge=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"dashbord"},[o("section",{staticClass:"chart-price"},[o("h1",[t._v("avg price of toy type")]),t.toysAvgByType?o("chart",{attrs:{data:t.toysDataForDisplay}}):t._e()],1),o("section",{staticClass:"chart-price"},[o("h1",[t._v("percent of toys in stock by type")]),t.toysInStockByType?o("chart",{attrs:{data:t.toysInStockForDisplay}}):t._e()],1),o("section",{staticClass:"user-pref"},[o("h1",[t._v("Choose Your color")]),o("element-color",{on:{setColor:t.setColor}}),o("h1",[t._v("Choose Your Time")]),o("element-time",{on:{setTime:t.setTime}})],1)])},_e=[],je=o("1fca"),Te={extends:je["a"],props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},ke=Te,we=Object(l["a"])(ke,ee,oe,!1,null,null,null),xe=we.exports,Se=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-color-picker",{attrs:{"show-alpha":"",predefine:t.predefineColors},on:{change:t.setColor},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})},Ae=[],Ee={data:function(){return{color:"rgba(255, 69, 0, 0.68)",predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]}},methods:{setColor:function(){this.$emit("setColor",this.color)}}},Oe=Ee,$e=Object(l["a"])(Oe,Se,Ae,!1,null,null,null),Fe=$e.exports,Ce=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-time-select",{attrs:{"picker-options":{start:"08:30",step:"00:15",end:"18:30"},placeholder:"Select time"},on:{change:t.setTime},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},Be=[],Ie={data:function(){return{value:""}},methods:{setTime:function(){this.$emit("setTime",this.value)}}},Ne=Ie,Pe=Object(l["a"])(Ne,Ce,Be,!1,null,null,null),ze=Pe.exports,De={name:"dashboard-component",data:function(){return{toysAvgByType:null,toysInStockByType:null,userColor:null,userTime:null}},methods:{setColor:function(t){console.log("got",t),this.userColor=t},setTime:function(t){console.log("got",t),this.userTime=t}},computed:{toysDataForDisplay:function(){return{datasets:[{backgroundColor:["magenta","green","purple"],data:this.toysAvgByType}],labels:["Adolt","Educational","Funny"]}},toysInStockForDisplay:function(){return{datasets:[{backgroundColor:["yellow","red","blue"],data:this.toysInStockByType}],labels:["Adolt","Educational","Funny"]}}},created:function(){this.toysAvgByType=this.$store.getters.toysCountByType,this.toysInStockByType=this.$store.getters.toysInStockByType},components:{chart:xe,elementColor:Fe,elementTime:ze}},Me=De,Ue=Object(l["a"])(Me,ge,_e,!1,null,null,null),qe=Ue.exports,Je=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h1",[t._v("welcome to admin page")]),o("ul",{staticClass:"user-list card-grid"},t._l(t.users,(function(e){return o("li",{key:e._id,staticClass:"toy-preview-container card-toy"},[o("h1",[t._v("user name: "+t._s(e.username))]),o("h1",[t._v("is admin: "+t._s(e.isAdmin))]),o("h1",[t._v("full name: "+t._s(e.fullname))]),o("div",{staticClass:"btns-container"},[o("button",{on:{click:function(o){return t.remove(e._id)}}},[t._v("X")])])])})),0)])},Re=[],Le={name:"admin-page",data:function(){return{users:null}},methods:{},created:function(){},mounted:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.query();case 2:o=e.sent,console.log(o),t.users=o;case 5:case"end":return e.stop()}}),e)})))()},components:{}},He=Le,Xe=Object(l["a"])(He,Je,Re,!1,null,null,null),Ye=Xe.exports;n["default"].use(d["a"]);var Ge=[{path:"/",name:"Home",component:J},{path:"/toy",name:"Toy-app",component:Ht},{path:"/toy-add",name:"Toy-add",component:be},{path:"/details/:toyId",name:"Toy-details",component:se},{path:"/edit/:toyId",name:"Toy-edit",component:pe},{path:"/dashboard",name:"Toy-dashboard",component:qe},{path:"/admin",name:"admin",component:Ye},{path:"/about",name:"About",component:ct}],Ve=new d["a"]({mode:"hash",base:"/",routes:Ge}),We=Ve,Ke=o("2f62"),Qe=(o("4de4"),o("13d5"),{state:{toys:[],filterBy:{name:"",stockFilter:"all",typeFilter:"all",sortBy:"name"}},getters:{toysForDisplay:function(t){return t.toys},toysCountByType:function(t){var e=t.toys.filter((function(t){return"Adult"===t.type})),o=e.reduce((function(t,e){return t+e.price}),0),n=t.toys.filter((function(t){return"Funny"===t.type})),r=n.reduce((function(t,e){return t+e.price}),0),a=t.toys.filter((function(t){return"Educational"===t.type})),s=a.reduce((function(t,e){return t+e.price}),0);return[o/e.length,r/n.length,s/a.length]},toysInStockByType:function(t){var e=t.toys.filter((function(t){return"Adult"===t.type&&!0===t.inStock})),o=t.toys.filter((function(t){return"Funny"===t.type&&!0===t.inStock})),n=t.toys.filter((function(t){return"Educational"===t.type&&!0===t.inStock}));return[e.length,o.length,n.length]}},mutations:{setToys:function(t,e){var o=e.toys;t.toys=o},addToy:function(t,e){var o=e.addedToy;t.toys.push(o)},removeToy:function(t,e){var o=e.toyId,n=t.toys.findIndex((function(t){return t._id===o}));t.toys.splice(n,1)},updateToy:function(t,e){var o=e.updatedToy,n=t.toys.findIndex((function(t){return t._id===o._id}));t.toys.splice(n,1,o)},setFilter:function(t,e){var o=e.filterBy;t.filterBy=o}},actions:{loadToys:function(t){Gt.query(t.state.filterBy).then((function(e){t.commit({type:"setToys",toys:e})}))},addToy:function(t,e){var o=t.commit,n=e.newtoy;return Gt.save(n).then((function(t){o({type:"addToy",addedToy:t})}))},removeToy:function(t,e){var o=t.commit,n=e.toyId;return Gt.remove(n).then((function(){o({type:"removeToy",toyId:n})}))},updateToy:function(t,e){var o=t.commit,n=e.toy;return Gt.save(n).then((function(t){o({type:"updateToy",updatedToy:t})}))},setFilter:function(t,e){var o=t.commit,n=e.filterBy;Gt.query(n).then((function(t){o({type:"setToys",toys:t})}))}}});n["default"].use(Ke["a"]);var Ze=new Ke["a"].Store({strict:!0,modules:{toyStore:Qe}}),to=(o("fb98"),o("5c96")),eo=o.n(to),oo=(o("0fae"),o("755e"));n["default"].use(eo.a),n["default"].use(oo,{load:{key:"AIzaSyA_FOAqmW3HEstMwnlXX3afKOeYXXL1TdM",libraries:"places"}}),n["default"].config.productionTip=!1,new n["default"]({router:We,store:Ze,render:function(t){return t(u)}}).$mount("#app")},"5b4b":function(t,e,o){},a097:function(t,e,o){"use strict";o("eccc")},cae3:function(t,e,o){"use strict";o("5b4b")},eccc:function(t,e,o){},fb98:function(t,e,o){}});
//# sourceMappingURL=app.5f5fe105.js.map