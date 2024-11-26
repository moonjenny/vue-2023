<script setup>
import LayerTop from '@/components/common/layer/layerCate/LayerTop.vue'
import LayerPoint from '@/components/common/layer/layerCate/LayerPoint.vue'
import LayerCategory from '@/components/common/layer/layerCate/LayerCategory.vue'
import LayerCategoryAll from '@/components/common/layer/layerCate/LayerCategoryAll.vue'
import LayerFooter from '@/components/common/layer/layerCate/LayerFooter.vue'
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

    }
  }
}
</script>

<template>
  <article class="layer-wrap">
    <!-- Navigation Layer -->
    <section class="layer-login">
      <LayerTop />
      <LayerPoint />
      <LayerCategory />
      <LayerCategoryAll />
      <LayerFooter />
    </section>
    <!-- //Navigation Layer -->
  </article>
</template>

<script>

</script>

<style lang="scss">
.layer-wrap {
  position: fixed;
  top: 0;
  left: -100%;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  transition: left 0.5s ease;

  &.active {
    left: 0;
  }
}

.layer-login {
  height: 100%;
  padding: 0 20px;
  background-color: #fff;
  overflow: auto;
  box-sizing: border-box;
}

</style>