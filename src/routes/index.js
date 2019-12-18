import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
      {
        /*  ./与@/的区别
        ./是相同目录下的不同路径访问
        @/是src目录下的路径
        */
       //路由懒加载：更高效
        path:"/",
        component:()=>import ('@/view/home.vue'),
        /*嵌套路由 */
        children:[
          {
            path:"weblist",
            /*  ./与@/的区别
            ./是相同目录下的不同路径访问
            @/是src目录下的路径
            */
           //路由懒加载：更高效
            component:()=>import ('@/view/weblist.vue')
            
          },
        ]
      },
      {
        /*  ./与@/的区别
        ./是相同目录下的不同路径访问
        @/是src目录下的路径
        */
       //路由懒加载：更高效
        path:"/login",
        component:()=>import ('@/view/login.vue'),
      },
      {
        /*  ./与@/的区别
        ./是相同目录下的不同路径访问
        @/是src目录下的路径
        */
       //路由懒加载：更高效
        path:"/",
        component:()=>import ('@/view/home.vue'),
        /*嵌套路由 */
        children:[
          {
            path:"orderlist",
            /*  ./与@/的区别
            ./是相同目录下的不同路径访问
            @/是src目录下的路径
            */
           //路由懒加载：更高效
            component:()=>import ('@/view/orderlist.vue')
            
          },
          {
            path:"ordertrace",
            /*  ./与@/的区别
            ./是相同目录下的不同路径访问
            @/是src目录下的路径
            */
           //路由懒加载：更高效
            component:()=>import ('@/view/ordertrace.vue')
            
          },
          {
            path:"user_comment",
            /*  ./与@/的区别
            ./是相同目录下的不同路径访问
            @/是src目录下的路径
            */
           //路由懒加载：更高效
            component:()=>import ('@/view/user_comment.vue')
            
          },
          {
            path:"userlist",
            /*  ./与@/的区别
            ./是相同目录下的不同路径访问
            @/是src目录下的路径
            */
           //路由懒加载：更高效
            component:()=>import ('@/view/userlist.vue')
            
          },
        ]
      }
    ]
   }) 