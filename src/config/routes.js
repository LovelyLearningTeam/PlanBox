// 引入子路由
import Frame from '../frame/subroute.vue'
// 引用模板
import index from '../page/index.vue'
import register from '../page/register.vue'
// 引入子页面
import userIndex from '../page/user/index.vue'
import usermy from '../page/user/my.vue'
import useradd from '../page/user/addplan.vue'
import userdata from '../page/user/mydata.vue'
import userhistory from '../page/user/history.vue'
import userchart from '../page/user/chart.vue'
// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/user',
    component: Frame,
    children: [
      {path: '/',component: userIndex},
      {path: 'my',component: usermy},
      {path: 'addplan',component: useradd},
      {path: 'mydata',component: userdata},
      {path: 'history',component: userhistory},
      {path: 'chart',component: userchart}
    ],
  },
]