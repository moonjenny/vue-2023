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
	{ path: '/vue-2023/', component: Home },
	{ path: '/vue-2023/category/', component: Category },
	{ path: '/vue-2023/display/', component: Display },
	{ path: '/vue-2023/about/', component: About },
	{ path: '/vue-2023/like/', component: Like },
	{ path: '/vue-2023/mypage/', component: Mypage },
	{ path: '/vue-2023/notice/', component: Notice },
	{ path: '/vue-2023/store/', component: Store }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;