import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/CommonMain.vue';
import Category from './../pages/Category.vue'; // 카테고리 레이어
import Display from './../pages/Display.vue'; //리스트
import About from './../pages/About.vue';
import Like from './../pages/Like.vue';
import Mypage from './../pages/Mypage.vue';
import Notice from './../pages/Notice.vue';
import Store from './../pages/Store.vue';
import Login from './../pages/Login.vue';
import Point from './../pages/mypage/Point.vue';

const routes = [
  { path: '/vue-2023/', component: Home },
  { path: '/vue-2023/category/', component: Category },
  { path: '/vue-2023/display/', component: Display },
  { path: '/vue-2023/about/', component: About },
  { path: '/vue-2023/like/', component: Like },
  { path: '/vue-2023/mypage/', component: Mypage },
  { path: '/vue-2023/mypage/point/', component: Point },
  { path: '/vue-2023/notice/', component: Notice },
  { path: '/vue-2023/store/', component: Store },
  { path: '/vue-2023/login/', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  //스크롤 탑 추가
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});


export default router;