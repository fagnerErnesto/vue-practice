import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Navigation from '@/Components/Navigation.vue'
import Headline from '@/Components/Headline.vue'
import Carousel from '@/Components/Carousel.vue'
import Footer from '@/Components/Footer.vue'

Vue.config.productionTip = false
Vue.component('Navigation', Navigation)
Vue.component('Headline', Headline)
Vue.component('Carousel', Carousel)
Vue.component('Footer', Footer)

new Vue({
  render: h => h(App),
}).$mount('#app')
