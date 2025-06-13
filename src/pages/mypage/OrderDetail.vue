<script setup>
// 주문배송상세
import { ref } from 'vue';
// 주문사은품
import OrderGifts from './../../components/mypage/OrderGifts.vue';
// 배송정보
import OrderAddress from './../../components/mypage/OrderAddress.vue';
// 결제상세
import PayDetail from './../../components/mypage/PayDetail.vue';
// 환불금액정보
import PayRefund from './../../components/mypage/PayRefund.vue';

// 라우터 링크 경로
const changeAddressLink = ref("/vue-2023/mypage/changeaddress/"); // 배송지 변경
const cancelOrderLink = ref("/vue-2023/mypage/cancelOrder/"); // 주문전체취소

// --- 주문 상품 데이터 정의 ---
const orders = ref([
  // 첫 번째 주문 데이터 (바이린1 배송상품)
  {
    orderDate: '2022-12-23',
    orderNumber: 'YYMMDDHHMI0000_1', // 고유한 주문번호
    hasCancelButton: true, // 주문 전체 취소 버튼 여부
    deliveryTitle: '바이린1 배송상품', // 첫 번째 주문의 배송 상품 타이틀
    products: [
      {
        thumb: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
        brand: 'LYNN',
        name: '클래식 크롭 테일러드 자켓',
        option: '브라운 / 55',
        gifts: [
          { text: '[사은품]브랜드명 사은품명-1개 (2개)', soldOut: true },
          { text: '[사은품]브랜드명 사은품명-1개 (2개)', soldOut: false }
        ],
        quantity: 2,
        price: '9,000원',
        status: '주문완료',
        buttons: [
          { text: '구매확정', active: true },
          { text: '배송조회', active: false },
          { text: '반품신청', active: false },
          { text: '교환신청', active: false }
        ],
        deliveryFee: '', // 배송비 없음
      },
      {
        gifts: [
          { text: '[추가]맨투맨티셔츠 빨강/L-1개 (총 2개)', soldOut: false }
        ],
        quantity: 1,
        price: '9,000원',
        status: '주문완료',
        buttons: [
          { text: '배송조회', active: false }
        ],
        deliveryFee: '3,000원', // 배송비 있음
      },
      {
        thumb: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png',
        brand: 'LYNN',
        name: '클래식 크롭 테일러드 자켓',
        option: '브라운 / 55',
        gifts: [], // 사은품 없음
        quantity: 1,
        price: '9,000원',
        status: '주문완료',
        buttons: [
          { text: '구매확정', active: true },
          { text: '배송조회', active: false },
          { text: '반품신청', active: false },
          { text: '교환신청', active: false }
        ],
        deliveryFee: '3,000원', // 배송비 있음
      }
    ]
  },
  // 두 번째 주문 데이터 추가 (바이린2 배송상품)
  {
    orderDate: '2023-01-15', // 다른 주문일
    orderNumber: 'YYMMDDHHMI0000_2', // 고유한 주문번호
    hasCancelButton: false, // 이 주문에는 취소 버튼 없음
    deliveryTitle: '바이린2 배송상품', // 두 번째 주문의 배송 상품 타이틀
    products: [
      {
        thumb: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-03.png', // 다른 이미지
        brand: 'ZEUS',
        name: '프리미엄 롱 슬리브 티셔츠',
        option: '블랙 / L',
        gifts: [],
        quantity: 1,
        price: '15,000원',
        status: '배송중',
        buttons: [
          { text: '배송조회', active: true }
        ],
        deliveryFee: '2,500원', // 배송비 있음
      }
    ]
  }
]);
</script>

<template>
  <section class="my-order-detail">
    <div class="my-order-data">
      <dl class="my-order-data-item">
        <dt>주문일</dt>
        <dd>{{ orders[0].orderDate }}</dd>
        <dt>주문번호</dt>
        <dd>{{ orders[0].orderNumber }}</dd>
      </dl>
      <div class="my-order-data-button">
        <router-link :to="changeAddressLink" class="link-black">주문전체취소</router-link>
        <router-link v-if="orders[0].hasCancelButton" :to="cancelOrderLink" class="link-gray">영수증발급</router-link>
      </div>
    </div>

    <div v-for="(order, orderIndex) in orders" :key="orderIndex" class="my-order-product">
      <div class="my-order-product-title">
        <h3>{{ order.deliveryTitle }}</h3>
      </div>

      <div v-for="(product, productIndex) in order.products" :key="productIndex" class="my-order-product-item">
        <div v-if="product.thumb" class="my-order-product-thumb">
          <picture><img :src="product.thumb"></picture>
          <div class="my-order-product-thumb-info">
            <span class="brand">{{ product.brand }}</span>
            <span class="name">{{ product.name }}</span>
            <span class="option">{{ product.option }}</span>
          </div>
        </div>

        <div v-if="product.gifts && product.gifts.length > 0" class="my-order-product-gifts">
          <span v-for="(gift, giftIndex) in product.gifts" :key="giftIndex" class="gifts-item">
            <strong>{{ gift.text.split(']')[0] + ']' }}</strong>{{ gift.text.split(']')[1] }}
            <em v-if="gift.soldOut">* 소진</em>
          </span>
        </div>
        
        <div class="my-order-product-price">
          <span class="quantity">주문수량 {{ product.quantity }}개</span>
          <span class="price">{{ product.price }}</span>
        </div>
        <div class="my-order-product-status">
          <span class="status">{{ product.status }}</span>
          <ul class="buttons">
            <li v-for="(button, buttonIndex) in product.buttons" :key="buttonIndex">
              <button type="button" :class="{ active: button.active }">{{ button.text }}</button>
            </li>
          </ul>
        </div>
        <div v-if="product.deliveryFee" class="my-order-product-delivery">
          <span class="">배송비</span>
          <button type="button">{{ product.deliveryFee }}</button>
        </div>
      </div>
    </div>

    <!-- 주문사은품 정보 -->
    <OrderGifts />

    <!-- 배송정보 -->
    <OrderAddress />

    <!-- 결제상세 -->
    <PayDetail />

    <!-- 환불금액정보 -->
    <PayRefund />

  </section>
</template>

<style lang="scss">
/* 컴포넌트 스타일 */
.my-order-detail {
  .my-order {
    &-product {
      padding: 0 0;
      &-title {
        margin: 60px 20px 24px;
        padding: 24px 0;
        border-top: 1px solid #333333;
        border-bottom: 1px solid #eeeeee;
        h3 {
          font-size: 16px;
          font-weight: 500;
        }
      }
      &-item {
        padding: 0 20px;
      }
      &-delivery {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 22px 0;
        border-bottom: 1px solid #cccccc;
        span {
          line-height: 20px;
          font-size: 13px;
          color: #666666;
        }
        button {
          padding-right: 28px;
          line-height: 20px;
          font-size: 13px;
          font-weight: 500;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='9.5' fill='white' stroke='%23111111'/%3E%3Cpath d='M14 9L10 13L6 9' stroke='%23111111' stroke-linecap='square'/%3E%3C/svg%3E%0A");
          background-repeat: no-repeat;
          background-position: 100% 50%;
        }
      }
    }
    &-data {
      border-top: 0;
      border-bottom: 0;
    }
  }

  // 사은품
  &-gifts {
    margin: 60px 20px;
    h3 {
      padding-bottom: 24px;
      line-height: 24px;
      font-size: 18px;
      font-weight: 500;
      border-bottom: 1px solid #333333;
    }
  }
}
</style>