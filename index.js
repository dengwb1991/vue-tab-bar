/**
 * vue-tab-bar
 * @author dengwb
 */
let Tab = require('./src/TabBar.vue')
Tab = Tab.default || Tab

export default {
  DwbVueTab: Tab,
  install: (Vue) => {
    Vue.component(Tab.name, Tab)
  }
}

export const DwbVueTab = Tab
