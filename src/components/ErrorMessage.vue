<script setup lang="ts">
import ShopButton from './ShopButton.vue'

defineProps<{
  message?: string
}>()

const emit = defineEmits<{
  retry: []
}>()
</script>

<template>
  <div class="error" role="alert">
    <div class="icon">!</div>
    <div class="title">Что-то пошло не так</div>
    <div class="message">{{ message ?? 'Не удалось загрузить данные. Попробуйте ещё раз.' }}</div>
    <ShopButton variant="outline" @click="emit('retry')">Попробовать снова</ShopButton>
  </div>
</template>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 60px 24px;
  text-align: center;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 6px;
  border-radius: 50%;
  background: #fee2e2;
  color: #dc2626;
  font-size: 24px;
  font-weight: 700;
}

.title {
  font-size: 18px;
  font-weight: 600;
}

.message {
  max-width: 360px;
  margin-bottom: 10px;
  font-size: 15px;
  color: #64748b;
}
</style>
