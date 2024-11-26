<script setup>
  import { defineComponent } from 'vue'
  import { useRoute } from 'vue-router'

  // 헤더 컴포넌트들을 가져옴
  import SkipMenu from    './components/common/header/Skip.vue'
  import Header from      './components/common/header/Header.vue'
  import HeaderTitle from    './components/common/header/HeaderTitle.vue'
  import HeaderList from  './components/common/header/HeaderList.vue'

  // 공통 푸터
  import CommonFooter from './components/common/CommonFooter.vue'
  // 메인 
  import CommonMain from './pages/CommonMain.vue'

  // 현재 경로를 가져옴
  const route = useRoute()

  // 현재 경로에 따라 동적으로 헤더 컴포넌트를 선택하기 위한 계산된 속성
  const getHeaderComponent = () => {
    switch (route.path) {
      case '/vue-2023/':
        return Header
      case '/vue-2023/mypage/':
      case '/vue-2023/mypage/point/':
      case '/vue-2023/notice/':
      case '/vue-2023/store/':
      case '/vue-2023/like/':
      case '/vue-2023/cart/':
      case '/vue-2023/search/':
      case '/vue-2023/login/':
      case '/vue-2023/detail/':
        return HeaderTitle
      case '/vue-2023/display/':
      case '/vue-2023/category/':
        return HeaderList
      default:
        return Header
    }
  }
</script>

<template>
  <div class="wrap" id="wrap" msg="wrap" @scroll="handleScroll">
    <!-- Skip -->
    <SkipMenu />
    
    <!-- 동적으로 선택된 헤더 -->
    <component :is="getHeaderComponent()" :pageTitle="headerTitle" />
    <!-- //헤더 -->

    <!-- 컨텐츠 -->
    <router-view></router-view>
    <!-- //컨텐츠 -->

    <!-- 푸터 -->
    <CommonFooter />
    <!-- //푸터 -->
    
  </div>
</template>


<style scoped>
</style>