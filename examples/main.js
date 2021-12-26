import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hljs from 'highlight.js'
import 'highlight.js/styles/agate.css'
import DemoBlock from './components/DemoBlock.vue'
import Button from '../packages/button'
import './assets/common.scss'
Vue.use(Button)
Vue.component('DemoBlock', DemoBlock)

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
