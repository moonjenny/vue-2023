<script setup>
// 주문/배송조회
import { ref } from 'vue';
import { ko } from 'date-fns/locale';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

// 1. 날짜 범위 선택을 위한 반응형 변수입니다.
// `range` prop을 사용하면 [시작일(Date 객체), 종료일(Date 객체)] 형태의 배열이 저장됩니다.
const selectedDateRange = ref(null);

// 기간 조회 버튼의 선택 상태를 관리하는 변수
const selectedPeriod = ref('3개월'); // 초기값 설정

// 기간 버튼 클릭 시 호출될 함수
const selectPeriod = (period) => {
  selectedPeriod.value = period; // 현재 선택된 기간 업데이트
  const endDate = new Date(); // 오늘 날짜를 종료일로 설정
  let startDate = new Date();

  switch (period) {
    case '3개월':
      startDate.setMonth(endDate.getMonth() - 3);
      selectedDateRange.value = [startDate, endDate];
      break;
    case '6개월':
      startDate.setMonth(endDate.getMonth() - 6);
      selectedDateRange.value = [startDate, endDate];
      break;
    case '1년':
      startDate.setFullYear(endDate.getFullYear() - 1);
      selectedDateRange.value = [startDate, endDate];
      break;
    case '기간조회':
      selectedDateRange.value = null; // 날짜 범위 초기화 (사용자 직접 선택 모드)
      break;
    default:
      break;
  }
};

// 컴포넌트 마운트 시 초기 기간 설정
selectPeriod('3개월');

// 라우터 링크 경로
const changeAddressLink = ref("/vue-2023/mypage/changeaddress/"); // 배송지 변경
const cancelOrderLink = ref("/vue-2023/mypage/cancelOrder/"); // 주문전체취소

// --- 주문 상품 데이터 정의 ---
const orders = ref([
  {
    orderDate: '2022-12-23',
    orderNumber: 'YYMMDDHHMI0000_1', // 고유한 주문번호로 변경
    hasCancelButton: true, // 첫 번째 주문은 주문 전체 취소 버튼이 있도록
    products: [
      {
        thumb: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png',
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
        ]
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
        ]
      },
      {
        thumb: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
        brand: 'LYNN',
        name: '클래식 크롭 테일러드 자켓',
        option: '브라운 / 55',
        gifts: [], // 사은품이 없는 경우 빈 배열
        quantity: 1,
        price: '9,000원',
        status: '주문완료',
        buttons: [
          { text: '구매확정', active: true },
          { text: '배송조회', active: false },
          { text: '반품신청', active: false },
          { text: '교환신청', active: false }
        ]
      }
    ]
  },
  {
    orderDate: '2022-12-23',
    orderNumber: 'YYMMDDHHMI0000_2', // 고유한 주문번호로 변경
    hasCancelButton: false, // 두 번째 주문은 주문 전체 취소 버튼이 없도록
    products: [
      {
        thumb: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png',
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
        ]
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
        ]
      },
      {
        thumb: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
        brand: 'LYNN',
        name: '클래식 크롭 테일러드 자켓',
        option: '브라운 / 55',
        gifts: [],
        quantity: 1,
        price: '9,000원',
        status: '주문완료',
        buttons: [
          { text: '구매확정', active: true },
          { text: '배송조회', active: false },
          { text: '반품신청', active: false },
          { text: '교환신청', active: false }
        ]
      }
    ]
  }
]);
</script>

<template>
  <section class="my-order">
    <div class="my-order-filter">
      <div class="my-order-filter-period">
        <button type="button" :class="{ selected: selectedPeriod === '3개월' }" @click="selectPeriod('3개월')">3개월</button>
        <button type="button" :class="{ selected: selectedPeriod === '6개월' }" @click="selectPeriod('6개월')">6개월</button>
        <button type="button" :class="{ selected: selectedPeriod === '1년' }" @click="selectPeriod('1년')">1년</button>
        <button type="button" :class="{ selected: selectedPeriod === '기간조회' }" @click="selectPeriod('기간조회')">기간조회</button>
      </div>
      <div class="my-order-filter-calendar">
        <Datepicker
          v-model="selectedDateRange"
          range
          placeholder="시작일 ~ 종료일"
          :enable-time-picker="false"
          format="yy년 MM월 dd일"
          :show-icon="true"
          :locale="ko"
          :disabled="selectedPeriod !== '기간조회'"
        />
      </div>
      <div class="my-order-filter-keyword">
        <select>
          <option>전체</option>
        </select>
        <input type="text" placeholder="검색어를 입력해 주세요">
        <button type="button">조회</button>
      </div>
    </div>

    <div v-for="(order, orderIndex) in orders" :key="orderIndex" class="my-order-product">
      <div class="my-order-data">
        <dl class="my-order-data-item">
          <dt>주문일</dt>
          <dd>{{ order.orderDate }}</dd>
          <dt>주문번호</dt>
          <dd>{{ order.orderNumber }}</dd>
        </dl>
        <div class="my-order-data-button">
          <router-link :to="changeAddressLink" class="link-black">배송지 변경</router-link>
          <router-link v-if="order.hasCancelButton" :to="cancelOrderLink" class="link-gray">주문전체취소</router-link>
        </div>
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
      </div>
    </div>

    <div class="my-order-button">
      <button type="button" class="btn-more">더보기</button>
    </div>

  </section>
</template>

<style lang="scss">
/* 컴포넌트 스타일 */
.my-order {
  &-filter {
    padding: 32px 20px;
    background-color: #F6F6F6;
    &-period {
      display: flex;
      flex-wrap: wrap;
      button {
        flex: 1;
        height: 48px;
        font-size: 14px;
        color: #666666;
        border: 1px solid #EEEEEE;
        background-color: #ffffff;
        &.selected {
          color: #111111;
          border-color: #333333;
        }
      }
    }
    &-calendar {
      margin-top: 12px;
      .dp__input {
        padding: 12px 38px;
        height: 48px;
        font-size: 14px;
        border-color: #cccccc;
        border-radius: 0;
        background-color: #ffffff;
      }
      .dp__input_icon {
        padding: 6px 10px;
        width: 20px;
        height: 20px;
        color: #111111;
      }
      .dp--clear-btn {
        .dp__input_icons {
          width: 20px;
          height: 20px;
          color: #666666;
        }
      }
    }
    &-keyword {
      margin-top: 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      select {
        width: 80px;
        height: 48px;
        padding: 15px;
        border-color: #cccccc;
      }
      input[type='text'] {
        width: calc(100% - 156px);
        padding: 15px;
        font-size: 14px;
        border: 1px solid #cccccc;
      }
      button {
        width: 60px;
        padding: 15px;
        font-size: 14px;
        color: #ffffff;
        background-color: #111111;
      }
    }
  }

  // 최근 주문 상품
  &-product {
    padding: 40px 20px 20px;
    &-item {
      margin-bottom: 24px;
    }
    &-thumb {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      picture {
        width: 74px;
        img {
          width: 100%;
          vertical-align: top;
        }
      }
      &-info {
        flex: 1;
        span {
          display: block;
        }
        .brand {
          font-size: 12px;
          color: #999999;
        }
        .name {
          margin-top: 8px;
          font-size: 13px;
          color: #111111;
        }
        .option {
          margin-top: 12px;
          font-size: 13px;
          color: #666666;
        }
      }
    }
    &-gifts {
      margin-top: 24px;
      .gifts-item {
        display: block;
        margin-top: 8px;
        font-size: 13px;
        line-height: 17px;
        color: #111111;
        strong {
          font-weight: 500;
        }
        em {
          margin-left: 4px;
          font-style: normal;
          color: #FF2A00;
        }
      }
    }
    &-price {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .quantity {
        font-size: 13px;
        color: #111111;
      }
      .price {
        font-size: 16px;
        color: #111111;
        font-weight: 700;
      }
    }
    &-status {
      margin-top: 24px;
      padding-bottom: 24px;
      display: flex;
      border-bottom: 1px solid #eeeeee;
      .status {
        padding-top: 7px;
        width: 90px;
        text-align: left;
        font-size: 14px;
        line-height: 18px;
        color: #0000BF;
      }
      ul.buttons {
        flex: 2;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        li {
          flex-basis: calc(50% - 4px);
          button {
            display: block;
            width: 100%;
            padding: 8px;
            text-align: center;
            font-size: 13px;
            line-height: 14px;
            font-weight: 500;
            color: #666666;
            border: 1px solid #666666;
            &.active {
              background-color: #F6F6F6;
              color: #ffffff;
              border-color: #111111;
              background-color: #111111;
            }
          }
        }
      }
    }
    &-nodata {
      padding: 60px 20px;
      text-align: center;
      border-bottom: 1px solid #eeeeee;
      span {
        display: block;
        padding-top: 88px;
        font-size: 14px;
        color: #111111;
        background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45.5859 1L55 10.4141V63H9V1H45.5859Z' stroke='%23333333' stroke-width='2'/%3E%3Crect x='29' y='43' width='6' height='6' rx='3' fill='%23333333'/%3E%3Cpath d='M29.1362 17.9969C29.062 16.3642 30.3657 15 32 15C33.6343 15 34.938 16.3642 34.8638 17.9969L34.0908 35.0021C34.04 36.1199 33.119 37 32 37C30.881 37 29.96 36.1199 29.9092 35.0021L29.1362 17.9969Z' fill='%23333333'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: 50% 0;
      }
    }
  }
  
  &-data {
    margin-bottom: 24px;
    padding: 25px 20px;
    border-top: 1px solid #333333;
    border-bottom: 1px solid #cccccc;
    background-color: #F6F6F6;
    &-item {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 8px 0;
      dt {
        width: 30%;
        font-size: 13px;
        color: #111111;
        font-weight: 500;
      }
      dd {
        width: 70%;
        font-size: 13px;
        color: #666666;
      }
    }
    &-button {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
       a {
        width: calc(50% - 4px);
        display: block;
        padding: 7px 16px;
        text-align: center;
        line-height: 16px;
        font-size: 13px;
        font-weight: 500;
        &.link-black {
          color: #ffffff;
          border: 1px solid #111111;
          background-color: #111111;
        }
        &.link-gray {
          color: #666666;
          border: 1px solid #666666;
          background-color: #ffffff;
        }
      }
    }
  }

  &-button {
    margin: 0 20px 60px;
    .btn-more {
      width: 100%;
      height: 48px;
      text-align: center;
      padding: 12px;
      font-size: 14px;
      font-weight: 500;
      border: 1px solid #333333;
    }
  }
}
</style>