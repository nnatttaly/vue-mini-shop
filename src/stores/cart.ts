import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Card, CartItem } from '@/types'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const totalCount = computed(() => items.value.reduce((sum, el) => sum + el.quantity, 0))
  const totalPrice = computed(() =>
    items.value.reduce((sum, el) => sum + el.quantity * el.product.price, 0),
  )

  function addItem(item: Card) {
    const idx = items.value.findIndex((el) => el.product.id === item.id)
    if (idx === -1) {
      items.value.push({ product: item, quantity: 1 })
    } else {
      items.value[idx]!.quantity += 1
    }
  }

  function deleteItem(item: Card) {
    items.value = items.value.filter((el) => el.product.id !== item.id)
  }

  function decreaseItem(item: Card) {
    const foundItem = items.value.find((el) => el.product.id === item.id)
    if (!foundItem) return
    if (foundItem.quantity === 1) {
      deleteItem(item)
    } else {
      foundItem.quantity--
    }
  }

  function clear() {
    items.value = []
  }

  return { items, totalCount, totalPrice, addItem, deleteItem, decreaseItem, clear }
})
