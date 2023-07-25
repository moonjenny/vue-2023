<script>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';

// import swiper module styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
// more module style...

export default {
  data() {
    return {
      model: null,
    };
  },
  setup() {
    const activeTab = ref(0);
    const tabSwiper = ref(null);

    const tabs = ['자켓', '코트', '핸드메이드', '아우터', '원피스', '블라우스', '팬츠', '신발', '기타'];

    const switchTab = (tabIndex) => {
      if (tabSwiper.value) {
        activeTab.value = tabIndex;
        tabSwiper.value.slideTo(tabIndex - 1);
      } else {
        console.error('tabSwiper is null');
      }
    };

    onMounted(() => {
      tabSwiper.value = new Swiper('.display-category .swiper-container', {
        slidesPerView: 'auto',
      });
    });

    return {
      activeTab,
      tabSwiper,
      tabs,
      switchTab,
    };
  },
};
</script>

<template>
  <section class="display-category">
    <div class="swiper-container">
      <ul class="tabs-list swiper-wrapper">
        <li v-for="(item, index) in tabs" :key="index" class="tabs-item swiper-slide" @click="switchTab(index)">
          <a href="javascript:;" :class="{ active: activeTab === index }">{{ item }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.display-category {
  padding: 0 10px;
  border-bottom:1px solid #eee;
  overflow: hidden;
  .swiper-slide {
    width: auto;

    &:last-child {
      margin-right: 0 !important;
    }

    a {
      display: block;
      padding: 14px 12px;
      font-size: 14px;
      color: #666;
      font-weight: 600;
    }
  }
}
</style>
