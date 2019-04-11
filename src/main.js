import Vue from 'vue'
import DwbVueTab from './TabBar'

new Vue({
  el: '#app',
  components: {
    DwbVueTab
  },
  data () {
    return {
      tabs: ['Tab', 'Bar'],
      active: 0,
      initCallback: true
    }
  },
  methods: {
    getData (res) {
      console.log(res)
    },
    tap () {
      this.tabs = ['Tab', 'Bar', 'Tab1', 'Bar2', 'Tab1', 'Bar2']
    }
  }
})