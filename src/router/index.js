import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/bigdatashow',
    name: 'bigdatashow',
    meta:{
      title:"智慧鱼塘大屏"
    },
    component: () => import("../views/IotPlatfrom/bigdatashow/bigdatashow")
  },
  {
    path:'/',
    redirect:"/Login"
  },
  {
    path: '/Login',
    name: 'Login',
    meta:{
      title:"登录"
    },
    component: () => import("../views/IotPlatfrom/Login/login")
  },
  {
    path: '/IotPlatfrom',
    name: 'IotPlatfrom',
    meta:{
      title:"物联网平台"
    },
    redirect:'/IotPlatfrom/Analysis',
    component: () => import( '../views/IotPlatfrom/IotPlatfrom.vue'),
    children:[
      {
        path: 'Analysis',
        name: 'Analysis',
        meta:{
          title:"统计分析"
        },
        component: () => import("../views/IotPlatfrom/Analysis/Analysis.vue")
      },
      {
       path: 'Buding',
       name: 'Buding',
       meta:{
         title:"智慧农场"
       },
       component: () => import("../views/IotPlatfrom/Buding.vue")
      },
      {
        path: 'product_data',
        name: 'product_data',
        meta:{
          title:"配置接收协议"
        },
        component: () => import("../views/IotPlatfrom/product_data/product_data.vue")
       },
      /*{
        path: 'computeroom',
        name: 'computeroom',
        meta:{
          title:"机房"
        },
        component: () => import("../views/IotPlatfrom/ComputeRoom/ComputeRoom.vue")
      },*/
      // {
      //   path: 'Performance',
      //   name: 'Performance',
      //   meta:{
      //     title:"性能监控"
      //   },
      //   component: () => import("../views/IotPlatfrom/Performance/Performance.vue")
      // },
      {
        path: 'tentsensor',
        name: 'tentsensor',
        meta:{
          title:"帐篷传感器"
        },
        component: () => import("../views/IotPlatfrom/Tentsensor.vue")
      },
      // {
      //   path: 'TentMonitor',
      //   name: 'TentMonitor',
      //   meta:{
      //     title:"帐篷监控"
      //   },
      //   component: () => import("../views/IotPlatfrom/TentMonitor.vue")
      // },
      // {
      //   path: 'BigScreen',
      //   name: 'BigScreen',
      //   meta:{
      //     title:"大屏展示"
      //   },
      //   component: () => import("../views/IotPlatfrom/BigScreen/BigScreen.vue")
      // },
      /*{
        path: 'Live',
        name: 'Live',
        meta:{
          title:"现场情况"
        },
        component: () => import("../views/IotPlatfrom/Live/Live.vue")
      },*/
      // {
      //   path: '3Dscatter',
      //   name: '3Dscatter',
      //   meta:{
      //     title:"3D散点图"
      //   },
      //   component: () => import("../views/IotPlatfrom/3Dscatter/scatter3D.vue")
      // },
      // {
      //   path: 'websocket',
      //   name: 'websocket',
      //   meta:{
      //     title:"websocket传输图片"
      //   },
      //   component: () => import("../views/IotPlatfrom/TentMonitor.vue")
      // },
      {
        path: 'DeviceStatus',
        name: 'DeviceStatus',
        meta:{
          title:"设备状态"
        },
        component: () => import("../views/IotPlatfrom/DeviceManage/DeviceStatus/DeviceStatus.vue")
      },
      {
        path: 'DeviceWaning',
        name: 'DeviceWaning',
        meta:{
          title:"设备报警"
        },
        component: () => import("../views/IotPlatfrom/DeviceManage/DeviceWaning/DeviceWaning.vue")
      },


      {
        path: 'pro_ctrl_status',
        name: 'pro_ctrl_status',
        meta:{
          title:"产品控制"
        },
        component: () => import("../views/IotPlatfrom/pro_ctrl_Status/pro_ctrl_status.vue")
      },
      {
        path: 'pro_model',
        name: 'pro_model',
        meta:{
          title:"物模型"
        },
        component: () => import("../views/IotPlatfrom/pro_model/pro_model.vue")
      },
      {
        path: 'Showdata',
        name: 'Showdata',
        meta:{
          title:"数据展示"
        },
        component: () => import("../views/IotPlatfrom/Showdata/showdata.vue")
      },
      {
        path: 'pro_behave',
        name: 'pro_behave',
        meta:{
          title:"产品行为控制"
        },
        component: () => import("../views/IotPlatfrom/pro_behave/pro_behave.vue")
      },
      {
        path: 'pro_readdata',
        name: 'pro_readdata',
        meta:{
          title:"产品数据读取"
        },
        component: () => import("../views/IotPlatfrom/pro_status/pro_status.vue")
      },
      {
        path: 'pro_status',
        name: 'pro_status',
        meta:{
          title:"产品配置"
        },
        component: () => import("../views/IotPlatfrom/pro_status/pro_status.vue")
      },
      
      /*{
        path: 'DeviceSimulator',
        name: 'DeviceSimulator',
        meta:{
          title:"设备模拟器"
        },
        component: () => import("../views/IotPlatfrom/DeviceManage/DeviceSimulator/DeviceSimulator.vue")
      },*/
      {
        path: 'RulesInstance',
        name: 'RulesInstance',
        meta:{
          title:"规则实例"
        },
        component: () => import("../views/IotPlatfrom/RuleEngine/RulesInstance.vue")
      },
      {
        path: 'Basiconfig',
        name: 'Basiconfig',
        meta:{
          title:"基本配置"
        },
        component: () => import("../views/IotPlatfrom/Monitor/Basiconfig.vue")
      },
      {
        path: 'VideoDevices',
        name: 'VideoDevices',
        meta:{
          title:"视频设备"
        },
        component: () => import("../views/IotPlatfrom/Monitor/VideoDevices.vue")
      },
      {
        path: 'Splitscreen',
        name: 'Splitscreen',
        meta:{
          title:"分屏展示"
        },
        component: () => import("../views/IotPlatfrom/Monitor/Splitscreen.vue")
      },
  
      {
        path: '/IotPlatfrom/test3',
        name: 'test3',
        meta:{
          title:"测试"
        },
        component: () => import("../views/test3.vue")
      },
 
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/Home'||to.path ==='/Login') {
    next();
  } else if(to.path === '/logout'){
   localStorage.setItem('Authorization','')
   next('/Login');
  }else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/Login');
    } else {
      next();
    }
  }
});

export default router
