import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/CommonMain.vue';
import Category from './../pages/Category.vue'; // 카테고리 레이어
import Display from './../pages/Display.vue'; //리스트
import About from './../pages/About.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/category', component: Category },
	{ path: '/display', component: Display },
	{ path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;