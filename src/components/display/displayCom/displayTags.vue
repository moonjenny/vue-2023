<script>
	import { ref, onMounted } from 'vue';
	import Swiper from 'swiper';

	// import swiper module styles
	import 'swiper/css'
	import 'swiper/css/pagination'
  import 'swiper/swiper-bundle.css'
	// more module style...

	export default {
    data: () => ({
      model: null,
    }),
  setup() {
    const activeTab = ref(0);
		const tabSwiper = ref(null);
		
		const tabs = ['전체', '아우터', '원피스', '블라우스', '팬츠', '신발'];

    const switchTab = (tabIndex) => {
      if (tabSwiper.value) {
        activeTab.value = tabIndex;
        tabSwiper.value.slideTo(tabIndex - 1);
      } else {
        console.error('tabSwiper is null');
      }
    };

    onMounted(() => {
      tabSwiper.value = new Swiper('.display-tabs .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 8,
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

  <section class="display-tabs">
		<div class="swiper-container">
			<ul class="tabs-list swiper-wrapper">
				<li v-for="(item, index) in tabs" :key="index" class="tabs-item swiper-slide" @click="switchTab(index)">
          <a href="javascript:;" :class="{ active: activeTab === index }">{{ item }}</a>
        </li>
			</ul>
		</div>
	</section>

  <!-- Vuetify 이용한 탭메뉴
  <section class="display-tabs">
    <v-card>
      <v-tabs
        center-active
      >
        <v-tab v-for="(item, index) in tabs" :key="index">
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-card>
  </section> -->

</template>

<style lang="scss">

// swiper.js 이용한 탭메뉴
.display-tabs {
  overflow:hidden;
  .swiper-wrapper {
    margin: 24px 20px;
  }

  .swiper-slide {
    width: auto;
    margin-right: 8px;

    &:last-child {
      margin-right: 0 !important;
    }

    a {
      display: block;
      padding: 12px 24px;
      font-size: 14px;
      color: #111;
      border: 1px solid #eee;
    }
  }

  a.active {
    color: #fff;
    border: 1px solid #333;
    background: #333;
  }
}

//Vuetify 이용한 탭메뉴
/* 
.display-tabs {
  .v-card {
    margin:24px 0;
    box-shadow:none;
    .v-slide-group {
      .v-slide-group__container {
        padding:0 12px 0 20px;
        .v-btn {
          display: block;
          padding: 12px 24px;
          font-size: 14px;
          color: #111;
          border: 1px solid #eee;
          margin-right:8px;
          min-width:auto;
          height:auto;
          border-radius:0;
          
          &.v-tab--selected {
            border: 1px solid #333;
            background: #333;
            .v-btn__content {
              color: #fff;
              .v-tab__slider {
                opacity:0;
              }
            }
          }
          .v-btn__content {
            color:#111;
          }
        }
      }
    }
  }
} */
</style>
