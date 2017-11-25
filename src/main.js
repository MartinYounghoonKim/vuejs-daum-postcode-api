import Vue from 'vue';
import App from './App.vue';

/**
 * @desc use BootstrapVue packages
 */
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
