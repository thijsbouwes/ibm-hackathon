(function(t){function e(e){for(var n,i,r=e[0],c=e[1],u=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1f5d":function(t,e,s){},"24c7":function(t,e,s){"use strict";var n=s("e93e"),a=s.n(n);a.a},"285d":function(t,e,s){"use strict";var n=s("ab39"),a=s.n(n);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("a026");s("4989"),s("ab8b");window.axios=s("bc3a"),n["a"].config.productionTip=!1,n["a"].component("v-index",s("6e78").default),n["a"].component("v-order",s("f510").default),n["a"].component("v-product",s("a594").default),window.axios.defaults.baseURL="http://10.3.20.1:51080",window.axios.defaults.headers.common["Authorization"]="Basic Tmljb2xhc0Jvc3M6bmljb2xhcw==",n["a"].prototype.http=axios,new n["a"]({el:"#app"})},"6e78":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isActive?s("div",{staticClass:"container",staticStyle:{"margin-top":"50px"}},[null!==t.products?s("div",{staticClass:"row"},t._l(t.products,(function(e){return s("div",{staticClass:"col-md-4 mb-4 product",on:{click:function(s){return t.open(e)}}},[s("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/images/"+e.CA_DESCRIPTION.split(" ")[0].toLowerCase()+".jpg"}}),s("h4",{staticClass:"text-center mt-3 mb-0"},[t._v(t._s(e.CA_DESCRIPTION))]),s("span",{staticClass:"d-block text-center price"},[t._v("$ "+t._s(t._f("money")(e.CA_COST)))])])})),0):t._e()]):t._e()},a=[],o=(s("b680"),s("acd8"),s("81f6")),i={props:{active:Boolean},filters:{money:function(t){return void 0===t?null:(t=parseFloat(t),t.toFixed(2))}},data:function(){return{isActive:this.active,offset:0,products:[]}},mounted:function(){var t=this;this.request(),axios.request("/catalogManager4/items?offset=0").then((function(e){t.products=e.data.DFH0XCP1.CA_INQUIRE_REQUEST.CA_CAT_ITEM}))},methods:{open:function(t){o["a"].$emit("product",t)},prev:function(){this.offset=this.offset-15>0?this.offset-15:0,this.request()},next:function(){this.offset=this.offset+15,this.request()},request:function(){var t=this;axios.request("/catalogManager4/items?offset="+this.offset).then((function(e){console.log(e),t.products=e.data.DFH0XCP1.CA_INQUIRE_REQUEST.CA_CAT_ITEM,t.isActive=!1,t.$nextTick((function(){t.isActive=!0})),console.log(t.products)}))}}},r=i,c=(s("24c7"),s("2877")),u=Object(c["a"])(r,n,a,!1,null,"f96e0608",null);e["default"]=u.exports},"7e1d":function(t,e,s){"use strict";var n=s("1f5d"),a=s.n(n);a.a},"81f6":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var n=s("a026"),a=new n["a"]},a594:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"product"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t.product?s("div",{staticClass:"modal-body"},[t.isLoading?s("div",{staticClass:"d-flex justify-content-center"},[s("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/images/loading.gif"}})]):t._e(),t.isLoading?t._e():s("div",[s("div",{staticClass:"d-flex justify-content-center"},[s("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/images/"+t.product.CA_DESCRIPTION.split(" ")[0].toLowerCase()+".jpg"}})]),t.product.CA_DESCRIPTION?s("h2",{staticClass:"mt-4 mb-3"},[t._v(t._s(t.product.CA_DESCRIPTION))]):t._e(),s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"price"},[t._v("$ "+t._s(t._f("money")(t.product.CA_COST)))]),s("span",{staticClass:"stock"},[t._v("Stock: "+t._s(t.product.IN_STOCK))])])])]):t._e(),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.order}},[t._v("Order")]),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])},a=[],o=(s("b680"),s("acd8"),s("81f6")),i=s("1157"),r=s.n(i),c={data:function(){return{isLoading:!1,product:null}},filters:{money:function(t){return void 0===t?null:(t=parseFloat(t),t.toFixed(2))}},mounted:function(){var t=this;o["a"].$on("product",(function(e){t.product=e;var s=r.a;s("#product").modal("show")}))},methods:{order:function(){this.product.IN_STOCK-=1,o["a"].$emit("order",this.product)}}},u=c,l=(s("7e1d"),s("2877")),d=Object(l["a"])(u,n,a,!1,null,"268eda76",null);e["default"]=d.exports},ab39:function(t,e,s){},e93e:function(t,e,s){},f510:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mb-5"},[t._m(0),s("div",{staticClass:"row"},[t._l(t.products,(function(e,n){return s("div",{staticClass:"col-12 d-flex align-items-center mb-3"},[s("img",{staticClass:"mr-4",staticStyle:{"max-width":"100%","max-height":"100px"},attrs:{src:"/images/"+e.CA_DESCRIPTION.split(" ")[0].toLowerCase()+".jpg"}}),s("h3",{staticClass:"flex-grow-1"},[t._v(t._s(e.CA_DESCRIPTION))]),s("span",{staticClass:"price"},[t._v("$ "+t._s(t._f("money")(e.CA_COST)))]),s("span",{staticClass:"quantity ml-4"},[t._v(t._s(e.quantity))])])})),s("div",{staticClass:"col-12 d-flex justify-content-end"},[s("span",{staticClass:"total mr-2"},[t._v("Total:")]),s("span",{staticClass:"price"},[t._v("$ "+t._s(t._f("money")(t.total)))])])],2)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",[t._v("Orders")])])])}],o=(s("4160"),s("b680"),s("b64b"),s("acd8"),s("159b"),s("81f6")),i={props:{active:Boolean},filters:{money:function(t){return void 0===t?null:(t=parseFloat(t),t.toFixed(2))}},data:function(){return{refresh:!0,isActive:this.active,total:0,products:{}}},mounted:function(){var t=this;o["a"].$on("order",(function(e){if(e.CA_ITEM_REF in t.products){var s=t.products[e.CA_ITEM_REF];s.quantity+=1,t.$set(t.products,e.CA_ITEM_REF,s)}else e.quantity=1,t.$set(t.products,e.CA_ITEM_REF,e);var n=0;Object.keys(t.products).forEach((function(e){var s=t.products[e];n+=parseFloat(parseFloat(s.CA_COST))*s.quantity})),t.total=n,t.$forceUpdate()}))},method:{}},r=i,c=(s("285d"),s("2877")),u=Object(c["a"])(r,n,a,!1,null,"eaf28054",null);e["default"]=u.exports}});
//# sourceMappingURL=app.dc7c12af.js.map