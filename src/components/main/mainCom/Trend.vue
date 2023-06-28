<script>
export default {
  data() {
    return {
      //타이틀
      pageTitle: "Trending Now",

      items: [
        {
          link: "#none1",
          title: "SOMEDAY",
          description: "이번 시즌 린은 특별한 날의 순간을 스케치하였습니다.",
          imageSrc: "/src/assets/images/main/trending-01.png"
        },
        {
          link: "#none",
          title: "title",
          description: "이번 시즌 린은 특별한 날의 순간을 스케치하였습니다. 세줄 이상이면 말줄임처리 됩니다. 세줄 이상이면 말줄임처리 됩니다. 세줄 이상이면 말줄임처리 됩니다. 세줄 이상이면 말줄임처리 됩니다.",
          imageSrc: "/src/assets/images/main/trending-01.png"
        },
        {
          link: "#none",
          title: "SOMEDAY",
          description: "이번 시즌 린은 특별한 날의 순간을 스케치하였습니다.",
          imageSrc: "/src/assets/images/main/trending-01.png"
        }
      ]
    };
  },
};
</script>

<template>
    <section class="main-sec main-trend">
        <div class="main-title" :title="pageTitle">{{ pageTitle }}</div>
        <div class="main-trending">
            <ul>
                <li v-for="(item, index) in items" :key="index">
                  <a :href="item.link">
                    <img :src="item.imageSrc" :alt="item.title" />
                    <span class="tread-txtbox">
                      <span class="title">{{ item.title }}</span>
                      <span class="text">{{ item.description }}</span>
                    </span>
                  </a>
                </li>
            </ul>
        </div>
    </section>
</template>



<style lang="scss">

.main-trending {
  padding: 16px 0 0;
  margin-bottom:60px;

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
        width: 100%;
        height: 100%;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 124px;
          background: rgba(0, 0, 0, 0.2);
          background: linear-gradient(360deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
        }

        span {
          color: #fff;
        }
      }
    }
  }

  .tread-txtbox {
    white-space: initial;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 22px 24px;
    box-sizing: border-box;
  }

  ul li {
    a span {
      &.title {
        display: block;
        margin-bottom: 6px;
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
      }

      &.text {
        display: block;
        font-size: 14px;
        line-height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }

    img {
      width: 100%;
    }
  }
}

</style>
