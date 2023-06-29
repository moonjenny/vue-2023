<script>
	export default {
    data() {
      return {
        title: "브랜드",
        lists: [
          {
            link: "#none",
            image: "/vue-2023/src/assets/images/display/brand-01.png",
            alt: "이미지 설명1"
          },
          {
            link: "#none",
            image: "/vue-2023/src/assets/images/display/brand-02.png",
            alt: "이미지 설명2"
          },
          {
            link: "#none",
            image: "/vue-2023/src/assets/images/display/brand-01.png",
            alt: "이미지 설명3"
          },
          {
            link: "#none",
            image: "/vue-2023/src/assets/images/display/brand-02.png",
            alt: "이미지 설명4"
          },
          {
            link: "#none",
            image: "/vue-2023/src/assets/images/display/brand-01.png",
            alt: "이미지 설명5"
          }
        ],
      }
    }
  };
</script>

<template>
  <!-- display-brand -->
  <section class="display-brand">
    <div class="title">{{ title }}</div>
    <div class="brand-list">
      <ul>
        <li v-for="(list, index) in lists" :key="index">
          <a :href="list.link">
            <img :src="list.image" :alt="list.alt" />
          </a>
        </li>
      </ul>
    </div>
  </section>
  <!-- //display-brand -->
</template>

<style lang="scss">

/* display-brand */

.display-brand {
  padding-bottom: 50px;

  .title {
    padding-left: 20px;
    font-size: 18px;
    font-weight: 500;
  }
}

.brand-list {
  padding-top: 24px;

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

    /* IE and Edge */
    scrollbar-width: none;

    /* Firefox */

    &::-webkit-scrollbar {
      display: none;

      /* Chrome, Safari, Opera*/
    }

    li {
      width: calc(50% - 8px);
      height: 75px;
      display: inline-block;
      margin-right: 8px;
      background-color: #F6F6F6;

      a {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.5);
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}
</style>
