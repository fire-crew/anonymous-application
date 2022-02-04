import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/SignIn',
		name: 'SignIn',
		component: () => import('../views/SignInView.vue'),
	},
	{
		path: '/Board',
		name: 'Board',
		component: () => import('../views/BoardView.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
