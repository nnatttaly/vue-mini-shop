<script setup lang="ts">
import CatalogList from '@/components/CatalogList.vue'
import { computed, onMounted, ref } from 'vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import { useAsync } from '@/composables/useAsync'
import { getProducts } from '@/api/products'
import CatalogFilters from '@/components/CatalogFilters.vue'
import { ALL_CATEGORIES } from '@/constants/filters'

const { data: cards, isLoading, isError, run } = useAsync(getProducts)

const categories = computed(
  () => new Set(cards.value ? cards.value.map((card) => card.category) : []),
)

const activeFilter = ref(ALL_CATEGORIES)
const filteredCards = computed(() => {
  const list = cards.value ?? []
  return activeFilter.value === ALL_CATEGORIES
    ? list
    : list.filter((card) => card.category === activeFilter.value)
})

function changeFilter(filter: string) {
  activeFilter.value = filter
}

onMounted(run)
</script>

<template>
  <h1 class="catalog">Каталог</h1>

  <LoadingSpinner v-if="isLoading" />
  <ErrorMessage v-else-if="isError" @retry="run" />
  <div v-else-if="cards">
    <CatalogFilters :categories :activeFilter @changeFilter="changeFilter" />
    <CatalogList :cards="filteredCards" />
  </div>
</template>

<style scoped>
.catalog {
  font-size: 45px;
}
</style>
