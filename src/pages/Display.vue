<script setup>
//공통 헤더
import displayTags from '/src/components/display/displayCom/displayTags.vue'
import displaySwiper from '/src/components/display/displayCom/displaySwiper.vue'
import displayBrand from '/src/components/display/displayCom/displayBrand.vue'
import displayFilter from '/src/components/display/displayCom/displayFilter.vue'
import layerFilter from '/src/components/display/displayLayer/layerFilter.vue'
import displayPrdlist from '/src/components/display/displayCom/displayPrdlist.vue'
</script>

<template>
  <!-- container -->
  <div id="container" class="container">
    <displayTags />
    <displaySwiper />
    <displayBrand />
    <displayFilter />
    <layerFilter />
    <displayPrdlist />
  </div>
  <!-- //container -->
</template>

<script>
export default {
  // 컴포넌트 로직
}
</script>

<style lang="scss">
/* 컴포넌트 스타일 */

</style>