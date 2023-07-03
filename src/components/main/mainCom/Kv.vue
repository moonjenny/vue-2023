<script setup>
  
</script>
<script>
	import { ref, onMounted } from 'vue';
	import Swiper from 'swiper';

  // import swiper module styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/swiper-bundle.css'
  // more module style...

  export default {
  setup() {
		const mainSwiper = ref(null);

    onMounted(() => {
      mainSwiper.value = new Swiper('.main-slide .swiper-container', {
        slidesPerView: 'auto',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    });

    return {
      mainSwiper,
      items: [
        {
          link: '#none',
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/KV.png',
          alt: '이미지 설명',
          title: 'TWEED COLLECTION',
          text: '가을무드 가득 트위드',
        },
        {
          link: '#none',
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/KV.png',
          alt: '이미지 설명',
          title: 'TITLE 한줄이상 말줄임처리 됩니다. 한줄이상 말줄임처리 됩니다.',
          text: '두줄이상 말줄임처리 됩니다. 두줄이상 말줄임처리 됩니다.',
        },
        {
          link: '#none',
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/KV.png',
          alt: '이미지 설명',
          title: 'TWEED COLLECTION',
          text: '가을무드 가득 트위드',
        },
      ],
    };
  },
};
</script>

<template>
  <section class="main-kv">
    <div class="main-slide">
      <div class="swiper-container">
        <div class="tabs-list swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in items" :key="index">
            <a :href="item.link">
              <img :src="item.image" :alt="item.alt" />
              <span>
                <em class="slide-title">{{ item.title }}</em>
                <em class="slide-text">{{ item.text }}</em>
              </span>
            </a>
          </div>
        </div>
        <!-- pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.main-slide {
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
      padding: 0 50px;
      box-sizing: border-box;
      text-align: center;
    }
    em {
      display: block;
      color: #fff;
      word-break: keep-all;
    }
    .slide-title {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 12px;
      text-transform: uppercase;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .slide-text {
      font-size: 40px;
      line-height: 48px;
      font-weight: 500;
      min-height: 96px;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
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

</style>
