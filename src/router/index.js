import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "menu" */ '@/views/menu.vue')
  },
  {
    path: '/contactanos',
    name: 'contactanos',
    component: () => import(/* webpackChunkName: "contact" */ '@/components/contactanos.vue')
  },
  {
    path: '/beneficiarios',
    name: 'beneficiarios',
    component: () => import(/* webpackChunkName: "benefisarie" */ '@/views/beneficiarios.vue')
  },
  {
    path: '/rubros',
    name: 'rubros',
    component: () => import(/* webpackChunkName: "rubros" */ '@/views/rubros.vue')
  },
  {
    path: '/gastos',
    name: 'gastos',
    component: () => import(/* webpackChunkName: "gasto" */ '@/views/gastos.vue')
  },
  {
    path: '/ingresos',
    name: 'ingresos',
    component: () => import(/* webpackChunkName: "amount" */ '@/views/ingresos.vue')
  },
  {
    path: '/personas',
    name: 'personas',
    component: () => import(/* webpackChunkName: "peoples" */ '@/views/personas.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import(/* webpackChunkName: "user" */ '@/views/usuarios.vue')
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/contactos.vue')
  },
  {
    path: '/quienSomos',
    name: 'quienSomos',
    component: () => import(/* webpackChunkName: "about" */ '@/components/quienSomos.vue')
  },
  {
    path: '/servicio',
    name: 'servicio',
    component: () => import(/* webpackChunkName: "service" */ '@/components/servicio.vue')
  },
  {
    path: '/servicioAtencion',
    name: 'servicioAtencion',
    component: () => import(/* webpackChunkName: "services" */ '@/components/servicioAtencion.vue')
  },
  {
    path: '/servicioFormacion',
    name: 'servicioFormacion',
    component: () => import(/* webpackChunkName: "service-formation" */ '@/components/servicioFormacion.vue')
  },
  {
    path: '/informeIngresos',
    name: 'informeIngresos',
    component: () => import(/* webpackChunkName: "about-ingreso" */ '@/views/informeIngresos.vue')
  },
  {
    path: '/informeGastos',
    name: 'informeGastos',
    component: () => import(/* webpackChunkName: "about-gasto" */ '@/views/informeGastos.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next)=>{
  if (! store.state.token && to.path =='/login' || to.path =='/servicio' || to.path =='/servicioAtencion' || to.path =='/servicioFormacion' || to.path =='/quienSomos' || to.path =='/contactanos'){
    next()
  }else if (! store.state.token && to.path !='/' ){

    next({name:'Home'})

  }else{
    next()
  }
})

export default router
