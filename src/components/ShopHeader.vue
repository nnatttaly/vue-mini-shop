<script setup lang="ts">
import { useRoute } from 'vue-router';
import ShopButton from './ShopButton.vue'
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart.ts';

const route = useRoute()

const section = computed(() => route.meta.section)

const cart = useCartStore()
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'catalog' }" class="brand">Магазин</RouterLink>
    <nav class="right-part">
      <ShopButton variant="text" :to="{ name: 'catalog' }" :active="section === 'catalog'">
        Каталог
      </ShopButton>
      <ShopButton variant="text" :to="{ name: 'cart' }" :active="section === 'cart'">
        Корзина <span class="badge">{{ cart.totalCount }}</span>
      </ShopButton>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 80px;
  background: white;
}

.brand {
  font-size: 28px;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
}

.right-part {
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 11px;
  background: #2563eb;
  color: white;
  font-size: 13px;
  font-weight: 600;
  line-height: 1;
}

@media (max-width: 768px) {
  header {
    padding: 0 16px;
    height: 64px;
  }

  .brand {
    font-size: 20px;
  }

  .right-part {
    gap: 4px;
  }
}
</style>
