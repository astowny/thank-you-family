import Vue from 'vue'
import AuthPlugin from './plugin'
import getAuthentication from "./getAuthentication"
import AuthWrapper from './components/AuthWrapper.vue'

Vue.use(AuthPlugin, {
  auth: getAuthentication([
    {
      username: "maman José",
      password: "femme de priere",
    },
    {
      username: "maman Eliane",
      password: "oeil d'aigle"
    },
    {
      username: "Aurelie",
      password: "unsoleilradieux"
    },
    {
      username: "Jenny",
      password: "jesuslovesyou"
    },
    {
      username: "Lydie",
      password: "JesusTheCenter"
    },
    {
      username: "Christ",
      password: "plusquunfrere"
    },
    {
      username: "Sarah",
      password: "mamandesgateaux"
    },
    {
      username: "Abi",
      password: "superforte"
    },
    {
      username: "grand maman",
      password: 'intercesseuse'
    }
  ],
    "user")
})


Vue.config.productionTip = false

new Vue({
  render: h => h(AuthWrapper),
}).$mount('#app')
