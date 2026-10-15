<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

export type ButtonVariant = 'fill' | 'outline' | 'text'

defineProps<{
  variant: ButtonVariant
  active?: boolean
  to?: RouteLocationRaw
}>()
</script>

<template>
  <RouterLink v-if="to" :to class="btn" :class="variant" :aria-current="active ? 'page' : undefined">
    <slot />
  </RouterLink>
  <button v-else class="btn" :class="variant" :aria-pressed="active || undefined"><slot /></button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 44px;
  font-size: 15px;
  font-weight: 600;
  padding: 0 14px;
  border-radius: 10px;
  border: none;
  color: #0f172a;
  text-decoration: none;
  cursor: pointer;
}

.fill {
  background: #2563eb;
  color: white;
  border: 1px solid #1e40af;
}

.fill:hover:not(:disabled, [aria-disabled="true"]) {
  background: #1d4ed8;
}

.fill:is(:active, [aria-pressed="true"], [aria-current="page"]):not(:disabled, [aria-disabled="true"]) {
  background: #1e40af;
}

.outline {
  background: white;
  border: 1px solid #8b919c;
}

.outline:hover:not(:disabled, [aria-disabled="true"]) {
  background: #f1f5f9;
}
.outline:is(:active, [aria-pressed="true"], [aria-current="page"]):not(:disabled, [aria-disabled="true"]) {
  background: #e2e8f0;
}

.text {
  background: transparent;
  font-weight: 500;
  border: 2px solid transparent
}

.text:is(:active, [aria-pressed="true"], [aria-current="page"]):not(:disabled, [aria-disabled="true"]) {
  background: rgba(37, 99, 235, 0.1);
  border-color: #2563eb;
}
</style>
