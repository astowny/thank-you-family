import Vue from 'vue'
import AuthPlugin from './plugin'
import getAuthentication from "./getAuthentication"
import AuthWrapper from './components/AuthWrapper.vue'
import users from './users'

Vue.use(AuthPlugin, {
  auth: getAuthentication(users,
    "user")
})


Vue.config.productionTip = false

new Vue({
  render: h => h(AuthWrapper),
}).$mount('#app')
