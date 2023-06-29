<script setup>
  
</script>
<script>
  import SwiperClass, { Pagination } from 'Swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  // import swiper module styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  // more module style...

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination]
      }
    },
    
    data() {
      return {
        title: "아우터",
        items: [
          {
            link: "#none",
            image: "/vue-2023/src/assets/images/display/display-slide.png",
            alt: '이미지 설명',
            title: "KENNETH LADY",
            text: "IN CLASSIC",
            subtext: "2022 winter collection"
          },
          {
            link: "#none",
            image: "/vue-2023/src/assets/images/display/display-slide.png",
            alt: '이미지 설명',
            title: "TITLE 한줄이상 말줄임처리 됩니다. 한줄이상 말줄임처리 됩니다.",
            text: "두줄이상 말줄임처리 됩니다. 두줄이상 말줄임처리 됩니다.",
            subtext: "2022 winter collection"
          },
          {
            link: "#none",
            image: "/vue-2023/src/assets/images/display/display-slide.png",
            alt: '이미지 설명',
            title: "KENNETH LADY",
            text: "IN CLASSIC",
            subtext: "2022 winter collection"
          }
        ]
      }
    }
  }
</script>

<template>
  <section class="display-banner">
    <div class="title">{{ title }}</div>

    <div class="display-slide">
      <swiper :modules="modules" :pagination="{ clickable: true }">
        <swiper-slide v-for="(item, index) in items" :key="index">
          <a :href="item.link">
            <img :src="item.image" :alt="item.alt" />
            <span>
              <em class="slide-title">{{ item.title }}</em>
              <em class="slide-text">{{ item.text }}</em>
              <em class="slide-subtext">{{ item.subtext }}</em>
            </span>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
.display-banner {
  padding: 8px 0 60px;

  .title {
    padding: 0 20px;
    font-size: 24px;
    font-weight: 500;
  }
}

.display-slide {
  padding-top: 24px;

  .swiper-slide {
    a {
      position: relative;
      display: block;
    }

    img {
      width: 100%;
      height: 100%;
    }

    span {
      position: absolute;
      bottom: 50px;
      left: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      text-align: center;
    }

    em {
      display: block;
      color: #fff;
      word-break: keep-all;
    }

    .slide-title {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    .slide-text {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 6px;
      font-weight: 500;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .slide-subtext {
      font-size: 16px;
      line-height: 19px;
      font-weight: 300;
    }
  }

  .swiper-pagination {
    bottom: 16px !important;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: #666;
    opacity: 1;
    vertical-align: middle;
  }

  .swiper-pagination-bullet-active {
    width: 8px;
    height: 8px;
    border: 1px solid #666;
    background: #fff;
  }
}
</style>
