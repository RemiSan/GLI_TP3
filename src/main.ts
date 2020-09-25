import Vue from 'vue'
import { MdCard, MdButton, MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdField);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
