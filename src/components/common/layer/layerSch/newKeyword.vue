<script>
export default {
  data() {
    return {
      title : '최근검색어',
      keywords: ['원피스', '스커트', '반팔티'],
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="search-keyword">
    <div class="search-title">{{ title }}</div>
    <div class="search-nodata" v-if="keywords.length === 0">
      최근검색어가 없습니다.
    </div>
    <ul class="keyword-list" v-else>
      <li v-for="(keyword, index) in keywords" :key="index">
        <a href="javascript:;" class="link-keyword">{{ keyword }}</a>
        <button type="button" class="button-keyword">키워드 삭제하기</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
/* 컴포넌트 스타일 */
.search-keyword {
  margin:20px 0 0;
  padding:0 20px;
  .search-title {
    font-size:16px;
    font-weight:600;
  }
  .search-nodata {
    margin:16px 0;
    font-size:14px;
  }
  .keyword-list {
    display:flex;
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
        background:#eee url(/vue-2023/src/assets/images/common/btn-close.svg) 4px center no-repeat;
        background-size:8px 8px;
      }
    }

  }
}
</style>