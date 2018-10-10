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
      initCallback: true,
    }
  },
  methods: {
    getData (res) {
      console.log(res)
    }
  }
})