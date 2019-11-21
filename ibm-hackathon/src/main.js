import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

window.axios = require('axios');

Vue.config.productionTip = false;

Vue.component('v-index', require('./components/index.vue').default);
Vue.component('v-order', require('./components/order.vue').default);
Vue.component('v-product', require('./components/product.vue').default);

window.axios.defaults.baseURL = 'http://10.3.20.1:51080';
window.axios.defaults.headers.common['Authorization'] = 'Basic Tmljb2xhc0Jvc3M6bmljb2xhcw==';
Vue.prototype.http = axios;

new Vue({
  el: '#app',
});
