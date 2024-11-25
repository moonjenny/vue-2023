<script setup>
  import { useRoute } from 'vue-router'
  import FooterMenu from './footer/Footer.vue'
  import ActionMenu from './footer/Action.vue'
  import TopMenu from './footer/Top.vue'
  
  // 현재 경로를 가져옴
  const route = useRoute()
</script>

<template>
  <FooterMenu />

  <!-- ActionMenu는 상품상세는 제외함 -->
  <ActionMenu v-if="route.path !== '/vue-2023/detail/'" />
  <!-- Top은 상품상세만 노출 -->
  <TopMenu v-if="route.path == '/vue-2023/detail/'" />
</template>


<style scoped>

</style>
