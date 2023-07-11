<script setup>
  //상품리스트
  import prodType2 from '../../display/displayCom/prodType02.vue'
  import prodType3 from '../../display/displayCom/prodType03.vue'
  
  const pageTitle = "Style Trend";

  const items = [{
    link: "javascript:;",
    image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/style-01.png",
    alt: '이번 시즌 린은 특별한 날의 순간을 스케치하였습니다.',
    title: "SOMEDAY",
    text: "이번 시즌 린은 특별한 날의 순간을 스케치하였습니다.",
  }];

  const items2 = [{
    link: "javascript:;",
    image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/style-02.png",
    alt: '스케치하였습니다.',
    title: "SOMEDAY SOMEDAY",
    text: "스케치하였습니다.",
  }];
  
  const items3 = [{
    link: "javascript:;",
    image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/style-03.png",
    alt: '스케치하였습니다. 스케치하였습니다',
    title: "STYLE",
    text: "스케치하였습니다. 스케치하였습니다",
  }];

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

		<prodType2 :items="items" />
		<prodType3 />
		<prodType2 :items="items2" />
		<prodType3 />
		<prodType2 :items="items3" />
		<prodType3 />

  </section>
</template>

<style lang="scss">



</style>
