import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YkkButton from '../packages/YkkButton'

Vue.config.productionTip = false
Vue.use(YkkButton)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
