<script setup lang="ts">
import type { Card } from '@/types'
import CatalogCard from './CatalogCard.vue'

defineProps<{
  cards: Card[]
}>()
</script>

<template>
  <div class="catalog-list">
    <CatalogCard v-for="card in cards" :key="card.id" :card />
  </div>
</template>

<style scoped>
.catalog-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 32px;
}
</style>
