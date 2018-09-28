import Vue from 'vue'
import Router from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Login from '../components/login'
import index from '../views/index'
Vue.use(Router)
Vue.use(ElementUI)
export default new Router({
  routes: [ // 配置路由
    {
      path: '/',// 访问路径
      name: 'login',// 路由名称
      component: Login, // 路由需要的组件
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true
      }
    }
  ]
})
