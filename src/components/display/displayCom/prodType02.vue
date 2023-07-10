<script>
export default {
  name: 'ProdType2',
  data() {
    return {
      //상품리스트 
      /* items: [
        {
          link: "#none1",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/style-01.png",
          alt: '이번 시즌 린은 특별한 날의 순간을 스케치하였습니다.',
          title: "SOMEDAY",
          text: "이번 시즌 린은 특별한 날의 순간을 스케치하였습니다.",
        }
      ], */
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="main-prod-type2">
    <a 
      v-for="(item, index) in items" 
      :key="index" 
      :href="item.link"
    >
      <img :src="item.image" :alt="item.alt" />
      <span class="title">{{ item.title }}</span>
      <span class="text">{{ item.text }}</span>
    </a>
</div>
</template>

<style lang="scss">

.main-prod-type2 {
  margin: 24px 20px 16px;

  a {
    display: block;

    img {
      width: 100%;
    }
  }

  .title {
    display: block;
    margin-top: 16px;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: #111;
  }

  .text {
    display: block;
    margin-top: 6px;
    font-size: 14px;
    color: #666;
    line-height: 20px;
  }
}
</style>
