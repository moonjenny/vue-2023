<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    
  },
};
</script>

<template>
  <header class="header" id="header">
    마이페이지 헤더
  </header>
  
  <!-- 검색 레이어 -->
  <LayerSearch :class="{ 'active': isActive }" />
</template>

<style lang="scss">
.header{
  position: relative;
  width:100%;
  height:52px;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}
</style>
