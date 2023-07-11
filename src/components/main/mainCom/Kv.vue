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
				items: [
					{
						link: 'javascript:;',
						image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/KV.png',
						alt: '이미지 설명',
						title: 'TWEED COLLECTION',
						text: '가을무드 가득 트위드',
					},
					{
						link: 'javascript:;',
						image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/KV.png',
						alt: '이미지 설명',
						title: 'TITLE 한줄이상 말줄임처리 됩니다. 한줄이상 말줄임처리 됩니다.',
						text: '두줄이상 말줄임처리 됩니다. 두줄이상 말줄임처리 됩니다.',
					},
					{
						link: 'javascript:;',
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
			<swiper
				:slides-per-view="1"
				:pagination="{ clickable: false }"
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
            </span>
          </a>
				</swiper-slide>
			</swiper>
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