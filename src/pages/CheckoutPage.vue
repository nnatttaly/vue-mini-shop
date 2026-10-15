<script setup lang="ts">
import { onMounted } from 'vue'
import ShopButton from '@/components/ShopButton.vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

onMounted(cart.clear)

</script>

<template>
  <div class="checkout">
    <h1 class="title">Заказ оформлен</h1>
    <p class="text">Корзина очищена, можно вернуться в каталог.</p>
    <ShopButton variant="fill" class="to-catalog" :to="{ name: 'catalog' }">В каталог</ShopButton>
  </div>
</template>

<style scoped>
.checkout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 56px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: white;
  text-align: center;
}

.title {
  font-size: 36px;
}

.text {
  font-size: 17px;
  color: #475569;
}

.to-catalog {
  padding: 0 32px;
}

@media (max-width: 768px) {
  .title {
    font-size: 28px;
  }
}
</style>
