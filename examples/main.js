import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YkkButton from '../packages/YkkButton'
import DemoBlock from './components/DemoBlock.vue'
import './assets/common.css'
Vue.use(YkkButton)
Vue.component('DemoBlock', DemoBlock)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
