(function(t){function n(n){for(var o,a,s=n[0],c=n[1],l=n[2],f=0,d=[];f<s.length;f++)a=s[f],r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(n);while(d.length)d.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var o={},r={app:0},i=[];function a(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=o,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(e,o,function(n){return t[n]}.bind(null,o));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/resicolor/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"140f":function(t,n,e){"use strict";var o=e("aceb"),r=e.n(o);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("el-container",[e("el-header",[e("a",{staticClass:"menu",attrs:{href:"#"}},[e("h1",{on:{click:function(n){t.menushow=!0}}},[t._v("Resistor Color")])])]),e("br"),e("el-dialog",{attrs:{title:"menu",visible:t.menushow},on:{"update:visible":function(n){t.menushow=n}}},[e("div",{on:{click:function(n){t.mode("normal")}}},[e("a",{staticClass:"menu",attrs:{href:"#"}},[t._v("Normal mode")])]),e("br"),e("div",{on:{click:function(n){t.mode("timeing")}}},[e("a",{staticClass:"menu",attrs:{href:"#"}},[t._v("Timeing mode")])])]),e("el-main",[e("Resistor")],1),e("el-footer",[e("KeyBoard")],1)],1)],1)},i=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"keyboard"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("7")}}},[t._v("7")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("8")}}},[t._v("8")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("9")}}},[t._v("9")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("back")}}},[t._v("DEL")])],1)])],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("4")}}},[t._v("4")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("5")}}},[t._v("5")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("6")}}},[t._v("6")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("M")}}},[t._v("M")])],1)])],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("1")}}},[t._v("1")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("2")}}},[t._v("2")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("3")}}},[t._v("3")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("K")}}},[t._v("K")])],1)])],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.genres()}}},[e("i",{staticClass:"el-icon-refresh"})])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("0")}}},[t._v("0")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext(".")}}},[t._v(".")])],1)]),e("el-col",{attrs:{span:6}},[e("div",[e("el-button",{attrs:{type:"info",round:""},on:{click:function(n){t.inputtext("±")}}},[t._v("±")])],1)])],1)],1)},s=[],c=(e("6b54"),e("2f62"));o["default"].use(c["a"]);var l=new c["a"].Store({state:{input:"______",ans:"",band0clr:"",band1clr:"",band2clr:"",band3clr:"",total:0},mutations:{inputtext:function(t,n){"______"===t.input&&(t.input=""),"back"===n?(t.input=t.input.substring(0,t.input.length-1),0===t.input.length&&(t.input="______")):t.input+=n,t.input===t.ans&&(t.input="______",t.total++,u.genResistor())},genres:function(t,n){t.band0clr=n.band0,t.band1clr=n.band1,t.band2clr=n.band2,t.band3clr=n.band3,t.ans=n.str}},actions:{}}),u={genResistor:function(){var t=Math.floor(10*Math.random())%9+1,n=Math.floor(10*Math.random()),e=Math.floor(10*Math.random())%7,o=Math.floor(10*Math.random())%2,r=(10*t+n)*Math.pow(10,e),i="";i=r>=1e6?r/1e6+"M":r>=1e3?r/1e3+"K":r.toString(),0===o&&(i+="±10"),t=this.color(t),n=this.color(n),e=this.color(e),o=this.color(o+20),l.commit("genres",{band0:t,band1:n,band2:e,band3:o,str:i})},color:function(t){switch(t){case 0:return"#000000";case 1:return"#964B00";case 2:return"#FF0000";case 3:return"#ffa500";case 4:return"#fff600";case 5:return"#9acd32";case 6:return"#6495ed";case 7:return"#9400d3";case 8:return"#a0a0a0";case 9:return"#FFFFFF";case 20:return"#c0c0c0";case 21:return"#cfb53b";default:}}},f={name:"KeyBoard",data:function(){return{}},created:function(){u.genResistor()},methods:{genres:function(){u.genResistor()},inputtext:function(t){this.$store.commit("inputtext",t)}}},d=f,p=(e("140f"),e("2877")),h=Object(p["a"])(d,a,s,!1,null,"be770620",null);h.options.__file="KeyBoard.vue";var b=h.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"resistor"},[e("el-row",[e("el-col",[e("h3",[t._v("total: "+t._s(this.$store.state.total))]),e("div",{on:{click:function(n){t.show()}}},[e("svg",{attrs:{width:"200",height:"60"}},[e("rect",{staticStyle:{fill:"#edde91",opacity:"0.8"},attrs:{x:"50",y:"20",rx:"10",ry:"10",width:"100",height:"30"}}),e("rect",{staticStyle:{fill:"black",opacity:"0.5"},attrs:{x:"20",y:"32",width:"30",height:"5"}}),e("rect",{staticStyle:{fill:"black",opacity:"0.5"},attrs:{x:"150",y:"32",width:"30",height:"5"}}),e("rect",{style:"fill:"+this.$store.state.band0clr+";",attrs:{x:"65",y:"20",width:"8",height:"30"}}),e("rect",{style:"fill:"+this.$store.state.band1clr+";",attrs:{x:"80",y:"20",width:"8",height:"30"}}),e("rect",{style:"fill:"+this.$store.state.band2clr+";",attrs:{x:"95",y:"20",width:"8",height:"30"}}),e("rect",{style:"fill:"+this.$store.state.band3clr+";",attrs:{x:"120",y:"20",width:"8",height:"30"}})]),e("h1",[t._v(t._s(this.$store.state.input))])])])],1)],1)},_=[],y={name:"Resistor",data:function(){return{}},methods:{show:function(){alert(this.$store.state.ans)}}},g=y,m=(e("b322"),Object(p["a"])(g,v,_,!1,null,"020cf148",null));m.options.__file="Resistor.vue";var w=m.exports,x={name:"app",data:function(){return{menushow:!1}},components:{KeyBoard:b,Resistor:w},methods:{mode:function(t){console.log(t)}}},k=x,M=(e("5c0b"),Object(p["a"])(k,r,i,!1,null,null,null));M.options.__file="App.vue";var j=M.exports,O=e("9483");Object(O["a"])("".concat("/resicolor/dist/","/dist/service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var $=e("5c96"),F=e.n($),S=(e("0fae"),e("c87b")),R=e.n(S);o["default"].use(F.a,{locale:R.a}),o["default"].config.productionTip=!1,new o["default"]({store:l,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var o=e("5e27"),r=e.n(o);r.a},"5e27":function(t,n,e){},aceb:function(t,n,e){},b322:function(t,n,e){"use strict";var o=e("e6e7"),r=e.n(o);r.a},e6e7:function(t,n,e){}});
//# sourceMappingURL=app.6f28dd36.js.map