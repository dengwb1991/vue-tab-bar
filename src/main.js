import Vue from 'vue'
import VueTabBar from './TabBar'

new Vue({
  el: '#app',
  components: {
    VueTabBar
  },
  data () {
    return {
      tabs: ['Tab', 'Bar'],
      active: 0,
      initCallback: true,
    }
  },
  methods: {
    getData (res) {
      console.log(res)
    }
  }
})