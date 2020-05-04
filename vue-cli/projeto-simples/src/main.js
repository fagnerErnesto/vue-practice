import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Counters from './components/Counters'

Vue.config.productionTip = false
Vue.component('app-counters', Counters);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
