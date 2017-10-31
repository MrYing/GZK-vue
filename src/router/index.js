import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    /* 首页 */
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../pages/home/'], resolve),
      alias: '/index'
    },
    /* 修改密码 */
    {
      path: '/gzkUserPassword',
      name: 'gzkUserPassword',
      component: resolve => require(['../pages/userSetPages/gzkUserPassword'], resolve),
    },
    /* 修改密码 */
    {
      path: '/gzkUserSet',
      name: 'gzkUserSet',
      component: resolve => require(['../pages/userSetPages/gzkUserSet'], resolve),
    },
    /* 物流单list */
    {
      path: '/logisticsList',
      name: 'logisticsList',
      component: resolve => require(['../pages/gzkLeftNavListPages/logisticsList'], resolve),
    },
    /*物流单详情*/
    {
      path: '/logisticsListItemInfo',
      name: 'logisticsListItemInfo',
      component: resolve => require(['../pages/logisticsPsges/logisticsListItemInfo'], resolve),
    },
    /*物流单补充img*/
    {
      path: '/logisticsPushImg',
      name: 'logisticsPushImg',
      component: resolve => require(['../pages/logisticsPsges/logisticsPushImg'], resolve),
    },
    /* 成员list */
    {
      path: '/memberSuperSUProList',
      name: 'memberSuperSUProList',
      component: resolve => require(['../pages/gzkLeftNavListPages/memberSuperSUProList'], resolve),
    },
    /* 公司list */
    {
      path: '/companySuperSuProList',
      name: 'companySuperSuProList',
      component: resolve => require(['../pages/gzkLeftNavListPages/companySuperSuProList'], resolve),
    },
    /* 个人设置list */
    {
      path: '/mySuperSuProList',
      name: 'mySuperSuProList',
      component: resolve => require(['../pages/gzkLeftNavListPages/mySuperSuProList'], resolve),
    },
    /* 登录list */
    {
      path: '/userLogin',
      name: 'userLogin',
      component: resolve => require(['../pages/loginPage/userLogin'], resolve),
    },





  ]
})
