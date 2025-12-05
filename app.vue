<script setup>
import UiHeader from './components/UiHeader'
</script>

<template>
  <div class="layout">
    <UiHeader />
    <div class="main">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}
</style>
