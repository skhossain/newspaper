import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const home = ()=> import(/* webpackChunkName: "home" */'./components/fontend/home');
const login = ()=> import(/* webpackChunkName: "login" */'./components/fontend/login');
const register = ()=> import(/* webpackChunkName: "register" */'./components/fontend/register');
const restpassword = ()=> import(/* webpackChunkName: "restpassword" */'./components/fontend/restpassword');
const passwordrestform = ()=> import(/* webpackChunkName: "passwordrestform" */'./components/fontend/passwordrestform');



const dashboard = ()=> import(/* webpackChunkName: "dashboard" */'./components/admin/dashboard');
const newpost = ()=> import(/* webpackChunkName: "newpost" */'./components/admin/post');
const category = ()=> import(/* webpackChunkName: "category" */'./components/admin/category');

const routes = [
    //Home
    {path:'/', component:home},
    {path:'/login', component:login},
    {path:'/register', component:register},
    {path:'/password/reset', component:restpassword},
    {path:'/password/reset/:token', component:passwordrestform},

    //Admin
    {path: '/admin', component:dashboard},
    {path: '/admin/category', component:category},
    {path: '/admin/newpost', component:newpost},
]

export default new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: "active",
})