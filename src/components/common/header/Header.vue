<script setup>
//검색 레이어
import LayerSearch from '../layer/LayerSearch.vue'
</script>
<script>
export default {
  data() {
    return {
      logoText: 'BYLYNN.SHOP',
      gnbUtils: [
        { name: '검색', className: 'search' },
        { name: '장바구니', className: 'cart', route: '/vue-2023/cart/' },
      ],
      isActive: false
    };
  },
  methods: {
    handleGnbUtilClick(gnbUtil) {
      if (gnbUtil.name === '검색') {
        // 검색 버튼 클릭 시 검색 레이어를 엽니다.
        this.isActive = true;
        // .layer-search .active 클래스명 추가
        document.querySelector(".layer-search").classList.add("active");

        // body에서 .active 클래스 제거
        document.body.classList.add("active");

        //레이어 항상 top으로 이동하기
        // document.querySelector(".layer-search").scrollTo({
        //   top: 0,
        // });
      } else if (gnbUtil.route) {
        // 다른 유틸리티 버튼의 동작 처리
        window.location.href = gnbUtil.route;
      }
    },
  },
};
</script>

<template>
  <header class="header">
    <h1>
      <router-link 
        :to="'/vue-2023/'"
      >
        <span class="logo">{{ logoText }}</span>
      </router-link>
    </h1>
    <div class="gnb-util">
      <div
        v-for="(gnbUtil, index) in gnbUtils"
        :key="index"
        :class="['util-' + gnbUtil.className]"
      >
        <router-link
          v-if="gnbUtil.route"
          :to="gnbUtil.route"
          :class="['btn-' + gnbUtil.className]"
        >
          {{ gnbUtil.name }}
        </router-link>
        <button
          v-else type="button"
          :class="['btn-' + gnbUtil.className]"
          @click="handleGnbUtilClick(gnbUtil)"
        >
          {{ gnbUtil.name }}
        </button>
      </div>
    </div>
  </header>
  
  <!-- 검색 레이어 -->
  <LayerSearch :class="{ 'active': isActive }" />
</template>

<style lang="scss">
.header{
	position: relative;
	width:100%;
	height:52px;
	display:flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	h1 {
    width:198px;
    height:100%;
    a {
      height:100%;
      padding:0 20px;
      display:flex;
      align-items:center;
      .logo {
        font-size:0;
        color:#fff;
        display:block;
        width:100%;
        height:100%;
        background:url(@/assets/images/common/logo.svg) 0 center no-repeat;
      }
    }
  }
}
.gnb-util {
	height:52px;
	padding-right:14px;
	display:flex;
	flex-wrap: wrap;
  align-items: center;
  > div {
    width:32px;
    height:32px;
    margin-left:2px;
  }
}
.util-search button,
.util-cart button {
	width:100%;
	height:100%;
}
.util-search .btn-search {
	font-size:0;
	color:#fff;
	background:url(@/assets/images/common/btn-search.svg) center center no-repeat;
}
.util-cart .btn-cart {
	font-size:0;
	color:#fff;
	background:url(@/assets/images/common/btn-cart.svg) center center no-repeat;
}
</style>
