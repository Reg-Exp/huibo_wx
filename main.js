import Vue from 'vue'
import App from './App'
import http from '@/common/js/http.js'
import tokens from '@/common/js/store.js'
import  {baseUrl} from '@/common/js/config.js'
import utils from "./common/js/utils";

Vue.config.productionTip = false
Vue.prototype.$utils = utils
Vue.prototype.$tokens = utils.getStorageSync('token')?utils.getStorageSync('token'):'';
Vue.prototype.$http = http
http.config.baseUrl = baseUrl



App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
