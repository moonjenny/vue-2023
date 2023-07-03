<script setup>
  //공통 헤더,내비게이션,푸터
  import CommonHeader from './components/common/CommonHeader.vue'
  import CommonFooter from './components/common/CommonFooter.vue'
  //메인 
  import CommonMain from './pages/CommonMain.vue'

</script>

<template>
  <div class="wrap" id="wrap" msg="wrap">
    <!-- 헤더  -->
    <CommonHeader />
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