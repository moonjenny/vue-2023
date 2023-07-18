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
    },
    submitSearch() {
      // Perform the search using the searchQuery value
      // Here, you can make an API request or perform any search logic

      // For example, let's populate searchResults with dummy data
      this.searchResults = [
        { id: 1, title: '검색어 1' },
        { id: 2, title: '검색어 2' },
        { id: 3, title: '검색어 3' },
      ];

      // Reset the searchQuery
      this.searchQuery = '';
    },
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
  <!-- 검색 리스트 노출 -->
  <div class="search-list">
    <ul>
      <li v-for="result in searchResults" :key="result.id">
        {{ result.title }}
      </li>
    </ul>
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
      padding:15px 10px;
      height:20px;
      outline:none;
    }
  }
  .btn-search {
    padding:10px 8px 10px 14px;
    width: 50px;
    height: 50px;
    font-size: 0;
    color: #fff;
    background: url(/src/assets/images/common/btn-search.svg) center center no-repeat;
  }
  .btn-back {
    padding:10px 8px 10px 14px;
    width: 50px;
    height: 50px;
    font-size: 0;
    color: #fff;
    background: url(/src/assets/images/common/btn-back.svg) center center no-repeat;
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