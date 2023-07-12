import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/CommonMain.vue';
import Category from './../pages/Category.vue'; // 카테고리 레이어
import Display from './../pages/Display.vue'; //리스트
import About from './../pages/About.vue';
import Like from './../pages/Like.vue';
import Mypage from './../pages/Mypage.vue';
import Notice from './../pages/Notice.vue';
import Store from './../pages/Store.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/category/', component: Category },
	{ path: '/display/', component: Display },
	{ path: '/about/', component: About },
	{ path: '/like/', component: Like },
	{ path: '/mypage/', component: Mypage },
	{ path: '/notice/', component: Notice },
	{ path: '/store/', component: Store }
];

const router = createRouter({
  history: createWebHistory('/vue-2023/'),
  // history: createWebHistory(),
  routes
});

export default router;