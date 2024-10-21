import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/userindex/userintrodution',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'controlpd',
        component: () => import('../views/ControlProduct.vue'),
      },
    ],
  },
  {
    path: '/userindex',
    name: 'userindex',
    component: () => import('../views/UserIndex.vue'),
    children: [
      {
        path: 'userproduct',
        component: () => import('../views/UserProduct.vue'),
      },
      {
        path: 'userintrodution',
        component: () => import('../views/UserIntrodution.vue'),
      },
      {
        path: 'adminlogin',
        component: () => import('../views/AdminLogin.vue'),
      },
      {
        path: 'userproduct/:productID',
        component: () => import('../views/SingleProduct.vue'),
      },
      {
        path: 'shoppingcart',
        component: () => import('../views/ShoppingCart.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
