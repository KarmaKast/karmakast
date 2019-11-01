import Vue from 'vue'
import App from './App.vue'
import Vue2TouchEvents from 'vue2-touch-events'
import store from './store'

Vue.config.productionTip = false;
Vue.use(Vue2TouchEvents);

/*new Vue({
  render: h => h(App),
}).$mount('#app')*/

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
