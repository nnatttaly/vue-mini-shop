<script setup lang="ts">
import ShopHeader from './ShopHeader.vue';

</script>

<template>
  <ShopHeader />
  <div class="layout">
    <RouterView />
  </div>
</template>

<style scoped>
.layout {
  padding: 30px 100px;
  min-height: calc(100vh - 80px);
  background: #f8fafc;
}

@media (max-width: 768px) {
  .layout {
    padding: 20px 16px;
    min-height: calc(100vh - 64px);
  }
}
</style>
