<script setup>
  import { defineComponent } from 'vue'
  import { useRoute } from 'vue-router'

  // 공통 헤더
  import SkipMenu from    './components/common/header/Skip.vue'
  import Header from      './components/common/header/Header.vue'
  import HeaderMy from    './components/common/header/HeaderMy.vue'
  import HeaderList from  './components/common/header/HeaderList.vue'

  // 공통 푸터
  import CommonFooter from './components/common/CommonFooter.vue'
  //메인 
  import CommonMain from './pages/CommonMain.vue'

  // 현재 경로를 가져옴
  const route = useRoute()

  // 현재 경로에 따라서 헤더 컴포넌트를 동적으로 선택
  const getHeaderComponent = () => {
    console.log(route.path);
    if (route.path === '/vue-2023/') {
      return Header
    } else if (route.path === '/vue-2023/mypage/') {
      return HeaderMy
    } else if (route.path === '/vue-2023/display/') {
      return HeaderList
    } else {
      return Header
    }
  }
</script>

<template>
  <div class="wrap" id="wrap" msg="wrap">
    <!-- Skip -->
    <SkipMenu />
    
    <!-- 동적으로 선택된 헤더 -->
    <component :is="getHeaderComponent()" />
    <!-- //헤더 -->

    <!-- 컨텐츠 -->
    <router-view></router-view>
    <!-- //컨텐츠 -->

    <!-- 푸터 -->
    <CommonFooter />
    <!-- //푸터 -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>
<style scoped>
</style>