<script>
export default {
  data() {
    return {
      bannerLink: "javascript:;",
      imageSrc: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/main-banner-02.png",
      imageAlt: "배너 설명",
      bannerTitle: "IN CLASSIC",
      bannerText: "간결한 선, 세련된 컬러, 사려 깊은 디테일로 새롭게 재해석하였습니다."

    };
  }
};
</script>

<template>
  <section class="main-sec main-banner-big">
    <div class="main-banner-big">
      <a :href="bannerLink">
        <img :src="imageSrc" :alt="imageAlt">
        <span class="banner-info">
          <span class="title">{{ bannerTitle }}</span>
          <span class="text">{{ bannerText }}</span>
        </span>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.main-banner-big {
  margin-bottom: 60px;
  a {
    position: relative;
    display: block;
    img {
      width: 100%;
    }
  }
  .banner-info {
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  a span {
    display: block;
    color: #fff;
    text-align: center;
    &.title {
      margin-bottom: 12px;
      font-size: 24px;
      font-weight: 700;
    }
    &.text {
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
