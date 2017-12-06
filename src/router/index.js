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
    /* 首次登录修改密码 */
    {
      path: '/userOnePassword',
      name: 'userOnePassword',
      component: resolve => require(['../pages/loginPage/userOnePassword'], resolve),
    },
    /* 个人设置 */
    {
      path: '/gzkUserSet',
      name: 'gzkUserSet',
      component: resolve => require(['../pages/userSetPages/gzkUserSet'], resolve),
    },
    /*GzkWll_messageInfo 消息中心*/
    {
      path: '/GzkWllMessageInfo',
      name: 'GzkWllMessageInfo',
      component: resolve => require(['../pages/userSetPages/GzkWllMessageInfo'], resolve),
    },
    /* 物流单list */
    {
      path: '/logisticsList',
      name: 'logisticsList',
      component: resolve => require(['../pages/gzkLeftNavListPages/logisticsList'], resolve),
    },
    /*newLogistics 新建物流单*/
    {
      path: '/newLogistics',
      name: 'newLogistics',
      component: resolve => require(['../pages/gzkLeftNavListPages/newLogistics'], resolve),
    },
    /*物流单详情*/
    {
      path: '/logisticsListItemInfo',
      name: 'logisticsListItemInfo',
      component: resolve => require(['../pages/gzkLeftNavListPages/logisticsListItemInfo'], resolve),
    },
    /*物流单补充img*/
    {
      path: '/logisticsPushImg',
      name: 'logisticsPushImg',
      component: resolve => require(['../pages/gzkLeftNavListPages/logisticsPushImg'], resolve),
    },
    /*logisticsPushInfoTG 补充泰国信息*/
    {
      path: '/logisticsPushInfoTG',
      name: 'logisticsPushInfoTG',
      component: resolve => require(['../pages/gzkLeftNavListPages/logisticsPushInfoTG'], resolve),
    },
    /*logisticsPushInfoYN 补充越南信息*/
    {
      path: '/logisticsPushInfoYN',
      name: 'logisticsPushInfoYN',
      component: resolve => require(['../pages/gzkLeftNavListPages/logisticsPushInfoYN'], resolve),
    },
    /* 成员list */
    {
      path: '/memberSuperSUProList',
      name: 'memberSuperSUProList',
      component: resolve => require(['../pages/memberSuperSUProList/memberSuperSUProList'], resolve),
    },
    /* 公司list */
    {
      path: '/companySuperSuProList',
      name: 'companySuperSuProList',
      component: resolve => require(['../pages/companySuperSuProList/companySuperSuProList'], resolve),
    },
    /*Add_company 添加子公司*/
    {
      path: '/Add_company',
      name: 'Add_company',
      component: resolve => require(['../pages/companySuperSuProList/Add_company'], resolve),
    },
    /*Add_company 公司详情*/
    {
      path: '/companySuperSuProListDetails',
      name: 'companySuperSuProListDetails',
      component: resolve => require(['../pages/companySuperSuProList/companySuperSuProListDetails'], resolve),
    },

    /*Add_Inp_personnel 公司详情-添加人员-手动输入*/
    {
      path: '/Add_Inp_personnel',
      name: 'Add_Inp_personnel',
      component: resolve => require(['../pages/companySuperSuProList/Add_Inp_personnel'], resolve),
    },
    /**/
    /*Add_FUSelectInpList 公司详情-添加人员-列表选择*/
    {
      path: '/Add_FUSelectInpList',
      name: 'Add_FUSelectInpList',
      component: resolve => require(['../pages/companySuperSuProList/Add_FUSelectInpList'], resolve),
    },
    /*Add_personnelList 公司详情-添加人员-人员列表*/
    {
      path: '/Add_personnelList',
      name: 'Add_personnelList',
      component: resolve => require(['../pages/companySuperSuProList/Add_personnelList'], resolve),
    },

    /*companyStaffPermission 公司人员权限*/
    {
      path: '/companyStaffPermission',
      name: 'companyStaffPermission',
      component: resolve => require(['../pages/companySuperSuProList/companyStaffPermission'], resolve),
    },

    /* 邀请他人权限 mySuperSuProList */
    {
      path: '/mySuperSuProList',
      name: 'mySuperSuProList',
      component: resolve => require(['../pages/mySuperSuProList/mySuperSuProList'], resolve),
    },
    /* 申请管理权限 mySuperSuProList */
    {
      path: '/myApplyJurisdiction',
      name: 'myApplyJurisdiction',
      component: resolve => require(['../pages/myApplyJurisdiction/myApplyJurisdiction'], resolve),
    },
  /* 公司管理权限 mySuperSuProList */
  {
    path: '/myCompanyJurisdiction',
    name: 'myCompanyJurisdiction',
    component: resolve => require(['../pages/myCompanyJurisdiction/myCompanyJurisdiction'], resolve),
  },
    /* 人员管理权限 mySuperSuProList */
    {
      path: '/myPersonnelJurisdiction',
      name: 'myPersonnelJurisdiction',
      component: resolve => require(['../pages/myPersonnelJurisdiction/myPersonnelJurisdiction'], resolve),
    },
    /* 登录list */
    {
      path: '/userLogin',
      name: 'userLogin',
      component: resolve => require(['../pages/loginPage/userLogin'], resolve),
    },





  ]
})
