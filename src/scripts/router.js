import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/CommonMain.vue';
import Category from './../pages/Category.vue'; // 카테고리 레이어
import Display from './../pages/Display.vue'; //리스트
import About from './../pages/About.vue';

const routes = [
	{ path: '/vue-2023/', component: Home },
	{ path: '/vue-2023/category', component: Category },
	{ path: '/vue-2023/display', component: Display },
	{ path: '/vue-2023/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;