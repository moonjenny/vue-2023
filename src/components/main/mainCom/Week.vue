<script>
export default {
  data() {
    return {
      //타이틀
      pageTitle: "This Week",
      
      items: [
        {
          link: "#none1",
          image: "/vue-2023/src/assets/images/main/week-01.png",
          alt: '클래식룩',
          title: "클래식룩",
          text: "클래식룩을 추천드립니다. 클래식룩을 추천드립니다. 클래식룩을 추천드립니다. 클래식룩을 추천드립니다."
        },
        {
          link: "#none",
          image: "/vue-2023/src/assets/images/main/week-01.png",
          alt: '클래식룩',
          title: "클래식룩",
          text: "클래식룩을 추천드립니다. 두줄 이상이면 말줄임처리 됩니다. 두줄 이상이면 말줄임처리 됩니다. 두줄 이상이면 말줄임처리 됩니다. 두줄 이상이면 말줄임처리 됩니다."
        },
        {
          link: "#none",
          image: "/vue-2023/src/assets/images/main/week-01.png",
          alt: '클래식룩',
          title: "클래식룩",
          text: "클래식룩을 추천드립니다."
        },
      ]
    };
  },
};
</script>

<template>
  <section class="main-sec main-week">
    <div class="main-title" :title="pageTitle">{{ pageTitle }}</div>
      <div class="week-list">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <a :href="item.link">
              <img :src="item.image" :alt="item.alt" />
              <span class="week-info">
                <span class="title">{{ item.title }}</span>
                <span class="text">{{ item.text }}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
  </section>
</template>



<style lang="scss">
.week-list {
  padding: 12px 0 60px;

  ul {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    font-size: 0;
    padding-left: 20px;
    padding-right: 12px;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;

      /* Chrome, Safari, Opera*/
    }

    li {
      display: inline-block;
      width: calc(100% - 8px);
      margin-right: 8px;

      a {
        position: relative;
        display: block;

        img {
          width: 100%;
        }
      }
    }
  }

  .week-info {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 24px;
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);

    .title {
      display: block;
      font-size: 24px;
      font-weight: 500;
      color: #fff;
    }

    .text {
      white-space: initial;
      display: block;
      padding-top: 6px;
      font-size: 14px;
      line-height: 20px;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

</style>
