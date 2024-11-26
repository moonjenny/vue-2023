<script setup>
  //상품상세
  import detailThumb from './../components/detail/detailThumb.vue'
  import buyTool from './../components/detail/buyTool.vue'
  import detailInfo from './../components/detail/detailInfo.vue'
  import detailPrice from '../components/detail/detailPrice.vue'
  import detailBenefit from '../components/detail/detailBenefit.vue'
  import detailGift from '../components/detail/detailGift.vue'
  import detailRecom from '../components/detail/detailRecom.vue'

  import detailTab from '../components/detail/detailTab.vue'
  import detailBrand from '../components/detail/detailBrand.vue'
  
</script>

<template>

  <!-- 썸네일 -->
  <detailThumb />
  <!-- 구매하기 -->
  <buyTool />
  <!-- 상세정보 -->
  <detailInfo />
  <!-- 가격정보 -->
  <detailPrice />
  <!-- 혜택 -->
  <detailBenefit />
  <!-- 사은품 -->
  <detailGift />
  <!-- 추천/유사상품 -->
  <detailRecom />
  <!-- 탭 -->
  <detailTab />
  <!-- 브랜드 -->
  <detailBrand />

</template>

<script>
export default {
  // 컴포넌트 로직
}
</script>

<style scoped>
/* 컴포넌트 스타일 */
</style>