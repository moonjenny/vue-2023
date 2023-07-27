
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/scripts/router'; // 라우터 설정 파일
import store from '@/scripts/store'
//mport vuetify from './plugins/vuetify'

//import './assets/css/main.css'
import './assets/scss/common.scss'

createApp(App)
  .use(router) // 라우터 등록
  .use(store)
  //.use(vuetify)
  .mount('#app');


// app.config.globalProperties.$store = stores; // [store / 저장소]