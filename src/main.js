import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true


// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'
// 引用API文件
import api from './config/api'
// 将API方法绑定到全局
Vue.prototype.$api = api

// 使用配置文件规则
const router = new VueRouter({
	// mode: 'history', 打包报错
	history: false,
	routes
})
// 跑起来吧
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
  
})