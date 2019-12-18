import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from './routes/index'
import ViewUI from 'view-design';
	import 'view-design/dist/styles/iview.css';
	Vue.use(ViewUI);
 //技巧，用index命名的路由路径文件，上式可以简写成：import router from './routes'
new Vue({
  render: h => h(App),

  router//相当于router:router
  
}).$mount('#app')
