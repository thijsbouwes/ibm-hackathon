(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1f5d":function(t,e,n){},"3df1":function(t,e,n){"use strict";var a=n("ee73"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026");n("4989"),n("ab8b");window.axios=n("bc3a"),a["a"].config.productionTip=!1,a["a"].component("v-index",n("6e78").default),a["a"].component("v-order",n("f510").default),a["a"].component("v-product",n("a594").default),window.axios.defaults.baseURL="http://10.3.20.1:51080",window.axios.defaults.headers.common["Authorization"]="Basic Tmljb2xhc0Jvc3M6bmljb2xhcw==",a["a"].prototype.http=axios,new a["a"]({el:"#app"})},"6e78":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isActive?n("div",{staticClass:"container"},[null!==t.products?n("div",{staticClass:"row"},[t._m(0),t._l(t.products,(function(e){return n("div",{staticClass:"col-md-3 mb-4 product",on:{click:function(n){return t.open(e)}}},[n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/images/"+e.CA_DESCRIPTION.split(" ")[0].toLowerCase()+".jpg"}}),n("h4",{staticClass:"text-center mt-3 mb-0"},[t._v(t._s(e.CA_DESCRIPTION))]),n("span",{staticClass:"d-block text-center price"},[t._v("$ "+t._s(t._f("money")(e.CA_COST)))])])}))],2):t._e()]):t._e()},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 text-center mt-4 mb-4"},[n("h1",[t._v("Mainframe Shop")])])}],o=(n("b680"),n("acd8"),n("81f6")),r={props:{active:Boolean},filters:{money:function(t){return void 0===t?null:(t=parseFloat(t),t.toFixed(2))}},data:function(){return{isActive:this.active,products:[]}},mounted:function(){var t=this;o["a"].$on("page",(function(e){t.isActive="index"===e})),axios.request("/catalogManager4/items?offset=0").then((function(e){console.log(e),t.products=e.data.DFH0XCP1.CA_INQUIRE_REQUEST.CA_CAT_ITEM,console.log(t.products)}))},methods:{open:function(t){o["a"].$emit("product",t)}}},i=r,c=(n("3df1"),n("2877")),u=Object(c["a"])(i,a,s,!1,null,"6772718e",null);e["default"]=u.exports},"7e1d":function(t,e,n){"use strict";var a=n("1f5d"),s=n.n(a);s.a},"81f6":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("a026"),s=new a["a"]},a594:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"product"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t.product?n("div",{staticClass:"modal-body"},[t.isLoading?n("div",{staticClass:"d-flex justify-content-center"},[n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/images/loading.gif"}})]):t._e(),t.isLoading?t._e():n("div",[n("div",{staticClass:"d-flex justify-content-center"},[n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/images/"+t.product.CA_DESCRIPTION.split(" ")[0].toLowerCase()+".jpg"}})]),t.product.CA_DESCRIPTION?n("h2",{staticClass:"mt-4 mb-3"},[t._v(t._s(t.product.CA_DESCRIPTION))]):t._e(),n("div",{staticClass:"d-flex justify-content-between"},[n("span",{staticClass:"price"},[t._v("$ "+t._s(t._f("money")(t.product.CA_COST)))]),n("span",{staticClass:"stock"},[t._v("Stock: "+t._s(t.product.IN_STOCK))])])])]):t._e(),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.order}},[t._v("Order")]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])},s=[],o=(n("b680"),n("acd8"),n("81f6")),r=n("1157"),i=n.n(r),c={data:function(){return{isLoading:!1,product:null}},filters:{money:function(t){return void 0===t?null:(t=parseFloat(t),t.toFixed(2))}},mounted:function(){var t=this;o["a"].$on("product",(function(e){t.product=e;var n=i.a;n("#product").modal("show")}))},methods:{order:function(){this.product.IN_STOCK-=1,o["a"].$emit("order",this.product)}}},u=c,l=(n("7e1d"),n("2877")),d=Object(l["a"])(u,a,s,!1,null,"268eda76",null);e["default"]=d.exports},ce77:function(t,e,n){},e0eb:function(t,e,n){"use strict";var a=n("ce77"),s=n.n(a);s.a},ee73:function(t,e,n){},f510:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"row"},[t._l(t.products,(function(e,a){return n("div",{staticClass:"col-12 d-flex align-items-center mb-3"},[n("img",{staticClass:"mr-4",staticStyle:{"max-width":"100%","max-height":"100px"},attrs:{src:"/images/"+e.CA_DESCRIPTION.split(" ")[0].toLowerCase()+".jpg"}}),n("h3",{staticClass:"flex-grow-1"},[t._v(t._s(e.CA_DESCRIPTION))]),n("span",{staticClass:"price"},[t._v("$ "+t._s(t._f("money")(e.CA_COST)))]),n("span",{staticClass:"quantity ml-4"},[t._v(t._s(e.quantity))])])})),n("div",{staticClass:"col-12 d-flex justify-content-end"},[n("span",{staticClass:"total mr-2"},[t._v("Total:")]),n("span",{staticClass:"price"},[t._v("$ "+t._s(t._f("money")(t.total)))])])],2)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h1",[t._v("Orders")])])])}],o=(n("4160"),n("b680"),n("b64b"),n("acd8"),n("159b"),n("81f6")),r={props:{active:Boolean},filters:{money:function(t){return void 0===t?null:(t=parseFloat(t),t.toFixed(2))}},data:function(){return{refresh:!0,isActive:this.active,total:0,products:{}}},mounted:function(){var t=this;o["a"].$on("order",(function(e){if(e.CA_ITEM_REF in t.products){var n=t.products[e.CA_ITEM_REF];n.quantity+=1,t.$set(t.products,e.CA_ITEM_REF,n)}else e.quantity=1,t.$set(t.products,e.CA_ITEM_REF,e);var a=0;Object.keys(t.products).forEach((function(e){var n=t.products[e];a+=parseFloat(parseFloat(n.CA_COST))*n.quantity})),t.total=a,t.$forceUpdate()}))},method:{}},i=r,c=(n("e0eb"),n("2877")),u=Object(c["a"])(i,a,s,!1,null,"5a93a661",null);e["default"]=u.exports}});
//# sourceMappingURL=app.9d19df4d.js.map