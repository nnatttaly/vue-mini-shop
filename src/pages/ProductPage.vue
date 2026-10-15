<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ShopButton from '../components/ShopButton.vue'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import { getProduct } from '@/api/products.ts'
import { useAsync } from '@/composables/useAsync.ts'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import { useCartStore } from '@/stores/cart.ts'
import { formatPrice } from '@/utils/formatPrice'

const props = defineProps<{
  id: string | number
}>()


const { data: product, isLoading, isError, run } = useAsync(() => getProduct(props.id))

const cart = useCartStore()

const quantityInCart = computed(
  () => cart.items.find((el) => el.product.id === product.value?.id)?.quantity ?? 0,
)

onMounted(run)
</script>

<template>
  <ShopButton variant="outline" class="back" :to="{ name: 'catalog' }">
    <img :src="arrowLeft" alt="" width="16" height="16" />
    Назад в каталог
  </ShopButton>

  <LoadingSpinner v-if="isLoading" />
  <ErrorMessage v-else-if="isError" @retry="run" />
  <div v-else-if="product" class="product">
    <img class="image" :src="product.thumbnail" :alt="product.title" />
    <div class="info">
      <div class="category">{{ product.category }}</div>
      <h1 class="title">{{ product.title }}</h1>
      <p class="description">{{ product.description }}</p>
      <div class="price">{{ formatPrice(product.price) }}</div>
      <div class="buy-row">
        <ShopButton variant="fill" class="buy" @click="cart.addItem(product)">В корзину</ShopButton>
        <span class="in-cart">
          {{ quantityInCart > 0 ? `В корзине: ${quantityInCart} шт.` : 'Пока нет в корзине' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.product {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  margin-top: 24px;
  padding: 32px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: white;
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
  gap: 12px;
}

.category {
  font-size: 12px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.title {
  font-size: 32px;
  line-height: 1.2;
}

.description {
  font-size: 16px;
  line-height: 1.6;
  color: #475569;
}

.price {
  margin-top: 12px;
  font-size: 28px;
  font-weight: 700;
}

.buy-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.buy {
  padding: 14px 32px;
}

.in-cart {
  font-size: 15px;
  color: #64748b;
}

@media (max-width: 768px) {
  .product {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 20px;
  }

  .title {
    font-size: 24px;
  }

  .buy-row {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
}
</style>
