(function(t){function e(e){for(var r,c,a=e[0],l=e[1],s=e[2],f=0,p=[];f<a.length;f++)c=a[f],o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HomePage",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("el-container",[n("el-header",[n("h1",[t._v("Resistor Color")])]),n("el-main",[n("el-row",[n("el-col",[n("div",{},[n("svg",{attrs:{width:"200",height:"60"}},[n("rect",{staticStyle:{fill:"#edde91",opacity:"0.8"},attrs:{x:"50",y:"20",rx:"10",ry:"10",width:"100",height:"30"}}),n("rect",{staticStyle:{fill:"black",opacity:"0.5"},attrs:{x:"20",y:"32",width:"30",height:"5"}}),n("rect",{staticStyle:{fill:"black",opacity:"0.5"},attrs:{x:"150",y:"32",width:"30",height:"5"}}),n("rect",{style:"fill:"+t.band0clr+";",attrs:{x:"65",y:"20",width:"8",height:"30"}}),n("rect",{style:"fill:"+t.band1clr+";",attrs:{x:"80",y:"20",width:"8",height:"30"}}),n("rect",{style:"fill:"+t.band2clr+";",attrs:{x:"95",y:"20",width:"8",height:"30"}}),n("rect",{style:"fill:"+t.band3clr+";",attrs:{x:"120",y:"20",width:"8",height:"30"}})])])])],1),n("h1",[t._v(t._s(t.msg))])],1),n("el-footer",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("7")}}},[t._v("7")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("8")}}},[t._v("8")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("9")}}},[t._v("9")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("back")}}},[t._v("DEL")])],1)])],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("4")}}},[t._v("4")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("5")}}},[t._v("5")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("6")}}},[t._v("6")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("M")}}},[t._v("M")])],1)])],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("1")}}},[t._v("1")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("2")}}},[t._v("2")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("3")}}},[t._v("3")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("K")}}},[t._v("K")])],1)])],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6,offset:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("0")}}},[t._v("0")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext(".")}}},[t._v(".")])],1)]),n("el-col",{attrs:{span:6}},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:function(e){t.inputtext("±")}}},[t._v("±")])],1)])],1)],1)],1)],1)},a=[],l=(n("6b54"),{name:"Home",data:function(){return{msg:"",res:"",band0clr:"",band1clr:"",band2clr:"",band3clr:""}},created:function(){this.genres()},methods:{open:function(){this.$message({message:"Correct!",type:"success"}),this.genres()},inputtext:function(t){"back"===t?this.msg=this.msg.substring(0,this.msg.length-1):this.msg+=t,this.msg==this.res&&(this.msg="",this.open())},genres:function(){var t=Math.floor(10*Math.random()),e=Math.floor(10*Math.random()),n=Math.floor(8*Math.random()),r=(Math.floor(100*Math.random())+1)%2,o=(10*t+e)*Math.pow(10,n),i="";i=o>=1e6?o/1e6+"M":o>=1e3?o/1e3+"K":o.toString(),i+=0===r?"±10":"±5",this.res=i,this.band0clr=this.clr(t),this.band1clr=this.clr(e),this.band2clr=this.clr(n),this.band3clr=this.clr(r+20),console.log(i)},clr:function(t){switch(t){case 0:return"#000000";case 1:return"#964B00";case 2:return"#FF0000";case 3:return"#ffa500";case 4:return"#fff600";case 5:return"#9acd32";case 6:return"#6495ed";case 7:return"#9400d3";case 8:return"#a0a0a0";case 9:return"#FFFFFF";case 20:return"#c0c0c0";case 21:return"#cfb53b";default:return}}}}),s=l,u=(n("f369"),n("2877")),f=Object(u["a"])(s,c,a,!1,null,"f65b25c6",null);f.options.__file="Home.vue";var p=f.exports,d={name:"app",components:{HomePage:p}},h=d,v=(n("5c0b"),Object(u["a"])(h,o,i,!1,null,null,null));v.options.__file="App.vue";var b=v.exports,g=n("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var y=n("5c96"),m=n.n(y),x=(n("0fae"),n("c87b")),_=n.n(x);r["default"].use(m.a,{locale:_.a}),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){},bf7b:function(t,e,n){},f369:function(t,e,n){"use strict";var r=n("bf7b"),o=n.n(r);o.a}});
//# sourceMappingURL=app.a6b7d821.js.map