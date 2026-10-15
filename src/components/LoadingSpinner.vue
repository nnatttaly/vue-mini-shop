<script setup lang="ts"></script>

<template>
  <div class="loader" role="status">
    <div class="spinner"></div>
    <span class="text">Загрузка…</span>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 80px 0;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.text {
  font-size: 15px;
  color: #64748b;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
