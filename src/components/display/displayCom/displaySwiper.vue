<script setup>
  
</script>
<script>
  // import Swiper core and required modules
  import SwiperCore, { Pagination, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/swiper-bundle.css'

  // install Swiper modules
  SwiperCore.use([Pagination, A11y]);

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
		},
    setup() {
      return {
        title: "아우터",
        items: [
          {
            link: "javascript:;",
            image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/display/display-slide.png",
            alt: '이미지 설명',
            title: "KENNETH LADY",
            text: "IN CLASSIC",
            subtext: "2022 winter collection"
          },
          {
            link: "javascript:;",
            image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/display/display-slide.png",
            alt: '이미지 설명',
            title: "TITLE 한줄이상 말줄임처리 됩니다. 한줄이상 말줄임처리 됩니다.",
            text: "두줄이상 말줄임처리 됩니다. 두줄이상 말줄임처리 됩니다.",
            subtext: "2022 winter collection"
          },
          {
            link: "javascript:;",
            image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/display/display-slide.png",
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
      <swiper
				:slides-per-view="1"
				:space-between="0"
				:pagination="{ clickable: true }"
        :loop="true"
				@swiper="onSwiper"
				@slideChange="onSlideChange"
			>
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
  margin: 8px 0 60px;

  .title {
    padding: 0 20px;
    font-size: 24px;
    font-weight: 500;
  }
}

.display-slide {
  padding-top: 24px;
  overflow:hidden;

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
