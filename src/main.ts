import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 自定义指令 页面加载功能
Vue.directive('loading',{
  update:(el,binding)=>{
    const view: any = document.createElement('div')
    view.style.width = '100%'
    view.style.height = '100%'
    view.style.position = 'fixed'
    view.style.backgroundColor = 'blue'
    view.style.top = '0'
    view.style.left = '0'
    view.style.display = 'flex'
    view.style.justifyContent = 'center'
    view.style.alignItems = 'center'
    view.setAttribute('id','loading')
    view.innerText = '加载中...'
    if(binding.value){
      document.body.append(view)
    } else {
      const viewDom: any = document.getElementById('loading')
      viewDom && document.body.removeChild(viewDom)
    }
  }
})
