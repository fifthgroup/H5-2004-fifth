import Vue from 'vue'
import Router from 'vue-router'
import novel from "../pages/novel"
import music from "../pages/music"
import crosstalk from "../pages/crosstalk"
import seek from "../pages/seek"
import goods from "../pages/goods"
import HomepageHl from "../pages/HomepageHl"
import ListenHl from "../pages/ListenHl"
import VideoHl from "../pages/VideoHl"
import AccountHl from "../pages/AccountHl"
import LoginHl from "../pages/LoginHl"
import tingdan from '../pages/tingdan'
import liebiao from '../pages/liebiao'
import paihangbang from '../pages/paihangbang'
import bofang from '../pages/bofang'
import zhuce from '../pages/zhuce'


Vue.use(Router)
let router = new Router({
  routes: [
 {
      path: '/',
      name: 'HomepageHl',
      component: HomepageHl
    },
    {
      path: '/l',
      name: 'ListenHl',
      component: ListenHl
    },
    {
      path: '/v',
      name: 'VideoHl',
      component: VideoHl
    },
    {
      path: '/a',
      name: 'AccountHl',
      component: AccountHl,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/Lo',
      name: 'LoginHl',
      component: LoginHl
    },
    {
      path: '/novel',
      name:"novel",
      component:novel
    }
    ,{
      path: '/music',
      name:"music",
      component:music,
      // children:[{
      //   path: '/newtatils', 
      //   name: 'newtatils', 
      //   component: resolve => require(['../pages/newtatils.vue'],resolve)
      // }
      // ]
    },
    {
      path: '/crosstalk',
      name:"crosstalk",
      component:crosstalk
    },
    
    {
      path: '/seek',
      name:"seek",
      component:seek
    }, 
    {
      path: '/goods/:name',
      name:"goods",
      component:goods
    },
 {
      path: '/1',
      name: 'tingdan',
      component: tingdan
    },
    {
      path: '/liebiao/:id',
      name: 'liebiao',
      component: liebiao
    },
    {
      path: '/0',
      name: 'paihangbang',
      component: paihangbang
    },
    {
      path: '/bofang/:id',
      name: 'bofang',
      component: bofang
    },
    {
      path: '/zhuce/:phone',
      name: 'zhuce',
      component: zhuce
    }
  ]
});

router.beforeEach((to, from, next) => { // /My
  console.log("router.beforeEach");
  // console.log("to",to);//去哪儿
  // console.log("from",from);//从哪儿来
  // next(true);//去吧

  // 如果去购物车，我的就需要判断是否登录过
  // if(to.path=="/My" || to.path=="/Shoppingcar" ){
  if (to.meta.requireAuth == true) {
    // 是否登录过
    if (localStorage.getItem("username")) {
      next(true);
    } else {
      // 跳转到登录页面时，需要把to.path传入，方便，在登陆成功时，跳到对应的页面上。
      next({ "name": "LoginHl" });
    }
  } else {
    next(true);
  }

});


export default router;