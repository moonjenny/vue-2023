<script>
export default {
  data() {
    return {
      title : '인기검색어',
      keywords: [
        { name: '원피스', route: '/vue-2023/display/', state: 'up', stateText: '상승' },
        { name: '반팔티', route: '/vue-2023/display/', state: '', stateText: '' },
        { name: '스니커즈', route: '/vue-2023/display/', state: 'down', stateText: '하락' },
        { name: '백팩', route: '/vue-2023/display/', state: 'new', stateText: 'new' },
        { name: '백팩', route: '/vue-2023/display/', state: '', stateText: '' },
        { name: '백팩', route: '/vue-2023/display/', state: '', stateText: '' },
        { name: '백팩', route: '/vue-2023/display/', state: '', stateText: '' },
        { name: '백팩', route: '/vue-2023/display/', state: '', stateText: '' },
        { name: '백팩', route: '/vue-2023/display/', state: '', stateText: '' },
        { name: '스니커즈스니커즈스니커즈 스니커즈스니커즈스니커즈스니커즈 스니커즈스니커즈', route: '/vue-2023/display/', state: 'new', stateText: 'new' },
      ],
    }
  },
  methods: {
    closeLayer() {
      // .layer-wrap .close 클래스명 제거
      document.querySelector(".layer-search").classList.remove("active");

      // body에서 .active 클래스 제거
      document.body.classList.remove("active");
    },
  },
}
</script>

<template>
  <div class="search-popular">
    <div class="search-title">{{ title }}</div>
    <div class="popular-list">
      <router-link v-for="(keyword, index) in keywords" :key="index" :to="keyword.route" @click="closeLayer">
        <span class="rank">{{ index + 1 }}</span>
        <em>{{ keyword.name }}</em>
        <sub :class="['state', keyword.state]">{{ keyword.stateText }}</sub>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
/* 컴포넌트 스타일 */
.search-popular {
  margin:40px 0 0;
  padding:0 20px;
  .search-title {
    font-size:16px;
    font-weight:600;
  }
  .popular-list {
    margin:16px 0 0;
    a {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      padding:4px 0;
      .rank {
        flex-shrink: 0;
        width:32px;
        font-size:18px;
        font-weight:700;
        color:#333;
      }
      em {
        flex:1;
        font-size:15px;
        color:#111;
        display: block;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
      .state {
        margin: 0 0 0 10px;
        width: 24px;
        height: 16px;
        text-align:center;
        font-size:0;
        background:url(/src/assets/images/common/search-state.svg) center center no-repeat;
        &.up {
          background:url(/src/assets/images/common/search-up.svg) center center no-repeat;
        }
        &.down {
          background:url(/src/assets/images/common/search-down.svg) center center no-repeat;
        }
        &.new {
          font-size:11px;
          color:red;
          background:#fff;
        }
      }
    }
  }
}
</style>