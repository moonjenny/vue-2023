<script setup>
//공통 헤더
import displayCategory from '/src/components/display/displayCom/displayCategory.vue'
import displayBrand from '/src/components/display/displayCom/displayBrand.vue'
import displayFilter from '/src/components/display/displayCom/displayFilter.vue'
import displayPrdlist from '/src/components/display/displayCom/displayPrdlist.vue'
</script>

<template>
  <!-- container -->
  <div id="container" class="container">
    <displayCategory />
    <displayBrand />
    <displayFilter />
    <displayPrdlist />
  </div>
  <!-- //container -->
</template>

<script>
export default {
  // 컴포넌트 로직
}
</script>

<style scoped>
/* 컴포넌트 스타일 */

</style>