<script setup lang="ts">
import ShopButton from './ShopButton.vue'
import { formatPrice } from '@/utils/formatPrice'

defineProps<{
  count: number
  total: number
}>()

const emit = defineEmits<{
  checkout: []
  clear: []
}>()
</script>

<template>
  <aside class="summary">
    <h2 class="summary-title">Итого</h2>
    <div class="summary-row">
      <span>Товаров</span>
      <span>{{ count }}</span>
    </div>
    <div class="summary-total">
      <span>К оплате</span>
      <span>{{ formatPrice(total) }}</span>
    </div>
    <ShopButton variant="fill" class="summary-btn" @click="emit('checkout')">Оформить заказ</ShopButton>
    <ShopButton variant="outline" class="summary-btn" @click="emit('clear')">Очистить корзину</ShopButton>
  </aside>
</template>

<style scoped>
.summary {
  position: sticky;
  top: 110px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 22px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: white;
}

.summary-title {
  font-size: 20px;
}

.summary-row,
.summary-total {
  display: flex;
  justify-content: space-between;
}

.summary-row {
  font-size: 15px;
  color: #475569;
}

.summary-total {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 4px;
}

.summary-btn {
  width: 100%;
}

@media (max-width: 900px) {
  .summary {
    position: static;
  }
}
</style>
