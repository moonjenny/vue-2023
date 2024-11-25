<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import LayerSearch from '../layer/LayerSearch.vue'

// 검색 레이어의 활성화 여부를 저장하는 ref
const isActive = ref(false)

// GNB 유틸리티 버튼 데이터
const gnbUtils = [
  { name: '검색', className: 'search' },
  { name: '장바구니', className: 'cart', route: '/vue-2023/cart/' },
]

// 현재 라우트 정보를 가져옴
const route = useRoute()

// 각 라우트에 따른 제목을 정의
const titles = {
  '/vue-2023/': '홈',
  '/vue-2023/notice/': '공지사항',
  '/vue-2023/store/': '매장안내',
  '/vue-2023/like/': '관심상품',
  '/vue-2023/cart/': '장바구니',
  '/vue-2023/search/': '검색결과',
  '/vue-2023/login/': '로그인',
  '/vue-2023/mypage/': '마이페이지',
  '/vue-2023/mypage/point/': '포인트',
  '/vue-2023/detail/': '상품상세',
}

// 현재 라우트에 따른 헤더 제목을 계산된 속성으로 정의
const headerTitle = computed(() => titles[route.path] || '타이틀명')

// GNB 유틸리티 버튼 클릭 처리 함수
const handleGnbUtilClick = (gnbUtil) => {
  if (gnbUtil.name === '검색') {
    isActive.value = true
    document.querySelector('.layer-search').classList.add('active')
    document.body.classList.add('active')
    document.querySelector('.layer-search').scrollTo({
      top: 0
    })
  } else if (gnbUtil.route) {
    window.location.href = gnbUtil.route
  }
}

// 뒤로 가기 처리 함수
const goBack = () => {
  history.back()
}

</script>

<template>
  <header v-if="headerTitle === '상품상세'" :class="['header title', 'detail-header']">
    <button type="button" class="btn-back" @click="goBack">
      이전페이지 이동
    </button>
    <div class="header-nav">
      <a href="/vue-2023/" class="link-home"><span class="ico-home">홈</span></a>
    </div>
    <div class="gnb-util">
      <div class="util-cart">
        <button type="button" class="btn-cart" @click="handleGnbUtilClick({ name: '장바구니', route: '/vue-2023/cart/' })">장바구니</button>
      </div>
    </div>
  </header>
  <header v-else :class="['header title']">
    <button type="button" class="btn-back" @click="goBack">
      이전페이지 이동
    </button>
    <div class="header-nav">
      {{ headerTitle }}
    </div>
    <div class="gnb-util">
      <div v-for="(gnbUtil, index) in gnbUtils" :key="index" :class="['util-' + gnbUtil.className]">
        <button
          type="button"
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
.header {
  &.title {
    position: sticky;
    top: 0;
    border-bottom: 1px solid #eee;
    z-index: 10;

    .header-nav {
      flex: 1 1 auto;
      margin:0 10px;
      font-size:18px;
      font-weight: 500;
    }
  }
  .btn-back {
    width: 50px;
    height: 50px;
    font-size: 0;
    color: #fff;
    background: url(/src/assets/images/common/btn-back.svg) 20px center no-repeat;
  }
}
.gnb-util {
  height: 52px;
  padding-right: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  > div {
    width: 32px;
    height: 32px;
    margin-left: 2px;
  }
}
.util-search button,
.util-cart button {
  width: 100%;
  height: 100%;
}
.util-search .btn-search {
  font-size: 0;
  color: #fff;
  background: url(@/assets/images/common/btn-search.svg) center center no-repeat;
}
.util-cart .btn-cart {
  font-size: 0;
  color: #fff;
  background: url(@/assets/images/common/btn-cart.svg) center center no-repeat;
}

.link-home {
  display: block;
  width: 32px;
  height: 32px;
}
.ico-home {
  display: block;
  width: 100%;
  height: 100%;
  font-size:0;
  color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 14.4806L16 7.28062L25 14.4806V25H7V14.4806Z' stroke='black' stroke-width='2'/%3E%3C/svg%3E%0A");
}

</style>
