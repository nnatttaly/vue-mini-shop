import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import { useCartStore } from '@/stores/cart.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'catalog',
          meta: { section: 'catalog' },
          component: () => import('../pages/CatalogPage.vue'),
        },
        {
          path: '/product/:id',
          name: 'product',
          meta: { section: 'catalog' },
          props: true,
          component: () => import('../pages/ProductPage.vue'),
        },
        {
          path: '/cart',
          name: 'cart',
          meta: { section: 'cart' },
          component: () => import('../pages/CartPage.vue')
        },
        {
          path: '/checkout',
          name: 'checkout',
          meta: { section: 'cart' },
          beforeEnter: () => {
            const cart = useCartStore()
            if (cart.items.length === 0) {
              return { name: 'cart' }
            }
          },
          component: () => import('../pages/CheckoutPage.vue'),
        },
      ],
    },
  ],
})

export default router
