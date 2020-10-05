import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GetEmployee from '../views/GetEmployee';
import CreateEmployee from '../views/CreateEmployee';
import UpdateEmployee from '../views/UpdateEmployee';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/emp',
    name: 'GetEmployeee',
    component: GetEmployee
  },
  {
    path: '/updateEmp',
    name: 'UpdateEmployee',
    component: UpdateEmployee
  },
  {
    path: '/setEmp',
    name: 'CreateEmployee',
    component: CreateEmployee
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
