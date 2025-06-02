<script setup>
  import { ref, watch } from 'vue';
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

  // 장바구니 데이터 정의
  const shippingGroups = ref([
    // shippingGroups 데이터
    {
      label: '바이린1 배송상품',
      items: [
        // 일반상품
        {
          brand: 'LYNN',
          name: '클래식 크롭 테일러드 자켓',
          options: '브라운 / 55',
          currentPrice: 18000,
          originalPrice: 20000,
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png',
          gifts: [
            { title: '사은품', name: '브랜드명 사은품명-1개', quantity: 2, soldOut: false },
            { title: '사은품', name: '브랜드명 사은품명-1개', quantity: 2, soldOut: true }
          ],
          showGift: false,
          quantity: 1,
          liked: true,
          deliInfo: '배송비 (50,000원 이상 구매 시 무료)',
          deliveryFee: 3000,
          soldout: false,
        },
        // 일반상품 - 품절
        {
          brand: '브랜드',
          name: '품절상품명 품절상품명 품절상품명 품절상품명 품절상품명 품절상품명',
          options: '브라운 / 66',
          currentPrice: 18000,
          originalPrice: 20000,
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png',
          gifts: [
            { title: '사은품', name: '브랜드명 사은품명-1개', quantity: 2, soldOut: true }
          ],
          showGift: false,
          quantity: 1,
          liked: false,
          deliInfo: '배송비 (100,000원 이상 구매 시 무료)',
          deliveryFee: '무료배송',
          soldout: false,
        },
      ]
    },
    {
      label: '바이린2 배송상품',
      items: [
        // 옵션 - 일반1
        {
          brand: 'LYNN',
          name: '클래식 크롭 테일러드 자켓',
          options: '브라운 / 55',
          currentPrice: 18000,
          originalPrice: 20000,
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
          gifts: [
            { title: '사은품', name: '브랜드명 사은품명-1개', quantity: 2, soldOut: true }
          ],
          showGift: false,
          quantity: 1,
          liked: false,
          deliInfo: '배송비 (11월 무료배송 프로모션 : <br>2022.11.01 ~ 2022.11.30)',
          deliveryFee: 3000,
          soldout: false,

          // 추가 옵션
          addItems: [
            { addItemName: '[추가] 맨투맨티셔츠 빨강/L-1개 (총 2개)', addItemPrice: 5000, addItemQuantity: 2 },
          ]
        },
        // 옵션 - 일반2
        {
          brand: 'LYNN',
          name: '클래식 크롭 테일러드 자켓',
          options: '브라운 / 55',
          currentPrice: 18000,
          originalPrice: 20000,
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
          gifts: [
            { title: '사은품', name: '브랜드명 사은품명-1개', quantity: 2, soldOut: true }
          ],
          showGift: false,
          quantity: 1,
          liked: false,
          deliInfo: '배송비 (수량 1개당)',
          deliveryFee: 3000,
          soldout: false,
        },
        // 옵션 - 일반3
        {
          brand: 'LYNN',
          name: '클래식 크롭 테일러드 자켓',
          options: '브라운 / 55',
          currentPrice: 18000,
          originalPrice: 20000,
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
          gifts: [
            { title: '사은품', name: '브랜드명 사은품명-1개', quantity: 2, soldOut: false },
            { title: '사은품', name: '브랜드명 사은품명-1개', quantity: 2, soldOut: true }
          ],
          showGift: false,
          quantity: 1,
          liked: false,
          deliInfo: '배송비 (11월 무료배송 프로모션 : <br>2022.11.01 ~ 2022.11.30)',
          deliveryFee: 3000,
          soldout: false,

          // 추가 옵션
          addItems: [
            { addItemName: '[추가] 맨투맨티셔츠 빨강/L-1개 (총 2개)', addItemPrice: 5000, addItemQuantity: 2, addItemNotice: '' },
            // { addItemName: '[추가] 맨투맨티셔츠 빨강/L-1개 (총 2개)', addItemPrice: 5000, addItemQuantity: 1, addItemNotice: '* 주문할 수 없습니다.', addItemSold: true },
            // { addItemName: '[추가] 맨투맨티셔츠 빨강/L-1개 (총 2개)', addItemPrice: 5000, addItemQuantity: 1, addItemNotice: '* 주문할 수 없습니다.', addItemStop: true }
          ]
        },
        // 옵션 - 최소 주문 수량
        {
          brand: 'LYNN',
          name: '클래식 크롭 테일러드 자켓',
          options: '브라운 / 55',
          currentPrice: 18000,
          originalPrice: 20000,
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
          gifts: [
            { title: '사은품', name: '브랜드명 사은품명-1개', quantity: 2, soldOut: true }
          ],
          showGift: false,
          quantity: 1,
          liked: false,
          deliInfo: '배송비 (수량 1개당)',
          deliveryFee: 3000,
          soldout: false,
          // orderThreshold: '4',
        },
      ]
    }
  ]);
  
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
    <orderProduct :shippingGroups="shippingGroups" />
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