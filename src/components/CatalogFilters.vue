<script setup lang="ts">
import { ALL_CATEGORIES } from '@/constants/filters'

defineProps<{
  categories: Set<string>
  activeFilter: string
}>()

defineEmits<{
  changeFilter: [filter: string]
}>()
</script>

<template>
  <div class="filters">
    <button
      class="chip"
      :aria-pressed="activeFilter === ALL_CATEGORIES"
      @click="$emit('changeFilter', ALL_CATEGORIES)"
    >
      {{ ALL_CATEGORIES }}
    </button>
    <button
      v-for="category in categories"
      :key="category"
      class="chip"
      :aria-pressed="category === activeFilter"
      @click="$emit('changeFilter', category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.chip {
  height: 44px;
  padding: 0 20px;
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  background: white;
  color: #0f172a;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.15s,
    border-color 0.15s;
}

.chip:hover:not([aria-pressed='true']) {
  background: #f1f5f9;
}

.chip[aria-pressed='true'] {
  background: #2563eb;
  border-color: #2563eb;
  color: white;
  font-weight: 600;
}
</style>
