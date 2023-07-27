<script>
export default {
  data() {
    return {
      title : '최근검색어',
      keywords: [
        { word: '원피스', route: '/vue-2023/display/' },
        { word: '스커트', route: '/vue-2023/display/' },
        { word: '반팔티 반팔티 반팔티 반팔티 반팔티 반팔티 반팔티 반팔티 ', route: '/vue-2023/display/' }
      ]
    }
  },
  methods: {
    deleteKeyword(index) {
      this.keywords.splice(index, 1);
    },
    deleteAllKeywords() {
      this.keywords = [];
    },
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
  <div class="search-keyword">
    <div class="search-title">
      <h3>{{ title }}</h3>
      <button type="button" class="btn-delete" @click="deleteAllKeywords">전체삭제</button>
    </div>
    <div class="search-nodata" v-if="keywords.length === 0">
      최근검색어가 없습니다.
    </div>
    <ul class="keyword-list" v-else>
      <li v-for="(keyword, index) in keywords" :key="index">
        <router-link class="link-keyword" :to="keyword.route" @click="closeLayer">
          {{ keyword.word }}
        </router-link>
        <button type="button" class="button-keyword" @click="deleteKeyword(index)">키워드 삭제하기</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
/* 컴포넌트 스타일 */
.search-keyword {
  margin:30px 0 0;
  padding:0 20px;
  .search-title {
    display:flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size:16px;
      font-weight:600;
    }
    .btn-delete {
      padding:5px;
      font-size:13px;
      color:#b6b6b6;
    }
  }
  .search-nodata {
    margin:16px 0;
    font-size:14px;
  }
  .keyword-list {
    display:flex;
    flex-wrap: wrap;
    gap:6px;
    margin:16px 0;
    li{
      display:flex;
      .link-keyword {
        padding:10px 0 10px 10px;
        font-size:14px;
        color:#111;
        background-color:#eee;
      }
      .button-keyword {
        display:block;
        padding:10px 10px 10px 0;
        width:24px;
        font-size:0;
        color:#111;
        background:#eee url(/src/assets/images/common/btn-close.svg) 4px center no-repeat;
        background-size:8px 8px;
      }
    }

  }
}
</style>