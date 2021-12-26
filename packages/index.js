import Button from './button'

// 所有组件列表
const components = [Button]
// 定义install
const install = function (Vue) {
  components.forEach((component) => Vue.component(component.name, component))
}
export default {
  install
}
