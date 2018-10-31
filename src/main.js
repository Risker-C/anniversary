// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 清楚默认样式
import 'normalize.css/normalize.css'
// 跨平台的CSS3动画库
import 'animate.css'
// 引入antd样式库
import 'antd/dist/antd.css'





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
