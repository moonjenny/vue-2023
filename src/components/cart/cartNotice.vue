<script>
</script>

<template>
  <section class="cart-notice">
    <ul class="notice-list">
      <li>장바구니에 담을 수 있는 상품의 품목은 최대 {0}개입니다.</li>
      <li>오랫동안 장바구니에 보관된 상품을 주문하실 경우, 가격이나 혜택이 변동 될 수 있습니다.</li>
      <li>구매하기 선택 시, 구매시점에 품절된 상품은 제외하고 주문이 진행됩니다.</li>
    </ul>
  </section>
</template>

<style lang="scss"> 
  .cart-notice {
    margin: 40px 0;
    .notice-list {
      li {
        position: relative;
        padding-left: 12px;
        font-size: 13px;
        line-height: 19px;
        color: #666;
        &::before {
          content:'';
          position: absolute;
          top: 8px;
          left: 5px;
          width: 2px;
          height: 2px;
          border-radius: 2px;
          background-color: #111;
        }
        + li {
          margin-top: 4px;
        }
      }
    }

  }
</style>