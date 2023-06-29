<script>
export default {
  data() {
    return {
      //타이틀
      pageTitle: "Brand News",
      
      boxs: [
        {
          link: "#none1",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/news-01.png",
          alt: 'Mind Mapping',
          code: "NUVO10",
          title: "Mind Mapping",
          text: "이번 시즌 누보텐은 아이템간에 유기적인 스타일링에 집중하였습니다."
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/news-02.png",
          alt: '클래식 크롭 테일러드 자켓',
          code: "LINE",
          title: "OUR TIME",
          text: "다정한 프렌드룩으로 완성한 시간을 함께 즐겨주세요."
        },
      ],

    };
  },
};
</script>

<template>
  <section class="main-sec main-brand">
    <div class="main-title" :title="pageTitle">{{ pageTitle }}</div>
    <div class="main-news">
      <div class="news-box" v-for="(box, index) in boxs" :key="index">
        <a :href="box.link">
          <img :src="box.image" :alt="box.alt" />
          <span class="code">{{ box.code }}</span>
          <span class="title">{{ box.title }}</span>
          <span class="text">{{ box.text }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.main-news {
  padding: 0 20px;
  margin-bottom: 26px;
  .news-box {
    padding: 24px 0;
    a {
      display: block;
      img {
        width: 100%;
      }
    }
    .code {
      display: block;
      margin-top: 12px;
      font-size: 13px;
      color: #666;
    }
    .title {
      display: block;
      margin-top: 8px;
      font-size: 20px;
      font-weight: 500;
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
}
</style>
