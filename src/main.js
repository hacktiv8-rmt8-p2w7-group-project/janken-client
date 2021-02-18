import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import VueSweetalert2 from "vue-sweetalert2"
import Toasted from "vue-toasted"
import Options from "vue-toasted"

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Toasted, Options)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app")
