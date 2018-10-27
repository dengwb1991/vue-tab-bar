<!--# dwb-vue-tab-->

<p align="left">
<img src="https://www.dengwb.com/static/logo/Dengwb.png" width="100px"/>
</p>
<!--<br/>-->
<h1>dwb-vue-tab</h1>


[![](https://img.shields.io/badge/vue-2.x-green.svg)](https://github.com/dengwb1991/vue-tab-bar)
[![](https://img.shields.io/npm/v/dwb-vue-tab.svg?style=flat)](https://www.npmjs.com/package/dwb-vue-tab)
[![](https://img.shields.io/npm/dt/dwb-vue-tab.svg)](https://www.npmjs.com/package/dwb-vue-tab)
[![](https://img.shields.io/github/stars/dengwb1991/vue-tab-bar.svg?style=social&label=Stars)](https://github.com/dengwb1991/vue-tab-bar)

<img src="http://vuetool.dengwb.com/static/ezgif-1-b585a4936364.gif" width="200"/>

## Install

``` bash
npm i dwb-vue-tab --save
```

## Mount

### mount with global

``` javascript
import Vue from 'vue'
import TabBar from 'dwb-vue-tab'

Vue.use(TabBar)
```

### mount with component

``` javascript
import { DwbVueTab } from 'dwb-vue-tab'

export default {
  components: {
    DwbVueTab
  }
}
```

## Props

 Attribute | Type | Default | Description 
 --- | ---  | --- | --- 
 data  | array | [] | for data rendered with tab-bar
 active | [number,string] | 0 | the element selected by default, supports the .sync modifier
 tabWidth | string | '110px' | tab-bar width
 tabHeight | string | '40px' | tab-bar height
 tabColor | string | '#999' | tab-bar color
 tabStyle | object | {} | custom style of tab-bar
 fontSize | string | '14px' | font size of tab-bar
 fontFamily | string | 'PingFangSC-Regular' | font family of tab-bar
 name | [string, obejct] | null | if the data-element is an object, render data with name
 background | string | '#FFF' | tab-bar background
 highlight | string | '#A5884D' | activated the colors shown
 activeStyle | object | {} | activated the style shown
 lineUse | boolean | true | use underlining or not
 lineHeight | string | '2px' | underline height
 lineWidth | [string, object] | null | underline width
 lineColor | string | '#A5884D' | underline color
 lineStyle | object | {} | custom style of underline
 initCallback | boolean | false | initialize execution callback
 
 ## Events

Attribute | Value | Description
---- | --- | ---
callback | (activated element) | execute when switching activation elements

## Demo

```html
<template>
    <DwbVueTab :data="tabs"
               :active.sync="active"
               :initCallback="initCallback"
               @callback="getData"/>
</template>
<script>
export default {
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
}
</script>
```


## Example
```bash
npm install

npm run dev
```

[[Vue Tab Bar]](http://vuetool.dengwb.com/#/tab)

[[More Example]](https://github.com/dengwb1991/Tool/tree/master/src/components/Tab)

## Author
[[Dengwb]](http://www.dengwb.com/app/welcome.html)
