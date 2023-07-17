<script setup>
import SearchForm from '@/components/common/layer/layerSch/searchForm.vue'
import NewKeyword from '@/components/common/layer/layerSch/newKeyword.vue'
import PopularKeyword from '@/components/common/layer/layerSch/popularKeyword.vue'
import Rank from '@/components/common/layer/layerSch/rank.vue'
</script>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    closeLayer() {
      // .layer-wrap .close 클래스명 제거
      document.querySelector(".layer-wrap").classList.remove("active");

      // body에서 .active 클래스 제거
			document.body.classList.remove("active");

			window.scrollTo({
        top: 0,
      });
    }
  }
}
</script>

<template>
  <article class="layer-search">
    <section class="search-box">
      <SearchForm />
      <NewKeyword />
      <PopularKeyword />
      <Rank />
    </section>
    <div class="layer-overlay"></div>
  </article>
</template>

<script>

</script>

<style lang="scss">
.layer-search {
  position: fixed;
  top: 0;
  right: -100%;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  transition: right 0.5s ease;

  &.active {
    right: 0;
    .layer-overlay {
      display:block;
    }
  }
  .layer-overlay {
    display:none;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(0, 0, 0, 0.5);
  }
}
.search-box {
  position:relative;
  width:100%;
  height:100%;
  padding:0 0 20px;
  background-color:#fff;
  z-index:1;
  overflow-y:auto;
}
</style>