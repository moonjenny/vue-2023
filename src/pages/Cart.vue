<script setup>
  //장바구니
  import cartFilter from './../components/cart/cartFilter.vue'
  import cartProduct from './../components/cart/cartProduct.vue'
  import cartPrice from './../components/cart/cartPrice.vue'
  import cartNotice from './../components/cart/cartNotice.vue'
</script>

<template>
  <section class="cart">
    <h2 class="cart-title">장바구니</h2>

    <!-- 필터 -->
    <cartFilter />
    <!-- 배송상품 -->
    <cartProduct />
    <!-- 총합계 -->
    <cartPrice />
    <!-- 총합계 -->
    <cartNotice />
  </section>
</template>

<script>
export default {
  // 컴포넌트 로직
}
</script>

<style lang="scss"> 
  .cart {
    margin: 32px 20px 60px;
    .cart-title {
      font-size: 24px;
      font-weight: 500;
    }
  }

</style>