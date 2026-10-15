<script setup lang="ts">
import type { Card } from '@/types'
import ShopButton from './ShopButton.vue'
import { useCartStore } from '@/stores/cart.ts'
import { formatPrice } from '@/utils/formatPrice.ts'

const { card } = defineProps<{
  card: Card
}>()

const cart = useCartStore()
</script>

<template>
  <article class="card">
    <img class="image" :src="card.thumbnail" :alt="card.title" />
    <div class="info">
      <div class="category">{{ card.category }}</div>
      <div class="title">{{ card.title }}</div>
      <div class="price">{{ formatPrice(card.price) }}</div>
    </div>
    <div class="actions">
      <ShopButton variant="fill" @click="cart.addItem(card)">В корзину</ShopButton>
      <ShopButton variant="outline" :to="{ name: 'product', params: { id: card.id } }">
        Подробнее
      </ShopButton>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: white;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  border-radius: 10px;
  background: #f1f5f9;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 14px 0 16px;
  flex-grow: 1;
}

.category {
  font-size: 12px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
}

.price {
  margin-top: auto;
  font-size: 20px;
  font-weight: 700;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
