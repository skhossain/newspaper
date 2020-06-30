import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const home = ()=> import(/* webpackChunkName: "home" */'./components/fontend/home');
const login = ()=> import(/* webpackChunkName: "login" */'./components/fontend/login');
const register = ()=> import(/* webpackChunkName: "register" */'./components/fontend/register');
const resetpassword = ()=> import(/* webpackChunkName: "resetpassword" */'./components/fontend/resetpassword');
const resetpasswordform = ()=> import(/* webpackChunkName: "newpassword" */'./components/fontend/newpassword');


const dashboard = ()=> import(/* webpackChunkName: "dashboard" */'./components/admin/dashboard');

const routes = [
    //Home
    {path:'/', component:home},
    {path:'/login', component:login},
    {path:'/register', component:register},
    {path:'/password/reset', component:resetpassword},
    {path:'/password/reset/:token', component:resetpasswordform},
    //Admin
    {path: '/admin', component:dashboard},
]

export default new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: "active",
})