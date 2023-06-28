<script setup>
  //상품리스트
  import prodType1 from '../../display/displayCom/prodType01.vue'
</script>

<script>
export default {
  data() {
    return {
      //타이틀
      pageTitle: "Best Item",
      //버튼
      btnText: "전체보기"
    };
  },
};
</script>

<template>
  <section class="main-sec main-best">
    <div class="main-title" :title="pageTitle">{{ pageTitle }}</div>
    <prodType1 />
    <div class="btn-box">
      <a href="#none" class="btn-all" :title="btnText">{{ btnText }}</a>
    </div>
  </section>
</template>

<style lang="scss">
.main-best .main-prod-type1 {
  padding-top: 16px;
}
</style>
