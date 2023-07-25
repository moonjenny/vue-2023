<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
    }
  },
  methods: {
    closeLayer() {
      // .layer-wrap .close 클래스명 제거
      document.querySelector(".layer-search").classList.remove("active");

      // body에서 .active 클래스 제거
			document.body.classList.remove("active");
    }
  }
}
</script>

<template>
  <div class="search-form">
    <button 
      type="button"
      class="btn-back"
      @click="closeLayer"
    >
      검색 레이어 닫기
    </button>
    <!-- 검색 입력 -->
    <form @submit.prevent="submitSearch">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="검색어를 입력해 주세요"
      />
      <button type="submit" class="btn-search">검색</button>
    </form>
  </div>
</template>

<style lang="scss">
.search-form {
  position:sticky;
  top:0;
  display:flex;
  align-items:center;
  height:50px;
  border-bottom:1px solid #eee;
  background-color:#fff;
  form {
    flex:1;
    display:flex;
    align-items:center;
    input{
      flex:1;
      padding:15px 5px;
      height:20px;
      outline:none;
    }
  }
  .btn-search {
    width: 50px;
    height: 50px;
    font-size: 0;
    color: #fff;
    background: url(/src/assets/images/common/btn-search.svg) 10px center no-repeat;
  }
  .btn-back {
    width: 50px;
    height: 50px;
    font-size: 0;
    color: #fff;
    background: url(/src/assets/images/common/btn-back.svg) 20px center no-repeat;
  }

}
.search-list {
  ul {
    li{
      padding:10px;
      color:#333;
      font-size:15px;
      border-bottom:1px solid #eee;
    }
  }
}
</style>