<script setup lang="ts">
import type { CartItem } from '@/types'
import ShopButton from './ShopButton.vue'
import trashIcon from '@/assets/icons/trash.svg'
import { formatPrice } from '@/utils/formatPrice'

defineProps<{
  item: CartItem
}>()

const emit = defineEmits<{
  increase: []
  decrease: []
  remove: []
}>()
</script>

<template>
  <li class="item">
    <img class="thumb" :src="item.product.thumbnail" :alt="item.product.title" />

    <div class="info">
      <div class="title">{{ item.product.title }}</div>
      <div class="unit-price">{{ formatPrice(item.product.price) }} за шт.</div>
    </div>

    <div class="quantity">
      <ShopButton variant="outline" class="qty-btn" aria-label="Уменьшить" @click="emit('decrease')">−</ShopButton>
      <span class="qty-value">{{ item.quantity }}</span>
      <ShopButton variant="outline" class="qty-btn" aria-label="Увеличить" @click="emit('increase')">+</ShopButton>
    </div>

    <div class="line-total">{{ formatPrice(item.product.price * item.quantity) }}</div>

    <ShopButton variant="text" class="remove" aria-label="Удалить из корзины" @click="emit('remove')">
      <img :src="trashIcon" alt="" width="20" height="20" />
    </ShopButton>
  </li>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 14px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: white;
}

.thumb {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  object-fit: contain;
  border-radius: 10px;
  background: #f1f5f9;
}

.info {
  flex-grow: 1;
  min-width: 0;
}

.title {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 6px;
}

.unit-price {
  font-size: 14px;
  color: #64748b;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 12px;
}

.qty-btn {
  width: 44px;
  padding: 0;
  font-size: 18px;
}

.qty-value {
  min-width: 20px;
  text-align: center;
  font-weight: 600;
}

.line-total {
  width: 110px;
  text-align: right;
  font-size: 17px;
  font-weight: 700;
}

.remove {
  width: 44px;
  padding: 0;
}

@media (max-width: 900px) {
  .item {
    flex-wrap: wrap;
  }

  .info {
    flex-basis: calc(100% - 92px);
  }
}
</style>
