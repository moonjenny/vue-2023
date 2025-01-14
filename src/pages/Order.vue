<script setup>
  //주문서 작성
  import orderJoin from './../components/order/orderJoin.vue'
  import orderAgree from './../components/order/orderAgree.vue'
  import orderInfo from './../components/order/orderInfo.vue'
  import orderAddress from './../components/order/orderAddress.vue'
  import orderProduct from './../components/order/orderProduct.vue'
  import orderPromotion from './../components/order/orderPromotion.vue'
  import orderOverseas from './../components/order/orderOverseas.vue'
  import orderCoupon from './../components/order/orderCoupon.vue'
  import orderPoint from './../components/order/orderPoint.vue'
  import orderPay from './../components/order/orderPay.vue'
  import orderPrice from './../components/order/orderPrice.vue'
  
</script>

<template>
  <section class="order">
    <h2 class="order-title">주문서 작성</h2>

    <!-- 회원가입 -->
    <orderJoin />
    <!-- 비회원 주문 정보수집 동의 -->
    <orderAgree />
    <!-- 주문하시는 분 -->
    <orderInfo />
    <!-- 받으시는 분 -->
    <orderAddress />
    <!-- 배송상품 -->
    <orderProduct />
    <!-- 주문 증정 프로모션 -->
    <orderPromotion />
    <!-- 해외직배송 개인통관 고유부호 -->
    <orderOverseas />
    <!-- 할인 및 혜택 -->
    <orderCoupon />
    <!-- 적립금/예치금 -->
    <orderPoint />
    <!-- 결제정보 -->
    <orderPay />
    <!-- 결제금액정보 -->
    <orderPrice />

  </section>
</template>

<script>
export default {
  // 컴포넌트 로직
}
</script>

<style lang="scss"> 
  .order {
    margin: 32px 20px 60px;
    .order-title {
      padding-bottom: 24px;
      font-size: 24px;
      font-weight: 500;
      border-bottom: 1px solid #333;
    }
  }

</style>