import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'  //引入Antd
import 'ant-design-vue/dist/antd.css'    //引入Antd的样式文件

Vue.config.productionTip = false

Vue.use(Antd);  // 完整引入Antd

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
