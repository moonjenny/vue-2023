<template>
  <section class="swiper-test">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="swiper-con">slide 1</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-con">slide 2</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-con">slide 3</div>
      </swiper-slide>
      ...
    </swiper>
  </section>
</template>
<script>
  // import Swiper core and required modules
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/swiper-bundle.css'

  // install Swiper modules
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
  };
</script>

<style lang="scss"> 

.swiper-test {
  .swiper-wrapper {
    .swiper-con {
      min-height:100px;
    }
  }
}

</style>