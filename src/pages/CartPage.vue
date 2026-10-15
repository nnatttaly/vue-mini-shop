<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import CartItemRow from '@/components/CartItemRow.vue'
import CartSummary from '@/components/CartSummary.vue'
import { useRouter } from 'vue-router'

const cart = useCartStore()

const router = useRouter()

function checkout() {
  router.push({ name: 'checkout' })
}
</script>

<template>
  <h1 class="page-title">Корзина</h1>

  <p v-if="cart.items.length === 0" class="empty">В корзине пока ничего нет</p>

  <div v-else class="cart">
    <ul class="list">
      <CartItemRow
        v-for="item in cart.items"
        :key="item.product.id"
        :item
        @increase="cart.addItem(item.product)"
        @decrease="cart.decreaseItem(item.product)"
        @remove="cart.deleteItem(item.product)"
      />
    </ul>

    <CartSummary
      :count="cart.totalCount"
      :total="cart.totalPrice"
      @clear="cart.clear"
      @checkout="checkout"
    />
  </div>
</template>

<style scoped>
.page-title {
  font-size: 45px;
  margin-bottom: 32px;
}

.empty {
  font-size: 18px;
  color: #64748b;
}

.cart {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 28px;
  align-items: start;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
}

@media (max-width: 900px) {
  .cart {
    grid-template-columns: 1fr;
  }
}
</style>
