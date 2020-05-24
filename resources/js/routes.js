
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const login= ()=> import(/* webpackChunkName: "login" */'./components/login');
const register= ()=> import(/* webpackChunkName: "register" */'./components/register');

const routes = [
	{path: '/login', component:login},	
	{path: '/register', component:register},	

]

export default new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: "active",
})
