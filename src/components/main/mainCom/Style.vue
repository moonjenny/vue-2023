<script setup>
  //상품리스트
  import prodType2 from '../../display/displayCom/prodType02.vue'
  import prodType3 from '../../display/displayCom/prodType03.vue'
</script>

<script>
export default {
  data() {
    return {
      //타이틀
      pageTitle: "Style Trend",

    };
  },
};
</script>

<template>
  <section class="main-sec main-style">
    <div class="main-title" :title="pageTitle">{{ pageTitle }}</div>

		<prodType2 />
		<prodType3 />
		<prodType2 />
		<prodType3 />
		<prodType2 />
		<prodType3 />

  </section>
</template>

<style lang="scss">



</style>
