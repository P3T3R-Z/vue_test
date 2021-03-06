// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from "vue-resource"
import store from "./vuex/store.js";

Vue.use(vueResource)
Vue.config.productionTip = false
Vue.component('activityList', {
  props: ['e'],
  template: `<div>
        <p class="dayTime">{{e}}</p>
        </div>`
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
