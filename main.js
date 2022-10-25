
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import  store  from  'store/index.js'
// 导入拦截器 
import {$http} from  '@escook/request-miniprogram'
// 设置基准地址 
$http.baseUrl="https://api.it120.cc/hjl/"
// 请求拦截 
$http.beforeRequest=()=>{
	uni.showLoading({
		title:"正在加载中..."
	})
}
// 响应拦截 
$http.afterRequest=()=>{
	uni.hideLoading('')
}
// 出全局 
uni.$http=$http

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif