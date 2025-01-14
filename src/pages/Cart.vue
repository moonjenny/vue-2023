<script setup>
  import { ref, watch } from 'vue';
  //장바구니
  import cartFilter from './../components/cart/cartFilter.vue'
  import cartProduct from './../components/cart/cartProduct.vue'
  import cartPrice from './../components/cart/cartPrice.vue'
  import cartNotice from './../components/cart/cartNotice.vue'

  // 장바구니 데이터 정의
  const shippingGroups = ref([
    // shippingGroups 데이터
    {
      label: '바이린 배송상품',
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
          soldout: true,
        },
      ]
    },
    {
      label: '바이린 배송상품2',
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
        // 옵션 - 가격정보 변경
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
          priceUpdate: true,
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
            { addItemName: '[추가] 맨투맨티셔츠 빨강/L-1개 (총 2개)', addItemPrice: 5000, addItemQuantity: 2, addItemNotice: '* 해당 상품의 판매가능수량은 {0}개 입니다.' },
            { addItemName: '[추가] 맨투맨티셔츠 빨강/L-1개 (총 2개)', addItemPrice: 5000, addItemQuantity: 1, addItemNotice: '* 주문할 수 없습니다.', addItemSold: true },
            { addItemName: '[추가] 맨투맨티셔츠 빨강/L-1개 (총 2개)', addItemPrice: 5000, addItemQuantity: 1, addItemNotice: '* 주문할 수 없습니다.', addItemStop: true }
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
          orderThreshold: '4',
        },
      ]
    }
  ]);
  
</script>

<template>
  <section class="cart">
    <h2 class="cart-title">장바구니</h2>

    <!-- 필터 -->
    <cartFilter :shippingGroups="shippingGroups" />
    <!-- 배송상품 -->
    <cartProduct :shippingGroups="shippingGroups" />
    <!-- 총합계 -->
    <cartPrice :shippingGroups="shippingGroups" />
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