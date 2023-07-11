
<script setup>
  import prodTag1 from '../../display/displayCom/prodTag01.vue';
  import prodType1 from '../../display/displayCom/prodType01.vue';

  const pageTitle = "Today's New";
  const btnText = "전체보기";
  const tags = ['#DEAR K', '#HUIT DE LYNN', '#KENNETH LADY', '#TAG', '#TAG', '#TAG', '#TAG', '#ADDITIONAL TAG'];
</script>


<template>
  <section class="main-sec main-today">
    <div class="main-title" :title="pageTitle">{{ pageTitle }}</div>

    <prodTag1 :tags="tags" />

    <prodType1 />

    <div class="btn-box">
      <a href="javascript:;" class="btn-all" :title="btnText">{{ btnText }}</a>
    </div>
  </section>
</template>



<style lang="scss">
</style>
