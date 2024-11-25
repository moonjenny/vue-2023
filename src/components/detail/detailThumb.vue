<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/swiper-bundle.css'

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        activeSlide: 0, // 현재 활성화된 슬라이드 인덱스
      }
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        // console.log('slide change');
      },
      showSlide(index) {
        this.activeSlide = index; // 클릭된 버튼의 인덱스로 활성화된 슬라이드를 설정
      },
		},
  	setup() {
      return {
        items1: [
          {
            image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/news-01.png',
            alt: '이미지 설명',
          },
          {
            image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/news-02.png',
            alt: '이미지 설명',
          }
        ],
        items2: [
          {
            image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/style-01.png',
            alt: '이미지 설명',
          },
          {
            image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/style-02.png',
            alt: '이미지 설명',
          },
          {
            image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/style-03.png',
            alt: '이미지 설명',
          },
        ],
        buttons: [
          { label: '베이지', colorClass: 'color-beige', index: 0 },
          { label: '블랙', colorClass: 'color-black', index: 1 },
        ],
      };
  	},
  };
</script>

<template>
  <section class="detail-kv">
    <div class="detail-slide" v-show="activeSlide === 0">
      <swiper
        :slides-per-view="1"
        :pagination="{ clickable: false }"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in items1" :key="index">
          <img :src="item.image" :alt="item.alt" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="detail-slide" v-show="activeSlide === 1">
      <swiper
        :slides-per-view="1"
        :pagination="{ clickable: false }"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in items2" :key="index">
          <img :src="item.image" :alt="item.alt" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="detail-chips">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        type="button"
        :class="{ selected: activeSlide === button.index }"
        @click="showSlide(button.index)"
      >
        <span :class="button.colorClass">{{ button.label }}</span>
      </button>
    </div>
  </section>
</template>

<style lang="scss"> 
.detail-slide {
  overflow:hidden;
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .swiper-pagination {
    bottom: 16px !important;

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
}

.detail-chips {
  padding: 16px 20px 24px;
  button {
    margin-right: 12px;
    width: 48px;
    height: 48px;
    outline: none;
    border: 1px solid #eee;
    border-radius: 48px;
    span {
      display: block;
      font-size: 0;
      color: #fff;
      width: 46px;
      height: 46px;
      border: 4px solid #fff;
      border-radius: 46px;
    }
    .color-black {
      background-color:black;
    }
    .color-beige {
      background-color:#E9D8BA;
    }
  }
  .selected {
    border-color: black;
  }
}
</style>