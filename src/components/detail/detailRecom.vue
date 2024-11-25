<script setup>
import { reactive } from 'vue';
import prodType1 from '../display/displayCom/prodType01.vue';

const recom = reactive({
  recomTitle: "추천상품",
  similarTitle: "유사상품",
});
</script>

<template>
  <!-- 추천상품 -->
  <section class="detail-recom">
    <div class="title">{{ recom.recomTitle }}</div>

    <!-- 상품 리스트 -->
    <prodType1 />
  </section>

  <!-- 유사상품 -->
  <section class="detail-recom">
    <div class="title">{{ recom.similarTitle }}</div>

    <!-- 상품 리스트 -->
    <prodType1 />
  </section>
</template>


<style lang="scss"> 
  .detail {
    &-recom {
      padding: 40px 0;
      border-bottom: 1px solid #eee;
      .title {
        padding:0 20px 16px;
        font-size: 20px;
        line-height:24px;
        font-weight: 500;
      }
    }
  }

</style>