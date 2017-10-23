// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'less/main.less'

import iView from 'iview'
// import './less/theme/index.less'

import 'iview/dist/styles/iview.css'   // 使用 CSS

Vue.use(iView)

Vue.config.productionTip = false



router.afterEach((to,from)=>{
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
