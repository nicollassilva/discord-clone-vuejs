import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = window.App.url

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})